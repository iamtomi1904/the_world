# CUR-01 — Hoàn thiện ba icon tiền32×32, bản r002

**Ngày:**21/10/2026 · **Trạng thái:** Hoàn thiện CUR-01 trong phạm vi thiết kế và asset icon. Người dùng đã cho phép xử lý pixel bằng Python; không dùng API/CLI tạo ảnh mới. Giữ nguyên concept r001.

## 1. Bảng kiểm kích thước thật

![Ba icon32×32 trên nền tối, nền sáng và thang xám](/assets/mmorpg/currency/r002/currency_native_contact_sheet__r002.png)

Bảng trên ghép từ **chính ba PNG32×32**, hiển thị1×/2×/8×bằng NEAREST; không sinh lại hình bằng AI. Bản nhỏ là kích thước thật, bản lớn chỉ phóng nguyên lần để xem cụm pixel. Text/khung kiểm không nằm trong sprite.

## 2. Tệp bàn giao

| Tiền | Icon key | PNG32×32 |
|---|---|---|
| Tinh Thạch | currency_premium_crystal_32 | [Tải PNG](/assets/mmorpg/currency/r002/currency_premium_crystal_32__r002.png) |
| Ngân Ấn | currency_bound_seal_32 | [Tải PNG](/assets/mmorpg/currency/r002/currency_bound_seal_32__r002.png) |
| Đồng Elarion | currency_elarion_coin_32 | [Tải PNG](/assets/mmorpg/currency/r002/currency_elarion_coin_32__r002.png) |

Thư mục:`public/assets/mmorpg/currency/r002/`. Kèm `manifest.json`, `processing_recipe.md` vàcontactsheet. AssetID100001…100003giữ từconcept, revisionr002là bản xuất chuẩn. Nguồnconceptvàpromptgốc vẫn ở`public/assets/mmorpg-concepts/currency/r001/`.

## 3. Chuẩn đã đạt và kiểm tra

Cả baPNGđều32×32RGBA, alpha0/255, tối đa5màuopaque, tối thiểu2pxmargin. Tinh Thạch cóbounds8,2→23,30; Ngân Ấn2,2→29,30; Đồng Elarion2,2→30,30. Bounds ghi theo quy ước right/bottom exclusive. Một hình chính liền mạch, không có pixel rác tách rời. Tâm lỗvuôngĐồng Elarion alpha0.

Đã xem contact sheet: silhouette cao/vuông/tròn rõ trên nềnrêu; nền sáng cho thấy viền tối không bị halo; bản thang xám vẫn tách hình dù mất màu. Khối tinh thể giữ dạng hẹp có chủ ý, không kéo ngang cho bằng xu. Không có text/số/khungrarity baked vàoPNG.

Kiểm tệp vàSHA256xác nhậnconceptkhôngbịghiđè. Manifestcópalette,bounds,hashnguồn/đích,revisionvàpublicUrl. CờruntimeReady=truechỉnghĩaassetđúngformatcóthểthamchiếu; `integratedInGameplay=false` giữ vì chưa sửa game/logicví.

## 4. Quyết định CUR-01

Tên/mã3tiền, đơnvịnguyên1vàcáchhiểnthịtheo166giữ nguyên. Chỉhoànthiệnảnhvàchuẩnđầura, khôngđổigiá/cap/ratehoặcnguồnpháttiền. Bảngmàu5màuđượcghi trongmanifest r002, thayhướngmàu thamchiếukhi triểnhình thực.

CUR-01đượctickhoànthiệnsaukiểmassetthật; khôngchỉtạoUIhoặctext. KhôngđánhđồngiconhoànthiệnvớiCUR-08walletwindow,PAY,PostgreSQLschema,ARTcamera hoặc logicthanhtoánđãxong.

## 5. Tiến độ và tiếp theo

**107 hồ sơ hoàn thiện /8 một phần /398 chưa thiết kế =513.** CUR-01từmộtphần→hoànthiện, khôngthêmtask. Bước kếtiếplàCUR-02: phạmviquyềnsởhữuví/account/server/modevàvòngđờikhi xóanhânvật/chuyểnserver. Lượtnàychỉhoànthiệnicon, chưabắtđầuCUR-02.

Khôngsửacodegame,assetthủthành,migrationdatabasehoặcvậtphẩmgameplay. Chưachạytestgame/browser; kếtquảởđâylàQAassetvàkiểmliênkết/checklist.
