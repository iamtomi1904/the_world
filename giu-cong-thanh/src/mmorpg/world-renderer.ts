import {TerrainDetailRenderer} from './terrain-detail-renderer';
import Phaser from 'phaser';
import {terrainAt,type SceneData,type MapObject} from '../shared/map-traversal';
import {treeLayout,treeRigs,type TreeKind,type TreeSockets} from './tree-rig';

const art='/design-preview/';
export function preloadWorld(scene:Phaser.Scene):void {
  for(const key of ['settlement','terrain','fort-river'])scene.load.image('land-source-'+key,'/mmorpg/assets/'+key+'-kit-r001.png');
  scene.load.json('land-frames','/mmorpg/assets/world-r005.frames.json');
  scene.load.image('geology-materials','/mmorpg/assets/geology-materials-r001.png');
  scene.load.image('geology-modules','/mmorpg/assets/geology-kit-r001.png');
  scene.load.image('scene-details','/mmorpg/assets/scene-details-r009.png');
  scene.load.image('walk-vertical-source','/mmorpg/assets/human-walk-vertical-r009.png');
  scene.load.image('ground-grass','/mmorpg/assets/meadow-ground-r002.png');
  scene.load.image('ground-dirt',art+'v01-ground-bank-r012/dirt-source-r001.png');
  scene.load.image('ground-stone',art+'v01-p0-scene-r007/stone-32__draft.png');
  scene.load.image('river-water','/mmorpg/assets/river-water-r002.png');
  for(const species of ['oak','birch','willow','orchard'])scene.load.image('source-'+species,art+'v01-p0-scene-r006/'+species+'-source__r001.png');
  scene.load.json('tree-manifest',art+'v01-p0-scene-r006/tree-manifest.json');
  scene.load.image('source-body',art+'v01-bridge-in-scene-r026/cottage-body-alpha-r003.png');
  scene.load.image('source-roof',art+'v01-bridge-in-scene-r026/cottage-roof-alpha-r002.png');
  scene.load.image('source-props',art+'v01-courtyard-props-r023/courtyard-props-source-r001.png');
  scene.load.image('source-bridge',art+'v01-stone-bridge-r024/bridge-layers-source-r002.png');
  scene.load.json('bridge-mask',art+'v01-bridge-mask-r025/bridge-mask.json');
  scene.load.image('flowers',art+'v01-p0-scene-r007/flowers-white-64__draft.png');
  scene.load.image('grass',art+'v01-p0-scene-r007/grass-meadow-64__draft.png');
  scene.load.image('flora-atlas','/mmorpg/assets/vegetation-r003.png');
  scene.load.json('flora-frames','/mmorpg/assets/vegetation-r003.frames.json');
  scene.load.image('dungeon-kit','/mmorpg/assets/dungeon-kit-alpha-r002.png');
  scene.load.json('dungeon-frames','/mmorpg/assets/dungeon-kit.frames.json');
  scene.load.image('dungeon-props','/mmorpg/assets/dungeon-props-r001.png');
}
function canvas(w:number,h:number):HTMLCanvasElement {const c=document.createElement('canvas');c.width=w;c.height=h;return c;}
function pixels(scene:Phaser.Scene,key:string,region?:{x:number;y:number;w:number;h:number}):HTMLCanvasElement {
  const image=scene.textures.get(key).getSourceImage() as HTMLImageElement;
  const r=region||{x:0,y:0,w:image.width,h:image.height},c=canvas(r.w,r.h),g=c.getContext('2d',{willReadFrequently:true})!;
  g.drawImage(image,r.x,r.y,r.w,r.h,0,0,r.w,r.h);
  const data=g.getImageData(0,0,c.width,c.height);let l=c.width,t=c.height,right=-1,b=-1;
  for(let y=0;y<c.height;y++)for(let x=0;x<c.width;x++){
    const i=(y*c.width+x)*4+3,solid=data.data[i]>=128;data.data[i]=solid?255:0;
    if(solid){l=Math.min(l,x);t=Math.min(t,y);right=Math.max(right,x);b=Math.max(b,y);}
  }
  g.putImageData(data,0,0);if(right<l)return c;
  const out=canvas(right-l+1,b-t+1);out.getContext('2d')!.drawImage(c,l,t,out.width,out.height,0,0,out.width,out.height);return out;
}
function addTexture(scene:Phaser.Scene,key:string,c:HTMLCanvasElement):void {if(!scene.textures.exists(key))scene.textures.addCanvas(key,c)?.setFilter(Phaser.Textures.FilterMode.NEAREST);}
interface TreeManifest {rows:{species:string;parts:{part:string;sourceRect:{x:number;y:number;w:number;h:number}}[]}[]}
function solidSocket(c:HTMLCanvasElement,x:number,y:number):{x:number;y:number}{
  const pixels=c.getContext('2d')!.getImageData(0,0,c.width,c.height).data;let best=Infinity,point={x,y};
  for(let yy=2;yy<c.height-2;yy+=2)for(let xx=2;xx<c.width-2;xx+=2){
    if(pixels[(yy*c.width+xx)*4+3]<255||pixels[((yy-2)*c.width+xx)*4+3]<255||pixels[((yy+2)*c.width+xx)*4+3]<255)continue;
    const d=(xx/c.width-x)**2+(yy/c.height-y)**2;if(d<best){best=d;point={x:xx/c.width,y:yy/c.height};}
  }
  return point;
}
export function prepareWorldTextures(scene:Phaser.Scene):void {
  if(scene.textures.exists('terrain-atlas'))return;
  // Four samples per material, plus neighbour masks for rounded dirt corners.
  // These are ground tiles generated from existing materials, not a painted scene.
  const c=canvas(480,720),g=c.getContext('2d')!;g.imageSmoothingEnabled=false;
  const sample=(key:string,variant:number)=>{
    const image=scene.textures.get(key).getSourceImage() as HTMLImageElement;
    const span=Math.min(key==='ground-grass'?image.width/2:384,image.width,image.height),sx=variant%2*(image.width-span),sy=Math.floor(variant/2)*(image.height-span);
    g.imageSmoothingEnabled=key==='ground-grass';g.imageSmoothingQuality='high';
    g.drawImage(image,sx,sy,span,span,0,0,30,30);
    g.imageSmoothingEnabled=false;
  };
  for(let type=0;type<6;type++)for(let variant=0;variant<4;variant++)for(let mask=0;mask<16;mask++){
    const index=type*64+variant*16+mask;g.save();g.translate(index%16*30,Math.floor(index/16)*30);
    sample('ground-grass',variant);g.fillStyle='#668344';g.globalAlpha=.25;g.fillRect(0,0,30,30);g.globalAlpha=1;
    if(type===1){
      const tl=(mask&1)&&(mask&8)?14:0,tr=(mask&1)&&(mask&2)?14:0,br=(mask&4)&&(mask&2)?14:0,bl=(mask&4)&&(mask&8)?14:0;
      g.beginPath();g.moveTo(tl,0);g.lineTo(30-tr,0);g.quadraticCurveTo(30,0,30,tr);g.lineTo(30,30-br);g.quadraticCurveTo(30,30,30-br,30);g.lineTo(bl,30);g.quadraticCurveTo(0,30,0,30-bl);g.lineTo(0,tl);g.quadraticCurveTo(0,0,tl,0);g.closePath();g.clip();
      sample('ground-dirt',variant);g.fillStyle='#c4ad77';g.globalAlpha=.32;g.fillRect(0,0,30,30);
    }else if(type===3){sample('ground-stone',variant);g.fillStyle='#a09e88';g.globalAlpha=.27;g.fillRect(0,0,30,30);}
    else if(type===2||type===4){g.fillStyle=type===2?'#28788d':'#5da59c';g.fillRect(0,0,30,30);g.fillStyle=type===2?'#3895a6':'#8ab9a5';g.fillRect(3,6+variant*2,12,2);g.fillRect(18,20-variant,9,2);}
    else if(type===5){g.fillStyle='#23432b';g.globalAlpha=.55;g.fillRect(0,0,30,30);}
    g.restore();
  }
  addTexture(scene,'terrain-atlas',c);
  const detailNames=['reeds','wetgrass','wetrocks','meadow','bench','cart','hay','wood','garden','shrine','dummy','table'];
  const columns=[0,370,735,1080,1448],rows=[0,400,720,1086];
  detailNames.forEach((name,i)=>{const col=i%4,row=Math.floor(i/4);addTexture(scene,'detail-'+name,pixels(scene,'scene-details',{x:columns[col],y:rows[row],w:columns[col+1]-columns[col],h:rows[row+1]-rows[row]}));});
  const walk=canvas(384,192),wg=walk.getContext('2d')!;wg.imageSmoothingEnabled=false;
  for(let i=0;i<8;i++){const frame=pixels(scene,'walk-vertical-source',{x:i%4*384,y:Math.floor(i/4)*512,w:384,h:512}),height=40,width=frame.width/frame.height*height;wg.drawImage(frame,i%4*96+48-width/2,Math.floor(i/4)*96+80-height,width,height);}
  addTexture(scene,'walk-vertical',walk);for(let i=0;i<8;i++)scene.textures.get('walk-vertical').add(i,0,i%4*96,Math.floor(i/4)*96,96,96);
  const land=scene.cache.json.get('land-frames') as Record<string,Record<string,[number,number,number,number]>>;
  for(const [sheet,frames]of Object.entries(land))for(const [name,[x,y,w,h]]of Object.entries(frames))addTexture(scene,'land-'+name,pixels(scene,'land-source-'+sheet,{x,y,w,h}));
  addTexture(scene,'land-cliff-segment',pixels(scene,'land-source-terrain',{x:270,y:50,w:255,h:275}));
  const dungeon=scene.cache.json.get('dungeon-frames') as Record<string,[number,number,number,number]>;
  for(const [name,[x,y,w,h]]of Object.entries(dungeon))addTexture(scene,'dungeon-'+name,pixels(scene,'dungeon-kit',{x,y,w,h}));
  const propFrames:Record<string,[number,number,number,number]>={wheel:[15,0,470,490],shelf:[535,0,470,505],workbench:[1020,20,516,470],bell:[10,495,495,525],crates:[545,540,450,440],valve:[1035,510,501,514]};
  for(const [name,[x,y,w,h]]of Object.entries(propFrames))addTexture(scene,'dungeon-'+name,pixels(scene,'dungeon-props',{x,y,w,h}));
  const manifest=scene.cache.json.get('tree-manifest') as TreeManifest;
  const sockets:Record<string,Partial<TreeSockets>>={};
  for(const row of manifest.rows)for(const part of row.parts){
    const partCanvas=pixels(scene,'source-'+row.species,part.sourceRect),kind=row.species as TreeKind;
    addTexture(scene,kind+'-'+part.part,partCanvas);sockets[kind]??={};
    const desired=part.part==='trunk'?treeRigs[kind].trunkSocket:treeRigs[kind].crownSocket;
    sockets[kind][part.part as 'trunk'|'crown']=solidSocket(partCanvas,.5,desired);
  }
  scene.cache.json.add('tree-sockets',sockets);
  addTexture(scene,'cottage-body',pixels(scene,'source-body'));addTexture(scene,'cottage-roof',pixels(scene,'source-roof'));
  addTexture(scene,'flowers-trimmed',pixels(scene,'flowers'));addTexture(scene,'grass-trimmed',pixels(scene,'grass'));
  const frames=scene.cache.json.get('flora-frames').frames as [number,number,number,number][];
  frames.forEach(([x,y,w,h],i)=>addTexture(scene,'flora-'+i,pixels(scene,'flora-atlas',{x,y,w,h})));
  const image=scene.textures.get('source-props').getSourceImage() as HTMLImageElement;
  for(const [index,name]of ['barrel','pot','fence','lamp'].entries())addTexture(scene,name,pixels(scene,'source-props',{x:(index%2)*image.width/2,y:Math.floor(index/2)*image.height/2,w:Math.floor(image.width/2),h:Math.floor(image.height/2)}));
  // Complementary masks: one source pixel belongs to back OR front, never both.
  const source=pixelsUntrimmed(scene,'source-bridge',1070,768);
  const front=canvas(1070,768),fg=front.getContext('2d')!,back=canvas(1070,768),bg=back.getContext('2d')!;
  const boundary=scene.cache.json.get('bridge-mask').foregroundBoundary as [number,number][];
  fg.beginPath();boundary.forEach(([x,y],i)=>i?fg.lineTo(x,y):fg.moveTo(x,y));fg.closePath();fg.clip();fg.drawImage(source,0,0);
  bg.drawImage(source,0,0);bg.globalCompositeOperation='destination-out';bg.drawImage(front,0,0);
  addTexture(scene,'bridge-back',back);addTexture(scene,'bridge-front',front);
}
function pixelsUntrimmed(scene:Phaser.Scene,key:string,w:number,h:number):HTMLCanvasElement {
  const c=canvas(w,h),g=c.getContext('2d',{willReadFrequently:true})!;
  g.drawImage(scene.textures.get(key).getSourceImage() as HTMLImageElement,0,0,w,h,0,0,w,h);
  const data=g.getImageData(0,0,w,h);for(let i=3;i<data.data.length;i+=4)data.data[i]=data.data[i]>=128?255:0;g.putImageData(data,0,0);return c;
}
type Sprite=Phaser.GameObjects.Image;
export class WorldRenderer {
  private geology?:TerrainDetailRenderer;
  private nodes:Phaser.GameObjects.GameObject[]=[];
  private foliage:{image:Sprite;trunk:Sprite;x:number;y:number;width:number;top:number;phase:number}[]=[];
  private roofs:{image:Sprite;object:MapObject}[]=[];
  private water:{sprite:Phaser.GameObjects.Rectangle;y:number;phase:number}[]=[];
  private tilemap:Phaser.Tilemaps.Tilemap;
  private river?:Phaser.GameObjects.TileSprite;
  private riverMask?:Phaser.Display.Masks.GeometryMask;
  private floorMask?:Phaser.Display.Masks.GeometryMask;
  private floor?:Phaser.GameObjects.TileSprite;
  private shallow?:Phaser.GameObjects.TileSprite;
  private shallowMask?:Phaser.Display.Masks.GeometryMask;
  private cropMask?:Phaser.Display.Masks.GeometryMask;
  constructor(private scene:Phaser.Scene,private data:SceneData){this.build();}
  private image(key:string,x:number,y:number,w:number,depth:number):Sprite {
    const source=this.scene.textures.get(key).getSourceImage() as HTMLImageElement;
    const image=this.scene.add.image(x,y,key).setOrigin(.5,1).setDisplaySize(w,w*source.height/source.width).setDepth(depth);
    this.nodes.push(image);return image;
  }
  private build():void {
    if(this.data.theme){this.buildInterior();return;}
    const s=this.data,scale=s.scale,grid=s.grid!,cell=grid.cell*scale;
    // The meadow is one continuous repeating material under semantic tiles.
    // Small per-cell grass samples produced an artificial herringbone pattern.
    this.nodes.push(this.scene.add.tileSprite(0,0,grid.width*cell,grid.height*cell,'ground-grass').setOrigin(0).setTileScale(.35).setTint(0xc6cf9b).setDepth(-105));
    const tilesData=Array.from({length:grid.height},(_,y)=>grid.data.slice(y*grid.width,(y+1)*grid.width).map((v,x)=>{
      if(v===1||v===2||v===7||s.geology&&(v===3||v===5))return-1;
      if(v===5)return 3*64;
      let mask=0;for(const [i,[dx,dy]]of [[0,-1],[1,0],[0,1],[-1,0]].entries())if(grid.data[(y+dy)*grid.width+x+dx]===1)mask|=1<<i;
      return(v-1)*64+((x*7+y*13)%4)*16+mask;
    }));
    this.tilemap=this.scene.make.tilemap({data:tilesData,tileWidth:30,tileHeight:30});
    const tiles=this.tilemap.addTilesetImage('terrain','terrain-atlas',30,30,0,0)!;
    this.nodes.push(this.tilemap.createLayer(0,tiles,0,0)!.setScale(cell/30).setDepth(-100));
    this.buildRoads();
    // Water art is clipped to the very same deep-water cells used by simulation.
    // A continuous texture avoids a visible seam at each individual terrain tile.
    if(!s.geology){
    const waterShape=this.scene.make.graphics({x:0,y:0});waterShape.setVisible(false);waterShape.fillStyle(0xffffff);
    for(let y=0;y<grid.height;y++){let start=-1;
      for(let x=0;x<=grid.width;x++){const wet=x<grid.width&&grid.data[y*grid.width+x]===3;
        if(wet&&start<0)start=x;if(!wet&&start>=0){waterShape.fillRect(start*cell,y*cell,(x-start)*cell,cell);start=-1;}}
    }
    this.riverMask=waterShape.createGeometryMask();
    this.river=this.scene.add.tileSprite(0,0,grid.width*cell,grid.height*cell,'river-water').setOrigin(0).setTileScale(.18).setDepth(-95).setMask(this.riverMask);
    this.nodes.push(this.river,waterShape);
    const shallowShape=this.scene.make.graphics({x:0,y:0});shallowShape.setVisible(false);shallowShape.fillStyle(0xffffff);
    for(let y=0;y<grid.height;y++){let start=-1;for(let x=0;x<=grid.width;x++){const wet=x<grid.width&&grid.data[y*grid.width+x]===5;if(wet&&start<0)start=x;if(!wet&&start>=0){shallowShape.fillRect(start*cell,y*cell,(x-start)*cell,cell);start=-1;}}}
    this.shallowMask=shallowShape.createGeometryMask();
    this.shallow=this.scene.add.tileSprite(0,0,grid.width*cell,grid.height*cell,'river-water').setOrigin(0).setTileScale(.2).setTint(0xb9eed6).setAlpha(.55).setDepth(-94).setMask(this.shallowMask);
    this.nodes.push(this.shallow,shallowShape);
    }else this.geology=new TerrainDetailRenderer(this.scene,s);
    const cropShape=this.scene.make.graphics({x:0,y:0});cropShape.setVisible(false);cropShape.fillStyle(0xffffff);
    for(let y=0;y<grid.height;y++){let start=-1;for(let x=0;x<=grid.width;x++){const soil=x<grid.width&&grid.data[y*grid.width+x]===1;if(soil&&start<0)start=x;if(!soil&&start>=0){cropShape.fillRect(start*cell,y*cell,(x-start)*cell,cell);start=-1;}}}
    this.cropMask=cropShape.createGeometryMask();this.nodes.push(cropShape);
    const bank=this.scene.add.graphics().setDepth(-90);this.nodes.push(bank);
    for(let y=1;y<grid.height-1;y++)for(let x=1;x<grid.width-1;x++){
      const type=grid.data[y*grid.width+x],px=x*cell,py=y*cell;
      if(!s.geology&&(type===3||type===5)){
        for(const [dx,dy]of [[-1,0],[1,0],[0,-1],[0,1]]){
          const neighbour=grid.data[(y+dy)*grid.width+x+dx];
          if(neighbour===1||neighbour===2){
            bank.fillStyle(0x8c9870);bank.fillRect(px+(dx>0?cell-3:0),py+(dy>0?cell-3:0),dx?3:cell,dy?3:cell);
            bank.fillStyle(0x939a6c,.65);bank.fillRect(px+(dx<0?0:dx>0?cell-2:0),py+(dy<0?0:dy>0?cell-2:0),dx?2:cell,dy?2:cell);
          }
        }
        if((x+y*7)%9===0){const sprite=this.scene.add.rectangle(px+8,py+12,12,2,0xb5e3cf,.5).setDepth(-80);this.nodes.push(sprite);this.water.push({sprite,y:py+12,phase:(x+y)%7});}
      }
    }
    for(const o of s.objects||[]){
      const x=o.x*scale,y=o.y*scale,w=o.width*scale;
      if(['oak','birch','willow','orchard'].includes(o.kind)){
        this.nodes.push(this.scene.add.ellipse(x,y+2,w*.65,w*.18,0x1e402d,.2).setDepth(-70));
        const kind=o.kind as TreeKind,trunkArt=this.scene.textures.get(kind+'-trunk').getSourceImage() as HTMLImageElement,crownArt=this.scene.textures.get(kind+'-crown').getSourceImage() as HTMLImageElement;
        const sockets=this.scene.cache.json.get('tree-sockets')[kind] as TreeSockets;
        const rig=treeLayout(kind,w,trunkArt.height/trunkArt.width,crownArt.height/crownArt.width,sockets);
        const trunk=this.image(kind+'-trunk',x,y,rig.trunkWidth,y).setFlipX(!!o.flip).setData({treeId:o.id,treePart:'trunk'});
        const socketX=x+rig.socketX*(o.flip?-1:1),socketY=y+rig.socketY;
        const crown=this.image(kind+'-crown',socketX,socketY,w,y+.2).setOrigin(o.flip?1-rig.crownSocketX:rig.crownSocketX,rig.crownSocket).setFlipX(!!o.flip).setData({treeId:o.id,treePart:'crown',socketX,socketY});
        this.foliage.push({image:crown,trunk,x,y,width:w,top:y+rig.top,phase:Number(o.id)%13});
      }else if(o.kind==='cottage'){
        this.nodes.push(this.scene.add.ellipse(x,y+1,w*.95,35,0x28462f,.22).setDepth(-70));
        this.image('cottage-body',x,y,w*.75,y);
        const roof=this.image('cottage-roof',x,y-w*.34,w,y+.2);this.roofs.push({image:roof,object:o});
      }else if(o.kind==='bridge'){
        const ratio=w/1070,top=y-340*ratio;
        for(const [key,depth]of [['bridge-back',-60],['bridge-front',(o.y+12)*scale]] as const){
          const sprite=this.scene.add.image(x-w/2,top,key).setOrigin(0).setDisplaySize(w,768*ratio).setDepth(depth);this.nodes.push(sprite);
        }
      }else if(['barrel','lamp','pot','fence'].includes(o.kind))this.image(o.kind,x,y,w,y);
      else if(o.kind==='detail')this.image('detail-'+o.asset,x,y,w,['garden','meadow','wetgrass'].includes(o.asset||'')?-64:y).setFlipX(!!o.flip);
      else if(['building','entrance','mountain','boulders','pebbles','ridge','cliff','stairs','rampart','fort-gate','crop','footbridge'].includes(o.kind)){
        const key='land-'+(o.kind==='footbridge'?'footbridge':o.asset||'rocks');
        const ground=['crop','pebbles','stairs','footbridge'].includes(o.kind);
        const sprite=this.image(key,x,y,w,ground?-62:y);
        sprite.setData({landmarkKind:o.kind,asset:o.asset});
        if(o.kind==='cliff'){if(w<60)sprite.setTexture('land-cliff-left').setDisplaySize(60,120);else sprite.setTexture('land-cliff-segment').setDisplaySize(w,120);}
        if(o.kind==='crop')sprite.setMask(this.cropMask!);
        if(o.kind==='stairs'&&o.axis==='v')sprite.setRotation(Math.PI/2);
        if(o.kind==='stairs')sprite.setDepth(y+1);
        if(o.kind==='footbridge')sprite.setDisplaySize(w,330);
        if(['building','entrance','mountain'].includes(o.kind))this.roofs.push({image:sprite,object:o});
      }
      else if(['rock','sign'].includes(o.kind))this.image('dungeon-'+o.kind,x,y,w,y);
      else if(['flowers','grass'].includes(o.kind))this.image(o.kind+'-trimmed',x,y,w,-65).setAlpha(.85);
      else if(o.kind==='flora')this.image('flora-'+Math.max(0,Math.min(5,o.variant||0)),x,y,w,-65).setFlipX(!!o.flip);
    }
    for(const p of s.portals){
      const x=p.at[0]*scale,y=p.at[1]*scale;
      const ring=this.scene.add.ellipse(x,y,40,14,0x365d58,.25).setStrokeStyle(2,0xd9ca8c,.8).setDepth(-50);this.nodes.push(ring);
      this.nodes.push(this.scene.add.text(x,y-28,p.name,{fontFamily:'Arial',fontSize:13,color:'#fff7dc',backgroundColor:'#234738dd',padding:{x:6,y:4}}).setOrigin(.5,1).setDepth(5000));
    }
  }
  private buildRoads():void {
    const g=this.data.navigation||this.data.grid!,cell=g.cell*this.data.scale,key='roads-r008';
    if(this.scene.textures.exists(key)){this.nodes.push(this.scene.add.image(0,0,key).setOrigin(0).setDisplaySize(g.width*cell,g.height*cell).setDepth(-98));return;}
    const edges=new Map<string,[number,number][]>();
    const add=(a:[number,number],b:[number,number])=>{const k=a.join(',');const list=edges.get(k)||[];list.push(b);edges.set(k,list);};
    for(let y=0;y<g.height;y++)for(let x=0;x<g.width;x++)if(g.data[y*g.width+x]===2){
      if(y===0||g.data[(y-1)*g.width+x]!==2)add([x,y],[x+1,y]);
      if(x===g.width-1||g.data[y*g.width+x+1]!==2)add([x+1,y],[x+1,y+1]);
      if(y===g.height-1||g.data[(y+1)*g.width+x]!==2)add([x+1,y+1],[x,y+1]);
      if(x===0||g.data[y*g.width+x-1]!==2)add([x,y+1],[x,y]);
    }
    // Trace the authored grid's boundary and soften its corners, preserving holes.
    const worldWidth=g.width*cell,worldHeight=g.height*cell;
    const c=canvas(Math.ceil(worldWidth/2),Math.ceil(worldHeight/2)),ctx=c.getContext('2d')!;ctx.scale(.5,.5);ctx.fillStyle='#fff';ctx.beginPath();
    while(edges.size){const key=edges.keys().next().value!,start=key.split(',').map(Number) as [number,number],loop=[start];let p=start;
      for(let count=0;count<g.width*g.height*4;count++){const k=p.join(','),list=edges.get(k);if(!list?.length)break;const next=list.pop()!;if(!list.length)edges.delete(k);p=next;if(p[0]===start[0]&&p[1]===start[1])break;loop.push(p);}
      const simplified=loop.filter((v,i)=>{const a=loop[(i+loop.length-1)%loop.length],b=loop[(i+1)%loop.length];return(v[0]-a[0])*(b[1]-v[1])!==(v[1]-a[1])*(b[0]-v[0]);}).map(v=>({x:v[0]*cell,y:v[1]*cell}));
      if(simplified.length<3)continue;
      simplified.forEach((v,i)=>{const a=simplified[(i+simplified.length-1)%simplified.length],b=simplified[(i+1)%simplified.length],la=Math.hypot(a.x-v.x,a.y-v.y),lb=Math.hypot(b.x-v.x,b.y-v.y),r=Math.min(22,la*.45,lb*.45),before={x:v.x+(a.x-v.x)*r/la,y:v.y+(a.y-v.y)*r/la},after={x:v.x+(b.x-v.x)*r/lb,y:v.y+(b.y-v.y)*r/lb};
        if(i===0)ctx.moveTo(before.x,before.y);else ctx.lineTo(before.x,before.y);ctx.quadraticCurveTo(v.x,v.y,after.x,after.y);
      });ctx.closePath();
    }
    ctx.fill('evenodd');
    ctx.globalCompositeOperation='source-in';ctx.setTransform(.1,0,0,.1,0,0);
    ctx.fillStyle=ctx.createPattern(this.scene.textures.get('ground-dirt').getSourceImage() as HTMLImageElement,'repeat')!;
    ctx.fillRect(0,0,worldWidth*5,worldHeight*5);
    this.scene.textures.addCanvas(key,c)?.setFilter(Phaser.Textures.FilterMode.NEAREST);
    this.nodes.push(this.scene.add.image(0,0,key).setOrigin(0).setDisplaySize(worldWidth,worldHeight).setDepth(-98));
  }
  private buildInterior():void {
    const s=this.data,g=s.grid!,cell=g.cell*s.scale;
    const key='interior-'+s.theme;
    if(!this.scene.textures.exists(key)){
      const c=canvas(64,64),ctx=c.getContext('2d')!;ctx.imageSmoothingEnabled=false;
      const material=this.scene.textures.get('dungeon-'+(s.theme==='seal'?'stone':s.theme==='roots'?'earth':'lime')).getSourceImage() as HTMLImageElement;
      ctx.drawImage(material,0,0,64,64);addTexture(this.scene,key,c);
    }
    this.nodes.push(this.scene.add.rectangle(0,0,s.size[0]*s.scale,s.size[1]*s.scale,0x202721).setOrigin(0).setDepth(-110));
    this.tilemap=this.scene.make.tilemap({data:Array.from({length:g.height},(_,y)=>g.data.slice(y*g.width,(y+1)*g.width).map(v=>v===4?0:-1)),tileWidth:64,tileHeight:64});
    const tiles=this.tilemap.addTilesetImage('floor',key,64,64)!;
    this.nodes.push(this.tilemap.createLayer(0,tiles,0,0)!.setScale(cell/64).setDepth(-100).setVisible(false));
    // Material scale is independent of the fine collision grid: no tiny repeated mosaic.
    const shape=this.scene.make.graphics({x:0,y:0});shape.setVisible(false);shape.fillStyle(0xffffff);
    for(let y=0;y<g.height;y++){let start=-1;for(let x=0;x<=g.width;x++){
      const floor=x<g.width&&g.data[y*g.width+x]===4;
      if(floor&&start<0)start=x;if(!floor&&start>=0){shape.fillRect(start*cell,y*cell,(x-start)*cell,cell);start=-1;}
    }}
    this.floorMask=shape.createGeometryMask();
    const floorKey='dungeon-'+(s.theme==='seal'?'stone':s.theme==='roots'?'earth':'lime');
    this.floor=this.scene.add.tileSprite(0,0,s.size[0]*s.scale,s.size[1]*s.scale,floorKey).setOrigin(0).setTileScale(.5).setDepth(-100).setMask(this.floorMask);
    this.nodes.push(shape,this.floor);
    const edges=this.scene.add.graphics().setDepth(-80);this.nodes.push(edges);
    for(let y=1;y<g.height-1;y++){
      let start=-1;
      for(let x=0;x<=g.width;x++){
        const edge=x<g.width&&g.data[y*g.width+x]===4&&g.data[(y-1)*g.width+x]!==4;
        if(edge&&start<0)start=x;
        if(!edge&&start>=0){const length=(x-start)*cell,count=Math.max(1,Math.ceil(length/110)),w=length/count;
          for(let i=0;i<count;i++)this.image('dungeon-wall',(start*cell)+(i+.5)*w,y*cell+3,w+1,y*cell+3);
          start=-1;
        }
        if(x<g.width&&g.data[y*g.width+x]===4){
          edges.fillStyle(s.theme==='roots'?0x51452c:0x747763);
          if(g.data[y*g.width+x-1]!==4)edges.fillRect(x*cell,y*cell,4,cell);
          if(g.data[y*g.width+x+1]!==4)edges.fillRect((x+1)*cell-4,y*cell,4,cell);
          if(g.data[(y+1)*g.width+x]!==4){edges.fillStyle(0x101b19,.8);edges.fillRect(x*cell,(y+1)*cell-5,cell,5);}
        }
      }
    }
    for(const o of s.objects||[]){const x=o.x*s.scale,y=o.y*s.scale;
      if(o.kind==='room-label'){this.nodes.push(this.scene.add.text(x,y,o.label||'',{fontFamily:'Arial',fontSize:15,color:'#d9d1ad',backgroundColor:'#202b25bb',padding:{x:6,y:3}}).setOrigin(.5).setDepth(5000));continue;}
      const key=['pillar','root','obelisk','wheel','shelf','workbench','bell','crates','valve','sign'].includes(o.kind)?'dungeon-'+o.kind:o.kind;
      this.image(key,x,y,o.width*s.scale,y);
      if(o.kind==='lamp'||o.kind==='obelisk')this.nodes.push(this.scene.add.ellipse(x,y-10,80,45,o.kind==='lamp'?0xffc866:0x65e8d3,.12).setDepth(y-.1));
    }
    for(const p of s.portals){const x=p.at[0]*s.scale,y=p.at[1]*s.scale;
      this.nodes.push(this.scene.add.ellipse(x,y,44,18,0x6cae94,.4).setStrokeStyle(2,0xc5e7b7).setDepth(-50));
      this.nodes.push(this.scene.add.text(x,y-36,'F · Trở về Bình Minh',{fontFamily:'Arial',fontSize:14,color:'#f8e9bd'}).setOrigin(.5,1).setDepth(5000));
    }
  }
  update(time:number,x:number,y:number):void {
    this.geology?.update();
    if(this.river)this.river.tilePositionY=-time*.008;
    if(this.shallow)this.shallow.tilePositionY=-time*.012;
    const view=this.scene.cameras.main.worldView;
    for(const f of this.foliage){if(f.x+f.width<view.left||f.x-f.width>view.right||f.y<view.top||f.top>view.bottom)continue;
      const cover=x>f.x-f.width*.45&&x<f.x+f.width*.45&&y<f.y-14&&y>f.top;
      f.image.setAlpha(cover?.55:1).setRotation(Math.sin(time*.0009+f.phase)*.005);f.trunk.setAlpha(cover?.55:1);}
    for(const r of this.roofs){const o=r.object,s=this.data.scale;
      const cover=Math.abs(x-o.x*s)<o.width*s*.5&&y<o.y*s&&y>(o.y-o.width)*s;r.image.setAlpha(cover?.45:1);}
    for(const w of this.water)w.sprite.setY(w.y+Math.sin(time*.001+w.phase)*3).setAlpha(.25+Math.sin(time*.0015+w.phase)*.18);
  }
  drawDebug(g:Phaser.GameObjects.Graphics):void {
    const s=this.data,scale=s.scale,grid=s.grid!,cell=grid.cell*scale;g.lineStyle(1,0xff7958,.8);
    const view=this.scene.cameras.main.worldView;
    for(const f of s.geology?.faces||[]){if(f.bounds[2]<view.left||f.bounds[0]>view.right||f.bounds[3]<view.top||f.bounds[1]>view.bottom)continue;g.lineStyle(2,0x91f1ad,.9).lineBetween(...f.top[0],...f.top[1]);g.lineStyle(2,0xffcc77,.9).lineBetween(...f.base[0],...f.base[1]);g.lineStyle(1,0xe1e7dc,.5).lineBetween(...f.top[0],...f.base[0]);}
    for(let y=Math.max(0,Math.floor(view.top/cell));y<Math.min(grid.height,Math.ceil(view.bottom/cell));y++)for(let x=Math.max(0,Math.floor(view.left/cell));x<Math.min(grid.width,Math.ceil(view.right/cell));x++)if([3,6,7].includes(terrainAt(s,x*grid.cell+.1,y*grid.cell+.1)))g.strokeRect(x*cell,y*cell,cell,cell);
    for(const o of s.objects||[]){g.lineStyle(2,0xffc16c,.9);if(o.collider)g.strokeRect(...o.collider.map(v=>v*scale) as [number,number,number,number]);if(o.radius)g.strokeCircle(o.x*scale,o.y*scale,o.radius*scale);}
  }
  destroy():void {this.geology?.destroy();this.river?.clearMask();this.riverMask?.destroy();this.shallow?.clearMask();this.shallowMask?.destroy();this.floor?.clearMask();this.floorMask?.destroy();for(const node of this.nodes)node.destroy();this.cropMask?.destroy();this.tilemap.destroy();}
}
