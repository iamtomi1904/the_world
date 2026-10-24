# GEAR-09 — Hiệu ứng riêng, dòng cố định và proc

**Ngày:**21/10/2026 · **Trạng thái:** Hoàn thiện đặc tả V1 trong phạm vi mục; chưa code, vẽ hoặc kiểm chứng cân bằng bằng gameplay.

**Đầu vào:** [Slot148](148_GEAR_01_SLOT_VU_KHI_VA_QUYEN_MAC.md), [ma trận152](152_GEAR_04_MA_TRAN_NGAN_SACH_TRANG_BI.md), [affix154](154_GEAR_06_POOL_DONG_THUOC_TINH.md), [số dòng155](155_GEAR_07_SO_DONG_TIER_VA_QUY_TAC_ROLL.md), [ngân sách81](81_STAT_11_NGAN_SACH_VA_MOC_CAN_BANG.md). Chỉ MMORPG, không sửa thủ thành.

## 1. Ba cấu trúc món

Đồ thường giữ cấu trúc152–155. Món có dòng cố định vẫn dùng số dòng và điểm của rarity, không được fixed cộng thêm đủ bộ random. Template R3 có hiệu ứng riêng dùng **hai affix thường và một ô ngân sách hiệu ứng cố định**; p của từng ô vẫn=B×s×1,20/3. Không chia lại cho2 để hai affix còn lại mạnh hơn.

V1 chỉ vũ khí tay chính R3/i30+ được có một proc riêng trong bảng dưới. Một bộ song dao vẫn một vũ khí/một proc. Proc không tự rơi như một affix weight1; template nguồn/recipe phải được khai báo trước phát hành. R4 Di sản vẫn chưa mở. Một món không vừa thuộc cấu trúc proc vừa đóng góp ô ngân sách set.

## 2. Năm hiệu ứng mẫu có thông số

p là điểm của ô đã đổi. Mọi công thức dùng p hữu tỉ rồi floor **kết quả cuối**, không floor p trước rồi nhân. Kết quả0 khiến template không được phát hành. Cooldown tính bằng giây server.

| Effect ID / tên làm việc | Trigger đủ điều kiện | Hiệu ứng | ICD | Thời hạn / phạm vi |
|---|---|---|---:|---|
| ITEM_GUARD / Chốt Bảo Hộ | Chủ còn sống nhận direct hostile HP damage>0 | Khiên bản thân=floor(10p×0,80) |20|3s, không aura |
| ITEM_BRACE / Đai Gia Cố | Chủ còn sống nhận direct hostile HP damage>0 | +floor(1,50p×0,80) giáp phẳng |18|6s, không giảm damage% |
| ITEM_EDGE / Dư Lực | Đòn trực tiếp của chủ gây HP damage>0 | Một packet raw=floor(6p), cùng physical/magic và element profile của vũ khí |12|Cùng đích còn sống, không lan |
| ITEM_CARE / Dược Dưỡng | Chủ hồi HP hiệu quả>0 cho đồng minh khác | Hồi thêm=floor(10p×0,80) cho đúng người đó |20|Một lần, đích còn sống/hợp lệ trong6U và LoS |
| ITEM_FOCUS / Vòng Điều Tức | Skill chủ đã trả mana và Release hợp lệ | Hồi min(floor(4p×0,80), mana thực đã trả của action) |30|Bản thân; không vượt maxMP |

ITEM_CARE chỉ trên template healer. ITEM_EDGE chỉ trên template có direct damage phù hợp. ITEM_GUARD/BRACE/FOCUS có thể ở family hợp lệ, không cấp quyền family khác. Vũ khí45 R3 s1 có p12: GUARD96 khiên, BRACE14giáp, EDGE72raw, CARE96heal, FOCUS tối đa38mana. Đây là cấu hình cân thử, không chứng minh năm lựa chọn ngang nhau.

## 3. Chống kích hoạt dây chuyền

