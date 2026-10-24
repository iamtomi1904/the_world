> **Điều chỉnh nhân vật có hiệu lực · 22/10/2026:** [Hồ sơ 208](208_DIEU_CHINH_NHAN_DIEN_VU_KHI_VA_HGD_DI_BO.md) thay các mô tả xung đột: HGD dùng kỹ năng khi đi bộ; VAN giáo + khiên; PRI thánh thư + trượng chữ thập; xạ thủ Người Lùn dùng nỏ/bẫy; có trang bị mũ. PAL/DKN vẫn cần ngựa. Ảnh là 2D pixel cho thế giới 2.5D.

> **Bổ sung có hiệu lực · 21/10/2026:** [Bộ20hồ sơ V1](125_BAO_CAO_20_MUC_COMBAT_SKILL.md) và [catalog126](126_DANH_MUC_KY_NANG_V1.md) hoàn thiện kit/rank/talent/hồi sinh/lifecycle. Thay các trường còn để mở hoặc mô tả cũ khi xung đột; giữ cap60/nội dung45, V01khôngquái bay,35SP/11TP và hotbar13. Đây là thiết kế, chưa game/asset chạy được.

# Kỵ Sĩ — chiến đấu trên ngựa và tiến hóa tọa kỵ

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0  
**Nguồn:** yêu cầu trực tiếp của chủ dự án; quy tắc vận hành bổ sung là quyết định thiết kế theo ủy quyền.  
**Trạng thái:** Đã thiết kế cơ chế liên hệ thống; chưa triển khai hoặc sản xuất hình ảnh.

## 1. Phạm vi và thay đổi so với thiết kế trước

Nghề Kỵ Sĩ cơ bản, Thánh Kỵ Sĩ và Hắc Kỵ Sĩ bắt buộc cưỡi ngựa chiến hợp lệ để dùng kỹ năng chủ động thuộc nghề/nhánh. Hộ Vệ Thánh là ngoại lệ: dùng được toàn bộ kỹ năng nghề kế thừa và kỹ năng nhánh khi đi bộ với vũ khí hợp lệ; không phải gọi ngựa để dùng bộ kỹ năng. Đây là cách hiểu phạm vi được chọn để đồng bộ cây hiện hành; yêu cầu giáp theo bộ và bị động mọc cánh chỉ áp dụng hai nhánh Thánh/Hắc.

Kỵ Sĩ chỉ cưỡi họ ngựa. Không mở sói, rồng hoặc thú khác bằng cách gắn skin ngựa. Những nghề khác dùng thú cưỡi để di chuyển nhanh, không dùng kỹ năng chiến đấu khi đang cưỡi. Các họ thú khác cho nghề khác vẫn thuộc danh mục MOUNT cần thiết kế sau.

Thay ý tưởng cũ coi cưỡi ngựa là dạng chiêu cuối tạm thời của Thánh/Hắc Kỵ Sĩ. Cưỡi ngựa là tư thế chiến đấu nền; mọc cánh là tiến hóa bị động. Không tự giữ cơ chế R hao mana mỗi giây từ thủ thành hoặc thiết kế dạng cưỡi cũ. Kỹ năng bản sắc chủ động của hai nhánh phải thiết kế lại ở bộ kỹ năng, không tự thêm kỹ năng thứ chín.

## 2. Trạng thái và quyền dùng kỹ năng

| Trạng thái | Đánh thường | Kỹ năng chủ động nghề/nhánh | Hành động khác |
|---|---|---|---|
| Kỵ Sĩ đi bộ | Đòn cơ bản theo vũ khí hợp lệ. | Khóa; hiện lý do cần cưỡi ngựa chiến. | Kỹ năng chủng tộc/vô môn hợp lệ, thuốc và tương tác theo điều kiện riêng. |
| Kỵ Sĩ trên ngựa chiến | Có, động tác người/ngựa đồng bộ. | Có khi đủ vũ khí, tài nguyên, mục tiêu và trạng thái. | Không nhận thêm thanh kỹ năng ngựa gây damage miễn phí. |
| Nghề khác trên thú di chuyển | Không tấn công khi còn cưỡi. | Không cast khi còn cưỡi. | Gọi/xuống thú, tương tác và vật phẩm được phép theo danh mục. |

