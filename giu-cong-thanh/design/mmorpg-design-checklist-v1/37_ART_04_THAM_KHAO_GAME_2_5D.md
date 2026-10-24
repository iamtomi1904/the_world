# ART-04 V2 — Tham khảo game 2.5D và đặc tả áp dụng

**Ngày:** 21/10/2026 · **Phiên bản:** 2.0  
**Phạm vi:** Thiết kế MMORPG; không sửa thủ thành, không chọn engine, không sản xuất asset.  
**Trạng thái:** Đã bổ sung nghiên cứu nguồn chính thức và quy tắc áp dụng; ART-04 vẫn một phần vì chưa có scene mẫu xác nhận phối cảnh/pipeline.

## 1. Nguồn và mức độ có thể kết luận

### Octopath Traveler / Octopath Traveler II

Square Enix mô tả nhân vật 2D trong thế giới 3D. Các phỏng vấn đội phát triển trên Unreal Engine nói về quá trình phát triển hình ảnh HD-2D và tinh chỉnh cho phần hai. Đây là cơ sở cho hướng kết hợp sprite và không gian; không cung cấp tiêu chuẩn chung cho atlas, pivot hay góc camera của mọi game.

Nguồn: [Square Enix — giới thiệu Octopath II](https://www.square-enix.com/asia/newsportal/en/sg/octopathii/), [Unreal Engine — phỏng vấn phát triển Octopath II](https://www.unrealengine.com/developer-interviews/octopath-traveler-ii-builds-a-bigger-bolder-world-in-its-stunning-hd-2d-style?lang=en).

Áp dụng cho Ẩn Thành: giữ sprite pixel làm nhân vật, dùng không gian để tạo lớp cảnh và quy mô địa điểm. Không sao chép asset, hình nhân vật hoặc giả định toàn bộ hiệu ứng/camera của game phù hợp MMO nhiều người. Việc hạn chế blur/bloom dưới đây là quyết định riêng, không phải kết luận nhà phát triển Octopath khuyến cáo như vậy.

### Star Ocean: The Second Story R

Square Enix xác nhận hình ảnh 2.5D kết hợp nhân vật pixel 2D với môi trường 3D. Trong bài do đội phát triển chia sẻ trên PlayStation Blog, họ giải thích cách xây dựng cảnh 3D từ góc nhìn thế giới của nhân vật pixel.

Nguồn: [Square Enix — giới thiệu chính thức](https://www.square-enix-games.com/en_US/home/star-ocean-second-story-r-out-now), [PlayStation Blog — đội phát triển giải thích Creating 2.5D](https://blog.playstation.com/2023/10/26/how-star-ocean-the-second-story-r-modernizes-a-classic-playstation-adventure-25-years-later/).

Áp dụng: nhà, đường, vách và vật thể phải tạo một không gian có tỷ lệ hợp nhân vật; không chỉ đặt sprite trên ảnh nền giả sâu. Ẩn Thành vẫn chọn chất liệu pixel V4 giản lược hơn, không chuyển sang môi trường hiện thực chỉ vì game tham khảo dùng hướng đó.

### Triangle Strategy

Nhà sản xuất giải thích vai trò của địa hình, độ cao và hướng trong chiến đấu. Nintendo mô tả chiến trường nhiều tầng và lợi thế vị trí. Nguồn xác nhận cách trò chơi coi cao độ là yếu tố gameplay, không xác nhận định dạng mesh/collision hoặc renderer nội bộ.

Nguồn: [Square Enix — nhà sản xuất giới thiệu](https://www.square-enix-games.com/en_US/news/triangle-strategy-xbox-playstation), [Nintendo — chiến trường nhiều tầng](https://www.nintendo.com/en-ca/whatsnew/tips-for-getting-started-with-triangle-strategy/).

Áp dụng: bậc cao, dốc, cầu và đường lên phải đọc được; bề mặt và tầng là dữ liệu thực. Không sao chép combat theo lượt, bonus đánh từ cao hoặc hệ tương tác nguyên tố vào MMO khi chưa có thiết kế riêng.

Ba game là tham khảo hình ảnh/không gian, không phải bằng chứng kiến trúc đủ cho MMORPG, hiệu năng web hoặc networking. Chưa dùng tài liệu không chính thức để suy số frame, độ phân giải sprite hay góc camera.

## 2. Hướng hình ảnh sau nghiên cứu

**Pixel fantasy V4, nhân vật 2D trong môi trường khối 3D có texture pixel, camera cố định ưu tiên combat và khám phá.** Tách riêng chất liệu, phối cảnh và renderer: chọn phong cách không tự chọn engine.

Giữ mảng màu vừa, nét và silhouette đã chốt. Cảnh có lớp gần/giữa/xa nhưng mặt đi lại chính rõ. Không dùng độ mờ trường ảnh trong vùng chiến đấu ở thiết kế cơ sở; cinematic có thể có hồ sơ riêng. Bloom chỉ điểm nhấn nếu được duyệt, không là nền thường trực. Đây là quy tắc Ẩn Thành để giảm che khuất khi đông người.

Không gọi 2.5D là phải isometric hoặc phải dùng camera trực giao. Camera trực giao cố định là phương án đang đề xuất cho dự án; nguồn nghiên cứu không chứng minh đây là phương án duy nhất.

## 3. Các sửa đổi có hiệu lực cho ART-04

| Hạng mục | Quy tắc mới | Phần cần mẫu |
|---|---|---|
| Tọa độ | X/Y mặt đất, Z cao độ, ID bề mặt/tầng; screen position chỉ là hình chiếu. | Đi trên/dưới cầu, chọn mục tiêu đúng tầng. |
| Camera | Giữ góc cố định, không xoay tự do; so sánh góc nghiêng 35/45/55 độ từ mặt đất, cùng framing nhân vật. | Chọn góc nhìn rõ đường sau nhà và thân/cánh ngựa. |
| Sprite | Mặt phẳng dựng theo camera, chân neo thế giới; bốn hướng là phạm vi tạm. | Đi chéo, đứng gần tường, clipping và cảm giác hình giấy. |
| Mặt đất | Texture module 32px là mật độ nguồn; hình chiếu ô đất không bắt buộc vuông. | Tỷ lệ pixel texture/sprite ở camera chuẩn. |
| Cao độ | Khối nền/dốc/bậc và bề mặt đi lại tách biệt; bờ nhìn thấy không tự quyết collider. | Tránh bước nổi hoặc chìm chân trên dốc. |
| Mép nối | Tile nối texture cho cùng mặt; module geometry nối thể tích/cao độ. | Không coi bộ 47 tile ảnh đủ giải quyết mọi vách 3D. |
| Depth | Cảnh dùng chiều sâu không gian; actor composite có lớp nội bộ và chính sách alpha rõ. | Tóc/cánh/tán cây bán trong suốt và giao nhau. |
| Bóng | Một giải pháp bóng chính theo bề mặt; không cộng hai bóng đậm. | Ngựa trên cầu, quái bay, nhân vật sát vách. |
| VFX | Aura/vùng báo đòn trên mặt nền; projectile theo đường thế giới; flash/icon có thể hướng camera. | AoE trên dốc, dưới cầu, sau vật che. |
| Canvas | Là tài nguyên ảnh, không giới hạn toàn hình 3D hoặc gameplay bounds. | Vũ khí/cánh mở không crop, culling không quá sớm. |

Các thử góc là dải kiểm chứng do trợ lý chọn, không thông số đo từ game tham khảo. Không thay toàn bộ sprite hàng loạt trước khi chọn góc.

## 4. Quy tắc tile và module 2.5D

Module mặt đất có mặt trên, đường nối và dữ liệu bề mặt; vách có mặt đứng/góc/chân; cầu có mặt cầu, trụ và khoảng đi dưới. Texture nối không có nghĩa mọi module phải một mesh riêng: cách gộp thuộc pipeline sau.

Bộ 47 biến thể blob của hồ sơ 35 chỉ dùng khi cần chuyển hai vật liệu trên một mặt. Không dùng nó làm chuẩn bắt buộc cho UV/geometry mọi môi trường. Tách ba bài toán: nối hình texture, nối khối vật thể và nối điều hướng.

Mỗi họ địa hình cần bảng tổ hợp tối thiểu phẳng, mép, góc lồi/lõm, lên bậc, dốc, giao nền và điểm kết thúc. Nước cạn/sâu, cây/đá và vật thể tương tác gắn vào vùng hợp sinh cảnh; không thay quy tắc ghép nhiều module bằng scale lớn một mảnh.

Mật độ pixel cùng họ vật liệu phải nhất quán. Không lấy texture ảnh thực thu nhỏ và gọi là pixel art. Vật liệu có mặt nghiêng cần xem ở góc camera chuẩn, không kiểm đẹp riêng ở texture phẳng rồi bỏ qua khi dựng cảnh.

## 5. Bộ phận nào là sprite, model, decal

| Thành phần | Định hướng |
|---|---|
| Người/NPC/quái | Sprite 2D theo hướng, socket và atlas đã quy định. Boss đặc biệt cần hồ sơ riêng nếu vượt pipeline này. |
| Ngựa/người cưỡi/cánh | Composite sprite theo profile ngựa, đồ và nhánh; đủ bounds, không tự thay thành ngựa model 3D. |
| Nền/đường/vách/dốc/cầu/nhà | Khối 3D đơn giản, texture pixel mới. |
| Cây/bụi | Sprite dựng hoặc khối đơn giản theo họ cảnh đã thử; không trộn tùy tiện hai mật độ/kiểu sáng. |
| Aura/AoE/vệt mặt đất | Decal hoặc mặt phẳng bám bề mặt có offset hợp lý; không xuyên tầng không chủ đích. |
| Projectile/vệt chém | Vị trí/đường đi thế giới, hình sprite/mesh VFX theo clip; collision độc lập. |
| Tên/icon trạng thái/UI | Lớp màn hình, đi theo anchor có quy tắc che khuất và thứ bậc. |

Các lựa chọn là hợp đồng mục tiêu; format/shader cụ thể chưa chốt. Không suy ra shader hoặc số draw call từ ảnh game khác.

## 6. Alpha, che khuất và khả năng đọc trong MMO

Thử alpha-cutout cho phần sprite cạnh cứng, alpha-blend cho hạt/vệt khi cần; quyết định cuối dựa mẫu clipping và viền, không tự cắt mất pixel alpha có chủ ý. Lớp trong composite phải ổn định theo hướng; không ép tất cả layer vào một tấm hướng camera rồi kỳ vọng depth giải quyết mọi tình huống.

Mái/tường/tán che người có thể mờ hoặc cắt theo vùng, nhưng phải giữ dấu ranh và trạng thái vật cản. Không cho mọi nhân vật hiện xuyên tường đầy đủ trong combat nếu chưa có quy tắc tiết lộ thông tin. Dấu người chơi bị che và thông tin kẻ địch được xử lý riêng trong SCREEN/COMBAT.

Ưu tiên nhìn rõ người chơi, hướng đánh và báo vùng nguy hiểm. Aura trang trí đồng đội có mức giảm; cánh ngựa có bản giản lược. Không cắt cánh chủ sở hữu hoặc xóa trạng thái thật để giảm VFX. Ngân sách số lượng và tải đông người cần đo sau, chưa tuyên bố nguồn nghiên cứu đã chứng minh hiệu năng.

## 7. Scene kiểm chứng và thứ tự làm

Một scene mới, không thay thủ thành: đường phẳng → dốc → cầu trên lối dưới → nhà/mái → cây → vùng nước → sân đánh. Dùng một body tham chiếu rồi kiểm thêm Elf/Lùn, Kỵ Sĩ cưỡi ngựa/cánh và quái bay.

Bước 1: graybox, camera và bề mặt; chưa tô nhiều chi tiết. Bước 2: một texture nền, một nhà/cây và sprite mới đúng V4. Bước 3: atlas/socket, ngựa/cánh và che khuất. Bước 4: projectile/AoE đúng tầng, HUD tách render. Bước 5: đối chiếu web/PC và mật độ đông người theo budget kỹ thuật được lập riêng.

Các cảnh tĩnh phải dùng cùng framing/scale khi so góc, không làm một phương án trông đẹp hơn bằng zoom khác. Chấm theo khả năng đọc body/vũ khí, đường sau mái, đường lên tầng, mép nước, pixel ổn định, và hướng bắn; không chỉ chấm độ hoành tráng.

## 8. Cổng hoàn thiện ART-04

- Có camera profile được chọn qua mẫu và ghi thông số thực tế.
- Có ví dụ texture/module nối cảnh và hai tầng không lỗi hình/điều hướng.
- Có một sprite atlas irregular/trim dựng đúng pivot, cùng actor cưỡi ngựa/cánh không crop.
- Có minh họa depth/alpha/che khuất và VFX mặt đất đúng tầng.
- Có quy cách bàn giao cập nhật từ kết quả mẫu, ghi rõ phần nào tái sử dụng từ hồ sơ 35.

Nghiên cứu nguồn đã làm; năm tiêu chí mẫu trên chưa làm. Không đánh dấu ART-04 hoàn thiện chỉ vì có tham khảo. ART-01/02/04 vẫn một phần; tiến độ giữ 12 hoàn thiện, 6 một phần, 495 chưa thiết kế. Toàn bộ là tài liệu, không chạy game hoặc kiểm thử trong đợt này.


**Cảnh mẫu đã thiết kế:** [Lối Cầu Bình Minh — bố trí, camera và tiêu chí đối chiếu](38_ART_04_HO_SO_CANH_MAU_2_5D.md). Có sơ đồ mặt bằng/mặt cắt; chưa dựng hoặc đo scene 2.5D. ART-04 vẫn một phần.
