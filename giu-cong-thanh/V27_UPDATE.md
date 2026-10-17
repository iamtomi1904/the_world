# V27 — Hiển thị VFX và động tác Phong Kiếm Khách

- Sửa lớp hiển thị VFX: depth 2700/2800 cũ bị các vật thể trên map mở rộng che mất. Ba class dùng lớp hiệu ứng 20000, mini map ở 30000.
- Hắc Kỵ Sĩ: vệt chém có dải tím đặc, mép sáng trắng/tím và tia xanh, phân biệt đánh thường/Q.
- Bất Khuất: đâm và xung phong có luồng năng lượng đỏ/vàng, thân đâm sáng, đầu mũi đâm rõ. Giữ giới hạn kích thước VFX.
- Q Phong Kiếm Khách: xoay kiếm khi lướt thẳng, nhân vật đổi hướng quay và nghiêng người, hai vòng chém cuốn quanh nhân vật. Thời gian động tác 0,38 giây; tổng quãng đường 210 và sát thương giữ nguyên.
- R: niệm gió 0,45 giây, nhảy 0,5 giây có độ cao, đáp đánh 0,3 giây; chọn animation cast/leap/attack theo từng pha. Tám lốc nhỏ liên tục tỏa từ tâm ra rìa vùng tròn, vòng biên giữ đúng bán kính gameplay. Lốc nhỏ là VFX của vùng sát thương sẵn có, không tạo thêm lần sát thương.
- Cập nhật mô tả Q/R. Cấu hình động tác dùng chung public/wind-config.js, hình học hiệu ứng public/combat-art.js.

Không chạy kiểm thử, QA trình duyệt hoặc đo hiệu năng theo yêu cầu trước của người dùng. Chưa xác nhận trực tiếp gameplay sau thay đổi.
