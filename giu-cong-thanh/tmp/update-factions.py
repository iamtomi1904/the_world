from pathlib import Path
import re,collections
d=Path('design/mmorpg-design-checklist-v1');fn='186_FACTION_01_HAI_PHE_BANG_HOI_VA_CHIEN_TRUONG.md'
tasks=[('01','Hoàn thiện khung hai phe cùng mục tiêu khác tư tưởng, chọn phe cấp15, quan hệ bang và danh mục5loại không gian; hồ sơ186, chưa triển khai.'),('02','Chi tiết gia nhập/đổi phe, account-realm, khóa mùa, roster và chuyển bang; UI xem trước hậu quả.'),('03','Thiết kế hai đại bản doanh phe: vị trí, NPC chức năng/truyện, kiến trúc, nhiệm vụ và quyền dịch vụ.'),('04','Thiết kế W06 cấp40–60: layout, hai trạm, sáu cứ điểm, chiếm/contest/leash/biên an toàn và lịch thực.'),('05','Tài nguyên chiến trường: sinh nguồn, chia lợi ích, sản xuất/vận chuyển/nộp/rơi kiện, binding và hạn mức.'),('06','Giải GA01 mạnh nhất server: roster, thể thức, matchteam, số người, điểm mục tiêu, chuẩn hóa PvP và trọng tài.'),('07','Giải GA02 nội bộ phe: vòng loại/chung kết, chống đổi bang, tie-break, kết mùa và quyền Bang Dẫn Ước.'),('08','Hiệu ứng theo hạng bang: nguồn điểm được hưởng, trần, entitlement, mùa hết hạn và không tạo snowball PvP.'),('09','Cân bằng phe: quân số chiến trường/hàng chờ, chống alt giữ chỗ/thông đồng, người mới và phe ít người.'),('10','Map bang GM01: quyền instance, nhà hội/xưởng/kho/sân tập, nâng công trình và bảo toàn tài sản.'),('11','UI phe/bang/chiến trường và bản đồ owner/contest, đăng ký giải, lịch/giờ thực, cảnh báo PK và accessibility.'),('12','Ngân sách mới NPC/quái/asset/map, dữ liệu authoritative/PostgreSQL, QA combat/kinh tế/tải và thứ tự phát hành.')]
p=d/'07_MMO_CONG_DONG_VA_VAN_HANH.md';s=p.read_text(encoding='utf-8');assert 'FACTION-01 ·' not in s
s+='\n\n## Bổ sung phạm vi — Hai phe và các chiến trường ·22/10/2026\n\n[Khung hiện hành186]('+fn+'). Bổ sung12task; GUILD/PVPcũ vẫn cần thiết kế chi tiết, không mặc định đã hoàn thành.\n\n'
for id,desc in tasks:s+=f'- [{"x" if id=="01" else " "}] FACTION-{id} · {desc}'+(f' [Mở]({fn})' if id=='01' else '')+'\n'
p.write_text(s,encoding='utf-8')
b=f'> **Mở rộng phe/PvP ·22/10/2026:** [Hai phe, bang hội và năm loại không gian mới]({fn}). Chọn phe khi chuyển chức15; W06cấp40–60cóPKđối phe, samefactionchỉđấu trong giải chính thức. Thay giới hạn “khôngmap46–60/chưaPvP” riêng phạm vi mới, giữnguyên5vùngPvEcũ/cap60. Checklist **525mục:119hoànthiện /11mộtphần /395chưa thiết kế**. Chưa code/vẽ.\n\n'
files=['README.md','01_DANH_MUC_VA_LO_TRINH.md','09_THU_TU_THIET_KE.md','15_PROD_06_PHAM_VI_VA_NGAN_SACH.md','17_PROD_08_CAP_DO_VA_MO_RONG.md','91_CAP_60_NOI_DUNG_45_VA_XP_HAU_TRUYEN.md','109_COMBAT_11_QUYEN_GIAO_TRANH_VA_AN_TOAN.md','07_MMO_CONG_DONG_VA_VAN_HANH.md','184_MAP_04_HO_SO_NAM_VUNG_THE_GIOI_MO.md','185_MAP_01_DIA_LY_ELARION_VA_MANG_DUONG.md']
for name in files:
 p=d/name;s=p.read_text(encoding='utf-8')
 if name.startswith('09_'):
  s+='\n\n## Thứ tự bổ sung — hệ hai phe và chiến trường\n\nPhụ thuộc cap/STAT/COMBAT/GUILD/CAP; khung01 đã thiết kế, các bước sau chưa hoàn thiện. Dựng theo cổng nghiệm thu, không bậtPKđại trà trướcQA.\n\n| Thứ tự | ID | Bàn giao | Hồ sơ |\n|---|---|---|---|\n'
  for id,desc in tasks:s+=f'| F{id} | FACTION-{id} | {desc} | [Khung186]({fn}) |\n'
 p.write_text(b+s,encoding='utf-8')
sd=Path('design/mmorpg-story-v1');p=sd/'05_PHE_PHAI_VA_NHAN_VAT.md';p.write_text('> **Hai phe người chơi mới ·22/10/2026:** [Hòa Minh/Thiết Thệ](../mmorpg-design-checklist-v1/'+fn+') là liên kết chính trị riêng, không thay năm tổ chức cốt truyện bên dưới. Mọi race/nghề hợp lệ chọn được cả hai; không phe thiện/ác cố định. Chưa đổi cốt truyện kết thúc hoặc gánNPCcũtựđộng.\n\n'+p.read_text(encoding='utf-8'),encoding='utf-8')
with (d/'18_PROD_09_SO_QUYET_DINH.md').open('a',encoding='utf-8') as f:f.write(f'\n\n## 74. CHG-041 — Hai phe, W06 và giải bang hội ·22/10/2026\n\n[{fn}]({fn}): yêu cầu mới mởPvPđối phe/W06cấp40–60, haihubphe/nhàbang/GA01/GA02. Thiết kế HòaMinh–ThiếtThệ, chọnphechuyểnchức15/account-realm, bangcùngphe, samefactionkhôngđánhW06nhưngđượcmatchteamtronggiải. Mục tiêu6×V01choW06, sáucứđiểm, khôngngầmtănggear60/XP/minttiền. Overridekhôngmap46–60/PvPdisabledriêngscope; CAPvẫnchưachốt. Thêm12FACTIONtasks,01hoànthiệnkhung;525=119/11/395. NPC/quái/assetmớichưadựtoán, khôngcoi90/82cũđãđủ. Chưa code/vẽ/runtime.\n')
items=[]
for p in d.glob('*.md'):
 for l in p.read_text(encoding='utf-8-sig').splitlines():
  if m:=re.match(r'^- \[([ xX])\] ([A-Z]+-\d+)\s*[·—–-]?\s*(.+)$',l):items.append((m[2],'done' if m[1].lower()=='x' else 'partial' if 'Thiết kế một phần' in l else 'todo'))
assert len(items)==len(set(x[0] for x in items))==525
print(collections.Counter(x[1] for x in items))
for x in re.findall(r'\]\(([^)]+)\)',(d/fn).read_text(encoding='utf-8')):assert(d/x).exists(),x
print('Links OK; scope overrides and12new tasks saved')
