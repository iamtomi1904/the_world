> **Biên tậpV2 · 21/10/2026:** [Ràng buộc combat/canon10](10_RANG_BUOC_COMBAT_V2_VA_BI_MAT.md) và [khếước128](../mmorpg-design-checklist-v1/128_V2_KHE_UOC_COT_TRUYEN_VA_COMBAT.md) bổ sung hồi sinh nguykịch, Orenvỏ/lõi, quyềnchọnvàscope5vùng/6hồi. Không thaynguồn00 hoặc đápánlịchsử02; chưa triển khai.

# 01 — Thiết lập thống nhất và sổ thay đổi

## 1. Trục chủ đề

**NỀN:** một thế giới sống nhờ những lời thề cổ nhưng đã quên người phải trả giá cho chúng. Tự do khám phá, chiến đấu trực tiếp, lịch sử có hệ quả.

**V1:** câu hỏi dẫn truyện: “Ai được quyền tiếp tục một lời thề khi những người gánh nó không còn được lên tiếng?” Câu hỏi cá nhân đi cùng: “Có thể cứu cha mà không bắt một gia đình khác trả thay không?”

Không viết mọi bi kịch như hình phạt cho lòng tốt. Mỗi vùng phải có đời sống, việc làm và tình cảm đáng bảo vệ trước khi yêu cầu người chơi cứu nó. Nhân vật có thể sai, thú nhận, sửa chữa; không cần chết để hoàn tất một cung truyện.

## 2. Từ điển nền tảng

| Thuật ngữ | Nghĩa dùng thống nhất | Nhãn |
|---|---|---|
| Ẩn Thành — Di Sản Người Giữ Cổng | Tên dự án MMORPG và tên thành trung tâm trong bối cảnh; phân biệt bằng ngữ cảnh | NỀN/CHỐT |
| Aetheria / Elarion | Thế giới / lục địa trọng tâm | NỀN |
| Lịch Thánh Nguyên, LSN | Niên đại chung; hiện tại mở đầu là năm 948 | NỀN |
| Đêm Gãy Ấn | Biến cố mở đầu, không phải một cuộc chiến kéo dài nhiều năm | NỀN |
| Vực Rỗng | Hiện tượng/cõi liên quan khe nứt và tha hóa; không đồng nghĩa mọi thứ màu tím | NỀN |
| Thất Thần Nguyên Sơ | Thần hệ gồm bảy vị hoặc thực thể được thờ như thần | NỀN |
| Sáu dòng thủ hộ | Các cộng đồng/dòng giống tham gia giao ước; không phải sáu vị thần | NỀN |
| Mười thành trì | Mười nút địa lý của mạng lưới, đồng thời là cộng đồng dân cư | NỀN |
| Người Giữ Cổng | Nghề/vai trò kiểm tra, vận hành và bảo vệ các điểm nối; có đào tạo, không là huyết thống duy nhất | V1 |
| Dấu Kiểm Ấn | Di vật Edran để lại: dụng cụ nhận dạng và kiểm tra mạng lưới, không phải quyền lực tiên tri | V1 |
| Phong ấn thứ bảy / Ấn Chứng Ước | Tầng thủ tục kiểm tra quyền đồng thuận trên toàn mạng; không là thành thứ bảy | V1 |
| Tro Trắng | Tu viện lưu trữ trên tuyến Valedorn–Aurelia; không phải thành thứ mười một | V1 |
| Nhà Đèn | Nhà chung Edran nuôi trẻ nhiều cộng đồng, thuộc làng Đá Đèn | V1 |

### Thất Thần — giữ nguyên tên và biểu tượng

