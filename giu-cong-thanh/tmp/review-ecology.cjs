const {chromium}=require('C:/Users/Admin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const {Pool}=require('pg'),fs=require('node:fs'),crypto=require('node:crypto');
(async()=>{
  process.loadEnvFile('.env');const pool=new Pool({connectionString:process.env.DATABASE_URL});
  const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
  const context=await browser.newContext({viewport:{width:1440,height:1080}}),base='http://127.0.0.1:3000',headers={Origin:base},errors=[],checks={};let account;
  try{
    const response=await context.request.post(base+'/api/auth/register',{headers,data:{username:'qa_ecology_'+crypto.randomBytes(5).toString('hex'),password:crypto.randomBytes(16).toString('hex'),displayName:'QA Bình Minh'}});
    if(!response.ok())throw Error('Register '+response.status());account=(await response.json()).user.id;
    await context.request.post(base+'/api/mmorpg/character',{headers,data:{race:'human'}});
    const page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));
    await page.goto(base+'/mmorpg/index.html');await page.waitForFunction(()=>window.mmorpgDebug?.ready);await page.waitForTimeout(400);
    const joints=await page.evaluate(()=>{
      const s=mmorpgDebug.scene,rows=[];const sockets=s.cache.json.get('tree-sockets');
      const alpha=(image,point)=>{const c=document.createElement('canvas');c.width=image.width;c.height=image.height;c.getContext('2d').drawImage(image,0,0);return c.getContext('2d').getImageData(Math.round(point.x*c.width),Math.round(point.y*c.height),1,1).data[3];};
      for(const kind of ['oak','birch','willow','orchard']){
        const trunk=s.children.list.find(o=>o.texture?.key===kind+'-trunk'&&o.getData('treePart')==='trunk');
        const crown=s.children.list.find(o=>o.getData?.('treePart')==='crown'&&o.getData('treeId')===trunk.getData('treeId'));
        const t=sockets[kind].trunk,c=sockets[kind].crown;
        const x=trunk.x+(t.x-.5)*trunk.displayWidth*(trunk.flipX?-1:1),y=trunk.y-(1-t.y)*trunk.displayHeight;
        rows.push({kind,distance:Math.hypot(x-crown.x,y-crown.y),trunkAlpha:alpha(trunk.texture.getSourceImage(),t),crownAlpha:alpha(crown.texture.getSourceImage(),c)});
      }
      return rows;
    });
    checks.solidJointsAllSpecies=joints.length===4&&joints.every(j=>j.distance<.001&&j.trunkAlpha===255&&j.crownAlpha===255);
    Object.assign(checks,await page.evaluate(()=>{const m=mmorpgDebug.model;return{expandedArea:m.scene.size[0]*m.scene.scale===6000&&m.scene.size[1]*m.scene.scale===4500,legacySpawn:m.config.scenes.world.spawn.join(',')==='350,405',sixPlantTextures:Array.from({length:6},(_,i)=>mmorpgDebug.scene.textures.exists('flora-'+i)).every(Boolean),cameraNotZoomCheat:mmorpgDebug.scene.cameras.main.zoom===1,floraClusters:m.scene.objects.filter(o=>o.kind==='flora').length>1500};}));
    await page.screenshot({path:'public/mmorpg/assets/ecology-camp-r003.png'});
    await page.evaluate(()=>{const s=mmorpgDebug.scene,t=s.model.scene.objects.find(o=>o.kind==='willow'&&o.y>500&&o.y<700);s.cameras.main.stopFollow();s.cameras.main.centerOn(t.x*3,t.y*3-90);});
    await page.waitForTimeout(200);await page.screenshot({path:'public/mmorpg/assets/ecology-river-r003.png'});
    await page.evaluate(()=>{const s=mmorpgDebug.scene;s.cameras.main.stopFollow();s.cameras.main.setZoom(.18);s.cameras.main.centerOn(3000,2250);s.hud.setVisible(false);s.mini.setVisible(false);s.miniDot.setVisible(false);});
    await page.waitForTimeout(300);await page.screenshot({path:'public/mmorpg/assets/ecology-overview-r003.png'});
    const result={checks,joints,errors,scope:'Actual Phaser scene; temporary PostgreSQL account removed. Full-map overview uses inspection zoom only.'};fs.writeFileSync('public/mmorpg/assets/ecology-qa.json',JSON.stringify(result,null,2));console.log(JSON.stringify(result));
    if(errors.length||Object.values(checks).some(v=>!v))process.exitCode=1;
  }finally{await context.close();await browser.close();if(account)await pool.query('DELETE FROM accounts WHERE id=$1',[account]);await pool.end();}
})().catch(e=>{console.error(e);process.exit(1);});
