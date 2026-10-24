> **Bước tiếp đã thiết kế:** [189](189_MAP_07_HOI_SINH_NOI_NGHI_VA_DICH_VU.md), [190](190_MAP_08_MANG_DI_CHUYEN_VA_CHUYEN_VUNG.md), [191](191_MAP_09_KHAM_PHA_SUONG_MAP_VA_CHIA_SE.md). [Điểm dừng trước vẽ192](192_TONG_HOP_MAP_07_09_VA_DIEM_DUNG_VE.md). Chỉ hồ sơ hoàn thiện, chưa runtime.

# MAP-06 — Phân lớp khu vực và quyền giao tranh

Ngày 22/10/2026. Hoàn thiện hồ sơ luật khu vực cho MMORPG Ẩn Thành, pixel 2.5D trên web/PC. Chưa code, vẽ volume, migration hoặc kiểm thử runtime. Không sửa thủ thành. Hồ sơ này cụ thể hóa phạm vi của [bản đồ phe/bang187](187_MAP_DONG_BO_PHE_BANG_HOI_VA_W06.md), không tự mở PK ngoài khu được chỉ định.

## 1. Bốn lớp độc lập của một địa điểm

Một nơi phải khai báo riêng: **không gian** (world/instance và tầng mặt đất), **luật vùng** (an toàn/PvE/chiến trường), **quan hệ** (phe/bang/đội trận) và **trạng thái hoạt động** (chuẩn bị/đang đấu/kết thúc). Màu đất, biển phe, NPC đứng gần hoặc bang sở hữu không thay thế dữ liệu quyền.

Ví dụ: rừng W06 vẫn là chiến trường dù cây giống Sylvaris; cùng một template arena nhưng sảnh chuẩn bị an toàn và lúc thi đấu có đối thủ theo matchteam. Cứ điểm W06 đổi chủ không biến thành vùng an toàn; nó vẫn có thể bị tập kích trong luật hoạt động đã công bố.

## 2. Danh mục luật vùng

| Mã luật | Nơi dùng | Giao tranh | Dịch vụ, nguy hiểm và quyền đi |
|---|---|---|---|
| Z-SAFE | Hub dân cư, điểm trú nhỏ được khai báo | Không sát thương/CC PvP hoặc PvE lên người và NPC được bảo vệ; không bắn từ trong ra ngoài | Không spawn địch, không sát thương môi trường; dịch vụ theo vai trò |
| Z-PVE | Hoang dã V01…V05 | Đánh quái hợp lệ, không đánh người chơi kể cả khác phe | Có NPC ngoài hoang dã; nguy hiểm môi trường chỉ từ cấu hình được chốt |
| Z-ELITE | Nhánh tinh anh/boss thuộc PvE | Vẫn là PvE, không tự biến thành PK để tranh boss | Có báo nguy hiểm/lối vòng; quyền credit/loot theo COMBAT |
| Z-STORY | Cảnh riêng và dungeon truyện solo | Quan hệ theo encounter, không PK tự do | Quyết định thuộc tiến trình cá nhân; người hỗ trợ theo quyền cảnh |
| Z-DUNGEON | Dungeon tổ đội/thử thách | PvE theo encounter và nhóm, không mở friendly fire mặc định | Điều kiện/lượt và điểm quay về theo PVE/QUEST |
| Z-FACTION-HUB | FM01-HM, FM01-TT | An toàn như Z-SAFE | Phe đúng hoặc người trung lập trong luồng chọn phe được phép; không có raid trụ sở trong phạm vi này |
| Z-GUILD-HOME | GM01 | Không PK; sân tập dùng mục tiêu giả hợp lệ | Theo thành viên/khách/quyền công trình; không farm XP/loot |
| Z-WAR-SAFE | Hai tiền trạm W06 | An toàn, không chiếm được, không hỗ trợ xuyên biên để đánh ngoài | Chỉ phe tương ứng, điểm trở về và nhiều cửa xuất quân |
| Z-WAR | Hoang dã/cứ điểm W06 | Khác phe là địch; cùng phe không gây hại | Cấp40–60 và đã có phe; tài nguyên/kiện theo hoạt động |
| Z-ARENA-LOBBY | Sảnh GA01/GA02 và lúc chuẩn bị | Chưa cho gây hại, kể cả đội sắp đối đầu | Roster/ready check, lối ra trước khi khóa trận |
| Z-ARENA-MATCH | GA01/GA02 đang diễn ra | Quan hệ theo đội trận; hai bang cùng phe có thể đối đầu | Không lấy quan hệ arena ra áp lên thế giới chung |
| Z-EVENT | Vùng sự kiện có thời hạn | Bắt buộc chỉ rõ kế thừa một luật trên | Không có “event thì tự cho PK”; hết sự kiện quay về luật nền hợp lệ |

