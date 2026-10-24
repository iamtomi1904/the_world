> **Điều chỉnh nhân vật có hiệu lực · 22/10/2026:** [Hồ sơ 208](208_DIEU_CHINH_NHAN_DIEN_VU_KHI_VA_HGD_DI_BO.md) thay các mô tả xung đột: HGD dùng kỹ năng khi đi bộ; VAN giáo + khiên; PRI thánh thư + trượng chữ thập; xạ thủ Người Lùn dùng nỏ/bẫy; có trang bị mũ. PAL/DKN vẫn cần ngựa. Ảnh là 2D pixel cho thế giới 2.5D.

# ART-03 r002 — Vẽ lại theo cây chủng tộc, nghề và nhánh

Ngày: 22/10/2026. Bản vẽ ba class cũ đã hết hiệu lực về hệ nhân vật. Đây là bản concept mới bằng image_gen tích hợp, giữ hướng pixel V4 phục vụ thế giới 2.5D; không thay thủ thành.

## 1. Tạo nhân vật và nghề nền

Tạo nhân vật chọn **Con Người / Elf / Người Lùn**, đều là **Tân Binh** cấp 1–14. Cấp 15 chọn một trong bảy nghề hợp chủng tộc, cấp 30 chọn nhánh hợp lệ. Ba bộ kiếm/cung/trượng tập không phải ba class khởi tạo.

![Ba chủng tộc và bảy nghề nền](/design-preview/art03-current-tree-v2/races-professions__r002.png)

Đọc ảnh từ trái qua phải: hàng trên HUM Con Người, ELF Elf, DWF Người Lùn, KNI Kỵ Sĩ, WAR Chiến Binh; hàng dưới SWD Kiếm Sư, MAG Pháp Sư, ARC Cung Thủ, SPI Tinh Linh, PRI Mục Sư. Mỗi nghề chỉ dùng một race làm mẫu, không có nghĩa nghề đó độc quyền race ấy.

Quyền nghề: Con Người cả bảy; Elf Kiếm Sư/Pháp Sư/Cung Thủ/Tinh Linh/Mục Sư; Người Lùn Chiến Binh/Kiếm Sư/Pháp Sư/Cung Thủ. Có 16 tổ hợp race/nghề. Tinh Linh là nghề, Elf là chủng tộc.

## 2. Mười chín nhánh

![Bảng concept 19 nhánh](/design-preview/art03-current-tree-v2/branches-19__r002.png)

Ảnh đọc trái sang phải, trên xuống dưới, theo đúng thứ tự bảng bên dưới. Tổng 19 nhận diện nhánh, 28 tổ hợp race/nhánh: Người 14, Elf 9, Lùn 5.

| Mã | Nhánh cấp 30 | Nghề cấp 15 | Chủng tộc hợp lệ | Vũ khí nhận diện |
|---|---|---|---|---|
| PAL | Thánh Kỵ Sĩ | Kỵ Sĩ | Người | Trọng kiếm, ngựa |
| DKN | Hắc Kỵ Sĩ | Kỵ Sĩ | Người | Trọng kiếm, ngựa |
| HGD | Hộ Vệ Thánh | Kỵ Sĩ | Người | Búa chiến một tay + khiên lớn, đi bộ |
| VAN | Tiên Phong | Chiến Binh | Người, Lùn | Giáo |
| BER | Cuồng Chiến | Chiến Binh | Người, Lùn | Rìu |
| WND | Phong Kiếm Khách | Kiếm Sư | Người | Kiếm và bao kiếm |
| ASN | Sát Thủ | Kiếm Sư | Người, Elf | Song đoản đao |
| HSW | Kiếm Sĩ Trọng Kiếm | Kiếm Sư | Lùn | Trọng kiếm |
| THU | Lôi Pháp Sư | Pháp Sư | Người, Elf | Trượng sấm |
| FIR | Hỏa Pháp Sư | Pháp Sư | Người, Elf | Trượng hỏa |
| WAT | Thủy Pháp Sư | Pháp Sư | Người, Elf | Trượng thủy |
| NEC | Pháp Sư Tử Linh | Pháp Sư | Người | Ma đạo thư |
| LGT | Pháp Sư Ánh Sáng | Pháp Sư | Elf | Trượng lăng kính |
| DRK | Pháp Sư Bóng Tối | Pháp Sư | Elf | Trượng khuyết |
| EAR | Thổ Pháp Sư | Pháp Sư | Lùn | Trượng đá |
| ARC | Cung Thủ | Cung Thủ | Người, Elf, Lùn | Cung |
| SPI | Tinh Linh | Tinh Linh | Người, Elf | Trượng khế ước |
| PRI | Mục Sư | Mục Sư | Người | Thánh trượng |
| WOD | Pháp Sư Mộc | Mục Sư | Elf | Trượng mộc |

