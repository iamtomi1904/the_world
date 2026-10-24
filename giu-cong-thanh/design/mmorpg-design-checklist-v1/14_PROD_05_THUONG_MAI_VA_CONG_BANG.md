# PROD-05 — Triết lý thương mại và nguyên tắc công bằng

**Phiên bản:** 1.0 · **Ngày:** 20/10/2026 · **Mốc:** M0 định hướng, M1 thương mại.  
**Trạng thái:** Đã hoàn thiện thiết kế V1 trong phạm vi mục; chưa triển khai.
**Người soạn:** Trợ lý thiết kế · **Người duyệt:** Chủ dự án.  
**Đầu vào:** PROD-01…04, yêu cầu ba loại tiền và hạn mức account. Viết mục mới không đồng nghĩa duyệt các mục trước.

## 1. Mục tiêu

Đề xuất game miễn phí tiếp cận truyện chính, doanh thu ưu tiên ngoại hình và dịch vụ không tạo sức mạnh chiến đấu. Người không nạp có đường chơi và phát triển đầy đủ; đồ tốt và lựa chọn build đến từ gameplay. Đây là triết lý đề xuất, chưa phải mô hình kinh doanh đã được chủ dự án chốt.

**Yêu cầu đã có:** tiền nạp, tiền khóa và đúng một tiền không khóa dùng giao dịch người chơi; tiền không khóa có thể nhận từ một số sự kiện được phép và phải có giới hạn nhận theo account. Tên tiền, phạm vi và con số dưới đây chưa được duyệt nếu không ghi rõ.

## 2. Ba loại tiền

| Tiền — tên đề xuất | Nguồn | Nơi dùng | Giới hạn định hướng |
|---|---|---|---|
| Tinh Thạch — tiền nạp | Đơn thanh toán hợp lệ đã đối soát. | Ngoại trang/dịch vụ có danh mục được duyệt. | Không giao dịch, gửi người khác hoặc đổi sang Đồng Elarion trong phương án đề xuất. |
| Ngân Ấn — tiền khóa | Quest, hoạt động PvE, thưởng phù hợp và bán NPC theo bảng thiết kế. | Dịch vụ phát triển, chế tác/nâng đồ, shop cá nhân theo danh mục. | Không chuyển P2P hoặc đổi thẳng sang tiền tự do. |
| Đồng Elarion — tiền không khóa | Nguồn phát hành có whitelist/cap; nhận chuyển giao từ người chơi khác. | Chợ, giao dịch trực tiếp và các khoản tiêu hủy được duyệt. | Có sổ nguồn phát hành, hạn mức account và phí/thuế theo hồ sơ sau. |

Theo PROD-07 và yêu cầu mới, tiền nạp dùng ví toàn account chung mọi chế độ; tiền gameplay dùng ví theo account trong từng server, nhân vật cùng account/server cùng dùng hạn mức. Hai nền tảng web/PC dùng chung ví. Chưa có chuyển tiền liên server, đổi ra tiền thật hoặc đổi hai chiều giữa các tiền.

Không tạo loại vàng/bạc giao dịch thứ hai. Tài nguyên, vật phẩm hoặc điểm chuyên dụng không được ngầm trở thành tiền thay thế phổ quát để né chính sách.

## 3. Danh mục thương mại đề xuất

