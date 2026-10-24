> **24/10/2026:** Lỗi bộ trụ rời trùng đã xử lý trong [r025 / hồ sơ253](253_MAP_V01_SUA_TRU_CAU_VA_MASK_BO_SUNG.md) bằng hai mask bổ sung của một nguồn. r024 lưu để đối chiếu; chưa nghiệm thu prefab/map.

# Map 1 — Bộ cầu đá và lan can r024

23/10/2026 · [Bản xem cầu và thứ tự lớp](/design-preview/v01-stone-bridge-r024/index.html).

## Thiết kế theo r009

Cầu một vòm thấp, mặt lát đá hơi cong, parapet thấp và trụ đầu cầu vuông. Đá xám ấm, rêu nhẹ trong kẽ, ánh sáng trên trái. Không đổi thành cầu thành lũy hoặc thêm đèn/hoa vào sprite. Nước và bờ tách khỏi cầu.

Bộ lớp dự kiến: thân cầu gồm deck, lan can xa và khối vòm chịu lực; lan can gần là lớp riêng để che phần chân actor. Khoảng vòm phải trong suốt để thấy lớp nước dưới. Không lấy toàn bộ silhouette cầu làm collider đường đi.

## Nguồn mới

Imagegen tích hợp tạo nguồn hai cột bằng tham chiếu r009. Bản r001 vẫn có lan can trước trong thân, cần sửa tách lớp; giữ nguồn để đối chiếu. Yêu cầu lượt sửa bỏ phần railing nâng trên mặt cầu, giữ khối vòm chịu lực và sàn, căn lớp lan can gần theo cùng tọa độ nguồn.

Tách frame không đồng nghĩa các lớp đã hoàn chỉnh. Phải kiểm tra hình thực tế trước khi duyệt, đặc biệt phần lan can còn dính trong thân. Bản xem có cutout128, giữ PNG nguyên.

## Bản thử

Canvas800×450, actor40px. Đi ngang tự động hoặc A/D, mũi tên và nút chạm. Actor được vẽ giữa lớp thân và lan can gần. Tắt lớp gần để xem chân và so thứ tự. Nước nền minh họa, không flow map thực hoặc sông trong map chính.

Đường chân dùng đường cong màn hình với archRise12px, span320px; chưa collider/cao độ vật lý. Tham số tọa độ nguồn và offset được lưu trong bridge-manifest.json, có thể chỉnh rồi tải JSON. Không mở đi dưới cầu hoặc bơi.

## Checklist

- [x] Brief cầu riêng theo đúng r009, nước không vẽ vào asset.
- [x] Nguồn có khung thân và lan can riêng để kiểm tra.
- [ ] Duyệt thân không còn railing gần bị vẽ trùng, không mất vòm chịu lực.
- [ ] Hai lớp khớp scale/anchor và không quầng alpha.
- [ ] Duyệt tỷ lệ actor, độ cong, màu và pixel so với cầu gốc.
- [ ] Mesh/collision đường lên, deck, lan can và cao độ trong scene2.5D.
- [ ] Nước xuyên vòm và occlusion được kiểm tra ở góc camera thật.

Cảnh chính r020 giữ nguyên. Bản xem cầu là fixture asset, không phải map mới thay mẫu đẹp. Tổng525=128/14/383 giữ nguyên; chưa production/G1–G5.

## Kết quả revision r002 và QA

Deck phía gần đã bớt phần railing nâng trong lượt sửa, nhưng hai trụ gần vẫn còn trong thân, khi ghép với trụ của lớp gần có thể trùng. Không báo đã tách lớp hoàn chỉnh. Bản thử dịch lớp gần30px theo nguồn để đo; chưa anchor cuối. Nguồn có hình của frame thân tràn sang lề frame gần, nên frame gần lấy x1100,w948 và đệm trái76px trên canvas1024 để bỏ vùng tràn mà giữ hệ tọa độ. Cần bố trí lại sheet/cắt lớp chính thức sau này.

Đã kiểm tra đi tự động, A/D, bật/tắt lan can, xuất JSON và không tràn ngang390px; không pageerror. [QA](/design-preview/v01-stone-bridge-r024/qa.json). Khung kỹ thuật dùng nền đơn giản để soi lớp, không phải phong cách thay cảnh r009/r020.

Bước kế tiếp: sửa trụ bị trùng và chuẩn hóa mốc đầu cầu, sau đó so tỷ lệ deck với actor và đường gốc. Chưa thêm cầu mới hoặc thay cảnh chính khi bộ này chưa đạt.