Z-ELITE là lớp nội dung kèm luật PvE, không là cách vượt chính sách an toàn. Event không được phủ đè lên hub để làm NPC dịch vụ bị giết. Nếu cấu hình thiếu luật, hệ thống không cho phát sinh quyền tấn công mới; giữ người ở điểm hợp lệ hoặc từ chối vào thay vì suy đoán.

## 3. Ma trận mục tiêu và hỗ trợ

| Tình huống | Gây hại | Hồi máu/buff/hồi sinh |
|---|---|---|
| Hai người khác phe trong V01…V05 | Không | Cho phép theo quyền ally/party của PvE và recipientMask kỹ năng |
| Hai người cùng phe trong W06 | Không, cả pet/AoE/DoT/reflect | Có nếu cùng scope, đủ điều kiện kỹ năng; không hỗ trợ xuyên ranh bảo hộ |
| Hai người khác phe trong W06 | Có khi đều thuộc Z-WAR và đủ kiểm tra combat | Không, kể cả còn cùng party cũ |
| Hai đội đối đầu trong GA đang đấu | Có theo matchteam, không cần khác phe | Không giữa hai đội |
| Đồng đội trong GA | Không | Theo kỹ năng/encounter hợp lệ |
| NPC dịch vụ/nhân chứng được bảo vệ | Không | Không dùng heal/buff để tạo đóng góp hoặc exploit kinh tế |
| Quái hợp lệ | Theo Z-PVE/Z-WAR/encounter và guard trung lập | Không mặc định heal quái; conversion được duyệt giữ luật riêng |
| Sinh vật nền | Không | Không; không có encounter/loot giả |

Pet, summon, đạn, bẫy, vùng đất, aura, DoT và đòn phản chịu cùng luật với chủ và action scope. Không cho đặt bẫy ở map PvE rồi đổi sang chiến trường để nó nhận quyền PK. Người chơi không phải mục tiêu hợp lệ chỉ vì client gửi ID địch. Ngoại trang và hiệu ứng cờ phe không quyết định quan hệ.

Nhóm PvE khác phe không bị buộc giải tán ngay khi một người mở giao diện W06, nhưng không được mang quyền hỗ trợ party vào chiến trường. Trước khi vào, giao diện nêu rõ không thể triển khai đội hỗn hợp ở đó; hệ thống tạo đội chiến trường hợp lệ theo FACTION/PARTY, không âm thầm kéo bạn cùng nhóm sang tiền trạm đối phương.

## 4. Ranh an toàn phải khớp cảnh và va chạm

Ranh bảo hộ gắn với cổng, tường, sân trạm, mốc đèn hoặc hàng rào; minimap và dấu ngoài cảnh phải cùng volume với server. Vùng cao/thấp, cầu trên suối và nhà nhiều lớp dùng surface đúng, không xét chỉ bán kính 2D. Không cho người dưới cầu nhận bảo hộ của phòng trên cao.

Không bắn, đặt vùng gây hại, kéo dây hoặc hồi máu người đang giao tranh qua biên an toàn. Hình vẽ đạn có thể tắt ở ranh, nhưng logic server phải chặn trước áp sát thương; không gây hit rồi hoàn HP. VFX toàn màn không tự cấp quyền đánh xuyên ranh. NPC ngoài hoang dã không tạo vùng bảo hộ chỉ vì đang nói chuyện.

Giữ nguyên COMBAT-14: **combat lock10giây** tính từ tương tác combat hợp lệ theo hồ sơ nguồn, không đặt timer khác tại MAP-06. Người đang combat không được bước qua biên để nhận miễn nhiễm; server chặn ở phía ngoài với thông báo rõ. Gói lỗi hoặc mục tiêu đồng phe không được làm mới combat lock giả để giữ người mắc kẹt. Có nhiều đường rút và vị trí thoát tầm nhìn, tránh hành lang bị chặn vô hạn. Thiết kế cửa trạm phải kiểm cùng tốc độ di chuyển/tầm đánh thực, chưa khẳng định chống camp đạt yêu cầu khi chưa playtest.

Từ trong trạm đi ra phải qua điểm ra hợp lệ; không bắn trước rồi bước ra để né pha chuẩn bị. Không có quyền bất tử mang từ trạm ra đánh. Luật bảo vệ hồi sinh nếu được PvP chốt sau này phải tắt hành vi tấn công trong lúc bảo vệ, không tạo lợi thế mở giao tranh miễn phí.

## 5. Cửa vào, kiểm quyền và điểm trả về

