> **Bổ sung có hiệu lực · 21/10/2026:** [Bộ20hồ sơ V1](125_BAO_CAO_20_MUC_COMBAT_SKILL.md) và [catalog126](126_DANH_MUC_KY_NANG_V1.md) hoàn thiện kit/rank/talent/hồi sinh/lifecycle. Thay các trường còn để mở hoặc mô tả cũ khi xung đột; giữ cap60/nội dung45, V01khôngquái bay,35SP/11TP và hotbar13. Đây là thiết kế, chưa game/asset chạy được.

# COMBAT-07 — Catalog trạng thái và tập dùng trong M0

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0. Đặc tả catalog/permission/default; chưa sản xuất icon/VFX, chưa combat implementation. [Nghiên cứu](92_THAM_KHAO_LEVEL_VA_COMBAT_MMORPG.md), kế thừa [catalog hình/ý nghĩa40](40_DANH_MUC_TRANG_THAI_BUFF_DEBUFF.md), [STAT-07](73_STAT_07_TRAN_CHI_SO_VA_KHONG_CHE.md), [STAT-09](75_STAT_09_EFFECT_STACK_VA_VONG_DOI.md), [STAT-10](80_STAT_10_DOT_HOT_VA_BOSS.md).

## 1. Definition và phạm vi

Effect phải có ID/version, source/target/encounter, relation, school/element nếu có, tags quyền hành động, magnitude/duration, tick, stackGroup/policy/maxStacks/refresh, dispelTags, bossProfile, attribution/proc flags và visualProfile. Runtime target aggregate tính quyền từ tất cả instance; không dùng một isStunned cho mọi loại.

**M0** là tập phải có cho lát cắt gameplay, không có nghĩa mọi Tân Binh tự biết gây tất cả trạng thái. **M1** đã xác định ý nghĩa nhưng chưa mở mặc định, cần kit/content giới thiệu. Không tăng phạm vi alpha thành đủ19nhánh bằng catalog này.

## 2. Tập bất lợi cốt lõi M0

Các duration dưới đây là fixture authoring/kiểm thử, không tự gắn vào mọi skill. CC dùng effective duration theo STAT-07, không giữ số thô nếu có tenacity/DR.

| ID / hiệu ứng | Quyền và số mẫu | Policy / giải trừ / dấu hình |
|---|---|---|
| CC_STUN / Choáng | Không đi/đánh/cast; ngắt Prepare/channel interruptible. Base1s. | HardCC DR; cleanse-control. Vòng xoắn trên đầu. |
| CC_FREEZE / Đóng băng | Khóa như choáng. Base1s; không tự tăng damage nhận hoặc vỡ khi trúng. | HardCC DR, cleanse-control; tinh thể băng gọn. |
| CC_ROOT / Trói | Cấm đi/dash tự nguyện; vẫn đánh/cast đứng yên. Base2s. | HardCC DR; cleanse-movement; rễ/xích theo nguồn. |
| CC_AIRBORNE / Hất tung | Cấm đi/đánh/cast trong nâng/đáp; base1s, trình bày đỉnh0,6U. | HardCC DR; cleanse-control khi skill có quyền. Bóng giữ nền, không đổi surface/Flying tag. |
| MOVE_PUSH / Đẩy | Vector tối đa1U/0,2s; sweep dừng trước tường/vực, không vượt surface. | Không cộng khoảng cách nhiều nguồn; guard dịch chuyển chung2s sau lần thành công; boss mặc định immune. Mũi tên lực/bụi. |
| DEBUFF_RUN_SLOW / Chậm chạy | −20% tốc chạy,4s mẫu; không ảnh hưởng attackSpeed. | Strongest cùng group, Union khácgroup, cap60%/boss20%. Cleanse-movement; dấu dưới chân theo nguyên tố. |
| DEBUFF_ATTACK_SLOW / Chậm đánh | −20% nhịp,4s mẫu; không tự chậm niệm/chạy. | Strongest/Union; cap60%/boss15%. Cleanse-weakening; vũ khí chậm. |
| DEBUFF_ARMOR / Giảm giáp | −10% giáp,5s mẫu. Không xuyên riêng người đánh. | Shared strongest group; tổng shared shred theo STAT-08 cap50%. Cleanse-weakening; khiên nứt. |
| DEBUFF_MRES / Giảm kháng phép | −10% MRes,5s mẫu. Không giảm mọi elementTaken nếu không ghi. | Group tách giáp, cùng cap/formula shared; lăng kính nứt. |
| DOT_BLEED / Chảy máu |0,50×PAtk tổng/5s, tick1s, Physical-Neutral. | Strongest; cleanse-body; vết cắt/giọt. Không mặc định %HP. |
| DOT_BURN / Bỏng |0,60×MAtk tổng/5s, tick1s, Magic-Fire. | Strongest; cleanse-element; tàn lửa. |
| DOT_POISON / Độc |0,15×MAtk mỗi stack tổng/6s, tick1s, Magic-Poison. | Shared max3, refresh-all; source snapshot từng stack theo STAT-10. Cleanse-body; giọt + số stack. |

