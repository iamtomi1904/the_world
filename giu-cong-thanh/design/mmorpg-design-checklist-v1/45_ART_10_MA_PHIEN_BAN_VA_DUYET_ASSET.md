# ART-10 — Mã asset, biến thể, phiên bản và luồng duyệt

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0  
**Trạng thái:** Hoàn thiện đặc tả quản lý nội dung; chưa tạo hệ thống quản lý asset, thư mục production, runtime ID hoặc manifest triển khai.  
**Phạm vi:** MMORPG 2.5D pixel V4; thủ thành giữ nguyên. Kế thừa bốn trục tiến độ ART-08.

## 1. Định danh ổn định, tên và đường dẫn tách riêng

Mỗi asset logic có mã biên tập bất biến dạng AT-AST-000001. Số thứ tự chỉ là định danh, không chứa chủng tộc, nghề, phiên bản hoặc giá trị gameplay; ví dụ trong hồ sơ chưa phải mã đã cấp cho file hiện hữu. Không tái dùng mã đã bỏ cho một asset khác.

Tên mô tả có thể đổi khi biên tập nhưng mã giữ. Mã item/skill/entity và mã asset khác nhau: một món có nhiều profile hình; nhiều kỹ năng có thể dùng module hiệu ứng mới chung khi hợp lệ. Client không dùng tên file, màu hoặc số trong mã để quyết định quyền trang bị hay damage.

Tên file xuất dùng chữ Latin thường, số và dấu gạch dưới, không dấu/khoảng trắng; ví dụ at_ast_000001__idle__south__body.png. Đây là quy ước thiết kế, chưa tạo file hoặc đổi tên file hiện tại. Nhãn tiếng Việt giữ trong catalog/phiếu, không ép tên người chơi hoặc văn bản hiển thị thành tiếng Anh.

## 2. Các trường phân loại

Phiếu có nhóm (body/equipment/mount/environment/vfx/ui/audio/story), loại tài nguyên (sprite/texture/mesh/icon/portrait/sound...), race/nghề/nhánh nếu áp dụng, weapon family, vùng, style profile và mục đích. Không nhét mọi trường vào tên file dài khó quản lý.

Chiều hướng north/south/east/west; trạng thái idle/move/attack/cast/hurt/death; slot/layer/body profile và cấp hiển thị full/compact/functional là trường riêng. Không dùng chữ left vừa chỉ tay vừa chỉ hướng tây. Main hand/off hand là quyền tay; hướng nhìn là hướng riêng.

Bản composite có mã gói và tham chiếu mã thành phần. Mỗi thành phần có version riêng; không nhân bản body ngựa cho từng bộ giáp chỉ để đổi đường dẫn.

## 3. Biến thể khác revision

**Biến thể** cùng tồn tại có chủ đích, như cánh Thánh/cánh Hắc, body ba race hoặc mức VFX Gọn. **Revision** là bản sửa thay thế của cùng biến thể, như sửa pivot hoặc viền alpha. Không coi file mới hơn là biến thể được phép chọn trong game.

Ngựa khác body, pose hoặc profile cánh cần biến thể ghi rõ tương thích; đổi chỉ màu không tự tạo định nghĩa tọa kỵ mới. Bản concept không dùng cùng nhãn production với bản sprite đã cleanup. Nguồn V1/V2/V3 phong cách cũ giữ lịch sử, không trộn vào danh sách asset hiệu lực V4.

## 4. Phiên bản và thay đổi tương thích

Mỗi asset logic có content revision tăng dần: r001, r002...; lần sửa đã duyệt tạo revision mới, không ghi đè bản đã phát hành. Hợp đồng metadata/catalog có phiên bản riêng để phân biệt sửa pixel với đổi định dạng.

Mỗi revision khai báo mức ảnh hưởng:

- Hình ảnh: sửa màu/cluster không đổi bounds/socket/ngữ nghĩa.
- Tích hợp: đổi frameRect, trim, pivot, socket, layer hoặc clip/timing trình bày cần gắn lại.
- Hợp đồng: đổi metadata hoặc nhóm tương thích cần công cụ/runtime hỗ trợ.
- Gameplay liên quan: chỉ rõ skill/item thay đổi và người phụ trách luật; ảnh mới không tự sửa công thức.

Thay một pixel vẫn có thể ảnh hưởng nhận diện nên mức hình ảnh vẫn cần xem lại. Revision không thay thế kiểm tương thích. File checksum xác minh nội dung tải, không xác nhận đẹp, đúng quyền hoặc đúng gameplay.

## 5. Manifest và phụ thuộc

Một gói phát hành tham chiếu chính xác mã + revision của thành phần; không tham chiếu chữ latest trong bản phát hành. Manifest ghi file/hash, loại nội dung, dependencies, metadata contract version và nhóm web/PC khi cần. Chưa chọn format serialization hoặc xây pipeline.

Ví dụ giáp/cánh ngựa phụ thuộc body ngựa, hướng, socket và profile bộ đồ; đổi saddle có thể cần kiểm mọi người cưỡi liên quan. Icon skill phụ thuộc danh tính và ngữ nghĩa, không nhất thiết phụ thuộc sprite mọi frame. Khi camera thay đổi, liệt kê impact cho texture/sprite/bóng/VFX trước duyệt hàng loạt.

