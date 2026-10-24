> **Bản V2 có hiệu lực · 21/10/2026:** [Báo cáo nâng sâu133](133_V2_BAO_CAO_THAY_DOI_VA_BAN_GIAO.md), [khế ước cốt truyện128](128_V2_KHE_UOC_COT_TRUYEN_VA_COMBAT.md), [utility/capstone131](131_V2_CO_CHE_KY_NANG_VA_THIEN_PHU.md). PhầnV2 ở cuối hồ sơ thay các điểmV1 có xung đột; số/rule không thay giữ nguyên. Đây là thiết kế, chưa code/asset/QA.

# COMBAT-09 — Hồi phục, cường hóa và aura trong tổ đội

**Ngày:** 21/10/2026 · V1 thiết kế, chưa asset/implementation. [Nguồn](105_NGHIEN_CUU_COMBAT_VA_19_NHANH.md), kế thừa ART-06/STAT-06/09. Mục tiêu biết ai được gì mà không phủ sáng cả màn.

## 1. Ngôn ngữ hình ảnh

| Cơ chế | Dấu chính | Khi nào phát / điều không được làm |
|---|---|---|
| Heal trực tiếp | Cụm dấu cộng xanh lá sáng bay ngắn, số+HP | Chỉ HP thật hồi; overheal không tạo số giả. |
| HoT |2–3dấu cộng nhỏ mỗi tick, icon thời hạn | Không một vụ nổ hồi mỗi frame hoặc mỗi lần vào aura. |
| Lifesteal | Sợi đỏ tím mảnh từ contact về source, cộng xanh nhỏ khi có HP hồi | Theo actualHPdamage/hồi thật, không hút từ shield/overkill mặc định. |
| Power buff | Weapon glow vàng/cam hoặc màu class | Gắn weapon sockets, còn buff thì glow, không thay tint toàn body. |
| Haste buff | Glow xanh lam nhạt, afterimage vũ khí ngắn | Khác Power, nhịp đòn vẫn theoaction snapshot, không frame-spam. |
| Shield | Vòng khiên bán trong, thanhpool cạnhHP | Shieldvỡ có flash vụn, hết hạn tan; không dấu cộng heal. |
| Armor/DR buff | Vòngấn mảnh/viềnkhiên dưới chân | Không thêm HPbar/shield pool nếu chỉ tăng defense. |
| Run buff | Vệt sau gót hướng ngược vận tốc | Đứng yên không kéo trail; không tự tăng atkSpeed. |
| Hồi sinh | Niệm lên điểm xác, cột sáng/lá hội tụ khi accept | Không full effect đứng dậy trước transaction hồi sinh thành công. |

Các màu là tín hiệu chứ không school damage. Poison xanh đậm/giọt rơi xuống, heal xanh sáng/dấu cộng lên để phân biệt. Hút máu chỉ đọc được ởsource/đích người chơi được phép thấy, không reveal sinh vậtẩn.

## 2. Aura: phát một lần, vòng duy trì

Cast aura có một pulse lan tới biên theo durationcast; sau đó một vòng dưới chân nguồn hoặc người nhận và icon membership. Không pulse lớn liên tục. Nếu thật có heal tick, phát dấu cộng nhỏ tương ứng, không coi đó là lầncast mới.

Gameplay aura dùng worldradius/surface/LoS trong definition; heal/support ally không qua tường kín/sàncầu mặc định. Recheckmembership bằng scheduler, ngưỡng trình bày hysteresis0,15U chỉ chốngnháy hình, **không kéo buff gameplay ra ngoài biên**. Enter/exit chỉ thêm/gỡ quyền, không resetheal nextTick. Cùng group từ nhiều người strongest, không nhân tất cảdamageReduction.

Mỗi người tối đa2vòng aura hiển thị đồng thời: vòng bảo hộ quan trọng nhất + vòng khác; motif bổ sung thành ticks ở vành và panel +N. Đây là renderingbudget, không effectcap. Aura khác nguồn/group vẫn hoạt động theo STAT; đội có nhiều bùa không mất buff vì chỉ thấy hai vòng. Targetđược hưởng aura có vòngnhỏ riêng, biênradius đầy đủ chỉ hiện khisourceđượcchọn/preview hoặc cầnphảnứng.

## 3. Nguồn hình và tọa kỵ

Weapon overlays có transform4hướng choidle/move/attack/cast/hurt/death; glow bám vũ khí, không trôi theo bbox thân. Ngựa/người/cánh chungactor, chânvòngđặtgroundprojection, không trênmóngnhấc hoặc bodyhấttung. Không nhân hai vòng vì người và ngựa haiảnh.

Skillform thay→remove oldvisual byeffectInstance, khôngspawnđè mỗi frame. Hếtmana/skillcancel/nguồnchết dọn theo policy. Timedbuffđãáp lênđích khác độc lập nếu definition cho; sustainedaura ngừng khi source mấtquyền, không thành buff vĩnhviễn.

## 4. Hiệu năng và quyền đọc

Heal cùng actor trong100ms được gộp **số nổi/hạt**, không gộp ledger/tick hoặc trì hoãn heal thật. Lifesteal nhiều hit giới hạn4sợi/giây/source ởpresentation; damage/heal đầyđủ. Heal/shield quan trọngP1, decorationP3bỏtrước. Giữ silhouette/trailđịch/cast nguyhiểm ở bản Chức năng. Không hứa FPS trướcbenchmark.

Tooltip hiện nguồn, trị sốeffective, timer, group và cáchgỡ; sheet phânHP/armor/shield/DR. Không cộng tất cảthành “thủ” vôđịnh. Tất cảvisual đọc combatstate server; đổiLOD không replayproc.

## 5. Kiểm sau

Haihealer/aura cùnggroup, HPđầy, húttrúngshield, hấttungkỵsĩ, buffđổi vũkhí/hướng,20ngườichồngfield, bật/tắtLODgiữtimer. Chưa vẽ/đo; ràngbuộc Full/Gọn/Chức năng đi vào SKILL-09/ASSET riêng.


## V2 — Bảo hộ là vị trí và người được hưởng

Aura có động tác **trao quyền bảo vệ**: mộtpulse lúcđầu, vòngnhận buff nhỏ và biênhữu ích. PALgiữhànhlangđoànxe; HGDchephía nguy hiểm; WATchuyểnđúngpoolkhiêncòn; PRIngắtđểđổimục tiêucóthểđãhồimộtphần, WODquảnlýhealchưatrả.

Màu/motif phản ánh truyền thống130, cùngbuffgroupkhôngvìnhánhkhácmàcộngthêmarmor. UI có “Đang được bảo hộ bởi…” với nguồn được biết, khôngvẽhàngchục vòngdưới chân. VFXtrao/shieldtransferchỉchạykhiservercommit; khôngmộtcụm+hồi giả đểtrangtrí.

Cađọcdiễn: hai Kỵ Sĩhộ tốngcùngđội chỉnguồnmạnhhiệu lực, healer vẫnthấyallynàora khỏivùng. Tiêu chí: biên/buffthậtđồngbộ, rời-vào khôngresetheal, hiệu ứngđủgọnđểthấyđường rút vàđònđịch.
