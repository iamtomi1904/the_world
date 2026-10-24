> **Điều chỉnh nhân vật có hiệu lực · 22/10/2026:** [Hồ sơ 208](208_DIEU_CHINH_NHAN_DIEN_VU_KHI_VA_HGD_DI_BO.md) thay các mô tả xung đột: HGD dùng kỹ năng khi đi bộ; VAN giáo + khiên; PRI thánh thư + trượng chữ thập; xạ thủ Người Lùn dùng nỏ/bẫy; có trang bị mũ. PAL/DKN vẫn cần ngựa. Ảnh là 2D pixel cho thế giới 2.5D.

# V2 — Cơ chế kỹ năng và thiên phú có bản sắc

**Ngày:**21/10/2026 · V2 có hiệu lực cho U/capstone được nêu. Skill ID/class ID/lineage,35SP/11TP/rank5/hotbar13 giữ. [Catalog126](126_DANH_MUC_KY_NANG_V1.md) được đồng bộ bảng U; bảng V1 là lịch sử ở các đoạn được thay. Chưa code, vẽ hoặc cân DPS/EHP thực.

## 1. Hợp đồng đổi cơ chế

Không tăng đồng loạt hệ số để gọi là nâng cấp. A/B/C/S giữ số V1 trừ capstone được chọn hoặc U biến đổi packet đã nêu. MP/cast/CD nền U giữ theo bảng126: đa số20/0,2–0,3s/24s; ARC18/0,2s/20s; NEC30/1s/25s; SPI35/1s/45s; PRI20/0,8s/8s; WOD18/0,6s/8s.

U cómagnitude D/H/S/armor/next Damage vẫn dùng rankfac117. U chỉđổi hình/đường/đích dùng **base CD−3% mỗi rank thêm, tối đa12%**, không tăng range/CC/cap. Không áp cảrankbuff lẫnrank CD nếu không ghi. Đổi công thức hồi chiêu nền này là quyền rank của chiêu, CDRgear áp sau và vẫncap40%.

Follow-up U/S là **pha lệnh của cùng kỹ năng**, không charge/cast miễnphí thứhai. Giữ U bind cùngô, mộtlệnh/hạn, không thêmô14; mana/CD commit lầnđầu, lầnhai kiểm đủalive/CC/weapon/horse/domain/path, khôngtrừlại hoặcreset CD. Hếtcửasổ trởvềhiện CD. Root/stun/cancel/đổiworld vẫn chặn dịch chuyển; khôngreturn xuyên tường, không iframe hoặc miễn bossmechanic.

## 2. Mười chín U sau khi chỉnh

