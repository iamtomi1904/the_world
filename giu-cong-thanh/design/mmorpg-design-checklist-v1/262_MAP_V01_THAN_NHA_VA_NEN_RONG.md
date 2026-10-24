# Map 1 — Thân nhà alpha, nền rỗng và ghép cụm hình

24/10/2026 · [r026](/design-preview/v01-bridge-in-scene-r026/index.html) → **Ghép thân + mái trên nền bỏ nhà · bộ hình mới**.

## Kết quả chính

Có hai raster mới: thân nhà nền trong suốt r003 và cảnh bỏ nhà r001. Ghép thân với mái alpha r002 ở cùng cảnh để đánh giá hình và chuẩn bị prefab. Đây là bộ hình ứng viên: cửa, móng và tỷ lệ chi tiết có thay đổi so ảnh r020; không gọi là trích xuất pixel chính xác.

## 10 việc trong đợt

| # | Hạng mục | Kết quả |
|---|---|---|
| 1 | Vẽ thân nhà riêng | Thân tường kem, gỗ, cửa, cửa sổ sáng, móng đá và gable; không mái, cây hoặc cảnh nền. |
| 2 | Vẽ nền khi bỏ nhà | Xóa mái, ống khói, tường và bậc cửa; thay bằng khoảng cỏ/đất. Giữ bố cục cảnh tham chiếu. |
| 3 | Kiểm tra vật liệu | Runtime cutoff128 trên PNG nguồn, bounds tự tính, đếm pixel biên. Thân/mái đều0pixel chạm biên sau cutoff. |
| 4 | Giới hạn vùng nền sửa | Chỉ lấy x84,y10,w228,h174 từ ảnh bỏ nhà; ngoài vùng dùng ảnh r020 để giữ nguyên cảnh. |
| 5 | Ghép thân và mái | Thân x121, đáy173,rộng159; mái x86,y12,rộng224. Giữ tỷ lệ từng sprite từ bounds. |
| 6 | Bật/tắt từng lớp | Xem thân riêng, mái riêng hoặc cả hai để kiểm tra khớp gable, eave và mặt tiền. |
| 7 | Transform cả cụm hình | Dịch X−30..30,Y−10..20,scale0.8..1.2 quanh anchor[175,173]. Hai lớp dùng cùng transform. |
| 8 | Xem nền và mốc | Chế độ Nền bỏ nhà; bật mốc chân cửa và footprint tham chiếu. Footprint chỉ là overlay, không collision gameplay. |
| 9 | Reset / xuất bố trí | Reset đưa về mẫu đầu; xuất JSON nguồn, bounds, placement, anchor, transform, vật liệu và phạm vi nền sửa. |
| 10 | Đồng bộ hồ sơ cụm nhà | Thân/nền từ missing/baked chuyển thành candidate; còn giữ điều kiện nghiệm thu. Cập nhật HTML, Markdown, checklist và nguồn ảnh. |

- [x] Hai raster mới được lưu trong workspace.
- [x] Bàn ghép hoạt động ngay trên r026, không tạo tab mới.
- [x] Tải JSON, reset, transform và viewport390px được kiểm tra.
- [ ] Nghiệm thu hình ghép và mép nền sửa.
- [ ] Tách rào, hoa, thùng và đèn sân theo đúng cảnh.
- [ ] Chuyển collider, tương tác, đường đi và minimap sang prefab sau khi duyệt asset.

## File hình và nguồn

[Thân nhà alpha](/design-preview/v01-bridge-in-scene-r026/cottage-body-alpha-r003.png) · [Nền bỏ nhà](/design-preview/v01-bridge-in-scene-r026/cottage-empty-site-r001.png) · [Prompt và nguồn](/design-preview/v01-bridge-in-scene-r026/cottage-assembly-provenance.json).

Built-in image_gen: background-extraction cho thân nhà, precise-object-edit cho nền. PNG gốc giữ nguyên; cutoff là vật liệu runtime. Mái r002 dùng lại từ hồ sơ259.

## Kiểm chứng

[QA](/design-preview/v01-bridge-in-scene-r026/cottage-assembly-qa.json) · [Ảnh ghép](/design-preview/v01-bridge-in-scene-r026/cottage-assembly-review.png) · [Xem nền](/design-preview/v01-bridge-in-scene-r026/cottage-empty-review.png).

Thân1433×1098, bounds976×807;533259pixel solid sau cutoff. Mái671911pixel solid. Cả hai không chạm biên sau cutoff. Kiểm tra đổi transform, reset và tải JSON thành công; không pageerror, viewport390px không tràn. Đã xem hình ghép để căn body sang x121, đưa đỉnh gable và cửa gần mốc dự kiến thay vì dùng x103 cũ.

## Giới hạn thực tế

Bàn ghép không có actor hoặc gameplay; cảnh chính bên dưới vẫn giữ nguồn r020 và va chạm cũ. Transform chỉ đổi cụm hình trong bàn ghép, không làm collider chạy trước hình. Điểm cửa mới còn cần xác nhận theo pixel thật trước khi dùng tương tác.

Ảnh nền edit có thể đổi prop trong vùng sửa, đặc biệt thùng bên hông. Vùng phía ngoài rect được giữ nguyên bằng renderer, còn trong vùng cần duyệt lại rìa cây/cỏ và vật thể. Rào, hoa và đèn xung quanh vẫn đứng ở nền khi dịch nhà. Không được coi đây là đầy đủ toàn bộ prefab sân nhà.

Hồ sơ261 được cập nhật trạng thái source nhưng không tự cho phép di chuyển nhà gameplay. Tổng checklist lớn525=128/14/383 giữ nguyên. Đợt sau ưu tiên hoàn thiện các prop sân còn thiếu thành một nhóm, sau đó kết nối prefab; tránh tiếp tục chia lẻ chỉnh từng viên ngói.
