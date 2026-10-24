> **CẬP NHẬT 2.5D · 21/10/2026:** [Hồ sơ 36](36_DINH_HUONG_2_5D_VA_RA_SOAT_MY_THUAT.md) thay các quy tắc 2D phẳng khi xung đột: môi trường khối 3D đơn giản/texture pixel, nhân vật sprite 2D, camera trực giao cố định; cao độ và bề mặt đi lại tách khỏi hình chiếu. V4 giữ làm chuẩn màu/chi tiết, chưa phải mẫu phối cảnh 2.5D đã kiểm chứng.

# ART-02 — Tỷ lệ bộ asset pixel mới

> **THAY ĐỔI HỆ NHÂN VẬT — 20/10/2026:** [Khung chủng tộc/nghề/trang bị mới](28_HE_CHUNG_TOC_CHUC_NGHIEP_TRANG_BI.md) thay mô tả cũ khi xung đột: tạo Con Người/Elf/Người Lùn, cấp 15 chọn nghề, cấp 30 chọn nhánh theo race. Trang bị/vũ khí kiểm quyền nghề/nhánh; hình riêng không đổi chỉ số món. Không còn chọn ba class cố định lúc tạo hoặc quy tắc mọi race chọn mọi nhánh.


> **PHONG CÁCH ĐÃ CHỐT — 20/10/2026:** Chủ dự án chọn mẫu V4 làm chuẩn thị giác cho bộ asset MMORPG mới. Xem [ảnh chuẩn V4](/design-preview/mmorpg-pixel-v4/styleboard-refined-v4.png). V1/V2/V3 chỉ là lịch sử so sánh.


**Phiên bản:** 1.3 · **Ngày:** 20/10/2026  
**Trạng thái:** Đã hoàn thiện thiết kế tỷ lệ và ma trận tham chiếu, chưa sản xuất đầy đủ sprite/animation.  
**Thẩm quyền:** yêu cầu hình mới của chủ dự án; trợ lý tự chốt thông số tương thích theo ủy quyền.  
**Đầu vào:** ART-01 V2.3, năm vùng/cap 45, ngân sách nội dung PROD-06 V2.

## 1. Quyết định nền

Bộ MMO sản xuất mới hoàn toàn theo hướng 2.5D của hồ sơ 36, module texture 32px, khung gameplay logic 960×540, trình bày 1080p ở 2×. Chọn pixel cluster rõ, không anti-alias viền sprite, không gradient mịn hay chi tiết ảnh thực thu nhỏ. Không trộn góc chiếu giữa các vùng hoặc pha người cách điệu với người tỷ lệ hiện thực. Góc chiếu chính xác cần mẫu 2.5D.

Thân người chuẩn **40px cao**, khoảng 3 đầu: đầu 12–14px, thân/tay/chân thành mảng dễ đọc. Chọn tỷ lệ phiêu lưu hơi cách điệu, không đầu bằng nửa cơ thể hoặc người 7–8 đầu. Các race khác thay silhouette/tư thế trong dải tỷ lệ cho phép, không khóa race với class.

Px trong hồ sơ là pixel tác giả trước phóng, không phải pixel màn hình hoặc đơn vị chiến đấu. Tile 32 là module vẽ, không tự quyết hitbox/navigation 32 đơn vị. ART-04 sẽ quy định atlas/anchor/collision metadata.

## 2. Ma trận nhân vật và sinh vật — chi tiết vừa

Kích thước thân là bounds hình trung tính, không gồm vũ khí/aura. Canvas để dư chuyển động, không phải hitbox. Ưu tiên mảng đầu/thân/vũ khí rõ; không trang trí vụn để bù chi tiết đã bỏ.

