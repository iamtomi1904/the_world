# Sáu hồ sơ tiếp theo — hiệu ứng, set, ngân sách và ngoại hình

**Ngày:**21/10/2026. Thiết kế MMORPG Ẩn Thành; không sửa thủ thành, runtime, database hoặc vẽ asset.

## 1. Bàn giao

| Mục | Hồ sơ | Kết quả |
|---|---|---|
| GEAR-09 | [Proc và hiệu ứng riêng](158_GEAR_09_HIEU_UNG_RIENG_VA_PROC.md) |5effect mẫu, ô affix đổi thành proc, ICD/flags/mana ledger |
| GEAR-10 | [Set đồ](159_GEAR_10_SET_DO_VA_BONUS.md) |3bộ mẫu,4slot,ngưỡng2/4, điểm theo món thực |
| GEAR-11 | [Ngân sách tổng](160_GEAR_11_NGAN_SACH_TONG_VA_GIOI_HAN_PHAT_TRIEN.md) |Envelope từng lớp, gate DPS/EHP/heal, không quỹ stat miễn phí |
| GEAR-12 | [So sánh và preview](161_GEAR_12_SO_SANH_TRANG_BI_VA_PREVIEW.md) |Tính trạng thái sau thay món, Union/luck/set/cap/quyền |
| GEAR-13 | [Độ bền](162_GEAR_13_DO_BEN_VA_SUA_CHUA.md) |V1 không có độ bền, không phí sửa gear |
| GEAR-14 | [Tủ ngoại hình](163_GEAR_14_NGOAI_HINH_VA_TU_DO.md) |Entitlement/rig/family/mount, mở skin và binding |

Tất cả hoàn thiện **đặc tả trong phạm vi mục**, không xác nhận combat cân bằng hoặc có asset/UI thật. ITEM-12 vẫn một phần; nguồn/recipe/loot cụ thể cần thiết kế tiếp.

## 2. Các quyết định gameplay

Món proc hoặc set R3 có2affix thường và1ô reserve, mỗi ô vẫn tính trên tổng3ô. Không thêm effect vào món đã đủ3affix. Cả ba set có bốn mónđầu/thân/chân/giày, tay dành cho đồ lẻ; bonus2/4dựa vào điểm thực của các món đang mặc. Không dùng skin để kíchset.

Năm proc: khiên khi nhận damage, giáp tạm khi nhận damage, packet dư lực khi hit, hồi thêm khi heal đồng minh khác và hoàn một phần mana sau skill Release. Không proc dây chuyền, không DoT/pet/reflect mở thêm kênh proc; cooldown theo owner/họ effect nên đổiinstance không reset. Mana từweaponproc+set chung một ledger, không hoàn hơn đã trả.

Ba set Gác Đường/Người Đối Chiếu/Dẫn Đường định hướng phòng thủ, mana và cơ động. Không thêm sharedaura, hồi sinh, quyền bay hoặc classskill. Mọi lợi ích phải so với dòng affix đã đổi, không gọi freebonus là cân bằng.

Enhancement envelope tối đa+8%base numeric, không lãi kép hoặc nhân affix; socket tổng điểm≤15%B×slot của một món, không15%mỗi lỗ. SocketV1 không rare-rate/root để giữ yêu cầu nguồn hiếm và tránh nhân nội tại. Số cấp nâng, số lỗ, recipe và giá vẫn thuộc UPGRADE/SOCKET, chưa có nút hoạt động.

Không dùng durabilityV1, không vỡ đồ/giảm stat/thu thêm phí sửa khi chết. Ngoại hình đã mở chọn miễn phí ngoài combat, cần đúngfamily/rig; mở skin từ món tự do sẽ bind có xác nhận, không cho mở rồi bán tiếp cùng món tựdo. Scope cosmetic khai báo riêng, ví nạp chung không tự cấp skin mọi mode.

## 3. Kiểm số và trường hợp biên trên tài liệu

Đã đối chiếu p12cho proc45R3:96shield/14armor/72raw/tốiđa38mana. Set4món45P32,40cho162shield hoặcHP,64mana,24armor/97raw theo từngprofile. Kiểm203,40điểm affix/25,425điểm socket toàn bộ, kiếm230+nâng18+socket6=254trướcaffix, ví dụUnion3,67→3,9625%. Duyệt404trường hợp manaSpent0…100vàmissing0/1/15/100, tổng hoàn không vượt đã trả hoặc lượng thiếu.

Đây là kiểm số của thiết kế, chưa test event race, server rollback, class balance, UI, rig hoặc gameplay. Mục tiêu phát triển+12%DPS/EHP và+10%heal là gate cần đo, không khẳng định các cấu hình hiện tại đã đạt. ART/MOUNT/UPGRADE/SOCKET không hoàn thành theo6checkboxGEARnày.

## 4. Tham khảo và sáng tạo riêng

[Guild Wars2 — Introducing the Wardrobe System2014](https://www.guildwars2.com/en/news/introducing-the-wardrobe-system/) minh họa tách bộ sưu tập skin khỏi đồ đang mặc. Ẩn Thành dùng quyền theo server/mode đã chốt và family2.5Dpixel, không sao chép cơ chế phí/skin hoặc art.

[Tree of Savior — New Legend Equipment and Set Effects2019](https://treeofsavior.com/page/news/view.php?n=1865) là tham khảo hệ set/hiệu ứng. Ẩn Thành dùng reserve một ô để trả chi phí cơ hội, không mượn tỷ lệ damage/set của game khác. Các bài là nguồn lịch sử thiết kế, không đại diện toàn bộ luật hiện hành.

Tên Gác Đường/Người Đối Chiếu/Dẫn Đường gắn công việc bảo vệ, kiểm chứng và tiếp tế củaElarion. Không gắn sức mạnh bắt buộc với phe thiện/ác, số phận Oren hoặc bí mật ngườicha; lore không biến thành điều kiện cấm build.

## 5. Tiến độ và bước kế tiếp

**105 hồ sơ hoàn thiện /8 một phần /400 chưa thiết kế =513.** GEAR-01…14đã có đặc tả; không có nghĩa hệ trang bị đã code hoặc cân xong. GATE-01vẫn mở. Theo thứ tự toàn roadmap, tiếp theo là ROAD-03 rà soát nền chỉ số/slot/combat, rồi CUR-01…08 và cap nguồn phát hành trước loot/craft kinh tế. ROAD-03 chưa được tự đánh dấu đạt trong lượt này; không bỏ qua sang gán drop rate khi chưa có hạn mức account.
