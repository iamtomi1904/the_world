# 08 — Mẫu hồ sơ, phân công và tiêu chí duyệt

Mục đích của checklist là tạo đầu việc rõ để thiết kế. Không được lấy việc file checklist đã tồn tại làm bằng chứng từng hệ đã hoàn thành. Dưới đây là cấu trúc tài liệu phải có trước khi giao sản xuất.

## 1. Mẫu hồ sơ một hệ thống

| Phần | Phải điền |
|---|---|
| Nhận diện | Mã, tên, phiên bản, M0/M1/M2/X, người phụ trách/người duyệt, trạng thái và liên kết phụ thuộc |
| Mục tiêu | Hệ giải quyết nhu cầu nào, ai dùng, fantasy/lore, vòng chơi và điều không thuộc hệ |
| Mở khóa và vòng đời | Cấp/quest/điều kiện mở, học/dùng/nâng/đổi/reset, giới hạn, hết hạn và nội dung sau trần |
| Quy luật | Công thức, thứ tự cộng, xác suất, cap, trùng lặp, tương thích/loại trừ và bảng ví dụ |
| Nội dung | Nhân vật/NPC, loại vật phẩm, currency, nguyên liệu, nguồn kiếm/nơi tiêu, cấp/hiếm/binding |
| Giao diện | Wireframe, điểm mở, tab/nút, luồng chính, tooltip, preview, xác nhận, log và toàn bộ trạng thái lỗi |
| Mỹ thuật/âm thanh | Icon, model/sprite, avatar, biến thể, animation, VFX, SFX; số lượng/kích thước/anchor và source |
| Điều khiển | Phím mặc định/tùy chỉnh, chuột, touch/gamepad nếu có, focus chat, đóng/hủy và thao tác nguy hiểm |
| Hệ quả và dữ liệu cần nhớ | Theo nhân vật/account/server, ảnh hưởng lore/quest, giữ/mất khi chết/đổi map/reset, đồng đội thấy gì |
| Giao thoa | Tác động lên combat/build, trang bị, party, pet, shop, trade, currency cap, PvP và phiên bản nội dung |
| Trường hợp lỗi/lợi dụng | Offline, bấm nhiều, đầy túi, thiếu tiền, mở nhiều cửa sổ, trùng thưởng, rollback, đồ đang trao đổi |
| Đánh giá | Tiêu chí cân bằng và khả dụng, bộ tình huống, kết quả đọc diễn, quyết định chưa chốt, ngày duyệt |

Những hàng “công thức/giá/rate” không được để “tùy dev cân” khi đánh dấu thiết kế đã duyệt. Có thể dẫn sang bảng cân bằng cùng phiên bản và người duyệt thay vì lặp số trong nhiều file.

## 2. Mẫu vật phẩm và bảng thuộc tính

### Hồ sơ vật phẩm

Mã/tên; nhóm chính/tag; mô tả công dụng/lore; cấp yêu cầu/item level/hiếm; slot/class/race nếu có; base stat; pool/tier affix; set/proc; socket/gem; nâng cấp/cường hóa; stack; durability nếu có; binding; hạn dùng; icon/ảnh drop/model/avatar liên quan; nguồn/recipe; giá/nơi tiêu; giao dịch/mail/phân giải; tooltip/phím; giới hạn account; cách dùng; trạng thái sau lỗi; người duyệt.

### Bảng cần làm cho đồ ngẫu nhiên

