# PROD-09 — Sổ quyết định thiết kế và quản lý thay đổi

**Phiên bản:** 1.0 · **Ngày:** 20/10/2026  
**Trạng thái:** Đã hoàn thiện thiết kế và lập sổ quyết định ban đầu. Chưa triển khai game/database.  
**Chịu trách nhiệm:** trợ lý thiết kế theo ủy quyền tự phân tích; chủ dự án có quyền điều chỉnh định hướng.  
**Phạm vi:** quyết định sản phẩm PROD-01…08, đầu mối phụ thuộc, phiên bản và quy trình thay đổi. Không thay bảng chỉ số/loot hoặc đặc tả kỹ thuật chuyên môn.

## 1. Mục tiêu

Có một nơi trả lời được: hiện game theo phương án nào, vì sao, ai quyết định, điều gì đã bị thay thế, file nào phải sửa và mục nào còn cần thiết kế. Không dùng lịch sử chat như nguồn duy nhất; không bắt người làm sau đoán giữa hai bản tài liệu mâu thuẫn.

Sổ này là chỉ mục quyết định. Hồ sơ chuyên môn được dẫn liên kết vẫn là nơi giữ chi tiết. Khi một con số chuyên môn thay đổi, cập nhật hồ sơ gốc và dòng quyết định liên quan cùng đợt, không chép nguyên mọi bảng vào sổ.

## 2. Trạng thái và thẩm quyền

| Trạng thái | Ý nghĩa |
|---|---|
| Yêu cầu chủ dự án | Ràng buộc trực tiếp từ người dùng. Không tự thay vì thuận tiện kỹ thuật. |
| Đã chấp thuận | Phương án trước đó được người dùng chấp thuận, có thể tiếp tục dùng làm nền. |
| Quyết định thiết kế V1 | Trợ lý đã chọn theo ủy quyền, có lý do và có thể hiệu chỉnh; không trình bày như lời người dùng. |
| Chờ thiết kế chuyên môn | Đầu bài đã rõ nhưng công thức/thông số hoặc hình ảnh chi tiết chưa được làm ở task tương ứng. Không phải chờ người dùng duyệt. |
| Đã thay thế | Chỉ giữ làm lịch sử, không còn chỉ đạo bản hiện tại. |

Hoàn thiện thiết kế, lập trình, sản xuất asset và kiểm chứng là bốn trạng thái khác nhau. Checkbox [x] của roadmap chỉ xác nhận **phạm vi thiết kế của task** đã có hồ sơ, không đồng nghĩa các đầu ra sản xuất đã tồn tại.

Quyền quyết định: chủ dự án chốt yêu cầu/đổi hướng; trợ lý chọn phương án trong phạm vi theo ủy quyền, đánh giá tác động và ghi phiên bản. Chỉ hỏi khi yêu cầu xung đột quan trọng mà không thể giải bằng thứ tự ưu tiên hoặc ngữ cảnh. Không dừng mọi việc để chờ duyệt từng mục.

## 3. Sổ quyết định đang hiệu lực

Ngày ghi nhận các dòng dưới: **20/10/2026**. Đây là ngày tổng hợp hiện tại, không khẳng định mọi phát biểu gốc được đưa ra cùng ngày. Người chịu trách nhiệm ghi sổ: trợ lý thiết kế.

| ID | Quyết định hiện tại | Cơ sở/thẩm quyền | Lý do | Hồ sơ và task bị ảnh hưởng |
|---|---|---|---|---|
| DEC-001 | Web trên máy tính và client PC; Android/iOS ngoài bản đầu. | Yêu cầu chủ dự án | Hai cách tiếp cận cùng game, tránh phân đôi gameplay. | PROD-02; INPUT/SCREEN/OPS. |
| DEC-002 | PostgreSQL lưu nhân vật/tài sản qua backend; client không truy cập trực tiếp. | Yêu cầu chủ dự án + thiết kế thẩm quyền | Dữ liệu bền vững và nhất quán web/PC. | PROD-02/07; DATA/SAFE. |
| DEC-003 | Khám phá/truyện và PvE/xây nhân vật là ưu tiên; truyện chính solo được. | Đã chấp thuận; ràng buộc truyện từ trước | Có động lực cá nhân, nhóm bổ sung trải nghiệm. | PROD-01/03; QUEST/PVE/SKILL. |
| DEC-004 | Windows client, Chrome/Edge là phạm vi hỗ trợ đầu; mỗi account một phiên gameplay. | Đã chấp thuận | Giới hạn bề mặt phát hành và quyền điều khiển đồng thời. | PROD-02; ACC/INPUT/OPS. |
| DEC-005 | Ưu tiên dùng lại gameplay/asset giữa web/PC; chưa chọn công nghệ đóng gói. | Đã chấp thuận hướng; kỹ thuật chưa chọn | Tránh duy trì hai hệ luật; đánh giá trước khi chọn stack. | PROD-02; ASSET/DATA/OPS. |
| DEC-006 | Nền sức mạnh 35 cấp/điểm, 45 trang bị/nâng đồ, 20 class/skill; hệ sâu chung quỹ 15 trên nền 100. | Đã chấp thuận hướng cân bằng | Các lớp nâng không nhân chồng vô hạn. Không phải tỷ lệ DPS. | PROD-04; STAT-11/GEAR/SKILL. |
| DEC-007 | Tốc đánh/xuyên giáp trần 100%, cộng theo phần còn lại; affix đặc biệt hiếm, mỗi dòng tối đa 5%, skill/buff có quy định riêng. | Yêu cầu chủ dự án; diễn giải công thức V1 | Lợi ích giảm dần; hai nguồn 10% thành 19%. | PROD-04 mục 16; STAT-05/07, GEAR-06/07. |
| DEC-008 | Tốc đánh thưởng 100% là gấp đôi tần suất nền, không giảm thời gian đòn về 0. | Phương án đã chấp thuận | Ý nghĩa trần rõ và không tạo tần suất vô hạn. | PROD-04; STAT/COMBAT/animation. |
| DEC-009 | May mắn loot tối đa 15%, dư tăng damage crit; 1 điểm % dư thành +1 điểm % damage crit. | Trần/chuyển loại theo yêu cầu; tỷ lệ đề xuất đã chấp thuận | Phần dư còn giá trị nhưng không tăng xác suất rơi vô hạn. | PROD-04; STAT/LOOT/tooltip. |
| DEC-010 | May mắn tăng tương đối xác suất có đồ ở lượt được phép, không tự tăng độ hiếm, số lượng hoặc tiền. | Quyết định thiết kế V1 | Tránh biến tỷ lệ gốc 10% thành 25%; bảng eligible chốt ở LOOT. | PROD-04 bổ sung; LOOT/CAP. |
| DEC-011 | Có tỷ lệ bạo kích và sát thương bạo kích riêng; hệ số nền chưa chốt. | Có crit theo yêu cầu; phân tách theo thiết kế | Không nhầm xác suất crit với độ mạnh khi crit. | STAT-02/06, SKILL/COMBAT. |
| DEC-012 | Truyện miễn phí; ưu tiên bán ngoại hình/dịch vụ; không bán chỉ số, may mắn, XP, tiền tự do, hộp ngẫu nhiên trả phí trong bản đầu. | Đã chấp thuận phương án | Bảo vệ giá trị gameplay và khả năng đọc combat. | PROD-05; PAY/ITEM/ECON. |
| DEC-013 | Một ví tiền nạp toàn account, dùng chung chế độ; sản phẩm khai báo quyền dùng riêng/chung. | Yêu cầu chủ dự án | Tiêu một số dư, không chuyển hoặc nhân bản ví theo chế độ. | PROD-05/07; CUR/PAY/ORDER/DATA. |
| DEC-014 | Hai tiền gameplay/kho chung/cap theo account trong từng server logic; tách cap phát hành với P2P, kỳ tuần. | Đã chấp thuận phương án | Đổi nhân vật/kênh không sinh thêm hạn mức; chuyển tiền không phải phát hành tiền. | PROD-05/07; CUR/CAP/TRADE. |
| DEC-015 | Tiến độ MMORPG và thủ thành tách; ngoại lệ đã chốt là ví tiền nạp chung. | Ràng buộc tách chế độ + yêu cầu ví chung | Không mang đồ/cấp/buff ván qua nền kinh tế MMO. | PROD-07; DATA/ITEM/ACC. |
| DEC-016 | Quest/lựa chọn, cấp, skill và hệ sâu theo nhân vật; đồ có binding và chỉ một vị trí hợp lệ. | Đã chấp thuận phương án | Bảo vệ bản sắc nhân vật, không sao chép đồ qua kho. | PROD-07; ITEM/QUEST/DATA. |
| DEC-017 | Bản đầu chết không mất XP/tiền/đồ; buff ngắn/triệu hồi kết thúc theo chính sách; cooldown không reset do chết/logout. | Đã chấp thuận phương án | Không phá đường truyện hoặc cho tự chết/thoát để reset skill. | PROD-07; COMBAT-13/14, STAT-09. |
| DEC-018 | Nhân vật thường trực, mùa không reset cấp/đồ/truyện; alpha tách dữ liệu live. | Đã chấp thuận phương án | Bảo vệ tích lũy lâu dài và ngăn tài sản thử lọt vào phát hành. | PROD-07/08; EVENT/DATA/OPS. |
| DEC-019 | Bản đầu 5 vùng mở, cap 45; dải 1–10, 11–20, 21–30, 31–40, 41–45. | Quy mô/cap theo yêu cầu; chuẩn hóa biên theo thiết kế | Không chồng mốc 30/40; năm vùng không đồng nghĩa năm thành hoặc năm hồi. | PROD-06 V2/08; MAP/LEVEL/QUEST. |
| DEC-020 | Vùng đầu nhỏ nhất; V02/03 diện tích 3×, V04/05 4×, ghép thêm nội dung thay vì scale hình. | Hướng quy mô theo yêu cầu; phân bổ V1 | Mở rộng có địa hình/đường khám phá, không tạo vùng trống lớn. | PROD-06 V2; MAP/ENV/ART. |
| DEC-021 | Mỗi vùng >10 NPC; ngân sách 12/16/18/20/16, tổng 82 NPC có danh tính. | Mức tối thiểu theo yêu cầu; phân bổ V1 | Mỗi vùng có đời sống và dịch vụ/truyện đủ rõ. | PROD-06 V2; NPC/CITY/QUEST. |
| DEC-022 | 5 dungeon lõi; truyện/thường/khó tương ứng 1/2/3 boss; có đặc sản, truyện solo không bị chặn bởi bản nhóm. | 1–3 boss/đặc sản theo yêu cầu; cấu trúc V1 | Độ khó mở thêm chiều sâu và sử dụng lại bộ nền hợp lý. | PROD-06 V2; PVE/BOSS/LOOT. |
| DEC-023 | Có rương ẩn, tinh anh và boss vùng; ngân sách 62 điểm rương,16 tinh anh,5 boss vùng; tối đa15 boss dungeon. | Loại nội dung theo yêu cầu; số lượng V1 | Tạo lý do khám phá và mục tiêu cộng đồng, không đếm biến thể thành boss mới. | PROD-06 V2; MAP/BOSS/LOOT/DATA. |
| DEC-024 | Mỗi vùng có xung đột/kết quả/cầu nối; mở đầu cinematic bỏ qua/xem lại, mục tiêu60–90 giây. | Truyện vùng/trailer theo yêu cầu; cách thể hiện V1 | Người mới hiểu động lực, không spoiler sự thật cuối hoặc bắt xem lại mỗi lần. | PROD-06 V2; ART/QUEST/UI/DATA. |
| DEC-025 | Alpha vẫn kiểm chứng vùng1–10; M1 hướng tới đủ5 vùng/cap45. Không hứa đủ sáu hồi ở M1. | Quyết định thiết kế V1 theo quy mô mới | Tách thứ tự sản xuất và phạm vi đích; tránh quảng bá alpha nhỏ như sản phẩm đã đủ. | PROD-06 V2/08; ROAD/DONE/OPS. |
| DEC-026 | Đạt trần không tích XP chờ nhảy cấp, không tự đổi XP thành tiền; không buộc tăng cap mỗi bản mở rộng. | Quyết định thiết kế V1 | Tránh kho XP, nguồn tiền ngầm và áp lực làm đồ cũ vô nghĩa mỗi đợt. | PROD-08; LEVEL/ECON/GEAR. |
| DEC-027 | Tên Tinh Thạch/Ngân Ấn/Đồng Elarion dùng làm tên thiết kế hiện tại. | Phương án đã chấp thuận | Thống nhất tài liệu/icon/UI; đổi tên sau không đổi ID tài sản. | PROD-05; CUR-01/UI. |

## 4. Quyết định đã thay thế

