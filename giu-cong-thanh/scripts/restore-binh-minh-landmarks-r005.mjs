// Restore authored geography from design264/story17. Run once, then edit TMJ.
import {readFileSync,writeFileSync,copyFileSync,existsSync} from 'node:fs';
const folder=new URL('../public/mmorpg/maps/',import.meta.url),file=new URL('binh-minh.tmj',folder),map=JSON.parse(readFileSync(file));
if(map.properties.some(p=>p.name==='landmarkRevision'&&p.value===5)){console.log('Landmark revision5 already authored');process.exit(0);}
const backup=new URL('history/binh-minh-v4.tmj',folder);if(!existsSync(backup))copyFileSync(file,backup);
const ground=map.layers.find(l=>l.name==='Ground'),objects=map.layers.find(l=>l.name==='WorldObjects'),markers=map.layers.find(l=>l.name==='Markers'),portals=map.layers.find(l=>l.name==='Portals'),cell=map.tilewidth;
let next=map.nextobjectid;
const add=(kind,x,y,width,properties={})=>{const o={id:next++,name:kind+'-'+next,type:kind,x,y,width,height:0,point:true,properties:Object.entries(properties).map(([name,value])=>({name,type:typeof value==='number'?'float':'string',value}))};objects.objects.push(o);return o;};
const tile=(x,y)=>ground.data[Math.floor(y/cell)*map.width+Math.floor(x/cell)];
const protectedAt=(x,y,r=65)=>[...markers.objects,...portals.objects].some(p=>Math.hypot(p.x-x,p.y-y)<r);
// The residential hub and refugee camp must have different silhouettes and purposes.
objects.objects=objects.objects.filter(o=>!(o.type==='cottage'&&o.x===2550&&o.y===735));
const houses=objects.objects.filter(o=>o.type==='cottage');
for(const o of houses){const variant=o.y>1600?(o.x<600?'home':'barn'):o.x>2300?'mill':'home';o.type='building';o.properties=[{name:'asset',type:'string',value:variant}];o.width=variant==='barn'?285:o.width;}
for(const [kind,x,y,w]of [['tent',785,1050,210],['forge',1335,1045,270],['tent',1200,1510,210],['inn',425,2000,280],['mill',950,1950,235],['well',605,1930,65],['fire',1080,1300,65],['survey',1715,790,125]])add('building',x,y,w,{asset:kind});
// Keep exactly three usable portals; their facade sits behind the interaction pad.
for(const p of portals.objects){const target=p.properties.find(v=>v.name==='target').value;add('entrance',p.x,p.y-40,target==='DG'?310:target==='ECO1'?270:250,{asset:target==='DG'?'sealed':target==='ECO1'?'hollow':'mine',portal:target});}
add('building',2580,735,150,{asset:'bell'});add('building',2670,920,175,{asset:'tent'});
// Farmland is anchored to the established Ruộng landmark, not moved to a new zone.
// Rebuild the farm lane ring, rather than slicing planted beds with legacy diagonals.
for(let y=1515;y<=2160;y+=cell)for(let x=1200;x<=1875;x+=cell){
 const i=Math.floor(y/cell)*map.width+Math.floor(x/cell);
 if(![1,2,5].includes(ground.data[i]))continue;
 const lane=x<=1245||x>=1800||y<=1560||y>=2085||(x>=1500&&x<=1545)||(y>=1800&&y<=1845);
 ground.data[i]=lane?2:1;
}
const plots=[[1370,1760,'wheat'],[1670,1760,'vegetables'],[1370,2045,'soil'],[1670,2045,'vegetables']];
for(const [x,y,asset]of plots)add('crop',x,y,225,{asset});
add('building',1165,2100,145,{asset:'barn'});
for(const [x,y]of [[1250,1770],[1250,1950],[1770,1770],[1770,2150]])add('fence',x,y,120);
// Channels are shallow, visibly fed from the stream; retain dry paths beside them.
for(let y=1650;y<2190;y+=cell)for(let x=1150;x<1880;x+=cell){
 const irrigation=(x>=1545&&x<1560)||(y>=2145&&y<2160);
 const i=Math.floor(y/cell)*map.width+Math.floor(x/cell);
 if(irrigation&&[1,2].includes(ground.data[i])&&!protectedAt(x,y,40))ground.data[i]=5;
}
// Cầu Lau crosses its own reed stream. The deep river still has a dry stone bridge.
for(let y=1545;y<=1695;y+=cell)for(let x=330;x<=960;x+=cell){const i=Math.floor(y/cell)*map.width+Math.floor(x/cell);if(Math.abs(y-(1605+20*Math.sin(x/130)))<26&&ground.data[i]!==6)ground.data[i]=5;}
for(let y=1515;y<=1710;y+=cell)for(let x=555;x<=645;x+=cell)ground.data[Math.floor(y/cell)*map.width+Math.floor(x/cell)]=4;
add('footbridge',600,1695,115);
// Three raised places, with cliff collision and road apertures rendered as stairs.
const terraces=[{id:'camp',name:'Gò Trại Bình Minh',rect:[630,855,960,720],level:1},{id:'bell',name:'Thềm Sân Chuông',rect:[2385,645,525,405],level:1},{id:'seal',name:'Thềm Hầm Phong Ấn',rect:[2325,345,495,285],level:2}];
const elevation=new Array(map.width*map.height).fill(0),cliffs=[],stairs=[];
const nearRoad=(x,y)=>{for(let dy=-30;dy<=30;dy+=15)for(let dx=-30;dx<=30;dx+=15)if([2,4].includes(tile(x+dx,y+dy)))return true;return protectedAt(x,y,65);};
for(const t of terraces){const [rx,ry,rw,rh]=t.rect;
 for(let y=ry;y<ry+rh;y+=cell)for(let x=rx;x<rx+rw;x+=cell)elevation[Math.floor(y/cell)*map.width+Math.floor(x/cell)]=t.level;
 for(const [axis,fixed,start,end]of [['h',ry,rx,rx+rw],['h',ry+rh,rx,rx+rw],['v',rx,ry,ry+rh],['v',rx+rw,ry,ry+rh]]){
  let run=null,open=null;
  const close=(stop)=>{if(run!==null){const middle=(run+stop)/2,length=stop-run;cliffs.push([axis==='h'?middle:fixed,axis==='h'?fixed:middle,length,axis]);run=null;}if(open!==null){if(stop-open>=45)stairs.push([axis==='h'?(open+stop)/2:fixed,axis==='h'?fixed:(open+stop)/2,axis]);open=null;}};
  for(let n=start;n<=end;n+=cell){const x=axis==='h'?n:fixed,y=axis==='h'?fixed:n,gate=n<end&&nearRoad(x,y);
   if(n===end){close(n);break;}
   if(gate){if(run!==null)close(n);if(open===null)open=n;}else{if(open!==null)close(n);if(run===null)run=n;const i=Math.floor(y/cell)*map.width+Math.floor(x/cell);if([1,2].includes(ground.data[i]))ground.data[i]=7;}
  }
 }
}
for(const [x,y,width,axis]of cliffs){
 if(axis==='h'){for(let offset=-width/2;offset<width/2;offset+=150)add('cliff',x+offset+Math.min(150,width/2-offset)/2,y+38,Math.min(150,width/2-offset),{asset:'cliff'});}
 else for(let py=y-width/2;py<y+width/2;py+=65)add('ridge',x,py,100,{asset:'rocks'});
}
for(const [x,y,axis]of stairs)add('stairs',x,y+32,axis==='h'?100:85,{asset:'stairs',axis});
map.layers.push({id:map.nextlayerid++,name:'Elevation',type:'tilelayer',width:map.width,height:map.height,x:0,y:0,visible:false,opacity:1,data:elevation});
map.layers.push({id:map.nextlayerid++,name:'Terraces',type:'objectgroup',visible:false,objects:terraces.map(t=>({id:next++,name:t.name,type:'terrace',x:t.rect[0],y:t.rect[1],width:t.rect[2],height:t.rect[3],properties:[{name:'level',type:'int',value:t.level}]}))});
// Northern fortification: closed gate remains scenery, not a fourth dungeon.
for(let x=500;x<3030;x+=300)if(x<1850||x>2450)add('rampart',x,240,310,{asset:'wall'});
add('fort-gate',1760,240,390,{asset:'gate'});
for(const [x,y,w]of [[320,2850,450],[860,3550,380],[2870,265,340],[3620,480,480],[4260,980,520],[5380,1280,620],[4900,3000,470],[3700,4000,510],[5540,4030,430],[430,400,350]]){
 if(!protectedAt(x,y,220))add('mountain',x,y,w,{asset:'mountain'});
}
// River-bank boulders frame the channel. Small pebbles in shallows stay decorative.
for(let y=300;y<4300;y+=150){const center=2070+54*Math.sin(y/390);for(const side of [-1,1]){const x=center+side*155;if(!nearRoad(x,y)&&!protectedAt(x,y,80))add('boulders',x,y,80,{asset:'rocks'});}}
for(let y=500;y<2800;y+=90)for(let x=400;x<1900;x+=105)if(tile(x,y)===5&&!protectedAt(x,y,60))add('pebbles',x,y,30,{asset:'rocks'});
// Trim plants beneath the newly placed structures, cliffs, crops and approaches.
const structures=objects.objects.filter(o=>['building','entrance','mountain','crop'].includes(o.type));
objects.objects=objects.objects.filter(o=>!['oak','birch','willow','orchard','flora'].includes(o.type)||!structures.some(s=>Math.abs(o.x-s.x)<s.width*.6+35&&o.y>s.y-s.width*.8-30&&o.y<s.y+50));
objects.objects=objects.objects.filter(o=>{
 if(o.type!=='stairs')return true;
 const blocked=structures.some(s=>['building','entrance'].includes(s.type)&&Math.abs(o.x-s.x)<s.width*.46+10&&o.y-32>s.y-s.width*.4-10&&o.y-32<s.y+10);
 return !blocked;
});
map.nextobjectid=next;map.properties.push({name:'landmarkRevision',type:'int',value:5});
writeFileSync(file,JSON.stringify(map,null,2)+'\n');console.log({objects:objects.objects.length,terraces:terraces.length,stairs:stairs.length,cropPlots:plots.length});
