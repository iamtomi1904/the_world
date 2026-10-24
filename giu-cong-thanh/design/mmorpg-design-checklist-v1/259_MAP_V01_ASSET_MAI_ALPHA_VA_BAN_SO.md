# Map 1 — Asset mái alpha và bàn so: 10 hạng mục

24/10/2026 · [Mở r026](/design-preview/v01-bridge-in-scene-r026/index.html), mở mục **Asset mái riêng · alpha, tỷ lệ và so ảnh gốc**.

## Quyết định

Vẽ riêng mái ngói và ống khói theo cảnh r009/r020, nền trong suốt, không lấy cả cây và mặt tiền như vùng sửa chữ nhật ở đợt258. Bản vẽ mới chưa giống pixel tuyệt đối mái cũ nên chỉ dùng trong bàn so, không tự thay cảnh mặc định. Mục tiêu của đợt này là có asset ứng viên và đủ công cụ đánh giá, căn chỉnh trước khi tích hợp.

## Checklist 10 hạng mục

| # | Hạng mục | Đầu ra thực tế |
|---|---|---|
| 1 | Vẽ mái riêng | PNG1585×992 có mái ngói cam và ống khói đá bên trái, nền alpha; không kèm nhà/cây. |
| 2 | Kiểm tra alpha gốc | Đếm pixel trong suốt, bán trong suốt, pixel chạm viền và bounds. Phát hiện94pixel alpha>0 chạm biên, nên PNG thô chưa được nghiệm thu sạch. |
| 3 | Vật liệu alpha cứng | Tùy chọn alpha-cutoff128 tại runtime, không sửa PNG gốc. Sau cutoff có0pixel chạm biên. Có thể tắt để xem alpha nguồn. |
| 4 | Khung hình asset | Tính bounds theo alpha≥128: x73,y89,w1439,h826; dùng khung này khi vẽ để không tính padding vào kích thước mái. |
| 5 | Mốc ghép | Pivot chuẩn hóa[0.43,0.95], hiển thị chữ thập trên bản đề xuất. Là mốc căn chỉnh, chưa anchor production. |
| 6 | Vị trí và tỷ lệ | X/Y dạng số, thanh rộng170–280px; giữ tỷ lệ từ bounds và tắt smoothing. Reset về x86,y12,width224. |
| 7 | So độ che | Thanh alpha0–1 cho asset đề xuất giúp kiểm tra mái có đè mặt tiền/xà hay không. Không sửa collision. |
| 8 | So hai căn nhà cùng tỷ lệ | Bên trái mái gốc, bên phải nền cắt lớp + asset mới; cả hai dùng hệ scene800×500 và cùng cửa sổ250×190. |
| 9 | So asset độc lập | Xem riêng trên nền sáng, tối hoặc caro; phát hiện viền và độ trong suốt. Tải PNG gốc và xuất JSON vị trí + bounds + quy tắc vật liệu. |
| 10 | Gom giao diện kiểm tra | Công cụ thời tiết/va chạm nằm trong nhóm thu gọn; nút Đi tới nhà, Tới cầu và Công cụ cảnh luôn sẵn. Không thêm tab/trang. |

- [x] 10 hạng mục bản thử đã có đầu ra và công cụ hoạt động.
- [x] Ghi nguồn/prompt, cập nhật HTML và Markdown.
- [x] Kiểm tra chỉnh/reset vị trí, tải JSON và bố cục390px.
- [ ] Duyệt độ khớp mái mới với mặt tiền và góc camera.
- [ ] Làm sạch pixel nhỏ bên trong/đường viền ở mức thủ công chuyên biệt.
- [ ] Chốt asset production và thay vùng mái chữ nhật trên cảnh chính.

## Kết quả QA

[Biên bản](/design-preview/v01-bridge-in-scene-r026/roof-asset-qa.json) · [Bàn so](/design-preview/v01-bridge-in-scene-r026/roof-asset-review.png) · [Xem alpha](/design-preview/v01-bridge-in-scene-r026/roof-asset-alpha-review.png).

PNG có852276pixel alpha0,719733pixel alpha1–254 và311pixel alpha255. Phần lớn mái có alpha253; vì vậy alpha cứng128 hữu ích để tránh mái hơi trong suốt trên nền.94pixel chạm biên trong ảnh nguồn đều dưới128, bị loại ở vật liệu thử. Chỉ số0pixel chạm biên sau cutoff không chứng minh toàn bộ ảnh sạch: vẫn cần xem các pixel lẻ nằm bên trong padding, độ khớp đường viền và tính liền nét của mái.

Kiểm tra UI/JSON/mobile qua, không pageerror. Đã sửa lỗi so ảnh khác tỷ lệ nguồn: hai khung giờ cùng quy đổi về scene800×500. Không thay PNG cũ hoặc nội dung gameplay.

## File và nguồn

- [Asset PNG gốc](/design-preview/v01-bridge-in-scene-r026/cottage-roof-alpha-r002.png).
- [Nguồn và prompt](/design-preview/v01-bridge-in-scene-r026/roof-asset-provenance.json): built-in image_gen, background-extraction, transparent_background=true.
- [Manifest](/design-preview/v01-bridge-in-scene-r026/roof-asset.json).
- roof-asset-review.js thực hiện phân tích alpha, vật liệu thử, ghép và xuất cấu hình. Xử lý vật liệu là runtime, không xuất đè raster.

Đây là bàn nghiệm thu asset, chưa prefab mái production. Tổng checklist lớn525=128/14/383 không thay đổi. Chưa sửa tiến trình thủ thành hoặc database. Bước tiếp theo nên nghiệm thu và ghép bộ nhà hoàn chỉnh, không mở thêm chuỗi preview nhỏ.
