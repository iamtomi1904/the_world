# ITEM-10 — Túi đầy, nhận thưởng và phục hồi

**Ngày:**21/10/2026 · **Trạng thái:** Hoàn thiện đặc tả thiết kế V1 trong phạm vi mục; chưa code, vẽ asset hoặc kiểm thử gameplay.

**Phạm vi:** MMORPG Ẩn Thành, web/PC, PostgreSQL và server có thẩm quyền. Tham chiếu [quyền sở hữu16](16_PROD_07_SO_HUU_VA_TIEN_DO.md), [hệ nghề28](28_HE_CHUNG_TOC_CHUC_NGHIEP_TRANG_BI.md), [hotbar64](64_HOTBAR_13_O_KY_NANG_VAT_PHAM.md), [hồi sinh104](104_COMBAT_13_CHET_VA_HOI_SINH.md).

## 1. Dung lượng bản đầu

Túi thường48 ô, kho account cùng server120 ô tại dịch vụ an toàn; không trọng lượng, không bán mở ô bằng tiền nạp trong phạm vi V1. Quest journal và quyền ngoại trang tách riêng. Đây là cấu hình V1 mới cho MMORPG, không đổi túi thủ thành. Sau prototype phải đo thời gian đi bán/kho; không tự ép dung lượng thấp để bán tiện ích.

Vùng nhận thưởng là hộp thư hệ thống riêng, tối đa200 grant chưa nhận mỗi nhân vật, không là túi thứ hai dùng trong combat. Mỗi grant gộp một lần phát thưởng, không phải một slot mỗi món. Không cho gửi P2P vào đây. Chỉ đến nơi an toàn để nhận, không dùng trực tiếp thuốc từ hộp chờ.

## 2. Đường nhận

| Nguồn | Khi túi đầy | Bảo vệ |
|---|---|---|
| Quest chính/vật chứng | Journal hoặc grant chờ nhận | Không mất manh mối, flag chỉ tiến sau ghi nhận durable |
| Boss/dungeon đã có quyền cá nhân | Grant chờ nhận | Không cần nhặt xác lần nữa, không nhân quyền |
| Nhặt nguyên liệu/quái thường | Nhận phần vừa túi/stack nếu cho phép | Phần còn lại giữ theo TTL loot, có thông báo số lượng |
| Rương ẩn nhận một lần | Ghi grant trước đánh dấu đã mở | Không mất vì đầy túi hoặc reload |
| Mua shop/chế tác | Chặn trước commit nếu không đủ chỗ | Không trừ phí rồi bắt người chơi tìm đồ |
| Gói chọn quà | Preview và kiểm chỗ trước consume | Nếu race điều kiện đổi, không mất hộp |

Loot RNG phải chốt reward theo grant một lần, không reroll khi nhận lại. Hộp ngẫu nhiên chưa có định nghĩa cách roll/khóa của hệ hộp thì chưa phát hành; UI không mở thật bằng placeholder.

## 3. Tràn hộp chờ

Cảnh báo ở150/180/200 grant. Đạt200 thì từ chối bắt đầu nội dung tiêu hao vé/nhận quest thưởng mới; thưởng của encounter đã bắt đầu được lưu hàng chờ bền vững theo grantId, không bỏ hoặc reroll. Hàng này không hiện thành slot dùng đồ; được chuyển vào hộp nhận khi có chỗ. Giao dịch P2P/chợ kiểm chỗ nhận hoặc escrow tương ứng, không dùng hàng chờ như kho vô hạn.

Không tự xóa thưởng gameplay đang chờ bằng một mốc30ngày chung. Nếu có sự cố vận hành kéo dài phải thông báo và xử lý qua policy có log, không silent-delete. Expiry cố định của item/event vẫn tính khi nằm chờ; UI ghi rõ ngay trước khi tham gia. Hàng chờ có giám sát và giới hạn nguồn tạo mới, không giả định lưu vô hạn miễn phí.

## 4. Hết hạn và khôi phục

Server dùng UTC; đồ hết hạn không dùng/chuyển, dọn reservation và hiện lịch sử. Không tự biến mọi vé sự kiện thành tiền; từng edition phải chốt đổi/bỏ trước phát hành. Gear hết hạn không nằm trong phạm vi V1. Reconnect đọc receipt và owner state; không cấp bản bù nếu món đã nằm kho hoặc escrow. Rollback kỹ thuật cần đối chiếu cả tiền, item và reward claim, không chỉ sửa mỗi túi.

## 5. Phản hồi UI và kiểm sau

Ô dung lượng48 hiện số dùng/thừa; nút nhận tất chỉ nhận phần phù hợp, liệt kê phần còn chờ. Không nhận từng phần một công thức mua/craft nguyên tử. Kiểm cần làm sau: túi đủ47/48/48 đầy, stack gần đầy, hai tab nhận, crash trước/sau commit, rương ẩn, item hết hạn trong hàng chờ và quyền thưởng người chết/DC theo110. Chưa chạy gameplay hoặc test PostgreSQL.
