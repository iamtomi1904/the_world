# Map 1 — Danh mục sản xuất asset và quy tắc lắp ráp

**23/10/2026 · Thiết kế trước sản xuất.** [Tra cứu/lọc danh mục](/design-preview/v01-asset-plan-r001/index.html) · [Cảnh mẫu 221](221_MAP_V01_CANH_MAU_MY_THUAT_R001.md). Không vẽ mới trong mục này. Pixel 2D trong thế giới 2.5D; không sửa thủ thành hoặc mở truyện Map 2.

> **Làm rõ pipeline tại [223](223_MAP_V01_QUY_CHUAN_P0_VA_CANH_KIEM_TY_LE.md):** nhà/cầu/vách/dốc là geometry đơn giản với texture pixel, actor là sprite 2D dựng đứng. “Prefab/tách lớp” không đồng nghĩa toàn vật là ảnh phẳng. Các mốc texture 32 px vẫn giữ tham chiếu ART-04, chờ scene kiểm.

## 1. Phân tích tổng thể

Không tạo từng viên sỏi riêng và cũng không vẽ nguyên map thành một ảnh nền. Sản xuất các **họ asset**, sau đó phối thành prefab và cụm môi trường. Cây, nhà, cầu chỉ là một phần: còn nền/chuyển tiếp, cao độ, hầm, dấu vết truyện, state tương tác, UI, âm thanh và metadata gameplay.

Danh mục JSON là nguồn cấu trúc; bảng Markdown được sinh từ cùng danh mục bằng `tmp/build-v01-asset-plan.py`. Số họ không phải số PNG, số frame hay tổng ngân sách. Không tính một concept đã có là native hoàn thành.

## 2. Ưu tiên và phụ thuộc

| Mức | Làm khi nào | Điều kiện chuyển bước |
|---|---|---|
| P0 | Lát cắt Trại–Suối–Cầu và bộ thử tỷ lệ ba thân | Chốt native/zoom/camera qua cảnh mẫu, cạnh tile khớp, người không kẹt hoặc bị mái/tán che |
| P1 | Mở rộng toàn Map 1 và nội dung truyện/combat | P0 đạt; đối chiếu roster, NPC và nhiệm vụ nguồn trước vẽ; không nhân file theo suy đoán |
| P2 | Hoàn thiện không khí và tối ưu hiệu ứng | Đường/telegraph đã rõ; có bản nhẹ; đo tải thiết bị thật trước chốt ngân sách |

P0 vẫn chưa được sản xuất native. P2 là thứ tự sản xuất, không bỏ yêu cầu thời tiết/gió đã chốt. Nếu thiếu tài nguyên, giảm biến thể trang trí trước, giữ tín hiệu tương tác và báo đòn.

## 3. Danh mục họ asset


