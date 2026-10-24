> **Điều chỉnh nhân vật có hiệu lực · 22/10/2026:** [Hồ sơ 208](208_DIEU_CHINH_NHAN_DIEN_VU_KHI_VA_HGD_DI_BO.md) thay các mô tả xung đột: HGD dùng kỹ năng khi đi bộ; VAN giáo + khiên; PRI thánh thư + trượng chữ thập; xạ thủ Người Lùn dùng nỏ/bẫy; có trang bị mũ. PAL/DKN vẫn cần ngựa. Ảnh là 2D pixel cho thế giới 2.5D.

> **Bản V2 có hiệu lực · 21/10/2026:** [Báo cáo nâng sâu133](133_V2_BAO_CAO_THAY_DOI_VA_BAN_GIAO.md), [khế ước cốt truyện128](128_V2_KHE_UOC_COT_TRUYEN_VA_COMBAT.md), [utility/capstone131](131_V2_CO_CHE_KY_NANG_VA_THIEN_PHU.md). PhầnV2 ở cuối hồ sơ thay các điểmV1 có xung đột; số/rule không thay giữ nguyên. Đây là thiết kế, chưa code/asset/QA.

# Catalog kỹ năng V1 — nền, nghề và 19 nhánh

**Ngày:**21/10/2026 · **Bảng số thiết kế**, chưa runtime, asset hoặc kết quả cân bằng. [Hợp đồng default117](117_SKILL_04_HOP_DONG_SO_KY_NANG.md), [talent119](119_SKILL_06_THIEN_PHU_COMBO_VA_BUILD.md), [class114](114_SKILL_01_HO_SO_19_NHANH.md). Row+default117+body/collision99 là definition hoàn chỉnh về mặt thiết kế; không đổi pipeline STAT/XP.

## 1. Quy ước đọc bảng

P=công vật lý, M=công phép, H=HealingPower, V=targetMaxHP, MP=số mana phẳng. D/H/S là damage/heal/shield; `0,8P` là raw0,8×P trước rank/talent/source/defense. GuardS`10%V/4s` là pool/thời hạn, khôngarmor. DòngkhôngD khôngdamage. AoEphụ50% trừ`all` ghiđầyđủ; helpfulheal/shield ghi`allyN all` chotừngđồngminh, khôngngầmgiảmhealđíchphụ.

Geometry: quạt/radius/capsule/line theoU, gócđộ; ground/melee theoenvelope/cùngsurface; projectile dùng hurt/path3D101, range/LoS. Arrow14U/s/r0,12; phép10U/s/r0,16; mađạothư9U/s/r0,16. Dash/stepkhôngiframe, hủy theo97, khôngxuyênđịa hình. Stepactionduration0,25s cho≤3U,0,4scho>3U; khôngteleport qua tường. Breaktag A=20, Sdamage=20, rowcóhardCC=40trongwindow, khôngcộng60; mobilitykhôngDamagekhôngBreak.

Mỗirow có mode/shape/maxTargets;self mặcđịnh1, groundselfaura ally/selftheomask. DurationDoTtick1s, totalcoefficientchiađềutick; Rankfac117 áp D/H/S và magnitude buffU/mark; B giảm baseCD3%/rank thêm,max12%; Cblock dùngfac riêng. Không scaleCC/range/petcount/duration. EffectID=`skillId.effectType`, groupchungtype102 trừshield/aura cùnglinhagemộtgroup. ChữaTrị/HoTkhôngcrit; directdamagecrit; proc/life theo117/80. U/SfixedstatuskhôngscalechỉsốkhácnếukhôngD/H/S. MP0chưacócostkhácẩn.

## 2. Nền và race

