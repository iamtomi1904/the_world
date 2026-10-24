# CUR-01 — Tên tiền, đơn vị và icon đã hoàn thiện

**Ngày:**21/10/2026 · **Trạng thái:** Hoàn thiện thiết kế và ba icon32×32 r002; đã kiểm asset tĩnh theo [biên bản169](169_CUR_01_ICON_NATIVE_32_VA_NGHIEM_THU.md). Chưa tích hợp ví hoặc bắt đầu CUR-02.

**Đầu vào:** [Thương mại14](14_PROD_05_THUONG_MAI_VA_CONG_BANG.md), [quyền sở hữu16](16_PROD_07_SO_HUU_VA_TIEN_DO.md), [chuẩn icon42](42_ART_07_CHAN_DUNG_AVATAR_ICON.md), [ROAD-03](165_ROAD_03_RA_SOAT_NEN_CHI_SO_VA_SLOT.md).

## 1. Chốt ba tên chính thức trong thiết kế

| Mã ổn định | Tên hiển thị | Vai trò | Motif để vẽ |
|---|---|---|---|
| PREMIUM_CRYSTAL | Tinh Thạch | Ví tiền nạp account toàn game, dùng theo sản phẩm/mode cho phép | Một tinh thể sáu cạnh lệch, xanh ngọc sáng, một mặt cắt rõ |
| BOUND_SEAL | Ngân Ấn | Tiền gameplay khóa account/server | Miếng ấn bạc vuông bo góc, dấu khắc kiểm nhận giữa mặt |
| ELARION_COIN | Đồng Elarion | Tiền tự do duy nhất dùng giao dịch trong server | Đồng xu đồng tròn, lỗ vuông nhỏ và khía cạnh rõ |

Các mã là hợp đồng dữ liệu tương lai, chưa thêm enum/database/API. Không tạo tiền thứ tư, tiền bonus riêng hoặc item stack tiền. Không đồng nhất Tinh Thạch với tinh thể quest/phong ấn. Ngân Ấn là giấy/ấn giá trị nghiệp vụ được trạm thừa nhận, không cùng vật thể với Dấu Kiểm Ấn của Edran. Đồng Elarion là tiền quy ước thương mại, không mảnh hồn hoặc vật phẩm phải trang bị.

## 2. Đơn vị và hiển thị

Mỗi tiền có đơn vị nhỏ nhất1, không số thập phân. Số dư/lượng chi là số nguyên chính xác; giao diện không dùng dấu phẩy để biểu diễn phần lẻ tiền. Theo ngôn ngữ Việt:1.234.567, tên/mã tiền luôn hiện ở xác nhận thanh toán. Ở vùng HUD chật có thể ghi1,2triệu nhưng hover/focus hiển thị nguyên số; mọi báo giá/biên nhận/xác nhận luôn dùng số chính xác, không số đã rút gọn.

Khoản chưa được server xác nhận không hiển thị như số dư khả dụng. Mức trần ví, cap phát hành, thuế/phí/tỷ giá/gói nạp còn thuộc CUR-06/CAP/PAY; chưa chốt ở đây. Không điền giới hạn hoặc giá thật tùy ý chỉ vì đã có icon. Đổi cách hiển thị không thay amount thực.

## 3. Brief ba icon cần vẽ tiếp

Phong cách pixelV4, cùng hệ icon42: nguồn32×32RGBA, nền trong suốt, chừa2px quanh vật chính, không chữ/số/khungrarity/badge khóa baked vào ảnh. Tối đa khoảng4sắc độ chính mỗi vật liệu, cụm pixel rõ; không ảnh vector bóng mịn hoặc nhiều particle. Icon2D trongHUD, không nghiêng theo camera2.5D.

| Icon key dự kiến | Hình khối cần đọc được | Màu tham chiếu chưa duyệt |
|---|---|---|
| currency_premium_crystal_32 | Cao, góc cạnh, một tinh thể | Cyan#71D1DC, bóng lam trầm |
| currency_bound_seal_32 | Vuông, phẳng, có dấu khắc | Bạc ngà#CFD0BE, bóng xám rêu |
| currency_elarion_coin_32 | Tròn, lỗ vuông, vành đồng | Đồng vàng#C79654, bóng nâu |

Bảng màu là hướng art ban đầu; palette xuất thật và kiểm nền sáng/tối/thang xám được ghi trong169vàmanifest r002. Không dùng màu đơn độc để phân biệt; cần nhận hình khi chuyển xám. Không lấy badge ổ khóa làm toàn bộ iconNgânẤn;binding và loại tiền phải phân biệt được. Không dùng viềnDi sản hoặc glowloot để ngụ ý nạp có sức mạnh.

Lượt vẽ kế tiếp cần3icon32×32 và1tấm contact sheet đặt trên nềnUIxanh rêu/tối hiện có, xem cỡgốc vàphóng2×. Contact sheet chỉ là mẫu art để xem, không là cửa sổ ví đã code. Chưa cần bản64×64hoặc24×24; nếu cần dùngsizekhác phải có bản đọc được riêng, không downsample tùy ý.

## 4. Điều kiện hoàn tất CUR-01

Phải thực sự vẽ3icon, kiểm silhouette/độ tương phản/viền/nền trong suốt, đúng kích thước, không cắt vật thể và phù hợp pixelV4. Lưu manifest nguồn/phiên bản theoART-10; file art có thật mới gắniconKey thành tài nguyên sẵn dùng. Đầu ra r002hiện đã có đủ baPNG32×32/alpha sạch/contactsheet vàmanifest; mục đã hoàn thiện về thiết kế/icon, chưa tích hợp gameplay.

CUR-08còn thiết kế cửa sổví/tooltip/phímtắt; không coi contact sheet ởCUR-01là UIví đã làm. Các mẫu cameraART-01/02/04cũ vẫn chưa nghiệm thu, không bị báo hoàn thành bởiiconphẳng.

## 5. Đã hoàn thiện phần vẽ

Người dùng đã cho phép tạo ảnh và xử lý pixel. Concept r001 giữ nguyên; bản chuẩn32×32r002lưu riêng. Xem [asset, QA và tiến độ169](169_CUR_01_ICON_NATIVE_32_VA_NGHIEM_THU.md). Yêu cầu dừng trước vẽ đã được thực hiện ở167, sau đó được người dùng cho tiếp tục. Không còn dùng ghi nhận “chưa có hình” làm trạng thái hiện hành.
