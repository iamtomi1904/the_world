# Map 1 — Trụ cầu và đường tiếp cận trong r026

24/10/2026 · [Tải lại cảnh r026](/design-preview/v01-bridge-in-scene-r026/index.html).

## Thay đổi trực tiếp trên cảnh hiện có

Tiếp tục ngay r026, không tạo thêm scene/asset hoặc đổi phong cách. Bổ sung footprint bốn trụ và polygon mặt đi theo tọa độ frame nguồn cầu. Hình nền, texture cầu, hai mask che, kích thước actor và tốc độ thử58px/s giữ nguyên. Không sửa chỉ số MMORPG hoặc gameplay thủ thành.

## Cấu trúc cấu hình

bridge-placement.json phiên bản2 thêm nhóm collision. Toàn bộ điểm/rect của cầu tính trong cùng frame nguồn với sprite, rồi chiếu bằng scale và anchorScreen/anchorSource hiện có. Vì vậy sửa vị trí prefab không để collider nằm lại ở chỗ cũ.

| Thành phần | Cấu hình nguồn thử |
|---|---|
| Mặt đi | Polygon10 điểm theo phần deck, không dùng bounds của toàn ảnh cầu |
| Trụ xa Tây | x90,y240,w120,h45 |
| Trụ xa Đông | x890,y240,w130,h45 |
| Trụ gần Tây | x85,y395,w130,h50 |
| Trụ gần Đông | x890,y395,w145,h50 |

Các rect là vùng chân thử, không toàn bộ hình trụ và không vật lý3D. Chúng vẫn cần duyệt theo chân trụ và góc camera thật. Actor có bán kính chân3px; phép circle–rect chặn khi chân tiến vào trụ. Vùng deck được kiểm tra ở tâm và bốn điểm quanh bán kính trong bản thử. Đây chưa phép sweep-circle chính xác hoặc navmesh.

## Di chuyển và debug

- Đường tiếp cận Tây/Đông vẫn nối polygon đường cũ.
- Khi vào span cầu, chân phải thuộc polygon deck, không bước ra mép mặt cầu.
- Cầu tắt: khoảng sông giữa mốc nối chặn cả bán kính chân, không chỉ tâm.
- Di chuyển chia bước tối đa khoảng2px và xét riêng hai trục, giữ cảm giác trượt dọc biên có sẵn.
- Hiển thị lý do chặn gần nhất: trụ nào, mép cầu hay ngoài đường.
- Bật “Trụ / mép cầu” để thấy mặt đi màu xanh, chân trụ màu cam, hai mốc nối và vòng chân actor. Mặc định lớp này tắt để giữ cảnh đẹp.
- Nút tới đầu cầu lấy tọa độ từ manifest thay vì rải hằng số khác vị trí.

## Kết quả kiểm tra

- [x] Đi Tây→Đông và Đông→Tây theo tuyến đường thử.
- [x] Tâm bốn footprint đều chặn và trả đúng tên trụ.
- [x] Từ điểm hợp lệ sát hai trụ gần, đi tới trụ sẽ dừng trước rect theo bán kính chân.
- [x] Mép deck và sông ngoài đường bị chặn.
- [x] Đổi anchorScreen.x thêm5px, vị trí footprint cũng dịch5px.
- [x] Hai điểm đứng thử thuộc vùng đi; tắt cầu chặn giữa sông.
- [x] Không pageerror và không tràn ngang viewport390px.
- [ ] Duyệt vùng chân theo chiều sâu và collider3D khi có mesh thật.
- [ ] Kiểm tra trên thiết bị chạm và nhiều mức zoom thực tế.
- [ ] Hoàn thiện animation trước/sau, depth và kết nối map rộng.

[QA cập nhật](/design-preview/v01-bridge-in-scene-r026/approach-qa.json) · [Cấu hình](/design-preview/v01-bridge-in-scene-r026/bridge-placement.json).

## Trạng thái

Lối đi và footprint đã hoạt động trong bản thử ảnh + sprite. Đây không phải hoàn tất collision2.5D, MMORPG multiplayer hoặc Map1 production. R009 tiếp tục là chuẩn hình, r020 nguyên trạng. Tổng checklist525=128/14/383 không đổi; không tự đánh dấu G1–G5.

## Bước tiếp theo

Tiếp tục kiểm tra trong chính cảnh r026: hoàn thiện tương tác gần cửa nhà và vùng che của mái/tán theo đúng hình gốc. Chỉ thay asset mới sau khi so chất lượng/tỷ lệ với r009; tránh quay lại cảnh khối làm chuẩn mỹ thuật.
