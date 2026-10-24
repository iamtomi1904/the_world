> **V2 mới nhất · 21/10/2026:** Đã nâng sâu cùng20mụcCOMBAT/SKILL theoElarion/ĐêmGãyẤn, có [nghiên cứu sáu game127](127_NGHIEN_CUU_SAU_GAME_CHO_BAN_V2.md), [báo cáo133](133_V2_BAO_CAO_THAY_DOI_VA_BAN_GIAO.md), [19utility/capstone131](131_V2_CO_CHE_KY_NANG_VA_THIEN_PHU.md). **80 hoàn thiện /7 một phần /426 chưa thiết kế**, không đếm lại20mục. Chưa code/vẽ/testgame; cap60/nộidung45, V01khôngbay vàcácquyếtđịnhchủdựán giữ.

> **Tiến độ mới nhất · 20 mục COMBAT/SKILL · 21/10/2026:** **80 hoàn thiện hồ sơ /7 một phần /426 chưa thiết kế =513.** [Báo cáo20mục](125_BAO_CAO_20_MUC_COMBAT_SKILL.md), [catalog số kỹ năng](126_DANH_MUC_KY_NANG_V1.md), [nghiên cứu chính thức](105_NGHIEN_CUU_COMBAT_VA_19_NHANH.md). COMBAT-08…16 và SKILL-01…07/09…12 đã thiết kế; GATE-01 là bước duyệt kế tiếp trong nhóm, chưa tự pass các cổng art/camera. Không code/vẽ/SQL/testgame; thủ thành giữ nguyên. Ghi nhận tiến độ cũ bên dưới là lịch sử.

> **Tiến độ mới nhất · LEVEL/COMBAT · 21/10/2026:** **60 hoàn thiện hồ sơ / 10 một phần / 443 chưa thiết kế, tổng513.** [Mười đặc tả mới](103_TONG_HOP_LEVEL_COMBAT_10_MUC.md) và [nguồn MMORPG chính thức](92_THAM_KHAO_LEVEL_VA_COMBAT_MMORPG.md). LEVEL-06…08/COMBAT-01…07 đã thiết kế; tiếp theo COMBAT-08. Chưa code/vẽ sản xuất/playtest; cổng camera/art vẫn chưa xác nhận. Các ghi nhận số liệu cũ bên dưới là lịch sử.

> **Quyết định hiện hành · 21/10/2026:** [Trần nhân vật 60, nội dung đến 45](91_CAP_60_NOI_DUNG_45_VA_XP_HAU_TRUYEN.md). Giữ năm vùng hiện tại; cấp 45→60 luyện dài hạn. AP ở 45/60 là 132/177; SP giữ 35, TP giữ 11 sau 45. Quy tắc XP hậu truyện thay bảng chênh cấp khi đủ điều kiện. Các số cấp 45 trong ví dụ vẫn là mốc nội dung, không phải trần nhân vật. Chưa triển khai vào game.

> **Hệ chỉ số V1 hiện hành:** [Tổng hợp chín STAT và cổng ROAD-02](76_TONG_HOP_ROAD_STAT_10_MUC.md) thay mô tả cũ khi xung đột. Có cấu hình thử, chưa code/playtest hoặc cân toàn bộ19kit.

# 03 — Chỉ số, chiến đấu, kỹ năng và phát triển nhân vật

> **THAY ĐỔI HỆ NHÂN VẬT — 20/10/2026:** [Khung chủng tộc/nghề/trang bị mới](28_HE_CHUNG_TOC_CHUC_NGHIEP_TRANG_BI.md) thay mô tả cũ khi xung đột: tạo Con Người/Elf/Người Lùn, cấp 15 chọn nghề, cấp 30 chọn nhánh theo race. Trang bị/vũ khí kiểm quyền nghề/nhánh; hình riêng không đổi chỉ số món. Không còn chọn ba class cố định lúc tạo hoặc quy tắc mọi race chọn mọi nhánh.


Mỗi hệ dưới đây phải có bản mô tả, bảng quy luật, liên hệ lore, vật phẩm/nguồn tài nguyên, màn hình, icon/asset, điều khiển và tiêu chí duyệt theo tài liệu 08. M2 là hướng mở rộng cần thiết kế trước, không yêu cầu bật tất cả cùng bản đầu.

> **Quy tắc mới từ chủ dự án (20/10/2026):** xem [PROD-04, mục 16](13_PROD_04_NGAN_SACH_SUC_MANH.md). Tốc đánh/xuyên giáp thuộc nhóm trần 100%, cộng theo phần còn lại; dòng thuộc tính đặc biệt tối đa 5%. May mắn có hiệu lực loot tối đa 15%, phần dư đổi sang sát thương bạo kích1:1 theo quyết định hiện hành. Có tỷ lệ bạo kích và sát thương bạo kích riêng. Không tự áp dụng công thức cho mọi chỉ số.

