> **V2 mới nhất · 21/10/2026:** Đã nâng sâu cùng20mụcCOMBAT/SKILL theoElarion/ĐêmGãyẤn, có [nghiên cứu sáu game127](127_NGHIEN_CUU_SAU_GAME_CHO_BAN_V2.md), [báo cáo133](133_V2_BAO_CAO_THAY_DOI_VA_BAN_GIAO.md), [19utility/capstone131](131_V2_CO_CHE_KY_NANG_VA_THIEN_PHU.md). **80 hoàn thiện /7 một phần /426 chưa thiết kế**, không đếm lại20mục. Chưa code/vẽ/testgame; cap60/nộidung45, V01khôngbay vàcácquyếtđịnhchủdựán giữ.

# Báo cáo 20 mục thiết kế — combat và bộ kỹ năng 19 nhánh

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0. Đây là bàn giao thiết kế MMORPG, chưa code, migration, vẽ asset, tạo âm thanh hoặc kiểm thử game. [Nguồn nghiên cứu và giới hạn](105_NGHIEN_CUU_COMBAT_VA_19_NHANH.md). Không sửa thủ thành.

## 1. Phạm vi giữ nguyên

- Web desktop và client PC dùng server authoritative, PostgreSQL giữ dữ liệu bền.
- 2.5D pixel V4: nhân vật sprite2D, môi trường khối đơn giản, camera trực giao cố định; prototype ART/camera chưa xác nhận.
- Nhân vật tối đa60, nội dung/năm vùng đến45; đoạn45→60 luyện dài hạn. AP177 ở60, SP35/TP11 giữ sau45, skill rank5.
- Tạo Con Người/Elf/Người Lùn; nghề15, nhánh30;19nhánh/28tổhợp. V01 cấp1–10 không có quái bay kể cả boss/dungeon/sự kiện.
- Hotbar13ô 1–9/Q/E/R/Z kéo skill hoặc consumable, WASD/con trỏ; không ép Q/E/R của thủ thành vào MMO.

## 2. Hai mươi hồ sơ bàn giao

