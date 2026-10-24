const{chromium}=require('C:/Users/Admin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');const fs=require('node:fs');
(async()=>{const checks={},errors=[],base='http://127.0.0.1:3000',manifest=JSON.parse(fs.readFileSync('release/latest-client.json'));
  const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
  try{const page=await browser.newPage({viewport:{width:1100,height:900}});page.on('pageerror',e=>errors.push(e.message));
    await page.goto(base+'/client.html');await page.waitForSelector('#download[href]');checks.downloadButton=await page.locator('#download').textContent().then(v=>v.includes('0.2.0'));
    const info=await(await fetch(base+'/api/client-release')).json();checks.manifest=info.version===manifest.version&&info.sha256===manifest.sha256&&info.bytes===manifest.bytes;
    const response=await fetch(base+info.download);checks.zipHeaders=response.status===200&&response.headers.get('content-type')==='application/zip'&&response.headers.get('content-disposition').includes(manifest.archive);
    const reader=response.body.getReader();const first=await reader.read();checks.zipBytes=first.value[0]===80&&first.value[1]===75;await reader.cancel();
    await page.screenshot({path:'public/mmorpg/assets/client-download-review.png'});
    await page.setViewportSize({width:390,height:844});checks.mobile=await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth);
    const result={checks,errors,scope:'Download page and streaming ZIP headers/first bytes; archive listing checked separately'};fs.writeFileSync('public/mmorpg/assets/client-download-qa.json',JSON.stringify(result,null,2));console.log(JSON.stringify(result));
    if(errors.length||Object.values(checks).some(v=>!v))process.exitCode=1;
  }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1);});
