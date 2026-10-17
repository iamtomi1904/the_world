import {bossImpactAccent} from './public/boss-impact-art.js';
import test from 'node:test';import assert from 'node:assert/strict';
import {drawEnemySpell,drawSummonPortal,drawMonsterProjectile,ENEMY_SPELL_STYLES} from './public/enemy-spell-art.js';
import {BOSS_SKILLS} from './public/boss-skills.js';import {ENEMY_FAMILIES} from './public/enemy-families.js';
import {createRoom,addPlayer,spawnEnemy,tick,stats} from './simulation.mjs';
import {upkeep} from './abilities.mjs';
test('all 30 boss animations and six portals render finite geometry during charge, impact and fade',()=>{
 const g=new Proxy({},{get:(obj,method)=>(...args)=>{for(const v of args)if(typeof v==='number')assert.ok(Number.isFinite(v),method+' has invalid geometry');return g;}});
 assert.equal(Object.keys(ENEMY_SPELL_STYLES).length,30);assert.equal(new Set(Object.values(ENEMY_SPELL_STYLES)).size,30);
 for(const [family,f]of Object.entries(ENEMY_FAMILIES)){
  for(const t of [0,.05,.3,.6,.95,1]){drawSummonPortal(g,{x:100,y:100,family,boss:true},t);drawMonsterProjectile(g,family,t);}
  for(const skill of f.skills){const s=BOSS_SKILLS[skill],e={...s,skill,family,x:100,y:100,sourceX:20,sourceY:30,angle:.7,arc:s.angle||Math.PI/2,length:s.length||0,width:s.width||0,points:[{x:200,y:200},{x:300,y:100}],victims:[{x:200,y:200}]};for(const t of [0,.05,.3,.6,.95,1]){drawEnemySpell(g,e,t,true);drawEnemySpell(g,e,t);bossImpactAccent(g,e,t);}}
 }
});
test('spawn portals use actual spawn and boss minion positions, never the temporary lane position',()=>{
 const r=createRoom('PORTAL'),p=addPlayer(r);r.phase='battle';r.wave=3;r.spawn=1;r.spawnCd=999;
 const boss=spawnEnemy(r,()=>0);const event=r.events.find(e=>e.type==='enemy-summon');assert.equal(event.x,boss.x);assert.equal(event.y,boss.y);assert.equal(event.sourceId,boss.id);
 boss.x=p.x+50;boss.y=p.y;boss.bossSkills=['wolf-howl'];boss.skillCd=0;boss.cd=99;tick(r,.05,()=>0);tick(r,1.3,()=>0);
 const portals=r.events.filter(e=>e.type==='enemy-summon');assert.equal(portals.length,3);for(const e of portals){assert.equal(e.family,'wolf');assert.ok(Math.hypot(e.x-boss.x,e.y-boss.y)<100);assert.ok(r.enemies.some(m=>m.id===e.sourceId));}
});
test('permanent mana regeneration changes actual energy recovery, without timed buffs',()=>{
 const r=createRoom('MANA'),p=addPlayer(r);p.energy=0;p.forestStats.manaRegen=2;const expected=stats(p).regen;upkeep(p,1);assert.equal(p.energy,expected);assert.equal(p.buffs.length,0);
});