| Nhóm | Hướng xử lý | Điều kiện |
|---|---|---|
| Trang phục/skin vũ khí | Cho phép đề xuất bán. | Không cộng chỉ số; không đổi hitbox/tầm đánh; vẫn nhận biết class và trạng thái. |
| Ngoại hình thú cưỡi/cánh | Cho phép đề xuất bán. | Chỉ đổi hình; không mở bay, tăng tốc hoặc đặc quyền combat so với phương tiện tương ứng. |
| Portrait, khung tên, biểu cảm | Cho phép đề xuất bán. | Không giả danh quản trị, không che cảnh báo hoặc gây khó đọc chiến đấu. |
| Hiệu ứng trang trí | Cho phép có điều kiện. | Có tùy chọn giảm/ẩn phù hợp; tín hiệu báo đòn và trạng thái combat không bị thay bằng hình gây hiểu nhầm. |
| Đổi ngoại hình/tên | Có thể bán dịch vụ. | Preview/xác nhận, giữ danh tính nội bộ và lịch sử cần thiết; không dùng để xóa trách nhiệm báo cáo. |
| Slot nhân vật bổ sung | Cân nhắc sau. | Số slot miễn phí phải đủ phạm vi đã chọn; thêm slot không tăng cap account hoặc farm thưởng account thêm lần. |
| Túi/kho | Chưa ưu tiên bán bản đầu. | Dung lượng miễn phí phải đủ vòng chơi; không cố tạo bất tiện rồi bán cách gỡ. Nếu cân nhắc sau phải xét lợi thế farm/chợ. |
| Pass ngoại trang | Để sau khi nội dung và vận hành ổn định. | Quyền lợi, thời hạn, cách nhận và mức cam kết chơi rõ; không khóa truyện/sức mạnh sau pass. |

Ngoại trang nhiệm vụ/thành tựu cũng cần nhận diện riêng. Không mặc định mọi ngoại hình đẹp đều chỉ mua bằng tiền nạp.

## 4. Danh mục không đề xuất bán

- Công, HP, giáp, tốc đánh, xuyên giáp, tỷ lệ/sát thương bạo kích hoặc may mắn trực tiếp.
- Trang bị chiến đấu, ngọc sức mạnh, buff combat hoặc quyền nâng cấp độc quyền.
- Tăng tỷ lệ rơi đồ, may mắn, cơ hội roll affix hoặc lợi ích loot chỉ người nạp có.
- Tăng trần sức mạnh, trần hệ phát triển, điểm skill hoặc quyền vượt cơ chế boss.
- Tiền không khóa trực tiếp; vật phẩm nạp đổi/giao dịch ra tiền không khóa.
- Hồi sinh trả phí tạo lợi thế trong lượt boss, bỏ phạt hoặc vượt giới hạn lượt chỉ bằng nạp.
- Tự động chiến đấu/farm nhận tài sản hoặc chế độ offline kiếm tài nguyên dành riêng người nạp.
- Vé bỏ qua truyện/phát triển sức mạnh và tăng XP trả phí trong phương án bản đầu.
- Hộp ngẫu nhiên trả phí trong phương án bản đầu. Hộp nhận bằng gameplay vẫn cần bảng xác suất GIFT riêng.

VIP cộng chỉ số/loot hoặc bỏ giới hạn kinh tế xung đột với phương án này. Nếu chủ dự án chọn mô hình khác, phải lập thay đổi, đánh giá tác động và cập nhật lời hứa sản phẩm trước khi duyệt; không lén thêm quyền lợi dưới tên tiện ích.

## 5. Khóa và đường chuyển giá trị

Đề xuất sản phẩm mua bằng Tinh Thạch khóa account, không bán NPC lấy tiền tự do, không đưa lên chợ/gửi thư/tặng người khác trong bản đầu. Hoàn trả quyền sở hữu cùng account khác với chuyển cho người chơi khác.

**Tiền khóa không chuyển thẳng sang tiền tự do, nhưng gameplay có thể tạo vật phẩm bán được.** Ví dụ nguyên liệu tự kiếm cộng phí Ngân Ấn để chế tác món được giao dịch là đường kinh tế gián tiếp; không coi đó là lỗ hổng mặc định, cũng không bỏ qua tác động. Mỗi công thức phải khai báo đầu vào, binding đầu ra, nguồn vật liệu và khả năng kiếm lời ở CRAFT/ECON. Không cho dùng tiền nạp thay phí/nguyên liệu rồi bán đầu ra nếu chưa duyệt đường chuyển giá trị đó.

Quà nạp, hoàn tiền, phân giải, mail, voucher và gói hỗn hợp phải cùng được xét trong sơ đồ dòng giá trị. Không được mở đường quy đổi bị cấm bằng một bước trung gian.

## 6. Nguồn tiền tự do và hạn mức account

