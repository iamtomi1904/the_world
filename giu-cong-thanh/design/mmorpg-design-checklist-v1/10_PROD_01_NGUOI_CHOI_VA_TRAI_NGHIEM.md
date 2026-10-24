# PROD-01 — Người chơi mục tiêu và trải nghiệm ưu tiên

> **THAY ĐỔI HỆ NHÂN VẬT — 20/10/2026:** [Khung chủng tộc/nghề/trang bị mới](28_HE_CHUNG_TOC_CHUC_NGHIEP_TRANG_BI.md) thay mô tả cũ khi xung đột: tạo Con Người/Elf/Người Lùn, cấp 15 chọn nghề, cấp 30 chọn nhánh theo race. Trang bị/vũ khí kiểm quyền nghề/nhánh; hình riêng không đổi chỉ số món. Không còn chọn ba class cố định lúc tạo hoặc quy tắc mọi race chọn mọi nhánh.


**Phiên bản:** 1.0 · **Ngày:** 20/10/2026  
**Phạm vi:** M0 — định hướng bản MMORPG đầu tiên.  
**Trạng thái:** Đã hoàn thiện thiết kế V1 trong phạm vi mục; chưa triển khai.
**Người soạn:** Trợ lý thiết kế · **Người duyệt:** Chủ dự án.  
**Phụ thuộc:** Không có mục checklist bắt buộc trước. Đầu vào là bộ cốt truyện và các quyết định nền tảng đã chốt.

## 1. Ý tưởng sản phẩm trong một câu

**Ẩn Thành là MMORPG fantasy pixel art, nơi người chơi tự tạo một người sống sót sau Đêm Gãy Ấn, khám phá Elarion, phát triển cách chiến đấu của mình và tìm đồng hành để dựng lại cuộc sống giữa những thành trì rạn nứt.**

Trải nghiệm muốn tạo: “Tôi hiểu vì sao mình đi tiếp, cảm nhận nhân vật mạnh lên và có thể gặp người khác mà vẫn chủ động chơi một mình.”

Đây là định hướng thiết kế V1. Chưa dùng mô tả này làm lời hứa về các tính năng đang có trong game.

## 2. Điều đã chốt và điều được đề xuất

| Mức độ | Nội dung |
|---|---|
| Đã chốt | Nền tảng đầu là web trên máy tính và client cài trên PC; PostgreSQL là database bền vững. |
| Đã chốt | Aetheria, Elarion, Đêm Gãy Ấn; nhân vật tự tạo, không phải người được định mệnh chọn sẵn. |
| Đã chốt | Truyện chính có đường hoàn thành solo; lựa chọn cá nhân không xóa nội dung dịch vụ chung của người khác. |
| Đã chốt | MMORPG và thủ thành chung thế giới, tách tiến trình. Hero thủ thành là mẫu class, không tự động trở thành NPC. |
| Đề xuất V1 | Ưu tiên người thích khám phá, chiến đấu PvE và phát triển nhân vật, với khả năng tham gia cộng đồng từng bước. |
| Đề xuất V1 | Bản mẫu tập trung vùng cấp 1–10 và một dungeon có lộ trình truyện solo; ưu tiên chiều sâu của một tuyến đầu hơn số lượng hệ thống. |
| Chưa chốt | Độ tuổi phát hành, thị trường, ngôn ngữ ngoài tiếng Việt, cấu hình tối thiểu, quy mô đồng thời, mô hình thương mại. Các mục này không được suy ra từ chân dung bên dưới. |

## 3. Người chơi chính

Các chân dung dưới đây là giả thuyết thiết kế, chưa phải kết quả khảo sát thị trường. Không gắn nhu cầu chơi với giới tính, nghề nghiệp hay khả năng chi trả.

