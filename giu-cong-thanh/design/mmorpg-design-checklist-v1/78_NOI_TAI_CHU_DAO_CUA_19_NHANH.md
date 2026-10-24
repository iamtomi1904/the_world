> **Quyết định hiện hành · 21/10/2026:** [Trần nhân vật 60, nội dung đến 45](91_CAP_60_NOI_DUNG_45_VA_XP_HAU_TRUYEN.md). Giữ năm vùng hiện tại; cấp 45→60 luyện dài hạn. AP ở 45/60 là 132/177; SP giữ 35, TP giữ 11 sau 45. Quy tắc XP hậu truyện thay bảng chênh cấp khi đủ điều kiện. Các số cấp 45 trong ví dụ vẫn là mốc nội dung, không phải trần nhân vật. Chưa triển khai vào game.

# Nội tại thuộc tính chủ đạo — một hoặc hai chỉ số theo nhánh

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0  
**Nguồn:** chủ dự án yêu cầu đầu tư thuộc tính làm mạnh kỹ năng theo từng nhánh; [nghiên cứu nguồn chính thức](77_THAM_KHAO_NOI_TAI_CHUYEN_HOA_THUOC_TINH.md).  
**Trạng thái:** Đã thiết kế mô hình, profile19nhánh và ví dụ; chưa hoàn thiện mọi kit hoặc cân bằng thực tế. Chỉ MMORPG2.5D pixel V4; thủ thành giữ nguyên.

## 1. Hai lớp lợi ích

Thuộc tính gốc vẫn chuyển công/HP/mana/giáp theo STAT-01/02. Nội tại nhánh là lớp khác: một phần đầu tư chủ đạo tăng hiệu quả các kỹ năng có tag của nhánh. Không đổi STR của mọi nghề thành cùng một passive mới hoặc cho mọi chỉ số tăng mọi skill.

Ví dụ STR tăng công kiếm chung; khi là Thánh Kỵ Sĩ, STR/VIT còn cộng một lượng tăng damage đòn thánh và pool bảo hộ. VIT không vì thế trở thành công vật lý chung. Nhánh khác chuyển cùngVIT sang lợi ích khác đã khai báo. Caster không nhận công từ STR chỉ vì bảng passive có hai stat.

## 2. Vị trí trong tiến trình

Tân Binh chỉ lợi ích chung, không có nghề ngầm. Nghề15 có nội tại nghề theo kit; chuyên sâu30 mở profile chuyển hóa nhánh. Profile này là phần của nội tại lõi nhánh đã dự kiến, không một nội tại miễn phí ngoài budget và không chiếm ô trong13hotbar hoặc ba ô passive tùy chọn.

Nội tại chuyển hóa có thể cùng danh tính với nội tại bản sắc, nhưng chỉ một nguồn tính. Thánh/Hắc vẫn giữ tiến hóa ngựa theo hồ sơ34 trong ngân sách nội tại; không xóa cánh hoặc nhân thành hai quỹ sức mạnh. Chưa cộng SP/TP hoặc tạo sách học mới để mở profile lõi.

## 3. Nguồn điểm được chuyển hóa

V1: E_X=max(0,AP_X+flatRootGear_X). Chỉ tính AP đã phân và điểm thuộc tính phẳng từ trang bị/khảm/nâng đang mặc hợp lệ, sau điều kiện quyền. Không tính nền tự nhiênN, %tăng thuộc tính, buff tạm, aura, đồ mỹ phẩm hoặc chính kết quả chuyển hóa.

Lý do: đầu tư và chọn đồ có ý nghĩa, nhưng không tạo vòng buff INT→heal→HP→INT. Stat hiệu lực chung vẫn chịu buff/debuff như thường; profile nội tại chỉ tính trên nguồn đầu tư bền nêu trên. Nếu tương lai muốn buff tạm tăng chuyển hóa, phải sửa policy có version/budget, không lặng lẽ mở.

## 4. Công thức khởi điểm để cân thử

Chọn u(E)=E/(E+100), E≥0. Không phải công thức của game tham khảo.

- Nhánh một stat: R=u(E_primary).
- Nhánh hai stat: R=0,70×u(E_primary)+0,30×u(E_secondary).
- R∈[0,1), tính lại khi AP/đồ/profile đổi, không grant lặp khi đăng nhập.

Mỗi đầu ra được khai báo: bonus_j=c_j×R. Hệ số c là cấu hình nhánh, tổng trần hệ số thường không quá0,20 trong V1. **0,20 không có nghĩa tăng20% toàn bộ sức mạnh**; damage/heal/petHP không cùng giá trị thực. Đây là biên thiết kế thử để kiểm budget, STAT-11 vẫn phải so DPS/EHP/utility và có thể giảm c.

