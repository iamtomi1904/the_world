# ART-09 — Ngôn ngữ âm thanh thế giới, chiến đấu và giao diện

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0  
**Trạng thái:** Hoàn thiện đặc tả nhận diện, ưu tiên và bàn giao; chưa sáng tác/thu âm/tạo file, chưa phối hoặc đo trên thiết bị.  
**Phạm vi:** MMORPG Ẩn Thành 2.5D pixel V4, thủ thành giữ nguyên.

## 1. Hướng âm thanh

Fantasy phiêu lưu trung cổ: âm nhạc có giai điệu rõ, nhạc cụ mộc và bộ dây/khí gọn, điểm chất âm tổng hợp nhẹ cho phong ấn và phép thuật. Không bắt dùng chiptune chỉ vì hình pixel; cũng không mặc định dàn giao hưởng dày và âm trầm dồn liên tục cho mọi cảnh. Đây là định hướng sáng tác, không cam kết đã có nhạc cụ/diễn viên hoặc ngân sách thu thật.

Sự tương phản quan trọng: nơi nghỉ ấm, hoang dã có khoảng thở, nơi phong ấn có nhịp/motif bất ổn. Combat làm tăng áp lực nhưng giữ nghe được báo đòn và thao tác. Nhạc không quyết định thời điểm gây damage hay trạng thái game.

## 2. Lớp âm và thiết lập

Tách Master, Nhạc, Môi trường, Chiến đấu, Giao diện và Thoại. Cảnh báo gameplay là nhóm riêng trong Chiến đấu để điều chỉnh độ rõ; nút Master vẫn tắt được toàn bộ. Không ép người chơi bật tiếng để qua nhiệm vụ.

Có tùy chọn Giảm tiếng đồng đội, Giảm âm lặp, Giảm dải động và phụ đề/caption âm quan trọng. Giảm dải động nhằm giữ âm nhỏ nghe được hơn và hạn chế chênh âm lớn; thông số xử lý chỉ chọn sau có file và đo, không hứa preset đã an toàn cho mọi mức nghe.

UI đi theo màn hình; tiếng thế giới dùng nguồn ở vị trí/surface hợp lệ. Không kéo toàn bộ nhạc và thông báo hệ thống qua trái/phải theo camera. Mất focus có tùy chọn giảm/tắt âm nền, nhưng thông báo không được coi đã đọc chỉ vì bị giảm âm.

## 3. Âm nhạc năm vùng — đề xuất motif

| Vùng | Hướng âm nhạc | Môi trường và dấu sinh hoạt |
|---|---|---|
| V01 Bình Minh/ngoại vi Ẩn Thành | Sáo, dây gảy, tiết tấu thưa, motif quê nhà ấm nhưng dang dở. | Gió đồng cỏ, nước suối, chim thưa, búa sửa cổng và bước chân dân. |
| V02 Valedorn–Merrowen | Dây gảy/bộ dây rõ nhịp, sắc thái giao thương/đường xa. | Bánh xe, chợ, chuông dịch vụ, bờ nước theo địa điểm thực. |
| V03 Sylvaris–Aurelia | Sáo gỗ, dây mềm và khoảng ngân ngắn, gợi sinh trưởng/lịch sử. | Lá/tán, côn trùng, gió qua tàn tích; không phát cùng tiếng rừng ở mọi hang. |
| V04 Nocthollow–Astravelle | Âm trầm vừa, chuông nhỏ và motif lệch nhẹ, gợi bí ẩn. | Gió qua đá, vật liệu cũ, tiếng nghi lễ xa khi có nguồn trong cảnh. |
| V05 tiền tuyến phong ấn | Nhịp dây/trống tiết chế, motif phong ấn rõ và căng. | Máy/công cụ phòng thủ, gió, rạn năng lượng theo encounter. |

Tên và tính chất vùng dựa phạm vi hiện hành; nhạc không tự tạo phe/tín ngưỡng mới. Mỗi vùng cần bản khám phá/nghỉ và lớp căng thẳng có thể chuyển mượt; không bắt có bài mới cho mỗi NPC hoặc mỗi phút ngày/đêm.

