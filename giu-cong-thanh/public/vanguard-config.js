export const VANGUARD={
 base:{hp:240,power:34,armor:4,speed:180,range:112,cooldown:.48},speedBonus:.08,reduction:.12,lifesteal:.1,
 giant:{duration:90,hp:1.8,power:.35,armor:6,reduction:.22,lifesteal:.18,range:175,width:28,controlResist:.35,displaySize:96},
 basic:{width:17,windupFraction:.25},
 q:{range:310,duration:.34,width:30,giantWidth:50,mult:2,giantMult:1.4,decay:.1,minMultiplier:.55,endRadius:80,endMult:.45,cost:24,cooldown:9},
 e:{range:155,giantRange:195,width:18,giantWidth:27,hits:6,giantHits:9,interval:.14,mult:.42,finalMult:.85,giantMult:1.15,finalRadius:58,finalAOE:.45,heal:.1,giantHeal:.18,healCap:.08,giantHealCap:.12,cost:32,cooldown:14},
 r:{cost:60,cooldown:50},
 lore:'Chiến Tướng Bất Khuất đến từ chiến tộc coi trọng ý chí đứng vững giữa chiến trường. Khiên mở đường, trường giáo phá trận; hắn duy trì sự sống bằng chính sức mạnh tấn công.'
};
export const vanguardReduction=p=>p.classId==='vanguard'?(p.vanguardTime>0?VANGUARD.giant.reduction:VANGUARD.reduction):0;
