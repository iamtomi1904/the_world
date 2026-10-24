import {existsSync} from 'node:fs';
import {resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {DatabaseSync} from 'node:sqlite';
import {createStorage} from '../storage.mjs';
const root=fileURLToPath(new URL('../',import.meta.url));if(existsSync(resolve(root,'.env')))process.loadEnvFile(resolve(root,'.env'));
if(!process.env.DATABASE_URL)throw Error('Cần DATABASE_URL PostgreSQL. Không nhập vào chính SQLite nguồn.');
const source=new DatabaseSync(resolve(process.env.GAME_DATA_DIR||resolve(root,'data'),'game.sqlite'),{readOnly:true}),store=await createStorage(root);let count=0;
try{for(const r of source.prepare('SELECT * FROM matches').all()){await store.query('INSERT INTO matches(id,room,result,wave,kills,players,stage,difficulty,ended_at) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9) ON CONFLICT(id) DO NOTHING',[r.id,r.room,r.result,r.wave,r.kills,r.players,r.stage||1,r.difficulty||'easy',r.ended_at]);count++;}for(const p of source.prepare('SELECT * FROM match_players').all())await store.query('INSERT INTO match_players(match_id,player_id,name,hero,gold,kills,level) VALUES($1,$2,$3,$4,$5,$6,$7) ON CONFLICT(match_id,player_id) DO NOTHING',[p.match_id,p.player_id,p.name,p.hero,p.gold,p.kills,p.level]);console.log('Đã nhập lịch sử:',count,'bản ghi trận. Dữ liệu nguồn được giữ nguyên.');}finally{source.close();await store.close();}
