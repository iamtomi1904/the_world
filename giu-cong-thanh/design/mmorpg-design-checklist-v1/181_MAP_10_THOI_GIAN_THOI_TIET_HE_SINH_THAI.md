> **Đồng bộ bản đồ phe/bang ·22/10/2026:** [Phụ lục187](187_MAP_DONG_BO_PHE_BANG_HOI_VA_W06.md) nối W06/đại bản doanh/nhàbang/arena vào địa lý, khí hậu và luật vùng; sửa phạm vi6vùng ngoài trời, không PKnămPvEcũ. Giữ525mục:119hoànthiện/11mộtphần/395chưathiếtkế; chưa vẽ/code. Các phạm vi cũ bên dưới là lịch sử khi xung đột.

# MAP-10 — Thời gian, thời tiết và hệ sinh thái sống

Ngày 22/10/2026. Thiết kế MMORPG Ẩn Thành, web/PC, pixel V4 trong thế giới 2.5D. Chưa code, chưa vẽ asset, không thay thủ thành. Liên quan MAP-04/10/12, ENV-01/03/04/06/07, ART-04/06/09.

## 1. Nguyên tắc

Map được ghép nhiều module đất, bờ, cây và vật thể đúng tỷ lệ; không kéo lớn một vệt biome. Mỗi map có hồ sơ khí hậu, địa chất, nguồn nước, thảm thực vật, động vật, sinh kế và dấu vết cốt truyện. Phân vùng nhỏ trong cùng map có thể khác nhau nhưng phải có nguyên nhân: độ cao, bóng núi, sông, khai thác hoặc phong ấn.

Thời tiết vận động liên tục theo giờ trong game, không đổi ngẫu nhiên mỗi frame. Phân biệt khí hậu nền, thời tiết hiện tại và dị tượng do cốt truyện. Mưa bình thường không tự tạo sát thương; không cho toàn bộ vùng đổi khí hậu chỉ vì một người hoàn thành nhiệm vụ riêng.

## 2. Đồng hồ và chuyển thời tiết

Chốt thiết kế ban đầu, toàn bộ giá trị đặt trong cấu hình để thử nghiệm: một ngày game dài 180 phút thực. Bình minh 05–07, ban ngày 07–17, hoàng hôn 17–19, ban đêm 19–05 giờ game; ánh sáng chuyển liên tục, không bật tắt theo ranh giờ. Đêm vẫn đọc được đường, quái và cảnh báo; không bắt mua đèn mới chơi được.

Một epoch chung do server quản lý cho toàn thế giới; web/PC và các channel cùng lịch trời nền. Dự báo mỗi vùng dùng seed vùng + khoảng thời gian; mây/mưa giữa hai vùng không bắt buộc giống nhau. Đổi channel không quay lại thời tiết để farm. Khi restart, suy ra trạng thái từ mốc thời gian đã lưu, không tạo bão mới theo từng người đăng nhập.

Một trạng thái thời tiết giữ 15–35 phút thực; chuyển 60–120 giây. Đây là giá trị thử trong cấu hình, không phải cam kết thông số runtime. Mỗi vùng có đồ thị chuyển: quang → mây → mưa → mưa nhẹ → quang; bão cần đi qua mây/mưa, không từ trời trong bật sét tức thì. Gió nhẹ có thể thay đổi trong một trạng thái; mưa không bắt buộc xuất hiện mỗi chu kỳ. Không có tuyết ở nơi nóng nếu thiếu nguyên nhân cốt truyện rõ ràng.

Đồng bộ các kênh hình/âm: mây kéo đến, giảm sáng vừa phải, gió tăng, tiếng lá, giọt mưa, gợn nước, đất ẩm, rồi giảm dần. Mái nhà/vách hang chặn mưa trong vùng có mái; người trong nhà vẫn nghe mưa xa. Sấm có độ trễ sau chớp nhưng tắt flash không làm mất cảnh báo nguy hiểm. Không có sét ngẫu nhiên gây chết; sét gameplay cần vùng báo trước riêng.

## 3. Hồ sơ năm vùng theo cốt truyện