| Nhóm | Thân W×H pixel | Canvas dự kiến | Quy tắc |
|---|---|---|---|
| Người chuẩn/NPC | 22–28×40 | 96×96 | Khoảng 3 đầu; thấy giáp vai, thắt lưng/giày và vũ khí, không hoa văn nhỏ. |
| Race nhỏ | 20–26×30–34 | 64×64 hoặc 96×96 | Vẽ tỷ lệ riêng, không scale người xuống. |
| Race cao/trọng giáp | 26–34×42–46 | 96×96 | Khác silhouette, không thêm hàng chục nẹp/hoa văn. |
| Quái nhỏ | 12–20×12–20 | 32×32 hoặc 64×64 | Một khối chính và 1–2 đặc điểm. |
| Quái vừa | 28–48×28–44 | 96×96 | Đọc loài và hướng từ xa. |
| Quái lớn/tinh anh | 40–64×40–56 | 96×96 | Dấu đặc trưng/pose, không cần texture phức tạp. |
| Boss thường | 80–112×80–104 | 160×160 | Khoảng 2–2,6 người cao; mảng lớn, động tác rõ. |
| Boss khổng lồ | 96–128×96–128 | 192×192 hoặc tách bộ phận | Chỉ dùng khi cần, sân/camera có giải pháp. |
| Dạng cưỡi | 48–64×48–64 | 96×96 hoặc 128×128 | Tách điểm chân thú/người/vũ khí. |
| Pet | 12–24×12–24 | 32×32 hoặc 64×64 | Không nhầm đồ rơi; không che người. |

Phân vai race/class cụ thể còn ở CHAR/SKILL. Canvas có thể tăng khi pose cực trị cần, không crop effect để ép ô. Metadata chính xác ở ART-04, không tự tính pixel ở bảng thành range/collision.

## 3. Hướng nhìn, vũ khí và trạng thái

Chốt mục tiêu **4 hướng** cho nhân vật/NPC chiến đấu chính: trước, sau, trái, phải. Di chuyển tám hướng dùng hướng hình gần nhất và chuyển ổn định, không mặc định8 bộ sprite. Boss/quái có số hướng phù hợp hình thể ở BOSS/ASSET, nhưng không đổi hướng effect sai với đòn.

Có thể dùng đối xứng có kiểm soát cho body đơn giản; không flip cả hình nếu khiên/tay kiếm/dấu nhân vật đổi bên sai. Điểm bám vũ khí và lớp tay phải có hướng riêng trong metadata.

- Một tay: chiều dài hình16–24px; trọng kiếm/hai tay24–36px; cung24–32px; staff28–36px. Đây là kích thước hình, không phải range combat.
- Đòn đánh/cast có silhouette khác nhau; vũ khí sáng dùng overlay pixel đúng mũi/viền, không trùm glow toàn thân.
- Biến hình giữ màu nhận diện và motif class; hình lớn hơn cần pose riêng, không nhânscale sprite đi bộ.
- Trạng thái hurt/death phải có silhouette rõ và không để frame trống. Số frame/FPS/attack timing ở ART-04/COMBAT, không quyết bằng tốc độ hình tùy ý.
- Quái bay: bóng mặt đất định vị, body có độ cao hình ban đầu 12–24px theo loài; độ cao không tự cho miễn đòn.

## 4. Cảnh vật mới chi tiết vừa

| Hạng mục | Kích thước hình tham chiếu | Giới hạn chi tiết |
|---|---|---|
| Tile nền | 32×32 | Mảng phẳng, vài biến thể nhẹ; đường đi ít noise. |
| Cỏ/hoa | 4–12px, theo cụm | Không phủ mọi tile hoặc tả từng lá. |
| Bụi/đá | 16–40px | 2–3 mảng sáng/tối, silhouette rõ. |
| Cây thường | 48–96px cao,40–64px rộng | 3–4 cụm lá lớn, thân/cành chính và điểm chân rõ. |
| Cây cổ thụ | 128–192px cao | Landmark hiếm; không tăng texture theo diện tích. |
| Rương | 20–24px rộng,16–20px cao | Mảng nắp/thân/khóa, trạng thái đóng/mở. |
| Cửa người | Lòng mở tối thiểu32px rộng,48px cao | Đọc được là cửa, lối đi cân lại theo collision. |
| Nhà nhỏ | 96–160px rộng,80–128px cao | Mái có vài dải rõ, khung gỗ/cửa/sổ; không từng viên ngói. |
| Nhà dịch vụ | 160–224px rộng,128–192px cao | Khác hình tổng và biển nghề, không phủ hoa văn. |
| Cổng/tường | Module32px, lối chính64–96px | Trụ/chân/đỉnh nối đúng, ít đường gạch nhỏ. |
| Núi/vách | Module32px, mặt vách32–64px | Các mảng lớn và đường lên xuống, không ảnh nền scale. |