| Đích | Kiểm trước vào | Nơi tới/khi bị từ chối |
|---|---|---|
| Vùng PvE khác dải cấp | Không chặn chỉ vì cấp, trừ trở ngại truyện/địa hình hợp lý đã khai báo | Điểm đến an toàn hợp lệ; cảnh báo độ khó |
| Đại bản doanh phe | Đúng phe; ngoại lệ trung lập chỉ trong luồng gia nhập được hướng dẫn | Sân đón khách đúng quyền; phe đối lập quay về điểm trung lập, không bị đưa sang trạm địch |
| Nhà bang | GuildId, quyền khách, trạng thái bang và instance | Tiền sảnh hợp lệ; mất quyền thì trả điểm trung lập, không xóa đồ |
| W06 | Cấp40–60, membership phe, trạng thái chuyến đi và chiến trường | Tiền trạm phe; thiếu điều kiện ở lại nơi đi với lý do |
| GA01/GA02 | Roster, kỳ đấu, đội trận, phase, quyền vào/quan sát | Sảnh trước trận; không đặt người vào đội bất kỳ khi reconnect |
| Dungeon/cảnh truyện | Quest/encounter/nhóm, quyền chủ cảnh và checkpoint | Điểm chuẩn bị; từ chối không tiêu lượt/phí nếu chưa xác nhận hợp lệ |

Điểm đến kiểm mặt đất hợp lệ, không nước sâu, không có hitbox nguy hiểm, không trong boss hoặc bên kia mặt phẳng cầu. Vị trí cũ mất hợp lệ dùng điểm dự phòng đã khai báo, không lấy ngẫu nhiên tọa độ. Không mặc định mọi NPC hay cứ điểm vừa chiếm trở thành điểm hồi sinh; MAP-07 phải chỉ định.

Nhân vật mang kiện chiến trường không được cất kiện bằng portal nhà bang, trụ sở hoặc arena. Có thể quay về điểm nộp hợp lệ trong W06; rời hoạt động cần quy trình đặt/nộp/hủy kiện theo FACTION-05. Trước khi có quy trình được duyệt, từ chối chuyển và nêu lý do, không xóa kiện âm thầm. Đồ túi cá nhân và trang bị không rơi vì cố mở cổng.

## 6. Vòng đời quan hệ và trạng thái hoạt động

Server kiểm quyền tại nhận action và từng lần hit/tick; quan hệ cũ không đủ để gây hại ở scope mới. Đạn từ trận đã kết thúc không tiếp tục đánh trong sảnh; AoE không kéo từ W06 sang nhà bang. Khi instance đóng, dọn effect/đạn/pet theo lifecycle và đưa người về điểm hợp lệ, không reset cooldown để tạo lợi thế.

Đổi phe, đổi bang hoặc roster không diễn ra ngay giữa trận. Mất quyền vào nhà bang cần hoàn tất giao dịch đang commit theo receipt rồi mới chuyển ra; không hoàn tác giao dịch đã ghi chỉ vì portal đổi quyền. Chi tiết quy trình theo GUILD/FACTION, chưa migration tại đây.

Chết/reconnect giữ deathId, vị trí scope và trạng thái hiện hành theo COMBAT-13/14; không dùng logout để hồi sinh hoặc chuyển phe. Mất mạng trong W06 vẫn chịu luật combat đã chốt, không thêm thời gian grace mới. Luật không hồi tại chỗ bằng tiền giữa điểm tranh áp riêng W06 theo186; điểm về trạm và skill Mục Sư cần ruleSetPvP được nghiệm thu trước code, không tự sửa kit PvE.

W06 chỉ đổi chủ cứ điểm trong cửa sổ quân vụ đã công bố; PK đối phe ngoài trạm vẫn là luật nền của W06. Hết giờ tranh quyền không biến mọi người thành trung lập bất ngờ. GA kết thúc thì dừng quyền gây hại và chốt kết quả server; thắng/thua không thay phe thật của hai bang. Giờ sự kiện dùng giờ thực server, khí hậu dùng giờ game.

## 7. Trình bày giao diện và trải nghiệm di chuyển

Khi qua ranh đổi luật, hiện thông báo ngắn: **“Hoang dã · PvE”**, **“Chiến trường · Đối phe có thể tấn công”**, **“Tiền trạm · Được bảo vệ”** hoặc **“Trận đấu · Đội đối phương”**. Dùng biểu tượng và chữ, không chỉ màu. Lần đầu vào W06 cần xác nhận thông tin PK; không dùng xác nhận mỗi lần đi qua cùng ranh khiến gián đoạn.

Target frame giải thích Không thể tấn công/Đồng phe/Đội đối phương/NPC được bảo vệ, không hiện Miss khi sai quyền. Portal bị chặn nêu đúng lý do: đang combat, mang kiện, chưa chọn phe, chưa đủ cấp hoặc không có quyền khách. Trạng thái ngoài combat phải đọc được mà không mở cửa sổ debug.

