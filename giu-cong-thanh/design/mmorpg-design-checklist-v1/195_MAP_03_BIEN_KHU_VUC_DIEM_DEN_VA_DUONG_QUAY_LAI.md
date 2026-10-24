# MAP-03 — Biên khu vực, điểm đến và đường quay lại

Ngày 22/10/2026. Hoàn thiện hồ sơ thiết kế trước vẽ; chưa đặt tọa độ, dựng collision, viết server hoặc migration. Phạm vi MMORPG pixel2.5D trên web/PC, không sửa thủ thành. Hồ sơ này cụ thể hóa MAP-08/COMBAT-14, không thay công thức combat, quyền ngựa hoặc luật hồi sinh.

## 1. Phân biệt ba loại biên

| Biên | Ví dụ | Cách xử lý |
|---|---|---|
| Biên địa hình | Vách, nước sâu, tường, tầng cầu | Chặn/định tuyến bằng địa hình hợp lệ; không phải cứ chạm là chuyển map |
| Biên luật | Hub an toàn sang hoang dã; tiền trạm sang W06 | Có thể vẫn cùng scene nhưng kiểm quyền/luật vùng theo188; cảnh báo trước khi qua |
| Biên miền hoạt động | Sang sector/instance/dungeon/arena | Có transferId, điểm đến và điểm trả về; không đổi actor hoặc quota bằng client |

Không đặt cả ba loại chồng lên một cửa hẹp nếu khiến người chơi không hiểu vì sao bị chặn. Một cầu qua suối chỉ cần chuyển surface đúng; không tự đòi màn tải hoặc xác nhận PK. Biên nhiều tầng phải theo surface/cao độ, không dùng một vòng trònX/Y phủ cả tầng dưới.

## 2. Mỗi cửa chuyển phải có hợp đồng hai đầu

Một tuyến cần edgeId, node đi/đến, sector/scope, hướng tiếp cận, điều kiện, điểm arrival, điểm return, fallback và lý do khóa. Chỉ có một hình cổng đẹp chưa đủ để đưa vào bản đồ người chơi.

**Arrival** là chỗ xuất hiện sau chuyến đi. **Return** là nơi quay lại sau khi rời hoạt động. **Checkpoint/deathscope** quyết định hồi sinh sau chết. Ba khái niệm khác nhau; không tự đặt điểm hồi sinh mới mỗi lần bước qua cửa hoặc dùng điểm return để hồi máu.

Điểm đến phải thuộc mặt đất/sàn đi được, có đường thoát, không nước sâu, hazard, hitbox công trình hoặc vùng boss đang gây hại. Kiểm cả footprint nhân vật và trạng thái ngựa hợp lệ; một điểm đủ cho người không chắc đủ cho ngựa. Không dùng vài giây miễn thương để hợp thức hóa điểm đặt sai.

Điểm return phải đủ quyền để tiếp nhận người khi sự kiện kết thúc hoặc khi người chơi mất quyền vào nhà bang. Lưu ID và phạm vi, không lưu tọa độ tùy ý do client gửi. Tọa độ thực tế xác định ở bản vẽ/greybox sau, không tự điền số cho đủ bảng.

## 3. Luồng vào vùng

1. Cho thấy biển, đường dẫn hoặc cửa có chức năng rõ trước điểm kích hoạt; vùng PK cần nhãn luật.
2. Người chơi chọn đi/chấp nhận tuyến; di chuyển thường trên đường liền mạch không yêu cầu mở menu mỗi lần.
3. Server kiểm quyền hiện tại: combat, cấp/phe/roster, quest, kiện và điều kiện hành trình.
4. Chuẩn bị đích có capacity và arrival hợp lệ; giữ phí/vé theo173 nếu tuyến có giá đã được duyệt.
5. Cam kết transfer và điểm return, bảo đảm chỉ một miền có actor hoạt động theo193/111.
6. Xác nhận tới nơi rồi trả kết quả; nếu lỗi phải đối soát trạng thái thật, không tự thu lần hai hoặc spawn mới.

