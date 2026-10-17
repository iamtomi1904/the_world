# 0.10 — Sát thủ, Dạ Tiễn, tinh linh cây và màn hình load

## Sát thủ
- Tốc chạy cơ bản175→210, giữ nguyên Công/HP/Giáp/tầm đánh/cooldown cơ bản.
- E Ảnh Bộ: lướt200 theo hướng con trỏ, dừng trước vật cản, sau đó tàng hình3s và tốc chạy+30%. Đòn thường kế tiếp vẫn2x Công rồi lộ diện. CD12/mana30.
- R Ảnh Trảm: lướt330 trong0,32s, chém AOE dọc đường bán kính85 (rộng170), mỗi ground target nhận1 hit300% Công. Không cần chỉ định mục tiêu, không xuyên tường, không miễn damage. CD24/mana50.
- Đánh thường: atlas mới6 frame, giữ bản cũ để đối chiếu. VFX song đao, tàn ảnh/lướt và quét AOE mới; cả3 icon vẽ lại.

## Dark Elf — Dạ Tiễn
Class ID darkelf, hero dark-elf; dùng asset Idle/Walk/Hurt/Dead/Portrait được gửi và Attack vẽ mới6frame. HP140, Công36, Giáp2, speed165, range300, cooldown0,72; năng lượng110/hồi11.

- Nội tại Mắt Đêm: basic+1% damage mỗi12 khoảng cách, cap30%; tinh thông2 tạo tên phụ40% Công, không proc ngọc lần nữa.
- Q Tên Xuyên Đêm: projectile theo con trỏ, range360, speed800, 160% Công mỗi mục tiêu, slow30%/2s; xuyên nhiều mục tiêu nhưng mỗi mục tiêu1 lần, dừng ở vật cản. CD6/mana20.
- E Gọi Tinh Linh Cây: một pet/owner, tồn tại60s, gọi lại thay pet cũ. CD32/mana35, cấp2. Không dùng gấu.
- R Nguyệt Thực: vùng phía trước theo con trỏ, cảnh báo0,9s; impact280% Công/choáng0,8s; field3s gây35% Công mỗi0,5s và slow25%. CD30/mana55, cấp4. VFX cảnh báo, trăng giáng, sóng nguyệt vực mới.
- Tương tác đủ6 ngọc theo quy tắc class không nguyên tố. Skill rank tiếp tục dùng hệ nâng bậc chung. Không đổi skill/class cũ.

## Tinh linh cây
Sinh vật mới có sprite sheet30frame: idle6/walk6/attack6/hurt6/dead6. HP250, Giáp3, tốc135, Công=80% Công chủ khi gọi, range65/cooldown0,9. Đi theo chủ và tự giao chiến; không chiếm12 lính mua. Hết60s/owner rời phòng/chuyển map thì dọn pet. Không tự proc ngọc hoặc gọi xương từ kill của pet; XP/vàng vẫn về chủ.

- Nội tại Rễ Sống: hồi2% HP tối đa/s.
- Q tự dùng — Rễ Trói: CD8, radius125, damage110% Công pet, choáng0,8s ground.
- W tự dùng — Lá Xoáy: CD12, tầm240, tối đa3 mục tiêu, 80% Công pet; projectile lá thực, đánh được quái bay.
- E tự dùng — Sinh Lực: CD16, radius180, hồi16% HP tối đa cho đồng minh. Chỉ dùng khi có mục tiêu thiếu máu.
- Inventory hiển thị pet, lifetime, HP và cooldown3chiêu. Các thông số nằm trong public/shadow-config.js; hero/skill trong public/content.js và public/skills.js.

## Căn chỉnh load trận
Đã bỏ tọa độ canvas cố định480/290 và thanh load400px tại280/325. DOM overlay mới căn giữa theo battlefield, width tối đa420px, responsive khi thay đổi cửa sổ; màu xanh rêu/vàng đồng bộ game. Ẩn hotbar/T/touch/hint trong thời gian tải. Progress chỉ đến99% khi ảnh tải xong nhưng map chưa dựng xong; ẩn overlay sau frame render đầu tiên. Có thông báo lỗi/nút tải lại nếu asset lỗi.

