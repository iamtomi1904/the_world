# NPC-01 — Phân loại nhân vật và ma trận Map1

**22/10/2026 · Chốt thiết kế bằng chữ.** Theo thứ tự sau gói nội dung V01: NPC-01 → NPC-02 trong phạm vi Map1 → dừng trước vẽ NPC-03. Không phát triển thêm cốt truyện vùng sau. Khung phân loại dùng chung; ví dụ/ánh xạ mới chỉ V01.

## 1. Bảy vai trò có thể kết hợp

| Vai trò | Mục đích | Giới hạn |
|---|---|---|
| Truyện | Mang động cơ, lời chứng, lựa chọn hoặc phản hồi | Không biết mọi bí mật vì đang giao nhiệm vụ |
| Dịch vụ | Cung cấp thao tác kho, thuốc, sửa, nghỉ… theo hệ thống tương ứng | Có quyền mua/đủ điều kiện và phân nhóm menu; không miễn phí vì vừa giúp quest |
| Dân cư | Có việc làm, nguồn sống, quan hệ và sinh hoạt | Không tất cả đều bán hàng hoặc giấu bí mật lớn |
| Hộ tống | Tham gia một đoạn di chuyển có mục đích | Không lấy tốc độ class người chơi làm điều kiện cứu người; có checkpoint |
| Phe/tổ chức | Có thẩm quyền hoặc ý kiến của một tổ chức trong phạm vi được giao | Khác chủng tộc và nghề; nói ý kiến cá nhân khác tuyên bố chính thức |
| Sự kiện | Tham gia một hoạt động có thời hạn/kỳ | Không xuất hiện có hạn để giữ manh mối truyện chính duy nhất |
| Dẫn đường/đào tạo | Hướng dẫn thao tác, đọc dấu hoặc giới thiệu nơi chốn | Tân thủ chỉ thao tác phổ thông; không tuyến nghề trước15 |

Một người có vai chính và nhiều vai phụ, không tạo bản sao danh tính cho mỗi vai. Cùng danh tính xuất hiện trong một cảnh riêng hoặc ghé vùng khác vẫn có cùng mã N; cư trú chính quyết định nơi đếm ngân sách. Boss có hồ sơ thực thể riêng: Oren mang danh tính N24 nhưng không thành cư dân thường trú thứ13 củaV01.

Giới tính, race và diện mạo không quyết định thiệnác hoặc tự cấp nghề player. Hắc Tiên/Goblin tồn tại nhưNPC mà không mở race tạo nhân vật. Một người cầm dụng cụ không mặc nhiên có bộ kỹ năng chiến đấu của nhánh tương tự.

## 2. Ma trận12cư dân

| ID | Vai chính | Vai phụ | Nơi chính | Quyền thông tin |
|---|---|---|---|---|
| N02 Sella | Dân cư/gia đình | Truyện, nghỉ và thư | Hub NhàĐèn tạm | Việc nhà, điều Edran đã nói trước khi đi; chưa biết tình trạng hiện tại |
| N03 Mira | Dân cư/ghi danh | Truyện, phản hồi khám phá | Hub bàn ghi tên | Danh sách người do chính em/người tiếp nhận xác minh |
| N04 Maera | Truyện/chỉ huy | Tổ chức dân quân, việc tuần | Hub bàn điều phối | Lệnh đã nhận, phiếu và trách nhiệm trì hoãn; không biết toàn chương trình |
| N09 Borin | Dịch vụ/xưởng | Dân cư, truyện, vận chuyển cảnh | Hub xưởng | Dụng cụ, vật liệu và việc cứu bộ nâng |
| N10 Dara | Dịch vụ/thuốc | Dân cư, truyện, việc ngày | Hub trạm thuốc | Tình trạng được kiểm, nguồn thuốc/nước đã ghi |
| N29 Pella | Dịch vụ/kho | Dân cư, bếp, việc ngày | Hub kho/bếp | Nhập/xuất trại, không cả tuyến hàng941 |
| N05 Neris | Dẫn đường/kiểm ấn | Truyện, khảo sát hầm | Trạm suối | Phép đo trực tiếp, tài liệu được đưa; không đọc ý nghĩ di vật |
| N07 Ilan | Tổ chức/kiểm tiếp nhận | Dẫn thao tác tân thủ, truyện | Chốt/sân tập | Quy trình và báo cáo ca, có thể sửa kết luận khi có chứng cứ |
| N25 Edda | Dân cư/trồng trọt | Phụ, sinh thái | Ruộng | Mùa, nước và dấu thú tại ruộng |
| N26 Rurik | Dân cư/thợ mộc | Phụ, dẫn đường khám phá | Lán sửa cầu | Đường cũ, biển và vật liệu cầu |
| N27 Vaela | Dẫn đường/trinh sát | Việc ngày, truyền thuyết | Lán rừng | Tuyến đã đi và lời kể được ghi nguồn riêng |
| N28 Halen | Dân cư/chăm chuông | Truyền thuyết, hướng dẫn đọc dấu | Nhà trực chuông | Chuông cục bộ, phần trực tiếp nghe khác truyền miệng |

