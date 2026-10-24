# 269 — Bình Minh: bố trí cảnh, chuyển động và ba hầm ngục

24/10/2026. Đã tích hợp vào MMORPG dùng chung web và client Windows. Giữ map ngoài trời 6.000 × 4.500, điểm xuất phát và ba cửa hầm. Các bản ảnh concept trước đây là tài liệu tham khảo.

## Checklist triển khai

- [x] Rà cây theo khoảng cách tán, giữ bốn loài và sinh cảnh đã có.
- [x] Giữ hành lang nhìn quanh đường, cầu, cửa nhà và điểm tương tác; giảm cây từ 583 xuống 224.
- [x] Giảm thực vật thấp trùng dày từ 3.585 xuống 1.792, vẫn đủ sáu mẫu cỏ/hoa/bụi/lau.
- [x] Thêm biển gỗ tại đường nhánh, đá rêu bên cụm cây và hàng rào cạnh nhà.
- [x] Vá góc lõm nhỏ của đường đất, dựng viền bo từ dữ liệu ô và dùng vật liệu liên tục. Nước sâu và cầu vẫn dùng collision riêng.
- [x] Sửa đồng bộ chuyển động bằng gói input có thứ tự, xác nhận và phát lại phần chưa xác nhận.
- [x] Kiểm tra thời lượng input tại server, bỏ gói đã xử lý, giữ kiểm tra phiên điều khiển và lưu PostgreSQL.
- [x] Dựng lại Hầm Phong Ấn Cổ thành sáu phòng nối bằng hành lang chính và vòng trở về.
- [x] Dựng lại Hốc Rễ Dưới Guồng và Kho Vôi, mỗi nơi ba khoảng chơi cùng hai hướng tiếp cận.
- [x] Kiểm thử đường thông, cửa vào/ra, chuyển động/lưu dữ liệu và client PC thực tế.

## Nguyên nhân và cách sửa chuyển động

Trước đây, sau mỗi phản hồi HTTP, client thay vị trí dự đoán bằng vị trí đã lưu ở máy chủ. Phần di chuyển trong lúc chờ mạng bị bỏ, gây kéo lùi. Thời điểm gửi tiếp còn được tính từ lúc nhận phản hồi, làm nhịp input phụ thuộc độ trễ. Máy chủ cũ giới hạn mỗi đợt 150 ms, càng làm hai phía khác nhau khi mạng chậm.

Client mới giữ các bước hướng/thời lượng có ID; server chạy cùng MapTraversal, trả ID cuối đã xác nhận. Client lấy vị trí đó rồi chạy lại những bước còn thiếu. Hiệu chỉnh hình ảnh nhỏ được hòa trong khoảng 65 ms, không dùng nó để xuyên collision. Mỗi khung hình chia bước tối đa 40 ms, giới hạn bắt kịp 120 ms để tránh nhảy xa khi tab bị treo. Đứng yên không làm đầy hàng đợi di chuyển.

Gói tối đa 32 bước; mỗi bước server chấp nhận tối đa 50 ms, giới hạn hướng và ngân sách thời gian theo đồng hồ server. Gửi lại cùng ID không di chuyển lần hai. Lưu DB thành công mới xác nhận; lỗi ghi phục hồi vị trí trước đó. Vẫn giữ kiểm tra sequence, session, control token và revision. Đây vẫn là HTTP có xác thực, chưa phải server tick/WebSocket hoặc đồng bộ nhiều người trong một thế giới.

## Ba hầm được ráp thế nào

| Hầm | Bố trí và ngôn ngữ hình ảnh |
|---|---|
| Phong Ấn Cổ | P1 Bảo dưỡng → P2 Áp lực → P3 Hồ sơ → P4 Kiểm định → P5 Canh giữ → P6 Chuyển giao; nền đá cổ, tường rêu, cột, bia ấn và đèn; đường vòng phía nam |
| Hốc Rễ Dưới Guồng | Cửa dưới rễ → buồng guồng → kho dụng cụ khô; nền hang đất, rễ và đồ nghề; hai đường quanh buồng giữa |
| Kho Vôi | Sân dỡ → kho khô → phòng thử âm; nền đá sáng, vật tư sửa chữa và đường trở về phía nam |

Nền đứng và nền chặn dùng cùng lưới 5 base-unit cho cả server/client. Nhân vật kiểm tra vòng chân, tường và vật thể chặn; các phòng không chỉ là vùng trên ảnh nền. Các điểm sinh/cửa cũ giữ nguyên để không đổi đường trở về trong PostgreSQL. Nhân vật từng lưu ở vị trí không còn hợp lệ được cơ chế bootstrap hiện có đưa về điểm an toàn.

