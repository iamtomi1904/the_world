import {VANGUARD} from './vanguard-config.js';
import {expandBattlefield} from './world-biomes.js';
import {SHADOW} from './shadow-config.js';
import {GEM_RULES} from './gems.js';
import {warLayout} from './war-map.js';
import {FAMILY_MONSTERS} from './enemy-families.js';
import {HERO_CLASS} from './skills.js';
export const WORLD={width:1920,height:1280};
export const HEROES=[
 {id:'dark-elf',name:'Dạ Tiễn',role:'Hắc tinh linh',hp:140,power:36,armor:2,speed:165,range:300,cooldown:.72,color:'#bcaddf'},
 {id:'goblin-assassin',name:'Quỷ Ảnh',role:'Sát thủ',hp:170,power:32,armor:3,speed:SHADOW.assassinSpeed,range:60,cooldown:.5,color:'#a6bf82'},
 {id:'knight-1',name:'Thiết Vệ',role:'Đỡ đòn',hp:240,power:27,armor:6,speed:145,range:66,cooldown:.62,color:'#b8c6dd'},
 {id:'knight-2',name:'Thánh Kỵ Sĩ',role:'Kỵ sĩ ánh sáng',hp:200,power:33,armor:4,speed:160,range:70,cooldown:.56,color:'#c9d9ea'},
 {id:'knight-3',name:'Hắc Kỵ Sĩ',role:'Kỵ sĩ hắc ám · Phá giáp',hp:180,power:43,armor:3,speed:150,range:72,cooldown:.72,color:'#b7acd3'},
 {id:'samurai',name:'Phong Kiếm Khách',role:'Phong hệ · Cơ động',hp:155,power:28,armor:2,speed:190,range:74,cooldown:.36,color:'#e6bfa1'},
 {id:'samurai-archer',name:'Cung Thủ',role:'Tầm xa',hp:135,power:27,armor:1,speed:175,range:230,cooldown:.62,color:'#a9d0a0'},
 {id:'samurai-commander',name:'Kiếm Chủ',role:'Sát thương',hp:185,power:40,armor:3,speed:170,range:85,cooldown:.64,color:'#d1b8db'},
 {id:'fire-wizard',name:'Hỏa Sư',role:'Pháp thuật lan',hp:130,power:40,armor:1,speed:150,range:200,cooldown:.9,splash:55,color:'#f4a86a'},
 {id:'lightning-mage',name:'Lôi Sư',role:'Pháp thuật nhanh',hp:125,power:30,armor:1,speed:165,range:210,cooldown:.48,color:'#a0d9f3'},
 {id:'wanderer-magican',name:'Du Pháp',role:'Pháp thuật lan',hp:150,power:35,armor:2,speed:165,range:180,cooldown:.75,splash:40,color:'#c3a6ed'},
 {id:'warrior-1',name:'Chiến Binh',role:'Cận chiến',hp:205,power:36,armor:3,speed:160,range:72,cooldown:.58,color:'#e5b795'},
 {id:'warrior-2',name:'Cuồng Chiến',role:'Đánh mạnh',hp:175,power:49,armor:1,speed:165,range:77,cooldown:.8,color:'#e7a3a0'},
 {id:'warrior-3',name:'Chiến Tướng Bất Khuất',role:'Tiên phong · Giáo và khiên',...VANGUARD.base,color:'#cfb080'},
];
for(const hero of HEROES)hero.classId=HERO_CLASS[hero.id];
export const MONSTERS=[
 ...FAMILY_MONSTERS,
 {id:'green-slime',name:'Slime rừng',hp:48,power:9,speed:50,range:27,cooldown:1.15,reward:12,unlock:1,size:30},
 {id:'blue-slime',name:'Slime lam',hp:60,power:11,speed:65,range:28,cooldown:1.1,reward:15,unlock:2,size:32},
 {id:'red-slime',name:'Slime đỏ',hp:76,power:15,speed:58,range:30,cooldown:.9,reward:18,unlock:3,size:34},
 {id:'skeleton',name:'Bộ xương',hp:85,power:15,speed:72,range:44,cooldown:1,reward:20,unlock:2,size:43},
 {id:'orc-warrior',name:'Orc chiến binh',hp:130,power:21,speed:57,range:43,cooldown:1.1,reward:25,unlock:4,size:49},
 {id:'plent',name:'Cây độc',hp:100,power:12,speed:40,range:170,cooldown:1.4,reward:24,unlock:4,size:42,splash:28},
 {id:'orc-shaman',name:'Orc pháp sư',hp:110,power:19,speed:48,range:190,cooldown:1.5,reward:30,unlock:5,size:49,healer:true},
 {id:'fire-spirit',name:'Tinh linh lửa',hp:90,power:22,speed:85,range:155,cooldown:1.25,reward:28,unlock:6,size:39,splash:38},
 {id:'orc-berserk',name:'Orc cuồng nộ',hp:190,power:32,speed:78,range:49,cooldown:.8,reward:38,unlock:7,size:55},
 {id:'goblin',name:'Goblin đột kích',hp:55,power:12,speed:96,range:32,cooldown:.75,reward:16,unlock:1,size:33,attackFx:'wind'},
 {id:'raven',name:'Quạ bóng đêm',hp:65,power:13,speed:100,range:34,cooldown:1,reward:22,unlock:2,size:38,flying:true,altitude:34,attackFx:'shadow',special:'dive'},
 {id:'wasp',name:'Ong độc',hp:75,power:15,speed:76,range:155,cooldown:1.5,reward:26,unlock:3,size:31,flying:true,altitude:40,attackFx:'poison',special:'venom'},
 {id:'boar',name:'Lợn rừng cuồng nộ',hp:150,power:28,speed:68,range:42,cooldown:1.4,reward:28,unlock:3,size:43,special:'charge',attackFx:'earth'},
 {id:'vampire',name:'Ma cà rồng',hp:160,power:24,speed:88,range:45,cooldown:1,reward:35,unlock:5,size:45,special:'drain',attackFx:'blood'},
 {id:'orc-chief',name:'Orc thủ lĩnh',hp:260,power:30,speed:52,range:60,cooldown:1.6,reward:45,unlock:6,size:54,special:'slam',attackFx:'earth'},
 {id:'stone-beast',name:'Thú giáp đá',hp:320,power:26,speed:43,range:42,cooldown:1.25,reward:40,unlock:4,size:47,special:'armored',attackFx:'earth'},
 {id:'wild-slime-1',name:'Slime đầm lầy',hp:85,power:13,speed:60,range:32,cooldown:1.1,reward:18,unlock:2,size:34,special:'venom',attackFx:'poison'},
 {id:'wild-slime-2',name:'Slime băng',hp:115,power:17,speed:54,range:35,cooldown:1.1,reward:23,unlock:4,size:38,attackFx:'water'},
 {id:'wild-slime-3',name:'Slime hỏa ngục',hp:145,power:22,speed:65,range:38,cooldown:1,reward:28,unlock:6,size:40,attackFx:'fire'},
 {id:'vampire-2',name:'Huyết vệ',hp:220,power:28,speed:80,range:48,cooldown:1.2,reward:40,unlock:6,size:48,special:'drain',attackFx:'blood'},
 {id:'vampire-3',name:'Bá tước đêm',hp:290,power:32,speed:84,range:160,cooldown:1.7,reward:50,unlock:8,size:51,special:'drain',attackFx:'blood'},
 {id:'orc-chief-2',name:'Orc lôi thuật',hp:190,power:26,speed:50,range:195,cooldown:1.6,reward:38,unlock:7,size:51,special:'thunder',attackFx:'lightning'},
 {id:'orc-chief-3',name:'Orc đao phủ',hp:330,power:35,speed:55,range:62,cooldown:1.7,reward:48,unlock:8,size:56,special:'slam',attackFx:'earth'},
];
const infantry={hp:130,armor:2,power:16,range:54,speed:105,cooldown:.7};
export const TROOPS=[
 {id:'forest-spirit',sprite:'forest-spirit',name:'Tinh linh cây',summoned:true,cost:0,hp:SHADOW.spirit.hp,power:28,armor:SHADOW.spirit.armor,speed:SHADOW.spirit.speed,range:SHADOW.spirit.range,cooldown:SHADOW.spirit.cooldown,description:'Đồng hành 60s · Rễ Trói / Lá Xoáy / Sinh Lực'},
 {id:'gem-skeleton',sprite:'skeleton',name:'Xương đồng minh',summoned:true,cost:0,...infantry,hp:Math.round(infantry.hp*GEM_RULES.dark.skeletonHP),armor:infantry.armor*GEM_RULES.dark.skeletonArmor,description:'Triệu hồi bởi Ngọc Hắc Ám; tồn tại 30 giây'},
 {id:'militia',sprite:'soldier-1',name:'Bộ binh',cost:60,hp:130,power:16,range:54,speed:105,cooldown:.7,armor:2,description:'Chặn quái gần nhà'},
 {id:'archer',sprite:'soldier-3',name:'Xạ thủ',cost:100,hp:90,power:19,range:220,speed:88,cooldown:.85,armor:0,description:'Bắn xa hỗ trợ'},
 {id:'guard',sprite:'soldier-6',name:'Lính khiên',cost:120,hp:250,power:14,range:55,speed:85,cooldown:.85,armor:6,description:'Nhiều máu, giữ tuyến'},
 {id:'elite',sprite:'soldier-9',name:'Cận vệ',cost:180,hp:195,power:32,range:66,speed:115,cooldown:.6,armor:4,description:'Sát thương cao'},
 {id:'lancer',sprite:'soldier-2',name:'Thương binh',cost:85,hp:150,power:24,range:88,speed:105,cooldown:.8,armor:2,description:'Cận chiến tầm dài'},
 {id:'scout',sprite:'soldier-5',name:'Trinh sát',cost:110,hp:100,power:17,range:190,speed:145,cooldown:.65,armor:1,description:'Cơ động, bắn quái bay'},
 {id:'battle-mage',sprite:'soldier-4',name:'Pháp binh',cost:155,hp:105,power:30,range:210,speed:90,cooldown:1.1,armor:1,description:'Đạn phép chống quái bay'},
 {id:'medic',sprite:'soldier-7',name:'Quân y',cost:140,hp:110,power:8,range:150,speed:95,cooldown:1.5,armor:1,healer:true,description:'Hồi máu đồng minh'},
 {id:'captain',sprite:'soldier-8',name:'Đội trưởng',cost:200,hp:210,power:24,range:65,speed:100,cooldown:.75,armor:4,description:'Tăng 10% Công lính gần'},
];
const definitions=[
 ['Đồng Cỏ Biên Giới','Ba hướng tiến quân và khu săn thú. Làm quen với chiến trường.',0x6f863f,0x9c8054,['tree1','tree2','bush_simple1_1','rock1_1'],[480,100],[[[480,615],[480,400],[480,160]]]],
 ['Rừng Song Lộ','Bốn cửa tiến quân qua rừng và các nhánh cầu.',0x536e37,0x93734b,['tree1','moss_tree1','bush_simple1_1','rock2_1'],[480,100],[[[40,570],[250,480],[250,290],[480,160]],[[920,570],[710,480],[710,290],[480,160]]]],
 ['Thung Lũng Lá Đỏ','Đường vòng dài, quái nhanh hơn.',0x8e7843,0xb09058,['autumn_tree1','autumn_bush1','brown_ruins1','rock3_1'],[170,120],[[[920,580],[680,490],[440,520],[320,310],[170,180]],[[920,160],[630,230],[390,170],[170,180]]]],
 ['Phế Tích Cổ','Tàn tích chia chiến trường thành sáu ngả.',0x6f7456,0x9b9275,['blue-gray_ruins1','blue-gray_ruins2','rock4_1','moss_tree1'],[480,115],[[[45,570],[230,400],[400,360],[480,175]],[[480,615],[570,440],[480,175]],[[915,570],[760,330],[600,300],[480,175]]]],
 ['Ốc Đảo Đá','Giữ nhà giữa sa mạc và những luồng viện binh.',0xb4a264,0xcab57a,['palm_tree1_1','cactus1_1','brown_ruins2','rock5_1'],[780,115],[[[35,570],[270,470],[480,520],[680,350],[780,175]],[[40,130],[300,190],[520,280],[780,175]]]],
 ['Rừng Băng Lam','Sáu đường băng. Tinh linh lửa xuất hiện.',0xa1b9ad,0xcbd2bf,['snow_tree1','rock6_1','blue_crystal1','blue-gray_ruins1'],[480,105],[[[50,590],[210,400],[350,320],[480,165]],[[480,610],[600,430],[480,165]],[[910,590],[780,390],[640,300],[480,165]]]],
 ['Đầm Lầy Độc','Slime và cây độc bảo vệ các ngả quanh co.',0x445d46,0x78805a,['moss_tree1','green_crystal1','rock7_1','bush_blue_flowers1'],[190,115],[[[920,575],[720,490],[620,280],[390,350],[190,175]],[[920,100],[690,170],[490,100],[340,240],[190,175]],[[450,615],[350,490],[190,175]]]],
 ['Hẻm Núi Thạch Anh','Orc pháp sư và quái tinh anh áp sát từ sáu hướng.',0x666078,0x9d8b96,['violet_crystal1','blue_crystal1','rock8_1','blue-gray_ruins2'],[750,115],[[[30,580],[260,460],[500,500],[650,330],[750,175]],[[40,110],[260,230],[480,170],[750,175]],[[920,610],[840,420],[750,175]]]],
 ['Vùng Đất Tro Tàn','Đội quân cuồng nộ tràn qua rừng cháy.',0x5d5545,0x87735e,['burned_tree1','red_crystal1','brown-gray_ruins1','rock4_1'],[480,110],[[[30,590],[220,470],[350,270],[480,170]],[[930,590],[740,470],[610,270],[480,170]],[[30,100],[230,190],[480,170]],[[930,100],[730,190],[480,170]]]],
 ['Thành Trì Hắc Ám','Bảy cửa ngõ. Đánh bại Hắc Long Vĩnh Dạ.',0x3f4655,0x767086,['black_crystal1','violet_crystal1','brown-gray_ruins1','burned_tree1'],[480,250],[[[35,590],[230,480],[480,310]],[[925,590],[730,480],[480,310]],[[35,65],[250,130],[300,340],[480,310]],[[925,65],[710,130],[660,340],[480,310]]]],
];
export function distanceToSegment(x,y,a,b){const dx=b[0]-a[0],dy=b[1]-a[1];const t=Math.max(0,Math.min(1,((x-a[0])*dx+(y-a[1])*dy)/(dx*dx+dy*dy||1)));return Math.hypot(x-a[0]-t*dx,y-a[1]-t*dy);}
const themeProps=[
 ['tree1','tree2','fruit_tree1','flower_tree1','curved_tree1','chanterelles1','bush_simple1_1','bush_blue_flowers1','rock1_1','brown_ruins2'],
 ['moss_tree1','tree2','willow1','mega_tree1','living-gazebo1','bush_simple2_1','rock2_1','tree_idol_deer','beige_green_mushroom1'],
 ['autumn_tree1','autumn_tree2','autumn_bush1','brown_ruins1','brown_ruins2','rock3_1','chanterelles2'],
 ['blue-gray_ruins1','blue-gray_ruins2','blue-gray_ruins3','brown_ruins1','rock4_1','moss_tree1','tree_idol_human'],
 ['palm_tree1_1','palm_tree2_1','cactus1_1','cactus2_1','brown_ruins2','rock5_1','yellow_crystal1'],
 ['snow_tree1','snow_tree2','snow_christmass_tree1','rock6_1','blue_crystal1','white_crystal1','blue-gray_ruins1','white_tree1'],
 ['willow1','willow2','moss_tree1','luminous_tree1','green_crystal1','rock7_1','beige_green_mushroom1','ent_man','living-gazebo2'],
 ['violet_crystal1','blue_crystal1','pink_crystal1','rock8_1','blue-gray_ruins2','blue-green_balls_tree1','light_balls_tree1'],
 ['burned_tree1','burned_tree2','broken_tree1','red_crystal1','brown-gray_ruins1','rock4_1','tree_idol_dragon'],
 ['black_crystal1','violet_crystal1','brown-gray_ruins1','burned_tree1','luminous_tree1','ent_woman','tree_idol_wolf'],
];
export const FORTRESSES=[
 {name:'Thành Đồng Cỏ',tint:0xffffff,scale:1,layout:'classic',accent:0xe5c96e,ornament:'fruit_tree1',guards:2},
 {name:'Pháo Đài Lâm Vệ',tint:0xd7eed1,scale:.94,layout:'forest',accent:0x9dd889,ornament:'tree_idol_deer',guards:3},
 {name:'Thành Lá Đỏ',tint:0xffe0ba,scale:1.03,layout:'twin',accent:0xf2a975,ornament:'autumn_tree1',guards:2},
 {name:'Cổ Thành Vệ Binh',tint:0xd7d8da,scale:1.08,layout:'ruins',accent:0xbac9d8,ornament:'blue-gray_ruins3',guards:4},
 {name:'Pháo Đài Sa Mạc',tint:0xffe8b2,scale:.92,layout:'desert',accent:0xf1d389,ornament:'palm_tree1_1',guards:4},
 {name:'Thành Băng Lam',tint:0xc2e5ff,scale:1,layout:'ice',accent:0x9ddfff,ornament:'blue_crystal1',guards:4},
 {name:'Thánh Điện Rừng Độc',tint:0xc5e5b5,scale:.9,layout:'grove',accent:0xb7df7c,ornament:'luminous_tree1',guards:3},
 {name:'Thành Thạch Anh',tint:0xe4cbff,scale:1.05,layout:'crystal',accent:0xc7a1ff,ornament:'violet_crystal1',guards:4},
 {name:'Pháo Đài Tro Lửa',tint:0xe7bc9b,scale:1.02,layout:'ember',accent:0xffa968,ornament:'red_crystal1',guards:4},
 {name:'Hắc Thành Vĩnh Dạ',tint:0xb5b1d6,scale:1.1,layout:'citadel',accent:0xcc9fff,ornament:'black_crystal1',guards:6},
];
function weaveLane(points,base,phase){
 const result=[points[0]];
 for(let i=1;i<points.length;i++){
  const a=points[i-1],b=points[i],dx=b[0]-a[0],dy=b[1]-a[1],d=Math.hypot(dx,dy),strength=Math.min(95,d*.18)*(phase%2?-1:1);
  if(d>240)for(const [t,sign]of [[.25,1],[.5,-1],[.75,1]]){const x=Math.round(Math.max(50,Math.min(1870,a[0]+dx*t-dy/d*strength*sign))),y=Math.round(Math.max(55,Math.min(1230,a[1]+dy*t+dx/d*strength*sign)));if(Math.hypot(x-base[0],y-base[1])>330)result.push([x,y]);}
  result.push(b);
 }
 return result;
}
export const MAPS=definitions.map(([name,description,ground,road,palette,oldBase,oldLanes],i)=>{
 const transform=([x,y])=>[Math.round(x*2),Math.round(y*1.875+80)];
 const base=transform(oldBase),{lanes,camps,forestPaths}=warLayout(base,i);
 let seed=7919*(i+1);const random=()=>{seed=seed*16807%2147483647;return seed/2147483647;};const props=[],flowers=[];
 const themes=[...themeProps[i],...Array.from({length:4},(_,n)=>`new-bush${i+1}_${n+1}`)];
 // Dense woodland clusters and open combat clearings, with wide safe corridors along each road.
 const clusters=Array.from({length:15},()=>({x:80+random()*1760,y:80+random()*1110}));
 for(let j=0;j<1600&&props.length<230+i*8;j++){
  const cluster=clusters[j%clusters.length];
  const x=j%4===0?35+random()*1850:cluster.x+(random()-.5)*300;
  const y=j%4===0?60+random()*1160:cluster.y+(random()-.5)*240;
  if(x<30||x>1890||y<55||y>1240||Math.hypot(x-base[0],y-base[1])<280)continue;
  if(lanes.some(l=>l.some((p,k)=>k&&distanceToSegment(x,y,l[k-1],p)<105)))continue;
  if(camps.some(c=>Math.hypot(x-c.x,y-c.y)<110)||forestPaths.some(l=>distanceToSegment(x,y,l[0],l[1])<45))continue;
  if(props.some(p=>Math.hypot(x-p.x,y-p.y)<30))continue;
  const asset=themes[Math.floor(random()*themes.length)],small=/bush|mushroom|chanterelle/.test(asset);
  props.push({id:`prop-${j}`,asset,x:Math.round(x),y:Math.round(y),radius:small?0:/tree|willow|ent_|gazebo/.test(asset)?19:23,scale:.75+random()*.6});
 }
 for(let n=0;n<120;n++)flowers.push({x:30+random()*1860,y:70+random()*1160,color:[0xe8cf82,0xe3b0a3,0x8bbacb][n%3]});
 const fortifications=Array.from({length:FORTRESSES[i].guards},(_,n)=>({x:base[0]+(n%2?-1:1)*(175+Math.floor(n/4)*35),y:base[1]-25-Math.floor(n/2)*95,radius:25})).filter(o=>!lanes.some(l=>l.some((p,k)=>k&&distanceToSegment(o.x,o.y,l[k-1],p)<65)));
 return {id:i+1,name,description:lanes.length+' cửa tiến quân, nhiều đường vòng và '+camps.length+' trại rừng.',ground,road,palette:themes,fortress:FORTRESSES[i],fortifications,camps,forestPaths,base:{x:base[0],y:base[1]},lanes,props,flowers,roadTile:`Road${i%5+1}`,grassRow:i===5?2:i===6?3:i===8?1:0,waves:3,healthScale:1+i*.17,damageScale:1+i*.13,speedScale:1+i*.025,spawnCount:13+i*3};
}).map(expandBattlefield);
export const heroById=id=>HEROES.find(h=>h.id===id)||HEROES[0];
