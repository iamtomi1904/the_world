> **Hầm khám phá và phó bản ·22/10/2026:** [Story20](../mmorpg-story-v1/20_BINH_MINH_HAM_KHAM_PHA_VA_CAU_TRUC_NHIEM_VU.md) chốt V01 có1phó bản lõi/1boss +2hầm khám phá nhỏ khôngboss, giữ8rương (6ngoài+2tronghầmnhỏ). Mỗi map vẫn1phó bản lõi, số hầm khám phá vùngsau chưachốt. V01 có8gói chính/30chặng, không8đoạnthoại hoặc38main. Giữ525=127/13/385; asset/cân số/playtest cònmở.

> **Nhịp và phân bổ hiện hành:** [MAP-05 hồ sơ196](196_MAP_05_NHIP_KHAM_PHA_MAT_DO_VA_MANG_DUONG.md) phân bốn loại đường,62vị trí rương và nhịpPOI từng vùng; đây là phân bổ trước vẽ, chưa tọa độ/loot hoặc số đo thực.

> **Đồng bộ bản đồ phe/bang ·22/10/2026:** [Phụ lục187](187_MAP_DONG_BO_PHE_BANG_HOI_VA_W06.md) nối W06/đại bản doanh/nhàbang/arena vào địa lý, khí hậu và luật vùng; sửa phạm vi6vùng ngoài trời, không PKnămPvEcũ. Giữ525mục:119hoànthiện/11mộtphần/395chưathiếtkế; chưa vẽ/code. Các phạm vi cũ bên dưới là lịch sử khi xung đột.

> **Mở rộng phe/PvP ·22/10/2026:** [Hai phe, bang hội và năm loại không gian mới](186_FACTION_01_HAI_PHE_BANG_HOI_VA_CHIEN_TRUONG.md). Chọn phe khi chuyển chức15; W06cấp40–60cóPKđối phe, samefactionchỉđấu trong giải chính thức. Thay giới hạn “khôngmap46–60/chưaPvP” riêng phạm vi mới, giữnguyên5vùngPvEcũ/cap60. Checklist **525mục:119hoànthiện /11mộtphần /395chưa thiết kế**. Chưa code/vẽ.

> **MAP-01 ·22/10/2026:** [Địa lý Elarion và mạng đường](185_MAP_01_DIA_LY_ELARION_VA_MANG_DUONG.md) đã có mô tả/brief, chưa có bản vẽ tỷ lệ nên giữ một phần. Sửa rõ Merrowen là cảngTâyNam, Nocthollow là vùngtrũng, Astravelle làcaođịa; nămvùng không đồng nghĩa mườithành đãdựng. **118 hoàn thiện /11 một phần /384 chưa thiết kế =513**.

# MAP-04 — Hồ sơ thiết kế năm vùng thế giới mở

> **Chốt phân bố NPC r003 ·22/10/2026:** mục16 bổ sung NPC chức năng và cốt truyện ngoài hoang dã. Khu an toàn là điểm tập trung NPC, không phải nơi duy nhất có NPC. Mỗi vùng có 6NPC ở khu an toàn, số còn lại phân bố ngoài hub; giữ tổng82NPC. NPC đứng ngoài không tự tạo vùng an toàn.

