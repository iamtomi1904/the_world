> **Bản V2 có hiệu lực · 21/10/2026:** [Báo cáo nâng sâu133](133_V2_BAO_CAO_THAY_DOI_VA_BAN_GIAO.md), [khế ước cốt truyện128](128_V2_KHE_UOC_COT_TRUYEN_VA_COMBAT.md), [utility/capstone131](131_V2_CO_CHE_KY_NANG_VA_THIEN_PHU.md). PhầnV2 ở cuối hồ sơ thay các điểmV1 có xung đột; số/rule không thay giữ nguyên. Đây là thiết kế, chưa code/asset/QA.

# SKILL-12 — Preview hướng, diện tích và pha kỹ năng

**Ngày:**21/10/2026 · V1thiếtkế, chưa scene/camera/UI. Giữcameraortho2.5D/WASD/con trỏ/13ô. [Nguồn](105_NGHIEN_CUU_COMBAT_VA_19_NHANH.md).

## 1. Preview là hình học thật

| Mode | Biểu diễn | Xác nhận / lỗi |
|---|---|---|
| Directionsector |Mũihướng+sector/capsuleđúngrange/angle/skin|Clickconfirmchốtvector; điểm0giữhướngcũ; LoS/tườngcắtbiênkhảdụng|
| Groundfield |Vòng/polygon/radius+surfaceoutline|Outofrange/kháctầngkhôngclampâmthầm; giữpreview,báolýdo|
| Unit |Viềntarget+đườngnối/range|Mục tiêuđúngrelation/LoS/visibility; mấtđíchkhôngautoretarg|
| Dash |Dảiđường+đíchvalid+điểmchặn|Khôngvẽđếnđíchbênkiatường rồiđithậtngắn, cho thấyđườngsweephợplệ|
| Leap/Land |Đíchvòng+arcngắn/điểmbắtđầu|Đápđúngsurface, khôngnhảyqua tầng/vựcnếukhôngtraversalflag|
| Projectile |Tia/dảitầm từweaponsocket, radiusđầuđạn|Đúng3D/height/cover, khôngtênhìnhdài=hitboxdài|
| Aura/heal |Biênhưởngbuff+maskally|Khôngrevealngườikháckhôngđượcthấy; biênnhậnkhácglowngoạivi|

Chỉhiệncảnhbáođượcphépbiết/surfacecóliênquan; khôngxuyênsànvàkhôngrevealtrapẩn. Contactskin0,08Uđãgồmtrongbiênchức năng, khôngnớithêmclientlocal. Bossprofilepháthế cóglyphmục tiêuđúngwindow, khôngfakecast khiimmune.

## 2. Input và các pha

Bind→preview→tráiconfirm/phảiEsc hủy; confirmationclickkhôngđánhthường. Selfskillkhôngpreviewdiệnrộng nếu khôngcầnđích. Unitheal qua partyframecùngvalidation. Quickcastmặcđịnhtắt, nếumởsautheon96khôngđổihitbox/rate.

StatePreviewchưacost;Preparecócastbar/cost/CDtheo97;Releasecóđầuvũkhí/đạn;Traveltheopath;Impact/Fieldtừserver;Recoverykhônghitmiễnphí;Cancelcóendpose/loopdọn. Hấttung/stuninterrupt phảiđóngcastbarvàhìnhniệm, khôngchoanimationreleasecũnhảyra khi hếtstun.

WND-A xoaytheotuyếntrỏ, khônglockedtarget. WND-S niệm0,6s→nhảy0,4s→đáp→field: previewnhãnđíchđáp, range5U/r2,5U. FIR-Scast1s→meteorfall0,8s→impact→burn,biênP0phảithấykhiphađượcbáo, khôngnổtrướcđárơi. ARC-Ađầutênxuyên đirõ/đúngradius, khôngeffectcắtvìatlasarrowdài.

## 3. LOD và bố cục

MỗipreviewP0cóviền/texture/kýhiệu, khôngchỉmàuđỏxanh. Pheđịchcảnhbáonguyhiểm ưu tiên hơn swirlngoạitrang. BảnChức nănggiữđường/đích/thờigian, bớthạt/flash; giảmLODkhôngrestartaction hoặcđổihit. Camera/artchưaprototype: worldUđãchốtlogicnhưngđộdàyviền/textpixelcầntestscene, khôngtuyênbốchuẩn phối cảnhđãđo.

UIcapture/chatrayblocked khôngcastvàođấtbêndướicửasổ. Khi~đóngpanelgiữinputownerđếnreleaseđểkhôngattackclickthrough. Mấtfocus hủy preview/hold, khônghủypacketđãaccept.

## 4. Nghiệm thu sau

Ma trận4hướng+diagonal,root/stun,horsewing,giantboss,bridge/tường/cỏ/nướcsâu,raychọnsai tầng,networkcorrection. Overlaydebugpreview/collision phải khớp, VFXngoạivibounds khôngcắt; full/gọn/funccùngtiming. Chưavẽ/mockup/code/gameplaytest, ART-04/ROAD-02vẫnchờprototype.


## V2 — Preview cho biết điều người chơi cam kết

Preview V2bổsungđườngbẻcondutor, quạtche HGD, hànhlang PAL, vị tríreturn DKN, dảigấp ASN, vùngdờicủa WND/DRK/EAR. Cóglyph **Đã đặt mốc / Theo đường / Có thể chuyển / Pha2** ngaytrênslot liênquan, khôngmộtthanhchỉdẫnmớichecảnh.

Chọnphase2dùnglạibind/targetmode, khôngbắnđánhthườnghoặc Fkhichọnally/click UI. Vùnginvalidkhôngclampâmthầmqua sông/cầu; vị trídịchtừtargetmớiđượckiểmserver. Poolkhiên/HoTchuyểnhiệntrướcsốkhảdụng/expiry/đích, khônghứahealđíchmớitừsốmax HPcũ.

Tiêu chí: previewvàpacketkhớp131; niệm/nhảy/rơi/đáp/membershipđọcđượctrong3LOD; mấtfocus/DC/CC/timeoutkhôngđểphase2castlạc. Chưacósceneprototypeđãđo, khôngpass ART-04từmô tả.
