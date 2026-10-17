# V24 — Nâng cấp chiến dịch và HUD trạng thái

- Ải 1–4 giữ giới hạn kỹ năng 3. Từ ải 5: Q/E 10, R 6. Server kiểm tra giới hạn theo ải; giao diện, tooltip và thanh kỹ năng dùng cùng cấu hình. Công thức nâng bậc cũ tiếp tục áp dụng, hồi chiêu tối thiểu 3 giây.
- Nhân vật: mua +2 giáp hoặc +5% tốc đánh mỗi bậc, giá 100 + 40 × số bậc đã mua. Trong mục Nhân vật của T.
- Cửa hàng thành: riêng mỗi chủ nhân mua Công lính +10% chỉ số gốc, Giáp +2, Máu +15% chỉ số gốc mỗi bậc; giá 120 + 60 × số bậc của loại đó. Cần đứng gần thành. Áp dụng lính thuê còn sống và thuê sau, không áp dụng triệu hồi. Tăng máu cộng phần HP tối đa tăng thêm, không hồi đầy lính. Giữ qua ải; ván mới đặt lại.
- Logic sát thương lính đọc Công đã nâng; phòng thủ trước đòn thường/quái/boss đọc Giáp thực tế. Đồng đội không bị tăng hoặc trừ vàng theo người mua.
- Góc trái hiển thị buff/debuff, thời gian còn lại, stack, aura, dạng biến hình, ngọc, môi trường, nâng cấp và di vật. Rê chuột xem chi tiết; cập nhật từ snapshot server.
- Tách stack nội tại Phong Kiếm Khách khỏi stack Ngọc Gió để hai cơ chế không ghi đè nhau.
- Sửa chuỗi kích thước ảnh đại diện Phong Kiếm Khách tại giao diện chọn/nhân vật.

Cấu hình: public/progression.js. Không chạy kiểm thử, kiểm tra cú pháp, trình duyệt hoặc đo hiệu năng theo yêu cầu người dùng. Chưa xác nhận trực tiếp gameplay sau thay đổi.
