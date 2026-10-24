> **Hiện hành · 21/10/2026:** [Sáu hồ sơ GEAR-09…14](164_TONG_HOP_HIEU_UNG_SET_VA_NGAN_SACH_GEAR.md). **105 hồ sơ hoàn thiện /8 một phần /400 chưa thiết kế =513**. GEAR đã có đặc tả toàn nhóm; chưa code/cân bằng/vẽ. ITEM-12 và GATE-01 còn mở; các số bên dưới là lịch sử.

> **Hiện hành · 21/10/2026:** [Bảng chỉ số và dòng thuộc tính157](157_TONG_HOP_MA_TRAN_VA_DONG_THUOC_TINH.md). **99 hồ sơ hoàn thiện /8 một phần /406 chưa thiết kế =513**. GEAR-04…08 đã thiết kế; tiếp theo GEAR-09. ITEM-12 và GATE-01 còn mở. Các số tiến độ bên dưới là lịch sử; chưa kiểm chứng cân bằng bằng bản chơi.

> **Mới nhất:** [Vật chứng, catalog vùng và nền trang bị151](151_TONG_HOP_VAT_CHUNG_CATALOG_VA_TRANG_BI.md). ITEM-11/GEAR-01…03 hoàn thiện hồ sơ; ITEM-12 mới một phần.

> **Thiết kế ITEM-01…10 · 21/10/2026:** [Tổng hợp145](145_TONG_HOP_10_MUC_HE_THONG_VAT_PHAM.md). Đã hoàn thiện hồ sơ nền vật phẩm/túi; GEAR/LOOT/CRAFT và catalog ITEM-11/12 vẫn chưa hoàn thiện.

# 04 — Vật phẩm, độ hiếm, rèn và nâng đồ

> **THAY ĐỔI HỆ NHÂN VẬT — 20/10/2026:** [Khung chủng tộc/nghề/trang bị mới](28_HE_CHUNG_TOC_CHUC_NGHIEP_TRANG_BI.md) thay mô tả cũ khi xung đột: tạo Con Người/Elf/Người Lùn, cấp 15 chọn nghề, cấp 30 chọn nhánh theo race. Trang bị/vũ khí kiểm quyền nghề/nhánh; hình riêng không đổi chỉ số món. Không còn chọn ba class cố định lúc tạo hoặc quy tắc mọi race chọn mọi nhánh.


Đây là checklist thiết kế, chưa là bảng cân bằng. Không tự đặt giá, số dòng, tỷ lệ thành công hoặc damage khi chưa có hệ chỉ số và kinh tế được duyệt.

## A. Phân loại toàn bộ vật phẩm

| Nhóm bắt buộc | Các nhánh phải liệt kê | Quy tắc cần chốt |
|---|---|---|
| Trang bị | Vũ khí, phòng cụ, trang sức, phụ trợ/di vật; công cụ nghề nếu có | Slot, yêu cầu, class/race, chỉ số, durability, binding, hiển thị |
| Tiêu thụ | HP/mana, thức ăn, thuốc trạng thái, dịch chuyển, buff, vật phẩm tiện ích | Dùng ở đâu, cooldown chung/riêng, cộng dồn, thời hạn, PvP |
| Nguyên liệu | Thu thập, drop quái/boss, nghề, công thức, chế tác, nguyên liệu hiếm | Nguồn, cấp, tinh luyện, stack, giao dịch, tái tạo |
| Sự kiện | Vé, token, vật phẩm nhiệm vụ sự kiện, vật đổi thưởng | Thời gian nhận/dùng, cap, đổi/hết hạn, chuyển mùa |
| Cường hóa/phát triển | Đá nâng, bùa bảo hộ, đá đổi dòng, tẩy điểm, lõi tiến hóa, thức ăn pet… | Tương thích đối tượng/bậc/cấp, tiêu hao, binding, thành/bại |
| Túi quà/hộp | Chọn quà, cố định, ngẫu nhiên, gói nhiều lớp | Bảng tỷ lệ, số lượt, trùng, bảo đảm, lịch sử, đầy túi |
| Nhiệm vụ | Vật chứng, chìa, thư, vật tương tác | Bảo toàn, không bán/mất nhầm, không chiếm túi thường nếu không cần |
| Sưu tập/ngoại hình | Skin, thuốc nhuộm, emote, nhạc cụ, đồ trang trí | Mở theo nhân vật/account, nhận trùng, xem trước, giao dịch |

