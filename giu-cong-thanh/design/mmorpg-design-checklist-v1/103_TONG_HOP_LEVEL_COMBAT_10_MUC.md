> **Chốt vùng tân thủ · 21/10/2026:** V01 cấp1–10 **không có quái bay**, bao gồm quái thường, tinh anh, boss, dungeon và sự kiện chiến đấu trong vùng; boss không có pha bay. Không yêu cầu học đối không ở V01. Quái bay chỉ có thể xuất hiện ở vùng sau, không bắt buộc ngay V02. [Quy tắc đối không](100_COMBAT_05_CAN_CHIEN_VA_QUAI_BAY.md). Đây là cập nhật thiết kế MMORPG, không sửa thủ thành.

# Tổng hợp 10 thiết kế — LEVEL-06…08 và COMBAT-01…07

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0. Hoàn thiện mười hồ sơ thiết kế, chưa triển khai, sản xuất asset hoặc kiểm thử gameplay. [Nghiên cứu và giới hạn nguồn](92_THAM_KHAO_LEVEL_VA_COMBAT_MMORPG.md). Giữ MMORPG 2.5D pixel V4, trần60/nội dung45, web+PC/PostgreSQL; không sửa thủ thành.

## 1. Hồ sơ bàn giao

| Mã | Hồ sơ | Quyết định chính |
|---|---|---|
| LEVEL-06 | [Người mới/quay lại](93_LEVEL_06_NGUOI_MOI_VA_QUAY_LAI.md) | Không rested/offline/paid XP, gợi ý tiếp tục sau7 ngày, không sync V1. |
| LEVEL-07 | [XP và mốc cấp](94_LEVEL_07_GIAO_DIEN_XP_VA_MOC_CAP.md) | Thanh dưới13ô; C→Tiến trình,45 không max; lên cấp không hồi đầy. |
| LEVEL-08 | [Lưu tiến trình](95_LEVEL_08_QUYEN_SO_HUU_VA_LUU_TIEN_TRINH.md) | Character-owned level/XP/điểm, grant đúng một lần; PostgreSQL authoritative; chưa chuyển world tự phục vụ. |
| COMBAT-01 | [Ngắm/chọn](96_COMBAT_01_NGAM_VA_CHON_MUC_TIEU.md) | Con trỏ/hover/selected tách, đánh trống, Tab không bẻ hướng, targeted heal đúng đích. |
| COMBAT-02 | [Hành động/cancel](97_COMBAT_02_NHIP_HANH_DONG_VA_HUY_CHIEU.md) | Prepare/Release/Recovery; snapshot nhịp, buffer150ms/1intent, hủy không đánh sớm. |
| COMBAT-03 | [Đánh thường](98_COMBAT_03_DON_THUONG_THEO_VU_KHI.md) |10profile vũ khí, tốc/shape/cleave/two-hit, rawDPS fixture; tầm đo tới biên boss. |
| COMBAT-04 | [Hitbox2.5D](99_COMBAT_04_HITBOX_CAO_DO_VA_VAT_CAN.md) | Footprint/hurt/picking/visual riêng; skin0,08U, cầu/tường/cây có luật. |
| COMBAT-05 | [Đối không](100_COMBAT_05_CAN_CHIEN_VA_QUAI_BAY.md) | Bay thấp có cửa sổ sà/đáp; Thánh/Hắc tiến hóa chém được bay thấp, không tự bắn đạn. |
| COMBAT-06 | [Đường đạn](101_COMBAT_06_DUONG_DAN_VA_VA_CHAM.md) | Swept3D, server hit, speed/range/TTL, pierce/bounce/homing chỉ theo definition. |
| COMBAT-07 | [Trạng thái](102_COMBAT_07_CATALOG_TRANG_THAI_V1.md) | Bộ M0 rõ quyền/stack/cap/cleanse; M1 chưa mở, DR dùng chung, không sao ngọc thủ thành. |

## 2. Chuỗi hành vi mẫu để đọc diễn

Người chơi45 mở C thấy nguồn luyện40–45, không nhận SP/TP mới sau45. NhấnT uống vật phẩm chỉ nếu có trong túi/quyền; đóng bằng~ rồi quay về cảnh. Cầm trọng kiếm hướng chuột qua quái mặt đất, giữ trái: server nhận một action, snapshot Tcycle, Prepare40%, Active20%, Recovery40%; di chuyển75% rồi100%, mỗi địch một packet theo cleave. Boss được xét biên thân, không đòi đi vào tâm sprite.

