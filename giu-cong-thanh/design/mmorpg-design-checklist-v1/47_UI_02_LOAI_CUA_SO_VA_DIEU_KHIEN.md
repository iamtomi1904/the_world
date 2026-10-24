# UI-02 — Loại cửa sổ, tương tác và điều kiện chiến đấu

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0  
**Trạng thái:** Hoàn thiện đặc tả phân loại và chính sách tương tác; chưa dựng cửa sổ/runtime input hoặc kiểm thử.  
**Phạm vi:** MMORPG 2.5D pixel V4, thủ thành giữ nguyên. Không sao chép hành vi Esc về sảnh của thủ thành sang MMO.

## 1. Nguyên tắc nền

Game online không tạm dừng khi mở cửa sổ, kể cả Settings, xác nhận giao dịch hoặc hội thoại. Cửa sổ có thể khóa đầu vào của client nhưng không làm nhân vật bất tử, ngừng aggro hoặc dừng đòn server đã nhận. Luôn giữ dấu nguy hiểm quan trọng có thể đọc được.

Phân biệt ba quyền: xem thông tin, soạn bản nháp và thực hiện thay đổi. Được mở bảng không đồng nghĩa được đổi build, mua, nhận đồ hoặc chuyển vùng. Điều kiện cuối do server xác nhận tại thời điểm xử lý, không chỉ lúc mở cửa sổ.

## 2. Sáu loại bề mặt UI

| Loại | Cách dùng | Quy tắc đầu vào |
|---|---|---|
| HUD cố định | HP, hotbar, minimap, buff, thông báo gọn. | Chỉ chiếm vùng tương tác thực; phần trống không che đường chơi. |
| Panel ghim/docked | Quest tracker, party, chat thu gọn. | Không khóa toàn màn; ô nhập focus tách riêng. |
| Cửa sổ nổi | Nhân vật, túi, skillbook, nhật ký, collection. | Chặn click trong bounds; phần cảnh ngoài còn thao tác được nếu không có modal/text focus. |
| Popover/tooltip | Menu item, giải thích, so sánh. | Tooltip thường không giành focus; menu có nút thì nhận input trong vùng và đóng theo luật UI-06/07. |
| Modal xác nhận | Hành động giá trị cao, nháp chưa lưu, lựa chọn cần quyết định. | Chặn lệnh gameplay mới từ input thường khi mở; không dừng thế giới. |
| Fullscreen view | Đăng nhập/tạo nhân vật; bản đồ/bách khoa mở rộng trong game. | Màn ngoài thế giới không điều khiển actor; màn trong thế giới giữ world chạy, có đóng nhanh và cảnh báo. |

Menu Esc là lớp menu chứ không lập tức thoát/sảnh. Quy tắc chồng, click-outside, Esc và ~ chính xác thuộc UI-06, không coi task đó hoàn thiện chỉ từ phân loại này.

## 3. Điều khiển khi cửa sổ đang mở

Trong cửa sổ nổi không focus chữ, phím gameplay vẫn có thể điều khiển ngoài các phím UI đang dùng; hotkey mở cửa sổ và shortcut nội bộ không được đồng thời cast skill. Phím số dùng chọn số lượng/ô trong panel chỉ khi panel đó nhận focus theo ngữ cảnh rõ. Quy tắc bind chi tiết thuộc UI-08/09.

Khi focus chat/input: chữ, WASD và số nhập vào ô, không phát lệnh đi/đánh. Khi modal/fullscreen nội bộ mở: dừng phát lệnh di chuyển/cast mới, hủy lệnh giữ phím ở client để không chạy mãi. Server tiếp tục xử lý trạng thái đã có; không hủy skill đang thi triển chỉ vì mở modal nếu skill không cho cancel.

Đóng UI không tự tái phát phím đang giữ trước đó; cần input mới hoặc cơ chế giữ được INPUT định nghĩa rõ. Không lấy việc keyup bị UI nuốt làm nhân vật chạy không dừng.

