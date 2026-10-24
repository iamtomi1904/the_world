> **Chốt vùng tân thủ · 21/10/2026:** V01 cấp1–10 **không có quái bay**, bao gồm quái thường, tinh anh, boss, dungeon và sự kiện chiến đấu trong vùng; boss không có pha bay. Không yêu cầu học đối không ở V01. Quái bay chỉ có thể xuất hiện ở vùng sau, không bắt buộc ngay V02. [Quy tắc đối không](100_COMBAT_05_CAN_CHIEN_VA_QUAI_BAY.md). Đây là cập nhật thiết kế MMORPG, không sửa thủ thành.

# ROAD-01 — Hành trình vào game và hai phiên chơi đầu

> **THAY ĐỔI HỆ NHÂN VẬT — 20/10/2026:** [Khung chủng tộc/nghề/trang bị mới](28_HE_CHUNG_TOC_CHUC_NGHIEP_TRANG_BI.md) thay mô tả cũ khi xung đột: tạo Con Người/Elf/Người Lùn, cấp 15 chọn nghề, cấp 30 chọn nhánh theo race. Trang bị/vũ khí kiểm quyền nghề/nhánh; hình riêng không đổi chỉ số món. Không còn chọn ba class cố định lúc tạo hoặc quy tắc mọi race chọn mọi nhánh.


**Phiên bản:** 1.0 · **Ngày:** 20/10/2026  
**Trạng thái:** Đã hoàn thiện thiết kế bộ nền và hành trình hai phiên đầu; chưa triển khai, chưa kiểm thử gameplay.  
**Chịu trách nhiệm:** trợ lý thiết kế theo ủy quyền tự phân tích/quyết định của chủ dự án.  
**Đầu vào:** PROD-01…09, bộ truyện M01…M08, phạm vi năm vùng/cấp 45. Đây là cổng thiết kế sản phẩm, không thay cổng an toàn phát hành hoặc hồ sơ kỹ thuật.

## 1. Kết luận rà nền

Bộ nền đủ để sang thiết kế mỹ thuật/điều khiển theo thứ tự. Phạm vi đích, người chơi, tiền tệ/sở hữu, cap cấp, mùa và quy trình thay đổi đã có quyết định. Không còn yêu cầu chờ chủ dự án duyệt từng mục.

Mục tiêu hai phiên đầu: người chơi có một người và nơi chốn để quan tâm, điều khiển được nhân vật, thấy kết quả được giữ và tự chọn việc tiếp. Không bắt xong dungeon hoặc đạt một cấp cụ thể trước khi được nghỉ.

Các mốc thời gian dưới đây là nhịp thiết kế định hướng, không giới hạn lượt, không điều kiện nhận thưởng và chưa được đo. Hồ sơ XP/skill sẽ nối nhịp với tiến trình thật thay vì tự thưởng cấp để khớp phút.

## 2. Quyết định bổ sung trong phạm vi ROAD-01

| ID | Quyết định | Lý do và phạm vi |
|---|---|---|
| DEC-028 | Có 3 slot nhân vật miễn phí/account/server ở bản đầu. | Đủ ba nhân vật để trải nghiệm ba chủng tộc; thêm slot không tăng cap/quà account. Không quyết định thêm race/class chính thức. |
| DEC-029 | Trước khi tạo nhân vật, ưu tiên server có nhân vật hoặc server bạn bè đã chọn; lần đầu chỉ gợi ý server chính thức khả dụng, người chơi xác nhận trước khi tạo. | Giảm lựa chọn khó hiểu nhưng không âm thầm tạo nhầm server. Không tự chọn bằng vị trí cá nhân hoặc chuyển server sau đó. |
| DEC-030 | Đoạn mở đầu M01–M03 là trải nghiệm cá nhân, từ M04 bàn giao sang thế giới hậu biến cố chung. | Tránh người khác giết NPC/đổi biến cố học chơi và tránh buộc đồng bộ party trước khi hiểu điều khiển. |
| DEC-031 | Bỏ cinematic chỉ bỏ trình bày, không bỏ M01–M03, không tự chọn nhánh cứu trợ và không cấp lại thưởng. | Giữ lựa chọn có nghĩa, không nhầm skip video với skip gameplay. |
| DEC-032 | Hướng dẫn ngắn theo tình huống, có thể ẩn và xem lại; thao tác quan trọng luôn có nút/menu thay hotkey. | Không chặn người biết chơi hoặc gây kẹt vì quên phím. |
| DEC-033 | Phiên đầu có điểm dừng sau từng bước công nhận, ưu tiên đưa đến nơi trú ẩn/ngoại thành qua M03/M04; không ép hoàn thành đúng nhịp phút. | Chơi ngắn vẫn giữ kết quả; không mắc kẹt vì phải xong toàn chương. |
| DEC-034 | Khi vào lại, hiện thẻ tiếp tục ngắn với nhiệm vụ, kết quả gần nhất và tối đa 3 hướng phù hợp: truyện/khám phá/chơi cùng bạn. Có thể đóng. | Giúp nhớ việc mà không dựng bảng quảng cáo/điểm danh trước gameplay. |
| DEC-035 | Đầu phiên hai không tự mở hàng loạt hệ sâu hoặc shop nạp; ưu tiên một lựa chọn build/đồ và một cơ hội khám phá có ý nghĩa. | Bảo vệ vòng chơi lõi và việc hiểu nhân vật. |

