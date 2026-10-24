from pathlib import Path
import re
d=Path('design/mmorpg-design-checklist-v1');fn='183_MOB_01_DANH_MUC_90_MAU_QUAI.md'
groups=[('V01','Bình Minh',[
('Sói bìa rừng','Sói','Áp sát theo cặp, cắn rồi lùi'),('Lợn rừng gai','Thú','Lấy đà húc thẳng có báo trước'),('Nhện đồng cỏ','Côn trùng','Giăng sợi thấp trên lối hẹp'),('Bọ giáp đất','Côn trùng','Thủ mặt trước, hở khi quay'),('Ong đất bò','Côn trùng','Không cánh; chạy khỏi tổ rồi đâm ngòi'),('Chuột kho lớn','Thú','Cướp mồi và chạy về khe'),('Dơi cụt cánh','Thú','Bò bằng chi trước trong hầm, không bay'),('Rắn cỏ','Xà','Cuộn thân báo hiệu trước cú mổ'),('Ếch bờ suối','Lưỡng cư','Phóng lưỡi từ bãi cạn, không nhảy qua người'),('Cua sỏi','Giáp xác','Kẹp ngang, vỏ mở sau đòn'),('Slime giọt suối','Slime','Trượt sát đất, kéo giãn trước va chạm'),('Slime nhựa cây','Slime','Dính tại chỗ khi bị đánh rồi bật thân'),('Rễ gai thức tỉnh','Thực vật','Rễ cố định, quất trong phạm vi đọc rõ'),('Nấm phấn đất','Nấm','Phồng mũ trước khi nhả phấn thấp'),('Gỗ mục cựa mình','Thực vật','Chậm, tay cành có nhịp thu dài'),('Mảnh canh đá','Tạo vật','Cánh tay đá đập hẹp trước thân'),('Giáp rỗng giữ ấn','Tạo vật','Khiên cũ đỡ rồi phản công chậm'),('Xác thú nhiễm ấn','Tha hóa','Đi khập khiễng, phát tín hiệu trước lao ngắn')]),
('V02','Merrowen',[
('Sói bãi bồi','Sói','Rình sau lau, vòng sườn'),('Lợn bùn','Thú','Đẩy bùn trước húc, thân nặng'),('Rắn lau','Xà','Ẩn thân trong bờ cỏ, mổ xa hơn rắn cỏ'),('Trăn bến cũ','Xà','Vòng thân chặn một cạnh giao tranh'),('Cá sấu bãi cạn','Bò sát','Quật đuôi ngang sau cú cắn'),('Kỳ đà bờ kho','Bò sát','Bò men tường rồi lao ra'),('Cua khiên bùn','Giáp xác','Che bằng một càng, xoay chậm'),('Tôm càng mắc cạn','Giáp xác','Bật lùi sát đất rồi kẹp'),('Ếch túi nước','Lưỡng cư','Phồng túi họng, phun tia ngắn'),('Đỉa bãi triều','Giun','Bò bám đất, bám rồi bị hất khi phản đòn'),('Slime phù sa','Slime','Để vệt bùn báo đường đã đi'),('Bọ nước bò','Côn trùng','Chạy trên vùng cạn, dừng dựng vỏ'),('Kẻ cướp móc hàng','Người thù địch','Móc kéo có báo trước; kiểm quyền CC'),('Nỏ thủ kho lậu','Người thù địch','Ngắm dài, nạp lại sau bắn'),('Kẻ mang bình khói','Người thù địch','Ném vào điểm đã báo, không che telegraph'),('Lính gác di vật','Người thù địch','Che đồng bọn bằng khiên hẹp'),('Thủy tượng đứt neo','Tạo vật','Kéo xích sát đất, đứng trên bờ'),('Xác lính bến đò','Undead','Đâm giáo rỉ từ thế chống thân')]),
('V03','Sylvaris',[
('Sói rễ cổ','Sói','Theo dấu vòng qua cây, gọi nhóm sẵn có'),('Heo rừng rêu','Thú','Cào đất báo húc vòng cung'),('Nhện tơ lá','Côn trùng','Nối hai gốc cây bằng vùng tơ nhìn thấy'),('Bọ sừng gỗ','Côn trùng','Nâng sừng hất trước mặt có báo'),('Bọ ngựa vỏ cây','Côn trùng','Hai nhát càng có khoảng né giữa'),('Rắn dây leo','Xà','Bám thấp quanh rễ, quật thân'),('Trăn hoa độc','Xà','Phun hình quạt hẹp rồi nằm hở'),('Nấm chuông rừng','Nấm','Rung mũ cảnh báo đồng loại gần'),('Nấm bào tử mục','Nấm','Nhả vùng phấn tại chỗ, không phủ cả bãi'),('Slime mật rừng','Slime','Gom nhựa làm vỏ tạm có dấu rõ'),('Cây non cuồng rễ','Thực vật','Bước bằng rễ, tay cành chậm'),('Bụi gai săn mồi','Thực vật','Tĩnh tại, kéo cành về sau khi quất'),('Linh mộc lạc nhịp','Linh thể','Nén thân trước khi đẩy sóng sát đất'),('Tượng tuần rừng','Tạo vật','Tuần theo lối cổ, nện trượng'),('Tiều phu săn di tích','Người thù địch','Rìu dài, thu đòn chậm'),('Thợ săn bẫy sắt','Người thù địch','Đặt bẫy có dấu và đường tránh'),('Harpy trinh sát tán cao','Harpy bay','Lượn có bóng, báo trước khi sà'),('Ấu long rừng','Rồng mặt đất','Chạy bốn chân, thở hơi theo đường ngắn')]),
('V04','Nocthollow',[
('Sói sương','Sói','Rình theo bờ đá, vẫn hiện silhouette'),('Dê đá hung dữ','Thú','Dậm chân rồi húc, không rơi khỏi tầng'),('Nhện hang lạnh','Côn trùng','Bò vách trang trí nhưng chỉ đánh trên tầng hợp lệ'),('Bọ tinh thể','Côn trùng','Vỏ góc cạnh, phát sáng khe trước nổ mảnh'),('Rắn sườn lạnh','Xà','Lướt đất rồi mổ theo hai nhịp'),('Slime muối lạnh','Slime','Co lại trước tỏa vòng thấp'),('Xương kiếm gác mộ','Undead','Chém một tay, mất thế khi hụt'),('Xương cung mộ','Undead','Ngắm từ xa, đổi vị trí khi bị áp sát'),('Xương mang chuông','Undead','Rung chuông hỗ trợ, có pha ngắt'),('Xác thợ mỏ','Undead','Cuốc nện điểm, hồi đòn dài'),('Xác lính ghép giáp','Undead','Giáp lệch, hở một sườn rõ'),('Chó khâu thí nghiệm','Tạo vật sinh học','Lao thấp, dấu chỉ khâu phát sáng báo đòn'),('Bò sát ghép tinh thể','Tạo vật sinh học','Đuôi cứng quét ngang'),('Tượng đá ngực rỗng','Đá','Nhấc lõi rồi nện hai tay'),('Cầu giám sát lơ lửng','Tạo vật bay','Dừng ngắm trước tia, bóng/độ cao rõ'),('Harpy gió lạnh','Harpy bay','Vỗ cánh báo luồng gió, hạ thấp khi kết thúc'),('Long thú cao địa','Rồng mặt đất','Cắn và cào, cánh thoái hóa không bay'),('Mảnh bóng thí nghiệm','Linh thể','Kết hình tại điểm báo, không vô hình tấn công')]),
('V05','Tiền tuyến ấn cổ',[
('Sói khe đá','Sói','Chạy vòng khe hợp lệ, không xuyên địa hình'),('Lợn nanh tro','Thú','Húc để lộ sườn sau khi trượt'),('Bọ cạp đá','Giáp xác','Dựng đuôi rồi chích điểm'),('Rắn cát cứng','Xà','Vệt đất báo đường bò, không mất hitbox ngầm'),('Xà hai mào','Xà','Hai nhịp mổ hướng khác nhau có khoảng nghỉ'),('Slime tro','Slime','Tách hình khi hụt rồi gom, không sinh loot con'),('Bọ giáp ấn','Côn trùng','Lật bản giáp trước cú nện'),('Rễ khô uống mạch','Thực vật','Bám gần nguồn nước, quất khi bị xâm phạm'),('Tượng tải lõi','Đá','Chậm, đặt lõi bảo vệ rồi nhấc lại'),('Tượng chẻ khe','Đá','Đập một đường có báo trước'),('Xương giáo tiền tuyến','Undead','Giữ tuyến bằng đâm thẳng'),('Xương khiên ấn','Undead','Khiên cao, hở lưng'),('Kẻ phá neo','Người thù địch','Chuẩn bị đặt dụng cụ, có thể ngắt theo kit'),('Nỏ thủ trại ấn','Người thù địch','Bắn loạt ngắn rồi nạp lâu'),('Kẻ dẫn thú khe','Người thù địch','Chỉ huy cá thể trong nhóm, không gọi vô hạn'),('Harpy tro đỏ','Harpy bay','Chao xuống phóng lông theo vùng báo'),('Ấu long khe nứt','Rồng bay','Nhào có bóng và đường báo, về thấp sau đòn'),('Thú kết tinh khe ấn','Tha hóa','Nứt vỏ báo xung lực, lõi hiện lúc thu đòn')])]
assert len(groups)==5 and all(len(rows)==18 for _,_,rows in groups)
text='''# MOB-01 r002 — Danh mục 90 mẫu quái nền

Ngày 22/10/2026. Theo yêu cầu tăng gấp ba số loại quái: ngân sách cũ **30 archetype nền → 90 mẫu nền**. Đây là danh mục thiết kế, chưa vẽ hoặc tích hợp gameplay. Không tăng gấp ba mật độ, HP, XP hoặc tỉ lệ rơi.

## Quy tắc đếm và phạm vi

Mỗi mẫu có tên, hình khối/giải phẫu hoặc trang bị nhận diện và hành vi riêng; đổi màu, tăng level, tăng kích thước hoặc gọi là tinh anh không tạo mẫu mới. Các loài cùng họ có thể dùng chung rig nếu giữ khác biệt silhouette, động tác và vai trò. Tên là đề xuất sáng tác mới, không mặc định đã được xác lập trong lore.

Phân bổ 18 mẫu/vùng =90; đây là nơi ra mắt chính, không bắt mỗi vùng luôn có đủ18loại cùng lúc. Các mẫu có thể ở dungeon thuộc vùng, nhưng không nhân số khi dùng lại. Động vật nền không chiến đấu, boss và16đối đầu tinh anh không nằm trong90mẫu. Tinh anh có thể phát triển từ mẫu nền mà không tính thêm loại nền.

V01 không có bất kỳ quái bay nào. Các động tác lướt/bật/ngóc đầu trong danh mục không tạo trạng thái bay hoặc cơ chế đối không. Sinh vật trung lập chỉ thành địch theo điều kiện sinh thái/quest, không buộc người chơi giết mọi thú.

## Danh mục theo vùng

'''
ids=[]
for region,title,rows in groups:
 text+=f'### {region} — {title} ·18 mẫu\n\n| ID | Mẫu quái | Dòng | Hành vi phân biệt / yêu cầu thiết kế |\n|---|---|---|---|\n'
 for i,(name,family,behavior) in enumerate(rows,1):
  mid=f'MOB-{region}-{i:02d}';ids.append(mid)
  text+=f'| {mid} | {name} | {family} | {behavior} |\n'
 text+='\n'
