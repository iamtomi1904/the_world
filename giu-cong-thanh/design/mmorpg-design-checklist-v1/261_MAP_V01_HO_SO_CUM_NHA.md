# Map 1 — Hồ sơ cụm nhà và điều kiện dựng prefab

24/10/2026 · [r026](/design-preview/v01-bridge-in-scene-r026/index.html) → **Hồ sơ cụm nhà · lớp hình, mốc ghép và điều kiện dựng**.

## Kết luận thiết kế

Chưa cho dịch chuyển cả nhà trên cảnh: thân nhà, vật thể sân và nền bị che chưa đủ lớp độc lập. Dịch chuyển riêng va chạm sẽ làm sai hình; dán cả vùng ảnh lên vị trí mới sẽ kéo theo cây và nền. Hoàn thiện hồ sơ chuẩn bị prefab trước, không giả lập một prefab hoàn chỉnh bằng ảnh chữ nhật.

## 10 phần đã thiết kế và đưa vào hồ sơ

| # | Phần | Quyết định / đầu ra |
|---|---|---|
| 1 | Định danh và hệ tọa độ | schema an-thanh.cottage-prefab-design, version1, IDv01-cottage-01, scene800×500. |
| 2 | Danh sách lớp hình | Sáu lớp: nền sửa, thân nhà, gác, mái, đèn, vật thể sân. Mỗi lớp có nguồn, trạng thái và việc cần làm. |
| 3 | Anchor chung | Chân cửa tại[175,173], scale1, rotation0. Chưa bật sửa transform khi thiếu asset. |
| 4 | Socket cửa và tiếp cận | Ghi cả tọa độ scene và local so anchor; cửa và điểm đứng có cùng local[0,0], khác vai trò interaction/navigation. |
| 5 | Tường và vùng chân | Đưa rect va chạm đang dùng vào package; kiểm tra tâm tường thực sự chặn. Không dịch collider riêng. |
| 6 | Mái và mái hiên | Xuất physical roof, shelter và cấu hình asset mái đề xuất. Phân biệt mái đồ họa với vùng vật lý che mưa. |
| 7 | Đèn và socket ánh sáng | Xuất vị trí, radius, opacity; mốc ánh sáng là local[85,15]. Thân đèn vẫn cần tách hình. |
| 8 | Đường tiếp cận | Nút Kiểm tra chạy lại findRoute từ vị trí actor hiện tại tới cửa; ghi kết quả, không tạo kết quả thành công giả. |
| 9 | Thứ tự lớp và điều kiện nghiệm thu | Xuất thứ tự render dự kiến; hiển thị các điều kiện còn thiếu: alpha thân nhà, nền rỗng, vật thể trước nhà, duyệt chiều sâu. |
| 10 | Xuất gói hồ sơ | JSON chứa nguồn lớp, tọa độ scene/local, collision, shelter, lamp, mái và kết quả kiểm tra. Trang hiện mốc trên scene và bảng trạng thái để tra cứu. |

- [x] 10 phần hồ sơ được tập hợp từ cấu hình thực, có kiểm tra và xuất JSON.
- [x] HTML/Markdown/danh mục cùng cập nhật.
- [ ] Nền rỗng sau khi bỏ toàn bộ nhà.
- [ ] Thân nhà alpha riêng đúng mẫu hiện tại.
- [ ] Tách rào, hoa, thùng và thân đèn đúng bản cảnh.
- [ ] Transform cả prefab, cập nhật đường đi và minimap sau khi đủ hình.
- [ ] Map2.5D, mesh/depth và nội thất.

## Trạng thái asset thật

| Lớp | Trạng thái |
|---|---|
| Nền sau toàn bộ nhà | Chưa có; không nhầm với nền bỏ mái hoặc vùng sửa cầu |
| Thân/mặt tiền | Dính nền r020 |
| Kết cấu dưới mái | Có ảnh r001, mới dùng vùng chữ nhật |
| Mái/ống khói | Có PNGalpha r002, còn chờ duyệt độ khớp |
| Thân đèn | Dính nền; ánh sáng runtime đã riêng |
| Hoa/thùng/rào | Dính nền; prop r023 khác mẫu chưa được tự dùng thay |

## Quy luật triển khai tiếp

Khi đủ asset, mọi điểm sẽ đi qua cùng transform từ anchor; collider, tương tác, đèn, đường tiếp cận và minimap cùng cập nhật. Hiện hồ sơ chỉ xuất dữ liệu chuẩn bị, không thay đổi transform thực. Khuôn nhà này không mặc định là nhà người cha hay NPC chuyển chức. Không thêm canon để lấp dữ liệu hình còn thiếu.

Gói JSON là tài liệu thiết kế, không thể nạp thẳng thành entity production. Nguồn ảnh cùng trạng thái baked/region/missing phải được tôn trọng khi importer thật được viết. Không lưu hồ sơ này vào tiến độ nhân vật hoặc Postgres.

## Kiểm chứng

[QA](/design-preview/v01-bridge-in-scene-r026/cottage-prefab-qa.json) · [Ảnh kiểm tra](/design-preview/v01-bridge-in-scene-r026/cottage-prefab-review.png).

Đã kiểm tra schema, đủ6lớp, anchor/local cửa, tìm được tuyến tới cửa, ghi đúng4điều kiện trước khi di chuyển, transform đang khóa, tải JSON đúng tên, viewport390px không tràn và không pageerror.

Không báo hoàn tất prefab hoặc dựng xong Map1. Checklist lớn525=128/14/383 vẫn giữ nguyên. Không tạo raster mới trong đợt này.
