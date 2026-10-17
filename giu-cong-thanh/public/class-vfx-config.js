// Visual-only dimensions; never used for damage, targeting or hitboxes.
export const CLASS_VFX={
 fallen:{strike:64,slash:125,rupture:48,transform:90,revert:85},
 vanguard:{thrust:95,finisher:115,charge:100,grow:85,shrink:85,impact:45,guard:45,stomp:28},
 wind:{slash:65,dash:100,guard:48,land:140,whirl:70,lift:38}
};
export const visualRadius=(family,e)=>Math.min(e.radius||70,CLASS_VFX[family][e.action]||90);
