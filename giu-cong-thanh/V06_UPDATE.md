# v0.6 — Hiệu ứng quái, boss và di vật

## Tăng uy lực hiệu ứng boss

Thêm ba tầng sóng chấn động, ánh sáng lõi, bụi/mảnh vỡ và vệt chuyển động theo hình dạng đòn. Nét lửa có thân uốn, ba lớp màu, cột lửa cao hơn; cọc đá và tay xương cao hơn; vuốt có lớp chém phụ. Mỗi dòng có lớp phụ riêng: tàn lửa, hồn ma, độc bắn, tinh thể băng và lông vũ. Đòn boss gần camera có rung nhẹ, giới hạn tần suất; tắt rung khi hệ thống chọn giảm chuyển động. Vùng cảnh báo và phạm vi sát thương không đổi. Kiểm thử hình học của cả 30 hoạt ảnh qua các pha nạp/đánh/tan đã đạt.

30 kỹ năng boss có chuyển động riêng. Rồng: luồng lửa, thiên thạch có đá rơi, sóng áp lực, cổng ấu long, cột lửa. Undead: mũi linh hồn, tay xương, mộ triệu hồi, linh hồn bị hút, lồng xương. Rắn: đạn độc bay, vệt độc, vòng rắn siết, vảy lột xác, vành độc. Sói: vồ và vuốt, sóng tru, nanh băng, ba vuốt chém, trăng cuồng săn. Harpy: loạt lông vũ, lưỡi gió, cánh bổ xuống, lốc lông vũ, cổng gió. Quái đá: hố địa chấn, cọc đá dọc đường, đá xoay tạo giáp, vành tinh thể, khe nứt nhiều vùng.

Quái thường có đạn và va chạm riêng theo dòng. Khi xuất hiện ở cửa map hoặc boss gọi viện binh, server phát sự kiện cổng triệu hồi đúng tọa độ. Cổng có xoáy không gian đứng, vòng ký tự dưới đất và dấu hiệu nguyên tố. Hiệu ứng đóng sau 1,6 giây.

## Di vật rừng thay thế bình tiêu thụ v0.5

Theo lựa chọn của người chơi: nhận thuộc tính ngay khi nhặt, cộng dồn và giữ qua map, đến hết chiến dịch. Không lưu sang chiến dịch mới. Không cần phím 1–5. Không dùng buff có thời hạn hay hào quang kỹ năng hero.

| Di vật | Mỗi lần nhặt |
|---|---|
| Nanh mãnh thú | +2 Công cơ bản |
| Mầm sinh lực | +0,3 hồi máu/giây |
| Tinh hoa mana | +0,3 hồi năng lượng/giây |
| Mảnh giáp cổ | +0,4 Giáp |
| Lông gió | +1,5% tốc đánh |

Trên đất là dấu ấn vuông với biểu tượng chỉ số. Khi nhặt, biểu tượng bay lên, có chữ mức tăng và “VĨNH VIỄN”; bảng dưới kỹ năng hiển thị tổng cộng dồn. Quyền nhặt riêng 8 giây và thời gian rơi 150 giây giữ như trước. Hồi máu không làm sống lại nhân vật đã chết.

Sân thử `/boss-lab.html`: chọn sáu dòng boss, xem từng chiêu, cổng triệu hồi, đòn quái và nhặt di vật; có xem chậm, lặp và giữ khung chính. Sân thử chỉ minh họa hình ảnh; cơ chế chiến đấu thực hiện trên server.

Kiểm thử: 63 bài đạt, gồm tọa độ triệu hồi viện binh, hình học của cả 30 chiêu, chỉ số vĩnh viễn qua map, hồi mana thực và không tự hồi sinh. Hiệu ứng vẽ bằng Phaser Graphics, không thêm raster nặng vào tải ban đầu.
