# Trang chuyên cốt truyện và thiết kế hình ảnh

Ngày22/10/2026. Theo yêu cầu chạy lại HTML và tạo hai trang chuyên đề. Đây là công cụ đọc tài liệu nội bộ, không UI trong game hoặc tính năng MMORPG đã triển khai.

## 1. Các địa chỉ

- [Roadmap và checklist](/roadmap.html): tiến độ thiết kế, thư viện chung, liên kết tới hai trang mới.
- [Cốt truyện & Lore](/story.html): thứ tự đọc, tuyến xuyên suốt, thế giới, NPC, vùng, nhiệm vụ, hai phe và hồ sơ bí mật.
- [Thiết kế hình ảnh](/visual-design.html): bản đồ, nhân vật, phong cách, giao diện, icon và sơ đồ; bản hết hiệu lực nằm trong Lịch sử.

Hai trang lấy Markdown qua API local hiện có, không sao chép cốt truyện thành một bản HTML khác khó đồng bộ. File mới trong bộ truyện được đọc vào thư viện; danh sách bài nổi bật và bộ ảnh là danh mục biên tập cần cập nhật khi có bản thay thế.

## 2. Chức năng trang cốt truyện

Có10mục đọc nổi bật, tìm theo tiêu đề/chủ đề, thư viện truyện và các hồ sơ lore liên quan. Đọc trực tiếp trên trang, có mục lục, tảiMarkdowngốc và in/PDF bằng trình duyệt. Bản kể0.1 được ưu tiên;24hồsơNPCđề xuất không được báo thành82NPCđã xong.

Tài liệu truyện có cổng cảnh báo spoiler và chấp nhận theo phiên. Cổng này hỗ trợ trải nghiệm đọc, không thay chính sách bảo mật: API vẫn là nội bộ chỉ máy local theo server. Không mở các bí mật này thành trang giới thiệu công khai của game.

## 3. Chức năng trang hình ảnh

Có14mục hình/sơ đồ hiện hành hoặc tham chiếu và1mục class cũ hết hiệu lực, được lọc riêng. Tìm kiếm theo tên/nội dung, lọc nhóm, mở ảnh lớn, mở bản prototype tương ứng và đọc hồ sơ nguồn. Phân loại rõ concept/mockup/native32/wireframe; không coi bảng class là spritesheet hoặc bản đồ là navmesh.

Ảnh và tài liệu đều dùng file đã lưu trong dự án. Không tạo ảnhmới hoặc thay assetgame. Nativeicon vẫn là bộ32×32r002; không chỉnh pixel trong lần này.

## 4. File tạo/chỉnh và vận hành

Tạo public/story.html, public/visual-design.html, public/design-hub.css, public/design-hub.js; chỉnh public/roadmap.html và public/roadmap.css để thêm điều hướng. Dùng marked và mermaid đã có, không thêm package. Không đổi APIquyềnlocal, game simulation, combat hoặc schema.

Server khởi động lại bằng scripts/start-local-game.mjs với runtimeNodebundled, dùng PostgreSQLlocal có sẵn; không đổi thông tin kết nối. Server đã báo sẵn sàng ởport3000 vàhealthđược kiểm qua loopback.

## 5. Kiểm tra và giới hạn

[Báo cáoQA](/design-preview/design-hubs-r001/qa.json): tải10cardtruyện, cổngspoiler/bảnkể/Markdown/search;14hình hiệnhành tảithànhcông; bộlọcclass/ảnhlớn/Esc/lịchsử; liênkếtroadmap; bố cục390pxkhôngtrànngang. Đã sửa tràn tênfiledài ởthưviện. Cóảnhchụpmànhình local đểđối chiếu, không kết quảtestgame.

Các trang dùng trong localhost vìAPIđã hạn chế nội bộ; triển khai public sẽ cần chính sách riêng, không tháo quyềnAPIđể làm trang tự chạy. Tài liệu dài còn giữ nguyên nội dung nguồn, không tự sửa canon hoặc đánh hoàn thành task qua việc bấmUI.

Tổng525task giữ **127hoànthiện /12mộtphần /386chưathiếtkế**. Chỉ công cụ xem đã được tạo, không tính thêm thành một hệgame hoànthiện.
