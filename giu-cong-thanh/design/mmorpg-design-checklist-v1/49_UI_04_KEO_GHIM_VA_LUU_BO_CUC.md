# UI-04 — Kéo, đổi cỡ, ghim và lưu bố cục

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0  
**Trạng thái:** Hoàn thiện đặc tả hành vi và lưu trữ bố cục; chưa viết trình chỉnh HUD, storage hoặc migration.  
**Phạm vi:** MMORPG 2.5D pixel V4, web desktop và PC. Thủ thành giữ nguyên.

## 1. Phân biệt bố cục với dữ liệu nhân vật

Bố cục gồm vị trí, kích thước, ghim, mức thu gọn và hiển thị của cụm UI. Không gồm điểm SP/TP, trang bị, rank, nội dung chat, số dư hay bản nháp giao dịch. Reset layout không reset nhân vật, không bỏ skill khỏi hotbar, không xóa nháp phân điểm và không gửi giao dịch.

Tách ba thao tác: chỉnh HUD, di chuyển cửa sổ nội dung và quản lý preset bố cục. Mở K/T không tự bật chế độ chỉnh HUD. Di chuyển một panel không thay quyền mở panel hoặc điều kiện combat.

## 2. Quyền kéo và đổi cỡ

| Loại | Di chuyển | Đổi cỡ/ghim |
|---|---|---|
| HUD chiến đấu | Chỉ trong Chỉnh HUD ngoài combat. | Scale/template theo nhóm; không kéo từng chữ khỏi thanh HP. |
| Cửa sổ nổi | Kéo thanh tiêu đề khi cửa sổ hợp lệ; không chiếm input cảnh. | Chỉ resize nếu có bố cục co giãn được thiết kế. |
| Panel docked | Qua tay nắm hoặc chế độ chỉnh. | Dock vào vùng cho phép; giới hạn kích thước. |
| Tooltip thường | Không kéo. | Tự chọn vị trí theo mục tiêu và mép màn. |
| Tooltip so sánh đã ghim | Di chuyển bằng header riêng. | Có Đóng/Bỏ ghim; không giữ tham chiếu entity đã mất. |
| Modal/xác nhận | Không kéo trong bản đầu. | Canh trong viewport; cuộn nội dung nếu thiếu chỗ. |
| Loading/chết/reconnect | Không cho kéo khỏi màn hình. | Bố cục hệ thống, ưu tiên khả năng thao tác. |

Không mặc định mọi cửa sổ có resize. Skillbook có cây/detail/footer reflow; inventory đổi số cột theo dung lượng nhìn, không đổi số slot sở hữu; bảng chỉ số cuộn nội dung. Giới hạn min/max cụ thể phải có trong wireframe từng cửa sổ, không dùng cùng một số cho 58 màn.

## 3. Kéo, resize và thao tác an toàn

Chỉ kéo từ header/tay nắm, không kéo bằng nút Đóng, ô nhập hoặc item. Có ngưỡng kéo theo cấu hình input để click tiêu đề không làm panel nhảy. Resize từ cạnh/góc có cursor/dấu nhận biết; khi bật bàn phím có menu Di chuyển/Đổi cỡ dùng bước nhỏ/lớn và xác nhận, không bắt rê chuột chính xác vào một pixel.

Trong lúc kéo/resize, thao tác thuộc UI đến khi kết thúc hoặc hủy; không raycast/cast vào map khi nhả ngoài panel. Escape trong chế độ thao tác hủy lần kéo/resize hiện tại, trả vị trí đầu thao tác; không đồng thời đóng panel hoặc thoát game. UI-06 sẽ thống nhất thứ tự đóng ở các lớp khác.

Mất focus cửa sổ hệ điều hành hoặc mất pointer trong lúc kéo: kết thúc an toàn ở vị trí hợp lệ cuối, giải phóng trạng thái giữ và không phát world click. Resize/di chuyển không cập nhật gameplay state.

