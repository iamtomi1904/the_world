# PROD-02 — Phạm vi nền tảng web và client PC

**Phiên bản:** 1.0 · **Ngày:** 20/10/2026  
**Mốc:** M0 — nền tảng bản đầu · **Trạng thái:** Đã hoàn thiện thiết kế V1 trong phạm vi mục; chưa triển khai.
**Người soạn:** Trợ lý thiết kế · **Người duyệt:** Chủ dự án.  
**Đầu vào:** quyết định web + PC + PostgreSQL; [PROD-01](10_PROD_01_NGUOI_CHOI_VA_TRAI_NGHIEM.md) đang chờ duyệt. Không mặc định mục trước đã được duyệt chỉ vì đang viết mục này.

## 1. Quyết định và phạm vi đề xuất

| Nội dung | Mức độ | Thiết kế |
|---|---|---|
| Nền tảng bản đầu | Đã chốt | Web trên máy tính và client cài trên PC. |
| Database | Đã chốt | PostgreSQL, truy cập qua backend. Client không giữ mật khẩu database hoặc kết nối trực tiếp. |
| Mobile | Ngoài bản đầu | Android/iOS là giai đoạn mở rộng; không yêu cầu thao tác cảm ứng trong gói đầu. |
| Client PC | Đề xuất | Windows 10/11 64-bit; Windows 11 là môi trường tham chiếu chính. Windows 10 chỉ nằm trong phạm vi tương thích của game, không phải cam kết về vòng đời hỗ trợ hệ điều hành. |
| Web | Đề xuất | Chrome và Edge bản ổn định hiện hành và một bản chính trước tại mỗi đợt phát hành; ghi số phiên bản cụ thể vào ma trận phát hành. |
| Nền tảng còn lại | Chưa cam kết | macOS/Linux, Safari/Firefox và gamepad được ghi nhận là hướng mở rộng, chưa là điều kiện bàn giao bản đầu. Không cố tình chặn nếu hoạt động, nhưng không quảng bá hỗ trợ chính thức. |
| Tài khoản/tiến độ | Đề xuất ưu tiên | Web và PC cùng tài khoản, danh sách nhân vật, server và tiến độ. Không tạo nền kinh tế riêng theo loại client. |
| Cách triển khai client | Đề xuất đánh giá | Dùng lại game web và tài nguyên chung, đánh giá lớp đóng gói desktop trước khi chọn. Chưa cam kết Electron, Tauri hay chuyển engine. |

Mục tiêu của bản PC là cách truy cập ổn định, cài được, cập nhật được; không tự giả định đóng gói sẽ làm FPS cao hơn web.

## 2. Phạm vi trải nghiệm chung

Cả hai bản phải dùng cùng luật chiến đấu, vật phẩm, nhiệm vụ và quy tắc phần thưởng. Nhân vật được xác định bởi account và server, không bởi thiết bị. Người chơi không phải mua lại quyền dùng nhân vật chỉ để đổi nền tảng; mô hình thương mại cụ thể vẫn thuộc PROD-05.

Server quyết định các kết quả quan trọng: sát thương, vật phẩm, tiền, nhiệm vụ và giao dịch. Client gửi ý định thao tác và hiển thị trạng thái được công nhận. File lưu trên máy hoặc cache trình duyệt không phải nguồn xác nhận tài sản.

Thiết kế một bộ HUD/cửa sổ dùng chung. Những khác biệt về toàn màn hình, cài đặt, cập nhật và quyền hệ điều hành nằm ở lớp nền tảng; không chia đôi thiết kế gameplay.

## 3. Tài khoản, phiên và đổi thiết bị

**Đề xuất: mỗi tài khoản chỉ có một phiên gameplay đang hoạt động tại một thời điểm trong bản đầu.** Đăng nhập để xem danh sách nhân vật chưa tự động đẩy người đang chơi ra. Khi yêu cầu vào thế giới ở thiết bị mới:

