# ART-05 — Màu và ký hiệu thông tin trong MMORPG 2.5D

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0  
**Trạng thái:** Hoàn thiện đặc tả ngữ nghĩa và quy tắc hiển thị. Chưa vẽ bộ icon/VFX sản xuất, chưa đo contrast hoặc thử khả năng đọc trên scene.  
**Phạm vi:** Chỉ MMORPG; không sửa thủ thành. Độc lập góc camera cuối, dùng hướng 2.5D của hồ sơ 36–38.

## 1. Nguyên tắc: ba lớp thông tin riêng

Màu quan hệ trả lời ai; hình vùng trả lời sắp xảy ra gì; motif nguyên tố trả lời tác dụng thuộc nhóm nào. Không dùng màu nguyên tố làm màu quan hệ hoặc mặc định tác dụng tốt/xấu. Độc xanh của địch vẫn là nguy hiểm; lửa đồng minh không mặc định gây damage cho người chơi.

Mỗi dấu quan trọng có màu + hình/ký hiệu + trạng thái thời gian. Tên/tooltip bổ sung khi cần, không phải đọc chữ dài để né đòn. Lớp thông tin dùng mã ngữ nghĩa, không hardcode màu riêng từng class. Hex dưới đây là bảng khởi điểm sản xuất, cần đo trên cảnh và nền thực trước xác nhận tương phản.

## 2. Quan hệ nhân vật và mục tiêu

| Vai trò | Màu khởi điểm | Hình/ký hiệu ngoài màu | Điều kiện |
|---|---|---|---|
| Bản thân | Ngà #F2E4B8 | Vòng chân có bốn vạch định hướng nhỏ; nhãn Bạn trong UI khi cần. | Không là aura buff, không báo tăng chỉ số. |
| Thành viên tổ đội | Lam #6DB9EE | Huy hiệu nhóm và số thứ tự thành viên. | Chỉ từ dữ liệu tổ đội, không suy từ cùng guild. |
| Đồng minh khác | Ngọc #69CBB8 | Hai vạch song song trên nhãn; icon đồng minh. | Bao gồm lính/triệu hồi theo quan hệ hiện hành. |
| Trung lập có tương tác | Vàng đất #D8BF7A | Chấm tròn hoặc icon dịch vụ trên nhãn. | Có thể không tấn công được; không dùng màu để ngầm cho phép đánh. |
| Mục tiêu thù địch | Đỏ san hô #EF8077 | Dấu nhọn đối diện ở thanh máu; huy hiệu địch. | Theo quan hệ server, không theo ngoại hình tà/thánh. |
| Chưa rõ/không thể tương tác | Xám #A6ACA5 | Dấu hỏi hoặc khóa có lý do nếu chọn. | Không tiết lộ danh tính/aggro chưa được phép biết. |

Không vẽ vòng chân lớn cho toàn bộ đám đông. Luôn có dấu bản thân; tổ đội có chế độ gọn; vòng chọn chỉ hiện mục tiêu được chọn/hover hợp lệ. Người cùng guild nhưng đối địch theo luật PvP phải ưu tiên quan hệ combat. Ngữ nghĩa ở đây không tự mở PvP hoặc friendly fire.

Mục tiêu đang chọn dùng bốn góc khung/ngoặc quanh vùng chọn và dấu hướng nhỏ; hình này khác vòng aura. Boss có huy hiệu riêng và tên/HP ở UI, kích thước hình không tự quyết vùng trúng đòn.

## 3. Vùng nguy hiểm và vùng hỗ trợ

| Loại vùng | Dấu hình chính | Màu và thời gian |
|---|---|---|
| Đòn địch sắp nổ | Biên liền + vạch chéo hướng vào trong + icon nguy hiểm tại điểm neo rõ. | Viền san hô; tiến độ quét/thu báo thời điểm. Màu nguyên tố nằm ở lớp trong. |
| Nguy hiểm đang tồn tại | Biên liền + mẫu nhọn lặp thưa. | Giữ dấu hoạt động ổn định, không lặp animation báo nổ như sắp cast lại. |
| Hồi phục đồng minh | Biên mềm có các dấu cộng định kỳ. | Xanh lá #8FD18A; motif nguyên tố tách riêng. |
| Bảo hộ/khiên | Biên đứt dạng đoạn khiên. | Lam sáng #8ABDDD; icon khiên và thời hạn. |
| Hỗ trợ khác | Biên đứt + icon loại buff. | Ngọc nhạt #99CFC2, không dùng dấu cộng nếu không hồi HP. |
| Vùng tương tác/an toàn | Viền mảnh + icon dịch vụ/nghỉ. | Ngà/vàng đất; không cùng mẫu báo đòn. |

Hình học vùng phải đúng dạng gameplay: vòng tròn, hình quạt, đường thẳng hoặc vùng đa giác; không đổi hình chỉ để đẹp. Dấu tiến độ phản ánh thời điểm do game state cung cấp, không client tự đoán damage theo animation. Rời màn hình/lag không tự phát lại telegraph cũ như đòn mới.

