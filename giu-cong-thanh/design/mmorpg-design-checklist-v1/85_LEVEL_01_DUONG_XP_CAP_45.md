> **Quyết định hiện hành · 21/10/2026:** [Trần nhân vật 60, nội dung đến 45](91_CAP_60_NOI_DUNG_45_VA_XP_HAU_TRUYEN.md). Giữ năm vùng hiện tại; cấp 45→60 luyện dài hạn. AP ở 45/60 là 132/177; SP giữ 35, TP giữ 11 sau 45. Quy tắc XP hậu truyện thay bảng chênh cấp khi đủ điều kiện. Các số cấp 45 trong ví dụ vẫn là mốc nội dung, không phải trần nhân vật. Chưa triển khai vào game.

# LEVEL-01 — Đường XP từ 1 đến 60, nội dung đến 45

**Ngày:**21/10/2026 · **Phiên bản:**1.0. Hoàn thiện công thức và ngân sách XP thử, chưa dữ liệu quest đủ hoặc đo thời gian chơi. [Tham khảo](79_THAM_KHAO_TIEN_TRINH_VA_VAI_TRO_MMORPG.md). MMORPG, không sửa thủ thành.

## 1. Trần và công thức

Tạo ở cấp1. AlphaV01 cap10; bản đủ năm vùng cap nhân vật60, nội dung45. XP đoạn 1→45 cần từ cấpL→L+1: **T(L)=100+20L+10L²**, L1…44, số nguyên. Đây là cấu hình thiết kế, không hàm của RO/ToS.

CumulativeC(n)=ΣL=1…n−1 T(L). Server giữ level và XP hiện tại/cumulative theo schema nhất quán sau DATA; không vừa cộng hai biểu diễn thành hai phần thưởng.

| Đạt cấp | Tổng XP từ cấp1 | Khoảng ngân sách kể từ mốc trước |
|---:|---:|---:|
|10|4650|4650|
|20|30400|25750|
|30|97150|66750|
|40|224900|127750|
|45|317900|93000|

Các đoạn10→20 gồm chuyển biên10→11; vùng khuyến nghị vẫn1–10/11–20/21–30/31–40/41–45. Quest đường nối cấp10 có thể bắt đầu ngoài V02hub trước khi lên11, không tự khóa bản đồ khiến thiếu XP bước sang vùng.

## 2. Phân ngân sách tuyến truyện

Critical path có kế hoạch XP đủ100%để đạt mốc, không bắt hết quest phụ. Đề xuất70%từ phần thưởng main/objective/cảnh truyện,30%từ combat bắt buộc và hoạt động tuyến chính đã tác giả gắn. Nếu quest cho bypass combat bằng cách hợp lệ thì phải có objective reward bù đúng budget, không mất đường XP vì chơi khác cách.

| Đoạn | Quest/objective70% | Combat tuyến30% |
|---|---:|---:|
|1→10|3255|1395|
|10→20|18025|7725|
|20→30|46725|20025|
|30→40|89425|38325|
|40→45|65100|27900|

Đây là quota để QUESTauthor phân bổ, chưa chứng minh tám mainquest V01 đã có đủ reward/hành động. Không client phát XP tự động để kéo level về target. Sidequest/exploration thêm lựa chọn, có thể khiến overlevel hợp lệ; không tăng T(L) theo người đã làm nhiều quest.

## 3. Nhịp thời gian mục tiêu

Mục tiêu thử cho lần đầu đọc truyện/khám phá vừa: V01 khoảng2–4h, V02 6–9h, V03 10–14h, V04 12–18h, V05 8–12h; tổng38–57h. Không cam kết thời gian đã đo, không giới hạn phiên/ngày hoặc bán XP để đạt nhanh. Người đọc chậm/đi khám phá/nhóm có nhịp khác; mốc trú20–30phút của ROAD-01 vẫn mục tiêu mở đầu trong V01.

## 4. Khi đạt cap

XP chuyển nhiều cấp xử lý từngmốcgrant một lần đến cap. Cấp60 bỏ phần thừa không dùng, không khoXP cho expansion, không tự đổi ra vàng/AP/tu luyện. Alpha10 cũng không khoXP chờ mở bản đầy đủ; UI thông báo phạm vi. Quest vẫn nhận reward khác đúng bảng, không tăng tiền bù XP ngầm.

Không mất level/XP khi chết, không wipe mùa, không XPoffline/rest/paid booster V1. Đổi cap cần version và migration riêng, giữ grant/reward ledger, không phát lại AP/SP/TP cấp cũ.

## 5. UI và kiểm chứng sau

XPbar hiện x/T(L), level/cap và nguồn nhận; cap hiển thị Đã đạt cấp tối đa phiên bản. Reward preview nêu không tích XP ở cap. Server tính, eventId chống grant trùng. Cần kiểm nhận reward vượt nhiều cấp, cap/rollback/reconnect, bypass quest và đủXPcriticalpath; chưa code hoặc playthrough.


## Bổ sung đoạn 45→60

Từ L=45…59: **T(L)=ceil_to_100(50000×1,20^(L−45))**. Dùng bảng số nguyên có phiên bản trong [hồ sơ91](91_CAP_60_NOI_DUNG_45_VA_XP_HAU_TRUYEN.md), không cộng XP tuyến truyện một lần thành nguồn lặp. Cần 3.602.200 XP cho 45→60; tổng 1→60 là 3.920.100 XP. Mục tiêu 38–57 giờ chỉ thuộc nội dung 1→45; chưa đặt số giờ cho đoạn sau hoặc coi đó là thời gian đã đo. Quy tắc dừng XP và không tích kho áp dụng ở 60; 45 tiếp tục nhận XP hợp lệ.
