# Map 1 — Đoạn cảnh sân trại tới bờ suối, r008

23/10/2026 · [Mở cảnh thử T7](/design-preview/v01-p0-scene-r008/index.html).

## Mục tiêu và bố cục

Ghép các mẫu đã tạo thành một đoạn đi được để kiểm tra quan hệ nhà, cây, đường và bờ nước. Đây là đoạn thử tỷ lệ, chưa bản đồ Map 1 hoàn chỉnh. Tái sử dụng asset mới của dự án; bước này không vẽ thêm hoặc coi các hình nháp là đã duyệt.

| Khu | Bố trí | Mục đích |
|---|---|---|
| Sân trại phía Tây | Nhà gỗ, cây ăn quả, hoa trắng/vàng, cỏ thấp | Gợi vùng được chăm sóc, cửa nhà nối đường chính |
| Bìa cây | Sồi, bạch dương, thảm lá, cỏ lá nhỏ | Chuyển từ sân trại sang đất ẩm, thân cây tránh lòng đường |
| Bờ sông | Cói/lau, liễu ở bờ Đông, sỏi và nước cạn | Nhận biết đất ẩm, để trống đầu cầu |
| Cầu đá | Hai dốc nối mặt cầu, lan can và mố | Đi qua nước sâu bằng tuyến rõ ràng |

Giữ quy ước: nước sâu là sông; nước cạn là mép nông. Tên trang dùng bờ suối theo hướng cảnh đang nghiên cứu nhưng mặt nước lớn trong fixture là sông thử, không chốt đây là con suối của bản đồ thật.

## Quy tắc ráp

1. Giữ hành lang đường chính rộng 2,3 đơn vị thử; không đặt thân cây giữa tuyến.
2. Cửa nhà có nhánh đường ra trục chính; nhà vẫn đặc, chưa có nội thất hoặc tương tác NPC.
3. Cỏ cao nằm ngoài lối; hoa thành cụm nhỏ, không phủ thảm đều.
4. Cây có gốc va chạm; tán giảm che khi nhân vật ở phía sau. Gió của các tán có lệch pha.
5. Chỉ cây sồi thử chính phát lá/rung bằng F; ba cây phụ chưa có bộ tương tác riêng. Không mô tả nhầm tất cả cây đã tương tác.
6. Không tạo vật phẩm, quái, nhiệm vụ hoặc hệ thời tiết mới ở bước ráp này.

## Kiểm tra

- [x] Nhân vật đi từ sân trại qua cầu sang bờ Đông.
- [x] Không đi thẳng qua nước sâu ngoài cầu.
- [x] Nhà chặn di chuyển.
- [x] Không có pageerror; gl.getError() = 0 trong lượt kiểm tra.
- [x] Trang không tràn ngang ở viewport rộng 390px.
- [ ] Dọn pixel/alpha của cây cỏ, cân palette và kích thước từng cụm.
- [ ] Hoàn thiện hình học bờ nước, mái/cầu và mép chuyển; hiện còn vuông và thô.
- [ ] Tương tác từng cây, tách thực thể cây khỏi fixture cây chính.
- [ ] Đánh giá mật độ, che khuất và hiệu năng trên đoạn map thật.

[Ảnh kiểm tra](/design-preview/v01-p0-scene-r008/scene-review.png) · [Kết quả kiểm tra](/design-preview/v01-p0-scene-r008/qa-r008.json).

## Tiếp theo

Thiết kế bộ mép bờ nước và mô-đun đường chuyển tiếp để bỏ cảm giác khối chữ nhật; sau đó mới rải thành một khu lớn. Hoàn thiện quy tắc ráp trước, vẽ từng mô-đun theo quy tắc đó. Giữ phong cách pixel 2D trong không gian 2.5D, không mở rộng cốt truyện ngoài Map 1.

Checklist tổng không đổi: 525 = 128 hoàn tất / 14 một phần / 383 chưa làm. Chưa nghiệm thu G1–G5 hoặc mỹ thuật sản phẩm.
