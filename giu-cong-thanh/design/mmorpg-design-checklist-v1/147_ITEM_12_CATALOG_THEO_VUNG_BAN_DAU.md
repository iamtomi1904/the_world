> **Đầu vào mới:** [GEAR-04…08](157_TONG_HOP_MA_TRAN_VA_DONG_THUOC_TINH.md) đã có công thức base và affix. Catalog vẫn một phần vì chưa gắn hết template với nguồn loot/công thức thực.

# ITEM-12 — Catalog nguồn–nơi tiêu theo năm vùng

**Ngày:**21/10/2026 · **Trạng thái:** Thiết kế một phần; chưa hoàn tất catalog. Chỉ thiết kế MMORPG, chưa code/vẽ/test gameplay.

**Đầu vào:** [Quyền sở hữu16](16_PROD_07_SO_HUU_VA_TIEN_DO.md), [nghề28](28_HE_CHUNG_TOC_CHUC_NGHIEP_TRANG_BI.md), [ngân sách81](81_STAT_11_NGAN_SACH_VA_MOC_CAN_BANG.md), [vật phẩm135–145](145_TONG_HOP_10_MUC_HE_THONG_VAT_PHAM.md).

## 1. Trạng thái thực

**Thiết kế một phần.** Bảng dưới chốt hạt nhân catalog để GEAR/CRAFT/LOOT triển khai tiếp; chưa đủ tất cả item, stat, recipe, số lượng và drop rate. Các item nguyên liệu chưa có công thức production là dự trữ thiết kế, chưa được đưa vào bảng rơi. Không tự coi82NPC đều có quest hoặc shop mới để tiêu các món này.

Mỗi hàng cần templateId, vùng/cấp, nhóm, nguồn, nơi tiêu, binding và manifest icon. Catalog master sẽ bổ sung definition/recipe/sourceTable thực và kiểm item mồ côi trước phát hành. Giá/định lượng chưa có không được biến thành0 hoặc tỷ lệ100% trong runtime.

## 2. Hạt nhân vật phẩm theo vùng

| Vùng | Mã hậu tố trong AT.MAT.Vxx | Tên | Nguồn dự kiến | Nơi tiêu dự kiến |
|---|---|---|---|---|
| V01 ·1–10 | REED_FIBER | Sợi Lau Khô | Thu thập lau tại đường an toàn | Vải lót đồ tập/nguyên liệu trạm |
| V01 | SOFT_ORE | Quặng Mềm Bình Minh | Mỏ nông, không cần bay | Phôi vũ khí tập |
| V01 | COOL_LEAF | Lá Mát Cầu Lau | Hái cây được đánh dấu | Chế dược hồi phục cơ bản |
| V01 | WORN_BRACKET | Đai Máy Cũ | Phế liệu vô tri ở nhánh bảo dưỡng | Tái chế kim loại; không xẻ Oren thành hàng |
| V02 ·11–20 | RIVER_FLAX | Sợi Lanh Hạ Lưu | Đồng bằng Merrowen | Vải nghề cấp15 |
| V02 | BOG_IRON | Sắt Bùn Valedorn | Mạch khai khoáng | Khung giáp/vũ khí nghề |
| V02 | RIVER_HERB | Cỏ Bờ Nước | Thu thập ven sông | Thuốc/đồ tiếp tế vùng |
| V02 | FERRY_TIMBER | Gỗ Bến Phà | Nguồn gỗ tái tạo hợp pháp | Cán vũ khí; vật liệu trạm |
| V03 ·21–30 | OLD_BARK | Vỏ Rụng Rừng Cổ | Nhặt vỏ rụng tại Sylvaris | Trượng khế ước/đồ nghi lễ |
| V03 | PALE_RESIN | Nhựa Cây Nhạt | Thu hoạch không phá cây thiêng | Chất kết dính chế tác |
| V03 | PILGRIM_THREAD | Sợi Dệt Hành Hương | Nghề chế biến sợi | Vải chuyên sâu cấp30 |
| V03 | ROOT_CRYSTAL | Tinh Thể Khe Rễ | Mạch khoáng hợp lệ | Phôi pháp khí, không mặc định socket gem |
| V04 ·31–40 | DUSK_ORE | Quặng Hoàng Hôn | Mạch Nocthollow | Phôi gear vùng4 |
| V04 | GLASS_DUST | Bụi Kính Đo | Phế liệu thiết bị Astravelle | Luyện vật liệu pháp khí |
| V04 | NIGHT_FIBER | Sợi Dạ Thảo | Thu thập có nguồn, không buộc online đêm | Vải/giáp nhẹ vùng4 |
| V04 | INERT_CORE | Lõi Đo Đã Trơ | Thiết bị vô tri trong dungeon | Vật liệu riêng dungeon, không linh hồn |
| V05 ·41–45 | FRONTIER_ORE | Quặng Tiền Tuyến | Mạch quanh tuyến tiếp tế | Phôi gear mốc45 |
| V05 | HEAT_RESIN | Nhựa Chịu Nhiệt | Thu thập khu vực được phép | Gia cố vật liệu vùng5 |
| V05 | SEAL_BRACKET | Gông Ấn Đã Tháo | Thiết bị đã vô hiệu | Công thức dungeon riêng |
| V05 | SUPPLY_CLOTH | Vải Tiếp Tế | Chế biến sợi vùng5 | Áo/đồ nghi lễ mốc45 |