| Mã thay đổi | Mô tả cũ | Quyết định thay thế | Lý do và tài liệu |
|---|---|---|---|
| CHG-001 | Hồ sơ phải chờ chủ dự án duyệt từng mục. | Trợ lý tự phân tích, chốt và hoàn thiện; chỉ hỏi mâu thuẫn không giải được. | Ủy quyền trực tiếp; README, checklist và trạng thái hồ sơ. |
| CHG-002 | Tiền nạp chỉ thuộc MMORPG hoặc tất cả tiền tách chế độ. | Một ví tiền nạp toàn account chung chế độ; tiền gameplay vẫn tách. | Yêu cầu trực tiếp; PROD-05/07, CUR/PAY. |
| CHG-003 | Bản đầu chỉ một vùng1–10,10NPC,39item,1boss. | Bản đầu5 vùng/cap45, ngân sách nội dung V2; alpha vẫn là lát cắt nhỏ. | Yêu cầu tăng quy mô; PROD-06 V2/08 và các task nội dung. |
| CHG-004 | Dải thành/lore có nhánh50+ có thể bị hiểu thành điều kiện bản đầu. | Cap bản đầu45; nhánh vượt45 là nội dung tương lai, không cổng bắt buộc hiện tại. | Ràng buộc gameplay mới; hồ sơ địa lý giữ lịch sử và có cảnh báo phạm vi. |
| CHG-005 | Tick trình duyệt quyết định trạng thái hồ sơ. | Markdown là nguồn trạng thái; localStorage chỉ theo dõi/ghi chú cá nhân. | Yêu cầu thấy mục nào thực sự đã thiết kế; roadmap và README. |

Không xóa lịch sử rồi giữ một con số cũ không nhãn. Phần bổ sung ở cuối tài liệu cũ có thể chỉ rõ thay thế; khi làm phiên bản lớn phải sửa thân tài liệu để người đọc không nhầm.

## 5. Thông số chưa hoàn thành và thời điểm phải chốt

Không tự điền số bất kỳ hoặc coi việc người dùng chấp thuận tổng thể là đã đưa ra thông số chưa từng được mô tả. Các dòng sau là backlog chuyên môn, không làm PROD-09 phải chờ duyệt.

| ID | Đầu ra cần thiết kế | Task chịu trách nhiệm | Phải có trước |
|---|---|---|---|
| OPEN-001 | ID3 class/2 race alpha, ma trận kết hợp và pipeline ngoại hình. | SKILL-01/02, CHAR-01, ART-02 | Sản xuất hàng loạt sprite, đồ và thoại xuất thân. |
| OPEN-002 | Mẫu máy/trình duyệt, ngưỡng tải mục tiêu, bộ nhớ và quyết định đóng gói PC. | PROD-02 follow-up, OPS/DATA | Công bố cấu hình và phân phối alpha. |
| OPEN-003 | Bộ thuộc tính, XP từng cấp, điểm cấp, rank skill và thời gian tiến trình. | STAT-01…07, LEVEL-01…05 | Cân bằng quái/đồ/quest cấp1–45. |
| OPEN-004 | Crit nền, giới hạn damage crit, đòn được crit; xuyên giáp/giảm giáp và buff tương tác. | STAT-06…10, COMBAT/SKILL | Sản xuất bảng skill/affix và combat có số. |
| OPEN-005 | Cách cộng may mắn đầu vào, bảng loot eligible, quyền party và khả năng tác động phần thưởng đặc biệt. | STAT/LOOT/CAP | Công bố tooltip và bảng rơi. Giữ trần15%, dư1:1, tăng tương đối đã xác định. |
| OPEN-006 | Giá, tỷ giá nạp, thuế, cap tuần, giờ reset, điều kiện kinh tế và thưởng vượt cap. | CUR/CAP/PAY/ECON | Mở chợ/tiền tự do hoặc thanh toán thật. |
| OPEN-007 | Chia năm vùng thành tiểu vùng đúng địa lý; vị trí hub/dungeon/rương và mật độ. | MAP-01…09, ENV/CITY | Tilemap và spawn sản xuất. |
| OPEN-008 | Từng boss/cơ chế, scaling, leash, loot, reset và bảo lưu instance. | BOSS/PVE/LOOT/DATA | Mở lượt dungeon/boss cho người chơi. |
| OPEN-009 | Checkpoint/reconnect, chính sách effect qua chết/chuyển vùng và xóa nhân vật. | COMBAT/STAT/ACC/DATA/SAFE | Gameplay online có tài sản bền vững và chức năng xóa. |
| OPEN-010 | Slot/cấp/hiếm/affix, recipe,158 ID dự kiến và phân bổ đặc sản dungeon. | ITEM/GEAR/CRAFT/GIFT | Đặt hàng icon/model và phát vật phẩm thật. |
| OPEN-011 | Chi tiết cinematic, sáu nhịp, phụ đề/âm thanh và mapping quest thời điểm trước biến cố. | ART/QUEST/SCREEN/ASSET | Dựng phim/animation và mở đầu thật. |
| OPEN-012 | Lịch sản xuất, số người làm, kiểm kê quyền asset và chi phí. | ASSET/ROAD/OPS | Cam kết ngày phát hành hoặc chi tiêu sản xuất. |

Thời điểm là cổng phụ thuộc, không đặt hạn lịch giả khi chưa có nhân lực. Người chịu trách nhiệm hiện tại là trợ lý thiết kế trong từng hồ sơ; trước sản xuất phải giao người/nhóm thực tế, không coi trợ lý là bộ phận vận hành thường trực.

## 6. Mẫu ghi một quyết định mới

Mỗi quyết định có: ID ổn định; nội dung/đơn vị/phạm vi; trạng thái và thẩm quyền; ngày ghi/phiên bản; người chịu trách nhiệm; nguồn là yêu cầu hay lựa chọn thiết kế; lý do; phương án khác và đánh đổi; quyết định bị thay thế; task/file liên quan; tiêu chí kiểm chứng; tác động dữ liệu/asset/UI/kinh tế và bước tiếp.

ID không tái sử dụng. Thay đổi nhỏ giữID, tăng phiên bản và nhật ký; thay đổi ý nghĩa lớn có dòng thay thế rõ. Nguồn tham chiếu dùng tên hồ sơ/task hoặc mô tả phát biểu người dùng, không bịa số message hoặc timestamp không có.

## 7. Quy trình thay đổi

1. **Ghi yêu cầu:** phân biệt lỗi diễn đạt, đổi quy tắc hoặc tăng phạm vi. Nêu trạng thái hiện hành.
2. **Đối chiếu ràng buộc:** yêu cầu người dùng mới nhất ưu tiên trong phần bị thay; các phần không bị nhắc vẫn giữ. Không hiểu tăng ngân sách asset là tăng quỹ sức mạnh.
3. **Phân tích ảnh hưởng:** gameplay/lore, nguồn số, tiền/loot, binding/cap, UI/icon, animation/hitbox, server/lưu dữ liệu, chi phí/địa lý và tiến độ sản xuất.
4. **Chọn phương án:** tự xử lý trong phạm vi ủy quyền; ghi rõ lựa chọn của người thiết kế, không gán thành yêu cầu gốc. Nếu mâu thuẫn quan trọng chưa giải được, hỏi đúng một điểm cần thiết, vẫn tiếp tục việc độc lập.
5. **Cập nhật nguồn:** sửa hồ sơ có thẩm quyền, sổDEC/CHG, checklist, chỉ mục và cảnh báo thay thế. Không sửa mọi bản sao lịch sử thành như chưa từng thay đổi.
6. **Rà liên thông trên giấy:** kiểm đơn vị/tổng, ID, tương tác/ngoại lệ và tình huống biên; ghi phần cần kiểm chứng sau. Không gọi đọc tài liệu là test gameplay.
7. **Bàn giao:** linkMarkdown + roadmap + nội dung trong chat. Chỉ đánh dấu task hoàn thành khi đủ phạm vi; các task phụ thuộc chưa làm không tự hoàn thành theo.

Ví dụ: đổi số boss dungeon ảnh hưởng BOSS/PVE, thời gian lượt, map nội thất, anim/VFX, bảng đặc sản, checkpoint, UI chọn khó và ngân sách asset; không chỉ sửa con số trong bảng phạm vi.

## 8. Thứ tự ưu tiên khi tài liệu mâu thuẫn

- Yêu cầu trực tiếp mới nhất của chủ dự án trong phạm vi thay đổi.
- Quyết định đang hiệu lực đã được ghi rõ thay thế trong sổ và hồ sơ gốc.
- Đặc tả chuyên môn phiên bản hiện hành, tuân theo ràng buộc sản phẩm.
- Đề cương/đề xuất cũ, chỉ dùng tham khảo nếu chưa có bản thay.

Ngày sửa file không tự quyết định ưu tiên. Nếu hai hồ sơ cùng hiện hành mâu thuẫn, đánh dấu cụ thể và xử lý trước sản xuất phần liên quan; không để dev tự chọn cách có lợi.

## 9. Quản lý phiên bản

- Phiên bản nhỏ: làm rõ, sửa diễn đạt hoặc bổ sung ví dụ không đổi luật.
- Phiên bản lớn: thay phạm vi/quy tắc/đơn vị hoặc nguồn dữ liệu có ảnh hưởng thiết kế sau. PROD-06 tăng từ V1 lênV2 là ví dụ.
- Phân biệt phiên bản hồ sơ với build game, giao thức, content manifest và migration database. Chúng liên kết nhưng không dùng một số chung.
- Thay chỉ số/loot/sản phẩm khi đã live cần kế hoạch tác động tài sản/nhân vật, thông báo, chuyển dữ liệu và khôi phục theo DATA/OPS. SửaMarkdown không tự làm thay đổi dữ liệu đã lưu.
- Không lấy backup database thay nhật ký quyết định; không lấy quyết định làm bằng chứng kiểm chứng triển khai.

## 10. Hiển thị roadmap

Nguồn trạng thái là checkbox trong tám file checklist gốc; hồ sơ con không tạo task trùng. [x] = đã hoàn thiện thiết kế; [ ] kèm nhãn “Thiết kế một phần” = chưa đủ; [ ] còn lại = chưa thiết kế.

Mỗi mục đã làm có link kết quả. Bộ đếm không bao gồm số skill/ảnh/biến thể hay số đoạn truyện như task mới. Nguồn mới cập nhật cùng lúc Markdown và chỉ mục; trang đọc lại từ server. Ghi chú cá nhân localStorage không thay trạng thái hồ sơ; giữ khả năng xuất/nhập.

Sổ là tài liệu nội bộ, không thành cửa sổ gameplay hoặc hotkey mới. Dùng thư viện roadmap/tìm kiếm hiện tại; không cần sản xuất icon, asset hay database mới cho sổ. Khi chia sẻ/public phải theo quyền tài liệu nội bộ, không đưa spoiler thế giới lên trang quảng bá.

## 11. Ví dụ áp dụng

| Thay đổi | Cách xử lý |
|---|---|
| Tiền nạp dùng chung chế độ | DEC-013 có hiệu lực; CHG-002 lưu thay thế; sửa PROD-05/07,CUR/PAY; không gộp vàng trong trận. |
| Bản đầu tăng thành5 vùng 45 cấp | DEC-019…025; PROD-06V2/08; giữ alpha1–10, thay ngân sách cũ, chưa coi MAP/BOSS hoàn thành. |
| Xuyên giáp dòng hiếm5% | Giữ đầu vào5% của công thức phần còn lại; không mô tả +5 điểm% tổng hoặc tự cho mọi affix tối đa5%. |
| Boss chưa có skill chi tiết | BOSS vẫn chưa thiết kế dù budget đã có; không tick vì tài liệu nói có boss. |
| Người dùng yêu cầu xem mục đã làm | Đọc checkbox nguồn, không yêu cầu tick lại hoặc tin localStorage cũ. |

Các ví dụ là đối chiếu thiết kế, chưa phải kết quả test hệ thống. Không chạy game, browser hoặc database để hoàn thiện mục này.

## 12. Hoàn thành và bước tiếp

PROD-09 có sổ hiệu lực, lịch sử thay thế, backlog chuyên môn, trách nhiệm/thời điểm cần chốt và quy trình thay đổi cụ thể. Nhóm PROD-01…09 đã có hồ sơ thiết kế; chưa tự đánh dấu ROAD-01 hoàn thành.

**Theo thứ tự checklist, tiếp theo là ROAD-01:** rà nền PROD-01…09 cùng lore, thể hiện hành trình lần truy cập đầu đến phiên chơi thứ hai và xác định rủi ro/phụ thuộc. Sau ROAD-01 mới sang ART-01 theo thứ tự S02. Không nhảy thẳng sang hàng loạt asset hoặc code khi bộ nền chưa được nối thành luồng.

| Ngày | Phiên bản | Thay đổi |
|---|---|---|
| 20/10/2026 | 1.0 | Lập27 quyết định hiệu lực,5 thay thế,12 đầu việc chuyên môn và quy trình quản lý. |

## 13. Quyết định bổ sung ROAD-01 · 20/10/2026

Chi tiết/lý do tại [ROAD-01](19_ROAD_01_HANH_TRINH_HAI_PHIEN_DAU.md), mục 2. Đây là quyết định thiết kế theo ủy quyền, không ghi thành yêu cầu trực tiếp của người dùng.

| ID | Quyết định | Phụ thuộc |
|---|---|---|
| DEC-028 | 3 slot nhân vật miễn phí/account/server; không tăng cap account khi thêm slot. | ACC/CHAR/CAP. |
| DEC-029 | Gợi ý server phù hợp, người chơi xác nhận trước tạo; không tự đổi server vì lỗi. | ACC/SCREEN. |
| DEC-030 | M01–M03 riêng; từ M04 bàn giao vào thế giới hậu biến cố chung. | QUEST/MAP/DATA. |
| DEC-031 | Bỏ cinematic không bỏ gameplay, tự chọn cứu trợ hoặc cấp thưởng. | QUEST/SCREEN/DATA. |
| DEC-032 | Hướng dẫn tình huống, có thể ẩn/xem lại; menu thay hotkey. | INPUT/UI/FLOW. |
| DEC-033 | Phiên đầu có điểm dừng từng bước công nhận; M03/M04 là điểm trú khuyến nghị. | QUEST/COMBAT/DATA. |
| DEC-034 | Thẻ tiếp tục ngắn, tối đa 3 hướng phù hợp và có thể đóng. | FLOW/UI/QUEST. |
| DEC-035 | Phiên hai ưu tiên hiểu đồ/build và khám phá, không tự mở hàng loạt hệ sâu/shop nạp. | LEVEL/SKILL/UI. |

