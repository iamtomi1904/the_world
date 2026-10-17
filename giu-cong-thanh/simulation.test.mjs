import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {createRoom,addPlayer,start,buy,nextStage,tick,snapshot,stats,spawnEnemy,canStand,MAPS,HEROES,MONSTERS,TROOPS} from './simulation.mjs';
import {navigate} from './navigation.mjs';
function room(){const r=createRoom('TEST01');const p=addPlayer(r,{name:'Test',hero:'knight-1',token:'private-token'});return {r,p};}
test('ten distinct navigable maps with increasing health and damage',()=>{
 assert.equal(MAPS.length,10);assert.equal(new Set(MAPS.map(m=>JSON.stringify(m.lanes))).size,10);
 for(const m of MAPS){assert.ok(m.props.length>=15);for(const lane of m.lanes)for(let i=1;i<lane.length;i++){
  const a=lane[i-1],b=lane[i],d=Math.hypot(b[0]-a[0],b[1]-a[1]);for(let step=0;step<=d;step+=8){const t=step/d;assert.ok(canStand(m,a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t),`Map ${m.id} blocked lane`);}
 }if(m.id>1){assert.ok(m.healthScale>MAPS[m.id-2].healthScale);assert.ok(m.damageScale>MAPS[m.id-2].damageScale);}}
});
test('all heroes, monsters and soldiers have valid copied animation frames',()=>{
 const catalog=JSON.parse(readFileSync(new URL('./public/catalog-v4.json',import.meta.url),'utf8').replace(/^\uFEFF/,''));
 for(const id of [...HEROES.map(h=>h.id),...MONSTERS.map(m=>m.id),...TROOPS.map(t=>t.sprite)]){
  const a=catalog.actors.find(a=>a.id===id);assert.ok(a,id);assert.ok(a.bodyHeight>5);for(const action of ['idle','walk','attack']){const info=a.actions[action];assert.ok(info,`${id}:${action}`);const data=readFileSync(new URL('./public'+info.url,import.meta.url));const expectedWidth=(info.frameWidth||a.frame)*(info.atlasColumns||info.frames);assert.ok(data.readUInt32BE(16)>=expectedWidth&&data.readUInt32BE(16)<expectedWidth+(info.atlasColumns||1));assert.equal(data.readUInt32BE(20),(info.frameHeight||a.frameHeight||a.frame)*(info.atlasRows||a.sheetRows||info.rows||1));}
 }for(const prop of catalog.props)assert.ok(existsSync(new URL('./public'+prop.url,import.meta.url)));
 for(const m of MAPS)for(const p of m.props)assert.ok(catalog.props.some(a=>a.id===p.asset),'Missing map prop '+p.asset);
 for(const fx of catalog.effects){const data=readFileSync(new URL('./public'+fx.url,import.meta.url));assert.equal(data.readUInt32BE(16),fx.frame*fx.frames);assert.equal(data.readUInt32BE(20),fx.frame);}
});
test('solo start, selected hero stats and no secret in snapshot',()=>{
 const {r,p}=room();assert.equal(stats(p).hp,240);assert.equal(start(r),true);for(let i=0;i<102;i++)tick(r,.05,()=>0);assert.equal(r.phase,'battle');assert.equal(r.players.length,1);assert.ok(r.enemies.length);assert.equal(snapshot(r).players[0].token,undefined);
});
test('kill grants gold and XP exactly once, including troop-owned kills',()=>{
 const {r,p}=room();r.phase='battle';r.wave=1;r.spawn=0;p.upPower=100;p.input={attack:true};
 const e=spawnEnemy(r,()=>0);e.x=p.x+15;e.y=p.y;const before=p.gold;tick(r);
 assert.equal(p.gold,before+e.reward);assert.equal(p.kills,1);assert.equal(p.xp,12);tick(r);assert.equal(p.kills,1);
 const next=room();assert.equal(buy(next.r,next.p,'militia'),null);const t=next.r.troops[0];next.r.phase='battle';next.r.wave=1;next.r.spawn=2;
 const mob=spawnEnemy(next.r,()=>0);mob.x=t.x+10;mob.y=t.y;mob.hp=1;next.p.x=100;next.p.y=600;const coins=next.p.gold;tick(next.r);assert.equal(next.p.gold,coins+mob.reward);assert.equal(next.p.kills,1);
});
test('purchases enforce cost, cap, invalid items, repairs and stat upgrades',()=>{
 const {r,p}=room();assert.equal(buy(r,p,'militia'),null);assert.equal(p.gold,60);assert.equal(r.troops[0].sprite,'soldier-1');assert.ok(buy(r,p,'elite'));assert.equal(p.gold,60);assert.ok(buy(r,p,'free-hack'));p.gold=10000;for(let i=0;i<11;i++)assert.equal(buy(r,p,'guard'),null);assert.equal(r.troops.length,12);const before=p.gold;assert.ok(buy(r,p,'guard'));assert.equal(p.gold,before);
 assert.equal(buy(r,p,'power'),null);assert.equal(stats(p).power,33);assert.equal(buy(r,p,'vitality'),null);assert.equal(stats(p).hp,280);r.gate=1300;assert.equal(buy(r,p,'repair'),null);assert.equal(r.gate,1400);assert.ok(buy(r,p,'repair'));
});
test('hero respawns, input is normalized, house and obstacles block movement',()=>{
 const {r,p}=room();r.phase='battle';r.spawn=999;r.spawnCd=10000;p.hp=0;p.respawn=1;for(let i=0;i<22;i++)tick(r);assert.equal(p.hp,stats(p).hp);
 p.x=600;p.y=500;p.input={x:999,y:999};const x=p.x,y=p.y;tick(r);assert.ok(Math.hypot(p.x-x,p.y-y)<=stats(p).speed*.05+.001);
 const b=MAPS[0].base;p.x=b.x;p.y=b.y+100;p.input={x:0,y:-1};for(let i=0;i<25;i++)tick(r);assert.ok(p.y>=b.y+57);assert.ok(!canStand(MAPS[0],b.x,b.y));
});
test('all ten stages clear in sequence; gold and army carry, final stage wins',()=>{
 const {r,p}=room();buy(r,p,'militia');p.upPower=999;p.hero='fire-wizard';p.input={attack:true,skill:true};let count=0;
 while(r.phase!=='victory'&&count++<50000){
  if(r.phase==='lobby')start(r);
  if(r.phase==='clear'){const old=r.stage,gold=p.gold,army=r.troops.length;assert.equal(nextStage(r),true);assert.equal(r.stage,old+1);assert.equal(p.gold,gold+45);assert.equal(r.troops.length,army);}
  p.hp=10000;r.gate=r.maxGate;p.skillCd=0;
  const target=r.enemies.find(e=>e.hp>0);if(target){p.x=target.x;p.y=target.y+5;}p.input={attack:true,skill:true};tick(r,.1,()=>.99);
 }
 assert.equal(r.phase,'victory',`stage ${r.stage}, phase ${r.phase}`);assert.equal(r.stage,10);assert.equal(r.wave,3);assert.ok(p.gold>120);assert.ok(p.level>1);assert.equal(nextStage(r),false);
});
test('each monster species appears and stage ten has a boss',()=>{
 const {r}=room();r.stage=10;r.wave=1;r.spawn=10;
 const ids=new Set();for(let i=0;i<MONSTERS.length;i++)ids.add(spawnEnemy(r,()=>(i+.1)/MONSTERS.length).sprite);assert.equal(ids.size,MONSTERS.length);
 r.wave=3;r.spawn=1;const boss=spawnEnemy(r,()=>0);assert.ok(boss.boss);assert.equal(boss.sprite,'lord-dragon');assert.ok(boss.maxHp>2000);
});
test('undefended maps end in defeat rather than stalling',()=>{
 for(const map of MAPS){const r=createRoom('TEST');addPlayer(r);r.stage=map.id;r.phase='battle';r.wave=1;r.players[0].x=900;r.players[0].y=620;r.players[0].hp=0;r.players[0].respawn=99999;r.spawn=0;spawnEnemy(r,()=>0);r.gate=1;
  for(let t=0;t<5000&&r.phase==='battle';t++)tick(r,.1,()=>0);
  assert.equal(r.phase,'defeat',`Map ${map.id}: enemy stalled at ${JSON.stringify(r.enemies[0])}`);
 }
});
test('AI routes around a large obstacle without crossing collision',()=>{
 const map={base:{x:150,y:150},props:[{x:950,y:800,radius:60}]},unit={x:800,y:800};
 const move=(u,tx,ty,speed,dt,m)=>{const d=Math.hypot(tx-u.x,ty-u.y);if(d<.01)return;const step=Math.min(speed*dt,d),x=u.x+(tx-u.x)/d*step,y=u.y+(ty-u.y)/d*step;if(canStand(m,x,y)){u.x=x;u.y=y;}else{if(canStand(m,x,u.y))u.x=x;if(canStand(m,u.x,y))u.y=y;}};
 for(let t=0;t<400;t++){navigate(unit,1100,800,140,.05,map,move,canStand);assert.ok(canStand(map,unit.x,unit.y));}
 assert.ok(Math.hypot(unit.x-1100,unit.y-800)<15,JSON.stringify(unit));
});

