> **Scene P0 đã dựng · 23/10/2026:** [Bàn giao 224](224_MAP_V01_SCENE_KIEM_P0_R001.md) · [Mở mẫu WebGL 2.5D](/design-preview/v01-p0-scene-r001/index.html). Sáu trạm khối 3D/sprite proxy, cầu/dốc/surface/nước; chưa art native, scene game hoặc nghiệm thu G1–G5. Các trạng thái “chưa dựng” bên dưới là lịch sử. Giữ 525=128/14/383.

# Map 1 — Quy chuẩn P0 và cảnh kiểm tỷ lệ

**23/10/2026 · Hồ sơ chuẩn bị sản xuất, chưa phải scene engine.** [Danh mục 222](222_MAP_V01_DANH_MUC_SAN_XUAT_ASSET.md) · [ART-04 / 36](36_DINH_HUONG_2_5D_VA_RA_SOAT_MY_THUAT.md). Chỉ Map 1, không sửa thủ thành.

## 1. Khóa cách hiểu 2.5D trước khi vẽ

Theo 36/37: môi trường là **khối 3D đơn giản dùng texture pixel**, nhân vật là **sprite 2D dựng đứng hướng camera**, camera trực giao cố định. Không đổi sang toàn cảnh ảnh phẳng vì concept mới trông như 2D. Ảnh 221 chỉ tham chiếu chất liệu và mức chi tiết, không phải texture chiếu lên một tấm sàn.

| Đối tượng | Dạng sản xuất | Không được hiểu thành |
|---|---|---|
| Đất/cỏ/đường | Texture tile và decal trên bề mặt | Mỗi tile là một khối hộp có khe |
| Nhà/cầu/vách/dốc | Geometry mô-đun, texture pixel, dữ liệu surface | Ảnh chụp nguyên căn nhà rồi dùng bounds ảnh làm va chạm |
| Cây | Gốc/khối chân, thân/tán dạng sprite dựng hoặc geometry đơn giản qua cảnh thử | Toàn cây nghiêng theo mặt đất hoặc tán là collider |
| Cỏ/bụi/sỏi | Decal, sprite cụm hoặc mesh nhỏ theo vai trò | Tạo mesh/collider riêng cho mọi viên sỏi |
| Người/NPC/quái | Sprite sheet dựng đứng, socket và ground anchor | Sprite nằm phẳng như dấu chân |
| VFX | Đất: bám surface; hiệu ứng người: bám socket; thể tích: cách dựng riêng | Một tấm effect chiếu lên cả cầu và sông bên dưới |

Khi danh mục 220–222 ghi “tách mái/thân” hoặc “prefab”, đó là tách thành phần để dựng/che khuất; không bắt nhà/cầu phải là sprite. Quy tắc tại mục này làm rõ cách triển khai, không đổi cốt truyện hoặc nhận diện.

## 2. Thông số tham chiếu được giữ, điều còn chưa khóa

| Thông số | Mốc hiện hành | Trạng thái |
|---|---|---|
| Ô texture tác giả | 32×32 px | Giữ tham chiếu ART-04; không đồng nghĩa một ô đất chiếu lên màn hình là 32×32 |
| Body Con Người | Khoảng 40 px ở mẫu chuẩn | Dáng trưởng thành theo art đã chọn; kiểm lại ba thân cùng cảnh |
| Canvas body | 96×96; ground mẫu (48,80) | Preset xuất, không giới hạn áo/mũ/vũ khí; không scale body cho đầy frame |
| Camera | Trực giao, khóa xoay; nhìn xiên khoảng 45° ở mẫu đầu | Chưa nghiệm thu góc/zoom; không thêm camera xoay tự do |
| Hướng sprite | Bốn hướng tham chiếu, di chuyển tám hướng | Chưa tự tăng ngân sách lên tám hướng; aim tách hướng đi |
| Khung render thế giới | 960×540 tham chiếu, phóng nguyên khi phù hợp | Không hứa mọi cửa sổ web đều pixel-perfect; UI tiếng Việt scale riêng |
| Collider | D theo đường kính thân lớn nhất của ba race | Không lấy chiều rộng áo, vũ khí hoặc số pixel body làm D |

