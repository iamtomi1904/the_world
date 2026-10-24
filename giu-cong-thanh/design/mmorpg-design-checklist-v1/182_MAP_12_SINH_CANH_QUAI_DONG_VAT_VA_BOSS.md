> **Đồng bộ bản đồ phe/bang ·22/10/2026:** [Phụ lục187](187_MAP_DONG_BO_PHE_BANG_HOI_VA_W06.md) nối W06/đại bản doanh/nhàbang/arena vào địa lý, khí hậu và luật vùng; sửa phạm vi6vùng ngoài trời, không PKnămPvEcũ. Giữ525mục:119hoànthiện/11mộtphần/395chưathiếtkế; chưa vẽ/code. Các phạm vi cũ bên dưới là lịch sử khi xung đột.

> **Tăng ba lần loại quái ·22/10/2026:** [Danh mục90mẫu nền,18/vùng](183_MOB_01_DANH_MUC_90_MAU_QUAI.md), thay ngân sách30. Không tăng mật độ hoặc số boss/tinh anh. **117 hoàn thiện /10 một phần /386 chưa thiết kế =513**; chưa vẽ/code. Các tiến độ bên dưới là lịch sử.

# MAP-12 — Sinh cảnh, lãnh địa và nhịp sống quái

Ngày 22/10/2026. Hoàn thiện hồ sơ thiết kế; chưa code, vẽ hoặc kiểm thử AI. Dành cho MMORPG pixel 2.5D, không sửa thủ thành. Tiếp nối [thời tiết và hệ sinh thái181](181_MAP_10_THOI_GIAN_THOI_TIET_HE_SINH_THAI.md).

## 1. Mục tiêu và phạm vi

Mỗi cụm sinh vật phải trả lời được: sống ở đâu, ăn hoặc bảo vệ thứ gì, vì sao xuất hiện sau Đêm Gãy Ấn, đi đường nào và vì sao người chơi cần tiếp xúc. Quái không đứng thành hàng chờ đánh; cây cỏ, hang, tổ, dấu chân, vật chứng và hành vi cùng kể một câu chuyện.

Giữ ngân sách đã chốt: V01/V02/V03/V04/V05 có 2/3/3/4/4 đối đầu tinh anh và mỗi vùng một boss map, một dungeon. Không tự thêm 16 boss map vì gọi tinh anh là thủ lĩnh. Boss dungeon thuộc hồ sơ riêng, một dungeon có 1–3 boss theo phạm vi độ khó. Mọi tên sinh vật bên dưới là đề xuất thiết kế cần phát triển, không phải NPC đã tồn tại trong lịch sử.

## 2. Năm lớp sinh vật

| Lớp | Vai trò | Quy tắc |
|---|---|---|
| Động vật nền | Tạo sức sống: thú nhỏ chạy qua, côn trùng, tiếng trong bụi | Không chọn mục tiêu, không XP/loot, không có hitbox combat; phân biệt bằng con trỏ và không hiện thanh máu |
| Động vật tài nguyên | Hệ sinh thái và nhiệm vụ săn/thu thập phù hợp lore | Là entity server, có quyền tương tác và phần thưởng theo hệ loot; không giả làm nền rồi bất ngờ có thể bị giết |
| Quái thường | Giao tranh và học cơ chế theo vùng | Chia vai cận chiến/đánh xa/hỗ trợ theo loài; không mỗi cụm đều có đủ mọi vai |
| Tinh anh có bản sắc | Nhánh khám phá, đầu mối và vật liệu đặc thù | Có dấu lãnh địa, hành vi và đòn báo trước riêng; số lượng theo ngân sách vùng |
| Boss map | Mối đe dọa chung có câu chuyện | Lãnh địa lớn, đường tránh, cảnh báo và encounter riêng; không chặn manh mối truyện chính bắt buộc solo |

Không xem Bất Tử Giả, xác sống và sinh vật tha hóa là cùng loại. NPC có trí tuệ không mặc định là mục tiêu chỉ vì ngoại hình giống quái. Động vật nền V01 chỉ dùng loài đi trên mặt đất, tránh hình bay gây nhầm với quy tắc vùng khởi đầu.

## 3. Ma trận sinh cảnh năm vùng