Sổ hiện có 35 quyết định hiệu lực. ROAD-01 đã hoàn thiện thiết kế; dòng “tiếp theo ROAD-01” trong lịch sử mục 12 được thay bằng **ART-01**. Chưa triển khai hoặc kiểm thử.

## 14. Quyết định mỹ thuật ART-01 · 20/10/2026

Chi tiết và giới hạn kiểm chứng tại [ART-01](20_ART_01_QUY_CHUAN_HINH_ANH.md). Các dòng sau là quyết định thiết kế theo ủy quyền, chưa áp dụng code/game đang chạy.

| ID | Quyết định | Task nhận |
|---|---|---|
| DEC-036 | Pixel fantasy trung cổ top-down xiên nhẹ, grid vuông; không dùng isometric hoặc độ chi tiết minh họa cao làm chuẩn gameplay. | ART-02/03/04, MAP/ASSET. |
| DEC-037 | Khung bố cục logic960×540, mốc1080p scale2×; nearest-neighbor, mode pixel-perfect tùy chọn có viền; chữ/HUD lớp riêng. | UI/SCREEN/ART-04. |
| DEC-038 | Module mỹ thuật32×32; body mẫu khoảng48px để ART-02 chốt tỷ lệ, không phải ép frame48×48. | ART-02/04, ASSET. |
| DEC-039 | Camera gameplay mốc1×, không zoom-out tự do ban đầu; cinematic riêng, màn rộng không tự tăng vùng quan sát combat. | COMBAT/MAP/BOSS/UI. |
| DEC-040 | Ramp vật liệu/palette nền và năm mood vùng; sáng trên-trái, glow/khí quyển tiết chế, trạng thái có tín hiệu ngoài màu. | ART-05/06, ENV/UI. |

Sổ có 40 quyết định hiệu lực. Tiếp theo ART-02. Không tick các task chi tiết hoặc tính asset đã sản xuất bằng quy chuẩn này.

## 15. Bộ hình ảnh mới hoàn toàn · 20/10/2026

| ID | Quyết định | Cơ sở/ảnh hưởng |
|---|---|---|
| DEC-041 | Không dùng/cắt/recolor/trace bộ asset hình đang có cho MMO; toàn bộ hình sản xuất mới. | Yêu cầu trực tiếp; thay mọi hướng tái dùng hình cũ, ART-01 V2, ART-08, PROD-06 V2.1. |
| DEC-042 | Body người48px khoảng3đầu, module32px; ma trận thân/canvas và cảnh vật theo ART-02. | Quyết định thiết kế; ART-03/04/CHAR/ASSET tiếp nhận. |
| DEC-043 | Nhân vật chính hướng mục tiêu4hướng; vũ khí/overlay theo hướng, không flip sai tay. | Quyết định thiết kế; animation metadata ở ART-04. |
| DEC-044 | Ngân sách nội dung giữ, công sức phải ước lượng lại theo bộ mới; mẫuP0/P1 trước hàng loạt. | Quyết định thiết kế; không tự giảm năm vùng/cap45, không sửa quỹ sức mạnh. |

CHG-006 thay chính sách asset cũ của ART-01 V1/PROD-06: chỉ bộ mới có module nội bộ tái dùng. Thủ thành hiện tại không bị thay/xóa asset theo tác vụ này. ART-02 đã thiết kế, tiếp theo ART-03. Tổng44 quyết định hiệu lực; chưa có bộ sprite gameplay hoàn chỉnh.

## 16. Giảm độ cầu kỳ theo phản hồi · 20/10/2026

DEC-045: yêu cầu trực tiếp của chủ dự án: phong cách đơn giản hơn ảnh mẫuV1. Chọn simple pixel RPG mảng lớn/ít nét/nền thoáng, body32px khoảng2,5đầu,16–20màu nhận diện một scene,2–3sắc/vật liệu. Cây/nhà/đá ít chi tiết, bỏ noise/dither/bloom; giữ grid32,4hướng và bố cục960×540. Thay body48px/ramp chi tiết ở DEC-038/042 bằng ma trận ART-02 V1.1; ART-01 V2.1 là chuẩn. Bộ asset vẫn mới hoàn toàn; số lượng nội dung không tự giảm. ẢnhV1 không còn là chuẩn. Tổng45quyết định, trạng tháiART-01/02 vẫn hoàn thiện thiết kế bản mới; chưa hoàn thiện bộ sprite.

## 17. Mức chi tiết trung gian · 20/10/2026

DEC-046: theo phản hồiV2 quá đơn giản, chọn hướng pixel chi tiết vừa choV3: body40px/khoảng3đầu,3–4sắc/vật liệu, palette24–32màu mục tiêu, cây/nhà/trang phục có cấu trúc nhưng không texture dày. Thay mức tối giản cực độ DEC-045 và mọi tỷ lệ32px khi xung đột; giữ asset mới, grid32,4hướng, camera và ngân sách nội dung. ART-01V2.2/ART-02V1.2 là hồ sơ hiện hành; không tự ghi ảnhV3 đã được chủ dự án duyệt. Các mẫu cũ chỉ lưu lịch sử. 46ID đã ghi, các quy tắc mâu thuẫn trong DEC cũ đã được thay theo dòng này.

## 18. Tinh chỉnh V4 · 20/10/2026

DEC-047: theo phản hồi muốn tăng thêm một chút, giữ tỷ lệ/camera/grid củaV3, thêm chi tiết chọn lọc khoảng15–20% về cảm giác thị giác, vật liệu4sắc chính/điểm nhấn thứ5; không quay lạiV1. ART-01V2.3/ART-02V1.3; thay giới hạn mức chi tiết cũ ở phần xung đột. Đây là cập nhật cùng task, không tick mới, không tuyên bố asset/spritesheet đã hoàn chỉnh hoặc hình đã được duyệt.47ID quyết định đã ghi.

## 19. Chủ dự án chốt phong cách V4 · 20/10/2026

DEC-048 — Yêu cầu/chấp thuận trực tiếp: “Ok phong cách v đi”, sau khi xemV4. MẫuV4 được chọn làm chuẩn thị giác chính thức của bộ hình MMO mới; cập nhật trạng thái từ thử nghiệm sang đã chốt, giữ thông số ART-01V2.3/ART-02V1.3. V1/V2/V3 không còn là phương án cạnh tranh. Quy tắc không dùng asset cũ giữ nguyên. Việc chốt hình không xác nhận production sprite/animation/tile seams đã xong. ART-03 tiếp theo; số task hoàn thiện không đổi12/513. 48ID quyết định đã ghi.

## 20. ART-03 — nhận diện class alpha · 20/10/2026

DEC-049: theo ủy quyền, chọn Chiến Binh/Cung Thủ/Pháp Sư cho alpha, giữ danh sách sáu lớp trong lore. Tham chiếu source berserker/ranger/pyromancer chỉ để đối chiếu tên, không đổi code, copy skill/số hoặc coi pyromancer là toàn class Pháp Sư.

DEC-050: silhouette ba lớp: vai rộng/trọng kiếm hai tay; thân gọn/cung/ống tên; áo chuông/trượng/tay niệm. Giữ body40px, phong cáchV4; mẫu trường pháiHỏa sản xuất trước cho Pháp Sư, trường phái khác và cây kỹ năng thuộcSKILL. Không dùng lại hình cũ hoặc khóa race/class.

Chi tiết tại [ART-03](26_ART_03_NHAN_DIEN_CLASS.md). OPEN-001 được giải quyết về lựa chọn ba lớp/nhận diện, còn ID runtime và hai race/ma trận tổ hợp ởCHAR/SKILL; không xóa backlog đó như đã hoàn thành toàn bộ. 50ID quyết định đã ghi. Tiếp theoART-04, tiến độ13/513.

## 21. Hệ race/nghề mới · 20/10/2026

DEC-051: theo yêu cầu chủ dự án, tạo3raceConNgười/Elf/NgườiLùn, chưa chọn nghề lúc tạo;15 chọn7nghề có ràng buộc race;30 chọn nhánh theo bảng. Có28tổhợp race/nhánh,19danh tínhnhánh dùngchung. Quan hệ cha/con trong [hồ sơ mới](28_HE_CHUNG_TOC_CHUC_NGHIEP_TRANG_BI.md) là lựa chọn thiết kế có lý do.

DEC-052: item/weapon phải kiểm level/race/nghề/nhánh/family/slot trên backend; profile hiển thị riêng theo nhánh không tự đổi iteminstance/roll/stat. Đồ chung được có profile khác, nhưng vũkhí thật không tự biếnfamily bằng skin.

DEC-053: cấp1–14TânBinh, bộtập kiếm/cung/trượng không mởnghềsớm; chuyểnchức15/30 lầnđầu theoquest, cóvũkhínền khóa cầnthiết, khôngthu tiềnnạp đểđichơi.

CHG-007: thay DEC-049/050 về ba lớpalpha lúc tạo, kế hoạch2race và chínhsách mọi race chọn mọi class tronglore cũ. PhongcáchV4/cap45/nămvùng giữ; ngân sách158item/trước cầnGEAR tínhlại thay vì ép vào3class. ART-03 chuyển thiết kếmộtphần do phạmvimới, không tickthêmCHAR/SKILL/GEAR từ khung. Sổcó53ID đãghi.

## 22. Hệ kỹ năng nền/tiến hóa/vô môn · 21/10/2026

DEC-054: bộ tân thủ theo ý tưởng chủ dự án gồm3chủđộng/1bịđộng nền,1chủđộng/3bịđộngclass; người thiết kế diễn giải class trước15 làrace để khớp chưa chuyển chức. Mở dần trước15, đánh thường riêng.

DEC-055: ba dòng tấn công/cơ động/phòng vệ tiến hóa ở15/30, giữ đầu tư lineage; không mang formcũ+mới đểcast/nhậnpassivehai lần. Bộ tập theo vũkhí không tạo ba bảnskill độc lập.

DEC-056: loadout chủ động tốiđa4/5/6/8 theo giai đoạn; ở30 gồm3dòngnhánh+1nghề+1nhánhchủchốt+1race+2linhhoạt, tốiđa2vô môn. Ba slotthiênphú tùychọn mở15/22/30, tốiđa1passivevô môn; core/race cóquyềnriêng nhưng vẫn nằmngânsách.

DEC-057: khungrank1–5 với trầntheocấp1/8/15/25/35, mởtrần khôngtựnâng; tiến hóa/talent/rank khácnhau. Chưa cóbảngđiểm/cost/rate đểtickSKILLhoànchỉnh.

DEC-058: vô môn mọi nghề/nhánh họcđược khiđủlevel/quest, giới hạnloadout vàkhôngthaytrọnbảnsắcclass. Lôđầu đềxuất Băng Bó/Thanh Tẩy Sơ Cấp/Quan Sát; cácskill/nhánh mởrộng khác chỉbacklog.

Chi tiết [hồ sơ29](29_HE_KY_NANG_TAN_THU_TIEN_HOA_VO_MON.md). SKILL-03/05/06/08 thiết kế một phần, chưa bộkit19nhánh. ART-03 cũngmộtphần; tổng12hoànthiện/5mộtphần/496chưathiếtkế.58ID quyếtđịnhđãghi.

## 23. Bảng kỹ năng tham khảo MMORPG · 21/10/2026

Nguồn và phân biệt thông tin/suy luận tại [nghiên cứu30](30_THAM_KHAO_BANG_KY_NANG_MMORPG.md); đặc tả và wireframe tại [hồ sơ31](31_BANG_KY_NANG_VA_PHAN_DIEM.md). Không sao chép asset/code/tênskill hoặc sốlevel các game khác.

| ID | Quyết định thiết kế theo ủy quyền |
|---|---|
| DEC-059 | Ba lớp bảng: cây tiến hóa, thiên phú và bộ mang theo; học/đầu tư/hiệu lực là trạng thái khác. |
| DEC-060 | K mở bảng, có menu thay thế; tab nguồn5nhóm, panelchi tiết, hotbar/preset và đồhọa mớiV4. |
| DEC-061 | 35SP ở45: bốn mốc8/10/12/14, rồi mỗi cấp15–45 mộtSP; rank2/3/4/5 tốn1/1/2/2SP. Không cóSP rơi/nạp/accountshare. |
| DEC-062 | 11TP ở45 qua mốc15 rồi mỗi3cấp; node nhỏ1TP/chủchốt2TP, nhóm loại trừ và giới hạnslot. |
| DEC-063 | Phân điểm nháp, diff, xác nhận và commit nguyên tử theo revision; không tác động gameplay trước serverxácnhận. |
| DEC-064 | Hai preset miễn phí từ15, cùng một ngân sách/một bộhiệulực; cooldown theo nhânvật/lineage. |
| DEC-065 | Reset rank/talent miễn phí ngoài combat tại điểm nghỉ/NPC, không đổi nghề/nhánh, không resetCD/HP/proc. |
| DEC-066 | Import build là dữ liệu kếhoạch kiểmquyền, không cấp skill/quà hoặc chạy script; node/form cũ không lách quyền. |

