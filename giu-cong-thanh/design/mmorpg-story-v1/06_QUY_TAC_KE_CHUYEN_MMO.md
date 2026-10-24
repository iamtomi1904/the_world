> **Biên tậpV2 · 21/10/2026:** [Ràng buộc combat/canon10](10_RANG_BUOC_COMBAT_V2_VA_BI_MAT.md) và [khếước128](../mmorpg-design-checklist-v1/128_V2_KHE_UOC_COT_TRUYEN_VA_COMBAT.md) bổ sung hồi sinh nguykịch, Orenvỏ/lõi, quyềnchọnvàscope5vùng/6hồi. Không thaynguồn00 hoặc đápánlịchsử02; chưa triển khai.

# 06 — Quy tắc lựa chọn cá nhân trong thế giới MMO

Tài liệu hành vi kể chuyện, không phải schema, API hoặc thiết kế hạ tầng máy chủ.

## 1. Ba lớp thời gian

| Lớp | Nội dung | Quy tắc |
|---|---|---|
| Lịch sử nền | Năm 948, Đêm Gãy Ấn, trạng thái khẩn cấp của Elarion | Chung cho mọi người, không đổi bởi người đầu tiên hoàn thành |
| Tiến trình cá nhân | Lời chứng, cách xử lý Oren, quan hệ, kết thúc người cha | Nhật ký và cảnh riêng theo người sở hữu câu chuyện |
| Sinh hoạt chung | Chợ, đường đi chung, dịch vụ, gặp người chơi khác | Giữ nhất quán và tiếp cận được; không bị lựa chọn cá nhân tắt đi |

M01–M03 diễn ra trong “đêm mở đầu” riêng. Sau M04, người chơi nhập vào thế giới chung đã qua biến cố. Người chưa làm mở đầu không xuất hiện ở quảng trường làng còn nguyên rồi nghe người khác nói làng đã cháy trong cùng một cảnh.

**Quy tắc gia đình trong MMO:** trong mỗi tuyến cá nhân, nhân vật của người sở hữu câu chuyện là một người con nuôi của Edran, bên cạnh Mira và các thành viên gia đình đã có trong hồ sơ. Không coi toàn bộ tài khoản trên server là hàng trăm nghìn con nuôi có thật trong cùng một căn nhà. Khi hỗ trợ truyện của bạn, người chơi khác mang vai người đồng hành; câu chuyện riêng của họ là một góc trải nghiệm độc lập, không buộc cả nhóm xác nhận mình cùng một gia phả. Điều này không biến nhân vật chính thành con duy nhất hoặc người có huyết thống được chọn.

## 2. Những cờ biên tập cần nhớ

Các tên dưới đây chỉ để đọc kịch bản, không yêu cầu tạo bảng hay biến trong code.

| Mã | Giá trị thiết kế | Ai biết / phản hồi |
|---|---|---|
| AID | WORKSHOP hoặc MEDICINE | Sella, Mira, Borin, Dara, Maera biết qua cứu trợ và bàn giao; Neris chỉ biết sau khi nhận danh sách |
| GATE | RESTORE, RELEASE hoặc BREAK | Neris, Maera và người đi cùng cảnh; Tessa biết khi đọc hồ sơ người chơi đưa |
| RECORD | PUBLIC hoặc WITNESSED | Tessa, Orien, nhóm nhân chứng; người khác chỉ biết bản tin công khai hoặc được kể |
| ROUTE | DETOUR hoặc STATION | Đại diện tuyến xe, Varra và Lethra; phản hồi đoàn tiếp tế ở V |
| REVIEW | HEARING hoặc SUPERVISED | Rovan, các đại diện, người liên quan; không tự biến cả phe thành kẻ thù |
| FINAL | A, B hoặc C | Các cảnh hồi kết, thư, gia đình riêng; NPC dịch vụ chung không tiết lộ thay |
| ORIGIN | Một trong năm xuất thân | Một nhánh mở đầu và một số phản hồi, không quyết định bằng chứng hay khả năng kết thúc |

Các lựa chọn phụ có thể thêm người đến giúp, kỷ vật và thư. Không cộng một “điểm thiện” bí mật để khóa KT-C.

## 3. Tổ đội khác tiến độ

1. Trước khi vào cảnh riêng, nêu rõ “Đang theo câu chuyện của [tên]. Lựa chọn của bạn không bị thay đổi”. Đồng đội đồng ý vào hoặc ở lại thế giới chung.
2. Chủ câu chuyện thực hiện tương tác và quyết định; không bỏ phiếu đa số, không để người bấm nhanh nhất ký thay.
3. Người đã qua đoạn có thể hỗ trợ chiến đấu dưới vai trò người đồng hành. Nhật ký của họ ghi một lần hỗ trợ/hồi tưởng, không ghi Oren sống lại hoặc cha quay lại neo.
4. Người chưa đến đoạn đó được cảnh báo spoiler và có thể từ chối; không mất phần thưởng hay bị xem là phá nhóm. Muốn tự trải nghiệm vẫn đi được solo.
5. Hoàn thành hỗ trợ không tự nhảy nhiệm vụ cá nhân. Mỗi người có thể mở cảnh mình khi sẵn sàng; không ép tất cả cùng lựa chọn để đi tiếp.
6. Cảnh cuối nói chuyện với Edran và ký phương án là riêng từng người. Đồng đội có thể dự cảnh nếu được mời nhưng không thay vai cha/con hoặc cam kết.

