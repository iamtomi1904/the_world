> **Đã vẽ tân binh · 23/10/2026:** [Bảng227](227_MAP_V01_BA_TAN_BINH_BON_HUONG_CONCEPT_R001.md) · [Xem12hình](/design-preview/v01-novices-r001/index.html). Ba race/bốn hướng concept; cần sửa dây/túi, chưa mũ/pose bước/native hoặc tích hợp scene. Giữ525=128/14/383.

# Map 1 — Bộ mẫu chốt hình và lát cắt P0

**23/10/2026 · Brief trực tiếp cho bước vẽ và lắp cảnh.** Tiếp nhận nhận xét [225](225_MAP_V01_DOI_CHIEU_GAME_VA_DANH_GIA_P0.md), không mở thêm hệ thống hoặc vùng đất. [Scene kỹ thuật hiện có](/design-preview/v01-p0-scene-r001/index.html) vẫn là proxy.

## 1. Kết quả cần đạt ở đợt tiếp theo

Một đoạn cảnh nhỏ có **nhân vật đúng style + texture nền thật + nhà/cây/cầu đại diện**, đủ xem ở camera gameplay. Không cần toàn Map 1, đầy đủ animation chiến đấu hoặc tất cả trang phục để quyết định tỷ lệ. Cảnh phải cho thấy nhân vật có mũ, chân chạm nền, hướng di chuyển đọc được và quầy/cầu dễ tìm khi tắt nhãn.

Giữ fantasy pixel dáng trưởng thành theo mẫu r006, chi tiết vừa. Môi trường geometry đơn giản, texture pixel; nhân vật sprite dựng đứng hướng camera. Tham chiếu Octopath/Star Ocean ở225 là cơ sở hòa hợp nhân vật–cảnh, không lý do đổi sang hình hiện thực hoặc tăng blur/bloom.

## 2. Brief vẽ nhân vật mẫu

| Mã gói | Nội dung cần vẽ | Vai trò kiểm | Giới hạn |
|---|---|---|---|
| P0-CHAR-H | Tân binh Con Người, áo vải sáng, áo khoác da nâu ngắn, quần tối, giày; túi/dây lưng gọn | Nhân vật chủ kiểm trên nền cỏ, nhà và cầu | Không giáp nghề15/nhánh30; không màu phe hoặc biểu tượng người được chọn |
| P0-CHAR-E | Tân binh Elf cùng cấp đồ, dáng thanh, tai đọc được; bố cục tóc không che silhouette | So tỷ lệ với cửa/cây và độ rõ chủng tộc | Không biến Elf thành Cung Thủ hoặc nghề mặc định |
| P0-CHAR-D | Tân binh Người Lùn cùng cấp đồ, thân chắc, chân ngắn hợp lý, đầu không phóng kiểu chibi | So độ rộng hình với lối và mái/tán | Không trang bị nỏ/rìu nghề chỉ vì là Người Lùn |
| P0-HEAD | Một mũ vải tân binh tháo/đội được cho ba thân | Kiểm head socket, tóc và khung ảnh cực trị | Không tăng collider hoặc chiều cao logic vì mũ |
| P0-HAND | Một đạo cụ tay trung tính đã được lore cho phép: túi dụng cụ cầm tay | Kiểm vùng tay và silhouette trước/sau | Không tạo vũ khí hoặc skill gameplay mới |

Màu áo và vật liệu trên là đề xuất art cho fixture, không khóa ngoại hình người chơi hoặc đồ thưởng. Không đặt danh tính/cốt truyện riêng cho mẫu đứng. Có thể chọn kiểu tóc/giới tính trình bày đại diện khi vẽ; không suy rằng các lựa chọn tạo nhân vật khác bị loại.

**Phạm vi hình tối thiểu:** ba thân × bốn hướng Idle =12 hình; cùng mũ tạo lớp riêng tương thích từng thân/hướng. Một pose bước rõ cho mỗi hướng của Con Người thêm4hình để kiểm chân và độ rộng, chưa animation đi hoàn chỉnh. Đạo cụ tay có pose tương ứng cần kiểm sau khi body duyệt. Đây là số hình tham chiếu, không số frame animation production.

Giữ body Con Người khoảng40px và canvas96×96/ground(48,80) làm điểm xuất phát theo35. Elf/Lùn theo tỷ lệ ART hiện hành và mẫu đã chọn; không tùy đặt chiều cao mới chỉ để đủ bộ. Nếu tỷ lệ đổi sau thử camera, cập nhật metadata và cả ba thân trước nhân animation. Không scale một ảnh Người thành Elf/Lùn.

