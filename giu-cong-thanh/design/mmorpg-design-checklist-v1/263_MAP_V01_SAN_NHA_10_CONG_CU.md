# Map 1 — Sân nhà: 10 phần thiết kế và công cụ bố trí

24/10/2026 · [r026](/design-preview/v01-bridge-in-scene-r026/index.html) → mở **Ghép thân + mái**, rồi **Bố trí sân nhà · 10 công cụ trong một cụm**.

## Mục tiêu

Có một công cụ bố trí sân hoạt động trên hình ghép nhà hiện tại, không thêm trang riêng. Tái sử dụng bộ prop r023 cùng hướng mỹ thuật đã có; chưa tạo thêm raster. Không tự đè prop mới lên vật thể đã dính nền hoặc gọi đây là sân hoàn chỉnh production.

## Đủ10 phần trong đợt này

| # | Phần | Thiết kế và chức năng thực |
|---|---|---|
| 1 | Thư viện vật thể | Thùng gỗ, chậu hoa, đoạn rào, đèn đứng từ sheet r023. Bounds tìm theo alpha≥200, vật liệu cutoff128, giữ tỷ lệ từng vật thể. |
| 2 | Thêm / chọn / xóa | Tối đa32instance; ID riêng; danh sách chọn rõ; xóa không ảnh hưởng lớp nhà. Ban đầu không thêm tự động để tránh trùng vật thể nền. |
| 3 | Kéo thả chuột/chạm | Chọn theo vùng hình, ưu tiên vật thể vẽ trên; pointer capture và xử lý hủy kéo. Quy đổi ngược transform nhà để không sai tọa độ khi scale/dịch cụm. |
| 4 | Bám lưới | Lưới4px tùy chọn; tắt dùng1px. Giới hạn vùng sân x70–350,y110–260 của bản thử. |
| 5 | Tỷ lệ / lật | Scale0.5–2.0 giữ tỷ lệ sprite; lật ngang quanh chân vật thể. Mọi vật thể đi cùng transform mỹ thuật cụm nhà. |
| 6 | Footprint và lối cửa | Hiện vùng chân của vật thể, hành lang cửa x160,y170,w30,h65. Đổi màu và liệt kê ID khi footprint giao lối cửa. Đây là cảnh báo bố trí, không collider gameplay. |
| 7 | Thứ tự che | Foot y<173 vẽ trước thân nhà, còn lại sau mái; các vật thể trong mỗi nhóm sắp theo y. Cùng foot y ưu tiên instance thêm sau khi chọn. |
| 8 | Ánh đèn | Đèn đứng có lớp ánh vàng riêng trong chế độ thử. Nguồn sáng bám vị trí/scale cụm; không vẽ thêm nền sáng vào PNG. |
| 9 | Hoàn tác | Giữ20ảnh trạng thái trước thêm/xóa, kéo, scale/lật hoặc nhập. Một lượt kéo chỉ tạo một bước undo. |
| 10 | Lưu / nhập / xuất | Lưu local browser; JSON tối đa32KB và32instance. Kiểm tra version, type, IDduy nhất, số hữu hạn, biên tọa độ, scale và flip. Nhập lỗi không thay bố trí đang dùng. |

- [x] 10 phần hoạt động trong khu ghép hiện có.
- [x] Cập nhật HTML, Markdown, thư viện và checklist đợt.
- [x] Kéo thả, cảnh báo, undo, persist và JSON được kiểm tra.
- [ ] Duyệt chất lượng prop r023 so cảnh r009 ở tỷ lệ thật.
- [ ] Xóa/tách các prop đã dính nền để có sân độc lập.
- [ ] Footprint chính xác và va chạm server/gameplay.
- [ ] Depth/sorting theo địa hình2.5D thực tế.

## Quy tắc hình ảnh và tọa độ

Tọa độ vật thể lưu trước transform cụm nhà. Khi nhà dịch/scale trong bàn ghép, vật thể và footprint cùng dùng transform đó; khi kéo, tọa độ con trỏ được chuyển ngược. Không lưu tọa độ theo pixel CSS của màn hình, tránh sai khi zoom trang hoặc mở trên mobile.

Kích thước gốc thử: thùng22px, chậu18px, rào26px, đèn60px. Footprint thùng/chậu10×6px, đèn5×6px; rào rộng90%hình×6px. Đây là cấu hình authoring ban đầu, chưa chốt thông số vật lý. Cảnh báo chỉ xét vùng chân, không coi mọi pixel tán hoa là vật cản.

Sắp lớp theo foot y173 là quy tắc đơn giản cho sân phẳng của fixture; chưa xử lý vật thể cao phía sau mái hoặc nền nhiều độ cao. Ánh đèn là screen blend, không hệ ánh sáng3D. Mục Nền bỏ nhà không vẽ các prop mới, để xem riêng nguồn repair.

## Dữ liệu

File script: courtyard-editor.js; render hooks back/front trong cottage-assembly.js. Sheet dùng lại tại ../v01-courtyard-props-r023/courtyard-props-source-r001.png. PNG nguồn không đổi.

Khóa browser: an-thanh-r026-yard-layout-v1. Export binh-minh-yard-layout.json gồm version, source cố định, items, corridor và warnings. Import chỉ lấy trường hợp lệ của instance, không cho file chọn nguồn ảnh/script tùy ý. Không liên quan tài khoản, tiền, kho vật phẩm hoặc Postgres.

## Kiểm chứng

[QA](/design-preview/v01-bridge-in-scene-r026/yard-editor-qa.json) · [Ảnh kiểm tra](/design-preview/v01-bridge-in-scene-r026/yard-editor-review.png).

Đã kiểm tra đủ4loại prop; kéo thực bằng pointer; kéo vào lối cửa gây cảnh báo; undo trả lại; scale/lật đúng; từ chối type lạ; lưu/reload giữ4instance; xuất và nhập JSON; viewport390px không tràn ngang; không pageerror. Ảnh QA có các vật thể đặt gần nhau để kiểm tra chọn/che; không phải bố trí sân được duyệt.

## Giới hạn và bước tiếp theo

Bản đồ vẫn còn rào/hoa/đèn vẽ trong ảnh nền. Công cụ không tự xóa chúng, vì vậy người thiết kế cần tránh trùng và chưa thể coi toàn bộ sân là prefab sạch. Cụm này vẫn nằm trong bàn ghép mỹ thuật; actor ở cảnh chơi bên dưới chưa va chạm prop mới.

Bước tiếp theo hợp lý là một bố trí sân mẫu hoàn chỉnh và tách prop nền còn dính, sau đó nối gameplay theo cùng transform. Không tiếp tục chia thành nhiều lượt chỉnh riêng từng nút. Tổng checklist lớn525=128/14/383 giữ nguyên; không tự tăng số hoàn thành production.
