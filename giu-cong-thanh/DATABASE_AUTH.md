# PostgreSQL và tài khoản Ẩn Thành

## Lựa chọn và định hướng MMORPG
PostgreSQL là database chính cho bản online. Dùng local PostgreSQL khi phát triển hoặc Neon cho bản thử nghiệm online; server Node.js/WebSocket chạy riêng. Sau này lưu nhân vật, nhiệm vụ, vật phẩm và giao dịch bằng khóa account_id/character_id, migration và transaction; không ghi tọa độ mỗi khung hình xuống database. Tiến trình trận hiện vẫn nằm trong RAM: chưa có tự khôi phục trận sau restart, thế giới MMORPG, chia shard hoặc reconnect nhân vật.

## Chạy hiện tại
- `npm install`, `npm run dev`.
- Chưa cấu hình DATABASE_URL: môi trường development dùng SQLite hiện có, hiển thị backend sqlite-local khi khởi động. Đây không phải PostgreSQL.
- `/login.html`: đăng ký tên đăng nhập, tên hiển thị, mật khẩu ít nhất 10 ký tự; đăng ký thành công tự đăng nhập.
- Trang chơi và WebSocket đều yêu cầu phiên hợp lệ. Không nhận token khách từ localStorage làm danh tính.
- Cookie HttpOnly, SameSite=Lax, 7 ngày; token ngẫu nhiên chỉ lưu SHA256 trong database. Mật khẩu scrypt N=32768/r=8/p=1 với salt riêng, giới hạn số yêu cầu và số tác vụ băm đồng thời.
- Đăng xuất hủy phiên và đóng các kết nối của phiên đó. Một tài khoản không tham gia hai phòng đồng thời trong cùng tiến trình server.
- Lịch sử chỉ trả về trận của tài khoản đang đăng nhập. Ván mới vẫn XP=0/cấp=1. Lưu hero đã chọn và best_xp để thống kê; không cộng XP hồ sơ sang ván mới.

## Kết nối PostgreSQL
1. Tạo database PostgreSQL local hoặc project Neon. Không dùng database production đang có dữ liệu khác.
2. Copy `.env.example` thành `.env`, đặt DATABASE_URL bằng chuỗi kết nối thật. Với Neon dùng chuỗi có sslmode=require do dashboard cung cấp. Không tắt xác minh TLS bằng rejectUnauthorized=false.
3. Deploy HTTPS: đặt PUBLIC_ORIGIN chính xác, ví dụ https://game.example.com; đặt NODE_ENV=production. Cookie sẽ có Secure. Chuyển WebSocket qua reverse proxy hỗ trợ upgrade.
4. `npm install`, `npm start`. Khi khởi động, schema được tạo gồm accounts, account_sessions, account_profiles, matches, match_players. Backend phải hiện postgresql.
5. Tạo tài khoản sau khi chuyển database. Các tài khoản tạo thử trong SQLite không tự xuất hiện trong PostgreSQL.

Không điền DATABASE_URL trong chat hay commit .env. Bản production không cho dùng SQLite ngầm khi thiếu DATABASE_URL.

## Dữ liệu cũ
File data/game.sqlite được giữ nguyên. Các bảng lịch sử cũ vẫn ở đó, không xóa và không tự gán cho tài khoản mới vì token khách không phải bằng chứng sở hữu. Script `npm run db:import-legacy` có thể sao chép lịch sử cũ sang PostgreSQL; các dòng này không gán account_id, nên không lộ qua API lịch sử cá nhân. Script idempotent theo ID, không xóa nguồn. Chạy trước khi đưa server online. Tài khoản local thử nghiệm không được script này chuyển.

## Phạm vi chưa làm
Chưa có xác minh email, quên/đổi mật khẩu, đăng nhập mạng xã hội, trang quản trị tài khoản, lưu/khôi phục toàn bộ chiến dịch hoặc cơ chế MMORPG. Những phần này cần triển khai riêng trước khi vận hành quy mô lớn. Chưa chạy kiểm thử hoặc QA theo yêu cầu trước của người dùng.