Đây là lựa chọn thiết kế theo ủy quyền, không ghi là các con số do người dùng đưa ra. Tên server, số người/party và giờ mục tiêu chưa được đặt vì thuộc phạm vi chuyên môn khác.

## 3. Hành trình tổng thể

**Mở web/PC → đăng nhập → xác nhận server → tạo nhân vật → cinematic → M01 đời sống → M02 biến cố → M03 cứu trợ → M04 nơi trú ẩn/thế giới chung → nghỉ hoặc khám phá → vào lại → nhớ mục tiêu → M05/M06 hoặc nhánh phụ → hướng tới M07/M08 khi phù hợp.**

Đây là lộ trình mặc định để hiểu trải nghiệm. Không tự dịch chuyển người chơi qua cảnh, ép cấp hoặc khóa khám phá để giữ sơ đồ.

## 4. Trước gameplay

| Bước | Thiết kế hành vi | Thông tin bắt buộc | Khi bị gián đoạn |
|---|---|---|---|
| Web tải/client kiểm tra phiên bản | Chỉ tải gói UI và nội dung sắp cần; có lỗi/thử lại. | Tiến trình thật hoặc tên bước, trạng thái tương thích. | Không mất account/nhân vật nếu xóa cache hoặc cập nhật lại. |
| Đăng nhập | Chỉ vào gameplay khi có tài khoản; không đẩy người chơi khác phiên ra chỉ vì mở màn đăng nhập. | Lỗi dễ hiểu, đường khôi phục và bảo vệ phiên. | Nếu đang chơi nơi khác, yêu cầu chuyển quyền trước khi vào thế giới. |
| Chọn server | Theo DEC-029; có lựa chọn thay trước tạo. | Server, khả dụng, nơi bạn bè đang chơi nếu họ chia sẻ hợp lệ. | Không tự chọn server khác lúc server cũ tạm lỗi. |
| Tạo nhân vật | Chọn trong race/class thực sự khả dụng; preview hình đứng/di chuyển/đòn mẫu nếu có. | Vai trò, ưu/nhược, tên hợp lệ, xuất thân; không yêu cầu đọc bảng damage dài. | Giữ bản nháp cục bộ không nhạy cảm nếu thuận tiện; chưa tạo tài sản trước khi xác nhận server. |
| Xác nhận tạo | Chốt account/server/race/class/name; server kiểm tra và tạo một lần. | Có thể quay lại xem trước; lỗi tên trùng không mất lựa chọn khác. | Yêu cầu gửi lại truy kết quả cũ, không tạo hai nhân vật. |
| Cinematic | 60–90 giây theo PROD-06, phụ đề/âm thanh tùy chọn, bỏ qua ngay. | Nút bỏ qua, xem lại; không có spoiler người cha cuối truyện. | Lỗi tải có tóm tắt để tiếp tục; cờ xem không thay cờ quest. |

Tạo nhân vật không bắt mua ngoại trang. Tên/portrait/race phải khớp model dùng trong game; ba chủng tộc Con Người/Elf/Người Lùn theo hồ sơ 28; tạo Tân Binh, chưa chọn nghề. Asset từng tổ hợp vẫn phải sản xuất.

## 5. Phiên đầu — có nhà để quan tâm và có điểm nghỉ

### A. M01 — Một chỗ bên bàn ăn