| ID / tên | Mode, shape/tầm/max | Kết quả rank1 | MP / cast / CD |
|---|---|---|---|
|FND.A ThếCông|Direction;kiếmquạt1,5U/90°/3; cung/trượngprojectile6U/1|1,20P(vũkhívật lý) hoặc1,20M(trượngNeutral), khôngbaCD|8/0,25s/6s|
|FND.B BướcLách|Directionstep2,5U/self|Chỉdịchchuyển, khôngdamage/iframe|6/0s/8s|
|FND.C ThủThế|Self/block|Block40%/1,5s, khôngyêucầukhiên|8/0s/12s|
|FND.P SinhTồn|Passive ngoài combat|NguồnregenHP1%/sđãcó,rankfac1/1,05/1,10/1,15/1,20|0/passive/0|
|RAC.HUM.A ChấnChỉnhÝChí|Self|Mana10%max tổng5tick/5s|0/0s/90s|
|RAC.ELF.A ĐiềuTức|Self|Mana5%max tổng5tick/5s vàrun+15%/5s|0/0s/90s|
|RAC.DWF.A TrụVững|Self|Displacementdistance×0,5/5s|0/0s/90s|

Racepassivesfixedrank cóđầyđủ9entry sau, cùngsources116; khôngtiêuSP/ôoptional: HUM.P1runngoàicombat+3%;HUM.P2tenacitysleep/fear+10%trongcap;HUM.P3shield5%V/3snguycấpICD90s. ELF.P1runSlowmagnitude×0,9;ELF.P2gợiýtươngtác3Utrongvisibility;ELF.P3ngoàicombatHPregen×1,05. DWF.P1displacement×0,9;DWF.P2bleed/poisonTaken−3%DRgroup;DWF.P3shield5%V/3snguycấpICD90s. Điều kiệnnguycấp=enemyhitđưaxuống<30%HPcònsống, khôngself/environment/procvònglặp. Cácpassive nàykhôngtickmana/CDmỗiframe.

## 3. Bảy nghề cấp15 — form trước chuyên sâu

| ID / tên | Mode/shape | Kết quả | MP / cast / CD |
|---|---|---|---|
|KNI.A PháThế|Directionquạt1,6U/90°/3|1,35PPhysicalNeutral|12/0,3s/6s|
|KNI.B BướcXungKích|Directiondash3U/self|Di chuyển cóhorse, khôngD|10/0s/8s|
|KNI.C ThếBảoHộ|Self|S10%V/4s|14/0s/14s|
|KNI.U HiệuTriệu|Selfaura4U/ally5all|Armor+10%/6s, strongestgroupKNIGHT_AURA|20/0,3s/24s|
|WAR.A HoànhKích|Directionquạt1,6U/100°/3|1,4PPhysicalNeutral|12/0,3s/6s|
|WAR.B BướcTiếnCông|Directiondash3U/self|Move|10/0s/8s|
|WAR.C GồngThế|Self|S10%V/4s|14/0s/14s|
|WAR.U ChiếnÝ|Self|SourceDamage+15%,damageTaken+10%/6s|20/0s/24s|
|SWD.A KiếmKích|Directionquạt1,5U/90°/3|1,35P|12/0,25s/6s|
|SWD.B LướtKiếm|Directiondash3U/self|Move|10/0s/8s|
|SWD.C PhảnThế|Self|Block40%/2s|14/0s/14s|
|SWD.U ĐịnhTâm|Self|NextoffensiveskillDamage+15%,expire6s,consumeonRelease|20/0,2s/24s|
|MAG.A PhápKích|Directionprojectile7U/1|1,40MMagicNeutral|14/0,35s/6s|
|MAG.B BướcMaLực|Directionstep3U/self|Move|12/0s/8s|
|MAG.C MànChắn|Self|S10%V/4s|16/0s/14s|
|MAG.U HộiTụ|Self|NextoffensiveMagicDamage+15%,expire6s,consumeonRelease|20/0,3s/24s|
|ARC15.A XạKích|Directionarrow8U/1|1,50P|12/0,35s/6s|
|ARC15.B BướcLùi|Directionstep3U/self|Movehướngtrỏ, khôngtựlùi ngượctrỏ|10/0s/8s|
|ARC15.C CảnhGiác|Self|S8%V/4s|14/0s/14s|
|ARC15.U ĐánhDấu|UnitEnemy8U/1|MarkedTaken+5%sourceowner/6s,khônglootcredit|18/0,2s/20s|
|SPI15.A LinhKích|Directionprojectile7U/1|1,00MMagicWood|14/0,3s/6s|
|SPI15.B BướcDẫnLinh|Directionstep3U/self|Move|12/0s/8s|
|SPI15.C LinhHộ|Self|S10%V/4s|16/0s/14s|
|SPI15.U GọiLinhThể|Ground3U/1pet|TREE1/60s, stats/3commands122|35/1s/45s|
|PRI15.A TínNiệmKích|Directionprojectile7U/1|1,20MMagicLight/Woodtheorace|12/0,3s/6s|
|PRI15.B BướcAnToàn|Directionstep3U/self|Move|10/0s/8s|
|PRI15.C LờiBảoHộ|UnitAlly/self6U/1|S10%targetV/4s|16/0s/14s|
|PRI15.U ChữaTrị|UnitAlly/self6U/1|Heal1,00H,Elfbiểuhiệnmộc|20/0,8s/8s|

