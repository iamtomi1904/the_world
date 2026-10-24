# Map 1 — Bờ sông tách nền, mẫu đầu r014

23/10/2026 · [Xem ba nguồn và đặt cạnh nhau](/design-preview/v01-bank-art-r014/index.html).

## Phạm vi

Vẽ mới ba nguồn bờ thẳng, góc lồi và góc lõm, dùng art target r009 làm tham chiếu vật liệu và màu. Không cắt bảng r012 thành miếng để coi là asset. Yêu cầu nền trong suốt, chỉ có cỏ, mặt đất đứng và đá chân bờ; nước/bọt không nằm trong hình bờ.

Nguồn được tạo bằng imagegen tích hợp và lưu nguyên. Trang đặt các hình trên nền nước/sáng/tối để xem alpha và hình dáng. Không đổi gameplay hoặc renderer hiện tại.

## Cách đặt thử

Tìm bounds alpha >200 để so đáy hình, giữ alpha gốc khi vẽ. Chiều cao hiển thị tham chiếu 125px, chưa pivot hoặc tỷ lệ native đã duyệt. Có thanh khoảng cách để lộ khe/chồng hình, không tự sửa đầu nối. Nước phía dưới là lớp minh họa độc lập, chưa mask vùng đất hoặc dòng chảy thật.

Đáy bounds không bằng mặt nước chuẩn: vài viên đá nhô thấp hơn chân bờ, cần socket chân đất riêng khi sản xuất. Cùng đáy hình chưa đủ làm bờ nối được.

## Hợp đồng cần hoàn thiện

- Cùng chiều cao turf, mặt đất và đường nước, đơn vị pixel theo nhân vật.
- Mỗi đầu nối có socket vị trí và tiếp tuyến theo bộ mask r013.
- Sửa hình trước để đầu nối khớp, không dùng scale độc lập làm đá/cỏ đổi tỷ lệ.
- Bổ sung phần khuất, lớp mặt đứng và hướng nhìn khác; không xoay ảnh có hướng sáng để giả mọi hướng.
- Giữ alpha sạch, không quầng màu, hạt rời hoặc nước/bọt dính trong đất.
- Đá chân bờ chỉ trang trí; collision dùng đường bờ thiết kế riêng.

## Checklist

- [x] Brief ba nguồn bờ độc lập có alpha.
- [x] Trang so từng nguồn trên nền caro và đặt thử trên nền độc lập.
- [ ] Duyệt silhouette góc lồi/lõm, ánh sáng và mức pixel so với r009.
- [ ] Dọn alpha và bỏ chi tiết thừa nếu có.
- [ ] Khóa điểm nối, chiều cao, tỷ lệ và pivot chung.
- [ ] Ráp một tuyến liên tục có đoạn thẳng, lồi và lõm không khe hở.
- [ ] Bổ sung bãi sỏi xuống nước nông.
- [ ] Kiểm tra depth và cao độ trong cảnh 2.5D.

Đây là mẫu mỹ thuật có nguồn riêng, chưa bộ autotile final hoặc bờ ghép liền. Giữ checklist tổng 525=128/14/383 và chưa duyệt G1–G5.

## Kiểm tra nguồn và hạn chế nhìn thấy

Ba nguồn có alpha thật (khoảng 65,6% / 68,7% / 76,1% pixel alpha bằng 0). Mẫu thẳng dài hơn đáng kể so với hai góc; không dùng ba chiều rộng này làm kích thước module chính thức. Có điểm đỏ/vàng thừa sát một số viền, cần dọn. Mẫu lõm có vài hoa nhỏ ngoài brief, cần bỏ khi chuẩn hóa. Chưa nối được liền chỉ bằng đổi khoảng cách. Trang đổi nền sáng/tối/nước và chỉnh khoảng cách hoạt động, không pageerror hoặc tràn ngang ở 390px trong lượt thử. [QA](/design-preview/v01-bank-art-r014/qa.json).
