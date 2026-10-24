> **Cập nhật có hiệu lực · 21/10/2026:** [Thanh 13 ô hỗn hợp](64_HOTBAR_13_O_KY_NANG_VAT_PHAM.md) thay cấu trúc tám ô/ô bắt buộc bên dưới: 1–9,Q,E,R,Z, kéo kỹ năng hoặc vật phẩm tiêu thụ; giữ WASD + con trỏ. Số lượng/cooldown không nhân theo shortcut. Các đoạn cấu trúc cũ chỉ còn lịch sử khi xung đột.

# INPUT-01 — Bản đồ điều khiển web và PC

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0  
**Trạng thái:** Hoàn thiện hồ sơ thiết kế trong phạm vi task; chưa code, vẽ UI production hoặc kiểm thử.  
**Phạm vi:** MMORPG 2.5D pixel V4; thủ thành giữ nguyên. [Nguồn tham khảo và giới hạn](52_THAM_KHAO_UI_INPUT_MMORPG_SPRITE.md). Các lựa chọn dưới đây là thiết kế riêng cho Ẩn Thành.

## 1. Quyết định mặc định bản đầu

Chọn WASD + chuột hướng ngắm cho Ẩn Thành; không copy click-to-move hoặc F1…F9 của game tham khảo. Đây là bộ bind thiết kế để triển khai sau, cần test browser/layout trước gọi đã vận hành. Chuột không xoay camera gameplay cố định của hướng 2.5D hiện tại.

| Hành động | Bind chính | Ghi chú |
|---|---|---|
| Đi | WASD / mũi tên | Chuẩn hóa chéo, không chạy khi input focus. |
| Đánh thường | Chuột trái trong cảnh | Theo con trỏ và vũ khí, không cần mục tiêu; giữ lặp nhịp hợp lệ theo INPUT-04. |
| Active slot 1…8 | 1 / 2 / 3 / 4 / Q / E / R / Z | Giữ bind khi đổi skill trong slot; số slot theo cấp/nghề. |
| Cơ động nền | Space, alias cùng action slot cơ động | Không một né/skill thứ chín; chỉ hợp khi dòng cơ động đang mang và dùng được. |
| Tương tác | F | NPC/vật thể hợp lệ gần, không auto cast vào quái. |
| Chọn mục tiêu | Tab | Chỉ khi world focus; để xem/skill targeted, không thay hướng đòn tự do. |
| Hủy ngắm đang chọn | Chuột phải | Không đồng thời mở menu item; trong UI theo owner. |
| Nhân vật / túi / skill / quest / map | C / T / K / L / M | Theo UI-06. |
| Gọi/xuống thú | H | Kỵ Sĩ dùng ngựa theo hồ sơ 34. |
| Party / guild / bạn | P / G / O | Không tự gửi mời khi mở panel. |
| Chat | Enter | Composition không gửi/cast. |
| Đóng nhanh | Backquote, nhãn ~ | Giữ nháp tạm và ẩn; không hoạt động trong input. |
| Menu/Back | Esc | Một bước theo UI-06; không thoát ngay. |

Các hệ U/V/J/Y không còn mặc định bật sớm: mở qua menu, cho gán khi hệ được thiết kế/mở. Chọn 1–4/Q/E/R/Z để tám active không trải tay đến số 8; label slot là dữ liệu, không đổi cây kỹ năng thành Q/E/R thủ thành.

## 2. Ngắm kỹ năng

Skill tự thân bấm một lần khi đủ điều kiện. Skill hướng/đất mặc định bấm bind để preview, chuột trái xác nhận, chuột phải/Esc hủy trước phát lệnh; click confirm không đồng thời đánh thường. Tùy chọn quick-cast theo skill có thể thiết kế/triển khai sau với preview/range rõ, không tự đổi damage hoặc có auto-target thêm sức mạnh.

Skill targeted cần mục tiêu hợp lệ; mất đích hoặc khác tầng báo rõ, không nhảy sang địch khác chỉ vì ở gần con trỏ. Hướng/mặt đất lấy ray vào surface hợp lệ trong thế giới, không lấy screen.y suy cao độ. Đánh/cast qua tường, tầm và va chạm vẫn theo COMBAT chưa hoàn thiện; mô tả input không tự chốt hitbox.

## 3. Xung đột và nền tảng

Không dùng F5/F11/F12, Ctrl+W/R/L/Tab hoặc Alt+F4 mặc định. UI không hứa chiếm được phím OS/browser. Cho đổi bind theo UI-08 và nút thay thế mọi chức năng thiết yếu. Phải thử Vietnamese IME, layout khác, fullscreen bị Esc thoát và tab mất focus.

Space alias cần chỉ rõ trong hotbar/setting, cùng cooldown, cùng resource. Nhánh không còn action cơ động tương thích thì Space chưa gán/hiện lý do, không tự mở dash miễn phí. Kỵ Sĩ đi bộ Space không lách khóa cần ngựa.

## 4. Kiểm chứng sau

Thử tám slot và alias, confirm không đánh thường, Tab focus UI không target, root/hất/stun giữ input không vượt quyền, click ray hai tầng và mất focus. Chưa test hoặc code. INPUT-01 hoàn thiện đề xuất bind cuối ở cấp thiết kế, không biến COMBAT-01/02 thành đã xong.


**Combat ngắm/hành động hiện hành · 21/10/2026:** [Combat ngắm/hành động hiện hành](96_COMBAT_01_NGAM_VA_CHON_MUC_TIEU.md). Hồ sơ bổ sung thay các điểm để mở trước đó khi xung đột trong phạm vi mục; giữ cap60/nội dung45 và công thức STAT hiện hành. Chưa triển khai/kiểm thử.
