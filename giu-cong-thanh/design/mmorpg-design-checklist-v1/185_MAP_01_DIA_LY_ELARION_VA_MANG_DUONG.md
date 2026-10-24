> **Thế giới r002 ·22/10/2026:** [Tên từng khu,10đấtẩn và màu theo tiến trình](201_MAP_01_MUOI_DAT_AN_VA_MAU_THEO_TIEN_TRINH_R002.md); [bản xem](/design-preview/elarion-map-r002/index.html). Vùng mở có màu/chưa mở xám; cấp10thấyV03xám; đấtẩn chưa phát hành không tự mở ở60. Giữ6vùng hiện tại và525task:127hoànthiện/11mộtphần/387chưathiếtkế. Chưa kết nối game/backend.

> **Đã vẽ concept địa lý ·22/10/2026:** [Elarion MAP-01 r001](200_MAP_01_BAN_VE_ELARION_CONCEPT_R001.md) và [bản xem tương tác](/design-preview/elarion-map-r001/index.html). Có mười thành/các lớp tuyến/vùng/phe; MAP-01 vẫn một phần, chưa tỷlệ/đường đi chính thức. **525mục:127hoànthiện /11mộtphần /387chưathiếtkế**. Chưa gameplay/database; các điểm dừng trước vẽ bên dưới là lịch sử.

> **Gói vẽ hiện hành:** [Bàn giao199](199_BAN_GIAO_MAP_VA_DUNG_TRUOC_VE.md) tập hợp đầu vào MAP-02…12 và bốn nhóm overlay. MAP-01 giữ một phần, chưa có bản vẽ tỷ lệ hoặc ảnh mới trong lần này.

> **Đồng bộ bản đồ phe/bang ·22/10/2026:** [Phụ lục187](187_MAP_DONG_BO_PHE_BANG_HOI_VA_W06.md) nối W06/đại bản doanh/nhàbang/arena vào địa lý, khí hậu và luật vùng; sửa phạm vi6vùng ngoài trời, không PKnămPvEcũ. Giữ525mục:119hoànthiện/11mộtphần/395chưathiếtkế; chưa vẽ/code. Các phạm vi cũ bên dưới là lịch sử khi xung đột.

> **Mở rộng phe/PvP ·22/10/2026:** [Hai phe, bang hội và năm loại không gian mới](186_FACTION_01_HAI_PHE_BANG_HOI_VA_CHIEN_TRUONG.md). Chọn phe khi chuyển chức15; W06cấp40–60cóPKđối phe, samefactionchỉđấu trong giải chính thức. Thay giới hạn “khôngmap46–60/chưaPvP” riêng phạm vi mới, giữnguyên5vùngPvEcũ/cap60. Checklist **525mục:119hoànthiện /11mộtphần /395chưa thiết kế**. Chưa code/vẽ.

# MAP-01 — Địa lý Elarion và mạng đường · bản mô tả r001

Ngày 22/10/2026. Thiết kế MMORPG pixel2.5D, chưa vẽ bản đồ lục địa hoặc layout. MAP-01 mới **một phần**: đã xác lập quan hệ địa lý, lưu vực và mạng hành trình; còn bản đồ hình học có tỷ lệ, đường bờ/đảo và kiểm tuyến. Không sửa thủ thành.

## 1. Các quyết định nền

Giữ mười thành, mãI–X và các tuyến lịch sử. Mã thành không là thứ tự đi hoặc thứ tự level. Năm vùng sản xuất tới45 có hub/ngoại vi/hành lang cụ thể, không bao gồm toàn bộ mười đô thị. Nhân vật tối đa60. Năm vùng PvE giữ nội dung tới45; bổ sung W06 tranh chấp40–60 và các bản đồ chức năng theo [phụ lục đồng bộ187](187_MAP_DONG_BO_PHE_BANG_HOI_VA_W06.md). Không thêm vùng truyện46–60.

