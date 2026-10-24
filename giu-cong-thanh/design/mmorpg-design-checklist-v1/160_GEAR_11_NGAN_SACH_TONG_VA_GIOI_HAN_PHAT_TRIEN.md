# GEAR-11 — Ngân sách tổng và giới hạn phát triển

**Ngày:**21/10/2026 · **Trạng thái:** Hoàn thiện đặc tả V1 trong phạm vi mục; chưa code, vẽ hoặc kiểm chứng cân bằng bằng gameplay.

**Đầu vào:** [Slot148](148_GEAR_01_SLOT_VU_KHI_VA_QUYEN_MAC.md), [ma trận152](152_GEAR_04_MA_TRAN_NGAN_SACH_TRANG_BI.md), [affix154](154_GEAR_06_POOL_DONG_THUOC_TINH.md), [số dòng155](155_GEAR_07_SO_DONG_TIER_VA_QUY_TAC_ROLL.md), [ngân sách81](81_STAT_11_NGAN_SACH_VA_MOC_CAN_BANG.md). Chỉ MMORPG, không sửa thủ thành.

## 1. Không tạo ngân sách mới cho từng lớp

Giữ mô hình35nền/AP–45gear–20class tại81.45là phân bổ thiết kế theo hiệu quả, không45%mọi stat hoặc một số nhân có thể áp trực tiếp. Món hiệu lực phải có sổ nguồn: base + affix + fixed/proc/set reserve + enhancement + socket. Skin/cánh/giáp ngựa bằng0nguồn combat. Không ghi cả bonus item và một tổng bộ gear cho cùng stat.

## 2. Hợp đồng giới hạn cho các hệ sau

| Lớp | Envelope V1 | Quy tắc |
|---|---|---|
| Base | Theo152/153, đúng một lần | Không nhân rarity, không random base |
| Affix/fixed/set | Tổng điểm≤B×s×rarityBudget | Ô đổi sang hiệu ứng không đồng thời là affix |
| Enhancement | Tăng tối đa8% **base numeric** của chính món | Không nhân affix/proc/set/socket hoặc attack interval |
| Socket | Tổng điểm mọi socket của món≤0,15×B×s | Không tính riêng15%cho mỗi lỗ hoặc cho mỗi viên |
| Cosmetic |0 | Không stat/hitbox/range/loot/XP |

Envelope là ràng buộc đầu vào UPGRADE/SOCKET, **chưa mở nút nâng hoặc khảm**. Cap số cấp nâng, chi phí, số lỗ, recipe và quy tắc thất bại tiếp tục được thiết kế tại các task đó. Baseline hiện tại vẫn+0/không socket. Enhancement factor e∈[0;0,08], mỗi giá trị stat tăng thêm=floor(baseStat×e), không reapply từng cấp theo lãi kép. Chỉ nâng những trường base có trên món; không tạo flat root hoặc mana nếu base vốn không có.

Socket V1 chỉ được phân vào HP/mana/armor/MRes/công phẳng theo slot/profile của154 và cùng đơn vị điểm; không root, haste/pen/crit/CDR/luck/lifesteal. Socket không là cửa sau cho nguồn hiếm. Đá hoặc số lỗ vượt envelope khiến template không hợp lệ, không truncate âm thầm món người chơi đã mua.

## 3. Ví dụ chống nhân nhiều lớp

Kiếm2H45R3 có base230, quỹ affix36. Bản thường có3ô p12; bản proc có2affix p12 và1proc p12, không thêm ô thứ tư. Enhancement tối đa floor(230×0,08)=18công; socket tổng≤4,50điểm, nếu công phẳng thì floor(4,50×1,50)=6công ở giá trị tối đa. Tổng base+nâng+socket=254 trước affix, không phải230×1,20×1,08×1,15.

Cả bộ slot-weight5,65 ở45có quỹ affix R3=203,40điểm và socket tối đa25,425điểm chia theo từng món. Không cộng point theo người cưỡi/ngựa hoặc cả hai dao. Điểm này là tiền tệ cân nội bộ, không vật phẩm hoặc tiền có thể mua.

## 4. Gate cân bằng phải đo

Chuẩn so là cùng nhánh/cấp/AP/SP/TP, bộ R3+0 với affix cố định làm mẫu, chưa proc/set, không trả phí. So bộ có đầy đủ phát triển bằng log10s/60s, median và biến thể gameplay. Mục tiêu thử: tăng sustained DPS≤12%, EHP fixture≤12%, effective heal/shield≤10%so baseline khi mở nâng+khảm; phải xét burst và uptime riêng. Đây là ngưỡng thiết kế để phát hiện cần giảm envelope, không kết quả đã đạt.

Proc/set là sidegrade đổi affix nên phải so với ô dòng đã bỏ: không được lấy bản không dòng làm đối chứng rồi gọi hiệu ứng free là cân. Nếu vượt vì crit/pen/skill/passive78tương tác, giảm phân bổ hiệu ứng/envelope ở phiên bản mới; không sửa công thức phòng thủ hoặc hệ số skill ngoài phạm vi. Không cap damage realtime của từng hit để che cấu hình vượt ngân sách.

## 5. Thứ tự kiểm và dữ liệu

Kiểm đủ19nhánh/28tổ hợp,30/45/60, vật lý/phép/DoT/pet/healer/tank, hardCC-immune boss, target defense khác nhau và buff nhóm. So cả nguồn hiếm tốt nhất và build root, không chỉ đồ roll trung bình. Mọi recipe thêm upgrade/socket/set phải có budget revision, nguồn/sink và thông báo migration nếu đổi đồ cũ.

GEAR-11 hoàn thiện mô hình và gate, chưa chứng minh phân bổ45đã đạt bằng combat. Không tự đóng STAT balancing, GATE-01, SOCKET hoặc UPGRADE. Các cấu hình vượt gate không phát hành cho người chơi thật trước khi điều chỉnh và kiểm lại.
