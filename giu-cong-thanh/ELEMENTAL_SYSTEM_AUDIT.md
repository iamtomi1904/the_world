# Phân tích trước triển khai — Inventory, Castle Shop và ngọc

> Báo cáo khảo sát ban đầu được giữ để đối chiếu. Bản triển khai và kết quả kiểm tra hiện tại nằm trong [V09_UPDATE.md](./V09_UPDATE.md).

Trạng thái: đã khảo sát luồng source liên quan và chạy kiểm thử nền. Chưa sửa gameplay; chờ xác nhận thông số thiết kế còn thiếu. Đây không phải báo cáo hoàn thành tính năng.

## 1. Kiến trúc hiện tại

- `server.mjs`: HTTP tĩnh, WebSocket `ws`, phòng lưu trong Map, simulation tick cố định 0,05 giây và broadcast snapshot mỗi 50 ms. Server quyết định mua, combat, vàng, trạng thái, chuyển map. Client gửi input, không gửi damage. SQLite lưu XP/hồ sơ khách và lịch sử trận; chưa lưu ngọc. Giới hạn mua hiện tại 200 ms/kết nối không phải transaction ID chống gửi lại yêu cầu.
- `simulation.mjs`: tạo phòng, người chơi, chỉ số, mua, movement/collision, đánh thường, phần thưởng, lính, vòng quái, hồi sinh, snapshot. Vàng, nâng chỉ số, lính và di vật thuộc chiến dịch; XP lưu giữa chiến dịch. Ngọc chưa tồn tại; `inventory={}` được khởi tạo nhưng chưa có equip slot.
- `public/game.js`: Phaser 3.90, scene render, interpolation, input, DOM UI, snapshot client, asset preload. WebSocket client input gửi mỗi 50 ms. VFX tách khỏi simulation nhưng một số combat hook hiện rải nhiều nơi.
- `public/content.js`, `public/skills.js`, `public/passives.js`: 12 hero, 7 class thực, 21 skill, nội tại từng hero; không tạo class mới. `difficulty.js` điều khiển Easy/Normal/Insane cho 10 map.
- `abilities.mjs`, `passives.mjs`: skill/status và hook nội tại, healing. `projectiles.mjs`: projectile nhắm mục tiêu và ballistic theo con trỏ. `navigation.mjs`: grid/path cache và di chuyển tránh vật cản. `encounters.mjs`: rừng, boss cast, vùng nguy hiểm. `public/boss-skills.js`, `bosses.js`, `enemy-families.js`: boss theo map, 1–5 skill và các họ quái.
- `public/combat-window.js`, `.css`: cửa sổ T mặc định đóng; tab nhân vật/di vật, kỹ năng và quân đội. Tinh thông, tăng Công, tăng HP vừa được đưa về nhân vật. Tooltip đang có. `loot.mjs`, `public/items.js`, `loot-ui.js`: nhặt di vật cộng chỉ số ngay, giữ qua map; không phải kho vật phẩm sử dụng được.
- `public/fortress.js`, `terrain.js`, `war-map.js`: dựng thành, scenery, lane, map; thành chưa có tương tác shop. `canStand()` chỉ xử lý va chạm footprint/props và biên bản đồ, không phải điều kiện mua.

## 2. Luồng combat và các ràng buộc cần bảo toàn

- Đánh thường diễn ra khi input attack và `p.cd<=0`, đặt cooldown theo `stats(p)`. Cận chiến kiểm tra cung theo hướng con trỏ; tầm xa dùng projectile có bước kiểm tra collision. Damage cận chiến hiện xảy ra ngay trong server tick phát đòn; chưa có attack windup/hit-frame.
- Range trên 100 phân biệt nhiều nhánh cận/tầm xa hiện tại. `canHitAir()` cho cận chiến đánh mục tiêu đang hạ độ cao <=14 và cho tầm xa đánh quái bay. Không được thay đổi range gốc khi thêm projectile chống bay; cần bộ lọc chỉ trúng mục tiêu bay cho nhánh mới.
- Skill damage qua `ctx.damage`, đòn thường qua `strikeDamage`; splash và một số nội tại trừ HP trực tiếp. Cần một cổng xử lý gem hit có nguồn rõ: basic / skill / skill tick / secondary / DoT / summon. Tránh hook đúp và recursion lan/DoT/triệu hồi.
- `stats(p)` hiện cộng level/nâng cấp/di vật rồi nhân mastery, buff Công; haste nằm trong mẫu số cooldown. Bonus ngọc phải đi qua đây, không thay animation để tăng tốc đánh. Cần giữ công thức cũ khi không trang bị ngọc.
- Quái và boss hiện không có công thức nhận damage trừ giáp. Giáp đang chủ yếu dùng khi enemy đánh hero/lính. Không tự thêm giáp mặc định rồi làm thay đổi damage toàn bộ game. Cần chốt config giáp/đường xử lý mới và thứ tự giảm giáp chung với xuyên giáp cá nhân.
- Status cũ dùng `stun`, `slow`, `slowTime` và `statuses` burn/poison/bleed. Burn/poison cũ dựa trên Công, không phải phần trăm HP. Bản Băng hiện chưa giảm tốc đánh enemy; chưa có freeze stack. Không thay poison/burn kỹ năng cũ thành công thức ngọc.
- `tickStatuses()` có clock tích lũy trên server, không setInterval mỗi hit. Nhưng chưa có metadata nguồn/type/stack đầy đủ. Cần effect registry chung và adapter giữ status cũ; target shared key cho poison/dark, không key riêng theo player. Cần quy tắc attribution damage/kill khi nhiều nguồn đóng góp.
- Boss có shield, cast, frenzy, triệu hồi; freeze/stun phải khóa movement/attack/cast theo quy tắc đã chốt và không để cast bỏ qua khóa.
- `kill()` có cờ dead chống thưởng hai lần, chuyển thưởng lính về owner. Phải gắn dark/wind kill hook chính xác, ngăn lính xương tạo vòng triệu hồi; DoT và vệt độc không xử lý xác chết lần nữa.
- Lính dùng TROOPS lookup trong nhiều nhánh (AI, armor, nhận damage), nên lính xương cần định nghĩa đồng minh hợp lệ có tham chiếu Bộ binh; chỉ đổi sprite chưa đủ. Tái dùng skeleton sẵn có idle/walk/attack/hurt/dead. Spawn overlay bổ sung; lifespan cần cleanup trên server.
- Chuyển map xóa projectile, zone, loot, hostile zone/enemy; hồi HP và reset cooldown/buff. Phải đưa gem cleanup/carry ở cùng lifecycle, không làm mất di vật cũ. Disconnect hiện xóa lính của owner và phòng khi trống.

