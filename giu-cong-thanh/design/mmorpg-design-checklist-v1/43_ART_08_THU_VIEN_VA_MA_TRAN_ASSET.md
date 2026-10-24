# ART-08 — Thư viện hướng dẫn và ma trận sản xuất asset MMORPG

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0  
**Trạng thái:** Hoàn thiện thiết kế danh mục, phụ thuộc và quản lý nguồn. Đây là sổ kế hoạch; chưa sản xuất toàn bộ asset hoặc kiểm kê file production.  
**Phong cách:** 2.5D pixel V4; nhân vật sprite 2D, môi trường khối đơn giản/texture pixel. Thủ thành giữ nguyên.

## 1. Trạng thái thiết kế và trạng thái sản xuất là hai trục

Checklist 513 mục theo dõi hồ sơ thiết kế, không đếm sprite đã vẽ. Mỗi gói asset cần bốn cột riêng:

| Cột | Giá trị hợp lệ | Bằng chứng để ghi hoàn tất |
|---|---|---|
| Thiết kế | Chưa / Một phần / Hoàn thiện | Hồ sơ có phạm vi, kích thước, nhận diện, hành vi và đầu vào rõ. |
| Sản xuất hình | Chưa / Concept / Đang làm / Đủ phạm vi | File nguồn và ảnh/model/texture đủ biến thể, hướng và clip trong phiếu. |
| Tích hợp | Chưa / Đang làm / Đã gắn | Asset được dùng đúng trong scene/UI đích, metadata và quyền nội dung khớp. |
| Kiểm chứng | Chưa / Không đạt / Đạt theo phạm vi | Kết quả thực tế, phiên bản và tình huống kiểm, lỗi còn lại. |

Không tự chuyển các cột sau khi tick cột trước. Concept V4 là tài liệu phong cách; wireframe/SVG là sơ đồ; cả hai không phải sprite gameplay đã tích hợp. Asset có Idle nhưng thiếu Attack không ghi Đủ phạm vi nếu phiếu yêu cầu cả hai. Các trạng thái runtime/database không được tạo chỉ vì có tên trong sổ.

## 2. Thư viện hướng dẫn chuẩn

| Phạm vi | Tài liệu áp dụng |
|---|---|
| Màu, chất liệu, độ chi tiết | ART-01 và moodboard V4; cập nhật 2.5D hồ sơ 36. |
| Body và tỷ lệ môi trường | ART-02; thông số chiếu camera còn chờ mẫu. |
| Race/nghề/nhánh và vũ khí | Hồ sơ 28/32/33. |
| Kỵ Sĩ, giáp ngựa, cánh | Hồ sơ 34; không lấy dạng R thủ thành làm chuẩn. |
| Frame/atlas/anchor/module 3D | Hồ sơ 35/36/37 và cảnh mẫu 38; phần chưa xác nhận phải ghi trên phiếu. |
| Màu quan hệ/hiệu ứng | Hồ sơ 39/40. |
| Mức gọn và ưu tiên hiển thị | Hồ sơ 41. |
| Portrait/avatar/icon/loading | Hồ sơ 42. |

Mỗi phiếu ghi phiên bản tài liệu đang dùng; khi chuẩn đổi phải xác định asset nào bị ảnh hưởng. Không đồng loạt vẽ hàng nghìn frame trong khi camera/pipeline vẫn mở.

## 3. Cấu trúc danh mục

| Họ | Nội dung cần lập phiếu | Không được bỏ sót |
|---|---|---|
| Body nhân vật | Body race, tùy biến đầu/tóc/mặt, trạng thái/hướng. | Tay cầm, hurt/death, lớp trang phục phù hợp. |
| Nghề/nhánh | Silhouette, phòng cụ, vũ khí, động tác nghề và chuyên sâu. | Ba dòng tiến hóa, kỹ năng nghề kế thừa đúng họ vũ khí. |
| NPC | Body/profile, nghề nghiệp xã hội, tương tác, portrait nếu cần. | NPC cùng body vẫn có danh tính/đồ dùng riêng khi thiết kế yêu cầu. |
| Quái/tinh anh/boss | Loài, vai trò, hướng, clip và VFX. | Telegraph, cast, hurt/death; boss không chỉ ảnh đứng lớn. |
| Triệu hồi | Body, spawn, lệnh/đòn/skill và biến mất. | Khác pet mỹ phẩm và tọa kỵ. |
| Tọa kỵ | Body ngựa/loài hợp lệ, yên, pose người cưỡi. | Bốn hướng, lên/xuống, chân/yên; class khác không dùng skill trên thú. |
| Tiến hóa/giáp ngựa | Profile nhánh × họ ngựa × module đồ hợp lệ. | Cánh Thánh/Hắc khác theo con ngựa, có mức gọn. |
| Môi trường | Texture, khối đất/vách/dốc/cầu/nhà, cây/nước/props. | Nối geometry/texture, nhiều tầng, mái và lớp che khuất. |
| Combat VFX | Đòn thường, skill, projectile, impact, trạng thái, vùng. | Bản Đầy đủ/Gọn/Chức năng khi cần; đúng tầng. |
| UI và icon | Cửa sổ, glyph, skill/item/currency/effect, portrait. | Trạng thái khóa/hover/focus, size class nhỏ. |
| Story/loading | Key art vùng, storyboard/cinematic, biểu cảm. | Không lộ bí mật, chữ tách ảnh. |

