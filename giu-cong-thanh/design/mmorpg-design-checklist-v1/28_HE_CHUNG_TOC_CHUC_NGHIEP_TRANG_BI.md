> **Điều chỉnh nhân vật có hiệu lực · 22/10/2026:** [Hồ sơ 208](208_DIEU_CHINH_NHAN_DIEN_VU_KHI_VA_HGD_DI_BO.md) thay các mô tả xung đột: HGD dùng kỹ năng khi đi bộ; VAN giáo + khiên; PRI thánh thư + trượng chữ thập; xạ thủ Người Lùn dùng nỏ/bẫy; có trang bị mũ. PAL/DKN vẫn cần ngựa. Ảnh là 2D pixel cho thế giới 2.5D.

> **Bổ sung có hiệu lực · 21/10/2026:** [Bộ20hồ sơ V1](125_BAO_CAO_20_MUC_COMBAT_SKILL.md) và [catalog126](126_DANH_MUC_KY_NANG_V1.md) hoàn thiện kit/rank/talent/hồi sinh/lifecycle. Thay các trường còn để mở hoặc mô tả cũ khi xung đột; giữ cap60/nội dung45, V01khôngquái bay,35SP/11TP và hotbar13. Đây là thiết kế, chưa game/asset chạy được.

> **Cập nhật hồi sinh · 21/10/2026:** [COMBAT-13](104_COMBAT_13_CHET_VA_HOI_SINH.md) chốt cơ chế phí/vật phẩm, điểm hồi sinh từng map, cứu thường một lần trong map tổ đội và kỹ năng hồi sinh Mục Sư. Mục đang thiết kế một phần; tiến độ mới nhất **60 hoàn thiện /11 một phần /442 chưa thiết kế =513**. Chưa code hoặc chốt bảng giá/số kỹ năng.

> **Quyết định hiện hành · 21/10/2026:** [Trần nhân vật 60, nội dung đến 45](91_CAP_60_NOI_DUNG_45_VA_XP_HAU_TRUYEN.md). Giữ năm vùng hiện tại; cấp 45→60 luyện dài hạn. AP ở 45/60 là 132/177; SP giữ 35, TP giữ 11 sau 45. Quy tắc XP hậu truyện thay bảng chênh cấp khi đủ điều kiện. Các số cấp 45 trong ví dụ vẫn là mốc nội dung, không phải trần nhân vật. Chưa triển khai vào game.

# Hệ chủng tộc, chức nghiệp và trang bị — khung mới

**Phiên bản:** 1.0 · **Ngày:** 20/10/2026  
**Trạng thái:** Đã thiết kế khung mới; chưa hoàn thành từng bộ kỹ năng, trang bị, silhouette hoặc animation.  
**Nguồn:** yêu cầu trực tiếp của chủ dự án; trợ lý tổ chức cây và quy tắc liên quan theo ủy quyền.  
**Hiệu lực:** thay kế hoạch chọn ba class khi tạo, alpha hai race và quy tắc mọi race được chọn mọi nhánh. Phong cách V4, năm vùng, trần 45 và cơ chế lưu tài sản giữ nguyên.

## 1. Ba tầng danh tính

| Tầng | Thời điểm | Nội dung |
|---|---|---|
| Chủng tộc | Tạo nhân vật, cấp 1 | Con Người, Elf, Người Lùn. “eft” trong yêu cầu được hiểu là Elf. |
| Chức nghiệp cơ bản | Cấp 15 và nhiệm vụ chuyển chức | Kỵ Sĩ, Chiến Binh, Kiếm Sư, Pháp Sư, Cung Thủ, Tinh Linh, Mục Sư; chỉ mở nghề có nhánh hợp chủng tộc. |
| Nhánh chuyên sâu | Cấp 30 và nhiệm vụ thăng chức | Một nhánh thuộc nghề đã chọn, trong danh sách chủng tộc được phép. |

**Tinh Linh là chức nghiệp sử dụng/triệu hồi linh thể**, không phải chủng tộc Elf. Khi cần, UI ghi “Tinh Linh — chức nghiệp”. Không tạo thêm race hoặc đổi tên nhánh người dùng chỉ để tránh tên trùng.

Một nhân vật có một race, một nghề và một nhánh đang hiệu lực. Các race khác trong lore có thể tồn tại dưới dạng NPC, chưa được chọn lúc tạo ở phiên bản này. Giới hạn nghề không có nghĩa chủng tộc đó thiện/ác hoặc mọi cá nhân có cùng tính cách.

