# STAT-13 — Đánh giá sức mạnh không gộp một lực chiến

**Ngày:**21/10/2026 · **Phiên bản:**1.0. Hoàn thiện quyết định thiết kế; chưa tạo UI/simulator. [Tham khảo](79_THAM_KHAO_TIEN_TRINH_VA_VAI_TRO_MMORPG.md). MMORPG, thủ thành giữ nguyên.

## 1. Quyết định bản đầu

Không phát hành một số Lực chiến tổng để xếp hạng hoặc khóa truyện. Đòn AoE, heal, tank, khống chế và pet không thể so công bằng chỉ bằng một tổng chỉ số. Level/đồ hiếm hoặc tiền nạp không tự làm vai trò hữu ích hơn trong mọi encounter.

Thay bằng bảng Sẵn sàng nội dung: cấp/quest/quyền vào, vũ khí và skill hợp lệ, trang bị thiếu slot, tài nguyên/tiêu thụ chuẩn bị. Story solo không bắt mua đồ chợ hoặc đủ lực chiến mới có manh mối. Dungeon khó có điều kiện được thiết kế riêng, không tạo gearScore ngầm dưới tên khác.

## 2. Bốn nhóm thông tin

Tấn công: công/crit/haste/nguồn damage, DPSfixture khi có simulator và ghi target/rotation rõ. Sinh tồn:HP/giáp/kháng/shield/DR có điều kiện, không một EHP cho mọi damage type. Hỗ trợ: healing/cleanses/aura và nguồn được phép. Cơ động/utility: skill đang mang, range/điều kiện, không biến utility thành điểm cạnh tranh tiền nạp.

V1 hiển thị số thật và nhãn vai trò, chưa cần chart gợi một xếp hạng chuẩn. Số mô phỏng chưa có engine thì ghi Chưa có dữ liệu đo, không điền placeholder thành kết quả hiện tại.

## 3. Nhóm và quyền riêng tư

Tìm nhóm cho tự chọn vai trò phù hợp kit/skill hiện hành, leader thấy nội dung/role/mức chuẩn bị được người chơi chia sẻ. Không tự kick healer vì DPS thấp. Không công bố AP/roll bí mật hoặc log riêng chỉ vì người khác inspect.

Kết quả encounter có damage/heal/shield/cleanse/tank hữu ích khi dữ liệu có, nhưng không thưởng MVP theo một công thức damage duy nhất. Reward eligibility ở STAT-14/LEVEL-03; loot chuyên môn còn riêng.

## 4. Nếu sau này muốn lực chiến

Cần proposal riêng: mục đích, các trọng số theo role/target, sai số/điều kiện, ảnh hưởng pay/economy và khả năng thao túng. Không mặc định nâng maxHP làm mạnh DPS hoặc crit cap dư làm tăng điểm. Không hồi sinh một số tổng từ ngân sách35/45/20 vì đó là phân bổ thiết kế.

## 5. Hoàn tất phạm vi

Task “nếu dùng lực chiến” được giải quyết bằng quyết định **không dùng số tổng trong bản đầu** và phương án đánh giá thay thế. Chưa có UI hoặc thuật toán xếp hạng; không loại khỏi backlog vì hiểu là đã cân mọi role.
