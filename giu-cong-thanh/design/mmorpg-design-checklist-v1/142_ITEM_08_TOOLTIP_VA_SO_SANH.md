# ITEM-08 — Tooltip, so sánh và ngôn ngữ hình ảnh

**Ngày:**21/10/2026 · **Trạng thái:** Hoàn thiện đặc tả thiết kế V1 trong phạm vi mục; chưa code, vẽ asset hoặc kiểm thử gameplay.

**Phạm vi:** MMORPG Ẩn Thành, web/PC, PostgreSQL và server có thẩm quyền. Tham chiếu [quyền sở hữu16](16_PROD_07_SO_HUU_VA_TIEN_DO.md), [hệ nghề28](28_HE_CHUNG_TOC_CHUC_NGHIEP_TRANG_BI.md), [hotbar64](64_HOTBAR_13_O_KY_NANG_VAT_PHAM.md), [hồi sinh104](104_COMBAT_13_CHET_VA_HOI_SINH.md).

## 1. Thứ tự thông tin

Tên và icon → loại/slot/cấp yêu cầu → lý do chưa dùng được → chỉ số nền → affix → nâng/khảm/set từng khối → mô tả hành vi, cost/CD và quy tắc cộng dồn → binding/hạn → nguồn nhận → lore ngắn. Ẩn khối không tồn tại, không điền dòng0 gây nhiễu. Mô tả chỉ nói cơ chế đã khai báo; món có hiệu ứng điều kiện phải ghi điều kiện, thời gian và cooldown nội bộ.

## 2. So sánh đúng

So với món ở đúng slot, chọn trái/phải nếu hai vị trí phù hợp. Vũ khí hai tay preview cả việc tháo offhand; không chỉ so attack. So sánh stat trước/sau sau công thức Union/cap, hiển thị phần vượt trần không có tác dụng. Luck15% và phần dư chuyển crit phải theo STAT hiện hành. Không gọi món mới “tốt hơn” chỉ vì rarity cao; không cộng DPS proc chưa có dữ liệu thành số chắc chắn.

Ngoại hình riêng PAL/DKN hoặc race không thay raw stat; ghi biểu tượng preview horse armor theo yêu cầu mounted. Nghề/nhánh sai hiển thị chữ và icon, không chỉ đỏ. Chưa chuyển nghề thì ghi điều kiện thật, không tự chặn bằng tên dịch class.

## 3. Điều khiển và layout

Hover mở tooltip ngắn, chọn món ghim bản chi tiết; Shift khi tooltip focus mở so sánh (không xung đột Shift tách vì menu tách cần drag). Có nút So sánh và điều hướng bàn phím. Tooltip neo theo ô, tự lật trong viewport; không che nút xác nhận của cửa sổ đang thao tác. Màn hẹp chỉ một tooltip và nút chuyển “Đang mặc/Món chọn”. Escape/~ theo hệ cửa sổ hiện có, không tự kích hoạt món.

## 4. Icon pixel V4

Bốn lớp độc lập: hình vật, viền rarity theo GEAR-03 về sau, badge binding, badge an toàn/thời hạn. Tối đa hai badge chính ở ô, còn lại trong tooltip. Hình cộng HP, mana, lá cây, quặng, thư khác silhouette; không dùng particle đậm trong lưới. Focus/hover có viền đủ tương phản; thông tin không phụ thuộc màu. Đây là bản mô tả UI/icon, chưa phải asset đã vẽ.

## 5. Tính trung thực

Bảng tỷ lệ hộp chỉ xem khi có rewardTableVersion; không ghi “có cơ hội” thay phần trăm. Hiệu ứng chưa phát hành không được ghi như đang hoạt động. Preview dùng trạng thái hiện tại được server xác nhận, thay gear ngoài dự kiến thì báo cần cập nhật thay vì commit kết quả cũ.
