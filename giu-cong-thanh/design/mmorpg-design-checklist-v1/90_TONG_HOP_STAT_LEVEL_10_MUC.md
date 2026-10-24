> **Quyết định hiện hành · 21/10/2026:** [Trần nhân vật 60, nội dung đến 45](91_CAP_60_NOI_DUNG_45_VA_XP_HAU_TRUYEN.md). Giữ năm vùng hiện tại; cấp 45→60 luyện dài hạn. AP ở 45/60 là 132/177; SP giữ 35, TP giữ 11 sau 45. Quy tắc XP hậu truyện thay bảng chênh cấp khi đủ điều kiện. Các số cấp 45 trong ví dụ vẫn là mốc nội dung, không phải trần nhân vật. Chưa triển khai vào game.

# Tổng hợp STAT-10…14 và LEVEL-01…05

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0  
**Phạm vi:** MMORPG 2.5D pixel V4, cấp tối đa 45, năm vùng và 13 ô kỹ năng/vật phẩm. Thủ thành giữ nguyên. [Nguồn nghiên cứu](79_THAM_KHAO_TIEN_TRINH_VA_VAI_TRO_MMORPG.md).

## 1. Mười hồ sơ bàn giao

| Mục | Hồ sơ | Quyết định chính |
|---|---|---|
| STAT-10 | [Mở](80_STAT_10_DOT_HOT_VA_BOSS.md) | DoT/HoT snapshot, tick/refresh/stack/attribution, %HP boss quotas và giới hạn proc. |
| STAT-11 | [Mở](81_STAT_11_NGAN_SACH_VA_MOC_CAN_BANG.md) | Budget cấp/gear/class/hệ phụ, nội tại nhánh trong quỹ, fixture DPS/TTK và ma trận cân sau. |
| STAT-12 | [Mở](82_STAT_12_BANG_CHI_SO_VA_NGUON.md) | Cửa sổ C tổng quan/chi tiết/nguồn/nội tại, current-preview-cap và tooltip đúng đơn vị. |
| STAT-13 | [Mở](83_STAT_13_DANH_GIA_KHONG_LUC_CHIEN_DON.md) | Chốt không dùng lực chiến tổng bản đầu, thay bằng điều kiện sẵn sàng và chỉ số theo vai trò. |
| STAT-14 | [Mở](84_STAT_14_VAI_TRO_SOLO_VA_GHI_CONG.md) | Nhóm19nhánh, ngưỡng solo/nhóm và ledger ghi công heal/shield/tank/CC, không chỉ last-hit. |
| LEVEL-01 | [Mở](85_LEVEL_01_DUONG_XP_CAP_45.md) | Đường XP1–45, quota tuyến chính/năm vùng, mục tiêu thời gian thử và xử lý cap. |
| LEVEL-02 | [Mở](86_LEVEL_02_NGUON_XP_VA_GIOI_HAN.md) | Nguồn XP một lần/lặp, quái theo cấp/grade, levelFactor, loại spawn/proc farm và event ledger. |
| LEVEL-03 | [Mở](87_LEVEL_03_XP_NHOM_VA_HO_TRO.md) | Pool/share theo eligibility, support/death, chênh cấp/carry và chưa mở level sync V1. |
| LEVEL-04 | [Mở](88_LEVEL_04_DIEM_RESET_VA_PRESET.md) | Đồng bộ AP132/SP35/TP11, grant đa cấp, reset/nháp và phânAP chung khác presetK. |
| LEVEL-05 | [Mở](89_LEVEL_05_MOC_MO_HE_VA_HUONG_DAN.md) | Lịch mở skill/nghề15/nhánh30/nội tại/guide và cách xử lý chuyển chức muộn. |


Các mục hoàn thiện phạm vi hồ sơ thiết kế. Không chuyển trạng thái Sản xuất/Tích hợp/Kiểm chứng thành hoàn tất, không tick SCREEN/COMBAT/LOOT/NET thay các nhóm chuyên môn.

## 2. DoT/HoT và ngân sách sức mạnh

Fixture bỏng có tổng hệ số 0,6×công phép trong 5 giây; chảy máu 0,5×công vật lý trong 5 giây; HoT 0,8×healing trong 5 giây. Độc dùng tối đa ba stack chung trên mục tiêu, mỗi stack có tổng 0,15×công phép trong 6 giây. Đây là profile thử, không cấp miễn phí cho mọi nhánh hoặc sao ngọc thủ thành.

Tick đầu không tức thì; refresh không tạo thêm tick miễn phí. Mặc định không crit, hút máu hoặc phản damage từ tick. Boss chịu trần DoT %HP theo nguồn, nhóm hiệu ứng và tổng toàn đội; không nhân giới hạn theo từng player. Các trần 0,25%/1%/2% mỗi giây cùng giới hạn theo công nguồn là cấu hình chưa playtest.

