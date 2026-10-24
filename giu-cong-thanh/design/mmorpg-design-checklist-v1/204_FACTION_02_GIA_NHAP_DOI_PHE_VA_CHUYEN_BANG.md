> **Bản nháp gác lại theo ưu tiên mới ·22/10/2026:** [205](205_UU_TIEN_COT_TRUYEN_XUYEN_SUOT_LORE_VUNG_VA_NPC.md) đặt cốt truyện/lore trước hệ phụ. FACTION-02 chưa được đánh dấu hoàn thiện;48giờ/72giờ và các chính sách dưới đây chỉ là đề xuất, không số đã chốt.

# FACTION-02 — Gia nhập, đổi phe và chuyển bang

Ngày 22/10/2026. Bản nháp nghiệp vụ, chưa chốt theo lore; chưa code, schemaPostgreSQL, giao diện vẽ hoặc kiểm thử server. Giữ hai phe Hòa Minh/Thiết Thệ, nghề cấp15/nhánh30, cap60, các map đã chốt. Không sửa thủ thành.

## 1. Phạm vi sở hữu và nguyên tắc

Một account có một phe trên cùng realm. Nhân vật chưa hoàn tất chuyển chức lần đầu vẫn trung lập, không có quyền chiến trường. Các nhân vật đã gia nhập trên realm đó cùng một phe; realm khác độc lập. Phe không khóa chủng tộc, nghề, vũ khí hoặc lựa chọn kết thúc truyện.

Bang hội có một phe cố định. Thành viên và người được nhận vào phải cùng phe, một nhân vật chỉ thuộc một bang cùng lúc. Nhiều nhân vật cùng account có thể tham gia sinh hoạt các bang cùng phe, nhưng không được dùng chúng để ghi danh thi đấu cho nhiều bang trong cùng mùa.

Phe của bang không thay theo bang chủ. Đổi phe của account không kéo toàn bang sang phe mới. Bản đầu không có chuyển phe cả bang: muốn lập cộng đồng ở phe khác cần thành lập bang hợp lệ mới; tài sản/quỹ của bang cũ không tự chuyển theo founder.

## 2. Gia nhập lần đầu ở cấp15

Luồng: gặp hai đại diện qua tuyến solo → đọc mục tiêu/phương pháp và điều khoản quan trọng → chọn nghề hợp lệ → chọn phe hoặc xác nhận phe account đã có → xem bản tóm tắt → xác nhận hoàn tất. Không phải giết người chơi khác, thắng chiến trường hoặc nạp tiền.

Hai lựa chọn nghề/phe là hai trường riêng; bản xác nhận cho biết nghề, phe, phạm vi account-realm và việc nhân vật khác kế thừa. Trước lần xác nhận cuối có thể quay lại đổi lựa chọn mà không mất nguyên liệu/phí. Quest nghề nào thực sự tiêu vật thì cost theo hồ sơ riêng, không tự thêm chi phí trongFACTION-02.

Nếu account đã có phe, nhân vật mới được giải thích rồi xác nhận gia nhập phe đó khi chuyển chức, không hiển thị hai nút như vẫn được chọn đối lập. Có thể xem lại lý tưởng cả hai bên mà không đổi membership. Nhân vật có thể trì hoãn hoàn tất chuyển chức để cân nhắc; không mấtXP hoặc bị cấm chơi nội dung tân binh chỉ vì chưa chọn.

Server cam kết nghề và membership nhân vật theo điều kiện hiện hành, không để class thành công nhưng phe thiếu vì hai request cạnh tranh. Hai nhân vật/account đồng thời chọn khác phe: yêu cầu được cam kết trước xác lập lựa chọn account, yêu cầu còn lại phải đọc lại và xác nhận phe đã có; không tự chuyển account lần nữa hoặc nhận quà cả hai.

## 3. Giới thiệu hai phe phải đủ công bằng

Hòa Minh có một tình huống thương lượng/cứu trợ cho thấy lợi ích và độ chậm. Thiết Thệ có tình huống tổ chức phòng vệ/chủ động ngăn nguy cơ, đồng thời cho thấy rủi ro quyết định tập trung. Không dùng một phe cứu dân còn phe kia giết dân để ép câu trả lời.

