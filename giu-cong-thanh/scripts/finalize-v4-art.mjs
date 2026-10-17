import {readFileSync,writeFileSync,existsSync} from 'node:fs';
const path=new URL('../public/catalog-v4.json',import.meta.url);
const catalog=JSON.parse(readFileSync(path,'utf8').replace(/^\uFEFF/,''));
catalog.spellArt=['fireburst','flamefield','meteor','frostnova','healing-tide','blizzard','fury','shield-bash','bulwark','rally','cleave','earthquake','multishot','venom','arrow-rain','chain-lightning','thunderstrike','tempest','boss-treant','boss-golem','boss-dragon'].filter(id=>existsSync(new URL('../public/assets/v4/'+id+'.png',import.meta.url))).map(id=>({id,url:'/assets/v4/'+id+'.png'}));
writeFileSync(path,JSON.stringify(catalog,null,2));
console.log('Spell art:',catalog.spellArt.length);
