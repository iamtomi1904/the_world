> **Bản V2 có hiệu lực · 21/10/2026:** [Báo cáo nâng sâu133](133_V2_BAO_CAO_THAY_DOI_VA_BAN_GIAO.md), [khế ước cốt truyện128](128_V2_KHE_UOC_COT_TRUYEN_VA_COMBAT.md), [utility/capstone131](131_V2_CO_CHE_KY_NANG_VA_THIEN_PHU.md). PhầnV2 ở cuối hồ sơ thay các điểmV1 có xung đột; số/rule không thay giữ nguyên. Đây là thiết kế, chưa code/asset/QA.

# SKILL-04 — Hợp đồng số và thời gian từng kỹ năng

**Ngày:**21/10/2026 · V1thiếtkế. [Catalog đầy đủ126](126_DANH_MUC_KY_NANG_V1.md) làbảngauthoritative của bộchiêunền/race/nghề/19nhánh/vômôn; khôngchỉmẫu mộtclass. Chưa code/JSON chạyhoặcbalanceQA.

## 1. Trường bắt buộc

ID/version/lineage/form, ownerclass/race/weapon/mountpermission, unlockquest/level, maxrank/rankcost, targetmode/relation/mask, range/shape/Z/surface/maxTargets, coefficients/direct/tick/heal/shield, mana/cast/recovery/CD/charges, release/commit/cancel/interrupt, effectId/group/stack/cleanse/bosspolicy, proc/crit/lifesteal, projectile/petprofile, animation/VFX/SFX/previewLOD, attribution và persistence. Thiếutrườngbắtbuộc khôngpháthành; cácdefault dướiđâylàmtrườnghoànchỉnhchomỗihàng126.

## 2. Default dùng chung, không đoán theo tên

| Trường | Default V1 |
|---|---|
| Charges |1; khôngcótíchcharge/CDriêngnếu rowkhôngghi|
| Rank |1–5,fac1/1,08/1,16/1,24/1,32 trênD/H/S và magnitude buffU/mark; fixedrace/rez/utilityinfo khôngSP|
| Cost/CD/CC/range |Mana/CC/range/duration cốđịnh; lineageB giảm baseCD3% mỗi rank thêm, tốiđa12% ởrank5; CDRgear áp sau baseCDđãnâng, không cộng thànhnguồnCDR vượtcap|
| Timing |Castrow, releasecuốicast, recovery0,30s; instantsrelease ởaccept. Movehủyniệmcast>0, moverate0khiniệm; instant khôngrootgiả|
| Resource/CDcommit |Castaccept, khônghoàn khi hụt/ngắt; previewchưacommit; deadlineCDchunglineage|
| Target/LoS |Direction/groundcầnconfirm; unitexplicit; LoS/cùngsurface, trừProjectile3D/airflag. Ground/melee khôngxuyênsàn|
| Damage |Raw=k×P/M; elementalMagicchỉM, physicalP. PipelineSTAT-06/78đúngmộtlần; noRNGmiss|
| AoE |Đíchđầu100%, phụ50%k khi rowkhôngghi fullAll; maxTargetsrow, stablecontact/ID|
| Crit/proc |Directcócrit/lifestealtheoSTAT, sharedroll/action/target; DoT/HoT/petkhôngownerlife/reflect/proc mặcđịnh. Once/action onhit|
| Shield |S=a×targetMaxHP hoặcH khirowghi, rankfacáp trướccap50%; cùnggroupstrongestpoolruleSTAT|
| Effect |IDprefixskill+effecttype, sharedtargetgroupnhư102; magnitude/durationrow, tick1s; CC/slowbosscaps73|
| Step/dash |Sweepnavigation/geometry, khôngiframe/crosssurface; root/stun cấm trừescapetagriêng|
| Mount |Ngườikhácxuốngthútrướccast; skillnghềKỵSĩ bắtbuộc horse, khôngcastformtânthủlách|
| Friendlyfire |Không; harmfulhostilemask; supportself/allymask, petchỉwhitelist|

Damage/Healrankfac làmagnitudechứkhôngnhânCCduration hoặcpetcount. GuardCkiểublock dùngfac1/1,04/1,08/1,12/1,16 trênblockreduction, vẫncap60%; guardshield theoSfac. U/Sbuffdamage/armor/mark scale magnitude bằngrankfac, không nhân thêmownerM rồi buff hai lần. Skilldirect+DoT tổngngânsáchghiriêng; Hỏa direct/ticktagloạitrừtheo78, healingkhôngcrit. Khôngsourcecmaxmới/armorformula/hastecapmới.

## 3. Chiêu nhiều pha

Dashhit ởđườngdi chuyển chỉnếu rowcóD, mỗiđíchmộthit/action. Nhảyđáp phátD khiLand ởđíchvalid; sourcechết/CCngắttrướcLand khôngnổđáp, vẫncost/CD. Meteorđườngrơivisual0,8s sauCastRelease, damageimpactlúcchạmđất; khôngvùngnổxuất hiệntrướcthiênthạch. Channelrowchia tổng hệsố cho mốctick, ngắtgiữ phầnđãgây, khôngnổtổnglầncuối. CastniệmchốtR/H/sourceStatsởaccept; defenseatimpact/tick.

