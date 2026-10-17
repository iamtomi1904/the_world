export function empoweredActor(unit,catalog){
 if(unit.hp<=0||!unit.buffs?.some(b=>b.time>0&&b.lifesteal>0))return null;
 return catalog.empoweredActors?.find(a=>a.hero===unit.hero)||null;
}
export function preloadEmpowered(scene,catalog){
 for(const a of catalog.empoweredActors||[])scene.load.image('empowered:'+a.hero,a.url);
}
export function createEmpoweredAnimations(scene,catalog){
 for(const a of catalog.empoweredActors||[]){
  const key='empowered:'+a.hero,texture=scene.textures.get(key),cw=a.width/6,ch=a.height/3;
  for(let n=0;n<18;n++){const x=Math.round(n%6*cw),y=Math.round(Math.floor(n/6)*ch),right=Math.round((n%6+1)*cw),bottom=Math.round((Math.floor(n/6)+1)*ch);texture.add(n,0,x,y,right-x,bottom-y);}
  for(const [action,info]of Object.entries(a.actions))scene.anims.create({key:key+':'+action,frames:Array.from({length:info.frames},(_,i)=>({key,frame:info.start+i})),frameRate:action==='attack'?12:8,repeat:action==='attack'?0:-1});
 }
}
export function playEmpowered(scene,unit,obj,action,catalog){
 const a=empoweredActor(unit,catalog);if(!a||!a.actions[action]){obj.empoweredId=null;return false;}
 const sprite=obj.sprite,key='empowered:'+a.hero+':'+action;
 sprite.setOrigin(a.originX,a.originY).setScale(obj.size/a.bodyHeight);
 if(obj.attackRestart&&action==='attack'){sprite.play(key,false);obj.attackRestart=false;}else if(action!=='attack'||sprite.anims.currentAnim?.key!==key)sprite.play(key,true);
 sprite.anims.timeScale=action==='attack'?a.actions.attack.frames/Math.max(.12,(obj.attackDuration||300)/1000)/12:action==='walk'?1.25:1;
 obj.empoweredId=a.hero;return true;
}
