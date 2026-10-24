# COMBAT-04 — Hitbox, cao độ và vật cản 2.5D

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0. Đặc tả logic hình học; chưa scene/camera prototype, chưa collision code. [Nghiên cứu](92_THAM_KHAO_LEVEL_VA_COMBAT_MMORPG.md). Giữ sprite V4 trên khối môi trường đơn giản.

## 1. Bốn vùng khác nhau

| Thành phần | Công dụng | Nguồn kích thước |
|---|---|---|
| Navigation footprint | Đi/va tường, khe/cầu có đủ rộng | Body profile worldXY, không alpha sprite/cánh. |
| Hurt volume | Nhận hit của đạn/đòn/skill | Shape theo body/pose/cao độ gameplay, có version. |
| Picking volume | Click/Tab chọn mục tiêu | Có thể nới thao tác0,15U; không gây damage hộ. |
| Visual bounds | Culling/render sprite/weapon/VFX | Bounds atlas gốc+trim offsets+effect, không dùng làm collision. |

Giáp sáng/cánh/đầu kiếm dài không tự đổi hurt volume. Boss tăng hình không tự nhân bán kính; phải duyệt silhouette và hurt profile cùng nhau. Không cắt VFX theo hộp thân, không nới hitbox toàn atlas trong suốt để chữa hình bị cắt.

## 2. Profile mẫu theo đơn vị U

| Body | Footprint radius | Hurt volume tại Z mặt đứng | Ghi chú |
|---|---:|---|---|
| Người/Elf |0,30|capsule r0,32, cao1,40|Cùng ngân sách vùng trúng, ngoại hình không tạo né miễn phí. |
| Người Lùn |0,30|capsule r0,32, cao1,40|Pose thấp là hình, target anchor có thể thấp hơn trong volume; không lợi thế hitbox theo race. |
| Kỵ Sĩ trên ngựa |0,38|hợp hai capsule r0,36, dài thân tổng1,30, cao1,80|Một actor/HP; ngựa không có hit event riêng. |
| Quái nhỏ |0,25|r0,28, cao0,80|Body profile riêng nếu shape khác. |
| Quái vừa |0,40|r0,45, cao1,40|Không áp cho mọi quái chỉ vì cùng cấp. |
| Boss mẫu |0,90|capsule/compound phủ thân chính, cao2,60|Đuôi/cánh trang trí có thể loại, báo telegraph nhất quán. |

Các số là fixture khởi đầu, không quy đổi40px thành1,4U khi chưa có camera mẫu. Mỗi boss asset phải có review chính diện4hướng, idle/attack/move và vùng đánh được minh họa. Compound nhiều phần trả một entityId; cùng action/target chỉ hit một lần, trừ skill nhiều hit đã khai báo.

## 3. Va chạm melee và nới cảm giác trúng

Melee tạo sector/capsule theo COMBAT-03 trên worldXY; dùng intersection với footprint hurt đích và overlap envelope Z. Ví dụ sword range1,45U gặp boss r0,90: tâm boss có thể cách2,35U nếu hai vùng chạm và đúng góc/Z, không phải người phải đi vào giữa bụng boss. Không cộng cả picking radius và hurt radius lần hai.

Thêm **contactSkin0,08U** vào phép thử hurt contact cho melee/đạn, thống nhất PvE; không nới movement, range chọn unit, telegraph hoặc xuyên tường. Preview chiêu thể hiện biên hiệu lực đã gồm skin. Không inflation phụ theo lag/FPS/từng client. Projectile sweep với hurt volumes chặn tunneling; “nới dễ trúng” không là roll tự trúng hoặc bỏ vật cản.

Giữa nhiều target sắp xếp deterministic theo path/contact/góc/ID như COMBAT-03. Target chết trước packet bị loại, không hit ID tái dùng. Action hit ledger ghi entity incarnation để spawn mới không thừa hưởng trạng thái cũ.

## 4. Cao độ và bề mặt

Actor có worldXYZ, surfaceId và miền kết nối chiến đấu; cây/đá/đường/cầu là geometry/tag có kích thước riêng. Không lấy thứ tự vẽ Y làm quyền đánh. Hai người ở cầu trên/dưới không trúng nhau do sprite chồng màn.

| Loại đòn | Luật bề mặt |
|---|---|
| Melee/ground AoE | Mặc định cùng mặt đứng hoặc nối liên tục qua dốc/bậc; envelope từ mặt địa hình tại từng điểm. Không xuyên tầng cầu. |
| Projectile trực tiếp | Đường segment3D thật giữa origin/aimPoint; có thể qua độ cao khác nếu LoS hình học và skill mask cho phép. |
| Vùng đất kéo dài | Gắn surface đã tạo; không đốt người dưới cầu hoặc lơ lửng theo camera. |
| Skill crossSurface/air | Chỉ khi có flag và envelope rõ; preview tách phạm vi/tầng. Không mọi explosion xuyên sàn. |

Độ bậc đi bộ mẫu tối đa0,30U, dốc≤35°; khác mức cần đường nối/skill traversal đã thiết kế. Đây là config để làm scene mẫu, không trần góc camera. Hất tung là Z trình bày/khống chế trong cùng miền gameplay, không đổi surfaceId hoặc trở thành quái bay để né đòn đất.

## 5. Ma trận vật cản

| Vật thể | Đi | Melee | Projectile / LoS | AoE trên đất |
|---|---|---|---|---|
| Tường/đá lớn/núi |Chặn|Chặn theo đường tiếp xúc|Chặn theo geometry Z|Không lan xuyên tường/sàn mặc định|
| Thân cây |Chặn footprint|Chặn ở thân|Chặn thân; tán decorative không chặn|Theo surface và đường phủ hợp lệ|
| Cỏ/hoa/bụi decorative |Không chặn|Không chặn|Không chặn|Không chặn|
| Nước sâu |Không đi bộ|Không tự chặn tầm chém bờ|Không chặn đường trên mặt nước|Skill ghi quyền tạo field trên nước|
| Cầu |Theo mặt cầu|Theo surface|Sàn/cột chặn tại vị trí thật|Không ảnh hưởng tầng dưới|
| Unit đồng minh của nguồn |Soft overlap/điều hướng theo AI, không bodyblock PvE V1|Không nhận damage từ nguồn cùng phe|Không chặn đạn cùng phe|Không nhận AoE gây hại cùng phe; vẫn chịu đòn từ địch|

Hàng đồng minh chỉ nói quan hệ với nguồn cùng phe; enemy projectile đánh người đồng minh của người chơi theo relation của nguồn, không vô hiệu damage cả đội. Bodyblocking giữa địch thuộc navigation/AI sau; không tự thêm collision vào tán cây chỉ vì che hình.

## 6. Kiểm sau

Làm scene có cầu hai tầng, tường thấp/cao, cây có thân/tán, boss lớn, Kỵ Sĩ và quái bay. So debug hurt/picking/visual bounds, biên sector, projectile tốc cao, server/client cùng kết quả; shadow lệch không đổi hit. Chưa dựng/đo scene. ART-01/02/04 vẫn chờ prototype, không đánh dấu hoàn thành từ hợp đồng logic này.
