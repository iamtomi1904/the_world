> **Rà soát r003 ·22/10/2026:** [Thế giới mở, ID quyền và10đấtẩn203](203_RA_SOAT_MO_VUNG_THE_GIOI_MO_VA_DAT_AN_R003.md) làm rõ cấp khuyến nghịPvE/khám phá sớm khác gateW06, grantổnđịnh và assetẩn không phải bảo mậtCSS. Sửa202; r002vẫn prototypelevel. Giữ525task:127hoànthiện/11mộtphần/387chưathiếtkế. Không ảnh/codegame/SQL.

> **Thiết kế mở vùng ·22/10/2026:** [Trạng thái vùng và10tuyến khám phá dự phòng202](202_MAP_MO_VUNG_TRANG_THAI_VA_HUONG_KHAM_PHA_DAT_AN.md) tách phát hành/knowledge/grant/quyền đi hiện tại. Vùng đã mở giữ màu khi tạm bị chặn; bản xemr002chỉ mô phỏng, chưa diễn đủ state/backend. Giữ525mục:127hoànthiện/11mộtphần/387chưathiếtkế; không ảnh mới/gamecode.

> **Thế giới r002 ·22/10/2026:** [Tên từng khu,10đấtẩn và màu theo tiến trình](201_MAP_01_MUOI_DAT_AN_VA_MAU_THEO_TIEN_TRINH_R002.md); [bản xem](/design-preview/elarion-map-r002/index.html). Vùng mở có màu/chưa mở xám; cấp10thấyV03xám; đấtẩn chưa phát hành không tự mở ở60. Giữ6vùng hiện tại và525task:127hoànthiện/11mộtphần/387chưathiếtkế. Chưa kết nối game/backend.

> **Cấu trúc lớp bản đồ:** [MAP-02 hiện hành194](194_MAP_02_CAU_TRUC_LOP_BAN_DO_VA_QUYEN_THONG_TIN.md) tách địa lý/người chơi/vận hành và quyền thông tin. MAP-09giữ discovery/claimscope r002; không dùng masterspoiler làmmapclient.

> **Rà soát sâu r002 ·22/10/2026:** [Phân tích và quyết định193](193_RA_SOAT_SAU_MAP_07_09_R002.md) bổ sung scope hồi sinh, quyền dịch vụ, transfer và thông tin bản đồ. Các quy tắc r002 thay điểm mơ hồ của r001; chưa runtime/vẽ.

# MAP-09 — Khám phá, sương bản đồ và chia sẻ thông tin

Ngày22/10/2026. Hoàn thiện thiết kế, chưa vẽ UI/map hoặccode. Dành choMMORPGpixel2.5D, giữ13ôhotbar vàWASD. Khôngsửathủthành.

## 1. Ba lớp bản đồ, ba loại dữ liệu

**Bảnđồ thếgiới** thểhiệnquan hệđịalývàtuyếnđãbiết; **bảnđồ vùng/minimap** phục vụđườngđi, NPC vàtươngtác; **overlayhoạtđộng** thểhiệnW06/GA/quest theoquyền. Bảnđồnộibộthiếtkếcóspoiler/volume khôngđưathẳngchoclient. Lớpchiếntrường khôngghivào bảnđồkhámphácánhânnhưthôngtinbiếtvĩnhviễn.

Sươngbảnđồ làtrạngtháithôngtin, khôngphải sươngmùthờitiết. Trờisươngkhônglàmquênđường; khámphábảnđồkhôngxóasươngtrongcảnhđểthấyđịchxahơn.

## 2. Khám phá theo nhân vật và account

| Dữ liệu | Phạm vi | Không được suy ra |
|---|---|---|
| Ô/sectorđãđặtchântới, NPCđãgặp | Nhânvật+realm | Xemảnhmapkhôngtínhtớiđịađiểm |
| Điểmdịchchuyển/checkpointđăngký | Nhânvật+scope | Nhânvậtkhácđãmởkhôngtựđượcdùng |
| Lịchsửquest/rương/manhmối | Theoquyềnquest/loothiệnhành | Tômapkhônghoànthànhquesthaynhậnrương |
| Bảnđồthamkhảocủaaccount | Account+realm,tùychọnbật | Chỉgợiýđịadanhcôngkhai, khôngmởwarp/credit/địđiểmbímật |
| Ghimcánhân | Nhânvật,serverlưubềnbỉ | Khôngcóquyềnchuyểnthànhmarkerchung |
| Pingparty | Party+scope,cóthờihạn | Khôngmởfoghoặcquestcủađồngđội |
| Markerquânvụbang/phe | Guild/phe/mùa/scope,cóquyềnghi | Khônghiệnrealtimeđịchhoặcnguồnbímật |

