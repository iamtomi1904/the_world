# COMBAT-06 — Projectile, đường bay và va chạm

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0. Hợp đồng gameplay/asset/network cho đường đạn, chưa code/benchmark. [Nguồn](92_THAM_KHAO_LEVEL_VA_COMBAT_MMORPG.md). U/giây là cấu hình world.

## 1. Definition bắt buộc

Projectile có definition/version, actionId/projectileId, owner/attribution, school/element, source snapshot, origin/socket, direction, speed/path, range/lifetime, radius/shape, targetMask, surface/height/LoS policy, pierce/bounce/homing, hit ledger, proc flags, cleanup và visual profile. Không lấy số frame ảnh để tính quãng đường hoặc damage.

Source stats chốt lúc cast accept, direction/đích trajectory chốt theo skill tới Release; defense mục tiêu tính lúc hit theo STAT-09. Đạn thường không homing, không xuyên/nảy/AoE, có thể trượt khi địch né đường. Targeted skill cần khai báo là instant effect, straight shot hay homing; chọn unit không bảo đảm mọi đạn tự tìm.

## 2. Profile nền và hình

| Profile | Tốc độ | Range / thời gian sống tối đa | Bán kính | Hình/âm cần sản xuất |
|---|---:|---|---:|---|
| Mũi tên |14U/s|8U /1,0s|0,12U|Mũi nhỏ sắc, đuôi ngắn, cắm/tan khi chạm; không dài cả màn. |
| Trượng |10U/s|7U /1,2s|0,16U|Fire viên lõi/tàn, Water giọt/mảnh băng theo skill, Thunder tia ngắn có đầu đạn đọc được. |
| Ma đạo thư |9U/s|7U /1,3s|0,16U|Ấn/khói gọn, impact riêng, không thêm nguyền chỉ vì màu tối. |
| Thần thánh/khế ước |10U/s|7U /1,2s|0,16U|Hạt sáng/luồng lá theo nhánh, không lẫn heal khi đang damage. |

TTL là chặn tồn tại bất thường; thường hết range trước TTL. Range đo path length, không khoảng cách tới target lúc cuối. Collision radius cộng contactSkin0,08U ở phép thử đúng một lần, preview đã thể hiện. VFX glow/trail lớn hơn không tăng hitbox.

Origin từ socket vũ khí được chiếu về world; nếu socket rơi trong tường do pose, kiểm đoạn từ thân nguồn đến socket: bị chắn thì impact tại bề mặt đó, không spawn bên kia tường. Không dời origin vượt tường để chữa clipping. Tên ở0…tầm8U không được cộng chiều dài trail thành bonus range.

## 3. Trình tự giải quyết

Mỗi bước mô phỏng kiểm **swept shape** từ vị trí cũ tới mới, tìm contact sớm nhất theo thời gian dọc path với geometry và unit. Tường tại cùng contact ưu tiên chặn; ties unit theo entityId. Không chỉ kiểm điểm cuối nên đạn nhanh vẫn chạm quái nhỏ. Dừng chính xác ở contact/rangeEnd/TTL sớm nhất; emit một impact authoritative.

Địch có volume giao path và đúng relation mới nhận packet. Đồng minh/NPC dịch vụ không chặn đạn cùng phe trong PvE V1; tường/thân cây chặn độc lập. Target chết trước hit không nhận lại damage; đạn thẳng vẫn tiếp tục đến vật cản/địch hợp lệ kế tiếp trong range, trừ definition consumeOnInvalidContact. Không teleport hit sang selected target cũ.

Arrow/projectile không nâng Z theo pixel bóng; đường3D từ origin tới aimPoint, zMode thẳng trong profile nền. Cầu/sàn chặn bằng geometry. Ground field sinh tại contact chỉ nếu được phép trên surface; impact giữa không trung không tự tạo field dưới chân target qua sàn.

## 4. Biến thể chỉ khi skill khai báo

| Biến thể | Quy tắc hợp đồng |
|---|---|
| Pierce | pierceAdditionalTargets và maxHits hữu hạn; hit mỗi entity một lần/path, damage multiplier mỗi thứ tự ghi trước. Terrain vẫn chặn trừ tag đặc biệt. |
| Bounce | Số nảy, searchRadius, LoS, range budget, multiplier, có được quay lại đích cũ hay không. Mặc định không quay lại, chọn gần nhất rồiID. |
| Homing | turnRate tối đa, target validity, range/time vẫn hữu hạn. Mất đích mặc định đi tiếp hướng cuối, không tự tìm kẻ khác. |
| Arc/lob | Quỹ đạo có Z, gravity/đỉnh/đích; không mặc định qua mọi tường chỉ vì có hình vòm. Ground preview hiện nơi rơi thật. |
| Explosion | Radius/Z/surface/mask/maxTargets, damage curve và ảnh hưởng tường; direct+AoE cùng target mặc định chỉ packet lớn hơn, trừ kit đã budget hai packet. |
| Beam | Path/hit intervals/maxTargets riêng, không giả nhiều projectile mỗi frame; không dùng FPS làm ticks. |
| Reflect | V1 chưa mở phản đường đạn. Reflect damage của STAT-06 là packet trả, không đổi owner/bẻ hướng projectile. |

Không tự grant biến thể cho tất cả vũ khí. Thiếu trường bắt buộc thì definition chưa đủ phát hành, không fallback “xuyên vô hạn”. Caps an toàn kỹ thuật sẽ do NET/performance định sau, không drop hit hợp lệ im lặng khi quá particle budget.

## 5. Authority, vòng đời và render

Server tạo/hit/destroy projectile; client dự đoán visual bằng action sequence, reconcile với projectileId, không spawn thêm bản thật khi ack. Nội suy render không đổi path collision. Không rewind toàn encounter theo timestamp client; lag compensation nếu có cần NET thiết kế riêng. Preview local không cấp damage.

Nguồn chết sau Release: đạn đã phát còn tới hạn trong cùng encounter/world, ghi owner đúng, không phát đạn mới. Source teleport/đổi world/instance hoặc encounter reset: hủy projectile thuộc miền cũ; việc chuyển vùng trong combat phải theo COMBAT-14, không biến cleanup thành quyền teleport trốn đòn. Target đổi miền không còn nhận contact. AoE/DoT đã apply theo policy effect riêng, không bị hủy chỉ vì projectile đã despawn.

Range/TTL/hit/encounter-end đều giải phóng ledger/entity/trail/pool; visual tan được giữ ngắn nhưng không collider. Giảm VFX chỉ bỏ particle phụ, giữ đầu đạn, biên nguy hiểm, impact/hit feedback. Atlas effect có bounds riêng để không cắt vuông, không xoay cả nhân vật theo đạn.

## 6. Kiểm sau

Tốc cao qua mob nhỏ; hai mục tiêu trước/sau tường; socket trong tường; bridge; pierce gặp boss nhiều phần; target chết/relog; mấtđích homing; ack lặp; source chết/đổiinstance; expiry cùngtickhit; nhiều đạn không rò trail. Chưa chạy gameplay hoặc khẳng định FPS/băng thông đạt.
