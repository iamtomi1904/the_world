# Thanh thao tác nhanh 13 ô — kỹ năng và vật phẩm tiêu thụ

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0  
**Nguồn:** chủ dự án chốt 1–9, Q/E/R/Z, kéo kỹ năng và vật phẩm tiêu thụ; giữ WASD + con trỏ.  
**Trạng thái:** Cập nhật thiết kế MMORPG, chưa code hoặc vẽ UI production. Thủ thành giữ nguyên.

## 1. Bố cục và quyền sắp xếp

Thanh đặt dưới giữa màn hình, gồm 13 ô bind mặc định: **1, 2, 3, 4, 5, 6, 7, 8, 9, Q, E, R, Z**. Mỗi ô nhận một kỹ năng chủ động hợp lệ hoặc một loại vật phẩm tiêu thụ dùng nhanh được phép. Người chơi tự bố trí, không khóa vị trí theo class, nguyên tố hoặc ba dòng kỹ năng nền.

Giữ WASD/mũi tên di chuyển và hướng con trỏ theo hồ sơ INPUT-01. Bind được đổi qua UI-08, nhãn trên ô luôn khớp phím đang gán. Bảng K là nơi học/nâng kỹ năng; thanh nhanh không cấp quyền học.

**Thay giới hạn tám chủ động và cấu trúc ô bắt buộc cũ:** bản đầu có 13 ô hỗn hợp; kỹ năng đã học, đủ điều kiện và được gắn mới cast từ thanh được. Tiến trình 1/3/5/7/9/12 và chuyển chức 15/30 vẫn mở kỹ năng như cũ, nhưng không còn trần UI 4/5/6/8 theo cấp. Ô trống không tăng điểm, cấp skill hay mở quyền vô môn. Giới hạn chủ động vô môn vẫn một trước chuyên sâu 30, hai sau chuyên sâu, tính theo kỹ năng duy nhất đang gắn. Ba ô bị động tùy chọn và nguồn SP/TP không đổi.

Một kỹ năng là một dòng/form hiện hành. Không mang đồng thời form tân thủ/nghề/nhánh để lấy nhiều cooldown. Kỹ năng chủng tộc có thể đặt bất kỳ ô; nội tại không kéo vào như nút cast, chỉ xem trong bảng K/trạng thái.

## 2. Kéo, đổi ô và gỡ

Kéo từ bảng K hoặc túi đồ vào ô trống để gán; thả lên ô có nội dung thì preview đổi/thay rõ. Kéo giữa hai ô đổi vị trí, bind thuộc vị trí; kỹ năng/vật phẩm chuyển theo biểu tượng. Có menu Gán vào ô/Đổi vị trí/Gỡ cho người không dùng drag.

Gỡ khỏi thanh chỉ bỏ shortcut, không quên kỹ năng, tiêu vật phẩm hoặc hoàn SP. Thả ngoài vùng hợp lệ trả về vị trí cũ, không phá đồ. Có khóa chỉnh thanh để tránh kéo nhầm; mở khóa từ nút trên thanh. Đổi kỹ năng/bộ kỹ năng theo chính sách ngoài combat/điểm nghỉ hồ sơ 31; thay shortcut không bypass luật build. Trong combat thanh vẫn bấm dùng bình thường nhưng không chỉnh nội dung. Nếu đang chỉ đổi vị trí có thể mở sau khi INPUT được kiểm, chưa tự thêm ngoại lệ.

Được đặt cùng kỹ năng/vật phẩm ở nhiều ô nếu muốn; mọi ô tham chiếu cùng skill/cooldown/charges hoặc cùng nguồn item. Không tạo thêm quyền cast, stack hay cooldown riêng. Mỗi ô vẫn chỉ có một nội dung, không macro nhiều kỹ năng hoặc chuỗi dùng thuốc.

## 3. Vật phẩm tiêu thụ

Shortcut vật phẩm thường tham chiếu definition và nhóm binding tương thích, lấy số lượng khả dụng từ túi hợp lệ; không chuyển item ra khỏi túi và không đặt nó vào kho khác. Vật phẩm có instance đặc biệt phải hiển thị đúng instance và thuộc tính, không tự thay bằng loại khác khi hết. Không tự dùng kho/thư/tài sản nhân vật khác.

Dùng thành công mới trừ số lượng theo server. Nếu cần chọn mục tiêu/đất, mở bước ngắm và xác nhận như kỹ năng; click đó không đánh thường. Thiếu máu/mana không tự kích bình; giữ phím không spam tiêu thụ. Đòn/thuốc cần cooldown cá nhân/nhóm đều hiển thị, các ô cùng nhóm cập nhật chung.

