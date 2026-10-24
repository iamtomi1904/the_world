# PROD-03 — Vòng chơi và mục tiêu dài hạn

> **THAY ĐỔI HỆ NHÂN VẬT — 20/10/2026:** [Khung chủng tộc/nghề/trang bị mới](28_HE_CHUNG_TOC_CHUC_NGHIEP_TRANG_BI.md) thay mô tả cũ khi xung đột: tạo Con Người/Elf/Người Lùn, cấp 15 chọn nghề, cấp 30 chọn nhánh theo race. Trang bị/vũ khí kiểm quyền nghề/nhánh; hình riêng không đổi chỉ số món. Không còn chọn ba class cố định lúc tạo hoặc quy tắc mọi race chọn mọi nhánh.


**Phiên bản:** 1.0 · **Ngày:** 20/10/2026  
**Mốc:** M0 · **Trạng thái:** Đã hoàn thiện thiết kế V1 trong phạm vi mục; chưa triển khai.
**Người soạn:** Trợ lý thiết kế · **Người duyệt:** Chủ dự án.  
**Đầu vào:** [PROD-01](10_PROD_01_NGUOI_CHOI_VA_TRAI_NGHIEM.md), [PROD-02](11_PROD_02_NEN_TANG_WEB_PC.md), bộ cốt truyện. Hai hồ sơ trước chưa tự động được duyệt khi soạn mục này.

## 1. Mục tiêu

Thiết kế để mỗi lần chơi đều có một kết quả đáng nhớ: hiểu thêm chuyện thế giới, cải thiện nhân vật, khám phá địa điểm hoặc cùng người khác vượt thử thách. Người chơi biết mình đang làm gì, có thể dừng ở đâu và tiếp tục thế nào.

**Đã chốt:** bản đầu web và client PC, PostgreSQL, dữ liệu nhân vật phải lưu bền vững. Truyện chính có đường solo; MMORPG tách tiến trình thủ thành.

**Đề xuất V1:** vòng chơi lấy khám phá và PvE làm lõi, phát triển nhân vật làm động lực nối phiên, cộng đồng là cơ hội mở rộng trải nghiệm. Không bắt người chơi làm đủ danh sách hằng ngày để được tiếp tục truyện.

## 2. Vòng chơi cốt lõi

**Chọn mục tiêu → chuẩn bị → khám phá/giao chiến → nhận kết quả → cải thiện nhân vật → chọn mục tiêu kế tiếp hoặc nghỉ.**

| Bước | Người chơi làm gì | Phản hồi bắt buộc | Hồ sơ liên quan |
|---|---|---|---|
| Chọn mục tiêu | Theo truyện, khám phá dấu vết, kiếm món cần dùng hoặc tham gia nhóm. | Nhật ký/bản đồ nêu nơi, lý do và điều kiện; phân biệt bắt buộc/tùy chọn. | QUEST/MAP/UI |
| Chuẩn bị | Xem skill, trang bị, túi, vật phẩm tiêu thụ và thông tin nguy hiểm. | So sánh hữu ích, yêu cầu rõ; không phải vào nhiều hệ phụ chỉ để bắt đầu. | SKILL/GEAR/ITEM |
| Hành động | Di chuyển, tương tác, đọc dấu vết, chiến đấu hoặc giải tình huống. | Đòn đánh, mục tiêu, trạng thái và tín hiệu môi trường dễ đọc. | COMBAT/ENV/NPC |
| Nhận kết quả | Nhận thông tin truyện, XP, đồ hoặc thay đổi quan hệ theo hoạt động. | Hiện điều đã được server công nhận; phần thưởng đang chờ không hiển thị như đã sở hữu. | QUEST/LOOT/DATA |
| Cải thiện | Mặc đồ, học hoặc đổi lựa chọn được phép, chuẩn bị hướng tiếp. | Hiểu thay đổi; công thức, phí và giới hạn do các hồ sơ chuyên môn quyết định. | STAT/LEVEL/ECON |
| Tiếp tục/nghỉ | Đi nhánh mới, chơi cùng bạn hoặc dừng ở điểm phù hợp. | Hiện tiến độ, mục tiêu còn lại và trạng thái đang lưu nếu có; không bắt hoàn tất cả chuỗi. | FLOW/ACC/DATA |

