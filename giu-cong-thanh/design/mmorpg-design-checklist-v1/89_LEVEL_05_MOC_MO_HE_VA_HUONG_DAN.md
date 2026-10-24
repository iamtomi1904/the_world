> **Chốt vùng tân thủ · 21/10/2026:** V01 cấp1–10 **không có quái bay**, bao gồm quái thường, tinh anh, boss, dungeon và sự kiện chiến đấu trong vùng; boss không có pha bay. Không yêu cầu học đối không ở V01. Quái bay chỉ có thể xuất hiện ở vùng sau, không bắt buộc ngay V02. [Quy tắc đối không](100_COMBAT_05_CAN_CHIEN_VA_QUAI_BAY.md). Đây là cập nhật thiết kế MMORPG, không sửa thủ thành.

> **Quyết định hiện hành · 21/10/2026:** [Trần nhân vật 60, nội dung đến 45](91_CAP_60_NOI_DUNG_45_VA_XP_HAU_TRUYEN.md). Giữ năm vùng hiện tại; cấp 45→60 luyện dài hạn. AP ở 45/60 là 132/177; SP giữ 35, TP giữ 11 sau 45. Quy tắc XP hậu truyện thay bảng chênh cấp khi đủ điều kiện. Các số cấp 45 trong ví dụ vẫn là mốc nội dung, không phải trần nhân vật. Chưa triển khai vào game.

# LEVEL-05 — Mốc mở hệ, kỹ năng và hướng dẫn

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0  
**Trạng thái:** Hoàn thiện nhịp mở V1; chưa nhiệm vụ, script hoặc UI asset. [Tham khảo](79_THAM_KHAO_TIEN_TRINH_VA_VAI_TRO_MMORPG.md). MMORPG 2.5D pixel V4; thủ thành giữ nguyên.

## 1. Bảng mốc thống nhất

| Mốc | Nội dung mở | Cách giới thiệu |
|---|---|---|
| Tạo nhân vật/cấp 1 | Race, ngoại hình, xuất thân; Tân Binh có đánh thường, Thế Công và nền sinh tồn. | Trailer bỏ qua/xem lại; học đi và ngắm từng bước, không đưa 13 skill cùng lúc. |
| Cấp 3 | Bước Lách và bị động race thứ nhất. | Tình huống né hợp lệ; Space gọi cùng dòng đã gắn, không thêm né miễn phí. |
| Cấp 5 | Chủ động race. | Hướng dẫn kéo vào một ô tùy chọn hoặc dùng menu Gán; không ép vị trí cố định. |
| Cấp 7 | Thủ Thế. | Thử phòng vệ, không bắt Tân Binh phải có khiên. |
| Cấp 8/10/12/14 | SP theo lịch. | Badge điểm chưa phân; không bắt tiêu hết để đi tiếp. |
| Cấp 9/12 | Bị động race thứ hai/thứ ba. | Thông báo gọn, xem trong K; bị động không kéo vào ô cast. |
| Cấp 15 và quest | Chọn nghề, ba dòng tiến hóa, active/nội tại nghề, hai preset, ô bị động tùy chọn thứ nhất. | NPC cho xem nhánh 30/vũ khí; Kỵ Sĩ nhận ngựa nền một lần. |
| Cấp 18 và đã chuyển nghề | Vô môn nhập môn hợp lệ. | Qua thầy/nhiệm vụ, không tự học toàn thư viện; tối đa một chủ động vô môn trước chuyên sâu 30. |
| Cấp 22 và đã chuyển nghề | Ô bị động tùy chọn thứ hai. | Badge trong K, không modal giữa trận. |
| Cấp 25 | Trần rank 4. | Chỉ mở quyền nâng, không tự nâng kỹ năng. |
| Cấp 30 và quest | Nhánh, form skill, active bản sắc, nội tại chủ đạo, ô bị động thứ ba; tối đa hai chủ động vô môn. | Preview AP/stat/tag; Thánh/Hắc tiến hóa cánh ngựa thụ động, không R hao mana dạng cưỡi cũ. |
| Cấp 35 | Trần rank 5. | Nhật ký nêu điều kiện và nguồn SP. |
| Cấp 40 | Gợi ý chuẩn bị V05. | Gear/skill/truyện, không khóa bằng lực chiến. |
| Cấp 45 | Hoàn tất dải nội dung; luyện dài hạn đến60. | Giới thiệu XP hậu truyện trên quái40–45, dungeon/build/sưu tầm. |
| Cấp 50/55 | Mốc tiến trình dài hạn. | Thông báo gọn; không cấp thêm SP/TP hoặc skill mới. |
| Cấp 60 | Trần nhân vật phiên bản. | Dừng XP, không tích kho; vẫn chơi các nội dung và nhận phần thưởng khác hợp lệ. |