Trong loading, input cũ không tiếp tục giữ phím chạy/đánh vào cảnh mới. Không auto-cast vì nút vừa giữ ở cảnh trước. Cảnh nguồn không tạm dừng trước cam kết; cảnh đích không cho actor dễ bị đánh trong khi người chơi vẫn chưa vào được chỉ vì đặt sai arrival. Ưu tiên thiết kế chỗ tiếp nhận an toàn; chi tiết readiness/timeout cần NET nghiệm thu, chưa tự đặt bất tử tải map.

Không có arrival hợp lệ thì trì hoãn hoặc từ chối vào và báo lý do, không ép đặt lên mặt nước/boss hoặc trạm phe địch. Xếp hàng/quy mô chờ thuộc ACC/NET/FACTION; không tạo con số tải đồng thời chưa đo.

## 4. Chốt cửa vào và đường quay lại theo nội dung

| Tuyến/hoạt động | Điểm vào | Đường quay lại và giới hạn |
|---|---|---|
| V01 sang V02 | Đầu đường xe/đoàn hợp lệ đã tiếp cận | Cùng đầu mối hành trình, không quay qua lõi thành bị khóa |
| Hai sector V03 | Theo nhánh Rễ Cổ hoặc hành hương qua đầu mốiValedorn | Ghi từng edge; không portal ngầm rừng↔tu viện vì chung mãV03 |
| V04 vùng trũng lên cao địa | Dốc/đường cao hoặc chuyến công vụ được khai báo | Có lối xuống và điểm trú; không chuyển nhầm tầng/nocthollow thành núi tuyết |
| V05 qua hải trình | Bến/điểm tiếp nhận miềnNam | Đường về được phục vụ, không bắt bơi hoặc sở hữu tàu bang |
| FM01 | Sân tiếp nhận đúng phe | Về đầu mối trung lập đã ghi; không lối xâm nhập trụ sở địch |
| GM01 | Tiền sảnh được cấp quyền | Về điểm dịch vụ bang/đầu mối trung lập hợp lệ; mất tư cách không xóa tài sản |
| W06 | Tiền trạm đúng phe | Qua điểm xuất quân/rút về trạm và dịch vụ điều vận; không rời bằng portal khi combat/mang kiện |
| GA01/GA02 | Sảnh, sau đó vị trí đội trận | Trận kết thúc về sảnh/điểm đã ghi; không trả giữa chiến trường đang PK |
| Dungeon/cảnh riêng | Sân chuẩn bị và entry của run | Điểm ra ngoài đã ghi hoặc checkpoint đúng run; boss khóa cửa không cho hồi sinh nhảy vào giữa trận |

Chuyến đi bắt buộc của truyện có đường về ngay cả khi chưa đủ phí dịch vụ tùy chọn; cơ chế cứu trợ/tuyến được bảo đảm theo190, không bắt tiền nạp. Không dùng việc cho đường về để mở warp đến nơi chưa từng tới. Quyền thông tin và quyền đi vẫn khác nhau theo194.

## 5. Điểm đến mất hợp lệ: thứ tự xử lý

**Trước commit:** nếu scope đóng, đích đầy, quyền mất hoặc vị trí bị chặn thì chưa chuyển. Giữ người ở nguồn hợp lệ; release/đối soát khoản giữ theo trạng thái tài chính thật. Không tiêu vé chỉ vì đã hiện loading.

**Sau commit:** miền đích đã sở hữu actor thì xử lý tại đích/fallback được ghi, không cho client tự tuyên bố “chưa tới” để xuất hiện lại ở nguồn. Reconnect đối soát transferId; kết quả đã hoàn tất không được phát lại thưởng hoặc thu phí mới.

Thứ tự fallback cho vị trí không thể dùng: điểm thay thế đã khai báo trong cùng arrival/deathscope và đủ quyền → khu tiếp nhận an toàn của cùng sector/hoạt động → điểm return ngoài hoạt động đã ghi, nếu hoạt động buộc phải đóng. Mỗi bước kiểm lại quyền, surface và trạng thái chết. Không tìm “điểm an toàn gần nhất toàn lục địa” theo khoảng cách thẳng.

