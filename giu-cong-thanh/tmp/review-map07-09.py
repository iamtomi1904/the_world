from pathlib import Path
import re,collections,json
d=Path('design/mmorpg-design-checklist-v1');review='193_RA_SOAT_SAU_MAP_07_09_R002.md'
def edit(name,old,new):
 p=d/name;s=p.read_text(encoding='utf-8');assert old in s,(name,old);p.write_text(s.replace(old,new),encoding='utf-8')
edit('189_MAP_07_HOI_SINH_NOI_NGHI_VA_DICH_VU.md','Mỗi vùngPvE có một điểm hồi sinh mặc định ởhub; điểm phụ chỉ mở bằng tương tác đăng ký tại địa điểm được bảo hộ. Điểm mặc định luôn là fallback, không mất vì lựa chọn nhiệm vụ riêng. Điểm chưa khám phá không được dùng như dịch chuyển miễn phí. Bản đầu không cho hồi sinh ở mọi lửa trại tự tạo hoặcNPCngoài rừng.','Mỗi sector gameplay có thể vào độc lập phải có điểm hồi sinh mặc định hợp lệ hoặc điểm gắn cửa vào của hành trình đã tiếp cận. Vùng nội dung nhiều sector không dùng một hub xa làm mặc định cho mọi nơi. Ưu tiên checkpoint đã đăng ký trong deathscope hiện tại, rồi điểm mặc định của sector, cuối cùng điểm trả về đã ghi nếu sector đóng. Không hồi sang đầu kia chưa mở đường. Điểm phụ cần đăng ký khi còn sống, ngoài combat và đúng quyền; đăng ký không hồi máu, mở warp hoặc reset cooldown. Không mở hồi sinh ở mọi lửa trại/NPC ngoài rừng.')
edit('189_MAP_07_HOI_SINH_NOI_NGHI_VA_DICH_VU.md','| V03 | TrạmKhếƯớc | Điểmtrú trên đườnghànhhương và trạmngườidẫn ởnhánhrừng; đăngkýtheosector, không teleportquaValedornchưa mở |','| V03 | Sector rừng: Trạm Khế Ước; sector hành hương: trạm tiếp nhận riêng hoặc cửa vào đã tiếp cận | Hai deathscope riêng; không chết ở nhánh hành hương rồi nhảy về rừng chưa tới |')
edit('189_MAP_07_HOI_SINH_NOI_NGHI_VA_DICH_VU.md','| V04 | QuánTrạmChắnGió | Trạmđườngcao giữa vùngtrũng vàcaođịa; khuNPCBấtTửGiả có thể códịchvụ riêng, không ép tin ngưỡng để được cứu |','| V04 | Mỗi sector vùng trũng/cao địa có điểm hợp lệ riêng; Quán Trạm Chắn Gió phục vụ sector chứa nó | Không đưa người chết ở vùng trũng lên cao địa chưa tới; vị trí trạm phụ cần bản vẽ xác nhận |')
edit('190_MAP_08_MANG_DI_CHUYEN_VA_CHUYEN_VUNG.md','Xácnhậnhaiđầu vànguồnổnđịnh theo185; khôngnhảyđếnđịadanhchưabiết','Nhân vật đã tới và đăng ký riêng từng đầu bằng đường bộ/đò/đoàn vận chuyển; tuyến phép còn cần nguồn ổn định theo185. Không cần dùng warp để mở warp, không mở hộ từ account')
edit('191_MAP_09_KHAM_PHA_SUONG_MAP_VA_CHIA_SE.md','Rươngẩn khôngtựhiệnchínhxácngaykhivàovùng; sửdụngdấuquan sát184. Saupháthiệncóthểđánhghim; sau mởghi nhận đúngscope, khôngchoaccountđãnhậntựlấytiếpmọinhânvật.','Rương ẩn không tự hiện chính xác khi vào vùng; dùng dấu quan sát184. Sau phát hiện có thể ghim. Quyền nhận thưởng theo claimscope trong định nghĩa rương: account thì kiểm account, character thì kiểm character. Fog và ghim không quyết định quyền claim, không áp khóa account cho mọi rương. Trạng thái đã mở bởi nhân vật khác với đã nhận thưởng account.')
edit('191_MAP_09_KHAM_PHA_SUONG_MAP_VA_CHIA_SE.md','Ngoàicom batvẫnchịunguyhiểmđúngvùng','Nhân vật vẫn chịu nguy hiểm theo luật vùng')
appendix={
'189_MAP_07_HOI_SINH_NOI_NGHI_VA_DICH_VU.md':'''## Bổ sung r002 — quyền dịch vụ và hồi sinh theo sector

Điểm đăng ký dùng character+deathscope+checkpoint, không dùng tên vùng làm khóa duy nhất. Ngân Ấn là ví account/server theo170; quote hồi sinh xét khả dụng/hold đúng ví, không tạo ví nhân vật. Quyền checkpoint vẫn thuộc nhân vật, không mở chung vì chia sẻ số dư.

NPC di chuyển không tự reset stock/quote. Nếu quá xa, đổi scope, đóng ca hoặc tương tác bị ngắt trước accept thì không tự thu tiền; giao dịch đã commit trả receipt, không hoàn tác chỉ vì NPC bước đi. NPC quan trọng có lịch và cách tìm lại, không phải lúc nào cũng có vị trí realtime trên map.

W06/arena còn cần ruleset thời gian chờ, skillrez/quota và phí/không phí ở FACTION/PVP. Hồ sơ map chỉ chốt vị trí/quyền điểm, không báo hồi sinh PvP đã thiết kế đủ. Giữ nguyên luật PvE104 và điểm dừng trước vẽ.
''',
'190_MAP_08_MANG_DI_CHUYEN_VA_CHUYEN_VUNG.md':'''## Bổ sung r002 — mở tuyến và cam kết hành trình

Đã biết nút, đã tới nút, đã đăng ký nút và cạnh dịch chuyển đang hoạt động là các trạng thái khác nhau. Tuyến điều vận lần đầu vàoW06 có quyền vào từ quân vụ, không yêu cầu đã đứng trongW06 để mở đầu đến; ngoại lệ này không mở warp tự do cho mọi nơi.

Intent/quote-hold/transferId/receipt phải liên kết để một hành trình có một kết quả actor và một lần chi. Timeout cần đối soát trạng thái thật, không vừa refund vừa hoàn tất chuyến hoặc spawn hai actor. Đây là yêu cầu nghiệp vụ, chưa lựa giao thức giao dịch mạng; NET/DATA phải chứng minh khi triển khai.

Tuyến Kỵ Sĩ kiểm cả hành lang/cửa/cầu/góc quay/checkpoint đủ gọi ngựa. Nội thất hòa bình có thể yêu cầu xuống, nhưng phần combat bắt buộc phải cho ngựa chiến; không ép đánh thường để bù mất skill. Không tự hồi buff/mount khi respawn. Chi tiết và ma trận rủi ro theo193, chưa greybox.
''',
'191_MAP_09_KHAM_PHA_SUONG_MAP_VA_CHIA_SE.md':'''## Bổ sung r002 — thông tin đã biết không mở quyền

Account reference chỉ chia sẻ địa danh công khai; không tự chia sẻ secretPOI, spoiler, warp hoặc reward. Ghim nhận từ bạn là thông tin được chia sẻ có nguồn, không mở fog/quest. Claimscope rương thuộc catalog loot, không do bản đồ quyết định.

W06 công khai ownership/contest theo luật, nhưng không phát radar toàn vùng cho client. Ghim địch đã thấy là vị trí tại thời điểm ghi, không bám theo địch sau khi mất tầm nhìn. Đổi phe/team/bang thu hồi marker chiến thuật; không đẩy chúng vào ghimaccount. Không hứa ngăn người thật kể thông tin đã thấy ngoài game.

Mưa/sương không reset discovery; bề mặt nhiều tầng và phiên bản bản đồ dùngID ổn định/remapping. Local cache chỉ trình bày. Giá trị cell/range/TTL/cap marker chờ cấu hình và thử cảnh, không có số nghiệm thu khi chưa vẽ/dựng.
'''}
for name,extra in appendix.items():
 p=d/name;s=p.read_text(encoding='utf-8');p.write_text('> **Rà soát sâu r002 ·22/10/2026:** [Phân tích và quyết định193]('+review+') bổ sung scope hồi sinh, quyền dịch vụ, transfer và thông tin bản đồ. Các quy tắc r002 thay điểm mơ hồ của r001; chưa runtime/vẽ.\n\n'+s+'\n\n'+extra,encoding='utf-8')
