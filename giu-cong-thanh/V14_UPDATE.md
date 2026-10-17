# Thánh Kỵ Sĩ, thủ lĩnh và lãnh địa

## Thánh Kỵ Sĩ
- Thay Ngân Kỵ (`knight-2`) bằng class `paladin`, giữ các Hộ vệ khác nguyên bộ kỹ năng. Aura dùng E theo Q/E/R; không dùng W vì W là di chuyển.
- Nội tại: +25% HP, +4 giáp, +30% sát thương undead. Thiên mã: +40% HP, +7 giáp, +60% sát thương undead. Không còn nội tại hồi máu mỗi bốn đòn của Ngân Kỵ.
- Q: 180% Công, tầm 120, tăng 5 giáp trong 4s, mana20, hồi7s. Thiên mã tăng sát thương ×1.55, tầm155, đánh quái bay.
- E: aura220 trong6s, +5 giáp và giảm15% sát thương. Thiên mã tự duy trì aura280, +8 giáp, giảm22%, hồi1.5% HP tối đa/giây. Nhiều nguồn aura lấy mức mạnh nhất, không nhân đôi hồi máu.
- R: mana30, tiêu12 mana/giây và ngừng hồi mana, tăng20% tốc chạy. Đòn thường cận chiến tầm110 đánh được quái bay. Hết mana hoặc chết kết thúc; R bắt đầu hồi30s sau khi kết thúc. Qua map kết thúc dạng. Các giá trị nằm trong public/paladin-config.js và public/skills.js.
- Bộ ảnh foot/mounted, mỗi ảnh36 frame lưới6×6; idle/walk/attack/cast/hurt/dead. Icon3 ô, VFX18 frame: thánh trảm, aura, cột sáng biến hình.
- Cơ chế đã tích hợp server, không chỉ là bản xem.

## Thủ lĩnh và bùa
- Bốn loại: Rồng Đại Ngàn, Nữ Hoàng Harpy, Orc Tù Trưởng, Kỵ Sĩ Xương. Mỗi loại36 frame hành động, 3 kỹ năng riêng; dùng2 kỹ năng đầu ở mốc1–3 và đủ3 từ mốc4.
- Số lượng: mốc1–3=1,4–6=2,7–9=3,10=4. Luân phiên loại theo map. Boss toàn game hiển thị lớn gấp1.5 lần trước, không đổi hitbox vì hình.
- Vàng thủ lĩnh chia đều toàn đội, phần dư chia theo thứ tự thành viên; XP giữ cơ chế cũ. Rơi thêm di vật rừng theo hệ thống hiện tại.
- Bùa120s cho cả đội, giữ thời gian còn lại qua map và khi chết. Khác loại cộng hưởng; trùng loại làm mới thời gian. Aura24 frame với4 loại màu/hình riêng, vòng lồng nhau dưới chân.
- Rồng: công+12%, hồi0.5% HP/giây. Harpy: tốc chạy+15%, tốc đánh+10%. Orc: công+18%, giáp+4. Xương: hút máu đòn thường8%, giáp+3. Cấu hình public/world-biomes.js.

## Map và môi trường
- Map1–3:3840×2560;4–6:5760×3840;7–10:7680×5120, tức2/3/4 lần mỗi chiều.
- Lãnh địa riêng có đường vào, vòng biên, cột mốc và nhãn. Thêm cảnh vật, camera/minimap/navigation dùng kích thước từng map. Texture nền giới hạn3840px ngang để giảm bộ nhớ; sprite nhân vật giữ độ phân giải.
- Nước sâu chặn đi bộ; nước cạn chậm10%, cầu không bị chậm.
- Băng chậm35% chạy,25% tốc đánh. Dung nham/lửa mất3%/2% HP tối đa mỗi giây; quái bay không chịu hiệu ứng dưới đất.
- Gió tăng20% chạy và25% sát thương quái bay. Rừng rậm tăng25% sát thương quái rừng. Đất chết giảm25% giáp.
- Server quyết định hiệu ứng, DoT tick1s; hình ảnh/particle độc lập. Phần trăm có thể chỉnh trong BIOMES.

## File chính
Mới: forest-leaders.mjs, public/forest-leaders.js, public/world-biomes.js, public/leader-auras.js, paladin-actions.mjs, public/paladin-config.js, public/holy-vfx.js, các gallery forest-leaders, world-atlas, paladin-gallery; forest-leaders.test.mjs, world-biomes.test.mjs, paladin.test.mjs.
Chỉnh: simulation.mjs, encounters.mjs, abilities.mjs, gem-effects.mjs, passives.mjs, navigation.mjs, public/content.js, skills.js, passives.js, game.js, terrain.js, effects.js, shadow-art.js, boss-skills.js, boss-casting.js, combat-window.js, gem-ui.js, catalog-v4.json, các trang giới thiệu và kiểm thử liên quan.

## Asset
public/assets/forest-leaders/: dragon.png, harpy.png, orc.png, undead.png, effects.png, auras-v2.png (giữ bản đầu auras.png).
public/assets/paladin/: foot.png, mounted.png, icons.png, effects.png.
Tạo bằng built-in ImageGen. Prompt bộ nhân vật: atlas pixel medieval6×6, sáu action rows, giữ hướng/phần cơ thể trong cell, alpha. Prompt VFX:6 frame mỗi hiệu ứng, cảnh báo/hit độc lập, alpha; aura4×6 và paladin3×6. Prompt chi tiết đã dùng trong lời gọi imagegen của cuộc trò chuyện.

## Kiểm tra và giới hạn
- Kiểm thử cơ chế: đủ12 kỹ năng thủ lĩnh, số lượng/vị trí10map, chia vàng/bùa cả đội, môi trường và DoT, nội tại/Q/E/R paladin, mana/R cooldown, đánh quái bay và aura nhiều người.
- Đã xem gallery hai dạng và chạy5 nút VFX trên trình duyệt, không lỗi console.
- Thiên mã hiện bay lơ lửng về ngoại hình và đánh được quái bay; vẫn tuân va chạm đường đi của hero, không xuyên tường/thành.
- Lãnh địa/môi trường hiện dựng bằng bố cục sinh theo dữ liệu; chưa có địa hình vẽ tay riêng cho từng khu. Map lớn làm thời gian di chuyển dài hơn.
