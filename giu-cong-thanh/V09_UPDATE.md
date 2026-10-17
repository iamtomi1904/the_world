# Bàn giao 0.9 — Ngọc, Inventory, Castle Shop, Quỷ Ảnh

## Chức năng trong gameplay
- T mở Inventory/nhân vật mặc định, 6 ô dự phòng; mỗi nhân vật sở hữu tối đa 1 ngọc. Mua tại thành tự trang bị, có thể tháo/trang bị trong túi khi sống. Giữ chỉ số/nội tại/di vật, tinh thông, tăng Công/HP và tab kỹ năng. Không còn mua lính/sửa thành trong T.
- Nhấp vùng thành mở Castle Shop. Cần còn sống, phase lobby/prepare/battle/clear, cách điểm cổng (base.x,base.y+100) tối đa 240 px. Kiểm tra server và UI. Lính và sửa thành giữ giá/cơ chế cũ; ngọc đồng giá 300, bán lại 210. Request ID chống xử lý lại giao dịch.
- Ngọc giữ khi chết/hồi sinh/qua map, kết thúc cùng chiến dịch, ván mới rỗng. Không ghi ngọc vào XP hoặc SQLite lâu dài. Bán Gió xóa bonus của ngọc đó; tháo chỉ tắt bonus, không xóa quyền sở hữu.
- Pyromancer chỉ Hỏa, Stormcaller chỉ Sấm, Tidecaller chỉ Băng. Các class không nguyên tố gồm Sát thủ dùng cả sáu. Server chặn mua sai và không cho đổi hero lúc còn sở hữu ngọc.
- Server quản lý effect theo target với source, lifetime, stack, clock. Độc và Hắc Ám chung toàn đội, nguồn đóng góp mới nhất nhận attribution DoT. Không có timer riêng mỗi hit. Hết hạn/death/map/endgame dọn dữ liệu và VFX tương ứng.
- Cận chiến trang bị ngọc có projectile chỉ va chạm quái bay, tầm 230; không tăng range gốc hoặc tầm đánh ground. Ranged caster đổi hình/màu projectile, không đổi hitbox.
- Trang /items-gallery.html có 6 ngọc + 5 di vật, tìm kiếm, lọc loại/class, giá, chỉ số và quy tắc. Đọc chung catalog cấu hình với gameplay. Có link từ trang chủ và Inventory/Shop.

## Thông số có thể chỉnh
Nguồn chính: public/gems.js (GEM_RULES và GEMS), không sửa rải rác trong combat.

| Ngọc | Công | Chỉ số bổ sung |
|---|---:|---|
| Sấm | +6 | +12% tốc đánh |
| Băng | +7 | +4 Giáp |
| Hỏa | +15 | Bỏng |
| Độc | +6 | +65 HP tối đa |
| Hắc Ám | +8 | Hút máu 10% |
| Gió | +5 | +14% tốc đánh cơ bản |

- Sấm: 25% choáng/35% Lôi Sư, 0,5s; lan 20%/50% damage đòn trúng, bán kính150. Stack đòn thường1..5 cho 2/3/4/5/6 mục tiêu phụ, mất sau3s không hit. Giới hạn6 ưu tiên hơn phép cộng 2+5=7 trong mô tả ban đầu. Lan không proc lan tiếp.
- Băng: chậm chạy và đòn thường20%/30% Du Pháp, 3s. Freeze stack chung mỗi target, tối đa3, hết hạn3s không bổ sung; thường10/20/30%, Du Pháp20/40/60%; thành công reset stack, khóa1s/3s. Basic tích freeze; skill trực tiếp và zone áp dụng slow.
- Hỏa: basic/skill trực tiếp có25% burn, không proc từ DoT/secondary/zone. Mỗi1s tick3%/6% HP tối đa, đủ5 tick nếu không refresh; refresh thời gian, không cộng nhiều DoT Hỏa. Boss cap1,5% HP tối đa/giây.
- Độc: basic/skill trực tiếp thêm1 stack, tối đa8 chung; 1% HP tối đa/stack/giây, boss cap2,5%/giây. Không thêm từ tick skill vùng. TTL5s được refresh. Quái chịu độc chết tạo pool5s, collision bán kính55, mỗi pool áp dụng tối đa1 stack/quái ground, pool khác được cộng tiếp; bay không chạm ground pool.
- Hắc Ám: xuyên20% phần giáp còn lại sau debuff boss; mỗi hit basic/skill trực tiếp thêm stack chung2%, tối đa10=20%/5s. Tự hạ quái gọi xương, tối đa10 đang sống/owner, thay con cũ nhất; xương30s, Công/tầm/tốc/cooldown như Bộ binh, HP55%, giáp50%. Kill của lính hoặc xương không gọi tiếp.
- Gió: basic hit+4% haste/stack, tối đa10/5s; kill trực tiếp+0,005 haste, không cap. Qua map nhân phần kill bonus0,30, xóa stack tạm; di vật giữ nguyên.
- Boss nhận giáp2+(stage-1), nhân1,2 Normal hoặc1,55 Insane; quái thường giữ giáp0. Máu/sát thương/wave scaling cũ tiếp tục tăng theo map, wave và độ khó. Công thức giáp mới là trừ phẳng, floor0; dark áp dụng giảm chung trước xuyên cá nhân. DoT phần trăm bỏ qua giáp nhưng chịu cap riêng.
- Attack warrior windup: public/actor-animation.js ATTACK_TIMING.berserker.windupFraction=0,2; cooldown và damage gốc giữ nguyên.
- Weapon sockets theo class/action/frame trong public/gem-vfx.js; chỉnh tại đây nếu thay atlas/anchor sau này.