Nếu không có điểm nào hợp lệ, từ chối mở hoạt động mới hoặc giữ trạng thái trong luồng phục hồi có log để vận hành xử lý. Chưa được thiết kế một hệ phục hồi lỗi hạ tầng hoàn chỉnh chỉ từ câu này. Nội dung không đạt fallback phải bị chặn ở kiểm map trước phát hành.

Đổi revision khiến nền cũ mất đi phải có bảng ánh xạ checkpoint/node cũ sang mới. Bảo trì không tự xóa lượt dungeon, đồ, phí hoặc chọn một kết thúc truyện cho người đang ở cảnh riêng.

## 6. Người chết, mất mạng và quyền bị thu hồi

Người chết reconnect vẫn theo deathId/104 và kết quả đã commit, không trở thành người sống đầy máu vì được đưa ra ngoài. Người còn sống về fallback giữ HP/mana/cooldown theo111; không free heal, không reset pet hoặc stack được giữ hợp lệ.

Rời hoặc bị loại khỏi bang khi đang trong GM01: ngừng quyền thao tác mới; giao dịch đã commit giữ receipt; xử lý giao dịch chưa cam kết theo kho/quỹ, rồi trả nhân vật đến điểm hợp lệ. Không cho người không còn quyền tiếp tục rút đồ trong lúc chờ, cũng không giữ nhân vật mắc kẹt vì một cửa sổ chưa đóng. Quy tắc chi tiết tài sản còn thuộc GUILD.

Đổi phe giữa trận không được chấp nhận; membership thay theo kỳ/quyền186. Một snapshot cũ không cấp phép trở lại tiền trạm đối phương. Arena match đóng thì projectile/effect quyền cũ dọn theo scope, không theo người tới sảnh.

Kiện W06 không được đi cùng portal sang GM01/GA/PvE. Nếu hoạt động phải đóng do sự cố, xử lý kiện theo ledger riêng của FACTION-05, không biến thành item thường hoặc đặt tiền bồi thường tùy ý. Đồ cá nhân được bảo toàn theo quyền hiện hành.

## 7. Kỵ Sĩ, ngựa và chỗ đứng

Tách quyền ngựa chiến khỏi thú di chuyển. Combat bắt buộc phải có đường đủ cho ngựa chiến, gồm cả cổng, góc cua và điểm gọi lại sau hồi sinh. Nếu phần hòa bình yêu cầu xuống thú thì có chỗ chuẩn bị trước cửa và cách gọi lại ở phần combat.

Nếu trạng thái mount không hợp đích, báo trước khi cam kết; chỉ chuyển trạng thái đã được người chơi chấp nhận và đúng34. Không chuyển xong mới khóa toàn bộ nghề rồi yêu cầu người chơi tìm đường ngược. Kích thước sprite/ngựa có cánh không đổi quyền vượt vách/nước sâu.

Điểm spawn không nằm ngay trên trigger ngược chiều để vừa xuất hiện đã chuyển về. Arrival và trigger có vùng tách hợp lý theo footprint, hướng nhìn và camera; khoảng cách phải thử bằng rig thật, chưa đặt số pixel tùy ý.

## 8. Tự cứu kẹt không trở thành dịch chuyển miễn phí

Thiết kế chức năng báo kẹt/hỗ trợ, không cho client tự nhập tọa độ. Ưu tiên kiểm stuck thật trên surface và đưa tới một anchor gần trong cùng scope khi đủ điều kiện, ghi log. Thao tác không reset HP/cooldown, không qua cửa boss, không thoát W06 hoặc mang kiện sang scope khác.

Không dùng tự cứu kẹt để thoát combat đang diễn ra; trường hợp kẹt thật trong combat cần quy trình vận hành có bằng chứng, chưa thêm nút miễn sát thương. Người chết vẫn dùng hồi sinh đúng luật. Tần suất, thời gian chuẩn bị và điều kiện xác minh phải cấu hình ở SAFE/NET trước phát hành, không báo hệ thống đã có.

