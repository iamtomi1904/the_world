> **MAP-06 ·22/10/2026:** [Hồ sơ luật vùng188](188_MAP_06_PHAN_LOP_KHU_VUC_VA_QUYEN_GIAO_TRANH.md) đã thiết kế: PvE trung lập, W06 đối phe, GA theo đội trận, an toàn và chuyển scope. **525mục:120hoànthiện /11mộtphần /394chưa thiết kế**. TiếpMAP-07; chưa code/vẽ/QA runtime. Các tiến độ bên dưới là lịch sử.

# Đồng bộ bản đồ — Hai phe, bang hội và vùng tranh chấp

Ngày 22/10/2026. Phụ lục hiện hành cho MAP-01/04/06/07/08/10/12 và FACTION-03…12. Khi xung đột phạm vi, dùng hồ sơ này cùng [khung phe186](186_FACTION_01_HAI_PHE_BANG_HOI_VA_CHIEN_TRUONG.md). Chưa vẽ layout, code, bật PvP hoặc thay thủ thành.

## 1. Danh mục bản đồ thống nhất

| ID | Loại không gian | Cấp/quyền vào | Quan hệ giao tranh | Cách tồn tại |
|---|---|---|---|---|
| V01…V05 | Năm vùng PvE cốt truyện | Nội dung1–45 theo hồ sơ184 | Không PK tự do/đối phe; phe khác vẫn đi đường và gặp NPC trung lập | Vùng chung, cảnh truyện riêng khi cần |
| FM01-HM | Đại bản doanh Hòa Minh | Đã chọn Hòa Minh khi chuyển chức15 | An toàn, NPC không bị tấn công | Một biến thể bản đồ trụ sở phe |
| FM01-TT | Đại bản doanh Thiết Thệ | Đã chọn Thiết Thệ khi chuyển chức15 | An toàn, NPC không bị tấn công | Biến thể còn lại của FM01 |
| GM01 | Lãnh địa bang hội | Thành viên hoặc khách được phép | Không PK, dummy luyện không thưởng | Instance theo bang dùng template chung |
| W06 | Vành Đai Tranh Chấp | Cấp40–60, đã có phe | Hai phe là địch ngoài khu bảo hộ; cùng phe không gây hại | Một vùng chiến trường có trạng thái sở hữu chung trên realm |
| GA01 | Đấu trường Liên Bang | Bang/roster đạt điều kiện giải | Địch theo matchteam, kể cả cùng phe | Template thi đấu, instance từng trận |
| GA02 | Đài Hội Ước | Bang/roster cùng phe đạt điều kiện | Địch theo matchteam trong trận; kết trận trở lại đồng minh | Template giải nội bộ, bảng xếp hạng riêng mỗi phe |

Số lượng hiện hành: **sáu vùng ngoài trời chính** = nămPvE + W06. Có thêm bốn họ không gian chức năng FM01/GM01/GA01/GA02; FM01 có hai biến thể, các họ còn lại có thể có nhiều instance. Không gọi thành “mười map thế giới mở” hoặc tính mỗi bang là một vùng mới.

Diện tích dự toán ngoài trời:15×V01 của năm vùng cũ +6×V01 củaW06 =21×V01. Trụ sở, nhàbang, arena và dungeon chưa cộng vào21×; cần đo/layout mới xác nhận. Chưa tăng kích thước tile, mật độ sinh vật hoặc số người đồng thời.

## 2. Vị trí trên Elarion và cửa tiếp cận

Đặt **W06 ở vành chuyển tiếp Đông Nam**, ngoài tuyến dân cư chính, giữa miền chân cao địa phía Đông và hành lang khô phíaNam. Đây là địa danh mới có mạch vật liệu phong ấn, không là thànhXI, không thay Nocthollow/SahrKareth và không chứa VựcRỗng. Vị trí là quan hệ địa lý làm việc, chưa là tọa độ hoặc đường biên chính thức.