## Quỷ Ảnh / goblin-assassin
Asset nguồn người dùng: C:/Users/Admin/Downloads/goblin_assassin/goblin_assassin/assets/goblin-assassin. Đã xem Attack và đối chiếu catalog: frame64, idle6/walk8/attack5/hurt3/dead6, đủ dùng và hợp pixel art; giữ sprite, copy vào project với anchor .4844/.9375, bodyHeight48, render cùng chuẩn hero57. Không tích hợp Dark Elf/Shadow Bear vì ngoài yêu cầu.

Class assassin mới, không đổi ID/class cũ. HP170, Công32, Giáp3, speed175, range50, cooldown0,5s. Nội tại Đâm Lưng thêm50% Công khi đứng phía sau dựa hướng trái/phải hiện tại của target. Tinh thông2: mỗi đòn thứ3 bleed20% Công/giây trong3s.

- Q Song Đao: hai hit cách0,12s, mỗi hit90% Công theo hướng con trỏ, range90, mana15/CD5. Damage từng hit thực, kiểm tra đường không xuyên vật cản.
- E Ẩn Mình: buff3s/tốc chạy25%, AI không chọn mục tiêu; đòn thường kế2x Công rồi lộ. Không miễn AoE hoặc projectile đã bay. Mana30/CD14, cấp2.
- R Huyết Vũ: tối đa5 ground target trong260, mỗi target3 hit70% Công, interval0,09s. Lướt tối đa90 mỗi hit, tầm gây damage120, có collision và kiểm tra đường. Mana50/CD26, cấp4. Không thêm miễn nhiễm sát thương để giữ cân bằng thủ thành.
- Các kỹ năng mới dùng quy tắc nâng bậc chung sẵn có (+30% mult/bậc và giảm CD), không thay công thức các class cũ. Hỗ trợ đủ6 ngọc, kể cả projectile chống bay cho basic.

## Asset và VFX
- Mới: assets/gems/thunder.svg, ice.svg, fire.svg, poison.svg, dark.svg, wind.svg — 6 icon.
- Mới: assets/gems/assassin-double.svg, assassin-veil.svg, assassin-flurry.svg — 3 skill icon.
- Mới: assets/gems/poison-pool.png — AI imagegen, alpha, 2172x724, bốn frame543x724; loop dùng frame index. Hitbox server55 độc lập footprint artwork.
- Copy6 PNG Quỷ Ảnh (5 action + portrait) và đăng ký catalog.
- Vẽ bằng graphics trong engine: 6 projectile riêng (sét, băng, lửa, độc, tối, gió), weapon orbit/glow, target status/stack markers, hit pulses; Quỷ Ảnh song đao/vệt lướt/khói ẩn.
- Lính xương dùng lại Skeleton đầy đủ5 action, tint xanh đồng minh và spawn pulse Hắc Ám; không phải một sprite sheet mới.
- VFX live giới hạn180 records, hết hạn destroy; poison sprites reuse theo pool ID và destroy khi hết pool. Cache UI ngọc tránh dựng lại icon/chi tiết khi state không đổi.

