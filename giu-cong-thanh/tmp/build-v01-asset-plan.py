from pathlib import Path
import json

root=Path('.')
out=root/'public/design-preview/v01-asset-plan-r001'
out.mkdir(exist_ok=True)
rows=[]
def add(code,group,name,priority,areas,form,parts,rule,variants):
    rows.append(dict(id='BM-'+code,group=group,name=name,priority=priority,areas=areas.split('|'),form=form,parts=parts,rule=rule,variants=variants,status='Chưa sản xuất native'))

add('G01','Nền','Cỏ và đất','P0','Dùng chung','Tile','Nền; mép chuyển; góc lồi/lõm','Không collision; biến thể seed cố định, không nhiễu mỗi frame','Cỏ sạch/thưa; đất khô; vệt giẫm')
add('G02','Nền','Đường mòn','P0','Dùng chung','Tile + decal','Lòng đường; mép; dấu bánh xe','Giữ bề rộng theo 217; không tự thêm buff chạy','Thẳng; cong; T; giao bốn; cụt')
add('G03','Nền','Ruộng và mương','P1','Ruộng','Tile + cụm','Luống; bờ; đầu mương; đất ẩm','Không biến luống trang trí thành vật cản vô hình','Luống trồng/bỏ dở; bờ giẫm')
add('G04','Nền','Đá sân và nền hầm','P1','Sân chuông|Phó bản|Kho Vôi','Tile','Nền; cạnh vật liệu; decal mẻ/rêu','Ký hiệu cơ chế tách vết nứt thường','Đá sửa mới; đá cổ; đá vôi')
add('H01','Cao độ','Vách đất và đá','P1','Dùng chung','Mô-đun','Đỉnh; mặt vách; chân; góc','Footprint vách riêng, không đổi collision theo bóng','Vách thấp/cao; đất/đá')
add('H02','Cao độ','Dốc và bậc nối tầng','P1','Sân chuông|Phó bản','Mô-đun','Mặt dốc; hai mép; đầu nối','Khai báo surface/link; không chỉ vẽ dốc lên tường','Dốc đất; bậc đá')
add('W01','Nước','Sông sâu và bờ','P0','Sông|Cầu Sỏi','Tile + lớp động','Lõi; bờ; góc; bọt; bóng bờ','Vùng chặn đi độc lập art; chỉ cầu đã định nghĩa cho qua','Bờ đất; bờ đá; mép lau')
add('W02','Nước','Suối cạn và chỗ xuống','P0','Trạm Suối|Cầu Lau','Tile + lớp động','Đáy sỏi; mặt nước; bờ thoải; gợn chân','Làm rõ điểm xuống; hệ số chậm lấy cấu hình gameplay','Đáy sáng; bờ thoải; dòng hẹp')
add('V01','Thực vật','Cây lá rộng','P0','Dùng chung','Sprite tách lớp','Gốc/rễ; thân; tán; bóng','Chặn bằng gốc; tán có che khuất và điểm bám gió','Dáng thẳng; lệch; tán mở; cây non')
add('V02','Thực vật','Cây khô và dấu khai thác','P1','Rừng','Sprite + cụm','Gốc chặt; thân đổ; đống củi','Phân biệt khúc chặn với cành trang trí','Gốc cưa; cây khô; thân gãy')
add('V03','Thực vật','Bụi, cỏ và hoa','P0','Dùng chung','Cụm sprite','Cụm thấp; điểm bám gió','Mật độ thấp sát đường; không che mẫu nhiệm vụ','Cỏ ngắn; bụi; hoa; nấm')
add('V04','Thực vật','Lau, rễ và lá rụng','P1','Trạm Suối|Sông|Hốc Rễ|Rừng','Cụm + decal','Lau bờ; rễ; lá nền','Không ngụy trang vật cản hoặc lối ra hầm','Lau thấp/cao; rễ bò; lá khô')
add('R01','Đá và vật cản','Sỏi và cụm đá','P0','Dùng chung','Sprite + cụm','Sỏi decal; đá nhỏ; tảng','Sỏi không chặn, tảng có footprint; không thêm đá bước qua sông','Đá đất; đá rêu; đá bờ')
add('B01','Kiến trúc','Nhà tạm và quầy thuốc','P0','Trại','Prefab tách lớp','Móng; tường; cửa; mái vá; quầy','Mái che được xử lý riêng; vùng F không bị thùng chặn','Nhà gỗ vá; mái bạt; mặt quầy')
add('B02','Kiến trúc','Bộ nhà dân và lán nghề','P1','Nhà Đèn|Rừng|Sân chuông','Mô-đun + prefab','Tường; góc; cửa sổ; mái; ống khói','Không phóng nhà để đổi công năng; kiểm cửa khi lật','Nhà Đèn; lán rừng; nhà trực')
add('B03','Kiến trúc','Hàng rào và cổng','P1','Trại|Ruộng|Rừng','Mô-đun','Cọc; nhịp; góc; đầu; cổng','Cổng có state và collider rõ; không cản lối chính','Gỗ vá; dây; cổng mở/đóng')
add('B04','Kiến trúc','Cầu Sỏi và bờ kè','P0','Cầu Sỏi','Mô-đun tách lớp','Đầu cầu; deck; lan can; trụ; bóng','Deck rộng theo greybox; trụ/bóng không quyết định walkable','Nhịp; đầu Tây/Đông; đoạn sửa')
add('B05','Kiến trúc','Cầu Lau','P1','Cầu Lau','Prefab tách lớp','Mặt gỗ; đầu cầu; cọc; dây','Chỉ nối suối intro đã định nghĩa; không thay Cầu Sỏi','Ván cũ; đoạn vá')
add('P01','Sinh hoạt','Bộ đồ dùng dân cư','P0','Trại|Nhà Đèn','Sprite + prefab cụm','Bàn; ghế; thùng; chum; bao; giỏ','Cụm giữ một vùng lối trống; đồ nhỏ không có collider mặc định','Gỗ cũ; vải vá; gốm')
add('P02','Sinh hoạt','Bếp, đèn và kho','P1','Trại|Nhà Đèn','Sprite + lớp FX','Bếp; nồi; đèn; dây phơi; giá kho','Lửa sinh hoạt không tự gây damage; nguồn sáng có ngân sách','Bếp; đèn tường/treo; giá hàng')
add('P03','Sinh hoạt','Xe kéo và dấu cứu trợ','P1','Ruộng|Trại|Cầu Lau','Prefab + decal','Xe; bánh; dây; dấu xe','Xe hỏng chặn phải đọc được; không chặn chặng cứu trợ','Xe dùng được/hỏng; hàng cứu trợ')
add('O01','Đạo cụ nghề','Trạm lấy mẫu và guồng nước','P0','Trạm Suối','Prefab tách lớp','Guồng gãy; máng; cọc đo; thùng; bộ mẫu','Tách guồng hỏng khỏi guồng quay; mẫu M06 có interaction riêng','Bánh gãy; dụng cụ lấy mẫu; điểm thao tác')
add('O02','Đạo cụ nghề','Bộ nghề và dịch vụ','P1','Trại|Rừng','Sprite + prefab','Bàn ghi danh; rèn; dụng cụ; quầy hàng','Vai trò theo 12 NPC đã chốt; không phát minh dịch vụ mới','Chỉ huy; thợ; thuốc; kho/bếp')
add('L01','Lore','Đồ vật gia đình và đường cũ','P1','Nhà Đèn|Rừng|Trại','Sprite + decal','Dụng cụ cha; đèn cũ; ký hiệu đường','Theo hồ sơ truyện; không đặt toàn bộ bí mật vào một decal','Đồ dùng lại; vết khắc; biển cũ')
add('L02','Lore','Chuông nứt và bệ','P1','Sân chuông','Prefab tách lớp','Chuông; bệ; dây kéo; mảnh sửa','Landmark nhìn xa; mảnh đá không lấn sân giao chiến','Bệ nứt; đá vá; dây chùng')
add('D01','Hầm','Cửa và bộ Hốc Rễ','P1','Hốc Rễ','Mô-đun + prefab','Cửa; nền; vách; rễ; chống gỗ','Ba khoang, không boss; cửa có điểm quay về','Lối vào; khoang đất; rễ lớn')
add('D02','Hầm','Cửa và bộ Kho Vôi','P1','Kho Vôi','Mô-đun + prefab','Cửa; tường; bao vôi; giàn; rãnh xe','Ba khoang, không boss; bao không che lối nối','Vôi sáng; gỗ cũ; dấu ghi sổ')
add('D03','Hầm','Bộ phó bản phong ấn','P1','Phó bản','Mô-đun + lớp state','Sáu phòng; mạch ấn; ổ khóa; hồ sơ P3; cổng','Một Oren; cơ chế đọc bằng hình/trạng thái, không chỉ màu','Nguyên; mất năng lượng; tương tác xong')
add('I01','Tương tác','Rương và vật nhiệm vụ','P1','Dùng chung','Sprite + state','Rương đóng/mở; điểm mẫu; vật truyện','Giữ 8 rương: 6 ngoài + 2 hầm nhỏ; không nhân loot theo số hình','Trạng thái chưa dùng/đã dùng/khóa')
add('I02','Tương tác','Biển đường và điểm dịch chuyển','P1','Trại|Rừng|Sân chuông','Sprite + ký hiệu','Biển; mốc hồi sinh; cửa chuyển cảnh','Ký hiệu gắn điểm đã thiết kế; không tạo waypoint mới','Biển hướng; mốc an toàn; cửa hầm')
add('C01','Nhân vật','Ba thân tân binh','P0','Dùng chung','Sprite sheet + layer đồ','Con Người; Elf; Người Lùn; bóng; mũ/trang bị','Dáng trưởng thành; đầu–thân theo mẫu; novice chưa có nghề','Idle; đi; tương tác; hurt; death; chiến đấu theo bộ kỹ năng')
add('C02','Nhân vật','12 cư dân Bình Minh','P1','Trại|Rừng|Ruộng|Trạm Suối|Sân chuông','Sprite sheet + portrait','Sprite thế giới; portrait; pose nghề','Tái dùng hồ sơ 214/215; concept không tính là sheet native','Idle; đi khi lịch cần; làm việc; biểu cảm hội thoại')
add('C03','Quái','Quái đất và hai tinh anh','P1','Rừng|Ruộng|Trạm Suối|Sân chuông','Sprite sheet + FX','18 template đất; hai tinh anh theo roster hiện hành','Lập lại roster nguồn trước vẽ; dùng chung rig nếu silhouette cho phép','Idle; move; attack; telegraph; hurt; death')
add('C04','Boss','Boss map và Oren','P1','Sân chuông|Phó bản','Sprite sheet + FX riêng','Boss ngoài map; Oren; dấu đánh và chết','Hai danh tính khác nhau; telegraph khớp vùng logic; không quái bay','Niệm; đánh; chuyển state; chết/giải quyết theo truyện')
add('F01','Môi trường động','Gió, nước và sinh hoạt','P2','Dùng chung','Loop + lớp FX','Tán; cỏ; gợn; khói; lửa đèn','Gốc đứng yên; lệch pha; giảm chuyển động; không chim bay','Gió nhẹ; nước; khói bếp')
add('F02','Môi trường động','Mưa, sương và thời gian','P2','Dùng chung','FX + lighting profile','Mưa; sương; ánh sáng ngày/đêm','Theo hệ thời gian đã thiết kế; không tự đổi collision; chế độ nhẹ','Ngày; tối; mưa; giảm FX')
add('F03','Combat và phản hồi','Báo đòn và trạng thái','P1','Dùng chung','Sprite sheet + ground decal','Đòn; impact; telegraph; debuff; tương tác; nhặt đồ','Không lấy vùng hình làm hitbox; ưu tiên thấy boss telegraph','Theo bộ kỹ năng/hiệu ứng hiện hành, không thêm skill')
add('U01','UI và âm thanh','Icon, chân dung và tín hiệu âm','P1','Dùng chung','UI atlas + audio riêng','Icon; prompt F; minimap; chân dung; bước chân; nước; chuông','Âm thanh là deliverable riêng, không ảnh; mức âm/giảm FX có tùy chọn','Theo vật liệu chân; tương tác; môi trường; chiến đấu')