Đơn vị texture, đơn vị thế giới, đơn vị server và pixel màn hình phải có phép quy đổi trong cấu hình scene. Chưa có phép quy đổi đã đo nên không gán “1 tile = 1 mét” hoặc bê hệ số ×3 từ greybox sang sản xuất.

## 3. Cảnh kiểm P0 — sáu trạm trong một scene riêng

| Trạm | Bố trí cần dựng | Thao tác kiểm | Điều kiện đạt |
|---|---|---|---|
| T1 · Thước tỷ lệ | Ba thân, cửa nhà, bàn, thùng, cây, dấu ground | Đứng cạnh, quay bốn hướng, bật/tắt mũ mẫu | Thân nhất quán; không lùn đi do chiếu sprite hai lần; cửa có tỷ lệ hợp lý |
| T2 · Sân trại | Quầy thuốc, mái nhà và lối rộng 5D; vùng F 3D×3D | Đi trước/sau mái, cạnh quầy; hai actor đứng gần nhau | Không kẹt; không che mất actor; prompt phân biệt đúng quầy |
| T3 · Ghép nền | Cỏ/đất, đường T/góc/cụt, ba vật liệu gặp nhau | Camera đứng rồi chạy chậm dọc mép | Không hở/đổi pixel density, không nhấp variant theo frame |
| T4 · Suối | Bờ thoải nhìn rõ, đáy sỏi và một đoạn sông sâu cạnh nó | Xuống/lên cạn; thử tiến vào sâu; tắt nhãn | Hiểu khác biệt bằng đáy/bờ/hình, không chỉ màu; trigger khớp |
| T5 · Cầu | Hai mố, deck 4D trở lên, rail và mặt nước dưới | Qua cầu, đi sát rail, chọn bề mặt khi nhìn chồng | Đứng đúng deck; không trượt xuống sông; không bóng treo sai tầng |
| T6 · Cây và dốc | Một cụm cây, vách, dốc 3D và decal báo vùng mẫu | Lên/xuống, đi sau tán, nhìn decal từ hai bề mặt | Ground đúng surface; tán giảm che có giới hạn; decal không ăn xuyên tầng |

Các số D giữ tiêu chí 217, không phải thiết kế hitbox mới. Những bề mặt dưới cầu ở trạm T5 là fixture kiểm phân tầng; không mở lối đi dưới cầu hoặc bơi trong Map 1 thật. Thử UI dịch vụ chỉ là kiểm vùng, không cần triển khai kinh tế/đăng nhập.

## 4. Hợp đồng ghép họ tile đầu tiên

Sản xuất **cỏ–đất–đường** trước nước và công trình đầy đủ. Texture vẫn nguồn 32 px tham chiếu; phối theo lưới bề mặt thế giới, không vẽ thành diamond isometric. Vùng phẳng, dốc và vách dùng UV/geometry đúng vật liệu; không kéo một texture nhỏ qua cả sườn đồi.

- Chọn cỏ làm nền cơ sở, đất phủ có cạnh/góc; đường là phần đất có hướng và dấu mòn, không một bộ collision khác.
- Đủ cạnh thẳng, góc ngoài, góc lõm và đầu cụt theo topology được chọn. Nếu dùng blob tám lân cận, giữ quy tắc 47 biến thể của 35; không vẽ 47 cho mọi đồ trang trí.
- Ghép kiểm mảng lặp 3×3, chữ T, vòng đất quanh cỏ, hốc lõm và tiếp giáp đá. Ba vật liệu gặp nhau dùng ưu tiên lớp/decal giao điểm, không chồng ba đường viền kín.
- Biến thể chi tiết đặt thưa, có nền yên tĩnh; khóa seed khi xuất/lắp. Cụm hoa và sỏi là lớp riêng để giảm mật độ sát đường mà không vẽ lại toàn nền.
- Mép vật liệu qua cạnh mô-đun phải liền; ánh sáng vẽ vào texture không được tạo bóng kép với đèn engine.
- Nước làm họ tiếp theo: đường bờ cố định qua animation, gợn nước tách khỏi shape; không chỉnh đường bờ theo sóng.

