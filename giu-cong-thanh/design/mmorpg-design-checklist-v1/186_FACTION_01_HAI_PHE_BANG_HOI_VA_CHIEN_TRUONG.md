> **Địa lý/map hiện hành:** [Phụ lục187](187_MAP_DONG_BO_PHE_BANG_HOI_VA_W06.md) chốt vị trí tương đối, mạng truy cập, chín tiểu khu W06, zone-type và brief vẽ. Khi dựng map dùng cùngID/cứđiểm, chưa thay số cấp/luật phe của hồ sơ này.

# FACTION-01 — Hai phe, bang hội và chiến trường tài nguyên

Ngày 22/10/2026. Thiết kế nền tảng mới theo yêu cầu chủ dự án; chưa code, vẽ, migration PostgreSQL hoặc triển khai PvP. Áp dụng MMORPG pixel 2.5D, không sửa thủ thành. Hồ sơ này thay quy định “chưa mở PvP” trong phạm vi nội dung mới, không bật PK trên toàn thế giới.

## 1. Cốt truyện hai phe

Sau Đêm Gãy Ấn, các cộng đồng cùng nhận ra mạng phong ấn cần thay đổi. Tranh luận nằm ở quyền sử dụng tài nguyên và việc có được dùng sức mạnh cưỡng chế để ngăn thảm họa kế tiếp hay không. Hai phe cùng muốn bảo vệ Elarion, cứu dân và khôi phục một mạng bảo hộ có thể tồn tại lâu dài. Không phe nào thờ Hư Không, độc quyền chân lý hoặc mặc định là phản diện.

**P01 — Liên Ước Hòa Minh.** Chủ trương đồng thuận giữa cộng đồng, kiểm chứng công khai và can thiệp từng bước. Nguồn lực ưu tiên chữa trị, di tản, thương lượng và sửa hạ tầng. Họ cho rằng một mạng bảo hộ dựa trên cưỡng ép sẽ lặp lại lỗi cũ. Điểm yếu là chậm quyết định, có thể bỏ lỡ thời cơ khi nhiều bên chưa thống nhất. Nội bộ có người hòa giải thực dụng và người lý tưởng hóa thương lượng.

**P02 — Chiến Ước Thiết Thệ.** Chủ trương tập trung lực lượng, giữ điểm neo và đánh trước những đe dọa đã được xác minh. Họ cho rằng chờ đồng thuận giữa khủng hoảng cũng khiến dân chết. Có kỷ luật bảo vệ dân thường, không cổ vũ sát hại hoặc thử nghiệm cưỡng ép; phe chủ chiến vẫn có giới hạn đạo đức. Điểm yếu là dễ tập trung quyền lực và coi giải pháp quân sự là lựa chọn đầu. Nội bộ có chỉ huy bảo hộ và nhóm cứng rắn cần bị chất vấn.

Tên/motif mới là quyết định thiết kế làm việc: Hòa Minh dùng vòng khế ước và nhánh mở, ngọc trầm/ngà; Thiết Thệ dùng khiên/mũi nhọn hợp nhất, đỏ đất/thép. Không chỉ dùng màu để phân biệt. Biểu tượng không thay trang bị/vũ khí và không ép mọi thành viên mặc cùng set.

Hai phe là liên kết chính trị của người chơi, không thay Giáo Hội Thánh Nhật, Hội Đồng Pháp Sư, Hội Mạo Hiểm, Liên Minh Lục Địa hoặc Giáo Phái Hư Không. Thành viên các tổ chức có thể ủng hộ những quan điểm khác nhau. Người chơi vẫn điều tra sai phạm của bất kỳ cá nhân nào; phe không tự quyết kết thúc truyện hoặc lựa chọn cứu người cha.

## 2. Chọn phe và quan hệ nhân vật

Chọn phe khi **chuyển chức lần đầu ở cấp15**, tách biệt chọn nghề. Mọi chủng tộc/nghề/nhánh hợp lệ đều vào được cả hai phe, không khóa Hắc Kỵ Sĩ vào Thiết Thệ hay Mục Sư vào Hòa Minh. Chuyển nhánh30 không bắt chọn lại phe.

