> **Điều chỉnh nhân vật có hiệu lực · 22/10/2026:** [Hồ sơ 208](208_DIEU_CHINH_NHAN_DIEN_VU_KHI_VA_HGD_DI_BO.md) thay các mô tả xung đột: HGD dùng kỹ năng khi đi bộ; VAN giáo + khiên; PRI thánh thư + trượng chữ thập; xạ thủ Người Lùn dùng nỏ/bẫy; có trang bị mũ. PAL/DKN vẫn cần ngựa. Ảnh là 2D pixel cho thế giới 2.5D.

> **Bản V2 có hiệu lực · 21/10/2026:** [Báo cáo nâng sâu133](133_V2_BAO_CAO_THAY_DOI_VA_BAN_GIAO.md), [khế ước cốt truyện128](128_V2_KHE_UOC_COT_TRUYEN_VA_COMBAT.md), [utility/capstone131](131_V2_CO_CHE_KY_NANG_VA_THIEN_PHU.md). PhầnV2 ở cuối hồ sơ thay các điểmV1 có xung đột; số/rule không thay giữ nguyên. Đây là thiết kế, chưa code/asset/QA.

# SKILL-01 — Hồ sơ 19 nhánh chiến đấu

**Ngày:**21/10/2026 · V1thiếtkếkit, chưacân bằng/runtime. [Nghiên cứu](105_NGHIEN_CUU_COMBAT_VA_19_NHANH.md). Race/nghề/vũkhítheo28, thuộc tínhchủđạo/nội tại theo78, sốchiêutheo126.

## 1. Quy tắc chung

Mọi nhánh dùng mana chung đã có; không tạo thêm thanh rage/energy/soul vôhạn để thay côngthức. Combo/ấn/lựchội tụ là effect hữu hạn khi skill/talent khai báo, không tiền hayAP. Một actor chỉ một nghề/nhánh, không cộngskill nghềngoài quyền. Tank/healer có mainstorysolo, không multiplierDPSẩn; mục tiêu solo≥55%/65%mốcDPS theo84 cần đo sau.

| Nhánh / ID | Vũ khí; chủ đạo | Bản sắc / vai trò / nhịp | Điểm yếu và cách ứng phó |
|---|---|---|---|
| Thánh Kỵ Sĩ / PAL |Trọngkiếm;STR/VIT|Tank-bảo hộ, chém rồi cheđội; ngựa chiến bắtbuộc, tiến hóa cánh30|Cầnđúngvịtrí/aura, burst khôngbằngDPS; dùngguard để cóuptime.|
| Hắc Kỵ Sĩ / DKN |Trọngkiếm;STR/INT|Đấu sĩ hắcấn, damage và selfheal hữu hạn; ngựa/cánh|Hồi dựa skill cost/CD, không lifesteal mọihit; tránhburst ngoài cửa sổ.|
| Hộ Vệ Thánh / HGD |Chùy+khiên;VIT/STR|Tankgiữmục tiêu, block/taunt/cover|Tầm ngắn/damageít; chủđộng giữkhoảngcáchđội, không miễnphép.|
| Tiên Phong / VAN |Giáo;STR/AGI|Đấu sĩ tuyếnthẳng, đâm/xung phong/bẻđội hình|Dễhụt nếu hướngsai; ưu tiênlaneskhôngcầnlockedtarget.|
| Cuồng Chiến / BER |Rìu;STR/VIT|Đấu sĩ cleave/burst cóphảnđổi phòngthủ|KhôngđốtHP tựsát, cửa sổ tăngdamageTaken phải canhguard.|
| Phong Kiếm Khách / WND |Kiếm1tay;STR/AGI|DPS cơđộng, xoay/lướt tuyến và niệm-nhảy-đáp vùnggió|Ítchốngburst, phải cănđường/đích; khôngautoaim.|
| Sát Thủ / ASN |Songdao;AGI/STR|Đột kích, ẢnhBộlướtẩn, chữathế bằng vịtrí|AoE/DoTphát hiện, áp sát rủiro; khôngone-shotboss.|
| Kiếm Sĩ Trọng Kiếm / HSW |Trọngkiếm;STR|DPS chậm, đòn rõ nhịp, giữthế/chémnặng|Windup dài, cần dự đoán; không cancel bỏcadence.|
| Lôi Pháp Sư / THU |Trượng;INT/AGI|Phép lan/tag điện, điều khiển ngắn trongDR|Đứng niệm/chọn cụm; khôngstunmọitick.|
| Hỏa Pháp Sư / FIR |Trượng;INT|Phép direct+burn, vùng hỏa/thiênthạch|Damagecần thời gian, mục tiêu di chuyển né vùng; burnkhôngdoublehook.|
| Thủy Pháp Sư / WAT |Trượng;INT/VIT|Phép nước/băng, slow/shield, kiểm soát vùng|Freeze boss bịmiễnngoàipha; vẫn códamage vàguard.|
| Pháp Sư Tử Linh / NEC |Mađạothư;INT/VIT|Summonđánh/xương, chủra lệnh và đặtấn|Quânít/budgetchung, summonchết phải chờCD; khôngsnowballvôhạn.|
| Pháp Sư Ánh Sáng / LGT |Trượng;INT|DPSphép đườngtia/ấn, cóshieldnhỏ|Khôngmục sư/healerthaythế, cầnLoS/cast.|
| Pháp Sư Bóng Tối / DRK |Trượng;INT/AGI|DPSphép vùng/đánh dấu hưảnh|KhôngtựhọcTửLinh, khôngpet/stealthdefault; néđòn khi niệm.|
| Thổ Pháp Sư / EAR |Trượng;INT/VIT|Phép địa hình giảlậpvùng, giữtrận/shield|Khôngtạo tườngkhóa người/chặnportal, ítcơđộng.|
| Cung Thủ / ARC |Cung;AGI|DPSđịnhhướng, xuyên tuyến, mark/rain|Đườngđạn bịtường, vừađánh vừađi chậm; khôngtầm vôhạn.|
| Tinh Linh / SPI |Trượngkhếước;INT/VIT|Triệu hồi linhthể, hỗtrợ pet và điều phối vùng|Tổngchủ+pet trongbudget, khôngmỗi petfullDPS.|
| Mục Sư / PRI |Thánhtrượng;INT/VIT|Healdirect/cleanse, aura, hồi sinh|Mana/cast cầnđội bảo vệ; skillattack đủsolo, khôngautohealmọingười.|
| Pháp Sư Mộc / WOD |Trượngmộc;INT/VIT|HoT/bảo hộ/cứu sinh, thuộcnghềMụcSư|Heal cầnthời gian, khôngbằngdirectburst; kếthừarez, khôngpetthêm ngoài kit.|

