> **Công thức và state cập nhật:** [STAT-06](72_STAT_06_CONG_THUC_COMBAT.md), [STAT-07](73_STAT_07_TRAN_CHI_SO_VA_KHONG_CHE.md), [STAT-08](74_STAT_08_GIAM_GIAP_VA_XUYEN.md), [STAT-09](75_STAT_09_EFFECT_STACK_VA_VONG_DOI.md) chốt pipeline shield/shred/CC và effect policy V1; số mỗi skill/DoT vẫn thuộc kit/STAT-10.

# Danh mục trạng thái — buff, debuff, khống chế và lớp hấp thụ

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0  
**Trạng thái:** Đặc tả mở rộng ý nghĩa và hình ảnh; chưa có bảng số cân bằng hoặc triển khai.  
**Phạm vi:** MMORPG. Bổ sung ART-05, làm đầu vào COMBAT/STAT/SKILL; giữ nguyên thủ thành.

## 1. Những khái niệm phải tách

Giáp giảm sát thương theo công thức phòng thủ; kháng phép xử lý sát thương phép theo catalog được STAT chốt. Giáp ảo ở tài liệu này được hiểu là **lá chắn hấp thụ một lượng sát thương**, không phải tăng chỉ số giáp. Hồi HP, tăng HP tối đa và tạo lá chắn là ba cơ chế khác nhau.

Hất tung là khống chế làm mất điều khiển kèm chuyển động lên/đáp; trói chân cấm tự di chuyển nhưng không tự cấm đánh/cast; làm chậm chỉ giảm một chỉ số được nêu. Chảy máu, độc và bỏng là các effect riêng, không dùng chung timer chỉ vì đều là DoT.

Mỗi kỹ năng khai báo magnitude, duration, nguồn, nhóm cộng dồn, giới hạn stack, điều kiện refresh, tick, quyền cleanse, quy tắc miễn nhiễm, tác động boss và visual profile. Không chọn con số ngẫu nhiên trong tài liệu mỹ thuật.

## 2. Khống chế và hạn chế thao tác

| Trạng thái | Ý nghĩa thiết kế | Icon và dấu trong cảnh | Biên cần ghi rõ |
|---|---|---|---|
| Choáng | Không tự di chuyển, đánh hoặc cast trong thời hạn. | Vòng xoắn trên đầu. | Ngắt kỹ năng đang niệm theo interrupt policy; không tự dừng mọi DoT đã tồn tại. |
| Hất tung | Mất điều khiển trong pha nâng/giữ/đáp được khai báo. | Icon người với mũi tên lên; bóng giữ nền, thân nhấc lên và bụi nhỏ lúc đáp. | Không đồng nghĩa bay gameplay, không tự miễn damage mặt đất hoặc đổi tầng. |
| Đẩy lùi/kéo | Cưỡng bức dịch chuyển theo vector/đích hợp lệ. | Mũi tên theo lực, vệt ngắn dưới chân. | Dừng tại collision; rơi vực/chuyển tầng chỉ khi kỹ năng và map cho phép. |
| Trói chân | Không di chuyển tự nguyện, vẫn đánh/cast nếu điều kiện khác cho phép. | Icon chân bị khóa; dây/rễ/ấn gắn chân theo nguồn. | Khóa dash/di chuyển bằng skill ở mặc định; thoát trói chỉ bởi kỹ năng được đánh dấu cho phép. |
| Làm chậm chạy | Giảm tốc độ di chuyển. | Bước chân + mũi tên xuống, dấu nguồn dưới chân. | Không giảm tốc đánh hoặc tốc niệm nếu không khai báo. |
| Làm chậm đánh | Giảm tốc độ đánh. | Vũ khí + mũi tên xuống/nhịp chậm. | Không tự giảm tốc chạy; không reset animation mỗi frame. |
| Làm chậm niệm | Tăng thời gian chuẩn bị kỹ năng chịu ảnh hưởng. | Dấu niệm/đồng hồ + mũi tên xuống. | Không tự tăng cooldown hoặc thời gian channel nếu không quy định. |
| Đóng băng | Khóa di chuyển, đánh và cast theo effect. | Tinh thể/khối băng gọn, không che thanh máu. | Không tự tăng damage nhận hay vỡ băng khi trúng đòn nếu skill chưa quy định. |
| Câm lặng | Chặn cast các skill có tag chịu câm lặng. | Miệng/ấn bị gạch. | Không tự khóa đánh thường hoặc mọi vật phẩm. |
| Giải giới | Chặn đánh thường vũ khí và skill cần vũ khí được khai báo. | Vũ khí bị gạch/khóa. | Không phá/hủy item thật; phép không cần vũ khí xét riêng. |
| Ngủ | Mất điều khiển, có chính sách thức dậy riêng. | Mí mắt/trăng nhỏ. | Skill phải ghi damage nào đánh thức; không đoán mọi tick đều giống nhau. |
| Sợ hãi | Mất điều khiển định hướng theo AI effect. | Mặt hoảng/đường run, dấu hướng ngắn. | Không chạy xuyên vật cản hoặc tự rơi vực nếu không được cho phép. |
| Khiêu khích | Tác động lựa chọn mục tiêu của AI theo luật aggro. | Mặt/đích có móc, dấu nguồn. | Bản đầu không mặc định ép camera/điều khiển người chơi PvP; cần hồ sơ riêng. |

