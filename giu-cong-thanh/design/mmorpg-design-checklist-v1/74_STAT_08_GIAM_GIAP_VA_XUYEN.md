# STAT-08 — Giảm phòng thủ chung và xuyên cá nhân

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0  
**Trạng thái:** Hoàn thiện hợp đồng V1, chưa multiplayer runtime/test. [Nghiên cứu](65_THAM_KHAO_HE_CHI_SO_MMORPG_2_5D.md). MMORPG, thủ thành giữ nguyên.

## 1. Thứ tự chuẩn

D0 là armor hoặc magicResist sau stat/buff thường của mục tiêu:

1. D1=max(0,D0−sharedFlatShred).
2. D2=D1×(1−sharedPercentShred).
3. D3=D2×(1−privatePercentPenetration).
4. Deffective=max(0,D3−privateFlatPenetration).

SharedPercentShred cap50% V1; private penetration cap100% theo yêu cầu. Hai kênh chạy độc lập; armorpen không xuyên magicResist, elemental E/DR/block/shield vẫn giữ khi D=0. Không giáp âm gây amplification, vulnerability là group riêng.

Phải giảm rating trước đổi sang mitigation, không lấy armor75% trừ20điểm trực tiếp. Flat defense debuff phần này khác nguồn giảm stat tổng D0; một effect chỉ khai báo một operation, không áp hai chỗ.

## 2. Nhiều người cùng áp

Shared group là state target chung. Cùng group strongest lấy magnitude mạnh nhất, không Union mọi người. Group team-stack cộng stack tới cap chung. Các group khác nhau cộng %shred trong một nhóm cap50%, không mỗi group một tầng nhân. Flat group cộng khi được phép; cùng effect vẫn strongest/stack policy.

Fixture nhóm Hắc Ám nếu MMO có skill/item định nghĩa sau: mỗi hit hợp lệ1stack, max10, mỗi stack2%, timeout5s từ refresh hợp lệ. A1hit→1, B1hit→2; team tối đa20%giáp, không hai nhóm20% từ hai owner. Đây là fixture kiến trúc, **không tự chuyển ngọc thủ thành vào MMORPG**.

Attribution lưu nguồn đóng góp khi cần, nhưng sourceId không làm key group shared bị tách riêng. Owner mất kết nối không tự nhân/xóa stack; theo instance expiry/persistence; aura strongest bỏ nguồn yếu/mạnh phải tái tính đúng.

## 3. Ví dụ

D0=500; flatShred50; shared20%; private20%; flatpen20:500→450→360→288→268. Đồng đội không penetration dùngD2=360, không hưởng private của người kia. Hai người đều private20% không hạ D2 chung nữa.

Hai affix private5%→9,75%. Không flat shred:500→shared20%=400→private9,75%=361. Không20+9,75 thành29,75% chung. Tháo affix tái tính tập nguồn, không cộng trả5%×500.

## 4. UI và dữ liệu

Target hiện shared stack/timer được phép; private ở sheet người đánh, không thêm icon giảm giáp cho cả đội. Preview damage chỉ khi target profile cho biết, không leak rating bí mật. Shared effect hết hạn/cleanse dọn một group và icon; source nhiều người không particle mỗi người chồng nhau.

Mỗi packet ghi nguồn/tổng phòng thủ effective để debug được phép, không log private data ra chat. Runtime/schema và loot contribution chưa làm; đây không kết quả đã kiểm multiplayer.
