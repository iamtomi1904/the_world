# Tiên Phong Bất Khuất và hiệu ứng Hắc Kỵ Sĩ

## Tiên Phong
- Giữ ID `warrior-3`, đổi tên hiển thị thành Chiến Tướng Bất Khuất, class riêng `vanguard`. Không thay bộ kỹ năng các Chiến Binh khác.
- Thân người mặc giáp thép/da, vải đỏ sẫm, trường giáo và khiên lớn. Hai atlas 6 cột × 7 hàng: Idle, Move, Attack, Q Charge, E Flurry, Hurt, Death. Có icon nội tại/Q/E/R.
- Chỉ số khởi điểm trong `public/vanguard-config.js`: 240 HP, 34 Công, 4 giáp, tốc chạy 180, tầm giáo 112, nhịp đánh 0,48s. Nội tại +8% tốc chạy, giảm 12% sát thương nhận, hút máu đòn thường 10% sát thương thực.
- Đánh thường dùng va chạm đường thẳng theo hướng con trỏ, không biến thành projectile vì tầm lớn hơn 100. Ngọc vẫn bắn projectile riêng vào quái bay; giáo thường/Q/E chỉ đánh mặt đất.
- Q lao theo thời gian, dừng trước vật cản, mỗi quái trúng một lần; giảm sát thương mỗi mục tiêu sau, có mức sàn. Cự Nhân mở rộng va chạm, tăng sát thương và chấn động cuối.
- E khóa mục tiêu phía trước rồi đâm từng nhịp thực; 6 nhịp/9 nhịp Cự Nhân, đòn cuối mạnh hơn. Tốc đánh điều chỉnh nhịp, có giới hạn tối thiểu. Hồi theo HP thực bị trừ, giới hạn 8%/12% HP tối đa mỗi lần dùng; ngọc tiếp tục dùng hệ thống on-hit chung.
- R tồn tại tối đa 90 giây; HP ×1,8, +35% Công, +6 giáp, giảm 22% sát thương, hút máu 18%, tầm giáo 175. Kháng chậm và đẩy từ boss 35%, không miễn khống chế. Giữ tỷ lệ HP lúc đổi dạng. Không tái kích hoạt; hồi R bắt đầu sau khi kết thúc. Hết màn/chết kết thúc trạng thái theo vòng đời trận hiện có.
- Hoạt động theo server authoritative và delta time. Action bị hủy khi chết/chuyển màn. Giữ nguyên collision cơ thể người chơi khi hóa lớn.
- VFX đâm thẳng, bụi xung phong, tia kim loại, đòn kết thúc, hút máu đỏ/đồng kèm dấu cộng xanh hiện có, lớn lên/thu nhỏ và bụi bước chân Cự Nhân.
- Hồ sơ mỹ thuật: `/vanguard-gallery.html`.

## Hắc Kỵ Sĩ
- Atlas mới `public/assets/fallen/effects-v2.png`: đòn thường, Q thường, Q cường hóa cánh xương, vòng E gai xương, nổ tha hóa/chảy máu, biến hình R.
- Nền trong suốt, mỗi hiệu ứng 6 frame; hướng Q theo góc server, R kết thúc phát ngược chuỗi; vòng E bám chân và dọn khi hết buff.
- Tích hợp cả gameplay và `/fallen-gallery.html`; không thay công thức sát thương Hắc Kỵ Sĩ trong lần cập nhật này.
- Các bản atlas có nền gradient đã loại khỏi preload; giữ file cũ để tham chiếu, bản v2 mới được dùng.

## Asset và file
- `public/assets/vanguard/foot-v1.png`, `giant-v1.png`, `icons-v1.png`, `PROMPTS.md`.
- `public/assets/fallen/effects-v2.png`, `EFFECT_PROMPT.md`.
- Asset raster được vẽ bằng built-in image_gen; prompt đầy đủ lưu cùng thư mục asset.
- Module mới: `vanguard-actions.mjs`, `public/vanguard-config.js`, `public/vanguard-vfx.js`, `public/vanguard-gallery.html`, `public/vanguard-gallery.js`.
- Chỉnh: `simulation.mjs`, `encounters.mjs`, `abilities.mjs`, `passives.mjs`, `public/content.js`, `public/skills.js`, `public/passives.js`, `public/catalog-v4.json`, `public/game.js`, `public/combat-window.js`, `public/skill-gallery.html`, `public/effects.js`, `public/fallen-vfx.js`, `public/fallen-gallery.js`, `public/shadow-art.js`.

## Kiểm thử và giới hạn
- Chưa chạy tests, kiểm tra trình duyệt hoặc đo FPS theo yêu cầu dừng kiểm tra trước đó. Chưa xác nhận cân bằng hay độ mượt thực tế trong trận.
- Sprite dùng một góc nhìn và lật trái/phải; hitbox và VFX theo đầy đủ hướng con trỏ.
- E chưa đẩy lùi quái ở đòn cuối (phần này tùy chọn trong mô tả).
- R dùng chuyển tỷ lệ sprite và VFX biến hình; không có hàng sprite R riêng trong atlas.
