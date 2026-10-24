# UI-07 — Tooltip, focus và so sánh thông tin

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0  
**Trạng thái:** Hoàn thiện hồ sơ thiết kế trong phạm vi task; chưa code, vẽ UI production hoặc kiểm thử.  
**Phạm vi:** MMORPG 2.5D pixel V4; thủ thành giữ nguyên. [Nguồn tham khảo và giới hạn](52_THAM_KHAO_UI_INPUT_MMORPG_SPRITE.md). Các lựa chọn dưới đây là thiết kế riêng cho Ẩn Thành.

## 1. Đường mở và quyền dữ liệu

Tooltip xuất hiện khi hover ổn định hoặc focus bàn phím; có nút Chi tiết/Xem thông tin để không phụ thuộc hover. Độ trễ có cấu hình và thử sau; không tự cho tooltip chớp mỗi lần rê qua ô. Touch tương lai nhấn chọn rồi Xem chi tiết/giữ theo INPUT-02, không dùng giữ để kích hoạt món.

Chỉ lấy dữ liệu có quyền xem: item link là dữ liệu đã kiểm nguồn và phiên bản, không HTML/script từ chat. Snapshot món được ghi rõ so với dữ liệu live; không hiển thị kho/roll riêng chưa được chia sẻ. Món đã bán/mất vẫn có thể xem snapshot nếu chính sách cho phép nhưng nút thao tác live phải kiểm instance hiện tại.

## 2. Bố cục và tương tác

Tên → loại/nguồn kỹ năng hoặc item → cấp/nghề/nhánh/vũ khí → chỉ số → hiệu ứng → điều kiện và nguồn có thể công bố. Cần ngựa chiến ghi chữ/icon. Giáp, kháng và giáp ảo không gọi chung Thủ. Trạng thái có source/stack/duration và cách gỡ được biết.

Tooltip ngắn không nhận nút gameplay; muốn cuộn/link/ghim chuyển sang detail popover có focus rõ. Không biến tooltip hover thành một cửa sổ có Mua ngay dưới con trỏ. Di chuyển từ ô sang tooltip tương tác có hành lang thao tác không biến mất; thời gian trì hoãn đóng là cấu hình thử.

Ưu tiên bên còn chỗ, đảo trái/phải/trên/dưới khi chạm mép; không trùm control đang đọc nếu có phương án khác. Nội dung dài dùng panel detail cuộn, footer đóng luôn thấy. Owner đóng thì tooltip thường đóng; bản ghim là snapshot có nhãn và chỉ giữ khi dữ liệu được phép.

## 3. So sánh vật phẩm và kỹ năng

Nút So sánh mở cột đang mặc/dự kiến. Nếu nhiều slot hợp lệ như nhẫn, chọn slot đích rõ; vũ khí hai tay phải tính món tay phụ bị tháo trong preview. Nếu công thức chưa có thì ghi Chưa có phép tính tổng, không tạo lực chiến giả. Không chỉ dùng mũi tên xanh/đỏ cho mọi affix vì tăng một stat không luôn tốt cho mọi build.

Giữ base/roll/khảm/nâng/set thành các nhóm; điều kiện activation và thay đổi profile hình riêng. Item không mặc được vẫn xem, không tự equip bằng hover/double-click. Skill so rank hiện tại/dự kiến, tài nguyên/cooldown/tầm/hiệu ứng; phân biệt nâng rank với tiến hóa hoặc biến thể loại trừ. Chỉ số % nêu kiểu cộng và giá trị hiệu lực, không hứa số damage khi chưa đủ dữ liệu.

## 4. Cửa sổ nhỏ và khả năng đọc

1366px dùng hai tab Hiện tại/Dự kiến hoặc detail sheet nếu hai cột không vừa, không thu font dưới chuẩn. Có chế độ mô tả ngắn/chi tiết; thông tin bắt buộc về giá, binding và hậu quả không giấu trong chế độ ngắn. Focus Tab đi qua liên kết/Đóng/So sánh hợp lệ; Esc theo UI-06.

## 5. Đầu ra và kiểm chứng sau

Cần mẫu tooltip item, skill, effect và compare hai tay/nhẫn; hover/focus/touch tương lai; tên Việt dài, số lớn, owner bị hủy và link item hết hiệu lực. Chưa tạo các mẫu hoặc kết quả test. Hoàn thiện đặc tả UI-07, không hoàn thiện màn item/skill hoặc công thức STAT/GEAR thay task chuyên môn.
