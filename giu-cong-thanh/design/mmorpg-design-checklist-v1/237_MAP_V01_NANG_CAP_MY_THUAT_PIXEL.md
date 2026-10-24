# Map 1 — Nâng cấp mỹ thuật pixel r009

23/10/2026 · Người dùng nhận xét hình r008 quá xấu. [Xem mẫu mới và so sánh](/design-preview/v01-art-upgrade-r009/index.html).

## Chẩn đoán

r008 ghép đúng chức năng nhưng chưa đạt chất lượng mỹ thuật: nền bị nhiễu hạt đều khắp, tỷ lệ cây/cỏ thiếu thống nhất, nhà và cầu mang hình khối thô, mặt nước và bờ quá thẳng, điểm sáng thiếu phân cấp. Không nên tiếp tục rải thêm số lượng asset để che những vấn đề này.

## Hướng sửa

Giữ pixel 2D trong không gian 2.5D, góc nhìn orthographic từ trên xuống. Giữ tỷ lệ nhân vật trưởng thành theo mẫu người dùng đã chọn. Không đổi sang tranh vẽ mềm, 3D chân thực hoặc chibi.

| Thành phần | Chuẩn hướng tới |
|---|---|
| Nền | Mảng xanh có khoảng nghỉ; vài cụm cỏ có chủ đích thay vì noise khắp nền |
| Cây | Silhouette riêng từng loài, khối tán sáng tối lớn, bóng tiếp đất rõ |
| Nhà | Mái ngói, gỗ và móng đá cùng độ phân giải cảm nhận, cửa đọc rõ |
| Cầu | Nhỏ gọn theo chiều rộng đường, lan can không nuốt nhân vật |
| Nước | Xanh ngọc ở vùng nông, xanh lạnh ở vùng sâu; highlights tiết chế |
| Bờ | Ghép đoạn thẳng, lõm, lồi, góc và nối bãi sỏi; không phóng to một miếng bờ |
| Trang trí | Cụm hoa/cỏ theo độ ẩm và sinh hoạt, không chắn hành lang di chuyển |
| Ánh sáng | Nguồn sáng trên trái, bóng lạnh hơn vùng sáng, không glow cây cỏ |

## Thứ tự thực hiện

- [x] Phân tích những điểm hình ảnh cần sửa ở r008.
- [x] Thiết lập brief nâng cấp và trang so sánh.
- [ ] Duyệt chất lượng mẫu toàn cảnh; ảnh tạo sinh không tự đồng nghĩa bản pixel native đã đạt.
- [ ] Vẽ lại nền đất/cỏ cùng bộ mép bờ, kiểm tra lặp ở kích thước game.
- [ ] Tách thiết kế thành mô-đun nhà, cầu, cây; vẽ asset riêng, không cắt ảnh toàn cảnh giả làm bộ asset.
- [ ] Ráp lại cảnh với đúng collider, cao độ và giảm che.
- [ ] Đồng bộ chuyển động tán, lá và nước sau khi hình tĩnh đạt.

Mẫu toàn cảnh là art target, chưa map tương tác, chưa layer hoặc tile set hoàn chỉnh. r008 giữ vai trò thử kỹ thuật; không báo thay toàn bộ game bằng ảnh mới. Chưa đổi số checklist tổng 525=128/14/383 hoặc đánh dấu G1–G5.
