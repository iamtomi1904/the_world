import {readFileSync,writeFileSync} from 'node:fs';
const file=new URL('../public/catalog-v4.json',import.meta.url),catalog=JSON.parse(readFileSync(file,'utf8').replace(/^\uFEFF/,''));
catalog.bossCasts=JSON.parse(readFileSync(new URL('../public/assets/v7/boss-casts.json',import.meta.url),'utf8'));
writeFileSync(file,JSON.stringify(catalog,null,2));console.log('Registered six boss casting sheets, eight poses each.');
