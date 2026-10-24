# ITEM-03 — Mẫu, món cụ thể và lịch sử sở hữu

**Ngày:**21/10/2026 · **Trạng thái:** Hoàn thiện đặc tả thiết kế V1 trong phạm vi mục; chưa code, vẽ asset hoặc kiểm thử gameplay.

**Phạm vi:** MMORPG Ẩn Thành, web/PC, PostgreSQL và server có thẩm quyền. Tham chiếu [quyền sở hữu16](16_PROD_07_SO_HUU_VA_TIEN_DO.md), [hệ nghề28](28_HE_CHUNG_TOC_CHUC_NGHIEP_TRANG_BI.md), [hotbar64](64_HOTBAR_13_O_KY_NANG_VAT_PHAM.md), [hồi sinh104](104_COMBAT_13_CHET_VA_HOI_SINH.md).

## 1. Ba tầng

Template mô tả loại vật; instance mô tả món không thể gộp có roll/nâng cấp; stack mô tả số lượng các đơn vị hoàn toàn tương đương. Trang bị mỗi món có instanceId và quantity1. Nguyên liệu dùng stackId, không tạo hàng triệu món riêng. Roll vật phẩm chỉ xảy ra một lần tại grant đã cam kết, không khi mở tooltip, đổi máy hoặc đăng nhập lại.

Instance giữ template/version, affix đã roll, cấp nâng, socket, owner, vị trí, binding, thời hạn, revision. Các quyền ngoại trang đã mở là entitlement riêng, không là instance đang mặc có thể bán. Không ghi tọa độ combat mỗi frame vào món.

## 2. Vị trí độc quyền

Một món chỉ có một vị trí: túi, slot trang bị, kho hợp lệ, escrow giao dịch/chợ, vùng nhận thưởng hoặc đã tiêu hủy. Slot giao dịch trên UI chỉ là reservation; commit chuyển ownership đúng một lần. Trang bị và hotbar chỉ tham chiếu, không sao chép instance. Đổi kênh/web/PC vẫn đọc cùng state có thẩm quyền.

## 3. Chuyển trạng thái

Grant với cùng grantId trả cùng kết quả, không roll lại; thao tác dùng expectedRevision để phát hiện UI cũ. Đặt chợ và phân giải đồng thời chỉ một thao tác được commit. Nếu server lỗi sau commit, retry trả receipt cũ; nếu trước commit thì không mất tiền/nguyên liệu. Không tự gửi “đồ bù” khi chưa đối chiếu giao dịch gốc.

## 4. Người chơi nhận biết

Hai kiếm cùng tên có dòng roll khác được xem so sánh song song; hiển thị nâng, socket, binding, nguồn, ngày nhận khi cần. Mã ngắn instance có thể dùng trong hỗ trợ, không chiếm tooltip mặc định. Lịch sử giao dịch lưu phía server, công khai cho chủ món những sự kiện cần thiết; không lộ danh tính người khác không liên quan.

## 5. Ca kiểm

Nhận lại response không thêm đồ; chuyển kho không copy; hai tab cùng dùng chỉ thành công một lần; mở loot đã xác lập không reroll; tách stack không làm mất nguồn/khóa. Đây là tiêu chí implement sau, chưa có migration PostgreSQL trong công việc này.
