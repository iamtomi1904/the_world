# 06 — Thiết kế giao diện, cửa sổ và điều khiển

Đồng bộ phong cách pixel trung cổ của Ẩn Thành: nền xanh rừng/tối, kim loại/vàng trầm, hình khối đọc rõ, trang trí vừa đủ. Đây là danh sách màn hình/wireframe cần làm, chưa phải giao diện đã vẽ hoặc đã vào game.

## 1. Quy tắc thiết kế UI chung

- [x] UI-01 · Hoàn thiện token màu/chữ/khoảng cách/khung/lớp nổi và thành phần, trạng thái cơ sở theo pixel V4. [Hồ sơ UI-01](46_UI_01_BO_QUY_CHUAN_GIAO_DIEN.md), 21/10/2026; chưa vẽ đủ cửa sổ hoặc kiểm contrast.
- [x] UI-02 · Hoàn thiện phân loại HUD/panel/cửa sổ/modal/fullscreen và quyền xem/nháp/thao tác trong combat, text focus, dịch vụ, death/reconnect. [Hồ sơ UI-02](47_UI_02_LOAI_CUA_SO_VA_DIEU_KHIEN.md), 21/10/2026; chưa triển khai hoặc kiểm input.
- [ ] UI-03 · Thiết kế một phần: cập nhật [thanh 13 ô kỹ năng/vật phẩm](64_HOTBAR_13_O_KY_NANG_VAT_PHAM.md); cần hoàn thiện bố cục/mapping tương ứng, bản tám ô cũ đã được thay. Chưa triển khai/kiểm thử.
- [x] UI-04 · Hoàn thiện kéo/resize/ghim/dock, editor HUD, neo/clamp, preset thiết bị và reset/import an toàn. [Hồ sơ UI-04](49_UI_04_KEO_GHIM_VA_LUU_BO_CUC.md), 21/10/2026; chưa triển khai storage/editor.
- [x] UI-05 · Hoàn thiện ba trục control/dữ liệu/request, pending/thành công/từ chối/chưa rõ kết quả, loading/rỗng/hết hạn và ma trận phản hồi. [Hồ sơ UI-05](50_UI_05_TRANG_THAI_VA_PHAN_HOI.md), 21/10/2026; chưa dựng hoặc kiểm runtime.
- [x] UI-06 · Hoàn thiện lớp theo owner, focus/hit-test, Esc một bước, ~ giữ nháp/ẩn nhanh, modal và chống click/wheel xuyên. [Hồ sơ UI-06](51_UI_06_THU_TU_CHONG_VA_DONG_CUA_SO.md), 21/10/2026; chưa viết window/input manager.
- [x] UI-07 · Tooltip hover/focus/detail, ghim và so sánh vật phẩm/kỹ năng, quyền snapshot và cửa sổ nhỏ. [Hồ sơ](53_UI_07_TOOLTIP_VA_SO_SANH.md), 21/10/2026; hoàn thiện thiết kế phạm vi, chưa triển khai/kiểm thử.
- [x] UI-08 · Gán lại action, xung đột theo context/layout, reset/import/profile thiết bị. [Hồ sơ](54_UI_08_GAN_LAI_PHIM.md), 21/10/2026; hoàn thiện thiết kế phạm vi, chưa triển khai/kiểm thử.
- [x] UI-09 · Focus chat/IME tiếng Việt, clipboard, modifier và giải phóng input giữ khi mất focus. [Hồ sơ](55_UI_09_CHAT_IME_VA_FOCUS.md), 21/10/2026; hoàn thiện thiết kế phạm vi, chưa triển khai/kiểm thử.
- [x] UI-10 · Preview hậu quả/giá/binding, xác nhận theo snapshot, pending và quyết định class/truyện. [Hồ sơ](56_UI_10_XAC_NHAN_VA_HAU_QUA.md), 21/10/2026; hoàn thiện thiết kế phạm vi, chưa triển khai/kiểm thử.
- [x] UI-11 · Hợp đồng trạng thái màn, chết/chuyển vùng/disconnect/reconnect và phục hồi theo họ cửa sổ. [Hồ sơ](57_UI_11_VONG_DOI_CUA_SO.md), 21/10/2026; hoàn thiện thiết kế phạm vi, chưa triển khai/kiểm thử.
- [x] UI-12 · Chữ lớn, glyph ngoài màu, keyboard, caption và giảm flash/rung/VFX; chưa audit tiếp cận. [Hồ sơ](58_UI_12_TIEP_CAN_VA_GIAM_HIEU_UNG.md), 21/10/2026; hoàn thiện thiết kế phạm vi, chưa triển khai/kiểm thử.

