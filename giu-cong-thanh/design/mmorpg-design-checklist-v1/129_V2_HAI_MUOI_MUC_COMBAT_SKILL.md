# V2 — Hai mươi thiết kế combat/kỹ năng bám cốt truyện

**Ngày:**21/10/2026. Nâng sâu cùng20mục đã có, không đếm thành20việc mới. [Nghiên cứu127](127_NGHIEN_CUU_SAU_GAME_CHO_BAN_V2.md), [khế ước128](128_V2_KHE_UOC_COT_TRUYEN_VA_COMBAT.md), [kit131](131_V2_CO_CHE_KY_NANG_VA_THIEN_PHU.md). Các thông số mới là cấu hình chưa cân thử.

## COMBAT-08 — Trạng thái kể đúng nguyên nhân

Tách **tác nhân đang gây hại**, **thân thể chịu tác động**, **nguồn điều khiển**. Độc/bỏng/slow vẫn đúngcatalog, nhưng gỡđộc không tự gỡtha hóa cốt truyện. Một con sói kích động vìnguồn nước hỏng không được gắn nhãn“Lang Tộcác”; mộtkhung máy nhậnsailệnh không cóiconlinh hồn bịgiamnếuchưa cóbằng chứng.

Hiệu ứng ngắn nói rõ người chơi còn làm gì được: root códấu chânkhóa nhưngtay cònchuẩn bịchiêu; stun cóvòngxoắn vàhành độngthực ngừng. Bossimmune khôngphátbăngtoànthân. Iconstatus và dấuhiệu nguồnkhác nhau: rễđất làroot, chữlệnhchồng ởtrụ làđối tượng điều tra, không debuffthứhai.

Cađọcdiễn: tại Trạm Suối, cleansegiúp giảmđộc choally, nhưng người chơi còn phải xửlýnguồn bẩn bằngvan/đối chiếu. Tiêu chí: khôngmộtclassgiảiquyếtnguồn bằngspamcleanse; mọi ngườiđọcbiết khả nănghành động, không phảiđoán chỉtừmàu.

## COMBAT-09 — Bảo hộ là vị trí và người được hưởng

Aura có động tác **trao quyền bảo vệ**: mộtpulse lúcđầu, vòngnhận buff nhỏ và biênhữu ích. PALgiữhànhlangđoànxe; HGDchephía nguy hiểm; WATchuyểnđúngpoolkhiêncòn; PRIngắtđểđổimục tiêucóthểđãhồimộtphần, WODquảnlýhealchưatrả.

Màu/motif phản ánh truyền thống130, cùngbuffgroupkhôngvìnhánhkhácmàcộngthêmarmor. UI có “Đang được bảo hộ bởi…” với nguồn được biết, khôngvẽhàngchục vòngdưới chân. VFXtrao/shieldtransferchỉchạykhiservercommit; khôngmộtcụm+hồi giả đểtrangtrí.

Cađọcdiễn: hai Kỵ Sĩhộ tốngcùngđội chỉnguồnmạnhhiệu lực, healer vẫnthấyallynàora khỏivùng. Tiêu chí: biên/buffthậtđồngbộ, rời-vào khôngresetheal, hiệu ứngđủgọnđểthấyđường rút vàđònđịch.

## COMBAT-10 — Quái bảo vệ điều gì?

Mỗispawnprofile có độngcơ: sănăn, giữtổ, bảo vệđàn, thi hànhlệnh, kiếmnguồnổnđịnh. Độngcơchọn Alert/Patrol/Return/assist, không thêmtrí thôngminhtoàntri. Quáibị tha hóa cóhànhvingắtquãngquan sátđược, không tự thànhmộtphechung.

Orenchecửavìlệnhgác, khôngđuổivô hạn quacảhầm. Sóigiữđườngnước cóthểngưngđốikhángtrongobjectiveđãhoànthành ởcảnhriêng; khôngcảserversóihếtthù vìmộtngười. Constructưu tiênngườichạmtrụđãbáohiệu, nhưngkhôngngắttựdo castđã Releaseđểquayhitmộthealer.

