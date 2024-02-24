---
category:
  - Pengumuman
icon: iconfont icon-update
order: 1
comment: false
---

# Catatan Perubahan

## 1.9.6 <Badge text="latest" type="tip" />

- New ➕
  - Added customized background image feature, users now can open background image folder and add images they like [#357](https://github.com/DGP-Studio/Snap.Hutao/issues/357)
  - Added responsive settings page, layout will be update while window size and shape changes, [@Scighost](https://github.com/Scighost) realized this feature [#1337](https://github.com/DGP-Studio/Snap.Hutao/issues/1337)
  - Added container loopback status and unlocker feature in Feedback Center
  - Added displaying current network proxy status feature in Feedback Center
- Fix 🔨
  - Fixed `653366069` error when submit Spiral Abyss data [#1351](https://github.com/DGP-Studio/Snap.Hutao/issues/1351)
  - Fixed `653366069` error when sync character from MiHoYo BBS Battle Chronicle and Development Plan sources
  - Adapt new Asia server UID rule
  - Fixed the issue that font size in game announcements are too small [#1347](https://github.com/DGP-Studio/Snap.Hutao/issues/1347)
  - Fixed MiYouShe QR code login issue, now ZZZ login page is used to handle QR code login method [#1345](https://github.com/DGP-Studio/Snap.Hutao/issues/1345)
  - Replace unreadable text in character voice/story with normal text in Character WIKI [#1316](https://github.com/DGP-Studio/Snap.Hutao/issues/1316)
  - Fixed the display issue in Home Dashboard when Parametric Transformer is not achieved [#1331](https://github.com/DGP-Studio/Snap.Hutao/issues/1331)
  - Fixed the issue that in some cases, swap Home Dashboard to bottom side would cause the client to crash [#1365](https://github.com/DGP-Studio/Snap.Hutao/issues/1365)
- Optimization ✨
  - User's MiHoYo BBS accounts in Account Panel can be dragged and reordered now, to allow users to have a better operation experience [#1334](https://github.com/DGP-Studio/Snap.Hutao/issues/1334)
  - Game account records in Game Launcher can be dragged and reordered now, to allow users to have a better operation experience
  - Optimized title text in Wish Export (`Statistics` is renamed to `Global Wish Stats`) [#1344](https://github.com/DGP-Studio/Snap.Hutao/issues/1344)
  - Optimized text under Resource Download page in Game Launcher (`Client` is renamed to `Full Package`) [#1279](https://github.com/DGP-Studio/Snap.Hutao/issues/1279)
  - Optimized image download error hint in wizard [#1333](https://github.com/DGP-Studio/Snap.Hutao/issues/1333)
  - Update Spiral Abyss wave information text of Genshin Impact version 4.4
  - Added permission error hint in Realtime Notes notification settings
  - Limited download thread for client update package
  - Added two new resolutions in Game Resolution Quick Settings
  - Allow developers using NamedPipe to activate the application <Badge text="Developers Feature" type="tip" />
  - Make Windows App SDK embedded
  - Optimized Win32/COM API calls
  - Redesigned client UI to fit background images
- Localization 🌏
  - Portuguese (PT-BR) is now a new client language, thanks to contribution from [@t0piy](https://github.com/t0piy)

## 1.9.5

- New ➕
  - Added monitor identification button in game launcher [#1261](https://github.com/DGP-Studio/Snap.Hutao/issues/1261)
  - Brand new Feedback Center is introduced [#1039](https://github.com/DGP-Studio/Snap.Hutao/issues/1039)
- Fix 🔨
  - Fixed the issue that when the game in under `Program Files` path, `server conversion failed` error would be raised [#1262](https://github.com/DGP-Studio/Snap.Hutao/issues/1262)
  - Fixed the issue that static packages download cannot be completed in the setup wizard [#1242](https://github.com/DGP-Studio/Snap.Hutao/issues/1242)
- Optimization ✨
  - Added support of changing proxy settings during Snap Hutao is running
  - Added game status in Game Launcher Card in the dashboard
  - Added data folder size auto refresh after server conversion cache is deleted
  - Optimized the logic to identify whether server conversion is needed when game launch process is requested
  - Optimized the English translation

## 1.9.4 <Badge text="hotfix" type="warning" />

- Fix 🔨
  - Fixed the crash issue for Bilibili server users when entering the main window

## 1.9.3

- Fix 🔨
  - Fixed the crash issue for new users when entering the main window

## 1.9.2

- New ➕
  - Added Windows native HDR option in Game Launcher
  - Added support of HoYoverse accounts in Game Launcher account switch feature
  - Added option of deleting server conversion cache file in Settings page
  - Added restart as admin option in Settings page
  - Added the function of sharing pictures to the clipboard in WebView
- Fix 🔨
  - Fixed the issue that some MiHoYo BBS pages operations cannot be done in Webview
  - Added conspicuous mark of Admin Mode on windows title to indicate whether if Snap Hutao is running as administrator
  - Fixed game path error after server conversion
  - Fixed the document link on Spiral Abyss page
- Optimization ✨
  - Added account identification field in Real-time Note data forwarding webhook
  - All options in Danger Zone on Settings page now have double confirmations
  - Change to way of game account switch from PowerShell of directly modify regedit to avoid error when Windows Long Path is not enabled
  - Optimized UI of auto-click feature shortcut settings card
  - Added checks for special paths such as Program Files during server conversion
  - Optimized the scrolling performance of WebView on some pages
  - Optimized the performance of Discord Activity

## 1.9.1 <Badge text="hotfix" type="warning" />

- **Fix 🔨**
  - Fixed crash on Game Launcher page when user text zoom is not set as 100%
  - Fixed crash caused by Realtime Notes during the program startup
  - Fixed the issue where Realtime Notes may be loaded simultaneously with user account information, result in reentrancy
- **Optimizations ✨**
  - Enhanced prompt to add or select game path in Game Launcher

## 1.9.0

::: important Perubahan Berpotensi Merusak

Snap Hutao baru-baru ini mendapatkan sponsor dari SignPath Foundation untuk sertifikat tanda tangan kode. Mulai dari versi 1.9.0, kami akan menggunakan sertifikat baru untuk menandatangani paket instalasi Snap Hutao.

Program dengan tanda tangan baru akan tidak kompatibel dengan versi lama. Pengguna yang memperbarui dari versi 1.8.4 ke versi 1.9.0 dan versi yang lebih baru perlu menghapus versi lama terlebih dahulu dan kemudian melakukan instalasi ulang dari versi baru dari klien. Karena desain direktori data Snap Hutao, pengguna tidak akan kehilangan data penting apa pun.

Anda dapat membaca artikel [Penjelasan Perubahan Berpotensi Merusak di Versi 1.9.0](../blog/version-1-9-0-breaking-changes.md) untuk pemahaman yang lebih mendalam tentang bagaimana perubahan tanda tangan dalam pembaruan versi ini memengaruhi proyek Snap Hutao.

:::

- **Fitur Baru ➕**

  - Launcher game sekarang mendukung beberapa jalur permainan [#525](https://github.com/DGP-Studio/Snap.Hutao/issues/526)
  - Menambahkan metode login QR code untuk miHoYo di panel pengguna [#870](https://github.com/DGP-Studio/Snap.Hutao/issues/870)
  - Klien sekarang secara otomatis mendeteksi status jaringan dan menampilkan hasilnya di halaman pengaturan [#1116](https://github.com/DGP-Studio/Snap.Hutao/pull/1161)
  - Menambahkan opsi di launcher game untuk memulai Genshin Impact dalam mode sentuh [#1173](https://github.com/DGP-Studio/Snap.Hutao/issues/1173)
  - Menambahkan opsi dalam pengaturan untuk mengaktifkan konsol. Pengguna sekarang dapat memperoleh lebih banyak pesan kesalahan saat memecahkan masalah dengan mengaktifkan opsi ini.
  - Memperkenalkan logika sepenuhnya baru untuk pembaruan perangkat lunak.

- **Perbaikan Bug 🔨**

  - Memperbaiki masalah dengan miHoYo API mengembalikan kesalahan `5003` saat mengambil informasi karakter [#1060](https://github.com/DGP-Studio/Snap.Hutao/issues/1060)
  - Memperbaiki masalah dengan data hitungan mundur yang tidak benar untuk pengumuman miHoYo dalam situasi tertentu.
  - Memperbaiki pernyataan PowerShell yang tidak benar.

- **Optimalisasi ✨**

  - Meningkatkan pernyataan pesan kesalahan dalam perhitungan pengembangan, membuat pesan kesalahan lebih eksplisit [#1163](https://github.com/DGP-Studio/Snap.Hutao/issues/1163)
  - Mengoptimalkan antarmuka perhitungan pengembangan, sekarang menampilkan tujuan spesifik untuk setiap item [#1016](https://github.com/DGP-Studio/Snap.Hutao/issues/1016)
  - Mengoptimalkan tampilan informasi akun Hutao pada antarmuka utama, tidak lagi menampilkan alamat email pengguna [#1160](https://github.com/DGP-Studio/Snap.Hutao/issues/1160)
  - Memperbarui pesan kesalahan untuk Hutao API.
  - Mengoptimalkan antarmuka halaman pengaturan; pengguna sekarang dapat melihat ukuran direktori data dan cache yang dihasilkan oleh Snap Hutao di pengaturan.

- **Lokalisasi 🌏**
  - Menambahkan opsi bahasa Indonesia dalam klien, terima kasih kepada [@NatsumeAoii](https://github.com/NatsumeAoii) atas penyediaan terjemahan [#1188](https://github.com/DGP-Studio/Snap.Hutao/issues/1188)
  - Memperbarui terjemahan untuk bahasa yang sudah ada.

## 1.8.5 <Badge text="Uji Beta" type="info" />

- Menguji perubahan yang disebabkan oleh perubahan sertifikat.

## 1.8.4 <Badge text="terbaru" type="tip" />

- Perbaikan
  - Memperbaiki masalah dengan daily-checkin yang menunjukkan akhir kegiatan.
  - Memperbaiki masalah bahwa `pwsh.exe` tidak dapat dipilih sebagai host PowerShell [#1145](https://github.com/DGP-Studio/Snap.Hutao/issues/1145) [#1153](https://github.com/DGP-Studio/Snap.Hutao/issues/1153)
  - Memperbaiki kesalahan bahasa tampilan ketika Snap Hutao digunakan oleh perangkat lunak pihak ketiga [#1147](https://github.com/DGP-Studio/Snap.Hutao/issues/1147)
  - Memperbaiki kesalahan PowerShell tidak ditemukan pada pintasan desktop [#1151](https://github.com/DGP-Studio/Snap.Hutao/issues/1151) [#1154](https://github.com/DGP-Studio/Snap.Hutao/issues/1154)
- Optimalisasi
  - Memperbarui teks pesan Snap Hutao Cloud
  - Mengoptimalkan kinerja pelacakan Aktivitas Discord pada awal dan akhir permainan
  - Mengoptimalkan kinerja perubahan server, unduhan multi-thread di konten multipart sekarang diaktifkan
  - Mengoptimalkan logika perubahan server, Snap Hutao tidak akan memeriksa izin penulisan folder sebelum tugas

## 1.8.3 <Badge text="hotfix" type="tip" />

- Perbaikan
  - Memperbaiki masalah crash ketika klien Discord tidak berjalan [#1134](https://github.com/DGP-Studio/Snap.Hutao/issues/1134)
  - Memperbaiki waktu catatan wish yang salah [#1138](https://github.com/DGP-Studio/Snap.Hutao/issues/1138)
- Optimalisasi
  - Termasuk lingkungan .NET dengan paket

## 1.8.1

- Tambah
  - Menambahkan fungsi sinkronisasi Aktivitas Discord dalam _Game Launcher_, ini akan menyinkronkan status game saat memainkan Genshin Impact [#1082](https://github.com/DGP-Studio/Snap.Hutao/issues/1082)
- Perbaikan
  - Memperbaiki masalah navigasi dari halaman _Wish Export_ pada panel _Hutao Cloud_ ke halaman _Spiral Abyss_ yang tidak menyinkronkan opsi bilah navigasi [#1116](https://github.com/DGP-Studio/Snap.Hutao/issues/1116)
  - Memperbaiki masalah bahwa fitur _Auto Click_ tidak dapat diikat dengan tombol `Alt` [#1119](https://github.com/DGP-Studio/Snap.Hutao/issues/1119)
  - Memperbaiki masalah pembaruan item setelah beralih rencana di _Dev Plan_ [#1099](https://github.com/DGP-Studio/Snap.Hutao/issues/1099)
  - Memperbaiki masalah bahwa hanya file json dengan nama kosong yang dapat diimpor di halaman `Achievement` [#1124](https://github.com/DGP-Studio/Snap.Hutao/issues/1124)
  - Memperbaiki tautan unduhan paket penuh di halaman _Resource Download_ di _Game Launcher_, digantikan dengan tautan file terpisah [#1126](https://github.com/DGP-Studio/Snap.Hutao/issues/1126)
  - Memperbaiki masalah pemberitahuan dari _Realtime Note_, termasuk konten yang salah, pemberitahuan berulang, dan melewati mode klien secara tak terduga [#1123](https://github.com/DGP-Studio/Snap.Hutao/issues/1123)
- Optimalisasi
  - Menambahkan aturan pembaruan lembur untuk Fingerprint/CookieToken, pengguna tidak perlu mengklik `Refresh Cookie` di _User Panel_ begitu sering [#1121](https://github.com/DGP-Studio/Snap.Hutao/issues/1121)
  - Membuat ulang tata letak halaman _Character WIKI_
  - Menambahkan teks petunjuk saat tidak ada akun MiHoYo BBS yang masuk [#1127](https://github.com/DGP-Studio/Snap.Hutao/issues/1127)

## 1.8.0

- **Meningkatkan versi .NET menjadi 8** [#1103](https://github.com/DGP-Studio/Snap.Hutao/issues/1103)
- Perbaikan
  - Memperbaiki masalah terjemahan dengan peringatan pendaftaran/logout/reset password _Hutao Passport_ [#1087](https://github.com/DGP-Studio/Snap.Hutao/issues/1087) oleh @Tangweirui2021
  - Memperbaiki masalah dengan item baris pertama pada halaman _Dev Plan_ yang tidak menyegarkan dengan benar setelah beralih rencana [#1099](https://github.com/DGP-Studio/Snap.Hutao/issues/1099)
  - Memperbaiki masalah pada halaman _Game Launcher_ di mana borderless dan exclusive fullscreen tidak dapat diatur secara bersamaan [#1106](https://github.com/DGP-Studio/Snap.Hutao/issues/1106)
  - Mengganti implementasi pemilih file, menyelesaikan masalah tidak dapat menggunakan pemilih file di bawah hak administrator [#1096](https://github.com/DGP-Studio/Snap.Hutao/issues/1096)
  - Memperbaiki masalah di mana inisialisasi informasi pengguna saat startup dapat menyebabkan pembekuan program
  - Memperbaiki pengecualian yang tidak perlu terjadi pada halaman tertentu setelah beralih dari
  - Memperbaiki masalah dengan beberapa pengecualian yang tidak ditangkap dengan benar
- Optimalisasi
  - Menambahkan informasi kegagalan yang lebih detail untuk inisialisasi metadata

## 1.7.17

- Perbaikan
  - Memperbaiki masalah bahwa item pertama dalam Rencana Dev tidak menyegarkan setelah beralih rencana [#1079](https://github.com/DGP-Studio/Snap.Hutao/issues/1079)
  - Memperbaiki masalah bahwa URL catatan wish untuk server global tidak dapat ditemukan [#1081](https://github.com/DGP-Studio/Snap.Hutao/issues/1081)
  - Memperbaiki masalah bahwa log kesalahan tidak dapat ditangkap dengan benar dalam beberapa situasi tertentu
  - Memperbaiki masalah waktu catatan wish yang salah
  - Memperbaiki pengecualian data dalam pop-up web MiHoYo BBS
  - Memperbaiki masalah pengaturan radius sudut yang salah pada halaman riwayat/karakter/senjata dalam Riwayat Wish
  - Memperbaiki waktu pengumuman yang salah dalam zona waktu selain UTC+8
- Optimisasi
  - Mengoptimalkan antarmuka pop-up web MiHoYo BBS, mendukung fitur mundur dan refresh, mendukung menampilkan judul web
  - Fitur klik otomatis sekarang dapat dimatikan dan hot key dapat diubah [#961](https://github.com/DGP-Studio/Snap.Hutao/issues/961)
  - Menambahkan dukungan format impor dan ekspor UIGF v2.4
    - Menambahkan inferensi zona waktu berdasarkan server akun [#830](https://github.com/DGP-Studio/Snap.Hutao/issues/830)

## 1.7.16

- Tambah
  - Tambahkan dropdown peralihan cepat resolusi layar di Game Launcher [#1062](https://github.com/DGP-Studio/Snap.Hutao/issues/1062)
  - Tambahkan dukungan untuk mengizinkan pengguna berkolaborasi dengan [Starward](https://github.com/Scighost/Starward) dengan Snap Hutao untuk mengumpulkan statistik waktu bermain game [#1071](https://github.com/DGP-Studio/Snap.Hutao/issues/1071)
  - Tambahkan opsi salin tautan unduhan sumber daya di Game Launcher [#1074](https://github.com/DGP-Studio/Snap.Hutao/issues/1074)
- Perbaikan
  - Memperbaiki masalah bahwa MiHoYo BBS mengembalikan kesalahan `5003` saat mengambil data [#1060](https://github.com/DGP-Studio/Snap.Hutao/issues/1060)
  - Memperbaiki masalah bahwa halaman tidak dapat digulir dalam beberapa situasi tertentu [#1068](https://github.com/DGP-Studio/Snap.Hutao/issues/1068) [#1072](https://github.com/DGP-Studio/Snap.Hutao/issues/1072)
  - Memperbaiki masalah bahwa level keterampilan karakter tidak ditampilkan di My Character [#1069](https://github.com/DGP-Studio/Snap.Hutao/issues/1069)
- Optimisasi
  - Mengoptimalkan logika tampilan pembaruan log [#1015](https://github.com/DGP-Studio/Snap.Hutao/issues/1015)
  - Pilihan pengaturan pengguna pada setiap tombol akan diingat secara global [#778](https://github.com/DGP-Studio/Snap.Hutao/issues/778)
  - Meningkatkan stabilitas klien

## 1.7.15

- Tambah
  - Menambahkan opsi untuk memulihkan cadangan catatan riwayat wish lengkap dari layanan Snap Hutao Cloud ke dalam arsip baru [#886](https://github.com/DGP-Studio/Snap.Hutao/issues/886)
- Perbaikan
  - Memperbaiki masalah bahwa parameter peluncuran game tidak valid dapat diparsing; menambahkan sakelar untuk beberapa parameter peluncuran [#1061](https://github.com/DGP-Studio/Snap.Hutao/issues/1052)
  - Memperbaiki masalah bahwa pengguna tidak dapat mendaftar akun Snap Hutao di klien [#1059](https://github.com/DGP-Studio/Snap.Hutao/issues/1059)
  - Memperbaiki masalah pemberitahuan setelah Url Webhook Realtime Note diatur
- Optimisasi
  - Mengoptimalkan logika penggantian kata sandi akun Snap Hutao dan logika hapus akun di klien

## 1.7.14 <Badge text="hotfix" type="tip" />

- Memperbaiki masalah yang menyebabkan program crash saat membuka dialog tertentu yang spesifik [#1052](https://github.com/DGP-Studio/Snap.Hutao/issues/1052) [#1054](https://github.com/DGP-Studio/Snap.Hutao/issues/1054)

## 1.7.13

- Tambah
  - Menambahkan opsi untuk meneruskan data Realtime Note ke webhook yang ditentukan [#431](https://github.com/DGP-Studio/Snap.Hutao/issues/431)
  - Menambahkan rentang tanggal catatan riwayat wish [#899](https://github.com/DGP-Studio/Snap.Hutao/issues/899)
  - Menambahkan tampilan detail Poin Petualangan di Realtime Note, mendukung tampilan status Poin Petualangan saat ini [#1021](https://github.com/DGP-Studio/Snap.Hutao/issues/1021)
- Perbaikan
  - Memperbaiki `Argument error` saat menggunakan peluncur cepat dari task bar dalam beberapa kondisi tertentu [#925](https://github.com/DGP-Studio/Snap.Hutao/issues/925)
  - Memperbaiki masalah crash saat menggunakan peluncur lanjutan dalam beberapa kondisi tertentu [#1035](https://github.com/DGP-Studio/Snap.Hutao/issues/1035)
  - Memperbaiki masalah bahwa tidak dapat kembali pada browser MiHoYo BBS yang disematkan [#1023](https://github.com/DGP-Studio/Snap.Hutao/issues/1023)
  - Memperbaiki masalah pada konversi server dari server bilibili ke server global [#1041](https://github.com/DGP-Studio/Snap.Hutao/issues/1041)
  - Memperbaiki masalah bahwa Snap Hutao tidak dapat mengidentifikasi status klien game
  - Memperbaiki masalah pada status Snap Hutao Cloud di halaman ekspor wish, setelah beralih akun Snap Hutao [#903](https://github.com/DGP-Studio/Snap.Hutao/issues/903)
- Optimisasi
  - Menambahkan dukungan lokal pada pemberitahuan yang dikembalikan oleh server Snap Hutao Cloud
  - Redesain UI Snap Hutao Passport, dan sekarang disematkan dalam halaman pengaturan [#911](https://github.com/DGP-Studio/Snap.Hutao/issues/1021)
  - Redesain halaman peluncur game lanjutan
  - Pengguna sekarang dapat melihat dan memilih parameter peluncur dalam peluncur game lanjutan

## 1.7.11 <Badge text="hotfix" type="tip" />

- Memperbaiki kesalahan argumen peluncuran game (hotfix)

## 1.7.10

- Perbaikan
  - Memperbaiki masalah login dengan akun HoYoverse [#1011](https://github.com/DGP-Studio/Snap.Hutao/issues/1011) [#1012](https://github.com/DGP-Studio/Snap.Hutao/issues/1012)
  - Memperbaiki masalah check-in harian pada akun HoYolab [#1013](https://github.com/DGP-Studio/Snap.Hutao/issues/1013)
  - Memperbaiki masalah bahwa kesalahan `Invalid item` muncul saat bahasa tidak sesuai dengan file data UIGFv2.2 [#1001](https://github.com/DGP-Studio/Snap.Hutao/issues/1001)
  - Memperbaiki masalah crash saat Url CAPTCHA tidak valid diatur dalam pengaturan
  - Memperbaiki masalah crash saat pengaturan channel tidak valid diberikan saat meluncurkan game
  - Memperbaiki crash saat beralih akun sementara versi WebView2 Runtime terlalu rendah untuk memiliki fitur yang diperlukan
  - Memperbaiki masalah crash saat rekaman yang tidak valid ditampilkan di halaman Spiral Abyss
  - Memperbaiki masalah overflow memori pada halaman tersemat
- Optimisasi
  - Akun game saat ini sekarang dapat diidentifikasi secara otomatis saat mencapai halaman peluncur game

## 1.7.7

- Ditambahkan bayangan kartu pada elemen-elemen berikut untuk mengoptimalkan efek visual:
  - Dashboard dan pengumuman dalam game
  - Kartu unduhan sumber daya di halaman peluncur game lanjutan
  - Kartu Gambaran Umum di halaman ekspor wish
  - Kartu Statistik di halaman ekspor wish
  - Catatan waktu nyata
  - Tampilan daftar pada halaman karakter saya
  - Kartu gambar di Character WIKI
  - Kartu gambar di Weapon WIKI
- Perbaikan
  - Memperbaiki kesalahan margin atas di bawah tampilan grid
  - Memperbaiki masalah crash tampilan grid dari beberapa penyebab
  - Memperbaiki masalah konversi server dari server CN ke server Bilibili
- Optimisasi
  - Mengoptimalkan posisi tombol untuk validasi akun manual
    - Sekarang dapat ditemukan langsung dari panel akun
  - Menambahkan logika percobaan ulang untuk mengambil rekaman abyss dan unggah rekaman
    - Pengguna yang tidak mengatur API verifikasi CAPTCHA dapat mencoba ulang setelah memvalidasi akun secara manual dari panel akun

## 1.7.6

- Tambah
  - Menambahkan fitur klik otomatis mouse yang dipicu oleh F8, di bawah mode hak administrator
    - Dalam versi Genshin Impact 4.1 dan 4.2 mendatang, fitur ini dapat membantu Anda melewati beberapa percakapan tugas yang tidak Anda sukai
- Perbaikan
  - Memperbaiki masalah crash saat beralih akun setelah memvalidasi cookie di halaman Realtime Notes [#947](https://github.com/DGP-Studio/Snap.Hutao/issues/947)
  - Memperbaiki kegagalan mencocokkan akun in-game saat ini setelah me-reboot Snap Hutao dan klien game [#865](https://github.com/DGP-Studio/Snap.Hutao/issues/865)
  - Memperbaiki masalah tampilan di halaman Prestasi [#956](https://github.com/DGP-Studio/Snap.Hutao/issues/956)
  - Memperbaiki masalah metadata Genshin Impact 4.1 yang menyebabkan program crash di halaman Spiral Abyss
- Optimisasi
  - Mengoptimalkan beberapa detail antarmuka pengguna pada beberapa halaman
  - Mengoptimalkan warna teks pengumuman dalam situasi tertentu
  - Mengoptimalkan logika unduhan gambar statis

## 1.7.5 <Badge text="terbaru" type="tip" />

- Tambah
  - Menambahkan nomor versi untuk setiap prestasi
  - Menambahkan data gelombang monster di halaman Data Abyss (data disediakan oleh [@妮可少女](https://space.bilibili.com/3537104994831140))
  - Menambahkan tombol peringkat Microsoft Store di halaman pengaturan [#876](https://github.com/DGP-Studio/Snap.Hutao/issues/876)
  - Menambahkan tombol dokumen di atas panel pengguna, pengguna akan diarahkan ke dokumen halaman saat ini saat mengkliknya [#875](https://github.com/DGP-Studio/Snap.Hutao/issues/875)
- Perbaikan
  - Memperbaiki tampilan kartu peluncur game di dashboard yang menunjukkan masalah akun kosong [#924](https://github.com/DGP-Studio/Snap.Hutao/issues/924)
  - Memperbaiki status prestasi yang tidak dapat disimpan saat dicentang secara manual [#880](https://github.com/DGP-Studio/Snap.Hutao/issues/880)
  - Memperbaiki masalah verifikasi Realtime Note pada akun MiHoYo BBS yang salah
  - Memperbaiki masalah data statistik spiral abyss yang kadang hilang
- Optimisasi
  - Mengoptimalkan beberapa pesan kesalahan, menambahkan petunjuk solusi [#930](https://github.com/DGP-Studio/Snap.Hutao/issues/930)
  - Konten Pengumuman Snap Hutao di dashboard sekarang dapat disalin [#929](https://github.com/DGP-Studio/Snap.Hutao/issues/929)
  - **Halaman Statistik Abyss sekarang digabungkan ke Halaman Rekaman Abyss**
  - Mengoptimalkan format waktu di beberapa tempat

## 1.7.4 <Badge text="terbaru" type="tip" />

- Tambah
  - Menambahkan opsi untuk mengubah entri PowerShell di halaman pengaturan
  - Menambahkan opsi untuk membuat shortcut desktop di halaman pengaturan [#912](https://github.com/DGP-Studio/Snap.Hutao/issues/912)
  - Menambahkan opsi untuk beralih tampilan kartu pada dashboard utama
  - Menambahkan opsi tambah kelompok pada halaman karakter saya
- Perbaikan
  - Memperbaiki masalah di mana waktu mulai acara tidak akurat di Dashboard Utama [#887](https://github.com/DGP-Studio/Snap.Hutao/issues/887)
  - Memperbaiki masalah di halaman karakter saya yang menyebabkan crash saat mengklik senjata yang tidak disinkronkan oleh Enka API [#904](https://github.com/DGP-Studio/Snap.Hutao/issues/904)
  - Memperbaiki masalah tampilan nilai senjata di halaman karakter saya [#907](https://github.com/DGP-Studio/Snap.Hutao/issues/907)
  - Memperbaiki masalah di mana server Bilibili tidak dapat dikonversi ke beberapa server lainnya [#893](https://github.com/DGP-Studio/Snap.Hutao/issues/893)
  - Memperbaiki masalah di mana mengambil riwayat Novice Wish akan menyebabkan program crash [#917](https://github.com/DGP-Studio/Snap.Hutao/issues/917)
  - Memperbaiki masalah di mana Dev Plan tidak dipilih sebelum memasuki halaman Dev Plan, yang menyebabkan halaman Dev Plan harus dimasuki setidaknya sekali untuk menambahkan arsip Dev Plan
  - Memperbaiki masalah gagal klaim reward check-in saat memicu verifikasi anti-bot, bahkan saat API anti-bot mengembalikan hasil sukses
- Optimisasi
  - Mengoptimalkan urutan tampilan monster pada halaman Monster WIKI
  - Mengoptimalkan kecepatan peluncuran halaman Wish History
  - Mengoptimalkan thread basis data lokal pada fungsi tampilan UI
  - Mengoptimalkan pengalaman gulir untuk beberapa tampilan Dev Plan, mungkin sekarang membutuhkan waktu lebih lama untuk memuat tampilan

## 1.7.3

- Memperbaiki masalah login web HoYoverse yang tidak berfungsi
- Meningkatkan versi Windows App SDK untuk memperbaiki masalah di mana bagian atas bilah judul tidak dapat menyesuaikan ukuran jendela
- Menyesuaikan pesan kesalahan impor file UIGF v2.2, sekarang memungkinkan identifikasi masalah lebih cepat berdasarkan ID
- Memperbaiki masalah di mana panel pengguna akan menampilkan klaim berhasil hadiah login bahkan jika gagal
- Memperbaiki masalah di mana meluncurkan game dari taskbar akan membuka jendela game dan jendela program utama secara bersamaan

## 1.7.2

- Ekspor Wish
  - Memperbaiki masalah di mana refresh penuh tidak berfungsi dengan benar.
  - Memperbaiki masalah di mana file UIGF tanpa kesalahan tidak diimpor dengan benar
  - Memperbaiki masalah di mana rekaman Hutao Cloud tidak diambil dengan benar
  - Menyesuaikan antarmuka pengguna jendela Hutao Cloud untuk menampilkan jumlah wish yang sesuai dengan arsip UID
- Karakter Saya
  - Menyesuaikan antarmuka pengguna untuk membuatnya lebih padat
- Menyesuaikan antarmuka pengguna notifikasi di halaman beranda untuk sejajar dengan tepi kanan

## 1.7.0

- Menambahkan panduan awal untuk membantu pengguna mengenal Snap Hutao saat peluncuran awal
  - Memandu pengguna untuk memilih bahasa
  - Memandu pengguna untuk mengonfirmasi persyaratan layanan
  - Memandu pengguna untuk menginstal font Segoe Fluent Icons dan WebView2 Runtime
  - Memandu pengguna untuk mengunduh aset statis
- Antarmuka Utama
  - Menyesuaikan gaya ikon dalam bilah navigasi
  - Memperbaiki bug di mana penyesuaian ukuran jendela dapat menyebabkan crash tak terduga
- Panel Pengguna
  - Menyesuaikan gaya panel pengguna
  - Menambahkan tombol untuk memungkinkan pengguna saat ini mengklaim hadiah masuk
  - Memperbaiki masalah di mana dalam beberapa kasus, pengguna saat ini dan karakter tidak dapat dipilih dengan benar saat mulai
- Dashboard Beranda
  - Menambahkan pengumuman Snap Hutao
  - Real-Time Note sekarang menampilkan waktu penyegaran untuk setiap kartu
  - Memperbaiki masalah di mana kartu Real-Time Note gagal dimuat dengan benar, menyebabkan program membeku atau crash
  - Koreksi waktu mulai/akhir untuk pengumuman acara tertentu
  - Memperbaiki masalah di mana beberapa paragraf tidak ditampilkan dengan benar saat melihat detail pengumuman tertentu
- Peluncuran Game (Peluncur Lanjutan)
  - Menambahkan teks indikator status game ke bilah perintah
  - Memperbaiki masalah di mana fungsi pengalihan server tidak berfungsi
  - Menyesuaikan logika fungsi pengalihan server untuk mengizinkan percobaan ulang setelah kegagalan unduhan sumber daya
  - Menyesuaikan logika frame rate yang tidak terkunci; proses game akan otomatis berakhir jika pembukaan gagal
  - Menghapus multi-client
  - Memperbaiki masalah di halaman unduhan sumber daya di mana klien game tidak memiliki nama dan tidak dapat diunduh
- Riwayat Wish
  - Menyesuaikan gaya kartu pada halaman gambaran umum, membuat item lebih besar dan menyatukan beberapa item teks
  - Memperbaiki masalah masuk ke halaman riwayat wish tanpa login atau tanpa layanan Snap Hutao Cloud menyebabkan kesalahan
  - Memperbaiki masalah tampilan progres bar dan warna dalam tampilan daftar kartu di halaman gambaran umum
  - Memperbaiki teks yang tidak benar untuk reward unggah Snap Hutao Cloud
  - Memperbaiki masalah file data format UIGF yang mengimpor ID item yang salah
  - Memperbaiki masalah gagal menemukan direktori cache game
  - Mengoptimalkan kecepatan muat halaman ketika ada banyak item
- Prestasi
  - Memperbaiki masalah tampilan yang terjadi setelah memilih kategori prestasi dalam tampilan daftar/grid dan beralih ke jenis tampilan lainnya
  - Mengoptimalkan kecepatan muat halaman
- Real-Time Notes
  - Menyesuaikan gaya tombol `Verifikasi Pengguna dan Peran Saat Ini`
  - Menyesuaikan gaya tampilan pengaturan notifikasi
  - Menambahkan opsi untuk menonaktifkan penyegaran otomatis untuk real-time notes (toggle hanya tersedia dalam mode non-administrator; pengguna yang sebelumnya mengakses halaman real-time notes dalam mode administrator mungkin tidak dapat mengaktifkan opsi ini)
  - Menyesuaikan gaya real-time notes
  - Menyesuaikan petunjuk teks untuk Serenitea Pot yang terkunci dan Parametric Transformations yang tidak dimiliki
  - Menambahkan waktu penyegaran sebelumnya untuk setiap kartu real-time notes
- Karakter Saya
  - Menyesuaikan lebar daftar karakter saat menggunakan tampilan daftar
  - Menambahkan tombol untuk mengalihkan tampilan waktu penyegaran di bilah perintah
  - Menambahkan waktu penyegaran sebelumnya untuk setiap fungsi penyegaran
  - Menambahkan tampilan waktu di mana artefak ditingkatkan dalam detail karakter
- Rencana Dev
  - Memperbaiki masalah gagal menyimpan arsip aktif saat beralih halaman dari rencana dev ke lainnya
- Karakter WIKI
  - Memperbaiki masalah tampilan yang terjadi setelah memilih karakter dalam tampilan daftar/grid dan beralih ke jenis tampilan lainnya
- Senjata WIKI
  - Memperbaiki masalah tampilan yang terjadi setelah memilih senjata dalam tampilan daftar/grid dan beralih ke jenis tampilan lainnya
  - Menambahkan bagian bahan naik pangkat untuk setiap senjata
- Monster WIKI
  - Memperbaiki masalah tampilan yang terjadi setelah memilih monster dalam tampilan daftar/grid dan beralih ke jenis tampilan lainnya
- Pengaturan
  - Memperbaiki masalah yang tidak dapat menghapus direktori cache game
  - Menambahkan bidang konfigurasi untuk API verifikasi CAPTCHA Geetest, konfigurasi yang benar pada bidang ini dapat menangani verifikasi anti-bot dari MiYouShe
- Meningkatkan kinerja frame program
- Mengoptimalkan penggunaan memori untuk penjadwalan multi-thread
- Mengoptimalkan kecepatan muat aset gambar item
- Menyesuaikan metode baca/tulis basis data untuk mengoptimalkan penggunaan memori dan responsifitas
- Menyesuaikan petunjuk teks untuk kode pengembalian `-100` dan `-10001` untuk membantu pengguna memahami maknanya dengan lebih baik
- Perubahan minor lainnya

## 1.6.6

- Baru
  - Tab Snap Hutao Cloud akan menampilkan waktu kedaluwarsa dan lisensi pengembang pada halaman riwayat wish sekarang
  - Statistik wish sekarang tersedia pada halaman riwayat wish, dengan data didukung oleh Snap Hutao Cloud
- Perbaikan
  - Memperbaiki kegagalan metode penyegaran cache web untuk ekspor riwayat wish
  - Memperbaiki kesalahan loading metadata Bahasa Tiongkok Tradisional

## 1.6.5

- Baru
  - Jepang sekarang menjadi opsi bahasa baru;
    anggota komunitas dapat berkontribusi pada bahasa Jepang di [translate.hut.ao](https://translate.hut.ao/)
- Perbaikan
  - Masalah tidak bisa menambahkan senjata ke rencana dev [Issue #745](https://github.com/DGP-Studio/Snap.Hutao/issues/747)
  - Masalah pada beberapa pengguna gagal membuka batasan frame rate di bawah lingkungan tertentu
    [Issue #747](https://github.com/DGP-Studio/Snap.Hutao/issues/747)
- Mengoptimalkan
  - Memperbaiki tampilan dashboard
  - Memperkenalkan Metadata v2
  - Urutan penyortiran material dalam rencana dev [Issue #749](https://github.com/DGP-Studio/Snap.Hutao/issues/749)

## 1.6.4

- Baru
  - Ekspor data riwayat wish dengan format data [UIGF v2.3](https://uigf.org/zh/standards/UIGF.html)
- Perbaikan
  - FPS unlocker [Issue #733](https://github.com/DGP-Studio/Snap.Hutao/issues/733)
- Mengoptimalkan
  - Saat menjalankan program tanpa hak administrator, fitur yang memerlukan hak administrator akan memiliki petunjuk teks
  - Dukungan HoYoLAB
  - Pembaruan lokalitas

## 1.6.3

- Baru
  - Dashboard Beranda, termasuk akun Hutao Cloud, peluncur game, riwayat wish, statistik prestasi, dan real-time notes
  - Mengaktifkan kotak notifikasi akan secara otomatis menyembunyikan notifikasi dalam aplikasi
  - Opsi server CN tanpa akun TapTap
- Perbaikan
  - Masalah ketika pengguna tidak bisa mendapatkan bonus Hutao Cloud setelah mengunggah rekaman Abyss
  - Masalah tidak dapat masuk ke HoYoLab dengan Facebook
  - Masalah check-in HoYoLab
  - Masalah saat menghadapi nilai kosong saat mengambil riwayat wish
- Optimalisasi
  - **Refaktorisasi proyek, memberikan peningkatan kinerja 20%**
  - Menambahkan dukungan lokal untuk fitur WIKI
  - Menambahkan dukungan untuk semua saluran internasional (yang memengaruhi gateway pembayaran)
    - Mendukung HoYoverse resmi, Google Pay, Epic
  - Saat Batas framerate dibuka, nilai batas dapat diubah selama permainan, dan akan segera berlaku

## 1.6.2 <Badge text="terbaru" type="tip" />

- Fitur Baru
  - **Cloud backup riwayat wish** berbasis sistem akun Hutao
    - Saat ini, sponsor di AFDIAN dan pengguna beta akan menerima waktu keanggotaan cloud yang sesuai; Semua pengguna terdaftar akan menerima waktu keanggotaan 5 hari setelah mengunggah rekaman Abyss.
    - Fitur ini akan terus dioptimalkan dalam versi 1.6 berikutnya
- Perbaikan
  - Masalah di mana akun server BiliBili tidak bisa menerima data untuk Real-time Notes
  - Masalah pada login HoYoLab
- Optimalisasi
  - Logika unduhan aset statis

## 1.6.0

- Tambah
  - Sistem akun Hutao dengan registrasi dan login yang tersedia sekarang
  - Dukungan login akun HoYoLab, dan menambahkan dukungannya untuk fitur berikut:
    - Login web dan login Stoken Cookie
    - Rekaman Abyss
    - Hadiah check-in harian
    - Karakter saya
    - Real-time notes
- Optimalisasi
  - Kinerja pembukaan batas framerate
  - Multi-client
  - Pengguna sekarang harus membuka fitur lanjutan di halaman pengaturan sebelum benar-benar menggunakannya
  - Tampilan halaman pengaturan
  - Gambar tiles di Windows 10

## 1.5.4

- Tambah
  - Peluncur Game
    - Unduhan paket sumber daya game
    - Memungkinkan beberapa proses Genshin Impact berjalan
    - Memungkinkan pengguna memilih monitor yang ditentukan untuk memulai game
  - Ikon baru telah digunakan
- Perbaikan
  - Masalah menyebabkan penulisan file tanpa batas saat beralih server
- Optimalisasi
  - Optimalisasi pemilihan bahasa default
  - Memungkinkan ID perangkat dicopy dengan tombol
  - Optimasi tampilan halaman pengaturan

## 1.5.1

- Optimalisasi
  - Ganti menu `JumpList` dengan `JumpTask`,
  - Tambah opsi untuk memungkinkan pengguna menetapkan bahasa di atas pengaturan default sistem
  - Tambah kontribusi terjemahan
  - Tambah opsi untuk mereset sumber daya gambar
- Tambah
  - Monster WIKI
  - Terjemahan bahasa Korea
  - Metadata yang diinternasionalisasi

## 1.4.15

- Baru
  - Metode reset gambar statis
  - Refresh cookie
- Perbaikan
  - Memperbaiki masalah bahwa rencana dev baru tidak bisa ditambahkan
  - Mendukung UI bahasa Inggris
  - Perbaikan bug minor lainnya

## 1.4.14

- Memperbaiki masalah bahwa pengguna baru tidak dapat menambahkan rencana dev
- Mendukung UI bahasa Inggris
- Perbaikan bug minor lainnya

## 1.4.11

- Versi pertama di Microsoft Store
