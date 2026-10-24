> **Chuẩn hình nhân vật · 22/10/2026:** [Mẫu người dùng chọn và bản áp dụng r006](211_ART_03_PHONG_CACH_THEO_MAU_NGUOI_DUNG_R006.md) có ưu tiên về phong cách: dáng trưởng thành, thanh, pixel chi tiết như ảnh tham chiếu. Không dùng r004/r005 làm chuẩn tỷ lệ. Giữ điều chỉnh vũ khí/luật ở208.

> **Điều chỉnh nhân vật có hiệu lực · 22/10/2026:** [Hồ sơ 208](208_DIEU_CHINH_NHAN_DIEN_VU_KHI_VA_HGD_DI_BO.md) thay các mô tả xung đột: HGD dùng kỹ năng khi đi bộ; VAN giáo + khiên; PRI thánh thư + trượng chữ thập; xạ thủ Người Lùn dùng nỏ/bẫy; có trang bị mũ. PAL/DKN vẫn cần ngựa. Ảnh là 2D pixel cho thế giới 2.5D.

> **ART-03 bản vẽ hiện hành ·22/10/2026:** [Hai bảng mới: 3 chủng tộc, 7 nghề, 19 nhánh](180_ART_03_VE_LAI_THEO_CAY_NGHE_R002.md). Ảnh ba class cũ đã thay thế; concept chưa phải sprite/animation production. Tiến độ giữ 114/8/391 trên 513.

# ART-03 — Nhận diện ba chủng tộc, bảy nghề và 19 nhánh

**Phiên bản:** 2.0 · **Ngày:** 21/10/2026  
**Trạng thái:** Hoàn thiện đặc tả nhận diện bằng văn bản trong phạm vi ART-03. Chưa vẽ concept toàn bộ, chưa có sprite sheet/animation hoặc kiểm chứng thị giác thực tế.  
**Đầu vào:** ART-01 V4, ART-02 thân người 40px/grid 32px; hồ sơ 28/29/31/32. Tất cả hình MMORPG sản xuất mới.

## 1. Quy tắc nhận diện

Nhìn theo thứ tự: hình cơ thể → vũ khí/đồ nghề → tư thế → mảng trang phục → màu → chi tiết. Mỗi nhánh có một motif chính, tối đa một motif phụ. Không dùng glow, cánh vĩnh viễn, chữ tên hoặc màu đơn thuần để cứu silhouette giống nhau.

Giữ pixel fantasy chi tiết vừa V4: khoảng ba đầu, cụm pixel rõ, vật liệu khoảng bốn sắc độ và điểm sáng chọn lọc. Đầu/vai, eo và bàn chân phải tách đọc được. Không tự thêm viền vàng dày, texture hiện thực hoặc đồ trang trí li ti khi tăng độ hiếm.

Nhân vật do người chơi tạo: nghề không cố định giới, mặt, tóc hoặc tên riêng. Trang phục mẫu là bộ nhận diện đầu vào để sản xuất, không phải vật phẩm miễn phí hoặc item độc quyền mặc định.

## 2. Ba chủng tộc và Tân Binh

| Chủng tộc | Hình thể tham chiếu | Dấu nhận diện | Bộ tân thủ và chuyển động |
|---|---|---|---|
| Con Người | Thân cao khoảng 40px, tỷ lệ vai/hông trung tính. | Đầu/thân cân, tai gọn; không mang biểu tượng thần linh mặc định. | Áo vải ngắn, đai, quần và giày; bước đi đều, thân không lắc quá mạnh. |
| Elf | Thân 40–42px, thân gọn và chân thanh; vẽ riêng. | Tai nhô vừa đủ, vai nhỏ, cổ áo thoáng; không bắt tóc dài. | Áo ghép vạt ngắn, dây đai mềm; bước nhẹ, vũ khí vẫn có trọng lượng. |
| Người Lùn | Thân 32–34px, vai rộng, chi ngắn chắc; không thu nhỏ ảnh người. | Khối ngực/giày rõ, đầu cân thân; râu là tùy chọn. | Áo ngắn, đai rộng, giày chắc; bước ngắn, chuyển trọng tâm rõ. |

Màu da/tóc không phải dấu duy nhất phân biệt chủng tộc. Bộ tập kiếm/cung/trượng gắn đúng tay của từng body; đổi bộ không đổi nghề hoặc tạo nhân vật mới. Không thêm giáp nặng cho mọi Người Lùn hoặc lá cây cho mọi Elf.

