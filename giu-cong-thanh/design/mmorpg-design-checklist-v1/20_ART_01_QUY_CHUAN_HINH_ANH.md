> **CẬP NHẬT 2.5D · 21/10/2026:** [Hồ sơ 36](36_DINH_HUONG_2_5D_VA_RA_SOAT_MY_THUAT.md) thay các quy tắc 2D phẳng khi xung đột: môi trường khối 3D đơn giản/texture pixel, nhân vật sprite 2D, camera trực giao cố định; cao độ và bề mặt đi lại tách khỏi hình chiếu. V4 giữ làm chuẩn màu/chi tiết, chưa phải mẫu phối cảnh 2.5D đã kiểm chứng.

# ART-01 — Quy chuẩn hình ảnh pixel fantasy

> **PHONG CÁCH ĐÃ CHỐT — 20/10/2026:** Chủ dự án chọn mẫu V4 làm chuẩn thị giác cho bộ asset MMORPG mới. Xem [ảnh chuẩn V4](/design-preview/mmorpg-pixel-v4/styleboard-refined-v4.png). V1/V2/V3 chỉ là lịch sử so sánh.


**Phiên bản:** 2.3 · **Ngày:** 20/10/2026  
**Trạng thái:** Đã hoàn thiện thiết kế quy chuẩn ART-01; chưa vẽ bộ asset, dựng scene hoặc thay renderer.  
**Chịu trách nhiệm:** trợ lý thiết kế theo ủy quyền chủ dự án.  
**Đầu vào:** PROD-01…09, ROAD-01, phạm vi năm vùng/cấp 45 và yêu cầu bộ hình ảnh mới hoàn toàn. Không sửa phong cách hoặc gameplay thủ thành đang chạy trong lần bàn giao này.

## 1. Hướng mỹ thuật đã chọn

**Fantasy trung cổ pixel art chi tiết vừa: hình khối rõ, trang phục/vật liệu có điểm nhấn, nền thoáng và hiệu ứng tiết chế.** Giữ bối cảnh Ẩn Thành nhưng dùng ngôn ngữ hình ảnh mới, độc lập bộ asset đang có. Cảm giác phiêu lưu, sinh hoạt và bí ẩn đứng trước mức độ hoành tráng của từng effect.

- Môi trường ghép tile/chunk có cây, đá, kiến trúc và dấu sinh hoạt, không phải những vệt địa hình phóng lớn.
- Nhân vật và vũ khí đọc được từ hình tổng thể; không dùng chi tiết li ti thay silhouette.
- Combat có thứ bậc: tín hiệu nguy hiểm/đòn đang tác động rõ hơn trang trí nền và aura thường trực.
- Tranh cinematic/portrait có thể giàu chi tiết hơn gameplay, nhưng cùng vật liệu, trang phục, màu và nhận diện nhân vật.
- Không chọn hướng 3D giả chân thực, glow phủ cả sprite hoặc gradient mịn toàn cảnh làm chuẩn cho asset mới.

## 2. Bộ hình ảnh mới hoàn toàn — yêu cầu thay thế

Chủ dự án yêu cầu không dùng asset hiện có. Bản MMORPG dùng **100% hình ảnh sản xuất mới**: nhân vật, NPC, quái/boss, tile/props/công trình, icon, UI, portrait, VFX và cinematic. Không cắt, recolor, resize, trace hoặc đưa asset Craftpix/các gói hiện tại vào bản phát hành MMO. Không dùng ảnh cũ làm texture nền dưới lớp vẽ mới.

Có thể giữ tên/class/cốt truyện/quy tắc đã thiết kế; giữ code khi phù hợp không có nghĩa dùng lại hình. Asset mới của chính bộ MMO được phép dùng module/palette/animation layer chung trong nội bộ để bảo đảm tính nhất quán và chi phí hợp lý.

Hai ảnh từng xem ở V1 chỉ là lịch sử phân tích vì sao bộ cũ thiếu đồng bộ, không còn là mẫu chuẩn hay nguồn để vẽ lại. Chuẩn xuất phát từ các quyết định hiện hành và bộ mẫu mới.

