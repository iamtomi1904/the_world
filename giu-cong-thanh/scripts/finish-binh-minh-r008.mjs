import {readFileSync,writeFileSync} from 'node:fs';
import {road,distance} from './binh-minh-geography.mjs';
const dir=new URL('../public/mmorpg/maps/',import.meta.url),file=new URL('binh-minh.tmj',dir),map=JSON.parse(readFileSync(file)),geoFile=new URL('binh-minh-geology.json',dir),geo=JSON.parse(readFileSync(geoFile));
if(map.properties.some(p=>p.name==='compositionPolish'&&p.value===8)){console.log('Polish8 already authored');process.exit(0);}
const layer=map.layers.find(l=>l.name==='WorldObjects'),objects=layer.objects;let id=map.nextobjectid;
const add=(type,x,y,width,extra={})=>objects.push({id:id++,type,name:type+'-art8-'+id,x,y,width,height:0,point:true,properties:Object.entries(extra).map(([name,value])=>({name,type:typeof value==='number'?'float':typeof value==='boolean'?'bool':'string',value}))});
const terrain=(x,y)=>geo.navigation.data[Math.floor(y/5)*1200+Math.floor(x/5)];
const clearings=[[2160,2295,275,205],[1020,3780,255,180],[5100,1575,170,110]];
for(let y=0;y<900;y++)for(let x=0;x<1200;x++){const i=y*1200+x,px=x*5+2.5,py=y*5+2.5;
 if(geo.navigation.data[i]!==2||road(px,py,18))continue;
 const plaza=clearings.some(([cx,cy,rx,ry])=>((px-cx)/rx)**2+((py-cy)/ry)**2<1);
 const doorstep=objects.some(o=>o.type==='building'&&Math.abs(px-o.x)<o.width*.45&&py>o.y-20&&py<o.y+55);
 if(!plaza&&!doorstep)geo.navigation.data[i]=1;
}
// Boundary fencing follows the camp lip; road crossings are deliberate gates.
const fencePoints=[];
for(const f of geo.faces.filter(f=>f.region==='Gò Trại Bình Minh')){const [a,b]=f.top,l=Math.hypot(b[0]-a[0],b[1]-a[1]);for(let k=0;k<l;k+=95){const t=k/l,x=a[0]+(b[0]-a[0])*t,y=a[1]+(b[1]-a[1])*t-12;
 if(road(x,y,80)||fencePoints.some(p=>Math.hypot(p[0]-x,p[1]-y)<85))continue;
 add('fence',x,y,100);fencePoints.push([x,y]);}}
// Explicit scene composition, not random props sprinkled throughout the world.
for(const [x,y]of [[1885,2015],[2290,2010],[2730,2300],[1610,2350],[1760,2690],[2510,2790],[625,3755],[1490,3820],[1070,3540],[795,4170]]){
 if([1,2].includes(terrain(x,y))&&!road(x,y,28)){add('barrel',x,y,38);add('pot',x+42,y+9,32);}
}
// Rock groups and meadow islands around the camp replace its uniformly empty lawn.
for(const [x,y,w]of [[1430,1980,110],[2940,2100,95],[2830,2570,85],[1530,2560,95],[665,3440,100],[1740,4070,95],[3620,4070,75]])if(terrain(x,y)===1&&!road(x,y,45))add('boulders',x,y,w,{asset:'rocks'});
for(const [cx,cy]of [[1440,2010],[2860,2080],[2790,2590],[1560,2530],[1890,2730],[2320,1960],[770,3630],[1350,4020]])for(let j=0;j<9;j++){const x=cx+Math.cos(j*2.4)*20*(j%3),y=cy+Math.sin(j*2.4)*15*(j%3);if(terrain(x,y)===1&&!road(x,y,20))add('flora',x,y,40+j%3*10,{variant:j%6,flip:j%2===0});}
// The optional northeastern clearing has the ring of stones visible in the concept.
for(let j=0;j<13;j++){const a=j/13*Math.PI*2,x=5580+Math.cos(a)*190,y=450+Math.sin(a)*110;if([1,2].includes(terrain(x,y)))add('boulders',x,y,42+j%3*8,{asset:'rocks'});}
// Visible steps sit only on front-facing road crossings, matching existing ramps.
const steps=[];for(const f of geo.faces.filter(f=>f.ramp&&f.level>0)){const x=(f.base[0][0]+f.base[1][0])/2,y=(f.base[0][1]+f.base[1][1])/2,dy=y-(f.top[0][1]+f.top[1][1])/2;
 if(dy<35||!road(x,y,0)||steps.some(p=>Math.hypot(p[0]-x,p[1]-y)<190))continue;
 const r=geo.roads.find(r=>r.points.slice(1).some((p,i)=>distance(x,y,r.points[i],p)<r.width/2));
 if(r){add('stairs',x,y+8,r.width+26,{asset:'stairs',axis:'h'});steps.push([x,y]);}}
const ground=map.layers.find(l=>l.name==='Ground');for(let y=0;y<300;y++)for(let x=0;x<400;x++)ground.data[y*400+x]=geo.navigation.data[(y*3+1)*1200+x*3+1];
for(const o of objects)if(o.type==='willow'&&o.id%3!==0){o.type=o.id%3===1?'oak':'birch';o.width=o.type==='birch'?210:260;}
for(const o of objects){if(o.type==='building'&&o.properties?.some(p=>p.name==='asset'&&p.value==='survey')){o.x=3100;o.y=1400;}if(o.id===297){o.x=1600;o.y=2600;}}
map.nextobjectid=id;map.properties.push({name:'compositionPolish',type:'int',value:8});
writeFileSync(file,JSON.stringify(map,null,2)+'\n');writeFileSync(geoFile,JSON.stringify(geo)+'\n');console.log({fences:fencePoints.length,stairs:steps.length,objects:objects.length});