## Chiến Binh: sửa gì và bằng chứng
Lỗi được tái hiện: cờ anim dùng chung khiến E không tăng attackCount cũng bị hiểu thành Attack; normal Attack repeat=-1 nhưng empowered repeat=0; Walk suy ra từ sai số nội suy nên kéo dài sau dừng.

Đã tách trigger attack bằng attackCount, không dùng E làm cạnh bắt đầu Attack; normal attack one-shot, không play lại sau completion; movement lấy state server; giữ attack đủ frame, timeScale theo cooldown; warrior melee chờ windup0,2 cooldown trước resolve hit. Test xác nhận lúc phát đòn chưa trừ HP, sau windup trừ đúng36 và cooldown vẫn0,58. Không tăng FPS animation để che lỗi.

## Kiểm tra
- npm test: **88/88 pass**. Bao phủ các class/skill, asset header và animation cũ, từng gem, hai nguồn chung boss stack, DoT5 tick, pool one-touch/expiry, cap xương30s, air-only collision, map retention, stat reset, lifesteal thật, warrior windup và không phantom Attack; kiểm tra finite VFX trên13 hero ×6gem ×5 action và giải phóng pool sprite.
- node smoke.mjs: PASS. Tải asset mới/cũ; solo auto-start; co-op dùng chung độ khó; troop purchase; duplicate request ID không trừ tiền lần2; forged gem sai class bị server từ chối; quyền host/input/join/malformed giữ đúng.
- Trình duyệt: chọn Quỷ Ảnh, tạo phòng, T mở6 slot không mua lính; nhấp thành mở shop; mua Bộ binh120→60 và1 lính; giữ S đi ra xa thì shop disabled/lý do khoảng cách. Profile filter Hỏa+Ngọc trả đúng1 vật phẩm. Fresh game tab không có console error sau sửa lỗi khởi tạo tooltip.
- Simulation benchmark scripts/benchmark-gems.mjs: 4hero/100enemy/300ticks. Lượt cuối không gem mean0,857ms/p95 1,483ms; có gem mean1,035ms/p95 2,225ms. So sánh cùng bản simulation, không phải toàn bộ server/network.
- Browser ?perf=1: lobby60FPS/render khoảng1,78–2,69ms, heap27–29MB; chiến đấu35entity/87VFX:60FPS/render4,17ms/heap31MB. Một lượt trên máy hiện tại, không phải stress test dài hạn hoặc cam kết thiết bị yếu.

## File tạo/chỉnh sửa
Mới: public/gems.js, gem-effects.mjs, public/gem-ui.js, public/gem-ui.css, public/gem-vfx.js, public/items-gallery.html, public/items-gallery.js, public/items-gallery.css, assassin-actions.mjs, gems.test.mjs, assassin.test.mjs, gem-vfx.test.mjs, scripts/benchmark-gems.mjs, V09_UPDATE.md và asset liệt kê trên.

Chỉnh: simulation.mjs, projectiles.mjs, abilities.mjs, passives.mjs, encounters.mjs, server.mjs; public/content.js, skills.js, passives.js, game.js, actor-animation.js, empowered.js, effects.js, combat-window.js, defense.html, index.html, home.html, home.js, skill-gallery.html, effect-lab.html, catalog-v4.json; abilities.test.mjs, passives.test.mjs, smoke.mjs.

## Giới hạn thực tế
- Các hệ số là lượt cân bằng đầu tiên được người dùng ủy quyền, chưa chơi trọn10map với mọi tổ hợp13hero ×6gem hoặc soak test nhiều giờ.
- Chưa có phép đo FPS trình duyệt của bản cũ trước sửa, vì vậy không tuyên bố tăng bao nhiêu FPS. Có tái hiện logic trước/sau, đo simulation và FPS bản hiện tại.
- Weapon socket hiện cấu hình theo family/class/action/frame; hero/atlas mới cần tinh chỉnh socket tương ứng. Chưa vẽ lại toàn bộ sprite sheet từng hero vì ưu tiên overlay và tái dùng asset.
- Skill damage cũ và các secondary nội tại giữ đường xử lý riêng; proc ngọc chỉ chạy ở hit chính đã chỉ định, không tự proc từ DoT hoặc secondary.
- Inventory chưa có vật phẩm ngoài ngọc và di vật;5 ô trống là chỗ dành cho mở rộng theo yêu cầu, không có vật phẩm placeholder bán trong shop.
