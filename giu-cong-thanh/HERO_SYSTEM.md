# Hệ thống hero, kỹ năng và chiến trường — v0.3

## Quy tắc chung

- 12 hero thuộc 7 class. Hero cùng class dùng chung cây kỹ năng, nhưng chỉ số gốc khác nhau.
- Q có sẵn bậc 1. E yêu cầu cấp 2 và 120 vàng; R yêu cầu cấp 4 và 240 vàng.
- Mỗi kỹ năng tối đa bậc 3. Chỉ được học/nâng kỹ năng thuộc class hiện tại. Server kiểm tra class, cấp, vàng, năng lượng, hồi chiêu và trạng thái sống.
- Sát thương kỹ năng = Công hiện tại × hệ số. Kỹ năng gây sát thương theo vùng được tính cho mỗi quái trong vùng. Nảy sét giảm còn 80% sau mỗi lần nảy.
- Mỗi bậc thêm 30% hệ số sát thương gốc, +12 bán kính và giảm 1 giây hồi chiêu. Kỹ năng hỗ trợ tăng hồi máu/khiên hoặc thời lượng/tốc đánh tùy loại. Mô tả trong game tính theo chỉ số thực.
- Năng lượng hồi tự nhiên theo class. Đỡ khiên giảm hồi năng lượng còn 40%; đòn thường trúng mục tiêu hồi 2 năng lượng. Không tiêu hao năng lượng khi kỹ năng cần mục tiêu nhưng không có mục tiêu hợp lệ.
- Q/E/R ưu tiên mục tiêu gần nhất; kỹ năng tự thân tác động quanh hero. Vùng phép giữ tại vị trí thi triển; không chạy theo hero.
- Burn/poison/bleed gây sát thương mỗi giây, có thể cùng tồn tại. Tái áp dụng cùng loại làm mới thời gian và giữ mức sát thương mạnh hơn, không nhân số tầng.
- Làm chậm lấy mức mạnh nhất; choáng tạm dừng di chuyển và tấn công. Boss hiện vẫn chịu khống chế như quái thường.
- Khiên hấp thụ sát thương sau giáp/đỡ và trước máu. Hồi máu theo % máu tối đa, không hồi sinh hero đã ngã.
- Tinh thông đòn thường: tối đa 3 bậc, giá 100/200/300 vàng. Mỗi bậc +8% Công; bậc 2 mở hiệu ứng class.
- Nâng Công: +6 trước hệ số Tinh thông; giá 80 + 30 × số lần đã mua. Nâng Máu: +40, cùng công thức giá.
- Cấp = min(20, 1 + floor(sqrt(XP / 40))). Mỗi cấp thêm 22 máu, 3 Công; mỗi 3 cấp thêm 1 giáp.
- XP/cấp lưu theo hồ sơ khách. Kỹ năng, tinh thông, vàng và lính chỉ giữ trong chiến dịch hiện tại, không giữ khi tải lại trang.

## Chỉ số gốc của hero

| Hero | Class | HP | Công | Giáp | Tốc chạy | Tầm | Hồi đòn |
|---|---|---:|---:|---:|---:|---:|---:|
| Thiết Vệ | Hộ vệ | 240 | 27 | 6 | 145 | 66 | 0.62s |
| Ngân Kỵ | Hộ vệ | 200 | 33 | 4 | 160 | 70 | 0.56s |
| Hắc Kỵ | Hộ vệ | 180 | 43 | 3 | 150 | 72 | 0.72s |
| Lãng Khách | Kiếm khách | 155 | 28 | 2 | 190 | 74 | 0.36s |
| Cung Thủ | Cung thủ | 135 | 27 | 1 | 175 | 230 | 0.62s |
| Kiếm Chủ | Kiếm khách | 185 | 40 | 3 | 170 | 85 | 0.64s |
| Hỏa Sư | Hỏa pháp sư | 130 | 40 | 1 | 150 | 200 | 0.9s |
| Lôi Sư | Lôi pháp sư | 125 | 30 | 1 | 165 | 210 | 0.48s |
| Du Pháp | Thủy pháp sư | 150 | 35 | 2 | 165 | 180 | 0.75s |
| Chiến Binh | Chiến binh | 205 | 36 | 3 | 160 | 72 | 0.58s |
| Cuồng Chiến | Chiến binh | 175 | 49 | 1 | 165 | 77 | 0.8s |
| Tiên Phong | Chiến binh | 170 | 30 | 2 | 195 | 68 | 0.42s |

