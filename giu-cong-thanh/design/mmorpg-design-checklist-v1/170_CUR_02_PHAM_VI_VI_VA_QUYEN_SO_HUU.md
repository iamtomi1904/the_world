# CUR-02 — Phạm vi ví và quyền sở hữu

**Ngày:**21/10/2026 · **Trạng thái:** Hoàn thiện đặc tả V1 trong phạm vi mục. Chỉ thiết kế MMORPG, chưa code/SQL/triển khai ví hoặc thay thủ thành.

**Đầu vào:** [Thương mại14](14_PROD_05_THUONG_MAI_VA_CONG_BANG.md), [quyền sở hữu16](16_PROD_07_SO_HUU_VA_TIEN_DO.md), [currency/icon169](169_CUR_01_ICON_NATIVE_32_VA_NGHIEM_THU.md), [cửa sổ47](47_UI_02_LOAI_CUA_SO_VA_DIEU_KHIEN.md), [đóng cửa sổ51](51_UI_06_THU_TU_CHONG_VA_DONG_CUA_SO.md).

## 1. Ba ví, ba currency, không ví tiền nhân vật

| Currency | Wallet key nghiệp vụ | Dùng chung | Không tự dùng chung |
|---|---|---|---|
| PREMIUM_CRYSTAL — Tinh Thạch | accountId + currencyId | Web/PC, các server và chế độ theo sản phẩm được phép | Quyền item/skin nhận từ một lần mua |
| BOUND_SEAL — Ngân Ấn | accountId + serverId + MMORPG + currencyId | Nhân vật cùng account/server | Server khác hoặc vàng thủ thành |
| ELARION_COIN — Đồng Elarion | accountId + serverId + MMORPG + currencyId | Nhân vật cùng account/server | Server khác, tiền nạp hoặc vàng thủ thành |

Server là miền nhân vật/kinh tế ổn định, không phải một máy vật lý hoặc kênh. Đổi máy, kênh, trình duyệt, client hoặc tên nhân vật không sinh ví mới. Nhân vật là actor thực hiện giao dịch; không phải chủ sở hữu riêng của ba số dư này.

## 2. Vòng đời

Xóa nhân vật giữ ví, lịch sử, khoản đã giữ và hạn mức account; tạo lại không được thêm quà account. Quest thưởng theo nhân vật vẫn kiểm grant của quest trước khi cộng ví, không biến chia sẻ số dư thành chia sẻ truyện. Hết mùa không xóa ba ví; điểm sự kiện phải là progression edition riêng, không currency thứ tư dùng giao dịch phổ quát.

V1 chưa có chuyển server. Nếu mở sau này cần migration riêng, không copy toàn bộ Ngân Ấn/Đồng Elarion từ account nguồn sang account đích mỗi lần một nhân vật đi. Ví nguồn không thuộc duy nhất nhân vật di chuyển; Tinh Thạch vẫn là cùng ví toàn account. Gộp server phải đối soát cả số dư, holds, claim và cap, không chỉ cộng hai số hiển thị.

Account bị khóa không tự bị xóa tiền. Khoản tranh chấp bị giữ theo case có lý do và quyền hỗ trợ; không âm thầm đặt số dư0. Quy trình đóng/xóa account thuộc ACC/SAFE/PAY, không thực hiện xóa sổ tài sản ngay vì người chơi xóa một nhân vật.

## 3. Nhiều phiên và chế độ

Hai giao dịch MMORPG/thủ thành cùng chi Tinh Thạch phải kiểm cùng nguồn khả dụng. Không cho mỗi mode cache một số dư để chi độc lập. Ví800TT, hai yêu cầu khác nhau mỗi yêu cầu600TT: chỉ một giao dịch được giữ/chi, giao dịch kia báo thiếu; retry cùng intent trả kết quả cũ.

Một sản phẩm phải chỉ rõ recipient scope: account/server/mode/character và điều kiện nhận. Có đủ tiền không làm món MMORPG dùng được trong thủ thành. Server kiểm quyền, không tin serverId/mode/currencyId client tự chọn để mở nguồn chi khác.

## 4. Giao diện và yêu cầu lưu

Luôn có nhãn phạm vi: “Tinh Thạch · toàn tài khoản” và “Ngân Ấn/Đồng Elarion · server đang chọn”. Đổi server phải đọc scope mới, vô hiệu quote cũ, không giữ nguyên tên header nhưng hiện tiền của server trước. Chưa chọn server có thể xem Tinh Thạch, các ví gameplay hiển thị yêu cầu chọn server thay vì số0.

PostgreSQL lưu định danh ví, currency, scope, trạng thái và revision; tổng tài sản phải đối chiếu sổ giao dịch. Đây là hợp đồng nghiệp vụ, chưa tạo schema/migration. Mỗi scope có đúng một ví cho mỗi currency. Không lưu tổng ví client như nguồn có thẩm quyền.

## 5. Tình huống cần kiểm sau

Xóa nhân vật cuối cùng; đổi kênh/web/PC; mua đồng thời từ hai mode; account có hai server; đổi server trong lúc quote đang mở; khôi phục nhân vật và retry grant. Không được chia tiền mỗi nhân vật hoặc nhân ví nạp theo server để giải quyết các trường hợp này.
