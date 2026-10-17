import {readFileSync,writeFileSync} from 'node:fs';
const url=new URL('../public/catalog-v4.json',import.meta.url),catalog=JSON.parse(readFileSync(url,'utf8').replace(/^\uFEFF/,''));
catalog.empoweredActors=['warrior-1','warrior-2','warrior-3'].map(hero=>{
 const original=catalog.actors.find(a=>a.id===hero),data=readFileSync(new URL('../public/assets/empowered/'+hero+'-fury.png',import.meta.url)),width=data.readUInt32BE(16),height=data.readUInt32BE(20);
 return {hero,url:'/assets/empowered/'+hero+'-fury.png',width,height,columns:6,rows:3,originX:original.originX,originY:original.originY,bodyHeight:original.bodyHeight/96*(height/3),actions:Object.fromEntries(['idle','walk','attack'].map((action,row)=>[action,{start:row*6,frames:original.actions[action].frames}]))};
});
writeFileSync(url,JSON.stringify(catalog,null,2));console.log('Registered 3 empowered character sheets.');