Giữ nguyên thư mục hình/game thủ thành đang chạy; không xóa hoặc ghi đè trong công việc thiết kế. Chưa tự mở rộng yêu cầu thành thay tất cả asset thủ thành. Nhạc/SFX/font cần thiết kế danh mục/nguồn hợp lệ ở ART-09/UI; không tuyên bố hình ảnh mới là đã có nhạc/font tự sáng tác.

## 3. Phối cảnh và chiều sâu

Hướng hiện hành: **2.5D, sprite 2D trong môi trường khối 3D đơn giản**, camera trực giao xiên cố định theo hồ sơ 36. Lưới thế giới vuông không đồng nghĩa hình chiếu ô đất phải vuông trên màn hình.

- Mặt đất dùng lưới vuông, trục ngang/dọc; cao thấp thể hiện bằng mép vách, mặt tường, bóng và đường lên xuống.
- Không xoay camera 3D hoặc trộn phối cảnh isometric giữa các vùng.
- Điểm tiếp đất/bóng là nơi định vị nhân vật; đứng sau cây/tường thì bị che hợp lý theo chiều sâu chân, không theo đỉnh ảnh.
- Tường phía trước, mái và tán che người chơi có cơ chế mờ/cắt lớp khi cần, vẫn giữ hình vật cản và tín hiệu nguy hiểm.
- Chỗ đi được/không đi được có biên rõ. Địa hình cao không chỉ là bóng đen trang trí khiến người chơi đoán collision.
- Quái bay có bóng và khoảng cách khỏi mặt đất; hình bay không tự thay quy tắc trúng đòn.

Thứ tự lớp tham chiếu: nền → chi tiết nền/bóng → vật thể thấp/đơn vị theo chân → tiền cảnh/mái → VFX gameplay cần thấy → nhãn/HUD. Chi tiết depth/anchor chuẩn ở ART-04/COMBAT; không biến lớp VFX thành quyền đi xuyên vật cản.

## 4. Độ phân giải, mật độ pixel và scale

| Hạng mục | Quyết định |
|---|---|
| Khung bố cục gameplay tham chiếu | 960×540 đơn vị hình ảnh logic, tỉ lệ 16:9. Không phải kích thước map hoặc hình render bắt buộc của mọi thiết bị. |
| Màn hình trình bày tham chiếu | 1920×1080, scale 2× so với khung logic. |
| Bố cục nhỏ bắt buộc có phương án | 1366×768 theo PROD-02, HUD thu gọn và chữ vẫn đọc được. |
| Grid mỹ thuật để bắt đầu thiết kế mới | Module 32×32 pixel; grid collision/chia chunk là quyết định riêng. ART-04 sẽ quy định cắt atlas và mép nối. |
| Khối nhân vật mẫu để kiểm tỷ lệ | Thân đứng khoảng 40 pixel cao ở mật độ tham chiếu, chưa tính vũ khí/aura. ART-02 quyết định dải theo race/class, không ép mọi frame vào 48×48. |
| Cách lọc ảnh | Nearest-neighbor với tile/sprite pixel; không blur/bilinear vô tình làm mờ nét. |
| Mật độ nguồn | Asset mới phải khai báo độ phân giải tác giả và kích thước hiển thị; texture lớn không tự được xem là đẹp hơn. |

Ưu tiên phóng nguyên lần khi kích thước cho phép; ở 1080p có mốc 2×. Với màn nhỏ/viewport không khớp, dùng khung 16:9 co vừa và nearest-neighbor; thừa nhận scale phân số có thể làm độ rộng pixel không đều. Chế độ pixel-perfect tùy chọn dùng scale nguyên và viền ngoài, không hứa mọi kích thước vừa full màn vừa pixel-perfect.

HUD/chữ là lớp độ phân giải màn hình riêng, không raster toàn bộ chữ vào khung thấp rồi kéo lớn. Không bắt dùng font pixel nếu dấu tiếng Việt khó đọc. Mobile không thuộc bàn giao bản đầu.

960×540 là mốc trình bày; vị trí server, tốc độ, range và hitbox dùng đơn vị thế giới do COMBAT/MAP định nghĩa. Không lấy resolution/zoom của client làm range combat.

## 5. Camera và zoom

