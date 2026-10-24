> **Luật khu vực hiện hành ·22/10/2026:** [MAP-06](188_MAP_06_PHAN_LOP_KHU_VUC_VA_QUYEN_GIAO_TRANH.md) cụ thể hóa safezone, PvE khác phe, W06 và arena matchteam. Giữ mask/guard và combatlock theo109/111; PvPdisabled bên dưới chỉ còn áp năm vùngPvE và không gian an toàn. Chưa triển khai.

> **Mở rộng phe/PvP ·22/10/2026:** [Hai phe, bang hội và năm loại không gian mới](186_FACTION_01_HAI_PHE_BANG_HOI_VA_CHIEN_TRUONG.md). Chọn phe khi chuyển chức15; W06cấp40–60cóPKđối phe, samefactionchỉđấu trong giải chính thức. Thay giới hạn “khôngmap46–60/chưaPvP” riêng phạm vi mới, giữnguyên5vùngPvEcũ/cap60. Checklist **525mục:119hoànthiện /11mộtphần /395chưa thiết kế**. Chưa code/vẽ.

> **Bản V2 có hiệu lực · 21/10/2026:** [Báo cáo nâng sâu133](133_V2_BAO_CAO_THAY_DOI_VA_BAN_GIAO.md), [khế ước cốt truyện128](128_V2_KHE_UOC_COT_TRUYEN_VA_COMBAT.md), [utility/capstone131](131_V2_CO_CHE_KY_NANG_VA_THIEN_PHU.md). PhầnV2 ở cuối hồ sơ thay các điểmV1 có xung đột; số/rule không thay giữ nguyên. Đây là thiết kế, chưa code/asset/QA.

# COMBAT-11 — Quyền giao tranh và an toàn thao tác

**Ngày:** 21/10/2026 · V1thiếtkế; chưaPvP/lootimplementation. [Nghiên cứu](105_NGHIEN_CUU_COMBAT_VA_19_NHANH.md). PvEkhông friendlyfire; không skull/freePK V1.

## 1. Ma trận quan hệ

| Đích | Đánhthường / skilldamage | Heal/buff | Tươngtác |
|---|---|---|---|
| Quái hostile |Có khi đủvisibility/domain/LoS|Không trừskillconversion đượcduyệt|Xemtarget|
| Quái trunglập/độngvậtsăn |Chỉ khi spawn có huntable, confirmneutralpolicy|Không|Quest/actioncóquyền|
| Thútrangtrí/NPCdịchvụ |Không|Không tự tácđộng economicNPC|F theođịađiểm/quyền|
| Đồngđội/playerkhác |KhôngPvEdamage|Theo allyrelation/range/skill|Party/trade cầnconsent|
| Pet/triệuhồiđồngminh |Không|Chỉ recipientMask cho pet|Lệnh củaowner|
| Vậtthểcơchế |Chỉ damageabletag/queststate|Không mặcđịnh|F hoặcskilltag rõ|

SkillAOE lọcmask trước damage, khônghit rồihoànbằngheal. Actionpacket do clientchọnenemyId không vượtserverrelation. Các sourcepet/DoT/explosion cũng kiểmquan hệ; không lách friendlyfire qua field. Ngoạitrangkhông đổi faction.

## 2. Trunglập và chống bấmnhầm

Mặcđịnh “Bảo vệ sinh vật trung lập” bật. AoE/đạnvôhướng không khởi chiến sinhvậttrunglập khi guard bật. Muốn săn: chọn huntabletarget, F→Săn/Đốiđầu→xácnhậnmộtlần cho cáthể/encounter, hoặc tắtguard rõ trongsetting. Không bắt tổhợpCtrl vốn browserdùng; cóicontrunglập ởtargetframe. Khi đã bịđịch hóa hợp lệ, đánhthườngtheohướng như cũ, không bắt confirm mỗihit. Guardkhông ngăn tựvệ nếu sinhvật đanghostile vớimình.

