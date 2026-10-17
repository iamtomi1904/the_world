export const TERRAIN_TILE=64;
export const tileCenter=value=>Math.floor(value/TERRAIN_TILE)*TERRAIN_TILE+TERRAIN_TILE/2;
// Region membership is decided for a whole square tile, shared by art and gameplay.
export function zoneContains(z,p){const x=tileCenter(p.x),y=tileCenter(p.y);return Math.hypot((x-z.x)/z.rx,(y-z.y)/z.ry)<=1;}
export function zoneTiles(z){const cells=[];for(let y=Math.floor((z.y-z.ry)/64)*64;y<=z.y+z.ry;y+=64)for(let x=Math.floor((z.x-z.rx)/64)*64;x<=z.x+z.rx;x+=64)if(zoneContains(z,{x:x+32,y:y+32}))cells.push({x,y});return cells;}
