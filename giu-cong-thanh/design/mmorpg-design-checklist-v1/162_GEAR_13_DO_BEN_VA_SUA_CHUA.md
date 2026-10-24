# GEAR-13 — Độ bền và vai trò thợ rèn

**Ngày:**21/10/2026 · **Trạng thái:** Hoàn thiện đặc tả V1 trong phạm vi mục; chưa code, vẽ hoặc kiểm chứng cân bằng bằng gameplay.

**Đầu vào:** [Slot148](148_GEAR_01_SLOT_VU_KHI_VA_QUYEN_MAC.md), [ma trận152](152_GEAR_04_MA_TRAN_NGAN_SACH_TRANG_BI.md), [affix154](154_GEAR_06_POOL_DONG_THUOC_TINH.md), [số dòng155](155_GEAR_07_SO_DONG_TIER_VA_QUY_TAC_ROLL.md), [ngân sách81](81_STAT_11_NGAN_SACH_VA_MOC_CAN_BANG.md). Chỉ MMORPG, không sửa thủ thành.

## 1. Quyết định V1: không dùng độ bền

Trang bị MMORPG bản đầu không hao durability do đánh, bị đánh, chết hoặc logout; không hỏng, mất stat, vỡ vĩnh viễn hoặc cần trả phí sửa định kỳ. Không thêm durability100và tự hồi như một hệ giả. Nếu dữ liệu dùng chung có trường này thì definition phải ghi NOT_APPLICABLE, UI ẩn khối.

Người chơi đã chịu phí/vật phẩm hồi sinh theo104. Không tự thêm thuế chết bằng sửa đồ, không thu thêm một lần lúc đăng nhập sau chết. Item bị hết hạn/reservation hoặc sai quyền mặc vẫn xử lý theo policy riêng, không gọi là hỏng đồ.

## 2. Thợ rèn vẫn có vai trò

Borin Dael và dịch vụ phù hợp phục vụ chế tác, nâng cấp, khảm/tách khi các hệ đó phát hành, preview trang bị và ngoại hình. Chi phí kinh tế đến từ recipe/dịch vụ có giá rõ, không bịa thêm nút sửa để tạo sink. Dịch vụ chưa có hợp đồng không hiển thị như đã dùng được.

Truyện có thể yêu cầu sửa một cổng, cầu hoặc dụng cụ nhiệm vụ. Đó là quest/world-object repair, không đồng nghĩa mọi vũ khí nhân vật hao độ bền. Không nhầm sửa thành của chế độ thủ thành với sửa gear MMORPG; thủ thành không đổi.

## 3. Đường thoát khi thiếu tiền

Vũ khí nền chuyển chức theo28/148và hồi sinh cứu trợ theo104giữ nguyên; không phải cầm đồ hỏng hoặc nạp mới đánh tiếp. Đồ bị khóa không được biến thành hàng tự do để bù phí. Không lấy quyết định khôngdurability làm lý do tăng gấp đôi phí hồi sinh âm thầm.

## 4. Nếu mở trong tương lai

Chỉ xem xét sau khi có mục tiêu gameplay cụ thể, nguồn tiền/sink, tác động nhóm/solo, điểm dịch vụ và cơ chế phục hồi miễn phí cho người mắc kẹt. Cần phiên bản thiết kế mới, thông báo và migration; đồ cũ không đột ngột về0. Không dự trữ một sink đã tính trong kinh tếV1vì hiện hệ này không tồn tại.

## 5. Nghiệm thu

Death/rez không đổi stat item; không có invoice sửa gear, nút sửa hoặc chỉ báo vỡ. Khả năng chiến đấu chỉ do nguồn hợp lệ khác, không durabilityẩn. GEAR-13 hoàn thiện bằng quyết định không dùng hệ trong V1, không phải đã triển khai sửa chữa.
