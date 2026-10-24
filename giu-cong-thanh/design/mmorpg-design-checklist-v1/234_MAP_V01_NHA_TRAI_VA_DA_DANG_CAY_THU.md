# Map 1 — Nhà trại và đa dạng cây thử

**23/10/2026 · Bốn loài cây mới, mô-đun nhà và scene r006.** [Thư viện cây](/design-preview/v01-p0-scene-r006/tree-library.html) · [Thử trong scene](/design-preview/v01-p0-scene-r006/index.html). Bổ sung yêu cầu người dùng về nhiều loại cây có dáng riêng, không chỉ đổi màu.

## 1. Bốn loài và vai trò sinh cảnh

| Loài | Nhận diện mới | Vị trí thiết kế | Quy tắc đặt |
|---|---|---|---|
| Sồi | Thân nâu phân nhánh, tán rộng thành khối lá | Rừng, vành cây ngoài trại | Là lớp cây lớn chính; giữ khoảng mở theo đường và điểm tương tác |
| Bạch dương | Vỏ sáng có vệt sẫm, dáng cao, tán hẹp hơn | Bìa rừng, đường mòn, chỗ chuyển sinh cảnh | Dùng tạo nhịp thân cao và khoảng thở, không thay màu cây sồi để giả loài |
| Liễu | Thân hơi nghiêng, tán rủ dạng rèm | Ven suối và đất ẩm | Không đặt tán kín đầu cầu/bãi xuống nước hoặc vùng báo đòn; không rải đều trên đất khô |
| Cây ăn quả | Thân thấp, tán gọn, có quả đỏ | Gần ruộng và khu dân cư | Cụm có dấu chăm sóc; quả chỉ trang trí, chưa hệ thu hoạch/loot |

Mỗi loài có một nguồn thân/tán riêng. Đây là bốn thiết kế silhouette, không bốn palette của cùng sprite. Màu lá vẫn cùng hệ V4 để không thành bốn phong cách khác nhau.

Không đặt mọi loài cạnh nhau ngẫu nhiên trên toàn map. Chọn cây chủ đạo theo khu, cây chuyển tiếp ở rìa, khoảng trống cho hoạt động. Bản scene cho chọn bất kỳ loài ở cùng vị trí **để so sánh**, chưa thuật toán phân bố sinh cảnh hoặc map đã rải cây.

## 2. Bộ phận, kích thước và quy tắc biến thể

Mỗi nguồn PNG alpha có thân/rễ bên trái và tán bên phải; đo bounds và đóng gói hai ảnh96×96/pivot(48,80) theo từng loài. Tổng cộng4nguồn,8componentdraft. Thân giữ dáng rễ/nhánh riêng, tán có dạng và tỷ lệ riêng. Không lấy một thân phóng lên thành cây cổ thụ hoặc ép tất cả tán vừa cùng một hình tròn.

Tỷ lệ/độ chồng thân–tán chỉ là fixture, lưu ở `tree-species.json`. Sồi làm mốc; bạch dương cao hơn; cây ăn quả nhỏ hơn; liễu có offset để tán hợp thân nghiêng. Chưa khóa chiều cao theo mét hoặc collider từng loài. Mẫu giữ collider gốc cũ để so hình, cần định nghĩa footprint từng prefab sau khi duyệt.

Các biến thể trẻ/già/khô/gốc chặt là bước vẽ sau, **chưa có asset riêng trong đợt này**. Không rải component thân trụi hiện tại rồi gọi đó là cây chết hoàn chỉnh. Cây có thể có biến thể hình thứ hai để chống lặp sau khi duyệt một bộ chuẩn; không tăng số loại bằng random scale/tint không kiểm soát.

## 3. Ráp và chuyển động đang có

Scene dùng sprite môi trường dựng đứng theo camera, gốc neo vị trí thế giới; lựa chọn này đã được phép ở36 cho cây, không thay nhà/vách thành ảnh phẳng. Tán được vẽ riêng, có dịch nhẹ theo thời gian, gốc không đi theo. Có tắt lay để đối chiếu tĩnh.

Đây là **lay cả tán bằng dịch chuyển nhỏ**, chưa hệ gió cho từng nhánh/lá, chưa weather server hoặc biến dạng thân. Cần kiểm pixel jitter và điểm chồng component qua nhiều góc trước nghiệm thu. Tán rủ liễu và lá mảnh bạch dương mất một số nét sau thu nhỏ; còn viền/nhánh nối cần chỉnh thủ công.

