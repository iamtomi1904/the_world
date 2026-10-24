# ITEM-05 — Truyền khóa trong chế tác và chuyển đổi

**Ngày:**21/10/2026 · **Trạng thái:** Hoàn thiện đặc tả thiết kế V1 trong phạm vi mục; chưa code, vẽ asset hoặc kiểm thử gameplay.

**Phạm vi:** MMORPG Ẩn Thành, web/PC, PostgreSQL và server có thẩm quyền. Tham chiếu [quyền sở hữu16](16_PROD_07_SO_HUU_VA_TIEN_DO.md), [hệ nghề28](28_HE_CHUNG_TOC_CHUC_NGHIEP_TRANG_BI.md), [hotbar64](64_HOTBAR_13_O_KY_NANG_VAT_PHAM.md), [hồi sinh104](104_COMBAT_13_CHET_VA_HOI_SINH.md).

## 1. Quy tắc mặc định

Đầu ra nhận mức khóa chặt nhất của mọi **vật phẩm** đầu vào và binding tối thiểu của công thức. UNBOUND < ACCOUNT_SERVER < CHARACTER. Đầu vào CHARACTER phải thuộc nhân vật đang thực hiện; nguyên liệu khóa của hai nhân vật khác nhau không thể gộp. QUEST_CHARACTER không được dùng trong chế tác thường, chỉ trong bước quest xác định.

Dùng Ngân Ấn trả phí dịch vụ không tự khóa mọi sản phẩm; đây là tiền phí đã tiêu hủy, không phải vật liệu truyền khóa. Công thức chỉ dùng tiền khóa để tạo hàng tự do cần kiểm nguồn kinh tế riêng trước phát hành. Không tự bán lấy Đồng Elarion ở NPC để né cap.

## 2. Preview và lựa chọn

Màn rèn liệt kê từng stack được chọn và binding đầu ra. Mặc định ưu tiên nguyên liệu khóa phù hợp để không tiêu nhầm hàng có thể bán, nhưng trước lần craft phải cho đổi lựa chọn và báo “Sản phẩm sẽ khóa nhân vật”. Không trộn vật liệu có thời hạn vào công thức thường; công thức sự kiện phải nêu expiry đầu ra, không âm thầm kéo dài hạn.

## 3. Phân giải, tháo ngọc, tách và tái chế

Thành phần thu lại giữ mức khóa của món chứa và ràng buộc gốc của thành phần, chọn mức chặt hơn. Ghép vật không khóa với đá khóa rồi tháo không tạo đá tự do. Không giữ hai bản item khi ghép lỗi. Container thưởng không giảm khóa bên trong: đầu ra theo floor binding hộp và từng reward; các ngoại lệ đặc thù chỉ được phát hành sau khi kiểm đường chuyển đổi, không cho override bằng client.

## 4. Ví dụ

Quặng tự do + sợi khóa account → thành phẩm ít nhất khóa account. Kiếm khóa nhân vật + đá tự do → kiếm và vật liệu thu hồi khóa nhân vật. Phí Ngân Ấn + hai nguyên liệu tự do → giữ policy công thức, không mặc định khóa. Phân giải món quest bị chặn. Tooltip preview đúng trước commit, không chỉ báo sau khi mất nguyên liệu.

## 5. Tiêu chí

Kiểm toàn chuỗi craft→nâng→tháo→phân giải→chợ; không chỉ một bước. Hệ CRAFT/SOCKET/UPGRADE sau phải tham chiếu quy tắc này. Chưa chốt tỷ lệ thành công, sản lượng, giá hay affix.
