> **Cập nhật chuyên môn · 21/10/2026:** [STAT V1](76_TONG_HOP_ROAD_STAT_10_MUC.md) đã xác định cách cộng luck, crit, cap và pipeline. Những đoạn lịch sử dưới đây ghi “chưa chốt” được thay theo hồ sơ hiện hành khi xung đột; hệ số mới vẫn là cấu hình cần thử.

# PROD-04 — Phân bổ sức mạnh và nguyên tắc cân bằng

**Phiên bản:** 1.1 · **Ngày:** 20/10/2026 · **Mốc:** M0, định hướng M1/M2.  
**Trạng thái:** Đã hoàn thiện thiết kế V1 trong phạm vi mục; chưa triển khai.
**Người soạn:** Trợ lý thiết kế · **Người duyệt:** Chủ dự án.  
**Đầu vào:** PROD-01…03 và checklist STAT/COMBAT/SKILL. Các hồ sơ trước vẫn giữ trạng thái chờ duyệt.

## 1. Mục tiêu

**Sức mạnh đến từ nhân vật được xây hợp lý và cách sử dụng nhân vật, không chỉ từ số lượng hệ thống đã mở.**

Người chơi lên cấp cảm nhận được tiến triển; trang bị là động lực săn tìm; kỹ năng giữ bản sắc class; thao tác tốt tạo lợi thế trong nội dung phù hợp. Các hệ tu luyện, khai mạch, tín ngưỡng, cánh, thú cưỡi và tiến hóa phải có ngân sách chung, không tự nhân thêm một tầng sức mạnh riêng mỗi khi xuất hiện.

Đây là thiết kế MMORPG mới. Không thay công thức, chỉ số, ngọc hoặc kỹ năng game thủ thành đang có. Chưa chốt trần cấp, danh sách thuộc tính, giá, tỷ lệ rơi hoặc lợi thế thương mại.

## 2. Phân biệt sức mạnh số và kỹ năng điều khiển

Không chia “30% thao tác + 70% trang bị” vì thao tác không phải chỉ số có thể cộng vào nhân vật.

| Lớp | Nội dung | Cách đánh giá |
|---|---|---|
| Sức mạnh có thể tính | Cấp/điểm cộng, trang bị, skill/passive, nguồn phụ. | Ngân sách thuộc tính và kịch bản hiệu quả theo vai trò. |
| Khả năng sử dụng | Ngắm, vị trí, né/đỡ, chọn thời điểm, combo, quản lý tài nguyên. | Tình huống chiến đấu ở cùng bộ chỉ số, không quy đổi thành điểm thuộc tính. |
| Kiến thức/chuẩn bị | Hiểu boss, chọn món/skill phù hợp, phối hợp đội. | Có lựa chọn phản ứng và đánh đổi hữu ích, không chỉ yêu cầu lực chiến. |

**Đề xuất:** trong khoảng nội dung phù hợp cấp/trang bị, người hiểu cơ chế phải có cơ hội rõ để thành công hơn người chỉ đứng đánh. Đồ tốt giúp dễ thở hơn nhưng không bỏ qua mọi cơ chế. Chưa cam kết người cấp thấp bất kỳ có thể thắng boss chênh lệch vô hạn chỉ nhờ né.

## 3. Ngân sách nền đề xuất

Đối với một nhân vật tham chiếu ở một mốc tiến trình, chưa có buff tạm thời hoặc hệ mở rộng, dùng **100 đơn vị ngân sách thiết kế**:

| Nguồn | Ngân sách đề xuất | Vai trò |
|---|---:|---|
| Cấp độ và điểm cộng | 35 | Nền trưởng thành ổn định; bảo đảm nhân vật không hoàn toàn phụ thuộc đồ hiếm. |
| Trang bị và nâng đồ | 45 | Động lực khám phá, săn đồ và chọn build; bao gồm base stat, affix, ngọc, cường hóa, bộ đồ và proc trang bị. |
| Class, kỹ năng và nội tại | 20 | Bản sắc và hướng xây dựng; gồm lợi ích số từ rank, talent, passive và chuyên tinh. |
| Tổng nền | 100 | Mẫu để phân bổ, không phải điểm lực chiến hoặc công thức sát thương. |

