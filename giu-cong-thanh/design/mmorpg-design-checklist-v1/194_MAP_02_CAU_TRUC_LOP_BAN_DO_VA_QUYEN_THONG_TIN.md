> **Thế giới r002 ·22/10/2026:** [Tên từng khu,10đấtẩn và màu theo tiến trình](201_MAP_01_MUOI_DAT_AN_VA_MAU_THEO_TIEN_TRINH_R002.md); [bản xem](/design-preview/elarion-map-r002/index.html). Vùng mở có màu/chưa mở xám; cấp10thấyV03xám; đấtẩn chưa phát hành không tự mở ở60. Giữ6vùng hiện tại và525task:127hoànthiện/11mộtphần/387chưathiếtkế. Chưa kết nối game/backend.

# MAP-02 — Cấu trúc lớp bản đồ và quyền thông tin

Ngày 22/10/2026. Hoàn thiện hồ sơ mô tả trước vẽ; chưa tạo ảnh, UI, dữ liệu map chạy được hoặc migration. Dùng cho MMORPG pixel2.5D, giữ nguyên thủ thành. Đây là cấu trúc tài liệu và hợp đồng hiển thị, không thay quyền khám phá191 hoặc combat188.

## 1. Một hệ địa điểm, ba sản phẩm khác nhau

| Sản phẩm | Người sử dụng | Nội dung | Không được dùng thay |
|---|---|---|---|
| Bản đồ địa lý tham chiếu | Người viết truyện, thiết kế vùng, mỹ thuật | Vị trí tương đối, sông núi, đường, thành, khí hậu, vùng sản xuất | Không coi hình ảnh địa lý là collider hoặc navmesh |
| Bản đồ người chơi | Worldmap, bản đồ vùng, minimap và overlay hoạt động | Thông tin đã biết/công khai và quyền hiện tại của người xem | Không đọc thẳng toàn bộ bản đồ nội bộ chứa bí mật |
| Bản đồ vận hành nội dung | Người thiết kế quest, NPC, encounter và vận hành | Trigger, tiến trình, scope, đường tuần tra, điểm sinh/return, trạng thái và dependencies | Không hiện marker vận hành thành nhiệm vụ công khai tự động |

Ba sản phẩm tham chiếu cùng địa điểm bằng ID. Không vẽ ba thế giới khác nhau rồi cố ghép bằng tên. Thay tên hiển thị không đổi ID; nhân vật đã mở checkpoint vẫn tham chiếu đúng địa điểm sau đổi tên.

## 2. Danh mục lớp để chuẩn bị bản vẽ

| Lớp | Nội dung nguồn | Khi được hiện cho người chơi |
|---|---|---|
| G01 Địa hình | Bờ biển, núi, hồ/sông, loại nền, dải sinh thái | Theo độ chi tiết đã biết, không tự tiết lộ lối bí mật |
| G02 Đường và nút hành trình | Đường lịch sử, bến, trạm, node/edge chuyển vùng | Đường công khai hoặc đã học từ khám phá/NPC; dùng được còn kiểm quyền |
| G03 Sản xuất | Boundary V01…V05/W06, sector, phần chưa dựng | Nhãn chưa mở khi cần; không cho click đi vào cảnh chưa tồn tại |
| P01 Dân cư và dịch vụ | Hub, nơi nghỉ, chức năng NPC, mốc đăng ký | Đã gặp hoặc được hướng dẫn; thể hiện đúng khả năng dùng |
| P02 Khám phá | Fog, POI đã biết, ghim cá nhân, thông tin tham khảo account | Chỉ trạng thái của người xem theo191 |
| P03 Nhiệm vụ cá nhân | Đầu mối, khu tìm kiếm, checkpoint truyện | Đúng queststate/owner và mức thông tin được nhân vật biết |
| P04 Tổ đội | Đồng đội, ping và điểm hẹn | Cùng quyền/scope, có thời hạn; không mở hộ fog |
| W01 Phe và chủ quyền | Trụ sở, trạm, owner phe/bang, contest và lịch | Phần công khai trong186/187, không kèm radar địch |
| W02 Chiến thuật | Kế hoạch bang/phe, ping trận, vị trí được chia sẻ | Membership/team hợp lệ; quyền hết thì thu hồi |
| O01 Luật không gian | Surface, collider, safe volume, deathscope, entry/return | Nội bộ; người chơi chỉ thấy nhãn/ranh giải thích cần thiết |
| O02 Vận hành nội dung | Spawn, patrol, trigger, run/attempt, điều kiện mở | Nội bộ, trừ tín hiệu đã được thiết kế thành trải nghiệm |
| S01 Bí mật tác giả | Đường kiểm ấn, sự thật lịch sử, điểm chưa lộ | Chỉ bản nội bộ; tạo bản diễn giải riêng sau khi quest cấp quyền biết |

Chữ G/P/W/O/S là mã lớp thiết kế, không taskID mới hoặc một schema đã triển khai. Không bắt một ảnh phải chứa đủ12lớp cùng lúc. Xuất các overlay cùng mốc tham chiếu để dễ đối chiếu và đọc.