## 3. Brief bộ nền đầu tiên

| Họ | Nét và chất liệu | Thành phần kiểm | Điều không làm |
|---|---|---|---|
| Cỏ nền | Mảng xanh ô-liu/vàng xanh dịu, điểm tối thành cụm, có ô yên tĩnh | Nền sạch, biến thể thưa, góc nối đất | Không phủ hoa trắng hoặc nhiễu từng pixel lên mọi ô |
| Đất đường | Đất nâu vàng vừa sáng, mép bị giẫm không đều nhưng đọc được | Thẳng, góc, T, cụt; nối vùng đất rộng | Không viền đen kín khiến đường như sticker |
| Mép chuyển | Cỏ lấn đất vừa phải; bóng nhỏ nhất quán | Góc lồi/lõm, hốc cỏ, giao ba vật liệu | Không crop tranh221 thành ô rồi che lỗi bằng bụi |
| Đá cầu thử | Mảng đá xám ấm, mạch đủ lớn để đọc cùng pixel actor | Deck, đầu nối dốc, rail; texture khác mặt đứng | Không mạch nhỏ li ti hoặc đá bóng hiện thực |
| Bờ nước thử | Bờ đất lộ mặt, sỏi cạn, lòng sâu xanh đậm | Một đoạn xuống cạn nhìn rõ và bờ sâu không mời gọi bước qua | Không thêm đá bước chân/đường tắt ngoài thiết kế |

Texture tác giả32×32 là tham chiếu; thử sampler và mật độ thế giới trước khóa. Bộ cỏ–đất dùng một topology nhất quán theo223/35; nếu chọn blob47, hoàn tất đủ trường hợp của cặp đó rồi kiểm lặp, không chỉ vẽ vài ô đẹp. Không mở đồng thời băng/lava/tuyết trong đợt này.

## 4. Lát cắt liên tục cần ráp

**Sân quầy thuốc → lối đất ven cây → trạm lấy mẫu/bờ cạn → đầu cầu → mặt cầu → bờ đối diện.** Đây là fixture kiểm mỹ thuật rút gọn; không thay tọa độ, quãng đường, thứ tự nhiệm vụ hoặc NPC trong sơ đồ Map1.

| Đoạn | Bố trí nhìn | Tương tác/không gian cần kiểm |
|---|---|---|
| A · Quầy | Một nhà tạm có mái, bàn thuốc, thùng sát tường; sân chính5D, khoảng F3D×3D | Nhận ra nơi dịch vụ từ hình; đi trước/sau mái; chỉ marker F, chưa shop kinh tế |
| B · Đường cây | Một cây đầy tán, một cụm bụi thấp; vệt giẫm hướng tới trạm | Tán giảm che khi cần; gốc chặn rõ; không cần ghim chỉ đường liên tục |
| C · Trạm suối | Guồng gãy rõ, cọc đo, thùng mẫu; bờ thoải nhìn thấy đáy | Có thể xuống/lên cạn; sâu chặn; người không chìm chân do thiếu offset/bóng |
| D · Cầu | Mố/deck/rail cùng một vật liệu; lối đi4D và hai đầu thoáng | Surface nối đúng; bóng chân trên deck; hình rail không làm hiểu nhầm chỗ bước qua |
| E · Bờ bên kia | Khoảng đất trống, biển/mốc và một vật cao để kiểm nhìn lại | Nhìn ngược vẫn hiểu đường trở về; không thêm nhiệm vụ hoặc cửa sang Map2 |

Giữ footprint từ mẫu đã kiểm làm điểm xuất phát, không bê silhouette tranh concept sang collider. Bề rộng theo D kế thừa217; chưa đủ controller/sprite production thì vẫn là tiêu chí thử. Không biến lane cần thiết thành chỗ trưng bày đồ trang trí.

## 5. Khung đối chiếu camera và UI

So35°/45°/55° trên cùng lát cắt, actor/vật thể không đổi kích thước thế giới. Ghi riêng zoom/framing: một lượt cùng góc khung và scale cố định để thấy hiệu ứng góc; một lượt framing gameplay được ghi cấu hình để so khả năng nhìn. Không tuyên bố45°thắng trước khi có hình đầy đủ.