Không phải mọi vòng đều phải trả vật phẩm hoặc tăng sức mạnh. Một khám phá có thông tin mới và phản hồi cụ thể cũng là kết quả hợp lệ. Hoạt động lặp không được vô tình phát lại phần thưởng nhiệm vụ một lần.

## 3. Ba quy mô phiên chơi

Đề xuất dải thời gian dưới đây để định hướng nhịp nội dung, không phải thời hạn, điều kiện nhận thưởng hoặc số liệu đã kiểm chứng. Người chơi có thể hoàn thành chậm hơn; các mốc sẽ được điều chỉnh sau bản mẫu.

| Quy mô | Dải tham chiếu đề xuất | Gói hoạt động | Điểm dừng có ý nghĩa |
|---|---|---|---|
| Phiên ngắn | 10–20 phút | Một bước nhiệm vụ, một điểm khám phá hoặc một mục tiêu kiếm nguyên liệu nhỏ có đường về. | Một kết quả đã công nhận; biết bước tiếp theo, không buộc mở dungeon. |
| Phiên vừa | 30–45 phút | Một cụm nhiệm vụ liên quan, khám phá khu phụ và quay lại NPC; hoặc cùng bạn làm một mục tiêu nhóm nhỏ. | Một câu chuyện nhỏ khép lại hoặc một thay đổi trang bị có ích. |
| Phiên dài | 60–90 phút | Chuẩn bị, đi tuyến khám phá, dungeon hoặc thử thách nhóm, rồi xử lý kết quả. | Có kết thúc hoạt động, phân thưởng rõ, đường quay lại và mục tiêu tương lai. |

Không chia truyện thành đoạn dài bắt buộc không thể nghỉ. Dungeon và nội dung nhóm phải công bố mức cam kết thời gian dự kiến; checkpoint cụ thể thuộc hồ sơ dungeon và DATA. Không hứa tạm dừng trận online cho cả thế giới.

## 4. Một phiên ngắn mẫu — dấu vết ngoài nơi trú ẩn

1. Đăng nhập, thấy mục tiêu đang theo dõi và bước đã hoàn tất trước đó.
2. Chọn một nhánh cứu trợ/điều tra ở ngoại vi thay vì vào dungeon.
3. Nói chuyện nhân chứng, tìm dấu vết và vượt một cuộc giao chiến ngắn phù hợp tiến trình.
4. Có thể quay về sau một bước đã công nhận; không cần làm xong cả tuyến để lưu thông tin vừa tìm được.
5. Nếu hoàn tất nhiệm vụ, server ghi nhận điều kiện, trao thưởng một lần và hiển thị kết quả. Tùy nhiệm vụ, lựa chọn được phản hồi tại NPC/nơi trú ẩn.
6. Người chơi xem món nhận được, quyết định dùng hay giữ rồi nghỉ.

Đây là mẫu nhịp, không tự tạo quest chính thức hoặc đặt phần thưởng mới. Dùng nhiệm vụ đã có trong hồ sơ cấp 1–10 khi triển khai chi tiết.

## 5. Một phiên dài mẫu — Hầm Phong Ấn Cổ

1. Chọn điều tra hầm khi đã có đầu mối hợp lệ; UI nêu đường truyện solo và lựa chọn đi cùng người khác nếu nội dung hỗ trợ.
2. Chuẩn bị skill, túi và vật phẩm; chưa có nghĩa phải mua đồ hoặc nâng hệ phụ mới được vào.
3. Khám phá kiến trúc và dấu vết, hiểu vai trò Kẻ Canh Cổng trước cuộc đối đầu.
4. Tiến qua các đoạn có kết quả/checkpoint được định nghĩa; khi thất bại không xóa những kết quả đã được quy định là bền vững.
5. Giải quyết boss theo phương án hợp lệ của hồ sơ dungeon. Kết quả cá nhân và thưởng được ghi nhận nhất quán.
6. Quay lại nơi an toàn, xem phản hồi và đầu mối Tu Viện Tro Trắng; có thể nghỉ hoặc đi tiếp.