Các dịch vụ nền và khả năng chơi nghề tương đương. Không dấu chỉ số mạnh hơn ởphethiếungười hoặc cho vật phẩm nạp độc quyền phe thắng. Ngoại hình/huy hiệu riêng không là nguyên nhân đổi công thức. Năm tổ chức truyện vẫn độc lập, NPC cũ không tự bị gán toàn bộ vào một phe.

## 4. Vòng đời membership

Trạng thái account: chưa chọn → đang thuộc phe → đã gửi yêu cầu đổi → đang đối soát → đã đổi hoặc hủy/từ chối. “Đang yêu cầu” không là phe thứba và không cho đánh cả hai bên. Trong thời gian chờ, phe hiện tại giữ nguyên tới cam kết.

Trạng thái nhân vật: trung lập trước chuyển chức → đã gia nhập → theo membership account hiện hành. Chuyển chức nhánh30 không đặt lại phe. Xóa nhân vật cuối cùng không xóa lựa chọn phe, cooldown, lịch sử mùa hoặc entitlement của account để farmlại.

Chuyểnserver nếu được mở trong tương lai cần migration riêng theoACC/DATA; không tự sao chép điểm mùa, bang hoặc quyền giữ cứ điểm từrealmnguồn sangrealmđích. Hệ hiện tại chưa triển khai chuyểnserver.

## 5. Quy tắc đổi phe được chốt cho bản đầu

Chỉ đổi ở cửa sổ chuyển mùa, sau khi đóng trận/cửa sổ tranh quyền và hoàn tất tính kết quả. Mốc đề xuất cấu hình: **cửa sổ48giờ thực, tối đa một lần/account/realm trong một lần chuyển mùa**. Chu kỳ mùa hiện đề xuất bốn tuần186, lịch thực phải công bố riêng; không tính bằng giờgame180phút/ngày.

Đổi phe bản đầu **không thu phí** và không bán lượt bỏ khóa. Hạn chế bằng điều kiện và thời điểm, không bằng tiền nạp. Đây là quyết định thiết kế theo quyền tự cân chỉnh, có thể rà sau dữ liệu chơi; chưa là lịch/sản phẩm đã triển khai.

Người chơi gửi yêu cầu và tự xác nhận trong cửa sổ. Chưa đủ điều kiện thì hệ thống chỉ báo rõ, không tự đợi tới nửađêm rồi đổi khi họ quên. Tới lúc cam kết phải kiểm lại tất cả nhân vật đã gia nhập của account trênrealm, không chỉ nhân vật đang đăng nhập.

Điều kiện:

- Tất cả nhân vật đã gia nhập đã rời bang, không còn vai lãnh đạo/ủy quyền/quản lý cứ điểm.
- Không nhân vật nào còn trong match, scope chiến trường đang xử lý, combatlock hoặc giữ kiện chưa giải quyết.
- Roster mùa cũ đã khóa kết quả; không có tranh chấp trạng thái trận đang chờ xác minh ảnh hưởng quyền đổi.
- Giao dịch/quyền rút liên quan bang đang xử lý đã được đối soát; không có pendingtransfer chưa quyết nơi chứa actor.
- Không có hạn chế tài khoản khiến hành động này bị từ chối theo chính sách có lý do.

Không tự đá nhân vật khỏi bang hoặc giải tán bang để làm đủ điều kiện. Bảng xem trước phải liệt kê nhân vật nào đang chặn, việc cần làm và tài sản/quyền nào thay đổi.

## 6. Điểm, quà và vật phẩm khi đổi phe

**Giữ:** level/class/nhánh/skill, trang bị cá nhân, ví, nhiệm vụ đã làm, kiến thức bản đồ và quyền địa lý bền theo203; lịch sử tham gia, danh hiệu đã đạt và quyền nhận thưởng đã chốt hợp lệ.

**Đổi/thu hồi:** quyền vào trụ sở/trạm cũ, kênh chiến thuật phe, phân công đang giữ và entitlement dành riêng cho tư cách hiện tại. Marker chiến thuật cũ không chuyển sang ghimaccount để mang kế hoạch theo.

