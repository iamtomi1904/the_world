from pathlib import Path
import re,collections
d=Path('design/mmorpg-design-checklist-v1');fn='187_MAP_DONG_BO_PHE_BANG_HOI_VA_W06.md'
def edit(name,old,new):
 p=d/name;s=p.read_text(encoding='utf-8');assert old in s,(name,old);p.write_text(s.replace(old,new),encoding='utf-8')
edit('185_MAP_01_DIA_LY_ELARION_VA_MANG_DUONG.md','Nhân vật tối đa60; không thêm map46–60 ở đây.','Nhân vật tối đa60. Năm vùng PvE giữ nội dung tới45; bổ sung W06 tranh chấp40–60 và các bản đồ chức năng theo [phụ lục đồng bộ187]('+fn+'). Không thêm vùng truyện46–60.')
edit('185_MAP_01_DIA_LY_ELARION_VA_MANG_DUONG.md','## 8. Bàn giao trước bước vẽ','## 8. Bàn giao trước bước vẽ\n\n**Phạm vi bổ sung hiện hành:** bản vẽ phải có W06 ở vành Đông Nam, hai đại bản doanh trên hành lang Tây/Đông của IX, đường điều vận tới tiền trạm, và các điểm truy cập GM01/GA01/GA02. Tách lớp PvE/PvP/bảo hộ/instance, không đặt nhà bang và arena thành đảo địa lý giả. Chi tiết, ID và sáu cứ điểm dùng [187]('+fn+').')
edit('184_MAP_04_HO_SO_NAM_VUNG_THE_GIOI_MO.md','| Tổng | Nội dung tới45, nhân vật tới60 | 15× | 82 | 90 | 16 | 5 | 5 | 62 |','| Tổng lõi PvE | Nội dung truyện tới45, nhân vật tới60 | 15× | 82 | 90 | 16 | 5 | 5 | 62 |\n\n**Ngoài lõi PvE:** W06 tranh chấp40–60 dự toán6×V01; FM01hai phe, GM01nhà bang và GA01/GA02đấu trường được mô tả tại [187]('+fn+'). Sáu vùng ngoài trời dự toán21×V01; chưa bao gồm trụ sở/arena/dungeon. NPC/quái/asset mới chưa nằm trong82/90của bảng trên.')
edit('15_PROD_06_PHAM_VI_VA_NGAN_SACH.md','| Vùng | 5, tổng diện tích ngoài trời tham chiếu 15 lần vùng tân thủ. |','| Vùng | Lõi5vùng PvE/15×V01 + W06cấp40–60/6×V01 = **6vùng ngoài trời/21×V01 dự toán**. FM01hai biến thể, GM01/GA01/GA02tính riêng. [Đồng bộ map187]('+fn+'). |')
p=d/'186_FACTION_01_HAI_PHE_BANG_HOI_VA_CHIEN_TRUONG.md';s=p.read_text(encoding='utf-8');p.write_text('> **Địa lý/map hiện hành:** [Phụ lục187]('+fn+') chốt vị trí tương đối, mạng truy cập, chín tiểu khu W06, zone-type và brief vẽ. Khi dựng map dùng cùngID/cứđiểm, chưa thay số cấp/luật phe của hồ sơ này.\n\n'+s,encoding='utf-8')
b=f'> **Đồng bộ bản đồ phe/bang ·22/10/2026:** [Phụ lục187]({fn}) nối W06/đại bản doanh/nhàbang/arena vào địa lý, khí hậu và luật vùng; sửa phạm vi6vùng ngoài trời, không PKnămPvEcũ. Giữ525mục:119hoànthiện/11mộtphần/395chưathiếtkế; chưa vẽ/code. Các phạm vi cũ bên dưới là lịch sử khi xung đột.\n\n'
names=['README.md','01_DANH_MUC_VA_LO_TRINH.md','09_THU_TU_THIET_KE.md','02_THE_GIOI_MY_THUAT_NHIEM_VU.md','15_PROD_06_PHAM_VI_VA_NGAN_SACH.md','181_MAP_10_THOI_GIAN_THOI_TIET_HE_SINH_THAI.md','182_MAP_12_SINH_CANH_QUAI_DONG_VAT_VA_BOSS.md','184_MAP_04_HO_SO_NAM_VUNG_THE_GIOI_MO.md','185_MAP_01_DIA_LY_ELARION_VA_MANG_DUONG.md']
for name in names:
 p=d/name;s=p.read_text(encoding='utf-8')
 if name.startswith('02_'):
  for task in ['MAP-01','MAP-04','MAP-06','MAP-07','MAP-08','MAP-10','MAP-12']:
   s,n=re.subn(r'^(- \[[ x]\] '+task+r' · .*)$',lambda m:m[1]+f' [Phạm vi phe/W06]({fn})',s,flags=re.M);assert n==1,task
 p.write_text(b+s,encoding='utf-8')
sd=Path('design/mmorpg-story-v1');p=sd/'03_DIA_LY_VA_HANH_TRINH.md';p.write_text('> **Phạm vi bản đồ bổ sung ·22/10/2026:** [187](../mmorpg-design-checklist-v1/'+fn+') đặt W06 ở vành Đông Nam và trụ sở phe trên hai hành lang Tây/ĐôngIX. Không thay mười thành/tuyến lịch sử, không mở đường kiểmấnIX–Xsớm; năm vùng PvEcũ vẫn có lộ trình khôngPK. Vị trí chưa phải bản vẽ tỷ lệ.\n\n'+p.read_text(encoding='utf-8'),encoding='utf-8')
with (d/'18_PROD_09_SO_QUYET_DINH.md').open('a',encoding='utf-8') as f:f.write(f'\n\n## 75. CHG-042 — Đồng bộ map với phe/bang ·22/10/2026\n\n[{fn}]({fn}): theo yêu cầu đồng bộ trực tiếp185/184/15/checklist, giữ5PvEkhôngPK và thêmW06ĐôngNam/6×thành6vùngngoàitrời21×. FM01hai hànhlangIX, GM01/GA01/GA02làtemplateinstance; quy định9tiểukhuW06gồm2trạm/6cứđiểm/đườngquânnhu, khíhậu181, đườngtruyệnkhôngquaPK. Ngânsách82NPC/90quáichỉlõiPvE, nội dungmớichưadựtoán. Giữ525=119/11/395, khôngđóngMAP-01hoặcFACTIONchitiết; chưa vẽ/code.\n')
items=[]
for p in d.glob('*.md'):
 for l in p.read_text(encoding='utf-8-sig').splitlines():
  if m:=re.match(r'^- \[([ xX])\] ([A-Z]+-\d+)\s*[·—–-]?\s*(.+)$',l):items.append((m[2],'done' if m[1].lower()=='x' else 'partial' if 'Thiết kế một phần' in l else 'todo'))
assert len(items)==len(set(x[0] for x in items))==525
assert collections.Counter(x[1] for x in items)=={'done':119,'partial':11,'todo':395}
print('525 unique tasks;119done/11partial/395todo')
for name in [fn,'184_MAP_04_HO_SO_NAM_VUNG_THE_GIOI_MO.md','185_MAP_01_DIA_LY_ELARION_VA_MANG_DUONG.md']:
 for x in re.findall(r'\]\(([^)]+\.md)\)',(d/name).read_text(encoding='utf-8')):assert(d/x).exists(),(name,x)
print('Map document links OK')
