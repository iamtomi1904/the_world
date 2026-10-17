export function buildFortress(s,m,catalog){
 const b=m.base,f=m.fortress,objects=[];const texture=s.textures.get('castle');if(!texture.has('watchtower'))texture.add('watchtower',0,37,650,285,485);
 const floor=s.add.graphics().setDepth(b.y-210);for(const p of m.fortifications||[])floor.fillStyle(0x26332b,.3).fillRect(p.x-40,p.y-12,80,40);objects.push(floor);
 const keep=s.add.image(b.x,b.y+55,'castle').setOrigin(.5,.94).setTint(f.tint);keep.setDisplaySize(380*f.scale,380*keep.height/keep.width*f.scale).setDepth(b.y+55);objects.push(keep);
 for(const [i,p]of (m.fortifications||[]).entries()){
  const size=f.layout==='citadel'?88:f.layout==='ruins'?70:75,tower=s.add.image(p.x,p.y+15,'castle','watchtower').setOrigin(.5,.92).setTint(f.tint).setDisplaySize(size,size*1.7).setDepth(p.y+16);objects.push(tower);
  const flag=s.add.graphics().setDepth(p.y+17);flag.lineStyle(2,0xd5c39b).lineBetween(p.x,p.y-110,p.x,p.y-135);flag.fillStyle(f.accent,.95).fillTriangle(p.x,p.y-135,p.x+21,p.y-130,p.x,p.y-124);objects.push(flag);
 }
 const info=catalog.props.find(p=>p.id===f.ornament);if(info)for(const side of [-1,1])objects.push(s.add.image(b.x+side*256,b.y-64,f.ornament).setOrigin(.5,.85).setScale((f.layout==='grove'?135:85)/info.height).setDepth(b.y+20));
 for(const side of [-1,1]){const wall=s.add.image(b.x+side*128,b.y+45,'stone-wall-'+m.id).setOrigin(.5,1).setTint(f.tint);wall.setDisplaySize(128,128*wall.height/wall.width).setDepth(b.y+46);objects.push(wall);}
 const detail=s.add.graphics().setDepth(b.y+58);objects.push(detail);
 if(['forest','grove','desert'].includes(f.layout))for(const side of [-1,1])for(let j=0;j<7;j++){const x=b.x+side*(145+j*11);detail.fillStyle(f.layout==='desert'?0xd8bd84:0x775b37).fillRect(x,b.y+10,8,28);detail.fillStyle(0xc2aa6e).fillTriangle(x,b.y+3,x-4,b.y+10,x+8,b.y+10);}
 if(['ice','crystal','ember','citadel'].includes(f.layout))for(let j=0;j<10;j++){const a=j/10*Math.PI*2,x=b.x+Math.cos(a)*208,y=b.y+Math.sin(a)*75;detail.fillStyle(f.accent,.17).fillCircle(x,y,9).lineStyle(1,f.accent,.8).strokeCircle(x,y,4);}
 if(f.layout==='ruins'){detail.lineStyle(3,0x5a5b52,.7).lineBetween(b.x-155,b.y+28,b.x-123,b.y+5).lineBetween(b.x+145,b.y+23,b.x+115,b.y-3);}
 if(f.layout==='twin'){for(const side of [-1,1]){detail.lineStyle(2,0xf5d7ac).lineBetween(b.x+side*120,b.y-40,b.x+side*120,b.y-82);detail.fillStyle(0xdb7c53).fillTriangle(b.x+side*120,b.y-82,b.x+side*145,b.y-76,b.x+side*120,b.y-67);}}
 const label=s.add.text(b.x,b.y+81,f.name.toUpperCase(),{fontFamily:'Segoe UI',fontSize:'10px',color:'#f3dfb0',stroke:'#1b271b',strokeThickness:4}).setOrigin(.5).setDepth(2050);objects.push(label);
 return objects;
}
