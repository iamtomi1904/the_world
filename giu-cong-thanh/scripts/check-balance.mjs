import {createRoom,addPlayer,start,buy,tick,stats,HEROES} from '../simulation.mjs';
for(const hero of HEROES){
 const r=createRoom('BALANCE'),p=addPlayer(r,{hero:hero.id});buy(r,p,'militia');buy(r,p,'militia');start(r);
 let time=0,seed=29;const random=()=>{seed=seed*16807%2147483647;return seed/2147483647;};
 while(!['defeat','clear'].includes(r.phase)&&time<500){
  const target=r.enemies.filter(e=>e.hp>0&&!e.neutral).sort((a,b)=>Math.hypot(a.x-p.x,a.y-p.y)-Math.hypot(b.x-p.x,b.y-p.y))[0];
  p.input={attack:true,skill:true};
  if(target){const d=Math.hypot(target.x-p.x,target.y-p.y);p.input.aimX=(target.x-p.x)/(d||1);p.input.aimY=(target.y-p.y)/(d||1);if(d>stats(p).range*.8){p.input.x=(target.x-p.x)/d;p.input.y=(target.y-p.y)/d;}}
  if(p.gold>=100&&r.troops.length<5)buy(r,p,'archer');
  if(r.gate<700&&p.gold>=75)buy(r,p,'repair');
  tick(r,.1,random);time+=.1;
 }
 console.log(`${hero.id}: ${r.phase}, wave ${r.wave}, home ${Math.round(r.gate)}, kills ${p.kills}, ${Math.round(time)}s`);
}