**Cách hiểu:** 35/45/20 không phải 35% mọi chỉ số đến từ cấp; cũng không phải đồ gây đúng 45% sát thương. Đây là phần ngân sách đóng góp khi cân bằng ở mốc tham chiếu. Cách quy đổi HP, giáp, DPS, hồi phục, utility cần thiết kế ở STAT-11 và xác minh theo tình huống.

Đòn chủ động vừa có hệ số skill vừa dùng vũ khí, vì vậy không được tính toàn bộ damage của cùng đòn vào cả ngân sách skill và đồ. Mỗi lợi ích khai báo chủ sở hữu và phần tăng thêm so với mẫu nền; tác động kết hợp phải kiểm tra riêng, không giả định cộng ba con số là đo được DPS.

Ngân sách áp dụng cho **mẫu build hợp lệ**, không buộc mọi người có đúng phân bố. Build dồn chống chịu có thể đánh chậm hơn, build cơ động có thể ít phòng thủ hơn. Cùng ngân sách không có nghĩa mọi class phải giống nhau.

## 4. Giới hạn hệ phát triển mở rộng

**Đề xuất:** tổng sức mạnh số thường trực từ các hệ mở rộng chỉ được phân bổ trong **quỹ bổ sung tối đa 15 đơn vị trên nền 100** ở cùng mốc tham chiếu. Tất cả hệ chia chung quỹ này; không phải mỗi hệ được thêm 15%.

| Hệ | Hướng thiết kế đề nghị | Ràng buộc |
|---|---|---|
| Tu luyện | Chọn nhánh phát triển, chỉ số nền có giới hạn. | Dùng phần được cấp trong quỹ chung. |
| Khai mạch | Chọn nút và đường đi, có lựa chọn loại trừ. | Không lấy hết mọi nhánh chỉ bằng tích lũy vô hạn. |
| Tín ngưỡng | Lựa chọn lời thề/đặc tính gắn lore. | Có đánh đổi; không buộc class thuộc một đạo đức hoặc phe cố định. |
| Cánh | Ngoại hình, dấu mốc tiến hóa và tiện ích nếu phù hợp. | Không mặc định bay qua địa hình/bỏ cơ chế boss; chỉ số dùng quỹ chung. |
| Thú cưỡi | Ưu tiên di chuyển ngoài combat và sưu tầm. | Tốc chạy có giới hạn riêng; chiến đấu trên thú là thiết kế riêng, không tự cộng damage. |
| Tiến hóa | Đổi hình thái hoặc biến thể lối chơi. | Thường trực dùng quỹ chung; dạng chiến đấu tạm thời nằm trong thiết kế skill, không tính hai lần. |
| Pet/guild/danh hiệu và nguồn khác | Sưu tầm, phối hợp hoặc utility theo phạm vi. | Nếu cấp chỉ số thường trực phải khai báo vào quỹ phù hợp, không trở thành nguồn ngoài sổ. |

115 đơn vị chỉ là ngân sách tham chiếu sau mở rộng, **không bảo đảm hiệu quả thực tế chỉ tăng 15%**: công, tốc đánh, chí mạng và khả năng sống có tương tác. STAT phải kiểm tra tác động kết hợp và giảm phân bổ nếu vượt mục tiêu.

Không chốt phần chia từng hệ trước khi thiết kế chúng. Nếu cần tăng quỹ, phải duyệt lại bảng tổng và sức mạnh PvE, không âm thầm thêm nguồn. Bản đầu chưa cần bật các hệ này; truyện solo không yêu cầu hoàn tất hệ mở rộng mới được đi tiếp.

## 5. Quy tắc cộng dồn

