import {addShadowVFX,updateShadowVFX,clearShadowVFX} from './shadow-vfx.js';
import {drawMonsterProjectile,drawMonsterHit,drawBossBuff} from './enemy-spell-art.js';
import {drawRelicPickup} from './relic-vfx.js';
import {addBossVFX,updateBossVFX,clearBossVFX} from './boss-vfx.js';
import {ENEMY_FAMILIES} from './enemy-families.js';
const TAU=Math.PI*2;
const colorOf=e=>e.color??(e.fx?.includes('fire')||e.fx==='explosion'?0xffb05e:e.fx?.includes('water')?0x9beaff:e.fx?.includes('lightning')?0xb2e6ff:0xdbe9b2);
function remember(s,record){s.liveVFX||=[];if(s.liveVFX.length>=180){const old=s.liveVFX.shift();for(const key of ['g','body','rock','overlay','label'])old[key]?.destroy();}s.liveVFX.push(record);return record;}
function spriteFX(s,key,x,y,size,alpha=.8){
 if(!s.anims.exists('fx:'+key))return null;const sprite=s.add.sprite(x,y,'fx:'+key).setDisplaySize(size,size).setAlpha(alpha).setDepth(2600).play('fx:'+key);sprite.once('animationcomplete',()=>sprite.destroy());return sprite;
}
function art(s,id,x,y,size,alpha=.7){
 if(!s.textures.exists('art:'+id))return null;const image=s.add.image(x,y,'art:'+id);return image.setDisplaySize(size,size*image.height/image.width).setAlpha(alpha).setDepth(2450);
}
function pulse(s,e,{duration=.75,particles=20,meteor=false}={}){
 const radius=e.radius||e.size/2||55,g=s.add.graphics().setDepth(2440),color=colorOf(e),points=Array.from({length:particles},(_,i)=>({angle:i/particles*TAU+Math.random()*.15,speed:.7+Math.random()*.8,size:2+Math.random()*4}));
 if(e.gem){e={...e,color:{fire:0xff8b44,ice:0x91e5ff,thunder:0xe7cb67,poison:0x97d66a,dark:0xb696ed,wind:0x8be4cf}[e.gem]};}
 const skill=e.skill||'',artId=meteor?'fireburst':['cleave','earthquake','arrow-rain','thunderstrike','tempest','multishot','shield-bash','bulwark','rally','fireburst','flamefield','frostnova','blizzard','healing-tide'].includes(skill)?skill:null;
 const overlay=artId?art(s,artId,e.x,e.y,Math.min(radius*2.2,520),e.alpha??.7):null;
 if(!overlay&&e.fx)spriteFX(s,e.fx,e.x,e.y,Math.min(radius*2.1,480),.65);
 remember(s,{kind:'pulse',age:0,duration,g,overlay,e,radius,color:e.gem?e.color:color,points,meteor,spin:skill==='blizzard'?1.2:skill==='bladestorm'?2.8:0});
}
export function renderEvent(s,e,seen){
 if(seen.has(e.id))return;seen.add(e.id);if(seen.size>3000)seen.delete(seen.values().next().value);
 if(e.type==='shadow-vfx'){addShadowVFX(s,e);return;}
 if(e.type==='boss-warning'||e.type==='boss-impact'||e.type==='enemy-summon'){addBossVFX(s,e);return;}
 if(e.type==='relic-pickup'){const label=s.add.text(e.x,e.y-48,e.text+' · VĨNH VIỄN',{fontFamily:'Segoe UI',fontSize:'12px',fontStyle:'bold',color:'#'+e.color.toString(16).padStart(6,'0'),stroke:'#15241f',strokeThickness:4}).setOrigin(.5).setDepth(3200);remember(s,{kind:'relic',g:s.add.graphics().setDepth(3000),label,e,age:0,duration:1.4});return;}
 if(e.family&&['effect','impact'].includes(e.type)){remember(s,{kind:'monster-hit',g:s.add.graphics().setDepth(2500),e,age:0,duration:.5});return;}
 if(e.type==='projectile-hit'){const v=s.liveVFX?.find(v=>v.e.id===e.shotId);if(v){v.age=v.duration;v.body?.setVisible(false);}return;}
 if(e.type==='healing'){remember(s,{kind:'healing',g:s.add.graphics().setDepth(3000),e,age:0,duration:1,points:Array.from({length:12},(_,i)=>({x:(i%4-1.5)*14,y:Math.floor(i/4)*17,phase:i*.16}))});if(e.drainFrom)renderEvent(s,{id:e.id+':drain',type:'drain',x:e.drainFrom.x,y:e.drainFrom.y,tx:e.x,ty:e.y,color:0xdf728f},seen);renderEvent(s,{id:e.id+':amount',type:'dot',x:e.x,y:e.y-30,text:'+'+e.amount,color:0x6af18c},seen);return;}
 if(e.type==='assassin-vfx'){if(e.action==='double'||e.action==='flurry')addShadowVFX(s,{...e,action:'dagger',radius:90});remember(s,{kind:'assassin',g:s.add.graphics().setDepth(2600),e,color:e.color,age:0,duration:e.action==='veil'?.8:.32});return;}
 if(e.type==='gem-hit'){pulse(s,{...e,radius:22,fx:e.gem==='fire'?'fireball':e.gem==='ice'?'waterball':e.gem==='thunder'?'lightning':'poison'},{duration:.35,particles:5});return;}
 if(e.type==='melee-swing'){remember(s,{kind:'swing',g:s.add.graphics().setDepth(2500),e,age:0,duration:.25});return;}
 if(['gold','dot'].includes(e.type)){const t=s.add.text(e.x,e.y,e.type==='gold'?`+${e.amount} ◈`:e.text,{fontFamily:'Segoe UI',fontSize:e.type==='gold'?'13px':'9px',fontStyle:'bold',color:e.type==='gold'?'#ffe19b':'#'+colorOf(e).toString(16).padStart(6,'0'),stroke:'#21321b',strokeThickness:3}).setOrigin(.5).setDepth(3200);s.tweens.add({targets:t,y:e.y-32,alpha:0,duration:800,onComplete:()=>t.destroy()});return;}
 if(e.type==='projectile'){if(e.projectileType==='leaf')addShadowVFX(s,{...e,action:'leaf-cast',radius:35,duration:.45});
  if(e.silent)return;const g=s.add.graphics().setDepth(2550),body=s.add.container(e.x,e.y).setDepth(2600),shape=s.add.graphics(),color=colorOf(e);
  if(e.family){drawMonsterProjectile(shape,e.family,0,e.element);}
  else if(e.gem){const c=color;shape.lineStyle(4,c,.2).lineBetween(-24,0,10,0);shape.lineStyle(2,c,1);if(e.gem==='thunder'){shape.beginPath().moveTo(-20,-3).lineTo(-3,-7).lineTo(-8,1).lineTo(15,-2).lineTo(0,9).lineTo(3,2).lineTo(-20,-3).strokePath();}else if(e.gem==='ice'){shape.fillStyle(c,.9).fillTriangle(17,0,-12,-7,-12,7).lineStyle(1,0xf0ffff,1).lineBetween(-12,0,12,0);}else if(e.gem==='wind'){shape.beginPath().arc(0,0,14,-1.1,1.1).strokePath();shape.lineStyle(1,0xd5fff5,.8).beginPath().arc(-6,0,14,-1,1).strokePath();}else if(e.gem==='fire'){shape.fillStyle(c,.9).fillCircle(3,0,9).fillTriangle(-24,-7,5,0,-24,7).fillStyle(0xffe2a0).fillCircle(5,0,4);}else if(e.gem==='poison'){shape.fillStyle(c,.8).fillCircle(3,0,9).fillCircle(-11,-3,4).fillCircle(-19,3,2).fillStyle(0xd8f18c,.9).fillCircle(5,-2,3);}else{shape.fillStyle(0x261638,.9).fillCircle(0,0,11).lineStyle(2,c,.9).strokeCircle(0,0,11).fillStyle(c,.65).fillCircle(0,0,5);}body.setScale(e.enhanced?1.25:1);}
  else if(['moon-arrow','leaf'].includes(e.projectileType)){shape.lineStyle(8,color,.12).lineBetween(-28,0,10,0).lineStyle(2,color,1).lineBetween(-23,0,12,0);shape.fillStyle(color,.95);if(e.projectileType==='leaf')shape.fillEllipse(0,0,25,9);else shape.fillTriangle(19,0,7,-6,7,6);shape.lineStyle(1,0xf1eaff,.9).lineBetween(-18,-4,-11,0).lineBetween(-18,4,-11,0);}
  else if(e.projectileType==='arrow'){shape.lineStyle(5,color,.18).lineBetween(-19,0,12,0);shape.lineStyle(2,color,1).lineBetween(-19,0,10,0);shape.fillStyle(color).fillTriangle(16,0,6,-4,6,4);shape.lineStyle(1,0xfff0c4,.8).lineBetween(-18,-4,-12,0).lineBetween(-18,4,-12,0);}
  else {shape.fillStyle(color,.1).fillCircle(0,0,18);shape.fillStyle(color,.25).fillCircle(0,0,12);shape.fillStyle(color,.95).fillCircle(0,0,7);shape.fillStyle(0xffffff,.9).fillCircle(-2,-2,3);}
  body.add(shape);if(e.skill==='venom'&&s.textures.exists('art:venom')){shape.setVisible(false);const arrow=s.add.image(0,0,'art:venom');arrow.setDisplaySize(66,66*arrow.height/arrow.width);body.add(arrow);}
  remember(s,{kind:'projectile',g,body,e,color,age:0,duration:e.duration||.4,points:[],last:{x:e.x,y:e.y}});return;
 }
 if(e.type==='meteor-fall'){
  const g=s.add.graphics().setDepth(2400),rock=art(s,'meteor',e.x-180,e.y-520,115,1)||s.add.graphics().setDepth(2700);rock.setDepth(2700);if(rock.type==='Image')rock.setOrigin(.76,.76);
  remember(s,{kind:'meteor',age:0,duration:e.duration||1.1,g,rock,e,color:0xffb269});return;
 }
 if(e.type==='meteor-impact'){pulse(s,e,{duration:1.35,particles:40,meteor:true});spriteFX(s,'explosion',e.x,e.y,e.radius*1.8,.9);const cam=s.cameras.main;if(Math.hypot(cam.midPoint.x-e.x,cam.midPoint.y-e.y)<700)cam.shake(180,.005);return;}
 if(e.type==='warning'){remember(s,{kind:'warning',age:0,duration:e.duration||.4,g:s.add.graphics().setDepth(20),e,color:colorOf(e)});return;}
 if(e.type==='aoe'){pulse(s,e,{duration:e.previewDuration||(e.skill==='blizzard'||e.skill==='flamefield'?1.05:.8),particles:e.radius>100?24:12});return;}
 if(e.type==='aura'||e.type==='heal'){pulse(s,{...e,fx:null,radius:Math.min(e.radius||e.size/2||60,90)},{duration:.8,particles:10});return;}
 if(e.type==='impact'||e.type==='enemy-death'){pulse(s,{...e,radius:Math.min(e.radius||30,110)},{duration:.45,particles:e.radius>60?18:7});return;}
 if(e.type==='lightning'&&e.skill==='chain-lightning'){const x=(e.x+e.tx)/2,y=(e.y+e.ty)/2,overlay=art(s,'chain-lightning',x,y,Math.hypot(e.tx-e.x,e.ty-e.y),.75);if(overlay){overlay.rotation=Math.atan2(e.ty-e.y,e.tx-e.x);s.tweens.add({targets:overlay,alpha:0,duration:300,onComplete:()=>overlay.destroy()});}}
 if(e.type==='lightning'||e.type==='drain'||e.type==='trail'||e.type==='bolt'){
  remember(s,{kind:'beam',age:0,duration:e.type==='drain'?.45:.24,g:s.add.graphics().setDepth(2550),e,color:colorOf(e)});if(e.type==='lightning')spriteFX(s,'bolt-strike-2',e.tx,e.ty-45,110,.65);return;
 }
 if(e.type==='effect'){spriteFX(s,e.fx||'wind',e.x,e.y,e.size||90,.8);}
}
export function updateVFX(s,dt){
 updateShadowVFX(s,dt);updateBossVFX(s,dt);
 const alive=[];for(const v of s.liveVFX||[]){v.age+=dt;const t=Math.min(1,v.age/v.duration),fade=1-t,g=v.g;g?.clear();
  if(v.kind==='assassin'){const e=v.e,g=v.g;const owner=s.actorObjects?.get(e.sourceId)?.sprite,x=e.action==='veil'?(owner?.x??e.x):e.x,y=e.action==='veil'?(owner?.y??e.y):e.y;if(e.action==='veil'){for(let i=0;i<9;i++){const a=i/9*TAU+t*2;g.fillStyle(i%2?0x647853:0xb7c790,fade*.35).fillCircle(x+Math.cos(a)*(12+t*30),y-20+Math.sin(a)*16-t*20,4+fade*7);}}else{for(let i=0;i<(e.action==='double'?2:3);i++){const a=(e.angle||0)+i*.55-1+t*2.4;g.lineStyle(4,0x8ea670,fade*.4).beginPath().arc(x,y-20,24+i*9,a-.9,a).strokePath();g.lineStyle(1,0xe8edc5,fade).beginPath().arc(x,y-20,24+i*9,a-.9,a).strokePath();}}}
  else if(v.kind==='projectile'){
   const target=s.actorObjects?.get(v.e.targetId)?.sprite,tx=target?.active?target.x:v.e.tx,ty=target?.active?target.y-20:v.e.ty;
   const bend=v.e.family||v.e.straight||v.e.projectileType==='arrow'?0:Math.min(45,Math.hypot(tx-v.e.x,ty-v.e.y)*.12),x=v.e.x+(tx-v.e.x)*t,y=v.e.y+(ty-v.e.y)*t-Math.sin(t*Math.PI)*bend;
   if(v.e.family){const shape=v.body.list[0];shape.clear();drawMonsterProjectile(shape,v.e.family,v.age,v.e.element);}
   v.body.setPosition(x,y).setRotation(Math.atan2(y-v.last.y,x-v.last.x));v.points.push({x,y});if(v.points.length>12)v.points.shift();
   for(let i=1;i<v.points.length;i++){const a=v.points[i-1],b=v.points[i];g.lineStyle(v.e.projectileType==='arrow'?2:2+i/3,v.color,i/v.points.length*.45).lineBetween(a.x,a.y,b.x,b.y);}v.last={x,y};
  }else if(v.kind==='monster-hit'){drawMonsterHit(g,v.e,t);
  }else if(v.kind==='relic'){drawRelicPickup(g,v.e,t);v.label?.setPosition(v.e.x,v.e.y-48-t*52).setAlpha(fade);
  }else if(v.kind==='healing'){
   const target=s.actorObjects?.get(v.e.targetId)?.sprite,x=target?.active?target.x:v.e.x,y=target?.active?target.y-25:v.e.y;
   for(const p of v.points){const py=y+p.y-t*58,px=x+p.x+Math.sin(v.age*3+p.phase)*5,a=fade*.9;g.lineStyle(2,0x65f18a,a).lineBetween(px-4,py,px+4,py).lineBetween(px,py-4,px,py+4);}
  }else if(v.kind==='swing'){
   const e=v.e,a=e.angle-1.2+t*2.4;g.lineStyle(5,e.color,fade*.8);g.beginPath();g.arc(e.x,e.y,e.radius*.8,a-.8,a);g.strokePath();g.lineStyle(2,0xfff6d8,fade).lineBetween(e.x+Math.cos(a)*15,e.y+Math.sin(a)*15,e.x+Math.cos(a)*e.radius,e.y+Math.sin(a)*e.radius);
  }else if(v.kind==='meteor'){
   const {x,y,radius}=v.e;g.fillStyle(0x251b17,.1+t*.2).fillEllipse(x,y,radius*(.3+t*.65),radius*(.1+t*.25));g.lineStyle(2,0xffb579,.3+t*.6).strokeCircle(x,y,radius);g.lineStyle(1,0xffdfad,.2).strokeCircle(x,y,radius*(1-t*.8));
   const rockX=x-190*(1-t),rockY=y-560*(1-t*t);g.lineStyle(34,0xff8c37,.07).lineBetween(rockX-55,rockY-145,rockX,rockY);g.lineStyle(16,0xffca65,.25).lineBetween(rockX-35,rockY-95,rockX,rockY);
   for(let i=0;i<10;i++){const k=(t+i/10)%1;g.fillStyle(i%2?0xffe3a0:0xff9544,(1-k)*.8).fillCircle(rockX-k*70+(i%3-1)*12,rockY-k*170,2+(1-k)*3);}
   if(v.rock.type==='Image')v.rock.setPosition(rockX,rockY).setScale((.065+.035*t));
   else {v.rock.clear().fillStyle(0xffb164,.6).fillCircle(rockX,rockY,21).fillStyle(0x44372c).fillCircle(rockX,rockY,15).lineStyle(2,0xffc468).lineBetween(rockX-10,rockY+3,rockX+10,rockY-5);}
  }else if(v.kind==='warning'){
   const r=v.e.radius||40;g.fillStyle(v.color,.08+t*.12).fillCircle(v.e.x,v.e.y,r);g.lineStyle(2,v.color,.5+t*.4).strokeCircle(v.e.x,v.e.y,r).lineStyle(1,v.color,.5).strokeCircle(v.e.x,v.e.y,r*(1-t));
  }else if(v.kind==='beam'){
   const e=v.e;g.lineStyle(e.type==='drain'?4:3,v.color,fade*.9);g.beginPath();g.moveTo(e.x,e.y);for(let i=1;i<9;i++){const k=i/9,offset=e.type==='lightning'?Math.sin(i*4+v.age*80)*9:Math.sin(k*Math.PI)*12;g.lineTo(e.x+(e.tx-e.x)*k+offset,e.y+(e.ty-e.y)*k-offset);}g.lineTo(e.tx,e.ty);g.strokePath();
  }else if(v.kind==='pulse'){
   const {x,y}=v.e,r=v.radius,ease=1-(1-t)**3;g.fillStyle(v.color,.08*fade).fillCircle(x,y,r*ease);g.lineStyle(v.meteor?5:3,v.color,fade*.7).strokeCircle(x,y,r*ease);g.lineStyle(1,0xfff3ce,fade*.5).strokeCircle(x,y,r*Math.max(0,ease-.16));
   for(const p of v.points){const a=p.angle+v.spin*t,travel=r*(.1+ease*p.speed);g.fillStyle(v.color,fade*.8).fillCircle(x+Math.cos(a)*travel,y+Math.sin(a)*travel*(v.meteor?.65:1)-Math.sin(t*Math.PI)*p.speed*30,p.size*fade+1);}
   if(v.meteor){for(let i=0;i<9;i++){const a=i/9*TAU;g.lineStyle(2,0x342e24,fade*.65).lineBetween(x+Math.cos(a)*20,y+Math.sin(a)*14,x+Math.cos(a)*r*.7,y+Math.sin(a)*r*.45);}}
   if(v.e.skill==='arrow-rain')for(let i=0;i<18;i++){const a=i*2.399,fall=(v.age*2+i/18)%1,px=x+Math.cos(a)*r*.85,py=y+Math.sin(a)*r*.55-(1-fall)*160;g.lineStyle(2,0xffde86,fade*.85).lineBetween(px-13,py-24,px,py);g.fillStyle(0xfff2bb,fade).fillTriangle(px,py+5,px-5,py-2,px+2,py-5);}
   if(v.e.skill==='tempest')for(let i=0;i<6;i++){const a=i/6*TAU,px=x+Math.cos(a)*r*.75,py=y+Math.sin(a)*r*.5;g.lineStyle(2,0xbcc4ff,fade*(.4+Math.sin(v.age*45+i)*.3)).lineBetween(px,py-95,px+Math.sin(v.age*60+i)*10,py-40).lineBetween(px+Math.sin(v.age*60+i)*10,py-40,px,py);}
   if(v.overlay){v.overlay.setAlpha(fade*(v.e.alpha??.75)).setScale(v.overlay.displayWidth/v.overlay.width*(.995+ease*.009));if(v.spin)v.overlay.rotation+=dt*v.spin;}
  }
  if(t>=1){g?.destroy();v.body?.destroy();v.rock?.destroy();v.overlay?.destroy();v.label?.destroy();}else alive.push(v);
 }s.liveVFX=alive;
}
export function clearVFX(s){clearShadowVFX(s);clearBossVFX(s);s.lootGraphics?.clear();for(const v of s.liveVFX||[]){v.g?.destroy();v.body?.destroy();v.rock?.destroy();v.overlay?.destroy();v.label?.destroy();}s.liveVFX=[];}
export function unitVFX(s,u,obj,time){
 if(u.hp<=0){obj.buffArt?.destroy();obj.buffArt=null;obj.buffArtId=null;return;}
 const g=s.unitGlow,ground=s.unitGround,x=obj.sprite.x,y=obj.groundY??obj.sprite.y,pulse=.6+Math.sin(time/160)*.25;
 if(u.boss&&u.family){drawBossBuff(g,u,x,obj.sprite.y,time);const c=ENEMY_FAMILIES[u.family].color;ground.lineStyle(2,c,.4).strokeEllipse(x,y,90,35);if(u.bossCast)g.fillStyle(c,.2).fillCircle(x,obj.sprite.y-30,35);}
 if(u.flying){ground.fillStyle(0x14231c,.22).fillEllipse(x,y+3,30,12);g.lineStyle(1,u.special==='venom'?0xb6df85:0xb7b9e6,.12).strokeCircle(x,obj.sprite.y-14,22);}
 const buffs=(u.buffs||[]).filter(b=>b.time>0),fury=buffs.some(b=>b.lifesteal||b.powerMultiplier)||(u.hero==='warrior-2'&&u.hp<u.stats?.hp*.4),haste=buffs.some(b=>b.haste),shield=!u.boss&&(u.shield>0||buffs.some(b=>b.armor>0)),blessed=buffs.some(b=>b.aura==='rally'),speed=buffs.some(b=>b.speed>0);
 if(fury||haste||shield||blessed){
  const color=fury?0xff9556:haste?0xc59bff:shield?0xffdc94:blessed?0xffdf96:0xc2e49b,r=shield?35:30;
  ground.fillStyle(color,.06).fillEllipse(x,y,r*2.5,r);ground.lineStyle(2,color,pulse*.7).strokeEllipse(x,y,r*2,r*.75);
  for(let i=0;i<6;i++){const a=time/550+i/6*TAU;ground.fillStyle(color,pulse*.8).fillCircle(x+Math.cos(a)*r,y+Math.sin(a)*r*.38,2);g.fillStyle(color,.6).fillCircle(x+Math.cos(a)*24,y-12-((time/30+i*9)%48),1.8);}
  if(!obj.empoweredId){const wx=x+(u.face||1)*16,wy=obj.sprite.y-27;g.fillStyle(color,.09).fillCircle(wx,wy,19).fillStyle(color,pulse*.22).fillCircle(wx,wy,12).lineStyle(4,color,.45).lineBetween(wx,wy+9,wx+(u.face||1)*9,wy-13).lineStyle(1,0xfff7d1,.9).lineBetween(wx,wy+9,wx+(u.face||1)*9,wy-13);}
 }
 if(shield)for(let i=0;i<3;i++){
  const a=time/650+i/3*TAU,sx=x+Math.cos(a)*36,sy=y-24+Math.sin(a)*15;
  const layer=Math.sin(a)>0?g:ground;layer.lineStyle(2,0xffdc94,.8).fillStyle(0xffdc94,.12);layer.beginPath();layer.moveTo(sx-7,sy-9);layer.lineTo(sx+7,sy-9);layer.lineTo(sx+6,sy+2);layer.lineTo(sx,sy+9);layer.lineTo(sx-6,sy+2);layer.closePath();layer.fillPath();layer.strokePath();
 }
 obj.speedTrail||=[];if(speed&&(!obj.trailTime||time-obj.trailTime>65)){obj.trailTime=time;obj.speedTrail.push({x,y,time});}
 obj.speedTrail=obj.speedTrail.filter(p=>time-p.time<450);
 for(const p of obj.speedTrail){const a=(1-(time-p.time)/450)*.35;if(Math.hypot(x-p.x,y-p.y)>3)ground.lineStyle(2,0xbcecff,a).lineBetween(p.x-8,p.y-8,p.x+8,p.y-8).lineBetween(p.x-5,p.y-13,p.x+5,p.y-13);}
 const buffArtId=fury?'fury':shield?'bulwark':blessed?'rally':null;
 if(obj.buffArtId!==buffArtId){obj.buffArt?.destroy();obj.buffArt=null;obj.buffArtId=buffArtId;}
 if(buffArtId&&s.textures.exists('art:'+buffArtId)){
  if(!obj.buffArt)obj.buffArt=art(s,buffArtId,x,y-20,shield?100:110,.7);
  obj.buffArt?.setPosition(x,obj.sprite.y-(blessed?2:20)).setAlpha(.5+pulse*.18).setDepth(shield?2801:1450);
 }else if(obj.buffArt){obj.buffArt.destroy();obj.buffArt=null;}
 if(u.mastery>=2&&u.hero&&!fury){const colors={ranger:0xa7e76a,pyromancer:0xffa75b,stormcaller:0xc0adff,tidecaller:0xa3efff,guardian:0xffda9c,duelist:0xc6e6a5,berserker:0xff9c88},color=colors[u.classId];g.fillStyle(color,.12).fillCircle(x+(u.face||1)*16,obj.sprite.y-26,11);}
 const headY=obj.sprite.y-(obj.size||55)-12;
 if(u.poisonTime>0||u.statuses?.poison){for(let i=0;i<3;i++)g.fillStyle(0xb4dd76,.55).fillCircle(x+(i-1)*8,obj.sprite.y-22-(time/40+i*7)%22,2);g.fillStyle(0xa9ee62,.9).fillCircle(x,headY,6).fillRect(x-4,headY+2,8,6);g.fillStyle(0x243e22).fillCircle(x-2,headY-1,1.5).fillCircle(x+2,headY-1,1.5);}
 if(u.slowTime>0||u.bossSlow>0){
  const type=u.slowType||'ice',c=type==='ice'?0x9be8ff:type==='fire'?0xffa065:type==='poison'?0xb3dd63:0xc4b18b;
  ground.lineStyle(2,c,.6).strokeEllipse(x,y,38,13);
  for(let i=0;i<6;i++){const a=i/6*TAU,px=x+Math.cos(a)*19,py=y+Math.sin(a)*7;ground.lineStyle(1,c,.8);if(type==='ice')ground.lineBetween(px-3,py-4,px+3,py+4).lineBetween(px-3,py+4,px+3,py-4).lineBetween(px,py-5,px,py+5);else if(type==='fire')ground.fillStyle(c,.65).fillTriangle(px-3,py+3,px,py-5-Math.sin(time/90+i)*2,px+3,py+3);else ground.lineBetween(px-4,py+2,px+3,py-3);}
 }
 if(u.statuses?.burn||u.bossBurn>0||u.sprite==='fire-spirit')for(let i=0;i<4;i++)g.fillStyle(i%2?0xffc066:0xff8f45,.7).fillTriangle(x+(i-1.5)*8,obj.sprite.y-10,x+(i-1.5)*8-3,obj.sprite.y-20-((time/35+i*8)%15),x+(i-1.5)*8+4,obj.sprite.y-13);
 if(u.healer||u.special==='drain'){const color=u.healer?0xb5a2ec:0xd78cb8;ground.lineStyle(1,color,.3).strokeEllipse(x,y,42,17);}
 if(u.stun>0){g.lineStyle(2,0xffe8a1,.9).beginPath();for(let i=0;i<=48;i++){const a=i/48*TAU*2+time/250,r=3+i/48*13,px=x+Math.cos(a)*r,py=headY+Math.sin(a)*r*.35;i?g.lineTo(px,py):g.moveTo(px,py);}g.strokePath();for(let i=0;i<3;i++){const a=time/190+i/3*TAU;g.fillStyle(0xffe8a1,.9).fillCircle(x+Math.cos(a)*14,headY+Math.sin(a)*5,2.5);}}
}


