> **Rà soát r003 ·22/10/2026:** [Thế giới mở, ID quyền và10đấtẩn203](203_RA_SOAT_MO_VUNG_THE_GIOI_MO_VA_DAT_AN_R003.md) làm rõ cấp khuyến nghịPvE/khám phá sớm khác gateW06, grantổnđịnh và assetẩn không phải bảo mậtCSS. Sửa202; r002vẫn prototypelevel. Giữ525task:127hoànthiện/11mộtphần/387chưathiếtkế. Không ảnh/codegame/SQL.

# Mở vùng, trạng thái thế giới và hướng khám phá đất ẩn

Ngày 22/10/2026. Mở sâu thiết kế bản đồ r002 và MAP-09, không thêm task hoặc báo đã tích hợp server. Chưa vẽ thêm, sửa gameplay hay migration. Giữ sáu vùng hiện tại, mười đất dự phòng và cap60. Đây là hồ sơ hiện hành cho các điểm còn mơ hồ trong201.

## 1. Bốn câu hỏi độc lập cho mỗi vùng

1. **Game đã phát hành vùng này chưa?** Do cấu hình nội dung quyết định, không do level hoặc vật phẩm người chơi.
2. **Nhân vật biết gì về vùng?** Chưa nghe, nghe kể, biết tên/vị trí hay đã tới; không tự chia sẻ bí mật giữa các nhân vật.
3. **Nhân vật đã mở quyền tiếp cận chưa?** Quyền truyện/đăng ký cần thiết đã cấp hay chưa; không chỉ nhìn số cấp.
4. **Ngay lúc này có thể đi không?** Combat, kiện, phe, lượt/ruleset hoặc dịch vụ có thể tạm chặn dù vùng đã mở.

Đã mở không đồng nghĩa đã khám phá hết. Đã biết tên không đồng nghĩa có thể teleport. Đã tới một cảng trung lập không hoàn thành tuyến truyện của cả vùng. Claim rương và điểm hồi sinh vẫn tách theo193/194.

## 2. Trạng thái nhìn thấy trên bản đồ

| Trạng thái | Màu và nhãn | Hành động được hiển thị |
|---|---|---|
| Đất dự phòng chưa phát hành | Xám, “Chưa phát hành”; không gán cấp giả | Xem giới thiệu nếu được biết; không có nút đi hoặc nút mua mở |
| Vùng phát hành nhưng chưa biết | Xám/sương bản đồ theo quyền | Gợi ý thế giới công khai, không lộ trigger bí mật |
| Đã nghe kể nhưng chưa mở | Xám, “Đã có đầu mối” | Xem nguồn tin/vùng tìm kiếm hợp lệ |
| Thiếu điều kiện mở | Xám, “Chưa mở” kèm điều kiện được phép biết | Theo dõi đầu mối; không tự nhận hoặc chốt quest |
| Đã mở, chưa đặt chân tới | Có màu phạm vi vùng, “Có thể tiếp cận” | Chỉ dẫn tuyến hợp lệ; fog chi tiết nội vùng còn giữ |
| Đã tới, khám phá một phần | Có màu, thông tin theo discovery | Xem dịch vụ/mốc đã biết, không hiện mọi rương |
| Đã mở nhưng tạm không thể đi | Giữ màu, thêm khóa và lý do hiện tại | Xem lịch/tuyến thay thế, không xóa tiến trình đã mở |
| Nội dung tạm ngừng do vận hành | Giữ thông tin đã biết, nhãn tạm ngừng | Không nhận chuyến mới; xử lý người đang ở trong theo195 |

Màu tuân yêu cầu người dùng: vùng chưa mở xám, vùng đã mở có màu. Vùng đã mở không biến xám chỉ vì đang combat, mang kiện hoặc một chuyến đò tạm dừng. Đây là bổ sung so với r002 đang mô phỏng bằng một biểu thức level/story/faction, chưa là mô hình lưu bền thật.

TênH01…H10 hiện đủ trong bản thiết kế nội bộ. Player-view chỉ dùng tên công khai/đã học; nếu cần giữ bí mật thì hiện “Vùng đất chưa ghi chép”. Việc này không đổi tên làm việc trên master map hay che tên khỏi người thiết kế.

## 3. Mở quyền: điều kiện và thời điểm cam kết

