> **Quyết định hiện hành · 21/10/2026:** [Trần nhân vật 60, nội dung đến 45](91_CAP_60_NOI_DUNG_45_VA_XP_HAU_TRUYEN.md). Giữ năm vùng hiện tại; cấp 45→60 luyện dài hạn. AP ở 45/60 là 132/177; SP giữ 35, TP giữ 11 sau 45. Quy tắc XP hậu truyện thay bảng chênh cấp khi đủ điều kiện. Các số cấp 45 trong ví dụ vẫn là mốc nội dung, không phải trần nhân vật. Chưa triển khai vào game.

# STAT-02 — Danh mục chỉ số dẫn xuất

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0  
**Trạng thái:** Hoàn thiện đặc tả V1, chưa code/playtest. Số cân bằng là cấu hình đề xuất riêng. [Nghiên cứu](65_THAM_KHAO_HE_CHI_SO_MMORPG_2_5D.md). MMORPG; thủ thành giữ nguyên.

## 1. Nền trước trang bị/buff

L là cấp; thuộc tính đã xử lý nguồn; Wp/Wm là công bộ vũ khí hợp lệ, không tự cộng cả hai tay khi GEAR chưa cho. Khác biệt nghề từ skill, weapon/passive có budget; không cấp hệ số ẩn theo nhãn class.

| Chỉ số | Công thức nền V1 |
|---|---|
| HP tối đa | 180+30×(L−1)+20×VIT |
| Mana tối đa | 60+4×(L−1)+4×INT |
| Công vật lý | 10+2×(L−1)+2×thuộc tính profile+Wp |
| Công phép | 10+2×(L−1)+2×INT+Wm |
| Sức hồi phục | 10+2×(L−1)+2×INT+Wm |
| Giáp/kháng phép | Mỗi loại:5+0,8×(L−1)+VIT+đồ tương ứng |
| Crit chance | Nền5%+nguồn hợp lệ, cap thường60% |
| Crit multiplier | Nền1,50+bonus gồm luck dư, cap3,00 |
| Haste/pen/CDR/tenacity/luck | Nền0, thêm theo nguồn |

Cấp1 không đồ: HP280, mana80, công/heal20, giáp/kháng10. Không cộng phần chuyển đổi VIT/INT thêm lần nữa vì đã nằm trong công thức. Sheet nguồn phải nhận biết conversion thay vì tạo buff bản sao.

## 2. Tài nguyên và hồi phục

V1 dùng mana cho active mọi nghề. Stack/charge chuyên biệt là cơ chế kit, không tự thêm rage/energy chỉ từ tên class. UI không gọi SP kỹ năng thành mana.

HP nền hồi1%maxHP/giây ngoài combat sau8giây không có hành động hostile nhận/gây; trong combat0. Passive/skill ghi nguồn riêng. Mana nền0,5+0,05INT/giây ngoài combat, trong combat nhân0,5. Tất cả là cấu hình thử; scheduler theo server time, không FPS. Tăng max giữ lượng hiện tại, giảm clamp; lên cấp V1 không tự hồi đầy, không tạo vòng thay đồ/reset/relog hồi máu.

## 3. Nhịp và di chuyển

Attack interval theo family, fixture kiếm tập1s chỉ minh họa. Interval=base/((1+haste)×(1−attackSlow)), cap STAT-07; haste không giảm cooldown/niệm hoặc tăng DoT tick mặc định.

Tốc đi nền3U/s; Kỵ Sĩ cưỡi combat nền3U/s để không nhận tốc combat ngoài budget. Profile tọa kỵ di chuyển thử4,5U/s ngoài combat, chuyển combat theo luật mount. Rarity/cánh không quyết speed. Root/stun khóa quyền movement, không speed âm. Profile thật cần scene mẫu/COMBAT/MOUNT cân lại, chưa cam kết thời gian đi map.

## 4. Hit, né và block

Không roll accuracy/evasion thêm sau collision hợp lệ ở V1. Né bằng vị trí hoặc skill-window theo COMBAT. Chưa phát hành stat accuracy/evasion trên gear. Block từ cửa sổ/arc/tag phòng thủ, không RNG tự nhiên. Sheet không cần hàng chỉ số giả để lấp bảng.

Healing done/received, lifesteal, damage increase/reduction, elemental modifier, shield và tenacity có nguồn riêng; công thức ở70–75. Lực chiến chưa thiết kế ở đây, STAT-13 còn riêng.

## 5. Ví dụ cấp45

N=13, build90STR/42VIT: STR103,VIT55,INT13 →HP2600, mana288, melee304+Wp, giáp95,2+đồ. Caster90INT/42VIT →HP2600, mana648, phép/heal304+Wm. Đây là fixture nền, không số DPS/TTK đã cân. Budget cấp/AP/gear/skill cần STAT-11 đối chiếu.


## Bổ sung nội tại chủ đạo theo nhánh · 21/10/2026

[Hồ sơ78](78_NOI_TAI_CHU_DAO_CUA_19_NHANH.md) thêm profile chuyển hóa một/hai thuộc tính cho19nhánh. Lợi ích gốc vẫn giữ; AP + flat root từ gear hợp lệ tạo R giảm dần, bonus đi vào nhóm damage/heal/shield/pet đã quy định, không tự nhân stat vòng lặp. Mở cùng nội tại nhánh ở30, không chiếm13ô hoặc ba ô passive tùy chọn. Hệ số là cấu hình thử, không hoàn thiện bộ kit/cân bằng.


## Phạm vi công thức đến cấp60

Các công thức tăng trưởng theo L tiếp tục tới60; bảng45 vẫn là fixture mốc nội dung. Ví dụ nhân vật60 phân90 AP vào STR,87 vào VIT, chưa gear/buff: STR106, VIT103, INT16; HP4010, mana360, công vật lý340+Wp, giáp155,2+gear. K phòng thủ theo cấp nguồn tiếp tục cùng công thức. Đây là số thiết kế, chưa xác nhận cân bằng qua chơi thử.
