const {chromium}=require('C:/Users/Admin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const {Pool}=require('pg'),fs=require('fs'),crypto=require('crypto');
(async()=>{
  process.loadEnvFile('.env');const pool=new Pool({connectionString:process.env.DATABASE_URL});
  const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
  const context=await browser.newContext({viewport:{width:1280,height:900}}),base='http://127.0.0.1:3000',headers={Origin:base},errors=[],checks={};let account;
  try{
    let response=await context.request.post(base+'/api/auth/register',{headers,data:{username:'qa_tiles_'+crypto.randomBytes(5).toString('hex'),password:crypto.randomBytes(16).toString('hex'),displayName:'QA Map'}});
    if(!response.ok())throw Error('Register '+response.status());account=(await response.json()).user.id;
    await context.request.post(base+'/api/mmorpg/character',{headers,data:{race:'human'}});
    await pool.query('UPDATE mmorpg_characters SET position_x=$1,position_y=$2 WHERE account_id=$3',[2070,1170,account]);
    const page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));
    await page.goto(base+'/mmorpg/index.html');await page.waitForFunction(()=>window.mmorpgDebug?.ready);await page.waitForTimeout(400);
    Object.assign(checks,await page.evaluate(()=>{
      const d=mmorpgDebug,s=d.scene,m=d.model;
      return{typeScriptBuild:d.technology.includes('TypeScript'),noConceptExterior:!s.textures.exists('world'),groundGrid:m.scene.grid.data.length===120000,separateObjects:m.scene.objects.length===1984,realTilemap:s.children.list.some(o=>o.type==='TilemapLayer'),footDepth:Math.abs(s.actor.depth-m.player.y-.1)<.01,bridgeWalkable:m.canStand(2070,1170),deepWaterBlocked:!m.canStand(2100,1500)};
    }));
    await page.screenshot({path:'public/mmorpg/assets/modular-bridge-review.png'});
    // Exercise scene disposal/recreation through actual gameplay interaction, not a renderer mock.
    // End the old page and revoke its control lease before moving the QA fixture.
    // Otherwise its in-flight idle save could overwrite the fixture position.
    await page.goto('about:blank');
    await context.request.post(base+'/api/mmorpg/control',{headers,data:{}});
    await pool.query('UPDATE mmorpg_characters SET position_x=$1,position_y=$2 WHERE account_id=$3',[2490,525,account]);
    await page.goto(base+'/mmorpg/index.html');await page.waitForFunction(()=>window.mmorpgDebug?.ready);
    const before=await page.evaluate(()=>mmorpgDebug.scene.children.length);
    // Hold an input response to reproduce a real user interaction during movement I/O.
    await page.route('**/api/mmorpg/input',async route=>{const response=await route.fetch();await new Promise(resolve=>setTimeout(resolve,250));await route.fulfill({response});});
    await page.locator('#game').focus();
    const movingRequest=page.waitForRequest('**/api/mmorpg/input');
    await page.evaluate(()=>{void mmorpgDebug.scene.control('input',{dx:0,dy:0});});
    await movingRequest;await page.keyboard.press('f');
    await page.waitForFunction(()=>mmorpgDebug.model.id==='DG');checks.enterViaKeyboard=true;
    await page.unroute('**/api/mmorpg/input');
    await page.keyboard.down('a');await page.waitForTimeout(650);await page.keyboard.up('a');await page.waitForTimeout(180);await page.keyboard.press('f');
    await page.waitForFunction(()=>mmorpgDebug.model.id==='world');checks.returnViaKeyboard=true;
    const after=await page.evaluate(()=>mmorpgDebug.scene.children.length);checks.noSceneNodeGrowth=after===before;
    await page.locator('#debug').check();await page.waitForTimeout(100);checks.debugDraw=await page.evaluate(()=>mmorpgDebug.scene.debugGraphics.commandBuffer.length>0);
    await page.close();const result={checks,errors,scope:'Modular exterior and actual F enter/return; temporary PostgreSQL account removed'};
    fs.writeFileSync('public/mmorpg/assets/modular-qa.json',JSON.stringify(result,null,2));console.log(JSON.stringify(result));
    if(errors.length||Object.values(checks).some(v=>!v))process.exitCode=1;
  }finally{await context.close();await browser.close();if(account)await pool.query('DELETE FROM accounts WHERE id=$1',[account]);await pool.end();}
})().catch(e=>{console.error(e);process.exit(1);});

