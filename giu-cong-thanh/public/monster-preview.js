export function monsterPreview(canvas,actor,catalog,{size=90,action='idle'}={}){
 const a=catalog.actors.find(a=>a.id===actor);if(!a)return;
 const info=a.actions[action]||a.actions.idle,img=new Image();let running=true,last=-1;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 function draw(time){if(!running)return;const f=reduced?0:Math.floor(time/140)%info.frames;
  if(img.complete&&img.naturalWidth&&f!==last){last=f;const bounds=canvas.getBoundingClientRect();if(bounds.bottom>=0&&bounds.top<=innerHeight){const c=canvas.getContext('2d'),idx=(info.start||0)+f,cols=info.atlasColumns||a.sheetColumns||info.frames,fw=info.frameWidth||a.frame,fh=info.frameHeight||a.frameHeight||a.frame,scale=size/(info.bodyHeight||a.bodyHeight);c.clearRect(0,0,canvas.width,canvas.height);c.imageSmoothingEnabled=false;c.drawImage(img,idx%cols*fw,Math.floor(idx/cols)*fh,fw,fh,canvas.width/2-(info.originX??a.originX)*fw*scale,canvas.height-15-(info.originY??a.originY)*fh*scale,fw*scale,fh*scale);}else last=-1;}
  requestAnimationFrame(draw);
 }
 img.onload=()=>requestAnimationFrame(draw);img.src=info.url;return ()=>running=false;
}
