# Rà soát mở vùng, thế giới mở và đất ẩn · r003

Ngày 22/10/2026. Phân tích thiết kế theo yêu cầu chủ dự án; chưa vẽ, sửa game, schema hoặc chạy test. Các quyết định dưới đây làm rõ202, không tăng số task hoặc cap60. Những ví dụ là đọc diễn trên giấy, không kết quả kiểm thử runtime.

## 1. Điểm phải sửa: cấp khuyến nghị không thể đồng thời là mọi cổng vào

Ẩn Thành được định hướng thế giới mở. Nếu V03 cấp21–30 luôn chặn người cấp10 ở đường dân cư thì màu bản đồ vô tình biến thành cơ chế khóa thế giới. Nhưng nếu chỉ đủ cấp là tô màu cả vùng, tiến trình mở đường và khám phá lại mất ý nghĩa.

**Quyết định r003:** năm vùngPvE dùng cấp khuyến nghị để hướng độ khó, không có một điều kiện level chung chặn mọi đường đi. Các cổng truyện/địa hình riêng vẫn kiểm đúng điều kiện; không cho vượt cầu chưa có, nước sâu hoặc cảnh riêng chưa mở. W06 là hoạt độngPvP có điều kiện thực cấp40+/phe/hướng dẫn, không áp ngoại lệ khám phá sớm.

Màu vẫn theo yêu cầu: vùng chưa mở xám; vùng đã mở có màu. Với nămPvE có hai cách được ghi nhận mở phạm vi địa lý:

- Hoàn thành sự kiện truyện/đăng ký tuyến phù hợp.
- Tự tới **điểm tiếp nhận hoặc mốc khám phá hợp lệ** trong vùng theo lối mở, được server xác nhận.

Camera nhìn sang bờ bên kia, đứng ở một polygon vẽ nhầm, ping của bạn hoặc yêu cầu tọa độ từclient không cấp quyền. Người tới sớm được cảnh báo độ khó và ghi nhận đường đã tới, không nhận miễn thương hoặc cân quái xuống cấp mình.

Ví dụ: cấp10 chưa từng tớiV03 vẫn thấy vùng21–30xám đúng yêu cầu. Nếu tự đi được tới người dẫn đường ở biên rừng, vùng được ghi nhận và có màu; quest cấp/nghề chưa đủ vẫn khóa riêng, không tự mở dungeon, warp hoặc đầu mối bí mật. Đây là ngoại lệ khám phá chủ động, không sửa mốc khuyến nghị21–30.

## 2. Ba tầng hiển thị tránh tô màu gây hiểu nhầm

**Màu nền vùng:** cho biết đã mở phạm vi địa lý, không công bố mọi thứ bên trong. **Chi tiết khám phá:** đường/POI/surface đã biết, giữ fog hoặc mức thông tin phù hợp. **Biểu tượng hành động:** phản ánh hiện tại có dùng được không.

Nếu một khu đã mở nhưng đang combat, giữ màu và khóa hành động chuyển. Nếu chưa tới một ngách dungeon trong khu có màu, ngách đó vẫn chưa biết. Không dùng việc làm cả khu xám trở lại để báo một chuyến đò ngừng, vì người chơi sẽ hiểu là mất tiến trình.

Đổi phe giữ tri thức địa lý và mở vùng đã có. Quyền vào trụ sở cũ, trạmW06 và marker chiến thuật đổi theo membership. Trụ sở đối phe có thể vẫn là địa điểm đã biết trên map, nhưng nút vào bị khóa; không xóa kiến thức khỏi nhân vật để làm sạch quyền.

## 3. Thứ tự xét khi người chơi bấm một vùng

