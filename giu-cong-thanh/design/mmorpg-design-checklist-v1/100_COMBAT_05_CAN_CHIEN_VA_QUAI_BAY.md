# COMBAT-05 — Cận chiến, quái bay và ngựa tiến hóa

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0. Quy tắc quyền tác chiến V1, chưa kit/AI/sprite. [Nghiên cứu](92_THAM_KHAO_LEVEL_VA_COMBAT_MMORPG.md). Không tự mang cơ chế ngọc thủ thành sang MMORPG.

## 1. Bay phải là gameplay tag

Tách **hover trang trí**, **quái bay thấp**, **mục tiêu cao ngoài đợt tấn công**, **hất tung** và **ngựa mọc cánh**. Thân sprite nhấc lên/bóng lớn hơn không tự tạo Flying tag. Hất tung giữ miền mặt đất và vẫn chịu đòn hợp lệ, không đổi faction hoặc quyền skill.

Fixture quái bay thấp: hurt volume đáy+1,8U, đỉnh+2,8U trên mặt nền tham chiếu; neo chân/bóng theo ground projection. Quái cao có envelope+3,5…4,5U; V1 dùng làm pha chuẩn bị/không targetable nếu encounter chưa cho counter cụ thể. Không đặt mob bắt buộc bay cao vĩnh viễn mà melee không có cách xử lý.

## 2. Ma trận quyền nền

| Nguồn | Đất | Bay thấp | Bay cao V1 |
|---|---|---|---|
| Tân Binh/melee thường |Có theo hitbox/tầm|Không, envelope0…1,5U không chạm|Không|
| Cung/pháp khí projectile |Có|Có khi aimPoint/LoS/envelope cho phép|Chỉ pha encounter cho phép; không tự bắn mục tiêu cảnh|
| Melee có skill đối không |Có nếu definition|Có theo skill, cùng ngân sách/cooldown|Chỉ whitelist encounter/skill, chưa mặc định|
| Kỵ Sĩ thường trên ngựa |Theo vũ khí|Không tự được vì ngồi cao|Không|
| Thánh/Hắc trên ngựa đã tiến hóa |Theo vũ khí, tầm đất không đổi|Đòn thường có airEnvelope0…3,2U|Không|
| Nghề khác cưỡi thú di chuyển |Không tấn công khi còn cưỡi|Không|Không|

Kỵ Sĩ Thánh/Hắc vẫn đánh melee: animation vung/nâng trọng kiếm tới hướng con trỏ, air trail theo weaponSocket; **không tự bắn đạn**. Có cánh không tăng navigationZ, vượt sông/núi hoặc miễn AoE. Hộ Vệ Thánh chưa tự được quyền cánh/airEnvelope của hai nhánh; cần skill đối không có thiết kế riêng nếu chọn.

## 3. Bảo đảm đường solo

**Quyết định của chủ dự án: vùng tân thủ V01 cấp1–10 chắc chắn không có quái bay.** Quy tắc áp dụng quái thường, tinh anh, boss, dungeon và đợt sinh quái/sự kiện chiến đấu trong V01; không chèn pha bay vào boss tân thủ. Quái bị hất tung vẫn là mục tiêu mặt đất theo luật khống chế, không phải quái bay. Không cần bài học đối không hoặc vũ khí tầm xa để vượt nội dung tân thủ.

Từ vùng sau V01 mới có thể giới thiệu quái bay; không mặc định V02 phải có. Quái bay thấp xuất hiện trong mainstory phải có hành vi sà xuống/tạm đáp để melee tấn công. Profile mẫu: trên không tối đa6s → báo hiệu đáp1s → vulnerable ở envelope đất tối thiểu4s, rồi mới cất cánh khi không bị trạng thái ngăn. Không biến boss hardCC immune thành bắt buộc dùng root; cơ chế đáp do encounter, không phụ thuộc player có skill khống chế.

Đây là constraint cho MOB/BOSS author, chưa profile AI đã làm. Không hoàn thành MOB/BOSS từ các con số này. Quái có thể tiếp tục đánh khi đáp theo telegraph; khoảng vulnerable không tự là stun. Mỗi dungeon cốt truyện phải kiểm thời gian solo melee/healer, không dùng đàn quái bay vĩnh viễn làm khóa class.

Trước15 Tân Binh vẫn có thể dùng họ vũ khí nền được cấp hợp lệ, nhưng không bắt đổi class để làm truyện. Tại V01, vũ khí tầm xa chỉ là lựa chọn phong cách chiến đấu, không đáp án cho quái bay vì vùng này không có quái bay. Nếu vùng sau giới thiệu quái bay khi người chơi chưa chuyển nghề, encounter vẫn cần cửa sổ melee. Universal skill đối không có thể phát triển sau, không tự grant một skill miễn phí ngoài cây.

## 4. Hướng ngắm và tương tác modifier

Đánh melee hướng tự do vẫn tạo volume, không cần selected target; quái bay nằm đúng envelope/tầm mới trúng. Projectile khi hover một flying unit nhìn thấy thì lấy aim anchor trong hurt volume, direction thẳng tại Release, không theo dõi tiếp. Khi bắn đất trống, đạn đi theo điểm ray/cao độ profile, không tự săn địch bay ngoài hướng.

Không có “sở hữu ngọc bất kỳ = tự bắn xa” trong V1 MMO. Nếu ITEM/SKILL sau này tạo modifier airProjectile: phải khai báo allowed classes, chỉ kích hoạt bởi flying target hợp lệ theo hướng, range/speed/mask/cost/proc, không đồng thời tạo melee+projectile cho một đòn và không tăng tầm đất. Không tạo gem placeholders hoặc shop mua ngọc từ hồ sơ này.

Kỹ năng chém đối không không mặc định xuyên sàn; groundProjection cùng miền chiến đấu và LoS kiểm theo COMBAT-04. Tầm ngang đòn thường Thánh/Hắc vẫn bằng family ở COMBAT-03, không tăng theo cánh ngựa.

## 5. Thông tin và kiểm sau

Target frame có glyph Bay thấp/Bay cao hoặc Đang sà xuống; skill có tag Đối không khi đúng. Khi hụt do cao độ báo một thông báo gọn có cooldown trình bày, không spam mỗi frame giữ đánh. Không phát hit flash/damage giả vào đích không hợp lệ.

Kiểm sau: danh mục spawn/quái/boss/dungeon/sự kiện V01 không có quái hoặc pha bay; Tân Binh gặp pha đáp ở vùng sau nếu có; melee không lén bắn ground target; Thánh/Hắc trên ngựa tiến hóa đúng tầm; đi bộ/mount khác mất quyền đúng; projectile lỡ quái bay; bridge/high target; mất ngựa giữa Prepare hủy skill không giữ airEnvelope. Chưa triển khai và không thay hệ quái bay của thủ thành.
