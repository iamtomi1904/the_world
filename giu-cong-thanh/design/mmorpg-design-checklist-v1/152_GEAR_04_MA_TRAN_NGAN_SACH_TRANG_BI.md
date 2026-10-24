# GEAR-04 — Ma trận ngân sách slot–cấp–độ hiếm–build

**Ngày:**21/10/2026 · **Trạng thái:** Hoàn thiện đặc tả V1 trong phạm vi mục; số là cấu hình cân thử, chưa cân bằng qua bản chơi. Chỉ tài liệu MMORPG, không sửa thủ thành.

**Đầu vào:** [Slot148](148_GEAR_01_SLOT_VU_KHI_VA_QUYEN_MAC.md), [sáu trục149](149_GEAR_02_SAU_TRUC_PHAT_TRIEN_TRANG_BI.md), [rarity150](150_GEAR_03_DO_HIEM_VA_NGON_NGU_HINH_ANH.md), [stats68](68_STAT_02_CHI_SO_DAN_XUAT.md), [ngân sách81](81_STAT_11_NGAN_SACH_VA_MOC_CAN_BANG.md).

## 1. Ma trận tham số thay cho hàng nghìn dòng lặp

Một cấu hình gear là giao của slot148, mốc dưới đây, family vũ khí/phòng cụ, rarity150 và build profile. Công thức153/154/155 tạo duy nhất base, pool và dải roll cho mỗi giao hợp lệ; giao không hợp lệ bị từ chối, không sinh món rồi bỏ quyền mặc. Bảng là cấu hình thử V1, không kết quả cân bằng hoặc catalog item phát hành.

| ItemLevel | W công2H | A giáp bộ nặng | H HP bộ giáp | J trang sức | B điểm affix |
|---:|---:|---:|---:|---:|---:|
|1|4|6|20|1|2|
|10|30|40|140|4|6|
|15|50|65|230|6|9|
|20|75|90|340|8|12|
|30|125|150|620|12|18|
|40|190|220|920|16|25|
|45|230|260|1100|18|30|

RequiredLevel bằng ItemLevel trong mẫu V1. R0 mở từ1, R1 từ10, R2 từ20, R3 từ30; R4 không phát hành. Nhân vật60 vẫn dùng itemLevel≤45. Đồ chuyển nghề15 và nhánh30 có profile cơ bản đủ dùng và quyền nhận một lần, không tự nhận rarity cao.

## 2. Slot và budget dòng

| Slot/family | Base theo153 | Trọng số slot affix s |
|---|---|---:|
| Trọng kiếm, giáo, rìu, cung, song đoản đao2H | W đúng kênh physical |1,00|
| Trượng/sách2H | Wm=W; heal đọc cùng Wm, không cộng lần nữa |1,00|
| Kiếm1H không quyền khiên, WND/KS |0,90W |1,00|
| Kiếm Kỵ Sĩ1H / chùy HGD |0,82W |0,82|
| Khiên đúng quyền |0,18A armor +0,10A MRes |0,18|
| Đầu |20% bộ giáp |0,60|
| Thân |30% bộ giáp |0,90|
| Tay |10% bộ giáp |0,50|
| Chân |25% bộ giáp |0,70|
| Giày |15% bộ giáp |0,50|
| Dây chuyền |10J HP +2J mana |0,65|
| Mỗi nhẫn |5J HP +J mana |0,40|

Tổng trọng số affix cả bộ là5,65 cho2H hoặc1H+khiên;1H không khiên cũng5,65. Đây là điểm quy đổi thử cho chọn dòng, không chỉ số lực chiến hoặc chứng minh giá trị phòng thủ của khiên bằng18%weapon. Không thêm công vũ khí vào áo; gear bonus công từ affix được ghi nguồn riêng, không cộng như vũ khí thứ hai.

## 3. Build profile và quyền

Weapon STR: STR/VIT, thêm AGI cho VAN/WND và INT cho DKN theo nội tại78; weapon AGI: AGI/VIT, thêm STR cho ASN. Weapon INT: INT/VIT, thêm AGI khi THU/DRK cho phép. Mỗi template khai báo tập root cụ thể, không tự cộng cả tập vào một dòng. Phòng cụ có profile physical-STR, physical-AGI, caster, healer hoặc guardian; item không đổi affix theo người đang mặc.

Cùng áo pháp bào có thể có bản caster và healer với cùng base nhưng pool khác. Người khác build có thể sở hữu/mặc nếu quyền family cho, dòng kém phù hợp không tự biến thành dòng tốt; preview phải nói rõ. Cung/pháp khí không roll physical-STR chỉ vì người nhặt là Human. Ma đạo thư vẫn chỉ NEC, không cấp quyền mới qua affix INT.

## 4. Cấp, rarity và nguồn dự kiến

R0: thưởng truyện, nguồn thường/shop nghề cơ bản; R1: quest phụ/craft; R2: dungeon/tinh anh/craft; R3: thử thách/recipe riêng. Đây là source class, chưa là drop rate hoặc bảo đảm mỗi boss rơi đủ mọi family. ITEM-12 phải gắn sourceTable/recipe thực trước phát hành. Tuyến truyện luôn có đường kiếm gear baseline không cần RNG tốt, paid shop hoặc R3.

Điều kiện roll, số dòng và range xem154/155. Tại cùng slot/level, base không đổi theo rarity; chênh ở affix. Chưa cộng set/proc/nâng/khảm vào bảng: các hệ sau phải phân lại ngân sách gear chung theo81/GEAR-11, không coi đây là quỹ45 rồi thêm một quỹ45 khác.

## 5. Ví dụ đọc giao ma trận

Kiếm WND30 R2: base floor(125×0,90)=112physical; B18×s1×rarity1=18 điểm chia2dòng, mỗi dòng9 điểm trước quality. Khiên HGD45 R3:46armor/26MRes; B30×0,18×1,2=6,48 điểm chia3. Số liệu không phải itemId đã phát hành. Món sai family/rank rarity không có giao hợp lệ.


**Ngân sách lớp phát triển:** [GEAR-11](160_GEAR_11_NGAN_SACH_TONG_VA_GIOI_HAN_PHAT_TRIEN.md) và [proc/set158–159](158_GEAR_09_HIEU_UNG_RIENG_VA_PROC.md) bổ sung envelope. Proc/set đổi một ô affix, không thêm vào bộ đầy dòng; nâng/khảm chưa mở gameplay. Base và công thức cũ không đổi.