Các quan hệ cha–con và vũ khí không được người dùng nêu chi tiết là **quyết định thiết kế để hoàn thiện cây**, có thể điều chỉnh sau; không ghi thành lời yêu cầu gốc.

## 2. Ma trận nghề, nhánh và vũ khí

Dấu ✓ là có trong danh sách chủng tộc người dùng đưa ra. Vũ khí là bộ trang bị sản xuất đầu của nhánh; họ vũ khí và điều kiện mặc có ý nghĩa gameplay, không chỉ là màu hoặc skin.

| Nghề cấp 15 | Nhánh cấp 30 | Con Người | Elf | Người Lùn | Vũ khí đặc trưng |
|---|---|---|---|---|---|
| Kỵ Sĩ | Thánh Kỵ Sĩ | ✓ | — | — | Trọng kiếm hai tay |
| Kỵ Sĩ | Hắc Kỵ Sĩ | ✓ | — | — | Trọng kiếm hai tay |
| Kỵ Sĩ | Hộ Vệ Thánh | ✓ | — | — | Búa chiến một tay + khiên lớn |
| Chiến Binh | Tiên Phong | ✓ | — | ✓ | Giáo một tay + khiên |
| Chiến Binh | Cuồng Chiến | ✓ | — | ✓ | Rìu hai tay |
| Kiếm Sư | Phong Kiếm Khách | ✓ | — | — | Kiếm một tay + bao kiếm |
| Kiếm Sư | Sát Thủ | ✓ | ✓ | — | Song đoản đao |
| Kiếm Sư | Kiếm Sĩ Trọng Kiếm | — | — | ✓ | Trọng kiếm hai tay |
| Pháp Sư | Lôi Pháp Sư | ✓ | ✓ | — | Trượng phép hai tay |
| Pháp Sư | Hỏa Pháp Sư | ✓ | ✓ | — | Trượng phép hai tay |
| Pháp Sư | Thủy Pháp Sư | ✓ | ✓ | — | Trượng phép hai tay |
| Pháp Sư | Pháp Sư Tử Linh | ✓ | — | — | Ma đạo thư hai tay |
| Pháp Sư | Pháp Sư Ánh Sáng | — | ✓ | — | Trượng phép hai tay |
| Pháp Sư | Pháp Sư Bóng Tối | — | ✓ | — | Trượng phép hai tay |
| Pháp Sư | Thổ Pháp Sư | — | — | ✓ | Trượng phép hai tay |
| Cung Thủ | Cung Thủ | ✓ | ✓ | ✓ | Người/Elf: cung; Lùn: nỏ và bẫy |
| Tinh Linh | Tinh Linh | ✓ | ✓ | — | Trượng khế ước hai tay |
| Mục Sư | Mục Sư | ✓ | — | — | Thánh trượng chữ thập một tay + thánh thư tay còn lại |
| Mục Sư | Pháp Sư Mộc | — | ✓ | — | Trượng mộc hai tay, dấu hiệu healer thiên nhiên |

Tổng **19 danh tính nhánh**, tạo **28 tổ hợp race–nhánh hợp lệ**: 14 Con Người, 9 Elf, 5 Người Lùn. Một nhánh chung như Cung Thủ không tự thành ba chức nghiệp khác nhau; vẫn phải có rig/layer/động tác phù hợp từng chủng tộc.

Các lựa chọn tổ chức đáng chú ý:

- Sát Thủ thuộc Kiếm Sư vì cùng nền thao tác vũ khí sắc, phát triển hướng đột kích; không mở một nghề cơ bản thứ tám ngoài yêu cầu.
- Tiên Phong và Cuồng Chiến thuộc Chiến Binh; Kiếm Sĩ Trọng Kiếm thuộc Kiếm Sư, không trộn với Cuồng Chiến cầm rìu.
- Tử Linh là nhánh Pháp Sư nhưng chuyển bộ vũ khí sang sách; Bóng Tối của Elf không tự là Tử Linh hoặc được dùng sách Tử Linh.
- Mộc healer thuộc Mục Sư của Elf. Ánh Sáng thuộc Pháp Sư, không tự nhận bộ healer của Mục Sư chỉ vì cùng hình ánh sáng.
- Cung Thủ/Tinh Linh/Mục Sư có thể giữ tên ở bậc chuyên sâu; UI có huy hiệu “Chuyên sâu · cấp 30” và ID riêng. Không ép đổi tên ngoài ý tưởng người dùng.