1. Server kiểm tra phiên đang hoạt động và trả thông báo “Tài khoản đang chơi trên thiết bị khác”.
2. Người dùng chọn hủy hoặc xác nhận chuyển phiên. Không hiển thị thông tin nhạy cảm của thiết bị cũ.
3. Server thu hồi quyền điều khiển cũ, xử lý trạng thái đang chờ theo quy tắc từng hoạt động rồi mới cấp phiên mới. Hai client không được cùng điều khiển một nhân vật.
4. Thiết bị cũ nhận thông báo phiên đã chuyển và trở lại đăng nhập. Thiết bị mới nhận trạng thái đã được server công nhận.

Không cho đổi phiên né cái chết, nhân đôi phần thưởng hoặc xóa giao dịch đang xử lý. Trạng thái combat, thời gian bảo lưu và hành vi nhân vật khi rớt mạng cần được chốt ở COMBAT/ACC/DATA, không đặt thời gian tùy ý tại đây.

Token phiên không nằm trong URL hoặc log công khai. Chính sách cookie/token, thời hạn và cách lưu an toàn theo nền tảng thuộc hồ sơ ACC/SAFE. Ghi nhớ đăng nhập là lựa chọn người dùng, có thao tác đăng xuất và thu hồi phiên.

## 4. Luồng web

**Trang game → kiểm tra phiên bản/khả năng chạy → đăng nhập → server/nhân vật → tải gói vùng → vào thế giới.**

- Nội dung giới thiệu và trợ giúp có thể xem trước khi đăng nhập; vào gameplay phải có tài khoản theo yêu cầu đã chốt.
- Gói đầu chỉ tải giao diện, nhân vật cần thiết và vùng sắp vào; không yêu cầu tải toàn bộ thế giới trước khi chơi.
- Thanh tải phản ánh lượng tài nguyên hoặc các bước đã hoàn tất. Nếu không đo được phần trăm, dùng mô tả bước; không đứng ở 100% khi chưa sẵn sàng.
- Cache có phiên bản; asset và manifest phải khớp bản nội dung. Xóa cache không làm mất nhân vật hoặc vật phẩm.
- Khi mạng lỗi, giữ thông tin bước tải bị lỗi và cho thử lại; không bắt đăng ký tài khoản lại.
- Reload/đóng tab không được xem là xác nhận giao dịch đã hủy. Khi vào lại phải hỏi trạng thái cuối từ server.
- Tab mất focus phải dừng nhận phím đang giữ, không tự chạy tiếp do kẹt input. Không tự pause thế giới MMO. Thiết kế giảm render khi nền nhưng không dùng FPS nền để tính combat.
- Toàn màn hình là thao tác chủ động; khi trình duyệt từ chối, cửa sổ thông thường vẫn chơi được.
- Trước khi dùng phím dễ xung đột với trình duyệt, cho đổi phím và có nút giao diện thay thế.

Không thiết kế chơi offline hoặc đồng bộ tiến độ offline cho bản đầu.

## 5. Luồng client Windows

**Tải bộ cài chính thức → cài → mở → kiểm tra phiên bản → đăng nhập → chọn nhân vật → tải vùng → vào thế giới.**

Đề xuất bản thử dùng bộ cài có phiên bản và màn kiểm tra cập nhật tích hợp. Chỉ thêm launcher riêng khi cần quản lý tải lớn, sửa gói hoặc nhiều kênh; tránh hai lớp đăng nhập và hai bộ UI không cần thiết.

| Tình huống | Hành vi cần thiết kế |
|---|---|
| Chọn nơi cài | Hiện dung lượng yêu cầu từ manifest thực tế và dung lượng trống. Không bịa kích thước bộ cài. |
| Bản còn tương thích | Cho vào game; cập nhật tùy chọn có thể nhắc sau. |
| Bản bắt buộc cập nhật | Chặn vào thế giới, giải thích và có đường tải/cập nhật rõ. |
| Đang cập nhật | Hiện tải/cài/xác minh theo bước; kiểm tra dung lượng cả gói tạm và bản đang dùng. |
| Mất mạng | Cho thử lại hoặc tải tiếp khi cơ chế hỗ trợ; không coi gói tải dở là bản hợp lệ. |
| File hỏng | Xác minh theo manifest, sửa gói bị lỗi; không sửa dữ liệu nhân vật từ file trên máy. |
| Cập nhật lỗi | Giữ bản còn dùng được nếu vẫn tương thích, hoặc chuyển về màn phục hồi. Không mở một bản cài nửa chừng. |
| Gỡ cài đặt | Giải thích dữ liệu tài khoản ở server vẫn còn theo chính sách lưu trữ; hỏi riêng trước khi xóa thiết lập/cache cục bộ. |

