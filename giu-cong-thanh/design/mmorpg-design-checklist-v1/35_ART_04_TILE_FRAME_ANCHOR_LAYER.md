> **Tham khảo và điều chỉnh ART-04 V2:** [Hồ sơ 37](37_ART_04_THAM_KHAO_GAME_2_5D.md) bổ sung nguồn game chính thức, phân biệt tile texture với module 3D, camera profile và cổng kiểm chứng. Quy tắc ở hồ sơ 37 thay mô tả cũ khi xung đột.

> **CẬP NHẬT 2.5D · 21/10/2026:** [Hồ sơ 36](36_DINH_HUONG_2_5D_VA_RA_SOAT_MY_THUAT.md) thay các quy tắc 2D phẳng khi xung đột: môi trường khối 3D đơn giản/texture pixel, nhân vật sprite 2D, camera trực giao cố định; cao độ và bề mặt đi lại tách khỏi hình chiếu. V4 giữ làm chuẩn màu/chi tiết, chưa phải mẫu phối cảnh 2.5D đã kiểm chứng.

# ART-04 — Chuẩn tile, frame, điểm neo và lớp hiển thị

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0  
**Trạng thái:** Hoàn thiện đặc tả sản xuất; chưa tạo atlas, sprite, công cụ hoặc triển khai.  
**Phạm vi:** Chỉ MMORPG. Không thay bất kỳ asset, code hoặc cơ chế thủ thành nào.

## 1. Hệ tọa độ và pixel

Dùng pixel tác giả làm đơn vị đo hình; tile nền 32×32, thân Con Người khoảng 40px theo ART-02. Pixel hình không mặc nhiên bằng đơn vị server, collider hoặc ô điều hướng. Trục ảnh x sang phải, y xuống dưới; mọi tọa độ frame/anchor khai báo theo ảnh gốc chưa trim.

Khung logic tham chiếu 960×540, 1080p ở 2×; nearest-neighbor cho hình pixel, không co từng layer với tỷ lệ khác nhau. Camera/actor có tọa độ logic liên tục; chốt vị trí vẽ cuối của một actor cùng các layer theo một gốc pixel. Không làm tròn riêng từng tay/cánh khiến chúng rung lệch nhau. Font/HUD dùng hệ scale riêng dễ đọc tiếng Việt.

## 2. Tile và mép nối

| Loại | Chuẩn sản xuất |
|---|---|
| Nền phẳng | Tile 32×32, phủ kín đúng mép, không có hàng alpha ngoài ý muốn. |
| Chuyển địa hình | Một nền cơ sở và bộ mép/ góc/ góc lõm; cấu trúc 47 biến thể blob cho một cặp chuyển tiêu chuẩn nếu cần nối đủ tám lân cận. |
| Trang trí | Decal riêng nền trong suốt, không thay collider hoặc xác định loại môi trường. |
| Vách/núi | Module 32px, tách mặt đỉnh/mặt đứng/chân/góc; chiều cao hình không tự làm vùng đi được. |
| Sông/suối | Nước, bờ, lòng và vật thể ven nước là lớp riêng; nước sâu/cạn có dữ liệu gameplay độc lập. |
| Công trình | Chân/tường/cột/mái có module; mảnh lớn được dùng khi cần, không phóng một tile thành cả tòa nhà. |

47 là quy ước bộ nối lựa chọn cho một cặp nền, không yêu cầu vẽ 47 mảnh cho mọi decal hoặc nhân số cặp vô hạn. Góc chéo chỉ được nối khi hai cạnh kề tương ứng tồn tại. Ba vật liệu gặp nhau dùng thứ tự ưu tiên nền và decal giao điểm đã duyệt, không chồng ba bờ kín lên nhau.

Tạo vùng môi trường lớn bằng nhiều tile và biến thể cùng tỷ lệ, không kéo giãn một vệt nhỏ. Mỗi nền có mảnh yên tĩnh để chiến đấu và các biến thể chi tiết đặt thưa. Cây, đá, bụi và landmark đặt theo sinh cảnh; không phủ vào đường bắt buộc hoặc vùng báo đòn.

Đường nối phải khớp cao độ, hướng sáng và màu ở mép. Ghép thử lặp 3×3, góc lõm/lồi, hành lang một tile và giao ba nền trước nghiệm thu. Animation nước dùng cùng topology qua mọi frame; không thay đường bờ theo nhịp sóng.

## 3. Canvas, frame và trim

| Nhóm | Canvas tham chiếu | Ghi chú |
|---|---|---|
| Body nhân vật | 96×96 | Body nhỏ vẫn dùng cùng gốc khi chia sẻ pipeline; không scale để lấp canvas. |
| Pose vũ khí dài | 128×128 khi 96 không đủ | Nâng canvas/layer, không cắt đầu giáo hoặc thu ngắn vũ khí. |
| Người cưỡi/ngựa | 128×128 tham chiếu | Kiểm pose cực trị; tách layer theo hồ sơ 34. |
| Ngựa/cánh mở lớn | 192×192 tham chiếu hoặc bounds riêng theo layer | Không phóng body để lấp khoảng trống; cho phép vượt nếu art đã duyệt. |
| Quái/boss/cảnh vật | Theo ART-02 và bounds thực tế | Không ép boss hoặc mái nhà vào frame nhân vật. |
| VFX | Bounds riêng theo clip | Có lề quét/xoay; không dùng canvas nhân vật làm mặt nạ cắt. |

