# MMORPG — Bản dựng đầu: web, PC và PostgreSQL

24/10/2026 · [Chơi bản web](/mmorpg/index.html) · [Đi thử map thiết kế không account](/design-preview/v01-complete-map-r001/walk.html).

## Đã dựng

- [x] Phaser renderer tách riêng thủ thành, web/PC dùng chung game.js.
- [x] Bình Minh ngoài trời và3hầm, camera, di chuyển, minimap và vào/ra hầm.
- [x] Đăng nhập bằng account/session hiện có; lần đầu tạo nhân vật cấp1.
- [x] PostgreSQL thật: nhân vật/map/vị trí/điểm trở về/revision và timestamps.
- [x] Migration001, transaction, advisory lock và checksum ledger.
- [x] API hướng di chuyển; server tính delta/speed/collision, không nhận tọa độ để tự ghi.
- [x] Control lease và optimistic revision ngăn phiên web/PC cũ ghi đè.
- [x] Client Windows portable đóng gói, kiểm tra chạy fileexe thật.
- [x] Kiểm tra bằng accountPostgreSQL tạm và xóa sau QA.

## Chưa có

- [ ] Bộ map module/tile sạch, depth2.5D và collision từng prop.
- [ ] Avatar/race đầy đủ, nhiều slot nhân vật.
- [ ] Multiplayer world/AOI, inventory, combat, nhiệm vụ và wallet.
- [ ] Kiểm tải, batchpersistence, backup/restore và vận hành production.
- [ ] Client installer/updater/chữ ký và serverHTTPS triển khai online.

Một nhân vật chính/account trong bản đầu; level1 và professionNULL. Tên theo displayName của tài khoản; không có hệ đặt tên/appearance hoàn chỉnh. Thân thử human dùng chung để kiểm map. Không thay level, class, tiền hoặc tiến trình thủ thành.

## Dòng dữ liệu

Web hoặc client → session auth → input direction/sequence/controlToken → serverMapTraversal → conditional UPDATE PostgreSQL → snapshot trả về. DB lỗi không báo đã lưu; phiên điều khiển cũ trả409. Mật khẩuDB chỉ ở envserver, không đóng gói vào PCclient.

Postgres chỉ dành MMORPG không fallback SQLite. Các bảng account và account_sessions dùng lại; nhân vật MMORPG ởmmorpg_characters, không dùng account_profiles của thủ thành. Bản đầu ghi mỗi input để bảo toàn dữ liệu, chưa tối ưu cho tải MMO lớn.

## File và vận hành

MMORPG_BOOTSTRAP.md trong root có hướng dẫn đầy đủ. npm run dev chạy server+Postgreslocal; web/mmorpg/index.html; PCrelease/AnThanh-win32-x64/AnThanh.exe giữ nguyên cảfolder. Client là app online trỏ localhost trong bản build hiện tại, không kèm serverDB.

Nguồn chính: public/mmorpg/{game.js,map-traversal.js,network.js,index.html}; mmorpg-service.mjs; migrations/001_mmorpg_characters.sql; desktop/main.cjs; scripts/build-desktop.mjs. Electron isolation theo tài liệu chính thức https://www.electronjs.org/docs/latest/tutorial/security .

## Kết quả kiểm thử

[PostgreSQL/webQA](/design-preview/v01-complete-map-r001/mmorpg-db-qa.json) · [PCQA](/design-preview/v01-complete-map-r001/mmorpg-client-qa.json) · [Ảnh web](/design-preview/v01-complete-map-r001/mmorpg-web-review.png) · [Ảnh client](/design-preview/v01-complete-map-r001/mmorpg-client-review.png).

Đã qua tạo/khôi phục nhân vật, di chuyển có lưu, vào hầm/reload/trở ra đúng cửa, chặn không đăng nhập, input sai, leasecũ vàdevwarp mặc định. PCpackaged chạy cùng Phaser và xác nhận nodeIntegrationfalse, contextIsolation/sandboxtrue. Bố cục390px qua, không pageerror. Unit4ca về địa hình/portal đều qua.

Tài khoản test thật được tạo tạm, sau đó xóa qua accountID riêng để cascade dữ liệuQA; không đụng nhân vật người dùng. Không báo gameplayMMORPG hoàn tất chỉ vì map và bảng nhân vật đã chạy. Tổng checklist thiết kế lớn vẫn525=128/14/383; gói triển khai mới theo checklist trên.