## A. Hệ thống chỉ số chung — M0

- [x] STAT-01 · Hoàn thiện đặc tả V1: Bốn thuộc tính STR/AGI/INT/VIT, nguồn AP132 ở45/AP177 ở60, profile vũ khí và reset. [Hồ sơ](67_STAT_01_THUOC_TINH_GOC.md), 21/10/2026; chưa triển khai hoặc playtest.
- [x] STAT-02 · Hoàn thiện đặc tả V1: Catalog và công thức nền HP/mana/công/giáp/kháng/heal, nhịp/chạy và loại accuracy RNG khỏi V1. [Hồ sơ](68_STAT_02_CHI_SO_DAN_XUAT.md), 21/10/2026; chưa triển khai hoặc playtest.
- [x] STAT-03 · Hoàn thiện đặc tả V1: Hai school vật lý/phép, element tags, multi-component và giới hạn true/environment damage. [Hồ sơ](69_STAT_03_LOAI_SAT_THUONG_VA_NGUYEN_TO.md), 21/10/2026; chưa triển khai hoặc playtest.
- [x] STAT-04 · Hoàn thiện đặc tả V1: Sổ source/budget/điều kiện, affix rare-rate5%, luck cộng/loot cá nhân và dư crit1:1. [Hồ sơ](70_STAT_04_NGUON_VA_NGAN_SACH_CHI_SO.md), 21/10/2026; chưa triển khai hoặc playtest.
- [x] STAT-05 · Hoàn thiện đặc tả V1: Pipeline cộng/nhân theo nhóm, Union phần còn lại, debuff riêng và rounding/schedule. [Hồ sơ](71_STAT_05_THU_TU_TINH_VA_LAM_TRON.md), 21/10/2026; chưa triển khai hoặc playtest.
- [x] STAT-06 · Hoàn thiện đặc tả V1: Pipeline damage/crit/defense/block/shield/heal/lifesteal/reflect, có fixture mốc cấp. [Hồ sơ](72_STAT_06_CONG_THUC_COMBAT.md), 21/10/2026; chưa triển khai hoặc playtest.
- [x] STAT-07 · Hoàn thiện đặc tả V1: Cap V1, kết hợp giảm damage, cooldown snapshots, CC-DR chung và boss profiles. [Hồ sơ](73_STAT_07_TRAN_CHI_SO_VA_KHONG_CHE.md), 21/10/2026; chưa triển khai hoặc playtest.
- [x] STAT-08 · Hoàn thiện đặc tả V1: Shared shred rating trước private penetration, cap/stack team và ví dụ nhiều người. [Hồ sơ](74_STAT_08_GIAM_GIAP_VA_XUYEN.md), 21/10/2026; chưa triển khai hoặc playtest.
- [x] STAT-09 · Hoàn thiện đặc tả V1: Effect policy, snapshot/refresh/tick, cleanse/dispel, death/map/reconnect và state authoritative. [Hồ sơ](75_STAT_09_EFFECT_STACK_VA_VONG_DOI.md), 21/10/2026; chưa triển khai hoặc playtest.
- [x] STAT-10 · Hoàn thiện đặc tả V1: DoT/HoT snapshot, tick/refresh/stack/attribution, %HP boss quotas và giới hạn proc. [Hồ sơ](80_STAT_10_DOT_HOT_VA_BOSS.md), 21/10/2026; chưa code, vẽ UI hoặc playtest.
- [x] STAT-11 · Hoàn thiện đặc tả V1: Budget cấp/gear/class/hệ phụ, nội tại nhánh trong quỹ, fixture DPS/TTK và ma trận cân sau. [Hồ sơ](81_STAT_11_NGAN_SACH_VA_MOC_CAN_BANG.md), 21/10/2026; chưa code, vẽ UI hoặc playtest.
- [x] STAT-12 · Hoàn thiện đặc tả V1: Cửa sổ C tổng quan/chi tiết/nguồn/nội tại, current-preview-cap và tooltip đúng đơn vị. [Hồ sơ](82_STAT_12_BANG_CHI_SO_VA_NGUON.md), 21/10/2026; chưa code, vẽ UI hoặc playtest.
- [x] STAT-13 · Hoàn thiện đặc tả V1: Chốt không dùng lực chiến tổng bản đầu, thay bằng điều kiện sẵn sàng và chỉ số theo vai trò. [Hồ sơ](83_STAT_13_DANH_GIA_KHONG_LUC_CHIEN_DON.md), 21/10/2026; chưa code, vẽ UI hoặc playtest.
- [x] STAT-14 · Hoàn thiện đặc tả V1: Nhóm19nhánh, ngưỡng solo/nhóm và ledger ghi công heal/shield/tank/CC, không chỉ last-hit. [Hồ sơ](84_STAT_14_VAI_TRO_SOLO_VA_GHI_CONG.md), 21/10/2026; chưa code, vẽ UI hoặc playtest.

