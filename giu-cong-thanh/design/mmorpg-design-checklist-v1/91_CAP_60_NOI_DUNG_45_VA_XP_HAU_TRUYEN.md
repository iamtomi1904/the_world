> **Mở rộng phe/PvP ·22/10/2026:** [Hai phe, bang hội và năm loại không gian mới](186_FACTION_01_HAI_PHE_BANG_HOI_VA_CHIEN_TRUONG.md). Chọn phe khi chuyển chức15; W06cấp40–60cóPKđối phe, samefactionchỉđấu trong giải chính thức. Thay giới hạn “khôngmap46–60/chưaPvP” riêng phạm vi mới, giữnguyên5vùngPvEcũ/cap60. Checklist **525mục:119hoànthiện /11mộtphần /395chưa thiết kế**. Chưa code/vẽ.

# Cập nhật trần60 — nội dung45 và luyện cấp dài hạn

**Ngày:**21/10/2026 · **Phiên bản:**1.0  
**Nguồn:** chủ dự án nâng cap nhân vật60 nhưng map chỉ đến45, đoạn45→60 rất lâu. Các công thức và điểm thưởng dưới đây là phương án trợ lý thiết kế theo ủy quyền.  
**Phạm vi:** MMORPG2.5D pixelV4; chưa code hoặc playtest, thủ thành giữ nguyên. Hồ sơ này thay quy tắc cap45 khi xung đột.

## 1. Tách trần nhân vật khỏi trần nội dung

Cap nhân vật bản đầu60; năm vùng giữ1–10,11–20,21–30,31–40,41–45. Không tạo map46–60, chuyển nghề mới hoặc tự nâng cấp quái thường/boss lên60. Gear của đợt nội dung này vẫn theo tier/cấp yêu cầu tối đa45; không tự có đồ bắt level60 mới dùng.

Cấp45 là mốc hoàn thành tuyến nội dung chính và bước vào tiến trình dài hạn, không là capXP nữa. Tất cả manh mối truyện/dungeon tuyến chính phải tiếp cận được ở mức45 theo thiết kế, không ép farm lên60 mới xem kết thúc nội dung45. Người60 có lợi ích số từ tăng trưởng/AP, không thêm quyền bay/vật phẩm nạp hoặc bỏ cơ chế boss.

AlphaV01 cap10 giữ nguyên cho lát cắt thử. Chỉ server bản đầy đủ đặt cap60; không dùng file client để vượt cap. Nhân vật thường trực/mùa không wipe giữ nguyên.

## 2. Đường XP hai đoạn

Từ1→45 giữ T(L)=100+20L+10L², L1…44; tổng317.900XP. Không tăng retroactive để làm lại đoạn đầu lâu hơn.

Từ45→60 dùng Tlate(L)=ceil_to_100[50.000×1,20^(L−45)], L45…59. ceil_to_100 làm tròn lên bội100 một lần ở từng ngưỡng; bảng server version hóa là nguồn thật, client không tự tính float để quyết level.

| Lên cấp | XP cần |
|---|---:|
|45→46|50.000|
|46→47|60.000|
|47→48|72.000|
|48→49|86.400|
|49→50|103.700|
|50→51|124.500|
|51→52|149.300|
|52→53|179.200|
|53→54|215.000|
|54→55|258.000|
|55→56|309.600|
|56→57|371.600|
|57→58|445.900|
|58→59|535.000|
|59→60|642.000|

Tổng45→60 là **3.602.200XP**, khoảng11,33lần tổng1→45. Tổng1→60 là3.920.100XP. Vì reward chính một lần phần lớn đã nhận và killXP hậu truyện có hệ số riêng, đoạn này còn chậm hơn so tỷ lệXP đơn thuần. Chưa cam kết số giờ/ngày đạt60 khi chưa đo route farm/dungeon/nhóm.

38–57giờ trong LEVEL-01 chỉ mục tiêu lần đầu đi nội dung1–45, không thời gian lên60. Không khóa ngày hoặc energy mới để kéo dài giả; không bánXP/skip/paidboost trong thiết kế hiện hành.

## 3. XP trên map cũ không được về0

Quy tắc cũ d≤−11 choXP0 vẫn áp ngoài ngoại lệ hậu truyện. Khi người nhận có cấp45…59 và quái tự nhiên hợp lệ cấp40…45: dùng **Flevel_hậu=0,50** thay bảng chênh cấp thông thường. Cố định nửaXP trong dải này, không giảm tiếp về0 ở56…59; mob dưới40 vẫn theo bảng cũ để tránh one-shot farm tân thủ.

Quái45 B=98, solo hậu truyện nhận49XP trước các modifier hợp lệ khác; boss dungeon45 grade20 có980killXP ở cùng điều kiện. Reward quest/objective chưa nhận vẫn cấp đúng bảng một lần; không tự phát lại rewardmain để luyện. Mob do pet/player/proc sinh, dummy/ally hoặc bossreset vẫn khôngXP mặc định.

