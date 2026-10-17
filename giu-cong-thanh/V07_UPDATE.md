# v0.7 — Động tác thi triển của boss

Sáu sprite sheet thi triển mới, mỗi sheet 8 tư thế: 4 nạp lực và 4 tung đòn/thu thế. Rồng ngẩng đầu, bung cánh và phun; undead giơ trượng rồi chỉ lệnh; rắn dựng thân, mở mang và phóng đầu; sói lấy đà, tru rồi vồ; harpy giơ cánh, vung cánh và móng; golem nâng hai tay rồi nện đất.

Boss dùng chung bộ động tác theo dòng, ghép với 30 hiệu ứng kỹ năng hiện có. Các chiêu nghi thức/buff như tru gọi bầy, cuồng săn và giáp thạch chọn tư thế giơ lực thay vì động tác nện/vồ.

Server gửi thời gian nạp 1,2 giây và tư thế tung chiêu 0,65 giây. Client chọn khung từ thời gian này, giữ hướng thi triển, dừng hoạt ảnh đi/đánh thường trong lúc thi triển, rồi trả về hoạt ảnh bình thường. Choáng và chết chặn tư thế. Không dùng lắc/phóng to sprite idle để thay cho hình vẽ động tác.

Ảnh gốc lưu trong `public/assets/v7`, prompt trong `PROMPTS.md`. Không chỉnh pixel bằng script; script Pillow chỉ đo alpha và điểm chân. Texture chia ô ngay trong Phaser, căn điểm chân theo khung. Đăng ký lại catalog: `node scripts/register-boss-casts.mjs`.

Sân thử `/boss-lab.html` dùng đúng bộ sprite và hàm chọn khung của trận thật. Có nút “Xem thế nạp chiêu” và “Xem thế tung chiêu”.

Kiểm chứng: 66 kiểm thử đạt. Mô phỏng cả 12 hero đều qua mốc đầu. Bộ asset gồm 6 PNG trong suốt, 48 tư thế, có kiểm tra kích thước và điểm chân từng khung.
