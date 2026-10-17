import {preloadBossCasting,playBossCasting,createBossCastingFrames} from './boss-casting.js';
import {ENEMY_FAMILIES} from './enemy-families.js';
import {BOSS_SKILLS} from './boss-skills.js';
import {FOREST_RELICS} from './items.js';
import {renderEvent,updateVFX,clearVFX} from './effects.js';
const catalog=await(await fetch('/catalog-v4.json')).json(),family=document.querySelector('#family'),difficulty=document.querySelector('#difficulty');let scene,serial=0,preview=null,frozen=false;
for(const [id,f]of Object.entries(ENEMY_FAMILIES)){const o=document.createElement('option');o.value=id;o.textContent=f.name;family.append(o);}
const emit=e=>renderEvent(scene,{id:'preview-'+serial++,...e},new Set());
function buttons(){document.querySelector('#skills').replaceChildren();const f=ENEMY_FAMILIES[family.value];for(const id of f.skills.slice(0,+difficulty.value)){const b=document.createElement('button');b.textContent=BOSS_SKILLS[id].name;b.onclick=()=>start('skill',id);document.querySelector('#skills').append(b);}if(scene){clearVFX(scene);preview=null;scene.boss?.destroy();scene.bossObject=null;scene.boss=scene.add.sprite(220,330,'lord-'+family.value).setOrigin(.5,.86).setDisplaySize(160,160).play('lord-'+family.value);}}
family.onchange=buttons;difficulty.onchange=buttons;
function start(mode,id){if(!scene)return;clearVFX(scene);frozen=false;preview={mode,id,age:0,launched:false,impacted:false};const spec=BOSS_SKILLS[id];document.querySelector('#hint').textContent=mode==='spawn'?'Cổng triệu hồi '+ENEMY_FAMILIES[family.value].name+' · dùng tại cửa map và điểm boss gọi viện binh.':mode==='basic'?'Đòn đánh và va chạm của quái '+ENEMY_FAMILIES[family.value].name:mode==='relic'?'Di vật tăng chỉ số ngay khi nhặt, giữ đến hết chiến dịch; không tạo hào quang buff.':spec.name+' · cảnh báo trước 1,2 giây · hiệu ứng khớp vùng sát thương.';playPreview(0);}
function playPreview(dt){if(!preview)return;const p=preview,f=ENEMY_FAMILIES[family.value];p.age+=dt;
 if(!p.launched){p.launched=true;if(p.mode==='skill'){const spec=BOSS_SKILLS[p.id];p.e={...spec,skill:p.id,name:spec.name,family:family.value,color:f.color,sourceX:220,sourceY:330,x:['line','cone','self','ring'].includes(spec.shape)?220:620,y:330,angle:0,arc:spec.angle||Math.PI/2,points:spec.shape==='multi'?[{x:580,y:210},{x:650,y:330},{x:580,y:450}]:null,duration:spec.delay,victims:[{x:620,y:330}]};emit({...p.e,type:'boss-warning'});}
 else if(p.mode==='spawn')emit({type:'enemy-summon',family:family.value,x:550,y:330,boss:true});
 else if(p.mode==='basic')emit({type:'projectile',family:family.value,x:230,y:300,tx:620,ty:310,duration:.6,straight:true});
 else {const item=FOREST_RELICS[serial%FOREST_RELICS.length];emit({type:'relic-pickup',item:item.id,x:620,y:300,color:item.color,text:item.label});}}
 if(!p.impacted&&p.age>=(p.mode==='skill'?1.2:.6)){p.impacted=true;if(p.mode==='skill'){emit({...p.e,type:'boss-impact'});const spec=BOSS_SKILLS[p.id];if(spec.summon)for(let i=0;i<spec.count;i++)emit({type:'enemy-summon',family:family.value,x:220+(i-1)*35,y:365});}if(p.mode==='basic')emit({type:'impact',family:family.value,x:620,y:310,radius:35});}
 if(p.age>3.3&&document.querySelector('#repeat').checked)start(p.mode,p.id);
}
function syncBossPose(force){
 if(!scene?.boss)return;const age=preview?.age||0,skill=preview?.id,obj=scene.bossObject||={sprite:scene.boss,size:135};
 const unit={hp:1,family:family.value,face:1};if(preview?.mode==='skill'){
  if(force==='charge'||(!force&&age<1.2))unit.bossCast={time:force ? .45 : 1.2-age,duration:1.2,skill,angle:0};
  else if(force==='release'||(!force&&age<1.85))unit.skillPose={time:force ? .45 : 1.85-age,duration:.65,skill,angle:0};
 }
 if(!playBossCasting(scene,unit,obj,catalog)){const key='lord-'+family.value;scene.boss.setOrigin(.5,.86).setDisplaySize(160,160).play(key,true);}
}
for(const [id,mode]of [['spawn','spawn'],['basic','basic'],['relic','relic']])document.getElementById(id).onclick=()=>start(mode);
document.getElementById('still').onclick=()=>{if(!preview)return;const p=preview;clearVFX(scene);if(p.mode==='skill'){emit({...p.e,type:'boss-impact'});}else if(p.mode==='spawn')emit({type:'enemy-summon',family:family.value,x:550,y:330,boss:true});else if(p.mode==='basic')emit({type:'impact',family:family.value,x:620,y:310,radius:35});else {const item=FOREST_RELICS[0];emit({type:'relic-pickup',item:item.id,x:620,y:300,color:item.color,text:item.label});}updateVFX(scene,.55);syncBossPose('release');frozen=true;};
document.getElementById('charge-pose').onclick=()=>{if(preview?.mode!=='skill')return;syncBossPose('charge');frozen=true;};
new Phaser.Game({type:Phaser.AUTO,width:1000,height:580,parent:'arena',backgroundColor:'#213c33',pixelArt:true,scene:{preload(){preloadBossCasting(this,catalog);for(const a of catalog.actors.filter(a=>a.id.startsWith('lord-')))this.load.spritesheet(a.id,a.actions.idle.url,{frameWidth:a.frame,frameHeight:a.frameHeight||a.frame});},create(){scene=this;createBossCastingFrames(this,catalog);const g=this.add.graphics();for(let x=0;x<1000;x+=50)for(let y=0;y<580;y+=50)g.lineStyle(1,0x72967d,.08).strokeRect(x,y,50,50);g.fillStyle(0x102922,.6).fillEllipse(220,345,140,40).fillEllipse(620,350,65,22);for(const a of catalog.actors.filter(a=>a.id.startsWith('lord-')))this.anims.create({key:a.id,frames:this.anims.generateFrameNumbers(a.id,{start:0,end:3}),frameRate:7,repeat:-1});g.fillStyle(0xc8dbc4).fillCircle(620,312,9).fillRoundedRect(610,323,20,27,4);this.add.text(620,375,'Vị trí người chơi',{fontSize:'14px',color:'#d8e8ca'}).setOrigin(.5);buttons();start('spawn');},update(t,delta){const dt=Math.min(delta/1000,.1)*Number(document.querySelector('#rate').value);if(!frozen){playPreview(dt);syncBossPose();updateVFX(this,dt);}}}});