| Vị thần | Lĩnh vực / biểu tượng | Giới hạn biên tập |
|---|---|---|
| Aureon | Mặt Trời, Lời Thề; mặt trời vàng và kiếm thiêng | Không xác nhận mọi mệnh lệnh Giáo Hội là lời của Aureon |
| Luneth | Mặt Trăng, Giấc Mộng; trăng khuyết và gương bạc | Giấc mơ là dấu vết cần kiểm chứng, không thay chứng cứ |
| Therya | Đất, Sự Sống; cây cổ thụ và hạt giống | Thiên nhiên có xung đột, không phải phe luôn đúng |
| Volkar | Bão Tố, Chiến Tranh; búa chiến và đại bàng | Người thờ có thể bảo vệ hoặc chinh phạt |
| Nymara | Nước, Chữa Lành; chiếc cốc và giọt nước xanh | Chữa trị không tự xóa tha hóa nguồn |
| Morthas | Cái Chết, Phán Xét; cán cân đen và khóa xương | Không đánh đồng người thờ với ác nhân gọi xác |
| Vael’Thor | Kẻ Bên Ngoài Bầu Trời; vòng tròn vỡ và sao đen | Có sự thật tác giả trong tài liệu 02; không công khai ở hồi I |

### Sáu dòng thủ hộ

| Tên chuẩn | Di sản | Điều không được suy diễn |
|---|---|---|
| Long Tộc | Ký ức cổ, chứng tích giao ước | Mọi con rồng đều biết toàn bộ lịch sử |
| Bất Tử Giả | Nhân chứng vượt vòng đời thông thường | Mọi Bất Tử Giả là xác sống vô thức |
| Xà Tộc | Nguồn nước, chữa lành, truyền thống | Chỉ có thể làm pháp sư hồi máu |
| Lang Tộc | Rừng, biên giới, lãnh địa | Tất cả sói rừng đều là thành viên Lang Tộc |
| Hà Tộc | Bầu trời, dẫn đường, hàng hải | Harpy hoang, Hà Tộc có văn hóa và boss hiện tại hoàn toàn đồng nhất |
| Thạch Tộc | Nền móng, công trình cổ | Orc hoặc Người Lùn là Thạch Tộc vì dùng chung asset/nhóm combat |

Tên harpy trong chế độ cũ được xem là cách gọi một số sinh vật có cánh; MMORPG dùng “Hà Tộc” theo tài liệu nền. Không đổi tên asset hoặc định danh game hiện có trong công việc này.

### Mười thành và năm phe

| Mã | Tên thành chuẩn | Vai trò biên tập |
|---|---|---|
| I | Vương Miện Băng Giá | Cơ chế dự phòng và ký ức Thập Tự Chinh |
| II | Sylvaris, Thành Rừng | Quyền lãnh địa và đồng thuận thủ hộ |
| III | Khaz Drumm, Thành Núi | Nền móng và phân phối tải phong ấn |
| IV | Valedorn, Thành Sông | Hợp đồng, vận chuyển, lời chứng dân sự |
| V | Aurelia, Thành Thánh | Lịch sử chính thống và kho lưu trữ |
| VI | Merrowen, Thành Cảng | Tuyến hàng hải và chứng cứ thất lạc |
| VII | Nocthollow, Thành Vọng Linh | Danh tính linh hồn, vòng sống/chết |
| VIII | Astravelle, Thành Tinh Tú | Đo đạc và trách nhiệm thực nghiệm |
| IX | Ẩn Thành | Nút trung tâm bị vỡ, cộng đồng còn sống |
| X | Sahr Kareth, Thành Cát Đỏ | Hồ sơ giao ước ban đầu và cửa tiếp xúc cuối |

Năm phe chuẩn: Giáo Hội Thánh Nhật; Hội Đồng Pháp Sư; Hội Mạo Hiểm; Liên Minh Lục Địa; Giáo Phái Hư Không. “Hội đồng cai quản thành” trong bản truyện cũ là mô tả chính quyền, không tự tạo thêm một phe phản diện thứ sáu.

## 3. Mô hình bốn lớp