Luồng: giới thiệu cả hai đại diện → trải nghiệm hai góc nhìn trong tuyến solo → xem quyền lợi/nghĩa vụ → chọn nghề và xác nhận phe ở hai bước rõ → nhận quyền phe. Không phải chọn ngay sau khi lên15 nếu chưa hiểu, nhưng chưa hoàn tất chuyển chức và chưa vào hoạt động phe. Không bắt PvP để chuyển nghề.

Quy tắc chống tự giao dịch đối phe: một account chỉ có **một phe trên cùng server/realm**, các nhân vật đã gia nhập kế thừa phe đó; nhân vật chưa15 vẫn trung lập và không tham chiến phe. Tiền nạp dùng chung các chế độ theo thiết kế cũ, không dùng tiền nạp mua quyền thắng phe. Phe thuộc phạm vi realm, không ép mọi server cùng phe.

Đổi phe không làm ngay trong trận: phải rời bang, không giữ chức vụ, không mang kiện tài nguyên chiến trường, không còn trận/đấu giá phần thưởng đang chốt; chỉ mở ở ranh mùa theo cấu hình và có xem trước hậu quả. Không chốt phí đổi hoặc dịch vụ trả tiền tại đây. Lịch sử điểm/nhận thưởng vẫn lưu, không đổi phe để nhận hai phần cùng một kỳ.

Bang hội bắt buộc cùng phe; founder/ứng viên kiểm phía server. Người trung lập chưa đủ điều kiện không được dùng bang để lách gia nhập. Bạn bè và party PvE có thể khác phe ở nội dung trung lập; vào chiến trường bắt buộc tách đội đúng phe và chặn hồi máu/buff/trao vật chiến trường cho địch.

## 3. Danh mục bản đồ mới và cách đếm

| Mã | Bản đồ | Cấu trúc sản xuất và luật |
|---|---|---|
| FM01 | Đại bản doanh phe | Một loại bản đồ với **hai bản sắc/biến thể** Hòa Minh và Thiết Thệ, hai không gian riêng. An toàn, không PK; phục vụ chọn phe, quân vụ, thông tin và xếp hạng |
| GM01 | Lãnh địa bang hội | Một template tạo instance riêng theo bang; nhà hội, kho, xưởng, sân tập và khu trưng bày. Không tạo một open-world map mới cho mỗi bang |
| W06 | Vành Đai Tranh Chấp | **Một vùng thế giới mới cấp40–60**, tài nguyên/cứ điểm và PvP hai phe; cùng phe không gây sát thương |
| GA01 | Đấu trường Liên Bang | Template giải bang hội toàn server, các trận instance để xác định bang mạnh nhất; có thể gặp bang cùng phe theo luật giải |
| GA02 | Đài Hội Ước | Template giải nội bộ từng phe, các trận cùng phe có đồng thuận đăng ký; xác định bang đứng đầu phe và thứ hạng |

Đó là năm loại không gian bổ sung, không phải đúng năm cảnh độc nhất: FM01 cần hai biểu hiện, GM01/GA có nhiều instance chạy từ template. W06 là map lớn; diện tích dự toán **6×V01**, tăng tổng vùng hoang dã1–60 từ15×lên21×, không tính trụ sở/arena/dungeon. Kích thước phải kiểm camera, di chuyển và tải trước dựng; không kéo lớn module.

Năm vùng PvE cũ,90mẫuquái/82NPC/16tinh anh/5bossmap/5dungeon/62rương vẫn là ngân sách nền; không tự chia chúng sang map mới. Nội dung NPC/quái/tài nguyên/asset của năm loại không gian mới phải dự toán riêng trong FACTION-12, chưa coi có đủ bằng tái sử dụng con số cũ. Trần60 và truyện chính tới45 giữ nguyên; mệnh đề **“không map46–60” hết hiệu lực riêng với W06**. Chưa mở tier trang bị46–60, nghề mới hoặc công thứcXP mới.

## 4. Đại bản doanh và lãnh địa bang

