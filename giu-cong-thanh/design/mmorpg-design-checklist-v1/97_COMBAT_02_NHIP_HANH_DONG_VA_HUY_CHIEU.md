# COMBAT-02 — Nhịp hành động, di chuyển và hủy chiêu

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0. Đặc tả state/thời gian; số mới là cấu hình thử của Ẩn Thành. [Nguồn](92_THAM_KHAO_LEVEL_VA_COMBAT_MMORPG.md). Không sửa công thức damage STAT-06 hoặc code thủ thành.

## 1. Vòng đời một action

Idle/Move là locomotion; action có **Prepare → Active/Release → Recovery → End**, thêm Channel khi skill khai báo. Layer locomotion và upper-body action dùng cùng root/transform, không cùng viết lại frame. Một actionId chỉ enter một lần; đổi Move/Idle không khởi động lại Attack. Damage do mốc server, animation đọc tiến độ action, không callback frame tạo hit.

Preview chưa phải Prepare: hủy preview không mất gì. Khi server chấp nhận bắt đầu, kiểm tài nguyên/quyền và **trừ cost, đặt deadline cooldown** đúng một lần. Mặc định kể cả bị ngắt hoặc hụt trước Release cũng không hoàn cost/cooldown; UI ghi rõ. Skill charge/channel có cost theo từng tick phải khai báo riêng, không vừa charge tổng rồi trừ lại ticks. Kỹ năng thất bại validation trước accept không tốn cost/CD.

Hướng chốt lúc Prepare. Action có trackingUntil riêng nếu muốn theo đích trong windup; mặc định không. VFX niệm/đạn báo cancel/release theo state thật. Unit target mất hiệu lực trước Release thì ngắt action có lý do, không retarget, vẫn giữ chi phí/deadline đã commit. Đạn đã phát không mất vì source vào Recovery/chết, trừ lifecycle encounter/map ở COMBAT-06.

## 2. Nhịp đòn thường và tốc đánh

Tcycle=T0/[(1+haste)×(1−attackSlow)] theo STAT-07; tính các nguồn và cap trước. Haste tối đa100% cho tối đa2× nhịp nền khi không chậm. Chốt Tcycle lúc accept đòn đó; buff giữa đòn tác động đòn tiếp theo, không kéo mốc Release qua lại. Các tỷ phần windup/active/recovery theo COMBAT-03 nhân cùng Tcycle; không làm animation nhanh nhưng damage không nhanh hoặc ngược lại.

NextAttackAt=start+Tcycle tồn tại dù hủy animation. Một sweep có hit window, mỗi target tối đa một hit/action trừ definition nhiều hit. Không catch-up bằng xả nhiều đòn trong một frame khi FPS thấp hoặc kết nối lại. Server scheduler xử lý mốc đã chấp nhận, không tạo thêm action cho mỗi key-repeat. Client lerp presentation giữa snapshot, không backdate hit dựa frame render.

## 3. Di chuyển, hủy và ưu tiên

| Tình huống | Quy tắc V1 |
|---|---|
| Đánh thường melee | Được di chuyển75% tốc chạy trong Prepare/Active, Recovery100%; hướng đòn chốt. Root vẫn khóa đi. |
| Đánh thường cung/pháp khí | Được di chuyển75% trong Prepare/Release, Recovery100%; không tự có kite penalty ngoài bảng. |
| Cast đứng niệm/channel | moveAllowed=false mặc định; lệnh WASD hủy khi cancelByMove=true, sau đó đi, không hoàn chi phí. |
| Skill mobile | Ghi move multiplier/steering và cửa sổ riêng; không suy mọi skill dùng được khi chạy. |
| Né/đỡ | Là skill đã học/đang mang, không hành động miễn phí; Space chỉ alias đúng dòng cơ động. |
| Hủy đòn thường | Bằng di chuyển được phép không hủy; action cơ động/đỡ đã đủ quyền có thể ngắt trước Active hoặc sau Active, không hủy trong sweep đang giải quyết. NextAttackAt giữ. |
| Hủy skill | Theo cancel mask; mặc định không nối skill chủ động khác trước RecoveryEnd. Emergency defensive chỉ khi action cho phép. |

Ưu tiên: chết/destroy → cưỡng bức CC/dịch chuyển hợp lệ → phòng vệ có quyền cancel → skill chủ động → đánh thường giữ → locomotion. Cùng tick dùng sequence server; khóa quyền từ CC luôn được xét trước lệnh mới. Root không chặn skill đứng yên; stun/freeze chặn action theo catalog.

Recovery không nghĩa đứng đơ nếu moveAllowed=true. Cho đi không cho đòn mới gây hit trước deadline. Tránh dùng cancel để bỏ toàn bộ nhược điểm heavy weapon hoặc dồn hai cost-free hit.

## 4. Buffer và mất focus

Chọn một ô buffer skill tối đa **150ms** trước thời điểm action có thể nhận. Lệnh mới thay cũ; hết hạn bỏ, không queue13 skill. Buffer chỉ dành input mới do người bấm, không keyboard repeat. Kiểm lại alive/CC/resource/target tại accept. Trong stun/root cấm action tương ứng thì không tích queue chờ bật ra; hết CC cần intent mới hoặc hold đánh vẫn đang có focus và còn hợp lệ, không phát bù các đòn bị khóa.

Giữ trái chỉ lặp đánh thường; nhấn skill không tự dùng tiếp mỗi khi hết CD. Mất focus/dialogue/UI capture xóa hold/buffer phía input. Lệnh đã accept do server vẫn thực thi, không được hủy damage bằng alt-tab. Reconnect lấy action snapshot; không replay lệnh chưa ack nếu không đối soát sequence.

## 5. Né, đỡ và gọi ngựa

Không có evasion RNG hoặc iframe tự động cho mọi dash. Skill phải khai báo invulnerability tags/start/end nếu thật có. Block theo cửa sổ/giảm mặc định40%, cap60% ở STAT-07; không miễn damage chỉ vì giơ khiên trong sprite. Kỵ Sĩ gọi ngựa chiến: cấu hình Prepare1,0s, đứng yên, damage trực tiếp/hardCC/move ngắt; chỉ đặt cooldown gọi **3s khi thành công**, hủy không cấp ngựa/buff và không mở skill nghề. Không mana cho riêng thao tác gọi ngựa nền. Nghề khác xuống thú trước combat theo hồ sơ34, không đánh trước animation xuống.

## 6. Kiểm chứng cần làm

Đo Prepare/Release/Recovery ở30/60/120FPS và mạng trễ sau này; một action một lịch hit. Test đổi haste giữa đòn, freeze trước hit, cancel trước/sau Release, spam input, buffer149/151ms, channel bị move, mất target và gọi ngựa bị ngắt. Chưa đo FPS/latency hoặc kiểm runtime; không chốt fixed tick NET trong hồ sơ này.
