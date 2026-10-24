> **Bản V2 có hiệu lực · 21/10/2026:** [Báo cáo nâng sâu133](133_V2_BAO_CAO_THAY_DOI_VA_BAN_GIAO.md), [khế ước cốt truyện128](128_V2_KHE_UOC_COT_TRUYEN_VA_COMBAT.md), [utility/capstone131](131_V2_CO_CHE_KY_NANG_VA_THIEN_PHU.md). PhầnV2 ở cuối hồ sơ thay các điểmV1 có xung đột; số/rule không thay giữ nguyên. Đây là thiết kế, chưa code/asset/QA.

# SKILL-09 — Icon, động tác, VFX và âm thanh kỹ năng

**Ngày:**21/10/2026 · V1hồsơsảnxuất, **chưa vẽ sprite/icon/VFX hoặc tạo audio**. [Nghiên cứu](105_NGHIEN_CUU_COMBAT_VA_19_NHANH.md), assetmớitheoARTV4/2.5D, khônglấybộthủthành/craftpix.

## 1. Manifest mỗi skill

Catalog126 mỗi skillId/form có: iconBase32px đọc24px; portrait khôngdùngthayicon; posePrepare/Release/Recovery/Cancel ở4hướng; weaponSocket/horseifneeded; VFXCast/Travel/Impact/Field/Status/End; SFXStart/Release/Impact/Loop/End; Full/Gọn/Chức năng; originalFrame/trim/pivot/bounds/ground/headanchors. Khôngtạo chỉiconrồigọixongskill.

Rank1–5 giữbaseicon, sốrankUI vàviền, khôngvẽ5iconchỉđổimàu. Biếnthểchính đổi glyph góc/lõi khi thayhìnhvùng, nhưng đểnhậnra lineage; nodeframechủđộngvuông/passivetròn/tiến hóa thoi theo31. TextCD/stack khôngbakevàoảnh. Races/weaponfamilies khác pose không cónghĩakhácCD.

## 2. Ma trận nhận diện19nhánh

| Nhánh | Shape/palette/vũ khí | Signature và động tác bắtbuộc |
|---|---|---|
|PAL|Cungchémtrắngngà/vàng, trọngkiếm sáng|Niệmlời thề trênngựa→giơkiếm→ấntròn bảo hộ; aura pulse1lần|
|DKN|Vệtchémkhuyết tímđen, ấnkiếm|Kéo trọngkiếm→chémhắcấn→sợinănglượngvềkhi selfheal thật|
|HGD|Mảngkhiên/chéochùyvàngtrầm|Hạkhiên/chùy→vòngtrấn→khiênquaygọn|
|VAN|Mũigiáovàngđất/tuyếnthẳng|Hạgiáo→laosweep→vệttrấnđất, khôngquạtrộnggiốngrìu|
|BER|Khốirìuđỏđất/nứtđá|Gồng→bổ/rềnđất→thuđòn; cườnghóa đổiweaponlayer, khôngphóngtoảnh|
|WND|Cungkiếmxanhngọcmảnh|Axoayngười+dọcđường;Sniệm→nhảy→đáp→lốcnhỏvenvòng|
|ASN|Songvệtngắn tímlục/xám|ẢnhBộlướtẩn;Sniệmngắn→laochémquạt→afterimage2nhát|
|HSW|Trọngkiếpxámthép/lõiđất|Dựngkiếm→hạtrảm nặng, trailkhônglớnhơnphạmvi thật|
|THU|Lõiđạn/tia nhánhvàngtím|Niệm điện tụ→đạn cóđầu→nhánh impact, khôngfillmànmỗitick|
|FIR|Lửacamđỏ/lõithan|Smeteor:niệm→đácháyrơitừtrên→impact→tàn, khôngchỉvòngnổđất|
|WAT|Giọt/sóng/xanhbăng|Svuốttrượng→sóngdâng→tinhthể/luồngnước, khôngFiređổimàu|
|NEC|Trang sách/khớpxươngxámngà|Mởsách→ấnđất→xươngrápđúngspawn, bodypetđủ5state|
|LGT|Tia thẳng/mũiấn trắngvàng|Tụtrượng→cộtsángtheoZ/surface, táchhealglyph|
|DRK|Vòngkhuyết/khóihưảnhchàm|Niệm→vùngkhuyết→nhánhkhóitan, khônglấyskeletonNEC|
|EAR|Mảnhđácạnh/đấtson|Trượngchạmđất→gờsóngvisual→bụi; khôngtạo tườngnavkhóađường|
|ARC|Đầutên/dảigióvàngrơm|Kéocung→release→đạnxuyên trailđủngắn;raincótênrơi|
|SPI|Lá/linhấnngọclục|Khếước→câytrồi/ghép lá→linhthể, lệnhpetđúngmốc|
|PRI|Ấnthánh/dấucộngtrắngxanh|Healchỉdấucộngkhipacket;rezniệm→cộtsáng→đứngdậy sauaccept|
|WOD|Mầm/rễ/ngọcxanhấm|HoTlá→cộngxanhmỗitick;rezlákếtthân→linhquangđứngdậy|

