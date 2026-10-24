// Layout revision6: positions follow the approved art's percentages, not the old greybox.
import {readFileSync,writeFileSync,copyFileSync,existsSync} from 'node:fs';
const dir=new URL('../public/mmorpg/maps/',import.meta.url),file=new URL('binh-minh.tmj',dir),old=JSON.parse(readFileSync(file));
if(old.properties.some(p=>p.name==='compositionRevision'&&p.value===6)){console.log('Composition6 already authored');process.exit(0);}
const backup=new URL('history/binh-minh-v5.tmj',dir);if(!existsSync(backup))copyFileSync(file,backup);
const design=JSON.parse(readFileSync(new URL('../public/design-preview/v01-complete-map-r001/map-design.json',import.meta.url)));
const W=400,H=300,C=15,ground=new Array(W*H).fill(1),height=new Array(W*H).fill(0),objects=[],markers=[],portals=[];let id=1;
let seed=948006;const random=()=>{seed=(1664525*seed+1013904223)>>>0;return seed/4294967296;};
const props=v=>Object.entries(v).map(([name,value])=>({name,type:typeof value==='number'?'float':typeof value==='boolean'?'bool':'string',value}));
const add=(type,x,y,width,extra={})=>{const o={id:id++,name:type+'-'+id,type,x,y,width,height:0,point:true,properties:props(extra)};objects.push(o);return o;};
const distance=(x,y,a,b)=>{const dx=b[0]-a[0],dy=b[1]-a[1],t=Math.max(0,Math.min(1,((x-a[0])*dx+(y-a[1])*dy)/(dx*dx+dy*dy||1)));return Math.hypot(x-a[0]-t*dx,y-a[1]-t*dy);};
function curve(points){const out=[];for(let i=0;i<points.length-1;i++){const a=points[Math.max(0,i-1)],b=points[i],c=points[i+1],d=points[Math.min(points.length-1,i+2)];for(let j=0;j<12;j++){const t=j/12;out.push([0,1].map(k=>.5*((2*b[k])+(-a[k]+c[k])*t+(2*a[k]-5*b[k]+4*c[k]-d[k])*t*t+(-a[k]+3*b[k]-3*c[k]+d[k])*t*t*t)));}}out.push(points.at(-1));return out;}
const path=(points,width)=>({points:curve(points),width});
const roads=[
 path([[0,2025],[420,2025],[1100,2080],[1600,2210],[2160,2295],[3000,2380],[3700,2385],[4400,2385],[4750,2070],[5100,1575]],100),
 path([[1020,3780],[1260,3105],[1780,2850],[2160,2295]],82),
 path([[2160,2295],[2440,2750],[2520,3000],[3180,3000]],80),
 path([[420,2025],[680,1530],[720,900],[1400,850],[1900,1100],[2300,1400],[3000,1600],[3300,2000],[3000,2380]],78),
 path([[1900,1100],[1980,1170]],65),
 path([[5100,1575],[4980,1250],[4980,990],[5480,600],[5580,450]],80),
 path([[4750,2070],[4950,2300],[5280,2520],[5480,2920],[5350,3330],[5000,3700]],80),
 path([[1020,3780],[720,4090],[1250,4200],[1740,3900],[2000,3550],[2520,3300]],70),
 path([[1400,850],[1800,620],[2500,600],[2760,400]],75),
 path([[2520,3000],[3180,3000],[3900,3000],[3900,4130],[3180,4130],[2520,4130],[2520,3000]],65),
 path([[3180,3000],[3180,4130]],65),path([[2520,3550],[3900,3550]],65)
];
const river=path([[4350,0],[4230,700],[4080,1500],[3970,2350],[4140,3000],[4500,3700],[4910,4500]],350);
const streams=[path([[1900,620],[2140,1000],[2500,1300],[3000,1600],[3500,1690],[4040,1750]],100),path([[0,2950],[580,3070],[1260,3105],[1850,3240],[2400,3380],[2450,3800],[2800,4180],[3600,4290],[4730,4300]],90)];
const on=(x,y,p,margin=0)=>p.points.slice(1).some((v,i)=>distance(x,y,p.points[i],v)<p.width/2+margin);
const road=(x,y,margin=0)=>roads.some(p=>on(x,y,p,margin));
const polygon=(x,y,points)=>{let inside=false;for(let i=0,j=points.length-1;i<points.length;j=i++){const a=points[i],b=points[j];if((a[1]>y)!==(b[1]>y)&&x<(b[0]-a[0])*(y-a[1])/(b[1]-a[1])+a[0])inside=!inside;}return inside;};
const terraces=[
 {name:'Gò Trại Bình Minh',level:1,polygon:[[1220,2050],[1420,1800],[2150,1680],[2810,1850],[3120,2190],[2940,2640],[2410,2930],[1700,2820],[1220,2470]]},
 {name:'Thềm Vành Lũy',level:2,polygon:[[0,0],[4250,0],[4140,470],[3500,590],[3000,720],[2600,750],[1900,620],[1000,530],[0,740]]},
 {name:'Thềm Sân Chuông',level:1,polygon:[[4520,1370],[4820,1170],[5480,1200],[5740,1510],[5600,1880],[5160,2040],[4720,1850]]},
 {name:'Thềm Hầm Phong Ấn',level:2,polygon:[[4600,700],[5000,510],[5480,600],[5680,1000],[5480,1290],[4900,1320],[4570,1100]]},
 {name:'Sườn Đông',level:2,polygon:[[5780,0],[6000,0],[6000,4500],[5510,4500],[5640,3750],[5540,3300],[5750,2850],[5810,2290],[5710,1970],[5800,1500],[5620,900]]}
];
for(let y=0;y<H;y++)for(let x=0;x<W;x++){const px=(x+.5)*C,py=(y+.5)*C,i=y*W+x;
 let t=road(px,py)?2:1;
 for(const [cx,cy,rx,ry]of [[2160,2295,390,290],[1020,3780,360,260],[5100,1575,250,170]])if(((px-cx)/rx)**2+((py-cy)/ry)**2<1)t=2;
 if(streams.some(p=>on(px,py,p)))t=5;if(on(px,py,river))t=3;
 if(px>3610&&px<4380&&Math.abs(py-2385)<35)t=4;
 if(Math.abs(px-1260)<55&&Math.abs(py-3105)<170)t=4;
 // A narrow irrigation feeder follows the field edge, with a culvert at the lane.
 if((px>2485&&px<2510&&py>3375&&py<4100)||(py>3578&&py<3598&&px>2490&&px<3850))t=5;
 if(px>3130&&px<3230&&py>3540&&py<3630)t=4;
 if(x<3||y<3||x>=W-3||y>=H-3)t=6;
 ground[i]=t;for(const r of terraces)if(polygon(px,py,r.polygon))height[i]=Math.max(height[i],r.level);
}
const stairs=[];
for(let y=2;y<H-2;y++)for(let x=2;x<W-2;x++){const i=y*W+x,h=height[i];if(!h||[3,4,6].includes(ground[i]))continue;
 const boundary=[[1,0],[-1,0],[0,1],[0,-1]].some(([dx,dy])=>height[(y+dy)*W+x+dx]<h);if(!boundary)continue;
 const px=(x+.5)*C,py=(y+.5)*C;
 if(road(px,py,40)){if(stairs.every(p=>Math.hypot(p[0]-px,p[1]-py)>145))stairs.push([px,py]);continue;}
 ground[i]=7;
}
// Follow the entire curved lip. Per-row runs alone dropped the diagonal cliff faces.
const front=[];
for(let x=3;x<W-3;x++)for(let y=3;y<H-3;y++){const i=y*W+x;
 if(ground[i]!==7||height[i]<=height[i+W])continue;
 const px=(x+.5)*C,py=(y+.5)*C;
 if(front.some(p=>Math.hypot(p[0]-px,p[1]-py)<90))continue;
 front.push([px,py]);add('cliff',px,py+48,145,{asset:'cliff'});
 for(let dy=-4;dy<=2;dy++)if([1,5].includes(ground[i+dy*W])&&!road(px,py+dy*C,30))ground[i+dy*W]=7;
 if(polygon(px,py-20,terraces[0].polygon)&&py>2300)add('fence',px,py-12,115);
}
for(let y=3;y<H-3;y++)for(let x=3;x<W-3;x++){const i=y*W+x;if(ground[i]===7&&(x+y)%5===0&&height[i]>Math.min(height[i-1],height[i+1]))add('ridge',(x+.5)*C,(y+.5)*C+20,95,{asset:'rocks'});}
for(const [x,y]of stairs)add('stairs',x,y+32,120,{asset:'stairs',axis:'h'});
const building=(asset,x,y,w)=>add('building',x,y,w,{asset});
for(const [asset,x,y,w]of [['home',2100,1980,360],['tent',1560,2270,300],['forge',2690,2240,390],['home',1740,2660,330],['tent',2500,2730,290],['fire',2160,2440,85],['well',1970,2190,80],['home',650,3710,340],['home',1130,3500,330],['inn',1540,3760,350],['barn',800,4140,300],['well',1040,3900,85],['mill',720,900,290],['survey',3040,1500,170],['bell',5100,1490,220],['home',5540,1650,265],['barn',3800,3070,220]])building(asset,x,y,w);
for(const [x,y,asset]of [[2860,3480,'vegetables'],[3480,3480,'soil'],[2860,4030,'vegetables'],[3480,4030,'wheat']])add('crop',x,y,510,{asset});
// Furniture is placed by the function of each area, leaving the courtyard open.
for(const [x,y]of [[1840,2000],[2850,2260],[1660,2700],[600,3790],[1600,3840],[5500,1700],[3720,3100]]){add('lamp',x,y,48);add('barrel',x+42,y+12,34);add('pot',x-30,y+8,32);}
for(let x=2650;x<3870;x+=180){add('fence',x,3020,165);add('fence',x,4160,165);}
for(const [x,y]of [[1350,2370],[1550,2790],[2770,2730],[590,3950],[1380,4020]])add('fence',x,y,165);
add('bridge',4000,2385,720);add('footbridge',1260,3255,135);
const entries=[['DG','Hầm Phong Ấn Cổ',4980,990,'sealed',380],['ECO1','Hốc Rễ Dưới Guồng',1980,1170,'hollow',340],['ECO2','Kho Vôi',5280,2520,'mine',330]];
for(const [target,name,x,y,asset,w]of entries){portals.push({id:id++,type:'portal',name,x,y,point:true,properties:props({target})});add('entrance',x,y-40,w,{asset,portal:target});}
for(let x=1500;x<3900;x+=360)if(Math.abs(x-2760)>250)add('rampart',x,320,375,{asset:'wall'});add('fort-gate',2760,320,500,{asset:'gate'});
for(const [x,y,w]of [[900,450,450],[1420,490,380],[3300,420,470],[3650,520,390],[5740,1900,440],[5770,3300,460],[5600,3890,430]])add('mountain',x,y,w,{asset:'mountain'});
for(const r of design.regions){let x=r.artX*60,y=r.artY*45;if(r.id==='farm'){x=3180;y=3550;}if(r.id==='bridge'){x=4000;y=2385;}if(r.id==='seal'){x=4980;y=990;}markers.push({id:id++,type:'landmark',name:r.name,x,y,point:true});}
markers.push({id:id++,type:'spawn',name:'spawn',x:2160,y:2295,point:true});
const blocked=(x,y)=>{const t=ground[Math.floor(y/C)*W+Math.floor(x/C)];return ![1,2,4,5].includes(t);};
const noPlant=(x,y)=>road(x,y,135)||on(x,y,river,80)||streams.some(p=>on(x,y,p,45))||polygon(x,y,terraces[0].polygon)||(x>2460&&x<3970&&y>2960&&y<4220)||Math.hypot(x-1020,y-3780)<600||Math.hypot(x-5100,y-1575)<400||Math.hypot(x-5580,y-450)<300||entries.some(e=>Math.hypot(e[2]-x,e[3]-y)<255)||objects.some(o=>['building','mountain'].includes(o.type)&&Math.abs(x-o.x)<o.width*.7+70&&y>o.y-o.width-50&&y<o.y+90);
const treePoints=[];
for(let tries=0;tries<14000&&treePoints.length<760;tries++){const x=75+random()*5850,y=100+random()*4300;if(blocked(x,y)||noPlant(x,y)||noPlant(x,y-120)||treePoints.some(p=>Math.hypot(p[0]-x,p[1]-y)<100))continue;
 const wet=on(x,y,river,220)||streams.some(p=>on(x,y,p,180)),village=y>3200&&x<2000;
 const kind=wet?'willow':village?'orchard':random()<.28?'birch':'oak';add(kind,x,y,kind==='birch'?200+random()*40:240+random()*55,{flip:random()>.5});treePoints.push([x,y]);
}
for(let i=0;i<3300;i++){const x=70+random()*5860,y=80+random()*4340;if(ground[Math.floor(y/C)*W+Math.floor(x/C)]!==1||road(x,y,12)||(x>2530&&x<3890&&y>3000&&y<4160)||objects.some(o=>['building','entrance'].includes(o.type)&&Math.abs(x-o.x)<o.width*.55&&y>o.y-o.width*.7&&y<o.y+20))continue;add('flora',x,y,35+random()*35,{variant:i%6,flip:random()>.5});}
// Bank stones are irregular clusters attached to water, never unrelated islands.
for(const stream of [river,...streams])for(let i=3;i<stream.points.length-3;i+=5){const p=stream.points[i],a=stream.points[i-1],b=stream.points[i+1],dx=b[0]-a[0],dy=b[1]-a[1],len=Math.hypot(dx,dy);for(const side of [-1,1]){const x=p[0]-dy/len*side*(stream.width*.5+25),y=p[1]+dx/len*side*(stream.width*.5+25);if(!blocked(x,y)&&!road(x,y,45))add('boulders',x,y,65+random()*55,{asset:'rocks'});}}
for(const r of markers.filter(m=>m.type==='landmark'))if(!blocked(r.x+100,r.y+65))add('sign',r.x+100,r.y+65,50);
const map={...old,nextobjectid:id,nextlayerid:7,properties:[{name:'compositionRevision',type:'int',value:6},{name:'designReference',type:'string',value:'map-design.json region artX/artY; authored world6000x4500'}],layers:[
 {id:1,name:'Ground',type:'tilelayer',width:W,height:H,x:0,y:0,visible:true,opacity:1,data:ground},
 {id:2,name:'WorldObjects',type:'objectgroup',draworder:'topdown',visible:true,opacity:1,objects},
 {id:3,name:'Portals',type:'objectgroup',visible:true,opacity:1,objects:portals},
 {id:4,name:'Markers',type:'objectgroup',visible:true,opacity:1,objects:markers},
 {id:5,name:'Elevation',type:'tilelayer',width:W,height:H,x:0,y:0,visible:false,opacity:1,data:height},
 {id:6,name:'Terraces',type:'objectgroup',visible:false,objects:terraces.map(t=>({id:id++,type:'terrace',name:t.name,x:0,y:0,polygon:t.polygon.map(([x,y])=>({x,y})),properties:props({level:t.level})}))}
]};map.nextobjectid=id;writeFileSync(file,JSON.stringify(map,null,2)+'\n');console.log({trees:treePoints.length,objects:objects.length,stairs:stairs.length,regions:markers.length-1});