| Mã / nhóm | Nội dung / ưu tiên | Khu / dạng | Thành phần / biến thể | Quy tắc |
|---|---|---|---|---|
| BM-G01 · Nền | Cỏ và đất · **P0** | Dùng chung<br>Tile<br>Texture/decal trên surface; nước thêm lớp trình bày, gameplay độc lập | Nền; mép chuyển; góc lồi/lõm<br>Cỏ sạch/thưa; đất khô; vệt giẫm | Không collision; biến thể seed cố định, không nhiễu mỗi frame |
| BM-G02 · Nền | Đường mòn · **P0** | Dùng chung<br>Tile + decal<br>Texture/decal trên surface; nước thêm lớp trình bày, gameplay độc lập | Lòng đường; mép; dấu bánh xe<br>Thẳng; cong; T; giao bốn; cụt | Giữ bề rộng theo 217; không tự thêm buff chạy |
| BM-G03 · Nền | Ruộng và mương · **P1** | Ruộng<br>Tile + cụm<br>Texture/decal trên surface; nước thêm lớp trình bày, gameplay độc lập | Luống; bờ; đầu mương; đất ẩm<br>Luống trồng/bỏ dở; bờ giẫm | Không biến luống trang trí thành vật cản vô hình |
| BM-G04 · Nền | Đá sân và nền hầm · **P1** | Sân chuông, Phó bản, Kho Vôi<br>Tile<br>Texture/decal trên surface; nước thêm lớp trình bày, gameplay độc lập | Nền; cạnh vật liệu; decal mẻ/rêu<br>Đá sửa mới; đá cổ; đá vôi | Ký hiệu cơ chế tách vết nứt thường |
| BM-H01 · Cao độ | Vách đất và đá · **P1** | Dùng chung<br>Mô-đun<br>Geometry mô-đun + texture pixel; tách thành phần theo 223, không ảnh phẳng toàn vật | Đỉnh; mặt vách; chân; góc<br>Vách thấp/cao; đất/đá | Footprint vách riêng, không đổi collision theo bóng |
| BM-H02 · Cao độ | Dốc và bậc nối tầng · **P1** | Sân chuông, Phó bản<br>Mô-đun<br>Geometry mô-đun + texture pixel; tách thành phần theo 223, không ảnh phẳng toàn vật | Mặt dốc; hai mép; đầu nối<br>Dốc đất; bậc đá | Khai báo surface/link; không chỉ vẽ dốc lên tường |
| BM-W01 · Nước | Sông sâu và bờ · **P0** | Sông, Cầu Sỏi<br>Tile + lớp động<br>Texture/decal trên surface; nước thêm lớp trình bày, gameplay độc lập | Lõi; bờ; góc; bọt; bóng bờ<br>Bờ đất; bờ đá; mép lau | Vùng chặn đi độc lập art; chỉ cầu đã định nghĩa cho qua |
| BM-W02 · Nước | Suối cạn và chỗ xuống · **P0** | Trạm Suối, Cầu Lau<br>Tile + lớp động<br>Texture/decal trên surface; nước thêm lớp trình bày, gameplay độc lập | Đáy sỏi; mặt nước; bờ thoải; gợn chân<br>Đáy sáng; bờ thoải; dòng hẹp | Làm rõ điểm xuống; hệ số chậm lấy cấu hình gameplay |
| BM-V01 · Thực vật | Cây lá rộng · **P0** | Dùng chung<br>Sprite tách lớp<br>Gốc/khối chân + thân/tán sprite dựng hoặc geometry đơn giản; chọn qua scene thử | Gốc/rễ; thân; tán; bóng<br>Dáng thẳng; lệch; tán mở; cây non | Chặn bằng gốc; tán có che khuất và điểm bám gió |
| BM-V02 · Thực vật | Cây khô và dấu khai thác · **P1** | Rừng<br>Sprite + cụm<br>Sprite/decal/mesh nhẹ hoặc media theo vai trò; không bắt mọi vật thành mesh | Gốc chặt; thân đổ; đống củi<br>Gốc cưa; cây khô; thân gãy | Phân biệt khúc chặn với cành trang trí |
| BM-V03 · Thực vật | Bụi, cỏ và hoa · **P0** | Dùng chung<br>Cụm sprite<br>Sprite/decal/mesh nhẹ hoặc media theo vai trò; không bắt mọi vật thành mesh | Cụm thấp; điểm bám gió<br>Cỏ ngắn; bụi; hoa; nấm | Mật độ thấp sát đường; không che mẫu nhiệm vụ |
| BM-V04 · Thực vật | Lau, rễ và lá rụng · **P1** | Trạm Suối, Sông, Hốc Rễ, Rừng<br>Cụm + decal<br>Sprite/decal/mesh nhẹ hoặc media theo vai trò; không bắt mọi vật thành mesh | Lau bờ; rễ; lá nền<br>Lau thấp/cao; rễ bò; lá khô | Không ngụy trang vật cản hoặc lối ra hầm |
| BM-R01 · Đá và vật cản | Sỏi và cụm đá · **P0** | Dùng chung<br>Sprite + cụm<br>Sprite/decal/mesh nhẹ hoặc media theo vai trò; không bắt mọi vật thành mesh | Sỏi decal; đá nhỏ; tảng<br>Đá đất; đá rêu; đá bờ | Sỏi không chặn, tảng có footprint; không thêm đá bước qua sông |
| BM-B01 · Kiến trúc | Nhà tạm và quầy thuốc · **P0** | Trại<br>Prefab tách lớp<br>Geometry mô-đun + texture pixel; tách thành phần theo 223, không ảnh phẳng toàn vật | Móng; tường; cửa; mái vá; quầy<br>Nhà gỗ vá; mái bạt; mặt quầy | Mái che được xử lý riêng; vùng F không bị thùng chặn |
| BM-B02 · Kiến trúc | Bộ nhà dân và lán nghề · **P1** | Nhà Đèn, Rừng, Sân chuông<br>Mô-đun + prefab<br>Geometry mô-đun + texture pixel; tách thành phần theo 223, không ảnh phẳng toàn vật | Tường; góc; cửa sổ; mái; ống khói<br>Nhà Đèn; lán rừng; nhà trực | Không phóng nhà để đổi công năng; kiểm cửa khi lật |
| BM-B03 · Kiến trúc | Hàng rào và cổng · **P1** | Trại, Ruộng, Rừng<br>Mô-đun<br>Geometry mô-đun + texture pixel; tách thành phần theo 223, không ảnh phẳng toàn vật | Cọc; nhịp; góc; đầu; cổng<br>Gỗ vá; dây; cổng mở/đóng | Cổng có state và collider rõ; không cản lối chính |
| BM-B04 · Kiến trúc | Cầu Sỏi và bờ kè · **P0** | Cầu Sỏi<br>Mô-đun tách lớp<br>Geometry mô-đun + texture pixel; tách thành phần theo 223, không ảnh phẳng toàn vật | Đầu cầu; deck; lan can; trụ; bóng<br>Nhịp; đầu Tây/Đông; đoạn sửa | Deck rộng theo greybox; trụ/bóng không quyết định walkable |
| BM-B05 · Kiến trúc | Cầu Lau · **P1** | Cầu Lau<br>Prefab tách lớp<br>Geometry mô-đun + texture pixel; tách thành phần theo 223, không ảnh phẳng toàn vật | Mặt gỗ; đầu cầu; cọc; dây<br>Ván cũ; đoạn vá | Chỉ nối suối intro đã định nghĩa; không thay Cầu Sỏi |
| BM-P01 · Sinh hoạt | Bộ đồ dùng dân cư · **P0** | Trại, Nhà Đèn<br>Sprite + prefab cụm<br>Sprite/decal/mesh nhẹ hoặc media theo vai trò; không bắt mọi vật thành mesh | Bàn; ghế; thùng; chum; bao; giỏ<br>Gỗ cũ; vải vá; gốm | Cụm giữ một vùng lối trống; đồ nhỏ không có collider mặc định |
| BM-P02 · Sinh hoạt | Bếp, đèn và kho · **P1** | Trại, Nhà Đèn<br>Sprite + lớp FX<br>Sprite/decal/mesh nhẹ hoặc media theo vai trò; không bắt mọi vật thành mesh | Bếp; nồi; đèn; dây phơi; giá kho<br>Bếp; đèn tường/treo; giá hàng | Lửa sinh hoạt không tự gây damage; nguồn sáng có ngân sách |
| BM-P03 · Sinh hoạt | Xe kéo và dấu cứu trợ · **P1** | Ruộng, Trại, Cầu Lau<br>Prefab + decal<br>Sprite/decal/mesh nhẹ hoặc media theo vai trò; không bắt mọi vật thành mesh | Xe; bánh; dây; dấu xe<br>Xe dùng được/hỏng; hàng cứu trợ | Xe hỏng chặn phải đọc được; không chặn chặng cứu trợ |
| BM-O01 · Đạo cụ nghề | Trạm lấy mẫu và guồng nước · **P0** | Trạm Suối<br>Prefab tách lớp<br>Sprite/decal/mesh nhẹ hoặc media theo vai trò; không bắt mọi vật thành mesh | Guồng gãy; máng; cọc đo; thùng; bộ mẫu<br>Bánh gãy; dụng cụ lấy mẫu; điểm thao tác | Tách guồng hỏng khỏi guồng quay; mẫu M06 có interaction riêng |
| BM-O02 · Đạo cụ nghề | Bộ nghề và dịch vụ · **P1** | Trại, Rừng<br>Sprite + prefab<br>Sprite/decal/mesh nhẹ hoặc media theo vai trò; không bắt mọi vật thành mesh | Bàn ghi danh; rèn; dụng cụ; quầy hàng<br>Chỉ huy; thợ; thuốc; kho/bếp | Vai trò theo 12 NPC đã chốt; không phát minh dịch vụ mới |
| BM-L01 · Lore | Đồ vật gia đình và đường cũ · **P1** | Nhà Đèn, Rừng, Trại<br>Sprite + decal<br>Sprite/decal/mesh nhẹ hoặc media theo vai trò; không bắt mọi vật thành mesh | Dụng cụ cha; đèn cũ; ký hiệu đường<br>Đồ dùng lại; vết khắc; biển cũ | Theo hồ sơ truyện; không đặt toàn bộ bí mật vào một decal |
| BM-L02 · Lore | Chuông nứt và bệ · **P1** | Sân chuông<br>Prefab tách lớp<br>Geometry mô-đun + texture pixel; tách thành phần theo 223, không ảnh phẳng toàn vật | Chuông; bệ; dây kéo; mảnh sửa<br>Bệ nứt; đá vá; dây chùng | Landmark nhìn xa; mảnh đá không lấn sân giao chiến |
| BM-D01 · Hầm | Cửa và bộ Hốc Rễ · **P1** | Hốc Rễ<br>Mô-đun + prefab<br>Geometry mô-đun + texture pixel; tách thành phần theo 223, không ảnh phẳng toàn vật | Cửa; nền; vách; rễ; chống gỗ<br>Lối vào; khoang đất; rễ lớn | Ba khoang, không boss; cửa có điểm quay về |
| BM-D02 · Hầm | Cửa và bộ Kho Vôi · **P1** | Kho Vôi<br>Mô-đun + prefab<br>Geometry mô-đun + texture pixel; tách thành phần theo 223, không ảnh phẳng toàn vật | Cửa; tường; bao vôi; giàn; rãnh xe<br>Vôi sáng; gỗ cũ; dấu ghi sổ | Ba khoang, không boss; bao không che lối nối |
| BM-D03 · Hầm | Bộ phó bản phong ấn · **P1** | Phó bản<br>Mô-đun + lớp state<br>Geometry mô-đun + texture pixel; tách thành phần theo 223, không ảnh phẳng toàn vật | Sáu phòng; mạch ấn; ổ khóa; hồ sơ P3; cổng<br>Nguyên; mất năng lượng; tương tác xong | Một Oren; cơ chế đọc bằng hình/trạng thái, không chỉ màu |
| BM-I01 · Tương tác | Rương và vật nhiệm vụ · **P1** | Dùng chung<br>Sprite + state<br>Sprite/decal/mesh nhẹ hoặc media theo vai trò; không bắt mọi vật thành mesh | Rương đóng/mở; điểm mẫu; vật truyện<br>Trạng thái chưa dùng/đã dùng/khóa | Giữ 8 rương: 6 ngoài + 2 hầm nhỏ; không nhân loot theo số hình |
| BM-I02 · Tương tác | Biển đường và điểm dịch chuyển · **P1** | Trại, Rừng, Sân chuông<br>Sprite + ký hiệu<br>Sprite/decal/mesh nhẹ hoặc media theo vai trò; không bắt mọi vật thành mesh | Biển; mốc hồi sinh; cửa chuyển cảnh<br>Biển hướng; mốc an toàn; cửa hầm | Ký hiệu gắn điểm đã thiết kế; không tạo waypoint mới |
| BM-C01 · Nhân vật | Ba thân tân binh · **P0** | Dùng chung<br>Sprite sheet + layer đồ<br>Sprite 2D dựng đứng hướng camera, ground neo thế giới | Con Người; Elf; Người Lùn; bóng; mũ/trang bị<br>Idle; đi; tương tác; hurt; death; chiến đấu theo bộ kỹ năng | Dáng trưởng thành; đầu–thân theo mẫu; novice chưa có nghề |
| BM-C02 · Nhân vật | 12 cư dân Bình Minh · **P1** | Trại, Rừng, Ruộng, Trạm Suối, Sân chuông<br>Sprite sheet + portrait<br>Sprite 2D dựng đứng hướng camera, ground neo thế giới | Sprite thế giới; portrait; pose nghề<br>Idle; đi khi lịch cần; làm việc; biểu cảm hội thoại | Tái dùng hồ sơ 214/215; concept không tính là sheet native |
| BM-C03 · Quái | Quái đất và hai tinh anh · **P1** | Rừng, Ruộng, Trạm Suối, Sân chuông<br>Sprite sheet + FX<br>Sprite 2D dựng đứng hướng camera, ground neo thế giới | 18 template đất; hai tinh anh theo roster hiện hành<br>Idle; move; attack; telegraph; hurt; death | Lập lại roster nguồn trước vẽ; dùng chung rig nếu silhouette cho phép |
| BM-C04 · Boss | Boss map và Oren · **P1** | Sân chuông, Phó bản<br>Sprite sheet + FX riêng<br>Sprite 2D dựng đứng hướng camera, ground neo thế giới | Boss ngoài map; Oren; dấu đánh và chết<br>Niệm; đánh; chuyển state; chết/giải quyết theo truyện | Hai danh tính khác nhau; telegraph khớp vùng logic; không quái bay |
| BM-F01 · Môi trường động | Gió, nước và sinh hoạt · **P2** | Dùng chung<br>Loop + lớp FX<br>Sprite/decal/mesh nhẹ hoặc media theo vai trò; không bắt mọi vật thành mesh | Tán; cỏ; gợn; khói; lửa đèn<br>Gió nhẹ; nước; khói bếp | Gốc đứng yên; lệch pha; giảm chuyển động; không chim bay |
| BM-F02 · Môi trường động | Mưa, sương và thời gian · **P2** | Dùng chung<br>FX + lighting profile<br>Sprite/decal/mesh nhẹ hoặc media theo vai trò; không bắt mọi vật thành mesh | Mưa; sương; ánh sáng ngày/đêm<br>Ngày; tối; mưa; giảm FX | Theo hệ thời gian đã thiết kế; không tự đổi collision; chế độ nhẹ |
| BM-F03 · Combat và phản hồi | Báo đòn và trạng thái · **P1** | Dùng chung<br>Sprite sheet + ground decal<br>Sprite/decal/mesh nhẹ hoặc media theo vai trò; không bắt mọi vật thành mesh | Đòn; impact; telegraph; debuff; tương tác; nhặt đồ<br>Theo bộ kỹ năng/hiệu ứng hiện hành, không thêm skill | Không lấy vùng hình làm hitbox; ưu tiên thấy boss telegraph |
| BM-U01 · UI và âm thanh | Icon, chân dung và tín hiệu âm · **P1** | Dùng chung<br>UI atlas + audio riêng<br>Sprite/decal/mesh nhẹ hoặc media theo vai trò; không bắt mọi vật thành mesh | Icon; prompt F; minimap; chân dung; bước chân; nước; chuông<br>Theo vật liệu chân; tương tác; môi trường; chiến đấu | Âm thanh là deliverable riêng, không ảnh; mức âm/giảm FX có tùy chọn |

