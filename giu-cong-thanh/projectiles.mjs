import {equippedGem} from './public/gems.js';
import {enemyFamily} from './public/enemy-visuals.js';
import {randomUUID} from 'node:crypto';
export const canHitAir=(target,range=0)=>!target.flying||(target.altitude||0)<=14||range>100;
export function shotStyle(attacker){
 const gem=equippedGem(attacker);if(gem)return {color:gem.color,fx:gem.id==='fire'?'fireball':gem.id==='thunder'?'lightning':gem.id==='ice'?'waterball':'poison',projectileType:gem.id,gem:gem.id,enhanced:['pyromancer','stormcaller','tidecaller'].includes(attacker.classId)};
 if(attacker.classId==='darkelf')return {color:0xc0adee,fx:'wind',projectileType:'moon-arrow'};
 const c=attacker.classId,empowered=attacker.buffs?.some(b=>b.time>0&&(b.haste||b.lifesteal));
 if(attacker.attackFx==='poison')return {color:0xa1e25c,fx:'poison',projectileType:'venom'};
 if(c==='ranger'||attacker.type==='archer')return {color:attacker.mastery>=2?0xa7ee6b:empowered?0xffef9c:0xe4ca8d,fx:'wind',projectileType:'arrow'};
 if(c==='pyromancer'||attacker.sprite==='fire-spirit')return {color:empowered||attacker.mastery>=2?0xff6a35:0xffb43f,fx:'fireball',projectileType:'fire'};
 if(c==='stormcaller')return {color:empowered||attacker.mastery>=2?0xdfabff:0x8bdfff,fx:'lightning',projectileType:'spark'};
 if(c==='tidecaller')return {color:empowered||attacker.mastery>=2?0xc7f8ff:0x74d5dc,fx:'waterball',projectileType:'water'};
 if(attacker.sprite==='orc-shaman')return {color:0xc5a1ff,fx:'poison',projectileType:'shadow'};
 if(attacker.attackFx==='blood')return {color:0xea86b8,fx:'poison',projectileType:'shadow'};
 if(attacker.attackFx==='lightning'||attacker.type==='battle-mage')return {color:0xc69fff,fx:'bolt-strike-3',projectileType:'spark'};
 if(attacker.attackFx==='water')return {color:0xa5e9ff,fx:'waterball',projectileType:'water'};
 if(attacker.attackFx==='fire')return {color:0xffa04b,fx:'fireball',projectileType:'fire'};
 return {color:attacker.attackFx==='blood'?0xf285a8:0xf4c990,fx:'wind',projectileType:'arrow'};
}
export function launch(r,source,target,resolve,options={}){
 const duration=Math.max(.1,Math.min(.65,Math.hypot(target.x-source.x,target.y-source.y)/750));
 const id=randomUUID();r.projectiles.push({id,remaining:duration,target,resolve});
 r.events.push({id,type:'projectile',family:enemyFamily(source),element:source.attackFx,sourceId:source.id,targetId:target.id,x:source.x,y:source.y-24-(source.altitude||0),tx:target.x,ty:target.y-20-(target.altitude||0),size:options.projectileType==='arrow'?32:42,duration,...shotStyle(source),...options});
}
export function advanceProjectiles(r,dt){
 const pending=r.projectiles;r.projectiles=[];
 for(const p of pending){
  if(p.ballistic){
   let stopped=false;const travel=Math.min(p.left,p.speed*dt);
   for(let step=0;step<travel&&!stopped;step+=6){const d=Math.min(6,travel-step),x=p.x+p.dx*d,y=p.y+p.dy*d;p.left-=d;
    if(!p.walkable(x,y)){stopped=true;break;}
    p.x=x;p.y=y;const hits=r.enemies.filter(e=>e.hp>0&&(!p.filter||p.filter(e))&&(!p.hitIds?.has(e.id))&&canHitAir(e,200)&&Math.hypot(e.x-x,e.y-y)<Math.max(12,(e.size||35)*.3)+(p.width||7)).sort((a,b)=>Math.hypot(a.x-x,a.y-y)-Math.hypot(b.x-x,b.y-y));
    if(hits.length){for(const hit of p.piercing?hits:hits.slice(0,1))if(hit.hp>0){p.hitIds?.add(hit.id);p.resolve(hit);}stopped=!p.piercing;}
   }
   if(stopped||p.left<=.001)r.events.push({id:randomUUID(),type:'projectile-hit',shotId:p.id,x:p.x,y:p.y-20});else r.projectiles.push(p);continue;
  }
  p.remaining-=dt;if(p.remaining<=0){if(p.target.hp>0)p.resolve();}else r.projectiles.push(p);
 }
}
export function launchAimed(r,source,aim,range,resolve,walkable,options={}){
 const length=Math.hypot(aim.x,aim.y)||1,dx=Math.hypot(aim.x,aim.y)<.001?(source.face||1):aim.x/length,dy=aim.y/length,speed=options.speed||650,id=randomUUID();
 r.projectiles.push({id,ballistic:true,x:source.x,y:source.y,dx,dy,left:range,speed,resolve,walkable,filter:options.filter,piercing:!!options.piercing,hitIds:options.piercing?new Set():null,width:options.width});
 r.events.push({id,type:'projectile',sourceId:source.id,x:source.x,y:source.y-20,tx:source.x+dx*range,ty:source.y+dy*range-20,duration:range/speed,...shotStyle(source),...options.style,straight:true});
}