| Cột | Ý nghĩa phải chốt |
|---|---|
| Cấp/yêu cầu | Phân biệt nhân vật được mặc và item level dùng tính stat |
| Slot/nhóm | Vũ khí/giáp/trang sức và loại build hợp lệ |
| Độ hiếm | Mã hiếm, tên, màu/icon và điều được phép mở |
| Base budget | Công thức/dải theo cấp, có roll hay cố định, min/max và đơn vị |
| Affix count | Số dòng hoặc phân bố số dòng, dòng cố định và dòng ngẫu nhiên |
| Affix pool/tier | Slot/cấp/race/class nếu hợp lệ, range, weight, cấm trùng/xung đột |
| Các lớp nâng | Cường hóa/khảm/set/tiến hóa góp thêm gì, giới hạn và giữ/mất khi đổi |
| Đầu vào/đầu ra | Nguồn drop/recipe, xác suất, binding, giá/salvage và cap |

Không dùng một cột “lực chiến” thay hết các cột trên. Người chơi hỗ trợ, tank và damage phải có món hữu ích và cách so sánh được giải thích.

## 3. Mẫu túi quà và bảng xác suất

Mỗi hồ sơ phải nêu rõ đơn vị thử là **một lần mở**, **một lượt roll**, hay **một món trong nhóm**. Ghi phần thưởng bảo đảm riêng. Với chọn một món, xác suất các kết quả loại trừ nhau phải cộng đủ 100%. Với các lượt độc lập, xác suất ít nhất một lần có món là `1 − (1 − p)^n`; công thức chỉ áp dụng khi thực sự độc lập và không có pity/loại trừ làm đổi xác suất.

| Cột thiết kế | Phải có |
|---|---|
| Pool/version | Nguồn hộp, lịch hiệu lực, mỗi hộp dùng bảng nào |
| Kết quả | Item/nhóm, quantity range, binding, time limit |
| Cách chọn | Một trong nhiều, nhiều lượt, có/không thay thế, đã sở hữu thì sao |
| Rate thực | Weight và cách đổi % nếu dùng; xác suất cuối nếu qua nhóm |
| Bảo đảm | Pity scope, đếm/reset, threshold, mở hàng loạt và đổi phiên bản |
| Hạn mức | Quà/currency chịu cap account nào; vượt cap và đầy túi |
| Trình bày | Preview trước mở, tỷ lệ, lịch sử, kết quả và bỏ animation |

Đừng ghi `1%` mà không cho biết 1% cho nhóm hay món cuối. Chưa điền bảng được duyệt thì phần thiết kế hộp chưa hoàn thành, dù đã có icon đẹp.

## 4. Mẫu màn hình và asset

### Hồ sơ màn hình

Mã WIN; người dùng/mục đích; nơi mở/hotkey; kích thước/layout/scroll; dữ liệu cần hiển thị; hành động và nút; state matrix; luồng trước/sau; quyền tương tác trong combat; tooltip/keyboard/touch; phím đóng và input focus; preview/cảnh báo/log; asset list; nội dung Việt; trường hợp lỗi; tiêu chí duyệt.

### Phiếu đặt thiết kế asset

Mã; loại hệ/địa điểm; mục đích gameplay/lore; reference và phong cách; pixel size/tỷ lệ; phối cảnh/số hướng; frame/hành động; anchor/điểm bám vũ khí; màu/độ tương phản; silhouette; biến thể race/cấp/hiếm/hình thái; nền/alpha/vùng an toàn; icon/portrait/thumbnail liên quan; VFX/SFX; phiên bản/nguồn/quyền; người duyệt.

Một nhân vật tiến hóa chỉ có model đứng chưa được xem hoàn thành: phải đối chiếu avatar, động tác, vật phẩm/skill, UI preview và lúc trở lại dạng thường. Tương tự, một boss có ảnh lớn nhưng thiếu động tác cast/báo trước/va chạm chưa đủ bộ.

## 5. Mẫu phân công và trạng thái