Nếu dùng cung nhắm flying unit thấp, origin/aimPoint đúngZ, đạn bay thẳng14U/s, sweep tường/mob; target né vẫn có thể hụt. Kỵ Sĩ Thánh/Hắc có ngựa tiến hóa đánh được bay thấp bằng envelope cao hơn nhưng vẫn cùng tầm ngang; không quăng projectile miễn phí. Quái bay mainstory phải đáp để melee thường xử lý.

Địch trúng root còn đánh được, trúng stun thì ngắt action theo interrupt policy; nhiều player không tạo DR/shred/poison không giới hạn. Dot trúng shield/armor qua pipeline đã có; tắt particle không đổi damage. Target chết dọn state; source chết không tự xóa DoT đã áp lên kẻ khác. Reward theo contribution/ledger, không theo clip VFX.

## 3. Bảng cấu hình mới có thể chỉnh

| Nhóm | Giá trị đề xuất / quyền thay đổi |
|---|---|
| Người quay lại |7 ngày gợi ý, không bonusXP; không countdown thưởng. |
| UI XP |6px presentation/24px tương tác ởscale100%; toast3s;20grant gần nhất trongphiên. |
| Chọn đích |Tab12U, vòng danh sách1s; picking assist0,15U, không damage assist. |
| Action |Buffer150ms/1intent; di chuyển đánh thường75%; chu kỳ chốt haste/slow tại accept. |
| Gọi ngựa chiến |Prepare1s, cooldown thành công3s; damage/move/hardCC ngắt, không mana riêng. |
| Basic weapon |T0 từ0,8–1,35s, k=T0/1s; melee1,1–2,1U; cung8U/pháp khí7U; cleave phụ50%. |
| Collision |Contact skin0,08U, step0,30U/dốc35°; body mẫu theo hồ sơ99, không screenshot pixel. |
| Flying |Low1,8–2,8U; melee thường envelope1,5U; Thánh/Hắc tiến hóa3,2U; mẫu chu kỳ6s+1s+4s. |
| Projectile |Arrow14U/s/r0,12; magic9–10U/s/r0,16; range/TTL và variants theo hồ sơ101. |
| Trạng thái |Fixture stun/freeze1s/root2s/airborne1s; slow20%4s; shred10%5s; push1U/0,2s guard2s. |

Không ngầm đổi công thức root/crit/pen/DoT/cap hoặc XP của91. k/T0 là profile rawDPS nền cho cân thử, chưa chứng minh cleave/solo/nhóm ngang sức. UI/geometry số mẫu cần scene 2.5D trước production.

## 4. Trạng thái và phụ thuộc còn lại

Checklist sau cập nhật: **60 hoàn thiện hồ sơ /10 một phần /443 chưa thiết kế =513**. Chỉ mười mã trên chuyển[x]; không tick thêm ART, UI-03, INPUT mobile/gamepad, SKILL, DATA, NET, MOB/BOSS hoặc COMBAT-08…16.

ART-01/02/04 và ROAD-02 vẫn cần prototype camera/sprite/scene. Công thức có thể mô tả worldU độc lập góc camera, nhưng chưa chứng minh cảm giác ngắm, độ rõ hay FPS. Không mở browser/game QA theo yêu cầu dừng kiểm tra; chỉ rà link, task IDs và tính nhất quán tài liệu.

Tiếp theo đúng thứ tự: **COMBAT-08** (ma trận icon/VFX/duration/miễn/gỡ cho từng effect), rồi09hỗ trợ,10aggro,11quyền giao tranh,12contribution,13chết/hồi sinh,14disconnect/chuyển vùng,15combatlog,16bossCC; sau đó SKILL-01 hồ sơ class. Không bỏ qua GATE/đầu vào art trước triển khai.

## 5. Tiêu chí nghiệm thu tương lai — chưa phải kết quả test

Đọc diễn từ nhậnXP→lêncấp→phânđiểm→đánhtrống→trúngboss→bịCC→hồi sinh/đồng bộ. Dựng scene bridge/tường/cây/mob bay/horse/boss; so render30/60/120FPS, server snapshot, một action/target/hit, retry/reconnect không cấp điểm kép. Ghi metric hit/shot/expired/activeEffects/particle count và frame/server time khi có bản chơi, không đưa số “đã đạt” từ thiết kế.