Chưa vẽ tile hoặc báo đã khít mạch trong hồ sơ này. Không dùng crop ảnh 221 làm bằng chứng đạt.

## 5. Điểm neo, đóng gói và metadata

Sprite giữ `sourceSize`, vùng trim và ground trong hệ tọa độ ảnh gốc. Gốc thế giới của actor không đổi khi atlas trim hoặc thay pose; không làm tròn pixel từng layer độc lập. Bộ hướng/clip có tên ổn định và pose/socket theo frame nếu cần.

Geometry ghi kích thước thế giới, transform/pivot, surface ID, vật liệu/UV và điểm nối mô-đun. Prefab ghi thành phần, footprint, vùng tương tác, occluder và cách giảm che. Mái giảm che không làm mất tường chặn; tán rung không dịch gốc.

Atlas sprite giữ extrusion 2 px và gutter ít nhất 2 px theo 35; không xoay frame ở bản đầu, không matte viền. Texture tile lặp cần sampler/wrap và xử lý mép riêng; không áp padding atlas sprite rồi làm UV tile lặp sai. Tên đề xuất: `BM-G01_grass_base_r001`, biến thể có hậu tố ổn định; ID gameplay không chứa vị trí atlas hoặc đường dẫn máy tác giả.

## 6. Cổng quyết định và bằng chứng phải lưu

| Cổng | Bằng chứng | Nếu chưa đạt |
|---|---|---|
| G1 · Hình | Ảnh T1/T2 ở cùng camera, ba thân và cửa/nhà/cây | Chỉnh tỷ lệ trước khi vẽ hàng loạt |
| G2 · Ghép | Ảnh T3 và source tile, cấu hình topology | Sửa cạnh/góc/UV, không che lỗi bằng bụi/hoa |
| G3 · Không gian | Clip T4–T6, debug ground/surface/collision | Sửa geometry/surface; không bù bằng giảm tốc hoặc đổi range |
| G4 · Động | Clip camera chậm, tán, nước và bản giảm hiệu ứng | Kiểm jitter, pha chuyển động, shader và alpha |
| G5 · Tải | Thiết bị, browser/build, độ phân giải và số fixture đã dùng | Đo trước; giảm variant/lớp/FX khi có bằng chứng tải |

Mẫu nhiều actor giữ fixture 1/8/24 của 38 để so sánh, không là công bố sức chứa MMO. Chưa có scene engine hoặc phép đo nên tất cả cổng đang **chưa kiểm**. Chỉ khóa native/camera sau G1–G3; G4–G5 cần đạt trước nhân diện rộng và nghiệm thu sản xuất.

## 7. Checklist hiện tại và việc tiếp theo

- [x] Đối chiếu 35–38 và sửa cách hiểu pipeline môi trường trong danh mục.
- [x] Giữ tham chiếu 32 px/96 px/40 px có trạng thái, không tự coi là thông số đã đo.
- [x] Thiết kế sáu trạm, bài kiểm tile và dữ liệu bàn giao.
- [ ] Dựng scene 2.5D T1–T6 bằng khối, sprite/texture thử; greybox Canvas hiện có chưa thay scene này.
- [ ] Ghi camera, scale, surface và ảnh/clip G1–G3; chọn thông số bằng bằng chứng.
- [ ] Vẽ họ cỏ–đất–đường P0 theo thông số đã kiểm; mở tiếp nước/cầu/cây/nhà.
- [ ] Đo chuyển động/tải G4–G5 và duyệt trước khi nhân toàn Map 1.

Giữ **525 mục: 128 hoàn thiện / 14 một phần / 383 chưa thiết kế**. Đây là đặc tả kiểm trước sản xuất, không asset native mới, scene engine hoặc kết quả kiểm game. Không đổi damage, database, storyline hoặc thủ thành.