- Camera theo nhân vật, ưu tiên thấy hướng di chuyển và vùng nguy hiểm; không rung liên tục hoặc giật khi chuyển idle/attack.
- Gameplay dùng mốc zoom 1× ở khung logic tham chiếu. Chưa mở zoom-out tùy ý trong bản đầu để tránh thay đổi mạnh mức độ đọc và lợi thế quan sát.
- Có tăng cỡ UI/chữ độc lập; không phải kéo camera lại gần để đọc tooltip.
- Cinematic/preview có thể zoom theo cảnh rồi trả về mốc gameplay; không thay hitbox, tầm phát hiện hoặc quyền đánh.
- Cảnh boss phải thiết kế sân và báo đòn đọc được ở camera chuẩn; nếu cần camera kịch bản riêng phải có hồ sơ PVE/BOSS, không tự nới zoom vì sprite lớn.
- Màn siêu rộng dùng cùng vùng gameplay tham chiếu và khoảng nền/khung bổ sung; không tự cho thêm tầm nhìn chiến đấu ngang. Không đặt thông tin thiết yếu vào góc không xuất hiện ở16:9.
- Rung màn hình mặc định nhẹ và giảm/tắt được; camera không quyết định thời điểm damage.

Chi tiết độ trễ follow, look-ahead và thời gian rung là tham số triển khai sau đánh giá bản mẫu. Không đặt con số giả ở hồ sơ phong cách.

## 6. Quy tắc nét, vật liệu và độ chi tiết

- Tạo mảng lớn trước: silhouette → vùng sáng/tối → vật liệu → chi tiết. Mỗi vật liệu dùng ramp 3–4 mức chính, không bắt mọi vật thể đủ đúng số màu.
- Viền có chọn lọc bằng màu tối cùng tông; tránh viền đen dày bao mọi tile thành những ô rời.
- Không thêm noise đều khắp mặt đất. Đường đi và vùng combat để texture nhẹ hơn cụm cảnh vật.
- Kim loại có điểm lóe nhỏ, vải có nếp lớn, gỗ theo thớ có tiết chế, đá có mặt khối và vết nứt có chủ đích.
- Tile có biến thể/transition và cụm props; giảm lộ pattern nhưng không thay bằng ảnh nền lớn phóng căng.
- Nhân vật mới không copy chi tiết từ ảnh minh họa độ phân giải cao rồi thu nhỏ đến mất vũ khí/mặt. Có thể dùng làm reference nhưng cần pixel cleanup có chủ đích.
- Giữ dung sai hướng nhìn, phối cảnh vật liệu và màu giữa các bộ; alpha không có nền trắng/đen hoặc halo màu không mong muốn.

Không coi xóa toàn bộ effect là cách làm sprite phù hợp. Tách lớp thân/vũ khí, điểm sáng và trạng thái trước khi quyết định asset cần sửa hay vẽ mới.

## 7. Bảng màu nền chung

Đây là palette khởi điểm có vai trò cụ thể, không giới hạn toàn game đúng từng mã hex. ART-05 sẽ thiết kế đầy đủ màu thông tin với ký hiệu thay thế.

| Nhóm | Tối | Trung gian | Sáng | Công dụng |
|---|---|---|---|---|
| Rừng/cỏ | #263D2C | #526B3D | #91A35B | Nền thiên nhiên, ưu tiên giảm bão hòa ở vùng giao chiến. |
| Đất/gỗ | #4A3428 | #886345 | #C19B68 | Đường mòn, nhà, đồ dùng và dấu sinh hoạt. |
| Đá/tường | #383D49 | #747B85 | #B7BBAE | Kiến trúc, địa hình cao/thấp, vật thể giữ hình khối. |
| Nước | #203B52 | #3E7383 | #84B3B1 | Độ sâu bằng giá trị sáng/tối + bờ/đá/lối qua, không chỉ đổi màu. |
| Tuyết/băng | #587B91 | #A6CDD5 | #E0E9DC | Băng/tuyết đủ phân biệt viền, không phủ trắng mất đòn. |
| Lửa/ánh đèn | #914632 | #D4813F | #F0CB78 | Điểm ấm, chuyển động và dẫn chú ý. |
| Cộng hưởng/phong ấn | #4E3E69 | #8A73AD | #C9B9D8 | Bí ẩn di vật/ấn, dùng như điểm nhấn thay vì nhuộm cả map. |
| UI cơ sở | #14231B | #344B36 | #DCC993 | Nền xanh tối/viền vàng dịu; chữ chính #EEE9D8. |

