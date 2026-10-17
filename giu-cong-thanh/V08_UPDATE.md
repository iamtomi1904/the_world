# Cập nhật 0.8

## Giao diện thủ thành
- Cửa sổ thông tin mặc định ẩn, dùng T bật/tắt, Escape hoặc nút × để đóng; kéo thanh tiêu đề để di chuyển.
- Ba tab biểu tượng: anh hùng, kỹ năng, quân đội. Rê chuột hoặc dùng bàn phím để xem mô tả và giá nâng cấp.
- Thanh Q/E/R cùng máu, mana ở đáy màn hình. Biểu tượng dùng lại hình kỹ năng trong game và SVG phù hợp phong cách hiện tại.

## Độ khó chiến dịch
Giữ nguyên 10 map và toàn bộ chỉ số cũ trong chế độ Dễ. Chọn độ khó trước khi tạo phòng; mọi người trong cùng phòng dùng độ khó của chủ phòng, giữ khi qua map.

| Chế độ | Máu quái | Sát thương quái | Số lượng mỗi đợt |
|---|---:|---:|---:|
| Dễ | 100% | 100% | 100% |
| Normal | 135% | 120% | khoảng 130% |
| Insane | 190% | 155% | khoảng 165% |

Máu và sát thương áp dụng cho boss, quái rừng và quái được triệu hồi. Số lượng làm tròn lên; động vật trung lập giữ nguyên. Độ khó được lưu cùng lịch sử trận, dữ liệu cũ mặc định Dễ.

## Kiểm tra
69 kiểm thử tự động thành công. Smoke test thành công: chơi một người, mua lính, di chuyển, phòng hai người đồng bộ độ khó, quyền chủ phòng và dữ liệu đầu vào không hợp lệ. Kiểm tra trực quan cửa sổ T, các tab, icon và tooltip trên trình duyệt. Các hệ số Normal/Insane cần tiếp tục chơi thử để cân bằng toàn chiến dịch.