## 3. Giai đoạn cấp 1–14: Tân Binh

Chọn race, ngoại hình và xuất thân rồi bắt đầu ở trạng thái **Tân Binh — chưa chuyển chức**. Không chọn sẵn class nhưng giấu tên đến cấp 15.

Có ba nhóm bộ tập: kiếm tập một tay, cung tập (nỏ tập cho Người Lùn), trượng tập. Đổi bộ miễn phí tại nơi hướng dẫn ngoài combat; không cộng vĩnh viễn lợi ích cả ba bộ hoặc học skill chuyên sâu sớm. Bộ tập dùng item khóa nhân vật, không là nguồn farm bằng nhận lại rồi bán.

M02 dùng thao tác đánh và né/phản ứng phổ thông đang có, không bắt nhân vật chưa chuyển chức dùng phép Hỏa, chặn khiên hoặc skill nghề. Nội dung solo đến mốc chuyển chức phải hoạt động với bộ tập hợp lệ.

Cho xem trước cây nghề phù hợp race, vũ khí và các nhánh tương lai. Việc chọn bộ tập đầu không khóa nghề ở cấp 15. Chỉ số, resource và số skill tập được thiết kế tại SKILL/STAT, không sao chép số của thủ thành.

Đồ cấp 1–14 có tag Tân Binh và quyền vũ khí đào tạo rõ; không cho mặc đồ nhánh 30 để nhận hiệu ứng ngoài cấp.

## 4. Chọn nghề cấp 15

Đạt cấp 15 mở nhiệm vụ chuyển chức, không tự đổi nghề giữa combat. Tại NPC hướng dẫn, chỉ hiện nghề có đường đi tiếp:

| Race | Nghề được chọn |
|---|---|
| Con Người | Cả bảy nghề |
| Elf | Kiếm Sư, Pháp Sư, Cung Thủ, Tinh Linh, Mục Sư |
| Người Lùn | Chiến Binh, Kiếm Sư, Pháp Sư, Cung Thủ |

Trước xác nhận phải thấy các nhánh cấp 30, vai trò và vũ khí. Không cho chọn một nghề rồi đến cấp 30 mới báo không có nhánh hợp lệ.

Chuyển chức đầu qua nhiệm vụ, **không thu tiền nạp hoặc tiền tự do**. Nhận quyền nghề và vũ khí nền khóa nhân vật cần để chơi tiếp, ghi quyền nhận một lần. Không phát miễn phí cả bộ đồ hiếm hoặc cộng sức mạnh ngoài ngân sách.

| Nghề | Family vũ khí cơ bản trước cấp 30 |
|---|---|
| Kỵ Sĩ | Kiếm một tay + khiên |
| Chiến Binh | Rìu hai tay hoặc giáo hai tay theo danh mục nghề |
| Kiếm Sư | Kiếm một tay |
| Pháp Sư | Trượng phép |
| Cung Thủ | Người/Elf: cung; Lùn: nỏ hai tay và bẫy |
| Tinh Linh | Trượng khế ước |
| Mục Sư | Thánh trượng của Con Người hoặc trượng mộc của Elf |

Có quyền nghề không đồng nghĩa dùng mọi family; danh sách family cho từng giai đoạn phải có dữ liệu rõ. Sau chuyên sâu, quyền vũ khí combat theo nhánh; vũ khí tập chỉ dùng trong khu tập nếu cho phép, không mang bộ skill khác vào giao tranh.

Người qua cấp 15 nhưng chưa chọn vẫn giữ XP/nhân vật theo cap 45; gợi ý quay về và cảnh báo chuẩn bị cho nội dung khó, không tự chọn hộ hoặc reset tiến độ. Bảng XP phải tính đến luồng chuyển chức, không tạo softlock.

## 5. Thăng nhánh cấp 30

Giữ nghề cha, hoàn thành nhiệm vụ và chọn một nhánh hợp race. Có preview vũ khí, động tác, vai trò và đường phát triển trước xác nhận tại nơi an toàn.

Nhánh đổi family nhận vũ khí nền khóa nhân vật phù hợp. Ví dụ Kỵ Sĩ sang Hộ Vệ Thánh nhận chùy để chơi được; không bắt mua trên chợ hoặc nạp. Cấp quyền nhánh, skill mở và quyền nhận vũ khí phải nhất quán, yêu cầu gửi lại không cấp hai lần.

