# V29 — Khôi phục ảnh effect Bất Khuất

- Nguyên nhân: vanguard-vfx.js vẫn để frame=null từ lần bỏ atlas lỗi, nên chỉ còn nét đâm phụ trợ.
- Đã đưa public/assets/vanguard/effects-v2.png vào gameplay trở lại cho đánh thường, Q xung phong, E liên kích/đòn cuối, R biến Cự Nhân/thu nhỏ, đâm Cự Nhân và impact/stomp.
- Khai báo vùng ảnh riêng VANGUARD_EFFECT_RECTS, dùng pose hoàn chỉnh thay vì chia đều 6x6 gây cắt ảnh. Chuyển động bằng theo vị trí nhân vật, hướng đánh, phóng/thu và tan ảnh.
- Giữ tỷ lệ gốc, giới hạn kích thước theo class-vfx-config.js; ảnh ở depth 20002 để không bị map rộng che. Giữ nét năng lượng phụ trợ và dọn sprite khi hết hiệu lực.
- Không thay đổi sát thương, tầm đánh, tốc đánh hoặc hitbox. Tái sử dụng asset đã vẽ, không tạo asset mới.

Không chạy kiểm thử hay QA gameplay theo yêu cầu trước của người dùng. Chưa xác nhận trực tiếp hình ảnh sau thay đổi.
