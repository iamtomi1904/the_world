# MAP-11 — Vật thể tương tác và vòng đời

Ngày22/10/2026. Hoàn thiện thiết kế mô tả, chưa vẽ sprite, animation, collision, UI hoặc code. MMORPGẨnThành pixel2.5D, giữWASD/con trỏ, tương tácF vàhotbar13ô. Không sửa thủ thành. [Nguồn tham khảo197](197_THAM_KHAO_VAT_THE_TUONG_TAC_VA_GIOI_HAN.md); các luật cụ thể dưới đây là quyết định riêng.

## 1. Bốn nhóm quyền

**Trang trí:** cây, đá, đồ nghề không có hành động; không đặt promptFgiả. **Tương tác cá nhân:** đọc bia, kiểm vật chứng, đăng ký mốc; tiến trình theo người. **Cơ cấu encounter:** cửa, cần gạt, bàn điều khiển thuộc run/scene; ảnh hưởng người cùngscope. **Kinh tế/quyền lực:** rương, node, kho, kiện, cứ điểm; cần quyền/receipt/ledger riêng, không chỉ đổi animation.

Một vật thể có thể có nhiều hành động nhưng mỗi hành động nêu rõ quyền và kết quả. Cây trang trí không mặc định chặt được; rương trang trí không giống hệt rương cóloot; cầu nhìnđiđược phải có collider/surface đúng.

## 2. Danh mục nhóm vật thể

| Nhóm | Trạng thái nhìn thấy | Hành động và quyền |
|---|---|---|
| Cửa thường | Đóng/mở/bị khóa/không hoạt động | Mở đúng quyền, không tự tiêu chìa; chiều mở không kẹt người/ngựa |
| Cửa boss | Chuẩn bị/đang khóa/kết thúc | Encounterserverquyết định; khôngFđể thoátcombat hoặc vào boss đangkhóa |
| Cần gạt/công tắc | Chưa gạt/đã gạt/khóa điều kiện | Có dấu liên hệ tới cơ cấu; nhiều người không đảo trạng thái liên tục |
| Bàn điều khiển | Tắt/sẵn sàng/đang xử lý/thành công/lỗi | Bắt đầu tác vụ cóscope, báo điều kiện; không tự chế lời giải bằng tiêu đồ ngẫu nhiên |
| Bệ áp lực/cơ cấu giữ | Rỗng/được kích hoạt/đã chốt | Truyệnsolo có thể chốt hoặc có phương án một người; không bắt summon/nghềriêng |
| Cầu/lối tắt sửa được | Chưa thông/đang xử lý/đã mở | Geometrythếgiớichung không đổi riêng tùy người ở cùngscene; cần phiênbản/cảnh riêng khi thật sự khác |
| Rương khám phá | Chưa biết/đã thấy/có thể mở/đã nhận | Quyền nhìn vàclaimtách biệt; scopeaccount/character theo định nghĩa loot |
| Rương encounter | Chờ kết quả/đủ điều kiện/đãclaim | GắnencounterId/eligibility, không dựa người đứng gần hoặc lastclick |
| Nodequặng/gỗ/thảo dược | Có nguồn/đang khai thác/cạn/chờ phục hồi | Loại côngcụ/quyền/nghề theo hệcraft; không chốt lượng/rate tạiMAP |
| Vật chứng/mẫu khảo sát | Chưa kiểm/đang kiểm/đã ghi nhận | Queststate/character; người khác lấy không làm mất manh mối bắtbuộc |
| Bia/sách/bảng hiệu | Có thể đọc/đã đọc/thông tin mới | Mở nội dung theo quyền, không coi đọcảnhlàxongquest hoặc mởwarp |
| Mốc đăng ký | Chưa đăngký/đã đăngký/mất quyền | Checkpointvàwarpđộc lập189/190; còn sống/ngoàicombat, không freeheal |
| Lửa trại/ghế/nghỉ | Có chỗ/đang dùng/không đủ điều kiện | Không tựbảohộ/hồisinh/regenmới; hiệuứnglửatrangtrí không gâyDoTngầm |
| Đò/cổng hành trình | Chưa đủ quyền/sẵn sàng/đang chuyển | Quotelộtrình/transfer195; khôngngầmmua vé hoặc mangkiệnraW06 |
| Bàn nghề/kho | Dùng được/đang tácvụ/không đủ quyền | UItheonghề/quỹ/kho; nơiở/ảnhvậtthể không quyếtđịnhquyềnsởhữu |
| Kiện quân nhu | Ởnguồn/đangmang/đãđặt/đãnộp/hếthiệu lực | ID/owner/scope/receiptduynhất; luậtchiếm/đánhcắp/rơi theoFACTION-05 |
| Cột cứ điểm | Owner/contest/cửasổquânvụ | Chỉdisplay/tươngtáchợp lệ; mộtlầnbấmFkhôngtựchốtowner |
| Cờ/bảng bang | Phe/bang/hạng/hiệulựckỳ | Hiểnthị entitlementserver; không tự cộngbuff mỗi lần chạyqua |
| Cơ cấu phá được | Nguyên/vỡ/đang táitạo nếu có | Chỉdamageabletheoencounter, riêngcollider/HP; thùngtrangtrí khôngngầmcóloot |
| Dấu môi trường | Vếtchân/nướcbẩn/đávỡ/dấuniêm | Quan sát/khảo sát khiquestcóquyền; không mọi dấu cần prompt hoặc tài nguyên |