Đại bản doanh Hòa Minh đặt tại một khu đất riêng trên hành lang cứu trợ phíaTây củaẨnThành, có đường tới đầu mốiValedorn. Đại bản doanh Thiết Thệ đặt tại khu đất riêng trên hành lang phòng vệ phíaĐông củaẨnThành, có đường raĐườngVọngLinh. Cả hai ngoài lõi thànhhỏng và ngoàihubV01; không đặt doanhtrạiPKsát ruộng tânthủ. Từ hai cổng nối đường trung lập có biển phe, đủ khoảng cho khu kiểmsoát, không chiếm chợ/cầu bắt buộc.

Hai trụ sở là cơ sở mới có nguyên nhân lập sau biến cố; không dời trung tâmGiáoHội khỏiAurelia hoặc HộiĐồng khỏiAstravelle. Chọnphe tại đại diện trunglập cấp15 dẫn tới trụ sở đúngphe, không bắt người mới băng quaW06.

W06 có hai **tiền trạm** riêng trong map. Người đủ điều kiện đi từ phòng quân vụ trụ sở qua chuyến điều vận có điểm đến an toàn; đường đi bộ ở rìaĐôngNam sẽ xác lập khi vẽ địa lý và không bắt buộc với lần tham giađầu. Chuyếnđi không thay quy tắc khám phá/dịchchuyển toàn game, không yêu cầu tàu bang và chưa phát sinh phí mới. Hai bên có quyền truy cập tương đương; khoảng cách tới nguồn cần cân đối từ tiềntrạm, không yêu cầu hai trụ sở ngoài lụcđịa phải cách đều mọi nơi.

GM01 truy cập từ thư kýbang ở trụ sở phe hoặc điểm dịch vụ bang trunglập được chỉ định; khách có lời mời và điểm trả về hợp lệ. Không cắm một cổngnhà riêng cho mỗi bang khắp mapchung. GA01/GA02 vào qua NPCtrọngtài/giao diện đăngký và sảnhchuẩn bị; hiển thị dưới lớp **Hoạt động**, không giả làm hai đảo phải đi bộ tới. Rời trận trả về điểmchuẩn bị/điểmđãghi, không về giữa lãnhđịađịch.

**Không có đường bắt buộc** nào từV01…V05 hoặc giữa mười thành phải xuyênW06. TuyếnHảiĐăng và lốiSahrKareth vẫn dùng được với người không chơiPK. W06 không tạo shortcut đi xuyên đường kiểmấnIX↔X bị khóa trong cốttruyện.

## 3. W06 — cấu trúc lãnh địa để chuẩn bị vẽ

| Tiểu khu | Hình ảnh, nguồn sống và chức năng | Quyền và lưu ý |
|---|---|---|
| Tiền trạm Hòa Minh | Sân tiếp tế, lều cứu thương, bàn điều phối, kho giao kiện | An toàn, không chiếm được; nhiều hướng ra, không chỉ một cổng hẹp |
| Tiền trạm Thiết Thệ | Công sự, xưởng vá giáp, trạm cứu thương, kho giao kiện | Quyền tương đương trạmHòaMinh, không có buffcombat riêng |
| Bìa Rừng Đứt Mạch ·40–45 | Cây chịu gió, cỏ thấp và nền khai thác cũ; nguồn gỗ/dược liệu | Một trong hai cứ điểm ngoại vi, hai hướng tiếp cận và đường vòng |
| Bãi Đá Dẫn Nước ·40–45 | Suối cạn quanh đá lộ, cầu và bãi gom hàng | Cứ điểm ngoại vi còn lại; cạn/sâu đúng181, không camp một cầu duy nhất |
| Mỏ Sườn Xám ·46–52 | Đường mỏ ngoài trời, quặng và giàn vận chuyển | Một trong ba cứ điểm giữa; không dùng thangvách làm hitbox mơhồ |
| Rừng Gỗ Cứng ·46–52 | Tán thưa, gốc khai thác, bãi xếp gỗ/công sự | Cứ điểm giữa; tán mờ khi che người, gió không dời collider |
| Nguồn Mạch Sâu ·46–52 | Hồ nhỏ và nền đá thấm, dược liệu/tinh thể lộ | Cứ điểm giữa; có sànđánh và đườngra, không ép bơi |
| Đài Cộng Hưởng ·53–60 | Công trình khai thác điểm mạch vô hoạt, nhiều mặt tiếp cận | Cứ điểm lõi; nguồn giá trị hơn cần luật kinh tế, không tự định tỉ lệ thưởng |
| Đường Quân Nhu | Mạng đường nối các nguồn, có ngãrẽ/điểm quan sát/đoạn cao thấp | Đang vận chuyển không mặc định được bảo hộ; không là hành lang campkhônglốithoát |

