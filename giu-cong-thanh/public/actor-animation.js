import {FALLEN} from './fallen-config.js';
export const ATTACK_TIMING={fallen:FALLEN.attack,berserker:{windupFraction:.2}};
// Keep an attack visible until its final frame, independently of snapshot cadence.
export function actorAction(unit,obj,moving,time,info){
 if(unit.hp<=0){obj.attackUntil=0;return info.actions.dead?'dead':'idle';}
 if(unit.stun>0){obj.attackUntil=0;obj.wasAttacking=false;obj.attackSequence=unit.attackCount;return 'idle';}
 const attacking=unit.anim>0,sequence=unit.attackCount;
 const newAttack=unit.hero?sequence>0&&sequence!==obj.attackSequence:attacking&&(!obj.wasAttacking||(sequence!==undefined&&sequence!==obj.attackSequence));
 const newCast=unit.castAnim>0&&unit.castCount!==obj.castSequence;if(newCast)obj.castSequence=unit.castCount;
 if(newAttack||newCast){
  const frames=info.actions.attack?.frames||1,cooldown=unit.stats?.cooldown||unit.cooldown||.7;
  obj.attackDuration=newCast?unit.castAnim*1000:Math.min(frames/12*1000,Math.max(120,cooldown*850));
  obj.attackUntil=time+obj.attackDuration;obj.attackSequence=sequence;obj.attackRestart=true;
 }
 obj.wasAttacking=attacking;
 return time<(obj.attackUntil||0)?'attack':moving?'walk':'idle';
}