## Hộ vệ

Năng lượng 90, hồi 13/giây. Giảm sát thương bằng giáp và đỡ khiên. Tinh thông bậc 2: mỗi đòn thứ tư làm choáng 0,4 giây.

### Q — Khiên Chấn

Yêu cầu cấp 1. Có sẵn bậc 1. Nâng bậc 2: 90; bậc 3: 180 vàng.

- Bậc 1: Chấn động quanh người, gây sát thương và làm choáng. 150% Công (41 sát thương). Bán kính 135. Choáng 0.8s. Hồi 8s · 20 năng lượng.
- Bậc 2: Chấn động quanh người, gây sát thương và làm choáng. 195% Công (53 sát thương). Bán kính 147. Choáng 0.8s. Hồi 7s · 20 năng lượng.
- Bậc 3: Chấn động quanh người, gây sát thương và làm choáng. 240% Công (65 sát thương). Bán kính 159. Choáng 0.8s. Hồi 6s · 20 năng lượng.

### E — Thành Đồng

Yêu cầu cấp 2. Mở bậc 1: 120 vàng. Nâng bậc 2: 180; bậc 3: 270 vàng.

- Bậc 1: Tạo khiên hấp thụ sát thương và tăng 6 giáp trong thời gian hiệu lực. Khiên 40% máu tối đa. Hiệu lực 6s. Hồi 15s · 30 năng lượng.
- Bậc 2: Tạo khiên hấp thụ sát thương và tăng 6 giáp trong thời gian hiệu lực. Khiên 50% máu tối đa. Bán kính 12. Hiệu lực 7s. Hồi 14s · 30 năng lượng.
- Bậc 3: Tạo khiên hấp thụ sát thương và tăng 6 giáp trong thời gian hiệu lực. Khiên 60% máu tối đa. Bán kính 24. Hiệu lực 8s. Hồi 13s · 30 năng lượng.

### R — Hiệu Triệu

Yêu cầu cấp 4. Mở bậc 1: 240 vàng. Nâng bậc 2: 300; bậc 3: 390 vàng.

- Bậc 1: Hồi máu cho hero và lính trong vùng; các hero nhận thêm 20% tốc đánh. Hồi 30% máu tối đa. Bán kính 240. Hiệu lực 6s. Hồi 24s · 45 năng lượng.
- Bậc 2: Hồi máu cho hero và lính trong vùng; các hero nhận thêm 20% tốc đánh. Hồi 36% máu tối đa. Bán kính 252. Hiệu lực 7s. Hồi 23s · 45 năng lượng.
- Bậc 3: Hồi máu cho hero và lính trong vùng; các hero nhận thêm 20% tốc đánh. Hồi 42% máu tối đa. Bán kính 264. Hiệu lực 8s. Hồi 22s · 45 năng lượng.

## Kiếm khách

Năng lượng 100, hồi 14/giây. Đòn đánh nhanh, di chuyển linh hoạt. Tinh thông bậc 2: đòn thường gây chảy máu 3 giây.

### Q — Nhất Kiếm

Yêu cầu cấp 1. Có sẵn bậc 1. Nâng bậc 2: 90; bậc 3: 180 vàng.

- Bậc 1: Lướt về mục tiêu gần nhất, chém dọc đường. Dừng trước vật cản. 200% Công (56 sát thương). Bán kính 65. Tầm 210. Hồi 7s · 20 năng lượng.
- Bậc 2: Lướt về mục tiêu gần nhất, chém dọc đường. Dừng trước vật cản. 260% Công (73 sát thương). Bán kính 77. Tầm 210. Hồi 6s · 20 năng lượng.
- Bậc 3: Lướt về mục tiêu gần nhất, chém dọc đường. Dừng trước vật cản. 320% Công (90 sát thương). Bán kính 89. Tầm 210. Hồi 5s · 20 năng lượng.

### E — Bộ Pháp

Yêu cầu cấp 2. Mở bậc 1: 120 vàng. Nâng bậc 2: 180; bậc 3: 270 vàng.

- Bậc 1: Tăng tốc đánh và tốc chạy trong thời gian hiệu lực. Hiệu lực 7s. Tốc đánh +40%. Hồi 16s · 30 năng lượng.
- Bậc 2: Tăng tốc đánh và tốc chạy trong thời gian hiệu lực. Bán kính 12. Hiệu lực 8s. Tốc đánh +48%. Hồi 15s · 30 năng lượng.
- Bậc 3: Tăng tốc đánh và tốc chạy trong thời gian hiệu lực. Bán kính 24. Hiệu lực 9s. Tốc đánh +56%. Hồi 14s · 30 năng lượng.

