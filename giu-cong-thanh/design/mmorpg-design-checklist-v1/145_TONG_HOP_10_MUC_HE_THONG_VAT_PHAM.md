# Mười mục tiếp theo — nền hệ thống vật phẩm và túi đồ

Ngày21/10/2026. Đây là thiết kế MMORPG, không sửa gameplay thủ thành. GATE-01 còn thiếu bằng chứng art/camera; nhóm vật phẩm được viết song song dựa trên các quyết định sản phẩm và combat hiện hành, không tự cho gate đạt.

## 1. Mười hồ sơ đã hoàn thiện

- [ITEM-01 — Phân loại và định danh vật phẩm](135_ITEM_01_PHAN_LOAI_VA_DINH_DANH.md)
- [ITEM-02 — Hồ sơ mẫu vật phẩm và hợp đồng dữ liệu](136_ITEM_02_HO_SO_MAU_VAT_PHAM.md)
- [ITEM-03 — Mẫu, món cụ thể và lịch sử sở hữu](137_ITEM_03_MAU_INSTANCE_VA_LICH_SU.md)
- [ITEM-04 — Binding và quyền sở hữu](138_ITEM_04_KHOA_VA_QUYEN_SO_HUU.md)
- [ITEM-05 — Truyền khóa trong chế tác và chuyển đổi](139_ITEM_05_NGUYEN_LIEU_KHOA_VA_DAU_RA.md)
- [ITEM-06 — Stack, tách gộp và sắp xếp](140_ITEM_06_STACK_VA_SAP_XEP.md)
- [ITEM-07 — Bảo vệ vật phẩm khỏi thao tác nhầm](141_ITEM_07_KHOA_AN_TOAN_VA_YEU_THICH.md)
- [ITEM-08 — Tooltip, so sánh và ngôn ngữ hình ảnh](142_ITEM_08_TOOLTIP_VA_SO_SANH.md)
- [ITEM-09 — Ma trận hành động vật phẩm](143_ITEM_09_MA_TRAN_HANH_DONG.md)
- [ITEM-10 — Túi đầy, nhận thưởng và phục hồi](144_ITEM_10_TUI_DAY_VA_NHAN_THUONG.md)

## 2. Trải nghiệm người chơi

Tại Cầu Lau, người chơi nhận vật chứng vào nhật ký, nguyên liệu vào túi, Ngân Ấn vào ví. Sau chuyến đi, mở T để lọc nguyên liệu và so trang bị; đồ quý có thể khóa an toàn. Tại dịch vụ, preview cho biết dùng nguyên liệu khóa sẽ làm sản phẩm khóa tương ứng. Những bằng chứng quanh Oren không thể bán nhầm hay làm mất tuyến truyện.

Túi48 ô/kho account120 ô là cấu hình ban đầu, không phải giới hạn đã được chứng minh tối ưu. Không có trọng lượng hoặc bán mở ô bằng tiền nạp trong V1. Vật phẩm hồi sinh giữ ID và stack20 theo104. Nguyên liệu999/stack, tiêu thụ thường99; món có roll riêng không gộp. Các số này phải qua kiểm nhịp thu thập trước phát hành.

## 3. Nguồn tham khảo và cách chuyển thành thiết kế riêng

- [Ravendawn — Patch1.0.6.5](https://ravendawn.online/en/home/view/patch-notes-1065): ghi nhận badge đồ Soulbound và vấn đề dung lượng khi mở nhiều vật phẩm. Áp dụng cho Ẩn Thành: tách badge binding, kiểm sức chứa trước thao tác mở; không sao chép thuật toán hay số lượng.
- [Ravendawn — Customizable Inventory](https://ravendawn.online/en/home/view/new-player-catch-up-mechanic-customizable-inventory): tab tùy chỉnh phục vụ phân loại. Ẩn Thành dùng bộ lọc ban đầu, không biến mỗi tab thành dung lượng mới hoặc thêm ba lô phức tạp ngay.
- [Guild Wars2 — Account-Bound Gear, bản công bố2014](https://www.guildwars2.com/en/news/account-bound-wxp-legendaries-and-ascended-gear/): ví dụ thiết kế phạm vi account cho một số trang bị. Ẩn Thành tách account/server khỏi character theo16, không coi mọi đồ hiếm đều phải khóa nhân vật. GW2 là tham khảo hệ thống bổ sung, không chuẩn phong cách hình ảnh2.5D pixel.

Các bài là nguồn lịch sử thiết kế, không khẳng định toàn bộ luật hiện tại của các game. Mọi con số48/120/999/99/200 là cấu hình thiết kế riêng cho Ẩn Thành; nguồn trên không chứng minh chúng đã cân bằng.

## 4. Chốt phạm vi và phụ thuộc

Đã hoàn thiện hợp đồng ITEM-01…10. Chưa chốt toàn catalog item theo năm vùng, cấp/độ hiếm, roll affix, công thức rèn, giá bán NPC, tỷ lệ hộp, loot rate, UI vẽ thật hoặc database implementation. Không phát hành item có useAction/recipe/rewardTable còn thiếu. Trần60, nội dung45 và giới hạn dòng hiếm tối đa5% theo STAT vẫn giữ; không thêm chỉ số qua nhóm ITEM này.

Các phần nối tiếp theo thứ tự: ITEM-11 bảo vệ vật chứng và vòng đời quest; ITEM-12 catalog nguồn–nơi tiêu theo vùng; GEAR-01 slot/vũ khí; GEAR-02 cấp/độ hiếm; tiếp đến ngân sách base/affix. Catalog ITEM-12 có thể lập phần ngoài gear trước, những dòng gear chờ GEAR-04, không đánh dấu trọn mục khi chưa có đủ bảng.

## 5. Tiến độ và tiêu chí kiểm sau

90 hoàn thiện hồ sơ /7 một phần /416 chưa thiết kế =513; tăng đúng10 hồ sơ, không tăng số task. Hoàn thiện hồ sơ không đồng nghĩa đã implement. Cần prototype túi/hotbar/tooltip, test giao dịch nguyên tử và đo nhịp đầy túi. Không chạy game, migration SQL hoặc vẽ asset trong lượt này.