Ngân sách 35/45/20 và quỹ hệ phụ 15 giữ nguyên. Nội tại thuộc tính của 19 nhánh nằm trong phần class, không thêm quỹ thứ tư. Fixture DPS/TTK là cọc mốc để cân sau, không kết quả đã đạt. V1 không có một số lực chiến tổng để khóa truyện hoặc đánh giá healer/tank.

## 3. XP và tuyến chính

XP từ cấp L lên L+1 là T(L)=100+20L+10L², với L từ 1 đến 44. Từ cấp 1 đến 45 cần 317.900 XP. Tổng tại các mốc 10/20/30/40/45 là 4.650/30.400/97.150/224.900/317.900.

Authoring dự kiến 70% quota từ main quest/objective và 30% từ combat tuyến chính. Nếu có cách giải quyết hợp lệ để bỏ qua combat, objective phải bù đúng ngân sách. Chưa có đủ bảng reward và playthrough để chứng minh quota đạt; không tự phát XP theo cấp đích ở client.

Thời gian lần đầu đọc truyện và khám phá vừa có mục tiêu 38–57 giờ, không phải kết quả đo hoặc giới hạn chơi mỗi ngày. Nhiệm vụ phụ là lựa chọn bổ sung. Quái có XP theo cấp/grade và hệ số chênh cấp; không character XP từ craft loop, offline hoặc booster trả phí.

Ở cap 45 hoặc alpha 10, XP thừa không tích thành kho cho bản mở rộng, không tự đổi vàng hoặc điểm thuộc tính.

## 4. Nhóm và vai trò

Kill XP chia cho người đủ quyền, gồm heal/shield/tank/CC hữu ích, không chỉ last-hit. Pool=base×[1+0,2×min(n−1,4)], chia n rồi nhân hệ số cấp/carry và floor. Ba người đồng cấp với base 100 nhận 46 XP mỗi người; hai XP dư do làm tròn bị bỏ. n là người có quyền nhận, không số người tối đa của party; n=0 thì không chia pool.

Trong party, có người tham gia hữu ích cao hơn recipient trên năm cấp thì người thấp nhận hệ số kill XP 0,25. Reward truyện cá nhân đúng điều kiện giữ bảng gốc. Người cao ngoài party đi ngang không tạo penalty để tránh grief; encounter claim và lạm dụng nhóm ngoài party còn cần COMBAT/SAFE bổ sung. Không tuyên bố đã ngăn mọi hình thức kéo cấp.

Level sync chưa mở V1 vì còn phải thiết kế cách hạ gear/skill. Người chết sau đóng góp đủ vẫn có quyền khi còn encounter; overheal, CC miễn nhiễm hoặc đứng AFK không đủ điều kiện.

Tank/healer có mục tiêu damage solo tối thiểu 55%/65% mốc DPS, không phải buff ẩn theo class. Boss truyện không bắt tổ đội hoặc đặt DPS enrage khắt khe. Chưa có kit và dữ liệu đo để xác nhận các ngưỡng này đã đạt.

## 5. Điểm và mốc mở

AP là 3 điểm mỗi cấp từ 2 đến 45, tổng 132; SP 35; TP 11. Alpha cấp 10 có AP27/SP2/TP0. Grant một lần theo mốc; reset miễn phí ở nơi quy định ngoài combat, giữ HP/mana và cooldown.

V1 có một phân bổ AP chung đang hiệu lực. Hai preset K lưu SP/TP và thanh thao tác, không có hai pool AP tự đổi theo preset.

Chuyển nghề 15 và nhánh 30 cần nhiệm vụ. Chậm chuyển chức vẫn nhận XP/điểm, không tự chọn nghề. Ngựa nền Kỵ Sĩ ở cấp 15; nội tại chủ đạo và cánh Thánh/Hắc ở cấp 30. Cánh không phải dạng cưỡi R hao mana như thủ thành. Hệ sâu chưa đủ thiết kế thì không gán cấp mở tùy ý.

## 6. Tiến độ và giới hạn

Chưa code, tạo cấu hình runtime/schema, vẽ asset hoặc mockup đầy đủ, làm xong 19 kit/loot/reward tables hay playtest. Các số V1 là quyết định cân thử theo ủy quyền, không số sao từ RO/ToS hoặc kết quả đã đạt.

Hiện có **50/513 hồ sơ hoàn thiện, 10 mục một phần, 453 mục chưa thiết kế**. ROAD-02/ART-01/02/04 còn thiếu mẫu 2.5D; UI-03/INPUT-02/03 còn thanh 13 ô; SKILL-03/05/06 còn bộ kỹ năng chi tiết.

Tiếp theo là LEVEL-06 về XP nghỉ/người quay lại, rồi LEVEL-07/08. XP nghỉ V1 hiện chọn chưa mở; task sau cần ghi rõ quyết định và hướng mở rộng, không tự cấp thưởng nghỉ.
