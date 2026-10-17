# Hắc Kỵ Sĩ và cảnh vật sinh cảnh

## Gameplay
- Hero `knight-3` chuyển từ guardian sang class `fallen`; không thay đổi các Hộ Vệ khác. Giữ ID hero để tương thích lựa chọn hiện có.
- Nội tại tăng Công, xuyên giáp cố định, thêm sát thương lên mục tiêu đang chảy máu/tha hóa. Dấu ấn theo cặp người chơi–mục tiêu, 4 stack phát nổ, hết hạn sau 5 giây không bổ sung. Aura và dạng cưỡi tăng tốc tích dấu ấn. Vụ nổ không tự kích hoạt ngọc hoặc thêm dấu ấn vô hạn.
- Q chém hình quạt theo con trỏ, kiểm tra vật cản, nhiều mục tiêu; xuyên giáp riêng sau xuyên giáp cố định, kết hợp ngọc Hắc Ám bằng phép nhân trên giáp còn lại. Dạng cưỡi tăng sát thương, phạm vi, xuyên giáp, thêm chảy máu và dấu ấn, đánh được quái bay.
- E hỗ trợ người chơi và lính: Công, tốc đánh, xác suất gây chảy máu từ đòn thường. Nhiều nguồn lấy mức mạnh nhất. Dạng cưỡi E tự bật nếu đã học, thêm sát thương khi đánh mục tiêu đang chảy máu; không tự gây chảy máu toàn vùng.
- R chuyển sprite, tăng tầm cận chiến đánh được quái bay; hao mana theo delta time, ngừng hồi tự nhiên. Đòn thường vẫn hồi năng lượng theo cơ chế hiện có. Hết mana/chết kết thúc, lúc đó mới tính hồi R. Chuyển màn trở lại dạng thường.
- Giữ hỗ trợ cả 6 ngọc: chỉ số, projectile đánh bay ở dạng bộ binh và on-hit sử dụng hệ thống hiện có. Logic combat do server xử lý; VFX độc lập.
- Cấu hình cân bằng: `public/fallen-config.js`, kỹ năng và cấp nâng trong `public/skills.js`. Đây là bộ thông số khởi điểm có thể cân chỉnh.

## Asset / VFX
- `public/assets/fallen/foot-v1.png` và `mounted-v1.png`: mỗi atlas 6×6, Idle/Move/Attack/Cast/Hurt/Death.
- `icons-v1.png`: nội tại, Q, E, R. Công cụ built-in image_gen; prompt đầy đủ trong `public/assets/fallen/PROMPTS.md`.
- VFX theo hướng: vệt kiếm tím/đen, gai xanh lục, nổ tha hóa, chảy máu, aura dưới chân và biến hình/kết thúc dạng. Vẽ bằng lớp graphics hiện có, có giới hạn số effect và dọn dẹp khi hết hạn/chuyển màn.
- Hồ sơ: `/fallen-gallery.html`, có chuyển động hai dạng, icon, mô tả, hiệu ứng.

## Map
- Ghép các mảng nền nhỏ có xen kẽ và chồng mép thành vùng sinh cảnh; bỏ các ảnh nền lãnh địa phóng lớn đè lên chúng.
- Thêm cụm cây rêu, dương xỉ, bụi và đá từ asset hiện có; đá vùng băng/đất chết có sắc thái riêng. Cây lớn/đá có va chạm trên cả server và client; chừa trại, lối đi, thành và nước.
- Sông, suối và cầu nằm trên lớp nền để không bị môi trường phủ mất.

## Các file chính
- Thêm: `fallen-actions.mjs`, `public/fallen-config.js`, `public/fallen-vfx.js`, `public/fallen-gallery.html`, `public/fallen-gallery.js`, `public/habitat-props.js`, thư mục asset `public/assets/fallen/`.
- Chỉnh: `simulation.mjs`, `abilities.mjs`, `gem-effects.mjs`, `passives.mjs`, `public/skills.js`, `public/content.js`, `public/passives.js`, `public/game.js`, `public/combat-window.js`, `public/effects.js`, `public/actor-animation.js`, `public/leader-auras.js`, `public/catalog-v4.json`, `public/skill-gallery.html`, `public/world-biomes.js`, `public/environment-art.js`, `public/landscape-art.js`, `public/terrain.js`.

## Trạng thái kiểm thử / giới hạn
- Chưa chạy tests, đo hiệu năng hoặc kiểm tra trình duyệt theo yêu cầu dừng kiểm tra trước đó. Không khẳng định đã xác nhận trực quan hoặc cân bằng gameplay.
- Chiến mã đánh được quái bay nhưng vẫn tuân thủ va chạm địa hình của người chơi, tương tự Thánh Kỵ Sĩ.
- Hai atlas có một góc nhìn, lật trái/phải theo nhân vật; cung chém và hitbox theo đầy đủ hướng con trỏ.
