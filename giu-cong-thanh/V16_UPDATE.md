# V16 — Môi trường và hướng chém Q

- Vẽ lại atlas môi trường theo phong cách pixel đơn giản, bảng màu dịu, giảm chi tiết và mật độ hiệu ứng. Giữ nguyên địa hình và cơ chế môi trường.
- Asset mới: `public/assets/environment/biome-patches-v2.png` (4×2), `relief-v2.png` (3×1). Giữ lại asset cũ.
- Q Chiến Binh gửi góc tung chiêu từ server và xoay vệt chém theo góc đó. Q Thánh Kỵ Sĩ dùng chung hướng cho vùng đánh và hình ảnh. Hiệu chỉnh hướng gốc của hai ảnh chém.
- Khi chưa ngắm bằng chuột, hướng ngắm theo di chuyển hoặc hướng nhân vật lúc đứng yên, thay vì luôn sang phải. Khi đã ngắm bằng chuột, giữ cơ chế ngắm hiện tại.
- Không thay đổi sát thương, tốc độ đánh hoặc phạm vi Q.
- Không chạy kiểm thử hoặc kiểm tra trình duyệt theo yêu cầu người dùng; chưa xác nhận trực quan kết quả trong trận.