## 3. Bảy nghề cấp 15

| Nghề | Silhouette/trang phục | Vũ khí và tư thế | Dấu hiệu cần giữ khi lên nhánh |
|---|---|---|---|
| Kỵ Sĩ | Vai chắc, thân giáp thành mảng, vạt áo chia đôi. | Kiếm một tay/khiên; trụ chân, khiên che một bên. | Trọng tâm thấp và động tác có sức nặng, không lẫn Chiến Binh bằng việc chỉ thêm giáp. |
| Chiến Binh | Tay/vai mở, đai rộng, giáp chiến có khoảng cử động. | Rìu hoặc giáo hai tay hợp quyền; hai tay và thân cùng chuyển lực. | Lực từ hông/chân, khác nhịp kiếm chính xác. |
| Kiếm Sư | Thân gọn, giáp nhẹ, vạt ngắn lệch, đường eo rõ. | Kiếm một tay, dáng nghiêng; bao kiếm không phải item tay phụ tăng chỉ số. | Đọc chuẩn bị/thu kiếm và đổi thế rõ. |
| Pháp Sư | Áo hình chuông vừa, tay áo không che bàn tay; cổ áo đơn. | Trượng phép, tay còn lại niệm; đứng vững khi cast. | Dấu niệm phép có pha chuẩn bị, không đi khom như Sát Thủ. |
| Cung Thủ | Vai tay thoáng, áo ngắn, một mảng ống tên sau vai. | Cung hai tay; kéo dây có hướng và tay riêng. | Khoảng âm giữa cung/tay/thân, không dựa vào màu xanh lá. |
| Tinh Linh | Áo nghi lễ chẻ vạt, đai có vật dẫn khế ước lớn, ít trang sức. | Trượng khế ước đầu vòng mở; tay dẫn linh thể. | Motif nút/vòng khế ước, khác áo lá của Mộc. |
| Mục Sư | Áo dài gọn, dải nghi lễ dọc thân, phần đầu không che mặt. | Thánh trượng hoặc trượng mộc theo race; tư thế mở tay bảo hộ. | Dấu hỗ trợ theo nghi lễ, không coi mọi phép sáng là hồi máu. |

Màu trang phục không cấp quyền nguyên tố. Pháp Sư cấp 15 chưa tự là Hỏa; Mục Sư Elf dùng biểu hiện thiên nhiên trước khi chuyên sâu Mộc, không bắt mặc biểu tượng Giáo Hội của Con Người.

## 4. Bảng nhận diện 19 nhánh cấp 30

Ký hiệu race: N = Con Người, E = Elf, L = Người Lùn. Danh sách đúng hồ sơ 28; không thêm nhánh mới trong ART.

