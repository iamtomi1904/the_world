# ITEM-07 — Bảo vệ vật phẩm khỏi thao tác nhầm

**Ngày:**21/10/2026 · **Trạng thái:** Hoàn thiện đặc tả thiết kế V1 trong phạm vi mục; chưa code, vẽ asset hoặc kiểm thử gameplay.

**Phạm vi:** MMORPG Ẩn Thành, web/PC, PostgreSQL và server có thẩm quyền. Tham chiếu [quyền sở hữu16](16_PROD_07_SO_HUU_VA_TIEN_DO.md), [hệ nghề28](28_HE_CHUNG_TOC_CHUC_NGHIEP_TRANG_BI.md), [hotbar64](64_HOTBAR_13_O_KY_NANG_VAT_PHAM.md), [hồi sinh104](104_COMBAT_13_CHET_VA_HOI_SINH.md).

## 1. Hai lựa chọn

Yêu thích dùng hình ngôi sao để lọc/ghim, không phải bảo vệ. Khóa an toàn dùng ổ khóa, chặn bán, phân giải, bỏ, tiêu thụ, đưa vào công thức, gửi thư/chợ/giao dịch và chuyển khỏi chủ sở hữu hiện tại. Vẫn cho mặc/tháo và chuyển túi↔kho của cùng account khi binding cho phép; không thay quyền chuyển chủ của binding.

Gear đang mặc tự được bảo vệ khỏi thao tác phá hủy, muốn bán phải tháo trước. Đồ quan trọng do hệ thống bảo vệ (vật chứng, món duy nhất phục vụ quest) không có nút mở khóa thường. Chưa dùng độ hiếm làm ngưỡng xác nhận trước khi GEAR-03 chốt; hiện kiểm theo action destructive, item unique và explicit highValue tag.

## 2. Luồng UI

Chọn món → menu Khóa/Mở khóa. Mở khóa là một thao tác có xác nhận tên món, không bấm lặp cùng vị trí để vừa mở vừa phá. Tooltip phân biệt “khóa an toàn do bạn bật” với “khóa nhân vật”. Thao tác hàng loạt bỏ qua đồ mặc, an toàn khóa, quest và favorite mặc định; cho xem danh sách trước commit, không có nút bán tất không preview.

## 3. Bảo vệ phía server

Kiểm lock revision cả lúc preview và commit. Hai tab: tab A khóa, tab B còn màn bán cũ → commit bị từ chối, không trừ/thu đồ. Không cho hotbar dùng consumable đã khóa chỉ vì shortcut đã tồn tại trước đó. Tắt favorite không mở safety lock; reset UI/đăng nhập không làm mất khóa.

## 4. Nhật ký và hỗ trợ

Bán/phân giải có receipt chứa itemId, số lượng, nguyên nhân, phiên bản và kết quả. Mục mua lại bán nhầm chỉ xuất hiện khi shop được thiết kế, không hứa mọi action được hoàn tác. Đồ đã phân giải không tự khôi phục chỉ bằng nút UI; hỗ trợ phải đối chiếu receipt để tránh nhân bản.