Threat108 giữcôngthức/hysteresis; khácđộngcơlàrulechọnscriptedtarget/tìmđường/lãnh địa đượcauthor. Mỗiboss phải ghilýdotauntđược/không được vàfeedback. Tiêu chí: playerhiểumìnhbịđuổivìđâu, khácbầy khôngchỉkhác HP, safezonevàresetkhôngphátthưởng.

## COMBAT-11 — Quyền đánh không đồng nghĩa quyền phán xét

Phân biệt **hostile tronggiao tranh**, **trunglập sănđược**, **cóý thức cầnđối thoại**, **dịch vụ được bảo vệ**. Danh tínhthuộcloài/race hoặcnghềhắcám khôngquyếtđịnhmaskdamage. Hành độngtấn công NPCprotected luônbịserverchặn, khôngđể“chọnnhầmlàđãgiếtngườiquantrọng”.

Trongencounter cá nhân cóthểđánhbạivỏ/thúbịkíchđộngmàchưa chốtsốphận: trạng thái“mấtkhảnăngchiến đấu”và quyếtđịnhstoryfinal táchhai sựkiện. Orenlàcaserõ: đánhhỏngvỏ khôngchọn BREAK. Vùngchung khôngđểplayerkhácchốtkếtthúc riêngcủabạn.

Giữneutralguard/PvPdisabled109. Skillbắn/đặtvùngkhiđồng độitheocảnhphảitôntrọngstoryowner. Tiêu chí: Ao E/pet/DoTkhôngpháquyềntương tác hay chốtthaylựa chọn; người mới luôn cóđườngchínhsolo vàđối thoại.

## COMBAT-12 — Ghi nhận giữ người và giữ chứng cứ

Ngoàidamage/heal/absorb, encounter có objective cótên: mởđường thoát, cảnphátrụ, hoànthànhkiểmnguồn, giữvỏmáyngừngđểngười khácxửlýlõi. Objectivecredit theoobjective Id+attempt+owner, khôngtheosốlầnspam F hoặc số NPCđược overheal.

Mỗiquyềnthưởng cóđiều kiện rõ, không“điểmthiện”bí mật đểchoclassbảo hộđồtốthơn. Khôngcho lựa chọn RESTORElootrarehơnđểépđạođức. Đãxácđịnhcứuđược/ngắtđược mộtthiếtbị thìtấtcảngườihợp lệ đượcđánhgiáđónggóp dùkhônglasthit.

Actorhỗ trợquestcó HPchỉnhậnheal/covernếutag `supportObjectiveEligible`, khôngmọi NPCdịchvụ. Questauthorcấp F/tooltươngđươngđểkhôngép Mục Sư. Giữ40U/20s/điều kiện110, ngoại lệchếtsauđủquyền; khôngthaybằng DPSranking. Tiêu chí: ba cáchgiảitrậncóquyềntiếptruyện tươngđương, rewardledger khônglặp.

## COMBAT-13 — Hồi sinh không xóa ý nghĩa mất mát

Áp dụng128: HP0lànguykịchcòndấutiếp dẫn, hồiởđiểmmap làcứu trợđãchuẩnbị, cóphí NgânẤn/vật phẩmgameplay. Ngườiđược cứuđượcaccept/từchối. Dụngcụ Edrankhông phảilànguồnhồi sinhđộcquyền của“ngườichọn”.

M04giới thiệutrạm/dấu đăngkýbằngmộttương tácngắn, khôngquestđóngphíbắtbuộc. Người chưađủtiền cócứu trợvềđiểm104; NPCkhôngmắngiữmạngvìhếttiền. Không được dùngrezkéo Oren thànhngười sống hoặc dùnghealđể tháotoàn bộliênkếtmàcốt truyệncầnđiềutra.

