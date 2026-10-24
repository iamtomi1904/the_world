# Map 1 — Ghép bãi sỏi trong scene 2.5D r019

23/10/2026 · [Đi thử scene T8](/design-preview/v01-shore-scene-r019/index.html).

## Kết quả

Tạo T8 trong scene WebGL có camera orthographic và nhân vật billboard, kế thừa công cụ P0. Không dùng ảnh toàn cảnh làm nền giả map. Có mesh đất cao, hai vai bờ, mesh dốc ở giữa, mặt nước cạn và sâu. Collider và hàm cao độ độc lập hình bãi.

Asset bãi r018 được chiếu thử lên mesh chia 24×16 ô, alpha cutout128. Bờ thẳng r017 được lấy vùng hình để phủ lên mặt bờ hai bên. Hai cách dùng hình chỉ là kiểm tra lắp ghép: nguồn bãi đã chứa phối cảnh mặt đứng, chiếu lên mesh có thể làm hình bị nén hoặc lệch so với geometry thật. Chưa coi đây là shader/material cuối, chưa bộ bờ đầy đủ hướng hoặc mesh sản phẩm.

## Không gian và điều khiển

| Vùng | Cấu hình fixture |
|---|---|
| Đất cao | y=0,7, z≤1 |
| Lối dốc | x từ −2,3 đến 2,3; z từ 1 đến 3 |
| Cao độ dốc | y=(3−z)/2×0,7 |
| Nước cạn | z từ 3 đến 5; tốc độ ×0,8 |
| Nước sâu | z≥5; chặn từ mép bán kính chân |

Giá trị phục vụ scene thử, chưa kinh tế/cân bằng MMORPG. Bờ bên ngoài lối dốc không được nhảy xuống hoặc leo ngược; di chuyển xét chênh cao và bán kính chân. Nhân vật đổi y theo mặt đất, không chỉ đổi sprite. WASD/mũi tên hoặc pad chạm; chọn T8 để xem mẫu mới. Các trạm trước giữ vai trò tham chiếu kỹ thuật.

## Mỹ thuật cần sửa

- Nền cũ vẫn là vật liệu P0, chưa đạt toàn cảnh r009.
- Bộ bờ hai bên hiện lặp mẫu thẳng, cần xử lý nhịp lặp và vai nối với cửa bãi.
- Projection bãi lên mesh chưa tách mặt đứng, mặt đất, sỏi, decal; cần sản xuất riêng để không nhân phối cảnh hai lần.
- Chưa có che chân/lội nước, âm thanh, mái che mưa, ánh sáng môi trường cuối.
- Không thêm quái, loot, nhiệm vụ hoặc thay trò thủ thành.

## Kiểm tra

- [x] Đi từ đất cao qua dốc đến vùng cạn, y về 0.
- [x] Nước sâu chặn theo bán kính chân.
- [x] Vai bờ cao hai bên chặn lối tắt.
- [x] Cao độ tại z=1 /1,5 /2 /2,5 /3 lần lượt 0,7 /0,525 /0,35 /0,175 /0.
- [x] Tắt/bật lớp hình bãi không đổi collision.
- [x] gl.getError()=0, không pageerror trong lượt thử.
- [x] Không tràn ngang tại viewport390px.
- [ ] Kiểm tra che khuất, tỷ lệ và đường tiếp giáp ở cả ba góc camera.
- [ ] Tách lại bãi thành vật liệu phù hợp mesh, sửa vai nối.
- [ ] Duyệt hình ở native scale và đo hiệu năng thiết bị thật.

[QA](/design-preview/v01-shore-scene-r019/qa019.json). Đây là tích hợp kỹ thuật có đi lại, chưa Map 1 hoàn chỉnh hoặc nghiệm thu G1–G5. Tổng checklist giữ 525=128/14/383.

## Tiếp theo

Chốt hướng ráp địa hình: tách vật liệu mặt trên, mặt đứng, đá và cỏ để dùng trên mesh; giữ sprite cho cây/nhân vật. Sau đó làm một đoạn ngắn hoàn thiện trước khi nhân rộng bờ hoặc trang trí map.
