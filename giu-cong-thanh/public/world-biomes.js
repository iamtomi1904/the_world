import {inCastleCourt} from './castle-court.js';
import {zoneContains} from './terrain-grid.js';
import {habitatProps} from './habitat-props.js';
import {createLandscape,waterAt} from './landscape-layout.js';
import {FOREST_LEADERS} from './forest-leaders.js';
export const BOSS_DISPLAY_SCALE=1.5;
export const leaderCount=stage=>Math.min(4,1+Math.floor((stage-1)/3));
export const mapExpansion=stage=>stage<=3?2:stage<=6?3:4;
export const BIOMES={
 mountain:{name:'Núi đá',color:0x7b8179,blocked:true},high:{name:'Gò cao',color:0x829257},low:{name:'Vùng trũng',color:0x59664b},
 deep:{name:'Sông sâu',color:0x245576,blocked:true},
 shallow:{name:'Suối cạn',color:0x67b7bd,speed:.9},
 ice:{name:'Băng giá',color:0xa5d9eb,speed:.65,attackSpeed:.75},
 lava:{name:'Dung nham',color:0xd65b32,burn:.03},
 fire:{name:'Lửa',color:0xf19e42,burn:.02},
 wind:{name:'Gió',color:0xa7d8c5,speed:1.2,flyingPower:1.25},
 dense:{name:'Rừng rậm',color:0x335b35,forestPower:1.25},
 dead:{name:'Đất chết',color:0x6f5279,armor:.75},
};
export function biomeAt(map,u){if(inCastleCourt(map,u))return null;const water=waterAt(map,u);if(water)return water;return (map.environment||[]).find(z=>zoneContains(z,u))||null;}
export function terrainModifiers(map,u){const z=biomeAt(map,u),b=BIOMES[z?.type]||{};if(u.flying)return {speed:b.speed>1?b.speed:1,attackSpeed:1,power:b.flyingPower||1,armor:1,burn:0,type:z?.type};return {speed:b.speed||1,attackSpeed:b.attackSpeed||1,power:u.neutral?(b.forestPower||1):1,armor:b.armor||1,burn:b.burn||0,type:z?.type};}
const pointDistance=(x,y,a,b)=>{const dx=b[0]-a[0],dy=b[1]-a[1],t=Math.max(0,Math.min(1,((x-a[0])*dx+(y-a[1])*dy)/(dx*dx+dy*dy||1)));return Math.hypot(x-a[0]-dx*t,y-a[1]-dy*t);};
export function expandBattlefield(m){const scale=mapExpansion(m.id),pos=p=>({...p,x:Math.round(p.x*scale),y:Math.round(p.y*scale)}),base=pos(m.base),lanes=m.lanes.map(l=>l.map(([x,y],i)=>i===l.length-1?[base.x,base.y+110]:i===l.length-2?[base.x,base.y+175]:[x*scale,y*scale])),camps=m.camps.map(pos),count=leaderCount(m.id),defs=Array.from({length:count},(_,i)=>FOREST_LEADERS[(m.id-1+i)%4]),territories=defs.map((def,i)=>({...camps[i],leaderId:def.id,name:def.name,family:def.family,color:def.color,radius:480+scale*60}));
 // Habitat patches are centered on actual monster camps rather than scattered at random.
 const habitat={dragon:'dense',harpy:'wind',undead:'dead',serpent:'dense',wolf:m.id===6?'ice':'dense',stone:'high'},environment=camps.map((camp,i)=>{const territory=territories.find(t=>t.id===camp.id),family=territory?.family||camp.family;return {id:'habitat-'+camp.id,type:habitat[family]||'dense',family,campId:camp.id,x:camp.x,y:camp.y,rx:territory?territory.radius*.9:300,ry:territory?territory.radius*.7:230};});
 const props=m.props.map(pos);
 for(let n=0;n<220*scale;n++){const x=50+((n*1237+m.id*197)%Math.floor(1920*scale-100)),y=80+((n*733+m.id*317)%Math.floor(1280*scale-160));if(Math.hypot(x-base.x,y-base.y)<350||lanes.some(l=>l.some((p,k)=>k&&pointDistance(x,y,l[k-1],p)<115))||m.forestPaths.some(l=>pointDistance(x,y,[l[0][0]*scale,l[0][1]*scale],[l[1][0]*scale,l[1][1]*scale])<50))continue;const source=m.props[n%m.props.length];props.push({...source,id:'expanded-'+n,x,y});}
 const expanded={...m,width:1920*scale,height:1280*scale,expansion:scale,riverY:m.id>=2?(740+(m.id%3)*70)*scale:null,base,lanes,camps,territories,environment,props,flowers:m.flowers.map(pos),fortifications:m.fortifications.map(p=>({...p,x:base.x+(p.x-m.base.x),y:base.y+(p.y-m.base.y)})),forestPaths:m.forestPaths.map(l=>l.map(([x,y])=>[x*scale,y*scale])),description:m.description+' · '+count+' lãnh địa thủ lĩnh.'};expanded.environment=expanded.environment.filter(z=>!['deep','shallow'].includes(z.type));const landscape=createLandscape(expanded);expanded.rivers=landscape.rivers;expanded.bridges=landscape.bridges;expanded.environment.push(...landscape.relief);expanded.props=expanded.props.filter(p=>!inCastleCourt(expanded,p)&&!waterAt(expanded,p)&&!landscape.relief.some(z=>z.type==='mountain'&&zoneContains(z,p))&&Math.hypot(p.x-base.x,p.y-base.y)>300&&!lanes.some(l=>l.some((v,k)=>k&&pointDistance(p.x,p.y,l[k-1],v)<85))&&!camps.some(c=>Math.hypot(p.x-c.x,p.y-c.y)<110));expanded.props.push(...habitatProps(expanded));return expanded;
}
export const LEADER_BLESSINGS={
 'forest-dragon':{name:'Bùa Đại Ngàn',color:0x8edc78,powerMultiplier:.12,leaderRegen:.005},
 'forest-harpy':{name:'Bùa Nữ Hoàng',color:0xd4b0f5,speed:.15,haste:.1},
 'forest-orc':{name:'Bùa Tù Trưởng',color:0xe3b66e,powerMultiplier:.18,armor:4},
 'forest-undead':{name:'Bùa Kỵ Sĩ Xương',color:0xbca1ed,lifesteal:.08,armor:3},
};
export const BLESSING_DURATION=120;
