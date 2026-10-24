# CUR-08 r002 — Thiết kế lại ví theo phong cách pixel 2.5D

**Ngày:**22/10/2026. Người dùng phản hồi bản trước giống bảng web, chưa đồng bộ với phong cách game. Bản này thay cách trình bày của WIN-34, giữ quy tắc ví CUR-02…07. Không sửa game thủ thành hoặc backend.

## 1. Xem bản mới

[Mở mẫu pixel fantasy](/design-preview/wallet-v2/index.html). Bốn ảnh bàn giao ẩn toàn bộ công cụ chọn mẫu, chỉ giữ cửa sổ trong bối cảnh màn hình chơi. Mẫu HTML có bộ chọn A/B/C/D để đọc các trạng thái, không cần chuyển trang thật hoặc giao dịch tiền.

### A — Ví trong bối cảnh ngoại thành

![Ví tiền phong cách pixel fantasy trong cảnh 2.5D](/design-preview/wallet-v2/a_overview__r002.png)

### B — Sổ giao dịch và biên nhận

![Sổ giao dịch phong cách game](/design-preview/wallet-v2/b_history_receipt__r002.png)

### C — Cảnh báo thiếu tiền

![Hộp thoại thiếu Ngân Ấn](/design-preview/wallet-v2/c_held_pending_shortage__r002.png)

### D — Đổi server và lỗi tải

![Ví khi đổi server và lỗi tải](/design-preview/wallet-v2/d_scope_network_error__r002.png)

## 2. Những gì đã thiết kế lại

| Thành phần | Bản r002 |
|---|---|
| Bối cảnh | Cảnh ngoại thành mới: khối nhà, vách cao, bậc thang, cầu, nước và cây; có cảm giác chiều sâu |
| Khung cửa sổ | Gỗ tối, nẹp đồng, góc vuông và đinh tán bậc pixel; không viền dashboard mảnh |
| Header/tab/nút | Thanh tiêu đề như bảng gỗ, tab nổi và nút có mép sáng/tối cứng; tiêu đề VÍ TIỀN |
| Nội dung | Nền rêu tối giữ độ đọc, dòng tiền như các ngăn trong túi, icon ở ô khung pixel |
| Chữ và số | Tiêu đề/số dùng nét gọn, thân chữ giữ hỗ trợ tiếng Việt; không pixel hóa thông tin đến khó đọc |
| Màn hình chơi | HUD HP/MP và13ô phím1–9/Q/E/R/Z làm ngữ cảnh; chỉ là minh họa |
| Ảnh bàn giao | Không còn tiêu đề hồ sơ/công cụ thiết kế kiểu trang web; có chú thích nhỏ xác định đây là mẫu |

UI vẫn là lớp2D phẳng trên màn hình để đọc và bấm. Chất2.5D nằm ở môi trường và chiều sâu cảnh; không nghiêng bảng tiền hoặc chữ theo camera. Bản mới đặt cửa sổ hơi lệch phải để còn thấy nhân vật/lối đi bên trái, vẫn vừa viewport1280×720. Tại màn nhỏ hơn, cửa sổ trở lại giữa.

## 3. Quy tắc không đổi

Tinh Thạch toàn account; Ngân Ấn và Đồng Elarion theo account/server. Tiền đang giữ/chờ không thành khả dụng. Cảnh báo thiếu200Ngân Ấn với báo giá900và khả dụng700giữ nguyên; không bù premium. Lỗi đổi server không hiện số gameplay cũ. Tinh Thạch có thể giữ vì scope toàn account; nhãn server ngữ cảnh và cửa sổ đổi đồng bộ trong mẫu.

Giữ nguyên baPNG32×32r002 đã làm; hash không đổi, không sinh lại icon bằngAI. Native pixel của icon không bị làm mượt. Không phát tiền, đổi cap, sửa công thức combat, quyền class hoặc fee. Toàn bộ số dư/HUD là fixture thiết kế, không tài khoản hoặc game đang chạy.

## 4. Art và phương pháp

Nền ngoại thành mới được tạo bằng **built-in image_gen**, dùng bảng V4 làm tham khảo phong cách. Prompt đầy đủ lưu tại`public/design-preview/wallet-v2/background_prompt.txt`. Không dùng asset thủ thành cũ. Khung/nút/tab dùng HTML/CSS với cạnh bậc và các lớp màu cứng theo quy chuẩn UI, giúp giữ chữ/số và icon chính xác. Xuất bốnảnh bằngChrome/Playwright, không sinh chữ hoặc số bằng ảnhAI.

Cảnh nền là concept để xem UI trong ngữ cảnh, không bản đồ3D tương tác hoặc nghiệm thu camera/geometry. Dốc/cầu trong ảnh không có navigation/collision. Không tự đánh dấu ART-01/02/04 hay ROAD-02đạt vì ảnh trông có chiều sâu.

## 5. Kiểm tra đã làm

Đã xem cả bốn ảnh. Cửa sổ640×540, ảnh1280×720, không tràn nội dung chính ngoài ý muốn; viền và HUD không cắt nhau. Kiểm lại số dài, loading, vítrống, hạn chế và tổng quan1024×768. Icon tải đúng tệp32px. Không có lỗi JavaScript trong các ca mẫu.

Escđóng hộp thoại trước, sau đó đóng cửa sổ; mở lại hoạt động. Thanh toán thiếu tiền bị khóa. Tab và ô tìm nhận chữ/WASD theo focus; retry chuyển sang skeleton; số gameplay của server trước không bị lộ khi đổi scope. Đây là QA prototype, không kiểm transaction hoặc gameplay.

## 6. Tệp, phiên bản và checklist

Thư mục mới:`public/design-preview/wallet-v2/`, gồmHTML,bốnPNG__r002,art nền,prompt vàmanifest. V1giữ riêng để đối chiếu; r002là mẫu hiện hành. Manifest ghi hash/source/nativeicon/background, phương pháp và phạm viQA.

**Tiến độ giữ114 hồ sơ hoàn thiện /8 một phần /391 chưa thiết kế =513.** Đây là sửa thiết kế CUR-08đã có, không cộng thêm một task hoàn thành. Các nhóm cap/kinh tế/backend vẫn chưa làm tiếp trong lượt chỉnh phong cách này.