for r in rows:
    if r['id'] in ['BM-H01','BM-H02','BM-B01','BM-B02','BM-B03','BM-B04','BM-B05','BM-D01','BM-D02','BM-D03','BM-L02']:
        r['pipeline']='Geometry mô-đun + texture pixel; tách thành phần theo 223, không ảnh phẳng toàn vật'
    elif r['group'] in ['Nền','Nước']:
        r['pipeline']='Texture/decal trên surface; nước thêm lớp trình bày, gameplay độc lập'
    elif r['id']=='BM-V01':
        r['pipeline']='Gốc/khối chân + thân/tán sprite dựng hoặc geometry đơn giản; chọn qua scene thử'
    elif r['group'] in ['Nhân vật','Quái','Boss']:
        r['pipeline']='Sprite 2D dựng đứng hướng camera, ground neo thế giới'
    else:
        r['pipeline']='Sprite/decal/mesh nhẹ hoặc media theo vai trò; không bắt mọi vật thành mesh'

data={'version' :'r001','date':'2026-10-23','scope':'Map 1 cấp 1–10; danh mục họ asset, không phải số sprite/file đã sản xuất','rows':rows}
(out/'catalog.json').write_text(json.dumps(data,ensure_ascii=False,indent=2),encoding='utf-8')
head='''# Map 1 — Danh mục sản xuất asset và quy tắc lắp ráp

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

'''
lines=[head,'| Mã / nhóm | Nội dung / ưu tiên | Khu / dạng | Thành phần / biến thể | Quy tắc |','|---|---|---|---|---|']
for r in rows:
    lines.append(f"| {r['id']} · {r['group']} | {r['name']} · **{r['priority']}** | {', '.join(r['areas'])}<br>{r['form']}<br>{r['pipeline']} | {r['parts']}<br>{r['variants']} | {r['rule']} |")
tail='''

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
'''
(root/'design/mmorpg-design-checklist-v1/222_MAP_V01_DANH_MUC_SAN_XUAT_ASSET.md').write_text('\n'.join(lines)+tail,encoding='utf-8')
print(f'{len(rows)} asset families; JSON and Markdown generated')
