const {chromium}=require('C:/Users/Admin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs=require('node:fs');
(async()=>{
  const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
  try{const page=await browser.newPage({viewport:{width:256,height:256},deviceScaleFactor:1});
    const svg=fs.readFileSync('desktop/brand.svg','utf8');await page.setContent('<style>body{margin:0;background:transparent}svg{width:256px;height:256px;display:block}</style>'+svg);
    const png=await page.screenshot({omitBackground:true,path:'desktop/brand.png'});
    const header=Buffer.alloc(22);header.writeUInt16LE(1,2);header.writeUInt16LE(1,4);header[6]=0;header[7]=0;header.writeUInt16LE(1,10);header.writeUInt16LE(32,12);header.writeUInt32LE(png.length,14);header.writeUInt32LE(22,18);
    fs.writeFileSync('desktop/brand.ico',Buffer.concat([header,png]));console.log('Rendered existing brand SVG to PNG/ICO.');
  }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1);});
