from pathlib import Path
p=Path('public/roadmap.html');s=p.read_text(encoding='utf-8');needle=' <div class="sidebar-heading">TÀI LIỆU HỆ THỐNG'
assert needle in s
s=s.replace(needle,' <nav class="hub-links" aria-label="Trang chuyên đề"><a href="/story.html">▤ Cốt truyện & Lore ↗</a><a href="/visual-design.html">◈ Thiết kế hình ảnh ↗</a></nav>\n'+needle,1)
p.write_text(s,encoding='utf-8')
p=Path('public/roadmap.css');p.write_text(p.read_text(encoding='utf-8')+'\n/* Dedicated design hubs */\n.hub-links{display:grid;gap:7px;margin:14px 0 18px}.hub-links a{display:block;padding:11px 13px;border:1px solid #526343;background:#203523;color:#e3d8ad;text-decoration:none;font-size:12px;line-height:1.5}.hub-links a:hover{border-color:#b3aa70;color:#fff0bc}\n',encoding='utf-8')
print('Roadmap links to story/visual hubs added')
