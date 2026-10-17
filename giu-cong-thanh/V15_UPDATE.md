# Cập nhật mỹ thuật chiến đấu và cảnh quan

- Đánh thường Thánh Kỵ Sĩ tách khỏi Q: dạng thường vệt kiếm bạc ngắn; thiên mã đâm kiếm như thương, không dùng ảnh cánh sáng Q.
- Q dùng ảnh độc lập q-slash-v2.png, không còn cắt từng ô atlas. Ảnh có khoảng trống bốn phía; hoạt ảnh bằng scale/alpha và hạt sáng theo hướng chém. Giữ công thức và hitbox.
- E phát vòng sáng lan từ nguồn tới đúng bán kính220/280; giữ vòng nhỏ dưới chân đồng đội đang hưởng aura. Hết aura thì dọn vùng sáng.
- Địa hình dùng biome-patches-v1.png và relief-v1.png thay mảng màu đơn. Nước sâu là sông lớn, suối là nước cạn; bờ đá, lau sậy, gợn nước và cầu.
- Sông/suối dùng đường gấp khúc nhiều đoạn và bề rộng dữ liệu. Server chặn sông sâu ngoài cầu; suối làm chậm nhẹ; cầu trên đường chính/đường rừng được miễn hiệu ứng nước.
- Thêm núi đá chặn đi bộ, gò cao và vùng trũng có hình vách, dốc, lòng chảo. Gò cao/trũng hiện có vai trò địa hình mỹ thuật, chưa thêm lợi thế tầm đánh/độ cao chiến đấu.
- Lãnh địa rộng bán kính600–720 theo mốc, rìa tự nhiên và nền rừng/tổ gió/đất cháy/đất chết tùy thủ lĩnh. Tăng phạm vi truy đuổi theo lãnh địa.
- File mới: public/environment-art.js, public/landscape-layout.js, public/landscape-art.js. Chỉnh holy-vfx, effects, terrain, shadow-art, world-biomes, simulation, forest-leaders, paladin-actions và gallery.
- Asset mới: public/assets/paladin/q-slash-v2.png; public/assets/environment/biome-patches-v1.png; public/assets/environment/relief-v1.png.
- Dùng built-in ImageGen. Prompt: holy slash hoàn chỉnh ở central60% với20% alpha padding; atlas4×2 các nền sinh thái có mép hữu cơ; atlas3×1 núi/plateau có dốc/lòng trũng. Giữ nguồn ảnh cũ.
- Không chạy test hoặc kiểm tra trình duyệt theo yêu cầu dừng kiểm tra của người dùng. Cần tải lại game để nạp ảnh và module mới.