| Chân dung | Điều họ tìm kiếm | Trở ngại dễ khiến họ nghỉ | Cách bản đầu đáp ứng |
|---|---|---|---|
| **Người khám phá và theo truyện — nhóm chính** | Có một nhân vật của riêng mình, địa điểm đáng nhớ, bí ẩn có lời giải và lựa chọn có phản hồi. | Nhiệm vụ chỉ giết đủ số lượng; hội thoại dài trước khi được chơi; cốt truyện bắt phải có nhóm. | Giới thiệu quê nhà qua hành động, mở đầu Đêm Gãy Ấn, nhiệm vụ có tác động nhìn thấy; nhật ký tóm tắt và lộ trình solo. |
| **Người thích combat và xây nhân vật — nhóm chính** | Đòn đánh rõ, né/đỡ có ý nghĩa, đồ mới hữu ích, hiểu cách cải thiện nhân vật. | Hiệu ứng che đòn boss; chỉ số không giải thích; nhiều hệ tăng lực mở cùng lúc. | Phản hồi trúng đòn, báo trước nguy hiểm, mô tả skill/đồ dễ so sánh; mở tiến trình theo từng lớp. |
| **Người chơi cùng bạn — nhóm phụ ưu tiên sớm** | Gặp bạn, cùng khám phá, hỗ trợ nhau dù khác tiến độ. | Phải làm lại toàn bộ truyện để chơi chung; tranh vật phẩm; không rõ nhiệm vụ của ai được tính. | Thấy người khác trong khu chung; luồng mời/nhận nhóm và phần thưởng rõ; quyết định truyện của mỗi người độc lập. |
| **Người thích sưu tầm và đời sống — nhóm mở rộng** | Ngoại hình, bách khoa, nghề, khám phá và mục tiêu dài hạn. | Mọi hoạt động chỉ phục vụ đua lực chiến hoặc buộc đăng nhập mỗi ngày. | Bản đầu đặt dấu mốc khám phá và vật phẩm có câu chuyện; nghề, nhà và bộ sưu tập lớn mở rộng sau. |

**Thứ tự khi phải đánh đổi:** hiểu mục tiêu → combat rõ ràng → tiến triển dễ hiểu → chơi cùng người khác thuận tiện → tăng số lượng nội dung.

## 4. Nhu cầu và tình huống sử dụng

| Tình huống | Nhu cầu thiết kế | Kết quả cần đạt |
|---|---|---|
| Chơi lần đầu trên web | Vào trải nghiệm mà không đọc một bộ hướng dẫn dài. | Biết mình là ai, thao tác cơ bản và mục tiêu gần nhất. Luồng tải/đăng nhập được thiết kế ở PROD-02 và FLOW-01. |
| Chơi một phiên ngắn | Có thể làm một việc có ý nghĩa rồi nghỉ. | Một bước nhiệm vụ, một điểm khám phá hoặc một cải thiện trang bị có kết quả được lưu. |
| Có thời gian chơi lâu | Nối nhiều hoạt động mà không lặp một thao tác đơn điệu. | Khám phá → giao chiến → phát hiện → chuẩn bị → đối đầu thử thách. |
| Bạn bè chưa online | Tiếp tục truyện và phát triển nhân vật. | Không phải đứng chờ party hoặc guild để biết chuyện tiếp theo. |
| Bạn bè khác tiến độ | Giúp nhau mà không ghi đè quyết định của nhau. | Hiểu vai trò người hỗ trợ và điều kiện được ghi nhận trước khi vào cảnh riêng. |
| Đổi từ web sang PC | Tiếp tục nhân vật đã chơi. | Đề xuất dùng cùng tài khoản/tiến độ; quy tắc phiên đồng thời còn phải chốt ở ACC/DATA. |
| Quay lại sau khi nghỉ | Nhớ việc đang làm và thay đổi gần đây. | Nhật ký ngắn, điểm tiếp tục và lời nhắc có thể đóng. |

Chưa chốt số phút cho một phiên chơi hoặc tỉ lệ giữ chân. Các mục tiêu định lượng cần đặt sau khi có bản mẫu và quan sát người chơi; không dùng con số tùy ý làm ràng buộc sản xuất.

## 5. Năm trụ cột trải nghiệm

### A. Thế giới có người đáng quan tâm

Giới thiệu một mối quan hệ, một công việc đời thường và một nơi quen thuộc trước thảm họa. Người cha nuôi được nhớ qua hành động và đồ vật cụ thể. Khi cứu trợ, người chơi thấy kết quả ở nơi trú ẩn hoặc lời thoại sau đó.

**Tiêu chí thiết kế:** mỗi đoạn truyện chính phải trả lời được người chơi đang giúp ai, vì sao và chuyện gì thay đổi.

### B. Combat đọc được và có quyền chủ động

Người chơi phân biệt được đòn của mình, vùng nguy hiểm, mục tiêu và hiệu ứng trạng thái. Hình ảnh đẹp phải hỗ trợ việc hiểu trận đấu. Class có bản sắc nhưng không mặc định class hắc ám là người xấu.