Người chơi được di chuyển tại Nhà Đèn, giúp Sella/Mira và mở hòm dụng cụ của Edran. Dấu vết nhiều con nuôi thể hiện người chơi không phải người duy nhất hoặc được chọn bằng huyết thống.

Hướng dẫn tương tác xuất hiện lúc đến vật thể, không mở toàn bộ menu cùng lúc. Đưa đồ/đối chiếu sổ là hành động có phản hồi, không biến thành thao tác nhặt 10 vật giống nhau.

**Kết quả giữ:** M01 hoàn tất, lựa chọn đối thoại, quyền giữ Dấu Kiểm Ấn dưới dạng chứng cứ/di vật theo QUEST. Không cho bán di vật hoặc trang bị nó như vật phẩm sức mạnh độc quyền.

### B. M02 — Mười tiếng chuông

Người chơi chủ động giao đèn, rồi biến cố xảy ra. Học di chuyển khỏi nguy hiểm, dùng đòn thường và một phản ứng phòng thủ khả dụng của class. Không bắt class chưa có đỡ phải thực hiện đỡ; COMBAT/SKILL phải nối thao tác tương đương.

Không dùng video để gây damage thật. Vùng báo đòn phải đọc được, có khoảng học; thất bại trả về đoạn an toàn theo QUEST/COMBAT, không giết NPC vĩnh viễn vì người chơi thao tác chậm.

**Kết quả giữ:** các bước học/đường mở đã công nhận. Reload không phát lại cả thảm họa như một sự kiện lịch sử mới hoặc nhận lại thưởng đoạn cũ.

### C. M03 — Hai lối qua lửa

Chọn bộ nâng công xưởng hoặc thùng thuốc. Thông tin trước chọn nói rõ dân quân cứu người còn lại; đây là đánh đổi vật tư và phản hồi cộng đồng, không lừa người chơi chọn NPC chết khi chưa biết.

Trước xác nhận có thể xem lại hai lựa chọn. Sau khi hoàn tất bàn giao, giữ nhánh đã chọn; không ra vào để lấy cả hai. Phần thưởng lựa chọn không biến thành điểm đạo đức hoặc chỉ số trả phí.

**Kết quả giữ:** nhánh cứu trợ, điểm bàn giao, NPC nào biết và phản hồi sau đó. Nếu nghỉ trước xác nhận, chưa chốt lựa chọn. Nếu đã xác nhận nhưng chưa hộ tống xong, khôi phục đúng bước an toàn, không cấp kết quả hoàn tất sớm.

### D. M04 — Người không bỏ thành

Đưa đoàn tới ngoại thành, đối chiếu đầu mối về người cha và nhận nơi trú. Từ bước bàn giao này có thể thấy người khác trong thế giới hậu biến cố chung.

Không ép người chơi xem cảnh riêng của người khác. Biến thể vật tư/thoại thuộc tiến trình cá nhân; NPC dịch vụ chung vẫn hiện diện. Đây là điểm nghỉ khuyến nghị đầu, không phải điều kiện duy nhất để lưu.

**Thẻ kết phiên:** việc đã công nhận, việc đang theo dõi và điểm tiếp tục. Không chèn shop nạp hoặc buộc điểm danh để thoát.

## 6. Phiên đầu ngắn hoặc bị cắt ngang

Nhịp tham chiếu phần đầu khoảng 20–30 phút đến điểm trú nếu người chơi theo tuyến, nhưng không tuyên bố đã đo hoặc buộc ai phải đạt mốc đó. Người có 10 phút vẫn nghỉ được sau bước đã công nhận của M01/M02/M03.

- Logout trước combat: lưu mốc/vị trí hợp lệ theo DATA.
- Mất mạng trong combat: không cho bất tử; server xử lý trạng thái và checkpoint đã công nhận, reconnect không tạo nhân vật/phần thưởng thứ hai.
- Không lưu được thay đổi tài sản: không hiện “đã nhận” như thành công; có trạng thái đang xác minh hoặc thất bại có thể phục hồi.
- Mở menu/đọc tooltip không pause thế giới MMO; đoạn mở đầu riêng có thể có nhịp cảnh an toàn do thiết kế, không hứa pause mọi combat.

Số giây reconnect, vị trí hồi sinh, mức HP và chu kỳ checkpoint là đầu ra COMBAT/DATA, chưa gán số tùy tiện để giả hoàn thiện kỹ thuật.

## 7. Phiên thứ hai — được tự chọn hướng

### Bước 1: tiếp tục đúng trạng thái