| Nhánh / race | Hình khối và trang phục | Vũ khí, động tác đánh thường | Motif / điểm màu | Tránh nhầm |
|---|---|---|---|---|
| Thánh Kỵ Sĩ · N | Giáp kín, vai vuông vừa, vạt sáng chia đôi. | Trọng kiếm hai tay bản rộng đầu gọn; chém chắc từ vai/hông. | Mặt trời, trắng ngà/vàng nhạt. | Không thêm cánh/thiên mã ở Idle thường; không dùng Q làm vệt đánh thường. |
| Hắc Kỵ Sĩ · N | Giáp kín, vai vát, áo choàng ngắn khuyết nhẹ. | Trọng kiếm hai tay đầu vát; nhịp nén lực rồi chém. | Khóa phong ấn, thép tối/tím trầm. | Không thành bộ xương hoặc tua gai mọi cạnh; silhouette vẫn là kỵ sĩ sống. |
| Hộ Vệ Thánh · N | Khối thân rộng, giáp vai thấp, khiên đọc rõ một phía. | Búa chiến một tay đầu khối, khiên lớn; vung ngắn, thu về che thân. | Ấn bảo hộ, thép sáng/xanh lam trầm. | Không cầm trọng kiếm hoặc chùy khổng lồ che khiên. |
| Tiên Phong · N,L | Giáp chiến, vạt gọn, vai không vướng cán giáo. | Giáo một tay mũi lá + khiên tay còn lại; đâm có hướng, giữ mặt khiên bảo vệ. | Mũi nhọn/tuyến tiến, đỏ đất/thép. | Khác kiếm nhờ chiều dài cán và thế cầm, không thêm cờ lớn luôn che thân. |
| Cuồng Chiến · N,L | Vai/tay mở, đai dày, giáp lệch khối lớn. | Rìu hai tay lưỡi cong; bổ/thu theo quán tính. | Vết khía chiến đấu, đỏ sẫm/nâu. | Không tăng body mặc định thành khổng lồ; biến hình phải là trạng thái riêng. |
| Phong Kiếm Khách · N | Áo nhẹ vạt chéo, khăn ngắn có khoảng âm, thân nghiêng. | Kiếm một tay và bao kiếm; rút/chém/thu rõ nhịp. | Nét gió cong, ngọc nhạt/xám. | Không thay bằng song đao; tua khăn chỉ một cụm. |
| Sát Thủ · N,E | Áo ngắn ôm gọn, giáp cẳng tay, mũ trùm tùy chọn. | Song đoản đao, khuỷu tay tách thân; đánh luân phiên hai tay. | Lưỡi kép, tím khói/thép. | Không che mặt bắt buộc hoặc gắn hình Goblin lên hai race mới. |
| Kiếm Sĩ Trọng Kiếm · L | Khối thân thấp chắc, vai gọn hơn kỵ sĩ, áo chiến ngắn. | Trọng kiếm hai tay dài, lưỡi thẳng; nâng/đổi thế có trọng lượng. | Đường rèn thẳng, thép/xanh đá. | Khác Cuồng Chiến bằng lưỡi kiếm và thế kiểm soát; không dùng rìu. |
| Lôi Pháp Sư · N,E | Cổ áo vát, vạt tạo góc, phần vai gọn. | Trượng đầu chạc góc; niệm giật ngắn sau pha chuẩn bị. | Tia gãy, vàng nhạt/tím điện. | Không phủ điện liên tục hoặc chỉ đổi màu Hỏa. |
| Hỏa Pháp Sư · N,E | Áo vạt ngọn nhọn vừa, tay niệm mở. | Trượng đầu chén/than; gom rồi đẩy phép. | Giọt lửa, đỏ gạch/cam. | Không có lửa lớn thường trực che trượng. |
| Thủy Pháp Sư · N,E | Vạt cong lớp ngắn, tay áo có đường chảy rõ. | Trượng đầu giọt mở; tay dẫn phép theo đường cong. | Giọt/sóng, xanh nước/bạc. | Thủy gồm hướng nước/lạnh theo kit; không mặc định mọi kỹ năng là băng. |
| Pháp Sư Tử Linh · N | Áo dài hẹp, cổ cao vừa, túi bùa gọn bên hông. | Ma đạo thư hai tay: sách nổi trong cự ly tay; tay lật/chỉ trang. | Trang ấn/xương tối giản, ngà cũ/tím xám. | Sách chiếm quyền hai tay dù pose niệm có một tay rảnh; không cộng trượng phụ. |
| Pháp Sư Ánh Sáng · E | Áo hình chuông gọn, dải đối xứng, thân dựng. | Trượng đầu lăng kính; niệm tập trung và phóng tia. | Lăng kính, vàng nhạt/trắng lạnh. | Phân biệt Mục Sư bằng phép công kích và đầu trượng, không mặc định healer. |
| Pháp Sư Bóng Tối · E | Áo hẹp vạt lệch, khoảng sáng giữa tay/thân. | Trượng đầu cung khuyết; gom/ép năng lượng. | Khoảng khuyết, chàm/tím. | Không dùng sách hoặc quân đoàn xương của Tử Linh. |
| Thổ Pháp Sư · L | Áo ngắn ghép mảng, đai chắc, ống tay gọn. | Trượng đầu khối đá; nhấc/ấn nhịp nặng. | Khối tầng, nâu đá/hổ phách. | Không thành Chiến Binh cầm búa; vẫn đọc được động tác phép. |
| Cung Thủ · N,E,L | Giáp nhẹ, bao tay kéo dây, ống tên lệch vai. | Người/Elf: cung hai tay; Lùn: nỏ hai tay và bẫy. Trang bị nhẹ gọn, động tác nhanh nhẹn. | Mũi tên/lông vũ, xanh rêu/da. | Người Lùn dùng nỏ hai tay và bẫy; Người/Elf dùng cung. Không vẽ Lùn cầm cung hoặc súng. |
| Tinh Linh · N,E | Áo nghi lễ chẻ vạt, vòng khế ước rõ hơn nghề nền. | Trượng đầu vòng/khe dẫn; gọi rồi chỉ dẫn linh thể. | Nút khế ước, xanh ngọc/kem. | Có một tinh linh nhỏ trên vai làm nhận diện; không tự gây sát thương hoặc tăng thêm pet chiến đấu. |
| Mục Sư · N | Áo nghi lễ dải dọc, vai mềm, mặt thoáng. | Thánh trượng chữ thập một tay + thánh thư tay còn lại; niệm và lật trang có pose riêng. | Ấn ban phúc, ngà/vàng ấm. | Không mặc trọng giáp hoặc giống Thánh Kỵ Sĩ bỏ kiếm. |
| Pháp Sư Mộc · E | Áo ghép mảng lá lớn, vạt ngắn mềm, phần vai thoáng. | Trượng mộc đầu mầm/nhánh; dẫn vòng nhỏ rồi hướng tới đồng minh. | Mầm sống, xanh lá/kem. | Không thành Tinh Linh chỉ đổi màu; không dùng lá phủ kín người. |

