# GEAR-03 — Độ hiếm và ngôn ngữ hình ảnh

**Ngày:**21/10/2026 · **Trạng thái:** Hoàn thiện đặc tả trong phạm vi mục. Chỉ thiết kế MMORPG, chưa code/vẽ/test gameplay.

**Đầu vào:** [Quyền sở hữu16](16_PROD_07_SO_HUU_VA_TIEN_DO.md), [nghề28](28_HE_CHUNG_TOC_CHUC_NGHIEP_TRANG_BI.md), [ngân sách81](81_STAT_11_NGAN_SACH_VA_MOC_CAN_BANG.md), [vật phẩm135–145](145_TONG_HOP_10_MUC_HE_THONG_VAT_PHAM.md).

## 1. Năm bậc

| ID | Tên | Màu viền tham chiếu | Dấu hình | Vai trò/nguồn định hướng |
|---|---|---|---|---|
| R0 | Thường | Xám sáng #B5BABE | Một nét | Gear nền, shop/quest/nguồn thường |
| R1 | Tinh luyện | Lục #77B77A | Hai nét | Craft/quest cải thiện, dễ tiếp cận |
| R2 | Hiếm | Lam #67A7DF | Tam giác nhỏ | Dungeon, tinh anh, nghề phù hợp |
| R3 | Sử thi | Tím #B38AD9 | Hình thoi | Thử thách dài hơn, recipe/nguồn đặc thù |
| R4 | Di sản | Hổ phách #D8AF61 | Huy hiệu nút ấn | Món có lịch sử kiểm chứng và tiến trình riêng |

Bảng này chốt tên/mã/motif, không tự cấp damage multiplier, số affix hoặc guaranteed proc. Số dòng/tier/weight cần GEAR-04/06/07; nguồn nào được rơi và tỷ lệ do LOOT chốt. Bản đầu mở R0–R3 khi có đủ definition; R4 là bậc được dành trong thiết kế, chưa thêm đồ vào bảng rơi hoặc shop.

“Di sản” không có nghĩa người chơi là người được chọn, không bắt là đồ của Edran hoặc chứa linh hồn. Một món lịch sử có thể là dụng cụ của cả cộng đồng. Bản chứng cứ về Oren vẫn là QUEST, không ép thành gear Di sản để khiến lựa chọn đạo đức đổi sức mạnh.

## 2. Tiếp cận và sức mạnh

Truyện chính có đường hoàn thành bằng đồ thường/quest theo81, không cần Sử thi/Di sản. Không bán rarity nâng sức mạnh bằng Tinh Thạch. Rarity không quyết binding: đồ R2 có thể tự do hoặc khóa tùy nguồn; item R0 quest vẫn có thể khóa nhân vật. Hộp may mắn trả phí không là nguồn mặc định.

Trạng thái UNIQUE_EQUIP là constraint riêng, không bậc rarity. Hai nhẫn cùng uniqueGroup không mặc đồng thời dù có rarity khác. Set là nhãn nguồn/setId, không làm mọi thành viên tự cùng màu hoặc cộng thêm một quỹ stat.

## 3. Icon, loot và thế giới2.5D

Pixel V4, màu viền + dấu hình + chữ, không chỉ dựa màu. R0/R1 không có cột sáng; R2 có vòng sáng nhỏ và âm báo cá nhân tùy chọn; R3 có vệt ngắn một lần, không particle lặp; R4 dự kiến motif nút ấn riêng khi được sản xuất. VFX loot không tạo collision, không che telegraph boss và có thể giảm bằng thiết lập hình ảnh.

Drop hiếm cá nhân không phát vị trí/toàn server mặc định. Chỉ thông báo cho chủ và party nếu chủ cho phép, không lộ tên người chơi ra cộng đồng chỉ vì nhận đồ. Khi loot đã vào grant chờ, thông báo dẫn đến hộp nhận chứ không đặt cột sáng giả dưới đất.

Ngoại hình món trên nhân vật phải phản ánh family/rig trước độ hiếm. Rarity cao hơn không tự phóng to vũ khí, thêm cánh hoặc glow che thân. Skin shop dùng huy hiệu cosmetic riêng, không giả màu R4 để hứa sức mạnh.

## 4. Nguyên liệu, consumable và vật chứng

Có thể dùng rarity cho nguyên liệu/consumable khi phản ánh nguồn thực, không suy hiệu quả thuốc từ màu. Item quest dùng badge Vật chứng thay rarity loot. UI sự kiện có edition/hạn rõ; đỏ cảnh báo thời hạn không là bậc hiếm thứ sáu.

## 5. Tiêu chí sau

Cần vẽ atlas viền/badge, thử đọc ở scale nhỏ và bảng màu thiếu sắc, kiểm20 aura/loot cùng cảnh. Chưa có asset đã vẽ hoặc kết quả tương phản; các mã màu là chỉ dẫn art để prototype, không chứng nhận mỹ thuật đã qua GATE-01.
