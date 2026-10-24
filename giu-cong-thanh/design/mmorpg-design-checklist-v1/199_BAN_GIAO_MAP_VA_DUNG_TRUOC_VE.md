> **Đã vẽ concept địa lý ·22/10/2026:** [Elarion MAP-01 r001](200_MAP_01_BAN_VE_ELARION_CONCEPT_R001.md) và [bản xem tương tác](/design-preview/elarion-map-r001/index.html). Có mười thành/các lớp tuyến/vùng/phe; MAP-01 vẫn một phần, chưa tỷlệ/đường đi chính thức. **525mục:127hoànthiện /11mộtphần /387chưathiếtkế**. Chưa gameplay/database; các điểm dừng trước vẽ bên dưới là lịch sử.

# Bàn giao thiết kế map và dừng trước bước vẽ

Ngày 22/10/2026. Thực hiện yêu cầu “thiết kế chi tiết, tham khảo và dừng khi gặp mục vẽ”. Không tạo ảnh, chỉnh game, dựng scene hoặc migration trong lần này.

## 1. Phần mô tả đã hoàn thiện

MAP-02…12 có hồ sơ quy tắc và nội dung trong phạm vi từng task. MAP-11 mới hoàn thiện tại [198](198_MAP_11_VAT_THE_TUONG_TAC_VA_VONG_DOI.md), có [nguồn tham khảo và giới hạn197](197_THAM_KHAO_VAT_THE_TUONG_TAC_VA_GIOI_HAN.md). Những phần tọa độ, định lượng, prototype và hệ liên quan vẫn cần triển khai riêng; không coi mười một hồ sơ là mười một hệ đã chạy.

MAP-01 vẫn một phần: có địa lý mô tả và brief, chưa có bản vẽ tỷ lệ tương đối, đường bờ/lưu vực/đảo và vòng kiểm tuyến. Đây là điểm cần vẽ tiếp, không tự đánh dấu hoàn thiện để tăng tiến độ.

## 2. Gói bản vẽ kế tiếp — phạm vi cụ thể

### A. Master địa lý Elarion

Một bản địa lý tham chiếu có hướng Bắc, tỷ lệ tương đối, mười thành giữ đúng mã/tên, núi/cao độ, sông/hướng chảy, biển/đảo và dải sinh thái. Vị trí còn cần quyết định phải có ghi chú, không che bằng họa tiết trang trí.

Giữ Merrowen là cảng Tây Nam; Nocthollow là vùng trũng phía Đông; Astravelle là cao địa Đông Bắc. Không vẽ sông ngược dốc hoặc nối Sylvaris thẳng cạnh Aurelia vì cùng vùngV03. Mười thành không đồng nghĩa duyệt dựng mười đô thị.

### B. Overlay hành trình và phạm vi sản xuất

Thể hiện đường lịch sử, node/edge chính, boundary nămPvE và W06, sector, đường đi/về, điểm chuyển và khu chưa sản xuất. Tách lớp tham chiếu thế giới với đường thực tế được dựng. Không ép truyện chính quaW06; không mở đường kiểmấnIX–Xsớm.

### C. Overlay phe, hoạt động và an toàn

Hai trụ sở phe trên hành lang Tây/ĐôngIX, W06 ở vànhĐôngNam, hai tiền trạm/sáu cứ điểm và mạng quân nhu. GM01/GA01/GA02 là quyền truy cập hoạt động, không thành các đảo giả trên bản đồ. Phân biệt PvE, PKđối phe, safevolume và matchscope.

### D. Overlay checkpoint, dịch vụ và điểm quan tâm

Hub/điểm trú, deathscope theo sector, arrival/return/fallback, NPC ngoài hoang dã, các nhánh khám phá và vật thể chức năng quan trọng. Giữ ngân sách lõi82NPC/90mẫuquái/16tinh anh/5bossmap/5dungeon/62rương; nội dung mớiFACTION chưa được lấp bằng con số cũ.

Bốn nhóm dùng chung mốc tọa độ vàID. Có thể xuất một master và các bản overlay, không bắt một ảnh chứa mọi icon. Tên/legend là lớp chữ độc lập để chỉnh chính tả, Việt hóa và thay revision.

## 3. Bản vẽ này chưa bao gồm

- Sáu layout vùng gameplay hoàn chỉnh, tilemap, navmesh hoặc collider.
- Dựng hai trụ sở, nhà bang, arena, dungeon hoặc từng tiểu khu trong engine.
- Vẽ90mẫuquái,82NPC, bộ kỹ năng, icon hoặc animation vật thể production.
- Cân giá/rate/respawn, công thức chiếm, số người trận hoặc hồi sinhPvP.
- Kiểm FPS, tải server, chốngcamp hoặc thử nghiệm nhiều người.

Giữ pixelV4 phục vụ thế giới2.5D; bản đồ tham chiếu có thể dùng ký hiệu rõ, không cần giả scene3D hoàn chỉnh. Chưa dùng ảnh đẹp làm bằng chứng camera/surface đã hoạt động.

## 4. Vòng duyệt sau khi có hình

**Vòng địa lý:** vị trí, nước/núi, tuyến lịch sử, tỷ lệ tương đối, sector và alias đúng nguồn.

**Vòng hành trình:** đi diễn thử người mới, Kỵ Sĩ, nhómPvE khác tiến độ và hai phe vàoW06. Mỗi tuyến bắt buộc có đường về; checkpoint không teleport sang nơi chưa tới.

**Vòng luật và thông tin:** bảo hộ/PK/instance không nhập nhằng; player-view không lộ bí mật; cùng địa điểm dùng cùngID trên mọi lớp.

**Vòng sản xuất:** xác định phần nào chuyển sang greybox, asset nào cần vẽ, số lượng có ngân sách; không tự mở tất cả thành/dungeon chỉ vì đã có trên bản đồ lục địa.

Nếu có sai thì sửa bản mô tả hoặc hình với ghi nhận thay đổi; không âm thầm đổi lore, stat hoặc quyền di chuyển để hợp hình đã vẽ. MAP-01 chỉ xét hoàn thiện sau bản vẽ và kiểm địa lý trong phạm vi task; collision và cân bằng runtime vẫn là cổng khác.

## 5. Trạng thái và điểm dừng

**Đã dừng trước vẽ.** Tổng525mục: **127 hồ sơ hoàn thiện /11 một phần /387 chưa thiết kế**. Không thêm task từ việc chia overlay hoặc tham khảo. MAP-01 vẫn một phần, các FACTION/PVP/ENV/ITEM liên quan vẫn mở đúng phạm vi.

Nguồn: [địa lý185](185_MAP_01_DIA_LY_ELARION_VA_MANG_DUONG.md), [phe187](187_MAP_DONG_BO_PHE_BANG_HOI_VA_W06.md), [ràsoát193](193_RA_SOAT_SAU_MAP_07_09_R002.md), [lớp194](194_MAP_02_CAU_TRUC_LOP_BAN_DO_VA_QUYEN_THONG_TIN.md), [biên195](195_MAP_03_BIEN_KHU_VUC_DIEM_DEN_VA_DUONG_QUAY_LAI.md), [nhịp196](196_MAP_05_NHIP_KHAM_PHA_MAT_DO_VA_MANG_DUONG.md), [tham khảo197](197_THAM_KHAO_VAT_THE_TUONG_TAC_VA_GIOI_HAN.md), [vật thể198](198_MAP_11_VAT_THE_TUONG_TAC_VA_VONG_DOI.md).
