# V28 — Khôi phục ảnh Q Hắc Kỵ Sĩ, vẽ và tích hợp effect Phong Kiếm Khách

- Q Hắc Kỵ Sĩ dùng lại ảnh effects-v2.png ở cả dạng thường và cưỡi ngựa. Khung riêng lấy các pose hoàn chỉnh, hiển thị đúng tỷ lệ và trên cảnh vật; xoay theo hướng đánh, giữ rõ ảnh trước khi tan.
- Tạo public/assets/windblade/effects-v3.png bằng built-in imagegen, nền trong suốt: chém, xoay Q, bảo hộ E, niệm R, đáp R, lốc nhỏ.
- Bộ ảnh mới được preload và dùng thực trong addWindVFX/drawWindState/drawWindFields. Vòng kiếm Q xoay quanh nhân vật; R có ảnh niệm, chấn động đáp và 8 ảnh lốc nhỏ tỏa quanh vùng tròn. Giữ nét/particle bổ trợ, không thay ảnh bằng vector.
- Dùng khung riêng theo hàng và pose đầu hoàn chỉnh để tránh cắt qua các hình liền kề trong atlas, tạo chuyển động bằng xoay/phóng/thu/mờ. Không kéo giãn ảnh đánh thường hoặc Q thành hình vuông.
- Dọn các ảnh lốc khi vùng hết hạn/chuyển map. Không đổi sát thương hoặc hitbox.

Công cụ tạo ảnh: built-in imagegen. Prompt đầy đủ ở public/assets/windblade/EFFECT_V3_PROMPT.md.
Không chạy kiểm thử hoặc QA game theo yêu cầu trước của người dùng. Chưa xác nhận trực tiếp gameplay sau tích hợp.
