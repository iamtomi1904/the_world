import test from 'node:test';import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';
import {MapTraversal,terrainAt} from '../public/mmorpg/map-traversal.js';
const config=JSON.parse(readFileSync(new URL('../public/mmorpg/maps/runtime-map.json',import.meta.url))),world=config.scenes.world;
test('r008 dry decks can be crossed continuously rather than just standing at their centers',()=>{
 const m=new MapTraversal(config);assert.ok(m.place('world',[3600/3,2385/3]));m.move(800,0);assert.ok(m.player.x>=4399,'full stone bridge crossing');
 assert.ok(m.place('world',[1260/3,2950/3]));m.move(0,275);assert.ok(m.player.y>=3224,'full wooden bridge crossing');assert.equal(m.terrainSpeed(),1);
});
test('r008 gameplay uses the authored fine navigation and shoreline rather than a separate image mask',()=>{
 const authored=JSON.parse(readFileSync(new URL('../public/mmorpg/maps/binh-minh-geology.json',import.meta.url)));
 assert.deepEqual(world.navigation.data,authored.navigation.data);assert.deepEqual(world.geology.hydrology,authored.hydrology);
 assert.equal(world.navigation.cell*world.scale,5);
 for(const p of [[4080,1500],[4230,700]])assert.equal(terrainAt(world,p[0]/3,p[1]/3),3);
 assert.ok(world.geology.regions.some(r=>r.level===-1));assert.ok(world.geology.faces.filter(f=>f.ramp&&f.level>0).length>=5);
});
test('r008 banks and settlements use placed objects while leaving route gates open',()=>{
 assert.ok(world.objects.filter(o=>o.kind==='fence').length>=40);
 const treeKinds=new Set(world.objects.filter(o=>['oak','birch','willow','orchard'].includes(o.kind)).map(o=>o.kind));assert.equal(treeKinds.size,4);
 assert.equal(world.portals.length,3);assert.equal(config.version,6,'terrain polish does not reset saved character layout');
});