SKILL-08 hoàn thiện thiết kế, chưa triển khai. SKILL-03/05/06 vẫn một phần; ART-03 vẫn một phần do cây nghề mới. Tiến độ13hoànthiện/4mộtphần/496chưathiếtkế.66ID đãghi. Cổng số/từngkit và data/security còn ở task chuyênmôn.


## 24. Rà soát đồng bộ class · 21/10/2026

CHG-009: [Hồ sơ 32](32_DONG_BO_CLASS_KY_NANG_TRANG_BI.md) giữ cây 3 chủng tộc/7 nghề/19 nhánh, thay nội dung hiện hành còn dùng 3 class/2 race. Các DEC-049/050 và OPEN-001 về phạm vi cũ chỉ là lịch sử, không là quyền lựa chọn hiện hành.

Làm rõ SP áp dụng ngay cho dòng tân thủ; tiến hóa mặc định 1:1; slot nghề/nhánh cần hoàn thành chuyển chức; quyền nhánh không cộng mọi quyền vũ khí nghề cha; Sát Thủ mặc định giáp nhẹ. Chưa tạo runtime ID hoặc mở đổi nghề. Tiến độ giữ 13/4/496, không phát sinh quyết định đánh số DEC mới trong đợt làm rõ này.


## 25. ART-03 V2 — nhận diện toàn cây · 21/10/2026

[Hồ sơ 33](33_ART_03_NHAN_DIEN_TOAN_CAY_NGHE.md) thay phạm vi nhận diện cũ của hồ sơ 26: ba body chủng tộc, bảy nghề/16 tổ hợp nghề–race và 19 nhánh/28 tổ hợp nhánh–race. Giữ V4/body người 40px/bốn hướng; không dùng lại asset hiện tại.

Chốt silhouette, vũ khí, mảng trang phục, motif, tư thế đánh thường/cast và quy tắc biến hình/visual profile. Đây là đặc tả, chưa vẽ đủ concept hoặc sprite và chưa kiểm chứng thị giác. ART-03 hoàn thiện thiết kế; ART-04 tiếp theo. Tiến độ hiện hành 14/513 hoàn thiện, 3 một phần, 496 chưa thiết kế. Không coi quyết định cũ về thân 48px là thông số hiện hành; dùng ART-02 V1.3 thân 40px.


## 26. Kỵ Sĩ bắt buộc cưỡi ngựa · 21/10/2026

Yêu cầu trực tiếp: Kỵ Sĩ dùng kỹ năng trên tọa kỵ, chỉ cưỡi ngựa; nghề khác cưỡi để chạy. Thánh/Hắc có giáp ngựa theo đồ và một bị động tiến hóa mọc cánh, VFX/cánh khác theo từng con ngựa.

CHG-010: [Hồ sơ 34](34_KY_SI_CHIEN_DAU_TREN_NGUA.md) thay mô hình R tạm thời lên ngựa. Diễn giải phạm vi áp dụng cho cả ba nhánh Kỵ Sĩ; chỉ Thánh/Hắc có bị động cánh/giáp theo bộ. Ngựa nền nhận qua chuyển chức, không là pet có HP riêng. Giáp/cánh không tự thêm chỉ số, bay tự do hoặc quyền đánh quái bay. Kỹ năng chủ động bản sắc thay R cũ chưa hoàn thiện. Không thay thủ thành; tiến độ task giữ 14/3/496.


## 27. ART-04 — chuẩn sản xuất · 21/10/2026

[Hồ sơ 35](35_ART_04_TILE_FRAME_ANCHOR_LAYER.md) chốt tile 32px và topology mép nối; pivot nguồn/offset trim; bốn hướng/socket/layer; canvas độc lập hitbox; vùng an toàn vũ khí/cánh/VFX và metadata animation. Không tạo công cụ, schema hoặc asset; thủ thành giữ nguyên theo yêu cầu trực tiếp. ART-04 hoàn thiện thiết kế, ART-05 tiếp theo. Tổng 15 hoàn thiện, 3 một phần, 495 chưa thiết kế.


## 28. Đổi định hướng không gian sang 2.5D · 21/10/2026

CHG-011: yêu cầu trực tiếp game MMORPG 2.5D. [Hồ sơ 36](36_DINH_HUONG_2_5D_VA_RA_SOAT_MY_THUAT.md) đề xuất sprite 2D/môi trường khối 3D texture pixel/camera trực giao cố định. Thay quy tắc chỉ xếp cảnh ground.y và bản đồ 2D phẳng khi xung đột. V4 giữ màu/mức chi tiết, chưa có hình chứng minh góc chiếu. Chưa chọn engine, chưa thay gameplay. ART-01/02/04 mở lại một phần; tổng 12 hoàn thiện, 6 một phần, 495 chưa thiết kế. Thủ thành giữ nguyên.


## 29. ART-04 V2 — đối chiếu game đã phát hành · 21/10/2026

[Hồ sơ 37](37_ART_04_THAM_KHAO_GAME_2_5D.md) nghiên cứu nguồn chính thức Octopath/Star Ocean R/Triangle Strategy. Không coi góc 45 độ, sprite 40px, canvas 96px hay module 32px là thông số sao từ các game đó. Tách tile texture/module geometry/điều hướng; định nghĩa kiểm chứng camera, tầng, depth/alpha và ngựa/cánh. Chưa chọn engine hoặc tạo scene. ART-04 vẫn một phần; tổng 12/6/495. Thủ thành giữ nguyên.


## 30. Cảnh mẫu Lối Cầu Bình Minh · 21/10/2026

[Hồ sơ 38](38_ART_04_HO_SO_CANH_MAU_2_5D.md) và sơ đồ SVG xác định khu thử 48×32 module, tám khu chức năng, ba góc camera và ma trận so sánh. Đây là bố trí đề xuất, không map gameplay hoặc kết quả đo. 1/8/24 actor là fixture tải, không cap MMO. ART-04 vẫn một phần; tổng 12/6/495. Không thay thủ thành.


## 31. ART-05 — màu và ký hiệu · 21/10/2026

[Hồ sơ 39](39_ART_05_MAU_KY_HIEU_THONG_TIN.md) chốt ba lớp quan hệ/hình vùng/motif nguyên tố; không dùng màu nguyên tố suy thiện–ác hoặc heal. Bổ sung dấu trạng thái, thời gian/stack từ authoritative state, hiển thị đúng tầng và tùy chọn đọc thông tin. Hex là bảng khởi điểm chưa kiểm contrast, không công thức damage/rarity mới. ART-05 hoàn thiện đặc tả; tổng 13/6/494, tiếp theo ART-06. Không sửa thủ thành.


## 32. Mở rộng danh mục trạng thái · 21/10/2026

[Hồ sơ 40](40_DANH_MUC_TRANG_THAI_BUFF_DEBUFF.md) bổ sung yêu cầu hất tung, giảm giáp/kháng phép, chảy máu, bỏng, chậm, tăng giáp, giáp ảo và trói chân cùng nhóm liên quan. Giáp ảo được diễn giải là shield pool; root không tự cấm cast; airborne không tự đổi tầng/bay hoặc ép Kỵ Sĩ xuống ngựa. Bảng số và thứ tự công thức vẫn ở COMBAT/STAT. Không mở tính năng combat chỉ vì có icon. Tổng 13/6/494, không sửa thủ thành.


## 33. ART-06 — độ rõ trong đám đông · 21/10/2026

[Hồ sơ 41](41_ART_06_DO_RO_HIEU_UNG_DAM_DONG.md) tham khảo nguồn chính thức FFXIV/Riot, chốt P0–P3 và ba mức Full/Gọn/Chức năng, mặc định Cân bằng. Không tắt thông tin bắt buộc theo quan hệ nguồn; bom boss trên đồng đội vẫn nguy hiểm. Ba icon đầu là cap trình bày, không cap effect. Chưa đo GPU/FPS hoặc sản xuất profile; tổng 14/6/493. ART-07 tiếp theo, thủ thành giữ nguyên.


## 34. ART-07 và xác nhận giữ 2.5D pixel · 21/10/2026

Chủ dự án xác nhận giữ phong cách 2.5D pixel đã thiết kế. [Hồ sơ 42](42_ART_07_CHAN_DUNG_AVATAR_ICON.md) chốt portrait/avatar/loading/icon cùng nét V4, size class 24/32/64 và portrait 128 tham chiếu, dữ liệu nhãn/rank/timer tách ảnh. Không tạo ảnh sản xuất hoặc tự hoàn tất UI/GEAR. Tổng 15/6/492, ART-08 tiếp theo; thủ thành giữ nguyên.


## 35. ART-08 — thư viện asset và cách đọc tiến độ · 21/10/2026

[Hồ sơ 43](43_ART_08_THU_VIEN_VA_MA_TRAN_ASSET.md) chốt bốn cột thiết kế/sản xuất/tích hợp/kiểm chứng, ma trận 3 body–16 nghề/race–28 nhánh/race, lô P0…P4 và phiếu nguồn/quyền. Các ngân sách nội dung không là số sprite đã có; không dùng bộ cũ trong MMO. ART-08 hoàn thiện danh mục khung/quy trình, chưa kiểm kê đủ file hoặc sản xuất hình. Tổng 16/6/491, tiếp theo ART-09; thủ thành giữ nguyên.


## 36. ART-09 — ngôn ngữ âm thanh · 21/10/2026

[Hồ sơ 44](44_ART_09_NGON_NGU_AM_THANH.md) chốt motif vùng, vũ khí/nguyên tố/CC, ngựa/cánh, boss và UI, ưu tiên âm trong đám đông, tín hiệu hình/chữ thay thế và phiếu nguồn. Không bắt chiptune vì pixel; không phát thành công trước kết quả server. Chưa có file âm/nhạc hoặc đo mix. Tổng 17/6/490; ART-10 tiếp theo, thủ thành giữ nguyên.


## 37. ART-10 — định danh và duyệt nội dung · 21/10/2026

[Hồ sơ 45](45_ART_10_MA_PHIEN_BAN_VA_DUYET_ASSET.md) chốt mã asset ổn định tách tên/runtime ID, variant khác revision, manifest khóa revision và vai trò duyệt. Không tự cấp mã/file thực hoặc tuyên bố quyền từ tên nguồn. Tổng 18/6/489. Mục kế tiếp UI-01 theo thứ tự 513; ART-01/02/04 chưa hoàn thiện, thủ thành giữ nguyên.


## 38. UI-01 — quy chuẩn giao diện · 21/10/2026

[Hồ sơ 46](46_UI_01_BO_QUY_CHUAN_GIAO_DIEN.md) chốt bảng token khởi điểm, size chữ UI riêng pixel gameplay, spacing, component và state cơ sở. Hex/cỡ cần kiểm trên UI thực, chưa chọn font/framework. Không tự hoàn thiện UI-02…12 hoặc 58 cửa sổ; tổng 19/6/488, UI-02 tiếp theo. Giữ pixel V4/2.5D và thủ thành nguyên trạng.


## 39. UI-02 — cửa sổ trong thế giới online · 21/10/2026

[Hồ sơ 47](47_UI_02_LOAI_CUA_SO_VA_DIEU_KHIEN.md) chốt không pause online, tách xem/nháp/commit, input theo vùng/focus, dịch vụ không chốt mới trong combat và bảo toàn kết quả request đã gửi. Esc không mặc định về sảnh MMO. Chưa code input hoặc tick UI-06/09/11; tổng 20/6/487, UI-03 tiếp theo. Thủ thành giữ nguyên.


## 40. UI-03 — HUD và responsive · 21/10/2026

[Hồ sơ 48](48_UI_03_HUD_SCALE_VA_MAN_NHO.md) tham khảo manual FFXIV và trích đoạn chính thức Tibia (trang đầy đủ 403). Chọn vùng giữa thoáng, HUD theo cụm, bố cục Gọn/Chữ lớn thay co chữ, scale UI độc lập camera. Có wireframe vị trí, chưa UI thực/contrast test. Party 1/4/8 là fixture, không cap. Tổng 21/6/486; UI-04 tiếp theo, thủ thành giữ nguyên.


## 41. UI-04 — bố cục và persistence · 21/10/2026

[Hồ sơ 49](49_UI_04_KEO_GHIM_VA_LUU_BO_CUC.md) chốt kéo/resize theo vùng, pin khác dock, HUD editor ngoài combat, neo/tâm chuẩn hóa + clamp/reflow, hai preset UI tùy chỉnh tách build skill và reset không mất dữ liệu nhân vật. Sync account là tùy chọn thiết kế chưa triển khai; import dữ liệu thuần. Tổng 22/6/485, UI-05 tiếp theo. Thủ thành giữ nguyên.


## 42. UI-05 — trạng thái và kết quả chưa xác định · 21/10/2026

[Hồ sơ 50](50_UI_05_TRANG_THAI_VA_PHAN_HOI.md) tách control/data/request, timeout sau gửi không tự là thất bại, đóng UI không rollback và retry đọc khác retry giao dịch. Chưa xây idempotency/ledger hoặc component. Tổng 23/6/484, UI-06 tiếp theo; thủ thành giữ nguyên.


## 43. UI-06 — lớp cửa sổ và đóng nhanh · 21/10/2026

