> **Gói map1–10 ·22/10/2026:** [Tuyến nội dung V01](../mmorpg-story-v1/17_BINH_MINH_GOI_THIET_KE_MAP_1_10.md), [dungeon6phòng/1boss](../mmorpg-story-v1/18_BINH_MINH_HAM_NGUC_VA_BOSS_CHI_TIET.md), [12cư dân](../mmorpg-story-v1/19_BINH_MINH_MUOI_HAI_CU_DAN.md). Bổ sung ngày/tuần/truyền thuyết; V01 không có tuyến nghề, chuyển chức15/nhánh30. Gói nội dung đã chốt, asset/cân số/runtime còn mở. Giữ525=127/13/385.

> **Đồng bộ bản đồ phe/bang ·22/10/2026:** [Phụ lục187](187_MAP_DONG_BO_PHE_BANG_HOI_VA_W06.md) nối W06/đại bản doanh/nhàbang/arena vào địa lý, khí hậu và luật vùng; sửa phạm vi6vùng ngoài trời, không PKnămPvEcũ. Giữ525mục:119hoànthiện/11mộtphần/395chưathiếtkế; chưa vẽ/code. Các phạm vi cũ bên dưới là lịch sử khi xung đột.

> **NPC trong và ngoài khu an toàn ·22/10/2026:** [MAP-04 r003, mục16](184_MAP_04_HO_SO_NAM_VUNG_THE_GIOI_MO.md) phân bố30NPCởhub/52NPCngoàihub; NPCdịchvụ và truyện có mặt trong hoang dã. Không tự tạo safezone quanhNPC. Giữ82NPCvà118/10/385; chưa triển khai.

> **Chốt vùng tân thủ · 21/10/2026:** V01 cấp1–10 **không có quái bay**, bao gồm quái thường, tinh anh, boss, dungeon và sự kiện chiến đấu trong vùng; boss không có pha bay. Không yêu cầu học đối không ở V01. Quái bay chỉ có thể xuất hiện ở vùng sau, không bắt buộc ngay V02. [Quy tắc đối không](100_COMBAT_05_CAN_CHIEN_VA_QUAI_BAY.md). Đây là cập nhật thiết kế MMORPG, không sửa thủ thành.

# 02 — Thế giới, bản đồ, nhân vật, mỹ thuật và nhiệm vụ

Mỗi đầu việc cần kết quả xem được: hồ sơ, sơ đồ, bản phác hoặc bảng asset, chưa phải yêu cầu tạo toàn bộ hình ảnh ngay. Dùng mẫu chung tài liệu 08.

## A. Ngôn ngữ hình ảnh và âm thanh nền

