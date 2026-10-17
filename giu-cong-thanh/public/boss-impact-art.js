const TAU=Math.PI*2;
const COLORS={dragon:[0xff5a22,0xffd37a],undead:[0x7848d9,0xe5c9ff],serpent:[0x65b925,0xddff83],wolf:[0x4ea8e1,0xe3faff],harpy:[0x9776ed,0xf1ddff],stone:[0x447c88,0x9fefff]};
function stroke(g,p,c,a,w){g.lineStyle(w,c,a).beginPath();p.forEach(([x,y],i)=>i?g.lineTo(x,y):g.moveTo(x,y));g.strokePath();}
function shard(g,x,y,h,c,a){g.fillStyle(c,a).fillTriangle(x-8,y,x,y-h,x+8,y).fillStyle(0xffffff,a*.55).fillTriangle(x,y,x,y-h,x+4,y-9);}
export function bossImpactAccent(g,e,t){
 const [dark,light]=COLORS[e.family]||COLORS.stone,fade=Math.max(0,1-t),power=Math.min(1,t*8),a=Math.min(1,fade*2)*(e.alpha??1),r=e.shape==='self'?70:e.radius||110;
 const centers=e.shape==='multi'?e.points||[]:[e];
 if(e.shape==='line'||e.shape==='cone'){
  const len=e.length||250,angle=e.angle||0,dx=Math.cos(angle),dy=Math.sin(angle),width=e.shape==='line'?(e.width||70):len*Math.sin((e.arc||1)/2);
  for(let k=0;k<3;k++){const travel=Math.min(1,t*(2+k*.15)),x=e.x+dx*len*travel,y=e.y+dy*len*travel;
   const pts=[];for(let j=0;j<=28;j++){const side=j/28*2-1,bulge=Math.cos(side*Math.PI/2)*28;pts.push([x-dy*side*width*.45+dx*bulge,y+dx*side*width*.45+dy*bulge-18]);}
   stroke(g,pts,dark,a*.13,28-k*5);stroke(g,pts,light,a*(.75-k*.15),4-k);
  }
  for(let i=0;i<32;i++){const k=(i*.618+t*1.4)%1,spread=Math.sin(i*12.7),cross=e.shape==='cone'?k*width*.75:width*.4,x=e.x+dx*len*k-dy*spread*cross,y=e.y+dy*len*k+dx*spread*cross;
   stroke(g,[[x-dx*(12+i%4*5),y-dy*(12+i%4*5)-16],[x,y-16]],i%3?light:dark,a*.6,1+i%2);
  }return;
 }
 for(const p of centers){const x=p.x,y=p.y,ring=e.shape==='ring',inner=e.inner||0;
  // Three delayed pressure fronts; rings preserve their safe central hole.
  for(let k=0;k<3;k++){const q=Math.max(0,Math.min(1,(t-k*.075)*3)),radius=ring?inner+(r-inner)*q:r*q;
   if(q<=0)continue;g.lineStyle(15-k*3,dark,a*.12).strokeCircle(x,y,radius).lineStyle(3-k*.65,light,a*(.8-k*.15)).strokeCircle(x,y,radius);
  }
  if(!ring){g.fillStyle(dark,a*.075).fillCircle(x,y,r*power);if(t<.25)g.fillStyle(light,(.25-t)*.55).fillCircle(x,y,r*.65*power);}
  const count=e.shape==='self'?16:28;
  for(let i=0;i<count;i++){const angle=i/count*TAU+i%3*.06,travel=ring?inner+(r-inner)*(i%5/4):r*(.2+power*.65),px=x+Math.cos(angle)*travel,py=y+Math.sin(angle)*travel;
   if(e.family==='stone'||e.skill==='meteor'){
    const jump=Math.sin(t*Math.PI)*(18+i%5*9);shard(g,px,py-jump,12+i%4*7,i%3?dark:light,a*.8);
    stroke(g,[[x+Math.cos(angle)*(ring?inner:r*.15),y+Math.sin(angle)*(ring?inner:r*.15)],[px,py]],0x101c1b,a*.6,3);
   }else if(e.family==='dragon'){
    const h=(25+i%4*17)*Math.sin(Math.PI*t);stroke(g,[[px,py],[px+Math.sin(i+t*10)*12,py-h*.55],[px+Math.cos(i)*8,py-h]],dark,a*.3,14);stroke(g,[[px,py],[px+Math.sin(i+t*10)*8,py-h*.7]],light,a*.8,3);
   }else if(e.family==='undead'){
    const h=(30+i%5*15)*Math.sin(Math.PI*t);stroke(g,[[px,py],[px+Math.sin(i+t*6)*14,py-h*.55],[px+Math.cos(i+t*4)*10,py-h]],dark,a*.15,19);g.fillStyle(light,a*.65).fillEllipse(px+Math.cos(i+t*4)*10,py-h,5,10);
   }else if(e.family==='serpent'){
    const h=Math.sin(Math.PI*t)*(15+i%4*12);g.fillStyle(dark,a*.12).fillEllipse(px,py,r*.28,r*.15).lineStyle(2,light,a*.7).strokeCircle(px,py-h,3+i%4);stroke(g,[[px,py],[px+Math.sin(i)*10,py-h]],dark,a*.25,5);
   }else if(e.family==='wolf'){
    const len=12+i%3*8;stroke(g,[[px-Math.cos(angle)*len,py-Math.sin(angle)*len],[px,py]],light,a*.8,2);if(e.skill==='frost-fang'||e.skill==='pounce')shard(g,px,py,18*Math.sin(Math.PI*t),light,a*.6);
   }else {
    const b=angle+t*6,dist=ring?travel:travel*(.75+.25*Math.sin(b)),sx=x+Math.cos(b)*dist,sy=y+Math.sin(b)*dist*.7-t*70;
    stroke(g,[[sx-9,sy+14],[sx,sy],[sx+5,sy-12]],light,a*.75,2);stroke(g,[[sx-5,sy+8],[sx+5,sy-2]],dark,a*.8,3);
   }
  }
 }
}
