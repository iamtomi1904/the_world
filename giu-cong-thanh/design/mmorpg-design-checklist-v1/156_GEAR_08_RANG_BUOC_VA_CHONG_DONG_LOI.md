# GEAR-08 — Ràng buộc dòng thuộc tính và chống tổ hợp lỗi

**Ngày:**21/10/2026 · **Trạng thái:** Hoàn thiện đặc tả V1 trong phạm vi mục; số là cấu hình cân thử, chưa cân bằng qua bản chơi. Chỉ tài liệu MMORPG, không sửa thủ thành.

**Đầu vào:** [Slot148](148_GEAR_01_SLOT_VU_KHI_VA_QUYEN_MAC.md), [sáu trục149](149_GEAR_02_SAU_TRUC_PHAT_TRIEN_TRANG_BI.md), [rarity150](150_GEAR_03_DO_HIEM_VA_NGON_NGU_HINH_ANH.md), [stats68](68_STAT_02_CHI_SO_DAN_XUAT.md), [ngân sách81](81_STAT_11_NGAN_SACH_VA_MOC_CAN_BANG.md).

## 1. Nhóm loại trừ

Mỗi statKey chỉ có một dòng trên một món. ROOT_STR/AGI/INT/VIT thuộc nhóm ROOT_MAX1. HASTE/PEN_P/PEN_M/CDR/TENACITY/LUCK/LIFESTEAL/CRIT_CHANCE/CRIT_BONUS thuộc nhóm SPECIAL_MAX1. ATTACK_P và ATTACK_M loại trừ nhau. Template vật lý chỉ chọn ATTACK_P; caster/healer chỉ chọn ATTACK_M.

Profile healer thuần hồi phục không roll crit hoặc lifesteal, nhưng có INT/HP/mana/defense/CDR/tenacity/luck khi slot cho phép. Có chiêu gây sát thương trong kit không tự biến pool của món healer thành caster. Root phụ cần được whitelist theo nội tại78; DKN có thể roll INT trên template phù hợp nhưng kiếm vật lý không tự có ATTACK_M. Đổi nghề không reroll đồ cũ.

## 2. Phân biệt lỗi dữ liệu và lựa chọn build

Cấm chỉ số chưa được định nghĩa, giá trị âm, sai đơn vị, vượt cap dòng, ngoài pool, trùng nhóm hoặc root ngoài profile. Affix không cấp skill, ngựa, quyền mặc hoặc bỏ qua cơ chế phòng thủ. Pool phải loại dòng có thể floor về0 ở chất lượng thấp nhất.

Overcap của nhân vật không làm món bất hợp lệ: người chơi có thể cất hoặc dùng sau khi đổi build. Tooltip hiển thị hiệu lực trước/sau, không tự xóa dòng hoặc hoàn tiền. STR trên chùy HGD có lợi ích công và nội tại; VIT vẫn là lựa chọn hợp lệ của build DPS. Ít tối ưu không đồng nghĩa món bị lỗi.

## 3. Roll hữu hạn và sở hữu

Duyệt tập ứng viên hữu hạn và kiểm có tổ hợp đầy đủ theo155, không random đến khi được món đẹp. Người nhặt, client hoặc lần đăng nhập không thay pool/seed đã cam kết. Món cũ sai cấu hình sau patch cần migration công bố trước và log đối chiếu; không xóa hoặc reroll âm thầm tại login.

Tháo/mặc kích hoạt nguồn đúng một lần. Hai nhẫn khác instance có cùng stat được phép nếu không trùng uniqueGroup; nguồn Union được tính riêng đúng công thức. Hai nhẫn chung uniqueGroup chỉ được mặc một món, server chặn trước khi đổi binding. Một instance không được đứng cả hai slot.

## 4. Bộ kiểm trước phát hành

Kiểm anchors và cấp nội suy, bốn family giáp,2H/1H/khiên, các profile vật lý/phép/healer/guardian và28 tổ hợp race–nhánh. Mỗi tuple phát hành phải có đủ n dòng, q thấp nhất không sinh0, mọi dòng %≤5pp, không rare tại V01, không accuracy/evasion. Một món không roll đồng thời STR+AGI hoặc crit+haste. Cùng món ở nhân vật45 và60 giữ nguyên roll.

Kiểm số và tổ hợp không thay thế test UI, mana, TTK/EHP, crit, pet hoặc multiplayer. GEAR-11 vẫn cần xét ngân sách toàn bộ, không được đánh dấu cân bằng chỉ vì constraint hợp lệ.
