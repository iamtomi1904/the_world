import {readFileSync,writeFileSync} from 'node:fs';
const root=new URL('../public/',import.meta.url),file=new URL('catalog-v4.json',root),catalog=JSON.parse(readFileSync(file,'utf8').replace(/^\uFEFF/,'')),metrics=JSON.parse(readFileSync(new URL('assets/v5/metrics.json',root),'utf8'));
catalog.actors=catalog.actors.filter(a=>!Object.hasOwn(metrics,a.id));
for(const [id,m]of Object.entries(metrics)){
 if(m.width%4||m.height%3||m.alpha!=='RGBA')throw Error('Invalid sprite grid '+id);
 catalog.actors.push({id,group:'monster',packed:true,sheetRows:3,sheetColumns:4,frame:m.width/4,frameHeight:m.height/3,bodyHeight:m.bodyHeight,originX:.5,originY:m.originY,actions:Object.fromEntries(['idle','walk','attack'].map((action,row)=>[action,{url:'/assets/v5/'+id+'.png',frames:4,start:row*4}]))});
}
writeFileSync(file,JSON.stringify(catalog,null,2));console.log('Registered',Object.keys(metrics).length,'new animated monster/boss sheets.');
