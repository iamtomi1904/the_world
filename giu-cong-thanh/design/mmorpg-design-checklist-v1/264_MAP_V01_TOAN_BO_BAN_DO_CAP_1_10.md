# Bình Minh — Gói thiết kế toàn bản đồ cấp1–10

24/10/2026 · Phạm vi: **toàn bộ V01, chỉ bản đồ**.

[Bản xem toàn map](/design-preview/v01-complete-map-r001/index.html) · [Dữ liệu thiết kế](/design-preview/v01-complete-map-r001/map-design.json) · [Ảnh ngoài trời](/design-preview/v01-complete-map-r001/binh-minh-full-map-r001.png).

## 1. Quyết định phạm vi

“Map1–10” trong gói này là Bình Minh, vùng tân thủ cấp1–10 đã chốt, không phải10map thủ thành hoặc10vùng MMORPG mới. Hoàn thiện thiết kế không gian toàn vùng trong một lượt: địa lý, phân khu, đường, địa hình, nước, công trình, cây/cỏ, cửa vùng, cửa hầm và mặt bằng dưới đất. Không thêm nhiệm vụ, nhân vật, kỹ năng, quái hoặc kinh tế.

Nguồn nội dung giữ hồ sơ216–219, story17/20 và dungeon08/18. R009/r020 tiếp tục là hướng mỹ thuật: pixel2D đặt trong cảnh2.5D có chiều cao, vật thể đọc rõ silhouette, màu xanh tự nhiên, nhà vữa/gỗ mái ngói ấm, nước xanh lam/ngọc. Không dùng cảnh khối greybox làm chuẩn hình.

Bản xem có hai lớp riêng: ảnh mỹ thuật có ghim gần đúng theo phần trăm; sơ đồ1000×760 giữ mã điểm L/ECO trước đây. Chúng không có phép ánh xạ collision một-một. Nguồn sơ đồ là quy tắc nối đường; ảnh là hướng kiến trúc, cảnh quan và vật liệu.

## 2. Cấu trúc tổng thể

Bắc là vành lũy đóng và vách; Tây Bắc là rừng; Tây Nam là làng Đá Đèn; trại nằm trên gò trung tâm–Tây; ruộng ở thấp phía Nam. Sông sâu chạy Bắc–Nam ở một phần ba phía Đông, một cầu đá chính nối hai bờ. Sân Chuông, cửa phó bản và Kho Vôi nằm bờ Đông, với đường tránh bãi đối đầu Đông Bắc.

Một suối nhánh từ rừng đi qua khu khảo sát, nhánh lau tách tuyến làng/trại; các cầu gỗ nhỏ phục vụ dân cư và ruộng không được tự coi là nhiều bản Cầu Lau. Cầu Sỏi là cầu đá qua sông lớn, Cầu Lau là một điểm riêng trên nhánh lau.

Không gian là vùng mở có vòng khám phá và đường quay về, không12phòng tuyến tính. Mười hai ô A1–D3 chỉ là lưới trao đổi địa lý, không tự là12chunk/serverzone.

## 3. Hồ sơ12khu địa lý