KNIrowsđều horseRequired, cácnghềkhác travelmountkhôngcast; A/B/CkếthừaFNDlineage;Unhậnmới15. Corepassive116khôngtựthêmhệsốDngoàibảng.

## 4. Nhánh Kỵ Sĩ / Chiến Binh / Kiếm Sư

PAL/DKN.A/B/C/U/S horseRequired; HGD.A/B/C/U/S không yêu cầu ngựa; cácPAL/DKNbasicair quyềnở100, khôngmọiAoEdamageđấttrởthànhair. `P.Dark` làPhysical/Dark, khôngđổiPthànhMchỉvìmàuđen.

| ID / tên | Mode/shape/tầm/max | Kết quả rank1 | MP / cast / CD |
|---|---|---|---|
|PAL.A ThánhTrảm|Directionquạt1,8U/100°/3|1,50P.Light;armorSelf+10%/3s|14/0,35s/6s|
|PAL.B BướcThệƯớc|Directiondash3,5U/self|Move;S4%V/2s|12/0s/9s|
|PAL.C BảoHộThánh|UnitAlly/self6U/1|S12%V/4s|18/0s/14s|
|PAL.U HànhLangThệƯớc|Directionhànhlang6U/rộng1,5U/ally5all|Armor+10%/6s, KNIGHT_AURA, vùngnềncốđịnh;capstone131|20/0,3s/24s|
|PAL.S PhánQuyếtThánh|Ground5U/r2,5U/enemy5;ally5all|2,20P.Light;S8%V/4sđồngminhtrongvùng|42/0,8s/45s|
|DKN.A HắcTrảm|Directionquạt1,8U/100°/3|1,55P.Dark|14/0,35s/6s|
|DKN.B BướcÁmKỵ|Directiondash3,5U/self|Move;S4%V/2s|12/0s/9s|
|DKN.C HắcGiáp|Self|S12%V/4s|18/0s/14s|
|DKN.U DấuÁmKỵ|Self/returnmốc≤3,5U|ArmorSelf+10%/6s;Ufollow-upreturnmộtlần/6s,DKN_SELF_ARMOR;khôngiframe|20/0,3s/24s|
|DKN.S HắcẤnPhánTrảm|Ground5U/r2,5U/enemy5|2,50P.Dark;selfHeal0,30Hkhiít nhất1enemyHPdamaged|42/0,8s/45s|
|HGD.A ChùyTrấn|Directionquạt1,5U/90°/3|1,20P.Light;stun0,5sđíchđầu|14/0,3s/6s|
|HGD.B BướcChắn|Directiondash3U/self|Move|12/0s/8s|
|HGD.C KhiênBảoHộ|Self|Block50%/2s,khôngbất tử|18/0s/14s|
|HGD.U MặtKhiênGiữCửa|Selfquạt4U/180°/ally5all|Armor+10%/6s,KNIGHT_AURA, theo vịtrí/hướng nguồn;khôngchesau|20/0,3s/24s|
|HGD.S ThànhLũyĐứcTin|Selfaura4U/ally5all;enemy5|S16%V/5sally;taunt3senemyđượcphép|40/0,6s/45s|
|VAN.A PháTuyếnGiáo|Directioncapsule2,4U/r0,25/3|1,55P|14/0,3s/6s|
|VAN.B XungPhong|Directiondash4U/enemy3|0,50Pdọcđường,each1hit|14/0s/10s|
|VAN.C GiữTrận|Self|S12%V/4s|16/0s/14s|
|VAN.U CọcGiáoDẫnLối|Directiontuyến6U/rộng1,5U/self|D+15% khiởtrongtuyến vàhướngđánh≤60°;Taken+10% toàn6s|20/0s/24s|
|VAN.S ThươngTrậnPháQuân|Directionline6U/r0,6/5|2,60P;root1s|40/0,65s/40s|
|BER.A BổRìuBấtKhuất|Directionquạt1,8U/120°/4|1,60P|14/0,4s/6s|
|BER.B LaoChiến|Directiondash3,5U/enemy3|0,45P/đích|14/0s/10s|
|BER.C GồngCuồngÝ|Self|S12%V/4s|16/0s/14s|
|BER.U NénGiận|Self|D+15%/Taken+10%/6s;Ucancelmộtlầnkếtthúcsớm,khônghoànMP/CD|20/0s/24s|
|BER.S CuồngPhủChấnĐịa|Selfr2,5U/enemy5|2,40P;bleed0,50Ptotal5s;TakenSelf+10%/4s|42/0,7s/45s|
|WND.A PhongTrảmXoayTuyến|Directiondash2U/quạtsweep1,4U/4|1,50P.Wind;xoaypose dọc đường,hụt vẫncast|14/0,2s/6s|
|WND.B PhongBộ|Directiondash4U/self|Move|12/0s/8s|
|WND.C PhảnPhong|Self|Block40%/2s|16/0s/14s|
|WND.U ĐịnhTâmKiếmLộ|Self|NextoffensiveD+15%/6s;ghinhậntuyếnB≤6schoSvariant131|20/0,2s/24s|
|WND.S PhongVựcThiênLạc|Ground5U/r2,5U/enemy5|1,60Pđáp+0,80Ptotalfield4tick/4s;runSlow20%/4s|42/0,6s+leap0,4s/45s|
|ASN.A SongĐaoẢnhKích|Directionquạt1,3U/80°/2|1,50P chia2packet50%,1proc/action|12/0,2s/6s|
|ASN.B ẢnhBộ|Directiondash3,5U/self|Move+stealth3s,offenseHPdamagebreaktheo102|16/0s/12s|
|ASN.C PhảnẢnh|Self|S9%V/3s,run+10%/3s|16/0s/14s|
|ASN.U DấuTruyẢnh|UnitEnemy6U/1|NextskillD+15%/6s khiraRelease từngoàivùngtrước120° củađíchmarked;khôngrevealẩn|20/0,2s/24s|
|ASN.S TửẢnhLiênTrảm|Directiondash5U/enemy5,width0,8U|2,60P,haiVFXslashnhưngmộtngânsách/action|40/0,25s/40s|
|HSW.A TrọngKiếmTrảm|Directionquạt2U/100°/3|1,80P|16/0,55s/7s|
|HSW.B BướcNặng|Directionstep3U/self|Move|12/0s/10s|
|HSW.C TrọngThế|Self|S14%V/4s|18/0s/16s|
|HSW.U TrọngTâm|Self|NextoffensiveD+15%/6s khi tổngdịchchuyểntừđiểmU≤1U|20/0,2s/24s|
|HSW.S ThiênCânTrảm|Directionquạt2,5U/120°/5|3,00P;airborne0,6s,khôngđổiSurface|44/1s/45s|

