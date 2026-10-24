export const treeRigs={
  oak:{trunkWidth:.46,trunkSocket:.25,crownSocket:.75},
  birch:{trunkWidth:.40,trunkSocket:.26,crownSocket:.85},
  willow:{trunkWidth:.45,trunkSocket:.30,crownSocket:.56},
  orchard:{trunkWidth:.48,trunkSocket:.28,crownSocket:.82}
} as const;
export type TreeKind=keyof typeof treeRigs;
export interface TreeSockets {trunk:{x:number;y:number};crown:{x:number;y:number}}
export function treeLayout(kind:TreeKind,width:number,trunkAspect:number,crownAspect:number,sockets?:TreeSockets){
  const rig=treeRigs[kind],trunkWidth=width*rig.trunkWidth,trunkHeight=trunkWidth*trunkAspect;
  const trunkSocket=sockets?.trunk||{x:.5,y:rig.trunkSocket},crownSocket=sockets?.crown||{x:.5,y:rig.crownSocket};
  const socketX=(trunkSocket.x-.5)*trunkWidth,socketY=-trunkHeight*(1-trunkSocket.y),crownHeight=width*crownAspect;
  return{trunkWidth,trunkHeight,socketX,socketY,crownSocketX:crownSocket.x,crownSocket:crownSocket.y,crownHeight,
    top:Math.min(-trunkHeight,socketY-crownHeight*crownSocket.y),
    bottom:Math.max(0,socketY+crownHeight*(1-crownSocket.y))};
}
