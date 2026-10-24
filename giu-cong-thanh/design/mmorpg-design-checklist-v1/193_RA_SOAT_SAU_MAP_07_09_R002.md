# Rà soát sâu MAP-07…09 · r002

Ngày 22/10/2026. Rà soát thiết kế trên giấy, chưa mô phỏng engine, vẽ hoặc kiểm thử server. Giữ điểm dừng trước bước vẽ theo yêu cầu. Các quyết định dưới đây thay những mô tả mơ hồ tương ứng trong189/190/191; không thêm task, tiền tệ, cấp độ hoặc công thức sát thương.

## 1. Kết luận chính

Ba hồ sơ đã có khung chức năng nhưng chưa đủ để người dựng tự quyết các trường hợp biên. Cần tách rõ **vùng nội dung** với **sector thực sự chứa nhân vật**, **biết thông tin** với **có quyền sử dụng**, và **đã gửi yêu cầu** với **đã cam kết giao dịch**. Những khác biệt này quyết định việc tránh đi tắt bằng chết, nhận thưởng trùng, mất tiền khi rớt mạng và lộ thông tin chiến trường.

Giữ trạng thái hoàn thiện hồ sơ mô tả MAP-07/08/09 sau khi bổ sung r002, nhưng không coi các task tọa độ, PvP, kinh tế, NPC, dữ liệu hay camera đã hoàn thiện. MAP-01 vẫn một phần và cần bản vẽ trước khi xác nhận kích thước/quãng đường.

## 2. Hồi sinh phải theo scope, không theo tên một vùng lớn

### Vấn đề phát hiện

V03 có nhánh rừng Sylvaris và nhánh hành hương qua Valedorn. Nếu cứ ghi “hồi tại Trạm Khế Ước của V03”, người chết ở nhánh hành hương có thể vượt một quãng đường chưa khám phá để về rừng. Tương tự, V04 trải từ vùng trũng lên cao địa, không nên chết ở Nocthollow rồi lập tức xuất hiện tại một trạm núi chưa tới.

### Chốt r002

Mỗi **sector gameplay có thể vào độc lập** phải có điểm hồi sinh mặc định hợp lệ hoặc một điểm gắn với cửa vào cùng hành trình đã được tiếp cận. Vùng nội dung V01…V05 chỉ là nhóm các sector, không là khóa duy nhất chọn respawn. Với dungeon dùng run/instance; W06 dùng tiền trạm phe; arena dùng match ruleset.

Thứ tự chọn khi nhấn về điểm:

1. Kiểm tra trạng thái chết và luật encounter hiện tại.
2. Chọn checkpoint đã đăng ký **trong scope hồi sinh của sector hiện tại**, còn quyền và còn an toàn.
3. Nếu không có, chọn điểm mặc định của sector đã được bảo đảm từ lúc vào.
4. Nếu sector phải đóng, dùng điểm trả về đã ghi ở lần chuyển hợp lệ; không tự chọn một hub xa hoặc phe đối lập.

Không được chọn trong danh sách mọi checkpoint của toàn thế giới ngay khi chết. Vẫn giữ lựa chọn hồi tại chỗ, vật phẩm, cứu đồng đội và Mục Sư theo104 khi scope cho phép. W06 có ruleset riêng, không dùng trả phí tại chỗ để bỏ thời gian quay lại giao tranh.

Đăng ký checkpoint không hồi HP/mana, không nhận quà, không mở warp và không reset cooldown. Tương tác đăng ký cần còn sống, ngoài combat, đúng surface/range/LoS và đúng quyền; đổi điểm không được coi là giao dịch mua hồi sinh.

### Không biến cứu trợ thành hình phạt vô hạn

Giữ phí F/5F, nguồn Ngân Ấn, cap phí45, cứu trợ khi thiếu tiền và kết quả HP/mana trong104. Không tự tăng theo cấp60. Vì ví Ngân Ấn dùng chung account/server theo170, báo giá phải đọc đúng ví và xét khả dụng/hold, không lấy số dư riêng của nhân vật. Đây là khoản chi dùng chung, không phải chia sẻ checkpoint giữa các nhân vật.

Không tự thêm phí sửa đồ, trừ kinh nghiệm, mất cấp hoặc rơi đồ cá nhân khi chết. Nếu phí W06/arena cần khác, phải có bảng riêng trước triển khai; không suy từ câu “hồi về tiền trạm” rằng hệ phí/thời gian PvP đã được chốt.

