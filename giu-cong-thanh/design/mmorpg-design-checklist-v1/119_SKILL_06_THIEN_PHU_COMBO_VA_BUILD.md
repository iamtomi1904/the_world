> **Bản V2 có hiệu lực · 21/10/2026:** [Báo cáo nâng sâu133](133_V2_BAO_CAO_THAY_DOI_VA_BAN_GIAO.md), [khế ước cốt truyện128](128_V2_KHE_UOC_COT_TRUYEN_VA_COMBAT.md), [utility/capstone131](131_V2_CO_CHE_KY_NANG_VA_THIEN_PHU.md). PhầnV2 ở cuối hồ sơ thay các điểmV1 có xung đột; số/rule không thay giữ nguyên. Đây là thiết kế, chưa code/asset/QA.

# SKILL-06 — Thiên phú, combo và biến thể

**Ngày:**21/10/2026 · V1thiếtkế, chưa cân build/runtime. [Nhánh114](114_SKILL_01_HO_SO_19_NHANH.md), [hệsố126](126_DANH_MUC_KY_NANG_V1.md). Không cộngquỹsứcmạnhmới ngoài20class.

## 1. Cây node dùng chung theo lineage

| Nhómnode | Mở / cost | A / B loại trừhiệu lực |
|---|---|---|
| Attackvariant |18/nghề,1TPmỗinode|TậpTrung:+15%Dđíchđầu, maxTargets1;LanTỏa:+1đích,+0,4Uwidth/radius, mỗiđíchD−15%|
| Mobilityvariant |22,1TP|TốcHành:CD−10%, mana+20%;TiếtLực:mana−20%,CD+10%|
| Guardvariant |25,1TP|KiênCố:S/magnitude+20%,duration−1s(min1);BềnVững:duration+2s,magnitude−15%|
| Capstone |35/nhánh,2TPmỗinode|Một tronghaihướngnhánhởbảngdưới|
| Aux1/2 |30/35,1TP|HộiTụ:+10%Dsignature,mana+15%;AnToàn:−10%CDguard,+15%mana guard|

Nếuguardlàblockreductionthìmagnitude+20% **tươngđối**, cap60%vẫngiữ; khôngcộng20điểm%. Fieldmagnitude=damage/heal/shield đượckhai báo, khôngkéo dàiCC theoGuardvariant. Signaturekhôngtựtăngaoebằngattackvariant, ápchỉA. KhimuamộtcặpA/Bcóthểđầutưcảhai nhưngmộtđangchọn; điểmvẫnchicảhai theo31, UIcảnhbáotốnđiểmkhônghiệulực.

## 2. Capstone19nhánh — V2 thay bảng cộng sốV1

Chỉtácđộngtarget/taghàngđó; D/H/Sđiềuchỉnhtrêncoefficientskill, khôngsourcebuffmọithứ. KhôngstackcảA/B.