1. **Mỗi lợi ích có một nơi hạch toán.** Ngọc nằm trong trang bị; talent trong kỹ năng. Item mở tu luyện không khiến cùng lợi ích vừa tính là đồ vừa tính là tu luyện.
2. **Các nguồn tăng cùng loại dùng nhóm cộng được định nghĩa chung.** Đề xuất các dòng “tăng công %” cùng nhóm cộng với nhau thay vì từng hệ tự nhân riêng. Đây là hướng cho STAT-05, chưa thay công thức hiện có.
3. **Hệ số nhân độc lập phải được liệt kê và có lý do.** Không đặt mặc định một hệ số riêng cho mỗi cánh, mạch, tín ngưỡng và pet.
4. **Giới hạn và đánh đổi phải hiện được.** Tốc đánh, giảm hồi chiêu, giảm damage, hút máu, khống chế và tốc chạy cần ngưỡng do STAT chốt; không cộng để đạt miễn nhiễm hoặc khóa boss vô hạn ngoài chủ đích.
5. **Nguồn trùng phải có quy tắc dùng chung.** Buff cùng loại từ nhiều đồng đội cần quy tắc mạnh nhất/cộng giới hạn/làm mới được thiết kế ở STAT-09, không nhân theo số người một cách ngầm định.
6. **Cơ chế kích hoạt không tự kích hoạt vô hạn.** Damage lan, DoT, phản đòn, pet và proc có cờ nguồn/quyền kích hoạt rõ; không tạo vòng lặp vô hạn hoặc thưởng trùng.

Ví dụ minh họa cách nhóm, không phải thông số vật phẩm: hai nguồn cùng nhóm tăng công 10% và 20% đề xuất thành +30% của cơ sở được quy định, thay vì tự thành 1,1 × 1,2. Cơ sở, thứ tự, làm tròn và ngoại lệ vẫn phải chốt trong STAT.

## 6. Vai trò chiến đấu và khả năng solo

| Hướng chơi | Điểm mạnh | Đánh đổi và đường solo |
|---|---|---|
| Sát thương | Kết thúc giao chiến nhanh, dồn hoặc duy trì theo class. | Chịu lỗi ít hơn hoặc phải quản lý vị trí/tài nguyên; không tự có phòng thủ ngang tank. |
| Chống chịu | Sống sót, bảo vệ, kiểm soát áp lực. | Damage thấp hơn mẫu sát thương nhưng có bộ công cụ hoàn thành truyện solo trong nhịp hợp lý. |
| Hỗ trợ | Hồi phục, buff, giải trạng thái và utility. | Có đòn/nhánh solo phù hợp; đóng góp nhóm không chỉ đo bằng đòn cuối hoặc DPS. |
| Cơ động/khống chế | Chọn thời điểm, xử lý tình huống và tạo khoảng trống. | Damage hoặc độ bền có đánh đổi; boss có phản ứng/kháng phù hợp, không vô hiệu toàn bộ bản sắc. |

Một class có thể đảm nhiệm nhiều hướng, nhưng không đồng thời tối đa mọi ưu thế. Không tạo class mới hoặc gán cứng vai trò cho các class hiện có trong PROD-04; SKILL-01 sẽ lập hồ sơ từng class.

## 7. Nội dung không bị khóa chỉ bởi một số lực chiến

- Cấp/trang bị đề nghị giúp người chơi hiểu độ khó; yêu cầu cứng chỉ dùng khi có lý do gameplay, truyện hoặc vận hành rõ.
- Nếu dùng lực chiến, đó là chỉ báo tham khảo, không thay HP/giáp/kháng/vai trò hoặc hiểu cơ chế.
- Boss cần kết hợp đòn có thể né/đỡ, áp lực lên tài nguyên và cơ hội phản công; không chỉ tăng HP để kéo dài trận.
- Không biến tất cả cơ chế thành sát thương không thể tránh khiến thao tác không còn ý nghĩa; cũng không cho né bỏ mọi yêu cầu chỉ số.
- Cân bằng solo và nhóm có mẫu riêng; boss đông người không chỉ tăng HP mà phải đánh giá thời gian giao tranh, khả năng hồi phục/khống chế và quyền đóng góp.
- Chưa chốt công thức scale boss theo người, chênh cấp, kháng hay tỷ lệ giảm damage trong hồ sơ này.

