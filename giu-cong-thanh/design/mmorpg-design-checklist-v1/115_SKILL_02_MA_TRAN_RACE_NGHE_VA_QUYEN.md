> **Bản V2 có hiệu lực · 21/10/2026:** [Báo cáo nâng sâu133](133_V2_BAO_CAO_THAY_DOI_VA_BAN_GIAO.md), [khế ước cốt truyện128](128_V2_KHE_UOC_COT_TRUYEN_VA_COMBAT.md), [utility/capstone131](131_V2_CO_CHE_KY_NANG_VA_THIEN_PHU.md). PhầnV2 ở cuối hồ sơ thay các điểmV1 có xung đột; số/rule không thay giữ nguyên. Đây là thiết kế, chưa code/asset/QA.

# SKILL-02 — Ma trận race, nghề và quyền học

**Ngày:**21/10/2026 · V1thiếtkế. Không đổi cây28; làm rõ học/đồ/nguồn. [Hồ sơ class](114_SKILL_01_HO_SO_19_NHANH.md).

## 1. Ma trận đã khóa

| Nghề15 | ConNgười | Elf | NgườiLùn | Nhánh30 và bộ vũ khí |
|---|---|---|---|---|
| KỵSĩ |PAL/DKN/HGD|—|—|PAL/DKNtrọngkiếm;HGDchùy+khiên; mọi skillnghề cầnngựa|
| ChiếnBinh |VAN/BER|—|VAN/BER|Giáo/rìu tươngứng|
| KiếmSư |WND/ASN|ASN|HSW|Kiếm1tay/songdao/trọngkiếm|
| PhápSư |THU/FIR/WAT/NEC|THU/FIR/WAT/LGT/DRK|EAR|Trượng;NECmađạothư|
| CungThủ |ARC|ARC|ARC|Cung|
| TinhLinh |SPI|SPI|—|Trượngkhếước|
| MụcSư |PRI|WOD|—|Thánhtrượng/trượngmộc, cùngquyềnphéphồisinh18|

Tổng19nhánh/28tổhợp: ConNgười14,Elf9,NgườiLùn5. Không tựthêmElfThánhKỵSĩ, DwarfMụcSư hoặc choElfÁnhSáng họcrezvì tênánh sáng. Racechỉhiệnnghềcóđườngđi; mànchọn15 cho xemnhánh30/vũkhí/solo trướcxácnhận.

## 2. Quyền theo giai đoạn

Cấp1race/ngoạihình/xuấtthân, TânBinhkhôngchọnnghềngầm. 1–14kitkiếm/cung/trượngtập hợp lệ; đổiởkhu tậpngoàicombat, khôngbaCDriêng. Cấp15+quest chọnnghề, quyền15/utility/coregrant mộtlần. Cấp30+quest chọnnhánhtrongnghềrace, formlineagekếthừa1:1, utilitynghềcònphảiđúngfamily mới. Khôngdùngđồtập trongcombatđểcastformcũ.

ChậmquestvẫnnhậnXP/AP/SP/TPtheocấp, giữđiểmchưadùng, khôngautochoose. Firstjob/branchquest cấpvũkhínềnkhóanhânvật cho nhánhđổi family, KỵSĩnhậnngựa15. Khôngbắtchợ/nạpmớicóchơicôngcụnghề.

## 3. Học, trang bị và khác hình

Skillpermission=character/race/profession/branch/quest/unlockLevel/weaponFamily/mountedState/slot/condition. Serverkiểm khi học, áp dụngbuild, bắtđầucast vàhitnếuquan hệđổi; khôngchỉUIkhóa. Ngoạitrang/vũkhí cùngitemkhácprofilechỉhình, khôngmởquyềnskill hoặc thêmstat. Branchwearprofile cófallbackđúngbody, khônglấyprofileclasskhác.

Nhómteacher dùngroleId: Thầynền, Hướngdẫnnghề7loại, Thầynhánh19loại cóthể là NPCphục vụnhiềurole. Khôngbịa19NPCbắtbuộcđứng ởmaptânthủ; mapV01>10NPC vẫntheobudget15. V01khôngquáibay vàkhôngbàiđốikhông.

## 4. Di trú và lỗi

Lưuquyềnhọc theocharacter/lineage/formVersion, khôngname. Race/nghề/nhánhreset tựdo chưa mởV1. Adminfixcóaudit/migration giữrewardledger; importbuildkhôngcấpquyền. NPCwrongrace hiệngiảithíchvàđườnghợplệ, khôngthuphí trướcvalidation.

Kiểm28tổhợp, khôngcótổhợplạcnghề,branchswapweapon, ElfMộcres18, lagquestgrant,clientfake/mixedgear. Chưatest/runtime, schemaDATA cònriêng.


## V2 — Đường học có người chịu trách nhiệm

Nghề15/nhánh30 đượcgiớithiệubởicộngđồngđangcóvấnđề: bếnxe, trạmchữa, xưởng/điểmkiểmnguồn. Thầydạykỹ thuậtvàgiới hạn, khôngtraobáuvậtchọnngười. NPCgốcgiữvai trò: Neristhợkiểmấn, Tessalưutrữ, Rovanlàhọcgiảcócôngviệc; họkhôngbỗngmastermọi nhánh.

Teacher Rolecóthểdùng NPCtrong82budget, khôngtựthêm19NPC/questhọcdài. Previewở15chothấyđủnhánhhợprace30, weapon/horse/quyềnvàtruyền thống. Mục Sư Elfgiữrez18/nhánh Mộc, NPCcác racekhácvẫntồntạidạngcưdân.

Tiêu chí: khôngđến30mớibịbáohếtđường, khônglụachọnpheđúngmớihọcđược, fakeclass/weapon/mountpacketvẫnbịchặn; côngcụnền nhận một lần với ledger.