| Nhánh | Hướng A | Hướng B |
|---|---|---|
|PAL|**Đội Hình Tiến Bước:** U thành hànhlang6×1,5U theo vị trí người cưỡi, hướng chốt lúc cast; giữ nguyên armor/LoS, đổi chỗ theo đoàn|**Giữ Mốc:** U thànhvòngr3U tạiđiểmdừng, khôngfollow; cùngarmor10%/6s/max5, đổi hìnhđểgiữchỗ|
|DKN|**Đường Về:** Ufollow-up quay đúng dấu cũ, tầm/path tối đa4,5U thay nền3,5U|**Đường Tới:** bỏreturn; mộtfollow-updash≤3U theo hướngtrỏ trong6s, cùngcost/CD/khôngiframe|
|HGD|**Người Giữ Cửa:** Sshield16%V/5s+taunt3s, được đặt tâm≤2U phía trước thay chỉ quanh chân; max5/LoS giữ|**Đội Rút Lui:** bỏtaunt S, allynhậnrun+10%/5s cùngshield; khôngimmune/knockbackmiễnphí|
|VAN|**Ghim Tuyến:** Smax1,2,6P/root1,5s trước DR|**Quét Đường:** S hai tuyến±15°, mỗi1,3P, unionmax5; root0,5s chỉmộtapply/action,targetcóthểănđủ2,6P|
|BER|**Dứt Cơn:** Ucancel sớm giảm1s CDcòn của C, một lần/U, khôngbank nếu Cđãsẵn; mất thời gian D+15% còn lại|**Bổ Dứt Điểm:** Ukhôngcancel;S chuyển0,5Pbleed thànhpacketimpact nocrit/nolife/noproc, cùngtổng2,9P|
|WND|**Giữ Phong:** Sfieldvòngr2,5U; một follow-up S trong4s dời tâm≤1U/LoS trongrange5, khôngrestarttick|**Truy Phong:** có Kiếm Lộ thìfield S thànhhànhlangdọc B dài≤4U/rộng2U,4tick/tổng0,8P/max5; impact1,6P ởđíchđápgiữ|
|ASN|**Một Đường Đến:** Sdash hai đoạn tổng5U, đoạn2 cho chỉnh hướng một lần≤30° theo trỏ; cùng2,6P/unionmax5|**Hồi Ảnh:** Sđi2,5U vàquayvề2,5U, mỗiđợt1,3P,unionmax5/mộtproc; mấttầmvào đểcóđườngra, pathvềvẫnbịchặn|
|HSW|**Hạ Trảm:** Sgiữ quạt2,5U/120°, cho giữthêm tối đa0,4s sau1sniệm để chốt hướng cuối; khôngtăng D/miễn thương|**Đường Kiếm Nặng:** Sthànhcapsule4U/r0,5, cùng3P/max5/airborne0,6s; bỏvùngquạtrộng, khôngđạnđốikhông|
|THU|**Mạch Nhánh:** Khi cóconductor, A tách3nhánh từmốc (1,3M/0,65M/0,65M), pathmỗi nhánh≤7U tínhtừnguồn; khôngmốc thìchain V1|**Tụ Dẫn:** Amax1,1,3M+0,65M sau0,6s nếucònvalid/LoS/range7; khôngchain, tổngthấp hơncụm3đích, mộtproc|
|FIR|**Nén Hỏa:** Udồn100%Burn vàoimpact thay nền50%; phầnchuyển giữflags DoT/sourcehook, khôngcòn Burncủachiêuđó|**Ủ Tàn:** Ubỏnén; next S chuyển50%impact sang Burn,1,1Mimpact+1,7MBurn/5s ởrank1, tổng2,8M, phụthuộcuptime|
|WAT|**Băng Hồ:** S vòngr2,5U hai đợt0,8s cách, mỗi1,15M,unionmax5, freeze1s chỉmộtapply/target/action|**Triều Thẳng:** Sthànhsóngdài6U/rộng1,5U,2,3M/freeze1s/max5; mấtvùngtrònđểquétđường, wavehittheo Travelkhôngautohit|
|NEC|**Hai Người Gác:** Cốt Kích chia hai đích khác nhau trongrange/LoS (0,20M/con); mộtđích thì cảhai cùngđánh; không thêm D/CD|**Hợp Cốt:** Schuyểnquota2slotthànhmột Cốt Vệ;HP=50%owner,defense35%,basic0,24M/1,4s,command0,40M/CD12; mấtkhảnăngchiacánh, khôngtăngtổngraw/HP|
|LGT|**Quang Trụ:** S cùngvùngr2U cóhaiimpact0,6s cách, mỗi1,35M/unionmax5; đổi burst đơn thành giữ vùng|**Song Chứng:** Shaiimpact0,6scách, mỗi1,35M/r1,5U,unionmax5/cùngcritroll; cảhaiđiểmtrong6U/LoS, khônghai lần2,7M|
|DRK|**Vực Tĩnh:** Sfieldr2,5U,4tick tại0/1/2/3s sauactivation, tổng2,8M; kết thúc sớm3s thay4s|**Dư Ảnh Trượt:** field Stịnh tiến≤3U trong4s theo hướngchọn,r2U; tổng2,8M/max5/slowgiữ, mọiđiểm trongrange6/geometryhợp lệ|
|EAR|**Chấn Tâm:** S sónglan0,6s từtâmhợp lệ (selfr3U/mốcr2U), cùng2,4M/max5; thayroot bằngpush0,5U theo displacementguard|**Dời Mốc:** U cho mộtfollow-up dời mốc≤1,5U trước S, mốcvẫn trong3U/LoS; S r2U/root1s/Dgiữ, khôngrestartwindow6s|
|ARC|**Mưa Dày:** Smộtvùngr2U,3tick/3s cùngtổng2,8P, đánh đổi diện tích vàthời gian giữvùng|**Rải Cánh:** Shai vùngr1,75U trong7U,2đợtmỗi1,4P,unionmax5; targetăn2đợtkhôngvượttổng2,8P, flagsfieldnocrit/nolifegiữ|
|SPI|**Linh Công:** Spet D+20%/6s vàpetshield8%/4s; leash theo chủ tạm14U thay12U trong6s, khôngvượtarenabounds/tường|**Linh Hộ:** bỏ D+20%/petshield;Schủnhậnshield8%owner V/4s nếu TREEở≤5U, khôngbuffcảchủvàpetcùnglúc|
|PRI|**Liền Mạch:** Utoàn1,10H ở Release0,8s, khônghealđầu|**Truyền Dẫn:** Uhai đồng minh≤2U nhau/cùng6U, mỗi0,20H lúc accept +0,35H lúc Release; mộtngười thìkhôngtựgấpđôi share|
|WOD|**Giữ Mầm:** U0,80H thành4tick/4s trênmộttarget, mạnh nhịphồi nhưngkhôngtransfer|**Chuyển Mầm:** Ugiảm tổngxuống0,72H/5tick/5s; một Ufollow-up chuyển phầnhealchưatrả sangally/self6U, giữsnapshot/expiry/nextTick, nguồn cũgỡ; khônglàm mới5s|

