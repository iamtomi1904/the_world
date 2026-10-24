# Map 1 — Khôi phục hình gốc r009 làm chuẩn, r020

23/10/2026 · Người dùng yêu cầu sửa bản r019 vì hình ảnh đi lệch và xấu hơn mẫu. [Mở cảnh đã chỉnh](/design-preview/v01-art-scene-r020/index.html).

## Quyết định ưu tiên

r009 là art target chính thức cho khu này: bố cục, màu, ánh sáng, tỷ lệ nhà/cây/cầu và độ chi tiết. Không dùng cảnh khối r019 hoặc các nguồn bank tạo sinh r014–r017 để thay chuẩn này. Chúng chỉ còn là tham khảo logic hoặc nghiên cứu asset, chưa được người dùng chốt thay r009.

Không tiếp tục tạo revision kỹ thuật rồi trình bày như nâng cấp mỹ thuật. Asset tương lai phải được đặt cạnh r009 và so ở kích thước chơi trước khi ghép thêm.

## Điều chỉnh thực tế

Dùng r009 làm nguồn edit, chỉ yêu cầu bỏ người đứng sẵn trên đường để đặt nhân vật độc lập. Ảnh nền edit mới giữ bố cục nhà/cây/cầu/sông gần mẫu; không đảm bảo pixel-identical do tạo sinh. Lưu nguyên cả r009 và nền r020, prompt/source đi kèm trang.

Trang chính mới giữ nền mỹ thuật, nhân vật sprite độc lập và vùng đường thử. Có WASD/mũi tên/pad, tuyến qua cầu, gợn nước nhẹ, lá và mưa/mây tùy chọn. Mặc định nắng, không chồng texture noise hoặc khối bờ thô lên ảnh.

r019/index.html chuyển sang bản xem r020; bản kỹ thuật cũ được giữ tại technical-r019.html, không xóa công việc collision/cao độ.

## Giới hạn phải nói rõ

Đây là bản xem tương tác trên ảnh, không phải hoàn tất dựng map 2.5D bằng tile/mesh. Vùng đi là polygon màn hình, không có cao độ physics, không có tán/mái tách, không có occlusion động đầy đủ. Mẫu này không có bãi dốc xuống nước nên chưa thêm lối xuống theo fixture r019 vào hình gốc. Nhân vật kế thừa sprite nháp, chưa cùng chất lượng mọi animation với art target; ngang có walk, trước/sau còn idle.

## Thứ tự làm tiếp đã sửa

1. Giữ bản r020 để đối chiếu hình, không đổi sang nguồn nền cũ.
2. Tách/vẽ từng asset đúng tỷ lệ r009, có phần khuất, palette và ánh sáng thống nhất.
3. Dựng một góc ngắn rồi so side-by-side với r009; chưa đạt thì sửa trước khi nhân rộng.
4. Gắn collision, cao độ và chuyển động vào phần đã đạt mỹ thuật.
5. Tách tán/mái/nước và che khuất động sau khi hình tĩnh đúng.

## Checklist kiểm tra

- [x] Bản xem chính sử dụng hình lấy từ r009, bỏ cảnh khối cũ.
- [x] Nhân vật độc lập, không có người đứng sẵn trùng trong nền.
- [x] Tuyến theo đường cong qua cầu tới bờ Đông đi được trong fixture.
- [x] Vùng sông ngoài đường không đi được.
- [x] Phím đi, thời tiết và vùng đi thử hoạt động; không pageerror hoặc tràn ngang 390px.
- [ ] Dựng lại bằng asset riêng với độ đẹp tương đương ảnh.
- [ ] Animation/occlusion/physics hoàn chỉnh.

[QA](/design-preview/v01-art-scene-r020/qa.json). Tổng 525=128/14/383 giữ nguyên. Không báo hoàn thành Map 1 từ ảnh nền tương tác; không sửa game thủ thành.