Giữ F/5F, capphí45, mộtcứuthường/run, quota mộtphép/người nhận/bossattempt, MP/CD/ân hạn. Tiêu chí: lời thoạikhớploạihồi sinh, retry/death Idkhôngnhâncost, allclasscóđường thoát, lựa chọntruyệngiữ nguyênhệquả.

## COMBAT-14 — Mất kết nối không là hành động của nhân vật

DCkhông đượclời thoại diễnthành“đãbỏrơiđoàn/ngừnglờithề”. Tronggrace actorchịurủirotheo111, người chơiquaylạicó tóm tắtđangởbướcnào/đangchết/đangchờcứu, khôngphátmười tiếngchuônglầnhaihoặcmấtbằng chứng.

Cảnhquyếtđịnh quantrọng lưumốc trướcxác nhận: đóngappkhôngtựchọn BREAK, tiếpđọckhiquaylại. Cảnhriêng cóstoryOwner/choiceRevision táchkhỏiactionserver; disconnectchủcảnh khôngchuyểnquyềnchọnchongườicònlại. V1khôngmởdi trúworldmới.

Giữcombatlock/grace10/60s, portal/equip/preset/cooldown. Khiinstancecầnunload, ghi checkpointtrướcinteractionmộtxác nhận, khônglặpcấpvật phẩmbằng chứng. Tiêu chí: rờiphiênkhôngvôýđổiđạođức/quest, khôngfreeheal/petfarm hoặcdupeactor.

## COMBAT-15 — Log giải thích sự kiện, không kể hộ bí mật

Logchiến đấutrảlờivìsao HPmất/skillbịngắt; nhật kýđiềutraghiđiềungười chơithậtđãthấy. Hai lớp khôngtrộn: hitconstructởhồi I khônginrahọtênngườira lệnh, nguồnẩ khônglộtọađộthật.

Bảngchếtxem10sgiữ112; thêmliênkết“Dấubáođãquan sát”: vạchsàn/đènbáoáp/nguồntác động, khôngkếtluậnngười chơibấtcẩn. Gặpquáimới cóthểghiloàihànhviloạiđòn, khôngunlocktấtcảweakness/lootđằngsaubằngchỉmộthit.

Sauencounter trìnhbày “Bạngiữchốt/M đãhồi XHP/Yđãpháđúngnguồn”nếu códữliệu, khôngautođạo đứcscore. Tiêu chí: cólogđểhọc, khôngspoiler, khôngoverheal/reflectvònglặplàmđẹp đónggóp, khôngpublic DPSbắtbuộc.

## COMBAT-16 — Phá thế là phá điều kiện, không phá danh tính

Mỗibossghi“Điềugìkhiếnnótiếptục?” và“Ngắtcáigìtạicửasổ?”. Orenlànhậnsailệnh/cấptải, khôngmộtthanhsốđủlàxóalinh hồn. Cóphađánhvỏ,cópha F/van/cột, vàpha tương tác đượcbảo vệsau khingừng.

B/ngưỡng8s/3srecovery/khóa15s của113 vẫnđầu vàomẫu. Mainstory có F/toolcho mọi nghề, skillcótagchỉ làcáchlàmkhác; hard CCbịmiễnvẫncóthểđóngbreaktrongphaexplicit, khôngfullstunfake. Khôngmọibossphảicóbar, kháng/slow/debufftùyprofile.

Ba lựa chọntruyệnkhônggắnvàolasthit hoặcphầndamagecủađội. Bossresetretrygiữhồ sơđãsao; bảnkhảoluyệnmởsau khikhôngviếtlạihệquảlầnđầu. Tiêu chí: tênpha/hành động/hệquảkhớp132 vàbảntruyệngốc, khôngđưabayvào V01.

## SKILL-01 — Nghề là công việc, không chỉ bảng chỉ số

