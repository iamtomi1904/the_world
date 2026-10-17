const distance=(a,b)=>Math.hypot(a[0]-b[0],a[1]-b[1]);
function project(p,a,b){const dx=b[0]-a[0],dy=b[1]-a[1],t=Math.max(0,Math.min(1,((p[0]-a[0])*dx+(p[1]-a[1])*dy)/(dx*dx+dy*dy||1)));return [a[0]+dx*t,a[1]+dy*t];}
export function warLayout(base,index){
 const xs=[90,500,960,1420,1830],ys=[110,430,800,1160],nodes=[];
 const blocked=([x,y])=>x>base[0]-215&&x<base[0]+215&&y>base[1]-275&&y<base[1]+100;
 for(let row=0;row<ys.length;row++)for(let col=0;col<xs.length;col++){const p=[xs[col],ys[row]];if(!blocked(p))nodes.push({col,row,p});}
 const edgeSafe=(a,b)=>{const steps=Math.ceil(distance(a,b)/20);for(let n=0;n<=steps;n++){if(blocked([a[0]+(b[0]-a[0])*n/steps,a[1]+(b[1]-a[1])*n/steps]))return false;}return true;};
 const nearest=p=>[...nodes].sort((a,b)=>distance(a.p,p)-distance(b.p,p))[0];
 const exit=[...nodes].filter(n=>n.p[1]>base[1]+110).sort((a,b)=>distance(a.p,[base[0],base[1]+175])-distance(b.p,[base[0],base[1]+175]))[0];
 function route(from,to,variant){
  const queue=[from],came=new Map([[from,null]]);
  for(let n=0;n<queue.length;n++){const a=queue[n];if(a===to)break;const directions=variant%2?[[0,1],[-1,0],[1,0],[0,-1]]:[[1,0],[0,-1],[-1,0],[0,1]];
   for(const [dx,dy]of directions){const b=nodes.find(b=>b.col===a.col+dx&&b.row===a.row+dy);if(b&&!came.has(b)&&edgeSafe(a.p,b.p)){came.set(b,a);queue.push(b);}}
  }
  if(!came.has(to))throw Error('Map graph disconnected');
  const result=[];for(let p=to;p;p=came.get(p))result.unshift(p.p);return result;
 }
 const gatePoints=[[90,1160],[1830,1160],[90,430],[1830,430],[960,110],[90,110],[1830,110]],hubs=[[500,800],[1420,800],[960,1160],[500,430],[1420,430]];
 const lanes=gatePoints.slice(0,Math.min(7,3+Math.floor(index/2))).map((point,n)=>{
  const start=nearest(point),hub=nearest(hubs[(n+index)%hubs.length]),raw=[...route(start,hub,index+n),...route(hub,exit,index+n+1).slice(1)],path=[];
  for(const p of raw){const old=path.findIndex(q=>q===p);if(old>=0)path.splice(old+1);else path.push(p);}
  path.push([base[0],base[1]+175],[base[0],base[1]+110]);return path;
 });
 const candidates=[[300,615],[730,615],[1190,615],[1630,615],[300,975],[730,975],[1190,975],[1630,975]];
 const families=['wolf','serpent','undead','harpy','stone','dragon'];
 const camps=candidates.filter(p=>distance(p,base)>370&&lanes.every(l=>l.every((b,n)=>!n||distance(p,project(p,l[n-1],b))>130))).slice(0,6).map((p,n)=>({id:'camp-'+n,x:p[0],y:p[1],family:families[(n+index)%6],radius:95}));
 const forestPaths=camps.map(c=>{const from=[c.x,c.y],ends=lanes.flatMap(l=>l.slice(1).map((b,n)=>project(from,l[n],b)));return [from,ends.sort((a,b)=>distance(from,a)-distance(from,b))[0]];});
 return {lanes,camps,forestPaths};
}
