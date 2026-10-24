# Map 1 — Sửa trụ cầu trùng bằng mask bổ sung r025

24/10/2026 · [Đi thử và so hai lớp](/design-preview/v01-bridge-mask-r025/index.html).

## Vấn đề đã xử lý

r024 có trụ gần trong thân cầu, nhưng lại ghép thêm lan can rời với một bộ trụ khác. Chỉnh offset không sửa được sự trùng hình này. r025 bỏ lớp lan can rời, chỉ dùng một hình cầu nguyên từ nửa trái nguồn r002 của r024.

Đây là chỉnh cấu trúc render và mask, không tạo raster bằng công cụ khác hoặc vẽ lại ảnh. Nguồn PNG gốc giữ nguyên. Frame x0,y0,w1070,h768 lấy đủ phần cầu nguyên, tránh cắt mất mép phải như frame1024 trước.

## Quy tắc chia lớp

Chọn một polygon foreground trong tọa độ nguồn, chứa phần trụ gần và mặt vòm gần. Với mỗi pixel đục sau cutout128:

- Thuộc polygon → chỉ vẽ ở foreground.
- Không thuộc polygon → chỉ vẽ ở phần còn lại.

Hai tập bổ sung nhau, không cùng chứa một pixel. Cùng frame, scale và anchor nên không có offset làm hình lệch. Không giả lập đây là một sprite lan can mới đã được vẽ tách hoàn chỉnh; nó là vùng occlusion của cùng cầu.

Phân lớp cache khi tải hoặc đổi mask, không quét toàn ảnh mỗi frame. Kết quả source-cutout được giữ để so ghép lại. Polygon cấu hình trong bridge-mask.json; thanh dịch biên chỉ đo vùng che, không di chuyển hình cầu.

## Thứ tự render và bản thử

Nước → phần sau cầu → actor → vùng che trước. Khoảng vòm vẫn trong suốt. Actor có đi tự động hoặc A/D, mũi tên/nút chạm; chọn vị trí gần lan can để xem che chân. Đây là đường đi màn hình, chưa mesh/collision/cao độ2.5D. Nước nền chỉ minh họa, không thay môi trường r009/r020.

Điểm anchor nguồn(535,340), điểm xem(400,220); span hiển thị320 tương ứng span nguồn880. Polygon foreground và các mốc này là cấu hình fixture, chưa khóa sản phẩm. Khung 4 ảnh cho xem gốc, ghép lại, phần sau và foreground.

## Kiểm tra định lượng

Ở mask mặc định:

| Chỉ tiêu | Kết quả |
|---|---:|
| Pixel đục nguồn sau cutout | 338.514 |
| Pixel phần sau | 185.915 |
| Pixel foreground | 152.599 |
| Pixel trùng giữa hai lớp | 0 |
| Pixel nguồn bị mất | 0 |
| Pixel khác sau composite so nguồn cutout | 0 |

Cũng kiểm tra dịch biên−20/0/+20: cả ba cấu hình giữ trùng=0, mất=0, sai khác=0. Đây là phép kiểm tra trên frame nguồn đã cutout, không chứng nhận asset giống r009 hoặc mọi pixel nguồn chưa cutout được bảo toàn.

## Checklist

- [x] Loại cách ghép bộ trụ rời bị trùng.
- [x] Hai mask không giao nhau và phủ đủ hình nguồn sau cutout.
- [x] Composite lại đúng RGB/alpha của nguồn cutout trong frame.
- [x] Đi thử, tắt/bật lớp trước, xuất JSON hoạt động.
- [x] Không pageerror hoặc tràn ngang390px.
- [ ] Duyệt đường biên mask theo mép đá, không ăn vào mặt đi tại các góc.
- [ ] Kiểm tra actor ở đủ vị trí trên cầu và hai đầu nối.
- [ ] Duyệt scale/palette/silhouette cạnh cầu gốc r009.
- [ ] Mesh/collision/cao độ và nước dưới vòm trong map thật.

[QA](/design-preview/v01-bridge-mask-r025/qa.json) · [Cấu hình](/design-preview/v01-bridge-mask-r025/bridge-mask.json).

R009 vẫn là art target; r020 không đổi. Sửa xong lỗi trùng trong fixture không đồng nghĩa hoàn thiện Map1, asset production hoặc G1–G5. Tổng checklist525=128/14/383 giữ nguyên.

## Tiếp theo

Kiểm tra mốc hai đầu cầu với đường đi và bờ trong bố cục r009, sau đó thống nhất footprint/mặt đi/foreground cho cùng một prefab. Không tiếp tục tạo cầu khác để né lỗi của bộ hiện có.