## 8. Buff tạm thời, vật phẩm và nguồn trả phí

Buff chiến đấu, thức ăn, thuốc, môi trường và đồng đội không nằm trong 100 đơn vị nền thường trực. Chúng phải có **ngân sách tình huống riêng**, thời lượng, nhóm cộng và giới hạn để đối chiếu cùng mẫu buff được phép khi cân nội dung. Chưa duyệt mức số, không hiểu là được tăng tùy ý.

Đề xuất truyện chính không yêu cầu phải dùng thuốc hiếm hoặc buff sự kiện. Vật phẩm tiêu thụ giúp chuẩn bị và xử lý sai sót, không thay mọi kỹ năng phòng thủ.

Mọi nguồn trả phí nếu được cho sức mạnh cũng phải đi qua ngân sách như nguồn khác. **PROD-04 không duyệt bán sức mạnh, VIP hoặc lợi thế nạp:** mô hình thương mại thuộc PROD-05. Ngoại trang thuần hình ảnh không được lén có lợi thế hitbox, tầm nhìn hoặc che báo trước.

## 9. Ví dụ ngân sách trên giấy

| Mẫu | Nền cấp | Đồ gồm các lớp nâng | Skill/passive | Hệ mở rộng chung | Tổng tham chiếu |
|---|---:|---:|---:|---:|---:|
| Nhân vật tham chiếu trước hệ sâu | 35 | 45 | 20 | 0 | 100 |
| Sau mở rộng trong giới hạn | 35 | 45 | 20 | Tối đa 15 | Tối đa 115 |
| Đổi một phần nâng đồ thành ngọc | 35 | Vẫn nằm trong 45 | 20 | 0 | 100 |

Đây không phải chỉ số thực tế của nhân vật vừa tạo, không mặc định người mới đã đủ đồ/skill. Mỗi mốc cấp và mức đầu tư phải có mẫu riêng. Khi tiến trình mở thêm phần trong quỹ, ngân sách đạt được thay đổi; không ép tăng phần còn lại để mọi người luôn có 100.

Một bộ đồ hiếm hơn có thể tăng phần ngân sách đang đạt trong mốc cho phép hoặc đổi phân bố dòng, không tự vượt mọi giới hạn vì màu hiếm. Tỷ lệ roll, bậc đồ và bước tăng do GEAR/STAT-11 chốt.

## 10. Giao diện người chơi cần hiểu

Trong cửa sổ nhân vật, đề xuất tách **Cơ bản / Chi tiết / Nguồn đóng góp**:

| Khu vực | Nội dung |
|---|---|
| Cơ bản | Cấp, vai trò/build, chỉ số quan trọng và điểm chưa phân bổ. |
| Chi tiết | Chỉ số hiệu lực, đơn vị, giới hạn áp dụng, điều kiện tình huống. |
| Nguồn đóng góp | Cấp/điểm cộng, trang bị, skill/passive, hệ phụ và buff tạm; không hiển thị 35/45/20 như tỉ lệ damage của người chơi. |
| So sánh | Trước/sau khi đổi đồ/điểm, lợi ích tăng và thứ giảm; hiệu ứng kích hoạt riêng với chỉ số thường trực. |
| Buff/debuff | Icon, nguồn, thời gian/stack và quy tắc không cộng khi trùng nếu liên quan. |

Không cần vẽ biểu đồ tổng “sức mạnh” khi chưa có mô hình đo được duyệt. Phím mở, wireframe, icon và layout chốt ở UI/INPUT/SCREEN; chưa tạo asset tại mục này.

## 11. Dữ liệu và ranh giới thẩm quyền

PostgreSQL lưu các đầu vào bền vững như cấp/XP, điểm đã phân, skill đã học, trang bị/affix/nâng cấp và tiến độ hệ phụ. Backend tính chỉ số hiệu lực theo phiên bản quy tắc; client không tự gửi một con số công/giáp để server tin.

