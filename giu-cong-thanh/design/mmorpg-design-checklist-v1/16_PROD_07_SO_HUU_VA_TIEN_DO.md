# PROD-07 — Quyền sở hữu dữ liệu và tiến độ

> **THAY ĐỔI HỆ NHÂN VẬT — 20/10/2026:** [Khung chủng tộc/nghề/trang bị mới](28_HE_CHUNG_TOC_CHUC_NGHIEP_TRANG_BI.md) thay mô tả cũ khi xung đột: tạo Con Người/Elf/Người Lùn, cấp 15 chọn nghề, cấp 30 chọn nhánh theo race. Trang bị/vũ khí kiểm quyền nghề/nhánh; hình riêng không đổi chỉ số món. Không còn chọn ba class cố định lúc tạo hoặc quy tắc mọi race chọn mọi nhánh.


**Phiên bản:** 1.1 · **Ngày:** 20/10/2026  
**Trạng thái:** Đã hoàn thiện thiết kế V1 trong phạm vi mục; chưa triển khai.
**Chịu trách nhiệm thiết kế:** Trợ lý, theo ủy quyền tự phân tích và quyết định của chủ dự án.  
**Đầu vào:** PROD-01…06, PostgreSQL, nền tảng web/PC và bộ quy tắc kể chuyện MMO.

## 1. Quyết định thiết kế

Một account đăng nhập được cả web và PC, có thể sở hữu nhiều nhân vật. Nhân vật thuộc một server logic ổn định. Đổi kênh hoặc đổi máy không tạo nhân vật, ví hoặc quyền nhận thưởng mới.

Phân biệt account toàn game; account trong server; nhân vật; cộng đồng/thế giới; mùa/sự kiện; phiên chiến đấu. Không dùng một cột JSON chung cho mọi phạm vi rồi suy đoán quyền sở hữu từ client. Đây là mô hình nghiệp vụ, không bắt buộc một bảng PostgreSQL cho mỗi hàng dưới đây.

Server logic là miền nhân vật và kinh tế, không phải một tiến trình/máy vật lý; thay máy, bảo trì hoặc mở thêm kênh không thay quyền sở hữu.

## 2. Ma trận dữ liệu có thẩm quyền

| Phạm vi | Dữ liệu | Quy tắc |
|---|---|---|
| Account toàn game | Danh tính đăng nhập, bảo vệ tài khoản, phiên, tùy chọn quyền riêng tư, lịch sử đơn và hạn chế account. | Không xóa khi xóa một nhân vật; không chuyển giao bằng trao đồ. |
| Account toàn game | Ví tiền nạp Tinh Thạch dùng chung mọi chế độ; quyền ngoại trang có phạm vi riêng theo sản phẩm. | Một số dư toàn account, dùng được ở MMORPG và thủ thành qua shop được phép; không sao chép số dư theo server/chế độ. |
| Account trong server | Ngân Ấn, Đồng Elarion, kho chung, cap phát hành và quyền thưởng account của server. | Các nhân vật cùng server dùng chung; khác server không chuyển tiền/kho trong bản đầu. |
| Nhân vật | Tên, race/class, ngoại hình đang chọn, cấp/XP, điểm, kỹ năng, chuyên tinh. | Không tự chia sẻ cấp hoặc skill sang nhân vật khác. |
| Nhân vật | Túi, trang bị đang mặc, slot, affix, ngọc, nâng cấp và vật phẩm khóa nhân vật. | Mỗi instance đồ có một vị trí/chủ thể hợp lệ; không vừa ở túi vừa ở kho. |
| Nhân vật | Quest/lựa chọn, bản đồ khám phá, danh vọng phe, thành tựu nhân vật, nghề và tiến độ hệ sâu. | Không dùng thành tích của nhân vật A hoàn thành truyện của B. |
| Nhân vật | Điểm hồi sinh, vùng/vị trí phục hồi hợp lệ và trạng thái chết. | Do server xác định; không tin vị trí client gửi như quyền dịch chuyển. |
| Nhân vật/cộng đồng | Quan hệ bạn/chặn, thành viên guild, chức vụ và quyền. | Có phạm vi quyền rõ; luật chặn/chế tài account phải bao phủ nhân vật khác khi cần chống quấy rối. |
| Server/thế giới | Guild/kho guild, lệnh chợ, giao dịch, trạng thái sự kiện chung, spawn và lịch thế giới. | Không thuộc riêng tài khoản người tạo; chuyển trưởng guild không sao chép tài sản. |
| Mùa/sự kiện | Điểm, xếp hạng, tiến độ hoạt động và quyền thưởng có edition. | Luôn gắn mã mùa/sự kiện; hết mùa không reset dữ liệu nhân vật thường trực. |
| Phiên/instance | Party hiện tại, combat, aggro, projectile, triệu hồi và trạng thái lượt dungeon. | Game server quản lý; không mặc định ghi mỗi frame hoặc tồn tại vĩnh viễn. |
| Thiết bị | Cache asset, độ phân giải, chất lượng đồ họa, âm thanh và tùy chọn input theo thiết bị. | Không chứng minh tài sản; xóa cache không làm mất nhân vật. |

