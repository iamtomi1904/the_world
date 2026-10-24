# Bình Minh — Cảnh mẫu mỹ thuật Trại–Suối–Cầu r001

**23/10/2026 · Gói A của đặc tả 220.** [Xem cảnh mẫu](/design-preview/v01-art-slice-r001/index.html) · [Đặc tả tile/đạo cụ](220_MAP_V01_BO_TILE_DAO_CU_VA_QUY_TAC_LAP_GHEP.md) · [Greybox](219_MAP_V01_GREYBOX_TUONG_TAC_R001.md).

## 1. Vai trò của cảnh mẫu

Vẽ một lát cắt có công trình dân cư, đường đất, cây, đá, suối cạn và cầu qua sông sâu trong cùng ngôn ngữ pixel. Đây là bước thử mỹ thuật trước tile production. Không phải toàn Map 1 hoặc ảnh chụp gameplay. Cảnh rút gần các chủ đề để đối chiếu vật liệu, không thay tọa độ hay quãng đường trong sơ đồ r001.

Giữ hình pixel 2D theo bảng V4 và tỷ lệ nhân vật theo mẫu được người dùng chọn. Cảm giác cao độ đến từ mặt trước công trình, bờ, thân cây và bóng; đây chưa là bằng chứng render scene 2.5D bằng engine đã đúng. Không lấy chi tiết pixel biểu kiến trong ảnh để khóa độ phân giải native.

## 2. Những quyết định được thử bằng hình

| Yếu tố | Ý đồ thiết kế | Điều còn phải kiểm |
|---|---|---|
| Trại | Gỗ tận dụng, mái/lều vá và dụng cụ đời sống | Cửa không bị đồ trang trí chặn; sáu NPC hub có khoảng tiếp cận |
| Đường | Dải đất đủ rõ, nền cỏ tương phản vừa phải | Bề rộng theo D trong 217 sau khi có sprite/controller thật |
| Suối | Đáy sáng, sỏi, cỏ bờ và trạm lấy mẫu | Vùng cạn phải khớp trigger và có lối ra không kẹt |
| Sông | Lòng nước đậm hơn, bờ đọc được và lối cầu | Không xuất hiện shortcut do người chơi hiểu nhầm đá/trụ |
| Cầu | Mặt đi tách lan can và đầu cầu nối đất | Footprint lối đi độc lập bóng/cung nhịp vẽ |
| Cây | Tán thành cụm pixel, thân/gốc nhận diện được | Tách lớp, che khuất và chuyển động; chưa có animation |
| Mẫu nhân vật | Vai trò so sánh tỷ lệ với cảnh | Không thay bộ NPC hoặc race asset đã chốt |

Nhân vật xuất hiện chỉ là proxy mỹ thuật, không một NPC mới; không có quest nghề, quái bay hoặc nội dung ngoài Map 1. Không thêm chỉ số, phím hoặc công thức từ hình.

## 3. Bàn giao và nguồn

Ảnh dự án: `/design-preview/v01-art-slice-r001/environment-slice__r001.png`. Trang HTML có xem vừa chiều rộng/kích thước ảnh gốc, tải PNG và liên kết Markdown. Không chồng ghim tọa độ giả lên tranh.

Sinh bằng **image_gen tích hợp**, dùng hai ảnh tham chiếu đã có trong dự án: `mmorpg-pixel-v4/styleboard-current-races-r002.png` cho môi trường và `art03-current-tree-v2/style-reference-approved-r006.png` cho dáng nhân vật. Prompt đầy đủ, nguồn ảnh, kích thước và hash lưu trong [provenance.json](/design-preview/v01-art-slice-r001/provenance.json). Không dùng CLI hoặc API key riêng.

## 4. Kiểm ảnh và chuẩn hóa trước khi dùng vào game

Đã kiểm trực quan: có trại mái vá/quầy thuốc, ba mẫu tỷ lệ, suối sáng lộ sỏi, sông xanh đậm và cầu đá. Mật độ cây/hoa còn cao sát đường; chỗ xuống suối chưa đọc rõ vì bờ và đá; guồng nước chưa thể hiện hỏng rõ. Giữ làm concept tham chiếu và ghi ba điểm này phải sửa ở asset nguồn. Cảnh ghép gần các chủ đề nên không chứng minh đường Trại–Suối–Cầu liên tục đi được hoặc tỷ lệ kiến trúc đã nghiệm thu.


Không tự cắt nền tranh thành các ô rồi gọi là tileset. Trước hết lập bảng vật liệu và vẽ lại tile nguồn có cạnh khớp; tách cây/nhà/cầu thành thành phần chủ động. Thông số tile, zoom nguyên và pivot phải ghi sau thử camera, không suy từ tỷ lệ ảnh tổng hợp.

Prefab cây gồm gốc chặn, thân, tán và bóng. Prefab nhà gồm nền, chân tường, thân, mái và vùng cửa. Cầu gồm đầu cầu, mặt đi, lan can, bóng/trụ; va chạm không lấy theo silhouette toàn cầu. Nước sâu/cạn là vùng gameplay riêng và bờ art phải theo vùng đó. Phần nhìn xuyên mái/tán chỉ triển khai khi có scene thật.

## 5. Checklist và bước kế tiếp

- [x] Vẽ một cảnh mẫu và kiểm trực quan, ghi các điểm cần sửa.
- [x] Xác định lát cắt và vai trò mỹ thuật, tách khỏi map gameplay.
- [ ] Chốt tỷ lệ sau đối chiếu hình và trải nghiệm greybox; chưa thay manual playtest.
- [ ] Tạo họ tile cỏ–đất đầu tiên: cạnh, góc lồi/lõm và biến thể.
- [ ] Tạo họ bờ sâu/cạn; kiểm ghép và phân biệt vật liệu không chỉ bằng màu.
- [ ] Tạo mô-đun cầu và cây/nhà tách lớp kèm metadata.
- [ ] Lắp cảnh camera thực; đo pixel rung, che khuất và đường đi ba thân.
- [ ] Chỉ nhân asset ra toàn map khi lát cắt đạt; chưa vẽ V02.

Gói A có ảnh để xem, chưa được tính là nghiệm thu tỷ lệ/camera hoặc tile B. Giữ **525 mục: 128 hoàn thiện / 14 một phần / 383 chưa thiết kế**; MAP-01 và ART-04 không tự chuyển hoàn thiện. Không sửa thủ thành, PostgreSQL, AI hoặc combat.