## B. Điều khiển, combat và trạng thái — M0

- [x] COMBAT-01 · Hoàn thiện đặc tả V1: Đánh hướng chuột không cần đích, hover/selected riêng, Tab/targeted heal/preview, hỗ trợ chọn không tự aim. [Hồ sơ](96_COMBAT_01_NGAM_VA_CHON_MUC_TIEU.md), 21/10/2026; chưa code, vẽ production hoặc playtest.
- [x] COMBAT-02 · Hoàn thiện đặc tả V1: Prepare/Active/Recovery, snapshot cadence, cost/cancel/buffer150ms, move/CC và gọi ngựa. [Hồ sơ](97_COMBAT_02_NHIP_HANH_DONG_VA_HUY_CHIEU.md), 21/10/2026; chưa code, vẽ production hoặc playtest.
- [x] COMBAT-03 · Hoàn thiện đặc tả V1: 10profile vũ khí, cycle/hit/shape/cleave/songdao/proc, tầm/animation tách VFX; cấu hình cân thử. [Hồ sơ](98_COMBAT_03_DON_THUONG_THEO_VU_KHI.md), 21/10/2026; chưa code, vẽ production hoặc playtest.
- [x] COMBAT-04 · Hoàn thiện đặc tả V1: Footprint/hurt/picking/visual bounds, contactSkin, boss/cầu/cao độ/cây/tường; scene2.5D chưa xác nhận. [Hồ sơ](99_COMBAT_04_HITBOX_CAO_DO_VA_VAT_CAN.md), 21/10/2026; chưa code, vẽ production hoặc playtest.
- [x] COMBAT-05 · Hoàn thiện đặc tả V1: V01 cấp1–10 không có quái bay; envelope đất/bay và cửa sổ đáp cho melee solo ở vùng sau, Thánh/Hắc ngựa tiến hóa chém đối không; không tự nhập ngọc thủ thành. [Hồ sơ](100_COMBAT_05_CAN_CHIEN_VA_QUAI_BAY.md), 21/10/2026; chưa code, vẽ production hoặc playtest.
- [x] COMBAT-06 · Hoàn thiện đặc tả V1: Projectile speed/path/range/TTL/sweep3D, pierce/bounce/homing/lifecycle; phản damage không phải phản đạn. [Hồ sơ](101_COMBAT_06_DUONG_DAN_VA_VA_CHAM.md), 21/10/2026; chưa code, vẽ production hoặc playtest.
- [x] COMBAT-07 · Hoàn thiện đặc tả V1: Catalog M0/M1, action permissions, stack/DR/cleanse/boss caps và visual requirements; chưa icon/effect sản xuất. [Hồ sơ](102_COMBAT_07_CATALOG_TRANG_THAI_V1.md), 21/10/2026; chưa code, vẽ production hoặc playtest.
- [x] COMBAT-08 · Hoàn thiện đặc tả V2 bám cốt truyện: Ma trận trạng thái/icon/VFX/anchor/LOD/stack/cleanse/miễn và phản hồi hành động. [Hồ sơ](106_COMBAT_08_HO_SO_HIEU_UNG_TRANG_THAI.md), 21/10/2026; chưa code, sản xuất asset hoặc playtest.
- [x] COMBAT-09 · Hoàn thiện đặc tả V2 bám cốt truyện: Heal/lifesteal/power/haste/shield/run riêng, aura pulse một lần và vòng duy trì, chống nhân logic nhiều nguồn. [Hồ sơ](107_COMBAT_09_HOI_PHUC_CUONG_HOA_VA_AURA.md), 21/10/2026; chưa code, sản xuất asset hoặc playtest.
- [x] COMBAT-10 · Hoàn thiện đặc tả V2 bám cốt truyện: Threat/detection/taunt/stealth/leash/reset và safezone, bảng threat độc lập quyền thưởng. [Hồ sơ](108_COMBAT_10_AGGRO_THREAT_VA_LANH_DIA.md), 21/10/2026; chưa code, sản xuất asset hoặc playtest.
- [x] COMBAT-11 · Hoàn thiện đặc tả V2 bám cốt truyện: Quan hệ hostile/neutral/protected/ally, bảo vệ sinh vật và safezone; chưa mở PvP V1. [Hồ sơ](109_COMBAT_11_QUYEN_GIAO_TRANH_VA_AN_TOAN.md), 21/10/2026; chưa code, sản xuất asset hoặc playtest.
- [x] COMBAT-12 · Hoàn thiện đặc tả V2 bám cốt truyện: Ledger damage/heal/absorb/CC/tank/objective/cứu, eligibility và XP/loot/quest tách nguồn. [Hồ sơ](110_COMBAT_12_GHI_CONG_VA_QUYEN_THUONG.md), 21/10/2026; chưa code, sản xuất asset hoặc playtest.
- [x] COMBAT-13 · Hoàn thiện đặc tả V2 bám cốt truyện: Phí Ngân Ấn/vật phẩm/checkpoint/cứu trợ, một cứu thường/run, phép Mục Sư18 và quota boss/deathId. [Hồ sơ](104_COMBAT_13_CHET_VA_HOI_SINH.md), 21/10/2026; chưa code, sản xuất asset hoặc playtest.
- [x] COMBAT-14 · Hoàn thiện đặc tả V2 bám cốt truyện: Combatlock10s, DCgrace10/60s, không pause, chuyển vùng/equip/pet/cooldown nhất quán. [Hồ sơ](111_COMBAT_14_DISCONNECT_CHUYEN_VUNG_VA_DOI_DO.md), 21/10/2026; chưa code, sản xuất asset hoặc playtest.
- [x] COMBAT-15 · Hoàn thiện đặc tả V2 bám cốt truyện: Số nổi kết quả thật, combatlog/bảng10s trước chết, không fakeDamage/publicDPS bắt buộc. [Hồ sơ](112_COMBAT_15_SO_NOI_LOG_VA_NGUYEN_NHAN_CHET.md), 21/10/2026; chưa code, sản xuất asset hoặc playtest.
- [x] COMBAT-16 · Hoàn thiện đặc tả V2 bám cốt truyện: Boss khángCC theo phase, cửa sổ phá thế8s/scale/đường solo, không chainlock boss. [Hồ sơ](113_COMBAT_16_BOSS_PHA_THE_VA_KHANG_CC.md), 21/10/2026; chưa code, sản xuất asset hoặc playtest.

