> **Walk ngang thử · 23/10/2026:** [Bàn giao231](231_MAP_V01_WALK_NGANG_THU_VA_CHUYEN_IDLE_MOVE.md) · [Scene r003](/design-preview/v01-p0-scene-r003/index.html). Con Người4key ngang, phase theo quãng đường, dừngIdle/bị chặn; Tây phản chiếu, trước/sauIdle. Chưa pha/native chuẩn; giữ525=128/14/383, chưaG1–G5đạt.

# Map 1 — Sprite alpha và căn ground thử r001

**23/10/2026 · Nguồn alpha mới và atlas kỹ thuật dùng trong scene riêng.** [Mở scene r002](/design-preview/v01-p0-scene-r002/index.html) · [Pose229](229_MAP_V01_POSE_BUOC_CON_NGUOI_VA_QUY_TAC_CHUYEN_DONG.md).

## 1. Bước tiến so với bảng concept

Tạo nguồn PNG RGBA riêng gồm bốn hình Idle Con Người theo body r002, không nền kem hoặc bóng vẽ. Đo alpha từng vùng hướng đã yêu cầu trong prompt, đóng gói bốn frame96×96 vào atlas384×96, giữ điểm chân tham chiếu(48,80) và chiều cao body40px. Có metadata và đã dùng atlas thật trong scene WebGL mới; không chỉ ảnh minh họa giao diện.

Đây là **bản resample kỹ thuật để kiểm tỷ lệ**, chưa pixel native được vẽ/chỉnh thủ công. Thu nguồn lớn bằng nearest-neighbor không tự tạo chất lượng pixel tối ưu. Không đánh hoàn thành bộ nhân vật chỉ vì file đã có96px.

## 2. Nguồn và cách đóng gói

Nguồn alpha `human-idle-source__r001.png` sinh bằng **image_gen tích hợp**, dựa vào `v01-novice-fit-r002/novices-body__r002.png`. Prompt yêu cầu một hàng bốn ô và nền trong suốt thật. Giữ bản nguồn, prompt và provenance/hash; không xóa màu nền bằng script hoặc dùng ảnh nền caro giả alpha.

Script `tmp/build-human-idle-draft.cjs` đọc PNG trong browser, kiểm tỷ lệ pixel alpha0, đo bounds alpha>16 cho từng vùng hướng, kiểm không chạm mép ô. Phần tư ảnh chỉ là vùng tìm kiếm bố trí đã nêu rõ; rectangle thực lấy theo alpha, không giả định nhân vật đầy ô. Cả bốn dùng một tỷ lệ tham chiếu theo chiều cao lớn nhất, làm tròn kích thước nguyên, đặt chân xuốngy80 và giữa quanhx48; không kéo riêng thân theo chiều rộng.

Kết quả nguồn2172×724, alpha0 khoảng72.4%; bốn body đo cùng597pxcao. Bản draft body40pxcao, mặt trước/sau20pxrộng và ngang14pxrộng. Metadata lưu rect nguồn, frame, ground/pivot, kích thước đích và hạn chế. Đây là phép đo file hiện tại, không quy định mọi nhân vật phải rộng20px hoặc cao40px.

Vì làm tròn pixel, tỷ lệ sau xuất có sai số nhỏ; điểm chân từ mép dưới alpha là gốc kỹ thuật, chưa xác nhận cấu trúc bàn chân/socket chuẩn. Nguồn còn viền alpha/chi tiết cần kiểm dọn. Không thêm padding atlas/extrusion production trong bản draft; renderer tách từng frame ra texture riêng nên không lấy mẫu lẫn frame bên cạnh. Nếu đưa vào atlas chung sau này phải theo chuẩn35.

## 3. Scene r002 thực sự làm gì

- Nhân vật Con Người lấy bốn frame từ manifest, dựng quad hướng camera và neo ground đúng gốc hình.
- WASD/mũi tên đổi hướng Idle theo chuyển động; có chọn hướng cố định để đối chiếu trước/trái/sau/phải.
- Có bật/tắt sprite mới để so proxy. Elf/Lùn vẫn proxy và không được gắn cùng hình Con Người.
- Bóng nền đơn giản nằm trên surface hiện tại; không bóng vẽ đi kèm texture nguồn. Bóng trên dốc chưa có mesh tiếp xúc nghiêng chính xác, vẫn cần sửa ở pipeline hoàn chỉnh.
- Kế thừa sáu trạm/collision/bridge/ramp từ224. Cầu có deck và dốc; gốc actor đổi cao độ theo mặt đứng.

**Chưa walk cycle.** Actor đang dịch chuyển một hình Idle; việc đổi hướng không phải animation bước. Không dùng bảng229 làm bốn frame nối tiếp. Chưa mũ/head mask, vật cầm tay, Hurt/Attack/Death, HUD13ô hoặc scene liền mạch Trại–Suối–Cầu.

Đơn vị world, chiều cao quad và render scale chỉ phục vụ fixture, chưa khóa camera/tỷ lệ game. Giữ scene r001 để so sánh; r002 không thay game MMORPG hoặc thủ thành.

## 4. Kiểm đã chạy và chưa chạy

[qa.json](/design-preview/v01-p0-scene-r002/qa.json), [ảnhdesktop](/design-preview/v01-p0-scene-r002/desktop.png), [ảnhmobile](/design-preview/v01-p0-scene-r002/mobile.png). Browser software WebGL tải đủ4texture, keyboard làm actor di chuyển và chọn hướngĐông khi đi phải. Sáu trạm không trả lỗiGL; model nhà/sôngsâu chặn, cạn có hệ số, cầu nối hai bờ, dốc lên bệ và không rơi cạnh. Màn390px không tràn ngang; khôngpageerror ởca chạy.

Kiểm model dùng API debug tách với kiểm keyboard, không fullmanualplaytest qua mọi trạm. Chưa xác nhận sprite không clipping trong mọi pose hoặc mọi mái; chưa benchmark GPU thật; chưa test mạng, chiến đấu hoặc lifecycle trang bị. G1 có hình gần thực hơn nhưng chưa đủ nghiệm thu, G2–G5không tự đạt.

## 5. File và việc cần làm tiếp

`public/design-preview/v01-p0-scene-r002/` có sceneHTML/CSS/JS; `human-idle-source__r001.png`, `human-idle-atlas__draft.png`, `sprite-manifest.json`, `source-prompt.txt`, `provenance.json` vàQA/ảnh. [Manifest](/design-preview/v01-p0-scene-r002/sprite-manifest.json) là nguồn rect/pivot; scene không đoán số hàng/hướng khi render.

- [x] Nguồn Con Người bốn hướng có alpha thật, giữ bản gốc.
- [x] Atlas thử96px/ground chung và metadata bounds xuất được.
- [x] Nạp vào scene, đổi hướng, giữ surface/va chạm và kiểm browser.
- [ ] Chỉnh pixel thủ công sau resample, đối chiếu góc/viền/silhouette với style được chọn.
- [ ] Ghép nguồn body/pose/mũ nhất quán; thêm clip bước đúng pha.
- [ ] Thử HUD/framing và nền cỏ–đất–đường thật, không chốt bằng nền khối.
- [ ] Làm bóng dốc/occlusion nhiềuactor và đo thiết bị thật.

Giữ525=128hoàn thiện/14một phần/383chưa thiết kế. Đây là tiến bộ tích hợp thử một body, không toàn bộ gói226 hoặc hệ nhân vật đã hoàn thiện. Không sửa class, tốc độ/damage gameplay, database hoặc thủ thành. Không viết truyện ngoàiMap1.