Hòa Minh thiên về sân nghị sự, khu điều phối cứu trợ, xưởng sửa và vườn thuốc; Thiết Thệ có sân duyệt đội, bản đồ chiến dịch, xưởng công sự và trạm cứu thương. Cả hai đầy đủ chức năng tương đương, không phe nào có dịch vụ kinh tế vượt trội mặc định. Không thay trung tâm lịch sử của các thành; trụ sở là cơ sở liên minh mới, vị trí chốt sau bản vẽ địa lý.

NPC mới cần vai trò riêng: đại diện tư tưởng, quân nhu, điều phối chiến trường, thư ký bang, trọng tài và nhân chứng phản biện. Không dùng toàn bộ như quầy menu. Có nhiệm vụ PvE phục vụ phe và câu chuyện nội bộ, không bắt người thích solo đi giết người chơi khác để hiểu truyện.

Lãnh địa bang cho giao lưu, chuẩn bị và công trình tiện ích; kho/quỹ có quyền và log. Dummy không phátXP/proc tài nguyên. Nâng công trình chưa được tự cộng sát thương/giáp cho cả bang; phải có ngân sách GUILD/STAT riêng. Mất cứ điểm W06 không xóa nhà bang, đồ cá nhân hoặc vật phẩm kho đã gửi hợp lệ.

## 5. W06 — Vành Đai Tranh Chấp cấp40–60

**Bối cảnh:** vùng có nhiều mạch vật liệu phục hồi điểm neo. Hòa Minh muốn phân phối theo thỏa thuận/giám sát, Thiết Thệ muốn tập trung giữ tuyến để tránh bị phá. Cùng một nguồn lực hữu hạn khiến tranh chấp nổ ra ở vùng được quy định, còn các thành và chiến dịch cứu trợ vẫn giữ trung lập. Tên và vị trí W06 là mới, chưa đè lên một thành nguồn.

**Bố cục dự kiến:** hai tiền trạm an toàn ở hai hướng; vành ngoài40–45 để làm quen; vành giữa46–52; vành lõi53–60. Đây là cấp NPC/quái bảo vệ/mục tiêu PvE để hướng độ khó, không tự cấm người60đi vòng ngoài. Cần ghép thành thung lũng/đường vận tải liên thông, địa hình có núi thấp, rừng, mạch nước và dấu khai quật; không phải ba vòng tròn đồng tâm.

Sáu cứ điểm nguồn tài nguyên **được chiếm**: hai bãi ngoại vi, ba nguồn giữa và một cụm lõi; thêm các điểm thu thập thường không chiếm được. Mỗi cứ điểm có ít nhất hai hướng tiếp cận và đường vận tải; không đặt duy nhất một cầu bắt mọi người đi qua spawn địch. Hai trạm không thể chiếm, không bắn xuyên ranh bảo hộ; ngăn địch chặn ngay điểm xuất hiện, có nhiều cửa xuất quân. MAP-03/PVP phải chốt xử lý combat ở biên, không tự cho bước qua là miễn nhiễm.

**Sở hữu hai tầng:** cứ điểm thuộc một phe; một bang là đơn vị quản lý trong phe đó. Bang đồng phe muốn quyền quản lý đi qua cơ chế phân công/luân phiên theo kỳ quân vụ và đóng góp đã ghi nhận, không đánh bang đang giữ. Chưa chỉ định mọi cứ điểm cho bang hạng1. Hết kỳ quyền quản lý xét lại theo quy tắc công khai, không chuyển vì người lãnh đạo bấm thu hồi tùy ý.

**Chiếm điểm:** đăng ký tham chiến/đủ điều kiện → vô hiệu hóa phòng thủ theo encounter → giữ mục tiêu trong thời gian cấu hình → trạng thái tranh chấp → xác nhận sở hữu server. Có địch hợp lệ trong vùng mục tiêu thì điểm bị contest; không chỉ đứng ngoài phạm vi và spam sát thương là chiếm. Thời lượng, số người, tốc độ chiếm và lịch mở là cấu hình cần FACTION-04/PVP, chưa điền số tùy tiện. Hai bang cùng phe được cộng sức chiếm, không giành last-hit đổi owner.