Các mã Vxx là vùng nguồn chính, không cấm hàng hợp lệ được mua bán tại nơi khác. Nguyên liệu nguyên khai ngoài thế giới đề xuất UNBOUND, thưởng nhiệm vụ cùng loại giữ khóa nguồn. Không đổi toàn bộ tên vùng thành mỗi một nguyên tố; môi trường và cư dân vẫn đa dạng.

## 3. Gói xuyên vùng

| Nhóm | Definition/quyền | Nguồn và đích |
|---|---|---|
| Bộ tập | Kiếm/cung/trượng tập khóa nhân vật | Hướng dẫn đầu; đổi bộ ngoài combat, không bán farm |
| Quà nghề15 | Family theo nghề đã chọn | Một vũ khí nền phù hợp; Kỵ Sĩ có khiên và quyền ngựa nền theo34 |
| Quà nhánh30 | Chỉ khi cần đổi family | Vũ khí nền phù hợp, một quyền nhận; không phát bộ hiếm |
| Hồi sinh | USE_RESURRECT_V1 | Theo104, không sửa giá/cast/stack |
| Vật chứng | Dụng cụ, bản sao, biên bản | Theo146 và truyện; journal, không loot RNG |
| Thuốc HP/mana | Nhóm USE_RECOVERY | Chờ định lượng/cooldown nguồn dùng, chưa phát hành definition |
| Hộp chọn đồ | Gói cứu trợ | Chờ GEAR và bảng lựa chọn; không tạo rương ngẫu nhiên trả phí |
| Ngoại hình | Mẫu nghề/trạm nếu có quest | Chờ quest và entitlement, không cộng stat |

## 4. Nghề và sự kiện

Đây là vai trò nguyên liệu cho thiết kế, không chốt thêm tám nghề sản xuất. CRAFT-01 sẽ quyết định nghề nào phát hành và gộp trách nhiệm; loại bỏ item không có nơi tiêu nếu nghề bị hoãn. Sự kiện chưa có edition không tạo vé trống, token chung hay vật liệu hết hạn thường trực. Mỗi edition cần nguồn, hạn, đổi thưởng và chính sách đồ dư rồi mới thêm catalog.

## 5. Điều kiện hoàn tất ITEM-12

Cần ma trận gear theo family×slot×mốc, danh sách consumable có useAction, toàn recipe hợp lệ, nguồn loot/dungeon/sự kiện thực, binding/stack/expiry, icon manifest và kiểm reachable source→sink. Không gọi20 nguyên liệu trên là toàn bộ catalog năm vùng. Sau GEAR-04 và CRAFT/LOOT phải quay lại bổ sung, chưa đánh dấu hoàn thiện.
