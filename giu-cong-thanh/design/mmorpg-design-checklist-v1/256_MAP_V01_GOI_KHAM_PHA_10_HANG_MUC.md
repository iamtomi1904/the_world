# Map 1 — Đợt 10 hạng mục khám phá trong cảnh r026

24/10/2026 · [Mở cảnh hiện tại](/design-preview/v01-bridge-in-scene-r026/index.html).

## Phạm vi và quyết định

Hoàn thiện một nhóm tương tác di chuyển và khám phá trong cùng cảnh, không mở thêm revision hoặc tab. Mỹ thuật r009, nền r020, cầu hai lớp, kích thước nhân vật, tốc độ 58px/s và bán kính chân 3px giữ nguyên. Không thay gameplay thủ thành, chỉ số nhân vật, kinh tế hoặc database.

## Checklist đợt này

| # | Hạng mục | Thiết kế và phần đã hoạt động |
|---|---|---|
| 1 | Nhấp đường để đi | Chuyển tọa độ chuột/chạm theo kích thước canvas về hệ 800×500; actor di chuyển thật trong cảnh thử. |
| 2 | Tìm đường tránh vật cản | A* trên các điểm cách 6px, cạnh tối đa 18px. Mỗi đoạn kiểm tra lại bằng chính hàm va chạm hiện có, sau đó làm gọn tuyến theo đường nhìn hợp lệ. Không cắt qua nước hay chân trụ. |
| 3 | Dấu đích và tuyến hành trình | Vẽ đường đứt cùng ô đích; xóa khi tới nơi, dừng hoặc đổi chế độ cầu. Báo rõ điểm không thể tới. |
| 4 | Quyền điều khiển và dừng | WASD/mũi tên giành lại điều khiển, Space/nút Dừng hủy tuyến. Giữ tốc độ cũ; mở cửa sổ thông tin dừng actor. |
| 5 | Tên tiểu khu | Hiện Đường làng · Bờ Tây / Cầu đá Bình Minh / Đường ven sông · Bờ Đông theo vị trí. Đây là nhãn bố cục bản thử, không thêm địa danh canon mới. |
| 6 | Điểm khám phá gần | Ba điểm xem thiết kế ở đầu Tây, giữa cầu, bờ Đông. Chỉ trong 28px mới bật nút và phím F; không thể mở từ xa. |
| 7 | Cửa sổ thông tin | Tên, nội dung địa điểm và nút đóng. Esc hoặc ~ đóng; trả focus về cảnh. Nội dung giải thích thiết kế, không giả lập quest, NPC hay phần thưởng. |
| 8 | Bản đồ nhỏ | Sơ đồ đường, sông, ba điểm khám phá và dấu nhân vật cập nhật theo vị trí thật. Không phải world map hoặc bản đồ toàn Map 1. |
| 9 | Thời tiết luân phiên | Tùy chọn nắng → mây → mưa → mây; chu kỳ thử 30/90/180 giây, mặc định tắt. Dùng delta time; chuyển độ tối/độ mưa có nội suy. Dừng tab thì không cộng thời gian mất focus. |
| 10 | Điều chỉnh gió | Thanh 0–3 tác động độ trôi ngang của lá, giữ rung nhỏ quanh quỹ đạo. Lá tối đa 12, hết tuổi được xóa. Chưa làm rung tán vì cây hiện còn trong ảnh nền. |

- [x] Cả 10 hạng mục được nối vào trang r026.
- [x] Không tạo trang cảnh mới hoặc thay nguồn raster.
- [x] HTML, tài liệu Markdown và liên kết thư viện cùng cập nhật.
- [ ] Nghiệm thu mỹ thuật/animation của bản đồ 2.5D thực tế.
- [ ] Chuyển tìm đường sang navmesh, cập nhật vật cản động và authoritative state khi triển khai game.

## Quy tắc tương tác

Điểm đến phải nằm trong đường hợp lệ có tính bán kính chân. Không tự đặt người chơi sang bờ bên kia nếu mất cầu. Đi tay được ưu tiên hơn đi tự động. Khi đến đích có phản hồi; không dùng teleport để thay việc đi. Điểm khám phá chỉ hiển thị nội dung thiết kế đang có, không phát sinh lore hoặc nhiệm vụ mới.

Các giá trị 6/18/28px và chu kỳ thời tiết là thông số fixture thiết kế, không chốt thông số gameplay MMORPG. Tương tác này chạy local trên browser; chưa có server xác nhận vị trí.

## Kiểm chứng

[Biên bản tự động](/design-preview/v01-bridge-in-scene-r026/exploration-qa.json) · [Ảnh kiểm tra](/design-preview/v01-bridge-in-scene-r026/exploration-review.png).

Kiểm tra tuyến Tây→Đông có đường đi và mọi đoạn đều hợp lệ; nước bị từ chối; tắt cầu mất tuyến nối; actor thật sự di chuyển theo tuyến; Space dừng; F mở và Esc đóng; tương tác đúng khoảng cách; chu kỳ đổi thời tiết; trang không tràn ngang ở 390px; không pageerror. Đã xem ảnh chụp toàn trang để kiểm tra hình và bố cục.

## Hạn chế và bước tiếp theo

Cảnh vẫn là ảnh nền + sprite với va chạm màn hình. Minimap chỉ mô tả các polygon thử, không mô tả chi tiết thế giới. Chưa tách mái, tán cây, chưa có lá bám cành hoặc vật lý gió. Tuyến tìm đường chạy đồng bộ, cần chuyển worker/cache khi mở rộng map. Không có nhiệm vụ hay tiến độ lưu Postgres trong bản thử này.

Đợt sau ưu tiên một cụm hoàn chỉnh quanh nhà: chuẩn bị lớp mái/nền khuất, lối cửa, footprint và tương tác đúng tỉ lệ hình gốc. Tách asset phải bảo toàn chất lượng đã chốt.

Tổng checklist lớn vẫn 525 = 128 hoàn thành / 14 một phần / 383 chưa làm. Mười ô trên là các hạng mục bản thử của đợt này, không cộng khống vào nghiệm thu Map 1 hoặc G1–G5.
