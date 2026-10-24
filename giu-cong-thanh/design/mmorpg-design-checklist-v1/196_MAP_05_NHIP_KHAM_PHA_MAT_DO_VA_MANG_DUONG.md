# MAP-05 — Nhịp khám phá, mật độ điểm quan tâm và mạng đường

Ngày 22/10/2026. Hoàn thiện hồ sơ thiết kế trước vẽ; chưa đo thời gian chạy, đặt tọa độ hoặc dựng map. MMORPG pixel2.5D trên web/PC, không sửa thủ thành. Kế thừa ngân sách sáu vùng ngoài trời và các không gian chức năng trong187; không tăng số quái/NPC/rương để lấp diện tích.

## 1. Map rộng phải tạo quyết định, không chỉ thêm quãng đường

Một đoạn đường có giá trị khi người chơi quan sát, chọn tuyến, gặp người, đọc dấu vết, chuẩn bị hoặc ứng phó với nguy hiểm. Không phải mọi đoạn đều có thưởng, nhưng mỗi đoạn phải có lý do tồn tại trong hành trình. Cây cỏ/đá/đời sống tạo cảnh quan; không biến mỗi vật thể trang trí thành icon tương tác.

Đường dài chỉ để chạy giữa haiNPC là rủi ro thiết kế. Ngược lại, quái/rương/quest đặt sát nhau làm thế giới giống phòng thử và khiến camera2.5D quá tải. Dùng nhịp **định hướng → hoạt động → khoảng thở → phát hiện mới**, linh hoạt theo vùng; không lặp một công thức ở mọi góc map.

## 2. Phân loại điểm quan tâm

| Loại | Vai trò | Quy tắc đếm và hiển thị |
|---|---|---|
| Mốc định hướng | Cầu, cây cổ thụ, tháp, dòng sông, cổng | Không tự là quest/loot; đọc được từ cảnh hoặc đường nhìn |
| Điểm sinh hoạt | Ruộng, bến, lán, giếng, trạm công vụ | Có nghề nghiệp/nguồn sống; NPC có chức năng hoặc truyện khi hợp lý |
| Điểm tương tác | Bia, cần gạt, cửa, bàn kiểm mẫu | Trạng thái/điều kiện theoMAP-11, không tăng reward mặc định |
| Điểm chiến đấu | Cụm quái, phục kích, tinh anh, boss | Có vùng đệm/lối đọc nguy hiểm, không đặt nối nhau không thoát |
| Điểm truyện | Nhân chứng, vật chứng, dấu hậu quả | Manh mối bắt buộc có đường solo và không phụ thuộc rương ngẫu nhiên |
| Điểm khám phá tùy chọn | Rương, cảnh nhỏ, ghi chép, hốc di tích | Tín hiệu quan sát đủ rõ; không giữ tiến trình chính duy nhất |
| Điểm nghỉ/dịch vụ | Hub, checkpoint, trạm, NPC chuyên biệt | Quyền an toàn/hồi sinh tách riêng theo188/189 |

Một địa điểm có thể kiêm nhiều vai. Cầu có thợ sửa và dấu xe đi qua vẫn là mộtPOI vật lý, không ba điểm để báo mật độ cao. Cũng không tính mỗi cây trong rừng là một điểm khám phá.

## 3. Bốn kiểu đường

**Đường chính:** phục vụ định hướng và tuyến truyện bắt buộc. Có mốc dễ đọc, khả năng quay lại và tiếp cận dịch vụ; không mặc định toàn bộ an toàn. Độ khó và dấu nguy hiểm phù hợp nội dung, không đi xuyên lãnh địa boss map hoặcPK bắt buộc.

**Đường vòng:** cho lựa chọn khác về nguy hiểm, cảnh quan hoặc dịch vụ. Có điểm hội tụ với mạng đã biết, không kéo người đi xa rồi cụt vô cớ. Đường dài hơn có thể ít giao tranh; đường ngắn hơn có thể qua vùng nguy hiểm được báo trước. Không có một lựa chọn luôn tốt hơn mọi mặt chỉ vì thiết kế quên đánh đổi.

