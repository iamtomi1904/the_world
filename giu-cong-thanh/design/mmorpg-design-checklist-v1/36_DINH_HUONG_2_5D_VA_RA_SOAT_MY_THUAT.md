> **Tham khảo và điều chỉnh ART-04 V2:** [Hồ sơ 37](37_ART_04_THAM_KHAO_GAME_2_5D.md) bổ sung nguồn game chính thức, phân biệt tile texture với module 3D, camera profile và cổng kiểm chứng. Quy tắc ở hồ sơ 37 thay mô tả cũ khi xung đột.

# Định hướng 2.5D và rà soát thiết kế MMORPG

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0  
**Nguồn:** chủ dự án yêu cầu game 2.5D. Cách dựng cụ thể dưới đây là phương án thiết kế trợ lý đề xuất theo ủy quyền, chưa phải lựa chọn engine hoặc mẫu hình đã được xem duyệt.  
**Phạm vi:** MMORPG; giữ nguyên thủ thành. Chưa sửa runtime, tạo model, shader hoặc asset.

## 1. Kết luận

Phong cách pixel fantasy V4 chi tiết vừa vẫn phù hợp 2.5D. Màu, silhouette, vật liệu, tỷ lệ chủng tộc và hướng nhận diện class giữ được. Tuy nhiên các quy tắc top-down 2D phẳng, tile ảnh 32px đồng nhất với hình mặt đất và xếp toàn cảnh chỉ theo ground.y không đủ cho không gian có nhiều tầng.

Chọn hướng thiết kế mục tiêu: **sprite nhân vật 2D trong môi trường khối 3D đơn giản, texture pixel, camera trực giao góc cố định**. Đây là cách cụ thể hóa 2.5D cho dự án, không phải định nghĩa duy nhất của 2.5D. Nếu sau này chọn toàn cảnh 2D giả chiều sâu, phải ghi thành thay đổi kiến trúc thay vì gọi hai cách là cùng một pipeline.

Không chuyển sang nhân vật 3D hiện thực hoặc góc camera xoay tự do. Không chuyển mặt đất sang ảnh hình thoi chỉ vì gọi là 2.5D: lưới thế giới vẫn vuông, hình chiếu quyết định nó trông thế nào trên màn hình.

## 2. Camera và hướng hình

Đề xuất camera trực giao nhìn xiên xuống khoảng 45 độ, phương ngang thẳng theo trục bản đồ ở mẫu đầu; khóa xoay và góc nghiêng trong gameplay. Góc chính xác phải kiểm bằng scene mẫu có người, ngựa, nhà và cầu trước khi sản xuất hàng loạt, không lấy 45 độ là thông số đã được kiểm chứng đẹp nhất.

Giữ bốn hướng sprite trong giai đoạn thiết kế hiện tại vì camera cố định. Di chuyển tám hướng chọn sprite phù hợp hướng chiếu; aim/projectile có vector độc lập. Không mở xoay camera vì bốn hướng không đủ biểu hiện mọi góc. Nếu mẫu cho thấy đi chéo quá lệch hình, đánh giá tám hướng cùng chi phí trước ART/ASSET sản xuất, không mặc định đã có tám hướng.

Sprite đứng là mặt phẳng hướng camera có chân neo vào thế giới, không nằm phẳng như decal đất. Chọn cách dựng billboard và tỷ lệ bù hình theo camera qua mẫu; không nghiêng sprite hai lần theo mặt đất khiến người bị ép thấp. HUD/portrait là lớp màn hình riêng.

## 3. Phong cách V4 giữ và sửa những gì

| Thành phần | Kết luận |
|---|---|
| Pixel fantasy, chi tiết vừa, mảng vật liệu rõ | Giữ; tránh bề mặt 3D bóng mịn hoặc phản xạ hiện thực lệch sprite. |
| Body Con Người khoảng 40px, Elf/Lùn theo ART-02 | Giữ làm mật độ thiết kế ở camera chuẩn, không coi là chiều cao cố định trên mọi zoom. |
| Silhouette 7 nghề/19 nhánh | Giữ; phải xem trên nền cảnh 2.5D và khi đi sát vật thể. |
| Module 32×32 | Giữ làm ô texture/pixel tác giả và đơn vị thiết kế module; không còn hứa một ô đất chiếu lên màn hình luôn 32×32px. |
| Atlas, sourceSize, trim, socket | Giữ cho sprite/VFX 2D; model môi trường có transform/mesh riêng. |
| Chỉ xếp depth theo chân y | Thay bằng depth không gian cho cảnh; thứ tự layer người/ngựa vẫn cần xử lý nội bộ. |
| Núi/vách chỉ vẽ mặt đứng/bóng | Sửa: có khối cao độ, mặt đỉnh, vách, đường dốc và dữ liệu đi lại. |
| Ảnh mẫu V4 | Giữ làm moodboard màu/chi tiết; chưa chứng minh phối cảnh 2.5D mục tiêu. |
| Skill, class, SP/TP, vật phẩm, PostgreSQL | Giữ quy tắc nghiệp vụ; bổ sung dữ liệu bề mặt/cao độ nơi ảnh hưởng gameplay. |

Không vẽ lại toàn bộ nhận diện vì đổi cách dựng không gian. Nhưng không cắt ảnh concept V4 thành texture/model hoặc báo đã có bộ 2.5D chỉ nhờ bật bóng.

## 4. Bản đồ và cao độ thực

Thế giới dùng trục X/Y trên mặt đất và Z cao độ. Điểm actor gồm vị trí, mặt/bề mặt đang đứng và cao độ; quy ước này là hợp đồng thiết kế, tên trục có thể ánh xạ khi chọn engine.