Các mã trên là lựa chọn thiết kế, chưa đo độ tương phản ở UI thật. SCREEN/UI phải chọn cặp chữ/nền đọc được, có thể điều chỉnh ramp mà không đổi vai trò. Ngoại hình nguyên tố không thay màu báo nguy hiểm một cách mâu thuẫn.

## 8. Hướng màu và không khí năm vùng

| Vùng | Không khí và màu nền | Điểm nhấn | Cảnh vật có ý nghĩa |
|---|---|---|---|
| V01 Bình Minh/Ẩn Thành | Xanh cỏ dịu, gỗ/đất ấm, đá cũ. | Đèn vàng và tím phong ấn có tiết chế. | Nhà, ruộng, suối, kho cứu trợ, vết biến cố; nơi trú có dấu người sống. |
| V02 Valedorn/hạ lưu | Đồng ruộng vàng nhạt, bờ nước xanh xám, đường thương mại đất nâu. | Vải/cờ và đèn bến. | Xe hàng, cầu, bến, dấu đứt tuyến tiếp tế. |
| V03 Sylvaris/Aurelia | Rừng xanh sâu và mảng đá/ánh sáng ấm của khu hành hương. | Rễ cổ, ký hiệu và đèn lễ. | Không trộn hai địa lý thành một texture: dùng tiểu vùng và đoạn chuyển rõ. |
| V04 Nocthollow/Astravelle | Đầm xanh lạnh, tím xám, cao địa đá rõ hình. | Đèn cư dân và thiết bị cộng hưởng. | Phân biệt khu Bất Tử Giả sinh sống với nơi bị tha hóa; không nhuộm mọi cư dân như quái. |
| V05 Tiền tuyến ấn cổ | Đất khô, đá sẫm, ánh trời gắt vừa đủ. | Vết ấn/vật chứng phát sáng chọn lọc. | Trạm kiểm, đường tiếp tế, công trình phòng hộ và di tích, không chỉ sa mạc trống. |

Mỗi vùng có thiên nhiên, công trình, sinh vật và dấu vết truyện. Quy mô3×/4× là thêm không gian ghép và nội dung, không scale một bộ môi trường. Ngày/đêm/thời tiết có lớp màu nhưng không thay tất cả silhouette và báo đòn; chu kỳ gameplay thiết kế tại ENV.

## 9. Ánh sáng, bóng và khí quyển

Nguồn sáng môi trường quy ước từ **trên-trái màn hình** cho asset mặc định; bóng tiếp đất ngắn, mềm có kiểm soát, giúp thấy chân/vật cản. Thắp sáng cục bộ bởi đèn/phép có thể đổi hướng điểm sáng nhưng không làm toàn bộ vật liệu đảo sáng liên tục.

- Ngoài trời: ánh sáng đủ đọc, bóng tán/kiến trúc tạo chiều sâu chứ không che đường đi.
- Hầm: nền tối hơn ngoài trời nhưng đường, biên vật cản, nhân vật và báo đòn vẫn rõ khi không bật đèn trả phí.
- Lửa/dung nham sáng cục bộ; không dùng bloom toàn cảnh làm mất viền hoặc nhầm môi trường với sát thương đang kích hoạt.
- Sương/mưa/lá bụi chạy lớp trang trí có thể giảm; không tạo tường alpha đục che boss hoặc vật phẩm tương tác.
- Đề xuất hiệu ứng sáng nhẹ, không mặc định bắt buộc dynamic-light hoặc shader tốn GPU. Lớp cơ bản và lớp giảm hiệu ứng phải giữ cùng thông tin.

Không flash trắng toàn màn hình liên tục. Dấu niệm, đường đạn, impact và trạng thái không được thay bằng một quầng sáng lớn; quy mô VFX chi tiết tiếp ở ART-06/ASSET.

