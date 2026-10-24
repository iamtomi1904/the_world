# ITEM-11 — Vật chứng và vòng đời nhiệm vụ

**Ngày:**21/10/2026 · **Trạng thái:** Hoàn thiện đặc tả trong phạm vi mục. Chỉ thiết kế MMORPG, chưa code/vẽ/test gameplay.

**Đầu vào:** [Quyền sở hữu16](16_PROD_07_SO_HUU_VA_TIEN_DO.md), [nghề28](28_HE_CHUNG_TOC_CHUC_NGHIEP_TRANG_BI.md), [ngân sách81](81_STAT_11_NGAN_SACH_VA_MOC_CAN_BANG.md), [vật phẩm135–145](145_TONG_HOP_10_MUC_HE_THONG_VAT_PHAM.md).

## 1. Tách bằng chứng khỏi hàng hóa

Vật chứng chính nằm trong journal nhân vật; vật thể ngoài bản đồ chỉ là điểm thu thập/tương tác. Không thể bán, bỏ, gửi mail, phân giải, đưa vào rèn hoặc giao dịch vật chứng. Không chiếm48 ô túi. Dấu Kiểm Ấn là dụng cụ điều tra của gia đình, không là relic cộng công, chìa huyết thống hoặc vật phẩm hồi sinh.

Bốn loại nghiệp vụ: EVIDENCE (bản ghi đã xác thực), QUEST_TOOL (dụng cụ dùng lặp có quyền), QUEST_KEY (quyền mở cửa), DELIVERY (hàng bàn giao có số lượng). Cùng hình cuộn giấy nhưng vai trò khác phải có definition khác; không suy quyền từ icon.

## 2. Vòng đời

| Giai đoạn | Trạng thái | Kết quả |
|---|---|---|
| Chưa phát hiện | UNKNOWN | Chỉ hiển thị gợi ý khi điều tra hợp lệ, không lộ đáp án |
| Đã quan sát | OBSERVED | Ghi điều người chơi thấy, chưa coi lời đồn là sự thật |
| Đã sao/nhận | RECORDED | Lưu evidenceId/version/nguồn; tương tác lại không nhân thưởng |
| Đã đối chiếu | VERIFIED | Thêm liên kết nhân chứng/biên bản, giữ lịch sử trước đó |
| Đã bàn giao | SUBMITTED | Hàng DELIVERY bị tiêu, bản ghi vẫn đọc được |
| Kết thúc | ARCHIVED | Không còn mục tiêu active, có tóm tắt hậu quả cá nhân |

Không phải mọi món phải đi qua đủ sáu bước; quest khai báo cạnh chuyển trạng thái. Dùng chìa chỉ tiêu quyền nếu ghi rõ consumable; mở lại cửa checkpoint không đòi farm chìa chính. Món giao hàng thông thường có thể đếm từ túi nếu quest chấp nhận, nhưng việc bàn giao phải reservation/commit số lượng và thưởng trong cùng giao dịch.

## 3. Gắn với chương đầu

M01 nhận quyền dụng cụ Dấu Kiểm Ấn và ghi chép gia đình, không cấp stat. M05 xác lập người chơi đã học kiểm chứng, không tự cấp đáp án bí mật. Trong Hầm Phong Ấn Cổ, bản ghi C03/C05 được sao trước lựa chọn Oren; cả ba kết cục giữ manh mối cần thiết và hướng Tro Trắng. Không nhét manh mối bắt buộc vào loot RNG hoặc phần thưởng chỉ dành cho người gây đòn cuối.

Tên C03/C05 là mã manh mối của hồ sơ truyện, không tự coi là phòng P3/P5 hoặc nhiệm vụ M03/M05. UI dùng tên dễ hiểu và liên kết tới sự kiện đã gặp. Nội dung bí mật chưa biết không được hiện trong tooltip “nguồn vật phẩm”.

## 4. Tổ đội, rời nhiệm vụ và lỗi mạng

Mỗi người giữ trạng thái evidence và lựa chọn riêng. Đi cùng người tiến độ cao có thể giúp combat nhưng không tự xác nhận đã đọc, chọn hoặc bàn giao. Người chưa đủ truyện thấy vật thể trung tính, không nhận lời thoại spoil từ journal của bạn.

Bỏ nhiệm vụ phụ giữ evidence đã ghi, xóa reservation giao hàng nếu có; không xóa vật phẩm tiêu thụ đã dùng hợp lệ. Tuyến chính có thể bỏ theo dõi, không xóa vĩnh viễn tiến trình. Nhận lại quest không cấp quà lần hai. Món hàng quest bị mất do lỗi hệ thống được khôi phục theo grantId, kiểm đã bàn giao/đã có trước khi cấp bù; không dùng NPC nhận lại để bán lặp.

## 5. UI, icon và tiêu chí

Tab Nhật ký có Vật chứng/Dụng cụ/Đã bàn giao, icon trang giấy, kính kiểm hoặc chìa. Chọn một vật chứng xem nguồn, điều đã biết và câu hỏi còn mở; có nút đọc lại. Sau bàn giao hiện “Đã giao hàng, bản ghi được lưu”. Từ túi T có liên kết mở journal, không tạo thêm phím cạnh tranh13ô.

Cần kiểm sau: đầy túi vẫn sao chứng cứ; chọn Oren khác nhau vẫn đủ manh mối; reconnect sau submit không mất hàng lẫn thưởng; giúp bạn không ghi đè truyện riêng; quest chính không bị reset qua đổi nghề. Đây là hợp đồng thiết kế, chưa test hoặc dựng UI.