Sáu cứđiểm được chiếm chính là2ngoại vi +3giữa +1lõi; hai tiềntrạm và đườngquânnhu không tính thêm điểm chiếm. Những tên trên là tênlàmviệc, chưa ghi lorechínhthức hoặc tạo item tương ứng. Ba dải độkhó không được vẽ thành ba vòngtròn đồngtâm; sắp theo thunglũng, nhánhđường và địachất.

Mỗi cứđiểm có vùng lõi/mục tiêu, sân giao tranh, đườngtiếp tế, ít nhất haihướng tiếp cận và khu đệm. Ranh thể hiện bằng côngtrình, taluy, bờ hoặc mốc, không vòng tròn trangtrí thay địa hình. Phe sởhữu và bangquảnlý làhai trường riêng. Cùngphe hợp tác tại điểm, không đổi bangownerbằng last-hit hoặc tấn công đồngminh.

Quái canh giữ/sinh vật W06 thuộc catalog mới sẽ dự toán riêng; **90mẫu của nămPvEkhông được chia lại thành15mẫu/vùng**. Có thể táidùng rig/họ hợp sinhcảnh nhưng vẫn cần hồsơ/cấp/AI/loot mới. Chưa tự thêm bossmapthứ6, NPCngoàingânsách hoặc rươngthứ63; các mục mới phải phêduyệt phạmvi tạiFACTION-12 trước ghi tổng.

## 4. Trạng thái an toàn và chuyển quyền

Mapdata phải khai báo zone-type: trunglậpPvE, trụsởphe, nhàbang, tiềntrạmbảohộ, chiếntrườngphe và trậnđấu. Quan hệvàhit kiểm ởserver, không suy ra từ màu đất, màuáo hoặc khoảng cách tớiNPC.

NPCdịchvụ/nhânchứng ngoàihoangdã vẫn theo184mục16. TrongW06có thể có người dẫnđường/khảosát nhưng họ không phát bongbóng bất tử cho ngườiđangPK. Dịchvụ cần đọc lâu đặt ở trạm hoặc vịtrí tiếp cận hợp lý; không mở shop để dừng giao tranh.

Đổi bản đồ: chuyếnvàoW06kiểm cấp/phe/quyền, báoPKlầnđầu rồi đưa tới trạmđúngphe. ĐăngkýGAkiểm roster/scope, tách khỏiparty khácphe theo luậtmùa. Mang kiện/đangcombat không được dùng cổngvềnhàbang để né luật; luồng huỷ/đặtkiện/điểmtrả cầnFACTION-04/05 vàCOMBAT-14chốt trước code.

An toàn không kíchhoạt ngay khi chạm biên nếu nhânvậtđangcombat: kếthừa nguyên tắc109, từchối vượtbiên/hiểnthịlýdo và có lối thoát chiếnthuật hợp lệ; chi tiết leash/cooldown cần PvPchốt. Không thiết kế túi chết hẹp để người chơi bị chặn vôhạn. Đòn/pet/DoTkhông gâyhạixuyênbiên hoặc giữ quyềnđịch sangsảnh/trậnkhác. Không tự sửa cơchếhồisinh PvE/skillMụcSưđể khớp bảnđồ.

## 5. Khí hậu, thời gian và cảnh quan

W06 nối dải rừng/đá ở phần cao với vùng khô phíaNam: cây lá nhỏ/chịugió, bụi thấp, cỏ cứng, rêu quanhmạch; vẫn có câycỏ và đá quanhmỏ/côngsự. Nước nguồn cóđáy xanhxám rõ ởcạn; phần nhiễm cộnghưởng chỉ ởtiểuvùng có cảnhbáo và nguyhại phảiENV-04chốt. Không mặcđịnh tấtcả nước ởchiếntrường làđộc.

