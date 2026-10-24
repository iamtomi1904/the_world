# V01 — Layout chi tiết và concept môi trường r002

**22/10/2026 · Bước tiếp sau sơ đồ216.** Đã vẽ concept môi trường bằng image_gen tích hợp theo bảng phong cách và sơ đồr001. Không dùng asset thủ thành hoặc báo mapđãdựng. Quyền truyện/đường chức năng vẫn theo216; tọa độ r001 không được áp thẳng lên ảnh mới.

[Bản xem có tên khu và lưới bố trí](/design-preview/v01-layout-r002/index.html) · [PNG gốc](/design-preview/v01-layout-r002/binh-minh-environment__r002.png) · [Prompt và nguồn](/design-preview/v01-layout-r002/provenance.json).

## 1. Cái được thể hiện và điều chưa khớp hoàn toàn

Có lũy/nội thành đóng ởBắc, rừng vàlánTâyBắc, trại trêngò, đườngTây, suối nhánh/ruộng, sông sâu mộtcầuđá, sânchuông vàba cửa hầm tươngứng vềvai. Các cây/đá/nhà cóthể đọcđược từngvật, không mộttexturephóng to phủcảkhu. Màusắc và độchi tiết theoảnhthamchiếu, chưa đồngnghĩa tile native đã được lượnghóa màu hoặc tỷlệengine.

Ảnh phát sinh tiểucầu/gờđá vàdịch vị trí so r001. Lối nào trông cóthể đi nhưng không nằm mạngđường phải được ghi làchưaquyếtđịnh, khôngtựhợp thức hóa thànhđường bơi/nhảy. Chưa đảm bảo camera vàđườngthật quanh từngmái/tán. Ghimtrong trangxem làchú thíchảnh gầnđúng, khôngbộ tọađộgame.

Trại minh họa nămcụmnhà/lều chính vàsânchung; bốtrí sáuđiểmcông việc: NhàĐèntạm, ghidanh/chỉhuy chungcụm, xưởng, thuốc, kho/bếp. Sáu cưdân hub khôngbuộc sáucănnhà riêng. Cần vẽmodule/mặtbằngcụthể saukhi kiểmgreybox, không lấy sốmái trênảnh làmngânsáchNPC.

## 2. Mười hai ô bố trí, không phải12chunkstreaming đã triển khai

Lưới4cộtA–D và3hàng1–3 chỉđể traopđổi mặtbằng. Mỗiô chiếm1/12khungảnh; không tile32/64 cốđịnh vàkhông filechunk sảnxuất. Một POI cóthểvắtquaô; khôngnhét trọn mọi hoạt động vào mộtô vì dễđếm.

| Ô | Nội dung ưu tiên | Việc phải giữ |
|---|---|---|
| A1 | Tánrừng, lối đầuđàn, ranh đồi | Đườnglán cólối vòng khôngqua tinh anh |
| B1 | Rừngnối nguồn, chân lũy | Lõi thành đóng, khôngrẽ thànhhầmthứtư |
| C1 | SôngBắc, vách vàđườnglên | Không vách chỉtrangtrí nhưngplayerđượcđiqua |
| D1 | Cửaphóbản vàvùngboss ngoài | Tách đườngbảodưỡng khỏiaggroboss |
| A2 | ĐườngTây vànhánh rừng | LốiValedornkhôngkhóaM08; khôngviếttruyệnmap2 |
| B2 | Trại/nước nguồn | Cóđườngxe vàvùngtươngtác, khôngspawnquái |
| C2 | Trạmsuối, cầuđá, bờsông | Giữđườngkhô, khôngnhiệmvụdướinướcsâu |
| D2 | Sânchuông, nhàtrực, khoVôi | Điểmdừngđọclore tránhcombat/tánche |
| A3 | LàngĐáĐènintro | TáchstateM01–M03 khỏi hậu biếncố chung |
| B3 | CầuLau, ruộng, hàngrào | Khôngkhoảngnhảy bắtbuộc; lốirút rõ |
| C3 | Ruộng/bờkhô vàđầura suối | Rươngbờkhô khôngđòibơi haycầuẩn |
| D3 | Sông vàsườnbiên | Cảnhquanchứkhôngthêm POI/boss chỉđểlấpô |

Nếu chuyển sangchunkengine, kíchthước file/tile vàtải phải được đo riêng theo camera, artnative vàhiệunăngweb/PC. Không quyđổi12ôthành12serverzone hoặc48mapmới.

## 3. Thước bố trí theo thân va chạm

Kýhiệu **D** là đườngkính thâncollision đi bộ lớn nhất trong ba race dùng ởV01, khôngchiềurộngảnh/vũkhí/VFX. Các mức sau là mốc bắtđầu cho greybox, đưa vào cấu hình thử và sửa bằng đo, chưa phải kếtquả cân đã nghiệmthu.

