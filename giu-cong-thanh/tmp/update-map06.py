from pathlib import Path
import re,collections,json
d=Path('design/mmorpg-design-checklist-v1');fn='188_MAP_06_PHAN_LOP_KHU_VUC_VA_QUYEN_GIAO_TRANH.md'
p=d/'02_THE_GIOI_MY_THUAT_NHIEM_VU.md';s=p.read_text(encoding='utf-8');s,n=re.subn(r'^- \[ \] MAP-06 · .*$',f'- [x] MAP-06 · Hoàn thiện [phân lớp khu vực và quyền giao tranh188]({fn}): PvE/an toàn/phe/bang/W06/arena, kiểm quyền, biên, portal và scope; chưa vẽ volume hoặc triển khai,22/10/2026.',s,flags=re.M);assert n==1;p.write_text(s,encoding='utf-8')
b=f'> **MAP-06 ·22/10/2026:** [Hồ sơ luật vùng188]({fn}) đã thiết kế: PvE trung lập, W06 đối phe, GA theo đội trận, an toàn và chuyển scope. **525mục:120hoànthiện /11mộtphần /394chưa thiết kế**. TiếpMAP-07; chưa code/vẽ/QA runtime. Các tiến độ bên dưới là lịch sử.\n\n'
for name in ['README.md','01_DANH_MUC_VA_LO_TRINH.md','09_THU_TU_THIET_KE.md','187_MAP_DONG_BO_PHE_BANG_HOI_VA_W06.md']:
 p=d/name;s=p.read_text(encoding='utf-8')
 if name.startswith('09_'):s=re.sub(r'^(\| \d+ \| MAP-06 \| .*?\| )\[Mở\]\([^)]+\)( \|)$',lambda m:m[1]+f'[Mở]({fn})'+m[2],s,flags=re.M)
 p.write_text(b+s,encoding='utf-8')
p=d/'109_COMBAT_11_QUYEN_GIAO_TRANH_VA_AN_TOAN.md';p.write_text('> **Luật khu vực hiện hành ·22/10/2026:** [MAP-06](188_MAP_06_PHAN_LOP_KHU_VUC_VA_QUYEN_GIAO_TRANH.md) cụ thể hóa safezone, PvE khác phe, W06 và arena matchteam. Giữ mask/guard và combatlock theo109/111; PvPdisabled bên dưới chỉ còn áp năm vùngPvE và không gian an toàn. Chưa triển khai.\n\n'+p.read_text(encoding='utf-8'),encoding='utf-8')
with (d/'18_PROD_09_SO_QUYET_DINH.md').open('a',encoding='utf-8') as f:f.write(f'\n\n## 76. CHG-043 — MAP-06 phân lớp khu vực ·22/10/2026\n\n[{fn}]({fn}): hoàn thiện hồ sơ ruleSet/surface/scope,12loại vùng, quan hệ hỗtrợ/tấncông, biên antoàn, chuyển portal/kiện và kiểmcast-hit. Giữcombatlock10s của111, không thêm immunity/đổi skill hoặc luậtPvE. MAP-06xonghồsơ;525=120/11/394. MAP-01/07/08vàFACTION/PVPchitiếtvẫnmở; chưa code/vẽ/QA. TiếpMAP-07.\n')
items=[]
for p in d.glob('*.md'):
 for l in p.read_text(encoding='utf-8-sig').splitlines():
  if m:=re.match(r'^- \[([ xX])\] ([A-Z]+-\d+)\s*[·—–-]?\s*(.+)$',l):items.append((m[2],'done' if m[1].lower()=='x' else 'partial' if 'Thiết kế một phần' in l else 'todo'))
assert len(items)==len(set(x[0] for x in items))==525
assert collections.Counter(x[1] for x in items)=={'done':120,'partial':11,'todo':394}
for x in re.findall(r'\]\(([^)]+)\)',(d/fn).read_text(encoding='utf-8')):assert(d/x).exists(),x
c=json.loads(Path('public/roadmap-order.json').read_text(encoding='utf-8'));assert set(c['taskOrder'])==set(x[0] for x in items)
print('525 unique tasks;120done/11partial/394todo; links and roadmap order OK')