- [ ] ART-01 · Thiết kế một phần: giữ đặc tả pixel V4, cần cập nhật phối cảnh/camera theo [hồ sơ 2.5D](36_DINH_HUONG_2_5D_VA_RA_SOAT_MY_THUAT.md) và xác nhận bằng scene mẫu; chưa sản xuất bộ asset.
- [ ] ART-02 · Thiết kế một phần: giữ đặc tả pixel V4, cần cập nhật tỷ lệ chiếu và che khuất theo [hồ sơ 2.5D](36_DINH_HUONG_2_5D_VA_RA_SOAT_MY_THUAT.md) và xác nhận bằng scene mẫu; chưa sản xuất bộ asset.
- [x] ART-03 · Hoàn thiện đặc tả silhouette, vũ khí, trang phục, tư thế và motif cho 3 chủng tộc, 7 nghề, 19 nhánh/28 tổ hợp. [Hồ sơ ART-03 V2](33_ART_03_NHAN_DIEN_TOAN_CAY_NGHE.md), 21/10/2026; chưa sản xuất hoặc kiểm chứng sprite.
- [ ] ART-04 · Thiết kế một phần: đã nghiên cứu Octopath, Star Ocean R và Triangle Strategy; cập nhật texture/module 3D, pivot/depth/alpha/VFX theo [ART-04 V2](37_ART_04_THAM_KHAO_GAME_2_5D.md). Đã có [hồ sơ và sơ đồ cảnh mẫu](38_ART_04_HO_SO_CANH_MAU_2_5D.md); chưa dựng scene camera/cao độ/atlas để xác nhận trước sản xuất.
- [x] ART-05 · Hoàn thiện đặc tả màu/ký hiệu quan hệ, nguy hiểm/hỗ trợ, nguyên tố và trạng thái, gồm phân tầng 2.5D và tùy chọn đọc thông tin. [Hồ sơ ART-05](39_ART_05_MAU_KY_HIEU_THONG_TIN.md), 21/10/2026; chưa sản xuất hoặc đo contrast.
- [x] ART-06 · Hoàn thiện đặc tả ưu tiên P0–P3, ba mức VFX, chi tiết nhân vật/cánh/ngựa/đám đông, lọc trạng thái và thiết lập hiển thị. [Hồ sơ ART-06](41_ART_06_DO_RO_HIEU_UNG_DAM_DONG.md), 21/10/2026; chưa sản xuất hoặc đo hiệu năng.
- [x] ART-07 · Hoàn thiện đặc tả chân dung/avatar/loading và icon skill/item/currency/trạng thái theo pixel V4, size class và lớp nhãn độc lập. [Hồ sơ ART-07](42_ART_07_CHAN_DUNG_AVATAR_ICON.md), 21/10/2026; chưa vẽ hoặc kiểm chứng bộ ảnh.
- [x] ART-08 · Hoàn thiện thư viện chuẩn, danh mục khung/ma trận sản xuất, nguồn/quyền và bốn cột tiến độ asset. [Hồ sơ ART-08](43_ART_08_THU_VIEN_VA_MA_TRAN_ASSET.md), 21/10/2026; chưa kiểm kê từng file hoặc sản xuất bộ hình.
- [x] ART-09 · Hoàn thiện ngôn ngữ nhạc/môi trường, vũ khí/nguyên tố/trạng thái, ngựa/boss/UI, âm không gian 2.5D và cảnh báo có hình/chữ. [Hồ sơ ART-09](44_ART_09_NGON_NGU_AM_THANH.md), 21/10/2026; chưa sản xuất hoặc đo âm thanh.
- [x] ART-10 · Hoàn thiện mã ổn định, biến thể/revision, dependencies/manifest, nguồn/quyền và luồng duyệt. [Hồ sơ ART-10](45_ART_10_MA_PHIEN_BAN_VA_DUYET_ASSET.md), 21/10/2026; chưa tạo registry hoặc quản lý file production.

## B. Bản đồ toàn thế giới