Với nghề khác, lệnh tấn công có thể yêu cầu xuống thú trước; lệnh chỉ thực hiện sau khi đã xuống thành công và kiểm lại mục tiêu, tầm, tài nguyên. Không gây damage trước rồi mới phát animation xuống thú. Các kỹ năng không chiến đấu cũng phải khai báo mountedAllowed, không mặc định mọi buff đều cast trên lưng thú được.

Bị động cốt lõi/race không bị xóa khi đi bộ. Các bị động có điều kiện trên ngựa chỉ hoạt động khi điều kiện đúng. Không cộng lại hiệu ứng mỗi lần lên/xuống. Các kỹ năng nền của Kỵ Sĩ đã tiến hóa thành kỹ năng nghề cũng bị khóa khi đi bộ; không gọi hình thái tân thủ để lách điều kiện.

## 3. Nhận ngựa, vùng cấm và vòng đời

Nhiệm vụ chuyển chức cấp 15 cung cấp một ngựa chiến nền khóa nhân vật, quyền nhận một lần. Ngựa này đủ dùng bộ kỹ năng và toàn bộ truyện chính, không cần nạp, mua chợ hoặc trúng vật phẩm hiếm. Cấp 1–14 vẫn là Tân Binh, chưa có quyền kỹ năng Kỵ Sĩ.

Ngựa chiến là tọa kỵ, không phải pet đánh riêng: không có HP/aggro/đòn đánh độc lập trong khung đầu. Damage nhắm người cưỡi; ngựa không chết mất vĩnh viễn hoặc thành vật phẩm phải mua lại. Bị đánh không tự động ép xuống ngựa của Kỵ Sĩ. Khống chế/đánh ngã xử lý trên đơn vị người cưỡi; không thêm cơ chế cưỡng ép xuống thú mới cho boss khi chưa thiết kế cách phản ứng.

Cho phép gọi lại ngựa chiến trong combat với thời gian chuẩn bị và điều kiện ngắt do MOUNT/COMBAT cấu hình; không reset hồi chiêu hoặc tạo miễn thương. Không gán số giây tùy ý tại hồ sơ nhận diện này.

Vùng chiến đấu bắt buộc phải cho phép ngựa chiến và đủ chỗ theo kích thước điều hướng đã cân. Khu nội thất hòa bình có thể buộc xuống; trước cửa phải có dấu hiệu. Không dựng dungeon truyện bắt buộc cấm ngựa khiến Kỵ Sĩ mất toàn bộ bộ nghề. Thú di chuyển nghề khác có thể bị cấm trong dungeon trong khi ngựa chiến được phép: UI phải ghi rõ hai nhóm quyền này.

Khi chết ngừng trạng thái cưỡi, giữ quyền sở hữu ngựa; hồi sinh không reset cooldown, gọi lại theo luật. Disconnect không tạo ngựa mồ côi. Khi vào vùng mới, server kiểm quyền vùng và tái lập một trạng thái duy nhất; không nhân đôi body hoặc buff.

## 4. Giáp ngựa theo bộ trang bị Thánh/Hắc Kỵ Sĩ

Giáp ngựa là visual profile suy ra từ đồ nhân vật đang mặc, không phải bộ item thứ hai. Thay giáp nhân vật cập nhật hình ngựa tương ứng nhưng không tăng giáp/HP miễn phí, không nhân đôi hiệu ứng bộ hoặc roll món.

Quy tắc phối hình được chốt:

- Áo giáp ngực quyết định thân giáp ngựa và ngôn ngữ vật liệu chính.
- Mũ điều khiển motif giáp đầu ngựa; vai/găng quyết định chi tiết giáp trước; quần/giày quyết định vải phủ và giáp sau trong các module tương thích.
- Nhánh Thánh/Hắc chọn cấu trúc motif; bộ đồ hiện tại chọn lớp vật liệu, màu và chi tiết đã được sản xuất.
- Mặc lẫn bộ vẫn tạo hình hợp lệ bằng module. Không bắt đủ set mới được giáp ngựa hoặc dùng kỹ năng.
- Thiếu profile riêng dùng profile chung đúng nhánh/body ngựa, không lấy hình ngựa khác. Ngoại trang hợp lệ ưu tiên ở lớp hiển thị; không sửa dữ liệu trang bị thật.