Âm thanh có danh mục liên kết riêng ở ART-09; không ghi có nhạc/SFX chỉ vì phiếu VFX đã có.

## 4. Ma trận nhân vật và cách tính sản lượng

Ba body chủng tộc → 16 tổ hợp nghề–race cấp 15 → 28 tổ hợp nhánh–race cấp 30. Danh tính nhánh là 19, không phải 28 class gameplay. Body/trang phục/động tác có thể chia sẻ module mới nếu rig, tỷ lệ, vũ khí và socket tương thích; không flip bừa hoặc scale người xuống làm Người Lùn.

Mỗi tổ hợp cần ma trận hướng × trạng thái × họ vũ khí × lớp trang bị/ngoại hình. Bốn hướng không có nghĩa mọi clip đều cùng frame count. Clip bắt buộc Idle/Move/Attack/Cast/Hurt/Death; dash/nhảy/biến hình chỉ thêm theo skill thật. Số frame chốt sau timing mẫu.

Ước lượng sản lượng bằng từng gói tương thích: tổng frame duy nhất của mỗi clip/hướng/layer, cộng variant phải vẽ riêng, trừ phần dùng chung đã chứng minh. Không lấy 28 × toàn bộ item × toàn bộ animation thành mặc định, cũng không coi 28 ảnh đứng là đủ.

Vũ khí cần phiếu theo family: kiếm một tay, trọng kiếm, chùy/khiên, giáo, rìu, song đoản đao, cung, trượng phép, sách, trượng khế ước, thánh trượng/trượng mộc. Các đầu trượng có thể dùng nền animation chung nếu socket/pose đúng, nhưng motif và quyền dùng không hòa lẫn.

## 5. Phân biệt ngân sách nội dung và file hình

Phạm vi đã chốt gồm năm vùng, 82 NPC, 30 archetype quái, 16 encounter tinh anh, năm boss vùng và năm dungeon tối đa 15 danh tính boss theo độ khó. Đây là ngân sách thiết kế nội dung, chưa là số body duy nhất hoặc số sheet đã có.

Ví dụ 82 NPC có thể chia sẻ body/animation mới nhưng mỗi NPC vẫn cần phiếu danh tính và tham chiếu profile. 62 địa điểm rương ẩn không bắt buộc 62 model rương khác nhau. Ba boss trong một dungeon khó không có nghĩa chỉ recolor một boss rồi ghi đủ ba. Phải chốt ở MAP/QUEST/BOSS trước khi xác nhận sản lượng.

Ngân sách 158 item cũ không còn là trần cho cây nghề mới. GEAR phải lập ma trận item definition, family, slot, tier và profile trước dự toán icon/trang bị. Không bịa tổng số ảnh để lấp khoảng trống thiết kế.

## 6. Thứ tự sản xuất đề xuất

| Gói | Làm gì trước | Cổng đi tiếp |
|---|---|---|
| P0 — xác nhận pipeline | Cảnh mẫu 38: một body, khối cảnh, texture, atlas/socket; rồi ngựa/cánh và VFX thử. | Camera/tỷ lệ/depth/alpha được ghi nhận bằng kết quả thực. |
| P1 — Tân Binh | Ba race, bộ tập và skill nền, icon/status, một nhóm NPC/quái mẫu. | Đi/đánh/cast/tương tác và tùy biến khớp. |
| P2 — nghề đại diện | Một tuyến nghề → nhánh đủ vũ khí, đồ, kỹ năng và UI. | Không mất hiệu ứng, không lỗi pose hoặc quyền mặc. |
| P3 — mở rộng cây | Phủ bảy nghề và 19 nhánh/28 tổ hợp theo ma trận. | Đủ bộ từng tổ hợp, không chỉ concept. |
| P4 — vùng phát hành | Phủ năm vùng, NPC/quái/boss/dungeon/UI theo nội dung đã khóa. | Gói vùng đủ asset và được kiểm theo mục tiêu phát hành. |

P0…P4 là lô asset, không thay mốc phát hành M0/M1 và không mở cấp 30 trong alpha cấp 10. Có thể làm mẫu nội bộ cấp 30 để kiểm ngựa, nhưng không quảng bá thành nội dung alpha đã có. Không chạy tất cả gói đồng thời khi nền chưa ổn.

## 7. Phiếu asset bắt buộc

