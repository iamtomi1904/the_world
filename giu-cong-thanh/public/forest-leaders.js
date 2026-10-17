export const FOREST_LEADER_RULES={hp:620,hpPerStage:150,healthPerWave:.25,power:22,powerPerStage:3,powerPerWave:.12,coopHealth:.75,armor:5,armorPerStage:1,leash:310,aggro:155,reward:100,rewardPerStage:20};
export const FOREST_LEADERS=[
 {id:'forest-dragon',name:'Rồng Đại Ngàn',family:'dragon',color:0x8edc78,range:135,speed:48,cooldown:1.7,skills:['forest-breath','forest-gust','forest-thorns'],look:'Vảy ngọc, sừng gỗ và đôi cánh phủ lá.',basic:'Phun long tức xanh vào mục tiêu gần.',lore:'Cổ long canh giữ mạch sống của rừng.'},
 {id:'forest-harpy',name:'Nữ Hoàng Harpy',family:'harpy',color:0xd4b0f5,range:120,speed:76,cooldown:1.3,skills:['queen-feathers','queen-dive','queen-storm'],look:'Vương miện vàng, cánh tím bạc và vuốt sắc.',basic:'Phóng lông vũ sắc như dao.',lore:'Nữ chúa thống trị những tán cây cao.'},
 {id:'forest-orc',name:'Orc Tù Trưởng',family:'stone',color:0xe3b66e,range:65,speed:54,cooldown:1.6,skills:['chief-smash','chief-fissure','chief-rage'],look:'Giáp sắt, cờ chiến đỏ và đại chùy nặng.',basic:'Vung chùy nện kẻ địch trước mặt.',lore:'Thủ lĩnh bộ tộc chiếm giữ những lối mòn cổ.'},
 {id:'forest-undead',name:'Kỵ Sĩ Xương',family:'undead',color:0xbca1ed,range:65,speed:62,cooldown:1.4,skills:['knight-soul','knight-grave','knight-drain'],look:'Giáp cổ đen, mắt lửa tím và kiếm linh hồn.',basic:'Chém kiếm hồn ở cự ly gần.',lore:'Người gác mộ vẫn giữ lời thề sau khi chết.'},
];
const spell=(name,shape,extra)=>({name,shape,delay:1.25,radius:115,mult:1.4,...extra});
export const FOREST_LEADER_SKILLS={
 'forest-breath':spell('Long Tức Đại Ngàn','cone',{length:250,angle:Math.PI/2,slow:.25,slowTime:2}),
 'forest-gust':spell('Cánh Rừng Cuồng Phong','line',{length:300,width:95,knockback:65,mult:1.1}),
 'forest-thorns':spell('Gai Cổ Thụ','circle',{radius:120,duration:2.4,mult:.7,slow:.35,slowTime:2}),
 'queen-feathers':spell('Vũ Tiễn Nữ Hoàng','cone',{length:280,angle:Math.PI*.65}),
 'queen-dive':spell('Thiên Kích','circle',{radius:95,dash:true,mult:1.7}),
 'queen-storm':spell('Bão Lông Bạc','multi',{radius:75,spread:110,mult:1.3}),
 'chief-smash':spell('Chùy Chấn Địa','circle',{radius:125,knockback:45,mult:1.6}),
 'chief-fissure':spell('Xé Đất','line',{length:280,width:90,slow:.4,slowTime:2}),
 'chief-rage':spell('Cuồng Nộ Tù Trưởng','self',{frenzy:5,mult:0}),
 'knight-soul':spell('Kiếm Hồn','line',{length:270,width:80,mult:1.6}),
 'knight-grave':spell('Mộ Trói','circle',{radius:105,slow:.6,slowTime:2.5}),
 'knight-drain':spell('Hút Sinh Lực','circle',{radius:130,drain:.4,mult:1.4}),
};