**Làm rõ PROD-05:** ví theo account/server áp dụng cho tiền gameplay; tiền nạp Tinh Thạch là toàn account, dùng chung giữa MMORPG và thủ thành theo yêu cầu chủ dự án. Sổ đơn toàn account tránh ghi có nhiều server cho cùng giao dịch. Chỉ chi một lần, bất kể mua từ web hay PC.

## 3. Dùng chung giữa nhân vật

### Được dùng chung

- Hai tiền gameplay và cap của account trong cùng server.
- Kho chung cho vật phẩm cho phép gửi; tính phí nếu hệ sau quy định phải có hồ sơ riêng.
- Ngoại trang toàn account: nhiều nhân vật hợp lệ có thể chọn cùng kiểu đã mở, không tiêu thêm bản skin.
- Bách khoa/collection account có thể tổng hợp từ thành tích đã công nhận; không cấp lại thưởng cho mỗi nhân vật nếu thưởng là account.

### Không tự dùng chung

- Cấp, XP, điểm đã cộng, skill, danh vọng, tu luyện/khai mạch/tín ngưỡng hoặc lựa chọn truyện.
- Trang bị đang mặc và vật phẩm instance. Đồ chuyển qua kho là chuyển vị trí thật, không copy.
- Vật phẩm nhiệm vụ và vật phẩm khóa nhân vật.
- Checkpoint dungeon và quyền thưởng cá nhân của một nhân vật khác.

Collection account không cấp chỉ số chiến đấu thường trực trong bản đầu. Nếu mở thưởng sức mạnh sau, phải xét ngân sách và quyền nhận một lần ở hệ tương ứng.

## 4. Phân loại binding

| Loại | Đổi nhân vật cùng server | Giao dịch người khác | Quy tắc |
|---|---|---|---|
| Không khóa | Qua kho chung nếu món cho phép | Có khi thị trường mở và đủ điều kiện | Vẫn kiểm tra trạng thái đang mặc, đang giữ trong đơn hoặc bị hạn chế. |
| Khóa account/server | Có | Không | Không thoát khóa bằng mail, phân giải hoặc ghép nếu công thức không được thiết kế cho phép. |
| Khóa nhân vật | Không | Không | Gắn ID nhân vật; khóa khi nhận/mặc theo định nghĩa món. |
| Đồ nhiệm vụ | Không | Không | Quest quyết định giữ/hủy/chuyển thành bằng chứng journal; không bán nhầm. |
| Quyền ngoại trang account | Dùng trên nhân vật phù hợp | Không trong bản đầu | Quyền sử dụng, không phải một món trang bị sao chép được. |

Binding, hạn dùng và phạm vi thưởng phải thấy trước khi nhận/mua. Công thức chế tác/chuyển hóa công bố binding đầu ra; không mặc định mọi nguyên liệu khóa khiến đầu ra khóa, cũng không mặc định đầu ra được mở khóa. CRAFT/ITEM phải khai báo rõ.

## 5. Nhiệm vụ, thành tựu và quyền nhận thưởng

Truyện chính, lựa chọn cứu trợ, quan hệ NPC và kết thúc là theo nhân vật. Hai nhân vật cùng account có thể chọn khác nhau. Thế giới chung vẫn giữ NPC dịch vụ, khu dân cư và hoạt động của người khác.

