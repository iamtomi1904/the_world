> **Bố trí không gian:** [Sơ đồ216](../mmorpg-design-checklist-v1/216_MAP_V01_SO_DO_BO_TRI_CHUC_NANG_R001.md) và [bản xem](/design-preview/v01-layout-r001/index.html) ánh xạL01–09, địa hình, đường và vịtrídựkiến. Chưaengine/tọađộthực.

> **Bổ sung đã chốt:** [Hai hầm khám phá và cấu trúc8gói/30chặng](20_BINH_MINH_HAM_KHAM_PHA_VA_CAU_TRUC_NHIEM_VU.md). V01 có1phó bản +2hầm khám phá; không chỉ1không gian dưới đất.

# 17 — Bình Minh: gói thiết kế nội dung map cấp1–10

**22/10/2026 · Bản chốt thiết kế nội dung 1.0.** Ưu tiên hoàn thiện V01 trước khi viết tiếp V02. Tài liệu này tập hợp các hồ sơ đã có và bổ sung các loại tuyến còn thiếu; không có nghĩa bản đồ, asset, AI hay nhiệm vụ đã được triển khai. Tham chiếu07 cho nội dung chính/phụ/xuất thân,08 và18 cho hầm,19 cho danh sách NPC.

## 1. Câu chuyện và điểm kết của map

Người chơi trở về Nhà Đèn, sống sót qua Đêm Gãy Ấn, cùng cộng đồng ổn định nơi trú và lần theo dấu đồ nghề của người cha nuôi. Đoạn kết trả lại một đường sống cho dân và xác nhận đầu mối Tro Trắng. Không biết thủ phạm, chưa xác nhận cha còn sống, chưa nhận quyền lực được chọn.

Ba nhịp: **trở về và sơ tán → giúp cộng đồng/kiểm chứng → vào hầm và tự quyết cách xử lý Oren**. Cấp là dải khuyến nghị; không có một nhiệm vụ lặp bắt buộc để đủ điều kiện nghe truyện. Mọi nhánh chính solo được bằng bộ tập, không cần nghề15, phe, bang hoặc vật phẩm trả phí.

## 2. Bản đồ chức năng và hành trình

| Không gian | Việc diễn ra | Điều kiện thiết kế |
|---|---|---|
| Nhà Đèn/làng Đá Đèn | M01–M02, đời sống gia đình và biến cố | Cảnh mở đầu riêng, có điểm dừng; không spawn quái vào bản làng đang yên của người khác |
| Cầu Lau | M03 sơ tán và kiểm danh | Chốt truyện an toàn, không bắt hộ tống chạy bằng tốc độ class |
| Trại Bình Minh/ngoại thành | M04–M05, dịch vụ, nhận việc và phản hồi | Vùng an toàn,6 NPC thường trú, lối rời thông thoáng |
| Đồng Ruộng Gãy Bờ | Nông dân, thú tìm ăn, SQ và việc ngày | Đường dịch vụ không xuyên bãi tinh anh; cây/cỏ/hàng rào có nguồn sống |
| Suối Sỏi Trắng | M06 lấy mẫu, sửa đường nước | Lối cầu khô luôn có; sông sâu không đi, suối cạn đọc được đáy |
| Bìa Rừng Cũ | Dấu thú, trinh sát, tinh anh và khám phá | Lán an toàn cho NPC, có đường vòng; thú nền khác mục tiêu thù địch |
| Sân Chuông Nứt | Cảnh quan canh ấn, truyền thuyết, boss map | Vùng boss tách khỏi đường bắt buộc; không đòi hạ boss để mở hầm |
| Cửa Hầm Phong Ấn | Chuẩn bị M07/M08 và vào instance | Điểm chờ an toàn; không cần tranh một chìa khóa rơi từ quái chung |

Các L01…L09 trong07 là mã điểm của nhiệm vụ, không thay bằng mã tiểu khu mới. Khi vẽ phải ánh xạ hai lớp này, không tạo thêm hai bản Cầu Lau hoặc Nhà Đèn vì tên xuất hiện nhiều nơi. Nắng, mây, mưa nhẹ, sương thay theo thời gian game; không thời tiết độc quyền giữ nhiệm vụ chính. Tất cả18 mẫu quái, hai tinh anh, boss map và boss hầm đều **mặt đất**, không có pha bay.

## 3. Phân loại tuyến và số lượng nội dung V01