- [ ] MAP-01 · Thiết kế một phần: [thế giới r002](201_MAP_01_MUOI_DAT_AN_VA_MAU_THEO_TIEN_TRINH_R002.md) cótênkhu/10đấtẩn/màutheotiếntrình, bản lõir001giữthamchiếu; còn tỷlệ/địalý/layout,22/10/2026. Chưa mapgameplay.
- [x] MAP-02 · Hoàn thiện [cấu trúc lớp bản đồ194](194_MAP_02_CAU_TRUC_LOP_BAN_DO_VA_QUYEN_THONG_TIN.md): địa lý/người chơi/vận hành,12lớp, ID và quyền thông tin/quest/phiên bản; chưa vẽ hoặc triển khai,22/10/2026.
- [x] MAP-03 · Hoàn thiện [biên/điểm đến/đường quay lại195](195_MAP_03_BIEN_KHU_VUC_DIEM_DEN_VA_DUONG_QUAY_LAI.md): surface, arrival/return/deathscope, fallback, transfer và quyền mount/tài sản; chưa tọa độ, vẽ hoặc code,22/10/2026.
- [x] MAP-04 · Hoàn thiện [hồ sơ năm vùng](184_MAP_04_HO_SO_NAM_VUNG_THE_GIOI_MO.md): văn hóa/kiến trúc/màu,30tiểu khu, cư dân/sinh cảnh/tài nguyên, quest đại diện và cầu nối truyện;22/10/2026. Chưa vẽ layout, viết đầy đủ NPC/quest hoặc triển khai. [Phạm vi phe/W06](187_MAP_DONG_BO_PHE_BANG_HOI_VA_W06.md)
- [x] MAP-05 · Hoàn thiện [nhịp khám phá/mật độ/mạng đường196](196_MAP_05_NHIP_KHAM_PHA_MAT_DO_VA_MANG_DUONG.md): loạiPOI, bốn kiểu đường, phân bổ62rương, nhịpPvE/W06 và phép đo saugreybox; chưa vẽ hoặc thửcân bằng,22/10/2026.
- [x] MAP-06 · Hoàn thiện [phân lớp khu vực và quyền giao tranh188](188_MAP_06_PHAN_LOP_KHU_VUC_VA_QUYEN_GIAO_TRANH.md): PvE/an toàn/phe/bang/W06/arena, kiểm quyền, biên, portal và scope; chưa vẽ volume hoặc triển khai,22/10/2026.
- [x] MAP-07 · Hoàn thiện hồ sơ: Tách hồi sinh/checkpoint/nghỉ/dịch vụ, mạng hub/hoang dã/phe/bang/W06; giữ104/111, chưa đặt tọa độ hoặc triển khai. [Mở](189_MAP_07_HOI_SINH_NOI_NGHI_VA_DICH_VU.md),22/10/2026.
- [x] MAP-08 · Hoàn thiện hồ sơ: Mạng đi bộ/ngựa/đò/điều vận/warp/đường tắt, quyền và quote/transfer; chưa vẽ hoặc code portal. [Mở](190_MAP_08_MANG_DI_CHUYEN_VA_CHUYEN_VUNG.md),22/10/2026.
- [x] MAP-09 · Hoàn thiện hồ sơ: Fog nhân vật, tham khảo account, ghim/ping và quyền bản đồ W06/GA; chưa vẽ UI hoặc triển khai discovery. [Mở](191_MAP_09_KHAM_PHA_SUONG_MAP_VA_CHIA_SE.md),22/10/2026. [Bổ sung trạng thái mở vùng](202_MAP_MO_VUNG_TRANG_THAI_VA_HUONG_KHAM_PHA_DAT_AN.md).
- [x] MAP-10 · Hoàn thiện hồ sơ đồng hồ chung, chu kỳ ngày/đêm, chuyển thời tiết, gió, truyện và UI; [thiết kế môi trường sống](181_MAP_10_THOI_GIAN_THOI_TIET_HE_SINH_THAI.md), 22/10/2026. Chưa triển khai hoặc đo runtime. [Phạm vi phe/W06](187_MAP_DONG_BO_PHE_BANG_HOI_VA_W06.md)
- [x] MAP-11 · Hoàn thiện [20họ vật thể và vòng đời198](198_MAP_11_VAT_THE_TUONG_TAC_VA_VONG_DOI.md): F/focus, scope, trạng thái, concurrency/cost/receipt, cơ cấu solo và metadataart; chưa vẽ/code/test,22/10/2026.
- [x] MAP-12 · Hoàn thiện hồ sơ phân bố sinh cảnh năm vùng, lãnh địa, nhịp sống, spawn/respawn và quan hệ truyện chung; [hồ sơ182](182_MAP_12_SINH_CANH_QUAI_DONG_VAT_VA_BOSS.md), 22/10/2026. Chưa catalog loài, vẽ hoặc kiểm thử runtime. [Phạm vi phe/W06](187_MAP_DONG_BO_PHE_BANG_HOI_VA_W06.md)

## C. Địa hình và môi trường

