> **Cập nhật có hiệu lực · 21/10/2026:** [Thanh 13 ô hỗn hợp](64_HOTBAR_13_O_KY_NANG_VAT_PHAM.md) thay cấu trúc tám ô/ô bắt buộc bên dưới: 1–9,Q,E,R,Z, kéo kỹ năng hoặc vật phẩm tiêu thụ; giữ WASD + con trỏ. Số lượng/cooldown không nhân theo shortcut. Các đoạn cấu trúc cũ chỉ còn lịch sử khi xung đột.

# INPUT-02 — Điều khiển mobile ở giai đoạn mở rộng

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0  
**Trạng thái:** Hoàn thiện hồ sơ thiết kế trong phạm vi task; chưa code, vẽ UI production hoặc kiểm thử.  
**Phạm vi:** MMORPG 2.5D pixel V4; thủ thành giữ nguyên. [Nguồn tham khảo và giới hạn](52_THAM_KHAO_UI_INPUT_MMORPG_SPRITE.md). Các lựa chọn dưới đây là thiết kế riêng cho Ẩn Thành.

## 1. Phạm vi quyết định

Android/iOS chưa thuộc bản đầu web desktop/PC. Hồ sơ này chốt hướng điều khiển để kiến trúc không phụ thuộc hover/phím; không cam kết thời điểm phát hành hoặc đã hỗ trợ mobile. Chưa chọn resolution tối thiểu/device/API cảm ứng.

## 2. Bố trí đề xuất

Màn ngang, joystick trái, cụm đánh/ngắm phải và tám active tối đa giữ cùng ngân sách PC. Dùng hai hàng bốn nút hoặc cụm hai dải bốn trong combat; không ẩn bốn skill sau một menu phải mở chậm mới dùng. Nút tương tác theo ngữ cảnh, bản đồ/chat/túi ở mép; caption không nằm dưới ngón tay.

Tap skill mở preview khi cần chọn đất/đích; kéo trên nút skill định hướng, thả trong vùng cast để gửi, kéo về vùng Hủy để bỏ. Tap tự thân một lần. Tùy chọn xác nhận hai bước cho người không dùng drag; không bắt precision gesture cho mọi kỹ năng. Số pixel vùng chạm theo mật độ thiết bị được prototype sau, không dùng 24px icon trạng thái làm chuẩn ngón tay.

Joystick và aim dùng pointer ID riêng, không ngón chọn tooltip chiếm joystick đang giữ. Touch cancel/cuộc gọi/mất focus giải phóng input giữ; không phát đòn khi quay lại.

## 3. Chọn mục tiêu và đọc thông tin

Tap đối tượng mở lựa chọn hợp lệ; crowded overlap có danh sách nhỏ theo quan hệ/đã thấy và tầng. Không click xuyên cầu/chọn kẻ chưa phát hiện. Có cycle target trong nhóm hợp lệ, không tự aim vào điểm yếu không được biết. Assist chỉ giúp chọn/preview, không tự tăng hitbox/range hoặc ưu tiên tiền nạp.

Nhấn giữ item chỉ mở detail, không dùng/bán; có nút Xem thông tin cho người khó giữ. Tap chọn rồi menu thao tác thay drag bắt buộc. Bàn phím mềm bật không điều khiển actor, chat giữ luật IME.

## 4. Ngựa và hiệu ứng

Nút Gọi ngựa có lý do khóa và trạng thái đang cưỡi. Thánh/Hắc có cánh/giáp như PC, mức gọn ART-06 giữ thông tin. Không giảm skill hoặc buff để vừa màn; giảm trang trí, reflow HUD và hỗ trợ ngắm minh bạch.

## 5. Cổng triển khai tương lai

Cần prototype một combat đủ tám active, root/airborne, item detail, hai tầng, disconnect và text input; thử thiết bị thật, performance/pin và cửa hàng nền tảng thuộc giai đoạn sau. Nếu chưa đạt không quảng bá cross-platform. INPUT-02 hoàn thiện hướng thiết kế mở rộng, chưa chứng minh dùng được và không mở rộng M0/M1 hiện tại.
