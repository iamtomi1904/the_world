from pathlib import Path
import re,collections
d=Path('design/mmorpg-design-checklist-v1');fn='185_MAP_01_DIA_LY_ELARION_VA_MANG_DUONG.md'
p=d/'02_THE_GIOI_MY_THUAT_NHIEM_VU.md';s=p.read_text(encoding='utf-8');s,n=re.subn(r'^- \[ \] MAP-01 · .*$',f'- [ ] MAP-01 · Thiết kế một phần: [địa lý và mạng đường185]({fn}) xác lập mười thành, lưu vực, sector năm vùng và brief; còn bản đồ vẽ/tỷ lệ/đường bờ/đảo/kiểm tuyến,22/10/2026.',s,flags=re.M);assert n==1;p.write_text(s,encoding='utf-8')
b=f'> **MAP-01 ·22/10/2026:** [Địa lý Elarion và mạng đường]({fn}) đã có mô tả/brief, chưa có bản vẽ tỷ lệ nên giữ một phần. Sửa rõ Merrowen là cảngTâyNam, Nocthollow là vùngtrũng, Astravelle làcaođịa; nămvùng không đồng nghĩa mườithành đãdựng. **118 hoàn thiện /11 một phần /384 chưa thiết kế =513**.\n\n'
for f in ['README.md','01_DANH_MUC_VA_LO_TRINH.md','09_THU_TU_THIET_KE.md','184_MAP_04_HO_SO_NAM_VUNG_THE_GIOI_MO.md']:
 p=d/f;s=p.read_text(encoding='utf-8')
 if f.startswith('09_'):s=re.sub(r'^(\| \d+ \| MAP-01 \| .*?\| )\[Mở\]\([^)]+\)( \|)$',lambda m:m[1]+f'[Mở]({fn})'+m[2],s,flags=re.M)
 p.write_text(b+s,encoding='utf-8')
p=Path('design/mmorpg-story-v1/03_DIA_LY_VA_HANH_TRINH.md');s=p.read_text(encoding='utf-8');p.write_text('> **Gameplay hiện hành ·22/10/2026:** nhân vật tối đa60, nội dung năm vùng tới45; các ghi chú cap45 bên dưới là lịch sử. [MAP-01 mô tả mới](../mmorpg-design-checklist-v1/'+fn+') phân biệt địa lý thế giới/sector sản xuất; chưa có bản đồ tỷ lệ. Giữ tên thành và tuyến nguồn.\n\n'+s,encoding='utf-8')
with (d/'18_PROD_09_SO_QUYET_DINH.md').open('a',encoding='utf-8') as f:f.write(f'\n\n## 73. CHG-040 — MAP-01 địa lý và sector ·22/10/2026\n\n[{fn}]({fn}): đối chiếu nguồn truyện để giữ mười thành/tuyến; phân biệt cảngMerrowen, đầmNocthollow và caođịaAstravelle, táchV03hai nhánh quaValedorn. Tên tiểu khu184làđềxuất/alias, không thayL01–L09. Chưa vẽ/tỷlệ nênMAP-01mộtphần;118/11/384=513. Giữngânsách, không code/thủthành. Điểm tiếp là vẽsơđồ theo brief, CAP-01cònmở.\n')
items=[]
for p in d.glob('*.md'):
 for line in p.read_text(encoding='utf-8-sig').splitlines():
  if m:=re.match(r'^- \[([ xX])\] ([A-Z]+-\d+)\s*[·—–-]?\s*(.+)$',line):items.append((m[2],'done' if m[1].lower()=='x' else 'partial' if 'Thiết kế một phần' in line else 'todo'))
assert len(items)==len(set(x[0] for x in items))==513
print(collections.Counter(x[1] for x in items))
for x in re.findall(r'\]\(([^)]+)\)',(d/fn).read_text(encoding='utf-8')):assert(d/x).exists(),x
print('Document links OK')