Mọi thao tác chuột bắt đầu trên UI thuộc UI đến hết thao tác: kéo đồ ra ngoài rồi thả không thành đòn đánh, nhả nút sau đóng panel không bắn. World click phải bắt đầu ở vùng cảnh hợp lệ và không bị modal/text operation chặn. Đây là hợp đồng, chưa code pointer capture.

## 4. Chính sách theo nhóm cửa sổ

| Nhóm | Trong combat | Ngoài combat / điều kiện thao tác |
|---|---|---|
| Nhân vật và chỉ số | Xem được; không đổi trang bị/điểm. | Đổi đồ khi đúng quyền; phân điểm/reset theo hệ tương ứng. |
| Túi đồ | Xem; dùng item được đánh dấu combat-usable qua lệnh hợp lệ. | Sort/filter là hiển thị; bán/phân giải/chuyển đồ theo quyền dịch vụ. |
| Skillbook/thiên phú | Xem gọn; không commit rank/biến thể/preset. | Có thể lập nháp; áp dụng build theo điểm nghỉ/NPC và luật hồ sơ 31. |
| Tọa kỵ | Xem trạng thái; gọi ngựa chiến Kỵ Sĩ theo hồ sơ 34. | Đổi ngựa chọn/profile sở hữu ngoài combat; không tự reset cooldown. |
| Map/quest/collection | Xem được, fullscreen không pause; không nhận quyền teleport chỉ vì click pin. | Tránh spoiler, waypoint theo map; teleport kiểm riêng. |
| Shop/kho/rèn/khảm/cường hóa | Không bắt đầu/commit dịch vụ mới. | Cần NPC/trạm/vùng tương tác và điều kiện hệ thống; khoảng cách cấu hình theo dịch vụ. |
| Chợ/giao dịch trực tiếp | Xem listing nếu quyền truy cập cho phép; không tạo/chốt giao dịch mới. | Khoảng cách/chợ/escrow và xác nhận theo ECON; cửa sổ không tự cấp quyền giao dịch từ xa. |
| Thư/quà/phần thưởng | Xem dữ liệu hợp lệ; nhận/phát đồ theo quyền hoạt động, không auto nhận do mở panel. | Luồng claim cần authoritative state và xử lý túi đầy/hết hạn. |
| Chat/party/guild | Giao tiếp và xem được; quản trị/đổi trạng thái có kiểm quyền. | Không popup lời mời làm khóa thao tác combat. |
| Settings/hỗ trợ | Mở được, thế giới vẫn chạy. | Thay cài đặt local; tác vụ tài khoản/thoát có luồng riêng. |
| Chuyển chức/cốt truyện | Không mở bước chuyển chức hoặc quyết định không thể đảo ngược trong combat thường. | Vùng an toàn/cảnh truyện riêng theo quest; không tự chọn khi timeout/mất mạng. |

Các hạn chế là chính sách MMO đầu tiên được chọn để tránh thao tác tài sản/build trong giao tranh; không áp sang thủ thành. Khả năng dùng item trên ngựa nghề khác vẫn cần mountedAllowed trong hồ sơ 34, không coi combat-usable là vượt quyền cưỡi.

## 5. Combat bắt đầu trong lúc đang mở dịch vụ

Shop/kho/rèn và giao dịch chuyển sang trạng thái Không thể thao tác khi đang giao chiến; đóng popover/xác nhận chưa gửi và trả focus về điều khiển, panel thu gọn thành dấu Có thể quay lại. Không tự bán/mua hoặc tự xác nhận để đóng nhanh. Phục hồi panel sau combat do người chơi chọn, không bung lại giữa trận.

Bản nháp skill được giữ như kế hoạch, không áp. Giao dịch đã gửi hiển thị kết quả thật sau xử lý; đóng UI không rollback một giao dịch server đã commit. Nếu điều kiện combat thay trước commit, server từ chối theo luật giao dịch và trả nguyên nhân. Không khẳng định client bấm Hủy chắc chắn đã hủy request.

