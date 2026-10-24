# UI-09 — Chat, IME và quyền sở hữu đầu vào

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0  
**Trạng thái:** Hoàn thiện hồ sơ thiết kế trong phạm vi task; chưa code, vẽ UI production hoặc kiểm thử.  
**Phạm vi:** MMORPG 2.5D pixel V4; thủ thành giữ nguyên. [Nguồn tham khảo và giới hạn](52_THAM_KHAO_UI_INPUT_MMORPG_SPRITE.md). Các lựa chọn dưới đây là thiết kế riêng cho Ẩn Thành.

## 1. Khi nhập liệu

Focus input/chat chặn phím gameplay kể cả WASD, số, K/T, H và ~. Key repeat chỉ nhập, không bắn/cast. Con trỏ có thể ngắm hình nhưng click vào UI không gửi đòn. Khi bắt đầu focus giải phóng di chuyển/đánh đang giữ ở client theo luật; không hủy skill server đã chấp nhận.

Enter khi chưa focus mở chat; Enter trong chat gửi một lần nếu hợp lệ và không đang composition. Trong IME, Enter chọn chữ, Esc hủy composition trước; không đồng thời gửi tin/đóng panel. Không coi keyCode đơn lẻ là đủ cho Telex/VNI/dead key và paste.

## 2. Gửi, thoát và mất focus

Gửi tin thành công được phản hồi theo trạng thái thật; pending không nhân tin vì Enter repeat. Khi Esc thoát chat giữ nháp theo kênh trong phiên; không tự gửi hoặc xóa. Đóng nhanh ~ trong input là ký tự. Sau blur cần input mới để di chuyển/đánh, không tái phát phím còn giữ.

Mất focus tab/PC, mở menu OS hay reconnect: dừng phát lệnh giữ, bảo toàn nháp theo phạm vi, không gửi queue lệnh cũ khi quay lại. Server vẫn xử lý combat; tab nền không là pause hay miễn thương.

## 3. Clipboard, link và modifier

Ctrl+C/V/X/A/Z trong input giữ nghĩa soạn thảo khi nền tảng cho phép. Paste văn bản qua chuẩn hóa/kích thước/kiểm kênh, không thực thi command nhiều dòng tự động. Link item có token do hệ thống xác nhận, không raw HTML. Nút Chia sẻ vật phẩm vào chat là đường chính; không lấy Ctrl+click toàn cục vì có thể là thao tác browser.

Ctrl/Alt không tự mở shop hoặc đổi target trong khi input đang giữ; quyền tương tác NPC do gameplay và UI-02, không dùng phím để bypass range. Lệnh chat nếu có whitelist riêng, không biến nháp thành script gameplay.

## 4. Focus bàn phím

Tab trong panel/ô nhập đi focus theo vùng; không target địch. Không có text/modal/UI focus thì Tab mới là action chọn mục tiêu của INPUT-01. Khi cửa sổ nhận focus không tự bật chat. Các nút luôn hiện bind đúng, focus indicator không biến mất vì pointer di chuyển.

## 5. Tình huống cần kiểm

Gõ câu Việt có dấu chứa w/a/s/d, số và ~; giữ Enter, composition, paste nhiều dòng; mouseup sau blur; OS đổi layout; reconnect lúc gửi. Không cast/mua/di chuyển hoặc nhân tin. Không kiểm/cập nhật hệ chat thực trong đợt này. UI-09 hoàn thiện đặc tả focus, chưa hoàn thiện moderation/quyền kênh của nhóm CHAT/SAFE.
