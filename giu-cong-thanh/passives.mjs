import {randomUUID} from 'node:crypto';
export function healing(r,u,amount,maxHp,drainFrom){
 const actual=Math.min(amount,Math.max(0,maxHp-u.hp));if(actual<=0||u.hp<=0)return 0;u.hp+=actual;
 r.events.push({id:randomUUID(),type:'healing',targetId:u.id,x:u.x,y:u.y-25,amount:Math.round(actual),drainFrom:drainFrom?{x:drainFrom.x,y:drainFrom.y-20}:null,color:0x64ed8e});return actual;
}
export function passiveUpkeep(r,p,dt,stats){
 p.passiveCd=Math.max(0,(p.passiveCd||0)-dt);
 if(p.hero==='knight-1'&&p.passiveCd===0&&p.hp>0){p.passiveCd=12;p.shield=Math.max(p.shield,stats(p).hp*.12);p.buffs.push({time:4,shield:true});r.events.push({id:randomUUID(),type:'aura',x:p.x,y:p.y-20,radius:40,color:0xffdc94});}
}
export function passiveKill(r,p,stats){
 if(p.hp<=0)return;
 if(p.hero==='warrior-1')healing(r,p,stats(p).hp*.05,stats(p).hp);
 const bonus=p.hero==='samurai-commander'?{haste:.2}:null;
 if(bonus){p.buffs=p.buffs.filter(b=>!b.innate);p.buffs.push({...bonus,time:4,innate:true});}
}
export function passiveHit(r,p,target,power,stats,applyStatus,kill){
 p.passiveHits=(p.passiveHits||0)+1;const n=p.passiveHits,h=p.hero;
 const backstab=h==='goblin-assassin'&&(p.x-target.x)*(target.face||1)<-8;
 const extra=backstab?.5:h==='samurai-archer'&&Math.hypot(p.x-target.x,p.y-target.y)>150?.2:0;
 if(extra){target.hp=Math.max(0,target.hp-power*extra);r.events.push({id:randomUUID(),type:'dot',x:target.x,y:target.y-45,text:'NỘI TẠI −'+Math.round(power*extra),color:0xffd787});}
 
 if(h==='wanderer-magican'){applyStatus(target,{slow:.15,statusDuration:1},p,power);if(n%5===0)healing(r,p,stats(p).hp*.04,stats(p).hp);}
 if(h==='fire-wizard'&&n%3===0)applyStatus(target,{burn:.15,statusDuration:3},p,power);
 if(h==='lightning-mage'&&n%4===0){const other=r.enemies.find(e=>e!==target&&e.hp>0&&Math.hypot(e.x-target.x,e.y-target.y)<140);if(other){other.hp=Math.max(0,other.hp-power*.4);kill(r,other,p);r.events.push({id:randomUUID(),type:'lightning',skill:'chain-lightning',x:target.x,y:target.y-20,tx:other.x,ty:other.y-20,color:0x9edfff});}}
}
