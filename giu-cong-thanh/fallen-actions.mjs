import {coneHits} from './public/combat-geometry.js';
import {FALLEN as C} from './public/fallen-config.js';
const dist=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
export function endFallenForm(p,ctx){if(!p.fallenMounted)return;p.fallenMounted=false;p.cooldowns['fallen-doom']=p.fallenFormCooldown||C.r.cooldown;p.fallenFormCooldown=0;ctx.fx?.({type:'fallen-vfx',action:'revert',sourceId:p.id,x:p.x,y:p.y,radius:100});}
export function castFallen(r,p,s,ctx){
 p.castAnim=.55;p.castCount=(p.castCount||0)+1;
 const ax=p.input?.aimX??p.face??1,ay=p.input?.aimY||0,d=Math.hypot(ax,ay)||1,x=ax/d,y=ay/d,angle=Math.atan2(y,x);
 p.face=x<0?-1:1;p.direction=Math.abs(x)>Math.abs(y)?(x<0?2:3):(y<0?1:0);
 const fx=(action,radius)=>ctx.fx({type:'fallen-vfx',action,sourceId:p.id,x:p.x,y:p.y,angle,radius,mounted:!!p.fallenMounted});
 if(s.kind==='fallen-slash'){
  const range=p.fallenMounted?C.q.mountedRange:C.q.range;
  fx('slash',range);
  for(const e of r.enemies){if(e.hp<=0||e.flying&&!p.fallenMounted)continue;const dx=e.x-p.x,dy=e.y-p.y,len=Math.hypot(dx,dy);if(!coneHits(p,e,{x,y},range,.15)||ctx.clearLine&&!ctx.clearLine(p,e))continue;
   const power=ctx.stats(p).power;ctx.damage(e,power*s.mult*(p.fallenMounted?C.q.mountedMult:1),p,'skill',{penetration:p.fallenMounted?C.q.mountedPenetration:C.q.penetration});
   if(p.fallenMounted&&e.hp>0){ctx.status(e,{bleed:C.q.bleed,statusDuration:C.q.bleedDuration},p,power);fallenMarks(r,p,e,power,ctx);}
  }
 }
 if(s.kind==='fallen-aura'){p.fallenAuraTime=s.duration;fx('aura',C.aura.radius);}
 if(s.kind==='fallen-form'){p.fallenMounted=true;p.fallenFormCooldown=s.cooldown;p.cooldowns[s.id]=0;fx('transform',110);}
}
function fallenMarks(r,p,e,power,ctx){
 if(e.hp<=0)return;
 e.fallenMarks||={};const old=e.fallenMarks[p.id],stacks=(old?.stacks||0)+(p.fallenMounted?C.marks.mountedPerHit:C.marks.perHit)+(p.fallenAura?C.marks.auraExtra:0);
 if(stacks>=C.marks.max){delete e.fallenMarks[p.id];const damage=power*Math.min(e.boss?C.marks.bossPowerCap:Infinity,p.fallenMounted?C.marks.mountedBurst:C.marks.burst);ctx.fx({type:'fallen-vfx',action:'rupture',x:e.x,y:e.y,radius:48,sourceId:p.id});ctx.damage(e,damage,p,'fallen-proc');}
 else e.fallenMarks[p.id]={source:p.id,stacks,time:C.marks.duration};
}
export function fallenBasicHit(r,attacker,e,power,ctx){
 if(e.hp<=0)return;const aura=attacker.fallenAura,owner=attacker.hero?attacker:r.players.find(p=>p.id===attacker.owner);
 if(aura&&owner&&(r.random||Math.random)()<aura.bleedChance){ctx.status(e,{bleed:aura.bleed,statusDuration:C.aura.bleedDuration},owner,power);ctx.fx({type:'fallen-vfx',action:'bleed',x:e.x,y:e.y,radius:24});}
 if(attacker.classId==='fallen')fallenMarks(r,attacker,e,power,ctx);
}
export function tickFallen(r,dt,ctx,active){
 for(const u of [...r.players,...r.troops])u.fallenAura=null;
 for(const p of r.players){if(p.classId!=='fallen')continue;p.fallenAuraTime=Math.max(0,(p.fallenAuraTime||0)-dt);
  if(p.fallenMounted){if(active)p.energy=Math.max(0,p.energy-C.manaDrain*dt);if(p.energy<=0||p.hp<=0||!active)endFallenForm(p,ctx);}
  if(p.hp<=0||!active)continue;const enhanced=p.fallenMounted&&p.skills['fallen-aura']>0;if(!enhanced&&!(p.fallenAuraTime>0))continue;
  const radius=enhanced?C.aura.mountedRadius:C.aura.radius;
  for(const u of [...r.players,...r.troops])if(u.hp>0&&dist(p,u)<=radius){const old=u.fallenAura;u.fallenAura={power:Math.max(old?.power||0,enhanced?C.aura.mountedPower:C.aura.power),haste:Math.max(old?.haste||0,enhanced?C.aura.mountedHaste:C.aura.haste),bleedChance:Math.max(old?.bleedChance||0,enhanced?C.aura.mountedBleedChance:C.aura.bleedChance),bleed:Math.max(old?.bleed||0,enhanced?C.aura.mountedBleed:C.aura.bleed),woundedBonus:Math.max(old?.woundedBonus||0,enhanced?C.aura.woundedBonus:0),enhanced:!!(old?.enhanced||enhanced)};}
 }
 for(const e of r.enemies)for(const [id,mark]of Object.entries(e.fallenMarks||{})){mark.time-=dt;if(mark.time<=0||e.hp<=0||!r.players.some(p=>p.id===id&&p.hp>0))delete e.fallenMarks[id];}
}
