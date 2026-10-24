# Map1 — Greybox tương tác r001

**22/10/2026 · Bản thử bố trí, chưa gameMMORPG hoàn chỉnh.** Theo bước kế tiếp218, đã dựng prototypeCanvas riêng, không thay map thủthành hoặc codecombat/tàikhoản. [Mở greybox](/design-preview/v01-greybox-r001/index.html).

## 1. Chức năng thực sự có trong bản thử

- Đi bộ WASD/mũitên, camera theo nhân vật, nút hướng cảm ứng, chọn3thân thử.
- Va chạm hìnhtròn với nhà/vách/cây vàbiên; chia bướcdi chuyển để hạn chế xuyêncản khi framechậm.
- Sôngsâu chặn; CầuSỏi choqua; CầuLau vàsuốicạn phânbiệt. VáchphíaBắc/Đông/Nam vàđườngdốc có vùngđi riêng.
- Suối cạn giảm tốc trong prototype, nềnđá/dốc cótagcaođộ vàthểhiệnthôngtin. Chưa môphỏng vật lýZ/đánh khác tầng.
- Tiếpcận12NPCđứng đánh dấu vàF mởmô tả; có thểtắt tên/viền va chạm đểkiểm nhìn.
- Haiđiểmlấymẫu môphỏng giữ trạngthái2/2 bấtkể thứtự. Không phátXP/tiền hoặcđánhhoànthiệnM06thật.
- Vào/raECO01/ECO02, mỗi nơi3phòngkhối khô; vàL07phóbản6phòng cólốinối.
- HồsơP3, ngắtvỏproxy vàGATE lựa chọn đượcgiữ trongphiên thử; khôngtrậnbossOren, khônglờithoại/kếttruyện đầyđủ. Rươngmarker chỉghi đãkiểm, khôngloot.
- Hai lớpintro/hậuM04 để kiểm khônggian; intro cóđường chuyển tạiCầuLau, chưa phải chuỗicảnhM01–M04hoànchỉnh.

Các điểm trên thực hiện trong state của trang thử, khôngfake chuyểnđộng trên ảnhconcept. KhônglưuPostgreSQL hoặcđọc tài sảnplayer. Reload/đặt lại xóatrạngtháibảnthử; đây khôngphảibugmất save của game.

## 2. Cấu hình và những gì chưa đo

`model.js` tách bềrộng/radius/tốcđộ/độchậm/ramp/vách khỏi hiểnthị. Đơnvị sơđồr001 nhân3ra đơnvịcanvas; tốcđộ180 vàradius18/17/20 chỉđểthử, không chốtsprite/côngthức hoặc tốcđộchạygame. D không lấy từáochoàng/VFX. Ba thân làproxy hìnhtròn, chưa phải bộsprite/ngựa/playercontrollerproduction.

Đạocụ/nềnkhối bámr001, khôngbêcollision theo từngmái trênảnhr002. Chưa chứng minh tỷlệ/routetime mapcuối, chưa lớpstreamingchunk/AI/multiplayer. Tổngquãngđi hiểnthị làđơnvịthử, không métthếgiới hoặc sốphútđãcân.

## 3. Kiểm tra đã chạy

[Báo cáo kiểm tra tựđộng](/design-preview/v01-greybox-r001/qa.json), [ảnh desktop](/design-preview/v01-greybox-r001/desktop.png), [ảnh màn nhỏ](/design-preview/v01-greybox-r001/mobile.png).

Đã kiểm: keyboardlàmplayerđổi vịtrí, nhà/sôngsâu chặn, mặtCầuSỏi quađược, bướcdi chuyển khôngxuyênsông ởngoàicầu, suốicạn cóhệsố0.8 trongprototype,2mẫu ghi2/2, haihầm/phóbảnvào/ra, COPY→ngắtvỏproxy→RELEASEmôphỏng giữstate vàintro chuyển thếgiới,390pxkhôngtrànngang, khôngpageerror.

KiểmBFS trênlưới collision thực của model: cả3radius đều cóđường tới28đích (12NPC,10điểmchính/cửahầm và6rươngngoài). Đây mạnhhơn kiểmgraphđường ở216, nhưng vẫnkhôngthay fullmanualplaytest hoặcnavmeshproduction. Thao tác tronghầm đãkiểm bằng đặttọađộtest cóthôngbáo, chưa chạyendtoendtrậnOren hoặc fullchặngtruyện.

## 4. Đối chiếu12ca của218

| Ca | Trạng thái hiện tại |
|---|---|
| 01 ĐườngL04/trại/Tây | Cócollision vàkhảnăngtiếpcận trongmodel, chưa đánhgiánhịpchạy thựctế |
| 02 Hai mẫuM06 | Thao tác2mẫu môphỏng đạt; chưa questlog/chứngcứ thật |
| 03 Vòngrừng | Kiểm collisiongrid cóđường, chưa AI/leash đểđánhgiá néquái |
| 04 Cầu/chuông/L07 | Cầu vàvách/dốc cóhìnhchặn; chưa kéoquái/telegraph |
| 05 Haihầmkhámphá | Vào/ra đạt, chưa lore/loot/câuđốhoànchỉnh |
| 06 Phóbản/GATE | Chỉkiểmstateproxy vàlốira, chưacombat/bađoạnkếtđầytuyến |
| 07 Ba race | Proxy radiuskiểmđược, chưa bộsprite/bodytấtcảhướng |
| 08 NPC/menu | Tiếpcậnmarker được, chưa menu/kho/dịchvụkinhtế thật |
| 09 Khôngmarker | Cócôngcụ tắt đểthử, chưa đánhgiángườichơimới |
| 10 Thờitiết | Chưa cómưa/sương/renderproduction |
| 11 Rương | Đườngtớimarker, chưa quyềnloot/cooldownbackend |
| 12 Đangười/progress | Chưa chạy multiplayer, statecục bộkhôngphảibằngchứngđồngbộ |

Không ghi12/12đạt hoặcFPSgamemượt khi chưađủbằngchứng. Các ca mới đượcchạylại khi model/logic thayđổi; khôngmởrộngtestgiả thànhtestbackend.

## 5. File và bước tiếp

Tạo `public/design-preview/v01-greybox-r001/{index.html,style.css,model.js,app.js}`; đọcdữliệu sơđồr001 chung để tránh khoPOIthứhai. Marker/thân thử làprimitivecanvas, không assetmỹthuật mới. Trangdùngphím tươngtácF theo inputđãchốt, côngcụ đặtđiểm chỉlàdebugthiếtkế khôngwarp miễnphíingame.

Tiếp theo nên đi thử thủcông cácvòng, ghi chỗchật/che/xa vàsửa footprint. Saukhi bốtrí ổn mới làm tile/đạocụ, chuyển bảnthử sangcontrollerengine vàlắp hệ nhiệm vụ thật. NPC-04 có thêm minhchứng vịtrí/tiếpcận nhưng chưa đủlịchsinhhoạt, nên không đánhhoànthiện toàncục. Giữ525=128/14/383; khôngcốttruyện ngoàiMap1.
