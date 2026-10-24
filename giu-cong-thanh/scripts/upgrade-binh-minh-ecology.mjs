// Explicit one-time authored revision. Normal mmo:build never re-randomizes a map.
import {readFileSync,writeFileSync,copyFileSync,existsSync,mkdirSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
const folder=fileURLToPath(new URL('../public/mmorpg/maps/',import.meta.url));
const file=folder+'binh-minh.tmj',map=JSON.parse(readFileSync(file,'utf8'));
if(map.properties?.some(p=>p.name==='ecologyRevision'&&p.value===3)){console.log('Ecology revision 3 already authored; no changes.');process.exit(0);}
mkdirSync(folder+'history',{recursive:true});if(!existsSync(folder+'history/binh-minh-v2.tmj'))copyFileSync(file,folder+'history/binh-minh-v2.tmj');
const legacy=JSON.parse(readFileSync(new URL('../public/design-preview/v01-complete-map-r001/walk-map.json',import.meta.url),'utf8'));
const width=400,height=300,cell=15,worldWidth=width*cell,worldHeight=height*cell;
const roads=legacy.scenes.world.paths.map(p=>({points:p.points.map(v=>v.map(n=>n*3)),width:p.width*3+12}));
roads.push(...[
  [[1050,1530],[1050,2260],[1420,2670],[1800,2820],[2090,3180],[2520,3240],[3550,3200],[4400,3510],[5310,3210]],
  [[510,1875],[540,2530],[420,3120],[900,3750],[1560,3780],[2340,3840],[3300,3870],[4140,3960],[5280,3720],[5310,2460]],
  [[2580,810],[3300,1050],[3750,1500],[4560,1560],[5100,2100],[5310,2460],[4650,2700],[4400,3510]],
  [[3750,1500],[3790,2290],[3550,3200]],
  [[1420,2670],[1250,3180],[1560,3780]],
  [[4650,2700],[4100,2550],[3790,2290]],
  [[3300,1050],[3550,570],[4500,540],[5130,840],[5100,2100]],
  [[2520,3240],[2840,2650],[3300,2460],[3790,2290]]
].map(points=>({points,width:60})));
const distance=(x,y,a,b)=>{const dx=b[0]-a[0],dy=b[1]-a[1],t=Math.max(0,Math.min(1,((x-a[0])*dx+(y-a[1])*dy)/(dx*dx+dy*dy||1)));return Math.hypot(x-a[0]-t*dx,y-a[1]-t*dy);};
const onRoad=(x,y,margin=0)=>roads.some(p=>p.points.slice(1).some((b,i)=>distance(x,y,p.points[i],b)<p.width/2+margin));
const creek=[[1155,570],[1620,840]],southCreek=[[660,2440],[1020,2580],[1470,2700],[1990,2780]];
const onCreek=(x,y)=>[creek,southCreek].some(p=>p.slice(1).some((b,i)=>distance(x,y,p[i],b)<26));
const data=[];
for(let y=0;y<height;y++)for(let x=0;x<width;x++){
  const px=x*cell+cell/2,py=y*cell+cell/2,river=2070+54*Math.sin(py/390);
  let tile=onRoad(px,py)?2:1;
  // Small clearings around the old settlements, rather than giant dirt rectangles.
  if([[1050,1215,78,52],[510,1875,65,50],[2580,810,65,50]].some(([cx,cy,rx,ry])=>((px-cx)/rx)**2+((py-cy)/ry)**2<1))tile=2;
  if(onCreek(px,py))tile=5;
  if(Math.abs(px-river)<129)tile=3;
  if(px>=1845&&px<=2295&&py>=1140&&py<=1200)tile=4;
  // Optional southern ford; the dry bridge remains the bypass.
  if(Math.abs(py-3180)<37&&Math.abs(px-river)<145)tile=5;
  if(x<3||y<3||x>=width-3||y>=height-3)tile=6;
  data.push(tile);
}
const ground=map.layers.find(l=>l.name==='Ground');Object.assign(ground,{width,height,data});
const sourceObjects=map.layers.find(l=>l.name==='WorldObjects');
const objects=sourceObjects.objects.filter(o=>!['oak','birch','willow','orchard','grass','flowers','flora'].includes(o.type));
const markers=map.layers.find(l=>l.name==='Markers').objects,portals=map.layers.find(l=>l.name==='Portals').objects;
let next=Math.max(map.nextobjectid,...map.layers.flatMap(l=>(l.objects||[]).map(o=>o.id)))+1;
for(const[name,x,y]of [['Bãi Cỏ Nam',1420,2670],['Bờ Suối Hạ',2090,3180],['Vườn Cây Phía Nam',3550,3200],['Lối Rừng Đông',4560,1560],['Bìa Rừng Xa',5280,3720],['Lối Vòng Bắc',4500,540]])markers.push({id:next++,name,type:'landmark',x,y,point:true});
const add=(kind,x,y,w,extra={})=>{const id=next++;objects.push({id,name:kind+'-'+id,type:kind,x:Math.round(x),y:Math.round(y),width:Math.round(w),height:0,point:true,properties:Object.entries(extra).map(([name,value])=>({name,type:typeof value==='number'?'float':typeof value==='boolean'?'bool':'string',value}))});};
let seed=948;const random=()=>{seed=(1664525*seed+1013904223)>>>0;return seed/4294967296;};
const terrain=(x,y)=>data[Math.floor(y/cell)*width+Math.floor(x/cell)];
const buildings=objects.filter(o=>o.type==='cottage');
const protectedPoint=(x,y)=>[...markers,...portals].some(p=>Math.hypot(p.x-x,p.y-y)<65)||buildings.some(p=>Math.hypot(p.x-x,p.y-y)<185);
const treeKinds=new Set(['oak','birch','willow','orchard']);
function tree(x,y,kind,w){
  if(x<65||y<90||x>worldWidth-65||y>worldHeight-65||![1,6].includes(terrain(x,y))||onRoad(x,y,32)||protectedPoint(x,y))return;
  if(objects.some(o=>treeKinds.has(o.type)&&Math.hypot(o.x-x,o.y-y)<72))return;
  add(kind,x,y,w,{flip:random()>.5,habitat:kind==='willow'?'river':kind==='orchard'?'orchard':'woodland'});
}
const groves=[
  [480,550,350,'woodland'],[520,1330,280,'woodland'],[1400,410,330,'woodland'],[1450,1450,280,'woodland'],
  [760,1960,300,'orchard'],[2590,1550,330,'woodland'],[2880,500,300,'woodland'],
  [3660,680,400,'woodland'],[4930,650,540,'woodland'],[4270,1840,480,'woodland'],
  [700,3050,510,'woodland'],[1440,3360,380,'woodland'],[3150,3490,430,'orchard'],
  [4850,3290,540,'woodland'],[5350,4000,300,'woodland'],[3450,4200,390,'woodland']
];
for(const[cx,cy,r,habitat]of groves)for(let i=0;i<85;i++){
  const angle=random()*Math.PI*2,d=Math.sqrt(random())*r,x=cx+Math.cos(angle)*d,y=cy+Math.sin(angle)*d*.72;
  const kind=habitat==='orchard'?'orchard':random()<.7?'oak':'birch';tree(x,y,kind,kind==='birch'?154+random()*28:185+random()*45);
}
// River trees belong near water; they are not sprinkled through every habitat.
for(let y=180;y<worldHeight-150;y+=140)for(const side of [-1,1]){
  const x=2070+54*Math.sin(y/390)+side*(190+random()*70);tree(x,y,'willow',195+random()*30);
}
// Dense forest margins replace the old rectangular water border.
for(let x=90;x<worldWidth-70;x+=95){tree(x,95+random()*30,'oak',200);tree(x,worldHeight-90-random()*30,'oak',210);}
for(let y=170;y<worldHeight-110;y+=110){tree(95+random()*35,y,'birch',175);tree(worldWidth-100-random()*35,y,'oak',215);}
// Cluster several modest plants around one anchor, with breathing room between patches.
const patches=[];
for(let i=0;i<460;i++){
  const x=100+random()*(worldWidth-200),y=140+random()*(worldHeight-280);
  if(terrain(x,y)!==1||onRoad(x,y,8)||protectedPoint(x,y))continue;
  patches.push([x,y]);
}
for(const o of objects.filter(o=>treeKinds.has(o.type)))if(random()<.75)patches.push([o.x+(random()-.5)*90,o.y+15]);
for(const[cx,cy]of patches){
  const variant=onCreek(cx,cy)||Math.abs(cx-(2070+54*Math.sin(cy/390)))<190?3:random()<.32?2:random()<.5?1:0;
  const count=3+Math.floor(random()*4);
  for(let j=0;j<count;j++){
    const a=random()*Math.PI*2,r=random()*55,x=cx+Math.cos(a)*r,y=cy+Math.sin(a)*r*.55;
    if(x<50||y<60||x>worldWidth-50||y>worldHeight-50||terrain(x,y)!==1||onRoad(x,y,4)||protectedPoint(x,y))continue;
    const v=j===0?variant:random()<.26?4+Math.floor(random()*2):variant;
    add('flora',x,y,(v===2?55:v===3?42:29)+random()*16,{variant:v,flip:random()>.5});
  }
}
sourceObjects.objects=objects;map.width=width;map.height=height;map.tilewidth=cell;map.tileheight=cell;
map.nextobjectid=next;Object.assign(map.tilesets[0],{tilecount:6,columns:6,tilewidth:cell,tileheight:cell,imagewidth:cell*6,imageheight:cell});
map.properties=[...(map.properties||[]),{name:'ecologyRevision',type:'int',value:3},{name:'legacyOriginPreserved',type:'bool',value:true}];
writeFileSync(file,JSON.stringify(map,null,2)+'\n');
console.log(JSON.stringify({world:[worldWidth,worldHeight],tiles:[width,height],trees:objects.filter(o=>treeKinds.has(o.type)).length,flora:objects.filter(o=>o.type==='flora').length,legacyCoordinates:'unchanged'}));