- [ ] ENV-01 · Bộ ghép nền theo ô: mặt đất, mép, góc trong/ngoài, chuyển biome, bờ nước; ghép nhiều ô thay vì phóng to một ảnh nền.
- [ ] ENV-02 · Vùng cao/trũng/núi: lối lên, vách, bóng, vật che, đường đi và cách camera tránh che nhân vật.
- [ ] ENV-03 · Thiết kế một phần: chốt nước cạn/sâu, quyền lội, màu/độ sâu và dấu cảnh báo trong [hồ sơ181](181_MAP_10_THOI_GIAN_THOI_TIET_HE_SINH_THAI.md); chưa atlas, collision và cảnh mẫu.
- [ ] ENV-04 · Băng, lửa/dung nham, gió, đất chết, rừng rậm: tác động, đối tượng chịu, kháng, tồn tại, cộng dồn và VFX/cảnh báo.
- [ ] ENV-05 · Phân biệt nguy hiểm môi trường liên tục và đòn đánh báo trước; có thời gian nhận biết, đường thoát và hỗ trợ người mới.
- [ ] ENV-06 · Thiết kế một phần: định hướng cây/cỏ năm vùng, layer gió và danh mục asset trong [hồ sơ181](181_MAP_10_THOI_GIAN_THOI_TIET_HE_SINH_THAI.md); chưa vẽ bộ loài/biến thể hoặc nghiệm thu camera.
- [ ] ENV-07 · Vật thể có thể che màn hình cần phác cách mờ/ẩn; không thay đổi vùng gameplay chỉ vì ảnh trang trí lớn.
- [ ] ENV-08 · Chốt khai thác tài nguyên, thay đổi vật thể, tái tạo và quyền sở hữu ở vùng chung; một cá nhân không phá hết cảnh của người khác.

## D. Thành, làng và công trình

- [ ] CITY-01 · Mỗi thành có sơ đồ khu dân cư, tôn giáo, hành chính, nghề, kho/chợ, cổng và ngoại vi theo chức năng đời sống.
- [ ] CITY-02 · Thiết kế module tường/cổng/tháp/mái/cầu thang/sân đúng tỷ lệ, góc nối và đường đi; kiểm bản phác từ xa lẫn khi đứng sát.
- [ ] CITY-03 · Thành sau biến cố có dấu sửa chữa và sinh hoạt; tách tàn tích lõi khỏi phần còn hoạt động.
- [ ] CITY-04 · Làng có ruộng, nước, sinh kế và đường vận chuyển hợp lý, không chỉ NPC đứng cạnh các nút dịch vụ.
- [ ] CITY-05 · Thiết kế nội thất/ngoại thất và cửa chuyển; bảng hiệu, biểu tượng dịch vụ, vùng tương tác, giờ phục vụ nếu có.
- [ ] CITY-06 · Khu trú/gia đình cá nhân và khu chung dùng biến thể nào; tránh đưa spoiler lựa chọn riêng ra bản đồ chung.

## E. Tạo nhân vật, avatar và trang bị hiển thị

- [ ] CHAR-01 · Ma trận 3 chủng tộc × 7 nghề cấp 15 × 19 nhánh cấp 30, chỉ 28 tổ hợp race/nhánh hợp lệ: lựa chọn ngoại hình hợp lệ, silhouette, giới thiệu lore và biến thể thoại.
- [ ] CHAR-02 · Chốt hình thể, mặt/tóc/da, màu, tên hiển thị, đại từ/xưng hô; tránh cho avatar khác hẳn model trong game.
- [ ] CHAR-03 · Thiết kế avatar/portrait cho HUD, party, chat, bạn bè, hồ sơ và lựa chọn nhân vật; xác định ảnh tĩnh hay lấy từ model tùy biến.
- [ ] CHAR-04 · Slot trang bị hiển thị: đầu, thân, tay/chân, vũ khí, phụ kiện; thứ tự lớp khi cầm hai tay, khiên, cung hoặc cưỡi thú.
- [ ] CHAR-05 · Chuẩn animation idle, đi/chạy, đánh thường, cast/channel, né/đỡ, tương tác, trúng đòn, khống chế, chết và hồi sinh.
- [ ] CHAR-06 · Biến thể vũ khí, số hướng, vũ khí sau lưng, động tác tay và điểm bám effect; không dùng một động tác đao cho mọi vũ khí.
- [ ] CHAR-07 · Chuẩn ngoại trang, nhuộm, chuyển hình trang bị, ẩn mũ/cánh; phân biệt hình ảnh và chỉ số thật trên tooltip.
- [ ] CHAR-08 · Thiết kế màn tạo/chọn/xóa/đổi ngoại hình nhân vật, xem trước đầy đủ và thông báo không thể đảo ngược.
- [ ] CHAR-09 · Hình thái tiến hóa/biến hình phải có avatar, model, animation, ảnh skill, icon trạng thái và cách trở lại dạng gốc.
- [ ] CHAR-10 · Chốt quan hệ hình thái class và thú cưỡi hệ thống; tránh thánh kỵ cưỡi hai thú hoặc cánh trùng nhau.

