# 270 — Map 1: đưa địa hình và dấu mốc cốt truyện vào bản chơi

24/10/2026. Nguồn đối chiếu: hồ sơ264, story17/20 và ảnh toàn cảnh Bình Minh người dùng gửi. Bản269 còn thiếu nhiều thành phần môi trường đã thiết kế; đợt này bổ sung trực tiếp vào map MMORPG, dùng chung trên web và client PC.

## Checklist hiện tại

- [x] Thay mô hình lặp một nhà bằng nhiều kiểu nhà: nhà ở, kho mái rơm, nhà tầng, nhà mái đá; phân biệt làng và trại bằng lều, xưởng, giếng, lửa trại.
- [x] Gò Trại Bình Minh có vành vách, các lối lên/xuống và vùng sân đứng được.
- [x] Sân Chuông và Thềm Hầm Phong Ấn có hai khu cao riêng, đường tiếp cận và vách chặn.
- [x] Bổ sung khối núi/đá lớn trên phần map mở rộng và đá bờ sông, giữ trục chính thông.
- [x] Dựng Đồng Ruộng Gãy Bờ tại khu Ruộng đã có: bốn luống lúa mì, rau/ngô và đất gieo; mương cùng đường vòng và lối giữa luống.
- [x] Cầu Lau có cầu gỗ trên suối nhánh; Cầu Sỏi giữ vai trò cầu đá qua sông sâu.
- [x] Thay vật liệu nước có vân caustic bằng dòng sông pixel tự nhiên; suối cạn có đáy sáng, sỏi, chuyển động nhẹ và vòng nước khi lội.
- [x] Ba cửa hầm có ngoại cảnh riêng, gắn đúng ba portal đang hoạt động.
- [x] Thêm bệ Chuông Nứt, trạm khảo sát nước, xưởng rèn và nơi trú tạm để môi trường kể đúng đời sống dân cư sau biến cố.
- [x] Thêm vành lũy và cổng đóng phía bắc; đây là ranh định hướng, không mở thêm hầm hoặc Map 2.
- [x] Lưới chặn vách, điểm đứng, minimap, địa danh gần nhân vật và nguồn Tiled cùng cập nhật.
- [x] Kiểm tra đường thông, nước, bậc, cửa hầm, asset alpha và web/PC; giữ PostgreSQL và dữ liệu người chơi.

## Đối chiếu với thiết kế Map 1

| Khu thiết kế | Đã xuất hiện trong bản chơi |
|---|---|
| Làng Đá Đèn | Nhà ở, nhà tầng/kho, giếng và sân nối đường dân cư, vật liệu mái khác nhau |
| Cầu Lau | Cầu gỗ bắc qua nhánh nước cạn, hai đầu tiếp cận khô |
| Trại Bình Minh | Gò cao, nhà điều phối, lều trú, xưởng rèn và lửa trại; sân giữa giữ đường thoát |
| Ngã ba Tây | Mạng đường cũ giữ kết nối và biển đường; chưa mở Map 2 |
| Bìa Rừng Cũ | Cụm cây/rễ, lán hiện có và đá định hướng; không thêm quái bay |
| Suối Sỏi Trắng | Nhánh cạn có đáy/sỏi, trạm khảo sát và lối tới Hốc Rễ |
| Đồng Ruộng Gãy Bờ | Ruộng theo luống, mương và lối đi nông dân; đường cũ cắt chéo luống đã được sắp lại |
| Cầu Sỏi, sông Đông | Cầu đá, sông sâu và bờ có cụm đá; đường lội không thay thế cầu chính |
| Sân Chuông Nứt | Chuông gãy trên bệ đá, nơi nghỉ tạm và thềm tiếp cận Kho Vôi |
| Thềm Hầm Phong Ấn | Cửa đá có ấn, nền chờ và lối lên thềm |
| Vành lũy phía Bắc | Đoạn tường và cổng đóng; chừa dòng sông thay vì đặt tường ngang mặt nước |
| Bãi đá và phần rừng mở rộng | Khối đá/núi làm mốc trên diện tích lớn; không đặt thêm boss hoặc vùng truyện mới |

Ảnh concept là hướng địa lý và mỹ thuật. Bản chơi vẫn được ráp từ nền, nhà, cây, vách và vật thể riêng; không có phép ánh xạ từng pixel từ concept sang collision. Những hạng mục trên đã hiện trong game, nhưng chưa đồng nghĩa các tuyến nhiệm vụ/NPC ở hồ sơ truyện đã được triển khai.

## Quy tắc đi lại