Game client/server có quy tắc tương thích theo phiên bản phát hành. Dữ liệu account sở hữu mount/item/appearance theo định nghĩa ổn định, không gắn vào tên PNG hoặc bản revision để tránh mất quyền khi sửa ảnh. Chi tiết migration ở DATA/OPS, chưa triển khai.

## 6. File nguồn, bản xuất và lịch sử

Phân biệt source, exports, previews, metadata và reference. Source giữ layer/track/model có thể sửa; export là dữ liệu sử dụng; preview chỉ minh họa. Không đưa ảnh preview có lưới hoặc label vào sprite gameplay. Tệp gốc từ công cụ hỗ trợ và bản cleanup đều có dấu nguồn, không xóa dấu vết sửa.

Chỉ gói đủ nguồn/quyền/tương thích mới vào danh sách phát hành. File bỏ dùng có trạng thái retired và bản thay thế nếu có; không xóa ngay nếu scene hoặc bản phát hành cũ vẫn tham chiếu. Quy định lưu trữ và backup thực do OPS chốt, không tự xóa file trong workspace từ tài liệu này.

## 7. Luồng duyệt theo cổng

| Cổng | Nội dung cần duyệt | Người chịu trách nhiệm vai trò |
|---|---|---|
| Brief | Đúng thiết kế, phạm vi hướng/clip/layer/size và phụ thuộc. | Thiết kế nội dung và mỹ thuật. |
| Concept | Silhouette/motif/V4, không hiểu nhầm là đã đủ animation. | Mỹ thuật; thiết kế xác nhận nhận diện gameplay. |
| Production | File nguồn, ảnh/âm/model, đủ danh mục; bounds/socket/alpha. | Mỹ thuật/âm thanh và người phụ trách kỹ thuật nội dung. |
| Integration | Đúng scene/UI, manifest và profile, không thiếu clip/đổi tay. | Người tích hợp và thiết kế hệ liên quan. |
| Verification | Kết quả theo scene/thết bị/phạm vi, lỗi còn lại và version. | Người kiểm và người chịu trách nhiệm phát hành. |

Đây là vai trò, không bịa danh tính thành viên dự án. Một người có thể kiêm ở giai đoạn nhỏ nhưng phải có ghi nhận phạm vi; không tạo chữ ký người chưa duyệt. Không buộc chủ dự án xác nhận từng sửa nhỏ: người phụ trách được ủy quyền duyệt trong chuẩn đã chốt; thay phạm vi lớn phải ghi quyết định rõ.

Bốn trục Thiết kế/Sản xuất/Tích hợp/Kiểm chứng vẫn độc lập. Chấp nhận concept không tự bật production. Duyệt ảnh không tự chứng minh giấy phép; kiểm quyền không tự chứng minh animation đủ.

## 8. Nguồn và quyền

Phiếu ghi tác giả, nguồn sáng tác, hợp đồng/điều khoản áp dụng và nơi lưu bằng chứng; tài liệu công khai không ghi mật khẩu, khóa API hoặc dữ liệu hợp đồng riêng. Bản có hạn chế dùng thương mại/ghi công/phân phối cần ghi để OPS xử lý theo nguồn thực tế, không suy mọi file miễn phí có cùng quyền.

Nguồn hỗ trợ tạo hình/âm ghi công cụ, reference, prompt khi phù hợp và các bản chỉnh sửa. Không cam kết độc quyền hoặc quyền pháp lý chỉ bằng việc có prompt. Tham khảo game khác không được lấy texture/sprite/nhạc về phát hành. Giữ yêu cầu bộ hình MMO mới hoàn toàn, không tái dùng/trace bộ thủ thành.

## 9. Ví dụ phiếu và thay đổi

Gói minh họa: cánh Thánh cho ngựa đồng bằng. Revision r001 là concept; r002 là production cần đủ bốn hướng và mức gọn; r003 sửa socket ở hướng bắc. Đây là ví dụ quy trình, chưa có các file đó.

Sửa r003 yêu cầu xem lại clip ngựa/người ở hướng bắc, pose mở cánh và culling; không tự kiểm lại toàn bộ kinh tế/quest nếu không liên quan. Khi phát hành dùng manifest cụ thể. Nếu bản lỗi, quay về gói tương thích đã xác nhận hoặc chặn nội dung lỗi theo OPS; không âm thầm đổi người chơi sang ngựa khác hoặc mất quyền đã nhận.

Sửa một icon chảy máu thành glyph đúng không tạo effect mới hoặc reset stack trên nhân vật. Đổi file âm cảnh báo không được đổi thời điểm damage ngoài thiết kế skill.

## 10. Đầu ra và checklist

Đã chốt quy tắc mã ổn định, phân loại/variant/revision, dependencies/manifest mục tiêu, luồng duyệt và bằng chứng nguồn. Chưa cấp mã cho toàn bộ asset, chưa dựng công cụ/catalog production, chưa đổi tên hoặc xóa file. Việc tạo registry thực tế nằm ở bước triển khai và nhóm ASSET/DATA/OPS.

ART-10 hoàn thiện hồ sơ. Tổng **18/513 hoàn thiện thiết kế, 6 một phần, 489 chưa thiết kế**. Không tuyên bố toàn nhóm ART hoàn tất: ART-01/02/04 vẫn cần mẫu 2.5D. Theo thứ tự hiện hành, mục tài liệu tiếp theo là UI-01: bộ design token giao diện, nối ART-05/07 với các cửa sổ. Thủ thành giữ nguyên.
