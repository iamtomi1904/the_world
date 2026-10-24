# Map 1 — Cỏ, hoa, lá rơi và rung cây

23/10/2026 · Bản thử r007. [Cảnh tương tác](/design-preview/v01-p0-scene-r007/index.html) · [Thư viện 16 mẫu](/design-preview/v01-p0-scene-r007/flora-library.html).

## Bộ hình đã tạo

| Nhóm | Mẫu | Quy tắc đặt |
|---|---|---|
| Cỏ | Thấp, đồng, cao, khô, cói/lau, lá nhỏ sát đất | Cỏ thấp ven đường; cỏ cao ngoài vùng báo đòn; cói ven suối; khô ở bờ ruộng |
| Hoa | Trắng, vàng, tím, nụ, héo, cụm thưa | Cụm nhỏ gần trại; tím ở bìa rừng; không rải đều mọi sinh cảnh |
| Lá | Sồi, bạch dương, liễu và thảm lá khô | Lá bay theo loại cây; thảm lá là decal mặt đất |

Nụ và hoa héo hiện là hình riêng, chưa có vòng đời tăng trưởng. Không thêm thu hoạch, vật phẩm hoặc chỉ số. Cây ăn quả dùng lá sồi tạm, cần mẫu lá riêng khi hoàn thiện.

## Chuyển động và tương tác

- Cỏ lắc phần trên; chân cụm giữ nguyên. Tán cây giữ chuyển động gió từ r006.
- F khi cách gốc dưới 2 đơn vị thử làm rung tán trong khoảng 1,2 giây và phát 6 lá; chế độ nhẹ phát 3 lá.
- Khoảng cách và thời gian này chỉ phục vụ fixture, chưa phải thông số gameplay.
- Lá rơi theo delta time, có tuổi thọ; tối đa 12 lá, chế độ nhẹ tối đa 4. Không tạo timer mỗi lá.
- Chuyển trạm hoặc đổi cây dọn lá đang bay. Không tích lũy lá vô hạn trên nền.
- Không thay va chạm cây, địa hình, sát thương hoặc loot. Không sinh quái bay tại Map 1.

## Đóng gói và giới hạn mỹ thuật

Nguồn tạo bằng imagegen tích hợp, lưu riêng bản r001/r002. Frame thử 64×64, pivot (32,56), thu nhỏ nearest-neighbor; giới hạn crop dựa alpha >240, giữ alpha bên trong vùng crop. Đây không phải sprite native đã được họa sĩ dọn pixel. Nguồn còn quầng màu và một số điểm thừa, đặc biệt lá liễu/cói; cần làm sạch rồi duyệt lại ở kích thước game. Không đánh dấu nghiệm thu mỹ thuật hoặc G1–G5.

## Kiểm tra đã thực hiện

- [x] Tải đủ 16 texture trong cảnh WebGL.
- [x] F gần cây: 6 lá và tán lệch rồi trở lại.
- [x] Chế độ nhẹ cắt xuống tối đa 4 lá.
- [x] Tắt gió, chờ hết vòng đời: 0 lá và độ lệch tán 0.
- [x] Không có pageerror trong lượt kiểm tra trên.
- [ ] Dọn pixel thừa/viền alpha và cân palette từng mẫu.
- [ ] Rải theo toàn bộ sinh cảnh Map 1; hiện chỉ các trạm thử.
- [ ] Đo hiệu năng và kiểm tra che khuất ở mật độ map thật.
- [ ] Hợp nhất gió/thời tiết với hệ môi trường sản phẩm sau này.

Kết quả kiểm tra: [qa.json](/design-preview/v01-p0-scene-r007/qa.json). Checklist tổng giữ 525 mục = 128 hoàn tất / 14 một phần / 383 chưa làm; bước này mở rộng bản thử, chưa tăng số mục nghiệm thu.

## Bước tiếp theo

Dọn bộ cỏ/hoa/lá tại kích thước native, cân lại tỷ lệ với nhân vật và cây, sau đó ráp một đoạn đường từ trại tới bờ suối để kiểm tra sinh cảnh và độ rõ lối đi. Chưa mở rộng cốt truyện ngoài Map 1.