> Khung mới: [tân thủ, tiến hóa và vô môn](29_HE_KY_NANG_TAN_THU_TIEN_HOA_VO_MON.md). Các nhánh mới đề xuất trong hồ sơ là backlog, không mở rộng ma trận hiện hành khi chưa chọn phạm vi.

## C. Class, kỹ năng và build — M0→M1

- [x] SKILL-01 · Hoàn thiện đặc tả V2 bám cốt truyện: Hồ sơ19nhánh về role/weapon/root/mana/nhịp/điểm yếu/solo, liên kết bộ chiêu có số. [Hồ sơ](114_SKILL_01_HO_SO_19_NHANH.md), 21/10/2026; chưa code, sản xuất asset hoặc playtest.
- [x] SKILL-02 · Hoàn thiện đặc tả V2 bám cốt truyện: 19nhánh/28tổ hợp, race-nghề15-nhánh30, teacher/quyền học/gear/horse và latequest. [Hồ sơ](115_SKILL_02_MA_TRAN_RACE_NGHE_VA_QUYEN.md), 21/10/2026; chưa code, sản xuất asset hoặc playtest.
- [x] SKILL-03 · Hoàn thiện đặc tả V2 bám cốt truyện: Bộ nền/race/nghề/nhánh/vô môn, core/racepassive có số, hotbar13 và regen không cộng kép. [Hồ sơ](116_SKILL_03_CAU_TRUC_BO_CHIEU_V1.md), 21/10/2026; chưa code, sản xuất asset hoặc playtest.
- [x] SKILL-04 · Hoàn thiện đặc tả V2 bám cốt truyện: Definition target/range/Z/shape/cost/cast/CD/rank/proc/lifecycle; catalog126 số toàn bộ kit. [Hồ sơ](117_SKILL_04_HOP_DONG_SO_KY_NANG.md), 21/10/2026; chưa code, sản xuất asset hoặc playtest.
- [x] SKILL-05 · Hoàn thiện đặc tả V2 bám cốt truyện: Nguồn học/quest/thầy, rankcap5,35SP/11TP, tiến hóa1:1 và học mới rank1. [Hồ sơ](118_SKILL_05_HOC_RANK_VA_TIEN_HOA.md), 21/10/2026; chưa code, sản xuất asset hoặc playtest.
- [x] SKILL-06 · Hoàn thiện đặc tả V2 bám cốt truyện: Ba cặp biến thể, hai hướng capstone mỗi nhánh, aux/passive/vô môn,11TP và đánh đổi build. [Hồ sơ](119_SKILL_06_THIEN_PHU_COMBO_VA_BUILD.md), 21/10/2026; chưa code, sản xuất asset hoặc playtest.
- [x] SKILL-07 · Hoàn thiện đặc tả V2 bám cốt truyện: Reset miễn phí ngoài combat tại nơi hợp lệ, haiKpreset/mộtAPallocation, không đổi nghề/CD exploit. [Hồ sơ](120_SKILL_07_RESET_PRESET_VA_GIOI_HAN_NGHE.md), 21/10/2026; chưa code, sản xuất asset hoặc playtest.
- [x] SKILL-08 · Hoàn thiện thiết kế skillbook, cây tiến hóa/thiên phú, hotbar, kéo/Gắn, preset, tooltip và phân điểm nháp. [Hồ sơ V1 — bảng kỹ năng và phân điểm](31_BANG_KY_NANG_VA_PHAN_DIEM.md), 21/10/2026; chưa triển khai/kiểm thử.
- [x] SKILL-09 · Hoàn thiện đặc tả V2 bám cốt truyện: Manifest per-skill/4hướng/weapon/horse/icon/VFX/SFX/LOD/bounds và19motif, chưa sản xuất hình/âm. [Hồ sơ](121_SKILL_09_DONG_TAC_ICON_VFX_SFX.md), 21/10/2026; chưa code, sản xuất asset hoặc playtest.
- [x] SKILL-10 · Hoàn thiện đặc tả V2 bám cốt truyện: TREE60s/passive/3command, BONEcap2, AI/lệnh/ownercredit/snapshot/threat và cleanup. [Hồ sơ](122_SKILL_10_TRIEU_HOI_VA_DIEU_KHIEN.md), 21/10/2026; chưa code, sản xuất asset hoặc playtest.
- [x] SKILL-11 · Hoàn thiện đặc tả V2 bám cốt truyện: PvEprofile áp dụng/PvPdisabled và tooltip/hợp đồng mode, không nhập skill sang thủ thành. [Hồ sơ](123_SKILL_11_PVE_PVP_VA_CHE_DO.md), 21/10/2026; chưa code, sản xuất asset hoặc playtest.
- [x] SKILL-12 · Hoàn thiện đặc tả V2 bám cốt truyện: Preview direction/ground/unit/dash/leap/projectile/aura đúngsurface/timing, không clickthrough. [Hồ sơ](124_SKILL_12_PREVIEW_HUONG_VUNG_VA_PHA_CHIEU.md), 21/10/2026; chưa code, sản xuất asset hoặc playtest.