[Hồ sơ 51](51_UI_06_THU_TU_CHONG_VA_DONG_CUA_SO.md) chốt vẽ/focus/input riêng, transient theo owner, Esc một bước. CHG-012 điều chỉnh đường ~ trong hồ sơ 31: giữ nháp tạm và ẩn nhanh, không hỏi từng panel; X/Esc vẫn hỏi nháp. Request đã gửi không bị rollback do đóng UI. Chưa viết manager/input hoặc test; tổng 24/6/483, UI-07 tiếp theo. Thủ thành giữ nguyên.


## 44. Mười hồ sơ UI/input theo yêu cầu · 21/10/2026

[Hồ sơ tổng hợp 63](63_TONG_HOP_UI_INPUT_10_MUC.md) liên kết nghiên cứu 52 và mười đặc tả 53–62. Hoàn thiện phạm vi UI-07…12/INPUT-01…04; không hoàn thiện SCREEN/FLOW, code hoặc asset. Tham khảo chính thức Ragnarok/ToS, Tibia giới hạn trích đoạn.

CHG-013: mặc định slot 1…8 là 1/2/3/4/Q/E/R/Z; Space alias dòng cơ động đang mang, không dash miễn phí thứ chín. Hotbar khóa chỉnh khi chơi. Mobile/gamepad chốt hướng tương lai, chưa hỗ trợ bản đầu và không mở phạm vi M0/M1. Giá/reset SP/TP giữ theo hồ sơ 31; giao diện không tự thêm phí. Tổng 34 hoàn thiện, 6 một phần, 473 chưa; tiếp theo ROAD-02 cần mẫu camera. Thủ thành giữ nguyên.


## 45. Thanh kỹ năng/vật phẩm 13 ô · 21/10/2026

CHG-014 theo yêu cầu trực tiếp: [Hồ sơ 64](64_HOTBAR_13_O_KY_NANG_VAT_PHAM.md) chốt 1–9,Q/E/R/Z dưới giữa màn, tự kéo skill/item tiêu thụ, giữ WASD/con trỏ. Thay trần tám active và bố trí ô ép theo class; giữ quyền học/ngọc/nghề/CC/vô môn, cooldown dùng chung. Item shortcut không chuyển đồ khỏi túi. UI-03/INPUT-02/03 mở lại một phần; tổng 31/9/473. Chưa code/vẽ, thủ thành giữ nguyên.


## 46. ROAD-02 và STAT-01…09 · 21/10/2026

[Nghiên cứu65](65_THAM_KHAO_HE_CHI_SO_MMORPG_2_5D.md), [tổng hợp76](76_TONG_HOP_ROAD_STAT_10_MUC.md) và hồ sơ66–75. Chín STAT hoàn thiện đặc tả V1, ROAD-02 một phần còn mẫu camera/depth. Tổng40/10/463.

CHG-015: bốn thuộc tính STR/AGI/INT/VIT, AP3/cấp sau1,132ở45; luck riêng. Crit5%/1,5nền, cap thường60%/3,0; armor giảm tỷ lệ K=100+10Lsource, cap75%; shield sau mitigation cap50%HP; shared shred tách private pen và CC-DR target chung. Toàn bộ hệ số mới là cấu hình thử theo ủy quyền, không số sao từ RO/ToS hoặc đã playtest. Giữ yêu cầu haste/pen100% Union, affix5%, luck15% dư1:1 và13ô. Không mở accuracy/evasion RNG V1; không tự chuyển ngọc thủ thành vào MMO.

OPEN-005 về cách cộng luck đầu vào được giải quyết bằng sum điểm%, personal eligible rolls dùng recipient khi roll; loot chung team không áp V1. Danh mục eligible/loot-lock vẫn LOOT/CAP; STAT-10/11 còn phải cân DoT/budget. Thủ thành giữ nguyên, chưa code/schema hoặc asset. Tiếp theo STAT-10.


## 47. Nội tại chuyển hóa thuộc tính chủ đạo · 21/10/2026

Theo yêu cầu chủ dự án, [nghiên cứu77](77_THAM_KHAO_NOI_TAI_CHUYEN_HOA_THUOC_TINH.md) và [profile78](78_NOI_TAI_CHU_DAO_CUA_19_NHANH.md) thiết kế một/hai stat theo19nhánh. Điểm gốc vẫn có lợi ích chung; nội tại nhánh dùng E=AP+flatRootGear, u=E/(E+100), singleR=u hoặc dualR=0,7u(primary)+0,3u(secondary), hệ số đầu ra riêng trong budget class. Đây là cấu hình thử theo ủy quyền, không công thức game tham khảo.

Không áp buff/root%/chính kết quả chuyển hóa để tránh vòng lặp; damage/heal/shield/summon hooks đi vào pipeline cũ đúng một lần. Không tự tăng haste/pen/CC/critchance, không xóa cánh ngựa Thánh/Hắc. AP132/SP35/TP11 và cap giữ, SKILL còn một phần. Tổng40/10/463; chưa code/asset/playtest, thủ thành giữ nguyên.


## 48. STAT-10…14 và LEVEL-01…05 · 21/10/2026

[Nguồn79](79_THAM_KHAO_TIEN_TRINH_VA_VAI_TRO_MMORPG.md), [hồ sơ80–89/tổnghợp90](90_TONG_HOP_STAT_LEVEL_10_MUC.md) hoàn thiện mười đặc tả theo ủy quyền. Chọn không lựcchiếntổng, khônglevelsyncV1, khôngpaid/offline/restXP; đónggóp support/tank đượcghi nhận. T(L)=100+20L+10L²,317.900XP từ1→45, quota70/30, thời gian38–57h là mục tiêu chưađo. AP132/SP35/TP11 giữ, mộtAPallocation chung không đổi theoKpreset.

DoTprofile/quotaboss/XPgroup/chênhcấp/roleTTK làconfig thử, khôngkếtquảplaytest. HPdotcap không lấyngọc thủthành vàoMMO; nội tại19nhánh nằmquỹclass, khôngquỹcộngthêm. Không tickCOMBAT/LOOT/NET/SCREEN từ yêu cầu liênquan. Tổng50/10/453; LEVEL-06 tiếp theo, thủthànhgiữ nguyên.


## 49. CHG-016 — Trần nhân vật60, nội dung45 · 21/10/2026

Theo yêu cầu chủ dự án, [hồ sơ91](91_CAP_60_NOI_DUNG_45_VA_XP_HAU_TRUYEN.md) thay cap45 bằng60, giữ năm vùng/quái/gear nội dung tới45. XP1→45 giữ317.900; đoạn45→60 thêm3.602.200 XP bằng bảng tăng20% mỗi cấp từ50.000. Ngoại lệ Flevel0,50 cho người45–59 đánh quái40–45 tránh mất đường luyện ở56+. Nhóm hậu truyện không chịu thêm carry penalty giữa người từ45; caprecipient là60.

AP177 ở60, SP35/TP11 và rank5 giữ; tăng trưởng gốc tiếp tục, giới hạn AP90/stat không đổi. Không tăng ngân sách map, mở nghề mới hoặc bán XP. Các giá trị XP là cấu hình đề xuất, chưa đo giờ chơi. Không sửa thủ thành, code hoặc database. Checklist vẫn50 hoàn thiện/10 một phần/453 chưa thiết kế; không phát sinh ID nhiệm vụ mới. Những mục lịch sử ghi cap45 giữ vai trò lịch sử, hồ sơ91 có hiệu lực khi xung đột.


## 50. CHG-017 — LEVEL-06…08 và COMBAT-01…07 · 21/10/2026

[Hồ sơ92–103](103_TONG_HOP_LEVEL_COMBAT_10_MUC.md) hoàn thiện mười đặc tả theo yêu cầu nghiên cứu MMORPG chính thức. Không rested/offline/paidXP hoặc level sync V1. Level60/nội dung45 giữ; level-up không hồi đầy HP/mana. Lưu level/currentXP/điểm theo nhân vật, grant đúng một lần, server/PostgreSQL quyết định; account dùng chung ví nạp nhưng không chung cấp giữa chế độ.

Combat có free aim, target modes, action phases/cost/cancel/buffer,10profile vũ khí, swept hit/đạn3D, surface/LoS và catalogM0/M1. Thánh/Hắc ngựa tiến hóa chém bay thấp cùng tầm ngang, không tự bắn. Không nhập ngọc thủ thành vàoMMO; fly encounter mainstory phải có cửa sổ melee. Các sốU/giây/hệ số mới là fixture cân thử, không nguồn sao chép hoặc kết quảtest.

Tiến độ60/10/443 trên513; chỉ tick10mục được yêu cầu, COMBAT-08 tiếp theo. ART-01/02/04,ROAD-02,UI-03,INPUT-02/03 vẫn chưa xác nhận mẫu/tích hợp. Không sửa code/game/database, không vẽ production hoặc chạy gameplay QA.


## 51. CHG-018 — Vùng tân thủ không có quái bay · 21/10/2026

Chủ dự án chốt V01 cấp1–10 chắc chắn không có quái bay. Áp dụng quái thường/tinh anh/boss, dungeon và sự kiện chiến đấu thuộc vùng; không dùng pha bay boss tân thủ hoặc ép bài học đối không. Hất tung vẫn là CC trên mục tiêu mặt đất. Quái bay chỉ có thể được giới thiệu ở vùng sau, chưa chốt phải có tạiV02. Đồng bộ COMBAT-05, phạm vi V01, hành trình/hướng dẫn và mục lục roadmap. Không thay số mục hoàn thiện60/10/443, không sửa gameplay thủ thành.


## 52. CHG-019 — Hồi sinh và Mục Sư · 21/10/2026

Chủ dự án thêm hồi sinh phí/vật phẩm, tại chỗ hoặc điểm từng map, đồng đội cứu một lần ở map tổ đội và một skill hồi sinh của Mục Sư. [Hồ sơ104](104_COMBAT_13_CHET_VA_HOI_SINH.md) chọn diễn giải lượt cứu thường theo người nhận/lượt run, skill healer tách lượt thường và kế thừa đúng dòng nghề. Chưa chốt bảng phí, tiền/vật phẩm, số skill hoặc quyền combat; không tự mở hồi sinh tiền nạp bắt buộc. COMBAT-13 chuyển một phần; tổng60/11/442. Không sửa game hoặc database.


## 53. CHG-020 — Hai mươi mục COMBAT/SKILL V1 · 21/10/2026

Theo yêu cầu chủ dự án, [báo cáo125](125_BAO_CAO_20_MUC_COMBAT_SKILL.md), [nghiên cứu105](105_NGHIEN_CUU_COMBAT_VA_19_NHANH.md) và [catalog126](126_DANH_MUC_KY_NANG_V1.md) hoàn thiện COMBAT-08…16/SKILL-01…07/09…12. Số mới là cấu hình theoủy quyền, không số từgamekhác hoặc kết quảplaytest. Có19nhánh/28tổhợp, bảng A/B/C/U/S, race/vô môn, rank/talent/rez/pet/VFXmanifest.

Hồi sinh dùngNgânẤn F=10+2min(L,45),atplace5F/item/cấmbossactive, cứu trợcheckpoint thiếu tiền, cứu thường1/recipient/run và phép18CD180s/quota1/recipient/bossattempt. Combatlock/DC10/60s; threat/neutralguard/PvPdisabled; bossbreakphase8s,khôngstunlock. Giữ35SP/11TP/rank5,AP177/cap60/nộidung45, V01khôngbay,hotbar13,khôngđổinghềtựdo.

COMBAT-13/SKILL-03/05/06 từmộtphần→hoànthiện,16mụcchưa→hoànthiện. Tổng80/7/426=513; SKILL-08khôngđếm lại; GATE-01chưapass,art/camera/NET/DATA/production cònviệcriêng. Khôngcode/SQL/vẽ/testgame hoặc sửa thủthành.


## 54. CHG-021 — Nâng sâu20mụcV2 bám cốt truyện · 21/10/2026

[Nghiên cứu127](127_NGHIEN_CUU_SAU_GAME_CHO_BAN_V2.md), [128–133](133_V2_BAO_CAO_THAY_DOI_VA_BAN_GIAO.md) và hồsơtácgiảstory10 đối chiếuRagnarok/ToS/Ravendawn/WAKFU/NosTale/GW2. V2sửacùng20mục, giữ80/7/426/513. Thêmkhếướctruyện/combat,19truyềnthống,bàihọcnghề,19U/capstonecóquyếtđịnhhình/nhịp/pool,5cảnhboss trongngânsách. Không nângsốskill/point/currency/race/map.

Hồisinhnguykịch/dấutiếpdẫnkhácngườichếtđãtan; OrenvỏdisabledchưaGATE, khôngPRI.RES/pet/lasthitghiđècanon. V05khéptiềntuyếnkhôngépfull6hồivàocấp45. ThaygenericU15%/mark5%đãghi131bằngcơchế, khôngstackbuffcũ; capstone119/catalog126cậpnhậtthật. CốtVệchiếm2quota/HPtỷlệkhôngfreeheal. Lựachọnđạođứckhôngkhóacorebuild. Khôngcode/SQL/vẽ/browser/gameQA hoặcđánhdấugateart/balanceđãpass.


## 55. CHG-022 — Rà soát V2 lần hai · 21/10/2026

