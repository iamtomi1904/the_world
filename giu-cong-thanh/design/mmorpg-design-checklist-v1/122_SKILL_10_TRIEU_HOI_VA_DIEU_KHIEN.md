> **Bản V2 có hiệu lực · 21/10/2026:** [Báo cáo nâng sâu133](133_V2_BAO_CAO_THAY_DOI_VA_BAN_GIAO.md), [khế ước cốt truyện128](128_V2_KHE_UOC_COT_TRUYEN_VA_COMBAT.md), [utility/capstone131](131_V2_CO_CHE_KY_NANG_VA_THIEN_PHU.md). PhầnV2 ở cuối hồ sơ thay các điểmV1 có xung đột; số/rule không thay giữ nguyên. Đây là thiết kế, chưa code/asset/QA.

# SKILL-10 — Triệu hồi, chỉ số và điều khiển

**Ngày:**21/10/2026 · V1thiếtkế, chưaAI/asset. Chủ+petchungbudget20class, khôngdùngngựalàpet. [Nguồn](105_NGHIEN_CUU_COMBAT_VA_19_NHANH.md).

## 1. Hai profile nền

| Profile | Tinh linh cây / TREE | Cốt binh / BONE |
|---|---|---|
| Quyền |SPIutility15, formnhánh30giữlineage|NECutility30;trước30UPhápSưkhôngtựcóskeleton|
| Cap / thời hạn |1/60s|2/30s mỗi con|
| HP / defense |45%ownerMaxHP;50%armor/MRes chủ|25%HP;35%armor/MRes chủ|
| Basic |0,25M/1,2s, Magic-Wood, melee1,4U/1target|0,12M/1,4s/con, Magic-Dark, melee1,2U/1target|
| Move/AI |3U/s, cùngsurface/nav, khôngbay|3U/s, cùngsurface/nav|
| Corepassive |RễBền:ngoàicombat hồi2%petMaxHP/s sau8s|XươngBền:khôngbleed, nhưngchịuburn/poison nếuprofilekhôngmiễnkhác|

HP/attack/armor snapshotlúcspawn theoquyềngear/AP chủ; profile78 P/V ápđúngmộtlần. U rankfac áp petdamage; không tự áp vào petHP nếu definition không ghi. Rawpetdamage=M_snapshot×k×U_rankfac×[1+bonusPetDamageGroup]; nhóm cuối gồm nội tại78 và buff/talent hợp lệ, không nhân thêm bonusdamage của chủ vào M_snapshot. PetHP=ownerMaxHP_snapshot×tỷlệbody×[1+bonusPetHPGroup] theo cap/profile; không nhân U_rankfac lên HP nền. ChủgâydamagekhôngnhậnbonusP, petkillcreditvềowner. Giảm/tăngmaxHPquareshow khôngfreeheal, resummoncầncost/CDmới.

## 2. Ba kỹ năng tinh linh cây

| Command | Effect / phạm vi | CD / cast |
|---|---|---|
| QuétCành |0,35M **Magic-Wood**, quạtr1,8U/100°,max3, phụ50%|8s/0,35s|
| RễTrói |Ground5U/r1,3U,max3,root1s trướcDR,khôngdamage|14s/0,5s|
| MầmCheChở |Self/ownertrong5U,shield6%ownerMaxHP/4s,groupTREE_GUARD|20s/0,4s|

MwordlàownerMAtkchốtspawn, petdirectkhôngownerlifesteal/reflect/proccascade. QuétCànhMagic-Wood rõschool, khôngsuyphysicalvìcànhđánh. Ba commandcó thểkéo lên13ô bằngthamchiếupet đangcó, khôngskillmiễn phí ngoàihotbar. RankdùnghostU, khôngSPriêng; CDtheopetCommandgrouptrênowner, resummonkhôngreset. DefaultAI tựQuétkhiđúnghostile, Rễ/Mầm chủra lệnh đểtránhngắtCC/guardnhầm; cótoggleAuto từngcommandngoàicombat. Commandkhôngtiêumanaownerthêm vìđãbudgetU/CD, khôngAIcastnhiềucùngtick.

Cốtbinh cóbasicvà mộtcommandchung **CốtKích**:0,20M/con melee1,5U,CD12s,cast0,3s; sourcepair chungcommand, maxmộtpacket/con/target/action. SignatureNEC hỗtrợ2conmax, khôngspawnvôhạn từkill. Khioverspawn thaycũnhấtđúngcap, khôngdeathproc/loot từpetbịthay.

## 3. Lệnh và quyền

Panelpet có Tấncôngđích/ĐiTheo/PhòngThủ/ĐứngChờ/ThuHồi, đườngmenu+hotbaralias, khôngchiếmWASD. Tháiđộ defaultDefensive; targetownerchọn/hostileenconter, khôngđánhneutralprotected. Ownerpointerattackkhôngtựteleportpettođích; cópath thìtới,khôngpath báoChưatiếpcận. Leashowner12U, recoveryteleportchỉngoàicombat khiđứngkẹt>5s tớiđiểmvalidcạnhowner; trongcombatkhôngteleportvượt tường/tránhcơchế, ưu tiênFollow/báoKhôngcóđường.

