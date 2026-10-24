> **Nền cỏ/đất P0 · 23/10/2026:** [Hồ sơ232](232_MAP_V01_NEN_CO_DAT_VA_MEP_CHUYEN_THU.md) · [Scene r004](/design-preview/v01-p0-scene-r004/index.html). Hai texture nguồn/draft32, đường và mép mask pixel, thanhchi tiết và lặp3×3; chưa nativecleanup/bộ47tile/nghiệmthuG2. Giữ525=128/14/383.

# Map 1 — Walk ngang thử và chuyển Idle–Move

**23/10/2026 · Animation nháp trong scene riêng, chưa chuẩn production.** [Mở scene r003](/design-preview/v01-p0-scene-r003/index.html) · [Sprite Idle230](230_MAP_V01_SPRITE_ALPHA_VA_CAN_GROUND_THU_R001.md).

## 1. Đã làm gì

Tạo nguồn Con Người nhìn phải có bốn keyframe bước khác nhau, nền alpha; đo vùng hình và đóng gói bốn frame96×96/ground(48,80) vào atlas thử. Scene dùng clip này khi đi ngang, không chỉ thay đổi hướng của ảnh Idle. Hướng Tây phản chiếu clip Đông **chỉ để kiểm fixture chưa có trang bị bất đối xứng**. Trước/sau vẫn dùng Idle dịch chuyển, Elf/Lùn vẫn proxy. Không gọi đây là đủ animation bốn hướng.

Giữ trang phục vải/da của bodyr002, không nghề mới, không vũ khí/mũ. Sprite nguồn sinh bằng image_gen tích hợp, ba lượt: bản8frame lặp tư thế bị loại; bản4key đầu thiếu đảo pha rõ; bản chỉnh key3/4 dùng làm nguồn thử. Nguồn được chọn vẫn cần sửa dáng/pha thủ công, không coi tái sinh ảnh là nghiệm thu.

## 2. Nhận xét chất lượng hình

Hai tư thế chân mở và chân khép đọc rõ hơn bản8frame; các key3/4 đã khác tay/chân so nửa đầu. Tuy nhiên thứ tự chân gần/xa, độ vung tay và độ nâng gối còn cần chỉnh theo sơ đồ giải phẫu; key4 nhấc gối khá cao so đi bộ thư thả. Đường tóc/cổ/tay có khác nhẹ giữa frame. Chưa chứng minh chân chống bám nền không trượt, silhouette khớp tuyệt đối Idle hoặc loop đủ mượt.

Bản4key thiếu các inbetween Down/Up đầy đủ. Clip dùng để xem lỗi và thiết kế chuyển trạng thái, không là bản đi hoàn chỉnh. Không tăng tốc gameplay, dùng motionblur hoặc quay camera để che lỗi pha.

## 3. Căn frame và dữ liệu

`tmp/build-human-walk-draft.cjs` đọc alpha nguồn, tìm cột trống gần các vùng dự kiến để tránh cắt giày khi hình vượt đường chia phần tư. Bounds lấy theo alpha>16; vùng torso lấy centroid alpha trong dải thân40–52%chiều cao để căn ngang. Giữ một tỷ lệ tham chiếu body40px và baseliney80, lưu sourceRect/targetBody/pivot từngframe trong manifest.

Đây là heuristic đóng gói, chưa socket giải phẫu được artist kiểm. Body cùng40px sau làm tròn không chứng minh khớp đầu/hông; baseline mép dưới không thay việc đánh dấu chân chống theo từngpha. Bản xuất là resample thử, chưa dọn pixel/alpha viền. Không thay nguồn bằng bản xuất hoặc báo “native đã hoàn thiện”.

Scene giữ bản Idle/manifest230 trong thư mục r003, cùng atlas Walk384×96 và manifest Walk riêng. Frame đọc bằng rect metadata, tách ra texture để tránh lẫn frame. Nếu dùng atlas chung production cần padding/extrusion theo35.