## 2. Danh mục màn hình/cửa sổ phải có wireframe

Phím trong bảng là **đề xuất riêng cho MMORPG**, chưa thay phím thủ thành. Dấu `—` nghĩa mở bằng nút/menu/NPC và có thể gán phím tùy chọn; không bắt mỗi tính năng có một phím mặc định gây trùng. Trên mobile dùng nút tương ứng trong menu/hotbar; xem mục 4.

| Mã | Màn hình/cửa sổ | Lối vào / phím đề xuất | Thành phần bắt buộc khi phác |
|---|---|---|---|
| WIN-01 | Đăng nhập/đăng ký | Trang đầu | Tài khoản, mật khẩu, trạng thái, điều khoản, lỗi và trợ giúp |
| WIN-02 | Khôi phục/bảo vệ tài khoản | Từ đăng nhập/hồ sơ | Luồng xác minh, phiên đăng nhập, kết quả, lịch sử bảo vệ |
| WIN-03 | Chọn server/khu vực | Sau đăng nhập | Nhân vật đang có, ping/đầy/bảo trì, mô tả môi trường |
| WIN-04 | Tạo nhân vật | Từ chọn nhân vật | Chủng tộc/xuất thân, ngoại hình, avatar, tên, preview nghề tương lai; Tân Binh chưa chọn nghề |
| WIN-05 | Chọn/xóa nhân vật | Sau chọn server | Hình đại diện, cấp, vị trí, phiên, cảnh báo xóa, khôi phục nếu có |
| WIN-06 | Loading/chuyển khu | Tự động | Tiến độ thật, mẹo có kiểm soát spoiler, hủy/thử lại khi lỗi |
| WIN-07 | HUD | Trong game | HP/tài nguyên/XP, hotbar, mục tiêu, party, minimap, quest, buff/debuff, thông báo |
| WIN-08 | Nhân vật/trang bị | C | Model/portrait, slot, chỉ số, phần nguồn đóng góp, so sánh và điểm chưa cộng |
| WIN-09 | Cộng điểm/reset build | Từ Nhân vật | Điểm còn, tăng/giảm trước xác nhận, preview số dẫn xuất và quy tắc reset theo hệ; reset build SP/TP miễn phí tại điểm nghỉ |
| WIN-10 | Skillbook | K | Phân active/passive, rank, cost/cooldown, target, mô tả, học/nâng, kéo hotbar |
| WIN-11 | Talent/chuyên tinh/preset | Tab Skillbook | Nhánh, điều kiện, điểm, xem trước và reset/loadout |
| WIN-12 | Tu luyện | U | Cảnh giới, progress, điều kiện, đột phá, vật liệu, tỉ lệ và kết quả |
| WIN-13 | Khai mạch | V | Sơ đồ nút, đường nối, tier, hiệu ứng, mở/reset và chi phí |
| WIN-14 | Tín ngưỡng | J | Thần, giáo lý, ân huệ, tài nguyên, nghi lễ, đổi niềm tin và cảnh báo |
| WIN-15 | Cánh | Y | Preview, dạng đang dùng/skin, level/bậc, vật liệu, tiến hóa, ẩn cánh |
| WIN-16 | Thú cưỡi | Menu; H để gọi | Danh mục, đang dùng, skin, tiến trình, hạn chế vùng và preview |
| WIN-17 | Pet/đồng hành | Menu | Bộ sưu tập, summon, AI/lệnh, build, skill, đồ và tiến hóa nếu có |
| WIN-18 | Tiến hóa | Từ đối tượng | Hai dạng trước/sau, giữ/mất gì, nguyên liệu, điều kiện, xác suất, kết quả |
| WIN-19 | Túi đồ | T | Filter/tab/sort/search, stack, khóa, quest bag, tiền, đầy túi và thao tác nhanh |
| WIN-20 | Chi tiết/so sánh vật phẩm | Chọn món | Base/affix/khảm/nâng/set, nguồn, hạn, binding, menu dùng/bán/gửi |
| WIN-21 | Kho cá nhân/account | NPC/kho | Phạm vi, chuyển, sort, dung lượng, quyền món và chi phí mở thêm nếu có |
| WIN-22 | Rèn/chế tác | NPC/nghề | Recipe, vật liệu, tool/station, quality/binding, số lượng, hàng chờ |
| WIN-23 | Khảm | NPC/menu đồ | Socket, gem hợp lệ, tháo/thay, trước-sau, phí và bảo vệ món |
| WIN-24 | Cường hóa | NPC/menu đồ | Bậc hiện tại/đích, rate/pity, vật liệu, bảo hộ, rủi ro, kết quả |
| WIN-25 | Nâng cấp/tiến bậc đồ | NPC/menu đồ | Dạng đích, giữ/mất dòng/gem/nâng, nguồn vật liệu, preview |
| WIN-26 | Tẩy/đổi dòng | NPC/menu đồ | Pool, dòng khóa, rate, cost, giữ cũ/nhận mới và lịch sử |
| WIN-27 | Phân giải/tái chế | NPC/nghề | Chọn món có bảo vệ, preview đầu ra, binding, xác nhận hàng loạt |
| WIN-28 | Nghề/thu thập | Menu | Tiến trình nghề, công thức, nguồn học, công cụ và danh mục vật liệu |
| WIN-29 | Nhật ký nhiệm vụ | L | Chính/phụ/lặp, mục tiêu, manh mối, hệ quả đã biết, theo dõi và hủy nếu được |
| WIN-30 | Đối thoại NPC | F / nhấp tương tác | Chân dung, tên, giọng/phụ đề, lựa chọn, skip/xem lại và dịch vụ |
| WIN-31 | Bản đồ thế giới/vùng | M | Đã khám phá, legend, quest, dịch vụ, route, pin nhóm/cá nhân, filter |
| WIN-32 | Dịch chuyển | Điểm dịch chuyển | Điểm đã mở, điều kiện/giá, vị trí đích, xác nhận và lỗi nguồn |
| WIN-33 | Shop NPC | NPC | Danh mục, giá/tiền, stock, điều kiện, mua nhiều, bán/mua lại nếu có |
| WIN-34 | Ví/hạn mức | Menu/biểu tượng tiền | Ba tiền, số dư tiêu được/giữ/chờ, cap, nguồn/nơi tiêu và lịch sử |
| WIN-35 | Shop nạp/ngoại trang | Menu | Product, đơn vị tiền, preview, giới hạn, đơn mua, receipt và hỗ trợ |
| WIN-36 | Chợ | Menu/NPC | Tìm/lọc, listing, giá đơn vị/toàn bộ, fee, escrow, đang bán/đã bán/trả đồ |
| WIN-37 | Giao dịch trực tiếp | Chọn người | Món/tiền hai bên, tooltip thật, khóa đề nghị, xác nhận, hủy và biên nhận |
| WIN-38 | Hộp quà | Dùng hộp | Pool/rate, chọn hay ngẫu nhiên, guarantee, trùng, mở một/nhiều, lịch sử |
| WIN-39 | Thư | Menu | System/player, attachment, COD nếu có, nhận từng/tất cả, thời hạn và trả |
| WIN-40 | Bạn bè/blacklist | O | Online/vị trí công bố, mời, chặn, ghi chú và quyền riêng tư |
| WIN-41 | Chat | Enter | Kênh, whisper, link item, filter, mute/report, focus không kích combat |
| WIN-42 | Party | P | Role, cấp, leader, mời/rời, loot, ready check, vị trí và khác tiến độ |
| WIN-43 | Tìm nhóm | Menu/Party | Nội dung/role/điều kiện, xin vào, queue, hủy, từ chối có lý do |
| WIN-44 | Guild | G | Thành viên/quyền, thông báo, tiến trình, đóng góp, nhiệm vụ, kho và log |
| WIN-45 | Kho/đặt hàng guild | Tab Guild | Quyền rút/gửi, giới hạn, item binding, đề nghị cấp, lịch sử |
| WIN-46 | Sự kiện/lịch | Menu | Giờ/múi giờ, điều kiện, phần thưởng, cap, tham gia/đổi quà và hết hạn |
| WIN-47 | Thành tựu/danh hiệu | Menu | Tiến trình, reward đã nhận, nguồn, theo account/nhân vật và gắn danh hiệu |
| WIN-48 | Bách khoa/collection | Menu | Loài/boss/địa điểm/lore, phần đã khám phá, spoiler và phần thưởng |
| WIN-49 | Danh vọng/phe | Menu | Quan hệ hiện tại, nguồn thay đổi, quyền lợi, mâu thuẫn và xác nhận |
| WIN-50 | Dungeon/boss entry | Cổng/NPC | Solo/nhóm, nội dung truyện, điều kiện, lượt, cảnh báo spoiler, rời |
| WIN-51 | Loot/kết quả trận | Sau hoạt động | Đóng góp, quyền món, chia, cap, túi đầy, lịch sử và đường nhận lại |
| WIN-52 | Chết/hồi sinh | Khi gục/chết | Ai cứu được, điểm về, penalty, thời hạn, không bấm nhầm mua |
| WIN-53 | Lựa chọn cốt truyện | Cảnh riêng | Điều đã biết, hệ quả dự kiến, xác nhận, chủ quyết định và không tự chọn khi mất mạng |
| WIN-54 | Settings | Esc/menu | Đồ họa, VFX, âm thanh, input, UI, tiếp cận, privacy, tài khoản |
| WIN-55 | Hướng dẫn/hỗ trợ/báo cáo | Menu | Tra hệ thống, nhật ký lỗi/tranh chấp, ticket, phản hồi, báo cáo người chơi |
| WIN-56 | Mất mạng/reconnect/bảo trì | Khi cần | Trạng thái thật, thử lại, phần đang chờ, cách về an toàn và không cấp/tiêu trùng |
| WIN-57 | PvP/xếp hạng | M2/X | Consent, luật, normalize, đội/role, rewards, abandon và lịch mùa |
| WIN-58 | Nhà/sinh hoạt | X | Quyền khách, đồ trang trí, layout, kho, sản xuất và reset/thu hồi |

