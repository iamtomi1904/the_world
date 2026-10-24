> **CUR-08 thiết kế lại ·22/10/2026:** [Mẫu ví pixel2.5D hiện hành179](179_CUR_08_THIET_KE_LAI_PIXEL_2_5D.md). Khung gỗ/nẹp đồng/bậc pixel trên nền ngoại thành; không còn bố cục trình bày kiểu dashboard. Tiến độ giữ **114/8/391 trên513**; chưa tích hợp game/backend. Các bản bên dưới là lịch sử.

> **CUR-08 hoàn thiện thiết kế ·22/10/2026:** [Xem bốn mockup và mẫu tương tác178](178_CUR_08_MOCKUP_VI_HAN_MUC_VA_BAN_GIAO.md). **114 hồ sơ hoàn thiện /8 một phần /391 chưa thiết kế =513**. Chưa tích hợp ví/backend; tiếp theoCAP-01. Các điểm dừng/tiến độ bên dưới là lịch sử.

> **Điểm dừng hiện hành ·21/10/2026:** [Đã thiết kế CUR-02…07, dừng trước vẽ CUR-08](177_TONG_HOP_VI_TIEN_VA_DIEM_DUNG_CUR_08.md). **113 hoàn thiện hồ sơ /9 một phần /391 chưa thiết kế =513**. Chưa vẽ cửa sổ ví, chưa code/SQL hoặc mở nguồn phát tiền. Các số/điểm dừng trước là lịch sử.

> **CUR-01 hoàn thiện ·21/10/2026:** [Ba icon32×32 và bảng kiểm169](169_CUR_01_ICON_NATIVE_32_VA_NGHIEM_THU.md). **107 hoàn thiện hồ sơ /8 một phần /398 chưa thiết kế =513**. Asset r002đã xuất và kiểm; chưa tích hợp ví. Tiếp theoCUR-02. Các số/điểm dừng bên dưới là lịch sử.

> **Đã vẽ icon tiền ·21/10/2026:** [Xem ba concept và contact sheet168](168_CUR_01_BAN_VE_ICON_TIEN_CONCEPT_R001.md). CUR-01 còn chuẩn hóa native32×32 nên giữ một phần. **106 hoàn thiện hồ sơ /9 một phần /398 chưa thiết kế =513**. Chưa tích hợp ví hoặc thay asset thủ thành. Các điểm dừng/tiến độ bên dưới là lịch sử.

> **Điểm dừng theo yêu cầu · 21/10/2026:** [Dừng trước vẽ icon tiền CUR-01](167_DIEM_DUNG_THIET_KE_CHO_VE_ICON_TIEN.md). ROAD-03 đã rà soát; CUR-01 mới phần chữ/brief, chưa vẽ. **106 hoàn thiện hồ sơ /9 một phần /398 chưa thiết kế =513**. Không tiếp tục mục sau điểm vẽ. Các số tiến độ bên dưới là lịch sử.

# 05 — Tiền tệ, thị trường và giới hạn account

> Định hướng thương mại đề xuất: [PROD-05 — Thương mại và công bằng](14_PROD_05_THUONG_MAI_VA_CONG_BANG.md). Chưa duyệt danh mục bán, con số hoặc cap chỉ vì đã có hồ sơ.

## 1. Khung ba loại tiền theo yêu cầu

Tên dưới đây là **đề xuất**, không phải giá/quy tắc đã triển khai. Có đúng một loại tiền tự do dùng giao dịch người chơi trong khung ban đầu; không tự sinh thêm vàng/bạc tự do thứ hai.

| Loại | Tên tạm | Mục đích thiết kế | Việc phải quyết định |
|---|---|---|---|
| Tiền nạp | Tinh Thạch | Mua sản phẩm được duyệt từ shop nạp | Tỷ giá, danh mục, phạm vi account/server, hạn chế, hoàn tiền; có kiếm miễn phí được không |
| Tiền khóa | Ngân Ấn | Chi trả nâng cấp/dịch vụ hoặc đổi thưởng cá nhân theo bảng đã chọn | Nguồn chơi, loại chi phí nhận, chuyển nhân vật cùng account, có quy đổi hay không |
| Tiền không khóa | Đồng Elarion | Giao dịch trực tiếp/chợ giữa người chơi; một số sự kiện/nguồn được phép sinh ra | Nguồn sinh, điều kiện tài khoản, cap account, thuế/phí và nơi tiêu |

Không tự cho phép quy đổi ba tiền hai chiều. Bất kỳ đường quy đổi hoặc bán item nạp trên chợ đều phải xuất hiện trong sơ đồ dòng tiền và được xét cùng cap/chống lạm phát. Không mặc định có rút tiền thật.

## 2. Hồ sơ từng loại tiền