text+='''## Chi phí mỹ thuật và thứ tự sản xuất

90 mẫu tăng ngân sách model/sprite, animation, âm/VFX, AI và QA; không phải90 bộ chỉ đổi palette. Khi dựng sheet cần thêm ghi chú silhouette cho từng dòng trong bảng, đủ bốn hướng và trạng thái cần thiết theo ART. Các tên cùng họ phải qua so silhouette trước khi nghiệm thu; không khác biệt đủ thì sửa thiết kế, không giảm mục tiêu90.

Sản xuất theo lô: chọn nhóm đại diện combat/rig V01 để thử camera và hitbox, hoàn thiện18mẫu V01, rồi lần lượt V02→V05. Không vẽ đồng loạt90mẫu trước khi mẫu2.5D đạt nghiệm thu. Mỗi lô có bản thường/tha hóa/tinh anh khi cần, nhưng không mặc định nhân ba mọi mẫu. Động tác/VFX chỉ mô tả ý đồ; chỉ số, thời gian CC, sát thương và tỷ lệ rơi dùng cấu hình/hồ sơ combat hiện hành, chưa đặt số tại đây.

Quái bay bổ sung chỉ ở V03–V05 trong catalog này; V02 không bắt buộc có bay. Tất cả quái bay cần bóng/độ cao, điểm trúng đòn, giai đoạn tiếp cận và khả năng hoàn thành tuyến truyện theo thiết kế đối không. Không dùng khói/sương/thời tiết để che đòn không báo trước.

## Checklist bàn giao thực tế

- MOB-01: hoàn thiện danh mục90mẫu có ID, dòng và nơi ra mắt.
- MOB-02: còn sinh thái chi tiết, quan hệ faction, điều kiện thù địch, nhóm và nguồn thức ăn từng mẫu; mô tả ngắn này chưa thay hồ sơ loài.
- MOB-03…08: còn silhouette, sheet, animation, VFX, AI, bãi spawn, chỉ số và loot theo cấp. Chưa đánh dấu hoàn thành.
- Giữ16tinh anh/5bossmap và5dungeon theo ngân sách hiện hành; yêu cầu lần này không tự tăng ba nhóm đó.
- Kiểm đủ90ID duy nhất,18/vùng; không bay V01; không tính palette/level/tinh anh/boss thành mẫu nền; truyện chính vẫn solo.

MOB-01 hoàn thiện hồ sơ; tổng **117 hoàn thiện /10 một phần /386 chưa thiết kế =513**. Không có asset mới hoặc kết quả runtime trong lần cập nhật này.

Nguồn: [ngân sách15](15_PROD_06_PHAM_VI_VA_NGAN_SACH.md), [sinh cảnh182](182_MAP_12_SINH_CANH_QUAI_DONG_VAT_VA_BOSS.md), [thời tiết181](181_MAP_10_THOI_GIAN_THOI_TIET_HE_SINH_THAI.md), [checklist](02_THE_GIOI_MY_THUAT_NHIEM_VU.md).
'''
assert len(ids)==len(set(ids))==90
(d/fn).write_text(text,encoding='utf-8')
p=d/'15_PROD_06_PHAM_VI_VA_NGAN_SACH.md';s=p.read_text(encoding='utf-8');old='| Quái | 30 archetype nền, phân bổ theo sinh cảnh; các vùng có thể chia sẻ loài với biến thể có mục đích. |';assert old in s;s=s.replace(old,f'| Quái | **90 mẫu nền** (tăng từ30 theo yêu cầu22/10/2026),18mẫu ra mắt/vùng; [danh mục90]({fn}). Không tính boss/tinh anh/động vật nền hoặc biến thể chỉ đổi màu. |');p.write_text(s,encoding='utf-8')
p=d/'02_THE_GIOI_MY_THUAT_NHIEM_VU.md';s=p.read_text(encoding='utf-8');s,n=re.subn(r'^- \[ \] MOB-01 · .*$',f'- [x] MOB-01 · Hoàn thiện [danh mục90mẫu nền]({fn}),18/vùng; ID/dòng/hành vi nhận diện. Chưa vẽ hoặc nghiệm thu gameplay,22/10/2026.',s,flags=re.M);assert n==1;p.write_text(s,encoding='utf-8')
banner=f'> **Tăng ba lần loại quái ·22/10/2026:** [Danh mục90mẫu nền,18/vùng]({fn}), thay ngân sách30. Không tăng mật độ hoặc số boss/tinh anh. **117 hoàn thiện /10 một phần /386 chưa thiết kế =513**; chưa vẽ/code. Các tiến độ bên dưới là lịch sử.\n\n'
for f in ['README.md','01_DANH_MUC_VA_LO_TRINH.md','09_THU_TU_THIET_KE.md','182_MAP_12_SINH_CANH_QUAI_DONG_VAT_VA_BOSS.md']:
 p=d/f;s=p.read_text(encoding='utf-8')
 if f.startswith('09_'):s=re.sub(r'^(\| \d+ \| MOB-01 \| .*?\| )\[Mở\]\([^)]+\)( \|)$',lambda m:m[1]+f'[Mở]({fn})'+m[2],s,flags=re.M)
 p.write_text(banner+s,encoding='utf-8')
with (d/'18_PROD_09_SO_QUYET_DINH.md').open('a',encoding='utf-8') as f:f.write(f'\n\n## 69. CHG-036 — Loại quái tăng30→90 ·22/10/2026\n\n[{fn}]({fn}): người dùng yêu cầu x3loại quái. Nâng ngân sách15 lên90mẫu nền,18/vùng, IDduynhất/dòng/hànhvi; không tính reskin/palette/boss/tinh anh. Không tăng mật độ/chỉ số hoặc16tinh anh/5bossmap. GiữV01khôngbay. MOB-01hoàn thiện danh mục, MOB-02…08cònmở;117/10/386=513. Chưa vẽ/code/runtime, không sửa thủ thành.\n')
print('Catalog:',len(ids),'unique; per region:',[len(x[2]) for x in groups])
