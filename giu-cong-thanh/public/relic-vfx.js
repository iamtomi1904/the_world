import {itemById} from './items.js';
export function relicIcon(g,id,x,y,size=12,alpha=1){
 const item=itemById(id);if(!item)return;const c=item.color,s=size;
 g.lineStyle(2,c,alpha).fillStyle(c,alpha);
 if(id==='power'){g.lineBetween(x-s*.5,y+s*.5,x+s*.5,y-s*.5).lineBetween(x-s*.6,y+s*.1,x-s*.1,y+s*.6);g.fillTriangle(x+s*.7,y-s*.7,x+s*.05,y-s*.3,x+s*.3,y-s*.05);}
 else if(id==='health'){g.fillCircle(x-s*.25,y-s*.15,s*.3).fillCircle(x+s*.25,y-s*.15,s*.3).fillTriangle(x-s*.53,y,x+s*.53,y,x,y+s*.65);}
 else if(id==='mana'){g.fillTriangle(x,y-s*.8,x-s*.4,y+s*.15,x+s*.4,y+s*.15).fillCircle(x,y+s*.13,s*.4);}
 else if(id==='armor'){g.beginPath().moveTo(x-s*.5,y-s*.6).lineTo(x+s*.5,y-s*.6).lineTo(x+s*.4,y+s*.2).lineTo(x,y+s*.7).lineTo(x-s*.4,y+s*.2).closePath().strokePath();}
 else {for(let i=0;i<3;i++)g.lineBetween(x-s*.6+i*s*.4,y+s*.4,x-s*.2+i*s*.4,y-s*.4);}
}
export function drawRelicPickup(g,e,t){
 // A square seal and rising attribute icon, deliberately unlike hero combat auras.
 const x=e.x,y=e.y-12-t*55,a=1-t,c=e.color;
 g.lineStyle(1,c,a*.8).strokeRect(x-17,y-17,34,34);relicIcon(g,e.item,x,y,17,a);
 for(let i=0;i<7;i++){const px=x+(i-3)*9,py=e.y-10-t*(28+i*8);g.fillStyle(c,a*.65).fillRect(px,py,2,2);}
}