Phân bổ6hub/6ngoài giữ đúng19. Thông tin củaNPC không tự cập nhật vì một người chơi khác nộp quest; chỉ phần sự kiện chung có nguồn công khai mới dùng chung.

## 3. Thứ tự tương tác và menu

Khi tiếp cận, hiện tên và chức năng ngắn, không tự bật cửa sổ chỉ vì đi ngang. Nếu có nhiều việc: mục tiêu chính đang làm → đoạn đối thoại/lựa chọn chưa chốt → nhiệm vụ phụ → việc ngày/tuần → dịch vụ → hỏi chuyện. Một lựa chọn chưa xác nhận không được tự thay bằng dịch vụ khi người chơi đóng/mở cửa sổ.

NPC dịch vụ có menu đúng chuyên môn: Borin sửa/xưởng, Dara thuốc, Pella kho và nhu yếu phẩm thành hai nhóm. Sella không tự mở ngân hàng hoặc đổi tiền. Biểu tượng và phím tương tác kế thừa quy tắc input/UI chung, không tạo phím riêng cho từng người. Giá, hàng hóa và quyền dịch vụ lấy hồ sơ kinh tế, không phát minh số tại lore.

NPC có việc lặp chỉ hiện trạng thái kỳ phù hợp, khác dấu nhiệm vụ chính. Người đã xong quest còn hỏi chuyện được mà không nhận thưởng lại. Nếu đã có bản ghi truyền thuyết, lời thoại phản hồi thay lời “hãy đi tìm lần đầu”.

## 4. Truyện cá nhân và dân cư chung

Cư dân, nơi làm và dịch vụ là lớp chung. Cảnh Maera bị thương, ưu tiên cứu trợ và phản hồi GATE là lớp truyện cá nhân. Một lựa chọn không làm NPC dịch vụ chết/vắng cho tất cả. Bản nhắc sau quest phản ánh điều người nói thực sự được biết qua bàn giao, không tự biết lựa chọn ở dungeon nếu chưa nhận báo cáo.

NPC sinh hoạt ngoài hub có lán và điểm hẹn; bảng việc/người trực chỉ nơi đang làm. Thời tiết chuyển sang mái trú trong cùng cụm, không giấu tiến độ sau một giờ thực hoặc cơn mưa hiếm. Chưa thiết kế tọa độ/AI; đây là điều kiện để dựng sau.

Hộ tống chỉ là vai trong cảnh, không kéoNPC dịch vụ chung đi mất. Chủ truyện có quyền quyết định, bạn đi cùng không bị ghi đè lựa chọn riêng. Oren sauM08 theo GATE và chế độ khảo sát, không trở thành boss bị giết thật mỗi tuần.

## 5. Bàn giao và tiêu chí hoàn thiện

Khung7vai, quy tắc kết hợp/đếm và ma trậnV01 đủ choNPC-01. NPC-02 tiếp theo là214: hoàn thiện lớp mô tả12cư dân, giữ lore gốc05/14/19. NPC-03 chưa có chân dung/hình đứng/biểu cảm/animation; đó là điểm dừng trước vẽ. Không đánh dấu NPC-04…08 hoàn thiện chỉ vì tài liệu này nhắc quy tắc liên quan.