Giữ mật độ người/nhà/cây nhất quán. Grid32px không bắt mọi vật thể rộng đúng32px. Thể hiện vật liệu bằng hình và màu thay vì texture dày.

## 5. Không gian đi lại và sân combat

Chọn bề rộng hình để MAP dựa vào khi phác, không mặc định tương ứng1:1 đơn vị server:

- Lối phụ tối thiểu 2 tile =64px khi cần cho nhân vật chính đi rõ; ngõ cảnh không đi được thể hiện khác.
- Đường chính 4–6 tile =128–192px, có chỗ né/quay và cụm cảnh vật ven đường.
- Cầu chính 3–4 tile rộng, có lan can/biên, không dùng ảnh nước dưới cầu như vật cản.
- Khoảng trống boss tham chiếu 16×10 tile =512×320px; boss khổng lồ có thể cần 24×14 tile. Mỗi boss vẫn phải đối chiếu telegraph/camera thực, không sao chép sân cho mọi loài.
- Sân nhỏ hơn vùng nhìn logic 960×540 giúp thấy báo đòn ở camera chuẩn; địa hình/tiền cảnh không làm mất đường né.
- Thú cưỡi lớn chỉ đi tuyến được thiết kế hoặc xuống thú có giải thích; không bóp sprite để lọt cửa nhỏ.

Những thông số này là hướng bố cục nghệ thuật. COMBAT/MAP phải chốt body collision, tầm và cỡ party trước khi đóng navigation. Không tăng hitbox chỉ vì muốn boss trông lớn.

## 6. Pixel, màu và chất liệu

Giữ palette/ramp ART-01; mỗi vật liệu 3–4 mức chính, viền tối cùng tông có chọn lọc. Pixel tạo cụm, không rải hạt noise làm chi tiết giả. Ảnh mới nguồn lớn cần cleanup/tái dựng ở độ phân giải mục tiêu, không downsample rồi coi đã đạt pixel art.

Không dùng dither/noise trong bộ cơ bản; không blur hoặc anti-alias cạnh sprite. VFX có thể dùng alpha theo bước, nhưng không quầng glow mịn che toàn actor. Icon/portrait giữ cùng motif/trang phục với model, không lấy ảnh riêng hoàn toàn khác ngoại hình.

Asset mới trong cùng bộ được phép dùng base body/rig/frame/module mới dùng chung. Phải có biến thể silhouette/đồ nghề; 82 NPC không nhất thiết 82 bộ khung hoàn toàn khác, nhưng cũng không chỉ đổi tên cùng một hình.

## 7. Tổ chức sản xuất từ đầu

Đây là danh mục lô, không tạo checkbox trùng hoặc tuyên bố đã sản xuất:

| Lô | Thành phần mới | Mục tiêu |
|---|---|---|
| P0 — chuẩn phong cách | Một scene làng/đường/suối, ba silhouette vai trò, một quái nhỏ/vừa/lớn, cây/đá/rương và mẫu UI. | Chốt pixel density, scale và nhận diện trước số lượng. |
| P1 — bộ nhân vật mẫu | Một body mới đầy đủ 4 hướng/hành động, vũ khí/overlay và một portrait/icon cùng nhận diện. | Chứng minh pipeline animate/layer/anchor. |
| P2 — vùng tân thủ | Bộ tile/props V01, NPC/quái/dungeon/boss theo ngân sách. | Hoàn thiện lát cắt alpha, không dùng hình cũ làm placeholder phát hành. |
| P3 — mở rộng 5 vùng | Bộ môi trường/hình thể mới dùng chung module nội bộ, biến thể vùng, dungeon/boss và cinematic. | Đạt quy mô 45 cấp mà không mất đồng bộ. |

Thư mục đích sau này là bộ MMO độc lập, có file nguồn/master và bản export; game thủ thành cũ không bị xóa. Manifest mỗi asset ghi nguồn mới, revision, người tạo/công cụ, thông số xuất và quyền sử dụng. Chưa tự tạo file sprite rỗng để đủ số.

