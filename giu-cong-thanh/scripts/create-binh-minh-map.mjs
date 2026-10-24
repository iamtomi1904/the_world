// Seed the editable Tiled map once. Subsequent builds compile the authored TMJ, never overwrite it.
import {readFileSync,writeFileSync,existsSync,mkdirSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {buildDungeon} from './dungeon-layouts.mjs';
const root=fileURLToPath(new URL('../',import.meta.url));
const folder=root+'public/mmorpg/maps/';mkdirSync(folder,{recursive:true});
const source=folder+'binh-minh.tmj';
const old=JSON.parse(readFileSync(root+'public/design-preview/v01-complete-map-r001/walk-map.json','utf8'));
const distance=(x,y,a,b)=>{const dx=b[0]-a[0],dy=b[1]-a[1],t=Math.max(0,Math.min(1,((x-a[0])*dx+(y-a[1])*dy)/(dx*dx+dy*dy||1)));return Math.hypot(x-a[0]-t*dx,y-a[1]-t*dy)};
const onRoad=(x,y,margin=0)=>old.scenes.world.paths.some(p=>p.points.slice(1).some((v,i)=>distance(x,y,p.points[i],v)<p.width/2+margin));
if(!existsSync(source)){
  const width=100,height=75,cell=10,data=[];
  for(let y=0;y<height;y++)for(let x=0;x<width;x++){
    const bx=x*cell+5,by=y*cell+5,river=690+18*Math.sin(by/130);
    let type=onRoad(bx,by,8)?2:1;
    if(old.scenes.world.floorRects.some(r=>bx>=r[0]-12&&bx<=r[0]+r[2]+12&&by>=r[1]-12&&by<=r[1]+r[3]+12))type=2;
    if(distance(bx,by,[385,190],[540,280])<12)type=5;
    if(Math.abs(bx-river)<43)type=3;
    // Dry stone bridge deck is the only crossing of the deep river.
    if(bx>=615&&bx<=765&&by>=380&&by<=400)type=4;
    if(x===0||y===0||x===width-1||y===height-1)type=3;
    data.push(type);
  }
  const objects=[];let id=1;
  const add=(kind,x,y,width,extra={})=>objects.push({id:id++,name:kind+'-'+id,type:kind,x:x*3,y:y*3,width:width*3,height:0,point:true,properties:Object.entries(extra).map(([name,value])=>({name,type:typeof value==='number'?'float':'string',value}))});
  for(const [x,y]of [[350,350],[265,438],[438,450],[170,590],[250,655],[113,135],[850,245]])add('cottage',x,y,96);
  add('bridge',690,390,160);
  for(const [x,y]of [[385,365],[304,447],[465,454],[200,602],[879,259]]){add('lamp',x,y,18);add('barrel',x-12,y+4,12);add('pot',x+12,y+2,12);}
  for(const [x,y]of [[325,362],[376,362],[240,450],[290,450],[417,462],[461,462]])add('pot',x,y,12);
  let seed=947;const random=()=>{seed=(1664525*seed+1013904223)>>>0;return seed/4294967296};
  for(let i=0;i<560;i++){
    const x=25+random()*950,y=35+random()*690,kind=['oak','birch','willow','orchard'][i%4];
    const tile=data[Math.floor(y/10)*100+Math.floor(x/10)];
    if(tile!==1||onRoad(x,y,23)||objects.some(o=>Math.hypot(o.x/3-x,o.y/3-y)<(o.type==='cottage'?72:35)))continue;
    if(old.scenes.world.portals.some(p=>Math.hypot(p.at[0]-x,p.at[1]-y)<40))continue;
    if(old.landmarks.some(p=>Math.hypot(p.at[0]-x,p.at[1]-y)<35))continue;
    add(kind,x,y,kind==='birch'?49:58+random()*14);
  }
  for(let i=0;i<450;i++){
    const x=20+random()*960,y=30+random()*690;
    if(data[Math.floor(y/10)*100+Math.floor(x/10)]!==1)continue;
    if(objects.some(o=>o.type==='cottage'&&Math.hypot(o.x/3-x,o.y/3-y)<65))continue;
    add(i%3===0?'flowers':'grass',x,y,i%3===0?14:16);
  }
  const portals=old.scenes.world.portals.map(p=>({id:id++,name:p.name,type:'portal',x:p.at[0]*3,y:p.at[1]*3,point:true,properties:[{name:'target',type:'string',value:p.target}]}));
  const markers=old.landmarks.map(p=>({id:id++,name:p.name,type:'landmark',x:p.at[0]*3,y:p.at[1]*3,point:true}));
  markers.push({id:id++,name:'spawn',type:'spawn',x:1050,y:1215,point:true});
  const tiled={type:'map',version:'1.10',tiledversion:'1.12.2',orientation:'orthogonal',renderorder:'right-down',width,height,tilewidth:30,tileheight:30,infinite:false,nextobjectid:id,nextlayerid:5,
    properties:[{name:'design',type:'string',value:'Bình Minh cấp 1–10; no flying monsters; edit this source, then npm run mmo:build'}],
    tilesets:[{firstgid:1,name:'BinhMinh',tilewidth:30,tileheight:30,tilecount:5,columns:5,image:'../assets/ground-atlas.svg',imagewidth:150,imageheight:30}],
    layers:[{id:1,name:'Ground',type:'tilelayer',width,height,x:0,y:0,visible:true,opacity:1,data},
      {id:2,name:'WorldObjects',type:'objectgroup',draworder:'topdown',visible:true,opacity:1,objects},
      {id:3,name:'Portals',type:'objectgroup',visible:true,opacity:1,objects:portals},
      {id:4,name:'Markers',type:'objectgroup',visible:true,opacity:1,objects:markers}]};
  writeFileSync(source,JSON.stringify(tiled,null,2)+'\n');
}
const tiled=JSON.parse(readFileSync(source,'utf8'));
const layer=name=>tiled.layers.find(l=>l.name===name);
const props=o=>Object.fromEntries((o.properties||[]).map(p=>[p.name,p.value]));
const worldWidth=tiled.width*tiled.tilewidth,worldHeight=tiled.height*tiled.tileheight;
if(tiled.orientation!=='orthogonal'||![15,30].includes(tiled.tilewidth)||tiled.tileheight!==tiled.tilewidth||worldWidth>=10000||worldHeight>=10000||worldWidth<3000||worldHeight<2250)throw Error('Unsupported map geometry or database coordinate bounds.');
if(layer('Ground')?.data?.length!==tiled.width*tiled.height||layer('Ground').data.some(v=>!Number.isInteger(v)||v<1||v>7))throw Error('Invalid ground tile IDs.');
const allowed=['detail','cottage','bridge','lamp','barrel','pot','fence','oak','birch','willow','orchard','flowers','grass','flora','rock','sign','building','entrance','crop','footbridge','cliff','ridge','stairs','rampart','fort-gate','mountain','boulders','pebbles'];
const ids=new Set();
for(const o of layer('WorldObjects').objects){
  if(ids.has(o.id)||!allowed.includes(o.type)||![o.x,o.y,o.width].every(Number.isFinite)||o.width<=0||o.x<0||o.y<0||o.x>worldWidth||o.y>worldHeight)throw Error('Invalid world object '+o.id);
  ids.add(o.id);
}
const objects=layer('WorldObjects').objects.map(o=>{
  const value={id:String(o.id),kind:o.type,x:o.x/3,y:o.y/3,width:o.width/3,...props(o)};
  if(['oak','birch','willow','orchard'].includes(o.type))value.radius=6;
  if(o.type==='cottage')value.collider=[value.x-value.width*.375,value.y-value.width/3,value.width*.75,value.width/3];
  if(o.type==='barrel')value.radius=5;
  if(o.type==='lamp')value.radius=3;
  if(o.type==='pot')value.radius=4;
  if(o.type==='rock'||o.type==='sign')value.radius=4;
  if(o.type==='building'){
    const small=['well','fire','bell','survey'].includes(value.asset);
    value.collider=[value.x-value.width*(small?.25:.35),value.y-value.width*(small?.15:.25),value.width*(small?.5:.7),value.width*(small?.15:.25)];
  }
  if(o.type==='entrance')value.collider=[value.x-value.width*.45,value.y-value.width*.4,value.width*.9,value.width*.4];
  if(o.type==='mountain')value.collider=[value.x-value.width*.38,value.y-value.width*.4,value.width*.76,value.width*.4];
  if(o.type==='rampart'||o.type==='fort-gate')value.collider=[value.x-value.width*.5,value.y-12,value.width,12];
  if(o.type==='boulders')value.radius=8;
  if(o.type==='detail'&&['bench','cart','wood','shrine','dummy','table'].includes(value.asset))value.collider=[value.x-value.width*.32,value.y-value.width*.16,value.width*.64,value.width*.16];
  return value;
});
const bridge=objects.find(o=>o.kind==='bridge');
if(bridge){for(const offset of [-16,16])objects.push({id:'bridge-rail-'+offset,kind:'rail-collider',x:bridge.x,y:bridge.y+offset,width:0,collider:[bridge.x-bridge.width*.47,bridge.y+offset,bridge.width*.94,3]});}
const footbridge=objects.find(o=>o.kind==='footbridge');
if(footbridge)for(const side of [-1,1])objects.push({id:'wood-rail-'+side,kind:'rail-collider',x:footbridge.x+side*19,y:footbridge.y-50,width:0,collider:[footbridge.x+side*19-1.3,footbridge.y-92,2.6,80]});
const markers=layer('Markers').objects,spawn=markers.find(o=>o.type==='spawn');
const world={...old.scenes.world,name:'Bình Minh · cấp 1–10',image:undefined,foreground:undefined,blockedRects:[],
  size:[tiled.width*tiled.tilewidth/3,tiled.height*tiled.tileheight/3],scale:3,spawn:[spawn.x/3,spawn.y/3],
  grid:{width:tiled.width,height:tiled.height,cell:tiled.tilewidth/3,data:layer('Ground').data},objects,
  elevation:layer('Elevation')?{width:tiled.width,height:tiled.height,cell:tiled.tilewidth/3,data:layer('Elevation').data}:undefined,
  portals:layer('Portals').objects.map(o=>({id:props(o).target,name:o.name,at:[o.x/3,o.y/3],target:props(o).target}))};
if(tiled.properties.some(p=>p.name==='geologyRevision'&&p.value>=7)){
 const {navigation,...geology}=JSON.parse(readFileSync(folder+'binh-minh-geology.json','utf8'));
 world.navigation={...navigation,cell:navigation.cell/3};world.geology=geology;
}
const interiors=Object.fromEntries(['DG','ECO1','ECO2'].map(id=>[id,buildDungeon(id,old.scenes[id])]));
const revision=tiled.properties.some(p=>p.name==='compositionRevision'&&p.value===6)?6:5;
const legacyRemap=[[[1050,1215],[2160,2295]],[[510,1875],[1020,3780]],[[360,480],[720,900]],[[600,1605],[1260,3105]],[[1560,1740],[3180,3550]],[[2070,1170],[4000,2385]],[[2580,810],[5100,1575]],[[2490,525],[4980,990]],[[1620,615],[1980,1170]],[[2790,1185],[5280,2520]]];
const config={...old,version:revision,legacyRemap,status:'Composition follows approved full-map reference',scenes:{world,...interiors},landmarks:markers.filter(o=>o.type==='landmark').map(o=>({name:o.name,at:[o.x/3,o.y/3]}))};
writeFileSync(folder+'runtime-map.json',JSON.stringify(config)+'\n');
console.log(`Map compiled: ${world.grid.width}×${world.grid.height} tiles, ${objects.length} objects, ${world.portals.length} portals.`);