## 4. Khi nào tách, khi nào gộp

- **Tile:** nền/bờ/vách lặp, có cạnh/góc và quy tắc nối. Vẽ biến thể có chủ đích, không yêu cầu mọi vật liệu nối mọi vật liệu.
- **Sprite nguyên:** vật nhỏ, không đổi state hoặc che khuất quan trọng. Không chia một chiếc ghế thành quá nhiều lớp vô ích.
- **Tách lớp:** mái, tán, phần động, phần cần đổi trang bị hoặc trước/sau actor. Không tách tùy ý từng chi tiết trang trí.
- **Sprite sheet:** animation và state; death/open/broken là asset cần bàn giao, không chỉ một hình idle.
- **Prefab:** ráp thành phần có metadata. Quầy thuốc dùng lại bàn/lọ/biển chung nhưng có bố trí nghề riêng; kho vôi dùng đá/gỗ chung và đạo cụ vôi riêng.
- **Cụm:** nhiều cỏ/sỏi/đồ sinh hoạt đặt cùng nhau để tiết kiệm công; vẫn không lấy bounds của cả cụm làm collider mặc định.

Không lật chữ/biểu tượng có nghĩa; không phóng lớn cây nhỏ thành cây cổ thụ. Thay màu không đủ tạo vật liệu hoặc loài mới. Mỗi khu có dấu hiệu riêng bằng tổ hợp vật liệu, nghề nghiệp và lore, không cần một bộ nền hoàn toàn độc lập.

