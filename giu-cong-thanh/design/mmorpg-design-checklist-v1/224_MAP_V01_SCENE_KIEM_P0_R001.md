# Map 1 — Scene kiểm P0 r001

**23/10/2026 · Mẫu kỹ thuật chạy riêng.** [Mở scene](/design-preview/v01-p0-scene-r001/index.html) · [Đặc tả 223](223_MAP_V01_QUY_CHUAN_P0_VA_CANH_KIEM_TY_LE.md).

## 1. Đã dựng thực sự

Trang dùng WebGL, vertex/fragment shader, depth buffer và geometry hộp/mặt dốc trong không gian ba chiều. Camera trực giao nhìn xiên; actor là quad hướng camera có texture pixel proxy với alpha discard. Không phải hình concept đặt làm nền hoặc Canvas giả chiều sâu theo Y.

Có sáu trạm T1–T6, chọn ba thân, WASD/phím mũi tên và nút hướng cảm ứng; tùy chọn góc 35°/45°/55°, camera trượt chậm để đối chiếu và giảm che mái/tán. Camera chỉnh chỉ ở công cụ thiết kế; chưa mở camera xoay trong gameplay.

T1 có ba mẫu tỷ lệ cạnh nhà/bàn/cây. T2 có nhà chặn chân và marker quầy; chưa dịch vụ F. T3 có nền cỏ/đất và nhánh đường khối màu, chưa texture 32 px/native hoặc đủ blob 47. T4 có nước cạn hệ số 0.8 trong mẫu, sâu chặn. T5 có deck cao 1 đơn vị mẫu, hai dốc nối lên/xuống và rail chặn. T6 có dốc tăng lên 1.5 đơn vị mẫu, bệ cao và cây có tán riêng; không cho đi ngang qua cạnh bệ thành nhảy cao độ.

Các số này là fixture kỹ thuật, không tầm đánh/tốc độ/cao độ map sản xuất. Đi dưới cầu, tương tác kinh tế, telegraph và chiến đấu khác tầng chưa được triển khai. Vùng đỏ trên bệ là marker cố định, chưa phải AoE hoặc phép chiếu kỹ năng.

## 2. Hình và quy tắc che khuất

Sprite ba thân là proxy hình học tạo bằng Canvas nhỏ rồi nạp texture nearest-neighbor; không ảnh nhân vật mới, không bộ animation và không bằng chứng duyệt tỷ lệ 40 px/canvas96 của ART. Không lấy chiều cao proxy làm thông số sản xuất.

Nhà/cây là geometry khối, mái/tán tách. Giảm che dùng điều kiện khoảng gần actor trong mẫu; chưa có hệ occlusion production cho nhiều người, tất cả vật hoặc góc nhìn. Footprint nhà/gốc/rail vẫn chặn khi hình mái/tán giảm alpha. Không mô phỏng gió hoặc thời tiết.

Nền dùng ô hình học màu có biến thể xác định, chưa texture atlas. Render ở khoảng nửa kích thước CSS và phóng nearest; chiều rộng lẻ/camera chiếu 3D vẫn có nguy cơ pixel không đều. Chưa tuyên bố pixel-perfect hoặc chốt khung960×540. Mẫu là bước so sánh, không thay chuẩn native đang chờ.

## 3. Kiểm tra và giới hạn bằng chứng

[Báo cáo kiểm](/design-preview/v01-p0-scene-r001/qa.json) · [Ảnh desktop](/design-preview/v01-p0-scene-r001/desktop.png) · [Ảnh mobile](/design-preview/v01-p0-scene-r001/mobile.png).

Kiểm browser bằng software WebGL: shader/scene khởi tạo, keyboard đổi vị trí, sáu trạm không trả lỗi GL, nhà chặn, nước sâu chặn, cạn có hệ số, tuyến qua cầu nối hai bờ, dốc lên bệ đúng cao độ và cạnh bệ không cho rơi ngang. Màn390px không tràn ngang, không pageerror trong các ca chạy.

Đây không phải đo hiệu năng GPU máy người dùng, full manual playtest hay test camera/art nghiệm thu. Di chuyển tuyến cầu/dốc trong test sử dụng API debug của chính model; keyboard được kiểm riêng, không coi là người chơi đã đi hết cảnh bằng tay.

## 4. Đối chiếu cổng 223

| Cổng | Hiện có | Chưa đủ |
|---|---|---|
| G1 hình/tỷ lệ | Hình ba thân proxy cùng scene 3D | Chưa sprite art chuẩn, cửa/mái hoàn thiện, duyệt tỷ lệ |
| G2 tile | Ô nền và nhánh đường vật liệu cơ bản | Chưa tile nguồn, đủ mép/góc/UV production |
| G3 không gian | Collision/surface cầu và dốc mẫu chạy được | Chưa mọi tầng, ray picking, AoE/projectile hoặc controller game |
| G4 chuyển động | Camera trượt chậm để quan sát | Chưa nước/tán animation, clip đánh giá jitter và bản FX nhẹ |
| G5 tải | WebGL software khởi chạy | Chưa benchmark thiết bị thật hoặc fixture1/8/24actor |

Không ghi G1–G5 đạt. Scene này bổ sung bằng chứng một phần cho G3 và nền dựng cảnh, không tự hoàn thiện ART-04/MAP-01. Không phụ thuộc thư viện ngoài/CDN và không đổi package/runtime game; code WebGL nhỏ chỉ thuộc trang thiết kế, không chốt renderer cho MMORPG tương lai.

## 5. Checklist bàn giao và bước tiếp

- [x] Dựng khối 3D và sprite proxy hướng camera trong trang riêng.
- [x] Sáu trạm có fixture cơ bản, movement và công cụ góc/che khuất.
- [x] Kiểm model cầu/dốc/nước/nhà và lỗi browser.
- [ ] Thay proxy bằng sprite thử đúng chuẩn đã chọn, đối chiếu ba race.
- [ ] Vẽ họ texture cỏ–đất–đường P0 và đủ mép/góc, kiểm trong T3.
- [ ] Làm prefab nhà/cây/cầu đủ metadata; kiểm bờ nước và tương tác F.
- [ ] Kiểm manual pixel/camera, nhiều actor và GPU thực trước khóa thông số.

Giữ **525 mục: 128 hoàn thiện / 14 một phần / 383 chưa thiết kế**. Không sửa game thủ thành, database, class, combat hoặc lore ngoài Map 1. File mẫu `public/design-preview/v01-p0-scene-r001/{index.html,style.css,app.js}`; API debug chỉ phục vụ thiết kế.
