> **Điều chỉnh nhân vật có hiệu lực · 22/10/2026:** [Hồ sơ 208](208_DIEU_CHINH_NHAN_DIEN_VU_KHI_VA_HGD_DI_BO.md) thay các mô tả xung đột: HGD dùng kỹ năng khi đi bộ; VAN giáo + khiên; PRI thánh thư + trượng chữ thập; xạ thủ Người Lùn dùng nỏ/bẫy; có trang bị mũ. PAL/DKN vẫn cần ngựa. Ảnh là 2D pixel cho thế giới 2.5D.

> **Bổ sung có hiệu lực · 21/10/2026:** [Bộ20hồ sơ V1](125_BAO_CAO_20_MUC_COMBAT_SKILL.md) và [catalog126](126_DANH_MUC_KY_NANG_V1.md) hoàn thiện kit/rank/talent/hồi sinh/lifecycle. Thay các trường còn để mở hoặc mô tả cũ khi xung đột; giữ cap60/nội dung45, V01khôngquái bay,35SP/11TP và hotbar13. Đây là thiết kế, chưa game/asset chạy được.

# Đồng bộ chủng tộc, chức nghiệp, kỹ năng và trang bị

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0  
**Trạng thái:** Rà soát và điều chỉnh tài liệu thiết kế; chưa sửa gameplay, schema hoặc asset.

## 1. Kết luận và nguồn chuẩn

Không cần thay cây chức nghiệp chỉ để phù hợp bảng kỹ năng. Giữ ba chủng tộc, bảy nghề, 19 nhánh và 28 tổ hợp đã xác lập. Thay các mô tả cũ còn dùng ba class/hai race và bổ sung các quy tắc nối giữa hệ thống.

| Phạm vi | Nguồn chuẩn |
|---|---|
| Chủng tộc, nghề, nhánh, quyền vũ khí | [28](28_HE_CHUNG_TOC_CHUC_NGHIEP_TRANG_BI.md) |
| Nền tân thủ, tiến hóa, vô môn và số ô | [29](29_HE_KY_NANG_TAN_THU_TIEN_HOA_VO_MON.md) |
| SP, TP, bản nháp, preset và phân lại điểm | [31](31_BANG_KY_NANG_VA_PHAN_DIEM.md) |
| Quy tắc nối và xử lý mâu thuẫn | Hồ sơ này |

Tài liệu 26 và các quyết định cũ còn lưu làm lịch sử, không được dùng để khôi phục quyền chọn ba class từ cấp 1. ID hero thủ thành không phải ID nghề MMORPG.

## 2. Danh tính và tiến trình thống nhất

| Giai đoạn | Danh tính và quyền |
|---|---|
| 1–14 | Tân Binh thuộc một trong ba chủng tộc; bộ tập không quyết định nghề. |
| Từ 15, hoàn thành chuyển chức | Một nghề hợp chủng tộc; mở hình thái nghề và công cụ nghề. |
| Từ 30, hoàn thành chuyên sâu | Một nhánh thuộc nghề cha và hợp chủng tộc. |
| Đổi build | Đổi phân điểm/biến thể/bộ mang theo; giữ chủng tộc, nghề và nhánh. |

Chức nghiệp là quyền lâu dài; thiên phú là hướng chơi trong quyền đó. Hai preset không cho phép một nhân vật vừa là Thánh Kỵ Sĩ vừa là Hắc Kỵ Sĩ.

## 3. Điểm và tiến hóa — xử lý khoảng trống tân thủ

SP nhận từ cấp 8 phải dùng được cho ba chủ động nền và dòng bị động nền có rank. Không bắt người chơi cất toàn bộ điểm đến cấp 15. Những dòng đó giữ ID dòng xuyên chuyển chức; biểu hiện kiếm/cung/trượng không có ví SP hoặc hồi chiêu riêng.

Ba chủ động nền và bị động nền tiến hóa thay thế hình thái cũ. Bị động nghề lõi mới và bị động nhánh mới là các kỹ năng khác, tự mở theo điều kiện; phải khai báo khác ID và chức năng, không cấp thêm bản sao của bị động nền. Tất cả hiệu quả vẫn nằm trong ngân sách sức mạnh chung.