## 5. Sáu pháp hệ và Tử Linh

TrượngAprojectile trừrowline/ground. SchoolMagic,elementrow;Mana/cast/CC không đổi rank; B giảmCD theo117. SummontừNEC.UkhônggiữMAG.U thànhCDthứhai, quyềnUlineageformthayvìhọcthêmmộtutility.

| ID / tên | Mode/shape/tầm/max | Kết quả rank1 | MP / cast / CD |
|---|---|---|---|
|THU.A LôiTiễn|Directionprojectile7U/3chain3U|1,30M.Thunderđíchđầu,phụ50%;stun0,5sđíchđầu|16/0,35s/6s|
|THU.B LôiBộ|Directionstep3U/self|Move|14/0s/8s|
|THU.C LôiMàn|Self|S10%V/4s|18/0s/14s|
|THU.U ĐinhLôi|Ground5U/marker|Marker6s;nextApolyline/chainmax3/tổngpath≤7U,LoStừngđoạn;không+15%D|20/0,3s/24s|
|THU.S LôiVựcThiênPhạt|Ground6U/r2,5U/enemy5|2,40M.Thunder;stun0,75sđíchđầutrúng|46/0,9s/45s|
|FIR.A HỏaCầu|Directionprojectile7U/impactr1U/max3|1,30M.Fire+burn0,30Mtotal5s,nhómBURN|16/0,45s/6s|
|FIR.B HỏaBộ|Directionstep3U/self|Move,tànlửachỉvisual|14/0s/8s|
|FIR.C HỏaMàn|Self|S10%V/4s|18/0s/14s|
|FIR.U NénHỏa|Self/nextAorS|Trong6s chuyển50%Burncoef sangimpactnocrit/nolife/noproc,giữraw/sourcehook;không+15%D|20/0,3s/24s|
|FIR.S ThiênThạch|Ground6U/r2,5U/enemy5|2,20M.Fireimpact+burn0,60Mtotal5s;fall0,8s sauRelease|48/1s/45s|
|WAT.A BăngTiễn|Directionprojectile7U/1|1,40M.Water;run/attackSlow20%/3s|16/0,35s/6s|
|WAT.B ThủyBộ|Directionstep3U/self|Move|14/0s/8s|
|WAT.C ThủyMạc|UnitAlly/self6U/1|S12%V/4s|18/0s/14s|
|WAT.U LuânMạc|UnitAlly/self6U/1|Transferpoolcòn/endWAT.Ccủamình, khôngrefresh/tínhVđíchmới;validation131|20/0,3s/24s|
|WAT.S BăngTriều|Ground6U/r2,5U/enemy5|2,30M.Water;freeze1s,khôngtự%HP|44/0,9s/45s|
|NEC.A TửẤn|Directionprojectile7U/1|1,10M.Dark|16/0,4s/6s|
|NEC.B BướcVọngLinh|Directionstep3U/self|Move|14/0s/8s|
|NEC.C CốtHộ|Self|S12%V/4s|18/0s/14s|
|NEC.U GọiCốtBinh|Ground3U/1pet|BONE1/30s,cap2toànkit;nguồnvôtrihợplệ,chi tiết122/131|30/1s/25s|
|NEC.S CốtTriềuKhếLệnh|Ground3U/2pet|Bổsung/tạođủ2BONE/30s;petD+20%/6s,khôngownerD|45/1s/45s|
|LGT.A QuangTiễn|Directionprojectile7U/1|1,55M.Light|16/0,35s/6s|
|LGT.B QuangBộ|Directionstep3U/self|Move|14/0s/8s|
|LGT.C QuangHộ|Self|S10%V/4s|18/0s/14s|
|LGT.U QuangPhân|Self/nextA|Trong6s nextAtách2tia±15°,mỗi0,775Mrank1,tổng1,55M/max2;không+15%D|20/0,3s/24s|
|LGT.S QuangTrụPhánXét|Ground6U/r2U/enemy5|2,70M.Light,khôngheal/rezẩn|44/0,8s/42s|
|DRK.A ÁmTiễn|Directionprojectile7U/1|1,55M.Dark|16/0,35s/6s|
|DRK.B BướcHưẢnh|Directionstep3U/self|Move,khôngstealth|14/0s/8s|
|DRK.C MànHắcẢnh|Self|S10%V/4s|18/0s/14s|
|DRK.U NiêmẢnh|Self/nextS|NextStrong6svàoarmed≤2s,rồitriggerkhiđịchvào/Uphase2/hếthạn;giữ4tick2,8M|20/0,3s/24s|
|DRK.S HưVực|Ground6U/r2,5U/enemy5|2,80M.Darktotal4tick/4s;runSlow20%/4s|44/0,8s/45s|
|EAR.A ThạchKích|Directionprojectile7U/1|1,50M.Earth;push0,6Utheoguard2s|16/0,4s/6s|
|EAR.B ĐịaBộ|Directionstep2,5U/self|Move|14/0s/9s|
|EAR.C NhamGiáp|Self|S14%V/4s|20/0s/16s|
|EAR.U MốcĐịaTrấn|Ground3U/marker|Marker6s;Schophépmốcr2Uthayselfr3U,cùng2,4M/root1s/max5;capstone131|20/0,3s/24s|
|EAR.S ĐịaChấn|Selfr3U/enemy5|2,40M.Earth;root1s;đágờchỉvisualkhôngnavwall|44/0,9s/45s|