## 4. Chuyển nhạc và bối cảnh

Khám phá → cảnh báo → giao chiến lớn → kết thúc → trở lại khám phá theo encounter state. Một quái nhỏ đuổi vài giây không liên tục reset bài chiến đấu. Có quy tắc trễ/chống chuyển qua lại, giá trị sau này cấu hình theo scene.

Dungeon có motif riêng gắn vật liệu/lịch sử; boss có dấu mở đầu nhận diện, các pha dùng biến đổi lớp nhạc khi cần, không phát chồng nhiều track boss nếu nhiều nhóm gần nhau. Client chọn encounter liên quan theo state được phép, không nghe boss chưa phát hiện qua tường chỉ vì nhạc ưu tiên cao.

Cinematic và thoại có thể hạ nhạc/môi trường vừa đủ, khôi phục khi kết thúc hoặc bỏ qua. Skip không để nhạc cinematic chạy mãi trong combat. Đăng nhập/chọn nhân vật dùng motif Ẩn Thành nhất quán, âm nền web chỉ bắt đầu theo luồng tương tác mà nền tảng cho phép.

## 5. Vũ khí và đòn đánh

| Họ vũ khí | Dấu âm | Phân biệt cần giữ |
|---|---|---|
| Kiếm một tay/song đao | Vút ngắn, va kim loại gọn. | Song đao có nhịp hai tay thực, không giả hai hit nếu gameplay một hit. |
| Trọng kiếm | Vút nặng hơn, impact có thân nhưng không nổ bass mọi đòn. | Nhịp chuẩn bị/tiếp xúc/thu không lẫn rìu. |
| Rìu | Động tác nén và tiếng bổ vật liệu. | Không tiếng kiếm leng keng chung cho mọi mục tiêu. |
| Giáo | Vút cán/mũi theo đâm, impact tập trung. | Không dùng âm quét rộng khi là đâm thẳng. |
| Chùy/khiên | Va đập chắc; block riêng khi có kết quả chặn. | Tạo shield/tăng giáp không tự phát tiếng block. |
| Cung | Kéo dây, nhả, mũi tên bay/trúng tùy cự ly nghe. | Nhả đạn khác trúng; không phát impact khi chưa va chạm. |
| Trượng/sách | Dấu chuẩn bị theo nghi thức, phát phép theo nguyên tố. | Lật sách không giống gõ trượng; phép không tất cả cùng tiếng điện. |

Đòn hụt, trúng thân, trúng giáp, bị chặn và miễn nhiễm có phản hồi khác khi kết quả đó tồn tại. Không thêm hệ block/accuracy chỉ để có tiếng. Animation marker phục vụ đồng bộ hình/âm; authoritative combat xác nhận sự kiện, không file âm tự kích damage. Hạn chế nghe lặp đúng một mẫu bằng biến thể có kiểm soát sau sản xuất, không đổi âm cảnh báo quan trọng đến khó nhận ra.

## 6. Nguyên tố và trạng thái

| Nhóm | Chất âm đề xuất |
|---|---|
| Hỏa/bỏng | Lửa bùng ngắn, than/tàn giòn; burn loop nhẹ hoặc pulse thưa, không một tiếng nổ mỗi tick. |
| Thủy/băng | Nước cuộn/giọt cho Thủy; tinh thể vỡ/sắc cho băng, không gom hai chất thành một. |
| Lôi | Phóng điện sắc ngắn có thân; tránh chuỗi chớp âm quá dày. |
| Thổ | Đá cọ/va/trượt theo khối; không giống rìu chặt gỗ. |
| Phong | Luồng khí và nét quét, giữ attack direction khi hữu ích. |
| Mộc | Gỗ mềm/rễ/lá có trọng lượng; heal thêm motif hồi phục nếu hồi thật. |
| Ánh Sáng | Hợp âm/chuông sáng ngắn, không mặc định tiếng hồi HP. |
| Bóng Tối | Âm rỗng/khuyết và chuyển động thấp vừa; không khiến không gian im lặng mất mọi cảnh báo. |
| Độc/chảy máu | Độc có chất lỏng/bọt, bleed có dấu cắt/trúng; không tiếng heal vì cùng icon dạng giọt. |

