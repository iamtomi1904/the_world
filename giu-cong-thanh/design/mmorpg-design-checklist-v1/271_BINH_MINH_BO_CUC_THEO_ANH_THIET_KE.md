# 271 — Bình Minh: làm lại bố cục toàn vùng theo ảnh thiết kế

24/10/2026. Bản r006 thay bố cục r005. [Đối chiếu thiết kế và bản chơi](/design-preview/v01-composition-r006/index.html) · [Vào game](/mmorpg/index.html).

## Vì sao phải sửa lại

Bản270 bổ sung đúng loại vật thể nhưng vẫn giữ tọa độ từ greybox cũ trong một phần map đã mở rộng. Làng, trại và ruộng bị dồn vào góc tây bắc; phần còn lại thành các vòng đường lớn, cây rải thưa và đá đứng riêng lẻ. Ruộng nhỏ, suối/mương giống các nét vẽ rời và mép cao bị mất hình ở những đoạn chéo. Vì vậy có đủ danh mục asset vẫn chưa tạo được bố cục của thiết kế264.

## Checklist đã thực hiện

- [x] Lấy vị trí tỷ lệ artX/artY của12khu trong map-design.json làm mốc, thay mạng đường/địa hình cũ trên toàn vùng.
- [x] Đưa làng về tây nam, trại về giữa–tây, ruộng về phía nam, Sân Chuông và hầm về bờ đông.
- [x] Sông chính uốn dọc phía đông thay cho một dải thẳng đặt ở một phần ba map.
- [x] Hai suối nhánh có nguồn, hướng chảy và chỗ hợp lưu; mương ruộng nối từ nhánh phía nam, không rải vệt nước tự do.
- [x] Cầu Lau bắc đúng nhánh suối; Cầu Sỏi bắc qua sông chính; lối bắt buộc có nền khô.
- [x] Nâng khu ruộng thành cụm rộng khoảng1.300×1.100world pixel, bốn ô cây trồng rộng510pixel/ô, lối giữa và đường vòng.
- [x] Gò trại, thềm chuông/hầm, sườn đông và thềm bắc dùng đường biên đa giác, không còn các ô cao hình chữ nhật nhỏ rải độc lập.
- [x] Dựng hình vách theo toàn bộ mép cong; bổ sung chân vách chặn đúng vùng hình, đặt bậc tại giao giữa đường và mép cao.
- [x] Đưa đá/núi thành nhóm theo sườn và bờ nước, bỏ cách rải khối đá như đảo giữa đồng trống.
- [x] Dựng rừng/cây ăn quả/liễu theo sinh cảnh; tán đan thành mảng, có khoảng mở ở đường, làng, trại, ruộng và cửa hầm.
- [x] Vẽ bộ thảm thực vật mới theo ảnh tham chiếu; tránh đặt hoa/bụi lên nền đường và sân đất.
- [x] Bố trí lại nhà, lều, xưởng, giếng, đèn, rào và ngoại cảnh ba hầm theo vị trí mới; sân dịch vụ giữ thông.
- [x] Đồng bộ source Tiled, collision, minimap, các điểm địa danh và server.
- [x] Thêm phiên bản vị trí trong PostgreSQL và chuyển vị trí cũ sang khu tương ứng mà không xóa nhân vật/XP.
- [x] Kiểm thử map, client web/PC, vào/ra hầm và dữ liệu chuyển đổi; thêm trang so sánh ảnh thật với thiết kế.

## Tỷ lệ và vị trí

| Khu | Vị trí world r006 |
|---|---|
| Trại Bình Minh / spawn | 2160,2295 |
| Làng Đá Đèn | 1020,3780 |
| Cầu Lau | 1260,3105 |
| Bìa Rừng Cũ | 720,900 |
| Đồng Ruộng Gãy Bờ | 3180,3550 |
| Cầu Sỏi | 4000,2385 |
| Sân Chuông Nứt | 5100,1575 |
| Hầm Phong Ấn Cổ | 4980,990 |
| Hốc Rễ Dưới Guồng | 1980,1170 |
| Kho Vôi | 5280,2520 |

Map vẫn6000×4500, không phóng to mọi sprite hoặc giảm camera chơi để giả rộng. Các mốc khớp vùng trên ảnh, không hứa từng pixel giống concept. So sánh trong test cho phép sai lệch dưới130world pixel với pin địa danh; pin không phải điểm chân chính xác của mọi căn nhà trên ảnh.

## Địa hình, nước và thảm thực vật

Đường và dòng nước dùng chuỗi điểm được làm cong trước khi tô lưới15pixel. Nhánh trên chảy từ vùng rừng xuống khu khảo sát rồi hợp sông đông; nhánh dưới đi giữa làng, trại và rìa ruộng, vòng về sông. Mương tưới lấy nước từ nhánh này và có chỗ nền khô bắc qua. Xóa tuyến lội cắt ngang sông ở phía nam của bản mở rộng cũ.

Nước sâu loại3 chặn chân, nước cạn loại5 đi chậm0,8; cầu/nền thoát nước loại4 đi bình thường. Không thêm bơi hay tác động combat. Đá bờ đặt theo tiếp tuyến dòng nước, chừa hai đầu cầu.

