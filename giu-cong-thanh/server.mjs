import http from 'node:http';
import {readFileSync,existsSync,readdirSync,createReadStream,statSync} from 'node:fs';
import {resolve,extname,sep} from 'node:path';
import {createStorage} from './storage.mjs';
import {createAuth,sameOrigin,json} from './auth.mjs';
import {WebSocketServer,WebSocket} from 'ws';
import {randomUUID,randomBytes} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {createRoom,addPlayer,start,buy,nextStage,tick,snapshot,HEROES,stats,useConsumable} from './simulation.mjs';
import {migrateMMO,createMMOService} from './mmorpg-service.mjs';
import {initializeSkills} from './abilities.mjs';
const root=fileURLToPath(new URL('.',import.meta.url));
if(existsSync(resolve(root,'.env')))process.loadEnvFile(resolve(root,'.env'));
const store=await createStorage(root);
const rooms=new Map();
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.json':'application/json; charset=utf-8'};
function saveProgress(p){store.saveProfile({...p}).catch(e=>console.error('Không lưu được hồ sơ:',e.code||e.name));}
function record(r){const stage=r.stage,phase=r.phase;r.recorded=true;const copy={...r,players:r.players.map(p=>({...p}))};store.record(copy).catch(e=>{console.error('Không lưu được trận:',e.code||e.name);if(r.stage===stage&&r.phase===phase)r.recorded=false;});}
const auth=createAuth(store,hash=>{for(const ws of wss.clients)if(ws.session?.hash===hash)ws.close(4001,'Đã đăng xuất');});
await migrateMMO(store,root);
const mmo=createMMOService({store,auth,config:JSON.parse(readFileSync(resolve(root,'public/mmorpg/maps/runtime-map.json'),'utf8')),devTools:process.env.NODE_ENV!=='production'&&process.env.MMO_DEV_MAP_TOOLS==='1'});
const server=http.createServer(async(req,res)=>{
 try{
  const path=decodeURIComponent(new URL(req.url,'http://localhost').pathname);res.setHeader('Cache-Control','no-store');res.setHeader('X-Content-Type-Options','nosniff');
  if(path==='/api/client-info'&&req.method==='GET'){json(res,200,{app:'an-thanh',protocol:1,database:store.backend});return;}
  if(['/api/client-release','/downloads/an-thanh-windows.zip'].includes(path)&&req.method==='GET'){
   const manifestPath=resolve(root,'release/latest-client.json');
   if(!existsSync(manifestPath)){json(res,503,{error:'Client Windows đang được đóng gói.'});return;}
   const release=JSON.parse(readFileSync(manifestPath,'utf8'));
   if(!/^AnThanh-PC-\d+\.\d+\.\d+-win-x64\.zip$/.test(release.archive||'')){json(res,503,{error:'Client Windows chưa sẵn sàng.'});return;}
   const archive=resolve(root,'release',release.archive);
   if(!existsSync(archive)){json(res,503,{error:'Chưa tìm thấy gói client Windows.'});return;}
   if(path==='/api/client-release'){json(res,200,{version:release.version,bytes:statSync(archive).size,sha256:release.sha256,download:'/downloads/an-thanh-windows.zip'});return;}
   res.setHeader('Content-Type','application/zip');res.setHeader('Content-Disposition','attachment; filename="'+release.archive+'"');res.setHeader('Content-Length',statSync(archive).size);
   const stream=createReadStream(archive);stream.on('error',()=>res.destroy());res.on('close',()=>stream.destroy());stream.pipe(res);return;
  }
  if(path==='/api/design-documents'){
   const ip=req.socket.remoteAddress,host=new URL('http://'+req.headers.host).hostname;if(process.env.NODE_ENV==='production'||req.headers['x-forwarded-for']||!['localhost','127.0.0.1','[::1]'].includes(host)||!['127.0.0.1','::1','::ffff:127.0.0.1'].includes(ip)){json(res,403,{error:'Tài liệu thiết kế nội bộ chỉ mở trên máy local.'});return;}
   const documents=[];for(const collection of ['mmorpg-design-checklist-v1','mmorpg-story-v1']){const folder=resolve(root,'design',collection);for(const file of readdirSync(folder).filter(f=>f.endsWith('.md')).sort()){const content=readFileSync(resolve(folder,file),'utf8');documents.push({id:collection+'/'+file,collection,file,title:(content.match(/^# (.+)/m)||[])[1]||file,content,spoiler:collection==='mmorpg-story-v1'&&file!=='README.md'});}}
   json(res,200,{documents});return;
  }
  if(path==='/vendor/marked.js'){res.setHeader('Content-Type','text/javascript; charset=utf-8');res.end(readFileSync(resolve(root,'node_modules/marked/lib/marked.esm.js')));return;}
  if(path.startsWith('/vendor/mermaid/')){const vendorRoot=resolve(root,'node_modules/mermaid/dist'),file=resolve(vendorRoot,path.slice('/vendor/mermaid/'.length));if(!file.startsWith(vendorRoot+sep)){res.writeHead(403).end();return;}res.setHeader('Content-Type','text/javascript; charset=utf-8');res.end(readFileSync(file));return;}
  if(path==='/health'){res.end('ok');return;}
  if(await auth.handle(req,res,path))return;
  if(await mmo.handle(req,res,path))return;
  if(path==='/api/history'){const session=await auth.findSession(req);if(!session){json(res,401,{error:'Cần đăng nhập.'});return;}json(res,200,await store.history(session.user.id));return;}
  if(['/defense.html','/index.html','/mmorpg/index.html'].includes(path)&&!await auth.findSession(req)){res.writeHead(302,{Location:'/login.html?next='+encodeURIComponent(path)}).end();return;}
  const base=resolve(root,'public');const vendor=path==='/vendor/phaser.js';
  const file=vendor?resolve(root,'node_modules/phaser/dist/phaser.min.js'):resolve(base,'.'+(path==='/'?'/home.html':path));
  if(!vendor&&!file.startsWith(base+sep)){res.writeHead(403).end();return;}
  res.setHeader('Content-Type',mime[extname(file)]||'application/octet-stream');res.end(readFileSync(file));
 }catch(e){if(!res.headersSent){if(e.code==='ENOENT')res.writeHead(404).end('Not found');else json(res,503,{error:'Dịch vụ tạm thời không sẵn sàng.'});}else res.end();}
});
const wss=new WebSocketServer({noServer:true,maxPayload:2048});
function send(ws,m){if(ws.readyState===WebSocket.OPEN&&ws.bufferedAmount<1_000_000)ws.send(JSON.stringify(m));}
server.on('upgrade',(req,socket,head)=>{(async()=>{if(!sameOrigin(req)){socket.end('HTTP/1.1 403 Forbidden\r\nConnection: close\r\n\r\n');return;}const session=await auth.findSession(req);if(!session){socket.end('HTTP/1.1 401 Unauthorized\r\nConnection: close\r\n\r\n');return;}wss.handleUpgrade(req,socket,head,ws=>wss.emit('connection',ws,req,session));})().catch(()=>socket.destroy());});
wss.on('connection',(ws,req,session)=>{
 ws.session=session;
 ws.id=randomUUID();ws.count=0;ws.buyAt=0;ws.purchases=new Set();
 ws.on('message',async raw=>{try{
  if(Date.now()>=ws.session.expiresAt){ws.close(4001,'Phiên đăng nhập đã hết hạn');return;}
  if(++ws.count>80)return;
  const m=JSON.parse(raw);if(!m||typeof m!=='object')return;
  if(m.type==='join'&&!ws.room){
   if(ws.joining)return;ws.joining=true;let profile;try{profile=await store.profile(ws.session.user.id);}finally{ws.joining=false;}
   if(ws.readyState!==WebSocket.OPEN||ws.room)return;
   if([...wss.clients].some(other=>other!==ws&&other.session?.user.id===ws.session.user.id&&other.room)){send(ws,{error:'Tài khoản này đang tham gia một phòng khác.'});return;}
   const requested=String(m.code||'').trim().toUpperCase();
   if(requested&&!/^[A-F0-9]{6}$/.test(requested)){send(ws,{error:'Mã phòng gồm 6 ký tự.'});return;}
   let r=requested?rooms.get(requested):null;
   if(requested&&!r){send(ws,{error:'Không tìm thấy phòng.'});return;}
   if(!r&&rooms.size>=100){send(ws,{error:'Server đang đầy, hãy thử lại sau.'});return;}
   if(!r){let code;do{code=randomBytes(3).toString('hex').toUpperCase();}while(rooms.has(code));r=createRoom(code,m.difficulty);rooms.set(code,r);}
   if(r.players.length>=4||r.phase!=='lobby'){send(ws,{error:'Phòng đã đầy hoặc đang chơi.'});return;}
   const p=addPlayer(r,{id:ws.id,name:m.name||ws.session.user.displayName,hero:m.hero||profile?.hero,assetsReady:m.waitForAssets!==true});p.accountId=ws.session.user.id;ws.room=r;saveProgress(p);
   send(ws,{type:'joined',id:ws.id,code:r.code});
   if(!requested&&m.solo===true){r.autoStart=true;start(r);}
  }
  const r=ws.room,p=r?.players.find(p=>p.id===ws.id);if(!p)return;
  if(m.type==='ready'){p.assetsReady=true;if(r.autoStart)start(r);}
  if(m.type==='input')p.input={aimX:Number.isFinite(m.aimX)?Math.max(-1,Math.min(1,m.aimX)):p.face||1,aimY:Number.isFinite(m.aimY)?Math.max(-1,Math.min(1,m.aimY)):0,x:Number.isFinite(m.x)?Math.max(-1,Math.min(1,m.x)):0,y:Number.isFinite(m.y)?Math.max(-1,Math.min(1,m.y)):0,attack:!!m.attack,guard:!!m.guard,skill:!!m.skill,q:!!m.q,e:!!m.e,r:!!m.r};
  if(m.type==='start'&&r.players[0]===p)start(r);
  if(m.type==='hero'&&r.phase==='lobby'&&HEROES.some(h=>h.id===m.hero)){if(p.gem){send(ws,{error:'Bán ngọc trước khi đổi hero.'});return;}if(Object.keys(p.skills).length>1||Object.values(p.skills).some(rank=>rank>1)||p.mastery>0){send(ws,{error:'Đã học kỹ năng, không thể đổi hero trong phòng này.'});return;}p.hero=m.hero;initializeSkills(p,HEROES.find(h=>h.id===m.hero).classId);p.hp=stats(p).hp;saveProgress(p);}
  if(m.type==='next'&&r.players[0]===p)nextStage(r);
  if(m.type==='use-item'){const error=useConsumable(r,p,m.item,stats);if(error)send(ws,{error});}
  if(m.type==='buy'&&Date.now()-ws.buyAt>200){if(m.requestId&&ws.purchases.has(m.requestId))return;if(m.requestId){ws.purchases.add(m.requestId);if(ws.purchases.size>256)ws.purchases.delete(ws.purchases.values().next().value);}ws.buyAt=Date.now();const error=buy(r,p,m.choice);if(error)send(ws,{error});}
 }catch{send(ws,{error:'Yêu cầu không hợp lệ.'});}});
 ws.on('close',()=>{const r=ws.room;if(!r)return;const p=r.players.find(p=>p.id===ws.id);if(p)saveProgress(p);r.players=r.players.filter(p=>p.id!==ws.id);r.troops=r.troops.filter(t=>t.owner!==ws.id);if(!r.players.length)rooms.delete(r.code);});
});
setInterval(()=>{for(const ws of wss.clients){ws.count=0;if(Date.now()>=ws.session.expiresAt)ws.close(4001,'Phiên đăng nhập đã hết hạn');}},1000).unref();
setInterval(()=>{
 for(const r of rooms.values()){
  tick(r,.05);
  if(['clear','victory','defeat'].includes(r.phase)&&!r.recorded)record(r);
  const state=snapshot(r);for(const ws of wss.clients)if(ws.room===r)send(ws,state);
 }
},50);
setInterval(()=>{for(const r of rooms.values())for(const p of r.players)saveProgress(p);},15000).unref();
server.listen(Number(process.env.PORT)||3000,'0.0.0.0',()=>console.log(`Ẩn Thành · ${store.backend}: http://localhost:${Number(process.env.PORT)||3000}`));