Địa hình tạo kẹt lặp lại phải sửa map, không coi nút cứu kẹt là giải pháp thiết kế chính. Thu thập sector/node/surface/revision và hành động cuối để tìm lỗi, không cần gửi dữ liệu riêng tư không liên quan.

## 9. Trải nghiệm trước cửa

Biển/đèn/công trình gợi đúng loại chuyển: bến cho hành trình nước, cổng trạm cho bảo hộ, lối hầm cho dungeon, trọng tài cho arena. Không mọi thứ là vòng sáng teleport. Tiểu cảnh khớp cốt truyện và phong cách pixel2.5D.

Giao diện nêu điểm đến, loại hoạt động, luật PK, điều kiện còn thiếu, phí/vé nếu có và nơi trở về. Không hiển thị tên nhiệm vụ bí mật để giải thích “chưa đủ quyền”. Đi qua đường thường không spam modal; portal có lựa chọn/chi phí/nguy cơ cần xác nhận đúng chỗ, không tự bấm mua vì con trỏ vừa đánh.

Các điểm dịch vụ/đăng ký không đặt ở mép biên combat nơi người chơi phải mở thoại để rút. Tiền trạm có nhiều hướng ra và khoảng chuẩn bị; chống camp vẫn cần thử layout theo193, không coi hai cửa là đã an toàn.

## 10. Kiểm bắt buộc trước triển khai

| Nhóm kiểm | Kết quả cần đạt |
|---|---|
| Surface | Ba race, người đi bộ/ngựa chiến qua đúng tầng, không spawn nước sâu/vách/trigger vòng lặp |
| Quyền | Sai phe/roster/khách không vào; có quyền quay về không mở hộ tiến trình |
| Rớt mạng | Ngắt tại quote/prepare/commit/arrival cho một kết quả actor, phí và transfer |
| Vòng đời | Chết/relog/đóng run không hồi miễn phí, reset quota hoặc giữ đạn scope cũ |
| Tài sản | Kiện không rời W06 trái phép; mất quyền bang không mất đồ cá nhân hoặc cho rút trái phép |
| Hạ tầng | Điểm đến đầy/đóng/revision đổi có fallback hoặc từ chối hợp lệ, không chọn tọa độ client |
| Truyện | Tuyến bắt buộc solo có đường đi/về, không ép PK hoặc guild có tàu |
| Đọc cảnh | Nhìn hiểu ranh, loại tuyến và lý do khóa; không cần debug để biết mình sẽ đi đâu |

Chưa có số đo quãng đường, frame time, tải server, kiểm collision hoặc kết quả test thật. MAP-03 hoàn thiện **hồ sơ quy tắc**, chưa đóng MAP-01 hoặc FACTION/PVP/NET. Tổng **525 mục:125 hoàn thiện /11 một phần /389 chưa thiết kế**. Vẫn dừng trước vẽ; các đầu vào bằng chữ còn MAP-05 mật độ điểm khám phá và MAP-11 vật tương tác.

Nguồn: [luật vùng188](188_MAP_06_PHAN_LOP_KHU_VUC_VA_QUYEN_GIAO_TRANH.md), [checkpoint189](189_MAP_07_HOI_SINH_NOI_NGHI_VA_DICH_VU.md), [hành trình190](190_MAP_08_MANG_DI_CHUYEN_VA_CHUYEN_VUNG.md), [rà soát193](193_RA_SOAT_SAU_MAP_07_09_R002.md), [lớp bản đồ194](194_MAP_02_CAU_TRUC_LOP_BAN_DO_VA_QUYEN_THONG_TIN.md), [chuyển vùng111](111_COMBAT_14_DISCONNECT_CHUYEN_VUNG_VA_DOI_DO.md), [ngựa34](34_KY_SI_CHIEN_DAU_TREN_NGUA.md).
