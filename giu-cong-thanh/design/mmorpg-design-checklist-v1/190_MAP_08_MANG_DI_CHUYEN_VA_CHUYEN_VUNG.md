> **Điểm chuyển và đường về:** [MAP-03 hiện hành195](195_MAP_03_BIEN_KHU_VUC_DIEM_DEN_VA_DUONG_QUAY_LAI.md) cụ thể hóa arrival/return/fallback, mất quyền và sự cố sau commit. Không thay combatlock/transfer policy, chưa runtime.

> **Rà soát sâu r002 ·22/10/2026:** [Phân tích và quyết định193](193_RA_SOAT_SAU_MAP_07_09_R002.md) bổ sung scope hồi sinh, quyền dịch vụ, transfer và thông tin bản đồ. Các quy tắc r002 thay điểm mơ hồ của r001; chưa runtime/vẽ.

# MAP-08 — Mạng di chuyển và chuyển vùng

Ngày22/10/2026. Hoàn thiện thiết kế mạng chức năng, chưa bản đồ vẽ, code pathfinding/portal hoặc sản xuất phương tiện. GiữWASD+con trỏ, thế giới2.5D và luật thú cưỡi34. Không sửa thủ thành.

## 1. Sáu cách di chuyển có vai trò riêng

| Cách | Vai trò | Điều kiện và giới hạn |
|---|---|---|
| Đi bộ/chạy | Khám phá, combat và mọi tuyến truyện bắt buộc | Đường đất/cầu/bãi lội hợp lệ; không mặc định nhảy vách/bơi |
| Thú cưỡi | Rút ngắn đoạn đường đã có | Theo quyền mount; không vượt nước sâu/vách hoặc đổi map miễnphí |
| Đò/thuyền dịch vụ | Qua luồngsông hoặc hải trình cóbến | Mua/chấpnhậnchuyến khiđủđiềukiện, không bắt tựlái hoặc sởhữutàu |
| Đoàn vận chuyển/điều vận | Nối sector xa chưa dựng liềnmạch; đưa tớiW06 | Cóđiểmđến/luật rõ, không tựtạo bảnđồhànhlangngoàingânsách |
| Điểm dịch chuyển cố định | Quay lại mạng đã khám phá | Nhân vật đã tới và đăng ký riêng từng đầu bằng đường bộ/đò/đoàn vận chuyển; tuyến phép còn cần nguồn ổn định theo185. Không cần dùng warp để mở warp, không mở hộ từ account |
| Đường tắt địa hình/truyện | Thưởngquan sát vàkhôiphụchạtầng | Lốiđihợplệ, khôngclimb/wallskip hoặc shortcutPKbắtbuộc |

Không có teleporttựdo tớibạn/đội/boss, autopathchơi hộ hoặc kỹnăngbaythếgiới tạiMAP-08. Hướngdẫnđường là tùy chọnthôngtin, khôngtựđánh/né/nhặt.

## 2. Các tuyến được phục vụ

IX↔IVđườngHoàngGia dùngđườngbộ/đoàncứutrợ; IV↔VhànhhươngquaTroTrắng; IV↔II↔IIItheoRễCổ; III↔IquaĐèoXương; IV↔VIđườngxe/sônghạlưu; IX↔VII↔VIIItheoVọngLinh; VI↔đảocổ↔XquaHảiĐăng. Giữràngbuộcđịalý185, không tạomộtcổngnốimọithànhmàkhôngđiđầutiên.

V02cóhơnmộtsectorhànhtrình, V03cóhainhánhquayquađầumốiValedorn, V04đi từvùngtrũnglêncao. Chuyếnchuyểnsectorphải hiện nơiđi/nơiđến vàđoạnđườngđượcđạidiện; không ghép haiđịadanhxa vào mộtngãba. Mứcđộliềnmạch/màntảisauchốtengine/scene, khônghứastreamingchưakiểm.

FM01nối đườngtrunglập vàchuyếnquânvụ tớiW06. GM01vàoquaquyềnbang; GA01/02vàoquatrọngtài/đăngký. Kýhiệucổng hoạtđộng khácdịchchuyểnđịalý. Vềlạisảnh/nhàbang khôngđượcdùngláchcombat/kiện.

## 3. Mở đường mà không khóa cốt truyện solo

Lầnđầutiên đi qua mốcđịalý hoặc chuyếnhànhtrìnhbắtbuộc cóbảolãnhquest; khôngphảiđóngtiềnnạp/guildthuế hoặc chờmộtngườikhácvận hành. Nếuđườngxeđứt, cólốibộ/đoànđưangười; đèo cầnngườidẫn cótuyếnsolo; tuyếnbiển cóhoa tiêuNPC, không cầnguildcótàu.

Mởnút nhanh bằngphát hiện+đăngký tươngtác, khôngchỉghé ảnhbảnđồ. Nútđãbiết nhưngquyềntruy cậpđãmất (đổiphe/ránguild/eventđóng)không dùngđược. Quan hệmởđườngthếgiới vàcheckpointtruyện táchriêng đểkhôngcoiđãđixalàđãxongquest.

Phíđithườngnếuđược kinhtếduyệt phải cóquote, loại tiềngameplay vàđiểmđếntrướcxácnhận; địnhmứcchưacóthìgiữcấuhình“chưapháthành”, khôngđiềnsốngẫunhiên. Không thu hai lần vì retry. Dịchvụlỗitrướccamkết khôngmấtvé; saucommitphảiđốisoáttransferreceipt chứkhônghoàntiềnvàvẫnđiđểnhânlợiích.

## 4. Thú cưỡi và mặt đất

