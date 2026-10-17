# Nhân vật cường hóa và sửa Hộ vệ

## Chiến binh E — Cuồng Huyết

- Ba sprite sheet mới: warrior-1-fury.png (rìu), warrior-2-fury.png (kiếm), warrior-3-fury.png (thương), trong public/assets/empowered.
- Mỗi sheet có 6 cột × 3 hàng: đứng, chạy, đánh. Vũ khí được đổi màu và vẽ ánh sáng trực tiếp trong ảnh nhân vật bằng imagegen; file PROMPTS.md lưu prompt.
- Game chuyển sang hình cường hóa khi buff hút máu của E đang hiệu lực và nhân vật còn sống. Hết E hoặc chết sẽ quay về hình thường. Chuyển hình giữ nguyên đối tượng và vị trí nhân vật.
- Đứng/chạy/đánh dùng đúng dải khung của từng động tác; không tô đỏ toàn bộ thân nhân vật.
- Trang /actor-lab.html cho chọn cả ba hero, thử E trong 7 giây, đổi động tác và quay trái.

## Hộ vệ

- Khung gốc dùng điểm đặt chân lệch trái, và khung đánh có điểm đặt chân khác khung đứng. Khi lật hình hoặc đổi động tác, hình bị nhảy ngang.
- Đã xuất lại bộ khung đứng/chạy/đánh/bị thương/chết cho ba Hộ vệ trong public/assets/guardian, khung 160×160 với điểm đặt chân chung (80,144).
- Khung chạy giữ độ sải chân; khung đánh được căn chân riêng. Bộ ảnh gốc được giữ nguyên.
- Bộ điều khiển hoạt ảnh giữ động tác đánh đến khung cuối, thay vì cắt ngay khi cờ anim ngắn trên máy chủ kết thúc. Nhịp phát được điều chỉnh theo tốc đánh.
- Choáng ngắt động tác; sau đó nhân vật tiếp tục đứng/chạy bình thường. Không cần vẽ lại bộ đánh gốc để sửa các lỗi này.

## Tạo lại dữ liệu

scripts/prepare-guardian.ps1 tạo các khung Hộ vệ từ nguồn gốc. scripts/register-empowered.mjs đăng ký các ảnh AI đã lưu. Cả hai được gọi cuối quy trình prepare-v4.ps1.

Kiểm tra: 53 bài tự động đạt, gồm điểm đặt chân, kích thước sheet, chuyển hình E và thời gian giữ động tác đánh.
