// Authored room and corridor layout in base units. Floor is also collision truth.
const room=(id,name,rect)=>({id,name,rect});
export const dungeonLayouts={
 DG:{theme:'seal',rooms:[room('P1','Bảo dưỡng',[35,205,100,100]),room('P2','Buồng áp lực',[155,170,135,145]),room('P3','Kho hồ sơ',[325,190,120,145]),room('P4','Trạm kiểm định',[490,175,110,155]),room('P5','Sảnh canh giữ',[635,190,175,170]),room('P6','Trạm chuyển giao',[865,215,100,125])],
 corridors:[[[80,250],[915,250]],[[220,250],[220,425],[270,470],[900,470],[915,425],[915,280]]],width:42},
 ECO1:{theme:'roots',rooms:[room('A','Cửa dưới rễ',[75,205,150,120]),room('B','Buồng guồng',[355,320,190,170]),room('C','Kho dụng cụ khô',[745,275,165,125])],
 corridors:[[[130,235],[240,340],[430,420],[610,430],[820,330]],[[240,340],[350,240],[490,225],[650,285],[820,330]]],width:48},
 ECO2:{theme:'limestone',rooms:[room('A','Sân dỡ vật liệu',[90,265,170,125]),room('B','Kho vôi khô',[450,175,180,140]),room('C','Phòng thử âm',[735,365,180,140])],
 corridors:[[[180,320],[340,250],[520,240],[670,310],[820,425]],[[180,320],[200,420],[420,475],[680,530],[830,500],[820,425]]],width:46}
};
const distance=(x,y,a,b)=>{const dx=b[0]-a[0],dy=b[1]-a[1],t=Math.max(0,Math.min(1,((x-a[0])*dx+(y-a[1])*dy)/(dx*dx+dy*dy||1)));return Math.hypot(x-a[0]-t*dx,y-a[1]-t*dy);};
export function buildDungeon(id,old){
 const spec=dungeonLayouts[id],cell=5,width=200,height=125,data=[];
 const floor=(x,y)=>spec.rooms.some(({rect:[a,b,w,h]})=>x>=a&&y>=b&&x<a+w&&y<b+h)||spec.corridors.some(p=>p.slice(1).some((v,i)=>distance(x,y,p[i],v)<=spec.width/2));
 for(let y=0;y<height;y++)for(let x=0;x<width;x++)data.push(floor((x+.5)*cell,(y+.5)*cell)?4:6);
 const objects=[];
 for(const r of spec.rooms){const [x,y,w,h]=r.rect;
  objects.push({id:r.id+'-label',kind:'room-label',x:x+w/2,y:y+12,width:0,label:r.id+' · '+r.name});
  for(const [i,px]of [x+15,x+w-15].entries())objects.push({id:r.id+'-pillar'+i,kind:spec.theme==='roots'?'root':'pillar',x:px,y:y+30,width:20,radius:5});
  objects.push({id:r.id+'-lamp',kind:'lamp',x:x+w-15,y:y+h-15,width:14,radius:3});
  if(r.id==='P5')objects.push({id:'seal-obelisk',kind:'obelisk',x:x+w/2,y:y+35,width:27,radius:6});
  else objects.push({id:r.id+'-supplies',kind:'barrel',x:x+20,y:y+h-18,width:14,radius:4});
 }
 const details=id==='DG'?
  [['workbench',105,278,34],['valve',190,215,29],['shelf',360,292,32],['valve',515,220,26],['crates',935,300,26]]:
  id==='ECO1'?[['sign',180,295,20],['wheel',397,415,57],['crates',780,365,32],['workbench',870,365,34]]:
  [['workbench',140,355,38],['crates',490,235,32],['bell',777,455,44],['crates',875,470,28]];
 for(const [i,[kind,x,y,width]]of details.entries())objects.push({id:'detail-'+i,kind,x,y,width,collider:[x-width*.24,y-7,width*.48,7]});
 return {...old,theme:spec.theme,image:undefined,foreground:undefined,grid:{width,height,cell,data},objects,paths:spec.corridors.map(points=>({points,width:spec.width})),floorRects:spec.rooms.map(r=>r.rect),blockedRects:[],rooms:spec.rooms};
}
