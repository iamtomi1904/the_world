> **Quyết định hiện hành · 21/10/2026:** [Trần nhân vật 60, nội dung đến 45](91_CAP_60_NOI_DUNG_45_VA_XP_HAU_TRUYEN.md). Giữ năm vùng hiện tại; cấp 45→60 luyện dài hạn. AP ở 45/60 là 132/177; SP giữ 35, TP giữ 11 sau 45. Quy tắc XP hậu truyện thay bảng chênh cấp khi đủ điều kiện. Các số cấp 45 trong ví dụ vẫn là mốc nội dung, không phải trần nhân vật. Chưa triển khai vào game.

# LEVEL-03 — Chia XP, khác cấp và hỗ trợ người mới

**Ngày:**21/10/2026 · **Phiên bản:**1.0. Hoàn thiện policy V1; chưa party/XP runtime hoặc test. [Tham khảo](79_THAM_KHAO_TIEN_TRINH_VA_VAI_TRO_MMORPG.md). MMORPG, thủ thành giữ nguyên.

## 1. Quyền nhận và mô hình share

V1 chia đều killXP giữa thành viên đủ điều kiện trong cùng cohort encounter/party; không chọn “ai đánh nhiều nhận nhiều” trong party. Healer/tank đủ quyền qua STAT-14. Không chủ party tùy chuyển lootXP để ép support nhường hết. Khác party/ngoàiparty dùng encounter claim policy của COMBAT/LOOT; không tự nhân một pool đầy đủ cho mỗi party.

Mỗi kill có danh sách contributor toàn encounter. Party membership dùng snapshot lúc engage, bổ sung join sau chỉ nếu tham gia hợp lệ; đổi party trước chết không nhận hai lần. Đích quái/arena, relation/surface/range40U hoặc bounds encounter và hoạt động theo STAT-14 được server kiểm, không chỉ online cùng map.

## 2. Công thức pool V1

n là số recipient killXP đủ điều kiện (Flevel>0 và chưa cap). Pool=B(m)×gradeMultiplier×[1+0,20×min(n−1,4)]. Chia share=Pool/n, rồi XP_i=floor(share×Flevel_i×Fcarry_i). n không phải số party tối đa; phần bonus capped80%cho5+người, không tự chốt capteam ở đây. Phần thừa round bỏ, không thưởnglast-hit; chỉ dùng sốphân trong pipeline trước floor.

Người cap60 vẫn chơi/hỗ trợ và nhận rewardkhác nhưng không nằm n để rút phầnXPngười mới, cũng không tạo thêm bonus bằng altcap. Support contribution không phụ thuộc crit/last-hit; summon tínhowner một recipient.

Fixture B100,3người cùnglevel hợp lệ: Pool140, share46,666→mỗi46XP; tổng138,2do floor bỏ. Một người chỉ đứng/overheal ngoàicombat không thànhrecipient. Không nhân bonus cho quest cá nhân/objective đã có bảng thưởng; không nhân theo count pet. Nếu n=0 thì không tính/chia pool killXP, không chia cho0 hoặc tự chuyển pool sang tiền.

## 3. Khác cấp và chống kéo quá mức

V1 không triển khai level sync: FFXI/FFXIV cho thấy sync cần cân cả gear/skill, chưa đủ dữ liệu dự án để hứa hỗ trợ. Người cao vẫn giúp bạn qua truyện, nhưng không mở quyềnclass/quest hoặc phát AP/SP/TP của mốc chưa đạt.

Trongparty, nếu thành viên tham gia hữu ích cao hơn recipient trên5cấp thực thì Fcarry=0,25 cho killXP recipient thấp, còn lại1. Questcá nhân đủ điều kiện giữ reward gốc, không bị phạt để mất đường truyện. Người cao dùng Flevel thường và có thể khôngXP vì mobquáthấp; không đổi level thực bằng UI/preset.

Penalty chỉ theo thành viên party tự chọn, không một người cao đi ngang đụng quái là giảmXPngười khác để grief. Outsider carry/kill-steal/altcoalition phải xử lý encounter claim/activity ở COMBAT/SAFE, chưa tuyên bố policy này ngăn hoàn toàn powerlevel mọi hình thức. Server không cho duplicate quyền qua leave/rejoin hoặc altchỉbuff một lần.

UI trước engage có cảnh báo nhóm chênhcấp và killXPgiảm; không tự tách bạn ra nhóm hoặc resetprogress. Sync/mentor mode đầy đủ là backlog, không thêm coinmentor/rewardfarm V1.

## 4. Chết, rời trận và instance

Người chết sau đóng góp đủ, vẫn thuộc encounter và không bỏ instance giữeligibility; không auto mấtXPnhư một số rulethamkhảo. Rờiinstance/map trước kết quả không nhận killXP trừ disconnectrecovery cho phép; không auto claim cảmap. Khoảng grace reconnect thuộc NET phải cấu hình, chưa có sốgiây giả trong ledger.

Bossworld/dungeon completion có reward profile riêng; killpool không thay bảngquest, lầnđầu hoặc caploot. Ready/assist không tự cấpXP nếu không có đóng góp hữu ích hoặc objective được script công nhận. Không lấy action spam làm bằng chứng đóng góp.

## 5. Kiểm chứng sau

So nhóm healer+tank+DPS, mộtplayerchết, vượt range/cầu khác tầng, highhelper/cappedhelper, spawn reset, partychange/reconnect vàpet. Đảm bảo một event/recipient một grant. Chưa định partymaxsize hoặc code power-sync; đây là mô hình chiaXP thiết kế cần playtest hiệu quảsolo/nhóm.


## Ngoại lệ nhóm hậu truyện

Người cấp45–59 vẫn thuộc n khi đủ điều kiện; chỉ người đạt60 bị loại khỏi n và không tạo bonus pool. Khi người nhận và người hỗ trợ đều từ45 trở lên trong nội dung40–45, không áp thêm Fcarry=0,25; dùng Flevel=0,50 và chia pool thông thường. Người nhận dưới45 vẫn giữ quy tắc chống kéo cấp, kể cả khi đi cùng người60. Chi tiết tại [hồ sơ91](91_CAP_60_NOI_DUNG_45_VA_XP_HAU_TRUYEN.md).
