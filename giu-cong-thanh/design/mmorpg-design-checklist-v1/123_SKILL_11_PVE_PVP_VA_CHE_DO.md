> **Bản V2 có hiệu lực · 21/10/2026:** [Báo cáo nâng sâu133](133_V2_BAO_CAO_THAY_DOI_VA_BAN_GIAO.md), [khế ước cốt truyện128](128_V2_KHE_UOC_COT_TRUYEN_VA_COMBAT.md), [utility/capstone131](131_V2_CO_CHE_KY_NANG_VA_THIEN_PHU.md). PhầnV2 ở cuối hồ sơ thay các điểmV1 có xung đột; số/rule không thay giữ nguyên. Đây là thiết kế, chưa code/asset/QA.

# SKILL-11 — Phạm vi PvE/PvP và tooltip theo chế độ

**Ngày:**21/10/2026 · V1thiếtkế. PvPV1chưamở, khôngtựcopyluậtPK/arena từgamekhác. [Nghiên cứu](105_NGHIEN_CUU_COMBAT_VA_19_NHANH.md).

## 1. Quyết định bản đầu

Toànbộcatalog126 là PvE: world/storydungeon/partyinstance vàkhu tập. Playerfriendly khôngnhậnharmfulpacket, dùtargeted/AoE/pet/DoT. KhôngnútduelhoặcPvPversiondamagegiảtrongclient. SkillkhôngđượcxétđãcânbằngPvPchỉvìcódòngmultiplier.

Chếđộthủthành cóprogression/simulationriêng, khôngnhậnkitMMO/35SP/revivefeehoặcitemnày. Vínạpchungaccount khôngmởđườngchuyểnskill/gear/MPgiữacácmode.

## 2. Hợp đồng mode profile

Skilldefinition cópveProfileId/version vàpvpProfileId **disabled**. Serverencounterrules quyếtmode, khôngclient gửiPvP=falseđểláchcap. Khi tươnglaimởPvPphảicóprofilethật/budget/consent riêng trướcflagEnabled: damage/heal/shield/CC/stealth/detection/rez/pet/proc/range/cap/resources/aura/targetMask. Khôngtạo nguồnPvPbonusgear/chợtrướcnhómPvPthiếtkế.

Khôngápmodifierhai lần: chọnmộtmodeprofiletrướctínhrank/talent/source/pipeline. CùngskillID/lineagegiữquyềnhọc, khácrulesnếuđượcmởkhônglàskillthứhaiđểresetCD. ChuyểnPvP/PvEtrongcombatcấm; effect/timer cũ dọn/migrate theoencounter, khônggiữPvE100%shieldtrongarenamới.

## 3. UI hiện gì

Tooltiptab **PvE đang áp dụng** hiệnrange/D/cost/CD/CC/BossBreak; tabPvPhiện“Chưa mở trong phiên bản này”, không0damage/mộtbộ sốtựđoán. Enemybossprofile còncap/immune có dòng“Boss:…” từtargetđượcbiết. Khu tập chọnprofilemẫuexplicit, khôngdummyngườiđểfarmreward.

Hồi sinh104 dùngPvE; khônghứaMụcSưreviveđấudueltựdo. NếuPvPsaumở,phảichốttừnground/quota/đồngthuận, khôngsellrevive/lifestealprocngượcfriendly. Tooltipcầnchỉrõsốeffective/sourceversion, khôngbỏquađiềukiệnngựa/weapon.

## 4. Tiêu chí duyệt tương lai

Khôngharmfulfriendlyquamọi pipeline,packetfakeModekhôngqua, PvEprofilechọnđúng, tabPvPdisabledcólýdo. NhómPVPthiếtkếconsent/arena/reward/normalization/anticheat riêng trước phát hành, chưađánhdấuchúng. MụcSKILL-11hoànthiệnquyếtđịnhphạmvi/hợpđồnghiểnthị, chưasảnxuấtPvP hoặcQA.


## V2 — Câu chuyện chung, quyền trải nghiệm riêng

PvPdisabled V1giữ, khôngbiếnmâuthuẫnphe/race thànhquyền PK. Playerđi Hắc Kỵ/NECkhông đượckẻkháctấn côngtronghubvìlore. Saucáckết quảcá nhâncóthểchungmap/dịchvụ, phekhôngcấmhealergiúpngười chơiđãphêbình Giáo Hội.

Đồng độitheocảnhcủastoryowner nhậnquyềnchiến đấu/cứutheorun, khôngkýlựa chọnthay. Khác tiếnđộđượcbáospoilervàtừchốikhôngbịphạt. Thủthànhđộc lậpgameplay/loot/level; sharedwalletnạp khôngchuyểnpowersang MMO.

Tiêu chí: khôngprofile PvPgiả/packetfriendlyharm, tooltipđúngmode, bossreplaykhôngtạohaiquyếtđịnhchính sửcủamộtchar, hỗ trợbạnkhôngnhảyquestcá nhân.
