> **Cập nhật có hiệu lực · 21/10/2026:** [Thanh 13 ô hỗn hợp](64_HOTBAR_13_O_KY_NANG_VAT_PHAM.md) thay cấu trúc tám ô/ô bắt buộc bên dưới: 1–9,Q,E,R,Z, kéo kỹ năng hoặc vật phẩm tiêu thụ; giữ WASD + con trỏ. Số lượng/cooldown không nhân theo shortcut. Các đoạn cấu trúc cũ chỉ còn lịch sử khi xung đột.

# INPUT-04 — Nhấn, giữ, nhấn đúp và kéo thả

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0  
**Trạng thái:** Hoàn thiện hồ sơ thiết kế trong phạm vi task; chưa code, vẽ UI production hoặc kiểm thử.  
**Phạm vi:** MMORPG 2.5D pixel V4; thủ thành giữ nguyên. [Nguồn tham khảo và giới hạn](52_THAM_KHAO_UI_INPUT_MMORPG_SPRITE.md). Các lựa chọn dưới đây là thiết kế riêng cho Ẩn Thành.

## 1. Một gesture, một ý định

Click/tap kích một action theo context; press không tự mua trước release hợp lệ ở control. Skill hotkey dùng pha event khai báo rõ, bỏ keyboard auto-repeat như trigger cast mới. Giữ đánh thường là chế độ lặp theo cooldown/attack state server, không theo số keydown/khung hình.

Giữ skill không tự mở spam mọi lần hết cooldown ở mặc định; skill channel/charge được khai báo riêng. Ngắt channel, thời gian charge, cancel/recovery là COMBAT/SKILL, không tự tạo quyền hủy mọi động tác từ input. Không dùng combo double-click làm bắt buộc để đạt DPS.

## 2. Nhấn đúp và giữ

Double-click chỉ là tiện ích ít rủi ro như mở detail khi được bật, không tự mua/phá đồ/xóa nhân vật/chuyển tiền. Trang bị có menu rõ; không khuyến khích double-click để vượt preview thay món hai tay. Không dùng double-tap WASD dash mặc định vì có dòng cơ động/Space cùng quyền riêng.

Long press có trạng thái bắt đầu/hủy/hoàn thành, ngưỡng cấu hình theo thiết bị và tùy chọn hỗ trợ; chưa đặt mili giây giả. Không dùng giữ xác nhận như lớp bảo vệ duy nhất cho xóa đồ. Auto-repeat có thể áp cuộn/số lượng với min/max, không gửi một transaction mỗi nhịp tăng số.

## 3. Kéo thả

Nhấn ô rồi vượt ngưỡng kéo mới tạo ghost; trước ngưỡng vẫn là click chọn. Kéo item sang slot chỉ đề nghị equip/move; server kiểm instance/quyền/cap. Thả ngoài vùng hợp lệ trả ảnh về, không phá/rơi xuống đất mặc định. Bỏ vật phẩm nếu có luồng riêng với xác nhận UI-10.

Kéo skill lên hotbar tạo reference slot, không bỏ quyền đã học. Khóa hotbar mặc định khi chơi để tránh kéo nhầm, mở khóa trong chỉnh ngoài combat; chỉnh không cấp skill thứ chín hoặc reset cooldown. Drag giữa slot giữ action/bind theo setting đã giải thích, preview trước chốt. Không copy item bằng giữ modifier nếu backend không có hành động đó.

## 4. Thao tác nhanh và an toàn

Context menu là đường chính cho dùng/equip/chia stack/so sánh/link chat; không bán/phân giải hàng loạt bằng một tổ hợp chưa có preview. Split stack mở số lượng có giới hạn; tăng số bằng giữ nút chỉ sửa nháp. Shift/ctrl click nếu người dùng gán có nhãn, không mặc định che lỗi browser hoặc focus.

Nhặt nhanh chỉ với vật thể/quyền loot/điều kiện được gameplay cho phép, không vươn xa hơn hoặc tự phá rương. Tiện ích hành động không là macro nhiều skill, bot farm hoặc tự giao dịch.

## 5. Cancel và input lifecycle

Mỗi gesture có started/updated/completed/canceled và chủ sở hữu context. UI đóng, pointer cancel, blur, đổi vùng hoặc chết dọn state giữ/ghost/capture. Mouseup sau cancel không thành click mới vào world. Giữ trên UI rồi kéo ra không thành world attack; wheel trong UI không zoom.

CC root/stun/airborne và ngựa đều là điều kiện runtime server; input đang giữ khi bị khóa không tích queue nhiều đòn để xả sau hết CC. Mặc định không buffer auto-repeat dài; cửa sổ buffer skill nếu có cần COMBAT chốt độ dài cấu hình riêng.

## 6. Tiêu chí kiểm sau

Thử giữ đánh thường ở nhiều FPS/latency, drag mất focus, double-click giá cao, split số lớn, mobile multi-touch, controller tháo và rebind khi giữ phím. Kết quả mỗi intent hợp lệ không nhân item/damage/request. Chưa viết input/test; INPUT-04 hoàn thiện hợp đồng gesture, không hoàn thiện combat/network.


**Nhịp hành động/cancel/buffer hiện hành · 21/10/2026:** [Nhịp hành động/cancel/buffer hiện hành](97_COMBAT_02_NHIP_HANH_DONG_VA_HUY_CHIEU.md). Hồ sơ bổ sung thay các điểm để mở trước đó khi xung đột trong phạm vi mục; giữ cap60/nội dung45 và công thức STAT hiện hành. Chưa triển khai/kiểm thử.
