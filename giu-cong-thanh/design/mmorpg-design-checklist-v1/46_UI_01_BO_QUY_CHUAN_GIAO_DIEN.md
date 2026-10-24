# UI-01 — Bộ quy chuẩn giao diện MMORPG

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0  
**Trạng thái:** Hoàn thiện đặc tả token và thành phần cơ sở; chưa vẽ đủ 58 cửa sổ, chưa tạo font/icon hoặc tích hợp UI game.  
**Phạm vi:** MMORPG 2.5D pixel V4; thủ thành giữ nguyên. Token là tên thiết kế, chưa là biến CSS/runtime đã tạo.

## 1. Hướng hình ảnh

Khung fantasy gọn: xanh rừng tối, kim loại trầm, điểm ngà/vàng nhẹ; góc bậc pixel và đường viền chọn lọc. Nội dung được ưu tiên hơn hoa văn. Không phủ họa tiết giấy cũ vào mọi bảng số, không dùng gradient kính bóng/blur mạnh lệch phong cách.

UI là lớp màn hình 2D, không nghiêng cùng camera 2.5D. Khung/icon pixel; chữ dùng nét rõ hỗ trợ đầy đủ tiếng Việt. Không bắt font pixel cho đoạn mô tả dài. Hình loading/portrait vẫn theo ART-07 và không bị kéo dãn trong cửa sổ.

## 2. Token màu khởi điểm

| Token | Giá trị | Vai trò |
|---|---|---|
| surface.base | #102019 | Nền cửa sổ chính. |
| surface.raised | #1C3025 | Card/nhóm nổi trong panel. |
| surface.input | #0C1712 | Ô nhập, vùng giá trị có thể sửa. |
| surface.hover | #2B4433 | Nền hover/focus phụ. |
| border.base | #60705A | Viền ngăn nhóm và khung thường. |
| border.accent | #B5A16A | Viền nhấn, tab chọn. |
| text.primary | #EEE6D0 | Văn bản chính. |
| text.secondary | #BDC5B2 | Ghi chú, nhãn phụ vẫn cần đọc. |
| text.muted | #969F91 | Thông tin ít ưu tiên, không dùng cho lý do lỗi quan trọng. |
| action.primary | #A48B4D | Nền nút hành động chính, chữ tối. |
| focus.ring | #B6DAED | Dấu focus bàn phím, có hình ngoài màu. |
| feedback.success | #8FD18A | Icon/chữ xác nhận cùng dấu tick. |
| feedback.warning | #E7C66A | Điều kiện/cảnh báo cùng tam giác. |
| feedback.error | #EF938A | Lỗi/từ chối cùng dấu chéo và lời giải thích. |

Màu quan hệ/nguyên tố theo ART-05, không dùng success để tự gọi độc là buff. Đây là bảng sản xuất đề xuất, chưa đo tương phản trên UI thực. Các trạng thái dùng cả chữ/icon/đường viền, không chỉ màu. Khi có mẫu, điều chỉnh token trung tâm thay vì sửa lẻ từng cửa sổ.

## 3. Chữ và số

Cỡ tham chiếu tính bằng pixel UI ở mức 100% trên màn hình; không phải pixel tác giả body game. Body 16, nhãn phụ 14, tiêu đề nhóm 18, tiêu đề cửa sổ 22, tiêu đề màn 28. Không thu lý do khóa hoặc điều khoản giao dịch xuống cỡ quá nhỏ để ép vừa panel.

Line-height tham chiếu 1.4–1.5 cho mô tả tiếng Việt, font có dấu đủ và không cắt dấu trên/dưới. Không chốt tên font chưa có file/quyền. Nhãn ngắn dùng độ đậm vừa; tránh toàn chữ hoa ở đoạn dài. Con số chỉ số dùng dạng tabular khi font hỗ trợ để cột không nhảy.

Công thức % hiển thị rõ cơ sở: điểm phần trăm khác phần trăm tăng tương đối; so sánh 10% → 19% không ghi +10% nếu lợi ích thực là +9 điểm phần trăm. SP/TP, HP, shield và tiền tách nhãn. Giá và số tiền giao dịch hiển thị đầy đủ trong bước xác nhận, không chỉ 1,2K.

Từ dài có thể xuống dòng trong mô tả; tên trong bảng chỉ cắt khi có tooltip/focus xem đầy đủ. Phạm vi ký tự, quy tắc số địa phương và cỡ UI chi tiết ở UI-03, không coi task đó đã hoàn thiện.

## 4. Khoảng cách và kích thước

Thang spacing 4/8/12/16/24/32; padding panel 16, khoảng nhóm 16–24, khoảng dòng 8 theo độ dày nội dung. Nội dung có liên quan đặt gần; không rải chỉ số sang nhiều góc chỉ để lấp khung.

Header cửa sổ 44px tham chiếu, nút thường cao 36px, input 36px, hàng bảng tối thiểu 36px khi có thao tác. Icon nguồn 24/32px theo ART-07; ô inventory 48px và ô hotbar 56px ở UI 100% là mẫu ban đầu, có vùng riêng cho stack/bind. Không bóp icon để nhét cả rank, timer, khóa và phím lên một góc.

Kích thước tương tác tính ở lớp UI, độc lập scene 960×540. Khi đổi scale, bố cục phải reflow chứ không chỉ phóng cả cửa sổ tràn màn. Ma trận responsive ở UI-03/04 sẽ thiết kế riêng.

## 5. Viền, khung, nền và độ nổi

Viền logic 1px cho phân tách, 2px cho chọn/focus; góc bậc ngắn phù hợp pixel. Khung cửa sổ chính có một điểm motif ở header, không bốn góc đều trang trí dày. Không dùng viền vàng sáng như dấu rarity cho mọi cửa sổ.

