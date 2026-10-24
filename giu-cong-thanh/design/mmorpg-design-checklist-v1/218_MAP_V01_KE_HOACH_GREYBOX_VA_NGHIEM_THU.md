> **Greybox Map 1 · 23/10/2026:** [Bản thử tương tác 219](219_MAP_V01_GREYBOX_TUONG_TAC_R001.md) · [Đi thử Map 1](/design-preview/v01-greybox-r001/index.html). Đã có di chuyển, collision, cầu/nước cạn, 12 điểm NPC và vào/ra hầm. Đây là prototype bố trí riêng; chưa AI/combat/loot/multiplayer/lưu dữ liệu. Giữ **525 mục: 128 hoàn thiện / 14 một phần / 383 chưa thiết kế**. Các banner cũ bên dưới là lịch sử.

# V01 — Kế hoạch dựng greybox và nghiệm thu đầu tiên

**22/10/2026 · Chỉ thiết kế, chưa dựng hoặc chạy thử.** Đầu vào216sơđồ/217concept. Bản thử cần tách khỏi thủthành hiện tại, không thay map đang ổn. Dữliệulưu/côngthứccombat khôngđượcđổi chỉđể bảnkhối trông mượt.

## 1. Những gì cần dựng trong lượt thử

Nền điđược, mép vùng, deepwaterblocked/shallowslow, độcao vàlốinối, footprintnhà/cây/vách, mặt cầu, khoảngtươngtácNPC. Dùng hộp/mặtphẳng/kýhiệu thayart khi đủkiểm, nhưng phải rõ tag nào va chạm vàtag nào chỉ che hình.

Đặt đại diện thâncollision của3race, camera cốđịnh theoART, bộtập cơbản vàđiểminput. NPC cóthể làmarker đứngyênđểkiểm khoảngclick, chưa cần pathfinding đầyđủ. Chỉ dựng markerchoquest/chest/cave, không giả đã cónhiệmvụ/lootbackend.

M01–M03 ởlớpintro vàM04trởđi hậu biếncốphải thểhiện statekhác, không dùng mộtmapcháychungchotấtcả. Cửa phó bản tới sáuphòng greybox tối thiểu; haihầmkhámphá cóba khoảngkhô riêng nhưngkhôngtựthêm boss.

## 2. Thứ tự dựng

1. Trại, đườngTây vàđiểmL04: kiểmtrởvề/tươngtác/nhìnđịnhhướng.
2. Vòngruộng–suối–rừng: kiểmđườngkhô, bờnước, độtầng vànhánhquaylại.
3. CầuSỏi, sânchuông vàđườngbảodưỡng: kiểmqua sông, lốivòngboss vàlốilênnềnđá.
4. Haihầmkhámphá vàphóbản: kiểm cửa/đườngra, khôngkẹt khiđổitrạngthái.
5. Đặtpool/tinhanh/boss proxy: kiểm ranhđuổi/đườngan toàn trước khi làmAIđầyđủ.
6. Thửkhôngpinrồi cópin, ghi vịtríbịlạc/che/cầnquaylại; điều chỉnhlayouttrước khiarttile.

Phạm vi lượt này là đầu bài cho bước dựng thử sau; mỗi ca có trạng thái nghiệm thu riêng.

## 3. Bộca kiểmtra dựkiến

| Ca | Hành trình/thao tác | Điều phải đạt |
|---|---|---|
| GB-V01-01 | L04→trại→đườngTây | Đủ lốiquaylại, khônggateM08 hoặcPK |
| GB-V01-02 | M06 làm2mẫu theohaithứtự | Khôngbắttrảgiữamẫu, khôngmanhmốiđòibơi |
| GB-V01-03 | Trại→lánrừng→suối→trại | Cóđườngnéđầuđàn, không ngõ cụt vôcớ |
| GB-V01-04 | CầuSỏi→Halen→L07 | Khôngđi xuyênvùngboss/tinhanh, dốcliênthông |
| GB-V01-05 | Vào/ra cả2hầmkhámphá | Khôngvé/chìakhiếm, khôngđóngcửavĩnhviễn, khôngcầnsốnhóm |
| GB-V01-06 | P1→P6sau3kếtGATE | Vẫnraphó bảnđược, hồsơkhôngmất, khônglõiOrenchếtlại |
| GB-V01-07 | Thử3thânrace tại mọi cổng/cầu/NPC | Khôngkẹtthân, dễđọcđòn, khônghọcvũkhínhánhtrước15 |
| GB-V01-08 | Tiếp cận từngNPC, Pella2nhóm | Khôngbấmnhầm dịchvụgầnnhau, cókhoảngđứng ngoàiđườngxe |
| GB-V01-09 | Tắtmarker, đi theo mốc/biển | Vẫn nhậnra trại,cầu,suối,đườngTây vàcảnhbáonguyhiểm |
| GB-V01-10 | Thayngày/mưa/sương minh họa | Telegraph/điểmtươngtác khôngbịche, khôngkhóa đườngchính |
| GB-V01-11 | Rương6ngoài+2trong | Khôngnhảy/cắt collider/nướcsâu hoặcnewrace đểtới |
| GB-V01-12 | Hai người khácprogress/chuyểninstance | Khôngtrộnintro, mấtNPCdịchvụ hoặcghèquyếtđịnhGATE |

Các ca chưa chạy. Ghi pass/fail bằng evidence trongbảnthử, không lấy ảnhPNG/sơđồgraph làm bằngchứng đãđạt. Thời gian/đường thực vàtỷlệcombat/di chuyển cần đo, khôngtựghi con số phút khi chưa cótốcđộ vàcamera thật.

## 4. Hồ sơ đo vàquyếtđịnh sửa

Mỗi lỗi cóbuild/layoutrevision, race, điểmđầu/cuối, trạngtháiphase, đườngthực tế, vấnđềnhìn/va chạm, ảnh/video vàcáchsửa. Ưutiên sửađường/vật cản/nhịp trướcwarp/tăngtốc. Không đổiHP/XP, thêmquái hoặcdi chuyểnmanhmối đểche nguyênnhânbốtrí.

Hiệu năngweb/PC phải đo khi cóchunk/nativeart/AI; chưa xáclậpFPShoặcngânsáchRAM từconcept. Chia12ôbốtrí thànhchunkengine làbàiđo riêng, khôngước lượngtựđộng từdiệntíchảnh.

## 5. Điểmchốt trướcartproduction

Chỉchốt footprinttile/đạo cụ khi cácđườngbắtbuộc, nước/độcao vàkhoảngtươngtác đượckiểm. Sauđó mới vẽtilemodule vàđặt trangtríđúngscale, cắt vùngche, làmNPCroute/ngồi/làmviệc theo mặtbằng ổn. Chân dungNPCđãvẽ vẫn dùngthamchiếu, chưacầnvẽlại vìđổiđường.

Tài liệu này chưađánhhoànthiện cácmụcMAP/NPC/PVE/QAtoàncục. Checklistgiữ525=128/14/383; cốttruyện dừngMap1, chưacodeengine hoặcpháthànhmap.