Hất tung có chuẩn bị nếu skill có, tiếng lực nâng và đáp; trói có dấu siết/rễ; choáng có cue nhận trạng thái ngắn. Không phát tiếng rên liên tục cho mọi tick/stack. Shield tạo/vỡ khác tăng giáp và giảm giáp/kháng. Cleanse/dispel chỉ phát khi kết quả thật; kháng/miễn có phản hồi UI nhỏ, không thắng âm cast boss.

Các debuff tồn tại lâu không bắt phải nghe một loop suốt thời hạn. Panel và icon giữ thông tin; âm nhấn lúc nhận, thay đổi đáng kể hoặc hết theo loại quan trọng.

## 7. Kỵ Sĩ, ngựa, cánh và triệu hồi

Móng ngựa thay theo vật liệu nền, nhịp theo clip di chuyển, không theo số frame render. Ngựa đứng có chuyển động/tiếng thở rất thưa, không hí mỗi vài giây trong thành đông. Giáp ngựa có tiếng kim loại nhẹ lúc chuyển động mạnh; không phát tất cả layer áo/người/ngựa như ba actor riêng.

Thánh Kỵ Sĩ dùng điểm chuông/thánh ngắn khi tiến hóa hoặc skill tương ứng; Hắc Kỵ Sĩ có chất phong ấn trầm. Cánh có tiếng theo họ ngựa và nhịp animation nhưng đồng đội được giảm trang trí theo ART-06. Nội tại cánh thường trực không phát fanfare lặp, không tạo tiếng bay báo quyền bay tự do chưa có.

Triệu hồi chiến đấu có cue spawn, lệnh quan trọng, đòn liên quan và biến mất; không mỗi pet một loop lớn. Pet mỹ phẩm thuộc nhóm trang trí, có thể giảm riêng mà không mất cảnh báo của đơn vị chiến đấu.

## 8. Quái, boss và tín ngưỡng

Mỗi họ quái có tiếng nhận diện, chuẩn bị tấn công và bị đánh/chết theo nhu cầu. Quái thường không chen tiếng cảnh báo boss; hạn chế nhiều tiếng đau trùng cùng lúc. Quái bay có chất cánh/di chuyển phù hợp, không stereo giả làm tín hiệu target nếu âm đó chỉ trang trí.

Boss skill nguy hiểm cần cue chuẩn bị nhất quán theo nhóm cơ chế và VFX/biểu tượng tương ứng. Thời gian cue đến hit dùng thời gian skill đã chốt; không kéo file ngắn/dài làm thay nhịp damage. Phase chuyển có tiếng rõ nhưng không che cast kế tiếp.

Tín ngưỡng dùng motif nhạc/nhạc cụ của tổ chức và nghi lễ trong lore đã viết. Âm sáng/tối không quy mọi tổ chức hay chủng tộc là thiện/ác. Chưa sáng tác bài thánh ca hoặc tạo lời nghi lễ mới khi hồ sơ phe chưa chốt. Thánh Kỵ Sĩ và Mục Sư có thể chung một nét motif nhưng vũ khí/cast khác nhau.

## 9. Giao diện và hỗ trợ hình ảnh

Mở/đóng cửa sổ, focus, xác nhận, từ chối, mua thành công, thiếu điều kiện, nhận quest, hoàn thành và tin nhắn có cue ngắn cùng họ chất liệu. Hover lướt nhiều ô không phát dồn; kéo icon có phản hồi thả hợp lệ/không hợp lệ. Không dùng tiếng thành công trước khi server xác nhận giao dịch.

Thông báo quan trọng có text/icon, ví dụ cast bị ngắt, cần ngựa, sai vũ khí, bị root, boss chuẩn bị đòn. Caption âm cảnh báo hiển thị nội dung/hướng khi gameplay cho phép, không mô tả nguồn ẩn sau tường làm lộ thông tin.

