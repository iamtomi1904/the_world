import {randomUUID} from 'node:crypto';
import {GEM_RULES as C,equippedGem} from './public/gems.js';
import {TROOPS,MAPS} from './public/content.js';
const dist=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
const emit=(r,e)=>r.events.push({id:randomUUID(),...e});
export function effect(e,id,p,duration,extra={}){e.gemEffects||={};const old=e.gemEffects[id];return e.gemEffects[id]={id,source:p.id,target:e.id,element:id,duration,time:duration,stacks:old?.stacks||0,clock:old?.clock??1,...old,source:p.id,...extra,time:duration};}
export function gemArmorDamage(p,e,n){const armor=Math.max(0,(e.armor||0)*(1-Math.min(C.dark.maxStacks,e.gemEffects?.dark?.stacks||0)*C.dark.armorPerStack));return Math.max(0,n-armor*(equippedGem(p)?.id==='dark'?1-C.dark.penetration:1));}
export function gemHit(r,p,e,n,kind,ctx,random=Math.random){
 const g=equippedGem(p);if(!g||!['basic','skill','zone'].includes(kind))return;const basic=kind==='basic',direct=kind!=='zone';
 emit(r,{type:'gem-hit',gem:g.id,targetId:e.id,x:e.x,y:e.y-20,color:g.color});
 if(g.id==='thunder'&&direct){const c=C.thunder;if(basic){p.thunderStacks=Math.min(c.maxStacks,(p.thunderStacks||0)+1);p.thunderTime=c.stackDuration;}if(random()<(p.classId==='stormcaller'?c.mageChance:c.chance))effect(e,'thunder',p,c.stun,{stun:true});const targets=r.enemies.filter(a=>a!==e&&a.hp>0&&dist(e,a)<=c.radius).sort((a,b)=>dist(e,a)-dist(e,b)).slice(0,Math.min(c.maxTargets,c.baseTargets+Math.max(0,(p.thunderStacks||0)-1)));for(const a of targets){ctx.damage(a,n*(p.classId==='stormcaller'?c.mageSplash:c.splash),p);emit(r,{type:'lightning',x:e.x,y:e.y-20,tx:a.x,ty:a.y-20,color:g.color});}}
 if(g.id==='ice'){const c=C.ice,mage=p.classId==='tidecaller';effect(e,'ice',p,c.duration,{slow:mage?c.mageSlow:c.slow});if(basic){const s=effect(e,'freeze-stack',p,c.stackDuration,{stacks:Math.min(c.maxStacks,(e.gemEffects?.['freeze-stack']?.stacks||0)+1)});if(random()<s.stacks*(mage?c.mageStep:c.step)){effect(e,'freeze',p,mage?c.mageFreeze:c.freeze,{stun:true});delete e.gemEffects['freeze-stack'];}}}
 if(g.id==='fire'&&direct&&random()<C.fire.chance){const percent=p.classId==='pyromancer'?C.fire.magePercent:C.fire.percent,prev=e.gemEffects?.fire;effect(e,'fire',p,C.fire.duration,{percent:Math.max(percent,prev?.percent||0),tickInterval:1,maxStacks:1,refresh:'refresh'});}
 if(g.id==='poison'&&direct)addPoison(e,p);
 if(g.id==='dark'&&direct&&e.boss)effect(e,'dark',p,C.dark.duration,{stacks:Math.min(C.dark.maxStacks,(e.gemEffects?.dark?.stacks||0)+1),maxStacks:C.dark.maxStacks,refresh:'refresh'});
 if(g.id==='wind'&&basic){p.windStacks=Math.min(C.wind.maxStacks,(p.windStacks||0)+1);p.windTime=C.wind.duration;}
}
export function addPoison(e,p){return effect(e,'poison',p,C.poison.duration,{stacks:Math.min(C.poison.maxStacks,(e.gemEffects?.poison?.stacks||0)+1),maxStacks:C.poison.maxStacks,tickInterval:1,refresh:'refresh'});}
export function gemKill(r,e,p,direct){
 if(e.gemEffects?.poison){r.poisonPools||=[];r.poisonPools.push({id:randomUUID(),source:e.gemEffects.poison.source,x:e.x,y:e.y,time:C.poison.poolDuration,radius:C.poison.poolRadius,touched:[]});}
 if(!direct)return;const g=equippedGem(p);if(g?.id==='wind')p.windPermanent=(p.windPermanent||0)+C.wind.killBonus;
 if(g?.id==='dark'){const owned=r.troops.filter(t=>t.type==='gem-skeleton'&&t.owner===p.id&&t.hp>0);if(owned.length>=C.dark.skeletonLimit)owned.sort((a,b)=>a.born-b.born)[0].hp=0;const def=TROOPS.find(t=>t.id==='gem-skeleton'),t={id:randomUUID(),owner:p.id,type:def.id,sprite:def.sprite,x:e.x,y:e.y,hp:def.hp,maxHp:def.hp,cd:0,anim:0,face:1,summoned:true,lifetime:C.dark.skeletonDuration,born:r.elapsed};r.troops.push(t);emit(r,{type:'gem-hit',gem:'dark',x:e.x,y:e.y-20,color:g.color});}
}
export function tickGemPlayer(p,dt){for(const [time,stacks]of [['windTime','windStacks'],['thunderTime','thunderStacks']]){p[time]=Math.max(0,(p[time]||0)-dt);if(!p[time])p[stacks]=0;}}
export function tickGemTarget(r,e,dt,ctx){
 e.gemStun=0;e.gemSlow=0;
 for(const [id,s]of Object.entries(e.gemEffects||{})){const elapsed=Math.min(dt,Math.max(0,s.time));s.time-=dt;if(s.stun)e.gemStun=Math.max(e.gemStun,s.time);if(s.slow&&s.time>0)e.gemSlow=Math.max(e.gemSlow,s.slow);
 if(s.tickInterval){s.clock-=elapsed;while(s.clock<=1e-9&&e.hp>0){s.clock+=s.tickInterval;const p=r.players.find(p=>p.id===s.source);if(p){const fraction=id==='poison'?Math.min(s.stacks*C.poison.percent,e.boss?C.poison.bossCap:Infinity):Math.min(s.percent,e.boss?C.fire.bossCap:Infinity),n=e.maxHp*fraction;ctx.damage(e,n,p);emit(r,{type:'dot',x:e.x,y:e.y-40,text:'−'+Math.round(n)+(id==='poison'?' ĐỘC':' CHÁY'),color:id==='poison'?0x97d66a:0xff8b44});}}
 }if(s.time<=1e-9)delete e.gemEffects[id];if(e.hp<=0){e.gemEffects={};break;}}
}
export function tickPoisonPools(r,dt){r.poisonPools=(r.poisonPools||[]).filter(pool=>{pool.time-=dt;if(pool.time<=0)return false;const p=r.players.find(p=>p.id===pool.source);if(p)for(const e of r.enemies)if(e.hp>0&&!e.flying&&!pool.touched.includes(e.id)&&dist(e,pool)<=pool.radius){pool.touched.push(e.id);addPoison(e,p);}return true;});}
export function carryGems(p){p.windPermanent=(p.windPermanent||0)*C.wind.carry;p.windStacks=0;p.windTime=0;p.thunderStacks=0;p.thunderTime=0;}