Đây là20họ tương tác, không thêm20assetđãlàm hoặc20task. Mỗi họ có nhiều biến thể theo vùng nhưng dùng cùng hợp đồng quyền. Nội dung mỹthuật phải mới phù hợpMMORPG, không lấy bộassetthủthành làm mặc định.

## 3. Luồng tương tác nền

Ở gần vật hợp lệ, hiệntênhànhđộng+phímF/nútthaythế, có vùngfocus rõ. Nếu nhiềuvật gần nhau, ưu tiên vật đangđượcchọn/nhìn vàchophépđổiđích; khi bắt đầu hànhđộng thì khóaobjectId, không đổisangNPC/rươngkhácvìcamera dịch. Không tự đi tới mục tiêu qua vực hoặc xuyênvách.

Fchỉ gửi intent; serverkiểm khoảngcách/LoS/surface/trạngtháisống/combat/quyền/questvàrevisionvật. Saiđiềukiện trảlýdo, không chơianimationthànhcông giả. UIđangfocus/chat/IME thìkhôngphátFxuốngcảnh. Clickxácnhận khôngđồngthờiđánhthường, khôngdùngCtrl+clickshopcủathủthànhápvàoMMORPG.

Các thao tác nhanh đọc/quan sát có phản hồi ngay sau accept; tác vụ dài có thanh tiến trình và điều kiện ngắt. Thời gian/range/toolcost chưa xácđịnh dùngcấuhình, chưa tựđiềnsố. Giữchuộttấn côngkhôngtựmởrương hoặcđiềukhiểncầungay bêncạnh.

## 4. State machine và ảnh không quyết định kết quả

Mẫu chung: **không đủ điều kiện → sẵn sàng → yêu cầu được chấp nhận → đang thực hiện → cam kết kết quả → trình bày hoàn tất**. Nhánh bịngắt trướccommit về trạngtháihợplệ; nhánh mấtkếtnốisau commit trảreceipt, khôngchạyphần thưởng lần hai.

Tách trạngtháivật lý (cửamở), tiếntrình cá nhân (đãđọc), trạngtháithưởng (đãclaim) và stocknguồn (cạn). Có thể cửamởchungnhưngrươngmỗi ngườichưa nhận; không lấy animation “nắp đã mở”để từ chối mọi người khác.

Khôngluubằngtimerclient. State cóownerScope/run/season/worldrevision và expiry theo định nghĩa; logout/chuyểnchannelkhôngtựreset. Animation/VFXđược phát từ trạngtháiserver, khôngghiđèkếtquả nếu hìnhchưatảixong.

## 5. Nhiều người tương tác cùng lúc

| Loại | Chính sách thiết kế |
|---|---|
| Đọc bia/khảo sát quest | Nhiều người độc lập nếu questcho phép; không khóa vìngườikhácđangđọc |
| Rương có rewardriêng | Mỗi người kiểmclaimscope/eligibility; người đầu không lấy quyền của tấtcả |
| Stocktài nguyên chung | Serverquảnnguồn/reservation, kếtquảkhôngâm hoặcnhânđôi; sảnlượng/capchờcraft/kinhtế |
| Cơ cấu encounter | Một revisionchínhthức; requesttrùngtrả trạngtháiđãđạt, khôngtoggleliêntục |
| Cơ cấu có thao tác giữ | Nếu người giữ rời, có phương án reset/thaythế; tuyếntruyệnsolo không bắt người thứhai |
| Ownercứđiểm | Theo hệ contest/ownershipW06, khôngrequesttươngtáctựghiowner |