Phân bổ điểm, nâng skill, nâng đồ và mở nút là giao dịch kiểm tra điều kiện/tài nguyên và cập nhật nhất quán. Tính lại chỉ số sau thay đổi hợp lệ; nếu lưu cache chỉ số dẫn xuất, phải có cách vô hiệu hóa/tính lại khi đầu vào hoặc phiên bản cân bằng thay đổi.

Trạng thái buff tạm thời giữ/mất khi logout/chết/chuyển vùng do STAT/COMBAT/DATA quy định. Không tự lưu mọi buff vĩnh viễn chỉ vì database lưu nhân vật. Bản vá cân bằng cần phiên bản và kế hoạch chuyển dữ liệu; không tự ý xóa đồ/điểm để khớp bảng mới.

## 12. Tiêu chí cân bằng cần thiết kế và đánh giá sau

| Tình huống | Cần chứng minh |
|---|---|
| Cùng bộ chỉ số, khác thao tác | Có phản ứng làm thay đổi kết quả, sai sót có thể nhận biết. |
| Cùng cấp, các hướng build hợp lệ | Có điểm mạnh/đánh đổi, không một lựa chọn tốt nhất trong mọi tình huống. |
| Chống chịu/hỗ trợ solo | Có đường hoàn thành truyện, không đòi đổi class. |
| Đổi một lớp nâng đồ sang ngọc | Không tính ngân sách hai lần, nguồn chỉ số hiển thị đúng. |
| Mở đồng thời nhiều hệ phụ | Tổng quỹ được kiểm soát; tương tác chỉ số không phá mục tiêu hiệu quả. |
| Nhiều người cùng buff/khống chế | Không vượt giới hạn do lặp nguồn hoặc proc đệ quy. |
| Người thiếu buff sự kiện | Vẫn có đường hoàn thành truyện trong mức chuẩn bị phù hợp. |
| Cân bằng lại và đăng nhập từ web/PC | Cùng đầu vào/quy tắc cho cùng kết quả hợp lệ, không phụ thuộc client. |

Chưa chạy test, mô phỏng cân bằng, đo DPS hoặc kiểm tra trình duyệt. Đây là các tiêu chí đầu vào, chưa phải kết quả đã đạt.

## 13. Những thông số vẫn cần hồ sơ riêng

- STAT: danh mục thuộc tính, công thức sát thương/phòng thủ, quy đổi ngân sách, cap và mẫu đánh giá theo vai trò.
- LEVEL/PROD-08: trần cấp, đường tăng trưởng và mốc mở hệ.
- GEAR/ITEM: slot, độ hiếm, affix, ngọc, từng lớp nâng và mẫu đồ theo mức đầu tư.
- SKILL: hệ số/rank, cooldown, tài nguyên, proc và tương tác cụ thể theo class.
- Hệ sâu: phần quỹ phân bổ từng hệ, điều kiện mở và cơ chế đánh đổi.
- COMBAT/PARTY: chuẩn bị đầu vào, scale nhóm, chênh cấp, khống chế boss và quyền nhận thưởng.

## 14. Nội dung đề nghị duyệt

1. Tách sức mạnh số khỏi thao tác, không quy đổi kỹ năng người chơi thành một tỷ lệ chỉ số giả.
2. Dùng mẫu ngân sách nền **35 cấp/điểm + 45 trang bị/nâng đồ + 20 class/skill**, sau đó hiệu chỉnh bằng hồ sơ STAT và mẫu chiến đấu.
3. Hệ sâu chia chung quỹ bổ sung tối đa **15 trên nền 100** ở mốc tham chiếu; hiệu quả thực tế vẫn phải đánh giá tương tác.
4. Không tạo hệ số nhân riêng mặc định theo mỗi hệ; mỗi lợi ích chỉ hạch toán một lần.
5. Giữ đường truyện solo cho mọi hướng chơi được hỗ trợ; lực chiến không thay cơ chế và vai trò.

Đây là đề xuất V1 có số cụ thể để duyệt, chưa phải công thức được áp dụng. Thay đổi các tỷ lệ phải cập nhật bảng và các hồ sơ nhận phụ thuộc. Không đánh dấu PROD-04 hoàn tất thay người duyệt.