**Lối khám phá kín:** có tín hiệu như dấu chân, cấu trúc khác vật liệu, vệt xe hoặc lời kể. Tiếp cận bằng quyền di chuyển đã có; không yêu cầu lách hitbox, pixel chính xác hoặc class riêng chưa có tuyến thay thế. Một số lối có thể cụt nếu kết thúc bằng cảnh/đồ vật có ý nghĩa và khoảng quay đầu đủ cho ngựa.

**Đường rút/quay lại:** giảm lặp đoạn đã hiểu, hỗ trợ người bị gián đoạn hoặc hết thuốc. Có thể là cổng mở từ phía trong/nhánh vòng về; không tự thành warp toàn vùng. Không mở thẳng vào boss, vượt tuyến chưa biết hoặc phá luật kiệnW06.

Không đặt tất cả lối tắt trên bản đồ từ đầu. Khi đã mở, trạng thái thế giới chung/cá nhân phải khớp geometry theo194; không để một người thấy cầu còn người khác thấy vực ở cùng scene.

## 4. Phân bổ rương trong ngân sách62điểm

Đây là phân bổ thiết kế ban đầu theo vị trí tiếp cận, không thêm rương hoặc chốt loot/reset:

| Vùng | Gần tuyến chính nhưng cần quan sát | Nhánh khám phá | Lối kín có tín hiệu | Tổng |
|---|---:|---:|---:|---:|
| V01 | 2 | 4 | 2 | 8 |
| V02 | 2 | 7 | 3 | 12 |
| V03 | 3 | 8 | 3 | 14 |
| V04 | 3 | 9 | 4 | 16 |
| V05 | 2 | 7 | 3 | 12 |
| Tổng | 12 | 35 | 15 | 62 |

“Gần tuyến chính” không nghĩa rương nằm giữa đường có mũi tên chỉ thẳng. Vẫn dùng dấu cảnh quan và không tự hiện icon khi vào vùng. Lối kín không giữ manh mối truyện bắt buộc. Claimscope, độ hiếm, phần thưởng và số lần nhận theoITEM/LOOT, không lấy độ khó tìm để tự tăng tiền không khóa hoặc reset hằng ngày.

Không dùng62rươnglõi để điền thêmW06, trụ sở hay nhàbang. Các nội dung mới nếu cần rương phải dự toánFACTION-12, chưa có số tại hồ sơ này.

## 5. Nhịp riêng của năm vùngPvE

| Vùng | Tổ chức hành trình | Khoảng thở và điều cần tránh |
|---|---|---|
| Bình Minh | Hub→ruộng→suối→dấu chuông; nhánh rừng vòng về bờ suối | Có cảnh người sửa chữa, quan sát nước và tập thao tác; không dồn nhiều cơ chế/18mẫuquái vào một bãi |
| Merrowen | Mạng bến–kho–đê, đường hàng chính và nhánh điều tra | Sân dỡ hàng/bờ đê để đối chiếu chứng từ; không biến mỗi kho thành một đợt quái giống nhau |
| Sylvaris | Các nhánh rừng/nguồn/khai thác và nhánh hành hương qua đúng địa lý | Khoảng sáng, trạm và nơi nghe chuyện xen rừng; không tán dày che mọi lối và cảnh báo |
| Nocthollow | Nhánh cư trú–nghĩa địa tách rõ; hành trình từ vùng trũng lên cao | Điểm trú và khu gặp nhân chứng; không đặt mọi nơi trong sương hoặc bắt chạy lên xuống cùng dốc nhiều lần |
| Tiền tuyến | Ba tuyến nước/lõi/quan sát cùng về hub, thêm nhánh tinh anh | Khu hậu cần và báo cáo giúp nhìn hậu quả; không ba chuỗi quest chỉ đổi tên nhưng cùng thao tác |

90mẫuquái là danh mục đa dạng, không là lệnh spawn cả18mẫu của vùng trong một khung camera. Cụm chiến đấu thể hiện vai trò nhóm và sinh cảnh; dùng độ sâu nội dung thay số lượng entity để lấp map. Mật độ thật, cấp và respawn cònMOB/PVE, không tự tăng vì diện tích3×/4×.