| Loại | Mã/số lượng | Nhịp mở và vai trò |
|---|---|---|
| Chính | M01–M08,8 nhiệm vụ | Một lượt theo nhân vật, cứu trợ và điều tra, đủ C01–C06 |
| Phụ | SQ01–SQ06,6 nhiệm vụ | Đời sống/cộng đồng, tùy chọn, không giữ manh mối duy nhất |
| Xuất thân | OR01–OR05,5 biến thể | Mỗi nhân vật nhánh phù hợp; không tự cấp nghề |
| Chuyển chức / chuyển nhánh | Không có trong V01 | Chỉ mở tuyến nghề từ15, tuyến nhánh từ30 |
| Hàng ngày | V01-D01…D03,3 mẫu | Sau M04; chọn việc giúp cộng đồng, không bắt làm cả3 |
| Hàng tuần | V01-W01…W02,2 mẫu | W01 sau M06; W02 sau M08; mục tiêu nhiều phiên, không ép lịch raid |
| Khám phá truyền thuyết | V01-LEG01…03,3 tuyến ngắn | Khám phá chủ động, lưu phát hiện lâu dài; không đồng nghĩa câu nào cũng đúng |
| Câu chuyện môi trường | ENV01–ENV03,3 chuyện | Không dấu nhận việc, không bắt chuyển thành nhiệm vụ có thưởng |
| Phó bản hầm ngục | DG-V01-01,6 phòng/1 boss | M07–M08 truyện solo; khảo sát lặp chỉ là phần chơi lại |
| Hầm khám phá | ECO-V01-01…02,2 hầm nhỏ | Thế giới mở, tự chọn, không boss; dùng2trong8rương đã có |

Ngày/tuần là gói bổ sung riêng, không ngầm cộng vào32main/38side của năm vùng. LEG là hệ khám phá có nhật ký riêng, không đếm ENV01–03 lần nữa để tăng số lượng. Chưa đặt thêm số tiền/XP hay tỉ lệ loot vào tài liệu truyện.


## 4. Tuyến chính và phụ đã chốt

M01 **Một chỗ bên bàn ăn** → M02 biến cố và dụng cụ hỏng → M03 ưu tiên cứu thuốc/dụng cụ → M04 Maera nhận trách nhiệm, trao phiếu Tro Trắng → M05 thử công cụ không chọn huyết thống → M06 so hai trạm → M07 sao hồ sơ trước trận → M08 xử lý Oren, bàn giao và tự chọn lúc rời vùng. Tên chính xác và toàn bộ mục tiêu/thoại theo07; không sửa thứ tự phiếu hay trao lại đồ nguyên vẹn vì bản tóm tắt.

Sáu tuyến phụ giữ nguyên: **Tấm ván cuối cùng; Một nồi nước sạch; Đèn bến không còn tàu; Dấu vết không phải tội danh; Những chiếc cốc khác nhau; Dấu chân tránh dòng nước**. Kết quả có phản hồi qua14. SQ03 có Yara ghé bến nhánh; cư trú chính của bà ởV02 nên không cộng vào12 cư dân V01. Tovan tương tự là người nối tuyến, không tự thành cư dân thứ13.

## 5. Không có tuyến chức nghiệp ở cấp1–10

V01 không có nhiệm vụ chuyển chức, nhiệm vụ định hướng nghề, chứng vật nghề hoặc phiếu giới thiệu học nghề. Chuyển chức thật bắt đầu từ cấp15, chuyển nhánh từ30 theo15/16. Không đưa một tuyến chuẩn bị bắt buộc vàoV01 rồi dùng nó làm điều kiện ngầm ở15.

Người chơi có thể xem trước thông tin nghề trong giao diện và dùng bộ tập tân thủ hiện có. Việc xem không có mã nhiệm vụ, tiến độ, phần thưởng hoặc vật phẩm nhận kèm. Ilan hướng dẫn thao tác phổ thông để sống sót, không làm thầy chuyển chức hoặc giao bài học chức nghiệp.

## 6. Tuyến hàng ngày —3 việc có lý do tồn tại

### V01-D01 — Một vòng nước sạch

**Người nhận:** Dara, sau M04. Cộng đồng cần kiểm đầu lấy nước hôm nay, không phải thiết bị từng sửa hỏng lại trong lịch sử. Đi đọc hai dấu trạm an toàn và mang mẫu được cấp về; không nộp thuốc mua hoặc tiêu tài nguyên hiếm. Lấy mẫu sai có hướng dẫn làm lại, không phạt bằng nhiễm bệnh trại.

**Kết:** báo “đã kiểm trong ca”, khác M06 giải nguyên nhân đầu tiên. Không cần mưa/ngày nắng cụ thể. Neris có ghi chú chuyên môn nhưng Dara nhận bàn giao, tránh kéo người chơi chạy qua nhiều bàn chỉ để nhận thưởng.

### V01-D02 — Kho đủ cho ca sau

**Người nhận:** Pella Norr. Xem mục thiếu ở kho và chuyển một gói vật tư nhiệm vụ tới bếp/xưởng trong đường an toàn. Gói cấp cho đúng nhiệm vụ, không lấy đồ người chơi đang trang bị, không bán hoặc đổi vàng. Có thể dừng phiên giữa chừng; gói không mất khi chết hoặc dùng dịch chuyển hợp lệ.

