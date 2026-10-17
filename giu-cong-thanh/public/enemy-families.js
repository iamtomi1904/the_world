export const ENEMY_FAMILIES={
 dragon:{name:'Rồng',color:0xffa66b,skills:['dragon-breath','meteor','wing-gust','dragon-brood','inferno']},
 undead:{name:'Undead',color:0xb1a0ed,skills:['soul-bolt','grave-bind','raise-dead','life-drain','bone-cage']},
 serpent:{name:'Rắn',color:0xaadd6d,skills:['poison-spit','venom-trail','constrict','shed-skin','venom-nova']},
 wolf:{name:'Sói',color:0xa8dff4,skills:['pounce','wolf-howl','frost-fang','claw-sweep','wolf-frenzy']},
 harpy:{name:'Harpy',color:0xd6b2f4,skills:['feather-fan','wind-shear','sky-dive','storm-call','harpy-brood']},
 stone:{name:'Quái đá',color:0xdfc397,skills:['ground-slam','rock-line','stone-armor','crystal-ring','earth-shatter']},
};
export const FAMILY_MONSTERS=[
 {id:'mob-dragon',family:'dragon',name:'Ấu long lục',hp:160,power:24,speed:70,range:165,cooldown:1.6,reward:36,unlock:5,size:53,flying:true,altitude:38,attackFx:'fire',special:'firebreath'},
 {id:'mob-undead',family:'undead',name:'Tử binh',hp:115,power:19,speed:64,range:46,cooldown:1.1,reward:24,unlock:2,size:45,attackFx:'blood',special:'drain'},
 {id:'mob-serpent',family:'serpent',name:'Rắn độc lục',hp:95,power:16,speed:82,range:115,cooldown:1.4,reward:23,unlock:2,size:37,attackFx:'poison',special:'venom'},
 {id:'mob-wolf',family:'wolf',name:'Sói xám',hp:85,power:16,speed:106,range:40,cooldown:.9,reward:20,unlock:1,size:40,attackFx:'wind',special:'charge'},
 {id:'mob-harpy',family:'harpy',name:'Harpy săn mồi',hp:105,power:19,speed:90,range:43,cooldown:1.2,reward:28,unlock:3,size:46,flying:true,altitude:36,attackFx:'wind',special:'dive'},
 {id:'mob-stone',family:'stone',name:'Thạch vệ',hp:260,power:26,speed:42,range:54,cooldown:1.5,reward:35,unlock:4,size:54,attackFx:'earth',special:'slam'},
];