Không gộp “nguyên liệu nâng cấp”, “đồ sự kiện” và “vật chứng” chỉ vì cùng icon. Một item có nhóm chính và tag phụ; người chơi vẫn lọc được theo mục đích.

- [x] ITEM-01 · Duyệt taxonomy nhóm/nhánh/tag, cách đặt tên và bộ mã vật phẩm. [Hồ sơ thiết kế](135_ITEM_01_PHAN_LOAI_VA_DINH_DANH.md)
- [x] ITEM-02 · Mỗi vật phẩm có tên, mô tả dùng/lore, nhóm, nguồn, cấp/độ hiếm, icon, stack, giá trị bán, thời hạn và quyền sở hữu. [Hồ sơ thiết kế](136_ITEM_02_HO_SO_MAU_VAT_PHAM.md)
- [x] ITEM-03 · Tách item mẫu và món cụ thể có roll/chủ sở hữu/nâng cấp; thiết kế người chơi nhận biết hai món cùng tên khác dòng. [Hồ sơ thiết kế](137_ITEM_03_MAU_INSTANCE_VA_LICH_SU.md)
- [x] ITEM-04 · Chốt khóa khi nhặt, trang bị, chế tác, sử dụng, chuyển account/nhân vật; có đồ không khóa và trạng thái đặc biệt. [Hồ sơ thiết kế](138_ITEM_04_KHOA_VA_QUYEN_SO_HUU.md)
- [x] ITEM-05 · Quy tắc kết hợp đồ/nguyên liệu khóa với không khóa; đầu ra, phần tách lại và bán đi không được tự rửa trạng thái khóa. [Hồ sơ thiết kế](139_ITEM_05_NGUYEN_LIEU_KHOA_VA_DAU_RA.md)
- [x] ITEM-06 · Stack có cùng binding/thời hạn/chất lượng mới gộp thế nào; tách stack, gộp, sort và nhận một phần. [Hồ sơ thiết kế](140_ITEM_06_STACK_VA_SAP_XEP.md)
- [x] ITEM-07 · Quy tắc khóa an toàn do người chơi, yêu thích, bảo vệ bán/phân giải, xác nhận món giá trị cao. [Hồ sơ thiết kế](141_ITEM_07_KHOA_AN_TOAN_VA_YEU_THICH.md)
- [x] ITEM-08 · Tooltip hiển thị yêu cầu chưa đạt, nguồn, khóa/hạn dùng, chỉ số gốc/dòng/nâng/set; mô tả không giấu chi phí. [Hồ sơ thiết kế](142_ITEM_08_TOOLTIP_VA_SO_SANH.md)
- [x] ITEM-09 · Dùng, trang bị, tháo, đổi slot, bán, gửi thư, bỏ, phân giải, đặt chợ và quyền nhặt có ma trận hợp lệ. [Hồ sơ thiết kế](143_ITEM_09_MA_TRAN_HANH_DONG.md)
- [x] ITEM-10 · Đầy túi, nhặt nhanh, loot tràn, thư trả đồ, vật phẩm hết hạn và hồi phục sau lỗi có quy tắc cho từng nhóm. [Hồ sơ thiết kế](144_ITEM_10_TUI_DAY_VA_NHAN_THUONG.md)
- [x] ITEM-11 · Không bán hoặc phá nhầm vật chứng chính; vật phẩm nhiệm vụ dùng xong được lưu/biến mất thế nào có thông báo. [Hồ sơ thiết kế](146_ITEM_11_VAT_CHUNG_VA_VONG_DOI_NHIEM_VU.md)
- [ ] ITEM-12 · **Thiết kế một phần:** Lập danh sách item theo vùng/cấp/nghề/sự kiện, không thiết kế icon rời không có nơi kiếm hoặc nơi tiêu. [Hồ sơ thiết kế](147_ITEM_12_CATALOG_THEO_VUNG_BAN_DAU.md)

## B. Trang bị, cấp và độ hiếm