- [x] CUR-01 · Chốt tên/mã/đơn vị/hiển thị và hoàn thiện baPNG32×32, alpha sạch, palette5màu, contact sheet kích thước thật. [Asset và biên bản](169_CUR_01_ICON_NATIVE_32_VA_NGHIEM_THU.md)
- [x] CUR-02 · Chốt số dư theo account/nhân vật/server/mùa; tiền nào giữ khi xóa nhân vật hoặc chuyển server. [Hồ sơ thiết kế](170_CUR_02_PHAM_VI_VI_VA_QUYEN_SO_HUU.md)
- [x] CUR-03 · Danh mục nguồn nhận và đích tiêu của từng tiền, gồm quest, drop, event, shop, thư, phân giải, đổi thưởng, giao dịch và hoàn trả. [Hồ sơ thiết kế](171_CUR_03_NGUON_NHAN_VA_NOI_TIEU.md)
- [x] CUR-04 · Chốt tiền nào chuyển được, gửi thư được, trao NPC được, dùng chợ được; tiền khóa không biến thành tiền tự do qua một thao tác trung gian vô tình. [Hồ sơ thiết kế](172_CUR_04_CHUYEN_TIEN_VA_RANH_GIOI_KHOA.md)
- [x] CUR-05 · Chốt thứ tự trừ tiền khi một dịch vụ chấp nhận nhiều loại, cho người chơi tự chọn nếu có và preview rõ tổng. [Hồ sơ thiết kế](173_CUR_05_BAO_GIA_VA_THU_TU_TRU_TIEN.md)
- [x] CUR-06 · Số dư tối đa, làm tròn, số âm, giao dịch đang giữ tiền, số đang chờ và hạn mức thanh toán; không để UI hiển thị tiền có thể tiêu khi đang phong tỏa. [Hồ sơ thiết kế](174_CUR_06_SO_DU_GIU_TIEN_VA_GIOI_HAN.md)
- [x] CUR-07 · Sổ ví: nguồn, thời gian, số tăng/giảm, số dư sau, pending/success/refund; tra cứu không lộ thông tin người khác. [Hồ sơ thiết kế](175_CUR_07_SO_VI_VA_BIEN_NHAN.md)
- [x] CUR-08 · Hoàn thiện thiết kế ví trong ngữ cảnh game pixel2.5D: khung gỗ/nẹp đồng, bốnmockup, icon32pxgốc, scope/sốdư/lịch sử/giữ-chờ/lỗi và đóng/focus. [Bản hiện hành r002](179_CUR_08_THIET_KE_LAI_PIXEL_2_5D.md)

## 3. Giới hạn nhận tiền không khóa mỗi account

**Mặc định thiết kế đề xuất:** hạn mức nhận từ các nguồn do game phát hành được cộng trên toàn bộ nhân vật thuộc cùng account trong phạm vi đã chốt. Giao dịch giữa hai người là chuyển số dư có sẵn, không tạo tiền mới, nên có chính sách chuyển/nhận riêng nếu cần; không vô tình đếm một đồng qua nhiều tay thành nhiều lần game phát hành. Đây là đề xuất cần duyệt, vì yêu cầu “giới hạn nhận mỗi account” chưa nêu là giới hạn nguồn sinh hay mọi khoản nhận.

- [ ] CAP-01 · Chốt cap áp dụng cho nguồn sinh từ game, khoản nhận P2P hay cả hai bằng hai hạn mức khác nhau; không để người làm chợ tự suy diễn.
- [ ] CAP-02 · Chốt kỳ ngày/tuần/mùa/toàn đời, múi giờ reset, cộng dồn phần chưa dùng và cách báo thời điểm reset.
- [ ] CAP-03 · Phạm vi account gồm nhân vật, server, khu/kênh và nhóm nhân vật bị xóa/tạo lại; đổi nhân vật không tự có cap mới.
- [ ] CAP-04 · Danh sách sự kiện được phát Đồng Elarion, điều kiện tham gia, mức phát, quà thay thế và quyền nhận lại.
- [ ] CAP-05 · Nguồn không phát Đồng Elarion phải trả tiền khóa/tài nguyên/vật phẩm đúng bảng; không drop nhầm tiền tự do từ mọi quái.
- [ ] CAP-06 · Đủ điều kiện nhận: tiến độ, hoạt động, trạng thái tài khoản, quyền tham gia; điều kiện được công bố trước khi người chơi dành thời gian.
- [ ] CAP-07 · Vượt cap: chặn trước nhận, nhận phần còn lại, dồn chờ, đổi quà hoặc báo không đủ; chọn một quy tắc rõ cho từng nguồn.
- [ ] CAP-08 · Quest/hộp/boss/thư có currency vượt cap không bị tiêu mất để rồi không nhận được; preview số thực nhận trước thao tác.
- [ ] CAP-09 · Phân biệt cap kiếm từ game với thu nhập chợ, bán NPC, hoàn tiền, hoàn tác giao dịch, GM bù và trả tài sản; tránh trừ/cộng cap hai lần.
- [ ] CAP-10 · Giao dịch nằm vắt qua thời điểm reset, phần thưởng phát muộn, server bảo trì và sự kiện bị hủy có ngày tính rõ.
- [ ] CAP-11 · Thiết kế giới hạn chuyển/nhận P2P cho tài khoản mới nếu chọn; có lý do, thời gian, UI và xử lý người nhận đã sát giới hạn.
- [ ] CAP-12 · Nếu cấm nhiều account theo một tiêu chí, chốt chính sách quyền riêng tư và xử lý gia đình dùng chung máy; giới hạn per-account không tự giải quyết nhiều account.
- [ ] CAP-13 · UI hạn mức: đã nhận/còn lại/tối đa/kỳ, nguồn tính cap, số đang chờ và điều kiện mở lại.
- [ ] CAP-14 · Mẫu bảng cap để điền: tiền, nguồn, nhóm account, kỳ, múi giờ, mức, rollover, miễn trừ, vượt cap, hoàn trả, người duyệt.

