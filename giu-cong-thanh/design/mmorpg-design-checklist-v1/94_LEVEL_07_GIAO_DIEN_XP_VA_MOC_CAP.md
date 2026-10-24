# LEVEL-07 — Thanh XP, tăng cấp và bảng mốc

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0. Đặc tả giao diện/chức năng, chưa vẽ mockup hoặc làm UI. [Nguồn](92_THAM_KHAO_LEVEL_VA_COMBAT_MMORPG.md). Giữ [13 ô hỗn hợp](64_HOTBAR_13_O_KY_NANG_VAT_PHAM.md).

## 1. Bố cục và đường mở

Thanh XP mảnh nằm dưới cụm hotbar giữa đáy, không thêm thanh ngang che toàn màn. Mức phác cấu hình: cao6px ở UI scale100%, vùng tương tác tối thiểu24px và có đường mở bằng menu/keyboard; chưa phải số pixel sprite. Hover/focus hiện tooltip; click chỉ mở chi tiết, không cast xuống cảnh. Màu vàng đất dịu, dấu mốc sáng nhỏ theo V4, luôn có chữ/số để không phụ thuộc màu.

Hiện cấp hiện tại cạnh chân dung/C và XP x/T(L); chế độ gọn chỉ hiện phần trăm, tooltip/menu luôn xem được số đầy đủ. Trạng thái60 thay phần trăm bằng “Cấp tối đa 60”; không thanh XP tăng giả. Alpha hiện cap10 đúng môi trường, không hứa vào được45/60 trong alpha.

Mở **C → Tiến trình**, hoặc click thanh XP. Không chiếm phím1–9/Q/E/R/Z mới. Liên kết L → Hướng dẫn chứa mốc, K mở điểm kỹ năng, C → Thuộc tính mở AP. Esc/~ theo UI-06, giữ nháp đúng owner; không áp điểm qua việc đóng cửa sổ.

## 2. Nội dung cửa sổ Tiến trình

| Khối | Nội dung và thao tác |
|---|---|
| Hiện tại | Cấp, x/T, còn thiếu, cap60, vùng/nội dung khuyến nghị đến45; không dùng item level thay cấp. |
| Nguồn gần đây | 20 grant gần nhất trong phiên, tên nguồn/XP thực nhận; mở chi tiết factor/chia nhóm khi được quyền. Không tự là lịch sử tài chính đầy đủ. |
| Mốc |1/3/5/7/8/9/10/12/14/15/18/22/25/30/35/40/45/50/55/60; gộp điểm lặp, không hàng trống tạo kỳ vọng reward. |
| Điểm | AP/SP/TP khả dụng và tổng đã cấp, tách ba pool. Nút đến panel phân điểm, không tự dùng. |
| Trạng thái mốc | Đã đạt cấp / còn nhiệm vụ / đã mở / không có trong môi trường. Có Xem yêu cầu và Theo dõi khi hợp lệ. |

Cấp15/30 ghi đủ cấp nhưng chưa xong quest là “Chờ chuyển chức”, không khóa thanh XP. SP35/TP11 giữ sau45, AP tăng3 mỗi cấp tới177 ở60. Mốc50/55 chỉ thông báo tiến trình, không icon quà nếu không có reward.

## 3. Thông báo tăng cấp

Một thông báo không modal, cấu hình hiển thị3 giây; nhiều cấp trong một grant gộp “20→23”, tổng AP/SP/TP thực cấp, có Xem chi tiết. Badge điểm chưa dùng giữ đến khi xử lý, ẩn toast không tiêu điểm. Không hiệu ứng che telegraph boss hoặc rung camera bắt buộc. Theo ART-06, hiệu ứng mức thấp có thể tắt mà vẫn nhận điểm thật.

Không hồi đầy HP/mana khi tăng cấp: giữ lượng hiện tại, clamp nếu max giảm do migration/reset; tăng max không đồng nghĩa heal. Đây là quy tắc bổ sung cho level-up, tránh farm cấp làm nút hồi máu giữa boss. HP/MP hồi theo nguồn hồi phục đã chốt.

Ở45 hiện “Đã đến cuối dải nội dung — tiếp tục luyện đến60”, liên kết nguồn XP40–45. Tooltip nêu hệ số0,50, không dùng chữ “max”. Ở60 thông báo ngừng XP, không quy đổi ngầm; reward preview XP0 vì cap khác với lỗi grant.

## 4. Trạng thái dữ liệu và phản hồi

Server xác nhận level/grant/revision rồi UI chạy tween thanh. Nếu nhận nhiều delta gộp presentation, không gộp ledger hoặc cấp điểm lần hai. Client dự đoán XP không được mở skill/gear trước ack. Kết nối lại lấy snapshot, không replay toàn bộ toast cũ hoặc lên cấp lại.

Thiếu dữ liệu hiện “Đang đồng bộ”, không XP0 giả; lỗi hiển thị có nút thử tải snapshot. Không nút Nhận lại để tạo transaction mới từ timeout. Khi ngưỡng version đổi, hiển thị thông báo cân bằng và số server, không tính XP hai bảng cùng lúc.

## 5. Kiểm sau và giới hạn

Đọc ở1280×720 và1920×1080, UI scale/font lớn, tương phản/mù màu; grant vượt nhiều cấp,45→46/59→60, class quest chưa xong, lặp/reorder delta, kết nối lại, ~ khi C có nháp. Chưa vẽ sản xuất, chưa kiểm browser/game; UI-03 còn một phần do cần mockup13 ô/2.5D, mục này không tự hoàn thiện UI-03.
