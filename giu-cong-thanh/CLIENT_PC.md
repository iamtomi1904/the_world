# Ẩn Thành — mở client Windows

## Chơi local trên máy đang có source

Nhấp đúp **Choi-An-Thanh.cmd** trong `D:\the_world\giu-cong-thanh`.

File này kiểm tra server, tự chạy PostgreSQL/server local khi chưa bật, rồi mở client mới nhất. Không cần mở terminal rồi chạy từng lệnh. Khi đóng client, server vẫn chạy và nhân vật vẫn được lưu.

Nếu cổng3000 đang có một chương trình khác hoặc server cũ không tương thích, launcher báo rõ và không tự tắt chương trình đó. Log khởi động trong `.local/pc-server-out.log` và `.local/pc-server-error.log`.

## Mở EXE trực tiếp

`release/pc-0.2.0/AnThanh-win32-x64/AnThanh.exe`

Mở EXE sẽ kết nối máy chủ đã lưu. Nếu chưa bật server, có màn hình thử lại và nhập địa chỉ. EXE không tự khởi động backend trên các máy nhận ZIP.

- **F8:** quay về màn hình chọn máy chủ.
- **F11:** bật/tắt toàn màn hình.
- **WASD / mũi tên:** di chuyển; **F:** vào/ra hầm.

Web và client dùng chung nhân vật khi đăng nhập cùng tài khoản trên cùng máy chủ. Không thể điều khiển đồng thời một nhân vật ở hai phiên; phiên điều khiển mới sẽ thay phiên cũ theo cơ chế hiện tại.

## Tải / gửi bản PC

Trang tải trong game: `http://localhost:3000/client.html`.

ZIP: `release/AnThanh-PC-0.2.0-win-x64.zip`. Giải nén **toàn bộ** thư mục rồi mởEXE, không chép riêngEXE vì cần DLL/resources/locales đi kèm. ZIP có hướng dẫn `HUONG-DAN.txt`.

Đây là bản portable Windowsx64, chưa ký số, chưa installer hoặc cập nhật tự động. Chưa có máy chủ public được triển khai. `localhost` trên máy khác là máy đó, không phải máy phát triển; muốn chơi từ máy khác cần triển khai serverHTTPS rồi nhập địa chỉ ởF8.

## Build lại

`npm run client:build` build TypeScript/map trước, sau đó đóng góiWindows và tạoZIP. Script ghi manifest `release/latest-client.json` gồm phiên bản, đường dẫnEXE, dung lượngZIP vàSHA-256. File mởlocal luôn đọc manifest này, không trỏ nhầm bản0.1.0 cũ.

`npm run client:local` tương đương chạy fileCMD. `npm run client:dev` mở bảnElectron phát triển.

## Ranh giới dữ liệu

Client chỉ chứa vỏứngdụng/kết nối, không cóPostgreSQL, `.env`, mật khẩuDB hoặc backend. Dữ liệu game ở server, kết nối vàđăngnhập vẫn bắt buộc. Chỉ lưu địa chỉ máy chủ đã kết nối thành công trong profilePC; không lưu mật khẩuDB ởclient.

Màn hình kết nối là tài nguyênđónggói qua protocolriêng, bridgeIPC chỉ hiện trên trang đó. Trangwebgame/login không cóAPI native. Giữsandbox, contextIsolation, nodeIntegration=false, chặnpopup và điều hướng khácorigin. Theo [hướng dẫnElectron](https://www.electronjs.org/docs/latest/tutorial/security).

Đợt này hoàn thiện luồng mở/kết nối/đónggói client. Combat, nhiệm vụ, AOI và đồng bộMMO nhiều người của game vẫn thuộc các đợt tiếp theo.
