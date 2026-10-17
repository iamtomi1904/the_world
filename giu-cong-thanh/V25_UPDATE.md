# V25 — Sửa VFX ba class và mana biến hình

- Hắc Kỵ Sĩ, Phong Kiếm Khách, Bất Khuất: bỏ lớp atlas hiệu ứng bị cắt sai ô; dùng lớp graphics hướng đánh đang có, bổ sung nét sáng. VFX vẽ trực tiếp không có khung sprite gây cắt vuông, không kéo giãn ảnh. Các sprite nhân vật và icon kỹ năng được giữ nguyên.
- public/class-vfx-config.js giới hạn bán kính hiển thị theo từng động tác; không thay đổi sát thương, tầm đánh và collision. Vùng Phong Bạo Kiếm Vực vẫn vẽ vòng đúng bán kính gameplay, bỏ ảnh xoáy lớn che màn hình.
- R Thánh Kỵ Sĩ / Hắc Kỵ Sĩ: phí kích hoạt 0 mana, duy trì 6 mana/giây (trước 12). Q/E vẫn có chi phí riêng. Giữ cơ chế ngừng hồi mana và bắt đầu hồi R khi kết thúc dạng.
- Mô tả và HUD đồng bộ mức tiêu hao mới.

Không chạy kiểm thử hoặc QA theo yêu cầu trước của người dùng. Chưa xác nhận gameplay trực tiếp sau thay đổi.
