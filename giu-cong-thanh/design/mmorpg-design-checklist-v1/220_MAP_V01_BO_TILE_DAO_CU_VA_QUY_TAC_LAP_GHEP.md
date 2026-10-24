> **Đã vẽ cảnh mẫu Map 1 · 23/10/2026:** [Gói A / hồ sơ 221](221_MAP_V01_CANH_MAU_MY_THUAT_R001.md) · [Xem cảnh Trại–Suối–Cầu](/design-preview/v01-art-slice-r001/index.html). Một concept pixel có tỷ lệ tham chiếu, chưa tile native/scene engine. Cần làm rõ lối xuống suối, giảm mật độ cây/hoa sát đường và sửa guồng nước theo lore. Giữ 525=128/14/383.

# Bình Minh — Bộ tile, đạo cụ và quy tắc lắp ghép

**23/10/2026 · Thiết kế sản xuất hình ảnh, chưa vẽ bộ asset.** Tiếp nối [greybox 219](219_MAP_V01_GREYBOX_TUONG_TAC_R001.md). Chỉ Map 1 cấp 1–10, không thay thủ thành. [Trang tra cứu](/design-preview/v01-art-kit-r001/index.html).

## 1. Mục tiêu và giới hạn

Bình Minh phải đọc được như một nơi từng có đời sống: trại được dựng bằng vật liệu cứu từ làng, ruộng có bờ và mương, rừng có đường khai thác, sân chuông có đường vận chuyển đá. Dấu vết Đêm Gãy Ấn nằm trong công trình và đồ dùng, không phủ mọi bề mặt bằng hiệu ứng phép thuật.

Giữ sprite 2D pixel dáng trưởng thành theo mẫu đã chọn, đặt trong không gian 2.5D. Không chuyển sang tranh vẽ mịn hoặc nhân vật chibi. Không tái sử dụng asset thủ thành làm bộ MMORPG mặc định. Concept r002 là tham chiếu màu và cảm giác; sơ đồ r001 cùng greybox là nguồn đối chiếu đường đi.

Thiết kế này chưa xác nhận người chơi đã đi thử và duyệt bố trí. Không đổi footprint chỉ để vừa tranh đẹp. Camera, độ phân giải native và tỷ lệ tile phải qua một cảnh mẫu trước khi khóa sản xuất hàng loạt.

## 2. Hợp đồng hình ảnh và lớp hiển thị

| Thành phần | Quy tắc thiết kế | Điều cần kiểm ở cảnh mẫu |
|---|---|---|
| Nét pixel | Cụm pixel có chủ ý, viền rõ, bóng chia mảng; không blur/gradient mịn | Đọc được ở độ phóng đại nguyên và khi camera chạy |
| Ánh sáng | Tham chiếu ánh sáng trên-trái; bóng tiếp đất tách khỏi hình | Không có hai hướng bóng mâu thuẫn khi ghép |
| Nền | Tương phản thấp hơn nhân vật, vật tương tác và báo đòn | Đường đi rõ cả khi tắt nhãn |
| Cao độ | Mặt nền, mặt vách, mép và dốc là các phần riêng | Không dùng bóng vẽ để giả một bậc có thể đi |
| Cây | Gốc/rễ quyết định chân chặn; tán có lớp che khuất | Không lấy toàn bộ tán làm collision |
| Công trình | Nền, chân tường, thân, mái và đồ trước cửa tách lớp | Đi sau nhà không bị mái che mất hoàn toàn |
| Nước | Mặt nước, bờ, bọt và gợn tương tác tách lớp | Màu cùng đường bờ phân biệt được sâu/cạn |

Thứ tự khái niệm: nền → mép địa hình → vật thấp → thân/vật thể và actor theo điểm chân trên cùng bề mặt → mái/tán → VFX và UI. Cao độ bề mặt phải tham gia sắp xếp; không chỉ sort theo Y màn hình. Đây là hợp đồng cho engine, chưa chọn thuật toán render cuối.

## 3. Danh mục nền và mép ghép

