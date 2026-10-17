export const FOREST_RELICS=[
 {id:'power',name:'Nanh mãnh thú',color:0xffad78,glyph:'sword',stat:'power',gain:2,label:'+2 Công',text:'Tăng vĩnh viễn 2 Công trong chiến dịch.'},
 {id:'health',name:'Mầm sinh lực',color:0x7be795,glyph:'heart',stat:'healthRegen',gain:.3,label:'+0,3 hồi máu/giây',text:'Tăng vĩnh viễn 0,3 hồi máu mỗi giây trong chiến dịch.'},
 {id:'mana',name:'Tinh hoa mana',color:0x84cfff,glyph:'mana',stat:'manaRegen',gain:.3,label:'+0,3 hồi mana/giây',text:'Tăng vĩnh viễn 0,3 hồi năng lượng mỗi giây trong chiến dịch.'},
 {id:'armor',name:'Mảnh giáp cổ',color:0xf0d48c,glyph:'shield',stat:'armor',gain:.4,label:'+0,4 Giáp',text:'Tăng vĩnh viễn 0,4 Giáp trong chiến dịch.'},
 {id:'haste',name:'Lông gió',color:0xc8a5ff,glyph:'haste',stat:'haste',gain:.015,label:'+1,5% tốc đánh',text:'Tăng vĩnh viễn 1,5% tốc đánh trong chiến dịch.'},
];
export const CONSUMABLES=FOREST_RELICS;
export const itemById=id=>FOREST_RELICS.find(i=>i.id===id);