## 3. Shop và Inventory dự kiến tích hợp

- T tiếp tục mở cửa sổ hiện có, đặt Inventory làm nội dung mặc định; giữ chỉ số/nội tại/di vật, tăng Công/HP/tinh thông và kỹ năng có sẵn. Gỡ toàn bộ truy cập mua lính/sửa thành khỏi T.
- Nhấp thành mở Castle Shop riêng: lính, sửa thành, sáu ngọc. Chặn click thành phát đòn thường; đóng shop/blur không giữ trạng thái chuột tấn công. ESC đóng cửa sổ đang mở; T không chiếm phím khi nhập text.
- Hiện tại mua lính/sửa thành được phép từ mọi vị trí trong lobby/prepare/battle/clear; không có bán kính/LOS/alive check. Cần xác nhận trước khi thêm hạn chế khoảng cách mới. Server phải thực thi cùng quy tắc UI.
- Tái dùng `buy()`/giá lính/giới hạn 12 lính/sửa 300 HP giá 75 vàng. Lưu quyền sở hữu riêng với equipped; không tự động áp dụng toàn bộ ngọc chỉ vì có trong túi.
- Thêm mã yêu cầu mua và phản hồi để chống double charge do resend; UI pending chờ server. Không trừ tiền lạc quan rồi trừ thêm trong snapshot.
- Class map thực: `tidecaller` = Du Pháp, hiện tên class là Thủy pháp sư; `pyromancer` = Hỏa Sư; `stormcaller` = Lôi Sư. Dùng ID này, giữ nguyên tên. Giới hạn class trong server buy và equip, cả khi đổi hero ở lobby. Cần chốt class không nguyên tố dùng loại nào.

## 4. VFX, asset và animation

- `effects.js` dùng graphics/sprite/tween có lifetime; `unitVFX()` vẽ overlay mỗi frame trên graphics chung. `clearVFX()`/`drawMap()` dọn VFX theo map. Đây là nền để thêm orbital gem/stack badges/pool, không cần tạo particle system cho từng hit.
- Overlay vũ khí hiện chỉ lấy vị trí tương đối `face*16, y-27`; chưa có weapon socket theo từng animation/frame. Cần metadata socket theo hero/action/frame, dùng sprite render position/flip/scale; death ẩn layer. Không coi vòng quanh thân là bám vũ khí.
- `catalog-v4.json` quản lý actors/spell art/effects; có skeleton đủ 5 action. Warrior E đã có atlas cường hóa trong `empowered.js`. Cần xử lý socket/scale riêng khi đổi normal/empowered để overlay không nhảy.
- Tạo icon sáu gem và projectile/hit overlay theo nguyên tố. Vệt độc dùng visual radius riêng collision radius, animation loop có lifespan 5 giây và set entity đã chạm cho từng vệt trên server. Không kéo asset lớn để tăng hitbox.
- Snapshot chứa effect state; VFX không quay lại điều khiển damage. Cần budget VFX/event và cache texture/socket để tránh tăng allocation mỗi frame.

## 5. Điều tra Chiến Binh trước khi sửa

Các bằng chứng từ source và tái hiện helper, chưa phải đo FPS trình duyệt:

