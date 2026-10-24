# 274 · Bình Minh — dựng lại khối địa hình và Vùng 2, r009

24/10/2026. Phạm vi: bản đồ MMORPG Bình Minh cấp1–10. Không sửa chế độ thủ thành.

## Nguyên nhân ảnh bị cắt mảng

R008 tạo mặt vách từ đường biên co vào trong. Mỗi đoạn tự lấy texture theo vị trí riêng, nên hướng đá lệch, đường nối không liên tục, đặc biệt ở góc cong. Mặt dốc dùng vật liệu khác màu đường, cỏ trên mép lại khác nền cỏ chung. Mép vùng trũng còn được vẽ xuyên qua suối; phân loại nước cạn có thể ghi đè sông sâu ở hợp lưu. Cầu thang không giải quyết các lỗi hình học này.

## Thiết kế và triển khai mới

- **Vùng 2** là tên gọi chung cho tiếp giáp hai môi trường. Các lớp ghép phải cùng hệ tọa độ vật liệu, cùng đường biên và cùng quy tắc va chạm.
- Thềm có đường đỉnh chung và đường chân chung; từng mặt dùng chính các đỉnh tiếp giáp. Chiếu đường chân theo hướng nhìn 2.5D thay cho dải co vào mặt trên. Texture dùng chiều dài tích lũy quanh thềm, không đặt lại tại mỗi đoạn.
- Mặt trước lộ đất/rễ/đá; mặt bên không kéo giãn texture theo phương ngang; mặt khuất chuyển sang vật liệu cỏ chung. Chân vách có bóng tiếp xúc.
- Cỏ ở vùng chuyển tiếp lấy đúng texture, tỷ lệ và sắc độ nền cỏ; đất dốc lấy đúng vật liệu đường. Bậc nằm trong hành lang dốc, cắt theo mặt khối, không thêm một ảnh cầu thang che đường nối.
- Cắt mặt vách tại lòng nước. Nước sâu được ưu tiên ở hợp lưu; nước cạn không bị mặt vách đổi thành đất/ô chặn. Sửa5265ô navigation ở các chỗ giao nhau, không phải mở toàn bộ vách cho đi xuyên.
- Cao độ mặt đất suy ra từ map. Thềm/trũng chuyển liên tục qua mặt dốc. Client và server cùng tính đường đi theo chiều dài bề mặt, và chặn bước nhảy cao độ đột ngột.
- XY hiện lưu trong PostgreSQL là tọa độ chân trên bản đồ đã chiếu. Không dịch riêng sprite lên một lượng Z làm chân rời mặt đất. Không thêm schema/Z do người dùng tự gửi.
- Vẽ thêm hoạt ảnh đi Bắc/Nam:8frame, cùng canvas96×96 và chân neo80; đứng/đi ngang dùng asset đang có. Sửa lỗi đi dọc dùng hình đứng yên.
- Bổ sung18vật thể theo cụm sinh hoạt và108cụm chi tiết bờ nước: sậy, cỏ ẩm, đá rêu, ghế, xe hàng, bó rơm, chỗ bổ củi, vườn nhỏ, bia cổ, hình nộm, bàn dụng cụ. Đồ lớn có footprint; cỏ nhỏ không cản đường.
- Dời hàng rào theo đường đỉnh mới; loại21đoạn rào cũ chồng đôi. Debug có đường đỉnh xanh, đường chân vàng và cạnh đứng để tra cứu khối.

## Tham khảo và quyết định

- [CrossCode — bài viết của nhà phát triển về vai trò cao độ](https://www.radicalfishgames.com/?p=1168): tham khảo cách ưu tiên đọc địa hình. Chưa thêm nhảy tự động hoặc hệ chiến đấu CrossCode.
- [Eastward — bộ ảnh chính thức](https://eastwardgame.com/media/): tham khảo cách gom vật thể thành cụm có chức năng. Việc áp dụng vào làng/trại là quyết định thiết kế riêng của dự án.
- [Godot — tài liệu TileMap của nhà phát triển](https://github.com/godotengine/godot-docs/blob/master/tutorials/2d/using_tilemaps.rst): tham khảo nguyên tắc mốc sắp xếp theo chiều sâu; game vẫn dùng Phaser.

Không lấy asset của các game tham khảo.

## Kiểm thử

- Build TypeScript/shared/Vite thành công.
- 23 kiểm thử gồm: đỉnh/chân và tọa độ texture liên tục, đi xuống từ+64đến−64 rồi ngược lên, không teleport tọa độ, giới hạn bước cao độ, chiều dài di chuyển trên dốc, collision vật thể, nước ở hợp lưu, cầu, các landmark và ba hầm.
- Chrome/WASD thật: đi Nam từy2895đến≈3207, cao độ+64→−64; đi Bắc về≈2889, cao độ+64. Đủ4frame hoạt ảnh đi dọc. Tọa độ cuối khớp PostgreSQL, không lỗi runtime.
- Hai atlas mới có alpha trong suốt; texture được cắt/chuẩn hóa lúc tải. Có ảnh gameplay và trang so sánh trước/sau tại vị trí người chơi khoanh.

Đo Chrome với phản hồi mạng trễ thêm 160 ms: p95 khung hình ≈16,67 ms, 0 khung hình giật lùi, 3959 scene node; đây là số đo trên máy kiểm thử.

## Cấu hình

`geology.surface.heightPerLevel=64`, `maxStepHeight=18` (đơn vị world pixel). Chiều sâu mặt vách hình ảnh riêng theo từng thềm. Hình học trong `scripts/detail-binh-minh-r009.mjs`; vật thể trong `scripts/finish-binh-minh-r009.mjs`; kiểm tra/sửa giao nước trong `scripts/fix-binh-minh-water-mesh-r009.mjs`. Thay hình học phải author lại, compile và restart server để server/client dùng cùng dữ liệu.

Nguồn map vẫn là TMJ; geology/runtime JSON là dữ liệu map. Layout lưu nhân vật vẫn version6, giữ tiến trình hiện tại.

## Checklist và giới hạn

- [x] Dựng lại khối thay vì chỉ thay hình cầu thang.
- [x] Nối hình học và vật liệu các đoạn vách.
- [x] Đồng bộ Vùng2 với nền chung và sửa chỗ nước/vách giao nhau.
- [x] Cao độ và dốc dùng chung server/client; hoạt ảnh đi Bắc/Nam.
- [x] Bổ sung cụm cảnh có chức năng và collision tương ứng.
- [x] Cập nhật Markdown, HTML, ảnh map thật và kiểm thử.
- [ ] Nghiệm thu mỹ thuật toàn bộ chi tiết của ảnh concept: chưa đánh dấu hoàn tất.

Đây là mô hình cao độ mặt đất trên bản đồ2.5D; chưa hỗ trợ hai tầng có thể đứng chồng tại cùng XY, nhảy/vật lý3D, hoặc bơi/lặn. Bộ bản đồ vẫn có các khu cần tiếp tục tinh chỉnh mỹ thuật. Giữ ảnh concept làm chuẩn, không tuyên bố trùng từng pixel.