KỵSĩvàbanhánh dùngkỹnăngnghềtrênngựa theoluật34/186; xuốngngựalà trạngtháikhôngđủđiềukiệncastnghề, khôngâmthầmđổikit. Nghềkhác cưỡiđểđilại, combatmounttheoluậthiệnhành. Cánhngựakhôngcấpquyềnbayquađèo/sôngsâu hoặc đánhxa ngoài skill.

Mộtđườngbắtbuộc phảiđủchosprite/colliderngườivàngựađãchốt; chỗhẹp cầnđiểmxuốngngựahợplệtrướccửa. Nếuđó làđườngcombatbắtbuộccủaKỵSĩ thìphảithiếtkếlạikhônggian, khôngépxuốngrồibắtđánhkhôngskill. Chuyểnsceneghi trạngtháimount, kiểmđiểmđếnđủchỗ; khôngspawnngựaxuyêntường.

Ba race cùngquyềnquađường. NgườiLùn khôngmấtbãilộivìthấp; thânngựalớn khôngbướcsâuhơnnước. Lướt/knockbackkhônglàvéquađịahìnhcấm. Mưa/sương khôngtựđóngcầuchính hoặcquăngngườixuốngsông; biếncốhạtầngchungphảicóđườngthaythế.

## 5. Một lần chuyển vùng có kiểm soát

Chuỗi: chọnđiểmđến→xemđiềukiện/giá/cảnhbáo→xácnhận→serverkiểmcombat/quyền/kiện→preparetransfer→commit→đặttạisurfacehợplệ→trảreceipt. Thayđổigiá/quyềntrướccamkết cầnxácnhậnlại, khôngtựthuđắt hơn.

Giữcombatlock10s vàlifecycle111; chuyểncưỡngbứcdoquest/chếtchỉqualýdoallowlist. Thoátapptrongtransferkhôngsinhhainhânvật; reconnecttheotransferIdvềmiềnđãcommit. Cooldown/buffdeadline/petkhôngresetvìnhảysector. Quanhcửacóvùngchuẩnbị, khôngspawnvàoboss/tầngsai/nướcsâu. Điểmđếnđóngdùngfallbackquyđịnh189, khôngchuyểnđếnpheđịch.

Kháchduquanquasảnh/nhàbang khôngthànhđiểmdịchchuyểnboss. KiệnW06khôngrờiscopebằngvéđò hoặcqueuearena; khilỗikhôngmấtđồtúicánhân. ThứtựchitiếtchuyểnkiệnthuộcFACTION-05, chưadựngserver.

## 6. Giao diện và bàn giao

Giao diện tuyếnhiệnloạidi chuyển, điểmđến, quyền, phí/vé, độkhó vàluậtPK. Thuyềncó lịchthực nếuđượcthiếtkế, khôngđồngnhấtvớithờitiếtgiờgame. Chuyếnquestchính khôngkhóavìngườichơionlinesaigiờ. Bảnđồvẽnútđếnchưa biết nhưngkhôngchophépnhảyđếnsớm; chi tiếtfog theo191.

Cầnbàn giao nodeID/edgeID, phươngtiện, haiđầunối, luậtquyền, checkpointđến/dựphòng, surface, chuyểnmount, nguồnquote, transferreason vàđịadanhhiểnthị. Tọađộ/độdàiđường/thờigianthực tếchờbảnvẽ; chưatựđặttốcđộdi chuyểnhoặcchiphíđể“cânbằng”.

Test sau: đồthịcótuyếnsolođầyđủ; khôngxuyênW06bắtbuộc; retry/DCkhôngdupe/thuđúp; ngựakhôngkẹtcửa; hai tầngkhôngnhầm; vémấtquyềnđượcbáolýdo; ngườiđốiphekhôngspawntrạmsai. Chưakếtquảruntime.

MAP-08hoànthiệnhồsơ, chưathayMAP-01/03vàFACTION-04/05. Nguồn: [185](185_MAP_01_DIA_LY_ELARION_VA_MANG_DUONG.md), [187](187_MAP_DONG_BO_PHE_BANG_HOI_VA_W06.md), [188](188_MAP_06_PHAN_LOP_KHU_VUC_VA_QUYEN_GIAO_TRANH.md), [189](189_MAP_07_HOI_SINH_NOI_NGHI_VA_DICH_VU.md), [34](34_KY_SI_CHIEN_DAU_TREN_NGUA.md), [111](111_COMBAT_14_DISCONNECT_CHUYEN_VUNG_VA_DOI_DO.md).


## Bổ sung r002 — mở tuyến và cam kết hành trình

Đã biết nút, đã tới nút, đã đăng ký nút và cạnh dịch chuyển đang hoạt động là các trạng thái khác nhau. Tuyến điều vận lần đầu vàoW06 có quyền vào từ quân vụ, không yêu cầu đã đứng trongW06 để mở đầu đến; ngoại lệ này không mở warp tự do cho mọi nơi.

Intent/quote-hold/transferId/receipt phải liên kết để một hành trình có một kết quả actor và một lần chi. Timeout cần đối soát trạng thái thật, không vừa refund vừa hoàn tất chuyến hoặc spawn hai actor. Đây là yêu cầu nghiệp vụ, chưa lựa giao thức giao dịch mạng; NET/DATA phải chứng minh khi triển khai.

Tuyến Kỵ Sĩ kiểm cả hành lang/cửa/cầu/góc quay/checkpoint đủ gọi ngựa. Nội thất hòa bình có thể yêu cầu xuống, nhưng phần combat bắt buộc phải cho ngựa chiến; không ép đánh thường để bù mất skill. Không tự hồi buff/mount khi respawn. Chi tiết và ma trận rủi ro theo193, chưa greybox.