1. `cast()` đặt `p.anim=.5` cho cả skill cường hóa E; `actorAction()` diễn giải mọi cạnh lên `anim>0` thành Attack dù `attackCount` không đổi. Tái hiện: Idle, giữ attackCount=0, đặt anim=.5 => trả Attack. Đây là lỗi phân loại cast/attack xác nhận được.
2. `game.js` đăng ký tất cả action trừ dead với `repeat:-1`, bao gồm attack. Normal attack lặp trong khi empowered attack dùng repeat=0; hai bộ animation không thống nhất.
3. Warrior-1 attack 4 frame, mặc định 12 fps; helper giữ khoảng 333,3 ms so với cooldown 580 ms, rồi quay idle/walk khoảng 246,7 ms. Đây là khoảng nghỉ do timing hiện có, không đủ chứng minh FPS lag. Không giảm cooldown để che khoảng nghỉ.
4. Walk suy ra từ khoảng cách sprite đang nội suy tới snapshot (>1 px), không phải velocity/state server, nên có thể tiếp tục Walk sau khi đã dừng. Face do move và attack cùng cập nhật, cần kiểm tra hướng khi vừa chạy vừa đánh.
5. UI cập nhật và dựng lại nhiều text/DOM/SVG mỗi 50 ms dù cửa sổ đóng; client render còn tra catalog/filter buff/graphics mỗi frame. Đây là điểm cần profile, chưa khẳng định nguyên nhân chính.
6. Đòn cận chiến trừ máu ở tick bắt đầu, animation client bắt đầu khi nhận snapshot: chưa đồng bộ hit-frame. Dời damage sang hit-frame có thể đổi combat timing, phải triển khai rõ và kiểm thử, không tự sửa công thức hay tốc đánh.

Hướng sửa sau các giai đoạn tính năng: tách sequence basic/cast, attack one-shot, giữ attack sequence qua chuyển action/texture, khóa hướng theo action nếu cần, dùng moving state/velocity đúng, giữ cooldown server; đo trình duyệt trước/sau cùng kịch bản.

## 6. Kiểm thử nền đã chạy

- `npm test`: 69/69 pass, không fail, khoảng 3,44 giây theo test runner.
- Microbenchmark simulation: Insane, 4 warrior, 100 enemy, 300 tick x0,05 giây, giữ gate/HP để chạy ổn định: trung bình 0,747 ms/tick, p95 1,206 ms, max 18,610 ms. Số liệu cục bộ một lượt, không bao gồm WebSocket JSON/network/client render, không thay thế test FPS/memory hoặc cam kết tải server.
- Chưa có kiểm thử ngọc vì chưa triển khai. Chưa có FPS/memory trước/sau sửa; không báo sửa lag thành công.

## 7. Thông số cần người dùng xác nhận

1. Giá từng ngọc, số sở hữu/trang bị, mua trùng cộng dồn hay không, tháo/thay và khi nào được thao tác.
2. Công/HP/Giáp/haste/lifesteal từng ngọc, số cố định hay %, thứ tự cộng/nhân với hệ thống chỉ số cũ.
3. Sấm: bán kính, số mục tiêu phụ, áp dụng basic/skill/tick nào; damage lan không proc tiếp.
4. Băng: thời gian chậm và refresh, lifetime/phạm vi chia sẻ freeze stack; công thức Du Pháp từ base20% lên cap60%. Các kỹ năng băng cũ không quy định công thức này.
5. Hỏa: xác suất burn; %HP tối đa hay hiện tại; refresh/overwrite giữa nhiều nguồn và hai mức 3%/6%; giới hạn DoT boss.
6. Độc: basic/skill/tick nào thêm stack, HP cơ sở, cap boss và attribution nguồn chung; vệt độc có thêm độc lên quái bay không; bán kính vệt.
7. Hắc Ám: lifesteal, giới hạn lính xương, tỷ lệ HP/Giáp so với Bộ binh, giáp quái/boss và thứ tự tính phòng thủ. Stack dark chung tối đa10/20%, xuyên giáp cá nhân20% là hai bước riêng.
8. Gió: bonus cơ bản; đã có quy tắc tạm 4% x10/5s và kill +0,005 giữ30% qua map, nhưng cần quy tắc giữ/mất khi chết/tháo gem. Không thêm cap vô cớ.
9. Tầm projectile cận chiến chống bay, tốc độ/va chạm projectile trong config, class không nguyên tố được dùng loại nào.
10. Hiệu ứng kích hoạt từ basic/skill/tick/secondary; tương tác boss/neutral. Quyền thưởng cho DoT nhiều nguồn và kill của summon.
11. Vị trí mua tại thành: mọi vị trí như cũ hay bán kính mới; có cần còn sống và có LOS không.
12. Ngọc và từng nhóm buff khi chết/hồi sinh/qua map/hết chiến dịch/disconnect. Lưu lâu dài cần schema mới, không tự lưu ngoài phạm vi đã duyệt.

Thông số chưa chốt phải để pending trong thiết kế, không gán con số tự chọn hoặc bật placeholder trong gameplay. Tiếp tục giai đoạn 2–5 sau xác nhận, theo thứ tự yêu cầu. Mỗi tính năng cần test server thực và UI/multiplayer, không chỉ asset hoặc tooltip.