- [x] GEAR-01 · Chốt slot, vũ khí một/hai tay, khiên/phụ trợ, hoán đổi bộ, điều kiện trang bị và hành vi khi đổi class. [Hồ sơ thiết kế](148_GEAR_01_SLOT_VU_KHI_VA_QUYEN_MAC.md)
- [x] GEAR-02 · Tách cấp nhân vật yêu cầu, item level, độ hiếm, phẩm chất chế tác, bậc tiến hóa và cấp cường hóa; không dùng một chữ “cấp” cho mọi thứ. [Hồ sơ thiết kế](149_GEAR_02_SAU_TRUC_PHAT_TRIEN_TRANG_BI.md)
- [x] GEAR-03 · Duyệt thang độ hiếm: tên, màu, biểu tượng/viền, hiệu ứng rơi, cách gọi và số cấp; không chỉ dùng màu để phân biệt. [Hồ sơ thiết kế](150_GEAR_03_DO_HIEM_VA_NGON_NGU_HINH_ANH.md)
- [x] GEAR-04 · Ma trận **slot × cấp × độ hiếm × loại build**: chỉ số cơ bản, dải roll, số lượng/loại dòng, giới hạn và nguồn rơi. [Hồ sơ thiết kế](152_GEAR_04_MA_TRAN_NGAN_SACH_TRANG_BI.md)
- [x] GEAR-05 · Quy luật tăng cơ bản theo item level và độ hiếm; xác định cùng độ hiếm/cấp có roll gốc hay luôn cố định. [Hồ sơ thiết kế](153_GEAR_05_CONG_THUC_CHI_SO_NEN.md)
- [x] GEAR-06 · Mỗi affix có nhóm, điều kiện xuất hiện theo slot/class/cấp, dải trị số, trọng số và tương thích/xung đột. [Hồ sơ thiết kế](154_GEAR_06_POOL_DONG_THUOC_TINH.md)
- [x] GEAR-07 · Quy tắc số dòng theo độ hiếm, tier của dòng theo cấp; không để roll thấp/cao lẫn không có lý do. [Hồ sơ thiết kế](155_GEAR_07_SO_DONG_TIER_VA_QUY_TAC_ROLL.md)
- [x] GEAR-08 · Chống trùng dòng, tổ hợp không dùng được, giá trị vượt trần và chỉ số không có tác dụng trên món. [Hồ sơ thiết kế](156_GEAR_08_RANG_BUOC_VA_CHONG_DONG_LOI.md)
- [x] GEAR-09 · Chốt dòng cố định/ngẫu nhiên, hiệu ứng độc nhất, set bonus và cơ chế kích hoạt; tách damage proc khỏi buff vô hạn. [Hồ sơ thiết kế](158_GEAR_09_HIEU_UNG_RIENG_VA_PROC.md)
- [x] GEAR-10 · Bộ trang bị có yêu cầu số món, trùng set, phiên bản cùng tên khác cấp, đổi ngoại hình và tương tác loadout. [Hồ sơ thiết kế](159_GEAR_10_SET_DO_VA_BONUS.md)
- [x] GEAR-11 · Tính giá trị tổng của món: cơ bản + affix + set + khảm + nâng; không để mỗi lớp được cân như chưa có lớp khác. [Hồ sơ thiết kế](160_GEAR_11_NGAN_SACH_TONG_VA_GIOI_HAN_PHAT_TRIEN.md)
- [x] GEAR-12 · Thiết kế so sánh hai món có dòng khác nhau, phần đổi chỉ số khi mặc, nguồn chênh và yêu cầu chưa đạt. [Hồ sơ thiết kế](161_GEAR_12_SO_SANH_TRANG_BI_VA_PREVIEW.md)
- [x] GEAR-13 · Độ bền/sửa chữa nếu dùng: hỏng làm gì, chết hao gì, phí, tự sửa và không mắc kẹt không thể kiếm tiền. [Hồ sơ thiết kế](162_GEAR_13_DO_BEN_VA_SUA_CHUA.md)
- [x] GEAR-14 · Ngoại trang/transmog giữ hình và thông tin sức mạnh rõ; preview hình trên mọi race, dáng cầm và trạng thái chiến đấu. [Hồ sơ thiết kế](163_GEAR_14_NGOAI_HINH_VA_TU_DO.md)

### Những bảng phải bàn giao, không được bỏ qua bằng một mô tả chung

| Bảng | Nội dung phải điền trong thiết kế chi tiết |
|---|---|
| Thang độ hiếm | Thứ bậc, tên/màu/icon, chỉ số cơ bản được phép, số dòng, dòng đặc biệt, nguồn, binding |
| Trang bị theo cấp | Item level/yêu cầu, slot, base stat min/max, khoảng ngân sách, giới hạn cường hóa/khảm |
| Pool dòng thuộc tính | Mã dòng, đơn vị, slot hợp lệ, tier cấp, dải, trọng số, cấm trùng, xung đột |
| Hiệu ứng đặc biệt | Trigger, damage/buff, target, cooldown nội bộ, stack, PvE/PvP/boss và VFX |
| Ví dụ so sánh | Hai món cùng cấp khác hiếm; hai món cùng hiếm khác cấp; món đã nâng với món mới; build hỗ trợ và tấn công |