| Mã | Hồ sơ | Kết quả thiết kế |
|---|---|---|
|COMBAT-08|[Trạng thái](106_COMBAT_08_HO_SO_HIEU_UNG_TRANG_THAI.md)|Ma trận icon/anchor/motif/expire/cleanse/miễn/stack và Full–Gọn–Chức năng; không chỉ danh sách tên.|
|COMBAT-09|[Hỗ trợ/aura](107_COMBAT_09_HOI_PHUC_CUONG_HOA_VA_AURA.md)|Heal/life/power/haste/shield/run khác dấu; aura một pulse và vòng duy trì; nhiều aura không nhân logic.|
|COMBAT-10|[Aggro](108_COMBAT_10_AGGRO_THREAT_VA_LANH_DIA.md)|Threat/detection/hysteresis/taunt/stealth/leash/reset/safezone; không dùng threat làm lootweight.|
|COMBAT-11|[Quyền giao tranh](109_COMBAT_11_QUYEN_GIAO_TRANH_VA_AN_TOAN.md)|Hostile/trung lập/protected/ally/pet/objective; bảo vệ động vật, PvP disabled V1.|
|COMBAT-12|[Đóng góp](110_COMBAT_12_GHI_CONG_VA_QUYEN_THUONG.md)|Ledger damage/heal/absorb/control/tank/objective/cứu; quyền XP/loot/quest tách nhau.|
|COMBAT-13|[Hồi sinh V1](104_COMBAT_13_CHET_VA_HOI_SINH.md)|Ngân Ấn/vật phẩm, checkpoint/cứu trợ, một cứu thường/run, phép healer và quota boss; deathId chống trùng.|
|COMBAT-14|[DC/chuyển vùng](111_COMBAT_14_DISCONNECT_CHUYEN_VUNG_VA_DOI_DO.md)|Combatlock10s, grace10/60s, khôngpause; transfer/equip/pet/cooldown nhất quán.|
|COMBAT-15|[Combatlog](112_COMBAT_15_SO_NOI_LOG_VA_NGUYEN_NHAN_CHET.md)|Số thực HP/shield/crit/DoT, log cá nhân và10s trước chết; không số giả hoặc publicDPS bắt buộc.|
|COMBAT-16|[Boss phá thế](113_COMBAT_16_BOSS_PHA_THE_VA_KHANG_CC.md)|Bar theo pha, window8s, thresholdscale theo người; đường solo và khóa chainCC.|
|SKILL-01|[19nhánh](114_SKILL_01_HO_SO_19_NHANH.md)|Bản sắc/role/weapon/root/nhịp/điểm yếu; cùng mana, không thêm thanh resource vô hạn.|
|SKILL-02|[Ma trận quyền](115_SKILL_02_MA_TRAN_RACE_NGHE_VA_QUYEN.md)|28 tổ hợp, nghề/race/branch/teacher/gear/horse và latequest hợp lệ.|
|SKILL-03|[Cấu trúc bộ chiêu](116_SKILL_03_CAU_TRUC_BO_CHIEU_V1.md)|Ba lineage+utility+signature+race/vô môn; core/racepassive và regen không cộng kép.|
|SKILL-04|[Hợp đồng số](117_SKILL_04_HOP_DONG_SO_KY_NANG.md)|Mục tiêu/tầm/Z/shape/maxTargets/coefficient/cost/cast/CD/charge/proc/cancel; catalog126 cho mọi kit.|
|SKILL-05|[Học/rank](118_SKILL_05_HOC_RANK_VA_TIEN_HOA.md)|Nguồn thầy/quest, SP/rank, kế thừa1:1, học mới rank1, không sáchrandom giữ công cụ bắt buộc.|
|SKILL-06|[Thiên phú](119_SKILL_06_THIEN_PHU_COMBO_VA_BUILD.md)|Ba cặp biến thể, hai capstone mỗi nhánh, aux/optional/vô môn với đánh đổi và11TP.|
|SKILL-07|[Reset/preset](120_SKILL_07_RESET_PRESET_VA_GIOI_HAN_NGHE.md)|Miễn phí tại nơi hợp lệ, mộtAPallocation, haiKpreset; không đổi nghề tự do/CD hay heal exploit.|
|SKILL-09|[Hình/âm](121_SKILL_09_DONG_TAC_ICON_VFX_SFX.md)|Manifest per-skill/4hướng/weapon/horse/bounds/LOD và19 motif; chưa file ảnh/audio.|
|SKILL-10|[Triệu hồi](122_SKILL_10_TRIEU_HOI_VA_DIEU_KHIEN.md)|TREE60s với passive+3chiêu, BONEcap2; AI/lệnh/ownercredit/snapshot/cleanup.|
|SKILL-11|[PvE/PvP](123_SKILL_11_PVE_PVP_VA_CHE_DO.md)|PvEprofile đang áp dụng, PvPdisabled; không tự thêm số PvP hoặc import skill sang thủ thành.|
|SKILL-12|[Preview](124_SKILL_12_PREVIEW_HUONG_VUNG_VA_PHA_CHIEU.md)|Ray/surface/hình vùng/đường bị chắn/pha niệm–bay–đáp; preview/hit/VFX độc lập nhưng đồng bộ.|

SKILL-08 bảng kỹ năng đã có và không đếm lại trong20mục. [Catalog126](126_DANH_MUC_KY_NANG_V1.md) là tài liệu bổ trợ số liệu; không tạo thêm checkbox để tăng thành tích.

## 3. Bảng số đáng chú ý

