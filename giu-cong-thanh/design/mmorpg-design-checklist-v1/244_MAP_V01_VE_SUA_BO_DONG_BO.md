# Map 1 — Vẽ sửa bộ bờ cùng tỷ lệ r016

23/10/2026 · [Bộ sửa và ráp thử](/design-preview/v01-bank-revision-r016/index.html).

## Mục tiêu

Sửa vấn đề r015: ba nguồn riêng khi cân chiều dài có độ dày mặt đất và kích thước đá khác nhau. Vẽ lại trong cùng một nguồn, không chỉ chỉnh mốc để che sai khác. Giữ cỏ xanh olive, đất ấm, đá xám và góc nhìn 2.5D.

## Quy tắc revision

Cả ba miếng có cùng khoảng đầu-cuối, độ dày turf, mặt đất và đá. Hai đầu có đoạn thẳng để nối; phần cong nằm giữa. Góc lồi đưa mép giữa về phía trước, góc lõm đưa mép giữa ra sau. Chỉ vị trí mép thay đổi, độ dày mặt đứng không tăng theo độ cong. Nước, bọt và bóng mềm ngoài hình không vẽ vào bờ.

## Nguồn và quá trình sửa

Dùng imagegen tích hợp với ba nguồn r014 làm edit targets. Bản r002 đầu có quầng màu quanh hình và hàng góc lõm bị cong cùng phía với góc lồi; chưa đạt, được giữ lại làm đối chiếu. Đã yêu cầu revision tiếp theo chỉ bỏ quầng và đổi hướng cong hàng cuối. Không tự coi đầu ra tạo sinh là bộ pixel đã nghiệm thu.

Trang dùng frame chỉ định trong manifest để trích vùng nguồn khi tải, không đổi màu/alpha nguồn. Mốc thử tiếp tục chỉnh được và xuất JSON; đây chưa hệ collision hoặc map chơi.

## Điều kiện nghiệm thu mỹ thuật

- [ ] Bờ lõm có silhouette ngược rõ với bờ lồi.
- [ ] Không quầng mờ, alpha thừa hoặc đá bị cắt bởi frame.
- [ ] Kích thước đá và chiều cao mặt đất nhất quán khi ráp cùng scale.
- [ ] Đầu nối đồng nhất vật liệu và đường viền, không chỉ trùng điểm.
- [ ] Dọn pixel ở kích thước sử dụng, không dùng nhiễu tạo sinh làm chuẩn native.
- [ ] Đủ hướng nhìn, phần khuất, nền và nước tiếp giáp trong cảnh 2.5D.

Giữ checklist tổng 525=128/14/383. Không thêm biến thể trước khi ba mẫu cơ sở đạt. Không thay art target r009 hoặc sửa chế độ thủ thành.

## Kết quả lượt sửa r003

Hàng góc lõm đã đảo chiều đúng, kích thước đá và mặt đứng gần nhau hơn so với ba nguồn độc lập r014. Nguồn vẫn có quầng xanh/nâu trong alpha; lượt sửa chưa giải quyết được, không duyệt dùng cho game. Frame chọn thủ công theo vùng vật thể, không giả định ba hàng có khoảng chia đều. Giữ nguồn r002 và r003 để đối chiếu. Mốc ráp thử bằng nhau không giải quyết quầng hoặc mối nối mỹ thuật.

Trang tải đủ ba frame, đổi thứ tự, chỉnh mốc, chặn mốc sai và xuất JSON đã được thử; không lỗi pageerror hoặc tràn ngang 390px. [QA](/design-preview/v01-bank-revision-r016/qa.json). Bước tiếp theo phải làm sạch alpha bằng lượt sửa hình chuyên biệt và kiểm tra nền sáng/tối trước khi thêm mẫu mới.
