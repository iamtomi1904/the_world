# ITEM-02 — Hồ sơ mẫu vật phẩm và hợp đồng dữ liệu

**Ngày:**21/10/2026 · **Trạng thái:** Hoàn thiện đặc tả thiết kế V1 trong phạm vi mục; chưa code, vẽ asset hoặc kiểm thử gameplay.

**Phạm vi:** MMORPG Ẩn Thành, web/PC, PostgreSQL và server có thẩm quyền. Tham chiếu [quyền sở hữu16](16_PROD_07_SO_HUU_VA_TIEN_DO.md), [hệ nghề28](28_HE_CHUNG_TOC_CHUC_NGHIEP_TRANG_BI.md), [hotbar64](64_HOTBAR_13_O_KY_NANG_VAT_PHAM.md), [hồi sinh104](104_COMBAT_13_CHET_VA_HOI_SINH.md).

## 1. Trường bắt buộc

| Khối | Trường và quy tắc |
|---|---|
| Danh tính | templateId, definitionVersion, tên/mô tả được dịch, nhóm/tag, trạng thái phát hành |
| Hình ảnh | iconKey, silhouetteKey, rarityStyleKey; manifest thiếu asset thì không phát hành |
| Quyền | yêu cầu cấp/race/nghề/nhánh, bindPolicy, container hợp lệ, các action cho phép |
| Số lượng | stackMax số nguyên dương, quantity, uniqueLimit theo phạm vi nếu có |
| Sức mạnh | statProfile/affixProfile/socketProfile hoặc khai báo không có chỉ số |
| Sử dụng | useActionId, targetMode, mana/cooldownGroup, combat policy hoặc không sử dụng |
| Nguồn và đích | sourceTableId, recipe/reward/quest reference, nơi tiêu, sellProfile hoặc không bán |
| Thời hạn | NONE, FIXED_UTC, AFTER_ACQUIRE; startAt/endAt chính xác nếu có |
| Theo dõi | ownerScope, grantReason, grantId, transaction revision; dữ liệu server |

NONE là quyết định hợp lệ; null không được hiểu thành “cho phép mọi thứ”. Công thức/roll/giá chưa có phải trỏ hồ sơ chưa phát hành, không điền số ngẫu nhiên để đủ trường. Bán NPC chỉ nhận Ngân Ấn theo bảng giá về sau; không tạo nguồn Đồng Elarion không giới hạn.

## 2. Ba hồ sơ mẫu

**Sợi Lau Khô — AT.MAT.V01.REED_FIBER:** MATERIAL/plant, stack999, không thời hạn, không chỉ số; nguồn thu thập V01 sẽ được LOOT/CRAFT khai báo. Đồ không khóa từ nguồn hợp lệ được giao dịch; bản thưởng khóa phải giữ binding nguồn. Mô tả: “Sợi khô dùng gia cố đồ dùng trạm.” Chưa có giá NPC/công thức phát hành.

**Ấn Hồi Sinh — USE_RESURRECT_V1:** tái sử dụng đúng ID104; CONSUMABLE/resurrection, stack20, khóa nhân vật, không trade/bán, hành vi/cost hồi sinh theo104. Không tạo definition thứ hai chỉ vì khác tên mã. Tooltip dẫn điều kiện không dùng giữa boss đang hoạt động.

**Bản Sao Lệnh Gác — AT.QUEST.V01.GATE_ORDER_COPY:** QUEST/evidence, journal quantity1 theo nhân vật, không bán/phân giải/trao. Nhận từ sự kiện truyện đã xác minh, không loot RNG. Bản sao phục vụ điều tra Oren, không tuyên bố người cha đã chết hoặc lộ bí mật chưa biết.

## 3. Lifecycle và UI

Definition còn tồn tại sau khi ngừng drop để đọc món cũ. Sửa mô tả có thể dùng bản mới; đổi stat/roll/binding cần migration rõ, log và preview, không ngầm reroll đồ đang có. Tooltip hiển thị source và use thực sự của phiên bản. Đồng bộ tài sản từ server; cache client không được tạo instance hay quyết định số lượng.

## 4. Kiểm thiết kế

Mỗi definition phải trả lời được kiếm ở đâu, dùng vào đâu, ai sở hữu, khi nào hết hạn, stack bao nhiêu. Không phát hành item mồ côi. Ví dụ trên là hợp đồng mẫu, không phải catalog đầy đủ của năm vùng (ITEM-12).
