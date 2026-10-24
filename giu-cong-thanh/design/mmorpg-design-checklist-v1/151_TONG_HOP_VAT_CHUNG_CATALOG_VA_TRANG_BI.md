# Thiết kế tiếp — vật chứng, catalog vùng và nền trang bị

**Ngày:**21/10/2026. **Phạm vi:** tài liệu MMORPG Ẩn Thành; không sửa thủ thành, runtime, database hoặc asset.

## 1. Bàn giao

| Mục | Hồ sơ | Trạng thái |
|---|---|---|
| ITEM-11 | [Vật chứng và vòng đời nhiệm vụ](146_ITEM_11_VAT_CHUNG_VA_VONG_DOI_NHIEM_VU.md) | Hoàn thiện đặc tả |
| ITEM-12 | [Catalog theo vùng bản đầu](147_ITEM_12_CATALOG_THEO_VUNG_BAN_DAU.md) | Một phần:20 nguyên liệu và các gói xuyên vùng |
| GEAR-01 | [Slot, vũ khí và quyền mặc](148_GEAR_01_SLOT_VU_KHI_VA_QUYEN_MAC.md) | Hoàn thiện đặc tả |
| GEAR-02 | [Sáu trục phát triển](149_GEAR_02_SAU_TRUC_PHAT_TRIEN_TRANG_BI.md) | Hoàn thiện đặc tả |
| GEAR-03 | [Độ hiếm và hình ảnh](150_GEAR_03_DO_HIEM_VA_NGON_NGU_HINH_ANH.md) | Hoàn thiện đặc tả |

## 2. Quyết định chính

Vật chứng dùng journal, không chiếm túi hoặc mất qua bán/phân giải. Hàng giao quest có thể bị tiêu nhưng bản ghi vẫn lưu. C03/C05 của Oren không trở thành loot RNG; không class nào bị mất đầu mối chính do khác kết cục.

Mười vị trí trang bị:5 phòng cụ,1 dây chuyền,2 nhẫn,2 tay. Hai tay là quyền chiếm slot, không hai lần ngân sách cho cùng vũ khí. Song đoản đao là một instance có hai hình; ma đạo thư là2H. Một bộ gear hiệu lực; skill preset không tự mang một bộ gear miễn phí. Không thêm stat từ áo choàng, công cụ nghề, giáp ngựa hoặc cánh.

Sáu trục tách riêng: cấp yêu cầu, itemLevel, rarity, craft quality, evolution stage và enhancement. ItemLevel tối đa45 trong phạm vi hiện tại dù cap nhân vật60. Base gear cố định theo template, roll nằm ở affix. Chất lượng STANDARD/tiến hóa0/+0 là baseline, không thay cho thiết kế công thức nâng sau này.

Năm bậc: Thường → Tinh luyện → Hiếm → Sử thi → Di sản. R4 Di sản được dành chỗ trong thiết kế, chưa phát hành drop/recipe. Màu không tự nhân stat hoặc quyết binding. Dòng affix, số dòng, set/proc và xác suất vẫn thuộc GEAR/LOOT tiếp theo.

Catalog mới đưa20 nguyên liệu theo năm vùng và liên kết nguồn–nơi tiêu, nhưng chưa đủ gear/recipe/consumable/sự kiện. ITEM-12 giữ một phần để tránh tính hoàn thành danh sách chưa có đường dùng thật. Danh sách là đầu vào thiết kế, không cho các món chưa có recipe vào bảng drop.

## 3. Tham khảo chính thức và giới hạn

- [Tree of Savior — Equipment Guide](https://treeofsavior.com/content/equipmentguide/): cấu trúc hướng dẫn nối grade trang bị với nguồn hoạt động. Ẩn Thành dùng bài học “mỗi bậc cần nơi kiếm rõ”, không sao chép mức cấp, nguồn boss hoặc công thức sức mạnh.
- [Ravendawn — Update2.0.2](https://ravendawn.online/en/home/view/update-202-notes): ghi nhận xác nhận bổ sung cho một số thao tác nâng đồ có hậu quả không thể đảo ngược. Ẩn Thành dùng preview/confirmation cho thay đổi binding và vật liệu; không suy ra UI xác nhận thay thế transaction an toàn.

Đây là nguồn thiết kế lịch sử, không tuyên bố toàn bộ luật hiện hành của các game. Năm bậc/mười slot/các tên nguyên liệu là quyết định riêng, không dữ liệu được sao chép hoặc kết quả cân bằng đã kiểm chứng.

## 4. Đối chiếu và phụ thuộc

Giữ3 race,7 nghề,19 nhánh,28 tổ hợp. Không cho Elf dùng ma đạo thư Tử Linh của Human hoặc Dwarf thành Kỵ Sĩ. PAL/DKN2H không giữ khiên cũ; HGD1H+khiên; ASN không nhận hai bộ affix chỉ vì có hai dao. Quyền nghề cha không tự cộng vào nhánh.

Giữ ngân sách35/45/20, AP/SP/TP, giới hạn rare-rate5% đầu vào/dòng, Luck15% và cap60/nội dung45. Không đặt giá/affix/rate ngoài phần đang thiết kế. GATE-01 chưa đạt; art2.5D V4 vẫn phải vẽ mẫu và đo, không hoàn thành bằng bảng mã màu.

## 5. Tiến độ và bước kế tiếp

**94 hoàn thiện hồ sơ /8 một phần /411 chưa thiết kế =513**. Lượt này thêm4 hồ sơ hoàn thiện và1 mục một phần. “Hoàn thiện” là phạm vi thiết kế từng mục, không feature đã code.

Tiếp theo GEAR-04: ma trận slot×cấp×rarity×build; GEAR-05: base curve; GEAR-06: affix pool. Sau đó số dòng, chống tổ hợp chết và tổng ngân sách nâng/khảm/set. ITEM-12 quay lại hoàn thiện sau các bảng này và CRAFT/LOOT; không cần chờ catalog hoàn chỉnh mới được thiết kế GEAR.

Cần kiểm chứng bằng prototype: thao tác2H khi túi đầy, đổi family ở30, chuyển binding đồng thời, silhouette28 tổ hợp, nhận vật chứng qua reconnect và lựa chọn Oren, hiệu quả gear45 ở nhân vật60. Chưa chạy các kiểm thử đó.
