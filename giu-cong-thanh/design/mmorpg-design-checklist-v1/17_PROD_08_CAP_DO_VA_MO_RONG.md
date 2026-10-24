> **Mở rộng phe/PvP ·22/10/2026:** [Hai phe, bang hội và năm loại không gian mới](186_FACTION_01_HAI_PHE_BANG_HOI_VA_CHIEN_TRUONG.md). Chọn phe khi chuyển chức15; W06cấp40–60cóPKđối phe, samefactionchỉđấu trong giải chính thức. Thay giới hạn “khôngmap46–60/chưaPvP” riêng phạm vi mới, giữnguyên5vùngPvEcũ/cap60. Checklist **525mục:119hoànthiện /11mộtphần /395chưa thiết kế**. Chưa code/vẽ.

> **Quyết định hiện hành · 21/10/2026:** [Trần nhân vật 60, nội dung đến 45](91_CAP_60_NOI_DUNG_45_VA_XP_HAU_TRUYEN.md). Giữ năm vùng hiện tại; cấp 45→60 luyện dài hạn. AP ở 45/60 là 132/177; SP giữ 35, TP giữ 11 sau 45. Quy tắc XP hậu truyện thay bảng chênh cấp khi đủ điều kiện. Các số cấp 45 trong ví dụ vẫn là mốc nội dung, không phải trần nhân vật. Chưa triển khai vào game.

# PROD-08 — Cấp tối đa 60, nội dung 45, mùa và bản mở rộng

> **THAY ĐỔI HỆ NHÂN VẬT — 20/10/2026:** [Khung chủng tộc/nghề/trang bị mới](28_HE_CHUNG_TOC_CHUC_NGHIEP_TRANG_BI.md) thay mô tả cũ khi xung đột: tạo Con Người/Elf/Người Lùn, cấp 15 chọn nghề, cấp 30 chọn nhánh theo race. Trang bị/vũ khí kiểm quyền nghề/nhánh; hình riêng không đổi chỉ số món. Không còn chọn ba class cố định lúc tạo hoặc quy tắc mọi race chọn mọi nhánh.


**Phiên bản:** 1.0 · **Ngày:** 20/10/2026 · **Trạng thái:** Đã hoàn thiện thiết kế phạm vi; chưa triển khai.  
**Cơ sở:** chủ dự án chốt bản đầu năm vùng đến cấp 45, trần nhân vật 60; các hướng thiết kế trước được chấp thuận ngoài các thay đổi đã nêu.

## 1. Cấp tối đa và phạm vi phiên bản

Cấp nhân vật bắt đầu **1**. Mẫu nội bộ giới hạn theo nội dung thử; alpha V01 có trần **10**. Bản online đầu đủ năm vùng có trần nhân vật **60**, nội dung đến **45**. Đoạn 45→60 là tiến trình luyện dài hạn theo hồ sơ 91. Trần alpha không phải định hướng cuối chỉ có mười cấp. Tách trần nhân vật, cấp skill, item level, bậc nâng và tu luyện; không dùng một giá trị chung.

Vùng khuyến nghị: V01 1–10, V02 11–20, V03 21–30, V04 31–40, V05 41–45. Các biên 30/40 được chuẩn hóa theo dải không trùng, từ mô tả người dùng. Quái/tinh anh trong một vùng có khoảng cấp riêng, hub an toàn không phải mọi NPC có cấp chiến đấu bằng vùng.

## 2. Tiến trình được chọn

- XP đến từ quest, khám phá và PvE được công nhận; nhóm tính đóng góp không chỉ last-hit. Nghề/sự kiện có thể cấp XP khi LEVEL/ECON định nghĩa nguồn.
- Không bán XP theo triết lý thương mại được chấp thuận. Không tự có XP offline hoặc hệ số nghỉ khi chưa thiết kế nguồn.
- Mốc chuyển dải là gợi ý tuyến nội dung, không tự khóa đường đi theo cấp. Nội dung cần điều kiện phải có lý do và UI rõ.
- Truyện có đường solo đến nội dung kết bản đầu; boss map/dungeon khó không phải cổng giữ manh mối bắt buộc.
- Không bắt làm hết quest phụ mới đủ đi tiếp. LEVEL-01/02 phải xây bảng XP đủ cho đường truyện và hoạt động chính phù hợp, rồi kiểm chứng thời gian, không chọn đường XP bằng cảm tính.
- Chưa cam kết số giờ lên 45. Công thức XP/điểm mỗi cấp, rank skill và mốc mở từng hệ thuộc LEVEL/STAT/SKILL, không lấy từ thủ thành.

## 3. Đạt trần

Ở cấp 60, XP nhân vật không tích thành kho chờ lên cấp khi mở bản mới, không tự đổi ra tiền/điểm thuộc tính hoặc cấp tu luyện vô hạn. UI hiện “Đã đạt cấp tối đa phiên bản”. Không áp dụng thừa XP vào hệ khác ngầm định.

Quest vẫn ghi tiến độ và cấp phần thưởng không phải XP đúng bảng, không tự tăng vàng để thay XP. Nếu bảng có phần thưởng thay thế cho người đã trần, phải thiết kế và preview rõ ở QUEST/ECON; mặc định không có quy đổi.

