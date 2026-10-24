> **Đa dạng cây/nhà · 23/10/2026:** [Hồ sơ234](234_MAP_V01_NHA_TRAI_VA_DA_DANG_CAY_THU.md) · [Bốn loài cây](/design-preview/v01-p0-scene-r006/tree-library.html) · [Scene r006](/design-preview/v01-p0-scene-r006/index.html). Sồi/bạchdương/liễu/câyquả tách thân–tán, tán lay/giảm che, nhà3D có mái/gỗ. Chưa nativefinal/G1–G5; giữ525=128/14/383.

# Map 1 — Bờ nước và cầu đá thử

**23/10/2026 · Scene r005, nguồn vật liệu mới và mô-đun thử.** [Mở cảnh](/design-preview/v01-p0-scene-r005/index.html) · [Kiểm vật liệu lặp](/design-preview/v01-p0-scene-r005/material-preview.html) · [Nền232](232_MAP_V01_NEN_CO_DAT_VA_MEP_CHUYEN_THU.md).

## 1. Những phần đã dựng

Hai nguồn texture mới bằng image_gen: đá xây cầu và sỏi/trầm tích đáy suối. Đóng gói kỹ thuật thành draft32px, giữ nguồn1254×1254 và thông tin xuất. Áp đá lên mô-đun mặt cầu, dốc, lan can, cột mố và trụ; áp sỏi dưới nước cạn và một bãi tiếp cận ở Tây. Không cắt cầu từ concept toàn cảnh.

Mặt nước là shader riêng: cạn dùng đáy sỏi pha sắc xanh; sâu dùng màu xanh đậm, mảng gợn và đường sáng nhẹ sát biên. Có nút ngừng gợn hoặc tắt vật liệu mới để so khối. Gợn là hoạt ảnh trình bày theo thời gian render, không mô phỏng chất lỏng, dòng chảy/vật lý hoặc trạng thái môi trường server.

## 2. Bờ cạn, bờ sâu và điều kiện đi

| Thành phần | Hình đọc được trong mẫu | Logic giữ nguyên |
|---|---|---|
| Cạn phía Tây | Lòng sáng, sỏi thấy được, dải trầm tích và bãi xuống | Vùng0≤X<2 có hệ số0.8 trongfixture; bãi không là cổng/đường duy nhất |
| Sông sâu | Lòng đậm hơn, mép hẹp và cụm đá nhỏ | Vùng2–8 chặn ngoài mặt cầu; không mở bơi/nhảy đá |
| Bờ đối diện | Dải đất mép và đá nhỏ thấp | Không có buff/loot/collider mới theo từng viên |
| Cầu | Mặt đá và hai dốc, rail/mố/trụ tách thành phần | Ground–dốc–deck nối như modelcũ, rail chặn; không đường dưới cầu |

Các dải bờ còn là chi tiết thấp trên mặt fixture, chưa hạ lòng sông/địa hình vách thật hoặc bộ bankmesh có góc/nhánh. Những viên đá trang trí nhỏ không sinh vật cản ngầm. Không gọi các dải này là hệ bờ tự nhiên hoàn chỉnh.

## 3. Cầu và độ cao hình

Mẫu trước có deckbox đáy0.9 cao0.18, mặt trên1.08 trong khi surface đứng1.0. Bản này chỉnh **geometry mặt trên về1.0**, không đổi surface/range gameplay, để chân không bị hình deck che0.08đơn vị fixture. Hai dốc nối tới1.0, rail/cột cao hơn mặt đi và trụ bên dưới tách lớp không quyết walkable.

Texture đá cóUV mặt đỉnh và mặt đứng riêng theo hướng; không chiếu toàn bộ cạnh bằngtọa độX/Z khiến mặt đứng bị kéo thành vệt. Bản đầu mạch đá sau downsample còn nhỏ/nhiễu, scene pha40%texture với màu vật liệu dịu để kiểm silhouette. Cần vẽ/chỉnh lại mật độ mạch, cạnh góc và đoạn kết thúc trước production; tint không thay bước này.

