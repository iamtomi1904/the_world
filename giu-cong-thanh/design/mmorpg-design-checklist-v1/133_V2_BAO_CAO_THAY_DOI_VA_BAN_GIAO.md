> **Bổ sung sau rà soát:** [Báo cáo134](134_RA_SOAT_V2_LAN_HAI_VA_CHOT_QUY_TAC.md) và phần chốt tại104/117/119/122/131 làm rõ các trường hợp biên.

# Báo cáo V2 — Hai mươi mục combat/kỹ năng bám cốt truyện

**Ngày:**21/10/2026 · **Trạng thái:** bản nâng sâu thiết kế, chưa triển khai, vẽ asset, migration hoặc chơi thử. Đây làsửa cùng20mục, tiếnđộ **80 hoàn thiện hồ sơ /7 một phần /426 chưa thiết kế =513** giữ nguyên.

## 1. Kết luận phân tích

V1 đã có hợp đồng số, nhưng nhiều utility/capstone giống nhau, lorechưa giải thích hồi sinh và các boss dễthành cùngmộtthanhpháthế. V2 giải quyết bằng kỹ thuật nghề cóquyết địnhvị trí/nhịp, quyền đồng thuận và trạng thái nguồnđiều khiển. Không tăngthêmmọi thứ đểcóvẻ lớn hơn.

Giữ quyết định chủ dự án:2.5Dpixel V4,3race/7nghề/19nhánh/28tổhợp;15/30chuyển chức;cap60/nội dung45;V01khôngbay;35SP/11TP/rank5;AP177ở60;13ôskill/item;Postgre SQL;hồi sinhphí/vật phẩm/đồng đội/Mục Sư;thủthànhđộc lập.

## 2. Tài liệu mới và đường đọc

| Tài liệu | Vai trò |
|---|---|
|[127 — Nghiên cứu sáu game](127_NGHIEN_CUU_SAU_GAME_CHO_BAN_V2.md)|Ragnarok/To S/Ravendawn/WAKFU/Nos Tale và GW2bổ trợ, nguồn chính thức và giới hạn.|
|[128 — Khế ước truyện/combat](128_V2_KHE_UOC_COT_TRUYEN_VA_COMBAT.md)|Phân biệt thân thể/danh tính/lệnh, hồi sinh, lorekhôngkhóa sức mạnh.|
|[129 — Toàn bộ20mục V2](129_V2_HAI_MUOI_MUC_COMBAT_SKILL.md)|Mỗi mục có nguyên nhân, cách chơi, cađọcdiễn và tiêu chí nghiệm thu riêng.|
|[130 — Truyền thống19nhánh](130_V2_TRUYEN_THONG_NGHE_VA_THU_THACH.md)|Bảy bài thửnghề,19bài họcnhánh, Sổ Nghề và liênhệ Elarion.|
|[131 — Cơ chế/thiên phú](131_V2_CO_CHE_KY_NANG_VA_THIEN_PHU.md)|19utility/19cặpcapstone, trường hợp chuyểnkhiên/HoT/packet/ghéppetcụ thể.|
|[132 — Năm vùng/Oren](132_V2_DOC_DIEN_NAM_VUNG_VA_BOSS.md)|Cảnh/truyềnđạtcơchế trênnămvùng vàboss, giữ đúngđịa lý/ngân sáchphát hành.|
|[126 — Catalog số đã cập nhật](126_DANH_MUC_KY_NANG_V1.md)|Giữ95row A/B/C/U/S, thay19Uthật và liênkếtcapstone V2. Tênfilegiữđểkhôngđứtlink.|
|[Tác giả — bí mật/ràng buộc](../mmorpg-story-v1/10_RANG_BUOC_COMBAT_V2_VA_BI_MAT.md)|Chỉdànhchongườiviết: Edran/Oren/ranhgiớibiết, khôngđưavào HUD/playercodex.|

Hai mươihồ sơgốccũngcó phần V2nằmtrongfilevàbannerđầu, khôngchỉ mộtbáocáobênngoài. Mụcđãthiết kếtrên HTML mởđúnghồ sơđãcậpnhật; report125giữbản V1làlịch sửvớibannertrỏ V2, không giảsố mớiđãcótrong V1.

## 3. Ma trận thay đổi20mục

