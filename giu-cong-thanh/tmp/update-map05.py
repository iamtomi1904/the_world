from pathlib import Path
import re,collections,json
d=Path('design/mmorpg-design-checklist-v1');fn='196_MAP_05_NHIP_KHAM_PHA_MAT_DO_VA_MANG_DUONG.md'
p=d/'02_THE_GIOI_MY_THUAT_NHIEM_VU.md';s=p.read_text(encoding='utf-8');s,n=re.subn(r'^- \[ \] MAP-05 · .*$',f'- [x] MAP-05 · Hoàn thiện [nhịp khám phá/mật độ/mạng đường196]({fn}): loạiPOI, bốn kiểu đường, phân bổ62rương, nhịpPvE/W06 và phép đo saugreybox; chưa vẽ hoặc thửcân bằng,22/10/2026.',s,flags=re.M);assert n==1;p.write_text(s,encoding='utf-8')
b=f'> **MAP-05 ·22/10/2026:** [Nhịp khám phá và mạng đường196]({fn}) đã thiết kế; không tăng mật độ hoặc ngân sách để lấp map. **525 mục:126 hoàn thiện /11 một phần /388 chưa thiết kế**. Tiếp MAP-11 bằng chữ, giữ dừng trước vẽ. Các tiến độ bên dưới là lịch sử.\n\n'
for name in ['README.md','01_DANH_MUC_VA_LO_TRINH.md','09_THU_TU_THIET_KE.md','192_TONG_HOP_MAP_07_09_VA_DIEM_DUNG_VE.md']:
 p=d/name;s=p.read_text(encoding='utf-8')
 if name.startswith('09_'):s=re.sub(r'^(\| \d+ \| MAP-05 \| .*?\| )\[Mở\]\([^)]+\)( \|)$',lambda m:m[1]+f'[Mở]({fn})'+m[2],s,flags=re.M)
 p.write_text(b+s,encoding='utf-8')
p=d/'184_MAP_04_HO_SO_NAM_VUNG_THE_GIOI_MO.md';p.write_text('> **Nhịp và phân bổ hiện hành:** [MAP-05 hồ sơ196]('+fn+') phân bốn loại đường,62vị trí rương và nhịpPOI từng vùng; đây là phân bổ trước vẽ, chưa tọa độ/loot hoặc số đo thực.\n\n'+p.read_text(encoding='utf-8'),encoding='utf-8')
with (d/'18_PROD_09_SO_QUYET_DINH.md').open('a',encoding='utf-8') as f:f.write(f'\n\n## 81. CHG-048 — MAP-05 nhịp khám phá ·22/10/2026\n\n[{fn}]({fn}): hoàn thiện POI/bốn loại đường/cụmquest/khoảngnghỉ và ma trận62rương=12gầntuyến/35nhánh/15lốikín, không tăngloot hoặc quái. W06 kiểm lợi thế route/LoS/camp, không gọi cùng diện tích làcân bằng. Chưa chốt khoảngcách/thờigian khi chưa greybox; MAP-05xonghồsơ,525=126/11/388. TiếpMAP-11, vẫn dừng trước vẽ/code.\n')
items=[]
for p in d.glob('*.md'):
 for l in p.read_text(encoding='utf-8-sig').splitlines():
  if m:=re.match(r'^- \[([ xX])\] ([A-Z]+-\d+)\s*[·—–-]?\s*(.+)$',l):items.append((m[2],'done' if m[1].lower()=='x' else 'partial' if 'Thiết kế một phần' in l else 'todo'))
assert len(items)==len(set(x[0] for x in items))==525
assert collections.Counter(x[1] for x in items)=={'done':126,'partial':11,'todo':388}
for x in re.findall(r'\]\(([^)]+)\)',(d/fn).read_text(encoding='utf-8')):assert(d/x).exists(),x
assert set(json.loads(Path('public/roadmap-order.json').read_text(encoding='utf-8'))['taskOrder'])==set(x[0] for x in items)
print('525 unique tasks;126done/11partial/388todo; links/order OK')
