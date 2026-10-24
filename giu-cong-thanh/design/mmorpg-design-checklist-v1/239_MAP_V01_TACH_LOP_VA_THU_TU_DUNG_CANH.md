# Map 1 — Tách lớp và thứ tự dựng cảnh r011

23/10/2026 · [Trang chú giải tương tác](/design-preview/v01-layer-plan-r011/index.html).

## Mục tiêu

Chuyển art target r009 và thử hiệu ứng r010 thành brief có thể sản xuất asset riêng. Chưa tách raster, chưa vẽ asset mới ở bước này. Vùng đánh dấu trên ảnh chỉ đại diện cho nhóm, không collider chính xác hoặc toàn bộ phân bố map.

## Mười nhóm và thứ tự

| Ưu tiên | Nhóm | Phần phải làm riêng |
|---|---|---|
| P0 | Nền đất/cỏ | Ô nền và bộ chuyển tiếp, không chứa nhân vật/đồ vật |
| P0 | Bờ/sỏi | Đoạn thẳng, lồi, lõm, góc trong/ngoài, nối vùng nông và cao độ |
| P0 | Nước | Mặt nước, flow mask, gợn và bọt; vùng sâu/nông độc lập hình |
| P0 | Cầu | Deck, dốc, mố, vòm, lan can và đường đi trên cầu |
| P0 | Nhân vật | Sprite độc lập, chân và bóng theo cùng chuẩn tỷ lệ |
| P1 | Nhà | Móng, thân, cửa, mái và vùng mái che |
| P1 | Thân cây | Gốc, rễ, anchor và collider gốc |
| P1 | Tán cây | Tán có phần khuất, mask lay, nguồn lá theo loài |
| P2 | Trang trí | Cỏ, hoa, bụi, đá, hàng rào và vật dụng |
| P2 | Thời tiết | Mưa, nắng/mây, lá và âm thanh sau khi đủ layer |

P0/P1/P2 là ưu tiên sản xuất, không phải đánh giá hoàn tất.

## Cấu trúc prefab cần bàn giao

Mỗi prefab cần ID, loài/vật liệu, hình/layer, kích thước frame, pivot chân, socket, footprint, hình va chạm và cao độ; có ghi chú biến thể được phép. Những giá trị chưa duyệt để trong manifest cấu hình, không lấy kích thước ảnh làm hitbox.

Cây: gốc không đổi khi gió; thân và tán có anchor khớp. Chuyển động nhỏ ở tán, không di chuyển toàn cây. Sồi tán rộng, bạch dương thanh và cao, liễu rủ ven nước, cây quả ở khu được chăm sóc. Lá phát đúng vùng tán, pool giới hạn; không dùng chung một hình lá cho mọi loài khi final.

Nhà: mái có vùng giảm che và vùng che mưa riêng. Khi tách mái phải có nội dung đủ ở phần bị mái che, tránh lỗ trong suốt. Nhà hiện vẫn đóng, chưa thiết kế nội thất.

Cầu: mặt nước tiếp tục dưới cầu nhưng bị deck/vòm che đúng depth; không khoét mặt nước theo ảnh cầu. Di chuyển bám deck/dốc, lan can chặn, không mở đi dưới cầu khi chưa có thiết kế đường dưới.

## Render và thời tiết

Dùng vị trí chân trong không gian, chiều cao và depth để xử lý vật thể, không chỉ xếp mọi sprite theo thứ tự nhóm cố định. Nền và mặt nước trước, actor và prop được che theo depth; tán/mái có quy tắc giảm che. Hiệu ứng mưa phân biệt phía trước và sau mái, không luôn chồng lên mọi vật. Lớp sáng/mây không làm mất telegraph sau này.

r010 chỉ là chuyển động màn hình theo mask ảnh, chưa dùng thay hệ môi trường. Khi làm thật, đồng hồ thế giới/seed chung quyết định thời tiết; client vẽ chuyển tiếp. Chưa thêm ảnh hưởng chỉ số.

## Nghiệm thu trước khi ráp

- [x] Có danh mục lớp, nhiệm vụ từng lớp và ưu tiên.
- [x] Có trang chọn/lọc từng nhóm, bật/tắt chú giải.
- [ ] Nền sạch, không nhân vật nằm sẵn trong tranh.
- [ ] Asset tách có đủ phần khuất và alpha sạch, không quầng màu.
- [ ] Thống nhất pixel scale, bảng màu, nguồn sáng và tỷ lệ so với actor.
- [ ] Bộ bờ ghép được góc lồi/lõm, không lặp gãy hoặc khe hở.
- [ ] Pivot, collider, cao độ và depth có bản thử kiểm chứng.
- [ ] Gió/rung không làm trôi chân; mưa không xuyên mái.
- [ ] Kiểm tra cảnh ở kích thước chơi và thiết bị mục tiêu.

## Bước kế tiếp

Vẽ P0 nền và mép bờ trước, theo từng mô-đun dùng lại được. Một phần mẫu nên ghép thử ngay trước khi sản xuất biến thể. Không cắt ảnh toàn cảnh thành mảnh thiếu phần khuất rồi báo đã có bộ asset.

Giữ tổng checklist 525=128/14/383; đây là đặc tả sản xuất, chưa nghiệm thu asset hoặc G1–G5. Không đổi gameplay thủ thành hoặc mở cốt truyện ngoài Map 1.
