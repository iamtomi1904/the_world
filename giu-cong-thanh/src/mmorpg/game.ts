import Phaser from 'phaser';
import {requireAccount,accountMenu} from '../../public/auth-client.js';
import {connectCharacter} from './network';
import {MapTraversal,applyMovement,surfaceHeight,type MapConfig,type MovementStep} from '../shared/map-traversal';
import {WorldRenderer,preloadWorld,prepareWorldTextures} from './world-renderer';

const $=<T extends HTMLElement=HTMLElement>(id:string)=>document.getElementById(id) as T;
const account=await requireAccount();accountMenu(account);
const network=await connectCharacter().catch(e=>{$('status').textContent=e.message;throw e;});
const held=new Set<string>();let sceneRef:BinhMinh;
declare global {interface Window {mmorpgDebug:{ready:boolean;model:MapTraversal;scene:BinhMinh;game:Phaser.Game;character:typeof network.state.character;technology:string}}}
class BinhMinh extends Phaser.Scene {
  model:MapTraversal;actor:Phaser.GameObjects.Sprite;shadow:Phaser.GameObjects.Ellipse;
  background:Phaser.GameObjects.Image;foreground:Phaser.GameObjects.Image;foregroundShape:Phaser.GameObjects.Graphics;
  debugGraphics:Phaser.GameObjects.Graphics;hud:Phaser.GameObjects.Text;mini:Phaser.GameObjects.Image;miniDot:Phaser.GameObjects.Rectangle;
  keys:Record<string,Phaser.Input.Keyboard.Key>;world:WorldRenderer|undefined;
  networkFailed=false;distance=0;direction='south';
  wading:Phaser.GameObjects.Ellipse;
  pending:MovementStep[]=[];inputId=0;correction={x:0,y:0};
  constructor(){super('BinhMinh');}
  preload():void {
    this.load.json('map','/mmorpg/maps/runtime-map.json');preloadWorld(this);
    this.load.spritesheet('idle','/design-preview/v01-p0-scene-r007/human-idle-atlas__draft.png',{frameWidth:96,frameHeight:96});
    this.load.spritesheet('walk','/design-preview/v01-p0-scene-r007/human-walk-east-atlas__draft.png',{frameWidth:96,frameHeight:96});
    this.load.on('loaderror',(f:Phaser.Loader.File)=>{$('status').textContent='Chưa tải được hình: '+f.key;});
  }
  create():void {
    sceneRef=this;this.model=new MapTraversal(this.cache.json.get('map') as MapConfig);
    this.model.id=network.state.map;this.model.player={...network.state.position};prepareWorldTextures(this);
    this.background=this.add.image(0,0,'idle').setOrigin(0).setDepth(-100);
    this.shadow=this.add.ellipse(0,0,20,6,0x17352b,.35);
    this.actor=this.add.sprite(0,0,'idle',0).setOrigin(.5,80/96).setScale(1.8);
    this.wading=this.add.ellipse(0,0,30,10).setStrokeStyle(2,0xc9f7e5,.65).setVisible(false);
    this.foreground=this.add.image(0,0,'idle').setOrigin(0).setDepth(4000).setVisible(false);
    this.foregroundShape=this.make.graphics({x:0,y:0});this.foregroundShape.setVisible(false);
    this.foreground.setMask(this.foregroundShape.createGeometryMask());
    this.debugGraphics=this.add.graphics().setDepth(6000);
    this.hud=this.add.text(14,12,'',{fontFamily:'Arial',fontSize:15,color:'#fff4d3',backgroundColor:'#173829cc',padding:{x:10,y:5},wordWrap:{width:600}}).setScrollFactor(0).setDepth(10000);
    this.createMinimaps();
    this.mini=this.add.image(0,0,'mini-world').setOrigin(1).setScrollFactor(0).setDepth(10000).setDisplaySize(144,108);
    this.miniDot=this.add.rectangle(0,0,6,6,0xff704f).setScrollFactor(0).setDepth(10001);
    this.keys=this.input.keyboard!.addKeys({up:'W',down:'S',left:'A',right:'D',arrowUp:'UP',arrowDown:'DOWN',arrowLeft:'LEFT',arrowRight:'RIGHT',interact:'F'}) as Record<string,Phaser.Input.Keyboard.Key>;
    this.input.keyboard!.on('keydown-F',(e:KeyboardEvent)=>{if(document.activeElement===$('game')&&!e.repeat)void this.control('interact');});
    this.input.keyboard!.disableGlobalCapture();this.game.events.on('blur',()=>{held.clear();this.input.keyboard!.resetKeys();});
    this.scale.on('resize',()=>this.layout());this.cameras.main.startFollow(this.actor,true,.18,.18);
    this.syncScene();this.layout();$('home').hidden=!network.state.devTools;$('place').hidden=!network.state.devTools;
    $<HTMLSelectElement>('landmark').parentElement!.hidden=!network.state.devTools;
    this.model.config.landmarks.forEach((p,i)=>{const option=document.createElement('option');option.value=String(i);option.textContent=p.name;$('landmark').append(option);});
    $('status').textContent='WASD / mũi tên di chuyển · F vào/ra hầm · Nhân vật được lưu theo tài khoản.';
    window.mmorpgDebug={ready:true,model:this.model,scene:this,game:this.game,character:network.state.character,technology:'TypeScript + Vite + Phaser / modular Tiled map'};
  }
  createMinimaps():void {
    for(const [key,map]of Object.entries(this.model.config.scenes)){
      const c=document.createElement('canvas');c.width=144;c.height=108;const g=c.getContext('2d')!;
      g.fillStyle='#547256';g.fillRect(0,0,144,108);
      if(map.grid){const colors=['#24382c','#71864b','#c7b17b','#32798a','#a6a58c','#71afa4','#344f35','#7c8170'],grid=map.grid;
        for(let y=0;y<grid.height;y++)for(let x=0;x<grid.width;x++){g.fillStyle=colors[grid.data[y*grid.width+x]];g.fillRect(x/grid.width*144,y/grid.height*108,144/grid.width+1,108/grid.height+1);}
        for(const o of map.objects||[])if(['cottage','building','entrance','crop'].includes(o.kind)){g.fillStyle=o.kind==='crop'?'#d2bf61':o.kind==='entrance'?'#80d3b8':'#a8663e';g.fillRect(o.x/map.size[0]*144-3,o.y/map.size[1]*108-2,6,4);}
      }else{
        g.strokeStyle='#d4c599';g.lineCap='round';for(const p of map.paths){g.lineWidth=Math.max(2,p.width/map.size[0]*144);g.beginPath();g.moveTo(p.points[0][0]/map.size[0]*144,p.points[0][1]/map.size[1]*108);for(const v of p.points.slice(1))g.lineTo(v[0]/map.size[0]*144,v[1]/map.size[1]*108);g.stroke();}
        g.fillStyle='#c8d3b2';for(const r of map.floorRects)g.fillRect(r[0]/map.size[0]*144,r[1]/map.size[1]*108,r[2]/map.size[0]*144,r[3]/map.size[1]*108);
      }
      g.fillStyle='#dbeec4';for(const p of map.portals)g.fillRect(p.at[0]/map.size[0]*144-2,p.at[1]/map.size[1]*108-2,4,4);
      this.textures.addCanvas('mini-'+key,c);
    }
  }
  async control(action:string,fields:Record<string,unknown>={}):Promise<void> {
    try{const state=await network.send(action,{...fields,steps:this.pending.slice(0,32)});if(!state)return;
      const old={...this.model.player},changed=this.model.id!==state.map;this.model.id=state.map;this.model.player={...state.position};this.networkFailed=false;
      this.pending=this.pending.filter(p=>p.id>(state.ack??0));
      if(changed||action!=='input'){this.pending=[];this.correction={x:0,y:0};}
      else {for(const step of this.pending)applyMovement(this.model,step);
        this.correction.x+=old.x-this.model.player.x;this.correction.y+=old.y-this.model.player.y;
        if(Math.hypot(this.correction.x,this.correction.y)>80)this.correction={x:0,y:0};}
      if(changed)this.syncScene();$('status').textContent=`${state.character.name} · Cấp ${state.character.level} · Đã lưu tiến trình`;
    }catch(error){this.networkFailed=true;$('status').textContent=(error as Error).message+(network.blocked?' · Tải lại để kết nối.':' · Đang chờ máy chủ.');}
  }
  layout():void {this.mini.setPosition(this.scale.width-12,this.scale.height-12);this.hud.setWordWrapWidth(Math.max(180,this.scale.width-40));}
  syncScene():void {
    const m=this.model,s=m.scene;this.world?.destroy();this.world=undefined;
    this.background.setVisible(!s.grid);if(s.grid)this.world=new WorldRenderer(this,s);else this.background.setTexture(m.id).setDisplaySize(s.size[0]*s.scale,s.size[1]*s.scale);
    this.cameras.main.setBounds(0,0,s.size[0]*s.scale,s.size[1]*s.scale);
    this.actor.setPosition(m.player.x,m.player.y);this.cameras.main.centerOn(m.player.x,m.player.y);
    this.mini.setTexture('mini-'+m.id).setDisplaySize(144,108);this.foreground.setVisible(!!s.foreground);this.foregroundShape.clear();
    if(s.foreground){this.foreground.setTexture(m.id).setDisplaySize(s.size[0]*s.scale,s.size[1]*s.scale);this.foregroundShape.fillStyle(0xffffff);this.foregroundShape.fillPoints(s.foreground.map(p=>new Phaser.Geom.Point(p[0]*s.scale,p[1]*s.scale)),true);}
    this.debugGraphics.clear();this.direction='south';held.clear();this.input.keyboard!.resetKeys();
  }
  update(time:number,delta:number):void {
    if(!this.model)return;const m=this.model,typing=['SELECT','INPUT','TEXTAREA','BUTTON'].includes(document.activeElement?.tagName||'');let dx=0,dy=0;
    if(!typing){dx=Number(this.keys.right.isDown||this.keys.arrowRight.isDown||held.has('right'))-Number(this.keys.left.isDown||this.keys.arrowLeft.isDown||held.has('left'));dy=Number(this.keys.down.isDown||this.keys.arrowDown.isDown||held.has('down'))-Number(this.keys.up.isDown||this.keys.arrowUp.isDown||held.has('up'));}
    if(held.size){dx=Number(held.has('right'))-Number(held.has('left'));dy=Number(held.has('down'))-Number(held.has('up'));}
    if(network.blocked||this.networkFailed){dx=0;dy=0;}
    const length=Math.hypot(dx,dy),x=m.player.x,y=m.player.y;
    if(length){dx/=length;dy/=length;this.direction=Math.abs(dx)>Math.abs(dy)?dx>0?'east':'west':dy>0?'south':'north';}
    if(length&&!network.blocked&&!this.networkFailed){let remaining=Math.min(.12,delta/1000);
      while(remaining>1e-6&&this.pending.length<32){const dt=Math.min(.04,remaining),step={id:++this.inputId,dx,dy,dt};this.pending.push(step);applyMovement(m,step);remaining-=dt;}}
    if(network.canSend(!!length))void this.control('input',{dx,dy});
    const moved=Math.hypot(m.player.x-x,m.player.y-y);this.distance+=moved;
    const horizontal=moved>.001&&['east','west'].includes(this.direction);
    const decay=Math.exp(-delta/65);this.correction.x*=decay;this.correction.y*=decay;
    const vertical=moved>.001&&!horizontal,frame=Math.floor(this.distance/12)%4;
    this.actor.setData('groundHeight',surfaceHeight(m.scene,m.player.x,m.player.y));
    this.actor.setTexture(horizontal?'walk':vertical?'walk-vertical':'idle',horizontal?frame:vertical?frame+(this.direction==='north'?4:0):['south','west','north','east'].indexOf(this.direction)).setFlipX(horizontal&&this.direction==='west').setPosition(m.player.x+this.correction.x,m.player.y+this.correction.y).setDepth(m.player.y+.1);
    this.shadow.setPosition(this.actor.x,this.actor.y+1).setDepth(m.player.y-.1);this.world?.update(time,m.player.x,m.player.y);
    this.wading.setVisible(m.terrainSpeed()<1).setPosition(this.actor.x,this.actor.y).setDepth(m.player.y+.2).setScale(1+Math.sin(time*.006)*.12);
    const near=m.nearest(),region=m.id==='world'?m.config.landmarks.map(p=>({name:p.name,d:Math.hypot(p.at[0]*3-m.player.x,p.at[1]*3-m.player.y)})).sort((a,b)=>a.d-b.d)[0]:undefined;
    this.hud.setText(m.scene.name+(region&&region.d<260?' · '+region.name:'')+(near?' · F: '+near.name:'')+(m.terrainSpeed()<1?' · Suối cạn: lội chậm':''));
    $<HTMLButtonElement>('interact').disabled=!near;const s=m.scene;
    this.miniDot.setPosition(this.scale.width-12-144+m.player.x/(s.size[0]*s.scale)*144,this.scale.height-12-108+m.player.y/(s.size[1]*s.scale)*108);
    this.debugGraphics.clear();if($<HTMLInputElement>('debug').checked){
      if(this.world)this.world.drawDebug(this.debugGraphics);else for(const p of s.paths){this.debugGraphics.lineStyle(p.width*s.scale,0xbce4a0,.3);this.debugGraphics.beginPath();this.debugGraphics.moveTo(p.points[0][0]*s.scale,p.points[0][1]*s.scale);for(const v of p.points.slice(1))this.debugGraphics.lineTo(v[0]*s.scale,v[1]*s.scale);this.debugGraphics.strokePath();}
      this.debugGraphics.lineStyle(2,0xefffc9).strokeCircle(m.player.x,m.player.y,m.config.movement.radius);
    }
  }
}
new Phaser.Game({type:Phaser.AUTO,parent:'game',backgroundColor:'#4d6d3d',pixelArt:true,antialias:false,scale:{mode:Phaser.Scale.RESIZE,width:$('game').clientWidth,height:$('game').clientHeight},scene:[BinhMinh],audio:{noAudio:true}});
$('game').addEventListener('pointerdown',()=>$('game').focus());
$('home').onclick=()=>{if(sceneRef&&network.state.devTools)void sceneRef.control('dev-place',{landmark:0});$('game').focus();};
$('place').onclick=()=>{if(sceneRef&&network.state.devTools)void sceneRef.control('dev-place',{landmark:Number($<HTMLSelectElement>('landmark').value)});$('game').focus();};
$('interact').onclick=()=>{void sceneRef?.control('interact');$('game').focus();};$('fullscreen').onclick=()=>sceneRef?.scale.startFullscreen();
for(const b of document.querySelectorAll<HTMLButtonElement>('[data-key]')){
  b.onpointerdown=e=>{e.preventDefault();b.setPointerCapture(e.pointerId);held.add(b.dataset.key!);};
  for(const event of ['pointerup','pointercancel','lostpointercapture'])b.addEventListener(event,()=>held.delete(b.dataset.key!));
}
document.addEventListener('visibilitychange',()=>{held.clear();sceneRef?.input.keyboard!.resetKeys();});
