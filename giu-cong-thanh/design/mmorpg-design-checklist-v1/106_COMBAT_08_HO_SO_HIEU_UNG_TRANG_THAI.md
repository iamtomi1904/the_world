> **Bản V2 có hiệu lực · 21/10/2026:** [Báo cáo nâng sâu133](133_V2_BAO_CAO_THAY_DOI_VA_BAN_GIAO.md), [khế ước cốt truyện128](128_V2_KHE_UOC_COT_TRUYEN_VA_COMBAT.md), [utility/capstone131](131_V2_CO_CHE_KY_NANG_VA_THIEN_PHU.md). PhầnV2 ở cuối hồ sơ thay các điểmV1 có xung đột; số/rule không thay giữ nguyên. Đây là thiết kế, chưa code/asset/QA.

# COMBAT-08 — Hồ sơ hiển thị và giải trừ trạng thái

**Ngày:** 21/10/2026 · **V1:** hoàn thiện đặc tả, chưa asset/code/QA. [Nghiên cứu](105_NGHIEN_CUU_COMBAT_VA_19_NHANH.md). Logic/cap/DR kế thừa hồ sơ102/73/75/80, không đổi bằng hình ảnh.

## 1. Ma trận sản xuất M0

Duration mẫu là đầu vào trước tenacity/DR; magnitude thực theo skill definition. Cùng icon family không có nghĩa cùng stackGroup. Header/icon tooltip phải chỉ rõ giá trị hiệu lực, nguồn được quyền biết, số stack và thời hạn thật.

| Family | Icon mới cần vẽ | VFX gắn đâu / màu / kết thúc | Hạn/stack và gỡ |
|---|---|---|---|
| Stun | Vòng xoắn+tia gãy | HeadSocket, vàng nhạt; tan khi hết khóa | Base1s, target-shared hardCC DR; control cleanse. |
| Freeze | Tinh thể+khóa chân | Body/foot xanh băng; mảnh tan, không che HP | Base1s, DR; control cleanse, không vỡ theo damage nếu không ghi. |
| Root | Chân+rễ/xích | FootSocket/surface, màu nguồn | Base2s, DR; movement cleanse, khóa dash chứ không khóa đánh đứng. |
| Airborne | Người+mũi tên lên | Bóng giữ nền, body nâng/đáp | Base1s, DR; control cleanse nếu được, pose co theo duration thực. |
| Push/pull | Mũi tên lực | Trail ngắn theo vector, bụi cuối | Một dịch chuyển, target guard2s; miễn displacement; không effect duration giả. |
| Run slow | Bước chân↓ | Băng tinh thể; Fire tro nóng; Poison nhầy; Wind vòng gió ngược | Mẫu20%/4s; strongest/Union; movement cleanse, bosscap20%. |
| Attack slow | Vũ khí+đồng hồ | Dấu nhịp dưới vũ khí, không vòng băng mặc định | Mẫu20%/4s; strongest/Union, weakening cleanse, bosscap15%. |
| Armor shred | Khiên nứt↓ | Flash ngắn vào thân, sau đó chỉ badge | Mẫu10%/5s; sharedgroup/cap50%; weakening cleanse. |
| MRes shred | Lăng kính nứt↓ | Ấn mảnh, khác khiên vật lý | Mẫu10%/5s; group tách armor; weakening cleanse. |
| Bleed | Vết cắt+giọt | Dấu đỏ sẫm nhỏ, tick số thật |5s/1s, strongest; body cleanse. |
| Burn | Than+lửa | Tàn cam/đỏ, tick riêng |5s/1s, strongest; elemental cleanse. |
| Poison | Giọt+bong bóng | Xanh lục đậm khác heal, số stack |6s/1s, max3shared; body cleanse gỡ group. |
| Armor/MRes up | Khiên/lăng kính↑ | Viền ngắn khi nhận, không hộp bao thân | Strongest; dispel-defense khi skill được quyền. |
| Shield | Khiên rỗng+pool | Vòng chắn bên thân, vỡ khác expire | Pool/end thật; shield dispel nếu cho, tổngcap50%HPmax. |
| HoT | Tim+dấu cộng | Dấu cộng xanh ngọc sáng tại tick thật |5s/1s strongest; healing-buff dispel nếu cho. |
| Run/haste/power up | Chân/vũ khí/kiếm↑ | Trail/glow theo107; không đổi màu toàn body | Theo definition5s mẫu; dispel-enhancement nếu có quyền. |
| Block | Khiên chéo | Flash tại contact thật | Cửa sổ action, không kéo dài vì clip; không bị dispel như timedbuff nếu đang hành động. |