## 5. Hợp đồng kỹ thuật phải giao cùng ảnh

Mỗi asset cần ID ổn định, phiên bản, file nguồn và PNG/atlas xuất; kích thước native và quy tắc scale; pivot chân hoặc điểm lắp; bounds hình; footprint; surface/layer; socket FX; vùng F nếu có; state/clip và nhịp animation; nhóm tái sử dụng; nguồn/quyền dùng. Prefab thêm danh sách thành phần, vùng che khuất, điểm vào/ra và tên biến thể. Atlas layout được phép đổi; save/quest tham chiếu ID, không tọa độ atlas.

Gameplay quyết định trạng thái và thời điểm damage; animation phát theo state, không tự gây damage mỗi frame. Weather, particle và âm thanh không quyết định quyền tương tác hoặc vật phẩm rơi. Không tạo timer không kiểm soát theo từng instance trang trí.

Footprint không đi theo áo, tán hoặc vệt sáng. Surface cầu/dốc phải được khai báo rõ. Hình open/death/broken cần xử lý collider theo thiết kế gameplay, không suy từ file ảnh. Tỷ lệ native/camera vẫn chờ kiểm cảnh thật; không lấy config greybox làm thông số cuối.

## 6. Đóng gói từng đợt

1. **Khóa tham chiếu:** sửa ý đồ lối xuống suối, mật độ ven đường và guồng hỏng từ 221; duyệt camera/native bằng một mẫu nhỏ.
2. **Nền P0:** cỏ–đất–đường, bờ sâu/cạn, đá trang trí; kiểm cạnh/góc và lặp thành mảng lớn.
3. **Vật thể P0:** cây tách tán, một nhà/quầy thuốc, bộ sinh hoạt, trạm mẫu và cầu. Dùng ba thân để kiểm tỷ lệ; cảnh mới không tự thay NPC concept.
4. **Lắp kiểm:** đúng lớp chân/mái/tán, đường rộng và F; thử ba thân và nhiều actor chồng nhìn. Chưa coi là MMO/server test.
5. **Mở rộng P1:** ruộng/rừng/sân chuông, intro riêng, hai hầm khám phá và phó bản; NPC/quái làm theo roster nguồn.
6. **Hoàn thiện P2:** gió/nước/mưa/âm thanh, giảm hiệu ứng, camera di chuyển; đo thiết bị web và PC thật.