Có snap mềm theo lưới spacing 8px UI và vùng dock, hiển thị đường căn khi gần; không hút panel qua nửa màn. Cho tắt snap. Khoảng cách snap cuối cần thử UI, không tự suy từ tile thế giới 32px.

## 4. Ghim và dock có ý nghĩa gì

Ghim vị trí là khóa kéo/resize ngoài chế độ chỉnh, không khiến panel luôn trên modal hoặc bỏ qua combat/death. Nút Đóng vẫn hoạt động với panel được phép đóng; ghim không đồng nghĩa không thể đóng.

Dock là gắn vào cạnh/vùng bố trí, không phải ghim tự động vào bất cứ nơi nào. Party, chat và quest có vùng dock mặc định; hotbar được neo dưới giữa; tooltip item không dock thành hotbar. Các nhóm ghép di chuyển cùng root nhưng có spacing và giới hạn chiều cao.

Không cho dock đè hotbar/castbar/cảnh báo bắt buộc trong preset mặc định. Người dùng chỉnh bố cục được cảnh báo vùng chồng và có nút trả về; không tạo cảm giác vùng giữa là cấm mở mọi panel nội dung.

## 5. Chế độ Chỉnh HUD

Mở từ Settings → Giao diện → Chỉnh HUD. Hiện placeholder các cụm ẩn theo ngữ cảnh để sắp xếp mà không cần vào nhóm/boss thật. Placeholder có nhãn Mẫu, không giả trạng thái/HP/CC đang xảy ra.

Có chọn cụm, neo, scale, template, hiển thị theo ngữ cảnh, ghim, reset cụm, hoàn tác và Lưu/Hủy. Chỉ xem thay đổi bố cục local cho tới Lưu; không dùng nút Áp dụng HUD để commit skill build. World online vẫn chạy theo UI-02.

Combat bắt đầu thì kết thúc chế độ chỉnh và trả điều khiển gameplay; giữ bản nháp bố cục để quay lại, không tự lưu. Không tự mở lại editor giữa trận. Đang chờ reconnect hoặc chuyển vùng không cho sửa placeholder thành hành động thực.

## 6. Lưu vị trí theo neo và viewport

Lưu nhóm neo (trên/dưới/trái/phải/giữa), offset, kích thước, scale và viewport class lúc lưu. Với cửa sổ tự do lưu tâm chuẩn hóa trong vùng khả dụng và size mong muốn có giới hạn. Không chỉ lưu tọa độ tuyệt đối của màn hình lớn rồi dùng y nguyên trên web nhỏ.

Vùng khả dụng tính từ viewport UI hiện tại, scale, margin an toàn và các vùng hệ thống bắt buộc; không lấy màn hình vật lý nếu browser đang cửa sổ nhỏ. Sau phục hồi: đọc schema/version → chọn preset theo viewport → tính kích thước phù hợp → ánh xạ neo/tâm → clamp bounds → kiểm các nút thiết yếu.

Ví dụ panel đặt sát phải màn 1920×1080 vẫn sát phải khi sang 1366×768, với template gọn; không giữ x=1700 làm panel biến mất. Chuyển UI 150% cần reflow trước clamp, không clamp khung cũ rồi phóng nó ra ngoài.

Cửa sổ chuẩn phải thấy header/Đóng và footer thao tác. Nếu nội dung tối thiểu vẫn cao hơn viewport, chuyển sang template một cột hoặc vùng nội dung cuộn; không cắt footer, không co chữ dưới chuẩn để cứu bố cục. Việc đổi template không tự xác nhận nháp hoặc mất phần người dùng đang sửa.

## 7. Preset và phạm vi lưu

Ba template hệ thống Cân bằng/Gọn/Chữ lớn theo UI-03; không ghi đè chúng khi người dùng chỉnh. Cho hai preset tùy chỉnh miễn phí ở bản đầu để lưu bố cục Khám phá và Chiến đấu theo ý người chơi. Đây là preset UI, khác hai preset kỹ năng từ cấp 15; không tăng nguồn SP/TP hay đổi class.