## 3. Bản phác bắt buộc cho mỗi cửa sổ

- [ ] SCREEN-01 · Một wireframe luồng bình thường và một mẫu ở màn nhỏ, không chỉ ảnh “đẹp” không có nội dung thật.
- [ ] SCREEN-02 · Danh sách thao tác, vùng click, tab, nút quay lại/đóng, thông tin chính/phụ và ưu tiên bàn phím.
- [ ] SCREEN-03 · State matrix: không có dữ liệu, khóa, thiếu tài nguyên, đang chờ, lỗi, thành công, hết hạn và bị hủy.
- [ ] SCREEN-04 · Nội dung tiếng Việt, đơn vị, số dài, tooltip, lý do bị khóa và gợi ý đi đâu để đáp ứng điều kiện.
- [ ] SCREEN-05 · Danh sách asset cần vẽ, kích cỡ nhỏ/lớn, trạng thái và phiên bản có/không animation.
- [ ] SCREEN-06 · Xác nhận hành động có phí/mất đồ, xem trước, receipt/log và cách quay lại sau ngắt kết nối.
- [ ] SCREEN-07 · Hành vi khi nhiều cửa sổ cùng mở, khi combat/death/teleport và khi người dùng đang nhập chat.
- [ ] SCREEN-08 · Chủ sở hữu thông tin: mình/đồng đội/người khác/account/guild; không hiện tài sản hoặc spoiler riêng cho sai người.

