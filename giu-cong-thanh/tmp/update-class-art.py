from pathlib import Path
import json, shutil, hashlib, struct, html
root=Path(r'D:/the_world/giu-cong-thanh')
docs=root/'design/mmorpg-design-checklist-v1'
out=root/'public/design-preview/art03-current-tree-v2'
out.mkdir(parents=True,exist_ok=True)
src=Path(r'C:/Users/Admin/.codex/generated_images/01a14361-6033-7670-8c0e-846dfa6a69fc')
files=[('exec-dab97462-2e85-40c5-b849-730e12534ad8.png','races-professions__r002.png'),('exec-888e12ca-7bf5-45b3-a518-5fa221fe1687.png','branches-19__r002.png')]
assets=[]
for i,(s,t) in enumerate(files):
 shutil.copy2(src/s,out/t)
 b=(out/t).read_bytes(); w,h=struct.unpack('>II',b[16:24])
 assets.append(dict(id=f'AT-AST-{100006+i}',file=t,width=w,height=h,sha256=hashlib.sha256(b).hexdigest(),source=str(src/s),runtimeReady=False))
shutil.copy2(root/'tmp/class-art-prompts.json',out/'prompts.json')
(out/'manifest.json').write_text(json.dumps(dict(revision='r002',date='2026-10-22',method='built-in image_gen',status='concept-only',reference='/design-preview/mmorpg-pixel-v4/styleboard-refined-v4.png',supersedes='/design-preview/art03-classes-v1/class-identities-v1.png',assets=assets),ensure_ascii=False,indent=2),encoding='utf-8')
rows=[('PAL','Thánh Kỵ Sĩ','Kỵ Sĩ','Người','Trọng kiếm, ngựa'),('DKN','Hắc Kỵ Sĩ','Kỵ Sĩ','Người','Trọng kiếm, ngựa'),('HGD','Hộ Vệ Thánh','Kỵ Sĩ','Người','Chùy và khiên, ngựa'),('VAN','Tiên Phong','Chiến Binh','Người, Lùn','Giáo'),('BER','Cuồng Chiến','Chiến Binh','Người, Lùn','Rìu'),('WND','Phong Kiếm Khách','Kiếm Sư','Người','Kiếm và bao kiếm'),('ASN','Sát Thủ','Kiếm Sư','Người, Elf','Song đoản đao'),('HSW','Kiếm Sĩ Trọng Kiếm','Kiếm Sư','Lùn','Trọng kiếm'),('THU','Lôi Pháp Sư','Pháp Sư','Người, Elf','Trượng sấm'),('FIR','Hỏa Pháp Sư','Pháp Sư','Người, Elf','Trượng hỏa'),('WAT','Thủy Pháp Sư','Pháp Sư','Người, Elf','Trượng thủy'),('NEC','Pháp Sư Tử Linh','Pháp Sư','Người','Ma đạo thư'),('LGT','Pháp Sư Ánh Sáng','Pháp Sư','Elf','Trượng lăng kính'),('DRK','Pháp Sư Bóng Tối','Pháp Sư','Elf','Trượng khuyết'),('EAR','Thổ Pháp Sư','Pháp Sư','Lùn','Trượng đá'),('ARC','Cung Thủ','Cung Thủ','Người, Elf, Lùn','Cung'),('SPI','Tinh Linh','Tinh Linh','Người, Elf','Trượng khế ước'),('PRI','Mục Sư','Mục Sư','Người','Thánh trượng'),('WOD','Pháp Sư Mộc','Mục Sư','Elf','Trượng mộc')]
table='| Mã | Nhánh cấp 30 | Nghề cấp 15 | Chủng tộc hợp lệ | Vũ khí nhận diện |\n|---|---|---|---|---|\n'+'\n'.join('| '+' | '.join(r)+' |' for r in rows)
body='''# ART-03 r002 — Vẽ lại theo cây chủng tộc, nghề và nhánh

Ngày: 22/10/2026. Bản vẽ ba class cũ đã hết hiệu lực về hệ nhân vật. Đây là bản concept mới bằng image_gen tích hợp, giữ hướng pixel V4 phục vụ thế giới 2.5D; không thay thủ thành.

## 1. Tạo nhân vật và nghề nền

Tạo nhân vật chọn **Con Người / Elf / Người Lùn**, đều là **Tân Binh** cấp 1–14. Cấp 15 chọn một trong bảy nghề hợp chủng tộc, cấp 30 chọn nhánh hợp lệ. Ba bộ kiếm/cung/trượng tập không phải ba class khởi tạo.

![Ba chủng tộc và bảy nghề nền](/design-preview/art03-current-tree-v2/races-professions__r002.png)

Đọc ảnh từ trái qua phải: hàng trên HUM Con Người, ELF Elf, DWF Người Lùn, KNI Kỵ Sĩ, WAR Chiến Binh; hàng dưới SWD Kiếm Sư, MAG Pháp Sư, ARC Cung Thủ, SPI Tinh Linh, PRI Mục Sư. Mỗi nghề chỉ dùng một race làm mẫu, không có nghĩa nghề đó độc quyền race ấy.

Quyền nghề: Con Người cả bảy; Elf Kiếm Sư/Pháp Sư/Cung Thủ/Tinh Linh/Mục Sư; Người Lùn Chiến Binh/Kiếm Sư/Pháp Sư/Cung Thủ. Có 16 tổ hợp race/nghề. Tinh Linh là nghề, Elf là chủng tộc.

## 2. Mười chín nhánh

![Bảng concept 19 nhánh](/design-preview/art03-current-tree-v2/branches-19__r002.png)

Ảnh đọc trái sang phải, trên xuống dưới, theo đúng thứ tự bảng bên dưới. Tổng 19 nhận diện nhánh, 28 tổ hợp race/nhánh: Người 14, Elf 9, Lùn 5.

TABLE

## 3. Đồng bộ trang bị và thú cưỡi

- Kỵ Sĩ và ba nhánh dùng kỹ năng nghề khi cưỡi ngựa; Hộ Vệ Thánh cũng cưỡi ngựa. Không lấy dạng R thủ thành làm luật MMO.
- Thánh/Hắc Kỵ Sĩ dùng trọng kiếm hai tay; dáng concept đang giữ kiếm một tay khi nghỉ, không cấp quyền khiên hoặc vũ khí phụ. Cần dựng pose đánh hai tay khi làm animation.
- Giáp ngựa minh họa motif nhánh; khi sản xuất phải có layer theo set đang mặc. Cánh tiến hóa và biến thể từng con ngựa chưa vẽ trong hai bảng này. Hộ Vệ Thánh không có nội tại cánh của hai nhánh kia.
- Sát Thủ dùng bộ song đoản đao chiếm hai tay. Tử Linh dùng ma đạo thư; Bóng Tối dùng trượng. Ánh Sáng là pháp sư công kích, Mộc là nhánh healer, Tinh Linh dùng khế ước.
- Ngoại hình minh họa không khóa giới tính, tóc, mặt hoặc màu da. Cùng món đồ có thể khác profile hình ảnh nhưng không nhân bản chỉ số.

## 4. Tình trạng thực tế và phần còn phải làm

Đã vẽ hai bảng: ba body Tân Binh, bảy mẫu nghề, 19 mẫu nhánh. Đã kiểm thứ tự, số nhân vật, vũ khí nhận diện, ba kỵ sĩ có ngựa và thân Lùn khác thân Người. Hai ảnh là concept phóng lớn, không phải sprite native 40px, không phải bản rig đã nghiệm thu.

Chưa vẽ đủ 16 bộ race/nghề và 28 bộ race/nhánh; chưa có bốn hướng, Idle/Move/Attack/Cast/Hurt/Death, cánh ngựa, layer trang bị, VFX hoặc avatar cận mặt. Cần chuẩn hóa pixel native, điểm cầm hai tay, tỷ lệ ngựa/người và thử trong camera 2.5D trước sản xuất. Phép thuật trên đầu trượng trong concept là motif minh họa, không xác lập VFX luôn bật.

ART-03 vẫn là hồ sơ nhận diện đã thiết kế; không đánh dấu toàn bộ asset production hoàn thành. Tiến độ giữ **114 hoàn thiện hồ sơ / 8 một phần / 391 chưa thiết kế = 513**. Không sửa gameplay, skill, database hay thủ thành.

## 5. Nguồn và bàn giao

[Cây quyền nghề và trang bị](28_HE_CHUNG_TOC_CHUC_NGHIEP_TRANG_BI.md), [đặc tả nhận diện](33_ART_03_NHAN_DIEN_TOAN_CAY_NGHE.md), [19 bộ kỹ năng](114_SKILL_01_HO_SO_19_NHANH.md).

[Mở trang xem ảnh và bảng tên](/design-preview/art03-current-tree-v2/index.html). [Prompt đầy đủ](/design-preview/art03-current-tree-v2/prompts.json). [Manifest: nguồn, kích thước và SHA256](/design-preview/art03-current-tree-v2/manifest.json). Ảnh ba class cũ chỉ lưu lịch sử, không dùng làm mẫu sản xuất hiện hành.
'''.replace('TABLE',table)
name='180_ART_03_VE_LAI_THEO_CAY_NGHE_R002.md'
(docs/name).write_text(body,encoding='utf-8')
banner=f'> **ART-03 bản vẽ hiện hành ·22/10/2026:** [Hai bảng mới: 3 chủng tộc, 7 nghề, 19 nhánh]({name}). Ảnh ba class cũ đã thay thế; concept chưa phải sprite/animation production. Tiến độ giữ 114/8/391 trên 513.\n\n'
for fn in ['26_ART_03_NHAN_DIEN_CLASS.md','27_PROMPT_ART_03_CLASS.md','33_ART_03_NHAN_DIEN_TOAN_CAY_NGHE.md','README.md','01_DANH_MUC_VA_LO_TRINH.md','09_THU_TU_THIET_KE.md']:
 p=docs/fn; p.write_text(banner+p.read_text(encoding='utf-8'),encoding='utf-8')
