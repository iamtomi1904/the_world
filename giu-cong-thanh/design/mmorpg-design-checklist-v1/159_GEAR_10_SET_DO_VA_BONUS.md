# GEAR-10 — Set đồ, điều kiện kích hoạt và ngân sách

**Ngày:**21/10/2026 · **Trạng thái:** Hoàn thiện đặc tả V1 trong phạm vi mục; chưa code, vẽ hoặc kiểm chứng cân bằng bằng gameplay.

**Đầu vào:** [Slot148](148_GEAR_01_SLOT_VU_KHI_VA_QUYEN_MAC.md), [ma trận152](152_GEAR_04_MA_TRAN_NGAN_SACH_TRANG_BI.md), [affix154](154_GEAR_06_POOL_DONG_THUOC_TINH.md), [số dòng155](155_GEAR_07_SO_DONG_TIER_VA_QUY_TAC_ROLL.md), [ngân sách81](81_STAT_11_NGAN_SACH_VA_MOC_CAN_BANG.md). Chỉ MMORPG, không sửa thủ thành.

## 1. Cấu trúc set V1

Mỗi bộ có bốn món: **đầu, thân, chân, giày**. Tay để mở cho dòng tốc đánh hoặc món lẻ hợp build. Set mở trên R3/i30+; không biến đồ tân thủ thành yêu cầu farm bộ. Ngưỡng2và4món;3món chỉ hưởng ngưỡng2, không bonus ẩn. Một slot chỉ đếm một instance hợp lệ đang mặc, không đếm kho/skin/đồ trong túi.

Mỗi món set đổi ô affix thứ ba thành SET_RESERVE. Hai affix thường giữ p=B×s×1,20/3, không chia lại cho2. Mỗi nguồn reserve có điểm p cố định, không roll q. P_set là tổng p của các món đang mặc thuộc đúng setId+edition, không dùng số điểm giả định của món mạnh nhất. Chỉ cùng setId được cộng: tên/skin giống nhau không đủ. Các bản30/40/45 chỉ gộp nếu definition chủ động dùng cùng setId+edition; bản cũ giữ p cũ, không được scale lên45.

## 2. Ba bộ mẫu

Mỗi bộ có family hình/phòng cụ hợp quyền; không cấp quyền mặc mới. Tên là đề xuất thiết kế gắn đời sống Elarion, không quy kết đạo đức theo class.

| Set ID / tên | Vai trò |2món |4món |
|---|---|---|---|
| SET_WATCH / Gác Đường | Guardian, bản trọng giáp/chiến hợp nghề | +floor(5P_set) HP | Sau block hợp lệ giảm được damage>0: shield bản thân=floor(5P_set),3s,ICD20s |
| SET_SCRIBE / Người Đối Chiếu | Caster/healer, pháp bào/nghi lễ | +floor(2P_set) mana | Skill trả mana và Release hợp lệ: hồi min(floor(2P_set), mana thực đã trả),ICD30s |
| SET_TRAIL / Dẫn Đường | Melee/bow cơ động, nhẹ/chiến hợp nghề | +floor(0,75P_set) armor | Sau tự di chuyển≥2U trong3s: chuẩn bị Dư Lực6s; direct hit hợp lệ kế tiếp gây thêm floor(3P_set) raw,ICD18s |

WATCH cần hành vi block thật, không kích bởi absorb shield. SCRIBE không hồi mana từ skill miễn phí hoặc ngắt trước Release. TRAIL chỉ tính di chuyển tự điều khiển/dash được chấp nhận; không knockback, teleport/map transition hoặc quãng trên màn hình. Không stack nhiều charge, di chuyển tiếp không refresh hạn6s; hết hạn rồi mới được chuẩn bị lại. ICD bắt đầu khi hit thật kích packet, không khi đi đủ2U. Đang ICD không chuẩn bị charge trước.

## 3. Cùng budget, khác cách dùng

Ngưỡng2 dùng một nửa quỹ hiệu ứng; ngưỡng4 dùng nửa còn lại. Mặc ít hơn4có phần reserve chưa khai thác, là đánh đổi khi ghép đồ. Ví dụ bốn món45R3 có tổng trọng số2,70, p mỗi đơn vị trọng số12, P_set32,40: WATCH +162HP và shield162; SCRIBE +64MP và hồi tối đa64MP; TRAIL +24armor và packet97raw. Chỉ đầu+thân có P_set18, WATCH+90HP; không nhận162HP của đủ bộ.

Đây là quy đổi thử từ unit HP/mana/armor của154 có điều kiện và uptime, không chứng minh tương đương DPS/EHP. Set không tự thêm %damage, rare-rate, crit, hồi sinh, bay, cấp kỹ năng hoặc summon. Không nhận thêm một set bonus free trên đồ đã đủ3affix thường. Set lẻ vẫn có hai dòng và base bình thường.

## 4. Stack và lifecycle

V1 có bốn slot set nên chỉ một bộ có thể đạt4; ghép2+2được nếu từng bộ có slot khác nhau hợp lệ. Mỗi setId+edition ngưỡng2/4 kích đúng một lần, không theo số cặp có thể lập. Các bộ khác edition không gộp, dù cùng tên. Giảm số món gỡ nguồn stat/buff/charge mất điều kiện; HP/mana hiện tại chỉ clamp, không refill. ICD lưu owner+setEffectFamily qua thay món/reconnect, không reset khi rớt từ4xuống3rồi mặc lại.

TRAIL dùng packet flags và quy tắc once-per-action như158, không kích proc khác. WATCH không hồi sinh hoặc miễn damage. Set bonus không phát aura cho party trong V1; không áp chồng nhiều người vì đây là buff tự thân. Set visual và bonus logic tách riêng; giáp ngựa không được đếm là món set thứ năm.

## 5. UI, nguồn và tiêu chí

Tooltip liệt kê4slot, món đang mặc/túi/chưa có tách biệt, trạng thái2/4, giá trị thực và nguồn kiếm đã mở. Không spoil dungeon chưa biết. V1 thiết kế nguồn quest nghề/craft/dungeon cho từng template sau, không bắt thanh toán hoặc quyết định truyện một chiều để có set.

Người chơi có thể hiển thị hình bộ đã mở mà không mặc đủ bonus; mannequin phải ghi “Ngoại hình, không kích hoạt set”. Cần kiểm2+2, đổi edition, bản30+45, hai tab mặc, chết/relog, shieldcap và nguồn buff bị gỡ. Chưa vẽ bộ set hoặc chốt recipe/drop rate.

## 6. Đối chiếu với proc và đổi món

SCRIBE chia giới hạn hoàn mana theo action với FOCUS ở158, không mỗi nguồn tự hoàn đủ toàn bộ chi phí. TRAIL dùng Physical/Neutral hoặc Magic/Neutral khai báo trong set profile; không tự lấy nguyên tố từ màu VFX hoặc tính cả hai school. Mỗi profile chỉ có một school. Không mở profile school sai quyền để tạo nguồn damage phụ vượt build.

Bất kỳ thay đổi món đóng góp nào làm đổi P_set hoặc edition đều gỡ shield/buff tạm/charge từ set cũ và tính lại nguồn tĩnh; ICD vẫn giữ. Không giữ shield162của bộ45 sau khi thay bằng đồ30yếu hơn. Thay đổi UI ngoại hình không thuộc thay đổi nguồn và không gỡ hoặc tạo buff. Nhận thưởng, death/revive, reconnect không tạo một sự kiện block/cast/move để tự kích bonus.