Tác vụkinhtếkhóa ngắn theoobject/nguồnchi/claim phùhợp; khôngkhóacảmapchovì mộtngườiđọcNPC. Leasehết cầnrelease/đốisoát, khôngđặttimeoutclientthànhtừchốivĩnhviễn. Chưađịnhnghĩa giao thức distributedtransaction; NET/DATAphải triểnkhai vàtest.

Nguồnquestbắtbuộckhôngbịthuhoạchcạn bởingườichơikhác; nguồntranhchấpW06cóthểhữuhạnnhưngkhônglàmanhmốichínhduynhất. KhôngtựlựachọnmọinodePvEđềucánhânhoặcđềuchungtrướchồsơnghề/kinhtế.

## 6. Ngắt, chi phí và nhận thưởng

Trướcacceptkhôngtốnđồ/phí. Sauaccept, thờiđiểmtiêuvật/feephảicóđịnhnghĩatácvụ, đặcbiệtcơcấudùngchìakhóa/đặtvật. Trướccamkếtnếubịngắtdođi/quyềnmất/đònđịch thìtheochínhsáchđãbáo; khôngbiếnmọitácvụthành“miễnchi phíđếnkhixong”hoặc“tốnngaykhibấm”.

Hànhđộngtiêuvậtphẩmmộtlầncầnpreviewrõ vàkiểmđúngiteminstance/binding. Khôngđủchỗnhậnlootthìphảicó luồngclaimpendinghoặc từchốitrướccommit theoITEM/LOOT, khôngrơixuốngđấtchongườikháclấymặc định. Khôngtựđặtmailvôhạnđểvượtgiớihạntúi.

Requestretrycùngintenttrảcùngkếtquả. Kho/quỹ/tiền/kiện córeceipt/auditlog; ngườimấtquyềnkhôngrútđượcđồvìđãmởUItrướcđó. Mởrươngkhôngđồngnghĩanhậnmọilootnếuhệđangchờngườichọnmộtmón.

Không đặt phầntrămrađồ, phí,côngcụtiêuthụhoặcthờigianhồiphục ởMAP-11 đểláchITEM/CAPchưachốt. Mọi quàquestchỉcấp đúngscopevàmộtlần.

## 7. Cơ cấu và câu đố theo vùng

**BìnhMinh:** kiểm vệtniêm/dấuchuông, gạtmộtcơcấuđểnghevận hànhvàthấycửabảodưỡngmở. Dạyquan hệnguyênnhân/kếtquả, khôngtimingphức tạp hoặcnguycơmấttiếntrình.

**Merrowen:** cầnvậncẩuhàng/bảngniêmcórấynốivàkhođích; ngườichơixácđịnhđúngkiệnhàngtừchứngtừ, khôngchỉđánhđểlấykey. Vậtbắtbuộcđượckiểmriêngngườilàmquest.

**Sylvaris:** cơcấudẫnnướcmộtphầntrongdi tích, rễ/đènphảnứngtheobướckiểmnguồn. KhôngchoHỏaPhápSưđốtchungrừnghoặcchỉPhápSưMộcmớiquaquest.

**Nocthollow:** bànđốichiếusổvàmẫudẫnđếncơcấuan toàntrongcơsởcũ. Dấucơcấugiúphiểuchứcnăngcôngtrình, khôngmộtlầnbấmxemtoànbộbí mật.

**Tiềntuyến:** đọcđoấn/đặtvậtliệuvàxácnhậnphươngántrongcảnhriêng. Đặtđúngmẫukhôngtựchọnkếtthúcđạođức; bướclựachọnlớncóxácnhậnriêngvàthôngtinđủ.

Các vídụlàýđồtrướcQUEST/BOSS, chưađốthoại/questscriptchốt. Cóphản hồinhìn/nghe vàgợiýtrongnhậtký; khôngchỉphânbiệtbằngmàuhoặcâm. Khôngbắtai cũngcóhọvũkhí/nguyêntốđặcbiệt; nếu dùngskilltươngtác thìcótác vụvậtthểtươngđươngchođườngsolo.

