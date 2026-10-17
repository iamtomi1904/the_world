import {drawEnemySpell,drawSummonPortal} from './enemy-spell-art.js';
import {bossImpactAccent} from './boss-impact-art.js';
function polygon(g,points,color,alpha){g.fillStyle(color,alpha);g.beginPath();points.forEach((p,i)=>i?g.lineTo(p[0],p[1]):g.moveTo(p[0],p[1]));g.closePath();g.fillPath();g.lineStyle(2,color,Math.min(1,alpha*4));g.strokePath();}
export function bossShape(g,e,alpha=.2){
 const color=e.color||0xf3a183,r=e.radius||115;
 if(e.shape==='multi'){for(const p of e.points||[])bossShape(g,{...e,...p,shape:'circle'},alpha);return;}
 if(e.shape==='line'){const x=e.x,y=e.y,dx=Math.cos(e.angle)*e.length,dy=Math.sin(e.angle)*e.length,px=-Math.sin(e.angle)*e.width/2,py=Math.cos(e.angle)*e.width/2;polygon(g,[[x+px,y+py],[x+dx+px,y+dy+py],[x+dx-px,y+dy-py],[x-px,y-py]],color,alpha);return;}
 if(e.shape==='cone'){const points=[[e.x,e.y]];for(let n=0;n<=24;n++){const a=e.angle-e.arc/2+e.arc*n/24;points.push([e.x+Math.cos(a)*e.length,e.y+Math.sin(a)*e.length]);}polygon(g,points,color,alpha);return;}
 if(e.shape==='ring'){g.lineStyle(r-(e.inner||0),color,alpha).strokeCircle(e.x,e.y,(r+(e.inner||0))/2).lineStyle(2,color,alpha*3).strokeCircle(e.x,e.y,r).strokeCircle(e.x,e.y,e.inner||0);return;}
 g.fillStyle(color,alpha).fillCircle(e.x,e.y,e.shape==='self'?65:r).lineStyle(2,color,Math.min(1,alpha*4)).strokeCircle(e.x,e.y,e.shape==='self'?65:r);
}
export function addBossVFX(s,e){
 if(e.type==='boss-impact'&&e.shape!=='self'&&!e.alpha&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const cam=s.cameras?.main,now=Date.now();if(cam&&now-(s.lastBossShake||0)>450&&Math.hypot(cam.midPoint.x-e.x,cam.midPoint.y-e.y)<700){s.lastBossShake=now;cam.shake(e.skill==='meteor'||e.family==='stone'?180:110,e.skill==='meteor'||e.family==='stone'?.004:.0018);}}
 s.bossVFX||=[];const warning=e.type==='boss-warning',g=s.add.graphics().setDepth(warning?18:2550),label=warning?s.add.text(e.x,e.y-(e.radius||80)-25,e.name||'',{fontFamily:'Segoe UI',fontSize:'12px',color:'#ffe7b7',stroke:'#271d18',strokeThickness:3}).setOrigin(.5).setDepth(3100):null;
 s.bossVFX.push({e,g,label,age:0,duration:warning?e.duration||1.2:e.type==='enemy-summon'?1.6:1.15,warning});
}
export function updateBossVFX(s,dt){
 const alive=[];for(const v of s.bossVFX||[]){v.age+=dt;const t=Math.min(1,v.age/v.duration),e=v.e,g=v.g;g.clear();
  if(e.type==='enemy-summon')drawSummonPortal(g,e,t);
  else if(v.warning){bossShape(g,e,.06+t*.12);if(e.shape==='circle'||e.shape==='multi')for(const p of e.points||[e])g.lineStyle(1,0xffedb9,.5).strokeCircle(p.x,p.y,e.radius*(1-t));drawEnemySpell(g,e,t,true);}
  else {bossImpactAccent(g,e,t);drawEnemySpell(g,e,t);}
  if(t>=1){g.destroy();v.label?.destroy();}else alive.push(v);
 }s.bossVFX=alive;
}
export function drawHostileZones(s,zones,time){
 s.hostileGraphics||=s.add.graphics().setDepth(15);s.hostileGraphics.clear();
 for(const z of zones||[]){bossShape(s.hostileGraphics,z,.06);drawEnemySpell(s.hostileGraphics,{...z,alpha:.4},.25+(time%900)/1800);}
}
export function clearBossVFX(s){for(const v of s.bossVFX||[]){v.g.destroy();v.label?.destroy();}s.bossVFX=[];s.hostileGraphics?.clear();}