## 4. Bộ phím/điều khiển đề xuất

| Nhóm | Đề xuất | Việc phải kiểm trong thiết kế |
|---|---|---|
| Di chuyển | WASD/mũi tên | Không chạy khi nhập ô chữ; có cảm ứng thay thế |
| Đánh/ngắm | Chuột trái/con trỏ | Click UI không phát đòn; ngắm với touch có mô tả |
| Tương tác | F / nút cạnh mục tiêu | Ưu tiên đối tượng, tránh nhặt/đối thoại nhầm lúc đánh |
| Kỹ năng | 13 ô hỗn hợp 1–9/Q/E/R/Z, kéo skill hoặc item, đổi bind được | Không đóng cứng ba skill cho mọi class MMO; thống nhất hiển thị bind |
| Né hoặc đỡ | Space gọi cùng action cơ động đang mang, không thêm né/đỡ riêng | Không gán cùng phím cho hai hành động chưa có quy tắc ưu tiên |
| Nhân vật/túi/skill/quest/map | C / T / K / L / M | Không tự thay phím thủ thành; menu luôn có nút mở |
| Các hệ sâu | Menu, tùy chọn gán khi hệ mở | Chỉ hiện phím của hệ đã mở; cho gán lại hoặc để trống |
| Cưỡi thú | H | Gọi/dừng, trạng thái không thể dùng và hình thái class |
| Bạn/party/guild | O/P/G | Cửa sổ khác nhau, không P vừa tìm nhóm vừa gửi mời |
| Chat | Enter | Escape focus/đóng, gửi và link item rõ |
| Đóng cửa sổ | Backquote (~) | Ẩn các cửa sổ gameplay tùy chọn, giữ nháp tạm theo UI-06; không hủy request đang gửi |
| Menu hệ thống | Esc | Ưu tiên thoát nhập/tooltip/modal trước menu; không lập tức rời trận hoặc đăng xuất |

