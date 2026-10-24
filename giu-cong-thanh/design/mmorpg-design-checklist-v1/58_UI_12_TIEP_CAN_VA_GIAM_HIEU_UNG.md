# UI-12 — Khả năng tiếp cận và giảm tải cảm giác

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0  
**Trạng thái:** Hoàn thiện hồ sơ thiết kế trong phạm vi task; chưa code, vẽ UI production hoặc kiểm thử.  
**Phạm vi:** MMORPG 2.5D pixel V4; thủ thành giữ nguyên. [Nguồn tham khảo và giới hạn](52_THAM_KHAO_UI_INPUT_MMORPG_SPRITE.md). Các lựa chọn dưới đây là thiết kế riêng cho Ẩn Thành.

## 1. Bộ tùy chọn bắt buộc thiết kế từ đầu

Chữ/UI scale theo UI-03, palette quan hệ có glyph/pattern theo ART-05, giảm flash/rung/chuyển động trang trí và mức VFX theo ART-06. Hình pixel V4 giữ nguyên; tăng cỡ chữ không bắt tăng camera zoom. Không tuyên bố đạt chứng nhận hoặc phù hợp mọi khuyết tật khi chưa đánh giá thực tế.

Cho xem trước và reset từng nhóm; không cần tìm NPC hoặc nạp để mở các tùy chọn. Settings truy cập từ màn đầu trước cinematic. Giảm chuyển động chuyển animation UI sang thay trạng thái trực tiếp khi hợp lý, không bỏ windup/telegraph cần phản ứng.

## 2. Đọc và điều khiển

Nhãn/icon ngoài màu cho quan hệ và CC; focus rõ, tab order hợp lý, lối mở detail không cần hover; nút không chỉ là một góc pixel nhỏ. Có rebind/hold-to-repeat thao tác cơ bản theo INPUT-04, không bắt click nhanh liên tục để đánh thường. Không yêu cầu drag mới equip/chuyển đồ: có menu thao tác.

Tên/giá trị có cách đọc đầy đủ và font đủ tiếng Việt. Thông tin khẩn không chỉ là âm hoặc màu. Thiết kế mục tiêu hỗ trợ keyboard ở các màn quan trọng, nhưng chưa tuyên bố screen reader đọc được canvas/scene; cần accessibility layer và đánh giá riêng khi triển khai.

## 3. Nghe và nhìn

Tách Master/nhạc/môi trường/combat/UI/thoại; caption cue quan trọng và phụ đề có tên người nói theo ART-09. Stereo không là nguồn duy nhất chỉ hướng đòn; mono vẫn có icon/telegraph. Không hiện caption nguồn bí mật chưa được phép thấy.

Giảm flash tránh lớp trắng toàn màn, giảm rung không đổi hit timing. Cánh/hạt đồng đội có bản gọn nhưng dấu bom boss, shield/CC và vùng heal hữu ích vẫn giữ. Có tùy giảm đậm nền UI/tăng viền để đọc trên vùng sáng.

## 4. Lưu và phạm vi tương lai

Preference theo thiết bị, có preset dễ đọc; import không tắt thông tin P0 bắt buộc. Mobile cần vùng chạm và caption riêng ở INPUT-02, gamepad cần focus/glyph ở INPUT-03. Không quảng bá hai nền tảng đã hỗ trợ từ hồ sơ này.

## 5. Tiêu chí sau triển khai

Đánh giá chữ Việt dài, chế độ đơn sắc/khó phân biệt màu, keyboard-only cho màn thiết yếu, Master mute, giảm VFX trong combat, 1366px chữ lớn. Thu phản hồi người dùng thật và ghi hạn chế; chưa có mẫu hoặc kết quả. UI-12 hoàn thiện quy tắc, UI asset/runtime/accessibility audit chưa làm.
