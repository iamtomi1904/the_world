# UI-10 — Xác nhận, xem trước và hành động giá trị cao

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0  
**Trạng thái:** Hoàn thiện hồ sơ thiết kế trong phạm vi task; chưa code, vẽ UI production hoặc kiểm thử.  
**Phạm vi:** MMORPG 2.5D pixel V4; thủ thành giữ nguyên. [Nguồn tham khảo và giới hạn](52_THAM_KHAO_UI_INPUT_MMORPG_SPRITE.md). Các lựa chọn dưới đây là thiết kế riêng cho Ẩn Thành.

## 1. Phân loại rủi ro thao tác

Đọc/lọc/ghim không hỏi modal. Hành động đảo ngược thấp dùng phản hồi gọn và Undo nếu backend thật có. Hành động tiêu tiền/chuyển quyền/đổi build dùng preview phù hợp. Phá đồ, xóa nhân vật, ràng buộc không đảo ngược hoặc quyết định dài hạn cần xác nhận cụ thể; không mọi nhặt đồ đều bật hỏi.

Không gán ngưỡng vàng tùy ý. Rule xác nhận theo loại nghiệp vụ và policy giá trị cao do ECON/SAFE định nghĩa. Không coi một món thấp rarity là luôn không có giá trị nếu đang nâng/khảm hoặc quest.

## 2. Nội dung xác nhận

Ghi đối tượng chính xác, số lượng, tiền loại nào, đơn giá/tổng/phí, người nhận/phạm vi ví và hậu quả giữ/mất. Nâng/khảm/tiến hóa phải có base/roll/gem/binding/set trước–sau và xác suất/rủi ro thật nếu hệ có. Giá trị chưa biết không trình bày như chắc chắn.

Button là Bán 3 món, Phá hủy, Áp dụng build... thay vì Đồng ý chung. Default focus ở Quay lại hoặc khu xem, không mặc định Enter phá đồ. Không checkbox ghi nhớ để bỏ mọi cảnh báo không đảo ngược. Có thể nhớ lựa chọn cho loại rủi ro thấp cụ thể khi hệ cho phép.

## 3. Snapshot và server

Preview gắn item instance/revision, báo giá, điều kiện và thời hạn. Nếu bên kia đổi đề nghị, inventory thay hoặc giá hết hạn, bỏ xác nhận cũ và xem lại. Không tái dùng một nút confirm cho món vừa lọt vào hàng cũ sau sort. Server kiểm lại tại commit, client không giữ quyền từ lúc modal mở.

Pending khóa duplicate cùng yêu cầu, chưa rõ kết quả đi tra trạng thái theo UI-05. Đóng/hủy view không bảo đảm rollback; receipt/log phải có kết quả, không trả phí hoặc cấp item giả bằng animation. Undo chỉ hiện nếu nghiệp vụ thật hỗ trợ.

## 4. Class, build và truyện

Chọn nghề 15/nhánh 30 preview vũ khí, vai trò, quyền race, tuyến kế tiếp và quyết định dài hạn; ngựa nền cho Kỵ Sĩ phải được giải thích. Đổi preset skill khác đổi nghề. Reset SP/TP miễn phí tại điểm nghỉ theo hồ sơ 31; không tự thêm phí vì có trường Phí trong UI cũ.

Lựa chọn truyện chỉ nêu hậu quả người chơi có thể biết, không leak toàn bí mật. Quyết định cá nhân không tự xóa NPC chung. Mất mạng không auto chọn; nháp được giữ theo state quest. Xóa nhân vật và bảo vệ tài khoản cần luồng riêng ở DATA/SAFE, không tự đặt thời hạn khôi phục.

## 5. Kiểm chứng sau

Thử thay giá/item giữa preview và confirm, Enter đang giữ, combat bắt đầu, túi đầy và timeout sau commit. Không xác nhận sai món, không nhân giao dịch và không trừ phí reset build miễn phí. Chưa runtime/test; UI-10 hoàn thiện đặc tả, chưa hoàn thiện thương mại hoặc toàn screen flow.
