# Bất Khuất, Phong Kiếm Khách, Kiếm Chủ và Dạ Tiễn Q

## Bất Khuất
- Vẽ lại hai dạng với phong cách pixel thô, mảng màu gọn như Craftpix gốc: mũ đồng/chóp đỏ, giáo dài, khiên đỏ có dấu chiến tộc trắng. Thay bản nhiều chi tiết; giữ bản v1 để tham chiếu.
- Atlas hiệu ứng 6×6 riêng: đâm thường, Q xung phong, E liên kích, R biến hình, đâm Cự Nhân và va chạm. Dùng bản effects-v2 nền trong suốt, không dùng các bản thử có nền gradient.
- VFX bám nguồn khi lao/đâm, xoay theo góc ra đòn; từng nhịp E có dấu nhận diện riêng. R thu nhỏ chạy ngược chuỗi hình. Giới hạn 100 effect và dọn cả sprite lẫn graphics khi hết hạn/chuyển map.
- Không đổi chỉ số và sát thương Bất Khuất trong lần sửa mỹ thuật này.

## Phong Kiếm Khách
- Hero `samurai` giữ ID, đổi tên hiển thị và class riêng `windblade`; Kiếm Chủ giữ class/kỹ năng cũ.
- Sprite pixel mới: Idle/Run/Attack/Dash/Cast/Leap/Death, chia ô theo atlas thực tế 6×6; Cast dùng tư thế sẵn sàng và lớp gió riêng; Hurt dùng hai frame đầu hàng gục.
- Nội tại Phong Tuyệt: trúng đòn tích tốc chạy/tốc đánh, mỗi lần đánh chỉ cộng một lần dù quét nhiều quái. Cấu hình chu kỳ là 3: sau 2 đòn trúng, đòn thứ ba giải phóng lốc. Đây là cách diễn giải câu “đủ 2 đòn, đòn kế tiếp” trong thiết kế; đoạn mở đầu có nhắc đòn thứ hai khác với mô tả chi tiết.
- Q 150% Công, bán kính cơ bản 65, tầm 210: tìm quái mặt đất gần nhất, hướng cố định khi bắt đầu, lướt theo delta time và dừng trước vật cản. Không mục tiêu không tiêu hao hay vào hồi chiêu.
- E giảm sát thương nhận, tăng tốc chạy, có gió bảo hộ bám thân và vệt chạy; không gây sát thương.
- R gồng rồi nhảy đến mục tiêu/điểm theo hướng ngắm, vẫn dừng trước vật cản; tạo vùng lốc cố định gây sát thương theo nhịp. Chủ nhân trong vùng được tăng Công/tốc chạy/tốc đánh, ra ngoài mất buff, quay lại nhận lại.
- Hất tung 0,5s; cùng mục tiêu có mốc giới hạn chung 1s giữa hai lần hất tung, kể cả nhiều nguồn Phong Kiếm Khách. Quái bị khóa di chuyển/tấn công trong lúc hất; không đổi cờ flying hoặc collision vì VFX.
- Chỉ số chưa được cung cấp trong mô tả đặt ở `public/wind-config.js`: stack, E, thời gian/nhịp R, buff và chi phí. Giữ cơ chế nâng bậc trong skills.js. Class phong hệ sử dụng Ngọc Gió theo quy tắc class nguyên tố hiện có.
- Server quyết định sát thương, vùng, stack và khống chế. VFX gió trắng xanh, lốc nâng mục tiêu, vòng vùng R và bước chân hỗ trợ đọc trạng thái.

## Icon Kiếm Chủ
- Atlas 4×2: hàng trên nội tại/Q/E/R Phong Kiếm Khách, hàng dưới nội tại/Q/E/R Kiếm Chủ.
- Áp dụng icon cho book, hotbar, tooltip và trang hồ sơ. Không sửa kỹ năng/sát thương Kiếm Chủ.

## Dạ Tiễn Q
- Mũi tên nguyệt quang với lõi trắng, đầu tím bạc, dải sáng dài; sprite xoay theo đường bay thực, có animation và vệt xuyên quái.
- Va chạm có tia sáng và vòng nguyệt quang riêng; cuối đường bay/hit vật cản dọn projectile VFX theo sự kiện server.
- Không đổi tốc độ, phạm vi, hitbox 90 hoặc sát thương Q. Atlas được cắt frame riêng để loại mép hướng dẫn khỏi hình hiển thị.

## Bàn giao
- Hồ sơ: `/vanguard-gallery.html`, `/wind-gallery.html`, `/shadow-gallery.html` (thêm nút Q Dạ Tiễn), `/skill-gallery.html`.
- Asset mới: `public/assets/vanguard/{foot-v2,giant-v2,effects-v2}.png`, `public/assets/windblade/{hero-v1,icons-v1}.png`, `public/assets/shadow/moon-arrow-q-v1.png`.
- Prompt/công cụ: `ASSET_PROMPTS_V22.md`; built-in image_gen, không dùng API bên ngoài.
- Module mới: `wind-actions.mjs`, `public/wind-config.js`, `public/wind-vfx.js`, `public/wind-gallery.html`, `public/wind-gallery.js`.
- Chỉnh: simulation, abilities, encounters, passives; public skills/content/passives/gems/catalog-v4/game/combat-window/effects/shadow-art/shadow-vfx/skill-gallery/shadow-gallery/vanguard-vfx/vanguard-gallery; vanguard-actions (chỉ bổ sung dữ liệu VFX).

## Giới hạn
- Chưa chạy tests, kiểm tra trình duyệt, đo FPS hoặc chơi nhiều người theo yêu cầu dừng kiểm tra trước đó. Chưa xác nhận cân bằng và độ mượt trong trận.
- Sprite một góc nhìn lật trái/phải; hitbox và VFX theo đầy đủ hướng.
- R Phong Kiếm Khách có nhảy về mặt hình ảnh, không vượt qua tường/địa hình cấm; không miễn sát thương.
