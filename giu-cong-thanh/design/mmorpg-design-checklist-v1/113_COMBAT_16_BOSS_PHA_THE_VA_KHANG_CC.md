> **Bản V2 có hiệu lực · 21/10/2026:** [Báo cáo nâng sâu133](133_V2_BAO_CAO_THAY_DOI_VA_BAN_GIAO.md), [khế ước cốt truyện128](128_V2_KHE_UOC_COT_TRUYEN_VA_COMBAT.md), [utility/capstone131](131_V2_CO_CHE_KY_NANG_VA_THIEN_PHU.md). PhầnV2 ở cuối hồ sơ thay các điểmV1 có xung đột; số/rule không thay giữ nguyên. Đây là thiết kế, chưa code/asset/QA.

# COMBAT-16 — Kháng khống chế và phá thế boss

**Ngày:**21/10/2026 · V1đặc tả, chưa boss/runtime. [Nghiên cứu](105_NGHIEN_CUU_COMBAT_VA_19_NHANH.md). GiữCCDR ở73, chỉthêmconversiontheophaseđãkhai báo.

## 1. Profile và cửa sổ

Quáithường DR1/0,5/0,25/immune15s; elitefactor0,75; bossmặcđịnhhardCCimmune, runslowcap20%/attackslow15%, sharedshredtheoSTAT. Khôngimmune mọiDoT chỉvìbossto.

Chọn thanhPháThế **theopha**, khôngluônmở. StateKhóa→Báohiệu1s→Mở8s→Pháthànhcông/Chiêuđượcphát→Khóatối thiểu15s. Mỗibosscóthểkhôngdùngbar, khôngép mọibossgiốngnhau. BarLocked/Open/Recovery cóglyph/chữ/castprogress, khôngchỉmàu.

Ngưỡngmẫu B=80×[1+0,60×(n−1)], n≥1 là sốplayeractivehợplệtrongarena lúc mở, khôngpet/altngoàiarena; snapshot, latejoin/deathkhôngđổi Bgiữapha. Bossworldnhiềungườiphảicóscaleauthorprofiletrướcpháthành, khôngápformula vôhạnmàchưađo.

## 2. Điểm và đường solo

| Hànhđộng | Điểm mẫu trongwindow |
|---|---:|
| Basictrúng |10, tốiđa1lần/2s/owner-boss|
| SkilltagBreakStrike |20/action|
| HardCC/interrupttagBreakControl |40/action, thay20chứkhôngcộng60|
| Fđiểmphongấntrongarena |40, niệm1s,1lần/player/window|
| DoT/proc/reflect |0mặcđịnh|

Mộtactionchủ+pet tốiđa40, multihitkhôngnhân. BossimmuneCC vẫnnhận40breaknếucótagvàwindow, khôngstunthật: conversionđãkhai báo, khôngmọiimmuneđềuđượcquyđiểm. Khi barđóng báo Sai thờiđiểm, khôngtặngscore/CCfake.

Mainstorysolo luôncóF/cơchếởtầmmelee:40điểm+kết hợp đánh thường và skill có BreakStrike/BreakControl để đủ80trong8s; cóthểbổsungskill, khôngcầnmaxrank. Nếu khôngphá, đònchínhtruyện vẫnné/đỡ/giảiquyếttheocơchếthaythế, khônghardwipebắtbuộcmangstun. V01khôngquáibay/pha bay kểcảđểminhhọapháthế.

## 3. Kết quả và khóa chain

Thànhcôngngắtcastđangbáo, bossRecovery3s; khôngtựbonusdamageTaken trừphasecóbudget. Recoverykhôngnhậnđiểm/CCtiếp, saurecoverygiữHP/threat/debuffhợplệ. Thấtbại castdiễnrađúngtelegraph, khôngbarhealẩn. Resetbosskhôngdrop/XPvìpháthế; chỉcombatcontribution.

Elitekhôngbar vẫnDRbìnhthường; bossphaseallowCC cófactor/whitelist riêngkhôngtrộnbarvàstunlocktựdo. TooltipchiêuPháThế20/40, nguồnnguồndamage/hỗtrợcólogđúng. CóFchohealer/TânBinhkhôngcầnđổibuildbắtbuộc.

## 4. Kiểm sau

Soloheavy/healer/pet, haiCCđồngthời,8sdeadline,3srecovery, latejoin/DC, sốn, bossreset, V01khôngbay. Chưa đo độkhócửasổ/scalethật; BOSS/MAP/NETcầnauthorvàtestscene.


## V2 — Phá thế là phá điều kiện, không phá danh tính

Mỗibossghi“Điềugìkhiếnnótiếptục?” và“Ngắtcáigìtạicửasổ?”. Orenlànhậnsailệnh/cấptải, khôngmộtthanhsốđủlàxóalinh hồn. Cóphađánhvỏ,cópha F/van/cột, vàpha tương tác đượcbảo vệsau khingừng.

B/ngưỡng8s/3srecovery/khóa15s của113 vẫnđầu vàomẫu. Mainstory có F/toolcho mọi nghề, skillcótagchỉ làcáchlàmkhác; hard CCbịmiễnvẫncóthểđóngbreaktrongphaexplicit, khôngfullstunfake. Khôngmọibossphảicóbar, kháng/slow/debufftùyprofile.

Ba lựa chọntruyệnkhônggắnvàolasthit hoặcphầndamagecủađội. Bossresetretrygiữhồ sơđãsao; bảnkhảoluyệnmởsau khikhôngviếtlạihệquảlầnđầu. Tiêu chí: tênpha/hành động/hệquảkhớp132 vàbảntruyệngốc, khôngđưabayvào V01.