82NPC lõi vẫn30tronghub/52ngoàihub. Người ngoài hub phân bố theo nguồn sống và tuyến truyện: nông dân ở ruộng, kiểm hàng ở kho, người giữ nguồn ở nước, cứu nạn ở đèo. Không đặt mộtNPC ở mọi ngã ba chỉ để chỉ đường; địa hình/biển/ánh sáng cũng phải làm nhiệm vụ định hướng.

## 6. Cụm nhiệm vụ thay cho chạy việc qua lại

Một chuyến ra ngoài nên cho phép giải quyết các mục tiêu có quan hệ địa lý/câu chuyện khi người chơi muốn, nhưng không bắt nhận toàn bộ quest rồi mới ra khỏihub. Nhật ký cho thấy các đầu mối gần nhau mà không tự reveal bí mật.

Ví dụ ởBìnhMinh: khảo sát ruộng, gặp thợ sửa cầu và kiểm bờ suối có thể nằm trong một vòng hành trình. Về trại báo cáo tạo một nhịp kết thúc. Nếu người chơi chỉ làm một việc rồi thoát, vẫn có checkpoint/ghi tiến trình phù hợp; không buộc hoàn thành cả vòng mới lưu.

Với quest nhiều bước, chỉ yêu cầu quay về khi có lý do cần gặp trực tiếp, thiết bị, phản ứng cộng đồng hoặc quyết định mới. Thông tin có thể xác nhận tại hiện trường thì không cố thêm một chuyến vềhub. Tuy vậy không tự mở điện thoại/gửi đồ từ xa trái bối cảnh để bỏ mọi quãng đi.

Mục tiêu được quay lại sau không tự biến thành quest thất bại vì đi nhánh khác; nguy cơ có thời hạn phải được báo trước theoQUEST. Không đặt thưởng chính sau nhiệm vụ phụ dễ bỏ lỡ để ép người chơi làm sạch toànmap.

## 7. W06: nhịp chiến thuật khác nhịp khám pháPvE

Sáu cứ điểm dùng topo187:2ngoại vi/3giữa/1lõi, kèm hai trạm và mạng quân nhu. Mỗi điểm ít nhất hai hướng tiếp cận thực sự khác nhau, không hai cửa cùng dẫn vào một hẻm bị nhìn trọn từ một cao điểm. Đường chở kiện có phương án vòng, nhưng không có tuyến an toàn tuyệt đối khiến vận chuyển mất ý nghĩa.

Hai phe có thẩm mỹ khác nhau nhưng cần kiểm khả năng tiếp cận tương đương: thời gian từ trạm tới nguồn ngoại vi, số giao lộ, đường rút, tầm nhìn và vật che. Không yêu cầu đối xứng hình ảnh hoàn toàn; cũng không gọi là cân bằng chỉ vì hai nửa map có cùng diện tích.

Điểm lõi có thể thu hút tập trung nhưng không là lối duy nhất qua mọi nguồn còn lại. Các nhánh ngoài tạo mục tiêu cho nhóm nhỏ, không tự có nghĩa người40an toàn khỏingười60. Chênh lực, quân số, respawnPvP và phần thưởng vẫn phảiPVP/FACTION xử lý; MAP-05 không che vấn đề bằng ghi cấp40–45 trên một vùng.

POI/dịch vụ có hội thoại dài đặt nơi tiếp cận phù hợp, không ngay tâm contest. Tài nguyên và quyền sở hữu theo server; không tăng sốnode khi đổichannel. Không rải thêmquái hoặc hazard để “cân phe” khi chưa có bản đồ và dữ liệu thử.

## 8. Độ cao, cảnh quan và thông tin trong camera

Mỗi mốc quan trọng phải đọc được qua một hoặc nhiều tín hiệu: silhouette, vật liệu, đường nhìn, biển, âm hoặc lời chỉ dẫn. Không dựa hoàn toàn vào màu phát sáng và không thêm ánh viền lên mọi vật.

Mặt trước POI có khoảng cho thao tác và chiến đấu; tán cây/vật cao dùng che khuất theoART, không xóa vật thể để tạo map trống. Tín hiệu dưới tán, nước, sương phải vẫn đọc được. Địa hình cao/trũng có lối lên và giới hạn gameplay, không là bậc trang trí khiến người chơi hiểu sai có thể leo.

