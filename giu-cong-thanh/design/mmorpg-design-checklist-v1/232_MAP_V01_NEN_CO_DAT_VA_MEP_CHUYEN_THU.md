> **Bờ nước/cầu thử · 23/10/2026:** [Hồ sơ233](233_MAP_V01_BO_NUOC_VA_CAU_DA_THU.md) · [Scene r005](/design-preview/v01-p0-scene-r005/index.html). Đá cầu/sỏi đáy mới, cạn/sâu và gợn shader; deck khớp surface. Chưa bộbờ/texture native hoàn thiện/G1–G5đạt. Giữ525=128/14/383.

# Map 1 — Nền cỏ/đất và mép chuyển thử

**23/10/2026 · Hai vật liệu gốc, bản32px thử và scene r004.** [Đi thử](/design-preview/v01-p0-scene-r004/index.html) · [Xem lặp3×3](/design-preview/v01-p0-scene-r004/ground-preview.html) · [Danh mục222](222_MAP_V01_DANH_MUC_SAN_XUAT_ASSET.md).

## 1. Phạm vi đã làm

Tạo mới hai nguồn texture độc lập bằng image_gen: cỏ nền và đất nén khô, theo màu/chất liệu V4. Không cắt ảnh concept221 thành tile. Mỗi nguồn được đóng gói kỹ thuật thành PNG32×32 bằng nearest-neighbor, giữ nguồn lớn/provenance. Scene dùng hai texture thật trên mặt đất, có đường thẳng, nhánhT, góc và đầu cụt bằng dữ liệu vùng.

Đây là **draft vật liệu nền**, chưa tile pixel được dọn tay hoặc toàn bộ bộ cỏ/đất/đường production. Hai texture là vật liệu điền; mép ghép được render bằng shader mask, không phải47ôblob đã vẽ. Không báo hoàn thành G2 từ một mảng nhìn có đường nối.

## 2. Hướng hình và kiểm ban đầu

Cỏ có các cụm sắc xanh; đất màu nâu vàng dịu, chấm đất nhỏ. Khi phủ rộng, bản raw cỏ còn lộ nhịp cụm/nhiễu; đất nhẹ hơn nhưng vẫn cần kiểm lặp ở camera chạy. Nguồn không tuân thủ lưới pixel32 chính xác chỉ vì prompt yêu cầu; downsample là bước thử kỹ thuật, chưa native-art approval.

Scene có thanh **Chi tiết nền** để hòa texture với màu vật liệu phẳng, mặc định35%chi tiết. Đây là điều chỉnh trình bày để so độ rõ actor, không chỉnh nguồn ảnh hoặc tuyên bố đã sửa art gốc. Không dùng giảm chi tiết làm lý do bỏ bước chỉnh pixel/mép/biến thể thủ công.

Trang3×3 hiển thị hai bản raw để soi cạnh và nhịp lặp, không áp tint/giảm chi tiết. Chưa có biến thể nền hoặc decal hoa/sỏi mới. Không mở băng/lava/map2.

## 3. Cách ghép trong scene

Mặt đất là một plane3D; texture được lặp theo tọa độ thế giới, span1.6đơn vị fixture, không kéo một vệt môi trường lên cả vùng. Đường là hợp các vùng chữ nhật thử, không dữ liệu navigation hoặc thay đổi Map1 gốc. Mask lấy khoảng cách tới vùng, lượng hóa theo lưới nhỏ và nhiễu cố định theo vị trí để có mép pixel; không đổi ngẫu nhiên mỗi frame.

Góc ngoài/trong và giao nhánh đến từ hợp vùng, chưa có hình cỏ lấn đất vẽ riêng. Có thể dùng để kiểm độ rõ lane và framing, không thay topology/mép nguồn khi sản xuất. Đường không tự tăng tốc, không đổi collider hay skill; sông/cầu/dốc và vật cản giữ model fixture.

