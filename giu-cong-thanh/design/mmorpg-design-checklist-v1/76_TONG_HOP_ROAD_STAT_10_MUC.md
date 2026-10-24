> **Quyết định hiện hành · 21/10/2026:** [Trần nhân vật 60, nội dung đến 45](91_CAP_60_NOI_DUNG_45_VA_XP_HAU_TRUYEN.md). Giữ năm vùng hiện tại; cấp 45→60 luyện dài hạn. AP ở 45/60 là 132/177; SP giữ 35, TP giữ 11 sau 45. Quy tắc XP hậu truyện thay bảng chênh cấp khi đủ điều kiện. Các số cấp 45 trong ví dụ vẫn là mốc nội dung, không phải trần nhân vật. Chưa triển khai vào game.

# Tổng hợp ROAD-02 và STAT-01…09 — thiết kế chi tiết V1

**Ngày:** 21/10/2026 · **Phạm vi:** MMORPG 2.5D pixel V4, thủ thành giữ nguyên. [Nghiên cứu nguồn chính thức](65_THAM_KHAO_HE_CHI_SO_MMORPG_2_5D.md).

## 1. Bàn giao mười mục

| Mục | Hồ sơ | Nội dung | Trạng thái |
|---|---|---|---|
| ROAD-02 | [Mở](66_ROAD_02_DOI_CHIEU_NEN_TANG_2_5D.md) | Đối chiếu lore/phong cách/tỷ lệ và chọn đơn vị U/surface; còn scene camera/atlas/depth thực. | Một phần — còn mẫu thực |
| STAT-01 | [Mở](67_STAT_01_THUOC_TINH_GOC.md) | Bốn thuộc tính STR/AGI/INT/VIT, nguồn AP132 ở45, profile vũ khí và reset. | Hoàn thiện đặc tả |
| STAT-02 | [Mở](68_STAT_02_CHI_SO_DAN_XUAT.md) | Catalog và công thức nền HP/mana/công/giáp/kháng/heal, nhịp/chạy và loại accuracy RNG khỏi V1. | Hoàn thiện đặc tả |
| STAT-03 | [Mở](69_STAT_03_LOAI_SAT_THUONG_VA_NGUYEN_TO.md) | Hai school vật lý/phép, element tags, multi-component và giới hạn true/environment damage. | Hoàn thiện đặc tả |
| STAT-04 | [Mở](70_STAT_04_NGUON_VA_NGAN_SACH_CHI_SO.md) | Sổ source/budget/điều kiện, affix rare-rate5%, luck cộng/loot cá nhân và dư crit1:1. | Hoàn thiện đặc tả |
| STAT-05 | [Mở](71_STAT_05_THU_TU_TINH_VA_LAM_TRON.md) | Pipeline cộng/nhân theo nhóm, Union phần còn lại, debuff riêng và rounding/schedule. | Hoàn thiện đặc tả |
| STAT-06 | [Mở](72_STAT_06_CONG_THUC_COMBAT.md) | Pipeline damage/crit/defense/block/shield/heal/lifesteal/reflect, có fixture mốc cấp. | Hoàn thiện đặc tả |
| STAT-07 | [Mở](73_STAT_07_TRAN_CHI_SO_VA_KHONG_CHE.md) | Cap V1, kết hợp giảm damage, cooldown snapshots, CC-DR chung và boss profiles. | Hoàn thiện đặc tả |
| STAT-08 | [Mở](74_STAT_08_GIAM_GIAP_VA_XUYEN.md) | Shared shred rating trước private penetration, cap/stack team và ví dụ nhiều người. | Hoàn thiện đặc tả |
| STAT-09 | [Mở](75_STAT_09_EFFECT_STACK_VA_VONG_DOI.md) | Effect policy, snapshot/refresh/tick, cleanse/dispel, death/map/reconnect và state authoritative. | Hoàn thiện đặc tả |

Hoàn thiện đặc tả không nghĩa code, dữ liệu cấu hình runtime hoặc cân bằng đã đạt. ROAD-02 đã có kết quả đối chiếu nhưng không được tick hoàn tất khi scene camera/depth chưa có. Đây là thực hiện đủ phạm vi phân tích mười mục, không nhận mười mục đều xong bằng lời mô tả.

## 2. Quy tắc chủ dự án giữ nguyên

Haste/penetration trần100%, cộng phần còn lại: r=1−Π(1−b). Hai10%→19%. Affix nhóm hiếm thường trực tối đa5% đầu vào; buff/skill có budget và config riêng. Haste100% là2×tần suất nền, không xóa thời gian đánh.

May mắn loot15% tối đa, dư1:1 vào crit bonus. Giữ hướng tăng tương đối xác suất eligible, không tăng rarity/count/tiền hoặc loot chung đội V1. 13 ô skill/item, WASD/con trỏ, tiến trình nghề15/nhánh30, ngựa chiến bắt buộc cho skill Kỵ Sĩ và không chỉ số kép từ giáp/cánh ngựa giữ nguyên.

