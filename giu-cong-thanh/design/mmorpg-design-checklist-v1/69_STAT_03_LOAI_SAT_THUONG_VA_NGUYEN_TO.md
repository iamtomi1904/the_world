# STAT-03 — Hai kênh phòng thủ và tag nguyên tố

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0  
**Trạng thái:** Hoàn thiện mô hình V1, chưa code/playtest. [Nghiên cứu](65_THAM_KHAO_HE_CHI_SO_MMORPG_2_5D.md). Chỉ MMORPG, thủ thành giữ nguyên.

## 1. School khác element

Bản đầu có vật lý dùng công vật lý/giáp và phép dùng công phép/kháng phép. Mỗi damage component có một school và tối đa một element cơ sở. Neutral là không nguyên tố. Fire/Water/Lightning/Earth/Wood/Wind/Light/Dark/Poison là tag bổ trợ, không chín rating phòng thủ riêng.

Chém lửa có thể là vật lý-Fire nếu skill định nghĩa, không vừa giảm bởi giáp vừa kháng phép. Cầu lửa thường phép-Fire. Heal không là damage Light bị giáp đối phương giảm. Băng thuộc Water về element V1 nhưng có status/glyph riêng, chưa tạo bảng kháng Băng thứ mười.

Bleed là trạng thái, không tự là damage bỏ giáp; fixture vật lý-Neutral phải được kit xác nhận. Burn thường phép-Fire nhưng skill phải khai báo. Tên nghề Tử Linh/Mộc hoặc hình sáng/tối không tự quyết school.

## 2. Modifier nguyên tố

Chưa mở chín rating resist trên nhân vật. Dùng modifier mục tiêu theo element: E=clamp(1+ΣtakenIncrease_element−ΣtakenReduction_element,0,50,1,50). Đây là cấu hình V1. Gộp một nhóm, không nhân từng món thành vô hạn. Elemental immunity là rule encounter được khai báo, không đạt bằng stat thường.

Damage increase nguyên tố phía người đánh gộp nhóm damageIncrease ở STAT-06, không tính lặp trong E. Chưa tạo vòng khắc chế lửa-thủy-thổ hoặc bonus tự động theo màu quái; ENEMY/BOSS phải thiết kế profile theo lore.

## 3. Multi-component

Đòn70% vật lý/30% phép có tổng hệ số cùng ngân sách gốc; mỗi component dùng đúng defense/penetration rồi cộng packet. Một hit nhiều component không tự có nhiều proc/crit. Hit và component có ID khác nhau.

Xuyên giáp không xuyên kháng phép; xuyên kháng là stat riêng cùng policy rare/cap, không một affix5% tăng cả hai mặc định. Nếu skill chuyển school cần preview và profile rõ, không hưởng đồng thời cả hai bộ lợi ích miễn phí.

## 4. True damage và môi trường

True damage không có trong pool item/skill thông thường V1. Cơ chế đặc biệt phải có definition riêng, không dùng true damage để chữa công thức khó cân. Dung nham/%HP là environmental packet theo profile; mặc định không crit/lifesteal/reflect. Có bỏ giáp/shield không phải khai báo, không suy từ %HP.

Mỗi packet có owner/ability/eventId, school/element/tags, hit/crit/proc policy. Đây là hợp đồng nghiệp vụ chưa schema. Tooltip tách school và element; không ghi mọi phép là “damage nguyên tố cộng thêm”. STAT-10 còn phải định nghĩa DoT/HoT đầy đủ.
