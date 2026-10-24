# V33 — PostgreSQL local đã cấu hình

- PostgreSQL 17.11 binary EDB đặt riêng trong .local/postgresql/pgsql; cluster .local/pgdata.
- Lắng nghe 127.0.0.1:55432, database an_thanh, role ứng dụng an_thanh_app không có quyền quản trị cluster.
- Mật khẩu sinh ngẫu nhiên trong file riêng được gitignore; .env đã chuyển DATABASE_URL sang local PostgreSQL, không hiển thị thông tin bí mật trên chat.
- Đã chuyển 78 bản ghi từ SQLite (tài khoản/hồ sơ/phiên/lịch sử) trong transaction. Giữ nguyên SQLite nguồn, có backup data/game-before-postgres-20261019.sqlite. Không tạo tài khoản mẫu, không đặt lại mật khẩu người dùng.
- npm run dev tự bật database local khi cần. Thêm db:local:setup, db:local:start, db:local:stop. pg_ctl bật nền ẩn cửa sổ, không cài Windows service.
- Xem POSTGRES_LOCAL.md để bật/tắt và quản lý kết nối. Không chạy kiểm thử gameplay theo yêu cầu trước của người dùng.
