import test from 'node:test';
import assert from 'node:assert/strict';
import {createRoom,addPlayer,start,tick,MAPS,canStand,spawnEnemy} from './simulation.mjs';
import {forestPopulation,bossTick,bossDefinition} from './encounters.mjs';
import {launch,advanceProjectiles,canHitAir} from './projectiles.mjs';
test('projectile damage waits for arrival and dead targets cannot pay twice',()=>{
 const r={projectiles:[],events:[]},target={id:'t',x:300,y:0,hp:20};let hits=0;
 launch(r,{id:'s',x:0,y:0},target,()=>hits++);advanceProjectiles(r,.1);assert.equal(hits,0);advanceProjectiles(r,.4);assert.equal(hits,1);advanceProjectiles(r,1);assert.equal(hits,1);
 launch(r,{x:0,y:0},target,()=>hits++);target.hp=0;advanceProjectiles(r,1);assert.equal(hits,1);
 assert.equal(canHitAir({flying:true,altitude:35},70),false);assert.equal(canHitAir({flying:true,altitude:35},200),true);assert.equal(canHitAir({flying:true,altitude:9},70),true);
});
test('forest population uses walkable ground and does not block wave completion',()=>{
 for(const map of MAPS){const r=createRoom('FOREST');r.stage=map.id;const mobs=forestPopulation(r,map,canStand);assert.ok(mobs.length>=12);for(const e of mobs){assert.ok(canStand(map,e.x,e.y));assert.ok(e.reward>0);assert.ok(e.neutral);}}
 const r=createRoom('CLEAR');addPlayer(r);r.phase='battle';r.wave=3;r.spawn=0;forestPopulation(r,MAPS[0],canStand);tick(r);assert.equal(r.phase,'clear');
});
test('forest prey awards gold once and does not attack the castle',()=>{
 const r=createRoom('HUNT'),p=addPlayer(r);r.phase='battle';r.spawn=100;r.spawnCd=999;
 const prey=forestPopulation(r,MAPS[0],canStand).find(e=>e.animal);p.x=prey.x;p.y=prey.y;p.upPower=100;p.input={attack:true};const before=p.gold,reward=prey.reward;tick(r);assert.equal(p.gold,before+reward);assert.ok(!r.enemies.includes(prey));const gate=r.gate;for(let i=0;i<20;i++)tick(r);assert.equal(r.gate,gate);
});
test('boss exists in every wave and telegraphed skill can be dodged',()=>{
 for(let stage=1;stage<=10;stage++)for(let wave=1;wave<=3;wave++){const r=createRoom('BOSS');addPlayer(r);r.stage=stage;r.wave=wave;r.spawn=1;const e=spawnEnemy(r,()=>0);assert.ok(e.boss);assert.ok(e.bossSkill);assert.ok(e.bossArt);}
 const r=createRoom('DODGE'),p=addPlayer(r),e={...bossDefinition(1,3),boss:true,x:p.x,y:p.y+100,hp:100,maxHp:100,power:30,skillCd:0};const events=[];const ctx={fx:e=>events.push(e),summon:()=>{}};bossTick(r,e,.05,ctx);assert.equal(events[0].type,'boss-warning');const hp=p.hp;p.x+=400;bossTick(r,e,1.3,ctx);assert.equal(p.hp,hp);
 p.x=e.x;p.y=e.y;e.skillCd=0;bossTick(r,e,.05,ctx);bossTick(r,e,1.3,ctx);assert.ok(p.hp<hp);
});