- [x] INPUT-01 · Bản đồ phím web/PC, tám active, Space alias cùng dòng cơ động, ngắm/confirm và phím reserved. [Hồ sơ](59_INPUT_01_DIEU_KHIEN_WEB_PC.md), 21/10/2026; hoàn thiện thiết kế phạm vi, chưa triển khai/kiểm thử.
- [ ] INPUT-02 · Thiết kế một phần: cập nhật [thanh 13 ô kỹ năng/vật phẩm](64_HOTBAR_13_O_KY_NANG_VAT_PHAM.md); cần hoàn thiện bố cục/mapping tương ứng, bản tám ô cũ đã được thay. Chưa triển khai/kiểm thử.
- [ ] INPUT-03 · Thiết kế một phần: cập nhật [thanh 13 ô kỹ năng/vật phẩm](64_HOTBAR_13_O_KY_NANG_VAT_PHAM.md); cần hoàn thiện bố cục/mapping tương ứng, bản tám ô cũ đã được thay. Chưa triển khai/kiểm thử.
- [x] INPUT-04 · Gesture nhấn/giữ/kéo/cancel, khóa chỉnh hotbar, repeat theo combat và thao tác nhanh an toàn. [Hồ sơ](62_INPUT_04_NHAN_GIU_KEO_THA.md), 21/10/2026; hoàn thiện thiết kế phạm vi, chưa triển khai/kiểm thử.

## 5. Những luồng bắt buộc đi xuyên màn hình

- [ ] FLOW-01 · Người mới: đăng nhập → server → tạo chủng tộc/Tân Binh/avatar → mở đầu → HUD → nhiệm vụ → trang bị đầu.
- [ ] FLOW-02 · Món đồ: loot → tooltip/so sánh → mặc → nâng/khảm → chuyển build → bán/thu hồi hợp lệ.
- [ ] FLOW-03 · Tiến hóa: mở đối tượng → điều kiện → xem trước → chọn nguyên liệu → xác nhận → kết quả → avatar/model/skill đồng bộ.
- [ ] FLOW-04 · Giao dịch: ví/cap → tìm món → xem dòng thật → giá/phí → xác nhận → pending → receipt → túi/tiền cập nhật.
- [ ] FLOW-05 · Nhiệm vụ nhóm: mời → cảnh riêng/tiến độ → vai người hỗ trợ → lựa chọn → kết quả cá nhân → trở lại khu chung.
- [ ] FLOW-06 · Mạng lỗi khi đang mở hộp/nâng đồ/nạp/chợ: UI không cho bấm lại để cấp trùng và có cách xem kết quả cuối.
- [ ] FLOW-07 · Người trở lại sau nghỉ: chọn nhân vật → xem thay đổi/chỗ đang ở → tìm mục tiêu → cấu hình lại bind → chơi tiếp.

## Phạm vi web và client PC đầu tiên

Các wireframe SCREEN-01…08 và luồng FLOW-01…07 phải thể hiện cả web và client PC khi có khác biệt. Dùng chung HUD/cửa sổ gameplay; bổ sung các trạng thái phân phối và phiên đăng nhập:

- Web: tải lần đầu, asset đang tải/lỗi, yêu cầu tải lại sau cập nhật, tab mất focus, khôi phục sau reload.
- PC: tải bộ cài, cài đặt, kiểm tra phiên bản, tiến độ cập nhật, thử lại khi lỗi mạng và báo thiếu dung lượng; chưa mặc định phải có launcher riêng.
- Cả hai: đăng nhập, phiên hết hạn, phiên đã dùng trên thiết bị khác, bảo trì, phiên bản không tương thích, kết nối lại và thông báo tiến độ đã lưu.
- Thiết lập: cửa sổ/toàn màn hình theo khả năng nền tảng, cỡ UI, âm thanh, chất lượng VFX và gán phím. Ghi rõ phím hệ điều hành/trình duyệt không thể chiếm.

Đây là phần bổ sung hồ sơ cửa sổ hiện có, chưa phải các màn hình đã triển khai.


**Đợt UI/input 10 mục:** [Tổng hợp quyết định và đầu ra](63_TONG_HOP_UI_INPUT_10_MUC.md). Các dấu [x] là hoàn thiện hồ sơ, không phải UI đã vẽ hoặc thiết bị đã hỗ trợ.


**Hotbar hiện hành:** [13 ô kỹ năng/vật phẩm tiêu thụ](64_HOTBAR_13_O_KY_NANG_VAT_PHAM.md); thay mọi mô tả tám ô khi xung đột.
