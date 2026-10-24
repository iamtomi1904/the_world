# ART-07 — Chân dung, avatar, loading và hệ icon pixel

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0  
**Trạng thái:** Hoàn thiện đặc tả phong cách, kích thước nguồn, bố cục, biến thể và bàn giao; chưa vẽ bộ ảnh sản xuất hoặc kiểm chứng ở UI thực.  
**Phạm vi:** MMORPG; giữ nguyên thủ thành. Phong cách bắt buộc là pixel fantasy V4 trong game 2.5D, không chuyển chân dung sang tranh hiện thực hay icon vector bóng mịn.

## 1. Một ngôn ngữ hình ảnh

Giữ mảng khối rõ, cụm pixel có chủ ý, khoảng bốn sắc độ chính mỗi vật liệu và điểm sáng chọn lọc. Chân dung được chi tiết hơn body 40px nhưng vẫn cùng tỷ lệ cách điệu, màu da/tóc, trang phục và motif. Không dùng ảnh vẽ mịn thu nhỏ rồi coi là pixel production.

UI có khung tối xanh rêu và viền kim loại/ngà gọn, cùng khí chất Ẩn Thành. Nội dung icon tách khỏi khung, rarity, khóa, stack, rank, cooldown và phím tắt. Không vẽ sẵn chữ hoặc số vào ảnh vì cần dịch, thay dữ liệu và đổi cỡ UI.

Icon là hình 2D phẳng trong HUD, không cần nghiêng theo camera 2.5D. Vật phẩm xuất hiện trong thế giới có sprite/model riêng; không kéo icon UI thành vật thể trên map.

## 2. Kích thước và mức sử dụng

Các kích thước là lựa chọn thiết kế cần đối chiếu UI; không phải kích thước đo từ game tham khảo.

| Loại | Nguồn tham chiếu | Cách dùng |
|---|---|---|
| Icon trạng thái nhỏ | 24×24 | Dấu CC/buff, thanh tổ đội; cần bản đơn giản riêng. |
| Icon kỹ năng/vật phẩm/tiền | 32×32 | Hotbar, inventory, shop; phóng nguyên lần khi bố cục cho phép. |
| Ảnh chi tiết icon | 64×64 tùy nhu cầu | Tooltip/encyclopedia; redraw có kiểm soát, không bắt mọi icon có bản này ngay. |
| Avatar nhỏ | 48×48 | Danh sách nhân vật/tổ đội; crop mặt hợp lệ từ chân dung hoặc bản biên tập riêng. |
| Chân dung hội thoại | 128×128 | Bán thân gọn, nền tách riêng, phần mặt rõ. |
| Loading key art | 960×540 tham chiếu | Pixel scene 16:9, phóng tới khung hiển thị; chữ/progress là UI riêng. |

Không downsample icon 64 xuống 24 một cách tự động nếu mất nhận diện. Mỗi size class có kiểm tra riêng. Nội dung 32px chừa ít nhất 2px trong ảnh quanh phần chính, không gồm viền UI. Ảnh 24px ưu tiên một glyph, không nhồi cả người và cảnh nền.

Frame/padding atlas theo ART-04; trim phải giữ source bounds. UI không dùng pivot chân của sprite gameplay. Mọi bản nguồn ghi rõ kích thước tác giả; scale UI không thay độ phân giải file nguồn.

## 3. Chân dung nhân vật và avatar

Nhân vật người chơi có portrait dựng từ cùng lựa chọn chủng tộc, mặt, tóc và màu đang dùng, không chọn ảnh một anh hùng cố định không giống nhân vật. Pipeline ưu tiên layer chân dung mới riêng cùng catalog ngoại hình; không phóng body gameplay 40px thành chân dung 128px.

Đầu/mặt chiếm vùng đọc chính, hướng nhìn ba phần tư nhẹ, ánh sáng trên-trái nhất quán. Tai Elf hoặc tỷ lệ đầu/vai Người Lùn phải đọc được; râu/tóc không bắt buộc theo giới hoặc nghề. Mũ có thể che một phần nhưng không làm avatar thành khối đen; tùy chọn ẩn mũ chỉ tác động hình hiển thị theo luật ngoại trang.

Khung avatar thể hiện quan hệ theo ART-05 khi có ngữ cảnh; không gắn một màu vĩnh viễn vào class. Huy hiệu nghề/nhánh là lớp nhỏ riêng. Avatar tổ đội ưu tiên nhận ra người, HP, trạng thái; không chạy animation cánh hoặc nhấp nháy khung hiếm liên tục.

NPC dùng bộ portrait mới, giữ đặc điểm đã xuất hiện trên sprite và hồ sơ nhân vật. Biểu cảm tối thiểu theo nhu cầu thoại: trung tính, lo ngại, kiên định; chỉ thêm vui/giận/đau khi scene cần. Chưa nhân toàn bộ 82 NPC với mọi biểu cảm trước khi có bảng thoại. NPC phụ không portrait riêng có frame hội thoại chức năng rõ, không dùng portrait sai người.

