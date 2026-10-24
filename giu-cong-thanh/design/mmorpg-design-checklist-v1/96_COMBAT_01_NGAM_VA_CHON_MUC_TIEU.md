# COMBAT-01 — Ngắm, chọn mục tiêu và đánh tự do

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0. Hoàn thiện quy tắc V1, chưa code/playtest. [Nguồn tham khảo](92_THAM_KHAO_LEVEL_VA_COMBAT_MMORPG.md). Hợp nhất INPUT-01/04 và hotbar13, không thay bind của thủ thành.

## 1. Ba khái niệm độc lập

**Con trỏ** xác định ý định hướng/điểm. **Hover** là thực thể dưới con trỏ, chỉ gợi ý. **Selected target** là ID chọn để xem thông tin hoặc dùng skill chỉ định. Chọn boss bằng Tab không bẻ đòn đánh thường từ hướng chuột sang boss. Không tự chạy tới đích khi bấm đánh/cast.

WASD theo mặt phẳng camera cố định, chuẩn hóa chéo; mỗi hướng màn chiếu về worldXY và surface hiện tại. Chuột trái ngoài UI đánh thường hướng con trỏ, kể cả đất trống; giữ lặp theo nhịp server, không auto-chase. Không có địch vẫn phát animation hợp lệ. Chuột không xoay camera. F tương tác NPC/vật thể gần theo quyền riêng, không đánh NPC bằng click vào hội thoại.

## 2. Phân loại target mode

| Mode | Nhận ý định | Xác nhận/quy tắc |
|---|---|---|
| Self | Bấm ô skill/item | Cast nếu đủ quyền, không yêu cầu chọn địch. |
| Direction | Điểm ray trên bề mặt tạo vector từ chân người chơi | Bind mở preview, trái xác nhận, phải/Esc hủy; hướng chốt lúc bắt đầu action, skill xoay theo giai đoạn phải khai báo. |
| Ground | Điểm worldXYZ+surfaceId | Preview vùng thật, không clamp âm thầm điểm ngoài tầm; click ngoài tầm báo lý do và giữ preview. |
| Unit enemy/ally | ID người chơi đã chọn, hoặc hover đúng loại tại thời điểm xác nhận | Kiểm alive/relation/range/LoS/cao độ; không tự nhảy sang unit khác nếu mất đích. |
| Hybrid | Skill có các form đã ghi rõ | UI hiện mode/form hiện tại; không tự chuyển damage/heal do màu target. |

Skill targeted nếu có selected target đúng loại thì preview rõ đích đó; nếu không, cho hover chọn khi confirm. Click party frame trong mode heal xác nhận ID đồng minh và tiêu thụ click, không đánh xuống cảnh. Không có đích hợp lệ thì chưa gửi cast, chưa trừ tài nguyên. Target tự thân qua nút trong party frame/portrait khi mode cho phép, không tự hồi mình khi heal đồng đội hụt.

Quick-cast chưa bật mặc định V1. Nếu sau này có, dùng cùng packet/validation, không thêm snap, tầm hoặc rate. Mobile/gamepad mới có nguyên tắc tương đương chọn/hủy/xác nhận; binding/UI cụ thể còn INPUT-02/03, không tuyên bố hỗ trợ.

## 3. Chọn đích và hỗ trợ thao tác

Tab trong world focus duyệt địch đang biết và đủ quyền chọn trong **12U**, cùng miền chiến đấu/cao độ có thể tương tác. Thứ tự ổn định: góc lệch nhỏ nhất theo con trỏ → khoảng cách mặt phẳng → entityId. Giữ danh sách vòng tối đa1 giây để quái chạy nhẹ không đổi thứ tự liên tục; mất/chết/ẩn loại ngay. Tab không cast, không mở thông tin kẻ đang tàng hình không được phát hiện. Trong input/cửa sổ Tab đi focus UI.

Hỗ trợ click unit: vùng picking ngoài hình học chọn được mở rộng **0,15U**; không đổi hitbox damage. Nếu nhiều unit chồng, ưu tiên silhouette/outline của unit hợp lệ gần điểm ray, sau đó độ sâu bề mặt nhìn thấy, rồi ID. Có đường Tab để chọn boss bị cây che một phần khi vẫn có quyền nhìn. Không chọn xuyên tường kín hoặc reveal phía sau sương chiến tranh.

V1 **không aim magnetism hoặc đạn tự tìm mục tiêu mặc định**. Với đánh thường, hover một quái bay hợp lệ có thể cấp aimPoint cao độ theo COMBAT-05; hướng mặt phẳng vẫn từ người tới vị trí aim, không homing sau phát. Tùy chọn “Hỗ trợ chọn” chỉ đổi picking/outline, không cho projectile sai hướng tự trúng.

## 4. Ray, LoS và phản hồi

Ray camera tìm bề mặt nhìn thấy hợp lệ; ưu tiên mặt cầu đang nhìn, không screen.y đo chiều cao. Nếu người ở dưới cầu mà point ở mặt cầu, preview báo khác tầng khi skill không crossSurface. Mục tiêu unit dùng aim anchor trong hurt volume, không điểm đầu sprite. Hướng bằng0 giữ hướng chiến đấu gần nhất; không NaN/đạn random.

Con trỏ có glyph: hợp lệ, ngoài tầm, chắn đường, sai cao độ, sai loại/miễn target. Dùng viền/ký hiệu và tooltip ngắn, không chỉ đỏ/xanh. Outline địch chỉ là chọn, không cam kết mọi đòn sẽ trúng khi địch di chuyển.

Player/NPC/đồng đội không nằm damage target mask của PvE V1. Đây là bảo vệ mặc định, không thiết kế đầy đủ PvP consent; COMBAT-11 còn riêng. Ctrl+click cửa hàng thành là luật thủ thành, không tự nhập vào MMO; MMO dùng F hoặc control tương tác được UI chấp thuận.

## 5. Ownership input và authority

Một click chỉ có một owner: UI/drag/chat/IME → preview confirm → world attack. Mở/đóng panel, mất focus, pointercancel xóa hold; mouseup sau đó không bắn. ~ ẩn cửa sổ theo UI-06, không hủy đạn đã phát. Server kiểm actor/sequence/target/point/range/relation/quyền; screen coordinate không là bằng chứng trúng.

Kiểm sau: hover khác selected, không target vẫn đánh, heal qua party, confirm không đánh thêm, bridge/tầng, boss chồng mob, click cửa sổ, giữ đánh rồi alt-tab, unit tàng hình. Chưa QA gameplay/camera.
