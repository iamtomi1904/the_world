# Map 1 — Bãi sỏi và lối xuống nước cạn r018

23/10/2026 · [Xem asset và đi thử](/design-preview/v01-shore-access-r018/index.html).

## Thiết kế

Tạo một cửa xuống thấp giữa hai vai bờ: đất cao nối dốc đất, dốc ra bãi sỏi rồi nước cạn. Dòng sâu phía ngoài không đi được, chưa có bơi. Trung tâm lối giữ thoáng; đá lớn, bụi và rễ cây đặt ngoài hành lang. Bãi sỏi không đơn thuần đổi màu bờ đứng: cần cao độ hạ dần và đường chân rõ.

Asset mới tạo riêng bằng imagegen, lấy r009 làm tham chiếu màu/vật liệu. Nguồn không vẽ nước hoặc bọt vào bãi. Giữ PNG nguyên; bản xem dùng cutout128 và fit đồng tỷ lệ trong khung 500×220. Còn điểm màu đỏ/vàng sát vài viền nguồn, cần soi/dọn khi làm pixel native. Chưa nối đồng nhất với các đầu bờ r017.

## Bản thử đi lại

Không thay engine hoặc map game. Dùng fixture Canvas để kiểm tra đường đi, đơn vị pixel màn hình, collider độc lập hình. Tham số tập trung trong cfg:

| Tham số | Giá trị thử | Ý nghĩa |
|---|---:|---|
| speed | 95px/s | Tốc độ kiểm tra |
| radius | 8px | Bán kính chân |
| rampLeft / Right | 280 / 520 | Lối dốc giữa |
| rampTop / Bottom | 220 / 300 | Đoạn hạ cao độ |
| height | 18px | Cao độ đất thử giảm tuyến tính xuống 0 |
| shallowSpeed | 0,8 | Hệ số tốc độ vùng cạn, chưa cân bằng MMORPG |
| deepStart | 400 | Ranh nước sâu |

Phạm vi bờ cao chặn hai bên dốc; di chuyển chia bước nhỏ chống xuyên ranh. Bán kính chân được tính khi chạm vùng sâu. WASD/mũi tên chỉ nhận khi canvas có focus; nút hướng hỗ trợ chạm. Mất focus/ẩn tab dọn phím giữ. Nước cạn có vòng gợn dưới chân, chưa clip chân hoặc animation lội nước.

Sprite idle/walk ngang kế thừa bản thử trước; hướng trước/sau vẫn idle. Không báo đã hoàn thiện animation nhân vật. Gợn nước là minh họa, chưa flow map hoặc depth thật.

## Kiểm tra và checklist

- [x] Có nguồn bãi sỏi/lối dốc riêng, nước độc lập.
- [x] Đi từ đất qua dốc xuống vùng cạn.
- [x] Hai bên bờ cao chặn lối tắt.
- [x] Nước sâu chặn theo bán kính chân.
- [x] Tốc độ vùng cạn bằng 0,8 tốc độ đất trong fixture.
- [x] Cao độ dốc giảm 18 → 13,5 → 9 → 4,5 → 0 tại các điểm thử.
- [x] Phím di chuyển hoạt động, không pageerror, không tràn ngang 390px.
- [ ] Dọn pixel/viền và thống nhất scale với bộ bờ cao.
- [ ] Khớp hai vai bờ với socket và mặt đứng của bộ r017.
- [ ] Dựng mesh dốc, đất, mặt nước và collider trong scene 2.5D.
- [ ] Lội nước, che chân, âm thanh bước và hiệu năng thiết bị thật.

[QA](/design-preview/v01-shore-access-r018/qa.json). Tổng checklist giữ 525=128/14/383; bước này có asset mẫu và logic thử, chưa production hoặc G1–G5. Không sửa thủ thành, DB hoặc cốt truyện ngoài Map 1.

## Tiếp theo

Ráp cửa bãi sỏi giữa hai đoạn bờ cao trong cùng cảnh 2.5D, giữ một hành lang từ đường đất tới vùng cạn. Đối chiếu cao độ/che khuất theo nhân vật, không thêm sinh vật hoặc trang trí dày trước khi lối đi rõ.
