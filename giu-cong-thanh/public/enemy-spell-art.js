// Procedural spell artwork: rendered in world space, using the same geometry as server hits.
const TAU=Math.PI*2,clamp=v=>Math.max(0,Math.min(1,v));
export const ENEMY_SPELL_STYLES={
 'dragon-breath':'flame-stream',meteor:'falling-meteor','wing-gust':'pressure-waves','dragon-brood':'dragon-portals',inferno:'flame-pillars',
 'soul-bolt':'soul-lance','grave-bind':'grasping-bones','raise-dead':'graves','life-drain':'soul-siphon','bone-cage':'bone-cage',
 'poison-spit':'venom-glob','venom-trail':'venom-stream',constrict:'coiling-serpent','shed-skin':'shed-scales','venom-nova':'toxic-ring',
 pounce:'pounce-claws','wolf-howl':'howling-waves','frost-fang':'ice-fangs','claw-sweep':'triple-claws','wolf-frenzy':'blood-moon',
 'feather-fan':'feather-volley','wind-shear':'wind-blades','sky-dive':'diving-wings','storm-call':'feather-tornado','harpy-brood':'wind-portals',
 'ground-slam':'rock-crater','rock-line':'rising-spires','stone-armor':'orbiting-rocks','crystal-ring':'crystal-crown','earth-shatter':'fault-lines',
};
const palette={dragon:0xff8743,undead:0xb995ff,serpent:0xa4ef5b,wolf:0xa9e7ff,harpy:0xd0b9ff,stone:0x69d9ed};
export function drawBossBuff(g,u,x,y,time){
 const c=palette[u.family]||0xd3bbff;
 if(u.shield>0)for(let i=0;i<7;i++){const b=time/700+i/7*TAU,px=x+Math.cos(b)*45,py=y+Math.sin(b)*19-30;if(u.family==='stone')crystal(g,px,py,22,c,.8);else poly(g,[[px-5,py],[px,py-9],[px+5,py],[px,py+9]],c,.8);}
 if(u.frenzyTime>0){g.fillStyle(0xff7695,.5).fillCircle(x-12,y-48,3).fillCircle(x+12,y-48,3);for(let i=0;i<3;i++)claws(g,x,y-22-i*10,-Math.PI/2,28+i*6,.8,.25+Math.sin(time/140)*.15);}
}
export function drawMonsterProjectile(g,family,time,element){
 if(element==='lightning'){const pts=[];for(let i=0;i<8;i++)pts.push([-28+i*5,Math.sin(i*5+time*30)*6]);path(g,pts,0x9b89ff,.2,9);path(g,pts,0xe5d7ff,1,2);return;}
 if(element==='water'){crystal(g,0,7,23,0x92e7ff,1);path(g,[[-27,2],[-9,0]],0xc8f8ff,.6,3);return;}
 const c=palette[family]||0xd9b9ff;
 if(family==='dragon'){for(let i=0;i<5;i++)flame(g,-i*5,0,20-i*2,.8-i*.1);g.fillStyle(0xffedba).fillCircle(4,-4,5);}
 else if(family==='undead'){path(g,[[-28,Math.sin(time*14)*5],[-12,0],[0,0]],c,.35,9);skull(g,0,0,18,c,1);}
 else if(family==='serpent'){g.fillStyle(c,.17).fillEllipse(-5,0,35,22).fillStyle(c,.95).fillEllipse(0,0,17,11);for(let i=0;i<4;i++)g.lineStyle(1,c,.6-i*.1).strokeCircle(-10-i*5,Math.sin(i+time*8)*4,2);}
 else if(family==='harpy'){feather(g,0,0,0,30,c,1);feather(g,-12,-7,.2,17,0xffffff,.6);}
 else if(family==='stone'){crystal(g,0,8,20,0x91ada2,1);path(g,[[-28,0],[-12,0]],c,.45,3);}
 else {crystal(g,0,7,19,c,1);path(g,[[-25,0],[-9,0]],c,.5,3);}
}
export function drawMonsterHit(g,e,t){
 const c=palette[e.family]||e.color||0xcadbaa,a=1-t,x=e.tx??e.x,y=e.ty??e.y,r=e.radius||35;
 if(e.element==='lightning'){for(let i=0;i<6;i++){const b=i/6*TAU;path(g,[[x,y],[x+Math.cos(b)*15,y+Math.sin(b)*15-8],[x+Math.cos(b)*35*t,y+Math.sin(b)*35*t]],0xc7adff,a,2);}return;}
 if(e.element==='water'){for(let i=0;i<6;i++){const b=i/6*TAU;crystal(g,x+Math.cos(b)*t*25,y+Math.sin(b)*t*14,22*a,0xa4ecff,a);}return;}
 if(e.family==='wolf'){claws(g,x,y,-.6,25,Math.min(1,t*4),a);return;}
 if(e.family==='harpy'){for(let i=0;i<7;i++){const b=i/7*TAU;feather(g,x+Math.cos(b)*t*35,y+Math.sin(b)*t*20,b,18,c,a);}return;}
 if(e.family==='stone'){for(let i=0;i<5;i++)crystal(g,x+(i-2)*10,y+Math.sin(i)*8,Math.sin(Math.PI*t)*(15+i%2*12),c,a);return;}
 if(e.family==='dragon'){for(let i=0;i<6;i++)flame(g,x+Math.sin(i*7)*r*t,y+Math.cos(i*3)*r*t*.6,25*a,a);return;}
 if(e.family==='undead'){for(let i=0;i<4;i++)skull(g,x+Math.sin(i*4)*t*25,y-t*35+Math.cos(i)*10,9,c,a);return;}
 for(let i=0;i<10;i++){const b=i/10*TAU;g.fillStyle(c,a*.4).fillCircle(x+Math.cos(b)*t*30,y+Math.sin(b)*t*20-t*12,3+i%3);}
}
function path(g,points,color,alpha,width=2){g.lineStyle(width,color,alpha).beginPath();points.forEach(([x,y],i)=>i?g.lineTo(x,y):g.moveTo(x,y));g.strokePath();}
function poly(g,points,color,alpha=1){g.fillStyle(color,alpha).beginPath();points.forEach(([x,y],i)=>i?g.lineTo(x,y):g.moveTo(x,y));g.closePath();g.fillPath();}
function crystal(g,x,y,h,c,a){poly(g,[[x-9,y],[x-5,y-h*.75],[x,y-h],[x+8,y-h*.6],[x+9,y]],c,a);poly(g,[[x,y-h],[x+8,y-h*.6],[x+9,y],[x,y-5]],0xe7fbff,a*.65);path(g,[[x-9,y],[x,y-5],[x,y-h]],0xffffff,a*.7,1);}
function skull(g,x,y,size,c,a){g.fillStyle(c,a).fillEllipse(x,y,size*1.2,size).fillRect(x-size*.35,y,size*.7,size*.55);g.fillStyle(0x231c38,a).fillCircle(x-size*.23,y,size*.15).fillCircle(x+size*.23,y,size*.15);}
function feather(g,x,y,angle,len,c,a){const dx=Math.cos(angle),dy=Math.sin(angle),px=-dy,py=dx;poly(g,[[x-dx*len*.55,y-dy*len*.55],[x+px*5,y+py*5],[x+dx*len*.55,y+dy*len*.55],[x-px*3,y-py*3]],c,a);path(g,[[x-dx*len*.6,y-dy*len*.6],[x+dx*len*.45,y+dy*len*.45]],0xf6efff,a*.8,1);}
function flame(g,x,y,h,a){
 g.fillStyle(0xff6b35,a*.1).fillEllipse(x,y-h*.4,h*.85,h*1.3);
 const silhouette=(height,width,offset)=>{const left=[],right=[];for(let i=0;i<=16;i++){const k=i/16,center=Math.sin(k*7+x*.07)*height*.11*k+offset*k*k,w=width*Math.pow(1-k,.7)*(1+Math.sin(k*17+y*.04)*.17);left.push([x+center-w,y-k*height]);right.push([x+center+w,y-k*height]);}return [...left,...right.reverse()];};
 poly(g,silhouette(h,h*.27,h*.12),0xff6d2a,a);poly(g,silhouette(h*.8,h*.18,-h*.07),0xffb63e,a);poly(g,silhouette(h*.52,h*.1,h*.03),0xffedb0,a*.95);
}
function claws(g,x,y,angle,r,t,a){for(let k=-1;k<=1;k++){const start=angle-.9+k*.13,points=[];for(let j=0;j<=20;j++){const v=j/20,b=start+v*1.8*t;points.push([x+Math.cos(b)*(r+k*10),y+Math.sin(b)*(r+k*10)]);}path(g,points,0x83cde9,a*.18,11);path(g,points,0xe9fbff,a,3);}}
function circleRunes(g,x,y,r,c,a,time){g.lineStyle(1,c,a).strokeEllipse(x,y,r*2,r*.8);for(let i=0;i<8;i++){const angle=i/8*TAU+time,px=x+Math.cos(angle)*r,py=y+Math.sin(angle)*r*.4;path(g,[[px-3,py+3],[px,py-4],[px+3,py+3]],c,a,2);}}
export function drawSummonPortal(g,e,t){
 const c=palette[e.family]||e.color||0xb697ff,a=Math.sin(Math.PI*t),r=(e.boss?65:35)*Math.min(1,t*6),x=e.x,y=e.y;
 g.fillStyle(0x0c1021,a*.85).fillEllipse(x,y,r*2,r*.75);circleRunes(g,x,y,r,c,a,t*2);circleRunes(g,x,y,r*.76,c,a*.7,-t*3);
 const h=r*1.9,cy=y-h*.48;
 g.fillStyle(c,a*.055).fillEllipse(x,cy,r*1.65,h*1.2).fillStyle(0x0b1120,a*.9).fillEllipse(x,cy,r*.94,h);
 g.lineStyle(9,c,a*.12).strokeEllipse(x,cy,r,h).lineStyle(3,c,a*.85).strokeEllipse(x,cy,r,h).lineStyle(1,0xf3f1ff,a*.7).strokeEllipse(x,cy,r*.86,h*.92);
 for(let i=0;i<4;i++){const pts=[];for(let j=0;j<30;j++){const b=j/29*TAU+t*7+i,dist=(j/29)*r*.38;pts.push([x+Math.cos(b)*dist,cy+Math.sin(b)*dist*1.8]);}path(g,pts,c,a*.25,2);}
 for(let i=0;i<10;i++){const b=i/10*TAU,px=x+Math.cos(b)*r*.54,py=cy+Math.sin(b)*h*.53;g.fillStyle(c,a*.8).fillRect(px-2,py-2,4,4);}
 for(let i=0;i<12;i++){const angle=i/12*TAU+t*2,px=x+Math.cos(angle)*r*.85,py=y+Math.sin(angle)*r*.32-(t*85+i*9)%80;g.fillStyle(c,a*.7).fillRect(px,py,2,5);}
 if(e.family==='stone')for(let i=0;i<5;i++)crystal(g,x+(i-2)*14,y+Math.sin(i)*8,18*a,c,a);
 if(e.family==='dragon')for(let i=0;i<6;i++)flame(g,x+Math.cos(i)*r,y+Math.sin(i)*r*.3,25*a,a);
 if(e.family==='undead'){skull(g,x,y-25*a,19,c,a*.8);}
 if(e.family==='harpy')for(let i=0;i<5;i++)feather(g,x+Math.cos(i+t*4)*r,y-20*a+Math.sin(i)*12,-1,22,c,a);
 if(e.family==='serpent')for(let i=0;i<7;i++)g.lineStyle(1,c,a*.7).strokeCircle(x+Math.sin(i*3)*r*.7,y-(t*55+i*10)%50,3+i%3);
 if(e.family==='wolf')claws(g,x,y-18,-Math.PI/2,r*.6,.9,a);
}
export function drawEnemySpell(g,e,t,warning=false){
 const id=e.skill,c=palette[e.family]||e.color||0xeac189,a=Math.min(1,(1-t)*2.2)*(e.alpha??1),r=e.radius||100,x=e.x,y=e.y,angle=e.angle||0;
 const source={x:e.sourceX??x,y:e.sourceY??y},points=e.shape==='multi'?(e.points||[]):[{x,y}];
 if(warning){
  const charge=.3+t*.7;circleRunes(g,source.x,source.y-10,22+8*t,c,charge*.65,t*2);
  for(let i=0;i<7;i++){const a=i/7*TAU+t*3,dist=36*(1-t);g.fillStyle(c,.7).fillCircle(source.x+Math.cos(a)*dist,source.y-25+Math.sin(a)*dist,2);}
  // Visible launch arrives exactly at the warned impact time.
  if(['poison-spit','soul-bolt'].includes(id)&&t>.55){const k=(t-.55)/.45,tx=id==='soul-bolt'?x+Math.cos(angle)*e.length:x,ty=id==='soul-bolt'?y+Math.sin(angle)*e.length:y,px=source.x+(tx-source.x)*k,py=source.y+(ty-source.y)*k-45*Math.sin(k*Math.PI);g.lineStyle(6,c,.2).lineBetween(px-12,py-8,px,py);if(id==='soul-bolt')skull(g,px,py,17,c,.9);else g.fillStyle(c,.85).fillEllipse(px,py,18,12);}
  if(id==='meteor'){const k=t,px=x-170*(1-k),py=y-440*(1-k*k);path(g,[[px-70,py-150],[px,py]],0xff6b30,.2,35);flame(g,px,py,65,1);crystal(g,px,py,27,0x604235,1);}
  return;
 }
 if(['dragon-brood','raise-dead','wolf-howl','harpy-brood'].includes(id)){
  circleRunes(g,x,y,70,c,a,t*2);
  for(let i=0;i<16;i++){const b=i/16*TAU,dist=25+t*65;g.fillStyle(c,a*.6).fillRect(x+Math.cos(b)*dist,y+Math.sin(b)*dist*.4-t*25,2,5);}
  if(id==='wolf-howl')for(let i=0;i<3;i++)g.lineStyle(3,c,a*.6).strokeEllipse(x,y-30,(40+t*160+i*24),(24+t*80+i*12));return;
 }
 if(id==='dragon-breath'){
  for(let i=0;i<11;i++){const b=angle+(i/10-.5)*e.arc*.83,pts=[];for(let j=0;j<=22;j++){const k=j/22,dist=12+k*(e.length-12),wiggle=Math.sin(k*15-t*19+i)*k*9;pts.push([x+Math.cos(b)*dist-Math.sin(b)*wiggle,y-22+Math.sin(b)*dist+Math.cos(b)*wiggle]);}path(g,pts,0xff5628,a*.14,26);path(g,pts,0xff8a32,a*.45,12);path(g,pts,0xffd475,a*.65,4);}
  for(let i=0;i<28;i++){const k=i/28,travel=(k+t*1.2)%1,spread=Math.sin(i*7.3)*e.arc*.43,b=angle+spread,dist=18+travel*(e.length-18);flame(g,x+Math.cos(b)*dist,y-22+Math.sin(b)*dist,14+travel*22,a*.7);}return;
 }
 if(['wing-gust','wind-shear'].includes(id)){for(let i=0;i<5;i++){const k=(t+i*.12)%1,px=x+Math.cos(angle)*e.length*k,py=y+Math.sin(angle)*e.length*k;const pts=[];for(let j=0;j<=18;j++){const b=angle-Math.PI/2+j/18*Math.PI;pts.push([px+Math.cos(b)*22,py+Math.sin(b)*e.width*.44]);}path(g,pts,c,a*.25,12);path(g,pts,0xefffff,a,2);}return;}
 if(id==='feather-fan'){for(let i=0;i<17;i++){const b=angle+(i/16-.5)*e.arc,k=clamp(t*1.8),dist=20+(e.length-20)*k;feather(g,x+Math.cos(b)*dist,y+Math.sin(b)*dist,b,30,c,a);path(g,[[x+Math.cos(b)*(dist-35),y+Math.sin(b)*(dist-35)],[x+Math.cos(b)*dist,y+Math.sin(b)*dist]],c,a*.3,2);}return;}
 if(['soul-bolt','venom-trail','frost-fang','rock-line'].includes(id)){for(let i=0;i<12;i++){const k=i/11,phase=clamp((t-k*.3)*2),px=x+Math.cos(angle)*e.length*k,py=y+Math.sin(angle)*e.length*k;if(!phase)continue;
   if(id==='frost-fang'||id==='rock-line')crystal(g,px,py,Math.sin(phase*Math.PI)*(id==='rock-line'?105:75),id==='rock-line'?0x9bb6ad:c,a);
   else if(id==='soul-bolt'){skull(g,px,py-16,12,c,a);path(g,[[px-12*Math.cos(angle),py-16-12*Math.sin(angle)],[px,py-16]],c,a*.3,13);}
   else {g.fillStyle(c,a*.25).fillEllipse(px,py,e.width*.9,e.width*.6);for(let n=0;n<3;n++)g.lineStyle(1,c,a).strokeCircle(px+Math.sin(n*5+i)*18,py-((t*35+n*9)%28),3+n);}
  }return;}
 if(id==='claw-sweep'){claws(g,x,y,angle,e.length*.8,Math.min(1,t*3),a);claws(g,x,y,angle+.1,e.length*.65,Math.min(1,t*3),a*.5);return;}
 if(id==='life-drain'){
  for(let i=0;i<12;i++){const b=i/12*TAU+t*3,dist=r*(1-t),px=x+Math.cos(b)*dist,py=y+Math.sin(b)*dist*.7;skull(g,px,py-12,9,c,a);}
  for(const p of e.victims||[]){const k=1-t,px=source.x+(p.x-source.x)*k,py=source.y+(p.y-source.y)*k-25;path(g,[[p.x,p.y-20],[px,py],[source.x,source.y-25]],c,a*.3,5);skull(g,px,py,10,c,a);}return;
 }
 if(id==='shed-skin'||id==='stone-armor'||id==='wolf-frenzy'){
  circleRunes(g,x,y,65,c,a,t*2);for(let i=0;i<9;i++){const b=i/9*TAU+t*3,px=x+Math.cos(b)*55,py=y+Math.sin(b)*22-30;if(id==='stone-armor')crystal(g,px,py,24,c,a);else if(id==='shed-skin')poly(g,[[px-5,py],[px,py-9],[px+5,py],[px,py+9]],c,a);else claws(g,px,py,b,15,.8,a);}
  if(id==='wolf-frenzy'){g.fillStyle(0xff708c,a*.7).fillCircle(x,y-85,19).fillStyle(0x263b3d,a).fillCircle(x+9,y-90,17);}return;
 }
 for(const p of points){const px=p.x,py=p.y;
  if(['ground-slam','earth-shatter','meteor'].includes(id)){
   g.lineStyle(4,id==='meteor'?0xffa758:0xb6cbbd,a*.8).strokeEllipse(px,py,r*2*Math.min(1,t*3),r*1.1*Math.min(1,t*3));
   for(let i=0;i<12;i++){const b=i/12*TAU,dist=r*(.3+t*.6),dx=Math.cos(b),dy=Math.sin(b);path(g,[[px+dx*12,py+dy*9],[px+dx*dist*.5+Math.sin(i*7)*8,py+dy*dist*.4],[px+dx*dist,py+dy*dist*.7]],0x131e1a,a,4);crystal(g,px+dx*dist,py+dy*dist*.65,Math.sin(Math.PI*t)*(18+i%3*12),id==='meteor'?0x7e4f32:0x8f9b83,a);if(id==='meteor')flame(g,px+dx*dist*.7,py+dy*dist*.55,45*a,a);}
  }else if(id==='inferno'){for(let i=0;i<18;i++){const b=i*2.399,dist=r*Math.sqrt(i/18);flame(g,px+Math.cos(b)*dist,py+Math.sin(b)*dist*.85,55+65*Math.sin(Math.PI*t+i*.2)**2,a);}circleRunes(g,px,py,r*.8,0xff9a43,a,t*.2);
  }else if(id==='grave-bind'||id==='bone-cage'||id==='crystal-ring'){
   const count=id==='grave-bind'?9:20,dist=id==='grave-bind'?r*.6:(e.inner+r)/2;for(let i=0;i<count;i++){const b=i/count*TAU,h=(50+i%3*25)*Math.sin(Math.PI*t),sx=px+Math.cos(b)*dist,sy=py+Math.sin(b)*dist;
    if(id==='crystal-ring')crystal(g,sx,sy,h,c,a);else {path(g,[[sx,sy],[sx-4,sy-h*.5],[sx+3,sy-h]],0xe4dce8,a,5);g.fillStyle(c,a).fillCircle(sx+3,sy-h,4);path(g,[[sx+3,sy-h],[sx+13,sy-h-8],[sx+17,sy-h-4]],c,a,3);}}
  }else if(id==='constrict'){for(let i=0;i<3;i++){const pts=[];for(let j=0;j<=60;j++){const b=j/60*TAU+t*3+i,dist=r*(.85-i*.2);pts.push([px+Math.cos(b)*dist,py+Math.sin(b)*dist*.6-i*15]);}path(g,pts,0x415c2b,a,12);path(g,pts,c,a*.9,4);}
  }else if(id==='poison-spit'||id==='venom-nova'){
   if(id==='poison-spit')g.fillStyle(c,a*.2).fillEllipse(px,py,r*1.8,r*1.2);
   for(let i=0;i<30;i++){const b=i*2.399,dist=id==='venom-nova'?(e.inner+(r-e.inner)*(i%5/4)):r*Math.sqrt(i/30),sx=px+Math.cos(b)*dist,sy=py+Math.sin(b)*dist;g.fillStyle(c,a*.3).fillCircle(sx,sy,8+i%5).lineStyle(1,0xd8ff90,a*.8).strokeCircle(sx,sy-t*24,3+i%4);}
  }else if(id==='pounce'||id==='sky-dive'){
   const k=clamp(t*3),sx=source.x+(px-source.x)*k,sy=source.y+(py-source.y)*k-90*Math.sin(k*Math.PI);path(g,[[source.x,source.y],[sx,sy]],c,a*.18,20);claws(g,px,py,-Math.PI/2,r*.65,clamp(t*4),a);if(id==='sky-dive')for(let side of [-1,1])for(let i=0;i<6;i++)feather(g,sx+side*(18+i*9),sy-20+i*3,side*.7,30,c,a);
  }else if(id==='storm-call'){
   for(let i=0;i<36;i++){const k=i/36,b=k*TAU*3+t*9,dist=r*(1-k*.7);feather(g,px+Math.cos(b)*dist,py+Math.sin(b)*dist*.45-k*110,b+Math.PI/2,18,c,a*(.5+k*.5));}
  }
 }
}

