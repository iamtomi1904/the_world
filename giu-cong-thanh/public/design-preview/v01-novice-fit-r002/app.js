const $=id=>document.getElementById(id),boards={body:{src:'novices-body__r002.png',title:'Toàn thân · trước / trái / sau / phải',alt:'Ba tân binh bốn hướng, trang phục giản lược dây đeo và túi'},cap:{src:'novice-cap-fit__r001.png',title:'Mũ vải · đầu Con Người / Elf / Người Lùn',alt:'Bảng concept mũ vải trên ba chủng tộc, bốn hướng đầu'}};
function select(id){const b=boards[id];$('art').src=b.src;$('art').alt=b.alt;$('png').href=b.src;$('caption').textContent=b.title;for(const key of Object.keys(boards))$(key).setAttribute('aria-pressed',String(key===id));$('picture').classList.remove('original');$('zoom').setAttribute('aria-pressed','false');$('zoom').textContent='Xem kích thước ảnh gốc'}
for(const id of Object.keys(boards))$(id).onclick=()=>select(id);
$('zoom').onclick=()=>{const active=$('picture').classList.toggle('original');$('zoom').setAttribute('aria-pressed',String(active));$('zoom').textContent=active?'Vừa chiều rộng trang':'Xem kích thước ảnh gốc'};

function readHash(){select(location.hash==='#cap'?'cap':'body')}
addEventListener('hashchange',readHash);
readHash();