Mố/trụ hiện chỉ là khối hộp có vật liệu, chưa vòm cầu mỹ thuật hoặc bộ mesh xây dựng cuối. Không thêm collider theo mọi cột trang trí khi các cột nằm ngoài phần đi đã bịrail giới hạn.

## 4. Quy chuẩn vật liệu và chuyển động

`tmp/build-water-material-drafts.cjs` xuất stone/pebbles32 bằng nearest-neighbor, alpha255 và ghi số đo mép. Sai khácRGB mépX/Y của đá khoảng20.42/26.80, sỏi13.95/11.17: cần kiểm lại mạch/nhịp lặp bằng mắt và nguồn; không đạt seamless chỉ nhờ wrapUV. Trang3×3 hiển thị rawdraft không tint trongscene.

Nước shader lấy tọa độ thế giới lượng hóa, nhịp gợn thử cập nhật4bậc/giây. Có tắt gợn để quan sát tĩnh; chưa khóa nhịp này làm chuẩn animation. Không particle/timer theo từng viên đá; sắc nước không tự đổi depth/collision/DoT. Vùngcạn củaMap1 vẫn chậm theo fixture cũ, không thêm băng/lava/mưa lũ.

Vật liệu kế thừa cỏ/đất232 và clip231, nhân vật vẫn bản resample/chưa pha đi chuẩn. Scene còn nhiều drawcall từngđồ; không benchmark hoặc kiến trúc rendererMMO được nghiệmthu.

## 5. Kiểm tra và giới hạn

[QA](/design-preview/v01-p0-scene-r005/qa.json) · [desktop](/design-preview/v01-p0-scene-r005/desktop.png) · [mobile](/design-preview/v01-p0-scene-r005/mobile.png).

Kiểm softwareWebGL: nạp hai vật liệu mới cùng nền/sprite, qua cầu từTây sangĐông bằngmodel, deck1.0, sôngsâu chặn, cạn vẫn0.8; keyboard/Idle/phase/vật cản kế thừa vẫn chạy; khôngGLerror/pageerror trong các ca;390pxkhôngtràn. Có xem screenshot và giảm tương phản đá sau lượtđầu. Kiểm nguồn vậtliệu tách với kiểm tínhđúng gameplay, không đo tốcđộ game từ screenshot.

Chưa có bộ bờ/góc/nhánh đầy đủ, test telegraph dưới mọi mặt nước, tint chân ngập theo độsâu, animation bước nước/âm thanh hoặc GPUthiếtbịthật. Bóngdốc/occlusion và pha chân vẫn hạn chế cũ. Chưa G1–G5đạt.

## 6. Bàn giao và thứ tự tiếp

`public/design-preview/v01-p0-scene-r005/` có scene, `stone-source__r001.png`, `pebbles-source__r001.png`, hai draft32, `water-material-manifest.json`, tranglặp, `provenance.json` vàprompt. Tạo bằng **image_gen tích hợp**, khôngCLI/APIkeyriêng; bản r004 giữ lại để so. Shader/gợn/bờ thấp là code trình bày của mẫu, không PNG do tool sinh.

- [x] Nguồn đá/sỏi mới, metadata và mảnglặp3×3.
- [x] Cạn/sâu phânbiệt, gợn tắt/bật và mô-đun cầu có vậtliệu.
- [x] Geometry deck khớp surface, kiểm qua cầu và nước.
- [ ] Dọn texture32, mạchđá vàUVgóc/đầumôđun; chưaartnativefinal.
- [ ] Vẽ/làm một cây tách gốc–thân–tán và một nhàtrại đúngstyle, trước khi rải cảmap.
- [ ] Ghép đoạnquầy–đường–trạm–cầu thành látcắt liềnmạch cóHUD13ô.
- [ ] Kiểm manual/camera/telegraph và thiếtbịthật, không nâng tổngtiếnđộ chỉ nhờ có ảnhmới.

Giữ525=128hoànthiện/14mộtphần/383chưathiếtkế; MAP/ARTvẫnpartial. Không sửa thủthành, database, class, damage/chỉsố, roster hoặc truyện ngoàiMap1.
