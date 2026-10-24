# V01 — Sơ đồ bố trí chức năng Bình Minh r001

**22/10/2026 · Thiết kế layout trước mỹ thuật/greybox.** Phạm vi Map1 cấp1–10,1phó bản +2hầm khám phá,12cư dân,18mẫuquái,2tinh anh,1bossmap và8rương. Không viết tiếp truyện vùngsau. Bản xem SVG/HTML là sơ đồ tương tác, không tilemap/engine hoặc ảnh mỹ thuật đã nghiệm thu.

[Mở sơ đồ tương tác](/design-preview/v01-layout-r001/index.html). Có lớp tuyến truyện/NPC/quái/rương, chọn điểm và xuấtSVG. Tọa độ là đơn vị sơ đồ1000×760, không mét/tile/pixel thếgiới, chưa có thờigian chạy thực. Quan hệ địa lý theo story03/185; hướngTây nốiValedorn, không đổi mạngthếgiới chỉ để hợp một bứcảnh.

## 1. Cấu trúc tổng thể

Vànhlũy ẨnThành ởphíaBắc, phần lõi nằm ngoài quyền tiếp cậnV01. TrạiBìnhMinh ởngoạithànhTây, gầnđườngxe vàkhuđấtcao để không ngập khi mưanhẹ. Ruộng ởphíaNamtrại, rừng ởTâyBắc, suốinhánh ởĐôngBắc trại. SânChuôngNứt trênnềnđá cao phíaĐông, quaCầuSỏi; cửa phó bản nằm trênđườngbảodưỡng phíaBắcsânchuông. Lãnhđịabossmap nằm ngoài đường đi này, cóvách vàvùngđệm.

NhàĐèn/làngĐáĐèn vàquảngtrường ởphầnTâyNam làlớp mởđầuriêngM01–M03. CầuLau nốiđườngsơtán tới trại. Không thể đứng ngoài trại nhìn cùngmộtlàng vừa yên vừađangcháy do haingườikhác tiếnđộ: lớpintro vàlớphậubiếncố có quyềnhiểnthị riêng. Sơđồđặt gầnnhau để xem quan hệ tuyến, khôngđòi streaming xuyênmượt giữa hai state.

## 2. Ánh xạ mãL và khu chơi

| Mã/điểm | Tâm sơ đồ | Chức năng/khóa |
|---|---|---|
| L01 NhàĐèn |155,650|M01, cảnhgiađình, chỉintro cá nhân |
| L02 Quảngtrường |205,610|M02, giaođèn/biếncố, không phảiSânChuôngNứt |
| L03 Giaođiểmcứutrợ |255,575|M03: haiđường chọnthuốc/dụngcụ hội tụ, không chọn bằngchạy nhanh |
| L04 CầuLau |320,540|M03–M04, kiểm danh, checkpointintro; khácCầuSỏi qua sônglớn |
| L05 TrạiBìnhMinh |410,505|Hub hậuM04,6NPC, đườngvậnchuyển vàdịchvụ |
| L06A Trạmsuối |535,420|M06 điểmđo1, cóNeris vàbãi thao tác khôngcombat |
| L06B Ruộng |405,650|M06 điểmđo2, Edda/SQ06 vàlốivòng |
| L07 Cửabảodưỡng |735,145|M07, sânchuẩnbị antoàn, quyềntruyệnhợp lệ |
| L08 HầmPhongẤn |ngoài trời không cótâm phòng|Instance6phòng riêng; khôngnhét toàn hầm vào footprintcửa |
| L09 Ngãbađườngxe |140,440|LốiTây điValedorn, cóđườngđibộ sauM04; chưaviếttruyệnV02 |
| Rừng/Lán |265,285|Vaela, đườngkhámphá vànhánh tinh anh |
| SânChuông |810,255|Halen/LEG01–02, lốiđếnkho vôi vàđườngbảodưỡng |

Hai lối L03 là cảnhđãchốt: bộnâng tại215,560 vàthuốc tại280,600, sau xácnhận đi mộtlối tớicùngL04. Không cho sơđồcó hai đườngđủgần để chạyhết cảhai trong mộtcảnh.

## 3. Mạng đường và vòng nhiệm vụ

**Trục sinhhoạt:** L09↔L05↔L06A↔CầuSỏi↔SânChuông↔L07. Đườngkhông xuyênlãnhđịaboss hoặcđòi bơi. ĐoạnSânChuông→L07 menphíaTây vùngboss, cóthể nhìnthấy nguyhiểm nhưng khôngbịaggro tựđộng từđườngchính.

**Vòngđồngruộng:** L05→L06B→bờsuốiphíaNam→L06A→L05. Cóđườngngắn trởvề vàdấuđất canhtác; M06cho sohaimẫu theo thứtựtựchọn, khôngbắttrảNPC giữa từngmẫu.

