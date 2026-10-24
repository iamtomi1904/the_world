# Roadmap và thư viện thiết kế — Ẩn Thành

Mở http://localhost:3000/roadmap.html sau khi chạy `npm run dev`. Trang chủ có liên kết ở footer.

- Dashboard với số đầu việc lấy từ tài liệu gốc, tiến độ, danh mục hệ thống và mốc gợi ý M0/M1/M2/X.
- Checklist tìm không dấu/có dấu theo mã, nội dung, ghi chú hoặc người phụ trách; lọc theo mốc/trạng thái/hệ thống. Đánh dấu nhanh hoặc mở chi tiết để đặt người phụ trách, ghi chú, mốc và trạng thái.
- 58 màn hình nằm trong ma trận UI của tài liệu, không tính trùng vào 513 đầu việc.
- Tiến độ chỉ lưu localStorage ở trình duyệt hiện tại; không đồng bộ tài khoản/database, không sửa các dấu trong Markdown nguồn. Đóng/xóa dữ liệu trình duyệt có thể mất tiến độ; xuất JSON để sao lưu, nhập gộp/cập nhật các mã hợp lệ.
- Thư viện 20 tài liệu đọc trực tiếp từ hai thư mục design/mmorpg-design-checklist-v1 và design/mmorpg-story-v1. Markdown, bảng, mục lục và sơ đồ Mermaid được hiển thị bằng thư viện cài local, không cần CDN. Có tải Markdown gốc và in/lưu PDF qua trình duyệt.
- Tài liệu truyện có cảnh báo spoiler trước mở; chi tiết V1 vẫn là đề xuất, không phải tính năng đã làm.
- API /api/design-documents chỉ đọc trên kết nối loopback + host local, từ chối môi trường production và yêu cầu có X-Forwarded-For; không chuyển bộ tài liệu chứa spoiler vào public hoặc phát qua endpoint công khai. Trang HTML tĩnh không nhúng nội dung tài liệu. Nếu cần chia sẻ online phải thiết kế quyền quản trị riêng.
- Mốc cho từng đầu việc là gợi ý ban đầu theo nhóm; có thể sửa trong chi tiết, không ghi đè phạm vi chính thức trong hồ sơ.
- Phím / để tìm checklist, Esc đóng menu mobile; xem trên PC/mobile. Sidebar và bảng có vùng cuộn phù hợp.

File mới: public/roadmap.html, roadmap.css, roadmap.js. Chỉnh server.mjs (đọc thư viện nội bộ và phục vụ marked/Mermaid), public/home.html (link), package.json/package-lock.json (thư viện).

Không chạy test gameplay, trình duyệt hoặc đo hiệu năng theo yêu cầu trước của người dùng. Chỉ khởi động server để áp dụng thay đổi; chưa xác nhận UI trực tiếp trong trình duyệt.

## Thứ tự checklist

Checklist mặc định xếp 001–513 theo 16 bước S01–S16 từ `public/roadmap-order.json`. Tổng quan đề xuất đầu việc chưa duyệt đầu tiên có đủ nền tảng, hiển thị tiến độ từng bước. Bộ lọc bước và điều kiện giúp xem việc có thể làm hoặc đang chờ. Mở đầu việc để xem và truy cập từng hồ sơ cần duyệt trước. Đây là hướng dẫn thiết kế, không khóa thao tác người dùng.

Tiến độ và mã đầu việc cũ được giữ nguyên. Tài liệu 09 là chỉ mục theo thứ tự, không tạo checkbox trùng. M0/M1/M2/X vẫn thể hiện phạm vi phát hành độc lập. Không chạy kiểm thử hoặc kiểm tra trình duyệt theo yêu cầu dừng kiểm tra của người dùng.

## Trạng thái hồ sơ chính thức · 20/10/2026

Checkbox nguồn Markdown là trạng thái thiết kế: [x] đã thiết kế; [ ] có dấu “Thiết kế một phần” là một phần; [ ] còn lại chưa thiết kế. Đã ghi nhận PROD-01…07 hoàn thiện V1, không xác nhận code hoặc kiểm thử. Các mục nhắc đến trong tổng quan không tự được hoàn thành. Roadmap có bộ đếm/lọc và nút mở hồ sơ từ liên kết trên dòng task. localStorage giữ theo dõi/ghi chú cá nhân nhưng không thay trạng thái nguồn; xuất/nhập cũ tiếp tục dùng cho dữ liệu cá nhân. Chưa chạy kiểm thử theo yêu cầu người dùng.

### Sửa đọc checklist Windows

Bộ đọc checklist chấp nhận cả CRLF, LF và CR trước khi khớp mã task. Trước đó CRLF khiến các dòng trong một số file không được nhận diện, mất cả nhóm PROD và làm bộ lọc đã thiết kế rỗng. Không sửa trạng thái để che lỗi đọc nguồn.
