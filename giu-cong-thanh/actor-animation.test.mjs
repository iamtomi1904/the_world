import test from 'node:test';import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';
import {actorAction} from './public/actor-animation.js';import {empoweredActor} from './public/empowered.js';
const catalog=JSON.parse(readFileSync(new URL('./public/catalog-v4.json',import.meta.url),'utf8').replace(/^\uFEFF/,''));
test('guardian keeps all attack frames after short server animation flag expires',()=>{
 const info=catalog.actors.find(a=>a.id==='knight-1'),obj={},u={hp:100,anim:.28,attackCount:1,stats:{cooldown:.62}};
 assert.equal(actorAction(u,obj,true,1000,info),'attack');const end=obj.attackUntil;assert.ok(end>1280);
 u.anim=0;assert.equal(actorAction(u,obj,true,1300,info),'attack');assert.equal(actorAction(u,obj,true,end+1,info),'walk');
 u.anim=.28;u.attackCount=2;assert.equal(actorAction(u,obj,true,1700,info),'attack');assert.ok(obj.attackUntil>1700);
});
test('stun and death cancel attack; haste fits the attack into its cooldown',()=>{
 const info=catalog.actors.find(a=>a.id==='knight-1'),obj={},u={hp:100,anim:.28,attackCount:1,stats:{cooldown:.2}};
 actorAction(u,obj,false,1000,info);assert.ok(obj.attackDuration<=170);u.stun=1;assert.equal(actorAction(u,obj,true,1020,info),'idle');assert.equal(obj.attackUntil,0);u.hp=0;assert.equal(actorAction(u,obj,true,1030,info),'dead');
});
test('all guardian animation sheets share centered stable foot anchor and correct frame widths',()=>{
 for(const id of ['knight-1','knight-2','knight-3']){const a=catalog.actors.find(a=>a.id===id);assert.equal(a.originX,.5);assert.equal(a.originY,.9);assert.equal(a.frame,160);for(const info of Object.values(a.actions)){const data=readFileSync(new URL('./public'+info.url,import.meta.url));assert.equal(data.readUInt32BE(16),160*info.frames);assert.equal(data.readUInt32BE(20),160);}}
});
test('empowered art covers idle, walk and attack for all warriors and restores normal after E expires',()=>{
 assert.equal(catalog.empoweredActors.length,3);
 for(const a of catalog.empoweredActors){const u={hero:a.hero,hp:100,buffs:[{time:7,lifesteal:.25}]};assert.equal(empoweredActor(u,catalog),a);u.buffs[0].time=0;assert.equal(empoweredActor(u,catalog),null);u.buffs[0].time=7;u.hp=0;assert.equal(empoweredActor(u,catalog),null);
  const data=readFileSync(new URL('./public'+a.url,import.meta.url));assert.equal(data.readUInt32BE(16),a.width);assert.equal(data.readUInt32BE(20),a.height);for(const [action,info]of Object.entries(a.actions)){assert.ok(info.frames>=4,action);assert.ok(info.start+info.frames<=18);}
 }
 assert.equal(empoweredActor({hero:'knight-1',hp:100,buffs:[{time:3,haste:.2}]},catalog),null);
});