**Tiêu chí thiết kế:** hồ sơ đòn đánh/boss phải có dấu hiệu báo trước, thời điểm tác động và cách phản ứng; công thức thuộc STAT/COMBAT, không tự đặt trong PROD-01.

### C. Mỗi lần mạnh lên đều hiểu lý do

Kỹ năng, cấp và trang bị ban đầu phải giải thích được lợi ích. So sánh đồ không chỉ dựa một số “lực chiến”. Chưa mở đồng thời tu luyện, khai mạch, tín ngưỡng, cánh và tiến hóa trong phần làm quen.

**Tiêu chí thiết kế:** khi nhận một nâng cấp, hồ sơ phải nêu thứ gì thay đổi, dùng ở đâu và cách xem lại.

### D. Chơi solo trọn truyện, kết nối để mở trải nghiệm

Thế giới chung có người thật; tổ đội tạo cơ hội phối hợp và khám phá thêm. Manh mối bắt buộc và kết thúc truyện không bị giữ trong raid. Không hứa mọi thử thách PvE đều solo được.

**Tiêu chí thiết kế:** nhiệm vụ chính có đường solo; nội dung nhóm ghi rõ yêu cầu, quyền lợi và cách giải quyết khác tiến độ.

### E. Tôn trọng thời gian và tài sản người chơi

Mục tiêu kế tiếp rõ, thao tác nguy hiểm có xác nhận thích hợp, kết quả giao dịch có thể tra lại. Thiết kế mất mạng phải cho biết trạng thái cuối, tránh người chơi nhận hai kết quả mâu thuẫn.

**Tiêu chí thiết kế:** hồ sơ thưởng/giao dịch phải chỉ ra lúc nào kết quả được công nhận, được lưu và được hiển thị; triển khai thuộc DATA/SAFE/ECON.

## 6. Trải nghiệm bản đầu nên ưu tiên

| Ưu tiên | Gói trải nghiệm cần thiết kế | Bằng chứng hồ sơ |
|---|---|---|
| **P0 — cần trước** | Đăng nhập, tạo nhân vật mẫu và vào mở đầu; di chuyển/đánh/tương tác; mục tiêu truyện dễ hiểu. | Luồng người mới có điểm bắt đầu/kết thúc, bảng trạng thái UI và danh mục thao tác. |
| **P0 — cần trước** | Một tuyến vùng cấp 1–10 liên kết làng, nơi trú ẩn, ngoại vi thành và điểm điều tra. | Sơ đồ đường đi, nhịp nhiệm vụ, khu an toàn/nguy hiểm, sinh vật và lý do xuất hiện. |
| **P0 — cần trước** | Bộ class đại diện có vòng combat rõ; nhận đồ, mặc đồ và hiểu tiến triển. | Hồ sơ STAT/SKILL/GEAR và ví dụ trải nghiệm; số class cụ thể chốt ở PROD-06. |
| **P0 — cần trước** | Dungeon mở đầu có lộ trình truyện solo, đối đầu Kẻ Canh Cổng và nhận đầu mối tiếp theo. | Hồ sơ cảnh, boss, phần thưởng thông tin, kết thúc và đường quay lại. |
| **P0 — cần trước** | Lưu/tiếp tục nhân vật và hiện diện online cơ bản. | Hồ sơ dữ liệu bền vững, lỗi phiên, khôi phục và ranh giới trạng thái chung/cá nhân. |
| **P1 — sau khi lõi rõ** | Party, chat cơ bản và hỗ trợ bạn khác tiến độ. | Luồng tạo nhóm, quyền nhiệm vụ/loot và thông báo kết quả cá nhân. Thiết kế đồng thời với lõi MMO, không ghép vội sau. |
| **P1 — sau khi lõi rõ** | Shop/vật phẩm/kinh tế tối thiểu phục vụ tuyến đầu. | Một đường đời món đồ và nguồn sinh/tiêu; chưa triển khai toàn bộ chợ hoặc nghề. |
| **P2 — mở rộng** | Chợ hoàn chỉnh, guild sâu, nhiều nghề, raid, hệ tu luyện/khai mạch/tín ngưỡng/cánh/tiến hóa. | Hồ sơ phụ thuộc lõi, ngân sách sức mạnh, kinh tế và nội dung. |