| Khu | Dải khuyến nghị | Bố trí | Địa hình / hình ảnh |
|---|---|---|---|
| Làng Đá Đèn | 1–3 | Nhà Đèn, quảng trường, kho dân cư và đường sơ tán; cùng một vị trí địa lý, biến thể intro/hậu biến cố tách trạng thái. | Gò thấp, đất nện, nhà gỗ/vữa, cây ăn quả; cửa nhà hướng vào sân và đường chung. |
| Cầu Lau | 2–4 | Cầu gỗ qua nhánh lau, nối làng với trại; có khoảng quay đầu trước hai mố. | Bãi trũng, lau và nước cạn; đường cầu khô không bắt buộc lội. |
| Trại Bình Minh | 3–10 | Hub an toàn với sáu điểm công việc, sân chung, nhà đèn tạm, xưởng, kho/bếp và khu thuốc. | Gò cao, đường dốc rõ; chừa đường xe và lối thoát, không lấp sân bằng prop. |
| Ngã ba Tây | 3–10 | Nối trại, rừng và lối đi bộ tới Valedorn; chỉ đánh dấu cửa vùng, không thiết kế Map 2. | Đường chính rộng, cọc hướng; cành cây không che giao lộ. |
| Bìa Rừng Cũ | 4–7 | Lán an toàn, đường cọc, vòng khám phá và nhánh lãnh địa tự chọn. | Sồi/dương xen bụi, rễ, gốc chết và đá; có đường tránh khu nguy hiểm. |
| Suối Sỏi Trắng | 4–7 | Hai bờ khảo sát khô, trạm nước và cửa Hốc Rễ; suối có đáy và đường vòng qua cầu. | Suối cạn xanh nhạt, sỏi nhỏ; nước sâu không bị ngầm gọi thành đường lội. |
| Đồng Ruộng Gãy Bờ | 4–7 | Ruộng trũng nối vòng về trại, mương và đường nông dân; các luống không cắt đứt trục đi. | Ngô/rau/ngũ cốc, rào hở cửa, bờ ruộng và vũng nông. |
| Cầu Sỏi và sông Đông | 5–10 | Một cầu đá chính qua sông sâu; hai đầu đủ rộng, có bờ khô xuống quan sát nước. | Sông xanh đậm, vách/bờ cao; không bơi hoặc nhảy đá bắt buộc. |
| Sân Chuông Nứt | 7–10 | Nền chuông, nhà trực, sân nghỉ an toàn và nhánh Kho Vôi; lối đọc cảnh quan tách khu đối đầu. | Nền đá cổ, cỏ mọc khe, bụi thấp; cầu thang trang trí có dốc đi thật thay thế. |
| Thềm Hầm Phong Ấn | 8–10 | Tiền sảnh chờ cửa phó bản; có đường từ sân nghỉ tránh bãi đối đầu Đông Bắc. | Vách đá cổ, cổng phong ấn, dấu canh ấn; không mở lối vào lõi thành. |
| Vành lũy phía Bắc | biên giới | Mốc định hướng lớn, cổng lõi đóng; là ranh giới V01 chứ không phó bản thứ hai. | Thành đá hư một phần, vách nối tự nhiên; không đường xuyên collider. |
| Bãi đá Đông Bắc | tự chọn | Không gian dự trữ đối đầu ngoài trời; không nằm trên trục vào phó bản hoặc đường dân cư. | Khoảng né rộng, ranh đá/cọc rõ và đường vòng; không thiết kế kỹ năng/quái trong gói map. |

Dải cấp là nhịp định hướng, không tường level chặn đường. Khu làng intro và trạng thái hậu biến cố dùng cùng địa lý nhưng trạng thái trình bày riêng; không thêm một bản làng thứ hai chỉ để tránh thiết kế phase.

## 4. Mạng đường hoàn chỉnh

### Trục dân cư

Làng Đá Đèn → Cầu Lau → Trại Bình Minh. Trại → Ngã ba Tây → cửa vùng Valedorn. Trại có vòng trở về qua ruộng và bờ suối; không cần đi qua bãi đối đầu để sử dụng đường dịch vụ.

### Trục khảo sát và khám phá

Trại → đường cọc → lán rừng; đường nhánh tới Hốc Rễ đi theo bờ khô. Trại → Trạm suối → đầu Tây Cầu Sỏi. Ruộng nối trạm và trại thành vòng, tránh đường cụt khi theo mương.

### Trục bờ Đông

Cầu Sỏi → Sân nghỉ → Sân Chuông; từ đây có đường tới Kho Vôi và đường lên tiền sảnh Hầm Phong Ấn. Bãi đối đầu Đông Bắc là nhánh tự chọn, không cổng thu phí bắt buộc trên tuyến vào hầm.

### Quy cách bề rộng

- Trục chính tối thiểu5D; đường phụ3D; đường khám phá2D và chỗ quay đầu4D.
- Cầu Sỏi có mặt đi ít nhất4D; hai đầu không thắt cổ chai dưới bề rộng cần thiết.
- Cầu Lau và dốc bắt buộc ít nhất3D; chân dốc có nền chờ không bị thùng/rào chiếm.
- D là đường kính thân va chạm lớn nhất của race tân thủ, không chiều rộng mái/tán/vũ khí.
- Dốc thực nối cao độ; cầu thật nối hai bờ. Không dùng hình cầu trang trí để hợp thức hóa đường xuyên sông.

Mạng tuyến trong JSON giữ nodes/routes của layout chức năng và loại bỏ nhiệm vụ/NPC/rương khỏi gói hiển thị. Đây là đồ thị bố trí, không navmesh kiểm từng gốc cây. Nhánh dự trữ đối đầu không được bắt buộc nối thành đường an toàn.

## 5. Nước và cao độ