**Kết:** nhận biên nhận kho và phản hồi người nhận. Dân vẫn tiếp tế khi player bỏ qua; không hiện cảnh đói chết để ép đăng nhập.

### V01-D03 — Dấu đường dưới cỏ

**Người nhận:** Vaela tại lán rừng. Kiểm hai cọc cảnh báo trên tuyến đã đánh dấu, thay dây được cấp và báo dấu nguy hiểm. Có thể đi vòng quái, không bắt giết tinh anh hoặc tranh một vật thể dùng chung. Điểm lấy đủ tương tác riêng cho từng nhiệm vụ.

**Kết:** cập nhật ca tuần tra, không khám phá lại cùng bí mật. Khi đã học đường từ trước, thoại ghi nhận quen tuyến. Đếm đúng credit một lần dù party cùng tương tác.

## 7. Tuyến hàng tuần —2 việc tích lũy không ép lịch hẹn

### V01-W01 — Một tuần giữ đường

**Nhận:** Maera sauM06. Trong kỳ, hoàn thành ba nhóm hành động khác nhau: hỗ trợ nước, vận chuyển và kiểm đường. Mỗi nhóm có đường làm một lượt riêng; việc ngày đúng nhóm có thể cùng ghi nhận, không bắt ba ngày đăng nhập. Làm một nhóm ba lần không thay ba nhóm.

**Lore:** ca trực cần công việc được kiểm từ nhiều phía, không chỉ một chiến công. Không yêu cầu giờ thực, boss map hoặc cóbang. Bàn giao choMaera, nhật ký kể người đã cùng làm, không chỉ một thanh điểm.

### V01-W02 — Bản kiểm định sau cánh cửa

**Nhận:** Neris sauM08, tại trạm suối hoặc cửa hầm. Dùng chế độ khảo sát hầm: kiểm nguồnP2, xem bản đối chiếuP3 và xác nhận đường thoátP6. Có thể bỏ qua trận mô phỏng Oren; không bắt giết lại người đã được cho nghỉ.

**Lore:** kiểm công trình sau xử lý lần đầu, không phát hiện lạiC05. Trạng thái GATE của người chơi giữ nguyên. Đã hoàn tất kiểm định trong kỳ vẫn được giúp bạn, không nhận lại thưởng riêng.

## 8. Nhịp ngày/tuần và phần thưởng

Chốt lịch thiết kế: ngày mới04:00 theo giờ thế giới dùng múi giờAsia/Bangkok; tuần mới thứHai04:00 cùng múi giờ. Khi triển khai dùng đồng hồ server và mã kỳ, không theo giờ máy người chơi. Không áp lịch này sang thế giới lore như thể thời gian chỉ chạy một múi giờ.

Mỗi mẫu tối đa một lần nhận thưởng/nhân vật/kỳ. Không cộng chuỗi điểm danh, không bù vô hạn hoặc ép mua lượt. Kỳ thay khi offline vẫn giữ nhật ký câu chuyện; phần mục tiêu lặp chưa xong hết hiệu lực, vật phẩm nhiệm vụ kỳ cũ được thu hồi hoặc vô hiệu hóa đúng nguồn, không đụng đồ thường. Cảnh báo trong bảng việc trước khi nhận.

Thưởng đi qua cấu hình kinh tế chung: tiền sinh hoạt khóa phù hợp, vật tư dùng được tạiV01 và XP trong dải1–10. Không thưởng tiền nạp/tiền tự do giao dịch, không cấp chỉ số vĩnh viễn, SP/TP hoặc giới hạn tài khoản mới. Sau khi vượt dải10, XP việcV01 giảm về0; người chơi vẫn được giúp dân và nhận phần sinh hoạt đã cấu hình. Không ép farmV01 để lên45–60. Giá trị số/nhóm vật tư phải lấy từ bảng kinh tế đã kiểm, chưa gọi phần cân số là hoàn tất.

Main/SQ/LEG hoàn tất một lần vẫn giữ khi reset kỳ. Giao cùng lúc có khóa nhận thưởng theo nhân vật+nhiệm vụ+kỳ; party không nhân hai biên nhận của cùng người. Đây là yêu cầu thiết kế, chưa có backend thực thi.

## 9. Tuyến khám phá truyền thuyết

### V01-LEG01 — Người thắp đèn cuối cùng

**Khởi phát:** Halen nói một bản kể rằng “đèn chỉ sáng khi người gác xứng đáng”. Người chơi tìm dấu nghề trên bệ đèn, hỏiNeris về nguồn và xem một bản ghi sửa. Ba điểm tiếp cận được theo thứ tự tự do, không cần nhặt vật ngẫu nhiên.