## D. Cấp độ, cộng điểm và tiến trình nền — M0

- [x] LEVEL-01 · Hoàn thiện đặc tả V1: Đường XP1–60, nội dung đến45, quota tuyến chính/năm vùng, mục tiêu thời gian thử và xử lý cap. [Hồ sơ](85_LEVEL_01_DUONG_XP_CAP_45.md), 21/10/2026; chưa code, vẽ UI hoặc playtest.
- [x] LEVEL-02 · Hoàn thiện đặc tả V1: Nguồn XP một lần/lặp, quái theo cấp/grade, levelFactor, loại spawn/proc farm và event ledger. [Hồ sơ](86_LEVEL_02_NGUON_XP_VA_GIOI_HAN.md), 21/10/2026; chưa code, vẽ UI hoặc playtest.
- [x] LEVEL-03 · Hoàn thiện đặc tả V1: Pool/share theo eligibility, support/death, chênh cấp/carry và chưa mở level sync V1. [Hồ sơ](87_LEVEL_03_XP_NHOM_VA_HO_TRO.md), 21/10/2026; chưa code, vẽ UI hoặc playtest.
- [x] LEVEL-04 · Hoàn thiện đặc tả V1: Đồng bộ AP132 ở45/AP177 ở60, SP35/TP11 giữ sau45, grant đa cấp, reset/nháp và phânAP chung khác presetK. [Hồ sơ](88_LEVEL_04_DIEM_RESET_VA_PRESET.md), 21/10/2026; chưa code, vẽ UI hoặc playtest.
- [x] LEVEL-05 · Hoàn thiện đặc tả V1: Lịch mở skill/nghề15/nhánh30/nội tại/guide và cách xử lý chuyển chức muộn. [Hồ sơ](89_LEVEL_05_MOC_MO_HE_VA_HUONG_DAN.md), 21/10/2026; chưa code, vẽ UI hoặc playtest.
- [x] LEVEL-06 · Hoàn thiện đặc tả V1: Người mới/quay lại, không rested/offline/paidXP, hỗ trợ khác cấp và giữ luyện45–60; chưa level sync V1. [Hồ sơ](93_LEVEL_06_NGUOI_MOI_VA_QUAY_LAI.md), 21/10/2026; chưa code, vẽ production hoặc playtest.
- [x] LEVEL-07 · Hoàn thiện đặc tả V1: Thanh XP dưới13ô, C→Tiến trình, toast/badge/mốc45–60; level-up không hồi đầy HP/mana. [Hồ sơ](94_LEVEL_07_GIAO_DIEN_XP_VA_MOC_CAP.md), 21/10/2026; chưa code, vẽ production hoặc playtest.
- [x] LEVEL-08 · Hoàn thiện đặc tả V1: Character/account/world/season ownership, grant XP/điểm đúng một lần và PostgreSQL; chưa dịch vụ chuyển world V1. [Hồ sơ](95_LEVEL_08_QUYEN_SO_HUU_VA_LUU_TIEN_TRINH.md), 21/10/2026; chưa code, vẽ production hoặc playtest.