| Mã | Đầu việc cụ thể | Người phụ trách theo vai trò | Phụ thuộc | Bằng chứng duyệt |
|---|---|---|---|---|
| PROD-04 | Bản tổng nguồn sức mạnh và ưu tiên gameplay | Lead game design | Tầm nhìn sản phẩm | Tài liệu có các đánh đổi được chủ dự án chấp thuận |
| MAP-01 | Sơ đồ Elarion có đường/nước/núi/10 thành | World design + narrative | Bộ nền thế giới | Bản đồ và chú giải khớp lịch sử |
| CHAR-01 | Ma trận race/class và silhouette | Character design + art | Camera, race/class | Ma trận và bản phác các tổ hợp đại diện |
| STAT-05 | Thứ tự tính chỉ số và ví dụ | Systems design | Chỉ số nền | Bảng ví dụ không mâu thuẫn, có cap và rounding |
| GEAR-04 | Bảng slot/cấp/hiếm/dòng | Item design + balance | STAT, slot | Base/affix budget, ví dụ món và giá trị tổng |
| CAP-01 | Quy tắc cap theo account | Economy design | Ba loại tiền | Phân biệt nguồn sinh và chuyển P2P, ví dụ vượt/reset/hoàn trả |
| GIFT-02 | Pool quà và % thực | Item + economy | ITEM/CAP | Bảng xác suất, pity, quantity, đầy túi và UI |
| WIN-19 | Wireframe túi và tooltip | UX/UI | Taxonomy, binding | Luồng thường/đầy/khóa/mobile và asset list |
| EVOLVE-05 | Bộ hình thái tiến hóa | Character/VFX/UI art | Quy tắc tiến hóa | Avatar/model/hành động/icon trước-sau cùng định danh |
| QUEST-09 | Nối nhiệm vụ đầu vào địa điểm/asset/UI | Quest/world/UI | Bộ truyện 1–10 | Danh mục nội dung và đường solo đầy đủ |
| DATA-04 | Trải nghiệm giao dịch bị ngắt | Product/economy + technical design | Giao dịch/tiêu tiền | Kết quả duy nhất, thông báo và cách lấy lại kết quả |
| SAFE-06 | Luồng hỗ trợ vật phẩm/tài khoản | Operations + UX | Receipt/log/chính sách | Người chơi gửi đủ thông tin, người xử lý có quyền rõ |

Vai trò không có nghĩa dự án cần tuyển đủ từng người ngay; một người có thể nhận nhiều vai. Khi bắt đầu thực tế, thay vai bằng người phụ trách thật, thời hạn, URL/file bàn giao và người duyệt.

Trạng thái đề xuất: Chưa bắt đầu → Đang thiết kế → Chờ phụ thuộc → Chờ duyệt → Cần sửa → Đã duyệt thiết kế → Đã có asset → Đã triển khai → Đã kiểm chứng. Checklist này theo dõi thiết kế; các trạng thái sau nằm trong tiến độ sản xuất khác.

## 6. Cổng duyệt theo mốc

### G0 — Đủ quyết định để thiết kế cùng hướng

- [ ] GATE-01 · Tầm nhìn, bản đầu, nền tảng, lore, race/class, phong cách hình và scope được ghi thành quyết định.
- [ ] GATE-02 · Có từ điển chỉ số, cách tính, slot, loại tiền, binding và cap; hệ phụ chưa chốt bị gắn nhãn chưa được sản xuất.
- [ ] GATE-03 · Có mục lục hồ sơ và một người chịu trách nhiệm cuối mỗi nhóm, không có hai bảng mâu thuẫn cùng được coi là chuẩn.

### G1 — Đủ thiết kế cho mẫu cấp 1–10

- [ ] GATE-04 · Một hành trình từ tạo nhân vật tới hết chương, gồm bản đồ/quest/combat/loot/túi/trang bị/UI có thể đọc đi xuyên.
- [ ] GATE-05 · Có bộ art đại diện và ma trận những trạng thái còn thiếu; chưa nhận cả một vùng chỉ vì có tile nền.
- [ ] GATE-06 · Đường solo và hỗ trợ tổ đội khác tiến độ; xử lý đầy túi, đổi build, chết và disconnect được nêu.

