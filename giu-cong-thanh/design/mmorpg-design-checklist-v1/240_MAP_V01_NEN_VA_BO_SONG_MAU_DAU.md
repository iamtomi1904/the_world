# Map 1 — Nền và bờ sông, mẫu đầu r012

23/10/2026 · [Bộ mẫu và thử lặp](/design-preview/v01-ground-bank-r012/index.html).

## Phạm vi

Vẽ nguồn riêng cho nền cỏ, nền đất và một bảng nghiên cứu bốn dạng bờ theo art target r009. Không cắt nguồn từ ảnh toàn cảnh. Đây là mẫu đầu cho nhóm P0 trong hồ sơ 239; chưa bộ autotile hoặc asset hoàn tất.

## Chuẩn hình

Cỏ làm lớp nền yên, không chứa hoa hoặc bụi lớn; cụm cỏ và vật trang trí có sprite riêng. Đất có sắc vàng ấm và cụm màu nhỏ, không phủ dày sỏi. Giữ cùng hướng sáng trên trái; nước xanh lạnh, đất bờ ấm. Không đổi góc nhìn 2.5D hay tỷ lệ nhân vật đã chọn.

Nguồn tạo sinh được lưu nguyên, trang thu về ô thử 64×64 bằng nearest-neighbor. Đây là kích thước kiểm tra, chưa chốt texel density cho engine. Cần kiểm tra nhiễu, mối nối và scale tại kích thước chơi. Không mặc định ảnh được yêu cầu seamless là đã seamless.

## Bộ bờ cần có

| Dạng | Mục đích | Điều kiện |
|---|---|---|
| Thẳng | Mép bờ dài | Cùng chiều cao, điểm vào/ra mép khớp |
| Lồi | Mũi đất | Không làm hẹp sông ngoài thiết kế |
| Lõm | Vịnh/chỗ đổi hướng | Góc trong kín, không lỗ nền |
| Bãi sỏi | Xuống vùng nông | Có vùng đi được, độ dốc và ranh sâu riêng |

Bảng hình chỉ nghiên cứu silhouette và vật liệu, chưa 16 miếng bờ hoặc bộ 47 tile. Khi sản xuất cần bốn hướng mỗi loại phù hợp góc camera; không xoay nguyên hình có mặt đứng và bóng để giả đủ hướng. Water mesh đi sát chân bờ, mặt đứng bờ không in sẵn dòng nước chuyển động.

## Bản xem

- Lặp cỏ hoặc đất 3×3, giữ tỷ lệ ô vuông.
- Có đường biên ô để tìm nơi màu/chi tiết bị đứt.
- Ghép đường trên cỏ bằng mask pixel kỹ thuật, chưa mép cỏ vẽ riêng.
- Nguồn và prompt được lưu cùng trang; không thay thế asset của thủ thành.

## Checklist

- [x] Brief riêng cho cỏ, đất và bốn cấu trúc bờ.
- [x] Trang xem nguồn, lặp và thử mask đường.
- [ ] Duyệt palette, pixel cluster và mật độ chi tiết của nguồn mới.
- [ ] Dọn đường nối đối diện và kiểm tra lặp không lộ đường kẻ.
- [ ] Vẽ mép chuyển đất/cỏ với góc trong/ngoài và biến thể.
- [ ] Chuyển bảng bờ thành mô-đun tách có phần khuất và điểm nối chính xác.
- [ ] Ráp vào cảnh 2.5D, kiểm tra cao độ/collision sâu-nông.
- [ ] Kiểm tra tỷ lệ với nhân vật và ánh sáng của nhà/cầu.

Bước tiếp: chỉnh hai ô nền theo kết quả lặp, sản xuất một đoạn bờ thẳng và một góc có khả năng nối thật, thử ghép trước khi nhân biến thể. Không tăng checklist tổng 525=128/14/383 hoặc báo đạt G1–G5 từ bảng mẫu.

## Nhận xét mẫu và kiểm tra trang

Nguồn cỏ còn mật độ cụm màu cao, cần giảm tương phản/mật độ ở lượt chỉnh tiếp; chưa đạt ý đồ nền yên chỉ bằng việc có nguồn mới. Nguồn đất có thể lộ nhịp sỏi khi lặp. Bảng bờ đọc được bốn cấu trúc nhưng còn nước/bọt vẽ liền, phải sản xuất lại thành layer trước khi làm dòng chảy. Ba chế độ xem và ảnh tải đúng, trang không tràn ngang ở 390px, không pageerror trong lượt QA. [Kết quả](/design-preview/v01-ground-bank-r012/qa.json).
