> **Dừng trước vẽ ·22/10/2026:** [Bàn giao map199](199_BAN_GIAO_MAP_VA_DUNG_TRUOC_VE.md); MAP-11 đã thiết kế với [tham khảo197](197_THAM_KHAO_VAT_THE_TUONG_TAC_VA_GIOI_HAN.md). MAP-02…12 có hồ sơ chữ; MAP-01 còn một phần chờ vẽ/kiểm địa lý. **525mục:127hoànthiện /11mộtphần /387chưathiếtkế**. Chưa ảnh mới/code/runtime. Các tiến độ bên dưới là lịch sử.

> **MAP-05 ·22/10/2026:** [Nhịp khám phá và mạng đường196](196_MAP_05_NHIP_KHAM_PHA_MAT_DO_VA_MANG_DUONG.md) đã thiết kế; không tăng mật độ hoặc ngân sách để lấp map. **525 mục:126 hoàn thiện /11 một phần /388 chưa thiết kế**. Tiếp MAP-11 bằng chữ, giữ dừng trước vẽ. Các tiến độ bên dưới là lịch sử.

> **MAP-03 ·22/10/2026:** [Biên khu vực, điểm đến và đường quay lại195](195_MAP_03_BIEN_KHU_VUC_DIEM_DEN_VA_DUONG_QUAY_LAI.md) đã thiết kế. **525 mục:125 hoàn thiện /11 một phần /389 chưa thiết kế**. Còn MAP-05/11 là đầu vào bằng chữ; vẫn dừng trước vẽ, chưa code/runtime. Các tiến độ bên dưới là lịch sử.

> **MAP-02 ·22/10/2026:** [Ba sản phẩm bản đồ và12lớp194](194_MAP_02_CAU_TRUC_LOP_BAN_DO_VA_QUYEN_THONG_TIN.md) đã thiết kế; tách biết vị trí/nhìn hiện tại/vào/tương tác/nhận thưởng. **525mục:124hoànthiện /11mộtphần /390chưathiếtkế**. Giữ điểm dừng trước vẽ; chưa ảnh/code/runtime. Các tiến độ bên dưới là lịch sử.

> **Rà soát sâu trước vẽ ·22/10/2026:** [Bản r002 MAP-07…09](193_RA_SOAT_SAU_MAP_07_09_R002.md) sửa hồi sinh theo sector, mở warp, giao dịch NPC/transfer và claimscope bản đồ; còn ruleset PvP và kiểm layout. Giữ525mục:123hoànthiện/11mộtphần/391chưathiếtkế. Không ảnh mới/code/runtime; vẫn dừng trước vẽ.

# Tổng hợp MAP-07…09 và điểm dừng trước vẽ

Ngày22/10/2026. Theo yêu cầu “tiếp tục thiết kế đến khi vẽ”, hoàn thiện ba hồ sơ mô tả rồi dừng trước sản xuất hình. Không gọi công cụ vẽ, dựng scene hoặc sửa gameplay.

## 1. Các hồ sơ vừa hoàn thiện

| Task | Kết quả | Chưa làm |
|---|---|---|
| MAP-07 | [Điểm hồi sinh, nghỉ và dịch vụ189](189_MAP_07_HOI_SINH_NOI_NGHI_VA_DICH_VU.md): tách checkpoint/respawn/nghỉ/dịch vụ, mạng năm vùng và phe/bang/W06, NPC ngoài hub | Tọa độ, volume bảo hộ, NPC runtime và xác nhận hồi sinh PvP |
| MAP-08 | [Mạng di chuyển190](190_MAP_08_MANG_DI_CHUYEN_VA_CHUYEN_VUNG.md): đi bộ/ngựa/đò/điều vận/warp/đường tắt, đồ thị tuyến, giá/transfer và quyền theo scope | Layout, số đo quãng đường, giá dịch vụ mới, code pathfinding/portal |
| MAP-09 | [Khám phá và chia sẻ191](191_MAP_09_KHAM_PHA_SUONG_MAP_VA_CHIA_SE.md): fog theo nhân vật, tham khảo account, ghim/ping, map W06 và quyền thông tin | UI vẽ, cell khám phá/tọa độ, icon production, schema/runtime |