Không yêu cầu vẽ mọi tổ hợp món thành một ảnh mới. Bản thiết kế GEAR/ASSET phải thống kê module cho từng thân ngựa và từng họ bộ đồ thực tế. Hộ Vệ Thánh dùng yên/giáp ngựa nền; chưa tự nhận quy tắc set và cánh của hai nhánh trên.

## 5. Bị động tiến hóa ngựa

Hai nhánh nhận một bị động lõi khi hoàn thành chuyên sâu cấp 30:

| Nhánh | Tên làm việc | Biểu hiện khi cưỡi |
|---|---|---|
| Thánh Kỵ Sĩ | Thiên Mã Thánh Ước | Cánh sáng có hình cụm lông rõ, điểm sáng trắng ngà/vàng nhạt, dấu thánh gọn quanh móng và yên. |
| Hắc Kỵ Sĩ | Ám Mã Khế Ấn | Cánh tối có mảng màng/lông theo con ngựa, điểm tím trầm, dấu phong ấn và tàn năng lượng gọn. |

Bị động không chiếm ô chủ động hoặc một trong ba ô thiên phú tùy chọn; không tốn SP để mở. Nó là một nội tại nhánh được tính trong ngân sách, không là phần thưởng cộng thêm ngoài mọi nội tại cũ. Tăng rank/biến thể nếu sau này có phải khai báo riêng; không mặc định có chỉ số ẩn.

Cánh xuất hiện trên con ngựa hiện được chọn khi người cưỡi đúng nhánh. Đi bộ thì không có ngựa/cánh trôi theo người. Đổi ngựa tái chọn một profile, không tạo pet hoặc giữ thêm aura ngựa cũ. Không cần nút bật R hoặc tiêu mana duy trì chỉ để giữ hình tiến hóa.

Mọc cánh chưa đồng nghĩa bay tự do, vượt sông sâu, đi xuyên núi, tăng hitbox hoặc miễn đòn mặt đất. Khung đầu vẫn theo điều hướng chiến đấu mặt đất; có thể dùng nâng chân/lướt thấp trong animation. Quyền bay thật và đánh quái bay phải có hồ sơ cơ chế riêng trước khi mở. Cánh có ý nghĩa tiến hóa thị giác ngay cả khi chưa có bay tự do.

## 6. Mỗi con ngựa có cánh và hiệu ứng riêng

Giữ thứ tự nguồn hình: thân/đặc điểm con ngựa → lớp giáp theo đồ → profile tiến hóa theo nhánh và con ngựa → VFX trạng thái. Không dùng một đôi cánh phóng to cho tất cả ngựa.

Ba mẫu sản xuất mới để xác định hướng, chưa phải item đã phát hành:

| Họ ngựa | Thân và chuyển động | Bản Thánh | Bản Hắc |
|---|---|---|---|
| Tuấn mã đồng bằng | Gọn, bờm ngắn, nhịp phi nước đại cân. | Cánh lông dài thuôn, hạt sáng thưa. | Cánh mảng dài có khoảng khuyết, tàn tím mảnh. |
| Chiến mã sơn địa | Vai/ngực chắc, chân dày, nhịp nặng. | Cánh rộng chia cụm ngắn, dấu sáng nặng ở móng. | Cánh góc cạnh dày, dấu ấn đứt đoạn ở móng. |
| Linh mã cổ thụ | Dáng thanh, bờm thành dải, nhịp mềm. | Cánh lông có hình lá lớn, vệt ngọc pha vàng. | Cánh lá khuyết tối, bụi chàm pha ngọc. |

Mỗi mẫu dùng body ngựa đúng họ, không đổi sang hươu/sói. Khác biệt trên là ngoại hình; tốc độ và lợi ích gameplay không suy ra từ độ sáng, số cánh hoặc giá mua. Ngựa mỹ phẩm trả phí nếu có không được mạnh hơn do profile cánh.

