# GEAR-01 — Slot, family vũ khí và quyền mặc

**Ngày:**21/10/2026 · **Trạng thái:** Hoàn thiện đặc tả trong phạm vi mục. Chỉ thiết kế MMORPG, chưa code/vẽ/test gameplay.

**Đầu vào:** [Quyền sở hữu16](16_PROD_07_SO_HUU_VA_TIEN_DO.md), [nghề28](28_HE_CHUNG_TOC_CHUC_NGHIEP_TRANG_BI.md), [ngân sách81](81_STAT_11_NGAN_SACH_VA_MOC_CAN_BANG.md), [vật phẩm135–145](145_TONG_HOP_10_MUC_HE_THONG_VAT_PHAM.md).

## 1. Mười vị trí trang bị

| Slot | Số vị trí | Quy tắc |
|---|---:|---|
| Đầu / Thân / Tay / Chân / Giày |5| Mỗi slot một món phòng cụ theo family được phép |
| Dây chuyền |1| Trang sức, điều kiện món riêng |
| Nhẫn trái / Nhẫn phải |2| Không nhân đôi item; món unique có giới hạn dùng chung hai slot |
| Tay chính / Tay phụ |2| Hai tay bị chiếm theo quy tắc vũ khí dưới đây |

Tổng10 vị trí. Vũ khí hai tay dùng một instance ở tay chính, tay phụ hiển thị “Bị chiếm bởi vũ khí hai tay”; không tạo món giả ở tay phụ. Di vật sức mạnh, đai, áo choàng và công cụ nghề **chưa có slot stat riêng** trong V1. Công cụ ở UI nghề, mặc định không góp combat stat. Ngoại trang/cánh/ngựa dùng giao diện riêng và không là slot cộng chỉ số. Taxonomy135 có relic không đồng nghĩa đã mở slot relic.

## 2. Family và chiếm tay

| Giai đoạn/nhánh | Tay chính | Tay phụ |
|---|---|---|
| Tân Binh | Kiếm tập1H hoặc cung/trượng tập2H | Trống; chưa tự có quyền khiên |
| Kỵ Sĩ15 | Kiếm1H | Khiên |
| Chiến Binh15 | Rìu2H hoặc giáo2H | Bị chiếm |
| Kiếm Sư15 | Kiếm1H | Trống |
| Pháp Sư15 | Trượng phép2H | Bị chiếm |
| Cung Thủ15/ARC30 | Cung2H | Bị chiếm; tên là thành phần động tác, không stack đạn bắt buộc |
| Tinh Linh15/SPI30 | Trượng khế ước2H | Bị chiếm |
| Mục Sư15/PRI/WOD30 | Thánh trượng hoặc trượng mộc2H đúng quyền | Bị chiếm |
| PAL/DKN30 | Trọng kiếm2H | Bị chiếm, không giữ khiên nghề cha |
| HGD30 | Chùy1H | Khiên |
| VAN/BER30 | Giáo2H / Rìu2H | Bị chiếm |
| WND/HSW30 | Kiếm1H / Trọng kiếm2H | Trống / Bị chiếm |
| ASN30 | Bộ song đoản đao2H | Bị chiếm |
| THU/FIR/WAT/LGT/DRK/EAR30 | Trượng phép2H | Bị chiếm |
| NEC30 | Ma đạo thư2H | Bị chiếm; cách cầm không quyết định số slot |

Song đoản đao là **một bộ vật phẩm**, một roll/nâng/binding, hai layer vũ khí. Hai nhát cơ bản vẫn chia packet theo98, không nhận double affix. Một tay trống không được tự gắn sách, kiếm thứ hai hoặc trượng phụ. Món cấp thấp vẫn dùng được nếu quyền family hiện tại cho phép; quyền nghề cha không vượt khóa nhánh.

## 3. Phòng cụ và visual

Trọng giáp cho Kỵ Sĩ; Chiến Binh trọng giáp/giáp chiến theo tag. Kiếm Sư nhẹ/chiến theo nhánh, ASN chỉ nhẹ theo32. Cung Thủ nhẹ; Pháp Sư/Tinh Linh/Mục Sư pháp bào/nghi lễ theo28. Nhẫn/dây chuyền không khóa theo giới/race nếu không có lý do thiết kế; stat pool vẫn phải tương thích build theo GEAR-06.

PAL/DKN/HGD có thể dùng chung dữ liệu áo hợp lệ với profile hình khác. Giáp ngựa suy từ set đang mặc theo34, không thêm armor record. Không tạo bốn dòng chỉ số từ một món vì có bốn hướng sprite.

## 4. Đổi gear, preset và chuyển chức

V1 chỉ có một bộ gear hiệu lực, không có hot-swap gear trong combat. Hai skill preset theo120 không tự lưu/thay đồ. Đổi ngoài combat lock10s; thao tác phải đủ chỗ cho tất cả món bị tháo, nếu không đủ thì từ chối nguyên tử trước binding/di chuyển.

Chuyển chức15/30 kiểm trước món sẽ mất quyền. UI chỉ rõ offhand/weapon/armor nào phải tháo và chỗ nhận quà; grant và thay quyền cùng một giao dịch, không để đồ bất hợp lệ tiếp tục cho stat. Đồ tháo gửi vào túi hoặc grant chờ theo144 khi chuyển chức cần hoàn thành, không xóa. Vũ khí nền bảo đảm có đường chơi tiếp, không cần chợ. Tháo nguồn giảm maxHP/mana chỉ clamp hiện tại, không heal bằng mặc/tháo.

Knight thiếu ngựa vẫn có thể xem/mặc đồ nhưng không dùng skill nghề, theo34. Mặc trọng kiếm không tự gọi ngựa hoặc mở bay. Vũ khí skin không thay family, range, hitbox hoặc quyền đối không.

## 5. UI và tiêu chí

Trang nhân vật có mannequin ở giữa, phòng cụ trái, trang sức phải, hai tay dưới; báo slot phụ bị chiếm, yêu cầu chưa đạt và preview đổi stat. Double-click chỉ mặc khi không có hành động ưu tiên khác; thao tác gây khóa lần đầu phải xác nhận. Kiểm sau đủ28tổ hợp race–nhánh,2H↔1H+khiên, túi đầy, chuyển chức, skill preset và rig cưỡi. Chưa vẽ mannequin hay triển khai equip.