Không coi dungeon luôn giữ nguyên mọi con quái sau khi thoát. Hồ sơ dungeon phải phân biệt checkpoint truyện, trạng thái instance, thời hạn bảo lưu và quy tắc chơi lại. PROD-03 chỉ yêu cầu các ranh giới đó phải rõ.

## 6. Nhịp mở đầu và mở hệ thống

| Nhịp trải nghiệm | Việc người chơi cần hiểu | Chưa nên đưa cùng lúc |
|---|---|---|
| Đời sống trước biến cố | Di chuyển, tương tác, nhân vật và nơi chốn đáng quan tâm. | Toàn bộ menu phát triển, bảng chỉ số dài. |
| Đêm Gãy Ấn | Đánh/né hoặc phản ứng theo combat đã chọn, cứu trợ, mục tiêu ngắn. | Rèn/khảm/chợ và chuỗi hướng dẫn không liên quan nguy hiểm trước mắt. |
| Nơi trú ẩn | Tiến độ đã lưu, túi/trang bị, nhật ký, định hướng điều tra. | Đồng loạt tu luyện, khai mạch, tín ngưỡng, cánh. |
| Vùng mở đầu | Khám phá tự chọn, nâng cấp dễ hiểu, sinh vật có chỗ ở và người chơi khác. | Ép party, PvP bắt buộc hoặc quá nhiều loại tiền. |
| Dungeon đầu | Đọc dấu hiệu, chuẩn bị, xử lý thất bại và kết thúc một tuyến truyện nhỏ. | Manh mối bắt buộc khóa sau raid. |
| Sau tuyến cấp 1–10 | Mục tiêu mới về truyện, class/build hoặc cộng đồng theo phạm vi được duyệt. | Tự mở mọi hệ mở rộng khi chưa có hồ sơ cân bằng. |

Đây là thứ tự giới thiệu, chưa chốt cấp mở khóa của từng chức năng. Điều kiện cụ thể phải do LEVEL/QUEST và hồ sơ hệ thống quyết định cùng nhau.

## 7. Bốn tầng mục tiêu

| Tầng | Ví dụ mục tiêu | Cách trình bày | Điều cần tránh |
|---|---|---|---|
| Ngay lúc này | Tìm người mất tích, vượt đoạn đường, xử lý mối nguy đang thấy. | Một mục tiêu theo dõi chính; thao tác và địa điểm đủ rõ. | Chỉ đường che mất khả năng quan sát hoặc yêu cầu đọc lịch sử dài. |
| Trong vài phiên | Hoàn tất cụm truyện, hiểu một class, kiếm món phù hợp, khám phá khu phụ. | Nhật ký tóm tắt, liên kết các đầu mối và lý do quay lại. | Chỉ kéo dài bằng số lượng quái hoặc vật phẩm cần nhặt. |
| Trong một hồi | Giải đáp một bí ẩn, kết nối phe/NPC, chọn hướng build và chinh phục dungeon. | Mốc truyện có phản hồi, mục tiêu sức mạnh có nguồn rõ. | Mỗi hồi chỉ mở thêm câu hỏi mà không trả lời gì. |
| Dài hạn | Hoàn tất sáu hồi, thử build, sưu tầm, tham gia guild/nghề/nội dung nhóm theo bản mở rộng. | Danh mục mục tiêu đã mở và nội dung tương lai tách biệt. | Quảng bá mọi hệ tương lai như đã có trong bản đầu. |

Mục tiêu dài hạn không đồng nghĩa sức mạnh tăng vô hạn. Trần cấp, tỷ trọng nguồn sức mạnh và mùa/bản mở rộng vẫn chờ PROD-04/08 và ECON.

## 8. Chơi solo và cùng nhóm

**Solo:** mọi bước thông tin bắt buộc của truyện có đường hoàn thành một mình. Nhiệm vụ phụ có thể khuyến khích phối hợp, nhưng không âm thầm trở thành điều kiện khóa truyện. Người chơi hỗ trợ/tank phải có khả năng hoàn thành lộ trình truyện theo thiết kế class, không bị ép chọn class khác.

