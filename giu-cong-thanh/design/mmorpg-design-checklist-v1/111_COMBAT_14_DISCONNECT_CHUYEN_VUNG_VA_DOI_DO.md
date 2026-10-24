> **Bản V2 có hiệu lực · 21/10/2026:** [Báo cáo nâng sâu133](133_V2_BAO_CAO_THAY_DOI_VA_BAN_GIAO.md), [khế ước cốt truyện128](128_V2_KHE_UOC_COT_TRUYEN_VA_COMBAT.md), [utility/capstone131](131_V2_CO_CHE_KY_NANG_VA_THIEN_PHU.md). PhầnV2 ở cuối hồ sơ thay các điểmV1 có xung đột; số/rule không thay giữ nguyên. Đây là thiết kế, chưa code/asset/QA.

# COMBAT-14 — Disconnect, chuyển vùng và đổi đồ

**Ngày:**21/10/2026 · V1đặc tả, chưa NET/servercode. [Nghiên cứu](105_NGHIEN_CUU_COMBAT_VA_19_NHANH.md). Khôngclientpause để tránhdamage.

## 1. Combat lock và logout

CombatUntil=lastHostileEvent+10s; bossactive giữlock khiactortrongarena. Hostileevent gồm attack/castđãaccept, damage/CC, heal/cover allyđangcombat; petcreditvềowner. Buffngoàitrận khôngspam kéo lock. Logoutan toàn ngoài combatniệm5s, move/directdamage ngắt; trongcombatkhôngsafeexit. Đóngbrowser vẫn được ởOS, actorxửlýtheodisconnect.

| Tìnhhuống | Actor/action | Đồngbộ |
|---|---|---|
| Blur/đổi tab |Worldchạy, hold/bufferdọn |Khôngpause DoT; snapshotkhiquaylại|
| DC ngoài combat |Actorđứng10sgrace, vẫn bịaggro hợp lệ |Reconnectgiữcùngactorlease|
| DC trongcombat |Đứngyên, khôngautoattackAI; actionđãaccept/đạncũ xửlýtheodefinition |Giữtốiđa60s hoặcđếnngoàicombatđủ10s|
| Hết60s |FinalizeHP/deathId/ledger, unregisteractor/threat; petdespawn |Loginởsafecheckpoint, HP/mana hiệncó hoặcdeadstate, khôngfreeheal/CDreset|
| Haiweb/PC |Một character chỉmộtsessionlease |Reauthhandoffkhôngnhânactor, ACC/NET triểnkhai riêng|

Tronggrace petDefensive/no-new-target, khôngauto-farmonlinevắngchủ. DoT/HoTđãáp trênđíchkháccònchạyđếnend nếuencountercòn. UnloadkhôngdồnDotHPoffline lúc login; effectallowlist/deadlineabsolute theoSTAT. Servercrash làincidentrestorekhácmấtmạngclient, không tựhứa all-statefailover ởđây.

## 2. Portal/channel/safezone

Portalnguyệnvọng/teleport/đổichannel bịkhóa trongcombat. Quest/chết/scenechuyểnbắtbuộc dùngtransitionReasonwhitelist. TransferId prepare/commit bảođảm actorchỉmộtmiền; timeout đối soát thayvìspawnmới. ĐổichannelkhôngrefreshCD/reward/lượtrun.

SkillchưaRelease ngắtgiữcosttheo97, projectile/fieldmiềncũdọn; không mangđạn sanginstancekhác. Portalđãkhóa chốnglợi dụngcleanupđểtrốnđòn. Terrain/aura nguồnmiềncũgỡ; timedbuffcánhânđượcpersistgiữdeadline, khôngreapplyshield. Safezonekhôngmiễnthươngđangcombat; chặnbiêngiảithíchtheo109. Respawncheckpointgiữbossroomclosedđếncửahợplệ.

## 3. Đổi đồ/build

Khôngequip/swapvũkhí/phòngcụ/mountcombat/preset trongcombatlock; vẫn xemC/T/K. Consumabledùngđượctheotag khôngbịhiểulàequip. Đổingoạitrangcũngđợingoàitrậnđểkhôngswapriggiữađòn. AP/SP/TPreset/presetngoàicombattạiđiểmnghỉ, lineagedeadline giữ.

Ngoàicombatđổitínhsources/passive, giữHPmana/clampdown, khôngfreeheal. Petstatsnapshotkhi gọi theo [SKILL-10](122_SKILL_10_TRIEU_HOI_VA_DIEU_KHIEN.md); đổiđồkhôngrefreshpet/CD. Questbắtbuộcđổimón phải servercancelactiontrước, khônganimationmớigiữhitcũ.

## 4. Kiểm sau / giới hạn

DCPrepare/Release/DoT/dead/rezoffer,10/60s, portalrace, haiPC, petthreat, equip/reconnect. Chưa NETschema/replication/fixedtick/lagcompensation, chưatestonline. Đây là policygameplay đầu vào NET/DATA, khônghoànthiệnthaycáchệđó.


## V2 — Mất kết nối không là hành động của nhân vật

DCkhông đượclời thoại diễnthành“đãbỏrơiđoàn/ngừnglờithề”. Tronggrace actorchịurủirotheo111, người chơiquaylạicó tóm tắtđangởbướcnào/đangchết/đangchờcứu, khôngphátmười tiếngchuônglầnhaihoặcmấtbằng chứng.

Cảnhquyếtđịnh quantrọng lưumốc trướcxác nhận: đóngappkhôngtựchọn BREAK, tiếpđọckhiquaylại. Cảnhriêng cóstoryOwner/choiceRevision táchkhỏiactionserver; disconnectchủcảnh khôngchuyểnquyềnchọnchongườicònlại. V1khôngmởdi trúworldmới.

Giữcombatlock/grace10/60s, portal/equip/preset/cooldown. Khiinstancecầnunload, ghi checkpointtrướcinteractionmộtxác nhận, khônglặpcấpvật phẩmbằng chứng. Tiêu chí: rờiphiênkhôngvôýđổiđạođức/quest, khôngfreeheal/petfarm hoặcdupeactor.