Ảnh AI nếu dùng làm concept cần ghi là concept; trước gameplay phải có cleanup, découpage chính xác, động tác/frame/anchor và alpha đạt chuẩn. Không coi một tấm styleboard là tileset ghép được hoặc animation đã hoàn tất.

## 8. Điều chỉnh ngân sách và cổng bàn giao

Quy mô nội dung giữ: 5 vùng/82 NPC/30 archetype/16 tinh anh/5 boss vùng/tối đa 15 boss dungeon theo PROD-06. Thay **cách sản xuất** thành mới toàn bộ; không lấy bộ cũ giảm số ngày/cost dự kiến. Công sức cần ước lượng lại sau P0/P1; chưa có số tiền hoặc ngày phát hành đáng tin để chốt.

ART-02 hoàn thành ma trận tham chiếu. ART-03 vẫn phải có bảng silhouette riêng; ART-04 phải làm file/frame/hướng/anchor; ART-08 chuyển sang danh mục nguồn mới và đối chiếu bộ cũ chỉ để loại trừ. Không đánh dấu các mục đó xong từ tài liệu này.

Chưa sửa gameplay/database, chưa chạy game/đo FPS hoặc kiểm chứng animation. Một ảnh mẫu phong cách có thể được tạo riêng nhưng không đồng nghĩa hoàn thành bộ hình.

**Tiếp theo ART-03 — thiết kế silhouette class/vũ khí/vai trò**, dùng ma trận mới làm nền.

| Ngày | Phiên bản | Thay đổi |
|---|---|---|
| 20/10/2026 | 1.0 | Chốt tỷ lệ body/canvas/props/công trình, 4 hướng, đường/sân tham chiếu và pipeline asset mới. |

## Ảnh định hướng mới — không phải sprite sheet

Ảnh mẫu V1 đã bị loại làm chuẩn vì quá chi tiết; giữ file chỉ để xem lịch sử. Ảnh V2 tối giản là hướng hiện hành khi được tạo trong đợt này.

Ảnh được tạo mới bằng imagegen tích hợp, không cung cấp asset cũ làm ảnh tham chiếu. Dùng để xem màu, vật liệu và không khí. Đây là concept minh họa, chưa chứng minh grid 32px, body32px, bốn hướng hay tile nối; cảnh concept có độ chi tiết và góc nhìn minh họa cần giản lược/cân lại khi sản xuất sprite top-down. Không cắt ảnh này trực tiếp thành bộ asset rồi đánh dấu hoàn tất. Bộ cũ không được đưa vào pipeline mới.

## Lịch sử V1.1 — đã thay bằng hướng trung gian V1.2

Thân chuẩn 32px thay 48px; giữ 4 hướng và grid 32. Một scene dùng khoảng 16–20 màu nhận diện, mỗi vật liệu 2–3 mức. Không vẽ ngói/lá/cỏ từng chi tiết, không glow và hạt vụn mặc định. Giữ nội dung và khả năng đọc combat, giảm công sức trên từng asset. Ảnhconcept chỉ minh họa hướng; chưa xác nhận sprite/tile/animation đạt chuẩn.

## Ảnh V2 — hướng đơn giản hơn

![Pixel RPG tối giản V2](/design-preview/mmorpg-pixel-v2/styleboard-simple-v2.png)

Đã tạo bằng imagegen tích hợp, chỉnh từ concept mớiV1, không dùng bộ asset game cũ làm nguồn. Hình bớt chi tiết, mảng lớn/nền thoáng rõ hơn; vẫn là concept, chưa có grid native, alpha/tile seams hay frame animation đã xác minh. Khi làm sprite cần đưa đúng32px và palette sản xuất, bỏ chuyển màu mịn còn có trong ảnh minh họa. Prompt lưu trong tài liệu23.

## Điều chỉnh V1.2 — mức chi tiết trung gian

MẫuV2 bị đánh giá quá đơn giản. Body chuẩn40px/khoảng3đầu thay32px;3–4sắc/vật liệu, khoảng24–32màu nhận diện mộtscene. Giữ hình khối lớn nhưng thêm giáp vai/thắt lưng/túi/vũ khí, khung nhà/dải mái, vài cụm lá/sỏi/cỏ ở mép đường. Không tả chi tiết nhưV1 hoặc phẳng nhưV2. Bảng màu/số pixel là đích sản xuất, ảnhconcept không tự chứng minh đạt chuẩn.