Đổi nghề/nhánh/race tự do chưa mở bản đầu. Reset điểm hoặc talent là chức năng riêng, không ngầm thành đổi nghề. Không bán quyền sửa lựa chọn trước khi thiết kế xong hậu quả và dữ liệu. UI phải giải thích rõ quyết định dài hạn; lỗi hệ thống được hỗ trợ theo quy trình, không coi là món dịch vụ.

## 6. Phòng cụ và quyền mặc

| Nghề | Nhóm phòng cụ mặc định | Quy tắc |
|---|---|---|
| Kỵ Sĩ | Trọng giáp | Quyền trọng kiếm/chùy/khiên theo nhánh |
| Chiến Binh | Trọng giáp, giáp chiến theo tag | Rìu/giáo theo giai đoạn và nhánh |
| Kiếm Sư | Giáp nhẹ, giáp chiến theo tag | Kiếm/đoản đao/trọng kiếm theo nhánh |
| Pháp Sư | Pháp bào | Trượng; ma đạo thư cho Tử Linh |
| Cung Thủ | Giáp nhẹ | Người/Elf: cung; Lùn: nỏ hai tay; bẫy là dụng cụ kỹ năng |
| Tinh Linh | Pháp bào, đồ nghi lễ có tag | Trượng khế ước; linh thể là entity/skill riêng |
| Mục Sư | Pháp bào, đồ nghi lễ có tag | PRI: trượng chữ thập một tay + thánh thư; WOD: trượng mộc |

Giáp chiến là tag phân loại, chưa tạo công thức giáp mới. Một món có thể cho nhiều nghề mặc; trang sức có thể dùng chung nếu danh sách cho phép. Không ép mỗi item phải riêng một class và cũng không mặc định mọi món trọng giáp dùng cho toàn bộ cận chiến.

Kiểm đồng thời: **cấp + race nếu món giới hạn + nghề + nhánh nếu yêu cầu + family vũ khí + slot/trạng thái**. Không dùng điều kiện OR lỏng khiến có nghề là vượt được khóa nhánh.

Hai tay chiếm quyền cả hai tay, không dùng khiên đồng thời. Song đoản đao là một bộ quyền dual-wield cần hai layer/pose; GEAR quyết định dùng một item bộ hay hai instance tương thích. Không tự cho mỗi tay cầm tùy ý vì UI có hai slot.

Backend kiểm cho equip, preset, đổi bộ và kết quả chuyển chức; gọi API trực tiếp cũng không vượt quyền. Sở hữu món không mặc được vẫn được nếu loot/binding cho phép; không âm thầm hủy đồ vì khác nghề.

## 7. Cùng món, khác hình theo nhánh

Tách **quyền mặc**, **dữ liệu/chỉ số món** và **visual profile**.

Ví dụ một áo trọng giáp chung cho các nhánh Kỵ Sĩ hợp lệ, cùng instance/roll/nâng cấp:

- Thánh Kỵ Sĩ: vải sáng, thép/viền thánh và motif mặt trời gọn.
- Hắc Kỵ Sĩ: thép tối, vải tím trầm, motif phong ấn; không glow đen che thân.
- Hộ Vệ Thánh: hình vai/tay bảo vệ, dấu bảo hộ; chùy và khiên vẫn từ vũ khí riêng.

Đổi profile **không tăng/giảm chỉ số, tạo item thứ hai hoặc cấp skill**. Món áo không biến kiếm thành chùy. Nếu món có proc theo nhánh, proc phải là dữ liệu gameplay được thiết kế/cân ngân sách riêng, không sinh từ ảnh.

Profile chọn theo race/nghề/nhánh/slot trong dữ liệu cho phép. Đồ thường có thể dùng profile chung phù hợp rig; chỉ món/nhánh được đánh dấu mới có override. Không vẽ mọi tổ hợp thành ảnh độc lập nếu có thể dùng layer mới nội bộ. Thiếu profile hợp lệ là đầu ra còn thiếu phải làm trước khi mở tổ hợp, không âm thầm dùng hình sai.

Skin không biến family thật thành family khác gây khó đọc hành động. Cùng một item có thể hiển thị khác trên ba race vì rig; binding/quyền sở hữu vẫn theo món, không theo file ảnh.

## 8. Ngân sách hình ảnh và phạm vi

Giữ phong cách V4 mới hoàn toàn, ba kiểu hình thể từ ART-02: Con Người trung tính, Elf gọn/tai vừa đủ, Người Lùn thấp/chắc. Không cố định giới, tóc hoặc gương mặt theo một concept.

