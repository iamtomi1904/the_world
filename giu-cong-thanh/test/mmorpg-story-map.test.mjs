import test from 'node:test';import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';
import {MapTraversal} from '../public/mmorpg/map-traversal.js';
const config=JSON.parse(readFileSync(new URL('../public/mmorpg/maps/runtime-map.json',import.meta.url))),s=config.scenes.world;
test('story geography contains real terraces, farms, varied buildings and three distinct entrances',()=>{
 assert.deepEqual([...new Set(s.elevation.data)].sort(),[-1,0,1,2]);
 assert.ok(s.objects.filter(o=>o.kind==='mountain').length>=6);
 assert.equal(s.objects.filter(o=>o.kind==='crop').length,4);
 const types=new Set(s.objects.filter(o=>o.kind==='building').map(o=>o.asset));
 for(const asset of ['home','barn','inn','forge','tent','well','bell','survey'])assert.ok(types.has(asset),asset);
 assert.deepEqual(s.objects.filter(o=>o.kind==='entrance').map(o=>o.asset).sort(),['hollow','mine','sealed']);
 assert.equal(s.portals.length,3);
});
test('cliff cells block feet and geology provides explicit ramps and layered shoreline',()=>{
 const m=new MapTraversal(config),g=s.grid,blocked=g.data.indexOf(7);assert.ok(blocked>=0);
 const x=(blocked%g.width+.5)*g.cell*3,y=(Math.floor(blocked/g.width)+.5)*g.cell*3;
 assert.equal(m.canStand(x,y),false);
 assert.equal(s.navigation.cell*3,5);assert.ok(s.geology.faces.some(f=>f.ramp));assert.ok(s.geology.faces.some(f=>f.material==='soil'));assert.ok(s.geology.hydrology.every(h=>h.bank.length===h.water.length&&h.bed.length===h.water.length));
});
test('Cau Lau has a dry traversable deck over shallow water',()=>{
 const m=new MapTraversal(config);assert.ok(m.place('world',[420,1000]));
 assert.equal(m.terrainSpeed(),1);m.move(0,180);assert.ok(m.player.y>=3179);assert.equal(m.terrainSpeed(),1);
});
test('region positions follow art reference and farmland occupies a substantial continuous area',()=>{
 const design=JSON.parse(readFileSync(new URL('../public/design-preview/v01-complete-map-r001/map-design.json',import.meta.url)));
 for(const r of design.regions){const p=config.landmarks.find(p=>p.name===r.name);assert.ok(p,r.id);assert.ok(Math.hypot(p.at[0]*3-r.artX*60,p.at[1]*3-r.artY*45)<130,r.id);}
 const crops=s.objects.filter(o=>o.kind==='crop');assert.ok(crops.every(o=>o.width*3>=500));
 const positions=crops.map(o=>[o.x*3,o.y*3]);assert.ok(Math.max(...positions.map(p=>p[0]))-Math.min(...positions.map(p=>p[0]))>=600);
});