Mỗi nhánhcótruyền thống130, mộtkỹ thuậtcốt lõi, rủirovàlựa chọnđặc trưng. PALgiữđường thoát, DKNgiữđiểmtrởvề, WATphânbổkhiêncòn, PRIchiahaithờihiệuheal, WODquảnlýphầnhồichưathựchiện. Một pháp sưÁnh Sángkhôngtrởthành Mục Sưvìmàu vàng.

Giữ19nhánh/28tổhợp, rootpassive78 vàvai trò114. Truyền thốngkhôngép phe/tínngưỡng, khôngđổi Human/Elf/Dwarfquyền họchoặcđẻclass20. Mỗithẻnghềhiệnđộkhóvềngắm/niệm/quảnlýpet vàtìnhhuốngđặc trưng, khôngghi DPSgiả.

Tiêu chí: cùnggear/rank, người chơinhậnra nhánhquaquyếtđịnhvị trí/thời gian, khôngchỉquanhình; solo/nhómcóđườnggiảitươngứng vàkhôngmộtnội dungchínhbắtđúngclass.

## SKILL-02 — Đường học có người chịu trách nhiệm

Nghề15/nhánh30 đượcgiớithiệubởicộngđồngđangcóvấnđề: bếnxe, trạmchữa, xưởng/điểmkiểmnguồn. Thầydạykỹ thuậtvàgiới hạn, khôngtraobáuvậtchọnngười. NPCgốcgiữvai trò: Neristhợkiểmấn, Tessalưutrữ, Rovanlàhọcgiảcócôngviệc; họkhôngbỗngmastermọi nhánh.

Teacher Rolecóthểdùng NPCtrong82budget, khôngtựthêm19NPC/questhọcdài. Previewở15chothấyđủnhánhhợprace30, weapon/horse/quyềnvàtruyền thống. Mục Sư Elfgiữrez18/nhánh Mộc, NPCcác racekhácvẫntồntạidạngcưdân.

Tiêu chí: khôngđến30mớibịbáohếtđường, khônglụachọnpheđúngmớihọcđược, fakeclass/weapon/mountpacketvẫnbịchặn; côngcụnền nhận một lần với ledger.

## SKILL-03 — Ít dòng, nhiều quyết định có nghĩa

Giữba lineage A/B/C, U15, S30, race/vômôn; khôngnhồi13activebắtbuộc. V2đổi U/capstonetheo131vàgiữ ID, không thêm20chiêuđểchebộchiêucũna ná. Mọibody/castvẫn4hướng/weapon Socketvàworldvector360°.

Nhánhcómột“câu độngtừ”: PALhộ tống, WNDrẽđường, ASNvào/ra, THUnối, FIRnén/ủ, WATchuyển, EAR đặt mốc, SPIhợp tác. Mỗicơchế mới phải cónhượcđiểmvị trí/tầm/ngântàinguyên, khôngphátthêmstatvôđiều kiện.

Tiêu chí: người chơimớidùngformrank1chơicốt truyệnđược; người chơithànhthạocótiming/vị trítốiưu, không cần macrohoặc2presetcùnghiệu lực. Băng Bó/cứu trợkhôngbịluậtnghềkhóatay.

## SKILL-04 — Số và điều kiện phải đủ để dựng lại

U/capstone V2 làdeltaexplicit131; catalog126cậpnhật Uthậtthay vìchỉcómô tảmỹthuật. Source Statschốtlúcaccept; điều kiệnvị trí ASN/HSWđượckiểmở Releaseđãkhai báo; defense/check LoSđíchtheohit. Bấmphase2khôngtạocastmới/HPpoolmới/CDmới.

Phânbiệtkỹ thuật: transferkhiên giữpool/end; transfer HoTgiữphầnsố/tick; Quang Phângiữtổngpacket; Nén Hỏa giữrawvàflags DoTcủaphầnchuyển; Hợp Cốtgiữquota/HPtỷlệcòn. Missingpredicatephảibáo Khôngthỏa, khôngcastfallbackâmthầmthànhbuff15%.