Phân biệt **bản đồ thế giới** (quan hệ địa lý), **vùng gameplay** (cụm nội dung sản xuất) và **tiểu khu** (không gian có thể dựng). Một vùng có thể gồm các sector nối bằng đường/chuyến đi có giải thích, không cam kết cả lục địa liền mạch không tải. Các khoảng chuyển chưa sản xuất không tự trở thành map thứ sáu đầy đủ.

## 2. Bố trí mười thành

| Mã và thành | Vị trí tương đối | Địa hình, nguồn sống và vai trò nối đường | Phạm vi bản đầu |
|---|---|---|---|
| I Vương Miện Băng Giá | Cực Bắc, cao hơn vành núi | Núi tuyết, đồn trú và tuyến rèn cổ; qua Đèo Xương tớiIII | Nền địa lý; chưa cam kết dựng thành/dungeon đầy đủ |
| II Sylvaris | Tây Bắc, sườn ẩm dưới núi | Rừng cổ, nguồn nước và đường người dẫn; nốiIVvàIII | V03dựng biên rừng, không mặc định toàn bộ rừng sâu |
| III Khaz Drumm | Vành núi phía Bắc, giữa mạng đèo và rừng | Cửa mỏ/lò rèn; Đường Rễ Cổ xuốngII, Đèo Xương lênI | Nền địa lý, không tự thêm thành thứ sáu vào ngân sách |
| IV Valedorn | Đồng bằng phía Tây, ở thượng lưu soVI | Đầu mối sông/đường xe; nốiIX,V,IIvàVI | V02dựng tuyến thương mại/hub đại diện, chưa nguyên đô thị |
| V Aurelia | Cao nguyên trên nhánh hành hương từIV | Đường lên có bậc cao, tu viện lưu trữ nằm dọc tuyến | V03dựng đoạn hành hương liên quan; không gộp cả thành vớiSylvaris |
| VI Merrowen | Bờ biển Tây Nam, hạ lưu hệ sôngIV | Cảng cửa sông và tuyến biển tới đảo rồiX | V02dựng hạ lưu/bến có chức năng; không gọi thành cảng là thành sông nội địa |
| VII Nocthollow | Vùng trũng phía ĐôngIX | Đầm, đường cao và khu cư trú; nốiVIII bằng lối lên | V04có sectorđầm/ngoại vi và dấu nghiên cứu |
| VIII Astravelle | Cao địa Đông Bắc, cao hơnVII | Học viện/tháp đo và tuyến công vụ xuốngVII | V04có sectorcao địa; không chuyển cảNocthollowthành núi tuyết |
| IX Ẩn Thành | Thung lũng trung tâm | Suối nhánh, ruộng và kho nước; nốiIVvàVII | V01ngoại vi/Bình Minh và nhánh hầm; lõi hỏng không mở mặc định |
| X Sahr Kareth | Miền khô phía Nam | Ốc đảo, tàn tích và điểm tiếp cận ven biển; vào từTuyến Hải Đăng | V05lối tiền tuyến/điểm neo, không toàn bộ sa mạc hoặcVực Rỗng |

Chưa chốtAureliaở chính xác góc nào củaIVhay tọa độIIIsoI; đó là đầu vào bản vẽ cần kiểm đường dốc/lưu vực. Không viết tọa độ giả để tạo cảm giác bản đồ đã hoàn thiện.

## 3. Nước, núi và chuyển khí hậu

**Lưu vực phía Tây:** nước từ chân vành núi và sườn rừng chảy xuống đồng bằngValedorn, sau đó ra cửa biểnMerrowen. Nhánh sông hợp lại có quy mô tăng dần, bến lớn đặt ở đoạn đủ rộng; không có sông lớn từ biển chảy ngược lên núi nếu thiếu cơ chế riêng. Tên sông chính chưa xác lập, không dùngMerrowenvừa là tên thành vừa mặc nhiên là tên sông.

