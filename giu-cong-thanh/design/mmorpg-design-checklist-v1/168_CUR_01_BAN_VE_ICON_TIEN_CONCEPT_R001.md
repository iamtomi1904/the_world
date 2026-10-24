> **Cập nhật hiện hành:** [Đã hoàn thiện ba icon32×32r002 vàCUR-01](169_CUR_01_ICON_NATIVE_32_VA_NGHIEM_THU.md). Nội dung dưới đây là lịch sử điểm dừng/concept; r001vẫn giữ nguyên để đối chiếu.

# CUR-01 — Bàn giao bản vẽ concept ba icon tiền

**Ngày:**21/10/2026 · **Phiên bản art:**r001 · **Công cụ:**built-in image_gen, không dùng CLI/API fallback. Người dùng đã cho phép bắt đầu vẽ sau điểm dừng167.

## 1. Bảng xem chung

Thứ tự từ trái sang phải: **Tinh Thạch / Ngân Ấn / Đồng Elarion**. Đây là contact sheet thiết kế trên nền xanh rêu, chưa là ảnh chụp UI hoặc phép kiểm sprite32×32.

![Bộ ba icon tiền trên nền UI xanh rêu](/assets/mmorpg-concepts/currency/r001/currency_contact_sheet__concept_r001.png)

## 2. Các hình đã vẽ

| Tiền | Hình đã thực hiện | Tệp |
|---|---|---|
| Tinh Thạch | Khối tinh thể cyan cao, mặt cắt lớn, cạnh chéo | [PNG concept](/assets/mmorpg-concepts/currency/r001/currency_premium_crystal__concept_r001.png) |
| Ngân Ấn | Miếng bạc vuông bo góc, dấu kiểm khắc giữa | [PNG concept](/assets/mmorpg-concepts/currency/r001/currency_bound_seal__concept_r001.png) |
| Đồng Elarion | Đồng xu bronze tròn, lỗ vuông thật trong suốt | [PNG concept](/assets/mmorpg-concepts/currency/r001/currency_elarion_coin__concept_r001.png) |

Bộ mới chỉ phục vụ thiết kế MMORPG, không thay favicon, tiền/vàng thủ thành hoặc logic ví. Không lấy các PNG này làm runtime iconKey32khi chưa chuẩn hóa.

## 3. Lưu trữ và kiểm tệp

Thư mục dự án: `public/assets/mmorpg-concepts/currency/r001/`. BaPNGriêng có kênhRGBA/alpha0…255, không nền checkerboard được vẽ sẵn; tâm lỗcoin alpha0. Contact sheet có nềnUIRGB, không dùng như sprite transparent. Bản gốc sinh ảnh vẫn giữ riêng, không ghi đè tài nguyên cũ.

| Asset ID | Tệp | Kích thước thật | Trạng thái |
|---|---|---|---|
|AT-AST-100001|currency_premium_crystal__concept_r001.png|1254×1254|Concept r001, chưa runtime|
|AT-AST-100002|currency_bound_seal__concept_r001.png|1254×1254|Concept r001, chưa runtime|
|AT-AST-100003|currency_elarion_coin__concept_r001.png|1275×1233|Concept r001, chưa runtime|
|AT-AST-100004|currency_contact_sheet__concept_r001.png|1774×887|Concept r001, chưa runtime|

Manifest có revision, currencyId, kích thước, mode, alpha, publicUrl, SHA256vàcờruntimeReady=false. Prompt tạo từng icon lưu tại `prompts.json`, prompt compositing tại `contact_sheet_prompt.txt` cùng thư mục. Các mãasset100001…100004được đăng ký trong manifest mới, khác các mã ví dụ chưa cấp trước đây.

## 4. Đánh giá và giới hạn

Về ý tưởng, ba silhouette cao/vuông/tròn và ba vật liệu cyan/bạc/đồng phân biệt được trên bảng xanh rêu. Không có text/số hoặc khungrarity nằm trong icon. Tên/mã/đơn vị tiền giữ166, không thêm loại tiền.

**Chưa đạt đầu ra native32×32.** Công cụ sinh các ảnh lớn, có chi tiết màu và alpha chuyển tiếp; không được gọi chúng là sprite32pxchỉ vì prompt yêu cầu. Cần cleanup lưới pixel, bảng màu, viền/alpha, giữ tối thiểu2pxmargin ở32×32và kiểm đọc tại cỡgốc/phóng2×. Bản nhỏ trên contact sheet cũng là ảnh sinh, không thay thế phép kiểm native.

Chưa downsample hoặc chỉnh ảnh bằng script, chưa vẽ walletUI, chưa code logic tiền/database. Không đánh dấu CUR-01xong khi thiếu size/cleanup. ART-01/02/04vàcamera2.5Dcũng không tự được nghiệm thu qua iconHUD.

## 5. Trạng thái checklist và bước tiếp theo

CUR-01 vẫn **thiết kế một phần**, nhưng từ “chưa có hình” đã chuyển thành “đã có ba concept vàcontactsheet, chờ native cleanup”. Tổng **106 hồ sơ hoàn thiện /9 một phần /398 chưa thiết kế =513** giữ nguyên. CUR-02…08chưa được làm trong lượt vẽ này.

Đầu ra cần tiếp theo: baPNG32×32chỉnh theo lưới và mẫu kiểm trênUIởcỡthật. Không cần thiết kế lại hình từ đầu nếu giữ hướng này. Chưa công bố đã hoàn thành hoặc tích hợp hệ thống ví.