1. **Thần hệ:** đối tượng tín ngưỡng, có những lần đáp lời và dấu vết thực thể, không trực tiếp điều khiển mọi chức sắc.
2. **Sáu dòng thủ hộ:** các bên ký và duy trì giao ước, có đại diện và bất đồng trong mỗi dòng.
3. **Mười nút thành:** công trình đặt trên các mạch lực, giữ đường vận chuyển năng lượng và thông tin.
4. **Bảy tầng vận hành:** sáu tầng nhận chứng thực từng dòng và tầng thứ bảy kiểm tra quyền sử dụng các chứng thực ấy. Bảy tầng là cấu trúc kỹ thuật/nghi lễ, không là bằng chứng bảy thần xây bảy thành.

Một dòng có thể liên hệ nhiều thành; một thành có thể có nhiều dòng cư trú. Người được dạy nghề có thể kiểm ấn nếu có dụng cụ, người chứng kiến và năng lượng tại nút. Không cần huyết thống nhân vật chính.

## 4. Quy luật phép thuật và di vật

| Trường phái | Làm được | Giá phải trả / không làm được |
|---|---|---|
| Thần thuật | Bảo hộ, thanh tẩy tác nhân, hỗ trợ chữa trị qua nghi lễ | Cần người thực hành và sức lực; không dùng để xác nhận một lời khai là chân lý tuyệt đối |
| Nguyên tố | Điều khiển hiện tượng cục bộ: nhiệt, nước, gió, đất và biến thể | Không sinh năng lượng vô hạn; không tự vá mạng liên kết lục địa bằng một phép chiến đấu |
| Huyền thuật | Đọc cộng hưởng, sửa kết giới và cơ chế đã hiểu | Có sai số, cần mẫu đối chiếu; không nhìn toàn tri quá khứ |
| Triệu hồi | Thiết lập giao tiếp/gọi thực thể có điều kiện tương ứng | Không bắt đồng minh vĩnh viễn nếu không có ràng buộc; dấu hiệu bị ép buộc là một vấn đề đạo đức |
| Linh hồn thuật | Đọc dư âm, nhận diện gắn kết, trợ giúp chuyển tiếp | Dư âm thiếu, lẫn hoặc bị sửa; không đưa người đã tan linh hồn trở về nguyên vẹn |
| Cấm thuật | Cưỡng ép liên kết, chiếm dụng ký ức, chuyển gánh nặng | Có tổn hại xác định và người chịu giá; không dùng một “giá vô danh” để giải quyết kết thúc |

**Dấu Kiểm Ấn:** Edran để lại trong hòm đồ Nhà Đèn, người chơi được người chăm sóc trao hợp lệ ở nhiệm vụ M01. Nó lưu một số thao tác kiểm tra, không có ý thức hoặc giọng nói của cha. Chỉ phản ứng mạnh gần cơ chế tương thích đã có nguồn. Ở M02, nó chuyển lượng điện tích của đèn khẩn cấp sang một vệt chắn hẹp đủ giúp đoàn người lùi qua cổng, không tiêu diệt đợt quái và không cứu cả làng. Sau đó lõi nứt, cần sửa ở M05. Mỗi tương tác quan trọng phải có đầu vào nguồn, dấu hiệu sắp quá tải và kết quả giới hạn. Không dùng mất trí nhớ của di vật để giấu thông tin tùy tiện.

**Sự sống và cái chết:** hồi phục người còn sống khác hồi sinh người đã chết; Bất Tử Giả còn danh tính và tự quyết khác xác bị vận hành không còn ý thức. Tha hóa là trạng thái làm méo mó hành vi/ký ức, có mức độ; không phải chủng tộc. Chữa nguồn có thể ngăn tiến triển, không bảo đảm khôi phục thương tổn đã xảy ra. Cái chết vì lựa chọn trong truyện không bị kỹ năng hồi máu thường xóa bỏ.

## 5. Khởi tạo nhân vật

Bản hiện hành cho tạo nhân vật Con Người, Elf hoặc Người Lùn, khởi đầu Tân Binh cấp 1–14. Cấp 15 chọn trong bảy nghề theo quyền chủng tộc; cấp 30 chọn nhánh hợp lệ trong 19 nhánh. Năm xuất thân không tự cấp nghề hoặc bỏ qua điều kiện. Orc, Goblin và các cộng đồng khác vẫn có thể là NPC; không tự mở quyền chọn khi tạo nhân vật.