**Nhóm:** chọn mục tiêu chung trước khi bắt đầu; hiển thị ai đủ điều kiện và ai đang hỗ trợ. Quyết định truyện không lấy phiếu số đông để ghi đè mọi nhân vật. Thưởng không mặc định chia đều, roll hay loot riêng tại mục này; PARTY/LOOT phải chốt cơ chế trước khi duyệt hoạt động nhóm.

**Khác tiến độ:** manh mối/cảnh riêng của chủ tiến trình có thể được trải nghiệm cùng người hỗ trợ nếu cho phép. Người hỗ trợ không tự nhận thưởng một lần lần nữa. Nếu nội dung chưa hỗ trợ ghép tiến độ, UI giải thích và đưa lựa chọn hoạt động chung khác.

**Rời nhóm/rớt mạng:** không tự chuyển quyền sở hữu vật phẩm hoặc quyết định truyện. Checkpoint được công nhận giữ theo chính sách nhiệm vụ; trạng thái lượt chiến/instance xử lý theo quy tắc riêng đã công bố.

## 9. Dữ liệu nhân vật và điểm lưu

**Ràng buộc đã xác nhận:** nhân vật phải lưu dữ liệu bền vững trong PostgreSQL qua backend. Web và PC không dùng file cục bộ làm nguồn sự thật. Các bảng/transaction cụ thể thuộc DATA; bảng sau mô tả sự kiện nghiệp vụ cần được thiết kế.

| Sự kiện | Dữ liệu/kết quả cần giữ | Yêu cầu nhất quán |
|---|---|---|
| Tạo nhân vật | Danh tính, chủ account/server, lựa chọn ngoại hình/class hợp lệ. | Không tạo trùng do gửi lại yêu cầu; chỉ báo thành công khi server xác nhận. |
| Nhận XP/lên cấp/học skill | Tiến trình và điểm đã cấp/tiêu. | Không cấp điểm hai lần hoặc lưu skill mà chưa trừ tài nguyên. |
| Nhận vật phẩm/tiền | Tài sản, nguồn nhận, điều kiện và lịch sử cần thiết. | Kết quả quan trọng được lưu nguyên tử trước thông báo sở hữu; retry không nhân đôi. |
| Hoàn tất mục tiêu/lựa chọn | Cờ nhiệm vụ, quyết định cá nhân, quyền thưởng. | Phân biệt bước hoàn tất với thưởng đã nhận; không tạo trạng thái thưởng không có quyền nhận. |
| Mặc đồ/nâng cấp/giao dịch | Vị trí đồ, dòng/chỉ số hợp lệ, phí, kết quả và bên sở hữu. | Thay đổi liên quan thành công hoặc thất bại cùng nhau; không tin kết quả client. |
| Di chuyển/chuyển vùng | Vị trí hợp lệ hoặc điểm phục hồi, vùng và checkpoint liên quan. | Lưu theo nhịp/mốc của DATA; không ghi mỗi frame hoặc đảm bảo trở lại chính xác từng pixel. |
| Chết/hồi sinh | Trạng thái và hệ quả được COMBAT/ITEM quy định. | Không tự đặt mất đồ, trừ tiền, hồi đầy máu hoặc giữ mọi buff trong hồ sơ này. |
| Thoát/mất kết nối | Kết quả đã công nhận, phiên, checkpoint; trạng thái tác vụ đang chờ. | Không chỉ dựa vào nút thoát để lưu; mất mạng vẫn phục hồi được kết quả đã cam kết. |

Nếu kết quả không thể lưu, UI không được khẳng định đã nhận. Tác vụ có kết quả chưa rõ phải được truy vấn theo định danh nghiệp vụ; không hướng người chơi bấm mua/nhận liên tục. Khi database gián đoạn, hoạt động tài sản phải chờ hoặc bị từ chối an toàn theo DATA/OPS, không âm thầm chuyển sang lưu tin cậy trên client.

Thời hạn reconnect, nhịp checkpoint, bảo lưu instance và xử lý giao dịch đang chờ còn phải chốt ở hồ sơ chuyên môn. Không đánh dấu DATA hoàn tất bằng bảng định hướng này.

