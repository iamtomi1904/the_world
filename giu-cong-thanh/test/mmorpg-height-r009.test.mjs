import test from 'node:test';import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';
import {MapTraversal,surfaceHeight,applyMovement,terrainAt} from '../public/mmorpg/map-traversal.js';
const config=JSON.parse(readFileSync(new URL('../public/mmorpg/maps/runtime-map.json',import.meta.url))),s=config.scenes.world;
test('plateau faces share their top and foot vertices and a continuous material coordinate',()=>{
 assert.equal(s.geology.version,2);let joins=0;
 for(const f of s.geology.faces){const n=Number(f.id.split('-').at(-1)),next=s.geology.faces.find(v=>v.region===f.region&&Number(v.id.split('-').at(-1))===n+1);if(!next)continue;
  assert.deepEqual(f.top[1],next.top[0]);assert.deepEqual(f.base[1],next.base[0]);assert.equal(f.u1,next.u0);joins++;}
 assert.ok(joins>200);
});
test('camp-to-farm ramp continuously descends and can be walked back uphill without warping position',()=>{
 const m=new MapTraversal(config);assert.ok(m.place('world',[2440/3,2750/3]));const heights=[surfaceHeight(s,m.player.x,m.player.y)];
 for(let i=0;i<100;i++){m.move(.85,3);heights.push(surfaceHeight(s,m.player.x,m.player.y));}
 assert.ok(Math.abs(m.player.y-3050)<.01);assert.equal(heights[0],64);assert.equal(heights.at(-1),-64);
 assert.ok(heights.some(h=>h>0&&h<64));assert.ok(heights.some(h=>h<0&&h>-64));
 assert.ok(heights.slice(1).every((v,i)=>Math.abs(v-heights[i])<=s.geology.surface.maxStepHeight));
 for(let i=0;i<100;i++)m.move(-.85,-3);assert.ok(Math.abs(m.player.x-2440)<.01);assert.ok(Math.abs(m.player.y-2750)<.01);assert.equal(surfaceHeight(s,m.player.x,m.player.y),64);
});
test('slope movement uses physical surface length and details provide real footprint collision',()=>{
 const m=new MapTraversal(config);assert.ok(m.place('world',[2490/3,2950/3]));const before={...m.player};applyMovement(m,{id:1,dx:.28,dy:1,dt:.04});
 const distance=Math.hypot(m.player.x-before.x,m.player.y-before.y);assert.ok(distance>0&&distance<config.movement.speed*.04);
 for(const o of s.objects.filter(o=>o.kind==='detail'&&o.collider)){const r=o.collider;assert.equal(m.canStand((r[0]+r[2]/2)*3,(r[1]+r[3]/2)*3),false,o.asset);}
 assert.ok(s.objects.filter(o=>o.kind==='detail').length>100);
});
test('water crossing terrain faces stays water and deep river takes priority at confluences',()=>{
 const river=s.geology.hydrology.find(h=>h.deep);let checked=0;
 const inside=(x,y,p)=>{let v=false;for(let i=0,j=p.length-1;i<p.length;j=i++){const a=p[i],b=p[j];if((a[1]>y)!==(b[1]>y)&&x<(b[0]-a[0])*(y-a[1])/(b[1]-a[1])+a[0])v=!v;}return v;};
 for(const h of s.geology.hydrology)for(const p of h.center){if(p[0]<50||p[1]<50||p[0]>5950||p[1]>4450)continue;const x=Math.floor(p[0]/5)*5+2.5,y=Math.floor(p[1]/5)*5+2.5;
  if(!inside(x,y,h.water))continue;const tile=terrainAt(s,x/3,y/3);if(tile===4)continue;
  assert.equal(tile,inside(x,y,river.water)?3:5,h.id+' '+x+','+y);checked++;}
 assert.ok(checked>100);
});
