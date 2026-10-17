import {WORLD} from './public/content.js';
const grids=new WeakMap(),routes=new WeakMap(),CELL=32;
function gridFor(map,canStand){
 if(grids.has(map))return grids.get(map);const cols=Math.ceil(WORLD.width/CELL),rows=Math.ceil(WORLD.height/CELL),open=new Uint8Array(cols*rows);
 for(let y=0;y<rows;y++)for(let x=0;x<cols;x++)open[y*cols+x]=Number(canStand(map,x*CELL+CELL/2,y*CELL+CELL/2));
 const g={cols,rows,open};grids.set(map,g);return g;
}
function nearest(g,x,y){
 const gx=Math.floor(x/CELL),gy=Math.floor(y/CELL);let best=-1,distance=Infinity;
 for(let dy=-3;dy<=3;dy++)for(let dx=-3;dx<=3;dx++){const a=gx+dx,b=gy+dy;if(a<0||b<0||a>=g.cols||b>=g.rows)continue;const i=b*g.cols+a;if(!g.open[i])continue;const d=Math.hypot(a*CELL+16-x,b*CELL+16-y);if(d<distance){best=i;distance=d;}}
 return best;
}
function findRoute(map,u,tx,ty,canStand){
 const g=gridFor(map,canStand),start=nearest(g,u.x,u.y),goal=nearest(g,tx,ty);if(start<0||goal<0||start===goal)return [];
 const previous=new Int32Array(g.open.length).fill(-1),queue=new Int32Array(g.open.length);let head=0,tail=1;queue[0]=start;previous[start]=start;
 while(head<tail&&previous[goal]<0){const current=queue[head++],x=current%g.cols,y=Math.floor(current/g.cols);
  for(const next of [x>0?current-1:-1,x<g.cols-1?current+1:-1,y>0?current-g.cols:-1,y<g.rows-1?current+g.cols:-1])if(next>=0&&g.open[next]&&previous[next]<0){previous[next]=current;queue[tail++]=next;}
 }
 if(previous[goal]<0)return [];const result=[];let cursor=goal;
 while(cursor!==start){result.push({x:(cursor%g.cols)*CELL+16,y:Math.floor(cursor/g.cols)*CELL+16});cursor=previous[cursor];}result.reverse();return result;
}
export function navigate(u,tx,ty,speed,dt,map,move,canStand){
 let route=routes.get(u);if(route){route.age+=dt;if(route.age>2||Math.hypot(tx-route.tx,ty-route.ty)>75){routes.delete(u);route=null;}}
 if(route?.points.length){const p=route.points[0];move(u,p.x,p.y,speed,dt,map);if(Math.hypot(u.x-p.x,u.y-p.y)<8)route.points.shift();return;}
 const x=u.x,y=u.y;move(u,tx,ty,speed,dt,map);
 if(Math.hypot(u.x-x,u.y-y)<speed*dt*.3&&Math.hypot(u.x-tx,u.y-ty)>20){const points=findRoute(map,u,tx,ty,canStand);if(points.length)routes.set(u,{points,tx,ty,age:0});}
}