Một lối kín có thể được nhận ra từ góc nhìn, nhưng không bắt xoay camera nếu game không có quyền xoay. Không giấu lối phía sau vật thể mà camera cố định không bao giờ cho quan sát và cũng không có dấu gợi ý khác. Ping và pin chỉ hỗ trợ sau khi biết, không dùngUIđể chữa mọi cảnh khó đọc.

## 9. Cách đo sau bản vẽ/greybox

Chưa chốt khoảng cách mét/pixel hoặc số giây giữaPOI vì còn thiếu tốc độ thực, kích thước ngựa và camera. Khi dựng thử phải đo theo **đường thực sự đi được**, không khoảng cách thẳng giữa hai pin:

- Hub→mục tiêu đầu tiên, checkpoint→cửa dungeon, chết→trở lại nơi tiếp tục.
- Thời gian đi thuần túy so với quan sát, hội thoại, thao tác và combat trong từng vòng nhiệm vụ.
- Số lần buộc quay cùng đoạn, nhánh có kết quả và nhánh cụt không có ý nghĩa.
- MứcPOI/đòn báo trước cùng xuất hiện trong camera, tán che và khả năng tìm đường khi tắt pin.
- Ba race, đi bộ/ngựa chiến, người mới/đã biết đường và phiên chơi bị gián đoạn.
- W06: chênh đường tới mục tiêu hai phe, nút camp, đường chở kiện và khả năng rút tầm nhìn.

Ghi mục tiêu và ngưỡng nghiệm thu sau khi có lượt dựng đầu; không tự báo FPS hoặc tỷ lệ di chuyển“chuẩn” từ hồ sơ chữ. Nếu route quá dài, ưu tiên đổi vòng/hội tụ/checkpoint rồi mới chỉnh tốc độ hoặc thêmwarp. Không sửa sát thương/XP để bù lỗi bố trí.

## 10. Điều kiện bàn giao

Mỗi tiểu khu có bảngPOI: ID, vai trò, dấu dẫn, nhánhđường, độ nguy hiểm, quest/NPC liên quan, cáchquaylại, surface, quyềnbiết và phầnthưởngthamchiếu nếu có. Mỗi nhánh có lý do khám phá và cách tiếp tục; mỗi nơi chiếnđấu có khoảngđệm và tín hiệu trước khi vào. POIkiêmvai trò khôngtínhtrùng ngân sách.

Vòng kiểm trước dựng: giữ62rương theo bảng; không bayV01;90mẫu không trở thành mật độ vô hạn; đường chính khôngPK/boss bắtbuộc; hai sectorV03khôngghépcậnđịa lýsai; NPCngoàihub cóchỗ ở/nghề; ngựa chiến khôngkẹt; W06không dùng tuyếnchínhPvElàm đườngchởkiệnbắtbuộc.

MAP-05hoàn thiện **hồ sơ quy tắc và phân bổ**, chưa layout hoặc số đo cân bằng. Tổng **525 mục:126 hoàn thiện /11 một phần /388 chưa thiết kế**. Bước mô tả kế tiếp: **MAP-11 — danh mục vật thể tương tác và trạng thái**. Vẫn dừng trước vẽ; MAP-01 và các taskENV/MOB/QUEST/FACTION còn đúng phạm vi chưa hoàn thiện.

Nguồn: [vùng184](184_MAP_04_HO_SO_NAM_VUNG_THE_GIOI_MO.md), [sinh cảnh182](182_MAP_12_SINH_CANH_QUAI_DONG_VAT_VA_BOSS.md), [đồng bộ187](187_MAP_DONG_BO_PHE_BANG_HOI_VA_W06.md), [dịch vụ189](189_MAP_07_HOI_SINH_NOI_NGHI_VA_DICH_VU.md), [khám phá191](191_MAP_09_KHAM_PHA_SUONG_MAP_VA_CHIA_SE.md), [rà soát193](193_RA_SOAT_SAU_MAP_07_09_R002.md), [biên195](195_MAP_03_BIEN_KHU_VUC_DIEM_DEN_VA_DUONG_QUAY_LAI.md).