Điểm phe theo mùa không đổi thành tiền và không chuyển bảng sang phe mới. Kết quả mùa cũ lưu dưới phe/bang lúc tham gia; mùa mới bắt đầu theo quyền mới, không nhận hai phần của một kỳ. Quà đủ điều kiện đã chốt có thể claim sau đổi phe theoreceipt nguồn, không bắt nhận hết trước48giờ hoặc xóa quà vì đổi phe.

Đang chờ **tính/đối soát** phần thưởng là khác với **quà đã xác lập chưa bấm nhận**. Chỉ trạng thái chưa quyết định ảnh hưởng an toàn mới có thể chặn đổi; chưa mở hộp quà không được giữ người chơi ởphecũ vô hạn.

Vật phẩm đã sở hữu không tự xóa/đổi chỉ số khi đổi phe. Món ngoại hình sử dụng có điều kiện phe cần hiện điều kiện và quyền sở hữu vẫn giữ; không tự chuyển miễn phí sang item đối phe hoặc lấy lại đồ đã nhận. Catalog phải ghi rõ trước khi phát hành, chưa giả định mọi item phe đều có cùng chính sách.

## 7. Rời và chuyển bang không đồng nghĩa đổi phe

Rời bang ngoài combat/scope đang khóa khi đã giải quyết vai trò và giao dịch; không mất phe, class hoặc bản đồ. Bang chủ phải chuyển quyền/giải quyết trách nhiệm theoGUILD-03, không thể dùng đổi phe để bỏ kho đang tranh chấp. Giải tán bang không là lối chuyển tài sản vào ví cá nhân.

Có thể vào bang khác cùng phe ngay khi đáp ứng điều kiện sinh hoạt, không cấm chat/chơiPvE để chờ thi đấu. Tuy nhiên, **quyền thi đấu và quyền quản lý nguồn W06 có thời gian riêng**:

| Hoạt động | Chính sách thiết kế |
|---|---|
| Chat/partyPvE/sinh hoạt nhàbang | Theo quyền thành viên ngay khi gia nhập hợp lệ |
| Tham giaW06với phe | Vẫn được tham gia chiến đấu/phụ trợ theo quyền phe, không đòi bang |
| Nhận quyền quản lý/benefit phân công nguồn của bang mới | Đề xuất thời gian gắn bó72giờ thực; không chặn đóng góp cho phe, không cấp bù lợi ích hồi tố |
| Đăng kýGA01/GA02 | Theo rosterlock của mùa; một account một bang thi đấu trênrealm trong cùng mùa |
| Rời bang khi đã ghi danh/chơi trận | Không xóa lịch sử/điểm/khóa tư cách để thi lại cho bang khác cùng mùa |

72giờ là cấu hình đề xuất cần ràGUILD/FACTION-05; không áp làm cooldown dùng dịch vụ cơ bản. Chưa chốt công thức thưởng tài nguyên, không dùng quy tắc này để tạo nguồn tiền mới.

## 8. Roster và chống thuê người vòng cuối

Khóa bang thi đấu của account khi roster chính thức được giải chấp nhận, không khi mới mở form nháp. Cùng một account không cửAđánhGA01cho bangXvàBđánhGA02cho bangYtrong cùng mùa trênrealm. Có thể chọn nhân vật theo roster/quyền giải nhưng không có hai actor đồng thời trong cùng trận; sốslot và thay người chi tiết thuộcFACTION-06/07.

Rời roster trước khi nó được chấp nhận không tạo phạt mùa. Sau khi chốt, bỏ bang vẫn được bảo vệ quyền rời cộng đồng, nhưng không xóa khóa thi đấu. Người mới gia nhập muộn vẫn chơiPvE/W06theophe; không buộc tham gia giải hoặc khóa chơi toàn mùa.

Điểm và thưởng cá nhân xét membership/roster/đóng góp tại thời điểm phù hợp, không lấy danh sách bang tại giờ phát quà rồi chia tất cả. Rời bang không đồng nghĩa mất phần đã kiếm hợp lệ; vào cuối mùa không tự nhận quà của người đi trước. Cách xử lý vi phạm/tranh chấp cần log vàSAFE, không tự xóa quà người vô can.

## 9. Đổi phe với nhiều nhân vật và mất mạng

Yêu cầu gắn account+realm+intentId và membershipVersion. Chỉ một intent có quyền cam kết. Khi chuẩn bị, khóa các thao tác làm thay điều kiện của những nhân vật liên quan: nhận lời mời bang/đăng kýtrận/nhậnkiện/chuyểnscope phe. Không cần khóa ví hoặc PvE khác không liên quan vô cớ.