### R — Kiếm Vũ

Yêu cầu cấp 4. Mở bậc 1: 240 vàng. Nâng bậc 2: 300; bậc 3: 390 vàng.

- Bậc 1: Tạo vùng kiếm tại vị trí thi triển, gây sát thương mỗi 0,5 giây. 65% Công (18 sát thương/nhịp). Bán kính 170. Hiệu lực 3s. Hồi 22s · 45 năng lượng.
- Bậc 2: Tạo vùng kiếm tại vị trí thi triển, gây sát thương mỗi 0,5 giây. 85% Công (24 sát thương/nhịp). Bán kính 182. Hiệu lực 4s. Hồi 21s · 45 năng lượng.
- Bậc 3: Tạo vùng kiếm tại vị trí thi triển, gây sát thương mỗi 0,5 giây. 104% Công (29 sát thương/nhịp). Bán kính 194. Hiệu lực 5s. Hồi 20s · 45 năng lượng.

## Cung thủ

Năng lượng 100, hồi 12/giây. Đánh mục tiêu gần nhất trong tầm xa. Tinh thông bậc 2: tên thường tẩm độc 3 giây.

### Q — Liên Tiễn

Yêu cầu cấp 1. Có sẵn bậc 1. Nâng bậc 2: 90; bậc 3: 180 vàng.

- Bậc 1: Bắn đồng thời nhiều quái khác nhau trong tầm. 125% Công (34 sát thương). Tầm 330. 3 mục tiêu. Hồi 7s · 18 năng lượng.
- Bậc 2: Bắn đồng thời nhiều quái khác nhau trong tầm. 163% Công (44 sát thương). Bán kính 12. Tầm 330. 4 mục tiêu. Hồi 6s · 18 năng lượng.
- Bậc 3: Bắn đồng thời nhiều quái khác nhau trong tầm. 200% Công (54 sát thương). Bán kính 24. Tầm 330. 5 mục tiêu. Hồi 5s · 18 năng lượng.

### E — Độc Tiễn

Yêu cầu cấp 2. Mở bậc 1: 120 vàng. Nâng bậc 2: 180; bậc 3: 270 vàng.

- Bậc 1: Bắn một quái, gây độc mỗi giây và làm chậm. 140% Công (38 sát thương). Tầm 340. Chậm 25%. Sát thương duy trì 12/giây, 5s. Hồi 12s · 26 năng lượng.
- Bậc 2: Bắn một quái, gây độc mỗi giây và làm chậm. 182% Công (49 sát thương). Bán kính 12. Tầm 340. Chậm 25%. Sát thương duy trì 12/giây, 5s. Hồi 11s · 26 năng lượng.
- Bậc 3: Bắn một quái, gây độc mỗi giây và làm chậm. 224% Công (60 sát thương). Bán kính 24. Tầm 340. Chậm 25%. Sát thương duy trì 12/giây, 5s. Hồi 10s · 26 năng lượng.

### R — Vũ Tiễn

Yêu cầu cấp 4. Mở bậc 1: 240 vàng. Nâng bậc 2: 300; bậc 3: 390 vàng.

- Bậc 1: Mưa tên tại vị trí mục tiêu, gây sát thương mỗi giây. 80% Công (22 sát thương/nhịp). Bán kính 190. Tầm 380. Hiệu lực 4s. Hồi 23s · 45 năng lượng.
- Bậc 2: Mưa tên tại vị trí mục tiêu, gây sát thương mỗi giây. 104% Công (28 sát thương/nhịp). Bán kính 202. Tầm 380. Hiệu lực 5s. Hồi 22s · 45 năng lượng.
- Bậc 3: Mưa tên tại vị trí mục tiêu, gây sát thương mỗi giây. 128% Công (35 sát thương/nhịp). Bán kính 214. Tầm 380. Hiệu lực 6s. Hồi 21s · 45 năng lượng.

## Chiến binh

Năng lượng 100, hồi 13/giây. Đòn cận chiến quét nhiều mục tiêu. Tinh thông bậc 2: đòn thường hút 8% sát thương thành máu.

### Q — Bổ Rìu

Yêu cầu cấp 1. Có sẵn bậc 1. Nâng bậc 2: 90; bậc 3: 180 vàng.

