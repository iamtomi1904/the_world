> **Bản V2 có hiệu lực · 21/10/2026:** [Báo cáo nâng sâu133](133_V2_BAO_CAO_THAY_DOI_VA_BAN_GIAO.md), [khế ước cốt truyện128](128_V2_KHE_UOC_COT_TRUYEN_VA_COMBAT.md), [utility/capstone131](131_V2_CO_CHE_KY_NANG_VA_THIEN_PHU.md). PhầnV2 ở cuối hồ sơ thay các điểmV1 có xung đột; số/rule không thay giữ nguyên. Đây là thiết kế, chưa code/asset/QA.

# COMBAT-12 — Ghi công, quyền thưởng và chống AFK

**Ngày:**21/10/2026 · V1hợpđồngcombat, chưa LOOT/questrewardtables. Kếthừa [STAT-14](84_STAT_14_VAI_TRO_SOLO_VA_GHI_CONG.md) và [XPnhóm](87_LEVEL_03_XP_NHOM_VA_HO_TRO.md). [Nguồn](105_NGHIEN_CUU_COMBAT_VA_19_NHANH.md).

## 1. Tách bốn việc

Combatledger ghi aiđãđónggóp; eligibility quyếtđịnh ai đủquyền; XP côngthức riêng; loot/questreward dùng profile riêng. Không tổng tất cảthànhdamage-ranking rồi chia hếtđồ theoDPS. Killcreditcho nhật ký cóowner nhưng khôngđộcchiếmreward. Cùngaccount nhiềucharacter/phiên vẫn theo ACC/CAP, không tạo actorảo để tăngpool.

## 2. Bằng chứng hợp lệ

| Nguồn | Giátrịghi nhận | Loạitrừ |
|---|---|---|
| Damage |HPđịch thực mất, direct/DoT/pet cóowner|Overkill, immunity, dummy, friendly/selfdamage|
| Heal |HPthiếu hồi choactorđangthamgiaencounter|Overheal, tạothiếuHPgiả hoặc healngườingoài trận|
| Shield/block |Lượng thựcabsorb/prevent từ packetenemy|Đặtkhiênchưadùng, cùngpacket tínhtrùnghai lần|
| Tank |Giữ threat hợp lệ khienemy cóáp lực, chặn/cover cókếtquả|Đứnggầnhoặctauntimmune, kéoquáileash/reset|
| Debuff/CC |Applyhữuích/giátrịbreakthế accepted|Spamimmune/refresh không thêm hiệu lực; effecttrangtrí|
| Objective/cứu |Sựkiệnscript thànhcông trongencounter|Bắtđầurồihủy, hai người nhậncứucùngdeathId|

Sourcepet/tick vềownermột lần; combo chủ+pet khôngtạohainhậnXP. Sharedpoison/shred giữattributiontừngsource, khôngghi100%cho mọingườicùngicon. Tăngthreat khôngtựtănglootweight.

## 3. Eligibility V1

Cùngencounter/domain và trong40U hoặcarenabounds riêng; cóđónggóphữuích và hànhđộnghợplệ trong20s cuối; thời gianthamgia tối thiểu min(8s,25%thờilượngencounter). Khôngđòi healer chạmmob đểclaim. Selfheal cầnHPthiếu dodamageencounter thật, khôngđủquyền chỉnhờbơmmáungoàitrận.

Ngườichếtsauđãđủđónggóp, còncùngrun/encounter vàkhôngrờibỏ thì giữquyền dù quá20s vì đangchờcứu; deathkhôngxóaledger. Dùnggrace20s cho playercòn sống mấtđíchngắn, khônggiữquyềnvĩnhviễn sauđãrờiarenagameplay. Logout/disconnect trong111khôngtựAFKban; actormấtđiều khiển không tạoactivitymới, nếuđãđủtrước đó vàchưabỏencounter thìgiữdeath/disconnectflag phục vụđốisoát.

Trậnquángắn và kẻđịchbịngườicao one-shot: hỗtrợđãnhậnnhiệmvụ/đangthựchiện objective phùhợp có scriptedcredit; khôngtựgrant cảparty chỉ vìcùngmap. Nếu không cósựkiệnhữuích, chưađủquyền; questauthor phảitránh shortfightkhóahealer bằng objective rõ. Khôngtạobuffẩncho classđểsửa sốliệu.

## 4. XP, loot, quest

XPtheo86/87/91: đúngpool/n/factors,cap60, lateF0,50; khônglast-hitbonus. Lootpersonal mởrolltheo rewardprofile, mộtquyền/encounter/rewardId, Luck chỉcá nhân theoSTAT; chưa tạo bảngdropởđây. Sharedloot nếu có phảiLOOTquyđịnh fairallocation, khônggánthủlĩnhparty lấyhết.

Questkiểmđúngqueststep/phase và objectiveId; completedquestkhôngphátlạiXP khi giúp bạn. Tiền/sựkiệnnguồncóaccountcap kiểmtransactionriêng; corpse khônglàkhovậtphẩmngườichết. Raid/worldbossrespawn mới cầnencounterIdmới nhưng firstclearreward vẫnledger riêng, khôngresetcùngbossId đểfarmvôhạn.

## 5. Chốnggianlậnvà UI

Dedup combatEventId/targetIncarnation; cùngrequestkhôngnhậncreditlại. Shieldphản/hútmáu/proc khôngđệquy tạođiểm. LặpCCimmune khôngghiactivityhữuích. KhôngpublicbảngxếphạngDPSdùngđểđuổihealer; sauencounter người chơi xem “Đủquyền/Chưathỏa” với lýdo họ đượcbiết, khônghiệnanticheatthreshold bí mật.

Metriccho vận hành gồm effectiveheal/absorb/CC accepted/objective, khôngcamera/inputriêngtư. AFKnghi vấn làtínhiệuxemxét, khôngbantựđộngtừmộtngưỡng. Điều tra gianlận/retentionởSAFE/DATAchưađượcgọihoànthành.

## 6. Kiểm sau

Healerkhônghit, tankgiữboss, nhómkhácparty, chếtchờcứu, mấtmạng/reconnect, petDoTkill, mobone-shot, resetboss, requestlặp,accountcap. Chưa thực thi hoặc chứngminhloot/questđãhoạtđộng.


## V2 — Ghi nhận giữ người và giữ chứng cứ

Ngoàidamage/heal/absorb, encounter có objective cótên: mởđường thoát, cảnphátrụ, hoànthànhkiểmnguồn, giữvỏmáyngừngđểngười khácxửlýlõi. Objectivecredit theoobjective Id+attempt+owner, khôngtheosốlầnspam F hoặc số NPCđược overheal.

Mỗiquyềnthưởng cóđiều kiện rõ, không“điểmthiện”bí mật đểchoclassbảo hộđồtốthơn. Khôngcho lựa chọn RESTORElootrarehơnđểépđạođức. Đãxácđịnhcứuđược/ngắtđược mộtthiếtbị thìtấtcảngườihợp lệ đượcđánhgiáđónggóp dùkhônglasthit.

Actorhỗ trợquestcó HPchỉnhậnheal/covernếutag `supportObjectiveEligible`, khôngmọi NPCdịchvụ. Questauthorcấp F/tooltươngđươngđểkhôngép Mục Sư. Giữ40U/20s/điều kiện110, ngoại lệchếtsauđủquyền; khôngthaybằng DPSranking. Tiêu chí: ba cáchgiảitrậncóquyềntiếptruyện tươngđương, rewardledger khônglặp.
