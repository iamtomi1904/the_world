from pathlib import Path
import re,collections
d=Path('design/mmorpg-design-checklist-v1');fn='184_MAP_04_HO_SO_NAM_VUNG_THE_GIOI_MO.md'
p=d/'02_THE_GIOI_MY_THUAT_NHIEM_VU.md';s=p.read_text(encoding='utf-8');s,n=re.subn(r'^- \[ \] MAP-04 · .*$',f'- [x] MAP-04 · Hoàn thiện [hồ sơ năm vùng]({fn}): văn hóa/kiến trúc/màu,30tiểu khu, cư dân/sinh cảnh/tài nguyên, quest đại diện và cầu nối truyện;22/10/2026. Chưa vẽ layout, viết đầy đủ NPC/quest hoặc triển khai.',s,flags=re.M);assert n==1;p.write_text(s,encoding='utf-8')
banner=f'> **MAP-04 ·22/10/2026:** [Hồ sơ chi tiết năm vùng,30tiểu khu]({fn}) đã thiết kế; giữ90mẫuquái/82NPC/16tinh anh/5bossmap. **118 hoàn thiện /10 một phần /385 chưa thiết kế =513**. Chưa vẽ/code; tiếpMAP-01, CAP-01vẫn mở. Các ghi nhận bên dưới là lịch sử.\n\n'
for f in ['README.md','01_DANH_MUC_VA_LO_TRINH.md','09_THU_TU_THIET_KE.md']:
 p=d/f;s=p.read_text(encoding='utf-8')
 if f.startswith('09_'):s=re.sub(r'^(\| \d+ \| MAP-04 \| .*?\| )\[Mở\]\([^)]+\)( \|)$',lambda m:m[1]+f'[Mở]({fn})'+m[2],s,flags=re.M)
 p.write_text(banner+s,encoding='utf-8')
with (d/'18_PROD_09_SO_QUYET_DINH.md').open('a',encoding='utf-8') as f:f.write(f'\n\n## 70. CHG-037 — MAP-04 hồ sơ năm vùng ·22/10/2026\n\n[{fn}]({fn}): tiếp thiết kế môi trường, xác lập30tiểu khu/văn hóa/kiến trúc/sinh kế/quest đại diện; giữ82slotNPC/90mẫuquái/16tinh anh/5bossmap/62rương. Gợi ý1/2/2/3/3boss cho5dungeon trong hạn1–3, tách bossmap và mẫu nền. Chưa đặt82tênNPC/vẽlayout/skillboss/triểnkhai; không thay địa lý thành khi MAP-01cònmở. MAP-04hoàn thiện hồ sơ,118/10/385=513. TiếpMAP-01, CAP-01chưa thiết kế.\n')
items=[]
for p in d.glob('*.md'):
 for line in p.read_text(encoding='utf-8-sig').splitlines():
  if m:=re.match(r'^- \[([ xX])\] ([A-Z]+-\d+)\s*[·—–-]?\s*(.+)$',line):items.append((m[2],'done' if m[1].lower()=='x' else 'partial' if 'Thiết kế một phần' in line else 'todo'))
assert len(items)==len(set(x[0] for x in items))==513
print(collections.Counter(x[1] for x in items))
for x in re.findall(r'\]\(([^)]+)\)',(d/fn).read_text(encoding='utf-8')):assert(d/x).exists(),x
print('Links OK; five regional profiles saved')
