# COMBAT-03 — Hồ sơ đánh thường theo vũ khí

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0. Hoàn thiện profile nền, chưa 19 bộ kỹ năng/asset/cân bằng thực. [Nghiên cứu](92_THAM_KHAO_LEVEL_VA_COMBAT_MMORPG.md). U là đơn vị world, không pixel.

## 1. Hợp đồng chung

Đánh trái theo hướng con trỏ, không cần khóa mục tiêu. Giữ trái lặp khi đủ quyền. Vũ khí phải đúng race/nghề/nhánh/slot theo hồ sơ28; sách phép không tự bắn tên và ngoại trang không đổi profile. Đánh thường là action riêng, không chiếm hotbar13. Đánh trống vẫn phát động tác, giữ cadence và không proc on-hit.

Hit vật lý/phép đi nguyên pipeline STAT-06, crit/armor/pen/lifesteal chỉ áp theo flags. Không thêm RNG accuracy. Đòn cung/dao dùng AGI, vũ khí STR dùng STR, pháp khí INT như STAT-01/02. Shield offhand không tự cấp đòn đánh thứ hai hoặc quyền dùng skill khi chưa học.

## 2. Bảng profile cân thử

T0 là cycle nền không buff; k là tổng hệ số damage một cycle. Chọn **k=T0/1s** để raw DPS đòn thường cùng attackPower có mốc tham chiếu1×/s trước multi-target/defense. Đây là fixture authoring mới, không thay attackPower hoặc coi các vũ khí đã cân bằng. Không cộng thêm k lần thứ hai sau profile. Damage skill riêng không lấy k này trừ khi định nghĩa.

| Họ | School / shape | T0 / k | Tầm / độ rộng hoặc góc | Max đích / phân damage | Prepare / Active / Recovery |
|---|---|---|---|---|---|
| Kiếm một tay | Physical / quạt |1,00s /1,00|1,45U /90°|3; đích phụ50%|30/15/55%|
| Trọng kiếm | Physical / quạt |1,35s /1,35|1,75U /110°|3; phụ50%|40/20/40%|
| Giáo hai tay | Physical / capsule đâm |1,15s /1,15|2,10U /bán kính0,22U|2; phụ50%|35/15/50%|
| Rìu hai tay | Physical / quạt |1,25s /1,25|1,55U /110°|3; phụ50%|40/20/40%|
| Chùy + khiên | Physical / quạt |1,10s /1,10|1,35U /90°|2; phụ50%|35/15/50%|
| Song dao | Physical / hai nhát |0,80s /0,80|1,10U /70°|1; mỗi nhát50% k|25/25/50%|
| Cung | Physical / projectile thẳng |1,10s /1,10|8,0U /r0,12U|1; không xuyên/nảy|40/0/60%|
| Trượng nguyên tố | Magic / projectile thẳng |1,15s /1,15|7,0U /r0,16U|1; không AoE mặc định|35/0/65%|
| Ma đạo thư | Magic / projectile thẳng |1,20s /1,20|7,0U /r0,16U|1; không tự nguyền/triệu hồi|40/0/60%|
| Pháp khí thần thánh / khế ước | Magic / projectile thẳng |1,10s /1,10|7,0U /r0,16U|1; không tự heal/pet proc|35/0/65%|

Tầm melee đo từ tâm chân nguồn đến biên hurt footprint mục tiêu, không đến tâm boss; range test hình học cụ thể tại COMBAT-04. Thứ tự đích trong quạt/capsule: trúng gần nhất theo đường sweep → lệch hướng nhỏ hơn → ID; đích đầu100%, phụ50%, không nhân mọi target100% miễn phí. Max đích tính entity, không từng chân boss. Projectile range là quãng đường tâm đạn; hurt volume tham gia intersection.

## 3. Điểm gây hit, combo và proc

Quạt/capsule có hiệu lực trong Active, swept path từ điểm trước tới hiện tại; một target chỉ một packet/cycle. Cung/pháp khí Release ở cuối Prepare, Active0 nghĩa phát một event, không có window tạo đạn mỗi frame. VFX có thể kéo dài Recovery, không gây thêm hit.

Song dao chạm ở25% và50% cycle, mỗi nhát k/2; không hai lần k hoặc hai chu kỳ attackSpeed. Proc once-per-basic-action dùng chung ledger: thử on-hit lần đầu trúng hợp lệ trong cycle, không được thêm cơ hội chỉ vì hai nhát; effect thật sự per-hit phải có hệ số/tần suất riêng trong kit. Crit chốt một roll/cycle cho hai packet cùng target để không đổi variance miễn phí. Số nổi có thể gộp, damage thật vẫn ở hai mốc.

Combo V1 chỉ đổi pose chu kỳ trái/phải ở vũ khí tương thích, không hệ số/đòn cuối ẩn. Thả đánh quá1,5s reset pose, không reset cadence. Skill nâng đòn kế tiếp phải ghi consume rule cho action/miss/hit, không suy từ weapon glow.

## 4. Cao độ, tọa kỵ và hình ảnh

Melee thường envelope Z từ mặt đứng đến+1,5U; projectile aim theo COMBAT-05/06. Chém thấp không trúng mục tiêu ở tầng cầu trên. Kỵ Sĩ dùng cùng family/tầm nền, xuất phát weaponSocket riêng, không cộng chiều dài ngựa thành bonus tầm. Thiên Mã/Ám Mã tăng quyền chạm quái bay thấp theo COMBAT-05, không tăng tầm mặt đất.

Sprite4 hướng dùng bộ socket/pose phù hợp hướng gần nhất, nhưng hit/VFX world vector liên tục360°. Không xoay toàn sprite nhân vật360° để thay bộ pose. Vệt chém dùng đúng sector/direction, bounds riêng không cắt theo frame thân. Dao/kiếm có trail ngắn, trọng kiếm/rìu dấu nặng, trượng từng nguyên tố có projectile khác palette/shape; không tự thêm burn/chill bằng màu.

Trước15, Thế Công và đánh thường nền chọn biểu hiện theo vũ khí tân thủ hợp lệ, không mở quyền dùng mọi đồ nghề. Sau tiến hóa không giữ action tân thủ làm cooldown thứ hai.

## 5. Tiêu chí kiểm sau

Trúng1/2/3đích, boss nhiều hurt part chỉ một entity, songdao một proc/cycle, biên quạt và giáo, caster/summon không thêm đạn miễn phí, hướng chéo4sprite/360hit, tốc đánh/chậm đúng công thức. So rawDPS, cleave và role sau bằng fixture STAT-11; chưa gọi cân bằng hoàn tất.
