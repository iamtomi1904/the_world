import {CONSUMABLES,itemById} from './items.js';
import {relicIcon} from './relic-vfx.js';
export function buildInventory(send){
 const bar=document.getElementById('consumables');if(!bar)return;
 for(const item of CONSUMABLES){const b=document.createElement('div');b.dataset.item=item.id;b.className='consumable-slot relic-slot';b.style.setProperty('--item-color','#'+item.color.toString(16));b.title=item.text;b.innerHTML='<span class="relic-diamond"></span><span>'+item.name+'</span><b>0</b>';bar.append(b);}
}
export function updateInventory(p,phase){
 for(const b of document.querySelectorAll('[data-item]')){const item=itemById(b.dataset.item),count=p.forestRelics?.[item.id]||0,total=p.forestStats?.[item.stat]||0;b.querySelector('b').textContent='+'+(item.id==='haste'?(total*100).toFixed(1)+'%':Number(total.toFixed(1)))+' · '+count+' nhặt';}
 const el=document.getElementById('active-items');if(el)el.textContent='Nhặt là nhận chỉ số · Giữ qua map · Kết thúc khi hết chiến dịch';
}
export function drawLoot(s,drops,time){
 s.lootGraphics||=s.add.graphics().setDepth(1300);const g=s.lootGraphics;g.clear();
 for(const drop of drops||[]){const item=itemById(drop.item);if(!item)continue;const x=drop.x,y=drop.y-9+Math.sin(time/230)*2;g.fillStyle(0x11251b,.35).fillEllipse(x,drop.y+6,22,9);g.lineStyle(1,item.color,.28).lineBetween(x,y-33,x,y+4);g.fillStyle(0x13271f,.95).fillRect(x-12,y-12,24,24).lineStyle(1,item.color,.8).strokeRect(x-12,y-12,24,24);relicIcon(g,item.id,x,y,13);}
}