## 10. Quy tắc ưu tiên thị giác

Thứ tự quan trọng: nguy hiểm đang tác động/đang báo → nhân vật và hành động chính → đối tượng tương tác/mục tiêu → đồng đội/quái khác → trang trí nền/aura.

Trạng thái chủ chốt phải có hình dạng/biểu tượng/thời gian bên cạnh màu. Palette thông tin cụ thể chưa hoàn thiện tại đây; ART-05 chịu trách nhiệm. Không gọi nền đỏ/cam luôn là nguy hiểm nếu vật thể chỉ là đèn, phải có biểu đạt khác cho vùng damage.

VFX phép phù hợp class nhưng không vượt khung scene hoặc bị cắt theo ô ảnh giả. Giảm effect của người khác không làm mất telegraph boss, vị trí nguy hiểm hoặc tín hiệu hỗ trợ cần thiết. Không dùng ngoại trang trả phí để ẩn thân trong nền hay che đòn.

## 11. Quy trình sản xuất mới

1. Lập phiếu mới có ID, kích thước/pixel density, vai trò, hướng/frame và quyền nguồn; không chỉ sửa đường dẫn file cũ.
2. Dựng silhouette và block màu gốc tại mật độ pixel mục tiêu. Có thể dùng ảnh tạo mới làm concept, nhưng concept không được tính thành sprite gameplay hoàn chỉnh.
3. Làm pixel cleanup và chuẩn hóa màu/alpha; không chấp nhận ảnh minh họa chỉ gắn bộ lọc pixel. Không xuất nhiều mức mật độ chi tiết khác nhau rồi ép scale để che lệch.
4. Vẽ animation/anchor đúng nhân vật mới, tách thân/vũ khí/VFX; không ghép thân mới với tay hoặc động tác ảnh cũ.
5. Làm module tile/biến thể/cạnh nối và bộ icon/UI đồng bộ; nguồn nội bộ mới dùng chung được quản version.
6. Đánh giá các trạng thái ở camera tham chiếu trước khi nhân rộng; sản xuất hoàn chỉnh phải có hình thực, file nguồn và tiêu chí giao nhận.

Dùng thư mục sản xuất MMO riêng có manifest nguồn mới, không tham chiếu public/assets hiện tại. Chưa tạo manifest runtime hoặc đổi code ở bước thiết kế. Không tính bộ cũ như tiết kiệm ngân sách đã có sẵn; kế hoạch lịch/chi phí phải ước lượng lại từ bộ mẫu mới.

## 12. Gói bàn giao cho các mục kế tiếp

| Task | Nhận đầu vào gì | Phần phải thiết kế tiếp |
|---|---|---|
| ART-02 | Top-down, module 32, body mẫu 40 và camera chuẩn. | Ma trận người/race/NPC/quái/boss/cây/nhà, dạng cưỡi/biến hình và khoảng che. |
| ART-03 | Mảng hình rõ, class/vũ khí đọc trước chi tiết. | Silhouette từng class và vai trò trong kích thước gameplay. |
| ART-04 | Grid vuông, pixel density thống nhất, phân biệt canvas/thân/VFX. | Hướng/frame/anchor, tile seams, atlas/padding, bóng/điểm bám. |
| ART-05/06 | Palette nền, phân tầng thông tin và ánh sáng tiết chế. | Màu/ký hiệu trạng thái, cấp chi tiết và giới hạn trang trí. |
| UI/SCREEN | 1080p và bố cục nhỏ 1366, chữ lớp riêng, cỡ UI độc lập camera. | Wireframe, typography/contrast, thao tác và lỗi. |
| MAP/ENV | Năm vùng có ramp/địa hình/khí quyển nhất quán. | Topology, mật độ, tilemap, vật cản và nơi sinh vật xuất hiện. |
| ASSET/OPS | Có quy trình sản xuất mới và lớp giảm hiệu ứng. | Kiểm kê, khối lượng thực tế, pipeline và đánh giá hiệu năng. |

Mốc body 40 là vật mẫu để bắt đầu ART-02, không thay toàn bộ ma trận tỷ lệ. Những task trên chưa được tick xong vì có quy chuẩn nền.