## 3. Mạng dịch vụ cần giảm chạy việc nhưng vẫn có khám phá

Hub phải giải quyết được vòng chuẩn bị cơ bản mà không bắt người thiếu thuốc chạy qua bãi tinh anh: sửa cơ bản, tiêu thụ thiết yếu, nơi quản lý vật phẩm và hướng dẫn tiếp tục. Không đồng nghĩa hub nào cũng có toàn bộ rèn/khảm/tín ngưỡng/chợ nâng cao.

NPC ngoài hoang dã có dịch vụ đặc thù, thông tin, đơn hàng và quan hệ riêng, nhưng không được là nơi duy nhất cung cấp một nhu yếu phẩm bắt buộc để hoàn thành truyện solo nếu lịch của NPC khiến người chơi không tiếp cận được. Hàng hiếm/tiện ích có thể gắn NPC chuyên biệt; nguồn thay thế hoặc thời gian gặp cần ghi rõ trong hồ sơ NPC, không mặc định được đảm bảo bằng một dấu chấm than.

**Dịch vụ không làm sạch chiến trường:** NPC không tham chiến và không có loot giết khác với người chơi được bảo hộ. Thợ rèn trong lán ngoài rừng không khiến người đứng cạnh miễn sát thương. NPC nguy hiểm có chỗ tiếp cận và dấu cảnh báo, không đặt giữa điểm quái hồi liên tục.

**NPC di chuyển và giao dịch:** mở menu gắn NPCId, interactionLease, vị trí/quyền hiện hành. Trước accept, nếu NPC đi quá xa, đổi scope, đóng ca hoặc người chơi bị ngắt tương tác thì quote hết khả năng thực hiện, báo lý do, không tự trừ. Nếu giao dịch đã được server commit thì trả receipt và giữ kết quả; đóng cửa sổ sau đó không hủy món đã mua hoặc cho nhận thêm món. Di chuyển không reset stock hay giá.

Giữ82slotNPC lõi,30tronghub/52ngoàihub. Đây là phân bổ ngân sách, chưa có82profile đầy đủ. Người thay ca là một slot có tên riêng nếu thực sự thêm nhân vật, không giấu ngân sách bằng gọi mọi người thay ca là cùngNPC. Điểm đăng ký có thể là mốc/vật thể để tránh thêm người không cần thiết.

## 4. Kỵ Sĩ và thế giới2.5D: phải kiểm cả đường lẫn cửa

Không chỉ hỏi “ngựa có vào dungeon không”; cần kiểm toàn bộ đường từ điểm hồi sinh tới mục tiêu: cổng, bậc, góc cua, hành lang, chỗ xoay người, cầu và khoảng giơ vũ khí. Tuyến bắt buộc cho Kỵ Sĩ phải giữ quyền sử dụng nghề trên ngựa theo34, không giải quyết bằng ép đi bộ rồi bảo dùng đánh thường.

Tách **ngựa chiến** và **thú di chuyển** trong dữ liệu quyền vào. Một nội thất hòa bình có thể cho người đi bộ, nhưng trước cửa phải có chỗ xuống/ngồi lại; đoạn sau nếu có giao tranh bắt buộc cần điểm gọi ngựa hợp lệ hoặc sửa không gian. Không tạo trạng thái người bị kẹt giữa cửa vì ngựa bị server từ chối sau khi đã bước vào.

Khi chết, quyền sở hữu ngựa giữ nhưng trạng thái cưỡi kết thúc theo34. Hồi sinh không tự phục mọi buff ngựa hay miễn điều kiện gọi lại. Checkpoint chiến đấu phải đủ khoảng cho gọi ngựa. Không tự đặt thời gian triệu hồi hoặc miễn thương mới trong MAP; giữ MOUNT/COMBAT làm nguồn.

Surface là bắt buộc: bến, cầu, sàn trên nước, đường dưới cầu và tầng nhà không chung tọa độ gameplay chỉ vì trùngX/Y. UI đường đi và ping phải chọn đúng tầng; bóng ngựa hay tán cây lớn không thay collider.

## 5. Warp hai đầu không được thành bài toán không thể mở

