# Map 1 — Tỷ lệ nhà, anchor và giảm che r022

23/10/2026 · [Bàn thử tỷ lệ cạnh ảnh r009](/design-preview/v01-cottage-scale-r022/index.html).

## Mục tiêu và phạm vi

Đánh giá bộ nhà r021 ở kích thước gần cảnh chơi, giữ r009 làm chuẩn. Hai khung đều800×500, không phóng asset lên rồi kết luận chất lượng. Khung bên phải là bàn thử, không phải thay cảnh r020 bằng nền trống. Không tạo raster mới, không thay nguồn nhà hoặc môi trường đã chọn.

## Anchor nguồn

Nguồn r021 có hai frame971×809. Chọn điểm chân thử (365,735) trong frame thân; đây là mốc gần bậc cửa, chưa được duyệt socket sản phẩm. Dịch mái chuyển từ −60px của preview r021 về −129,4667px tọa độ nguồn, theo hệ số450/971 của bản xem cũ. Cả thân/mái dùng cùng scale quanh điểm chân.

Manifest lưu source, frame, anchorSource và roofOffsetSource. Mặc định scale0,2 và điểm chân màn hình(175,175) để đặt cạnh vị trí nhà gốc; thanh thử0,16–0,24. Thay đổi tỷ lệ không để mái trôi khỏi thân. Không coi đây là texel density đã khóa cho engine.

## Footprint và vùng giảm che

Hai vùng riêng trong fixture:

| Vùng | Rect tại scale0,2 | Vai trò |
|---|---|---|
| Footprint | x107,y112,w136,h60 | Chặn chân theo nền tường |
| Vùng giảm che mái | x85,y25,w200,h90 | Khi chân actor vào vùng thì mái mờ |

Cả hai rect đổi tỷ lệ quanh cùng anchor nhà. Collider dùng bán kính chân4px; speed65px/s chỉ là tham số fixture, không sửa chỉ số MMORPG. Mái đua không tự trở thành vật cản. Vùng che là rectangle thử, chưa polygon tương tác hoàn chỉnh hoặc mái che mưa.

Mái nội suy từ100% xuống28% khi actor đứng sau nhà, trở lại100% khi rời vùng hoặc tắt chức năng. Thứ tự render actor/thân dựa vị trí chân trước/sau anchor nhà; đây là mô hình đơn giản, chưa occlusion 2.5D đầy đủ. Dùng sprite nháp kế thừa, hướng ngang walk, trước/sau idle.

## Kết quả quan sát

Ở kích thước bản đồ, nhà mới gần quy mô nhà gốc nhưng khác độ rộng mặt tiền, đường mái và chi tiết cửa sổ. Bảng thử giúp thấy phần khác này, chưa phải xác nhận đã giống hoàn toàn. Chưa có props quanh nhà, bóng riêng, cửa mở, khói hoặc nội thất.

Giữ khoảng trống quanh nhà trong fixture để soi chân và che khuất, không lấy bàn thử này làm phong cách map mới. Cảnh chính vẫn r020.

## Kiểm tra

- [x] Footprint chặn di chuyển vào nền tường.
- [x] Đứng sau nhà, mái giảm xuống dưới30% sau chuyển tiếp.
- [x] Tắt giảm che, mái trở về trên99%.
- [x] Đổi scale0,2→0,24, chiều rộng footprint136→163,2px.
- [x] Tải manifest thông số, không pageerror hoặc tràn ngang390px.
- [ ] Khóa anchor chính thức và sửa gable chồng giữa hai lớp.
- [ ] Duyệt tỷ lệ/silhouette so r009 ở native scale.
- [ ] Polygon footprint/vùng che theo geometry thật, thử nhiều hướng tiếp cận.
- [ ] Chuẩn bị bóng, cửa, mái che mưa trước khi tích hợp cảnh.

[QA](/design-preview/v01-cottage-scale-r022/qa.json) · [Manifest](/design-preview/v01-cottage-scale-r022/house-manifest.json). Giữ tổng525=128/14/383, chưa production/G1–G5.

## Tiếp theo

Chỉnh silhouette và các điểm ráp còn lệch trong bộ nhà, sau đó làm nhóm prop sát nhà theo cùng tỷ lệ: bậc cửa, thùng, chậu hoa và đoạn hàng rào. Mỗi nhóm phải so trên cùng ảnh r009; không đưa mẫu chưa đạt thay cảnh chính.
