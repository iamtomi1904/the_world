# STAT-11 — Ngân sách sức mạnh và mốc cân bằng

**Ngày:**21/10/2026 · **Phiên bản:**1.0. Hoàn thiện phương pháp, mục tiêu và fixture V1; chưa kết luận đã đạt cân bằng. [Tham khảo](79_THAM_KHAO_TIEN_TRINH_VA_VAI_TRO_MMORPG.md). Không sửa thủ thành.

## 1. Giữ mô hình ngân sách

Nền100 tham chiếu gồm35 cấp/AP,45 trang bị,20 class/skill/passive. Hệ mở rộng chia chung tối đa15đơn vị bổ sung, không mỗi hệ15%. Đây là phân bổ thiết kế, không35%mọi stat hoặc tổngDPS. Công/crit/haste/defense tương tác phi tuyến, phải đo outcome.

Nội tại chủ đạo19nhánh hồ sơ78 nằm **bên trong20class**, bao gồm tiến hóa ngựa Thánh/Hắc. Không cộng một quỹ mới tên Chuyển hóa. Ngựa/giáp/cánh mỹ phẩm không combat stat. Trần20%hệ số nội tại không chứng minh +20%sức mạnh thực.

## 2. Bốn nhóm outcome để đối chiếu

DPS: direct+DoT+pet, burst10s và sustained60s, accuracy hành động và resource. EHP: lượng damage chuẩn chịu được, cả defense/DR/block/shield và uptime, không chỉ HPmax. Hỗ trợ: effective heal/shield prevention/cleanse/CC hữu ích, không overheal/spam. Utility: cơ động, range, độ an toàn, targeting và thời gian chiếm sân; không quy mọi thứ thành công thêm.

Dùng baseline cùng cấp, gear tier, AP/SP/TP, quyền nghề và13ô, không trả phí. Khi thay một nguồn phải giữ luật hợp lệ và so trước–sau có ghi tương tác, không tháo cả bộ skill rồi nói class đóng góp bằng0. Phân tích nhóm nguồn là counterfactual có giới hạn, không phép phân rã duy nhất.

## 3. Fixture mốc nội dung — mục tiêu chưa đo

| Mốc | DPS direct+skill tham chiếu | HP quái thường mẫu | TTK mẫu | Boss truyện HP mẫu/TTK nếu đánh liên tục |
|---:|---:|---:|---:|---|
|10|50|300|6s|6000/120s|
|20|125|1000|8s|18750/150s|
|30|250|2000|8s|45000/180s|
|40|420|3780|9s|75600/180s|
|45|520|5200|10s|124800/240s|

Đây là cọc mốc để thiết kế, không bảng quái đã phát hành hoặc kết quả công thức hiện tại. Boss có né/di chuyển nên wall-clock sẽ dài hơn. Healer/tank dùng dải TTK theo STAT-14; không nâng cooldown/mana ẩn để ép role DPS.

Gear mốc1/10/20/30/40/45 cần bộ thường/quest đủ truyện; rare/affix tốt mở lựa chọn hoặc hiệu quả vừa, không gate bắt buộc. Tổng item definitions/base/roll/tier vẫn GEAR; không hồi sinh trần158item cũ.

## 4. Tiêu chí dải V1

Build DPS cùng điều kiện tham chiếu nhắm sustained±10%, burst có tradeoff/cost; không yêu cầu mọi nhánh cùng kiểu đứng yên. Healer/tank so đa chỉ tiêu và solo threshold, không nerf chỉ vì damage thấp. Đồ hiếm không được một affix haste/crit vượt phần lớn sức mạnh cả bộ cùng tier.

Nguồn thường trực tăng hệ phụ: so ratioDPS/EHP/heal và combo riêng, nếu hiệu quả nhân vượt mục tiêu thì giảm phân bổ các hệ đó, không chỉ khoe tổngđơnvị115. Các chỉ số rare-rate max5%đầu vào/dòng, cap đầu ra theo STAT-07; bonus thuộc tính có thể tăng cả raw/cộng nội tại nên cần kiểm hai lớp.

## 5. Ma trận cần cân sau

Mỗi19nhánh: dồn primary; primary/secondary; thêmVIT; gear root so gear công; buff nhóm; solo/nhóm/boss hardCC immune;13skill hoặc trộn thuốc. Summon tính chủ+pet tổng, không mỗi pet ngang DPSclass. Giáp/cánh ngựa cần so uptime/access qua địa hình chứ không chỉ damage dummy.

Đầu ra cần là bảng cấu hình, logs, sample builds và lý do thay hệ số. Chưa có mẫu/combat runtime nên chưa tuyên bố bất kỳ dải nào đạt. STAT-11 hoàn thiện **phương pháp/budget thiết kế**, không hoàn tất balancing production.
