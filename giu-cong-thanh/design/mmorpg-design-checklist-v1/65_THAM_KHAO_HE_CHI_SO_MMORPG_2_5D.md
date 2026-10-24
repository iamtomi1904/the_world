# Nghiên cứu hệ chỉ số MMORPG sprite/2.5D

**Ngày:** 21/10/2026. Đầu vào ROAD-02 và STAT-01…09; không lấy asset hoặc áp công thức game khác vào source.

| Nguồn chính thức | Điều xác nhận | Bài học áp dụng |
|---|---|---|
| [Ragnarok Online — Status](https://renewal.playragnarok.com/gameguide/howtoplay_basicsystem03.aspx) | Hướng dẫn phân biệt STR/AGI/VIT/INT/DEX/LUK và đầu tư theo nghề. | Tách thuộc tính gốc với đầu ra chiến đấu; không sao chép LUK vì may mắn Ẩn Thành đã có quy tắc riêng. |
| [Tree of Savior — Status/Skills/Attributes](https://treeofsavior.com/page/guide/view.php?n=10) | Tài liệu phân nhóm STR/CON/INT/SPR/DEX, tăng trưởng và điểm đầu tư, hiển thị đóng góp. | Chỉ số cần có nguồn và cách giải thích; không copy cấp, hệ class hoặc hệ số. |
| [Tree of Savior — Combat System Changes Dossier Pt.1](https://treeofsavior.com/page/news/view.php?n=948) | Bài đội phát triển ngày 10/05/2017 giải thích hạn chế của công trừ giáp và lý do đổi công thức. | Dùng phòng thủ tỷ lệ để giáp thông thường không tạo miễn thương. Đây là bài học lịch sử, không khẳng định công thức hiện hành của ToS. |

Ragnarok/ToS là tham khảo MMORPG sprite gần hướng 2.5D, không cùng renderer, chất pixel V4 hoặc mô hình action của dự án. Không suy từ đồ họa pixel rằng phải có accuracy/evasion RNG. Không dùng bình luận diễn đàn làm nguồn công thức.

Hồ sơ 66–75 là thiết kế riêng theo ủy quyền: phân biệt yêu cầu chủ dự án, quyết định mô hình và cấu hình cân bằng V1 cần thử. Không tuyên bố các số đã cân bằng thành công.

Giữ: haste/penetration trần100% và cộng phần còn lại; affix nhóm hiếm tối đa5% đầu vào; luck loot15%, dư1:1 vào crit bonus; haste100%=gấp đôi tần suất nền; 13 ô skill/item, ba race/bảy nghề/19 nhánh, cap45, PostgreSQL authoritative. Thủ thành giữ nguyên.
