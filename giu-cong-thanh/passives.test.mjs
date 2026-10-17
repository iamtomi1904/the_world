import test from 'node:test';
import assert from 'node:assert/strict';
import {createRoom,addPlayer,stats,tick,spawnEnemy,MAPS} from './simulation.mjs';
import {PASSIVES} from './public/passives.js';
import {healing,passiveHit,passiveKill,passiveUpkeep} from './passives.mjs';
import {launchAimed,advanceProjectiles} from './projectiles.mjs';
import {applyStatus} from './abilities.mjs';
const room=hero=>{const r=createRoom('PASSIVE'),p=addPlayer(r,{hero});r.phase='battle';r.spawn=99;r.spawnCd=999;return {r,p};};
test('all 14 heroes have unique available innate passives',()=>{
 assert.equal(Object.keys(PASSIVES).length,14);assert.equal(new Set(Object.values(PASSIVES).map(p=>p.name)).size,14);
 for(const hero of Object.keys(PASSIVES)){const {p}=room(hero);assert.equal(p.level,1);assert.equal(p.mastery,0);assert.ok(PASSIVES[hero].text);}
});
test('shield cadence, low-health power, healing and kill buffs are server mechanics',()=>{
 const {r,p}=room('knight-1');passiveUpkeep(r,p,.05,stats);assert.equal(p.shield,stats(p).hp*.12);const count=p.buffs.length;passiveUpkeep(r,p,1,stats);assert.equal(p.buffs.length,count);
 p.hero='warrior-2';p.hp=stats(p).hp;const power=stats(p).power;p.hp=20;assert.ok(stats(p).power>=power*1.19);
 p.hero='warrior-1';p.hp=20;passiveKill(r,p,stats);assert.ok(p.hp>20);assert.ok(r.events.some(e=>e.type==='healing'));
 p.hero='warrior-3';passiveKill(r,p,stats);assert.equal(p.buffs.find(b=>b.innate).speed,.25);passiveKill(r,p,stats);assert.equal(p.buffs.filter(b=>b.innate).length,1);
 p.hero='samurai-commander';passiveKill(r,p,stats);assert.equal(p.buffs.find(b=>b.innate).haste,.2);
});
test('hit-count passives activate only on hits, including fire, water and chain lightning',()=>{
 for(const [hero,hits] of [['knight-2',4],['knight-3',3],['samurai',4],['fire-wizard',3],['lightning-mage',4],['wanderer-magican',5],['samurai-archer',1]]){
  const {r,p}=room(hero);p.hp=30;const target={id:'t',x:p.x+170,y:p.y,hp:1000,maxHp:1000},other={id:'o',x:target.x+30,y:target.y,hp:1000};r.enemies=[target,other];const hp=p.hp;
  for(let i=0;i<hits;i++)passiveHit(r,p,target,50,stats,applyStatus,()=>{});
  if(['knight-2','wanderer-magican'].includes(hero))assert.ok(p.hp>hp,hero);
  if(['knight-3','samurai','samurai-archer'].includes(hero))assert.ok(target.hp<1000,hero);
  if(hero==='fire-wizard')assert.ok(target.statuses.burn);
  if(hero==='lightning-mage')assert.equal(other.hp,980);
  if(hero==='wanderer-magican'){assert.equal(target.slow,.15);assert.equal(target.slowType,'ice');}
 }
});
test('healing never revives dead units or displays fake healing at full health',()=>{
 const {r,p}=room('warrior-1'),max=stats(p).hp;p.hp=max;assert.equal(healing(r,p,20,max),0);assert.equal(r.events.length,0);p.hp=0;assert.equal(healing(r,p,20,max),0);p.hp=max-3;assert.equal(healing(r,p,20,max),3);assert.equal(r.events[0].amount,3);
});
test('aimed projectiles fire into empty space, hit intervening targets, miss off-axis and stop at walls',()=>{
 const source={id:'p',x:100,y:100,classId:'ranger'};
 const r={projectiles:[],events:[],enemies:[{id:'off',x:180,y:150,hp:100,size:30},{id:'near',x:210,y:100,hp:100,size:30},{id:'far',x:280,y:100,hp:100,size:30}]},hits=[];
 launchAimed(r,source,{x:1,y:0},300,e=>hits.push(e.id),()=>true);assert.equal(hits.length,0);advanceProjectiles(r,.3);assert.deepEqual(hits,['near']);assert.equal(r.projectiles.length,0);
 r.enemies=[];launchAimed(r,source,{x:0,y:1},300,e=>hits.push(e.id),()=>true);assert.ok(r.events.at(-1).ty>100);advanceProjectiles(r,1);assert.equal(r.projectiles.length,0);
 r.enemies=[{id:'wallbehind',x:250,y:100,hp:100}];launchAimed(r,source,{x:1,y:0},300,e=>hits.push(e.id),x=>x<170);advanceProjectiles(r,1);assert.deepEqual(hits,['near']);
});
test('stunned enemies cannot walk, attack or finish an already prepared special',()=>{
 const {r,p}=room('warrior-1');const e=spawnEnemy(r,()=>0);e.x=p.x+30;e.y=p.y;e.stun=1;e.windup={target:p.id,remaining:.01};e.cd=0;const hp=p.hp,x=e.x,y=e.y;tick(r,.2);assert.equal(p.hp,hp);assert.equal(e.x,x);assert.equal(e.y,y);assert.equal(e.windup.remaining,.01);
});
test('basic attack consumes cooldown without a target and respects explicit aim',()=>{
 const {r,p}=room('samurai-archer');p.input={attack:true,aimX:0,aimY:1};tick(r);assert.ok(p.cd>0);assert.equal(p.attackCount,1);assert.ok(r.events.some(e=>e.type==='projectile'&&e.straight));assert.equal(p.passiveHits,0);
});