## C. Loot, thu thập và phân phối

- [ ] LOOT-01 · Nguồn rơi theo quái/boss/vùng/quest/nghề/hộp/sự kiện; bảng bảo đảm và bảng ngẫu nhiên tách riêng.
- [ ] LOOT-02 · Drop cá nhân/nhóm/chung, quyền nhặt, đóng góp, khoảng cách, người chết/disconnect và người hỗ trợ.
- [ ] LOOT-03 · Chốt chia tiền/vật phẩm tổ đội, roll nếu dùng, món khóa và quyền đổi trong nhóm sau nhặt.
- [ ] LOOT-04 · Chống chiếm boss/bãi quái và ăn theo; giới hạn không làm người tank/heal bị loại thưởng.
- [ ] LOOT-05 · Rương/world resource: quyền dùng, respawn, tranh chấp, account cap, nhân vật khác và nhiều kênh.
- [ ] LOOT-06 · Loot hiếm có thông báo/màu/âm thanh/lịch sử nhưng không spam hoặc tiết lộ vị trí người chơi ngoài chủ đích.
- [ ] LOOT-07 · Chốt đồ quest/đồ thưởng tự nhận khi túi đầy, lưu bao lâu và cách tránh thất lạc.
- [ ] LOOT-08 · Tự nhặt/lọc nhặt theo loại/hiếm, xác nhận khi bỏ món, thao tác cảm ứng và người chơi không dùng tính năng trả phí.

## D. Nghề, thu thập, rèn và chế tác

- [ ] CRAFT-01 · Danh mục nghề: khai khoáng, hái lượm, lấy da/thu hoạch hợp lore, câu cá; rèn, may, luyện kim, nấu ăn, chế dược, trang sức… chọn phạm vi bản đầu.
- [ ] CRAFT-02 · Tay nghề, chuyên môn, công cụ, học công thức, điểm nghề và khả năng đổi nghề; nghề không khóa theo race.
- [ ] CRAFT-03 · Mỗi công thức có đầu vào, số lượng, quality/binding, nơi làm, thời gian, phí, đầu ra và phần phụ nếu có.
- [ ] CRAFT-04 · Chốt chế tạo thành công bảo đảm/xác suất, chất lượng đầu ra, dòng ngẫu nhiên và quyền xem trước.
- [ ] CRAFT-05 · Nguyên liệu thay thế, khóa/tự do, ưu tiên chọn, tự mua thiếu và cảnh báo món quý đang bị dùng.
- [ ] CRAFT-06 · Rèn tại NPC và tự rèn khác nhau gì; đặt hàng từ người chơi có phí công, quyền vật liệu, trạng thái, hủy và nhận đồ.
- [ ] CRAFT-07 · Hàng chờ, chế tạo nhiều, rời trạm, disconnect, hết nguyên liệu, túi đầy và hủy giữa chừng.
- [ ] CRAFT-08 · Tinh luyện/chuyển nguyên liệu, phân giải, tái chế và sản phẩm thừa; không tạo vòng chuyển đổi sinh lời vô hạn.
- [ ] CRAFT-09 · Cửa sổ nghề có tìm/lọc, công thức biết/chưa biết, nguồn học, nguyên liệu kho/túi, số lần làm và đầu ra có thể roll.
- [ ] CRAFT-10 · Icon công cụ/nguyên liệu/sản phẩm, động tác nghề và VFX/SFX; nghề gắn địa điểm, người dạy và văn hóa.

## E. Khảm ngọc

- [ ] SOCKET-01 · Loại socket, số theo món/hiếm/cấp, chốt sinh sẵn hay mở bằng vật phẩm; màn hình hiển thị slot chưa mở.
- [ ] SOCKET-02 · Nhóm ngọc, cấp/bậc, chỉ số/proc/nguyên tố, giới hạn trùng và class/vũ khí được dùng.
- [ ] SOCKET-03 · Cơ chế khảm/tháo/thay/hợp nhất/nâng ngọc; có mất ngọc/phí/món khi đổi không, preview đầy đủ.
- [ ] SOCKET-04 · Gộp ngọc có tỷ lệ, bảo hộ, đầu ra khóa và vật liệu thừa; không suy ra luật “một ngọc” từ thủ thành.
- [ ] SOCKET-05 · Tương tác đòn thường/kỹ năng/boss/air target; proc không tự kích proc vô hạn, stack chung/riêng rõ.
- [ ] SOCKET-06 · Cửa sổ kéo thả/chọn ngọc hợp lệ, so sánh trước-sau, lỗi điều kiện; icon, socket frame và glow vũ khí theo nguyên tố.