## 3. Đồng bộ trang bị và thú cưỡi

- Kỵ Sĩ cơ bản và Thánh/Hắc dùng kỹ năng nghề khi cưỡi ngựa; Hộ Vệ Thánh dùng kỹ năng khi đi bộ. Không lấy dạng R thủ thành làm luật MMO.
- Thánh/Hắc Kỵ Sĩ dùng trọng kiếm hai tay; dáng concept đang giữ kiếm một tay khi nghỉ, không cấp quyền khiên hoặc vũ khí phụ. Cần dựng pose đánh hai tay khi làm animation.
- Giáp ngựa minh họa motif nhánh; khi sản xuất phải có layer theo set đang mặc. Cánh tiến hóa và biến thể từng con ngựa chưa vẽ trong hai bảng này. Hộ Vệ Thánh không có nội tại cánh của hai nhánh kia.
- Sát Thủ dùng bộ song đoản đao chiếm hai tay. Tử Linh dùng ma đạo thư; Bóng Tối dùng trượng. Ánh Sáng là pháp sư công kích, Mộc là nhánh healer, Tinh Linh dùng khế ước.
- Ngoại hình minh họa không khóa giới tính, tóc, mặt hoặc màu da. Cùng món đồ có thể khác profile hình ảnh nhưng không nhân bản chỉ số.

## 4. Tình trạng thực tế và phần còn phải làm

Đã vẽ hai bảng: ba body Tân Binh, bảy mẫu nghề, 19 mẫu nhánh. Đã kiểm thứ tự, số nhân vật, vũ khí nhận diện, ba kỵ sĩ có ngựa và thân Lùn khác thân Người. Hai ảnh là concept phóng lớn, không phải sprite native 40px, không phải bản rig đã nghiệm thu.

Chưa vẽ đủ 16 bộ race/nghề và 28 bộ race/nhánh; chưa có bốn hướng, Idle/Move/Attack/Cast/Hurt/Death, cánh ngựa, layer trang bị, VFX hoặc avatar cận mặt. Cần chuẩn hóa pixel native, điểm cầm hai tay, tỷ lệ ngựa/người và thử trong camera 2.5D trước sản xuất. Phép thuật trên đầu trượng trong concept là motif minh họa, không xác lập VFX luôn bật.

ART-03 vẫn là hồ sơ nhận diện đã thiết kế; không đánh dấu toàn bộ asset production hoàn thành. Tiến độ giữ **114 hoàn thiện hồ sơ / 8 một phần / 391 chưa thiết kế = 513**. Không sửa gameplay, skill, database hay thủ thành.

## 5. Nguồn và bàn giao

[Cây quyền nghề và trang bị](28_HE_CHUNG_TOC_CHUC_NGHIEP_TRANG_BI.md), [đặc tả nhận diện](33_ART_03_NHAN_DIEN_TOAN_CAY_NGHE.md), [19 bộ kỹ năng](114_SKILL_01_HO_SO_19_NHANH.md).

[Mở trang xem ảnh và bảng tên](/design-preview/art03-current-tree-v2/index.html). [Prompt đầy đủ](/design-preview/art03-current-tree-v2/prompts.json). [Manifest: nguồn, kích thước và SHA256](/design-preview/art03-current-tree-v2/manifest.json). Ảnh ba class cũ chỉ lưu lịch sử, không dùng làm mẫu sản xuất hiện hành.