## F. NPC

- [x] NPC-01 · Đã chốt [khung7vai và ma trận12cư dânV01](213_NPC_01_PHAN_LOAI_VA_MA_TRAN_V01.md): vai chính/phụ, đếm cư trú, menu, nguồn thông tin và lớp truyện; chưa triển khai hoặc vẽ,22/10/2026.
- [ ] NPC-02 · Thiết kế một phần: [hồ sơ chữ12cư dânV01](214_NPC_02_HO_SO_MUOI_HAI_CU_DAN_V01.md) đủ tuổi/ngoại hình mô tả/giọng/mục tiêu/quan hệ/giới hạn biết. Tổng48danh tính đề xuất (24lõi+19thầy+5cư dân), chưa hoàn thiện toàn bộ82NPC; chưa hình/animation.
- [ ] NPC-03 · Thiết kế một phần: [12bảng conceptNPCV01](215_NPC_03_BO_VE_MUOI_HAI_CU_DAN_V01_R001.md) đã vẽ gồm hình đứng/3biểu cảm/2keypose mỗi người. Chưa sprite native nhiều hướng/animation loop hoặc toàn bộ82NPC,22/10/2026.
- [ ] NPC-04 · Thiết kế vị trí, tuyến sinh hoạt, thời điểm gặp, trạng thái nhiệm vụ và cách tìm lại khi NPC di chuyển.
- [ ] NPC-05 · Bán hàng/rèn/kho/tín ngưỡng có biểu tượng và cửa sổ đúng vai; không khiến một NPC mở nhiều menu không phân nhóm.
- [ ] NPC-06 · Thoại khác theo race, xuất thân, phe, tiến độ và lựa chọn; có đường mặc định không làm lộ spoiler.
- [ ] NPC-07 · NPC cá nhân/chung có quy tắc vắng mặt, bị thương, chết, thay người dịch vụ và tương tác trong tổ đội.
- [ ] NPC-08 · Tái sử dụng 24 hồ sơ NPC đã viết ở bộ truyện như tài liệu đề xuất, không coi đã có hình ảnh/model.

## G. Quái, động vật và boss

