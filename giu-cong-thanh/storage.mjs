import {mkdirSync} from 'node:fs';
import {resolve} from 'node:path';
import {DatabaseSync} from 'node:sqlite';
import {randomUUID} from 'node:crypto';
export async function createStorage(root){
 const postgres=!!process.env.DATABASE_URL;let pool,sqlite;if(process.env.NODE_ENV==='production'&&!process.env.PUBLIC_ORIGIN?.startsWith('https://'))throw Error('Production cần PUBLIC_ORIGIN là địa chỉ HTTPS.');
 if(postgres){const {Pool}=await import('pg');pool=new Pool({connectionString:process.env.DATABASE_URL,max:10,connectionTimeoutMillis:10000,idleTimeoutMillis:30000});pool.on('error',()=>console.error('Kết nối PostgreSQL bị gián đoạn.'));}
 else {if(process.env.NODE_ENV==='production')throw Error('Production cần DATABASE_URL PostgreSQL.');const dir=process.env.GAME_DATA_DIR||resolve(root,'data');mkdirSync(dir,{recursive:true});sqlite=new DatabaseSync(resolve(dir,'game.sqlite'));sqlite.exec('PRAGMA journal_mode=WAL; PRAGMA foreign_keys=ON;');}
 const local=(sql,args=[])=>{const values=[];const query=sql.replace(/\$(\d+)/g,(_,n)=>{values.push(args[Number(n)-1]);return '?';});const stmt=sqlite.prepare(query);if(/^\s*SELECT/i.test(query)||/RETURNING/i.test(query))return {rows:stmt.all(...values)};return {rows:[],...stmt.run(...values)};};
 const query=(sql,args=[])=>postgres?pool.query(sql,args):Promise.resolve(local(sql,args));
 const schema=`CREATE TABLE IF NOT EXISTS accounts(id TEXT PRIMARY KEY,username TEXT NOT NULL UNIQUE,password_hash TEXT NOT NULL,display_name TEXT NOT NULL,created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP);
 CREATE TABLE IF NOT EXISTS account_sessions(token_hash TEXT PRIMARY KEY,account_id TEXT NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,expires_at TIMESTAMPTZ NOT NULL,created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP);
 CREATE INDEX IF NOT EXISTS sessions_account_idx ON account_sessions(account_id);
 CREATE INDEX IF NOT EXISTS sessions_expiry_idx ON account_sessions(expires_at);
 CREATE TABLE IF NOT EXISTS account_profiles(account_id TEXT PRIMARY KEY REFERENCES accounts(id) ON DELETE CASCADE,hero TEXT NOT NULL DEFAULT 'knight-1',best_xp INTEGER NOT NULL DEFAULT 0,updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP);
 CREATE TABLE IF NOT EXISTS matches(id TEXT PRIMARY KEY,room TEXT,result TEXT,wave INTEGER,kills INTEGER,players INTEGER,stage INTEGER DEFAULT 1,difficulty TEXT DEFAULT 'easy',ended_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP);
 CREATE TABLE IF NOT EXISTS match_players(match_id TEXT REFERENCES matches(id),player_id TEXT,name TEXT,hero TEXT,gold INTEGER,kills INTEGER,level INTEGER,account_id TEXT REFERENCES accounts(id),PRIMARY KEY(match_id,player_id));`;if(postgres)await query(schema);else sqlite.exec(schema);
 if(postgres){await query('ALTER TABLE match_players ADD COLUMN IF NOT EXISTS account_id TEXT REFERENCES accounts(id)');await query('ALTER TABLE matches ADD COLUMN IF NOT EXISTS stage INTEGER DEFAULT 1');await query("ALTER TABLE matches ADD COLUMN IF NOT EXISTS difficulty TEXT DEFAULT 'easy'");}
 else{for(const [table,column,definition]of [['match_players','account_id','TEXT'],['matches','stage','INTEGER DEFAULT 1'],['matches','difficulty',"TEXT DEFAULT 'easy'"]])if(!sqlite.prepare('PRAGMA table_info('+table+')').all().some(c=>c.name===column))sqlite.exec('ALTER TABLE '+table+' ADD COLUMN '+column+' '+definition);}
 await query('CREATE INDEX IF NOT EXISTS match_account_idx ON match_players(account_id)');
 const batch=async statements=>{if(!postgres){sqlite.exec('BEGIN');try{for(const [sql,args]of statements)local(sql,args);sqlite.exec('COMMIT');}catch(e){sqlite.exec('ROLLBACK');throw e;}return;}const client=await pool.connect();try{await client.query('BEGIN');for(const [sql,args]of statements)await client.query(sql,args);await client.query('COMMIT');}catch(e){await client.query('ROLLBACK');throw e;}finally{client.release();}};
 const profileSQL=`INSERT INTO account_profiles(account_id,hero,best_xp) VALUES($1,$2,$3) ON CONFLICT(account_id) DO UPDATE SET hero=excluded.hero,best_xp=CASE WHEN account_profiles.best_xp>excluded.best_xp THEN account_profiles.best_xp ELSE excluded.best_xp END,updated_at=CURRENT_TIMESTAMP`;
 return {backend:postgres?'postgresql':'sqlite-local',query,
  async transaction(fn){if(!postgres)throw Error('MMORPG requires PostgreSQL');const client=await pool.connect();try{await client.query('BEGIN');const result=await fn(client);await client.query('COMMIT');return result;}catch(e){await client.query('ROLLBACK');throw e;}finally{client.release();}},
  async profile(id){return (await query('SELECT hero,best_xp FROM account_profiles WHERE account_id=$1',[id])).rows[0];},
  async saveProfile(p){if(p.accountId)await query(profileSQL,[p.accountId,p.hero,p.xp]);},
  async history(id){return (await query('SELECT m.* FROM matches m WHERE EXISTS(SELECT 1 FROM match_players p WHERE p.match_id=m.id AND p.account_id=$1) ORDER BY m.ended_at DESC,m.id DESC LIMIT 20',[id])).rows;},
  async record(r){const id=randomUUID(),statements=[['INSERT INTO matches(id,room,result,wave,kills,players,stage,difficulty) VALUES($1,$2,$3,$4,$5,$6,$7,$8)',[id,r.code,r.phase,r.wave,r.kills,r.peak,r.stage,r.difficulty]]];for(const p of r.players){statements.push(['INSERT INTO match_players(match_id,player_id,name,hero,gold,kills,level,account_id) VALUES($1,$2,$3,$4,$5,$6,$7,$8)',[id,p.id,p.name,p.hero,p.earned,p.kills,p.level,p.accountId||null]]);if(p.accountId)statements.push([profileSQL,[p.accountId,p.hero,p.xp]]);}await batch(statements);},
  async close(){if(pool)await pool.end();else sqlite.close();}
 };
}
