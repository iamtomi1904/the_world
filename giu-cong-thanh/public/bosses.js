import {ENEMY_FAMILIES} from './enemy-families.js';
export const BOSSES=[
 ['Lang Vương Biên Giới','wolf'],['Xà Vương Lâm Địa','serpent'],['Nữ Vương Harpy','harpy'],['Cự Thạch Phế Tích','stone'],['Vua Tử Linh','undead'],['Hỏa Long','dragon'],['Độc Xà Cổ Đại','serpent'],['Lang Vương Thạch Anh','wolf'],['Bạo Chúa Bất Tử','undead'],['Hắc Long Vĩnh Dạ','dragon'],
].map(([name,family])=>({name,family,actor:'lord-'+family,art:'lord-'+family,color:ENEMY_FAMILIES[family].color,skill:ENEMY_FAMILIES[family].skills[0],skills:ENEMY_FAMILIES[family].skills}));

