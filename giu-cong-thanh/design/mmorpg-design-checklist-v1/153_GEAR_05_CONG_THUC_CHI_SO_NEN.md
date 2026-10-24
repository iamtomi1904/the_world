# GEAR-05 — Công thức và bảng chỉ số nền

**Ngày:**21/10/2026 · **Trạng thái:** Hoàn thiện đặc tả V1 trong phạm vi mục; số là cấu hình cân thử, chưa cân bằng qua bản chơi. Chỉ tài liệu MMORPG, không sửa thủ thành.

**Đầu vào:** [Slot148](148_GEAR_01_SLOT_VU_KHI_VA_QUYEN_MAC.md), [sáu trục149](149_GEAR_02_SAU_TRUC_PHAT_TRIEN_TRANG_BI.md), [rarity150](150_GEAR_03_DO_HIEM_VA_NGON_NGU_HINH_ANH.md), [stats68](68_STAT_02_CHI_SO_DAN_XUAT.md), [ngân sách81](81_STAT_11_NGAN_SACH_VA_MOC_CAN_BANG.md).

## 1. Đường tăng base

Dùng bảng anchor152. Với ItemLevel nguyên i giữa a,b: X(i)=X(a)+(X(b)−X(a))×(i−a)/(b−a), cho X=W,A,H,J,B. Giữ giá trị hữu tỉ trong cấu hình, chỉ floor chỉ số xuất ra mỗi slot ở bước cuối. Không nội suy ngoài1…45. Mốc15 được khai báo riêng cho quà nghề. Mốc i tùy ý là khả năng công thức, không tự mở thêm item vào catalog.

Base không roll và không nhân rarity. Một template/level/family cho cùng kết quả ở web và PC. Chuyển rarity chỉ cập nhật cấu trúc affix qua thao tác hợp lệ về sau, không tăng base âm thầm. Các điểm anchor là đề xuất cần thử nghiệm, không lấy từ game tham khảo.

## 2. Phòng cụ

Bộ5món dùng trọng số đầu0,20/thân0,30/tay0,10/chân0,25/giày0,15. Mỗi slot nhận floor(H×weight) HP, floor(A×armorFactor×weight) giáp và floor(A×resistFactor×weight) kháng phép.

| Family | armorFactor | resistFactor | HP factor |
|---|---:|---:|---:|
| Trọng giáp |1,00|0,55|1,00|
| Giáp chiến |0,80|0,70|1,00|
| Giáp nhẹ |0,65|0,80|1,00|
| Pháp bào/nghi lễ |0,45|1,00|1,00|

Tổng5slot có thể thấp hơn floor(tổng) do floor từng món; không thêm điểm bù ẩn cho đủ bộ. Không có bonus mặc đủ5món từ quy tắc chia này. Quyền mặc theo148; pháp bào có kháng cao hơn không thay armor bằng MRes khi nhận physical hit.

## 3. Vũ khí và trang sức

W nhân family factor ở152, floor ở cuối. Cung/dao dùng AGI, kiếm/giáo/rìu/chùy dùng STR theo67; phép/heal đọc INT và Wm theo68. Kiếm1H0,90 cho profile không dùng khiên; kiếm Knight0,82 là template khác, không đổi base theo việc tháo khiên. Nếu không cầm khiên vẫn giữ0,82. Cung không cần mua mũi tên consumable V1; đạn là phần action, không nguồn damage kép.

Không thay attack interval/packet coefficient98 để bù W. Kiếm1H và2H có utility/range khác nhau; so DPS thực cần skill profile, không suy chỉ từ W. Song dao chỉ nhận một lầnW; ma đạo thư/trượng chỉ nhận một lầnWm dù dùng cả heal và damage.

Trang sức base HP/mana theo152, không base root/haste/crit. HP từ áo/trang sức cộng phẳng vào maxHP sau công thức gốc, không được chuyển lại thành VIT. Ví dụ+220HP không tự tạo+11armor/+11MRes như+11VIT.

## 4. Fixture số để kiểm công thức

| Level |2H W| HP áo5món | HP trang sức3món | Mana trang sức | Heavy armor/MRes | Robe armor/MRes |
|---:|---:|---:|---:|---:|---|---|
|1|4|20|20|4|3/0|0/3|
|10|30|140|80|16|40/20|15/40|
|15|50|229|120|24|63/33|26/63|
|20|75|340|160|32|89/46|40/89|
|30|125|620|240|48|149/80|65/149|
|40|190|920|320|64|220/120|95/220|
|45|230|1100|360|72|260/140|115/260|

Fixture45 build90STR/42VIT trước gear theo68:HP2600/công304/giáp95,2. Gear2H+heavy+3trang sức R0:HP4060, mana360, công534, giáp355,2, MRes235,2. Caster cùng AP vàoINT có công/heal534, mana720, HP4060, armor210,2 vàMRes355,2 với robe. Không affix/skill/buff. Đây là kiểm số đầu vào, không DPS hoặc tỷ lệ đóng góp45% gear.

Đổi từ gear0 sang bộ mới giữ HP/mana hiện tại, không tự heal. Mỗi nguồn tồn tại một record, không cộng cả tổng bộ và từng slot. Kiểm hurt/collision không đổi bởi con số giáp hoặc độ hiếm.
