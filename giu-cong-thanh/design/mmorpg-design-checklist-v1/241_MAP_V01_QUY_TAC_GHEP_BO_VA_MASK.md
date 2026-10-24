# Map 1 — Quy tắc ghép bờ và mask r013

23/10/2026 · [Bản chỉnh hình dòng sông](/design-preview/v01-bank-join-r013/index.html).

## Kết quả bước này

Có bản thử hình học dùng chung điểm nối để định nghĩa các miếng bờ cần sản xuất. Dùng vật liệu cỏ r012; nước và mép là hình kỹ thuật trên Canvas. Không tạo raster mới, không báo đã có bộ bờ vẽ tay. Góc xem của công cụ là top-down để kiểm tra topology, không thay định hướng pixel 2.5D.

## Dữ liệu và ghép

Lưới 12×8 ô dùng 13×9 điểm đất/nước. Một điểm có giá trị 0 (đất) hoặc 1 (nước), các ô kề nhau đọc cùng dữ liệu. Thứ tự góc NW, NE, SE, SW tạo 16 mask. Cạnh có hai đầu khác nhau được cắt tại trung điểm. Ô chia thành bốn tam giác với giá trị tâm bằng trung bình bốn góc, cắt ở ngưỡng 0,5.

Mask 5/10 có góc nước chéo nhau được nối qua tâm. Quy tắc cố định và được lưu trong JSON. Đây có thể tạo eo nối rất hẹp; trước khi làm map thật phải kiểm tra độ rộng tối thiểu theo collider nhân vật, không tự suy rằng mọi vùng nước/đất có thể đi qua.

Hai ô chia sẻ cùng cạnh có cùng điểm cắt, không phải hai hình được vẽ độc lập rồi căn bằng mắt. Khi xuất JSON, lưu kích thước lưới, dữ liệu điểm, thứ tự góc, ngưỡng và luật chéo; không lưu hình trang trí thay collision.

## Bản thử

- Ba mẫu: sông uốn, vịnh lõm, đảo nhỏ.
- Bút thêm đất/nước trên điểm; hỗ trợ nhấp/kéo và khôi phục mẫu.
- Bật/tắt lưới và mép bờ, bảng đủ 16 mask.
- Xuất cấu trúc JSON để làm tài liệu cho editor sau này, chưa loader map gameplay.
- Chưa mặt đứng bờ, cao độ, nước sâu/nông, dòng chảy, va chạm hoặc di chuyển nhân vật.

## Hợp đồng mỹ thuật tiếp theo

Vẽ mép cỏ phủ, lớp đất đứng và chân đá thành lớp riêng. Điểm đầu/cuối mỗi cạnh giữ tọa độ chung; chi tiết tự nhiên chỉ dao động trong dải trang trí, không đổi tuyến va chạm. Không in bọt hoặc dòng nước vào hình mặt đứng. Các hướng mặt bờ cần vẽ theo camera và ánh sáng, không xoay cả ảnh có bóng để đủ hướng.

Mẫu ghép đầu tiên cần một đoạn thẳng nối góc lồi rồi góc lõm và một cửa bãi sỏi. Cần xem cả đường nối kỹ thuật và hình không lưới, đặt nhân vật cạnh để đánh giá tỷ lệ. Bãi sỏi xuống vùng nông là phần riêng, không đơn giản đổi màu bờ cao.

## Checklist và QA

- [x] Định nghĩa 16 mask và luật góc chéo.
- [x] Dựng công cụ chỉnh điểm và xuất JSON.
- [x] Kiểm tra đủ 64 cặp mask hợp lệ chung cạnh trái/phải: điểm cắt khớp trong lượt kiểm tra.
- [x] Ba mẫu, chỉnh điểm, tải JSON và bố cục 390px hoạt động; không pageerror.
- [ ] Kiểm tra thêm cạnh trên/dưới và độ liên thông với bán kính nhân vật.
- [ ] Vẽ mô-đun bờ riêng theo hợp đồng cạnh.
- [ ] Dựng mặt đứng/cao độ trong cảnh 2.5D và kiểm tra tiếp giáp nước.
- [ ] Collision sâu/nông và đường vào bãi sỏi.
- [ ] Duyệt chất lượng mỹ thuật so với r009; bản này không dùng để nghiệm thu hình.

[QA](/design-preview/v01-bank-join-r013/qa.json). Giữ tổng checklist 525=128/14/383 và chưa duyệt G1–G5. Không đổi thủ thành hoặc cốt truyện ngoài Map 1.