**Đề xuất:** cap nguồn do game sinh tách khỏi việc nhận tiền P2P. Giao dịch chỉ chuyển đồng đã có, không tự tạo tiền mới; chính sách chống lạm dụng P2P có thể có giới hạn riêng nhưng không nhầm hai mục đích.

- Chỉ sự kiện/hoạt động được chỉ định mới sinh Đồng Elarion. Quái thường không mặc định thả tiền tự do; vẫn có thể thả vật phẩm được giao dịch theo LOOT/ITEM.
- Cap tính chung nhân vật cùng account/server; xóa/tạo lại nhân vật hoặc đổi web/PC không reset quyền nhận.
- Đề xuất dùng kỳ tuần để giảm áp lực đăng nhập mỗi ngày. Mức cap, múi giờ, giờ reset và rollover chưa chốt ở mục này.
- Số đã phát hành cho account, số còn lại và nguồn tính cap phải xem được trước khi làm hoạt động.
- Khi thưởng vượt phần cap còn lại: đề xuất nhiệm vụ/sự kiện phải có quy tắc nhận phần còn lại và quà khóa thay thế được công bố, hoặc giữ quyền nhận theo cơ chế riêng. Không tự chọn một cách cho mọi nguồn khi chưa có CAP/LOOT.
- Không tiêu hộp/vé rồi âm thầm mất phần thưởng. Nếu chưa thể preview/xử lý cap đúng, chưa cho thao tác nhận.
- Hoàn trả giao dịch không được tạo tiền hoặc ngốn cap hai lần. Bồi hoàn quản trị và hoàn tiền cần mã nghiệp vụ, lịch sử và chính sách riêng.

Cap mỗi account không ngăn người tạo nhiều account. SAFE/ECON phải thiết kế điều kiện nhận và phát hiện lạm dụng; không chỉ dựa IP để phạt cả gia đình/chỗ chơi chung. Không đề xuất giao dịch tiền tự do trước khi chính sách nguồn/cap và nhật ký có thiết kế đầy đủ.

## 7. Nguồn sinh, nơi tiêu và đời sống kinh tế

| Dòng | Ví dụ đề xuất | Yêu cầu |
|---|---|---|
| Sinh tiền khóa | Quest, PvE, bán NPC theo danh mục. | Có tốc độ kiếm và chi phí tương ứng trong ECON. |
| Tiêu tiền khóa | Học/đổi lựa chọn, chế tác, nâng đồ theo hệ đã duyệt. | Không khóa đường truyện sau chi phí vượt khả năng kiếm ở mốc đó. |
| Sinh tiền tự do | Một số sự kiện đạt điều kiện. | Whitelist, cap, tránh phát trùng. |
| Chuyển tiền tự do | Chợ/P2P. | Hai bên chuyển tài sản nguyên tử, không tăng cung tiền. |
| Tiêu hủy tiền tự do | Thuế/phí thị trường hoặc dịch vụ được chọn. | Phần bị tiêu hủy phân biệt tiền chuyển cho người bán; mức phí chốt sau. |
| Tiêu tiền nạp | Mua ngoại hình/dịch vụ hợp lệ. | Giá cuối, quyền sở hữu và lịch sử rõ. |

Không đặt giá hay thuế bằng cảm tính trong PROD-05. ECON cần dự báo nguồn sinh/tiêu, vận tốc giao dịch, mức tích lũy và kịch bản bot trước khi duyệt con số. Nhiều sink không có nghĩa kinh tế tự cân bằng.

## 8. Tác động của may mắn và bạo kích

May mắn tối đa 15% có tác dụng loot và phần dư chuyển damage crit là yêu cầu đã ghi trong PROD-04. Tỷ lệ chuyển đổi, cách tăng loot và cách cộng may mắn vẫn chưa chốt; đề xuất 1:1 hoặc cách hiểu tốc đánh ở câu trả lời trước không được coi là đã duyệt.