P0/P1/P2 ở đây biểu thị thứ tự trải nghiệm cần làm rõ, không thay thế mã S01–S16 hay tự đổi mốc M của checklist. Bản online phát hành vẫn cần duyệt an toàn, vận hành và phạm vi ở PROD-06.

## 7. Một hành trình mẫu để các nhóm thiết kế cùng bám

1. Người chơi vào bằng web hoặc PC, đăng nhập và tạo một nhân vật phù hợp bộ mẫu đã chọn.
2. Tại làng, giúp một cư dân; học di chuyển, tương tác và chiến đấu thông qua việc làm.
3. Đêm Gãy Ấn xảy ra. Người chơi cứu trợ theo lựa chọn cá nhân rồi tới nơi trú ẩn.
4. Tìm lại người được cứu hoặc dấu vết lựa chọn trước; nhận một hướng điều tra về người cha nuôi.
5. Ra ngoại vi thành, tự chọn đi tiếp truyện hoặc khám phá một dấu vết bên đường; nhận món đồ và hiểu công dụng.
6. Gặp người khác trong khu chung. Có thể đi cùng hoặc tiếp tục một mình.
7. Vào Hầm Phong Ấn Cổ bằng lộ trình phù hợp, hiểu Kẻ Canh Cổng trước khi xử lý cuộc đối đầu.
8. Trở lại, nhận phản hồi và đầu mối Tu Viện Tro Trắng. Khi thoát rồi vào lại, tiến độ đã công nhận được tiếp tục.

Đây là hành trình tham chiếu từ bộ truyện, không phải thứ tự nhiệm vụ hay thiết kế màn hình cuối cùng. Cảnh và địa điểm phải dẫn lại hồ sơ QUEST/MAP khi làm chi tiết.

## 8. Ranh giới và điều chưa làm trong mục này

- Không quyết định chỉ số, tỉ lệ rơi, giá, thời gian nâng cấp hoặc lợi thế trả phí.
- Không ấn định toàn bộ race/class phải có asset hoàn chỉnh trong bản mẫu.
- Không yêu cầu dựng cả mười thành trước khi chứng minh được tuyến đầu.
- Không đưa PvP bắt buộc hoặc tranh đoạt tài nguyên vào luồng truyện mới chơi.
- Không coi người chơi thủ thành hiện tại mặc nhiên là toàn bộ thị trường MMORPG; không mang tài sản/tiến độ thủ thành sang MMO.
- Không thiết kế Android/iOS cho bản phát hành đầu; gamepad là quyết định riêng.

## 9. Kiểm tra bằng tình huống khi duyệt thiết kế

Chưa thực hiện khảo sát, đọc diễn với người dùng hoặc kiểm thử gameplay trong mục này. Các tình huống sau là bộ câu hỏi cho lần duyệt tương lai.

| Tình huống | Điều cần chứng minh trong hồ sơ hoặc bản mẫu sau này |
|---|---|
| Người chưa biết lore | Kể lại được động lực gần nhất mà không cần đọc toàn bộ lịch sử thế giới. |
| Người bỏ qua hội thoại dài | Vẫn nhận biết được mục tiêu, đối tượng và thông tin bắt buộc qua nhật ký/tín hiệu. |
| Người chỉ muốn solo | Đi tiếp truyện và tiếp cận manh mối cần thiết mà không nhờ party. |
| Người thích tối ưu combat | Hiểu một lựa chọn nâng cấp và cách phản ứng với đòn nguy hiểm. |
| Hai người khác tiến độ | Phân biệt được việc ai đang làm và lựa chọn nào được lưu cho ai. |
| Người đổi thiết bị hoặc rớt mạng | Thấy trạng thái phiên và kết quả đã công nhận, không phải đoán tài sản còn hay mất. |
| Người chơi ngắn hoặc quay lại sau nghỉ | Có điểm dừng có ý nghĩa và biết bước tiếp theo. |

Trước khi áp dụng cho kiểm thử thật, cần chốt mẫu người tham gia và cách thu thập phản hồi; không diễn giải các chân dung giả định thành dữ liệu đã được xác nhận.

## 10. Tiêu chí duyệt PROD-01