## 2. Nội tại và tài nguyên

Giữ toànbộ19profileR/coeff78: không đổi các c_D/c_H/c_S/c_P/c_V hoặc tăngAPcap. Tiến hóa ngựaPAL/DKN là cùngbudgetnội tại, không extraactor. Nghề15 có mộtcorestate giúpvận hành, chi tiết116; nhánh30 kếthừa core và profile78, khôngxếp hai R.

Một số nhánh có skilldoT/shield/pet để hook78thật có đối tượng; hệ số ở126 đãphân direct/tick riêng. Khôngchuyển phầnbonuspet chưa dùng sangdamagechủ. Nghề/nhánh không thiệnác mặcđịnh: DKN/NEC/DRK dùngphongấn/khếước khácnhau, không tự làpheHưKhông.

## 3. Hành trình và điểm

15nhậnbaformlineage+utilitynghề,30nhậnbaformnhánh vàsignature, utilitynghề chuyểnmàu/biểuhiện cóquyềntheonhánh. MụcSư thêmrescueutility18. 35SPkhôngmaxmọidòng,13ôcho phép skill/thuốc, khôngbắtđầy13active. Classchuyênsâu khôngthêmvùng46–60 hoặc rewardSPsau45.

## 4. Sản xuất và nghiệm thu sau

Mỗi nhánh cóweaponSocket/horseifneeded/4hướng, corepassiveicon,5chủđộngnhánh+race/universal liênquan; khôngcopy thủthành. Kiểmsolo/nhóm/bossCCimmune/airởvùngsau, APprimary/secondary,VIT, ngân sách mana/burst60s. Hồsơhoànthiệnthiếtkếkhôngnghĩa19nhánhđãcân bằng hoặcđãvẽ.


## V2 — Nghề là công việc, không chỉ bảng chỉ số

Mỗi nhánhcótruyền thống130, mộtkỹ thuậtcốt lõi, rủirovàlựa chọnđặc trưng. PALgiữđường thoát, DKNgiữđiểmtrởvề, WATphânbổkhiêncòn, PRIchiahaithờihiệuheal, WODquảnlýphầnhồichưathựchiện. Một pháp sưÁnh Sángkhôngtrởthành Mục Sưvìmàu vàng.

Giữ19nhánh/28tổhợp, rootpassive78 vàvai trò114. Truyền thốngkhôngép phe/tínngưỡng, khôngđổi Human/Elf/Dwarfquyền họchoặcđẻclass20. Mỗithẻnghềhiệnđộkhóvềngắm/niệm/quảnlýpet vàtìnhhuốngđặc trưng, khôngghi DPSgiả.

Tiêu chí: cùnggear/rank, người chơinhậnra nhánhquaquyếtđịnhvị trí/thời gian, khôngchỉquanhình; solo/nhómcóđườnggiảitươngứng vàkhôngmộtnội dungchínhbắtđúngclass.