Tiêu chí: cùngbảngdữliệu/đầu vàochohai người implementđượccùngkết quả; không cómột“hiệu ứngđẹp”thaylogic; coefficient/budgetkhôngnhậnlạirank/talenthai lần.

## SKILL-05 — Học bằng một việc đã hiểu

Bàichuyểnnghề15gồmobserve→do→explain;30làmodulecủanghề/race, khôngtựthêm26quest. M01–M03chưahọcnhiềukỹ năngnênnédùng WASD/vậtcản, không Bước Láchtrướccấp3, khôngđốikhông V01.

Trong Kcó Sổ Nghề: cáchdùng,nguồntruyền thống2câu,bàithực hànhtựchọn. Hoànthànhpracticechỉghiđãthử/lờithầy, không SP/XP/ratehiếm hoặcđiểm“thôngthạo”bắtgrind. Cảnhnhậnngựa/vũkhínềnthậtđãcóledger, khôngnạpđểhọclạitool.

Giữrankcap5/mốc1/8/15/25/35, SP35/TP11/sau45không thêm. Tiêu chí: đườnghọcrõ,thất bạitrongtậpkhôngphátruyện/thu hồi sinh, chậmquestkhôngmất XP;không phảiđọcguidebênngoàimớiquađược.

## SKILL-06 — Build thể hiện một cách làm

Thay19cặpcapstonecộngsố V1bằngfork131: PALdiđoàn/giữmốc; ASNlướtgấpkhúc/đivề; FIRnén/ủ; WODnhịphồingắn/chuyểnmầm; NEChaicánh/hợpcốt. Cost2TP/cặploạitrừ35giữ, khôngxếpchồng2bảng.

Người chơichọnbuildkhôngđồngnghĩa chọn RESTORE/RELEASEhoặcđạođức. Cácchoicechuyển chức/roleteacherchogameplayđượcthửtrướctạikhu luyện, không“lỡchọnsaiđạo đứclàbuildyếu”. Aux/cặpnền119vẫnápnếutươngthích; capstoneđãthayhìnhvùngkhôngănbonus V1mồcôi.

Tiêu chí: mỗihướngcóđiềucóíchvàđánh đổithật; khôngtốn2TPđểnhậnlạigiốngybase; khácrawtiming/LoS/coveragephảicânquatrậnthực, khônggọiđãcânbằngchỉvìtổng Dnhưnhau.

## SKILL-07 — Đổi kỹ thuật không viết lại lời đã nói

Reset AP/SP/TP/skillpresetlàđiềuchỉnhcáchlàm, khôngxóa GATE/choice/relationship. Không phảituyênthệphảnbộiđểđổicapstone, khôngnghi lễhút kýức người chơi. Quyềnrace/nghề/nhánh đãchốt dài hạn V1giữ.

Migration V1→V2giữearned/ranklineage/CD, hoàn TPcácnodecapstonethực bịthayđểngười chơichọnlại; khôngautođổibuildmộtcáchngầm. Playerđangtrậnápconfigversioncủaattempt, thayởđiểmantoàn sauđó. Pet/sustainedbufftừnodecũdọntheopolicytrước khiápmới, khônggiữ Cốt Vệ+hai BONE.

Tiêu chí: previewrõnodekhôngcònhợp lệ/điểmhoàn, khôngâmđiểm/mấtquyền/dupe, khôngrestart CD/heal; lựa chọncốt truyệnvẫnđược NPCnhớđúng.

## SKILL-09 — Hình và âm là dấu nghề

Khôngmọivùngcổđều tímhưkhông hoặcmọicasterthảquảcầuđổimàu. Đườngkiếm WNDlàcungmảnh/hướnggió, DKNcólờikhắc/dấuquayvề, HGDmặt khiênđọcđượcphíache, THUđầudẫnvànhánh, FIRcóviênđá/tànnhiệt, WATmàngnướcbằngpoolcòn, NEClàkhớpxươngghépvô tri, PRI/WODcóhìnhnén/chuyểncứu trợkhácnhau.

