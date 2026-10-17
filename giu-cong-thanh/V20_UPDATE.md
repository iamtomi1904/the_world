# Sân thành nối ô

- Tạo sân đá liền khối theo lưới 64×64, bao chân thành và các tháp phụ; viền sân rõ ràng, trục dẫn vào cổng rộng và thẳng.
- Bỏ nền sân ellipse cũ lệch lưới. Sân được vẽ sau môi trường/nước để không bị nền khác phủ đè.
- Khu sân không chịu địa hình môi trường và không sinh cây/đá chắn đường. Giữ footprint va chạm nhà và cơ chế tương tác shop hiện có.
- Căn hai đoạn tường trước theo mô-đun 128, chừa cửa giữa; đưa vật trang trí sang hai bên phía sau để cổng và sân trước thoáng hơn.
- Thêm `public/castle-court.js`; chỉnh terrain, fortress, world-biomes, landscape-layout và habitat-props.
- Chưa chạy kiểm thử hoặc kiểm tra trình duyệt theo yêu cầu dừng kiểm tra trước đó.
