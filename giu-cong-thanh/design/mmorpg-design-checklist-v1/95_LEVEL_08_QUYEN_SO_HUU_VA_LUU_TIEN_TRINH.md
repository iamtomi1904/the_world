# LEVEL-08 — Quyền sở hữu và lưu tiến trình cấp độ

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0. Hợp đồng dữ liệu thiết kế, không SQL/schema/migration triển khai. [Nghiên cứu](92_THAM_KHAO_LEVEL_VA_COMBAT_MMORPG.md). PostgreSQL qua server/API cho web và PC.

## 1. Ma trận dữ liệu

| Phạm vi | Dữ liệu thuộc phạm vi | Điều không được suy ra |
|---|---|---|
| Account | Quyền đăng nhập, ví tiền nạp dùng chung chế độ, lựa chọn hỗ trợ giao diện, quyền account đã thiết kế. | Không dùng level cao nhất account để cấp level/SP cho nhân vật khác. |
| Character MMORPG | ID bất biến, race, xuất thân, nghề/nhánh, level/XP, grant AP/SP/TP, AP allocation, skill/talent/preset, quest/mốc, quyền ngựa. | Không gộp túi/chỉ số/cấp của ván thủ thành vào đây. |
| Nhân vật trong world/server | Quyền cư trú/shard, vị trí worldXYZ/surfaceId, checkpoint đã biết, trạng thái truyện cá nhân trong world. | Đổi channel cùng world không phải nhân vật mới hoặc reset reward. |
| Mùa | Điểm/xếp hạng/tiến độ sự kiện có seasonId theo luật riêng. | Không wipe level/gear/quest, không phát lại AP. |
| Runtime encounter | Action, projectile, threat, CC-DR, effect theo thời hạn, contribution. | Không ghi mỗi particle/frame vào PostgreSQL hoặc replay damage khi đăng nhập. |

Khóa nhận diện dùng modeId+characterId và world context rõ; accountId chỉ quyền truy cập. Không lấy tên hiển thị làm khóa. Một nhân vật không được hai phiên web/PC cùng ghi trạng thái chiến đấu; session ownership do ACC/NET quyết định, không chọn “bản lưu mới hơn” từ client.

## 2. Bất biến cấp và điểm

Chọn biểu diễn chuẩn **level + XP trong cấp hiện tại**. Tổng XP là giá trị suy ra từ bảng threshold có version, không một pool cộng thưởng thứ hai. L<cap: 0≤XP<T(L); L=cap: XP=0, phần vượt bị bỏ theo luật công khai. Alpha10/bản đầy đủ60 dùng cap môi trường server.

Mỗi XP event có grantId duy nhất/character/reason/reference/amount/configVersion; xử lý grant hợp lệ, tăng nhiều cấp và điểm tương ứng như một thay đổi bền nhất quán. Duplicate trả kết quả cũ; không tạo grantId mới vì mất phản hồi. Ledger cấp điểm theo mốc để không phát lại khi retry/reconnect/migration. AP ở60 là177, SP35, TP11; reset chỉ đổi phân bổ, không đổi earned.

PostgreSQL lưu nguồn bền và giao dịch điểm; server quản lý combat state trong bộ nhớ theo NET. Chi tiết bảng/index/transaction isolation/backup còn DATA, nhưng thiết kế không cho client quyết định XP hoặc mỗi auto-save tự ghi đè ledger. Checkpoint periodic chỉ tối ưu lưu, không là cách chống nhân đôi reward.

## 3. Nghề, nhánh và preset

Chuyển nghề15/nhánh30 là quyền nhân vật sau quest, không character replacement. Giữ level/XP/đồ/quyền thưởng; tiến hóa lineage giữ đầu tư hợp lệ theo hồ sơ32. Không tự hoàn hết AP hoặc nhân SP khi form đổi. Điểm chưa dùng được giữ khi chưa chuyển nghề.

V1 không mở đổi race/nghề/nhánh tự do. Reset AP/SP/TP tại nơi hợp lệ không phải chuyển chức. Hai skill preset dùng cùng ngân sách, một AP allocation chung, hotbar13 reference tới skill/item thật. Vật phẩm tạm thiếu vẫn không thành vật phẩm mới nhờ preset.

## 4. Chuyển world/server, mùa và môi trường

V1 **chưa cung cấp chuyển server tự phục vụ**. Đổi channel trong cùng world giữ toàn bộ dữ liệu bền, actor chỉ ở một channel có quyền. Thiết kế dịch vụ chuyển world tương lai phải: đóng giao dịch/encounter → kiểm kho/chợ/mail/guild/giới hạn → snapshot có migrationId → khóa nguồn → import đúng một lần → xác nhận đích. Trạng thái không rõ phải đối soát, không mở cả hai bản để chơi.

Không tự hứa giữ vị trí/guild/chợ nếu world đích không tương thích; level/grant/quest ledger phải có phương án bảo toàn trước mở dịch vụ. Không thu tiền cho dịch vụ chưa định nghĩa. Mùa giữ nhân vật thường trực; reset bảng xếp hạng không xóa cấp60.

Alpha/test và production tách namespace/quyền dữ liệu. Không chuyển XP alpha đã bị loại ởcap10 thành XP production nếu chưa có chính sách riêng. Nâng cap45→60 giữ nhân vật45 và reward ledger; không hồi XP cũ bị bỏ bằng cách nhân thời gian online.

## 5. Chết, đăng xuất và phục hồi

Chết không mất level/XP/AP/quyền skill; item persistence cụ thể do ITEM, không tự tạo ngọc hoặc nhập luật ngọc thủ thành vào MMO. Cooldown deadlines và effect allowlist theo STAT-09/10, không reset bằng relog. Actor chưa unload vẫn theo simulation; không client save ghi trạng thái sống đè trạng thái chết của server.

Phục hồi lỗi cần journal/reconciliation giữ mỗi reward một lần, audit thay đổi quản trị. Không trừ tiền hay reset quest âm thầm để “sửa” level sai. Thiết kế này chưa quyết grace logout hoặc khả năng rollback combat ở NET.

## 6. Tình huống kiểm sau

Duplicate XP/grant vượtcap; crash giữa level và AP; hai client; nghề quest nhận hai lần; channel đổi liên tiếp; world transfer import lặp; season rollover; restore backup; cấu hình cap/bảng XP đổi. Chưa thực thi SQL hoặc kiểm database. DATA/SAFE/NET vẫn chưa hoàn thiện thay từ hồ sơ này.
