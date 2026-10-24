import {readFileSync,writeFileSync} from 'node:fs';
const file='public/mmorpg/maps/binh-minh.tmj',map=JSON.parse(readFileSync(file,'utf8'));
Object.assign(map.tilesets[0],{tilewidth:15,tileheight:15,imagewidth:90,imageheight:15});
writeFileSync(file,JSON.stringify(map,null,2)+'\n');
const path='public/mmorpg/assets/ground-atlas.svg';let svg=readFileSync(path,'utf8');
svg=svg.replace('width="150" height="30"','width="90" height="15" viewBox="0 0 180 30"');
if(!svg.includes('M150 0h30'))svg=svg.replace('</svg>','<path fill="#344f35" d="M150 0h30v30h-30z"/></svg>');
writeFileSync(path,svg);
for(const name of ['vegetation-r002.png','meadow-ground-r002.png']){const b=readFileSync('public/mmorpg/assets/'+name);console.log(name,b.readUInt32BE(16),b.readUInt32BE(20));}