**Giờ hoạt động:** giờ sản xuất/thu thập nền và cửa sổ tranh quyền tách riêng. PK địch hoạt động trong phần hoang dã W06, dù chưa tới giờ công thành; quyền sở hữu chỉ đổi trong cửa sổ công bố. Lịch sự kiện dùng **giờ thực server và timezone hiển thị**, không giờgame180phút/ngày của thời tiết. Một bản W06 chung quyền sở hữu trên realm; không mỗi channel có chủ khác để chuyển kênh farm. Nếu chia tải cần phân shard có luật đồng bộ trước triển khai, không nhân sản lượng.

**Không gây hại đồng phe:** đòn thường, skillAoE, DoT, pet, phản đòn và bẫy đều kiểmquan hệ. Không bật chế độ PKtựdo, không duel tự phát trongW06. Va chạm nhân vật không cho phe mình bodyblockcổng; summon/côngtrình phải tôntrọnglối đi. Địch không nhận hồi sinh/hồi máu từ phe mình thông qua party trung lập.

## 6. Tài nguyên, vận chuyển và phần thưởng

Nguồn gồm khoáng rèn chiến trường, thảo dược hồi phục, gỗ công sự và tinh thể ổn định; item cụ thể, độ hiếm và lượng cần thiết chưa chốt. Dùng cho tiện ích/công trình/đổi thưởng chiến trường phù hợp catalog, không tự mở gear60hoặc bắt buộc tài nguyênPKđể hoàn thành buildPvE cơ bản45.

Thu hoạch tạo đóng góp cá nhân và sản lượng nguồn; phần lợi ích bang quản lý/phần công cộng phải có công thức FACTION-05, không mặc định bang giữ lấy100%. Thùng chiến trường đang vận chuyển có luật riêng: bị hạ có thể rơi kiện chưa nộp cho encounter, nhưng **không rơi trang bị đeo, vàng ví hoặc đồ túi cá nhân**. Kiện có ID, nguồn/owner, thời hạn và một lần nộp; reconnect không nhân đôi. Không được đưa kiện vào kho chung/chuyển chế độ để né vận chuyển.

Chặn farm cặp bằng đóng góp đa dạng: chiếm/giữ, giao vật liệu, đánh phòng thủ, hỗ trợ giao tranh; không phát tiền không khóa cho mỗi kill. Hạ đi hạ lại cùng người hoặc heal đổi lượt không là nguồn thưởng vô hạn. Tỷ lệ sinh, hạn mức account, binding, quyền giao dịch và chống thông đồng còn phụ thuộcCAP-01/ITEM/PVP; chưa có quyết định mintthêmtiền. Sản lượng giữ điểm không tăng vô hạn theo số thành viên hoặc nhiều channel.

Chết tạiW06 áp quy tắc chiến trường: về trạm/điểm hồi sinh hợp lệ, không hồi sinh bằng trả tiền ngay giữa điểm đang tranh. Skillhồi sinh MụcSưvà trợ giúp đồng đội dùng luậtCOMBAT hiện hành nhưng phải qua modifierPvP/encounter; chưa tự thay skillhoặc bật hồi sinh vô hạn. Mất mạng/relog không né chết hoặc giữ kiện, có nhật ký xử lý và điểm trở lại an toàn. Không kéo quy tắc chếtW06sangPvEthường.

## 7. GA01 — giải bang hội mạnh nhất server

Các bang từ cả hai phe đăng ký roster; vòng loại/xếp hạng rồi nhánh đấu để tìm nhà vô địch. Quyền đấu theo **matchteam**, không theo phe: hai bang cùng phe vẫn là đối thủ trong trận đã chấp nhận. Ra khỏi instance trở lại luật quan hệ thế giới; không đánh nhau ngoài arena vì vừa là đối thủ giải.