p=docs/'09_THU_TU_THIET_KE.md'
s=p.read_text(encoding='utf-8');s=s.replace('| 013 | ART-03 | Làm bảng silhouette class, vũ khí và vai trò; nhận diện được cả khi thu nhỏ hoặc bị màu môi trường ảnh hưởng. | [Mở](02_THE_GIOI_MY_THUAT_NHIEM_VU.md) |',f'| 013 | ART-03 | Nhận diện 3 chủng tộc, 7 nghề, 19 nhánh; concept r002 đã vẽ, production chưa hoàn thiện. | [Mở]({name}) |');p.write_text(s,encoding='utf-8')
p=docs/'18_PROD_09_SO_QUYET_DINH.md'
with p.open('a',encoding='utf-8') as f:f.write(f'\n\n## 66. CHG-033 — ART-03 thay bảng ba class cũ ·22/10/2026\n\n[{name}]({name}): người dùng yêu cầu đồng bộ hình với cây nghề đã đổi. image_gen vẽ hai bảng 3 race/7 nghề và 19 nhánh, giữ quyền 16/28 tổ hợp, kỵ sĩ cưỡi ngựa; manifest/prompt/hash lưu dự án. Bản cũ chỉ lịch sử. Chưa sprite native/animation/layer/cánh ngựa; giữ114/8/391, không thay thủ thành hoặc logic game.\n')
trs=''.join('<tr>'+''.join('<td>'+html.escape(x)+'</td>' for x in r)+'</tr>' for r in rows)
page='''<!doctype html><html lang="vi"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Ẩn Thành · Nhận diện nhân vật r002</title><style>body{margin:0;background:#0b211c;color:#eee5cd;font:17px/1.65 system-ui}main{max-width:1450px;margin:auto;padding:28px}h1,h2{color:#e5c17b}img{width:100%;height:auto;border:1px solid #665d3b}a{color:#a9dec8}table{border-collapse:collapse;width:100%}td,th{border:1px solid #466153;padding:8px;text-align:left}.note{border-left:4px solid #ccaa67;padding:12px;background:#182e25} .scroll{overflow:auto}</style><main><a href="/roadmap.html#tasks">← Roadmap</a><h1>Nhận diện nhân vật · r002</h1><p class="note">Thay concept ba class cũ. Đây là bản vẽ concept, chưa phải sprite hoặc animation dùng trong game. Giữ phong cách pixel cho thế giới 2.5D.</p><h2>3 chủng tộc → 7 nghề cấp 15</h2><img src="races-professions__r002.png" alt="Ba chủng tộc và bảy nghề"><p>Hàng trên: Con Người · Elf · Người Lùn · Kỵ Sĩ · Chiến Binh. Hàng dưới: Kiếm Sư · Pháp Sư · Cung Thủ · Tinh Linh · Mục Sư. Mỗi nghề dùng một race minh họa; không thay quyền chọn nghề.</p><h2>19 nhánh cấp 30</h2><img src="branches-19__r002.png" alt="19 nhánh theo cây nghề hiện hành"><div class="scroll"><table><thead><tr><th>Mã</th><th>Nhánh</th><th>Nghề</th><th>Chủng tộc</th><th>Vũ khí</th></tr></thead><tbody>ROWS</tbody></table></div><h2>Chưa phải bộ asset hoàn chỉnh</h2><p>Còn 16 tổ hợp race/nghề và 28 race/nhánh, bốn hướng, động tác, điểm cầm hai tay, layer trang bị và ngựa, cánh tiến hóa, avatar và VFX. Cánh không có sẵn trên dáng thường. Concept không chốt lại kỹ năng hay chỉ số.</p><p><a href="prompts.json">Prompt</a> · <a href="manifest.json">Manifest và nguồn ảnh</a></p></main></html>'''.replace('ROWS',trs)
(out/'index.html').write_text(page,encoding='utf-8')
print(json.dumps(assets,ensure_ascii=False,indent=2))