**Mục tiếp theo:** PROD-05 — triết lý thương mại: bán gì, không bán gì, nguồn kiếm tài nguyên và nguyên tắc công bằng.

## 15. Nhật ký

| Ngày | Phiên bản | Thay đổi | Trạng thái |
|---|---|---|---|
| 20/10/2026 | 1.0 | Ngân sách sức mạnh, giới hạn hệ sâu, cộng dồn, vai trò, UI và dữ liệu. | Chờ chủ dự án duyệt. |

## 16. Bổ sung từ chủ dự án — chỉ số phần trăm, may mắn và bạo kích

**Ngày:** 20/10/2026 · Những quy tắc được nêu trực tiếp dưới đây thay thế đề xuất V1 khi có xung đột. Các tỷ lệ ngân sách 35/45/20 và quỹ 15 vẫn là đề xuất, chưa được duyệt chỉ vì cập nhật phần này.

### 16.1. Cộng theo phần còn thiếu tới trần

Chủ dự án yêu cầu các chỉ số thuộc nhóm này có trần 100%, gồm tốc đánh và xuyên giáp. Cách diễn giải công thức từ ví dụ:

`giá trị mới = giá trị hiện tại + (100% − giá trị hiện tại) × tỷ lệ nguồn cộng thêm`

Dùng số thập phân: `r_mới = r_cũ + (1 − r_cũ) × b`.

| Giá trị cũ | Nguồn thêm | Giá trị mới |
|---|---|---|
| 0% | 10% | 10% |
| 10% | 10% | 19% |
| 19% | 10% | 27,1% |
| 50% | 5% | 52,5% |
| 90% | 5% | 90,5% |

Đây là tăng hiệu quả giảm dần theo khoảng còn lại, không phải cộng điểm phần trăm trực tiếp. Chỉ áp dụng cho danh mục chỉ số được chỉ định, không tự áp dụng cho công, HP, giáp hoặc mọi dòng phần trăm.

Với các nguồn không âm độc lập, cùng quy tắc: `r = 1 − tích(1 − b_i)`. Công thức tập hợp cho cùng kết quả không phụ thuộc thứ tự, tránh làm tròn từng bước. Backend tính lại từ danh sách nguồn khi thay đồ hoặc buff hết hạn; không trừ thẳng giá trị nguồn khỏi tổng đã cộng. Làm tròn khi hiển thị; độ chính xác nội bộ chốt tại STAT.

Các nguồn nhỏ hơn 100% sẽ tiến gần nhưng không tự đạt chính xác 100% sau hữu hạn lần cộng. Nguồn đặt thẳng trần hoặc ngoại lệ phải được thiết kế riêng. Debuff, giá trị âm, giảm trần và các nhóm buff khác chưa có quy tắc: cần chốt tại STAT, không dùng công thức trên một cách ngầm định.

**Ý nghĩa tốc đánh còn cần làm rõ:** đề xuất 0% là không có thưởng, 100% là +100% tốc độ so với tốc đánh nền; tần suất = tốc đánh nền × (1 + r). Đây chỉ là đề xuất cách diễn giải, chưa được người dùng chốt. Không nhầm 100% với xác suất đánh hoặc giảm 100% thời gian đòn đánh.

**Xuyên giáp:** tỷ lệ áp dụng cho phần giáp nào, tương tác giảm giáp mục tiêu và xuyên cố định vẫn chờ STAT-06/08. Không tự coi đây là sát thương chuẩn hoặc bỏ qua mọi kháng.

### 16.2. Nguồn thuộc tính hiếm

