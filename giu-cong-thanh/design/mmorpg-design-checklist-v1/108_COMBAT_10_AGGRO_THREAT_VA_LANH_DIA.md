> **Bản V2 có hiệu lực · 21/10/2026:** [Báo cáo nâng sâu133](133_V2_BAO_CAO_THAY_DOI_VA_BAN_GIAO.md), [khế ước cốt truyện128](128_V2_KHE_UOC_COT_TRUYEN_VA_COMBAT.md), [utility/capstone131](131_V2_CO_CHE_KY_NANG_VA_THIEN_PHU.md). PhầnV2 ở cuối hồ sơ thay các điểmV1 có xung đột; số/rule không thay giữ nguyên. Đây là thiết kế, chưa code/asset/QA.

# COMBAT-10 — Aggro, threat và lãnh địa

**Ngày:** 21/10/2026 · V1: đặc tả AIcombat, chưa AI/runtime. [Nguồn và giới hạn](105_NGHIEN_CUU_COMBAT_VA_19_NHANH.md). Các hệ số tự thiết kế, không công thức của game tham khảo.

## 1. State và phát hiện

Passive/Patrol → Alert → Engaged → Returning → Reset. Mỗi spawn có homeAnchor, territory polygon, aggro profile và combatDomain/surface. Quái thụ động chỉ phản ứng hành vi hostile; quái hung hãn cần LoS/visibility trước alert. Không nhìn xuyên đá/cầu hoặc tự phát hiệnstealth.

Fixture thường: aggro8U, mấtLoS6s bắt đầu tìm ở vị trí hợp lệ cuối, ngoài territory+4U thì returning; elite10U/+6U. Lãnh địa lấy polygon đã author, không một vòngtrònphóngto theo sprite. Boss ởarena/lãnhđịariêng, không dùng mộtngưỡng8U cho cảrồng. Tốiđa Alert1s có dấu hiệu trước đònđầu thường; ambush có telegraph riêng, không damage từ ngoàivisibility.

## 2. Bảng threat độc lập ghi công

Enemy có threattable theo actor/owner/encounter. Đề xuất: actualHPdamage +0,5×effectiveHeal/ShieldAbsorb hỗ trợ một ally đang bị enemy đó uyhiếp. Với nhiềuenemy cùng gâyáp lực choally, chia supportthreat theo sốenemyliênquan, không cộng toànheal lên mọi quái trongmap. Overheal, shield mới đặt nhưng chưaabsorb, immuneCC và buffspam không threat. Tankstance củaKỵSĩ/HộVệ là source threatMultiplier2,0 cho actiontag guard; không tăngdamage/lootcredit. Taunt không tự chữa aggro bằngdamage giả.

Đang cótarget hợp lệ: đổi khi challenger threat≥120% current và qua hysteresis1s. Current chết/ra combatDomain/khôngtargetable thì chọn cao nhất hợp lệ → khoảngcách→ID. Cùng group threat không quyết quyền thưởng; healer vẫn nhậncontribution theo110.

Chỉ chuyển target ở decisionpoint, không xoay đòn đangActive sangplayerkhác mỗi frame. Prepare hướng đã khóa, chuyển mục tiêu áp dụng action tiếp theo. Boss có scriptedtarget cho telegraph chọnngẫu nhiên/xa nhưng phải hiện rõ, không xóa threattable chỉ để đánhtrộmhealer.

## 3. Taunt và stealth

TauntPvE hợp lệ đặt threatnguồn=max(currentTop,sourceThreat)+1 và forcedtarget3s; sau đó giữthreat đãđạt, không forcedlock vĩnhviễn. Boss tauntable mặc định trong pha thường, phaseimmune báo rõ. Target có tauntlockout6s từ lần thànhcông; nhiều tank không kéo qua kéo lại liên tục. Taunt không ép bossrời territory hoặc hủy skill uninterruptible. PvP chưa mở, không ép camera/người chơi.

Stealth: bỏ targetlock khi không còn detect, enemy tìm lastknown trong6s, không xóa contribution hoặc resetencounter ngay. Đạn đãphát vẫn cóthể trúng; field/AoE vẫn damage. SátThủ không reset toànboss bằngtànghìnhnếu đồngđội/pet đangcombat. Boss detectStealth nếu có phải hiệnbadge, không miễnẩn bí mật cho mọiboss.

## 4. Leash, safezone và chống khai thác

Returning hủy action chưaRelease, cácprojectile/field riêngspawn theoresetpolicy, khôngdrop/XP. Enemy không nhậndamage/reward trongReturning; có icon Quay về và đườngvề, không heal đầy giữa activecombat. Vềhome/resetxong mới hồi đầy và mở encounterId mới; ledgerattemptcũ không cấp kill giả. Reset khônghồi lại rương/rewardmộtlần hoặc lượt cứu của dungeonrun.

Vượt leash khôngteleport qua player thànhdamage; route/homeanchor phải valid. Nếu khôngtìmđường10s, server reset vềhome ở miềnspawn, ghi lỗi map; không ném boss vào hub. Safezone chặn enemyenter bằngnavigation/encounter boundary; không dùng cổng thành để miễnphí giếtquái đangleash. Attack từsafezone ra ngoài bị chặn theo109.

Trunglập có nhóm xãhội: hỗ trợ đồngloại trong6U/LoS nếu profile, không toànrừng kéo về. Chuỗi assist khôngrecurse vôhạn; một propagationwave/spawn/event. NPC dịch vụ khôngthreattarget.

## 5. Persistence và tiêu chí kiểm

Threat runtime theoencounter, khôngsave mỗi pointDB; disconnect actor còn sống xửlý111, ownerpet quy đổi đúng. Nếu actor mấtquyềnworld khôngđể bản sao threat. Test tank/heal/đaenemy, bossphase, targetdiệpkhác, stealth/pet, kéoqua safezone, reset/retry khôngreward. Chưa code/đoAI, MAP/MOB còn phải author polygons/đườngđi.


## V2 — Quái bảo vệ điều gì?

Mỗispawnprofile có độngcơ: sănăn, giữtổ, bảo vệđàn, thi hànhlệnh, kiếmnguồnổnđịnh. Độngcơchọn Alert/Patrol/Return/assist, không thêmtrí thôngminhtoàntri. Quáibị tha hóa cóhànhvingắtquãngquan sátđược, không tự thànhmộtphechung.

Orenchecửavìlệnhgác, khôngđuổivô hạn quacảhầm. Sóigiữđườngnước cóthểngưngđốikhángtrongobjectiveđãhoànthành ởcảnhriêng; khôngcảserversóihếtthù vìmộtngười. Constructưu tiênngườichạmtrụđãbáohiệu, nhưngkhôngngắttựdo castđã Releaseđểquayhitmộthealer.

Threat108 giữcôngthức/hysteresis; khácđộngcơlàrulechọnscriptedtarget/tìmđường/lãnh địa đượcauthor. Mỗiboss phải ghilýdotauntđược/không được vàfeedback. Tiêu chí: playerhiểumìnhbịđuổivìđâu, khácbầy khôngchỉkhác HP, safezonevàresetkhôngphátthưởng.
