> **Thế giới r002 ·22/10/2026:** [Tên từng khu,10đấtẩn và màu theo tiến trình](201_MAP_01_MUOI_DAT_AN_VA_MAU_THEO_TIEN_TRINH_R002.md); [bản xem](/design-preview/elarion-map-r002/index.html). Vùng mở có màu/chưa mở xám; cấp10thấyV03xám; đấtẩn chưa phát hành không tự mở ở60. Giữ6vùng hiện tại và525task:127hoànthiện/11mộtphần/387chưathiếtkế. Chưa kết nối game/backend.

# MAP-01 — Bản vẽ tham chiếu Elarion · concept r001

Ngày22/10/2026. Sau yêu cầu tiếp tục ở điểm vẽ, tạo nền concept mới bằng imagegen tích hợp và lớp tên/tuyến/sector bằngSVG/HTML độc lập. Chỉ sửa tài liệu và bản xem thiết kế, không đổi gameplay, dữ liệu nhân vật, database hoặc thủ thành.

## 1. Xem và bàn giao

[Mở bản đồ tương tác](/design-preview/elarion-map-r001/index.html). Có thể bật/tắt mười thành, tuyến lịch sử, vùng sản xuất, phe/W06 và dịch vụ đề xuất; chọn một điểm để đọc ghi chú. Bản xem dùng dữ liệu tĩnh, không có ownership hoặc vị trí người chơi trực tuyến.

![Elarion: địa lý, mười thành và tuyến lịch sử](/design-preview/elarion-map-r001/a_geography_routes__r001.png)

[Toàn bộ overlay](/design-preview/elarion-map-r001/b_all_overlays__r001.png), [nền không nhãn](/design-preview/elarion-map-r001/c_terrain__r001.png), [nền concept gốc](/design-preview/elarion-map-r001/elarion-geography__concept_r001.png), [dữ liệu lớp](/design-preview/elarion-map-r001/map-data.json), [prompt](/design-preview/elarion-map-r001/prompts.json), [nguồn/hash/kích thước và QA](/design-preview/elarion-map-r001/manifest.json).

## 2. Nội dung đã vẽ

- Vành núi tuyết phíaBắc với dấuI/III; rừngIIởTâyBắc; đồng bằngIVvà cảngVIởTâyNam.
- Cao nguyênVởnhánh phíaTây trung tâm; thunglũngIXcó lõithànhhỏng/ngoạivi còn sống.
- ĐầmVIIphíaĐông thấp hơn cao địaVIIIởĐôngBắc; miềnkhôXphíaNam cùng lụcđịa; các đảo/hải đăng ngoài bờ.
- MainriverphíaTây có chuỗi hướngtừchânnúi xuống đồngbằng/cửa sông. Dòng phụ trungtâm/đầm là hìnhconcept, chưa đủcaođộ để nghiệmthu phânthủy.

Ảnh đầu thiếu motifValedorn nên đã dùng imagegen chỉnh cục bộ thêm thành ven sông trước khi đặt mãIV. Không đổi tên hoặc dời thành cũ chỉ để hợp ảnh. Các nhà/tháp là biểu tượng địa lý, không bản vẽ nguyên thành phố.

## 3. Overlay có cấu trúc

**Mười thành:** mỗi điểm có mãI–X, tên và mô tả; labels là chữ độc lập, không ghi chết vào nềnảnh. Pin bám chủ thể địa lý trongconcept, tọa độ1536×1024làanchorảnh, khôngtọađộgame.

**Sáu tuyến tham chiếu:** HoàngGia gồmIX–IV–V; RễCổ nốiIV–II–III; ĐèoXươngIII–I; hạlưuIV–VI; VọngLinhIX–VII–VIII; HảiĐăngVI–đảo–X. Đườngđứt thểhiệnquan hệhànhtrình, khôngnavmesh. Cácđoạncắtqua sông/sườnđá cầnvẽcầu/lốidốc hoặc chỉnhởbảnr002.

**Vùng sản xuất:** bảy polygonđềxuất biểu diễnV01,V02,hainhánhV03,V04,V05,W06. Đây làkhoanhphạmvi, khôngđoarea15×/21×, khôngsafevolume vàkhôngnóitoànbộnhàtrongpolygonđềuđượcdựng. Hai nhánhV03khôngcóđườngtắtđịalý tựđộng; vẫnđiquaIV.

