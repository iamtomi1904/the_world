> **Quyết định hiện hành · 21/10/2026:** [Trần nhân vật 60, nội dung đến 45](91_CAP_60_NOI_DUNG_45_VA_XP_HAU_TRUYEN.md). Giữ năm vùng hiện tại; cấp 45→60 luyện dài hạn. AP ở 45/60 là 132/177; SP giữ 35, TP giữ 11 sau 45. Quy tắc XP hậu truyện thay bảng chênh cấp khi đủ điều kiện. Các số cấp 45 trong ví dụ vẫn là mốc nội dung, không phải trần nhân vật. Chưa triển khai vào game.

# LEVEL-04 — Điểm cấp, phân thử, reset và preset

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0  
**Trạng thái:** Hoàn thiện hợp đồng điểm; chưa database, UI hoặc runtime. [Tham khảo](79_THAM_KHAO_TIEN_TRINH_VA_VAI_TRO_MMORPG.md). Thủ thành giữ nguyên.

## 1. Ba pool riêng

| Pool | Nguồn và mục đích | Tổng ở cấp 45 |
|---|---|---:|
| AP thuộc tính | 3 điểm mỗi cấp từ 2 đến 60; mỗi AP cộng một điểm gốc, tối đa phân 90 vào một stat. | 132 |
| SP rank | 1 điểm ở cấp 8/10/12/14; từ 15 đến 45 mỗi cấp một điểm. | 35 |
| TP thiên phú | 1 điểm ở cấp 15/18/21/24/27/30/33/36/39/42/45. | 11 |

Nền tự nhiên của mỗi thuộc tính là 5+floor((L−1)/5), không phải AP có thể hoàn. Nâng rank 1→2/2→3/3→4/4→5 tốn 1/1/2/2 SP; trần rank theo cấp 1/8/15/25/35. Node TP nhỏ tốn 1, node chủ chốt tốn 2 theo hồ sơ 31. Không pool nào là mana, tiền nạp hoặc vật phẩm giao dịch.

Grant theo từng mốc cấp một lần cho nhân vật. Nhận XP vượt nhiều cấp phải xử lý đủ các mốc đến cap. Reset hoặc đổi nghề không phát lại grant. Với mỗi phân bổ hợp lệ: điểm đã dùng + điểm chưa dùng = điểm được cấp có hiệu lực. Không nhận số tổng từ client để tự bù thiếu.

## 2. AP bản nháp và commit

C → Phân điểm có nút +/- và nhập số theo lô với giới hạn, Hoàn tác và Hủy nháp. Sheet hiện tại → dự kiến phải tính cả chỉ số chung, nội tại chủ đạo và cap. Áp dụng theo quyền ngoài combat của hồ sơ 67; server kiểm revision, nguồn điểm và trần trong một giao dịch nhất quán.

Nếu combat bắt đầu trước commit, từ chối và giữ nháp. Nếu mất phản hồi sau gửi, dùng trạng thái Chưa rõ kết quả theo UI-05, không cộng local hoặc gửi yêu cầu mới tùy ý.

Reset AP miễn phí tại điểm nghỉ/thầy, không bán đá reset nạp. Hiển thị rõ nguồn giữ/mất, giữ HP/mana hiện tại và clamp khi max giảm; không tạo hồi phục miễn phí.

V1 có một phân bổ AP đang hiệu lực chung cho nhân vật. **Hai preset kỹ năng không tạo hai pool AP hoặc tự đổi AP khi đổi preset.** Người chơi có thể lưu phương án AP như kế hoạch để áp tại nơi hợp lệ, nhưng không chuyển K-preset thành cách bơm max HP giữa trận.

## 3. SP/TP và thanh 13 ô

Hai preset kỹ năng mở từ chuyển nghề cấp 15. Mỗi preset là một cách phân cùng ngân sách SP/TP; chỉ một preset hoạt động. Hotbar 13 ô chứa skill/item theo hồ sơ 64; đặt trùng không nhân rank, nguồn vật phẩm hoặc cooldown.

Item count và thời hạn cooldown lấy từ trạng thái thật, không lưu vào preset để khôi phục. Reset AP tách với reset SP/TP; muốn làm cả hai phải có preview rõ phạm vi, không nút mơ hồ xóa toàn bộ cấu hình. Chưa mở đổi race/nghề/nhánh tự do.

Nội tại chủ đạo tính lại từ AP và nguồn gear hợp lệ theo hồ sơ 78, không grant buff vĩnh viễn sau mỗi lần reset.

## 4. Chậm chuyển chức và cap

Đạt 15/30 nhưng chưa làm nhiệm vụ vẫn nhận điểm theo cấp, có thể giữ chưa dùng khi node chưa có quyền. Không tự chọn nghề hoặc khóa XP. Skill mới ở cấp cao vẫn bắt đầu rank 1; không sao rank skill khác.

Tiến hóa cùng dòng mặc định kế thừa 1:1 theo hồ sơ 32; form cũ không được dùng như cooldown thứ hai. Alpha cấp 10 có AP27, SP2, TP0; mốc45 có AP132, SP35, TP11; cap60 có AP177, SP35, TP11.

Tăng cap hoặc đổi cây kỹ năng cần migration có version, hoàn đúng điểm bị ảnh hưởng và log lý do; không phát lại toàn bộ điểm cũ hoặc hoàn tiền giả. Quyền theo cap server, không theo client sửa file.

## 5. Lưu dữ liệu và kiểm chứng sau

PostgreSQL lưu grant ledger, phân AP, preset SP/TP, shortcut và phiên bản quy tắc; gear/buff là nguồn riêng. Reconnect tính lại tổng, không nhân chuyển hóa thuộc tính.

Cần kiểm grant đa cấp, event trùng, reset khi HP thấp, đổi preset/cánh ngựa và mất mạng lúc commit. Chưa thực hiện. Reset layout UI-04 không tác động các pool hoặc xóa nháp nghiệp vụ này.


## Điểm sau cấp45

| Mốc | AP tổng | SP tổng | TP tổng | Nền tự nhiên mỗi thuộc tính |
|---|---:|---:|---:|---:|
|45|132|35|11|13|
|60|177|35|11|16|

Mỗi cấp46–60 cấp thêm3 AP, tổng thêm45 AP. Không cấp SP/TP tự động sau45; không nâng trần rank5, không mở thêm nghề. Trần phân bổ90 AP vào một thuộc tính vẫn giữ. Thay đổi grant/cap tiếp theo phải có migration, không tự phát lại điểm cũ.