## 4. Logic Idle–Move đang hoạt động

- Controller/collision vẫn quyết vị trí; lấy quãng đường **thực sự dịch chuyển sau collision** để tăng phase clip, không dùng việc đang giữ nút làm bằng chứng đi được.
- Đứng yên hoặc bị nhà chặn thì render Idle, phase không tăng. Đi tiếp giữ phase; đổi hướng không reset phase mỗi frame. Reset trạm mới đặt phase về0 có chủ ý.
- Một stride thử2.4đơn vị fixture cho một vòng phase; tốc độ nhân vật không bị sửa. Đây là cấu hình animation thử, chưa số cân game hoặc cam kết foot lock.
- Đi Tây dùng đảo UV của clip Đông; tương lai có vũ khí/túi/ký hiệu bất đối xứng phải vẽ/đối chiếu hướng riêng, không áp phản chiếu vô điều kiện.
- Có nút tắt Walk để so Idle và chọn hướng cố định để xem hình. Công cụ có thể cố định hướng để so sánh, không phải điều khiển chiến đấu thật.

Chưa crossfade, root motion, Attack/Hurt/Cast/Death, animation mũ, sound bước chân hoặc controller multiplayer. Scene không thay game/Phaser/database. Bản r002 được giữ nguyên để đối chiếu.

## 5. Kiểm đã chạy

[Báo cáo](/design-preview/v01-p0-scene-r003/qa.json) · [Ảnhdesktop](/design-preview/v01-p0-scene-r003/desktop.png) · [Ảnhmobile](/design-preview/v01-p0-scene-r003/mobile.png).

Browser software WebGL nạp4frame, frame thay đổi khi keyboard làm actor đi; nhả phím vềIdle vàphaseđứng yên; giữ hướng đâm nhà thìphase dừng khi hết dịch chuyển; đi trái chọn hướngTây; khôngGLerror/pageerror trong các ca;390pxkhôngtrànngang.

Đây kiểm state/frame, không xác nhận phase chân đúng giải phẫu, độ mượt, foot sliding hoặc hiệu năng GPU. Không có bằng chứng production/G1–G5đạt; không test cả4hướnganimation, quái hoặc mạng. QA dùng keyboard cho kiểm chuyển trạng thái và API debug để đặt cạnh nhà, không giả fullmanualplaytest.

## 6. File và bước kế tiếp

`public/design-preview/v01-p0-scene-r003/` có scene, atlas/manifest Idle kế thừa, `human-walk-east-source__r001.png`, `human-walk-east-atlas__draft.png`, `walk-manifest.json`, ba prompt và `provenance.json`. Nguồn/phiên bản bị loại ghi trong provenance; không dùng bản8frame vào scene.

- [x] Nguồn4keynhìn phải có alpha; lưu bản nguồn và lý do chọn/loại.
- [x] Clip thử ngang vào scene, phase theo dịch chuyển, dừng khiIdle/bị chặn.
- [x] Ghi hạn chế phản chiếu, inbetween, phase chân và nguồnresample.
- [ ] Artist sửa pha tay/chân, gối và khớp hìnhIdle trên cùng nguồn.
- [ ] Thêm inbetween rồi kiểm contact chân với nền, tốc độ và camera.
- [ ] Làm hướng trước/sau và hướng riêng khi đồ bất đối xứng; Elf/Lùn không scale giả.
- [ ] Tách mũ/head socket và thử animation trang bị.
- [ ] Mở bộ texture nền P0 và lát cắt liền mạch; đo thiết bị thực khi có art đủ đại diện.

Giữ525=128hoàn thiện/14một phần/383chưa thiết kế. Đây là mẫu animation ngang có giới hạn, không hoàn thành hệ nhân vật hoặc toàn gói226. Không sửa class, combat, tiền tệ, database, thủ thành hoặc lore ngoàiMap1.
