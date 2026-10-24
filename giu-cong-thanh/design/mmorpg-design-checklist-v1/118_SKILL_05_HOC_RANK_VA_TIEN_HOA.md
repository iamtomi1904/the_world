> **Bản V2 có hiệu lực · 21/10/2026:** [Báo cáo nâng sâu133](133_V2_BAO_CAO_THAY_DOI_VA_BAN_GIAO.md), [khế ước cốt truyện128](128_V2_KHE_UOC_COT_TRUYEN_VA_COMBAT.md), [utility/capstone131](131_V2_CO_CHE_KY_NANG_VA_THIEN_PHU.md). PhầnV2 ở cuối hồ sơ thay các điểmV1 có xung đột; số/rule không thay giữ nguyên. Đây là thiết kế, chưa code/asset/QA.

# SKILL-05 — Học chiêu, rank và tiến hóa

**Ngày:**21/10/2026 · V1thiếtkế, giữ35SP/11TP/AP177cap60. [Catalog126](126_DANH_MUC_KY_NANG_V1.md), khôngphátlạiđiểmkhi chuyểnchức.

## 1. Nguồn và mốc

| Mốc | Quyền / nguồn |
|---|---|
|1|FND-A/P rank1 từquestmởđầu; đánhthường theo bộ tập|
|3/5/7/9/12|BướcLách/raceP1;raceactive;ThủThế;raceP2;raceP3 theo89|
|15+jobquest|Baformnghề giữrank/lineage;Urank1/core; ngựanềnKỵSĩ, weaponfamilyhợplệ|
|18|Vômôn từthầyquest chung;MụcSư thêm PhépHồiSinh quaquest nghề|
|30+branchquest|Baformnhánh giữrank;Ubiểuhiệnnhánh;Srank1/coreR78;PAL/DKNcánhpassive|
|35|Đượcnângrank5, khôngtựnâng;capstonetalent đủquyền|
|45→60|AP3/cấp, khôngSP/TPmới; khôngskilllevel60ngoàibảng|

Rankcaptheocấp1/8/15/25/35=1/2/3/4/5. Rank1→2/2→3/3→4/4→5cost1/1/2/2SP, tổng6. SP8/10/12/14 và15…45tổng35;TP15mỗi3đến45tổng11. Race/passivecore/rezfixedrankkhôngSP; FND-Pnângrate theo116.

## 2. Quy trình học

K/tabnghề hiệntầy/quest/level/weapon trướcđi. NPCrolehợp lệ→xemskillrank1→xácnhậnquyềnhọc→ledgerlearnId→serverack→gánhotbar bằngkéo/Gán. Họccốt lõi khôngphítiềnhoặcsáchrandom; vậtphẩmsáchbiếnthể tươnglai khônggiữcôngcụbắtbuộc/questchính. VômônV1nguồnquest/thầy cốđịnh, khôngbookrarelock.

NPCkhôngcầnmọithầyởV01; dùngđiểmhuấnluyệnnghềởvùnghợplệ. Questnhậnnhiều lầnsameIdkhôngcấpskill/weapon/horsehai lần. ĐạtcấpchưaxongquestchỉXemkếhoạch, khônglách bằngbuildimport.

## 3. Tiến hóa giữ đầu tư

LineageFND-A→job.A→branch.A tươngtựB/C mặcđịnh1:1 rank/SP/CD; formcũchỉxemlịchsử, khôngkéođểcast. U15 giữlineagekhi30; S30mớiđầurank1 dùAđãrank4. Reset/migrationhoàn đúngđiểmđãchi, khônghoànnângmiễnphíhoặccấprankmới khôngcósource.

Ví dụ25A4tốn4SPtíchlũy;chuyênsâu30A4giữ4SP, S1khôngSP;nângA5ở35thêm2. Đổipreset khôngtăng35SP, mỗi preset làphươngáncùngpoolkhimộtđanghiệulực.

## 4. Tài liệu và giới hạn

UIKhiệnrank/magnitude trước-sau, SPcòn, requirementlevel/quest, passiveeffective. Caphigher60khônglàmchiêulênrank10; giữ5theoMMO, khôngthủthành. Schema/grant95, reset120, nodes119. Kiểmrequestduplicate/lag/weaponpermission/rankcap/latequest/migration, chưaimplementation/QA.


## V2 — Học bằng một việc đã hiểu

Bàichuyểnnghề15gồmobserve→do→explain;30làmodulecủanghề/race, khôngtựthêm26quest. M01–M03chưahọcnhiềukỹ năngnênnédùng WASD/vậtcản, không Bước Láchtrướccấp3, khôngđốikhông V01.

Trong Kcó Sổ Nghề: cáchdùng,nguồntruyền thống2câu,bàithực hànhtựchọn. Hoànthànhpracticechỉghiđãthử/lờithầy, không SP/XP/ratehiếm hoặcđiểm“thôngthạo”bắtgrind. Cảnhnhậnngựa/vũkhínềnthậtđãcóledger, khôngnạpđểhọclạitool.

Giữrankcap5/mốc1/8/15/25/35, SP35/TP11/sau45không thêm. Tiêu chí: đườnghọcrõ,thất bạitrongtậpkhôngphátruyện/thu hồi sinh, chậmquestkhôngmất XP;không phảiđọcguidebênngoàimớiquađược.