**Thung lũng trung tâm:** suốiBình Minhnuôi ruộng và điểm lấy nước ngoại thành. Điểm nối của suối vào lưu vực lớn phải xác định ở bản vẽ theo độ cao, chưa khẳng định xuyên núi để nối với cảng. Các vùng giữ cùng chính sách nước cạn/sâu181.

**Vùng trũng phía Đông:** Nocthollowcó đất đọng nước và bờ thấp; nước nguồn/thoát từ cao địa có thể tới đây nhưng đường cụ thể còn vẽ. Đường Vọng Linh cần đường đắp/đường cao, rồi dốc lênAstravelle. Tuyết cục bộ thuộc phần cao, không phủ toàn đầm chỉ vì hai nơi dùng cùngV04.

**Miền Nam:** SahrKarethkhô hơn do điều kiện vùng và nguồn nước thưa. Tiền tuyếnV05có mạch nước/giếng phục vụ trại; không sông xanh rộng khắp sa mạc. Dị tượng phong ấn có phạm vi riêng, không thay toàn bộ khí hậu bằng phép thuật không giải thích.

**Dải chuyển:** chân núi→rừngẩm→đồng bằng→bãi bồi→cửa sông; thunglũng→đường cao qua vùng trũng→sườn thông→caođịa; cảng→đảo/trạm biển→bến miềnNam→vùng khô/tiền tuyến. Chuyển bằng chuỗi module cây/cỏ/đất và địa hình, không kéo lớn sprite hoặc đổi palette đột ngột.

## 4. Mạng đường và chức năng

| Tuyến | Hai đầu và điểm chuyển | Vai trò/lý do hành trình | NPC ngoài hub có thể gặp |
|---|---|---|---|
| Đường Hoàng Gia, nhánh1 | IX↔IV | Cứu trợ, xe hàng và dân di tản; đoạn hỏng có lối đi bộ/đoàn hỗ trợ | Người sửa cầu, kiểm hàng, người tìm thân nhân |
| Đường Hoàng Gia, nhánh2 | IV↔V, quaTuViệnTroTrắng | Hành hương và văn bản lịch sử; lên cao nguyên có đường thực | Người dẫn khách, người chăm trạm nghỉ, người mang thư |
| Đường Rễ Cổ | IV↔II↔III | Rừng, sản vật và khai thác; đi theo người dẫn/được giới thiệu thay giết thủ hộ | Người giữ nguồn, người chỉ lối, thợ khai thác |
| Đèo Xương | III↔I | Hàng rèn và đồntrú; băng sụt/cáp kéo có lý do sửa | Người cứu nạn, kiểm cáp; chưa phát sinh yêu cầu dựng vùng mới |
| Hạ lưu Tây | IV↔VI qua sông và đường xe | Phân phối hàng ra biển, điều tra chuyến cứu trợ | Người lái đò, kiểm niêm, thu hái bãi lau |
| Đường Vọng Linh | IX↔VII↔VIII | Điều tra danh tính và thực nghiệm; từđầm lêncaođịa | Người giữ đèn, nhân chứng, người khảo sát |
| Tuyến Hải Đăng | VI↔đảo/trạm cổ↔X | Hải trình tránh vành đất nứt phíaNam; cần đối chiếu nhịp hảiđăng | Người hoa tiêu, giữ đèn, sửa dụng cụ |
| Đường kiểm ấn cũ | IX↔X trong mạng phongấn | Bị đứt chứng thực, không shortcut thường cho bản đầu | Chỉ mở theo hồ sơ truyện riêng, không đặt người bán vé mởsớm |

Tuyếnbiển không yêu cầu guildcó tàu, kỹnăngbơi hoặc tựlái thuyền trong bản đầu. Chuyến đi nhiệm vụ bắt buộc có đường tiếp cận được bảo đảm; giá/vé/lịch/tàu lặp thuộc MAP-08 và kinh tế. Điểm dịch chuyển cần quy tắc hai đầu đã biết, không tự bỏ lần khám phá đầu.

## 5. Năm vùng gắn vào mạng thế giới