**Vòngrừng:** L05→đườnggỗ/rìarừng→lánVaela→đườngcọc→L06A→L05. Lốikhámphá sâu rẽtớiđầuđàn nhưng đườngcọc khôngquaâmaggrotinhanh. LEG03 trởlạiRurik trênđườngra, khôngqua3lần cùng mộtbãi.

**Vòngchuông:** CầuSỏi→nhàtrựcHalen→KhoVôi→sânnghỉ→đườngbảodưỡngL07. KhoVôi chỉtựchọn, khôngcửađóngiữlốiL07. SauM08 raphó bản tạiL07rồivềL05 theođườngđãbiết; chưa tựthêmwarp miền phí.

**Intro:** L01→L02→L03→một nhánhAID→L04→L05. SauM04 cóquyềnkhámphá; khôngđòi làmM08 mới mởđườngTây. Tốcđộ,XP/damage khôngđượcsửa đểbù lỗibốtrí.

## 4. Nước, caođộ và vật cản

Sôngsâu ởvànhĐông cóbờ rõ, chỉquaCầuSỏi tại665,405; khôngnhiệm vụdướiđáynước. SuốinhánhSuốiSỏiTrắng bắtnguồn từsườnphíaBắc, vàosuốirồira sông; cócầunhỏ/lốikhô cho tuyếnchính, bãicạn tựchọn chậmnhẹ theoENV. L04 qua nhánhlau nhỏ riêng, khôngnhầm thànhcầuqua sônglớn.

Ruộng làvùngtrũng nông cóbờ, khôngđộtngộtngậpkhóaquest. Trại ởgò cao, rừng cósườnthoải vàlốilên, sânchuông caohơn bờsông bằngdốcđãvẽ. Núi/váchphíaBắcĐông làmranhthật, khôngbậctựleođược chỉvì trôngthấp. Khôngnhảy/bay, dungnham, vùngbăng hoặcgióbuffquáibay tạiV01.

Cây/đá chia thànhcụm sinhcảnh ởrừng,bờnước,ruộng; chừađườngnhìn mốc vàkhoảngtươngtác. Sơđồ chỉvẽ mảngthảmphủ, chưa vịtrí từngcây. Khi art dùngtile/chunkghép đúngquymô, khôngkéo mộtảnhcây/nềnthành cảkhu. Tánđược xửlýchekhuất sau, khôngphảixóa câychỉvìcamera.

## 5. Vịtrí dựkiến12NPC

| ID | Điểm sơđồ | Điều cầnchừa |
|---|---|---|
| N02 Sella |350,515|Bànnhàtạm/mái, lốinghỉ, khôngchặn đườngxe |
| N03 Mira |395,475|Bànghidanh, hàngchờ khôngche núttươngtác |
| N04 Maera |450,475|Bànđiềuphối, điểmchophâncảnhriêng |
| N09 Borin |465,535|Xưởng/khoảngvậnchuyểnbộnâng, táchtrạmthuốc |
| N10 Dara |375,540|Trạmthuốc/mái, đườngcáng tớiL04 |
| N29 Pella |420,545|Kho/bếphaiđiểm gầnnhaunhưng khôngtrùngzoneclick |
| N05 Neris |525,405|Bànmẫu khô, khôngtạo mục tiêubịquáiđánh |
| N07 Ilan |295,470|Chốttiếpnhận/sântập phổthông, khôngquestnghề |
| N25 Edda |385,640|Lánruộng vàđườngbờ tránh đànthú |
| N26 Rurik |555,450|Lánsửacầu ởbờkhô, vậtcảnkhôngchặnđiềutrămẫu |
| N27 Vaela |255,285|Lánrừng cóđườngtớitừngoàileashquái |
| N28 Halen |790,275|Nhàtrực cólối tránhbossmap/cửakhámphá |

Đây làpinbốtrí chưa phải tọađộengine. Hub6NPC,ngoàihub6NPC; ngườighéTovan/Yara cóthểđặt ởL09/bếnnhánh nhưng khôngthànhcưdânthứ13/14. Chưachốt lịchtrìnhgiờ hay AI choNPC-04toàncục.

## 6. Quái,tinhanh,boss vàkhoảngđệm

Quái dùng18ID trong183: ruộngnhóm02/03/04/05/06/08; bờsuối09/10/11; rừng01/12/13/14/15; di tích16/17/18; dơicụtcánh07 ởhầm, khônghìnhbay. Nhóm này làpoolloài, khôngsốlượngspawn hoặc mọiđiểm spawnđủmọiloài.