Không hard breakpoint bắt đầu tư20/50/100 mới chơi được. Mỗi điểm đã có lợi ích liên tục, về sau giảm dần; cây talent có thể đổi hướng phân bổ đầu ra nhưng không mở vô hạn trần. Không bắt người chơi cân50/50;70/30 là trọng số hiệu lực, không hướng dẫn tỷ lệ AP tối ưu.

## 5. Ma trận19nhánh — tên nội tại và đầu ra

Các tên là tên làm việc. D=damage từ skill có tag nhánh; H=healing thực thuộc nhóm chỉ định; S=lượng shield tạo; P=damage đơn vị triệu hồi hợp lệ; V=HPmax của triệu hồi. Mỗi dòng hệ số nhânR, không áp cho mọi event vô điều kiện.

| Nhánh | Nội tại đề xuất | Chủ đạo | Hệ số đầu ra thử / cách chơi |
|---|---|---|---|
| Thánh Kỵ Sĩ | Thánh Ước Trọng Giáp | STR/VIT | D0,12 + S0,08; kiếm thánh và bảo hộ khi cưỡi ngựa. |
| Hắc Kỵ Sĩ | Hắc Ấn Chiến Tâm | STR/INT | D0,14 + H0,06; đòn hắc và hồi từ kỹ năng bản thân được đánh dấu, không tăng lifesteal rate chung. |
| Hộ Vệ Thánh | Thành Lũy Đức Tin | VIT/STR | D0,06 + S0,14; khiên/chùy và pool bảo hộ, không tự tăng DR. |
| Tiên Phong | Thế Giáo Tiên Phong | STR/AGI | D0,20; kỹ năng giáo theo tuyến, không tăng hitbox/range hoặc tốc chạy. |
| Cuồng Chiến | Huyết Ý Bất Khuất | STR/VIT | D0,16 + S0,04; đòn rìu/bảo hộ bản thân nếu kit có, không tạo miễn thương. |
| Phong Kiếm Khách | Kiếm Ý Lưu Phong | STR/AGI | D0,20; skill kiếm gió, không thêm haste/xuyên giáp miễn phí. |
| Sát Thủ | Song Đao Ám Kình | AGI/STR | D0,20; skill song đao, không tự tăng crit chance/stealth duration. |
| Kiếm Sĩ Trọng Kiếm | Trọng Kiếm Chuyên Tâm | STR | D0,20; đòn trọng kiếm chuyên sâu. |
| Lôi Pháp Sư | Lôi Tâm Dẫn Pháp | INT/AGI | D0,16 + S0,04; phépLôi/màn chắn nếu có; không tăng chance stun hoặc số lan tự động. |
| Hỏa Pháp Sư | Hỏa Tâm Chuyên Chú | INT | DirectD0,16 + burnTickD0,04; đường direct và burn tách, không một burn nhận cả hai. |
| Thủy Pháp Sư | Thủy Mạch Bền Bỉ | INT/VIT | D0,12 + S0,08; phép nước/bảo hộ, không tăng thời gian đóng băng vượt cap. |
| Pháp Sư Tử Linh | Khế Ước Cốt Linh | INT/VIT | P0,14 + S0,06 của chủ nếu kit có; không tăng số summon miễn phí. |
| Pháp Sư Ánh Sáng | Quang Tâm Tinh Luyện | INT | D0,16 + S0,04; phép công kích ánh sáng, không tự nhận bộ healer. |
| Pháp Sư Bóng Tối | Hư Ảnh Dẫn Pháp | INT/AGI | D0,20; kỹ năng bóng tối, không tự chuyển sang Tử Linh/độc. |
| Thổ Pháp Sư | Địa Tâm Kiên Cố | INT/VIT | D0,10 + S0,10; đòn thổ/che chắn, không cộngVIT lần nữa thành armor source. |
| Cung Thủ | Xạ Thuật Chuyên Tinh | AGI | D0,20; skill cung, không cộng tầm hoặc xác suất xuyên. |
| Tinh Linh | Khế Ước Sinh Linh | INT/VIT | P0,12 + V0,08; damage/HP đồng hành hợp lệ, không buff cả chủ lẫn pet cùng đường damage. |
| Mục Sư | Thánh Tâm Nhân Ái | INT/VIT | D0,06 + H0,14; giữ solo và hiệu quả heal, không crit heal V1. |
| Pháp Sư Mộc | Sinh Mạch Dưỡng Linh | INT/VIT | D0,04 + HoT0,16; hiệu quả tick hồi từ skillMộc, không đẩy nhanh số tick. |