| Vùng | Quần thể và nơi sống | Tinh anh theo ngân sách | Boss map và dấu vết truyện |
|---|---|---|---|
| V01 Bình Minh | Thú đồng ở bìa cỏ, sói đất trong rừng thưa; sinh vật khe ấn tập trung gần đống đổ nát, không cạnh mọi nhà dân | Hai hồ sơ: con đầu đàn bị thương cạnh bãi săn và lính canh đá trục trặc gần di tích | Một sinh vật canh ấn hỏng cơ chế, hoạt động ngoài lối cứu trợ. Vết cào, chuông nứt và dấu người sơ tán dẫn tới lãnh địa; khác Kẻ Canh Cổng trong dungeon |
| V02 Merrowen | Thú bãi bồi, sinh vật lưỡng cư ở cạn; nhóm cướp/vận chuyển di vật quanh kho bị bỏ và đường phục kích | Ba hồ sơ đại diện bãi bồi, kho hàng và tuyến đò | Một sinh vật sông trồi lên bãi cạn do điểm neo rối loạn; boss phải đánh được từ đất, không bắt bơi. Dây neo đứt và hàng mắc bờ liên hệ khủng hoảng cứu trợ |
| V03 Sylvaris | Thú rừng, linh thể bảo hộ; sinh vật bệnh quanh nguồn hỏng; nhóm khai thác trên lối mở, không biến toàn rừng thành quân thù | Ba hồ sơ gắn rừng già, bãi khai thác và đường hành hương | Một thực thể rừng mất khả năng phân biệt kẻ xâm nhập; rễ siết các cọc khai thác kể nguồn xung đột. Thanh tẩy hay đánh bại thuộc quest riêng |
| V04 Nocthollow | Thú cao địa, xác sống quanh khu chôn cất bị tác động; tạo vật thí nghiệm ở cơ sở hỏng; Bất Tử Giả có khu cư trú riêng | Bốn hồ sơ cho đèo, nghĩa địa, phòng thí nghiệm ngoài trời và hồ lạnh | Một tạo vật giám sát thoát kiểm soát tại bồn địa. Sổ kiểm kê và cấu trúc cơ thể là chứng cứ trách nhiệm cá nhân, không quy cả chủng tộc thành quái |
| V05 Tiền tuyến ấn cổ | Thú chịu hạn gần mạch nước; quân địch có trại và tuyến tiếp tế; sinh vật khe nứt gần điểm neo mất ổn định | Bốn hồ sơ trại, khe đá, mạch nước và vành điểm neo | Một đơn vị phá ấn có chu kỳ tập kết; tín hiệu, dấu vận chuyển và giao tranh quanh mốc ấn dẫn tới boss, không tự tiết lộ trọn Vực Rỗng |

Quái bay chỉ được xét từ vùng sau V01: nếu thêm cần tổ/vách cao, vùng tuần tra và đối sách rõ, không tự đặt bay vì trời gió. V01 không quái bay ở bất kỳ lớp combat nào, kể cả boss/pha chuyển/sự kiện/dungeon. Không tự tăng dame quái theo thời tiết; tác động riêng phải qua ENV-04 và hệ chỉ số.

## 4. Cấu trúc một lãnh địa

Mỗi lãnh địa có vùng lõi, vùng kiếm ăn/tuần tra, vùng đệm và lối thoát. Ranh giới bám cây, gờ đất, suối, hàng rào hoặc phế tích; không biểu diễn bằng vòng tròn đồng loạt. Boss có không gian cơ động, mép đọc được và đường ngoài cho người không tham chiến.

Trình tự đọc cảnh: dấu vết nhẹ → dấu nguy hiểm rõ → thấy sinh vật → chọn tiến vào. Đặt thú và quái cạnh nguồn sống phù hợp; không cho sói đi giữa hồ sâu hoặc cây rừng mọc giữa kho xây kín. Mật độ và khoảng cách chỉ chốt sau MAP-05 và thử camera; không tạo con số bán kính tùy ý trong hồ sơ này.

Đường cứu trợ, dịch vụ, điểm hồi sinh và điểm chuyển vùng có vùng an toàn do MAP-03/07 xác định. Điểm quái không nằm trên cầu hẹp duy nhất hoặc dưới lớp tán hoàn toàn che cảnh báo. Đường tắt có thể nguy hiểm nhưng phải nhận biết trước khi bước vào.

## 5. Hành vi và ngày đêm

Quái dùng chuỗi nghỉ → quan sát → kiếm ăn/tuần tra → cảnh giác → giao tranh → quay về/khôi phục. Từng loài chỉ dùng trạng thái cần thiết; không làm animation ăn cho lính đá. Cụm có biến thể nghỉ, đứng canh, tìm dấu; không mọi cá thể quay đầu cùng lúc.

Trời tối đổi tiếng nền và mức hoạt động một số loài, không đổi quái thường thành tinh anh chỉ bằng tint. Mưa khiến động vật nền tìm chỗ trú; sinh vật đầm có thể hoạt động mạnh hơn về hình ảnh. Quái quest cần thiết vẫn có nhóm thay thế ban ngày/ban đêm; nhiệm vụ chính không bắt chờ một chu kỳ.

Trong combat, aggro/leash/triệu hồi và hồi máu reset dùng hồ sơ COMBAT hiện hành. Không thêm công thức aggro, phần thưởng hoặc quyền last-hit riêng tại MAP-12. Vùng truy đuổi không vượt khu an toàn, biên nước sâu hoặc tầng cao không có đường. Không dịch chuyển quái về tổ ngay trước mặt người chơi nếu còn có thể đi về hợp lệ; xử lý kẹt theo chính sách AI có log và không sinh loot kép.

Quái dưới tán vẫn có bóng/đường viền mục tiêu theo thiết lập đọc cảnh. Tổ, dấu chân và vật trang trí không nhận hit thay quái; collider gameplay độc lập với tán và bóng.

