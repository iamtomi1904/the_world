> **Sprite alpha vào scene · 23/10/2026:** [Bàn giao230](230_MAP_V01_SPRITE_ALPHA_VA_CAN_GROUND_THU_R001.md) · [Scene r002](/design-preview/v01-p0-scene-r002/index.html). Con Người bốn hướng alpha, atlas draft96/ground(48,80), đổi hướng và bóngsurface; chưa pixel cleanup/clipđi/mũ. Elf/Lùn vẫnproxy; giữ525=128/14/383, chưaG1–G5đạt.

# Map 1 — Pose bước Con Người và quy tắc chuyển động

**23/10/2026 · Đã vẽ keypose tham chiếu, chưa animation native.** [Xem bảng](/design-preview/v01-human-walk-r001/index.html) · [Trang phục228](228_MAP_V01_TRANG_PHUC_NHAT_QUAN_VA_MU_TAN_BINH.md) · [Brief226](226_MAP_V01_BO_MAU_CHOT_HINH_VA_LAT_CAT_P0.md).

## 1. Phần đã vẽ

Một bảng bốn hình tân binh Con Người: trước, trái, sau, phải, với động tác bước có chân trước/sau và tay vung. Nhận diện theo hàng Con Người của body r002: tóc nâu, áo vải trắng ngà, áo da nâu ngắn, thắt lưng ngang, quần ô-liu, giày nâu. Không dây chéo/túi, chưa mũ, không vũ khí nghề.

Bốn hình là **bốn hướng của pose bước**, không bốn thời điểm nối nhau. Chưa có pose bước Elf/Lùn, không nhân bằng scale hoặc lật để giả đủ bộ. Bảng này không thay các hình Idle đã lưu.

## 2. Kiểm trực quan và điều cần sửa

- Đủ bốn hướng, tay/chân/đầu không cắt biên; động tác khác Idle và trang phục không phát sinh túi hoặc giáp.
- Hướng ngang đọc rõ chân trước/sau; mặt trước và mặt sau thể hiện bàn chân ở độ sâu khác nhau.
- Tỷ lệ đầu–thân, dáng tóc và độ dài bước chưa khớp chính xác body Idle r002. Cần chỉnh trên nguồn dùng chung trước khi coi các pose cùng một clip.
- Prompt đặt một pha chân chủ đạo, nhưng chưa xác nhận bằng nguồn layer rằng bốn hình cùng chân trái/phải ở cùng thời điểm. Không báo đạt phase consistency chỉ từ cảm giác hình.
- Bóng vẽ và nền kem chưa tách; chân ground, sourceSize và socket chưa chuẩn hóa. Profile và góc nhìn xuống cần thử cùng camera.

Giữ làm concept động tác, chưa crop/resize rồi nạp vào scene. Không phát tuần tự bốn ảnh đổi hướng để gọi là walk loop.

## 3. Khung thiết kế chu kỳ đi sau này

| Pha | Ý đồ chuyển động | Yêu cầu về hình và logic |
|---|---|---|
| Contact A | Một gót trước đặt xuống, chân sau kết thúc chống | Tay vung đối chân, ground actor ổn định |
| Down A | Tiếp nhận trọng lượng | Thân hạ nhẹ bằng pose, không hạ tọa độ mặt đứng |
| Passing A | Chân sau đi qua chân chống | Đọc được đầu gối/giày, không dính hai chân |
| Up A | Chuẩn bị đổi chân | Không biến bước thành nhảy/running vì nhấc quá cao |
| Contact B và nửa còn lại | Đổi chân, trở về Contact A | Giữ chiều dài chân/vải/đầu; khép loop không giật |

Đây là cấu trúc pha, không chốt số frame bắt buộc hay FPS. Có thể phân bố key/inbetween theo kiểm chuyển động ở native. Không tự thay tốc độ di chuyển game để hợp một hình vẽ. Tốc độ clip phải được thử cùng quãng đường thực, không sửa animation tick thành logic bước chân dịch chuyển actor.

## 4. Ground, hướng và chuyển trạng thái

Controller quyết định vị trí và surface. Animation chỉ trình bày theo trạng thái/tốc độ; không cộng thêm vị trí mỗi frame ảnh. Ground giữ một gốc, dao động đầu/thân nằm trong pose. Khi chân đã tiếp đất cần kiểm trượt tương đối nền qua cả clip, không chỉ một ảnh.

Đi chéo chuẩn hóa vector, hướng sprite chọn theo thiết kế bốn hướng hiện hành; aim độc lập. Có vùng ổn định hướng/hysteresis trong cấu hình khi cần để tránh đổi qua lại ở biên, nhưng ngưỡng chưa đặt tùy ý trước kiểm. Đổi hướng không reset phase chân mỗi tick. Idle→Move mở clip theo quy tắc đã chọn; Move→Idle về hướng đang nhìn, không về mặt trước mặc định. Hurt/Attack/Cast cần hợp đồng ưu tiên riêng của bộ kỹ năng trước tích hợp, không tự cho đánh bị hủy vì đi.

Tóc/mũ theo head socket từng pose. Mũ không dùng vị trí đầu của Idle cho mọi frame bước. Bóng riêng bám đúng surface, không dính trong sheet; không tạo hai bóng khi engine có đèn. Các điều trên là đặc tả, chưa có controller/animation hoạt động mới trong game.

## 5. Bàn giao và bước chuẩn hóa

`public/design-preview/v01-human-walk-r001/human-walk-keys__r001.png` tạo bằng **image_gen tích hợp**, tham chiếu `v01-novice-fit-r002/novices-body__r002.png`. [provenance.json](/design-preview/v01-human-walk-r001/provenance.json) lưu nguồn, prompt, kích thước, hash và nhận xét; `prompt.txt` lưu nguyên brief. Giữ nguồn sinh, không ghi đè hình Idle.

Thứ tự tiếp theo: thống nhất body/mũ/pose trên một nguồn → xuất native alpha/sourceSize/ground → thử Idle và pose trong scene → vẽ đủ pha cùng hướng → loop kiểm chân/camera → mới nhân hướng/race theo khả năng tái sử dụng thật. Không buộc vẽ tất cả animation trước khi xem một body đúng tỷ lệ trên nền.

## 6. Checklist hiện tại

- [x] Vẽ bốn hướng pose bước Con Người tham chiếu theo226.
- [x] Kiểm đủ hình, nhận diện trang phục và ghi lệch tỷ lệ/phase cần sửa.
- [x] Thiết kế pha đi và hợp đồng ground/hướng/mũ/trạng thái.
- [ ] Chuẩn hóa body Idle–bước và mũ trên cùng nguồn layer.
- [ ] Xuất sprite thử native đúng preset, có alpha/pivot và kiểm camera.
- [ ] Vẽ/kiểm chu kỳ đi hoàn chỉnh, không phát đổi hướng làm giả animation.
- [ ] Tích hợp scene và đo trượt chân, occlusion, clipping trên web/PC.

Giữ525=128hoàn thiện/14một phần/383chưa thiết kế. Gói226 có concept body/mũ/pose bước nhưng chưa native, animation hoặc nghiệm thu G1–G5. Scene kỹ thuật vẫn dùng proxy cũ. Không sửa class/combat/DB/thủ thành hoặc truyện ngoàiMap1.
