# ROAD-03 — Rà soát nền chỉ số, slot và pipeline combat

**Ngày:**21/10/2026 · **Trạng thái:** Hoàn thiện rà soát thiết kế trong phạm vi chỉ số/slot/công thức. Chưa nghiệm thu gameplay, art, camera hoặc cân bằng. Không sửa thủ thành.

## 1. Nguồn dùng để rà soát

[Thuộc tính67](67_STAT_01_THUOC_TINH_GOC.md), [chỉ số68](68_STAT_02_CHI_SO_DAN_XUAT.md), [pipeline72](72_STAT_06_CONG_THUC_COMBAT.md), [cap73](73_STAT_07_TRAN_CHI_SO_VA_KHONG_CHE.md), [phòng thủ74](74_STAT_08_GIAM_GIAP_VA_XUYEN.md), [nội tại78](78_NOI_TAI_CHU_DAO_CUA_19_NHANH.md), [ngân sách81](81_STAT_11_NGAN_SACH_VA_MOC_CAN_BANG.md), [slot148](148_GEAR_01_SLOT_VU_KHI_VA_QUYEN_MAC.md), [base153](153_GEAR_05_CONG_THUC_CHI_SO_NEN.md), [affix154](154_GEAR_06_POOL_DONG_THUOC_TINH.md), [set159](159_GEAR_10_SET_DO_VA_BONUS.md), [tổng160](160_GEAR_11_NGAN_SACH_TONG_VA_GIOI_HAN_PHAT_TRIEN.md).

Các lớp gear đã được phác trước khi đóng ROAD-03; lượt này rà liên thông và cố định đầu vào cho công việc tiếp theo. Không sửa công thức chỉ để làm dấu kiểm đạt.

## 2. Kết quả đối chiếu

| Phần | Quyết định giữ | Bằng chứng trong hồ sơ |
|---|---|---|
| Cấp/điểm | Cap60, gear/nội dung45, AP177ở60/SP35/TP11 |67/91/118 |
| Root | STR/AGI/INT/VIT; không LUK để cộng AP |67/68 |
| Công và hồi phục | Đúng profile, Wm được heal đọc một lần |68/148/153 |
| Phòng thủ | School vật lý/phép tách khỏi element |69/72/74 |
| Pipeline | Raw→bonus→crit→defense→element→taken→block→floor→shield→HP |72 |
| Haste/pen | Union, cap100%; không mỗi5%là thêm5điểm hiệu lực |70/73/154 |
| Luck | Loot15%, dư sang critbonus; không tăng affix quality |70/154 |
| Slot |10vị trí;2Hchiếm tay phụ, songdao một bộ |148 |
| Affix | Base cố định, giới hạn slot/profile, tối đa1root+1special |152…156 |
| Proc/set | Đổi một ô R3, không thêm lên món đầy3dòng |158/159 |
| Phát triển | Nâng/khảm trong envelope, không quỹ riêng |160 |
| Hình ảnh | Skin/giápngựa/cánh không là nguồn stat |34/163 |

Chưa có một engine/scene2.5D được nghiệm thu qua việc đọc bảng này. Permission và dữ liệu cần được triển khai server-authoritative, không có logic gameplay mới trong lượt này.

## 3. Số đã kiểm lại

Cấp45,90APSTR/42APVIT: N13,STR103,VIT55,INT13. Không đồ:2600HP,288MP,304công,95,2armor/MRes. Bộ R0heavy/2H/trang sức45:4060HP,360MP,534công,355,2armor và235,2MRes. Gear cùng mẫu không scale lên itemLevel60khi nhân vật lên60.

Ví dụ pipeline72: raw1500,crit1,5,defense hiệu lực300,K400,E1,DR20%,block40%,floor617; shield200thì mất417HP. Hai nguồn5%Unioncho9,75%. Bộ set45có P32,40, bonusWATCH=floor(5P)=162. Mỗi phép kiểm dùng Decimal, không làm tròn từng bước ngoài rule đã ghi.

Mẫu này chỉ xác nhận số có thể dựng lại, không chứng minh mốc DPS/TTK của81đã đạt. Kết quả tổ hợp11.934ở157là kiểm thiết kế cũ, không gọi lại thành test runtime mới.

## 4. Ranh giới duyệt

ROAD-03 được hoàn thiện **về hợp đồng số và slot**. GATE-01, ART-01/02/04, ROAD-02 và các kiểm UI còn mở. GEAR-11 có gate cân thử nhưng chưa có kết quả combat. ITEM-12 vẫn chưa đủcatalog, LOOT/CRAFT/SOCKET/UPGRADE/PAY chưa được hoàn thiện từ việc có liên kết.

Bước tiếp theo đúng thứ tự là CUR-01: tên/mã/đơn vị/cách hiển thị và icon tiền. Theo yêu cầu “đến mục nào vẽ thì dừng”, chỉ chuẩn bị nội dung và brief icon, không tự vượt qua phần vẽ để làm CUR-02…08.
