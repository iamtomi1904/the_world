export const DIFFICULTIES={
 easy:{name:'Dễ',health:1,damage:1,count:1,text:'Giữ nguyên 10 map hiện tại và chỉ số quái hiện tại.'},
 normal:{name:'Normal',health:1.35,damage:1.2,count:1.3,text:'Quái +35% máu, +20% sát thương, số lượng mỗi đợt tăng khoảng 30%.'},
 insane:{name:'Insane',health:1.9,damage:1.55,count:1.65,text:'Quái +90% máu, +55% sát thương, số lượng mỗi đợt tăng khoảng 65%.'},
};
export const difficultyOf=id=>DIFFICULTIES[id]||DIFFICULTIES.easy;
export const difficultyId=id=>Object.hasOwn(DIFFICULTIES,id)?id:'easy';
