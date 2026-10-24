from pathlib import Path
import re,collections
d=Path('design/mmorpg-design-checklist-v1');sd=Path('design/mmorpg-story-v1');fn='205_UU_TIEN_COT_TRUYEN_XUYEN_SUOT_LORE_VUNG_VA_NPC.md';story='11_TUYEN_TRUYEN_XUYEN_SUOT_NAM_VUNG_BAN_DAU.md'
p=d/'204_FACTION_02_GIA_NHAP_DOI_PHE_VA_CHUYEN_BANG.md';s=p.read_text(encoding='utf-8');s=s.replace('Hoàn thiện hồ sơ nghiệp vụ MMORPG;','Bản nháp nghiệp vụ, chưa chốt theo lore;');s=s.replace('FACTION-02 hoàn thiện hồ sơ trong phạm vi gia nhập/đổi và quan hệ bang, không đóngGUILD-01…08hoặcFACTION-05/06/07chi tiết. Tổng525mục: **128hoànthiện /11mộtphần /386chưa thiết kế**. Bước tiếp: FACTION-03 — hồ sơ hai đại bản doanh, NPC/dịch vụ/truyện và sơ đồ chức năng trước vẽ.','FACTION-02 giữ trạng thái chưa hoàn thiện trên checklist; các đề xuất trong nháp cần biên tập sau cốt truyện theo205. Không dùng các số hoặc quy trình trên làm chính sách cuối. Ưu tiên viết truyện và lore, chưa đi tiếpFACTION-03.');p.write_text('> **Bản nháp gác lại theo ưu tiên mới ·22/10/2026:** [205]('+fn+') đặt cốt truyện/lore trước hệ phụ. FACTION-02 chưa được đánh dấu hoàn thiện;48giờ/72giờ và các chính sách dưới đây chỉ là đề xuất, không số đã chốt.\n\n'+s,encoding='utf-8')
p=d/fn;s=p.read_text(encoding='utf-8').replace('đúnglú c','đúng lúc').replace('questsa ucấp10','quest sau cấp10');p.write_text(s,encoding='utf-8')
p=d/'02_THE_GIOI_MY_THUAT_NHIEM_VU.md';s=p.read_text(encoding='utf-8');s,n=re.subn(r'^- \[ \] QUEST-10 · .*$',f'- [ ] QUEST-10 · Thiết kế một phần: [bản kể xuyên suốt năm vùng0.1](../mmorpg-story-v1/{story}) đã viết theo khung sáu hồi; còn ma trận manh mối/lore vùng/NPC, quest/thoại chi tiết sau10. [Ưu tiên205]({fn}),22/10/2026.',s,flags=re.M);assert n==1;p.write_text(s,encoding='utf-8')
b=f'> **Ưu tiên cốt truyện/lore ·22/10/2026:** [Kế hoạch biên tập205]({fn}) và [bản kể xuyên suốt0.1](../mmorpg-story-v1/{story}). Viết truyện→lore vùng→NPC→manh mối→quest trước hệ phụ/mapchi tiết. QUEST-10mộtphần; FACTION-02giữbảnnháp. **525task:127hoànthiện /12mộtphần /386chưathiếtkế**. Khôngcode/vẽ.\n\n'
for name in ['README.md','01_DANH_MUC_VA_LO_TRINH.md','09_THU_TU_THIET_KE.md']:
 p=d/name;s=p.read_text(encoding='utf-8')
 if name.startswith('09_'):
  s=re.sub(r'^(\| \d+ \| QUEST-10 \| .*?\| )\[Mở\]\([^)]+\)( \|)$',lambda m:m[1]+f'[Mở]({fn})'+m[2],s,flags=re.M)
 p.write_text(b+s,encoding='utf-8')
storybanner='> **Ưu tiên biên tập hiện hành ·22/10/2026:** [Bản kể năm vùng0.1]('+story+') nối các khung truyện cũ thành hành trình; [kế hoạch205](../mmorpg-design-checklist-v1/'+fn+') ưu tiên lore vùng/NPC/quest trước hệ phụ. Chưa viết xong toàn bộ82NPC hoặc lời thoại sản xuất; giữ lịch sử thật và sáu hồi.\n\n'
for name in ['README.md','04_SAU_HOI_VA_KET_THUC.md','05_PHE_PHAI_VA_NHAN_VAT.md']:
 p=sd/name;p.write_text(storybanner+p.read_text(encoding='utf-8'),encoding='utf-8')
with (d/'18_PROD_09_SO_QUYET_DINH.md').open('a',encoding='utf-8') as f:f.write(f'\n\n## 87. CHG-054 — Ưu tiên cốt truyện xuyên suốt và lore ·22/10/2026\n\n[{fn}]({fn}): người dùng yêu cầu viết nội dung xuyênmap/loreNPCvàvùngtrướchệphụ. Đãviếtstory11bảnkể0.1NhàĐèn→5vùng→kếtchiếndịch45, khôngkhép6hồi/giảicứuchaquásớm. 24NPCcũ lànềnchưa82profile, QUEST-10mộtphần;204FACTION-02giữnhápchưachốtsố vàchưađánhhoànthiện. 525=127/12/386. Khôngcode/vẽ/SQL; kếtiếpbiêntậpmaplore/NPC/manhmối/quest.\n')
items=[]
for p in d.glob('*.md'):
 for l in p.read_text(encoding='utf-8-sig').splitlines():
  if x:=re.match(r'^- \[([ xX])\] ([A-Z]+-\d+)\s*[·—–-]?\s*(.+)$',l):items.append((x[2],'done' if x[1].lower()=='x' else 'partial' if 'Thiết kế một phần' in l else 'todo'))
assert len(items)==len(set(x[0] for x in items))==525
assert collections.Counter(x[1] for x in items)=={'done':127,'partial':12,'todo':386}
for p in [d/fn,sd/story]:
 for x in re.findall(r'\]\(([^)]+)\)',p.read_text(encoding='utf-8')):assert(p.parent/x).exists(),(p.name,x)
print('525tasks;127done/12partial/386todo; new story/design links OK; FACTION-02 remains draft')
