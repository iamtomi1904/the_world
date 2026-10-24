# CUR-03 — Nguồn nhận và nơi tiêu của từng tiền

**Ngày:**21/10/2026 · **Trạng thái:** Hoàn thiện đặc tả V1 trong phạm vi mục. Chỉ thiết kế MMORPG, chưa code/SQL/triển khai ví hoặc thay thủ thành.

**Đầu vào:** [Thương mại14](14_PROD_05_THUONG_MAI_VA_CONG_BANG.md), [quyền sở hữu16](16_PROD_07_SO_HUU_VA_TIEN_DO.md), [currency/icon169](169_CUR_01_ICON_NATIVE_32_VA_NGHIEM_THU.md), [cửa sổ47](47_UI_02_LOAI_CUA_SO_VA_DIEU_KHIEN.md), [đóng cửa sổ51](51_UI_06_THU_TU_CHONG_VA_DONG_CUA_SO.md).

## 1. Danh mục quyền phát/nhận/chi

| Nguồn hoặc đích | Tinh Thạch | Ngân Ấn | Đồng Elarion |
|---|---|---|---|
| Thanh toán đã đối soát | Nhận một lần theo đơn | Không | Không |
| Quest/hoạt động PvE thông thường | Không | Theo bảng thưởng | Không mặc định |
| Quái/boss/rương/thu thập | Không | Chỉ sourceTable cho phép | Không mặc định |
| Sự kiện phát tiền tự do | Không | Quà phụ nếu edition có | Chỉ whitelist CAP, đủ điều kiện/quota |
| Bán NPC | Không | Chỉ sellProfile hợp lệ | Không |
| Phân giải | Không | V1 không phát tiền trực tiếp | Không; trả vật liệu theo recipe |
| Giao dịch/chợ P2P | Cấm | Cấm | Nhận/chi tiền có sẵn, trừ phí nếu có |
| Dịch vụ hồi sinh | Không | Theo104 | Không tự thay thế |
| Chế tác/nâng/khảm | Không | Theo recipe/dịch vụ phát hành | Chỉ khoản có policy riêng, chưa mặc định |
| Shop ngoại trang | Sản phẩm đã được phép | Có thể là quà chơi theo danh mục | Không mặc định mua cùng SKU |
| Hoàn/đảo giao dịch | Trả đúng phần đã chi | Trả đúng phần đã chi | Trả đúng phần đã chi |
| GM bù | Theo case/ledger đối chiếu | Theo case/ledger đối chiếu | Theo case, tách hoàn tài sản và phát mới |

Không bán stats/XP/luck hoặc món sức mạnh bằng Tinh Thạch theo14. V1 không phát miễn phí Tinh Thạch qua quái/quest/event; quà ngoại hình có thể cấp entitlement trực tiếp theo reward profile, không tạo tiền premium bonus thứ tư.

## 2. Registry bắt buộc

Mỗi source có sourceId/version, currency, loại MINT/TRANSFER/RESTORE, scope, điều kiện, reward/price reference, claim key, cap group hoặc NONE được khai báo rõ, overflow policy và ngày hiệu lực. Mỗi sink có giá/recipe, trạng thái mở và nơi tiêu hủy/đối tác nhận. Thiếu profile không được hiểu thành tiền0, giá0 hoặc quyền nhận vô hạn.

MINT tạo tiền mới; TRANSFER chuyển số dư có sẵn; RESTORE đảo/hoàn theo giao dịch gốc. Nhận tiền từ bán chợ không đếm thành game phát tiền lần nữa. Ngược lại quà sự kiện gửi qua thư hệ thống vẫn là MINT dù hình thức nhận giống mail. Sổ ví giữ nguyên loại nguồn khi delivery chậm.

## 3. Giới hạn nội dung chưa phát hành

Chưa chốt CAP-01…14 nên không mở nguồn MINT Đồng Elarion thật. Hồ sơ này chốt nguồn nào được phép đề xuất, không gán số phát/ngày hoặc drop rate thay CAP/LOOT/ECON. Không dùng một sự kiện chưa có edition để tạo nguồn phát tiền tạm rồi để lại vĩnh viễn.

Giá hồi sinh F=10+2×min(level,45), tại chỗ5F và vật phẩm theo104 giữ nguyên; level45 là100/500Ngân Ấn, không thêm phí sửa đồ. Các recipe/shop khác chỉ được hoạt động khi price profile thật đã thiết kế; không đưa giá ví dụ trong tài liệu thành giá production.

## 4. Chống vòng tạo tiền

Nguyên liệu khóa truyền khóa theo139; bán NPC chỉ trả Ngân Ấn. Craft/bán NPC có thể là nguồn tiền khóa nhưng phải kiểm recipe cost và sản lượng ở ECON, không coi cấu hình nguồn tự chứng minh chống farm vô hạn. Phí Ngân Ấn để craft đồ tự do không phải đổi tiền trực tiếp, nhưng đồ đó bán P2P chỉ nhận tiền từ ví người mua; không tạo Đồng Elarion mới.

Cấm tiền nạp→item giao dịch→chợ trong V1; shop premium cấp quyền/món không P2P theo danh mục. Không đổi Ngân Ấn/Đồng Elarion hai chiều bằng NPC, hộp hoặc refund sai currency. Hoàn theo nguyên khoản trả, không theo giá mới hoặc tỷ giá tự đặt.

## 5. Loot/thư/GM và UI

Grant tiền bền vững tách khỏi túi48ô; đầy túi không xóa tiền hoặc phát lại grant. Gói gồm tiền và item phải có receipt từng phần đã giao; nhận lại không nhân phần tiền đã cộng. Hộp currency chưa có cap/overflow policy không phát hành. Quà có điều kiện hiển thị điều kiện trước tham gia, không chỉ sau khi mất vé.

UI cho xem nguồn đã biết theo tiến trình và nơi tiêu đang mở, không spoil sự kiện/lore tương lai. GM bù phải gắn case và transaction gốc; nếu là phát mới thì vẫn là source đặc biệt có quyền/phê duyệt, không giả RESTORE để né quota. Quy tắc cap/refund chi tiết còn CAP-09; wallet không tự sửa quota.
