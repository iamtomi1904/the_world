> **Bản V2 có hiệu lực · 21/10/2026:** [Báo cáo nâng sâu133](133_V2_BAO_CAO_THAY_DOI_VA_BAN_GIAO.md), [khế ước cốt truyện128](128_V2_KHE_UOC_COT_TRUYEN_VA_COMBAT.md), [utility/capstone131](131_V2_CO_CHE_KY_NANG_VA_THIEN_PHU.md). PhầnV2 ở cuối hồ sơ thay các điểmV1 có xung đột; số/rule không thay giữ nguyên. Đây là thiết kế, chưa code/asset/QA.

# SKILL-07 — Reset điểm, preset và giới hạn đổi nghề

**Ngày:**21/10/2026 · V1đặc tả. Resetkhôngphảisảnphẩmnạp, khôngđồngnghĩađổirace/nghề.

## 1. Quyết định

AP/SP/TP resetmiễnphí tạiđiểmnghỉ hoặcNPCthầy, ngoài combatlock10s, khôngcast/channel/transfer/tradecommit. Hai skillpresetmiễnphí từ15; mộtđanghiệulực, cùng35SP/11TP. APmộtallocationchung, KpresetkhôngtựđổiAP. Có thểlưukếhoạchAP nhưng ápdụngbằngflowAPriêng, khôngfreeheal.

V1khôngđổirace/nghề/nhánhtựdo, khôngvéđổitrênshop. Nhánh đãchọn30 làquyếtdịnhdàihạn, Kpreviewthấytrướctại15/30. Lỗidữliệu cóadminmigration/audit, khôngbắtngườichơitrảtiềnsửalỗihệthống.

## 2. Luồng nháp và commit

C/K→ChọnphạmviResetAP/SP/TP hoặcPreset→previewđiểmhoàn/nguồn/rank/magnitude/slotmấtquyền→chỉnhnháp→Ápdụngmộttransaction. Mộtclickkhôngresetmọithứ. Mứcearnedkhôngđổi; used+unspent=earned cho mỗi pool/preset. Skillquyềnhọccòn, rankvề1nếu resetSP, TPunallocatednếu resetTP; khôngxóarace/questweapon/horse.

~ẩnnhápgiữtạm theoUI-06; X/EschỏiGiữ/Bỏ/Quaylại, khôngtựcommit. ĐổiPC/web loadserverbuild, khônglấydraftmới hơnđèthật. Importchỉkếhoạch phảiđúngrace/nghề/version, invalidnode hiệnlýdo.

## 3. Không khai thác buff/CD

CDtheolineage/group/characterdeadline, giữ khiđổipreset/rank/form. Timedbuff/aura của skillvừatháo đượcgỡnếuactive-skilldependent; khôngghibuffcũ đểcộngbuildmới. DoT/HoTđãáp trênđíchkhác theoSTAT-10, nhưng chỉđổibuildsaucombatlockđúngrule, khôngsnapshotbuffwapgiữcastmới vôhạn.

Petđanghoạtđộngdespawn trướcskillpreset cóthayđổilệnh/profile; resummon cầnCD/manathật, khôngresetbằngtháo/gắn. HP/mana giữcurrent/clampdownkhi maxgiảm; tăngmaxkhôngheal. Cánhngựađúngnhánh/profilevẫncònquyềnbịđộng, khôngresetnghềkhingườiđổitalent.

## 4. Persistence và kiểm sau

Serverkiểmrevision/earned/quyền/ngoàicombat vàrequestId; saveallocation,preset,grants nguồn, version; timeout Chưarõkếtquả, querycùngrequest. KhôngcộngSPtừclienttotal hoặcnhân11TPtheosốpreset. Patchloạinodehoànđúngđiểm, giữquyềnskillcơbản, khôngâmđiểmngầm.

Kiểmraceswapfake,draftrace,CD/buff/pet,dualclient,combatbắtđầugiữalúccommit,patchnoderemoved; chưacode/SQL/QA.


## V2 — Đổi kỹ thuật không viết lại lời đã nói

Reset AP/SP/TP/skillpresetlàđiềuchỉnhcáchlàm, khôngxóa GATE/choice/relationship. Không phảituyênthệphảnbộiđểđổicapstone, khôngnghi lễhút kýức người chơi. Quyềnrace/nghề/nhánh đãchốt dài hạn V1giữ.

Migration V1→V2giữearned/ranklineage/CD, hoàn TPcácnodecapstonethực bịthayđểngười chơichọnlại; khôngautođổibuildmộtcáchngầm. Playerđangtrậnápconfigversioncủaattempt, thayởđiểmantoàn sauđó. Pet/sustainedbufftừnodecũdọntheopolicytrước khiápmới, khônggiữ Cốt Vệ+hai BONE.

Tiêu chí: previewrõnodekhôngcònhợp lệ/điểmhoàn, khôngâmđiểm/mấtquyền/dupe, khôngrestart CD/heal; lựa chọncốt truyệnvẫnđược NPCnhớđúng.