## 3. Cấp độ hiển thị không đồng nghĩa cấp độ chi tiết hình

**Worldmap:** định hướng lục địa và tuyến đi, không vẽ từng quái/cây/rương. Trụ sở phe là địa điểm; GM01/GA01/GA02 là điểm truy cập hoạt động theo187, không biến thành đảo trên biển chỉ để dễ đặt icon.

**Bản đồ vùng:** đường, sector, hub và POI có quyền biết; chọn tầng khi cần. Không lấy một ảnh worldmap phóng lớn để giả bản đồ vùng. Vùng chưa dựng chỉ có thông tin tham khảo và trạng thái, không có đường dẫn tới tọa độ giả.

**Minimap:** đường gần, tầng hiện tại, dịch vụ/quest hợp lệ, bạn đồng hành và cảnh báo ngắn. Không nhét huy hiệu bang, lịch mùa, mọiPOI và toàn bộ buff lên cùng một góc. Dấu ngoài tầng có nhãn lên/xuống nếu đã biết lối, không kéo đường thẳng xuyên sàn.

**Map trận:** chỉ phạm vi W06 hoặc arena và lớp quan hệ tương ứng. Người cùng phe ởGA02 vẫn là đối thủ theo matchteam; màu biểu tượng quan hệ lấy ruleSet hiện tại, không suy từ cờ phe cố định.

Phong cách pixelV4 giữ nguyên. Chữ, nhãn, ký hiệu khóa/owner/thời gian là lớp UI riêng, không vẽ chết vào nền. Kích thước icon theoART-07 khi phù hợp; chưa đặt scale bản đồ hoặc vẽ một bộ icon mới tại đây.

## 4. Mô hình quyền cho một marker

Một POI có thể tồn tại trong master nhưng không được gửi/hiện cho mọi người. Phân biệt:

1. **Tồn tại:** địa điểm có trong thiết kế hoặc dữ liệu đang phát hành.
2. **Được biết:** người chơi có thể biết tên/vị trí từ nguồn hợp lệ.
3. **Được nhìn hiện tại:** đúng phạm vi, trạng thái/độ mới và quyền chia sẻ.
4. **Được tương tác:** đủ cấp, phe, quest, roster, vật phẩm hoặc quyền dịch vụ.
5. **Được nhận thưởng:** claimscope/đóng góp/ledger, tách khỏi việc nhìn marker.

Ví dụ rương đã biết có thể hiện nhưng đã nhận thưởng; điểmwarp đã biết vẫn khóa vì chưa đăng ký; nhân chứng được nhật ký chỉ tới nhưng không công khai vị trí tức thời nếu đang di chuyển. Không dùng một cờ“visible=true” để cấp tất cả quyền.

Khi nhiều điều kiện cùng tác động: dữ liệu bí mật chưa cấp quyền thì không gửi; quyền tác chiến hết thì thu hồi; thông tin địa lý công khai đã học vẫn giữ; tương tác đang bị chặn hiện lý do phù hợp nhưng không để lý do tự tiết lộ bí mật. Tên quest chưa biết không được lộ trong thông báo “Bạn chưa hoàn thành quest…”.

## 5. Nhiệm vụ cá nhân trên thế giới chung

Questmarker theo character+queststate+storyscope, không theo việc bạn cùng nhóm đã hoàn thành. Người hỗ trợ có thể thấy chỉ dẫn chung của chủ cảnh khi được phép, nhưng không thay lựa chọn hoặc nhận manh mối cá nhân tự động.

Một cây cầu dùng chung đã đi được không được vẽ thành cầu sập chỉ vì nhiệm vụ kể việc sửa của người chơi chưa xong. Có thể kể sửa một hạng mục khác, dùng lớp truyện riêng hoặc hồi tưởng. Nếu thật sự có hình học riêng, phải khác scene/scope; không để hai người cùng đứng ở một tọa độ mà một người rơi vì thấy cầu khác.

NPCchung vẫn có vị trí dịch vụ hợp lệ; phiên bản bị thương/mất tích/chết trong tuyến cá nhân dùng storyscope hoặc vai thay thế đã thiết kế. Không tạo haiNPCmang cùng tên ngoài cảnh khiến người chơi không biết nói chuyện với ai. Alias cũ trongV01 phải có bảng đối chiếu trước vẽ, không tự hợp nhất TrạmCầuLau/ngoại thành/TrạiBìnhMinh nếu chúng là ba điểm khác nhau.

## 6. Cốt truyện bản đồ và các nguồn tin

Mỗi thông tin biết quaNPC/sách/bản đồ mua về cần ghi **nguồn, thời điểm và độ chắc chắn**. Bản đồ buôn đường có thể thiếu lối nhỏ nhưng không lừa người chơi bằng thông tin sai tùy tiện. Thông tin lịch sử mâu thuẫn được trình bày như lời kể/giả thuyết, không đè lên tọa độ gameplay đúng.