Hất tung trên Kỵ Sĩ tác động đơn vị người cưỡi; ngựa/người/giáp/cánh dùng một transform trình bày để không tách rời. Không tự ép xuống ngựa, đổi quyền skill hoặc cho ngựa thành pet bị hất riêng. Với boss khổng lồ chỉ dùng mức nhấc/animation hợp lệ; boss chống hất vẫn báo Miễn nhiễm nếu đúng luật, không giả nhấc hình rồi logic vẫn chạy bình thường.

Root, stun và airborne cùng tồn tại phải được tổng hợp quyền hành động từ state; khi hết một effect, không bật chạy nếu còn effect khác khóa. Một vòng xoắn không đại diện mọi CC; icon riêng giúp biết còn được cast hay không.

## 3. Suy giảm phòng thủ và chỉ số

| Trạng thái | Ý nghĩa | Hiển thị |
|---|---|---|
| Giảm giáp | Giảm chỉ số giáp mục tiêu theo công thức STAT. | Khiên vật lý nứt + mũi tên xuống; icon stack/timer. |
| Giảm kháng phép | Giảm kháng phép hoặc nhóm kháng được chỉ rõ. | Lăng kính/ấn phép nứt + mũi tên xuống; tooltip ghi phạm vi kháng. |
| Xuyên giáp/xuyên kháng | Thuộc tính của nguồn đánh khi tính damage; không tự là debuff trên đích. | Hiện trong chỉ số/tooltip hoặc dấu proc khi thật có; không luôn gắn icon giảm giáp lên quái. |
| Tăng sát thương nhận | Hệ số riêng cho nhóm damage được khai báo. | Mục tiêu nứt/đích + mũi tên vào; không dùng icon giảm giáp. |
| Giảm công/phép | Giảm chỉ số tấn công hoặc hiệu lực được chỉ rõ. | Vũ khí/ấn phép + mũi tên xuống. |
| Giảm hồi phục | Giảm healing nhận hoặc healing gây ra theo tag riêng. | Dấu cộng bị khía và chiều tác động trong tooltip. |
| Giảm HP tối đa | Sửa max HP, giữ quy tắc clamp/chuyển đổi được STAT chốt. | Tim + mũi tên xuống; không giả thành DoT. |
| Giảm chính xác | Giảm thông số chính xác nếu hệ combat có. | Tâm ngắm lệch. Không tự thêm roll trượt vào hệ chưa chọn. |