Tắt Master vẫn thấy telegraph, CC, kết quả giao dịch và quest. Phụ đề thoại có tên người nói; không dùng audio độc quyền để giấu manh mối truyện bắt buộc. Cỡ/chỗ đặt caption thuộc UI, không tự chồng lên hotbar hoặc ba icon đầu theo ART-06.

## 10. Không gian 2.5D và ưu tiên khi đông

Audio dùng vị trí thế giới và bề mặt thật, không screen.y. Nguồn trên cầu và dưới cầu có quan hệ không gian riêng; tường/khối che có chính sách occlusion sau mẫu, không hardcode câm hoàn toàn mọi nguồn bị mái che.

Xếp ưu tiên: cảnh báo liên quan và trạng thái khẩn của bản thân → kỹ năng bản thân/target và thông tin cứu đồng đội → đòn đồng đội gần → đám đông → trang trí. Boss đặt bom trên đồng đội vẫn là cảnh báo, không bị tắt vì Giảm âm đồng đội.

Các tiếng cùng họ có giới hạn đồng thời và chọn đại diện theo quan hệ/khoảng cách/sự kiện; số voice/distance/falloff chốt sau chọn pipeline và đo. Loại tiếng thừa không xóa event gameplay. Đổi camera không reset loop; entity hủy/chuyển vùng/thoát game phải dọn nguồn âm và khôi phục mix.

Nhạc, UI, âm không gian và âm cảnh báo có bus riêng để hạ nhạc khi cần; không hạ tất cả nền liên tục mỗi đòn thường. Không tuyên bố chống lag hay đủ nghe ở mọi thiết bị trước đo.

## 11. Phiếu và gói âm mẫu

Phiếu mỗi cue ghi mục đích, nguồn, event bắt đầu/dừng, loop, 2D/không gian, ưu tiên, biến thể, phụ đề/visual đi kèm, bus, version, file nguồn/xuất và bằng chứng quyền. Có bốn trạng thái Thiết kế/Sản xuất/Tích hợp/Kiểm chứng theo ART-08. Format sample rate/codec/streaming chốt sau thử pipeline web/PC, chưa chọn thông số tùy ý trong hồ sơ ngôn ngữ âm.

Gói đầu cho Lối Cầu Bình Minh: một loop khám phá mới, suối/gió, bước chân ba vật liệu, móng ngựa, một vũ khí và một phép, shield vỡ, root/hất tung, một boss warning thử cùng visual, bộ confirm/error UI. Chưa tạo các file này; không dùng lại âm thủ thành hoặc tải gói ngoài trong đợt thiết kế.

Nguồn tự sáng tác/thu mới hoặc đặt làm ghi hồ sơ tác giả/thỏa thuận; công cụ hỗ trợ ghi nguồn và quá trình. Không coi nhạc game tham khảo, bản cover hoặc file tìm thấy là được đưa vào phát hành. Xác minh điều khoản theo nguồn thực khi sản xuất; tài liệu này không kết luận pháp lý chung.

## 12. Tiêu chí kiểm chứng sau sản xuất

Nghe bằng tai nghe và loa, chế độ stereo/mono, nhạc lớn/nhỏ/tắt; xem caption khi Master tắt. Cảnh báo không biến mất ở preset gọn hoặc giữa tiếng ngựa/cánh/đám đông. Âm trúng đồng bộ kết quả, không nhân hit; loop nước/nhạc chuyển mượt; skip cinematic, death, reconnect và chuyển vùng không để tiếng mồ côi.

Đo mức âm, clipping, chênh loudness, tải bộ nhớ/streaming và cảm giác nghe theo thiết bị thực tế. Fixture 1/8/24 actor chỉ để so, chưa cap MMO. Chưa có kết quả đo hoặc file đã phối.

ART-09 hoàn thiện đặc tả ngôn ngữ âm trong phạm vi task; chưa sản xuất nhạc/SFX/thoại. Tổng **17/513 hoàn thiện thiết kế, 6 một phần, 490 chưa thiết kế**. Tiếp theo ART-10: mã asset, phiên bản, biến thể và luồng duyệt. ART-01/02/04 vẫn chờ scene mẫu 2.5D; thủ thành giữ nguyên.
