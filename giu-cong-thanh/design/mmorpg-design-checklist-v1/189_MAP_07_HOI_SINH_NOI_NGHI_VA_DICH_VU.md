> **Rà soát sâu r002 ·22/10/2026:** [Phân tích và quyết định193](193_RA_SOAT_SAU_MAP_07_09_R002.md) bổ sung scope hồi sinh, quyền dịch vụ, transfer và thông tin bản đồ. Các quy tắc r002 thay điểm mơ hồ của r001; chưa runtime/vẽ.

# MAP-07 — Điểm hồi sinh, nơi nghỉ và mạng dịch vụ

Ngày22/10/2026. Hồ sơ thiết kế hoàn thiện; chưa vẽ, đặt tọa độ hoặc triển khai. Áp dụng MMORPG pixel2.5D, không sửa thủ thành. Giữ công thức/chi phí/quyền hồi sinh tại104, không tự thay vì mở map phe.

## 1. Bốn chức năng phải tách riêng

**Điểm hồi sinh** là vị trí server được phép đặt nhân vật sau chết. **Checkpoint truyện** lưu tiến độ và đường quay lại. **Nơi nghỉ** cho phép các thao tác ngoài combat theo111. **Điểm dịch vụ** cung cấp một hoặc nhiều chức năng theoNPC. Có thể cùng địa điểm nhưng không tự suy ra lẫn nhau: gặp thợ rèn không mở hồi sinh, ngồi ghế không miễn nhiễm, mở checkpoint không reset dungeon.

Mỗi sector gameplay có thể vào độc lập phải có điểm hồi sinh mặc định hợp lệ hoặc điểm gắn cửa vào của hành trình đã tiếp cận. Vùng nội dung nhiều sector không dùng một hub xa làm mặc định cho mọi nơi. Ưu tiên checkpoint đã đăng ký trong deathscope hiện tại, rồi điểm mặc định của sector, cuối cùng điểm trả về đã ghi nếu sector đóng. Không hồi sang đầu kia chưa mở đường. Điểm phụ cần đăng ký khi còn sống, ngoài combat và đúng quyền; đăng ký không hồi máu, mở warp hoặc reset cooldown. Không mở hồi sinh ở mọi lửa trại/NPC ngoài rừng.

## 2. Mạng điểm dự kiến

| Không gian | Điểm mặc định | Điểm phụ/nơi nghỉ và ý nghĩa |
|---|---|---|
| V01 | TrạmCầuLau hoặc khu cứu trợ tương ứng mốc truyện | Ngoại thành Tây là điểm tiếp nhận sau mở đầu; SuốiSỏiTrắng có chỗ nghỉ nhưng không tự thànhcheckpoint. Alias với TrạiBìnhMinh phải đối chiếu trướcvẽ |
| V02 | BếnCứuTrợ | Một trạm đường đê có bảo hộ để nghỉ/đăng ký điểm phụ; bếnnhánh chỉ mở dịch vụđò nếuđược phép |
| V03 | Sector rừng: Trạm Khế Ước; sector hành hương: trạm tiếp nhận riêng hoặc cửa vào đã tiếp cận | Hai deathscope riêng; không chết ở nhánh hành hương rồi nhảy về rừng chưa tới |
| V04 | Mỗi sector vùng trũng/cao địa có điểm hợp lệ riêng; Quán Trạm Chắn Gió phục vụ sector chứa nó | Không đưa người chết ở vùng trũng lên cao địa chưa tới; vị trí trạm phụ cần bản vẽ xác nhận |
| V05 | Khu chữa trị TrạiBaTuyến | Một trạmquânnhu bảo hộ gần tuyếncôngvụ; điểmneo/bosssânkhônglà điểmhồi sinh |
| FM01 | Sân tiếp nhận đúngphe | Điểmtrởvềphép, không thayđiểmrespawn mọiPvE; không chọn trụsởđốiphe |
| GM01 | Tiềnsảnhbang/điểmtrảhợplệ | Không làcheckpoint chiếnđấu; mấtquyềnkhách trảđiểmtrunglập |
| W06 | Trạmphe tươngứng | Chỉhai trạmlàđiểmvềmặcđịnh; chiếmcứđiểm khôngmởhồisinh tạiđó |
| GA01/GA02 | Điểmtrận hoặc sảnh theo ruleset | Hồi sinh trongtrận theoPVP; kếttrậnvềsảnh, khôngquaylạibằngtiền |
| Dungeon | Điểmchuẩnbị/checkpoint củarun | Không chuiquacửabosskhóa; bỏrunvềđiểmngoàiđãghi |

Các điểm phụ là đề xuất vị trí chức năng, chưa thêmNPCcó tên hoặc dựng trạm mới ngoài ngân sách. Tất cả phải có zonean toàn thật, surface hợp lệ, không nước sâu và khôngđượcquáitrựctiếptruyđến. Mưa, đêm hay đổiNPCtrựckhôngxóađiểmđãđăngký.

## 3. Đăng ký và hồi sinh

Tương tác mốc/nhânviên tiếpnhận → hiện tênđiểm,sector,quyền trởvề → xácnhận đăngký. Thayđiểm khôngmấtXP/đồ và khôngphụcHPmiễnphí. Serverlưucharacter+checkpointId+scope/quyền; khôngdùngtọađộclient làmnguồnthật.

