# ROAD-02 — Cổng đối chiếu nền tảng 2.5D

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0  
**Trạng thái:** Thiết kế một phần; chưa đủ bằng chứng đóng cổng sản xuất hàng loạt. Không code hoặc thay thủ thành. [Nghiên cứu](65_THAM_KHAO_HE_CHI_SO_MMORPG_2_5D.md).

## 1. Kết quả đối chiếu

| Phần | Đã thống nhất trên giấy | Còn thiếu |
|---|---|---|
| Lore/danh tính | Aetheria/Elarion, nhân vật tự tạo, cha nuôi; ba race/bảy nghề/19 nhánh, tiến trình riêng thủ thành. | Liên kết quest/vùng chi tiết; không coi sáu hồi đã triển khai. |
| Phong cách | V4, sprite2D/môi trường khối3D texture pixel/camera cố định. | Scene mẫu thực theo hồ sơ38. |
| Tỷ lệ | Người40px tham chiếu, Elf/Lùn riêng, người/ngựa/cánh composite. | Cùng camera kiểm body, ngựa, nhà/cây và lọt cầu. |
| Frame/depth | Pivot/trim/socket và bề mặt đi lại riêng. | Atlas/sprite thực và hai tầng đã dựng đúng. |
| UI | 13ô 1–9/Q/E/R/Z nhận skill/item, WASD/con trỏ. | UI-03/mobile/gamepad cần reflow; sơ đồ tám ô cũ không còn chuẩn. |

Có thể tiếp tục STAT vì mô hình chỉ số tách khỏi renderer. Chưa cho phép gọi camera/pipeline đã chốt để vẽ hàng loạt. Mẫu nhỏ/graybox vẫn là bước cần làm, không phải bị cấm bởi cổng này.

## 2. Đơn vị thế giới và khoảng cách

Chọn đơn vị logic **U**: cạnh module bố trí mặt đất cơ sở là1U, không tuyên bố bằng một mét thật. Texture32px/U là mật độ tác giả tham chiếu, không screen pixels. Khoảng cách phẳng sqrt(dx²+dy²); chuẩn hóa di chuyển chéo để không chạy nhanh hơn.

Z là cao độ, surfaceId là mặt đứng/đi. Hai người chồng hình trên cầu/dưới cầu không tự ở cùng mặt. Skill khai báo horizontalRange, verticalTolerance, targetSurfacePolicy, lineOfSightPolicy và volume shape. Thiếu policy không được mặc định đánh xuyên tầng. COMBAT/MAP còn phải thiết kế các shape/tolerance cụ thể.

Click ray tìm mặt đích hợp lệ, không lấy cánh/alpha sprite làm mặt đất. Collider/điều hướng dùng U, độc lập UI scale/camera. Cánh ngựa không tự cấp quyền bay tự do.

## 3. Camera và cổng bằng chứng

So35/45/55 độ theo hồ sơ38, ghi framing/ortho scale và mật độ hình; chưa có phương án thắng. Cần đường/dốc/cầu-lối dưới/nhà-cây/nước và actor có vũ khí/cánh, không chỉ ảnh sân phẳng.

Để đóng cổng: profile camera, ảnh/clip, bảng tỷ lệ, ray selection hai tầng, atlas trim/socket và VFX không crop; ghi phạm vi/version/người kiểm/lỗi còn lại. Renderer chưa được chọn bởi tài liệu này. ROAD-02 vẫn một phần, ART-01/02/04 không được tick hoàn tất theo hồ sơ đối chiếu.