Client trình duyệt gửi waitForAssets:true khi join, sau khi dựng scene và render đầu tiên mới gửi ready. Server giữ phase lobby, không chạy countdown trước khi tất cả client có assetsReady. Solo tự chuyển sang prepare khi ready; co-op chỉ cho start khi mọi người ready. Client/bot cũ không yêu cầu gate vẫn tương thích.

## Asset mới
public/assets/shadow/: assassin-attack.png (6frame, frame361x724, phần dư5px atlas bỏ qua), elf-attack.png (6frame362x724), forest-spirit.png (1374x1145,6x5 ô229px), 9 iconSVG cho Sát thủ/Dạ Tiễn/pet. Sprite Attack có metadata bodyHeight/origin riêng; loader/render/preview xử lý frameWidth/frameHeight riêng nên Idle/Walk vẫn dùng atlas64px gốc. Texture crop trong engine, không sửa hay rescale sprite nguồn.

## Kiểm tra
- npm test:98/98 PASS. Bao gồm98test hồi quy và mới: lướt E/stealth, R AOEmỗi target1hit/không đánh bay, tên xuyên12 mục tiêu trùng vị trí1lần, Q projectile thật, R delay+field damage, cây regen/3skill/cooldown/TTL60s/recall/map cleanup, owner gem không tạo vòng summon. Cả9class có Q/E/R hoạt động; assets mới kiểm tra kích thước, icon và geometry.
- node shadow-smoke.mjs: PASS — hai client Dark Elf thật, đánh bằng input kiếm XP/vàng, đạt cấp2, mua E, gọi hai tinh linh riêng được đồng bộ snapshot. Không sửa vàng/XP từ client hoặc thêm cheat vào production.
- node smoke.mjs: PASS — solo/co-op, asset mới/cũ, shop, duplicate request, hạn chế class ngọc, host/input/join/malformed.
- node loading-smoke.mjs: PASS — chờ6,5s khi chưa ready vẫn lobby/wave0; ready thì bắt đầu đầy đủ countdown.
- Trình duyệt: trang shadow-gallery hoạt ảnh3entity và dropdown5action không lỗi console; game load overlay cân giữa/ẩnHUD sau đó tắt overlay, ready được server ghi nhận, start được mở khóa, Dark Elf hiện đủ3skill.