| Bước | Câu hỏi | Kết quả |
|---|---|---|
| 1 | Vùng đã được phát hành ởserver này chưa? | Chưa thì không có hành trình đi; chỉ giới thiệu được phép biết |
| 2 | Người xem được biết tên/thông tin nào? | Hiện đúng bản công khai/đã học, không dùng lý do khóa để lộ bí mật |
| 3 | Đã mở phạm vi địa lý chưa? | Chưa thì xám và có đầu mối hợp lệ, không tự cấp quyền vì click |
| 4 | Định đi bằng cách nào? | Đi bộ, thuyền, warp, queuearena có điều kiện khác nhau |
| 5 | Đủ quyền hiện tại và đích hợp lệ không? | Kiểm combat/kiện/phe/run, checkpoint/arrival, phí/vé nếu có |
| 6 | Giao dịch hành trình đã được xác nhận chưa? | Preview rồicommit theo195/193; không tự thu tiền để thử quyền |

Đây là thứ tự giải thích UI/nghiệp vụ, không quy định một hàm server duy nhất hoặc bỏ kiểm lại quyền lúc hit/commit. Chỉ xem địa điểm không làm người chơi bắt đầu chạy hoặc teleport.

## 4. Sửa định danh grant để không mất quyền mỗi bản cập nhật

202 ghi granttheocharacter+realm+regionId+revision dễ bị hiểu rằng mỗirevision tạo một quyền khác. Khi thayảnh hoặc tên vùng, người chơi có thể bị coi là chưa mở hoặc nhận thưởngmởlạinếu dùng khóa đó trực tiếp.

**Chốt r003:** định danh quyền ổn định theo characterId+realmId+regionId. Revision là thuộc tính của rule/content lúc cấp; không phải yếu tố tự reset quyền. Sự kiện cấp cósourceEventId/receipt đểretrykhông cấp hai lần. Đây là hợp đồng nghiệp vụ, chưa schemaPostgreSQL.

Tách quyền địa lý, cạnh hành trình, checkpoint và queststate. Di chuyểnPOIđổianchor không đổiidentity; gộp/tách sector cần bảngmapping được duyệt. Không dùngmỗi lần đăng nhập hoặc versionclientlàm lần khám phá mới.

Quà mở vùng nếu được thiết kế sau này phải córewardDefinition/claimscope riêng. Hiệnkhông tự cấpquà hoặcXPchokhi tômàu; tránh tạo nguồn farmaccountalt khi chưa cóCAP/LOOT.

## 5. Nhân vật phụ: giảm nhầm lẫn, không mở hộ mọi tiến trình

Nhân vậtB có thể bật bảnthamkhảo côngkhai từaccount đểđịnhhướng. B chưa cógrant/checkpoint/warp/quest chỉvìAđãlàm. Đếnđịađiểmhợplệ thìBđượcghi nhận theo cùngluật khámphá, khôngphảitheolạimọicuộchộithoại phụ để được quyềnđứng ởthànhtrunglập.

Không trộn víaccountchung với quyềnnhânvật: cótiềncủaAkhôngtức Bđãđimởwarp, vàBđãtớimộtmapkhôngcho nhậnlạiphầnthưởngaccount đãclaim. Xóa/tạochar khôngresetcapaccount hoặcchuỗiquàkhóaaccount.

Các cách rút ngắnintro/nhớlựachọn hoặcskipnghi thức choalt cầnQUEST/ACCchốt sau; chưa tự mởboosttrảphí hoặcskipnghề. Kịchbản bắtbuộcsolo vẫnđủ đường cho người chơi mới hoàn toàn.

## 6. “Đất ẩn” phải phân biệt với “bí mật chưa được phép gửi client”

Theo bảnvẽr002,10vùngđấtẩn đã cóhìnhđịalývàtên đểchủdựánduyệt. Hiểu đúng là **đất dự phòng chưa mở nội dung**; không thểkhẳngđịnh hìnhđịalý làbímật nếu cảảnhworldmapđãđượcgửivàoclient.

Cóthể côngkhaiđịadanh/thảolục mờ đểtạotòmò, còn cửavào, NPC, tuyếnẩn, thờiđiểm vàmanhmốitrọngyếu khônggửi khichưacóquyền. Nếu thật sựcầnche hìnhdángmộtđảo thì phảicóasset/viewkhác khôngchứa phầnấy; CSSxámkhônglàcơchếbảomật.

Khôngđặtđếmngượcgiảhoặccấp61+/dungeonkhóavìchưalàm. Nhãn“Chưa phát hành”khác“Cần cấpX”; ngườiđạt60khôngbịhướngdẫnfarmvôíchđểvàovùngchưa tồn tại.