**Phe/W06:** FM-HM/FM-TT làhai trụsởđềxuấtTây/ĐôngIX, TR-HM/TR-TT làhai trạmW06. R1…R6 làsáucứđiểm theo187:2ngoại vi/3giữa/1lõi. Các khoảngcáchchưathử khôngthểgọilàcân bằngPK. GM01/GA01/GA02khôngvẽthànhđảomới.

**Dịch vụ:** bảy pinSminhhọavịtrítiếpnhận, táchhainhánhV03vàvùngtrũng/caođịaV04. Khôngcó82tọađộNPCchínhthức, khôngspawnngườichơitheopinđềxuất. QuanhNPCkhôngtựphátsinhvùngbảohộ.

## 4. Kiểm bảnvẽ và giới hạn

Đã xem nền và bảnxuấttên/tuyến: cóđủmười motifthành, vịtrítươngđốiBắc/TâyNam/ĐôngBắc/miềnNamphùhợpkhung185; biểutượngthànhkhôngthaymười địa danhbằngnămmãlevel. Chưa vẽ đường kiểmấnIX–X hoặc VựcRỗng côngkhai.

Prototypeđộc lập có script kiểmlayer, chọnđiểm vàkeyboard; kếtquảtrongmanifest. Các kiểm đó chỉxácnhậntrangxem, khôngserver/combat. TệpPNGxuấtbằngChrome/Playwright; nềnmớidoimagegen, khôngPillowvẽthay.

Các việc còn thiếu trước khi đóngMAP-01:

1. Chuẩn hóa tỷlệthamchiếu/thước tươngđối vàbảng khoảngcách địa lý; hiệnchỉcó tỷlệhình ảnh, khôngkm.
2. Vẽ/kiểm đườngbờ, vịtríđảo vàbếnđếnmiềnNam: đườngHảiĐăngcuối đangchỉquan hệđếnX, chưacóedge từbếnlênthànhđượcchốt.
3. Kiểm watershed/caođộ vàcáclốivượt nước/đèo; vệtđườngoverlay không đủ chứngminhcóđườngđiđược.
4. Điều chỉnhboundarysector/aliasV01và điểmcheckpoint; chưaquyết TrạiBìnhMinh/CầuLau/ngoạithành làcùnghaykhácđiểm chỉvìpinđẹp.
5. Kiểm khônggiantiềntrạm, sáucứđiểm vàmạngrútW06; khônglấykhoanh6×làFPS/campđãđạt.

Nềnảnh cóchiphípixelconcept lớn; chưa bộtile native, chưa đủ4hướngasset, không làmđầuvàotrựctiếpchocollision. Hình núi/tán/nhà khôngđịnhnghĩamaskđivàobằngmàuảnh.

## 5. Trạng thái hiện hành

**MAP-01 giữ một phần.** Có bảnvẽconcept/overlayr001nhưng chưa hết các điểmkiểmtrên. Tổng525mụcgiữ **127hoànthiện /11mộtphần /387chưathiếtkế**; khôngđếmảnhhoặcoverlaythànhtaskmới.

Phầnthiếtkếtiếptheo củaMAP-01làr002sửa tỷlệ, cầu/đèo/bến, cácđiểmchưachốt; sauđómớichuyểnsanglayoutvùng cụthể. Khôngtựdựng6mapgameplaytừmộtảnh hoặcghiđãxongsystemmap. Các FACTION/PVP/ENVcònmở.

Nguồn: [địa lý185](185_MAP_01_DIA_LY_ELARION_VA_MANG_DUONG.md), [phe187](187_MAP_DONG_BO_PHE_BANG_HOI_VA_W06.md), [lớp194](194_MAP_02_CAU_TRUC_LOP_BAN_DO_VA_QUYEN_THONG_TIN.md), [biên195](195_MAP_03_BIEN_KHU_VUC_DIEM_DEN_VA_DUONG_QUAY_LAI.md), [brief199](199_BAN_GIAO_MAP_VA_DUNG_TRUOC_VE.md).
