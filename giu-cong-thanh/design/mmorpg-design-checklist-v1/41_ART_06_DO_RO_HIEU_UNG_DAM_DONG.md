# ART-06 — Độ rõ nhân vật và hiệu ứng khi đông người

**Ngày:** 21/10/2026 · **Phiên bản:** 1.0  
**Trạng thái:** Hoàn thiện đặc tả ưu tiên, mức hiển thị và tùy chọn; chưa sản xuất ba mức asset hoặc đo hiệu năng.  
**Phạm vi:** MMORPG 2.5D; thủ thành giữ nguyên. Kế thừa ART-05 và danh mục trạng thái hồ sơ 40.

## 1. Nghiên cứu và giới hạn áp dụng

FINAL FANTASY XIV cho điều chỉnh hiệu ứng theo bản thân, tổ đội và nhóm người chơi khác với các mức hiển thị. Hướng dẫn khác cho lọc debuff do chính mình gây ra trên mục tiêu. Tham khảo tách đối tượng và lọc thông tin, không sao chép nguyên UI hoặc suy rằng tắt mọi effect sẽ luôn an toàn.

Nguồn chính thức: [Battle effects](https://eu.finalfantasyxiv.com/uiguide/faq/faq-other/setting_bteffect.html), [Lọc debuff cá nhân](https://na.finalfantasyxiv.com/uiguide/battle/battle-buff/battle_buff_myself.html).

Riot trình bày độ rõ gameplay như một yêu cầu của hiệu ứng, gồm quan hệ giữa vùng trúng và hình hiển thị, thứ bậc hình ảnh và giảm nhiễu. Đây là tham khảo combat nhiều tác động cùng lúc; League không phải MMO pixel và không cung cấp sẵn budget cho Ẩn Thành.

Nguồn chính thức: [Clarity in League](https://www.leagueoflegends.com/en-us/news/dev/clarity-in-league/), [VFX Style Guide](https://nexus.leagueoflegends.com/en-us/2017/10/dev-leagues-vfx-style-guide/).

Các cấp ưu tiên, số icon và preset bên dưới là quyết định thiết kế của Ẩn Thành, không phải thông số đo từ game tham khảo.

## 2. Bốn cấp ưu tiên thông tin

| Cấp | Nội dung | Quy tắc giảm |
|---|---|---|
| P0 — phải phản ứng | Vùng nguy hiểm đang liên quan, hướng projectile địch, mục tiêu cơ chế, CC hiện tại của bản thân. | Không tắt bằng tùy chọn giảm trang trí; có bản tối giản giữ hình học/timing. |
| P1 — quyết định chiến đấu | Điểm chân/hướng bản thân, mục tiêu chọn, vùng hồi/bảo hộ hữu ích, shield/CC của mục tiêu, đồng đội cần cứu. | Giữ dấu chức năng, giảm hạt/flash phụ. |
| P2 — nhận diện đòn | Đòn đánh thường, phát phép của đồng đội, motif nguyên tố và chuyển động cơ bản. | Giảm độ sáng, số hạt và vệt phụ theo preset. |
| P3 — trang trí | Hạt cánh, đuôi aura ngoại trang, ánh sáng nền và phần phụ không truyền luật. | Giảm trước hoặc tắt; không thay đổi chỉ số/trạng thái. |

Độ ưu tiên là mức giữ thông tin, không phải tất cả vẽ xuyên depth. P0 vẫn phải đúng bề mặt/độ hiển thị được phép; đòn ở tầng khác không liên quan không thành cảnh báo giả trên tầng người chơi. Một cảnh báo chưa được phép biết không được lộ chỉ vì có nhãn P0.

## 3. Ba mức hiển thị của một effect

| Mức | Giữ | Giảm |
|---|---|---|
| Đầy đủ | Hình chủ đạo, biên tác động, pha chuẩn bị/impact/kết thúc, motif và hạt phụ có kiểm soát. | Không cho phép vượt bounds hoặc che telegraph. |
| Gọn | Cùng hướng, thời điểm và hình chủ đạo; biên/đầu đạn, motif ngắn. | Bỏ phần lớn hạt, khói, flash và các lớp sáng chồng. |
| Chức năng | Chỉ dấu cần đọc: hình vùng, tiến độ, icon, đầu/đường projectile và xác nhận trúng cần thiết. | Bỏ trang trí; không bỏ thông tin P0/P1 còn liên quan. |

Không chỉ giảm opacity toàn effect: có thể làm biến mất biên nguy hiểm. Mỗi hiệu ứng phải có profile chức năng riêng. Đổi mức không restart clip, không spawn lại hit, không đổi duration, hitbox hoặc target. Hiệu ứng thuần P3 có thể ẩn hẳn.

## 4. Mức chi tiết theo đối tượng

| Đối tượng | Mặc định Cân bằng |
|---|---|
| Bản thân | Body/trang bị và kỹ năng đầy đủ; P3 tiết chế. |
| Mục tiêu đang chọn/boss liên quan | Body/vũ khí/hướng/cast và tín hiệu chức năng được ưu tiên. |
| Tổ đội gần | Body và họ vũ khí rõ; skill mức Gọn, vùng heal/bảo hộ hữu ích giữ dấu. |
| Người chơi khác gần | Silhouette và animation cơ bản, skill mức Chức năng theo quan hệ. |
| Đám đông xa | Giảm chi tiết trang phục và P3, giữ người hiện diện cần thiết theo visibility policy. |
| NPC dịch vụ | Dấu dịch vụ/tương tác và body cơ bản; không aura gọi chú ý lớn. |

Không thay người chơi bằng body nghề khác khi giảm chi tiết. Giảm chi tiết giữ chủng tộc, họ vũ khí, dáng cưỡi và trạng thái quan trọng. Khoảng cách dùng ngưỡng có hysteresis để tránh nhấp nháy qua lại; giá trị sẽ chọn sau đo scene, không suy từ pixel màn hình.

Không đồng nhất giới hạn render với số người trên server. Chính sách interest management/visibility do NET/SAFE quyết định; ART không tự cho client bỏ entity nguy hiểm hoặc ngừng cập nhật logic.

## 5. Ngựa, cánh, aura và triệu hồi

Cánh ngựa bản thân giữ nhận diện con ngựa và nhánh. Bản Gọn dùng ít cụm lông/mảng hơn, bớt hạt, giữ vị trí gốc và nhịp. Bản Chức năng của đồng đội có hình cánh gập/nhỏ trong profile đã vẽ để vẫn nhận ra tiến hóa; không cắt nửa ảnh hoặc thu ngựa sai tỷ lệ.

Ngựa không biến thành người đi bộ ở chế độ gọn. Giáp ngựa vẫn có mảng vật liệu/motif của bộ đồ nhưng giảm đường trang trí. Ẩn cánh không tự làm mất bị động; UI trạng thái vẫn phản ánh quyền thật.

Aura theo vùng: giữ biên chức năng khi cần vào/ra, giảm lớp xoáy/hạt bên trong. Aura thường trực có một vòng nhận diện nhẹ; không phát sóng lớn lặp liên tục chỉ để báo buff còn tồn tại. Nếu skill thật có pulse theo tick, pulse phản ánh sự kiện đó và không bị nhầm với cast mới.

Triệu hồi chiến đấu giữ body/hướng và đòn liên quan; không ẩn nó như pet trang trí khi nó có thể đánh hoặc nhận mục tiêu. Pet thuần mỹ phẩm được giảm/tắt riêng. Không gộp thực thể hoặc đổi số pet vì giảm hình.

## 6. Buff/debuff: thế giới và panel

Trên bản thân: tối đa ba dấu icon trên đầu, ưu tiên khống chế đang chặn hành động, DoT nguy hiểm và hiệu ứng cơ chế. Các effect còn lại nằm đầy đủ trong panel, có chỉ báo +N nếu cần. Số ba là giới hạn trình bày đã chọn, không số effect tối đa được phép tồn tại.

Trên mục tiêu: ưu tiên CC hiện hành, hiệu ứng cần phản ứng và debuff do bản thân gây; boss có thể ưu tiên debuff dùng chung như giảm giáp/kháng. Cho chọn Tất cả / Của tôi / Quan trọng. Chế độ Của tôi vẫn có dải cơ chế chung không được giấu, để không bỏ lỡ CC hoặc điểm yếu đội đang cần.

Trong panel, có nhóm Có lợi/Bất lợi, nguồn, stack và thời gian thật. Chảy máu/độc/bỏng là icon riêng; tăng giáp/giảm giáp/giảm kháng/lá chắn không gom thành Khiên. Hai effect trùng hình không tự gộp stack logic. Khi nhiều người áp cùng effect chia sẻ, UI dùng trạng thái tổng từ server và tooltip nguồn hợp lệ.

Hất tung giữ đọc được nhấc/đáp và bóng; giảm hạt không làm actor đứng đất trong khi đang airborne. Trói chân giữ dấu chân bị khóa. Lá chắn giữ dải pool/hiệu ứng vỡ cần thiết, giảm lớp cầu sáng bao thân trước.

## 7. Chữ số và flash

Cho ba chế độ số chiến đấu: Chi tiết, Gọn, Tối thiểu. Gọn gom trình bày tick cùng nguồn/loại trong cửa sổ thời gian do UI cấu hình sau, không gom packet damage hoặc thay kết quả combat. Damage/heal/shield và crit được phân loại rõ; không cộng crit vào tổng rồi vẫn hiện thêm số gây hiểu nhầm nhận hai hit.

Bản thân bị CC, shield vỡ, hiệu ứng miễn nhiễm và kết quả cast quan trọng có xác nhận ngắn; không flash trắng cả màn hình mỗi đòn. Giảm rung và giảm flash là tùy chọn độc lập mức hạt; tắt rung không mất marker thời điểm.

## 8. Cửa sổ thiết lập hiển thị

Ba preset: **Đầy đủ**, **Cân bằng** mặc định, **Ưu tiên chiến đấu**. Chỉnh riêng Bản thân / Tổ đội / Người khác / Kẻ địch; enemy chỉ giảm trang trí, không tắt dấu P0/P1 hợp lệ. Thêm mục cánh/ngựa, pet mỹ phẩm, số chiến đấu, số icon trên đầu, giảm flash và giảm rung.

Preview gồm vòng heal cạnh độc, hất tung/trói, boss AoE dưới cánh ngựa và hai tầng cầu. Có nút khôi phục, ghi rõ các thiết lập không đổi combat. Đây là yêu cầu cửa sổ cho UI, chưa phải toàn bộ SETTINGS đã hoàn thiện.

Không tự hạ preset người dùng vĩnh viễn. Nếu có chế độ giảm tải tự động sau này, chỉ giảm P3 rồi P2, báo trạng thái và cho khóa; không đổi mask giao chiến, entity nhận biết hoặc nguy hiểm bắt buộc.

## 9. Hợp đồng dữ liệu và ngân sách

Effect có semanticRole, relation, surface, encounterRelevance, visibility và các profile hình; tên là khái niệm biên tập, chưa là schema runtime. Nguồn effect gắn đồng đội không làm nó mặc định trở thành trang trí đồng minh: boss đặt bom lên người trong tổ đội vẫn P0.

Mỗi profile ghi sprite/layer/particle/đèn/bounds/duration thực tế sau sản xuất; không đặt cap hạt hoặc draw call giả khi chưa chọn renderer và thiết bị. Thử fixture 1/8/24 actor theo hồ sơ 38, cùng camera và đường diễn để so. Đo CPU/GPU/memory và khả năng đọc riêng; không dùng FPS cao để chứng minh báo đòn rõ.

## 10. Tiêu chí nghiệm thu và bàn giao

Cần ba profile cho effect mẫu, body/trang bị gọn, cánh ngựa gọn, mockup settings và ảnh/clip fixture. Phải thấy đòn địch đúng tầng trong cả ba preset; không mất bom trên đồng đội; không mất vùng heal cần đứng; root/airborne khác nhau; đổi profile giữa clip không nhân đòn hoặc nháy frame.

Đặc tả ART-06 đã hoàn thiện; chưa sản xuất/đo các đầu ra trên, không coi hiệu năng web hoặc scene 2.5D đã đạt. ART-01/02/04 vẫn một phần. Tổng **14/513 hoàn thiện thiết kế, 6 một phần, 493 chưa thiết kế**. Tiếp theo ART-07: chuẩn portrait/avatar và hệ icon; camera/pipeline tiếp tục chờ scene mẫu, thủ thành giữ nguyên.