## E. Tu luyện — M2

- [ ] CULT-01 · Định nghĩa tu luyện tạo lựa chọn gì khác lên cấp; tên cảnh giới/mốc gắn truyền thống Elarion, không thêm thuật ngữ lạc bối cảnh vô cớ.
- [ ] CULT-02 · Nguồn tiến độ: trải nghiệm, khảo cứu, điểm nghỉ, sách/di vật hoặc thời gian; chọn cơ chế thật sự dùng, quy định offline nếu có.
- [ ] CULT-03 · Điều kiện đột phá, nguyên liệu, currency, xác suất/bảo đảm, thất bại, bảo toàn và giới hạn theo cấp.
- [ ] CULT-04 · Thuộc tính/utility mở ra, điểm chọn, chuyển nhánh/reset và đóng góp vào ngân sách sức mạnh.
- [ ] CULT-05 · Thiết kế cửa sổ cảnh giới, progress, nhánh, xem trước đột phá và lịch sử; thông báo rõ mất nguyên liệu khi nào.
- [ ] CULT-06 · Asset: biểu tượng cảnh giới, icon sách/tài nguyên, nghi thức nhân vật, VFX thành/bại; ai dạy và điều kiện lore.
- [ ] CULT-07 · Chốt tương tác với khai mạch/tín ngưỡng, caps và chống việc một nguồn bị tính hai lần; thiết kế lộ trình đuổi kịp.

## F. Khai mạch — M2

- [ ] MERID-01 · Định nghĩa trong lore là gì: mạch cộng hưởng cơ thể hay một hệ có tên khác; phân biệt với mạch lực địa lý.
- [ ] MERID-02 · Bản đồ nút/nhánh, thứ tự/điều kiện mở, slot và lựa chọn loại trừ; không vẽ mạng đẹp nhưng mọi nút chỉ +Công.
- [ ] MERID-03 · Chi phí, vật phẩm, giới hạn, mở/thay/reset, tỷ lệ và bảo toàn khi thất bại nếu có.
- [ ] MERID-04 · Thuộc tính cố định/ngẫu nhiên, liên kết set và trần; không cộng nhân vô hạn với đồ và tu luyện.
- [ ] MERID-05 · UI sơ đồ mạch có legend, zoom, nút đã/đang/chưa mở, tooltip nguồn khóa, xem trước và phím điều hướng.
- [ ] MERID-06 · Icon lõi/mạch, hiệu ứng khai thông, ảnh cơ thể theo race và tình huống không hiển thị giới tính/hình thể không phù hợp.
- [ ] MERID-07 · Bảng ví dụ build, giá đổi hướng, lộ trình mở ở cấp thấp/cao và phản hồi khi hết nguyên liệu.

## G. Tín ngưỡng — M1 giới thiệu lore, M2 cơ chế sâu

- [ ] FAITH-01 · Phân biệt đức tin nhập vai, quan hệ Giáo Hội và sức mạnh ban phước; không đồng nhất toàn bộ với một điểm phe.
- [ ] FAITH-02 · Bảy thần có nghi thức, điều kiện, lợi ích/giới hạn, người dạy và vật phẩm tương ứng; nhân vật không theo thần vẫn có build hợp lệ.
- [ ] FAITH-03 · Quy tắc chọn/đổi/tạm ngừng tín ngưỡng, đa tín/người không thờ, cooldown hoặc chi phí; không khóa race/class trái lore.
- [ ] FAITH-04 · Điểm cầu nguyện/hiến lễ, nguồn/ngày/tuần, phần thưởng và nơi tiêu; không cho dùng tiền nạp bỏ qua mọi đánh đổi nếu chưa có quyết định sản phẩm.
- [ ] FAITH-05 · Buff cá nhân/nhóm, thời hạn, cộng dồn, chết/chuyển vùng/PvP và giới hạn sức mạnh.
- [ ] FAITH-06 · Cửa sổ tín ngưỡng: biểu tượng thần, giáo lý, mối quan hệ, ân huệ, xem trước chuyển và lịch sử nghi lễ.
- [ ] FAITH-07 · Icon thánh vật/currency, avatar hiệu ứng, vật phẩm lễ, kiến trúc bàn thờ và animation cầu nguyện.
- [ ] FAITH-08 · Bí mật Vael’Thor chỉ mở theo lớp truyện; UI đầu game không tiết lộ hồ sơ tác giả hoặc ép người chơi thờ để qua truyện.