## 8. Hình ảnh, collider và chuyển trạng thái

Mỗi vật cần silhouette/profile riêng theo biome, pivot/anchor, surface, collider, interactionvolume và hướng tiếp cận. Vùngbấm/tươngtác cóthểkhácảnhnhưngphảitrựcquan; táncây/khoábóngkhôngchặnmụctiêuđúng.

Tối thiểu thểhiện idle/sẵnsàng, đangtươngtác, đãđổi trạngtháivàkhóanếucần; khôngvẽ mọi vậtphátnhấpsángliêntục. Dùngchuyểnđộngcơhọc/ánhđèngọn, màu/iconUIgiảithíchđủ. Lập tứcbiếtbấmFđanghướngtớivật nào, nhưng khônglộlốikínchưađượcpháthiện.

Đóngcửa/di chuyểncầukhôngnghiềnhoặckẹtngười/ngựa; kiểmoccupancyvàchohoãnthayđổihoặcdùngphươngán an toànđượcthiếtkế. Khôngteleportngườikhácquaváchđểchạyanimation. Tánrung/thờitiếtkhôngđổiquyềntươngtác hoặcstock.

## 9. Hợp đồng hồ sơ vật thể

Mỗi entrycầnobjectId/templateId, vai tròtruyện, loại/scopetrạngthái, hànhđộngchophép, điều kiện, hìnhthái, surface/anchor, interactionvolume/LoS, progress/cancelpolicy, thời điểmcommit/cost, reward/stockreference, reset/expiry, feedbackvàfallbackkhisựcố. MetadataarttheoART-04, gameplayquyền theoMAP-06, luồngquyền theoMAP-02.

BảnđồmộtnơicóchungIDgiữaPOI/quest/vậtthể, nhưng khônggộpngườichơithấyPOIvớiquyềnclaim. Cácvậtchỉđểđọctruyệnkhôngcầnkiếntrúckinhtếphứctạpcủakho; táisửdụnghợpđồngnhỏphùhợp, khôngmộtclasskhổnglồđiềukhiểnmọihệ.

## 10. Các kiểm cần làm sau khi dựng

KiểmFkhôngđánhnhầm; nhiềuobjectgầnnhaukhôngđổiđíchgiữachừng; LoS/tầngđúng; nhiềungườicùngmởrươngkhôngmấtreward; côngtắckhôngtoggleđua; cửakhôngkẹtngựa; fullbagkhôngmất loot; cost/retry/DCchỉmộtcommit; NPC/khođổiquyềnchặnrequestmới; maprevisiongiữstate; W06khôngcướpownerbằngclick; câuđốtruyệnsolođủcáchgiải.

Chưa có ảnh hoặc kếtquảtestgame. MAP-11hoànthiện hồsơ; khôngđóngITEM/LOOT/CRAFT/QUEST/FACTIONchi tiết. Tổng525mục: **127hoànthiện /11mộtphần /387chưa thiết kế**. NhómMAPcóhồsơchữ cho02…12; MAP-01cònmột phầnđợi bảnvẽ/kiểmđịalý. Bước kếtiếp là bảnvẽthamchiếu theo199, khôngtiếp tục sangvẽtronglầnnày.

Nguồn: [tham khảo197](197_THAM_KHAO_VAT_THE_TUONG_TAC_VA_GIOI_HAN.md), [input59](59_INPUT_01_DIEU_KHIEN_WEB_PC.md), [hotbar64](64_HOTBAR_13_O_KY_NANG_VAT_PHAM.md), [quyềnthưởng110](110_COMBAT_12_GHI_CONG_VA_QUYEN_THUONG.md), [ràsoát193](193_RA_SOAT_SAU_MAP_07_09_R002.md), [lớpbảnđồ194](194_MAP_02_CAU_TRUC_LOP_BAN_DO_VA_QUYEN_THONG_TIN.md), [chuyểnvùng195](195_MAP_03_BIEN_KHU_VUC_DIEM_DEN_VA_DUONG_QUAY_LAI.md), [nhịp196](196_MAP_05_NHIP_KHAM_PHA_MAT_DO_VA_MANG_DUONG.md).