## 4. Nạp và shop — thiết kế trước, chưa tích hợp thanh toán

- [ ] PAY-01 · Chốt sản phẩm được bán: ngoại trang, tiện ích, dung lượng, gói hay vật phẩm sức mạnh; đối chiếu triết lý PROD-05.
- [ ] PAY-02 · Bảng gói, tiền thật, đơn vị, thuế/phí hiển thị nếu có, currency nhận, bonus và giới hạn mua; chưa điền số tùy ý.
- [ ] PAY-03 · Tách currency trả tiền và bonus khóa nếu dùng; quy định sử dụng/hoàn lại khi tiêu pha trộn.
- [ ] PAY-04 · Luồng tạo đơn → thanh toán → chờ xác nhận → cấp tiền → lịch sử; trạng thái hủy/thất bại/quá hạn/thành công muộn.
- [ ] PAY-05 · Thanh toán thành công nhiều thông báo hoặc người chơi bấm lại không cấp trùng; thiết kế mã đối soát và hỗ trợ.
- [ ] PAY-06 · Hoàn tiền/chargeback khi currency còn/đã tiêu, vật phẩm đã đổi/đã giao dịch và bonus; không xử lý tùy hứng theo từng ca.
- [ ] PAY-07 · Đổi giá/khuyến mãi/giới hạn mua, thời gian hiển thị, quyền lợi cũ và thông báo trước khi xác nhận.
- [ ] PAY-08 · Quà nạp, membership, pass/mùa hoặc VIP là lựa chọn riêng; quy tắc cộng kỳ, hết hạn và giữ thưởng phải chốt trước mở.
- [ ] PAY-09 · Cửa sổ shop/nạp/lịch sử/hỗ trợ, preview món và điều kiện tài khoản; ảnh/icon sản phẩm không làm sai lượng nhận.
- [ ] PAY-10 · Xác định người vận hành và quy trình xử lý đơn trước mở nạp; bản mẫu chơi không thu tiền thật.

## 5. Giao dịch trực tiếp

- [ ] TRADE-01 · Điều kiện: tuổi/tiến độ account, cấp, khoảng cách, server/kênh, vùng an toàn và trạng thái chiến đấu.
- [ ] TRADE-02 · Món được trao, khóa/khảm/cường hóa/đang mặc/hết hạn và cảnh báo quyền sở hữu; quy tắc đầu ra sau trao.
- [ ] TRADE-03 · Hai bên xem item thật với dòng thuộc tính, số lượng, tiền và phí; thay bất cứ thứ gì thì trạng thái đồng ý trước bị hủy.
- [ ] TRADE-04 · Xác nhận hai bước, hủy, timeout, rời vùng, đầy túi, thiếu tiền, offline và chặn người chơi.
- [ ] TRADE-05 · Tiền và vật phẩm trao cùng lúc hoặc không trao; không có tình huống một bên mất còn bên kia chưa nhận.
- [ ] TRADE-06 · Nhật ký trao đổi, biên nhận, quyền báo cáo và cách hỗ trợ; không hứa GM luôn hoàn mọi giao dịch tự nguyện.
- [ ] TRADE-07 · Hạn mức gửi/nhận, tổng giá trị, đồ tặng, giao dịch cùng account nếu có và chống chuyển vòng né cap.

## 6. Chợ/đấu giá, thư và đặt hàng