## 6. Sinh lại và thế giới chung

Server quản lý danh tính cá thể, nhóm spawn, vùng đi hợp lệ, trạng thái sống/chết và thế hệ spawn. Client chỉ trình bày. Sau chết, thời điểm sinh lại đọc từ cấu hình loài/encounter; không chốt giờ farm trước hồ sơ kinh tế. Không tự sinh bù mỗi khi có người tiến đến hoặc đổi channel.

Spawn có điều kiện: ô hợp lệ, không nước sâu, không dưới sàn, không trong vùng an toàn; có vùng tránh xuất hiện sát nhân vật đang đứng. Nếu không còn chỗ hợp lệ thì trì hoãn và ghi nhận, không ép xuất hiện trên đầu người. Một lần chết chỉ phát một sự kiện chết/phần thưởng theo hệ hiện hành; reconnect không nhân đôi xác hoặc boss.

Nhóm quest được thiết kế đủ nguồn tương tác để nhiều người không phải tranh một con duy nhất; credit và loot theo COMBAT/contribution. Nếu cần vật chứng bắt buộc, có đường điều tra hoặc encounter truyện riêng; không ép tranh boss map. Không tự phát tiền tài khoản, tăng hạn mức hoặc đặt loot % mới.

Boss map thuộc thế giới chung; chiến thắng ghi nhận lịch sử tham gia nhưng boss tái xuất theo cách kể có thể lặp (tạo vật thay thế/đợt tập kết/đợt bất ổn). Không khẳng định một cá nhân độc nhất đã bị giết vĩnh viễn rồi sống lại mỗi giờ. Cảnh giết/giải cứu nhân vật độc nhất thuộc trải nghiệm truyện riêng.

## 7. Ví dụ diễn thử V01

Người chơi rời trại thấy bãi cỏ thấp và thú nhỏ mặt đất. Gần bờ suối có dấu sói và lau bị giẫm; bãi lội có đáy hiện. Đi đường chính vẫn tới được điểm cứu trợ. Rẽ theo vết chân mới thấy đàn sói và đầu đàn bị thương; lời kể người cứu hộ cho biết chúng bị đẩy khỏi nơi trú sau Đêm Gãy Ấn.

Hướng khác có cây cháy cục bộ, mảnh đá mang ấn và nhịp chuông sai. Lính canh đá tinh anh đứng gần lối vào di tích, không chặn đường về trại. Dấu vết dẫn tới boss map ngoài tuyến chính; manh mối bắt buộc về người cha vẫn lấy được từ nhiệm vụ hoặc dungeon solo. Khi mưa tới, cỏ lay và thú nền trú dưới bụi; quyền qua suối và sức mạnh quái không đổi ngầm.

## 8. Bàn giao cho thiết kế chi tiết và mỹ thuật

Mỗi hồ sơ sinh vật phải có: ID/loài/faction, vùng và tiểu sinh cảnh, vai trò truyện, cấp tham chiếu, trạng thái hoạt động, điểm sinh/đường tuần tra/vùng cấm, hành vi xã hội, nguồn quest và loot tham chiếu; animation, footprint, bóng, hướng, hiệu ứng và âm thanh cần vẽ; liên kết cấu hình AI/COMBAT. Tinh anh/boss thêm dấu vết dẫn đường, encounter ID, lối tránh, cảnh báo và cách kể tái xuất.

Chưa chốt catalog loài đầy đủ, chỉ số, tỉ lệ rơi, khoảng respawn, bán kính leash hoặc đường patrol tọa độ; các đầu vào này phải được cấu hình sau hồ sơ quái/kinh tế và bản đồ cụ thể. MAP-12 là thiết kế nguyên tắc/phân bố, không thay việc vẽ map hay thiết kế bộ skill boss.

Checklist nghiệm thu sau này: không quái bay V01; đúng 16 đối đầu tinh anh/5 boss map theo ngân sách; không spawn trong nước sâu/an toàn; quái không vượt tầng; quest chính solo không khóa giờ; hai client thấy cùng encounter; respawn/reconnect không trùng thưởng; tán/mưa không giấu đòn; đo tải AI và render trên web/PC trước quyết định mật độ. Hiện chưa có kết quả runtime.

Tiếp theo trong nhánh môi trường: **MAP-04 — hồ sơ chi tiết năm vùng**, làm rõ văn hóa, kiến trúc, sinh kế, tuyến truyện và các tiểu sinh cảnh trước khi vẽ layout. Nhánh kinh tế vẫn còn CAP-01, không được xem đã hoàn thiện vì chuyển sang môi trường.

Nguồn: [ngân sách và cốt truyện vùng](15_PROD_06_PHAM_VI_VA_NGAN_SACH.md), [đối không và giới hạn V01](100_COMBAT_05_CAN_CHIEN_VA_QUAI_BAY.md), [checklist](02_THE_GIOI_MY_THUAT_NHIEM_VU.md).
