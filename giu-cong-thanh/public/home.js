import {HEROES} from './content.js';
import {CLASSES} from './skills.js';
const descriptions={darkelf:'Tên xuyên đêm, nguyệt thực và tinh linh cây đồng hành.',assassin:'Song đao, ẩn thân và lướt chém; tương tác đủ sáu loại ngọc.',guardian:'Giữ tuyến, tạo khiên và bảo vệ đồng đội.',berserker:'Cận chiến mạnh mẽ, cường hóa và hút máu.',duelist:'Đòn đánh nhanh, lướt chém và kiếm vũ.',ranger:'Tấn công tầm xa, tên độc và mưa tên.',pyromancer:'Thiêu đốt, tạo biển lửa và gọi thiên thạch.',stormcaller:'Sét nảy, lôi kích và vùng sấm sét.',tidecaller:'Hồi máu, làm chậm và kiểm soát bằng băng.'};
for(const [id,c]of Object.entries(CLASSES)){
 const hero=HEROES.find(h=>h.classId===id),card=document.createElement('a');card.className='class-card';card.href='/defense.html#selection';card.style.setProperty('--class-color',c.color);
 const portrait=document.createElement('div');portrait.className='class-portrait';const img=new Image();img.src='/assets/v2/'+hero.id+'/portrait.png';img.alt=hero.name;img.loading='lazy';portrait.append(img);
 const name=document.createElement('h3');name.textContent=c.name;const text=document.createElement('p');text.textContent=descriptions[id];const number=document.createElement('span');number.className='hero-count';number.textContent=HEROES.filter(h=>h.classId===id).length+' hero · Q / E / R';
 card.append(portrait,name,text,number);document.getElementById('class-grid').append(card);
}
