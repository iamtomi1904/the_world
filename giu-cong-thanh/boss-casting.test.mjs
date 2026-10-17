import test from 'node:test';import assert from 'node:assert/strict';
import {bossPoseFrame} from './public/boss-casting.js';
import {bossTick} from './encounters.mjs';
import {readFileSync} from 'node:fs';
test('all six casting sheets contain eight usable alpha frames with valid foot anchors',()=>{
 const catalog=JSON.parse(readFileSync(new URL('./public/catalog-v4.json',import.meta.url),'utf8'));
 assert.equal(Object.keys(catalog.bossCasts).length,6);
 for(const a of Object.values(catalog.bossCasts)){const png=readFileSync(new URL('./public'+a.url,import.meta.url));assert.equal(png.readUInt32BE(16),a.width);assert.equal(png.readUInt32BE(20),a.height);assert.equal(a.frames.length,8);assert.ok(a.bodyHeight>50);for(const [n,f]of a.frames.entries()){assert.ok(f.bbox[0]>0&&f.bbox[1]>0);assert.ok(f.bbox[2]<=Math.ceil(a.frameWidth)&&f.bbox[3]<=Math.ceil(a.frameHeight));assert.ok(a.originsY[n]>0&&a.originsY[n]<=1);}}
});
test('boss charge and release each traverse four drawn frames, then restore normal action',()=>{
 const u={hp:100,bossCast:{skill:'ground-slam',time:1.2,duration:1.2,angle:Math.PI}};
 for(const [time,frame]of [[1.2,0],[.85,1],[.55,2],[.1,3]]){u.bossCast.time=time;assert.equal(bossPoseFrame(u).frame,frame);assert.equal(bossPoseFrame(u).angle,Math.PI);}
 u.bossCast=null;u.skillPose={time:.65,duration:.65,skill:'ground-slam',angle:0};
 for(const [time,frame]of [[.65,4],[.45,5],[.25,6],[.05,7]]){u.skillPose.time=time;assert.equal(bossPoseFrame(u).frame,frame);}
 u.skillPose.time=0;assert.equal(bossPoseFrame(u),null);u.bossCast={time:.5};u.stun=1;assert.equal(bossPoseFrame(u),null);u.stun=0;u.hp=0;assert.equal(bossPoseFrame(u),null);
});
test('server release pose starts at real skill resolution and expires, without early damage',()=>{
 const p={id:'player',hp:1000,x:250,y:200},e={id:'boss',hp:100,maxHp:100,boss:true,family:'stone',bossSkills:['ground-slam'],skillCd:0,x:200,y:200,power:10,pulseCount:0};
 const r={players:[p],troops:[],enemies:[e]},events=[],ctx={fx:v=>events.push(v),summon:()=>{},canStand:()=>true};
 bossTick(r,e,.05,ctx);assert.ok(e.bossCast);assert.equal(e.skillPose,undefined);assert.equal(p.hp,1000);bossTick(r,e,1.3,ctx);assert.equal(e.bossCast,null);assert.equal(e.skillPose.skill,'ground-slam');assert.equal(e.skillPose.time,.65);assert.ok(p.hp<1000);assert.equal(bossPoseFrame(e).frame,4);bossTick(r,e,.7,ctx);assert.equal(e.skillPose,null);
});
