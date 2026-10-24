const {contextBridge,ipcRenderer}=require('electron');
// No native bridge is exposed to remote game/login pages or to subframes.
if(process.isMainFrame&&location.protocol==='anthanh-client:'&&location.hostname==='launcher'&&location.pathname==='/connection.html'){
  contextBridge.exposeInMainWorld('anThanhClient',{
    settings:()=>ipcRenderer.invoke('client:settings'),
    connect:origin=>ipcRenderer.invoke('client:connect',origin),
    onStatus:callback=>ipcRenderer.on('client:status',(_event,value)=>{if(typeof value==='string')callback(value);})
  });
}
