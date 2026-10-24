// The Markdown remains the source of truth; entries contain references, not copied lore.
const clean=s=>s.replace(/\*|`|\[([^\]]+)\]\([^)]*\)/g,(_,t)=>t||'').trim();
const slug=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/gi,'d').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
export function sections(d){
 const lines=d.content.split(/\r?\n/), heads=[];let fenced=false;
 lines.forEach((line,i)=>{if(/^\s*```/.test(line)){fenced=!fenced;return}if(fenced)return;const m=/^(#{1,3})\s+(.+)$/.exec(line);if(m)heads.push({level:m[1].length,title:clean(m[2]),i,key:slug(m[2])})});
 const seen=new Map();return heads.map(h=>{const n=seen.get(h.key)||0;seen.set(h.key,n+1);const key=h.key+(n?'-'+n:'');const end=heads.find(x=>x.i>h.i&&x.level<=h.level)?.i??lines.length;return{...h,key,content:lines.slice(h.i,end).join('\n')}});
}
export function selectedContent(d,key){const all=sections(d);const found=all.find(s=>s.key===key);if(found)return found;if(key?.startsWith('npc-row-')){const n=key.slice(8),line=d.content.split(/\r?\n/).find(l=>l.startsWith('| '+n+' '));if(line)return{title:n+' · Hồ sơ đại diện',content:'# '+n+' · Hồ sơ đại diện\n\n| Mã / tên | Mục tiêu và nỗi sợ | Bí mật / giọng | Quan hệ và cung truyện |\n|---|---|---|---|\n'+line}}return null}
const branches={PAL:['Kỵ Sĩ',['Con Người']],DKN:['Kỵ Sĩ',['Con Người']],HGD:['Kỵ Sĩ',['Con Người']],VAN:['Chiến Binh',['Con Người','Người Lùn']],BER:['Chiến Binh',['Con Người','Người Lùn']],WND:['Kiếm Sư',['Con Người']],ASN:['Kiếm Sư',['Con Người','Elf']],HSW:['Kiếm Sư',['Người Lùn']],THU:['Pháp Sư',['Con Người','Elf']],FIR:['Pháp Sư',['Con Người','Elf']],WAT:['Pháp Sư',['Con Người','Elf']],NEC:['Pháp Sư',['Con Người']],LGT:['Pháp Sư',['Elf']],DRK:['Pháp Sư',['Elf']],EAR:['Pháp Sư',['Người Lùn']],ARC:['Cung Thủ',['Con Người','Elf','Người Lùn']],SPI:['Tinh Linh',['Con Người','Elf']],PRI:['Mục Sư',['Con Người']],WOD:['Mục Sư',['Elf']]};
const jobs={KNI:['Kỵ Sĩ',['Con Người']],WAR:['Chiến Binh',['Con Người','Người Lùn']],SWD:['Kiếm Sư',['Con Người','Elf','Người Lùn']],MAG:['Pháp Sư',['Con Người','Elf','Người Lùn']],ARC:branches.ARC,SPI:branches.SPI,PRI:['Mục Sư',['Con Người','Elf']]};
export function buildLoreEntries(docs){const entries=[],mentors=new Set();
 const add=(d,s,category,extra={})=>entries.push({title:s.title,category,docId:d.id,section:s.key,tag:category.toUpperCase(),summary:'Đọc riêng mục này · '+d.title,searchText:s.content,source:d.file,...extra});
 for(const d of docs.filter(d=>d.collection==='mmorpg-design-checklist-v1'&&['217_','218_'].some(p=>d.file.startsWith(p))))for(const part of sections(d))if(part.level===2)add(d,part,d.file.startsWith('218_')?'Kế hoạch greybox':'Layout chi tiết Map 1');
 for(const d of docs.filter(d=>d.collection==='mmorpg-design-checklist-v1'&&d.file.startsWith('216_')))for(const part of sections(d))if(part.level===2)add(d,part,'Bố trí Map 1');
 for(const d of docs.filter(d=>d.collection==='mmorpg-design-checklist-v1'&&d.file.startsWith('214_')))for(const part of sections(d))if(part.level===3)add(d,part,'Hồ sơ NPC V01');
 for(const d of docs.filter(d=>d.collection==='mmorpg-story-v1')){const num=d.file.slice(0,3),all=sections(d);
  for(const s of all){
   if(num==='15_'&&s.level===3){const job=/^JOB-([A-Z]+)/.exec(s.title);if(job){const [profession,races]=jobs[job[1]];add(d,s,'Chức nghiệp',{profession,races})}else if(/^(Con Người|Elf|Người Lùn) —/.test(s.title))add(d,s,'Chủng tộc',{races:[s.title.split(' —')[0]]})}
   else if(num==='16_'&&s.level===3){const code=s.title.slice(0,3),meta=branches[code];if(meta)add(d,s,'Nhánh chuyên sâu',{profession:meta[0],races:meta[1]})}
   else if(num==='01_'&&s.level===2)add(d,s,'Thế giới');
   else if(num==='13_'&&s.level===2&&/^\d+\. V0[1-5]/.test(s.title))add(d,s,'Vùng đất');
   else if(num==='11_'&&s.level===2&&/^\d+\. (Mở đầu|V0[1-5])/.test(s.title))add(d,s,'Tuyến truyện');
   else if(num==='04_'&&s.level===2&&/Hồi|HỒI/.test(s.title))add(d,s,'Tuyến truyện');
   else if(num==='05_'&&((s.level===3&&/^N\d/.test(s.title))||(s.level===2&&/N01|N24/.test(s.title))))add(d,s,'NPC');
   else if(num==='05_'&&s.level===3&&/^F\d/.test(s.title))add(d,s,'Phe & tổ chức');
   else if(num==='14_'&&s.level===2&&/^\d+\. (Sella|Mira|Maera|Neris|Ilan|Borin)/.test(s.title))add(d,s,'Cảnh & đối thoại');
   else if(num==='17_'&&s.level===2)add(d,s,'Map 1–10');
   else if(num==='17_'&&s.level===3&&/^V01-D/.test(s.title))add(d,s,'Hàng ngày');
   else if(num==='17_'&&s.level===3&&/^V01-W/.test(s.title))add(d,s,'Hàng tuần');
   else if(num==='17_'&&s.level===3&&/^V01-LEG/.test(s.title))add(d,s,'Khám phá truyền thuyết');
   else if(num==='20_'&&s.level===2)add(d,s,/^2\.|^3\./.test(s.title)?'Hầm khám phá':'Map 1–10');
   else if(num==='18_'&&s.level===2)add(d,s,'Hầm ngục');
   else if(num==='19_'&&s.level===2&&/^\d+\. N\d/.test(s.title))add(d,s,'NPC');
   else if(num==='07_'&&s.level===3&&/^(M\d|SQ\d|OR\d|ENV\d)/.test(s.title))add(d,s,'Nhiệm vụ');
   if((num==='15_'||num==='16_')&&s.level===3){const m=/\*\*NPC:\*\*\s*(J\d+)\s+([^,\n]+)/.exec(s.content)||/NPC (J\d+) ([^,\n]+)/.exec(s.title);if(m&&!mentors.has(m[1])){mentors.add(m[1]);add(d,s,'NPC',{title:m[1]+' — '+m[2],summary:'Người hướng dẫn · mở mục gốc để xem lore, nhiệm vụ và chứng vật.'})}}
  }
  if(num==='05_')for(const line of d.content.split(/\r?\n/)){const m=/^\| (N\d+) ([^—|]+) —/.exec(line);if(m)add(d,{title:m[1]+' — '+m[2].trim(),key:'npc-row-'+m[1],content:line},'NPC')}
 }
 return entries;
}