## 3. Đồng bộ và chất lượng

Actiontime97 lànguồn, khônganimationcallbackgâydamage. MeleeVFXxoayworldvector360° trongkhipose4hướng; khôngxoaytoànatlasthân. Dash/Leapbindpath, Landđúngvalidsurface. Triệuhồispawnloopkhôngspawnentitylạimỗivòng. Atlasbounds riêng từngpart, cópadding/trimmargin cho glow/trail, khôngcắtvuôngtheobody.

BasicattacktrailngắnphânbiệtA; signatuređượcphôtrươngnhưngkhôngđổihitbox. Idle/moveglow thấp, attackđủframe, CCgiữheadiconrõ. Kỵngựa/giáp/cánh chungtransform, posekiếmkhôngxuyênthânngựavôlý. AnimationHurt khôngresetattack mỗi hit trừserverinterrupt.

## 4. SFX và LOD

Shortcast/weaponimpact4layernhẹ, loopfield có1voice/group/gần; max8impactvoices đồngthờiởpresentation theoưu tiênP0/P1, khôngdroplogic. SkillFull/Gọn/Chức năng cùngtiming/shape; P3hạtrước, giữđầuđạn/biênnguyhiểm. Khôngrandompitch làmngườichơitưởng crit/hitkhácmàlogkhôngcó.

## 5. Asset review sau

Checklistpermanifest đủID/frame/4dir/sockets/bounds/LOD/audio/licenseversion, soidle/move/cast/mounted/giantboss. Kiểm skillxuyên/fieldrộng, previewvsimpact, pooldespawn và20playerkhôngcắthình. Chưa artwork/audio hoặcperformanceQA, khôngtickASSET/SCREENtừhồsơnày.


## V2 — Hình và âm là dấu nghề

Khôngmọivùngcổđều tímhưkhông hoặcmọicasterthảquảcầuđổimàu. Đườngkiếm WNDlàcungmảnh/hướnggió, DKNcólờikhắc/dấuquayvề, HGDmặt khiênđọcđượcphíache, THUđầudẫnvànhánh, FIRcóviênđá/tànnhiệt, WATmàngnướcbằngpoolcòn, NEClàkhớpxươngghépvô tri, PRI/WODcóhìnhnén/chuyểncứu trợkhácnhau.

Ở V01âmđènbáoáp/khóa Orenđãcùngmotifvớiđồkiểmấn Nhà Đèn; khôngchèn thoại Edrankhông cónguồn. Ba LODgiữbiên/đầuđạn/thời gian/P0, atlasoriginalbounds/socketriêngkhôngcắtvìthânnhỏ. Khôngspamvòngauralớn.

Tiêu chí: nhậnranguồn/hành độngvàphatừsilhouette/cửđộng,khôngcầnfxkínmàn; storyboard/manifestcó ID/costsản xuất. Chưavẽ/audio, khôngđánhđồnghồ sơvớiassetđãxong.
