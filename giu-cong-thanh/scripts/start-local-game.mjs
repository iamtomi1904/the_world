import {existsSync} from 'node:fs';
import {resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {localSettings,startLocal} from './postgres-local.mjs';
const root=fileURLToPath(new URL('../',import.meta.url));if(existsSync(resolve(root,'.env')))process.loadEnvFile(resolve(root,'.env'));
if(existsSync(resolve(root,'.local','postgres-local.json'))&&process.env.DATABASE_URL===localSettings().appUrl)await startLocal();
await import('../server.mjs');
