import {readFileSync,writeFileSync,copyFileSync,existsSync} from 'node:fs';
import {river,streams,roads,road,on,polygon,terraces,curve,distance} from './binh-minh-geography.mjs';
const dir=new URL('../public/mmorpg/maps/',import.meta.url),file=new URL('binh-minh.tmj',dir),map=JSON.parse(readFileSync(file));
if(map.properties.some(p=>p.name==='geologyRevision'&&p.value===8)){console.log('Geology8 already authored');process.exit(0);}
const backup=new URL('history/binh-minh-v7.tmj',dir);if(!existsSync(backup))copyFileSync(file,backup);
const width=1200,height=900,cell=5,nav=new Array(width*height),layers=new Array(width*height),faces=[];
const closed=p=>{const out=[];for(let i=0;i<p.length;i++){const a=p[(i+p.length-1)%p.length],b=p[i],c=p[(i+1)%p.length],d=p[(i+2)%p.length];for(let j=0;j<6;j++){const t=j/6;out.push([0,1].map(k=>.5*(2*b[k]+(-a[k]+c[k])*t+(2*a[k]-5*b[k]+4*c[k]-d[k])*t*t+(-a[k]+3*b[k]-3*c[k]+d[k])*t*t*t)));}}return out;};
const basin={name:'Thung trũng Đồng Ruộng Gãy Bờ',level:-1,polygon:[[2320,2900],[3450,2860],[3970,3110],[4100,3660],[3930,4210],[2740,4280],[2260,3780]]};
const regions=[...terraces.map(t=>({...t,polygon:closed(t.polygon)})),{...basin,polygon:closed(basin.polygon)}];
const surface=(x,y)=>{let level=0;for(const t of regions)if(polygon(x,y,t.polygon)){if(t.level>0)level=Math.max(level,t.level);else if(level===0)level=-1;}return level;};
function bounds(p){return[Math.min(...p.map(v=>v[0])),Math.min(...p.map(v=>v[1])),Math.max(...p.map(v=>v[0])),Math.max(...p.map(v=>v[1]))];}
function riverShape(p,id){
 const left=[],right=[],bedLeft=[],bedRight=[],shoreLeft=[],shoreRight=[];
 for(let i=0;i<p.points.length;i++){const v=p.points[i],a=p.points[Math.max(0,i-1)],b=p.points[Math.min(p.points.length-1,i+1)],dx=b[0]-a[0],dy=b[1]-a[1],l=Math.hypot(dx,dy)||1,n=[-dy/l,dx/l];
  const r=p.width*.5*(1+.15*Math.sin(i*.53)+.08*Math.sin(i*1.27)+(id==='stream-0'?.45*Math.exp(-(((v[0]-3300)/450)**2)):0)),bed=r+18,outer=r+(id==='river'?48:34);
  for(const [array,sign,radius]of [[left,1,r],[right,-1,r],[bedLeft,1,bed],[bedRight,-1,bed],[shoreLeft,1,outer],[shoreRight,-1,outer]])array.push([v[0]+n[0]*sign*radius,v[1]+n[1]*sign*radius]);
 }
 const water=[...left,...right.reverse()],bed=[...bedLeft,...bedRight.reverse()],bank=[...shoreLeft,...shoreRight.reverse()];
 return{id,deep:id==='river',water,bed,bank,center:p.points,bounds:bounds(bank)};
}
const hydrology=[riverShape(river,'river'),...streams.map((p,i)=>riverShape(p,'stream-'+i))];
// One connected irrigation feeder, not a disconnected grid of water decals.
hydrology.push(riverShape({points:curve([[2400,3380],[2485,3450],[2500,3575],[3000,3590],[3850,3590]]),width:18},'irrigation'));
const decks=[{id:'stone',rect:[3630,2340,740,90]},{id:'wood',rect:[1210,2945,100,290]},{id:'culvert',rect:[3130,3540,100,90]}];
const insideRect=(x,y,r)=>x>=r[0]&&y>=r[1]&&x<=r[0]+r[2]&&y<=r[1]+r[3];
const rampNear=(x,y)=>road(x,y,18);
for(const region of regions){const p=region.polygon,area=p.reduce((n,v,i)=>{const b=p[(i+1)%p.length];return n+v[0]*b[1]-b[0]*v[1];},0),sign=area>0?1:-1,depth=region.level<0?36:region.level===2?128:105;
 const inner=p.map((v,i)=>{const a=p[(i+p.length-1)%p.length],b=p[(i+1)%p.length],dx=b[0]-a[0],dy=b[1]-a[1],l=Math.hypot(dx,dy)||1;return[v[0]-dy/l*sign*depth,v[1]+dx/l*sign*depth];});
 for(let i=0;i<p.length;i++){const j=(i+1)%p.length,a=p[i],b=p[j],c=inner[j],d=inner[i],mid=[(a[0]+b[0]+c[0]+d[0])/4,(a[1]+b[1]+c[1]+d[1])/4];
  if(region.level>0&&surface(mid[0],mid[1])!==region.level)continue;
  if(region.level<0&&surface(mid[0],mid[1])>0)continue;
  const quad=[a,b,c,d],top=region.level<0?[a,b]:[d,c],base=region.level<0?[d,c]:[a,b];
  faces.push({id:region.name+'-'+i,region:region.name,level:region.level,material:region.level<0?'soil':'rock',quad,top,base,bounds:bounds(quad),ramp:quad.some(v=>rampNear(v[0],v[1]))||rampNear(...mid)});
 }
}
// Spatial bins keep the fine navigation raster practical to author and compile.
const bins=new Map();for(const f of faces){const [a,b,c,d]=f.bounds;for(let y=Math.floor(b/100);y<=Math.floor(d/100);y++)for(let x=Math.floor(a/100);x<=Math.floor(c/100);x++){const k=x+','+y,list=bins.get(k)||[];list.push(f);bins.set(k,list);}}
const ground=map.layers.find(l=>l.name==='Ground'),oldAt=(x,y)=>ground.data[Math.floor(y/15)*400+Math.floor(x/15)];
for(let y=0;y<height;y++)for(let x=0;x<width;x++){const px=(x+.5)*cell,py=(y+.5)*cell,i=y*width+x;let tile=oldAt(px,py);if([3,5,7].includes(tile))tile=road(px,py)?2:1;
 for(const h of hydrology){const [a,b,c,d]=h.bounds;if(px<a||px>c||py<b||py>d)continue;if(polygon(px,py,h.water))tile=h.deep?3:5;}
 if(decks.some(d=>insideRect(px,py,d.rect)))tile=4;
 const face=(bins.get(Math.floor(px/100)+','+Math.floor(py/100))||[]).find(f=>polygon(px,py,f.quad));
 if(face&&!rampNear(px,py)&&![3,6].includes(tile))tile=7;
 if(face&&rampNear(px,py)&&tile!==3&&tile!==6)tile=2;
 if(px<45||py<45||px>5955||py>4455)tile=6;
 nav[i]=tile;layers[i]=surface(px,py);
}
const objects=map.layers.find(l=>l.name==='WorldObjects');objects.objects=objects.objects.filter(o=>!['cliff','ridge','stairs'].includes(o.type));
// Remove trees/plants whose feet became an exposed bank, cliff face or creek bed.
objects.objects=objects.objects.filter(o=>!['oak','birch','willow','orchard','flora'].includes(o.type)||nav[Math.floor(o.y/cell)*width+Math.floor(o.x/cell)]===1);
// Preserve main layout but put sampling signs outside the newly precise face footprints.
objects.objects=objects.objects.filter(o=>o.type!=='sign'||[1,2,4].includes(nav[Math.floor(o.y/cell)*width+Math.floor(o.x/cell)]));
for(let y=0;y<300;y++)for(let x=0;x<400;x++)ground.data[y*400+x]=nav[Math.floor((y+.5)*15/cell)*width+Math.floor((x+.5)*15/cell)];
const elevation=map.layers.find(l=>l.name==='Elevation');for(let y=0;y<300;y++)for(let x=0;x<400;x++)elevation.data[y*400+x]=layers[Math.floor((y+.5)*15/cell)*width+Math.floor((x+.5)*15/cell)];
const falls=[];for(const h of hydrology.filter(h=>!h.deep&&h.id!=='irrigation'))for(const p of h.center){const f=faces.find(f=>f.level>0&&polygon(...p,f.quad));if(f&&falls.every(a=>Math.hypot(a.at[0]-p[0],a.at[1]-p[1])>150))falls.push({at:p,face:f.quad,width:50,depth:80});}
map.properties.push({name:'geologyRevision',type:'int',value:8});writeFileSync(file,JSON.stringify(map,null,2)+'\n');
const detail={version:1,coordinateUnits:'world pixels',navigation:{width,height,cell,data:nav},regions,faces,hydrology,roads:roads.map(p=>({points:p.points,width:p.width})),decks,falls};
writeFileSync(new URL('binh-minh-geology.json',dir),JSON.stringify(detail)+'\n');console.log({faces:faces.length,basins:1,falls:falls.length,navigation:[width,height],objects:objects.objects.length});
