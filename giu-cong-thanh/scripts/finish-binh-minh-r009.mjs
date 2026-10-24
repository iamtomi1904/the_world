import {readFileSync,writeFileSync} from 'node:fs';
import {road} from './binh-minh-geography.mjs';
const dir=new URL('../public/mmorpg/maps/',import.meta.url),file=new URL('binh-minh.tmj',dir),map=JSON.parse(readFileSync(file)),gf=new URL('binh-minh-geology.json',dir),geo=JSON.parse(readFileSync(gf));
if(map.properties.some(p=>p.name==='surfaceDetail'&&p.value===9)){console.log('Surface9 already authored');process.exit(0);}
const layer=map.layers.find(l=>l.name==='WorldObjects');layer.objects=layer.objects.filter(o=>!(o.type==='fence'&&(o.name?.includes('art8')||o.x>1100&&o.x<3150&&o.y>1750&&o.y<2950)));const objects=layer.objects;let id=map.nextobjectid;
const add=(type,x,y,width,extra={})=>objects.push({id:id++,type,name:type+'-surface9-'+id,x,y,width,height:0,point:true,properties:Object.entries(extra).map(([name,value])=>({name,type:typeof value==='number'?'float':typeof value==='boolean'?'bool':'string',value}))});
const tile=(x,y)=>geo.navigation.data[Math.floor(y/5)*1200+Math.floor(x/5)];
const free=(x,y,w)=>[1,2].includes(tile(x,y))&&!road(x,y,35)&&!objects.some(o=>['building','entrance','oak','birch','willow','orchard','detail'].includes(o.type)&&Math.hypot(o.x-x,o.y-y)<(o.type==='building'?o.width*.32:w*.4+22));
let props=0,banks=0;
for(const [asset,cx,cy,w]of [['dummy',2320,2110,74],['table',2880,2320,135],['cart',1770,2420,135],['wood',1930,2680,125],['hay',2620,2790,85],['bench',2120,2570,120],['bench',940,3990,120],['cart',1350,3590,140],['hay',630,4110,90],['garden',450,3790,145],['garden',1430,3940,145],['wood',1670,3890,115],['table',700,3810,110],['hay',3650,4200,90],['cart',3560,2900,120],['shrine',4730,1420,135],['shrine',1820,1190,100],['bench',5500,1710,110]]){
 let pos;for(let k=0;k<40;k++){const x=cx+Math.cos(k*2.4)*Math.sqrt(k)*15,y=cy+Math.sin(k*2.4)*Math.sqrt(k)*12;if(free(x,y,w)){pos=[x,y];break;}}
 if(pos){add('detail',...pos,w,{asset});props++;}
}
// Bank plants are attached to the same bank contour, never isolated water decals.
for(const h of geo.hydrology.filter(h=>h.id!=='irrigation'))for(let i=2;i<h.bank.length-2;i+=4){const [x,y]=h.bank[i];if(x<60||y<60||x>5940||y>4440||![1,5].includes(tile(x,y))||road(x,y,48)||geo.decks.some(d=>x>d.rect[0]-100&&x<d.rect[0]+d.rect[2]+100&&y>d.rect[1]-100&&y<d.rect[1]+d.rect[3]+100))continue;add('detail',x,y,55+i%3*15,{asset:i%12===2?'reeds':i%12===6?'wetgrass':'wetrocks',flip:i%3===0});banks++;}
// Continuous plateau rim with openings following actual road widths.
const fences=[];for(const f of geo.faces.filter(f=>f.region==='Gò Trại Bình Minh')){const [a,b]=f.top,l=Math.hypot(b[0]-a[0],b[1]-a[1]);for(let k=0;k<l;k+=92){const t=k/l,x=a[0]+(b[0]-a[0])*t,y=a[1]+(b[1]-a[1])*t-8;if(road(x,y,75)||fences.some(p=>Math.hypot(p[0]-x,p[1]-y)<85))continue;add('fence',x,y,96);fences.push([x,y]);}}
// Small stone/gravel patches under doors visually join buildings to their yards.
for(const o of objects.filter(o=>o.type==='building'&&o.width>200))if([1,2].includes(tile(o.x,o.y+30)))add('pebbles',o.x,o.y+28,o.width*.4,{asset:'rocks'});
map.nextobjectid=id;map.properties.push({name:'surfaceDetail',type:'int',value:9});writeFileSync(file,JSON.stringify(map,null,2)+'\n');writeFileSync(gf,JSON.stringify(geo)+'\n');console.log({props,banks,fences:fences.length,objects:objects.length});
