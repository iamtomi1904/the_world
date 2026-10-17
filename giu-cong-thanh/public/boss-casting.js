export function preloadBossCasting(scene,catalog){
 for(const [family,a]of Object.entries(catalog.bossCasts||{}))scene.load.image('boss-cast:'+family,a.url);
}
export function createBossCastingFrames(scene,catalog){
 for(const [family,a]of Object.entries(catalog.bossCasts||{})){const texture=scene.textures.get('boss-cast:'+family);for(let n=0;n<8;n++){const x=Math.round(n%4*a.frameWidth),y=Math.round(Math.floor(n/4)*a.frameHeight),right=Math.round((n%4+1)*a.frameWidth),bottom=Math.round((Math.floor(n/4)+1)*a.frameHeight);texture.add(n,0,x,y,right-x,bottom-y);}}
}
const ritualSkills=new Set(['wolf-howl','wolf-frenzy','stone-armor','dragon-brood','harpy-brood','shed-skin']);
export function bossPoseFrame(unit){
 if(unit.hp<=0||unit.stun>0)return null;
 const charge=unit.bossCast,release=unit.skillPose;
 if(charge){const t=Math.max(0,Math.min(1,1-charge.time/(charge.duration||1.2)));return {frame:Math.min(3,Math.floor(t*4)),phase:'charge',skill:charge.skill,angle:charge.angle};}
 if(release?.time>0){const t=Math.max(0,Math.min(1,1-release.time/(release.duration||.65))),step=Math.min(3,Math.floor(t*4));return {frame:ritualSkills.has(release.skill)?[2,3,2,7][step]:4+step,phase:'release',skill:release.skill,angle:release.angle};}
 return null;
}
export function playBossCasting(scene,unit,obj,catalog){
 const pose=bossPoseFrame(unit);if(unit.forestLeader&&pose){const actor=catalog.actors.find(a=>a.id===unit.sprite);if(actor){const frame=18+Math.min(5,pose.phase==='charge'?Math.floor(pose.frame/4*3):3+Math.floor((pose.frame-4)/4*3));obj.sprite.anims.stop();obj.sprite.setTexture(unit.sprite+':idle',frame).setOrigin(actor.originX,actor.originY).setScale(obj.size/actor.bodyHeight).setFlipX(unit.face<0);return true;}}const art=catalog.bossCasts?.[unit.family],sprite=obj.sprite;
 if(!pose||!art||!scene.textures.exists('boss-cast:'+unit.family)){obj.bossCasting=false;return false;}
 sprite.anims.stop();sprite.setTexture('boss-cast:'+unit.family,pose.frame).setOrigin(.5,art.originsY?.[pose.frame]??.86).setScale(obj.size/art.bodyHeight);
 sprite.setFlipX(Number.isFinite(pose.angle)?Math.cos(pose.angle)<0:unit.face<0);obj.bossCasting=true;obj.attackUntil=0;obj.wasAttacking=false;return true;
}
