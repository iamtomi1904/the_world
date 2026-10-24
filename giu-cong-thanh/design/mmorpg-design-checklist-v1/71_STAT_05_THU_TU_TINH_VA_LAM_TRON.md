# STAT-05 — Pipeline chỉ số và làm tròn

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0  
**Trạng thái:** Hoàn thiện đặc tả V1, chưa runtime/playtest. [Nghiên cứu](65_THAM_KHAO_HE_CHI_SO_MMORPG_2_5D.md). Chỉ MMORPG; thủ thành giữ nguyên.

## 1. Pipeline thường

1. Kiểm version/quyền, lọc source theo điều kiện.
2. Thuộc tính gốc R=max(0,(N+AP+Σflat_R)×max(0,1+Σpct_R)).
3. Chuyển R thành HP/công/mana/giáp theo STAT-02.
4. Stat thường Xpre=(base_X+Σflat_X)×max(0,1+Σincrease_X−Σdecrease_X).
5. Áp policy đặc biệt và cap đúng stat. Root khóa quyền movement, không lưu speed âm vào item.
6. Rate theo nhóm riêng bên dưới; damage dùng snapshot hợp lệ STAT-06/09.

Không mở generic “more multiplier” trên mỗi món. Các tầng nhân chỉ là nhóm được pipeline damage nêu, không một dòng item là một tầng nhân mới.

## 2. Rate phần còn lại

Haste/penetration/CDR/tenacity: Union(b)=1−Π(1−b_i), mỗi nguồn b∈[0,1], cap đầu ra tùy stat. Hai10%→19%, thêm5%→23,05%. Không round từng bước. Remove nguồn rồi tính lại tập còn, không23,05−5.

Nguồn invalid bị từ chối/log nội dung, không silent clamp gian lận. Debuff không cho b âm vào Union. AttackSlow dùng Union(s_i) riêng, cap60%; f=f0×(1+haste)×(1−slow). Crit chance/bonus/luck/element modifier dùng nhóm cộng đã quy định, không tự Union mọi %.

## 3. Làm tròn

Giữ phân số trong pipeline, chỉ format khi hiển thị. Server có thẩm quyền; triển khai chọn decimal/fixed-point hoặc quy tắc số nhất quán và version, không hứa bitwise deterministic trước có code. UI preview cùng rule, không dùng con số hiển thị đã round để tính tiếp.

HP/mana/shield là đơn vị nguyên. Packet damage floor một lần sau giảm trước pool; không round từng component. Heal floor rồi clamp HP thiếu. DoT/HoT nhỏ giữ accumulator phần dư theo effect, không0,1tick thành1 hoặc mất vĩnh viễn vì floor mỗi tick. Accumulator không gây tick sau entity chết/hủy.

Thời gian server/fixed schedule, không FPS. Tick schedule≤endTime vẫn xử lý trước expire ở cùng mốc, sau đó cleanup. Không setInterval riêng mỗi lần trúng.

## 4. Ví dụ

Base công100 +flat20; tăng10%+20%, giảm10% chung nhóm→120×1,20=144, không100×1,1×1,2 rồi cộng20.

Haste10+10+5→23,05%; attackSlow20%; base1s →f0,9844/s, interval≈1,01585s. UI có thể ghi1,02s, logic không dùng1,02 lặp thời gian. Hai affix5%→9,75%.

Giảm giáp/penetration không nằm trong phép tăng stat nguồn này mà xử lý riêng khi hit theo STAT-08. Số âm defense bị clamp0, vulnerability là group khác.

## 5. Invariant cần kiểm sau

Đổi thứ tự equip nguồn độc lập không đổi tổng; apply-remove khôi phục; duplicate event không thêm source; mọi số hữu hạn, cap đúng nhóm; hiển thị round không thay outcome. Đây là ví dụ tính và tiêu chí, chưa có test runtime, migration hoặc bảng cân bằng thật.


## Bổ sung nội tại chủ đạo theo nhánh · 21/10/2026

[Hồ sơ78](78_NOI_TAI_CHU_DAO_CUA_19_NHANH.md) thêm profile chuyển hóa một/hai thuộc tính cho19nhánh. Lợi ích gốc vẫn giữ; AP + flat root từ gear hợp lệ tạo R giảm dần, bonus đi vào nhóm damage/heal/shield/pet đã quy định, không tự nhân stat vòng lặp. Mở cùng nội tại nhánh ở30, không chiếm13ô hoặc ba ô passive tùy chọn. Hệ số là cấu hình thử, không hoàn thiện bộ kit/cân bằng.