| Mục | V2 thêm điều gì | Cách kiểm ở tài liệu / tiêu chí tương lai |
|---|---|---|
|COMBAT-08|Statuskhácnguồntha hóa/mệnhlệnh|Cleanseđộc không tựxongquestnguồn; root/stun/bossimmuneđúnghành động.|
|COMBAT-09|Hànhlang/quạt/traoshield/nhịpheal|Biênbuff/vòngtrìnhbày/pool/tick/nguồnkhớp, khôngnhânnguồnkhiên.|
|COMBAT-10|Độngcơ/lãnh địa/lệnhgác|Orenchecửa/quái giữnguồnkhácthúsăn; threat/chuyểnđíchkhôngtoàntri.|
|COMBAT-11|Bạivỏkhácchốtsốphận|Pet/DoT/execute/lasthitkhôngghi GATE,protected NPCkhôngđánhnhầm.|
|COMBAT-12|Ghi cônggiữngười/chốt/chứngcứ|Objectivecreditmột lần, lootkhôngépđạođức, solo/groupcùngđườngthôngtin.|
|COMBAT-13|Hồi sinh cógiới hạntheothế giới|Nguykịchcònnối khácngười chếtđãtan; khôngrez Oren/gọichatừdi vật.|
|COMBAT-14|DCkhôngthànhquyếtđịnhtruyện|Choice Revision/storyOwnergiữ, appđóngkhôngchọnthay.|
|COMBAT-15|Logđúngđiềuđược biết|Khônglộtênthủphạm/tọađộnguồnẩn hoặcphỏngđoánngười chơicó lỗi.|
|COMBAT-16|Breakđiều kiện/lệnh/nguồn|Oren2chốt/vỏ/choice, ngưỡngmẫukhôngthaymọibosscùngformula.|
|SKILL-01|19truyền thốngvàđộngtừnghề|Nhậnranhánhquacáchlàm, khôngchỉmàu/stat.|
|SKILL-02|Teacher/quyền/cộngđồng|Khôngtựthêm19NPC, race/factionkhôngkhóacôngcụbắtbuộc.|
|SKILL-03|Uđặc trưngthaygenericbuff|Khôngtăngsốhotbar hoặc Uformcũthành CDthứhai.|
|SKILL-04|Packet/pool/phasecóchốt |Chuyểnkhôngnhân, noncritflags/Rhookgiữ, condition Releaseexplicit.|
|SKILL-05|Observe→do→explain, Sổ Nghề|Practicekhôngstat/XPgrindmới, khôngbàiđốikhôngtânthủ.|
|SKILL-06|19cặpsidegradecơchế|Mỗi nhánhcóđánh đổithật, không A0tácdụng/Btrộihoàntoàn.|
|SKILL-07|Resetbuildkhôngresetkýức|Hoànđúng TPnodeđổiversion, CD/HP/questgiữ, khôngghéppetfreeheal.|
|SKILL-09|Manifestmotifgắncôngviệc/truyện|Orenlệnhkhóa, Kỵ Sĩlốibảo hộ, Hỏađá/tàn, Mộcphầnhealcòn; chưavẽ.|
|SKILL-10|Khế ướctriệuhồi/nguồnvô tri|Không NPC/linh hồncóý thứcbịdùnglàmpet; CVEchiếm2quota/HPtỷlệ.|
|SKILL-11|Phản hồicá nhântrongworldchung|Không PKvìrace/nghề;kháctiếnđộ/storyownerkhôngghiđènhau.|
|SKILL-12|Previewquyếtđịnhvị trí/pha2|Return/mốc/transfer/đườnggấpkhớp LoS/surface vàlệnhthực.|

## 4. Ranh giới số và ngân sách

Giá F/5F vàquota/MP/CDresgiữ104. Damage/armor/crit/Union/cap STATkhôngviếtlại. V2bỏ một sốgeneric+15%D/+5%Takenđểđổiutility: THU/LGT/FIR/DRK/EAR/ARC, khôngcộngcảbuffcũvàcơchếmới. Uthuầncơchếcórank CDgiảm3%/rankthêm,max12%, khôngmộtkhoản SPvôích. Mỗipacketconvertgiữbudget/flags/Rhook, khôngtựcrit/hútthêmphần DoT.

Khôngđổi82NPC/5dungeon/15bossdungeonmax/5bossvùng/16tinh anh; bốn tênbossmới132làbảnminhhọa trongslotđãcó, chưafullbossproduction. Bài học7/19 làmodulechọntrongquest15/30, khôngtăngsốquestmặcđịnh. Mới mộtpetbody Cốt Vệ nếuhướng Hợp Cốtđượcproduction, cộngmanifestassettriệuhồi rõràng; khôngclass/racemới.

V4giữpalette/độchi tiết/nhân vậtsprite4hướng vàmôi trường2.5D. Mốctạm/đèn/đinhquangdùngglyph/VFXkhông HP/nav/loot. Không thêmhệphản ứngnguyên tốtòancục/resource/currency/hệsinhtháiphức tạpvìthamkhảogamekhác.

## 5. Lượt đọc diễn và phần còn thiếu

Các ca đối chiếu giấy: người60hỗ trợ Orenkhôngchốtthay; healerrezkhôngđảongượccanon; WATtransfershieldkhônglàmmớipool; WODtransfergiữnextTick/phầnchưaheal; ARCmarkednékhôngretcon HP; NECmergekhônghealđầy; node V1và V2khôngđồngthời; V01khôngbay; lorechoicekhôngkhóabuild.

Những mâu thuẫn đã sửa: hồi sinh với Oren; phéphealvớitha hóa; Uchiêuđổi nhưngrank SPkhôngtácdụng; một sốcapstone Agiốngbase; tiêu chuẩnrawbudgetkhôngđủchứngminhcânbằng. Kịchbản V2làràngbuộcđểlàmprototype, khôngkết quả QA.

Cầnbảnchạy đểđo:20ngườicùngaura,45/60TTK/EHP,rawburstkhichuyển DoT, mana60s, petpath/merge Ao E,2.5Dray/height/bounds,UIphase2/latency,serveratomictransfer/reconnect/patchversion. ART-01/02/04/ROAD-02 và GATE-01vẫnchưapass. Chưacode/SQL/asset/testgame; không cócamkết“đãcânbằngchuẩn”từviệcđọcgamekhác.