Ba trạngtháicảnhbảnđồ: **chưakhámphá** (khốivùngchung), **biếtqua thôngtin** (nétthamkhảomờ), **đãkhámphá** (chi tiếtđườngđượcphéphiện). Thành/lớnđịadanhđượccôngbố cóthểbiếtquaNPC/bảnđồmuavề, khôngbắttuỳtiệnlàmđenhếtthếgiới. Tênmạngphongấnbímậtẩnđếnkhiquestcấpthôngtin.

Vùngđãthấybênkiavách hoặcbiểnkhôngđồngnghĩađãđiđược; mởfogtheovisibility/sectorpolicyvàsựkiệnkhámpháserver, khôngchỉbánkínhcamera. Tinhchỉnhkíchthướccell/tầmmởchờbảnvẽ/camera, chưađặtsốbánkính.

## 3. Biểu tượng được phép hiển thị

HiệnNPCdịchvụđãbiết, nơi nghỉ, checkpointđãđăngký, portalđãmởvàđườngđãkhámphá. NPCđốiphe/kháchbịgiớihạncóiconkhóavàlýdo, khôngnútbấmgiả. NPCngoàirừngcóthểđượcmô tảbằngđiểmhẹntrongquesttrướcgặpmặt, khôngtựlộmọingườitrong52hồsơngoàihub.

Rương ẩn không tự hiện chính xác khi vào vùng; dùng dấu quan sát184. Sau phát hiện có thể ghim. Quyền nhận thưởng theo claimscope trong định nghĩa rương: account thì kiểm account, character thì kiểm character. Fog và ghim không quyết định quyền claim, không áp khóa account cho mọi rương. Trạng thái đã mở bởi nhân vật khác với đã nhận thưởng account. Tinhánh/bossmaphiệnkhiđủdấu/đãgặp hoặcnhậnthôngbáosựkiệncôngkhai, khôngradarđọcmọispawn. Sảnlượng/giờsinhnguồnkhônglộkhiCAP/PVEchưachốt.

Questchínhcóthểhiệnvùngtìmkiếm/đườngtớiNPCnhậnbiết, khôngautowaypointtiếtlộnhânchứngchưađượcchỉdẫn. Nhậtkýghi“lầnnàynhânchứngởtrạm…”thayvìmũitênđuổitheoliêntụcquađịađiểmbímật. Tìmđườngchỉđiđườngbiết/đượcphép, khôngxuyênnướcsâu/vách hoặcW06nếungườichơikhôngchọnnguyhiểmPK.

## 4. W06 và đấu trường

W06côngkhaihai trạm, sáucứđiểm, ownerphe/bang, trạngtháicontestvàlịchquânvụ. Khôngcôngkhaivịtrírealtimecủangườichơiđịch, kiệnđangmang, ngườiđangẩnhoặcđồthuhoạchcánhân. Quyềnbảotintrinh sát nếu cóphảilàskill/hoạtđộngriêng đượcduyệt, khôngđặtradarvàomặtcơbản.

ĐồngđộitrênmaptheoquyềnPARTY/quan hệ/cùngscope, kèmtrạngtháithôngtinmớinhất; khôngchoaltđốipheđọcping. Bangđượcpingphòngthủ/tậpkếtkhiđủquyền, markerhếthạn/đổiphe/ránguildphảithuhồi. Kếhoạchbícủaphekhônglưuchungvàoghimaccount.

GA01/02dùngmaptrận, đồngđộivàmục tiêu theođội; spectatorchỉtheoquyềngiải vàcóchínhsáchđộtrễởFACTION/PVP, chưa hứacóspectatepublic. Rờitrậnxóaoverlaytácchiến, khôngmangvịtríđịchvềworldmap.

## 5. Ghim, ping và giao diện

