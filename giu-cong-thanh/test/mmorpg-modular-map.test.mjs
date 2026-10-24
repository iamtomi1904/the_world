import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {MapTraversal,terrainAt} from '../public/mmorpg/map-traversal.js';
const config=JSON.parse(readFileSync(new URL('../public/mmorpg/maps/runtime-map.json',import.meta.url)));
const source=JSON.parse(readFileSync(new URL('../public/mmorpg/maps/binh-minh.tmj',import.meta.url)));
test('runtime terrain and every placed object originate in the editable Tiled map',()=>{
  const ground=source.layers.find(l=>l.name==='Ground'),objects=source.layers.find(l=>l.name==='WorldObjects');
  assert.deepEqual(config.scenes.world.grid.data,ground.data);
  for(const o of objects.objects){const actual=config.scenes.world.objects.find(v=>v.id===String(o.id));assert.ok(actual);assert.ok(Math.abs(actual.x*3-o.x)<1e-7);assert.ok(Math.abs(actual.y*3-o.y)<1e-7);assert.ok(Math.abs(actual.width*3-o.width)<1e-7);}
});
test('all destinations are connected to spawn across actual footprint collision',()=>{
  const m=new MapTraversal(config),g=m.scene.grid;
  const cell=g.cell*m.scene.scale,half=cell/2;
  const start=[Math.floor(m.player.x/cell),Math.floor(m.player.y/cell)];
  const seen=new Set([start.join(',')]),queue=[start];
  for(let i=0;i<queue.length;i++)for(const [dx,dy]of [[0,1],[1,0],[0,-1],[-1,0]]){
    const [x,y]=queue[i],next=[x+dx,y+dy],key=next.join(',');
    if(next[0]<0||next[1]<0||next[0]>=g.width||next[1]>=g.height||seen.has(key)||!m.canStand(next[0]*cell+half,next[1]*cell+half))continue;
    // Test the connecting segment as well as its endpoints.
    m.player={x:x*cell+half,y:y*cell+half};m.move(dx*cell,dy*cell);
    if(Math.abs(m.player.x-(next[0]*cell+half))>.01||Math.abs(m.player.y-(next[1]*cell+half))>.01)continue;
    seen.add(key);queue.push(next);
  }
  for(const p of [...config.landmarks,...m.scene.portals])assert.ok(seen.has([Math.floor(p.at[0]/g.cell),Math.floor(p.at[1]/g.cell)].join(',')),p.name);
});
test('grass outside roads is explorable, deep water blocks and shallows slow',()=>{
  const m=new MapTraversal(config),s=m.scene;let grass,deep,shallow;
  for(let y=1;y<s.grid.height-1;y++)for(let x=1;x<s.grid.width-1;x++){
    const bx=(x+.5)*s.grid.cell,by=(y+.5)*s.grid.cell,t=terrainAt(s,bx,by);
    if(t===1&&m.canStand(bx*3,by*3))grass=[bx,by];if(t===3)deep=[bx,by];if(t===5&&m.canStand(bx*3,by*3))shallow=[bx,by];
  }
  assert.ok(grass&&deep&&shallow);assert.ok(m.place('world',grass));assert.equal(m.terrainSpeed(),1);
  assert.equal(m.place('world',deep),false);assert.ok(m.place('world',shallow));assert.equal(m.terrainSpeed(),.8);
});
test('full-sized region uses approved composition and keeps explicit old-to-new mapping',()=>{
  const s=config.scenes.world;
  assert.deepEqual(s.size.map(v=>v*s.scale),[6000,4500]);
  assert.deepEqual(s.spawn,[720,765]);
  assert.deepEqual(s.portals.map(p=>p.at),[[1660,330],[660,390],[1760,840]]);
  assert.ok(config.legacyRemap.some(([old,next])=>old.join(',')==='1050,1215'&&next.join(',')==='2160,2295'));
  assert.equal(s.grid.cell*s.scale,15);
  assert.ok(s.objects.filter(o=>o.kind==='flora').length>1000);
  assert.equal(new Set(s.objects.filter(o=>o.kind==='flora').map(o=>o.variant)).size,6);
});
test('tree feet, cottage walls and bridge rails really block movement',()=>{
  const m=new MapTraversal(config),s=m.scene;
  for(const o of s.objects){if(o.radius)assert.equal(m.canStand(o.x*3,o.y*3),false,o.id);
    if(o.collider){const r=o.collider;assert.equal(m.canStand((r[0]+r[2]/2)*3,(r[1]+r[3]/2)*3),false,o.id);}}
  const bridge=s.objects.find(o=>o.kind==='bridge');assert.ok(m.place('world',[bridge.x,bridge.y]));m.move(0,500);assert.ok(m.player.y<(bridge.y+16)*3);assert.ok(m.canStand(m.player.x,m.player.y));
});
test('three existing dungeons keep return locations and no remote portal interaction',()=>{
  const m=new MapTraversal(config);assert.equal(m.interact(),false);
  for(const p of config.scenes.world.portals){assert.ok(m.place('world',p.at));const before={...m.player};assert.ok(m.interact());assert.equal(m.id,p.target);assert.ok(m.place(m.id,m.scene.portals[0].at));assert.ok(m.interact());assert.deepEqual(m.player,before);}
});