| Hệ | Cấu hình thử |
|---|---|
| Hồi về map |F=10+2min(L,45) Ngân Ấn,5s; thiếu tiền có cứu trợ10s/thu tốiđa sốdư, không nợ.|
| Tự hồi tại chỗ |5F hoặc1Ấn Hồi Sinh;30%HP/20%mana; cấm bossactive.|
| Cứu thường |2U/5s,25%HP/15%mana,1lần/ngườinhận/run; ngắt khi move/directdamage/CC.|
| Phép hồi sinh |Mục Sư18,30%maxmana,4s/6U,CD180s;40%HP/30%mana;1phép/ngườinhận/bossattempt chung đội.|
| Ân hạn tại chỗ |3s, tấn công/cast hostile gỡ trước Release; không loot/objective trong ân hạn.|
| Aggro/threat |8U thường/10Uelite, threat damage+0,5support; đổi khi≥120% và1shysteresis; taunt3s/lockout6s.|
| Combatlock/DC |10s từhostile; DCngoài combat10s/trongcombat tốiđa60s; không offlinefarm/pause.|
| Phá thế |B=80[1+0,6(n−1)], mở8s, recovery3s/khóa≥15s; basic10/skill20/CC40/F40 theo113.|
| Rank |D/H/SvàUbufffac1/1,08/1,16/1,24/1,32; BbaseCD−3%/rank thêm,max12%; Cblockfac riêngcap60%.|
| Mana/CD |Cost/CD từng row126, không lén thu thêm ở animation; commit một lần theo action97.|
| Triệu hồi |TREE1/60s; BONE2/30s; owner+pet một recipientXP; khôngngựathànhpet.|

Các fee/coefficients không phải giá đã kiểm kinh tế. Gear mốc45/60, rootpassive78, resource60s/burst10s/EHP/solo cần cân ở bản chạy. Không đổi trần cap chỉ vì đổi coefficient.

## 4. Mười chín kit đã có số

Mỗi nhánh có Aattack/Bmobility/Cguard/Uutility/Ssignature. Các A/B/C kế thừa dòng tân thủ; U từ nghề15; S mới30. Raceactive chung theo race vẫn có thể dùng sau chuyển chức. Healer thêmPRI.RES18; vô môn có6active cụ thể và3passive tùy chọn.

Những điểm nhận diện: WND.A xoay theo tuyến không cần target; WND.S niệm–nhảy–đáp–vùng lốc; ASN.B dash+ẩn vàSdashslash; FIR.S thiênthạch rơi; ARC.A tên xuyên thật; PAL/DKN cưỡi ngựa nền/cánh30 có đối không; NEC/SPI lấy sức mạnh từ pet có cap; PRI/WOD chữa/HoT/hồi sinh khác damage ánh sáng củaLGT.

Không tuyên bố tất cả kit cân ngang nhau. Catalog làm rõ gameplay/timing/permission và ngân sách có thể kiểm, chưa cho ra sản phẩm chơi được hoặc ảnh đẹp đã duyệt. Mọi chiêu có overlay mới theo yêu cầu, không lấy sprite/skill thủ thành đổi màu.

## 5. Kiểm tính nhất quán tài liệu và các việc chưa làm

Chỉ rà số mã checklist, linkMarkdown, đủ28tổ hợp/19nhánh/5row mỗi kit, nguồn điểm/cap và xung đột rank/talent/cost; không chạy game/browser/performance vì đang thiết kế và có yêu cầu dừng kiểm gameplay trước đó.

Chưa có prototypecamera2.5D, colliderdebugscene, art/audio production, PostgreSQLschema/transaction code, NETfixedtick/replication, full loot/economy/drop/questtables, thực nghiệm DPS/TTK/mana, QA20người/thiết bị. MụcART/ROAD/UI/NET/DATA/ASSETkhác vẫn chưa được tick.

Checklist sau bàn giao: **80 hoàn thiện hồ sơ /7 một phần /426 chưa thiết kế =513**. COMBAT-13 vàSKILL-03/05/06 chuyển từmộtphần sanghoànthiện;16mục khác từchưa sanghoànthiện. Đây là tiến độ tài liệu, không80tính năng đã code.

Trongnhómthiếtkế, tiếp theo **GATE-01** duyệt STAT/LEVEL/COMBAT/SKILL trước nền vật phẩm. Gate không tựpass: ART-01/02/04 vàROAD-02 còn cần mẫu2.5D; gameplay/balance/network cần bản thực trước nghiệm thu triển khai.