| ID / tên V2 | Cách dùng và quyết định mới | Giới hạn / đánh đổi |
|---|---|---|
|PAL.U **Hành Lang Thệ Ước**|Dựng dải hộ tống dài6U/rộng1,5U theo hướng ngựa, tối đa5ally, armor+10%/6s|Dải nền cốđịnh theo surface/LoS; ra khỏi dải mất membership. Đổi vùng phủ lấy khả năng giữ đường, không thêm DR hoặcheal. |
|DKN.U **Dấu Ám Kỵ**|Armor Self+10%/6s; để dấu tại vị trí cast, bấm U một lần trong6s để quay về|Khoảngcách/path tối đa3,5U, sweep thật; bỏ buffarmorđội V1 để cóđường rút. Đổiinstance/đi quáxa khôngteleport về. |
|HGD.U **Mặt Khiên Giữ Cửa**|Armor+10%/6s choally5 trongquạt180°/4U trước người cưỡi|Quạt theo vị trí/hướng nguồn, khôngchephíasau; khôngbodyblock PvE hoặcredirectdamage ẩn. |
|VAN.U **Cọc Giáo Dẫn Lối**|Đặt tuyến6U/rộng1,5U/6s; Dnguồn+15% khiởtrongtuyến vàhướngđánh lệch≤60°|Taken+10% vẫn tồn tại6s kểcảrời tuyến; khôngcọcvậtcản/actor DPS. |
|BER.U **Nén Giận**|D+15%/Taken+10% trong6s, bấm U kết thúc sớm cảhai|Khônghoàn mana/CD; quyền dừngcơn là lựa chọn, khôngthưởngthêmshield/D. |
|WND.U **Định Tâm Kiếm Lộ**|Nextoffensive D+15%/6s; ghi đường B gầnnhất≤6s làm Kiếm Lộ cho biến thể S|Kiếm Lộ chỉdấu đường, khôngtựdamage; không Bhợp lệ thì S mặcđịnhvòng. |
|ASN.U **Dấu Truy Ảnh**|Markenemy6U/6s; nextskill D+15% nếu Release từngoàivùng trước120° củađích|Không đượcdamagebuffmọigócnhư V1; markkhôngrevealstealth/LoS hoặcgrantloot. |
|HSW.U **Trọng Tâm**|Nextoffensive D+15%/6s khi nguồn chưa di chuyển quá1U từđiểm chuẩn bị|Không épđứngyên nhưng bướcraxakhôngcònbonus; đánhđúng nhịp thaysteroidtựdo. |
|THU.U **Đinh Lôi**|Đặt conductortrong5U/6s; next A đi source→mốc→hướngtrỏ rồi lan hợp lệ|max3đích, tổngpath gồmnhánh≤7U, kiểm LoS từngđoạn; bỏ+15%D của U V1, khôngdamage ởmốc. |
|FIR.U **Nén Hỏa**|Next A/S trong6s chuyển50%coefficient Burn sangpacketimpact cùngchiêu|Tổngraw giữ, Burncònlạigiữ5s. Phầnchuyển giữ nocrit/nolife/noproc như DoT, không+15%D V1. |
|WAT.U **Luân Mạc**|Chuyển poolcòn của WAT.C gầnnhất do mình tạo sangally/self6U|Giữ lượng/expiry, khôngtínhlại theo HPđíchmới, capshield vẫnáp; khôngkhiênthìkhôngcast/trừcost. |
|NEC.U **Gọi Cốt Binh**|Giữ1BONE30s/captoànkit2, chọnđiểmtriệuhồitrong3U|Nguồn xươngvô tri/đượcphép, khôngdùngxác NPC/Oren hoặcngười chơi đểnhânpet. |
|LGT.U **Quang Phân**|Next A trong6s táchhaitia±15°, mỗi tia0,775M (tổng1,55M ởrank1)|Max2entity, mộtentity ăn2tia khôngvượt tổng1,55M; mộtproc/target/action, cùngcritroll. Bỏ+15%D V1. |
|DRK.U **Niêm Ảnh**|Next S trong6s vào pha chờ tối đa2s; cóđịch bướcvào hoặc bấm U một lần thì mởfield|Hết2s tựmở dùtrống; fieldgiữ4tick/tổng2,8M/range6. Khôngẩntelegraph cóquyềnthấy, khôngbanktrapvô hạn. |
|EAR.U **Mốc Địa Trấn**|Đặt mốc3U/6s, S cóthểphát tại mốc thay vìdưới chân|S dời mốc dùngr2U thayr3self; D2,4M/root1s/max5giữ, khôngnavwall/crossfloor. |
|ARC.U **Theo Dấu**|Mark8U/6s; next A ưu tiên fullpacket chođíchmarked nếunó nằmtrên đườngbắn lúc Release|Cácđíchtrước đó chỉnhậnphụ50%; đánh đổi+5%Takenowner V1. Nếuđíchmarkedné, khôngđòilạidamagevàkhôngretconhitcũ. |
|SPI.U **Gọi Tinh Linh Cây**|Giữ TREE1/60s,3commands/passive, cóthỏa thuận gọi/thu tronglore|Khôngbắt NPCcóý thức, không thêmloài/3bodymới đểđổi mode; mộtactor/cap. |
|PRI.U **Chữa Trị Thánh**|Heal1,10H chia0,40H khibắtđầu+0,70H khihoànniệm0,8s|Ngắtgiữphầnđãhồi, khônghoàn MP/CD; phầnchưahồikhôngthànhshield. |
|WOD.U **Mầm Sinh Lực**|Giữ0,80H/5tick, hiển thị phần phục hồi còn lại; capstone cóthểchochuyểnmầm|Khôngoverhealbank/shieldmiễnphí; quyềntransfer ghiởcapstone, khôngdefault mọi Mộc có. |