Đầu mối có thể chỉ một tiểu khu thay vì pin chính xác: người giữ nguồn nói có lối phía bờ lau; người dẫn đèo mô tả mốc đèn; giấy hàng ghi kho/ca trực. Sau xác minh thì nhật ký và bản đồ cập nhật. Không lấy cơ chế“không hiện pin”để buộc người chơi dò từngpixel hoặc hỏi NPCngẫu nhiên; dấu vật lý và chỉ dẫn phải đủ hiểu.

Bản đồ spoiler của tác giả không được xuất như sách collectible đầu game. Khi người chơi khám phá bí mật, tạo POI/nội dung mô tả riêng theo tiến độ; không gửi toàn bộ lịch sử thật xuống rồi chỉ che một lớp đen.

## 7. Đồng bộ dữ liệu và cập nhật phiên bản

Mỗi POI cần ID, loại, map/sector/surface, anchor, tênhiểnthị, nguồnbiết, quyềnvisibility/interaction, mức thông tin, bản revision và liên kếtquest/encounter/dịchvụ khi có. Geometry/safevolume/deathscope là bản vận hành riêng tham chiếuID, không chứa cả luật trong chuỗi tên.

Tên và vị trí có thể đổi theo revision nhưng tiến trình không bị reset tùy ý. Nếu địa điểm bị gộp/di dời cần bảng oldID→newID và chính sách checkpoint/ghim; khi không thể giữ tọa độ thì đưa người tới fallback hợp lệ, không xóa quà để sửa map.

Quyền và dữ liệu nhạy cảm xử lý server; clientcóthểcache phầnđịalýcôngkhai đểnhẹtải nhưng không coi cache làbằngchứng đã mởwarp. PostgreSQLlưu quyền/progress/IDổnđịnh theoDATA; fileảnhbảnđồ làasset córevision. Đây làthiếtkế, chưaSQLhoặcAPIcontract.

## 8. Ba ví dụ đọc diễn

**Người mới ởV01:** worldmap biết cóValedorn qua biểnđường; mapvùng mở phầnđãđi; nhật ký chỉsuối trongvùng đã được hướng dẫn. Không hiệnNPCngoàirừng chưa nghe tới, không mởwarpValedorn và không tiết lộ đườngkiểmấnIX–X.

**KỵSĩ ởV04:** chọn đường cao tới trạm có mặt đất hợp lệ; minimap hiện đúngtầng và điểm gọi ngựa đã biết. Có thể nhìn thấy thápAstravelle từ xa nhưng không nhận quyền tới tháp, mởcheckpoint hoặc bỏ qua dungeon.

**Bang trongW06:** mapcôngkhai owner/contest vàlịch, đội cópingđườngvậnchuyển được phép. Địch đangẩn không hiệnnhưchấmđỏtoànmap. VàoGA02thayoverlaytheomatchteam; ratoànthếgiới quaylạiquan hệphe, không giữmarkerđịch từtrận.

## 9. Điều kiện nghiệm thu và đầu vào vẽ

Trước vẽ cần danh mụcID/lớp, định nghĩa cácview và phạm vi nguồn, chốt masterrevision; các điểm chưa rõ tọa độ ghi pendinglayout. Bảnvẽ phải cólegend/hướngBắc/thước tươngđối vàoverlaytáchbạch, không nhétspawn/spoiler lênbảnngườichơi.

Khi dựng phải kiểm: cùng mộtPOIkhông lệch giữa worldmap/vùng/minimap; pin/đường đúngsurface; questkhác tiếnđộ không ròspoiler; đổi phe/bang thu hồi đúngmarker; rewardkhôngtheofog; đườngchưa dựng khôngbấmđược; di dờiPOIgiữprogress; màuquan hệGA/W06đúngscope. Chưa có QA ảnh hoặc runtime.

MAP-02hoàn thiện hồsơ mô tả; không đóngMAP-01/03/05/11hoặcFACTION-11. Tổng525mục: **124hoànthiện /11mộtphần /390chưa thiết kế**. Vẫn dừng trước vẽ. Các bước chuẩn bị bằng chữ có thể làm tiếp làMAP-03điểmchuyển/đườngquay lại, MAP-05mậtđộPOI vàMAP-11vật tươngtác; chưa phải đã duyệt bảnvẽ hoặc thêmmap.

Nguồn: [địa lý185](185_MAP_01_DIA_LY_ELARION_VA_MANG_DUONG.md), [đồng bộ187](187_MAP_DONG_BO_PHE_BANG_HOI_VA_W06.md), [luật vùng188](188_MAP_06_PHAN_LOP_KHU_VUC_VA_QUYEN_GIAO_TRANH.md), [khám phá191](191_MAP_09_KHAM_PHA_SUONG_MAP_VA_CHIA_SE.md), [rà soát193](193_RA_SOAT_SAU_MAP_07_09_R002.md), [chuẩn icon42](42_ART_07_CHAN_DUNG_AVATAR_ICON.md).
