# Map ghép ô vuông

- Nền cỏ, đường chính, sông/suối và các vùng môi trường dùng ô 64×64. Vùng lớn được tạo bởi nhiều ô, không kéo giãn một ảnh theo bán kính vùng.
- Các hình atlas môi trường chỉ dùng làm chi tiết trong từng ô 64×64, kể cả gò/núi/trũng; không còn ảnh relief phóng theo kích thước vùng. Rìa vùng là các mép ô, không clip ellipse.
- `public/terrain-grid.js` chia sẻ cách xác định ô giữa vẽ nền và hiệu ứng/collision môi trường. Nước sâu/cạn cũng tính trên tâm ô; cầu giữ cơ chế tương tác sẵn có.
- Bỏ việc xóa cây khỏi toàn bộ lãnh địa và sinh cảnh. Giữ cây cũ ở vị trí phù hợp; bổ sung cây, bụi, dương xỉ, đá theo từng ô, rừng dày hơn vùng thường. Chừa thành, đường, nước và trung tâm trại 110 đơn vị.
- Vật thể giữ kích thước độc lập với diện tích vùng; cây lớn/đá có va chạm như trước. Asset tái sử dụng trong game.
- Chưa chạy kiểm thử hoặc kiểm tra trình duyệt theo yêu cầu dừng kiểm tra trước đó.

File: `public/terrain-grid.js`, `public/terrain.js`, `public/environment-art.js`, `public/habitat-props.js`, `public/world-biomes.js`, `public/landscape-layout.js`, `public/landscape-art.js`.
