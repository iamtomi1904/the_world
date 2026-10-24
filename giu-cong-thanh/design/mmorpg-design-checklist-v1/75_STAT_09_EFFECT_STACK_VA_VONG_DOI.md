# STAT-09 — Stack, refresh và vòng đời buff/debuff

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0  
**Trạng thái:** Hoàn thiện hợp đồng V1, chưa scheduler/schema/runtime/test. [Nghiên cứu](65_THAM_KHAO_HE_CHI_SO_MMORPG_2_5D.md). MMORPG, thủ thành giữ nguyên.

## 1. Definition và instance

Definition có effectId/version, tags, sourceGroup, scope (per-source/per-target/shared-team), operation/magnitude, stackPolicy/maxStacks, duration/refresh/tick, cleanse/dispel class, bossProfile/persistence/procFlags/visualProfile. Instance có target, source attribution, start/end/nextTick, stacks/pool và event identity. Không code tùy ý hoặc JSON source cho client tự cấp.

Authoritative scheduler theo server time, không timer mới mỗi hit. VFX chỉ đọc state, clip loop không apply thêm. Reconnect/preset lấy snapshot/delta, không replay apply để nhận lại shield/heal.

## 2. Policy được phép

| Policy | Quy tắc |
|---|---|
| Unique-refresh | Một group, apply hợp lệ end=now+duration, không cộng duration vô hạn. |
| Strongest | Lưu source hợp lệ, chỉ mạnh nhất hiệu lực; mỗi nguồn end riêng, nguồn yếu không kéo dài nguồn mạnh. |
| Stack-refresh-all | Stack tới cap chung, expiry chung refresh bởi sự kiện hợp lệ. |
| Stack-independent | End từng stack, cap target; chỉ khi skill cần, không default mọi effect. |
| Replace | Instance mới thay theo rule priority/magnitude có định nghĩa. |
| Shield-pool | Cùng group giữ pool còn lớn hơn/duration instance đó theo STAT-06. |

Thiếu policy không phát hành effect. Per-source stack vẫn cần cap target nếu gameplay yêu cầu; nhiều source không tự vượt giới hạn đội.

## 3. Default và thời gian

Named tăng công/giáp cùng group strongest; khác group vào công thức chung. Haste cùng group strongest, group khác Union; slow tương tự theo cap. Armor shred group target theo STAT-08. CC duration/DR theo STAT-07, các khóa hành động tổng hợp.

Bleed/burn/poison cần STAT-10 và kit chốt stack/tick/duration cụ thể; không tự lấy8stack/5s ngọc thủ thành. Fixture burn unique-refresh hoặc poison stack-refresh chỉ dùng khi có definition, chưa là skill phát hành.

Refresh effect có tick không gây tick mới tức thì miễn phí. Cùng instance giữ nextTick; tăng stack tác động tick sau theo policy, không spam apply để reset nextTick=now. Tick schedule≤endTime chạy trước expire; entity chết/hủy thì dọn theo policy, không tick vào ID tái dùng.

## 4. Snapshot và chủ nguồn

Direct damage chốt công/crit/source bonuses lúc cast được chấp nhận, defense đích lúc hit; không đổi đồ giữa đường làm projectile đã bay mạnh hơn. DoT mặc định snapshot nguồn lúc apply, defense target live mỗi tick; live-source chỉ khi definition cần và được cân.

Refresh cùng group chọn snapshot/owner theo policy mạnh nhất hoặc instance thắng, không vừa lấy attack cao củaA vừa bonus củaB. Shared-stack effect giữ attribution từng đóng góp hoặc rule aggregate được định nghĩa, không tự cộng toàn bộ attack mọi người. Damage/hút/proc cần owner rõ.

Aura kiểm membership theo range/surface/relation. Có hysteresis hình/đường biên cấu hình khi cần nhưng không tự kéo dài quyền buff ra ngoài vùng vô hạn. Pulse heal có lịch riêng; bước ra-vào không heal tức thì mỗi lần. Source chết/hủy/tháo skill dọn membership/buff theo policy.

## 5. Cleanse và miễn nhiễm

Cleanse gỡ debuff khớp tags, dispel gỡ buff được phép; mỗi action có số lượng và thứ tự. Nếu không chỉ định priority đặc biệt, chọn effect mới nhất trong nhóm hợp lệ, tie instanceId; UI ghi loại gỡ, không “gỡ mọi bất lợi” khi không đúng. Permanent gear/progression không bị cleanse.

Immunity chặn apply/damage theo tags, tenacity chỉ duration. Trigger khi bị gỡ có limit/noRecurse, không apply-dispel loop. Boss immune có feedback thật, không frozen visual đầy đủ trong khi logic vẫn chạy bình thường.

## 6. Death/map/disconnect

Chết gỡ combat buff/debuff/DoT/aura/pet tạm theo default; không mất AP/skill/gear/quyền ngựa. Cooldown tiếp tục; CC-DR window cùng encounter không reset vì chết. Hồi sinh không tạo lại grant/quest reward.

Đổi vùng gỡ terrain/field/aura nguồn cũ, dọn projectile/pet không hợp lệ theo COMBAT. Timed cá nhân giữ nếu definition có persistence; không tick vào entity hủy. Teleport cần kiểm combat trước, không dùng chuyển map cleanse miễn phí.

Disconnect không pause world; actor còn tồn tại tiếp tục effect theo NET. Actor unload chỉ persist allowlist và endTime absolute; không dồn mọi DoT offline thành một hit lúc login hoặc làm buff sống mãi. Grace actor/đăng xuất an toàn còn thuộc NET/COMBAT, chưa đặt số giây.

## 7. Lưu, UI và invariant

PostgreSQL lưu nguồn bền, effect persisted allowlist/deadline nếu cần, không particle. Runtime state có revision chống apply kép khi snapshot/delta. UI stack/timer/group đúng nguồn, filter icon không xóa effect thật.

Kiểm sau: hai người refresh aura/shred, nguồn mạnh hết lộ yếu còn hạn, apply/remove haste, duplicate event, shield expire, tick tại endTime, logout/reconnect,13shortcut trùng skill không nhân source. Chưa test. STAT-09 không hoàn thiện thay STAT-10/COMBAT/NET/19kit.


**Chi tiết tick/lifecycle:** [STAT-10](80_STAT_10_DOT_HOT_VA_BOSS.md) bổ sung nguồnchủchết không mặcđịnh xóa DoT/HoT đãáp trênđíchkhác; targetchết ngừngtick. Profilemẫu/quotaboss làconfig thử, chưakit phát hành.