- [ ] MARKET-01 · Chọn giá cố định, đấu giá hay cả hai; số listing, thời hạn, phí đăng, thuế bán, thu tiền và trả món.
- [ ] MARKET-02 · Tìm/lọc theo tên, loại, slot, cấp, hiếm, affix, binding, giá và tình trạng; không chỉ lọc theo lực chiến.
- [ ] MARKET-03 · Preview đúng món cụ thể, giá một đơn vị/toàn stack, đơn vị tiền, phí và xác nhận khi giá bất thường.
- [ ] MARKET-04 · Món đã niêm yết được giữ ở đâu; sửa giá/rút, đang mua cùng lúc, hết hạn và túi người mua đầy.
- [ ] MARKET-05 · Người bán offline, tiền chờ nhận vượt ví/cap, phí hoàn lại hay không và lịch sử giao dịch.
- [ ] MARKET-06 · Lịch sử giá được công bố mức nào, giao dịch giả, thao túng giá và listing đặt nhầm cần thông báo/công cụ gì.
- [ ] MARKET-07 · Chợ theo server/liên server, tiền/món được chuyển và điều kiện; liên server là X chưa mặc định.
- [ ] MAIL-01 · Thư hệ thống/người chơi, tiền/vật phẩm đính kèm, COD nếu chọn, hạn nhận và trả thư.
- [ ] MAIL-02 · Thư chứa đồ khóa, currency vượt cap, túi đầy, nhân vật xóa và account bị hạn chế có hành vi xác định.
- [ ] MAIL-03 · Phân biệt thư chính thức, quà bù, thư sự kiện và tin nhắn thường; chống giả danh bằng UI rõ.
- [ ] ORDER-01 · Đặt hàng nghề: bên nào đưa nguyên liệu, phí công, hạn, hủy, chất lượng đảm bảo và quyền món đầu ra.

## 7. Nguồn sinh, nơi tiêu và cân bằng kinh tế

- [ ] ECON-01 · Sơ đồ đầy đủ nguồn game phát tiền/vật và nơi game rút ra; tách chuyển giữa người chơi khỏi phát mới.
- [ ] ECON-02 · Bảng thu nhập/chi phí phiên ngắn, ngày, tuần theo nhóm cấp và cách chơi; không cân chỉ theo người chơi tối đa thời gian.
- [ ] ECON-03 · Nguyên liệu nghề, đồ rơi, sửa đồ, nâng đồ, thuế chợ và dịch vụ có vai trò sinh/tiêu không trùng quá mức.
- [ ] ECON-04 · Đường mới chơi kiếm đủ chi phí thiết yếu không cần nạp hoặc thắng chợ; design riêng catch-up không phá giá nguyên liệu cũ.
- [ ] ECON-05 · Mô phỏng các vòng: hộp→tiền→hộp, chế tác→bán NPC, đồ khóa→phân giải→đồ tự do, nạp→item→chợ.
- [ ] ECON-06 · Mốc cấp/bản mở rộng làm đồ cũ ra sao, sức mua tiền, nguyên liệu còn ích gì và người chơi quay lại nhận quyền lợi nào.
- [ ] ECON-07 · Theo dõi lượng tiền lưu hành, phát mới, tiêu, mức giàu, giá rổ vật phẩm và doanh số; chốt khi nào điều chỉnh thiết kế.
- [ ] ECON-08 · Sửa tỷ lệ/giá/cap có phiên bản, thời điểm hiệu lực, quyền lợi đã nhận và thông báo; không âm thầm đổi sau người chơi xác nhận.
- [ ] ECON-09 · GM/sự kiện bù phát tiền chịu quy trình duyệt, lý do, lịch sử; bù không là đường sinh tiền vô hạn.
- [ ] ECON-10 · Bộ tình huống duyệt: nhiều nhân vật chung cap, nhận thưởng đúng reset, refund, mua trùng listing, hủy trao đổi, tiền bị giữ và nhiều tài khoản chuyển vòng.

## Phạm vi ví theo PROD-07

[PROD-07](16_PROD_07_SO_HUU_VA_TIEN_DO.md) chốt ví Tinh Thạch toàn account dùng chung MMORPG và thủ thành; Ngân Ấn/Đồng Elarion và cap phát hành theo account trong từng server logic. Kênh/web/PC không tạo ví hoặc cap mới. Quy tắc này làm rõ đề xuất phạm vi ví trước đó; giá, thuế và con số cap vẫn thuộc CUR/CAP.

**Đã chốt bổ sung:** tiền nạp dùng chung giữa các chế độ, một số dư duy nhất. CUR-02/07, PAY và ORDER phải thiết kế phạm vi sản phẩm, mua đồng thời, lịch sử chế độ, cấp quyền và hoàn trả trên ví chung; không tách ví nạp theo server/chế độ.