Quest yêucầusăn dùng cùngflow, không buộcgamekhuyếnkhíchgiết mọiconvật. Spawnprotected khôngmởđánh kểcảguardtắt. Thútrangtrí không giảHP/droptable. Killquest/chest/corpseinteraction cóvalidationđộc lập, không đồngnghĩa aiđánhtrước lấyhếtnộidung.

## 3. Encounter mở và quyền thamgia

Bossmap/sựkiệnpublic: publicencounter cho ngườihợp lệ theo110, khôngpartyfirsthit độcchiếm. Mobthường khônglockedprivate vì đánhđầu; encounterledger hỗtrợ nhiềuplayer. Questpersonal dùng instance/phasing cá nhân hoặc objectivecredit theo đúngflags, khôngcho ngườiđãxong giếtNPC làm người khác mấtquest.

Khônggiữ loot bằnglast-hit; quyềnXP/loot tách eligibility/roll ở110/LOOT. Người ngoài party cóđónggóp không tựgiảmXPcarry của người mới. Anti-grief dựa phạmvi/tácđộngthật, khôngẩnngưỡngdamage khiếnhealer không cóphần.

## 4. Safezone và PvP

Safezonevolume cósurface/rulesId: cấm khởi phát damage/negativeeffect từtrongra hoặc ngoàivào, không heal người đanghostileencounter qua biên để exploit. Khi playerđangcombat chạm biên: chặn đi và hiện “Đang giao tranh”, khônggrantimmunity. Điểm spawnan toàn/hub tách khỏiarenaboss; map author không đặtchokepoint khiếnplayerbịkẹt vôhạn, córoutequaylạihợplệ.

PvPV1 **chưa mở**, không duel/PK/tranhboss giếtplayer, không nútbậtPK giả. Nếu tươnglai mởduel cần hai bên đồngthuận, arenarules, countdown, reward/no-stakes và skillmodifiers theo123. Không buộcPvP để xongtruyện hoặc đổi tiềnkhóathành tiềnkhôngkhóa. Đây là quyếtđịnhscopeđầurõ, khôngbỏtrốnglogic PvP.

## 5. UI và xửlý cạnhtranh

Targetframe hiệnHostile/Trunglập/Bảovệ/Đồngminh/Khôngthểtácđộng, cóglyph lẫnchữ. Saiquyền báo “Mục tiêu được bảo vệ”, khôngMissRNG. Tươngtác FđượcownerUI tiêu thụ, khôngđánhxuốngcảnh; deadplayer chọncứu theo104, không loot đồ người đó.

Serverxétlạiquan hệ tại accept và hit; đổi map/party/phasing khônggiữ quyềncũ. Bỏ projectile khi scopeđích không cònđược phép; không gây packettrễ vàotargetvừathànhprotected. Test AoEtrunglập, đạnxuyênNPC, petownerđổiinstance, vùngsafe, bosschung, questcáthể. Chưa viếtlogic hoặc thử.


## V2 — Quyền đánh không đồng nghĩa quyền phán xét

Phân biệt **hostile tronggiao tranh**, **trunglập sănđược**, **cóý thức cầnđối thoại**, **dịch vụ được bảo vệ**. Danh tínhthuộcloài/race hoặcnghềhắcám khôngquyếtđịnhmaskdamage. Hành độngtấn công NPCprotected luônbịserverchặn, khôngđể“chọnnhầmlàđãgiếtngườiquantrọng”.

Trongencounter cá nhân cóthểđánhbạivỏ/thúbịkíchđộngmàchưa chốtsốphận: trạng thái“mấtkhảnăngchiến đấu”và quyếtđịnhstoryfinal táchhai sựkiện. Orenlàcaserõ: đánhhỏngvỏ khôngchọn BREAK. Vùngchung khôngđểplayerkhácchốtkếtthúc riêngcủabạn.

Giữneutralguard/PvPdisabled109. Skillbắn/đặtvùngkhiđồng độitheocảnhphảitôntrọngstoryowner. Tiêu chí: Ao E/pet/DoTkhôngpháquyềntương tác hay chốtthaylựa chọn; người mới luôn cóđườngchínhsolo vàđối thoại.