## 4. Ranh giới hệ quả

- Được thay đổi: lời thoại riêng, người gửi thư, cách cứu trợ tại trại cá nhân, cách có được lời chứng, các cảnh của gia đình, điều khoản liên minh trong nhật ký.
- Không thay đổi theo một cá nhân: trạng thái tồn tại thành, đường dịch chuyển chung, nhân viên dịch vụ, khả năng người khác nhận nhiệm vụ.
- Mất mát ở KT-B/C được thể hiện tại khu/cảnh riêng và lời chứng từ nơi sơ tán, không đổi bản đồ chung của người khác. Không tuyên bố toàn server vừa mất nhà nếu mới một người hoàn thành.
- Một NPC phục vụ chung bị đối chất trong truyện chỉ thay vị trí/quyền chức trong cảnh riêng; nơi giao dịch chung vẫn có người đảm trách.
- Các phe phản ứng theo hành động cụ thể, không gắn ác danh cho toàn chủng tộc hoặc class.

## 5. Boss, cái chết và chơi lại

Lần đầu xử lý Oren là sự kiện thật trong truyện người chơi. Chọn RELEASE/BREAK không làm ông xuất hiện nguyên vẹn ngoài hầm sau đó. RESTORE chỉ phục hồi phần nhận diện đủ giao tiếp tại cửa, không cho người đã chết trở lại làm người sống.

Lần chơi lại ghi rõ là bản dựng cộng hưởng dựa trên hồ sơ hầm. Đó là cơ chế xem lại/huấn luyện, không tạo Oren thứ hai. Bản dựng không sinh ra lời chứng mới, kỷ vật độc nhất hay thay quyết định cũ. Người chơi có thể đọc lại các nhánh qua tư liệu ngoài dòng sự kiện mà không được nhật ký công nhận đã chọn cả ba.

Thất bại chiến đấu: rút về điểm an toàn trước trận, thực hiện lại việc đang dang dở. Không có thoại khẳng định người chơi chết rồi sống lại nhiều lần; không dùng việc thua để bắt nhận phương án tàn nhẫn hơn. Rời phiên lúc đang chọn không tự xác nhận lựa chọn.

## 6. Tự do, thứ tự nhiệm vụ và chống mắc kẹt về truyện

- Sau M04 có thể đi đường Valedorn; chưa có giấy M08 thì đi như người lữ hành bình thường. Tessa không tự kể bằng chứng chưa trao.
- Nếu vào Tro Trắng trước M08: được gặp và giúp công việc chung; được biết kho có hạn chế; tuyến điều tra chính chờ phiếu Maera và bản đo hầm, không cho lấy trước sự thật hồi II.
- Nếu đã có đồ/phát hiện từ địa điểm phụ: lời thoại nhận người chơi từng thấy nơi ấy, không bắt họ quên. Hồ sơ nhiệm vụ cho cách đối chiếu lại, không giả vờ nhặt một vật lần đầu.
- Vật chứng chính là bản ghi/giấy đã vào nhật ký, không thể vô tình bán, phá hủy hoặc bị người khác nhặt mất trong thiết kế truyện.
- Nội dung phụ không có thời hạn thực. Những hậu quả cứu trợ được chốt tại M03; đi khám phá sau đó không khiến kho thuốc tiếp tục cháy đến khi người chơi quay lại.
- Các lựa chọn quan trọng đều có câu tóm tắt điều sẽ ưu tiên và cái giá đã biết trước khi xác nhận. NPC không cảnh báo kết cục quá mức họ hiểu.

## 7. Chủng tộc, xuất thân và class

Sáu chủng tộc có thể gặp phản ứng xã hội khác nhau nhưng cùng có quyền tiếp cận truyện, chứng cứ và kết thúc. Không yêu cầu một Goblin đổi race để vào Giáo Hội. Không xem Hắc Tiên hoặc Hắc Kỵ Sĩ là người mang nhiễm nếu không có dấu hiệu thực tế.

Xuất thân cung cấp câu hỏi và cách làm tương đương, không cho một xuất thân biết trước thủ phạm. Một học giả có thể tự đọc ký hiệu đơn giản, nhưng thợ hướng dẫn vẫn đọc giúp người khác. Sát Thủ có thể lẻn vào kho chỉ như một phương án nhập vai; đường đối thoại/bảo lãnh vẫn tồn tại. Chưa chốt kỹ năng nào để khóa cửa nhiệm vụ.

## 8. Sau hồi kết và cập nhật tương lai

Các cảnh riêng tiếp tục ghi nhớ FINAL và lựa chọn trước. Edran không đứng làm NPC chung bắt buộc trong chợ. Nhà Đèn riêng có biến thể: A gặp qua kênh thăm; B dưỡng bệnh; C làm quen lại từ nhật ký. Chợ chung giữ thông điệp trung tính “công việc tái thiết đang tiếp diễn”.

Một mùa nội dung mới phải có hồ sơ chuyển mốc thời gian riêng và phản hồi được cả A/B/C. Không tự lấy một kết thúc làm chính sử rồi nói người chọn khác đã hiểu sai. Truyện Veyr có thể điều tra bằng di sản học được của cả ba nhánh, không yêu cầu xóa kết thúc.