| Câu hỏi duyệt | Đề xuất để chủ dự án duyệt |
|---|---|
| Phục vụ ai trước? | Người thích khám phá/truyện và combat PvE/phát triển nhân vật. |
| Cảm giác cốt lõi? | Nhân vật của mình, mục tiêu có ý nghĩa, tiến triển dễ hiểu, có người đồng hành nhưng không bị ép nhóm. |
| Bản đầu tập trung đâu? | Một tuyến mở đầu cấp 1–10 và dungeon truyện solo, đi kèm nền online/lưu tiến độ đúng. |
| Khi thiếu thời gian/ngân sách, giữ gì? | Độ rõ gameplay, động lực truyện, tính nhất quán tiến độ; giảm số lượng vùng/class/hệ phụ trước. |
| Những gì để sau? | Mobile, hệ phát triển sâu và nội dung cộng đồng quy mô lớn chưa cần cho tuyến đầu. |

**Điều kiện chuyển trạng thái sang “Đã duyệt”:** chủ dự án chấp thuận người chơi chính, năm trụ cột và thứ tự ưu tiên; mọi thay đổi được ghi vào hồ sơ. Có tài liệu chưa đồng nghĩa đã duyệt.

**Việc kế tiếp theo thứ tự:** [PROD-02 — phạm vi web/client PC](01_DANH_MUC_VA_LO_TRINH.md). Cần chốt trình duyệt/hệ điều hành đích, cấu hình, phân phối/cập nhật và yêu cầu dùng chung tiến độ. PROD-03 sẽ thiết kế vòng chơi cụ thể; không giải quyết thay trong mục này.

## 11. Giao việc cho hồ sơ sau

| Nhóm | Ràng buộc nhận từ PROD-01 |
|---|---|
| PROD-03/06 | Chuyển hành trình mẫu thành vòng chơi và phạm vi M0/M1 có giới hạn cụ thể. |
| ART/CHAR | Phong cách pixel art nhất quán, silhouette/đòn rõ; bộ nhân vật mẫu phải thể hiện được bản sắc. |
| STAT/COMBAT/SKILL | Lựa chọn chiến đấu đọc hiểu được, không để VFX thay hitbox hoặc che báo trước. |
| MAP/QUEST/NPC/BOSS | Địa điểm gắn động lực, nhiệm vụ có hành động và phản hồi, boss có câu chuyện và lộ trình solo của truyện. |
| ITEM/ECON | Nâng cấp có ý nghĩa, mô tả dễ so sánh; giá và thương mại vẫn chờ hồ sơ riêng. |
| UI/INPUT/FLOW | Làm quen bằng hành động, nhật ký ngắn, phím gán lại, phân biệt nội dung bắt buộc/tùy chọn. |
| ACC/DATA/SAFE/OPS | PostgreSQL qua backend; thiết kế lưu/tiếp tục, phiên đăng nhập và tính nhất quán tài sản. |

## 12. Lịch sử thay đổi

| Ngày | Phiên bản | Nội dung | Trạng thái |
|---|---|---|---|
| 20/10/2026 | 1.0 | Soạn chân dung, nhu cầu, trụ cột, ưu tiên, hành trình và tiêu chí duyệt PROD-01. | Chờ chủ dự án duyệt. |

## Cập nhật trạng thái theo ủy quyền · 20/10/2026

Chủ dự án đã ủy quyền tự phân tích và quyết định, không cần chờ duyệt từng mục. Hồ sơ này được ghi nhận **đã hoàn thiện thiết kế V1 trong phạm vi mục**. Những câu “chờ duyệt” trong lịch sử/bản soạn trước được thay thế về trạng thái bởi ghi nhận này; các phương án là quyết định thiết kế có thể điều chỉnh, không phải xác nhận đã code hoặc đã kiểm thử. Thông số thuộc hồ sơ chuyên môn khác tiếp tục theo task tương ứng, không tự đánh dấu chúng hoàn tất.

## Ghi nhận chấp thuận và phạm vi mới · 20/10/2026

Chủ dự án chấp thuận các hướng còn lại sau khi điều chỉnh quy mô thế giới. Phần giới hạn bản đầu chỉ ở vùng 1–10/10 NPC được thay bằng [PROD-06 V2](15_PROD_06_PHAM_VI_VA_NGAN_SACH.md): năm vùng mở, cấp 45, dungeon/boss/rương và cinematic. Quy tắc tiền nạp chung chế độ vẫn giữ. “Tăng ngân sách” ở ngữ cảnh này là nội dung/asset, không tự tăng ngân sách chỉ số chiến đấu. Các thông số chuyên môn chưa được nêu tiếp tục thiết kế theo task, không bị coi là đã xác định chỉ bởi chấp thuận tổng quát.
