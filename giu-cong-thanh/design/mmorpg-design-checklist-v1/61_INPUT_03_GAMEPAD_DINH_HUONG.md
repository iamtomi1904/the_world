> **Cập nhật có hiệu lực · 21/10/2026:** [Thanh 13 ô hỗn hợp](64_HOTBAR_13_O_KY_NANG_VAT_PHAM.md) thay cấu trúc tám ô/ô bắt buộc bên dưới: 1–9,Q,E,R,Z, kéo kỹ năng hoặc vật phẩm tiêu thụ; giữ WASD + con trỏ. Số lượng/cooldown không nhân theo shortcut. Các đoạn cấu trúc cũ chỉ còn lịch sử khi xung đột.

# INPUT-03 — Gamepad ở giai đoạn mở rộng

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0  
**Trạng thái:** Hoàn thiện hồ sơ thiết kế trong phạm vi task; chưa code, vẽ UI production hoặc kiểm thử.  
**Phạm vi:** MMORPG 2.5D pixel V4; thủ thành giữ nguyên. [Nguồn tham khảo và giới hạn](52_THAM_KHAO_UI_INPUT_MMORPG_SPRITE.md). Các lựa chọn dưới đây là thiết kế riêng cho Ẩn Thành.

## 1. Quyết định phạm vi

Chưa hỗ trợ gamepad chính thức ở bản web/PC đầu; không bắt triển khai cùng keyboard. Chọn hướng mở rộng hai bank bốn active giữ đủ tám slot, thay vì yêu cầu cần chuột để hoàn thành giao diện. Bộ mapping dưới đây là đề xuất cần prototype, không khẳng định game tham khảo có cùng cách dùng.

## 2. Mapping dự kiến

Left stick đi; right stick hướng aim/di chuyển reticle khi ngắm đất, không xoay camera cố định. RT đánh thường, LT giữ bank B; bốn face button gọi slot 1…4 hoặc 5…8 khi LT giữ. RB tương tác; LB chuyển mục tiêu hợp lệ. Menu mở menu hệ thống, View mở map. D-pad mở nhóm tiện ích (túi/nhân vật/quest/gọi thú) khi world focus.

Trong UI, face confirm/back thay nghĩa theo context và hiện glyph thật; không đồng thời cast. Ngắm skill: stick định vị, nút confirm ghi rõ trong overlay, back hủy không tấn công. Khi bank B active hiện cả nhãn và dấu trạng thái; thả LT không tự cast skill bank A.

Không dùng combo ngón giữ nhiều modifier để mới có heal cơ bản. Slot có thể sắp theo ưu tiên người dùng, budget và cooldown giữ. Đổi glyph Xbox/PlayStation theo device hoặc lựa chọn, không vẽ chữ A/B vào file icon skill.

## 3. UI và target

Focus graph đi qua nút/ô/bảng cuộn rõ; có menu chuyển đồ/equip thay drag. Target cycle xét tầng, range hiển thị và quyền thấy; không hard lock camera/auto-hit. Hỗ trợ reticle khi không có target, không tự nhắm đơn vị chưa biết.

Gọi ngựa và mounted skill vẫn cùng điều kiện PC. Rumble optional, có hình thay thế; giảm rung camera khác rung controller. Tháo controller dừng input giữ, mở thông báo không pause world và có lối keyboard; không tự gửi lệnh còn kẹt.

## 4. Cổng mở hỗ trợ

Cần chơi trọn login→nhân vật→quest→combat→inventory→trade/settings bằng controller, tám skill và ngắm nhiều tầng. Text entry cần bàn phím ảo/hệ thống được nền tảng hỗ trợ, không hứa mọi trình duyệt đều như nhau. Chưa test/triển khai; INPUT-03 hoàn thiện quyết định phạm vi và hướng mapping, không phải thông báo game đã support gamepad.
