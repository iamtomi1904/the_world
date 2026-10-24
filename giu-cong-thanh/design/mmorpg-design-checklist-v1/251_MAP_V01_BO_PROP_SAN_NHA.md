# Map 1 — Bộ vật thể sân nhà r023

23/10/2026 · [Xem nguồn và bố trí quanh nhà](/design-preview/v01-courtyard-props-r023/index.html).

## Mục tiêu và mỹ thuật

Tạo bốn loại vật thể lấy trực tiếp r009 làm tham chiếu: thùng gỗ nẹp sắt, chậu hoa trắng/vàng, đoạn hàng rào thấp và cột đèn gỗ. Giữ nguồn sáng trên trái, vật liệu gỗ ấm, kim loại tối và hoa nhỏ. Không gộp chúng vào sprite nhà; vị trí và thứ tự che khuất cần độc lập.

Nguồn mới tạo bằng imagegen tích hợp, sheet2×2. Thứ tự: thùng/chậu ở hàng trên, rào/đèn ở hàng dưới. Lưu nguyên PNG và prompt, không thay hình chính r020. Dùng alpha bounds trong từng cell để xem riêng, cutout128 trong bộ nhớ; chưa dọn native pixel hoặc file asset cuối. Nguồn có vài điểm màu thừa sát viền, cần kiểm tra alpha ở kích thước chơi.

## Tỷ lệ ban đầu

| Loại | Cao thử | Vai trò |
|---|---:|---|
| Thùng gỗ | 22px | Sát tường, không chắn cửa |
| Chậu hoa | 18px | Điểm nhấn cạnh bậc cửa |
| Hàng rào | 26px | Ranh sân, chừa cửa đi |
| Đèn đứng | 60px | Đánh dấu đường vào |

Actor chuẩn thử40px. Chiều rộng prop giữ theo tỷ lệ ảnh, không bóp X/Y độc lập. Đây là cấu hình layout.json, chưa kích thước asset native đã duyệt. Thân/mái nhà kế thừa r021/r022, vẫn candidate; không mặc định việc thêm prop làm bộ nhà được nghiệm thu.

Đèn chỉ có ánh sáng vẽ trong lồng, chưa lớp ánh sáng ra nền hoặc animation lửa. Hàng rào nguồn có góc nhìn hơi chéo; cần đối chiếu hướng đặt trong map, không lật/xoay tùy ý làm ánh sáng sai.

## Bố trí sân

Bàn thử800×500 có nhà ở sau, năm instance từ bốn loại asset: một thùng, một chậu, hai đoạn rào và một đèn. Các hình được sắp thứ tự theo điểm chân. Actor là thước đo tĩnh, chưa có di chuyển trong công cụ này.

Hành lang cửa x380,y260,w40,h150 chỉ là vùng thử. Để trống trước cửa và giữa hai hàng rào. Không bố trí thùng cạnh mép bậc làm khó đọc lối vào. Đèn đặt lệch ngoài hành lang, không che tầm nhìn chính. Chậu hoa tạo nhịp nhỏ, không phủ kín sân.

Có kéo bằng chuột/chạm, chọn instance, nhập tọa độ, khôi phục và tải JSON. Cảnh báo lấn lối dùng bounding box hình và hành lang, không phải collision gameplay. JSON chứa nguồn, cấu hình tỷ lệ, instance, vùng cửa và crop nguồn; chưa editor hoặc loader map sản phẩm.

## Kiểm tra và checklist

- [x] Vẽ bốn loại nguồn riêng theo r009.
- [x] Xem từng mẫu và so cạnh nhà/actor cùng tỷ lệ thử.
- [x] Bố trí mặc định không lấn hành lang cửa.
- [x] Đưa thùng vào hành lang xuất hiện cảnh báo; khôi phục hết cảnh báo.
- [x] Kéo vật thể, xuất JSON, không pageerror và không tràn ngang390px.
- [ ] Duyệt palette/pixel density/silhouette ở kích thước game.
- [ ] Chuẩn hóa pivot chân và dọn pixel thừa.
- [ ] Tạo bóng tiếp đất phù hợp, vùng chắn của prop lớn riêng hình vẽ.
- [ ] Biến thể hướng rào và cách nối giữa các đoạn.
- [ ] Ánh sáng đèn theo thời tiết/giờ, chưa thêm vì chưa có thiết kế cuối.
- [ ] Tích hợp với cảnh chỉ sau khi bộ nhà và prop đạt yêu cầu hình.

[QA](/design-preview/v01-courtyard-props-r023/qa.json) · [Layout](/design-preview/v01-courtyard-props-r023/layout.json) · [Prompt/nguồn](/design-preview/v01-courtyard-props-r023/provenance.json).

R009 tiếp tục là chuẩn, r020 giữ nguyên. Khung sân là bàn thử bố cục, không thay map bằng nền trống. Giữ tổng525=128/14/383; chưa production/G1–G5, không đổi thủ thành.

## Tiếp theo

So một cụm nhà cùng prop với đúng vùng sân trong r009, sửa kích thước/độ chi tiết còn lệch trước khi làm thêm nhà hoặc rải khắp map. Tách phần sáng đèn và bóng chỉ sau khi hình tĩnh được kiểm tra.
