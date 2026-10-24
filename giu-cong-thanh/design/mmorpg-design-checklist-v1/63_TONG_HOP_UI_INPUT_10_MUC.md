> **Cập nhật có hiệu lực · 21/10/2026:** [Thanh 13 ô hỗn hợp](64_HOTBAR_13_O_KY_NANG_VAT_PHAM.md) thay cấu trúc tám ô/ô bắt buộc bên dưới: 1–9,Q,E,R,Z, kéo kỹ năng hoặc vật phẩm tiêu thụ; giữ WASD + con trỏ. Số lượng/cooldown không nhân theo shortcut. Các đoạn cấu trúc cũ chỉ còn lịch sử khi xung đột.

# Tổng hợp 10 hồ sơ UI-07…12 và INPUT-01…04

**Ngày:** 21/10/2026. **Phong cách giữ nguyên:** MMORPG 2.5D pixel V4. Thủ thành không thay đổi.

[Nghiên cứu chính thức và giới hạn nguồn](52_THAM_KHAO_UI_INPUT_MMORPG_SPRITE.md): Ragnarok Online, Tree of Savior; Tibia chỉ trích đoạn vì trang đầy đủ bị chặn. Tham khảo tổ chức UI, không sao chép asset, combat, kinh tế hoặc hệ class.

## Hồ sơ và quyết định

| Mục | Hồ sơ | Kết quả |
|---|---|---|
| UI-07 | [Mở thiết kế](53_UI_07_TOOLTIP_VA_SO_SANH.md) | Tooltip hover/focus/detail, ghim và so sánh vật phẩm/kỹ năng, quyền snapshot và cửa sổ nhỏ. |
| UI-08 | [Mở thiết kế](54_UI_08_GAN_LAI_PHIM.md) | Gán lại action, xung đột theo context/layout, reset/import/profile thiết bị. |
| UI-09 | [Mở thiết kế](55_UI_09_CHAT_IME_VA_FOCUS.md) | Focus chat/IME tiếng Việt, clipboard, modifier và giải phóng input giữ khi mất focus. |
| UI-10 | [Mở thiết kế](56_UI_10_XAC_NHAN_VA_HAU_QUA.md) | Preview hậu quả/giá/binding, xác nhận theo snapshot, pending và quyết định class/truyện. |
| UI-11 | [Mở thiết kế](57_UI_11_VONG_DOI_CUA_SO.md) | Hợp đồng trạng thái màn, chết/chuyển vùng/disconnect/reconnect và phục hồi theo họ cửa sổ. |
| UI-12 | [Mở thiết kế](58_UI_12_TIEP_CAN_VA_GIAM_HIEU_UNG.md) | Chữ lớn, glyph ngoài màu, keyboard, caption và giảm flash/rung/VFX; chưa audit tiếp cận. |
| INPUT-01 | [Mở thiết kế](59_INPUT_01_DIEU_KHIEN_WEB_PC.md) | Bản đồ phím web/PC, tám active, Space alias cùng dòng cơ động, ngắm/confirm và phím reserved. |
| INPUT-02 | [Mở thiết kế](60_INPUT_02_MOBILE_DINH_HUONG.md) | Hoàn thiện hướng mở rộng mobile: touch/multi-pointer/aim/tooltip và cổng prototype; chưa thuộc bản đầu. |
| INPUT-03 | [Mở thiết kế](61_INPUT_03_GAMEPAD_DINH_HUONG.md) | Hoàn thiện quyết định chưa hỗ trợ bản đầu và mapping tương lai hai bank bốn skill, focus/glyph/aim. |
| INPUT-04 | [Mở thiết kế](62_INPUT_04_NHAN_GIU_KEO_THA.md) | Gesture nhấn/giữ/kéo/cancel, khóa chỉnh hotbar, repeat theo combat và thao tác nhanh an toàn. |

## Điểm chốt chung

Tooltip có đường mở bằng focus/detail, không chỉ hover; compare chọn đúng slot và không bịa lực chiến. Gán phím theo action, tách IME/chat và gameplay. Xác nhận có đúng item/giá/hậu quả, kiểm lại khi state thay; timeout không tự là thất bại. Mỗi màn có hợp đồng chết/map/disconnect, không đồng nghĩa đã vẽ đủ 58 màn.

PC/web dùng WASD + con trỏ; tám active mặc định 1/2/3/4/Q/E/R/Z. Space chỉ alias dòng cơ động, không tăng số skill hoặc bypass cần ngựa. Skill định hướng/đất có preview-confirm, xác nhận không đánh thường cùng lúc. Chốt này thay mô tả gợi ý phím 1–8/Space né riêng cũ khi xung đột; combat timing/range vẫn ở COMBAT.

Hotbar khóa chỉnh mặc định khi chơi. Giữ đánh thường chỉ lặp theo nhịp game hợp lệ, không theo tốc độ click/FPS. Drag ra ngoài không phá món, nhấn đúp không tự mua/phá/giao dịch. Nhập layout/bind là dữ liệu thuần, không macro/script.

Mobile và gamepad: đã thiết kế hướng mở rộng và cổng kiểm chứng, **không thuộc hỗ trợ bản đầu**. Checkbox hoàn thiện hai mục INPUT-02/03 nghĩa là đã có quyết định phạm vi và hồ sơ, không đổi M0/M1 hoặc quảng bá tương thích thiết bị.

## Điều chưa làm

Chưa vẽ mockup đủ màn, icon mới, runtime input, API/schema/storage, scene 2.5D, mô phỏng mạng hoặc kiểm trên thiết bị. Các ngưỡng giữ/drag/tooltip/timeout phải thành cấu hình và chốt qua mẫu, chưa có giá trị cân bằng giả. Chưa hoàn thiện SCREEN/FLOW/STAT/COMBAT/NET/SAFE chỉ vì tài liệu UI có yêu cầu liên quan.

## Checklist và việc tiếp theo

Đã cập nhật 10 task gốc, không thêm task ID trùng. Hiện **34/513 hồ sơ hoàn thiện, 6 một phần, 473 chưa thiết kế**. Sáu mục một phần vẫn ART-01/02/04 và SKILL-03/05/06.

Mục tiếp theo theo thứ tự là **ROAD-02**, cổng đối chiếu lore/tỷ lệ/camera/phối cảnh/cách đo khoảng cách trước sản xuất hàng loạt. Chưa thể đóng cổng này chỉ bằng mô tả khi scene 2.5D chưa có kết quả; cần ghi phần đạt/chưa đạt, rồi tiếp tục thiết kế STAT-01 nếu phần độc lập có đủ đầu vào.