- Bậc 1: Quét quanh người và gây chảy máu mỗi giây. 200% Công (72 sát thương). Bán kính 140. Sát thương duy trì 11/giây, 4s. Hồi 8s · 22 năng lượng.
- Bậc 2: Quét quanh người và gây chảy máu mỗi giây. 260% Công (94 sát thương). Bán kính 152. Sát thương duy trì 11/giây, 4s. Hồi 7s · 22 năng lượng.
- Bậc 3: Quét quanh người và gây chảy máu mỗi giây. 320% Công (115 sát thương). Bán kính 164. Sát thương duy trì 11/giây, 4s. Hồi 6s · 22 năng lượng.

### E — Cuồng Huyết

Yêu cầu cấp 2. Mở bậc 1: 120 vàng. Nâng bậc 2: 180; bậc 3: 270 vàng.

- Bậc 1: Tăng tốc đánh; đòn thường hút máu theo sát thương thực gây ra. Hiệu lực 7s. Tốc đánh +30%. Hút máu 25%. Hồi 16s · 30 năng lượng.
- Bậc 2: Tăng tốc đánh; đòn thường hút máu theo sát thương thực gây ra. Bán kính 12. Hiệu lực 8s. Tốc đánh +38%. Hút máu 29%. Hồi 15s · 30 năng lượng.
- Bậc 3: Tăng tốc đánh; đòn thường hút máu theo sát thương thực gây ra. Bán kính 24. Hiệu lực 9s. Tốc đánh +46%. Hút máu 33%. Hồi 14s · 30 năng lượng.

### R — Địa Chấn

Yêu cầu cấp 4. Mở bậc 1: 240 vàng. Nâng bậc 2: 300; bậc 3: 390 vàng.

- Bậc 1: Đập đất, gây sát thương lớn và làm choáng toàn bộ quái trong vùng. 320% Công (115 sát thương). Bán kính 200. Choáng 1.2s. Hồi 24s · 45 năng lượng.
- Bậc 2: Đập đất, gây sát thương lớn và làm choáng toàn bộ quái trong vùng. 416% Công (150 sát thương). Bán kính 212. Choáng 1.2s. Hồi 23s · 45 năng lượng.
- Bậc 3: Đập đất, gây sát thương lớn và làm choáng toàn bộ quái trong vùng. 512% Công (184 sát thương). Bán kính 224. Choáng 1.2s. Hồi 22s · 45 năng lượng.

## Hỏa pháp sư

Năng lượng 120, hồi 11/giây. Cầu lửa gây sát thương lan. Tinh thông bậc 2: đòn thường đốt cháy 3 giây.

### Q — Hỏa Bộc

Yêu cầu cấp 1. Có sẵn bậc 1. Nâng bậc 2: 90; bậc 3: 180 vàng.

- Bậc 1: Nổ tại mục tiêu gần nhất, thiêu đốt mỗi giây. 180% Công (72 sát thương). Bán kính 105. Tầm 330. Sát thương duy trì 16/giây, 4s. Hồi 8s · 24 năng lượng.
- Bậc 2: Nổ tại mục tiêu gần nhất, thiêu đốt mỗi giây. 234% Công (94 sát thương). Bán kính 117. Tầm 330. Sát thương duy trì 16/giây, 4s. Hồi 7s · 24 năng lượng.
- Bậc 3: Nổ tại mục tiêu gần nhất, thiêu đốt mỗi giây. 288% Công (115 sát thương). Bán kính 129. Tầm 330. Sát thương duy trì 16/giây, 4s. Hồi 6s · 24 năng lượng.

### E — Biển Lửa

Yêu cầu cấp 2. Mở bậc 1: 120 vàng. Nâng bậc 2: 180; bậc 3: 270 vàng.

- Bậc 1: Vùng lửa gây sát thương mỗi giây và làm chậm quái bên trong. 60% Công (24 sát thương/nhịp). Bán kính 150. Tầm 350. Chậm 15%. Hiệu lực 5s. Hồi 17s · 35 năng lượng.
- Bậc 2: Vùng lửa gây sát thương mỗi giây và làm chậm quái bên trong. 78% Công (31 sát thương/nhịp). Bán kính 162. Tầm 350. Chậm 15%. Hiệu lực 6s. Hồi 16s · 35 năng lượng.
- Bậc 3: Vùng lửa gây sát thương mỗi giây và làm chậm quái bên trong. 96% Công (38 sát thương/nhịp). Bán kính 174. Tầm 350. Chậm 15%. Hiệu lực 7s. Hồi 15s · 35 năng lượng.

