# Thiết kế cửa sổ T — đồng bộ giao diện thủ thành

Đây là bản thiết kế hình ảnh, chưa triển khai vào game. Dựa trên ảnh chụp thật của /defense.html và ba asset kỹ năng shield-bash, bulwark, rally hiện có.

- Giữ góc nhìn, lâu đài, bản đồ, quái, nhân vật và bản đồ nhỏ của game. Bỏ cột thông tin cố định bên phải để chiến trường có thêm diện tích.
- Màu nền #101a18 / #1b2822; chữ sáng và vàng nhạt #d6bd7e; viền mảnh olive, font sans-serif như giao diện hiện tại. Không dùng khung fantasy chạm trổ hay font serif.
- Mặc định đóng cửa sổ. Phím T hoặc nút mũ giáp góc dưới bên phải bật/tắt. Nút × đóng; thanh tiêu đề dùng để kéo cửa sổ. Mở cửa sổ không tạm dừng trận online.
- Cửa sổ nổi ở bên phải, dưới minimap, không chiếm toàn chiều cao. Tab bằng icon: nhân vật / kỹ năng / quân đội. Kỹ năng hiện icon, phím tắt và chấm bậc; thông tin, điều kiện học, giá nâng cấp nằm trong tooltip khi rê chuột.
- Thanh Q/E/R ở đáy chiến trường, có lớp hồi chiêu và số giây. Thanh máu và năng lượng gọn ngay phía trên.
- Tooltip nằm cạnh icon, tự đổi phía khi sát mép để không bị cắt và không che icon đang rê. Các thông số trong ảnh chỉ minh họa; triển khai phải lấy số thực từ server.

Ảnh tham chiếu: defense-ui-reference.png. Hai trạng thái thiết kế: defense-ui-v2-closed.png và defense-ui-v2-open.png. Bản character-window-mockup.png trước đó là phương án cũ, không dùng làm chuẩn style.