Push guard2s là bảo vệ riêng displacement, không thêm nấc vào DR duration15s và không reset bằng miễn/cleanse/relog trong cùng encounter. Push vừa chạm vật cản không dời được thì báo Blocked, không gây thêm wall damage. Pull nếu mở M1 dùng cùng guard. Hất tung bị rút ngắn thì đường pose rút theo effective duration, không tiếp tục treo hình sau khi hết khóa.

## 3. Có lợi M0

| ID / loại | Quy tắc số và policy | Đọc hình |
|---|---|---|
| BUFF_ARMOR / tăng giáp |+10% armor/5s mẫu; cùng group strongest, khác nguồn vào STAT. Không pool HP. | Khiên đặc/viền bảo hộ. |
| BUFF_MRES / tăng kháng |+10% MRes/5s mẫu; tách tăng giáp. | Lăng kính nguyên. |
| SHIELD / lá chắn | Fixture10% targetMaxHP/5s, không vượt tổng50%maxHP; pool policy/order STAT-06. | Thanh shield và vòng gọn; vỡ khác hết hạn. |
| HOT / hồi theo thời gian |0,80×HealingPower tổng/5s, tick1s, strongest; không crit/overheal thành shield. | Dấu cộng xanh tại tick hồi thật. |
| BUFF_RUN / tăng chạy |+10%/5s mẫu, strongest cùng group; giới hạn nhóm chạy STAT-07. | Vệt sau lưng, không tăng tốc đạn. |
| BUFF_HASTE / tăng đánh |+10%/5s mẫu, strongest/Union; cap100%; snapshot nhịp từng action. | Weapon glow khác màu cường công. |
| BUFF_POWER / tăng công |+10% công tương ứng/5s mẫu, strongest; không tăng root/AP hoặc tự tăng hệ số skill. | Weapon glow gọn theo nguồn. |
| GUARD_BLOCK / đỡ | Cửa sổ skill khai báo; giảm40% mặc định/cap60% theo STAT-07. | Flash chặn chỉ khi block packet hợp lệ. |

Cost/CD/duration của skill phát shield/guard thật còn SKILL-04, không lấy fixture làm vật phẩm tự mua. Aura là **cách cấp/duy trì effect**, không một stat mới. Một pulse vào lần áp đầu, sau đó vòng dưới chân/membership; không nổ to lặp mỗi frame. Heal aura tick theo lịch, ra-vào không heal ngay hoặc nhân buff; source rời/chết dọn theo policy.

## 4. M1: định nghĩa có điều kiện, chưa mở mặc định