Bóng UI gọn dạng bậc/offset nhẹ tách panel khỏi cảnh; không dùng bóng lớn làm đen vùng chơi. Panel đọc số dùng nền gần kín để chữ ổn định; HUD trong suốt chọn lọc nhưng chữ có nền/viền hỗ trợ khi cảnh sáng. Opacity chính xác sẽ thử trên scene, không cam kết số alpha đẹp trên mọi map.

Thứ bậc ngữ nghĩa: HUD → cửa sổ nội dung → popover/menu → tooltip → xác nhận/modal → thông báo khẩn hợp lệ. Đây là token vai trò, không phải z-index số hoặc luật đóng/movement; UI-02/06 chốt chi tiết để tránh click xuyên.

## 6. Thành phần cơ sở

| Thành phần | Thiết kế thống nhất |
|---|---|
| Nút chính | Tô vàng trầm, chữ tối, một hành động chính mỗi nhóm. |
| Nút phụ | Nền panel/viền thường, nhãn rõ như Quay lại hoặc Hủy bản nháp. |
| Thao tác nguy hiểm | Dấu cảnh báo/chữ cụ thể, không dùng nút đỏ cho mọi thao tác thất bại. |
| Tab | Nền/chân tab và dấu chọn; không chỉ đổi màu chữ. |
| Checkbox | Có dấu tick và nhãn; khác radio chọn một. |
| Radio/nhóm loại trừ | Dấu tròn chọn, mô tả kết quả; không trình bày như nhiều lựa chọn cùng bật. |
| Slider | Giá trị hiện tại và điều khiển bàn phím; có reset. |
| Input | Nhãn cố định, placeholder không thay nhãn, lỗi ngay vùng liên quan. |
| Thanh tiến trình | Tên/giá trị/phạm vi; không dùng thanh load giả khi chưa biết tổng. |
| Bảng chỉ số | Cột nhãn/hiện tại/dự kiến, nguồn thay đổi và đơn vị. |
| Ô item/skill | Ảnh tách khung; badge khóa/rank/stack/cooldown đặt theo template. |
| Tooltip | Tên → loại/điều kiện → chỉ số → hiệu ứng → nguồn/giới hạn; không chỉ hiện khi hover. |

Đây là bộ nền, chưa thay wireframe của 58 màn hình. Tooltip/focus/đóng panel và input routing ở các task UI tương ứng.

## 7. Ngôn ngữ trạng thái tương tác

Default giữ nhãn rõ; hover đổi nền/viền nhẹ; focus có đường ring và góc đánh dấu; pressed hạ một bậc; selected có tick/chân tab. Locked/disabled có khóa và lý do xem được, không chỉ giảm opacity đến khó đọc.

Pending giữ tên hành động như Đang mua…, chặn gửi lặp cùng thao tác, không giả thành công. Error có nguyên nhân và đường xử lý; success ngắn, không reset giao diện đang đọc ngoài ý muốn. Bản nháp có dấu Chưa áp dụng và tóm tắt khác biệt, không dùng màu success như đã cộng thật.

UI-05/10/11 sẽ hoàn thiện luồng lỗi, retry và thao tác giá trị cao; UI-01 chỉ chốt ngôn ngữ hình ảnh. Không dùng việc có spinner làm bằng chứng backend chống mua hai lần đã được triển khai.

## 8. Áp dụng cho cửa sổ tiêu biểu

Bảng K: cùng header/tab/input, điểm SP/TP tách nhãn, rank hiện tại/dự kiến có mũi tên, footer Áp dụng và Hủy bản nháp. Không tạo bảng skill một phong cách khác inventory.

Nhân vật/trang bị: ba dòng Chủng Tộc/Nghề/Nhánh; chỉ số cơ bản và nguồn cộng phân nhóm. Giáp, kháng và shield là các mục khác nhau. Không tự thêm chỉ số chưa thiết kế chỉ để đủ số hàng.

Túi đồ/shop: cùng icon và tooltip; giá, tiền loại nào, binding và điều kiện dùng rõ. Item có màu hiếm nhưng nút Mua vẫn theo token hành động, không lấy màu hiếm để tô cả panel. Ví tiền nạp chung account có nhãn phạm vi, không suy tiền gameplay dùng chéo chế độ.

Tọa kỵ: preview họ ngựa, giáp theo đồ, profile cánh Thánh/Hắc; điều kiện class/vùng có icon và chữ. Không đánh dấu ngựa tốt hơn chỉ vì skin sáng. Cánh ngựa là profile nội tại, khác hệ cánh trang bị tương lai.

## 9. Bàn giao và kiểm chứng sau

Cần bảng token nguồn trung tâm, mẫu component ở trạng thái khác nhau và ba màn đại diện K/Inventory/nhân vật. Đối chiếu 1080p và 1366×768, tiếng Việt dài, số lớn, focus bàn phím, nền map sáng/tối và tùy chọn đọc rõ. Chưa tạo các bản mẫu tương tác hoặc chạy kiểm contrast.

Không chọn engine UI, CSS framework hoặc font cụ thể từ tài liệu này. Token có thể ánh xạ web/PC nhưng state game phải từ cùng nguồn authoritative, không hình ảnh nút tự xác nhận điểm/tiền. Quyền nguồn font/icon theo ART-08/10.

UI-01 hoàn thiện hồ sơ quy chuẩn trong phạm vi task. Tổng **19/513 hoàn thiện thiết kế, 6 một phần, 488 chưa thiết kế**. Tiếp theo UI-02: loại cửa sổ và cách chúng ảnh hưởng điều khiển trong combat. ART-01/02/04 vẫn chờ mẫu 2.5D; thủ thành giữ nguyên.