Thêm **khung HUD mẫu có13ô:1–9,Q,E,R,Z** ở dưới giữa theo thiết kế đã chốt; ô nhận skill hoặc vật phẩm tiêu thụ khi triển khai thật. Tại đây chỉ kiểm phần màn bị chiếm, không tạo hotbar hoạt động hoặc đổi phím. Không đặt lại QERZ thành QWER, không để cảnh đẹp chỉ khi ẩn hết HUD.

Kiểm ở màn web desktop thông dụng và cửa sổ thu hẹp; không suy chất lượng PC client từ một ảnh Chrome. Thử render tham chiếu960×540 và phương án fit cửa sổ; ghi kích thước buffer, CSS, DPR, vùng viền và scale. Chưa có benchmark nên không chốt cấu hình máy tối thiểu hoặc FPS.

## 6. Tiêu chí chọn và trường hợp loại

| Tiêu chí | Cách đánh giá | Không chấp nhận |
|---|---|---|
| Nhân vật | Nhìn hướng mặt/đi, khác biệt ba thân, mũ và tay ở cỡ chơi bình thường | Phải phóng ảnh riêng mới đọc được; chân/đầu bị cắt |
| Nền | Nhân vật nổi vừa đủ, đường rõ khi tắt nhãn, mép không hở | Nền và áo cùng sắc chìm hoàn toàn, texture gây rung/nhiễu |
| Cao độ | Đầu cầu/dốc chỉ lối, chân/bóng đúng bề mặt | Actor trôi nổi, hình cho đi nhưng logic chặn hoặc ngược lại |
| Che khuất | Actor, vùng tương tác và báo vùng mẫu còn nhận diện | Fade cả rừng hoặc biến tường thành không chặn |
| HUD | Hotbar không che chân/telegraph chính trong framing thực | Duyệt bằng ảnh đã crop bỏ UI; chữ Việt quá nhỏ |
| Lặp | Mảng cỏ/đất lớn không lộ đường nối hoặc nhịp chéo máy móc | Hình đẹp từng ô nhưng ghép mảng thành ô bàn cờ rõ |

Chọn góc/zoom bằng bảng nhận xét và ảnh cùng fixture; không cộng điểm đẹp để bỏ qua lỗi chặn như sai tầng, cắt sprite hoặc mất telegraph. Tín hiệu đỏ/đen/vàng trong fixture chỉ là đồ kiểm, không bảng màu nguyên tố hoặc skill chính thức mới.

## 7. Hồ sơ bàn giao của đợt mẫu

- Nguồn vẽ layer; PNG không matte; frame/sourceSize/trim/ground/socket; ảnh chụp ba thân trên cỏ/nhà/cầu.
- Nguồn texture và topology, mảng kiểm ghép; không chỉ screenshot cảnh đẹp.
- Prefab/geometry vật mẫu có pivot, footprint, surface, UV, occluder và phiên bản.
- Camera/render profile và ảnh có HUD mẫu cho ba góc; clip đi qua cầu, sau mái/tán.
- Nhật ký lỗi và quyết định: giữ/sửa, lý do, ảnh đối chiếu; provenance/quyền dùng cho nguồn hình.

Mỗi phần phân biệt “đã vẽ concept / đã chuẩn hóa native / đã lắp scene / đã kiểm”. Không bỏ qua chuẩn hóa chỉ vì hình sinh tự động trông đẹp. Không cần tạo screenshot giả thay bằng chứng chạy scene.

## 8. Checklist và bước kế tiếp

- [x] Chốt bộ hình đại diện, không làm toàn roster trước khi chọn tỷ lệ.
- [x] Chốt lát cắt liên tục, khung camera/HUD và điều kiện loại.
- [x] Định nghĩa nguồn bàn giao, metadata và trạng thái nghiệm thu.
- [ ] **Bước vẽ tiếp theo:** bảng ba tân binh bốn hướng, lớp mũ và pose bước tham chiếu.
- [ ] Chuẩn hóa body/frame/pivot, đưa vào scene để chọn framing sơ bộ.
- [ ] Vẽ bộ nền cỏ–đất–đường, sau đó vật liệu cầu/bờ thử và ráp lát cắt.
- [ ] Ghi bằng chứng camera/tiếp đất/occlusion, đo khi có fixture thật; chưa G1–G5đạt.

Hồ sơ này là brief thiết kế, **chưa vẽ hoặc sửa scene mới**. Giữ525=128hoàn thiện/14một phần/383chưa thiết kế. Không đổi class, combat, tiền tệ, database hoặc thủ thành. Không viết thêm cốt truyện sau Map1.
