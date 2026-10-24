# STAT-12 — Trang nhân vật, chỉ số và so sánh nguồn

**Ngày:**21/10/2026 · **Phiên bản:**1.0. Hoàn thiện mô tả bố cục/dữ liệu; chưa vẽ UI production. [Tham khảo](79_THAM_KHAO_TIEN_TRINH_VA_VAI_TRO_MMORPG.md). MMORPG2.5D pixelV4, thủ thành giữ nguyên.

## 1. Cửa sổ C và bốn tab

Header có Chủng tộc/Nghề/Nhánh/Cấp và Điểm chưa phân. Tab Tổng quan: body/đồ, HP/mana, công đúng profile, giáp/kháng và ô liên kết AP/build. Tab Chi tiết: attack/defense/recovery/utility. Tab Nguồn: breakdown có filter bền/tạm/điều kiện. Tab Nội tại: primary/secondary và hiệu quả theo hồ sơ78.

1366px dùng body/card chỉ số chuyển tab, không ép ba cột nhỏ. UI scale150% một cột detail và footer cố định; không giả đã kiểm đủ mọi cỡ. Không đặt bảng chỉ số kín màn thường trực trong HUD.

## 2. Một hàng chỉ số

Tên/đơn vị → effective hiện tại → cap nếu có → mở nguồn. Phân biệt critChance và critMultiplier, hasteBonus và interval thực, armorRating và mitigation chống nguồn cấp mẫu, shield hiện tại và shieldcap, lootLuck và totalLuck. Armor không một %giảm tuyệt đối với mọi attacker vì Kphụ thuộc cấp nguồn.

Ví dụ haste2nguồn10%: hàng19%; detail b1=10%,b2=10%, công thức1−0,9², intervalbase/1,19 trước slow. Không ghi “+20%”. Luck18%: total18, loot15, critbonus3điểm%, capcrit/overcap hiện riêng. Nội tại60STR/30VIT hiện đủ nguồnE/R và các hook được hưởng, không ghi+3,98%DPS toàn kit.

## 3. So sánh trước–sau

Nháp AP, equip item hoặc reset build mở trạng thái Bản xem trước: hiện tại → dự kiến, delta, lý do nguồn. Một item thay hai tay phải bỏ shield/tay phụ đúng luật; tăng maxHP giữ HP hiện tại không preview hồi đầy. Skill đã học khác skill đang gắn và passive hiệu lực.

Tăng/giảm dùng mũi tên và giá trị, không chỉ xanh/đỏ; dòng có tradeoff giải thích. Nếu target data chưa biết không bịa DPS/TTK. Có target fixture rõ cấp/armor để so kỹ thuật, không leak stats boss chưa khám phá.

## 4. Nguồn và trạng thái

Source list gồm cấp/N, AP, gear base/roll/khảm/nâng/set, active/passive, effect/aura, environment/hệphụ được mở. Một source chỉ một lần; conversion root và bonus nhánh có mối liên hệ nhưng không doublecount stat gốc. Tooltip ghi cooldown, conditional uptime, capvàthời hạn.

Dữ liệu target/sheet người khác theo quyền; không hiện AP/affix riêng bằng cách gọi tooltip. Pending áp AP không thay sheet thật; stale/reconnect có nhãn và chặn commit. Timer client trình bày, server quyết hiệu lực.

## 5. Thao tác và asset

C mở theo UI-06, phím không kích khi chat. Nút Phân điểm/Reset/Nguồn/So sánh, không nút nạp để sửa stat. Cần tab icons, glyph4root, crit/armor/shield/kháng và card preview theo ART-07; chưa vẽ. Nút xác nhận có nội dung thay đổi và policy miễn phí theo LEVEL-04.

## 6. Nghiệm thu sau dựng

Kiểm số Việt dài, tên source dài, buff hết khi đang preview, cap100%, rootbonus theo nhánh, shieldvỡ và swap13ô. Mỗi số từ cùng stat engine, không client làm tròn rồi gửi lại. Hoàn thiện đặc tả màn, chưa triển khai windowC hoặc data API.
