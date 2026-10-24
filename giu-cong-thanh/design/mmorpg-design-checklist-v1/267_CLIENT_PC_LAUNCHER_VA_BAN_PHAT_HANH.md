# 267 — Client Windows: launcher và bản phát hành local

24/10/2026. Tiếp nối266. Mục tiêu: có bảnPC tìm được, mở được, phục hồi khi server chưa bật và tải được từweb. Không đổi chế độ thủ thành hoặc thêmcombat/MMO trong đợt này.

## Đã triển khai

- [x] BảnWindowsx64 v0.2.0, metadata/iconẨnThành, EXE đónggói thực.
- [x] Màn hình kết nối sáng, nhất quán màu kem/xanh củaweb, có nhập địa chỉ và thửlại.
- [x] Kiểm tra đúngserverẨnThành vàPostgreSQL trước khi vào trangđăngnhập.
- [x] Ghi nhớ máy chủ đã kết nối thành công; HTTP chỉ cho loopback, máy chủonline dùngHTTPS.
- [x] Bridge native chỉ trênlauncher; remote game/login không truy cậpNode hoặcAPIclient.
- [x] Profile riêng cho QA, không đổi profile/thôngtin đăngnhập thật củangườichơi.
- [x] File `Choi-An-Thanh.cmd`: bậtserver/PostgreSQL khi cần rồi mở bảnclient theo manifest.
- [x] Giữbackend chạy khi đóngclient; không xóa tài khoản/nhânvật hoặc tựdừng appchiếm cổng.
- [x] ZIPportable đầyđủEXE/DLL/resources/locales/hướngdẫn; manifest cóSHA-256.
- [x] Trang `/client.html`, nútClientWindows trong gameweb và downloadZIP dạngstream.

## Phím và cơ chế

F8 vềmàn hình máy chủ; F11 toànmànhình. WASD/mũitên vàF dùng cơ chếgame chung. Chọnserver không bỏquađăngnhập. Cùngaccount/cùngserver dùng cùng nhânvậtPostgreSQL; quyềnđiềukhiển vẫn chỉmộtphiên.

`desktop/main.cjs` kiểmtrasenderframeIPC, chỉ phục vụ bốnfile UI được liệt kê qua `anthanh-client://launcher/`. Không mởtoànbộfilesystem, không exposespawn hoặcipcRenderer tổngquát. ProtocolHTTPSkiểmtraTLS mặcđịnh, không bỏqua certificateerror.

LocalCMD làtiệních của máypháttriển, không nằm trongZIPphá hành như mộtbackend đónggói. Máy nhậnZIP cầnserveronline hoặcbackendlocal đã córiêng.

## Artifact

- `release/pc-0.2.0/AnThanh-win32-x64/AnThanh.exe`.
- `release/AnThanh-PC-0.2.0-win-x64.zip`.
- `release/latest-client.json`: phiênbản, EXE, tênZIP, bytes, SHA-256.
- `CLIENT_PC.md`: hướngdẫn mở, build và cácgiớihạn.

## Kiểm thử / giới hạn

Hai testpolicyURL vàchín testmap/sharedlogic đãđạt. QA thực thiEXE bằngprofiletạm có18kiểmtrađạt: ngoạituyến, thửlại, chọnserver, đăngnhập, nhânvật, movement/lưuDB, cáchlyrenderer vàmenu native đăngkýF8; kếtquảcuối tại `public/mmorpg/assets/pc-v02-qa.json`. Ảnhlauncher/game chụp từchínhclientđónggói. Tài khoản QA đượcxóa sau thử.

TrangtảiZIP có5kiểmtrađạt: nút tảiphiênbản đúng, manifest/hash/bytes khớp, HTTPheaderZIP, chữkýPK vàmàn390px khôngtràn. Liệtkêarchive bằngtar xácnhậnEXE, DLL, resources, locales vàhướngdẫn. ASAR có13entry, không`.env`, PostgreSQL hoặcpgdata. FileEXE cóProductNameẨnThành/FileVersion0.2.0.

Launcherlocal đãthử2trạngthái: serverđangchạy vàserverđãtắt. Cảhai nhậnđúngPostgreSQL vàsẵn sàng; nhánhservertắt tựkhởiđộngđược. ProbeIPv4 tránhWindowsPowerShell chờlocalhostIPv6 trongkhiNodelistenIPv4.

Không báo hoànthiệnMMO: chưacombat/nhiệmvụ/nhiềungườicùngmap, chưaserverpublic, codesign, installer, auto-update hoặc kiểmthửWindows trên nhiềucấuhìnhmáy. Bảnpháthành nàyhoànthiện luồngclient local/portable.