Độ hiếm cao tăng chất lượng vật liệu và một điểm hình có kiểm soát; không thay vũ khí sang họ khác, không gắn cánh/halo vĩnh viễn làm mất dấu trạng thái.

## 5. Bốn trạng thái nhận diện và hướng

| Trạng thái | Yêu cầu đầu ra cho mọi nhánh |
|---|---|
| Idle | Thấy mặt hoặc hướng đầu, tay cầm và chân; hơi thở nhỏ không nhún cả sprite. |
| Move | Bước theo body, giữ điểm cầm; vạt áo/bao kiếm không nhảy bên. Phân biệt chuyển động với Attack. |
| Attack | Có chuẩn bị, thời điểm tiếp xúc/phóng và thu đòn; từng họ vũ khí giữ pose riêng. Vệt phụ ngắn, không sao chép toàn bộ VFX kỹ năng. |
| Cast | Nhìn được pha chuẩn bị và phát lực; kỹ năng cơ động có tư thế riêng nếu cần. Cần biến thể đúng vũ khí của nhánh. |

Bổ sung Hurt/Death khi sản xuất: mất thăng bằng/ngã có hướng đọc được, không frame trống, không rơi vũ khí thành loot giả. Bốn hướng trước/sau/trái/phải theo ART-02; không lật ngang làm đổi tay khiên, tay kiếm hoặc trang phục bất đối xứng.

Không chốt số frame, timing hit hoặc khóa di chuyển trong ART-03. ART-04 chuẩn hóa metadata; COMBAT/SKILL quyết định nhịp thực. Mỗi trạng thái cần silhouette mẫu rồi mới nội suy frame, không lấy chuyển động vũ khí làm lý do đổi hitbox tùy tiện.

## 6. Trạng thái biến hình, triệu hồi và vũ khí cường hóa

Thánh/Hắc Kỵ Sĩ ở dạng cưỡi phải giữ motif, màu chính và họ kiếm của nhánh; tư thế kiếm có thể như thương nhưng không biến thành quyền trang bị giáo. Tách body thú/người/vũ khí; không scale nguyên sprite người lên. Dáng bay không tự cấp quyền đánh quái bay ngoài luật kỹ năng.

Cuồng Chiến/Bất Khuất nếu bộ kit sau có dạng lớn cần pose riêng, giới hạn canvas và VFX riêng; không lấy hiệu ứng thủ thành làm thông số mặc định MMO. Phong Kiếm Khách vẫn có hình cơ thể trong xoay/nhảy, không chỉ để một vòng gió thay animation.

Linh thể của Tinh Linh và đơn vị Tử Linh có motif chủ sở hữu nhưng khác silhouette người chơi; cần đủ Idle/Move/Attack/Cast/Hurt/Death/Spawn tùy hành vi. Số lượng, kích thước từng loại và thời gian tồn tại thuộc SUMMON/SKILL, chưa chốt từ ART-03.

Cường hóa vũ khí dùng overlay bám đúng lưỡi/đầu trượng ở từng hướng và trạng thái; chỉ phát sáng khi thật sự có hiệu lực. Viên ngọc và VFX không tự thành quyền trang bị hoặc mở cơ chế ngọc MMORPG chưa thiết kế.

## 7. Cùng trang bị, khác biểu hiện

Tách body race, layer phòng cụ, layer vũ khí, dấu nhánh được phép và VFX trạng thái. Body không đổi vì mặc áo hiếm. Không nhân bản instance/chỉ số khi đổi profile.