| Vùng | Cây, cỏ và vật thể | Nước | Thời tiết và ý nghĩa truyện |
|---|---|---|---|
| V01 Thung Lũng Bình Minh, ngoại vi Ẩn Thành | Cây lá rộng tán tròn, liễu nhỏ ven suối, cỏ đồng thấp, lau mép nước; vườn, gốc bị chặt và cây cháy cục bộ gần dấu Đêm Gãy Ấn | Suối xanh lam ngọc nhạt nhìn thấy sỏi; sông chính xanh đậm, có cầu | Nắng dịu, mây, mưa nhẹ, sương sáng mỏng; cảm giác cộng đồng đang phục hồi. Không bão sát thương, không quái bay kể cả khi gió mạnh |
| V02 Tuyến Valedorn, hạ lưu Merrowen | Liễu, dương ven bờ, lau sậy, cỏ bãi bồi; cọc neo, xe hàng và bến cứu trợ | Xanh lục nâu do phù sa, cạn ở bãi bồi; luồng tàu sâu đọc được bằng bờ và dòng chảy | Mưa dài, mây thấp, sương sông; dấu mực nước trên kho gắn việc đứt tuyến vận chuyển |
| V03 Biên rừng Sylvaris, đường hành hương Aurelia | Cây cổ thụ rễ nổi, dương xỉ, rêu, hoa nhỏ; khoảng rừng bị khai thác đối lập vùng bảo tồn | Nguồn xanh ngọc trong; đoạn tổn thương phong ấn chuyển tím xám cục bộ có cảnh báo | Mưa tán rừng, tia nắng, gió nhẹ dưới tán nhưng mạnh ở khoảng trống; cây bệnh và nước đổi màu là manh mối, không coi cả rừng đã tha hóa |
| V04 Vành đai Nocthollow, cao địa Astravelle | Thông ở cao địa, cỏ bạc thấp, cây khô xen cây sống ở vùng đất tổn thương; đá và phế tích có dấu thí nghiệm | Hồ xanh thép, suối lạnh; vũng nhiễm xám tím giới hạn quanh nguồn thải | Sương, gió lạnh, mưa lạnh; tuyết chỉ ở tiểu vùng cao đủ điều kiện. Cảnh quan giúp phân biệt khí hậu tự nhiên với tác hại thí nghiệm |
| V05 Tiền tuyến ấn cổ, lối Sahr Kareth | Cây bụi chịu hạn, cỏ cứng, rễ bám khe đá; cây sống quanh mạch nước và trại, không biến cả vùng thành sa mạc trống | Giếng/mạch xanh sẫm; vệt nước tro xám gần điểm neo hỏng, không mặc định mọi nước là dung nham | Khô, gió bụi, mưa hiếm; dị tượng tro/ánh ấn cục bộ báo nguy cơ gãy ấn. Dị tượng cần sự kiện chung hoặc cảnh riêng |

Đây là hướng mỹ thuật mới cần ghi vào hồ sơ vùng, không khẳng định tên loài mới là lịch sử đã tồn tại. Khi viết nhiệm vụ phải đối chiếu niên biểu và nguồn gây ô nhiễm. Các nhánh đường nối có dải chuyển cây, cỏ và màu đất, không ranh màu thẳng như đổi texture.

## 4. Gió làm rung cây cỏ

Gốc/thân dưới cố định; tán và cành nhỏ có điểm neo, phần trên lệch nhiều hơn. Cỏ uốn từ gốc, lau ven nước có nhịp khác bụi cứng; không rung đá, tường, rương hoặc bóng gốc. Một cơn gió có hướng chung và đợt mạnh/yếu; mỗi cây lệch pha theo vị trí để có làn gió lướt qua rừng, không cùng lắc như máy.

Hướng art dùng layer tán/thân hoặc mask trọng số theo chiều cao; thử shader biến dạng lượng nhỏ có bước pixel, dùng animation tán riêng khi shader làm nhòe pixel. Không scale cả sprite, không warp thân người đứng dưới cây, không tự thay collider hoặc vị trí tài nguyên. Hiệu ứng cục bộ kỹ năng có ưu tiên riêng, không làm hỏng trạng thái gió nền.

Mức thấp giảm lá rơi/cỏ phụ và dùng ít biến thể tán; mức cao thêm đợt gió, bụi/lá và phản hồi nước. Các mức giữ nguyên thông tin gameplay. Tán che nhân vật sẽ mờ/dither theo quy tắc 2.5D; bóng và layer VFX không che dấu nguy hiểm mặt đất. Tán cây có khoảng trống canvas đủ cho biên độ lắc.

## 5. Xuống nước và độ sâu

| Loại | Quy tắc bản đầu | Hình và âm nhận biết |
|---|---|---|
| Nước trang trí | Ngoài vùng đi lại; không tạo lối giả | Bờ/vách rõ, không vẽ bậc dẫn xuống nếu không tương tác |
| Suối cạn / bãi lội | Đi bộ được; giảm tốc 10% là cấu hình thử; không bơi | Sỏi/đáy hiện, gợn quanh chân, bước nước, phần chân bị lớp nước che đúng độ sâu |
| Nước sâu | Không xuống trong bản đầu; qua cầu, bến hoặc tuyến thuyền đã thiết kế | Đáy mất dần, mép sâu và dòng chảy rõ; icon/mô tả khi đến gần. Không chỉ dùng màu xanh đậm |
| Nước nhiễm độc / cực lạnh | Độ sâu và nguy hiểm là hai thuộc tính riêng; chỉ có hiệu ứng được ENV-04 chốt | Hạt/motif độc hoặc băng, tooltip và vùng cảnh báo; không gây sát thương vì màu tím đơn thuần |