Cấp1/11/21/31/41 là mốc khuyến nghị chiến đấu của năm vùngPvE, không là một hardgate chung cho mọi đường đi. Mở địa lý qua grant truyện hoặc tự tới điểm tiếp nhận/mốc khám phá hợp lệ bằng lối mở, server xác nhận. Camera/ping/packet tọa độ không cấp quyền. Cổng truyện, địa hình và hoạt động riêng vẫn kiểm điều kiện; tới sớm không skip quest/warp. W06 giữ điều kiện vào cấp40+, có phe và hướng dẫn quân vụ. Bản r002 đang dùng level làm mô phỏng đơn giản, chưa diễn khám phá sớm hoặc grant bền.

Luồng truyện: biết đầu mối → thực hiện đoạn truyện/đăng ký tuyến → server kiểm điều kiện → ghi regionAccessGrant một lần → cập nhật màu/chỉ dẫn. Luồng khám phá chủ động: tự tới điểm tiếp nhận hợp lệ qua đường mở → server xác nhận → cấp grant địa lý, giữ riêng quest/checkpoint/warp. Phải có thông báo ngắn lý do mở, không chỉ cả map tự đổi màu khi lên cấp.

Grant có identity ổn định characterId+realmId+regionId; revision là thuộc tính rule/content lúc cấp, không tự tạo quyền mới hoặc reset tiến trình. SourceEventId/receipt chống cấp trùng. Hai sectorV03 chung quyền vùng nhưng có edge/checkpoint/discovery riêng. Account reference không cấp grant; nút “Toàn màu” chỉ là công cụ thiết kế.

Khi sửa điều kiện ở bản cập nhật, người đã có grant hợp lệ không mất quyền truyện chỉ vì mốc tham chiếu mới khác. Các quyền theo phe/guild/mùa vẫn có phạm vi riêng và có thể hết hiệu lực theo quy tắc, không gộp với grant khám phá vĩnh viễn.

## 4. Chuỗi mở sáu vùng hiện tại

| Vùng | Đầu mối và hành động đủ nghĩa | Phản hồi khi mở |
|---|---|---|
| V01 Bình Minh | Qua chương mở đầu/cứu trợ và tới không gian chung hợp lệ | Có khu vực bắt đầu, hướng dịch vụ và đoạn khám phá đầu; không tô hết chi tiết |
| V02 Valedorn–Merrowen | Khôi phục đầu mối vận chuyển, được giới thiệu tuyến hàng; bảo đảm đường solo | Đường tiếp cận và nơi tiếp nhận xuất hiện; không tự mở hết kho/dungeon |
| V03 Sylvaris/hành hương | Nhận hai hướng điều tra hợp lệ từ đầu mốiValedorn; có người dẫn/quyền tiếp cận | Hai sector được ghi trong vùng, từng nhánh vẫn có đường tới và checkpoint riêng |
| V04 Nocthollow–Astravelle | Bằng chứng/giới thiệu điều tra cùng tuyến đường cao được chỉ dẫn | Phân biệt vùng trũng và cao địa, không teleport thẳng lên học viện chưa tới |
| V05 Tiền tuyến | Được tiếp nhận vào chiến dịch địa phương và hải trình được bảo đảm | Lối tới trại/đường về; không mở toàn bộSahrKareth/VựcRỗng hoặc chốt kết thúc sáu hồi |
| W06 Tranh chấp | Cấp40+, có phe, hoàn tất hướng dẫn quân vụ và chấp nhận luậtPK | Mở thông tin chiến trường/chuyến điều vận tới tiền trạm; không cấp quyền giữ cứ điểm |

Đây là điều kiện nghiệp vụ định hướng, chưa đặt ID quest mới hoặc báo các đoạn quest đã viết đầy đủ. Cần gắn vào QUEST khi phát triển; không bắt làm mọi nhiệm vụ phụ, thắngbossmap hoặc giảiPvP để mở tuyến truyệnPvE.

Riêng W06: đã từng tới thì kiến thức địa lý giữ lại. Nếu mất điều kiện phe/đang chuyển phe hoặc bị hạn chế tham gia, bản đồ vẫn có màu phần đã mở nhưng gắn khóa “Không thể tham gia hiện tại”; không xóa discovery hoặc đổi thành vùng chưa phát hành.

