import {drawCastleCourt} from './castle-court.js';
import {drawHydrology,drawTerritory,updateHydrologyFX} from './landscape-art.js';
import {drawEnvironmentPatch,updateEnvironmentFX} from './environment-art.js';
import {BIOMES} from './world-biomes.js';
import {clearLeaderAuras} from './leader-auras.js';
import {WORLD} from './content.js';
import {buildFortress} from './fortress.js';
const hex=n=>'#'+n.toString(16).padStart(6,'0');
export function renderMap(s,m,catalog,entities){
 for(const tween of s.sceneryTweens||[])tween.remove();s.sceneryTweens=[];s.fauna=[];
 if(s.mapObjects)for(const obj of s.mapObjects)obj.destroy();s.mapObjects=[];
 if(s.groundKey&&s.textures.exists(s.groundKey))s.textures.remove(s.groundKey);
 const key='ground-'+m.id;s.groundKey=key;
 const resolution=Math.min(1,3840/m.width),canvas=s.textures.createCanvas(key,Math.ceil(m.width*resolution),Math.ceil(m.height*resolution)),c=canvas.context;c.scale(resolution,resolution);c.imageSmoothingEnabled=false;s.mapWidth=m.width;s.mapHeight=m.height;s.environment=m.environment;
 let seed=m.id*531;const rand=()=>{seed=seed*16807%2147483647;return seed/2147483647;};
 c.fillStyle=hex(m.ground);c.fillRect(0,0,m.width,m.height);
 // Use the supplied grass atlas as small variation islands, with biome lighting beneath it.
 const grass=s.textures.get('Ground_grass').getSourceImage();
 for(let y=0;y<m.height;y+=64)for(let x=0;x<m.width;x+=64){c.globalAlpha=.32;c.drawImage(grass,28,28+m.grassRow*96,24,24,x,y,64,64);c.globalAlpha=1;const variant=(x/64*17+y/64*31+m.id)%4;c.fillStyle=variant%2?'#d9e2b30b':'#1726140b';c.fillRect(x,y,64,64);}
 const road=s.textures.get(m.roadTile).getSourceImage();
 c.lineCap='round';c.lineJoin='round';
 for(const trail of m.forestPaths||[]){c.beginPath();c.moveTo(...trail[0]);c.lineTo(...trail[1]);c.strokeStyle='#b2a27944';c.lineWidth=27;c.stroke();c.lineWidth=2;c.setLineDash([5,12]);c.strokeStyle='#d9c19544';c.stroke();c.setLineDash([]);}
 for(const camp of m.camps||[]){c.fillStyle='#233b26aa';c.beginPath();c.ellipse(camp.x,camp.y,100,70,0,0,Math.PI*2);c.fill();c.strokeStyle='#b5aa6b55';c.lineWidth=2;c.stroke();}
 const nearRoad=(x,y)=>m.lanes.some(l=>l.slice(1).some((b,i)=>{const a=l[i],dx=b[0]-a[0],dy=b[1]-a[1],t=Math.max(0,Math.min(1,((x-a[0])*dx+(y-a[1])*dy)/(dx*dx+dy*dy||1)));return Math.hypot(x-a[0]-dx*t,y-a[1]-dy*t)<55;}));
 for(let y=0;y<m.height;y+=64)for(let x=0;x<m.width;x+=64)if(nearRoad(x+32,y+32)){c.fillStyle=hex(m.road);c.fillRect(x,y,64,64);c.globalAlpha=.65;c.drawImage(road,24,24,32,32,x,y,64,64);c.globalAlpha=1;}
 s.hydrology=m.rivers;
 for(const f of m.flowers){if(m.lanes.some(l=>l.some((p,k)=>k&&Math.hypot(f.x-p[0],f.y-p[1])<100)))continue;c.fillStyle=hex(f.color);c.fillRect(f.x,f.y,3,3);c.fillStyle='#273c29';c.fillRect(f.x+1,f.y+3,1,4);}
 for(const z of m.environment)drawEnvironmentPatch(c,s,z);for(const t of m.territories)drawTerritory(c,s,t);drawHydrology(c,s,m);drawCastleCourt(c,s,m);canvas.refresh();s.mapObjects.push(s.add.image(0,0,key).setOrigin(0).setScale(1/resolution).setDepth(-100));for(const t of m.territories)s.mapObjects.push(s.add.text(t.x,t.y-t.radius*.72,'LÃNH ĐỊA · '+t.name.toUpperCase(),{fontFamily:'Segoe UI',fontSize:'14px',color:hex(t.color),stroke:'#152318',strokeThickness:4}).setOrigin(.5).setDepth(t.y));for(const water of m.rivers||[]){const point=water.points[Math.floor(water.points.length/2)];s.mapObjects.push(s.add.text(point[0],point[1]+water.width/2+24,water.name,{fontFamily:'Segoe UI',fontSize:'12px',color:water.type==='deep'?'#a9dce9':'#d0eee1',stroke:'#193229',strokeThickness:3}).setOrigin(.5).setDepth(point[1]));}for(const z of m.environment)s.mapObjects.push(s.add.text(z.x,z.y-z.ry-18,BIOMES[z.type].name,{fontFamily:'Segoe UI',fontSize:'11px',color:'#e7ead1',stroke:'#152318',strokeThickness:3}).setOrigin(.5).setDepth(z.y));
 const infoById=new Map(catalog.props.map(p=>[p.id,p]));
 for(const p of m.props){const info=infoById.get(p.asset);if(!info)continue;const height=info.group==='forest'?140:info.group==='trees'?130:info.group==='ruins'?98:info.group==='rocks'?70:info.group==='crystals'?75:45;const obj=s.add.image(p.x,p.y,p.asset).setOrigin(.5,.83).setScale(height/info.height*p.scale).setDepth(p.y);if(p.habitat==='dead')obj.setTint(0x9b8dba);else if(p.habitat==='ice')obj.setTint(0xb4dce5);else if(['lava','fire'].includes(p.habitat))obj.setTint(0x8c7161);s.mapObjects.push(obj);}
 for(const camp of m.camps||[]){const marker=s.add.graphics().setDepth(camp.y-1);marker.lineStyle(2,0xb5bd7d,.45).strokeEllipse(camp.x,camp.y,80,30);s.mapObjects.push(marker,s.add.text(camp.x,camp.y-85,'TRẠI '+({wolf:'SÓI',serpent:'RẮN',undead:'UNDEAD',harpy:'HARPY',stone:'ĐÁ',dragon:'RỒNG'}[camp.family]),{fontFamily:'Segoe UI',fontSize:'10px',color:'#cfdaa7',stroke:'#14251c',strokeThickness:3}).setOrigin(.5));}
 // Roadside details: rocks, mushrooms and grass stay visual and never block a lane.
 for(const lane of m.lanes){for(let k=1;k<lane.length;k++){const a=lane[k-1],b=lane[k],len=Math.hypot(b[0]-a[0],b[1]-a[1]);for(let t=100;t<len;t+=145){const side=rand()>.5?1:-1,x=a[0]+(b[0]-a[0])*t/len-(b[1]-a[1])/len*side*76,y=a[1]+(b[1]-a[1])*t/len+(b[0]-a[0])/len*side*76;if(Math.hypot(x-m.base.x,y-m.base.y)<250)continue;const id=['chanterelles1','bush_simple1_1','rock1_1'][Math.floor(rand()*3)],info=infoById.get(id);if(info)s.mapObjects.push(s.add.image(x,y,id).setOrigin(.5,.8).setScale(20/info.height).setDepth(y));}}}
 s.mapObjects.push(...buildFortress(s,m,catalog));
 const glow=s.add.graphics().setDepth(m.base.y+56);glow.fillStyle(0xffd58b,.1).fillCircle(m.base.x-25,m.base.y+27,18).fillCircle(m.base.x+25,m.base.y+27,18);s.mapObjects.push(glow);
 for(const lane of m.lanes){const [x,y]=lane[0];const portal=s.add.graphics().setDepth(-20);portal.lineStyle(3,0xffa47a,.7).strokeEllipse(x,y,60,35);portal.lineStyle(1,0xffb18b,.3).strokeEllipse(x,y,75,46);s.mapObjects.push(portal,s.add.text(x,y-40,'QUÂN VÂY HÃM',{fontFamily:'Segoe UI',fontSize:'10px',color:'#edbd9b',stroke:'#263824',strokeThickness:3}).setOrigin(.5));}
 for(const obj of entities.values()){clearLeaderAuras(obj);obj.buffArt?.destroy();obj.sprite.destroy();obj.label.destroy();}entities.clear();
 for(let n=1;n<=3;n++){const info=catalog.props.find(p=>p.id===`cloud-${n}`);if(!info||!s.textures.exists(info.id))continue;const cloud=s.add.image((n*531+m.id*37)%m.width,100+n*270,info.id).setAlpha(m.id===9?.09:.065).setDepth(4000).setScale(.6).setScrollFactor(.82);s.mapObjects.push(cloud);s.sceneryTweens.push(s.tweens.add({targets:cloud,x:cloud.x+350,duration:60000+n*5000,yoyo:true,repeat:-1}));}
 s.weather=s.add.graphics().setDepth(2800);s.mapObjects.push(s.weather);s.weatherStage=m.id;
 s.weatherPoints=Array.from({length:80},()=>({x:rand()*m.width,y:rand()*m.height,speed:.5+rand(),phase:rand()*6}));
}
export function updateScenery(s,time){
 for(const a of s.fauna||[]){const t=time/6000+a.phase,x=a.x+Math.sin(t)*38,y=a.y+Math.cos(t*.7)*20,dx=x-a.sprite.x,dy=y-a.sprite.y,row=Math.abs(dx)>Math.abs(dy)?dx<0?2:3:dy<0?1:0;a.sprite.setPosition(x,y).setDepth(y).play(`${a.id}:walk${row?':'+row:''}`,true);}
 if(!s.weather)return;s.weather.clear();const stage=s.weatherStage;updateEnvironmentFX(s,time);updateHydrologyFX(s,time);
 for(const p of s.weatherPoints){const x=(p.x+time/85*p.speed)%s.mapWidth,y=(p.y+time/(stage===7?12:70)*p.speed)%s.mapHeight;
  if(stage===6)s.weather.fillStyle(0xeaf9ff,.5).fillCircle(x,y,1.4);
  else if(stage===7)s.weather.lineStyle(1,0x9ec5ba,.2).lineBetween(x,y,x-4,y+12);
  else if(stage===9||stage===10)s.weather.fillStyle(stage===9?0xffb274:0xc29ada,.35).fillCircle(x,y,1.5+Math.sin(time/150+p.phase)*.5);
  else if(stage===3)s.weather.fillStyle(0xd5ab77,.35).fillEllipse(x,y,4,2);
 }
}
export function drawMiniMap(s,state,map){
 const g=s.mini;g.clear();const w=174,h=116,x=Math.max(8,s.scale.width-188),y=13;
 g.fillStyle(0x101b17,.9).fillRoundedRect(x-7,y-7,w+14,h+14,5);g.lineStyle(1,0xc3b879,.5).strokeRoundedRect(x-7,y-7,w+14,h+14,5);
 g.fillStyle(map.ground,.8).fillRect(x,y,w,h);const sx=w/map.width,sy=h/map.height;
 for(const water of map.rivers||[]){g.lineStyle(water.type==='deep'?4:2,water.type==='deep'?0x36778e:0x8ac7ca,.9);g.beginPath();water.points.forEach(([a,b],i)=>i?g.lineTo(x+a*sx,y+b*sy):g.moveTo(x+a*sx,y+b*sy));g.strokePath();}
 for(const z of map.environment||[])g.fillStyle(BIOMES[z.type].color,.6).fillEllipse(x+z.x*sx,y+z.y*sy,z.rx*2*sx,z.ry*2*sy);for(const t of map.territories||[])g.lineStyle(1,t.color,.9).strokeCircle(x+t.x*sx,y+t.y*sy,6);
 for(const lane of map.lanes){g.lineStyle(2,map.road,.8);g.beginPath();lane.forEach(([a,b],i)=>i?g.lineTo(x+a*sx,y+b*sy):g.moveTo(x+a*sx,y+b*sy));g.strokePath();}
 g.fillStyle(0xe8c784).fillRect(x+map.base.x*sx-4,y+map.base.y*sy-3,8,6);
 for(const camp of map.camps||[])g.lineStyle(1,0x91b27b,.65).strokeCircle(x+camp.x*sx,y+camp.y*sy,4);
 for(const drop of state.loot||[])g.fillStyle(0xa8e8e2).fillRect(x+drop.x*sx-1,y+drop.y*sy-1,2,2);
 for(const e of state.enemies)g.fillStyle(e.neutral?0xa4c67f:0xee8e79).fillCircle(x+e.x*sx,y+e.y*sy,e.boss?3:1.6);
 for(const t of state.troops)g.fillStyle(0x9bdcc4).fillCircle(x+t.x*sx,y+t.y*sy,1.5);
 for(const p of state.players)g.fillStyle(p.hp>0?0xfff1b8:0x999999).fillCircle(x+p.x*sx,y+p.y*sy,2.5);
 const cam=s.cameras.main;g.lineStyle(1,0xe6e2c7,.6).strokeRect(x+cam.scrollX*sx,y+cam.scrollY*sy,cam.width/cam.zoom*sx,cam.height/cam.zoom*sy);
}