Pipeline: **ba body race tân thủ → bảy silhouette nghề → 19 họ nhánh → 28 tổ hợp hợp lệ** có layer/hướng/động tác phù hợp. 19 nhánh không phải 19 ảnh đứng là xong; 28 tổ hợp không mặc định phải vẽ lại mọi frame từ đầu nếu rig/layer mới dùng chung được.

Các họ vũ khí cần sản xuất: kiếm một tay, trọng kiếm, chùy/khiên, giáo, rìu, cung, song đoản đao, trượng phép, trượng khế ước, thánh trượng, trượng mộc và ma đạo thư. Mỗi family cần điểm cầm, hướng và animation riêng.

Concept ART-03 trước về Chiến Binh trọng kiếm chỉ còn là tham khảo họ nhánh Kiếm Sĩ Trọng Kiếm, không là vũ khí mặc định mọi Chiến Binh. Pháp Sư không còn chỉ mẫu Hỏa. Nhánh healer chính là Mục Sư thần thánh và Pháp Sư Mộc; cơ chế thực tế ở SKILL/STAT.

**158 định nghĩa item ở PROD-06 là ngân sách cũ, chưa đủ cơ sở giữ làm giới hạn cho cây mới.** GEAR phải lập ma trận slot × cấp × family × quyền nghề/nhánh × dùng chung/riêng rồi tính số ID. Chưa bịa số item mới khi chưa có slot/affix. Năm vùng/cap 45/82 NPC giữ; ba race và toàn cây nhánh là phạm vi đích. Lát cắt nội bộ có thể làm ít trước nhưng không gọi là đã đủ cây.

## 9. Dữ liệu bền vững

PostgreSQL lưu riêng race ID, nghề cơ bản ID, nhánh ID, cấp, quest chuyển chức, quyền thưởng, skill và equipment instance. Không dùng một class ID ghi đè từ race đến nghề/nhánh hoặc lấy tên hiển thị làm định danh.

Backend có ma trận hợp lệ có phiên bản. Chuyển chức kiểm cấp/race/nghề cha/quest/trạng thái; cập nhật quyền nghề/nhánh/skill/quà nhất quán. Yêu cầu lặp không nhân đồ hoặc giữ vũ khí/skill mới sau khi rollback nghề.

Item có definition/instance, tag quyền dùng, family, binding, roll/nâng cấp. Visual profile có version và quyền tương thích; không làm nguồn xác nhận chỉ số. Web/PC cùng trạng thái nhân vật và đồ.

Đây là mô hình nghiệp vụ, chưa tạo bảng/migration hoặc runtime ID. Dữ liệu hero thủ thành không tự được chuyển thành nhân vật MMO mới.

## 10. Giao diện

- Tạo nhân vật: chọn ba race, ngoại hình, xuất thân; có xem trước cây nghề, không chọn nghề sớm.
- Trang nhân vật: ba dòng **Chủng tộc / Nghề cơ bản / Nhánh chuyên sâu**, mốc 15/30 và trạng thái chưa chọn.
- Chuyển chức: lọc theo race/nghề cha, preview vũ khí/role, nhánh khóa có lý do, xác nhận rõ lựa chọn dài hạn.
- Tooltip đồ: cấp, nghề/nhánh/race/family, một/hai tay, điều kiện đạt/chưa đạt; xem hình hiệu lực trên nhân vật hiện tại.
- Kho/chợ: món không mặc được vẫn xem/sở hữu hợp lệ, chỉ khóa thao tác Mặc khi thiếu điều kiện.
- So sánh: chỉ số thật tách khỏi ngoại hình; không hiện tăng giáp chỉ vì đổi viền áo.

## 11. Tình huống phải kiểm chứng sau

| Tình huống | Kết quả thiết kế |
|---|---|
| Cấp 14 thử đồ Thánh Kỵ Sĩ | Bị chặn theo cấp/nghề/nhánh, không chỉ theo hình đồ |
| Elf chọn Tử Linh hoặc Người Lùn chọn Kỵ Sĩ | Không hợp ma trận; server từ chối |
| Elf Mục Sư ở cấp 30 | Chọn Pháp Sư Mộc; không tự mở Ánh Sáng |
| Elf Pháp Sư chọn Ánh Sáng | Không tự nhận role/skill Mục Sư vì tên ánh sáng |
| Kỵ Sĩ sang Hộ Vệ Thánh | Có quyền dùng chùy/khiên và vũ khí nền để tiếp tục |
| Gửi lại yêu cầu chuyển chức | Một kết quả và một quyền nhận quà |
| Hai nhánh mặc cùng áo hợp lệ | Cùng dữ liệu món, profile khác, không đổi roll/nâng cấp |
| Đổi nghề/nhánh hoặc web/PC | Không reset cap/quà/rương; không copy instance |

