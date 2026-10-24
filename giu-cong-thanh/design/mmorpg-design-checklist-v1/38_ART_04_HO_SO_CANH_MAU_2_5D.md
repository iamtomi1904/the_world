# ART-04 — Hồ sơ cảnh mẫu 2.5D “Lối Cầu Bình Minh”

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0  
**Trạng thái:** Đã thiết kế bố cục, ma trận đối chiếu và đầu ra cần dựng. Chưa có scene render/scene chơi được, model, sprite mới hoặc kiểm thử.  
**Phạm vi:** Chỉ MMORPG. Sơ đồ là tài liệu thiết kế, không thay map thủ thành hoặc map phát hành.

## 1. Mục đích và bối cảnh

Một lối vào ngoại vi Bình Minh, nơi đường tuần tra qua con suối và một tuyến cầu cao nối sân kho cũ. Nhà gác, vết sửa đường, cây ven nước và bia chỉ đường tạo cảm giác nơi có người sinh sống. Đây là mảnh thử kỹ thuật cùng thế giới Ẩn Thành, không thêm quest/chính sử bắt buộc hoặc mở vùng thứ sáu.

Mục đích là chọn phối cảnh, giữ pixel V4 và phát hiện vấn đề chân người/ngựa, nhiều tầng, che khuất và effect trước sản xuất hàng loạt. Không cần quest, loot, shop, database hoặc kinh tế trong mẫu.

![Sơ đồ cảnh mẫu 2.5D](/design-preview/art04-scene-v1/scene-layout.svg)

## 2. Kích thước và cấu trúc bố trí

Chọn khu thử 48×32 module. Quy ước 1 module = 1u trong hồ sơ này; texture tham chiếu 32px không làm 1u tự bằng 32 đơn vị combat. Đây là kích thước mẫu trợ lý chọn để chứa các tình huống, không phải ngân sách map thật.

Tọa độ sơ đồ x tăng sang phải, y xuống dưới. Cao độ thấp Z=0, cao độ trên Z=H. H cần chọn qua graybox theo chiều cao đơn vị cưỡi ngựa cộng khoảng thông cần thiết, không tự lấy một số pixel cho khoảng lọt cầu.

| Khu | Module tham chiếu | Nội dung và câu hỏi cần trả lời |
|---|---|---|
| A | Dải y13–19 | Đường phẳng đủ đi bộ/ngựa, nền ít chi tiết; tỷ lệ thân và vũ khí rõ không? |
| B | x4–14, y3–9 | Dốc lên sân cao, có đường viền/điểm vào; chân bám dốc hay nổi? |
| C | x14–36, y2–11 | Sân cao hai phía, mặt cầu nối; nhìn ra đường lên/xuống không? |
| D | x18–32, y6–9 | Cầu cao; thấy lan can, mặt đi và trụ mà không che hết người? |
| E | x22–28, y2–14 | Lối dưới cầu và lòng suối; phân biệt nền đi được với nước sâu. |
| F | x3–12, y22–29 | Nhà gác có mái/tường trước để thử giảm che khuất. |
| G | Ba cụm cây ở nửa dưới | Thử tán, thân và vật cản; cây có nơi mọc hợp lý, không rải vào dốc/cầu. |
| H | x32–46, y20–30 | Sân combat để quan sát ba body, ngựa/cánh, quái bay và hiệu ứng. |

Hai bờ cao nối mặt cầu ở Z=H; lối dưới đi liên tục ở Z=0. Suối qua đường chính phải có cầu/cống nền hợp lệ; sơ đồ mặt bằng chỉ đánh dấu giao nhau, không cho nhân vật đi xuyên nước sâu. Nước cạn có bề mặt đi được riêng khi luật môi trường cho phép. Không đặt điểm thử trong vùng kẹt giữa trụ và bờ.

## 3. Ba phương án camera

Giữ camera trực giao, phương ngang cố định theo trục cảnh, không cho xoay tự do ở mẫu đầu. So nghiêng 35°, 45°, 55° đo từ mặt đất. Góc thấp thấy mặt vách nhiều hơn nhưng có thể che đường; góc cao thấy lối đi nhiều hơn nhưng cần kiểm hình sprite. Đây là giả thuyết cần quan sát, không kết quả đã đo.

So ở cùng độ cao body chiếu tham chiếu 40px tại khung logic 960×540. Điều chỉnh framing để so khả năng đọc, ghi lại ortho scale và phần diện tích nhìn thấy; không hứa vừa cùng số pixel body vừa cùng diện tích đất ở mọi góc. UI/chữ không đưa vào ảnh render thế giới.

Các điểm chụp cố định: A nhìn người trên đường, B đầu dốc, D người trên cầu, E người dưới cầu, F sau mái, H ngựa mở cánh/AoE. Không chọn camera chỉ từ một góc ảnh đẹp ở sân phẳng.

## 4. Hợp đồng asset tối thiểu cho mẫu

| Nhóm | Mẫu cần có | Giới hạn |
|---|---|---|
| Nhân vật | Một Tân Binh Con Người làm chuẩn; thêm Elf/Lùn để kiểm thân. | Hình mới, không lấy asset thủ thành; chưa cần đủ 19 nhánh. |
| Người cưỡi | Một bộ Thánh Kỵ Sĩ và một bộ Hắc Kỵ Sĩ trên cùng họ ngựa nền. | Xem khác motif; không cần toàn bộ trang bị hiếm. |
| Ngựa | Một body ngựa, yên/giáp, profile cánh Thánh/Hắc. | Profile khác con ngựa sẽ làm sau khi cách neo đã ổn; không báo đã đủ hệ thú. |
| Quái | Một quái mặt đất và một quái bay mẫu. | Có điểm chân/bóng; chưa thiết kế thêm bảng boss. |
| Cảnh | Một họ đất/cỏ, nước/bờ, vách/dốc, cầu/trụ, nhà/mái, cây/đá. | Module khối đơn giản, texture V4; không trang trí kín trước khi chốt tỷ lệ. |
| Hiệu ứng | Một đòn chém, một projectile, một vòng AoE/aura và icon trạng thái. | Tình huống thử hình/phân tầng; chưa phải kỹ năng gameplay hoàn thiện. |