Rank/talentkhôngcộngmaxTargetsquá8skillV1 hoặcpetcountquáprofile122. TăngdurationfieldvớitổngDgiữ phải chia mốctick, khôngvừa thêmthờigianvừa giữnguyênDPS.

## 3. Passive tùy chọn / vô môn

Baô15/22/30, mỗi nodeclasspassive1TP: **TĩnhLực** manaRegenngoàicombat+10%; **GiữNhịp** giảmmanacostA5%; **BềnThế** shieldC+5%. Khác nghềcùnghợpđồngtag A/C, iconhọvũkhíkhác; khôngnguồnhaste/penhiếmngoàiquyđịnh. Cầnđượcgắnvàoô mớihiệulực. Vômônpassive1TP/node: ĐiĐườngrunngoàicombat+3%; SơCứuhealBăngBó+10%; QuanSát viềntươngtác+0,5U trongvisibility. Maxmộtpassivevômôn, baô tổngkhôngbaôvômôn.

TP11 đủvídụ3variant+capstone2+2aux+3passive+1variantvômôn=11; khôngcộngcảpairoff. Vômônvariant1TP chọnBăngBócast−0,5s/heal−10% hoặcThanhTẩyCD−10%/mana+20%, theođúngskillđangmang. Trước30mộtdòngmộtvariant; sau30mộtchính+auxhợplệ, khôngđồngthờiA/B.

## 4. Combo và vật phẩm

Combochủđộngtheothứtựđòn/vịtrí, khôngautocastmacro. ASNthoátẩn→Ađượccapstone, WNDlướt→Axoaytuyến→Snhảyđáp, FIRfield→meteorchặnđường, healerCche→Uheal→rezkhikhôngcònHP. Cácbonus chỉkhigắnnode, khôngtêncombomiễnphíthêm20%D. NgọcMMOchưathiếtkế, khôngcopysấm/độcthủthành; gearprocs điquaSTAT/cap/dedup, khôngthaytalenttựđộng.

Kiểm11TP/cặploạitrừ,branchforminherit,auxcompatibility,HoTtổngD,APprimaryhookmộtlần, resetkhônggiữbuff. Chưađooptimumbuild hoặcplaytest.


## V2 — Build thể hiện một cách làm

Thay19cặpcapstonecộngsố V1bằngfork131: PALdiđoàn/giữmốc; ASNlướtgấpkhúc/đivề; FIRnén/ủ; WODnhịphồingắn/chuyểnmầm; NEChaicánh/hợpcốt. Cost2TP/cặploạitrừ35giữ, khôngxếpchồng2bảng.

Người chơichọnbuildkhôngđồngnghĩa chọn RESTORE/RELEASEhoặcđạođức. Cácchoicechuyển chức/roleteacherchogameplayđượcthửtrướctạikhu luyện, không“lỡchọnsaiđạo đứclàbuildyếu”. Aux/cặpnền119vẫnápnếutươngthích; capstoneđãthayhìnhvùngkhôngănbonus V1mồcôi.

Tiêu chí: mỗihướngcóđiềucóíchvàđánh đổithật; khôngtốn2TPđểnhậnlạigiốngybase; khácrawtiming/LoS/coveragephảicânquatrậnthực, khônggọiđãcânbằngchỉvìtổng Dnhưnhau.

## Chốt sau rà soát lần hai — tính tương thích node

Thứ tự áp dụng và ngân sách theo117: capstone thay cấu trúc trước, node tương thích sau. Không giữ đồng thời capstone V1 và V2. Mỗi node phải công bố nhãn hình chiêu được hỗ trợ; tooltip hiển thị lý do khóa, điểm được hoàn và preview sau đổi. Node tăng khiên C chỉ khả dụng nếu C hiện tại thật sự tạo shield pool; C chỉ giảm sát thương/block không được đổi tên thành khiên để nhận bonus. Chuyển build làm mất điều kiện node thì hoàn đúng điểm đã chi ở điểm an toàn, không tăng tổng TP. Không tự đổi sang node khác cho người chơi.

