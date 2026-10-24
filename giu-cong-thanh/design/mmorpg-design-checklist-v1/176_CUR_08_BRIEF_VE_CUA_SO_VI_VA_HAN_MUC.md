> **Bản hiện hành r002 ·22/10/2026:** [Đã thiết kế lại đúng ngữ cảnh pixel2.5D179](179_CUR_08_THIET_KE_LAI_PIXEL_2_5D.md). Bản giao diện xanh phẳng trước là r001 để đối chiếu; quy tắc ví không đổi.

# CUR-08 — Brief vẽ cửa sổ Ví/Hạn mức

**Ngày cập nhật:**22/10/2026 · **Trạng thái:** Hoàn thiện đặc tả và bốn mockup. [Xem ảnh/mẫu/QA178](178_CUR_08_MOCKUP_VI_HAN_MUC_VA_BAN_GIAO.md). Chỉ thiết kế MMORPG, chưa code/SQL/triển khai ví hoặc thay thủ thành.

**Đầu vào:** [Thương mại14](14_PROD_05_THUONG_MAI_VA_CONG_BANG.md), [quyền sở hữu16](16_PROD_07_SO_HUU_VA_TIEN_DO.md), [currency/icon169](169_CUR_01_ICON_NATIVE_32_VA_NGHIEM_THU.md), [cửa sổ47](47_UI_02_LOAI_CUA_SO_VA_DIEU_KHIEN.md), [đóng cửa sổ51](51_UI_06_THU_TU_CHONG_VA_DONG_CUA_SO.md).

## 1. Phạm vi và ghi nhận điểm dừng trước đây

Điểm dừng trước vẽ đã được ghi nhận ở177. Lượt tiếp tục22/10đã hoàn thiện mẫu độc lập và xuất bốnảnh tại178; phần brief dưới đây là đầu vào đã thực hiện. Đã có ba icon32×32 ở169, tái sử dụng đúng ảnh đó; không cần vẽ thêm tiền. Hồ sơ này giữ brief để tra cứu; đầu ra HTML/CSSvàPNG đã có ở178. Chưa thiết kế CAP-01trong lượt này.

## 2. Cửa sổ và lối vào

WIN-34 mở từ biểu tượng tiền trên HUD hoặc hàng tiền trong túiT; không gán phím mới cạnh tranh1–9/Q/E/R/Z. Menu có tùy chọn gán phím qua hệ input sau, mặc định không chiếm một bind sẵn dùng. Cửa sổ nổi theo47, dự kiến640×540 ở viewport1280×720, có scale/clamp theo UI hiện hành; chưa kiểm bằng hình thật.

Panel chặn click trong bounds, không pause thế giới. Trong combat chỉ xem; mua/chuyển/nhận tiền chờ qua dịch vụ bị khóa theo policy. Focus ô tìm kiếm nhận chữ/WASD, không cast; đóng theo51, ~đóng nhanh, Escđóng lớp trên trước, không tự thoát sảnh hoặc hủy request đã gửi. Mởví không tự mở shopnạp.

## 3. Bố cục cần vẽ

Header: tênVí, scope server/mode hiện tại, nút đóng. Khối tổng quan có ba hàng currency, icon gốc32×32, tên, số khả dụng chính; chữ phụ đang giữ/chờ nhận. Tinh Thạch gắn nhãn toàn tài khoản; tiền gameplay gắn server, không tạo hình ví riêng từng nhân vật.

Hai tab Số dư và Lịch sử. Hàng chọn mở chi tiết nguồn/nơi tiêu, khoản giữ/pending và liên kết receipt. Lịch sử có lọc currency, khoảng ngày, nhận/chi/hoàn/đang xử lý,25dòng/trang, nút xem biên nhận. Không dùng currency icon làm nút mua ngay.

Khu Hạn mức đặt trong chi tiết Đồng Elarion, nhưng CAP-01…14chưa chốt nên chưa hiện số giả0/0. Trong mẫu thiết kế có thể minh họa trạng thái “Nguồn phát hành chưa mở”, không lộ tên field/config cho người chơi. Khi có policy thì thể hiện đã nhận/còn lại/kỳ/reset/nguồn được tính, không nhầm số dư tối đa với cap kiếm.

## 4. Các trạng thái phải thể hiện

| State | Nội dung cần thấy |
|---|---|
| Sẵn sàng | Ba số khả dụng đúng scope, đang giữ/chờ tách biệt |
| Đang tải | Skeleton gọn, không giả số0 |
| Ví trống | Giá trị0thật và lối xem nguồn phù hợp |
| Lỗi mạng | Lần đọc cuối có nhãn chưa cập nhật, thử lại, không cho chi theo cache |
| Đang xử lý | OperationId/trạng thái, không nút mua lặp tạo key mới |
| Thiếu tiền | Loại tiền thiếu và lượng thiếu; không tự bù bằng premium |
| Chưa mở/bị hạn chế | Lý do được phép công khai và hỗ trợ, không hiển thị khóa nội bộ |
| Đổi scope/đối soát | Tạm vô hiệu quote cũ, tải lại đúng ví, không hiển thị số cũ dưới header mới |

Cảnh báo giá trị cao/thiếu tiền dùng modal có owner vàquote, không một cửa sổ thứ hai không biết đang xác nhận gì. Nhãn amount không rút gọn ở bước xác nhận; hàngHUDcó thểrútgọntheo166.

## 5. Gói ảnh cần vẽ tiếp

Bốn mockup trên khung1280×720 cùng style pixelV4/UIrêu hiện tại: A tổngquanSốdư; B lịch sử vàreceipt; C đanggiữ/chờnhận/thiếu tiền; D thay scope vàlỗi tải. Dùng chính icon32×32native, không redrawthànhvector hoặc phóngmượt. Các trạngtháicòn lại ghi chú biến thể trênphiếu, không cần tám màn bố cục hoàn toàn khác.

Mockup là ảnh thiết kế, không giao diện chạy thật. Dữ liệu minh họa ghi rõ trênphiếu: ví dụ NgânẤn1000đãghisổ/300giữ/700khảdụng/200chờnhận; không lấy số ví dụ làm grant hoặc cap production. Không hiển thị tỷgiá nạp/gói bán khi PAYchưa thiết kế.

## 6. Điều kiện hoàn tất

Phải có ảnh mockup, kiểm bố cục tiếngViệt/sốdài/focus/nút đóng, màu trạng thái, không che thông tin thiết yếu; lưu revision/manifest nguồn. Các điều kiện trên đã có bằng chứng mẫu/ảnh/QAở178, nênCUR-08hoàn thiện về thiết kế. Chưa tích hợp backend hoặc bắt đầuCAPtrong lượt này.