Một sự kiện lên cấp được xử lý đến trần của phiên bản, bỏ phần XP không thể sử dụng; nhật ký cần hiển thị quy tắc khi đạt trần. Quyền thưởng không reset khi cap tăng.

Sau trần vẫn có mục tiêu: hoàn tất câu chuyện chưa khám phá, chọn build, tìm đặc sản dungeon, sưu tầm, thử dungeon cao hơn hoặc tham gia nội dung cộng đồng. Không bắt thêm chỉ số vô hạn để tạo lý do chơi.

## 4. Mùa

Nhân vật thường trực. Mùa chỉ đổi edition điểm/xếp hạng/sự kiện được công bố, không reset cấp, trang bị, tiền nạp, kỹ năng hoặc truyện.

Độ dài mùa không chốt trước lịch sản xuất. Mỗi mùa phải công bố bắt đầu/kết thúc, quy tắc thưởng, thời gian nhận, vật liệu hết hạn và xử lý downtime. Không cần tạo mùa chỉ để có pass trả phí.

## 5. Bản mở rộng

Một bản nội dung có thể thêm vùng, dungeon, quest, build hoặc sưu tầm mà giữ trần nhân vật 60. Không tăng trần theo lịch cố định.

Khi có lý do tăng trần: lập hồ sơ riêng về dải cấp mới, XP, ngân sách sức mạnh, đồ/skill, khoảng cách người mới-cũ, phần truyện và migration. Không tự nâng tiếp trần trên 60. Nhân vật cấp 45 giữ nguyên cấp và tiến trình; không có kho XP cũ để bật lên cấp mới ngay.

Trang bị cũ vẫn tồn tại và dùng được ở điều kiện phù hợp. Không tự xóa affix, ngọc hoặc cường hóa; nếu cần chuyển hệ phải preview/giải thích theo GEAR/DATA. Không hứa mọi món luôn tối ưu mãi hoặc hoàn mọi khoản đầu tư bằng tiền.

## 6. Người mới và người quay lại

Giữ tuyến truyện và nhật ký tóm tắt. Đồ khởi đầu và nâng cấp theo quest đủ đáp ứng nội dung tương ứng; không bỏ qua 40 cấp để chơi được với bạn. Người cấp cao hỗ trợ bạn phải theo quyền đóng góp, giảm lợi ích farm kéo cấp nếu LEVEL thiết kế, không xóa reward một lần của bạn mới.

Chưa mở vé nhảy cấp hay XP trả phí. Hệ hỗ trợ bắt kịp tương lai cần có mốc đích, điều kiện, nguồn và tác động kinh tế, không reset thành quả người cũ để san bằng.

## 7. Dữ liệu và UI

Backend quản lý cap theo môi trường/phiên bản; PostgreSQL giữ level/XP và quyền thưởng đã nhận. Web/PC cùng cap server, không dùng file client để nâng giới hạn. Trước cập nhật cap cần migration/cân bằng có phiên bản và kế hoạch khôi phục.

Thanh XP hiện cấp hiện tại, tiến độ, cap phiên bản; đạt trần chuyển trạng thái rõ. Bản đồ có dải khuyến nghị, cảnh báo nguy hiểm, danh sách dungeon và nguồn phần thưởng không spoiler. Thư viện có xem lại cinematic. Không cần phím mới ngoài INPUT hiện có.

## 8. Bàn giao

Đã quyết định trần alpha/bản đầu, khoảng vùng, xử lý XP tại trần, nhân vật thường trực, nguyên tắc mùa/mở rộng và hỗ trợ người quay lại. Không hoàn thành thay các bảng XP/skill/loot chuyên môn. Chưa code, chưa đo hoặc kiểm thử game.

**Tiếp theo PROD-09 — Sổ quyết định và quản lý thay đổi**, để theo dõi rõ yêu cầu gốc, lựa chọn thiết kế và các thay đổi ngân sách.

## Khung kỹ năng cập nhật · 21/10/2026

[Hệ tân thủ/tiến hóa/vô môn](29_HE_KY_NANG_TAN_THU_TIEN_HOA_VO_MON.md) làm rõ trước15: 3 chủ động nền +1 bị động nền, 1 chủ động race +3 bị động race; mở dần, không có nghề ngầm. Các bộ tập kiếm/cung/trượng là cách biểu hiện của cùng skill nền, không thêm ba cooldown. Cấp15/30 tiến hóa theo lineage và giữ đầu tư hợp lệ. Hướng dẫn M02 dùng phản ứng phổ thông nếu chưa mở Bước Lách ở3, không yêu cầu skill chưa học.


## Cập nhật LEVEL V1 · 21/10/2026

[Hồ sơ85–89 và tổng hợp90](90_TONG_HOP_STAT_LEVEL_10_MUC.md) chốt công thứcXP, quota tuyến chính, nguồn/chiaXP vàgrantAP/SP/TP. 38–57giờ là mục tiêu thiết kế lần đầu, chưa đo hoặc cam kết; cap60/nội dung45/alpha10 và không tích XP thừa tại60 theo hồ sơ91. Không đổi trò thủ thành.
