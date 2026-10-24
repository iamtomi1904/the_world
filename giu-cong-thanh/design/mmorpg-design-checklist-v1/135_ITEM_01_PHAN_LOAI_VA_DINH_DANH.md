# ITEM-01 — Phân loại và định danh vật phẩm

**Ngày:**21/10/2026 · **Trạng thái:** Hoàn thiện đặc tả thiết kế V1 trong phạm vi mục; chưa code, vẽ asset hoặc kiểm thử gameplay.

**Phạm vi:** MMORPG Ẩn Thành, web/PC, PostgreSQL và server có thẩm quyền. Tham chiếu [quyền sở hữu16](16_PROD_07_SO_HUU_VA_TIEN_DO.md), [hệ nghề28](28_HE_CHUNG_TOC_CHUC_NGHIEP_TRANG_BI.md), [hotbar64](64_HOTBAR_13_O_KY_NANG_VAT_PHAM.md), [hồi sinh104](104_COMBAT_13_CHET_VA_HOI_SINH.md).

## 1. Quyết định

Một vật phẩm có đúng một nhóm chính để lọc túi; nhiều tag phụ phục vụ nghề, vùng, công thức và nhiệm vụ. Tiền nằm trong ví, không giả thành stack tiền trong túi. Quyền ngoại trang đã mở nằm ở bộ sưu tập; vật phẩm mở quyền chỉ tồn tại trước khi tiêu thụ. Không đưa vật phẩm thủ thành sang MMORPG.

| Nhóm chính | Nhánh | Ví dụ gắn thế giới | Vai trò |
|---|---|---|---|
| EQUIPMENT | weapon, armor, accessory, relic, tool | Kiếm Gác Cầu Lau | Mặc/cầm hoặc công cụ nghề |
| CONSUMABLE | recovery, food, cleanse, travel, resurrection | Băng Dược Cầu Lau; Ấn Hồi Sinh | Có hành vi dùng và điều kiện rõ |
| MATERIAL | ore, plant, fiber, monster, refined | Sợi Lau Khô; Quặng Hạ Lưu | Đầu vào công thức được khai báo |
| PROGRESSION | enhance, socket, evolution | Mảnh Khắc Ấn | Chỉ dùng khi hệ phát triển tương ứng phát hành |
| EVENT | ticket, exchange, quest | Thẻ Tiếp Tế mùa cụ thể | Có edition và chính sách kết thúc |
| CONTAINER | fixed, choice, random | Kiện Cứu Trợ Cầu Lau | Mở ra bảng quà có phiên bản |
| QUEST | evidence, key, letter | Bản Sao Lệnh Gác | Bằng chứng/chìa cá nhân, ưu tiên journal |
| COSMETIC | skin_unlock, dye, emote | Mẫu Vải Hội Trạm | Mở quyền, không cộng sức mạnh |

Tên mẫu minh họa không tự thêm nguồn farm, công thức, boss hoặc ngân sách asset. PROGRESSION chỉ là taxonomy, chưa coi hệ nâng đồ đã thiết kế xong.

## 2. Mã và tên

Dùng templateId ổn định dạng AT.MAT.V01.REED_FIBER, không nhét tên tiếng Việt hoặc giá trị chỉ số vào ID. ID không đổi khi sửa tên dịch. Phiên bản definition tách riêng. Món roll có instanceId riêng; stack có stackId. Tên hiển thị gồm tên gốc, cấp cường hóa và trạng thái khi cần; không dùng tên để nhận dạng duy nhất. Tag ví dụ region:V01, use:craft, material:plant, source:quest; tag nguồn là metadata, không tự cấp quyền thưởng.

## 3. Giao diện và hình ảnh

Túi T lọc theo nhóm, tìm tên/tag, có icon nhóm đơn sắc và nhãn chữ. Icon mới theo pixel V4: silhouette rõ, một vật chính, nền trong suốt, viền hiếm tách khỏi hình vật. Phân biệt nguyên liệu, vé và vật chứng bằng hình, không chỉ màu. Chưa vẽ icon ở giai đoạn này. Người chơi xem tên dễ hiểu; mã kỹ thuật chỉ trong công cụ quản trị.

## 4. Điều kiện bàn giao

Không definition nào thiếu nhóm chính; tiền không chiếm slot; đổi tên không làm mất hotbar; item quest không bị sort thành nguyên liệu. Taxonomy này không quyết định thang độ hiếm hoặc stat gear; GEAR-02…08 tiếp tục thiết kế riêng.