## 13. Tiêu chí hoàn thiện và giới hạn

Đã quyết định phong cách, phối cảnh, đơn vị hình ảnh tham chiếu, scale/zoom, palette, hướng sáng, mood năm vùng, ưu tiên thị giác và đường xử lý asset. Các quy tắc có lý do và task nhận đầu vào.

Chưa vẽ bitmap, bản đồ, portrait, icon hoặc scene; chưa đổi code game/camera; chưa chạy game, đo FPS hoặc xác minh contrast hiển thị. Hai ảnh được quan sát chỉ là tham chiếu có giới hạn. Chuẩn pixel-perfect/phân số và hiệu ứng nhẹ cần kiểm chứng khi có mẫu render, không được quảng bá đã đạt.

**ART-01 hoàn thiện thiết kế. Tiếp theo: ART-02 — Ma trận tỷ lệ nhân vật, quái, boss và cảnh vật.**

| Ngày | Phiên bản | Thay đổi |
|---|---|---|
| 20/10/2026 | 1.0 | Chọn pixel fantasy top-down, khung 960×540/1080p, module 32, camera/scale/palette/ánh sáng và tiêu chí asset. |

## Thay đổi V2 · 20/10/2026

Yêu cầu trực tiếp: bộ hình ảnh mới hoàn toàn, không tái sử dụng asset hiện có. Mọi hướng tận dụng/chỉnh sửa asset cũ ở V1 bị thay thế. Kích thước, camera/palette hiện hành được giữ và làm rõ thêm trong ART-02. Chưa có bộ asset gameplay hoàn chỉnh; ảnh concept nếu có chỉ là định hướng.

## Lịch sử hướng tối giản V2.1 — đã thay bởi V2.2

Theo phản hồi chủ dự án, ảnh mẫu V1 quá cầu kỳ và không còn là đích sản xuất. Chốt **simple pixel RPG**: nhân vật chuẩn 32px cao, khoảng 2,5 đầu; khoảng 16–20 màu nhận diện chung trong một bộ mẫu vùng, mỗi vật liệu 2–3 sắc; không cỏ vụn/noise/dither hoặc chi tiết giả thực. Bảng palette cũ là thư viện màu chọn lọc, không yêu cầu dùng đủ mọi ramp trong một scene.

Nhà dùng mảng mái đơn giản, không vẽ từng viên ngói; cây là một khối tán2–3mảng, không tả từng lá; đá2–3mặt; nước mảng phẳng với nhịp gợn đơn giản. Dấu sinh hoạt và manh mối vẫn có nhưng đặt thành cụm có ý nghĩa, không rải kín nền. Một căn nhà/tán cây không nên có nhiều chi tiết hơn nhân vật cần đọc.

Giữ top-down, grid32px, bốn hướng và khung 960×540/1080p2×; không tự thay resolutiongame vì ảnh minh họa dùng lưới pixel lớn. VFX ngắn và hình học rõ, không bloom/khói mịn phủ actor; vẫn giữ báo trước/impact/trạng thái có ý nghĩa.

Chi tiết tỷ lệ hiện hành theo ART-02 V1.1; bảng kích thước V1 trước đó đã giảm tương ứng. Bộ ảnh mới hoàn toàn vẫn là ràng buộc. Không đổi số vùng/NPC hoặc giảm nội dung truyện chỉ vì đơn giản hóa nét vẽ.

## Hướng trung gian V3 · V2.2 · 20/10/2026

Chủ dự án thấy mẫuV2 quá đơn giản. Hướng hiện hành là **pixel fantasy chi tiết vừa**, nằm giữaV1 quá cầu kỳ vàV2 quá phẳng. Phần quy tắc tối giản cực độ ở mụcV2.1 trước được thay thế khi xung đột với đoạn này.

