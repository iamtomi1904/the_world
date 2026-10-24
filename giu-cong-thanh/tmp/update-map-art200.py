from pathlib import Path
import re,collections,json,hashlib
d=Path('design/mmorpg-design-checklist-v1');fn='200_MAP_01_BAN_VE_ELARION_CONCEPT_R001.md'
p=d/fn;s=p.read_text(encoding='utf-8').replace('FＭ-TT','FM-TT').replace('mườidiadanh','mười địa danh');p.write_text(s,encoding='utf-8')
p=d/'02_THE_GIOI_MY_THUAT_NHIEM_VU.md';s=p.read_text(encoding='utf-8');s,n=re.subn(r'^- \[ \] MAP-01 · .*$',f'- [ ] MAP-01 · Thiết kế một phần: [bản vẽ Elarion concept r001]({fn}) có10thành/6tuyến/sector/phe/W06/dịch vụ; còn tỷlệ, kiểm phânthủy/cầu/đèo/bến và layout,22/10/2026. Không phải mapgameplay.',s,flags=re.M);assert n==1;p.write_text(s,encoding='utf-8')
b=f'> **Đã vẽ concept địa lý ·22/10/2026:** [Elarion MAP-01 r001]({fn}) và [bản xem tương tác](/design-preview/elarion-map-r001/index.html). Có mười thành/các lớp tuyến/vùng/phe; MAP-01 vẫn một phần, chưa tỷlệ/đường đi chính thức. **525mục:127hoànthiện /11mộtphần /387chưathiếtkế**. Chưa gameplay/database; các điểm dừng trước vẽ bên dưới là lịch sử.\n\n'
for name in ['README.md','01_DANH_MUC_VA_LO_TRINH.md','09_THU_TU_THIET_KE.md','185_MAP_01_DIA_LY_ELARION_VA_MANG_DUONG.md','199_BAN_GIAO_MAP_VA_DUNG_TRUOC_VE.md']:
 p=d/name;s=p.read_text(encoding='utf-8')
 if name.startswith('09_'):s=re.sub(r'^(\| \d+ \| MAP-01 \| .*?\| )\[Mở\]\([^)]+\)( \|)$',lambda m:m[1]+f'[Mở]({fn})'+m[2],s,flags=re.M)
 p.write_text(b+s,encoding='utf-8')
with (d/'18_PROD_09_SO_QUYET_DINH.md').open('a',encoding='utf-8') as f:f.write(f'\n\n## 83. CHG-050 — MAP-01 vẽ concept Elarion r001 ·22/10/2026\n\n[{fn}]({fn}): người dùng tiếp tục từ điểm vẽ; image_gen tạo nền + chỉnh thêmValedorn, lưu workspace/prompt/hash AT-AST-100008. SVG/HTMLtên10thành/6tuyến/7sectorpins/phe+W06/dịchvụ, export3PNG; QAprototype chọnđiểm/layer/keyboard vàsửa hitarea/labeloverlap. Khônggọiảnhlàtilemap/navmesh, chưa tỷlệ/cầuđèo/bến/cânW06 nênMAP-01vẫnmộtphần;525=127/11/387. Không đổi codegame/database/thủthành.\n')
out=Path('public/design-preview/elarion-map-r001');p=out/'manifest.json';m=json.loads(p.read_text(encoding='utf-8'));m['overlayFiles']=[{'file':name,'sha256':hashlib.sha256((out/name).read_bytes()).hexdigest()} for name in ['index.html','map-data.json','prompts.json']];p.write_text(json.dumps(m,ensure_ascii=False,indent=2),encoding='utf-8')
items=[]
for p in d.glob('*.md'):
 for l in p.read_text(encoding='utf-8-sig').splitlines():
  if r:=re.match(r'^- \[([ xX])\] ([A-Z]+-\d+)\s*[·—–-]?\s*(.+)$',l):items.append((r[2],'done' if r[1].lower()=='x' else 'partial' if 'Thiết kế một phần' in l else 'todo'))
assert len(items)==len(set(x[0] for x in items))==525
assert collections.Counter(x[1] for x in items)=={'done':127,'partial':11,'todo':387}
for x in re.findall(r'\]\(([^)]+)\)',(d/fn).read_text(encoding='utf-8')):
 assert (Path('public'+x) if x.startswith('/') else d/x).exists(),x
print('525tasks unchanged; all deliverable links and saved assets OK')