Theo triết lý thương mại đề xuất, không bán may mắn hoặc crit từ phần dư; không bán thêm lượt roll cho bảng loot chiến đấu. LOOT/CAP phải xác định may mắn có tác động bảng nào, có áp dụng nguồn tiền tự do không và cách tránh làm sai cap. Không mặc định may mắn tăng mọi phần thưởng/tiền.

## 9. Giao diện và quyền lợi minh bạch

Cửa hàng tách tab **Ngoại trang / Dịch vụ / Lịch sử**; nạp là thao tác riêng, không tự mua khi thiếu tiền.

Mỗi sản phẩm phải có preview đúng nhân vật, giá cuối, loại tiền, nội dung gói, phạm vi sở hữu account/nhân vật, trùng sở hữu, hạn dùng, giới hạn mua và điều kiện hoàn lại. Món không thêm sức mạnh cần diễn đạt rõ, không dùng chỉ số giả để làm đẹp quảng cáo.

Có xem trước trước khi mua, xác nhận thao tác có phí, trạng thái đang chờ/thành công/thất bại và biên nhận. Nhấn lặp không mua thêm ngoài ý định. Không tự thay giá khi người dùng đang xác nhận; giá thay đổi phải được xem lại.

Ví tách ba số dư với tên/icon và tooltip; tiền bị giữ trong yêu cầu chờ không được coi là có thể tiêu. Ngoài game có đường xem nguồn tải, lịch sử đơn và hỗ trợ phù hợp. Nội dung thúc mua không che cảnh báo boss hoặc cưỡng ép xuất hiện sau mỗi lần chết.

Asset cần thiết kế sau: icon ba tiền, bộ icon shop/dịch vụ, ảnh preview, nhãn khóa và thành phần biên nhận. Chưa vẽ asset hoặc wireframe ở mục này.

## 10. Backend, PostgreSQL và vận hành

Backend quyết định số dư, quyền nhận, cap, đơn và quyền sở hữu. PostgreSQL lưu giao dịch, biến động ví, quyền sở hữu, hạn mức và định danh chống xử lý trùng; không chỉ lưu một số dư cuối rồi mất nguồn tra cứu.

Đơn thanh toán có mã duy nhất và được xác minh theo tích hợp được chọn; callback/trang báo thành công từ client không đủ để cấp tiền. Trùng thông báo không cấp lại. Kết quả thành công đến muộn, hết hạn, hủy, hoàn tiền và chargeback cần quy trình PAY/OPS riêng.

Mua hàng cần cập nhật số dư và quyền lợi nhất quán. Giao dịch P2P/chợ cần trao tiền/đồ hoặc không trao, xử lý đồng thời và ngắt kết nối. Chính sách bồi hoàn không mặc định phát thêm tài sản tùy ý.

Web/PC dùng cùng danh mục/số dư/giá server; khác kênh thanh toán nếu có phải minh bạch và thiết kế riêng. Chưa chọn nhà cung cấp, tỷ giá, phí, thuế hoặc chính sách pháp lý; cần đánh giá trước khi thu tiền thật. Bản mẫu không mở thanh toán thật.

## 11. Tình huống duyệt sau này

| Tình huống | Điều cần chứng minh |
|---|---|
| Không nạp | Đi truyện, học skill và xây build đầy đủ trong phạm vi gameplay đã duyệt. |
| Mua skin | Không thay chỉ số, hitbox, tầm đánh hoặc tín hiệu cơ chế. |
| Nạp/mua bị gửi lại | Chỉ có một kết quả hợp lệ cho cùng yêu cầu nghiệp vụ. |
| Đổi nhân vật/web/PC | Không sinh thêm cap hoặc thay số dư/quyền sở hữu. |
| Sát cap mở quà | Biết số thực nhận và cách xử lý phần vượt trước khi tiêu vật phẩm. |
| Dùng tiền khóa chế tác đồ bán | Đường giá trị có chủ đích, nguồn vật liệu/binding/kinh tế đã được xét. |
| Hoàn tiền hoặc giao dịch đang chờ | Không nhân đôi tài sản; có trạng thái và quy trình xử lý rõ. |
| Nhiều account dùng chung mạng | Phân biệt dấu hiệu lạm dụng với sinh hoạt hợp lệ; có hỗ trợ/khiếu nại. |

