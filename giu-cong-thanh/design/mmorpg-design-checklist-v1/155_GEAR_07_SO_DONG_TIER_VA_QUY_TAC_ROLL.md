# GEAR-07 — Số dòng, tier và quy tắc roll

**Ngày:**21/10/2026 · **Trạng thái:** Hoàn thiện đặc tả V1 trong phạm vi mục; số là cấu hình cân thử, chưa cân bằng qua bản chơi. Chỉ tài liệu MMORPG, không sửa thủ thành.

**Đầu vào:** [Slot148](148_GEAR_01_SLOT_VU_KHI_VA_QUYEN_MAC.md), [sáu trục149](149_GEAR_02_SAU_TRUC_PHAT_TRIEN_TRANG_BI.md), [rarity150](150_GEAR_03_DO_HIEM_VA_NGON_NGU_HINH_ANH.md), [stats68](68_STAT_02_CHI_SO_DAN_XUAT.md), [ngân sách81](81_STAT_11_NGAN_SACH_VA_MOC_CAN_BANG.md).

## 1. Số dòng và ngân sách

| Rarity | ItemLevel tối thiểu | Số dòng n | rarityBudget | Range q |
|---|---:|---:|---:|---|
| R0 Thường |1|0|0|Không roll |
| R1 Tinh luyện |10|1|0,70|0,80…1,00 |
| R2 Hiếm |20|2|1,00|0,80…1,00 |
| R3 Sử thi |30|3|1,20|0,80…1,00 |
| R4 Di sản |Chưa mở|Chưa phát hành|Không dùng để grant|Không roll |

R3 có3 dòng nhưng chỉ1,20 lần tổng điểm R2, không gấp1,5 hoặc3 lần mọi stat. Nhiều dòng chia nhỏ mỗi dòng, có thể kém món ít dòng tập trung đúng build. Không thêm “dòng ẩn” ngoài n. Món nhận từ quest có dòng định trước vẫn chiếm n và cùng budget; không nhận cả bộ dòng cố định và bộ ngẫu nhiên đầy đủ. Definition quest R0 vẫn không affix.

## 2. Tier cấp

T0 i1…9 chỉR0; T1 i10…19 cóR1; T2 i20…29 mởR2/crit; T3 i30…39 mởR3/rare sources; T4 i40…45 tăngBtheocurve. Không roll dòng tier45trên món30, không nângrarefloor bằng cấpngười nhặt60. Tại cùngitemLevel/slot/rarity, qchỉ5mức đãkhai báo, không hidden1%perfectquaylạiqualitythứhai.

## 3. Chọn dòng

Xây pool hợp lệ từ slot/family/build/level/rarity và p, loại dòng floor về0 ngay cảq0,80. Chọn tuần tự theo trọng số không hoàn lại, lọc nhóm loại trừ sau mỗi lựa chọn; chỉ giữ ứng viên mà còn đủ một tập hợp hoàn chỉnh để điền nslot. Sau đóroll q từng dòng. Trọng số dòng không đồng nghĩa các tổ hợp đồng xác suất; UI bách khoa phải nói rõ quy tắc này. Không thêm pity hoặc luck vàoaffix.

Profilegen phải được kiểm trước phát hành. Nếu không có tập đủndòng thì definition không hợp lệ, không silentlyhạrarity/giảmndònghoặc cứretryRNGvôhạn. Trong grant thật gặp dữ liệu sai thì giữ pendinggrant và báo lỗi vận hành, không tiêu quyền thưởng rồi cho món lỗi. Seed/rewardrevisioncamkết một lần.

## 4. Hai ví dụ cụ thể

Nhẫn45 R2: p=30×0,40×1/2=6. Một dòngSTR có1điểm ởq0,80…0,95 và2điểm ởq1; một dòngcrit chance có0,70…0,90pp sau floorStep0,05. Đây là phân phối từ quy tắc làm tròn, không hứa mỗi trị số số nguyên có xác suất bằng nhau.

Găng45 R3: p=30×0,50×1,20/3=6. DòngHASTE 0,95/1,00/1,05/1,10/1,20pp theoq; dòngcôngphẳng7/7/8/8/9, chưa cóbuff. Không phải mọi bướcqđềura một giá trị mới.

## 5. Đối chiếu

Kiểm tổng ngân sách trước làmtròn ≤B×s×rarityBudget, không hoàn điểmthừa; mỗi mónđúngndòngvà đủgating. Rarity mở nhiều dòng không bảo đảm mỗi dòng cao hơn R2. Chưa thiết kếtẩy/khóa dòng, tỷ lệ craftphẩm chất hoặc nângrarity; các hệsauphảisửaquyềnrollcóversion, khôngghiđèkếtquảmặthàngđãcó.
