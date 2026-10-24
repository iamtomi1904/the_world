const fs=require('fs'),p='mmorpg-service.mjs';let s=fs.readFileSync(p,'utf8');const a=s.indexOf('export async function migrateMMO('),b=s.indexOf('export function createMMOService',a);
s=s.slice(0,a)+`export async function migrateMMO(store,root){
 if(store.backend!=='postgresql')return;
 await store.transaction(async client=>{
  await client.query("SELECT pg_advisory_xact_lock(hashtext('an-thanh-mmorpg-migrations'))");
  await client.query('CREATE TABLE IF NOT EXISTS mmorpg_schema_migrations(version INTEGER PRIMARY KEY, checksum TEXT NOT NULL, applied_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP)');
  for(const [version,file]of [[1,'001_mmorpg_characters.sql'],[2,'002_mmorpg_map_layout.sql']]){
   const sql=readFileSync(resolve(root,'migrations',file),'utf8'),checksum=hash(sql),row=(await client.query('SELECT checksum FROM mmorpg_schema_migrations WHERE version=$1',[version])).rows[0];
   if(row){if(row.checksum!==checksum)throw Error('MMORPG migration checksum changed: '+version);continue;}
   await client.query(sql);await client.query('INSERT INTO mmorpg_schema_migrations(version,checksum) VALUES($1,$2)',[version,checksum]);
  }
 });
}
`+s.slice(b);
const needle='const model=new MapTraversal(config);if(!model.place(row.map_id,';
s=s.replace(needle,`const model=new MapTraversal(config);
const remap=(point)=>{if(row.map_layout>=config.version||config.version<6)return point;const nearest=config.legacyRemap.map(([from,to])=>({to,d:Math.hypot(point[0]-from[0],point[1]-from[1])})).sort((a,b)=>a.d-b.d)[0];return nearest&&nearest.d<800?nearest.to:point;};
if(row.map_id==='world'){const point=remap([row.position_x,row.position_y]);row.position_x=point[0];row.position_y=point[1];}
if(row.return_x!==null){const point=remap([row.return_x*config.scenes.world.scale,row.return_y*config.scenes.world.scale]);row.return_x=point[0]/config.scenes.world.scale;row.return_y=point[1]/config.scenes.world.scale;}
if(!model.place(row.map_id,`);
s=s.replace('control_hash=$1, map_id=$2','control_hash=$1, map_layout=$8, map_id=$2').replace('model.returnPoint?.[1]??null,row.id]','model.returnPoint?.[1]??null,row.id,config.version]');
s=s.replace('INSERT INTO mmorpg_characters(id,account_id,name,race,position_x,position_y) VALUES($1,$2,$3,$4,$5,$6)','INSERT INTO mmorpg_characters(id,account_id,name,race,position_x,position_y,map_layout) VALUES($1,$2,$3,$4,$5,$6,$7)').replace('body.race,model.player.x,model.player.y]','body.race,model.player.x,model.player.y,config.version]');
fs.writeFileSync(p,s);