Map có tuyến tiếp cận đối xứng chức năng, mục tiêu trung tâm/phụ, điểm hồi sinh được bảo vệ; chấm điểm bằng mục tiêu và hỗ trợ, không chỉ tổng kill. Không tái sử dụngW06với nhiều tài nguyên hơn rồi gọi là giải. Quy mô roster, số người trên sân, thời lượng, nhánh thua/loại và chuẩn hóa trang bị cầnFACTION-06/PVPchốt trước làm matching; chưa thiết kế số người theo sức máy giả định.

Giải nhấn mạnh phối hợp: áp dụng hồ sơPvPriêng để cân bằng build, không âm thầm sửa chỉ sốPvEhoặc khiến trang bị nạp quyết định thắng. Không cho thuê người đổi bang giữa các vòng; roster/eligibility chốt theo kỳ, giữ nguyên khi offline ngắn. Thắng nhờ disconnect/forfeit cần log và quy trình trọng tài. Thưởng chủ yếu danh hiệu, vật phẩm ngoại hình/cúp và tiến trình mùa, không độc quyền vật liệu bắt buộc.

## 8. GA02 — giải nội bộ chọn bang đứng đầu phe

Mỗi phe có bảng riêng, các bang cùng phe đấu bằng matchteamtrongGA02. Không thay điều kiện “cùng phe khôngPK” tạiW06. Bang đạt hạng1 nhận danh hiệu **Bang Dẫn Ước** trong một kỳ; người lãnh đạo có vai trò nghi lễ/tham vấn, không được đá người khác khỏi phe, thu tiền ví hoặc khóa dịch vụ.

Đề xuất mùa bốn tuần: tuần1–3 tích điểm vòng loại theo lịch công bố; tuần4vòngchốt và ghi nhận thứhạng. Đây là giá trị cấu hình thiết kế cần rà tải/lịch, không lịch triển khai đã chạy. Kết mùa lưu lịch sử và reset điểm thi đấu, không wipe nhân vật/nhà bang. GA01vàGA02tách bảng/thưởng, tránh xếp giờ trùng để bang có thể dự cả hai.

**Hiệu ứng theo hạng** dùng hệ thống entitlementcó hạn, không nhân thành buff trực tiếp theo từng người online:

| Hạng trong phe | Quyền lợi thiết kế ban đầu |
|---|---|
| 1 | Huy hiệu/cờ/bục vinh danh hạng1; tăng5% điểm nhiệm vụ bangPvEhợp lệ |
| 2 | Huy hiệu hạng2; tăng3% điểm nhiệm vụ bangPvEhợp lệ |
| 3 | Huy hiệu hạng3; tăng1% điểm nhiệm vụ bangPvEhợp lệ |
| Còn lại đủ điều kiện | Ghi nhận tham dự và tiến trình mùa theo đóng góp, không buffhạng |

Điểm nhiệm vụ bang là tiến trình bang, **không phải XPnhân vật, sát thương, tốcđánh, tiềnkhôngkhóa hoặc sảnlượng cứđiểm**. Bonus chỉ cho nguồn PvEbang được liệt kê, có trần áp dụng theoFACTION-08/GUILD; không tăng bonus theo số thành viên. Không hiệu lực trongGA01/GA02hoặc tính điểm chiếmW06, tránh bangthắngcàngmạnh rồi không ai tranh được. Các tỷ lệ5/3/1 là đề xuất cân bằng ban đầu có cấu hình, chưa playtest.

Huy hiệu hiển thị trên bảng bang và cờ nhà bang; hiệu ứng nhân vật nếu thêm phải nhỏ, tắt được và không giống buffcombat. Hiệu lực kỳ kế tiếp, hết hạn server tự thu hồi; không cộng dồn nhiều mùa. Phần thưởng cá nhân xét roster/tham gia, không vào bang ngay trước phátthưởngđể nhận đủ. Bang đổi phe/giải thể mất quyền hiện hành, lịch sử vẫn giữ; xửlýbùhoặc chuyển hạng cần luật rõ trước mùa.

## 9. Cân bằng hai phe và thông tin người chơi