Bộ tân thủ khi mở đủ vẫn có bốn chủ động/bốn bị động, đánh thường riêng. Thanh 13 ô có thể trống hoặc chứa thuốc; không tự cấp 13 active. AP mỗi cấp và TP theo lịch hồ sơ 88; thông báo mốc không cấp thêm một lần điểm.

## 2. Những hệ không tự mở vì có mốc trống

Tu luyện, khai mạch, tín ngưỡng có stat, cánh trang bị, pet nâng sâu và rèn/độ hiếm chưa đủ thiết kế thì không gán cấp mở tùy tiện để lấp bảng. Có tên trong roadmap không đồng nghĩa được phát hành một nút nạp hoặc điều kiện không thể đạt.

Ngựa chiến cấp 15 là công cụ Kỵ Sĩ để chơi được, không bị gate sau thuần hóa hiếm hoặc shop trả phí. Cánh ngựa là nội tại nhánh 30, khác hệ cánh đeo tương lai. Dịch vụ kho/shop/chợ mở theo địa điểm, quest và quyền tương tác được thiết kế, không đủ cấp là dùng được từ mọi nơi.

## 3. Cách hướng dẫn không spam

Dạy một việc mỗi lần: xem kỹ năng → thử trong môi trường an toàn → mở chi tiết khi muốn. Khi combat/death/reconnect thì xếp gợi ý vào hàng chờ, không modal che đòn. Badge và hướng dẫn có thể xem lại, đóng popup không mất quyền học.

Văn bản hiện bind hiện tại; đổi Q sang phím khác thì tutorial không còn ghi Bấm Q. Có menu thay kéo thả, font tiếng Việt và caption âm quan trọng. Mobile/gamepad chưa quảng bá hỗ trợ bản đầu.

## 4. Chậm chuyển chức và quyền cá nhân

Người vượt cấp 15 chưa làm quest vẫn dùng Tân Binh, nhận điểm và được gợi về nơi hướng dẫn. Không tự đổi nghề hoặc xóa XP. Hoàn thành muộn cấp quyền đủ điều kiện một lần, skill mới rank 1. Không có quest bắt dùng skill chưa mở hoặc phải roll đúng đồ hiếm mới tiếp tục.

Nội tại chủ đạo 19 nhánh mở cùng nội tại cấp 30. C/K hiển thị stat chính/phụ, nguồn tính và bonus; không ép AP70/30 vì đó chỉ là trọng số công thức. Khiêu chiến solo và hỗ trợ bạn khác tiến độ không tự mở quest riêng của nhau.

## 5. Dữ liệu và kiểm chứng sau

Quyền đã mở và hướng dẫn đã đọc là hai trạng thái riêng. PostgreSQL quản quyền/grant bền; preference client có thể ghi đã xem guide nhưng không là bằng chứng quest hoàn thành. Xem lại mốc không grant vũ khí/ngựa/phần thưởng lần hai.

Cần playthrough người mới, skip trailer, đạt nhiều mốc cùng lúc, quest chuyển chức mất mạng, đổi bind và giữ bản nháp. Chưa làm. Hồ sơ hoàn thiện nhịp và luật mở, không tuyên bố mọi hệ sâu đã thiết kế hoặc sản xuất xong.


## Mốc hậu truyện thay trạng thái trần45

Cấp45: hoàn tất dải nội dung chính, mở gợi ý luyện dài hạn45→60; không hiện “đạt cấp tối đa”. Cấp50/55: thông báo tiến trình, không tự thưởng kỹ năng/tiền/vật phẩm mới. Cấp60: đạt trần, XP ngừng và không lưu kho. UI tách cấp nhân vật60, nội dung45, rank5, AP177/SP35/TP11; không gợi ý có bản đồ46–60.


**Thanh XP và mốc đã đặc tả · 21/10/2026:** [Thanh XP và mốc đã đặc tả](94_LEVEL_07_GIAO_DIEN_XP_VA_MOC_CAP.md). Hồ sơ bổ sung thay các điểm để mở trước đó khi xung đột trong phạm vi mục; giữ cap60/nội dung45 và công thức STAT hiện hành. Chưa triển khai/kiểm thử.