Thẻ DEC-034 hiển thị ngắn: “Bạn đã đưa vật tư đến nơi trú”, mục tiêu hiện tại và một phản hồi gắn nhánh đã chọn. Nếu phiên trước chưa tới trại, thẻ chỉ dẫn đúng bước đang dở, không nhảy M04.

Không phát lại cinematic bắt buộc, không giả có thưởng login hay vật phẩm mới. Nếu người chơi tắt thẻ, nhật ký vẫn tra được.

### Bước 2: chọn một trong các hướng hợp lệ

| Hướng | Nội dung | Kết quả mong muốn |
|---|---|---|
| Theo truyện | M05 kiểm dụng cụ rồi M06 khảo sát dòng nước khi đủ tiến độ. | Hiểu di vật là công cụ có thể học dùng, thấy nguyên nhân nguy hiểm không chỉ là quái. |
| Khám phá gần | Nhánh phụ tại trại/ruộng, dấu vết dẫn tới một rương ẩn hoặc nơi sinh vật sống. | Có lựa chọn và phát hiện; rương chỉ nhận khi đủ điều kiện, không mất vì người khác vừa lấy. |
| Cùng bạn | Bạn đủ điều kiện gặp nhau tại vùng chung; người còn trong M01–M03 thấy trạng thái cần hoàn tất mở đầu. | Không ép làm lại truyện hoặc bỏ tiến trình riêng để được đứng chung. |

Không hiện ba nút bấm làm tự động teleport/nhận thưởng. Chúng dẫn đến nhật ký/bản đồ/party phù hợp. Nội dung chưa khả dụng ghi lý do, không che bằng quảng cáo mua mở khóa.

### Bước 3: hiểu một cải thiện của nhân vật

Khi quest hoặc loot hợp lệ cấp một món/nâng cấp, mở so sánh ngắn: thay đổi công/phòng thủ/tài nguyên phù hợp và điều kiện dùng. Không nhất thiết món nào cũng tăng mọi chỉ số hoặc tạo affix hiếm.

Chỉ giới thiệu skill/điểm khi người chơi thực sự có quyền mở hoặc điểm chưa cộng theo LEVEL/SKILL; không tự cho cấp để minh họa. Có thể đóng hướng dẫn và xem lại. Tu luyện/khai mạch/cánh chưa mở đồng loạt.

### Bước 4: dừng hoặc đi xa hơn

Sau một kết quả M05/M06 hoặc nhánh phụ, người chơi có thể nghỉ, đi tiếp khám phá hoặc chuẩn bị vào M07/M08. Không yêu cầu xong Hầm Phong Ấn Cổ trong phiên hai; dungeon có thời lượng và điều kiện riêng được hiển thị trước.

## 8. Quy tắc mở chức năng

| Thời điểm | Nội dung nên thấy | Không ép hiển thị |
|---|---|---|
| M01 | Tương tác, journal tối giản, cài đặt/trợ giúp. | Chợ, shop nạp, hàng loạt bảng phát triển. |
| M02 | Đòn thường, phản ứng phòng thủ, tài nguyên và tín hiệu nguy hiểm đang dùng. | Skill chưa mở hoặc popup chắn vùng tránh đòn. |
| M03 | Lựa chọn, phản hồi và đường thoát. | Đồng hồ ép chọn nếu không có chủ đích đã giải thích. |
| M04 | HUD vùng chung, túi/trang bị, nhân vật, journal, map và chat/party theo quyền. | Bắt học mọi cửa sổ trước khi ra vùng. |
| M05/M06 | Công cụ nhiệm vụ, khám phá, so sánh nâng cấp và định hướng class khi đủ điều kiện. | NPC bán giải pháp trả phí cho manh mối bắt buộc. |

Đây là nhịp trình bày. Các chức năng nền như cài đặt/thoát/hỗ trợ không bị khóa vì chưa xong tutorial. UI/INPUT sẽ chốt phím, bố cục và ma trận lỗi; không sửa phím của thủ thành ở đây.

## 9. Luồng UI tham chiếu

**Truy cập:** kiểm phiên bản → đăng nhập → server/nhân vật → tạo/xem trước → cinematic → HUD.

**Trong chơi:** HUD ↔ journal/map; HUD ↔ túi/so sánh/trang bị; NPC ↔ đối thoại/lựa chọn/kết quả; HUD ↔ chat/party. Mở UI không phát đòn xuyên nền, focus chat không kích skill.