## 5. Mười đất ẩn: mở rộng theo câu chuyện, không mở hàng loạt

Tách **hạt giống ở vùng hiện tại**, **câu hỏi mở rộng** và **cửa vào tương lai**. Hạt giống là nội dung tùy chọn có thể thêm sau khi biên tập, không tự tuyên bố đã nằm trong32questchính hiện có. Không cho loot bắt buộc cho build hiện tại từ vùng chưa phát hành.

| Đất dự phòng | Hạt giống có thể giới thiệu | Xung đột và cửa vào tương lai |
|---|---|---|
| H01 Hàn Uyên | Nhật ký canh gác hoặc dấu bia tại tuyến núi phíaBắc | Tìm đoàn mất liên lạc giữa cứu người và bảo toàn ghi chép; tuyến vượt biển/đèo chốt sau, không làVươngMiệnBăngGiáđổi tên |
| H02 Thiên Thạch | Hồ sơ quan sát có hai thời điểm không khớp từ tuyếnAstravelle | Khai thác khoáng trước hay đo nguy cơ trước; mở chuyến khảo sát, không sinh nghề hoặc tiertrangbịmới tự động |
| H03 Mộng Nguyệt | Bản lời thề có đoạn được người giữ rừng nhớ khác nhau | Ký ức có thể được lưu nhưng không thay bằng chứng; hành trình theo người dẫn khi vùng phát hành |
| H04 Sương Bạc | Hải đồ có nhánh hải đăng bị bỏ ngoài tuyến hiện tại | Tìm tuyến hàng mất, cứu người và quyền giữ hải đồ; cửa vào từ hành trình biển, không cướp đường tớiSahrKareth |
| H05 Cự Thú | Mẫu xương/ghi chép di cư qua hoạt động khám phá | Di sản săn bắt và vùng sinh sống chung; không mặc định sinh vật cổ đều phải bị tiêu diệt |
| H06 Hắc Liên | Nghiên cứu nước có dấu tương đồng với mẫu vùngtrũng | Tìm nguồn biến đổi thay vì quy cả cư dân thành tha hóa; tuyến khảo sát có người bản địa |
| H07 Lưu Ly | Hàng khoáng có nguồn gốc không rõ trong tuyến thương mại | Lợi ích mỏ đối đầu nguồn nước và cộng đồng; mở nhánh cảng/đoàn hàng khi đã có hồ sơ địa lý |
| H08 Hỏa Tâm | Thiết bị đo nhiệt lệch chuẩn trong hồ sơ rèn | Ổn định cơ chế thoát nhiệt và hậu quả can thiệp; hiểm họa cần đường báo, không đốt máu vô hình toànmap |
| H09 Tinh Sa | Chu kỳ ánh khoáng không khớp lịch bầu trời | Giải thích bằng kiểm chứng nhiều nguồn, không trả lời toàn bộ bí mật thần linh; mở đoàn khảo sát phù hợp |
| H10 Vân Mộc | Bản khế ước có biểu tượng công trình phủ rêu chưa nhận diện | Quyền tiếp cận di sản và cách lưu giữ tri thức; không tự thêm chủng tộc hoặc phe thứba |

Mười nhánh có thể liên hệ nhưng không bắt người chơi hoàn thành đủ10vùng mới xem kết thúc truyện đã hứa. Không coi mỗi đảo là một bản mở rộng bắt buộc theo cấp; cấp độ, quy mô, thứ tự phát hành và budget cần hồ sơ riêng. Giữ cap60 đến khi có quyết định thay đổi trực tiếp.

## 6. Định hướng phát triển theo nhóm phụ thuộc

Đề xuất nhóm khảo sát, chưa là lịch phát hành: nhóm hàng hảiH04/H07 dễ nối vớiMerrowen; nhóm lưu trữ/rừngH03/H10 cần nền khế ước; nhóm quan sátH02/H09 cần hồ sơAstravelle; nhóm cực hạnH01/H08 cần quyền môi trường/di chuyển; H05/H06 cần sinh thái và cách kể quan hệ cư dân rõ trước thiết kế săn/tài nguyên.

Không dùng mức“dễ nối cốt truyện”để khẳng định rẻ hoặc nhanh sản xuất. Mỗi vùng vẫn cần riêng: địa lý, hub/NPC, quái/boss, nhiệm vụ, item/economy, art, nhạc, cửa vào/return, quyền khám phá, test tải và dữ liệu. Các hạt giống mới chưa tăng budget32questchính/38phụ mà phải lập change request khi duyệt sản xuất.

