const {_electron}=require('C:/Users/Admin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const {Pool}=require('pg'),fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto'),http=require('node:http');
(async()=>{
  process.loadEnvFile('.env');const pool=new Pool({connectionString:process.env.DATABASE_URL});
  const manifest=JSON.parse(fs.readFileSync('release/latest-client.json'));
  const profile=path.resolve('.local/qa-client-'+crypto.randomBytes(5).toString('hex'));
  const env={...process.env,ANTHANH_CLIENT_SMOKE:'1',ANTHANH_SERVER_URL:'http://127.0.0.1:59991'};delete env.ELECTRON_RUN_AS_NODE;
  const app=await _electron.launch({executablePath:path.resolve('release',manifest.executable),args:['--user-data-dir='+profile],env,timeout:30000});
  const checks={},errors=[];let account,other;
  try{
    const page=await app.firstWindow();page.on('pageerror',e=>errors.push(e.message));
    await app.evaluate(({BrowserWindow})=>{const w=BrowserWindow.getAllWindows()[0];w.webContents.setBackgroundThrottling(false);w.showInactive();});
    await page.waitForURL('anthanh-client://launcher/connection.html');await page.waitForFunction(()=>typeof window.anThanhClient?.settings==='function');
    await page.waitForFunction(()=>document.querySelector('#status').textContent.includes('Chưa kết nối'));
    checks.offlineScreen=true;checks.isolatedProfile=(await app.evaluate(({app})=>app.getPath('userData'))).toLowerCase()===profile.toLowerCase();
    checks.localBridge=await page.evaluate(()=>typeof anThanhClient.connect==='function'&&typeof window.require==='undefined');
    checks.version=await app.evaluate(({app})=>app.getVersion()==='0.2.0'&&app.isPackaged);
    const launcherCapture=await app.evaluate(async({BrowserWindow})=>(await BrowserWindow.getAllWindows()[0].webContents.capturePage(undefined,{stayHidden:true,stayAwake:true})).toPNG().toString('base64'));
    fs.writeFileSync('public/mmorpg/assets/pc-v02-launcher-review.png',Buffer.from(launcherCapture,'base64'));
    await page.fill('#server','http://not-local.example');await page.click('#connect');
    await page.waitForFunction(()=>document.querySelector('#status').textContent.includes('HTTPS'));checks.rejectRemoteHTTP=true;
    other=http.createServer((_req,res)=>{res.setHeader('Content-Type','application/json');res.end(JSON.stringify({app:'other',protocol:1,database:'postgresql'}));});
    await new Promise(resolve=>other.listen(0,'127.0.0.1',resolve));
    await page.fill('#server','http://127.0.0.1:'+other.address().port);await page.click('#connect');
    await page.waitForFunction(()=>document.querySelector('#status').textContent.includes('không phải máy chủ'));checks.rejectWrongServer=true;
    const base='http://127.0.0.1:3000',headers={Origin:base};
    await page.fill('#server',base);await page.click('#connect');await page.waitForURL(/login\.html/);checks.retryConnect=true;
    checks.noBridgeOnLogin=await page.evaluate(()=>typeof window.anThanhClient==='undefined'&&typeof window.require==='undefined');
    const context=app.context();let response=await context.request.post(base+'/api/auth/register',{headers,data:{username:'qa_pc02_'+crypto.randomBytes(5).toString('hex'),password:crypto.randomBytes(16).toString('hex'),displayName:'QA Client'}});
    if(!response.ok())throw Error('Register '+response.status());account=(await response.json()).user.id;
    await page.goto(base+'/mmorpg/index.html');await page.waitForSelector('#character-dialog[open]');
    await page.selectOption('#character-race','human');await page.click('#character-form button');await page.waitForFunction(()=>window.mmorpgDebug?.ready);
    checks.gameStarts=true;checks.noBridgeOnGame=await page.evaluate(()=>typeof window.anThanhClient==='undefined'&&typeof window.require==='undefined'&&typeof window.process==='undefined');
    const before=await page.evaluate(()=>mmorpgDebug.model.player.x);await page.locator('#game').focus();await page.keyboard.down('d');await page.waitForTimeout(800);await page.keyboard.up('d');await page.waitForTimeout(250);
    const after=await page.evaluate(()=>mmorpgDebug.model.player.x);checks.movement=after>before+20;
    await page.reload();await page.waitForFunction(()=>window.mmorpgDebug?.ready);
    checks.persistedMovement=Math.abs(await page.evaluate(()=>mmorpgDebug.model.player.x)-after)<30;
    checks.modularMap=await page.evaluate(()=>!!mmorpgDebug.scene.world&&mmorpgDebug.model.scene.objects.length===3187);
    checks.sandbox=await app.evaluate(({BrowserWindow})=>{const p=BrowserWindow.getAllWindows()[0].webContents.getLastWebPreferences();return p.sandbox&&p.contextIsolation&&!p.nodeIntegration;});
    const gameURL=page.url();await page.evaluate(()=>window.location.assign('https://example.com'));await page.waitForTimeout(120);checks.blockExternalNavigation=page.url()===gameURL;
    await page.screenshot({path:'public/mmorpg/assets/pc-v02-game-review.png'});
    checks.f8Registered=await app.evaluate(({Menu})=>Menu.getApplicationMenu().getMenuItemById('server-settings').accelerator==='F8');
    await app.evaluate(({Menu})=>Menu.getApplicationMenu().getMenuItemById('server-settings').click());
    await page.waitForFunction(()=>location.protocol==='anthanh-client:'&&typeof window.anThanhClient?.settings==='function',{},{timeout:5000});checks.f8Settings=true;
    await page.waitForFunction(()=>document.querySelector('#server').value==='http://127.0.0.1:3000');
    checks.rememberServer=JSON.parse(fs.readFileSync(path.join(profile,'server-settings.json'))).serverOrigin===base;
    const result={checks,errors,scope:'Packaged Windows v0.2.0; offline/retry/security/game/PostgreSQL; isolated profile, temporary account removed'};
    fs.writeFileSync('public/mmorpg/assets/pc-v02-qa.json',JSON.stringify(result,null,2));console.log(JSON.stringify(result));
    if(errors.length||Object.values(checks).some(v=>!v))process.exitCode=1;
  }catch(error){console.log(JSON.stringify({checks,errors,window:await app.evaluate(({BrowserWindow})=>({url:BrowserWindow.getAllWindows()[0].webContents.getURL(),loading:BrowserWindow.getAllWindows()[0].webContents.isLoading(),keys:globalThis.__qaKeys}))}));throw error;}
  finally{await app.close();if(other)await new Promise(resolve=>other.close(resolve));if(account)await pool.query('DELETE FROM accounts WHERE id=$1',[account]);await pool.end();}
})().catch(e=>{console.error(e);process.exit(1);});

