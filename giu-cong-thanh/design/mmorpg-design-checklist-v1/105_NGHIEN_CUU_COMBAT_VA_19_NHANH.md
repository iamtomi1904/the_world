# Nghiên cứu cho 20 mục COMBAT/SKILL tiếp theo

**Ngày:** 21/10/2026. Phạm vi: COMBAT-08…16; SKILL-01…07/09…12. Giữ MMORPG 2.5D pixel V4, không sửa thủ thành. Nguồn kiểm tra trong lượt thiết kế này là tài liệu chính thức, không lấy số cân bằng từ wiki/cộng đồng.

| Nguồn | Điều tham khảo | Giới hạn áp dụng |
|---|---|---|
| [Tree of Savior — Priest](https://treeofsavior.com/page/class/view.php?c=Priest) | Hồ sơ nghề có khả năng hồi sinh đồng đội; quyền hồi sinh có thể phụ thuộc loại nội dung. | Không sao phép, hệ số hoặc giới hạn giải đấu. Ẩn Thành có cứu thường và phép hồi sinh riêng. |
| [Tree of Savior — Incapable of Combat Penalty](https://treeofsavior.com/page/guide/view.php?n=100) | Tách về điểm hồi sinh, dùng vật phẩm tại chỗ và phép Priest. | Không lấy vật phẩm shop nạp, hao độ bền hoặc địa điểm respawn dungeon của ToS. |
| [Guild Wars 2 — Meet the New Shatterer](https://www.guildwars2.com/en/news/meet-the-new-shatterer/) | Bài phát triển mô tả đưa defiance bar vào một pha boss để khống chế có ý nghĩa thay vì khóa boss liên tục. | Nguồn action MMORPG 3D bổ trợ, không cùng style pixel. Điểm phá thế/cửa sổ/scale của Ẩn Thành là đề xuất mới. |
| [Ravendawn — Update2.1.0, 08/02/2025](https://ravendawn.online/en/home/view/update-210-notes) | Patch mô tả thu gọn ngân sách điểm, vai trò điểm nâng chiêu và khuyến khích chuyên môn hóa. | Không sao ba archetype, nguồn điểm nhánh không dùng hoặc công thức. Giữ35SP/11TP của Ẩn Thành. |
| [Tree of Savior — UI and Basic Info](https://treeofsavior.com/page/guide/view.php?n=6) | Thông tin quái/nhân vật, buff, quickslot skill/item và combat messages được tách rõ. | Không lấy asset/bố cục. Giữ hotbar13 và quy chuẩn UI V4 đã chốt. |
| [Guild Wars 2 — Introducing the Action Camera](https://www.guildwars2.com/en-gb/news/introducing-the-action-camera/) | Đánh tự do, chọn đích và đầu vào có phản hồi rõ. | Giữ camera trực giao cố định và con trỏ của Ẩn Thành; không tự chuyển camera xoay. |

Các mô tả trên chỉ là tóm tắt nguyên tắc; không khẳng định các patch lịch sử vẫn là toàn bộ luật hiện tại của game nguồn. Không sao truyện, tên chiêu, icon hoặc sprite.

## Quyết định riêng của Ẩn Thành

Thiết kế V1 có20 hồ sơ liên thông, catalog số cho toàn bộ bộ chiêu nền,19nhánh/28tổ hợp, talent hai hướng, hồi sinh có phí Ngân Ấn/vật phẩm gameplay và cứu đồng đội. PvP chiến đấu chưa mở V1; bảng skill hiện rõ thay vì tạo số PvP chưa cân. Các thông số là cấu hình cân thử theo ủy quyền, không benchmark hoặc cam kết đã cân bằng.

Không nâng SP/TP sau45, không thêm active cố định ngoài13ô, không cho mọi nhánh học chéo, không thêm quái bay vàoV01. Công thức STAT/XP giữ; coefficient skill là đầu vào mới của pipeline đã có, không viết lại công thức sát thương.

Xem [báo cáo tổng hợp](125_BAO_CAO_20_MUC_COMBAT_SKILL.md). Chưa code, SQL, vẽ icon/VFX/sprite, chạy game, test mạng hay đo FPS. ART/camera/NET/DATA vẫn có cổng nghiệm thu riêng.