Giảm giáp và giảm kháng có ID/stack group riêng. Loại toàn bộ kháng và loại một nguyên tố phải có định nghĩa cụ thể; không suy từ màu effect. Không tự cho giá trị âm, vượt cap hoặc xóa phòng thủ boss nếu STAT chưa quy định. Stack dùng chung theo effect trên đích nếu thiết kế như vậy, không tạo mỗi người một tầng giảm vượt giới hạn.

## 4. Damage theo thời gian

| Trạng thái | Hình trên mục tiêu | Dấu tick | Lưu ý |
|---|---|---|---|
| Chảy máu | Vết rách/giọt đỏ sẫm gọn, không máu phun kín màn. | Số mất HP kèm icon giọt/vết cắt trong chế độ chi tiết. | Không mặc định %HP, damage vật lý, bỏ giáp hoặc tăng khi di chuyển. |
| Bỏng | Tàn lửa/than nóng theo nguồn. | Số tick + icon lửa. | Phân biệt người đang thi triển Hỏa với mục tiêu bị bỏng. |
| Độc | Giọt độc/bong bóng nhỏ, stack nếu có. | Số tick + icon độc. | Không mặc định mọi độc đều 8 stack hoặc tạo vệt khi chết như ngọc thủ thành. |
| Ăn mòn/nguyền rủa | Vòng khuyết/ấn nứt theo định nghĩa. | Icon nguồn rõ. | Chỉ tạo effect gameplay mới khi có skill; không gọi mọi Bóng Tối là DoT. |

Tick theo thời gian authoritative, không theo FPS/particle; dọn khi chết/expire theo chính sách. Khi có DoT kèm giảm giáp, cần hai thành phần dữ liệu nhưng hình gọn, tooltip liệt kê đầy đủ. Tick bằng 0 không phát số damage giả. Chảy máu không tự mang cơ chế hút máu cho người gây.

## 5. Tăng cường và bảo vệ

| Trạng thái | Ý nghĩa | Icon/hình |
|---|---|---|
| Tăng giáp | Tăng chỉ số giáp; không tạo pool HP mới. | Khiên đặc + mũi tên lên, viền bảo hộ mỏng. |
| Tăng kháng phép | Tăng kháng phép/nhóm kháng chỉ rõ. | Lăng kính/ấn phép nguyên vẹn + mũi tên lên. |
| Giáp ảo/lá chắn | Pool hấp thụ damage hợp lệ, có lượng còn lại và hạn. | Khiên rỗng có phần tô thể hiện pool; dải shield cạnh HP và vòng chắn gọn. |
| Giảm damage nhận | Hệ số riêng, không đồng nghĩa thêm giáp. | Khiên có mũi tên hướng vào và dấu giảm. |
| Chặn đòn | Trạng thái/cửa sổ block theo hệ combat được chọn. | Khiên chặn và flash tại va chạm hợp lệ. Không luôn hiện Chặn nếu chưa có kết quả. |
| Miễn nhiễm khống chế | Chỉ các nhóm CC được khai báo. | Khóa mở/ấn bảo hộ có tag; không dùng chữ Vô địch. |
| Bất tử/miễn damage | Chỉ nếu skill được thiết kế cho phép, ghi rõ giới hạn. | Dấu bảo hộ đặc biệt; tách khỏi lá chắn và kháng CC. |
| Hồi HP theo thời gian | Hồi từng tick thật. | Tim/dấu cộng với vòng thời hạn; dấu cộng trong cảnh lúc hồi. |
| Tăng HP tối đa | Tăng sức chứa HP theo STAT. | Tim + mũi tên lên; không tự hồi đầy lượng tăng. |
| Tăng tốc chạy/đánh/niệm | Ba thuộc tính riêng. | Bước chân/vũ khí/ấn niệm + mũi tên lên; không một icon Tốc độ chung. |
| Tăng công/phép/crit | Chỉ số cụ thể. | Vũ khí/ấn phép/tia crit tương ứng. Không tự vượt cap do hình sáng hơn. |
| Phản damage | Cơ chế phản được khai báo. | Khiên + mũi tên trả lại, flash khi proc thật. | 

