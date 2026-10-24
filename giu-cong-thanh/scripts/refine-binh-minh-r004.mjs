import {readFileSync,writeFileSync,copyFileSync,existsSync} from 'node:fs';
const folder=new URL('../public/mmorpg/maps/',import.meta.url),file=new URL('binh-minh.tmj',folder);
const map=JSON.parse(readFileSync(file));
if(map.properties.some(p=>p.name==='layoutRevision'&&p.value===4)){console.log('Layout r004 already authored');process.exit(0);}
const backup=new URL('history/binh-minh-v3.tmj',folder);if(!existsSync(backup))copyFileSync(file,backup);
const ground=map.layers.find(l=>l.name==='Ground'),layer=map.layers.find(l=>l.name==='WorldObjects'),cell=map.tilewidth;
const at=(x,y)=>ground.data[Math.floor(y/cell)*map.width+Math.floor(x/cell)];
// Close small notches in the road, preserving every water/bridge cell.
for(let pass=0;pass<2;pass++){const before=[...ground.data];for(let y=2;y<map.height-2;y++)for(let x=2;x<map.width-2;x++){
 const i=y*map.width+x;if(before[i]!==1)continue;
 const count=[-1,1,-map.width,map.width].filter(d=>before[i+d]===2).length;
 if(count>=2)ground.data[i]=2;
}}
const trees=new Set(['oak','birch','willow','orchard']),kept=[];
function clearRoad(o){
 for(let y=o.y-o.width*.75;y<=o.y+30;y+=15)for(let x=o.x-o.width*.42;x<=o.x+o.width*.42;x+=15)
  if([2,4].includes(at(x,y)))return false;
 return true;
}
// Retain species habitats and opaque trunk/crown joints; create breathing room.
for(const o of layer.objects.filter(o=>trees.has(o.type))){
 if(!clearRoad(o)||kept.some(p=>Math.hypot(p.x-o.x,p.y-o.y)<Math.max(125,(p.width+o.width)*.35)))continue;
 kept.push(o);
}
let flora=0;layer.objects=layer.objects.filter(o=>!trees.has(o.type)&& (o.type!=='flora'||(++flora%2===0))).concat(kept);
let id=map.nextobjectid;
const add=(type,x,y,width,extra={})=>layer.objects.push({id:id++,name:type+'-'+id,type,x,y,width,height:0,point:true,properties:Object.entries(extra).map(([name,value])=>({name,type:typeof value==='number'?'float':'string',value}))});
const markers=map.layers.find(l=>l.name==='Markers').objects;
// Trail signs stand beside junctions, never on a portal or its interaction area.
for(const p of markers.filter(p=>p.type==='landmark'))if(at(p.x+72,p.y+40)===1)add('sign',p.x+72,p.y+40,42);
for(const o of kept.filter((_,i)=>i%5===0))if(at(o.x+65,o.y+20)===1)add('rock',o.x+65,o.y+20,38);
for(const o of layer.objects.filter(o=>o.type==='cottage')){
 for(const side of [-1,1])if(at(o.x+side*120,o.y+32)===1)add('fence',o.x+side*120,o.y+32,85);
}
map.nextobjectid=id;map.properties.push({name:'layoutRevision',type:'int',value:4});
writeFileSync(file,JSON.stringify(map,null,2)+'\n');console.log({trees:kept.length,flora:layer.objects.filter(o=>o.type==='flora').length,objects:layer.objects.length});