## File
Mới: public/shadow-config.js, shadow-actions.mjs, public/shadow-vfx.js, public/shadow-gallery.html, public/shadow-gallery.js, public/battle-loading.js, public/battle-loading.css, shadow.test.mjs, loading.test.mjs, shadow-smoke.mjs, loading-smoke.mjs, các asset shadow và bản copy public/assets/v2/dark-elf/*.png.
Chỉnh: simulation.mjs, abilities.mjs, projectiles.mjs, gem-effects.mjs, server.mjs; public/content.js, skills.js, passives.js, game.js, actor-animation.js, combat-window.js, effects.js, gem-vfx.js, gem-ui.js, monster-preview.js, catalog-v4.json, home.html/home.js, defense.html/index.html, items-gallery.html, skill-gallery.html, effect-lab.html; các test kiểm tra roster/atlas/skill hiện có.

## Giới hạn
Đây là lượt cân bằng đầu tiên cho Dạ Tiễn/pet, chưa chơi mọi tổ hợp qua10map hoặc soak test nhiều giờ. Pet tự dùng skill, chưa có phím điều khiển riêng. E/R lướt không cho xuyên tường hoặc miễn damage. Atlas AI vẽ mới được kiểm tra và cấu hình anchor theo từng action, không dùng chung kích thước64px để tránh phóng to sai. Trang shadow-gallery là xưởng preview; cơ chế thật đã test trong simulation và hai client server.

## Điều khiển trận đấu
- Thông báo chuẩn bị/bắt đầu đợt quái hiển thị trong chiến trường; HUD vẫn giữ số đợt và số quái còn lại.
- Esc rời trận về sảnh theo cơ chế hiện tại.
- Giữ Ctrl và nhấp thành để mở cửa hàng, vẫn kiểm tra khoảng cách.
- Phím Backquote (`/~) đóng nhanh cả cửa hàng và cửa sổ T.
- Atlas đánh thường sát thủ mới: assassin-attack-v2.png, 1536×1024, lưới 3×2, frame 512×512. Giữ bản cũ làm nguồn dự phòng.
- Kiểm thử tự động sau cập nhật: 98/98 đạt.
## Bổ sung mỹ thuật kỹ năng
- Thay icon SVG đơn giản bằng atlas pixel art 9 ô: `public/assets/shadow/skill-icons-v2.png`.
- Atlas VFX nền trong suốt 6×6: `public/assets/shadow/skill-effects-v2.png`; 6 frame cho mỗi hiệu ứng Song Đao, Ảnh Bộ, Ảnh Trảm, tên bóng, gọi cây, nguyệt thực.
- Tích hợp qua shadow-art.js vào preload game, combat-window, effects và hai gallery. Sprite được hủy cùng hiệu ứng; không thay công thức sát thương.
- E Dark Elf: rune mặt đất, rễ mọc và cột sáng, lá tan; tinh linh thật tiếp tục tồn tại 60s theo server.
- Công cụ: built-in ImageGen. Prompt icon: medieval pixel skill atlas 3×3, assassin daggers/blink/spin, elf arrow/tree summon/eclipse, tree roots/leaves/heal. Prompt VFX: transparent 6×6 animated sprite atlas, six successive frames per effect with fixed anchors, emerald assassin and forest magic, violet lunar magic.
- Kiểm chứng: 98/98 test gameplay; gallery tải atlas và chạy các hiệu ứng không có lỗi console.
## Hiệu ứng riêng của tinh linh cây
- Asset mới `public/assets/shadow/spirit-effects-v1.png` (1774×887, 6 cột ×3 hàng, 18 frame, alpha).
- Rễ Trói: rune, rễ trồi lên và lồng rễ rồi tan. Lá Xoáy: vòng lá lúc phóng và va chạm. Sinh Lực: hoa nở, ánh xanh và dấu cộng hồi máu.
- Nối vào sự kiện roots/leaf projectile/leaf-hit/bloom hiện có của server. Hủy sprite khi hết hiệu ứng hoặc dọn scene; giữ nguyên sát thương, hồi máu, thời gian hồi.
- Gallery có nút xem từng chiêu, tự phát lại để quan sát. Kiểm tra cả bốn nút trên trình duyệt: không lỗi console. 5/5 test cơ chế shadow đạt, gồm ba kỹ năng tự động của cây.
- Asset tạo bằng built-in ImageGen. Prompt: transparent pixel VFX atlas 6×3, six animation frames each for woody root cage, spinning razor leaves, healing flower with green plus signs; fixed anchors, no backgrounds or labels.

## HUD trong suốt
Chỉ số mốc, bản đồ, đợt, HP thành, vàng, hạ gục và phòng hiển thị nổi trên canvas; bỏ nền và không chiếm chiều cao bố cục. Chữ có viền bóng để đọc rõ, không chặn chuột. Thông báo đợt được dịch xuống để tránh chồng chữ.
## Q Dark Elf, săn rừng giữa đợt và cân bằng co-op
- Q Tên Xuyên Đêm: hành lang sát thương rộng 90 (trước 26), projectile lớn dài có lõi sáng và luồng bóng tím; xuyên tất cả mục tiêu hợp lệ, mỗi mục tiêu một lần. Giữ hệ số 160%, tầm 360, tốc độ 800, chậm và hồi chiêu cũ. Khi có ngọc vẫn giữ hình mũi tên lớn.
- Tinh linh cây tăng kích thước hiển thị 56→84, cấu hình SHADOW.spirit.displaySize. Không đổi hitbox/chỉ số chiến đấu của cây.
- Goblin Sát thủ: tầm đánh thường 50→60.
- Boss: HP co-op = HP solo × (1 + 0.75 × (số người - 1)), chốt khi boss sinh ra; solo giữ nguyên. Giữ hệ số map/đợt/độ khó, quái thường vẫn +18%/người.
- Prepare cho phép đánh thường, kỹ năng, projectile, pet, quái rừng phản công và loot. Không sinh quái đợt hoặc reset timer do rừng; lobby/clear không bật combat.
- 101/101 kiểm thử đạt, gồm hành lang Q rộng, boss 1–4 người và săn rừng lúc đếm ngược. Server đã khởi động lại.