**Phát hiện:** người ta đã kể công của nhiều thợ thành một vị cứu tinh đơn độc. Đèn cần nguồn và người chăm, không phán xét huyết thống. Bản dân gian vẫn có giá trị tưởng nhớ, được ghi riêng với điều đã kiểm chứng; không xác nhận có một vịthần đèn mới.

**Kết:** trang Sổ Truyền Thuyết có ba lớp “được kể/đã thấy/chưa biết”, không thêm công cụ combat. Phần công cụ không chọn người vẫn được dạy trongM05, không giấu manh mối chính ở tuyến phụ này.

### V01-LEG02 — Tiếng chuông thứ mười

**Khởi phát:** đọc dấu ở Sân Chuông Nứt hoặc nóiHalen. So ký hiệu trên hai chuông, vị trí đường truyền và bản nhịp còn đọc được. Không đợi chuông vang đúng một giờ ngoài đời hoặc thời tiết hiếm.

**Phát hiện:** tiếng người nghe không đồng nghĩa một người đã tự rung cả hệ; đường tín hiệu có thể truyền và lặp. Chưa đủ biết ai sửa, không lộ tênSoren/Kael hay chữ đồng thuận. Halen thừa nhận bản ông nhớ có phần không nghe trực tiếp.

**Kết:** lưu sơ đồ tín hiệu cục bộ và một câu hỏi cho Tro Trắng. Không phảiC07 hoặc tọa độ mạng phongấn. Người chơi được nghe lại âm kèm phụ đề/hình, không yêu cầu phân biệt âm sắc để hoàn tất.

### V01-LEG03 — Lối mòn của người không trở lại

**Khởi phát:** Vaela chỉ một cọc bị che ởBìa Rừng; tìm vết sửa cầu, dấu nghỉ và đồ vật được chủ thể xác nhận. Tin đồn cho rằng “rừng nuốt người” không được tự coi là sự thật.

**Phát hiện:** một tuyến cũ bị bỏ vì đường nước đổi và biển bị dời. Có người chưa tìm được, nhưng dấu tích này không chứng minh tất cả đã chết hoặc bị nguyền. GiúpRurik đặt biển chỉ đường mới, giữ tên người mất tích trong sổMira.

**Kết:** mở tuyến đi bộ hợp lệ đã có trong phạm vi layout, không lối tắt xuyên nước sâu/collider. Không cần giết đầuđàn hoặc mang thi thể về. Không lấy nhân vậtEdran thay người mất tích để tạo twist.

## 10. Hầm ngục và đối đầu ngoài trời

**DG-V01-01 Hầm Phong Ấn Cổ:**6phòng,1boss Oren, nguồn và3lựa chọn theo08; hồ sơ18 mở sâu ra/vào, chiến đấu, nhóm, chơi lại và phần thưởng đặc thù. Đây là nội dung bắt buộc được hoàn thành solo ởM07/M08, không raid tânthủ.

Bossmap và2tinh anh ngoài trời theo182; gặp chúng không phải điều kiệnM08/LEG/chuyểnnghề. Có cảnh báo vùng, đường tránh và ranh quayvề, không kéo vào trại. 18mẫu theo183 không có nghĩa18loài mới; giữ ID và chủng hình đã phân loại. Không tự tạo một boss thứhai dưới hầm vì gọi miniboss bằng tên khác.

8rương theo184/196: giữ vị trí hợp lệ theo layout tương lai; không chứa manh mối bắt buộc duy nhất, chứng vật chuyển nghề hay tiền giao dịch láchhạnmức. Không khóa bởi mũ nghề, ngọc, bay hoặc trạng tháiGATE.

## 11. Checklist chốt gói và phần còn phải hoàn thiện

Đã chốt cấu trúc tuyến chính/phụ/xuất thân/ngày/tuần/khám phá và câu chuyện môi trường, câu chuyện vùng,12cư dân,6không gian gameplay chính,6phònghầm,1boss truyện, ngày/tuần và3truyềnthuyết. M01–08/SQ01–06/OR01–05/ENV01–03 có hồ sơ07; NPC14/19 và dungeon08/18 là nguồn bổ trợ, không nhiệm vụ đếm trùng.

Trước triển khai còn phải hoàn thiện: bảng cân số theo nguồn chung, rewardID vàloot xác suất, mapping tất cảL/tiểukhu vào tọađộ thật, toàn bộ thoại biến thể, UI Sổ Truyền Thuyết/bảngviệc, hình NPC/icon/vật phẩm, animation và đi thử tuyến trong engine. Không ghi “map1–10 hoàn thành toàn bộ” khi các phần này chưa có. Bước viết V02 tạm lùi sau góiV01; không xóa khung thếgiới/nămvùng.