Cao độ0/1/2 được ghi trong lớp Elevation. Vách loại7 và các collider chân công trình cùng dùng cho server/client. Hình vách được lấy từ biên cao–thấp và trải dọc mép cong; không bỏ qua mép chéo chỉ vì mỗi hàng có ít ô. Đây vẫn là map sprite2.5D, chưa phải mô hình terrain3D.

Rừng r006 có470cây. Không giữ số lượng r005 làm mục tiêu: tăng độ phủ bằng cụm tán lớn, chừa lối nhìn và phân loài theo bờ ẩm/rừng/vườn. Bộ mới có cỏ/clover, hoa trắng/vàng, dương xỉ, bụi thấp, hoa hồng/xanh và lá khô. Thực vật thấp chỉ đặt trên cỏ, không trên đường, sân đất hoặc ruộng đã trồng. Cây giữ socket thân–tán, rung nhẹ và giảm che nhân vật của bản trước.

## Dữ liệu nhân vật khi đổi bố cục

Migration mới `002_mmorpg_map_layout.sql` thêm map_layout; không sửa migration001 đã áp dụng. Nhân vật cũ mặc định layout5, nhân vật mới lưu layout6. Khi claim quyền điều khiển, bootstrap chuyển điểm cũ gần khu đã biết sang khu mới, kiểm tra chỗ đứng rồi lưu phiên bản6. Vị trí ngoài các vùng cũ được giữ nếu còn hợp lệ; điểm không hợp lệ dùng cơ chế về spawn an toàn.

Điểm trở về ngoài trời của người đang ở hầm cũng được chuyển tương ứng. ID, race, cấp, XP và profession không đổi. Lần đăng nhập sau không chuyển lại vị trí đã mang phiên bản6. Web và PC dùng cùng logic này; không phát hành client EXE mới chỉ vì đổi map.

## Tệp và asset

- `scripts/recompose-binh-minh-r006.mjs`: tác giả bố cục một lần; nguồn Tiled không được ngẫu nhiên hóa mỗi lần build.
- `public/mmorpg/maps/binh-minh.tmj`: nguồn r006; bản r005 tại `maps/history/binh-minh-v5.tmj`.
- `scripts/create-binh-minh-map.mjs`: biên dịch, rail cầu theo kích thước cầu và bảng chuyển điểm cũ.
- `mmorpg-service.mjs`, `migrations/002_mmorpg_map_layout.sql`: phiên bản bản đồ và chuyển vị trí an toàn.
- `src/mmorpg/world-renderer.ts`: bộ thảm mới, tiếp tục dùng nền/vật thể riêng thay ảnh concept.
- `public/mmorpg/assets/vegetation-r003.png`, `.frames.json`, `.provenance.json`: imagegen built-in, prompt đầy đủ và nguồn ảnh được giữ.
- `test/mmorpg-modular-map.test.mjs`, `mmorpg-story-map.test.mjs`: tỷ lệ vùng, ruộng lớn, cầu, vách và đường thông.
- `public/design-preview/v01-composition-r006/index.html`: hai ảnh đối chiếu, ghim12khu và bảng tỷ lệ vị trí.

Ảnh thực trong game: `/mmorpg/assets/story-overview-r006.png`, `story-camp-r006.png`, `story-village-r006.png`, `story-farm-r006.png`, `story-seal-r006.png`, `story-root-r006.png`, `story-mine-r006.png`, `story-bell-r006.png`.

## Kiểm thử

- Build TypeScript/Vite đạt;16test map/movement đạt, gồm thông đường qua footprint tới đủ địa danh và portal, mọi phòng hầm, cầu/nước/vách, tỷ lệ pin thiết kế và kích thước ruộng.
- QA vào/ra hầm bằng F khi có input đang chờ:12kiểm tra đạt; số node không tăng sau vòng vào/ra.
- Bản client Windows đóng gói:18kiểm tra đạt, gồm movement/lưu PostgreSQL, kết nối lại, sandbox và phiên QA riêng.
- Chuyển vị trí PostgreSQL:8kiểm tra đạt; nhân vật cũ giữ ID/cấp/XP, không chuyển hai lần, người trong hầm về đúng cửa mới.
- QA chụp cảnh/texture/alpha và trang so sánh ghi tại `composition-qa.json`. Các tài khoản thử được xóa sau kiểm tra; không dùng nhân vật người chơi để chụp.

## Giới hạn

Đợt này làm lại bố cục và môi trường để bám thiết kế. Mức hoàn thiện mỹ thuật vẫn cần đối chiếu khi chơi gần: không khẳng định atlas module đã tái hiện mọi chi tiết concept. Nội thất nhà, NPC chức năng, phase biến cố, nhiệm vụ, combat/boss và loot MMORPG chưa được triển khai. Không sửa thủ thành.

Web F5; client PC F8→kết nối lại. Tọa độ mới là thay đổi có chủ đích của r006, thay thế cam kết giữ nguyên bố cục cũ ở270.
