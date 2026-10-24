# 15 — Lore chủng tộc và bảy tuyến chuyển nghề

**22/10/2026 · Thiết kế nội dung 0.1.** Thực hiện yêu cầu mỗi chức nghiệp/nhánh có lore, NPC, nhiệm vụ và vật phẩm chuyển chức. Phát triển hồ sơ130, không thêm race/nghề/nhánh. Các tên người hướng dẫn dưới đây là sáng tác mới, chưa phải NPC đã triển khai.

## 1. Phân biệt ba lớp lore

“Class” trong trao đổi cần được ghi rõ: **chủng tộc lúc tạo**, **chức nghiệp cấp15**, **nhánh cấp30**. Tân Binh là trạng thái đào tạo chung, không phải huyết thống hoặc hội kín thứ tư. Lore nguồn gốc nghề mô tả một truyền thống, không khẳng định người chơi đã thuộc hội từ trước.

### Con Người — những người nối đường

Các cộng đồng Người phát triển quanh đường buôn, thành và trạm cứu trợ, học cách kết hợp nhiều truyền thống để sống cạnh nhau. Thế mạnh văn hóa là tiếp nhận và tổ chức, mặt trái là dễ biến quy trình tiện lợi thành quyền quyết định thay người khác. Không phải mọi người đều là thương nhân hay tín đồ Aureon.

Nhà Đèn cho thấy một gia đình không chỉ hình thành bởi dòng máu. Nhân vật Người có thể nhớ việc sửa cổng, ghi sổ hoặc trồng vườn; không tự được nghề Kỵ Sĩ hay quyền chỉ huy. Cả bảy nghề mở theo ma trận; sự đa dạng này không có nghĩa Người vượt trội chỉ số.

### Elf — ký ức cần được hỏi lại

Các cộng đồng Elf gìn giữ tri thức qua nơi chốn, việc thực hành và người truyền lại. Ký ức dài không bảo đảm cách hiểu đúng; một lời thề từng cần thiết vẫn phải được những người đang sống chấp thuận. Elf không đồng nghĩa Tinh Linh, không phải ai cũng nghe được cây hoặc tự biết cổ ngữ.

Trong Nhà Đèn, người chơi có thể giữ phong tục riêng nhưng vẫn có một mái nhà chung. Câu hỏi dành cho họ là điều gì nên tiếp nối, điều gì cần thay, không phải chọn giữa thiên nhiên và văn minh. Các quyền Kiếm Sư/Pháp Sư/Cung Thủ/Tinh Linh/Mục Sư giữ nguyên.

### Người Lùn — thứ đứng vững phải chịu được kiểm tra

Lò, xưởng và đoàn thợ lưu động giúp truyền kỹ nghệ giữa các cộng đồng Lùn. Một món đồ đáng tin phải có nguồn, chỗ sửa và người chịu trách nhiệm; kỹ nghệ không chỉ là chế vũ khí. Có người làm vườn, cứu trợ hoặc ghi nhạc, không tất cả là thợ rèn. Người Lùn khác Thạch Tộc.

Truyền thống xạ thủ dùng nỏ và bẫy từ nhu cầu bảo vệ đường hẹp, không dùng cung làm chuẩn nghề Lùn. Bộ tập tân thủ cần có nỏ tập thay cung tập cho Lùn; không đổi bộ tập thành khóa nghề. Bốn nghề hợp lệ giữ nguyên. Những giới hạn hiện hành là phạm vi cây nhân vật của bản này, không tuyên bố mọi cá nhân trong lịch sử đều bất khả học cách khác.

## 2. Cấu trúc chung của một tuyến chuyển nghề

Đủ cấp15 mở lời giới thiệu tới một nghề hợp chủng tộc. Mỗi tuyến có ba chặng riêng: **gặp người và hiểu công việc → thực hiện có hướng dẫn → nhận chứng vật và xác nhận lựa chọn**. Có tên nhiệm vụ/nhật ký từng chặng; không chỉ một hộp thoại đổi class.