| Loại | Cách đọc hình | Quy tắc bố trí |
|---|---|---|
| Sông sâu | Xanh đậm, bờ/vách rõ, dòng chảy tập trung | Chặn đi bộ, không nhảy đá/bơi bắt buộc; chỉ cầu chính đã định |
| Suối cạn | Đáy sỏi sáng, xanh nhạt, mép thoải | Có thể đề xuất lội chậm nhưng đường khô luôn có; không đặt mục tiêu bắt buộc dưới nước |
| Gò trại | Nền cao, vách cỏ/đá thấp, dốc vào rõ | Có tuyến vận chuyển và hai hướng rời khu, không lối ra chỉ bằng bậc nhảy |
| Ruộng trũng | Mương, bờ đất và luống | Bờ ruộng thành đường, không mọi luống đều là collider kín |
| Thềm chuông/hầm | Nền đá, vách nối và dốc | Chỗ chờ an toàn trước cửa, đường tránh vùng đối đầu |
| Vành lũy | Vách và tường đá liên tục | Ranh giới chưa mở, không tạo cổng vào nội thành bằng một vệt đường vô tình |

V01 không thêm vùng băng/lava/gió buff hoặc cơ chế thiêu máu. Cây và vách có lớp hình cao hơn mặt đất; collision lấy vùng chân, không bounds toàn ảnh.

## 6. Công trình và cảnh vật

Làng có nhà/cửa hướng vào đường chung, quảng trường nhỏ và lối ra Cầu Lau. Trại bố trí sáu điểm công việc trong các cụm nhà/lều, không yêu cầu sáu mái tách biệt: ghi danh/điều phối, nhà đèn tạm, xưởng, thuốc, kho và bếp. Sân giữa còn trống để định hướng, không một mê cung thùng đồ.

Ruộng có cây trồng khác loại, mương dẫn nước hợp hướng dốc, chòi và chỗ chứa công cụ. Lán rừng có nền khô, cọc đường, củi và vùng nhìn trước lối vòng. Sân Chuông có bệ chuông, nhà trực, dấu nền canh ấn, lối bảo dưỡng xuống Kho Vôi; không thêm nhà dịch vụ hoặc NPC mới.

Các nhà/cầu ở r026 chỉ là mẫu vật liệu/chi tiết. Không phóng nguyên ảnh góc nhà thành toàn map hoặc copy lặp một cụm cây trên mọi vùng.

## 7. Cây, đất, đá và nước theo sinh cảnh

- Quanh làng: cây ăn quả, bụi hoa trắng/vàng, cỏ giẫm và đất nện; rào có cửa thật.
- Rừng: sồi thân dày, dương thân sáng, bụi tầng thấp, gốc cũ, rễ và cụm đá; giữ khoảng nghỉ giữa tán.
- Bờ suối/sông: liễu ở đất ẩm, lau/sậy, sỏi và đá bờ; không đặt cây lớn giữa dòng sâu.
- Ruộng: luống ngô/rau/ngũ cốc, bờ đất và cỏ ven mương; không mọc hoa dại dày trên mọi luống.
- Nền cổ: cỏ khe đá, rêu ở mặt ẩm, đá gãy định ranh; nền chờ vẫn đọc rõ hình chân.

Module cần cho sản xuất: đất/cỏ và mép chuyển; bờ cạn/sâu có góc trong/ngoài; vách/gò/dốc; cầu gỗ/đá và mố; nhà/lều/xưởng; cây thân–tán; rào/cửa; ruộng/mương; prop dân cư; nền đá cổ/cửa hầm. Ảnh overview không thay thế những asset module này.

## 8. Thời tiết và ánh sáng của map

Nắng, mây, mưa nhẹ và sương sáng thay theo thời gian game; có thể chồng gió/lá rơi theo loại cây. Mưa có vệt nước trên đất và dòng suối, sương thấp không che mọi giao lộ, đèn ấm quanh hub/cầu làm mốc ban tối. Không đổi quyền đi hoặc khóa đường chính vì chờ thời tiết hiếm. Đây là đặc tả môi trường, không triển khai hệ thời gian/server mới trong đợt này.

## 9. Các không gian dưới đất

### DG-V01-01 — Hầm Phong Ấn Cổ

Cửa ở Đông Bắc, có tiền sảnh đứng chờ và dốc tiếp cận. Giữ đúng6phòng: P1 Cửa bảo dưỡng → P2 Buồng thoát áp → P3 Kho sổ lệnh → P4 Hành lang kiểm nhận → P5 Buồng gác → P6 Trạm chuyển phiếu. Mặt bằng sắp tuyến dễ đọc, chừa lối rút sau kết P6→P2→P1. Không tự biến P3 thành nhánh có thể bỏ để làm sai thứ tự đã chốt. Không thiết kế thêm boss hoặc cơ chế trong tài liệu map.

### ECO-V01-01 — Hốc Rễ Dưới Guồng

Cửa trên bờ khô nhánh suối. Ba khoảng: cửa dưới rễ, buồng guồng và ngăn kho khô. Hai lối quanh cùng một cơ cấu hội tụ, không cần bơi hoặc nhảy. Điểm rễ tối trên ảnh ngoài trời không tự thành cửa hầm thứ tư; chỉ cửa ECO01 được gán chức năng.

