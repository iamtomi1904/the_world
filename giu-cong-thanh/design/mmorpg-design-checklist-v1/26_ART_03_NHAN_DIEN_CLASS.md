> **ART-03 bản vẽ hiện hành ·22/10/2026:** [Hai bảng mới: 3 chủng tộc, 7 nghề, 19 nhánh](180_ART_03_VE_LAI_THEO_CAY_NGHE_R002.md). Ảnh ba class cũ đã thay thế; concept chưa phải sprite/animation production. Tiến độ giữ 114/8/391 trên 513.

> **Hồ sơ lịch sử:** đặc tả hiện hành đã hoàn thiện tại [ART-03 V2](33_ART_03_NHAN_DIEN_TOAN_CAY_NGHE.md). Không dùng trạng thái cũ dưới đây làm tiến độ hiện tại.

# ART-03 — Nhận diện class, silhouette và vũ khí

> **THAY ĐỔI HỆ NHÂN VẬT — 20/10/2026:** [Khung chủng tộc/nghề/trang bị mới](28_HE_CHUNG_TOC_CHUC_NGHIEP_TRANG_BI.md) thay mô tả cũ khi xung đột: tạo Con Người/Elf/Người Lùn, cấp 15 chọn nghề, cấp 30 chọn nhánh theo race. Trang bị/vũ khí kiểm quyền nghề/nhánh; hình riêng không đổi chỉ số món. Không còn chọn ba class cố định lúc tạo hoặc quy tắc mọi race chọn mọi nhánh.


**Phiên bản:** 1.0 · **Ngày:** 20/10/2026  
**Trạng thái hiện hành:** Thiết kế một phần. Phần ba mẫu dưới đây là hồ sơ lịch sử, không phải danh sách class lúc tạo nhân vật. Phạm vi sản xuất hiện hành là ba body chủng tộc, bảy nghề và 19 nhánh theo hồ sơ 28/32; concept cũ không phải sprite hoàn chỉnh.  
**Thẩm quyền:** trợ lý tự phân tích/chọn phương án theo ủy quyền; phong cách V4 đã được chủ dự án chốt.  
**Đầu vào:** ART-01 V2.3, ART-02 V1.3, cốt truyện sáu lớp khởi đầu và phạm vi ba class alpha. Không sử dụng ảnh/sprite bộ game cũ.

## 1. Quyết định class alpha cũ — đã được thay thế

Chọn **Chiến Binh, Cung Thủ, Pháp Sư**. Ba tên thuộc danh sách khởi đầu trong tài liệu nền, không tạo thêm class mới hoặc tự đổi tên class đang chạy. Thánh Kỵ Sĩ/Sát Thủ/Hắc Kỵ Sĩ giữ vị trí trong thiết kế dài hạn, chưa sản xuất đầy đủ ở lô alpha.

| Class MMO | Mẫu nhận diện | Bản sắc cần đọc | Tham chiếu định danh source hiện tại |
|---|---|---|---|
| Chiến Binh | Khối vai/ngực chắc, chân vững, trọng kiếm hai tay. | Cận chiến trực diện, lực vũ khí, khả năng chịu áp lực trong mẫu đầu. | public/skills.js có berserker tên Chiến binh. Chỉ đối chiếu danh tính, không kế thừa số/skill/ảnh thủ thành. |
| Cung Thủ | Thân gọn, tay/cung tạo khoảng trống, ống tên nhô vai. | Vật lý tầm xa, quan sát và di chuyển. | ranger/Cung thủ. Không lấy auto-target hoặc số tầm từ source cũ. |
| Pháp Sư | Áo dài hình chuông, trượng cao, động tác tay niệm. | Phép thuật và kiểm soát tài nguyên, đọc pha cast. | pyromancer/Hỏa pháp sư là bộ trường phái Hỏa tham chiếu sản xuất trước; không tự coi làID toàn class Pháp Sư. |

Pháp Sư trong lore là lớp nền. Chọn **trường phái Hỏa làm mẫu alpha đầu**, giúp tập trung asset/skill; trường phái khác thiết kế mở rộng sau. SKILL-01 phải ghi rõ quyền chọn/phát triển trường phái, không giả đã có đủ cây nguyên tố hoặc cho phép đổi trường phái chưa thiết kế.

Không tạo ID runtime hoặc đổi class trong code ở nhiệm vụ ART-03. Ghi rõ mapping khi sang SKILL/CHAR/DATA thay vì ép tất cả Pháp Sư vào ID pyromancer đang dùng thủ thành.

Lý do không lấy Thánh Kỵ Sĩ làm mẫu đầu: dạng cưỡi/aura/biến đổi nhiều phụ thuộc, tăng khối lượng trước khi pipeline body/vũ khí/cast ổn định. Không hạ vai trò class trong lore hoặc xóa ý tưởng người dùng đã làm.