## 10. Nghỉ, quay lại và chơi lại

- Kết thúc phiên có tóm tắt ngắn: đã hoàn tất gì, việc đang theo dõi và địa điểm tiếp tục. Không biến tóm tắt thành màn quảng cáo bắt buộc.
- Kết quả đã công nhận không bị xóa vì bỏ qua một ngày đăng nhập. Sự kiện có hạn phải thể hiện hạn riêng, không trộn với quyền tiếp tục truyện.
- Khi quay lại sau thời gian dài, cho xem tóm tắt truyện không lộ phần chưa chơi, thay đổi skill/đồ liên quan và gợi ý hoạt động phù hợp.
- Chơi lại dungeon phân biệt lần trong cốt truyện với lượt hoạt động lặp. Không viết rằng một NPC lịch sử bị giết lại mỗi lượt farm.
- Chưa đặt stamina, giới hạn lượt, reset hằng ngày, catch-up hoặc thưởng đăng nhập. Nếu thêm, phải có mục tiêu, lịch reset, nguồn/đích và tác động lên người chơi ít thời gian.

## 11. Giao diện cần có để vòng chơi rõ ràng

| Điểm chạm | Nội dung ưu tiên | Liên kết thiết kế |
|---|---|---|
| Vào lại nhân vật | Vị trí/tiến độ, mục tiêu theo dõi, thông báo kết nối. | FLOW-01/07, ACC |
| HUD | Mục tiêu gần nhất, tình trạng chiến đấu, kỹ năng và phản hồi cần thiết. | UI/SCREEN/INPUT |
| Nhật ký/bản đồ | Truyện chính/phụ, điều kiện, nơi đến, tiến độ và tùy chọn bỏ theo dõi. | QUEST/MAP |
| Túi/nhân vật | Món nhận được, so sánh, điều kiện dùng, thay đổi chỉ số. | ITEM/GEAR/STAT |
| Nhóm | Mục tiêu, điều kiện tham gia, vai trò, quyền truyện/thưởng. | PARTY/LOOT |
| Kết thúc hoạt động | Kết quả đã xác nhận, thay đổi, đầu mối tiếp theo và đường ra. | FLOW/DATA |
| Kết nối lỗi | Đang nối lại, kết quả đang xác minh hoặc thất bại rõ; cách tiếp tục. | FLOW-06/SAFE |

Thông báo thưởng phải tách khỏi hiệu ứng trang trí; bỏ animation không làm mất vật phẩm. Nội dung chưa mở không chiếm HUD bằng chuỗi nút nhấp nháy liên tục. Chưa tạo wireframe hoặc asset ở mục này.

## 12. Quy tắc lựa chọn nội dung bản đầu

Một hoạt động được ưu tiên nếu trả lời được cả bốn câu: phục vụ nhu cầu người chơi nào; có hành động khác gì hoạt động cạnh bên; kết quả nào được giữ; và người chơi có thể dừng/tiếp tục thế nào.

Đề xuất bản mẫu dùng bộ nhiệm vụ cấp 1–10 đã soạn làm đầu vào: 8 nhiệm vụ chính, 6 nhiệm vụ phụ, các đoạn xuất thân và câu chuyện môi trường, cùng Hầm Phong Ấn Cổ. Đây là danh mục thiết kế đã có, không phải cam kết phải sản xuất toàn bộ cùng lúc. PROD-06 chọn lát cắt sản xuất có ngân sách và số lượng class/asset cụ thể.

Không bổ sung thêm hệ để lấp thời gian chơi trước khi vòng khám phá–combat–nhận kết quả–cải thiện được thiết kế rõ.

## 13. Tình huống duyệt trong tương lai