VFX không tự apply tick/debuff khi loop. Các profile slow phân biệt tác nhân nhưng mức giảm lấy logic; màu Fire không tự gây thêm Burn. Một skill gây slow+burn dùng hai thành phần effect có ID rõ, hình có thể gộp gọn.

## 2. M1 và bộ ký hiệu cần dự trù

Silence: miệng gạch; disarm: vũ khí gạch; sleep: mí mắt; fear: mặt hoảng; mark: đích khía; stealth: silhouette khuyết chỉ cho người được phép nhìn; taunt: mócđích; immunity: ấn có tag; heal reduction: dấu cộng gạch. Dùng đúng quyền của102. Đây là danh mục vẽ theo kit được mở, không tự đưa tất cả vào alpha.

## 3. Hình thức asset và anchor

Icon nguồn32×32px, thử đọc ở24px UI với palette V4; không nhét chữ/số vào bitmap, stack/time là textlayer. Sheet VFX khai báo source frame, trim offset, pivot, loop/start/end và ground/head/weapon socket4hướng. Bounds VFX độc lập với thân để không cắt vuông. Có bản Full/Gọn/Chức năng, không giảm opacity biên quan trọng đến vô hình.

Trên đầu tối đa3dấu theo ART-06: khóa điều khiển → nguy hiểm/cơ chế → trạng thái quan trọng. Panel đầy đủ không giới hạn3effect, có nguồn/group/time. Cùng boss hai người đóng góp shared shred vẫn một icon, không giảm đôi. Actor chưa được phép biết không hiện icon xuyên tường/stealth.

## 4. Quy tắc giải trừ và miễn

Cleanse mặc định chọn effect mới nhất khớp tag rồi instanceId; số group ghi ởskill. Không xóa một stackđộc để báo đã tẩy cảđộc. Dispel chỉ timedbuff được whitelist, không xóa nghề/AP/cánhngựa. Hiệu ứng bị immune phát glyph nhỏ “Miễn: Choáng”, không phát đủ animation khóa giả. Hất/boss/shield chỉ trình bày kết quả authoritative.

## 5. Bàn giao và tiêu chí kiểm sau

Mỗi entry phải có manifest icon/start/loop/end/sfx/LOD/anchor + effectId. Kiểm nhiềuCC khác hạn, bossimmune, cleanse3stack, shieldvỡ/expire, slownguồnkhác, atlastrim,4hướng và màn nhỏ. Chưa tạo ảnh hoặc xác nhận đọc rõ trong scene; ART/SCREEN sản xuất vẫn chưa tick từ hồ sơ này.


## V2 — Trạng thái kể đúng nguyên nhân

Tách **tác nhân đang gây hại**, **thân thể chịu tác động**, **nguồn điều khiển**. Độc/bỏng/slow vẫn đúngcatalog, nhưng gỡđộc không tự gỡtha hóa cốt truyện. Một con sói kích động vìnguồn nước hỏng không được gắn nhãn“Lang Tộcác”; mộtkhung máy nhậnsailệnh không cóiconlinh hồn bịgiamnếuchưa cóbằng chứng.

Hiệu ứng ngắn nói rõ người chơi còn làm gì được: root códấu chânkhóa nhưngtay cònchuẩn bịchiêu; stun cóvòngxoắn vàhành độngthực ngừng. Bossimmune khôngphátbăngtoànthân. Iconstatus và dấuhiệu nguồnkhác nhau: rễđất làroot, chữlệnhchồng ởtrụ làđối tượng điều tra, không debuffthứhai.

Cađọcdiễn: tại Trạm Suối, cleansegiúp giảmđộc choally, nhưng người chơi còn phải xửlýnguồn bẩn bằngvan/đối chiếu. Tiêu chí: khôngmộtclassgiảiquyếtnguồn bằngspamcleanse; mọi ngườiđọcbiết khả nănghành động, không phảiđoán chỉtừmàu.
