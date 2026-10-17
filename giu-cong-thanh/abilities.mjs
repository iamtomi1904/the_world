import {targetDistance} from './public/combat-geometry.js';
import {castWind} from './wind-actions.mjs';
import {castVanguard} from './vanguard-actions.mjs';
import {castFallen} from './fallen-actions.mjs';
import {castHoly} from './paladin-actions.mjs';
import {aimOf,summonSpirit} from './shadow-actions.mjs';
import {CLASSES,skillCap,skillById,skillAtRank,skillPrice} from './public/skills.js';
import {distanceToSegment} from './public/content.js';
import {canHitAir,shotStyle} from './projectiles.mjs';
const distance=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
export function initializeSkills(p,classId){p.classId=classId;p.skills={[CLASSES[classId].skills[0]]:1};p.cooldowns={};p.energy=CLASSES[classId].energy;p.mastery=0;p.shield=0;p.buffs=[];p.attackCount=0;p.passiveHits=0;p.passiveCd=0;p.fallenMounted=false;p.fallenAuraTime=0;p.fallenAura=null;p.fallenTarget=null;p.vanguardTime=0;p.vanguardPose=null;p.vanguardPoseTime=0;p.windStacks=0;p.windBladeStacks=0;p.windStackTime=0;p.windCounter=0;p.windAction=null;p.windGuard=0;p.windFieldBuff=false;}
export function buySkill(p,id,stage=1){
 const s=skillById(id);if(!s||s.classId!==p.classId)return 'Kỹ năng không thuộc class này.';
 const rank=p.skills[id]||0;if(rank>=skillCap(s,stage))return 'Kỹ năng đã đạt bậc tối đa.';
 if(p.level<s.requiredLevel)return `Cần cấp ${s.requiredLevel} để học kỹ năng này.`;
 const price=skillPrice(s,rank);if(p.gold<price)return 'Không đủ vàng.';
 p.gold-=price;p.skills[id]=rank+1;return null;
}
export function buff(p,key){return p.buffs.filter(b=>b.time>0&&!b.leaderBlessing).reduce((value,b)=>Math.max(value,b[key]||0),0)+p.buffs.filter(b=>b.time>0&&b.leaderBlessing).reduce((value,b)=>value+(b[key]||0),0);}
export function upkeep(p,dt){
 for(const id of Object.keys(p.cooldowns))p.cooldowns[id]=Math.max(0,p.cooldowns[id]-dt);
 p.buffs=p.buffs.map(b=>({...b,time:b.time-dt})).filter(b=>b.time>0);
 if(!p.buffs.some(b=>b.shield))p.shield=0;
 if(p.holyMounted||p.fallenMounted)return;
 p.energy=Math.min(CLASSES[p.classId].energy,p.energy+(CLASSES[p.classId].regen+(p.forestStats?.manaRegen||0))*dt*(p.guard?.4:1));
}
function status(e,s,p,power){
 const duration=s.statusDuration||2;e.statuses||={};
 if(s.stun)e.stun=Math.max(e.stun||0,s.stun);
 if(s.slow){if(s.slow>=(e.slow||0))e.slowType=p.classId==='tidecaller'?'ice':p.classId==='pyromancer'?'fire':s.poison?'poison':'physical';e.slow=Math.max(e.slow||0,s.slow);e.slowTime=Math.max(e.slowTime||0,duration);}
 for(const type of ['burn','poison','bleed'])if(s[type]){const previous=e.statuses[type],damage=power*s[type];e.statuses[type]={time:duration,clock:previous?.clock??1,damage:Math.max(previous?.damage||0,damage),owner:p.id};}
}
export function applyStatus(e,s,p,power){status(e,s,p,power);}
export function cast(r,p,slot,ctx){
 const id=CLASSES[p.classId].skills.find(id=>skillById(id).slot===slot),rank=p.skills[id]||0;
 if(p.classId==='vanguard'&&(p.vanguardPoseTime>0||id==='vanguard-giant'&&p.vanguardTime>0))return false;
 if(p.fallenMounted&&['fallen-doom','fallen-aura'].includes(id))return false;
 if(id==='holy-ascend'&&p.holyMounted||id==='holy-aura'&&p.holyMounted)return false;
 if(!rank||p.hp<=0||(p.cooldowns[id]||0)>0)return false;
 const s=skillAtRank(skillById(id),rank);if(p.energy<s.cost)return false;if(p.classId==='windblade'&&p.windAction)return false;
 const airCapable=['ranger','pyromancer','stormcaller','tidecaller','darkelf'].includes(p.classId);
 const stats=ctx.stats(p),targets=r.enemies.filter(e=>e.hp>0&&(airCapable||canHitAir(e))&&targetDistance(p,e)<(s.range||s.radius||240)).sort((a,b)=>distance(p,a)-distance(p,b));
 const requiresTarget=['multi','target','target-burst','chain','meteor'].includes(s.kind);
 if(requiresTarget&&!targets.length)return false;
 p.energy-=s.cost;p.cooldowns[id]=s.cooldown;p.anim=.5;
 if(s.id==='cleave'||s.kind==='holy-slash'){const aim=aimOf(p);p.castAngle=Math.atan2(aim.y,aim.x);p.face=aim.x<0?-1:1;p.direction=Math.abs(aim.x)>Math.abs(aim.y)?(aim.x<0?2:3):(aim.y<0?1:0);}
 if(s.classId==='windblade'){castWind(r,p,s,ctx);return true;}
 if(s.classId==='vanguard'){castVanguard(r,p,s,ctx);return true;}
 if(s.classId==='fallen'){castFallen(r,p,s,ctx);return true;}
 if(s.classId==='paladin'){castHoly(r,p,s,ctx);return true;}
 const hit=e=>{if(!airCapable&&!canHitAir(e))return;ctx.damage(e,stats.power*s.mult,p);status(e,s,p,stats.power);};
 const event=(x,y,size,extra={})=>ctx.fx({type:['shield','haste','fury','heal','rally'].includes(s.kind)?'aura':'aoe',skill:s.id,angle:s.id==='cleave'?p.castAngle:undefined,sourceId:p.id,gem:p.gemEquipped?p.gem:null,fx:s.fx,x,y,size,radius:size/2,color:p.classId==='pyromancer'?0xffa354:p.classId==='stormcaller'?0x9adcff:p.classId==='tidecaller'?0x88e3ec:p.classId==='berserker'?0xf79470:0xcfe59d,...extra});
 const target=targets[0],center=s.self||!target?p:{x:target.x,y:target.y};
 if(s.kind==='stealth'){const aim=aimOf(p),from={x:p.x,y:p.y};ctx.move(p,p.x+aim.x*s.dashRange,p.y+aim.y*s.dashRange,s.dashRange);ctx.fx({type:'shadow-vfx',action:'blink',x:p.x,y:p.y,fromX:from.x,fromY:from.y,sourceId:p.id,angle:Math.atan2(aim.y,aim.x),radius:35,color:0xb0c296});p.buffs.push({time:s.duration,stealth:1,speed:s.speed});ctx.fx({type:'assassin-vfx',action:'veil',sourceId:p.id,x:p.x,y:p.y,color:0xa7b88a});}
 if(s.kind==='spirit')summonSpirit(r,p,ctx);
 if(s.kind==='assassin-dash'){const aim=aimOf(p);p.dashing=true;p.castAnim=s.travelTime;p.castCount=(p.castCount||0)+1;r.shadowDashes||=[];r.shadowDashes.push({owner:p.id,dx:aim.x,dy:aim.y,range:s.range,radius:s.radius,mult:s.mult,duration:s.travelTime,remaining:s.travelTime,hits:[]});}
 if(s.kind==='elf-line'){const aim=aimOf(p);ctx.launchAimed(p,aim,s.range,e=>{ctx.damage(e,stats.power*s.mult,p);status(e,s,p,stats.power);ctx.fx({type:'shadow-vfx',action:'arrow-hit',angle:Math.atan2(aim.y,aim.x),x:e.x,y:e.y,radius:38,color:0xc8b3f3});},{piercing:true,speed:s.speed,width:s.width/2,style:{projectileType:'moon-arrow',skill:s.id,aoeWidth:s.width,color:0xc7a4ff}});}
 if(s.kind==='elf-eclipse'){const aim=aimOf(p),z={id:ctx.id(),owner:p.id,x:p.x+aim.x*s.range,y:p.y+aim.y*s.range,radius:s.radius,mult:s.mult,stun:s.stun,delay:s.delay,time:s.fieldDuration,interval:s.fieldInterval,fieldMult:s.fieldMult,clock:0};r.shadowZones||=[];r.shadowZones.push(z);ctx.fx({type:'shadow-vfx',action:'eclipse-warn',x:z.x,y:z.y,radius:z.radius,duration:s.delay,color:0xbeadea});}
 if(s.kind==='assassin-double'||s.kind==='assassin-flurry'){r.combatActions||=[];const victims=s.kind==='assassin-double'?[null]:targets.filter(e=>!e.flying).slice(0,s.targets);let index=0;for(const e of victims)for(let n=0;n<s.hits;n++)r.combatActions.push({owner:p.id,target:e?.id,skill:s.id,rank,delay:index++*s.hitInterval,aimX:p.input?.aimX??p.face,aimY:p.input?.aimY||0});}
 if(s.kind==='burst'){for(const e of targets)if(distance(p,e)<s.radius)hit(e);event(p.x,p.y-15,s.radius*2);}
 if(s.kind==='target')ctx.launch(p,target,()=>{hit(target);event(target.x,target.y-20,100);},{skill:s.id,color:0xb4eb70,fx:'poison',projectileType:'venom'});
 if(s.kind==='target-burst'){
  const impact=()=>{for(const e of r.enemies)if(e.hp>0&&targetDistance(target,e)<s.radius)hit(e);event(target.x,target.y-15,s.radius*2);};
  if(p.classId==='pyromancer')ctx.launch(p,target,impact,{...shotStyle(p),size:65});
  else {impact();ctx.fx({type:'effect',fx:'bolt-strike-2',x:target.x,y:target.y-75,size:210,color:0xa3deff});}
 }
 if(s.kind==='multi'){event(p.x,p.y-40,110,{alpha:.4});for(const e of targets.slice(0,s.targets))ctx.launch(p,e,()=>hit(e),{...shotStyle(p),size:38});}
 if(s.kind==='chain'){
  const used=new Set();let current=target,from=p,mult=1;
  for(let n=0;n<s.targets&&current;n++){used.add(current.id);ctx.damage(current,stats.power*s.mult*mult,p);ctx.fx({type:'lightning',skill:s.id,fx:'lightning',x:from.x,y:from.y-20,tx:current.x,ty:current.y-20,size:75});from=current;mult*=.8;current=r.enemies.filter(e=>e.hp>0&&!used.has(e.id)&&distance(e,from)<s.chainRange).sort((a,b)=>distance(a,from)-distance(b,from))[0];}
 }
 if(s.kind==='dash'){
  const from={x:p.x,y:p.y},aim=target||{x:p.x+p.face*s.range,y:p.y};const d=distance(p,aim)||1;
  ctx.move(p,p.x+(aim.x-p.x)/d*s.range,p.y+(aim.y-p.y)/d*s.range,s.range);
  for(const e of r.enemies)if(e.hp>0&&distanceToSegment(e.x,e.y,[from.x,from.y],[p.x,p.y])<s.radius)hit(e);
  event(p.x,p.y-18,160);ctx.fx({type:'trail',x:from.x,y:from.y,tx:p.x,ty:p.y,color:0xb7e3a5});
 }
 if(['zone','meteor'].includes(s.kind)){
  const zone={id:ctx.id(),owner:p.id,x:center.x,y:center.y,radius:s.radius,remaining:s.kind==='meteor'?s.delay+.1:s.duration,delay:s.kind==='meteor'?s.delay:0,interval:s.interval||1,clock:0,skill:s.id,rank,fx:s.fx};r.zones.push(zone);
  if(s.kind==='meteor')ctx.fx({type:'meteor-fall',x:zone.x,y:zone.y,radius:zone.radius,duration:s.delay,color:0xffae74});else event(zone.x,zone.y,s.radius*2,{alpha:.65});
 }
  if(s.kind==='shield'){p.shield=stats.hp*s.shield;p.buffs.push({time:s.duration,shield:true,armor:6});event(p.x,p.y-20,130,{color:0xffdc94});}
 if(s.kind==='haste'||s.kind==='fury'){p.buffs.push({time:s.duration,haste:s.haste,speed:s.speed||0,lifesteal:s.lifesteal||0});event(p.x,p.y-20,130);}
 if(s.kind==='heal'||s.kind==='rally'){
  if(s.kind==='rally')event(p.x,p.y,s.radius*2,{color:0xffdc94});
  for(const ally of [...r.players,...r.troops])if(ally.hp>0&&distance(ally,p)<s.radius){const max=ally.hero?ctx.stats(ally).hp:ally.maxHp;if(ctx.heal)ctx.heal(ally,max*s.heal,max);else ally.hp=Math.min(max,ally.hp+max*s.heal);if(s.kind==='rally'&&ally.hero)ally.buffs.push({time:s.duration,haste:.2,aura:'rally'});event(ally.x,ally.y-20,100);}
 }
 return true;
}
export function tickZones(r,dt,ctx){
 for(const z of r.zones){
  z.remaining-=dt;if(z.delay>0){z.delay-=dt;if(z.delay>0)continue;z.clock=0;}
  z.clock-=dt;if(z.clock>0)continue;z.clock=z.interval;
  const p=r.players.find(p=>p.id===z.owner);if(!p)continue;const s=skillAtRank(skillById(z.skill),z.rank),power=ctx.stats(p).power;
  for(const e of r.enemies)if(e.hp>0&&(canHitAir(e)||['ranger','pyromancer','stormcaller','tidecaller'].includes(p.classId))&&distance(e,z)<z.radius){ctx.damage(e,power*s.mult,p,'zone');status(e,{...s,statusDuration:1.2},p,power);}
  ctx.fx({type:s.kind==='meteor'?'meteor-impact':'aoe',skill:s.id,fx:z.fx,x:z.x,y:z.y-10,size:z.radius*2,radius:z.radius,alpha:.6,color:p.classId==='pyromancer'?0xffad5d:p.classId==='stormcaller'?0x9ddfff:p.classId==='tidecaller'?0x9bdfec:0xd2e1a1});
  if(s.kind==='meteor')z.remaining=0;
 }
 r.zones=r.zones.filter(z=>z.remaining>0);
}
export function tickStatuses(r,e,dt,ctx){
 e.stun=Math.max(0,(e.stun||0)-dt);e.slowTime=Math.max(0,(e.slowTime||0)-dt);if(e.slowTime<=0)e.slow=0;
 for(const [type,s]of Object.entries(e.statuses||{})){
  s.time-=dt;s.clock-=dt;if(s.clock<=0){s.clock+=1;const owner=r.players.find(p=>p.id===s.owner);if(owner){const actual=Math.min(e.hp,s.damage);ctx.damage(e,s.damage,owner);ctx.fx({type:'dot',x:e.x,y:e.y-40,text:'−'+Math.round(actual)+' '+(type==='burn'?'CHÁY':type==='poison'?'ĐỘC':'CHẢY MÁU'),color:type==='burn'?0xffac73:type==='poison'?0xaedc78:0xf0928b});}}
  if(s.time<=0)delete e.statuses[type];
 }
}