[Báo cáo134](134_RA_SOAT_V2_LAN_HAI_VA_CHOT_QUY_TAC.md): chốt ngân sách theo action–target, thứ tự capstone/node/rank, thời điểm tiêu buff, PRI chia pha, quota cứu theo phiên, deathId, ân hạn môi trường và lifecycle/rank/lệnh pet. Giữ80/7/426, không mở thêm20 task và không tự pass gate. Chỉ sửa tài liệu, không sửa thủ thành hoặc database.


## 56. CHG-023 — Nền vật phẩm ITEM-01…10 · 21/10/2026

[Hồ sơ135–145](145_TONG_HOP_10_MUC_HE_THONG_VAT_PHAM.md) chốt taxonomy, definition/instance, binding, truyền khóa, stack, bảo vệ, tooltip, action và overflow. Túi48/kho120, không trọng lượng; vật chứng journal, thưởng đã xác lập giữ grant; ba tiền theo16 không biến thành item stack. Quy tắc là thiết kế V1 có thể điều chỉnh sau prototype, không rollout. Tiến độ90/7/416 trên513; GATE-01/GEAR/CRAFT/LOOT chưa tự hoàn thành.


## 57. CHG-024 — Vật chứng và nền trang bị · 21/10/2026

[146–151](151_TONG_HOP_VAT_CHUNG_CATALOG_VA_TRANG_BI.md): hoàn thiện ITEM-11/GEAR-01…03; ITEM-12 một phần. Chốt10slot, song đoản đao một bộ2H, sách2H, một bộ gear,5rarity với Di sản chưa phát hành; phân biệt6trục, base cố định và itemLevel≤45. Vật chứng journal không phải loot RNG, không mất bởi giao dịch. Tiến độ94/8/411, giữ513; chưa code/SQL/vẽ/QA.


## 58. CHG-025 — GEAR-04…08, base và affix · 21/10/2026

[152–157](157_TONG_HOP_MA_TRAN_VA_DONG_THUOC_TINH.md) chốt anchors1/10/15/20/30/40/45, nội suy, floor từng slot, family phòng cụ và budget tay. Rarity mở0/1/2/3 dòng với tổng điểm0/0,70/1/1,20, không nhân base. Pool19stat, tối đa1root+1special/món; mọi dòng%≤5pp. Đã đối chiếu11.934 trường hợp hợp lệ và fixture45 bằng phép tính, chưa gameplay/balanceQA. Tiến độ99/8/406 trên513. ITEM-12/GEAR-11/LOOT/CRAFT chưa tự hoàn thiện; không sửa thủ thành/SQL/asset.


## 59. CHG-026 — GEAR-09…14, set/proc và ngoại hình · 21/10/2026

[158–164](164_TONG_HOP_HIEU_UNG_SET_VA_NGAN_SACH_GEAR.md): proc/set đổi một ô affixR3;5proc/3set mẫu,4slot/ngưỡng2/4, không procchain hay refundmana nhiều hơn đã trả. Enhancement≤8%base/socket≤0,15B×slot là envelope, chưa triển khai nâng/khảm. Không durabilityV1; tủskin táchstat và quyền server/mode. Kiểm số, chưabalance/gameQA/asset. Tiến độ105/8/400 trên513, ITEM-12/gate tiếp tục mở. Không sửa thủ thành.


## 60. CHG-027 — Dừng tại điểm cần vẽ CUR-01 · 21/10/2026

[165–167](167_DIEM_DUNG_THIET_KE_CHO_VE_ICON_TIEN.md): hoàn thiện rà soát hợp đồng sốROAD-03, chuẩn bịtên/mã/đơnvị/brief3iconCUR-01. Người dùng yêu cầuđếnmục cầnvẽthìdừng, nênCUR-01giữmộtphần, khôngvẽ/codetạoảnhvàkhôngtiếptụcCUR-02. Tiếnđộ106/9/398=513; art/cameragatechưađạt.


## 61. CHG-028 — Vẽ concept tiền r001 ·21/10/2026

[168](168_CUR_01_BAN_VE_ICON_TIEN_CONCEPT_R001.md): theo phép tiếp tục vẽ của người dùng, dùng builtinimage_gen tạo3iconRGBA+contactsheet. Lưu dự án/manifest/prompt/hash, không thay thủ thành. Kích thước thực lớn hơn32, nên chỉ concept/runtimeReady=false; CUR-01giữmộtphần106/9/398, chưa code ví hoặc bắt đầuCUR-02.


## 62. CHG-029 — CUR-01 icon native r002 hoàn thiện ·21/10/2026

[169](169_CUR_01_ICON_NATIVE_32_VA_NGHIEM_THU.md): người dùng cho phép xử lýpixelbằngPython. Chuẩn hóa3conceptthànhPNG32×32RGBA/alpha0–255nhịphân/5màu/margin≥2px, giữlỗcointrongsuốt. Cócontactsheet1×/2×/8×, nền sáng/thangxám, manifest/hashvàQAảnh; conceptkhôngđổivàchưatíchhợpví. CUR-01từmộtphần→hoànthiện;107/8/398trên513, tiếpCUR-02. Khôngsửathủthành/SQL/logicgame.


## 63. CHG-030 — Ví tiền CUR-02…07 và dừng trước vẽ CUR-08 ·21/10/2026

[170–177](177_TONG_HOP_VI_TIEN_VA_DIEM_DUNG_CUR_08.md) hoàn thiện6hồ sơscope/source/transfer/quote/balance/ledger. Khả dụng=B−H, pending không chi, credit giữ headroom; quote30s/hold thường120s; không trộn tiền hay chuyển khóa thành tự do. Ceiling cấu hình không là earningcap. CUR-08mộtphần, brief4mockupWIN-34và dừng trước vẽ theo yêu cầu.113/9/391=513; chưa mở CAP/PAY/codeSQL/mint hoặc sửa thủ thành.


## 64. CHG-031 — CUR-08 mockup Ví/Hạn mức ·22/10/2026

[178](178_CUR_08_MOCKUP_VI_HAN_MUC_VA_BAN_GIAO.md): dựng mẫuHTML/CSSđộc lập theo token46, tái sử dụng icon32r002; xuất bốnảnh1280×720/panel640×540 và xemQA. Lịch sử sửa thành hai cột để vừa; sốdư/lỗi/thiếu/holdscopegiữ170–175. Thao tác mockup không gọiAPI tiền. CUR-08từmộtphần→hoànthiện;114/8/391=513. ChưaCAP/backend/SQL/coderuntimevàkhôngsửathủthành.


## 65. CHG-032 — CUR-08 r002 đồng bộ pixel2.5D ·22/10/2026

[179](179_CUR_08_THIET_KE_LAI_PIXEL_2_5D.md): theo phản hồi người dùng, thay trình bày dashboard bằng khung gỗ/nẹp đồng/cạnh pixel, đặtUItrên concept ngoại thành có vách/bậc/cầu. Nềnmới dùngimage_gen/promptđã lưu; icon32r002giữnguyênhash. HTML/CSSvàbốnảnhmockupr002,QAprototype lại; khôngđổiquytắcví/backend/mapruntime. Giữ114/8/391=513, khôngđếm lạiCUR-08hoặcduyệtcameraART.


## 66. CHG-033 — ART-03 thay bảng ba class cũ ·22/10/2026

[180_ART_03_VE_LAI_THEO_CAY_NGHE_R002.md](180_ART_03_VE_LAI_THEO_CAY_NGHE_R002.md): người dùng yêu cầu đồng bộ hình với cây nghề đã đổi. image_gen vẽ hai bảng 3 race/7 nghề và 19 nhánh, giữ quyền 16/28 tổ hợp, kỵ sĩ cưỡi ngựa; manifest/prompt/hash lưu dự án. Bản cũ chỉ lịch sử. Chưa sprite native/animation/layer/cánh ngựa; giữ114/8/391, không thay thủ thành hoặc logic game.


## 67. CHG-034 — Môi trường sống theo cốt truyện ·22/10/2026

[181_MAP_10_THOI_GIAN_THOI_TIET_HE_SINH_THAI.md](181_MAP_10_THOI_GIAN_THOI_TIET_HE_SINH_THAI.md): chốt thiết kế khí hậu năm vùng, giờ game chung, chuyển trời mềm, gió tán/cỏ và nước cạn/sâu. Giá trị thử ngày180phút, trời15–35phút/chuyển60–120giây và lội−10% đều cấu hình; chưa runtime hoặc vẽ. Không tự buff chiến đấu theo mưa/gió; giữ V01 không quái bay. MAP-10 hồ sơ hoàn thiện, ENV-03/06 một phần;115/10/388=513. Không sửa thủ thành.


## 68. CHG-035 — MAP-12 sinh cảnh và lãnh địa ·22/10/2026

[182_MAP_12_SINH_CANH_QUAI_DONG_VAT_VA_BOSS.md](182_MAP_12_SINH_CANH_QUAI_DONG_VAT_VA_BOSS.md): tiếp nhánh môi trường theo yêu cầu, thiết kế phân bố năm vùng, năm lớp sinh vật, dấu vết/lõi/đệm/lối tránh, nhịp sống và server spawn. Giữ16tinh anh/5bossmap, V01khôngbay, truyện chính solo; không chốt thêm công thức aggro/loot hoặc thay thủ thành. MAP-12hoàn thiện hồ sơ;116/10/387=513. TiếpMAP-04, CAP-01vẫnmở; chưa vẽ/code/test.


## 69. CHG-036 — Loại quái tăng30→90 ·22/10/2026

[183_MOB_01_DANH_MUC_90_MAU_QUAI.md](183_MOB_01_DANH_MUC_90_MAU_QUAI.md): người dùng yêu cầu x3loại quái. Nâng ngân sách15 lên90mẫu nền,18/vùng, IDduynhất/dòng/hànhvi; không tính reskin/palette/boss/tinh anh. Không tăng mật độ/chỉ số hoặc16tinh anh/5bossmap. GiữV01khôngbay. MOB-01hoàn thiện danh mục, MOB-02…08cònmở;117/10/386=513. Chưa vẽ/code/runtime, không sửa thủ thành.


## 70. CHG-037 — MAP-04 hồ sơ năm vùng ·22/10/2026

[184_MAP_04_HO_SO_NAM_VUNG_THE_GIOI_MO.md](184_MAP_04_HO_SO_NAM_VUNG_THE_GIOI_MO.md): tiếp thiết kế môi trường, xác lập30tiểu khu/văn hóa/kiến trúc/sinh kế/quest đại diện; giữ82slotNPC/90mẫuquái/16tinh anh/5bossmap/62rương. Gợi ý1/2/2/3/3boss cho5dungeon trong hạn1–3, tách bossmap và mẫu nền. Chưa đặt82tênNPC/vẽlayout/skillboss/triểnkhai; không thay địa lý thành khi MAP-01cònmở. MAP-04hoàn thiện hồ sơ,118/10/385=513. TiếpMAP-01, CAP-01chưa thiết kế.


## 71. CHG-038 — MAP-04 r002 mô tả sâu ·22/10/2026

[Hồ sơ184](184_MAP_04_HO_SO_NAM_VUNG_THE_GIOI_MO.md) mở rộng theo yêu cầu: cảnh vào vùng, topo chức năng, đời sống cư dân, dấu điều tra, phản hồi và mẫu hồ sơ tiểu khu. Không chốt tọa độ/questscript/lịch sử bí mật mới, không đổi ngân sách/task; giữ118/10/385. Chưa vẽ/code.


## 72. CHG-039 — NPC ngoài hoang dã và khu an toàn ·22/10/2026

[MAP-04 r003](184_MAP_04_HO_SO_NAM_VUNG_THE_GIOI_MO.md) theo người dùng: khu an toàn tập trungNPC, hoang dã cũng có nhiềuNPCchức năng/truyện. Phân bổ82slotthành30hub/52ngoàihub để thiết kế tiếp; không thêm82NPCmới. NPCđơn lẻkhôngtạo safezone; NPCthiếtyếukhôngbịgrief, hộ tống theoencounter; thoại/shop không dừng combat. MAP-06/07vàNPCvẫn mở;118/10/385khôngđổi. Chưa code/vẽ.


## 73. CHG-040 — MAP-01 địa lý và sector ·22/10/2026

[185_MAP_01_DIA_LY_ELARION_VA_MANG_DUONG.md](185_MAP_01_DIA_LY_ELARION_VA_MANG_DUONG.md): đối chiếu nguồn truyện để giữ mười thành/tuyến; phân biệt cảngMerrowen, đầmNocthollow và caođịaAstravelle, táchV03hai nhánh quaValedorn. Tên tiểu khu184làđềxuất/alias, không thayL01–L09. Chưa vẽ/tỷlệ nênMAP-01mộtphần;118/11/384=513. Giữngânsách, không code/thủthành. Điểm tiếp là vẽsơđồ theo brief, CAP-01cònmở.


## 74. CHG-041 — Hai phe, W06 và giải bang hội ·22/10/2026

[186_FACTION_01_HAI_PHE_BANG_HOI_VA_CHIEN_TRUONG.md](186_FACTION_01_HAI_PHE_BANG_HOI_VA_CHIEN_TRUONG.md): yêu cầu mới mởPvPđối phe/W06cấp40–60, haihubphe/nhàbang/GA01/GA02. Thiết kế HòaMinh–ThiếtThệ, chọnphechuyểnchức15/account-realm, bangcùngphe, samefactionkhôngđánhW06nhưngđượcmatchteamtronggiải. Mục tiêu6×V01choW06, sáucứđiểm, khôngngầmtănggear60/XP/minttiền. Overridekhôngmap46–60/PvPdisabledriêngscope; CAPvẫnchưachốt. Thêm12FACTIONtasks,01hoànthiệnkhung;525=119/11/395. NPC/quái/assetmớichưadựtoán, khôngcoi90/82cũđãđủ. Chưa code/vẽ/runtime.


