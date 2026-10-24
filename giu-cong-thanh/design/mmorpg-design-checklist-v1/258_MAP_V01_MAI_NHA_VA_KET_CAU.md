# Map 1 — Lớp mái và kết cấu bên dưới: đợt 10 việc

24/10/2026 · [Xem trong r026](/design-preview/v01-bridge-in-scene-r026/index.html).

## Kết quả thiết kế

Có hình cắt lớp mới dựa trên chính cảnh r020: bỏ ngói và ống khói để lộ xà, vì kèo và sàn gác bằng gỗ. Mặt tiền, cây và cảnh quan tiếp tục theo mẫu đã chốt. Hình này dùng cho chế độ kiểm tra trong cùng cảnh, không thay phong cách hoặc mở thêm trang.

Mặc định Giữ mái gốc: vẽ trực tiếp nền cũ, không qua phép ghép gây thay đổi pixel. Khi xem bên dưới mái, chỉ vùng x86–310, y10–140 được lấy từ ảnh mới. Đây là **vùng sửa hình chữ nhật**, chưa phải sprite mái có alpha sạch. Nó bao gồm một ít nền quanh mái; không được coi là asset mái chính thức đã tách xong.

## 10 việc của đợt

| # | Công việc | Trạng thái cụ thể |
|---|---|---|
| 1 | Vẽ kết cấu dưới mái | Có raster mới: vì kèo, xà và gác gỗ; bản đề xuất, chưa nội thất gameplay. |
| 2 | Bảo toàn hình gốc | Nền r020 giữ nguyên; trạng thái đóng mái vẽ trực tiếp ảnh gốc. Kiểm tra vùng mái sai khác0pixel. |
| 3 | Manifest lớp mái | roof-layers.json chứa nguồn, mask, vùng ống khói, độ mờ và tham số chuyển trạng thái. |
| 4 | Lớp mái lấy từ ảnh gốc | Runtime trích vùng mái gốc thành canvas cache; không vẽ lại mái bằng hình học. Đây là vùng chữ nhật có cảnh lân cận, chưa alpha sạch. |
| 5 | Xem kết cấu không mái | Chế độ Bỏ mái để xem kết cấu thay vùng mái bằng ảnh mới; không mở đường xuyên tường. |
| 6 | Chỉnh độ mờ | Slider0–1 trong chế độ Chỉnh độ mờ, có nội suy sang giá trị đích. |
| 7 | Tự mờ gần cửa | Trong22px: mái hướng tới25%; ra xa phục hồi100%. Mặc định tắt, người xem chủ động chọn. |
| 8 | Kiểm tra vùng và thứ tự lớp | Bật biên mái/ống khói; lớp mái trong chế độ mờ ghép sau actor, lớp kết cấu nằm trước actor. Ở trạng thái100% dùng nền gốc, chưa occlusion chính xác cho actor đứng sau nhà. |
| 9 | Cửa sổ xem lớp gốc | Canvas nhỏ hiển thị vùng mái đã lấy, giúp nhận ra phần nền còn lẫn trong vùng tách. |
| 10 | Xuất cấu hình | Nút tải JSON manifest dùng được, giữ nguồn hình và các tọa độ để tiếp tục tinh chỉnh. |

- [x] Cả10 việc trên đã có bản thiết kế/đầu ra trong trang r026.
- [x] Hình mới được lưu vào workspace, nguồn và prompt được ghi riêng.
- [x] HTML, Markdown và thư viện cùng cập nhật.
- [ ] Vẽ/tách mái sạch alpha ở cấp pixel, không lẫn nền.
- [ ] Footprint, mesh và occlusion theo chiều sâu2.5D.
- [ ] Nội thất, animation mở cửa và di chuyển vào nhà.

## Hình ảnh và nguồn

Built-in image_gen, chế độ chỉnh ảnh. [Ảnh kết cấu dưới mái](/design-preview/v01-bridge-in-scene-r026/cottage-under-roof-r001.png) · [Prompt và nguồn](/design-preview/v01-bridge-in-scene-r026/roof-provenance.json) · [Cấu hình](/design-preview/v01-bridge-in-scene-r026/roof-layers.json).

Phần bên dưới mái là kiến trúc đề xuất, không thêm nhân vật, phe hoặc lore chính thức. Không sửa asset raster bằng script; mask/composite là lớp render tại runtime, nguồn gốc giữ nguyên.

## Kiểm chứng

[QA](/design-preview/v01-bridge-in-scene-r026/roof-qa.json) · [Ảnh kiểm tra](/design-preview/v01-bridge-in-scene-r026/roof-review.png).

Đã kiểm tra: trạng thái đóng mặc định sai khác0pixel trong vùng mái so ảnh gốc khi tắt các overlay thời tiết; mở đạt alpha0; đến gần mờ dưới27%; ra xa phục hồi100%; tải JSON đúng tên; viewport390px không tràn ngang; không pageerror. Đã xem ảnh cắt lớp và sửa lỗi sót viền ngói bằng vùng thay rộng hơn.

## Những phần chưa chốt

Mask chữ nhật có thể tạo đường nối khi nhìn kỹ chế độ cắt lớp, vì ảnh edit không đảm bảo pixel bất biến ở mép. Trích vùng này chưa đạt tiêu chuẩn sprite mái độc lập. Tự mờ gần cửa hiện là thao tác xem thiết kế, không phải người chơi đã vào nhà. Mái hiên vẫn che mưa theo cấu hình cũ dù hình mái mờ: thay đổi hiển thị không đổi vật lý. Không thay tốc độ, va chạm tường, điểm cửa, quest hoặc dữ liệu account.

Checklist lớn vẫn525=128/14/383; không đánh dấu nghiệm thu Map1/G1–G5. Đợt sau cần ưu tiên làm sạch asset mái và kiểm tra đường ghép thay vì mở thêm nhiều trang xem.