Mỗi nguồn thưởng khai báo phạm vi **nhân vật / account-server / account toàn game**, edition và số lần được nhận. Quyền nhận không suy ra từ nơi mở UI. Nhiệm vụ theo nhân vật có thể cấp tiền chịu cap account-server: hoàn thành quest không reset cap.

Quà người mới có giá trị kinh tế lớn dùng quyền account-server; đợt khuyến mãi/nạp dùng quyền account toàn game theo định nghĩa. Nhân vật mới vẫn nhận công cụ khởi đầu cần cho solo, ưu tiên đồ khóa nhân vật; không cho farm liên tục đồ giao dịch bằng xóa/tạo nhân vật.

Kết quả hoàn thành, cấp thưởng và đánh dấu đã nhận phải được cập nhật nhất quán, có định danh chống xử lý trùng. Nhấn nhận từ hai client hoặc nhận mail lại không sinh thưởng lần hai.

## 6. Chết và hồi sinh — dữ liệu giữ/mất

Chốt phạm vi bản đầu:

- Giữ cấp/XP, điểm, kỹ năng, đồ, tiền, tiến độ nghề/hệ sâu và quest đã được công nhận.
- Không rơi đồ, trừ XP hoặc tự trừ tiền khi chết trong bản đầu. Không thêm hình phạt kinh tế dưới tên phí hồi sinh khi chưa cập nhật thiết kế.
- Thất bại mục tiêu tức thời có thể reset đoạn combat của instance theo hồ sơ dungeon; không xóa lựa chọn truyện đã được công nhận.
- Chết chấm dứt buff chiến đấu ngắn và triệu hồi chiến đấu của nhân vật trong bản đầu, trừ hiệu ứng được ghi rõ tồn tại qua chết. Trang bị/passive được tính lại khi hồi sinh, không bị xóa nguồn.
- Thuốc buff dài có hạn dùng hoặc aura lãnh địa phải khai báo death-policy riêng trước khi được đưa vào danh mục; chưa có loại không rõ chính sách trong bản đầu.
- Cooldown không tự xóa khi chết để tránh chủ động chết reset skill. Thời điểm/điều kiện hồi sinh, lượng HP/tài nguyên và vị trí cụ thể do COMBAT-13 thiết kế; không cần biết các con số đó để chốt quyền sở hữu.

VFX không chứng minh trạng thái buff còn hiệu lực. Server tính trạng thái, client chỉ vẽ.

## 7. Chuyển vùng, logout và mất mạng

| Tình huống | Quy tắc |
|---|---|
| Chuyển vùng hợp lệ | Tài sản/quest giữ; buff có thể mang theo chỉ nếu effect khai báo. Projectile và mục tiêu combat cũ được dọn hoặc xử lý bởi vùng có thẩm quyền. |
| Đăng xuất chủ động ngoài combat | Lưu điểm phục hồi hợp lệ và kết quả; không xóa cooldown hoặc quyền thưởng đã dùng. |
| Mất mạng trong combat | Không bất tử, không tự hồi đầy, không coi ngắt mạng là pause. Hành vi tồn tại/thoát thế giới và thời gian giữ do COMBAT/DATA quy định. |
| Kết nối lại | Khôi phục từ server; không tạo entity, pet hoặc phần thưởng trùng. Nếu không còn instance, về điểm phục hồi hợp lệ và giữ kết quả truyện/tài sản đã công nhận. |
| Buff ngắn qua logout | Không đóng băng thời gian. Khi được phép khôi phục, kiểm tra thời hạn server và điều kiện; hết hạn thì không khôi phục. |
| Cooldown qua logout | Giữ mốc kết thúc do server tính; không mặc định reset hoặc đứng yên theo tab trình duyệt. |
| Đổi web/PC | Cùng nhân vật/tiến độ; chuyển phiên loại bỏ quyền điều khiển cũ trước khi cấp quyền mới. Không xóa trạng thái bất lợi để né combat. |

Thời gian reconnect và checkpoint nằm ở DATA/COMBAT, cần cấu hình và đánh giá tải. Không đặt số giây tùy tiện trong mô hình sở hữu.

## 8. Mùa và sự kiện

Bản đầu dùng **nhân vật thường trực**, không bắt tạo lại hoặc reset cấp/đồ theo mùa. Mùa có thể reset điểm/xếp hạng/tiến độ pass hoặc sự kiện được gắn edition, không reset tài sản thường trực.