## F. Cường hóa

- [ ] ENH-01 · Chốt tăng gì: chỉ số cơ bản hay cả affix, các mốc mở tính năng, trần theo cấp/hiếm và ngân sách.
- [ ] ENH-02 · Mỗi bậc có phí tiền, nguyên liệu, tỷ lệ thành công, bảo đảm/pity và quy tắc account/nhân vật/món.
- [ ] ENH-03 · Thất bại có mất vật liệu, giảm bậc, hỏng đồ hay giữ nguyên; bùa bảo hộ bảo vệ phần nào phải ghi rõ.
- [ ] ENH-04 · Xem trước chi phí/vật liệu khóa, xác suất thực sau vật bổ trợ và kết quả; không để animation khác kết quả thật.
- [ ] ENH-05 · Nâng liên tiếp/tự dừng ở mốc hoặc khi hết tiền, bảo vệ món đang mặc, hủy và kết nối bị ngắt.
- [ ] ENH-06 · Chuyển cường hóa giữa món: cùng slot/cấp/hiếm, hao hụt, binding, tách khảm/dòng và xác nhận trước-sau.
- [ ] ENH-07 · Hình ảnh theo mốc: vũ khí phát sáng, border/icon, tooltip; có tắt trang trí người khác mà vẫn đọc được vai trò.

## G. Nâng cấp, tái tạo dòng và tiến hóa trang bị

- [ ] UPG-01 · Phân biệt tăng item level, tăng độ hiếm, nâng bậc và tiến hóa sang món khác; mỗi loại có luồng và vật liệu riêng.
- [ ] UPG-02 · Xác định giữ/roll lại/chuyển đổi base, affix, socket, gem, cường hóa, độ bền và binding ở từng thao tác.
- [ ] UPG-03 · Đổi/tẩy dòng: chọn dòng, khóa dòng, pool, trọng số, phí, số dòng được khóa và áp lực kinh tế.
- [ ] UPG-04 · Xem kết quả mới/cũ và chọn giữ nếu cho phép, thời điểm tiêu vật liệu, xử lý không chọn/disconnect; tránh nhân đôi cả hai món.
- [ ] UPG-05 · Chuyển build/class/vũ khí không tự xóa thành quả; nếu mất phải được giải thích và preview.
- [ ] UPG-06 · Bản vẽ recipe, NPC, lore, icon nguyên liệu đặc biệt, ảnh món trước/sau và hiệu ứng mốc lớn.
- [ ] UPG-07 · Phân giải/thu hồi sau nâng cấp trả thành phần nào, cap nào, có thể giao dịch đầu ra hay không.

## H. Tiêu thụ và vật phẩm sự kiện

- [ ] USE-01 · Mỗi nhóm thuốc/thức ăn có cooldown chung/riêng, cách áp dụng, stack, duration, chết/đổi map và PvP.
- [ ] USE-02 · Vật phẩm tăng vĩnh viễn, tăng tạm, kinh nghiệm và tiện ích có tên/viền/tooltip/VFX phân biệt.
- [ ] USE-03 · Tự dùng thuốc nếu chọn: ngưỡng, ưu tiên loại, giới hạn, quyền tắt, thông báo và tương tác với thao tác tay.
- [ ] USE-04 · Vật phẩm timed có bắt đầu đếm khi nhận/dùng, theo thời gian thực/online, cảnh báo hết hạn và chính sách gia hạn.
- [ ] USE-05 · Token sự kiện có nơi kiếm/tiêu, giới hạn account, thời điểm ngừng nhận/đổi, xử lý dư và thư bù nếu lịch thay đổi.
- [ ] USE-06 · Tách đồ thưởng trực tiếp, vé quyền vào và vật phẩm nhiệm vụ; không mất lượt khi lỗi máy chủ trước khi thực sự vào.

## I. Túi quà và tỷ lệ nhận quà