> **Bổ sung r002 ·22/10/2026:** mục9–15 mô tả cảnh vào vùng, tuyến trải nghiệm, đời sốngNPC, dấu khám phá và phản hồi truyện. Đây là mở sâu cùng MAP-04, không thêm task hoặc tăng số hoàn thiện. Tiến độ giữ118/10/385. [Roadmap](/roadmap.html#tasks).

Ngày 22/10/2026. Hoàn thiện hồ sơ vùng ở mức mô tả; chưa vẽ layout, sản xuất asset hoặc triển khai game. Phong cách pixel V4 trong thế giới 2.5D, web và PC. Không sửa chế độ thủ thành.

## 1. Nền tảng dùng chung

Năm vùng là năm không gian nội dung, không phải năm thành và không tương ứng một-một với sáu hồi truyện. Vị trí thật, hướng sông và khoảng cách liên thành còn phụ thuộc MAP-01; các lối nối bên dưới là quan hệ hành trình, chưa xác lập hai thành xa nhau thành hàng xóm. Mọi tên tiểu khu/dungeon mới là tên làm việc.

| Vùng | Cấp nội dung | Quy mô so V01 | NPC có hồ sơ | Mẫu quái ra mắt | Tinh anh | Boss map | Dungeon | Rương ẩn |
|---|---|---:|---:|---:|---:|---:|---:|---:|
| V01 Bình Minh | 1–10 | 1× | 12 | 18 | 2 | 1 | 1 | 8 |
| V02 Merrowen | 11–20 | 3× | 16 | 18 | 3 | 1 | 1 | 12 |
| V03 Sylvaris | 21–30 | 3× | 18 | 18 | 3 | 1 | 1 | 14 |
| V04 Nocthollow | 31–40 | 4× | 20 | 18 | 4 | 1 | 1 | 16 |
| V05 Tiền tuyến ấn cổ | 41–45 | 4× | 16 | 18 | 4 | 1 | 1 | 12 |
| Tổng lõi PvE | Nội dung truyện tới45, nhân vật tới60 | 15× | 82 | 90 | 16 | 5 | 5 | 62 |

**Ngoài lõi PvE:** W06 tranh chấp40–60 dự toán6×V01; FM01hai phe, GM01nhà bang và GA01/GA02đấu trường được mô tả tại [187](187_MAP_DONG_BO_PHE_BANG_HOI_VA_W06.md). Sáu vùng ngoài trời dự toán21×V01; chưa bao gồm trụ sở/arena/dungeon. NPC/quái/asset mới chưa nằm trong82/90của bảng trên.

Quy mô là diện tích thiết kế tương đối, không kéo giãn tile hay nhân thời gian chạy. Các vùng lớn cần thêm nhánh khám phá và điểm nghỉ. Mỗi vùng có đường đi cốt truyện solo, nhánh khám phá và nội dung chung; boss map không giữ manh mối bắt buộc duy nhất. Khoảng45→60 giữ thiết kế luyện dài hạn, chưa thêm map46–60.

## 2. V01 — Thung Lũng Bình Minh, ngoại vi Ẩn Thành

**Cảm xúc:** mất mát nhưng còn nơi để trở về. **Câu hỏi truyện:** người dân đã sống sót bằng cách nào, và vì sao người cha nuôi rời đi trước biến cố?

Văn hóa cứu trợ: người làm ruộng, thợ thủ công và lính địa phương dựng lại đời sống. Kiến trúc gỗ, nền đá thấp, mái ngói đất, vải vá và thanh chống; nhà đang ở khác đống đổ nát. Hub là khu ngoại vi còn sinh hoạt, không phủ nhận phần lõi Ẩn Thành bị phá hủy. Bảng màu cỏ xanh ấm, đất nâu, đá xám sáng, điểm vải lam.

| Tiểu khu | Chức năng, địa hình và câu chuyện |
|---|---|
| Trại Bình Minh | Hub an toàn bên nền công trình cũ; lều, bếp, giếng và khu sửa đồ có đường vận chuyển |
| Đồng Ruộng Gãy Bờ | Luống đất, hàng rào đổ, thú mò thức ăn; dạy đọc đòn húc ở khoảng trống |
| Suối Sỏi Trắng | Bãi lội rõ đáy, cầu nhỏ cho đường chính; lau và cây ven nước, dạy phân biệt cạn/sâu |
| Bìa Rừng Cũ | Sói, nhện, cây mục; dấu chân dẫn tới tinh anh đầu đàn, có đường vòng |
| Sân Chuông Nứt | Tạo vật canh ấn hỏng, cây cháy cục bộ; dấu chuông sai nhịp mở câu hỏi về phong ấn |
| Cửa Hầm Phong Ấn | Điểm vào dungeon có khoảng chuẩn bị an toàn; cảnh điều tra dẫn về di vật và tuyến hàng |

Sinh thái dùng MOB-V01-01…18, toàn bộ mặt đất; không quái bay, boss bay hoặc pha đối không. Nắng/mây/mưa nhẹ/sương sáng; không bão gây sát thương. Suối trong xanh ngọc nhạt; dòng sông sâu có cầu, không học bơi. Tài nguyên định hướng: thảo mộc đồng, gỗ rụng, đá xây và sắt vụn có nguồn; loại item/loot cụ thể theo catalog, chưa định tỷ lệ.

12 vai NPC dự toán: chỉ huy cứu trợ, người chăm sóc gia đình, thợ rèn, dược sư, thủ kho, người nấu bếp, người hướng dẫn tập luyện, nông dân, thợ mộc, trinh sát, người giữ chuông, người ghi danh người mất tích. Đây là slot vai trò chưa đặt tên chính thức; mỗi người có việc riêng và nơi ở, không tất cả đứng một hàng bán hàng. Mentor chỉ giải thích lựa chọn tương lai, không ép nghề trước15.

Nhiệm vụ đại diện **“Bữa tối còn thiếu”**: khảo sát ruộng, giúp sửa chỗ dự trữ, chọn ưu tiên mang dụng cụ hay lương thực về; phản hồi là hoạt động và lời thoại trong lớp truyện cá nhân. Đầu mối người cha lấy từ đồ vật và lời chứng, không rơi ngẫu nhiên từ boss.

Dungeon Hầm Phong Ấn Cổ: đề xuất một boss Kẻ Canh Cổng, có tuyến truyện solo. Boss map là thực thể canh ấn khác ở ngoại vi, không dùng hai tên cho cùng cá thể. Hai tinh anh và8rương nằm ngoài đường an toàn; rương không đặt sau yêu cầu ngọc/bay chưa có. Kết vùng khôi phục đủ sinh hoạt, tìm được đầu mối điều tra tuyến vận chuyển; không “sửa xong” toàn bộ Đêm Gãy Ấn.

## 3. V02 — Tuyến Valedorn, hạ lưu Merrowen

**Cảm xúc:** nhộn nhịp bề mặt, thiếu tin cậy bên dưới. **Câu hỏi truyện:** ai hưởng lợi khi tuyến cứu trợ đứt, và vật chứng bị chuyển đi đâu?

Văn hóa bến nước, phường vận tải và đoàn hàng. Kiến trúc nhà kho chân cao, ván bến, cọc buộc thuyền, đê thấp và mái che hàng. Không biến mọi thương nhân thành kẻ xấu; phân biệt buôn sinh kế với buôn di vật. Bảng màu phù sa nâu lục, gỗ ướt, vải chàm và dấu niêm hàng đỏ đất.

| Tiểu khu | Chức năng, địa hình và câu chuyện |
|---|---|
| Bến Cứu Trợ | Hub dịch vụ, bãi dỡ và nơi người chờ tin; hàng cứu trợ có dấu nguồn |
| Bãi Lau Hạ Lưu | Đường đất cao và bãi lội thấp, sinh vật bờ sông; tránh ép xuống nước |
| Đê Vỡ Cũ | Lối vòng qua chỗ sửa đê, dấu ngập kể chuyện quá khứ; mưa hiện tại không tự cắt đường |
| Kho Ba Niêm | Kho hợp pháp xen kho lậu; điều tra dấu niêm và lời khai mâu thuẫn |
| Đường Xe Lạc | Khu phục kích có xe, chướng ngại đọc được, đường tránh cho người vận chuyển |
| Cống Dẫn Hàng | Lối vào dungeon, luồng nước trang trí và sàn khô hợp lệ |

18mẫu MOB-V02, ba tinh anh bãi bồi/kho/tuyến đò; boss sông giao tranh từ bờ/bãi cạn. Không bắt có quái bay. Mưa, sương sông và gió lau; nước phù sa không đồng nghĩa nhiễm độc. Tài nguyên: sợi lau, vật liệu bến, khoáng bồi lộ và thảo dược ven đê, có quyền khai thác theo hệ nghề sau này.

16slotNPC:6dịch vụ/vận hành hub,4nghề nước và vận tải,3nhân chứng/dân cư,2đại diện lợi ích hợp pháp,1người điều tra. Vai được phát triển thành người cụ thể ở NPC, không dùng số lượng này thay hồ sơ. Dungeon đề xuất **Kho Ngầm Dưới Bến**, hai boss có vai trò khác nhau; truyện solo có cách xử lý từng cơ chế.

Quest đại diện **“Ba dấu niêm, một chuyến hàng”**: đối chiếu chứng từ, khảo sát bến, truy một nhánh hàng; có thể chứng minh lỗi của một cá nhân mà không kết tội cả phường vận tải. Mở lại một hành lang cứu trợ và thu bằng chứng hướng Tu Viện Tro Trắng; không cần giết boss map. 12điểm rương gắn gác kho, bến bỏ và đường đê, không thưởng vì vượt collider sông.

## 4. V03 — Biên rừng Sylvaris, đường hành hương Aurelia

**Cảm xúc:** vẻ đẹp có người gìn giữ, không phải rừng trống để khai thác. **Câu hỏi truyện:** bảo vệ rừng, nuôi sống cộng đồng và giữ lời thề có thể cùng tồn tại thế nào?

Khu cư trú của nhiều cộng đồng, không khóa vùng chỉ cho Elf. Gỗ lắp vào nền rễ/đá có khoảng thở, bậc thấp, mái lấy sáng; tránh nhà cây cầu kỳ phủ mọi màn hình. Đền hành hương có dấu sửa chữa và vật dụng đời sống. Bảng màu rêu sâu, xanh ngọc nước nguồn, gỗ ấm và điểm vàng lá.

| Tiểu khu | Chức năng, địa hình và câu chuyện |
|---|---|
| Trạm Khế Ước | Hub giữa tuyến cư trú và hành hương, có ranh trung lập rõ |
| Rừng Rễ Sâu | Tán dày vừa, đường rễ có khoảng mở, thú và linh thể bảo hộ |
| Nguồn Hai Màu | Nguồn trong cạnh nhánh nước bị ảnh hưởng; dẫn chứng cần kiểm nghiệm |
| Bãi Rìu Im | Gốc chặt, lán lao động và dấu trả lương; kể lợi ích khai thác mà không chỉ có kẻ ác |
| Đường Đèn Hành Hương | Lối cũ có đèn/cột chỉ; mở nhánh di tích và nơi nghỉ |
| Điện Rễ Khế Ước | Cửa dungeon nằm trong nền đá ôm rễ, không phóng to một sprite cây làm phòng |

18mẫu MOB-V03; harpy trinh sát có tổ/vách và bóng rõ, chỉ xuất hiện ở nhánh phù hợp. Ba tinh anh và boss thực thể rừng lạc nhịp có lãnh địa tách đường chính. Gió dưới tán nhẹ hơn khoảng trống; mưa rơi và giọt tán khác nhau. Tài nguyên: nhựa rơi, dược liệu bóng râm, nấm và đá khế ước đã vô hoạt; không coi mọi linh thể là vật liệu giết lấy.

18slotNPC:6dịch vụ/cư trú,4bảo tồn và dẫn đường,3lao động/khai thác,3hành hương/lưu trữ,2nhân chứng tranh chấp. Dungeon **Điện Rễ Khế Ước** đề xuất hai boss, kể nghĩa vụ bảo hộ qua kiến trúc và cơ chế.

Quest đại diện **“Nguồn nước không đứng về phe nào”**: lấy mẫu ở những điểm có nguồn gây ảnh hưởng khác nhau, hỏi người canh nguồn và lao động, thử phương án khôi phục tại cảnh riêng. Kết quả mở đối thoại về lời thề thủ hộ, không làm toàn bộ rừng đổi trạng thái với mọi người. Đây cũng là vùng có nội dung hỗ trợ tìm hiểu nhánh cấp30, không biến boss thành điều kiện chuyển nghề bắt buộc chưa được SKILL chốt. 14rương gắn dấu hành hương/rễ/di tích có thể tiếp cận đúng quyền di chuyển.

## 5. V04 — Vành đai Nocthollow, cao địa Astravelle

**Cảm xúc:** lạnh và bất an nhưng vẫn có con người sống ở đây. **Câu hỏi truyện:** ai bị gắn nhãn quái vật, ai đã bỏ qua cảnh báo, và bằng chứng thực sự nói gì?

Kiến trúc đá giữ nhiệt, mái dốc, cửa chắn gió, mỏ bỏ và công trình nghiên cứu sửa chắp. Khu cư trú Bất Tử Giả có sinh hoạt/lề luật, không dùng texture nghĩa địa cho mọi ngôi nhà. Bảng màu đá xanh thép, gỗ xám, ánh đèn hổ phách; tím thí nghiệm chỉ cục bộ.

| Tiểu khu | Chức năng, địa hình và câu chuyện |
|---|---|
| Quán Trạm Chắn Gió | Hub dịch vụ và cứu nạn trên đường đèo, chỗ trú đọc rõ |
| Sườn Thông Bạc | Cao độ, bậc và lối lên; thú núi có tuyến hợp lệ, không xuyên vách |
| Nghĩa Trang Đứt Sổ | Xác sống và hồ sơ mất trang; không đồng nhất với cư dân Bất Tử Giả |
| Khu Cư Trú Lặng | Khu gặp gỡ trung lập; đe dọa phải có hành vi cụ thể, không bật combat theo race |
| Hồ Kính Lạnh | Hồ sâu có đường bờ/cầu; các vũng nhiễm tách vùng cảnh báo |
| Cơ Sở Đèn Tắt | Phế tích thí nghiệm và cửa dungeon, đường vận chuyển cũ kể chức năng từng phòng |

18mẫu MOB-V04, bốn tinh anh; boss map tạo vật giám sát ở bồn địa có đường tránh. Mưa lạnh/sương/gió; tuyết chỉ tiểu vùng cao. Tài nguyên: khoáng lộ, thảo dược chịu lạnh, vật liệu cơ khí và mẫu tinh thể có nguồn gốc điều tra; không khai thác thi thể dân cư như quặng.

20slotNPC:6dịch vụ/cứu nạn,4cư dân và nghề cao địa,4nhân chứng/Bất Tử Giả,3người nghiên cứu có quan điểm khác nhau,3người giữ hồ sơ/điều tra. Dungeon **Cơ Sở Đèn Tắt** đề xuất ba boss với ba nhiệm vụ cũ của tạo vật; không ba lần chỉ tăng HP.

Quest đại diện **“Người còn nhớ tên mình”**: kiểm lời chứng, sổ cư trú và báo cáo thí nghiệm, phân biệt người mất ý thức với người còn chủ thể. Người chơi chọn cách bảo vệ nhân chứng trong phần truyện riêng, không giết NPC dịch vụ chung. Kết vùng có chứng cứ quy trách nhiệm cá nhân, chưa biết hết bí mật Hội Đồng. 16rương là vị trí thiết kế, không đồng nghĩa16phần thưởng độc nhất chưa cân bằng.

## 6. V05 — Tiền tuyến ấn cổ, lối tiếp cận Sahr Kareth

**Cảm xúc:** khẩn trương nhưng có chuẩn bị và hậu cần. **Câu hỏi truyện:** ổn định điểm neo bằng cách nào mà không lặp lại sai lầm trước đây?

Trại liên lực lượng có thợ sửa, kho nước, khu thương binh và bàn đo phong ấn. Kiến trúc đá cũ xen công sự gỗ/vải mới; mỗi phía có ký hiệu chức năng, không phân thiện ác bằng màu áo. Bảng màu đá đất, cỏ cứng, vải bạc nắng; ánh ấn tương phản cục bộ, không phủ bloom toàn map.

| Tiểu khu | Chức năng, địa hình và câu chuyện |
|---|---|
| Trại Ba Tuyến | Hub với khu chữa trị, điều phối, sửa và tiếp tế riêng |
| Mạch Nước Cạn | Nguồn sống của người và thú; tranh chấp tài nguyên có dấu chứng |
| Khe Đá Chở Lõi | Đường vận chuyển qua vách, lối lên/đường vòng hợp camera2.5D |
| Trại Phá Neo | Quân địch có kho, ca gác và tuyến tiếp tế; không spawn như thú rừng |
| Vành Ấn Cổ | Vùng bất ổn có cảnh báo và điểm trú, không sát thương toàn màn do thời tiết |
| Khoang Neo Sâu | Điểm dungeon bên dưới công trình; không hé trọn Vực Rỗng ngay cửa |

18mẫu MOB-V05, bốn tinh anh và một boss phá ấn chung. Quái bay có đường báo, bóng và giai đoạn tiếp cận theo COMBAT; ngựa có cánh không tự cấp quyền vượt khe. Khô, bụi, mưa hiếm; dị tượng tro/ánh ấn là sự kiện có phạm vi. Tài nguyên: khoáng chịu nhiệt, sợi cỏ cứng, lõi vô hoạt và vật liệu quân nhu hợp quyền sở hữu, không cho lấy cắp kho chung vô hạn.

16slotNPC:6dịch vụ/hậu cần/chữa trị,3điều phối và dẫn đường,3đại diện lợi ích,2người kỹ thuật phong ấn,2nhân chứng tuyến trước. Dungeon **Khoang Neo Sâu** đề xuất ba boss theo chức năng canh giữ/phân phối/điều tiết; tên và bộ skill chốt ở BOSS.

Quest đại diện **“Giữ một điểm neo, giữ một lời hứa”**: thu dữ liệu từ ba tuyến, lựa chọn phân bổ đội hỗ trợ trong cảnh riêng, thực hiện một phương án ổn định có cái giá được giải thích. Khép chiến dịch địa phương cấp45, mở chứng cứ về chiếc khóa sống/người cha; không tuyên bố đã khép sáu hồi. 12rương khám phá và nội dung lặp phải theo loot/cap; không tự biến map thành nguồn tiền không khóa vô hạn cho cấp60.

## 7. Quy tắc chung để dựng lại vùng

Mỗi vùng phải có: một hub còn sinh hoạt; ít nhất một đường truyện dễ đọc; các nhánh tinh anh/boss/dungeon có dấu dẫn; nơi nghỉ và lối quay lại; dải chuyển sinh thái; lớp trang trí cây/đá/đồ nghề phù hợp chức năng. NPC đi làm/nghỉ có nhịp sống, nhưng dịch vụ thiết yếu luôn tiếp cận được theo MAP-10.

Các nhómNPC trên là82slotvai trò có nơi cư trú chính; không tính lại một NPC đi qua vùng khác thành hai người, không dùng dân nền thay hồ sơ có danh tính. Cần NPC-01 trở đi để đặt tên, viết quan hệ/thoại và lịch sinh hoạt. Slotvai trò không có nghĩa82NPCđã viết xong.

Năm dungeon có gợi ý1/2/2/3/3boss ở cấu trúc truyện chuẩn, tổng11đối đầu dungeon, tách5bossmap và16tinh anh. Đây là quyết định bố cục để phát triển hồ sơ, chưa chốt chế độ khó hoặc giá trị thưởng; không cộng thành101mẫu quái nền. Mọi dungeon có đường truyện solo; chế độ tổ đội có thể thêm phối hợp nhưng không giữ manh mối độc quyền.

Rương gắn tín hiệu quan sát như đá khắc, vật liệu lạ, tuyến vận chuyển cũ; không dựa vào exploit camera hoặc đi xuyên tường. Không giấu nhiệm vụ chính trong rương ngẫu nhiên. Thời gian di chuyển, tọa độ spawn, kích thước tile và số vật thể màn hình phải xác nhận ở MAP-01/05/ENV/scene camera, không tự hardcode từ diện tích tương đối.

## 8. Bàn giao và giới hạn

Đã chốt hồ sơ văn hóa, kiến trúc, màu, tiểu khu, thời tiết/nước, nhóm cư dân, quái, tài nguyên, mối đe dọa, quest đại diện và cầu nối truyện của năm vùng. Chưa có bản đồ vẽ, tọa độ,82hồ sơNPC, questscript, skillboss, economy hoặc asset mới. Không đóng MAP-01/02/03/05…09, NPC, QUEST, BOSS hoặc ENV chỉ vì có mô tả này.

Điều kiện duyệt sau này: đối chiếu địa lý Elarion; đi diễn thử tuyến solo; kiểm đường an toàn/độ sâu nước/cao độ; không bayV01; đúng ngân sáchNPC/quái/tinhanh/boss/rương; đối chiếu lịch sử thật/lời khai; thay đổi cá nhân không sửa thế giới chung. Chưa có kết quả playtest.

MAP-04 hoàn thiện hồ sơ; tiến độ **118 hoàn thiện /10 một phần /385 chưa thiết kế =513**. Tiếp theo nên làm **MAP-01 — sơ đồ địa lý và quan hệ đường đi**, dừng trước sản xuất bản vẽ khi đến đầu việc cần vẽ riêng; CAP-01 kinh tế vẫn mở.

Nguồn: [phạm vi15](15_PROD_06_PHAM_VI_VA_NGAN_SACH.md), [cấp60/nội dung45](91_CAP_60_NOI_DUNG_45_VA_XP_HAU_TRUYEN.md), [thời tiết181](181_MAP_10_THOI_GIAN_THOI_TIET_HE_SINH_THAI.md), [sinh cảnh182](182_MAP_12_SINH_CANH_QUAI_DONG_VAT_VA_BOSS.md), [90mẫu183](183_MOB_01_DANH_MUC_90_MAU_QUAI.md), [checklist](02_THE_GIOI_MY_THUAT_NHIEM_VU.md).

## 9. Bình Minh — trải nghiệm từ nơi trú tới dấu vết đầu tiên

**Cảnh bước vào.** Đường xuống trại chạy qua một bờ đất thấp. Người chơi nhìn thấy khói bếp, mái nhà vá và cánh quạt giếng trước khi thấy bảng nhiệm vụ. Phía xa là một phần thành bị hư hại, vừa đủ xác định biến cố đã xảy ra; không đặt toàn bộ thành ở cùng tỷ lệ như đồ trang trí nhỏ. Tiếng búa, nồi bếp và cuộc gọi tìm người tạo cảm giác cộng đồng đang sống.

**Bố cục chức năng.** Cổng trại nối sân phân phối; bếp gần kho thực phẩm, thợ rèn có bãi phế liệu ngoài vùng ngủ, khu chữa trị yên hơn và gần nguồn nước sạch. Tuyến chính nối trại→ruộng→cầu suối→sân chuông→cửa hầm. Nhánh bìa rừng tách khỏi ruộng rồi vòng về suối, tạo một vòng khám phá; không bắt chạy ngược cùng hành lang nhiều lần. Đây là topo chức năng, chưa chốt hướng bắc/nam hoặc khoảng cách thật.

**Ba chặng chơi.** Chặng đầu giúp trại giải quyết nhu cầu cụ thể, học đánh/né và đọc vật tương tác. Chặng giữa thấy thú kéo về ruộng vì nơi trú cũ bị phá; nhiệm vụ dẫn tới dấu sói và cây đổ. Chặng cuối đối chiếu tiếng chuông với dấu trên di vật, khám phá hầm và nhận đầu mối tuyến hàng. Những chặng này không phải khóa cấp cứng trong vùng1–10.

**NPC có đời sống.** Người nấu bếp chờ lương thực, thợ mộc cần đinh từ đống tháo dỡ, người ghi danh hỏi người mất tích khi có đoàn trở về. Một dụng cụ cha nuôi từng sửa xuất hiện trong công việc, giúp kể tính cách qua việc làm; không cần mọiNPCđều biết bí mật của ông. Nơi ở và đồ dùng phản ánh nghề, không biến họ thành nút UI mang hình người.

**Khám phá và nguy hiểm.** Cỏ bị ép thành lối, vết cào trên gỗ và mồi bỏ dở báo bãi sói. Một hốc tường xây khác màu, đường dắt xe cũ hoặc vải mắc trong bụi là tín hiệu rương, không dùng đốm sáng khắp nơi. Tạo vật sân chuông có đường báo lực rõ trên nền ít rối. Boss map nằm ở nhánh có dấu cảnh báo; người mới đi đường chính không vô tình kéo boss vào trại.

**Phản hồi.** Sau cứu trợ, cảnh riêng có thêm bữa ăn, hàng rào được sửa hoặc lời hỏi thăm khác. Map chung vẫn có hạ tầng an toàn và NPC dịch vụ cho người chưa làm quest. Không cá nhân nào tự dựng lại toàn thành cho mọi người.

## 10. Merrowen — một tuyến hàng trở thành câu chuyện điều tra

**Cảnh bước vào.** Người chơi tới khu có mặt nước rộng hơn, cọc buộc thuyền và hàng chờ bên bến. Tiếng hàng kéo trên ván, mái chèo và chuông cân khác hẳn Bình Minh. Các kho có ký hiệu người gửi, bùn khô thành vạch trên chân tường kể một trận ngập trước đó.

**Đường đi.** Bến cứu trợ là nơi nhận định tình hình; đường đê nối kho hợp pháp và đường xe. Một nhánh xuống bãi lau để khảo sát hàng mắc cạn, một nhánh vòng vào kho bỏ. Các nhánh hội tụ tại điểm đối chiếu chứng từ trước dungeon. Cầu/đò tạo nút giao nhưng không là chỗ đặt quái khóa toàn bộ đường đi. Thuyền trang trí không mặc định là phương tiện tương tác.

**Xung đột nhiều phía.** Một chủ thuyền có thể chở hàng lậu vì bị ép nợ; một người giữ kho sửa sổ để giấu thất thoát, còn người lao động chỉ muốn được trả công. Người chơi thu đủ chứng cứ để phân biệt buôn di vật với vận chuyển đồ dân dụng, không xử mọi người quanh kho thành kẻ địch. Nhóm thù địch trong catalog cần dấu hiệu/quest context trước khi giao tranh.

**Nhiệm vụ đại diện mở rộng.** Dấu niêm không khớp không lập tức chứng minh ai phạm tội: phải đối chiếu cỡ dấu, điểm thay dây và thời điểm chuyến hàng. Hành động gồm quan sát kho, lấy lời chứng, kiểm dấu trên xe và ngăn một vụ chuyển hàng. Lựa chọn công khai chứng cứ hoặc bảo vệ người làm chứng đổi người liên hệ và lời thoại trong tuyến cá nhân; không đóng vĩnh viễn cửa hàng chung.

**Nước và sinh vật.** Lau tập trung mép bãi bồi, vật liệu trôi mắc phía phù hợp dòng nước khi MAP-01 xác định. Cua và ếch ở bờ thấp; nỏ thủ dùng vị trí có đường xuống hợp lệ. Sinh vật sông trồi lên bãi cạn cho boss map; không buộc nhân vật nhảy xuống dòng sâu để nhặt vật phẩm. Mưa làm ván ướt và mái nhỏ giọt, không ngầm giảm chính xác hoặc đổi bờ thành vùng chết.

**Kết vùng.** Một tuyến hàng có thể hoạt động lại; gia đình vẫn thiếu người, tổ chức vẫn có bất đồng. Mảnh hồ sơ dẫn người chơi tới câu hỏi về Tu Viện Tro Trắng và lời thề, thay vì chỉ nhận lệnh “sang vùng kế”.

## 11. Sylvaris — rừng có cư dân và ký ức

**Cảnh bước vào.** Lối hành hương từ khoảng sáng chuyển sang rừng có nhiều tầng: nền cỏ thấp, dương xỉ ở bóng, rễ lớn ven đường và tán cao vừa đủ thoáng. Có dấu giày, giỏ hàng và đèn dẫn đường chứng tỏ người vẫn qua lại. Giữ các khoảng nghỉ thị giác, không dùng lá và dây leo phủ mọi pixel.

**Tuyến khám phá.** Trạm Khế Ước nối đường hành hương, bãi khai thác và tuyến về nguồn. Từ mỗi tuyến có thể nhìn thấy dấu hướng tới di tích nhưng không lập tức đi thẳng qua vách. Cây cổ thụ làm mốc nhìn xa, bia/đèn làm mốc gần. Các lối về mở bằng tiến trình hợp lý như người dẫn đường chỉ lối, không nhất thiết tạo thêm dịch chuyển phép.

**Nguồn xung đột.** Khai thác gỗ giúp sống qua khủng hoảng nhưng một số cọc chặt đã xâm phạm vùng rễ bảo hộ. Nước đổi màu có thể đến từ vật liệu đào lộ, một nghi thức sai hoặc tác động điểm neo; người chơi kiểm từng giả thuyết thay vì nghe một lời rồi kết luận. Người giữ rừng cũng có quan điểm khác nhau, không tất cả Elf đứng cùng một phía.

**Hành động truyện.** Người chơi so mẫu nước ở nhánh nguồn/trước bãi chặt/sau di tích, nhìn vết rễ và hỏi người lao động. Có nhiệm vụ hỗ trợ người bị kẹt mà không phải giết linh thể bảo hộ; nếu có đường chiến đấu và thương lượng, điều kiện và phần thông tin bắt buộc phải tương đương. Thu mẫu là thao tác điều tra có ngữ cảnh, không biến thành chuỗi nhặt ba vật giống nhau.

**Hình và âm.** Gió quét qua khoảng trống trước rồi tới tán rừng; dưới tán nghe giọt đọng và tiếng gỗ. Đêm có đèn hành hương, không phát sáng toàn bộ cỏ. Tổ harpy ở nhánh cao được báo bằng lông, bóng và tiếng, không bổ nhào từ ngoài màn không báo. Thủy pháp/Mộc/Tinh Linh giữ vai trò riêng, không vì ở rừng mà một class được bỏ toàn bộ cơ chế.

**Kết vùng.** Người chơi hiểu bảo hộ có trách nhiệm và cái giá; góp phần thử một phương án khôi phục trong truyện riêng. Bằng chứng còn lại hướng tới trách nhiệm người ra quyết định ở vùng sau. Sự hồi phục lớn của rừng chung chỉ diễn ra khi có sự kiện thế giới được thiết kế riêng.

## 12. Nocthollow — phân biệt nỗi sợ với chứng cứ

**Cảnh bước vào.** Đường đèo có cọc báo gió, nhà đá cửa thấp và bó củi khô dưới mái. Bảng chỉ đường và dấu cứu nạn giúp vùng lạnh không thành mê cung tối. Nơi có người ở dùng ánh đèn ấm; khu thí nghiệm lạnh sáng bằng tinh thể yếu và vật thể hỏng, không dựa vào màn lọc tím cho cả vùng.

**Topo và cao độ.** Trạm chắn gió ở nút đường; sườn thông dẫn tới hồ và khu cư trú, đường công vụ cũ nối cơ sở nghiên cứu. Nghĩa trang nằm ở nhánh có ngữ cảnh, không chắn cửa làng của Bất Tử Giả. Mỗi cao độ có lối lên, mép và bóng đọc được; cầu trên cao không khiến đạn trên đất trúng người trên cầu. Chi tiết tầng va chạm vẫn phải kiểm ở scene2.5D.

**Cư dân.** Có người giữ thói quen nghề cũ sau biến đổi, người sợ bị nhận ra và người bình thường sẵn lòng làm chứng. NPC còn chủ thể cần được giới thiệu bằng hành vi và lời nói trước khi người chơi gặp kẻ mất ý thức. Không gắn con trỏ đỏ lên cả cộng đồng để rồi lời thoại mới bảo họ vô tội.

**Điều tra.** Sổ cư trú, dấu giao vật tư và báo cáo cấp trên mang những mẩu khác nhau. Người chơi kiểm mốc thời gian, hỏi ai đã ký và thực hiện một ca hỗ trợ có thể quan sát tình trạng nạn nhân. Tài liệu thể hiện chỗ chưa biết; không dùng một cuộn giấy tiện lợi kết luận mọi lỗi của cả Hội Đồng.

**Combat và cảnh quan.** Tạo vật thí nghiệm ở đường công vụ và phế tích, xác sống quanh nơi thực sự bị tác động, thú vẫn sống ở sườn thông. Sương giữ silhouette gần và đòn báo dưới chân. Hồ sâu có lối bờ, nơi băng mỏng nếu có chỉ trang trí ở bản đầu; không tự mở cơ chế rơi/chết mới chưa thiết kế.

**Kết vùng.** Bảo vệ nhân chứng và mang được chứng cứ ra ngoài là chiến thắng truyện; boss map không là người làm chứng bắt buộc. Lựa chọn người được tin tưởng có thể đổi thư giới thiệu hoặc đồng minh trong cảnh riêng, không xóa nhân chứng khỏi thế giới của bạn bè.

## 13. Tiền tuyến ấn cổ — một cuộc khủng hoảng có hậu cần

**Cảnh bước vào.** Đầu vùng có người vận chuyển nước, thợ vá giáp, thương binh và cột đo ấn. Từ hub nhìn thấy đường lõi phải đi qua một tuyến công sự, giúp mối nguy có vị trí cụ thể. Dù là tiền tuyến vẫn có nơi ngủ, xử lý chất thải và đường vận chuyển; không đặt mọiNPCquanh một cổng vào boss.

**Ba tuyến chức năng.** Tuyến nước giữ trại sống; tuyến vận chuyển lõi giữ thiết bị làm việc; tuyến quan sát cung cấp dữ liệu về điểm neo. Ba tuyến nối hub bằng đường hợp lý và mỗi tuyến có nhánh tinh anh/khám phá riêng. Tuyến truyện solo cho phép thu thông tin tuần tự; không cần tổ đội đứng ba nơi cùng lúc để mở nhiệm vụ chính.

**Phe phái.** Người thiên về giữ cơ chế cũ, người đòi ngừng can thiệp và người muốn thử phương án khác đều có lý do, rủi ro và giới hạn hiểu biết. Không đồng nhất một phe với toàn bộ chủng tộc hoặc nghề Hắc Kỵ Sĩ/Tử Linh. Quân phá neo có dấu trại, trang bị và hoạt động thù địch cụ thể, không cứ mặc màu đen là bị đánh.

**Nhiệm vụ.** Khôi phục một bộ đo, tìm nguyên nhân chuyến lõi chậm và kiểm mạch nước bị ảnh hưởng tạo đủ dữ liệu trước quyết định. Người chơi có thể ưu tiên hỗ trợ ở một tuyến trong cảnh riêng, nhận thấy cái giá ở lời thoại/kịch bản sau đó; không khiến hub của người khác mất nước hoặc cửa hàng biến mất. Phương án ổn định không phải phép màu từ di vật cá nhân.

**Lãnh địa và dungeon.** Boss map canh tuyến phá ấn ở nhánh ngoài, có đèn báo/tín hiệu vận chuyển dẫn tới. Khoang Neo Sâu nằm ở lớp công trình dưới đất, kể cấu trúc điều tiết qua từng phòng và boss chức năng; không ba phòng tròn giống nhau. Đường solo dùng tương tác theo lượt hoặc trợ giúp truyện hợp lý thay yêu cầu nhiều người bắt buộc. Bộ cơ chế phải viết chi tiết ở BOSS/QUEST trước dựng.

**Kết bản đầu.** Một điểm neo được ổn định và một chiến dịch địa phương kết thúc, nhưng số phận người cha chưa được giải hết. Người chơi tiếp tục sinh hoạt, khám phá, dungeon và tiến trình45→60 theo các hệ đã chốt; nội dung lặp có nguồn và giới hạn, không ngầm mở phần thưởng chiến dịch nhận vô hạn.

## 14. Mẫu hồ sơ cho mỗi tiểu khu khi chuyển sang layout

Mỗi tiểu khu phải có đủ: mục đích truyện; cảm xúc và dấu nhìn xa; đường vào/ra và lối tránh; cao độ/nước/collider; cây/cỏ/đá/vật thể và lý do có chúng; nhómNPCvà sinh kế; quái có IDtrong90mẫu; tương tác bắt buộc/tùy chọn; dấu rương và lối hợp lệ; thay đổi trời/ngày đêm; trạng thái cá nhân/chung; danh sách asset cần sản xuất.

Ví dụ Suối Sỏi Trắng: mốc nhìn xa là cầu đá nhỏ; đường chính qua cầu, nhánh khám phá qua bãi sỏi lội được; lau mọc ở bờ ẩm, cỏ thấp trên nền cao; người lấy nước ở điểm an toàn, cua và ếch ở nhánh ngoài; nhiệm vụ kiểm nguồn không cần giết động vật; rương gắn một nền nhà ven bờ cũ có lối vào, không ở dưới nước sâu. Mưa thêm giọt/gợn nhưng không xóa bãi lội.

Không chốt kích thước, thời gian chạy hoặc mật độ chỉ bằng mô tả này. Trước dựng phải đối chiếu MAP-01/03/05 và camera; nếu địa lý không cho phép thì sửa liên kết tiểu khu, không kéo dài tile hoặc teleport giấu khoảng cách sai.

## 15. Cách đọc và giới hạn của bản mở rộng

Các cảnh và quest ở mục9–13 là ý đồ sáng tác để biên tập chi tiết, chưa phải questscript hoàn chỉnh, lời thoại cuối hoặc phán quyết lịch sử thật. Mọi kết luận về người cha/Hội Đồng/phong ấn phải kiểm với hồ sơ bí mật tác giả khi viết tuyến chính. Không tự thêm phép giải quyết mọi chuyện, quyền bay hoặc buff thời tiết.

Bản r002 mở sâu cùng MAP-04. Không có taskmới, ảnh mới, runtime hoặc kết quả playtest; giữ118/10/385. Roadmap đọc nội dungMarkdownhiện hành, không cần thay code giao diện.

## 16. r003 — Khu an toàn và NPC ngoài hoang dã

### 16.1. Quy tắc không gian

Khu an toàn là nơi tập trung NPC sinh hoạt, cốt truyện và dịch vụ; có ranh địa hình/kiến trúc dễ hiểu như cổng, hàng rào, sân trạm hoặc bờ công sự. Không spawn quái, không cho quái truy đuổi hoặc gây sát thương PvE xuyên vào khu bảo vệ. Quyền giao tranh người chơi thuộc hồ sơ PvP riêng, không suy ra rằng đang có PvP trong bản đầu.

Hoang dã vẫn có nhiều NPC: người săn, khảo sát, giữ đền, canh đường, thương nhân, người bị nạn và nhân chứng. Họ có thể cung cấp dịch vụ đặc thù, nhiệm vụ, thông tin, chuỗi quan hệ và sinh hoạt; không chỉ là người đứng giao quest rồi biến mất. Một NPC có thể kiêm dịch vụ và cốt truyện, không đếm thành hai hồ sơ.

Phân biệt ba vị trí: **khu an toàn chính**, **điểm trú an toàn nhỏ được khai báo**, và **điểm gặp ngoài hoang dã không bảo hộ**. Trạm có hàng rào/lính canh không mặc định là safe zone nếu bản đồ chưa khai báo. NPC đơn lẻ ngoài rừng không tạo bong bóng miễn nhiễm quanh người chơi. Điểm trú nhỏ tính vào phần ngoài hub trong bảng dưới, không phải tất cả đều có kho/chợ/hồi sinh.

### 16.2. Phân bổ82hồ sơ, không đổi ngân sách

| Vùng | NPC ở khu an toàn chính | NPC ngoài hub | Tổng |
|---|---:|---:|---:|
| Bình Minh | 6 | 6 | 12 |
| Merrowen | 6 | 10 | 16 |
| Sylvaris | 6 | 12 | 18 |
| Nocthollow | 6 | 14 | 20 |
| Tiền tuyến ấn cổ | 6 | 10 | 16 |
| Tổng | 30 | 52 | 82 |

Đây là phân bổ thiết kế do người thiết kế chốt trong ngân sách đã có, không là yêu cầu của người dùng rằng mọi hub bắt buộc đúng6NPCvĩnh viễn. Có thể điều chỉnh khi viết NPC-01/04 nếu giữ tổng và tỉ trọng nhiều NPC ngoài hub. Sáu NPC lõi có thể kiêm một số dịch vụ hợp nghề; không nhét toàn bộ dịch vụ vào một người. Dân nền không tính vào82. Các slotvai trò ở mục2–6 được phân bố lại, không cộng thêm52người.

### 16.3. Ví dụ NPC ngoài hub theo vùng

| Vùng | Điểm gặp và chức năng | Tuyến truyện riêng gợi ý |
|---|---|---|
| Bình Minh | Nông dân tại ruộng; thợ mộc ở chỗ sửa cầu; trinh sát bìa rừng; người giữ chuông bên di tích | Ruộng mất mùa sau thú kéo tới; vật liệu cầu bị thất lạc; trinh sát mất đồng đội; người giữ chuông nhận ra một nhịp đã bị sửa. Không cả bốn chỉ kể về người cha |
| Merrowen | Người lái đò ở bến nhánh; người thu hái bãi lau; người kiểm niêm tại kho; người vận tải dọc đê | Nợ chuyến đò, nguồn thảo dược bị bùn phủ, tranh chấp hàng gửi và lời khai của người làm thuê. Dịch vụ đò/hàng cần điều kiện tương tác rõ |
| Sylvaris | Người dẫn đường trên lối hành hương; người giữ nguồn; thợ khai thác tại lán; người chăm bia khế ước | Khách hành hương mất dấu, nguồn nước đổi màu, sinh kế của nhóm lao động và lời hứa được ghi khác nhau. Mỗi người biết một phần, không tự biết bí mật toàn truyện |
| Nocthollow | Người cứu nạn trên đèo; thợ mỏ ở lán; cư dân Bất Tử Giả ngoài khu trung tâm; nhân chứng gần cơ sở cũ | Đường cứu hộ bị hỏng, dụng cụ còn mắc trong mỏ, tìm lại quan hệ gia đình và báo cáo bị bỏ qua. Không ai tự thù địch chỉ vì là Bất Tử Giả |
| Tiền tuyến | Người dẫn đường ở tuyến lõi; thợ sửa tại trạm tiền phương; người đo ấn ngoài vành; người giữ mạch nước | Xe lõi không trở lại, dụng cụ đo sai số, lựa chọn bảo vệ nhóm khảo sát và việc chia nước. Dịch vụ tiền phương bổ sung, không thay toàn bộ hub |

Các ví dụ là gán vị trí cho vai trò hoặc hạt giống hồ sơ, chưa xác lập tên mới hay thêmNPCngoài82. NPC có thể đứng trong lán, bên nhà nhỏ hoặc di chuyển trên tuyến hợp lệ; không bắt mọi người đứng lộ thiên ngay giữa bãi quái. Cần có đồ nghề, dấu đường, nơi trú và lý do cư trú phù hợp map.

### 16.4. Tương tác và bảo vệ tiến trình

- NPC dịch vụ thiết yếu/chủ chốt không bị người chơi khác giết hoặc kéo quái tới làm mất chức năng. Ưu tiên vị trí đã có bảo hộ; nếu đứng ngoài, dùng quy tắc NPC không tham chiến và không có phần thưởng giết, không tạo vùng an toàn cho người chơi đi kèm.
- NPC hộ tống/cứu nạn có thể gặp nguy hiểm chỉ trong encounter đã thiết kế; thất bại cho phép thử lại hoặc có đường tiếp tục. Không cho NPCchungchết vĩnh viễn bởi lựa chọn cá nhân.
- Ở hoang dã, mở thoại/shop không tạm dừng thế giới hoặc miễn sát thương cho người chơi. Đòn địch tới sẽ cảnh báo và ngắt tương tác theo quy tắc UI/combat; không tự mua, trả tiền hoặc xác nhận lựa chọn thay người chơi. Nên có chỗ đứng tiếp cận hợp lý, không bắt đọc thoại dài trong bãi đánh liên tục.
- NPC di chuyển có điểm hẹn/quay lại và gợi ý vị trí trong nhật ký. Dịch vụ quan trọng có người thay ca/điểm thay thế; truyện chính không khóa vì người chơi online sai giờ hoặc thời tiết.
- Điểm gặp có biển/đèn/đồ nghề làm tín hiệu trước khi hiện icon; thông tin tên/chức năng/giờ hẹn không lộ bí mật quest. Không tất cả NPCđều phát dấu chấm than ngay khi chưa được giới thiệu.
- Thương nhân lưu động dùng catalog/ví/quote theo hệ kinh tế; đứng ngoài hub không tạo tiền tệ mới, hạn mức mới hoặc mẹo mua rẻ bằng đổi channel. Chưa chốt ưu đãi/giá/phí mới tại đây.

### 16.5. Cập nhật phạm vi các bước sau

MAP-06 cần khai báo từng khu bảo hộ và khu nguy hiểm; MAP-07 cần phân dịch vụ lõi/điểm vệ tinh, điểm hồi sinh không tự theo mọiNPC. NPC-01/02/04/05/07 cần hồ sơ tên, thoại, lịch, dịch vụ và trạng thái cá nhân/chung. Các task này vẫn mở, không đánh dấu hoàn thiện chỉ từ định hướng phân bố.

MAP-04r003 vẫn cùng một hồ sơ đã thiết kế; tiến độ giữ118/10/385. Chưa tạo NPCruntime, code an toàn, vẽ vị trí hoặc kiểm thử giao tranh.