Nếu nhiều vùng trùng: báo đòn địch ưu tiên, giữ thấy dấu hồi phục cần thiết và điểm chân bản thân; trang trí aura giảm trước. Không xóa hoàn toàn nguy hiểm nhỏ nằm trong vòng lớn. Quy tắc gộp render phải giữ danh tính/tầng và thời điểm các đòn, không gộp logic damage. ART-06 chốt mức chi tiết và ngân sách hiển thị.

## 4. Nguyên tố và motif

| Nhóm | Màu khởi điểm | Motif nhận diện | Phân biệt |
|---|---|---|---|
| Vật lý | Ngà thép #D6D1BC | Nét chém/đầu va đập. | Không tự gọi là nguyên tố mới hoặc thêm kháng. |
| Hỏa | Cam #F19A55 | Giọt lửa, tàn góc nhỏ. | Đốt khác vùng hồi phục dù đồng minh dùng phép lửa. |
| Thủy | Lam nước #65BFD1 | Giọt tròn, dải sóng. | Không dùng tinh thể cho mọi phép Thủy. |
| Băng — biểu hiện trạng thái | Băng nhạt #B0E0EA | Tinh thể góc/sáu nhánh. | Làm rõ khác Thủy; không tự thêm một hệ kháng Băng độc lập vào STAT. |
| Lôi | Vàng #EAD66E | Tia gãy nhánh. | Ký hiệu điện thay vì chỉ chớp trắng. |
| Thổ | Nâu vàng #BE9A66 | Khối/bậc đá. | Không nhầm giáp vật lý chỉ vì cùng màu kim loại. |
| Mộc | Lá #83B978 | Mầm/lá lớn. | Mộc không mặc định hồi HP; dấu cộng chỉ xuất hiện khi hồi thật. |
| Phong | Ngọc nhạt #9ED8C8 | Cánh cung/xoáy mở. | Vệt tốc độ chỉ cho trạng thái tăng tốc thật. |
| Ánh Sáng | Vàng ngà #F1DDA1 | Tia hình thoi/ấn thánh. | Không tự là heal, không nhầm quan hệ bản thân. |
| Bóng Tối | Tím #AA8AC8 | Vòng khuyết/ấn đứt. | Không mặc định độc hoặc Tử Linh. |
| Độc | Lục vàng #ACBE65 | Giọt có chấm/bong bóng. | Luôn có dấu độc; không dùng dấu cộng dù cùng họ xanh. |

Danh mục là ngôn ngữ hình ảnh để bao phủ các hiệu ứng đã nêu, không xác nhận công thức tương khắc hay catalog damage cuối. Sách Tử Linh/khế ước và thần thánh là motif nghề; cơ chế có thể dùng tag trong danh mục được STAT/SKILL chốt, không tự tạo thêm bảng kháng theo trang phục.

## 5. Buff, debuff và dấu trên nhân vật

| Trạng thái | Icon/hình bổ sung | Dấu trong thế giới |
|---|---|---|
| Choáng | Vòng xoắn, timer. | Vòng xoắn trên đầu; không dùng stars trang trí lúc chưa bị choáng. |
| Đóng băng | Tinh thể/khóa băng. | Cụm băng gọn ở thân/chân, không che HP hoặc điểm chân. |
| Làm chậm | Dấu bước với mũi tên xuống, nguồn hiệu ứng. | Vệt dưới chân; băng tinh thể, lửa tro/than, tác nhân khác theo source. |
| Độc | Giọt độc + số stack. | Hạt/ấn độc gọn, không dùng aura hồi phục. |
| Bỏng | Giọt lửa + số stack nếu logic có. | Tàn lửa thưa, khác animation cast của chính nhân vật. |
| Khiên | Khiên + lượng còn lại hoặc thời hạn theo dữ liệu. | Vòng khiên/phần cung gọn; không ngầm hứa giảm damage nếu chỉ có shield HP. |
| Tăng tốc chạy | Bước chân/mũi tên lên. | Vệt sau lưng có giới hạn; dừng khi buff hết. |
| Tăng tốc đánh | Lưỡi vũ khí + nhịp đôi. | Overlay vũ khí lạnh/ngọc theo profile, tách icon với tăng công. |
| Tăng công | Vũ khí + dấu cộng góc. | Overlay vũ khí ấm theo profile; không che màu nguyên tố. |
| Hồi HP | Dấu cộng. | Dấu cộng xanh gọn ở thời điểm hồi thực tế. |
| Hút máu | Giọt + mũi tên về chủ. | Luồng ngắn về chủ rồi xác nhận hồi; không phát heal khi bị chặn hoặc hồi bằng 0. |
| Giảm giáp | Khiên nứt + mũi tên xuống. | Dấu nhỏ gọn, tránh thêm cả màn khói. |