- Ngoài trời giữ kích thước6.000×4.500 và tọa độ gốc của spawn/ba portal.
- Cao độ là tầng địa hình trong phong cách2.5D: lưới Elevation ghi0/1/2, hình vách và bậc đọc được từ camera hiện tại. Đây là bản đồ sprite có tầng và collider, chưa phải terrain mesh3D hoặc hệ leo/nhảy.
- Ô vách là loại7, chặn vòng chân ở cả server lẫn client. Lối bậc mở trên đường có nền đi thật; không chỉ vẽ ảnh lên một vách kín.
- Nước sâu chặn đi bộ; suối/mương cạn đi được với hệ số0,8 đã có. Không thêm bơi, đuối nước hoặc sát thương nước.
- Luống ruộng là nền trang trí đứng được, chưa phải tính năng trồng/thu hoạch. Mương không làm mất vòng đường khô.
- Miệng hầm có footprint ở thân/vách; điểm F nằm trước cửa. Ba ngoại cảnh không tạo thêm portal.
- Đá lớn và công trình có footprint; sỏi nhỏ dưới nước không chặn chân. Đường/luống và nước dùng lớp riêng nên không phủ cây trồng lên mặt sông.

## Asset mới và nguồn chỉnh sửa

Tạo bằng **imagegen built-in**, bám ảnh tham chiếu người dùng:

1. `public/mmorpg/assets/settlement-kit-r001.png`:12mẫu nhà, lều/xưởng, giếng, lửa, cửa hầm và chuông.
2. `terrain-kit-r001.png`:9mẫu vách/góc, bậc, núi, đá và ruộng.
3. `fort-river-kit-r001.png`:4mẫu cầu gỗ, tường, cổng đóng và trạm khảo sát.
4. `river-water-r002.png`:vật liệu nước mới, thay vân hồ bơi ở bản trước.

Vùng cắt theo khoảng trống thật nằm trong `world-r005.frames.json`; không giả định atlas AI chia ô đều. Prompt đầy đủ và đường dẫn ảnh nguồn ở `world-r005.provenance.json` cùng `river-water-r002.provenance.json`. Ba atlas được kiểm tra alpha nền bằng canvas trong trình duyệt.

Tệp triển khai:

- `scripts/restore-binh-minh-landmarks-r005.mjs`: chỉnh nguồn một lần theo phân khu đã chốt; build thường không tự rải lại map.
- `public/mmorpg/maps/binh-minh.tmj`: nguồn Tiled gồm Ground, WorldObjects, Portals, Markers, Elevation và Terraces. Bản trước giữ tại `maps/history/binh-minh-v4.tmj`.
- `scripts/create-binh-minh-map.mjs`: biên dịch asset/footprint, tầng và ô vách vào runtime.
- `src/shared/map-traversal.ts`: chặn ô vách7 dùng chung.
- `src/mmorpg/world-renderer.ts`: bộ asset mới, nước cạn/sâu, ruộng, bậc/vách và dọn mask khi chuyển cảnh.
- `src/mmorpg/game.ts`: vòng nước dưới chân, màu minimap và tên khu gần nhân vật.
- `test/mmorpg-story-map.test.mjs`: kiểm tra các dấu mốc thiết kế, ô vách/bậc và mặt đi khô Cầu Lau.

## Kiểm thử và hình thực tế

Build TypeScript/Vite đạt. Bộ test map hiện gồm15kiểm tra: đường tới mọi landmark/portal, tất cả phòng hầm, footprint, phát lại input, phân loại nước, đặc điểm Map1, bậc và Cầu Lau. Có QA trình duyệt riêng kiểm texture/alpha, ba cửa hầm, nhiều kiểu nhà, ruộng và tầng địa hình; không page error.

Ảnh chụp trực tiếp từ Phaser tại `/mmorpg/assets/story-camp-r005.png`, `story-village-r005.png`, `story-farm-r005.png`, `story-seal-r005.png`, `story-root-r005.png`, `story-mine-r005.png`, `story-bell-r005.png`, `story-mountain-r005.png` và `story-overview-r005.png`. Báo cáo máy: `story-geography-qa.json`; kiểm tra vào/ra hầm và client PC dùng `modular-qa.json`, `pc-v02-qa.json`.

## Còn thiếu trong gameplay

NPC chức năng, hội thoại/nhật ký, phase Đêm Gãy Ấn, nhiệm vụ M01–M08, combat/boss, loot/rương và canh tác chưa được dựng trong MMORPG. Nhà hiện là ngoại cảnh, chưa có nội thất đi vào. Các marker này mới khôi phục phần môi trường của thiết kế Map1; chưa báo hoàn thành toàn bộ nội dung vùng tân thủ.

Web F5; PC F8→kết nối lại để nạp bản mới. Không reset nhân vật, không đổi hệ class và không sửa thủ thành.
