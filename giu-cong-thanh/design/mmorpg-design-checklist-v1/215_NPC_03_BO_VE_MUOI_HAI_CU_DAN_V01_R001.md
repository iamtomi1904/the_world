# NPC-03 — Vẽ 12 cư dân Bình Minh r001

**22/10/2026.** Người dùng đã cho phép vẽ và gửi mẫu phong cách trực tiếp. Tạo12bảng bằng image_gen tích hợp, một lời gọi cho mỗi bản được chọn; Sella có một bản nháp bị loại vì nét quá mịn rồi vẽ lại. Không đổi cốt truyện, chỉ số hoặc game.

## Kết quả đã tạo

Mỗi bảng có1hình đứng,3chân dung biểu cảm và2tư thế sinh hoạt: tổng12hình đứng,36chân dung,24keypose. Đạo cụ theo công việc: ghi danh, điều phối, đođèn, sửa máy, chămthuốc, trồngtrọt, sửa cầu, kiểm đường, chămchuông và kho/bếp. Có mũ và nhận diện chủng tộc; không lấy bảngclass làm nghề củaNPC.

[Trang xem12NPC, tìm kiếm và mở ảnh lớn](/design-preview/npc-v01-r001/index.html). Bộ ảnh cũng có trong[trang thiết kế hình ảnh](/visual-design.html), nhóm **NPC Map 1**.

| Mã | Tên | Vai trò | Bản vẽ |
|---|---|---|---|
| N02 | Sella Venn | Chăm sóc Nhà Đèn · Người Lùn | [Xem PNG](/design-preview/npc-v01-r001/n02-sella__r001.png) |
| N03 | Mira Vale | Ghi danh người mất tích · Goblin | [Xem PNG](/design-preview/npc-v01-r001/n03-mira__r001.png) |
| N04 | Maera Holt | Chỉ huy dân quân · Con Người | [Xem PNG](/design-preview/npc-v01-r001/n04-maera__r001.png) |
| N05 | Neris Avel | Thợ kiểm ấn · Hắc Tiên | [Xem PNG](/design-preview/npc-v01-r001/n05-neris__r001.png) |
| N07 | Ilan Reed | Kiểm tiếp nhận · Elf | [Xem PNG](/design-preview/npc-v01-r001/n07-ilan__r001.png) |
| N09 | Borin Dael | Thợ công xưởng · Người Lùn | [Xem PNG](/design-preview/npc-v01-r001/n09-borin__r001.png) |
| N10 | Dara Eln | Chăm sóc và thuốc · Elf | [Xem PNG](/design-preview/npc-v01-r001/n10-dara__r001.png) |
| N25 | Edda Row | Nông dân · Con Người | [Xem PNG](/design-preview/npc-v01-r001/n25-edda__r001.png) |
| N26 | Rurik Moss | Thợ mộc cầu · Người Lùn | [Xem PNG](/design-preview/npc-v01-r001/n26-rurik__r001.png) |
| N27 | Vaela Reed | Trinh sát đường rừng · Elf | [Xem PNG](/design-preview/npc-v01-r001/n27-vaela__r001.png) |
| N28 | Halen Brek | Chăm chuông · Con Người | [Xem PNG](/design-preview/npc-v01-r001/n28-halen__r001.png) |
| N29 | Pella Norr | Thủ kho và bếp · Người Lùn | [Xem PNG](/design-preview/npc-v01-r001/n29-pella__r001.png) |

## Nguồn và cách tạo

[Mẫu người dùng gửi](/design-preview/npc-v01-r001/style-reference.png), [prompt đầy đủ từngNPC](/design-preview/npc-v01-r001/prompts.json), [manifest ảnh và nguồn](/design-preview/npc-v01-r001/manifest.json). Prompt thực tế của mỗi ảnh là trường correction trong manifest cộng prompt của nhân vật trong prompts.json. Công cụ image_gen tích hợp, không CLI/API dự phòng. Ảnh được chép vào workspace, không tham chiếu riêng thư mục generated_images.

Mục tiêu là nét pixel theo mẫu, dáng trưởng thành và vật liệu vừa chi tiết. Ảnh hiện là bảng concept phóng lớn; chưa coi bảng màu, tỷ lệ pixel hoặc phong cách từngảnh đã được người dùng nghiệm thu. Cần phản hồi nếu một nhân vật quá trẻ, mịn hoặc bịnhầm vai trước khi làm sprite.

## Giới hạn thực tế

Đã vẽ nhận diện, biểu cảm và keypose tĩnh; **chưa có** sprite native nhiều hướng, điểm neo chuẩn, nền trong suốt tách từngphần, animation Idle/Move/Work loop hoặc tích hợp engine. Một số tư thế làmviệc là bánthân để đọc độngtác, không phải framefullbody dùng trực tiếp. Không báo72ôhình là72spriteasset sản xuất hoặc animation đã chạy.

NPC-03 toàncục chuyển **một phần**;12NPCV01 có concept, chưa toànbộ82NPC. GiữNPC-02 mộtphần; tổng525mục:128hoànthiện /14mộtphần /383chưathiếtkế. Bước sau nếu tiếp tục làNPC-04 vịtrí/tuyến sinh hoạt và cách tìm lại; không tự mởtruyện vùng sau.

## Kiểm tra bàn giao

Đã xem các bảng tạo ra để kiểmmã/diệnmạo/đạo cụ; bảnSella mịn đầu tiên không chọn. Kiểm12filePNG khácnhau, kích thước/hash trongmanifest, tranggallery tìmngười/mởảnh/Esc và liênkếthồsơ; giữnhãnconcept khi cậpnhậtchecklist. Chưa kiểm nativepalette/animation/FPS vì chưa có dữliệu tươngứng.

