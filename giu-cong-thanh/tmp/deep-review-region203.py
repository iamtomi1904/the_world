from pathlib import Path
import re,collections
d=Path('design/mmorpg-design-checklist-v1');fn='203_RA_SOAT_MO_VUNG_THE_GIOI_MO_VA_DAT_AN_R003.md'
p=d/'202_MAP_MO_VUNG_TRANG_THAI_VA_HUONG_KHAM_PHA_DAT_AN.md';s=p.read_text(encoding='utf-8')
old='Grant dùng character+realm+regionId+revision và nguồn cấp. Hai sectorV03 chung quyền vùng nhưng có edge/checkpoint/discovery riêng. Account reference không cấp grant. Client đổi cấp mô phỏng không làm server đổi quyền; nút “Toàn màu” chỉ tồn tại trong công cụ thiết kế.'
new='Grant có identity ổn định characterId+realmId+regionId; revision là thuộc tính rule/content lúc cấp, không tự tạo quyền mới hoặc reset tiến trình. SourceEventId/receipt chống cấp trùng. Hai sectorV03 chung quyền vùng nhưng có edge/checkpoint/discovery riêng. Account reference không cấp grant; nút “Toàn màu” chỉ là công cụ thiết kế.'
assert old in s;s=s.replace(old,new)
old='Level là một đầu vào của tuyến mở, không phải sự kiện cấp quyền tự động cho toàn map. Mốc cấp tham chiếu vẫn V01:1, V02:11, V03:21, V04:31, V05:41, W06:40/có phe. Nội dung r002 dùng các mốc này để xem mẫu; chưa thêm cổng vô hình chặn mọi đường khám phá trong năm vùng PvE.'
new='Cấp1/11/21/31/41 là mốc khuyến nghị chiến đấu của năm vùngPvE, không là một hardgate chung cho mọi đường đi. Mở địa lý qua grant truyện hoặc tự tới điểm tiếp nhận/mốc khám phá hợp lệ bằng lối mở, server xác nhận. Camera/ping/packet tọa độ không cấp quyền. Cổng truyện, địa hình và hoạt động riêng vẫn kiểm điều kiện; tới sớm không skip quest/warp. W06 giữ điều kiện vào cấp40+, có phe và hướng dẫn quân vụ. Bản r002 đang dùng level làm mô phỏng đơn giản, chưa diễn khám phá sớm hoặc grant bền.'
assert old in s;s=s.replace(old,new)
old='Luồng thiết kế: biết đầu mối hợp lệ → thực hiện đoạn truyện/đăng ký tuyến → server kiểm điều kiện → ghi regionAccessGrant một lần → cập nhật màu và chỉ dẫn.'
new='Luồng truyện: biết đầu mối → thực hiện đoạn truyện/đăng ký tuyến → server kiểm điều kiện → ghi regionAccessGrant một lần → cập nhật màu/chỉ dẫn. Luồng khám phá chủ động: tự tới điểm tiếp nhận hợp lệ qua đường mở → server xác nhận → cấp grant địa lý, giữ riêng quest/checkpoint/warp.'
assert old in s;s=s.replace(old,new);p.write_text(s,encoding='utf-8')
b=f'> **Rà soát r003 ·22/10/2026:** [Thế giới mở, ID quyền và10đấtẩn203]({fn}) làm rõ cấp khuyến nghịPvE/khám phá sớm khác gateW06, grantổnđịnh và assetẩn không phải bảo mậtCSS. Sửa202; r002vẫn prototypelevel. Giữ525task:127hoànthiện/11mộtphần/387chưathiếtkế. Không ảnh/codegame/SQL.\n\n'
for name in ['README.md','01_DANH_MUC_VA_LO_TRINH.md','09_THU_TU_THIET_KE.md','202_MAP_MO_VUNG_TRANG_THAI_VA_HUONG_KHAM_PHA_DAT_AN.md','201_MAP_01_MUOI_DAT_AN_VA_MAU_THEO_TIEN_TRINH_R002.md','191_MAP_09_KHAM_PHA_SUONG_MAP_VA_CHIA_SE.md']:
 p=d/name;p.write_text(b+p.read_text(encoding='utf-8'),encoding='utf-8')
with (d/'18_PROD_09_SO_QUYET_DINH.md').open('a',encoding='utf-8') as f:f.write(f'\n\n## 86. CHG-053 — Rà soát sâu mởvùng/đấtẩn r003 ·22/10/2026\n\n[{fn}]({fn}): người dùng yêu cầu phân tích sâu; sửa202grantidentitybền character+realm+region, revisionchỉthuộctính; nămPvEkhuyếnnghịcấp cho khámphásớm qua điểmhợplệ, khôngskipquest/warp; W06hard40/phe. Phânbiệt đấtchưapháthành với bí mậtasset,10vai tròtruyệnhạnchếlặp/powercreep. Prototype201chưathayđổi luậtruntime.525=127/11/387khôngđổi; chưaảnh/gamecode/SQL/test.\n')
items=[]
for p in d.glob('*.md'):
 for l in p.read_text(encoding='utf-8-sig').splitlines():
  if x:=re.match(r'^- \[([ xX])\] ([A-Z]+-\d+)\s*[·—–-]?\s*(.+)$',l):items.append((x[2],'done' if x[1].lower()=='x' else 'partial' if 'Thiết kế một phần' in l else 'todo'))
assert len(items)==len(set(x[0] for x in items))==525
assert collections.Counter(x[1] for x in items)=={'done':127,'partial':11,'todo':387}
for x in re.findall(r'\]\(([^)]+)\)',(d/fn).read_text(encoding='utf-8')):assert(d/x).exists(),x
print('525tasks/127done/11partial/387todo unchanged; revised links OK')