## 2. Chuẩn nhận diện chung

- Phong cách V4: body chuẩn khoảng 40px, khoảng 3 đầu, chi tiết vừa, pixel cluster rõ. Grid 32px và khung 960×540 giữ nguyên.
- Ảnh đứng dùng canvas dự kiến 96×96; ART-04 chốt bounds/pivot từng động tác, không crop trọng kiếm để ép vào 96.
- Phân biệt bằng ba lớp: **hình cơ thể/trang phục → hình vũ khí/đồ nghề → màu điểm nhấn**. Tắt màu vẫn phải đọc được.
- Không đặt mọi class cùng áo choàng to/mũ chóp/vũ khí phát sáng khiến chỉ khác màu.
- Tạo cùng ba class trên các race được hỗ trợ bằng biến thể tỷ lệ từ ART-02, không khóa race/class vì ảnh mẫu dùng một dáng người.
- Mặt/tóc/da/giới tính và chủng tộc không quyết định vai trò. Concept dùng một dáng làm tham chiếu, không mặc định người chơi bị cố định ngoại hình.

Các số pixel dưới đây là thông số hình khối, không là hitbox hoặc chỉ số chiến đấu.

## 3. Chiến Binh — khối chắc, lực dồn vào trọng kiếm

**Hình tổng:** thang vai rộng/ngực gọn, chân tách vững, không đứng thẳng như tượng. Body tham chiếu rộng 26–30px/cao 40px; đầu không bị giáp vai che mất.

**Trang phục:** giáp thép mòn vừa đủ, tấm vai gọn, áo vải xanh ngọc trầm ngắn ngang đùi, đai/giày rõ. Giữ đường tách hai chân; không giáp vàng chạm trổ, cánh hoặc halo thường trực. Một vài khớp giáp làm điểm vật liệu, không mỗi pixel là một đinh tán.

**Vũ khí:** trọng kiếm hai tay, chiều dài hình khoảng 30–36px, lưỡi bản rộng 4–6px và chuôi đọc được. Pose đứng đặt kiếm chéo thấp bên thân, không chặn mặt hoặc dính hoàn toàn vào chân. Cả hai tay tham gia cầm lúc đánh; không dùng động tác một tay rồi ghép kiếm lớn lên.

**Hướng nhìn:** trước thấy ngực/tabard và lưỡi kiếm; sau thấy lớp vai/lưng và tay cầm đúng phía; trái/phải vẫn có khoảng hở giữa kiếm và thân. Không flip cả hình làm tay thuận hoặc bố trí trang phục đổi bên.

**Ngôn ngữ hành động:** bước nặng có chuẩn bị/thu hồi, nhát chém có vai/hông tham gia. Cast/tăng lực là pose khác attack thường, không chỉ phủ effect lên idle. Đòn thường chỉ có vệt ngắn phù hợp lưỡi kiếm; skill lớn mới có vùng vệt riêng.

**Vai trò:** mẫu cận chiến bền bỉ nhưng không có nghĩa miễn damage hoặc đỡ tự động. Giá trị thực tế phải do SKILL/STAT thiết kế; nhận diện không cấp thêm giáp theo độ to ảnh.

## 4. Cung Thủ — dáng gọn, khoảng trống của cung

**Hình tổng:** vai vừa/eo gọn, chân lệch nhẹ, silhouette mở một bên bằng cung. Body rộng 20–24px/cao 40px; không làm cơ thể bé hẳn để giả nhanh hơn.

**Trang phục:** da nâu, áo xanh rêu, choàng vai ngắn không che ống tên; túi đai và cổ tay bảo vệ là điểm nhấn. Không giáp vai như Chiến Binh hoặc áo dài chạm chân như Pháp Sư.

**Vũ khí:** cung cao khoảng 28–32px, hình cong tạo khoảng hở rõ; dây không biến thành sợi cực mảnh mất khi nhìn gameplay. Ống tên phía lưng có vài đầu lông tên nhô 8–12px, không vẽ từng chục mũi lẫn vào tóc.

**Hướng nhìn:** trước vẫn thấy cung/đầu tên, sau thấy ống tên, bên hông thấy động tác kéo dây. Tay giữ cung và tay kéo dây có quy tắc nhất quán, không đổi bên giữa frame vì mirror.

**Ngôn ngữ hành động:** chuẩn bị → kéo → thả → hồi, hướng đầu/tay/vũ khí bám hướng bắn. Skill bắn không bị nhầm cast của pháp sư. Projectile, đường bay và impact tách khỏi body để không sửa range bằng vệt ảnh.