## H. Cánh — M2

- [ ] WING-01 · Chọn công năng: trang trí, di chuyển, chỉ số, kỹ năng hoặc kết hợp; “có cánh” không tự cho bay qua mọi cửa hầm.
- [ ] WING-02 · Nguồn sở hữu, slot, điều kiện mở, bậc/cấp/sao và hệ nguyên liệu/tiền; phân biệt skin và cánh mang chỉ số.
- [ ] WING-03 · Bay/lướt/đáp, giới hạn vùng, năng lượng, chiến đấu và PvP; đường cốt truyện không bắt mua cánh.
- [ ] WING-04 · Mô hình gắn lưng cho mỗi race, idle/move/attack/mount/death, bóng, ảnh inventory và avatar.
- [ ] WING-05 · Cửa sổ cánh: preview nhân vật, thuộc tính, ngoại hình theo bậc, vật liệu, tỷ lệ, bảo đảm và so sánh.
- [ ] WING-06 · Binding, giao dịch, tháo/chuyển nhân vật, mất/giữ nâng cấp khi đổi cánh; quy định ẩn cánh hoặc giảm VFX người khác.

## I. Thú cưỡi — M1 cơ bản, M2 phát triển

- [ ] MOUNT-01 · Danh mục mặt đất/nước/bay nếu chọn; sức chở, tốc độ, vùng cấm và điều kiện lên/xuống.
- [ ] MOUNT-02 · Cơ chế thuần hóa/nhận nhiệm vụ/mua/trứng, ownership và binding; phân biệt thú cưỡi với pet chiến đấu.
- [ ] MOUNT-03 · Gọi thú, bị ngắt, nhận damage, cast, chết/hồi sinh, đổi vùng và disconnect; người đi bộ vẫn đến được nội dung chính.
- [ ] MOUNT-04 · Race/hình thể khi ngồi, bộ giáp/yên, hướng, chạy/đứng/quay/nhảy/đáp và scale với cửa/cầu.
- [ ] MOUNT-05 · Cấp, kỹ năng, bậc, tiến hóa, vật phẩm chăm sóc; nếu có chỉ số chuyển sang chủ phải tính ngân sách riêng.
- [ ] MOUNT-06 · Cửa sổ bộ sưu tập, đang dùng, skin, vật liệu, preview và hotkey gọi; có nút cho mobile.
- [ ] MOUNT-07 · Tương tác dạng R kỵ sĩ, cánh, biến hình và pet: mỗi trạng thái hiển thị/di chuyển/chiến đấu phải được chốt.

## J. Tiến hóa và biến hình — M2

- [ ] EVOLVE-01 · Liệt kê đối tượng được tiến hóa: nhân vật, class, pet, mount, wing hay trang bị; không dùng một nút chung cho các hệ khác luật.
- [ ] EVOLVE-02 · Mỗi chuỗi có dạng gốc → dạng mới, tên/cốt truyện, điều kiện, nguyên liệu, tiền và có/không nhánh lựa chọn.
- [ ] EVOLVE-03 · Chốt thành công bảo đảm/xác suất, pity/bảo hộ, mất gì khi thất bại, có thể quay lại hay không, chuyển đổi nâng cấp cũ.
- [ ] EVOLVE-04 · Chỉ số/skill mở mới phải nêu thay thế hay cộng thêm, caps và ảnh hưởng PvP; không gộp skin với sức mạnh mà UI không nói.
- [ ] EVOLVE-05 · Bộ hình ảnh đầy đủ trước/sau: avatar, portrait, model, idle/move/attack/cast/hurt/death, icon skill/trạng thái, VFX và vật phẩm tiến hóa.
- [ ] EVOLVE-06 · Cửa sổ xem trước hai dạng, checklist điều kiện, vật liệu thiếu/đủ, xác suất, cảnh báo, kết quả và lịch sử.
- [ ] EVOLVE-07 · Khi đang giao dịch, cưỡi thú, trong dungeon, chết hoặc offline: thao tác được phép ở đâu, hoàn trả khi ngắt và trạng thái sau đăng nhập.
- [ ] EVOLVE-08 · Kiểm chuỗi tương thích với trang bị/vũ khí, cánh, skin và thao tác class; không cắt sprite hoặc bỏ animation ở dạng mới.

