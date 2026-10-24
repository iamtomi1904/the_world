# CUR-05 — Báo giá và thứ tự trừ tiền

**Ngày:**21/10/2026 · **Trạng thái:** Hoàn thiện đặc tả V1 trong phạm vi mục. Chỉ thiết kế MMORPG, chưa code/SQL/triển khai ví hoặc thay thủ thành.

**Đầu vào:** [Thương mại14](14_PROD_05_THUONG_MAI_VA_CONG_BANG.md), [quyền sở hữu16](16_PROD_07_SO_HUU_VA_TIEN_DO.md), [currency/icon169](169_CUR_01_ICON_NATIVE_32_VA_NGHIEM_THU.md), [cửa sổ47](47_UI_02_LOAI_CUA_SO_VA_DIEU_KHIEN.md), [đóng cửa sổ51](51_UI_06_THU_TU_CHONG_VA_DONG_CUA_SO.md).

## 1. Không tự đổi loại tiền

Mỗi offer công bố một currency hoặc một cấu trúc giá rõ. Giá AND đòi đủ mọi thành phần, ví dụ tiền+nguyên liệu. Giá OR cho chọn một phương án đầy đủ. Không gộp nửa Ngân Ấn+nửa Đồng Elarion, không bù bằng Tinh Thạch, trừ khi có offer hỗn hợp riêng đã thiết kế; V1 không có giá trộn premium/gameplay.

Mặc định ưu tiên Ngân Ấn chỉ khi chính offer cho phép phương án đó. Thiếu Ngân Ấn thì dừng và hiện thiếu, không tự chuyển sang tiền tự do/nạp. Lựa chọn currency có thể nhớ trong phiên của cùng vendor, nhưng quote mới phải hiển thị lại; ghi nhớ không là quyền tự mua.

## 2. Quote chuẩn

Báo giá server gồm quoteId, offer/version, phạm vi ví/recipient, số lượng, giá đơn vị, subtotal, discount, fee, total từng currency, vật liệu/item nguồn và binding đầu ra, điều kiện, expiresAt, revision liên quan. Giá trị nguyên chính xác, tên tiền cạnh số. Không lấy số hiển thị rút gọn để thanh toán.

Quote có hiệu lực30s theo server; nhận quá hạn thì báo giá lại và cần xác nhận mới, không tự chấp nhận giá mới. Mốc30s chỉ áp báo giá trong game, không áp timeout đơn thanh toán nhà cung cấp. Đổi server/nhân vật/recipient, offer hoặc thành phần giá làm quote cũ vô hiệu. Thiếu fee config không mặc định miễn phí; nếu không thu phí phải khai báo FREE rõ.

## 3. Tính số và làm tròn

Tổng gốc=giá nguyên×số lượng nguyên. Thuế/discount phần trăm dùng tỷ lệ hữu tỉ hoặc basis points, không float. Với fee do người bán chịu, fee=ceil(taxBase×bps/10000), tính một lần trên tổng dòng giao dịch đã áp discount theo policy; payout=subtotal−fee. Policy phải xác định người chịu, taxBase và min/max phí, không suy từ ví dụ.

Ví dụ kiểm số, không mức thuế phát hành:3món×333=999,fee250bps→ceil(24,975)=25,payout974. Tách mua thành nhiều giao dịch có thể đổi làm tròn và phải được MARKET/ECON đánh giá, không hứa chống lạm dụng chỉ bằng công thức này. Giá sau discount không âm; discount/tax chưa khai báo thì offer chưa được mở.

## 4. Thứ tự xử lý

Preview→xác nhận ý định→server kiểm lại quote/quyền/revision→giữ đủ tất cả tài sản→commit trừ tiền/tiêu nguyên liệu/cấp kết quả cùng receipt. Một thành phần AND thiếu thì không trừ thành phần khác. Request mua có idempotency key; retry cùng key trả đúng receipt cũ, không mua thêm.

Đóng cửa sổ không tự hủy request đã gửi. Nếu đã commit thì đọc kết quả; nếu còn reservation hủy được thì yêu cầu hủy và chờ server xác nhận. Combat bắt đầu trước commit phải kiểm policy47; nếu dịch vụ không được phép thì release toàn bộ hold. Không tự rollback một lần mua đã thành công chỉ vì toast không tới.

## 5. Giao thoa đặc biệt

Hồi sinh dùng deathId và giá104, không màn shop thường; lựa chọn trả phí và dùng vật phẩm tách rõ. Mua cosmetic kiểm quyền đã mở, scope và art tương thích trước chi; không mua trùng để nhận tiền bù ngoài policy. Tinh Thạch dùng cùng global wallet nên mọi mode cùng tranh số dư khả dụng qua một cơ chế commit.

Thời gian giữ giá trị thông thường tối đa120s cho operation có thể hủy trước commit, theo174. Đơn tiền thật/đối soát chưa thuộc timeout này. Chưa triển khai SQL hoặc các luồng mua thật.