“Hai đầu đã biết” có nghĩa **nhân vật đã tới và đăng ký riêng từng nút bằng đường bộ, đò, đoàn vận chuyển hoặc tuyến truyện hợp lệ**. Không cần dùng warp để mở đầu còn lại. Hai nút đều có thể biết trước khi tuyến năng lượng của chúng sẵn sàng; mở nút và mở cạnh mạng là hai trạng thái khác nhau.

Nút hiển thị trạng thái: chưa biết → đã biết qua thông tin → đã tới → đã đăng ký → tạm ngưng/không còn quyền nếu có. Chỉ trạng thái đủ điều kiện mới dùng được. Không dùng bản đồ tham khảo account hoặc ping của bạn để nhảy qua bước này.

Lần đầu tới W06 là chuyến điều vận được quân vụ cho phép, trả vào tiền trạm đúng phe; nó không đòi hỏi đứng sẵn trong W06 để mở đầu đến. Đây là loại tuyến dịch vụ riêng, không ngoại lệ tùy tiện cho mọi warp. Vẫn kiểm40–60/phe/combat/kiện/quyền hiện hành188.

Đối với hành trình xa chưa dựng liền mạch, có thể dùng chuyến đại diện khoảng đường, nhưng phải ghi từ đâu tới đâu. Không giả người chơi vừa chạy vài bước đã qua cả lục địa, cũng không hứa tất cả tuyến đều có đường đi bộ liên tục trước khi dựng.

## 6. Chuyển vùng, trả phí và mất mạng: cần kết quả duy nhất

Tách **intent hành trình**, **khoản giữ tiền/vé**, **transferId** và **receipt hoàn tất**; chúng liên kết nhưng không phải cùng một cờ client. Đề xuất thứ tự nghiệp vụ để người làm server triển khai:

| Giai đoạn | Trạng thái | Nếu mất mạng hoặc timeout |
|---|---|---|
| Xem tuyến/quote | Chưa cam kết hành trình | Không chuyển, không tự tiêu vé/tiền |
| Kiểm quyền và chuẩn bị điểm đến | Đích sẵn sàng, giữ nguồn nếu cần | Chưa thành công thì release theo trạng thái thật; không tự sinh actor mới |
| Cam kết hành trình/transfer | Đã chọn nơi chứa actor chính thức | Reconnect đối soát transferId; không đảo qua lại theo lựa chọn client |
| Áp kết quả và trả receipt | Một lần chi và một lần tới nơi | Retry trả cùng kết quả; không vừa refund vừa nhận chuyến đi |
| Lỗi đích sau cam kết | Sự cố có trạng thái cần xử lý | Dùng fallback/đối soát có log, không bồi thường tự động bằng nhân vật/vé trùng |

Đây là yêu cầu bất biến nghiệp vụ, chưa lựa giao thức distributed transaction hoặc hứa đã có exactly-once ở mạng. Phần triển khai NET/DATA phải chứng minh chỉ một actor có quyền hoạt động, một khoản chi hợp lệ và một kết quả hành trình cho cùng intent.

Combat lock10s, grace mất mạng, logout và cooldown giữ111. Những hành động mới trong lúc prepare như đổi phe, nhận kiện hoặc đổi đội trận phải khiến điều kiện được kiểm lại trước commit; không khóa quyền một lần từ khi mở menu rồi để người chơi lách sau đó.

## 7. Khám phá: thông tin không đồng nghĩa quyền

### Ba tình huống dễ nhầm

- Nhân vậtA đã khám phá một thành; nhân vậtB cùngaccount xem được nét tham khảo công khai nếu bật, nhưng B chưa có điểm hồi sinh/warp/quest ở đó.
- Bạn gửi tọa độ một hang; người nhận lưu được ghim “tin được chia sẻ”, không tự mở fog hoặc nhận questcredit.
- Từng mở rương không đồng nghĩa mọi nhân vật được nhận lại, cũng không đồng nghĩa rương đó luôn khóaaccount. Claimscope theo định nghĩa rương/loot hiện hành, không MAP-09 tự quyết.

**Sửa câu cũ về rương:** nếu reward khóaaccount thì kiểmaccount; nếu reward khóacharacter thì kiểmcharacter. Fog/discovery không thay ledgerclaim. Đánh dấu “đã mở bởi nhân vật này” khác với “đã nhận phần thưởng account”. Nếu chưa có catalog claimscope thì UI không được khẳng định nhận được hay hết thưởng chỉ dựa vào fog.

