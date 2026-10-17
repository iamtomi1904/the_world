import {randomUUID} from 'node:crypto';
import {FOREST_RELICS,itemById} from './public/items.js';
export function dropForestLoot(r,e,owner){
 if(!e.neutral)return null;const hash=[...e.id].reduce((n,c)=>(n*31+c.charCodeAt(0))>>>0,0);
 if(e.animal&&hash%4!==0)return null;
 const drop={id:randomUUID(),item:FOREST_RELICS[hash%5].id,x:e.x,y:e.y,owner:owner.id,locked:8,time:150};r.loot||=[];r.loot.push(drop);return drop;
}
export function useConsumable(){return 'Di vật rừng tự tăng thuộc tính khi nhặt, không cần sử dụng.';}
export function tickLoot(r,dt,stats){
 for(const p of r.players){if(p.hp<=0||!['battle','prepare','clear'].includes(r.phase))continue;const regen=stats(p).healthRegen||0;if(regen>0)p.hp=Math.min(stats(p).hp,p.hp+regen*dt);}
 r.loot=(r.loot||[]).filter(drop=>{
  drop.time-=dt;drop.locked-=dt;if(drop.time<=0)return false;
  const p=r.players.find(p=>p.hp>0&&(drop.locked<=0||p.id===drop.owner)&&Math.hypot(p.x-drop.x,p.y-drop.y)<48);
  if(!p)return true;const item=itemById(drop.item);if(!item)return false;p.forestStats||={};p.forestStats[item.stat]=(p.forestStats[item.stat]||0)+item.gain;p.forestRelics||={};p.forestRelics[item.id]=(p.forestRelics[item.id]||0)+1;
  r.events.push({id:randomUUID(),type:'relic-pickup',targetId:p.id,item:item.id,x:p.x,y:p.y-20,text:item.label,color:item.color});return false;
 });
}