Đầuđàn tại145,240 bênsâurừng; línhcanhđá trụctrặc tại815,390 ngoàiđườngvòngSânChuông. BossmapCanhẤn tại915,130, cảnhbáo từxa vàlãnhđịa riêng. Khôngquáibay, khôngmục tiêubắtbuộc đứngtrongnướcsâu, khôngsinhvậtngoàigiới hạn18mẫu.

KhoảngđệmtrênSVG chỉlàcảnhbáo bốtrí, khôngbánkínhaggro thực. Trướcgreybox phảikiểm leashing,spawn vàđườngđibộ; khôngcóquái vào hub/cửahầm/nhàtrực. Mậtđộ/cooldownspawn vàthờigianboss cầncấuhìnhcombat, chưacântronglayout này.

## 7. Haihầmkhámphá,phó bản và8rương

ECO01HốcRễ tại565,365, cửabờkhô lốitừL06A; ECO02KhoVôi tại845,295, cửanhánh từSânChuôngtránhboss. Mỗi hầm3khoảng riêngtheostory20; pinngoài trời khôngquyđịnh tỷlệnộithất. DGcửaL07 tới6phòngP1–P6 theo08/18, khôngthôngvào lõinộithành chưa mở.

| Rương | Vịtrí sơđồ/khônggian | Tínhiệu vàđườngtới |
|---|---|---|
| C01 |180,355 bìarừng|Thùngđồcũ cạnhcọc, lốikhô khôngqua đầuđàn |
| C02 |390,280 đườngcọcrừng|Dấuxe/đákhácvậtliệu, đườngnhánhquayvề |
| C03 |285,680 đồngruộng|Hàngrào bỏ, khôngđạp luống đểláchcollider |
| C04 |585,565 bờTâysông|Bãikhô, khôngđòi xuốnsông |
| C05 |780,345 sânnghỉchuông|Cạnhmảnsửa cũ, tránh línhcanhđá |
| C06 |695,200 đườngbảodưỡng|Hốc đá cólốiquayđầu, khôngkhóatheoGATE |
| C07 |ECO01kho khô|Mộttrong8, khôngvịtríngoàitrời thứ7 |
| C08 |ECO02giákho|Mộttrong8, khôngkhóabằngâmthanh |

C01–08 ởđây là**mãrươnglayout**, khôngmãmanhmốiC01–C08cốttruyện; dữliệusửdụngprefixCHEST-V01 đểtránhnhầm. Rươngkhônggiữmanhmốibắtbuộc/chứngvậtchuyểnnghề; lootchưacấuhình khôngbáođãcóđồrơi.

## 8. Quytrìnhtiếp vàđiềukiệnkiểmtra

1. Duyệt quan hệkhu vàmạngđường qua sơđồ này.
2. Vẽlayoutmỹthuật/whiteboxđúngmốc, chốt footprintvậtthể vàđộrộngđường theoavatar/camera thực.
3. Dựnggreybox trongmôi trườngthửMMORPGriêng, chưađụngmapthủthành, kiểm chạm/tầng/nước/tuyến30chặng.
4. Đođườngđi,hướngnhìn,đoạnlặp,aggro vàcáchtrởvề; sửa geometrytrước khi thêmwarp/tăngtốc.
5. Làmtile/đạocụcây,nước,vậtliệuvàlắpmap; sauđó mớichốt tọađộ/tuyếnđiNPC.

Tiêuchí: mọiđiểmmain cóđườngnối; L09mởđúngM04; khôngmainđiquaboss/tinhanh;8rươngđúng6ngoài+2tronghầm;12NPCđúng6/6;bridgequa sôngcóvịtrí rõ;introkhôngtrộnstatechung;hai hầmkhámphá khôngthayphó bản. Kiểmgraphchỉxácnhận quan hệđiểm, **khôngchứngminh navmesh/va chạm hoặc thời gian chạy**.

MAP-01toànthếgiới vẫn mộtphần; hồsơ này chỉbổsunglayoutV01. Chưaảnhmỹthuật/tilemap/engine/NPCrouteAI, khôngtựđánhhoànthiện NPC-04 hoặc báo mapđãchơiđược.

## 9. Kiểm tra sơ đồ

[Bản SVG](/design-preview/v01-layout-r001/map.svg) · [Dữ liệu điểm và đường](/design-preview/v01-layout-r001/data.json) · [Báo cáo kiểm tra](/design-preview/v01-layout-r001/qa.json). Đã kiểm tham chiếu graph và kết nối đường chính/vòng,12NPC đúng6hub/6ngoài và không nằm trong ellipse poolquái của sơđồ, ngân sách8rương/2hầmkhámphá/2tinhanh/1bossmap, lớp hiển thị, chọnM07, vùng bấm pin, xuấtSVG vàmàn390px. Sửa vùng bấm nhỏ vàdịchN07 ra khỏi vùnghub. Chưa chơi thử trongengine, chưa có số đoFPS hoặc thời gian chạy.