Mặc định chuyển hình thái kế thừa rank/điểm 1:1. Chỉ khi tái thiết kế làm dòng bị xóa hoặc đổi cấu trúc mới dùng bảng chuyển đổi có phiên bản, xem trước và hoàn điểm không còn dùng. Không âm thầm hạ rank hoặc thu phí vì quyết định cân bằng của hệ thống.

35 SP/11 TP tại cấp 45 là ngân sách chung cho mọi chủng tộc và nghề. Kỹ năng chủng tộc và nội tại lõi không tiêu SP; không có chủng tộc nhận thêm điểm. Tổng hiệu quả từng rank, hệ số, tài nguyên và hồi chiêu vẫn thuộc bảng số chuyên môn chưa hoàn tất.

## 4. Chậm chuyển chức

Điểm theo cấp được ghi nhận dù chưa chuyển chức, nhưng điểm không thay quyền nghề. Nhân vật cấp 18 chưa chuyển chức vẫn dùng Tân Binh, không có kỹ năng nghề hoặc ô nghề chỉ nhờ đạt cấp.

- Số ô 5 yêu cầu hoàn thành chuyển chức; ô thứ 6 yêu cầu cả cấp 18 và nghề hợp lệ.
- Số ô 8 và tối đa hai chủ động vô môn yêu cầu cả cấp 30 và hoàn thành chuyên sâu.
- Các ô thiên phú ở 15/22/30 cần chuyển chức cơ bản; thiên phú nhánh còn cần quyền nhánh.
- Chưa thăng nhánh ở cấp 30 vẫn dùng bộ nghề tối đa sáu chủ động và một vô môn. Không bị mất kỹ năng đã học.
- SP/TP chưa dùng được giữ, không hết hạn và không tự phân. Hoàn thành chuyển chức muộn cấp quyền mở theo điều kiện hiện tại một lần, không cấp lại điểm theo cấp.

## 5. Vũ khí, phòng cụ và biểu hiện

Quyền cuối cùng là giao của cấp, chủng tộc nếu giới hạn, nghề, nhánh, họ vũ khí và slot. Quyền nghề cha không tự cộng vào quyền nhánh: Sát Thủ dùng song đoản đao, không giữ mọi đòn kiếm của Kiếm Sư dưới dạng riêng.

Nhánh đổi họ vũ khí phải có hình thái tương thích cho cả ba dòng, kỹ năng nghề kế thừa, nội tại nền và kỹ năng bản sắc. Ví dụ Tử Linh sử dụng sách; kỹ năng Pháp Sư kế thừa phải có động tác từ sách. Đây là yêu cầu sản xuất, chưa phải tuyên bố đã làm đủ animation.

Chốt mặc định nhánh Sát Thủ dùng giáp nhẹ; Kiếm Sư cơ bản dùng giáp nhẹ, giáp chiến chỉ khi nhánh hoặc item cho phép. Không suy ra Sát Thủ được mặc mọi giáp chiến chỉ vì thuộc Kiếm Sư. Nhánh còn lại dùng nhóm nghề trong hồ sơ 28 và quyền item cụ thể, không thêm ngoại lệ tự động.

Bộ tập đổi ở NPC huấn luyện ngoài combat, dùng cùng kỹ năng và cooldown. Sau chuyển chức, vũ khí tập không dùng để lấy quyền kỹ năng chiến đấu khác. Cùng một món có thể đổi visual profile theo nhánh hợp lệ nhưng không đổi roll, quyền sử dụng hoặc chỉ số.

## 6. Học, đầu tư, trang bị và kích hoạt

Bốn trạng thái phải riêng: đã học, rank đã đầu tư, đang mang và đang có hiệu lực. Nội tại chủng tộc/lõi đủ điều kiện tự hiệu lực; ba ô bị động tùy chọn chỉ áp dụng cho nhóm cần trang bị.