## 6. Cung Thủ / Tinh Linh / hai healer

| ID / tên | Mode/shape/tầm/max | Kết quả rank1 | MP / cast / CD |
|---|---|---|---|
|ARC.A XuyênLâmTiễn|Directionarrow8U/r0,20/max4|1,65P,3pierceadditional,đíchphụ50%,khôngxuyêntường|14/0,4s/6s|
|ARC.B BướcLùiChiếnThuật|Directionstep3,5U/self|Move|12/0s/8s|
|ARC.C ThếCảnhGiác|Self|S9%V/4s|16/0s/14s|
|ARC.U TheoDấu|UnitEnemy8U/1|Mark6s;nextAreservefullpacketchomarkedtrênpathRelease,đíchkhácphụ50%;khôngTaken+5%|18/0,2s/20s|
|ARC.S MưaTên|Ground7U/r2,5U/enemy5|2,80Ptotal4tick/4s,arrowsrơi,khôngHP%|42/0,8s/45s|
|SPI.A LinhDiệp|Directionprojectile7U/1|1,00M.Wood|14/0,3s/6s|
|SPI.B BướcKhếƯớc|Directionstep3U/self|Move|12/0s/8s|
|SPI.C LinhHộCổMộc|Self|S12%V/4s|18/0s/14s|
|SPI.U GọiTinhLinhCây|Ground3U/1pet|TREE1/60s,3commands/passive/khếước122;capstone131|35/1s/45s|
|SPI.S LinhVựcCộngMinh|Selfaura5U/ownerPet1|PetD+20%/6s,petS8%petV/4s;khôngownerD|40/0,6s/40s|
|PRI.A ThánhKích|Directionprojectile7U/1|1,30M.Light|12/0,3s/6s|
|PRI.B BướcAnToànThánh|Directionstep3U/self|Move|10/0s/8s|
|PRI.C HàoQuangBảoHộ|UnitAlly/self6U/1|S12%V/4s|18/0s/14s|
|PRI.U ChữaTrịThánh|UnitAlly/self6U/1|Heal0,40Hởaccept+0,70HởRelease0,8s;tổng1,10H,ngắtgiữphầnđãheal|20/0,8s/8s|
|PRI.S ThánhVựcCứuRỗi|Ground6U/r2,5U/enemy5,ally5all|D1,00M.Light+Heal1,20Hđồngminh;khôngrez|44/1s/45s|
|WOD.A MộcKích|Directionprojectile7U/1|1,30M.Wood|12/0,3s/6s|
|WOD.B BướcSinhTrưởng|Directionstep3U/self|Move|10/0s/8s|
|WOD.C VỏCây|UnitAlly/self6U/1|S12%V/4s|18/0s/14s|
|WOD.U MầmSinhLực|UnitAlly/self6U/1|HoT0,80H/5tick/5s,sharedHOT_WOOD;capstone131cótransfer/cáchchianhịp|18/0,6s/8s|
|WOD.S KhuRừngSinhLực|Ground6U/r2,5U/enemy5,ally5all|D0,80M.Wood+HoT1,20Htotal5tick/5s; tênkhôngcórez|44/1s/45s|