**Vai trò:** tầm xa vật lý/cơ động là định hướng, không tự có xuyên mục tiêu/độc/né miễn phí vì source thủ thành từng có. Mỗi hiệu ứng và chỉ số cần hồ sơ riêng.

## 5. Pháp Sư — áo chuông, trượng và bàn tay niệm

**Hình tổng:** phần đầu/vai nhỏ hơn thân áo, chân lộ dưới vạt để thấy di chuyển; áo tạo đường chuông nhưng không thành hình nón quá lớn. Body rộng 22–28px/cao 40px.

**Trang phục:** áo xanh đá/xanh lam trầm theo V4, lớp cổ/lót đỏ đất làm motif trường phái Hỏa, đai và sách nhỏ. Có thể để đầu trần hoặc mũ trùm nhỏ giữ mặt đọc được; không bắt mọi race đội mũ nhọn cao.

**Vũ khí:** trượng gỗ cao khoảng 36–44px, đầu tinh thể hổ phách nhỏ, không quả cầu sáng che đầu. Sách ở đai là motif nền, chưa quyết định vật phẩm offhand hoặc slot trang bị runtime.

**Hướng nhìn:** trước thấy vạt/đai và bàn tay tự do, sau có đường cổ/áo để đọc hướng, bên hông trượng không dính hoàn toàn vào thân. Khi giơ tay niệm vẫn nhận ra trượng và hướng cast.

**Ngôn ngữ hành động:** idle không tỏa lửa liên tục; cast có tay/điểm phát rõ và pha thu hồi. Bộ mẫu Hỏa dùng hình mũi lửa/tàn nhỏ có kiểm soát, không chỉ đổi toàn actor sang đỏ. Nội dung phép Hỏa cụ thể ở SKILL, không mặc định có thiên thạch hoặc hồi máu trong alpha từ concept.

**Vai trò:** pháp thuật có chuẩn bị/quản lý tài nguyên; không tự cho yếu máu hoặc chậm nhất chỉ do áo dài. Các điểm mạnh/yếu do SKILL/STAT chọn và giải thích.

## 6. Nhận diện ở các trạng thái

| Trạng thái | Chiến Binh | Cung Thủ | Pháp Sư |
|---|---|---|---|
| Idle | Kiếm thấp, vai chắc, không che mặt. | Cung bên thân, ống tên đọc được. | Trượng một bên, tay tự do, áo chuông. |
| Move | Khối vai/kiếm không nhảy vị trí. | Chân/choàng ngắn linh hoạt, cung không dính chân. | Vạt áo có nhịp, vẫn thấy tiến/lùi. |
| Attack | Trọng tâm/vũ khí thể hiện lực chém. | Kéo/thả có pose phân biệt. | Điểm phát theo kỹ năng, không dùng pose cận chiến. |
| Cast | Chuẩn bị/pose đúng vai trò. | Ngắm/đặt công cụ/bắn theo nội dung skill. | Tay niệm/trượng có khoảng hở rõ. |
| Hurt/CC | Giữ đồ nghề và hướng nhận diện. | Cung/ống tên không biến mất. | Trượng/áo không thành một vệt glow. |
| Death | Thân/vũ khí hạ có kiểm soát, không frame trống. | Không để ống tên đọc thành loot nhặt được. | Áo/đồ nghề nằm theo pose, không tan khi chưa có cơ chế. |

Số frame/FPS/timing, cancel và event damage chưa thiết kế ở ART-03; thuộc ART-04/COMBAT. Tăng tốc đánh không thay hình cầm vũ khí sai hoặc bỏ toàn bộ frame chuẩn bị ngoài cơ chế được duyệt.

## 7. VFX, ngọc và ngoại trang không phá silhouette

- Lớp cường hóa bám viền/điểm vũ khí, không nhuộm cả actor. Ngọc nguyên tố có điểm xoay/điểm phát riêng được mô tả tại ASSET/COMBAT; chưa mang nguyên mechanics thủ thành vào MMO.
- VFX đánh thường nhỏ hơn skill có chủ đích, không dùng cùng một ảnh phóng to cho mọi đòn. Hiệu ứng không đổi body bounds hoặc hitbox.
- Aura thường trực đặt dưới chân và nhẹ; CC trên đầu không dính nhãn tên. Boss báo trước có ưu tiên cao hơn trang trí.
- Ngoại trang đổi vật liệu/motif nhưng giữ nhóm vũ khí/hướng hành động. Không bán hình làm áo Mage giống boss hoặc ẩn kiếm để khó đọc.
- Áo/giáp đổi theo đồ không được xóa toàn bộ dấu class. Nếu silhouette hội tụ do trang bị, icon class/nhãn là hỗ trợ, không lấy icon thay mọi khác biệt hình.
- Không gán màu căn tính cứng với nguyên tố mọi kỹ năng. Pháp Sư áo xanh dùng Hỏa vẫn có biểu tượng/phát đòn Hỏa rõ; nguyên tố là bộ hiệu ứng, không bắt toàn bộ người biến đỏ.

