# STAT-07 — Trần và bảo vệ combo vô hạn

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0  
**Trạng thái:** Hoàn thiện đặc tả V1, chưa playtest. Các trần ngoài yêu cầu người dùng là cấu hình cân bằng trợ lý đề xuất. [Nghiên cứu](65_THAM_KHAO_HE_CHI_SO_MMORPG_2_5D.md). MMORPG; thủ thành giữ nguyên.

## 1. Bảng trần

| Chỉ số | Giới hạn V1 | Cách cộng |
|---|---|---|
| Haste bonus | 0…100% theo yêu cầu | Union;100%=2×f0, không interval0. |
| Armor/magic penetration | 0…100% mỗi loại | Union; không bỏ shield/DR. |
| Crit chance thường | 0…60%, nền5% | Cộng điểm%; guaranteed skill flag riêng. |
| Crit multiplier | 1,00…3,00, nền1,50 | Bonus cộng gồm luck dư. |
| CDR | 0…40% | Union;CD=base×(1−CDR), không mặc định giảm niệm/DoT. |
| Tenacity | 0…50% | Union, giảm duration CC đúng tag. |
| Defense mitigation | Max75% | Công thức rating, không stat miễn thương. |
| Generic DR | Giảm max40%; vulnerability max+50% | Net nhóm mục2. |
| Elemental taken | Multiplier0,50…1,50 | Net theo element. |
| Source damage increase | 0…100% | Cộng nguồn khớp cùng nhóm. |
| Block reduction | 0…60%, active mặc định40% | Cửa sổ mạnh nhất hợp lệ. |
| Attack slow | Max60%; boss default15% | Union giữa nhóm, cùng effect theo policy. |
| Run slow | Max60%; boss default20% | Root khóa riêng, không slow100%. |
| Run bonus | Thường max60% profile nền | Nhóm thường rồi slow nhân sau. |
| Shield | Tổng pool50%HPmax | Không stat armor. |
| Lifesteal/reflect | Mỗi rate max20% | Nhóm cộng rồi clamp. |
| Luck loot | Max15% | Luck sum, dư crit1:1. |

Các nguồn nhỏ hơn100% chỉ tiến gần, không đạt đúng100% sau hữu hạn lần Union. Nguồn set-to-cap chỉ nếu skill cho, chưa mở trên gear. Affix rare-rate≤5% đầu vào, không áp5% mọi buff hoặc stat.

## 2. Kết hợp các nhóm

DRnet=clamp(Σvulnerability−ΣDR,−0,40,+0,50); multiplier=1+DRnet. Armor75%, element multiplier0,50, DR40%, block60% khi đủ điều kiện còn0,25×0,50×0,60×0,40=3%raw. Immunity là mechanic riêng, không stat thường. Chưa bảo đảm EHP cân chỉ vì từng nhóm có cap; STAT-11 phải so tổ hợp.

Tốc chạy V=profileSpeed×clamp(1+Σbonus−Σpenalty,0,10,1,60)×(1−runSlow). Lower10% chỉ khi còn quyền đi; root/stun khóa movement phải đứng yên. Combat/travel profile chọn một, không cộng hai base mount+người. Attack=f0×(1+haste)×(1−attackSlow), haste thường không interval<base/2. Không có cast-speed gear V1 khi chưa definition nguồn.

## 3. Chống hard-CC liên tục

Target có cửa sổ DR chung15giây cho stun/freeze/airborne/sleep/fear/root. Apply hợp lệ đầu mở mốc cố định, không refresh bởi hit immune; lần1×1, lần2×0,5, lần3×0,25, lần4+immune tới hết cửa sổ. Tính theo application được chấp nhận, không mỗi tick aura; nhiều player cùng dùng chung window.

Duration=min(baseDuration,5s)×(1−tenacity)×controlDR×targetProfileFactor. Normal factor1, elite0,75. Boss mặc định hardCC immune; phase/skill có allowlist mới nhận, không tự biến miễn thành damage/stagger mới. Các profile phải hiển thị lý do miễn đúng ART-05.

CC đang tồn tại không cộng duration thẳng: giữ end muộn hơn giữa effect mới đã tính và remaining cũ. Những khóa khác loại vẫn tổng hợp; apply hợp lệ vẫn tiêu nấc DR. Dispel không reset window. Chết/relog trong cùng encounter không reset DR để lợi dụng; encounter kết thúc reset theo policy. Knockback distance không nhân tenacity duration trừ rule riêng, không tự ném qua vực/tầng.

## 4. Overcap và thay cấu hình

Sheet hiện tổng nguồn, effective và phần vượt không hiệu lực. Luck dư đã thành crit vẫn bị cap crit, không tiếp tục đổi qua stat khác. Tháo nguồn tính lại, không lưu bonus từ lần trước. Không mở stack haste vô hạn từ ý tưởng ngọc thủ thành sang MMO.

CDR/source deadlines snapshot khi action được chấp nhận, không rebase cooldown đang chạy mỗi lần đổi đồ; ngoại lệ hồi CD từ skill phải rõ. Chưa cân PvP, accuracy/evasion RNG hoặc critical resistance chưa mở. Version cấu hình thay phải giải thích/migration, không giả đã kiểm tổ hợp.
