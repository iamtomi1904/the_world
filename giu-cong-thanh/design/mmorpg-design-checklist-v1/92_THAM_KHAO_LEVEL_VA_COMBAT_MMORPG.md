# Nghiên cứu cho LEVEL-06…08 và COMBAT-01…07

**Ngày:** 21/10/2026. Dùng tài liệu do nhà phát triển phát hành; chỉ phục vụ thiết kế MMORPG Ẩn Thành. Không thay phong cách pixel V4/2.5D hoặc sửa thủ thành.

## 1. Nguồn và điều thực sự được tham khảo

| Nguồn chính thức | Nội dung có thể đối chiếu | Cách áp dụng và giới hạn |
|---|---|---|
| [Ravendawn — Gameplay Updates, 15/04/2023](https://ravendawn.online/en/home/view/79936378) | Bài phát triển mô tả chia ghi công nhiệm vụ truyện trong nhóm và ý tưởng Mentor hạ Effective Level. | Tham khảo nhu cầu chơi cùng bạn khác cấp. Đây là bài lịch sử, không chứng minh hệ hiện hành. Ẩn Thành chưa dùng level sync vì chưa có thiết kế đồng bộ gear/skill. |
| [Ravendawn — thông tin tài khoản Patron](https://ravendawn.online/en/homepage) | Trang giới thiệu liệt kê Rested Exp trong lợi ích Patron. | Là phương án đối chiếu; không áp dụng mô hình này: Ẩn Thành V1 không XP nghỉ/offline hoặc quyền tăng XP trả phí. |
| [Tree of Savior — UI and Basic Info](https://treeofsavior.com/page/guide/view.php?n=6) | Hướng dẫn tách thông tin nhân vật/quái, cấp, quickslot skill/item, buff và thông báo. | Dùng nguyên tắc phân tầng thông tin. Không sao UI, màu/icon, cấp hoặc bố cục; giữ 13 ô 1–9/Q/E/R/Z của Ẩn Thành. |
| [Tree of Savior — Status/Skills/Attributes](https://treeofsavior.com/page/guide/view.php?n=10) | Trang phát triển nhân vật phân biệt các phần status, skill, attribute. | Điểm AP/SP/TP và trạng thái nháp của Ẩn Thành phải riêng; không lấy công thức/cap của ToS. |
| [Tree of Savior — Murmillo](https://treeofsavior.com/page/class/view.php?c=Murmillo) | Hồ sơ class mô tả khả năng phòng vệ, nhảy, đẩy/gom và miễn một số khống chế. | Tham khảo cách mô tả quyền theo từng skill/trạng thái. Không sao tên/bộ chiêu, tỷ lệ, hệ số hoặc thêm evasion RNG. |
| [Guild Wars 2 — Introducing the Action Camera](https://www.guildwars2.com/en-gb/news/introducing-the-action-camera/) | Bài thiết kế mô tả đánh trái/giữ lặp, đánh hướng không cần đích, đích chỉ định và phản hồi ngắm. | Nguồn bổ trợ action MMORPG 3D; không cùng phong cách pixel. Ẩn Thành dùng con trỏ trên cảnh/camera trực giao cố định, không camera xoay hoặc tâm bắn giữa màn. |
| [Tibia — Secure Mode](https://www.tibia.com/support/?entryid=86&subtopic=gethelp) | Kết quả lập chỉ mục của FAQ chính thức nêu cơ chế chống tấn công nhầm người. Mở trực tiếp trả403 trong lần nghiên cứu. | Chỉ tham khảo nguyên tắc bảo vệ thao tác; không suy diễn thêm từ trang không mở được, không sao skull/PvP penalty. |

Không dùng bài cộng đồng/wiki để chứng minh quy tắc combat của game tham khảo. ToS gần hướng sprite trên môi trường có chiều sâu; Ravendawn/Tibia phù hợp nghiên cứu đọc cảnh pixel. Không coi mọi nguồn trên đều cùng engine/phối cảnh Ẩn Thành.

## 2. Quyết định thiết kế riêng

Giữ cap60/nội dung45 theo [hồ sơ91](91_CAP_60_NOI_DUNG_45_VA_XP_HAU_TRUYEN.md), AP177/SP35/TP11 ở60, không sync/paid XP. Thiết kế mới chốt tiếp UI XP, quyền dữ liệu, ngắm/cast, thời gian hành động, họ vũ khí, va chạm cao độ, chống quái bay, projectile và catalog trạng thái M0/M1.

Mọi giá trị U/giây/góc/hệ số và quy tắc hỗ trợ ngắm trong hồ sơ93–102 là **cấu hình đề xuất của Ẩn Thành**, không số lấy từ nguồn, không kết quả benchmark. U là đơn vị thế giới, chưa chốt quy đổi screen pixel hay góc camera ở ART-04. Nền art/camera còn thiếu prototype; vẫn có thể chốt hợp đồng logic và tình huống kiểm sau, không gọi đã kiểm chứng hình ảnh.

## 3. Phạm vi hoàn thiện

Mười đầu việc là đặc tả có thể bàn giao, không code/schema migration, không file sprite/audio/icon sản xuất. COMBAT-08 trở đi, quyền loot/PvP, aggro, NET/reconnect và 19 bộ kỹ năng vẫn còn checklist riêng. [Bảng tổng hợp](103_TONG_HOP_LEVEL_COMBAT_10_MUC.md) ghi cấu hình, liên kết và giới hạn.