Ghimcánhâncótênngắn, icon, màu/từkhóa, map/surfacevàtùychọnxóa. Pingnhómchọnmụcđích: tậphợp, nguyhiểm, cần hỗtrợ, mục tiêu; cónguồn/timestamp/thờihạnvàchốngspamcấuhình. Khôngchuyểnpingthànhchatthếgiớitựđộng. Giớihạnsốghim/pingchưacó thìđặtcấuhìnhtrướctriểnkhai, khôngdựnghàngnghìneffectkhôngkiểmsoát.

UIchuyểngiữathếgiới/vùng/hoạtđộng, cólegendvàlọcdịchvụ/quest/phe. Kýhiệu/chữđọctốtởpixelnhỏ; khôngchỉđỏ/xanh. Hiệnnhãn“PKđốiphe”rõtrướckhichọnW06. Đườngchưadựngghichưamở, khônghiệntuyếndiđược. Cửasổmởtừmenumapvàphímcấuhình, chưatựchiếmMhoặccácphímđãchốt.

Mởmapkhôngpauseserver. Nhân vật vẫn chịu nguy hiểm theo luật vùng; cócảnhbáohit/đóngtheofocuspolicyUI, khôngtựtiêuvậtphẩmhoặcchọnquestkhichuộtxuyêncửa. TrênwebvàPCchungdữliệuserver; localStoragechỉtùychọnhiểnthị, khôngnguồnquyềnkhámphá.

## 6. Lưu trữ, thay phiên bản và kiểm thử

Thiếtkếdữliệucầntáchdiscoverycell/POIknown/checkpointUnlocked/questMarker/personalPin/tacticalPing, cóworldrevisionvàscopeowner. ChưaSQLmigration. TọađộmapđổiphảicóremappingIDvàfallback; cậpnhậtđịahìnhkhôngresettoànbộkhámpháhoặcgiữghimtrongváchmàkhôngbáo.

Serverxácnhậnkhámphá, reconnect/retrykhôngnhânreward. Shaderfogkhôngphảibảomật: khônggửithôngtinđịchbímậtchoclientrồichỉchebằnglớpđen. Ngườiđãbiếtspoilerkhôngđượcforcequestcreditchobạnbằngping.

CaQA: nhânvậtmới cùngaccountkhôngtựmởwarp; đêm/mưakhôngresetfog; mapreadonlykhôngbỏlộhiddenenemy; pingkhôngmởquest; rươngtheoquyền; hai tầngghimđúngsurface; đổiphe/ránguilddọnmarker; reconnectkhônglấythưởngkhámphálầnhai; chuyểnscopeGA/W06khôngròlộđịch. Chưakếtquảruntime.

MAP-09hoànthiệnhồsơ. Chưa vẽworldmap/minimap/icon, chưađóngMAP-01/02/03hoặcFACTION-11. Nguồn: [185](185_MAP_01_DIA_LY_ELARION_VA_MANG_DUONG.md), [187](187_MAP_DONG_BO_PHE_BANG_HOI_VA_W06.md), [188](188_MAP_06_PHAN_LOP_KHU_VUC_VA_QUYEN_GIAO_TRANH.md), [189](189_MAP_07_HOI_SINH_NOI_NGHI_VA_DICH_VU.md), [190](190_MAP_08_MANG_DI_CHUYEN_VA_CHUYEN_VUNG.md).


## Bổ sung r002 — thông tin đã biết không mở quyền

Account reference chỉ chia sẻ địa danh công khai; không tự chia sẻ secretPOI, spoiler, warp hoặc reward. Ghim nhận từ bạn là thông tin được chia sẻ có nguồn, không mở fog/quest. Claimscope rương thuộc catalog loot, không do bản đồ quyết định.

W06 công khai ownership/contest theo luật, nhưng không phát radar toàn vùng cho client. Ghim địch đã thấy là vị trí tại thời điểm ghi, không bám theo địch sau khi mất tầm nhìn. Đổi phe/team/bang thu hồi marker chiến thuật; không đẩy chúng vào ghimaccount. Không hứa ngăn người thật kể thông tin đã thấy ngoài game.

Mưa/sương không reset discovery; bề mặt nhiều tầng và phiên bản bản đồ dùngID ổn định/remapping. Local cache chỉ trình bày. Giá trị cell/range/TTL/cap marker chờ cấu hình và thử cảnh, không có số nghiệm thu khi chưa vẽ/dựng.