Trước hết dùng khối thay thế rõ nhãn để chọn không gian; hình pixel mới chỉ làm ở bước tiếp theo. Không coi capsule/placeholder là asset hoàn thành.

## 5. Các lượt đối chiếu cần thực hiện sau

### Lượt A — không gian và tỷ lệ

Đi cùng một đường từ A lên B, qua D, quay xuống E. Ghi bề mặt đứng và điểm chân trong chế độ debug dành riêng mẫu. Tại E vẫn thấy mặt cầu phía trên, không đặt actor nhầm lên nó khi click. Dốc và bậc không làm sprite đổi kích thước theo vị trí trong camera trực giao.

### Lượt B — sprite và vật che

Chạy bốn hướng và đường chéo, dừng/đánh cạnh nhà/cây/vách. So ảnh tắt/bật cơ chế giảm che khuất. Người chơi có dấu nhận biết khi bị mái che; không hiện toàn bộ địch xuyên vật cản ngoài luật. Vũ khí không đổi tay, chân không rung vì trim.

### Lượt C — ngựa và cánh

Lên/xuống ngựa, chạy dốc, đứng dưới cầu và mở profile cánh. Bề mặt đi lại dựa collider hợp lệ; cánh mang tính hình ảnh không mắc vào lan can hoặc tăng hitbox. Cần xem độ cao lọt cầu cho ngựa/người; không để đầu xuyên mặt cầu rồi che bằng fade.

Nếu pose cánh chạm cảnh, có thể gập cánh khi di chuyển chỗ hẹp theo profile hình mà vẫn giữ nội tại; không tự tắt quyền skill hoặc đổi chỉ số. Quy tắc này cần animation tương ứng, không cắt alpha theo mép cầu.

### Lượt D — tầng và VFX

Đặt hai mục tiêu có vị trí màn hình gần nhau nhưng khác bề mặt. Projectile/AoE hiển thị bề mặt đích; không áp vòng ground lên mặt cầu và nền dưới đồng thời trừ khi cơ chế cho phép. Nếu mẫu chỉ trình diễn hình, ghi rõ chưa kiểm damage server; không dùng nó chứng minh combat authoritative đã đúng.

### Lượt E — mật độ và pixel

Mẫu đông gồm các mức fixture 1/8/24 actor nhìn thấy, có/không cánh và VFX. Đây là thang so sánh tải, chưa là giới hạn người chơi hoặc cam kết FPS. Ghi thiết bị, trình duyệt, độ phân giải và phiên bản mẫu trước đo; không bịa kết quả. Camera đứng yên/di chuyển chậm cần kiểm rung pixel, viền alpha và nhấp nháy bề mặt.

## 6. Bảng chọn phương án

Mỗi tiêu chí chấm 0–3: 0 lỗi chặn, 1 khó đọc, 2 đạt ở tình huống cơ bản, 3 rõ ở cả tình huống khó. Các ô kết quả để trống cho đến khi có ảnh/clip thực.

| Tiêu chí | 35° | 45° | 55° |
|---|---|---|---|
| Đọc body/vũ khí ba chủng tộc | Chưa đo | Chưa đo | Chưa đo |
| Thấy đường dốc, cầu trên/lối dưới | Chưa đo | Chưa đo | Chưa đo |
| Mái/cây không giấu thông tin quan trọng | Chưa đo | Chưa đo | Chưa đo |
| Ngựa/cánh đúng tỷ lệ và không crop | Chưa đo | Chưa đo | Chưa đo |
| VFX/target đúng mặt, dễ đọc | Chưa đo | Chưa đo | Chưa đo |
| Pixel ổn định khi camera chuyển động | Chưa đo | Chưa đo | Chưa đo |

Không chọn bằng tổng điểm nếu có lỗi chặn: tầng sai, actor chìm/nổi, không thấy báo đòn hoặc cánh bị cắt. Có thể chỉnh bố cục/camera rồi đối chiếu lại, không buộc chọn phương án ít lỗi nhất nhưng vẫn không dùng được.

## 7. Đầu ra để đóng ART-04

Cần camera profile thực tế, ảnh/clip tại sáu điểm, bảng kết quả theo tiêu chí, một gói sprite/atlas/metadata, mẫu geometry/texture nối và quy tắc alpha/depth đã chọn. Từ đó sửa thông số tạm trong hồ sơ 35/36/37 và lập ngân sách sản xuất thực tế.

Hiện đã có hồ sơ và sơ đồ bố trí, chưa có năm nhóm đầu ra đã kiểm chứng nêu trên. ART-04 tiếp tục thiết kế một phần. ART-01/02 vẫn một phần; không tick MAP, MOUNT, COMBAT hoặc ASSET từ cảnh mẫu trên giấy.

Tiến độ giữ **12 hoàn thiện, 6 một phần, 495 chưa thiết kế / 513 mục**. Việc tiếp theo trong chuỗi ART-04 là chọn công cụ cho mẫu và dựng graybox nếu chủ dự án yêu cầu triển khai; còn ở phạm vi thiết kế có thể tiếp tục ART-05 về ký hiệu/màu, giữ camera và pipeline ở trạng thái chưa xác nhận.