Thời tiết dùng đồnghồgamechung181, gió/mây/mưachuyểnmềm và giốngnhau chocùngW06realm; không che telegraph. Không thiên vị một trạm bằng mưa/sương dày, không cộng dame cho pheđangthắng. Tánrung/groundVFX chỉ là trìnhbày; địa hình/nước sâu không đổi vì mưa. Chớpsáng và particle có tuỳchọn giảm.

Giờ tranh điểm và giải GA01/GA02 dùng giờ thực của server, kèm múi giờ hiển thị, tách khỏi giờ trong game. HUD/minimap phân biệt thời tiết với lịch hoạt động, tránh nhầm thời gian mưa với đếm ngược công thành. Quyền sở hữu W06 dùng chung trên realm, không tăng số mỏ vì đổi channel. GA01/GA02 dùng instance có ID trận để tách khỏi trạng thái bản đồ chung.

## 6. Bản đồ người chơi và bản đồ thiết kế

Lớp thếgiới hiển thị mườithành và các tuyến đãbiết; đánh dấu W06làchiếntrường40–60. Điểmtrụsởchỉdẫnchức năng, nhàbang/arena thuộc lớp hoạtđộng. Địađiểm chưa dựng hoặc chưa mở có nhãn đúngtrạngthái, không nútđichơigiả. Lớpbímậtphongấn không đưa vàominimap.

LớpW06hiện trạm, nguồn, pheowner, bangquảnlý, contestvàlịch; thêm kýhiệu/text chứkhôngchỉđỏ/xanh. Tách thôngtin côngkhai với thôngtin trinh sát: không làm lộ realtimevịtríđịch/kiện/vậtẩn chỉvì xemmap. Quyền chia sẻ ping/đánh dấu cầnFACTION-11, chưa chốt một radar toàntri.

Bảnvẽ nội bộ cần overlaybiênbảohộ, va chạm/nước/caođộ, đườngtiếp cận, sectorPvE/PvP, điểmNPC, đườngvậnchuyển, điểmspawn/return và scopeinstance. Phải dùng cùngIDgiữa map/cốttruyện/ownership, không đổitên sáuđiểm giữa các hồsơ mà không có bảngalias.

## 7. Bảng thay thế các mô tả cũ

| Mô tả cũ | Mô tả hiện hành |
|---|---|
| Bảnđầuchỉ có5vùng,15× | LõiPvEgiữ5vùng/15×; bổsungW06/6× thành6vùng/21×ngoàitrời; bảnđồchứcnăng tínhriêng |
| Không có map46–60 | Không thêm vùngtruyện46–60; cóW06tranhchấpcấp40–60 |
| Chưa mởPvP | GiữPvEtrunglậpV01…05; mởtheothiếtkếW06vàmatcharena, chưa triểnkhai |
| MAP-04đãxonghồsơnămvùng | Chỉ nămvùngPvEcũ cóhồsơ184; W06/FM/GM/GA mới cóbrief, chưahoànthiệntaskchitiết |
| 82NPC/90quái làtoàn bộngânsáchmọimap | Làlõi nămPvE; nội dungmớidựtoánriêngFACTION-12 |
| V06PvEhoặcmapcấp46–60mới | DùngIDW06, khôngtựđổithànhV06hoặcđặttêntiertrangbị60 |

Checklistkhôngtăngthêm vìđâylàđồngbộ, khôngthêmngânsáchassetgiả. Giữ525mục:119hoànthiệnhồsơ/11mộtphần/395chưathiếtkế. MAP-01cònmộtphần; FACTION-03…12/MAP-06/07/08vẫnmở. Cầnvẽ bảnđồthamchiếu cólayerphe vàW06trướclayoutchiếntrường; chưaảnhmới/code/schema/runtime.

Nguồn: [khung phe186](186_FACTION_01_HAI_PHE_BANG_HOI_VA_CHIEN_TRUONG.md), [địa lý185](185_MAP_01_DIA_LY_ELARION_VA_MANG_DUONG.md), [hồ sơ vùng184](184_MAP_04_HO_SO_NAM_VUNG_THE_GIOI_MO.md), [thời tiết181](181_MAP_10_THOI_GIAN_THOI_TIET_HE_SINH_THAI.md), [phạm vi15](15_PROD_06_PHAM_VI_VA_NGAN_SACH.md).
