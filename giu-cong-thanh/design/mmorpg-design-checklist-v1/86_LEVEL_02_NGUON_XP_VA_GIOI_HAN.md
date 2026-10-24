> **Quyết định hiện hành · 21/10/2026:** [Trần nhân vật 60, nội dung đến 45](91_CAP_60_NOI_DUNG_45_VA_XP_HAU_TRUYEN.md). Giữ năm vùng hiện tại; cấp 45→60 luyện dài hạn. AP ở 45/60 là 132/177; SP giữ 35, TP giữ 11 sau 45. Quy tắc XP hậu truyện thay bảng chênh cấp khi đủ điều kiện. Các số cấp 45 trong ví dụ vẫn là mốc nội dung, không phải trần nhân vật. Chưa triển khai vào game.

# LEVEL-02 — Nguồn XP và hạn chế lạm dụng

**Ngày:**21/10/2026 · **Phiên bản:**1.0. Hoàn thiện policy/cấu hình thử; chưa reward table/runtime. [Tham khảo](79_THAM_KHAO_TIEN_TRINH_VA_VAI_TRO_MMORPG.md). MMORPG, thủ thành giữ nguyên.

## 1. Nguồn được mở V1

| Nguồn | Cách cấp | Quyền/lặp |
|---|---|---|
| Main/objective | Bảng quest theo quota LEVEL-01 | Một lần/quyền quest/nhân vật; version để audit, không tự cấp quyền nhận lại khi patch; không farm bằng abandon/reaccept. |
| Sidequest | Bảng riêng theo cấp nội dung | Một lần trừ quest lặp được định nghĩa rõ. |
| Quái thường | B(m)=8+2m, m là cấp quái | Theo kill hợp lệ, không XP theo mỗihit; levelFactor và group policy. |
| Elite |3×B(m) fixture | Theo encounter thật, không recolor tự cấp multiplier. |
| Boss vùng |8×B(m) fixture | KillXP và quest/reward lần đầu tách event; không nhân theo số skill/phase. |
| Boss dungeon truyện |20×B(m) fixture | Chỉ boss thật; reset boss không hoàn quest lần đầu. |
| Khám phá | Một lần/landmark đã thiết kế | Có quyền phát hiện, không XP chỉ đi qua lại một volume. |
| Nghề/thu thập | XP nghề riêng | V1 không tự thành characterXP để craft-loop lên45. |
| Sự kiện | Bảng có nguồn/quota/epoch | V1 chưa có XP multiplier toàn server mặc định. |

Các hệ số enemy là fixture để authoring, không đủ một mình hoàn thành quota khi chưa có map/quest. DungeonNormal/Hard không tự nhân characterXP theo HPboss; reward đặc thù gear/achievement chốt ở DUNGEON/LOOT.

## 2. Chênh cấp enemy–người nhận

d=m−L thực, F(d) theo cấu hình V1:

| d | F |
|---|---:|
|≤−11|0|
|−10…−6|0,10|
|−5…−3|0,50|
|−2…+3|1,00|
|+4…+7|0,70|
|+8…+10|0,30|
|≥+11|0|

Không tăng XP vô hạn khi bạn cao cấp giết mob hơn10cấp hộ. F chỉ áp killXP, không tự giảm reward mainquest đã nhận đúng điều kiện. XPquest cần chain/eligibility, không share nhiệm vụ chưa mở thành source tiercao. Map vẫn khám phá tự do theo khả năng; F=0 không cấm giúp bạn hoặc tự xóa quyền loot riêng.

## 3. Repeat và anti-exploit

Quái farm thường không hardcap XP theo ngày trong V1, phù hợp thế giới mở. Spawn thật có thời gian/điều kiện ở ENEMY/MAP; triệu hồi do người chơi, training dummy, đồng minh, actor sinh vô hạn từ deathproc hoặc bossphase không cấp XP riêng mặc định. Boss reset/leash/fail không được giữ killXP rồi nhận lại cùng encounterId.

Questlặp/event phải khai báo cap nhân vật/account/server và reset timestamp; chưa có cap thì không mở source đó. Không tự đặt hidden giảm XP sau hai giờ; nếu chống bot phát hiện bất thường cần policy SAFE minh bạch, không dữ liệu UI gây phạt tùy tiện.

Drop/XP tách nhau: luck không tăng XP, partyXP bonus không nhân coin hoặc item. Không bán XP/boost, không offlineXP/restXP V1. Nguồn mở rộng phải qua ECON/LEVEL/budget, không một consumable icon thành véXP chưa duyệt.

## 4. Reward event

Server phát event có sourceId/encounterId/recipient/rewardVersion và lượng hợp lệ. XP trướccap/đã dùng/bỏ vìcap được log, không UI tănglevel trước xác nhận. CấpXP âm hoặc event lặp bị từ chối, admin correction có audit riêng. Mọi nguồn cần ledger idempotent sau triển khai.

## 5. Mẫu và giới hạn

Quái cấp10 B=28, người10 F1 →28XP solo; người20 F0,1→2XP saufloor; người25 F0→0. Đây là minh họa không loot drop. Cần authoring đủcriticalpath, thử mobreset/questreset/multi-ownerpet và disconnect; chưa dữ liệu hoặc test. Không tự coi cơ chế chống bot đã hoàn thiện.


## Ngoại lệ hậu truyện: người chơi 45–59, quái 40–45

Trong trường hợp này, dùng **Flevel=0,50**, thay bảng chênh cấp cũ kể cả khi người chơi hơn quái trên 10 cấp. Vì vậy cấp56–59 vẫn luyện được trên nội dung45; quái45 thường B=98 cho49 XP khi solo. Quái dưới40 vẫn dùng bảng cũ. Không tăng cấp quái hoặc thưởng lại quest một lần; nguồn triệu hồi/dummy/reset không hợp lệ vẫn không cho XP. Cấp60 ngừng nhận XP. Chi tiết chia nhóm tại [hồ sơ91](91_CAP_60_NOI_DUNG_45_VA_XP_HAU_TRUYEN.md).
