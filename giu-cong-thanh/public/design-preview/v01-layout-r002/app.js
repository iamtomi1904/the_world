const $=s=>document.querySelector(s),spots=[
['wall','Vành lũy',46,5,'Lõi Ẩn Thành chưa mở. Cổng đẹp trên ảnh không phải quyền vào nội thành.'],
['forest','Lán rừng',9,21,'Vaela và nhánh đường cọc. Đường chính tránh đầu đàn, không mọi cụm cây đều có quái.'],
['camp','Trại Bình Minh',37,49,'Sáu cư dân hub, năm cụm nhà/lều minh họa. Ghi danh/chỉ huy có thể chung cụm, không đếm số mái thành số NPC.'],
['west','Đi Valedorn',7,45,'Hướng Tây đúng địa lý. Sau M04 có lối đi bộ; chưa viết hoặc dựng map2.'],
['sample','Trạm suối',48,32,'Nền khô cho lấy mẫu, có cầu/đường khô thay lội. Không đặt mục tiêu dưới nước sâu.'],
['eco1','Hốc Rễ',56,25,'Hầm khám phá ECO01:3khoảng khô, không boss; rương07 nằm trong ngân sách8.'],
['bridge','Cầu Sỏi',69,49,'Mặt qua sông sâu. Cần kiểm mặt đi, mép va chạm và hai đầu cầu bằng greybox.'],
['bell','Sân Chuông',86,34,'Halen/LEG01–02, nhà trực và sân nghỉ. Không boss giữa điểm đọc lore.'],
['dg','Cửa phó bản',82,20,'DG-V01-01, sáu phòng/1boss Oren. Pin là cửa ngoài trời, không toàn bộ footprint instance.'],
['eco2','Kho Vôi',94,51,'Hầm khám phá ECO02,3khoảng, không boss. Lối tự chọn không khóa đường DG.'],
['boss','Lãnh địa boss',92,11,'Đối đầu ngoài trời khác Oren; đường vào DG phải tránh vùng đuổi boss.'],
['intro','Làng Đá Đèn',17,84,'L01–L03 lớp mở đầu riêng. Mái/cảnh hiện tại chưa diễn tả đủ biến thể thảm họa.'],
['farm','Đồng Ruộng',53,73,'Edda, mẫu M06 và đường vòng. Bờ khô tới rương không đòi bơi/nhảy.']
];
const cells=[['A1','Rừng/nhánh đầu đàn'],['B1','Rừng nối nguồn/chân lũy'],['C1','Sông Bắc/vách'],['D1','DG và boss ngoài'],['A2','Đường Tây/rừng'],['B2','Trại và nước nguồn'],['C2','Suối/cầu đá'],['D2','Chuông/Kho Vôi'],['A3','Intro làng Đá Đèn'],['B3','Cầu Lau/ruộng'],['C3','Ruộng/bờ khô'],['D3','Biên sông/sườn']];
function show(title,text){const box=$('#detail');box.replaceChildren();const h=document.createElement('h2');h.textContent=title;const p=document.createElement('p');p.textContent=text;const note=document.createElement('p');note.className='small';note.textContent='Bố trí concept gần đúng; cần đối chiếu r001 và kiểm trong engine.';box.append(h,p,note)}
for(const [id,name,x,y,description]of spots){const p=document.createElement('button');p.className='pin';p.style.left=x+'%';p.style.top=y+'%';p.dataset.id=id;p.setAttribute('aria-label','Xem khu '+name);p.setAttribute('aria-pressed','false');const dot=document.createElement('i');dot.textContent='●';const text=document.createElement('span');text.textContent=' '+name;p.append(dot,text);p.onclick=()=>{document.querySelectorAll('.pin').forEach(n=>n.setAttribute('aria-pressed',String(n===p)));show(name,description)};$('#pins').append(p);const b=document.createElement('button');b.textContent=name;b.onclick=()=>{p.click();p.focus()};$('#list').append(b)}
for(const[id,name]of cells){const b=document.createElement('button');b.className='cell';b.setAttribute('aria-label','Ô '+id+' · '+name);const text=document.createElement('b');text.textContent=id;b.append(text);b.onclick=()=>show('Ô '+id,name+'. Đây là ô trao đổi bố trí, không ranh server hoặc chunk engine đã triển khai.');$('#grid').append(b)}
$('#labels').onchange=()=>$('#picture').classList.toggle('labels-off',!$('#labels').checked);$('#grid-toggle').onchange=()=>$('#grid').hidden=!$('#grid-toggle').checked;
