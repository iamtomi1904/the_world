const $=id=>document.getElementById(id), norm=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').toLowerCase();
let rows=[];
function option(select,text){const o=document.createElement('option');o.value=text;o.textContent=text;select.append(o)}
function text(tag,value,cls){const el=document.createElement(tag);el.textContent=value;if(cls)el.className=cls;return el}
function render(){const q=norm($('search').value.trim()),group=$('group').value,area=$('area').value,priority=$('priority').value;
const result=rows.filter(r=>(!q||norm([r.id,r.name,r.parts,r.rule,r.variants,r.group,...r.areas].join(' ')).includes(q))&&(!group||r.group===group)&&(!priority||r.priority===priority)&&(!area||r.areas.includes(area)||r.areas.includes('Dùng chung')));
$('count').textContent=`${result.length} / ${rows.length} họ asset · Chưa sản xuất native`;$('cards').replaceChildren();
if(!result.length){$('cards').append(text('p','Không có mục phù hợp. Hãy đổi hoặc xóa bộ lọc.','empty'));return}
for(const r of result){const c=text('article','','card');c.dataset.id=r.id;c.append(text('span',`${r.id} · ${r.group}`,'tag'),text('h2',r.name),text('p',`${r.priority} · ${r.form}`,'priority'),text('p',r.areas.join(' · '),'meta'),text('p',r.parts),text('p',r.pipeline,'meta'));const details=document.createElement('details');details.append(text('summary','Biến thể và quy tắc'),text('p',r.variants),text('p',r.rule));c.append(details,text('p',r.status,'status'));$('cards').append(c)}}
for(const id of ['search','group','area','priority'])$(id).addEventListener(id==='search'?'input':'change',render);
$('reset').onclick=()=>{for(const id of ['search','group','area','priority'])$(id).value='';render()};
try{const r=await fetch('catalog.json');if(!r.ok)throw Error('HTTP '+r.status);rows=(await r.json()).rows;for(const g of [...new Set(rows.map(r=>r.group))])option($('group'),g);for(const a of [...new Set(rows.flatMap(r=>r.areas))].sort((a,b)=>a.localeCompare(b,'vi')))option($('area'),a);render()}catch(e){$('count').textContent='Không tải được danh mục: '+e.message}