PetAIchọnnearestvalid hostile→ownerselectednếulệnhexplicit→ID; khôngcurrenttargetvôhạn ngoàiarena. Khôngauto-detectstealth hoặc bắnquáibaybằngmeleetừdướiđất. Mob/bossAoE nhậnpettheomask, petcóhurt/HPriêng; horsekhông.

## 4. Vòng đời/ghi công

Ownerchết: petdespawn sauactionđãRelease, khôngtiếp tụcsolo boss; đạnđãpháttheo101. Đổiworld/instance/reset/despawnexpiry dọnbody/effect/AI/timers, khôngloot/XP từpet. Disconnectgrace theo111, no-new-target; hếtlease dọn. PetchếtkhôngresetownerCD, khôngtựhồi30smiễnphí. Ownerreset/presetkhácprofiledespawn; sourcepersistentDoTđãáp theo80.

Threatcủapet actorcóthểbịenemychọn, contribution/XP mộtownern; sốpetkhôngtăngnXP/breakscale. Khônglạm dụngsummonđểresetCCDRboss. Lưupetquyềnhọc/chosenskin, khôngpersistparticle/petHPđểduplicate khi login.

## 5. Sản xuất và kiểm sau

TREE/BONE mớiđủIdle/Move/Attack/Cast/Hurt/Death/Spawn4hướng; câybodykhoảng1,25humanvisuallynhưnghurtprofileduyệt99, khôngscalehitmiễnphí. BaeffectsRễ/Quét/Mầmkhácskillschủ. Kiểmpathcầu/tường, CC, capreplace, petdeath/DC/preset,commandspam,notdoublemod. Chưavẽ/code/balance.


## V2 — Hợp tác với thực thể, không chiếm người

TREElàkhế ướcngắnhạnvớilinhthểđủđiều kiện, cótínhiệuđồng thuận/thu hồi. Khônggọibấtkỳcâyngườicủa NPCthànhpet. BONEdựngtừvậtchấtvô trihợp lệ, khôngtạothêm Oren/nhânchứngbằngcáchgiết. Hợp Cốt làđịnhhìnhlại2quota, khônghồi sinhngười chết.

Giữ TREE1/60s/3command, BONE2/30s; S/TPmới cóthểcho Cốt Vệ1actorchiếm2slot. Ghépđangcóbảo toàn tỷlệ HPcòn, khôngfreeheal; ownercredit/XPn tínhmột lần. Pet AIkhôngautođánhneutralprotected, khôngtựquyếtsốphậnstorytarget.

Tiêu chí: lore/phamhạn AI/command/rank/stat/HPsnapshotkhớp, khôngbodymớiẩnquábudget, khôngpetfarm DC hoặcqua tường. Mộtbodyvshaibodyphảiđo Ao E/EHPchứkhôngchỉso tổng HP.


**ProfileCVEV2:** CapstoneHợpCốt củaNEC.S dùngmộtCốtVệ chiếm2BONEquota; HP50%owner,defense35%,basic0,24M/1,4s/1target,Magic-Dark;CốtKích0,40M/CD12. KhôngtựnhânR/rank/bonusS lần2. GhépboneđangcógiữtỷlệHPtổng, khônghealđầy; ownerdeath/despawn/DCtheo122/111. UđơnBONE bịkhóa khiCVEchiếm2quota. HaiNgườiGácchiađíchCốtKích theo131. CầnbodyCVEV4riêng, chưa vẽ.

## Chốt sau rà soát lần hai — lệnh và hợp nhất

Chỉ số BONE/TREE/Cốt Vệ tham chiếu rank U hiện tại của chủ, kể cả được tạo bởi S; không nhân thêm rank S vào cùng đòn đánh pet. Rank S chỉ áp phần hiệu ứng riêng được khai báo của S. Cốt Kích dùng Magic/Dark, Quét Cành dùng Magic/Wood; không suy loại sát thương từ hình vũ khí.

Một pet chỉ thực hiện một hành động tại một thời điểm. Lệnh thủ công hợp lệ ưu tiên trước quyết định AI mới; không hủy Prepare/Active/Recovery đang chạy ngoài cancel mask. Buffer tối đa một lệnh,150ms; không xếp ba skill thành hàng đợi vô hạn. Cooldown lệnh thuộc owner/lineage, không reset do recall, đổi pet hoặc hợp nhất. Lệnh bị từ chối trước accept không bắt đầu cooldown.

Khi hợp hai BONE, tỷ lệ HP giữ lại bằng tổng HP hiện tại chia tổng maxHP của các BONE đang tồn tại. Một BONE còn sống cũng chỉ mang tỷ lệ của chính nó, không mặc định slot trống là đầy máu. Tạo mới khi không có pet là summon mới theo cost/CD của S; refresh Cốt Vệ đang có giữ actor/HP/nhịp đánh như131. Despawn/hợp nhất không phải kill: không tiền/XP/độc chết/triệu hồi dây chuyền. Hit đã Release có thể hoàn thành nếu encounter còn hợp lệ, không lặp attribution do actor cũ bị thay.

