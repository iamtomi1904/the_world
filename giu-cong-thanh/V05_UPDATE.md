> Cập nhật: cơ chế bình tiêu thụ dưới đây đã được thay bằng di vật tăng thuộc tính suốt chiến dịch ở v0.6. Xem V06_UPDATE.md.

# Nâng cấp v0.5

- Sáu dòng quái mới: rồng, undead, rắn, sói, harpy và quái đá. Mỗi dòng có sprite quái thường và boss riêng, 4 khung idle / đi / đánh. Rồng và harpy bay.
- 10 boss chiến dịch dùng 30 kỹ năng: hình quạt, đường thẳng, vòng tròn, vành khuyên, nhiều vùng, thiên thạch, gọi viện binh, hồi máu, lá chắn và cuồng nộ. Mốc 1–2 / 3–4 / 5–6 / 7–8 / 9–10 mở 1 / 2 / 3 / 4 / 5 kỹ năng ở đợt 3. Hai đợt đầu ít hơn một, tối thiểu một. Vùng báo trước 1,2 giây khớp vùng sát thương; boss dưới 40% máu dùng chiêu nhanh hơn.
- Mỗi map có 6 trại rừng với lối mòn nối đường chính. Mạng đường có giao lộ, đường vòng, 3–7 cửa tiến quân theo mốc. Giữ các lâu đài và cảnh vật hiện có.
- Quái canh trại rơi một bình; động vật có 25% cơ hội. Đi gần để nhặt. Người hạ quái có quyền nhặt riêng 8 giây đầu, sau đó đồng đội có thể nhặt. Bình trên đất tồn tại 150 giây, mỗi loại tối đa 9 bình trong túi.
- Phím 1: +25% Công, 10 giây. Phím 2: hồi 8% máu tối đa mỗi giây, 5 giây. Phím 3: hồi 9% năng lượng tối đa mỗi giây, 5 giây. Phím 4: +8 giáp, 10 giây. Phím 5: +35% tốc đánh, 10 giây. Dùng cùng loại làm mới thời gian, không cộng dồn. Không dùng bình hồi khi đầy tài nguyên.
- Túi đồ theo suốt chiến dịch và qua mốc; chưa lưu túi đồ khi thoát chiến dịch. XP/lịch sử vẫn dùng database hiện có.

Chơi: http://localhost:3000/defense.html

Boss: http://localhost:3000/boss-gallery.html

Thử hiệu ứng: http://localhost:3000/boss-lab.html — mô phỏng hình dạng hiệu ứng; hành vi gọi viện binh và buff thực thi trong trận.

Kiểm chứng: 60 kiểm thử đạt; smoke HTTP/WebSocket kiểm tra solo, co-op và toàn bộ URL asset đạt; mô phỏng 12 hero đều qua mốc đầu. Chưa kiểm chứng cân bằng bằng chơi tay toàn bộ 10 mốc.

Asset do ImageGen tạo: public/assets/v5. Prompt gốc: public/assets/v5/PROMPTS.md. Catalog được đăng ký bằng scripts/register-v5.mjs, không sửa dữ liệu người chơi.

