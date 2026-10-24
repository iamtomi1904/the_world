> **Quyết định hiện hành · 21/10/2026:** [Trần nhân vật 60, nội dung đến 45](91_CAP_60_NOI_DUNG_45_VA_XP_HAU_TRUYEN.md). Giữ năm vùng hiện tại; cấp 45→60 luyện dài hạn. AP ở 45/60 là 132/177; SP giữ 35, TP giữ 11 sau 45. Quy tắc XP hậu truyện thay bảng chênh cấp khi đủ điều kiện. Các số cấp 45 trong ví dụ vẫn là mốc nội dung, không phải trần nhân vật. Chưa triển khai vào game.

# STAT-01 — Thuộc tính gốc và điểm thuộc tính

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0  
**Trạng thái:** Hoàn thiện mô hình thiết kế, chưa playtest hoặc tạo config/runtime. Các số là cấu hình V1 do trợ lý chọn theo ủy quyền. [Nghiên cứu](65_THAM_KHAO_HE_CHI_SO_MMORPG_2_5D.md). Chỉ MMORPG; thủ thành giữ nguyên.

## 1. Bốn thuộc tính

| Thuộc tính | Chuyển đổi V1 | Không tự tăng |
|---|---|---|
| Sức mạnh STR | +2 công vật lý/điểm khi attack profile dùng STR. | Haste, crit, sức chứa túi. |
| Khéo léo AGI | +2 công vật lý/điểm khi attack profile dùng AGI. | Tốc chạy/đánh, xuyên giáp, né RNG. |
| Trí tuệ INT | +2 công phép, +2 sức hồi phục, +4 mana/điểm. | Crit chance, haste, mọi loại kháng. |
| Thể chất VIT | +20HP, +1 giáp và +1 kháng phép/điểm. | Miễn CC/block ngẫu nhiên. |

Không mở SPR/DEX/LUK riêng ở bản đầu để giảm trùng chức năng. May mắn là stat từ nguồn được duyệt, không điểm gốc để phân vô hạn vào farm. AGI không tăng haste nhằm giữ yêu cầu tốc đánh hiếm; UI phải giải thích tên Khéo léo thay vì ngụ ý tốc độ.

## 2. Nguồn điểm và trần phân bổ

Mỗi thuộc tính có nền tự nhiên N(L)=5+floor((L−1)/5), giống ba race. Cấp2…60 nhận3AP/cấp, tổng132AP ở45 và177AP ở60; cấp1 chưa có điểm tự phân. **AP khác SP35/TP11**, không bán/chuyển/mua nạp.

Mỗi điểm giá1AP. Tối đa phân vào một thuộc tính min(90,tổng AP đã cấp); trần chỉ cho phần AP, không tự giới hạn item/trait. Item vẫn chịu budget/cap liên quan.

| Cấp | N mỗi thuộc tính | AP tổng |
|---:|---:|---:|
| 1 | 5 | 0 |
| 10 | 6 | 27 |
| 15 | 7 | 42 |
| 30 | 10 | 87 |
| 45 | 13 | 132 |
| 60 | 16 | 177 |

Không cấp lại AP/N khi chết/chuyển nghề/reset/relog. Chưa có AP rơi đồ/quest lặp; thêm nguồn sau phải sửa tổng budget có version.

## 3. Profile theo vũ khí

Kiếm/chùy/giáo/rìu/trọng kiếm dùng STR; cung/song đoản đao dùng AGI; trượng/sách phép dùng INT. Profile từ skill/vũ khí hợp lệ, không tự chọn max(STR,AGI) hoặc cộng cả STR+AGI+INT cho một hit. Skill nền dùng bộ tập đúng profile, tiến hóa giữ dòng nhưng đổi biểu hiện theo nghề/nhánh.

Healer INT có đòn phép solo. Triệu hồi dùng sức mạnh chủ theo snapshot/live được khai báo, không thêm một SPR bắt buộc chưa có. Giáp/cánh ngựa là hình ảnh, không AP kép. Trait race nằm trong budget, không tạo khác biệt pool tự phân.

## 4. Build, reset và chuyển nghề

Gợi ý: melee STR/VIT; cung/sát thủ AGI/VIT; caster/healer INT/VIT. Không khóa nghề bằng ngưỡng stat ngoài ma trận race/quest. Hybrid chỉ khi kit có hệ số rõ, không hứa mọi cách chia đều mạnh ngang nhau.

Reset AP miễn phí tại thầy/điểm nghỉ ngoài combat, preview rồi commit nhất quán. Nghề15/nhánh30 đổi profile được phân lại miễn phí trong luồng, không tự chọn build hộ. Giữ HP/mana hiện tại, clamp nếu max giảm; không hồi đầy/cooldown reset.

## 5. UI, dữ liệu và giới hạn

Sheet hiện nền tự nhiên + AP + item/trait, điểm còn và trước/sau. PostgreSQL lưu grant/phân AP/version; server tính tổng. Không nhận tổng stat client. Thay hệ số cần version/preview/migration và hoàn đúng AP, không âm điểm. Chưa cân19kit hoặc làm STAT-11 thay ngân sách sức mạnh từ mô hình này.


## Bổ sung nội tại chủ đạo theo nhánh · 21/10/2026

[Hồ sơ78](78_NOI_TAI_CHU_DAO_CUA_19_NHANH.md) thêm profile chuyển hóa một/hai thuộc tính cho19nhánh. Lợi ích gốc vẫn giữ; AP + flat root từ gear hợp lệ tạo R giảm dần, bonus đi vào nhóm damage/heal/shield/pet đã quy định, không tự nhân stat vòng lặp. Mở cùng nội tại nhánh ở30, không chiếm13ô hoặc ba ô passive tùy chọn. Hệ số là cấu hình thử, không hoàn thiện bộ kit/cân bằng.


## AP khi nâng trần60

Nguồn AP mở rộng từ cấp2 đến60, mỗi cấp3 điểm: 177 AP ở60; 132 AP ở45 vẫn đúng. Trần phân90 AP vào một thuộc tính giữ nguyên. Nền tự nhiên N(60)=16, không phải điểm hoàn lại. Không tự tăng trần haste/xuyên giáp hoặc thêm dòng thuộc tính mạnh hơn vì tăng cấp. [Hồ sơ91](91_CAP_60_NOI_DUNG_45_VA_XP_HAU_TRUYEN.md).
