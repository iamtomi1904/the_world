import http from 'node:http';
import {readFileSync,mkdirSync} from 'node:fs';
import {resolve,extname,sep} from 'node:path';
import {DatabaseSync} from 'node:sqlite';
import {WebSocketServer,WebSocket} from 'ws';
import {randomUUID,randomBytes} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {createRoom,addPlayer,start,buy,nextStage,tick,snapshot,HEROES,stats,useConsumable} from './simulation.mjs';
import {initializeSkills} from './abilities.mjs';
const root=fileURLToPath(new URL('.',import.meta.url));
const data=process.env.GAME_DATA_DIR||resolve(root,'data');mkdirSync(data,{recursive:true});
const db=new DatabaseSync(resolve(data,'game.sqlite'));
db.exec(`PRAGMA journal_mode=WAL;
CREATE TABLE IF NOT EXISTS matches(id TEXT PRIMARY KEY,room TEXT,result TEXT,wave INTEGER,kills INTEGER,players INTEGER,ended_at TEXT DEFAULT CURRENT_TIMESTAMP);
CREATE TABLE IF NOT EXISTS guest_progress(token TEXT PRIMARY KEY,xp INTEGER DEFAULT 0,hero TEXT,updated_at TEXT DEFAULT CURRENT_TIMESTAMP);
CREATE TABLE IF NOT EXISTS match_players(match_id TEXT,player_id TEXT,name TEXT,hero TEXT,gold INTEGER,kills INTEGER,level INTEGER,PRIMARY KEY(match_id,player_id));`);
if(!db.prepare('PRAGMA table_info(matches)').all().some(c=>c.name==='stage'))db.exec('ALTER TABLE matches ADD COLUMN stage INTEGER DEFAULT 1');
if(!db.prepare('PRAGMA table_info(matches)').all().some(c=>c.name==='difficulty'))db.exec("ALTER TABLE matches ADD COLUMN difficulty TEXT DEFAULT 'easy'");
const rooms=new Map();
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.json':'application/json; charset=utf-8'};
function saveProgress(p){if(p.token)db.prepare('INSERT INTO guest_progress(token,xp,hero) VALUES(?,?,?) ON CONFLICT(token) DO UPDATE SET xp=MAX(guest_progress.xp,excluded.xp),hero=excluded.hero,updated_at=CURRENT_TIMESTAMP').run(p.token,p.xp,p.hero);}
function record(r){
 const id=randomUUID();db.exec('BEGIN');try{
  db.prepare('INSERT INTO matches(id,room,result,wave,kills,players,stage,difficulty) VALUES(?,?,?,?,?,?,?,?)').run(id,r.code,r.phase,r.wave,r.kills,r.peak,r.stage,r.difficulty);
  for(const p of r.players){db.prepare('INSERT INTO match_players VALUES(?,?,?,?,?,?,?)').run(id,p.id,p.name,p.hero,p.earned,p.kills,p.level);saveProgress(p);}
  db.exec('COMMIT');r.recorded=true;
 }catch(e){db.exec('ROLLBACK');console.error('Could not save match',e.message);}
}
const server=http.createServer((req,res)=>{
 try{
  const path=decodeURIComponent(new URL(req.url,'http://localhost').pathname);res.setHeader('Cache-Control','no-store');res.setHeader('X-Content-Type-Options','nosniff');
  if(path==='/health'){res.end('ok');return;}
  if(path==='/api/history'){res.setHeader('Content-Type',mime['.json']);res.end(JSON.stringify(db.prepare('SELECT * FROM matches ORDER BY ended_at DESC,rowid DESC LIMIT 20').all()));return;}
  const base=resolve(root,'public');const vendor=path==='/vendor/phaser.js';
  const file=vendor?resolve(root,'node_modules/phaser/dist/phaser.min.js'):resolve(base,'.'+(path==='/'?'/home.html':path));
  if(!vendor&&!file.startsWith(base+sep)){res.writeHead(403).end();return;}
  res.setHeader('Content-Type',mime[extname(file)]||'application/octet-stream');res.end(readFileSync(file));
 }catch{res.writeHead(404).end('Not found');}
});
const wss=new WebSocketServer({server,maxPayload:2048});
function send(ws,m){if(ws.readyState===WebSocket.OPEN&&ws.bufferedAmount<1_000_000)ws.send(JSON.stringify(m));}
wss.on('connection',ws=>{
 ws.id=randomUUID();ws.count=0;ws.buyAt=0;ws.purchases=new Set();
 ws.on('message',raw=>{try{
  if(++ws.count>80)return;
  const m=JSON.parse(raw);if(!m||typeof m!=='object')return;
  if(m.type==='join'&&!ws.room){
   const requested=String(m.code||'').trim().toUpperCase();
   if(requested&&!/^[A-F0-9]{6}$/.test(requested)){send(ws,{error:'Mã phòng gồm 6 ký tự.'});return;}
   let r=requested?rooms.get(requested):null;
   if(requested&&!r){send(ws,{error:'Không tìm thấy phòng.'});return;}
   if(!r&&rooms.size>=100){send(ws,{error:'Server đang đầy, hãy thử lại sau.'});return;}
   if(!r){let code;do{code=randomBytes(3).toString('hex').toUpperCase();}while(rooms.has(code));r=createRoom(code,m.difficulty);rooms.set(code,r);}
   if(r.players.length>=4||r.phase!=='lobby'){send(ws,{error:'Phòng đã đầy hoặc đang chơi.'});return;}
   const existing=typeof m.token==='string'?db.prepare('SELECT * FROM guest_progress WHERE token=?').get(m.token):null;
   const token=existing?.token||randomUUID();
   const activeXP=[...rooms.values()].flatMap(room=>room.players).filter(p=>p.token===token).reduce((max,p)=>Math.max(max,p.xp),existing?.xp||0);
   const p=addPlayer(r,{id:ws.id,name:m.name,hero:m.hero||existing?.hero,xp:activeXP,token,assetsReady:m.waitForAssets!==true});ws.room=r;saveProgress(p);
   send(ws,{type:'joined',id:ws.id,code:r.code,token});
   if(!requested&&m.solo===true){r.autoStart=true;start(r);}
  }
  const r=ws.room,p=r?.players.find(p=>p.id===ws.id);if(!p)return;
  if(m.type==='ready'){p.assetsReady=true;if(r.autoStart)start(r);}
  if(m.type==='input')p.input={aimX:Number.isFinite(m.aimX)?Math.max(-1,Math.min(1,m.aimX)):p.face||1,aimY:Number.isFinite(m.aimY)?Math.max(-1,Math.min(1,m.aimY)):0,x:Number.isFinite(m.x)?Math.max(-1,Math.min(1,m.x)):0,y:Number.isFinite(m.y)?Math.max(-1,Math.min(1,m.y)):0,attack:!!m.attack,guard:!!m.guard,skill:!!m.skill,q:!!m.q,e:!!m.e,r:!!m.r};
  if(m.type==='start'&&r.players[0]===p)start(r);
  if(m.type==='hero'&&r.phase==='lobby'&&HEROES.some(h=>h.id===m.hero)){if(p.gem){send(ws,{error:'Bán ngọc trước khi đổi hero.'});return;}if(Object.keys(p.skills).length>1||Object.values(p.skills).some(rank=>rank>1)||p.mastery>0){send(ws,{error:'Đã học kỹ năng, không thể đổi hero trong phòng này.'});return;}p.hero=m.hero;initializeSkills(p,HEROES.find(h=>h.id===m.hero).classId);p.hp=HEROES.find(h=>h.id===m.hero).hp+(p.level-1)*22+p.upHP*40;saveProgress(p);}
  if(m.type==='next'&&r.players[0]===p)nextStage(r);
  if(m.type==='use-item'){const error=useConsumable(r,p,m.item,stats);if(error)send(ws,{error});}
  if(m.type==='buy'&&Date.now()-ws.buyAt>200){if(m.requestId&&ws.purchases.has(m.requestId))return;if(m.requestId){ws.purchases.add(m.requestId);if(ws.purchases.size>256)ws.purchases.delete(ws.purchases.values().next().value);}ws.buyAt=Date.now();const error=buy(r,p,m.choice);if(error)send(ws,{error});}
 }catch{send(ws,{error:'Yêu cầu không hợp lệ.'});}});
 ws.on('close',()=>{const r=ws.room;if(!r)return;const p=r.players.find(p=>p.id===ws.id);if(p)saveProgress(p);r.players=r.players.filter(p=>p.id!==ws.id);r.troops=r.troops.filter(t=>t.owner!==ws.id);if(!r.players.length)rooms.delete(r.code);});
});
setInterval(()=>{for(const ws of wss.clients)ws.count=0;},1000).unref();
setInterval(()=>{
 for(const r of rooms.values()){
  tick(r,.05);
  if(['clear','victory','defeat'].includes(r.phase)&&!r.recorded)record(r);
  const state=snapshot(r);for(const ws of wss.clients)if(ws.room===r)send(ws,state);
 }
},50);
setInterval(()=>{for(const r of rooms.values())for(const p of r.players)saveProgress(p);},15000).unref();
server.listen(Number(process.env.PORT)||3000,'0.0.0.0',()=>console.log(`Giữ Cổng Thành v0.10: http://localhost:${Number(process.env.PORT)||3000}`));