## 8. Ảnh tham chiếu phải bàn giao

Mỗi class cần: front/back/left/right neutral; silhouette một màu; pose di chuyển/đánh/cast cực trị; vũ khí/đồ nghề tách lớp; mẫu ở grayscale và nền vùng sáng/tối. Chi tiết file/anchor/animation là ART-04.

Một concept board ba class có thể được tạo từ mẫuV4 mới để thấy hình/màu. Nó không tự chứng minh đúng 40px, 4 hướng, tilegrid, nhất quán tay hoặc đầy đủ frame. Nếu ảnhconcept thể hiện lệch vũ khí/pose, tài liệu trên là chuẩn sửa, không lấy lỗi hình làm quy tắc.

Ảnh silhouette một màu phải giữ đúng pose của body; không chỉ tô đen rồi mất toàn bộ khoảng hở cần thiết. Việc đọc silhouette kiểm ở kích thước gameplay, không chỉ phóng lớn.

## 9. Ma trận kiểm chứng tương lai

| Cách xem | Điều cần đọc được |
|---|---|
| Một màu, cùng cỡ | Vai/kiếm, cung/ống tên và áo chuông/trượng khác nhau. |
| Grayscale | Không phụ thuộc đỏ/xanh để nhận class. |
| Trước/sau/bên | Giữ đồ nghề, tay cầm, hướng và khoảng hở. |
| Đứng gần nhau | Vũ khí/aura không che mất cả actor cạnh bên. |
| Có buff/CC | Vẫn nhận class và tình trạng chính. |
| Đổi race | Tỷ lệ race được giữ, không mất silhouette nghề hoặc khóa tổ hợp trái lore. |
| Đổi trang bị | Thấy vật liệu/bậc đồ nhưng không thành class khác ngoài cơ chế biến hình. |

Chưa thực hiện test hoặc kiểm animation ở game; đây là tiêu chí bàn giao cho ART/ASSET/CHAR. Không đọc concept một lần rồi ghi các tiêu chí đã đạt.

## 10. Quyết định và công việc chuyển tiếp

Ba mẫu alpha dưới đây chỉ còn giá trị tham khảo hình ảnh. ART-03 chưa hoàn thiện nhận diện toàn cây mới; không dùng chúng làm quyền chọn class hoặc vũ khí hiện hành.

- SKILL-01 tiếp nhận ma trận hồ sơ 28 và quy tắc đồng bộ hồ sơ 32; không mặc định mọi Pháp Sư dùng Hỏa, không copy Q/E/R hoặc số thủ thành.
- CHAR-01/ASSET tiếp nhận tổ hợp race/class, biểu cảm/trang phục và khối lượng biến thể; số NPC/race/class không tự tăng theo concept.
- GEAR thiết kế vũ khí/slot tương thích; trọng kiếm/cung/trượng hiện là mẫu sản xuất đầu, không tuyên bố giới hạn vũ khí suốt đời class.
- ART-04 tiếp theo: grid/tile seams/frame/hướng/anchor/padding, quy tắc layer và export để bộ hình không bị cắt, nhảy chân hay lật sai tay.

**ART-03 hoàn thiện thiết kế. Tiến độ khác vẫn giữ nguyên; chưa có bộ sprite hoạt động trong gameplay.**

| Ngày | Phiên bản | Quyết định |
|---|---|---|
| 20/10/2026 | 1.0 | Chọn Chiến Binh/Cung Thủ/Pháp Sư alpha, nhận diện ba silhouette theo phong cách V4. |

## Ảnh concept nhận diện ba class

![Chiến Binh — Cung Thủ — Pháp Sư](/design-preview/art03-classes-v1/class-identities-v1.png)

Tạo bằng imagegen tích hợp, dùng conceptV4 mới làm tham chiếu phong cách. Trái sang phải: Chiến Binh/Cung Thủ/Pháp Sư; hàng giữa silhouette, hàng dưới mặt sau. Không dùng asset thủ thành làm nguồn.

Giới hạn quan sát: đây là bảngconcept, không phải bộ4hướng/40px đã xác minh. Pose mặt sau Chiến Binh chưa giữ rõ hai tay cầm như pose trước; cần vẽ lại theo quy tắc trọng kiếm khi làm frame sản xuất, không dùng lỗiconcept thành ngoại lệ. Ba nhân vật đang chung mẫu dáng/tóc minh họa, không cố định ngoại hình/race của người chơi. Chưa có animation/anchor/hitbox hoặc cam kết nhất quán toàn frame. Prompt trong tài liệu27.