- [x] MOB-01 · Hoàn thiện [danh mục90mẫu nền](183_MOB_01_DANH_MUC_90_MAU_QUAI.md),18/vùng; ID/dòng/hành vi nhận diện. Chưa vẽ hoặc nghiệm thu gameplay,22/10/2026.
- [ ] MOB-02 · Mỗi loài có sinh thái, vai trò combat, nơi sống, điều kiện thù địch/trung lập, nhóm và quan hệ với phe.
- [ ] MOB-03 · Thiết kế ngoại hình thường/tinh anh/tha hóa theo cách đọc được, không chỉ đổi màu và nhân kích thước.
- [ ] MOB-04 · Bộ idle/move/attack/cast/hurt/death/spawn; với quái bay có bóng, độ cao, hạ cánh và thời điểm trúng đòn rõ.
- [ ] MOB-05 · Đòn thường/kỹ năng có nguồn phát, đạn, vệt, impact, âm báo, trạng thái và vùng nhận đòn đúng thân.
- [ ] MOB-06 · Hồ sơ hành vi tuần tra, phát hiện, đuổi, mất mục tiêu, quay nhà, gọi đồng loại, bỏ chạy và hồi phục.
- [ ] MOB-07 · Thiết kế bãi quái theo mật độ, hồi sinh, điểm an toàn, chống kéo cả bản đồ và tranh chấp loot.
- [ ] MOB-08 · Quái có bảng chỉ số/vật phẩm gắn cấp và sinh cảnh; số lượng/HP tổ đội không làm mất cơ chế nhận biết.
- [ ] BOSS-01 · Phân loại boss truyện solo, dungeon nhóm, lãnh địa, thế giới và raid; không lấy boss nhiều người làm cổng truyện solo.
- [ ] BOSS-02 · Mỗi boss có danh tính, lịch sử, sân đấu, kích thước, vùng thân/chân/đầu, hướng nhìn và silhouette.
- [ ] BOSS-03 · Thiết kế từng pha: điều kiện chuyển, đòn, báo trước, cửa phản công, cách tránh, tương tác môi trường và kết trận.
- [ ] BOSS-04 · Phác riêng động tác đánh/cast/niệm/nhảy/đáp/chuyển pha; VFX không thay thế động tác cơ thể.
- [ ] BOSS-05 · Boss bay, chuyển dạng, bất tử tạm, add triệu hồi và reset có cách giải thích; không dùng vùng đánh không đọc được.
- [ ] BOSS-06 · Chốt scaling theo số người, giới hạn khống chế/DoT, quyền tham gia, loot, thời gian hồi và hành vi khi người rời giữa trận.
- [ ] BOSS-07 · Thiết kế giết/tha/giải thoát/thương lượng nếu hợp lore, vật chứng không mất do chọn cách khác.
- [ ] BOSS-08 · Màn giới thiệu, chân dung, thanh HP/pha, cảnh kết, bách khoa, biểu tượng bản đồ và hồi tưởng chơi lại.

## H. Nhiệm vụ và nội dung kể chuyện

- [ ] QUEST-01 · Phân loại chính, phụ, xuất thân, class, race, nghề, phe, hằng ngày/tuần, sự kiện, khám phá và tổ đội.
- [ ] QUEST-02 · Mỗi nhiệm vụ có người cần giúp, động cơ, điều kiện, chuỗi hành động, vật chứng, thoại, nhật ký và hậu quả.
- [ ] QUEST-03 · Quy định nhận tự động/từ NPC/vật thể/bản đồ, hiển thị mục tiêu, tìm đường và khi không nên tự động dẫn đường.
- [ ] QUEST-04 · Thiết kế nhánh, điểm hội tụ, manh mối bắt buộc, trường hợp làm trước/bỏ qua/quay lại và thứ tự phụ.
- [ ] QUEST-05 · Phân chia chung/cá nhân/tổ đội, quyền chọn, người được ghi tiến độ, hỗ trợ bạn và tránh spoiler.
- [ ] QUEST-06 · Phần thưởng kinh nghiệm/tiền/vật phẩm/danh vọng/mở khóa tuân nguồn kinh tế; không chỉ tăng thưởng để buộc làm nội dung không thích.
- [ ] QUEST-07 · Vật phẩm nhiệm vụ không thể vô tình mất; đầy túi, hủy nhiệm vụ, đổi class, disconnect và NPC vắng có cách tiếp tục.
- [ ] QUEST-08 · Nhiệm vụ lặp, chuỗi mở theo ngày/tuần và nghỉ dài có cách kể hợp lý; không biến một người chết thật thành boss chết mỗi ngày.
- [ ] QUEST-09 · Gói nhiệm vụ cấp 1–10 đã có bản truyện: rà sang bản đồ, UI và asset list, chưa ghi là đã triển khai.
- [ ] QUEST-10 · Thiết kế một phần: [bản kể xuyên suốt0.1](../mmorpg-story-v1/11_TUYEN_TRUYEN_XUYEN_SUOT_NAM_VUNG_BAN_DAU.md), [lore năm vùng13](../mmorpg-story-v1/13_LORE_NAM_VUNG_VA_MACH_KHAM_PHA.md) và [cảnh NPC Bình Minh14](../mmorpg-story-v1/14_BINH_MINH_CANH_NPC_VA_PHAN_HOI.md) đã viết. Còn ánh xạ đầy đủ manh mối/82NPC, quest và thoại chi tiết sau10; không coi lore là nhiệm vụ đã triển khai. [Ưu tiên205](205_UU_TIEN_COT_TRUYEN_XUYEN_SUOT_LORE_VUNG_VA_NPC.md),22/10/2026. Bổ sung [7 tuyến nghề](../mmorpg-story-v1/15_LORE_CHUNG_TOC_VA_BAY_TUYEN_CHUYEN_NGHE.md)/[19 tuyến nhánh](../mmorpg-story-v1/16_LORE_MUOI_CHIN_NHANH_VA_TUYEN_CHUYEN_NHANH.md) dạng ba chặng, chưa script/thoại sản xuất.
- [ ] QUEST-11 · Thiết kế hành trình tân thủ, hướng dẫn từng chức năng khi cần, chức năng bỏ qua/xem lại và trở lại sau nghỉ lâu.
- [ ] QUEST-12 · Nội dung không nhiệm vụ: chuyện môi trường, sách, thư, bách khoa, câu đố, đồ sưu tập và dấu vết nghề.

