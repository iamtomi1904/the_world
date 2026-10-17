# Giữ Cổng Thành v0.4

## Cách chơi bản cập nhật

- Chạy npm run dev trong thư mục này, mở http://localhost:3000 và Ctrl+F5 sau mỗi lần đổi asset.
- /effect-lab.html xem thử hiệu ứng của các class, gồm các kỹ năng chưa đủ cấp trong trận.
- /boss-gallery.html giới thiệu boss của 10 mốc.
- J hoặc giữ chuột để đánh mục tiêu gần nhất; Q/E/R dùng kỹ năng đã học. Săn thú và quái rừng cho vàng bằng cùng cơ chế chiến đấu.

## Bản đồ và sinh vật

- Thế giới 1920×1280, 10 bố cục thành, 3–7 tuyến quân; đường quanh co với hai cửa tiến quân bổ sung cho từng mốc.
- 23 loài quái theo tiến độ, có quạ lao xuống và ong bắn độc trên không; cận chiến đánh quạ khi nó hạ thấp.
- 15–24 mục tiêu rừng/mốc. Thú bỏ chạy khi bị áp sát, quái rừng phản công và quay về trại. Không phải diệt hết chúng để kết thúc đợt.
- Thú cho 10+mốc vàng; quái rừng cho 25+4×mốc vàng. Thưởng kill được máy chủ xác nhận một lần; không có hồi sinh liên tục để farm vô hạn.
- Mật độ quân tăng từ 15/17/19 con ở mốc 1 đến 42/44/46 con ở mốc 10, chưa tính viện binh boss và mục tiêu rừng.
- Cầu pixel từ pack 668008, chi tiết đá từ pack 788112, cây bụi mới, mây, tinh thể và tàn tích phân theo vùng.
- Có chín loại lính; quân y hồi máu, đội trưởng tăng Công cho lính gần.

## Boss

- Mỗi đợt có một boss ở lượt sinh cuối; đợt 3 mạnh hơn. Có 10 hồ sơ theo mốc sử dụng ba asset vẽ mới: Cổ Thụ, Cự Thạch, Hắc Long.
- Chiêu có báo trước 1,2 giây ở vị trí cố định và có thể né. Dưới 40% máu, chu kỳ chiêu giảm từ 8 còn 5 giây.
- Chấn rễ và băng gây chậm; độc bộc gây độc; triệu hồi gọi ba quái; nện đất đánh vùng rộng; lôi phạt đánh vùng; thiên thạch rơi rồi mới gây sát thương.
- Boss hiện dùng sprite một tư thế với chuyển động thở và hiệu ứng kỹ năng bằng code, chưa có bộ hoạt ảnh đi/đánh nhiều khung riêng.

## Kỹ năng và asset mới

- Hộ vệ: chấn khiên vàng, vòm Thành Đồng tồn tại theo lượng khiên, hiệu lệnh hỗ trợ có hào quang riêng.
- Chiến binh: cung chém Bổ Rìu, Cuồng Huyết làm sáng vũ khí và vòng aura, Địa Chấn có đá trồi.
- Cung thủ: Liên Tiễn dạng quạt, Độc Tiễn có đầu tên/vệt độc, Vũ Tiễn có tên rơi.
- Lôi sư: Lôi Liên nối mục tiêu, Lôi Kích đánh từ trên xuống, Lôi Trận có cột sét.
- Hỏa và Thủy: sáu hình mới cho Hỏa Bộc/Biển Lửa/Thiên Thạch/Hàn Triều/Thủy Dưỡng/Băng Vực. Thiên thạch có thời gian bay và cảnh báo trước va chạm.
- Đạn thường di chuyển mượt; sát thương đạn được tính khi đến mục tiêu.
- Asset bitmap mới được tạo bằng công cụ imagegen tích hợp, lưu tại public/assets/v4. Các file *_PROMPTS.md lưu prompt tương ứng; mã Phaser thực hiện chuyển động và điều chỉnh hiển thị.

## Phạm vi dữ liệu

XP, cấp và lịch sử trận vẫn lưu SQLite trong data/game.sqlite. Vàng/kỹ năng/quân đội của chiến dịch theo phòng. Restart máy chủ kết thúc các phòng đang chạy; không xóa hồ sơ hoặc database.

## Kiểm tra

npm test: kiểm tra chiến đấu, kỹ năng, đường đi, thưởng rừng, boss từng đợt, né chiêu và tiến độ 10 mốc.
node smoke.mjs: kiểm tra tài nguyên HTTP và solo/co-op qua WebSocket.
node scripts/check-balance.mjs: bot mô phỏng 12 hero qua mốc đầu; không thay thế cân bằng bằng người chơi thực tế.
