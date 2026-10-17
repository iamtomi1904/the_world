export function enemyFamily(u){
 if(u.hero||u.type)return null;if(u.family)return u.family;
 const id=u.sprite||u.id||'';
 if(/dragon|fire|red-slime|wild-slime-3/.test(id))return 'dragon';
 if(/vampire|skeleton|undead|shaman/.test(id)||u.special==='drain')return 'undead';
 if(/snake|serpent|plent|green-slime|wild-slime/.test(id)||u.special==='venom')return 'serpent';
 if(/stone|golem|orc/.test(id)||u.special==='slam')return 'stone';
 if(u.flying||/harpy|crow|bee/.test(id))return 'harpy';
 return 'wolf';
}