Đã bỏ456hộp nền riêng của scene cũ, thay bằng một lượt vẽ plane nền. Những vật thể khác vẫn renderer nhỏ của prototype, chưa buffer tĩnh/batching/culling toàn scene. Giảm số lần vẽ nền là thay đổi đếm được về cấu trúc, **không bằng chứng tăng FPS trên máy người dùng**.

## 4. Dữ liệu và số đo

`tmp/build-ground-drafts.cjs` xuất hai draft32, kiểm alpha đều255 và lưu sai khác trung bình màu mép đầu/cuối theo trục trong `ground-manifest.json`. Cỏ khoảng12.94/11.99 đơn vịRGB, đất3.20/3.94 ởX/Y của file hiện tại. Đây là số đo giúp tìm cạnh khác màu, không ngưỡng duyệt seamless; hai cạnh có thể khác tự nhiên nhưng vẫn liền về cảm giác hoặc ngược lại.

Nguồn1254×1254 cho mỗi vật liệu được giữ nguyên. PNG32 không có alpha thừa; không resize nguồn rồi gán là vẽ tay. Mật độ texture so actor cần kiểm với khung cóHUD/camera thực và vật mẫu; chưa khóa span1.6thành đơn vị game/mét.

Scene giữ sprite/clip thử từ230–231: Con Người walk ngang còn lỗi pha/gối, Tây phản chiếu, Bắc/NamIdle; Elf/Lùnproxy. Không báo phần nhân vật được hoàn thiện nhờ đổi nền.

## 5. Kiểm và giới hạn

[qa.json](/design-preview/v01-p0-scene-r004/qa.json) · [desktop](/design-preview/v01-p0-scene-r004/desktop.png) · [mobile](/design-preview/v01-p0-scene-r004/mobile.png).

Kiểm browser softwareWebGL: nạp hai vật liệu; bật/tắt texture làm kết quả hình khác; clip/frame/Idle và chặn nhà vẫn chạy; khôngGLerror/pageerror ở ca kiểm;390pxkhôngtràn ngang. Đã xem ảnhscene để nhận xét mật độ rồi thêm thanh chi tiết. Kiểm này không xác nhận chất lượng mép hoặc jitter trên thiết bị thật.

Chưa có native pixel cleanup, biến thể chống lặp, mép bờ sông/đá hoặc bộ47tile nguồn; chưa đầy đủ atlas/UV assetpipeline, scene Trại–Suối–Cầu liền mạch, HUD13ô và benchmark thực. Không coi ảnh screenshot softwareGL là duyệt mỹ thuật cuối.

## 6. Bàn giao và bước tiếp

`public/design-preview/v01-p0-scene-r004/` có scene, nguồn `grass-source__r001.png`/`dirt-source__r001.png`, draft32, `ground-manifest.json`, trang3×3 và `provenance.json` lưu prompt/nguồn/hash. Tạo bằng **image_gen tích hợp**, không CLI/API key riêng. Các atlas nhân vật kế thừa có nguồn tham chiếu r002/r003, không tạo body mới trong mục này.

- [x] Hai nguồn vật liệu mới, draft32 và thông tin nguồn.
- [x] Render lặp trênplane, đường/mép mask pixel, bật/tắt và mứcchi tiết.
- [x] Mảng kiểm3×3, số đo mép và kiểmbrowser cơ bản.
- [ ] Dọn art pixel và cạnh, bổ sung biến thể nhẹ để giảm nhịp lặp.
- [ ] Chọn cách chuyển cỏ/đất chính thức: topologytile hoặc mask/decal có nguồn mỹ thuật, không nhầm hai cách là cùng deliverable.
- [ ] Làm bờ cạn/sâu, mặt/mố/rail cầu và cây/nhà đúng phong cách.
- [ ] Ghép lát cắt liền mạch, cóHUD; kiểm camera/telegraph và đo trên thiết bị thật.

Giữ525=128hoàn thiện/14một phần/383chưa thiết kế; MAP/ART vẫnpartial, G1–G5chưađạt. Không thay game thủ thành, database, chỉ số/combat, roster hoặc lore ngoàiMap1.