PRI/WODcùngnghềcóthêm `PRI.RES` **Phép Hồi Sinh** cấp18, fixedrank1, deadAlly6U/1/LoS,30%maxmana/cast4s/CD180s; heal40%targetV/mana30%khiaccept, quota104. WOD.S Khu Rừng Sinh Lực chỉ HoT/damage, không hồi sinh người chết; hồi sinh dùng PRI.RES riêng.

## 7. Vô môn V1

| ID / tên / cấpnguồn | Mode/range/max | Kết quả rank1 | MP / cast / CD |
|---|---|---|---|
|UNI.BAND BăngBó /18thầy|Self|Heal12%V,ngoàicombat,move/damagehủy|0/3s/30s|
|UNI.CLEAN ThanhTẩySơCấp /18quest|Self|Gỡ1body/movementgroup mới nhất;khôngstun/freeze/airborne|20/0,5s/30s|
|UNI.OBS QuanSát /18thầy|Selfinfo3U|Highlightinteractđãvisible5s,khôngrevealrương/stealth|0/0,5s/15s|
|UNI.BRACE GiữVững /22quest|Self|Block30%/1,5s,khôngiframe|12/0s/20s|
|UNI.FLARE TínHiệu /25thầy|Ground8U/r0,5/info|Party ping8s,khôngaggro/markdamage|0/0s/10s|
|UNI.AID TiếpSức /30quest|UnitAlly6U/1|Shield6%V/3s,khôngrez|18/0,5s/25s|