| Mã họ | Nội dung | Biến thể cần vẽ | Quy tắc gameplay |
|---|---|---|---|
| BM-GRASS | Cỏ đồng bằng | Nền sạch, cỏ thưa, cỏ dày, vệt giẫm | Cỏ trang trí không tự chặn đường |
| BM-SOIL | Đất và đường mòn | Thẳng, góc, chữ T, giao bốn, cụt, mép rách | Đường không tự tăng tốc nếu chưa có cơ chế |
| BM-FARM | Ruộng và bờ | Luống, đất ẩm, bờ, góc mương, đầu luống | Bờ thấp là trang trí, hàng rào có footprint riêng |
| BM-ROCK | Nền đá sân chuông | Đá nguyên, mẻ, rêu và chỗ vá | Vết nứt không thành hố vô hình |
| BM-CLIFF | Vách và dốc | Mặt vách, đỉnh, chân, góc lồi/lõm, dốc nối | Vách chặn; chỉ dốc đã định nghĩa mới nối bề mặt |
| BM-WATER | Sông sâu và suối cạn | Lõi, bờ thẳng/cong, góc trong/ngoài, đầu dòng | Sông sâu không đi; suối cạn theo hệ số cấu hình |
| BM-CAVE | Hốc rễ và kho vôi | Nền khô, tường, chân tường, cửa, chỗ chuyển vật liệu | Không làm nền trơn hoặc độc nếu chưa thiết kế |
| BM-SEAL | Phó bản phong ấn | Nền đá cổ, mạch dẫn, nền đứt, ổ khóa, bệ | Ký hiệu cơ chế phải đọc khác vết nứt trang trí |

Mỗi họ chuyển tiếp cần đủ cạnh và góc, kể cả góc lõm. Chỉ phối cặp chuyển tiếp được phép: cỏ–đất, đất–ruộng, cỏ–đá, đất–bờ nước, đá–vách. Không yêu cầu mọi vật liệu nối trực tiếp với mọi vật liệu. Dùng lớp mép trung gian khi cần, tránh nhân số tile vô hạn.

Không phóng một mảng môi trường thành cả vùng. Ghép nhiều ô nhỏ rồi thêm cụm đá/cây có biến thể. Biến thể nền dùng seed cố định theo khu, không đổi ngẫu nhiên mỗi frame.

## 4. Bố trí mỹ thuật theo khu

| Khu | Ngoại hình và đạo cụ | Dấu vết lore | Giới hạn bố trí |
|---|---|---|---|
| Nhà Đèn / intro | Nhà gỗ mái ngói, bàn dụng cụ, đèn treo, giếng và cọc rào | Dấu sửa chữa của người cha; đồ gia đình dùng lại tại trại | Lớp riêng; không thêm NPC cư dân thứ 13 |
| Cầu Lau | Cầu gỗ thấp, cọc buộc dây, lau và đá lộ mặt | Dây cứu trợ còn mắc ở bờ | Không rải lau kín đầu cầu hoặc tạo lối vượt sông sâu mới |
| Trại Bình Minh | Lều vá, nhà tạm, bếp, kho, bàn ghi danh, quầy thuốc, xưởng | Ván mang vết sơn cũ của làng | Sáu NPC hub có lối tiếp cận, không chèn thùng vào khoảng tương tác |
| Ruộng phía Nam | Luống bỏ dở, xe kéo hỏng, mương cạn và bù nhìn | Công việc bị bỏ giữa vụ | Điểm mẫu M06 không lẫn với nông sản trang trí |
| Rừng Tây Bắc | Cây lá rộng, bụi thấp, gốc cắt, nấm và lán thợ rừng | Dấu đường cũ bị rễ lấn | Không tạo mê cung tán cây; giữ vòng đi theo sơ đồ |
| Trạm suối | Guồng nước nhỏ hỏng, máng, cọc đo và thùng mẫu | Nước mang cặn từ thượng nguồn | Phân biệt mẫu nhiệm vụ với thùng thường |
| Cầu Sỏi | Nhịp đá, trụ, lan can mẻ, bờ kè và đầu đường | Đá sửa mới khác đá cổ | Không vẽ đá bước chân gợi lối qua sông ngoài cầu |
| Sân Chuông Nứt | Nền cao, dốc, bệ chuông, nhà trực, dây kéo và đá vụn | Chuông còn nguyên biểu tượng nhưng bệ đã nứt | Khoảng chiến đấu không bị mảnh đá trang trí chặn bất ngờ |
| Hốc Rễ | Đất ẩm, rễ lớn, dụng cụ cũ và vết khắc | Dấu người trú tạm | Ba khoang, không thêm boss |
| Kho Vôi | Tường đá sáng, bao vôi, giàn gỗ và rãnh xe | Dấu ghi sổ thợ chuông | Ba khoang, không thêm boss |
| Hầm Phong Ấn | Đá cổ tối vừa phải, mạch ấn và trạm kiểm khóa | P3 lưu hồ sơ; P6 trả lời cơ chế cổng | Sáu phòng, một Oren; không gộp với boss ngoài map |

Map tân thủ không có quái bay. Cảnh động không dùng chim hoặc côn trùng bay để lách quy tắc này; dùng lá, gợn nước và cỏ rung.

## 5. Công trình và đối tượng tương tác

Mỗi prefab có ID, hình native, pivot chân, bounds hình, footprint chân, surface ID, lớp mái/tán, vùng tương tác và cờ trang trí. Bounds hình không dùng thay footprint. Bản xoay/lật phải kiểm lại cửa và biển, không lật chữ hoặc biểu tượng lore.