Quà đã nhận hợp lệ giữ theo định nghĩa món; đồ có hạn dùng vẫn hết hạn đúng chính sách. Vật liệu sự kiện phải có quyết định chuyển/hủy/đổi sau mùa trước khi phát hành. Cửa sổ nhận thưởng có hạn riêng; hết mùa không tự hiểu là mất ngay quyền thưởng chưa nhận.

Đợt alpha có thể xóa dữ liệu thử nhưng phải công bố trước khi người chơi vào. Dữ liệu alpha tách môi trường phát hành, không tự chuyển tiền/đồ hoặc thành tích thử sang live. Không thu tiền thật trong bản mẫu như PROD-05/06.

## 9. Xóa nhân vật và xóa account

Bản alpha chưa cho tự phục vụ xóa nhân vật; quản trị theo quy trình có lịch sử. Trước mở chức năng xóa công khai, ACC/SAFE phải thiết kế xác thực lại, thời gian chờ và khôi phục; không đưa con số chưa đánh giá vào bản này.

Quy tắc quyền sở hữu phải giữ ở mọi cách xóa:

- Không xóa account, Tinh Thạch, ngoại trang account, ví/kho account-server, cap hoặc lịch sử đơn chỉ vì xóa một nhân vật.
- Đồ còn trong túi/trang bị vẫn thuộc nhân vật bị xóa; không tự nhân sang kho hoặc phát lại lúc tạo nhân vật mới. Trước xác nhận phải nêu rõ đồ nào cần chuyển hợp lệ ra kho.
- Nhân vật giữ vai trò trưởng guild hoặc có đơn chợ/giao dịch/tài sản đang tranh chấp phải giải quyết trước, không để tài sản mồ côi.
- Dấu nhận quà account, định danh tài sản và nhật ký cần thiết không reset khi xóa nhân vật. Khôi phục trả đúng instance, không tạo bản thứ hai.
- Xóa account là quy trình khác, xử lý quyền truy cập, dữ liệu và nghĩa vụ lưu giữ theo chính sách được thiết kế riêng; không hứa giữ log vô hạn hoặc xóa sạch ngay lập tức.

Chưa mở chuyển server trong bản đầu. Nếu gộp server sau, giữ định danh nhân vật/tài sản, không nhân đôi ví/cap; phải có kế hoạch migration riêng.

## 10. MMORPG và thủ thành

Có thể dùng chung danh tính đăng nhập ở nền tảng, nhưng mỗi chế độ có miền tiến trình riêng:

| Dữ liệu | Quy tắc |
|---|---|
| MMORPG | Nhân vật, quest, trang bị, tiền và thị trường MMORPG. |
| Thủ thành | Hero chọn trong ván, vàng/ngọc/buff chiến dịch, mốc map, độ khó và lịch sử trận theo cơ chế hiện có. |
| Qua lại chế độ | Tiền nạp dùng một ví chung; vàng gameplay, ngọc, cấp, trang bị, may mắn, crit và tiến độ không tự chuyển giữa hai chế độ. |
| Quà liên chế độ tương lai | Chỉ thiết kế khi có nguồn/quyền nhận/binding rõ; ưu tiên ngoại hình, không áp dụng ngầm. |

Ví tiền nạp là ngoại lệ dùng chung đã được chủ dự án chốt. Cùng database PostgreSQL không có nghĩa mọi dữ liệu còn lại cùng phạm vi hoặc chia sẻ kinh tế. Không chỉnh reset/buff chiến dịch thủ thành theo quy tắc MMORPG của hồ sơ này.

## 11. Trình bày và điều khiển

