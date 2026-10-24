> **Bản V2 có hiệu lực · 21/10/2026:** [Báo cáo nâng sâu133](133_V2_BAO_CAO_THAY_DOI_VA_BAN_GIAO.md), [khế ước cốt truyện128](128_V2_KHE_UOC_COT_TRUYEN_VA_COMBAT.md), [utility/capstone131](131_V2_CO_CHE_KY_NANG_VA_THIEN_PHU.md). PhầnV2 ở cuối hồ sơ thay các điểmV1 có xung đột; số/rule không thay giữ nguyên. Đây là thiết kế, chưa code/asset/QA.

# COMBAT-15 — Số nổi, log và nguyên nhân chết

**Ngày:**21/10/2026 · V1thiếtkếUI/log, chưaimplementation. [Nguồn](105_NGHIEN_CUU_COMBAT_VA_19_NHANH.md).

## 1. Số nổi theo kết quả thật

DamageHP trắngngà, critvàng+glyph, healxanh+dấu+, shieldabsorb xanhnhạt+khiên, blockkhiênchéo, DoTglyph riêng. KhôngMissRNG vìkhôngaccuracyroll; dùng Hụt/Ngoài tầm/Bị chắn/Miễn đúngresult. ShieldtoànbộkhônghiệnHPloss. Raw/overkillkhônglàactualHPdamage hoặccredit.

Gộp presentationcùngsource/target/type trong100ms, khônggộpledger/tick. Crit+normal khônggộpthànhmọihitcrit; số0khôngspam. Immune/Blocked giớihạn1glyph/giây/cùnglýdo. Textscaleđộclậpcamera; nguồnẩ khôngbịrevealvì sốnổi. Tắt sốnổikhôngtắtdamage.

## 2. Cửa sổ log

Menu Thôngtin→Nhật ký chiếnđấu, khôngchiếmphímhotbar. Tab Củatôi / Tổđộiđượcthấy / Cơchế / Hệthống; filterdamage/heal/absorb/CC/cast. Mỗievent: serverTime, nguồnđượchiện, actionId/name/form/rank, target và actualresult/reason. Expand packet của bảnthân xemraw→defense→block→shield→HP, khôngdumpẩnserver.

Clientgiữtốiđa500event hoặc5phút, đạtgiớihạnnàotrước thì bỏcũ. Khôngsave mọi particle/frame vàoPostgres. Serveraudit/retention riêngSAFE/DATA. Exporttextlocal chỉphầnđượcbiết, khôngtoken/accountId/lootseed.

## 3. Bảng tử vong

Chuỗi10s trướcchết,5packet HPdamage lớnnhất và5eventcuối, dedupnếutrùng; CCđangkhóa, shieldtrước/sau, skill/sourceđượcbiết, surface/tầngliênquan. Ví dụ “420raw→260sauphòngthủ→80shield→180HP; đangRoot0,8s”. Không đoán “bạnphảnứngchậm” khi khôngcómetric. Nút Xemchiêu/Chọnhồisinh, khôngautobuy.

Khônglộvịtríngườiẩn/aggrotable/phasebosschưađượcbiết. Logthiếudữliệughi Đangđồngbộ, không giảdamage0. Reorder/dedup eventId khôngnhânlog hoặc proc.

## 4. Summary và kiểm sau

Summarycánhân códamage/effectiveheal/absorb/CC/objective vàthờilượngmẫu. Chủ+pet cóxemriêngnhưngtổngmộtlần. KhôngpublicleaderboardDPSmặcđịnh hoặcgiậtquyềnthưởngtừhealer; threatkhôngdamage. Dummybenchmark phảiđúngprofile, khônggọiđãcân bằngtừsốgiả.

KiểmchữViệt, crit/HoTđồngthời, shield/tickkill, nguồnẩn, bridge, reconnectngoàibuffer, xóafilterkhôngxóaeventthật. Chưa vẽ SCREEN/đođộrõ hoặcchạygame.


## V2 — Log giải thích sự kiện, không kể hộ bí mật

Logchiến đấutrảlờivìsao HPmất/skillbịngắt; nhật kýđiềutraghiđiềungười chơithậtđãthấy. Hai lớp khôngtrộn: hitconstructởhồi I khônginrahọtênngườira lệnh, nguồnẩ khônglộtọađộthật.

Bảngchếtxem10sgiữ112; thêmliênkết“Dấubáođãquan sát”: vạchsàn/đènbáoáp/nguồntác động, khôngkếtluậnngười chơibấtcẩn. Gặpquáimới cóthểghiloàihànhviloạiđòn, khôngunlocktấtcảweakness/lootđằngsaubằngchỉmộthit.

Sauencounter trìnhbày “Bạngiữchốt/M đãhồi XHP/Yđãpháđúngnguồn”nếu códữliệu, khôngautođạo đứcscore. Tiêu chí: cólogđểhọc, khôngspoiler, khôngoverheal/reflectvònglặplàmđẹp đónggóp, khôngpublic DPSbắtbuộc.