Chưa mở bơi, lặn, oxy hay thú cưỡi thủy sinh. Ngựa có thể đi chỗ cạn hợp lệ; không tăng độ sâu được đi chỉ vì thân cao. Ngựa mọc cánh của Kỵ Sĩ không cho vượt sông sâu. Mọi race có cùng quyền đường đi, không cho Người Lùn mất lối vì thấp hơn. Lướt/knockback không vượt biên nước sâu; xử lý dừng ở mép theo quy tắc di chuyển chung.

Mưa chỉ làm tăng ướt/gợn/âm trong bản đầu, không đổi collider sông hoặc làm ngập đường nhiệm vụ. Lũ/thủy triều có đường đi thay đổi là tính năng tương lai cần cơ chế cứu kẹt riêng. Nước lội dùng một hiệu ứng tập trung, không cộng chồng mỗi ô; nếu có nhiều giảm tốc, tuân chính sách COMBAT hiện hành, không cộng thêm công thức tại tài liệu này.

## 6. Tác động gameplay, truyện và giao diện

- Thời tiết thường chỉ đổi cảnh/âm và nhịp sinh hoạt minh họa; không tự cộng dame, giảm chính xác, buff quái bay hoặc tăng rơi đồ. Mọi tác động chiến đấu cần cấu hình và icon rõ trong ENV-04; không áp dụng luật môi trường thủ thành sang MMO.
- Sinh cảnh quyết định quái/tài nguyên; lịch đêm/mưa có thể đổi sinh hoạt hoặc mở biến thể tùy chọn. Nhiệm vụ chính luôn có cách tiếp tục solo, không phải đợi đúng ngày game. NPC dịch vụ thiết yếu luôn có điểm tiếp cận hoặc người thay ca.
- Một người chữa nguồn nước chỉ thấy phản hồi nhiệm vụ cá nhân tại cảnh riêng hoặc lớp truyện, không âm thầm đổi nước và va chạm của người khác. Thay đổi cộng đồng cần sự kiện chung có lịch và trạng thái server.
- HUD gần minimap: giờ game, icon trời và hướng gió nhỏ; rê chuột xem mô tả và dự báo gần, không thêm thanh lớn che màn. Không tự chiếm phím 1–9/Q/E/R/Z, WASD, T, Esc hoặc ~; mở chi tiết từ bản đồ.
- Có tùy chọn giảm rung cây, mật độ mưa, chớp sáng và âm sấm. Vẫn giữ biểu tượng thời tiết/cảnh báo gameplay và đường đi. Không dùng sương để giấu telegraph boss hoặc rương tương tác.

## 7. Danh mục cần vẽ và triển khai sau

Mỗi vùng cần sheet riêng: cây trưởng thành/cây non/cây tổn thương, bụi, cỏ thấp/cao, rêu/lau nếu phù hợp; các biến thể hình tránh lặp. Mỗi cây có thân, tán, mask gió, vùng che khuất, shadow và collider tham chiếu. Mỗi bộ nước có bờ/góc/chuyển cạn-sâu, nền đáy, mặt nước loop, gợn bước, dải phản chiếu và icon cảnh báo. Có palette sáng/chiều/đêm/mưa nhưng không đổi màu nhận diện quan hệ hoặc danger.

Chưa sản xuất bất kỳ sheet nào trong yêu cầu này. ENV-03 và ENV-06 mới một phần: còn atlas/module, số lượng biến thể từng loài, kích thước/pivot, âm thanh thật và thử camera/collision; không ghi hoàn thiện hai task đó.

## 8. Kiểm duyệt trước khi tích hợp

- Đọc diễn thử chu kỳ ngày/đêm và từng cạnh đồ thị thời tiết; không chuyển gắt, không kết thúc sự kiện bằng việc relog.
- Hai người cùng tọa độ, khác client và channel có lịch nền nhất quán; vào lại sau restart đúng mốc.
- Tán có gió nhưng thân/gốc/bóng gốc không trượt; cây không cắt mép texture, pixel không nhòe khi camera dịch.
- Cây đúng sinh cảnh, mép biome chuyển hợp lý; rừng không trống, lối đi không bị vật trang trí chặn sai.
- Ba race, ngựa, lướt và knockback đều đúng quyền nước; lội có gợn chân, sâu không lọt, mưa không kẹt đường.
- Thử ban đêm/mưa/sương trên web/PC với cảnh đông; đo frame time và bộ nhớ trước/sau, đặt ngân sách sau benchmark thật.
- Kiểm truyện chính không khóa giờ, V01 không có quái bay, cảnh cá nhân không sửa map chung.

Kết quả hiện tại là hồ sơ thiết kế, chưa có kiểm thử runtime hoặc số FPS thực tế. MAP-10 hoàn thiện hồ sơ; ENV-03/06 một phần. Tổng sau cập nhật: **115 hoàn thiện hồ sơ / 10 một phần / 388 chưa thiết kế = 513**.

Nguồn: [phạm vi năm vùng](15_PROD_06_PHAM_VI_VA_NGAN_SACH.md), [hướng 2.5D](36_DINH_HUONG_2_5D_VA_RA_SOAT_MY_THUAT.md), [checklist môi trường](02_THE_GIOI_MY_THUAT_NHIEM_VU.md).