- Theo yêu cầu chủ dự án, chỉ số thuộc nhóm đặc biệt này rất hiếm trên trang bị và các nguồn phát triển thường trực.
- Trên mỗi dòng thuộc tính áp dụng, nguồn cộng tối đa **5%**; đây là đầu vào b của công thức, không bảo đảm tổng tăng đủ 5 điểm phần trăm.
- Giới hạn 5% được nêu cho dòng thuộc tính; chưa tự mở rộng thành giới hạn mọi phần thưởng, nội tại hoặc mọi dòng thông thường.
- Kỹ năng/buff không bị ràng buộc mặc định bởi mức 5% trên dòng đồ; vẫn phải có bảng cân bằng, nhóm cộng và chính sách trần.
- Chưa chốt tỷ lệ xuất hiện, số dòng trên món, pool theo slot/cấp/độ hiếm hoặc khả năng trùng dòng. GEAR phải thiết kế trước khi phát hành.

Quy tắc này không cho phép hệ phụ vượt ngân sách riêng bằng cách chỉ ghi nguồn là buff. Nguồn thường trực và tạm thời phải phân loại đúng.

### 16.3. May mắn

**Đã chốt bởi chủ dự án:** may mắn giúp tăng khả năng rơi đồ; phần có tác dụng lên rơi đồ tối đa **15%**. Phần vượt được chuyển thành **sát thương bạo kích**, không phải xác suất bạo kích.

Định nghĩa đề nghị để diễn đạt rõ: L là tổng may mắn trước khi tách; phần rơi đồ = min(L, 15%); phần dư = max(0, L − 15%), khi L không âm. Cách cộng các nguồn may mắn còn phải chốt; chưa mặc định dùng nhóm trần 100% hoặc cộng tuyến tính.

Ví dụ chỉ minh họa tách phần khi L đã được xác định: tổng L = 18% thì 15% dành cho cơ chế rơi đồ, 3 điểm phần trăm là phần chờ quy đổi sang sát thương bạo kích. **Chưa có tỷ lệ quy đổi nên không kết luận nhận +3% damage crit.**

Các điểm còn cần chốt:

- May mắn tăng tỷ lệ có đồ, tỷ lệ độ hiếm, số lượt roll hay tác động bảng loot nào? Không tự tăng tất cả.
- 15% là hệ số tăng tương đối hay cộng điểm phần trăm vào xác suất? Ví dụ tỷ lệ gốc 10% chưa thể kết luận thành 11,5% hay 25%.
- Nguồn cộng và buff may mắn, thời điểm lấy giá trị, người có quyền áp dụng trong party, điều kiện boss/rương/sự kiện và giới hạn kinh tế.
- Tỷ lệ đổi phần dư sang damage crit, đơn vị biểu diễn, giới hạn đầu ra và tương tác với các nguồn crit khác.
- Nếu nguồn may mắn hết hạn hoặc tháo đồ: đề xuất tính lại cả hai phần từ nguồn hiện có, không lưu phần dư thành buff vĩnh viễn.

Phải thể hiện phần hiệu lực và phần quy đổi trên UI; một giá trị vượt 15% không được biến mất khỏi giải thích.

### 16.4. Bạo kích

**Đã chốt:** game có bạo kích; đòn bạo kích gây sát thương cao hơn đòn thường tương ứng.

Phân biệt hai chỉ số:

| Chỉ số | Chức năng |
|---|---|
| Tỷ lệ bạo kích | Xác suất một đòn đủ điều kiện trở thành bạo kích. |
| Sát thương bạo kích | Mức tăng/hệ số sát thương khi đòn đã bạo kích; nhận phần chuyển đổi may mắn dư theo tỷ lệ sẽ chốt. |

Chưa đặt mặc định tỷ lệ crit ban đầu, hệ số crit nền, trần damage crit, nhóm cộng hoặc mặc định tỷ lệ crit cũng dùng trần/công thức mới. Cần xác định đòn thường, skill, DoT, pet, hồi phục nào có thể crit; thời điểm xác định, thứ tự tương tác giáp/khiên và quyền ghi công. Những quy tắc này thuộc STAT/COMBAT/SKILL.

Server quyết định kết quả bạo kích và loot. VFX/số nổi chỉ trình bày kết quả, không tự roll lại ở client. Giảm VFX hoặc bỏ animation không thay xác suất hay sát thương.

### 16.5. Yêu cầu hiển thị và lưu dữ liệu

