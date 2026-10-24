# STAT-10 — DoT, HoT, stack và giới hạn boss

**Ngày:**21/10/2026 · **Phiên bản:**1.0. Hoàn thiện đặc tả V1, chưa code/playtest. [Tham khảo](79_THAM_KHAO_TIEN_TRINH_VA_VAI_TRO_MMORPG.md). MMORPG, thủ thành giữ nguyên.

## 1. Hợp đồng tick

Definition khai báo school/element, công nguồn hoặc loại HP tham chiếu, tổng hệ số, duration, tick interval, crit/proc flags, snapshot/live, stack/refresh, cleanse và boss cap. Không một tên Độc tự đủ dữ liệu phát hành.

Mặc định snapshot công/bonus nguồn lúc apply, phòng thủ/kháng/taken modifier mục tiêu live mỗi tick; HoT snapshot healing nguồn, healReceived đích live. Tick đầu ở start+interval, không heal/damage ngay lúc apply trừ initial hit tách ngân sách. Duration5s/interval1s có tick1,2,3,4,5; tick đúng end chạy trước expire theo STAT-05. Không nhân tick theo FPS/haste; nguồn duration tăng phải chốt giữ tổng hay giữ rate, không ngầm nhận cả hai.

## 2. Bộ profile mẫu để cân thử

| Effect mẫu | Đầu vào/tổng hệ số | Duration/tick | Stack và quyền |
|---|---|---|---|
| Chảy máu cơ bản | 0,50×công vật lý tổng, vật lý-Neutral |5s/1s| Strongest cùng group trên target; cleanse cơ thể khi có quyền. |
| Bỏng cơ bản |0,60×công phép tổng, phép-Fire|5s/1s| Strongest cùng group; không một nguồn mỗi player nhân vô hạn. |
| Độc cơ bản |0,15×công phép tổng/stack, phép-Poison|6s/1s| Shared target max3stack, expiry chung refresh, mỗi stack lưu source snapshot. |
| HoT cơ bản |0,80×HealingPower tổng|5s/1s| Strongest cùng group, không crit; tick chỉ hồi HP thiếu. |

Đây là fixture engine/balance, không thay19kit hoặc cho mọi class tự học. Skill có DoT mạnh hơn phải phân ngân sách direct/tick/cost/CD riêng. Nếu cùng hit có0,8direct+0,6DoT thì tổng cơ bản1,4 trước điều kiện, không ghi như chỉ0,8. Nhánh Hỏa/Pháp Sư Mộc dùng đúng hook nội tại hồ sơ78 một lần.

Nguồn mạnh hết hạn thì nguồn yếu còn hiệu lực theo strongest source records, không lấy duration yếu kéo dài snapshot mạnh. Poison đầy3stack: apply mới thay stack yếu nhất nếu snapshot mạnh hơn; nếu không thì chỉ refresh expiry, attribution stack không đổi. Ties giữ stack cũ, không chuyển killcredit miễn phí. Refresh không reset nextTick hoặc tạo tick tức thì.

## 3. %HP và boss

Mặc định dùng công nguồn, không %HP. Nếu skill %HP thì ghi max/current HP, tỷ lệ **mỗi giây** và duration; rawTick=rate×HP_ref×interval. HP_ref current lấy tại tick; max lấy max đích hiện tại trước cap. Không nhầm15%tổng/5s thành15%mỗi giây.

V1 boss có ba trần raw-rate trước mitigation: mỗi source+effect max0,25%bossMaxHP/s; toàn đội cùng effect group max1%/s; tổng mọi DoT%HP max2%/s. Đồng thời mỗi source+effect max3×attackProfile_snapshot/s. Đây là cấu hình thử để nguồn yếu không thiêu boss quá nhanh, không lời hứa cân boss cuối.

Scheduler tập hợp các packet cùng lịch và chia tỷ lệ khi chạm quota, không ưu tiên người gửi request trước. Quota dùng cửa sổ trượt1s theo thời gian server, không bucket rời dễ spam đầu/cuối giây. Sau cap raw mới qua school defense/E/DR/shield. DoT theo công không thuộc trần %HP nhưng vẫn budget skill và cap damage groups. Boss có immunity/phase riêng, không mọi boss một profile.

Ví dụ boss100.000HP, sourceAttack100: raw%HP3%/s=3000; source cap min(250,300)=250raw/s. Năm nguồn cùng group đủ mạnh tối đa1000raw/s trước defense, không1250; phần chia theo raw yêu cầu hợp lệ, attribution theo phần thực nhận. Chưa mô phỏng server.

## 4. Proc, chết và ghi công

DoT không crit/reflect/lifesteal/kích thêm stack DoT mặc định; skill đặc biệt phải whitelist và hạn đệ quy. Kill DoT thuộc owner stack/instance gây tick kết liễu, contribution ghi actual damage; quest/XP không chỉ last-hit. HoT không overheal thành shield hoặc threat/XP giả.

Nguồn chủ chết: DoT/HoT đã apply trên mục tiêu khác mặc định chạy hết hạn nếu target/encounter còn, không phát cast mới; pet/aura/field theo lifecycle riêng. Mục tiêu chết thì ngừng tick/xóa effect; hồi sinh không resume DoT cũ. Bổ sung này làm rõ STAT-09, không xóa mọi DoT trên mọi đích chỉ vì source chết. Dispel/đổi vùng/destroy theo definition, không dồn tick offline khi login.

## 5. UI và kiểm chứng sau

Tooltip ghi tổng dự kiến, rate/tick/duration, stack, snapshot, cap boss khi được biết; không chỉ “gây độc”. Số tick actual, resisted/immune/shield tách khỏi HP mất. Cần kiểm refresh spam, stack nhiều owner, cap sliding window, effect expiry và nguồn chết; chưa làm runtime hoặc số riêng19kit.