Hết vật phẩm giữ ô mờ ghi 0/Hết vật phẩm; nhận lại cùng loại hợp lệ cập nhật số, không phải kéo lại. Sort/split/merge túi không làm mất shortcut definition. Item instance bị bán/hủy/hết hạn cần trạng thái rõ, không lặng lẽ chuyển qua món đắt hơn hoặc khác tác dụng. Chính sách chọn stack có hạn dùng khác nhau phải do ITEM định nghĩa; chưa tự đặt thứ tự ở hotbar.

Vật phẩm không tiêu thụ/dùng nhanh, quest object không có action dùng và nguyên liệu không hợp lệ phải bị từ chối với lý do. Không thể kéo trang bị vào đây để dùng lách khóa combat; hệ equip có thao tác riêng.

## 4. Điều kiện dùng

Skill cần level/nghề/nhánh, vũ khí, resource, trạng thái, target và ngựa vẫn kiểm bình thường. Vật phẩm cần combatUsable, mountedAllowed, vùng, mục tiêu, hạn và cooldown được khai báo. Thuốc trên ngựa không tự hợp lệ chỉ vì nằm ở hotbar. Khi bị stun/root/airborne, từng loại action theo catalog combat, không cho item mặc định gỡ mọi CC.

Đổi vị trí, duplicate shortcut, reset layout, logout hoặc đổi preset không reset hồi chiêu. Request dùng chỉ gửi một intent hợp lệ, pending/unknown-result theo UI-05. Hình/âm không tự xác nhận đã hồi HP hay đã trừ món.

## 5. Liên hệ preset và Space

Hai preset kỹ năng giữ phân điểm và cấu hình skill hợp lệ; mỗi preset lưu bố trí thanh hỗn hợp riêng, item chỉ là reference túi dùng chung. Chuyển preset không nhân đồ hoặc chuyển số lượng. Nếu món không còn hợp lệ vẫn giữ shortcut lỗi rõ. Không cộng passive từ preset ẩn.

Space vẫn là alias tùy chọn cho dòng cơ động đang gắn trên thanh, không thêm ô thứ 14 hoặc dash miễn phí. Nếu dòng đó không đang gắn/không hợp lệ thì Space không cast. Hiển thị trong setting cho người chơi biết bind alias, cho tháo/gán lại. Kỵ Sĩ đi bộ không dùng Space để vượt điều kiện ngựa.

## 6. Kích thước và màn hình nhỏ

13 ô nguồn UI 56px + 12 khe 4px = 776px chưa tính khung. 1080p đề xuất một hàng. 1366px/scale lớn có thể dùng hai hàng: 1–9 ở hàng chính, Q/E/R/Z phía trên hoặc dưới; thứ tự đọc/phím không đổi. Không thu icon và chữ nhỏ dần để cố giữ một hàng.

Hai hàng là cùng thanh 13 ô, không hai bank tạo 26 slot. HP/tài nguyên/castbar bố trí cạnh hoặc trên thanh, không chồng vào bind/stack/timer. Caption và chat phải reflow theo UI-03. Mobile/gamepad tương lai cần thiết kế lại mapping 13 ô; đề xuất tám ô/hai bank bốn trước đó đã lỗi thời, chưa được coi support hoàn thiện.

## 7. Trạng thái và lưu

Ô có icon, bind, cooldown và stack/charges đúng loại. Empty có dấu gán; unavailable có lý do; item count khác skill rank. Skill rank xem trong detail, không nhồi mọi số lên icon. Lock chỉnh chỉ khóa bố trí, không khóa sử dụng.

Lưu vị trí ô, content type, ID tham chiếu và preset version; số lượng item/cooldown từ authoritative state, không snapshot trong setting để phục hồi thành thật. Import profile chỉ gán quyền sẵn có, không cấp item hoặc skill. Backend cần xác nhận bộ skill hợp lệ trước áp, không chỉ tin 13 biểu tượng client.

## 8. Phạm vi và backlog

Đã chốt thay đổi về thanh 13 ô hỗn hợp và quyền gán tự do. Cần mockup 13 ô cỡ thật, mapping mobile/gamepad mới và đánh giá cân bằng 13 ô so với khung tám active cũ. Không tự đổi damage/điểm để bù.

UI-03/INPUT-02/INPUT-03 mở lại một phần vì bố cục/thiết bị mới chưa được đặc tả đủ. Các hồ sơ 29/31/48/59/60/61/62 và tổng hợp 63 đọc theo hồ sơ này khi xung đột. Tiến độ sau thay đổi: **31 hoàn thiện, 9 một phần, 473 chưa thiết kế / 513**. Không gọi đã code hoặc vẽ xong.
