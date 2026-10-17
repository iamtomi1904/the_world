// Campaign upgrades; prices and increments are shared by server and UI.
export const SKILL_PROGRESSION={unlockStage:5,earlyCap:3,Q:10,E:10,R:6};
export const UPGRADES={
 armor:{name:'Giáp +2',field:'upArmor',amount:2,base:100,step:40,icon:'shield'},
 haste:{name:'Tốc đánh +5%',field:'upHaste',amount:.05,base:100,step:40,icon:'boots'},
 'troop-power':{name:'Lính: Công +10%',field:'power',amount:.10,base:120,step:60,icon:'sword',troop:true},
 'troop-armor':{name:'Lính: Giáp +2',field:'armor',amount:2,base:120,step:60,icon:'shield',troop:true},
 'troop-hp':{name:'Lính: Máu +15%',field:'hp',amount:.15,base:120,step:60,icon:'heart',troop:true}
};
export function upgradeRank(p,id){const u=UPGRADES[id];return u?(u.troop?p.troopUpgrades?.[u.field]:p[u.field])||0:0;}
export function upgradePrice(p,id){const u=UPGRADES[id];return u?u.base+upgradeRank(p,id)*u.step:undefined;}
export function hiredStats(def,p){const u=p.troopUpgrades||{};return {power:def.power*(1+(u.power||0)*UPGRADES['troop-power'].amount),armor:def.armor+(u.armor||0)*UPGRADES['troop-armor'].amount,maxHp:Math.round(def.hp*(1+(u.hp||0)*UPGRADES['troop-hp'].amount))};}
