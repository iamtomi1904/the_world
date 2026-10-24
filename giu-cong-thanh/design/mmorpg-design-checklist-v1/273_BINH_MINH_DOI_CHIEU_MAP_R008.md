# 273 · Bình Minh — sửa map theo ảnh thiết kế r008

24/10/2026 · Phạm vi: bản đồ MMORPG cấp1–10. Giữ nguyên thủ thành, nhân vật và tiến trình PostgreSQL.

## Chuẩn đối chiếu

Ảnh `public/design-preview/v01-complete-map-r001/binh-minh-full-map-r001.png` và 12 vùng trong `map-design.json`. So sánh bằng ảnh Phaser thực tế, không đánh giá chất lượng mỹ thuật chỉ qua kiểm thử collision.

## Các phần đã sửa trực tiếp trong gameplay

1. **Sông/suối:** hai suối có nhiều điểm uốn; đoạn rộng/hẹp thay đổi, nhánh trên có vùng nước cạn mở trước hợp lưu. Nhánh dưới vòng qua làng và ruộng rồi nhập sông. Sông chính giữ chiều dọc phía đông và cầu đá ở giữa.
2. **Mép nước:** bờ đất ẩm, bãi sỏi, nước cạn và rìa chuyển sang lòng sông sâu; các lớp hình học được ghép theo thứ tự tránh đầu suối hình chữ nhật phủ lên sông. Có đá và cụm cây nhỏ ven bờ.
3. **Thềm cao:** dùng atlas có cỏ/rễ/đất/đá trên các mặt vách; hướng khuất chuyển sang sườn cỏ thay cho vòng tường đá đồng nhất. Mặt vách và collision dùng cùng đa giác.
4. **Lối lên:** năm cụm bậc đặt tại đường lên thềm; thêm chi tiết bậc ở mặt dốc hướng trước. Hành lang dốc vẫn được tính bởi đường, không do kích thước hình trang trí.
5. **Trại:** thêm31đoạn rào men mép thềm, chừa cổng tại đường đi. Thu nhỏ phần sân trống, bổ sung cụm hoa/cỏ, đá, thùng và chậu tại các góc sinh hoạt.
6. **Làng:** sân tân thủ gọn hơn, giữ nhà ở/nhà trọ/kho khác nhau và đường vòng, thêm đồ sinh hoạt gần nhà.
7. **Ruộng:** giữ bốn ô lớn và mương nối suối, lối giữa và đường bao; bỏ nền cỏ mới bị lộ đường lặp trong lòng trũng.
8. **Cây:** đổi53cây liễu thành sồi/bạch dương để bờ nước có nhiều tầng và loại cây; giữ rừng nền và vườn cây quanh làng.
9. **Điểm khám phá:** có vòng đá tại bãi trống đông bắc, giữ ngoại cảnh riêng và đường vào của ba hầm.
10. **Đường và dữ liệu:** đường vẽ theo navigation5pixel thay vì lấy mép ô15pixel. Giữ version vị trí nhân vật6 để không chạy lại migration bố cục.

## Kiểm tra

- Build TypeScript/shared/Vite thành công.
- 19/19 kiểm thử: địa hình, đường tới các landmark, hầm, replay di chuyển, lan can và đi xuyên toàn chiều dài cầu đá/cầu gỗ.
- Chrome: ảnh tổng quan và10góc cận cảnh; lượt kiểm tra không lỗi runtime.
- Đo với phản hồi input trễ thêm160ms:121frame, p95≈18,32ms,0frame giật lùi,4086scene node. Kết quả phụ thuộc thiết bị và cảnh; không đại diện mọi máy.
- Web và clientPC tải chung map/server; không cần đóng gói lại EXE cho thay đổi nội dung này.

## File chính

`scripts/binh-minh-geography.mjs`, `scripts/detail-binh-minh-r008.mjs`, `scripts/finish-binh-minh-r008.mjs`, `scripts/create-binh-minh-map.mjs`, `src/mmorpg/terrain-detail-renderer.ts`, `src/mmorpg/world-renderer.ts`, TMJ và geology/runtime JSON, `test/mmorpg-reference-r008.test.mjs`.

Ảnh và trang đối chiếu: `/design-preview/v01-reference-map-r008/index.html`. Bản r007 vẫn được giữ để tra cứu vật liệu; không dùng ảnh r007 làm ảnh đại diện map mới.

## Trạng thái chất lượng

Đã triển khai các chỉnh sửa trên vào bản chơi. Giữ ảnh concept làm chuẩn tiếp tục đối chiếu; không tuyên bố tái tạo pixel-một-một. Những chi tiết nhỏ như từng khe đá, từng bụi cỏ và từng hình nhà của concept chưa có asset tương ứng hoàn toàn. Nội dung NPC/nhiệm vụ/chiến đấu MMORPG không nằm trong lần sửa map này.
