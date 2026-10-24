# CUR-06 — Số dư, giữ tiền và giới hạn ví

**Ngày:**21/10/2026 · **Trạng thái:** Hoàn thiện đặc tả V1 trong phạm vi mục. Chỉ thiết kế MMORPG, chưa code/SQL/triển khai ví hoặc thay thủ thành.

**Đầu vào:** [Thương mại14](14_PROD_05_THUONG_MAI_VA_CONG_BANG.md), [quyền sở hữu16](16_PROD_07_SO_HUU_VA_TIEN_DO.md), [currency/icon169](169_CUR_01_ICON_NATIVE_32_VA_NGHIEM_THU.md), [cửa sổ47](47_UI_02_LOAI_CUA_SO_VA_DIEU_KHIEN.md), [đóng cửa sổ51](51_UI_06_THU_TU_CHONG_VA_DONG_CUA_SO.md).

## 1. Số dư và headroom

B là số dư đã ghi sổ; H là tổng khoản chi đang giữ; A=B−H là khả dụng. Invariant0≤H≤B≤M. P là quyền nhận đang chờ, chưa là tiền để chi và không tự cộng vào B. Khoản incoming-capacity reservation R giữ chỗ cho giao dịch đã được chấp nhận, phải bảo đảm B+R≤M; R không là tài sản kiếm được hoặc số dư khả dụng.

| Currency | M tối đa lưu trong ví, cấu hình V1 | Đơn vị |
|---|---:|---|
| Tinh Thạch |1.000.000.000|Nguyên1 |
| Ngân Ấn |1.000.000.000.000|Nguyên1 |
| Đồng Elarion |1.000.000.000.000|Nguyên1 |

Đây là giới hạn lưu trữ/khả dụng, **không phải cap kiếm trong ngày** hoặc khuyến nghị mức nạp. CAP/ECON còn chốt mức phát và sức mua. Dùng số nguyên chính xác ở server; PostgreSQL có thể lưu bigint theo hợp đồng này, API amount dạng chuỗi thập phân để tránh làm tròn ở client. Chưa tạo schema hoặc chọn thư viện.

## 2. Lifecycle giữ tiền

Tạo hold không giảm B, chỉ tăng H. Commit chi giảm đồng thời B và H đúng amount; release giảm H, giữ B. Reservation thông thường tự hết hạn sau120s nếu chưa commit và không ở bước không thể đảo ngược; retry không gia hạn vô hạn. Worker hết hạn và commit tranh cùng trạng thái/revision, chỉ một thắng. Operation đã commit không bị job timeout trả thêm tiền.

Khóa đối soát/chế tài có case riêng, không dùng hold120s để auto mở một khoản tranh chấp. Đơn thanh toán có provider đang xử lý phải theo PAY, không tự hết hạn bằng worker shop. Khi không biết trạng thái từ timeout mạng, hiển thị đang đối chiếu và đọc operationId, không xem như thất bại để trừ lần nữa.

## 3. Ví gần đầy và pending credit

Trước transfer/mua chợ đã được chấp nhận, giữ headroom người nhận bằng R; hold chi của người nhận không được tính như chỗ trống vì B chưa giảm. Nếu không đủ headroom thì không commit chuyển hoặc đốt fee. Mua shop cấp tiền không là đường bypass ceiling.

Reward gameplay đã có quyền nhưng đầy ví tạo pending grant bền vững theo grantId, không tự xóa hoặc phát lại sau relog. Chỉ nhận được phần nguyên tử của một grant; không tự nhận phần tiền rồi làm mất phần item. Nếu nguồn cho partial delivery, receipt từng phần phải có sẵn, không suy từ UI. Nguồn không có overflow policy không phát hành.

Chờ nhận vì wallet ceiling khác chờ nhận vì earning cap. Pending không tự đi qua reset để nhân hoặc vượt cap; emission window/quota/claimAt phải giữ source metadata và do CAP quyết định. Khi CAP chưa có policy, nguồn Đồng Elarion chưa mở theo171.

## 4. Số âm, refund và thanh toán

Không có spendable balance âm. Khoản chargeback/đảo do gian lận vượt số dư chuyển case hạn chế/đối soát và xử lý theo PAY, không biến thành nợ âm để người chơi tiếp tục giao dịch. Không tự xóa tiền đã chuyển hợp lệ của người khác hoặc thay đổi currency để bù.

Refund đã xác minh nhưng ví đầy thành quyền hoàn đang chờ gắn giao dịch gốc; không mất hoặc đổi tiền. Với nạp thật phải kiểm headroom trước tạo đơn, nhưng payment đến muộn vẫn cần đối soát/giữ quyền/hoàn theo PAY; không từ chối webhook rồi mất tiền thật. Lượt này không mở nạp hoặc chốt gói/hạn mức thanh toán tiền thật.

## 5. UI và kiểm sau

Hiện rõ Khả dụng / Đang giữ / Chờ nhận, và Tổng đã ghi sổ khi xem chi tiết. Không gọi B là “có thể tiêu” nếu H>0. Ví dụ B1000,H300→A700; nhận thêm200 đã commit→B1200,H300,A900; hủy hold→A1200. Nếu chỉ là pending200 thì A vẫn700.

Cần kiểm commit-vs-expire, recipient đầy ví, cùng global wallet qua mode, refund lặp, sát M, grant qua reset, hai tab và account bị hạn chế. Đây là yêu cầu và ví dụ số, chưa test hệ thống ví thật.

## 6. Quy tắc giữ chỗ nhận và credit

Mọi credit, kể cả thưởng trực tiếp và refund, phải giữ chỗ cho incoming reservation đã chấp nhận. Credit không có reservation chỉ được commit khi B+R+amount≤M. Credit dùng chính reservation r của nó phải có amount≤r, giảm R tương ứng trong cùng commit, đồng thời vẫn thỏa B_mới+R_mới≤M. Không dùng số khả dụng A để đo headroom.

Một khoản đang chờ nhưng chưa được admit không giữ headroom vô hạn. Transfer/shop phải giữ trước khi chấp nhận transaction; reward/refund đã có quyền có thể ở pending grant ngoài B cho đến khi nhận được. Người chơi không thể tiêu P, thế chấp P hoặc tăng earning cap bằng cách giữ P chưa nhận. Reservation/operation release và retry dùng ID duy nhất, không giải phóng một khoản hai lần.
