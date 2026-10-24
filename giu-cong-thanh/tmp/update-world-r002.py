from pathlib import Path
import re,collections,json,hashlib
d=Path('design/mmorpg-design-checklist-v1');fn='201_MAP_01_MUOI_DAT_AN_VA_MAU_THEO_TIEN_TRINH_R002.md'
b=f'> **Thế giới r002 ·22/10/2026:** [Tên từng khu,10đấtẩn và màu theo tiến trình]({fn}); [bản xem](/design-preview/elarion-map-r002/index.html). Vùng mở có màu/chưa mở xám; cấp10thấyV03xám; đấtẩn chưa phát hành không tự mở ở60. Giữ6vùng hiện tại và525task:127hoànthiện/11mộtphần/387chưathiếtkế. Chưa kết nối game/backend.\n\n'
for name in ['README.md','01_DANH_MUC_VA_LO_TRINH.md','09_THU_TU_THIET_KE.md','185_MAP_01_DIA_LY_ELARION_VA_MANG_DUONG.md','191_MAP_09_KHAM_PHA_SUONG_MAP_VA_CHIA_SE.md','194_MAP_02_CAU_TRUC_LOP_BAN_DO_VA_QUYEN_THONG_TIN.md','200_MAP_01_BAN_VE_ELARION_CONCEPT_R001.md']:
 p=d/name;s=p.read_text(encoding='utf-8')
 if name.startswith('09_'):s=re.sub(r'^(\| \d+ \| MAP-01 \| .*?\| )\[Mở\]\([^)]+\)( \|)$',lambda m:m[1]+f'[Mở]({fn})'+m[2],s,flags=re.M)
 p.write_text(b+s,encoding='utf-8')
p=d/'02_THE_GIOI_MY_THUAT_NHIEM_VU.md';s=p.read_text(encoding='utf-8');s,n=re.subn(r'^- \[ \] MAP-01 · .*$',f'- [ ] MAP-01 · Thiết kế một phần: [thế giới r002]({fn}) cótênkhu/10đấtẩn/màutheotiếntrình, bản lõir001giữthamchiếu; còn tỷlệ/địalý/layout,22/10/2026. Chưa mapgameplay.',s,flags=re.M);assert n==1;p.write_text(s,encoding='utf-8')
with (d/'18_PROD_09_SO_QUYET_DINH.md').open('a',encoding='utf-8') as f:f.write(f'\n\n## 84. CHG-051 — Thế giới r002 thêm10đấtẩn và màu tiến trình ·22/10/2026\n\n[{fn}]({fn}): theo yêu cầu đặt tênkhu/thêm10đấtẩn/tômàuvùngđãmở. image_genmởrộngnềnAT-AST-100009; HTML/SVGlớptên/chọncấp10…60/truyện/phe, khóa xám vàfutureunreleased. H01…10dựphòng khôngcấpmới/gear/NPCquáiđãduyệt;6vùngcũgiữ. QAprototype4ảnh vàgates/keyboard; khônggamebackend hoặc mới tănghardgateđibộ. MAP-01mộtphần,525=127/11/387.\n')
o=Path('public/design-preview/elarion-map-r002');p=o/'manifest.json';m=json.loads(p.read_text(encoding='utf-8'));m['files']=[{'file':n,'sha256':hashlib.sha256((o/n).read_bytes()).hexdigest()} for n in ['index.html','map-data.json','prompt.txt']];p.write_text(json.dumps(m,ensure_ascii=False,indent=2),encoding='utf-8')
items=[]
for p in d.glob('*.md'):
 for l in p.read_text(encoding='utf-8-sig').splitlines():
  if x:=re.match(r'^- \[([ xX])\] ([A-Z]+-\d+)\s*[·—–-]?\s*(.+)$',l):items.append((x[2],'done' if x[1].lower()=='x' else 'partial' if 'Thiết kế một phần' in l else 'todo'))
assert len(items)==len(set(x[0] for x in items))==525
assert collections.Counter(x[1] for x in items)=={'done':127,'partial':11,'todo':387}
for x in re.findall(r'\]\(([^)]+)\)',(d/fn).read_text(encoding='utf-8')):assert(Path('public'+x) if x.startswith('/') else d/x).exists(),x
data=json.loads((o/'map-data.json').read_text(encoding='utf-8'));assert len(set(q['id'] for q in data['regions'] if not q['available']))==10;assert len(set(q['id'] for q in data['regions'] if q['available']))==6
print('525tasks unchanged;6current+10future IDs; all new document/asset links OK')