## 4. Icon kỹ năng: hành động trước nguyên tố

Mỗi icon có một hình chủ đạo, một hướng hành động và tối đa một motif phụ. Nền chỉ tạo tương phản, không dựng cả phong cảnh. Kỹ năng khác chức năng không dùng một icon rồi đổi màu.

| Nhóm | Hình chủ đạo |
|---|---|
| Chém/đâm/đánh thường chủ động | Vũ khí hoặc đoạn lưỡi và hướng lực; đúng họ kiếm/giáo/rìu/cung/sách. |
| Dash/cơ động | Dáng bước/mũi chuyển, không icon tia sét nếu không có nguyên tố Lôi. |
| Phòng thủ/tăng giáp | Khiên đặc hoặc tấm giáp + hướng tăng. |
| Lá chắn hấp thụ | Khiên rỗng/pool, khác tăng giáp. |
| Hồi phục | Dấu cộng/tim với motif của nghề; không mặc định mọi phép Mộc là heal. |
| Triệu hồi | Linh thể/đầu đơn vị trong vòng khế ước, khác icon gọi tọa kỵ. |
| Khống chế | Bộ phận/dấu khóa và motif nguồn; root khác stun/airborne. |

Cây tiến hóa dùng cùng họ bố cục: Thế Công → Phá Thế → Thánh Trảm giữ nét hành động để đọc quan hệ, nhưng hình thức nghề/nhánh có khác biệt rõ. Rank 1–5 không tạo năm file icon giống nhau thêm sao; rank hiển thị bằng UI. Biến thể A/B có dấu biến thể riêng ngoài ảnh, không che phần chính.

Kỵ Sĩ: điều kiện Cần ngựa chiến là badge ngoài icon khi cần; không vẽ con ngựa chiếm mọi skill. Bị động Thiên Mã/Ám Mã dùng đầu ngựa + đôi cánh đặc trưng, tách khỏi icon Gọi ngựa. Loại ngựa hiện chọn có ảnh preview và profile trong sổ tọa kỵ, không thay icon kỹ năng bằng hàng chục ảnh mỗi lần đổi ngựa.

Skill chưa học vẫn xem được hình có phủ khóa và lý do. Skill hết mana có dấu thiếu tài nguyên, không đồng nghĩa chưa học. Kỹ năng sai vũ khí/cần ngựa có badge tương ứng, tooltip ghi điều kiện; chưa chọn hình thức xử lý ưu tiên nhiều lỗi ở đây thay toàn bộ UI flow.

## 5. Icon trạng thái

Glyph trạng thái theo hồ sơ 39/40, bỏ bớt chi tiết kỹ năng gây ra nó. Icon skill gây chảy máu có thể là lưỡi kiếm; icon debuff chảy máu là vết cắt/giọt. Cùng trạng thái từ nhiều nguồn dùng cùng glyph chuẩn và dữ liệu nguồn trong tooltip, không khiến người chơi phải nhớ nhiều ảnh cho một trạng thái.

Các cặp bắt buộc phân biệt bằng hình: tăng giáp/khiên hấp thụ; giảm giáp/giảm kháng phép; chậm chạy/chậm đánh/chậm niệm; độc/hồi HP; trói chân/choáng/hất tung. Stack góc dưới-phải, thời hạn là lớp UI bên ngoài hoặc quét viền; không dùng đồng thời nhiều số chồng nhau trong icon 24px.

Có biến thể đơn sắc/viền mạnh trong chế độ đọc rõ. Ba icon trên đầu theo ART-06 không giới hạn số effect trong state; panel luôn có danh sách đầy đủ được phép xem.

## 6. Icon vật phẩm và phân loại

| Nhóm | Hình ảnh cần đọc | Nhãn dữ liệu tách riêng |
|---|---|---|
| Trang bị | Silhouette thật của họ vũ khí/áo/mũ/phụ kiện. | Cấp, nghề/nhánh, rarity, nâng cấp, binding. |
| Tiêu thụ | Chai/thức ăn/băng/cuộn với dấu công dụng. | Số lượng, cooldown nhóm, hạn dùng nếu có. |
| Nguyên liệu | Hình tài nguyên như quặng/vải/gỗ, cụm mẫu vừa đủ. | Nghề chế tạo, tier và nguồn. |
| Cường hóa/khảm | Đá/rune/ngọc có dáng/khía khác nhau. | Hệ áp dụng, cấp và điều kiện dùng; không tự giống ngọc thủ thành. |
| Nhiệm vụ/sự kiện | Vật thể đặc trưng và badge quest/event. | Quest ID/giới hạn/hạn; không tự xóa chỉ vì đổi icon. |
| Túi quà | Túi/rương và dấu loại phần thưởng. | Có ngẫu nhiên hay cố định, bảng xác suất khi hệ loot được chốt. |
| Ngoại trang/tọa kỵ | Mẫu vật/đầu ngựa hoặc token có dấu mỹ phẩm. | Quyền sở hữu, preview, dùng được hay không. |