BAND/AIDlàrank1–5magnitudeSP;CLEAN/OBS/FLARE/BRACEfixedrank1khôngSP đểkhôngscaleCC/blockbừa. Mọiactivevômônchiếmquota1trước30/2sau30vàhotbar; passiveĐiĐường/SơCứu/QuanSát1TP/max1optionaltheo119. Khôngbánquyềnhọcđộcquyềnnạp hoặcbookrandombắtbuộc.

## 8. Ghi chú lifecycle và cân sau

Chỉhàngđượcmở/castthànhcôngmớispawn/projectile/status/pet. ModifierUnioncap/DoTbossquota/shotcollisions/CCDR giữ73–80. Dạngfieldnhiềutickkhôngownerlifesteal/crit/proctheoDoTdefault; SPI/NECpetstatthờiđiểmsnapshot122, khôngđểSrank×petdamage×Urankvôý: Ufac vàoDpet, Srank áp shield/buffmagnitude được ghi theo117; pet baseM không nhân Srank thêm lần nữa.

Tất cảD/H/S ởđâylàcấu hìnhcân thử, chưađạtfixture520DPSở45đãđo, khôngpromisesmọikitngangsức. Cần kiểm mana60s,rank5/talent/AProotpassive45/60,roleTTK,cleave/petshare/air/path,reset/reconnectvàguaranteedsolomainstory. Khôngvẽ/code hoặcchạytestgame tronglượtnày.


## V2 — Cách đọc catalog hiện hành

19hàngU đã thay tại bảng, A/B/C/S nền giữ. Chọncapstone thì [131](131_V2_CO_CHE_KY_NANG_VA_THIEN_PHU.md) thay đúngshape/packet/timing đượcghi, không cộngcapstoneV1. Uthuầncơchế córankbaseCD−3%/rankthêm,max12%; Ucómagnitude vẫnrankfac117, khôngcảhai. Các phầnDamage+15%/Taken+5% V1 bịbỏ ởTHU/FIR/WAT/LGT/DRK/EAR/ARC không đượcgiữẩn. PRI/WODheal/HoT chuyển theo131, khôngcopyHPpool/tick.
