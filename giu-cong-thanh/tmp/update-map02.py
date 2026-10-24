from pathlib import Path
import re,collections,json
d=Path('design/mmorpg-design-checklist-v1');fn='194_MAP_02_CAU_TRUC_LOP_BAN_DO_VA_QUYEN_THONG_TIN.md'
p=d/'02_THE_GIOI_MY_THUAT_NHIEM_VU.md';s=p.read_text(encoding='utf-8');s,n=re.subn(r'^- \[ \] MAP-02 · .*$',f'- [x] MAP-02 · Hoàn thiện [cấu trúc lớp bản đồ194]({fn}): địa lý/người chơi/vận hành,12lớp, ID và quyền thông tin/quest/phiên bản; chưa vẽ hoặc triển khai,22/10/2026.',s,flags=re.M);assert n==1;p.write_text(s,encoding='utf-8')
b=f'> **MAP-02 ·22/10/2026:** [Ba sản phẩm bản đồ và12lớp194]({fn}) đã thiết kế; tách biết vị trí/nhìn hiện tại/vào/tương tác/nhận thưởng. **525mục:124hoànthiện /11mộtphần /390chưathiếtkế**. Giữ điểm dừng trước vẽ; chưa ảnh/code/runtime. Các tiến độ bên dưới là lịch sử.\n\n'
for name in ['README.md','01_DANH_MUC_VA_LO_TRINH.md','09_THU_TU_THIET_KE.md','192_TONG_HOP_MAP_07_09_VA_DIEM_DUNG_VE.md']:
 p=d/name;s=p.read_text(encoding='utf-8')
 if name.startswith('09_'):s=re.sub(r'^(\| \d+ \| MAP-02 \| .*?\| )\[Mở\]\([^)]+\)( \|)$',lambda m:m[1]+f'[Mở]({fn})'+m[2],s,flags=re.M)
 p.write_text(b+s,encoding='utf-8')
p=d/'191_MAP_09_KHAM_PHA_SUONG_MAP_VA_CHIA_SE.md';p.write_text('> **Cấu trúc lớp bản đồ:** [MAP-02 hiện hành194]('+fn+') tách địa lý/người chơi/vận hành và quyền thông tin. MAP-09giữ discovery/claimscope r002; không dùng masterspoiler làmmapclient.\n\n'+p.read_text(encoding='utf-8'),encoding='utf-8')
with (d/'18_PROD_09_SO_QUYET_DINH.md').open('a',encoding='utf-8') as f:f.write(f'\n\n## 79. CHG-046 — MAP-02 cấu trúc lớp trước vẽ ·22/10/2026\n\n[{fn}]({fn}): tiếpthiết kế theo yêu cầu, hoàn thiện3sản phẩm/12lớp, POIIDvàvisibility/interaction/claim, questscope, cậpnhậtrevision. Khôngvẽảnhkhitiếp tụcphầnchữ, khôngròspoilermaster/minimapradar. MAP-02hoànthiệnhồsơ;525=124/11/390. MAP-01vẫnmộtphần, cònMAP-03/05/11chuẩnbịbằngchữ; chưaruntime/code.\n')
items=[]
for p in d.glob('*.md'):
 for l in p.read_text(encoding='utf-8-sig').splitlines():
  if m:=re.match(r'^- \[([ xX])\] ([A-Z]+-\d+)\s*[·—–-]?\s*(.+)$',l):items.append((m[2],'done' if m[1].lower()=='x' else 'partial' if 'Thiết kế một phần' in l else 'todo'))
assert len(items)==len(set(x[0] for x in items))==525
assert collections.Counter(x[1] for x in items)=={'done':124,'partial':11,'todo':390}
for x in re.findall(r'\]\(([^)]+)\)',(d/fn).read_text(encoding='utf-8')):assert(d/x).exists(),x
assert set(json.loads(Path('public/roadmap-order.json').read_text(encoding='utf-8'))['taskOrder'])==set(x[0] for x in items)
print('525 unique tasks;124done/11partial/390todo; links and order OK')
