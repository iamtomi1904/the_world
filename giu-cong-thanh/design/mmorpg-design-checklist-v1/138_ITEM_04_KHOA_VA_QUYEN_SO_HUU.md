# ITEM-04 — Binding và quyền sở hữu

**Ngày:**21/10/2026 · **Trạng thái:** Hoàn thiện đặc tả thiết kế V1 trong phạm vi mục; chưa code, vẽ asset hoặc kiểm thử gameplay.

**Phạm vi:** MMORPG Ẩn Thành, web/PC, PostgreSQL và server có thẩm quyền. Tham chiếu [quyền sở hữu16](16_PROD_07_SO_HUU_VA_TIEN_DO.md), [hệ nghề28](28_HE_CHUNG_TOC_CHUC_NGHIEP_TRANG_BI.md), [hotbar64](64_HOTBAR_13_O_KY_NANG_VAT_PHAM.md), [hồi sinh104](104_COMBAT_13_CHET_VA_HOI_SINH.md).

## 1. Phân biệt ba trục

Binding là quyền chuyển chủ; khóa an toàn là ý định bảo vệ của người chơi; reservation là giữ món trong giao dịch. Không dùng cùng icon/boolean cho cả ba. Khóa account luôn mang serverId vì MMORPG không chuyển tài sản liên server bản đầu. Ví Tinh Thạch toàn game vẫn độc lập với binding vật phẩm.

| Binding | Kho account cùng server | P2P/chợ | Đổi nhân vật |
|---|---|---|---|
| UNBOUND | Có | Có nếu action được phép | Có qua kho |
| ACCOUNT_SERVER | Có | Không | Có qua kho |
| CHARACTER | Không | Không | Không |
| QUEST_CHARACTER | Journal riêng | Không | Không |

Khóa khi nhặt áp ngay grant; khóa khi trang bị chỉ chuyển sau xác nhận và commit mặc thành công. Tân binh cố mặc sai nhánh không bị khóa đồ. Trang bị sinh hoạt thông thường đề xuất UNBOUND→CHARACTER khi mặc; thưởng truyện dùng CHARACTER; đồ sưu tập account dùng ACCOUNT_SERVER. Độ hiếm không tự quyết binding, từng nguồn phải khai báo.

## 2. Khóa không giảm

UNBOUND có thể tăng khóa, ACCOUNT_SERVER có thể thành CHARACTER khi dùng nếu definition yêu cầu; không tự giảm chiều ngược lại. Tháo đồ, reset skill, chết/hồi sinh, thay skin và đổi client không mở khóa. Không có vật phẩm trả phí mở khóa trong bản đầu.

## 3. Lore và UI

Khóa do đăng ký trang bị cứu hộ/hội trạm là giải thích nhẹ trong thế giới, không nói mọi đồ chứa linh hồn. Tooltip ghi “Khóa nhân vật khi trang bị — không thể giao dịch sau đó”; khi mặc lần đầu hiện tên món và tác động. Dùng icon mắt xích cho binding, ổ khóa cho bảo vệ, đồng hồ cát cho thời hạn; hover/keyboard focus đều có chữ giải thích.

## 4. Nhiều người chơi

Server kiểm cả binding lẫn owner, revision, trạng thái escrow, điều kiện người nhận và cùng miền kinh tế. Mail/guild/kho/công thức đều dùng cùng policy; gọi API trực tiếp không bỏ qua được. Đồ account không được gửi nhân vật khác account bằng cách nhập tên giống nhau.