**Kết thúc/tiếp tục:** menu → yêu cầu thoát → trạng thái server → chọn nhân vật/đăng nhập; vào lại → thẻ tiếp tục → HUD. Trường hợp combat/đơn đang chờ có quy tắc giải thích, không hứa luôn thoát ngay như offline.

**Đầy túi:** quyền thưởng một lần không bị mất. Phải chặn nhận trước khi tiêu điều kiện hoặc đưa vào quyền nhận chờ của đúng nguồn theo ITEM/QUEST; không âm thầm tạo kho vô hạn hoặc hủy thưởng. Mẫu alpha phải chọn và triển khai đường đầy túi cụ thể trước khi mở cho người chơi.

Không tạo wireframe/asset giả tại ROAD-01. Danh sách UI trên là yêu cầu chuyển SCREEN/FLOW.

## 10. Chuỗi dữ liệu cần đúng

| Sự kiện | Dữ liệu có thẩm quyền | Rủi ro cần chặn |
|---|---|---|
| Tạo nhân vật | Account/server/characterID, lựa chọn hợp lệ. | Nhân đôi do xác nhận lại. |
| Bỏ/xem cinematic | Cờ xem theo account/edition; quest riêng theo nhân vật. | Skip video tự chọn truyện hoặc auto nhận thưởng. |
| Xong M01/M02 | Bước quest, chứng cứ và thưởng đã công nhận. | Reset biến cố/di vật khi reload. |
| Chốt nhánh M03 | Lựa chọn + trạng thái bàn giao + quyền thưởng theo bước. | Nhận cả hai nhánh hoặc hiện kết thúc sớm. |
| Chuyển M04 | Phiên vùng riêng/chung, checkpoint và entity duy nhất. | Hai bản nhân vật hoặc lộ biến thể riêng cho người khác. |
| Nhận loot/mặc đồ | Một instance/chủ/vị trí, khoản phí nếu có. | Đồ vừa ở túi vừa mặc hoặc nhận lại lần hai. |
| Rương khám phá | CharacterID + chestID + quyền nhận một lần. | Đổi kênh/thiết bị nhận lại. |
| Đổi web/PC | Thu hồi quyền điều khiển cũ, trạng thái server/cooldown/tài sản. | Reset debuff hoặc mua/nhận trùng. |

Không tạo bảng PostgreSQL ở mục này. DATA xác định transaction/checkpoint và recovery từ các sự kiện trên.

## 11. Rà liên thông PROD-01…09

| Hồ sơ | Đã thống nhất cho luồng đầu | Phần tiếp tục ở task khác |
|---|---|---|
| PROD-01 | Người tự tạo, thích khám phá/PvE, hiểu mục tiêu và có đường solo. | Kiểm chứng người chơi tương lai, không gọi persona là dữ liệu khảo sát. |
| PROD-02 | Web/PC, chọn server rõ, một phiên gameplay và khả năng kết nối lại. | Stack desktop, máy tham chiếu, tải và security. |
| PROD-03 | Phiên ngắn có điểm dừng; phiên dài nối hoạt động; không ép dungeon trong hai phiên đầu. | Thời gian thực, đường XP và nhịp quest trên map. |
| PROD-04 | Chỉ số/affix đặc biệt không hiện thành spam; cải thiện có nguồn, không tạo quỹ ngoài sổ. | Công thức, caps, skill/loot số cụ thể. |
| PROD-05 | Không có thanh toán để vượt tutorial/cốt truyện; không quảng cáo nạp sau mỗi lần chết. | Giá/cap/thuế và mở kinh tế M1. |
| PROD-06 | V01 là lát cắt đầu trong thế giới 5 vùng/cap 45; NPC/dungeon/boss/rương có ngân sách. | Topology và toàn bộ hồ sơ nội dung bốn vùng sau. |
| PROD-07 | Quest nhân vật, ví đúng phạm vi, tiền nạp chung chế độ và không copy đồ qua kho. | Cài đặt schema, quyền truy cập và chính sách hạn lưu log. |
| PROD-08 | Cấp bắt đầu 1, alpha 10, bản đầu 45; không ép đạt cấp bằng mốc phút. | Bảng XP/rank, điều kiện hệ và scale nhóm. |
| PROD-09 | Sổ quyết định và quy trình cập nhật; không quay lại chờ duyệt từng mục. | Tiếp tục ghi DEC/CHG/OPEN khi có thay đổi. |

