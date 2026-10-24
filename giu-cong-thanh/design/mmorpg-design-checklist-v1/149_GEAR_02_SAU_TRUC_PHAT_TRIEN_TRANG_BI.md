# GEAR-02 — Sáu trục phát triển của trang bị

**Ngày:**21/10/2026 · **Trạng thái:** Hoàn thiện đặc tả trong phạm vi mục. Chỉ thiết kế MMORPG, chưa code/vẽ/test gameplay.

**Đầu vào:** [Quyền sở hữu16](16_PROD_07_SO_HUU_VA_TIEN_DO.md), [nghề28](28_HE_CHUNG_TOC_CHUC_NGHIEP_TRANG_BI.md), [ngân sách81](81_STAT_11_NGAN_SACH_VA_MOC_CAN_BANG.md), [vật phẩm135–145](145_TONG_HOP_10_MUC_HE_THONG_VAT_PHAM.md).

## 1. Sáu khái niệm riêng

| Trục | Ý nghĩa | Không được nhầm |
|---|---|---|
| RequiredLevel | Cấp nhân vật tối thiểu | Không tự bằng itemLevel nếu definition có ngoại lệ |
| ItemLevel | Mốc ngân sách base và pool affix | Không phải số lần cường hóa |
| Rarity | Cấu trúc độ hiếm, nguồn và tiềm năng dòng | Không tự tăng mọi stat theo màu |
| CraftQuality | Chất lượng chế tác trong biên công thức | Không tự đổi rarity, chưa có bonus khi CRAFT chưa chốt |
| EvolutionStage | Nhánh hình/công thức tiến hóa của cùng họ | Không tự reset nâng/roll khi chưa có policy |
| EnhancementLevel | Số bậc nâng đã thực hiện | Không nâng RequiredLevel hoặc vượt cap nguồn bằng đổi nhãn |

Ở V1 ItemLevel gear tối đa45 dù nhân vật cap60. Không sinh gear46–60 chỉ để kéo dài grind; giai đoạn sau45 dùng tối ưu build, item mốc45 và hoạt động hiện có. Mốc ngân sách1/10/20/30/40/45 theo81; đồ chuyển chức15 thuộc mốc đặc thù cần GEAR-04 khai báo, không suy stat từ nội suy tùy ý.

## 2. Chính sách base và roll

Chốt hướng base stat cố định theo template/itemLevel/family/slot; ngẫu nhiên nằm ở affix được khai báo. Hai kiếm cùng template không roll thêm base attack bí mật. Phẩm chất chế tác V1 mặc định STANDARD; mở chất lượng khác chỉ sau khi có công thức và budget. Không bán vật phẩm đổi phẩm chất trong khi hệ chưa có.

Rarity không có hệ số nhân base toàn cục. Rare và Epic khác cấu trúc dòng/đặc tính được budget hóa trong GEAR-04…09; người chơi vẫn có thể chọn món rarity thấp hơn nếu phù hợp. Các chữ “tinh xảo” trong tên không thay CraftQuality bằng suy đoán.

## 3. Tiến hóa và nâng cấp

EvolutionStage ban đầu0; EnhancementLevel ban đầu0. Đây là trường dữ liệu, không tuyên bố cap nâng hoặc recipe đã hoàn thiện. Tooltip các hệ chưa phát hành không hiện nút khả dụng. Hệ tiến hóa sau phải công bố cái gì giữ: instance lineage, binding, affix, socket, enhance, hình; nếu mất thành phần phải preview trước xác nhận.

Không cho grade/quality mới tự reroll hết dòng, reset binding hoặc tạo hai món cũ/mới. Thay đổi chỉ số từ enhance vẫn thuộc gear budget45 theo81; không gọi một phần thành buff thường trực để né rare-rate5%/dòng.

## 4. Ví dụ đọc tên

“Trọng Kiếm Gác Trạm — cấp yêu cầu30 / itemLevel30 / Hiếm / STANDARD / tiến hóa0 / +0” mô tả sáu trục. Thêm+1 không tự thành itemLevel31; skin Thánh/Hắc không tăng rarity; nhân vật60 mặc món45 không tự scale item lên60. Tên này là minh họa giao diện, chưa chốt base stat.

## 5. Nghiệm thu thiết kế

UI dùng nhãn đầy đủ khi xem chi tiết, không xếp sáu con số ở tên ngắn. Sort cấp yêu cầu và sort itemLevel là hai lựa chọn khác nhau. Server lưu phiên bản template và các giá trị thực, không parse từ tên. Việc chưa chốt cap cường hóa thuộc UPGRADE, không làm thiếu định nghĩa của sáu trục ở mục này.