Trướccommitmấtmạng thì membership cũ còn hiệu lực hoặc yêu cầu hết hạn theo trạng thái được lưu; saucommitreconnect nhận phe mới và vị trí trả về hợp lệ. Không dùng đóngtabđể giữ một nhân vật ởphecũ. Điểm trả về trung lập có bảo hộ theo195, không xuất hiện trong trụ sởđịch sau khi đổi.

Nhân vật offline nhận cập nhật quyền khi đăng nhập; session đang tồn tại phải đồng bộ revision và loại bỏ quyền phe cũ. Đòn/pet/DoTscope cũ dọn/kiểm lại188, không đổi phe giữađòn để gây sát thương đồngminh. Không thực hiện trong trận là điều kiện đầu, không chỉ dựa cleanupcuốicùng.

Membership đổi là sự kiện nghiệp vụ cólog/receipt; actor và quyền ở các dịch vụ cần đồng bộ/đối soát theoNET/DATA. Chưa cam kết một giao thức database hoặc tuyên bố test đồng thời thành công.

## 10. Luồng UI cần thiết kế hình sau

**Gia nhập:** hai thẻ phe nêu mục tiêu chung, khác biệt tư tưởng, hạn chế và ví dụ công việc; không thanhthiện/ác. Cho xem trước biểu tượng/trụ sở nhưng không giấu lợi thế chiến đấu.

**Đổi phe:** hiển thị pheaccount/realm, thời gian cửa sổ, danh sách nhân vật bị ảnh hưởng, điều kiện còn thiếu, dữ liệu giữ/mất quyền và xác nhận cuối. Không nútđổi ngay có thể bấm trongcombat. Nhậnquàđãchốt và yêu cầuđổiphe làhaihànhđộng riêng.

**Bang:** phân biệt thành viên sinh hoạt với đủ tư cách thi đấu/quản lý nguồn; hiện thời điểm đạt72giờ nếuápdụng và mùa đã khóa bang. Lý do không đủ điều kiện phải hiểu được, không cần đọcdebug.

Các màn dùng stylepixel2.5Dđãchốt, mở từmenuPhe/Bang theoUI; chưa tự chiếm phímhotbar hoặcT/Esc/~. Chưa vẽ mockup tronghồsơnày, các chức năng không phải đã có trong game.

## 11. Kiểm trước triển khai

Đọc diễn: hai requestgia nhậpkhácphecùngaccount; charoffline còn bang; leader muốnđổi; pendingquàđãchốtkhácpendingkếtquả; kiện/trậnbịmấtmạng; ra/vào bangđểreset72giờ; altghidanhhaibang; chuyểnphecuốicửasổ; realmkhác; patchđổipheUIkhôngđổilore; rờibangkhônglấymấtđồcánhân.

Các bất biến phải giữ: mộtpheaccount/realm, khôngđốiphegiữacácchardãgianhập, mộtbangthiđấuaccount/mùa, khôngnhậnthưởngcùngkỳhai lần, khôngxóadữliệuđãcamkết, khôngépPKđểchuyểnnghề. Chưa có test runtime.

FACTION-02 giữ trạng thái chưa hoàn thiện trên checklist; các đề xuất trong nháp cần biên tập sau cốt truyện theo205. Không dùng các số hoặc quy trình trên làm chính sách cuối. Ưu tiên viết truyện và lore, chưa đi tiếpFACTION-03.

Nguồn: [khungphe186](186_FACTION_01_HAI_PHE_BANG_HOI_VA_CHIEN_TRUONG.md), [map187](187_MAP_DONG_BO_PHE_BANG_HOI_VA_W06.md), [luật188](188_MAP_06_PHAN_LOP_KHU_VUC_VA_QUYEN_GIAO_TRANH.md), [biên195](195_MAP_03_BIEN_KHU_VUC_DIEM_DEN_VA_DUONG_QUAY_LAI.md), [mởvùng203](203_RA_SOAT_MO_VUNG_THE_GIOI_MO_VA_DAT_AN_R003.md), [checklistMMO07](07_MMO_CONG_DONG_VA_VAN_HANH.md).
