# Map 1 — Cụm nhà ven cầu: 10 hạng mục tương tác

24/10/2026 · [Cảnh r026](/design-preview/v01-bridge-in-scene-r026/index.html) · [Cấu hình](/design-preview/v01-bridge-in-scene-r026/courtyard.json).

## Mục đích

Hoàn thiện lối tiếp cận căn nhà trong cảnh đang có, bảo toàn ảnh r009/r020. Đây là thiết kế tương tác chạy được trên ảnh + sprite, không phải nội thất hoặc nhà 3D. Không gán nhà này cho người cha hay NPC nào khi chưa có đối chiếu lore chính thức.

## Checklist 10 phần

| # | Hạng mục | Kết quả và quy tắc |
|---|---|---|
| 1 | Manifest khu nhà | courtyard.json quản lý ID, nhãn, tường, cửa, mái, hiên, đèn, khoảng tương tác và khóa lưu. Tọa độ scene 800×500, không dùng manifest r022 vì khác ảnh nhà. |
| 2 | Footprint tường | Rect x103,y112,w159,h50; kiểm tra circle–rect dùng bán kính chân hiện có. Tường trả lý do chặn riêng, dùng chung cho đi tay và tìm đường. |
| 3 | Điểm đứng trước cửa | [175,173], thuộc đường thử, ngoài tường. Hành lang cửa dùng polygon lối nhà hiện có, không mở lối xuyên nhà. |
| 4 | Dẫn đường tới nhà | Nút Đi tới cửa nhà gọi hệ tìm đường hiện có; actor thực sự đi, dừng theo tiêu chuẩn đến đích. |
| 5 | Dấu tương tác tại cửa | Trong 18px hiện nhãn F trên nhân vật và bật nút thông tin. Ưu tiên điểm gần nhất nếu các vùng tương tác giao nhau. |
| 6 | Bảng thông tin căn nhà | Giới thiệu vị trí/lối tiếp cận; F mở, Esc/~ đóng. Mở bảng dừng di chuyển. Không giả định NPC, quest hoặc nội thất đã hoàn thành. |
| 7 | Sổ khám phá | Ghi địa điểm sau khi mở thông tin, mỗi ID chỉ một lần. Lưu localStorage; tải lại vẫn giữ; có nút xóa dữ liệu thử. Lỗi lưu thì tiếp tục hoạt động trong phiên và thông báo. |
| 8 | Nhà trên minimap | Căn nhà là điểm thứ tư, cùng hệ tọa độ với ba điểm cầu. Sổ hiện đủ 4 mục, phân biệt đã xem/chưa khám phá. |
| 9 | Vùng mái/hiên chắn mưa | Polygon riêng cho mái và bậc hiên; hạt mưa được bỏ khi ba điểm dọc đoạn mưa chạm vùng này. Vị trí chân trong hiên có nhãn phản hồi. Đây là mask màn hình, chưa mái che theo chiều sâu. |
| 10 | Đèn ấm | Ánh sáng screen blend tại đèn có sẵn, tăng cùng độ mây/mưa; bật/tắt độc lập. Không vẽ thêm chiếc đèn trùng hoặc sửa raster nền. |

- [x] Tích hợp 10 hạng mục trên cùng trang r026.
- [x] Cập nhật Markdown, danh mục và thư viện hình ảnh.
- [x] Kiểm tra va chạm, tương tác, di chuyển thật và lưu bản thử.
- [ ] Tách asset mái và phần bị che bằng hình ảnh phù hợp chuẩn r009.
- [ ] Nội thất, NPC chức năng và nhiệm vụ căn nhà.
- [ ] Dữ liệu khám phá authoritative trên server/Postgres.

## Thông số bản thử có thể chỉnh

Các vùng trong courtyard.json là tọa độ màn hình thử, chưa chốt đơn vị thế giới MMORPG. Cửa radius18px, đèn radius19px/opacity0.22, wall rect và mask mái/hiên cần chuyển sang prefab khi có map thật. Tốc độ58px/s và chân3px không thay đổi. Ngưỡng đến đích dùng hệ di chuyển đã có, không teleport.

Khóa localStorage chỉ lưu danh sách ID địa điểm; không lưu tài khoản, tiền, vật phẩm, chỉ số hoặc nhiệm vụ. Danh sách nạp lại được lọc theo các địa điểm còn tồn tại. Xóa ghi nhận không tác động dữ liệu game khác.

## Kiểm tra và giới hạn

[QA](/design-preview/v01-bridge-in-scene-r026/courtyard-qa.json) · [Ảnh toàn trang](/design-preview/v01-bridge-in-scene-r026/courtyard-review.png).

Đã kiểm tra: tường chặn; điểm cửa hợp lệ; tuyến tới cửa không xuyên vật cản; không mở từ xa; đứng gần chọn đúng nhà; mở/đóng bảng; ghi sổ và giữ qua reload; nhận biết trong/ngoài hiên; actor đi tới nhà bằng vòng lặp thật; viewport390px không tràn ngang; không pageerror. Đã xem ảnh để kiểm tra vị trí actor so với cửa và hình gốc.

Mái/tán vẫn nằm trong ảnh nền. Chưa thể làm mái trong suốt để thấy nội thất chính xác. Rain mask là xấp xỉ theo polygon, không mô phỏng mái che3D; bóng đèn là hiệu ứng màn hình, không ánh sáng vật lý. Chưa tạo raster hoặc animation mới trong đợt này.

Tổng checklist lớn vẫn 525=128 hoàn thành /14 một phần /383 chưa làm; không chuyển các hạng mục production thành hoàn thành chỉ vì có bản thử.

## Đợt tiếp theo

Chuẩn bị một cụm asset thực: thân/mái đúng căn nhà đang có, phần nền bị che và mask trước/sau. Sau đó mới làm vùng che có thể giảm opacity, chuyển lớp actor và nội thất. Giữ cùng r026, tránh mở thêm chuỗi trang kỹ thuật rời rạc.