UIchọnphe nêu mục tiêu chung, hai phương pháp, giới hạn, ví dụquest và luậtPK, không gắn thanh thiện/ác. Hiển thị số đông tương đối để gợiý phethiếu; không tự chuyển người, không bán quyền chọn phe đangthắng. Chiến trường có giới hạn quân số hoạt động/đăngký và hàngchờ theo tương quan để một phe không tràn toànmap; số slot/chênh lệch cần thử tải và luật chống alt giữchỗ ởFACTION-09. Không tự nhân dame pheítngười ngoài công thứcSTAT.

Cửa sổPhe/Bang/Chiến trường có tab riêng; biểu tượng trênmap phân biệt trạm antoàn, nguồn tài nguyên, ownerphe/bang và trạng thái contest. HUDtrận hiển thị điểm/mục tiêu/thời gian còn, không thanh dài che màn. Hotbar1–9/Q/E/R/Z vàWASDgiữ nguyên; mở từmenu và cho người chơi gánphím, chưa chiếmT/Esc/~. CócảnhbáoPKvà xácnhận lầnđầuvàoW06. Dịch vụ/NPCngoàihoangdã không tự tạo miễn nhiễm.

## 10. Thẩm quyền dữ liệu và thử nghiệm cần làm

Server quyết định phe/quan hệ tại castvàhit; snapshotchỉtrìnhbày. Pet/projectile/DoT/aurathừa quyền chủ theo scope; kiểm tra lại khi đổi map, team, logout hoặc chết. Party khác phe không vượt mask. Cùng phekhôngđánh tạiW06, đối thủGAđượcđánhtrongmatch, ra sảnh thì dừng hiệu lực; xửlýđạntrễđúngscope.

PostgreSQLtươnglai cầnphânbiệt: membershipaccount-realm/nhânvật, guildfaction, guildroster, season/match/participation, ownership/contest, resourcetransaction/cargo, entitlement/rewardreceipt và auditlog. Đây là danh sách miền dữ liệu, chưa schema/migration. Claimthưởng/đổiowner/nộpkiện dùng nguồn authoritative và chống retrygấpđôi; clientkhôngghi trực tiếp quyền chiếm.

Testbắtbuộc: chọnphecấp15 khôngđổiquyềnnghề; hai charcùngaccountkhôngđốiphecùngrealm; cùngpheAoE/pet/reflectkhônggâyhạiW06; arena samefactionđúngmatch; safezonekhôngbắnxuyên; nhiềubangcùngchiếm khônggiànhlast-hit; chủoffline/giảithể/đổiphe; mấtmạngkhiđangvậnchuyển; hồi sinh/đạntrễ; đồngbộchannel; altfarm/roster; thưởng/hạnghết hạn; tải đông web/PC; truyệnPvEsolokhôngđòiPK. Chưa có kết quả runtime.

## 11. Trạng thái và trình tự bàn giao

FACTION-01 hoàn thiện **khung thiết kế**: tư tưởng, scopechọnphe, danh mụcmapvà quan hệ với truyện. FACTION-02…12vẫn mở để viếtquytắcchi tiết, UI, nguồnthưởng/sốliệu và chuẩn asset; mô tả trên chưa thayhồ sơtrận/AI/combat.

Phạmvi checklist thêm12đầuviệcFACTION, không dùngtaskcũPvPchưa thiết kế để báođãtriểnkhai. Tổngmới **525mục:119hoànthiện hồsơ /11mộtphần /395chưa thiết kế**. Cácbanner513cũlàlịchsử. GUILD/PVP/MAPliênquan cònmở; chưa code/vẽ/tíchhợp.

Nguồn: [năm tổ chức truyện](../mmorpg-story-v1/05_PHE_PHAI_VA_NHAN_VAT.md), [scope15](15_PROD_06_PHAM_VI_VA_NGAN_SACH.md), [cap60](91_CAP_60_NOI_DUNG_45_VA_XP_HAU_TRUYEN.md), [quyềncombat109](109_COMBAT_11_QUYEN_GIAO_TRANH_VA_AN_TOAN.md), [NPC/vùng184](184_MAP_04_HO_SO_NAM_VUNG_THE_GIOI_MO.md), [địa lý185](185_MAP_01_DIA_LY_ELARION_VA_MANG_DUONG.md).