Khi actor ở vùng phía sau cây, tán có thể giảm alpha; collider gốc vẫn chặn. Điều kiện là khoảng gần của fixture, chưa raycast/occlusion nhiềuactor production. Chưa che mái/tán toàn map hoặc benchmark rừng đông. Trong thư viện2D, bộ cây được ráp bằng cùng cấu hình scene để so silhouette, không vẽ thêm một cây thứ hai khác hình.

## 4. Nhà trại mẫu đi cùng

Nhà giữ footprint4×3cũ trong fixture, nhưng mái hộp thay bằng hai mặt mái dốc, gable, sống mái, khung gỗ, cửa đóng và cửa sổ riêng. Có nguồn texture ngói và gỗ mới, draft32; móng đá tái dùng vật liệu233. Mái tách occluder để giảm che; tường vẫn chặn.

Không dùng PNG cả căn nhà làm billboard. Phần geometry, cửa/window và bố trí khung là code-native; nguồn raster chỉ là vật liệu ngói/gỗ. Cửa chưa có nội thất hoặc thao tác mở, quầy ngoài nhà vẫn marker; không tạo dịch vụ hoặc loreNPC mới từ đồ trang trí.

Nhà hiện còn quá gọn/ít dấu sửa chữa so concept, mái/khung và mật độ texture cần chỉnh trong bước art. Chưa bếp/giường/lều đầy đủ hay prefab production. Đừng lấy nhà mẫu để nhân toàn trại trước khi kiểm tỷ lệ và đường đi.

## 5. Nguồn và kiểm hình

Sáu nguồn mới tạo bằng **image_gen tích hợp**:4cây, ngói và gỗ. Tham chiếu palette/cụm pixel V4. `provenance.json` lưu prompt, nguồn, kích thước/hash; các PNG nguồn vẫn giữ nguyên. Normalize kỹ thuật bằng Canvas trong `tmp/build-tree-components.cjs` và `tmp/build-house-materials.cjs`, không phải vẽ tay pixel final.

Ngói/gỗ32có alpha255, nhưng sai khácRGB mép còn đáng kể, đặc biệt ván gỗ theoX; chưa duyệt seamless. Không che lỗi nguồn bằng tuyên bố có wrapUV. Tán/thân chưa có socket artist chuẩn; chỉnh vị trí chồng bằng fixture không thay file nguồn layer đã duyệt.

## 6. Kiểm đã chạy

[QA](/design-preview/v01-p0-scene-r006/qa.json) · [Ảnhscene](/design-preview/v01-p0-scene-r006/desktop.png) · [mobile](/design-preview/v01-p0-scene-r006/mobile.png).

Browser softwareWebGL nạp4loài/8component và hai vật liệu nhà, đổi cả4loài khôngGLerror. Kiểm tán thay offset khi bật lay, gốc giữ vị trí; tắt lay có thể xem tĩnh; bật/tắt giảm che thay state nhưng gốc vẫn bị chặn. Nhà vẫn chặn, scene/thư viện390pxkhôngtràn, khôngpageerror trong các ca. Đã xem screenshot sồi/liễu và nguồn cả4loài.

Chưa kiểm GPUthật, số lượng cây lớn, mọi góc camera hoặc mũ/FX đằng sau tán; chưa fullmanualplaytest hoặc lịch sinh trưởng. Không dùng kiểm state để khẳng định che khuất nghệ thuật đã đạt. G1–G5vẫn chưa nghiệmthu.

## 7. Checklist và thứ tự tiếp

- [x] Bốn loài riêng, môi trường sử dụng và giới hạn cây quả.
- [x] Nguồn thân/tán alpha, metadata, thư viện ráp và chọn loài trongscene.
- [x] Lay tán/giảm che/gốc chặn, nhà3D với texture mới.
- [ ] Chỉnh pixel, viền, chỗ ghép nhánh/tán và footprint từng loài.
- [ ] Vẽ thêm biến thể dáng của loài chủ đạo, cây non/khô khi cần; chưa nhận vơ đã vẽ.
- [ ] Ghép lát cắt trại–suối–cầu liên tục, đặt cây theo sinh cảnh thay vị trí thử chung.
- [ ] Bổ sung đạo cụ sinh hoạt/quầy phù hợpNPC và HUD13ô, kiểm camera/framing.
- [ ] Kiểm đông cây/actor và đo thiết bị trước nhân toànMap1.

Giữ525=128hoàn thiện/14một phần/383chưa thiết kế; vẫn partial choMAP/ART, chưa hoàn thành native asset. Không sửa game thủ thành, PostgreSQL, stat/combat hoặc truyện ngoàiMap1.
