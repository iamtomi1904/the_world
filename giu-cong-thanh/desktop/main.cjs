const {app,BrowserWindow,ipcMain,protocol,net,Menu}=require('electron');
const {readFileSync,writeFileSync,mkdirSync,renameSync}=require('node:fs');
const path=require('node:path');const {pathToFileURL}=require('node:url');
const config=require('./client-config.json');const {normalizeServer}=require('./connection-policy.cjs');
const launcherURL='anthanh-client://launcher/connection.html',entry='/mmorpg/index.html';
let win,origin=null,desiredOrigin=config.serverOrigin,lastError='',connecting=false,abort;
const profile=app.commandLine.getSwitchValue('user-data-dir');
if(profile)app.setPath('userData',path.resolve(profile));
protocol.registerSchemesAsPrivileged([{scheme:'anthanh-client',privileges:{standard:true,secure:true,supportFetchAPI:true}}]);
function settingsPath(){return path.join(app.getPath('userData'),'server-settings.json');}
function readSettings(){try{desiredOrigin=normalizeServer(JSON.parse(readFileSync(settingsPath(),'utf8')).serverOrigin);}catch{}
  if(process.env.ANTHANH_SERVER_URL)desiredOrigin=process.env.ANTHANH_SERVER_URL;
}
function saveSettings(value){mkdirSync(app.getPath('userData'),{recursive:true});const file=settingsPath();writeFileSync(file+'.tmp',JSON.stringify({serverOrigin:value},null,2));renameSync(file+'.tmp',file);}
function validateSender(event){if(!win||event.sender!==win.webContents||event.senderFrame!==win.webContents.mainFrame||event.senderFrame.url!==launcherURL)throw Error('Không được phép gọi chức năng client.');}
async function launcher(){if(!win||win.isDestroyed())return;if(win.webContents.getURL()!==launcherURL)await win.loadURL(launcherURL);}
async function connect(value){
  if(connecting)return{ok:false,message:'Đang kết nối máy chủ…'};
  connecting=true;
  try{
    const target=normalizeServer(value);desiredOrigin=target;abort=new AbortController();
    const timeout=setTimeout(()=>abort.abort(),8000);let response;
    try{response=await net.fetch(target+'/api/client-info',{signal:abort.signal,redirect:'error',credentials:'omit'});}finally{clearTimeout(timeout);}
    if(!response.ok)throw Error('Không nhận được thông tin máy chủ.');
    const info=await response.json();
    if(info.app!=='an-thanh'||info.protocol!==1)throw Error('Địa chỉ này không phải máy chủ Ẩn Thành tương thích.');
    if(info.database!=='postgresql')throw Error('Máy chủ MMORPG chưa kết nối PostgreSQL.');
    origin=target;lastError='';
    try{saveSettings(target);}catch{ /* A read-only profile must not prevent playing. */ }
    await win.loadURL(target+entry);return{ok:true};
  }catch(error){
    lastError=error.message.includes('ERR_')||error.name==='AbortError'?'Chưa kết nối được máy chủ. Kiểm tra server và thử lại.':error.message;
    await launcher();win.webContents.send('client:status',lastError);return{ok:false,message:lastError};
  }finally{connecting=false;abort=null;}
}
if(!app.requestSingleInstanceLock())app.quit();else{
  app.setAppUserModelId('com.anthanh.mmorpg');
  app.on('second-instance',()=>{if(win){if(win.isMinimized())win.restore();win.focus();}});
  app.whenReady().then(async()=>{
    readSettings();
    const localFiles=new Set(['connection.html','connection.css','connection.js','brand.svg']);
    protocol.handle('anthanh-client',request=>{
      const u=new URL(request.url),name=u.pathname.slice(1);
      if(u.hostname!=='launcher'||!localFiles.has(name))return new Response('Not found',{status:404});
      return net.fetch(pathToFileURL(path.join(__dirname,name)).href);
    });
    ipcMain.handle('client:settings',event=>{validateSender(event);return{serverOrigin:desiredOrigin,version:app.getVersion(),error:lastError};});
    ipcMain.handle('client:connect',(event,value)=>{validateSender(event);return connect(value);});
    win=new BrowserWindow({width:1440,height:960,minWidth:800,minHeight:600,title:'Ẩn Thành',
      icon:path.join(__dirname,'brand.ico'),show:process.env.ANTHANH_CLIENT_SMOKE!=='1',autoHideMenuBar:true,backgroundColor:'#e8ecdf',
      webPreferences:{preload:path.join(__dirname,'preload.cjs'),nodeIntegration:false,contextIsolation:true,sandbox:true,webSecurity:true}});
    win.webContents.setWindowOpenHandler(()=>({action:'deny'}));
    win.webContents.on('will-navigate',(event,target)=>{try{if(!origin||new URL(target).origin!==origin)event.preventDefault();}catch{event.preventDefault();}});
    win.webContents.on('will-redirect',(event,target)=>{try{if(!origin||new URL(target).origin!==origin)event.preventDefault();}catch{event.preventDefault();}});
    win.webContents.session.setPermissionRequestHandler((_contents,_permission,callback)=>callback(false));
    win.webContents.on('will-attach-webview',event=>event.preventDefault());
    Menu.setApplicationMenu(Menu.buildFromTemplate([{label:'Ẩn Thành',submenu:[
      {id:'server-settings',label:'Máy chủ / Kết nối',accelerator:'F8',click:()=>{abort?.abort();void launcher();}},
      {id:'fullscreen',label:'Toàn màn hình',accelerator:'F11',click:()=>win.setFullScreen(!win.isFullScreen())},
      {type:'separator'},{role:'quit',label:'Thoát game'}
    ]}]));
    win.webContents.on('did-fail-load',(_event,code,_description,_url,isMainFrame)=>{
      if(isMainFrame&&code!==-3&&!connecting){lastError='Mất kết nối máy chủ. Bạn có thể kết nối lại bên dưới.';void launcher();}
    });
    win.webContents.on('render-process-gone',()=>{lastError='Cửa sổ game đã dừng. Hãy kết nối lại.';void launcher();});
    await launcher();await connect(desiredOrigin);
  });
  app.on('window-all-closed',()=>app.quit());
}
