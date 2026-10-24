# UI-06 — Thứ tự chồng, đóng cửa sổ và chống click xuyên

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0  
**Trạng thái:** Hoàn thiện đặc tả; chưa viết window manager, input router hoặc chạy kiểm thử.  
**Phạm vi:** MMORPG 2.5D pixel V4, không thay hành vi thủ thành.

## 1. Ba cấu trúc phải tách riêng

Thứ tự vẽ, focus bàn phím và quyền nhận chuột là ba cấu trúc liên hệ nhưng không đồng nhất. Tooltip nằm cao không tự nhận mọi phím; toast cảnh báo cao không tự khóa gameplay; modal không dừng game server. Nút Close trên panel không phải lệnh hủy transaction.

Mỗi cửa sổ có chủ sở hữu, nhóm lớp, bounds hit-test, policy focus, close policy, draft state và request state. Không dùng số z tăng vô hạn sau mỗi click để vượt mọi lớp.

## 2. Thứ bậc ngữ nghĩa

| Tầng | Nội dung | Quy tắc |
|---|---|---|
| Cảnh game | Sprite/model, VFX thế giới và vật thể. | Hit-test theo gameplay khi UI không chiếm thao tác. |
| HUD | Hotbar, party, minimap, chat docked. | Chỉ vùng tương tác có bounds; nền trong suốt không tự cho click xuyên. |
| Cửa sổ nội dung | Inventory, K, nhân vật, map mở rộng. | Cửa sổ active trong cùng nhóm lên trước; ghim vị trí không đổi nhóm lớp. |
| Transient của cửa sổ | Menu item, dropdown, tooltip/so sánh. | Luôn thuộc owner, không trôi trên modal khác hoặc tồn tại khi owner đã đóng. |
| Modal và transient của modal | Xác nhận/nháp chưa lưu, tooltip của chính modal. | Modal trên cùng nhận focus; không cho tab vào nội dung phía sau. |
| Lớp hệ thống | Reconnect, chết/hồi sinh, cảnh bắt buộc theo state. | Ưu tiên theo state, không chồng nhiều modal giành focus. |
| Tín hiệu khẩn không tương tác | Dấu cảnh báo được phép hiển thị trong thế giới đang chạy. | Có thể nằm ở vùng nhìn rõ nhưng không che nút khẩn hoặc cướp focus. |

Layer transient là theo owner: tooltip của inventory không được vượt modal xác nhận. World depth nhiều tầng không ảnh hưởng z-order UI màn hình; icon/tooltip gắn mục tiêu vẫn cần quyền visibility từ game.

## 3. Chọn cửa sổ active

Nhấp phần có thể tương tác của một cửa sổ đưa nó lên trước trong nhóm và chuyển focus hợp lệ; chính click đó chỉ thao tác một control đích, không phát hai hành động mở + mua. Không click xuyên phần bị panel khác che dù panel sau có nút đẹp hơn.

Popup con mở thì tương tác ngoài nó có thể đóng popup theo policy; click dùng để dismiss bị tiêu thụ, không đồng thời bấm nút cửa sổ sau hoặc đánh ngoài cảnh. Tooltip thuần thông tin không bắt click, nhưng vùng panel phía dưới nó vẫn có quyền hit-test theo UI-07.

Không tự bật focus chat khi có tin mới. Tooltip tự hiện không kéo cửa sổ lên trước. Thông báo pending/kết quả đến muộn không giành focus khỏi combat.

## 4. Esc — xử lý đúng một bước mỗi lần nhấn

Thứ tự ưu tiên:

1. Đang kéo/resize/rebind: hủy thao tác hiện tại theo hệ tương ứng, không đóng tiếp panel.
2. IME/ô nhập: để hệ nhập xử lý composition trước; sau đó thoát focus hoặc đóng gợi ý autocomplete. Giữ nội dung chat chưa gửi, không gửi hoặc xóa âm thầm.
3. Có dropdown/menu con: đóng transient active trước.
4. Có modal: dùng hành động quay lại/đóng hợp lệ của modal; không tự chọn Đồng ý, không rollback request đã gửi.
5. Có cửa sổ nội dung active: yêu cầu đóng cửa sổ đó, xử lý nháp nếu có.
6. Không còn cửa sổ: mở menu hệ thống; Esc tiếp theo đóng menu.

