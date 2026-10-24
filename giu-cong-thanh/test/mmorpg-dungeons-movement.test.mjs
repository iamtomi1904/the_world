import test from 'node:test';import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';import {MapTraversal,applyMovement} from '../public/mmorpg/map-traversal.js';
const config=JSON.parse(readFileSync(new URL('../public/mmorpg/maps/runtime-map.json',import.meta.url)));
test('all dungeon room centers and exit connect through actual circular-foot collision',()=>{
 for(const id of ['DG','ECO1','ECO2']){const m=new MapTraversal(config),s=config.scenes[id],g=s.grid;assert.ok(s.theme);assert.ok(!s.image);assert.ok(m.place(id,s.spawn));const cell=g.cell*s.scale,half=cell/2,start=[Math.floor(m.player.x/cell),Math.floor(m.player.y/cell)],queue=[start],seen=new Set([start.join(',')]);
 for(let i=0;i<queue.length;i++)for(const [dx,dy]of [[0,1],[1,0],[0,-1],[-1,0]]){const [x,y]=queue[i],next=[x+dx,y+dy],key=next.join(',');if(next[0]<0||next[1]<0||next[0]>=g.width||next[1]>=g.height||seen.has(key)||!m.canStand(next[0]*cell+half,next[1]*cell+half))continue;m.player={x:x*cell+half,y:y*cell+half};m.move(dx*cell,dy*cell);if(Math.abs(m.player.x-next[0]*cell-half)>.01||Math.abs(m.player.y-next[1]*cell-half)>.01)continue;seen.add(key);queue.push(next);}
 for(const r of s.rooms){const [x,y,w,h]=r.rect;assert.ok(seen.has([Math.floor((x+w/2)/g.cell),Math.floor((y+h/2)/g.cell)].join(',')),id+' '+r.id);}
 for(const p of s.portals)assert.ok(seen.has(p.at.map(v=>Math.floor(v/g.cell)).join(',')),id+' exit');
 assert.equal(s.rooms.length,id==='DG'?6:3);assert.equal(m.canStand(10,10),false);
 }
});
test('acknowledged movement plus replay yields identical collision result to uninterrupted simulation',()=>{const local=new MapTraversal(config),server=new MapTraversal(config);const steps=Array.from({length:80},(_,i)=>({id:i+1,dx:i<40?1:0,dy:i<40?0:1,dt:1/60}));for(const step of steps)applyMovement(local,step);for(const step of steps.slice(0,30))applyMovement(server,step);const replay=new MapTraversal(config);replay.player={...server.player};for(const step of steps.slice(30))applyMovement(replay,step);assert.deepEqual(replay.player,local.player);});