Ở V01âmđènbáoáp/khóa Orenđãcùngmotifvớiđồkiểmấn Nhà Đèn; khôngchèn thoại Edrankhông cónguồn. Ba LODgiữbiên/đầuđạn/thời gian/P0, atlasoriginalbounds/socketriêngkhôngcắtvìthânnhỏ. Khôngspamvòngauralớn.

Tiêu chí: nhậnranguồn/hành độngvàphatừsilhouette/cửđộng,khôngcầnfxkínmàn; storyboard/manifestcó ID/costsản xuất. Chưavẽ/audio, khôngđánhđồnghồ sơvớiassetđãxong.

## SKILL-10 — Hợp tác với thực thể, không chiếm người

TREElàkhế ướcngắnhạnvớilinhthểđủđiều kiện, cótínhiệuđồng thuận/thu hồi. Khônggọibấtkỳcâyngườicủa NPCthànhpet. BONEdựngtừvậtchấtvô trihợp lệ, khôngtạothêm Oren/nhânchứngbằngcáchgiết. Hợp Cốt làđịnhhìnhlại2quota, khônghồi sinhngười chết.

Giữ TREE1/60s/3command, BONE2/30s; S/TPmới cóthểcho Cốt Vệ1actorchiếm2slot. Ghépđangcóbảo toàn tỷlệ HPcòn, khôngfreeheal; ownercredit/XPn tínhmột lần. Pet AIkhôngautođánhneutralprotected, khôngtựquyếtsốphậnstorytarget.

Tiêu chí: lore/phamhạn AI/command/rank/stat/HPsnapshotkhớp, khôngbodymớiẩnquábudget, khôngpetfarm DC hoặcqua tường. Mộtbodyvshaibodyphảiđo Ao E/EHPchứkhôngchỉso tổng HP.

## SKILL-11 — Câu chuyện chung, quyền trải nghiệm riêng

PvPdisabled V1giữ, khôngbiếnmâuthuẫnphe/race thànhquyền PK. Playerđi Hắc Kỵ/NECkhông đượckẻkháctấn côngtronghubvìlore. Saucáckết quảcá nhâncóthểchungmap/dịchvụ, phekhôngcấmhealergiúpngười chơiđãphêbình Giáo Hội.

Đồng độitheocảnhcủastoryowner nhậnquyềnchiến đấu/cứutheorun, khôngkýlựa chọnthay. Khác tiếnđộđượcbáospoilervàtừchốikhôngbịphạt. Thủthànhđộc lậpgameplay/loot/level; sharedwalletnạp khôngchuyểnpowersang MMO.

Tiêu chí: khôngprofile PvPgiả/packetfriendlyharm, tooltipđúngmode, bossreplaykhôngtạohaiquyếtđịnhchính sửcủamộtchar, hỗ trợbạnkhôngnhảyquestcá nhân.

## SKILL-12 — Preview cho biết điều người chơi cam kết

Preview V2bổsungđườngbẻcondutor, quạtche HGD, hànhlang PAL, vị tríreturn DKN, dảigấp ASN, vùngdờicủa WND/DRK/EAR. Cóglyph **Đã đặt mốc / Theo đường / Có thể chuyển / Pha2** ngaytrênslot liênquan, khôngmộtthanhchỉdẫnmớichecảnh.

Chọnphase2dùnglạibind/targetmode, khôngbắnđánhthườnghoặc Fkhichọnally/click UI. Vùnginvalidkhôngclampâmthầmqua sông/cầu; vị trídịchtừtargetmớiđượckiểmserver. Poolkhiên/HoTchuyểnhiệntrướcsốkhảdụng/expiry/đích, khônghứahealđíchmớitừsốmax HPcũ.

Tiêu chí: previewvàpacketkhớp131; niệm/nhảy/rơi/đáp/membershipđọcđượctrong3LOD; mấtfocus/DC/CC/timeoutkhôngđểphase2castlạc. Chưacósceneprototypeđãđo, khôngpass ART-04từmô tả.
