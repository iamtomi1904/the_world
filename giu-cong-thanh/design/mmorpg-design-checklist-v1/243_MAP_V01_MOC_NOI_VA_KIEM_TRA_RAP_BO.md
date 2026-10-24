# Map 1 — Mốc nối và kiểm tra ráp bờ r015

23/10/2026 · [Xem và chỉnh mốc](/design-preview/v01-bank-sockets-r015/index.html).

## Đã làm

Dùng ba nguồn alpha r014, đặt mốc đầu/cuối theo tọa độ ảnh gốc, lưu trong sockets.json. Công cụ ráp ba miếng bằng biến đổi scale đều và xoay để điểm cuối miếng trước trùng điểm đầu miếng sau. Có ba chuỗi: thẳng/lồi/lõm, ba đoạn thẳng và thứ tự đảo; đổi nền để soi viền, chỉnh mốc, khôi phục và xuất manifest.

Không sửa raster nguồn, không xóa điểm màu thừa hoặc vẽ thêm trong bước này. Mốc hiện đặt thủ công trên mép cỏ/đất, chưa được duyệt làm socket cuối.

## Hợp đồng mốc

- Tọa độ nguồn tính từ góc trên trái, đơn vị pixel; không dựa vào khung CSS hoặc alpha bounds.
- Cặp mốc phải khác nhau và nằm trong kích thước nguồn.
- Khi ráp thử, chiều dài mốc đầu/cuối được đưa về 260px để so hình; không phải chiều dài gameplay hoặc texel density được chốt.
- Không scale riêng X/Y làm méo đá. Xoay chỉ là công cụ chẩn đoán; khi final cần vẽ đủ hướng với ánh sáng nhất quán.
- Điểm mốc khớp không đảm bảo chiều cao mặt đất, đường cỏ, bề mặt đá hoặc alpha khớp. Mỗi đầu cuối cần mặt cắt chuẩn và tiếp tuyến thống nhất khi vẽ lại.

## Nhận xét khi ráp

Đoạn thẳng mỏng hơn hai góc sau khi cân chiều dài đầu-cuối; họa tiết cỏ/đá có kích thước cảm nhận khác. Các mốc nối đúng nhưng đường viền vẫn đổi độ dày, có khe/chồng silhouette tùy vị trí mốc. Chưa dùng bộ này thay cảnh r008 hoặc làm production tileset.

Để sửa đúng: chọn một chiều cao bờ và độ dày turf chung, vẽ lại đoạn thẳng theo cùng mật độ pixel với góc, sửa đoạn chuyển ở đầu góc rồi duyệt ba miếng cạnh nhau. Không tiếp tục tăng biến thể trước khi mẫu nối cơ sở đạt.

## Kiểm tra

- [x] Ba chuỗi ráp có sai lệch tọa độ mốc tối đa 0px trong lượt QA.
- [x] Thay mốc có cập nhật kết quả ráp.
- [x] Chặn mốc trùng nhau/ngoài ảnh; có khôi phục và tải JSON.
- [x] Không pageerror, không tràn ngang tại 390px.
- [ ] Đồng nhất chiều cao và mật độ pixel của ba miếng.
- [ ] Dọn alpha thừa và vẽ sửa đường viền mối nối.
- [ ] Kiểm tra tiếp tuyến, đủ hướng và lớp khuất.
- [ ] Ráp với nền đất, mặt nước và cao độ trong cảnh 2.5D.

[QA](/design-preview/v01-bank-sockets-r015/qa.json). Giữ tổng checklist 525=128/14/383. Đây là kiểm tra lắp ghép, chưa nghiệm thu mỹ thuật hoặc G1–G5; không thay gameplay thủ thành.