**V01:** ĐáĐèn/ngoại viIX/BìnhMinh. Các tênTrạiBìnhMinh, SânChuôngNứttrong184là tên làm việc cho khu sau biến cố hoặc tiểu khu; không thayL01–L09của hồ sơ truyện. Cần bảng alias khi vẽ; chươngĐêmGãyẤnvẫn là cảnh riêng, không tái diễn trênmapchung cho người mới.

**V02:** sectorđườngxe/Valedorn và sectorhạlưu/cảngMerrowen nối theo dòngsông hoặc hànhlangđườngxe. Không một màn vừa chứa thànhIVvàVItoàn tỷlệ vừa gọi là3×V01. Các điểm kho/bến/đê dựng trong ngân sách vùng; khoảnghànhtrìnhxa được giải thích bằng tuyến chuyển tiếp/chuyến đi khi chưa dựng.

**V03:** sectorbiênSylvarisđi theoĐườngRễCổ và sectorhànhhươngTroTrắngđi theoĐườngHoàngGia. Hai nhánh hội tụ qua đầu mốiValedornđã biết; không tạo đường tắt xuyên rừng nốiSylvarisngay cổngAurelia. Người chơi quay lại đầu mối hoặc dùng tuyến hợp lệ đã mở. Ba tinh anh/18mẫu và18NPCđược phân bổ giữa hai nhánh, không nhânđôi.

**V04:** sectorNocthollowvùngtrũng nối đường cao/dốc lên sectorAstravelle. Bốn tinh anh/20NPCđược chia theo môi trường; hồ lạnh/thông thuộc phần cao. Một dungeonlõi sản xuất làCơSởĐènTắtđềxuất trong184, không mặc định dựng thêmNghĩaĐịaVọngLinhvàĐàiThiênVănBịKhóachỉ vì tên nằm ở nguồn.

**V05:** sectorbến/điểm vào miềnNam và sectortrại/điểmneo gần lốiSahrKareth. Đảo cổ là nút hải trình; chưa duyệt islandmapđầy đủ. Không thay kết truyệnđịa phương45bằng toàn bộ hồiVIhoặc làm lộ sốphậnngườicha ở mộtdungeonđầu.

Các dungeonmới của184là địa điểmđềxuất trong bảnđầu, không tự thay danh tính dungeonlịch sử trong nguồn. Để hiện trên bảnđồ cần đặt vị trí và ghi rõ trạng thái sảnxuất/đềxuất/tươnglai; không cộng10dungeonnguồn với5dungeonbảnđầurồi báo15đã duyệt.

## 6. Khu dân cư, điểm trú và NPC dọc đường

Mạng đường có hub an toàn và các điểmtrú nhỏ được khai báo; giữa chúng là hoangdã có NPCdịchvụ/truyện. Giữphânbổ30NPCởhub/52ngoàihub trong82slot theo184mục16. MộtNPCdi chuyển dọc đường chỉ có mộtIDvà nơi cưtrú chính; điểm dừng không tạo thêm hồ sơ.

Nút giao cần chức năng thật: cầu có người sửa/giữ, bến có người vận hành, đèo có cứu nạn, nguồn nước có người trông. Điểm gặp có đồ nghề, nơi trú, tuyến tiếp tế và dấu dẫn; không đặtNPCngẫu nhiên giữa ô quái chỉ để đủ52người. NPCđơn lẻ không tự cấp safetyradius. Thời gian tìm lại/ca trực ghi trong nhật ký theoNPC-04.

Mỗi đoạn bắt buộc có đường quay lại nơi chuẩn bị; không spawnngười vào nước sâu, boss hoặc váchsau chuyếnđi. Điểm arrival/departurecụthể thuộcMAP-03. Quái leashkhôngtheongười qua điểmchuyểnvùng; hànhvi chuyển trongcombat theoCOMBAT, không dùngchuyếnđòđểdupethưởng.

## 7. Mở thế giới mà không phá tiến trình

