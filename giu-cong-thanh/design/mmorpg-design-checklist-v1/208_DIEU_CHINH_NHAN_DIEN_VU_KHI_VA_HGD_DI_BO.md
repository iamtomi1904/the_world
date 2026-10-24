# 208 — Nhận diện nhân vật và quyền vũ khí r003

Ngày 22/10/2026. Có hiệu lực thay các mô tả xung đột trong 28/33/34/114/126/180. Đây là thiết kế MMORPG, không sửa gameplay thủ thành. Giữ 3 chủng tộc, 7 nghề, 19 nhánh và 28 tổ hợp hợp lệ.

## Ngoại hình và quyền hành động

| Nhánh | Quy tắc hiện hành |
|---|---|
| Hộ Vệ Thánh HGD | Đi bộ vẫn dùng toàn bộ kỹ năng nhánh và kỹ năng Kỵ Sĩ kế thừa. Trọng giáp toàn thân có mũ giáp và biểu tượng thánh, khiên lớn, búa chiến một tay. Không dùng chùy gai thay búa. |
| Tiên Phong VAN | Giáo một tay và khiên tay còn lại; động tác đâm, che chắn, lao tới phải giữ đúng hai tay. Không còn pose giáo hai tay đồng thời giữ khiên. |
| Mục Sư PRI | Một tay cầm thánh trượng đầu chữ thập, tay còn lại cầm thánh thư. Cả hai là bộ vũ khí có quyền trang bị rõ ràng. |
| Pháp Sư Mộc WOD | Pháp bào gần gũi thiên nhiên, hoa và lá ở tóc, vai, vạt áo và trượng. Tách mảng để không thành khối lá che mặt. |
| Tinh Linh SPI | Một tinh linh nhỏ đậu trên vai. Là lớp nhận diện gắn nhân vật, không tự thêm sát thương, slot triệu hồi hoặc giới hạn pet. Pet chiến đấu vẫn theo kỹ năng hiện có. |
| Cung Thủ / Sát Thủ | Dáng nhanh nhẹn, áo/vạt ngắn, giáp nhẹ và phụ kiện gọn, động tác để lộ khoảng tay chân. Người Lùn vẫn giữ tỷ lệ thấp chắc, không kéo thành thân Elf. |
| Xạ thủ Người Lùn | Dùng nỏ hai tay và bẫy, không dùng cung. ARC là mã nhánh cũ dùng tiếp, tên hiển thị theo race là Xạ Thủ Nỏ; không thêm nhánh thứ 20. Người và Elf vẫn dùng cung. |

## HGD và ngựa

Nghề Kỵ Sĩ cơ bản, PAL và DKN giữ điều kiện ngựa chiến. Khi chuyển HGD, kiểm quyền theo nhánh hiện tại trước quyền nghề nền: bỏ điều kiện horseRequired cho toàn bộ bộ kỹ năng HGD và kỹ năng nghề được kế thừa. Không được giữ kiểm tra Kỵ Sĩ chung khiến ngoại lệ vô hiệu.

HGD chiến đấu trên bộ; ngựa dùng di chuyển, phải xuống thú trước khi chiến đấu theo quy tắc thú di chuyển chung. Không tự cấp bộ combat cưỡi ngựa thứ hai hoặc cánh PAL/DKN. Tâm quạt, aura, dash, hitbox gắn chân/thân HGD; bỏ vị trí yên ngựa khỏi mô tả và animation. Chỉ đổi điều kiện tư thế, không tự thay hệ số, hồi chiêu hay tầm kỹ năng.

## Slot trang bị và mũ

- Game có slot mũ thật: mũ giáp, nón da, mũ trùm, mũ pháp sư, mũ nghi lễ theo quyền vật phẩm. Tóc trống trên concept không có nghĩa game không có mũ.
- Mũ là layer riêng theo race và hướng, có quy tắc che tóc/tai phù hợp; không xóa nhận diện Elf hoặc thu nhỏ mũ Người để dùng cho Lùn. Phần che khuất cần mask, không xuyên tóc.
- PRI đổi từ trượng hai tay sang trượng một tay + thánh thư tay phụ. Không trang bị thêm khiên hay sách thứ hai; mỗi vật phẩm tính thuộc tính một lần. Chưa tự cộng chỉ số vì thêm sách; cần phân bổ lại ngân sách bộ vũ khí khi cân bằng.
- VAN: giáo một tay + khiên chiếm đủ hai tay. Không nhận nguyên sát thương giáo hai tay cộng miễn phí toàn chỉ số khiên; số cân bằng phải qua bộ công thức hiện hành.
- Nỏ Người Lùn chiếm hai tay; bẫy là dụng cụ/hoạt động kỹ năng, không tự sinh slot chỉ số mới hoặc đạn tiêu hao. Chuyển các động tác kéo cung thành ngắm/nạp/bắn nỏ. Bộ kỹ năng bẫy cần biên tập riêng trước triển khai; concept không chứng minh gameplay bẫy đã có.

## Phong cách và bàn giao ảnh

Nhân vật, đồ đội đầu, vũ khí và VFX là **2D pixel** có cạnh pixel rõ, bảng màu tiết chế, độ chi tiết V4 đã chọn. Thế giới dùng cách trình bày 2.5D; không chuyển nhân vật thành model 3D hoặc tranh vẽ mịn. Hai bảng dưới đây là concept phóng lớn, chưa phải sprite native hay animation.

![Chủng tộc và nghề r003](/design-preview/art03-current-tree-v2/races-professions__r003.png)

![Nhánh r003](/design-preview/art03-current-tree-v2/branches-19__r003.png)

Ảnh cũ r002 giữ lịch sử. Trang xem và thẻ thư viện dùng r003. Prompt và nguồn lưu trong revision-r003.json cùng thư mục ảnh. Chưa có đủ 28 tổ hợp, bốn hướng, avatar, bộ mũ theo set hoặc animation; không đánh dấu asset production hoàn thành. Checklist giữ 525 mục: 127 hoàn thiện / 12 một phần / 386 chưa thiết kế.
