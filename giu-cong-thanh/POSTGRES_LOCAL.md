# PostgreSQL local — Ẩn Thành

- PostgreSQL 17 nằm trong `.local/postgresql/pgsql` (bộ Windows binary EDB).
- Cluster: `.local/pgdata`; log: `.local/postgresql.log`.
- Chỉ nghe trên `127.0.0.1:55432`, database `an_thanh`, tài khoản ứng dụng `an_thanh_app` không có quyền superuser/tạo database/tạo role.
- Mật khẩu sinh ngẫu nhiên được lưu riêng trong `.local/postgres-local.json`, URL kết nối trong `.env`. Cả hai đã được gitignore. Không gửi file này hoặc đưa vào Git.
- Chạy game: `npm run dev` tự bật cluster local của dự án nếu cần rồi khởi động server.
- Bật riêng database: `npm run db:local:start`; dừng: `npm run db:local:stop` (dừng game trước).
- Không cài Windows service; database không tự bật khi khởi động máy. Dùng lệnh dev/start ở trên. `npm start` chỉ bật game, cần database đang chạy.
- SQLite nguồn không bị xóa. Có bản sao trong `data/game-before-postgres-20261019.sqlite` trước khi chuyển. Tài khoản, mật khẩu đã băm, phiên đăng nhập, hồ sơ và lịch sử được sao chép sang PostgreSQL; không đặt lại cấp của chiến dịch mới.
- Chuyển dữ liệu dùng `node scripts/migrate-local-accounts.mjs`; chỉ dùng khi chủ động chuyển lần đầu, dừng server trước. Không chạy lại sau khi dữ liệu PostgreSQL đã thay đổi để tránh nhầm nguồn dữ liệu.
- Để dùng công cụ quản trị DB, xem chuỗi DATABASE_URL tại máy trong .env. Không cần quyền postgres của cluster để quản lý bảng ứng dụng.
- Khi chuyển lên online, đổi DATABASE_URL, đặt PUBLIC_ORIGIN HTTPS và NODE_ENV=production. Không đưa database local hoặc tài khoản quản trị ra Internet.

Nguồn tải bộ Windows: https://www.enterprisedb.com/download-postgresql-binaries
Không chạy test gameplay theo yêu cầu trước của người dùng; việc khởi tạo, chuyển dữ liệu và khởi động server là thao tác cấu hình.
