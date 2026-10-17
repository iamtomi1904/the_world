import test from 'node:test';import assert from 'node:assert/strict';
import {createRoom,addPlayer,start,tick,spawnEnemy,MAPS,nextStage,snapshot,canStand} from './simulation.mjs';
import {forestPopulation} from './encounters.mjs';
test('easy preserves original ten maps and default difficulty; invalid input cannot inject stats',()=>{
 assert.equal(MAPS.length,10);assert.equal(createRoom('A').difficulty,'easy');assert.equal(createRoom('A','hack').difficulty,'easy');assert.equal(createRoom('A',{health:-1}).difficulty,'easy');
 const a=createRoom('A'),b=createRoom('B','easy');addPlayer(a);addPlayer(b);a.wave=b.wave=1;a.spawn=b.spawn=2;assert.equal(spawnEnemy(a,()=>0).hp,spawnEnemy(b,()=>0).hp);
});
test('normal and insane increase real enemy and boss HP, damage and wave population',()=>{
 const results=[];for(const d of ['easy','normal','insane']){const r=createRoom(d,d);addPlayer(r);start(r);tick(r,5.01,()=>0);const normal=r.enemies.find(e=>!e.neutral),count=r.spawn+r.enemies.filter(e=>!e.neutral).length;r.spawn=1;const boss=spawnEnemy(r,()=>0);results.push({hp:normal.hp,power:normal.power,count,bossHp:boss.hp,bossPower:boss.power});assert.equal(snapshot(r).difficulty,d);}
 for(let i=1;i<3;i++)for(const key of ['hp','power','count','bossHp','bossPower'])assert.ok(results[i][key]>results[i-1][key],key);
});
test('difficulty carries through ten stages and forest combatants scale without changing maps',()=>{
 const forest=[];for(const d of ['easy','normal','insane']){const r=createRoom(d,d);addPlayer(r);forestPopulation(r,MAPS[0],canStand);forest.push(r.enemies.find(e=>!e.animal));for(let stage=1;stage<10;stage++){r.phase='clear';assert.ok(nextStage(r));assert.equal(r.difficulty,d);}assert.equal(r.stage,10);}
 assert.ok(forest[1].hp>forest[0].hp);assert.ok(forest[2].power>forest[1].power);
});
