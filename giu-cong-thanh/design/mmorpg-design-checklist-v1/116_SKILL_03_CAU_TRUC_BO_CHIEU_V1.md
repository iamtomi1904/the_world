> **Bản V2 có hiệu lực · 21/10/2026:** [Báo cáo nâng sâu133](133_V2_BAO_CAO_THAY_DOI_VA_BAN_GIAO.md), [khế ước cốt truyện128](128_V2_KHE_UOC_COT_TRUYEN_VA_COMBAT.md), [utility/capstone131](131_V2_CO_CHE_KY_NANG_VA_THIEN_PHU.md). PhầnV2 ở cuối hồ sơ thay các điểmV1 có xung đột; số/rule không thay giữ nguyên. Đây là thiết kế, chưa code/asset/QA.

# SKILL-03 — Cấu trúc bộ chiêu và quyền mang theo

**Ngày:**21/10/2026 · V1đặc tả, chưaimplementation. Sốskillkhôngtăngtheo13ô. [Catalog số](126_DANH_MUC_KY_NANG_V1.md).

## 1. Dòng kỹ năng

| Nguồn | Số / mở | Tiến hóa / slot |
|---|---|---|
| Đánhthường |1action riêngtheovũkhí|Ngoàihotbar, cadence98|
| FND-A/B/C |3active mở1/3/7|Attack/mobility/guard;15/30thayformcùnglineage, rank/CDchung|
| FND-P |1passive mở1|SinhTồn=nguồnhồiHPngoàicombat1%/s đãcó; khôngcộngthêm1%lầnhai|
| Race |1active5,3passive3/9/12|Giữsau15/30; passivecorekhôngchiếm3ô tùychọn|
| Nghề |Utilityactive15+corepassive|Utilitythamgiacooldowncùngdòngsau30;coretrongbudget|
| Nhánh |Signatureactive30+coreprofile78|Khôngskillmiễnphíthứ14;PAL/DKNcánhthuộccore|
| Hồi sinh |MụcSư18|Mộtutilityfixedrank, PRI/WODkếthừa, khôngthêmSP|
| Vô môn |Active1slot18,2slot30;max1passivevômôn|Phảihọc/quyền vàchiếmô, khôngcộngtoànthưviện|

Ở30thườngcó5activenghề/nhánh+race1=6, thêm2vômôn=8; healerthêmrezthành9. Cácôcònlạicho thuốc/skillkháctươnglai, khôngtựtặng13active. Trong13ô, đặttrùnglàalias, CD/countchung. Passive khôngkéođểcast.

## 2. Core nghề15

Khôngthêmthanh rage/energy. Corelàquyềnhànhvi: KỵSĩ ngựachiến/GuardStance threat2×khigắn; ChiếnBinhquyềncleave family/đỡtạichỗ; KiếmSưủyquyềncơđộngcancelwindows; PhápSưtargetpreview/pháp khích; CungThủđạn/hướng/mark; TinhLinh lệnhsummon; MụcSưhealingtarget/rez18. Đây là biểuhiệnkit, khôngmỗi nghềtặng+10%statngoàibudget. ProfileR30 là78 khôngnhânthêmcoreR.

FND-Pcórank1–5, rate1%HPmax/s×[1+0,05×(r−1)] sau8skhônghostile; đây là hệsốtrênnguồnregenđãcó, khôngchạysong songbaseline. Hiệulựcngoàicombat, khôngthayhealerboss. CóthểSPđầutư, khôngtựmaxkhiđổinghề.

## 3. Race numeric V1

| Race | Active cốđịnhrank1 | Passive mở3/9/12 |
|---|---|---|
| ConNgười |ChấnChỉnhÝChí: hồimana10%max trong5tick1s,CD90s,0mana|Ngoàicombatrun+3%;tenacitysleep/fear+10%trongcap50%;shield5%maxHP/3s khibịenemyhitđưaxuống<30%HP,ICD90s|
| Elf |ĐiềuTức: run+15% vàmana5%max tổng5tick,5s,CD90s|Mứcphạtrunslow×0,9khônggỡroot;gợiýinteracttrong3Uđãvisibilitykhôngrevealrương;hồiHPngoàicombatrate×1,05|
| NgườiLùn |TrụVững: displacementdistance×0,5 trong5s,CD90s|Displacementdistance×0,9;damageTakenBleed/Poison−3%trongDRgroup;shield5%/3snguycấpdưới30%HP,ICD90s|

Activerace instantselfcast, khôngweaponrequired,0mana; harddisable khôngdùngtrừtagthoátCCmớiđượcduyệt. ỨngBiến/BềnChí khôngproctừself/environment/outofcombat vàkhôngcứumộthitđãgiết. Displacement reductiongộpnhân, boss/va tườngkiểm sau; khôngmiễnStun. Khôngluck/XP/APtheorace. Passivechỉmộtnguồn,3ô tùychọnkháccònở119.

## 4. Nguyên tắc kit

Mỗi kit5dòng Ađánh/Bcơđộng/Cguard/Uutility/Ssignature. KhôngépQ/E/Rtêncốđịnh, người chơi kéobấtkỳ1–9/Q/E/R/Z. Chiêunhảy cầnniệm/nâng/đáp, vùngđáp từpreviewkhôngautoaim. Nhánhtriệuhồi tổngchủ+petđượcbudget, healerđánhđượckhôngcầnresetnghề. Stealth/taunt/markmởtừkitđãghi, khôngtựmởmọiM1 ở102.

## 5. Điều kiện kiểm sau

Nghề/nhánhsaiweapon/mountkhôngcast; formcũkhôngCDriêng, corekhôngnhânkhireset; passiveFND-Pkhôngdouble regen; raceitemslot/DC/13alias. Chưa vẽ/code/playtest; kitnumberslàđầuvàoSTAT-11, khôngbằngchứngđãđạtTTK.


## V2 — Ít dòng, nhiều quyết định có nghĩa

Giữba lineage A/B/C, U15, S30, race/vômôn; khôngnhồi13activebắtbuộc. V2đổi U/capstonetheo131vàgiữ ID, không thêm20chiêuđểchebộchiêucũna ná. Mọibody/castvẫn4hướng/weapon Socketvàworldvector360°.

Nhánhcómột“câu độngtừ”: PALhộ tống, WNDrẽđường, ASNvào/ra, THUnối, FIRnén/ủ, WATchuyển, EAR đặt mốc, SPIhợp tác. Mỗicơchế mới phải cónhượcđiểmvị trí/tầm/ngântàinguyên, khôngphátthêmstatvôđiều kiện.

Tiêu chí: người chơimớidùngformrank1chơicốt truyệnđược; người chơithànhthạocótiming/vị trítốiưu, không cần macrohoặc2presetcùnghiệu lực. Băng Bó/cứu trợkhôngbịluậtnghềkhóatay.