Một tọa độ mặt đất có thể có đường dưới và cầu trên: không chỉ một số height cho mỗi ô. Mỗi bề mặt đi được cần ID tầng/surface và các kết nối như dốc, cầu thang, cửa chuyển tầng. Không cho click trên cầu nhưng nhân vật chạy xuống sông vì chọn sai mặt.

Nước sâu/cạn, băng, dung nham, rừng rậm và vùng nguy hiểm gắn vào bề mặt gameplay. Hình texture không tự cấp hiệu ứng. Vùng báo đòn bám đúng mặt đất/dốc, không chiếu xuyên cầu làm người dưới tưởng bị đánh ở tầng trên.

Nhà, núi và tường là khối đơn giản có mặt trên/mặt đứng; cây có thể dùng sprite dựng đứng hoặc khối đơn giản theo cảnh, nhưng phải cùng mật độ pixel và cách che khuất. Module vẫn ghép vùng lớn, không scale một mảng môi trường nhỏ. Mái/tường trước có chính sách mờ hoặc ẩn khi che người, không ẩn luôn collision.

## 5. Combat và hiệu ứng trong chiều sâu

Server cần quyết định mặt đứng, khoảng cách chiến đấu, đường nhìn và chênh cao hợp lệ. Không tính trúng đòn chỉ vì hai sprite chồng trên màn hình. Công thức sát thương và range đã chốt không tự thay; cách đo/phân tầng phải được COMBAT đặc tả trước lập trình.

Projectile có vị trí/đường bay trong thế giới; hiệu ứng trình bày không quyết collision. Đạn dưới cầu không mặc định đánh người trên; xuyên tầng/xuyên tường chỉ khi kỹ năng cho phép. AoE cần quy tắc tầng đích và độ chênh cao, chưa tự cho hình tròn ăn cả mọi tầng.

Tách cao độ nền, độ nhấc hình khi nhảy và trạng thái bay gameplay. Cánh ngựa theo hồ sơ 34 vẫn là tiến hóa thị giác, chưa cấp bay tự do. Người/ngựa/cánh nằm trong một cấu trúc có anchor nền, không dùng cánh mở để tăng collider. Mọi skill báo đòn quan trọng phải rõ trước vật thể che khuất theo ART-05/06.

## 6. Pixel, ánh sáng và bóng

Render cảnh thế giới qua độ phân giải tham chiếu thấp rồi phóng nearest-neighbor; UI chữ độc lập. Mật độ texture thống nhất, không một bức tường có pixel mịn gấp nhiều lần nhân vật. Di chuyển camera trong không gian 3D có thể gây rung/nhấp nháy pixel nên chưa cam kết pixel-perfect trên mọi độ phân giải; cần mẫu kiểm trước khi chốt renderer.

Bề mặt dùng ít sắc độ, ánh sáng gọn; không thêm bloom mạnh, vật liệu bóng gương hoặc sương mịn mặc định. Sprite có thể dùng ánh sáng vẽ sẵn hoặc nhận tint có kiểm soát; phải chọn một quy trình nhất quán sau mẫu để tránh bóng/độ sáng kép.

Mỗi actor có một giải pháp bóng nền nhất quán. Không cộng blob shadow đậm với bóng động đậm thành hai bóng. Bóng trên cầu/dốc bám đúng bề mặt; quái bay vẫn có dấu định vị cần thiết.

## 7. Ảnh hưởng nền tảng và engine

Web desktop và client PC vẫn là mục tiêu; PostgreSQL vẫn giữ dữ liệu qua backend. Không mặc định engine thủ thành phải được dùng cho MMORPG hoặc đã đáp ứng môi trường 3D chỉ vì source hiện tại chạy được 2D.

Lựa chọn engine/rendering cần đánh giá mẫu nhỏ về sprite trong cảnh 3D, tải chunk, che khuất, projectile, ngựa/cánh, thiết bị web và gói PC. Chưa chọn thư viện hoặc phiên bản, chưa hứa chuyển engine không tốn công. Không nghiên cứu tài liệu engine trong đợt này vì đang chốt yêu cầu thiết kế, không đưa ra khẳng định khả năng của sản phẩm cụ thể.

## 8. Mẫu cần làm trước sản xuất hàng loạt

Một scene duy nhất gồm đường phẳng, dốc lên bậc cao, cầu có đường đi bên dưới, một nhà/mái, cây, nước và sân combat. Có ba body chủng tộc, một Kỵ Sĩ cưỡi ngựa mở cánh, một quái bay và projectile/AoE qua hai tầng. Mẫu dùng asset mới phục vụ kiểm chứng, chưa cần mở cả năm vùng.

Điều kiện chốt: tỷ lệ body/ngựa đọc tốt; pixel không rung gây khó chịu; cầu phân tầng đúng; mái/cánh không che báo đòn; bốn hướng đủ dùng; web/PC cùng kết quả logic. Không tuyên bố các tiêu chí đã đạt trong tài liệu này.

## 9. Trạng thái checklist sau rà soát

ART-01, ART-02 và ART-04 chuyển sang **thiết kế một phần** vì phối cảnh, tỷ lệ chiếu, topology cao độ/depth và pipeline kỹ thuật cần được xác nhận bằng mẫu 2.5D. ART-03 vẫn hoàn thiện đặc tả nhận diện; nghiệm thu hình thật chưa làm và không suy ra từ checkbox này.

Không hoàn thiện thêm task bằng đổi tên. Tổng hiện hành **12/513 mục hoàn thiện, 6 mục một phần, 495 mục chưa thiết kế**. Sáu mục một phần: ART-01/02/04 và SKILL-03/05/06. Ưu tiên tiếp theo là mẫu camera/phối cảnh 2.5D và hồ sơ ART-01/02/04 cập nhật, rồi mới tiếp tục ART-05 hoặc sản xuất toàn bộ sprite.
