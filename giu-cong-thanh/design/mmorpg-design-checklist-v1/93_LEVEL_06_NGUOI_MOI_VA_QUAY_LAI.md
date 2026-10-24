# LEVEL-06 — Người mới, người quay lại và tiến trình dài hạn

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0. Hoàn thiện thiết kế trong phạm vi mục; chưa triển khai/chơi thử. [Nghiên cứu](92_THAM_KHAO_LEVEL_VA_COMBAT_MMORPG.md). MMORPG 2.5D pixel V4; thủ thành giữ nguyên.

## 1. Mục tiêu và quyết định V1

Giúp người trở lại biết làm gì và tìm bạn chơi cùng mà không xóa giá trị luyện cấp. **Không XP nghỉ, không XP offline, không bonus đăng nhập/nghỉ lâu và không vé nhảy cấp V1.** Không có thanh rested ẩn, kho thưởng tích khi logout hoặc ưu đãi tăng XP cho tài khoản nạp. Đã đạt60 vẫn không tích XP chờ mở rộng.

Cấp1–45 là hành trình nội dung, cấp45–60 là luyện dài hạn trên nội dung40–45. Mainquest không yêu cầu60. Không tăng reward một lần cho nhân vật mới tùy tuổi server, không giảm XP nhân vật cũ để san bằng. Đổi XP tương lai cần version/migration, không áp lén hệ số theo tài khoản.

## 2. Luồng quay lại

Đề xuất cấu hình **vắng7 ngày** mới gợi ý bản tóm tắt, tối đa một lần mỗi lần quay lại; cũng mở thủ công từ nhật ký L → Tiếp tục hành trình. Không tạo nhiệm vụ/reward chỉ vì đạt mốc7 ngày.

Panel trình bày: vị trí an toàn gần nhất đã biết → tóm tắt đoạn truyện đã làm, không spoiler → mục tiêu đang theo → nghề/nhánh chưa hoàn tất nếu đủ15/30 → AP/SP/TP còn dư → skill/item hotbar không dùng được → thay đổi phiên bản ảnh hưởng build. Có nút Theo dõi, Xem K/C, Xem thay đổi và Để sau. Không dịch chuyển, phân điểm hoặc thay đồ tự động.

Nếu đăng nhập giữa vùng nguy hiểm, chỉ hiện badge; không mở modal chặn chiến đấu. Nhân vật vẫn theo luật NET, không nhận miễn thương vì panel. Hệ hướng dẫn dùng quest flags thật, không suy rằng cấp30 đồng nghĩa đã chuyển nhánh.

## 3. Hỗ trợ người mới mà không kéo cấp tự động

Giữ nguồn gear/nhiệm vụ nền đủ cho mainstory theo thiết kế item/quest sau; không tự grant bộ đồ endgame trong hồ sơ này. Nhật ký có đường quay về thầy/nhiệm vụ chuyển chức, thông tin vùng khuyến nghị và đường đi đã khám phá. Chỉ dẫn không reveal rương ẩn hoặc giải dungeon.

Chơi cùng bạn áp quyền ghi công [STAT-14](84_STAT_14_VAI_TRO_SOLO_VA_GHI_CONG.md) và XP [LEVEL-03](87_LEVEL_03_XP_NHOM_VA_HO_TRO.md), không biến mọi người trong party thành người nhận thưởng. Quest truyện riêng kiểm tiến trình từng người, không tự bỏ các bước trước chỉ vì chủ nhóm đã xong. Phần thưởng một lần không phát lại khi giúp bạn; chi tiết chia mục tiêu quest còn ở QUEST.

V1 chưa có level sync: người60 hỗ trợ vẫn có chỉ số60 và phải theo quyền encounter. Không gắn nhãn “Đã cân bằng cấp” lên người chưa scale. Người dưới45 có helper cùng nhóm chênh hơn5 cấp vẫn theo Fcarry0,25 hiện hành; preview giải thích trước nhận. Người ngoài nhóm không áp carry penalty lên người mới chỉ vì đi ngang; quyền chống cướp quái ở COMBAT-11/12 cần hoàn thiện tiếp.

## 4. Giữ đường luyện45–60

Người45–59 đánh quái tự nhiên hợp lệ40–45 dùng Flevel0,50. Người nhận/helper đều từ45 không chịu thêm Fcarry; nhân vật60 không chia phần hoặc tạo bonus killXP. Không thêm daily cap lên nguồn grind hợp lệ, không ép lịch online để làm chậm giả. Mục tiêu ngoài XP gồm hoàn thiện build, đặc sản dungeon, khám phá và chơi cùng cộng đồng; không tự hứa loot chưa thiết kế.

Ví dụ: người59 solo quái45 nhận49 XP; người60 nhận0. Người20 có helper60 không hưởng ngoại lệ40–45, còn phải thỏa quyền nội dung/đóng góp và luật chống kéo cấp. Giúp người mới là quyền tham gia, không nghĩa vụ phải được XP ở mọi khu vực.

## 5. Dữ liệu, UI và điều kiện kiểm sau

Lưu lastSeen server-time để gợi ý, version tóm tắt đã xem và lựa chọn ẩn gợi ý; không dùng thời gian client để phát XP. Đây là metadata dịch vụ, không currency. Không xóa tiến trình khi từ chối panel.

Kiểm sau: quay lại6/7/30 ngày, có quest đủ cấp chưa chuyển nghề, đang combat/chết, giúp bạn khác tiến độ, nhân vật45/59/60, lặp mở panel không nhận grant. Mục hoàn thiện ở cấp thiết kế; chưa chứng minh thời gian luyện hoặc hiệu quả giữ người chơi.