| Tình huống | Kết quả hồ sơ phải giải thích được |
|---|---|
| Chỉ có một phiên ngắn | Có hoạt động độc lập và điểm dừng, không mất công đã được công nhận. |
| Chơi lâu nhưng không tìm nhóm | Có tuyến truyện và mục tiêu phù hợp solo. |
| Vào cùng bạn khác tiến độ | Hiểu ai nhận cờ/thưởng, không ghi đè lựa chọn. |
| Rớt mạng đúng lúc nhận đồ | Chỉ có một kết quả tài sản hợp lệ, có cách truy vấn khi quay lại. |
| Đầy túi khi hoàn tất nhiệm vụ | QUEST/ITEM phải mô tả nơi giữ quyền nhận hoặc cách xử lý, không âm thầm mất thưởng. |
| Thoát giữa dungeon | Phân biệt tiến độ truyện đã lưu và trạng thái lượt chưa hoàn tất. |
| Hoạt động lặp sau lần đầu | Không cấp lại thưởng một lần; vẫn có lý do chơi lại được thiết kế riêng. |
| Trở lại sau nghỉ dài | Có tóm tắt và mục tiêu tiếp theo, không cần đọc mọi thông báo đã bỏ lỡ. |

Đây là yêu cầu cho hồ sơ và kiểm thử sau này. Chưa thực hiện kiểm thử game, đo thời gian phiên hoặc khảo sát người chơi.

## 14. Tiêu chí duyệt PROD-03

1. Chấp thuận vòng chọn mục tiêu → chuẩn bị → hành động → kết quả → cải thiện → tiếp tục/nghỉ.
2. Chấp thuận ba dải phiên tham chiếu và yêu cầu điểm dừng có ý nghĩa; chưa dùng chúng làm giới hạn bắt buộc.
3. Chấp thuận truyện solo, nhóm mở rộng trải nghiệm và lựa chọn cá nhân độc lập.
4. Chấp thuận kết quả quan trọng lưu qua server/PostgreSQL, không chỉ lưu khi bấm thoát.
5. Chấp thuận giới thiệu hệ thống theo nhịp, không mở đồng loạt các hệ phát triển sâu.

**Trạng thái bàn giao:** có hồ sơ V1 để duyệt, chưa đánh dấu PROD-03 hoàn tất. Không đổi trạng thái PROD-01/02 thay chủ dự án. Quy tắc kinh tế, cấp mở khóa, lưu vị trí và instance còn cần thiết kế ở đúng mục.

**Mục tiếp theo:** PROD-04 — tỷ trọng sức mạnh từ điều khiển, cấp/chỉ số, trang bị và hệ phụ; xác định nguyên tắc cộng dồn để tránh nhân sức mạnh vô hạn.

## 15. Nhật ký

| Ngày | Phiên bản | Nội dung | Trạng thái |
|---|---|---|---|
| 20/10/2026 | 1.0 | Vòng chơi, quy mô phiên, mục tiêu dài hạn, solo/nhóm và yêu cầu lưu tiến độ. | Đề xuất chờ duyệt. |

## Cập nhật trạng thái theo ủy quyền · 20/10/2026

Chủ dự án đã ủy quyền tự phân tích và quyết định, không cần chờ duyệt từng mục. Hồ sơ này được ghi nhận **đã hoàn thiện thiết kế V1 trong phạm vi mục**. Những câu “chờ duyệt” trong lịch sử/bản soạn trước được thay thế về trạng thái bởi ghi nhận này; các phương án là quyết định thiết kế có thể điều chỉnh, không phải xác nhận đã code hoặc đã kiểm thử. Thông số thuộc hồ sơ chuyên môn khác tiếp tục theo task tương ứng, không tự đánh dấu chúng hoàn tất.

## Ghi nhận chấp thuận và phạm vi mới · 20/10/2026

Chủ dự án chấp thuận các hướng còn lại sau khi điều chỉnh quy mô thế giới. Phần giới hạn bản đầu chỉ ở vùng 1–10/10 NPC được thay bằng [PROD-06 V2](15_PROD_06_PHAM_VI_VA_NGAN_SACH.md): năm vùng mở, cấp 45, dungeon/boss/rương và cinematic. Quy tắc tiền nạp chung chế độ vẫn giữ. “Tăng ngân sách” ở ngữ cảnh này là nội dung/asset, không tự tăng ngân sách chỉ số chiến đấu. Các thông số chuyên môn chưa được nêu tiếp tục thiết kế theo task, không bị coi là đã xác định chỉ bởi chấp thuận tổng quát.