Tooltip không tương tác tự ẩn cùng lần đóng owner, không buộc một lần Esc riêng chỉ vì hover. Một keydown xử lý một bước; auto-repeat khi giữ Esc không được đóng sạch rồi thoát. Không mặc định Esc thoát game hoặc về sảnh. Browser/OS có thể dùng Esc để thoát fullscreen; ứng dụng phải xử lý phần sự kiện thực nhận, không hứa chặn được hành vi nền tảng.

## 5. Phím đóng nhanh ~

Đề xuất dùng phím vật lý Backquote, nhãn ~ theo bố cục bàn phím, cho đổi bind ở UI-08. Khi chat/input đang focus nó là ký tự, không đóng UI. Không yêu cầu người chơi phải dùng đúng layout US.

Đóng nhanh yêu cầu ẩn các cửa sổ gameplay tùy chọn và transient của chúng; không xóa HUD, không xác nhận/hủy gameplay, không đóng overlay reconnect/hồi sinh bắt buộc hoặc bỏ qua lựa chọn cốt truyện đang chờ quyết định.

Nếu có bản nháp chưa gửi, giữ nó như kế hoạch tạm và báo Nháp đã được giữ, không áp dụng và không bỏ. Đây là nút tắt nhanh để quay lại điều khiển; không mở chuỗi modal hỏi từng cửa sổ giữa trận. Các request đã gửi tiếp tục theo UI-05.

Bảng K đã từng mô tả ~ mở hỏi Giữ/Bỏ/Quay lại; hồ sơ này điều chỉnh riêng đường đóng nhanh thành **Giữ nháp và ẩn**, còn X/Esc/phím toggle bình thường vẫn dùng policy hỏi nháp. Không đảm bảo nháp sống qua reload/crash khi chưa có cơ chế lưu nháp; phải ghi đúng phạm vi khi triển khai.

## 6. X, Esc hoặc phím toggle khi còn nháp

Với nháp có ý nghĩa như SP/TP hoặc editor HUD: hiện một xác nhận Giữ nháp và đóng / Bỏ nháp và đóng / Quay lại. Giữ chỉ là lưu kế hoạch, không commit; Bỏ khôi phục dữ liệu đang hiệu lực, không hoàn thêm điểm hoặc trả tiền giả.

Phím K/T mở cửa sổ tương ứng; nếu cửa sổ đã mở nhưng nằm sau, đưa lên trước lần đầu, không đóng bất ngờ. Khi chính nó đang active, toggle yêu cầu đóng và theo policy nháp. Hành vi cụ thể của phím chưa bind chính thức vẫn theo UI-08.

Đóng cửa sổ dữ liệu đọc không hỏi xác nhận thừa. Ô lọc/sort có thể nhớ preference mà không gọi là nháp mất tiền. Đề nghị giao dịch chưa gửi và request đã gửi phải phân biệt; không dùng hộp hỏi Bỏ nháp để hứa hủy một giao dịch đang pending.

## 7. Một xác nhận tại một thời điểm

Không chồng modal nháp, xác nhận giá và menu item thành ba lớp người chơi không biết đang đồng ý cái gì. Modal nghiệp vụ có owner và bản đề nghị/version; khi owner/điều kiện thay thì vô hiệu quyết định cũ, không tự chuyển nút Đồng ý sang đề nghị mới.

Thông báo khác chuyển thành toast/hàng chờ có thể xem, không tự xác nhận khi hết thời gian trừ khi hệ nghiệp vụ có luật riêng rõ. Modal nhạy cảm cần focus ban đầu an toàn, không mặc định Enter chấp nhận thao tác phá hủy; UI-10 chốt từng luồng.

