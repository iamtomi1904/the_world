# 272 · Bình Minh — bộ mảnh chuyển tiếp và tầng địa chất r007

Ngày: 24/10/2026. Phạm vi: map MMORPG cấp 1–10, không sửa thủ thành.

## Ý tưởng đã áp dụng

Hình phác của người chơi là mảnh tiếp giáp hai môi trường. Một bộ hoàn chỉnh cần mép thẳng, chéo, cong lồi, cong lõm, chữ S, eo, đảo, vũng và nhánh. Không phóng to một hình bờ để bao cả vùng.

Các lớp: cỏ → đất ẩm → sỏi → nước cạn → nước sâu. Địa chất: cỏ/rễ → đất nâu → đá nứt phân tầng → vụn đá chân vách. Có nền 0, thềm 1/2 và lòng trũng −1 quanh ruộng.

## Checklist thực hiện

- [x] Tách hình học địa lý vào `scripts/binh-minh-geography.mjs` để tránh đường vẽ và đường di chuyển dùng hai bố cục khác nhau.
- [x] Tạo dữ liệu bờ cong, lòng suối, bờ sỏi, vùng trũng và 289 mảnh mặt vách.
- [x] Lưới navigation 5 world pixel, dùng chung server/client; giữ bố cục và phiên bản lưu vị trí 6.
- [x] Renderer vật liệu cắt theo đa giác; các mặt vách dùng chính đa giác tạo collision.
- [x] Thay mép nước ô vuông bằng nhiều lớp liên tục; ghép lớp bờ trước, nước sau tại hợp lưu.
- [x] Điều chỉnh chiều dài hình cầu gỗ và thêm lan can collision.
- [x] Tạo hai atlas raster mới: module địa chất và sáu vật liệu môi trường.
- [x] Trang HTML 72 mẫu hình chuyển tiếp, xem và tải PNG; đây là mẫu mặt nạ/vật liệu, không phải 72 sprite production được nghiệm thu.
- [x] Build TypeScript/Vite thành công; 12 kiểm thử địa hình/hầm/di chuyển qua.
- [x] Chụp map thật qua Chrome, không lỗi runtime trong lượt kiểm tra.

## Dữ liệu và tài nguyên

- Nguồn map: `public/mmorpg/maps/binh-minh.tmj`.
- Chi tiết: `public/mmorpg/maps/binh-minh-geology.json`.
- Authoring: `scripts/detail-binh-minh-r007.mjs` (chạy một lần có kiểm tra revision; bản v6 được lưu trong history).
- Vật liệu: `public/mmorpg/assets/geology-materials-r001.png`.
- Atlas module: `public/mmorpg/assets/geology-kit-r001.png`; chưa cắt toàn bộ module thành sprite riêng để dùng tất cả.
- Hiển thị gameplay: `src/mmorpg/terrain-detail-renderer.ts` và `world-renderer.ts`.
- Thư viện: `/design-preview/v01-terrain-transitions-r007/index.html`.

## Giới hạn còn lại

Map chưa đạt từng chi tiết của ảnh concept. Viền cỏ, đầu nhánh/hợp lưu, thềm quay nhiều hướng và độ lặp vật liệu còn cần polish. Thư viện mẫu chưa phải hệ autotile 47 ô hoàn chỉnh. Đồ trang trí nhỏ ở bờ không có collision; đá/cây lớn vẫn dùng collider hiện có. Không đánh dấu toàn bộ roadmap hoàn thành vì thay đổi này.

Các thông số chỉnh được trong authoring: bề rộng dòng, độ biến thiên bờ, khoảng sỏi/bờ, độ dày vách, lưới 5 pixel, hành lang dốc, sàn cầu. Thay đổi hình học phải sinh lại dữ liệu và build trước khi restart server.