## I. Ma trận asset và âm thanh cần bàn giao

- [ ] ASSET-01 · Mỗi loại ghi rõ: mã, hệ dùng, kích thước, phối cảnh, số hướng/frame, anchor, trạng thái, màu, biến thể và người duyệt.
- [ ] ASSET-02 · Ma trận nhân vật × vũ khí × race × hành động × hình thái; phát hiện tổ hợp thiếu trước khi đặt vẽ.
- [ ] ASSET-03 · Icon riêng cho skill, trạng thái, vật phẩm, nguyên liệu, tiền, chức năng, nghề, phe, thuộc tính và sự kiện.
- [ ] ASSET-04 · VFX phát đòn/đạn/va chạm/vùng/trạng thái/chuyển dạng/tăng cấp/nâng đồ; tách trang trí khỏi tín hiệu nguy hiểm.
- [ ] ASSET-05 · UI cần khung, tab, nút, slot, viền độ hiếm, progress, loading, empty/error/locked và bộ tooltip.
- [ ] ASSET-06 · Thumbnail vật phẩm, ảnh xem trước trang bị/cánh/thú cưỡi và hình đổi qua tiến hóa phải cùng định danh.
- [ ] ASSET-07 · SFX bước chân theo nền, vũ khí theo đòn, báo boss, UI thành/bại, loot và âm trạng thái; mức âm lượng không che thông tin thiết yếu.
- [ ] ASSET-08 · Nhạc vùng/căng thẳng/boss/cảnh truyện, chuyển nhạc, phụ đề thoại và điều khiển âm riêng.
- [ ] ASSET-09 · Chốt bản nhẹ cho đông người, giảm hiệu ứng của người khác, ánh sáng chói/rung; vẫn giữ báo trước nguy hiểm.
- [ ] ASSET-10 · Với asset tái dùng/sinh mới, lưu tham chiếu, nguồn/quyền và yêu cầu sửa; không đánh dấu đủ bộ chỉ vì có một ảnh đứng.

## Ràng buộc phạm vi cập nhật · 20/10/2026

[PROD-06 V2](15_PROD_06_PHAM_VI_VA_NGAN_SACH.md) và [PROD-08](17_PROD_08_CAP_DO_VA_MO_RONG.md) là đầu vào mới: năm vùng mở, cấp bản đầu 45, mỗi vùng >10 NPC, vùng sau diện tích 3–4 lần vùng đầu; dungeon đặc sản có 1–3 boss theo khó, rương ẩn, tinh anh và boss vùng. Có cinematic mở đầu bỏ qua/xem lại. Không tự đánh dấu hoàn thành các task chuyên môn từ hồ sơ phạm vi này.