Không phát hiện xung đột sản phẩm cần dừng để hỏi người dùng trong phạm vi luồng này. Các rủi ro chưa được chứng minh bằng gameplay được giữ làm cổng sản xuất, không che bằng trạng thái “đã thiết kế”.

## 12. Rủi ro và thứ tự xử lý

| Rủi ro | Hướng xử lý đã chọn | Cổng |
|---|---|---|
| Hai lần Đêm Gãy Ấn do trailer và gameplay | Trailer là nhá trước, chuyển thời điểm rõ; biến cố gameplay chỉ một lần trong lịch sử cá nhân. | QUEST/ART trước dựng cảnh. |
| Open world nhưng bị ép đi hành lang mãi | M01–M03 riêng và ngắn; M04 mở lựa chọn, đường thăm dò không cần chờ xong dungeon. | MAP/QUEST trước alpha. |
| 3 chủng tộc/7 nghề/19 nhánh chưa có ID runtime | Không gọi pipeline đã hoàn thiện; SKILL/CHAR chọn trước sản xuất số lượng. | CHAR/SKILL/ART. |
| Ngân sách 5 vùng lớn nhưng nhân lực chưa có | Lát cắt V01 trước; lịch công bố khi kiểm kê/ước lượng, không tự thu nhỏ phạm vi đích. | ASSET/OPS trước cam kết ngày. |
| Thưởng/quest mất khi reload | Backend công nhận theo bước, chống trùng; tình huống disconnect phải có giải pháp cụ thể. | DATA/SAFE trước người chơi thật. |
| Chọn cứu trợ thiếu thông tin | Thoại nói rõ cứu người, đánh đổi vật tư; xác nhận và phản hồi có dấu vết. | QUEST/UI. |
| Hỗ trợ/tank tân thủ không solo được | Mẫu combat đại diện và phản ứng tương đương, không bắt class dùng kỹ năng chưa mở. | SKILL/STAT/COMBAT. |

## 13. Tiêu chí bàn giao thiết kế

Có luồng trước gameplay, phiên đầu/phiên hai, điểm nghỉ/tiếp tục, ranh giới solo/nhóm, nhịp mở UI, sự kiện dữ liệu, quyết định bổ sung, rủi ro và task nhận việc. Mọi hồ sơ nền đã được đối chiếu trong phạm vi sản phẩm.

Đánh dấu ROAD-01 hoàn thiện thiết kế; không đánh dấu ART/MAP/UI/FLOW/DATA hoặc cổng phát hành hoàn tất theo. Chưa code, tạo asset, mở thanh toán hoặc chạy kiểm thử.

**Tiếp theo theo thứ tự: ART-01 — phong cách top-down, tỷ lệ pixel, độ phân giải/zoom, ánh sáng và bảng màu.** ART-01 sẽ biến những yêu cầu đọc combat, quy mô thế giới và bản sắc nhân vật thành quy chuẩn hình ảnh cụ thể để các nhóm dùng chung.

| Ngày | Phiên bản | Nội dung |
|---|---|---|
| 20/10/2026 | 1.0 | Hoàn thiện ROAD-01; chọn DEC-028…035 và nối hai phiên đầu với cốt truyện/dữ liệu. |

## Khung kỹ năng cập nhật · 21/10/2026

[Hệ tân thủ/tiến hóa/vô môn](29_HE_KY_NANG_TAN_THU_TIEN_HOA_VO_MON.md) làm rõ trước15: 3 chủ động nền +1 bị động nền, 1 chủ động race +3 bị động race; mở dần, không có nghề ngầm. Các bộ tập kiếm/cung/trượng là cách biểu hiện của cùng skill nền, không thêm ba cooldown. Cấp15/30 tiến hóa theo lineage và giữ đầu tư hợp lệ. Hướng dẫn M02 dùng phản ứng phổ thông nếu chưa mở Bước Lách ở3, không yêu cầu skill chưa học.


## Cập nhật LEVEL V1 · 21/10/2026

[Hồ sơ85–89 và tổng hợp90](90_TONG_HOP_STAT_LEVEL_10_MUC.md) chốt công thứcXP, quota tuyến chính, nguồn/chiaXP vàgrantAP/SP/TP. 38–57giờ là mục tiêu thiết kế lần đầu, chưa đo hoặc cam kết; cap45/alpha10 và không tíchXPthừa giữ. Không đổi trò thủ thành.