Bộ cài/cập nhật chỉ đến từ nguồn phát hành chính thức, cần kiểm tra tính toàn vẹn và cơ chế ký/xác thực phù hợp. Cách ký, lưu khóa và quy trình xuất bản thuộc SAFE/OPS; chưa cấu hình ở bước thiết kế này.

## 6. Giao diện và điều khiển

| Phần | Đề xuất bản đầu |
|---|---|
| Đầu vào | Chuột và bàn phím, phím gán lại; UI có nút mở chức năng thay cho việc bắt nhớ phím. |
| Kích thước thiết kế tham chiếu | 1920 × 1080; đối chiếu bố cục ở 1366 × 768. Đây là mục tiêu thiết kế, chưa phải xác nhận game đã chạy tốt. |
| Cửa sổ nhỏ | Thu gọn HUD, cho cửa sổ cuộn; nếu dưới ngưỡng hỗ trợ, hiện hướng dẫn tăng cửa sổ thay vì cắt nút xác nhận. |
| Tỉ lệ màn hình | Không kéo méo sprite; camera và phần UI thừa phải có quy tắc cho 16:9, 16:10 và màn rộng. Không mặc định màn rộng tăng tầm tương tác hoặc gây sát thương. |
| Chat và ô nhập | Khi nhập chữ, phím gameplay không kích hoạt. Có cách thoát focus rõ ràng. |
| Hình ảnh pixel | Giữ tỉ lệ/độ rõ, tránh làm mờ sprite do scale tùy ý; chốt quy tắc scale tại ART/UI. |
| Trợ năng | Cỡ chữ/UI, giảm VFX, âm lượng theo nhóm; trạng thái quan trọng không chỉ phân biệt bằng màu. |
| Thiết lập | Phân biệt tùy chọn theo thiết bị với tùy chọn đồng bộ; luôn có khôi phục mặc định. |

Chưa chốt phím kỹ năng MMO bằng cách sao chép toàn bộ Q/E/R từ thủ thành. Sơ đồ cuối thuộc INPUT-01.

## 7. Hiệu năng và cấu hình — mục tiêu để đánh giá sau

Đề xuất nhắm **60 FPS ở cấu hình tham chiếu**, có chế độ giảm hiệu ứng để hướng tới **30 FPS ổn định trên cấu hình thấp được chọn**. Đây là mục tiêu nghiên cứu, chưa phải kết quả đo hoặc cấu hình tối thiểu được xác nhận.

Chưa công bố CPU/GPU/RAM/dung lượng cụ thể vì chưa có mẫu tải đại diện. Hồ sơ kỹ thuật cần chọn máy tham chiếu, số entity/hiệu ứng trong cảnh đo và ngân sách tài nguyên rồi mới chốt thông số. Web và client PC phải đo riêng, không lấy kết quả của một bản cho bản kia.

| Tải đại diện phải định nghĩa | Câu hỏi cần trả lời |
|---|---|
| Một người trong vùng mở | Di chuyển/tải vùng và phản hồi đòn đánh có ổn định không? |
| Tụ điểm người chơi | Giới hạn hiển thị, tên, ngoại trang và VFX của người khác là gì? |
| Party/boss | Khi nhiều trạng thái và projectile, tín hiệu nguy hiểm có còn đọc được không? |
| Chuyển vùng/chơi lâu | Bộ nhớ có được thu hồi, cache có giới hạn, reconnect có giữ entity cũ không? |
| Mạng yếu | Thao tác đang chờ được biểu diễn thế nào, kết quả xác nhận có nhất quán không? |

