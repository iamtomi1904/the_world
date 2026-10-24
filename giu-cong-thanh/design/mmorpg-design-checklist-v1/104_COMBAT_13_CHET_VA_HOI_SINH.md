> **Bản V2 có hiệu lực · 21/10/2026:** [Báo cáo nâng sâu133](133_V2_BAO_CAO_THAY_DOI_VA_BAN_GIAO.md), [khế ước cốt truyện128](128_V2_KHE_UOC_COT_TRUYEN_VA_COMBAT.md), [utility/capstone131](131_V2_CO_CHE_KY_NANG_VA_THIEN_PHU.md). PhầnV2 ở cuối hồ sơ thay các điểmV1 có xung đột; số/rule không thay giữ nguyên. Đây là thiết kế, chưa code/asset/QA.

# COMBAT-13 — Chết, cứu đồng đội và hồi sinh

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0 · **Trạng thái:** Hoàn thiện đặc tả. Mục7 thay các thông số để mở ở bản0.1 bên dưới. Giá/thời gian là cấu hình cân thử theo ủy quyền; chưa triển khai. Chỉ MMORPG, không sửa thủ thành. [Nghiên cứu](105_NGHIEN_CUU_COMBAT_VA_19_NHANH.md).

## 1. Quy tắc đã được chủ dự án xác lập

- Chết có cơ chế hồi sinh trả phí hoặc dùng vật phẩm.
- Có hai đích hồi sinh: tại chỗ hoặc điểm hồi sinh của từng map.
- Trong map tổ đội, người chơi có thể nhờ đồng đội hồi sinh một lần.
- Nghề Mục Sư có một kỹ năng hồi sinh.

Giữ nguyên không mất cấp/XP/AP/SP/TP khi chết. Phí hồi sinh là chi phí riêng, không âm thầm trừ XP hoặc đổi thành hỏng/mất trang bị. Không dùng tiền nạp dùng chung các chế độ làm phí bắt buộc.

## 2. Luồng màn hình khi chết

Server xác nhận chết → dừng điều khiển chiến đấu → hiện vị trí tử vong, các lựa chọn và điều kiện. Không tự trả phí, tiêu vật phẩm hay về map khi người chơi chỉ bấm Esc/~. Trận đấu không tạm dừng vì mở bảng chết.

| Lựa chọn | Điều kiện / giao diện |
|---|---|
| Hồi sinh tại chỗ bằng phí | Hiện giá, loại tiền gameplay, số dư và nơi đứng dậy; cần xác nhận. |
| Hồi sinh tại chỗ bằng vật phẩm | Hiện đúng vật phẩm và số lượng cần; không tự dùng đồ khi nút trả tiền bị khóa. |
| Về điểm hồi sinh của map | Hiện tên điểm hồi sinh an toàn của map/instance và phí hoặc vật phẩm nếu cấu hình yêu cầu. Không tự đưa về thành ở map khác. |
| Nhờ đồng đội | Chỉ có khi map hỗ trợ tổ đội và bản thân còn lượt cứu thường; có thể gửi tín hiệu vị trí cho nhóm. |
| Chấp nhận kỹ năng hồi sinh | Hiện tên người cứu và kết quả dự kiến; có quyền từ chối, không bị kéo dậy vào vùng nguy hiểm. |

Bảng phí/vật phẩm/HP/mana/niệm/bảo vệ và đường cứu trợ đã chốt tại mục7; không yêu cầu tiền nạp để tiếp tục chơi.

## 3. Diễn giải lượt cứu đồng đội

Chọn thiết kế **mỗi nhân vật được đồng đội cứu thường một lần trong một lượt map tổ đội**, không phải cả đội chỉ có một lượt và không phải mỗi người cứu được một lần cho từng người khác. Ai trong nhóm đủ quyền tương tác cũng có thể thực hiện cứu thường, không cần nghề Mục Sư.