Giữ nguyên phí/quota/hồi sinh104 và combatlock111. Mọi nhánh nghề, quyền ngựa và số map theo186/187. Không thêm giá dịch vụ, cấp đồ60 hoặc tiền thưởng PK ngoài hồ sơ kinh tế được duyệt.

## 2. Đầu việc kế tiếp cần vẽ

**MAP-01: bản vẽ tham chiếu địa lý Elarion**, dựa185và187. Cần một master map có hướng Bắc và tỷ lệ tương đối, không coi đây là bản đồ gameplay đã có collision. Các lớp phải có chung địa danh/ID:

1. **Nền địa lý:** mười thành đúng mã, núi/cao độ, sông/lưu vực/hướng chảy, biển/đảo và dải sinh thái.
2. **Mạng hành trình:** đường lịch sử, nhánh sector năm PvE, bến/trạm/cổng chuyển, phạm vi chưa sản xuất; không ép người chơi quaW06để xong truyện.
3. **Phe và chiến trường:** hai đại bản doanh, W06ĐôngNam, hai tiền trạm, sáu cứ điểm và mạng vận chuyển. Nhà bang/arena là điểm hoạt động, không giả thành đảo địa lý.
4. **Dịch vụ và an toàn:** hub/điểmtrú, điểm hồi sinh dự kiến, quyền khu vực và các đường rút; NPC ngoài hoang dã không tự tạo safezone.

Bản master có thể xuất nhiều ảnh overlay cùng tọa độ, không cần nhồi mọi ký hiệu lên một ảnh. Nhãn phải có bảng chữ độc lập để kiểm tên và sửa chính tả; giữ phong cách pixel bản đồ2.5D phù hợpV4, không đổi sang tranh bản đồ photoreal. Đây là bản tham chiếu cho thiết kế, không phải bộ tile hoặc map engine.

Sau vẽ phải kiểm địa lý và đường đi, rồi mới phân sector/layout vùng cụ thể. Chưa có tọa độ thì không báo MAP-01 hoàn thiện. Không vẽ luôn sáu map đầy đủ, trụ sở, nhà bang, arena, NPC và quái trong cùng bước.

## 3. Kiểm trước và sau bản vẽ

- Nguồn185/187/184 nhất quán: cảngMerrowenTâyNam, đầmNocthollow phíaĐông, caođịaAstravelleĐôngBắc; không đảo tên thành hoặc mở đường kiểmấnIX–Xsớm.
- Sáu vùng ngoài trời dự toán21×V01; bản vẽ lục địa không có nghĩa cả mười thành đã được duyệt sản xuất.
- Lõi nămPvEgiữ82NPC/90mẫuquái/16tinh anh/5bossmap/5dungeon/62rương. Nội dung mới phe/W06 cần ngân sách riêng, không lấy số cũ chia lại.
- Hai tiền trạm/sáu cứ điểm đúngID; PvE/PK/bảo hộ/matchscope không nhập nhằng.
- Map nội bộ có thể có lớp bí mật, nhưng lớp trình bày cho người chơi không lộ đường phong ấn/nhân chứng/địch W06 chưa có quyền biết.
- Tỷ lệ quãng đường, thể tích và khả năng camera/collision cần vòng kiểm sau hình; chưa FPS hoặc thử online.

## 4. Trạng thái bàn giao

MAP-07/08/09 hoàn thiện **hồ sơ thiết kế**. Tổng **525 mục:123 hoàn thiện /11 một phần /391 chưa thiết kế**. MAP-01 tiếp tục một phần; MAP-02/03/05/11 và các FACTION/PVP còn mở đúng phạm vi. Không đánh dấu task khác chỉ vì hồ sơ này nhắc đến.

**Đã dừng trước bước vẽ.** Chưa có ảnh mới, asset, scene, migration hoặc code game. Những hồ sơ nền còn thiếu được ghi vào bước kiểm bản vẽ, không gọi là đã nghiệm thu. Các thiết kế không cần vẽ khác có thể tiếp tục ở nhánh riêng sau này, nhưng không được tự vượt điểm dừng đã yêu cầu.
