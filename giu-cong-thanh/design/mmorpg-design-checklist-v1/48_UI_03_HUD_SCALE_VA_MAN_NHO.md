> **Cập nhật có hiệu lực · 21/10/2026:** [Thanh 13 ô hỗn hợp](64_HOTBAR_13_O_KY_NANG_VAT_PHAM.md) thay cấu trúc tám ô/ô bắt buộc bên dưới: 1–9,Q,E,R,Z, kéo kỹ năng hoặc vật phẩm tiêu thụ; giữ WASD + con trỏ. Số lượng/cooldown không nhân theo shortcut. Các đoạn cấu trúc cũ chỉ còn lịch sử khi xung đột.

# UI-03 — HUD, vùng nhìn, scale và màn hình nhỏ

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0  
**Trạng thái:** Hoàn thiện đặc tả bố cục và chính sách responsive, kèm wireframe vị trí; chưa dựng UI tương tác hoặc đo đọc/contrast.  
**Phạm vi:** MMORPG 2.5D pixel V4, web desktop và client PC; thủ thành giữ nguyên.

## 1. Tham khảo MMORPG và phạm vi kết luận

FFXIV tách HUD thành các cụm như hotbar, party, minimap, target và status; hướng dẫn chính thức có chỉnh vị trí/kích thước và lưu template. Tài liệu /uiscale mô tả đổi kích thước HUD/cửa sổ. Áp dụng nguyên tắc tách cụm và scale UI độc lập, không sao chép số hotbar hoặc hệ kỹ năng.

