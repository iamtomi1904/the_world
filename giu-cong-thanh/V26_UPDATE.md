# V26 — Tương tác ngọc và vùng nhận đòn

- Đòn thường của class cận chiến mang ngọc chỉ tạo projectile khi có quái bay sống trên đường ngắm trong tầm ngọc. Ưu tiên đòn cận chiến nếu quái đất nằm trong vùng chém trước mặt. Không có mục tiêu bay: vẫn vung vũ khí, không bắn ngọc ra khoảng trống.
- Một nhịp đánh chọn projectile hoặc cận chiến, không phát đồng thời cả hai. Projectile ngọc này chỉ va chạm quái bay; không mở rộng tầm đánh quái mặt đất. Hai kỵ sĩ cưỡi ngựa giữ đòn cận chiến đánh trên không sẵn có. Class đánh xa vẫn giữ projectile cơ bản.
- Hitbox chung của quái thường/elite lấy tâm thân và độ cao bay, có bán kính và khoảng dung sai cấu hình. Chém hình quạt, đâm, lướt và đạn cùng dùng vùng thân thay vì chỉ tọa độ chân. Boss thêm 6 px dung sai.
- Không thay đổi sát thương, tốc đánh, va chạm di chuyển hoặc kích cỡ VFX.

Cấu hình: public/combat-geometry.js và public/gems.js (airAimWidth, projectileWidth).
Không chạy kiểm thử/QA theo yêu cầu trước của người dùng; chưa xác nhận trực tiếp gameplay.
