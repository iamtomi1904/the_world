> **Pose bước Con Người · 23/10/2026:** [Hồ sơ229](229_MAP_V01_POSE_BUOC_CON_NGUOI_VA_QUY_TAC_CHUYEN_DONG.md) · [Xem bốn hướng bước](/design-preview/v01-human-walk-r001/index.html). Đã có concept, chưa walk loop/native; cần khớp tỷ lệ Idle và phase chân. Giữ525=128/14/383; scene còn proxy.

# Map 1 — Trang phục nhất quán và mũ tân binh

**23/10/2026 · Hai bảng concept, chưa native/layer game.** [Xem và đổi bảng](/design-preview/v01-novice-fit-r002/index.html) · [Bảng gốc227](227_MAP_V01_BA_TAN_BINH_BON_HUONG_CONCEPT_R001.md).

## 1. Quyết định chỉnh trang phục

Làm bản r002 riêng, giữ ba nhận diện/thân/tóc/râu và thứ tự trước–trái–sau–phải. Để bộ kiểm không bị lỗi dây chéo/túi xuất hiện sai hướng, **bỏ dây chéo và túi ngoài ở trang phục fixture này**, giữ áo vải/áo da/quần/giày và thắt lưng ngang. Không xóa ý tưởng vật phẩm túi hoặc dây đeo khỏi MMORPG; chúng sẽ cần sơ đồ layer riêng nếu được đưa vào trang bị.

Khóa thắt lưng nằm ở trước; lưng không có khóa thứ hai. Các hướng ngang chỉ thấy phần khóa gần phía bụng phù hợp hình chiếu. Không coi bỏ phụ kiện là đã giải quyết công nghệ gắn layer; đây là đơn giản hóa tạo hình để kiểm body trước.

## 2. Thiết kế mũ tân binh

Một kiểu **mũ vải mềm nâu ô-liu, vành nâu hẹp, lưỡi ngắn phía trước**, không lông chim, biểu tượng phe hoặc đặc trưng nghề. Bảng12đầu thử trên Con Người/Elf/Người Lùn qua bốn hướng. Đây là một thiết kế trang bị dùng chung, có phần hình tương thích thân; không tạo ba item độc lập hoặc stat theo race.

| Thân | Cách chỉnh vừa đầu | Điều cần giữ |
|---|---|---|
| Con Người | Mũ ôm tóc ngắn; băng nằm phía trên đường chân mày | Mặt không bị vành che, tóc không xuyên thân mũ |
| Elf | Mũ nằm trên tai, tóc buộc thoát dưới mép sau | Tai vẫn đọc được, không vẽ tai vào chính texture mũ |
| Người Lùn | Dáng mũ rộng vừa đầu, không scale to cả thân | Tóc mai/râu không bị thay đổi chỉ vì đội mũ |

Bảng fitting là portrait đầu/vai; mức chi tiết lớn hơn hình toàn thân. Cần vẽ lại mũ ở mật độ sprite native, không cắt/thu portrait để dùng làm overlay. Không thay portrait NPC hoặc UI tạo nhân vật bằng các đầu này khi chưa thiết kế riêng.

## 3. Kiểm trực quan hai bảng

- Bản body r002 bỏ dây chéo/túi ngoài ở cả12hình; vẫn có ba thân, bốn hướng và toàn bộ chân trong khung.
- Bản mũ có12đầu/bốn hướng, cùng họ vật liệu và lưỡi mũ trước, tai Elf lộ và tóc sau có lối thoát.
- Hình tóc, độ phồng mũ và đường may còn khác nhẹ giữa hướng; cần chỉnh một nguồn vẽ thống nhất trước native. Hai bảng không cùng hệ tọa độ/frame, không thể đặt chồng chính xác lên nhau.
- Hướng ngang và chiều nhìn từ trên vẫn cần kiểm với camera scene. Không dùng ảnh portrait này để quyết góc35/45/55 hoặc chiều cao sprite.
- Không có animation, pose bước, head socket, alpha overlay hoặc mask tóc đã hoạt động. Không tuyên bố bộ mũ đã trang bị được trong game.

## 4. Hợp đồng lắp mũ khi chuẩn hóa

Body giữ ground; đầu có head socket theo hướng/pose; mũ neo theo đầu chứ không tâm canvas. Frame nguồn/trim/offset được lưu; đổi mũ không làm actor nhảy chân. Mũ có hình trước/sau/phần cạnh cần thiết theo hướng, không áp một ảnh trước cho mọi hướng.

Kiểu tóc khai báo phần tóc nằm dưới mũ và phần còn lộ; dùng mask/biến thể tóc tương thích thay vì xóa toàn bộ tóc hoặc cắt cả tai. Quy tắc lộ tai ở đây dành cho mũ vải này; không mặc định mọi loại mũ giáp sau này phải lộ tai. Trang bị khác cần quy tắc riêng theo silhouette.

Điểm status ở đầu và bounds nhìn được tính theo bộ actor, nhưng mũ không tự đổi collider, hitbox hoặc stat. Chỉ số và quyền trang bị tham chiếu hệ item hiện hành, không sinh công thức mới từ ảnh. Khi mũ bị che sau mái/tán, xử lý occlusion cùng actor; không làm riêng mũ sáng xuyên tường.

## 5. File và provenance

- `public/design-preview/v01-novice-fit-r002/novices-body__r002.png`: edit bảng227, không ghi đè bản cũ.
- `public/design-preview/v01-novice-fit-r002/novice-cap-fit__r001.png`: bảng fitting mới dùng227 làm tham chiếu.
- `body-prompt.txt`, `cap-prompt.txt` và [provenance.json](/design-preview/v01-novice-fit-r002/provenance.json): prompt, nguồn, kích thước/hash và nhận xét.

Cả hai tạo bằng **image_gen tích hợp**, không CLI/API key riêng. Trang xem có hai nút đổi bảng, xem ảnh nguyên, tảiPNG và dẫn về hồ sơ. Đổi bảng chỉ là tra cứu thiết kế, không mô phỏng giả chức năng mặc đồ.

## 6. Checklist và bước tiếp

- [x] Vẽ bản body giản lược phụ kiện xuyên hướng, giữ nguồn r001.
- [x] Vẽ bảng fitting một mũ vải trên ba race/bốn hướng.
- [x] Ghi quy tắc head/mũ/tóc và điểm chưa đạt production.
- [ ] Vẽ bốn pose bước tham chiếu Con Người theo226.
- [ ] Chuẩn hóa nguồn native/body/mũ/mask/ground, thử với scene.
- [ ] Kiểm camera, alpha, clipping, ba thân và thay mũ khi có chuyển động.

Gói226 có thêm concept mũ, chưa lớp mũ rời, animation hoặc tích hợp game. Giữ525=128hoàn thiện/14một phần/383chưa thiết kế; chưa G1–G5đạt. Không sửa combat, item stat, database hoặc thủ thành; truyện chỉMap1. Tiếp theo là pose bước và chuẩn hóa thử một body trước nhân rộng.
