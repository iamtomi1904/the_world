# Map 1 — Bộ nhà thân/mái bám mẫu r009, r021

23/10/2026 · [So ảnh gốc và mẫu ghép](/design-preview/v01-cottage-kit-r021/index.html).

## Mục tiêu

Bắt đầu tạo asset riêng theo đúng hướng sửa ở hồ sơ248. Chọn ngôi nhà làm mẫu giới hạn, so trực tiếp cạnh nhà trong r009 trước khi đưa vào cảnh. Không tiếp tục lấy cảnh khối cũ làm chuẩn mỹ thuật; bản r020 giữ nguyên.

## Thiết kế nhà

- Tường vữa sáng và khung gỗ nâu, móng đá thấp, cửa gỗ bên trái cửa sổ sáng.
- Mái ngói đỏ có hai mặt, ống khói đá phía trái, cùng ánh sáng trên trái với cảnh gốc.
- Thân và mái là hai lớp riêng, mỗi lớp có phần cần thiết để ghép. Chưa nội thất, cửa mở hoặc animation khói.
- Cây, hoa, thùng và hàng rào không in vào thân nhà; chúng sẽ là prop riêng.

Dùng imagegen tích hợp tạo nguồn hai cột theo reference r009. Nguồn có kích thước1942×809, mỗi frame971×809; thân bên trái, mái bên phải. Giữ nguyên nguồn và alpha; trang có tùy chọn cutout128 khi hiển thị. Prompt và nguồn được lưu tại provenance.json.

## Kết quả và giới hạn

Mẫu mới cùng tông vật liệu với r009, nhưng mặt tiền rộng/đối xứng hơn, cửa sổ và hình mái chưa giống hoàn toàn. Đây là candidate cần so, không phải asset đã được xác nhận đúng nhà gốc. Cột thân vẫn có tam giác gỗ/vữa dưới mái; cột mái có phần gable riêng nên cần xử lý vùng chồng khi hoàn thiện.

Hai frame không tự đồng vị trí như brief yêu cầu: khi overlay thẳng, mái che cửa/cửa sổ. Đã dịch mái thử y=−60px trong canvas preview480×440 để kiểm tra. Đây là độ dịch hiển thị, chưa socket tọa độ nguồn hoặc anchor sản phẩm; không dùng con số này cho engine khi đổi scale. File nguồn không bị dịch/cắt mất phần hình.

Trang cho tắt thân/mái, đổi độ mờ mái0–100%, soi nền sáng/tối/caro, điều chỉnh offset và xuất manifest thử. Bật mờ mái chỉ là demo lớp render, chưa vùng tương tác/che khuất với nhân vật.

## Quy tắc khi tích hợp thật

Footprint lấy theo nền nhà; mái đua không tự trở thành collider. Thân và mái dùng anchor chân chung sau khi chuẩn hóa nguồn. Mái có vùng giảm che và vùng che mưa riêng, không lấy alpha của mái làm cả hai một cách mặc định. Không mở nội thất chỉ vì mái có thể ẩn; phải có thiết kế không gian bên trong trước.

Bóng, cửa, cửa sổ, khói và prop cần thống nhất nguồn sáng và scale. Chỉ thêm lớp sáng cửa sổ/khói sau khi hình tĩnh đã đạt và các anchor được khóa.

## Checklist

- [x] Vẽ nguồn thân/mái riêng bám vật liệu r009.
- [x] Trang đối chiếu nhà gốc và mẫu ghép, giữ r020 nguyên trạng.
- [x] Tắt/bật mái, độ mờ30%, đổi nền và cutout hoạt động.
- [x] Xuất manifest thông số thử, không lỗi pageerror hoặc tràn ngang390px.
- [ ] Chỉnh mặt tiền, tỷ lệ mái và cửa sổ gần r009 hơn.
- [ ] Chuẩn hóa anchor trong tọa độ nguồn, bỏ phần gable trùng giữa hai lớp.
- [ ] Dọn alpha/pixel ở kích thước chơi, không chỉ phóng lớn.
- [ ] Chốt footprint/collider và vùng che, sau đó thử ráp một góc với actor.
- [ ] Nghiệm thu asset trước khi thay nhà trong cảnh chính.

[QA](/design-preview/v01-cottage-kit-r021/qa.json). Tổng525=128/14/383 giữ nguyên. Chưa production/G1–G5, không thay map r020 bằng asset chưa duyệt, không sửa thủ thành.

## Bước tiếp theo

Đặt mẫu nhà ở đúng kích thước nhân vật và đối chiếu đường viền với nhà gốc; sửa tỷ lệ cùng anchor trước. Chỉ khi bản ghép đạt mới đưa vào một khu dựng từ asset riêng, tiếp tục giữ r009 làm thước đo chất lượng.
