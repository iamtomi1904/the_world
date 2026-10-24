import {packager} from '@electron/packager';
import {createRequire} from 'node:module';
import {fileURLToPath} from 'node:url';
import {resolve} from 'node:path';
import {relative,dirname,basename} from 'node:path';
import {writeFileSync,copyFileSync,mkdirSync} from 'node:fs';
import {createReadStream,statSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
const require=createRequire(import.meta.url),root=fileURLToPath(new URL('../',import.meta.url));
const version=require('electron/package.json').version;
const clientVersion=require('../desktop/package.json').version;
const release=resolve(root,'release'),out=resolve(release,'pc-'+clientVersion);
if(!out.startsWith(release+ (process.platform==='win32'?'\\':'/')))throw Error('Invalid release directory');
const paths=await packager({dir:resolve(root,'desktop'),out,name:'AnThanh',executableName:'AnThanh',platform:'win32',arch:'x64',electronVersion:version,appVersion:clientVersion,buildVersion:clientVersion,
  icon:resolve(root,'desktop/brand.ico'),win32metadata:{CompanyName:'An Thanh',FileDescription:'Ẩn Thành MMORPG',ProductName:'Ẩn Thành',InternalName:'AnThanh'},asar:true,overwrite:true,prune:true});
mkdirSync(release,{recursive:true});
for(const folder of paths){
  copyFileSync(resolve(root,'desktop/README_PC.txt'),resolve(folder,'HUONG-DAN.txt'));
  const archive='AnThanh-PC-'+clientVersion+'-win-x64.zip',archivePath=resolve(release,archive);
  console.log('Creating portable ZIP…');
  if(process.platform!=='win32')throw Error('The portable ZIP build currently requires Windows tar.exe.');
  await promisify(execFile)('tar.exe',['-a','-c','-f',archivePath,'-C',dirname(folder),basename(folder)],{windowsHide:true,maxBuffer:1024*1024});
  const hash=createHash('sha256');for await(const chunk of createReadStream(archivePath))hash.update(chunk);
  writeFileSync(resolve(release,'latest-client.json'),JSON.stringify({version:clientVersion,platform:'win32-x64',executable:relative(release,resolve(folder,'AnThanh.exe')).replaceAll('\\','/'),archive,bytes:statSync(archivePath).size,sha256:hash.digest('hex')},null,2)+'\n');
  console.log(folder);
}