## 3. Quyết định mô hình mới

Bốn thuộc tính: STR cho melee công, AGI cho cung/song đao công, INT cho phép/heal/mana, VIT choHP/giáp/kháng. Không AP tăng haste hoặc luck. AP3/cấp2…45=132, khác SP35/TP11; nền tự nhiên theo cấp. Reset AP miễn phí điểm nghỉ ngoài combat, giữ HP/mana/cooldown để không farm hồi.

Hai school vật lý/phép và tag element, không chín rating kháng tách. Đòn va chạm hợp lệ không thêm roll miss; block từ skill-window, không nền RNG. Defense giảm tỷ lệ thay công−giáp. Crit không bỏ defense. Thông số kit/DoT/PvP còn phải hoàn thiện riêng.

## 4. Bảng cấu hình thử — chưa playtest

| Khóa ý nghĩa | V1 | Ghi chú |
|---|---|---|
| AP mỗi cấp sau1 |3| Không mua/roll/grant lặp. |
| AP phân tối đa một stat |90| Chỉ phần phân, không trần tổng item. |
| Nền thuộc tính |5+floor((L−1)/5)| Mọi race cùng pool. |
| HP base/growth/VIT |180 /30 /20| HP=180+30(L−1)+20VIT. |
| Mana base/growth/INT |60 /4 /4| Mana=60+4(L−1)+4INT. |
| Attack base/growth/main |10 /2 /2| Cộng công vũ khí đúng profile. |
| Defense base/growth/VIT |5 /0,8 /1| Giáp/kháng có phần đồ riêng. |
| Armor K |100+10Lsource| Dùng cấp nguồn, không pixel camera. |
| Armor mitigation cap |75%| Không immune bằng armor thường. |
| Crit chance base/cap |5% /60%| Guaranteed skill là flag riêng. |
| Crit multiplier base/cap |1,50 /3,00| Gồm luck dư trong cap. |
| CDR /tenacity cap |40% /50%| Union, duration không chance. |
| Generic DR /block cap |40% /60%| Block active mặc định40%. |
| Shield tổng cap |50%HPmax| Sau mitigation, không HPmax/armor. |
| Lifesteal /reflect cap |20% /20%| Không đệ quy; hiệu lực theo actual HP loss. |
| Shared %shred cap |50%| Các group chia trần, private không sửa target. |
| CC-DR |15s;1/0,5/0,25/immune| Window target chung, duration cơ sở cap5s. |
| Boss hardCC |Immune mặc định| Chỉ allowlist phase/skill mới nhận, không ngầm stagger. |

Các giá trị ngoài yêu cầu gốc là lựa chọn cân thử do trợ lý chốt theo ủy quyền. Khi điều chỉnh cần version/source impact; không hardcode trong gameplay trước khi triển khai cấu hình.

## 5. Ví dụ tích hợp

Raw1500 từ nguồn cấp30, crit×1,5; giáp500→shared20%=400→private20%=320→flatpen20=300. K400; sau defense≈1285,714; genericDR20%≈1028,571; block40%≈617,142; floor617. Shield200 hấp thụ, HP mất417 nếu đủ HP. Lifesteal10% từ417HP mất →41rawheal, sau đó healReceived và clamp HP thiếu. Shield/overkill không sinh lifesteal thêm.

Đây là phép tính minh họa, không kết quả test server. Hình VFX/giảm FPS không quyết crit hoặc hit.

## 6. Màn hình, asset và dữ liệu cần nối

Trang C cần nguồn AP/HP/mana/công/defense, effective/cap/overcap; K/hotbar vẫn13ô, không mua stat qua ô trống. Buff panel hiển thị group/stack/timer/source đúng quyền. Glyph theo ART-05/07; không vẽ mới trong đợt này.

Backend cần nguồn stat có version, snapshot hit/effect và cooldown deadlines; PostgreSQL lưu nguồn bền/grant/build/item, không tin tổng từ client. Các field là hợp đồng thiết kế, chưa schema/API hoặc migration. Chưa có19kit, loot tables, gear pool hoặc PvP balance.

## 7. Tiến độ hiện hành và bước tiếp

**40/513 hoàn thiện hồ sơ, 10 một phần, 463 chưa thiết kế.** Chín STAT hoàn thiện đặc tả; ROAD-02 chuyển một phần. Các một phần: ART-01/02/04, UI-03, INPUT-02/03, SKILL-03/05/06, ROAD-02.

Tiếp theo STAT-10 (DoT/HoT), STAT-11 (budget theo cấp/gear), STAT-12 (sheet nguồn/so sánh) để đối chiếu các cấu hình. Camera/scene và hotbar13ô cần mẫu riêng, không mất nghĩa vì đã có công thức.