Thông tin thành/đường công khai có thể được biết trước bằng sách/bản đồ/NPC; không cần cho cả thế giới một tấm mànđen để ép đi bộ. Ngược lại, secretPOI và sự thật người cha không được nhập vào bản đồ account chỉ vì một nhân vật đã đọc spoiler.

## 8. Chống lộ thông tin chiến trường qua các kênh phụ

W06 công khai ownerphe/bang, lịch và contest tại mục tiêu theo luật; contest tự nó đã là một lượng thông tin chiến thuật được chủ ý công bố. Không vì cấm radar mà ẩn luôn trạng thái điểm đang bị chiếm. Nhưng số người/đường tới/kiện đang mang không tự công khai.

Địch có thể xuất hiện trong tầm nhìn combat hợp lệ theo game, nhưng mở worldmap không biến thành radar toàn vùng. Client không được nhận danh sách vị tríđịchbímật rồi chỉ che bằng fog. Ghim từ lần nhìn thấy phải có nguồn/thời điểm và là thông tin cũ, không âm thầm cập nhật theo actorđịch.

Ping chiến thuật mang scopephe/team/party và thời hạn; đổi phe/đội/rời bang thì thu hồi quyền xem, không chuyển về ghimaccount. Không đưa kế hoạch phe vào API lịch sử công khai, spectator hoặc thông báo hệ thống cho cả server. Tuy vậy, không thể ngăn một người thật kể lại thông tin đã thấy ngoài game; thiết kế chỉ giới hạn nguồn dữ liệu của hệ thống, không hứa chống gián điệp tuyệt đối.

W06 có một trạng thái ownership theo realm. Minimap không được đọc ownership ởchannelA nhưng sản lượng ởchannelB. Nếu sau này cần shard chiến trường, thiết kếđồngbộvàphầnthưởngphải được sửa, không chỉ thêm nút chọnchannel trênUI.

## 9. An toàn, hồi sinh và chống camp: cần thiết kế không gian

Biên an toàn chặn hành động xuyên ranh theo188, nhưng chỉ một rule không giải quyết được camp. Bảnvẽ cần nhiều cửa xuất quân, khoảng chuẩn bị đủ, chỗ rút/đứt tầm nhìn và không có vị trí cao nhìn trọn mọi điểm spawn. Không đặt dịch vụ đăngký ở phía ngoài ranh để vừa hồi đã bị khóa tương tác.

Giữ chặn nhậnimmunitytrongcombat; không tự thêm miễnthương dài, teleportthoát hoặc sátthươngguard để vá trước khi thấy layout. Đánh giá theo tình huống: nhóm yếu có đi chuẩn bị được không, có quay vềtrạm sau táchcombat được không, một nhóm mạnh có khóa toàn bộ lối trong thời gian dài không. Nếu không đạt thì sửa vị trí/cổng/địa hình trước cânstat.

W06 và arena hiện còn thiếu **ruleset hồi sinh PvP chi tiết**: thời gian chờ, quyền skillrez, quota, nguồn phí/không phí và tiêu chí không reset bằngrelog. Đây là đầu vào FACTION/PVP còn mở, không nên dùng hoàn thiện MAP-07 để suy ra đã chốt đủ trận đấu. Không bậtPKtrước khi phần này và chốngcamp được nghiệm thu.

## 10. Tác động đến kinh tế và nhịp chơi

Điểm nghỉ và warp quá dày làm mất giá trị khám phá, NPC ngoài đường và vận chuyển; quá thưa biến mỗi lần chết thành chạy lại lâu. Chưa có khoảngcáchmeter/phút thực để tuyên bố cân bằng. Cần vẽ/greybox rồi đo các hành trình: hub→nhiệm vụthường; checkpoint→cửa dungeon; chết→quay lại; trạmW06→nguồnngoại vi/giữa/lõi; đườngngựa so đi bộ.

Đánh giá cả người chơi từng phiênngắn, người bị ngắt, nhân vậtalt và ngườiđangtheocốttruyện. Chưa đặt targettime cứng hoặc lịchreset để giải quyết bằng grind. Ưu tiên sửa tuyếnvòng/lốivề/checkpoint rồi mới giáwarp.

