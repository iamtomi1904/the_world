from pathlib import Path
import re,collections
d=Path('design/mmorpg-design-checklist-v1'); fn='182_MAP_12_SINH_CANH_QUAI_DONG_VAT_VA_BOSS.md'
p=d/'02_THE_GIOI_MY_THUAT_NHIEM_VU.md';s=p.read_text(encoding='utf-8')
s,n=re.subn(r'^- \[ \] MAP-12 · .*$',f'- [x] MAP-12 · Hoàn thiện hồ sơ phân bố sinh cảnh năm vùng, lãnh địa, nhịp sống, spawn/respawn và quan hệ truyện chung; [hồ sơ182]({fn}), 22/10/2026. Chưa catalog loài, vẽ hoặc kiểm thử runtime.',s,flags=re.M);assert n==1;p.write_text(s,encoding='utf-8')
banner=f'> **MAP-12 ·22/10/2026:** [Sinh cảnh quái, động vật và boss theo năm vùng]({fn}) đã hoàn thiện hồ sơ. **116 hoàn thiện /10 một phần /387 chưa thiết kế =513**. Tiếp trong nhánh môi trường: MAP-04; CAP-01 vẫn còn mở. Chưa code/vẽ/runtime. Các tiến độ bên dưới là lịch sử.\n\n'
for name in ['README.md','01_DANH_MUC_VA_LO_TRINH.md','09_THU_TU_THIET_KE.md']:
 p=d/name;s=p.read_text(encoding='utf-8')
 if name.startswith('09_'):s=re.sub(r'^(\| \d+ \| MAP-12 \| .*?\| )\[Mở\]\([^)]+\)( \|)$',lambda m:m[1]+f'[Mở]({fn})'+m[2],s,flags=re.M)
 p.write_text(banner+s,encoding='utf-8')
with (d/'18_PROD_09_SO_QUYET_DINH.md').open('a',encoding='utf-8') as f:f.write(f'\n\n## 68. CHG-035 — MAP-12 sinh cảnh và lãnh địa ·22/10/2026\n\n[{fn}]({fn}): tiếp nhánh môi trường theo yêu cầu, thiết kế phân bố năm vùng, năm lớp sinh vật, dấu vết/lõi/đệm/lối tránh, nhịp sống và server spawn. Giữ16tinh anh/5bossmap, V01khôngbay, truyện chính solo; không chốt thêm công thức aggro/loot hoặc thay thủ thành. MAP-12hoàn thiện hồ sơ;116/10/387=513. TiếpMAP-04, CAP-01vẫnmở; chưa vẽ/code/test.\n')
items=[]
for p in d.glob('*.md'):
 for line in p.read_text(encoding='utf-8-sig').splitlines():
  if m:=re.match(r'^- \[([ xX])\] ([A-Z]+-\d+)\s*[·—–-]?\s*(.+)$',line):items.append((m[2],'done' if m[1].lower()=='x' else 'partial' if 'Thiết kế một phần' in line else 'todo'))
assert len(items)==len(set(x[0] for x in items))==513
print(collections.Counter(x[1] for x in items))
for x in re.findall(r'\]\(([^)]+)\)',(d/fn).read_text(encoding='utf-8')):assert(d/x).exists(),x
print('Document links OK')