- Thân nhân vật tham chiếu40px, khoảng3đầu; vừa đủ đọc giáp vai, thắt lưng, giày, túi/tên/vũ khí mà không vẽ hoa văn li ti.
- Mỗi vật liệu3–4sắc chính, palette một bộscene khoảng24–32màu mục tiêu, không phải ràng buộc đếm màu tuyệt đối trong ảnhconcept.
- Cây có3–4cụm lá lớn, thân/cành chính đọc được. Nhà có khung gỗ, cửa/sổ và vài dải mái, không từng viên ngói. Đá có mặt khối; bờ suối thêm ít sỏi và cụm cỏ có chủ đích.
- Giữ mặt đường thoáng, không rải noise/dither toàn nền. Ánh sáng trên-trái, bóng chân gọn, không bloom/gradient ảnh thực.
- Pixel vẫn là cụm có cạnh bậc rõ, không dùng blur/ảnh vẽ mịn rồi áp filter như asset cuối.
- Giữ grid32,4hướng, khung960×540/1080p2×. Bề rộng đường và quy mô5vùng không đổi theo mức chi tiết.

V3 là phương án điều chỉnh theo phản hồi, không tuyên bố chủ dự án đã duyệt hình vừa tạo. BảnV1/V2 giữ làm lịch sử, không dùng đồng thời ba chuẩn trong sản xuất. Chi tiết tỷ lệ cập nhật ART-02V1.2. Không tạo lại asset game hàng loạt trước khi thống nhất mẫu này.

## Tinh chỉnh V4 · 20/10/2026

Theo yêu cầu tăng thêm một chút so vớiV3, chọn tăng mật độ chi tiết vừa phải, mục tiêu thị giác khoảng15–20%, không phải chỉ số đo tự động. Giữ body40px/khoảng3đầu, grid32,4hướng, khung960×540, phối cảnh và vùng nền thoáng.

Thêm vài lớp tán/cành chính; sống mái, cửa ghép ván và bậu cửa; dấu cũ nhỏ trên cầu; gợn nước theo cụm. Nhân vật thêm khớp giáp, nếp áo choàng, túi đai và chi tiết cán vũ khí. Mỗi vật liệu khoảng4sắc chính, sắc thứ5 chỉ dùng chọn lọc cho điểm nhấn, không bắt mọi vật có5mức. Không thêm hoa văn li ti, bloom, sương dày hoặc texture kín mặt đất.

V4 là một bước nhỏ từV3, không quay lại ảnhV1 cầu kỳ. Chưa ghi mẫu đã được người dùng duyệt; ảnh vẫn là concept, không chứng minh grid/frame/palette sản xuất đã đạt. Không tăng quy mô nội dung hoặc số task hoàn thành do chỉnh mẫu.

## Ghi nhận chốt phong cách V4 · 20/10/2026

Chủ dự án xác nhận “Ok phong cách v đi”. V4 trở thành mẫu thị giác chính thức; các ghi chú trước nói V4 chưa được duyệt chỉ phản ánh thời điểm tạo mẫu và được thay thế về trạng thái bởi ghi nhận này.

Giữ pixel fantasy chi tiết vừa, body tham chiếu40px/khoảng3đầu, grid32px,4hướng, vật liệu khoảng4sắc chính/điểm nhấn thứ5 có chọn lọc, cảnh vật có cấu trúc và nền combat đủ thoáng. Màu/độ chi tiết/hình khối lấyV4 làm mốc; kích thước/frame/anchor/palette xuất thực tế phải theo hồ sơ kỹ thuật, không tự suy ra mọi thông số từ ảnh.

Tất cả hình sản xuất mới, không dùng lại bộ asset game cũ. Được dùng chung module/layer trong chính bộ mới. Không tự tăng độ cầu kỳ hoặc quay về mẫu phẳngV2 giữa các class/vùng. Chốt phong cách không đồng nghĩa ảnhconcept đã là tileset/sprite sheet/animation hoàn chỉnh.

Tiếp theo theo checklist là ART-03 — silhouette class/vũ khí/vai trò, sử dụng mẫuV4 đã chốt. Không tạo thêm task hoàn thành chỉ từ một lần duyệt phong cách.


**Trạng thái sau đổi định hướng:** Thiết kế một phần; các phần phối cảnh, tỷ lệ chiếu/depth và cao độ được thay bởi hồ sơ 36, còn cần mẫu xác nhận trước sản xuất hàng loạt. Nội dung đánh dấu hoàn thiện trước đây là trạng thái lịch sử.
