> **Rà soát r003 ·22/10/2026:** [Thế giới mở, ID quyền và10đấtẩn203](203_RA_SOAT_MO_VUNG_THE_GIOI_MO_VA_DAT_AN_R003.md) làm rõ cấp khuyến nghịPvE/khám phá sớm khác gateW06, grantổnđịnh và assetẩn không phải bảo mậtCSS. Sửa202; r002vẫn prototypelevel. Giữ525task:127hoànthiện/11mộtphần/387chưathiếtkế. Không ảnh/codegame/SQL.

> **Thiết kế mở vùng ·22/10/2026:** [Trạng thái vùng và10tuyến khám phá dự phòng202](202_MAP_MO_VUNG_TRANG_THAI_VA_HUONG_KHAM_PHA_DAT_AN.md) tách phát hành/knowledge/grant/quyền đi hiện tại. Vùng đã mở giữ màu khi tạm bị chặn; bản xemr002chỉ mô phỏng, chưa diễn đủ state/backend. Giữ525mục:127hoànthiện/11mộtphần/387chưathiếtkế; không ảnh mới/gamecode.

# MAP-01 r002 — Mười vùng đất ẩn và màu theo tiến trình

Ngày22/10/2026. Theo yêu cầu: tên trực tiếp trên từng khu, vẽ thêm10vùng đất ẩn ngoài các map đã chốt; vùng mở có màu, chưa mở màu xám. Nền mở rộng bằng imagegen tích hợp, lớp tên và trạng thái bằngSVG/HTML; chưa tích hợp nhân vật/server hoặc sửa game thủ thành.

## 1. Bản xem hiện hành

[Mở bản đồ thế giới r002](/design-preview/elarion-map-r002/index.html). Mặc định cấp mô phỏng10, có chọn mốc20/30/40/45/60 và điều kiện tiến trình/phe. Click hoặcTab/Enter một khu để xem thông tin. Tên khu nằm trực tiếp trên ảnh; tên mười thành có lớp bật/tắt riêng để tránh lẫn thành với vùng gameplay.

![Ví dụ cấp10: vùng mở có màu, còn lại xám](/design-preview/elarion-map-r002/a_level10__r002.png)

[Cấp30](/design-preview/elarion-map-r002/b_level30__r002.png), [cấp60](/design-preview/elarion-map-r002/c_level60__r002.png), [bản concept toàn màu](/design-preview/elarion-map-r002/d_all_concept__r002.png).

## 2. Phạm vi giữ nguyên và phần mở rộng

Giữ năm vùngPvE V01…V05 và W06 tranh chấp, cùng mười thành lịch sử. V03 có hai sector nên có hai nhãn, vẫn chỉ một vùng nội dung. ThêmH01…H10 là10vùng dự phòng chưa phát hành, không đổi thành10thành mới hoặc10map đã được duyệt sản xuất.

Nền trung tâm được công cụ vẽ lại khi mở rộng khung; vị trí chi tiết có sai khác thị giác. r001/185 vẫn là tham chiếu địa lý lõi, không lấy biến dạng trongảnhmới làm lý do thay lore hay tự đổi hướng tuyến. r002 bổ sung thế giới xung quanh, chưa bản đồ tỷ lệ/collision.

Không tăng cap60, không đặt cấp61+, không tự thêm ngân sách quái/NPC/item/quest choH01…H10. Ngân sách lõi82NPC/90mẫuquái/62rương và W06/phầnphe tiếp tục tách riêng. Đấtẩn là chỗ để phát triển lâu dài; tên/cốt truyện dưới đây là đề xuất sáng tác.

## 3. Mười vùng đất ẩn

| ID | Tên làm việc trên bản đồ | Sinh thái và hướng truyện dự phòng |
|---|---|---|
| H01 | Hàn Uyên Băng Vực | Băng lam, khe nứt, bia đá và dấu đoàn canh phòng thất lạc |
| H02 | Cao Nguyên Thiên Thạch | Hố va chạm, đá tím, khoáng lạ; điều tra tín hiệu và lịch quan sát |
| H03 | Rừng Mộng Nguyệt | Tán bạc, hồ lưỡi liềm; phân biệt ký ức được lưu với sự thật kiểm chứng |
| H04 | Quần Đảo Sương Bạc | Đảo nhỏ, sương và hải đăng đổ; tuyến biển bị quên, khác tuyếnHảiĐănghiệncó |
| H05 | Thảo Nguyên Cự Thú | Đồng cỏ, xương cổ; di cư và tranh luận về nguồn sống |
| H06 | Đầm Hắc Liên | Sen tím, đường đá ngập; nguồn nước đổi khác, không mặc định cư dân tà ác |
| H07 | Hoang Mạc Lưu Ly | Cát hổ phách, đá thủy tinh; hệ quả khai thác khoáng và sinh kế |
| H08 | Dãy Núi Hỏa Tâm | Núi lửa, đá đen, rừng chịu tro; can thiệp vào cơ chế thoát nhiệt |
| H09 | Bồn Địa Tinh Sa | Bờ khoáng sáng và vòng đá; dòng năng lượng, không đồng nhất vớiVựcRỗng |
| H10 | Cổ Lục Vân Mộc | Rừng nhiều tầng, thác, công trình rêu; di sản cộng đồng giữ rừng |