Vật liệu nền có tỷ lệ hiển thị riêng, không thu cả tấm họa tiết vào một ô collision nhỏ. Cây giữ socket thân/tán đã sửa ở268. Nền đường được cache lại khi ra/vào hầm để không dựng lại mỗi lần; texture tĩnh, không thêm timer.

## Asset, cấu hình và tệp nguồn

- Bộ raster mới tạo bằng **imagegen built-in**: `public/mmorpg/assets/dungeon-kit-alpha-r002.png`, vùng cắt `dungeon-kit.frames.json`. Có ba vật liệu nền và sáu phần tường/đồ trang trí. Prompt đầy đủ, ảnh nguồn và kiểm tra alpha nằm trong `dungeon-r004.provenance.json`.
- Atlas phụ `dungeon-props-r001.png`: guồng nước, kệ hồ sơ, bàn thợ, chuông nứt, thùng hàng và van áp lực; đặt theo vai trò từng phòng, có footprint riêng. Vật thể hiện là cảnh trí, chưa có câu đố hoặc tương tác nghề.
- `public/mmorpg/maps/binh-minh.tmj`: nguồn ngoài trời đã chỉnh; bản cũ ở `maps/history/binh-minh-v3.tmj`.
- `scripts/refine-binh-minh-r004.mjs`: chỉnh bố trí một lần; build thường không tự rải lại cây.
- `scripts/dungeon-layouts.mjs`: vị trí/kích thước phòng, độ rộng hành lang, theme và vật thể của ba hầm.
- `scripts/create-binh-minh-map.mjs`: biên dịch ngoài trời và hầm thành runtime-map.json.
- `src/shared/map-traversal.ts`: collision và bước chuyển động dùng chung.
- `src/mmorpg/game.ts`, `network.ts`: dự đoán, hàng đợi, xác nhận và animation theo quãng đường.
- `src/mmorpg/world-renderer.ts`: đường bo mép, nền/tường/vật thể, depth và dọn cảnh.
- `mmorpg-service.mjs`: xác thực, kiểm tra ngân sách input, mô phỏng và ghi DB.

## Bằng chứng kiểm thử

- Build TypeScript/Vite thành công.
- 12 kiểm thử map/movement đạt: thông đường từ spawn tới mọi điểm ngoài trời, mọi phòng của ba hầm, không xuyên tường/nước, giữ cửa trở về và phát lại input cho kết quả giống mô phỏng liên tục.
- QA trình duyệt: 15 kiểm tra đạt, gồm chặn thời lượng sai/gian lận, không tính lặp input, bốn cảnh có tilemap, di chuyển trong ba hầm và lưu PostgreSQL. Không có page error.
- QA vào/ra hầm bằng F trong lúc phản hồi mạng trễ: 12 kiểm tra đạt, số node không tăng sau vòng ra/vào.
- Client Windows đóng gói: 18 kiểm tra đạt, gồm đi/lưu vị trí, cách ly phiên QA, sandbox và kết nối lại bằng F8. Không cần đóng gói EXE mới cho thay đổi tài nguyên từ server.
- Phép đo riêng Chrome headless, cùng tuyến đi và thêm 160 ms trễ phản hồi: trước sửa có 7 khung bị kéo lùi, lớn nhất gần 30 px; sau sửa 0 khung. P95 khung hình trước/sau đều khoảng 16,7 ms trong phép đo riêng. Node cảnh giảm từ 6.004 xuống 3.196. Đây là số đo trên máy hiện tại, không phải cam kết FPS cho mọi máy.

Ảnh thực tế: `/mmorpg/assets/refined-camp-r004.png`, `refined-seal-r004.png`, `refined-roots-r004.png`, `refined-lime-r004.png`. Báo cáo máy: `refinement-qa.json`, `modular-qa.json`, `pc-v02-qa.json`.

## Giới hạn còn lại

Đợt này hoàn thiện môi trường và đi lại trong hầm. Boss, combat, loot/rương thật, van/câu đố, nhật ký nhiệm vụ và nhiều người cùng xuất hiện chưa được triển khai trong bản MMORPG. Đồ trang trí chưa đồng nghĩa có tương tác nhiệm vụ. Animation đi trước/sau vẫn dùng pose proxy hiện có. Chưa đo heap/GPU dài hạn trên nhiều cấu hình; kiểm tra dọn cảnh hiện tại là một vòng vào/ra.

Mở `/mmorpg/index.html`, F5 trên web; PC dùng F8 → kết nối lại để nạp bản server mới. Không đổi phần thủ thành hoặc reset dữ liệu nhân vật.
