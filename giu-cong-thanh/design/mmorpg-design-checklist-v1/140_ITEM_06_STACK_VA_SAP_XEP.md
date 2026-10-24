# ITEM-06 — Stack, tách gộp và sắp xếp

**Ngày:**21/10/2026 · **Trạng thái:** Hoàn thiện đặc tả thiết kế V1 trong phạm vi mục; chưa code, vẽ asset hoặc kiểm thử gameplay.

**Phạm vi:** MMORPG Ẩn Thành, web/PC, PostgreSQL và server có thẩm quyền. Tham chiếu [quyền sở hữu16](16_PROD_07_SO_HUU_VA_TIEN_DO.md), [hệ nghề28](28_HE_CHUNG_TOC_CHUC_NGHIEP_TRANG_BI.md), [hotbar64](64_HOTBAR_13_O_KY_NANG_VAT_PHAM.md), [hồi sinh104](104_COMBAT_13_CHET_VA_HOI_SINH.md).

## 1. Cấu hình V1

Nguyên liệu999/stack; thuốc, thức ăn và vật tư thường99; Ấn Hồi Sinh20 theo104; gear và hộp có quà roll riêng1. Vé sự kiện theo definition, mặc định99. Đây là giới hạn thiết kế có thể chỉnh trong cấu hình, không hardcode UI. Vật chứng journal không dùng slot túi. Không có trọng lượng trong bản đầu.

Chỉ gộp nếu template/version tương thích, binding và owner scope giống, cùng quality, cùng thời điểm hết hạn chính xác, cùng trạng thái nội dung container và metadata có ý nghĩa. Không làm tròn thời hạn để gộp; không trộn roll, item khóa với tự do hoặc món đang reserved. Món khóa an toàn khác nhau không tự gộp.

## 2. Thao tác

Shift+kéo mở tách stack ngoài vùng combat khi UI đang focus; nhập số1…quantity−1, có phím xác nhận/hủy. Menu Tách là đường thay thế, không bắt buộc drag. Tách giữ expiry/binding/nguồn/revision; cần slot trống. Gộp có thể chuyển một phần đến stack đích tối đa, phần dư ở nguồn; server trả số thực chuyển.

Sắp xếp theo nhóm→cấp yêu cầu→tên→expiry, có chọn ưu tiên món sắp hết hạn. Sort chỉ đổi vị trí hiển thị/vị trí container đã xác nhận, không tự gửi đồ kho/phân giải. Túi có bộ lọc, không phải mỗi tab tăng dung lượng. Các ô ghim người chơi giữ vị trí sau sort.

## 3. Dùng từ hotbar

Hotbar tham chiếu loại consumable và policy ưu tiên trong túi, không cố bám stackId đã bị gộp. Ưu tiên món hết hạn sớm rồi binding chặt hơn, nhưng không tự tiêu món khóa an toàn. Không dùng hàng trong kho/mail/escrow. Số lượng trên ô là tổng hợp lệ; hết đồ vẫn giữ shortcut mờ và ghi0. Cooldown theo useAction/group, không reset do đổi stack.

## 4. Các ca kiểm

Túi đầy nhưng có stack tương thích vẫn nhận đến giới hạn; expiry khác không gộp; sort không nhân đồ; dùng đồng thời khi tách chỉ một revision thắng; đồ sắp hết hạn được hiển thị rõ. Xung đột Shift với di chuyển không phát sinh vì cửa sổ nhận focus và chặn input gameplay theo quy tắc UI hiện có.