- Trước khi cam kết có khu thử nghề. Bản thử không mang kỹ năng/vật phẩm ra ngoài. Người chơi được xem nghề và các nhánh hợp lệ của mình, kể cả khác biệt nỏ Lùn.
- NPC không bắt tuyên thệ theo Hòa Minh/Thiết Thệ để được dạy. Chọn phe ở mốc chuyển nghề là tuyến chính trị riêng, không điều kiện nghề hoặc đáp án đạo đức.
- Bài học dùng dụng cụ, phép mẫu và thú tập được cấp tạm trong cảnh. Không đòi đã có kỹ năng nghề chưa mở hoặc đồ hiếm để học chính nghề đó.
- Thất bại trở về chốt tập, không mất phí hồi sinh, không giết NPC thật. Có chỉ dẫn lại; không khóa bởi DPS, class xuất thân hoặc phản xạ một lần duy nhất.
- Chứng vật là vật phẩm nhiệm vụ khóa nhân vật, không giao dịch, bán, phân giải hay rơi khi chết. Nếu hệ thống chưa cấp được, nhận lại từ hồ sơ nhiệm vụ; không phải farm lại.
- Lúc xác nhận, kiểm race/cấp/nghề hợp lệ và tiến độ, nhận chứng vật đúng tuyến, cấp nghề/vũ khí nền một lần và ghi dấu chứng nhận trong Sổ Nghề. Chứng vật không chiếm ô trang bị vĩnh viễn, không cho chỉ số.
- Thoát trước xác nhận không tự chọn nghề. Đăng nhập lại giữ chặng đã đạt; yêu cầu xác nhận gửi lại không nhân đồ hoặc phần thưởng.

## 3. Bảy người hướng dẫn và tuyến nghề cấp15

Vị trí là khu tiếp cận an toàn tại V02 Valedorn–Merrowen; có thể là trạm nghề ngoài hub. Không đặt bảy đại sư tại map tân thủ. Mỗi người có nguồn sống và việc riêng. Danh sách19 thầy ở tài liệu16 bao gồm bảy người này, không cộng lặp.

### JOB-KNI — Kỵ Sĩ · NPC J01 Alden Varr, Con Người

**Lore:** những đoàn hộ tống học kiểm vị trí, nhịp ngựa và đường rút trước khi nhận một lời thề lớn. Ngựa là bạn cùng chịu nguy hiểm, không phải món trang sức chứng minh địa vị.

Alden chăm ngựa của trạm vận tải và huấn luyện người hộ tống. Ông từng giữ đúng đội hình nhưng chậm mở lối cho thợ bị kẹt, nên dạy quan sát người cần được bảo vệ thay vì chỉ nhìn lá cờ. Ông biết tuyến vận tải địa phương, không biết bí mật neo sống.

**Tuyến “Một khoảng đường để người khác đi”:** gặp thợ và kiểm ngựa → trong cảnh tập, cưỡi ngựa nền giữ hành lang cho đoàn xe tháo chốt → giải thích vì sao đổi vị trí khi đoàn dừng, nhận **Huy Hiệu Hộ Tống**. Đánh nhiều không bù được việc đứng chặn đường. NPC được bảo vệ và chặng tập có thể thử lại.

**Kết:** quyền Kỵ Sĩ, bộ vũ khí nền và quyền ngựa nền cần thiết theo hồ sơ34, không bắt mua thú. Cho xem PAL/DKN tiếp tục cưỡi, HGD chuyển sang bảo hộ trên bộ ở30.

### JOB-WAR — Chiến Binh · NPC J02 Brakka Dorn, Người Lùn

**Lore:** sức mạnh có ích khi biết mở một lối và dừng trước phần chịu tải. Truyền thống từ công xưởng và đội bảo vệ, không coi giận dữ là thước đo lòng can đảm.

Brakka làm giám sát tháo hàng nặng, không phải một chiến tướng bí mật. Bà từng làm hỏng máy vì nhận nhầm lời “nhanh lên” thành yêu cầu phá bằng mọi giá; nay luôn hỏi ai đang ở phía sau khớp cần đánh.

