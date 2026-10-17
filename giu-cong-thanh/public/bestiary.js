import {BOSS_SKILLS,bossSkillCount} from './boss-skills.js';
import {ENEMY_FAMILIES,FAMILY_MONSTERS} from './enemy-families.js';
import {MONSTERS,MAPS} from './content.js';
import {BOSSES} from './bosses.js';
const $=id=>document.getElementById(id),normalize=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/gi,'d').toLowerCase();
const classes={all:'Tất cả',melee:'Cận chiến',ranged:'Đánh xa',flying:'Bay',support:'Hỗ trợ',assault:'Đột kích',drain:'Hút máu',boss:'Boss',forest:'Rừng'};
const behaviors={
 dive:['Lao xuống tấn công cận chiến, rồi tiếp tục áp sát. Bay thẳng qua vật cản.','Đánh khi quạ hạ thấp hoặc dùng đòn tầm xa.'],
 venom:['Đòn đánh lên hero gây độc trong 3 giây, mất 3 máu mỗi giây.','Giữ khoảng cách và hạ nhanh để hạn chế số lần trúng độc.'],
 charge:['Lấy đà rồi tăng tốc lao tới khi bắt được mục tiêu.','Di chuyển ngang hướng áp sát, tránh đứng chắn trực diện.'],
 drain:['Hút lại 35% sát thương thực gây ra thành máu. Đòn đặc biệt có nhịp báo trước.','Rút khỏi tầm đánh khi có cảnh báo; tránh để nó hút máu liên tục.'],
 slam:['Chuẩn bị đòn nặng rồi đánh mục tiêu trong tầm.','Rời khỏi tầm trước khi đòn chuẩn bị kết thúc.'],
 armored:['Nhiều máu, tốc độ di chuyển chậm; áp sát bằng đòn cận chiến.','Dùng sát thương duy trì và tận dụng tốc độ chậm để kéo giãn đội hình.'],
 thunder:['Bắn đạn lôi từ xa, gây áp lực lên tuyến phòng thủ.','Áp sát hoặc tập trung xạ thủ để loại khỏi tuyến sau.'],
};
const bossSkills={
 roots:['Chấn rễ gây sát thương vùng và làm chậm 1,6 giây.','Rời vòng cảnh báo trước khi rễ trồi lên.'],
 summon:['Chấn động vùng và gọi thêm ba quái hỗ trợ.','Dọn viện binh bằng kỹ năng diện rộng trước khi bị vây.'],
 slam:['Nện đất gây sát thương trong vùng bán kính 140.','Giữ đường thoát, không đứng tụ lại trong vòng báo trước.'],
 frost:['Băng chấn gây sát thương vùng và làm chậm 2,5 giây.','Di chuyển sớm để tránh bị giữ lại giữa đội quái.'],
 venom:['Độc bộc gây sát thương vùng; hero trúng đòn chịu độc 4 giây.','Né vòng đánh dấu, giữ máu trước đợt độc tiếp theo.'],
 thunder:['Lôi phạt đánh vào khu vực đã đánh dấu.','Dịch chuyển khỏi vị trí cũ trước khi sét giáng.'],
 meteor:['Thiên thạch rơi xuống vị trí đánh dấu rồi gây sát thương lớn.','Quan sát vòng cảnh báo và chạy ra ngoài trước va chạm.'],
};
function family(m){if(m.family&&ENEMY_FAMILIES[m.family])return ENEMY_FAMILIES[m.family].name;return m.id==='goblin'?'Goblin':/slime/.test(m.id)?'Slime':/orc/.test(m.id)?'Bộ tộc Orc':/vampire|skeleton/.test(m.id)?'Bất tử':m.id==='fire-spirit'?'Tinh linh':m.id==='plent'?'Thực vật':'Dã thú';}
function tags(m){return [...(m.range>100?['ranged']:['melee']),...(m.flying?['flying']:[]),...(m.healer?['support']:[]),...(['charge','dive'].includes(m.special)||m.speed>=85?['assault']:[]),...(m.special==='drain'?['drain']:[])];}
function description(m){
 if(m.healer)return ['Mỗi 4 giây hồi 25 máu cho các quái còn sống trong bán kính 150.','Ưu tiên hạ pháp sư để ngăn đội quái được hồi máu.'];
 if(behaviors[m.special])return behaviors[m.special];
 if(m.splash)return ['Đòn đánh gây sát thương lan lên đồng minh gần mục tiêu.','Giãn đội hình và dùng lính đỡ đòn để hạn chế sát thương lan.'];
 return m.range>100?['Đánh từ xa, giữ áp lực khi tiếp cận thành.','Áp sát hoặc dùng đòn tầm xa để xử lý tuyến sau.']:['Tiến quân theo đường bộ và đánh mục tiêu gần trong tầm.','Chặn bằng lính giữ tuyến; dùng đòn quét khi chúng tụ lại.'];
}
const regular=[...MONSTERS].sort((a,b)=>a.unlock-b.unlock||a.name.localeCompare(b.name,'vi')).map(m=>{const [behavior,tip]=description(m);return {...m,key:m.id,actor:m.id,family:family(m),tags:tags(m),behavior,tip,statLabel:'Chỉ số gốc'};});
const bosses=BOSSES.map((b,i)=>{const stage=i+1,map=MAPS[i],behavior=b.skills.slice(0,bossSkillCount(stage)).map(id=>BOSS_SKILLS[id].name).join(' · '),tip='Né vùng báo trước; vòng tròn rỗng chỉ gây sát thương ở vành ngoài.';return {key:'boss-'+stage,name:b.name,unlock:stage,family:'Thủ lĩnh · '+map.name,tags:['boss'],boss:true,actor:b.actor,hp:Math.round((90+stage*10)*map.healthScale*1.2*5),power:Math.round((10+stage*2)*map.damageScale*1.6),reward:456,speed:Math.round((48+stage)*map.speedScale),range:60,cooldown:1.5,behavior:behavior+' Báo trước 1,2 giây; dưới 40% máu dùng chiêu mỗi 5 giây.',tip,statLabel:'Boss đợt 3 · Solo'};});
const forest=[
 ...[['fox','Cáo rừng'],['hare','Thỏ rừng'],['deer','Hươu rừng']].map(([actor,name])=>({key:'forest-'+actor,actor,name,unlock:1,family:'Thú rừng · Trung lập',tags:['forest'],hp:40,power:0,reward:11,speed:90,range:0,cooldown:0,behavior:'Bỏ chạy khi bị áp sát hoặc tấn công. Máu = 35 + 5 × mốc; thưởng = 10 + mốc vàng.',tip:'Có cơ hội rơi di vật; quái canh trại luôn rơi một di vật. Nhặt để tăng thuộc tính suốt chiến dịch.',statLabel:'Ví dụ ở mốc 1'})),
 ...FAMILY_MONSTERS.map(m=>[m.id,'Trại '+m.name,1]).map(([actor,name,stage])=>({key:'camp-'+actor,actor,name,unlock:stage,family:'Quái rừng · Canh trại',tags:['forest','melee'],hp:90+stage*22,power:10+stage*2,reward:25+stage*4,speed:62,range:40,cooldown:1.3,behavior:'Phản công khi bị áp sát hoặc đánh trúng; quay về trại và hồi máu nếu bị kéo xa. Máu = 90 + 22 × mốc; thưởng = 25 + 4 × mốc vàng.',tip:'Đây là quái rừng riêng, có chỉ số khác phiên bản đi vây thành.',statLabel:'Ví dụ ở mốc '+stage})),
];
const entries=[...regular,...bosses,...forest];let active='all',paintToken=0;
$('species').textContent=MONSTERS.length;
for(let n=1;n<=10;n++){const o=document.createElement('option');o.value=n;o.textContent='Đến mốc '+n;$('stage').append(o);}
for(const [key,title]of Object.entries(classes)){const b=document.createElement('button');b.textContent=title;b.dataset.class=key;b.setAttribute('aria-pressed',key==='all');b.onclick=()=>{active=key;for(const el of $('classes').children)el.setAttribute('aria-pressed',el===b);render();};$('classes').append(b);}
const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let catalog;
function render(){
 if(!catalog)return;
 const token=++paintToken,query=normalize($('search').value),stage=$('stage').value,visible=entries.filter(m=>(active==='all'||m.tags.includes(active))&&(stage==='all'||m.unlock<=Number(stage))&&normalize([m.name,m.family,m.behavior,...m.tags.map(t=>classes[t])].join(' ')).includes(query));
 $('cards').replaceChildren();$('empty').hidden=visible.length>0;$('result-count').textContent=visible.length+' / '+entries.length+' hồ sơ';
 const sprites=[];
 for(const m of visible){
  const card=document.createElement('article');card.className='card'+(m.boss?' boss':'');card.dataset.monster=m.key;
  card.innerHTML='<div class="art-stage"><span class="stage-label">MỐC '+String(m.unlock).padStart(2,'0')+(m.boss?'':'+')+'</span><span class="tag">'+escape(m.boss?'BOSS':m.flying?'TRÊN KHÔNG':m.tags.includes('forest')?'TRONG RỪNG':'ĐƯỜNG BỘ')+'</span></div><div class="card-body"><span class="family">'+escape(m.family)+'</span><h3>'+escape(m.name)+'</h3><p class="roles">'+escape(m.tags.map(t=>classes[t]).join(' · '))+'</p><div class="stats"><span>MÁU<b>'+m.hp+'</b></span><span>CÔNG<b>'+m.power+'</b></span><span>VÀNG<b>'+m.reward+'</b></span></div><p class="behavior">'+escape(m.behavior)+'</p><p class="tip"><strong>Đối phó · </strong>'+escape(m.tip)+'</p><div class="detail-stats"><span>'+escape(m.statLabel)+'</span><span>Tốc '+m.speed+' · Tầm '+m.range+(m.cooldown?' · '+m.cooldown+'s/đòn':'')+'</span></div></div>';
  const art=card.querySelector('.art-stage');
  if(m.art){const img=new Image();img.src=m.art;img.alt=m.name;img.loading='lazy';art.append(img);}
  else {const a=catalog.actors.find(a=>a.id===m.actor);if(a){const action=m.flying?'walk':'idle',info=a.actions[action]||a.actions.idle,canvas=document.createElement('canvas');canvas.width=240;canvas.height=160;canvas.setAttribute('role','img');canvas.setAttribute('aria-label',m.name);art.append(canvas);const img=new Image();const item={canvas,img,a,info,last:-1,ready:false};img.onload=()=>{item.ready=true;draw(item,0);};img.onerror=()=>canvas.setAttribute('aria-label',m.name+' — không tải được hình');img.src=info.url;sprites.push(item);}}
  $('cards').append(card);
 }
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 function animate(time){if(token!==paintToken)return;for(const s of sprites)if(s.ready){const bounds=s.canvas.getBoundingClientRect();if(bounds.bottom>0&&bounds.top<innerHeight)draw(s,reduced?0:Math.floor(time/140)%s.info.frames);}if(!reduced)requestAnimationFrame(animate);}
 requestAnimationFrame(animate);
}
function draw(s,frame){if(s.last===frame)return;s.last=frame;const {canvas,img,a}=s,c=canvas.getContext('2d'),scale=64/a.bodyHeight;c.clearRect(0,0,240,160);c.imageSmoothingEnabled=false;const idx=(s.info.start||0)+frame,fh=a.frameHeight||a.frame,cols=a.sheetColumns||s.info.frames;c.drawImage(img,idx%cols*a.frame,Math.floor(idx/cols)*fh,a.frame,fh,Math.round(120-a.originX*a.frame*scale),Math.round(140-a.originY*fh*scale),a.frame*scale,fh*scale);}
$('search').addEventListener('input',()=>catalog&&render());$('stage').addEventListener('change',()=>catalog&&render());$('reset').onclick=()=>{$('search').value='';$('stage').value='all';$('classes').querySelector('[data-class="all"]').click();};
try{const response=await fetch('/catalog-v4.json');if(!response.ok)throw Error('Không tải được danh sách hình quái.');catalog=await response.json();render();}catch(error){$('load-error').textContent=error.message;$('result-count').textContent='Chưa tải được hồ sơ';}

