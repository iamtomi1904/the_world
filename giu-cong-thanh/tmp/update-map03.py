from pathlib import Path
import re,collections,json
d=Path('design/mmorpg-design-checklist-v1');fn='195_MAP_03_BIEN_KHU_VUC_DIEM_DEN_VA_DUONG_QUAY_LAI.md'
p=d/'02_THE_GIOI_MY_THUAT_NHIEM_VU.md';s=p.read_text(encoding='utf-8');s,n=re.subn(r'^- \[ \] MAP-03 · .*$',f'- [x] MAP-03 · Hoàn thiện [biên/điểm đến/đường quay lại195]({fn}): surface, arrival/return/deathscope, fallback, transfer và quyền mount/tài sản; chưa tọa độ, vẽ hoặc code,22/10/2026.',s,flags=re.M);assert n==1;p.write_text(s,encoding='utf-8')
b=f'> **MAP-03 ·22/10/2026:** [Biên khu vực, điểm đến và đường quay lại195]({fn}) đã thiết kế. **525 mục:125 hoàn thiện /11 một phần /389 chưa thiết kế**. Còn MAP-05/11 là đầu vào bằng chữ; vẫn dừng trước vẽ, chưa code/runtime. Các tiến độ bên dưới là lịch sử.\n\n'
for name in ['README.md','01_DANH_MUC_VA_LO_TRINH.md','09_THU_TU_THIET_KE.md','192_TONG_HOP_MAP_07_09_VA_DIEM_DUNG_VE.md']:
 p=d/name;s=p.read_text(encoding='utf-8')
 if name.startswith('09_'):s=re.sub(r'^(\| \d+ \| MAP-03 \| .*?\| )\[Mở\]\([^)]+\)( \|)$',lambda m:m[1]+f'[Mở]({fn})'+m[2],s,flags=re.M)
 p.write_text(b+s,encoding='utf-8')
p=d/'190_MAP_08_MANG_DI_CHUYEN_VA_CHUYEN_VUNG.md';p.write_text('> **Điểm chuyển và đường về:** [MAP-03 hiện hành195]('+fn+') cụ thể hóa arrival/return/fallback, mất quyền và sự cố sau commit. Không thay combatlock/transfer policy, chưa runtime.\n\n'+p.read_text(encoding='utf-8'),encoding='utf-8')
with (d/'18_PROD_09_SO_QUYET_DINH.md').open('a',encoding='utf-8') as f:f.write(f'\n\n## 80. CHG-047 — MAP-03 điểm đến và đường quay lại ·22/10/2026\n\n[{fn}]({fn}): hoàn thiện ba loại biên, arrival/return/deathscope, fallback có quyền, prepare/commit/reconnect và route ngựa; không tự thêm immunity/fee/teleport cứu kẹt trong combat. Sửa rõ cửa phải có hợp đồng hai đầu và đường về solo. MAP-03 hoàn thiện hồ sơ,525=125/11/389; MAP-01 còn một phần, MAP-05/11 còn mở. Chưa vẽ/code/QA runtime.\n')
items=[]
for p in d.glob('*.md'):
 for l in p.read_text(encoding='utf-8-sig').splitlines():
  if m:=re.match(r'^- \[([ xX])\] ([A-Z]+-\d+)\s*[·—–-]?\s*(.+)$',l):items.append((m[2],'done' if m[1].lower()=='x' else 'partial' if 'Thiết kế một phần' in l else 'todo'))
assert len(items)==len(set(x[0] for x in items))==525
assert collections.Counter(x[1] for x in items)=={'done':125,'partial':11,'todo':389}
for x in re.findall(r'\]\(([^)]+)\)',(d/fn).read_text(encoding='utf-8')):assert(d/x).exists(),x
assert set(json.loads(Path('public/roadmap-order.json').read_text(encoding='utf-8'))['taskOrder'])==set(x[0] for x in items)
print('525 unique tasks;125done/11partial/389todo; links and order OK')
