# GEAR-14 — Ngoại hình, tủ đồ và hiển thị theo nhánh

**Ngày:**21/10/2026 · **Trạng thái:** Hoàn thiện đặc tả V1 trong phạm vi mục; chưa code, vẽ hoặc kiểm chứng cân bằng bằng gameplay.

**Đầu vào:** [Slot148](148_GEAR_01_SLOT_VU_KHI_VA_QUYEN_MAC.md), [ma trận152](152_GEAR_04_MA_TRAN_NGAN_SACH_TRANG_BI.md), [affix154](154_GEAR_06_POOL_DONG_THUOC_TINH.md), [số dòng155](155_GEAR_07_SO_DONG_TIER_VA_QUY_TAC_ROLL.md), [ngân sách81](81_STAT_11_NGAN_SACH_VA_MOC_CAN_BANG.md). Chỉ MMORPG, không sửa thủ thành.

## 1. Tách ba tầng

Instance gear quyết stat/quyền; visual profile quyết cách dựng hình trên race/nhánh; entitlement quyết người chơi có quyền chọn skin nào. Một skin không tạo item thứ hai, đổi binding đồ đang mặc, reset procICD hoặc kích hoạt set. Outfit hiển thị có thể giống bộ4món dù người chơi mặc đồ lẻ; UI phải phân biệt hình ảnh và set gameplay.

Quyền mở từ gameplay mặc định account trong server MMORPG, không chia level/quest/gear cho nhân vật khác. Mỹ phẩm shop khai báo rõ phạm vi account/server/chế độ theo16. Ví Tinh Thạch chung không tự cho skin MMORPG hoạt động trong thủ thành hoặc mọi server khi chưa có quyền/asset tương thích. Không đổi quy tắc tiền nạp.

## 2. Mở hình và áp dụng

Món gameplay có skin được mở lần đầu khi equip/binding hợp lệ. Với mónUNBOUND, menu “Mở ngoại hình” phải báo sẽ khóa nhân vật, xác nhận rồi bind+grant quyền nguyên tử; không mở rồi bán nguyên món tự do cho tài khoản tiếp theo. Món không có unlockSkinKey không bị phá hoặc khóa chỉ vì xem trước. Mở lại quyền đã có không cho tiền/vật phẩm hoặc lần thưởng mới.

Chọn skin đã mở miễn phí ngoài combat trongV1, không cần consumable đổi hình. Chỉ áp ở slot/family hợp lệ: kiếm không giả cung/sách, pháp bào không giả silhouette trọng giáp. Skin1H không phủ lên2H; bộ dao chỉ dùng skin bộdao. Không đổi hurtbox, điểm phát projectile, timing/collider hoặc khoảngreach theo kích thước tranh.

## 3. Races, nhánh và ngựa

Tất cả skin phát hành cần variant/rig cho tổ hợp thực sự cho phép, ba race và các hướng/động tác theo art2.5DV4. Không yêu cầu28biến thể cho một món chỉ một nhánh, nhưng mọi tổ hợp có quyền mua/dùng phải có hình hợp lệ. Chưa có asset tương thích thì khóa nhận/mua và ghi lý do, không dùng ảnh sai tạm mà coi đã hoàn thiện.

PAL/DKN dùng bảng ánh xạ gear/skin người→giápngựa theo34; cùng instance vẫn một nguồn armor. Cánh tiến hóa theo nhánh và từng con ngựa, không đổi tốc/range vì skin cao cấp. Nếu skin được công bố hỗ trợ mounted thì bắt buộc có horseArmorProfile hợp lệ; không tự lấy motif không tương thích. HGD giữ giáp ngựa theo profile phù hợp, không tự nhận cánh tiến hóa củaPAL/DKN.

## 4. Tủ đồ và UI

Tab Ngoại hình trong trang nhân vật: lọc đã mở/chưa mở/family/slot, mannequin3race, trạng thái đi bộ/cưỡi, xoay hướng và xem Idle/Move/Attack/Cast. Đồ chưa mở hiện nguồn đã biết hoặc “Chưa khám phá”, không lộ kết cục truyện. Preview không chi tiền; mua/mở quyền là bước xác nhận riêng, có scope rõ.

Lưu một appearance presetV1độc lập hai skillpreset, không đổi gear stats. Cho ẩn đầu hoặc hiệu ứng trang trí tùy chọn nếu profile cho phép, nhưng không ẩn vũ khí combat/khiên đang dùng hoặc trạng tháiCC/skill telegraph. Chế độ giảm VFX giữ tín hiệu cần đọc. Không thêm phím mới tranh13ô; mở qua icon/tab, kế thừa hệ cửa sổ hiện có.

## 5. Asset manifest và QA tương lai

Mỗi unlockSkinKey cần icon pixel, slot/family mask, rig/race/nhánh, mount mapping khi quảng bá, anchor/hướng, animation layer vàLOD. Atlas/frames là đầu ra phải vẽ mới theoV4; hiện chỉ đặc tả, chưa có skin/bộgiáp đãvẽ. Không dùng glow/particle phủ cảthân để che thiếu động tác.

Cần test bind+unlockretry, đổiweb/PC,28tổhợp hợp lệ, body/mountclipping, hình2.5Dchồngtầng, đặtsetvisualkhôngsetbonus và quyềnkhácserver/mode. Chưa đóng ART/MOUNT hoặc productiongate chỉvìGEAR-14cóhồsơ.
