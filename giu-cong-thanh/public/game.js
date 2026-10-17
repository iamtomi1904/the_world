import {preloadBossCasting,playBossCasting,createBossCastingFrames} from './boss-casting.js';

import {buildInventory,updateInventory,drawLoot} from './loot-ui.js';
import {drawHostileZones} from './boss-vfx.js';
import {preloadEmpowered,createEmpoweredAnimations,playEmpowered} from './empowered.js';
import {actorAction} from './actor-animation.js';
import {PASSIVES} from './passives.js';
import {HEROES,TROOPS,MAPS,WORLD,heroById} from './content.js';
import {CLASSES,skillById,skillAtRank,skillPrice,describeSkill} from './skills.js';
import {renderMap,drawMiniMap,updateScenery} from './terrain.js';
import {renderEvent,updateVFX,clearVFX,unitVFX} from './effects.js';
const $=id=>document.getElementById(id),held={},entities=new Map(),seenEvents=new Set();
let state,myId,game,scene,currentMap=0,showRange=false,hero='knight-1',catalog,noticeUntil=0,bookClass='';
function readLocal(key,fallback=''){try{return localStorage.getItem(key)||fallback;}catch{return fallback;}}
function writeLocal(key,value){try{localStorage.setItem(key,value);}catch{}}
hero=heroById(readLocal('gct-hero','knight-1')).id;$('name').value=readLocal('gct-name','Chỉ huy');
const catalogReady=fetch('/catalog-v4.json').then(r=>{if(!r.ok)throw Error('Không tải được danh sách asset.');return r.json();}).then(data=>catalog=data);catalogReady.catch(e=>notify(e.message));
const socket=new WebSocket(`${location.protocol==='https:'?'wss:':'ws:'}//${location.host}`);
function send(m){if(socket.readyState===1)socket.send(JSON.stringify(m));}
function notify(text){$('error').textContent=text;$('notice').textContent=text;noticeUntil=Date.now()+4000;}
socket.onopen=()=>{$('connection').textContent='● SERVER SẴN SÀNG';for(const id of ['solo','create','join'])$(id).disabled=false;};
socket.onclose=()=>{for(const k in held)held[k]=false;$('connection').textContent='● MẤT KẾT NỐI';for(const id of ['solo','create','join','start','next'])$(id).disabled=true;notify('Mất kết nối. Tải lại trang để bắt đầu chiến dịch mới.');if(state)$('status').textContent='Mất kết nối — vui lòng tải lại trang.';};
socket.onerror=()=>notify('Không kết nối được server.');
function join(extra){$('error').textContent='';writeLocal('gct-name',$('name').value);send({type:'join',name:$('name').value,hero,token:readLocal('gct-token'),...extra});}
buildInventory(send);
$('solo').onclick=()=>join({solo:true});$('create').onclick=()=>join({});$('join').onclick=()=>{const code=$('code').value.trim();if(!code){notify('Nhập mã phòng của bạn bè.');return;}join({code});};
$('start').onclick=()=>send({type:'start'});$('next').onclick=()=>send({type:'next'});$('again').onclick=()=>location.reload();$('range').onclick=()=>{showRange=!showRange;$('range').textContent=showRange?'ẨN TẦM ĐÁNH':'TẦM ĐÁNH';};
for(const b of document.querySelectorAll('[data-panel]'))b.onclick=()=>{for(const other of document.querySelectorAll('[data-panel]'))other.classList.toggle('active',other===b);$('skills-panel').hidden=b.dataset.panel!=='skills';$('army-panel').hidden=b.dataset.panel!=='army';};
function statsMarkup(h){return [['Máu',h.hp],['Công',h.power],['Giáp',h.armor],['Tốc chạy',h.speed],['Tầm đánh',h.range],['Đòn / giây',(1/h.cooldown).toFixed(1)]].map(([n,v])=>`<div class="stat">${n}<b>${v}</b></div>`).join('');}
function selectHero(id){
 hero=id;writeLocal('gct-hero',id);const h=heroById(id),c=CLASSES[h.classId];$('selected-name').textContent=h.name+' · '+c.name;
 for(const card of $('hero-grid').children){card.classList.toggle('active',card.dataset.hero===id);card.setAttribute('aria-pressed',String(card.dataset.hero===id));}
 $('hero-detail').innerHTML=`<div class="hero-preview-top"><div class="detail-title"><h3>${h.name}</h3><span>${c.name} · ${c.energy} năng lượng · Hồi ${c.regen}/giây</span></div><div class="stat-list">${statsMarkup(h)}</div></div><div class="hero-preview-passive">${PASSIVES[h.id].name}: ${PASSIVES[h.id].text}<br>${c.passive}</div><div class="hero-preview-skills">${c.skills.map(id=>{const s=skillById(id);return `<div><b>${s.slot} · ${s.name}</b><p>${describeSkill(s,1,h.power)}</p><p>${s.slot==='Q'?'Có sẵn':`Mở ở cấp ${s.requiredLevel} · ${s.unlockCost} vàng`} · Tối đa 3 bậc</p></div>`;}).join('')}</div>`;
 if(myId&&state?.phase==='lobby')send({type:'hero',hero:id});
}
for(const h of HEROES){const b=document.createElement('button');b.className='hero-card';b.dataset.hero=h.id;b.innerHTML=`<img src="/assets/v2/${h.id}/portrait.png" alt=""><span><strong>${h.name}</strong><small>${CLASSES[h.classId].name}</small></span>`;b.onclick=()=>selectHero(h.id);$('hero-grid').append(b);}selectHero(hero);
const hex=n=>'#'+n.toString(16).padStart(6,'0');
for(const m of MAPS){const card=document.createElement('div');card.className='map-card';card.dataset.stage=m.id;card.innerHTML=`<span class="map-tag">MỐC ${String(m.id).padStart(2,'0')}</span><svg viewBox="0 0 ${WORLD.width} ${WORLD.height}" aria-hidden="true"><rect width="${WORLD.width}" height="${WORLD.height}" fill="${hex(m.ground)}"/>${m.props.map(p=>`<circle cx="${p.x}" cy="${p.y}" r="${p.radius+16}" fill="#273d2c" opacity=".7"/>`).join('')}${m.lanes.map(l=>`<polyline points="${l.map(p=>p.join(',')).join(' ')}" fill="none" stroke="${hex(m.road)}" stroke-width="80"/>`).join('')}<rect x="${m.base.x-100}" y="${m.base.y-70}" width="200" height="130" fill="#d9c892"/></svg><h3>${m.name}</h3><p>${m.description}</p><small>${m.lanes.length} hướng · 1920 × 1280</small>`;$('map-grid').append(card);}
for(const t of TROOPS){const div=document.createElement('div');div.className='shop-item';div.innerHTML=`<div class="description"><b>${t.name}</b><small>${t.description} · HP ${t.hp}</small></div><button data-buy="${t.id}">${t.cost} ◈</button>`;$('shop').append(div);}
for(const id of ['power','vitality','repair']){const b=document.createElement('button');b.className='upgrade secondary';b.dataset.buy=id;$('shop-upgrades').append(b);}
for(const b of document.querySelectorAll('[data-buy]'))b.onclick=()=>send({type:'buy',choice:b.dataset.buy});$('mastery').onclick=()=>send({type:'buy',choice:'mastery'});
function buildSkillbook(p){
 if(bookClass===p.classId)return;bookClass=p.classId;$('skillbook').replaceChildren();$('hotbar').replaceChildren();
 for(const id of CLASSES[p.classId].skills){const s=skillById(id),card=document.createElement('div');card.className='skill-card';card.dataset.skill=id;card.innerHTML=`<h4>${s.slot} · ${s.name}<span class="rank"></span></h4><span class="skill-tag"></span><p class="description"></p><p class="requirement"></p><button></button>`;card.querySelector('button').onclick=()=>send({type:'buy',choice:'skill:'+id});$('skillbook').append(card);
  const hot=document.createElement('button');hot.className='hotkey';hot.dataset.cast=id;hot.innerHTML=`<b>${s.slot}</b><span>${s.name}<small></small></span>`;hot.onclick=()=>{held['spell'+s.slot]=true;setTimeout(()=>held['spell'+s.slot]=false,150);};$('hotbar').append(hot);
 }
}
function updateUI(m,p){
 updateInventory(p,m.phase);
 const map=MAPS[m.stage-1],h=p.stats,c=CLASSES[p.classId];
 $('stage').textContent=`${m.stage} / 10`;$('map-name').textContent=map.name;$('wave').textContent=`ĐỢT ${m.wave} / 3`;$('gate').textContent=`${Math.ceil(m.gate)} / ${m.maxGate}`;$('gold').textContent=Math.floor(p.gold);$('kills').textContent=`${p.kills} HẠ GỤC`;
 $('start').hidden=m.phase!=='lobby'||m.host!==myId;$('start').textContent=`▶ BẮT ĐẦU · ${m.players.length} NGƯỜI`;$('next').hidden=m.phase!=='clear'||m.host!==myId;$('again').hidden=!['victory','defeat'].includes(m.phase);
 $('status').textContent=m.phase==='lobby'?`${m.players.length}/4 chỉ huy · Có thể bắt đầu một mình · Mã mời ${m.code}`:m.phase==='prepare'?`Đợt ${m.wave+1} bắt đầu sau ${m.timer}s · Mua kỹ năng hoặc thuê lính`:m.phase==='clear'?`ĐÃ GIỮ VỮNG MỐC ${m.stage}! ${m.host===myId?'Sẵn sàng sang chiến trường tiếp theo.':'Chờ chủ phòng sang mốc tiếp theo.'}`:m.phase==='victory'?'CHIẾN THẮNG CHIẾN DỊCH!':m.phase==='defeat'?'THẤT THỦ — Nhà đã bị phá. XP được giữ lại.':p.hp<=0?`Đang hồi sinh · ${Math.ceil(p.respawn)}s`:`Đợt ${m.wave}/3 · Còn ${m.remaining} quái · Q / E / R để thi triển`;
 $('player-stats').innerHTML=`<strong>${h.name} · Cấp ${p.level}</strong><div>${c.name} · HP ${Math.ceil(p.hp)} / ${h.hp}${p.shield>0?` · Khiên ${Math.ceil(p.shield)}`:''}</div><div class="hp-track"><div style="width:${Math.max(0,p.hp/h.hp*100)}%"></div></div><div>Công <b>${h.power}</b> · Giáp <b>${h.armor}</b> · Tốc <b>${h.speed}</b></div><div>Tầm ${h.range} · ${(1/h.cooldown).toFixed(1)} đòn/s · XP ${p.xp}</div>`;
 $('class-passive').textContent=PASSIVES[p.hero].name+': '+PASSIVES[p.hero].text+' '+c.passive;$('energy-label').textContent=`NL ${Math.floor(p.energy)} / ${h.maxEnergy}`;$('energy-fill').style.width=`${p.energy/h.maxEnergy*100}%`;$('troop-count').textContent=m.troops.length;
 const canBuy=['lobby','prepare','battle','clear'].includes(m.phase),costs={power:80+p.upPower*30,vitality:80+p.upHP*30,repair:75};
 for(const b of document.querySelectorAll('[data-buy]')){const t=TROOPS.find(t=>t.id===b.dataset.buy),cost=t?.cost||costs[b.dataset.buy];b.disabled=!canBuy||p.gold<cost||(t&&m.troops.length>=12)||(b.dataset.buy==='repair'&&m.gate>=m.maxGate);if(!t)b.textContent=`${{power:'Công +6',vitality:'Máu +40',repair:'Sửa nhà +300'}[b.dataset.buy]} · ${cost} ◈`;}
 buildSkillbook(p);
 for(const card of $('skillbook').children){const s=skillById(card.dataset.skill),rank=p.skills[s.id]||0,price=skillPrice(s,rank),cd=p.cooldowns[s.id]||0;
  card.querySelector('.rank').textContent=`${rank} / 3`;card.querySelector('.description').textContent=describeSkill(s,rank,h.power);card.querySelector('.skill-tag').textContent=rank?`${cd>0?'Hồi '+cd.toFixed(1)+'s':'Sẵn sàng'} · Bậc ${rank}`:'CHƯA HỌC';
  const b=card.querySelector('button');b.disabled=!canBuy||rank>=3||p.level<s.requiredLevel||p.gold<price;b.textContent=rank>=3?'ĐÃ TỐI ĐA':`${rank?'Nâng bậc '+(rank+1):'Học kỹ năng'} · ${price} ◈`;
  card.querySelector('.requirement').textContent=p.level<s.requiredLevel?`Cần cấp ${s.requiredLevel}`:rank>=3?'Sát thương / phạm vi tăng theo bậc':'Mỗi bậc tăng sức mạnh và giảm hồi chiêu';
 }
 for(const b of $('hotbar').children){const s=skillById(b.dataset.cast),rank=p.skills[s.id]||0,a=skillAtRank(s,rank),cd=p.cooldowns[s.id]||0;b.classList.toggle('locked',!rank);b.classList.toggle('cooldown',cd>0);b.disabled=!rank||p.hp<=0||m.phase!=='battle'||cd>0||p.energy<a.cost;b.querySelector('small').textContent=!rank?`Chưa học · Cấp ${s.requiredLevel}`:cd>0?`Hồi ${cd.toFixed(1)}s`:`${a.cost} NL · Bậc ${rank}`;}
 const price=100+p.mastery*100;$('mastery').disabled=!canBuy||p.mastery>=3||p.gold<price;$('mastery').textContent=`Tinh thông đòn thường ${p.mastery}/3${p.mastery<3?' · '+price+' ◈':' · Tối đa'}`;$('mastery-description').textContent='Mỗi bậc +8% Công. Bậc 2 mở hiệu ứng nội tại của class trên đòn thường.';
 $('team').replaceChildren();for(const t of m.players){const el=document.createElement('div');el.className='team-member';el.textContent=`${t.id===myId?'◆':'◇'} ${t.name} · ${heroById(t.hero).name} · Cấp ${t.level}`;$('team').append(el);}
 for(const card of $('map-grid').children){const n=Number(card.dataset.stage);card.classList.toggle('current',n===m.stage);card.classList.toggle('done',n<m.stage||m.phase==='victory');}
 if(Date.now()>noticeUntil){$('notice').textContent='';$('error').textContent='';}
}
socket.onmessage=async({data})=>{
 const m=JSON.parse(data);if(m.error){notify(m.error);return;}
 if(m.type==='joined'){myId=m.id;writeLocal('gct-token',m.token);$('lobby').hidden=true;$('selection').hidden=true;$('arena').hidden=false;$('room').textContent=m.code;$('arena').scrollIntoView({block:'start'});try{await catalogReady;if(!game)boot();}catch(e){notify('Không khởi tạo được hình ảnh: '+e.message);}return;}
 if(m.type!=='state')return;const old=state;state=m;const p=m.players.find(p=>p.id===myId);if(!p)return;updateUI(m,p);
 if(scene){if(currentMap!==m.stage)drawMap(scene,MAPS[m.stage-1]);for(const event of m.events.slice(0,90))renderEvent(scene,event,seenEvents);}
 if(old?.phase!==m.phase&&['clear','defeat','victory'].includes(m.phase))history();
};
function drawMap(s,m){currentMap=m.id;clearVFX(s);s.cameras.main.stopFollow();s.followSprite=null;renderMap(s,m,catalog,entities);s.cameras.main.setBounds(0,0,WORLD.width,WORLD.height);s.cameras.main.centerOn(m.base.x,m.base.y+100);}
function boot(){
 game=new Phaser.Game({type:Phaser.AUTO,parent:'game',width:960,height:640,pixelArt:true,backgroundColor:'#344b2b',scale:{mode:Phaser.Scale.FIT,autoCenter:Phaser.Scale.CENTER_BOTH},scene:{
 preload(){preloadBossCasting(this,catalog);preloadEmpowered(this,catalog);const bar=this.add.graphics(),label=this.add.text(480,290,'ĐANG DỰNG CHIẾN TRƯỜNG…',{fontSize:'18px',color:'#e7d8b6'}).setOrigin(.5);this.load.on('progress',v=>{bar.clear().fillStyle(0x152119).fillRect(280,325,400,8).fillStyle(0xc8c08e).fillRect(280,325,400*v,8);label.setText(`ĐANG DỰNG CHIẾN TRƯỜNG… ${Math.round(v*100)}%`);});this.load.once('complete',()=>{bar.destroy();label.destroy();});this.load.image('bridge-atlas','/assets/v4/Bridges.png');for(let n=1;n<=10;n++)this.load.image('stone-wall-'+n,'/assets/v4/stone-tower-'+n+'.png');this.load.image('castle','/assets/v3/castle.png');for(const a of catalog.actors)for(const [action,info]of Object.entries(a.actions))if(!a.packed||action==='idle')this.load.spritesheet(`${a.id}:${action}`,info.url,{frameWidth:a.frame,frameHeight:a.frameHeight||a.frame});const needed=new Set([...MAPS.flatMap(m=>m.props.map(p=>p.asset)),...MAPS.map(m=>m.fortress.ornament),'chanterelles1','bush_simple1_1','rock1_1','cloud-1','cloud-2','cloud-3']);for(const p of catalog.props)if(needed.has(p.id))this.load.image(p.id,p.url);for(const t of catalog.terrain)this.load.image(t.id,t.url);for(const fx of catalog.effects)this.load.spritesheet('fx:'+fx.id,fx.url,{frameWidth:fx.frame,frameHeight:fx.frame});for(const art of catalog.spellArt||[])this.load.image('art:'+art.id,art.url);this.load.on('loaderror',file=>notify('Không tải được asset: '+file.key));},
 create(){
  scene=this;createBossCastingFrames(this,catalog);createEmpoweredAnimations(this,catalog);for(const a of catalog.actors)for(const [action,info]of Object.entries(a.actions))for(let row=0;row<(info.rows||1);row++)this.anims.create({key:`${a.id}:${action}${row?':'+row:''}`,frames:this.anims.generateFrameNumbers(`${a.id}:${a.packed?'idle':action}`,{start:(info.start||0)+row*info.frames,end:(info.start||0)+(row+1)*info.frames-1}),frameRate:action==='attack'?12:8,repeat:action==='dead'?0:-1});
  for(const fx of catalog.effects)this.anims.create({key:'fx:'+fx.id,frames:this.anims.generateFrameNumbers('fx:'+fx.id,{start:0,end:fx.frames-1}),frameRate:Math.max(14,fx.frames*1.7),repeat:0});
  this.actorObjects=entities;drawMap(this,MAPS[(state?.stage||1)-1]);this.bars=this.add.graphics().setDepth(3500);this.zones=this.add.graphics().setDepth(1);this.unitGlow=this.add.graphics().setDepth(2800);this.unitGround=this.add.graphics().setDepth(2);this.mini=this.add.graphics().setDepth(10000).setScrollFactor(0);
  this.input.keyboard.on('keydown',e=>{if(['Space','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.code))e.preventDefault();held[e.code]=true;});this.input.keyboard.on('keyup',e=>held[e.code]=false);this.input.on('pointermove',pointer=>{held.pointerAim=true;const p=state?.players.find(p=>p.id===myId);if(!p)return;const world=this.cameras.main.getWorldPoint(pointer.x,pointer.y),dx=world.x-p.x,dy=world.y-(p.y-20),len=Math.hypot(dx,dy);if(len>5){held.aimX=dx/len;held.aimY=dy/len;}});this.input.on('pointerdown',()=>held.mouse=true);this.input.on('pointerup',()=>held.mouse=false);this.input.on('gameout',()=>held.mouse=false);
 },
 update(time,dt){
  if(!state||!this.bars)return;const live=new Set(),map=MAPS[state.stage-1];this.bars.clear();this.zones.clear();this.unitGlow.clear();this.unitGround.clear();
  if(held.pointerAim){const p=state.players.find(p=>p.id===myId),pointer=this.input.activePointer;if(p){const w=this.cameras.main.getWorldPoint(pointer.x,pointer.y),dx=w.x-p.x,dy=w.y-(p.y-20),len=Math.hypot(dx,dy);if(len>5){held.aimX=dx/len;held.aimY=dy/len;}}}
  drawLoot(this,state.loot,time);drawHostileZones(this,state.hostileZones,time);
  for(const z of state.zones||[]){const color=z.fx.includes('fire')||z.fx==='explosion'?0xffaa69:z.fx.includes('water')?0x8cdeea:z.fx==='lightning'?0x8fcfff:0xc6e3a2;this.zones.fillStyle(color,.07).fillCircle(z.x,z.y,z.radius);this.zones.lineStyle(2,color,.4).strokeCircle(z.x,z.y,z.radius);}
  for(const u of [...state.players,...state.enemies,...state.troops]){
   live.add(u.id);const player=!!u.hero,troop=!!u.owner,actorId=player?u.hero:u.sprite,info=catalog.actors.find(a=>a.id===actorId);if(!info)continue;let obj=entities.get(u.id);
   if(obj&&obj.actor!==actorId){obj.buffArt?.destroy();obj.sprite.destroy();obj.label.destroy();entities.delete(u.id);obj=null;}
   if(!obj){const size=player?57:troop?38:(u.size||45)*(u.boss?1.6:u.elite?1.25:1),sprite=this.add.sprite(u.x,u.y,`${actorId}:idle`).setOrigin(info.originX,info.originY).setScale(size/info.bodyHeight),label=this.add.text(u.x,u.y-size-15,'',{fontFamily:'Segoe UI',fontSize:'10px',color:player?'#fff0c8':troop?'#b4e9d0':'#ffd1b2',stroke:'#172017',strokeThickness:3}).setOrigin(.5).setDepth(3600);if(u.bossArt&&!u.animatedBoss&&this.textures.exists('art:'+u.bossArt)){sprite.setTexture('art:'+u.bossArt).setOrigin(.5,.94).setScale(140/sprite.height);sprite.setTint(u.bossColor);}
 obj={sprite,label,actor:actorId,size:u.boss?115:size,groundY:u.y,bossArt:u.bossArt&&!u.animatedBoss};entities.set(u.id,obj);}
   const s=obj.sprite,walk=Math.hypot(s.x-u.x,obj.groundY-u.y)>1,renderY=u.y-(u.flying?(u.altitude||35)+Math.sin(time/140)*3:0);
   obj.groundY=Phaser.Math.Linear(obj.groundY,u.y,Math.min(1,dt/70));if(Math.hypot(s.x-u.x,s.y-renderY)>250){s.x=u.x;s.y=renderY;}else{s.x=Phaser.Math.Linear(s.x,u.x,Math.min(1,dt/70));s.y=Phaser.Math.Linear(s.y,renderY,Math.min(1,dt/70));}
   s.setDepth(obj.groundY+(u.flying?1500:0)).setFlipX((info.directions||1)===1&&u.face<0).setAlpha(player&&u.hp<=0?.25:1);const anim=actorAction(u,obj,walk||u.flying,time,info),action=info.actions[anim]?anim:'idle',row=(info.actions[action].rows||1)>1?Math.min(u.direction||0,info.actions[action].rows-1):0;if(u.stun>0){s.anims.pause();}else s.anims.resume();if((!u.bossArt||u.animatedBoss)&&!(u.stun>0)){if(!playBossCasting(this,u,obj,catalog)&&!playEmpowered(this,u,obj,action,catalog)){s.setOrigin(info.originX,info.originY).setScale(obj.size/info.bodyHeight);const key=`${actorId}:${action}${row?':'+row:''}`;if(obj.attackRestart&&action==='attack'){s.play(key,false);obj.attackRestart=false;}else s.play(key,true);s.anims.timeScale=action==='attack'?info.actions.attack.frames/Math.max(.12,(obj.attackDuration||300)/1000)/12:action==='walk'?1.25:1;}}else if(u.bossArt&&!u.animatedBoss)s.setScale((140/s.height)*(1+Math.sin(time/210)*.018));s.clearTint();if(u.bossColor&&!u.animatedBoss)s.setTint(u.bossColor);if(u.elite&&!u.boss)s.setTint(0xffcf9a);if(u.stun>0)s.setTint(0xc4dfff);else if(u.statuses?.poison)s.setTint(0xb2dc86);else if(u.statuses?.burn)s.setTint(0xffb37c);unitVFX(this,u,obj,time);
   obj.label.setText(player?`${u.name}${u.id===myId?' ◆':''} · ${u.level}`:u.boss?u.name:u.neutral?(u.animal?'THÚ RỪNG':'QUÁI RỪNG')+' · '+u.reward+' vàng':u.elite?'TINH ANH':'').setPosition(s.x,s.y-obj.size-15);
   const max=player?u.stats.hp:u.maxHp,y=s.y-obj.size-5;this.bars.fillStyle(0x15221b).fillRect(s.x-18,y,36,4);this.bars.fillStyle(player?0xc8d895:troop?0x84cfbf:0xda8c6a).fillRect(s.x-18,y,36*Math.max(0,u.hp)/max,4);
   if(player&&u.id===myId){if(this.followSprite!==s){this.followSprite=s;this.cameras.main.startFollow(s,true,.1,.1,0,85);}if(u.hp>0){this.bars.lineStyle(1,0xe9daa6,.7).strokeEllipse(s.x,s.y+1,28,11);if(showRange)this.bars.lineStyle(1,0xffe5ab,.25).strokeCircle(s.x,s.y,u.stats.range);}}
   if((u.guard||u.shield>0)&&u.hp>0)this.bars.lineStyle(u.shield>0?3:2,u.classId==='guardian'?0xffdc94:0x9dd6ff,.6).strokeCircle(s.x,s.y-24,31);
  }
  for(const [id,obj]of entities)if(!live.has(id)){obj.buffArt?.destroy();obj.label.destroy();const info=catalog.actors.find(a=>a.id===obj.actor);if(info?.actions.dead&&!obj.bossArt){obj.sprite.play(`${obj.actor}:dead`);this.tweens.add({targets:obj.sprite,alpha:0,duration:650,onComplete:()=>obj.sprite.destroy()});}else obj.sprite.destroy();entities.delete(id);}
  this.bars.fillStyle(0x142019).fillRect(map.base.x-90,map.base.y+60,180,10);this.bars.fillStyle(0xd6bd7e).fillRect(map.base.x-88,map.base.y+62,176*state.gate/state.maxGate,6);updateVFX(this,dt/1000);updateScenery(this,time);drawMiniMap(this,state,map);
 }
 }});
}
setInterval(()=>{if(myId)send({type:'input',aimX:Number.isFinite(held.aimX)?held.aimX:1,aimY:Number.isFinite(held.aimY)?held.aimY:0,x:Number(!!(held.KeyD||held.ArrowRight||held.right))-Number(!!(held.KeyA||held.ArrowLeft||held.left)),y:Number(!!(held.KeyS||held.ArrowDown||held.down))-Number(!!(held.KeyW||held.ArrowUp||held.up)),attack:!!(held.KeyJ||held.mouse||held.attack),guard:!!(held.Space||held.KeyK||held.guard),q:!!(held.KeyQ||held.spellQ),e:!!(held.KeyE||held.spellE),r:!!(held.KeyR||held.spellR)});},50);
window.addEventListener('blur',()=>{for(const k in held)held[k]=false;});for(const b of document.querySelectorAll('[data-key]')){b.onpointerdown=e=>{e.preventDefault();b.setPointerCapture(e.pointerId);held[b.dataset.key]=true;};for(const event of ['pointerup','pointercancel','lostpointercapture'])b.addEventListener(event,()=>held[b.dataset.key]=false);}
async function history(){try{const rows=await fetch('/api/history').then(r=>r.json());$('history').replaceChildren();if(!rows.length)$('history').textContent='Chưa có trận hoàn tất.';for(const row of rows){const div=document.createElement('div');div.className='record';for(const value of [row.result==='victory'?'⚑ THẮNG CHIẾN DỊCH':row.result==='clear'?'⚑ VƯỢT MỐC':'THẤT THỦ',`Mốc ${row.stage||1} · Phòng ${row.room}`,`${row.players} người · ${row.kills} hạ gục`,row.ended_at+' UTC']){const span=document.createElement('span');span.textContent=value;div.append(span);}$('history').append(div);}}catch{$('history').textContent='Chưa tải được lịch sử.';}}
$('refresh').onclick=history;history();




