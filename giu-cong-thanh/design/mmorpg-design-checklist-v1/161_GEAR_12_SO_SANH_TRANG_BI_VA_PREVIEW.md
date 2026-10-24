# GEAR-12 — So sánh trang bị và preview kết quả

**Ngày:**21/10/2026 · **Trạng thái:** Hoàn thiện đặc tả V1 trong phạm vi mục; chưa code, vẽ hoặc kiểm chứng cân bằng bằng gameplay.

**Đầu vào:** [Slot148](148_GEAR_01_SLOT_VU_KHI_VA_QUYEN_MAC.md), [ma trận152](152_GEAR_04_MA_TRAN_NGAN_SACH_TRANG_BI.md), [affix154](154_GEAR_06_POOL_DONG_THUOC_TINH.md), [số dòng155](155_GEAR_07_SO_DONG_TIER_VA_QUY_TAC_ROLL.md), [ngân sách81](81_STAT_11_NGAN_SACH_VA_MOC_CAN_BANG.md). Chỉ MMORPG, không sửa thủ thành.

## 1. So hai trạng thái nhân vật

Không chỉ so hai tooltip. Server dựng trạng thái A đang mặc và trạng thái B sau thay thế: xác thực slot/quyền, tháo nguồn cũ, thêm nguồn mới, tính lại root/nội tại78, Union/cap, set threshold và maxHP/mana. Chưa commit thì không đổi binding hoặc tài sản. Không preview HP hồi thêm vì tăng maxHP; phần hiện tại giữ nguyên.

Trang so sánh gồm: base; affix; nâng/khảm; mất/được set; proc; ngoại hình. Người chơi chọn nhẫn trái/phải hoặc mục tiêu thay ở menu, không tự tháo chiếc “kém hơn” theo rarity. Với2H, phải tính mọi offhand bị tháo **nếu quyền nhân vật cho phép cấu hình mới**; item sai nghề chỉ có bản xem giả định được gắn nhãn, nút Mặc vẫn khóa. Không cấp tạm quyền để làm so sánh.

## 2. Số ví dụ

Có nguồn haste khác2,50%; món cũ1,20%, món mới1,50%: hiệu lực cũ=1−0,975×0,988=3,6700%; mới=1−0,975×0,985=3,9625%; tăng thực0,2925điểm%, không0,30điểm%. Chọn hiển thị gọn nhưng cho xem số chính xác trong chi tiết.

Nguồn luck khác14%, món cũ2%, món mới1%: lootluck giữ15%ở cảhai, nhưng critbonus từ dư giảm1điểm%. UI phải cho thấy mất phần crit dù dòng lootluck không đổi. Haste không làm DoT tick nhanh hơn; critdamage không tự tăng tỷ lệ crit; món proc không có một con số “DPS chắc chắn” khi chưa chọn encounter/uptime.

Thay món giữ cùng setId nhưng giảm P_set phải tính lại lượng bonus, không chỉ đếm đủ4rồi giữ giá trị45cũ. Đổi skin không xuất hiện mũi tên tăng armor. Root trực tiếp và kết quả nội tại78 trình bày tách, không tính nội tại hai lần.

## 3. Tooltip và thao tác

Hover bản ngắn, chọn/ghim bản chi tiết; Shift khi tooltip focus hoặc nút So sánh. Màn hẹp có tab A/B, không hai cột tràn viewport. Mỗi chênh lệch có chữ Tăng/Giảm/Không đổi, không chỉ xanh/đỏ. Nút xem build hợp lệ và lý do thiếu cấp/nghề/family nằm trước nút xác nhận. Dữ liệu địch bị ẩn không được lộ qua preview damage.

Ước tính so có điều kiện phải ghi rõ dummy/defense/uptime đã chọn và phép thử nào chưa có, không tạo lực chiến tổng để ép mọi role cùng thang. Hiển thị giá trị “chưa tính được” cho tương tác chưa có mô hình, không0hoặc số đo giả.

## 4. Preview không phải commit

Quote chứa revision item/gear/build/config. Đổi món, khóa đồ hoặc state server trong lúc xem khiến quote cũ vô hiệu; refresh rồi xác nhận lại, không mua/mặc theo giá cũ. Hai tab cạnh tranh chỉ một expectedRevision được commit. Phí mới hoặc binding mới phải hiển thị trước khi người chơi xác nhận; không coi hover là đồng ý.

## 5. Tiêu chí

Kiểm nhẫn2slot, sai family,1H/2H hợp lệ, affixovercap, luckdư, mấtset4, procICD, đồkhóa, đầy túi và28rig. Chưa code UI hoặc sinh đồ test. [ITEM-08](142_ITEM_08_TOOLTIP_VA_SO_SANH.md) giữ nguyên thứ tự tooltip, hồ sơ này chốt cách tính trạng thái so sánh.