NPC ngoài hoang dã có biểu tượng chức năng và trạng thái tương tác; thoại/shop không dừng chiến đấu, khi bị tấn công cảnh báo và ngắt tương tác trước lựa chọn chưa xác nhận. Không tự mua hàng hay chốt nhánh truyện khi cửa sổ đóng. Các phím hotbar/WASD/T/Esc/~ giữ mapping hiện hành, không thêm phím xung đột.

## 8. Gói dữ liệu thiết kế cần giao cho người dựng map

Mỗi zone cần ID ổn định, map/sector/instance scope, loại luật, surface/cao độ, geometry vùng/biên, thứ tự ưu tiên, điều kiện vào, điểm arrival/return/fallback, quyền quan hệ, nguồn nguy hiểm, NPC protected, event overlay và lý do thông báo. Không lưu luật chỉ trong một chuỗi tên hiển thị. Mỗi encounter/arena tham chiếu ruleSet đã version hóa.

Khi overlay lồng nhau: trạm an toàn đã khai báo ưu tiên trên nền W06; arena team rule chỉ ở match scope; event không ghi đè protected volume hoặc mở PK ở V01…V05. Vùng có cấu hình xung đột phải bị phát hiện ở bước kiểm map; không lựa luật ngẫu nhiên theo thứ tự load.

Đây là hợp đồng dữ liệu mô tả, chưa schema SQL hoặc component runtime. Tọa độ và volume sẽ có sau layout2.5D; không gọi hồ sơ chữ là bản va chạm đã nghiệm thu.

## 9. Các ca phải kiểm thử khi triển khai

| Ca | Kết quả bắt buộc |
|---|---|
| Khác phe cùng làm quest V02 | Không PK, credit/party theo PvE |
| Cùng phe ở cứ điểm W06 | AoE/pet/reflect không gây hại; không giành owner bằng last-hit |
| Địch ở W06 | Được đánh ngoài bảo hộ; không nhận heal từ phe đối lập qua party cũ |
| Hai bang cùng phe trong GA02 | Chỉ đối đầu trong phase thi đấu; ra sảnh là đồng minh |
| Người trong trạm bắn ra | Action gây hại bị chặn, không tạo hit hoặc proc thưởng |
| Người ngoài bắn vào trạm | Người/NPC trong trạm không nhận sát thương hoặc CC |
| Đang combat chạy qua biên | Không nhận immunity; lý do chặn rõ, không bị kéo xuyên biên |
| Bấm đánh đồng phe hoặc packet sai | Không gây hại và không tự giữ combat lock vô hạn |
| NPC đơn lẻ trong rừng | Không biến thành safe zone; tiến trình NPC vẫn được bảo vệ |
| Mang kiện mở cổng nhà bang | Không né vận chuyển, không nhân đôi/xóa đồ cá nhân |
| Reconnect sau trận đóng | Về scope/điểm dự phòng hợp lệ, không vào trận cũ hoặc reset thưởng |
| Đạn đến sau khi đổi scope | Không gây hit/DoT ngoài quyền mới |
| Người dưới cầu và người trên cầu | Luật an toàn/tầm nhìn theo surface, không áp sai tầng |
| Mưa/sương/đêm hoặc đổi chủ điểm | Không đổi luật PK ngầm, telegraph/biên vẫn đọc được |
| Quest chính đi từ V01 tới V05 | Không bắt qua PK hoặc thắng giải bang |

Chưa có số FPS, chống camp đã đo, kết quả mạng hoặc QA tự động. MAP-06 hoàn thiện **hồ sơ luật khu vực**, không đóng MAP-01, FACTION-04/05/06/07, PVP hoặc MAP-07/08. Tiến độ **525mục:120hoànthiện /11mộtphần /394chưa thiết kế**.

Tiếp theo: **MAP-07 — điểm hồi sinh, nơi nghỉ và mạng dịch vụ**, gắn 82NPC lõi với vị trí chức năng, cùng dịch vụ mới ở trụ sở/tiền trạm; không tự tính NPC mới vào ngân sách82.

Nguồn: [quyền combat109](109_COMBAT_11_QUYEN_GIAO_TRANH_VA_AN_TOAN.md), [combat lock và chuyển vùng111](111_COMBAT_14_DISCONNECT_CHUYEN_VUNG_VA_DOI_DO.md), [chết/hồi sinh104](104_COMBAT_13_CHET_VA_HOI_SINH.md), [khung phe186](186_FACTION_01_HAI_PHE_BANG_HOI_VA_CHIEN_TRUONG.md), [đồng bộ map187](187_MAP_DONG_BO_PHE_BANG_HOI_VA_W06.md).