## K. Các hệ phát triển bổ sung cần cân nhắc

- [ ] EXTRA-01 · Danh vọng/phe: nguồn, cấp quan hệ, quyền lợi, mâu thuẫn, giảm/khôi phục; không khóa sự thật chính sau grind danh vọng.
- [ ] EXTRA-02 · Danh hiệu/thành tựu/bách khoa: thuần sưu tập hay có chỉ số, nguồn ẩn/hiện, tiến trình account/nhân vật.
- [ ] EXTRA-03 · Pet chiến đấu: sở hữu, build, kỹ năng, AI, huấn luyện, thay thế, chết, giao dịch, tiến hóa và UI lệnh.
- [ ] EXTRA-04 · Di vật/hiện vật: slot, nguồn, hiệu ứng đặc biệt, cộng dồn, bộ, nâng cấp và binding; tránh thêm bản sao ngọc/đồ.
- [ ] EXTRA-05 · Nghề phụ/công cụ: tiến trình tay nghề không chỉ nhân bản XP combat, có chuyên môn và công thức.
- [ ] EXTRA-06 · Ngoại trang, nhuộm, sưu tập: quy tắc unlock/account, xem trước, ẩn bộ phận và không giả thông tin trang bị của người khác.
- [ ] EXTRA-07 · Nếu thiết kế sức mạnh guild, gia đình/kết nghĩa hoặc nhà: công bố nguồn, giới hạn và tác động lên người chơi solo.
- [ ] EXTRA-08 · Lập bản tổng hợp mọi nguồn tăng sức mạnh và thử build tập trung/tản đều, không chỉ cân từng hệ riêng.
- [ ] EXTRA-09 · Chuyển sinh/thăng hoa/tiến trình sau trần nếu chọn X: mục đích, giữ/mất cấp/build/item/quest, hình thái và cách không bắt người chơi xóa thành quả chỉ để chơi tiếp.

## Ràng buộc phạm vi cập nhật · 20/10/2026

[PROD-06 V2](15_PROD_06_PHAM_VI_VA_NGAN_SACH.md) và [PROD-08](17_PROD_08_CAP_DO_VA_MO_RONG.md) là đầu vào mới: năm vùng mở đến45, trần nhân vật60, mỗi vùng >10 NPC, vùng sau diện tích 3–4 lần vùng đầu; dungeon đặc sản có 1–3 boss theo khó, rương ẩn, tinh anh và boss vùng. Có cinematic mở đầu bỏ qua/xem lại. Không tự đánh dấu hoàn thành các task chuyên môn từ hồ sơ phạm vi này.


**Đồng bộ thiết kế class:** [Kết quả rà soát và quy tắc liên hệ thống](32_DONG_BO_CLASS_KY_NANG_TRANG_BI.md). Giữ cây 3 chủng tộc/7 nghề/19 nhánh; sửa mô tả cũ và điều kiện điểm, slot, tiến hóa, trang bị. Không tăng số task hoàn tất.


**Kỵ Sĩ và tọa kỵ:** [Thiết kế chiến đấu trên ngựa, giáp theo bộ và bị động tiến hóa cánh](34_KY_SI_CHIEN_DAU_TREN_NGUA.md). Đây là cập nhật đặc thù class; MOUNT-01…07 chưa hoàn thiện toàn bộ.


**Danh mục trạng thái mở rộng:** [Hất tung, trói chân, giáp/kháng phép, lá chắn, chảy máu và buff/debuff](40_DANH_MUC_TRANG_THAI_BUFF_DEBUFF.md). Phân biệt tăng giáp với giáp ảo, slow chạy/đánh/niệm và damage theo thời gian; chưa chốt bảng số hoặc công thức combat.


**Nội tại thuộc tính chủ đạo:** [Nghiên cứu](77_THAM_KHAO_NOI_TAI_CHUYEN_HOA_THUOC_TINH.md) và [profile19nhánh](78_NOI_TAI_CHU_DAO_CUA_19_NHANH.md). Mỗi nhánh dùng một/hai stat đầu tư để tăng các skill có tag; không đổi pool AP/giới hạn hiếm, không tự tick SKILL hoàn tất.


**STAT-10…14/LEVEL-01…05:** [Tổng hợp và cấu hình](90_TONG_HOP_STAT_LEVEL_10_MUC.md). Các dấu x xác nhận hồ sơ, không chứng minh19nhánh cân bằng hoặc tuyến quest đủXP đã chạy thực tế.