### G2 — Đủ thiết kế cho kinh tế và bản online đầu

- [ ] GATE-07 · Đường đời item/currency được đi từ nguồn đến sink, gồm trade/mail/chợ/GM/refund/cap.
- [ ] GATE-08 · Từng hộp/rate/nâng có bảng duyệt, version, UI preview và hậu quả khi không nhận đủ; không chỉ thông báo “may mắn”.
- [ ] GATE-09 · Có công cụ hỗ trợ/đối soát, tài khoản và quyền hạn; trạng thái pending không bị bỏ ngoài thiết kế.
- [ ] GATE-10 · Nội dung và thời gian phiên/ngày/tuần phù hợp scope, người mới/quay lại có lối theo kịp.

### G3 — Đủ thiết kế để thêm hệ lớn

- [ ] GATE-11 · Tu luyện/khai mạch/tín ngưỡng/cánh/pet/tiến hóa có mục đích khác nhau và tổng ngân sách sức mạnh đã xem chung.
- [ ] GATE-12 · Hệ mới có UI, asset ở mọi hình thái, item/currency và lịch mở, dữ liệu cũ giữ/đổi được giải thích.
- [ ] GATE-13 · PvP/lãnh thổ/housing/auto chưa chọn vẫn gắn X; không âm thầm trở thành điều kiện để hoàn thành PvE.

## 7. Các lượt đọc diễn thiết kế phải làm về sau

- [ ] REVIEW-01 · Người mới chưa biết hệ, nhân vật hỗ trợ, không nạp: đi qua phiên đầu và trả lời mình nên làm gì tiếp.
- [ ] REVIEW-02 · Người có nhiều nhân vật trong account: nhận tiền/event/hộp, đổi nhân vật, reset ngày, chuyển đồ cùng account.
- [ ] REVIEW-03 · Món rare đã khảm/cường hóa được nâng hiếm/đổi dòng/tiến hóa rồi giao dịch; không mất hoặc rửa binding trái luật.
- [ ] REVIEW-04 · Mở nhiều hộp có pity/loại trừ/tiền vượt cap/túi đầy: tính được kết quả và quyền nhận từng phần.
- [ ] REVIEW-05 · Đề nghị giao dịch sửa vào cuối, listing được hai người mua, logout đúng khi trừ tiền: có một kết quả và biên nhận.
- [ ] REVIEW-06 · Thú cưỡi + cánh + dạng cuối class + pet trong phòng hẹp: hành vi hiển thị/di chuyển/skill hợp lệ.
- [ ] REVIEW-07 · Màn nhỏ/cảm ứng/chữ lớn/không phân biệt màu: mở cửa sổ, xem tooltip, chọn vật và đọc boss vẫn được.
- [ ] REVIEW-08 · Người quay lại sau bản cập nhật/merge: vật phẩm/currency/build/quest/phím/tài sản guild không ở trạng thái vô chủ.

Các REVIEW này là **đầu việc tương lai**, chưa được đánh dấu đã thực hiện. Lần bàn giao hiện tại chỉ lập đầy đủ danh mục, yêu cầu hồ sơ và tiêu chí, không tuyên bố đã cân bằng hoặc đã vẽ những màn hình/asset tương ứng.

## 8. Bước thiết kế nên làm tiếp

1. Duyệt scope M0/M1/M2/X, điều khiển và phong cách mỹ thuật.
2. Làm hồ sơ chỉ số/class, slot đồ, ba tiền và cap account trước.
3. Vẽ wireframe các luồng người chơi chính, đồng thời làm bản đồ/nhân vật/quái mẫu của vùng 1–10.
4. Điền bảng vật phẩm/độ hiếm/dòng/loot/recipe và phần thưởng nhiệm vụ theo các quy luật đã duyệt.
5. Đọc diễn hệ thống liên thông rồi mới đặt vẽ hàng loạt asset và lập kế hoạch triển khai riêng.