Lá chắn cần khai báo loại damage hấp thụ, thứ tự pool khi nhiều nguồn, refresh/thay thế/cộng, có được heal lá chắn không và hạn. Chưa chốt thứ tự tính giáp so với shield trong tài liệu mỹ thuật; COMBAT phải xác định cùng công thức. UI hiển thị pool thực, không trộn shield vào HP tối đa hoặc che số HP. Shield vỡ phát hiệu ứng vỡ ngắn, hết hạn tan nhẹ; dispel có phản hồi khác nếu có.

## 6. Nhóm kỹ thuật và quy tắc dùng chung

Không dùng một cờ isStunned cho mọi trạng thái. Effect khai báo khóa hành động, thay chỉ số, dịch chuyển cưỡng bức, DoT/HoT, shield hoặc sự kiện proc. Hệ tổng hợp tính quyền cuối; VFX chỉ đọc kết quả. Catalog này không yêu cầu mỗi dòng một subsystem độc lập.

Quy tắc làm mới mặc định phải nằm ở effect definition, không tùy từng client. Khác nguồn nhưng cùng stack group áp hạn chung; khác loại dùng ID riêng. Mỗi skill phải chốt cộng dồn/refresh/thay thế/ưu tiên và quyền attribution trước triển khai. Không tự chọn một luật global cộng mọi buff/debuff.

Cleanse bất lợi, dispel buff, miễn nhiễm và kháng thời gian là bốn khái niệm riêng. Một cleanse không xóa mọi root/stun/poison chỉ vì cùng bất lợi; phải khớp tag, số lượng và ưu tiên. Effect không được thanh tẩy cần nhãn rõ. Boss dùng resistance profile theo trạng thái, không mặc định miễn toàn bộ hoặc chịu tất cả.

Không tự thêm diminishing returns CC PvP, hệ accuracy hoặc chỉ số mới từ một icon trong danh sách; đây là các đầu việc cân bằng cần chốt riêng.

## 7. Cửa sổ thông tin và tình huống kiểm chứng sau

Panel hiệu ứng chia Có lợi/Bất lợi; mỗi icon có tên, nguồn, thời gian, stack, giá trị hiệu lực nếu được phép và cách gỡ nếu nhân vật biết. Cùng hiệu ứng có nhiều thành phần ghi rõ từng phần, không đưa một tên chung làm người chơi hiểu nhầm. Trên đầu chỉ ưu tiên khống chế hiện tại và trạng thái quan trọng; ART-06 chốt số lượng và mức gọn.

Các tình huống cần thử: root vẫn đánh được; airborne không đi xuyên cầu; stun hết nhưng root còn; shield vỡ không trừ HP hai lần; hai người giảm giáp không vượt cap chung; độc xanh không nhầm heal; bleed/burn tick riêng; Kỵ Sĩ bị hất không tách khỏi ngựa. Đây là tiêu chí chưa thực hiện, không kết quả kiểm thử.

## 8. Bàn giao và giới hạn

Bổ sung ART-05 về ngữ nghĩa/ký hiệu; không hoàn thiện thay COMBAT, STAT, ART-06 hoặc 19 bộ kỹ năng. Chưa chốt duration, proc chance, tick damage, boss cap, hệ kháng hoặc thứ tự công thức shield. Những thông số này phải có bảng cấu hình khi thiết kế skill, không hardcode từ ví dụ thủ thành.

Tiến độ giữ **13 hoàn thiện, 6 một phần, 494 chưa thiết kế / 513**. Đây là cập nhật tài liệu, chưa có hình sản xuất hoặc gameplay mới.


**Catalog trạng thái logic hiện hành · 21/10/2026:** [Catalog trạng thái logic hiện hành](102_COMBAT_07_CATALOG_TRANG_THAI_V1.md). Hồ sơ bổ sung thay các điểm để mở trước đó khi xung đột trong phạm vi mục; giữ cap60/nội dung45 và công thức STAT hiện hành. Chưa triển khai/kiểm thử.