**Tuyến “Đánh vào điều cần mở”:** khảo sát bộ neo kẹt → dùng vũ khí tập xử lý khớp và giữ lối cho công nhân → dừng khi tín hiệu người thợ đổi, nhận **Đai Thép Mở Lối**. Đai là chứng vật nghi lễ, không phải belt trang bị có chỉ số.

**Kết:** quyền Chiến Binh và vũ khí nền; xem hai hướng giáo/khiên Tiên Phong, rìu Cuồng Chiến. Không buộc người chơi giết thú trung lập.

### JOB-SWD — Kiếm Sư · NPC J03 Sairen Voss, Elf

**Lore:** truyền thống giữ nhịp và khoảng cách của người bảo vệ đường đi. Kiếm không chỉ dùng đấu tay đôi; quyết định có ra đòn hay không quan trọng như đường chém.

Sairen kiểm đường cầu và dạy người đưa tin. Một lần ham thắng bài đấu khiến bà bỏ lỡ cuộc hẹn cứu trợ; học trò được dạy đến đúng nơi thay vì biểu diễn trước người xem.

**Tuyến “Đường kiếm và đường về”:** quan sát dây báo dưới cầu → căn bước/đỡ và cắt đúng mối trong cảnh thử → quay lại theo lối an toàn, nhận **Nút Kiếm Giữ Nhịp**. Chưa có dash nghề thì dùng thao tác mẫu, không yêu cầu học trước.

**Kết:** quyền Kiếm Sư; UI hiển thị Người có WND/ASN, Elf có ASN, Lùn có HSW, không hứa mọi race có cả ba.

### JOB-MAG — Pháp Sư · NPC J04 Velis Arven, Con Người

**Lore:** nghề phát triển khi người vận hành nguồn học ghi kết quả lẫn sai số. Có nhiều trường phái nhưng phép không được miễn trách nhiệm chỉ vì đẹp hoặc mạnh.

Velis hiệu chuẩn đèn và buồng xả dân sự. Cô giữ một báo cáo lỗi do mình ký để nhắc học trò rằng công khai sửa sai khác tự hạ thấp nghề. Không biến cô thành học trò biết toàn bộ thí nghiệm của Soren.

**Tuyến “Ngọn đèn phải được tắt”:** nhận biết nguồn và lối rút → dẫn phép mẫu qua buồng có kiểm tải → tự ngắt trước khi báo quá tải, nhận **Phiến Hiệu Chuẩn Sơ Cấp**. Nút reset cơ học luôn dùng được; thi tối đa sát thương không phải mục tiêu.

**Kết:** quyền Pháp Sư và trượng nền; giới thiệu các nhánh đúng race, không trao bảy chứng nhận nguyên tố một lượt.

### JOB-ARC — Cung Thủ · NPC J05 Ressa Quill, Người Lùn

**Lore:** người canh tuyến cần đường nhìn và hiểu vật phía sau đích. Trong mạng nghề chung, Người/Elf phát triển cung; Lùn phát triển nỏ và bẫy, cùng nguyên tắc trách nhiệm với đường đạn.

Ressa sửa nỏ và bộ báo tuyến ở bến, hợp tác với người dạy cung của các đoàn. Bà có thể hướng dẫn quan sát chung cho mọi race; mô-đun cầm cung dùng người tập phụ trợ của trạm, chưa cần thêm NPC hồ sơ độc lập. Không vẽ Ressa cầm cung để minh họa.

**Tuyến “Điều nằm sau mục tiêu”:** xem dấu tuyến và chọn góc nhìn → bắn dây buộc chứng vật trên xe tập bằng cung/nỏ theo race → thu chứng vật không làm đổ kiện phía sau, nhận **Thẻ Mắt Tuyến**.

**Kết:** quyền nghề hiện có; nhãn nghề Lùn hiển thị Xạ Thủ Nỏ, mã nhánh ARC giữ. Cấp đúng cung/nỏ nền, không biến nỏ thành skin cung.

### JOB-SPI — Tinh Linh · NPC J06 Naelis Thern, Elf

