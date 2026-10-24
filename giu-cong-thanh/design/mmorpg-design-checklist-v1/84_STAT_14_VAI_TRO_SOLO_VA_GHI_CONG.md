# STAT-14 — Vai trò, solo và ghi công hỗ trợ

**Ngày:**21/10/2026 · **Phiên bản:**1.0. Hoàn thiện mục tiêu/policy V1, chưa kit đầy đủ hoặc playtest cân vai trò. [Tham khảo](79_THAM_KHAO_TIEN_TRINH_VA_VAI_TRO_MMORPG.md). Thủ thành giữ nguyên.

## 1. Phân nhóm19nhánh

| Nhóm chính | Nhánh | Tiêu chí riêng |
|---|---|---|
| Chống chịu/bảo hộ |Thánh Kỵ Sĩ, Hộ Vệ Thánh| Giữ áp lực, block/shield/cover hữu ích; vẫn solo. |
| Đấu sĩ |Hắc Kỵ Sĩ, Tiên Phong, Cuồng Chiến, Kiếm Sĩ Trọng Kiếm| Damage và độ bền có tradeoff, không mọi stat đều được nội tại nhân mạnh. |
| Damage cơ động |Phong Kiếm Khách, Sát Thủ| Combo/vị trí có thưởng và rủi ro, không mọi boss ép cận chiến mất uptime. |
| Phép damage/điều khiển |Lôi, Hỏa, Thủy, Ánh Sáng, Bóng Tối, Thổ| Boss immune hardCC vẫn có damage/utility; không dùng khóa liên tục làm cách sống duy nhất. |
| Damage tầm xa |Cung Thủ| Range có điều kiện/đường nhìn, không đứng ngoài mọi cơ chế. |
| Triệu hồi |Tử Linh, Tinh Linh| Tổng chủ+pet trong cùng ngân sách; pet AI/đường đi không khóa tiến trình. |
| Hồi phục |Mục Sư, Pháp Sư Mộc| Effective heal/HoT/cleanse, có đòn solo không phải đổi nghề. |

Nhóm là định hướng, talent có thể đổi cách chơi trong quyền nhánh, không mở class mới. Một role không bắt buộc một race duy nhất ngoài ma trận hiện hành.

## 2. Solo và mục tiêu cân thử

Mọi main story có đường solo, story dungeon không bắt tank/healer/player khác. Không hard-enrage DPS chặt ở boss truyện khiến healer thất bại dù chơi đúng. NPC hỗ trợ nếu quest có phải được thiết kế nguồn/giới hạn, không ngầm spawn để che kit yếu.

Ở cùng cấp/gear/budget: DPS làm mốc100%; tank damage sustained mục tiêu≥55%, healer≥65%; TTKsolo thông thường tối đa xấp xỉ1,82×/1,54×mốc trước cơ chế. Đây là ngưỡng kiểm chứng, không áp multiplierẩn vào class. Nếu không đạt phải chỉnh kit/AP/gear, không tự buff player chỉ vì role.

Tank có survival/cover theo fixture, healer đổi một phần damage lấy hỗ trợ. Pet tổng damage không vượt ngân sách chủ, không một pet=fullDPSclass. Ngựa/cánh không thêm actor đánh riêng. Boss không yêu cầu hardCC nếu profile boss immune; debuff/shield có ích theo luật thật.

## 3. Ghi công không chỉ damage

Encounter ledger ghi actualHPdamage, actualheal vào đồng đội đang trong encounter, shield thực hấp thụ, block/prevented damage đủ dữ liệu, CC/debuff được chấp nhận có ích, objective/revive được kịch bản công nhận. Không tính overheal, damage vào mục tiêu bất tử, immuneCC, tự gây hại ngoài combat hay buffloop để farm.

Eligibility XP không cần cộng những metric đó thành một điểm cạnh tranh. Điều kiện V1: cùng encounter/vùng hợp lệ, trong40U hoặc arena bounds được thiết kế; có hoạt động chiến đấu hợp lệ trong20s cuối và có đóng góp hữu ích. Duration tham gia tối thiểu min(8s,25%thời lượng encounter) là mục tiêu chốngAFK, với short fight tính từ lúc actor tham gia hợp lệ. Quest/objective có cơ chế riêng khi encounter quá ngắn cho heal.

Healer có thể đủ quyền qua heal/shield/cleanse đồng đội hợp lệ, không cần hit đầu/last-hit. Tank giữ boss/mob và block/cover hợp lệ được ghi công. Không bấm buff trên đầy máu ngoài trận thành quyền nhận mọi reward.

## 4. Chết và nhóm

Chết trong encounter sau tham gia đủ không xóa ledger. Nếu còn cùng instance/encounter và không bỏ hoạt động thì vẫn nhận XP theo LEVEL-03; không thưởng người vừa chạy qua mà chưa tham gia. Revive không nhân quyền, pet credit về owner, một support event không cấp reward nhiều lần vì nhiều icon.

Log summary để học cơ chế, không làm leaderboard công khai buộc người chơi đuaheal/spam. Quyền loot/boss world cần LOOT/COMBAT chốt riêng; các tiêu chí này là đầu vào không toàn bộ hệ loot đã có.

## 5. Ma trận cần đo

19nhánh×mainboss/normal/elite, melee/ranged, solo/nhóm, primary/dual/VITbuild; test nguồn pet và13ô trộn thuốc. Heal/shield/cleanse/counterCC cùng boss immune cần review. Chưa thực hiện; task hoàn thiện **thiết kế cân vai trò và tiêu chí**, không công bố “mọi class đã cân bằng”.