## 7. Mười vùng cần khác vai trò truyện, không chỉ khác màu

| Vùng | Trọng tâm riêng | Cần tránh lặp |
|---|---|---|
| H01 Hàn Uyên | Trách nhiệm cứu đoàn mất liên lạc và gìn giữ ghi chép | Không làm lạiVươngMiệnBăngGiá bằng thêm tuyết |
| H02 Thiên Thạch | Vật liệu va chạm, khai thác và kiểm chứng nguy cơ | Không trùngH09thành hai vùng cùngđọc lịch sao |
| H03 Mộng Nguyệt | Độ tin cậy của ký ức lưu và quyền được nghe lời chứng | Không dùngkýức làm câu trả lời đúng tuyệt đối |
| H04 Sương Bạc | Định hướng/hải đồ mất tuyến và cộng đồng sống giữa đảo | Không lặp cứu trợ khoMerrowen hoặc chặn tuyếnHảiĐăngcũ |
| H05 Cự Thú | Di cư, không gian sống và quan hệ người–sinh vật | Không coi tất cả xương cổ làboss sắp hồi sinh |
| H06 Hắc Liên | Bảo vệ người sống ở nơi bị mang tiếng ô nhiễm | Không lặp Nocthollow chỉ bằngnghĩađịa/undead |
| H07 Lưu Ly | Quyền sử dụng mỏ, nguồn nước và thương mại | Không chỉ đổi màu sa mạcSahrKareth |
| H08 Hỏa Tâm | Trách nhiệm vận hành cơ chế nhiệt và hậu quả sửa sai | Không dùnglavaDoTđể thaycho mọi cơchế/cố truyện |
| H09 Tinh Sa | Dòng chảy khoáng/năng lượng theo chu kỳ, cách đo và cách hiểu | Khác vậtliệu va chạmH02; không tự làcửaVựcRỗng |
| H10 Vân Mộc | Ai cóquyền giữ, diễn giải và chia sẻ di sản côngtrình | Khác kýứcH03và tranhchấpkhai thácSylvaris |

Mỗi vùngtươnglai cần mộtcâuhỏiđịaphương giảiđược trongvùng, mộtliênhệ tớiElarion vàmộtphầnkhônggiảiquyếtngay. Khôngbắt mọi vùngphải chứa mảnhphongấn hoặcngườicha để tạocảmgiácquantrọng. Nhânvậtcóđộngcơkhámphá vìcộngđồng/côngviệc/cá nhân, không phải vìđượcđịnhmệnh chọn.

## 8. Định hướng nội dung, không tự tăng sức mạnh

Giữcap60 vàtiergearđãduyệt củađợthiệntại; khôngsuy từ“mapmới”ra“đồchỉsốcaohơn”. Khi duyệtmởrộng cóthể ưu tiên chuyệnmới, chiếnthuật/boss, ngoại hình, sưu tập hoặc tiệníchhợplệ; mọi sức mạnh mới vẫn quaSTAT/GEAR/CAP.

Khôngchốt10vùngđềucùngcấp45–60đểláchchưaquyếtđịnh. Cấp/độkhó/ngân sách là đầu vào cần duyệt riêng. Chỉhứa giátrịkhámphá/cốttruyện tại mứcýtưởng, chưa hứa đủnguồnphầnthưởngđểfarmdài hạn.

Đườngvào vùngmớikhôngyêucầubanghạng1sởhữucứđiểm hoặcphải thắngPK. CóthểcónộidungPvPriêngsauchốt, nhưngtruyệnchínhvàcáclời hứa solo khôngmấtđườnghoànthành. Khôngmặcnhiênbiến10vùngthànhđấucủahai phe trước hồsơlore.

## 9. Mở một vùng tương lai là một quy trình, không một nútavailable

Thứtựbàn giao: hồsơđịalý/cốttruyện → tuyếnvào/về vàđiểmtiếpnhận → NPC/quest → encounter/quái → item/kinhtế → asset/camera → rules/data → dựngthử → kiểmsolo/multiplayer → phêduyệtpháthành. Không bắtphảilàm xong cả10vùng trước mởmộtvùng độc lập.

