# Tham khảo cho UI-07…12 và INPUT-01…04

**Ngày:** 21/10/2026. Chỉ nghiên cứu và thiết kế tài liệu, không code hoặc sử dụng asset của game tham khảo.

## Nguồn chính thức đã đọc

| Game | Nguồn | Thông tin sử dụng |
|---|---|---|
| Ragnarok Online | [Keyboard Shortcuts](https://renewal.playragnarok.com/gameguide/howtoplay_interface03.aspx) | Hướng dẫn liệt kê phím menu, shortcut và đóng các cửa sổ phụ. Dùng để đối chiếu tổ chức thao tác; không sao chép F-key/Alt/Ctrl vì game cần chạy trên web. |
| Tree of Savior | [UI and Basic Info](https://treeofsavior.com/page/guide/view.php?n=6) | Hướng dẫn có quickslot khóa chỉnh sửa, chat tùy cỡ chữ/độ trong, link item và bản đồ. Dùng để phát triển chống kéo nhầm và xem thông tin. |
| Tibia | [Interface Manual](https://www.tibia.com/gameguides/?section=interface&subtopic=manual) | Trích đoạn tìm kiếm có tooltip và action bar; lần truy cập đầy đủ trước trả 403. Không dùng số slot hoặc suy chi tiết chưa đọc. |

Ragnarok và Tree of Savior là tham khảo MMORPG sprite gần mục tiêu 2.5D; Tibia là tham khảo bổ sung về giao diện sprite, không coi ba game cùng một renderer/phong cách pixel V4. Trang ToS còn nhiều nội dung lịch sử, không dùng hệ cấp/class trong đó làm luật hiện hành của Ẩn Thành. Không dựa bài diễn đàn người chơi để xác nhận tính năng kỹ thuật.

## Cách áp dụng

Tách ý tưởng tham khảo với quyết định riêng: nguồn xác nhận cách tổ chức UI; Ẩn Thành tự chọn bind, giới hạn tám active, quyền class, CC, ngựa và thời điểm mở tính năng. Không sao chép auto-target, dual-weapon, cơ chế dash, economy hay thông số từ các nguồn trên.

Các thông số độ trễ tooltip/giữ nút/ngưỡng kéo được ghi cấu hình chờ thử, không bịa tiêu chuẩn từ game khác. Mobile/gamepad là thiết kế mở rộng chưa cam kết phát hành, không sao chép điều khiển PC thành hỗ trợ mobile đã đạt. Giữ hình 2.5D pixel V4, overlay chữ rõ theo UI-01.

## Hồ sơ bàn giao

53 UI-07 tooltip; 54 UI-08 rebind; 55 UI-09 chat/focus; 56 UI-10 xác nhận; 57 UI-11 vòng đời cửa sổ; 58 UI-12 tiếp cận; 59 INPUT-01 PC/web; 60 INPUT-02 mobile tương lai; 61 INPUT-03 gamepad tương lai; 62 INPUT-04 nhấn/giữ/kéo. Tất cả là hồ sơ đặc tả, chưa có runtime, mockup đầy đủ, API, asset hoặc kết quả kiểm thử.
