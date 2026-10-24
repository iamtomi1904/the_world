import {monsterPreview} from './monster-preview.js';
import {HEROES} from './content.js';
import {CLASSES} from './skills.js';
const descriptions={windblade:'Phong Kiếm Khách: Q lướt theo con trỏ, gió hộ thể và Kiếm Vực hất tung.',vanguard:'Bất Khuất: giáo và khiên, liên kích hút máu, hóa Cự Nhân 90 giây.',fallen:'Hắc Kỵ Sĩ: trảm xuyên giáp, tha hóa và chiến mã diệt vong.',paladin:'Trọng kiếm ánh sáng, aura bảo hộ và thiên mã cường hóa.',darkelf:'Tên xuyên đêm, nguyệt thực và tinh linh cây đồng hành.',assassin:'Song đao, ẩn thân và lướt chém; tương tác đủ sáu loại ngọc.',guardian:'Giữ tuyến, tạo khiên và bảo vệ đồng đội.',berserker:'Cận chiến mạnh mẽ, cường hóa và hút máu.',duelist:'Đòn đánh nhanh, lướt chém và kiếm vũ.',ranger:'Tấn công tầm xa, tên độc và mưa tên.',pyromancer:'Thiêu đốt, tạo biển lửa và gọi thiên thạch.',stormcaller:'Sét nảy, lôi kích và vùng sấm sét.',tidecaller:'Hồi máu, làm chậm và kiểm soát bằng băng.'};
for(const [id,c]of Object.entries(CLASSES)){
 const hero=HEROES.find(h=>h.classId===id),card=document.createElement('a');card.className='class-card';card.href='/defense.html#selection';card.style.setProperty('--class-color',c.color);
 const portrait=document.createElement('div');portrait.className='class-portrait';const actorId={windblade:'wind-swordsman',vanguard:'vanguard-champion',fallen:'fallen-knight',paladin:'holy-paladin'}[id];if(actorId){const canvas=document.createElement('canvas');canvas.width=220;canvas.height=155;canvas.setAttribute('aria-label',hero.name);portrait.append(canvas);fetch('/catalog-v4.json').then(r=>r.json()).then(data=>monsterPreview(canvas,actorId,data,{size:100}));}else{const img=new Image();img.src='/assets/v2/'+hero.id+'/portrait.png';img.alt=hero.name;img.loading='lazy';portrait.append(img);}
 const name=document.createElement('h3');name.textContent=c.name;const text=document.createElement('p');text.textContent=descriptions[id]||c.passive;const number=document.createElement('span');number.className='hero-count';number.textContent=HEROES.filter(h=>h.classId===id).length+' hero · Q / E / R';
 card.append(portrait,name,text,number);document.getElementById('class-grid').append(card);
}

for(const node of document.querySelectorAll('[data-hero-count]'))node.textContent=HEROES.length;for(const node of document.querySelectorAll('[data-class-count]'))node.textContent=Object.keys(CLASSES).length;

import {accountMenu} from './auth-client.js';
fetch('/api/auth/me',{credentials:'same-origin'}).then(async r=>{if(r.ok)accountMenu((await r.json()).user);else {const a=document.createElement('a');a.href='/login.html';a.textContent='Đăng nhập';a.className='nav-play';document.querySelector('header nav')?.append(a);}}).catch(()=>{});