### R — Thiên Thạch

Yêu cầu cấp 4. Mở bậc 1: 240 vàng. Nâng bậc 2: 300; bậc 3: 390 vàng.

- Bậc 1: Đánh dấu vị trí mục tiêu; thiên thạch rơi sau 1,1 giây. 450% Công (180 sát thương). Bán kính 205. Tầm 390. Hồi 26s · 55 năng lượng.
- Bậc 2: Đánh dấu vị trí mục tiêu; thiên thạch rơi sau 1,1 giây. 585% Công (234 sát thương). Bán kính 217. Tầm 390. Hồi 25s · 55 năng lượng.
- Bậc 3: Đánh dấu vị trí mục tiêu; thiên thạch rơi sau 1,1 giây. 720% Công (288 sát thương). Bán kính 229. Tầm 390. Hồi 24s · 55 năng lượng.

## Lôi pháp sư

Năng lượng 110, hồi 12/giây. Tốc độ niệm phép cao. Tinh thông bậc 2: đòn thường nảy thêm một mục tiêu với 40% sát thương.

### Q — Lôi Liên

Yêu cầu cấp 1. Có sẵn bậc 1. Nâng bậc 2: 90; bậc 3: 180 vàng.

- Bậc 1: Sét nảy qua các quái gần nhau; mỗi lần nảy còn 80% sát thương. 170% Công (51 sát thương). Tầm 300. 4 mục tiêu. Hồi 7s · 22 năng lượng.
- Bậc 2: Sét nảy qua các quái gần nhau; mỗi lần nảy còn 80% sát thương. 221% Công (66 sát thương). Bán kính 12. Tầm 300. 5 mục tiêu. Hồi 6s · 22 năng lượng.
- Bậc 3: Sét nảy qua các quái gần nhau; mỗi lần nảy còn 80% sát thương. 272% Công (82 sát thương). Bán kính 24. Tầm 300. 6 mục tiêu. Hồi 5s · 22 năng lượng.

### E — Lôi Kích

Yêu cầu cấp 2. Mở bậc 1: 120 vàng. Nâng bậc 2: 180; bậc 3: 270 vàng.

- Bậc 1: Sét đánh một vùng quanh mục tiêu và làm choáng. 210% Công (63 sát thương). Bán kính 120. Tầm 340. Choáng 1s. Hồi 13s · 30 năng lượng.
- Bậc 2: Sét đánh một vùng quanh mục tiêu và làm choáng. 273% Công (82 sát thương). Bán kính 132. Tầm 340. Choáng 1s. Hồi 12s · 30 năng lượng.
- Bậc 3: Sét đánh một vùng quanh mục tiêu và làm choáng. 336% Công (101 sát thương). Bán kính 144. Tầm 340. Choáng 1s. Hồi 11s · 30 năng lượng.

### R — Lôi Trận

Yêu cầu cấp 4. Mở bậc 1: 240 vàng. Nâng bậc 2: 300; bậc 3: 390 vàng.

- Bậc 1: Vùng sấm sét gây sát thương và ngắt chuyển động mỗi giây. 75% Công (23 sát thương/nhịp). Bán kính 185. Tầm 350. Choáng 0.2s. Hiệu lực 5s. Hồi 25s · 50 năng lượng.
- Bậc 2: Vùng sấm sét gây sát thương và ngắt chuyển động mỗi giây. 98% Công (29 sát thương/nhịp). Bán kính 197. Tầm 350. Choáng 0.2s. Hiệu lực 6s. Hồi 24s · 50 năng lượng.
- Bậc 3: Vùng sấm sét gây sát thương và ngắt chuyển động mỗi giây. 120% Công (36 sát thương/nhịp). Bán kính 209. Tầm 350. Choáng 0.2s. Hiệu lực 7s. Hồi 23s · 50 năng lượng.

## Thủy pháp sư

Năng lượng 120, hồi 11/giây. Kiểm soát và hỗ trợ đồng đội. Tinh thông bậc 2: đòn thường làm chậm 20% trong 2 giây.

### Q — Hàn Triều

Yêu cầu cấp 1. Có sẵn bậc 1. Nâng bậc 2: 90; bậc 3: 180 vàng.