- Đườngxe/trụcchính: bềrộngthông ít nhất5D, khôngđếm mái/tán/đạocụ vào phầnđiđược.
- Đườngphụ hai chiều: ít nhất3D. Lốikhámphángắn: ít nhất2D vàchỗquay đầu4D, không lối chỉ mộtpixel.
- KhoảngtươngtácNPC: nềnthoáng3D×3D trướcđiểm đứng; trụcnhận/trả không bịđườngxe cắt ngang.
- Giữa haiđiểmclickdịchvụ: cáchít nhất2D trongbốtrí đầu, sauđókiểmthực tếvới vùngnhận input/UI; không coikhoảngnày làhitbox nhậnđòn.
- CầuSỏi: mặtđiít nhất4D, tayvịn va chạm rõ, mốicầu khôngthunhỏ thànheocổchai. CầuLau cólốiqua3D phùhợp cảnhvậnchuyển.
- Dốc bắtbuộc: bềrộngít nhất3D, nốiđúngcaođộ, khôngteleportqua bậc hìnhảnh. Thangdựng/ngầmnhảy chưađược mởởV01.

Vùngchiếnđấu ngoài đườngchính phải cókhônggian néđòn của bộtập; footprint vàtelegraph căn theoBOSS/COMBAT, không lấy sânboss tròn trênảnh làm bánkính đủchuẩn. Không chỉnh damage/tốcđộ để bù đườngquáchật.

## 4. Trại và nền công trình

NhàĐèntạm cócửa/cángtiếp cận, bànghidanh vàbànđiềuphối cùngcụm nhưngkhácđiểmtươngtác; xưởngBorin tách khu thuốcDara để lốivậnchuyển không xuyên giường. Pella cóbànkho vàbếp sát nhau nhưngkhôngmột nút mởmọi menu. Sânchung cókhoảngnghỉ/nhìnđịnhhướng, khônglấp kín bằngthùngđồ.

Nềnnhà rào/đá córộng vàchiềusâu kiểmtrên mặtđất; mép mái/tán làlớpchekhôngđồngnghĩacollision. Cửa vào nhànếu chưacóinterior thật thìdịchvụ ởbànngoài cómái, khôngbắtplayerđivàonhàđượcvẽđẹpnhưngkhôngcóphòng.

Đạocụkhôngvĩnhviễnchặn tuyếnM03cáng/bộnâng; lều vànhàphải đểthấy đườngra. Trại antoàn theo serverstate sau này, không chỉ màuviền xanh. LịchtrìnhNPC chỉchốt saukhi greybox vàkhuvực input đượckiểm.

## 5. Nước, rừng vàđộcao tronggreybox

Nước phânhaitag rõ: deepblocked vàshallowslow; kẻ vẽphải làmbờ/đáy/cầu nhậnra được. Đátrangtrí trongsôngsâu trênconceptkhôngtự thành điểmnhảy. Tạo collisionbờ ngaytừbảnkhối, khôngđợi đếnảnhnước đẹp mới phát hiện khôngquađược.

Rừnggiữ cụm tán nhiều cây, có khoảngthở quanhcọc/biển/lán. Bật quy tắc che vùngtrướcnhân vật theoART, khôngphaikhắp rừng hoặcxoá hếttán. Đườngkhámphá códấu vậtliệu/chânthú, không dựa vào pinrương cósẵn.

Caođộchia trại gò, ruộng trũngnông, sânchuông nềnđá vàvànhlũy. Mỗiđườngbắtbuộc códốc/cầu phùhợp; khôngđườngtắt chui vách do spriteđá nhìnthấp. Chưa thêm môi trường băng/lava/gióbuff hoặcquáibay.

## 6. Vật liệu và module cần vẽsau kiểmkhối

Họđất/cỏ/hàngrào, bờcạn/sâu vàđầucầu, mái/ngưỡngnhà, nềncôngtrình/vách/dốc, cụmcây/rễ/đárời, cọcchỉđường/đạocụdâncư. Mỗi họ cần mépnối,góc,trong/ngoài và biếnthểtránh lặp; không cắtảnhconcept thànhtile rồi tựgọi làbộassetkhítmạch.

Ảnhmới là môi trườngthamchiếu, không thay12bảngNPCđãvẽ. Không tạo lạihero/boss hoặcngọcthủthành. Intro vàhub hậu sựkiện cần asset/state biếnthể khi sảnxuất, khônghiện đồngthời cảhai trạngthái trongmộtworldchung.

## 7. Đầu ra vàgiới hạn

Đã có1PNGconcept môi trường, lớp tênkhu/lưới12ô vàquytắcbốtrí đủđểbắtđầu kếhoạchgreybox218. Chưa tạo tilemap, collisionmesh, bảnđồ nguồnTiled/engine, prefabnhà hoặcwalkablemap. MAP-01 vẫnpartial, checklistgiữ525=128/14/383. Không sửa gameplay/gamecode hoặc cốttruyện ngoàiMap1.
