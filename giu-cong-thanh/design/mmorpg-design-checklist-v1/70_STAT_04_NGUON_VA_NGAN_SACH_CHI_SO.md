# STAT-04 — Sổ nguồn và quyền đóng góp chỉ số

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0  
**Trạng thái:** Hoàn thiện mô hình nguồn V1; chưa tạo database/config/runtime hoặc playtest. [Nghiên cứu](65_THAM_KHAO_HE_CHI_SO_MMORPG_2_5D.md). MMORPG, thủ thành giữ nguyên.

## 1. Source record

Nguồn có sourceId, owner, statKey, operation, magnitude, scope, condition, stackGroup, expiry và ruleVersion. Cùng sourceId/revision không cộng lặp khi sync. Client gửi equip/use, không gửi tổng stat.

| Nguồn | Phạm vi | Quy tắc |
|---|---|---|
| Cấp/nền | Nhân vật, bền | N/growth một lần, race không pool AP riêng. |
| AP | Nhân vật, bền | Grant/phân theo67, không item hoặc tiền. |
| Gear/base/roll/khảm/nâng/set | Instance đang equip | Mỗi đóng góp rõ, set kích một lần đủ điều kiện. |
| Skill/passive/talent | Build hiện hành | Không cộng preset ẩn hoặc13shortcut thành13buff. |
| Buff/debuff/aura | Target runtime | Group/source/timer và relation/range/surface hợp lệ. |
| Môi trường | Bề mặt actor | Không tầng trên/dưới cùng nhận vì chồng hình. |
| Guild/phe/title | Quyền hiện hành | Chưa có reward stat thì không tự thêm; cosmetic giữ cosmetic. |
| Tu luyện/khai mạch/cánh | Hệ phụ tương lai | Chung budget mở rộng, chưa hoạt động chỉ vì có menu. |
| Giáp/cánh ngựa | Visual profile | Không chỉ số kép từ lớp hình. |
| Tiền nạp/ngoại trang | Không combat source | Không luck/XP/crit/haste bán như mỹ phẩm. |

## 2. Budget và nguồn hiếm

Giữ tham chiếu35 cấp/AP–45 gear–20 class. Không có nghĩa35% mọi stat từ cấp hoặc45% damage từ đồ. Hệ phụ chia chung15 trên nền100, không15% mỗi hệ. STAT-11 phải đo DPS/EHP/heal/utility; hệ số V1 chưa chứng minh đạt budget.

Haste/penetration và các stat đánh dấu rare-rate: affix thường trực b≤0,05, khác5 điểm phần trăm kết quả. Buff/skill không mặc định bị5% nhưng vẫn cap/budget. Pool GEAR phải quy định slot/rarity/tier; chưa cho trùng cùng stat trên một món mặc định. Không đổi tên nguồn thường trực thành buff để vượt hạn.

## 3. Điều kiện và lưu

Điều kiện gồm weapon family, mounted, build, out-of-combat, target type/element và surface. Tháo nguồn tính lại tập hiệu lực; không trừ số b đã diminishing khỏi tổng. Profile giáp ngựa không tạo thêm record giáp.

PostgreSQL lưu nguồn bền theo item/build/quest/version, tổng là cache tái tính được. Effect có hạn không tự thành passive. Grant AP/quest cần idempotent ledger khi triển khai; chưa tạo bảng/migration.

## 4. May mắn

L=max(0,Σluck tăng−Σluck giảm hợp lệ), cộng tuyến tính điểm phần trăm, không Union như haste. LootLuck=min(L,0,15); CritLuck=max(0,L−0,15); mỗi1điểm% dư→+1điểm% crit bonus đã chốt. Nền/AP không có luck.

Roll eligible cá nhân: p'=min(1,p×(1+LootLuck)). p10%, luck15%→11,5%, không25%. Không tăng rarity/count/currency/paid box. Lấy luck lúc server roll của người có quyền nhận, không last-hit hoặc max đội cho mọi người. Reward cá nhân dùng người nhận; reward chung đội không áp luck V1 để tránh nhân cơ hội. LOOT/CAP còn phải chốt danh mục eligible/loot-lock, đây không hệ loot hoàn chỉnh.

L18%→loot15%, crit bonus3điểm%; mất nguồn tính lại, không giữ buff dư vĩnh viễn. Crit output vẫn chịu cap STAT-07, overcap phải hiện rõ không hiệu lực, không đổi phần dư đó thành loot lần hai.

## 5. Bàn giao

Sheet nguồn phân bền/tạm/điều kiện, ghi operation/group và trước/sau. Không nhận việc có danh mục là mọi hệ phụ đã được thiết kế. Thiết kế này là đầu vào GEAR/LOOT/STAT-11/DATA, chưa thay toàn bộ các task đó.


## Bổ sung nội tại chủ đạo theo nhánh · 21/10/2026

[Hồ sơ78](78_NOI_TAI_CHU_DAO_CUA_19_NHANH.md) thêm profile chuyển hóa một/hai thuộc tính cho19nhánh. Lợi ích gốc vẫn giữ; AP + flat root từ gear hợp lệ tạo R giảm dần, bonus đi vào nhóm damage/heal/shield/pet đã quy định, không tự nhân stat vòng lặp. Mở cùng nội tại nhánh ở30, không chiếm13ô hoặc ba ô passive tùy chọn. Hệ số là cấu hình thử, không hoàn thiện bộ kit/cân bằng.