Levelvùng là lời khuyên chiến đấu, không là cổng vôhình chặn người khám phá thành an toàn. Trở ngại có nguyên nhân: cầu hỏng, thiếu chứngthực, thời tiếtđèo, tuyếnbiểnchưaan toàn. Questchính có cách vượt solo và không phụ thuộc tổđội/ngẫu nhiênđồrơi/thời gianonline.

Mởđườngcá nhân dùngphầntruyệnriêng hoặc quyền đi/đối thoại; không tựsửacầuchung chỉcho mộtngười. Cầu dùngchungđãhoạtđộng vẫn dùngđược dù mộtngườichưa làmquest kể việc sửa. Không dời NPCcủangườikhác hoặc làm biếnmất cảđịa danh sau lựachọn.

Mười thành có thể hiện ở bảnđồthếgiới nhưng địađiểm chưa sảnxuất phải ghi rõ chưa mở, không tạo nút giả có thểđi. Bảnđồ người chơi tránh lộ đườngkiểmấn/địađiểmbímậtchưa biết; MAP-02sẽđịnhnghĩa các lớp. Chưa lấy sơđồ nội bộ chứa spoiler làm minimap.

## 8. Bàn giao trước bước vẽ

**Phạm vi bổ sung hiện hành:** bản vẽ phải có W06 ở vành Đông Nam, hai đại bản doanh trên hành lang Tây/Đông của IX, đường điều vận tới tiền trạm, và các điểm truy cập GM01/GA01/GA02. Tách lớp PvE/PvP/bảo hộ/instance, không đặt nhà bang và arena thành đảo địa lý giả. Chi tiết, ID và sáu cứ điểm dùng [187](187_MAP_DONG_BO_PHE_BANG_HOI_VA_W06.md).

Cần vẽ bảnđồ thamchiếu có hướngBắc, tỷlệ tươngđối và thướcđơnvị saukhi chốt kíchthước;10điểmthành; dãynúi/caođộ; biển/bờ/đảo; lưu vực/hướngchảy;8tuyếntrên; boundary5vùng vàsector; nútan toàn/trú/chuyển; lớp chưa sảnxuất và lớp truyệnbímật táchriêng. Giữ cùng tọađộ/IDgiữa bảnđồ thếgiới và hồsơđường, không dùng mộtảnh có toàn bộ thôngtin đểvừa làmspoilerdoc vừa làmUI.

Điều kiện kiểm: sông theo độ dốc; biển và đảo nối được; không nhầm đầm với cao địa; không nhét mười thành vào năm map; đường bắt buộc có lối quay lại. Không tạo ngân sách mới: giữ 90 mẫu quái, 82 NPC, 16 tinh anh, 5 boss map, 5 dungeon và 62 rương. Diện tích 15× không tính cả lục địa chưa dựng. Chưa xác nhận thời gian chạy hoặc FPS.

**Điểm dừng:** phầnmô tảMAP-01hoànthành bước chuẩn bị, nhưng taskgiữmộtphần vì chưa cóbảnđồvẽ/tỷlệ/kiểmtuyến. Tiếnđộ **118hoànthiện /11mộtphần /384chưa thiết kế =513**. Bước tiếp: vẽsơđồđịalýthamchiếu theo brief này nếu tiếp tục nhánhMAP-01; không tự báo đãvẽ. CAP-01kinhtếvẫn mở.

Nguồn: [địa lý truyện](../mmorpg-story-v1/03_DIA_LY_VA_HANH_TRINH.md), [nguồn gốc mười thành](../mmorpg-story-v1/00_NGUON_NEN_TANG.md), [ngân sách15](15_PROD_06_PHAM_VI_VA_NGAN_SACH.md), [hồ sơ vùng184](184_MAP_04_HO_SO_NAM_VUNG_THE_GIOI_MO.md), [thời tiết181](181_MAP_10_THOI_GIAN_THOI_TIET_HE_SINH_THAI.md).
