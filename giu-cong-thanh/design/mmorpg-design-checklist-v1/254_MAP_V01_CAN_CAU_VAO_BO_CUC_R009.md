# Map 1 — Căn cầu tách lớp vào bố cục r009, r026

24/10/2026 · [Đi thử cầu trong cảnh](/design-preview/v01-bridge-in-scene-r026/index.html).

## Kết quả bước này

Đưa cầu tách lớp r025 vào đúng vị trí cầu của cảnh mỹ thuật r009/r020. Khác fixture nền trống trước, bản này so asset trong bối cảnh nhà, cây, bờ và đường đã chọn. Không thay môi trường bằng texture/khối thô. Cầu là sprite độc lập, tắt được mà không để lại cầu in sẵn trong nền.

Cảnh gốc r020 giữ nguyên. Trang có chế độ đối chiếu ảnh r020 và chế độ ghép mới. Chế độ ảnh gốc không vẽ actor/cầu mới để so hình.

## Xử lý nền

Dùng imagegen tích hợp bỏ riêng cầu trong một bản sao nền r020. Lưu nguồn sửa mới; không ghi đè ảnh chuẩn. Khi render luôn vẽ ảnh r020 gốc trước, chỉ clip ảnh sửa vào polygon x400–651,y222–345 trên canvas800×500. Vì vậy thay đổi ngoài vùng cầu trong đầu ra imagegen không được dùng lên cảnh.

Nhà, cây và cảnh vật ngoài cửa sổ sửa vẫn lấy từ nền cũ. Vùng sông khôi phục nằm sau cầu, nhìn được qua vòm. Đây vẫn là nền ảnh, chưa toàn bộ map ghép từ tile/mesh. Hình bờ bị cầu che trước đây là nội dung tái dựng tạo sinh, cần duyệt tiếp giáp.

## Cầu và hai mốc nối

Dùng lại duy nhất frame nguồn và hai mask bổ sung của r025, không dùng bộ trụ rời. Tỷ lệ hiển thị200/880, anchor nguồn(535,340) đặt tại(530,275) màn hình. Cấu hình tại bridge-placement.json.

| Mốc | Tọa độ thử |
|---|---|
| Đầu Tây | (426,275) |
| Đầu Đông | (630,280) |
| Điểm đứng thử bờ Đông | (650,280) |

Vùng đi được sửa theo mặt cầu và nối hai polygon đường. Actor/bán kính chân vẫn kiểm tra theo tọa độ màn hình. Có nút tới hai đầu cầu, đi WASD/mũi tên/pad. Tắt cầu sẽ chặn bước qua khoảng sông, đưa actor đang ở giữa về phía Tây; không cho đi trên cầu vô hình.

Thứ tự render: nền gốc → phần sông khôi phục cục bộ → phần sau cầu → actor → foreground cầu → thời tiết. Hai mask giữ số pixel185.915/152.599 như r025. Đá, rêu, tỷ lệ và các vùng mask vẫn là candidate mỹ thuật, chưa được tự động nghiệm thu.

## Kiểm tra

- [x] Tuyến từ đường Tây qua cầu tới đường Đông đi được.
- [x] Mốc đứng thử ở hai đầu thuộc vùng đi.
- [x] Vị trí sông ngoài đường bị chặn.
- [x] Tắt cầu chặn vị trí giữa sông.
- [x] So chế độ gốc/ghép khi tắt lá, gợn và thời tiết: vùng kiểm tra ngoài cửa sổ sửa cầu (có lề2px) và vùng actor có0pixel khác.
- [x] Không pageerror, không tràn ngang390px.
- [ ] Duyệt tiếp giáp đá hai vai cầu với bờ và đường gốc.
- [ ] Kiểm tra occlusion tại trụ gần, mép mặt cầu và mọi hướng tiếp cận.
- [ ] Khóa collider/cao độ trong scene2.5D; hiện là polygon màn hình.
- [ ] Duyệt đầy đủ asset ở native scale trước khi cập nhật cảnh chính.

[QA](/design-preview/v01-bridge-in-scene-r026/qa.json) · [Vị trí ghép](/design-preview/v01-bridge-in-scene-r026/bridge-placement.json) · [Nguồn/prompt](/design-preview/v01-bridge-in-scene-r026/provenance.json).

Chưa hoàn tất Map1/production/G1–G5; tổng525=128/14/383 giữ nguyên. Không sửa gameplay thủ thành hoặc DB.

## Tiếp theo

Kiểm tra chi tiết đường đi/đá tiếp giáp và che khuất quanh trụ trong chính bản cảnh này, không quay về fixture xấu làm chuẩn hình. Sau đó áp dụng cách giữ nền gốc và ghép một asset độc lập cho nhóm nhà hoặc cây đã có mẫu.