- Chọn nhân vật hiển thị rõ server, tên/cấp/class, vị trí lần trước và tiến độ riêng; ví account không giả thành số tiền riêng từng nhân vật.
- Túi/tooltip gắn nhãn Không khóa, Khóa account-server, Khóa nhân vật, Đồ nhiệm vụ và hạn dùng; không chỉ dựa màu.
- Kho chung ghi “Dùng chung trong server …”; món không gửi được có lý do. Chuyển đồ phải cập nhật nguyên tử, hỗ trợ đầy túi/kho và ngắt mạng.
- Quest/achievement/event có nhãn phạm vi thưởng; cap hiện đã dùng/còn lại và edition áp dụng.
- Khi mở tính năng xóa nhân vật, hiển thị danh sách hậu quả và điều kiện chặn, xác nhận riêng; không gán phím tắt trực tiếp gây xóa.
- UI dùng lại phong cách pixel fantasy; cần icon account/nhân vật/server/mùa/khóa và tooltip, chưa tạo asset trong mục này.
- Phím mở nhân vật/túi/kho/chọn chế độ đi theo INPUT; không tự đổi phím thủ thành.

## 12. Ràng buộc PostgreSQL và quyền ghi

Mô hình dữ liệu cần có ID ổn định cho account, server logic, nhân vật, instance vật phẩm, edition mùa, quyền thưởng và giao dịch. Client không được chọn owner bất kỳ trong yêu cầu để truy cập tài sản; backend kiểm quyền sở hữu và trạng thái.

Sổ tài sản phải duy trì một chủ/vị trí hợp lệ cho mỗi instance: túi, trang bị, kho chung, chợ giữ hộ, thư hoặc kho guild theo quy tắc. Chuyển vị trí/phí/quyền nhận là giao dịch nhất quán; khóa cạnh tranh hoặc cơ chế tương đương được DATA thiết kế.

Nhật ký cần đủ phục hồi/đối soát nhưng không công khai bí mật truyện, token hoặc thông tin người khác. Schema, index, retention và backup do DATA/SAFE/OPS thiết kế tiếp. PROD-07 chốt nghiệp vụ, không tự tạo migration.

## 13. Rà soát tình huống thiết kế

| Tình huống | Kết quả theo quyết định |
|---|---|
| A chuyển món không khóa qua kho cho B cùng account/server | Một instance chuyển vị trí; không copy, không tự hoàn thành quest của B. |
| Hai nhân vật cùng nhận quà account | Một quyền nhận chung; lần còn lại nhận trạng thái đã nhận. |
| Chuyển web sang PC | Cùng nhân vật, ví và cooldown; chỉ một bên điều khiển hợp lệ. |
| Chết khi có may mắn từ đồ | Đồ giữ, chỉ số tính lại; không xóa affix hoặc cộng lại phần dư crit như phần thưởng. |
| Buff hết hạn khi offline | Không khôi phục như buff mới; cooldown không reset do logout. |
| Hết mùa | Điểm mùa đổi edition, không xóa cấp/đồ/quest thường trực. |
| Xóa/tạo lại nhân vật | Không nhận mới cap/quà account hoặc sao chép đồ cũ. |
| Thay kênh hoặc thay máy chủ vật lý | Không thay server logic/quyền sở hữu. |
| Vào thủ thành từ MMORPG | Thấy cùng số dư tiền nạp; tiền gameplay/đồ/cấp MMO không mang vào ván. |

Đã đối chiếu các quyết định trên giấy trong quá trình soạn. Chưa kiểm thử game, trình duyệt hoặc database; các kết quả triển khai chưa được xác nhận.

## 14. Bàn giao và việc tiếp theo

PROD-07 hoàn thiện phạm vi nghiệp vụ: ownership, binding, dùng chung, thưởng, chết/logout, mùa, xóa và tách chế độ. Thông số combat/reconnect, quy trình xóa, schema và hạn lưu log là đầu ra của task chuyên môn, không phải lý do chờ người dùng duyệt mục này.

Thiết kế V1 là cơ sở làm tiếp theo ủy quyền tự quyết; thay đổi sau được ghi phiên bản. **Tiếp theo: PROD-08 — trần cấp, đường tiến trình và cấu trúc mùa/bản mở rộng.**

| Ngày | Phiên bản | Thay đổi |
|---|---|---|
| 20/10/2026 | 1.0 | Hoàn thiện PROD-07; phân biệt ví nạp toàn account và tiền gameplay account-server. |

## 15. Điều chỉnh đã chốt — tiền nạp liên chế độ

**20/10/2026, phiên bản 1.1:** theo yêu cầu trực tiếp của chủ dự án, tiền nạp là một ví toàn account dùng chung ở các chế độ, trước mắt MMORPG và thủ thành. Quy tắc này thay mọi mô tả trước đó giới hạn tiền nạp trong MMORPG hoặc tách hoàn toàn mọi loại tiền giữa các chế độ.

