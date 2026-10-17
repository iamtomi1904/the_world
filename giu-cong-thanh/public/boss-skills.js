import {FOREST_LEADER_SKILLS} from './forest-leaders.js';
const skill=(name,shape,extra={})=>({name,shape,delay:1.2,radius:115,mult:1.35,...extra});
export const BOSS_SKILLS={
 'dragon-breath':skill('Long tức','cone',{length:290,angle:Math.PI/2,mult:1.5,dot:4}),
 meteor:skill('Thiên thạch','circle',{radius:145,mult:2,meteor:true}),
 'wing-gust':skill('Phong áp','line',{length:380,width:100,knockback:90,mult:1.1}),
 'dragon-brood':skill('Gọi ấu long','self',{summon:'dragon',count:2,mult:0}),
 inferno:skill('Hỏa ngục','circle',{radius:180,duration:4,dot:5,mult:.7}),
 'soul-bolt':skill('Tử quang','line',{length:340,width:75,mult:1.6}),
 'grave-bind':skill('Mộ trói','circle',{radius:110,slow:.6,slowType:'physical',slowTime:2}),
 'raise-dead':skill('Gọi tử binh','self',{summon:'undead',count:3,mult:0}),
 'life-drain':skill('Hấp hồn','circle',{radius:150,drain:.5,mult:1.5}),
 'bone-cage':skill('Lồng xương','ring',{radius:190,inner:90,slow:.6,slowType:'physical',slowTime:2.5,mult:1.8}),
 'poison-spit':skill('Phun độc','circle',{radius:100,poison:4}),
 'venom-trail':skill('Đường độc','line',{length:340,width:85,duration:4,poison:3,mult:.65}),
 constrict:skill('Siết chặt','circle',{radius:95,slow:.75,slowType:'physical',slowTime:2,mult:1.6}),
 'shed-skin':skill('Lột xác','self',{heal:.12,shield:.1,mult:0}),
 'venom-nova':skill('Độc triều','ring',{radius:220,inner:65,poison:5,mult:1.7}),
 pounce:skill('Vồ mồi','circle',{radius:95,dash:true,mult:1.5}),
 'wolf-howl':skill('Tiếng tru bầy đàn','self',{summon:'wolf',count:3,mult:0}),
 'frost-fang':skill('Nanh băng','line',{length:330,width:90,slow:.5,slowType:'ice',slowTime:2.5}),
 'claw-sweep':skill('Vuốt xé','cone',{length:220,angle:Math.PI*.75,mult:1.8}),
 'wolf-frenzy':skill('Cuồng săn','self',{frenzy:5,mult:0}),
 'feather-fan':skill('Vũ tiễn','cone',{length:330,angle:Math.PI*.7,mult:1.35}),
 'wind-shear':skill('Lưỡi gió','line',{length:400,width:95,knockback:100}),
 'sky-dive':skill('Thiên kích','circle',{radius:115,dash:true,mult:1.7}),
 'storm-call':skill('Bão lông vũ','multi',{radius:90,spread:140,mult:1.45}),
 'harpy-brood':skill('Gọi đàn harpy','self',{summon:'harpy',count:2,mult:0}),
 'ground-slam':skill('Nện đất','circle',{radius:140,mult:1.55}),
 'rock-line':skill('Thạch thương','line',{length:360,width:100,mult:1.6}),
 'stone-armor':skill('Giáp thạch','self',{shield:.18,mult:0}),
 'crystal-ring':skill('Vòng tinh thạch','ring',{radius:205,inner:100,mult:1.8}),
 'earth-shatter':skill('Địa liệt','multi',{radius:100,spread:150,slow:.4,slowType:'physical',slowTime:2,mult:1.5}),
};
Object.assign(BOSS_SKILLS,FOREST_LEADER_SKILLS);
export function bossSkillCount(stage,wave=3){return Math.max(1,Math.min(5,1+Math.floor((stage-1)/2)-(wave<3?1:0)));}
export function insideBossShape(point,cast){
 const dx=point.x-cast.x,dy=point.y-cast.y,d=Math.hypot(dx,dy);
 if(cast.shape==='self')return false;
 if(cast.shape==='multi')return cast.points.some(p=>Math.hypot(point.x-p.x,point.y-p.y)<=cast.radius);
 if(cast.shape==='ring')return d<=cast.radius&&d>=(cast.inner||0);
 if(cast.shape==='line'){const along=dx*Math.cos(cast.angle)+dy*Math.sin(cast.angle),across=-dx*Math.sin(cast.angle)+dy*Math.cos(cast.angle);return along>=0&&along<=cast.length&&Math.abs(across)<=cast.width/2;}
 if(cast.shape==='cone'){const angle=Math.atan2(dy,dx)-cast.angle,delta=Math.atan2(Math.sin(angle),Math.cos(angle));return d<=cast.length&&Math.abs(delta)<=cast.arc/2;}
 return d<=cast.radius;
}