Các kích thước là preset xuất, không trần bắt buộc. Trong một clip, giữ kích thước ảnh nguồn và gốc nhất quán. Atlas có thể trim từng frame nhưng phải lưu sourceSize, vị trí trim và pivot nguồn. Khi dựng lại, khôi phục offset trước khi gắn layer; không coi tâm vùng ảnh sau trim là chân nhân vật.

Atlas đóng gói theo rectangle thực tế, không suy số hàng/cột hoặc chia sheet bằng kích thước đoán. Không xoay frame pixel khi pack ở bản đầu. Mỗi rectangle có extrusion 2px và gutter ít nhất 2px để tránh lấy màu frame bên cạnh; extrusion nằm ngoài nội dung nguồn và không tăng kích thước gameplay.

PNG RGBA, nền thật sự trong suốt; không nền caro vẽ vào ảnh, không matte trắng/đen ở mép. Metadata bounds không bao gồm extrusion/gutter.

## 4. Điểm neo và socket

| Điểm | Chức năng |
|---|---|
| ground | Gốc actor trên mặt đất; ổn định qua Idle/Move/Attack. |
| body | Điểm thân để đặt các layer áo/giáp. |
| handMain / handOff | Điểm cầm và tay phụ, theo từng frame/hướng. |
| weaponGrip / weaponTip | Tay cầm và đầu vũ khí; VFX bám theo pose thật. |
| head / status | Mặt/đầu và điểm icon trạng thái; không phụ thuộc chiều cao cánh. |
| saddle / riderRoot | Liên kết người cưỡi với ngựa; theo frame ngựa. |
| wingLeft / wingRight | Gốc cánh theo loại ngựa, không gắn vào tâm canvas. |
| impact / castOrigin | Điểm tham chiếu hình phát phép/trúng đòn, không tự quyết hitbox. |

Một frame nhân vật 96×96 có ground tham chiếu tại (48,80); body 40px vươn lên từ đây, khoảng trống dưới dành cho pose/bóng. Đây là gốc layout mẫu; từng body có pose chân riêng nhưng vẫn giữ ground ổn định. Không bắt mọi chân phải chạm đúng một pixel ở mọi frame nhảy.

Với ngựa, ground ở vùng nền giữa các điểm tiếp xúc chân; riderRoot theo chuyển động yên. Dùng ground để xếp depth, dùng saddle để đặt người: không cộng rung thân ngựa hai lần. Bay hình/lướt thấp dùng visualHeight tách khỏi ground; không tự thay cao độ di chuyển hợp lệ.

Socket lưu theo hướng và frame. Vũ khí có thể xoay tự do trong VFX nhưng body dùng bốn hướng; không lấy một socket trước mặt cho mọi hướng. Effect chém theo vector đánh, không khóa ngang một hướng.

## 5. Hướng và lớp hiển thị

Bốn hướng chính: nam/bắc/tây/đông. Di chuyển chéo chọn hướng ổn định theo vector trội; dùng vùng trễ hướng để tránh rung khi hai thành phần gần bằng nhau. Ngưỡng cụ thể là cấu hình runtime sau, không ghi đè aim combat bằng hướng sprite.

Không flip toàn bộ actor bất đối xứng. Tay kiếm, khiên, sách và giáp ngựa có thứ tự trước/sau theo hướng. Có thể đối xứng module body phù hợp nhưng phải sửa tay/layer/socket tương ứng trước nghiệm thu.

Thứ tự cảnh: nền → mặt môi trường/decal → bóng → vật thể thấp và actor theo ground.y → tiền cảnh/mái → báo gameplay cần thấy → tên/icon/HUD. Với actor có cùng ground.y dùng khóa phụ ổn định, không để nhấp nháy thứ tự mỗi frame.

Một actor gồm phần sau, body/ngựa, người, tay/vũ khí, phần trước; thứ tự khác theo hướng và pose. Cánh có phần trước/sau khi cần, không một tấm luôn phủ người. Mái/cây che nhân vật cần cơ chế giảm che khuất ở SCREEN/MAP; không cho toàn bộ tán cây đè báo vùng nguy hiểm.

## 6. Viền, bóng và đọc hình

Viền chọn lọc khoảng một pixel tác giả ở cạnh cần tách nền, dùng màu tối thuộc vật liệu; không viền đen dày mọi chi tiết. Nguồn sáng mỹ thuật từ trên-trái thống nhất; ánh sáng động sau này chỉ là lớp bổ sung, không vẽ mỗi asset sáng một hướng.