- Nạp tại chế độ hoặc nền tảng nào cũng ghi có đúng một lần vào ví account; web/PC và các chế độ cùng đọc số dư khả dụng từ backend.
- Tiêu tại shop của một chế độ trừ cùng ví. Không có thao tác chuyển tiền nạp qua lại hoặc tỷ giá giữa chế độ; không tạo một bản sao ví theo chế độ/server.
- Sản phẩm ghi rõ phạm vi: thủ thành, MMORPG hoặc dùng chung. Ví chung không tự làm skin, vật phẩm hay quyền lợi dùng chung. Sản phẩm còn có thể giới hạn server/nhân vật và phải hiển thị trước khi mua.
- Chuyển chế độ không hủy đơn đang xử lý hoặc phát lại vật phẩm. Giao dịch có account, chế độ nguồn/đích, sản phẩm, người nhận, giá, trạng thái và định danh chống xử lý trùng.
- Hai shop mua đồng thời phải kiểm tra và trừ ví nhất quán, không tiêu cùng số dư hai lần. Nếu không cấp được quyền lợi ở chế độ đích, giữ trạng thái chờ hoặc hoàn đúng giao dịch; không vừa cấp vừa hoàn.
- Hoàn tiền/chargeback truy theo đơn và quyền lợi đã cấp ở mọi chế độ liên quan; không ghi hoàn hai lần vào từng ví tưởng tượng. Chính sách xử lý quyền lợi đã dùng thuộc PAY/OPS.
- Tiền gameplay, cap phát hành, vật phẩm chiến đấu, cấp và tiến độ tiếp tục tách theo thiết kế. Ví chung không mở đường mua tiền tự do hoặc lợi thế bị cấm trong triết lý thương mại hiện tại.
- UI dùng tên/icon tiền nạp thống nhất, nhãn “Dùng chung tài khoản — mọi chế độ”; lịch sử có bộ lọc chế độ và trạng thái đang giữ/khả dụng.

Đây là cập nhật thiết kế và checklist, chưa thay đổi ví hoặc database game đang chạy. PROD-07 tiếp tục ở trạng thái hoàn thiện thiết kế.

## Cập nhật trạng thái theo ủy quyền · 20/10/2026

Chủ dự án đã ủy quyền tự phân tích và quyết định, không cần chờ duyệt từng mục. Hồ sơ này được ghi nhận **đã hoàn thiện thiết kế V1 trong phạm vi mục**. Những câu “chờ duyệt” trong lịch sử/bản soạn trước được thay thế về trạng thái bởi ghi nhận này; các phương án là quyết định thiết kế có thể điều chỉnh, không phải xác nhận đã code hoặc đã kiểm thử. Thông số thuộc hồ sơ chuyên môn khác tiếp tục theo task tương ứng, không tự đánh dấu chúng hoàn tất.

## Ghi nhận chấp thuận và phạm vi mới · 20/10/2026

Chủ dự án chấp thuận các hướng còn lại sau khi điều chỉnh quy mô thế giới. Phần giới hạn bản đầu chỉ ở vùng 1–10/10 NPC được thay bằng [PROD-06 V2](15_PROD_06_PHAM_VI_VA_NGAN_SACH.md): năm vùng mở, cấp 45, dungeon/boss/rương và cinematic. Quy tắc tiền nạp chung chế độ vẫn giữ. “Tăng ngân sách” ở ngữ cảnh này là nội dung/asset, không tự tăng ngân sách chỉ số chiến đấu. Các thông số chuyên môn chưa được nêu tiếp tục thiết kế theo task, không bị coi là đã xác định chỉ bởi chấp thuận tổng quát.


## Liên kết đặc tả ví chi tiết ·21/10/2026

[CUR-02…07](177_TONG_HOP_VI_TIEN_VA_DIEM_DUNG_CUR_08.md) cụ thể hóa ví nạp toàn account và ví gameplay account/server, số khả dụng/đang giữ, quote và ledger. Giữ nguyên scope ở hồ sơ này; không chuyển tài sản gameplay giữa hai mode. CUR-08đang chờ vẽ, cap phát hành/PAYchưa mở.