Mọi người chơi từng được Edran nhận vào Nhà Đèn trước năm 947. Không ép nguồn gốc cha mẹ ruột, màu da, giới hoặc tên của nhân vật. Xuất thân là trải nghiệm trước khi trở về nhà, không thay người cha nuôi. Tuổi tự mô tả phải tương thích với việc từng sống cùng Edran, không gán ký ức hàng ngàn năm bắt buộc.

Các hero như Dạ Tiễn/Quỷ Ảnh/Bất Khuất không được gán làm NPC vì họ là mẫu lối chơi trong chế độ khác. Class Hắc Kỵ Sĩ là một truyền thống sử dụng sức mạnh nguy hiểm, không chứng nhận thành viên thuộc phe ác hoặc từng phản bội Giáo Hội.

## 6. Sổ thay đổi so với bản cũ

| Mã | Điểm cũ hoặc còn trống | Quyết định v1 | Cơ sở |
|---|---|---|---|
| CH-01 | “Ấn Thành” và “Ẩn Thành” lẫn nhau | Dùng Ẩn Thành | CHỐT tên người dùng |
| CH-02 | Cha có thể được hiểu là cha ruột | Edran Vale là cha nuôi cố định, nhiều con nuôi | CHỐT |
| CH-03 | Người chơi mặc định tập sự Người Giữ Cổng | Người sống sót tự tạo, chỉ học nghề qua hành trình | NỀN mới và CHỐT |
| CH-04 | Hero có cốt truyện riêng có thể thành dàn NPC | Chỉ dùng làm mẫu class; tạo NPC mới | CHỐT |
| CH-05 | Sáu chủng tộc có thể bị hiểu là sáu thần | Tách bốn lớp ở mục 3 | NỀN mới |
| CH-06 | Cứu thành có thể mở tiến trình RPG | Không bắt buộc kết quả/tiến độ thủ thành | CHỐT |
| CH-07 | Chưa có đáp án phong ấn thứ bảy | Ấn Chứng Ước là tầng kiểm tra đồng thuận | V1 mới |
| CH-08 | Chưa có tên cha, thủ phạm, làng | Edran và các tên ở tài liệu 05 | V1 mới |
| CH-09 | Số thành dễ bị hiểu là tuyến cấp 1→10 | Mã địa danh cố định; IX là vùng đầu | NỀN mới |
| CH-10 | Vùng thành và dải cấp tổng quan chưa trùng | Tách trung tâm an toàn, vùng nhiệm vụ, vùng sâu; giữ số dự kiến gốc | V1 giải thích, không lén sửa số |

## 7. Phần cố ý chưa phát triển

Chưa thiết kế bản đồ tile, cây kỹ năng và chỉ số chủng tộc; chưa đặt tất cả tên địa danh nhỏ của chín vùng sau; chưa viết sinh hoạt của toàn bộ NPC. Bản chất tối hậu của sáu vị thần ngoài Vael’Thor không cần khẳng định trong mùa truyện đầu. Những việc này không được dùng làm lý do trì hoãn đáp án chính về Đêm Gãy Ấn và người cha: các đáp án ấy đã có trong tài liệu 02.

## Thay đổi chủ dự án về chủng tộc và nghề · 20/10/2026

[Khung mới](../mmorpg-design-checklist-v1/28_HE_CHUNG_TOC_CHUC_NGHIEP_TRANG_BI.md) thay quy tắc không khóa chủng tộc/class cho gameplay bản này: 3 race Con Người/Elf/Người Lùn, nghề ở15 và nhánh ở30 theo ma trận. Các race khác có thể ở thế giới dạngNPC. Nguồn00 được giữ nguyên làm lịch sử, không dùng bảng cũ để vượt ma trận mới. Nội dung tân thủ phải không đòi phép/nghề chưa mở.