Cấu hình mặc định lưu theo thiết bị/client và viewport class. Có thể chọn áp dụng chung cho nhân vật trên cùng thiết bị; không tự mang tọa độ PC sang web. Tên preset không chứa lệnh/script.

Đề xuất đồng bộ tài khoản chỉ khi người chơi chủ động Lưu bản sao trên tài khoản; server lưu preference có version, tách dữ liệu gameplay trong PostgreSQL nếu tính năng được triển khai. Web/PC tải bản sao thành bản nháp và clamp lại trước áp dụng, không ghi đè profile thiết bị ngầm. Không hứa đã có cloud sync.

## 8. Tự lưu, xung đột và reset

Cửa sổ nội dung tự ghi layout local sau kết thúc kéo/resize, không ghi mỗi frame. Chỉnh HUD theo Lưu/Hủy; nháp chưa lưu có trạng thái riêng. Số lần lưu/debounce do triển khai chọn sau, không dùng timer layout tác động combat.

Reset cụm chỉ trả một cụm; Reset bố cục trả preset UI hiện tại về template đã chọn, cần cho thấy phạm vi trước xác nhận. Không xóa phím tắt, cấu hình âm, chat, skill slots, inventory sort cá nhân hoặc bản nháp nghiệp vụ nếu không nằm trong phạm vi reset.

Nếu storage lỗi vẫn chơi được với profile phiên hiện tại, có thông báo không lưu được và nút thử lại/xuất cấu hình nếu chức năng có. Dữ liệu hỏng hoặc version không đọc được dùng fallback an toàn, không crash game hoặc xóa bản gốc trước khi có bản thay hợp lệ.

Nhiều phiên/tab cùng sửa không tự trộn tọa độ từng cụm theo last-write từng field. Local dùng profile phiên xác định; đồng bộ account cần revision check, báo xung đột và cho chọn bản. Không tự kết hợp thành layout chưa từng xem.

## 9. Nhập/xuất bố cục

Thiết kế hỗ trợ mã/tệp dữ liệu bố cục có version và giới hạn kích thước, không nhận HTML/JS/URL tài nguyên tùy ý. Chỉ import trường cho phép, kiểm số hữu hạn/phạm vi/ID cụm, loại token/account ID riêng và clamp trước preview.

Import thành bản nháp; không tự đổi phím, bỏ cảnh báo gameplay, mở tính năng chưa có hoặc kích hoạt skill. Nếu cụm chưa mở theo tiến trình, chỉ lưu vị trí dự kiến, không cấp quyền hiển thị dữ liệu chưa được phép. Bản share không kèm chat, tên người khác hoặc nội dung giao dịch.

## 10. Tình huống cần kiểm chứng sau

Đổi 1080p → 1366×768, fullscreen → cửa sổ, scale 100 → 150; kéo ra mép; mất focus giữa thao tác; mở tám active/cánh ngựa và party nhiều hàng. Cửa sổ vẫn có Đóng và thao tác chính, không giấu telegraph bắt buộc trong bố cục mặc định.

Kiểm reset không mất nháp SP/TP; import hỏng không chạy script; bản sync PC không làm mất panel trên web; combat ngắt editor không phát click đánh thường. Storage bị chặn không cản chơi hoặc gây lưu lặp vô hạn. Đây là test case tương lai, chưa có kết quả kiểm thử.

UI-04 hoàn thiện đặc tả, chưa tạo editor, API/storage hoặc mockup tương tác. Tổng **22/513 hoàn thiện thiết kế, 6 một phần, 485 chưa thiết kế**. Tiếp theo UI-05: ma trận trạng thái tương tác, loading/rỗng/lỗi/hết hạn. ART-01/02/04 vẫn chờ scene 2.5D; thủ thành giữ nguyên.
