# STAT-06 — Damage, crit, block, shield và hồi phục

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0  
**Trạng thái:** Hoàn thiện pipeline và cấu hình thử V1; chưa code/playtest. [Nghiên cứu](65_THAM_KHAO_HE_CHI_SO_MMORPG_2_5D.md). MMORPG; không sửa thủ thành.

## 1. Đầu vào hit

Server xác nhận target/surface/cao độ/line of sight/collision/quyền dùng trước damage. V1 không roll accuracy thêm sau collision hợp lệ. Hit có owner/source, target, skill/rank/eventId, components school/element, coefficient/flat và proc policy.

RawComponent=max(0,Attack_profile×coefficient+flat_skill). Hệ số từng skill còn ở kit, không suy từ effect hay13ô. Multi-hit chia budget trước; flat_skill là tổng phân theo hit định nghĩa, không tự cộng nguyên flat lên mỗi tick.

## 2. Pipeline một hit

1. Chốt source snapshot. Roll crit một lần/hit đủ điều kiện, mọi component của hit chung crit.
2. Component=Raw×(1+damageIncrease_group)×critMultiplier nếu crit.
3. Defense mục tiêu sau shared shred rồi private penetration theo STAT-08. K=100+10×cấp nguồn hiệu lực; pet mặc định cấp chủ, không cấp1 vô tình sửa mitigation.
4. Mitigation=min(0,75,DefEffective/(DefEffective+K)); component nhân(1−mitigation). Def≥0,K>0.
5. Áp modifier nguyên tố E theo STAT-03, cộng component thành packet.
6. Áp generic taken modifier theo STAT-07, rồi block hợp lệ nếu có.
7. Immunity theo tag làm packet không áp dụng; còn lại floor một lần trước shield/HP, hoặc accumulator tick nhỏ theo STAT-05.
8. Tiêu shield tương thích rồi HP; ghi effective damage/kill và kích proc được phép, lifesteal/reflect không đệ quy.

DamageIncrease_group cộng tuyến tính các nguồn đúng tag, cap+100% V1; nếu nhiều tag cùng khớp cũng gộp, không nhân từng tag. Defense debuff, vulnerability và source damage increase là nhóm khác nhau để không trừ nhầm. Crit không bỏ giáp hoặc bảo đảm hit.

## 3. Crit và block

Crit nền5%, cap thường60%; multiplier nền1,50, cap3,00 gồm luck dư. Guaranteed crit là flag skill tạm được khai báo, không affix thường trực nâng cap; target immune vẫn không crit. AoE mặc định roll mỗi target/hit, không một roll toàn màn trừ definition khác.

Đòn thường/direct skill có thể crit mặc định; DoT/reflect/environment/pet không crit mặc định, mở sau phải có kit/budget. Heal không crit V1. Block là cửa sổ/arc/tag chủ động, không RNG nền; mặc định block giảm40%, cap60%; đòn unblockable phải có definition/báo trước. DoT/environment không block mặc định.

## 4. Shield pool

Chọn pool theo school/tag. Các pool khác group hợp lệ tiêu theo expiry sớm nhất, rồi creation time, rồi instanceId ổn định. Cùng group chọn instance có pool còn lớn hơn, giữ duration của instance thắng; không lấy pool lớn của nguồnA và duration dài củaB để tạo siêu shield. Tie giữ instance hiện tại.

Tổng active shield thông thường cap50% maxHP mục tiêu. Khi tạo mới chỉ nhận phần còn dưới cap, overflow không thành HP hoặc refund. MaxHP giảm clamp pool theo cùng thứ tự tiêu cho tới cap; max tăng không tự hồi shield. Kỹ năng ngoại lệ cần config riêng, V1 chưa bật.

Shield sau defense/E/DR/block, vỡ không tính armor lần hai lên phần tràn HP. Damage chỉ bị hấp thụ không lifesteal. Expire tan, cạn pool vỡ; dispel không nổ damage nếu skill chưa có. Shield không phải tăng giáp hoặc HPmax.

## 5. Ví dụ mốc cấp — fixture, không stat quái/item phát hành

| Cấp nguồn | Raw direct | Def sau mọi bước | K | Damage không crit/DR/shield |
|---:|---:|---:|---:|---:|
| 1 | 30 | 40 | 110 | floor(30×110/150)=22 |
| 10 | 100 | 100 | 200 | 66 |
| 30 | 400 | 300 | 400 | 228 |
| 45 | 700 | 550 | 550 | 350 |

Ví dụ đầy đủ: nguồn30, raw1500, crit1,5, armor500. Shared shred20%→400; private penetration20%→320; private flatpen20→300. K400:2250×400/700≈1285,714. E1, DR20%→1028,571; block40%→617,142; floor617; shield200 hấp thụ, HP mất417 nếu còn đủ HP. Không round từng bước tạo số khác.

## 6. Heal và lifesteal

HealRaw=(HealingPower×coef+flat)×healDoneMultiplier×healReceivedMultiplier. Mỗi multiplier=clamp(1+Σincrease−Σdecrease,0,2), floor cuối rồi min HP thiếu. Không qua defense/crit. Overheal không tạo shield trừ skill có definition riêng.

LifestealRaw=floor(actualHPLoss_direct×lifestealRate), cap rate20% V1, tiếp tục chịu healReceived và HP thiếu, không nhận healDone lần nữa. Chỉ direct damage từ chủ có policy cho phép; shield/overkill/DoT/pet/reflect/environment không tính mặc định. 417HP thực mất với10% hút→41 rawheal; nếu thiếu20 chỉ hồi20.

## 7. Phản damage và attribution

Reflect rate cap20%, base actualHPLoss_direct. Sinh packet cùng school/element nhưng noReflect/noProc/noCrit/noLifesteal; không nhận source damageIncrease hoặc elemental bonus phía người phản lần nữa. Packet vẫn chịu phòng thủ/E/DR/shield của đích phản, không mặc định true damage. Nếu base417×10%→41 raw phản, còn giảm theo defense người bị phản.

Không phản qua phản, không summon từ kill phản mặc định. Người gây đã chết/hủy thì packet theo event policy, không tạo actor ma. Effective loss clamp lượng HP thực; overkill không tạo heal/proc lớn hơn damage hữu ích. Kill attribution chỉ một event, component không nhân quyền reward.

## 8. Giới hạn

Chưa có hệ số19kit, DoT/HoT chi tiết STAT-10, loot contribution hoặc PvP balance. V1 là thiết kế PvE thử; các công thức không chứng minh fair PvP. Các con số phải vào cấu hình có version, chưa thay source/animation/collision.


## Bổ sung nội tại chủ đạo theo nhánh · 21/10/2026

[Hồ sơ78](78_NOI_TAI_CHU_DAO_CUA_19_NHANH.md) thêm profile chuyển hóa một/hai thuộc tính cho19nhánh. Lợi ích gốc vẫn giữ; AP + flat root từ gear hợp lệ tạo R giảm dần, bonus đi vào nhóm damage/heal/shield/pet đã quy định, không tự nhân stat vòng lặp. Mở cùng nội tại nhánh ở30, không chiếm13ô hoặc ba ô passive tùy chọn. Hệ số là cấu hình thử, không hoàn thiện bộ kit/cân bằng.
