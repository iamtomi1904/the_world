# ITEM-09 — Ma trận hành động vật phẩm

**Ngày:**21/10/2026 · **Trạng thái:** Hoàn thiện đặc tả thiết kế V1 trong phạm vi mục; chưa code, vẽ asset hoặc kiểm thử gameplay.

**Phạm vi:** MMORPG Ẩn Thành, web/PC, PostgreSQL và server có thẩm quyền. Tham chiếu [quyền sở hữu16](16_PROD_07_SO_HUU_VA_TIEN_DO.md), [hệ nghề28](28_HE_CHUNG_TOC_CHUC_NGHIEP_TRANG_BI.md), [hotbar64](64_HOTBAR_13_O_KY_NANG_VAT_PHAM.md), [hồi sinh104](104_COMBAT_13_CHET_VA_HOI_SINH.md).

## 1. Quyền theo loại

| Hành động | Gear | Consumable | Material | Quest | Container |
|---|---|---|---|---|---|
| Dùng | Qua Equip | Qua useAction | Không trừ khi recipe cụ thể | Qua quest | Qua openAction |
| Trang bị | Nếu đủ slot/nghề/cấp | Không | Không | Không | Không |
| Bán NPC | Nếu sellProfile, đã tháo | Nếu sellProfile | Nếu sellProfile | Không | Theo definition |
| P2P/chợ/mail | UNBOUND và action whitelist | Cùng điều kiện | Cùng điều kiện | Không | Theo binding/output policy |
| Phân giải | Nếu recipe hợp lệ | Không mặc định | Theo recipe chuyển đổi | Không | Không |
| Bỏ | Ngoài combat, xác nhận | Ngoài combat, xác nhận | Ngoài combat, xác nhận | Không | Theo definition |

Mọi ô “cho phép” còn kiểm safety lock/reservation/expiry/owner/revision. Chợ/mail chưa thiết kế không được coi đã có tính năng chỉ vì ma trận có quyền. Người chơi không thể gửi trực tiếp item cho nhân vật khác để vượt binding kho account.

## 2. Trong chiến đấu

T cho xem/sort/filter và dùng vật phẩm được combat whitelist; không mở crafting/trade/chợ/bán/bỏ/đổi gear trong combat lock10s. Dùng consumable thực hiện như action có target và cooldown chung, không uống bằng cách kéo ra ngoài túi. Kéo vào13 ô chỉ đổi shortcut, không tiêu vật phẩm; một item ở ba ô vẫn chung số lượng/CD.

## 3. Cam kết thao tác

Dùng ngay: kiểm đủ điều kiện, giữ lượng, commit tiêu cùng apply hành vi đúng một lần. Dùng có cast: giữ món tại accept, chưa phá hủy; đến Release hợp lệ mới consume và apply. Bị ngắt trước Release trả reservation, cooldown đã commit vẫn theo action definition; không miễn CD bằng ngắt cast. Ấn Hồi Sinh dùng deathId và quy tắc104 thay default này. Không mặc định tất cả consumable được uống trong combat, không đặt số hồi HP/mana mới ở ITEM.

## 4. Mạng và phản hồi

Một transactionId cho mỗi ý định; retry trả receipt cũ. Pending hiện spinner tại món và chặn thao tác cạnh tranh. Lỗi báo lý do cụ thể: xa dịch vụ, sai nghề, khóa, hết hạn, đang escrow, state đã đổi hoặc túi đầy. Không dùng optimistic xóa món rồi tự đoán hoàn lại. Server quyết định target, số lượng và quyền, không tin giá client.
