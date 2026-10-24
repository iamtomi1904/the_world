from pathlib import Path
p=Path('public/design-hub.js');s=p.read_text(encoding='utf-8')
for a,b in {'24hồ sơNPCđề xuất':'24 hồ sơ NPC đề xuất','82NPC':'82 NPC','24hồ sơNPC':'24 hồ sơ NPC','14current':'14 current','19nhánh':'19 nhánh','10vùng':'10 vùng','28tổ hợp':'28 tổ hợp','V01không':'V01 không','32×32đã':'32×32 đã','3race/7nghề/19nhánh':'3 race / 7 nghề / 19 nhánh','toànmap':'toàn map','native32':'native 32','nămPvE':'năm PvE','tuyếnPvE':'tuyến PvE','hotbar13ô':'hotbar 13 ô','4hướng':'4 hướng'}.items():s=s.replace(a,b)
p.write_text(s,encoding='utf-8')
print('Page copy spacing polished')
