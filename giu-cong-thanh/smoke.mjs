import {WebSocket} from 'ws';
import assert from 'node:assert/strict';
const base=process.env.TEST_URL||'http://localhost:3000';
assert.equal(await (await fetch(base+'/health')).text(),'ok');
for(const path of ['/','/defense.html','/home.js','/home.css','/game.js','/content.js','/skills.js','/passives.js','/terrain.js','/effects.js','/catalog-v4.json','/vendor/phaser.js','/assets/v3/castle.png','/api/history'])assert.equal((await fetch(base+path)).status,200,path);
const homepage=await(await fetch(base+'/')).text();assert.ok(homepage.includes('THE WORLD'));assert.ok(homepage.includes('/defense.html'));const defense=await(await fetch(base+'/defense.html')).text();assert.ok(defense.includes('id="solo"'));
const catalog=await(await fetch(base+'/catalog-v4.json')).json();for(const a of catalog.actors)for(const action of Object.values(a.actions))assert.equal((await fetch(base+action.url)).status,200,action.url);
for(const art of Object.values(catalog.bossCasts||{}))assert.equal((await fetch(base+art.url)).status,200,art.url);
for(const art of catalog.spellArt||[])assert.equal((await fetch(base+art.url)).status,200,art.id);
for(const fx of catalog.effects)assert.equal((await fetch(base+fx.url)).status,200,fx.id);
const clients=[];
async function connect(){const ws=new WebSocket(base.replace('http','ws'));clients.push(ws);ws.messages=[];ws.on('message',data=>ws.messages.push(JSON.parse(data)));await new Promise((ok,no)=>{ws.once('open',ok);ws.once('error',no);});return ws;}
async function wait(ws,predicate){const end=Date.now()+10000;while(Date.now()<end){const m=ws.messages.find(predicate);if(m)return m;await new Promise(r=>setTimeout(r,25));}throw Error('Timed out waiting for server state: '+JSON.stringify(ws.messages.at(-1)));}
try{
 const solo=await connect();solo.send(JSON.stringify({type:'join',name:'Solo test',solo:true,hero:'fire-wizard'}));
 await wait(solo,m=>m.type==='joined');
 const soloBattle=await wait(solo,m=>m.phase==='battle');
 assert.equal(soloBattle.players.length,1,'A solo player can start without another player');
 assert.equal(soloBattle.players[0].hero,'fire-wizard');
 assert.equal(soloBattle.players[0].stats.range,200);
 assert.equal(soloBattle.stage,1);
 assert.equal(soloBattle.players[0].classId,'pyromancer');
 assert.equal(soloBattle.players[0].skills.fireburst,1);
 solo.send(JSON.stringify({type:'buy',choice:'skill:shield-bash'}));
 await wait(solo,m=>m.error==='Kỹ năng không thuộc class này.');
 await new Promise(r=>setTimeout(r,250));
 solo.send(JSON.stringify({type:'buy',choice:'militia'}));
 await wait(solo,m=>m.troops?.length===1&&m.players[0].gold===60);
 await new Promise(r=>setTimeout(r,250));
 solo.send(JSON.stringify({type:'buy',choice:'elite'}));
 await wait(solo,m=>m.error==='Không đủ vàng.');
 solo.send(JSON.stringify({type:'input',x:0,y:1,attack:true}));
 await wait(solo,m=>m.phase==='battle'&&m.players[0].y>215&&m.enemies.length>0);
 solo.close();
 const a=await connect();a.send(JSON.stringify({type:'join',name:'Test A'}));const joined=await wait(a,m=>m.type==='joined');
 const b=await connect();b.send(JSON.stringify({type:'join',name:'Test B',code:joined.code}));await wait(b,m=>m.type==='joined');
 await wait(a,m=>m.type==='state'&&m.players.length===2);
 b.send(JSON.stringify({type:'start'}));await new Promise(r=>setTimeout(r,150));assert.equal(a.messages.at(-1).phase,'lobby');
 a.send(JSON.stringify({type:'start'}));await wait(a,m=>m.phase==='battle');
 const before=a.messages.at(-1).players[0].x;a.send(JSON.stringify({type:'input',x:9999,y:0,attack:true}));await new Promise(r=>setTimeout(r,350));const snapshot=a.messages.at(-1);assert.ok(snapshot.players[0].x-before<=65,'Server clamps movement input');assert.ok(snapshot.enemies.length>0);
 const c=await connect();c.send(JSON.stringify({type:'join',code:joined.code}));await wait(c,m=>!!m.error);
 a.send('not json');await wait(a,m=>!!m.error);
 console.log('PASS: all animated asset URLs, solo auto-start, hero choice/stats, troop purchase/insufficient funds, movement/enemies, two clients, host permissions, input clamping, join lock, malformed message.');
}finally{for(const ws of clients)ws.close();}