Lượt chỉ trừ sau hồi sinh thành công; bắt đầu niệm, bị ngắt hoặc người chết từ chối không làm mất lượt. Sau khi đã dùng, lần chết tiếp theo vẫn có thể trả phí/dùng vật phẩm hoặc nhận kỹ năng hồi sinh hợp lệ. Không mất mọi đường chơi vì đã dùng cứu thường.

Lưu lượt theo runId+characterId phía server. Reconnect, đổi đội trưởng, rời/vào lại cùng lượt hoặc đổi channel không làm mới. Chỉ một lượt nội dung mới thực sự mới khôi phục. Map mở dùng phiên sự kiện tổ đội có runId riêng; chưa có phiên thì không tự reset lượt mỗi lần qua cổng. PARTY/MAP cần định nghĩa vòng đời runId trước triển khai.

Người cứu phải còn sống, cùng nhóm/lượt, đủ gần, cùng bề mặt hoặc đường tương tác hợp lệ. Cứu cần niệm, có thể bị ngắt bởi di chuyển/khống chế; range/cast và tác động damage theo mục7. Không cứu xuyên tường/cầu hoặc nhờ nhân vật ngoài instance. Bản đầu không có minigame gục bắt buộc: HP0 là chết chờ hồi sinh, không tiếp tục đánh từ trạng thái gục.

## 4. Kỹ năng hồi sinh của Mục Sư

Là **kỹ năng chủ động thuộc chức nghiệp Mục Sư**, không tự có cho mọi class hoặc Pháp Sư Ánh Sáng. Theo cây hiện hành, Con Người Mục Sư và Elf nhánh Pháp Sư Mộc kế thừa quyền dòng nghề khi đủ điều kiện học; hình hồi sinh thần thánh/mộc khác nhau, cùng hợp đồng hồi sinh nền. Nếu cần giới hạn nhánh phải sửa cây có ghi nhận, không tự làm Elf mất dòng nghề.

Kỹ năng chọn một đồng đội đã chết, có niệm/cost/cooldown và lời mời chấp nhận. Gắn được vào một ô bất kỳ trên hotbar13, không thêm nút chiến đấu miễn phí. Mốc học/cost/range/cast/CD/quota combat và rank chốt tại mục7/catalog126.

**Lượt cứu thường và kỹ năng là hai nguồn độc lập:** dùng kỹ năng không tiêu lượt cứu thường; hết lượt thường không khóa kỹ năng. Kỹ năng vẫn chịu cost/cooldown và giới hạn encounter được công khai, không đồng nghĩa hồi sinh vô hạn hoặc bỏ cơ chế boss. Nhiều Mục Sư không được chấp nhận cùng một xác để nhân HP/reward. Chưa cấp thêm SP/TP hoặc đổi tổng35/11 vì có skill mới.

## 5. Hồi sinh, điểm map và an toàn giao dịch

Mỗi map có điểm hồi sinh an toàn mặc định; checkpoint khác phải có quyền kích hoạt, không đứng trong vùng gây damage. Map tổ đội có điểm hồi sinh của instance. Trong lúc boss khóa phòng, hồi sinh tại điểm map không tự teleport vào giữa boss; chờ cửa hợp lệ hoặc luật encounter. Team wipe không tự kết thúc lượt để reset cứu thường nếu chưa theo quy tắc dungeon.

Một deathId chỉ được hoàn tất một lần. Server kiểm trạng thái chết, nguồn hồi sinh, giá/quyền/vật phẩm và vị trí trước commit. Hai đồng đội cùng niệm hoặc trả phí cùng lúc nhận skill thì chỉ một phương án thành công; không thu phí/vật phẩm từ phương án thua. Giữ kết quả theo requestId, timeout đối soát trạng thái cũ, không yêu cầu trả lần hai. Không cho client tự báo đã được hồi sinh hoặc đã trả tiền.