b=f'> **Rà soát sâu trước vẽ ·22/10/2026:** [Bản r002 MAP-07…09]({review}) sửa hồi sinh theo sector, mở warp, giao dịch NPC/transfer và claimscope bản đồ; còn ruleset PvP và kiểm layout. Giữ525mục:123hoànthiện/11mộtphần/391chưathiếtkế. Không ảnh mới/code/runtime; vẫn dừng trước vẽ.\n\n'
for name in ['README.md','01_DANH_MUC_VA_LO_TRINH.md','09_THU_TU_THIET_KE.md','192_TONG_HOP_MAP_07_09_VA_DIEM_DUNG_VE.md']:
 p=d/name;p.write_text(b+p.read_text(encoding='utf-8'),encoding='utf-8')
with (d/'18_PROD_09_SO_QUYET_DINH.md').open('a',encoding='utf-8') as f:f.write(f'\n\n## 78. CHG-045 — Rà soát sâu MAP-07…09 r002 ·22/10/2026\n\n[{review}]({review}): theo yêu cầu phân tích kỹ, sửa trực tiếp189sector/deathscope V03/V04,190warp haiđầu mở bằng tuyến vật lý,191claimscope rương không mặc địnhaccount và thêmr002. Rà víchung170, NPClease/commit, transferintent, đườngngựa, camp và ròthôngtinW06. PvPrez còn PVP/FACTION, không nhận đã test;123/11/391 trên525khôngđổi. Giữdừngtrướcvẽ, không code/ảnh/SQL.\n')
items=[]
for p in d.glob('*.md'):
 for l in p.read_text(encoding='utf-8-sig').splitlines():
  if m:=re.match(r'^- \[([ xX])\] ([A-Z]+-\d+)\s*[·—–-]?\s*(.+)$',l):items.append((m[2],'done' if m[1].lower()=='x' else 'partial' if 'Thiết kế một phần' in l else 'todo'))
assert len(items)==len(set(x[0] for x in items))==525
assert collections.Counter(x[1] for x in items)=={'done':123,'partial':11,'todo':391}
for name in [review]+list(appendix):
 for x in re.findall(r'\]\(([^)]+\.md)\)',(d/name).read_text(encoding='utf-8')):assert(d/x).exists(),(name,x)
print('525 tasks unchanged;123/11/391; revised document links OK')
