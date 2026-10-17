# Trang chủ nhiều chế độ

- Trang chủ: /, dùng public/home.html + home.css + home.js. Tên chung tạm thời: The World.
- Giữ thành là chế độ đầu tiên: /defense.html. Giao diện chọn hero, solo/co-op và chiến dịch được giữ trong trang này.
- Trang chủ chỉ giới thiệu và điều hướng; không tự kết nối WebSocket hoặc tạo phòng chơi.
- Khu vực chế độ mới hiển thị “Đang phát triển”, chưa gắn tên chế độ hay ngày mở.
- Có giới thiệu 7 class từ dữ liệu game, liên kết bách khoa quái, kỹ năng và boss.
- Đường dẫn /index.html cũ vẫn giữ màn hình Giữ thành để tương thích liên kết trước đây.
- Kiểm tra: hình ảnh trang chủ, chọn chế độ, vào Giữ thành và bắt đầu solo trên trình duyệt; smoke test HTTP và solo/co-op.

Ảnh C:/Users/Admin/Downloads/full.avif đã được xem: sprite rồng phù hợp quái bay/boss, nhưng ảnh RGB không có alpha, nền ô caro và đường kẻ đã nằm trong ảnh. Chưa đưa bản xem trước này vào tài nguyên game. Bản chuyển PNG trong screenshots/full-asset-preview.png chỉ phục vụ xem ảnh, không phải asset đã tách nền.
