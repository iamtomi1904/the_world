# UI-08 — Gán lại phím và quản lý xung đột

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0  
**Trạng thái:** Hoàn thiện hồ sơ thiết kế trong phạm vi task; chưa code, vẽ UI production hoặc kiểm thử.  
**Phạm vi:** MMORPG 2.5D pixel V4; thủ thành giữ nguyên. [Nguồn tham khảo và giới hạn](52_THAM_KHAO_UI_INPUT_MMORPG_SPRITE.md). Các lựa chọn dưới đây là thiết kế riêng cho Ẩn Thành.

## 1. Mô hình hành động

Bind tới action ID (di chuyển, active slot 1…8, tương tác, mở K...), không tới tên skill hiện tại. Đổi kỹ năng trong slot giữ bind; đổi thứ tự slot phải hiển thị quan hệ rõ và không copy cooldown. Mỗi action có bind chính/phụ khi hợp lệ. Không cho một phím trong cùng context đồng thời gửi hai action gameplay.

Context theo ưu tiên: hệ thống/IME → rebind → modal/menu → ô nhập → cửa sổ → gameplay. Dùng cùng phím ở hai context loại trừ có thể hợp lệ, phải có nhãn; dùng Space vừa dash vừa block trong gameplay là xung đột.

## 2. Luồng gán phím

Settings → Điều khiển → chọn action → bấm Gán → nhận phím/tổ hợp → xem xung đột → Thay thế/Đổi chỗ/Hủy → Áp dụng. Esc hủy lần bắt phím, không bị gán thành skill; có đường hỗ trợ cho action Esc nhưng tránh khóa đường thoát. Xóa bind cần nút riêng, không đoán Backspace luôn là xóa.

Bản nháp bind chưa áp không đổi glyph hotbar. Sau áp cập nhật hotbar/menu/tooltip/tutorial theo action, không text cứng Q. Giữ ít nhất một đường vào Settings/menu bằng nút chuột; không cho cấu hình khiến đóng modal không còn cách.

## 3. Phím vật lý, ký tự và thiết bị

Di chuyển/slot mặc định ưu tiên vị trí vật lý, nhãn render theo layout khi có thể. Chat nhận ký tự/IME bình thường. Cho người chơi chọn mode vật lý/ký tự cho phím hỗ trợ; không âm thầm đổi bind khi đổi ngôn ngữ bàn phím. Layout không có Backquote có thể dùng nút Đóng nhanh hoặc bind khác.

Không chiếm Alt+F4, phím OS hoặc hứa override Ctrl+W/Tab/R/L, F5, F11/F12. Danh sách reserved và hành vi web phải xác minh theo browser khi triển khai. Input-01 tránh các tổ hợp đó mặc định. Macro nhiều action, autofarm và script không thuộc rebind.

## 4. Lưu, nhập và reset

Profile theo thiết bị với bản sao tùy chọn account có version; không tự ghi đè web bằng phím PC không khả dụng. Import dữ liệu thuần action/bind cho phép, preview xung đột trước áp, không script/URL. Reset nhóm hoặc toàn bộ chỉ sửa bind, không reset layout/build. Lỗi lưu giữ được profile trong phiên và báo Chưa lưu.

## 5. Kiểm chứng sau

Thử QWERTY/AZERTY/layout tiếng Việt, numpad, thiếu phím vật lý, focus chat, held key khi đổi bind, import xung đột và browser shortcut. Áp bind giải phóng state giữ cũ, cần input mới không cast bất ngờ. Chưa test; UI-08 hoàn thiện quy tắc, thiết lập thực chưa có.
