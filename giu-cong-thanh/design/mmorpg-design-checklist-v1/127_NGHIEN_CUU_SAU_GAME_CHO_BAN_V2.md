# Nghiên cứu sáu MMORPG cho bản thiết kế V2

**Ngày:** 21/10/2026. Nâng chất lượng cùng20mục COMBAT/SKILL, không tạo20checkbox mới. Căn cứ yêu cầu tham khảo nhiều game, bám truyện và sáng tạo hơn. Các bài lịch sử được ghi rõ; không xem chúng là luật hiện hành đã xác minh toàn game.

## 1. Phương pháp

Mỗi đối chiếu có ba bước: xác nhận nguồn do nhà phát triển/nhà phát hành cung cấp → rút nguyên tắc → chỉ ra ứng dụng và phần không phù hợp. Không lấy ảnh, tên kỹ năng, cốt truyện hoặc hệ số. Ẩn Thành giữ2.5D pixel V4/action WASD/con trỏ; không chuyển sang đánh theo lượt hoặc đổi bộ điểm để giống game nguồn.

| Game / mức gần | Nguồn chính thức | Điều học và áp dụng riêng |
|---|---|---|
| **Ragnarok Online** — sprite/nghề trong môi trường có chiều sâu | [Swordman introduction](https://renewal.playragnarok.com/gameguide/classes_introduction.aspx) | Trang nghề gắn luyện tập, vũ khí và địa phương. Ẩn Thành cần truyền thống/thử nghề cụ thể thay vì chỉ bảng STR/VIT; không sao Izlude, tên trường phái hay cấu trúc cấp. |
| **Tree of Savior** — sprite, nhiều nghề, vai trò rõ | [Find Your Class](https://treeofsavior.com/content/findclass/), [Priest](https://treeofsavior.com/page/class/view.php?c=Priest) | Chọn theo vũ khí, vai trò, độ khó và lối chơi; Priest có năng lực hồi sinh. Áp dụng thẻ nghề có tình huống minh họa và giới hạn hồi sinh gắn lore; không lấy số hoặc tên thần của To S. |
| **Ravendawn** — pixel MMO, thế giới/nghề/người chơi | [Reputation revamp2023](https://ravendawn.online/en/home/view/62908043), [Rangers Company2023](https://ravendawn.online/en/home/view/09961886) | Bài reputation bàn về xung đột chọn nhập vai với chọn lợi ích build; hunting cần mục tiêu hơn giết vô nghĩa. Ẩn Thành tách lựa chọn đạo đức khỏi sức mạnh bắt buộc, thêm ghi nhận bảo vệ/chứng kiến/điều tra. Không sao hệ danh vọng, tiền hoặc bountydaily. |
| **WAKFU** — góc chéo2D/MMO, chiến thuật và bản sắc vùng | [Devblog Spell System Revamp2015 do Ankama đăng trên Steam](https://store.steampowered.com/news/posts/?appids=215080&enddate=1433928212), [trang game của Ankama](https://store.steampowered.com/app/215080/WAKFU/) | Devblog nhấn lựa chọn bộ phép và biến đổi cách hoạt động; trang game trình bày thế giới có hệ sinh thái. Ẩn Thành dùng talent đổi hình/nhịp/đối tượng, quái gắn lãnh địa. Không sao deck12/6, spell XP hoặc mô phỏng hệ sinh thái/toàn nền kinh tế của WAKFU. |
| **Nos Tale** — sprite/MMO và nhận diện chuyên hóa | [Thông báo SP12 do đội game phát hành](https://forum.nostale.gameforge.com/forum/thread/5672-act-10-part-2-sp12-patch-notes/?postID=11453) | Một bộ chuyên hóa phải đổi cách chơi và nhận diện, không chỉ viền màu. Ẩn Thành dùng motif/pose/truyền thống riêng ở nhánh30; không sao hệ thẻ, đổi class bằng thẻ hoặc quyền quay nâng ngẫu nhiên. |
| **Guild Wars2** — nguồn bổ trợ action MMO3D | [Meet the New Shatterer](https://www.guildwars2.com/en/news/meet-the-new-shatterer/), [Action Camera](https://www.guildwars2.com/en-gb/news/introducing-the-action-camera/) | Pha phá thế và phản hồi ngắm có chủ đích. Áp dụng boss có thời điểm phản ứng và dấu báo; giữ camera cố định, không sao hệ chiến đấu/cấp/skillbar. |

WAKFU là turn-based, Guild Wars2 là3D; không gọi cả sáu cùng chuẩn pixel2.5D như Ẩn Thành. Một số trang hướng dẫn Nos Tale truy cập trực tiếp không ổn định; dùng thông báo đội game đã mở được, không dựa toàn bộ vào bài quảng bá “tier list”. Không dùng wiki/cộng đồng làm bằng chứng công thức.

## 2. Chẩn đoán V1

| Điểm V1 còn yếu | Hệ quả | Sửa ở V2 |
|---|---|---|
| Nhiều U là tăng damage cho chiêu kế |19nhánh khác màu nhiều hơn khác quyết định |U thành hộ tống, đặt mốc, đổi nguồn khiên, đổi nhịp heal hoặc điều lệnh pet theo từng nhánh. |
| Capstone chủ yếu+damage/−heal |Build dễ thành bài tối ưu số |Hai hướng đổi hình vùng, nhịp đòn, vị trí đứng hoặc phân bổ phần hiệu ứng còn lại; có đánh đổi rõ. |
| Lore chưa giải thích hồi sinh |Oren/Edran và mất mát có thể bị vô hiệu hóa bằng phép |Phân biệt nguy kịch còn liên kết với cái chết đã hoàn tất; quyền từ chối của người được cứu. |
| Bossbreak có thể thành thanh điểm chung |Mọi boss chỉ khác HP/hình |Oren là hai lệnh mâu thuẫn; các vùng sau có khác nguồn, vai trò, dấu hiệu và cách xử lý. |
| Chỉ mạnh theo class/role |Nghề ít liên hệ đời sống |Bài học nghề15/30, dụng cụ/đường đi, vai trò cộng đồng; không ép chọn phe để lấy stat. |

## 3. Chọn lọc để tránh phình phạm vi

Không thêm race/nghề/nhánh/vùng; giữ82NPC,5dungeon và ngân sách boss. Bài thử nghề là module trong quest chuyển chức chung, không cộng mặc nhiên26quest. Không thêm thanh resource/currency/cap TP, hệ phản ứng nguyên tố toàn cục hay pet chủng loại vô hạn. Sáng tạo tập trung vào quy tắc đã có và số lượng asset có thể quản lý.

Mọi hiệu ứng mới giữ cap STAT,35SP/11TP,13hotbar. Bản V2 thay U/capstone cụ thể theo [131](131_V2_CO_CHE_KY_NANG_VA_THIEN_PHU.md); không tự nâng toàn bộ coefficient cho cảm giác “ngầu”. Kiểm cân bằng vẫn cần gameplay thật.