TP mua lựa chọn trong cây. Một node sửa kỹ năng cần dòng kỹ năng đó đang mang và hình thái phù hợp; không chiếm thêm ô bị động nếu chỉ là biến thể. Node bị động độc lập cần ô sẽ ghi rõ. Mỗi node phải khai báo loại kích hoạt; không áp đồng thời hai cách để nhận đôi hiệu quả.

Hai preset dùng chung quyền đã học và tổng điểm được cấp. Mỗi preset là một phương án phân cùng ngân sách, không phải hai lần nhận SP/TP. Chỉ preset hiện hành có hiệu lực. Vô môn được học rộng nhưng vẫn chịu giới hạn ô, vũ khí và nhóm hồi chiêu.

## 7. Đồng bộ giao diện, nhiệm vụ và lưu trữ

Tạo nhân vật chọn chủng tộc, ngoại hình và xuất thân. Trang nhân vật ghi riêng Chủng Tộc / Chức Nghiệp / Nhánh; bảng K lọc đúng quyền và có chế độ xem kế hoạch. K không thay phím T của thủ thành; bộ phím cuối của MMORPG nằm ở INPUT.

Nhiệm vụ tân thủ không yêu cầu phép nguyên tố hoặc kỹ năng nghề. Nhiệm vụ chuyển chức có bản xem trước vai trò, vũ khí và nhánh tương lai; phát vũ khí nền hợp lệ một lần nếu cần. Nhiệm vụ chuyên sâu không yêu cầu ngẫu nhiên rơi đúng vũ khí mới có thể hoàn tất.

PostgreSQL cần lưu riêng quyền danh tính, quyền học, cấp điểm đã nhận, đầu tư từng preset, preset hiện hành, phiên bản cây và nhóm hồi chiêu. Chuyển chức, nhận vũ khí và chuyển hình thái phải nhất quán; gửi lại không nhân phần thưởng. Đây là yêu cầu thiết kế dữ liệu, không phải schema đã triển khai.

Ngọc một viên, reset cấp mỗi ván và giới hạn kỹ năng Q/E/R của thủ thành không áp sang MMORPG. Ví tiền nạp dùng chung tài khoản; điểm kỹ năng, nhân vật và sức mạnh gameplay tách theo chế độ.

## 8. Phạm vi rà soát và giới hạn

Đã đối chiếu các hồ sơ 15, 18, 19, 26, 28, 29, 31, README và checklist liên quan. Sửa nội dung hiện hành lỗi thời; giữ lịch sử quyết định với trạng thái được thay thế thay vì xóa dấu vết.

Chưa chốt thay bảng chỉ số/cost của 19 nhánh, ma trận số lượng item mới, animation hay cơ chế đổi nghề dài hạn. Không đánh dấu hoàn tất thêm task vì rà soát này. Tiến độ giữ 13 hoàn thiện, 4 một phần, 496 chưa thiết kế trên 513 mục.

Bước thiết kế tiếp theo phù hợp: hoàn thiện nhận diện ART-03 theo toàn cây mới, rồi sản xuất chuẩn ART-04. Trong mảng combat, hoàn thiện bộ Tân Binh và một tuyến nghề/nhánh đại diện trước khi nhân rộng đủ 19 nhánh.


## Cập nhật Kỵ Sĩ chiến đấu trên ngựa · 21/10/2026

[Hồ sơ 34](34_KY_SI_CHIEN_DAU_TREN_NGUA.md) có hiệu lực thay mô tả cưỡi cũ: nghề Kỵ Sĩ và hai nhánh Thánh/Hắc dùng kỹ năng nghề/nhánh khi cưỡi ngựa chiến; Hộ Vệ Thánh được dùng kỹ năng khi đi bộ, chỉ dùng họ ngựa. Thánh/Hắc có giáp ngựa suy ra từ đồ đang mặc và bị động tiến hóa cánh theo từng con ngựa; không còn lấy lên ngựa làm chiêu cuối tạm thời. Nghề khác cưỡi để di chuyển, không chiến đấu trên thú. Quy tắc vùng, quyền kỹ năng và lớp hình xem hồ sơ 34; chưa triển khai.