Chưa thực hiện kiểm thử thanh toán, kinh tế hoặc gameplay. Đây là yêu cầu hồ sơ và tiêu chí đánh giá tương lai.

## 12. Các quyết định cần duyệt

1. Miễn phí tiếp cận truyện, ưu tiên bán ngoại hình và dịch vụ không tạo sức mạnh.
2. Không bán chỉ số, đồ chiến đấu, may mắn, XP, tiền tự do hoặc hộp ngẫu nhiên trả phí trong phương án bản đầu.
3. Tiền nạp không đổi/giao dịch sang tiền tự do; sản phẩm nạp khóa account.
4. Đề xuất ví/cap theo account trong từng server, cap nguồn game sinh tách P2P và kỳ tuần.
5. Bản mẫu không thu tiền; chỉ mở thương mại khi hồ sơ kinh tế, đối soát, hỗ trợ và hoàn tiền được duyệt.

Tên ba tiền, giá, tỷ giá, mức cap, thuế, slot miễn phí và chính sách cụ thể còn chờ CUR/CAP/PAY/ECON. Không tự đánh dấu PROD-05 hoàn tất hoặc xem các đề xuất là cam kết đã phát hành.

**Mục tiếp theo:** PROD-06 — phạm vi M0/M1/M2/X và ngân sách thiết kế/asset; chọn rõ bản đầu có bao nhiêu nội dung và những gì để sau.

## 13. Nhật ký

| Ngày | Phiên bản | Nội dung | Trạng thái |
|---|---|---|---|
| 20/10/2026 | 1.0 | Triết lý thương mại, dòng tiền, cap, danh mục bán, UI và yêu cầu dữ liệu. | Đề xuất chờ duyệt. |

## 14. Cập nhật tiền nạp chung chế độ · 20/10/2026

Tiền nạp Tinh Thạch là một ví account chung cho MMORPG và thủ thành, không chuyển đổi hay nhân bản theo chế độ/server. Sản phẩm phải khai báo chế độ/server/nhân vật được dùng; ví chung không đồng nghĩa quyền lợi chung. Đơn, trừ tiền, cấp quyền, hoàn trả và chống xử lý trùng đều truy về cùng ví. Tiền khóa/tự do gameplay và cap vẫn riêng. Xem quy tắc chi tiết tại [PROD-07, mục 15](16_PROD_07_SO_HUU_VA_TIEN_DO.md).

## Cập nhật trạng thái theo ủy quyền · 20/10/2026

Chủ dự án đã ủy quyền tự phân tích và quyết định, không cần chờ duyệt từng mục. Hồ sơ này được ghi nhận **đã hoàn thiện thiết kế V1 trong phạm vi mục**. Những câu “chờ duyệt” trong lịch sử/bản soạn trước được thay thế về trạng thái bởi ghi nhận này; các phương án là quyết định thiết kế có thể điều chỉnh, không phải xác nhận đã code hoặc đã kiểm thử. Thông số thuộc hồ sơ chuyên môn khác tiếp tục theo task tương ứng, không tự đánh dấu chúng hoàn tất.

## Ghi nhận chấp thuận và phạm vi mới · 20/10/2026

Chủ dự án chấp thuận các hướng còn lại sau khi điều chỉnh quy mô thế giới. Phần giới hạn bản đầu chỉ ở vùng 1–10/10 NPC được thay bằng [PROD-06 V2](15_PROD_06_PHAM_VI_VA_NGAN_SACH.md): năm vùng mở, cấp 45, dungeon/boss/rương và cinematic. Quy tắc tiền nạp chung chế độ vẫn giữ. “Tăng ngân sách” ở ngữ cảnh này là nội dung/asset, không tự tăng ngân sách chỉ số chiến đấu. Các thông số chuyên môn chưa được nêu tiếp tục thiết kế theo task, không bị coi là đã xác định chỉ bởi chấp thuận tổng quát.