Các mốc/đinh/cọc là thực thể cơ chế không HP/loot/threat, khôngenemyđểfarm XP hoặcinteractqua tường. Group của PAL/HGDarmor vẫn KNIGHT_AURA strongest, DKNselfarmor group riêng DKN_SELF_ARMOR; không cộng ba nguồnarmor10% vôđiều kiện.

## 3. Hai capstone mỗi nhánh — thay bảng cộng số V1

Hai nodecùngcost2TP/mở35, nhóm loại trừ; chỉmột đượcchọn. Nângrank/aux/biến thể nhỏ trướcđó giữ119 trừ khi capstone thayđúngtargetmode/shape. Khôngđánhđồngnodesvớiquyếtđịnhthiện/ác trongtruyện.

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

Một số B thay hoàn toànshape/cáchcast nên không cộng thêmnode V1 tăngmax Targets/coeff đãbịthay. Aux119 chỉáp coefficient/costđượctag, khôngnhân Tổng Damagecủa2phase hai lần. HGD run+10% vào nhómrunbonuscap60%, khôngnguồnhiếmgear; khôngmiễnslow.

## 4. Các ca khó phải chốt trước code

**Chuyển khiên:** WAT.U chỉchọninstance WAT.Ccủamìnhcònhiệu lực gầnnhất. Resolve source→target trongmộtthay đổi; giữpool/end, cap50%HPnewtarget cóthểlàmmấtphầndư, khônggửiđượcsangbảnsaocũ. Targetđãcóshieldgroupmạnh hơn thìrejecttrướccommit/cost, previewrõ; khôngghiđènguồnngườikhác. Allyởkháctầng/ngoài LoSkhôngvalid.

**Chuyển HoT:** WODtransferkhônghealngay, khôngresetnextTick. Amountđãtrả/overhealkhông đượcmangđi. Đíchmớiđãcó HOT_WOODmạnhhơn thìreject; dùngpolicystrongest/revision đểkhôngvừaheal A vừagiữtoànpoolcho B. Khi targetchết/gỡeffectkhôngcònphầnđểchuyển. Phầnhealreftrong UIlàtheosnapshottrướcheal Received; khônghứađúng HPsẽhồi ởđíchkhác.

**Arrow ưu tiên:** ở Release, markedhurtvolumephảigiaođườngbắnquan sátđược. Khiđóreserve100%packetcho IDmarked, đíchkhác50%; markednéthìpacketreservehụt, khônghồitố HPmobtrước. Khôngmarkedvalidthìfirsthit100% nhưthường. Piercemax4/geometry khôngđổi, khônghoming hoặcxuyênprotected NPCtạocredit.

**Hợp Cốt:** Cốt Vệ dùngcả2quota, là mộtactorcóincarnationmới, ownercreditmột lần. Nếuđãcó BONE thì S hợpnhất **tỷlệ HPcònlạitheotổng HP**, khônghealđầy từghépxương; summonmới khi chưaactorphảitrảcost/CDtheo S. U khôngspawnconthứba khi2quotađangchiếm, phải hiệnlýdo. Mộtbodyítchịu AoEtrùnglàlợithếthực, phảiđo EHP; khôngtuyênbố“cùng HPđãcân”. Cầnmộtbody/rigpetmới trongngân sáchassettriệuhồi, khôngmộtclassmới.

**Multi-phase:** Cácpacket cùngaction Id/target được tổngclamprawbudgettheobảng; phần DoTchuyểnimpact giữhook nguồn Burn/Bleed của78 (không đổi thành directhook cao hơn); critrollchung, once-per-action procchung. Nén Hỏa/Bổ Dứt Điểm phần Dotchuyểnimpactkhôngbỗngcrit/hút/proc, giữschool/element vàkhôngapply Burn/Bleedđãbịchuyển. Khônggộp cảcapstone V1+V2 đểnhậnbonusẩn.