Combat bắt đầu hoặc lớp hệ thống xuất hiện: thu modal chưa gửi thành kế hoạch tạm theo UI-02, trả điều khiển khi có thể; không bỏ mất dữ liệu hoặc cấp bất tử. Khi thoát reconnect/death, không tự khôi phục xác nhận cũ đã hết hiệu lực; đọc lại state trước tiếp tục.

## 8. Chuột, kéo thả và click xuyên

Hit-test theo bounds/shape tương tác được khai báo, không theo alpha pixel. Nền panel trong suốt vẫn chặn cảnh trong bounds. Chỉ vùng được chỉ định rõ là không tương tác mới cho world input đi qua; không tạo lỗ vô hình cạnh nút.

Pointer press bắt đầu trên UI thì gesture thuộc UI đến release/cancel. Đóng panel bằng mousedown không để mouseup thành bắn; drag item ra map không tự drop/phá item nếu chưa có luồng drop được thiết kế. Click-outside để đóng popover không cùng lúc cast vào đất.

Wheel trong vùng cuộn được UI xử lý, không zoom camera đồng thời; kéo scrollbar không quay camera. Tooltip/ảnh preview không chiếm cả màn bằng hitbox vô hình. Nút chuột phải menu item và lệnh combat phải được routing theo owner; không một click vừa mở menu vừa đánh.

Mất focus, đổi vùng hoặc pointer cancel phải xóa gesture đang giữ; khi quay lại cần input mới để đánh/di chuyển theo UI-02. Không reset cooldown hoặc animation skill authoritative vì input router đổi focus.

## 9. Hỗ trợ bàn phím và phục hồi

Tab đi trong modal trên cùng; không focus tới nút bị che. Đóng modal trả focus về control mở nếu còn tồn tại và hợp lệ; nếu không thì header/menu an toàn, không một nút Mua khác vừa lọt vào tọa độ cũ. Focus world được trả mà không phát skill theo phím đang giữ.

Tooltip ghim có Đóng và đường quay lại bàn phím. Popup chọn bằng phím có nhãn trạng thái rõ theo UI-01; giảm chuyển động không thay thứ tự input. Import layout không được tạo lớp UI trên hệ thống hoặc hitbox vượt viewport.

## 10. Ma trận tình huống cần kiểm chứng

| Tình huống | Kết quả mong muốn |
|---|---|
| K có nháp + X/Esc | Hỏi Giữ/Bỏ/Quay lại, không tự cộng SP. |
| K có nháp + ~ | Giữ nháp tạm, ẩn nhanh và báo gọn; không bật modal cản trận. |
| Hai cửa sổ + menu item | Esc chỉ đóng menu; lần sau mới xử lý cửa sổ active. |
| Tooltip inventory + modal | Tooltip owner sau không phủ modal. |
| Đóng panel khi giữ chuột | Release không thành world attack. |
| Scroll inventory | Không zoom hoặc dùng item đồng thời. |
| Chat đang nhập ~ hoặc tên có dấu | Không đóng cửa sổ/cast vì phím chữ hoặc IME. |
| Pending mua + đóng nhanh | Request tiếp tục, kết quả thật về state/log một lần. |
| Giữ Esc | Không thoát tài khoản hoặc tự đóng qua nhiều bước. |
| Reconnect khi modal cũ mở | Overlay hệ thống ưu tiên, đề nghị cũ không tự phục hồi quyền xác nhận. |

Đây là tiêu chí tương lai, chưa code/input test. UI-06 hoàn thiện hồ sơ; tooltip chi tiết, bind và xác nhận theo UI-07/08/10 còn riêng. Tổng **24/513 hoàn thiện thiết kế, 6 một phần, 483 chưa thiết kế**. Tiếp theo UI-07: tooltip/focus và so sánh thông tin. Thủ thành giữ nguyên.
