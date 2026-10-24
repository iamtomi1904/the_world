from pathlib import Path
import re, collections
d=Path('design/mmorpg-design-checklist-v1')
fn='181_MAP_10_THOI_GIAN_THOI_TIET_HE_SINH_THAI.md'
p=d/'02_THE_GIOI_MY_THUAT_NHIEM_VU.md'
s=p.read_text(encoding='utf-8')
updates={'MAP-10':f'- [x] MAP-10 · Hoàn thiện hồ sơ đồng hồ chung, chu kỳ ngày/đêm, chuyển thời tiết, gió, truyện và UI; [thiết kế môi trường sống]({fn}), 22/10/2026. Chưa triển khai hoặc đo runtime.', 'ENV-03':f'- [ ] ENV-03 · Thiết kế một phần: chốt nước cạn/sâu, quyền lội, màu/độ sâu và dấu cảnh báo trong [hồ sơ181]({fn}); chưa atlas, collision và cảnh mẫu.', 'ENV-06':f'- [ ] ENV-06 · Thiết kế một phần: định hướng cây/cỏ năm vùng, layer gió và danh mục asset trong [hồ sơ181]({fn}); chưa vẽ bộ loài/biến thể hoặc nghiệm thu camera.'}
for task,line in updates.items():
 s,n=re.subn(r'^- \[[ x]\] '+task+r' · .*$',lambda m:line,s,flags=re.M);assert n==1,(task,n)
p.write_text(s,encoding='utf-8')
banner=f'> **Môi trường sống ·22/10/2026:** [Ngày/đêm, thời tiết liên tục, gió rung cây và nước theo năm vùng]({fn}). MAP-10 hoàn thiện hồ sơ; ENV-03/06 một phần. **115 hoàn thiện /10 một phần /388 chưa thiết kế =513**. Chưa vẽ hoặc code. Các số bên dưới là lịch sử.\n\n'
for f in ['README.md','01_DANH_MUC_VA_LO_TRINH.md','09_THU_TU_THIET_KE.md']:
 p=d/f;s=p.read_text(encoding='utf-8')
 if f.startswith('09_'):
  for task in updates:
   s=re.sub(r'^(\| \d+ \| '+task+r' \| .*?\| )\[Mở\]\([^)]+\)( \|)$',lambda m:m[1]+f'[Mở]({fn})'+m[2],s,flags=re.M)
 p.write_text(banner+s,encoding='utf-8')
with (d/'18_PROD_09_SO_QUYET_DINH.md').open('a',encoding='utf-8') as f:
 f.write(f'\n\n## 67. CHG-034 — Môi trường sống theo cốt truyện ·22/10/2026\n\n[{fn}]({fn}): chốt thiết kế khí hậu năm vùng, giờ game chung, chuyển trời mềm, gió tán/cỏ và nước cạn/sâu. Giá trị thử ngày180phút, trời15–35phút/chuyển60–120giây và lội−10% đều cấu hình; chưa runtime hoặc vẽ. Không tự buff chiến đấu theo mưa/gió; giữ V01 không quái bay. MAP-10 hồ sơ hoàn thiện, ENV-03/06 một phần;115/10/388=513. Không sửa thủ thành.\n')
items=[]
for p in d.glob('*.md'):
 for line in p.read_text(encoding='utf-8-sig').splitlines():
  if m:=re.match(r'^- \[([ xX])\] ([A-Z]+-\d+)\s*[·—–-]?\s*(.+)$',line):items.append((m[2],'done' if m[1].lower()=='x' else 'partial' if 'Thiết kế một phần' in line else 'todo'))
assert len(items)==len(set(x[0] for x in items))==513
print(collections.Counter(x[1] for x in items))
for x in re.findall(r'\]\(([^)]+)\)',(d/fn).read_text(encoding='utf-8')):assert(d/x).exists(),x