Quy mô người đồng thời, ngân sách tải lần đầu và độ trễ mục tiêu còn cần chốt với PROD-06 và kỹ thuật. Không thể suy từ việc chọn PostgreSQL ra khả năng chịu tải MMO.

## 8. Dữ liệu chung và dữ liệu theo máy

| Dữ liệu | Nơi có thẩm quyền | Quy tắc đề xuất |
|---|---|---|
| Account/nhân vật/quest/vật phẩm/tiền | Backend và PostgreSQL | Tiếp tục trên web hoặc PC; cập nhật bằng giao dịch/quy tắc lưu của DATA. |
| Combat tức thời | Game server | Không ghi PostgreSQL mỗi frame theo mặc định; checkpoint và phục hồi thiết kế riêng. |
| Độ phân giải/âm thanh/chất lượng render | Thiết bị | Có mặc định an toàn và nút reset; không ghi đè thiết lập máy khác. |
| Phím và bố cục HUD | Đề xuất hồ sơ tùy chọn theo nền tảng | Có mặc định chung; chỉ đồng bộ nếu người chơi chọn, tránh bố cục máy lớn làm hỏng máy nhỏ. |
| Asset cache/gói tải | Thiết bị, có phiên bản | Có thể xóa/tải lại; không chứa bằng chứng sở hữu vật phẩm. |
| Token đăng nhập | Theo thiết kế bảo mật nền tảng | Không dùng như bản lưu nhân vật, không chép thủ công giữa web và PC. |

## 9. Phiên bản và bảo trì

Manifest cần phân biệt phiên bản ứng dụng, nội dung và giao thức. Server quyết định client còn được phép vào hay không. Hai nền tảng không nhất thiết có cùng số build, nhưng phải tương thích với cùng quy tắc nội dung được công bố.

Trước bảo trì, hiển thị lịch và cảnh báo theo kế hoạch vận hành. Khi ngừng nhận hoạt động mới, giải quyết các yêu cầu đang chờ theo trạng thái đã công nhận. Sau bảo trì, client lấy lại trạng thái server; không phát thưởng lại chỉ vì thông báo cũ chưa được xem.

Thiết kế môi trường phát triển/thử/phát hành tách dữ liệu; tài sản thử không tự chuyển sang tài khoản phát hành. Quy trình cụ thể thuộc OPS/DATA.

## 10. Danh mục màn hình cần thể hiện trong hồ sơ UI

Đây là trạng thái bổ sung của hệ hiện có, không tăng tùy tiện số đầu việc checklist.

| Hồ sơ liên quan | Màn/trạng thái cần mô tả |
|---|---|
| FLOW-01, ACC | Đăng nhập, hết phiên, chọn server/nhân vật, xung đột thiết bị, chuyển phiên. |
| SCREEN-01…08 | Tải asset, lỗi tải, thiếu dung lượng, kiểm tra/cập nhật, phục hồi file, bản không tương thích. |
| INPUT-01, UI | Gán phím, focus chat, toàn màn hình, resize, tỉ lệ UI và thông báo nền tảng không hỗ trợ. |
| FLOW-06, DATA | Mất mạng, kết nối lại, truy vấn kết quả đang chờ và tiếp tục từ checkpoint. |
| OPS | Bảo trì, thông báo phiên bản, nguồn tải chính thức và hướng dẫn hỗ trợ. |

Asset đề nghị: biểu tượng web/PC, trạng thái kết nối, tải/cập nhật/cảnh báo, nền màn tải theo vùng và thành phần tiến trình thống nhất phong cách pixel fantasy. Chưa vẽ, chưa đặt kích thước sprite hoặc ngân sách số lượng trước ART/UI.

## 11. So sánh hướng client để quyết định kỹ thuật

