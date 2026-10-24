# 266 — MMORPG: TypeScript, bản đồ ghép và va chạm thật

24/10/2026. Tiếp nối hồ sơ265. Đây là triển khai trong game, không phải chỉ thêm preview. Phạm vi: nền client và bản đồ ngoài trời Bình Minh. Thủ thành giữ riêng.

## Nguyên nhân và thay đổi

Bản trước dùng ảnh concept toàn vùng với hành lang đi ước lượng. Nhân vật có thể đạp lên hình nước hoặc nhà vì vùng đi không sinh từ vật thể trong ảnh. Bản mới không tải ảnh concept ngoài trời: nền là Tilemap Phaser, các cây/nhà/cầu/đồ sân là những instance riêng có vị trí rõ ràng.

Không mặc định bản mới đã đạt mỹ thuật cuối. Asset tái sử dụng các bộ cây, nhà, cầu và cỏ/hoa đã thiết kế; mép bờ, sự đa dạng công trình và bố cục trang trí còn cần hoàn thiện.

## Checklist triển khai đợt này

- [x] TypeScript strict cho client MMORPG, mạng và logic di chuyển dùng chung.
- [x] Vite build client riêng, không chuyển hoặc build lại thủ thành.
- [x] Nguồn map Tiled `public/mmorpg/maps/binh-minh.tmj`, 100×75 ô, mỗi ô30worldpixel.
- [x] Biên dịch nguồn map thành `runtime-map.json`; source Tiled đã tồn tại thì build không ghi đè.
- [x] Nền cỏ, đường đất, sông sâu, sỏi cầu và nước cạn là các ô địa hình.
- [x] Cây, thân/mái nhà, cầu và đồ sân ghép riêng; có388record, gồm386instance vẽ và2collider lan can bổ sung.
- [x] Va chạm server/client cùng một nguồn TypeScript và cùng config; không dùng đường vẽ làm giới hạn khám phá ngoài trời.
- [x] Gốc cây, tường nhà, thùng/chậu/đèn có footprint; nước sâu chặn, nước cạn giữ hệ số0.8.
- [x] Depth theo chân; tán và mái mờ khi che nhân vật; cầu chia hai mask bổ sung; tán lay nhẹ và nước có gợn.
- [x] Giữ đăng nhập, nhân vật cấp1, PostgreSQL, hồi phục vị trí và vào/ra ba hầm; web và Windows dùng cùng client build.

## Nguồn dữ liệu và cách sửa map

1. Mở `public/mmorpg/maps/binh-minh.tmj` bằng Tiled. LayerGround dùng5ID ngữ nghĩa:1cỏ,2đường đất,3nước sâu,4sỏi/cầu,5nước cạn.
2. LayerWorldObjects dùng điểm chân, width là chiều rộng vẽ. Không đổi kích thước map hoặc kích thước ô khi chưa có phương án chuyển dữ liệu vị trí đã lưu.
3. Di chuyển một cây/nhà sẽ di chuyển cả hình và collider trong bản biên dịch. Collider nhà theo tỷ lệwidth, cây dùng bán kính gốc riêng.
4. LayerPortals chứa3cửa hầm vàtarget. Markers chứaspawn vàmốc minimap/kiểm thử.
5. Chạy `npm run mmo:build`, rồi khởi động lại server nếu thay dữ liệu map/logic chung. Client mới tải khi reload.
6. Khi đổi vị trí cầu, phải sửa các ô deck tương ứng trongGround. Không chỉ kéo hình cầu qua nước rồi coi đã có đường đi.

EditorTiled dùng atlasSVG5ô để nhận diện địa hình; game dùng atlasCanvas tạo từ vật liệu có sẵn,4biến thể và16mask mép đường. Atlas nền không phải ảnh concept. Cácprops là pointobject với loại/width; editor hiện điểm và tên, chưa có plugin hiển thị toàn bộ hìnhprops ngay trongTiled.

## Kiến trúc

`src/shared/map-traversal.ts` biên dịch ra `public/mmorpg/map-traversal.js` đểNode nhập trực tiếp. Vite bundle cùng mã TypeScript vào client. Bộ chia ô không gian phục vụ tìm collider lân cận thay vì quét mọi cây mỗi substep. Foot collider là hình tròn, kiểm cả ô chéo chạm vào bán kính; bước di chuyển nhỏ giữ nguyên.

