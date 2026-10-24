> **Bản hiện hành r002 ·22/10/2026:** [Đã thiết kế lại đúng ngữ cảnh pixel2.5D179](179_CUR_08_THIET_KE_LAI_PIXEL_2_5D.md). Bản giao diện xanh phẳng trước là r001 để đối chiếu; quy tắc ví không đổi.

# CUR-08 — Thiết kế cửa sổ Ví/Hạn mức, bản r001

**Ngày:**22/10/2026 · **Trạng thái:** Hoàn thiện thiết kế giao diện trong phạm vi CUR-08. Có mẫu HTML độc lập và bốn ảnh mockup; chưa triển khai ví/gameplay/backend/PostgreSQL.

## 1. Xem thiết kế

[Mở mẫu tương tác độc lập](/design-preview/wallet-v1/index.html). Nếu game đang chạy ởlocalhost:3000, truy cập `/design-preview/wallet-v1/` để xem mẫu trong browser. Có thể chuyển A/B/C/D và biến thể, xem số, tìm biên nhận và đóng/mở cửa sổ; không có giao dịch tiền thật.

Ảnh xuất chính xác1280×720; cửa sổ640×540. Bộ icon32×32r002được tham chiếu nguyên tệp, không redraw hoặc phóng mượt.

### A — Số dư và phạm vi ví

![Ví: tổng quan số dư](/design-preview/wallet-v1/a_overview__r001.png)

Tinh Thạch toàn tài khoản tách rõ tiền gameplay ởElarion-01. Số chính là khả dụng; đang giữ/chờ nhận nằm dưới, không bị cộng vào số có thể chi. Khu Đồng Elarion nói nguồn phát hành mới chưa mở, không hiển thị cap0/0 hoặc quota chưa chốt. Không tự mở shopnạp khi nhấp icon tiền.

### B — Lịch sử và biên nhận

![Ví: lịch sử và biên nhận](/design-preview/wallet-v1/b_history_receipt__r001.png)

Dùng hai cột trong phần nội dung: giao dịch bên trái, biên nhận bên phải. Bản xếp dọc đầu tiên bị tràn nên đã sửa trước bàn giao. Biên nhận tách B/H/khả dụng trước–sau, không coi khoản giữ300là một lần đã chi300. Lọc currency/tìm mã và chọn biên nhận hoạt động trên dữ liệu minh họa tại chỗ, không gọi API.

### C — Đang giữ, chờ nhận và thiếu tiền

![Ví: giữ/chờ/thiếu tiền](/design-preview/wallet-v1/c_held_pending_shortage__r001.png)

Ví dụ B1000/H300/P200chỉ có700khả dụng. Báo giá minh họa900Ngân Ấn còn thiếu200; Thanh toán bị khóa. Không bù bằng Đồng Elarion/Tinh Thạch. Hộp thoại có nútQuay lại; Escđóng hộp thoại trước, Esc tiếp mới đóngví. Các con số chỉ là fixture thiết kế, không gán giá dịch vụ hoặc nguồn thưởng production.

### D — Đổi server và lỗi tải

![Ví: đổi server và lỗi mạng](/design-preview/wallet-v1/d_scope_network_error__r001.png)

SangElarion-02, số gameplay hiện dấu—khi chưa tải được, không giữ số củaElarion-01dưới header mới. Tinh Thạch có thể giữ vì scope toànaccount. Báo giá cũ mất hiệu lực. Thử lại chuyển sang skeleton, không giả số0hoặc cho chi theo cache.

## 2. Style và điều khiển

Theo token46: nền#102019,card#1C3025,viền#60705A,nhấn#B5A16A,chữ#EEE6D0. Khung phẳng gọn, góc/điểm motif vuông, không giấy da/blur nặng. UI là lớp2D phẳng trong MMORPG2.5DpixelV4. Chữ hỗ trợ tiếngViệt, số tabular và không rút gọn ởbiên nhận/xác nhận.

Mở từ biểu tượng tiền hoặc hàng tiền ởtúiT, không lấy phím1–9/Q/E/R/Z. Cửa sổ nổi không pause thế giới; phần prototype không có worldgameđể kiểm click-through thực. Trong combat sản phẩm chỉ cho xem theo47; quyền server chưa được triển khai. Focus input không được hiểu thành phím skill. ~đóng nhanh khi không soạn chữ; Esc ưu tiên lớp trên. Không đóng request bằng cách chỉ tắt panel.

Bốn nút A/B/C/D và bộ chọn biến thể nằm ngoài cửa sổ là công cụ xem thiết kế, **không là thanh HUD cần đưa vào game**. Nhãn dữ liệu minh họa cũng là chú thích thiết kế. Mẫu không có nút nạp thật, giá gói hoặc số quota tự bịa.

## 3. Tám trạng thái đã có cách trình bày

| Trạng thái | Nơi thể hiện |
|---|---|
| Sẵn sàng | A, variantready |
| Đang tải | Variantloading hoặcThử lại ởD |
| Ví trống | Variantempty, số0thật |
| Lỗi mạng | D, không dùng sốcũ |
| Đang xử lý/giữ tiền | B vàC, biên nhận/operationmẫu |
| Thiếu tiền | C, nút thanh toán khóa |
| Chưa mở/bị hạn chế | A nguồnphát hành; variantrestricted |
| Đổi scope/đối soát | D vàvariantrestricted |

Bộ icon cũ vẫn giữ nguyênhash. Khả năng thu/phát tiền không được giả lập trong game; đây là mẫu trình bày các trạng thái để bàn giao implementation.

## 4. Kiểm tra đã thực hiện

Render bằngChromeheadless quaPlaywright, chỉ mở tệpHTMLmẫu. Bốn ảnh đúng1280×720,panel640×540, nội dung chính không tràn ngoài ý muốn. TiếngViệt/số dài/nútđóng/ảnh32pxđược kiểm và xem ảnh. Các biến thểloading/empty/restricted/longvừa panel, không cắt số trầnví. Kiểm thêm tổngquan tại1024×768.

Các thao tác tại chỗ đã kiểm: tab; nhậpWASD/số trong ôtìm; lọc đúng mã003và đổibiên nhận; lọc không kếtquả; Escđóngmodal rồi panel; mở lại; ~không đóng khi inputđangsoạn và đóng khi focusngoài input; retryra skeleton. Không cópageerrortrong các ca này.

**Chưa kiểm:** quyềnserver, sốdư thật, cấp/trừtiền, transaction race, capearning, SQL, inputgameplaytíchhợp, mọiđộphângiải/UIscale. Mẫu duyệt bố cục không nghiệm thuUI-03haycameraART2.5Dcòn mở.

## 5. Bàn giao và trạng thái

Thư mục:`public/design-preview/wallet-v1/`. Gồm`index.html`,bốnPNGvà`manifest.json`ghi sourcehash,hashảnh,iconrefs,methodvàQAscope. Phương pháp là HTML/CSStheotokenvànguyêntệpiconcó sẵn, xuấtảnhbằngbrowser; không dùngimagegenđểsinh lại chữ/số/icon.

**114 hồ sơ hoàn thiện /8 một phần /391 chưa thiết kế =513.** CUR-08từmộtphần→hoànthiệntrongphạmvidesign. CUR-01…08đã cóhồsơ; cònCAP-01…14vềhạnmứcaccount. Khôngmở nguồnĐồng Elarion chỉvìcửa sổvíđãcóhình. Khôngsửacodegame/assetthủthànhhoặcdatabase.
