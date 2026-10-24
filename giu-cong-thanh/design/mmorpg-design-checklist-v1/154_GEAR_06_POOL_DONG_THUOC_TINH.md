# GEAR-06 — Pool dòng thuộc tính và dải roll

**Ngày:**21/10/2026 · **Trạng thái:** Hoàn thiện đặc tả V1 trong phạm vi mục; số là cấu hình cân thử, chưa cân bằng qua bản chơi. Chỉ tài liệu MMORPG, không sửa thủ thành.

**Đầu vào:** [Slot148](148_GEAR_01_SLOT_VU_KHI_VA_QUYEN_MAC.md), [sáu trục149](149_GEAR_02_SAU_TRUC_PHAT_TRIEN_TRANG_BI.md), [rarity150](150_GEAR_03_DO_HIEM_VA_NGON_NGU_HINH_ANH.md), [stats68](68_STAT_02_CHI_SO_DAN_XUAT.md), [ngân sách81](81_STAT_11_NGAN_SACH_VA_MOC_CAN_BANG.md).

## 1. Cách đọc và đơn vị

Mỗi dòng có điểm p=B(level)×s(slot)×rarityBudget/n. Chọn quality q trong{0,80;0,85;0,90;0,95;1,00}, xác suất20% mỗi mức, độc lập giữa dòng. Magnitude=floorStep(rate×p×q), sau đó clamp cap của dòng. Không trả điểm thừa do làm tròn hoặc cap sang dòng khác. Tất cả seed/outcome chốt tại grant, không reroll theo người mở tooltip.

Tỷ lệ trong bảng là **điểm phần trăm cho mỗi điểm p**. Ví dụ rate haste0,20 nghĩa p6/q1 cho1,20%=0,012 nguồn Union, không20% và không1,20 đầu vào. Step tỷ lệ0,05điểm%; root/HP/mana/armor/công là1 đơn vị. Dải min/max tính q0,80…1,00 vàcap; không dùng float client để roll.

## 2. Pool V1

| Affix ID | Stat | Rate/p | Cap một dòng | Slot | Weight | Gating |
|---|---|---:|---:|---|---:|---|
| ROOT_STR | STR |1/3|Không cap riêng, theo p|Vũ khí/áo/trang sức|40|Root phù hợp template |
| ROOT_AGI | AGI |1/3|Theo p|Vũ khí/áo/trang sức|40|Root phù hợp template |
| ROOT_INT | INT |1/3|Theo p|Vũ khí/áo/trang sức|40|Root phù hợp template |
| ROOT_VIT | VIT |1/3|Theo p|Mọi slot|40|Theo profile |
| ATTACK_P | Công vật lý cộng phẳng |1,50|Theo p|Vũ khí/tay/nhẫn|35|Profile physical |
| ATTACK_M | Công phép và heal cùng Wm-equivalent bonus |1,50|Theo p|Vũ khí/tay/nhẫn|35|Profile caster/healer |
| FLAT_HP | HP |10|Theo p|Mọi slot|50|Không chuyển thànhVIT |
| FLAT_MP | Mana |4|Theo p|Thân/đầu/dây/nhẫn|25|Dùng resource mana |
| ARMOR | Giáp |1,50|Theo p|Phòng cụ/khiên|35|Không phải DR% |
| MRES | Kháng phép |1,50|Theo p|Phòng cụ/khiên|35|Không kháng nguyên tố% |
| CRIT_CHANCE | Tỷ lệ crit |0,15pp|3pp|Vũ khí/tay/nhẫn|8|R2+,i20+,profile có damagecrit |
| CRIT_BONUS | Bonus hệ số crit |0,40pp|5pp|Vũ khí/dây/nhẫn|8|R2+,i20+,damagecrit |
| HASTE | Tốc đánh |0,20pp|3pp|Tay/dây/nhẫn|1|R2+,i30+ |
| PEN_P | Xuyên giáp cá nhân |0,20pp|3pp|Vũ khí/nhẫn|1|R2+,i30+,physical |
| PEN_M | Xuyên kháng phép cá nhân |0,20pp|3pp|Vũ khí/nhẫn|1|R2+,i30+,caster |
| CDR | Giảm hồi chiêu |0,12pp|2pp|Đầu/dây|1|R2+,i30+ |
| TENACITY | Kháng thời gian CC |0,30pp|4pp|Đầu/giày/khiên|2|R2+,i30+ |
| LUCK | May mắn |0,12pp|2pp|Dây/nhẫn|1|R2+,i30+ |
| LIFESTEAL | Hút máu |0,12pp|2pp|Vũ khí/nhẫn|1|R3,i30+,directdamage profile |

“Mọi slot” chỉ các slot stat148, không cosmetic/công cụ. Vũ khí ở bảng là quyền mainhand thật, không slot phụ bị chiếm bởi2H. Đầu/thân/tay/chân/giày là áo. Khiên không được ROOT_STR/INT/AGI, ATTACK hoặc crit chỉ vì là trang bị cầm tay. Dòng ATTACK_M tạo một nguồn bonus phép chung được công thức damage/heal đọc, không cộng thêm một bonus heal thứ hai.

## 3. Điều kiện và xung đột

Tối đa một root trên một món; tối đa một dòng rare gồm HASTE/PEN/CDR/TENACITY/LUCK/LIFESTEAL trên một món. Crit cũng thuộc nguồn hiếm: chọn CRIT_CHANCE hoặc CRIT_BONUS tối đa một, không cùng rare dòng khác trên cùng món. Rule đầy đủ156. Mọi dòng % trong pool≤5pp, kể cả CRIT_BONUS; một dòng+5pp critbonus đổi multiplier1,50→1,55, không phải+5%tổngdamage. Mức tối đa5%là giới hạn trên, không đảm bảo mọi slot có thể roll đến5%.

Weight là trọng số chọn stat sau lọc, **không là drop rate**. Không áp luck vào roll affix/quality; luck chỉ áp bảng loot eligible theo70. Không có evasion/accuracy RNG, castspeed, reflect, genericDR hoặc tăngdamage nguyên tố tự phát trên gearV1. Không tự đưa ngọc thủ thành vào pool này.

## 4. UI và lưu

Tooltip hiện min–max theo chínhlevel/slot/rarity của món, nguồn dạng0,012 cho server và1,20% cho người chơi. Dòng root tham gia nội tại78 một lần; statsnapshot theo combat. Đổi gear tính lại Union từ nguồn đang hiệu lực, không trừ số đã diminishing. Affix được chọn theo profile template, không theo người nhặt. Reroll service chưa thiết kế, không thêm nút hoạt động hoặc thu tiền.