- [ ] GIFT-01 · Phân biệt hộp chọn, hộp cố định, hộp ngẫu nhiên một quà, nhiều quà độc lập và túi có phần bảo đảm cộng phần ngẫu nhiên.
- [ ] GIFT-02 · Mỗi hộp có bảng phần thưởng: món/nhóm, số lượng, khóa, thời hạn, tỷ lệ, có/không thay thế và điều kiện nhận.
- [ ] GIFT-03 · Một quà chọn trong danh sách: tổng xác suất bằng 100%; nếu dùng trọng số, mô tả cách đổi thành % người chơi thấy.
- [ ] GIFT-04 · Nhiều lần roll độc lập: công bố tỷ lệ từng lần và cơ hội có ít nhất một món, không cộng các % độc lập thành 100 một cách sai.
- [ ] GIFT-05 · Nếu roll nhóm độ hiếm rồi roll item, công bố xác suất cuối của món hoặc đủ thông tin để hiểu; không chỉ ghi “1% nhóm quý” khi trong nhóm còn nhiều món.
- [ ] GIFT-06 · Số lượng ngẫu nhiên, quà trùng, chuyển thành mảnh, không nhận món đã sở hữu và xác suất có điều kiện phải được nêu.
- [ ] GIFT-07 · Pity/bảo đảm: đếm theo hộp/account/nhân vật, reset khi nào, giữ qua mùa/đổi pool, nhiều món quý và lần mở hàng loạt.
- [ ] GIFT-08 · Xem danh sách tỷ lệ, preview ngoại hình, trạng thái sở hữu, lịch sử mở, mở một/nhiều, bỏ qua animation và nhận kết quả.
- [ ] GIFT-09 · Túi đầy, món vượt cap, tiền thưởng vượt hạn mức, hộp hết hạn và mở nhiều lần khi mạng chậm: không nhận một phần rồi mất phần còn lại mà không báo.
- [ ] GIFT-10 · Kiểm vòng hộp sinh hộp, hộp mở ra tiền mua lại hộp, món phân giải đổi hộp và khả năng rửa đồ khóa.
- [ ] GIFT-11 · Ghi phiên bản pool/tỷ lệ tại thời điểm mở, lịch sửa và cách người chơi tra cứu; đổi pool phải cập nhật mô tả và quyết định tương thích hộp cũ.
- [ ] GIFT-12 · Túi quà có liên hệ nạp tiền là mục quyết định sản phẩm riêng; chưa tự thêm vào shop chỉ vì đã có hộp quest/sự kiện.

**Ví dụ cách ghi hồ sơ, không phải tỷ lệ game đã duyệt:** “mở nhận một vật phẩm theo bảng A” khác “mở nhận vật phẩm cố định và thêm ba lượt theo bảng B”. Người thiết kế phải đặt tên pool, điều kiện, đơn vị roll và xác suất cuối trước khi giao người làm icon hoặc UI.

## J. Bộ màn hình và asset riêng cho vật phẩm

- [ ] ITEMUI-01 · Túi, kho cá nhân/account, giấy nhân vật, so sánh đồ, shop, loot và thư cùng dùng một nghĩa cho khóa/hiếm/hạn dùng.
- [ ] ITEMUI-02 · Rèn, khảm, cường hóa, đổi dòng, nâng cấp có tab/luồng riêng; không gộp thao tác nguy hiểm trong cùng một nút mơ hồ.
- [ ] ITEMUI-03 · Icon item chuẩn nhỏ, icon lớn preview, ảnh drop ngoài đất và hình mặc/cầm nếu có; viền chất lượng không vẽ cứng vào mọi icon.
- [ ] ITEMUI-04 · Xem trước kết quả và nguồn vật liệu, phím thao tác nhanh có xác nhận với món bảo vệ; mobile có menu thay chuột phải.
- [ ] ITEMUI-05 · Checklist ví dụ trọn đời cho từng nhóm item ở mục A, gồm thu hồi/hoàn trả và trạng thái dữ liệu sau lỗi.


**Đồng bộ thiết kế class:** [Kết quả rà soát và quy tắc liên hệ thống](32_DONG_BO_CLASS_KY_NANG_TRANG_BI.md). Giữ cây 3 chủng tộc/7 nghề/19 nhánh; sửa mô tả cũ và điều kiện điểm, slot, tiến hóa, trang bị. Không tăng số task hoàn tất.


**Kỵ Sĩ và tọa kỵ:** [Thiết kế chiến đấu trên ngựa, giáp theo bộ và bị động tiến hóa cánh](34_KY_SI_CHIEN_DAU_TREN_NGUA.md). Đây là cập nhật đặc thù class; MOUNT-01…07 chưa hoàn thiện toàn bộ.