Chưa chốt cấp, phe sở hữu, dungeon, độ hiếm, vật phẩm hoặc vai trò sáu hồi cho các vùng này. Khi phát triển phải đối chiếu niên biểu, mười thành, tuyến biển và bí mật tác giả; ảnh không tự bổ sung một vị thần hoặc chủng tộc chơi được.

## 4. Luật hiển thị màu mới

**Có màu:** vùng đã phát hành và nhân vật có quyền mở tương ứng. **Xám:** vùng chưa mở/thiếu điều kiện, vẫn có tên và lý do. **Đấtẩn chưa phát hành:** luônxám trong chế độ tiến trình, kể cả cấp60. Không dùng màu làm tín hiệu duy nhất; có chữ trạng thái và dải cấp.

Bản xem dùng minLevelthamchiếu1/11/21/31/41cho nămPvE, W06là40vàđã cóphe. Mô phỏng giả định quyền truyện tương ứng đã có nếu bậtcheckbox; đủ cấp mà chưa cóquyềntruyện vẫn xám. Tất cả minLevel/unlock là metadata mẫu, không ghi thêm kiểm chặn đi bộ vào game hiện tại. Tới khi triển khai, server quyết định regionAccess; chuyện đi qua thành trung lập, đường cũ và từng điểm dịch vụ vẫn theo luật map, không tự đổi chỉ bằng màu ảnh.

Vùng màu không nghĩa đã mở hếtfog, đã nhậnrương hoặc đăngkýmọiwarp. Giữ discovery/claimscope/checkpoint riêng trong191/193/194. Ví dụ nhân vật10thấyV03cấp21–30xám; nhân vật30cóquyềnV03thìcảhai sector hiệnmàu, nhưngcheckpoint vẫnđăngkýriêng.

Các phần địa lý nền chưa nằm trong một vùng phát hành có thể tiếp tục xám; mười thành lịch sử có trênworldmap khôngđồngnghĩatoànbộthànhđãdựng. “Toànmàu”chỉlà côngcụkiểm concept, khôngmởquyềnthật hoặc thaytrạngtháiH01…H10.

## 5. Tên đất ẩn và giới hạn tiết lộ

Bản xem này là thiết kế nội bộ nên hiện đủtênH01…H10để duyệt. Khi làmplayer-view, tên đềxuất chỉ xuất hiện nếu là tri thức côngkhai/được lời kể cho biết; vùng bí mật thật có thể mang nhãn“Vùngđấtchưaghichép”đến khi học được tên. Chưa tự phát cả10tọađộvàlorebímật cho mọi nhân vật; kiểm quyền thông tin theo194.

Ranhpolygontô màu hiện là minh họa, chưa khớp bờtừngpixel hoặcboundaryserver. Có thể làm ranh mềm và tinhchỉnh theo sectorởbảnvẽsau; không lấy ảnh làmnavmesh. Không thay safezone hoặc quyềncombat bằng việc đổi CSSmàu.

## 6. Kết quả kiểm và bàn giao

Đã xuất bốn ảnh và kiểm bằngChrome/Playwright: cấp10mở1sector, cấp30mở4sector thuộc3vùng, cấp60mở7sector thuộc6vùng khiđủquyền;10đấtẩn vẫnchưapháthành. Kiểm thiếuphekhóaW06, thiếutruyệnkhóacácvùngsau, chọnđiểm/bànphím, khôngtrànngang1440/1024/390. Đây chỉQAprototype, khônggameplay hoặc mobilegameđãhỗtrợ.

[Dữliệuvùng](/design-preview/elarion-map-r002/map-data.json), [prompt](/design-preview/elarion-map-r002/prompt.txt), [manifestnguồn/hash/QA](/design-preview/elarion-map-r002/manifest.json). AssetnềnAT-AST-100009,1536×1024concept; khôngbộtileproduction.

MAP-01 tiếp tục một phần. Tổng525mụcgiữ127hoànthiện/11mộtphần/387chưathiếtkế; không thêm10taskproduction chỉvìcó10vùngdựphòng. Chưa codegame, migration hoặc thiết kếmiền61+.

Nguồn: [bản lõi200](200_MAP_01_BAN_VE_ELARION_CONCEPT_R001.md), [địa lý185](185_MAP_01_DIA_LY_ELARION_VA_MANG_DUONG.md), [phe187](187_MAP_DONG_BO_PHE_BANG_HOI_VA_W06.md), [khám phá191](191_MAP_09_KHAM_PHA_SUONG_MAP_VA_CHIA_SE.md), [lớp194](194_MAP_02_CAU_TRUC_LOP_BAN_DO_VA_QUYEN_THONG_TIN.md).