Source world dùng3000×2250worldpixel. Runtime giữbase1000×750 vàscale3 để không thay đơn vị vị trí/điểm trở về đã lưu. Vị trí cũ không hợp lệ theo collider mới được server đưa vềspawn bằng cơ chếbootstrap đã có; không xóa nhân vật hoặc level.

## Kiểm thử

- `npm run mmo:build`: kiểmTypeScript, phát hành logic chung và bundle thành công.
- `node --test test/mmorpg-map.test.mjs test/mmorpg-modular-map.test.mjs`:9/9đạt. Bao gồm tương thích hầm cũ, nguồnTiled khớp runtime, BFS có kiểm đoạn di chuyển tới tất cảmốc/cửa hầm, vùng cỏ tự do, sâu/cạn, footprint và lan can.
- QAweb với tài khoản PostgreSQL tạm:15kiểm tra đạt, khôngpageerror. Đăng nhập, tạo nhân vật, leasecũ/inputsai/devwarp bị chặn, vào-ra hầm, đi, reload vàDBkhớp; màn390px không tràn ngang.
- QAWindows thực thi `AnThanh.exe`:6kiểm tra đạt. Không nhúng DB vào client, renderer vẫn sandbox/contextIsolation. Kết quả tại `mmorpg-client-qa.json` trong thư mục full-map-r001.
- QAmapmodule:12kiểm tra đạt, gồmPhaserTilemap thật, không tải ảnhconcept ngoài trời, nhấnF vào/ra hầm, sốnode không tăng sau vòng đổi scene, debug vàdepth chân. Kết quả `public/mmorpg/assets/modular-qa.json`.
- Tài khoản QA được xóa sau thử. Không sửa dữ liệu nhân vật người chơi để lấy ảnh.
- Sửa thêm việc phímF bị bỏ qua khi request di chuyển còn chờ: chỉ xếp chờ một tương tác có chủ ý, không tích lũy click lặp. QA giữ responseinput chậm250ms để tái hiện và kiểm chứng.

## Chưa hoàn thành

- [ ] Colyseus/WebSocket cho MMORPG; hiện vẫn APIinput có xác thực như hồ sơ265.
- [ ] Táchworldtick và batchpersistence; vẫn ghi vị trí mỗiinputđược chấp nhận, chưa phải cấu hình MMOquy mô lớn.
- [ ] AOI, nhiều người cùng map, kiểm thử tải và mất kết nối dài.
- [ ] Dựng3hầm bằngtile/prop; nội thất đang giữảnh concept và vùng đi cũ.
- [ ] Hoàn thiện mỹ thuật bờ sông, địa hình cao/thấp, biến thể nhà và cây theo từngkhu.
- [ ] NPC, combat, vật phẩm và nhiệm vụ MMORPG.
- [ ] ĐoFPS/memory trên máy cấu hình thấp; kiểm thử hiện tại không phải benchmark tải thực tế.

## File chính

`src/mmorpg/game.ts`, `network.ts`, `world-renderer.ts`; `src/shared/map-traversal.ts`; `vite.config.ts`; `tsconfig.json`, `tsconfig.shared.json`; `scripts/create-binh-minh-map.mjs`; nguồnTMJ vàruntimeJSON; `public/mmorpg/index.html`; `server.mjs`; `test/mmorpg-modular-map.test.mjs`.

Asset mới: `public/mmorpg/assets/river-water-r001.png`, vật liệu nước sâu pixel, sinh bằngimage_gen built-in dựa theo phong cáchr009. Prompt đầy đủ và đường dẫn nguồn nằm trongfileprovenanceJSON cạnhPNG. Runtime dùngTileSprite cuộn chậm, mask lấy đúngcácô nước sâu; không ảnh hưởng collision. Tính liền mép khi lặp chưa được chứng nhận bằng kiểm tra định lượng.

Các asset cây/nhà/cầu/cỏ/hoa tái sử dụng bản thiết kế hiện có. Alpha/trim được xử lý lúc nạp; không ghi đèPNG nguồn.
