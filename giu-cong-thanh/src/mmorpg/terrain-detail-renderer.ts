import Phaser from 'phaser';
import type {SceneData,Point} from '../shared/map-traversal';

/** Static material patches follow the same shoreline/face polygons as navigation. */
export class TerrainDetailRenderer {
  private images:Phaser.GameObjects.Image[]=[];
  private keys:string[]=[];
  private flow?:Phaser.GameObjects.Graphics;
  private streams:Point[][]=[];
  constructor(private scene:Phaser.Scene,data:SceneData){
    const geo=data.geology;if(!geo)return;
    const source=scene.textures.get('geology-materials').getSourceImage() as HTMLImageElement;
    const cliffSource=scene.textures.get('geology-modules').getSourceImage() as HTMLImageElement;
    const roadPattern=(g:CanvasRenderingContext2D)=>{const p=g.createPattern(scene.textures.get('ground-dirt').getSourceImage() as HTMLImageElement,'repeat')!;p.setTransform(new DOMMatrix().scale(.2));return p;};
    const meadow=scene.textures.get('ground-grass').getSourceImage() as HTMLImageElement,grass=document.createElement('canvas');grass.width=meadow.width;grass.height=meadow.height;const gg=grass.getContext('2d')!;gg.drawImage(meadow,0,0);gg.globalCompositeOperation='multiply';gg.fillStyle='#c6cf9b';gg.fillRect(0,0,grass.width,grass.height);
    const grassPattern=(g:CanvasRenderingContext2D)=>{const p=g.createPattern(grass,'repeat')!;p.setTransform(new DOMMatrix().scale(.35));return p;};
    const materials=[0,1,2,3,4,5].map(i=>{const c=document.createElement('canvas');c.width=i===0?96:160;c.height=c.width;const g=c.getContext('2d')!;g.imageSmoothingEnabled=false;g.drawImage(source,20+(i%3)*510,20+Math.floor(i/3)*500,470,470,0,0,c.width,c.height);return c;});
    const patch=(points:Point[],depth:number,paint:(g:CanvasRenderingContext2D)=>void)=>{
      const minX=Math.floor(Math.min(...points.map(p=>p[0])))-2,minY=Math.floor(Math.min(...points.map(p=>p[1])))-2;
      const w=Math.ceil(Math.max(...points.map(p=>p[0])))-minX+2,h=Math.ceil(Math.max(...points.map(p=>p[1])))-minY+2;
      const c=document.createElement('canvas');c.width=w;c.height=h;const g=c.getContext('2d')!;g.imageSmoothingEnabled=false;g.translate(-minX,-minY);
      g.beginPath();points.forEach((p,i)=>i?g.lineTo(...p):g.moveTo(...p));g.closePath();g.clip();g.beginPath();g.rect(0,0,data.size[0]*data.scale,data.size[1]*data.scale);g.clip();paint(g);
      const key='geo-patch-'+this.keys.length; if(scene.textures.exists(key))scene.textures.remove(key);
      scene.textures.addCanvas(key,c)?.setFilter(Phaser.Textures.FilterMode.NEAREST);this.keys.push(key);
      this.images.push(scene.add.image(minX,minY,key).setOrigin(0).setDepth(depth));
    };
    const fill=(g:CanvasRenderingContext2D,m:number)=>{g.fillStyle=m===3?grassPattern(g):g.createPattern(materials[m],'repeat')!;g.fillRect(0,0,6000,4500);};
    for(const r of geo.regions.filter(r=>r.level<0))patch(r.polygon,-104,g=>{g.globalAlpha=.12;fill(g,1);});
    for(const h of geo.hydrology)patch(h.bank,-99,g=>{fill(g,1);g.fillStyle=grassPattern(g);for(let i=1;i<h.bank.length;i++){const a=h.bank[i-1],b=h.bank[i],len=Math.hypot(b[0]-a[0],b[1]-a[1]);for(let d=0;d<len;d+=10){const t=d/len,x=a[0]+(b[0]-a[0])*t,y=a[1]+(b[1]-a[1])*t,j=(i*17+Math.floor(d)*13)%7;g.fillRect(Math.round(x-4),Math.round(y-4),7+j,5+j);}}});
    for(const h of geo.hydrology)patch(h.bed,-98,g=>fill(g,0));
    for(const h of [...geo.hydrology].sort((a,b)=>Number(a.deep)-Number(b.deep))){
      patch(h.water,h.deep?-95:-96,g=>{if(h.deep){const water=scene.textures.get('river-water').getSourceImage() as HTMLImageElement;g.fillStyle=g.createPattern(water,'repeat')!;g.fillRect(0,0,6000,4500);
        g.strokeStyle=g.createPattern(materials[4],'repeat')!;g.lineWidth=28;g.beginPath();h.water.forEach((p,i)=>i?g.lineTo(...p):g.moveTo(...p));g.closePath();g.stroke();
      }else{fill(g,0);g.globalAlpha=.78;fill(g,4);g.globalAlpha=.12;g.fillStyle='#087d9c';g.fillRect(0,0,6000,4500);}});
    }
    this.streams=geo.hydrology.map(h=>h.center);this.flow=scene.add.graphics().setDepth(-94);
    // Small bankside clusters break up the long material boundary without blocking feet.
    for(const h of geo.hydrology)for(let i=1;i<h.bank.length-1;i+=3){
      const p=h.bank[i];
      if(geo.decks.some(d=>p[0]>d.rect[0]-60&&p[0]<d.rect[0]+d.rect[2]+60&&p[1]>d.rect[1]-60&&p[1]<d.rect[1]+d.rect[3]+60))continue;
      const image=scene.add.image(p[0],p[1],i%9===1?'land-rocks':'flora-'+(i%6)).setOrigin(.5,1).setDepth(p[1]);
      const width=i%9===1?(h.deep?70:48):38;image.setDisplaySize(width,width*image.height/image.width);this.images.push(image);
    }
    for(const f of geo.faces){
      patch(f.quad,Math.max(...f.base.map(p=>p[1]))-1,g=>{
        const facing=(f.base[0][1]+f.base[1][1]-f.top[0][1]-f.top[1][1])*.5;
        fill(g,f.material==='soil'?(facing>10?1:3):facing< -20?3:2);
        const band=(a:number,b:number,m:number)=>{g.save();const mix=(p:Point,q:Point,t:number):Point=>[p[0]+(q[0]-p[0])*t,p[1]+(q[1]-p[1])*t];const pts=[mix(f.top[0],f.base[0],a),mix(f.top[1],f.base[1],a),mix(f.top[1],f.base[1],b),mix(f.top[0],f.base[0],b)];g.beginPath();pts.forEach((p,i)=>i?g.lineTo(...p):g.moveTo(...p));g.closePath();g.clip();fill(g,m);g.restore();};
        if(f.material==='soil'&&facing>10){band(0,.2,3);band(.8,1,0);}
        else if(facing>=20){
          // Map narrow slices of the actual grass/root/rock asset onto the authored face.
          // Back slopes remain grassy; a full stone ring looked like a defensive wall.
          const a=f.top[0],b=f.top[1],c=f.base[0],d=f.base[1],len=Math.hypot(b[0]-a[0],b[1]-a[1]),count=Math.max(1,Math.ceil(len/2));
          for(let i=0;i<count;i++){const t=i/count,u=(i+1)/count,x=a[0]+(b[0]-a[0])*t,y=a[1]+(b[1]-a[1])*t,bx=c[0]+(d[0]-c[0])*t,by=c[1]+(d[1]-c[1])*t;g.save();g.transform((b[0]-a[0])*(u-t),(b[1]-a[1])*(u-t),bx-x,by-y,x,y);const sx=40+((((f.u0??0)+t*len)*2)%550+550)%550;g.drawImage(cliffSource,sx,190,4,230,0,0,1.05,1);g.restore();}
        }
        if(Math.abs(facing)>12){g.strokeStyle='rgba(20,40,27,.28)';g.lineWidth=5;g.beginPath();g.moveTo(...f.base[0]);g.lineTo(...f.base[1]);g.stroke();}
        for(const road of geo.roads){g.strokeStyle=roadPattern(g);g.lineWidth=road.width+12;g.lineCap='round';g.lineJoin='round';g.beginPath();road.points.forEach((p,i)=>i?g.lineTo(...p):g.moveTo(...p));g.stroke();
          if(facing>35&&f.ramp){const cx=(f.top[0][0]+f.top[1][0]+f.base[0][0]+f.base[1][0])/4,cy=(f.top[0][1]+f.top[1][1]+f.base[0][1]+f.base[1][1])/4;let best=Infinity,at:Point=[0,0];
            for(let i=1;i<road.points.length;i++){const a=road.points[i-1],b=road.points[i],dx=b[0]-a[0],dy=b[1]-a[1],t=Math.max(0,Math.min(1,((cx-a[0])*dx+(cy-a[1])*dy)/(dx*dx+dy*dy||1))),p:Point=[a[0]+dx*t,a[1]+dy*t],d=Math.hypot(cx-p[0],cy-p[1]);if(d<best){best=d;at=p;}}
            if(best<road.width*.6){const w=road.width*.85,h=facing,image=scene.textures.get('land-stairs').getSourceImage() as HTMLImageElement;g.drawImage(image,image.width*.22,0,image.width*.56,image.height,at[0]-w/2,cy-h/2,w,h);}
          }
        }
        // A terrain side must end at a creek, rather than painting a thin wall across it.
        g.globalCompositeOperation='destination-out';g.fillStyle='#fff';
        for(const h of geo.hydrology){if(h.bounds[2]<f.bounds[0]||h.bounds[0]>f.bounds[2]||h.bounds[3]<f.bounds[1]||h.bounds[1]>f.bounds[3])continue;g.beginPath();h.water.forEach((p,i)=>i?g.lineTo(...p):g.moveTo(...p));g.closePath();g.fill();}
      });
    }
  }
  update():void {const v=this.scene.cameras.main.worldView;for(const image of this.images)image.setVisible(image.x<v.right&&image.y<v.bottom&&image.x+image.width>v.left&&image.y+image.height>v.top);
    const g=this.flow;if(g){g.clear();g.lineStyle(2,0xd2eee0,.28);for(const points of this.streams)for(let n=0;n<12;n++){const t=(this.scene.time.now*.0009+n*points.length/12)%(points.length-1),i=Math.floor(t),a=points[i],b=points[i+1],x=a[0]+(b[0]-a[0])*(t-i),y=a[1]+(b[1]-a[1])*(t-i),length=Math.hypot(b[0]-a[0],b[1]-a[1])||1;if(v.contains(x,y))g.lineBetween(x,y,x+(b[0]-a[0])/length*14,y+(b[1]-a[1])/length*14);}}
  }
  destroy():void {this.flow?.destroy();for(const i of this.images)i.destroy();for(const k of this.keys)this.scene.textures.remove(k);}
}
