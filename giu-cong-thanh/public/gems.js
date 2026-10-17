// All new balance values live here; combat without gems keeps its existing stats.
export const GEM_RULES={price:300,sellRatio:.7,slots:6,castleRadius:240,airRange:230,airAimWidth:12,projectileWidth:9,projectileSpeed:650,thunder:{radius:150,baseTargets:2,maxTargets:6,maxStacks:5,stackDuration:3,stun:.5,chance:.25,mageChance:.35,splash:.2,mageSplash:.5},ice:{duration:3,slow:.2,mageSlow:.3,step:.1,mageStep:.2,maxStacks:3,freeze:1,mageFreeze:3,stackDuration:3},fire:{chance:.25,duration:5,tick:1,percent:.03,magePercent:.06,bossCap:.015},poison:{maxStacks:8,percent:.01,duration:5,tick:1,bossCap:.025,poolDuration:5,poolRadius:55},dark:{penetration:.2,armorPerStack:.02,maxStacks:10,duration:5,skeletonLimit:10,skeletonDuration:30,skeletonHP:.55,skeletonArmor:.5},wind:{hastePerStack:.04,maxStacks:10,duration:5,killBonus:.005,carry:.3},armor:{bossBase:2,bossPerStage:1,normal:1.2,insane:1.55}};
export const GEMS=[
 {id:'thunder',name:'Ngọc Sấm',color:0xe7cb67,glyph:'ϟ',power:6,haste:.12,text:'Choáng 25% / Lôi Sư 35% trong 0,5s. Lan 20% / 50% Công đòn trúng. Đánh thường tăng số mục tiêu lan 2→6, nghỉ 3s mất stack.'},
 {id:'ice',name:'Ngọc Băng',color:0x91e5ff,glyph:'❄',power:7,armor:4,text:'Đòn thường và kỹ năng làm chậm chạy/tốc đánh 20% (Du Pháp 30%) trong 3s. Đòn thường tích xác suất đóng băng 10→30% (Du Pháp 20→60%).'},
 {id:'fire',name:'Ngọc Hỏa',color:0xff8b44,glyph:'♨',power:15,text:'25% gây bỏng khi đòn thường/kỹ năng trúng: 3% HP tối đa mỗi giây ×5 (Hỏa Sư 6%). Boss giới hạn 1,5% HP tối đa mỗi giây.'},
 {id:'poison',name:'Ngọc Độc',color:0x97d66a,glyph:'☠',power:6,hp:65,text:'Đòn thường và skill trực tiếp thêm độc, tối đa 8 stack chung; 1% HP tối đa/stack/giây, boss giới hạn 2,5%. Hết sau 5s. Chết để lại vệt độc 5s.'},
 {id:'dark',name:'Ngọc Hắc Ám',color:0xb696ed,glyph:'◈',power:8,lifesteal:.1,text:'Hút 10% máu, xuyên 20% giáp. Đánh boss giảm giáp chung 2%/stack, tối đa 10 stack/5s. Tự hạ quái gọi xương 30s, tối đa 10; thay con cũ nhất.'},
 {id:'wind',name:'Ngọc Gió',color:0x8be4cf,glyph:'≋',power:5,haste:.14,text:'Đánh thường +4% tốc đánh/stack, tối đa 10/5s. Tự hạ quái +0,5% tốc đánh, qua map giữ 30% phần này.'}
];
export const gemById=id=>GEMS.find(g=>g.id===id);
export const gemAllowed=(p,id)=>!({tidecaller:'ice',pyromancer:'fire',stormcaller:'thunder',windblade:'wind'}[p.classId])||({tidecaller:'ice',pyromancer:'fire',stormcaller:'thunder',windblade:'wind'}[p.classId]===id);
export const equippedGem=p=>p.gemEquipped?gemById(p.gem):null;
export const nearCastle=(r,p,map)=>p.hp>0&&['lobby','prepare','battle','clear'].includes(r.phase)&&Math.hypot(p.x-map.base.x,p.y-(map.base.y+100))<=GEM_RULES.castleRadius;
export const gemStats=p=>{const g=equippedGem(p);return {power:g?.power||0,hp:g?.hp||0,armor:g?.armor||0,lifesteal:g?.lifesteal||0,haste:(g?.haste||0)+(g?.id==='wind'?(p.windStacks||0)*GEM_RULES.wind.hastePerStack+(p.windPermanent||0):0)};};
