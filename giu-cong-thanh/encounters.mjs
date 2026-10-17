import {BOSS_SKILLS,bossSkillCount,insideBossShape} from './public/boss-skills.js';
import {healing} from './passives.mjs';
import {FAMILY_MONSTERS} from './public/enemy-families.js';
import {ENEMY_FAMILIES} from './public/enemy-families.js';
import {randomUUID} from 'node:crypto';
import {BOSSES} from './public/bosses.js';
const d=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
export function forestPopulation(r,map,canStand){
 const result=[];let seed=r.stage*3571;const random=()=>{seed=seed*16807%2147483647;return seed/2147483647;};
 for(const [n,camp]of (map.camps||[]).entries())for(let guard=0;guard<2;guard++){
  const def=FAMILY_MONSTERS.find(m=>m.family===camp.family),x=camp.x+(guard?27:-27),y=camp.y+(guard?15:-15);if(!canStand(map,x,y,22))continue;
  const hp=90+r.stage*22;result.push({...def,id:randomUUID(),name:def.name+' · Rừng',sprite:def.id,x,y,home:{x,y},camp:camp.id,hp,maxHp:hp,power:10+r.stage*2,speed:62,range:def.range,cooldown:1.3,cd:0,anim:0,reward:25+r.stage*4,neutral:true,animal:false,face:1});
 }
 for(let n=0;n<6+r.stage;n++){
  let point;for(let attempt=0;attempt<180;attempt++){const p={x:75+random()*1770,y:400+random()*780};if(canStand(map,p.x,p.y,22)&&d(p,map.base)>360){point=p;break;}}
  if(!point)continue;const sprite=['deer','fox','hare'][n%3],hp=35+r.stage*5;result.push({id:randomUUID(),name:'Thú rừng',sprite,...point,home:{...point},hp,maxHp:hp,power:0,speed:90,range:40,cooldown:1.3,cd:0,anim:0,size:30,reward:10+r.stage,neutral:true,animal:true,face:1});
 }
 r.enemies.push(...result);return result;
}
export function bossDefinition(stage,wave){
 const b=BOSSES[stage-1],skills=b.skills.slice(0,bossSkillCount(stage,wave));
 return {...b,sprite:b.actor,bossArt:b.actor,animatedBoss:true,bossSkill:skills[0],bossSkills:skills,bossColor:b.color,skillCursor:0,skillCd:5,pulseCount:0,size:85,
  flying:['dragon','harpy'].includes(b.family),altitude:['dragon','harpy'].includes(b.family)?30:0,attackFx:b.family==='dragon'?'fire':b.family==='undead'?'blood':b.family==='serpent'?'poison':b.family==='stone'?'earth':'wind',name:b.name+(wave<3?' · Tiên phong':'')};
}
function hurtPlayers(r,boss,cast,spec,ctx,multiplier=1){
 let drained=0;
 for(const u of [...r.players,...r.troops]){
  if(u.hp<=0||!insideBossShape(u,cast))continue;
  const armor=u.hero?(ctx.stats?ctx.stats(u).armor:0):2,raw=Math.max(2,boss.power*spec.mult*multiplier-armor)*(u.guard?.3:1),absorbed=Math.min(u.shield||0,raw),damage=raw-absorbed;
  u.shield=Math.max(0,(u.shield||0)-absorbed);drained+=Math.min(u.hp,damage);u.hp=Math.max(0,u.hp-damage);
  if(spec.poison&&u.hero){u.poisonTime=spec.poison;u.poisonClock=1;}
  if(spec.dot&&u.hero){u.bossBurn=3;u.bossBurnDamage=spec.dot;u.bossBurnClock=1;}
  if(spec.slow){u.bossSlow=spec.slowTime||2;u.bossSlowFactor=1-spec.slow;u.slowType=spec.slowType||'physical';}
  if(spec.knockback){const dx=u.x-cast.x,dy=u.y-cast.y,d=Math.hypot(dx,dy)||1;for(let step=0;step<spec.knockback;step+=6){const x=u.x+dx/d*6,y=u.y+dy/d*6;if(ctx.canStand&&!ctx.canStand(x,y))break;u.x=x;u.y=y;}}
 }
 if(spec.drain&&drained)healing(r,boss,drained*spec.drain,boss.maxHp);
}
export function tickHostileZones(r,dt,ctx){
 r.hostileZones=(r.hostileZones||[]).filter(z=>{
  z.time-=dt;z.clock-=dt;if(z.clock<=0){z.clock+=.8;hurtPlayers(r,{power:z.power,hp:1,maxHp:1},z,z.spec,ctx,.55);ctx.fx({type:'boss-impact',...z,id:randomUUID(),alpha:.35});}return z.time>0;
 });
}
export function bossTick(r,e,dt,ctx){
 if(!e.boss)return;
 if(e.skillPose){e.skillPose.time=Math.max(0,e.skillPose.time-dt);if(!e.skillPose.time)e.skillPose=null;}
 if(e.frenzyTime>0){e.frenzyTime-=dt;if(e.frenzyTime<=0){e.speed=e.baseSpeed;e.cooldown=e.baseCooldown;}}
 if(e.shieldTime>0){e.shieldTime-=dt;if(e.shieldTime<=0)e.shield=0;}
 if(e.bossCast){
  e.bossCast.time-=dt;if(e.bossCast.time>0)return;
  const c=e.bossCast,spec=BOSS_SKILLS[c.skill];e.bossCast=null;e.skillPose={skill:c.skill,angle:c.angle,time:.65,duration:.65};e.face=Math.cos(c.angle)<0?-1:1;e.attackCount=(e.attackCount||0)+1;e.anim=.35;
  if(spec.dash&&(!ctx.canStand||ctx.canStand(c.x,c.y))){e.x=c.x;e.y=c.y;}
  hurtPlayers(r,e,c,spec,ctx);
  if(spec.heal)healing(r,e,e.maxHp*spec.heal,e.maxHp);
  if(spec.shield){e.shield=Math.max(e.shield||0,e.maxHp*spec.shield);e.shieldTime=6;}
  if(spec.frenzy){e.baseSpeed||=e.speed;e.baseCooldown||=e.cooldown;e.speed=e.baseSpeed*1.35;e.cooldown=e.baseCooldown/1.4;e.frenzyTime=spec.frenzy;}
  if(spec.summon&&r.enemies.filter(a=>a.hp>0&&!a.neutral).length<100)for(let i=0;i<spec.count;i++)ctx.summon(e,i,spec.summon);
  ctx.fx({type:'boss-impact',...c,color:e.bossColor,family:e.family,victims:[...r.players,...r.troops].filter(u=>insideBossShape(u,c)).map(u=>({x:u.x,y:u.y}))});
  if(spec.duration){r.hostileZones||=[];r.hostileZones.push({...c,id:randomUUID(),color:e.bossColor,family:e.family,power:e.power,spec,time:spec.duration,clock:.8});}
  return;
 }
 e.skillCd-=dt;if(e.skillCd>0)return;
 const target=[...r.players,...r.troops].filter(u=>u.hp>0&&d(u,e)<520).sort((a,b)=>d(a,e)-d(b,e))[0];if(!target)return;
 const ids=e.bossSkills||[e.bossSkill],id=ids[(e.skillCursor||0)%ids.length],spec=BOSS_SKILLS[id];if(!spec)return;
 e.skillCursor=(e.skillCursor||0)+1;e.skillCd=e.hp<e.maxHp*.4?5:8;e.pulseCount++;
 const directional=['line','cone','self','ring'].includes(spec.shape),x=directional?e.x:target.x,y=directional?e.y:target.y,angle=Math.atan2(target.y-e.y,target.x-e.x);
 const c={duration:spec.delay,sourceId:e.id,sourceX:e.x,sourceY:e.y,skill:id,name:spec.name,shape:spec.shape,x,y,angle,arc:spec.angle||Math.PI/2,radius:spec.radius,length:spec.length||0,width:spec.width||0,inner:spec.inner||0,time:spec.delay,points:spec.shape==='multi'?[-1,0,1].map(n=>({x:Math.max(30,Math.min(1890,target.x+Math.cos(angle+Math.PI/2)*n*spec.spread)),y:Math.max(40,Math.min(1240,target.y+Math.sin(angle+Math.PI/2)*n*spec.spread))})):null};
 e.bossCast=c;ctx.fx({type:'boss-warning',...c,duration:spec.delay,color:e.bossColor,family:e.family});
 
}


