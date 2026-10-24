# CUR-04 — Chuyển tiền và ranh giới tiền khóa

**Ngày:**21/10/2026 · **Trạng thái:** Hoàn thiện đặc tả V1 trong phạm vi mục. Chỉ thiết kế MMORPG, chưa code/SQL/triển khai ví hoặc thay thủ thành.

**Đầu vào:** [Thương mại14](14_PROD_05_THUONG_MAI_VA_CONG_BANG.md), [quyền sở hữu16](16_PROD_07_SO_HUU_VA_TIEN_DO.md), [currency/icon169](169_CUR_01_ICON_NATIVE_32_VA_NGHIEM_THU.md), [cửa sổ47](47_UI_02_LOAI_CUA_SO_VA_DIEU_KHIEN.md), [đóng cửa sổ51](51_UI_06_THU_TU_CHONG_VA_DONG_CUA_SO.md).

## 1. Ma trận chuyển

| Kênh | Tinh Thạch | Ngân Ấn | Đồng Elarion |
|---|---|---|---|
| Đổi nhân vật cùng account/server | Cùng ví, không transfer | Cùng ví | Cùng ví |
| Đổi mode | Cùng ví nạp, chi theo SKU | Không chuyển | Không chuyển |
| Người chơi khác | Không | Không | Chỉ trade/chợ đã đủ quyền |
| Thư người chơi | Không | Không | V1 không gửi tiền trực tiếp qua mail |
| Thư hệ thống | Delivery của nguồn hợp lệ, không tự mint | Tương tự | Giữ source/cap của grant gốc |
| NPC bán/đổi | Theo shop premium, không đổi tiền | Theo dịch vụ/shop | Không đổi trực tiếp với tiền khóa |
| Kho guild/tiền guild | Không trong V1 | Không | Chưa mở, cần hệ guild riêng |
| Server khác | Ví nạp đã chung | Không | Không |

Ví dùng chung nhân vật không có thao tác “chuyển Ngân Ấn sang nhân vật phụ”; chỉ chọn đúng server rồi chi cho người đang thao tác. Không dùng self-trade để cấp thưởng nhận tiền hoặc tăng quota.

## 2. Điều kiện P2P

Chỉ Đồng Elarion chuyển giữa hai account trong cùng miền server và qua giao dịch hợp lệ. Điều kiện tuổi account, cấp, vùng an toàn, khoảng cách, hạn mức chuyển và chống lạm dụng thuộc TRADE/CAP, chưa mở P2P thật khi các policy này chưa có. Không trả “được phép” chỉ vì currency transferable=true.

Thao tác chuyển phải all-or-nothing: bên trả đủ số khả dụng, bên nhận đủ headroom và quyền, fee profile rõ, item cùng giao dịch hợp lệ. Đủ tiền nhưng người nhận bị khóa hoặc đầy ví thì từ chối trước commit, không đốt phí rồi tạo nợ. Không cho số âm bằng giao dịch tặng hoặc nhiều listing đồng thời.

## 3. Khóa không thể bị rửa bằng tiền

Bán item khóaNPC chỉ thu Ngân Ấn theo sellProfile. Hoàn tiền gửi đúng ví/currency đã chi; không dùng hoàn Đồng Elarion cho món mua bằng Ngân Ấn. Hộp/recipe/đổi thưởng giữ binding theo139, không xuất món tự do từ đầu vào khóa nếu policy không cho phép.

Một món nguyên liệu tự do có thể được mua bán bằng Đồng Elarion rồi dùng craft, nhưng đầu ra không tự được NPC mua lại bằng tiền tự do. Shop premium không bán vật liệu sức mạnh giao dịch được. Đây là ranh giới nguồn tiền; ECON vẫn phải kiểm mọi vòng chuyển đổi trước mở thị trường.

## 4. Tính bảo toàn và hoàn tác

Transfer tổng ví giảm đúng fee bị tiêu hủy nếu có; không mint bên nhận. Ví dụ minh họa policy fee=25trên giá1000: người mua−1000, người bán+975, sink25; không cộng1000cho người bán rồi quên thu phí. Đây không là bảng thuế V1; rate thật thuộc MARKET/ECON.

Refund/rollback có transactionId gốc, kiểm khoản nào còn có thể hoàn và số đã hoàn. Nếu tài sản đã qua người khác thì chuyển case tranh chấp, không tự phát bản tiền thứ hai hoặc trừ ví người khác dựa vào lời khai client. Quy trình chargeback premium thuộc PAY, không tự biến thành giao dịch Đồng Elarion.

## 5. Phản hồi

Lý do cụ thể: loại tiền không được chuyển, khác server, ví đang hạn chế, tiền đã giữ, người nhận không đủ chỗ hoặc tính năng chưa mở. Không hiển thị các khóa nội bộ của người nhận, số dư hoặc lý do chế tài riêng tư cho người gửi. Log audit được phép có đầy đủ quan hệ giao dịch để hỗ trợ.