Không dựng cả map từ concept rồi mới phát hiện tỷ lệ sai. Bộ class nghề 15/nhánh 30 là công việc khác; không bắt vẽ toàn bộ trang phục cấp cao trước khi hoàn thành Map 1.

## 7. Checklist nghiệm thu

- [x] Phân họ asset vượt ngoài cây/đá/nhà, có ưu tiên, khu, cách tách và quy tắc.
- [x] Phân biệt tile/sprite/layer/sheet/prefab; có state, UI và âm thanh.
- [x] Xác định dữ liệu kỹ thuật và thứ tự đợt sản xuất.
- [ ] Khóa native/zoom/camera bằng cảnh engine, không suy từ ảnh concept.
- [ ] Vẽ các họ P0 và kiểm cạnh/góc/alpha, pivot, lớp và state.
- [ ] Đi thử thủ công đường cầu/suối/NPC; không dùng graph/BFS thay phản hồi người chơi.
- [ ] Kiểm ba thân, mũ/trang bị và nhiều actor; không mất telegraph sau tán/mái.
- [ ] Kiểm roster và quyền lore/loot từng vật trước mở rộng P1.
- [ ] Kiểm tải bộ nhớ/atlas/âm thanh và bản FX nhẹ trên web/PC; chưa có cam kết FPS.

Tất cả hàng hiện là **chưa sản xuất native**. Ảnh concept 215/221 vẫn giữ trạng thái concept riêng. Giữ **525 mục: 128 hoàn thiện / 14 một phần / 383 chưa thiết kế**; danh mục con này không tự tạo thêm task tổng hoặc đánh hoàn thiện ART/MAP. Không thay combat, database hay thủ thành. Bước sản xuất tiếp theo: thử native/camera rồi họ cỏ–đất–đường P0.