Nhà và mái giữ cùng tỷ lệ với nhân vật ở mọi vị trí. Tán/mái cản nhìn nhân vật được giảm che theo vùng có chuyển mềm; nền vẫn còn bóng hoặc đường viền nhận diện. Không tắt toàn bộ khu rừng khi một nhân vật đi sau cây. Không dùng fade để chữa sai collision.

Tương tác F theo thiết kế hiện hành; vật có thể tương tác có phản hồi hover/gần nhưng không sáng liên tục như đồ hiếm. Màu là tín hiệu phụ, luôn có hình/ký hiệu và lời nhắc. Không chốt thêm phím tắt hoặc khoảng tương tác game từ các giá trị prototype.

## 6. Chuyển động môi trường và thời tiết

- Cây tách thân và tán; tán rung nhẹ quanh điểm bám, thân/gốc đứng yên. Các cụm lệch pha, không cùng nghiêng như một tấm vải.
- Cỏ có chuyển động ngắn theo gió, tránh phủ hiệu ứng lên toàn màn. Gợn suối theo dòng; mặt sông sâu rộng và tối hơn nhưng vẫn đọc rõ bờ.
- Mưa/sương/ngày đêm theo hệ thời gian thiết kế chung, chưa chốt lịch mới. Có trạng thái giảm hiệu ứng cho web và người nhạy chuyển động.
- Thời tiết không tự đổi collision, mở đường sông hoặc khiến cửa nhiệm vụ bị khóa. Nếu sau này có nước dâng phải thiết kế riêng.
- Vùng Oren và sân boss cần giữ tương phản telegraph. Bụi, lá và sương giảm ở nền giao chiến; không đổi chỉ số combat bằng art.

## 7. Gói vẽ đầu tiên — một lát cắt, không vẽ toàn map ngay

Chọn **Trại Bình Minh → Trạm Suối → Cầu Sỏi**: có đất/cỏ, công trình, cây, nước cạn/sâu, cầu và NPC để kiểm cùng phong cách. Đây là đường lấy mẫu art, không thay thứ tự nhiệm vụ.

| Thứ tự | Gói bàn giao | Điều kiện trước khi sang bước tiếp |
|---|---|---|
| A | Bảng màu, tỷ lệ actor–nhà–cây và một cảnh mẫu | Không quá cầu kỳ/chibi; thấy rõ nhân vật và đường đi |
| B | Một họ cỏ/đất, bờ sâu/cạn và mô-đun cầu | Ghép cạnh/góc không hở, đường bờ khớp chân chặn |
| C | Một nhà trại, một cây, quầy thuốc và cọc chỉ đường | Pivot, mái/tán, vùng F không xung đột |
| D | Cỏ rung, nước, tán cây và bản giảm hiệu ứng | Không rung chân nhà/cây, không che người chơi |
| E | Lắp vào scene camera thực và thử ba thân | Chạy/đứng không nhấp pixel, đúng bề mặt và không kẹt |

Chưa khóa kích thước tile hoặc số frame bằng suy đoán từ PNG concept. Sau A/E ghi lựa chọn native, zoom, camera profile và giới hạn atlas vào manifest. Bộ ảnh sinh bằng AI nếu có chỉ là nguồn cần chuẩn hóa, không tự được coi là atlas đã khít cạnh.

## 8. Checklist nghiệm thu và trạng thái

- [x] Mô tả họ vật liệu, vai trò từng khu và quy tắc ghép.
- [x] Tách collision, hình, cao độ, tương tác và che khuất trong đặc tả.
- [x] Chốt lát cắt đầu tiên và thứ tự vẽ/lắp kiểm.
- [ ] Đi thử thủ công greybox và ghi chỗ chật/xa/che; sửa bố trí nếu cần.
- [ ] Vẽ bảng art A; đối chiếu mẫu người dùng và chốt tỷ lệ.
- [ ] Vẽ, chuẩn hóa và kiểm cạnh tile B; không cắt concept thành tile giả.
- [ ] Xuất prefab C kèm metadata; thử cây/nhà tại đầu cầu và NPC.
- [ ] Làm chuyển động D và thử scene camera E trên web/PC.
- [ ] Chỉ sau lát cắt đạt mới nhân bộ asset ra các khu còn lại.

**Chưa vẽ asset mới trong mục này, chưa tích hợp game.** MAP-01 vẫn một phần; không tự đánh hoàn thành ART-04 hay NPC-04. Giữ **525 mục: 128 hoàn thiện / 14 một phần / 383 chưa thiết kế**. Bước kế tiếp là bảng art lát cắt A; việc sản xuất tile phụ thuộc kết quả cảnh mẫu và kiểm bố trí.