Icon buff có viền trên dạng cung mềm; debuff có dấu khía ở góc và nhóm Bất lợi trong panel. Không coi mọi icon xanh là buff, đỏ là debuff. Stack, thời gian và nguồn nhận từ authoritative state; render không tạo thêm timer gameplay hoặc nhân hiệu ứng theo số người cùng đánh.

Thể hiện một icon cho một effect dùng chung trên mục tiêu, kèm stack/timer theo luật; buff riêng có thể gộp hình nhưng tooltip liệt kê quyền nguồn khi được phép. Không cộng các stack chỉ vì các icon trông giống nhau. Hiệu ứng từ vùng/tọa kỵ/đồ có nhãn nguồn để phân biệt bị động với buff tạm.

## 6. Chữ số chiến đấu và vật phẩm

Damage dùng số ngà, crit thêm dấu vỡ/tia và nhãn Bạo kích ở chế độ chi tiết; không chỉ phóng số gấp nhiều lần che mục tiêu. DoT có icon nguồn ở chế độ chi tiết; heal có dấu +, mất mana/HP không trộn cùng màu. Hấp thụ, Miễn nhiễm, Né/Trượt chỉ hiện khi logic thật có kết quả đó, không ngẫu nhiên trang trí.

Không lấy màu tiền nạp hoặc màu độ hiếm vật phẩm để suy công dụng combat. Độ hiếm cần thêm nhãn và bậc/icon khi hệ item được chốt; ART-05 không tự đặt bảng rarity hoặc xác suất túi quà. NPC dịch vụ dùng icon chức năng, không dùng aura nguy hiểm để gọi chú ý.

## 7. Quy tắc 2.5D và nhiều tầng

Vòng chân, aura và telegraph thuộc bề mặt đích; một vùng dưới cầu không tô mặt cầu phía trên. Icon đầu theo actor và trạng thái hiển thị hợp lệ, không theo đỉnh cánh/chiều cao VFX. Vùng nhìn xuyên mái chỉ hỗ trợ đọc thông tin được phép, không tiết lộ quái/địch tầng khác hoặc sau tường chưa được phát hiện.

Nguy hiểm khác tầng không gây hại cho actor hiện tại phải có khác biệt: giảm nhấn/motif tầng khi vẫn cần thấy, thay vì cùng cảnh báo đầy đủ làm người chơi né nhầm. Nếu skill ảnh hưởng nhiều tầng phải khai báo phạm vi thật và hiển thị trên từng mặt bị ảnh hưởng. UI báo mục tiêu khác tầng khi thao tác không hợp lệ; không tự chuyển target sang con quái chồng hình gần đó.

Cánh Thánh/Hắc và aura thường trực là dấu class/trạng thái, không dấu nguy hiểm. Phải giữ điểm chân bản thân và telegraph khi cánh mở. Màu trắng của Thánh và tím của Hắc không xác định thiện/ác hoặc quan hệ đồng minh.

## 8. Tùy chọn đọc thông tin

Cho chọn palette quan hệ, tăng viền vùng, bật họa tiết bổ sung và giảm nhấp nháy/chuyển động trang trí. Ký hiệu vẫn cố định khi đổi palette; không để tùy màu làm mất phân loại nhóm. Có reset về mặc định và preview gồm độc/hồi HP, Hỏa địch/Hỏa đồng minh, hai tầng và ngựa mở cánh.

Không cam kết palette đã thân thiện với mọi dạng suy giảm thị giác khi chưa đo/thử. Nghiệm thu cần ảnh màu, đơn sắc, nền sáng/tối và mô phỏng khó phân biệt màu; thử tại độ phân giải hỗ trợ và cỡ chữ thực. Không chỉ đo hex trên nền panel rồi kết luận đọc được trong combat.

## 9. Đầu ra sản xuất và trạng thái

Cần bảng token màu/ký hiệu, icon quan hệ, pattern vùng, motif nguyên tố, icon effect, mẫu tooltip và fixture cảnh. Tên biên tập ví dụ relation.hostile, area.heal, effect.poison không phải runtime ID/schema đã tạo. Bảng icon chi tiết/ảnh sản xuất ở ART-07; ngân sách LOD/particle ở ART-06; catalog effect và công thức ở COMBAT/STAT.

ART-05 hoàn thiện đặc tả ngữ nghĩa trong phạm vi task, chưa tạo icon/VFX gameplay, scene hoặc kiểm chứng contrast. ART-01/02/04 tiếp tục một phần; tiếp theo thiết kế ART-06 trong khi camera chờ mẫu. Tổng hiện hành **13/513 hoàn thiện, 6 một phần, 494 chưa thiết kế**.


**Danh mục trạng thái mở rộng:** [Hất tung, trói chân, giáp/kháng phép, lá chắn, chảy máu và buff/debuff](40_DANH_MUC_TRANG_THAI_BUFF_DEBUFF.md). Phân biệt tăng giáp với giáp ảo, slow chạy/đánh/niệm và damage theo thời gian; chưa chốt bảng số hoặc công thức combat.
