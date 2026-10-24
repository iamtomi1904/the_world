# Map 1 — Ghép mái trực tiếp vào cảnh: đợt10 việc

24/10/2026 · [r026](/design-preview/v01-bridge-in-scene-r026/index.html).

## Cách dùng

Mở **Asset mái riêng**, bật **Ghép mái mới vào cảnh**. Chỉnh X/Y/rộng để xem trực tiếp trên cảnh chính. **Lưu cách ghép** giữ cấu hình trên trình duyệt này; **Bỏ cấu hình đã lưu** trả về mái gốc. Nếu chưa từng lưu, cảnh khởi đầu vẫn dùng mái gốc.

## Checklist đợt này

| # | Hạng mục | Kết quả |
|---|---|---|
| 1 | Ghép trực tiếp | Mái alpha r002 được dùng trong renderer chính, thay vì chỉ trong bàn so. Lớp kết cấu r001 nằm bên dưới vùng mái. |
| 2 | Đồng bộ vị trí | Scene và bàn so lấy cùng X/Y/rộng/bounds, không giữ hai bộ tọa độ riêng. |
| 3 | Đồng bộ vật liệu | Dùng chung canvas alpha-cutoff đã cache; có thể đổi về alpha gốc. Không sửa PNG nguồn. |
| 4 | Mờ mái theo trạng thái | Chế độ đóng/mở/manual/auto hiện có áp dụng cho mái mới; opacity cuối bằng alpha lớp mái nhân alpha trong bàn chỉnh. |
| 5 | Thứ tự trước/sau | Kết cấu trước actor, mái riêng sau actor; chỉ pixel có alpha của asset mới che actor. Không vẽ cả hình chữ nhật lên actor như lớp vùng gốc. |
| 6 | Chắn mưa theo hình mái | Quy đổi tọa độ hạt mưa về pixel asset, dùng alpha≥128 để xác định chạm mái; bỏ mái về gốc thì trở lại mask cũ. Mái mờ vẫn che mưa về mặt vật lý. |
| 7 | Mốc và khung kiểm tra | Bật Biên mái/ống khói sẽ thấy bounds và pivot mái mới trong cảnh; cùng phép biến đổi với vị trí vẽ. |
| 8 | Kiểm tra cấu hình | X40–150,Y−30–80,rộng170–280,alpha0–1. Giá trị trống, vô hạn hoặc ngoài phạm vi bị từ chối; renderer về mái gốc, có thông báo. |
| 9 | Lưu bố trí | localStorage riêng có version1, vị trí, alpha, cutoff và trạng thái bật mái mới. Không lưu vào dữ liệu nhân vật. |
| 10 | Phục hồi an toàn | Tải lại khôi phục khi cấu hình hợp lệ; dữ liệu hỏng không được áp dụng. Nút bỏ lưu xóa khóa riêng và đưa mái về gốc. |

- [x] Tích hợp cả10 hạng mục trên cùng r026.
- [x] Cập nhật tài liệu, thư viện và biên bản kiểm tra.
- [ ] Nghiệm thu sự khớp hình/đường viền giữa mái mới, xà và mặt tiền.
- [ ] Nội thất, cửa mở và đi vào nhà.
- [ ] Occlusion theo chiều sâu của map2.5D thực tế.

## Kiến trúc

roof-asset-review.js cung cấp roofAssetBridge: active, draw, hitTest, rect, drawGuides và placementValid. app.js gọi bridge nếu asset đã tải và cấu hình hợp lệ, còn lại dùng renderer gốc. Canvas vật liệu và mảng alpha được tạo một lần khi load; hit test mưa đọc mảng, không getImageData từng frame. Việc bật mái mới không đổi tọa độ tường/cửa hoặc phạm vi đường.

Khóa lưu: an-thanh-r026-roof-placement-v1. Đây là sở thích bố trí bản thử trên từng browser, không account, không Postgres. Lỗi quyền lưu hiển thị thông báo nhưng vẫn chỉnh được trong phiên.

## Kiểm chứng

[QA](/design-preview/v01-bridge-in-scene-r026/roof-live-qa.json) · [Ảnh trong cảnh](/design-preview/v01-bridge-in-scene-r026/roof-live-review.png).

Đã kiểm tra: bật mái mới; vị trí đổi ngay; lưu/reload đúng; cấu hình sai bị từ chối; hit alpha mái chặn mưa và điểm ngoài không chặn; lối cửa hợp lệ; tường còn chặn; gần cửa tự mờ, ra xa phục hồi; bỏ lưu quay lại mái gốc; viewport390px không tràn ngang; không pageerror. Đã xem ảnh toàn trang để kiểm tra vị trí mái trong cụm nhà.

## Giới hạn

Mái r002 là bản vẽ mới, hình ngói và silhouette không trùng từng pixel mái r020. Vùng kết cấu dưới mái vẫn lấy qua hình chữ nhật đã ghi ở hồ sơ258, vì vậy mép ghép và một ít cây/nền trong vùng này cần tiếp tục nghiệm thu. Cắt alpha128 không tự bảo đảm sạch mọi pixel lẻ. Hit mưa là screen-space, không ánh sáng hoặc vật lý3D.

Không tạo asset raster mới trong đợt này; dùng lại r001/r002 và provenance đã lưu ở hồ sơ258–259. Không tự coi nhà đã hoàn tất production hoặc nội thất đã chơi được. Tổng checklist525=128/14/383 không thay đổi.