PháthànhH04khôngtựmởH07dùcùngnhómbiển. Nhânvậtcũđượcthôngbáo vàcáchhọcthêmđầumối, khôngresettruyện hoặcđổitênmãvùngđãcó. Nếu mộtvùngtạmđóng, giữknowledge/grant/claim vàđưa ngườichơi rakhỏiphầnđangbảotrìtheo195; khôngrefund/cấp lạiquàtựđộng.

Lịchra mắt phải dựatrên ngân sách vàkiểmthử, khônglấykíchthướcđảo trênảnhlàm sốthángpháttriển. Mười vùngdựphòng làkhônggiansángtác, khôngmười camkếtpháthànhđồngthời.

## 10. Các ca đọc diễn để rà thiết kế

| Ca | Kết quả cần giữ |
|---|---|
| Cấp10chưatớiV03 | V03xám, dảikhuyếnnghị21–30, cóđầumốinếubiết |
| Cấp10tựtớiđiểmtiếpnhậnV03theolốimở | Ghi nhậnđịalý; cảnhbáođộkhó; khôngskipquest/checkpoint/warp |
| Cấp30chưađủquestvàchưatới | Khôngtômàu chỉvìlevel; chỉđúngbướctiếptheokhônglộspoiler |
| ĐãmởV04, đangcombatmuốndịchchuyển | Giữmàu, chặnhànhđộng vàhiệnlýdo |
| ĐãtớiW06rồiđangchuyển/thiếuphehợplệ | Giữkiếnthức; khóađi theoquyềnhiện tại, khôngđượctớitrạmsai |
| Nhânvậtaltxembảnthamkhảoaccount | Biếttuyếncôngkhai, không tựgrant/warp/claim |
| Cấp60clickH01chưapháthành | Xám/chưapháthành, khôngphí/teleport/questbắtbuộc |
| Patchchỉđổiảnh hoặc tênH01 | Quyềnổnđịnh theoID, khôngreset/grantquàlại |
| H04pháthànhcònH07chưapháthành | ChỉH04cóchuỗimởhợplệ, khôngmởnhómhàngloạt |
| Đóngvùngđểbảotrì | Ngừngchuyếnmới, return/fallbackhợplệ, giữnguyêndữliệuđãcamkết |

Đây là ca thiết kế, chưa test thực tế. Cần chạy runtime và kiểm đường/camera khi dựng, không lấy bảng này làm kết quảQA.

## 11. Trạng thái hồ sơ

203 chốt thêm cách giữthếgiớimở, identitygrant vàgiớihạnbímậtasset; cậpnhậtquytắc202. Bảnxemr002vẫnlàmôphỏnglevel/story/faction, chưadiễnkhámphásớm hoặcgrantlưubền. Chưa thayJavaScriptthànhgameplay/backend hoặc tạoảnhmới.

Tổng525taskgiữ **127hoànthiện /11mộtphần /387chưathiếtkế**. MAP-01cònmộtphần, cácgóiFACTION/QUEST/DATA/LOOTcònđúngphạmvi. Tiếptục cần kiểmđịalý/tỷlệvàlayout hoặcpháttriểnhồsơ vùngđượclựa chọn, khôngtựxâytấtcả10vùng.

Nguồn: [mởvùng202](202_MAP_MO_VUNG_TRANG_THAI_VA_HUONG_KHAM_PHA_DAT_AN.md), [bảnxem201](201_MAP_01_MUOI_DAT_AN_VA_MAU_THEO_TIEN_TRINH_R002.md), [lớp194](194_MAP_02_CAU_TRUC_LOP_BAN_DO_VA_QUYEN_THONG_TIN.md), [biên195](195_MAP_03_BIEN_KHU_VUC_DIEM_DEN_VA_DUONG_QUAY_LAI.md), [phạmvi15](15_PROD_06_PHAM_VI_VA_NGAN_SACH.md), [cấp60](91_CAP_60_NOI_DUNG_45_VA_XP_HAU_TRUYEN.md).