Nguồn: [Game Manual — Navigating the Game Screen](https://na.finalfantasyxiv.com/game_manual/view/), [FFXIV — /uiscale](https://na.finalfantasyxiv.com/lodestone/playguide/db/text_command/4a8632ff4cf/).

Tibia là tham khảo MMORPG sprite bổ sung: trích đoạn tìm kiếm từ manual chính thức mô tả panel có thể chuyển và vùng game/chat có thể đổi kích thước, cùng action bar. Trang đầy đủ trả 403 lúc nghiên cứu nên không suy thêm quy tắc nội bộ, số ô hoặc thông số scaling.

Nguồn giới hạn: [Tibia — Interface Manual](https://www.tibia.com/gameguides/?section=interface&subtopic=manual).

Các bố cục, kích thước và vùng bảo vệ dưới đây là lựa chọn riêng cho Ẩn Thành. Chưa có nguồn tham khảo nào chứng minh chúng đã đạt trên scene 2.5D hoặc đủ mọi thiết bị.

## 2. Tách không gian game và giao diện

Khung render thế giới tham chiếu 960×540 và pixel art không phải kích thước UI. HUD/chữ đặt ở lớp màn hình để đọc rõ tại 1920×1080 và 1366×768. Scale UI không đổi camera, range, hitbox, độ cao hoặc thông tin được server cho phép.

Giữ vùng giữa quanh actor, ngựa/cánh và đường né trống khỏi panel cố định. Không dựng thanh nền kín chạy toàn chiều ngang chỉ để hiển thị tiền/server/địa danh. Các số không cần phản ứng liên tục chuyển vào menu hoặc cửa sổ tương ứng.

![Wireframe HUD hai bố cục](/design-preview/ui03-hud-v1/hud-layout.svg)

Hình chỉ sơ đồ vị trí, không bản vẽ asset pixel hoặc kiểm kích thước thật. Đường đứt trong sơ đồ là vùng ưu tiên bố trí, không biên collision hay vùng cấm kỹ năng.

## 3. Bố cục mặc định Cân bằng

| Cụm | Vị trí | Nội dung chính |
|---|---|---|
| Nhân vật | Trên trái | Avatar nhỏ, tên/cấp gọn, HP/tài nguyên. |
| Tổ đội | Trái dưới cụm nhân vật | Hàng thành viên khi có nhóm; HP, CC/cleanse quan trọng theo quyền xem. |
| Mục tiêu | Trên giữa | Tên/HP, cast và trạng thái ưu tiên; không hiện khung rỗng khi chưa chọn. |
| Minimap | Trên phải | Hướng, địa danh ngắn, pin hợp lệ; không chồng bảng tiền tệ lớn. |
| Theo dõi nhiệm vụ | Phải, dưới minimap | Tối đa ba quest ghim ở 1080p; nội dung còn lại trong nhật ký. |
| Chat | Dưới trái | Panel gọn, ít nền khi không focus, mở rộng khi đọc/nhập. |
| Hotbar | Dưới giữa | Tối đa tám ô chủ động theo quyền cấp/nghề, HP/tài nguyên tham chiếu và cast bản thân. |
| Tiện ích | Dưới phải | Túi/menu, shortcut hệ thống; không thành hàng dài mỗi tính năng một nút. |
| Cảnh báo ngắn | Gần trên vùng giữa | Text/icon ngắn có thời hạn; không che actor hoặc vùng đánh liên tục. |

HP/tài nguyên ở trên trái và gần hotbar là cùng nguồn dữ liệu; bản nhỏ gần hotbar có thể tắt khi trùng dư thừa. Pool shield có dấu/dải riêng, không ghi như máu thật. XP là dải mảnh hoặc thông tin khi có thay đổi, không cần thanh dày thường trực.

Tiền tệ, phòng/server, toàn bộ chỉ số, debug và lịch sử buff không đặt thành dải kín mặc định. Debug chỉ trong chế độ phát triển; panel trạng thái chi tiết vẫn truy cập được, không coi ba icon trên đầu là đủ mọi buff.

## 4. Hotbar theo tiến trình đã chốt

Giữ tối đa 4/5/6/8 chủ động theo hồ sơ 29/32 và điều kiện hoàn thành chuyển chức. Chưa mở ô thì có thể xem mốc tương lai trong bảng K, HUD không bày tám khóa to từ phút đầu. Tăng số ô không tự cấp kỹ năng.

Ở 100%, ô hotbar tham chiếu 56px, gutter 4px: tám ô chiếm 476px chưa tính khung. Thuốc/tương tác/gọi ngựa là nhóm tiện ích tách nhỏ, không thành ô active thứ chín miễn phí. Bind hiển thị theo cấu hình thật; không áp Q/E/R thủ thành.

Cần ngựa, sai vũ khí, thiếu mana và chưa học có badge/lý do riêng theo ART-07. Cooldown dùng mask và số đọc được; overlay khóa không che cả tên/bind. Khi đổi mức UI, giữ hit region khớp ảnh và tránh input kéo/thả thành world click theo UI-02.

## 5. Bố cục Gọn cho 1366×768

Không thu nhỏ toàn bộ 1080p theo tỷ lệ 0,71 rồi làm chữ 16px thành 11px. Giữ text body chuẩn, reflow các nhóm:

- Minimap nhỏ hơn, địa danh dài đưa sang tooltip/map.
- Quest tracker giữ một mục tiêu đang ưu tiên; badge số quest còn lại mở nhật ký.
- Chat thu thấp, hiện thông báo quan trọng và mở rộng theo thao tác; không tự giấu dòng đang nhập.
- Hotbar giữ một hàng tối đa tám ô ở size chuẩn khi đủ; ô tiện ích gom nhóm, không đè chat.
- Party đổi template gọn, giữ HP và CC quan trọng, bỏ trang trí/portrait lớn trước.
- Cửa sổ nội dung chuyển hai/ba cột sang tab/detail sheet khi thiếu chỗ, footer thao tác vẫn thấy.

Bố cục mặc định để trống vùng x≈25–75%, y≈24–70% cho actor và combat ở trạng thái không mở cửa sổ. Đây là mục tiêu thiết kế có thể hiệu chỉnh sau camera mẫu, không cam kết mọi telegraph đều nằm trọn ở đó. Không tắt cảnh báo gần mép chỉ để giữ vùng trống.

## 6. Scale và chế độ chữ lớn

Cho preset UI 100/110/125/150%; chữ có thể tăng riêng theo lựa chọn dễ đọc. Mỗi scale cần tính lại layout và giới hạn vị trí, không phóng bitmap UI mờ rồi coi xong. Icon pixel ưu tiên bản nguồn phù hợp/nearest; scale phân số có thể làm pixel không đều, phải thừa nhận giới hạn thay vì hứa pixel-perfect mọi cỡ.

Tại 1366×768 với 150%, dùng chế độ Chữ lớn: panel nội dung một cột, detail mở riêng và cuộn vùng nội dung, hotbar có thể chia 4+4 với bind không đổi nếu một hàng không đủ. Không cắt nút Đóng/Áp dụng hoặc giảm font tự động để giữ số cột. Bộ bố cục cụ thể cần mockup UI thực để kiểm, chưa xác nhận mọi tổ hợp scale đều vừa.

Ở viewport dưới 1366×768 CSS px, dùng bố cục fallback và thông báo kích thước khuyến nghị; không chặn nhận thông báo tài khoản hoặc làm mất đường thoát. CSS px/OS scaling và backing render pixels phải ghi trong test matrix, không nhìn số resolution vật lý rồi kết luận UI đủ chỗ.

## 7. Tỷ lệ màn và lợi thế quan sát

Bản đầu ưu tiên khung thế giới 16:9 theo thiết kế nền tảng. Màn rộng hơn dùng vùng giao diện/lề phù hợp, không tự mở thêm tầm nhìn chiến đấu so với chuẩn. Không cắt dọc cảnh làm mất telegraph; camera/gameplay viewport theo profile được xác nhận trong ART-01/04.

Thay HUD scale không cho zoom-out hoặc thấy quái phía ngoài visibility. Server không tin client kích thước màn hình để cấp quyền phát hiện. Đưa minimap ra mép xa trên ultrawide không thay range; bố cục mặc định vẫn có giới hạn cụm để mắt không di chuyển quá xa.

## 8. Tiếng Việt, số dài và tương phản

Tên/quest dài xuống dòng theo độ ưu tiên; tên nhân vật/địch có bản xem đầy đủ qua focus/tooltip khi bị rút gọn. Không cắt dấu Việt hoặc co chiều cao hàng khiến chữ chạm nhau. Giữ đơn vị cạnh số, tabular digits nếu font hỗ trợ.

HUD có thể rút số tiền/XP ở vùng phụ, nhưng tooltip và giao dịch phải số đầy đủ. Không chỉ ghi +10% khi công thức thực làm 10% thành 19%; tooltip chỉ rõ tăng đầu vào và kết quả hiệu lực khi cần. HP/shield/mana không gom chung một số; cap/overcap có nhãn nguồn theo STAT khi được chốt.

Chữ HUD có nền/viền tương phản gọn trên map sáng/tối, không chỉ bỏ nền hết vì muốn trong suốt. Màu ART-05 kèm hình/icon; màu hiếm/khóa không làm chữ mô tả biến mất. Tùy chọn tăng viền và giảm flash nối ART-06; chưa đo contrast thực tế từ tài liệu.

## 9. Thông báo, party và trạng thái

Cảnh báo gameplay ưu tiên toast thương mại/xã hội. Nhiều phần thưởng gộp trình bày, giữ log; lời mời không mở modal chặn trận. Caption âm quan trọng theo ART-09 không chồng castbar/CC.

Số thành viên tổ đội tối đa chưa chốt: dùng fixture UI 1/4/8 hàng để đối chiếu, không coi tám là cap party. Boss target status có filter của tôi/quan trọng/tất cả, ba icon trên đầu theo ART-06 không giới hạn panel. Khi cùng lúc heal/bleed/root/shield, giữ dấu khác nhau, không cùng một icon xanh/đỏ.

## 10. Lưu bố cục và phạm vi các task

Đề xuất ba layout mặc định Cân bằng/Gọn/Chữ lớn; scale và display mode thuộc thiết lập thiết bị, có thể có override nhân vật theo nhu cầu. Không tự đồng bộ tọa độ tuyệt đối từ PC lớn sang web nhỏ. Quy tắc drag/resize/ghim/reset và persistence chi tiết sẽ làm UI-04, không đánh dấu xong từ tài liệu này.

UI-03 không cấp thêm skill slot, thay combat state hoặc tầm nhìn. Dữ liệu HUD authoritative, vị trí/scale là presentation. Không lưu camera/texture metadata theo từng nhân vật chỉ vì lưu layout.

## 11. Nghiệm thu sau khi dựng

Cần mockup cỡ thật và UI tương tác cho 1920×1080/1366×768, scale 100/125/150, tên Việt dài, số lớn, tám active, party nhiều hàng và Kỵ Sĩ/cánh dưới telegraph. Thử resize/OS scale/fullscreen, focus text và drag bounds. So camera 2.5D thật sau ART-04.

Wireframe SVG trong hồ sơ chỉ minh họa vị trí; chưa kiểm font thật, contrast, nhập liệu hoặc các trường hợp trên. UI-03 hoàn thiện đặc tả, không chứng minh UI production sẵn sàng. Tổng **21/513 hoàn thiện thiết kế, 6 một phần, 486 chưa thiết kế**. Tiếp theo UI-04: kéo/đổi cỡ/ghim/lưu vị trí và phục hồi layout. Thủ thành giữ nguyên.