## 4. Tương tác tài nguyên và trạng thái

Cost theo phần trăm maxmana làm tròn lên số nguyên; lượng HP/mana hồi theo phần trăm làm tròn xuống trước clamp lượng thiếu. Mana phẳng trong bảng đã là số nguyên. Không làm tròn cooldown thành giây nguyên; dùng deadline theo thời gian server.

Khôngdùng“manakhôngđủ”màvẫnphátprojectilethật. Server quyếtvalidation/cast/hit; animatorđọctime, khôngcallbackapplydamage. TargetmấttrướcRelease hủytheo97, projectileđãphát follow101. HardCC/stealth/taunt/break theo102/108/113; heal/damageAOEkhôngtạoeffectngoàidefinition.

## 5. UI / nghiệm thu sau

Tooltipraw/effectivepreview, rankcurrent→next, cost/CD/cast, air/mount/tags, mục tiêu/LoS,pháthế. ĐổiTPcậpnhật cùngquoteconfigversion, khôngpersistmagnitudeclient. Kiểm toàn bộ row/28tổhợp/lifecycle/timer/costmulti-phase, songdao, miss/cancel/crit/DoTcap. Các số đãthiếtkếnhưngchưachạy môphỏngkinhtế/mana/TTK hoặcgameplay.


## V2 — Số và điều kiện phải đủ để dựng lại

U/capstone V2 làdeltaexplicit131; catalog126cậpnhật Uthậtthay vìchỉcómô tảmỹthuật. Source Statschốtlúcaccept; điều kiệnvị trí ASN/HSWđượckiểmở Releaseđãkhai báo; defense/check LoSđíchtheohit. Bấmphase2khôngtạocastmới/HPpoolmới/CDmới.

Phânbiệtkỹ thuật: transferkhiên giữpool/end; transfer HoTgiữphầnsố/tick; Quang Phângiữtổngpacket; Nén Hỏa giữrawvàflags DoTcủaphầnchuyển; Hợp Cốtgiữquota/HPtỷlệcòn. Missingpredicatephảibáo Khôngthỏa, khôngcastfallbackâmthầmthànhbuff15%.

Tiêu chí: cùngbảngdữliệu/đầu vàochohai người implementđượccùngkết quả; không cómột“hiệu ứngđẹp”thaylogic; coefficient/budgetkhôngnhậnlạirank/talenthai lần.


**Hợp đồngV2:** Uthuầncơchế/marker/transfer cóbaseCD−3%/rankthêm,max12%; buffD/H/S/armorU dùngmagnitude, khôngnhậncảhai. Phase2U/S làlệnhcùngaction/lineage, khôngthêmcharge/cast/CDreset. Côngnguồn giữsnapshotaccept, điều kiệnASN/VAN/HSW kiểmởReleaseđãkhai báo, targetdefense vẫnởhit. Transferinvalidtrướcaccept khôngcost; trạngtháiđổi sauaccept thìhủyatomictransfer/giữpoolnguồn, cost/CDtheochiêubịngắt, khôngrefundmặcđịnh. PhầnDoTđổisangimpact giữnocrit/nolife/noproc vàhookBurn/Bleedcũ.

## Chốt sau rà soát lần hai — ngân sách và thứ tự tính

Ngân sách raw của chiêu nhiều pha là **theo từng mục tiêu trong cùng action**, không phải tổng sát thương chia đều cả đám. Cùng một mục tiêu chịu tổng không vượt hệ số dành cho nó; tổng toàn nhóm có thể lớn hơn khi chiêu cho phép nhiều mục tiêu. Xếp hạng mục tiêu chính/phụ một lần khi nó được nhận vào action; không đổi mục tiêu phụ thành chính ở pha sau. Hụt pha không chuyển ngân sách sang pha còn lại. Ngoại lệ ARC.U dành suất chính cho mục tiêu đánh dấu theo131.

Thứ tự cấu hình: bộ nền126 → thay hình/cấu trúc bằng capstone131 → áp node còn tương thích → hệ số rank đúng một lần → snapshot nguồn và các nhóm bonus78 → phòng thủ đích tại hit. Chuyển Burn/Bleed sang impact sau khi xác lập hệ số từng phần; giữ nhãn nguồn và cờ không crit/hút máu/proc của phần chuyển. Các packet dùng chung một action, nhưng mỗi packet trúng phải kiểm va chạm thật; giới hạn proc theo cặp action–target, không theo số ray/tick.

Với chiêu chia hai tia/đường, node tăng sát thương tác động lên **tổng hệ số**, rồi chia lại theo tỷ lệ cũ. Node tăng số mục tiêu không nhân tổng hệ số trên mỗi mục tiêu hoặc làm mới danh sách giới hạn. Trường hợp capstone thay shape không còn tương thích node tăng bán kính/quạt/chain cũ: khóa node và hoàn TP tại điểm an toàn; không âm thầm nhận TP mà không có tác dụng.

