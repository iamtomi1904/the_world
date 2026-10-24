# Trang lore — nền sáng và tra cứu từng mục

22/10/2026. Theo yêu cầu tách lore nhỏ và đổi giao diện sáng, story.html dùng bộ chỉ mục tạo từ heading Markdown; nội dung gốc vẫn nằm trong bộ truyện, không sao chép thành một kho lore thứ hai.

## Đã thực hiện

- Giao diện nền trắng/ngà, chữ xanh đậm, viền nhẹ. Trang hình ảnh dùng cùng theme sáng để đồng bộ cổng tài liệu.
- 124 mục tra cứu ở dữ liệu hiện tại, gồm Thế giới, Phe & tổ chức, NPC, Nhiệm vụ, Tuyến truyện, Vùng đất, Cảnh & đối thoại, Chủng tộc, Chức nghiệp và Nhánh chuyên sâu. Số mục tự thay đổi khi tài liệu thay đổi, không phải số NPC hoặc nhiệm vụ đã sản xuất.
- Tách3 chủng tộc,7 nghề,19 nhánh và5 lore vùng. Người hướng dẫn được lập chỉ mục theo mã J, gộp vai cấp15/30 cùng một người; người trong bảng N17–N23 cũng có mục riêng.
- Tìm tên/mã và nội dung Markdown, hỗ trợ không dấu. Kết hợp nhóm lore, chức nghiệp và chủng tộc học nghề; bộ lọc race là quyền học của player, không mặc định race của NPC thầy.
- Mở riêng phần được chọn, có URL trực tiếp doc+section, tải lại vẫn đọc phần đó; nút đọc toàn tài liệu giữ ngữ cảnh nguồn. Cảnh báo spoiler, tải Markdown gốc và in/PDF vẫn hoạt động.
- Thu gọn thư viện nguyên bản vào mục tài liệu gốc. Không xóa nội dung hay thay đổi tiến độ truyện.

## File và kiểm tra

Tạo public/story-lore.js; chỉnh public/story.html, public/visual-design.html, public/design-hub.js và public/design-hub.css. Kiểm tra trình duyệt local: số mục, lọc19/7/3/5, Kiếm Sư+Elf chỉ ASN, tìm tên thầy trong nội dung, mở riêng nhánh không lẫn nhánh kế tiếp, tải lại liên kết, đọc toàn văn, theme sáng, không tràn390px và thư viện hình vẫn14ảnh hiện hành. Không có pageerror trong lượt kiểm tra. [Báo cáo](/design-preview/lore-browser-r001/qa.json).

Đây là giao diện tài liệu local, không phải cửa sổ game. Không thay cốt truyện hoặc đánh dấu nhiệm vụ đã triển khai. Tiến độ giữ **525 mục:127 hoàn thiện /13 một phần /385 chưa thiết kế**. Tuyến truyện Valedorn–Merrowen đang là bước nội dung tiếp theo, chưa viết xong trong lượt chỉnh giao diện này.
