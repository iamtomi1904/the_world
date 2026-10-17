# Frame nhân vật, hitbox boss và Phong Kiếm Khách

## Sửa hình Bất Khuất và hai kỵ sĩ
- Atlas Bất Khuất thường/Cự Nhân và hai kỵ sĩ cưỡi ngựa có hàng không đều. Cắt đều toàn ảnh làm chân/giáo/cánh bị cắt và lẫn frame hàng bên cạnh, nhất là E Bất Khuất và Cast của kỵ sĩ.
- Khai báo `preciseAtlas`, `frameRects`, `framePivots`, điểm đặt chân từng frame và bodyHeight ổn định trong catalog-v4. Tải nguyên ảnh rồi đăng ký các frame theo vùng thực, không chia sprite sheet bằng chiều cao trung bình.
- E Bất Khuất dùng 4 pose giữa chuỗi đâm, restart theo từng nhịp server, tốc độ animation theo interval E. Giữ đủ nhịp cuối thay vì xóa pose ngay lúc gây damage cuối.
- Q/Cast Thánh Kỵ Sĩ hoàn tất toàn bộ frame theo cast duration như Hắc Kỵ Sĩ. Trang hồ sơ dùng cùng rect/pivot với gameplay.
- Không đổi công thức sát thương hay chỉ số kỹ năng khi sửa frame.

## Vùng nhận đòn boss
- `public/combat-geometry.js` cấu hình vùng nhận đòn riêng cho boss theo chiều cao hiển thị, có tâm ở phần thân và bán kính lớn hơn vùng chân cũ.
- Áp dụng cho projectile, melee cone, spear, xung phong, Q hai kỵ sĩ và các vùng sát thương đã tích hợp. Quái thường giữ các phép thử cũ.
- Vùng nhận đòn tách khỏi va chạm di chuyển; không khiến boss chắn đường rộng hơn hoặc tăng tầm tấn công của boss.

## Phong Kiếm Khách
- Q chuyển sang lướt tự do theo hướng con trỏ, không cần mục tiêu, giữ 150% Công / tầm 210 / bán kính 65 cơ bản và dừng trước vật cản. Bỏ kiểm tra bắt buộc có quái trước khi tiêu mana.
- Atlas hiệu ứng mới 6×6: đường kiếm, gió lướt Q, gió hộ thể E, Kiếm Vực R, lốc nội tại và hất tung. Nền trong suốt, khai báo ranh giới hàng riêng để tránh cắt hình.
- E bám nhân vật trong thời gian buff. R có vòng bão kiếm tại vùng tác động; dọn ảnh khi vùng hết hạn/chuyển map. VFX không điều khiển damage hay stack.
- File asset và prompt: `public/assets/windblade/effects-v1.png`, `EFFECT_PROMPT.md`; built-in image_gen.

## Nội dung trang chủ và chế độ
- Trang chủ bổ sung mô tả các class mới, đếm hero/class từ dữ liệu, cập nhật hình đại diện và link hồ sơ. Thêm Bất Khuất, Phong Kiếm Khách, Hắc Kỵ Sĩ, Thánh Kỵ Sĩ; giữ phần nhập vai ở trạng thái đang phát triển.
- Trang thủ thành bổ sung hướng dẫn solo/co-op, độ khó, săn rừng/bùa, túi T, Ctrl + nhấp thành mua đồ, bán ngọc 70%, ~ đóng cửa sổ và Esc về sảnh.
- Hướng dẫn mới tự ẩn khi đang trong trận, không chiếm diện tích gameplay.

## File chính
- Thêm: `public/combat-geometry.js`, `public/mode-updates.css`, asset/prompt Phong Kiếm Khách.
- Chỉnh: catalog-v4, game, monster-preview, vanguard-actions, projectiles, simulation, abilities, paladin-actions, fallen-actions, wind-actions, skills, wind-vfx, shadow-art, leader-auras, wind-gallery, home.html/home.js, defense.html/index.html.

## Trạng thái
- Đã sửa code và dữ liệu frame; chưa chạy kiểm thử hoặc kiểm tra trình duyệt theo yêu cầu dừng kiểm tra trước đó. Chưa xác nhận trực quan trong trận.
- Tọa độ hitbox boss cấu hình riêng với vùng đi lại. Sprite nhiều hướng vẫn dùng lật trái/phải như game hiện tại.
