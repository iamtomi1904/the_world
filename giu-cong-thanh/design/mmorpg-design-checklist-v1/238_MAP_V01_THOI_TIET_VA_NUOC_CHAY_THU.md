# Map 1 — Gió, lá, mưa, nắng và nước chảy r010

23/10/2026 · [Mở bản xem động](/design-preview/v01-weather-r010/index.html).

## Đã dựng trong bản xem

- Lá dạng cụm pixel nhỏ phát từ năm vùng tán, rơi/lượn theo delta time; gió thay đổi độ trôi và tần suất. Tối đa 24 lá, chế độ nhẹ 8.
- Mưa nghiêng theo gió, có mức cường độ; tối đa 120 hạt hoặc 35 ở chế độ nhẹ. Gợn mưa giới hạn trong vùng sông.
- Nắng có tia sáng nhẹ; mây/mưa làm dịu màu. Chuyển sắc nội suy, tránh đổi sáng đột ngột.
- Nước chuyển động trong hai vùng mask của ảnh r009, thêm vệt sáng trôi xuôi dòng; không làm méo cầu. Đây là hiệu ứng màn hình, không mô phỏng chất lỏng hoặc dòng chảy tác động nhân vật.
- Chọn Nắng/Mây/Mưa hoặc tự chuyển theo chu kỳ thử 60 giây. Đây chưa lịch thời tiết trong game hoặc đồng bộ server.
- Có tạm dừng, đặt lại, tắt lá/nước và giảm hiệu ứng; dừng cập nhật khi tab bị ẩn.

## Những phần chưa làm

Ảnh nền vẫn là art target nguyên khối, không map chơi. Chưa tách tán nên chưa rung từng cây, chưa kiểm tra mái che cho mưa, chưa nước đọng hoặc âm thanh. Mask và nguồn lá đặt theo ảnh này, không tự áp dụng cho map khác. Không thay chỉ số, collision, DB, thời gian hoặc chế độ thủ thành.

## Quy tắc cho map thật

Thời tiết cần thuộc hồ sơ sinh cảnh của Map 1: có chu kỳ nắng/mây/mưa, gió liên tục và các khoảng chuyển. Khi dựng map thật, dùng đồng hồ thế giới có thẩm quyền và seed thời tiết chung; client chỉ vẽ. Từng loại cây có anchor phát lá và độ lay riêng, chân cây cố định; lá/hoa không mọc đồng loạt sai sinh cảnh. Mưa bị che bởi mái, nước dùng mesh/flow mask theo bờ và lòng sông. Không gắn damage hoặc buff thời tiết khi chưa có thiết kế riêng.

## Checklist

- [x] Lá, gió, mưa, nắng và nước có chuyển động trong bản xem.
- [x] Tạm dừng giữ nguyên thời gian mô phỏng.
- [x] Tắt lá dọn hạt ngay; giảm hiệu ứng giảm số hạt mưa.
- [x] Không lỗi pageerror; không tràn ngang ở 390px trong lượt thử.
- [ ] Duyệt mask nước sát bờ ở mọi vị trí; hiện mask chỉ gần đúng theo ảnh.
- [ ] Asset tán/lá tách riêng và tương tác từng cây.
- [ ] Mái che, âm thanh, bề mặt ướt và thời tiết đồng bộ thế giới.
- [ ] Đo hiệu năng trên thiết bị mục tiêu.

[QA](/design-preview/v01-weather-r010/qa.json). Giữ checklist tổng 525=128/14/383, chưa nghiệm thu hệ thời tiết sản phẩm.