Phiếu ghi: mã biên tập, tên, nhóm, mục đích, race/nghề/nhánh, vùng, hướng/clip, layer/socket, kích thước nguồn, profile gọn, phụ thuộc, tài liệu chuẩn, tác giả/nguồn, bằng chứng quyền sử dụng, file nguồn/xuất, phiên bản, bốn cột tiến độ, lỗi và người kiểm.

Danh sách animation phải ghi Đủ/Thiếu/Không áp dụng có lý do; không để ô trống hiểu là đủ. Mỗi variant có quan hệ với gốc, không copy tên rồi làm mất thông tin nguồn. Mã runtime, quy tắc đặt tên/version cụ thể thuộc ART-10, chưa chốt thay trong ART-08.

### Phiếu ví dụ — chưa có hình sản xuất

| Trường | Nội dung mẫu |
|---|---|
| Gói | Ngựa nền + Thánh Kỵ Sĩ + giáp mẫu + cánh Thánh |
| Phụ thuộc | Camera P0, body người, rig ngựa, socket yên/tay/gốc cánh. |
| Cần làm | Idle/Move/Attack/Cast/Hurt/Death, lên/xuống theo luật; bốn hướng và bản gọn cánh. |
| Thiết kế | Có khung, timing/scene chưa xác nhận. |
| Sản xuất hình | Chưa. |
| Tích hợp | Chưa. |
| Kiểm chứng | Chưa. |

Ví dụ không phải danh sách file hiện hữu. Hộ Vệ Thánh không tự nhận cánh hoặc giáp theo set của hai nhánh Thánh/Hắc nếu thiết kế chưa cho.

## 8. Nguồn sáng tác và quyền sử dụng

Bộ hình MMO mới được sáng tác riêng. Không dùng lại, cắt, recolor, resize hoặc trace bộ Craftpix/monster/map/heroes/effect hiện có để đưa vào MMORPG. Bộ đó giữ nguyên cho thủ thành; không xóa file để chứng minh loại trừ. Có thể dùng chung module do chính dự án tạo mới trong bộ MMO và ghi rõ quan hệ nguồn.

Mỗi asset phân loại nguồn: tự vẽ nội bộ, đặt họa sĩ, công cụ tạo hình hỗ trợ hoặc nguồn khác cần xét. Lưu tác giả, ngày, bản gốc, quá trình chỉnh sửa và thỏa thuận/điều khoản áp dụng. Nếu dùng công cụ tạo hình, lưu prompt/reference và phiên bản chỉnh sửa khi có; ảnh concept không tự thành sprite production hoặc được bảo đảm độc quyền.

Tham khảo game khác chỉ để nghiên cứu phương pháp, không lấy file/texture/nhân vật vào bộ phát hành. Nguồn chưa rõ quyền được đánh dấu chờ xác minh và không tính đủ gói phát hành. Đây là quy trình lưu bằng chứng, không kết luận pháp lý về mọi công cụ hoặc hợp đồng.

Nhạc, SFX, font và plugin không được suy là miễn phí chỉ vì tải được. ART-09/SAFE/OPS cần xác minh theo nguồn thực tế trước sử dụng; chưa chọn hay tải nguồn trong đợt thiết kế này.

## 9. Phụ thuộc khi thay đổi thiết kế

Thay camera ảnh hưởng sprite, mật độ texture, cánh/ngựa, ánh sáng và VFX; thay family vũ khí ảnh hưởng pose/socket/icon/profile đồ; thay chủng tộc ảnh hưởng body/portrait/equipment layer. Ghi impact trên phiếu rồi cập nhật các gói liên quan, không tự coi trạng thái kiểm chứng cũ còn hiệu lực.

Bản concept bị thay giữ lịch sử nhưng không nằm cùng danh sách production được duyệt. Gói chưa được dùng có thể bỏ theo quyết định phạm vi, không dùng từ Đã tích hợp cho file chỉ nằm trong thư mục. Ảnh trong roadmap là minh họa/hồ sơ trừ khi có bằng chứng production ghi rõ.

## 10. Bàn giao và trạng thái

Đã có thiết kế thư viện hướng dẫn, danh mục họ asset, ma trận, thứ tự lô và phiếu theo dõi. Chưa có sổ kiểm kê từng file nguồn, toàn bộ giấy phép, danh sách clip/frame đủ hoặc bộ hình đã vẽ. ART-08 hoàn thiện phạm vi quy trình/danh mục khung; dữ liệu từng item/NPC/boss phải được bổ sung khi thiết kế chuyên môn có đầu ra, không tự tick nhóm ASSET hoàn tất.

Tiến độ **16/513 hoàn thiện thiết kế, 6 một phần, 491 chưa thiết kế**. Tiếp theo ART-09: ngôn ngữ âm thanh vùng, nghề/nguyên tố, combat và UI. ART-01/02/04 vẫn chờ scene 2.5D; thủ thành giữ nguyên.