| Hướng | Điều cần đánh giá | Cách quyết định |
|---|---|---|
| Dùng lại game web trong lớp desktop | Tương thích renderer, input, bộ nhớ, kích thước phân phối, cập nhật và bảo mật. | Hướng khảo sát ưu tiên vì giảm việc duy trì hai gameplay khác nhau. |
| Tách client/đổi engine | Chi phí làm lại hiển thị/combat, công cụ asset, đồng bộ nội dung và nhân lực lâu dài. | Chỉ đề xuất nếu có giới hạn quan trọng được chứng minh; không đổi chỉ vì mục tiêu có bản PC. |

Không lựa chọn thư viện cụ thể trong hồ sơ này. Khi sang kỹ thuật phải kiểm tra tài liệu hiện hành và tạo mẫu đánh giá trước khi chốt; mục này không thay thế đánh giá đó.

## 12. Tiêu chí duyệt và bàn giao

Hồ sơ PROD-02 có thể được duyệt khi chủ dự án chấp thuận các quyết định sản phẩm sau:

1. Bản đầu hỗ trợ chính thức Windows client và web Chrome/Edge trên máy tính; các nền tảng khác chưa cam kết.
2. Web/PC dùng chung tài khoản, server và tiến độ; một phiên gameplay hoạt động cho mỗi account, có xác nhận chuyển thiết bị.
3. Ưu tiên dùng lại gameplay/asset; công nghệ đóng gói quyết định bằng đánh giá kỹ thuật riêng.
4. Chuột/bàn phím, UI tham chiếu 1080p và bố cục nhỏ 1366 × 768; cấu hình máy tối thiểu chờ đo bản mẫu.
5. Có thiết kế tải/cập nhật, phiên bản, reconnect và dữ liệu bền vững trước phát hành, không coi chúng là phần phụ có thể bỏ qua.

**Giới hạn:** chưa thử trình duyệt/client, chưa đo FPS, chưa chọn stack desktop, chưa thiết kế schema, chưa sửa game hoặc database. Các mục tiêu và tình huống trên là đầu vào cho công việc sau, không phải kết quả kiểm thử.

**Bước tiếp theo:** PROD-03 — vòng chơi phiên ngắn, phiên dài và mục tiêu dài hạn. Mục đó cần xác định hoạt động nào đủ ý nghĩa khi chơi một mình và điểm nối sang chơi nhóm.

## 13. Nhật ký quyết định

| Ngày | Nội dung | Trạng thái |
|---|---|---|
| 20/10/2026 | Web + client PC; PostgreSQL. | Đã chốt bởi chủ dự án. |
| 20/10/2026 | Windows/Chrome/Edge, tài khoản chung, một phiên, UI và phạm vi phân phối như hồ sơ V1. | Đề xuất chờ duyệt. |

## Cập nhật trạng thái theo ủy quyền · 20/10/2026

Chủ dự án đã ủy quyền tự phân tích và quyết định, không cần chờ duyệt từng mục. Hồ sơ này được ghi nhận **đã hoàn thiện thiết kế V1 trong phạm vi mục**. Những câu “chờ duyệt” trong lịch sử/bản soạn trước được thay thế về trạng thái bởi ghi nhận này; các phương án là quyết định thiết kế có thể điều chỉnh, không phải xác nhận đã code hoặc đã kiểm thử. Thông số thuộc hồ sơ chuyên môn khác tiếp tục theo task tương ứng, không tự đánh dấu chúng hoàn tất.

## Ghi nhận chấp thuận và phạm vi mới · 20/10/2026

Chủ dự án chấp thuận các hướng còn lại sau khi điều chỉnh quy mô thế giới. Phần giới hạn bản đầu chỉ ở vùng 1–10/10 NPC được thay bằng [PROD-06 V2](15_PROD_06_PHAM_VI_VA_NGAN_SACH.md): năm vùng mở, cấp 45, dungeon/boss/rương và cinematic. Quy tắc tiền nạp chung chế độ vẫn giữ. “Tăng ngân sách” ở ngữ cảnh này là nội dung/asset, không tự tăng ngân sách chỉ số chiến đấu. Các thông số chuyên môn chưa được nêu tiếp tục thiết kế theo task, không bị coi là đã xác định chỉ bởi chấp thuận tổng quát.
