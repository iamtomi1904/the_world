# Map 1 — Kiểm tra alpha và vật liệu cutout r017

23/10/2026 · [Bản kiểm tra sáng/tối](/design-preview/v01-bank-alpha-r017/index.html).

## Kết quả

Có lượt chỉnh alpha riêng bằng imagegen, lưu nguồn r004 và giữ nguyên r003. Lượt chỉnh hình không đủ để chứng nhận file nguồn sạch hoàn toàn. Đã bổ sung chế độ vật liệu cutout khi xem: alpha dưới ngưỡng bị loại; alpha còn lại hiển thị đục, RGB giữ nguyên. Đây là xử lý vật liệu trong bộ nhớ, không xuất đè PNG hoặc tuyên bố đã vẽ sạch từng pixel.

Ảnh trên nền sáng/tối cho thấy viền mờ được loại khỏi bản ráp khi dùng cutout. Nguồn và chế độ alpha gốc vẫn xem được để đối chiếu. Không tiếp tục lặp chỉnh hình chỉ dựa vào ảnh xem nền đen; cần đánh giá composite và giá trị alpha thực tế.

## Thông số bản thử

Ngưỡng mặc định 128/255, có thanh chỉnh 1–254. Đây là cấu hình xem thử, chưa khóa cho engine. Pixel dưới ngưỡng thành trong suốt; pixel từ ngưỡng trở lên thành đục. Những nét mảnh có alpha thấp có thể bị mất, phải kiểm tra ở kích thước chơi và mọi mức phóng cần hỗ trợ. Không áp dụng ngưỡng này lên kỹ năng, khói, nước hoặc VFX cần bán trong suốt.

Frame và socket giữ từ r016. Không sửa RGB, crop frame chỉ tách vùng nguồn khi tải. Kết quả cutout được cache, chỉ tính lại khi đổi chế độ/ngưỡng; không duyệt pixel mỗi frame. Manifest tải xuống ghi cả mode/ngưỡng hiển thị, chưa loader game.

## Số liệu thử tại ngưỡng 128

| Miếng | Pixel alpha thấp bị loại | Pixel giữ lại |
|---|---:|---:|
| Thẳng | 16.400 | 149.148 |
| Lồi | 16.282 | 152.234 |
| Lõm | 17.757 | 151.597 |

Đây là số liệu của các frame nguồn thử, không đo chất lượng mỹ thuật hoặc FPS. [Alpha QA](/design-preview/v01-bank-alpha-r017/alpha-qa.json).

## Checklist

- [x] Kiểm tra giá trị alpha thay vì chỉ nhìn ảnh trên nền đen.
- [x] Có bản gốc và cutout, giữ nguyên nguồn.
- [x] Kiểm tra composite trên nền sáng và tối.
- [x] Đổi ngưỡng/mode hoạt động, ráp mốc sai lệch 0px trong QA, chặn mốc sai.
- [x] Trang không pageerror, không tràn ngang ở 390px.
- [ ] Soi nét cỏ mảnh và răng cưa tại tỷ lệ game.
- [ ] Đồng nhất mặt cắt hai đầu, pixel density và tỷ lệ với actor.
- [ ] Kiểm tra depth, bờ với mặt nước và cao độ trong cảnh 2.5D.
- [ ] Asset bãi sỏi nối xuống vùng nông: đã có mẫu và fixture ở [246](246_MAP_V01_BAI_SOI_VA_LOI_XUONG_NUOC_CAN.md), chưa nối trong scene 2.5D.

Bước tiếp theo: thiết kế và vẽ bãi sỏi nối thấp, rồi ghép một đoạn bờ có lối xuống nước cạn. Vật liệu cutout không giải quyết collider hoặc đường đi; cần vùng nông/sâu riêng. Giữ tổng checklist 525=128/14/383; chưa duyệt production hoặc G1–G5, không sửa gameplay thủ thành.