- Tooltip nguồn: “Tăng X% phần còn lại tới trần”, kèm trước/sau khi đổi đồ; tránh mô tả như cộng trực tiếp X điểm phần trăm.
- Cửa sổ nhân vật tách tốc đánh nền/thưởng/hiệu lực, xuyên giáp, tỷ lệ bạo kích và sát thương bạo kích.
- May mắn hiện tổng đầu vào, phần dùng cho loot, phần dư và kết quả chuyển đổi sau khi có công thức chính thức.
- PostgreSQL lưu nguồn bền vững và phiên bản quy tắc; backend tính tổng và phân tách. Không lưu phần may mắn dư như phần thưởng cộng dồn độc lập gây nhân đôi khi đăng nhập lại.
- Ví dụ số trong mục này là diễn giải thiết kế, chưa chạy kiểm thử hoặc áp dụng vào gameplay.

| Ngày | Phiên bản | Thay đổi | Trạng thái |
|---|---|---|---|
| 20/10/2026 | 1.1 | Ghi quy tắc trần/cộng theo phần còn lại, dòng hiếm tối đa 5%, may mắn 15% và crit. | Yêu cầu trực tiếp được ghi nhận; cách diễn giải và thông số còn thiếu được đánh dấu riêng. |

## Cập nhật trạng thái theo ủy quyền · 20/10/2026

Chủ dự án đã ủy quyền tự phân tích và quyết định, không cần chờ duyệt từng mục. Hồ sơ này được ghi nhận **đã hoàn thiện thiết kế V1 trong phạm vi mục**. Những câu “chờ duyệt” trong lịch sử/bản soạn trước được thay thế về trạng thái bởi ghi nhận này; các phương án là quyết định thiết kế có thể điều chỉnh, không phải xác nhận đã code hoặc đã kiểm thử. Thông số thuộc hồ sơ chuyên môn khác tiếp tục theo task tương ứng, không tự đánh dấu chúng hoàn tất.

## Ghi nhận chấp thuận và phạm vi mới · 20/10/2026

Chủ dự án chấp thuận các hướng còn lại sau khi điều chỉnh quy mô thế giới. Phần giới hạn bản đầu chỉ ở vùng 1–10/10 NPC được thay bằng [PROD-06 V2](15_PROD_06_PHAM_VI_VA_NGAN_SACH.md): năm vùng mở, cấp 45, dungeon/boss/rương và cinematic. Quy tắc tiền nạp chung chế độ vẫn giữ. “Tăng ngân sách” ở ngữ cảnh này là nội dung/asset, không tự tăng ngân sách chỉ số chiến đấu. Các thông số chuyên môn chưa được nêu tiếp tục thiết kế theo task, không bị coi là đã xác định chỉ bởi chấp thuận tổng quát.

## Quyết định bổ sung sau chấp thuận chung · 20/10/2026

- Cách hiểu tốc đánh đã đề xuất được giữ: thưởng tốc đánh 100% nghĩa là tần suất gấp đôi tốc đánh nền, không giảm thời gian đòn về 0.
- Giữ tỷ lệ đã đề xuất: mỗi 1 điểm phần trăm may mắn dư trên 15% chuyển thành +1 điểm phần trăm sát thương bạo kích; tính lại theo nguồn, không là thưởng vĩnh viễn nhận lặp.
- Lựa chọn thiết kế để giải quyết phần loot còn thiếu: may mắn tác động **tương đối** lên xác suất có đồ của một lượt loot được phép, không cộng thẳng điểm phần trăm, không mặc định tăng độ hiếm/số lượng hoặc tiền. Ví dụ xác suất có đồ 10%, may mắn hiệu lực 15% thì 11,5%. Chi tiết bảng eligible, cap và party vẫn ở LOOT/STAT. Đây là lựa chọn thiết kế theo ủy quyền, không lời trích quy tắc gốc.
- Hệ số crit nền, pool affix và trần các chỉ số khác chưa tự chốt trong cập nhật phạm vi; STAT thiết kế riêng.