## 75. CHG-042 — Đồng bộ map với phe/bang ·22/10/2026

[187_MAP_DONG_BO_PHE_BANG_HOI_VA_W06.md](187_MAP_DONG_BO_PHE_BANG_HOI_VA_W06.md): theo yêu cầu đồng bộ trực tiếp185/184/15/checklist, giữ5PvEkhôngPK và thêmW06ĐôngNam/6×thành6vùngngoàitrời21×. FM01hai hànhlangIX, GM01/GA01/GA02làtemplateinstance; quy định9tiểukhuW06gồm2trạm/6cứđiểm/đườngquânnhu, khíhậu181, đườngtruyệnkhôngquaPK. Ngânsách82NPC/90quáichỉlõiPvE, nội dungmớichưadựtoán. Giữ525=119/11/395, khôngđóngMAP-01hoặcFACTIONchitiết; chưa vẽ/code.


## 76. CHG-043 — MAP-06 phân lớp khu vực ·22/10/2026

[188_MAP_06_PHAN_LOP_KHU_VUC_VA_QUYEN_GIAO_TRANH.md](188_MAP_06_PHAN_LOP_KHU_VUC_VA_QUYEN_GIAO_TRANH.md): hoàn thiện hồ sơ ruleSet/surface/scope,12loại vùng, quan hệ hỗtrợ/tấncông, biên antoàn, chuyển portal/kiện và kiểmcast-hit. Giữcombatlock10s của111, không thêm immunity/đổi skill hoặc luậtPvE. MAP-06xonghồsơ;525=120/11/394. MAP-01/07/08vàFACTION/PVPchitiếtvẫnmở; chưa code/vẽ/QA. TiếpMAP-07.


## 77. CHG-044 — MAP-07…09 và dừng trước vẽ ·22/10/2026

[192_TONG_HOP_MAP_07_09_VA_DIEM_DUNG_VE.md](192_TONG_HOP_MAP_07_09_VA_DIEM_DUNG_VE.md): theo yêu cầu làm tới bước vẽ, hoàn thiện189hồi sinh/dịch vụ,190mạngdi chuyển,191khám phá/mapinfo. Giữ104/111/34, fognhânvật/accountthamkhảo không mởwarphộ, samefaction/W06đúng188. Điểmtiếp làvẽMAP-01với4overlay, đãdừngkhôngtạoảnh. 525=123/11/391, MAP-01mộtphần; chưa code/schema/runtime.


## 78. CHG-045 — Rà soát sâu MAP-07…09 r002 ·22/10/2026

[193_RA_SOAT_SAU_MAP_07_09_R002.md](193_RA_SOAT_SAU_MAP_07_09_R002.md): theo yêu cầu phân tích kỹ, sửa trực tiếp189sector/deathscope V03/V04,190warp haiđầu mở bằng tuyến vật lý,191claimscope rương không mặc địnhaccount và thêmr002. Rà víchung170, NPClease/commit, transferintent, đườngngựa, camp và ròthôngtinW06. PvPrez còn PVP/FACTION, không nhận đã test;123/11/391 trên525khôngđổi. Giữdừngtrướcvẽ, không code/ảnh/SQL.


## 79. CHG-046 — MAP-02 cấu trúc lớp trước vẽ ·22/10/2026

[194_MAP_02_CAU_TRUC_LOP_BAN_DO_VA_QUYEN_THONG_TIN.md](194_MAP_02_CAU_TRUC_LOP_BAN_DO_VA_QUYEN_THONG_TIN.md): tiếpthiết kế theo yêu cầu, hoàn thiện3sản phẩm/12lớp, POIIDvàvisibility/interaction/claim, questscope, cậpnhậtrevision. Khôngvẽảnhkhitiếp tụcphầnchữ, khôngròspoilermaster/minimapradar. MAP-02hoànthiệnhồsơ;525=124/11/390. MAP-01vẫnmộtphần, cònMAP-03/05/11chuẩnbịbằngchữ; chưaruntime/code.


## 80. CHG-047 — MAP-03 điểm đến và đường quay lại ·22/10/2026

[195_MAP_03_BIEN_KHU_VUC_DIEM_DEN_VA_DUONG_QUAY_LAI.md](195_MAP_03_BIEN_KHU_VUC_DIEM_DEN_VA_DUONG_QUAY_LAI.md): hoàn thiện ba loại biên, arrival/return/deathscope, fallback có quyền, prepare/commit/reconnect và route ngựa; không tự thêm immunity/fee/teleport cứu kẹt trong combat. Sửa rõ cửa phải có hợp đồng hai đầu và đường về solo. MAP-03 hoàn thiện hồ sơ,525=125/11/389; MAP-01 còn một phần, MAP-05/11 còn mở. Chưa vẽ/code/QA runtime.


## 81. CHG-048 — MAP-05 nhịp khám phá ·22/10/2026

[196_MAP_05_NHIP_KHAM_PHA_MAT_DO_VA_MANG_DUONG.md](196_MAP_05_NHIP_KHAM_PHA_MAT_DO_VA_MANG_DUONG.md): hoàn thiện POI/bốn loại đường/cụmquest/khoảngnghỉ và ma trận62rương=12gầntuyến/35nhánh/15lốikín, không tăngloot hoặc quái. W06 kiểm lợi thế route/LoS/camp, không gọi cùng diện tích làcân bằng. Chưa chốt khoảngcách/thờigian khi chưa greybox; MAP-05xonghồsơ,525=126/11/388. TiếpMAP-11, vẫn dừng trước vẽ/code.


## 82. CHG-049 — MAP-11 có tham khảo và dừng trước vẽ ·22/10/2026

[197](197_THAM_KHAO_VAT_THE_TUONG_TAC_VA_GIOI_HAN.md) ghi nguồnCrossCode/RadicalFish/GW2chínhthức và giới hạn403Albion; chỉ học nguyên tắc, không copy asset/luậtkinhtế. [198](198_MAP_11_VAT_THE_TUONG_TAC_VA_VONG_DOI.md) chốt20họ object, scope/F/LoS/state/concurrency/receipt/cơcấusolo. [199](199_BAN_GIAO_MAP_VA_DUNG_TRUOC_VE.md) bàn giao4nhóm overlay, dừng trước vẽ theo yêu cầu. MAP-11hoàn thiện hồ sơ, MAP-01cònmộtphần;525=127/11/387. Không ảnh/code/schema/runtime.


## 83. CHG-050 — MAP-01 vẽ concept Elarion r001 ·22/10/2026

[200_MAP_01_BAN_VE_ELARION_CONCEPT_R001.md](200_MAP_01_BAN_VE_ELARION_CONCEPT_R001.md): người dùng tiếp tục từ điểm vẽ; image_gen tạo nền + chỉnh thêmValedorn, lưu workspace/prompt/hash AT-AST-100008. SVG/HTMLtên10thành/6tuyến/7sectorpins/phe+W06/dịchvụ, export3PNG; QAprototype chọnđiểm/layer/keyboard vàsửa hitarea/labeloverlap. Khônggọiảnhlàtilemap/navmesh, chưa tỷlệ/cầuđèo/bến/cânW06 nênMAP-01vẫnmộtphần;525=127/11/387. Không đổi codegame/database/thủthành.


## 84. CHG-051 — Thế giới r002 thêm10đấtẩn và màu tiến trình ·22/10/2026

[201_MAP_01_MUOI_DAT_AN_VA_MAU_THEO_TIEN_TRINH_R002.md](201_MAP_01_MUOI_DAT_AN_VA_MAU_THEO_TIEN_TRINH_R002.md): theo yêu cầu đặt tênkhu/thêm10đấtẩn/tômàuvùngđãmở. image_genmởrộngnềnAT-AST-100009; HTML/SVGlớptên/chọncấp10…60/truyện/phe, khóa xám vàfutureunreleased. H01…10dựphòng khôngcấpmới/gear/NPCquáiđãduyệt;6vùngcũgiữ. QAprototype4ảnh vàgates/keyboard; khônggamebackend hoặc mới tănghardgateđibộ. MAP-01mộtphần,525=127/11/387.


## 85. CHG-052 — Trạng thái vùng và hạt giống đấtẩn ·22/10/2026

[202_MAP_MO_VUNG_TRANG_THAI_VA_HUONG_KHAM_PHA_DAT_AN.md](202_MAP_MO_VUNG_TRANG_THAI_VA_HUONG_KHAM_PHA_DAT_AN.md): theo yêu cầu tiếp thiết kế, táchpublication/knowledge/permanentgrant/currenteligibility/discovery/claim, giữmàuvùngđãmởkhitạmbịkhóa. Chốtmởquyền6vùngvà10hạtgiốngtruyệndựphòng, khônggáncap61/loot/lịchpháthành hoặc tự tăngbudgetquest. UIr002chỉmôphỏngchưađủstate, khôngđổibackend. 525=127/11/387khôngđổi, MAP-01cònmộtphần.


## 86. CHG-053 — Rà soát sâu mởvùng/đấtẩn r003 ·22/10/2026

[203_RA_SOAT_MO_VUNG_THE_GIOI_MO_VA_DAT_AN_R003.md](203_RA_SOAT_MO_VUNG_THE_GIOI_MO_VA_DAT_AN_R003.md): người dùng yêu cầu phân tích sâu; sửa202grantidentitybền character+realm+region, revisionchỉthuộctính; nămPvEkhuyếnnghịcấp cho khámphásớm qua điểmhợplệ, khôngskipquest/warp; W06hard40/phe. Phânbiệt đấtchưapháthành với bí mậtasset,10vai tròtruyệnhạnchếlặp/powercreep. Prototype201chưathayđổi luậtruntime.525=127/11/387khôngđổi; chưaảnh/gamecode/SQL/test.


## 87. CHG-054 — Ưu tiên cốt truyện xuyên suốt và lore ·22/10/2026

[205_UU_TIEN_COT_TRUYEN_XUYEN_SUOT_LORE_VUNG_VA_NPC.md](205_UU_TIEN_COT_TRUYEN_XUYEN_SUOT_LORE_VUNG_VA_NPC.md): người dùng yêu cầu viết nội dung xuyênmap/loreNPCvàvùngtrướchệphụ. Đãviếtstory11bảnkể0.1NhàĐèn→5vùng→kếtchiếndịch45, khôngkhép6hồi/giảicứuchaquásớm. 24NPCcũ lànềnchưa82profile, QUEST-10mộtphần;204FACTION-02giữnhápchưachốtsố vàchưađánhhoànthiện. 525=127/12/386. Khôngcode/vẽ/SQL; kếtiếpbiêntậpmaplore/NPC/manhmối/quest.


## 88. CHG-055 — Hai trang chuyên đề và chạy lại local · 22/10/2026

[206_TRANG_CHUYEN_COT_TRUYEN_VA_THIET_KE_HINH_ANH.md](206_TRANG_CHUYEN_COT_TRUYEN_VA_THIET_KE_HINH_ANH.md): chạy lại server local với PostgreSQL; thêm story.html và visual-design.html, liên kết từ roadmap. Đọc tài liệu gốc, tìm kiếm, mục lục, cảnh báo spoiler, tải Markdown, lọc ảnh và xem ảnh lớn; tách art hết hiệu lực. Đã kiểm tra trình duyệt desktop/mobile, ảnh và liên kết. Không đổi gameplay, asset gốc hay schema database. Giữ 525=127/12/386.


## 89. CHG-056 — Nhân vật r003 và đối chiếu canon · 22/10/2026

Hồ sơ 208 và story12 đồng bộ HGD đi bộ, VAN giáo/khiên, PRI sách/trượng chữ thập, WOD hoa/lá, SPI tinh linh vai, xạ thủ Lùn nỏ/bẫy và slot mũ. Vẽ hai bảng concept r003 bằng image_gen, giữ 2D pixel. Sửa đoạn tạo nhân vật cũ trong story01, giữ nguồn00. Chưa cân chỉ số bộ vũ khí mới hoặc viết kit bẫy hoàn chỉnh, chưa gameplay/SQL. 525=127/12/386 không đổi.


## 90. CHG-057 — Lore năm vùng và cảnh NPC mở đầu · 22/10/2026

Story13 phát triển đời sống, mâu thuẫn, lore khám phá, cảnh chuyển và ranh giới C01–C17. Story14 mở sâu7NPC có sẵn, thoại nháp và phản hồi M01–M08; không thêm NPC/ngân sách. Làm rõ phiếu Tro Trắng đã có ởM04, C09 chỉ hoàn chỉnh khi đủ đại diện, V05 không tự cấp C13–C17 đầy đủ. HTMLstory có hai thẻ nội dung mới, QUEST-10 một phần cập nhật dẫn chứng;525=127/12/386 giữ nguyên. Chưa viết quest sau10/82profile, chưa runtime/vẽ/SQL.


## 91. CHG-058 — Lore chủng tộc/nghề/nhánh và26 tuyến chuyển chức ·22/10/2026