Hai item cùng họ nhưng khác tier có thể chung cấu trúc, cần một điểm khác hình/mảng vật liệu. Rarity không dùng màu làm dấu duy nhất: khung có nhãn/bậc theo hệ GEAR sẽ chốt. ART-07 không tự tạo bảng độ hiếm hoặc xác suất mới.

Không tạo icon riêng cho mọi instance roll. Dùng item definition icon và lớp nhãn. Vật phẩm chỉ đổi visual profile theo nhánh hiển thị preview phù hợp nhân vật trong tooltip, nhưng không nhân ID món hoặc tạo ngụ ý chỉ số khác. Đồ chưa có icon dùng dấu thiếu nội dung nội bộ, không phát hành icon của món khác gây hiểu nhầm.

## 7. Tiền tệ và dịch vụ

Tiền nạp, tiền khóa và tiền giao dịch cần ba silhouette riêng, không chỉ ba màu cùng đồng xu: đề xuất tinh thể khía cho tiền nạp, đồng ấn có dấu khóa cho tiền khóa, đồng tiền có lỗ/khía riêng cho tiền tự do. Đây là hướng icon, chưa chốt tên lore hoặc mệnh giá.

Ví tiền nạp dùng chung account giữa các chế độ theo thiết kế kinh tế. Icon giống nhau không có nghĩa item/tiền gameplay tự chuyển chế độ. Số dư, phạm vi ví và khả năng giao dịch luôn có nhãn; không giấu ý nghĩa khóa trong một dấu quá nhỏ.

NPC dịch vụ dùng glyph chức năng như búa/rèn, túi/kho, hai mũi tên/chợ, cuộn/nhiệm vụ. Bộ chức năng và phím tắt do UI/INPUT chốt; icon không tự cấp dịch vụ chưa được thiết kế.

## 8. Loading, ảnh vùng và cinematic

Loading giữ chất pixel, cảnh có lớp trước/giữa/xa, hình kiến trúc/cây/người đúng nhận diện vùng. Không chuyển thành tranh sơn dầu hoặc ảnh 3D hiện thực. Ảnh minh họa có thể chọn góc nghệ thuật nhưng không dùng nó chứng minh camera gameplay đã chốt.

Chừa vùng chữ an toàn phía dưới khoảng 20% ảnh theo template ban đầu, tránh mặt NPC/landmark quan trọng. Thử 16:9 và cửa sổ nhỏ, UI letterbox/crop có chính sách rõ; không kéo giãn ảnh. Tên vùng, gợi ý, loading progress và trạng thái mạng đều là UI riêng có thể dịch.

Thanh tiến độ chỉ phản ánh quá trình tải thật do hệ thống cung cấp; nếu không biết tổng thì dùng trạng thái không xác định, không chạy 100% giả để đứng chờ. Artwork không tiết lộ boss/bí mật chưa được phép biết. Trailer mở đầu và nội dung cinematic có storyboard riêng ở nhóm truyện, không hoàn tất chỉ từ template loading.

## 9. Asset tối thiểu và pipeline bàn giao

Làm một mẫu portrait người chơi ở ba body, một portrait NPC, một loading vùng, bộ icon ba kỹ năng nền và các cặp trạng thái dễ nhầm trước khi sản xuất toàn catalog. Kế tiếp phủ bảy nghề, 19 nhánh và danh mục item thực; chưa đặt số icon tổng khi chưa có skill/item definitions.

Mỗi gói gồm file nguồn có layer, PNG RGBA, source dimensions, vùng an toàn/crop, ID biên tập, owner nội dung, version và preview trên nền UI sáng/tối. Nguồn/giấy phép theo ART-08/10. Ảnh alpha không có nền caro thật, không viền trắng do matte, không upscale mờ. Chưa đặt tên runtime/schema asset từ tài liệu này.

Chân dung tùy biến tham chiếu cùng catalog ngoại hình nhân vật; không lưu bitmap tự do do client gửi để giả quyền trang bị. Quyền sở hữu, ID ngoại hình và tài khoản theo DATA; ảnh asset phiên bản hóa, không ghi toàn bộ file pixel vào mỗi bản ghi nhân vật.

## 10. Tiêu chí kiểm chứng sau khi vẽ

Nhận ra công dụng ở 24/32px, bản đơn sắc và nền sáng/tối; đọc được cặp giáp/shield và root/stun/airborne. Rank/stack/timer không che hình chủ đạo. Avatar khớp chủng tộc/mặt/tóc và không nhầm NPC. Loading không cắt chữ/nút hoặc lộ bí mật. Thử các cỡ UI ở 1080p và 1366×768; không báo đạt chỉ nhờ xem file lớn.

ART-07 hoàn thiện đặc tả, chưa tạo ảnh sản xuất, mockup đầy đủ hoặc test. ART-01/02/04 vẫn một phần vì camera/pipeline 2.5D chờ scene mẫu. Tiến độ **15/513 hoàn thiện, 6 một phần, 492 chưa thiết kế**. Tiếp theo ART-08: thư viện asset mới, nguồn/quyền và ma trận sản xuất.
