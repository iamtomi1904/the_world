# Rà soát V2 lần hai — hoàn thiện hợp đồng thiết kế

Ngày21/10/2026. Phạm vi:20 hồ sơ COMBAT/SKILL, catalog126, tài liệu V2 127–133 và liên kết cốt truyện. Đây là rà soát tài liệu, không phải kiểm thử gameplay.

## Các điểm đã làm rõ và sửa

| Điểm hở | Quyết định sau rà soát | Hồ sơ đã cập nhật |
|---|---|---|
| Raw budget nhiều pha dễ hiểu thành chia sát thương toàn đám | Giới hạn theo action–target; chính/phụ ổn định, không dồn phần hụt |117|
| Capstone và node cũ có thể cùng sửa hình chiêu | Thứ tự xử lý rõ; node không tương thích khóa và hoàn đúng TP |117,119|
| Rank U có thể nhân damage hai lần | LGT dùng rank A cho damage, U chỉ giảm CD; phân nhóm đủ19 U |131|
| Buff đòn kế tiếp thiếu thời điểm tiêu quyền | Giữ quyền tại accept, tiêu ở Release; ngắt trước Release không kéo dài hạn |131|
| PRI chia hồi máu hai pha thiếu hệ số từng người | Mỗi người0,20H+0,35H; phần hụt không chuyển sang người còn lại |131|
| Thoát/vào lại có thể cấp lại lượt cứu | Khóa theo phiên nội dung/encounter, không theo kết nối/đội trưởng |104|
| Hai healer bị tính phí trước khi tranh quyền | Khóa deathId trước accept; chỉ cast đã accept theo chính sách không hoàn |104|
| Ân hạn sau hồi sinh chưa rõ với dung nham | Miễn damage trong3s, không xóa effect hoặc trả bù tick, cần safe spawn |104|
| Pet tạo bằng S có thể ăn hai hệ số rank | Output theo rank U; S chỉ tăng phần riêng được khai báo |122|
| Nhiều lệnh pet có thể cùng cast | Một state hành động, một buffer150ms, cooldown giữ theo owner/lineage |122|
| Hợp nhất pet có thể hồi đầy hoặc phát kill proc | Giữ tỷ lệ HP, despawn không phải kill, giữ attribution |122|
| Trang tổng hợp có nhiều dòng “mới nhất” lịch sử | Đánh nhãn lịch sử, chỉ giữ một trạng thái hiện hành |README|

## Ràng buộc tiếp tục giữ

Không đổi513 task hoặc đếm lại20 mục;80 hoàn thiện hồ sơ,7 một phần,426 chưa thiết kế. GATE-01 chưa đạt. Cap nhân vật60/nội dung45, V01 không quái bay,13 ô hỗn hợp,3 chủng tộc/7 nghề/19 nhánh và28 tổ hợp giữ nguyên. Không thay công thức phòng thủ, số SP/TP, ngân sách vùng hay giá hồi sinh.

Oren là giải quyết xung đột mệnh lệnh và lựa chọn cá nhân, không phải mục tiêu hồi sinh của Mục Sư. Pet/DoT/đòn kết liễu không tự chọn kết cục. Nhánh nghề hoặc lựa chọn đạo đức không khóa manh mối chính; hồi kết sáu hồi không bị ép phát hành hết trong năm vùng đầu.

## Phần cần kiểm chứng bằng bản chơi

Các bản mô tả đã đủ rõ hơn để làm prototype; chưa chứng minh cân bằng. Cần đo sát thương10s/60s, mana, hiệu quả hai hướng thiên phú, pet EHP/path, độ trễ transfer/rez, hurt volume/cao độ và tải nhiều aura. Phiên bản boss cụ thể phải khai báo khả năng solo phá thế: không mặc định mọi cửa sổ8s đều khả thi chỉ vì có nút F. Không tự đánh dấu art/camera/network/production đã xong.

## Thứ tự tài liệu khi xung đột

Quyết định chủ dự án → phần chốt rà soát trong hồ sơ chuyên môn →131 (cơ chế V2) và126 (bộ nền) → hợp đồng117 → mô tả cũ. Các đoạn V1 còn giữ để tra lịch sử không cho phép ghép lại buff đã bị V2 thay thế. Báo cáo này dẫn thay đổi; quy tắc chi tiết nằm tại hồ sơ gốc.
