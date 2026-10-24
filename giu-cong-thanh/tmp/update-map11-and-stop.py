from pathlib import Path
import re,collections,json
d=Path('design/mmorpg-design-checklist-v1');fn='198_MAP_11_VAT_THE_TUONG_TAC_VA_VONG_DOI.md';summary='199_BAN_GIAO_MAP_VA_DUNG_TRUOC_VE.md'
p=d/fn;s=p.read_text(encoding='utf-8')
for old,new in {'sa ucommit':'sau commit','mặ cđịnh':'mặc định','tá c vụ':'tác vụ','hướ ngtiếpcận':'hướng tiếp cận','thờ iđiểm':'thời điểm','mấ tloot':'mất loot','mộtphầ n':'một phần','khỏihub':'khỏi hub','quyềntheo':'quyền theo'}.items():s=s.replace(old,new)
p.write_text(s,encoding='utf-8')
p=d/'02_THE_GIOI_MY_THUAT_NHIEM_VU.md';s=p.read_text(encoding='utf-8');s,n=re.subn(r'^- \[ \] MAP-11 · .*$',f'- [x] MAP-11 · Hoàn thiện [20họ vật thể và vòng đời198]({fn}): F/focus, scope, trạng thái, concurrency/cost/receipt, cơ cấu solo và metadataart; chưa vẽ/code/test,22/10/2026.',s,flags=re.M);assert n==1;p.write_text(s,encoding='utf-8')
b=f'> **Dừng trước vẽ ·22/10/2026:** [Bàn giao map199]({summary}); MAP-11 đã thiết kế với [tham khảo197](197_THAM_KHAO_VAT_THE_TUONG_TAC_VA_GIOI_HAN.md). MAP-02…12 có hồ sơ chữ; MAP-01 còn một phần chờ vẽ/kiểm địa lý. **525mục:127hoànthiện /11mộtphần /387chưathiếtkế**. Chưa ảnh mới/code/runtime. Các tiến độ bên dưới là lịch sử.\n\n'
for name in ['README.md','01_DANH_MUC_VA_LO_TRINH.md','09_THU_TU_THIET_KE.md','192_TONG_HOP_MAP_07_09_VA_DIEM_DUNG_VE.md']:
 p=d/name;s=p.read_text(encoding='utf-8')
 if name.startswith('09_'):s=re.sub(r'^(\| \d+ \| MAP-11 \| .*?\| )\[Mở\]\([^)]+\)( \|)$',lambda m:m[1]+f'[Mở]({fn})'+m[2],s,flags=re.M)
 p.write_text(b+s,encoding='utf-8')
p=d/'185_MAP_01_DIA_LY_ELARION_VA_MANG_DUONG.md';p.write_text('> **Gói vẽ hiện hành:** [Bàn giao199]('+summary+') tập hợp đầu vào MAP-02…12 và bốn nhóm overlay. MAP-01 giữ một phần, chưa có bản vẽ tỷ lệ hoặc ảnh mới trong lần này.\n\n'+p.read_text(encoding='utf-8'),encoding='utf-8')
with (d/'18_PROD_09_SO_QUYET_DINH.md').open('a',encoding='utf-8') as f:f.write(f'\n\n## 82. CHG-049 — MAP-11 có tham khảo và dừng trước vẽ ·22/10/2026\n\n[197](197_THAM_KHAO_VAT_THE_TUONG_TAC_VA_GIOI_HAN.md) ghi nguồnCrossCode/RadicalFish/GW2chínhthức và giới hạn403Albion; chỉ học nguyên tắc, không copy asset/luậtkinhtế. [198]({fn}) chốt20họ object, scope/F/LoS/state/concurrency/receipt/cơcấusolo. [199]({summary}) bàn giao4nhóm overlay, dừng trước vẽ theo yêu cầu. MAP-11hoàn thiện hồ sơ, MAP-01cònmộtphần;525=127/11/387. Không ảnh/code/schema/runtime.\n')
items=[]
for p in d.glob('*.md'):
 for l in p.read_text(encoding='utf-8-sig').splitlines():
  if m:=re.match(r'^- \[([ xX])\] ([A-Z]+-\d+)\s*[·—–-]?\s*(.+)$',l):items.append((m[2],'done' if m[1].lower()=='x' else 'partial' if 'Thiết kế một phần' in l else 'todo'))
assert len(items)==len(set(x[0] for x in items))==525
assert collections.Counter(x[1] for x in items)=={'done':127,'partial':11,'todo':387}
for name in [fn,summary,'197_THAM_KHAO_VAT_THE_TUONG_TAC_VA_GIOI_HAN.md']:
 for x in re.findall(r'\]\(([^)]+)\)',(d/name).read_text(encoding='utf-8')):
  if not x.startswith(('https:','http:')):assert(d/x).exists(),(name,x)
assert set(json.loads(Path('public/roadmap-order.json').read_text(encoding='utf-8'))['taskOrder'])==set(x[0] for x in items)
print('525 unique tasks;127done/11partial/387todo; links/order OK; stopped before drawing')