Bảy họ nghề cung cấp cấu trúc áo/giáp; các nhánh có override silhouette nhỏ khi item cho phép. Ví dụ áo giáp hợp lệ cho Thánh/Hắc Kỵ Sĩ giữ kích thước nền nhưng khác vạt/viền và huy hiệu. Sát Thủ không nhận trọng giáp chỉ vì có skin tối màu.

Nếu không có profile riêng, dùng profile chung hợp rig và đúng quyền; không mượn sprite sai vũ khí. Màu tùy chỉnh giữ điểm tương phản quan trọng, không khóa nhân vật vĩnh viễn vào bảng màu mẫu. Tính hợp lệ vẫn theo hồ sơ 28/32.

## 8. Ma trận sản xuất và bàn giao

1. Ba body Tân Binh với ba bộ vũ khí tập: thiết kế theo hướng, không chín nhân vật gameplay độc lập.
2. Bảy cấu trúc nghề với 16 tổ hợp nghề–race hợp lệ: Con Người 7, Elf 5, Người Lùn 4.
3. Mười chín danh tính nhánh với 28 tổ hợp race–nhánh: Con Người 14, Elf 9, Người Lùn 5.
4. Bộ pose theo họ vũ khí, điểm cầm tay, khoảng âm và mức trang trí đã quy định; dùng module mới nội bộ khi thật sự tương thích.
5. Hình biến trạng thái/summon chỉ sản xuất sau khi bộ kỹ năng tương ứng xác định; không coi thiếu triệu hồi là đã xong cả class.

Mỗi sheet bàn giao ghi body, race, nghề/nhánh, họ vũ khí, hướng, trạng thái, layer và phiên bản. ART-04 quy định bounds/pivot/atlas, ASSET thống kê frame/file thực tế. 28 tổ hợp không có nghĩa chỉ cần 28 ảnh đứng, cũng không nhân mọi món đồ thành 28 bộ đầy đủ nếu dùng layer chung hợp lệ.

## 9. Tiêu chí duyệt thị giác sau khi vẽ

- Ở mức zoom chơi chuẩn: nhận được vũ khí và nhóm vai trò khi tắt tên, VFX, màu đặc trưng.
- Thử ba cặp dễ lẫn: Thánh/Hắc Kỵ Sĩ; Ánh Sáng/Mục Sư; Tinh Linh/Mộc. Nếu phải chỉ dựa màu để phân biệt, sửa hình khối.
- Thử bốn hướng và ba body trên nền sáng/tối, có đám đông; tay/vũ khí/chân không nhập thành một mảng.
- Ngoại trang và biến hình giữ hướng đòn, loại vũ khí và dấu trạng thái; không cắt ảnh để ép một canvas.
- Đánh thường và kỹ năng có mức VFX khác nhau; nền cảnh không bị tất cả nhân vật che kín bởi glow.

Đây là tiêu chí sẽ thực hiện khi có hình. Chưa có kết quả kiểm chứng hoặc concept toàn bộ; không báo sản xuất asset đã hoàn tất.

## 10. Checklist và bước tiếp theo

ART-03 hoàn thiện phạm vi đặc tả nhận diện. ART-04 tiếp theo: chuẩn tile/mép nối, anchor chân, canvas/frame, hướng/layer, bounds và vùng an toàn cho vũ khí/VFX. ART-04 chưa hoàn thiện trong lần này.

Tiến độ thiết kế: **14/513 hoàn thiện, 3 một phần, 496 chưa thiết kế**. Ba mục một phần là SKILL-03/05/06. Không đánh dấu CHAR/GEAR/SKILL hoặc ASSET hoàn tất từ tài liệu này.


## Cập nhật Kỵ Sĩ chiến đấu trên ngựa · 21/10/2026

[Hồ sơ 34](34_KY_SI_CHIEN_DAU_TREN_NGUA.md) có hiệu lực thay mô tả cưỡi cũ: nghề Kỵ Sĩ và hai nhánh Thánh/Hắc dùng kỹ năng nghề/nhánh khi cưỡi ngựa chiến; Hộ Vệ Thánh được dùng kỹ năng khi đi bộ, chỉ dùng họ ngựa. Thánh/Hắc có giáp ngựa suy ra từ đồ đang mặc và bị động tiến hóa cánh theo từng con ngựa; không còn lấy lên ngựa làm chiêu cuối tạm thời. Nghề khác cưỡi để di chuyển, không chiến đấu trên thú. Quy tắc vùng, quyền kỹ năng và lớp hình xem hồ sơ 34; chưa triển khai.
