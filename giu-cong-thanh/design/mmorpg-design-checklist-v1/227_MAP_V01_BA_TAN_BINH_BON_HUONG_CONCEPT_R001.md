> **Trang phục/mũ tân binh · 23/10/2026:** [Hồ sơ228](228_MAP_V01_TRANG_PHUC_NHAT_QUAN_VA_MU_TAN_BINH.md) · [Xem hai bảng](/design-preview/v01-novice-fit-r002/index.html). Body r002 bỏ dây chéo/túi ở fixture, mũ vải fitting ba race/bốn hướng; chưa overlay/native/pose bước. Giữ525=128/14/383.

# Map 1 — Ba tân binh bốn hướng, concept r001

**23/10/2026 · Đã vẽ bảng tham chiếu, chưa sprite native.** [Xem bảng](/design-preview/v01-novices-r001/index.html) · [Brief226](226_MAP_V01_BO_MAU_CHOT_HINH_VA_LAT_CAT_P0.md).

## 1. Bảng hình đã bàn giao

Một PNG có12hình đứng toàn thân: hàng trên Con Người, giữa Elf, dưới Người Lùn; cột trước/trái/sau/phải. Trang phục tân binh gồm áo vải, áo da ngắn, quần/giày và túi dụng cụ; không vũ khí nghề, giáp nghề, biểu tượng phe hoặc phép thuật. Đây là ví dụ tạo hình, không khóa giới tính/tóc hay trang phục cho mọi người chơi.

Giữ phong cách pixel trưởng thành theo bảng người dùng đã chọn. Elf thanh và cao hơn trong bảng; Người Lùn thấp, rộng hơn, không scale để đầy ô. Tỷ lệ giữa các hàng vẫn là tham chiếu hình, chưa được chuẩn hóa thành đơn vị thế giới. Không thay ba race bằng ba nghề.

## 2. Kết quả kiểm hình

- Có đủ ba hàng/bốn hướng và chân/hair/ears không bị cắt ở biên ảnh.
- Các thân có cùng họ vật liệu, không ép race vào nghề15/nhánh30; Elf không bị mặc định cầm cung, Người Lùn không cầm rìu/nỏ.
- Dây đeo chéo ở hình trước chưa thể hiện nhất quán ở mặt sau; số/vị trí túi cũng cần chỉnh theo một sơ đồ trang bị qua bốn hướng. Không báo bộ này đã đạt consistency production.
- Các hướng ngang thiên về profile; cần thử sprite dựng với camera nghiêng trong scene để quyết định mức nhìn từ trên. Không tự coi bảng turnaround là góc chiếu cuối đã đúng.
- Bóng nền vẽ trong bảng chỉ để nhìn; khi chuẩn hóa phải tách khỏi sprite và chọn một giải pháp bóng bám surface, tránh bóng kép.
- Chưa có mũ tách lớp, pose bước, animation, alpha native, frame96×96 hoặc ground/socket chính xác. Không dùng grid ảnh để chia frame bằng phỏng đoán.

## 3. Nguồn và cách lưu

Ảnh `/design-preview/v01-novices-r001/novices-turnaround__r001.png` được tạo bằng **image_gen tích hợp**; tham chiếu style `art03-current-tree-v2/style-reference-approved-r006.png`. Prompt đầy đủ tại `prompt.txt`, cùng nguồn sinh/kích thước/hash và ghi nhận kiểm trong [provenance.json](/design-preview/v01-novices-r001/provenance.json). Không dùng CLI/API key riêng. Bản nguồn giữ nguyên, không ghi đè bảng class cũ.

## 4. Cách dùng vào bước tiếp theo

Chốt sơ đồ trang phục xuyên hướng: dây đi từ vai nào tới hông nào, túi ở bên nào, vị trí khóa lưng và chiều tóc. Sửa trên nguồn vẽ trước khi thu nhỏ; không lật máy cả hình có dây/túi bất đối xứng. Tạo sprite pixel native theo preset35 với layer và ground, không resize toàn ảnh rồi coi là sprite production.

Sau body, thiết kế mũ vải tương thích ba thân và bốn hướng; thêm bốn pose bước Con Người theo226. Kiểm với nền cỏ, cạnh nhà và trên cầu, có HUD13ô. Chưa cần nhân tất cả animation hoặc trang phục nghề cao cấp. Scene WebGL hiện vẫn dùng proxy; không thay bằng một crop chưa chuẩn hóa.

## 5. Checklist và tiến độ

- [x] Vẽ một bảng concept ba tân binh/bốn hướng.
- [x] Kiểm đủ hình, vai trò race và các điểm cần sửa; lưu prompt/nguồn.
- [ ] Sửa dây/túi xuyên hướng và xác nhận góc nhìn camera.
- [ ] Thiết kế mũ tách lớp và pose bước tham chiếu.
- [ ] Chuẩn hóa native/frame/pivot/alpha, không crop đoán.
- [ ] Đưa bộ thử vào scene và chốt tỷ lệ/framing theo bằng chứng.

Giữ525=128hoàn thiện/14một phần/383chưa thiết kế. Gói226 mới có phần concept body, chưa toàn bộ gói. Không G1–G5đạt, không sprite gameplay/animation production hoặc chỉnh thủ thành/database. Tiếp theo sửa consistency và làm mũ/pose bước, sau đó chuẩn hóa thử trong scene trước bộ nền.