## 7. Giao diện trước và sau mở vùng

Tooltip có tên/dải cấp nếu đã biết, trạng thái phát hành, điều kiện còn thiếu được phép biết và một hành động tiếp theo. Ví dụ “Cần nhận giới thiệu tại đầu mốiValedorn”, không hiện tênbossbí mật để giải thích khóa. Chưa phát hành chỉ có giới thiệu, không có đồng hồ đếm ngược giả hoặc nút mua quyền vào.

Thông báo mở dùng một lần theo grantreceipt; relog không phát lại cảcinematic hoặc cấp quà lần nữa. Vùng có màu nhưng đang bị chặn hiển thị khóa trênhànhđộngđi, không làm cả ảnh xám để người chơi tưởng mất tiến trình. Nếu nhiều điều kiện thiếu thì ưu tiên lý do hữu ích, cho xem danh sách điều kiện công khai khi cần.

Tên và vùng tô là hai lớp độc lập; đổi ngôn ngữ/zoom không dời quyền vùng. Mastermaphiện đủtên để duyệt, player-view dùng quyềnknowledge riêng. Bảnđồ lớn nên có chếđộchọnvùng/phóngvùngchi tiết, không nhồi mười thành/hàng chụcPOIđè hết nhãn; layout UI cụ thể cần bản vẽ tiếp, chưa tự thêm phím.

## 8. Dữ liệu và tình huống biên

Thiết kế miền dữ liệu: publicationState, regionKnowledge, permanentAccessGrant, currentEntryEligibility, discovery, checkpoint/warpUnlock, rewardClaim. Không để một boolean“unlocked”quản lý tất cả. Dữ liệu quyền ởserver, localcache chỉ trình bày; PostgreSQLschema cụ thể thuộcDATA, chưa tạo bảng ở đây.

Trường hợp phải xử lý: sửa điều kiện saupatch; nhânvật đã mở nhưngphethayđổi; đủcấpchưaxongtruyện; cógrantchưatớivùng; accountaltchỉcóreference; mởH01sauupdatekhôngtựmởH02; regionđangbảotrìkhôngresetprogress; bịchặncombatkhôngcoilàmấtquyền; nhậtkýgiữmanhmốinhưngkhôngtựspawnNPC ởvùngchưapháthành.

Khi một đấtẩn đượcpháthành phải có migration/quyền nội dung đượcduyệt, không chỉ sửaavailable=trueởclient. Chưa chốtngưỡngmớithì giữđóng; không gán cấp0hoặc61đểsuyđoán. Các nhânvậtcũ nhận hạtgiống/quyềntheochínhsáchupdate, khôngbắt reset toàntruyện để vào.

## 9. Bàn giao và giới hạn

Hồ sơ này chốt phân biệt trạngthái, nguyên tắcgrant, chuỗimở sáuvùng và10hạtgiốngdựphòng. Chưa viếtquestscript, nguồnloot, giờpháthành, tiergear hoặc bảnđồmới; chưa sửa bộmôphỏngr002thànhbackend.

Bản xemr002vẫn dùng level/story/faction để minh họa tômàu; không dùng nó để kiểm luậtvĩnhviễn/mấtquyền. Cần bảnUItiếp hoặc implementation riêng để diễn đủ các trạng thái rời rạc vừa chốt. Tổng525mụcgiữ **127hoànthiện /11mộtphần /387chưathiếtkế**; không đánh thêm task chỉ vì mở sâu tài liệu. MAP-01vẫn mộtphần.

Nguồn: [bản r002201](201_MAP_01_MUOI_DAT_AN_VA_MAU_THEO_TIEN_TRINH_R002.md), [lớpbảnđồ194](194_MAP_02_CAU_TRUC_LOP_BAN_DO_VA_QUYEN_THONG_TIN.md), [ràsoát193](193_RA_SOAT_SAU_MAP_07_09_R002.md), [địa lý185](185_MAP_01_DIA_LY_ELARION_VA_MANG_DUONG.md), [khungphe186](186_FACTION_01_HAI_PHE_BANG_HOI_VA_CHIEN_TRUONG.md).