- Bậc 1: Sóng băng quanh người, gây sát thương và làm chậm. 130% Công (46 sát thương). Bán kính 175. Chậm 50%. Hồi 8s · 22 năng lượng.
- Bậc 2: Sóng băng quanh người, gây sát thương và làm chậm. 169% Công (59 sát thương). Bán kính 187. Chậm 50%. Hồi 7s · 22 năng lượng.
- Bậc 3: Sóng băng quanh người, gây sát thương và làm chậm. 208% Công (73 sát thương). Bán kính 199. Chậm 50%. Hồi 6s · 22 năng lượng.

### E — Thủy Dưỡng

Yêu cầu cấp 2. Mở bậc 1: 120 vàng. Nâng bậc 2: 180; bậc 3: 270 vàng.

- Bậc 1: Hồi máu cho bản thân, đồng đội và lính trong vùng; không hồi nhà. Hồi 28% máu tối đa. Bán kính 260. Hồi 15s · 32 năng lượng.
- Bậc 2: Hồi máu cho bản thân, đồng đội và lính trong vùng; không hồi nhà. Hồi 34% máu tối đa. Bán kính 272. Hồi 14s · 32 năng lượng.
- Bậc 3: Hồi máu cho bản thân, đồng đội và lính trong vùng; không hồi nhà. Hồi 40% máu tối đa. Bán kính 284. Hồi 13s · 32 năng lượng.

### R — Băng Vực

Yêu cầu cấp 4. Mở bậc 1: 240 vàng. Nâng bậc 2: 300; bậc 3: 390 vàng.

- Bậc 1: Vùng băng gây sát thương mỗi giây và làm chậm mạnh. 60% Công (21 sát thương/nhịp). Bán kính 205. Tầm 350. Chậm 60%. Hiệu lực 5s. Hồi 24s · 50 năng lượng.
- Bậc 2: Vùng băng gây sát thương mỗi giây và làm chậm mạnh. 78% Công (27 sát thương/nhịp). Bán kính 217. Tầm 350. Chậm 60%. Hiệu lực 6s. Hồi 23s · 50 năng lượng.
- Bậc 3: Vùng băng gây sát thương mỗi giây và làm chậm mạnh. 96% Công (34 sát thương/nhịp). Bán kính 229. Tầm 350. Chậm 60%. Hiệu lực 7s. Hồi 22s · 50 năng lượng.

## Chiến trường

- Kích thước 1920 × 1280, diện tích gấp 4 bản v0.2. Camera theo hero, minimap hiển thị toàn map và vị trí quân.
- 10 bố cục đường đi, vùng rừng/phế tích/tinh thể và điểm nhà khác nhau. Làn tiến quân được giữ trống khỏi vật cản.
- Tòa thành mới được tạo bằng imagegen tích hợp và lưu tại public/assets/v3/castle.png; prompt nằm cạnh asset.
- 189 vật thể cảnh sẵn trong catalog v3, mỗi map chọn một tập theo biome; 11 animation effect đã chọn và thu gọn về spritesheet 128px.
- 3 đợt/mốc; chuyển mốc giữ quân, vàng và kỹ năng. Máu nhà được hồi một phần. Mốc 10 có boss cuối.

| Mốc | Map | Hướng quái | Máu quái | Sát thương quái |
|---:|---|---:|---:|---:|
| 1 | Đồng Cỏ Biên Giới | 1 | ×1.00 | ×1.00 |
| 2 | Rừng Song Lộ | 2 | ×1.17 | ×1.13 |
| 3 | Thung Lũng Lá Đỏ | 2 | ×1.34 | ×1.26 |
| 4 | Phế Tích Cổ | 3 | ×1.51 | ×1.39 |
| 5 | Ốc Đảo Đá | 2 | ×1.68 | ×1.52 |
| 6 | Rừng Băng Lam | 3 | ×1.85 | ×1.65 |
| 7 | Đầm Lầy Độc | 3 | ×2.02 | ×1.78 |
| 8 | Hẻm Núi Thạch Anh | 3 | ×2.19 | ×1.91 |
| 9 | Vùng Đất Tro Tàn | 4 | ×2.36 | ×2.04 |
| 10 | Thành Trì Hắc Ám | 4 | ×2.53 | ×2.17 |

## Giới hạn bản thử

- Chưa có lưu/khôi phục chiến dịch khi mất kết nối; chưa có Supabase hoặc tài khoản thật.
- Chọn mục tiêu tự động, chưa có ngắm bằng chuột hoặc kéo vùng phép.
- Một số skill có hiệu ứng lửa/nước/sét dùng chung animation nhưng cơ chế khác nhau.
- Cần cân bằng bằng chơi thử thực tế, đặc biệt ở mốc cao và phòng 4 người.
