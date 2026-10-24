# 268 — Bình Minh: sửa cây, thảm thực vật và mở rộng vùng chơi

24/10/2026. Triển khai trực tiếp trong MMORPG, dùng chung trên web và client Windows. Không đổi chế độ thủ thành.

## Vấn đề đã xác định

Renderer cũ dùng một tỷ lệ thân/tán cho bốn loài cây, sau đó xoay tán quanh đáy ảnh. Hình có thể chồng lên nhau nhưng các cành và lá không có điểm tiếp xúc cố định. Thảm cỏ dùng những mẫu nhỏ lặp theo từng ô, gây vân nhiễu; cây và hoa được rải tương đối đều, thiếu môi trường sống rõ ràng.

## Checklist đã thực hiện

- [x] Đặt tỷ lệ thân và điểm nối riêng cho sồi, bạch dương, liễu và cây ăn quả.
- [x] Tìm điểm ảnh đặc trong thân/tán để căn điểm nối; xử lý cả trường hợp lật ngang.
- [x] Cho tán lay quanh điểm nối với cành, giảm biên độ để không tách hình khi có gió.
- [x] Làm mờ cả thân và tán khi cây che nhân vật, tránh lộ riêng bộ cành trơ.
- [x] Vẽ atlas mới gồm cỏ thấp, dương xỉ, bụi lá, lau sậy, cúc nhỏ và hoa vàng; dùng vùng cắt theo khoảng trống thật của ảnh.
- [x] Gom cây và thực vật thành cụm: liễu ven nước, cây ăn quả thành vườn, sồi/bạch dương trong rừng; giữ khoảng trống giữa các cụm.
- [x] Thay nền cỏ bằng vật liệu liên tục, không lặp mẫu nhỏ theo từng ô; giữ nền đường, nước và cầu là dữ liệu riêng.
- [x] Mở rộng từ **3.000 × 2.250** lên **6.000 × 4.500 pixel**, tức **gấp bốn diện tích**. Không phóng to nhà/cây/nhân vật, không giảm zoom chơi để giả map rộng.
- [x] Bổ sung các đường vòng, bãi cỏ, vườn cây và đoạn lội suối phía nam; thay viền nước hình chữ nhật bằng rìa rừng.
- [x] Đồng bộ collision, minimap, lưu vị trí và kiểm thử đường đi; không thay tọa độ gốc của các điểm đã có.

## Quy mô và dữ liệu

- Lưới Tiled: 400 × 300 ô, mỗi ô 15 world pixel. Runtime vẫn giữ scale3 và cùng gốc tọa độ.
- Có 583 cây và 3.585 instance thực vật thấp, tổ chức theo cụm. Tổng 4.199 record vật thể, gồm collider bổ sung của lan can cầu.
- Giữ nguyên spawn `(1050,1215)` world pixel, ba cửa hầm, nhà và props đã có. Không dịch/chỉnh level, XP hoặc dữ liệu tài khoản.
- Bản đồ vừa mở rộng vẫn thuộc Bình Minh cấp1–10. Không thêm tuyến truyện, NPC, boss hoặc nhiệm vụ mới trong đợt mỹ thuật này.
- Nước sâu chặn; nước cạn giảm tốc như trước. Vùng rừng đóng ở mép map dùng ID6, không phải nước. Đoạn suối cạn mới có đường khô vòng qua cầu chính.

`scripts/upgrade-binh-minh-ecology.mjs` là bước nâng cấp nguồn Tiled một lần, có chốt revision để không nhân đôi cây khi chạy lại. Bản trước được giữ ở `public/mmorpg/maps/history/binh-minh-v2.tmj`. Lệnh build bình thường không tạo lại ngẫu nhiên cảnh hoặc ghi đè bố trí đã chỉnh.

Vùng mở rộng dùng thêm các mốc mô tả địa hình: Bãi Cỏ Nam, Bờ Suối Hạ, Vườn Cây Phía Nam, Lối Rừng Đông, Bìa Rừng Xa và Lối Vòng Bắc. Đây là nhãn bố trí map, chưa thay hệ địa danh/lore chính thức.

## Asset và cách nối cây

Hai PNG mới, sinh bằng image_gen built-in theo phong cách cảnh r009:

- `public/mmorpg/assets/vegetation-r002.png`.
- `public/mmorpg/assets/meadow-ground-r002.png`.

Prompt đầy đủ và provenance: `public/mmorpg/assets/ecology-r002.provenance.json`. Vùng cắt atlas: `vegetation-r002.frames.json`. Ảnh nguồn được giữ nguyên; đây chưa phải bộ sprite đã dọn pixel thủ công từng frame hoặc được chứng nhận liền mép định lượng.

Thân/tán cây tái sử dụng asset đã có. `src/mmorpg/tree-rig.ts` định nghĩa tỷ lệ/điểm nối mong muốn; bước nạp tìm pixel có alpha255 gần đó. Crown origin được đặt đúng vào pixel tương ứng và trùng world coordinate với socket trên thân. Vì quay quanh socket, tán không rời cành khi lay. Collider vẫn bám chân cây, không bám tán.

## Kiểm thử và ảnh chạy thật

- TypeScript/Vite build thành công.
- 10 test map/shared logic đạt, gồm BFS kiểm từng đoạn đường tới tất cả mốc/cửa hầm, vùng mở rộng, tọa độ cũ, nước sâu/cạn, cây/nhà/lan can và vòng vào–ra hầm.
- QA riêng cho mỹ thuật: 6 kiểm tra đạt. Bốn loài có khoảng cách hai socket bằng0 và alpha thân/tán đều255 tại điểm nối; kích thước map đúng, đủ sáu texture thực vật và camera chơi vẫn zoom1.
- QA PostgreSQL: 15 kiểm tra đạt; vị trí và nhân vật vẫn lưu/khôi phục đúng, không pageerror. Tài khoản thử được xóa sau kiểm tra.
- Kết quả map/client cuối nằm trong `public/mmorpg/assets/modular-qa.json` và `pc-v02-qa.json`; QA mỹ thuật tại `ecology-qa.json`.

Ảnh thực tế: `ecology-camp-r003.png`, `ecology-river-r003.png`, `ecology-overview-r003.png`. Ảnh toàn vùng dùng zoom kiểm tra riêng; zoom gameplay giữ1.

## Giới hạn còn lại

Ba hầm vẫn dùng bản dựng cũ; chưa bổ sung nội dung chiến đấu/nhiệm vụ cho phần đất mới. Bờ sông và đường còn theo ô, có thể tiếp tục chỉnh chuyển tiếp mỹ thuật. Việc kiểm tra này không chứng minh FPS trên mọi cấu hình hoặc tải MMO nhiều người.

Client Windows tải cùng asset/game từ server, nên **không cần tải lại EXE/ZIP** cho cập nhật này. Trong client bấm **F8 → Kết nối / thử lại**; trên web tải lại trang.