Đây là thiết kế và tiêu chí tương lai; chưa test, chưa vẽ đủ 28 tổ hợp hoặc sản xuất kỹ năng đầy đủ.

## 12. Checklist và việc tiếp theo

Khung mới là đầu vào cho CHAR-01/08, SKILL-01/02/05/07/08, LEVEL-05/08, GEAR-01/04/06/14, ART-03/04 và DATA. Không tự tick toàn bộ các task đó từ cây tổng quan này.

**ART-03 chuyển thành thiết kế một phần**: ba silhouette cũ không còn đủ phạm vi bảy nghề/19 nhánh. Cần bổ sung bảng nhận diện theo cây mới trước ART-04. ART-01/02 vẫn giữ chuẩn hình và tỷ lệ phù hợp, chỉ mở rộng biến thể cần sản xuất.

Giữ số task 513, không tạo checkbox trùng cho tài liệu điều chỉnh. Tiến độ hiện hành sau thiết kế bảng kỹ năng: 13 hoàn thiện, 4 một phần, 496 chưa thiết kế. Phong cách V4 đã chốt; chưa thay asset hoặc gameplay hiện có.

## Khung kỹ năng cập nhật · 21/10/2026

[Hệ tân thủ/tiến hóa/vô môn](29_HE_KY_NANG_TAN_THU_TIEN_HOA_VO_MON.md) làm rõ trước15: 3 chủ động nền +1 bị động nền, 1 chủ động race +3 bị động race; mở dần, không có nghề ngầm. Các bộ tập kiếm/cung/trượng là cách biểu hiện của cùng skill nền, không thêm ba cooldown. Cấp15/30 tiến hóa theo lineage và giữ đầu tư hợp lệ. Hướng dẫn M02 dùng phản ứng phổ thông nếu chưa mở Bước Lách ở3, không yêu cầu skill chưa học.


## Đồng bộ liên hệ thống · 21/10/2026

[Hồ sơ 32](32_DONG_BO_CLASS_KY_NANG_TRANG_BI.md) bổ sung quy tắc có hiệu lực: SP dùng được cho dòng tân thủ; tiến hóa mặc định kế thừa 1:1; số ô nghề/nhánh cần hoàn thành chuyển chức; quyền vũ khí nhánh không cộng dồn quyền nghề cha; biến thể TP và bị động cần ô được phân biệt rõ. Khi có mô tả khái quát chưa đủ điều kiện trong hồ sơ này, áp dụng phần chi tiết hồ sơ 32.


## Cập nhật Kỵ Sĩ chiến đấu trên ngựa · 21/10/2026

[Hồ sơ 34](34_KY_SI_CHIEN_DAU_TREN_NGUA.md) có hiệu lực thay mô tả cưỡi cũ: nghề Kỵ Sĩ và hai nhánh Thánh/Hắc dùng kỹ năng nghề/nhánh khi cưỡi ngựa chiến; Hộ Vệ Thánh được dùng kỹ năng khi đi bộ, chỉ dùng họ ngựa. Thánh/Hắc có giáp ngựa suy ra từ đồ đang mặc và bị động tiến hóa cánh theo từng con ngựa; không còn lấy lên ngựa làm chiêu cuối tạm thời. Nghề khác cưỡi để di chuyển, không chiến đấu trên thú. Quy tắc vùng, quyền kỹ năng và lớp hình xem hồ sơ 34; chưa triển khai.


## Bổ sung nội tại chủ đạo theo nhánh · 21/10/2026

[Hồ sơ78](78_NOI_TAI_CHU_DAO_CUA_19_NHANH.md) thêm profile chuyển hóa một/hai thuộc tính cho19nhánh. Lợi ích gốc vẫn giữ; AP + flat root từ gear hợp lệ tạo R giảm dần, bonus đi vào nhóm damage/heal/shield/pet đã quy định, không tự nhân stat vòng lặp. Mở cùng nội tại nhánh ở30, không chiếm13ô hoặc ba ô passive tùy chọn. Hệ số là cấu hình thử, không hoàn thiện bộ kit/cân bằng.
