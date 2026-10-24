# Bàn giao GEAR-04…08 — bảng chỉ số và dòng thuộc tính

**Ngày:**21/10/2026. Chỉ thiết kế, chưa sửa runtime/asset/database hoặc thủ thành.

## 1. Năm hồ sơ

- [GEAR-04: ma trận slot/cấp/rarity/build](152_GEAR_04_MA_TRAN_NGAN_SACH_TRANG_BI.md).
- [GEAR-05: đường tăng và bảng base](153_GEAR_05_CONG_THUC_CHI_SO_NEN.md).
- [GEAR-06:19 loại affix, range, slot, cap và trọng số](154_GEAR_06_POOL_DONG_THUOC_TINH.md).
- [GEAR-07: số dòng, tier và roll](155_GEAR_07_SO_DONG_TIER_VA_QUY_TAC_ROLL.md).
- [GEAR-08: chống dòng trùng và tổ hợp lỗi](156_GEAR_08_RANG_BUOC_VA_CHONG_DONG_LOI.md).

## 2. Quyết định chính

Base cố định, không nhân rarity; mốc1/10/15/20/30/40/45 và nội suy hữu tỉ. R0 không dòng; R1 một dòng từ10; R2 hai dòng từ20; R3 ba dòng từ30. Tổng điểm affix rarity0/0,70/1/1,20, chia đều số dòng trước roll. R3 không có ba lần stat R1; stat hợp build quan trọng hơn màu.

HP bộ giáp dùng chung đường tăng, armor/MRes có trao đổi theo family. Khiên có phần base riêng và chỉ18% điểm affix của budget tay; vũ khí1H tương ứng82%. Vũ khí2H/song dao chỉ nhận mộtW. Không thêm stats vào giáp ngựa, cosmetic hoặc slot chưa mở.

Affix % hiếm chỉ trên slot/level được phép, weight thấp và không vượt5pp/dòng. Tối đa một dòng root và một dòng special/món; crit cũng trong special để tránh crit+haste+pen cùng món. Affix không theo người nhặt, không dùng luck tăng quality. Rank nguồn, Union và nội tại78 không đổi.

## 3. Kết quả kiểm số của tài liệu

Đã dùng phép tính Decimal/duyệt tổ hợp hữu hạn đối chiếu 11934 trường hợp level nguyên1…45 ×rarity đã mở ×19profile nhánh ×slot liên quan. Mỗi trường hợp có ít nhất1 tập đủ số dòng sau lọc loại trừ, mức q thấp nhất không tạo dòng0. Đây là kiểm mô hình pool, không kiểm gameplay hoặc khẳng định phân phối item kinh tế đã cân.

Fixture45 chưa affix/skill: HP4060/công534; heavy armor355,2/MRes235,2; robe armor210,2/MRes355,2. Floor từng slot tạo MRes heavy140 từ gear, không143 theo tổng trước floor. Hai nguồn5%Union=9,75%, không10%. Mọi cap dòng%≤5pp.

Chưa đo DPS, mana, EHP, tốc độ kiếm đồ, xác suất roll tổ hợp thực hoặc tương tác pet/skill. Các trọng số là cấu hình thử; có đủ tổ hợp không chứng minh chúng đáng dùng ngang nhau. GEAR-11 vẫn mở và phải xét nâng/khảm/set chung ngân sách45, không cộng quỹ riêng.

## 4. Tham khảo

[Tree of Savior — bài thiết kế random stats2017](https://treeofsavior.com/page/news/view.php?n=1111) cung cấp bối cảnh hệ dòng ngẫu nhiên. [Ravendawn — Gameplay Updates2023](https://ravendawn.online/en/home/view/79936378) nêu vấn đề phẩm chất chế tác gây lệch đường sức mạnh và thay đổi sang attribute rolls. Đây là nguồn lịch sử, không khẳng định luật hiện tại; Ẩn Thành không sao chép chỉ số/grade hoặc dùng quality như một multiplier ngoài ngân sách.

## 5. Checklist và việc tiếp theo

99 hồ sơ hoàn thiện /8 một phần /406 chưa thiết kế =513. ITEM-12 vẫn một phần, GATE-01 và cân bằng tổng chưa đạt. Tiếp theo GEAR-09 hiệu ứng riêng, GEAR-10 set, GEAR-11 ngân sách tổng, GEAR-12 so sánh, GEAR-13 độ bền, GEAR-14 ngoại hình. Mọi nguồn drop/recipe cụ thể cần LOOT/CRAFT/ITEM-12, không tự mở loot chỉ vì đã có công thức base.