Khi sống lại, gỡ các debuff trên bản thân theo STAT-09/10; không reset cooldown/CC-DR trong cùng encounter hoặc khôi phục buff cũ. Không tự gọi lại ngựa/pet để phát buff lần hai; Kỵ Sĩ giữ quyền ngựa, gọi lại theo luật hiện hành. Mức HP/mana và bảo vệ theo mục7 phải rõ trong preview, không hồi đầy tại chỗ hoặc vô địch vô hạn.

## 6. Phạm vi tài liệu và sản xuất sau

Những thông số để mở của bản0.1 được chốt ở mục7. Các bảng item tổng thể, UI sản xuất, schema và kiểm gameplay vẫn thuộc ITEM/SCREEN/DATA; không gọi đã triển khai từ hồ sơ này.

## 7. Thông số V1 có hiệu lực

Đặt F(L)=10+2×min(level,45) **Ngân Ấn**. Vềđiểmmap tốnF, tại chỗ tốn5F. Cấp1/10/30/45/60 cóF=12/30/70/100/100. Không tăng phí trong45–60 trên cùng nội dung45. Không dùng tiền nạp hoặc tiền tự do bắt buộc.

| Nguồn | Cost / cast / điều kiện | HP/mana hồi |
|---|---|---|
| Về điểm map |F, chờ5s; nếu thiếu tiền dùng cứu trợ sau10s: thu tốiđa sốdư NgânẤn hiệncó, miễn phầnthiếu, không nợ/âmví; previewrõ |100%/100% tại safecheckpoint, CD vẫn chạy|
| Tại chỗ trả phí |5F, chờ3s; cấm khi bossencounter đangactive |30%/20%|
| Tại chỗ vật phẩm |1Ấn Hồi Sinh, chờ3s; cùngcấm bossactive |30%/20%|
| Cứu thường |2U/LoS, niệm5s; move/directdamage/hardCC ngắt; dùngđược trongcombat |25%/15%|
| Phép Mục Sư |Cấp18/questnghề, rank1fixed;30%maxmana,6U/LoS, niệm4s,CD180s; combatđược |40%/30%|

Cứu thường vẫn mộtlần/ngườinhận/run. Phép khôngtiêu lượtthường, nhưng ngườinhận chỉ đượcnhận **một phép hồi sinh/bossattempt dùngchung mọi healer**; ngoài boss theoCD. Cùngattempt cóthể mộtcứuthường cònquyềnrun vàmộtphép, khôngtựhồi sinh vôhạn. Wipe/reset khônglàm mới cứu thường; attemptmới chỉlàm mới quota nguồnphép, CD180s giữ.

Ấn Hồi Sinh ID `USE_RESURRECT_V1`: consumable khóa nhânvật, stack20, khôngtrade/bánNPC/đổitiền. NPC bán5F(L) theo cấp khi mua; tânthủ nhận2ấn quaquest mộtlần/character với ledger. Không shopnạp/hộpngẫu nhiên; ITEM/USE còn thiết kế template/nguồnloot rộnghơn, không dùng làm lýdo tick toànITEM.

Hồi sinh tại chỗ có3sân hạn HPdamage/hardCC, cóthểđi; attack/casthostile tựgỡ trướcRelease, cấmloot/objective trongân hạn. Điểmchếtinvalid tìmnearestvalid cùngsurface trong1U; khôngcó thì chỉcho vềcheckpoint. Khôngrestorebuff/pet/ngựa/CD. Vềcheckpointgiữa boss khôngteleportvàophòngđangkhóa; solo/teamwipe resetboss sau5s khôngcònactorhợplệ, khôngkillreward.

Phép có10slờimờiaccept; source/targetcòn hợp lệ khi commit. Lease deathId chặn nhiềungườibắtđầucứucùngxác. Skillmana/CD commit ởcastaccepttheo97, khônghoànvìngườichếttừchối; tựtrảphí/item chỉcommitđồngthờihồisinh, khôngthu từphươngánthua. Requestretry trảkếtquảcũ, khônggiáphíđổiâmthầmgiữaquotevàconfirm.