Proc chỉ lắng nghe event có tag eligible từ action gốc của chủ. Không nhận trigger từ DoT/HoT tick, damage phản, môi trường, proc khác, pet hoặc sự kiện tự gây. Pet vẫn dùng sát thương bình thường nhưng không tự mở thêm kênh proc cho chủ. Mỗi cặp owner/action chỉ được thử một lần cho proc; action trúng nhiều đích chọn hit hợp lệ đầu tiên theo thứ tự thời điểm rồi entityId. Không bắn một proc trên mỗi projectile hoặc nửa đòn song dao.

Packet ITEM_EDGE dùng pipeline phòng thủ tại hit, không crit/lifesteal/proc, không hưởng thêm hệ số skill/root-passive của nhánh. Đây là raw cố định theo ngân sách item, không P/M coefficient được cộng lại công chủ. Heal CARE không crit/proc; shield vẫn chịu cap50%HP và nhóm strongest. FOCUS không nhận action bị ngắt trước Release hoặc action miễn mana; không reset cooldown/skill rank. Proc tài nguyên cũng không khởi phát proc tiếp.

## 4. Lifecycle và trạng thái dùng chung

ICD lưu theo owner+effectFamily, không theo instanceId hoặc ô hotbar. Đổi hai vũ khí cùng proc không làm ICD sẵn; thời gian tiếp tục qua logout/đổi kênh. Dùng instance khác không tạo họ hiệu ứng mới bằng tên dịch khác. Trước khi fire phải kiểm owner còn sống, còn quyền dùng item, encounter/đích hợp lệ và ICD đã sẵn.

Tháo nguồn gỡ shield/buff còn sống từ nguồn đó, không trừ lại heal/mana đã hồi hoặc HP đã mất. Packet đã được server cam kết resolve theo action, không nhân bản khi tháo nguồn. ITEM_GUARD dùng group riêng, không cộng nhiều bản cùng họ; shield của skill khác vẫn theo group/cap tập trung. Proc không tăng quota thưởng, gọi pet hoặc thay lựa chọn truyện.

## 5. VFX/UI và kiểm sau

Chỉ một tín hiệu ngắn: khóa khiên, vệt gia cố, tia dư lực, dấu cộng xanh hoặc hạt mana; không dùng toàn bộ VFX Q/E/R để giả kỹ năng mới. Tooltip ghi trigger, lượng theo chính item, ICD, điều kiện và phần affix đã đổi. Không chiếm13ô hoặc tạo nút active giả. Log phân biệt itemProc với skill và không leak chỉ số địch bị ẩn.

Cần kiểm multi-hit/AoE, song dao, hai luồng damage cùng tick, owner chết, overheal, target chết, logout và ICD,5%cap, aura/cap shield. Chưa chạy gameplay hoặc tạo asset. Source/recipe cụ thể tiếp tục qua ITEM-12/LOOT/CRAFT.

## 6. Cam kết event và mana dùng chung

Mọi quyền kích hoạt được xử lý nguyên tử ở state owner/ICD. Damage trigger nhận snapshot event server sau mitigation/shield; mỗi itemProc ghi parentActionId để không coi proc là action gốc mới. EDGE dùng Physical/Neutral hoặc Magic/Neutral theo template vũ khí đã khai báo, không tự đổi element theo skill vừa kích. CARE kiểm lượng hồi hiệu quả sau overheal, không tự chọn mục tiêu khác nếu người nhận không còn hợp lệ.

FOCUS và SCRIBE dùng chung ledger owner+actionId: **tổng hoàn mana từ các item/set không vượt mana thực đã trả**. Ưu tiên FOCUS trước SCRIBE; mỗi nguồn nhận min(lượng thiết kế, phần còn được hoàn, mana còn thiếu). Chỉ bắt ICD khi nguồn thực sự hồi>0; phần không hồi không tích để dùng sau. Đang đầy mana không nhận phần hoàn ngầm hoặc trigger dây chuyền. Đây là proc có chi phí cơ hội và ICD, không hoàn lại cooldown/chi phí khi cast bị hủy.

Ví dụ action trả30mana, FOCUS có mức38 và SCRIBE64: tổng hồi tối đa30, không94hoặc60. Nếu FOCUS đangICD, SCRIBE có thể hồi tối đa30; nếu cảhaiICD thì0. Ledger không reset bởi retry response hoặc nhiều event Release cùngaction.