**Lore:** khế ước là một sự hợp tác được chấp thuận, có điều kiện và cách kết thúc. Nghề không cấp quyền sở hữu mọi linh hồn và không đồng nghĩa race Elf.

Naelis chăm trạm nghỉ gần vườn dẫn tuyến. Bà từng gọi một linh thể khi chưa hiểu dấu từ chối; giờ bài học đầu là thu phép đúng lúc. Linh thể không bị viết thành thú nuôi không có ý muốn.

**Tuyến “Một lời mời được đáp”:** nhận biết dấu chấp thuận → gọi linh thể tập và dẫn qua đường hợp lệ → kết thúc lời gọi đúng điều kiện, nhận **Dải Khế Ước Đầu Tiên**.

**Kết:** quyền nghề, trượng nền; tinh linh vai là nhận diện riêng theo208, không cộng miễn phí pet chiến đấu. Được xem lại nghĩa vụ sau khi học, không bắt từ bỏ class vì một câu trả lời đạo đức trong thoại.

### JOB-PRI — Mục Sư · NPC J07 Elian Venn, Con Người

**Lore:** cứu trợ bắt đầu bằng nhận biết còn có thể cứu điều gì. Truyền thống nghi lễ và tri thức chữa trị gặp nhau ở việc không hứa điều ngoài khả năng. Không buộc người học cải đạo hoặc chọn phe.

Elian trực trạm thuốc và chép tài liệu huấn luyện. Cùng họ Venn không xác lập quan hệ ruột thịt với Sella; không thêm quan hệ gia đình chỉ vì tên. Ông từng để người nhà hiểu một lời trấn an thành lời hứa khỏi bệnh, nên nói rõ giới hạn trước khi làm phép.

**Tuyến “Điều còn có thể giữ”:** phân loại tình trạng qua dấu hiệu được chỉ → ổn định mô hình người nguy kịch, chọn đường hồi/khiên an toàn → giải thích điều chưa cứu được, nhận **Trang Thệ Ước Cứu Trợ**. Không thử hồi sinh ở cấp15 khi kỹ năng18 chưa mở.

**Kết:** quyền nghề; Người nhận bộ trượng chữ thập/thánh thư nền, Elf nhận trượng nền phù hợp hướng Mộc. Không cấp quyền nhánh30 sớm.

## 4. Liên hệ truyện chính và phạm vi sản xuất

Các tuyến nghề dạy cách nhìn cùng một vấn đề của thế giới, không chứa manh mối duy nhất về Edran. Đi trước truyện tới trạm nghề chỉ nghe lore công khai và làm bài học đủ điều kiện; không tự mở hồ sơ mật Tro Trắng.

Có **7 gói nghề** và **19 gói nhánh** ở tài liệu16; mỗi gói ba chặng thiết kế. Đây là26 tuyến tùy lựa chọn, không phải mọi nhân vật phải làm26 tuyến. Một người làm nghề đã chọn và nhánh đã chọn: hai tuyến, sáu chặng. Có thể có mô-đun race khác nhau, không tính mỗi biến thể thành nhánh mới.

Số78 chặng là khối lượng biên tập chuyên môn, chưa được ngầm cộng vào32 nhiệm vụ chính hoặc khẳng định nằm sẵn trong ngân sách quest cũ. Cần ánh xạ gói/ID/task khi hoàn thiện sản xuất; người dùng đã yêu cầu tuyến riêng nên hạn chế130 “không thêm chuỗi mặc định” không còn được dùng để bỏ các tuyến này.

Giữ ngân sách82NPC lõi làm mục tiêu ánh xạ:19 thầy mới trong bộ này là vai cụ thể để tích hợp, không mặc định19NPC ngoài ngân sách hoặc đổi nghề NPC cũ cho đủ chỗ. Chưa có tổng ánh xạ82 người duy nhất được duyệt; không báo hoàn thành NPC-02. Bộ này là thiết kế lời và hành động, chưa có hình thầy, icon chứng vật hay quest chạy được.
