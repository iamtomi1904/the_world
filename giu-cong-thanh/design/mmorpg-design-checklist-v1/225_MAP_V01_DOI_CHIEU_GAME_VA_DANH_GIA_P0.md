# Đối chiếu game tham khảo và đánh giá scene P0

**23/10/2026 · Ý kiến thiết kế sau rà soát nguồn chính thức, ảnh scene và mã mẫu.** [Mẫu hiện tại](/design-preview/v01-p0-scene-r001/index.html). Không sửa gameplay trong lần đánh giá này.

## 1. Kết luận

**Giữ hướng sprite pixel 2D trong môi trường 3D đơn giản, nhưng chưa khóa mỹ thuật, camera hoặc tỷ lệ từ scene r001.** Mẫu đã có nền kỹ thuật để kiểm geometry/depth/cầu/dốc. Nó chưa là lát cắt mỹ thuật đủ đại diện để duyệt sản xuất hàng loạt. Không dùng điểm số giả hoặc kết quả render phần mềm làm bằng chứng hiệu năng MMO.

## 2. Tham khảo nào dùng vào việc gì

| Game / nguồn chính thức | Điều nguồn xác nhận | Áp dụng và giới hạn cho Ẩn Thành |
|---|---|---|
| [Octopath Traveler II — phỏng vấn Acquire trên Unreal Engine](https://www.unrealengine.com/developer-interviews/octopath-traveler-ii-builds-a-bigger-bolder-world-in-its-stunning-hd-2d-style?lang=en-US) | Nhân vật pixel 2D trên nền gần như toàn 3D; đội phát triển nói khó làm hai phần trông tự nhiên, cải thiện tỷ lệ đầu–thân và dùng camera cố định khi đi lại | Học thống nhất nhân vật–nền, tỷ lệ trưởng thành và bố cục định hướng. Không sao chép blur/bloom/camera sự kiện; game theo lượt không chứng minh mật độ combat MMO |
| [Star Ocean: The Second Story R — đội phát triển trên PlayStation Blog](https://blog.playstation.com/2023/10/26/how-star-ocean-the-second-story-r-modernizes-a-classic-playstation-adventure-25-years-later/) | Kết hợp 2D/3D, xây cảnh từ góc nhìn của nhân vật pixel | Học tỷ lệ môi trường tương thích actor. Giữ vật liệu pixel giản lược của dự án, không đổi sang bề mặt hiện thực |
| [Triangle Strategy — Nintendo](https://www.nintendo.com/en-ca/whatsnew/tips-for-getting-started-with-triangle-strategy/) | Chiến trường nhiều tầng, vị trí/cao độ có ý nghĩa chiến đấu | Học cách làm mép cao, đường lên và mặt đứng đọc được. Không nhập cơ chế lượt, bonus cao độ hoặc lưới chiến thuật vào combat hiện có |
| [Ravendawn — media chính thức](https://ravendawn.online/en/media) và [trang chủ](https://ravendawn.online/en/) | Có tư liệu hình MMORPG pixel và hệ hoạt động/guild combat để tham chiếu | Dùng làm đối chiếu nội dung/cách trình bày MMO; trang công khai không đủ xác nhận renderer, kích thước tile, FPS hoặc giải pháp mạng. Không khẳng định cùng pipeline 2.5D |

Những quy tắc giảm FX, ưu tiên telegraph và thử mật độ dưới đây là đề xuất của dự án; không gán chúng thành khuyến cáo từ các nhà phát triển trên. Không sao chép asset hoặc suy số pixel/camera nội bộ từ ảnh quảng bá.

## 3. Đánh giá cụ thể mẫu hiện tại

| Hạng mục | Nhận xét từ scene/mã r001 | Quyết định |
|---|---|---|
| Không gian | Geometry, depth buffer, sprite hướng camera phù hợp hướng đã chốt | Giữ hướng, chưa chọn renderer production |
| Nhân vật | Proxy ít pixel/chi tiết, chưa đọc vũ khí, mũ, trang phục hoặc animation | Cần sprite thử đúng mẫu đã chọn trước chốt zoom; không kết luận proxy là tỷ lệ art cuối |
| Camera | Có ba góc, nhưng cùng khung nhìn chưa có UI combat và nội dung đông | Giữ45° làm mốc so sánh, không tuyên bố góc tốt nhất; thử cùng một fixture và framing có ghi nhận |
| Tiếp đất | Chưa có bóng actor bám mặt đứng; quầy/cây là khối đơn giản | Thêm bóng đơn giản theo surface và mốc chân; tránh bóng kép khi có lighting |
| Nền | Ô màu và vệt chéo lặp còn rõ, chưa texture pixel native | Làm một họ cỏ–đất–đường hoàn chỉnh và vùng nền yên tĩnh trước tăng hoa/sỏi |
| Nước/cầu | Logic phân cạn/sâu và đi trên deck có; bờ, mố và trụ chưa đủ hình | Làm đường xuống cạn, chân bờ, đầu cầu và rail có silhouette rõ; không đổi collision để chiều tranh |
| Che khuất | Giảm alpha mái/tán theo khoảng gần, chưa toàn hệ occlusion | Thử nhiều actor, góc35/45/55 và vật thể cao; không fade mọi thứ theo một hộp lớn |
| Cảm giác map | Sáu fixture tách biệt, không tuyến môi trường liền mạch | Ghép một đoạn ngắn có nhà–đường–cây–suối–cầu trước mở rộng cả Bình Minh |
| Chi phí render | Mỗi ô/khối tạo dữ liệu và gọi draw riêng mỗi frame; có upload buffer lặp | Chỉ dùng cho test nhỏ; cần buffer tĩnh/batch/atlas/culling khi làm cảnh lớn, đo rồi mới chọn |
| Render pixel | Kích thước buffer theo nửa CSS, không một profile native cố định | Thử khung render chuẩn và phóng nguyên có viền/dàn UI phù hợp; chưa bảo đảm pixel-perfect |

Đây là đánh giá chuyên môn từ mẫu, không nghiên cứu người dùng hoặc benchmark thiết bị thật. Quá đơn giản là đặc tính khối thử; lỗi cần giải quyết là thiếu bằng chứng chốt art, không phải phải trang trí mọi fixture ngay.

## 4. Hướng mỹ thuật nên chốt cho dự án

**Fantasy pixel 2.5D, dáng trưởng thành, chi tiết vừa, màu nền dịu hơn nhân vật, ưu tiên chiến đấu rõ.** Giữ sprite2D và khối môi trường có texture pixel. Nhà/cây có silhouette phong phú vừa đủ, vách/dốc đọc bằng mặt đứng/mép/đường nối. Cảnh sinh hoạt nhiều chi tiết ở rìa; đường và sân giao chiến thoáng.

Không cần đạt mức điện ảnh của JRPG đơn để là MMORPG đẹp. Không tăng bloom, mờ xa hoặc sương để che nền thô. Điểm nhận diện nên đến từ kiến trúc cứu trợ, vật liệu, NPC và dấu vết Đêm Gãy Ấn, không chỉ từ lượng hạt sáng.

## 5. Thứ tự chỉnh trước khi mở rộng

1. Đưa một sprite thử đúng phong cách đã chọn vào ba bối cảnh cỏ, nhà và cầu; xem trang phục/mũ/hướng trong khung có hotbar mẫu. Chưa cần toàn bộ animation.
2. Chọn framing/zoom cùng fixture; giữ camera45° làm baseline, so với35/55, ghi điều được/mất. Không scale từng vật để bù sai camera.
3. Làm họ texture nền đầu tiên, vật liệu bờ và mô-đun mố/deck; thêm bóng chân bám đúng surface.
4. Ghép lát cắt liền mạch Trại–Suối–Cầu, kiểm vật tương tác, actor sau mái/tán và báo vùng mẫu.
5. Thử fixture1/8/24actor đã đề xuất trong38, gồm trang bị/FX giả lập có nhãn. Đo trên thiết bị thực và bản nhẹ trước nhân map. Số fixture không là giới hạn người chơi.
6. Tối ưu tổ chức buffer/batch/culling dựa trên profile; chỉ sau đó mở rộng môi trường, animation/thời tiết và sản xuất hàng loạt.

Không tăng body, sửa range, tốc đánh hoặc sát thương từ ý kiến hình ảnh. Không thay toàn bộ kiến trúc game vì một scene minh họa. Thủ thành và database giữ nguyên.

## 6. Checklist và trạng thái

- [x] Rà nguồn chính thức, phân biệt tham khảo hình ảnh với bằng chứng kỹ thuật MMO.
- [x] Đánh giá scene hiện tại và liệt kê hướng sửa theo thứ tự.
- [ ] Có sprite/texture thử đủ đại diện để chốt camera và tỷ lệ.
- [ ] Có lát cắt liên tục với tiếp đất, bờ nước và occlusion đủ rõ.
- [ ] Có đo thiết bị thực/mật độ, chưa chỉ software WebGL.
- [ ] Duyệt G1–G5 theo223 trước sản xuất diện rộng.

**Chưa đổi trạng thái G1–G5 thành đạt.** Giữ525=128hoàn thiện/14một phần/383chưa thiết kế. Hồ sơ này bổ sung nhận xét, không vẽ asset hoặc thay scene trong lượt đánh giá.