Phí hồi sinh đã chốt giữ104; giá dịchvụđi lại mới chưa chốt phải đi quaCUR/CAP trướcpháthành. Không mở thêm nguồn ĐồngElarion hoặc tăngXPngầm để bùthời gianchạy. Tiền nạp dùngchung khôngđượctrởthànhphíđibắtbuộc.

## 11. Ưu tiên rủi ro trước dựng

| Ưu tiên | Rủi ro | Điều kiện đóng khi triển khai |
|---|---|---|
| P0 | Hồi sinh nhảy sector/chưa mở đường | Mọi deathscope có checkpoint/fallback hợp lệ, không tới đầu kia chưa biết |
| P0 | Kỵ Sĩ bị khóa nghề ở tuyến bắt buộc | Walkthrough toàn tuyến bằng ngựa chiến và kiểm ngưỡng cửa/surface |
| P0 | Nhân actor/tiền/vé khi timeout | Kịch bản ngắt ở từng stage, đối soát một kết quả theo intent/transfer |
| P0 | Radar/đạn/DoT vượt scope | Kiểm dữ liệu gửi client và quyền ở mỗi hit/tick/chuyển vùng |
| P0 | PvP chết/rez còn thiếu luật | Phê duyệt rulesettrận và chạy encounter thử trước bậtW06 |
| P1 | Mất dịch vụ vì NPC di chuyển | Quote/lease/receipt đúng thứ tự, NPC có lịch/nguồn thay thế |
| P1 | Farm rương/warp bằng accountalt | Discovery/claimscope/unlock tách rõ, retry không cấp thêm |
| P1 | Camp trạm khiến không chơi được | Kiểm nhóm yếu/mạnh, hai cửa trở lên chưa tự bảo đảm đạt nếu địa hình sai |
| P1 | UI nhầm fog/thời tiết/quyền | Xem hiểu đúng bằng chữ/icon, không cần đọc debugger |
| P2 | Đường quá dài hoặc lặp cảnh | Đo hành trình thực, chỉnh nhánh/quay về thay vì kéo tile hoặc bỏ truyện |

P0/P1/P2 là ưu tiên kiểm thiết kế, không báo có bug đã xác nhận trong game đang chạy. Các kiểm trên đều chưa được thực hiện ở runtime.

## 12. Bổ sung brief vẽ và điểm dừng

Bản vẽ MAP-01 và overlay phải đánh được: sector/deathscope, hub/fallback, đường đã biết và quyềnwarp, node/edgehànhtrình, surface nhiều tầng, đườngngựa, biênPvE/PvP, cửa ra tiềntrạm, các lớp thôngtin côngkhai/bímật. Cólegend vàbảngIDtáchriêng; không nhét hết vàomộtảnhtrangtrí.

Trước khi xem hìnhđẹp, đọcdiễn ba route: nhânvậtmới điV01→V02; KỵSĩvào dungeonbắtbuộc; pheítngười vàoW06vàquaylại. Bảnvẽchưa chứngminhpathfinding/collision; saubảnvẽcầngreyboxvàQA.

**Giữ điểm dừng trước vẽ.** Không có ảnh, code, migration hoặc testgame trong lầnràsoát. Tổng525mục giữ123hoànthiện/11mộtphần/391chưathiếtkế; đây là sửa sâu cùngba hồsơ, khôngtăngsốhoànthiện.

Nguồn: [hồi sinh189](189_MAP_07_HOI_SINH_NOI_NGHI_VA_DICH_VU.md), [di chuyển190](190_MAP_08_MANG_DI_CHUYEN_VA_CHUYEN_VUNG.md), [khám phá191](191_MAP_09_KHAM_PHA_SUONG_MAP_VA_CHIA_SE.md), [bàn giao trước vẽ192](192_TONG_HOP_MAP_07_09_VA_DIEM_DUNG_VE.md), [hồi sinh104](104_COMBAT_13_CHET_VA_HOI_SINH.md), [ngựa34](34_KY_SI_CHIEN_DAU_TREN_NGUA.md), [ví170](170_CUR_02_PHAM_VI_VI_VA_QUYEN_SO_HUU.md), [chuyển vùng111](111_COMBAT_14_DISCONNECT_CHUYEN_VUNG_VA_DOI_DO.md).