### ECO-V01-02 — Kho Vôi Bên Sân Chuông

Cửa bên sườn Sân Chuông, tránh bãi đối đầu. Ba khoảng liên thông: cửa kho, buồng chứa và hành lang bên, có vòng về. Sàn khô, vật tư vôi, xà chống và lối bảo dưỡng; không vẽ thành một ngôi đền mới.

Ảnh kiến trúc từng hầm là tham chiếu vật liệu và cảm giác không gian; sơ đồ nối phòng bên dưới là nguồn bố trí chuẩn. Không dùng một cửa/nền tô tối trong concept làm phòng/boss phát sinh.

## 10. Khu an toàn và khoảng cách chức năng

Hub trại là vùng an toàn; lán rừng, trạm suối và sân nghỉ là chỗ đứng được thiết kế cho tương tác ngoài hoang dã, không có nghĩa cả rừng/sông an toàn. Chừa nền3D×3D trước các điểm dịch vụ dự kiến và tránh đặt chúng ngay mép dốc hoặc giữa cầu. Gói này không thêm nội dung NPC, chỉ giữ chỗ và đường tiếp cận theo hồ sơ có sẵn.

Không đặt cổng hầm, lối chuyển vùng hoặc trục làng–trại trong vùng dự trữ đối đầu. Giữ lối vòng khi bãi Đông Bắc hoặc nhánh rừng có hoạt động. Không có quái bay ởV01.

## 11. Phân lớp và lưới dựng

Ảnh toàn cảnh không là một texture map phóng lớn trong engine. Khi dựng: mặt đất → vách/shore → công trình/props → actor → mái/tán trước → thời tiết/ánh sáng → giao diện. Các lớp chân/collision và hình cao tách nhau.

Lưới A1–D3 hỗ trợ sản xuất theo nhóm không gian: A1rừng, B1chân lũy/nguồn, C1sông Bắc, D1thềm hầm; A2Tây, B2trại, C2suối/cầu, D2chuông; A3làng, B3Cầu Lau, C3ruộng, D3sông/biên. Đây không phải ngân sách chunk engine. Kích thước world/tile và tải phải chốt cùng camera/asset native, không đoán từ PNG.

## 12. Checklist bàn giao thiết kế toàn map

- [x] Chốt phạm vi Bình Minh cấp1–10, map-only.
- [x] Phân bố12khu địa lý và mã điểm nguồn.
- [x] Trục đường chính, nhánh/vòng khám phá, cửa vùng và đường tránh.
- [x] Quy tắc nước sâu/cạn, bờ, vách, dốc và bề rộng.
- [x] Bố trí làng/trại/công trình/ruộng/lán/chuông.
- [x] Hướng cây/cỏ/đá/vật liệu theo sinh cảnh.
- [x] Môi trường, thời tiết, ánh sáng và khả năng đọc đường.
- [x] Vị trí1phó bản +2hầm khám phá, mặt bằng riêng.
- [x] Bản xem toàn vùng, tên khu, tìm kiếm, zoom/pan, lưới và exportJSON.
- [x] Markdown, thư viện và liên kết từ cảnh cũ cùng cập nhật.
- [ ] Tilemap/mesh nguồn, bộ module khít mạch và prefab sạch.
- [ ] Collision/navmesh đối chiếu từng vật thể, đủ các race.
- [ ] Map đi được trong engine, streaming và hiệu năng web/PC.

**Đã hoàn thiện gói thiết kế toàn bản đồ; chưa báo map gameplay đã dựng hoàn chỉnh.** Các mục triển khai giữ riêng, không đếm thành hoàn thành vì đã có concept. Tổng checklist lớn525=128/14/383 không tự thay.

## 13. Hình ảnh và kiểm tra

Ảnh được tạo bằng built-in image_gen, nguồn/prompt lưu trong provenance.json tại trang map. Dữ liệu không sửa tiến trình thủ thành, nhiệm vụ hoặc database.

[QA](/design-preview/v01-complete-map-r001/qa.json) · [Nguồn/prompt](/design-preview/v01-complete-map-r001/provenance.json).

Kiểm tra viewer: đủ12khu,3hầm và6/3/3khoảng; endpoint các route tồn tại; các điểm chính nối được trong đồ thị; tìm kiếm, zoom, đổi sơ đồ, tảiJSON, hình tải đủ, không tràn ngang ở390px và không pageerror. Đồ thị pass không có nghĩa đường trên ảnh hoặc collider engine đã được duyệt.