## 5. Vì sao thay đổi chưa đồng nghĩa cân bằng

Giữ tổngraw không bảođảm cùng DPS: burst sớm, diện tích, sốđích, LoS, mana, rủirođứng vàmộtbodypet đềuđổioutcome. So burst10s/sustain60s/EHP/heal/solo trên45/60, bossimmune và nhiều người, khôngdùngmộtcon số DPSđểduyệt tấtcả. Chưa chạy thử hoặcđặtthêmđiểmthưởng nào.


**Nhịp capstone:** Các bảng ghi thay đổi so với bộ nền, không cộng cùngcapstone V1. Những pha S cóhaiđợt/đườnggấp/giữniệm được whitelistevent trong cùngaction vàkhôngreset CD. Half-packet từskilltheothời gian giữnocrit/nolife/noprocdotflags; directmultiimpact LGT/WAT dùngcritrollchung. Mấtđích/ra LoS ởđợt2 thìđợt2hụt, khôngchuyểnhếtbudget sangđợt1. Tấtcả hướngđi mới cópreviewriêng.


**Khóa hành động pha2:** Return/dash/move marker/follow-up S chỉ nhận khi actor rảnh hoặc cancel mask COMBAT-02 cho phép; không bỏ Recovery để đánh/né sớm. Recast invalid không di chuyển hoặc sao chép state. Với WAT.U, thiếu pool/đích mạnh hơn trước accept thì không cost; nếu state thay đổi sau accept, transfer hủy nguyên tử và giữ pool nguồn, mana/CD đã commit giữ theo97. WOD pha2 không cost mới, chỉ tiêu quyền chuyển khi commit hợp lệ, không restart hạn. CVE đang tồn tại mà NEC.S sẵn do CDR: refresh duration30s/buff S, giữ HP/nextAttack/command CD và actor ID; không spawn thêm hoặc heal đầy.

## Chốt sau rà soát lần hai — thời điểm và tiêu quyền

Các buff “đòn/kỹ năng kế tiếp” được giữ khi chỉ preview hoặc lệnh bị từ chối trước accept. Khi một hành động đủ tag được accept, quyền được giữ riêng cho action đó; đến Release mới tiêu quyền và kiểm điều kiện vị trí. Hụt mục tiêu hoặc không đạt điều kiện ở Release vẫn tiêu quyền; bị ngắt trước Release trả quyền nếu buff gốc chưa hết hạn, không kéo dài hạn và không hoàn mana/CD của chiêu đã accept. Một action không giữ hai bản cùng buff; nhấn lại U không cộng dồn hoặc kéo dài vô hạn.

PRI capstone Truyền Dẫn chia rõ mỗi người0,20H lúc accept và0,35H lúc Release; hai người tổng1,10H. Khóa hai recipient tại accept, không dồn phần của người chết/ra tầm sang người còn lại; mỗi pha kiểm đích còn hợp lệ. Các con số trước rank/heal modifiers. PRI hướng Liền Mạch bỏ hoàn toàn heal sớm.

Rank U có magnitude thực (PAL/DKN/HGD/VAN/BER/WND/ASN/HSW/NEC/SPI/PRI/WOD) dùng hệ số magnitude1/1,08/1,16/1,24/1,32 trên đúng damage/heal/shield/armor hoặc buff đã khai báo; không nhân số pet, quãng dash hay thời gian. LGT tăng tổng damage hai tia qua rank A, nên U **chỉ giảm baseCD3% mỗi rank thêm**, không nhân lại damage A. U thuần cơ chế THU/FIR/WAT/DRK/EAR/ARC cũng chỉ giảm baseCD như vậy, tối đa12%. DKN chỉ scale armor; NEC/SPI chỉ scale output pet theo122. Không nhận đồng thời cả magnitude và giảm CD từ rank U.

