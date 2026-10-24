> **Cập nhật22/10/2026:** [CUR-08đã có bốn mockup và mẫu xem178](178_CUR_08_MOCKUP_VI_HAN_MUC_VA_BAN_GIAO.md). Điểm dừng và sốtiếnđộ bên dưới là lịch sử trước lượt tiếp tục.

# Tiếp tục thiết kế ví và dừng trước vẽ CUR-08

**Ngày:**21/10/2026. Theo yêu cầu tiếp tục thiết kế đến mục cần vẽ thì dừng. Chỉ cập nhật tài liệu/checklist; không viết code game, SQL, ví thật hoặc mockup.

## 1. Sáu hồ sơ đã hoàn thiện

| Mục | Nội dung | Hồ sơ |
|---|---|---|
| CUR-02 | Phạm vi account/server/mode và vòng đời ví | [170](170_CUR_02_PHAM_VI_VI_VA_QUYEN_SO_HUU.md) |
| CUR-03 | Nguồn nhận, nơi tiêu và phân biệt phát mới/chuyển/hoàn | [171](171_CUR_03_NGUON_NHAN_VA_NOI_TIEU.md) |
| CUR-04 | Quyền chuyển tiền, khóa và ranh giới thị trường | [172](172_CUR_04_CHUYEN_TIEN_VA_RANH_GIOI_KHOA.md) |
| CUR-05 | Quote, chọn currency, giữ/trừ nguyên tử và làm tròn | [173](173_CUR_05_BAO_GIA_VA_THU_TU_TRU_TIEN.md) |
| CUR-06 | Khả dụng/giữ/chờ, ceiling, headroom và đối soát | [174](174_CUR_06_SO_DU_GIU_TIEN_VA_GIOI_HAN.md) |
| CUR-07 | Sổ ví bất biến, biên nhận, retry và refund | [175](175_CUR_07_SO_VI_VA_BIEN_NHAN.md) |

[CUR-08 — brief vẽ cửa sổ Ví/Hạn mức](176_CUR_08_BRIEF_VE_CUA_SO_VI_VA_HAN_MUC.md) mới một phần, là điểm dừng hiện tại. Không tự bỏ qua phần vẽ để sang CAP.

## 2. Những quyết định chính

Tinh Thạch là một ví toàn account, dùng chung các mode nhưng quyền sản phẩm phải đúng scope. Ngân Ấn/Đồng Elarion theo account trong từng server MMORPG. Xóa nhân vật, đổi kênh/web/PC không xóa ví hoặc tạo cap mới. V1 chưa chuyển server.

Đồng Elarion là tiền P2P duy nhất; Tinh Thạch và Ngân Ấn không gửi người khác. V1 không gửi tiền P2P qua thư. Quái/quest thông thường không tự phát Đồng Elarion; chỉ sự kiện whitelist và cap đã thiết kế mới được mint. Các nguồn này chưa mở khi nhóm CAP chưa có policy. Bán NPC trả Ngân Ấn theo giá hợp lệ, phân giải không mint tiền tự do.

Không tự bù thiếu tiền bằng loại khác. Giá AND phải đủ mọi phần; OR phải chọn một phương án hoàn chỉnh. Quote nội bộ30s, reservation hủy được tối đa120s; đơn thanh toán tiền thật có lifecycle riêng ở PAY. Đóng cửa sổ không hủy một giao dịch đã commit.

Ceiling lưu ví V1: Tinh Thạch1tỷ, mỗi tiền gameplay1nghìn tỷ đơn vị nguyên. Đây không phải giới hạn thu nhập/ngày, mức nạp hay bảng sức mua. Cap kiếm/ngày và nguồn phát cụ thể chưa chốt, không lấy ceiling làm cap. Amount chính xác; không dùng float cho thuế hoặc số dư.

B=số đã ghi sổ, H=đang giữ, A=B−H; pending không là tiền tiêu được. Ví1000,giữ300,chờ200thì chỉ tiêu được700. Credit phải tôn trọng chỗ đã dành cho giao dịch nhận khác, không lấy A làm chỗ trống của ví.

## 3. Ví dụ và kiểm đối chiếu

Đã duyệt 11136 trạng thái số nhỏ thỏa0≤H≤B≤M vàB+R≤M; đối chiếu 29328 trường hợp giữ tiền đủ điều kiện, commit/release, credit tôn trọng headroom. Kiểm hai yêu cầu600từ ví800: chỉ một được giữ, retry cùngkey không giữ/trừ thêm. Refund nhiều phần không vượt giao dịch gốc. Ví dụ fee999×250bps→ceil25,người bán974 là fixture tính số, **không phải mức thuế chợ đã chốt**.

Đây là kiểm mô hình nghiệp vụ bằng số, không test backend, database isolation, provider hoặc multiplayer. Chưa có runtime ví/cap hoặc nguồn phát tiền thật nào được mở qua các tài liệu này.

## 4. Điểm cần vẽ và đầu ra kế tiếp

**Dừng ở CUR-08 — vẽ giao diện WIN-34 Ví/Hạn mức.** Brief176đã chỉ rõ bố cục và trạng thái. Cần bốn mockup: A tổng quan; B lịch sử/biên nhận; C giữ/chờ/thiếu tiền; D đổi scope/lỗi tải. Dùng lại ba icon32×32r002, phong cách pixelV4 và nền UIrêu. Không vẽ thêm currency, không đổi game thành UIvector.

Cửa sổ dự kiến640×540 trong viewport1280×720, là cửa sổ nổi; chưa kiểm bằng hình thật. Mở từ icon tiền/túiT, không lấy một phím skill làm phím ví. Đóng theoUI-06, không pause server, trong combat chỉ xem. Nội dung cap chưa mở không hiển thị số giả0/0 hoặc hạn mức tùy đặt.

**Chưa vẽ PNG/SVG/HTML/CSS hoặc dùng công cụ sinh ảnh trong lượt này.** Chưa đánh dấu CUR-08hoàn thiện. Sau phầnvẽ mới tiếp tục CAP-01…14theo roadmap.

## 5. Tiến độ

**113 hồ sơ hoàn thiện /9 một phần /391 chưa thiết kế =513.** Tăng6hồ sơ hoàn thiện và1mục mộtphần; không tăng task. GATE-01, ITEM-12, art/camera và các hệ chưa làm tiếp tục giữ trạng thái. Các hồ sơ đã hoàn thiện là thiết kế, không tính năng đã triển khai.