Bóng tiếp xúc là layer riêng, mềm bằng cụm pixel có alpha bậc, không blur ảnh thực. Bóng bám ground, kích thước theo thân nền chứ không theo cánh/VFX. Người cưỡi dùng một bóng nền phù hợp ngựa, không chồng bóng người lên ngựa thành vùng đen. Quái bay có bóng định vị; độ cao hình không tự là miễn thương.

Chân/pivot, điểm trúng đòn, selection và collision là dữ liệu khác nhau. Không tạo hitbox bằng toàn bộ alpha của cánh hoặc bóng; cũng không coi một pixel ground là hitbox boss.

## 7. Clip và sự kiện animation

Mỗi clip khai báo tên, hướng, frame rectangle, thời lượng frame, loop, pivot/socket và các marker cần có. Idle/Move loop; Attack/Cast/Hurt/Death không mặc định loop. Frame lặp có chủ ý phải khai báo, không thêm frame trắng để kéo thời gian.

Attack/Cast có chuẩn bị → marker phát lực/tiếp xúc → thu đòn; projectile chỉ phát một lần theo sự kiện được authoritative combat chấp nhận. Marker hình giúp đồng bộ trình bày, client không dùng marker riêng để tự cấp damage.

Không chốt một số FPS cho tất cả vũ khí. COMBAT/SKILL chốt nhịp gốc và giới hạn tăng tốc; animation phải ánh xạ nhịp đó, không tự tăng tốc đánh vì sheet có nhiều frame. Move blend/chuyển trạng thái không khởi động lại Attack mỗi tick; dash/nhảy có clip riêng khi cần.

Ghép clip theo ID frame và thời gian, không cố định mọi clip có cùng số frame. Quy tắc ngắt/cancel phải nằm trong hồ sơ kỹ năng; ART chỉ thể hiện marker và pose được duyệt.

## 8. Vùng an toàn cho vũ khí và VFX

Bounds clip được tính từ toàn bộ frame/layer sau biến đổi, gồm đỉnh vũ khí và cánh mở. Lề nội dung tham chiếu ít nhất 4px quanh pose cực trị; VFX quét/xoay cần thử bounds sau xoay rồi thêm lề riêng. Lề không phải cách chữa sai pivot.

Không cắt effect vào rectangle body hoặc panel chân dung. VFX đặt trong world layer riêng có culling theo bounds effect, không chỉ điểm chân actor. Một đòn chém có thể vượt ra ngoài ảnh người nhưng vẫn giữ hitbox được thiết kế độc lập.

Giảm kích thước bằng sửa composition/asset hoặc tham số scale được duyệt; không tự scale theo khoảng trống canvas. Ngoại hình lớn không tăng range, collider hoặc số mục tiêu. Dự báo vùng nguy hiểm và effect trang trí tách lớp để ART-05/06 quản lý độ ưu tiên.

## 9. Bàn giao sản xuất

Một gói có ảnh PNG, atlas rectangles, metadata clip/socket/layer, ảnh preview nền sáng/tối và ghi chú tương thích body/vũ khí. Metadata tối thiểu gồm assetVersion, actorProfile, sourceSize, frameRect, trimOffset, pivot, direction, clip, duration, sockets và events; đây là hợp đồng thiết kế, chưa chọn format engine/schema code.

Không lưu tọa độ từng frame vào PostgreSQL theo nhân vật. Asset metadata là nội dung có phiên bản; database lưu ID quyền sở hữu/trang bị và phiên bản cần thiết theo DATA, server quyết định gameplay. Web/PC đọc cùng catalog; asset lệch phiên bản cần báo/cập nhật, không lặng lẽ thay họ vũ khí.

## 10. Tiêu chí nghiệm thu sau khi có hình

- Tile nối đúng ở cạnh/góc/góc lõm và qua chu kỳ animation; không đường alpha/hở mép.
- Atlas irregular dựng lại đúng nguồn, không rung vì trim hoặc nhảy socket.
- Bốn hướng cầm đúng tay; vũ khí dài, cánh và effect xoay không bị cắt.
- Người cưỡi đúng yên, giáp/cánh bám đúng con ngựa và profile đồ; không layer mồ côi khi xuống.
- Thử Idle/Move/Attack/Cast/Hurt/Death, đổi trang bị, zoom pixel và nền sáng/tối.
- So riêng bounds hình, điểm chân, vùng chọn và collider; không suy gameplay từ alpha ảnh.

Chưa thực hiện nghiệm thu vì chưa sản xuất bộ asset. ART-04 hoàn thiện đặc tả, không đánh dấu animation, tool, atlas hay gameplay đã làm xong. Tiếp theo ART-05: màu và ký hiệu thông tin chiến đấu. Tổng 15/513 mục hoàn thiện, 3 một phần, 495 chưa thiết kế.


**Trạng thái sau đổi định hướng:** Thiết kế một phần; các phần phối cảnh, tỷ lệ chiếu/depth và cao độ được thay bởi hồ sơ 36, còn cần mẫu xác nhận trước sản xuất hàng loạt. Nội dung đánh dấu hoàn thiện trước đây là trạng thái lịch sử.
