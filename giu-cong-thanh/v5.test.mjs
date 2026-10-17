import test from 'node:test';import assert from 'node:assert/strict';
import {nextStage,createRoom,addPlayer,stats,tick,spawnEnemy,MAPS,canStand,useConsumable} from './simulation.mjs';
import {CONSUMABLES} from './public/items.js';import {dropForestLoot,tickLoot} from './loot.mjs';
import {BOSSES} from './public/bosses.js';import {BOSS_SKILLS,bossSkillCount,insideBossShape} from './public/boss-skills.js';import {ENEMY_FAMILIES,FAMILY_MONSTERS} from './public/enemy-families.js';
import {bossDefinition,bossTick,forestPopulation,tickHostileZones} from './encounters.mjs';
test('six enemy families have a normal monster, boss profile and five defined skills',()=>{
 assert.equal(FAMILY_MONSTERS.length,6);assert.equal(new Set(BOSSES.map(b=>b.family)).size,6);
 for(const [family,info]of Object.entries(ENEMY_FAMILIES)){assert.ok(FAMILY_MONSTERS.some(m=>m.family===family));assert.equal(info.skills.length,5);for(const id of info.skills)assert.ok(BOSS_SKILLS[id],id);}
});
test('difficulty unlocks one through five real boss skills, never more',()=>{
 assert.deepEqual([1,3,5,7,9].map(s=>bossSkillCount(s)),[1,2,3,4,5]);
 for(let stage=1;stage<=10;stage++)for(let wave=1;wave<=3;wave++){const b=bossDefinition(stage,wave);assert.equal(b.bossSkills.length,bossSkillCount(stage,wave));assert.ok(b.bossSkills.every(id=>BOSS_SKILLS[id]));}
});
test('line, cone, ring and multiple-circle warnings match damage geometry',()=>{
 assert.ok(insideBossShape({x:100,y:10},{shape:'line',x:0,y:0,angle:0,length:200,width:40}));assert.ok(!insideBossShape({x:100,y:30},{shape:'line',x:0,y:0,angle:0,length:200,width:40}));
 assert.ok(insideBossShape({x:100,y:0},{shape:'cone',x:0,y:0,angle:0,length:200,arc:Math.PI/2}));assert.ok(!insideBossShape({x:-50,y:0},{shape:'cone',x:0,y:0,angle:0,length:200,arc:Math.PI/2}));
 assert.ok(!insideBossShape({x:20,y:0},{shape:'ring',x:0,y:0,inner:50,radius:100}));assert.ok(insideBossShape({x:80,y:0},{shape:'ring',x:0,y:0,inner:50,radius:100}));
 assert.ok(insideBossShape({x:150,y:0},{shape:'multi',radius:20,points:[{x:150,y:0},{x:0,y:150}]}));
});
test('all 30 skills resolve after warning; summons, self buffs, drain and zones have real effects',()=>{
 for(const [family,info]of Object.entries(ENEMY_FAMILIES))for(const id of info.skills){
  const r=createRoom('SKILL'),p=addPlayer(r,{hero:'warrior-1'});p.x=800;p.y=800;p.hp=1000;const events=[],summons=[];
  const e={id:'boss',boss:true,family,bossColor:info.color,bossSkills:[id],skillCd:0,skillCursor:0,x:750,y:800,hp:200,maxHp:1000,power:30,speed:50,cooldown:1.5};
  const ctx={stats,fx:event=>events.push(event),summon:(b,n,f)=>summons.push(f),canStand:()=>true},hp=p.hp;
  bossTick(r,e,.05,ctx);assert.equal(p.hp,hp,id+' damages too early');assert.equal(events[0].type,'boss-warning');const cast=e.bossCast;
  if(cast.shape==='ring')p.x=e.x+(cast.inner+cast.radius)/2;
  bossTick(r,e,1.3,ctx);assert.equal(e.bossCast,null,id);
  const s=BOSS_SKILLS[id];if(s.summon)assert.equal(summons.length,s.count,id);if(s.heal)assert.ok(e.hp>200,id);if(s.shield)assert.ok(e.shield>0,id);if(s.frenzy)assert.ok(e.speed>50,id);
  if(s.duration){assert.ok(r.hostileZones.length,id);const before=p.hp;tickHostileZones(r,1,ctx);assert.ok(p.hp<=before);}
  if(s.shape!=='self')assert.ok(p.hp<hp,id+' failed to damage');
 }
});
test('forest drops are real loot, ownership is respected and pickup is once only',()=>{
 const r=createRoom('LOOT'),p=addPlayer(r),other=addPlayer(r);p.x=500;p.y=500;other.x=600;other.y=600;
 const drop=dropForestLoot(r,{id:'forest-monster',neutral:true,animal:false,x:600,y:600},p);assert.ok(drop);assert.equal(dropForestLoot(r,{id:'lane',neutral:false},p),null);
 tickLoot(r,.05,stats);assert.equal(r.loot.length,1);assert.equal(Object.keys(other.inventory).length,0);p.x=600;p.y=600;tickLoot(r,.05,stats);assert.equal(r.loot.length,0);assert.equal(p.forestRelics[drop.item],1);tickLoot(r,.05,stats);assert.equal(p.forestRelics[drop.item],1);
});
test('forest relics permanently stack campaign stats, regenerate and never create combat buffs',()=>{
 const r=createRoom('RELIC'),p=addPlayer(r,{hero:'warrior-1'});r.phase='battle';const before=stats(p);p.hp=50;p.energy=0;
 for(const item of CONSUMABLES){for(let i=0;i<2;i++){r.loot.push({id:item.id+i,item:item.id,x:p.x,y:p.y,owner:p.id,locked:8,time:100});tickLoot(r,.05,stats);}assert.equal(p.forestRelics[item.id],2);assert.equal(p.forestStats[item.stat],item.gain*2);}
 assert.ok(stats(p).power>before.power);assert.equal(stats(p).armor,before.armor+.8);assert.equal(stats(p).regen,before.regen+.6);assert.equal(stats(p).healthRegen,.6);assert.ok(stats(p).cooldown<before.cooldown);assert.equal(p.buffs.length,0);assert.ok(r.events.some(e=>e.type==='relic-pickup'));
 const hp=p.hp;tickLoot(r,2,stats);assert.ok(p.hp>hp);p.hp=0;tickLoot(r,2,stats);assert.equal(p.hp,0);assert.ok(useConsumable(r,p,'power',stats));
 const saved={...p.forestStats};r.phase='clear';r.stage=1;nextStage(r);assert.deepEqual(p.forestStats,saved);assert.equal(p.forestRelics.power,2);
 const fresh=addPlayer(createRoom('FRESH'));assert.deepEqual(fresh.forestStats,{});
});

test('new maps have six walkable forest camps, connecting trails and valid routes',()=>{
 for(const m of MAPS){assert.equal(m.camps.length,6);assert.equal(m.forestPaths.length,6);for(const camp of m.camps)assert.ok(canStand(m,camp.x,camp.y));const r=createRoom('CAMP');r.stage=m.id;forestPopulation(r,m,canStand);assert.ok(new Set(r.enemies.filter(e=>!e.animal).map(e=>e.family)).size>=5);}
});
