# Đồng bộ bảng phong cách với cây nhân vật hiện hành

Ngày 22/10/2026. Thay hình ba vai trò kiếm/cung/phép trong thẻ Pixel V4 bằng ba mẫu **Con Người / Elf / Người Lùn chưa chuyển nghề**. Nhân vật trong làng cũng chuyển sang trang phục Tân Binh, không vũ khí nghề. Giữ mức chi tiết pixel, palette và cảnh quan đã chọn cho hướng thế giới 2.5D.

![Bảng phong cách hiện hành](/design-preview/mmorpg-pixel-v4/styleboard-current-races-r002.png)

## Quy tắc đọc

- Cấp 1–14: Tân Binh, chọn chủng tộc khi tạo nhân vật.
- Cấp 15: chọn trong 7 chức nghiệp theo quyền chủng tộc.
- Cấp 30: chọn nhánh hợp lệ trong 19 nhánh; tổng 28 tổ hợp chủng tộc/nhánh.
- Ba hình mẫu không đại diện ba class và không khóa giới tính, tóc hay trang phục.
- Xem [bảng nghề và nhánh hiện hành](180_ART_03_VE_LAI_THEO_CAY_NGHE_R002.md) nếu liên kết tệp được thư viện phân giải; bản xem đầy đủ ở [trang cây nhân vật](/design-preview/art03-current-tree-v2/index.html).

## Bàn giao

Ảnh mới: `/design-preview/mmorpg-pixel-v4/styleboard-current-races-r002.png`. Ảnh cũ giữ để truy xuất lịch sử, thẻ Phong cách không dùng ảnh cũ nữa. Đây là concept tham chiếu, chưa phải sprite native, animation hay camera đã nghiệm thu. Không đổi gameplay thủ thành hoặc tiến độ 525 mục: 127 hoàn thiện / 12 một phần / 386 chưa thiết kế.

Tạo bằng image_gen tích hợp, chế độ chỉnh ảnh từ styleboard-refined-v4.png. Prompt đầy đủ:

```text
Edit this pixel art style reference board for An Thanh MMORPG. Preserve the exact approved medium-detail crisp pixel style, green/brass earthy palette, village landscape, trees, river, bridge, wolf, slime, props and palette swatches. Replace the THREE OLD CLASS HEROES on upper right with THREE UNARMED NOVICE RACE REPRESENTATIVES: left Human adult with normal round ears, middle Elf adult with clearly pointed ears and slender proportions, right Dwarf adult visibly shorter stockier with beard. All wear modest neutral travel clothing, no sword, shield, bow, staff or profession costume. They are race selection examples, NOT classes. Replace the sword/shield hero in the village with the same neutral human novice empty handed. No other changes. Retain three-quarter topdown pixel game perspective with readable silhouettes, no photorealism or painterly smoothing. No text, no class labels. This board illustrates races before level15 profession choice; keep it clear and restrained.
```
