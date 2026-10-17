import test from 'node:test';
import assert from 'node:assert/strict';
import {createRoom,addPlayer,buy,tick,stats,spawnEnemy,MAPS} from './simulation.mjs';
import {CLASSES,SKILLS,skillAtRank,skillById} from './public/skills.js';
const representatives={darkelf:'dark-elf',assassin:'goblin-assassin',guardian:'knight-1',duelist:'samurai',ranger:'samurai-archer',berserker:'warrior-1',pyromancer:'fire-wizard',stormcaller:'lightning-mage',tidecaller:'wanderer-magican'};
function setup(hero){const r=createRoom('SKILLS'),p=addPlayer(r,{hero});p.level=4;p.gold=10000;p.hp=stats(p).hp;r.phase='battle';r.wave=1;r.spawn=999;r.spawnCd=99999;return {r,p};}
function mob(r,p,hp=10000){const e=spawnEnemy(r,()=>0);e.x=p.x+35;e.y=p.y+5;e.hp=hp;e.maxHp=hp;e.cd=99;return e;}
test('nine classes have exactly Q/E/R and cannot buy other classes',()=>{
 assert.equal(Object.keys(CLASSES).length,9);assert.equal(SKILLS.length,27);
 for(const [classId,hero]of Object.entries(representatives)){
  const {r,p}=setup(hero),c=CLASSES[classId];assert.equal(p.classId,classId);assert.equal(p.skills[c.skills[0]],1);
  assert.deepEqual(c.skills.map(id=>skillById(id).slot),['Q','E','R']);
  const foreign=SKILLS.find(s=>s.classId!==classId);const gold=p.gold;assert.match(buy(r,p,'skill:'+foreign.id),/class/);assert.equal(p.gold,gold);
 }
});
for(const s of SKILLS)test(`${s.classId} / ${s.slot} ${s.id}: learned, costs energy, cooldown and real effect`,()=>{
 const {r,p}=setup(representatives[s.classId]);if(s.slot!=='Q')assert.equal(buy(r,p,'skill:'+s.id),null);
 const e=mob(r,p);p.hp=stats(p).hp*.5;const before=e.hp;
 p.input={[s.slot.toLowerCase()]:true};tick(r,.05,()=>0);assert.ok(p.cooldowns[s.id]>0);assert.ok(p.energy<stats(p).maxEnergy);assert.ok(r.events.length>0,'Visible effect');
 if(['target','multi','target-burst'].includes(s.kind)){p.input={};for(let i=0;i<15;i++)tick(r,.05,()=>0);}
 if(['burst','target','target-burst','multi','chain','dash'].includes(s.kind))assert.ok(e.hp<before,'Damage was applied after impact');
 if(s.kind==='shield')assert.ok(p.shield>0);
 if(s.kind==='heal'||s.kind==='rally')assert.ok(p.hp>stats(p).hp*.5);
 if(['haste','fury'].includes(s.kind))assert.ok(p.buffs.some(b=>b.haste>0));
 if(['zone','meteor'].includes(s.kind))assert.ok(r.zones.length>0);
});
test('level gates, rank cap, increasing prices and insufficient funds are enforced',()=>{
 const {r,p}=setup('fire-wizard');p.level=1;assert.match(buy(r,p,'skill:flamefield'),/cấp 2/);p.level=2;p.gold=119;assert.equal(buy(r,p,'skill:flamefield'),'Không đủ vàng.');p.gold=1000;assert.equal(buy(r,p,'skill:flamefield'),null);assert.equal(p.gold,880);assert.equal(buy(r,p,'skill:flamefield'),null);assert.equal(p.gold,700);assert.equal(buy(r,p,'skill:flamefield'),null);assert.ok(buy(r,p,'skill:flamefield'));assert.equal(p.skills.flamefield,3);
 const a=skillAtRank(skillById('fireburst'),1),b=skillAtRank(skillById('fireburst'),3);assert.ok(b.mult>a.mult);assert.ok(b.radius>a.radius);assert.ok(b.cooldown<a.cooldown);
});
test('cooldown, energy and learning cannot be bypassed',()=>{
 const {r,p}=setup('fire-wizard');mob(r,p);p.input={q:true,e:true,r:true};tick(r);const q=p.cooldowns.fireburst;assert.ok(q>0);assert.equal(p.cooldowns.flamefield,undefined);tick(r);assert.ok(p.cooldowns.fireburst<q);p.cooldowns.fireburst=0;p.energy=0;tick(r);assert.equal(p.cooldowns.fireburst,0);
});
test('burn can finish a monster and pays kill reward once',()=>{
 const {r,p}=setup('fire-wizard');p.level=1;const e=mob(r,p,100),coins=p.gold;p.input={q:true};tick(r);p.input={};for(let i=0;i<3;i++)tick(r);assert.ok(e.statuses.burn);p.x=200;p.y=1100;
 for(let i=0;i<90;i++)tick(r);assert.equal(p.kills,1);assert.equal(p.gold,coins+e.reward);assert.ok(!r.enemies.some(m=>m.id===e.id));
});
test('shield absorbs real incoming damage before health',()=>{
 const {r,p}=setup('knight-1');buy(r,p,'skill:bulwark');const e=mob(r,p);e.x=p.x;e.y=p.y;e.power=40;e.cd=0;p.input={e:true};const hp=p.hp;tick(r);assert.equal(p.hp,hp);assert.ok(p.shield>0&&p.shield<stats(p).hp*.4);assert.ok(stats(p).armor>6);
});
test('meteor waits for telegraph and then damages the marked area',()=>{
 const {r,p}=setup('fire-wizard');buy(r,p,'skill:meteor');const e=mob(r,p);e.speed=0;p.input={r:true};const hp=e.hp;tick(r);assert.equal(e.hp,hp);assert.ok(r.events.some(e=>e.type==='meteor-fall'));p.input={};let impact=false;for(let i=0;i<24;i++){tick(r);impact||=r.events.some(e=>e.type==='meteor-impact');}assert.ok(impact);assert.ok(e.hp<hp);assert.equal(r.zones.length,0);
});
test('mastery unlocks class basic status and is capped',()=>{
 const {r,p}=setup('samurai-archer');assert.equal(buy(r,p,'mastery'),null);assert.equal(buy(r,p,'mastery'),null);const e=mob(r,p);p.input={attack:true};tick(r);p.input={};for(let i=0;i<3;i++)tick(r);assert.ok(e.statuses.poison);assert.ok(stats(p).power>27);assert.equal(buy(r,p,'mastery'),null);assert.ok(buy(r,p,'mastery'));
});