Ở Idle cánh gập, VFX thấp; Move cánh nhịp nhẹ; Attack/Cast nhường khoảng trống cho tay/kiếm; khi bị khống chế cánh không che icon trạng thái. VFX kỹ năng vẫn độc lập, không bật hiệu ứng nổ toàn bộ mỗi bước chân. Cho phép giảm particle và giản lược cánh đồng đội nhưng giữ bóng/điểm chân và hướng.

## 7. Hình, va chạm và bảng kỹ năng

Tách ngựa/người/giáp ngựa/vũ khí/cánh/VFX theo layer. Có anchor yên, tay cầm, đầu ngựa, móng và gốc cánh theo bốn hướng. Không flip làm đổi bên khiên. Canvas bao đủ cánh mở/vũ khí; bounding hình không phải hitbox hoặc range.

Nav/collision theo điểm nền ổn định của đơn vị cưỡi. Cánh mở không chặn đồng đội hoặc làm đối thủ dễ trúng thêm. Vùng trúng đòn phải được COMBAT thiết kế phù hợp hình ngựa/người; không tự thu về một chấm hoặc phóng to theo VFX.

Bảng K hiển thị tag Cần ngựa chiến cho kỹ năng nghề Kỵ Sĩ và tag Nội tại nhánh cho tiến hóa ngựa. Khi khóa do đi bộ, hiện nút dẫn tới Gọi ngựa nếu được phép; không xóa rank hoặc tháo kỹ năng khỏi preset. Trang thú cưỡi có preview Đi bộ/Cưỡi/Thánh/Hắc, giáp từ bộ đang mặc, lý do khóa theo nhánh và theo vùng.

## 8. Lưu dữ liệu và phạm vi còn lại

PostgreSQL lưu mount sở hữu, mount được chọn, định nghĩa họ ngựa, quyền nhận từ quest và quyền nội tại nhánh. Trạng thái cưỡi do server xác nhận. Profile giáp/cánh được suy ra từ mount, nhánh, đồ/ngoại trang và phiên bản; client không gửi tên file ảnh để tự cấp quyền.

Đổi đồ, đổi ngựa, lên/xuống và đổi preset phải gỡ effect theo ID nguồn, áp một lần; không để hai giáp/cánh/buff cũ cùng tồn tại. Đồ người cưỡi và ngựa không có hai ví chỉ số.

Cần thiết kế tiếp: bộ kỹ năng chủ động bản sắc thay dạng cưỡi R cũ; thời gian gọi/ngắt; tốc độ combat so với đi bộ và mount di chuyển; danh mục ngựa/item/profile; timing và animation; luật khống chế đặc biệt nếu muốn thêm. Không đưa số cân bằng tùy ý vào hình ảnh.

ART-03 giữ trạng thái đặc tả hoàn thiện nhưng được sửa cơ chế cưỡi theo tài liệu này. Các MOUNT-01…07 chưa hoàn thiện toàn hệ thống từ một ngoại lệ class; checklist giữ 14 hoàn thiện, 3 một phần, 496 chưa thiết kế. Không sửa gameplay hoặc asset thủ thành.


**Đối không và gọi ngựa đã chốt · 21/10/2026:** [Đối không và gọi ngựa đã chốt](100_COMBAT_05_CAN_CHIEN_VA_QUAI_BAY.md). Hồ sơ bổ sung thay các điểm để mở trước đó khi xung đột trong phạm vi mục; giữ cap60/nội dung45 và công thức STAT hiện hành. Chưa triển khai/kiểm thử.

Thời gian gọi ngựa chiến, ngắt và cooldown thành công được ghi tại [COMBAT-02, mục5](97_COMBAT_02_NHIP_HANH_DONG_VA_HUY_CHIEU.md): Prepare1s, cooldown3s khi gọi thành công, không mana riêng; damage trực tiếp/move/hardCC ngắt. Đây là cấu hình thiết kế, không trạng thái đã tích hợp.