HìnhV1/V2 là lịch sử, V3 là hướng làm việc hiện hành. Không tăng số vùng/NPC hoặc tự đánh dấu sprite hoàn tất. Tiến độ task giữ nguyên; đây là sửa cùng ART-01/02.

## Ảnh V3 — mức chi tiết trung gian

![Pixel fantasy chi tiết vừa V3](/design-preview/mmorpg-pixel-v3/styleboard-balanced-v3.png)

Ảnh tạo bằng imagegen tích hợp, chỉnh từ concept mớiV2. Mục đích so sánh hướng mỹ thuật: thêm hình khối mái/cây/trang phục nhưng vẫn thoáng. Chưa phải tilemap/atlas hoặc sprite có đủ hướng/động tác. Kích thước native, số màu và grid sản xuất cần được cleanup/kiểm chứng riêng; không lấy ảnh minh họa làm bằng chứng đạt chuẩn40px.

## Tinh chỉnh chi tiết V4

Giữ toàn bộ kích thước/body40px và canvas củaV1.2. Chỉ bổ sung khớp giáp/nếp vải/túi nhỏ, cụm lá/cành và chi tiết kiến trúc chọn lọc. Không tăng canvas hoặc scale actor để khiến nhân vật có vẻ nhiều chi tiết. Lớp màu chính khoảng4sắc/vật liệu, điểm nhấn thứ5 giới hạn. Số hướng/frame vẫn doART-04 thiết kế. MẫuV3 là điểm so sánh, V4 là hướng điều chỉnh hiện tại.

## Mẫu V4 — tăng chi tiết nhẹ

![Mẫu pixel V4](/design-preview/mmorpg-pixel-v4/styleboard-refined-v4.png)

Tạo bằng imagegen tích hợp từ concept mớiV3, không dùng asset game cũ. Chi tiết cây/đất/nước tăng, nhân vật giữ nhận diện; ảnhconcept chưa xác minh native40px, palette và frame/alpha/tile seams. Không dùng lượng texture trong ảnh để rải kín mọi vùng combat; mức tăng cần tiết chế trong asset sản xuất. Prompt lưu tài liệu25.

## Ghi nhận chốt phong cách V4 · 20/10/2026

Chủ dự án xác nhận “Ok phong cách v đi”. V4 trở thành mẫu thị giác chính thức; các ghi chú trước nói V4 chưa được duyệt chỉ phản ánh thời điểm tạo mẫu và được thay thế về trạng thái bởi ghi nhận này.

Giữ pixel fantasy chi tiết vừa, body tham chiếu40px/khoảng3đầu, grid32px,4hướng, vật liệu khoảng4sắc chính/điểm nhấn thứ5 có chọn lọc, cảnh vật có cấu trúc và nền combat đủ thoáng. Màu/độ chi tiết/hình khối lấyV4 làm mốc; kích thước/frame/anchor/palette xuất thực tế phải theo hồ sơ kỹ thuật, không tự suy ra mọi thông số từ ảnh.

Tất cả hình sản xuất mới, không dùng lại bộ asset game cũ. Được dùng chung module/layer trong chính bộ mới. Không tự tăng độ cầu kỳ hoặc quay về mẫu phẳngV2 giữa các class/vùng. Chốt phong cách không đồng nghĩa ảnhconcept đã là tileset/sprite sheet/animation hoàn chỉnh.

Tiếp theo theo checklist là ART-03 — silhouette class/vũ khí/vai trò, sử dụng mẫuV4 đã chốt. Không tạo thêm task hoàn thành chỉ từ một lần duyệt phong cách.


**Trạng thái sau đổi định hướng:** Thiết kế một phần; các phần phối cảnh, tỷ lệ chiếu/depth và cao độ được thay bởi hồ sơ 36, còn cần mẫu xác nhận trước sản xuất hàng loạt. Nội dung đánh dấu hoàn thiện trước đây là trạng thái lịch sử.
