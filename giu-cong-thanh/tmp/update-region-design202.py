from pathlib import Path
import re,collections
d=Path('design/mmorpg-design-checklist-v1');fn='202_MAP_MO_VUNG_TRANG_THAI_VA_HUONG_KHAM_PHA_DAT_AN.md'
b=f'> **Thiết kế mở vùng ·22/10/2026:** [Trạng thái vùng và10tuyến khám phá dự phòng202]({fn}) tách phát hành/knowledge/grant/quyền đi hiện tại. Vùng đã mở giữ màu khi tạm bị chặn; bản xemr002chỉ mô phỏng, chưa diễn đủ state/backend. Giữ525mục:127hoànthiện/11mộtphần/387chưathiếtkế; không ảnh mới/gamecode.\n\n'
for name in ['README.md','01_DANH_MUC_VA_LO_TRINH.md','09_THU_TU_THIET_KE.md','201_MAP_01_MUOI_DAT_AN_VA_MAU_THEO_TIEN_TRINH_R002.md','191_MAP_09_KHAM_PHA_SUONG_MAP_VA_CHIA_SE.md']:
 p=d/name;p.write_text(b+p.read_text(encoding='utf-8'),encoding='utf-8')
p=d/'02_THE_GIOI_MY_THUAT_NHIEM_VU.md';s=p.read_text(encoding='utf-8');s,n=re.subn(r'^(- \[x\] MAP-09 · .*)$',lambda m:m[1]+f' [Bổ sung trạng thái mở vùng]({fn}).',s,flags=re.M);assert n==1;p.write_text(s,encoding='utf-8')
with (d/'18_PROD_09_SO_QUYET_DINH.md').open('a',encoding='utf-8') as f:f.write(f'\n\n## 85. CHG-052 — Trạng thái vùng và hạt giống đấtẩn ·22/10/2026\n\n[{fn}]({fn}): theo yêu cầu tiếp thiết kế, táchpublication/knowledge/permanentgrant/currenteligibility/discovery/claim, giữmàuvùngđãmởkhitạmbịkhóa. Chốtmởquyền6vùngvà10hạtgiốngtruyệndựphòng, khônggáncap61/loot/lịchpháthành hoặc tự tăngbudgetquest. UIr002chỉmôphỏngchưađủstate, khôngđổibackend. 525=127/11/387khôngđổi, MAP-01cònmộtphần.\n')
items=[]
for p in d.glob('*.md'):
 for l in p.read_text(encoding='utf-8-sig').splitlines():
  if x:=re.match(r'^- \[([ xX])\] ([A-Z]+-\d+)\s*[·—–-]?\s*(.+)$',l):items.append((x[2],'done' if x[1].lower()=='x' else 'partial' if 'Thiết kế một phần' in l else 'todo'))
assert len(items)==len(set(x[0] for x in items))==525
assert collections.Counter(x[1] for x in items)=={'done':127,'partial':11,'todo':387}
for x in re.findall(r'\]\(([^)]+)\)',(d/fn).read_text(encoding='utf-8')):assert(d/x).exists(),x
print('127/11/387 over525 unchanged; new document links OK')