Đây là profile thiết kế, không tự sinh shield/heal/pet khi kit chưa có chức năng đó. Hook chưa có ghi chưa áp dụng, không chuyển phần chưa dùng sang damage khác một cách âm thầm. Vì vậy không tuyên bố19nhánh đã cân ngang nhau hoặc đã hoàn thiện kit.

## 6. Nối pipeline không cộng lặp

D bonus đi vào source damageIncrease_group đã cap100% STAT-06, không nhân thêm một tầng sau mọi nguồn. Direct/burn/pet dùng tag loại trừ khi cùng dòng, không áp bonus direct lên owner rồi chuyển cả bonus đó sang pet để nhân lần nữa.

H đi vào healDone group theo STAT-06; HoT modifier chỉ áp HoT thay vì thêm lần nữa trên heal đã tăng. S áp vào công thức lượng shield của skill trước cap tổng50%HPmax, không thay armor/DR. V đi vào nhóm %HP của pet definition một lần; tăngmax giữ HP hiện tại, giảm clamp, không freeheal khi đổi đồ/profile.

P vào damageIncrease của pet một lần sau nguồn công chủ hợp lệ; owner không nhận P cho phép mình. Chỉ pet có tag recipient được buff; item proc/reflect/environment/heal thuốc không tự hưởng profile nhánh. Damage đòn thường chỉ hưởng nếu kit khai báo rõ basicAttack tag; mặc định ở đây tăng skill nhánh, không đụng mọi normal attack.

Không tăng haste/penetration/crit chance/CC duration/số pet/AoE radius theo thuộc tính ở V1. Các hướng đó có thể là talent/skill riêng có budget và cap, không lách giới hạn5% affix bằng nội tại chung.

## 7. Ví dụ tính

Chỉ AP, không gear: Thánh Kỵ Sĩ60STR/30VIT đầu tư có R=0,7×60/160+0,3×30/130≈0,331731. Damage skill thánh nhận nguồn+3,9808%; shield+2,6538%, ngoài công/HP/armor chung từ điểm gốc. 1điểmSTR ở đây vừa +2công kiếm, vừa tăngR thêm0,7×100/(160×161)≈0,002717; D thêm≈0,03261 điểm phần trăm. Không ghi thành “mỗiSTR luôn+1%damage”.

Ở45,90STR/42VIT: R≈0,420311; damage+5,0437%, shield+3,3625%. Đổi90STR/42INT khi là Thánh Kỵ Sĩ thì INT không là stat thứ hai của profile: R≈0,331579; damage+3,9789%, nhưng INT vẫn tăngmana/công phép theo chung. Không stat nào biến mất chỉ vì không chủ đạo.

Hỏa90INT: R≈0,473684; direct+7,5789%, burn+1,8947%. Đây là bonus nhánh ngoài công phép đã tăng từINT, không tổngDPS+9,4736% vì direct/burn có tỷ trọng khác nhau. Chưa có skill coefficients/TTK để kết luận build nào tốt nhất.

## 8. UI, item và reset

Trang C có mục Nội tại chủ đạo: hai stat, nguồn AP/gear đang tính, R, bonus thực theo nhóm, cap và đóng góp trước–sau. K có mô tả nội tại và các skill được hưởng; tooltip skill tách Công nền → Nội tại nhánh → Bonus khác khi có dữ liệu đủ. Không hiện con số DPS giả.

Trang bị có root-affix có thể hữu ích khác theo nhánh; không thêm rarity/slot mới hoặc ép mọi món chỉ hai dòng đúng stat. Reset AP miễn phí ngoài combat như67; đổi gear/reset tính lại profile, không grantbuff vĩnh viễn. Nội tại chuyển hóa là nguồn bền có điều kiện nhánh, không bị cleanse như buff tạm.

## 9. Version và việc phải cân sau

Lưu profileId/version, primary/secondary, eligibleSourceMask, normalization100, weights70/30, output hooks vàcoefficients. Backend tính từ sources không nhận R/bonus client. Bốn core stat,132AP,cap90 AP/stat,35SP/11TP giữ nguyên; không thêm điểm vì mở nội tại.

STAT-01/02/04/05/06 cần đọc bổ sung này khi tính nguồn/skill. STAT-11 vẫn phải so dồn một stat, hai stat, tank/healer,gearroot stacking và19nhánh; các tỷ lệ ở bảng là cấu hình thử, không ngầm chứng minh đã nằm trong ngân sách20class. Nguồn sức mạnh này thay một phần phân bổ nội tại nhánh dự kiến, không cộng quỹ thứ tư ngoài35/45/20.

Không đánh dấu SKILL-03/05/06 hoàn thiện từ profile. Tiến độ giữ40hoàn thiện/10mộtphần/463chưa thiết kế; chưa vẽ/code/playtest, thủ thành giữ nguyên.