Story15/16:3race,7nghề15,19nhánh30; mỗi gói có lore, NPC,3chặng và chứng vật.19thầy mới đề xuất dùng26vai, không26NPC cộng ngân sách.78chặng cần ánh xạ riêng, không ngầm tăng32main; ghi hạn chế kit bẫy và slot. Giữ miễn phí chuyển lần đầu, cấp đồ nền/horse khi cần, khóa race/học thử/chống cấp lại, HGD đi bộ. NPC-02 một phần,525=127/13/385. Chưa hình,questscript hoặc game/schema.


## 92. CHG-059 — Tra cứu lore theo mục và theme sáng ·22/10/2026

Hồ sơ212: chỉ mục124mục tự sinh từ Markdown; lọc loại/nghề/race, tìm toàn nội dung, đọc riêng và linkdoc+section/đọc toànvăn. Hai hub dùng theme sáng; không đổi game. Kiểm trình duyệt19nhánh/7nghề/3race/5vùng, bộ lọc kết hợp, link/reload,390px và gallery.525=127/13/385 không đổi. Tuyến V02 chi tiết tiếp tục sau lượt UI.


## 93. CHG-060 — Ưu tiên V01 đủ loại tuyến và dungeon ·22/10/2026

Theo yêu cầu tập trung1–10, story17/18/19 chốt gói nội dung:8main/6side/5xuất thân,3daily/2weekly/3legend,6phòng/1boss và12cư dân6hub/6ngoài. Thêm5profile N25–N29 trong ngân sách82. Bỏ hoàn toàn đề xuất JOB00/phiếu giới thiệu V01 sau người dùng sửa; nghề chỉ15/nhánh30. Thời điểm reset04:00 và thứHai04:00 Asia/Bangkok là quyết định thiết kế mới, chưa backend. Chưa cân số/loot/asset/layout/runtime;525=127/13/385 giữ. V02 chi tiết chưa viết, không báo hoàn thành.


## 94. CHG-061 — V01 hai hầm khám phá và30chặng trong8gói chính ·22/10/2026

Story20 phân biệt worldcave vàphó bản: HốcRễDướiGuồng, KhoVôiBênSânChuông; khôngboss riêng, khôngbay, khônggiữmainclue,2trong8rương. Cần dựtoáninterior, khônggiả cóasset. Main8gói chứa30chặng cócheckpoint, thoại khôngtựthànhquest; khôngcộngthành38main. V01 khôngnghề trước15.525=127/13/385 giữ.


## 95. CHG-062 — NPC-01/02V01 và dừng trước vẽ ·22/10/2026

Theo yêu cầu tiếp checklist tới mục vẽ, giữ truyện trongMap1.213 chốt7vai/ma trận12cư dân/menu/phạm vi biết;NPC-01done.214 chốt tuổi tácgiả, ngoại hìnhmôtả vàphản hồi12NPCV01;NPC-02toàncục vẫnpartial. NPC-03 kếtiếp cần chân dung/hìnhđứng/biểucảm, đãdừng chưaảnh.525=128/13/384. Không mởrộng truyệnV02/gamecode/SQL.


## 96. CHG-063 — Vẽ12NPCMap1 theo mẫu ·22/10/2026

Người dùng cho phép vẽ NPC-03 và gửi lại mẫu.215bàn giao12PNG concept:12hình đứng/36portrait/24keypose bằng image_gen tích hợp, nguồn/prompt/hash lưu. Loại bảnSella đầu nétmịn. Gallery vàvisualhub có12mục, liênkếthồsơ. NPC-03partial,525=128/14/383; chưa native/nhiềuhướng/animationloop, không game/SQL hoặc truyệnV02.


## 97. CHG-064 — Sơ đồ bố trí chức năngV01r001 ·22/10/2026

216chốt hệL01–09/mạngvòng/táchintro/hubTây/riverbridge vàvịtrídựkiến12NPC/8rương/2elite/1bossmap/2cave/1instance. HTML/SVGxemlớp/chọnnhiệmvụ/inspector/xuấtSVG, graphcheckkhôngthaynavmesh. Không imagegen/gamecode/tilemap hoặc artworkmớitronglượtnày. NPC07đặtngoàiellipshubđúng6/6.525=128/14/383giữ; tiếplayoutmỹthuật/greyboxtrướckhichốtrouteNPC.


## 98. CHG-065 — Concept môi trườngV01r002 và kế hoạchgreybox ·22/10/2026

217/218: image_gen vẽconcept theo guide216 vàV4, lưu nguồn/prompt/hash. Trangxem13ghim gầnđúng/lưới12ô bốtrí; không suycoordengine hoặc12streamingchunk. Chốt tiêu chí bốtrí theoD, footprintcôngtrình, nước/caođộ và12ca greybox chưa chạy. Cần kiểmnhữngdịchchuyển/cầunhỏ trongảnh trướcnavmesh.525=128/14/383 giữ; khôngtilemap/engine/gameDB hoặc mởtruyệnMap2.


## 99. CHG-066 — Greybox tương tác Map 1 · 23/10/2026

219 bàn giao prototype độc lập: WASD/mũi tên, F, ba kích thước thân, collision công trình/sông sâu/cầu, nước cạn, điểm NPC và phòng hầm. Kiểm mô hình đường tiếp cận 28 điểm cho ba thân; vào/ra hai hầm và phó bản; không lỗi browser trong ca kiểm tra. Oren chỉ là trạng thái tương tác mẫu, chưa trận boss hoặc ba kết thúc được chơi thử đầy đủ. Không sửa game thủ thành, database hay mở truyện Map 2. Giữ 525=128/14/383; MAP-01 vẫn một phần.


## 100. CHG-067 — Đặc tả bộ môi trường Map 1 · 23/10/2026

220 phân họ tile, mép chuyển, công trình và đạo cụ theo khu; collision tách hình, mái/tán có hợp đồng che khuất. Chọn lát cắt Trại–Suối–Cầu để vẽ và kiểm trước nhân toàn map. Chưa vẽ, khóa camera/native hay khẳng định đã duyệt manual greybox. HTML đọc cùng nguồn Markdown, không kho tài liệu thứ hai. Giữ 525=128/14/383; không sửa thủ thành/DB/cốt truyện ngoài Map 1.


## 101. CHG-068 — Vẽ cảnh mẫu môi trường Map 1 · 23/10/2026

221 bàn giao một PNG concept Trại–Suối–Cầu bằng image_gen tích hợp theo hai tham chiếu đã chốt. Lưu prompt, nguồn, hash; HTML xem ảnh nguyên/vừa trang. Ghi hạn chế lối xuống suối, cây/hoa dày và guồng chưa hỏng rõ; chưa hợp thức hóa thành đường đi hoặc tỷ lệ production. Không tile native/animation/engine/DB, giữ 525=128/14/383.


## 102. CHG-069 — Danh mục sản xuất asset V01 · 23/10/2026

222 và catalog.json chốt 38 họ, ưu tiên P0/P1/P2, khu dùng chung/đặc trưng, dạng tách và metadata. HTML lọc cùng dữ liệu; Markdown sinh bằng script, không đếm là ảnh native hoàn thiện. Giữ nguồn NPC/roster/quy tắc không quái bay. Không vẽ mới hay sửa gameplay/DB/thủ thành. 525=128/14/383 giữ; tiếp khóa native/camera và bộ tile nền P0.


## 103. CHG-070 — Quy chuẩn P0 và cảnh kiểm tỷ lệ · 23/10/2026

223 đối chiếu ART-04/35–38; làm rõ geometry môi trường/texture pixel và actor sprite dựng đứng, cập nhật 38 họ trong catalog/bảng 222 cùng pipeline. Giữ texture32/body40/canvas96 là tham chiếu có điều kiện. Thiết kế T1–T6, cổng G1–G5 và hợp đồng ghép cỏ–đất–đường, chưa scene engine/asset native/kết quả đo. Không gameplay/DB/thủ thành; 525=128/14/383.


## 104. CHG-071 — Scene kiểm P0 WebGL · 23/10/2026

224 bàn giao mẫu 3D thực bằng WebGL, camera ortho và sprite billboard proxy; sáu trạm, collision/surface cầu/dốc/nước. Kiểm software WebGL và mobile, không suy GPU performance hoặc G1–G5 đạt. Không texture/art native, class/combat/DB/game thủ thành; không chốt renderer production. 525=128/14/383 giữ.


## 105. CHG-072 — Đánh giá P0 và nguồn game tham khảo · 23/10/2026

225 đối chiếu nguồn chính thức OctopathII, StarOceanSSR, TriangleStrategy và Ravendawn media (không suy renderer MMO). Giữ pipeline, chưa art/camera nghiệm thu; nêu proxy thiếu chi tiết, thiếu tiếp đất/bờ, occlusion đơn giản và upload/draw từng ô mỗi frame. Chốt thứ tự sửa bằng sprite/texture đại diện, framing, lát cắt và benchmark thực. Không sửa scene/art/gameplay; giữ525=128/14/383.


## 106. CHG-073 — Brief bộ mẫu chốt hình P0 · 23/10/2026

226 cụ thể hóa225 thành bộ ba tân binh bốn hướng/lớp mũ và pose bước, họ nền và lát cắt A–E. Giữ novice/race không nghề mặc định; hotbar13ô1–9,QERZ. So góc/framing có cấu hình, lỗi chặn không được bù bằng điểm đẹp. Chưa vẽ native/sửa scene/chốt camera, giữ525=128/14/383; bước tiếp vẽ bảng đại diện rồi chuẩn hóa/lắp kiểm.


## 107. CHG-074 — Vẽ ba tân binh bốn hướng · 23/10/2026

227 bàn giao một bảng12hình bằng image_gen tích hợp theo reference r006, trang xem/prompt/provenance/hash. Ghi lỗi consistency dây/túi, profile cần thử camera và bóng cần tách; không native/mũ/pose bước/animation hoặc tích hợp scene. Giữ novice không nghề mặc định và525=128/14/383; không game/DB/thủ thành.


## 108. CHG-075 — Body r002 và mũ tân binh fitting · 23/10/2026

228 có hai PNG image_gen: body giản lược dây/túi xuyên hướng, mũ vải12đầu. Lưu nguồn/prompt/hash, trang đổi bảng. Giản lược fixture không xóa item túi trong thiết kế game; mũ cùng một loại, khác hình vừa đầu, không stat mới. Ghi khác nhẹ tóc/độ phồng và portrait không đồng frame/native. Chưa pose bước/overlay/scene;525=128/14/383.


## 109. CHG-076 — Pose bước Con Người bốn hướng · 23/10/2026

229 bàn giao một bảng4hướng bằng image_gen theo bodyr002; prompt/hash/nguồn lưu. Ghi lệch tỷ lệ Idle và phase chưa kiểm; không giả animation bằng4hướng. Thiết kế pha/ground/controller/head socket, chưa native/loop/scene. Giữ525=128/14/383; không game/DB/thủ thành.


## 110. CHG-077 — Alpha/atlas draft và scene r002 · 23/10/2026

230 nguồn alpha bốn hướng bằng image_gen, đo bounds và đóng gói thử96/ground48,80 qua Canvas, giữ source/provenance. Scene r002 dùng hình thật, đổi hướng và bóng surface, còn Idle trượt chưa animation. Elf/Lùnproxy; ghi hạn chế resample/viền/bóngdốc. KiểmsoftwareWebGL, khôngG1–G5đạt hoặc GPU benchmark. Không gameplay/DB/thủ thành;525=128/14/383.


## 111. CHG-078 — Walk ngang nháp và Idle–Move · 23/10/2026

231 có nguồn4key được chỉnh sau hai bản chưa đạt; phasechân/gối còn cầnartist sửa. Atlas96 căn bằngalpha/torso; scene r003 phase theo quãng đường thực, dừngIdle/vật cản; Tâymirrorfixture, Bắc/NamIdle. Kiểmkeyboard/state/GL/mobile, chưa approvalwalk/GPU hoặcG1–G5. Giữ525=128/14/383; không gameplay/DB/thủ thành.


## 112. CHG-079 — Hai vật liệu nền và mép mask P0 · 23/10/2026

232 image_gen tạo cỏ/đất riêng theoV4; draft32/nguồn/hash/đomép, trang3×3. Scene r004 dùng plane1lượt vẽ, đườngmaskpixel và thanhchi tiết để kiểm actor; không bộ47tile hoặc artnative đãduyệt. Bỏ456hộpnền không suyFPS. Giữmodel/clipcũ và525=128/14/383; không gameplay/DB/thủ thành.


## 113. CHG-080 — Bờ nước và vật liệu cầu r005 · 23/10/2026

233 hai nguồn image_gen đá/sỏi, draft32/mép/provenance. Nước shader tách logic, bờ thấp/deck/rail/mố/trụ; sửa deck hình1.08→1.0 để khớp surface, không đổi model. Kiểm qua cầu, cạn/sâu, browser/mobile; texture mạch/nhịp còn cầncleanup, không G1–G5 hoặc GPUđạt. Giữ525=128/14/383; không gameplay/DB/thủ thành.


## 114. CHG-081 — Bốn loài cây và nhà trại r006 · 23/10/2026

234 đáp ứng yêu cầu đa dạng cây:4nguồn thân/tán riêng và2vậtliệu ngói/gỗ image_gen, metadata/provenance. Ráp8componentdraft, thư viện/cấu hình dùng chung, lựa chọn trongscene, lay tán/gốc cố định và giảm che. Nhàgeometry mái dốc/cửa/khung, chưainterior. Quảtrangtrí, khôngharvest/stat. KiểmsoftwareGL/mobile, chưacleanup/native/G1–G5;525=128/14/383.