| Loại | Nghĩa đã chọn | Điều kiện trước phát hành |
|---|---|---|
| Silence | Chặn cast có tag silenceAffected; không chặn mọi đòn thường/item. | Kit ghi tag, duration, cleanse và boss profile. |
| Disarm | Chặn weaponBasic/weaponRequired; không phá item thật. | Ma trận skill cần vũ khí, hình/tooltip riêng. |
| Sleep | Khóa như stun; damage HP trực tiếp hostile đánh thức, DoT không đánh thức mặc định. | Theo hardCC DR, xử lý wake sau packet; không free refresh. |
| Fear | Mất điều khiển, chạy khỏi source trên đường hợp lệ. | HardCC DR, không rơi vực; AI/path/collision cần hồ sơ. |
| Pull | Dịch chuyển tới điểm an toàn về nguồn, không xuyên geometry. | Dùng push/pull guard chung2s, boss allowlist. |
| Taunt | Ưu tiên AI target/threat trong thời hạn. | COMBAT-10; không ép camera/điều khiển player. |
| Mark | Debuff có ID, không tự tăng damage/cho tầm nhìn. | Kit ghi benefit, visibleTo, duration/group. |
| Stealth | Không chọn unit bằng hover/Tab nếu chưa detected; vẫn có hurt volume, chịu AoE/đạn định hướng. Chủ động đánh/cast hostile thoát trước Release, trúng HP hostile thoát; shield hấp thụ toàn bộ không tự thoát. | Kit chốt windup/uptime/detection; không auto-ignore boss, không xóa projectile đã phát trước ẩn. |
| Heal reduction / vulnerability | Đổi healReceived hoặc taken nhóm, không giảm armor giả. | Dùng clamp/pipeline STAT-06/07, cần kit magnitude. |
| CC immunity / damage immunity | Mask rõ loại miễn, không suy từ shield/cánh. | Không default mọi dash/ultimate được vô địch. |
| Cast slow / maxHP change | Thay đúng stat/time, không sửa cooldown hoặc hồi đầy. | Chưa có nguồn gear/cast-speed V1, cần STAT/kit mở có chủ đích. |

Đây là catalog phát triển lâu dài, không placeholder skill đã hoạt động. Không khẳng định M0 có invisibility/taunt chỉ vì đã định nghĩa M1.

## 5. Tổng hợp, miễn và vòng đời

HardCC DR target-shared15s cho stun/freeze/airborne/sleep/fear/root: lần1/2/3 nhân1/0,5/0,25, lần4+immune; duration=min(base,5s)×(1−tenacity)×DR×profile. Elitefactor0,75; boss mặc định immune hardCC, chỉ phase allowlist mới nhận. Không tự thêm stagger thay miễn (COMBAT-16 còn riêng). Các debuff slow/shred/DoT vẫn theo boss cap/profile, không immune toàn bộ vì boss to.

Khóa hành động lấy giao quyền của mọi effect: stun hết nhưng root còn thì đi vẫn khóa; root không khóa đỡ đứng yên; root+silence không vô hiệu đòn thường nếu không disarm. Phòng vệ dùng được khi CC chỉ khi skill escapeTags rõ, không mọi phím Space tự gỡ trói. Vật phẩm có usableWhileControlledTags, mặc định không dùng consumable trong hard-disable; root/slow không tự cấm uống.

Cleanse/dispel xét tags, số effect và thứ tự theo STAT-09; gỡ1 effect độc là gỡ group độc đó và toàn stack của group, không từng stack trừ definition. Boss immune không hiện băng/choáng giả. Tick vào endTime xử lý trước expire, refresh giữ nextTick, target chết dọn, source chết vẫn giữ DoT/HoT đã áp trên đích khác theo STAT-10. Không mỗi hit tạo timer không kiểm soát.

## 6. Hiển thị, bàn giao và kiểm sau

Panel có lợi/bất lợi hiện effective magnitude, stacks/time và nguồn được quyền biết; icon đầu ưu tiên CC hiện tại. Cùng loại aura không xếp nhiều icon như nhiều lần buff; các loại độc/bỏng/bleed khác nhau vẫn tách. Tắt VFX không gỡ effect. COMBAT-08 tiếp tục bảng icon production, profile theo từng skill/boss và âm thanh; COMBAT-09 tiếp tục độ rõ hỗ trợ nhiều người.

Tình huống cần kiểm: stun+root khác hạn; DR từ hai người; push bị tường/guard; boss miễn hất nhưng vẫn chịu bleed; DOT nhiều nguồn cap; cleanse3stack; haste thay giữa swing; stealth gặp AoE/đạn đã bay; source chết/target chết; nhiều aura không nhân timer. Chưa code, vẽ hoặc chạy thử.


**Mở theo kit V1:** Taunt củaHGD,stealth củaASN,mark củaARC và cleanse củavômôn mở ởđúngnghề/nhánh/cấp theo126; không mở toànM1 hoặc đưa vàoalphaV01cấp10. Lớpstatus/duration/DR vẫn theo102/73; bộ số/permission mới ở117/126.
