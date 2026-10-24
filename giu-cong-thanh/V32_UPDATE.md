# V32 — Tài khoản và nền tảng PostgreSQL

Lựa chọn: PostgreSQL để tiếp tục phát triển MMORPG. Thêm pg, storage.mjs hỗ trợ PostgreSQL khi có DATABASE_URL và SQLite-local cho development chưa cấu hình. Production yêu cầu DATABASE_URL và PUBLIC_ORIGIN HTTPS. Chưa có kết nối PostgreSQL thực tế trong môi trường này.

Tạo auth.mjs, trang đăng nhập/đăng ký, auth-client.js và trang hồ sơ/lịch sử. Đăng ký thực lưu accounts, mật khẩu scrypt; đăng nhập cấp cookie HttpOnly, lưu hash phiên trong database; đăng xuất hủy phiên. Chặn WebSocket và trang chơi khi chưa xác thực, chặn Origin lạ, giới hạn thử đăng nhập và tác vụ băm đồng thời. Không dùng token localStorage làm danh tính.

Hồ sơ và lịch sử thuộc account_id. Mỗi ván vẫn cấp 1/XP 0, giữ cấp trong chiến dịch. Hồ sơ lưu hero và best_xp; lịch sử có kết quả/độ khó/ải/đội, API chỉ trả trận của người đăng nhập. Không đổi công thức combat.

Giữ SQLite nguồn và lịch sử khách cũ. Script scripts/import-legacy.mjs nhập lịch sử sang PostgreSQL khi được cấu hình, không tự gán dữ liệu khách cho tài khoản và không xóa nguồn. Xem DATABASE_AUTH.md và .env.example.

Chưa làm: quên/đổi mật khẩu, xác minh email, chuyển tài khoản local sang PostgreSQL, lưu/khôi phục chiến dịch đang chạy, MMORPG/sharding. Không chạy kiểm thử hoặc QA theo yêu cầu trước của người dùng; chỉ khởi động server để áp dụng bản mới.
