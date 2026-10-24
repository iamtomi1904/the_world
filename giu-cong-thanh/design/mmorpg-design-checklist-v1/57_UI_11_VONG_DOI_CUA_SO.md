# UI-11 — Trạng thái xuyên vòng đời cửa sổ

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0  
**Trạng thái:** Hoàn thiện hồ sơ thiết kế trong phạm vi task; chưa code, vẽ UI production hoặc kiểm thử.  
**Phạm vi:** MMORPG 2.5D pixel V4; thủ thành giữ nguyên. [Nguồn tham khảo và giới hạn](52_THAM_KHAO_UI_INPUT_MMORPG_SPRITE.md). Các lựa chọn dưới đây là thiết kế riêng cho Ẩn Thành.

## 1. Hợp đồng bắt buộc mỗi màn

Mỗi WIN-01…58 có bảng entry/quyền/nguồn dữ liệu, loading, empty, filter-empty, permission-denied, ready, stale, error, expired và pending/unknown-result khi có ghi. Trường Không áp dụng phải có lý do; không mặc định mọi màn cần gọi API. Trạng thái control theo UI-05, ở đây chốt luồng màn hình và biến cố phiên.

Mỗi màn có Back/Close hoặc giải thích overlay bắt buộc; spinner không vô hạn không đường thoát. Retry tải dữ liệu khác retry giao dịch; hết thời gian chờ không tự kết luận giao dịch thất bại. Các ngưỡng timeout do NET chọn cấu hình và đo sau.

## 2. Bốn họ luồng

Màn ngoài thế giới (đăng nhập/server/tạo nhân vật) giữ nháp hợp lệ, không bước vào world nếu quyền chưa xác nhận. Reload/check version có thông báo không nhân tạo nhân vật.

Màn cá nhân đọc/nháp (K/C/T/quest/settings) có thể khôi phục sau chuyển vùng theo UI-02; request cần state mới trước commit. Bản nháp schema cũ cần migration/preview hoặc giữ chỉ xem, không tự áp khi game đã cập nhật cây skill.

Màn gắn NPC/trạm (shop/kho/rèn) mất quyền khi rời range/vùng, NPC hủy, combat hoặc chết; thông tin có thể giữ stale để xem, nút commit khóa. Server là nguồn xác nhận, không giữ authority bằng ghim cửa sổ.

Màn giao dịch/claim có state transaction riêng còn sau đóng: pending/unknown/confirmed/rejected. Đăng nhập lại tra kết quả, không phát lại hành động vì panel đang hiển thị receipt cũ.

## 3. Ma trận biến cố

| Biến cố | Xử lý |
|---|---|
| Chết | Ưu tiên hồi sinh, khóa hành động sống/dịch vụ; giữ nháp cần thiết, không reset cooldown. |
| Chuyển map | Dọn tooltip entity cũ; cấm click tích lũy lúc load, kiểm quyền tương tác ở đích. |
| Disconnect | Dữ liệu hiển thị stale, chặn ghi mới; thông báo thử kết nối/đang tra giao dịch. |
| Reconnect | Đồng bộ actor/inventory/transaction/quest trước bật thao tác ghi. |
| Session hết hạn | Đường đăng nhập lại rõ; không lưu password trong nháp UI hoặc tự gửi transaction mới. |
| Bảo trì | Theo lịch/thông báo server, không tự ban item; xử lý request đang chờ có log. |
| Client lỗi phiên bản | Màn cập nhật/tải lại theo nền tảng; không mở world không tương thích. |
| NPC/dữ liệu bị hủy | Owner/transient đóng hoặc thành snapshot hợp lệ, không hit-test entity cũ. |

Không tự đóng trình duyệt hoặc hứa trình duyệt giữ được nháp khi crash. Local preference và nháp session có phạm vi ghi rõ; lưu bản nháp bền vững cần hệ thống riêng và version.

## 4. Phiếu screen-state

Mỗi trạng thái ghi trigger, dữ liệu được hiển thị, nút cho phép, focus, câu thông báo, cleanup, giữ/mất nháp, retry policy và audit/request identity nếu có. Có ít nhất luồng bình thường + mất mạng + state bị thay trước commit; wireframe và test từng màn vẫn thuộc SCREEN/FLOW.

## 5. Kiểm chứng sau

Bộ fixture là K có nháp khi chết, shop ra range, trade unknown khi reconnect, loading asset lỗi và phiên hết hạn. Chưa tạo 58 bảng chi tiết hoặc kiểm backend; hoàn thiện quy chuẩn UI-11 không đồng nghĩa mọi màn đã đầy đủ. Không che lỗi bằng spinner hay success giả.
