# Giữ Cổng Thành — chiến dịch v0.3

Bản mới: map 1920 × 1280, camera theo hero và minimap, tòa thành riêng được tạo bằng imagegen, 189 vật thể cảnh trong catalog, 11 hiệu ứng animated chọn lọc. Hero chia 7 class với 21 kỹ năng Q/E/R, cây học/nâng bậc bằng vàng, năng lượng, trạng thái và tinh thông đòn thường. Xem [HERO_SYSTEM.md](HERO_SYSTEM.md) để đọc đầy đủ công thức, thông số từng bậc, điều kiện học và giới hạn bản thử.

## Chạy

```powershell
cd D:\the_world\giu-cong-thanh
npm.cmd install
npm.cmd run dev
```

Mở http://localhost:3000 và Ctrl+F5 nếu đang mở bản cũ. Chọn một trong 12 hero rồi bấm **Chơi chiến dịch · 1 người**. Nút tạo phòng co-op cũng cho phép bắt đầu một mình; người khác chỉ có thể vào trước khi bắt đầu. Cùng Wi-Fi có thể dùng http://IP-LAN:3000 nếu firewall cho phép.

## Điều khiển

- WASD / phím mũi tên: di chuyển, có va chạm với vật cản và nhà.
- J / giữ chuột trái trên chiến trường: đánh. Cận chiến đánh các quái trong tầm; đánh xa nhắm quái gần nhất.
- Space / K: đỡ, giảm sát thương nhưng đi chậm.
- Q/E/R: ba kỹ năng theo class. Q có sẵn; E cần cấp 2 và 120 vàng, R cần cấp 4 và 240 vàng. Nâng tối đa 3 bậc; xem mô tả trong cửa hàng Kỹ năng. Không còn kỹ năng Q hồi máu chung cho mọi hero.
- Nút cảm ứng tương ứng trên điện thoại. Nút Tầm đánh bật/tắt vòng phạm vi.

## Nội dung đã làm

- 12 hero dùng sprite trong `D:\the_world\heroes`, có chỉ số máu, công, giáp, tốc độ, tầm đánh, tốc đánh, cấp/XP. Pháp sư có sát thương lan.
- 9 loài quái animated dùng `D:\the_world\monster`: ba slime, skeleton, orc warrior/shaman/berserk, cây độc Plent, Fire Spirit. Không dùng hero/lính làm quái. Mỗi nhóm mở theo mốc; có quái tinh anh và boss cuối.
- 10 map xác định sẵn với bố cục, đường tiến quân, điểm nhà, cây/đá/tàn tích/tinh thể khác nhau, dùng `D:\the_world\map`. Đường đi có kiểm tra va chạm. Map càng cao tăng số lượng, máu, công, tốc độ và số hướng quái.
- Mỗi mốc ba đợt. Thắng → chủ phòng bấm Sang mốc tiếp theo. Mốc 10 đợt 3 có boss; thắng là kết thúc chiến dịch.
- Quái bị diệt cấp vàng/XP. Lính hạ quái, chủ lính nhận thưởng; đồng đội nhận một phần thưởng hỗ trợ. Mua quân, nâng công/máu và sửa nhà đều xử lý ở server.
- 4 loại lính từ bộ Characters gốc: bộ binh 60 vàng, xạ thủ 100, lính khiên 120, cận vệ 180. AI tự bảo vệ nhà; tối đa 12 lính/phòng.
- Bắt đầu 120 vàng/người. Vàng, nâng cấp và lính sống sót giữ qua các mốc trong cùng chiến dịch. Mốc mới hồi máu lính và hero, nhà hồi một phần.
- Hero ngã xuống hồi sinh sau 8 giây. Nhà về 0 máu thì thua.
- Solo hoặc co-op 1–4 người, mô phỏng server 20 lần/giây, client nội suy và hiệu ứng đòn đánh.

## Database

Node.js 24+ sử dụng SQLite tích hợp tại `data/game.sqlite`:

- `guest_progress`: XP tích lũy và hero đã chọn, nhận dạng qua token ngẫu nhiên lưu ở trình duyệt. XP tự lưu mỗi 15 giây, khi vượt mốc/thua và khi ngắt kết nối bình thường. Đây là hồ sơ khách, chưa có tài khoản/password/Supabase.
- `matches`: kết quả mỗi mốc, mốc hiện tại, số đợt, tổng quái đã hạ và số người.
- `match_players`: hero, cấp, vàng kiếm được, số hạ gục theo bản ghi kết quả.

Đổi trình duyệt hoặc xóa dữ liệu web sẽ mất liên kết hồ sơ khách. Tải lại trang/mất kết nối không phục hồi chiến dịch đang chơi; chiến dịch mới bắt đầu mốc 1, 120 vàng. Chỉ XP/cấp được giữ. Vàng không chuyển sang chiến dịch mới. Server hiện chạy tại máy/LAN, chưa triển khai Internet.

## Kiểm tra

```powershell
node --test simulation.test.mjs abilities.test.mjs
node smoke.mjs
node scripts/check-balance.mjs
```

Lệnh smoke cần server đang chạy. Kiểm tra mô phỏng bao gồm 10 đường đi, tất cả spritesheet, nhận thưởng đúng một lần, mua lính/giới hạn tiền/quân, va chạm, hồi sinh, chuyển đủ 10 mốc, boss và kết thúc thua. Kiểm tra chuyển đủ mốc dùng hero tăng sức mạnh để xác minh luồng, không đại diện cho cân bằng thực tế. Script balance dùng bot điều khiển bình thường để kiểm tra mốc 1 với 12 hero.

## Chuẩn bị lại asset

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/prepare-assets.ps1
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/prepare-v3.ps1
```

Script chỉ đọc thư mục gốc, chép PNG cần dùng vào `public/assets/v2` và `v3`, tạo portrait từ frame idle, tự đo origin và số frame, tạo catalog. Script v3 chọn thêm cây/rừng và các frame hiệu ứng từ thư mục effect, ghép thành spritesheet 128px. Không thay đổi asset gốc. Tòa thành tùy chỉnh lưu ở `public/assets/v3/castle.png`, prompt trong `CASTLE_PROMPT.md` cùng thư mục. Các bộ hero/quái là sprite ngang được dùng trong chiến trường top-down; sprite lật trái/phải, chưa có đủ bốn hướng.

## Cần làm tiếp

- Cân bằng toàn chiến dịch bằng người chơi thật; điều chỉnh vị trí lính và đường tìm mục tiêu khi chiến đấu ngoài đường chính.
- Âm thanh, nhắm vùng phép bằng chuột, biến thể kỹ năng riêng cho từng hero trong cùng class, lưu/khôi phục chiến dịch khi mất mạng.
- Tài khoản thật, Supabase/PostgreSQL, kiểm thử tải và triển khai HTTPS/WSS trước phát hành rộng.
- Đóng gói Capacitor Android/iOS và kiểm thử thiết bị thật.

Asset Craftpix: giữ giấy phép trong thư mục nguồn, xem https://craftpix.net/file-licenses/ trước phát hành.
