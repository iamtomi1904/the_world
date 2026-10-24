# CUR-07 — Sổ ví, biên nhận và đối soát

**Ngày:**21/10/2026 · **Trạng thái:** Hoàn thiện đặc tả V1 trong phạm vi mục. Chỉ thiết kế MMORPG, chưa code/SQL/triển khai ví hoặc thay thủ thành.

**Đầu vào:** [Thương mại14](14_PROD_05_THUONG_MAI_VA_CONG_BANG.md), [quyền sở hữu16](16_PROD_07_SO_HUU_VA_TIEN_DO.md), [currency/icon169](169_CUR_01_ICON_NATIVE_32_VA_NGHIEM_THU.md), [cửa sổ47](47_UI_02_LOAI_CUA_SO_VA_DIEU_KHIEN.md), [đóng cửa sổ51](51_UI_06_THU_TU_CHONG_VA_DONG_CUA_SO.md).

## 1. Sổ không sửa lịch sử

Mỗi nghiệp vụ có operationId/idempotency key, actor, owner scope, currency, loại nguồn, amount, thời điểm server, trạng thái và receipt. Ghi sổ đã commit là bất biến; sửa sai bằng entry đảo/điều chỉnh có liên kết, không sửa số cũ hoặc xóa giao dịch để làm tổng khớp.

| Sự kiện | Delta B | Delta H | Ý nghĩa |
|---|---:|---:|---|
| Giữ amount x |0|+x|Giảm khả dụng, chưa chi |
| Commit hold x |−x|−x|Chi thật đúng một lần |
| Release hold x |0|−x|Trả quyền dùng, không mint |
| Credit hợp lệ x |+x|0|Mint/transfer/restore theo source |
| Pending credit |0|0|Quyền chờ, chưa là số dư |

Receipt có số trước/sau và delta của cả B/H; không cộng tất cả dòng “giữ” và “chi” như hai lần tiêu tiền. Với transfer có liên kết debit/credit/fee, tổng bảo toàn trừ sink. Với MINT giữ source/grant/cap metadata; wallet không tự phân loại transfer thành emission.

## 2. Trạng thái trên UI

REQUESTED/RESERVED/COMMITTED/RELEASED/REJECTED/EXPIRED/RECONCILING là trạng thái operation, không chuỗi số dư đã thay đổi hết. Refund là operation riêng liên kết giao dịch gốc, có partial/full; không ghi đè COMMITTED thành chưa từng mua.

Receipt hiển thị mã giao dịch, tên khoản, currency, amount nguyên, server/mode/nhân vật thực hiện, UTC timestamp đã đổi múi giờ người xem và kết quả. Thời gian lưu là UTC; múi giờ người xem không quyết reset earning cap. Lịch sử chọn khoảng ngày, lọc currency/nhận/chi/đang giữ/hoàn và tra mã; phân trang25dòng, không render vô hạn.

## 3. Retry và hoàn trả

Cùng idempotency key phải cùng fingerprint nội dung; khác amount/recipient/offer với key cũ bị từ chối. Kết quả cũ được trả lại kể cả server restart. Client timeout chỉ cho thử đọc trạng thái/tiếp tục cùng operation, không tự tạo key mua mới khi chưa biết kết quả.

Refund cộng đúng currency/wallet đã trả, tổng refund không vượt khoản được hoàn của receipt gốc. Hoàn một phần không được làm tròn thành nhiều lần hơn tổng giá đã trả; allocation theo đơn vị hàng/discount được giữ từ lúc mua. Coupon/bonus/fee có hoàn hay không phải ghi policy offer/PAY trước phát hành, không tự giả định refund mọi fee.

## 4. Quyền riêng tư và hỗ trợ

Người chơi chỉ xem sổ ví của account mình, scope đang có quyền. Chuyển tiền P2P có tên công khai của đối tác phù hợp, không số dư, email, IP, token hoặc lý do chế tài của họ. Chi tiết mode khác có nhãn rõ, tránh tưởng bị trừ bởi nhân vật đang chơi.

Gửi yêu cầu hỗ trợ bằng operationId/receipt, không ảnh số dư làm bằng chứng duy nhất. Công cụ nhân viên có phân quyền, case và audit truy cập; không cho nhân viên sửa balance tùy ý bằng form không ghi sổ. Thời hạn lưu và dữ liệu sau đóng account thuộc SAFE/PAY, không xóa entry còn dispute chỉ vì UI mặc định lọc tháng hiện tại.

## 5. Đối soát và cảnh báo

B từ entry đã commit phải bằng số dư snapshot đã lưu; H bằng tổng hold đang hiệu lực. Chênh lệch đưa ví về trạng thái đối soát với thông báo rõ, không tự chọn số client hoặc tự phát tiền bù. Đối soát và transaction constraints cần triển khai server; chưa code hoặc cam kết đã chống mọi race.

Kiểm sau: response bị mất, callback trùng, request khác payload cùng key, refund nhiều phần, hold hết hạn cùng commit, lỗi trước/sau grant và mua premium từ hai mode. CUR-07 hoàn thiện hợp đồng sổ/receipt, không đồng nghĩa PAY/DATA/TRADE đã xong.