Nhận damage không đồng nghĩa tất cả combat state nếu hệ luật không định nghĩa như vậy. Các cửa sổ đọc một trạng thái combat thống nhất từ hệ combat; không mỗi panel tự đo timer khác nhau.

## 6. Xác nhận và modal trong thế giới online

Lời mời party/guild, tin nhắn, loot thường và thông báo sự kiện dùng toast/panel không ép modal. Hành động phá hủy đồ, giao dịch giá trị cao hoặc đổi lựa chọn dài hạn mới dùng xác nhận theo UI-10/ECON.

Nếu nguy hiểm bắt đầu khi modal chưa gửi, thu modal về trạng thái nháp khi an toàn để trả điều khiển; không tự chọn Đồng ý/Hủy thay người chơi với hậu quả tài sản. Nếu đã gửi, chỉ chuyển trình bày sang đang chờ/kết quả; request vẫn được kiểm theo authoritative state.

Lựa chọn cốt truyện quan trọng chỉ đặt trong cảnh được thiết kế bảo vệ trải nghiệm phù hợp, không dùng modal tạo bất tử trong thế giới công cộng. Người cùng nhóm khác tiến độ không mất quyết định vì người khác đóng cửa sổ.

## 7. Chết, đổi vùng, mất kết nối

Chết: tắt mục tiêu ngắm/kéo đồ/menu transient, chặn thao tác sống, giữ thông tin bản nháp theo chính sách. Màn hồi sinh ưu tiên hơn dịch vụ; không reset cooldown hoặc mất đồ vì UI bị đóng. Cảnh báo/nhạc theo state thật, không đóng inventory là hồi sinh.

Đổi vùng: dịch vụ gắn NPC cũ mất quyền, hủy tương tác chưa gửi; panel cá nhân có thể khôi phục sau load nếu không che cảnh bắt buộc. Không giữ tooltip vật thể đã bị hủy. Quá trình tải không nhận lệnh click tích lũy để phát khi vào map.

Mất mạng: chặn thao tác cần server, ghi rõ kết quả đang chưa xác định, không hiển thị số dư/đồ dự kiến thành thật. Reconnect đồng bộ lại trước mở giao dịch hoặc cho claim lại. Các thiết kế chi tiết loading/error ở UI-11/DATA/NET chưa hoàn thiện từ task này.

## 8. Giữ phong cách và tiếp cận

Các loại cửa sổ dùng cùng token UI-01; không mỗi mode có một bộ khung khác. Biên tương tác đọc được trên cảnh sáng/tối. Có đường mở bằng menu/focus bàn phím, không chỉ hover. Thông báo không pause cần câu ngắn dễ hiểu, không phủ lớp tối dày che toàn bộ telegraph.

Thiết lập đồ họa thấp hoặc giảm hiệu ứng không thay luật input/click-through. Đổi UI scale không tạo vùng click cũ lệch vị trí mới. Trạng thái pending có phản hồi hình/chữ, không bắt nghe âm mới biết đã bấm.

## 9. Hợp đồng kiểm chứng sau triển khai

Thử kéo item ra ngoài và nhả không đánh; focus chat không chạy/cast; đóng modal không phát phím giữ; combat ngắt shop trước commit không trừ tiền; request đã commit rồi đóng panel vẫn nhận đúng kết quả một lần. Thử root/stun và trạng thái ngựa khi mở panel, chuyển tầng/camera không làm UI click thành raycast nền.

Đối chiếu web/PC, phím trùng trình duyệt và thao tác lặp. Đây là tiêu chí cần thực hiện, chưa có kết quả test hoặc hệ input đã viết.

UI-02 hoàn thiện hồ sơ phân loại và chính sách; UI-03…12 và wireframe từng màn còn riêng. Tổng **20/513 hoàn thiện thiết kế, 6 một phần, 487 chưa thiết kế**. Tiếp theo UI-03: HUD/vùng nhìn, scale, màn nhỏ, chữ và số dài. ART-01/02/04 vẫn chờ scene 2.5D; thủ thành giữ nguyên.