Khi chết, dùng bảng104: hiện phí/vậtphẩm, hồi tại chỗ hoặcđiểmmàscopechophép, cứu trợkhi thiếu tiền, lượtđồngđội và skillMụcSư. Không đổi phí đã chốt/cap45trong104 chỉvìW06cóquái60; kinh tế60nếu cầnlàhồsơcân bằngriêng. Không trừtiềnnạp, XP hoặc làmmấttrangbị.

W06khôngcho trảphíđứngdậy giữađiểmtranh; trạm vàskillrez chỉtheorulesetchiếntrường đượcduyệt. Dungeonrun vàbossattempt giữquota104; điquaNPC/checkpoint khôngresetlượt. Người chết không thể đăngkýđiểm mới để néphí hoặc nhảyđường.

## 4. Phân mạng dịch vụ

Hub từng vùng có khả năng tiếp cận: sửa/rèn cơ bản, mua tiêu thụ, quản lý vật phẩm, thôngtin nhiệm vụ, hướng dẫn và nơi nghỉ. Dịch vụ nângcao như chợliênvùng/tínngưỡng/khảm còn điều kiện riêngGEAR/FAITH/TRADE; không mỗihubtự có tấtcảmenu.

Ngoài hoang dã có dịch vụ chuyên biệt: thợmộc cầu bán/traodụngcụ hợp nghề; ngườigiữnguồn nhận mẫu/thảo dược; láiđò vậnchuyển; trạmkhảosát đọc vậtchứng; người giữđền kể/tổchứcnghilễ. Có chức năng vàcốttruyện, không chỉNPCphụđứnggiaoquest. Giữ30NPCtronghub/52ngoàihub thuộc82hồsơlõi; mộtNPCkiêm chức năng vẫn chỉmộtID.

FM01cóquânvụ/đăngkýchiếntrường/xếphạng phe; GM01cókho/quỹ/quyềnbang; W06trạmcóđiềuphối/nộpkiện/chữatrị. NPCmới cần dựtoánFACTION-12, không lấyngười từ82rồibáocóđủ.

Kho cá nhân, kho bang và điểm nộp kiện là ba loại khác nhau; NPCđứng cạnh nhau không làm chung quyền sở hữu. Mua/sửa dùng quote/receipt173, trừ một lần, đủ điều kiện và giá rõ. Thuế/phí/giá chuyên biệt chưa được chốt thì không tự thêm ởMAP. Tínngưỡngkhônglàđiềukiệnbắtbuộcđượchồisinh; nghềhắcámvẫnđược dùngdịchvụtrunglập.

## 5. Nghỉ, tìm lại và khả năng tiếp cận

Nghỉ là trạng thái ngoàicombat ởnơi hợp lệ, khôngpauseonline; regen/đổipreset theoSTAT/111, khôngthêmhồimáu tức thì tạiđây. NPCtheoca phải có lịch/điểmhẹn hoặc người thay ởdịchvụthiếtyếu, khôngkhóangườichơi vìnhầmgiờgame. NPCtruyệndi chuyển hiệnđiểmtìmlại trongnhậtký; không radarbiếtmọibímật.

Minimap hiệndịcvụđãbiết bằngicon vàtên, điểmhồi sinh hiện “Đãđăngký”; hồi sinhtạiđâuvàdịchchuyểnđếnđây làhaitùychọn khácnhau. Nhữngchỗnguyhiểmkhôngvẽbiểutượnglá chắn antoàn. Quyềnkhách/đối phehiệnlýdokhôngvào, không nútmờvôgiải thích.

Kiểm triểnkhai: checkpointkhôngspawntrongvách/nước/boss; khôngresetquotaquaNPC/relog; hếttiềnvẫncóđườngcứutrợ104; pheđịchnhậnhealđúngscope; NPCmấtquyền khônglàmmấtđồ; mưa/đêmkhôngđóngmọidịchvụ. Chưa cókếtquảruntime.

MAP-07hoànthiệnhồsơ. Các vịtrí phảiđượcvẽ/đối chiếu ởMAP-01/03; chưađóngNPC/GUILD/PVE/PVP. Nguồn: [104](104_COMBAT_13_CHET_VA_HOI_SINH.md), [111](111_COMBAT_14_DISCONNECT_CHUYEN_VUNG_VA_DOI_DO.md), [188](188_MAP_06_PHAN_LOP_KHU_VUC_VA_QUYEN_GIAO_TRANH.md), [187](187_MAP_DONG_BO_PHE_BANG_HOI_VA_W06.md), [173](173_CUR_05_BAO_GIA_VA_THU_TU_TRU_TIEN.md).


## Bổ sung r002 — quyền dịch vụ và hồi sinh theo sector

Điểm đăng ký dùng character+deathscope+checkpoint, không dùng tên vùng làm khóa duy nhất. Ngân Ấn là ví account/server theo170; quote hồi sinh xét khả dụng/hold đúng ví, không tạo ví nhân vật. Quyền checkpoint vẫn thuộc nhân vật, không mở chung vì chia sẻ số dư.

NPC di chuyển không tự reset stock/quote. Nếu quá xa, đổi scope, đóng ca hoặc tương tác bị ngắt trước accept thì không tự thu tiền; giao dịch đã commit trả receipt, không hoàn tác chỉ vì NPC bước đi. NPC quan trọng có lịch và cách tìm lại, không phải lúc nào cũng có vị trí realtime trên map.

W06/arena còn cần ruleset thời gian chờ, skillrez/quota và phí/không phí ở FACTION/PVP. Hồ sơ map chỉ chốt vị trí/quyền điểm, không báo hồi sinh PvP đã thiết kế đủ. Giữ nguyên luật PvE104 và điểm dừng trước vẽ.