Nguồn khác như sự kiện/questlặp chỉ có khi đã thiết kế reward/cap; không bịa daily mới để bảo đảm số giờ đạt60. Drop/luck không tăngXP. Cap60 không nhận XPnhân vật, không kho chờ expansion hoặc đổi vàng/AP ngầm.

## 4. Nhóm và hỗ trợ

Công thức pool/chia theo LEVEL-03 giữ, nhưng recipient cap là60 thay45. Người45 vẫn nhậnXP và vào n bình thường; người60 hỗ trợ không lấy share hoặc tạo bonusXP chỉ vì có mặt.

Fcarry0,25 vẫn áp khi giúp người dưới45 và chênh trên5cấp trong party. Nếu recipient và người giúp đều≥45 trong nội dung40–45 thì không áp Fcarry thêm, chỉ dùng Flevel_hậu0,50 và sharepool; tránh phạt nhóm luyện dài hạn càng lúc càng khác cấp. Người dưới45 vẫn dùng luật cũ, không hưởng ngoại lệ bằng cách đi cùng người60.

Không mở level sync hoặc tự hạ gear/skill. Quyền tham gia/contribution/encounter/range và chốngAFK giữ. XP ngoại lệ không cấp loot riêng hoặc tiền nhân đôi.

## 5. Điểm sau45 và kỹ năng

Đề xuất tiếp tục3AP/cấp46…60, thêm45AP, tổng177AP ở60. Giới hạn phân90AP/một thuộc tính giữ, buộc phần thêm đi vào nguồn phụ thay vì cứ tăng primary. Nền tự nhiên vẫn5+floor((L−1)/5): cấp60 mỗi root16. Các công thức tăng trưởng cấp ở STAT-02 và K theo sourcelevel tiếp tục tới60, chưa tự thay hệ số skill hoặc gear.

SP giữ35, TP giữ11 sau45; rankcap5, nodecost và mốc nghề15/nhánh30 giữ. Lý do: không để thêm15cấp xóa lựa chọn build hiện tại bằng quá nhiều điểm. Phần thưởng sau45 là AP/tăng trưởng/chọn thêm hướng phụ; kỹ năng mới/nhánh mới chỉ khi có thiết kế mở rộng riêng. Hai preset không thêm poolAP,13ôkhôngthêmô.

Nội tại chủ đạo hồ sơ78 tính AP/gear như cũ với diminishing, có thể mạnh hơn ở60; không tự tăng cmax hoặc nguồnhaste/pen. Ví dụ melee90STR/87VIT ở60: STR106,VIT103,INT16; HP4010,mana360,melee340+Wp,giáp155,2+đồ trước modifier. Đây là fixture để cân lại EHP/boss, không cam kết balance đạt. Cấp45fixture cũ vẫn đúng tại45.

## 6. UI, dữ liệu và cap

XPbar45hiển thị “Tiến trình dài hạn45–60”, x/Tlate(L), mapkhuyến nghị41–45 và điều kiện nhậnXP. Không ghi “đã max” ở45. Tooltip nêu rõ quái40–45 nhận50%XPgốc trong dải này, không penaltyẩn. SheetC/K tách capnhânvật60/rank5/nội dung45/AP177/SP35/TP11.

Server lưu level/currentXP và version threshold; migration từ cap45 giữ nhân vật45và điểm/quest đã nhận. Không khôi phục XP đã bị bỏ trước cập nhật nếu không có ledger hợp lệ và quyết định bù riêng. Cấp50/55/60 có thông báo thành tựu tiến trình gọn, không tự tạo rewardstat hoặc currency mới.

## 7. Kiểm chứng còn cần và checklist

Phải đối chiếu tốcXP solo/nhóm/dungeon, tính reachable56–60, chốngmobreset/duplicategrant, chuyển cap/migration, nXPpool khi có người60 và cân45vs60 trên nội dung45. Chưa code hoặc test game; chỉ kiểm arithmetic tài liệu.

Không có map46–60 là quyết định nội dung, không thiếu file để placeholder. Các taskLEVEL/STAT vẫn là đặc tả đã cập nhật, chưa đạt balancing thực. Mục thống kê giữ50hoàn thiện/10mộtphần/453chưa thiết kế; không tăng sốtask chỉ vì thaycap. Thủ thành giữ nguyên.


**Bổ sung LEVEL/COMBAT · 21/10/2026:** [Bổ sung LEVEL/COMBAT](103_TONG_HOP_LEVEL_COMBAT_10_MUC.md). Hồ sơ bổ sung thay các điểm để mở trước đó khi xung đột trong phạm vi mục; giữ cap60/nội dung45 và công thức STAT hiện hành. Chưa triển khai/kiểm thử.
