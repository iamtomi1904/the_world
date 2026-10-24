from pathlib import Path
import re,collections,json
d=Path('design/mmorpg-design-checklist-v1')
tasks={'MAP-07':('189_MAP_07_HOI_SINH_NOI_NGHI_VA_DICH_VU.md','Tách hồi sinh/checkpoint/nghỉ/dịch vụ, mạng hub/hoang dã/phe/bang/W06; giữ104/111, chưa đặt tọa độ hoặc triển khai.'),'MAP-08':('190_MAP_08_MANG_DI_CHUYEN_VA_CHUYEN_VUNG.md','Mạng đi bộ/ngựa/đò/điều vận/warp/đường tắt, quyền và quote/transfer; chưa vẽ hoặc code portal.'),'MAP-09':('191_MAP_09_KHAM_PHA_SUONG_MAP_VA_CHIA_SE.md','Fog nhân vật, tham khảo account, ghim/ping và quyền bản đồ W06/GA; chưa vẽ UI hoặc triển khai discovery.')}
p=d/'02_THE_GIOI_MY_THUAT_NHIEM_VU.md';s=p.read_text(encoding='utf-8')
for task,(fn,desc) in tasks.items():
 s,n=re.subn(r'^- \[ \] '+task+r' · .*$',f'- [x] {task} · Hoàn thiện hồ sơ: {desc} [Mở]({fn}),22/10/2026.',s,flags=re.M);assert n==1,task
p.write_text(s,encoding='utf-8')
summary='192_TONG_HOP_MAP_07_09_VA_DIEM_DUNG_VE.md'
b=f'> **Điểm dừng trước vẽ ·22/10/2026:** [MAP-07…09 hoàn thiện mô tả; tiếp là bản vẽ địa lý MAP-01]({summary}). **525mục:123hoànthiện /11mộtphần /391chưathiếtkế**. Đã dừng theo yêu cầu, chưa ảnh mới/code/runtime. Các tiến độ bên dưới là lịch sử.\n\n'
for name in ['README.md','01_DANH_MUC_VA_LO_TRINH.md','09_THU_TU_THIET_KE.md']:
 p=d/name;s=p.read_text(encoding='utf-8')
 if name.startswith('09_'):
  for task,(fn,desc) in tasks.items():
   s=re.sub(r'^(\| \d+ \| '+task+r' \| .*?\| )\[Mở\]\([^)]+\)( \|)$',lambda m:m[1]+f'[Mở]({fn})'+m[2],s,flags=re.M)
 p.write_text(b+s,encoding='utf-8')
p=d/'188_MAP_06_PHAN_LOP_KHU_VUC_VA_QUYEN_GIAO_TRANH.md';p.write_text('> **Bước tiếp đã thiết kế:** [189](189_MAP_07_HOI_SINH_NOI_NGHI_VA_DICH_VU.md), [190](190_MAP_08_MANG_DI_CHUYEN_VA_CHUYEN_VUNG.md), [191](191_MAP_09_KHAM_PHA_SUONG_MAP_VA_CHIA_SE.md). [Điểm dừng trước vẽ192]('+summary+'). Chỉ hồ sơ hoàn thiện, chưa runtime.\n\n'+p.read_text(encoding='utf-8'),encoding='utf-8')
with (d/'18_PROD_09_SO_QUYET_DINH.md').open('a',encoding='utf-8') as f:f.write(f'\n\n## 77. CHG-044 — MAP-07…09 và dừng trước vẽ ·22/10/2026\n\n[{summary}]({summary}): theo yêu cầu làm tới bước vẽ, hoàn thiện189hồi sinh/dịch vụ,190mạngdi chuyển,191khám phá/mapinfo. Giữ104/111/34, fognhânvật/accountthamkhảo không mởwarphộ, samefaction/W06đúng188. Điểmtiếp làvẽMAP-01với4overlay, đãdừngkhôngtạoảnh. 525=123/11/391, MAP-01mộtphần; chưa code/schema/runtime.\n')
items=[]
for p in d.glob('*.md'):
 for l in p.read_text(encoding='utf-8-sig').splitlines():
  if m:=re.match(r'^- \[([ xX])\] ([A-Z]+-\d+)\s*[·—–-]?\s*(.+)$',l):items.append((m[2],'done' if m[1].lower()=='x' else 'partial' if 'Thiết kế một phần' in l else 'todo'))
assert len(items)==len(set(x[0] for x in items))==525
assert collections.Counter(x[1] for x in items)=={'done':123,'partial':11,'todo':391}
for name in [summary]+[v[0] for v in tasks.values()]:
 for x in re.findall(r'\]\(([^)]+)\)',(d/name).read_text(encoding='utf-8')):assert(d/x).exists(),(name,x)
c=json.loads(Path('public/roadmap-order.json').read_text(encoding='utf-8'));assert set(c['taskOrder'])==set(x[0] for x in items)
print('525 unique tasks;123done/11partial/391todo; all new links and roadmap order OK')