Kỹnăngcùngnghề MụcSư ConNgười/Elf, nhánhMộc kếthừa; khôngtựgrantchoPhápSưÁnhSáng. Rank1khôngSP, vẫnchiếmô khi dùng;35SP/11TP giữ. Những sốtrên là cấu hình thiết kế, khôngkếtquảcânkinhtế.

## 8. Tiêu chí kiểm sau

Hếtmoney/item vẫn vềđiểm; fee/item/rezrace mộtdeathId; cấp45/60đồngphí; haihealer/quota; teamwipe/reconnect giữrun; lava/tường; skillbịngắt/từchối; bosslock/cửa. Chưa chạy database/game/QA.


## V2 — Hồi sinh không xóa ý nghĩa mất mát

Áp dụng128: HP0lànguykịchcòndấutiếp dẫn, hồiởđiểmmap làcứu trợđãchuẩnbị, cóphí NgânẤn/vật phẩmgameplay. Ngườiđược cứuđượcaccept/từchối. Dụngcụ Edrankhông phảilànguồnhồi sinhđộcquyền của“ngườichọn”.

M04giới thiệutrạm/dấu đăngkýbằngmộttương tácngắn, khôngquestđóngphíbắtbuộc. Người chưađủtiền cócứu trợvềđiểm104; NPCkhôngmắngiữmạngvìhếttiền. Không được dùngrezkéo Oren thànhngười sống hoặc dùnghealđể tháotoàn bộliênkếtmàcốt truyệncầnđiềutra.

Giữ F/5F, capphí45, mộtcứuthường/run, quota mộtphép/người nhận/bossattempt, MP/CD/ân hạn. Tiêu chí: lời thoạikhớploạihồi sinh, retry/death Idkhôngnhâncost, allclasscóđường thoát, lựa chọntruyệngiữ nguyênhệquả.

## Chốt sau rà soát lần hai — phạm vi lượt cứu và cam kết

Dungeon/map tổ đội dùng rescueScopeId gắn phiên nội dung và nhân vật nhận cứu. Map mở dùng cùng encounterId của boss/sự kiện đang tham gia; ngoài encounter không cấp cứu thường của tổ đội, dùng các đường hồi sinh cá nhân hoặc kỹ năng hồi sinh đã mở. Rời nhóm, đổi trưởng nhóm, reconnect hoặc vào lại phiên còn hiệu lực không tạo lượt mới. Chỉ phiên nội dung mới do server tạo sau kết thúc/đóng phiên mới cấp lại quota; không lấy lần kết nối hay lần mở UI làm phiên mới. Quota thường và quota hồi sinh của Mục Sư vẫn là hai bộ riêng.

Khóa deathId trước khi nhận một cast hồi sinh. Cast cạnh tranh bị từ chối trước accept không mất mana/CD; cast đã được server accept vẫn theo quy tắc chi phí và cooldown đã cam kết, kể cả mục tiêu từ chối hoặc điều kiện mất sau đó. Không thể dùng cùng vật phẩm/phí và một offer khác để hồi sinh hai lần.

Ân hạn3s chặn sát thương HP và hard CC, gồm sát thương môi trường, không thanh tẩy effect đang có hoặc xóa thời gian của chúng. Hết ân hạn vẫn đứng trong dung nham thì tick tiếp theo gây sát thương bình thường; không trả bù tick đã được miễn. Không nhận thưởng/nhặt vật hay tương tác mục tiêu trong ân hạn; hành động tấn công kết thúc ân hạn trước Release. Điểm hồi sinh phải ở bề mặt an toàn hợp lệ, không dùng ân hạn để hợp thức hóa điểm nằm trong vùng cấm.

