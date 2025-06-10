---
category:
  - Announcement
icon: iconfont icon-update
order: 1
comment: false
externalLinkIcon: false
description: Snap Hutao berusaha memberikan pengguna pengalaman pengguna terbaik dengan terus memperbarui dan memperbaiki masalah yang diketahui serta merilis fitur baru. Kami akan selalu menerbitkan log pembaruan untuk melacak perubahan yang dibuat pada program.
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/en/statements/update-log.html
---

# Log Pembaruan

## 1.14.9 <Badge text="terbaru" type="tip" />

- **[🎉Baru]** Halaman profil karakter sekarang menampilkan hyperlink dengan benar di beberapa skill/bakat karakter.
- **[✨Optimalisasi]** Jendela panduan sekarang dapat menampilkan notifikasi dalam aplikasi.
- **[🎉Baru]** Kartu halaman utama sekarang dapat diurutkan ulang dengan menyeret di halaman pengaturan.
- **[🔨Perbaikan]** Memperbaiki beberapa masalah yang dapat menyebabkan program crash.

## 1.14.8

- **[🔨Perbaikan]** Memperbaiki beberapa masalah yang dapat menyebabkan program crash

## 1.14.7

- **[🎉Baru]** Menambahkan fungsi sintesis pengalihan baru ke fitur injeksi di halaman peluncuran game. Mengklik tombol di detail item dalam game sekarang akan membuka halaman sintesis alih-alih pelacakan peta.
- **[✨Optimalisasi]** Menghapus tab "Unduh Sumber Daya" dari halaman peluncuran game. [#2681](https://github.com/DGP-Studio/Snap.Hutao/issues/2681)
- **[✨Optimalisasi]** Menyesuaikan lebar bilah navigasi jendela utama. [#2681](https://github.com/DGP-Studio/Snap.Hutao/issues/2681)
- **[✨Optimalisasi]** Memigrasikan beberapa komponen dasar dari C# ke C++ untuk kinerja dan penggunaan memori yang lebih baik.
- **[🔨Perbaikan]** Memperbaiki masalah crash saat beralih halaman sebelum kartu masuk halaman utama selesai dimuat. [#2694](https://github.com/DGP-Studio/Snap.Hutao/issues/2694)
- **[🔨Perbaikan]** Memperbaiki masalah di mana file UIGF yang diformat dengan tidak benar dapat diimpor. [#2704](https://github.com/DGP-Studio/Snap.Hutao/issues/2704)

## 1.14.6

- **[🎉Baru]** Menambahkan operasi klik dua kali pada ikon notifikasi untuk langsung membuka jendela utama.
- **[✨Optimalisasi]** Menghapus mode konversi server ScatteredFiles. [#2682](https://github.com/DGP-Studio/Snap.Hutao/issues/2682)
- **[🔨Perbaikan]** Memperbaiki masalah di mana auto-click/auto-press tidak dapat dimulai ulang setelah dihentikan dengan hotkey. [#2673](https://github.com/DGP-Studio/Snap.Hutao/issues/2673)
- **[🔨Perbaikan]** Memperbaiki masalah di mana Embedded Yae tidak dapat digunakan secara normal. [#2678](https://github.com/DGP-Studio/Snap.Hutao/issues/2678)
- **[🔨Perbaikan]** Memperbaiki masalah di mana metadata mungkin tidak diinisialisasi dengan benar pada startup pertama setelah pembaruan. 

## 1.14.5

- **[🔨Perbaikan]** Memperbaiki masalah di mana akun miHoYo tidak akan beralih secara otomatis setelah meluncurkan game dari halaman Catatan Real-time. [#2623](https://github.com/DGP-Studio/Snap.Hutao/issues/2623)
- **[🔨Perbaikan]** Memperbaiki masalah di mana menggunakan Embedded Yae untuk mengimpor pencapaian setelah meluncurkan game tidak akan menghentikan proses game. [#2630](https://github.com/DGP-Studio/Snap.Hutao/issues/2630)
- **[🔨Perbaikan]** Memperbaiki masalah di mana Rencana Pengembangan di halaman Karakter Saya tidak akan memeriksa apakah karakter telah dinaikkan saat menghitung semua karakter dan senjata. [#2658](https://github.com/DGP-Studio/Snap.Hutao/issues/2658)
- **[🔨Perbaikan]** Memperbaiki masalah di mana menghapus arsip catatan permintaan tidak akan mencoba memilih ulang arsip pertama. [#2659](https://github.com/DGP-Studio/Snap.Hutao/issues/2659)
- **[🔨Perbaikan]** Memperbaiki masalah crash saat mencoba pra-unduh. [#2660](https://github.com/DGP-Studio/Snap.Hutao/issues/2660)
- **[🔨Perbaikan]** Memperbaiki masalah crash yang bisa terjadi saat gagal mengunduh file gambar dalam kondisi tertentu.
- **[✨Optimalisasi]** Meningkatkan pengalaman startup:
  - Popup sekarang akan muncul jika migrasi database gagal saat startup.
  - Aplikasi akan menunggu inisialisasi selesai sebelum menutup atau memulai ulang.

## 1.14.4

- **[🎉Baru]** Estimasi resin di Rencana Pengembangan sekarang menghitung material yang dapat digabungkan.
- **[🎉Baru]** Menambahkan opsi untuk hotkey agar hanya berlaku setelah game dimulai. [#2606](https://github.com/DGP-Studio/Snap.Hutao/issues/2606)
- **[✨Optimalisasi]** Manajemen file game sekarang meminta ruang yang diperlukan dan tersedia sebelum memulai operasi.
- **[🔨Perbaikan]** Memperbaiki masalah di mana UI mungkin membeku dalam situasi tertentu. [#2617](https://github.com/DGP-Studio/Snap.Hutao/issues/2617)
- **[🔨Perbaikan]** Memperbaiki masalah di mana menutup jendela mungkin menyebabkan crash dalam situasi tertentu.
- **[🔨Perbaikan]** Memperbaiki masalah di mana ikon area notifikasi selalu dibuat. [#2590](https://github.com/DGP-Studio/Snap.Hutao/issues/2590)
- **[🔨Perbaikan]** Memperbaiki masalah di mana pembaru tidak dapat memulai dengan benar di beberapa sistem. [#2597](https://github.com/DGP-Studio/Snap.Hutao/issues/2597)
- **[🔨Perbaikan]** Memperbaiki masalah di mana keluar dari game mungkin menyebabkan crash dalam situasi tertentu.
- **[🔨Perbaikan]** Memperbaiki masalah di mana pengaturan frame rate di halaman peluncuran game terikat secara tidak benar ke sakelar bidang pandang. [#2596](https://github.com/DGP-Studio/Snap.Hutao/issues/2596)
- **[🔨Perbaikan]** Memperbaiki masalah di mana mengunggah data di halaman Spiral Abyss dialihkan ke halaman login yang salah. [#2607](https://github.com/DGP-Studio/Snap.Hutao/issues/2607)

## 1.14.3 <Badge text="perbaikan terbaru" type="warning" />

- **[✨Optimalisasi]** Menambahkan sakelar independen untuk jendela overlay, mengembalikan panel sakelar injeksi [#2582](https://github.com/DGP-Studio/Snap.Hutao/issues/2582)
- **[🔨Perbaikan]** Memperbaiki masalah di mana pengalihan aplikasi gagal [#2576](https://github.com/DGP-Studio/Snap.Hutao/issues/2576)
- **[🔨Perbaikan]** Memperbaiki masalah di mana jendela web ringkas akan crash pada peluncuran non-pertama [#2586](https://github.com/DGP-Studio/Snap.Hutao/issues/2586)
- **[🔨Perbaikan]** Memperbaiki masalah di mana beberapa perangkat tidak dapat mengikat hotkey [#2570](https://github.com/DGP-Studio/Snap.Hutao/issues/2570) [#2585](https://github.com/DGP-Studio/Snap.Hutao/issues/2585)

## 1.14.2 <Badge text="perbaikan terbaru" type="warning" />

- **[🔨Perbaikan]** Memperbaiki masalah di mana jendela overlay akan kembali terlihat saat disembunyikan oleh hotkey dan beralih antar jendela

## 1.14.1 <Badge text="perbaikan terbaru" type="warning" />

- **[🎉Baru]** Menambahkan pengaturan kunci pintas kustom di halaman peluncuran game untuk mengontrol tampilan dan penyembunyian jendela overlay [#2562](https://github.com/DGP-Studio/Snap.Hutao/issues/2562)

## 1.14.0

- **[🎉Baru]** Menambahkan kunci pintas untuk beralih tampilan/sembunyikan jendela untuk jendela web ringkas [#2382](https://github.com/DGP-Studio/Snap.Hutao/issues/2382)
- **[🎉Baru]** Menambahkan kartu masuk di halaman utama [#1322](https://github.com/DGP-Studio/Snap.Hutao/issues/1322)
- **[🎉Baru]** Menambahkan jendela overlay semi-transparan di dalam game [#2506](https://github.com/DGP-Studio/Snap.Hutao/issues/2506)
  - Jendela overlay akan menggantikan prompt hotkey asli di bilah judul
  - Jendela overlay akan menggantikan opsi injeksi asli di halaman peluncuran game
- **[🎉Baru]** Menambahkan opsi injeksi untuk menghapus close-up kamera ledakan elemen
- **[🎉Baru]** Menambahkan opsi injeksi untuk menghapus angka kerusakan pertempuran
- **[🎉Baru]** Menambahkan opsi injeksi untuk menerapkan input sentuh [#2535](https://github.com/DGP-Studio/Snap.Hutao/issues/2535)
- **[🎉Baru]** Menambahkan parameter jenis platform di halaman peluncuran game [#2521](https://github.com/DGP-Studio/Snap.Hutao/issues/2521)
- **[🎉Baru]** Menambahkan opsi penyortiran di halaman Karakter Saya [#2512](https://github.com/DGP-Studio/Snap.Hutao/issues/2512)
- **[🎉Baru]** Menambahkan tampilan level promosi karakter dan senjata di halaman Karakter Saya
- **[🎉Baru]** Menambahkan filter di Rencana Pengembangan
- **[✨Optimalisasi]** Memperkenalkan pembaru baru [#2456](https://github.com/DGP-Studio/Snap.Hutao/issues/2456)
- **[✨Optimalisasi]** Kemajuan unduhan sumber daya di halaman panduan sekarang akan mewarisi kemajuan yang ada
- **[✨Optimalisasi]** Prompt yang benar saat tidak ada karakter game yang tersedia setelah login komunitas
- **[✨Optimalisasi]** Menyederhanakan logika fitur injeksi [#2531](https://github.com/DGP-Studio/Snap.Hutao/issues/2531)
- **[✨Optimalisasi]** Halaman Karakter Saya sekarang akan secara otomatis menggulir ke atas setelah beralih karakter [#1731](https://github.com/DGP-Studio/Snap.Hutao/issues/1731)
- **[✨Optimalisasi]** Pengembangan karakter sekarang akan mengenali apakah karakter telah dinaikkan [#2403](https://github.com/DGP-Studio/Snap.Hutao/issues/2403)
- **[✨Optimalisasi]** Menambahkan validasi sebelum mengubah direktori data
- **[✨Optimalisasi]** Menambahkan teks prompt yang relevan di beberapa pengaturan
- **[✨Optimalisasi]** Mengoptimalkan masalah jeda di beberapa halaman
- **[✨Optimalisasi]** Memperbaiki banyak masalah kebocoran memori
- **[✨Optimalisasi]** Mengoptimalkan teks tampilan prompt hotkey
- **[🔨Perbaikan]** Memperbaiki masalah di mana penutupan jendela utama dapat menyebabkan crash selama penyegaran otomatis catatan real-time
- **[🔨Perbaikan]** Memperbaiki masalah di mana popup baki tidak akan muncul kembali setelah menekan Alt + F4 [#2532](https://github.com/DGP-Studio/Snap.Hutao/issues/2532)
- **[🔨Perbaikan]** Memperbaiki masalah di mana mengklik untuk mengubah email/kata sandi/logout di halaman Paspor Snap Hutao mungkin tidak merespons
- **[🔨Perbaikan]** Memperbaiki prompt kesalahan saat direktori game tidak diatur
- **[🔨Perbaikan]** Memperbaiki masalah crash saat mencoba mengambil alih proses game [#2540](https://github.com/DGP-Studio/Snap.Hutao/issues/2540)
- **[🔨Perbaikan]** Memperbaiki masalah pembekuan saat memperbarui game di server saluran [#2327](https://github.com/DGP-Studio/Snap.Hutao/issues/2327)
- **[🔨Perbaikan]** Memperbaiki masalah di mana timer permintaan salah menyertakan beberapa karakter permanen
- **[🔨Perbaikan]** Memperbaiki masalah di mana menghapus arsip pencapaian di halaman Manajemen Pencapaian tidak akan secara otomatis beralih ke arsip berikutnya [#2519](https://github.com/DGP-Studio/Snap.Hutao/issues/2519)
- **[🔨Perbaikan]** Memperbaiki masalah di mana beberapa versi pencapaian ditampilkan secara tidak benar di halaman Manajemen Pencapaian
- **[🔨Perbaikan]** Memperbaiki masalah di mana Embedded Yae tidak dapat digunakan secara normal di versi 5.5
- **[🔨Perbaikan]** Memperbaiki masalah di mana beberapa monster ditampilkan secara tidak benar di Spiral Abyss
- **[🔨Perbaikan]** Memperbaiki masalah di mana data estimasi resin di Rencana Pengembangan bisa jadi salah
- **[🔨Perbaikan]** Memperbaiki masalah crash saat menggambar UI dalam kondisi penskalaan tertentu
- **[🔨Perbaikan]** Memperbaiki masalah di mana WebView2 tidak dapat dimuat dengan benar dalam beberapa kasus
- **[🔨Perbaikan]** Memperbaiki masalah pembekuan saat menutup jendela sebelum WebView2 selesai dimuat [#2544](https://github.com/DGP-Studio/Snap.Hutao/issues/2544)
- **[🔨Perbaikan]** Memperbaiki masalah di mana beberapa perangkat tidak dapat mengatur bahasa dengan benar
- **[🔨Perbaikan]** Memperbaiki masalah di mana beberapa gambar tidak dapat ditampilkan dengan benar

## 1.13.7

- **[🔨Perbaikan]** Memperbaiki masalah di mana menutup proses game selama startup game dalam kondisi tertentu dapat menyebabkan program crash
- **[🔨Perbaikan]** Memperbaiki masalah di mana memilih direktori data ke root partisi disk dan kemudian membuka halaman pengaturan dapat menyebabkan program crash
- **[🔨Perbaikan]** Memperbaiki masalah di mana gagal mengunduh wallpaper saat sumber wallpaper bukan lokal dapat menyebabkan program crash
- **[🔨Perbaikan]** Memperbaiki masalah di mana gagal mengambil pengumuman game dapat menyebabkan program crash
- **[🔨Perbaikan]** Memperbaiki masalah di mana menutup jendela web sebelum WebView2 selesai dimuat dapat menyebabkan program crash
- **[🔨Perbaikan]** Memperbaiki masalah di mana peralihan wallpaper dengan sumber wallpaper lokal dapat menyebabkan program crash
- **[🔨Perbaikan]** Memperbaiki masalah di mana menutup jendela utama saat notifikasi akan ditampilkan atau disembunyikan dapat menyebabkan program crash
- **[🔨Perbaikan]** Memperbaiki masalah di mana beralih/menghapus pengguna saat memuat halaman Karakter Saya dapat menyebabkan masalah sinkronisasi data
- **[🔨Perbaikan]** Memperbaiki masalah di mana menggunakan auto-click/auto-press di bawah halaman izin sistem dapat menyebabkan program crash, sekarang secara otomatis akan menghentikan operasi yang sesuai
- **[🔨Perbaikan]** Memperbaiki masalah di mana operasi penyegaran/mundur sebelum WebView2 selesai dimuat dapat menyebabkan program crash
- **[🔨Perbaikan]** Memperbaiki masalah di mana mengelola fungsi game di halaman peluncuran game dengan beberapa perangkat SSD non-tetap tertentu dapat menyebabkan program crash, sekarang default ke HDD untuk operasi selanjutnya
- **[🔨Perbaikan]** Memperbaiki masalah di mana mencoba membuka kembali menu ikon area tugas saat program keluar dapat menyebabkan program crash
- **[✨Optimalisasi]** Menambahkan prompt kegagalan pemuatan WebView2 ke jendela web
- **[✨Optimalisasi]** Jendela web ringkas sekarang dapat diubah ukurannya menjadi ukuran apa pun
- **[✨Optimalisasi]** Peluncuran game sekarang memeriksa proses game yang sudah berjalan dan mencoba mengambil alih

## 1.13.6

- **[🎉Baru]** Menambahkan pengaturan zona waktu ke Rencana Pengembangan
  - Zona waktu akan diatur saat membuat rencana
  - Zona waktu tidak dapat diubah setelah rencana dibuat
  - Rencana Pengembangan yang ada akan default ke zona waktu yang sesuai dengan server kalender di pengaturan Hutao
- **[🔨Perbaikan]** Memperbaiki masalah di mana mengimpor pencapaian dari aplikasi lain tidak akan menampilkan popup impor
- **[🔨Perbaikan]** Memperbaiki masalah crash saat Catatan Real-time menyegarkan otomatis di latar belakang [#2491](https://github.com/DGP-Studio/Snap.Hutao/issues/2491)
- **[✨Optimalisasi]** Menyesuaikan metode telemetri, sekarang menggunakan Sentry untuk pengumpulan dan pemrosesan informasi pengecualian yang lebih baik
- **[✨Optimalisasi]** Setelah masuk ke panel pengguna untuk pertama kalinya, karakter default yang dikonfigurasi di MiYouShe sekarang akan dipilih terlebih dahulu [#2391](https://github.com/DGP-Studio/Snap.Hutao/issues/2391)
- **[✨Optimalisasi]** Mengubah logika transparansi jendela web ringkas
  - Jendela sekarang akan buram saat difokuskan
  - Jendela akan semi-transparan saat tidak fokus

## 1.13.5

- **[🎉Baru]** Menambahkan Bilibili Wiki ke panduan karakter di halaman profil karakter (hanya bahasa Mandarin Sederhana) [#2435](https://github.com/DGP-Studio/Snap.Hutao/issues/2435)
- **[🎉Baru]** Halaman profil karakter sekarang menampilkan ilustrasi skin karakter
- **[🔨Perbaikan]** Memperbaiki beberapa masalah dengan fitur server internasional
- **[🔨Perbaikan]** Memperbaiki masalah crash saat keluar dari Hutao dari menu baki
- **[🔨Perbaikan]** Memperbaiki masalah di mana zona waktu kartu kalender tidak diterapkan [#2467](https://github.com/DGP-Studio/Snap.Hutao/issues/2467)
- **[🔨Perbaikan]** Memperbaiki masalah di mana file konfigurasi game mungkin kembali ke server yang salah jika hilang
- **[🔨Perbaikan]** Memperbaiki masalah di mana manajemen file game tidak mendukung drive solid-state USB [#2469](https://github.com/DGP-Studio/Snap.Hutao/issues/2469)
- **[🔨Perbaikan]** Memperbaiki masalah ketidaksejajaran UI dalam estimasi resin di halaman Rencana Pengembangan [#2443](https://github.com/DGP-Studio/Snap.Hutao/issues/2443)
- **[✨Optimalisasi]** Mengoptimalkan tata letak UI untuk pengaturan penskalaan tertentu

## 1.13.4 <Badge text="perbaikan terbaru" type="warning" />

- **[🔨Perbaikan]** Memperbaiki masalah di mana menggunakan fungsi manajemen game di halaman peluncuran game akan menyebabkan crash lagi [#2457](https://github.com/DGP-Studio/Snap.Hutao/issues/2457)
- **[🔨Perbaikan]** Memperbaiki masalah di mana pencapaian tidak dapat disinkronkan melalui Embedded Yae [#2458](https://github.com/DGP-Studio/Snap.Hutao/issues/2458)
- **[🔨Perbaikan]** Memperbaiki masalah di mana item ransel tidak dapat disinkronkan melalui Embedded Yae di Rencana Pengembangan [#2461](https://github.com/DGP-Studio/Snap.Hutao/issues/2461)

## 1.13.3 <Badge text="perbaikan terbaru" type="warning" />

- **[🔨Perbaikan]** Memperbaiki masalah di mana menggunakan fungsi manajemen game di halaman peluncuran game akan menyebabkan crash

## 1.13.2

- **[🔨Perbaikan]** Memperbaiki masalah di mana catatan permintaan tidak dapat disegarkan melalui cache web [#2413](https://github.com/DGP-Studio/Snap.Hutao/issues/2413)
- **[🔨Perbaikan]** Memperbaiki masalah di mana halaman utama tidak dapat ditampilkan dengan benar saat jumlah kartu yang diaktifkan kurang dari satu baris [#2416](https://github.com/DGP-Studio/Snap.Hutao/issues/2416)
- **[🔨Perbaikan]** Memperbaiki masalah di mana karakter konstelasi tinggi tidak dapat ditambahkan ke Rencana Pengembangan setelah versi 5.2 [#2422](https://github.com/DGP-Studio/Snap.Hutao/issues/2422)
- **[🔨Perbaikan]** Memperbaiki masalah di mana folder data tidak dapat diubah jika folder target tidak ada [#2425](https://github.com/DGP-Studio/Snap.Hutao/issues/2425)
- **[🔨Perbaikan]** Memperbaiki masalah di mana beberapa pengguna tidak dapat mengubah folder data karena enkripsi file [#2433](https://github.com/DGP-Studio/Snap.Hutao/issues/2433)
- **[🔨Perbaikan]** Memperbaiki masalah di mana menu ikon bilah tugas masih bisa dibuka saat kotak dialog ditampilkan [#2434](https://github.com/DGP-Studio/Snap.Hutao/issues/2434)
- **[✨Optimalisasi]** Hak administrator sekarang diperlukan untuk menonaktifkan Loopback
- **[✨Optimalisasi]** Mengoptimalkan pengalaman impor data untuk Embedded Yae
  * Mengubah UI fitur terkait, sekarang memerlukan hak administrator untuk digunakan
  * Sekarang memerlukan pengaktifan fitur injeksi di halaman peluncuran game untuk menggunakan fitur terkait
  * Sekarang menggunakan akun yang dikonfigurasi di halaman peluncuran game untuk masuk

## 1.13.1

- **[🎉Baru]** Menambahkan bahasa Jerman/Spanyol/Italia/Thailand/Turki
- **[🎉Baru]** Pencapaian dan item ransel sekarang dapat diperoleh dari game melalui Embedded Yae
- **[🎉Baru]** Menambahkan fitur hapus item ransel di Rencana Pengembangan [#2332](https://github.com/DGP-Studio/Snap.Hutao/issues/2332)
- **[🎉Baru]** Menambahkan panduan karakter di halaman profil karakter [#1526](https://github.com/DGP-Studio/Snap.Hutao/issues/1526)
- **[🔨Perbaikan]** Memperbaiki masalah di mana dua instance Hutao mungkin dimulai secara bersamaan [#2368](https://github.com/DGP-Studio/Snap.Hutao/issues/2368)
- **[🔨Perbaikan]** Memperbaiki masalah di mana beberapa perangkat tidak dapat memperoleh status Loopback dengan benar
- **[🔨Perbaikan]** Memperbaiki masalah di mana memulai game sebelum layanan pengguna sepenuhnya diinisialisasi mungkin mencegah masuk dengan akun MiYouShe
- **[🔨Perbaikan]** Memperbaiki masalah di mana catatan permintaan tidak dapat diperoleh melalui cache web [#2363](https://github.com/DGP-Studio/Snap.Hutao/issues/2363)
- **[🔨Perbaikan]** Memperbaiki masalah di mana UID dalam notifikasi catatan real-time mungkin ditampilkan sebagai Tidak Dikenal
- **[🔨Perbaikan]** Memperbaiki masalah di mana Spiral Abyss tidak menampilkan paruh atas dan bawah dengan benar
- **[🔨Perbaikan]** Memperbaiki masalah di mana estimasi resin di Rencana Pengembangan mungkin menyebabkan crash
- **[🔨Perbaikan]** Memperbaiki masalah di mana data estimasi resin di Rencana Pengembangan mungkin meluap [#2361](https://github.com/DGP-Studio/Snap.Hutao/issues/2361)
- **[✨Optimalisasi]** Halaman panduan sekarang menampilkan sumber lokalisasi
- **[✨Optimalisasi]** Mengoptimalkan logika operasi dialog terkait Paspor Hutao
- **[✨Optimalisasi]** Catatan real-time sekarang akan menyegarkan secara otomatis setelah Hutao dimulai
- **[✨Optimalisasi]** Folder data sekarang akan disimpan di wadah secara default dan akan dihapus saat dicopot pemasangannya
- **[✨Optimalisasi]** Memodifikasi folder data sekarang akan secara otomatis menyalin data ke direktori baru [#1835](https://github.com/DGP-Studio/Snap.Hutao/issues/1835)

## 1.13.0

- **[🎉Baru]** Mengubah ikon program - Su Xue Tao Hong
- **[🎉Baru]** Menambahkan pengaturan zona waktu server kalender, memungkinkan penyesuaian zona waktu yang digunakan oleh kartu kalender halaman utama
- **[🎉Baru]** Menambahkan indikator pemuatan metadata ke bilah judul
- **[🎉Baru]** Menambahkan halaman Paspor Hutao dan menghapus bagian Paspor Hutao dari halaman pengaturan
  * Menambahkan fungsi reset email
  * Menambahkan fungsi penyegaran informasi pengguna
  * Mengintegrasikan fungsi kode penukaran
- **[🎉Baru]** Menambahkan prompt unduhan file gambar statis ke antarmuka panduan
- **[🎉Baru]** Memperkenalkan kembali fungsi login kode QR MiYouShe di panel pengguna
- **[✨Optimalisasi]** Ubah kata sandi/hapus akun Paspor Hutao sekarang default ke akun yang sedang masuk
- **[✨Optimalisasi]** Layanan cloud catatan permintaan dan layanan cloud CDN Paspor Hutao tidak lagi ditampilkan sebagai 1970 saat tidak ada waktu yang diperoleh
- **[✨Optimalisasi]** Menampilkan informasi DNS saat permintaan jaringan gagal
- **[✨Optimalisasi]** Menyesuaikan tampilan notifikasi Hutao, sekarang notifikasi parah (merah) / penting (kuning) tidak dapat ditutup secara manual
- **[✨Optimalisasi]** Menambahkan indikator pemuatan/tombol penyegaran ke jendela web ringkas
- **[✨Optimalisasi]** Mengoptimalkan masalah di mana pengubahan ukuran jendela yang sering dapat menyebabkan konten berkedip
- **[✨Optimalisasi]** Fungsi peluncuran game sekarang dengan benar meminta jalur kosong
- **[✨Optimalisasi]** Fungsi peluncuran game sekarang dengan benar menonaktifkan tombol pilih jalur game
- **[✨Optimalisasi]** Meningkatkan popup crash saat menggunakan gambar latar belakang kustom yang tidak didukung [#2335](https://github.com/DGP-Studio/Snap.Hutao/issues/2335)
- **[✨Optimalisasi]** Jendela baru yang muncul oleh manajemen file game di fungsi peluncuran game sekarang mempertahankan gaya tema yang sama dengan jendela utama
- **[✨Optimalisasi]** Manajemen file game di fungsi peluncuran game sekarang mendukung melanjutkan instalasi setelah terputus
- **[✨Optimalisasi]** Manajemen file game di fungsi peluncuran game sekarang menghitung cache instalasi tambahan 1 GB
- **[✨Optimalisasi]** Manajemen file game di fungsi peluncuran game sekarang secara dinamis membersihkan file yang tidak perlu selama instalasi
- **[✨Optimalisasi]** Manajemen file game di fungsi peluncuran game sekarang dengan benar melewati file yang sudah diperbarui
- **[✨Optimalisasi]** Antarmuka panduan tidak lagi secara otomatis melanjutkan ke langkah berikutnya setelah memilih bahasa
- **[✨Optimalisasi]** Prompt kesalahan dalam aplikasi sekarang dapat menyalin teks
- **[✨Optimalisasi]** Menyesuaikan efek tampilan atribut utama artefak di halaman Karakter Saya untuk membedakannya dari sub-atribut
- **[✨Optimalisasi]** Antarmuka Karakter Saya sekarang menampilkan prompt default setelah pencarian tidak menghasilkan hasil
- **[✨Optimalisasi]** Menyesuaikan UI fungsi Hutao Cloud di halaman catatan permintaan
- **[✨Optimalisasi]** Sekarang memeriksa apakah file yang dapat dieksekusi ada saat mencari jalur game secara otomatis
- **[✨Optimalisasi]** Fungsi estimasi resin pada tab statistik material di halaman Rencana Pengembangan sekarang mengingat tingkat dunia yang dipilih
- **[✨Optimalisasi]** Halaman Rencana Pengembangan sekarang menampilkan level bakat dalam baris terpisah untuk item budidaya
- **[🔨Perbaikan]** Memperbaiki masalah di mana beberapa perangkat dapat memicu tombol tertentu tanpa menggunakan fungsi klik cepat [#2296](https://github.com/DGP-Studio/Snap.Hutao/issues/2296)
- **[🔨Perbaikan]** Memperbaiki masalah crash pada perangkat dengan penskalaan tinggi saat jendela kecil [#2349](https://github.com/DGP-Studio/Snap.Hutao/issues/2290)
- **[🔨Perbaikan]** Memperbaiki masalah crash pada beberapa perangkat saat menghapus item budidaya [#2290](https://github.com/DGP-Studio/Snap.Hutao/issues/2290)
- **[🔨Perbaikan]** Memperbaiki masalah di mana mengimpor pencapaian dari aplikasi lain tidak akan menampilkan popup impor saat sudah di halaman pencapaian [#2306](https://github.com/DGP-Studio/Snap.Hutao/issues/2306)
- **[🔨Perbaikan]** Memperbaiki masalah di mana beberapa dialog mungkin dibuka dalam situasi tertentu [#2307](https://github.com/DGP-Studio/Snap.Hutao/issues/2307)
- **[🔨Perbaikan]** Memperbaiki masalah di mana jalur game tidak dapat diubah saat pra-unduh tersedia [#2317](https://github.com/DGP-Studio/Snap.Hutao/issues/2317)
- **[🔨Perbaikan]** Memperbaiki masalah di mana beberapa perangkat tidak dapat dengan benar menghitung aplikasi wadah, menyebabkan crash [#2339](https://github.com/DGP-Studio/Snap.Hutao/issues/2339)
- **[🔨Perbaikan]** Memperbaiki masalah di mana bonus bakat Tartaglia ke level skill serangan normal tidak ditampilkan di halaman Karakter Saya
- **[🔨Perbaikan]** Memperbaiki masalah di mana jumlah prompt salah saat menambahkan ke Rencana Pengembangan dari halaman Karakter Saya
- **[🔨Perbaikan]** Memperbaiki masalah di mana statistik tingkat penggunaan di halaman Teater Imaginarium tidak terpusat secara vertikal
- **[🔨Perbaikan]** Memperbaiki masalah di mana masuk lagi setelah kedaluwarsa Cookie masih akan menampilkan kesalahan jaringan
- **[🔨Perbaikan]** Memperbaiki masalah di mana fungsi klik cepat tidak berhenti mengklik setelah mematikan sakelar klik cepat
- **[🔨Perbaikan]** Memperbaiki masalah di mana latar belakang kartu nama karakter tidak terpusat secara vertikal dalam tampilan kisi di halaman Karakter Saya
- **[🔨Perbaikan]** Memperbaiki masalah di mana beberapa ikon dalam saran kotak pencarian tidak ditampilkan sepenuhnya di Karakter Saya/Data Karakter/Data Senjata
- **[🔨Perbaikan]** Memperbaiki masalah di mana ukuran jendela mungkin diinisialisasi ke ukuran yang salah dalam situasi tertentu
- **[🔨Perbaikan]** Memperbaiki masalah di mana kumpulan yang belum dimulai disertakan dalam tab waktu di halaman catatan permintaan
- **[🔨Perbaikan]** Memperbaiki masalah di mana catatan real-time tidak mengirim notifikasi dengan benar
- **[🔨Perbaikan]** Memperbaiki masalah tata letak di bagian eksplorasi karakter dari catatan real-time pada tingkat penskalaan tertentu
- **[🔨Perbaikan]** Memperbaiki masalah di mana keluar dari Paspor Hutao masih akan keluar bahkan jika pembatalan pendaftaran gagal

## 1.12.8

- **[🎉Baru]** Menambahkan fitur tekan otomatis tombol F keyboard, yang dapat diaktifkan dan dikonfigurasi di halaman pengaturan
- **[🔨Perbaikan]** Memperbaiki masalah di mana program akan crash saat memasuki halaman peluncuran game tanpa jalur game apa pun

## 1.12.7

- **[🔨Perbaikan]** Memperbaiki masalah di mana program akan crash saat memasuki halaman peluncuran game tanpa mengatur jalur game

## 1.12.6

- **[🎉Baru]** Peluncur game sekarang secara otomatis mendeteksi jalur game
- **[✨Optimalisasi]** Fitur "Hapus bilah kemajuan konfigurasi tim" sekarang hanya efektif saat pergantian tim diizinkan
- **[🔨Perbaikan]** Memperbaiki masalah di mana pembaruan tidak dapat diperiksa tanpa masuk ke Paspor Hutao
- **[🔨Perbaikan]** Memperbaiki masalah di mana warna latar belakang kartu kalender halaman utama mungkin salah
- **[🔨Perbaikan]** Memperbaiki potensi kebocoran memori saat mengubah batas kecepatan selama pengunduhan game
- **[🔨Perbaikan]** Memperbaiki masalah crash yang mungkin terjadi saat membatalkan pengunduhan game
- **[🔨Perbaikan]** Memperbaiki masalah crash saat membaca log Unity untuk mendapatkan catatan permintaan menggunakan cache web tanpa mengatur jalur game [#2272](https://github.com/DGP-Studio/Snap.Hutao/issues/2272)

## 1.12.5

- **[🎉Baru]** Menambahkan kustomisasi sakelar resolusi cepat di peluncur game
- **[🎉Baru]** Menambahkan catatan kumpulan historis ke hitung mundur riwayat permintaan
- **[🎉Baru]** Menambahkan estimasi resin ke rencana budidaya [#323](https://github.com/DGP-Studio/Snap.Hutao/issues/323) [#1540](https://github.com/DGP-Studio/Snap.Hutao/issues/1540)
- **[🔨Perbaikan]** Memperbaiki masalah di mana latar belakang mungkin tidak berubah saat beralih tema
- **[🔨Perbaikan]** Memperbaiki masalah di mana beberapa elemen mungkin menampilkan tema warna yang salah dalam situasi tertentu
- **[🔨Perbaikan]** Memperbaiki potensi kerentanan melalui injeksi inisialisasi metadata [#2240](https://github.com/DGP-Studio/Snap.Hutao/issues/2240)
- **[🔨Perbaikan]** Memperbaiki masalah di mana versi game lokal mungkin tidak dibaca dalam situasi tertentu [#2251](https://github.com/DGP-Studio/Snap.Hutao/issues/2251)
- **[🔨Perbaikan]** Memperbaiki masalah di mana server internasional tidak dapat menyegarkan catatan permintaan dalam situasi tertentu [#2252](https://github.com/DGP-Studio/Snap.Hutao/issues/2252)
- **[🔨Perbaikan]** Memperbaiki masalah di mana karakter atau senjata mungkin muncul tanpa material setelah menimpa rencana budidaya
- **[🔨Perbaikan]** Memperbaiki masalah di mana pengaturan transparansi jendela web ringkas tidak efektif [#2258](https://github.com/DGP-Studio/Snap.Hutao/issues/2258)
- **[🔨Perbaikan]** Memperbaiki masalah buffer overflow saat keluar dari Snap Hutao dari menu baki di beberapa sistem
- **[✨Optimalisasi]** Halaman peluncur game sekarang akan mengganti akun dengan nama yang sama alih-alih membuat yang baru
- **[✨Optimalisasi]** Rencana budidaya sekarang akan mencoba mendapatkan jumlah material ransel yang lebih akurat
- **[✨Optimalisasi]** Mengoptimalkan ukuran Snap Hutao

## 1.12.4

- **[🔨Perbaikan]** Memperbaiki masalah di mana pengaturan resolusi tidak dapat disimpan setelah meluncurkan game [#2229](https://github.com/DGP-Studio/Snap.Hutao/issues/2229)
- **[🔨Perbaikan]** Memperbaiki masalah di mana waktu penyelesaian pencapaian ditampilkan secara tidak benar [#2184](https://github.com/DGP-Studio/Snap.Hutao/issues/2184)
- **[🔨Perbaikan]** Memperbaiki masalah di mana ransel rencana budidaya tidak dapat disegarkan [#2212](https://github.com/DGP-Studio/Snap.Hutao/issues/2212)
- **[🔨Perbaikan]** Memperbaiki masalah di mana kunci pintas untuk maju/mundur cepat di jendela web ringkas tidak berfungsi
- **[🔨Perbaikan]** Memperbaiki masalah di mana memilih jendela file akan menyebabkan crash di beberapa sistem
- **[🔨Perbaikan]** Memperbaiki masalah di mana memilih sumber unduhan saat memperbarui Snap Hutao tidak efektif
- **[✨Optimalisasi]** Sekarang memeriksa status proxy dan loopback saat startup dan memandu pengguna untuk menghapus batasan loopback jika tidak dapat terhubung ke internet
- **[✨Optimalisasi]** Jendela web ringkas sekarang mengingat halaman dari penutupan terakhir

## 1.12.3 <Badge text="perbaikan terbaru" type="warning" />

- **[🔨Perbaikan]** Memperbaiki masalah crash yang disebabkan oleh ikon baki tidak sinkron [#2198](https://github.com/DGP-Studio/Snap.Hutao/issues/2198)
- **[🔨Perbaikan]** Memperbaiki masalah di mana program menjadi tidak dapat digunakan karena kegagalan inisialisasi metadata yang disebabkan oleh kegagalan inisialisasi ikon baki [#2202](https://github.com/DGP-Studio/Snap.Hutao/issues/2202)

## 1.12.2

- **[🎉Baru]** Menambahkan kunci pintas untuk maju/mundur cepat di jendela web ringkas
- **[🔨Perbaikan]** Memperbaiki masalah di mana status pemilihan abnormal rencana budidaya mencegah Snap Hutao dimulai [#2174](https://github.com/DGP-Studio/Snap.Hutao/issues/2174)
- **[🔨Perbaikan]** Memperbaiki masalah di mana ikon baki mungkin tidak dibuat dengan benar setelah memulai ulang sebagai administrator dari menu baki
- **[🔨Perbaikan]** Memperbaiki masalah di mana waktu pengumuman ditampilkan secara tidak benar sebelum pembaruan versi game [#2175](https://github.com/DGP-Studio/Snap.Hutao/issues/2175)
- **[🔨Perbaikan]** Memperbaiki masalah di mana memilih ulang jalur game saat memulai game mungkin menyebabkan crash
- **[🔨Perbaikan]** Memperbaiki masalah di mana manajemen file game mungkin macet saat memperbaiki game
- **[🔨Perbaikan]** Memperbaiki masalah di mana profil pencapaian tidak dapat dialihkan menggunakan mouse saat jendela terlalu kecil [#2181](https://github.com/DGP-Studio/Snap.Hutao/issues/2181)
- **[🔨Perbaikan]** Memperbaiki masalah di mana mengunggah catatan Sprial Abyss tanpa masuk ke Paspor Hutao menyebabkan crash [#2169](https://github.com/DGP-Studio/Snap.Hutao/issues/2169)
- **[🔨Perbaikan]** Memperbaiki masalah di mana server internasional tidak dapat menyegarkan Teater Imaginarium dengan benar [#2170](https://github.com/DGP-Studio/Snap.Hutao/issues/2170)
- **[🔨Perbaikan]** Memperbaiki masalah di mana menambahkan senjata ke rencana budidaya mungkin menyebabkan crash [#2168](https://github.com/DGP-Studio/Snap.Hutao/issues/2168)
- **[✨Optimalisasi]** Mengoptimalkan efek tampilan ikon prompt pra-unduh dalam manajemen file game
- **[✨Optimalisasi]** Menambahkan tombol luncurkan game untuk setiap karakter game di halaman Catatan Real-time, yang akan melompat ke halaman peluncuran game dan secara otomatis mengganti pengguna MiYouShe/HoYoLAB ke pengguna yang sesuai dari catatan tersebut [#1318](https://github.com/DGP-Studio/Snap.Hutao/issues/1318)
- **[✨Optimalisasi]** Mengoptimalkan kecepatan pemuatan ikon karakter dan senjata

## 1.12.1 <Badge text="perbaikan terbaru" type="warning" />

- **[🔨Perbaikan]** Memperbaiki masalah di mana program tidak dapat dimulai karena kegagalan migrasi database [#2159](https://github.com/DGP-Studio/Snap.Hutao/issues/2159)

## 1.12.0

- **[🎉Baru]** Ditingkatkan ke .NET 9
- **[🎉Baru]** Menambahkan perintah ke menu klik kanan ikon notifikasi untuk meluncurkan jendela web ringkas
  - Jendela web ringkas adalah jendela teratas yang dapat menjadi semi-transparan saat tidak berinteraksi
  - Anda dapat mengatur kunci pintas untuk memutar/menjeda video di jendela web di halaman pengaturan
  - Menggunakan jendela web ringkas memerlukan berjalan sebagai administrator
- **[🎉Baru]** Menambahkan halaman baru untuk Pertarungan Peran [#1671](https://github.com/DGP-Studio/Snap.Hutao/issues/1671)
- **[🔨Perbaikan]** Memperbaiki masalah crash saat beralih server game menggunakan mode SophonChunk
- **[🔨Perbaikan]** Memperbaiki kesalahan logika dalam beberapa kasus spesifik dengan opsi injeksi peluncuran game
- **[🔨Perbaikan]** Memperbaiki masalah di mana beberapa sakelar dalam opsi injeksi tidak interaktif setelah penghentian paksa game karena kegagalan injeksi
- **[🔨Perbaikan]** Memperbaiki masalah di mana server internasional tidak dapat menyegarkan catatan permintaan melalui cache web [#2141](https://github.com/DGP-Studio/Snap.Hutao/issues/2141)
- **[🔨Perbaikan]** Memperbaiki masalah di mana detail gelombang serangan di halaman Spiral Abyss mungkin tidak sepenuhnya diperluas dalam bahasa non-Cina [#2152](https://github.com/DGP-Studio/Snap.Hutao/issues/2152)
- **[🔨Perbaikan]** Memperbaiki masalah crash yang disebabkan oleh kegagalan menginisialisasi hotkey auto-click dalam kasus khusus
- **[✨Optimalisasi]** Saat meluncurkan game dari notifikasi Catatan Real-time, pengguna MiYouShe/HoYoLAB akan secara otomatis beralih ke pengguna yang sesuai

## 1.11.9 <Badge text="perbaikan terbaru" type="warning" />

- **[🎉Baru]** Menambahkan hitung mundur untuk kumpulan riwayat permintaan [#1341](https://github.com/DGP-Studio/Snap.Hutao/issues/1341)
- **[🔨Perbaikan]** Memperbaiki masalah di mana opsi injeksi peluncuran game tidak cocok dengan situasi sebenarnya [#2134](https://github.com/DGP-Studio/Snap.Hutao/issues/2134)
- **[🔨Perbaikan]** Memperbaiki masalah di mana mengaktifkan penyesuaian bidang pandang dapat menyebabkan kegagapan dalam adegan tim dan beberapa ledakan elemen karakter [#2137](https://github.com/DGP-Studio/Snap.Hutao/issues/2137)
- **[🔨Perbaikan]** Memperbaiki masalah di mana WebView mungkin crash saat gagal muncul secara normal

## 1.11.8 <Badge text="perbaikan terbaru" type="warning" />

- **[🔨Perbaikan]** Memperbaiki masalah di mana fitur injeksi untuk server luar negeri tidak berfungsi [#2121](https://github.com/DGP-Studio/Snap.Hutao/issues/2121)
- **[🔨Perbaikan]** Memperbaiki masalah di mana menyegarkan catatan permintaan melalui cache web tidak berfungsi [#2124](https://github.com/DGP-Studio/Snap.Hutao/issues/2124)
- **[✨Optimalisasi]** Mengoptimalkan logika antara sakelar opsi injeksi peluncuran game [#2122](https://github.com/DGP-Studio/Snap.Hutao/issues/2122)

## 1.11.7

- **[🎉Baru]** / **[✨Optimalisasi]** Menyesuaikan UI antarmuka peluncuran game
  - **[🎉Baru]** Menghapus bilah kemajuan dari antarmuka konfigurasi tim
  - **[🎉Baru]** Menambahkan fitur "Biarkan saya masuk! Mickey Mouse Clubhouse" (ya, sungguh)
- **[🎉Baru]** Menambahkan mode potongan untuk peralihan server di peluncur game
- **[🎉Baru]** Menambahkan kartu nama karakter ke WIKI karakter [#1424](https://github.com/DGP-Studio/Snap.Hutao/issues/1424)
- **[🔨Perbaikan]** Memperbaiki masalah di mana Snap Hutao mungkin crash pada peluncuran pertama hari itu [#2101](https://github.com/DGP-Studio/Snap.Hutao/issues/2101)
- **[🔨Perbaikan]** Memperbaiki masalah di mana jendela laporan kesalahan mungkin tidak ditampilkan dengan benar
- **[🔨Perbaikan]** Memperbaiki masalah dengan durasi pengumuman halaman utama yang salah
- **[🔨Perbaikan]** Memperbaiki masalah di mana manajemen file game mungkin crash pada jenis disk tertentu [#2077](https://github.com/DGP-Studio/Snap.Hutao/issues/2077)
- **[🔨Perbaikan]** Memperbaiki masalah di mana menyegarkan catatan permintaan melalui cache web mungkin menyebabkan crash [#2083](https://github.com/DGP-Studio/Snap.Hutao/issues/2083)
- **[🔨Perbaikan]** Memperbaiki masalah di mana ukuran jendela mungkin salah setelah memulai ulang di seluruh monitor
- **[✨Optimalisasi]** Kartu kalender sekarang menyoroti material yang dapat ditanam hari ini dalam rencana budidaya saat ini [#2045](https://github.com/DGP-Studio/Snap.Hutao/issues/2045)
- **[✨Optimalisasi]** "Karakter Saya" dan WIKI karakter tidak lagi menampilkan filter untuk item bintang 1 hingga 3 [#2110](https://github.com/DGP-Studio/Snap.Hutao/issues/2110)
- **[✨Optimalisasi]** Menambahkan akun MiYouShe/HoYoLAB sekarang menampilkan dialog untuk mencegah operasi pengguna hingga selesai

## 1.11.6 <Badge text="perbaikan terbaru" type="warning" />

- **[🔨Perbaikan]** Memperbaiki masalah di mana fitur yang memerlukan verifikasi akan crash setelah verifikasi [#2074](https://github.com/DGP-Studio/Snap.Hutao/issues/2074)
- **[🔨Perbaikan]** Memperbaiki masalah di mana fitur yang memerlukan pengunduhan sumber daya mungkin membeku

## 1.11.5

- **[🎉Baru]** Menambahkan login akun MiYouShe / HoYoLAB di peluncur game
- **[🎉Baru]** Menambahkan filter di halaman Karakter Saya [#1786](https://github.com/DGP-Studio/Snap.Hutao/issues/1786)
- **[🎉Baru]** Menambahkan opsi untuk menyimpan gambar dari aktivitas web di pengaturan [#1804](https://github.com/DGP-Studio/Snap.Hutao/issues/1804)
- **[🎉Baru]** Menambahkan login akun dan pihak ketiga untuk server luar negeri [#1966](https://github.com/DGP-Studio/Snap.Hutao/issues/1966)
- **[🔨Perbaikan]** Memperbaiki masalah crash saat menyegarkan gambar latar belakang
- **[🔨Perbaikan]** Memperbaiki masalah tampilan dengan penskalaan multi-monitor
- **[🔨Perbaikan]** Memperbaiki masalah di mana jendela laporan kesalahan mungkin tidak ditampilkan dengan benar
- **[🔨Perbaikan]** Tampilan pengaturan catatan real-time yang tidak lengkap dalam beberapa bahasa [#2040](https://github.com/DGP-Studio/Snap.Hutao/issues/2040)
- **[🔨Perbaikan]** Memperbaiki masalah di mana beberapa daftar tidak diproses dengan benar saat memperbarui rencana budidaya [#2022](https://github.com/DGP-Studio/Snap.Hutao/issues/2022)
- **[🔨Perbaikan]** Memperbaiki masalah di mana menyinkronkan item ransel dalam rencana budidaya mungkin tidak merespons [#2044](https://github.com/DGP-Studio/Snap.Hutao/issues/2044)
- **[🔨Perbaikan]** Memperbaiki masalah di mana jumlah item ransel mungkin salah saat menyinkronkan rencana budidaya [#2061](https://github.com/DGP-Studio/Snap.Hutao/issues/2061)
- **[🔨Perbaikan]** Memperbaiki masalah crash saat memasukkan kode verifikasi secara langsung tanpa mengklik "Dapatkan" selama login telepon MiYouShe [#2058](https://github.com/DGP-Studio/Snap.Hutao/issues/2058)
- **[✨Optimalisasi]** Mengoptimalkan logika aktif tombol pembaruan game
- **[✨Optimalisasi]** Meningkatkan batas level monster menjadi 110 [#1988](https://github.com/DGP-Studio/Snap.Hutao/issues/1988)
- **[✨Optimalisasi]** Jendela verifikasi sekarang akan muncul secara otomatis saat menghadapi CAPTCHA [#1616](https://github.com/DGP-Studio/Snap.Hutao/issues/1616)

## 1.11.4

- **[🎉Baru]** Menambahkan jendela laporan kesalahan yang muncul saat program crash
- **[🔨Perbaikan]** Memperbaiki masalah di mana program mungkin crash pada peluncuran pertama setelah menginstal/memperbarui Snap Hutao
- **[🔨Perbaikan]** Memperbaiki masalah di mana beberapa status Discord dapat diatur secara bersamaan [#2024](https://github.com/DGP-Studio/Snap.Hutao/issues/2024)
- **[🔨Perbaikan]** Memperbaiki masalah di mana baris pertama pengumuman game mungkin tidak merespons klik
- **[🔨Perbaikan]** Memperbaiki masalah di mana pengumuman server internasional tidak dapat diambil [#2030](https://github.com/DGP-Studio/Snap.Hutao/issues/2030)
- **[🔨Perbaikan]** Memperbaiki masalah di mana membuka kunci frame rate mungkin tidak berlaku setelah pembaruan versi 5.1
- **[🔨Perbaikan]** Memperbaiki masalah di mana pembaruan game tidak dapat diselesaikan dengan benar
- **[🔨Perbaikan]** Memperbaiki masalah di mana kemajuan instalasi di jendela pembaruan game mungkin melebihi 100%
- **[🔨Perbaikan]** Memperbaiki masalah di mana pra-unduh sumber daya game mungkin macet [#2029](https://github.com/DGP-Studio/Snap.Hutao/issues/2029)
- **[🔨Perbaikan]** Memperbaiki masalah di mana tanda penyelesaian mungkin tidak ditampilkan saat pra-unduh sumber daya game selesai
- **[🔨Perbaikan]** Memperbaiki masalah di mana statistik material di halaman perhitungan budidaya mungkin tidak merespons [#2014](https://github.com/DGP-Studio/Snap.Hutao/issues/2014)
- **[🔨Perbaikan]** Memperbaiki masalah di mana login kode verifikasi telepon MiYouShe mungkin gagal
- **[✨Optimalisasi]** Menambahkan "Prioritas untuk set yang tidak lengkap" dalam statistik material di halaman perhitungan budidaya
- **[✨Optimalisasi]** Sekarang menampilkan material yang dapat diperoleh hari ini dalam statistik material di halaman perhitungan budidaya

## 1.11.3

- **[🎉Baru]** Menambahkan kartu kalender di halaman utama [#1923](https://github.com/DGP-Studio/Snap.Hutao/issues/1923)
- **[🎉Baru]** Menambahkan rekomendasi atribut artefak di halaman Karakter Saya
- **[🔨Perbaikan]** Memperbaiki masalah di mana beberapa monster tidak ditampilkan dengan benar di halaman Spiral Abyss
- **[🔨Perbaikan]** Memperbaiki masalah di mana halaman data karakter/senjata bisa membeku [#1999](https://github.com/DGP-Studio/Snap.Hutao/issues/1999)
- **[🔨Perbaikan]** Memperbaiki masalah crash saat beralih server game
- **[✨Optimalisasi]** Mencegah penutupan jendela operasi secara langsung saat operasi file game belum selesai [#2002](https://github.com/DGP-Studio/Snap.Hutao/issues/2002)
- **[✨Optimalisasi]** Menambahkan tombol impor/ekspor di halaman Catatan Permintaan untuk akses yang lebih mudah ke tombol impor/ekspor di halaman pengaturan

## 1.11.2

- **[🎉Baru]** Menambahkan kemampuan untuk memfilter hanya pencapaian komisi di halaman manajemen pencapaian [#897](https://github.com/DGP-Studio/Snap.Hutao/issues/897)
- **[🎉Baru]** Menambahkan fitur batas kecepatan unduh game di halaman pengaturan
- **[🎉Baru]** Menambahkan tautan alat web untuk meningkatkan versi UIGF di bagian impor/ekspor catatan permintaan di halaman pengaturan
- **[🔨Perbaikan]** Memperbaiki masalah di mana menyalin file di dalam paket aplikasi pada perangkat tertentu akan meminta bahwa file yang ditentukan tidak dapat dienkripsi
  - Masalah ini sebelumnya menyebabkan
    - Ketidakmampuan untuk membuat pintasan desktop
    - Ketidakmampuan untuk membuka kunci frame rate game
- **[🔨Perbaikan]** Memperbaiki masalah penggunaan CPU yang tidak normal saat mengunduh game di halaman luncurkan game [#1964](https://github.com/DGP-Studio/Snap.Hutao/issues/1964)
- **[🔨Perbaikan]** Memperbaiki masalah di mana pembaruan game tidak berlaku
- **[🔨Perbaikan]** Memperbaiki masalah di mana beralih ke karakter tanpa artefak di halaman Karakter Saya akan menyebabkan program crash [#1954](https://github.com/DGP-Studio/Snap.Hutao/issues/1954)
- **[🔨Perbaikan]** Memperbaiki masalah permintaan catatan real-time gagal dengan kode kesalahan -1
- **[🔨Perbaikan]** Memperbaiki masalah di mana beberapa perangkat tidak dapat beralih file simpanan di halaman manajemen pencapaian [#1987](https://github.com/DGP-Studio/Snap.Hutao/issues/1987)
- **[✨Optimalisasi]** Judul dan tooltip pencapaian di halaman manajemen pencapaian sekarang dapat dipilih dan disalin [#1726](https://github.com/DGP-Studio/Snap.Hutao/issues/1726)
- **[✨Optimalisasi]** Mencari pencapaian di halaman manajemen pencapaian sekarang memfilter berdasarkan kategori pencapaian juga [#1907](https://github.com/DGP-Studio/Snap.Hutao/issues/1907)
- **[✨Optimalisasi]** Menyesuaikan tautan antarmuka untuk pengumuman server CN [Scighost/Starward#1089](https://github.com/Scighost/Starward/issues/1089)

## 1.11.1

- **[🎉Baru]** Menambahkan perintah untuk menjalankan skrip debug di menu klik kanan ikon notifikasi
- **[🎉Baru]** Menambahkan perintah untuk memulai ulang dalam mode administrator di menu klik kanan ikon notifikasi [#1825](https://github.com/DGP-Studio/Snap.Hutao/issues/1825)
- **[🔨Perbaikan]** Jendela log pembaruan pada peluncuran pertama setelah pembaruan sekarang dengan benar mengenali bahasa Snap Hutao [#1900](https://github.com/DGP-Studio/Snap.Hutao/issues/1900)
- **[🔨Perbaikan]** Memperbaiki masalah di mana fungsi unduh dan perbaikan game di peluncur game tidak dapat digunakan dengan benar
- **[🔨Perbaikan]** Memperbaiki masalah di mana opsi latar belakang peluncur tidak berfungsi dengan benar [#1908](https://github.com/DGP-Studio/Snap.Hutao/issues/1908)
- **[🔨Perbaikan]** Memperbaiki masalah di mana mengimpor file UIGF v4.0 tidak memilih bagian yang benar untuk diimpor [#1941](https://github.com/DGP-Studio/Snap.Hutao/issues/1941)
- **[🔨Perbaikan]** Memperbaiki masalah di mana tata letak dialog salah saat mengimpor file UIGF v4.0
- **[🔨Perbaikan]** Memperbaiki masalah di mana memeriksa atau menghapus centang pencapaian dalam manajemen pencapaian akan menghapus pilihan kategori pencapaian jika kategori pencapaian dipilih [#1946](https://github.com/DGP-Studio/Snap.Hutao/issues/1946)
- **[✨Optimalisasi]** Sekarang teks HoYoLAB akan disembunyikan saat mengarahkan kursor ke pengguna HoYoLAB di panel pengguna [#1824](https://github.com/DGP-Studio/Snap.Hutao/issues/1824)
- **[✨Optimalisasi]** Rencana budidaya sekarang dapat dengan benar mengenali bakat dan material terobosan senjata Natash
- **[✨Optimalisasi]** Menyesuaikan bidang pandang untuk membuka kunci frame rate
- **[✨Optimalisasi]** Mengoptimalkan logika unduhan multi-utas saat beralih server
- **[✨Optimalisasi]** Mengoptimalkan UI jendela pop-up untuk fungsi unduh dan perbaikan game di peluncur game

## 1.11.0

- **[🎉Baru]** Menambahkan tampilan kemajuan titik ekspedisi jangka panjang di halaman Catatan Real-time [#1841](https://github.com/DGP-Studio/Snap.Hutao/issues/1841)
- **[🎉Baru]** **[BETA]** Menambahkan fungsionalitas unduh/perbaikan/pra-unduh/pembaruan game ke peluncur game
- **[🔨Perbaikan]** Memperbaiki masalah tidak bisa masuk ke MiYouShe melalui kode QR, menghapus opsi login kode QR, menambahkan metode login kode verifikasi telepon [#1819](https://github.com/DGP-Studio/Snap.Hutao/issues/1819)
- **[🔨Perbaikan]** Memperbaiki masalah di mana level skill karakter ditampilkan secara tidak konsisten dalam daftar halaman Karakter Saya dan tampilan kisi karena bonus konstelasi [#1838](https://github.com/DGP-Studio/Snap.Hutao/issues/1838)
- **[🔨Perbaikan]** Memperbaiki masalah di mana beralih ke halaman lain saat pengumuman halaman utama masih dimuat akan menyebabkan crash [#1845](https://github.com/DGP-Studio/Snap.Hutao/issues/1845)
- **[🔨Perbaikan]** Memperbaiki masalah di mana membaca informasi versi paket lokal gagal saat beralih server game akan menyebabkan crash [#1851](https://github.com/DGP-Studio/Snap.Hutao/issues/1851)
- **[🔨Perbaikan]** Memperbaiki masalah di mana memperoleh catatan permintaan di server internasional menampilkan "AuthKey Kedaluwarsa" [#1873](https://github.com/DGP-Studio/Snap.Hutao/issues/1873)
- **[🔨Perbaikan]** Memperbaiki masalah di mana menavigasi ke halaman Karakter Saya/Spiral Abyss tanpa masuk ke MiYouShe atau HoYoLAB mencegah operasi lebih lanjut [#1877](https://github.com/DGP-Studio/Snap.Hutao/issues/1877)
- **[🔨Perbaikan]** Memperbaiki masalah di mana menyegarkan Catatan Real-time di perangkat tertentu akan menyebabkan crash [#1893](https://github.com/DGP-Studio/Snap.Hutao/issues/1893)
- **[🔨Perbaikan]** Memperbaiki masalah di mana pengumuman halaman utama tidak ditampilkan dengan benar dan beberapa warna teks dirender salah dalam mode gelap
- **[🔨Perbaikan]** Memperbaiki masalah di mana latar belakang aplikasi tidak beralih dengan benar
- **[✨Optimalisasi]** Menyesuaikan posisi tampilan notifikasi dalam aplikasi [#1832](https://github.com/DGP-Studio/Snap.Hutao/issues/1832)
- **[✨Optimalisasi]** Mengoptimalkan pesan kesalahan dalam aplikasi untuk permintaan jaringan
- **[✨Optimalisasi]** Meningkatkan pengalaman mengunduh pembaruan, sekarang Anda dapat memilih cermin untuk mengunduh
- **[✨Optimalisasi]** Mengoptimalkan fitur buka kunci frame rate, menghapus mode klasik, menambahkan modifikasi bidang pandang/penghapusan kabut/mode kompatibilitas dalam mode injeksi

## 1.10.7

- **[🎉Baru]** Menambahkan fitur untuk mengekspor informasi karakter yang dipilih dalam bentuk teks ke clipboard di halaman Karakter Saya [#1497](https://github.com/DGP-Studio/Snap.Hutao/issues/1497)
- **[🎉Baru]** Menambahkan dukungan impor dan ekspor UIGF 4 di halaman pengaturan, menghapus dukungan impor dan ekspor UIGF 2 dan UIGF 3 di fitur Ekspor Permintaan
- **[🔨Perbaikan]** Memperbaiki masalah di mana tampilan tidak akan disegarkan saat menghapus file simpanan di halaman Ekspor Permintaan
- **[🔨Perbaikan]** Memperbaiki masalah di mana penyegaran otomatis Catatan Real-time diaktifkan secara default
- **[🔨Perbaikan]** Memperbaiki masalah di mana judul tidak akan ditampilkan dengan benar saat lebar webview terlalu sempit
- **[🔨Perbaikan]** Memperbaiki masalah di mana akun HoYoLAB tidak dapat menambahkan karakter atau senjata di Rencana Pengembangan [#1810](https://github.com/DGP-Studio/Snap.Hutao/issues/1810)
- **[🔨Perbaikan]** Memperbaiki masalah gagal membuka kunci frame rate [#1820](https://github.com/DGP-Studio/Snap.Hutao/issues/1820)
- **[✨Optimalisasi]** Mengoptimalkan interaksi navigasi jendela utama, sekarang navigasi ke halaman lain saat halaman belum sepenuhnya dimuat tidak diizinkan, dan jendela log pembaruan sekarang akan ditampilkan pada peluncuran pertama setelah pembaruan
- **[✨Optimalisasi]** Mengoptimalkan tampilan notifikasi dalam aplikasi
- **[✨Optimalisasi]** Mengoptimalkan proses penambahan item ke Rencana Pengembangan, sekarang Anda dapat memilih mode simpan
- **[✨Optimalisasi]** Mengoptimalkan prompt informasi untuk permintaan HTTP [#1720](https://github.com/DGP-Studio/Snap.Hutao/issues/1720)

## 1.10.6

- **[🔨Perbaikan]** Memperbaiki masalah di mana aplikasi tidak dapat dimulai karena pengguna mengubah jalur game secara manual [#1792](https://github.com/DGP-Studio/Snap.Hutao/issues/1792)
- **[🔨Perbaikan]** Memperbaiki masalah di mana konten halaman tidak diperbarui setelah menyegarkan catatan permintaan [#1791](https://github.com/DGP-Studio/Snap.Hutao/issues/1791)
- **[🔨Perbaikan]** Memperbaiki crash yang terjadi saat catatan permintaan yang disegarkan berbeda dari UID saat ini [#1794](https://github.com/DGP-Studio/Snap.Hutao/issues/1794)
- **[🔨Perbaikan]** Memperbaiki masalah di mana ukuran jendela web salah pada monitor dengan tingkat penskalaan selain 100% [#1795](https://github.com/DGP-Studio/Snap.Hutao/issues/1795)
- **[🔨Perbaikan]** Memperbaiki crash yang terjadi saat mengikat UID Catatan Real-time di halaman peluncuran game
- **[✨Optimalisasi]** Menyesuaikan format tampilan waktu untuk pengiriman ekspedisi di Catatan Real-time [#1796](https://github.com/DGP-Studio/Snap.Hutao/issues/1796)

## 1.10.5

- Menambahkan mode buka kunci injeksi, yang dapat dicoba saat mode klasik tidak efektif
- WebView sekarang ditampilkan di jendela terpisah
- Memperbaiki masalah di mana beralih dari server OS ke server CN dapat menyebabkan kelainan data game [#1750](https://github.com/DGP-Studio/Snap.Hutao/issues/1750)
- Memperbaiki masalah di mana beberapa perangkat lunak perekaman layar dapat menangkap jendela yang salah [#1771](https://github.com/DGP-Studio/Snap.Hutao/issues/1771)
- Memperbaiki masalah di mana menambahkan akun HoYoLAB dalam kondisi tertentu dapat menyebabkan program crash [#1774](https://github.com/DGP-Studio/Snap.Hutao/issues/1774)
- Memperbaiki masalah di mana beberapa kontrol ditampilkan secara tidak benar dalam mode gelap [#1633](https://github.com/DGP-Studio/Snap.Hutao/issues/1633)
- Memperbaiki masalah di mana mengimpor pencapaian melalui protokol URL tidak akan menampilkan antarmuka dengan benar [#1763](https://github.com/DGP-Studio/Snap.Hutao/issues/1763)
- Memperbaiki masalah di mana ikon skill tidak akan ditampilkan dengan benar dalam skenario tertentu [#1784](https://github.com/DGP-Studio/Snap.Hutao/issues/1784)
- Memperbaiki masalah di mana beberapa pengumuman acara memiliki waktu yang salah
- Memperbaiki masalah penyelarasan dengan beberapa elemen
- Mengoptimalkan efek tampilan beberapa halaman
- Memfaktorkan ulang kode dasar
- Masalah QA lainnya

## 1.10.4

- **[🎉Baru]** Menambahkan perbandingan data sebelumnya di bagian Statistik Saat Ini/Data Karakter/Data Senjata Spiral Abyss dari Database Snap Hutao
- **[🎉Baru]** Menambahkan kemampuan untuk memperoleh material ransel di Rencana Pengembangan [#1651](https://github.com/DGP-Studio/Snap.Hutao/issues/1651)
- **[🎉Baru]** Menambahkan dukungan salin klik kanan ke semua gambar
- **[🎉Baru]** Menambahkan fungsionalitas untuk menampilkan avatar karakter game di panel pengguna
- **[🔨Perbaikan]** Memperbaiki masalah di mana membuka kunci frame rate akan mencegah konversi server game karena pendudukan file [#1703](https://github.com/DGP-Studio/Snap.Hutao/issues/1703)
- **[🔨Perbaikan]** Memperbaiki masalah di mana mengimpor pencapaian dari program lain menggunakan protokol URL akan menyebabkan pembekuan saat Snap Hutao tidak berjalan [#1704](https://github.com/DGP-Studio/Snap.Hutao/issues/1704)
- **[🔨Perbaikan]** Memperbaiki masalah di mana waktu penyegaran aktual catatan real-time diperbesar 60 kali [#1710](https://github.com/DGP-Studio/Snap.Hutao/issues/1710)
- **[🔨Perbaikan]** Meningkatkan ambang batas notifikasi resin maksimum menjadi 200 [#1711](https://github.com/DGP-Studio/Snap.Hutao/issues/1711)
- **[🔨Perbaikan]** Gambar latar belakang peluncur sekarang menggunakan versi tanpa teks [#1688](https://github.com/DGP-Studio/Snap.Hutao/issues/1688)
- **[🔨Perbaikan]** Mengubah logika aktivasi dari pusat notifikasi Windows, memperbaiki masalah di mana notifikasi tidak dapat dialihkan dengan benar dalam mode administrator
- **[🔨Perbaikan]** Memperbaiki masalah di mana semua material atau semua item ransel akan dirender secara tidak benar di halaman Rencana Pengembangan dalam skenario tertentu
- **[✨Optimalisasi]** Meningkatkan efek tampilan beberapa kontrol
- **[✨Optimalisasi]** Mengubah logika aktivasi/penutupan jendela, sekarang langsung ditutup alih-alih disembunyikan saat sudah terbuka
- **[✨Optimalisasi]** Menyesuaikan UI untuk menampilkan daftar paket di bagian Sumber Daya Game Peluncuran Game
- **[✨Optimalisasi]** Halaman data senjata sekarang menggunakan penyortiran dalam game
- **[✨Optimalisasi]** Mengoptimalkan tanda baca dan susunan kata dari beberapa teks
- **[✨Optimalisasi]** Perbaikan kinerja lainnya dan perbaikan masalah pengujian QA

## 1.10.3

- **[🎉Baru]** Ikon area notifikasi sekarang mendukung tampilkan menu dengan klik kiri [#1656](https://github.com/DGP-Studio/Snap.Hutao/issues/1656)
- **[🔨Perbaikan]** Memperbaiki masalah di mana fitur buka kunci frame rate di peluncur game gagal di versi 4.7 game [#1675](https://github.com/DGP-Studio/Snap.Hutao/issues/1675)
- **[🔨Perbaikan]** Memperbaiki masalah di mana menutup jendela utama di sistem Windows 10 tidak akan memunculkan notifikasi ikon baki dengan benar
- **[🔨Perbaikan]** Memperbaiki masalah di mana lokasi ikon baki tidak dapat diperoleh dengan benar di sistem Windows 10, menyebabkan crash
- **[🔨Perbaikan]** Memperbaiki masalah di mana jendela tidak akan diingat saat diubah ukurannya menjadi lebih kecil dari ukuran awal [#1657](https://github.com/DGP-Studio/Snap.Hutao/issues/1657)
- **[🔨Perbaikan]** Memperbaiki masalah di mana pengalihan aplikasi gagal dalam beberapa skenario
- **[🔨Perbaikan]** Memperbaiki masalah di mana data jendela luncurkan game kedaluwarsa dalam beberapa skenario
- **[🔨Perbaikan]** Memperbaiki masalah di mana semua material dalam rencana budidaya disorot pada hari Minggu
- **[🔨Perbaikan]** Memperbaiki masalah di mana jendela panduan dapat dimaksimalkan
- **[🔨Perbaikan]** Memperbaiki masalah di mana folder tangkapan layar game tidak dapat dibuka saat tidak ada
- **[🔨Perbaikan]** Memperbaiki masalah di mana versi dev dan versi resmi menggunakan pengidentifikasi notifikasi yang sama, menyebabkan aktivasi berulang <Badge text="Fitur pengembang" type="tip" />
- **[✨Optimalisasi]** Menonaktifkan sementara entri login web MiYouShe di panel pengguna
- **[✨Optimalisasi]** Menghapus daftar lompat menu klik kanan ikon Snap Hutao di bilah tugas dan menu mulai
- **[✨Optimalisasi]** Mengoptimalkan gaya notifikasi dalam aplikasi [#1650](https://github.com/DGP-Studio/Snap.Hutao/issues/1650)
- **[✨Optimalisasi]** Mengoptimalkan gaya panel properti karakter di Karakter Saya
- **[✨Optimalisasi]** Mengoptimalkan gaya pengaturan catatan real-time di Catatan Real-time
- **[✨Optimalisasi]** Mengoptimalkan kinerja kecerahan gambar pengumuman game di halaman utama dalam mode gelap
- **[✨Optimalisasi]** Mengoptimalkan kinerja kecerahan gambar kumpulan dalam statistik permintaan global dalam catatan permintaan dalam mode gelap
- **[✨Optimalisasi]** Mengoptimalkan efek tampilan beberapa teks
- **[✨Optimalisasi]** Mengoptimalkan kecepatan pemuatan beberapa halaman
- **[✨Optimalisasi]** Peningkatan kinerja lainnya
- **[🌏Lokalisasi]** Menambahkan dukungan bahasa Vietnam

## 1.10.2

- **[🎉Baru]** Memperkenalkan mekanisme coba lagi untuk pengunduhan sumber daya statis
- **[🎉Baru]** Menambahkan Fitur Catatan Real-time untuk melihat kemajuan Pencarian Archon [#1203](https://github.com/DGP-Studio/Snap.Hutao/issues/1203)
- **[🎉Baru]** Menyorot semua material yang relevan pada hari Minggu di Rencana Pengembangan [#1607](https://github.com/DGP-Studio/Snap.Hutao/issues/1607)
- **[🎉Baru]** Menambahkan opsi untuk menampilkan ikon di area notifikasi sistem (system tray)
  - Menambahkan sakelar ikon area notifikasi di pengaturan
  - Perilaku aplikasi berubah saat ikon area notifikasi diaktifkan
  - **[✨Optimalisasi]** Aplikasi tidak akan keluar saat semua jendela ditutup; hanya keluar saat dipilih dari menu klik kanan ikon system tray
  - **[✨Optimalisasi]** Menutup jendela memicu prompt jika ikon berada di area yang diciutkan
  - **[✨Optimalisasi/Perubahan Merusak]** Penyegaran berjangka waktu Catatan Real-time tidak lagi dipicu saat tidak berjalan di latar belakang (penyegaran oleh Tugas Terjadwal Windows dihapus)
  - **[✨Optimalisasi]** Pengaturan waktu penyegaran/sakelar penyegaran Catatan Real-time tidak lagi memerlukan mode administrator
- **[🔨Perbaikan]** Memperbaiki masalah di mana gambar mungkin tidak dimuat saat beralih ke tampilan daftar jika tampilan default data karakter/data senjata/data monster/antarmuka manajemen pencapaian bukan tampilan daftar
- **[🔨Perbaikan]** Memperbaiki masalah ketidakmampuan sesekali untuk keluar dari program secara normal yang disebabkan oleh pemeriksaan pengaturan proxy sistem
- **[🔨Perbaikan]** Memperbaiki masalah di mana item tas tidak beralih sesuai saat beralih rencana pertumbuhan [#1609](https://github.com/DGP-Studio/Snap.Hutao/issues/1609)
- **[🔨Perbaikan]** Memperbaiki masalah di mana memodifikasi status penyelesaian satu pencapaian akan salah menghapus pilihan kategori pencapaian [#1631](https://github.com/DGP-Studio/Snap.Hutao/issues/1631)
- **[🔨Perbaikan]** Memperbaiki masalah di mana pengaturan kunci pintas akan terhalang oleh bilah judul saat membuka panel tombol bantu di dekat bilah judul [#1632](https://github.com/DGP-Studio/Snap.Hutao/issues/1632)
- **[🔨Perbaikan]** Memperbaiki masalah di mana rentang waktu beberapa pengumuman baru tidak cocok dengan benar [#1613](https://github.com/DGP-Studio/Snap.Hutao/issues/1613)
- **[🔨Perbaikan]** Memperbaiki masalah di mana tab statistik di halaman catatan permintaan akan menampilkan rasio kumpulan 0 seri sebagai NaN [#1588](https://github.com/DGP-Studio/Snap.Hutao/issues/1588)
- **[✨Optimalisasi]** Menghapus daftar tugas dari menu klik kanan ikon bilah tugas
- **[✨Optimalisasi]** Menambahkan dialog konfirmasi kedua untuk menghapus rencana pertumbuhan [#1608](https://github.com/DGP-Studio/Snap.Hutao/issues/1608)
- **[✨Optimalisasi]** Menambahkan prompt untuk kode kesalahan HoYoLAB 2001 [#1542](https://github.com/DGP-Studio/Snap.Hutao/issues/1542)
- **[✨Optimalisasi]** Menambahkan tab perbandingan kualitas ke halaman pemilihan kualitas antarmuka panduan [#1595](https://github.com/DGP-Studio/Snap.Hutao/issues/1595)
- **[✨Optimalisasi]** Menonaktifkan pengaturan pintasan auto-click dalam mode non-administrator
- **[✨Optimalisasi]** Peningkatan kinerja lainnya
- **[🌏Lokalisasi]** Menambahkan dukungan bahasa Prancis

## 1.10.1 <Badge text="perbaikan terbaru" type="warning" />

- **[🔨Perbaikan]** Memperbaiki masalah konversi server game

## 1.10.0

- **[🎉Baru]** Menambahkan opsi untuk kualitas gambar, pengguna sekarang dapat memilih ukuran yang jauh lebih kecil dengan kualitas gambar yang hampir tanpa kehilangan. [#1430](https://github.com/DGP-Studio/Snap.Hutao/issues/1430)
- **[🎉Baru]** Menambahkan tampilan item yang tidak diperoleh di tab Karakter dan Senjata pada Ekspor Permintaan. [#1355](https://github.com/DGP-Studio/Snap.Hutao/issues/1355)
- **[🎉Baru]** Menambahkan metode baru untuk memulai program dalam mode administrator secara default. [#1558](https://github.com/DGP-Studio/Snap.Hutao/issues/1558)
- **[🎉Baru]** Menambahkan opsi untuk menampilkan hanya kategori pencapaian yang belum selesai di halaman catatan pencapaian. [#896](https://github.com/DGP-Studio/Snap.Hutao/issues/896)
- **[🔨Perbaikan]** Memperbaiki masalah di mana bilah tugas yang tersembunyi tidak dapat ditampilkan saat memaksimalkan jendela utama di Windows 10. [#1571](https://github.com/DGP-Studio/Snap.Hutao/issues/1571)
- **[🔨Perbaikan]** Memperbaiki margin kartu atas yang salah di halaman pengaturan.
- **[🔨Perbaikan]** Memperbaiki masalah di mana game atau program akan crash saat memulai setelah monitor dipasang/dilepas.
- **[🔨Perbaikan]** Memperbaiki masalah di mana Statistik Permintaan Global di halaman Ekspor Permintaan tidak dapat dilihat saat tidak ada catatan permintaan.
- **[🔨Perbaikan]** Memperbaiki masalah di mana pencarian gambar cache menunjuk ke jalur yang salah, yang menyebabkan perlunya pengunduhan sumber daya gambar berulang.
- **[🔨Perbaikan]** Memperbaiki masalah di mana waktu mulai dan berakhir pengumuman salah saat versi belum diperbarui.
- **[🔨Perbaikan]** Memperbaiki masalah di mana meluncurkan Hutao dalam pemeriksaan pembaruan Discord dapat menyebabkan crash.
- **[✨Optimalisasi]** Meningkatkan efek tampilan jendela mengambang sebelum dan sesudah mengklik tombol tampilkan di kotak input kata sandi. [#1485](https://github.com/DGP-Studio/Snap.Hutao/issues/1485)
- **[✨Optimalisasi]** Proses pembaruan perangkat lunak sekarang hanya dimulai setelah konfirmasi pengguna, tidak lagi dimulai secara default. [#1297](https://github.com/DGP-Studio/Snap.Hutao/issues/1297)
- **[✨Optimalisasi]** Saat pengguna tidak masuk ke Hutao Cloud, mereka akan diminta dengan pop-up sebelum mengunggah catatan Abyss untuk menghindari kehilangan kesempatan mengklaim hadiah. [#1245](https://github.com/DGP-Studio/Snap.Hutao/issues/1245)
- **[✨Optimalisasi]** Mengoptimalkan fitur peluncuran game, sekarang akan mencoba membuat file konfigurasi secara otomatis saat tidak dapat ditemukan, dan juga menyediakan fungsi pembuatan manual.
- **[✨Optimalisasi]** Memperbarui Windows App SDK ke 1.5.2.
- **[✨Optimalisasi]** Mengoptimalkan penggunaan memori program secara keseluruhan.
- **[✨Optimalisasi]** Sekarang membersihkan folder cache saat mengatur ulang sumber daya gambar.
- **[✨Optimalisasi]** Mengoptimalkan pembuatan pintasan untuk memulai dalam mode administrator, sekarang bahkan jika disematkan ke bilah tugas, dapat digunakan secara normal.
- **[✨Optimalisasi]** Mengoptimalkan pop-up login untuk Paspor Hutao, sekarang melihat kata sandi dalam teks biasa tidak menyebabkan lebar dialog berubah berulang kali.
- **[✨Optimalisasi]** Pemfaktoran ulang dasar yang signifikan lainnya.

## 1.9.9

- Tambah ➕
  - Menambahkan Permintaan Kronik di tab Statistik Permintaan Global di bawah halaman Ekspor Permintaan
- Perbaikan 🔨
  - Memperbaiki kesalahan peluncuran interaksi dengan Better Genshin Impact [#1467](https://github.com/DGP-Studio/Snap.Hutao/issues/1467)
  - Memperbaiki kesalahan nama paket lengkap di halaman Unduh Sumber Daya Peluncur Game Lanjutan [#1476](https://github.com/DGP-Studio/Snap.Hutao/issues/1476)
  - Memperbaiki masalah bahwa game akan diluncurkan saat gagal membuka kunci batas frame rate [#1495](https://github.com/DGP-Studio/Snap.Hutao/issues/1495)
  - Memperbarui tautan yang sudah usang di halaman Pengaturan [#1503](https://github.com/DGP-Studio/Snap.Hutao/issues/1503)
  - Memperbaiki masalah crash saat menambahkan akun; memperbaiki masalah sporadis bahwa pengguna dan karakter yang dipilih tidak dapat dihapus dengan benar; mengoptimalkan tampilan UI setelah masuk. [#1504](https://github.com/DGP-Studio/Snap.Hutao/issues/1504)
- Optimalisasi ✨
  - Mengoptimalkan UI pencarian kata kunci di halaman WIKI [#1475](https://github.com/DGP-Studio/Snap.Hutao/pull/1475)
  - Mengoptimalkan UI di halaman WIKI saat hasil pencarian kosong [#1479](https://github.com/DGP-Studio/Snap.Hutao/pull/1479)
  - Mengoptimalkan tampilan item yang dikumpulkan di Rencana Pengembangan [#1513](https://github.com/DGP-Studio/Snap.Hutao/pull/1513)
  - Mengoptimalkan kelancaran dan stabilitas tata letak air terjun di halaman Rencana Pengembangan
  - Mengoptimalkan penyortiran default material ransel dan tab statistik material di halaman Rencana Pengembangan, dan sekarang menampilkan penanda penyelesaian untuk item dengan jumlah yang cukup [#1510](https://github.com/DGP-Studio/Snap.Hutao/pull/1510)
  - Mengoptimalkan penyelarasan bilah gulir di bagian bawah tab Statistik di halaman Ekspor Permintaan
  - Mengoptimalkan logika menampilkan item di tab Statistik Permintaan Global di halaman Ekspor Permintaan
  - Mengoptimalkan kelancaran dan stabilitas tampilan kisi di halaman Manajemen Pencapaian
  - Menambahkan petunjuk keamanan di halaman Login Web

## 1.9.8

- Baru ➕
  - Menambahkan dukungan untuk Permintaan Kronik [#1470](https://github.com/DGP-Studio/Snap.Hutao/issues/1470)
  - Menambahkan dukungan untuk format data permintaan UIGF v3.0
  - Menambahkan opsi pengaturan mode gelap/terang di halaman pengaturan [#1434](https://github.com/DGP-Studio/Snap.Hutao/issues/1434)
- Perbaikan 🔨
  - Memperbaiki masalah tampilan kartu di bawah beberapa nilai pengaturan tampilan Windows tertentu [#1429](https://github.com/DGP-Studio/Snap.Hutao/issues/1429)
  - Memperbaiki masalah bahwa masalah jaringan dapat menyebabkan konversi klien antara server CN dan server luar negeri gagal [#1433](https://github.com/DGP-Studio/Snap.Hutao/issues/1433)
  - Memperbaiki nama dan tautan paket OTA yang salah di halaman sumber daya yang dapat diunduh di Peluncur Game Lanjutan
- Optimalisasi ✨
  - Fitur pencarian/pemfilteran WIKI telah sangat ditingkatkan, pengguna sekarang akan mendapatkan prompt saat mengetik [#1120](https://github.com/DGP-Studio/Snap.Hutao/issues/1120)
  - Mengoptimalkan teks di beberapa fitur InterProcess di Peluncur Game Lanjutan [#1432](https://github.com/DGP-Studio/Snap.Hutao/issues/1432)
  - Mengoptimalkan tampilan UI Panggilan Kelana di halaman Ekspor Permintaan [#1460](https://github.com/DGP-Studio/Snap.Hutao/issues/1460)
  - Mengoptimalkan teks rentang waktu saat data permintaan kosong [#1443](https://github.com/DGP-Studio/Snap.Hutao/issues/1443)
  - Mengaktifkan kembali material latar belakang di jendela utama
  - Gambar latar belakang sekarang akan disegarkan segera setelah mengubah pengaturan sumber gambar latar belakang
  - Mengoptimalkan UI Tim di halaman Spiral Abyss

## 1.9.7

- Baru ➕
  - Menambahkan opsi start up bersama [Better Genshin Impact](https://bgi.huiyadan.com/) di peluncur lanjutan, pengguna sekarang dapat memulai Genshin Impact dan BGI bersama di Snap Hutao [#1388](https://github.com/DGP-Studio/Snap.Hutao/issues/1388)
  - Menambahkan beberapa sumber wallpaper latar belakang klien, termasuk:
    - Tidak ada wallpaper (default)
    - Gambar acak di folder latar belakang lokal
    - Wallpaper harian Bing
    - Wallpaper harian Hutao
    - Latar belakang peluncur resmi Genshin Impact
- Perbaikan 🔨
  - Memperbaiki masalah bahwa ketika Discord berjalan dengan hak administrator dan Snap Hutao berjalan dalam hak normal, Snap Hutao akan crash [#1400](https://github.com/DGP-Studio/Snap.Hutao/issues/1400)
  - Memperbaiki masalah bahwa mengurutkan ulang akun game di Peluncur Lanjutan dengan hak administrator akan menyebabkan clint crash [#1379](https://github.com/DGP-Studio/Snap.Hutao/issues/1379)
  - Memperbaiki masalah bahwa menggulir pengumuman dalam game di Dasbor akan menyebabkan pengumuman menghilang [#1365](https://github.com/DGP-Studio/Snap.Hutao/issues/1365)
  - Memperbaiki beberapa teks yang tidak dapat dibaca manusia di WIKI karakter, lagi [#1316](https://github.com/DGP-Studio/Snap.Hutao/issues/1316)
  - Memperbaiki masalah bahwa hasil pencarian di Pusat Umpan Balik tidak didekode HTML [#1391](https://github.com/DGP-Studio/Snap.Hutao/issues/1391)
- Optimalisasi ✨
  - Menambahkan dua opsi resolusi 4K di Peluncur Lanjutan [#1375](https://github.com/DGP-Studio/Snap.Hutao/issues/1375)
  - Klien sekarang akan mengingat karakter yang dipilih di setiap akun di panel akun MiHoYo BBS [#1233](https://github.com/DGP-Studio/Snap.Hutao/issues/1233)

## 1.9.6

- Baru ➕
  - Menambahkan fitur gambar latar belakang kustom, pengguna sekarang dapat membuka folder gambar latar belakang dan menambahkan gambar yang mereka sukai [#357](https://github.com/DGP-Studio/Snap.Hutao/issues/357)
  - Menambahkan halaman pengaturan responsif, tata letak akan diperbarui saat ukuran dan bentuk jendela berubah, [@Scighost](https://github.com/Scighost) mewujudkan fitur ini [#1337](https://github.com/DGP-Studio/Snap.Hutao/issues/1337)
  - Menambahkan status loopback wadah dan fitur pembuka kunci di Pusat Umpan Balik
  - Menambahkan fitur menampilkan status proxy jaringan saat ini di Pusat Umpan Balik
- Perbaikan 🔨
  - Memperbaiki kesalahan `653366069` saat mengirimkan data Spiral Abyss [#1351](https://github.com/DGP-Studio/Snap.Hutao/issues/1351)
  - Memperbaiki kesalahan `653366069` saat menyinkronkan karakter dari sumber Kronik Pertempuran dan Rencana Pengembangan MiHoYo BBS
  - Menyesuaikan aturan UID server Asia baru
  - Memperbaiki masalah bahwa ukuran font dalam pengumuman game terlalu kecil [#1347](https://github.com/DGP-Studio/Snap.Hutao/issues/1347)
  - Memperbaiki masalah login kode QR MiYouShe, sekarang halaman login ZZZ digunakan untuk menangani metode login kode QR [#1345](https://github.com/DGP-Studio/Snap.Hutao/issues/1345)
  - Mengganti teks yang tidak dapat dibaca di suara/cerita karakter dengan teks normal di WIKI Karakter [#1316](https://github.com/DGP-Studio/Snap.Hutao/issues/1316)
  - Memperbaiki masalah tampilan di Dasbor Beranda saat Parametric Transformer tidak tercapai [#1331](https://github.com/DGP-Studio/Snap.Hutao/issues/1331)
  - Memperbaiki masalah bahwa dalam beberapa kasus, menukar Dasbor Beranda ke sisi bawah akan menyebabkan klien crash [#1365](https://github.com/DGP-Studio/Snap.Hutao/issues/1365)
- Optimalisasi ✨
  - Akun MiHoYo BBS pengguna di Panel Akun sekarang dapat diseret dan diurutkan ulang, untuk memungkinkan pengguna memiliki pengalaman operasi yang lebih baik [#1334](https://github.com/DGP-Studio/Snap.Hutao/issues/1334)
  - Catatan akun game di Peluncur Game sekarang dapat diseret dan diurutkan ulang, untuk memungkinkan pengguna memiliki pengalaman operasi yang lebih baik
  - Mengoptimalkan teks judul di Ekspor Permintaan (`Statistik` diganti nama menjadi `Statistik Permintaan Global`) [#1344](https://github.com/DGP-Studio/Snap.Hutao/issues/1344)
  - Mengoptimalkan teks di bawah halaman Unduh Sumber Daya di Peluncur Game (`Klien` diganti nama menjadi `Paket Lengkap`) [#1279](https://github.com/DGP-Studio/Snap.Hutao/issues/1279)
  - Mengoptimalkan petunjuk kesalahan unduhan gambar di wizard [#1333](https://github.com/DGP-Studio/Snap.Hutao/issues/1333)
  - Memperbarui teks informasi gelombang Spiral Abyss dari versi Genshin Impact 4.4
  - Menambahkan petunjuk kesalahan izin di pengaturan notifikasi Catatan Realtime
  - Membatasi jumlah utas aktif saat mengunduh paket pembaruan klien
  - Menambahkan dua resolusi baru di Pengaturan Cepat Resolusi Game
  - Mengizinkan pengembang menggunakan NamedPipe untuk mengaktifkan aplikasi <Badge text="Fitur Pengembang" type="tip" />
  - Membuat Windows App SDK tertanam
  - Mengoptimalkan panggilan API Win32/COM
  - Mendesain ulang UI klien agar sesuai dengan gambar latar belakang
- Lokalisasi 🌏
  - Portugis (PT-BR) sekarang menjadi bahasa klien baru, berkat kontribusi dari [@t0piy](https://github.com/t0piy)

## 1.9.5

- Baru ➕
  - Menambahkan tombol identifikasi monitor di peluncur game [#1261](https://github.com/DGP-Studio/Snap.Hutao/issues/1261)
  - Pusat Umpan Balik baru diperkenalkan [#1039](https://github.com/DGP-Studio/Snap.Hutao/issues/1039)
- Perbaikan 🔨
  - Memperbaiki masalah bahwa ketika game berada di jalur `Program Files`, kesalahan `konversi server gagal` akan muncul [#1262](https://github.com/DGP-Studio/Snap.Hutao/issues/1262)
  - Memperbaiki masalah bahwa pengunduhan paket statis tidak dapat diselesaikan di wizard penyiapan [#1242](https://github.com/DGP-Studio/Snap.Hutao/issues/1242)
- Optimalisasi ✨
  - Menambahkan dukungan untuk mengubah pengaturan proxy saat Snap Hutao sedang berjalan
  - Menambahkan status game di Kartu Peluncur Game di dasbor
  - Menambahkan penyegaran otomatis ukuran folder data setelah cache konversi server dihapus
  - Mengoptimalkan logika untuk mengidentifikasi apakah konversi server diperlukan saat proses peluncuran game diminta
  - Mengoptimalkan terjemahan bahasa Inggris

## 1.9.4 <Badge text="perbaikan terbaru" type="warning" />

- Perbaikan 🔨
  - Memperbaiki masalah crash untuk pengguna server Bilibili saat memasuki jendela utama

## 1.9.3

- Perbaikan 🔨
  - Memperbaiki masalah crash untuk pengguna baru saat memasuki jendela utama

## 1.9.2

- Baru ➕
  - Menambahkan opsi HDR asli Windows di Peluncur Game
  - Menambahkan dukungan akun HoYoverse dalam fitur sakelar akun Peluncur Game
  - Menambahkan opsi menghapus file cache konversi server di halaman Pengaturan
  - Menambahkan opsi mulai ulang sebagai admin di halaman Pengaturan
  - Menambahkan fungsi berbagi gambar ke clipboard di WebView
- Perbaikan 🔨
  - Memperbaiki masalah bahwa beberapa operasi halaman MiHoYo BBS tidak dapat dilakukan di Webview
  - Menambahkan tanda mencolok Mode Admin di judul jendela untuk menunjukkan apakah Snap Hutao berjalan sebagai administrator
  - Memperbaiki kesalahan jalur game setelah konversi server
  - Memperbaiki tautan dokumen di halaman Spiral Abyss
- Optimalisasi ✨
  - Menambahkan bidang identifikasi akun di webhook penerusan data Catatan Real-time
  - Semua opsi di Zona Bahaya di halaman Pengaturan sekarang memiliki konfirmasi ganda
  - Mengubah cara sakelar akun game dari PowerShell langsung memodifikasi regedit untuk menghindari kesalahan saat Windows Long Path tidak diaktifkan
  - Mengoptimalkan UI kartu pengaturan pintasan fitur klik otomatis
  - Menambahkan pemeriksaan untuk jalur khusus seperti Program Files selama konversi server
  - Mengoptimalkan kinerja pengguliran WebView di beberapa halaman
  - Mengoptimalkan kinerja Aktivitas Discord

## 1.9.1 <Badge text="perbaikan terbaru" type="warning" />

- **Perbaikan 🔨**
  - Memperbaiki crash di halaman Peluncur Game saat zoom teks pengguna tidak diatur sebagai 100%
  - Memperbaiki crash yang disebabkan oleh Catatan Realtime selama startup program
  - Memperbaiki masalah di mana Catatan Realtime mungkin dimuat secara bersamaan dengan informasi akun pengguna, menghasilkan reentrancy
- **Optimalisasi ✨**
  - Prompt yang ditingkatkan untuk menambah atau memilih jalur game di Peluncur Game

## 1.9.0

::: important Perubahan Merusak
Snap Hutao baru-baru ini memperoleh sponsor dari SignPath Foundation untuk sertifikat penandatanganan kode. Mulai dari versi 1.9.0, kami akan menggunakan sertifikat baru untuk menandatangani paket instalasi Snap Hutao.

Program dengan tanda tangan baru tidak akan kompatibel dengan versi lama. Pengguna yang memperbarui dari versi 1.8.4 dan lebih lama ke versi 1.9.0 dan lebih baru perlu menghapus versi lama terlebih dahulu dan kemudian melakukan instalasi baru klien versi baru. Karena desain direktori data Snap Hutao, pengguna tidak akan kehilangan data penting apa pun.

Anda dapat membaca artikel [Penjelasan Perubahan Merusak di Versi 1.9.0](../blog/version-1-9-0-breaking-changes.md) untuk pemahaman yang lebih dalam tentang bagaimana perubahan tanda tangan dalam pembaruan versi ini memengaruhi proyek Snap Hutao.
:::

- **Fitur Baru ➕**
  - Peluncur game sekarang mendukung beberapa jalur game [#525](https://github.com/DGP-Studio/Snap.Hutao/issues/526)
  - Menambahkan metode login kode QR untuk miHoYo di panel pengguna [#870](https://github.com/DGP-Studio/Snap.Hutao/issues/870)
  - Klien sekarang secara otomatis mendeteksi status jaringan dan menampilkan hasilnya di halaman pengaturan [#1116](https://github.com/DGP-Studio/Snap.Hutao/pull/1161)
  - Menambahkan opsi di peluncur game untuk memulai Genshin Impact dalam mode sentuh [#1173](https://github.com/DGP-Studio/Snap.Hutao/issues/1173)
  - Menambahkan opsi untuk mengubah sumber pengumuman dalam game di halaman pengaturan, sekarang Anda dapat memilih server luar negeri sebagai sumber dan menampilkan pengumuman dengan bahasa yang sama dengan Snap Hutao Anda [#1112](https://github.com/DGP-Studio/Snap.Hutao/issues/1112)
    - Hanya tersedia bila ada ekspresi reguler yang valid dalam terjemahan Crowdin (Cina Sederhana, Cina Tradisional, dan Inggris didukung sekarang)
  - Menambahkan opsi di pengaturan untuk mengaktifkan konsol. Pengguna sekarang bisa mendapatkan lebih banyak prompt kesalahan saat memecahkan masalah dengan mengaktifkan opsi ini.
  - Memperkenalkan logika yang sama sekali baru untuk pembaruan perangkat lunak.
- **Perbaikan Bug 🔨**
  - Memperbaiki masalah dengan API miHoYo yang mengembalikan kesalahan `5003` saat mengambil informasi karakter [#1060](https://github.com/DGP-Studio/Snap.Hutao/issues/1060)
  - Memperbaiki masalah bahwa Peluncur Game tidak dapat membuka batas framerate di versi Genshin Impact 4.3 [#1190](https://github.com/DGP-Studio/Snap.Hutao/issues/1190)
  - Memperbaiki masalah dengan data hitung mundur yang salah untuk pengumuman miHoYo dalam situasi tertentu.
  - Memperbaiki pernyataan PowerShell yang salah.
- **Optimalisasi ✨**
  - Meningkatkan pernyataan prompt kesalahan dalam perhitungan pengembangan, membuat pesan kesalahan lebih eksplisit [#1163](https://github.com/DGP-Studio/Snap.Hutao/issues/1163)
  - Mengoptimalkan antarmuka perhitungan pengembangan, sekarang menunjukkan tujuan spesifik untuk setiap item [#1016](https://github.com/DGP-Studio/Snap.Hutao/issues/1016)
  - Mengoptimalkan tampilan informasi akun Hutao di antarmuka utama, tidak lagi menampilkan alamat email pengguna [#1160](https://github.com/DGP-Studio/Snap.Hutao/issues/1160)
  - Memperbarui prompt kesalahan untuk Hutao API.
  - Mengoptimalkan antarmuka halaman pengaturan; pengguna sekarang dapat melihat ukuran direktori data dan cache yang dihasilkan oleh Snap Hutao di pengaturan.
  - Menghapus tombol Microsoft Store
- **Lokalisasi 🌏**
  - Menambahkan opsi bahasa Indonesia di klien, berkat kontribusi dari [@NatsumeAoii](https://github.com/NatsumeAoii) [#1188](https://github.com/DGP-Studio/Snap.Hutao/issues/1188)
  - Menambahkan opsi bahasa Rusia di klien, berkat kontribusi dari [@QweRezOn](https://github.com/QweRezOn)
  - Meningkatkan cakupan karakter string lokalisasi klien [#1198](https://github.com/DGP-Studio/Snap.Hutao/issues/1198)
  - Memperbarui terjemahan untuk bahasa yang ada.

## 1.8.5 <Badge text="Uji Beta" type="info" />

- Menguji perubahan yang disebabkan oleh perubahan sertifikat

## 1.8.4 <Badge text="terbaru" type="tip" />

- Perbaikan
  - Memperbaiki masalah bahwa check-in harian menunjukkan akhir aktivitas
  - Memperbaiki masalah bahwa `pwsh.exe` tidak dapat dipilih sebagai host PowerShell [#1145](https://github.com/DGP-Studio/Snap.Hutao/issues/1145) [#1153](https://github.com/DGP-Studio/Snap.Hutao/issues/1153)
  - Memperbaiki kesalahan bahasa tampilan saat Snap Hutao ditarik oleh perangkat lunak pihak ketiga [#1147](https://github.com/DGP-Studio/Snap.Hutao/issues/1147)
  - Memperbaiki kesalahan PowerShell tidak ditemukan pada pintasan desktop [#1151](https://github.com/DGP-Studio/Snap.Hutao/issues/1151) [#1154](https://github.com/DGP-Studio/Snap.Hutao/issues/1154)
- Optimalisasi
  - Memperbarui teks prompt Snap Hutao Cloud
  - Mengoptimalkan kinerja pelacakan Aktivitas Discord di awal dan akhir game
  - Mengoptimalkan kinerja pengubahan ukuran pada halaman WIKI Karakter/WIKI Senjata/Karakter Saya
  - Mengoptimalkan kinerja konversi server, pengunduhan multi-utas pada konten multipart sekarang diaktifkan
  - Mengoptimalkan logika konversi server, Snap Hutao tidak akan memeriksa izin penulisan folder sebelum tugas

## 1.8.3 <Badge text="perbaikan terbaru" type="tip" />

- Perbaikan
  - Memperbaiki masalah crash saat klien Discord tidak berjalan [#1134](https://github.com/DGP-Studio/Snap.Hutao/issues/1134)
  - Memperbaiki waktu catatan permintaan yang salah [#1138](https://github.com/DGP-Studio/Snap.Hutao/issues/1138)
- Optimalisasi
  - Menyertakan lingkungan .NET dengan paket

## 1.8.1

- Tambah
  - Menambahkan fungsi sinkronisasi Aktivitas Discord di _Peluncur Game_, menyinkronkan status game saat bermain Genshin Impact [#1082](https://github.com/DGP-Studio/Snap.Hutao/issues/1082)
- Perbaikan
  - Memperbaiki masalah di mana menavigasi dari halaman _Ekspor Permintaan_ panel _Hutao Cloud_ ke halaman _Spiral Abyss_ tidak akan menyinkronkan opsi bilah navigasi [#1116](https://github.com/DGP-Studio/Snap.Hutao/issues/1116)
  - Memperbaiki masalah bahwa fitur _Klik Otomatis_ tidak dapat diikat dengan tombol `Alt` [#1119](https://github.com/DGP-Studio/Snap.Hutao/issues/1119)
  - Memperbaiki masalah penyegaran item setelah beralih rencana di _Rencana Pengembangan_ [#1099](https://github.com/DGP-Studio/Snap.Hutao/issues/1099)
  - Memperbaiki masalah bahwa hanya file json nama kosong yang dapat diimpor di halaman `Pencapaian` [#1124](https://github.com/DGP-Studio/Snap.Hutao/issues/1124)
  - Memperbaiki tautan unduhan paket lengkap di bawah halaman _Unduh Sumber Daya_ di _Peluncur Game_, diganti dengan tautan file terpisah [#1126](https://github.com/DGP-Studio/Snap.Hutao/issues/1126)
  - Memperbaiki masalah notifikasi dari _Catatan Realtime_, termasuk konten yang salah, notifikasi berulang, dan mode klien yang dilewati secara tak terduga [#1123](https://github.com/DGP-Studio/Snap.Hutao/issues/1123)
- Optimalisasi
  - Menambahkan aturan penyegaran lembur untuk Fingerprint/CookieToken, pengguna tidak perlu terlalu sering mengklik `Segarkan Cookie` di _Panel Pengguna_ [#1121](https://github.com/DGP-Studio/Snap.Hutao/issues/1121)
  - Mendesain ulang UI halaman _WIKI Karakter_
  - Menambahkan teks petunjuk saat tidak ada akun MiHoYo BBS yang masuk [#1127](https://github.com/DGP-Studio/Snap.Hutao/issues/1127)

## 1.8.0

- **Meningkatkan versi .NET menjadi 8** [#1103](https://github.com/DGP-Studio/Snap.Hutao/issues/1103)
- Perbaikan
  - Memperbaiki masalah terjemahan dengan prompt pendaftaran/keluar/reset kata sandi _Paspor Hutao_ [#1087](https://github.com/DGP-Studio/Snap.Hutao/issues/1087) oleh @Tangweirui2021
  - Memperbaiki masalah dengan item baris pertama di halaman _Rencana Pengembangan_ yang tidak menyegarkan dengan benar setelah beralih rencana [#1099](https://github.com/DGP-Studio/Snap.Hutao/issues/1099)
  - Memperbaiki masalah di halaman _Peluncur Game_ di mana layar penuh tanpa batas dan eksklusif tidak dapat diatur secara bersamaan [#1106](https://github.com/DGP-Studio/Snap.Hutao/issues/1106)
  - Mengganti implementasi pemilih file, menyelesaikan masalah tidak dapat menggunakan pemilih file di bawah hak administrator [#1096](https://github.com/DGP-Studio/Snap.Hutao/issues/1096)
  - Memperbaiki masalah di mana menginisialisasi informasi pengguna saat startup dapat menyebabkan program membeku
  - Memperbaiki pengecualian yang tidak perlu terjadi pada halaman tertentu setelah dialihkan dari
  - Memperbaiki masalah dengan beberapa pengecualian yang tidak ditangkap dengan benar
- Optimalisasi
  - Menambahkan informasi kegagalan yang lebih detail untuk inisialisasi metadata

## 1.7.17

- Perbaikan
  - Memperbaiki masalah bahwa item pertama di Rencana Pengembangan tidak akan disegarkan setelah beralih rencana [#1079](https://github.com/DGP-Studio/Snap.Hutao/issues/1079)
  - Memperbaiki masalah bahwa URL catatan permintaan untuk server global tidak dapat ditemukan [#1081](https://github.com/DGP-Studio/Snap.Hutao/issues/1081)
  - Memperbaiki masalah bahwa log kesalahan tidak dapat ditangkap dengan benar dalam beberapa situasi tertentu
  - Memperbaiki masalah waktu catatan permintaan yang salah
  - Memperbaiki pengecualian data di pop-up web MiHoYo BBS
  - Memperbaiki masalah pengaturan radius sudut yang salah dari topeng halaman riwayat/karakter/senjata di Riwayat Permintaan
  - Memperbaiki waktu pengumuman yang salah di zona waktu selain UTC+8
- Optimalisasi
  - Mengoptimalkan UI pop-up web MiHoYo BBS, mendukung fitur mundur dan segarkan, mendukung menampilkan judul web
  - Fitur klik otomatis sekarang dapat dimatikan dan hot key dapat diubah [#961](https://github.com/DGP-Studio/Snap.Hutao/issues/961)
  - Menambahkan dukungan impor dan ekspor format UIGF v2.4
    - Menambahkan inferensi zona waktu berdasarkan server akun [#830](https://github.com/DGP-Studio/Snap.Hutao/issues/830)

## 1.7.16

- Tambah
  - Menambahkan dropdown sakelar cepat resolusi layar di Peluncur Game [#1062](https://github.com/DGP-Studio/Snap.Hutao/issues/1062)
  - Menambahkan dukungan untuk memungkinkan pengguna bekerja sama [Starward](https://github.com/Scighost/Starward) dengan Snap Hutao untuk mengumpulkan statistik waktu bermain game [#1071](https://github.com/DGP-Studio/Snap.Hutao/issues/1071)
  - Menambahkan opsi salin tautan unduhan sumber daya di Peluncur Game [#1074](https://github.com/DGP-Studio/Snap.Hutao/issues/1074)
- Perbaikan
  - Memperbaiki masalah bahwa MiHoYo BBS mengembalikan kesalahan `5003` saat mengambil data [#1060](https://github.com/DGP-Studio/Snap.Hutao/issues/1060)
  - Memperbaiki masalah bahwa halaman tidak dapat digulir dalam beberapa situasi tertentu [#1068](https://github.com/DGP-Studio/Snap.Hutao/issues/1068) [#1072](https://github.com/DGP-Studio/Snap.Hutao/issues/1072)
  - Memperbaiki masalah bahwa level skill karakter tidak ditampilkan di Karakter Saya [#1069](https://github.com/DGP-Studio/Snap.Hutao/issues/1069)
- Optimalisasi
  - Mengoptimalkan logika tampilan log pembaruan [#1015](https://github.com/DGP-Studio/Snap.Hutao/issues/1015)
  - Pilihan pengaturan pengguna di setiap tombol akan diingat dalam lingkup global [#778](https://github.com/DGP-Studio/Snap.Hutao/issues/778)
  - Meningkatkan stabilitas klien

## 1.7.15

- Tambah
  - Menambahkan opsi untuk memulihkan cadangan catatan riwayat permintaan penuh dari layanan Snap Hutao Cloud ke arsip baru [#886](https://github.com/DGP-Studio/Snap.Hutao/issues/886)
- Perbaikan
  - Memperbaiki masalah bahwa parameter peluncuran game yang tidak valid dapat diurai; menambahkan sakelar untuk beberapa parameter peluncuran [#1061](https://github.com/DGP-Studio/Snap.Hutao/issues/1052)
  - Memperbaiki masalah bahwa pengguna tidak dapat mendaftarkan akun Snap Hutao di klien [#1059](https://github.com/DGP-Studio/Snap.Hutao/issues/1059)
  - Memperbaiki masalah notifikasi setelah Url Webhook Catatan Realtime diatur
- Optimalisasi
  - Mengoptimalkan logika perubahan kata sandi dan hapus akun Snap Hutao di klien

## 1.7.14 <Badge text="perbaikan terbaru" type="tip" />

- Memperbaiki masalah yang menyebabkan program crash saat membuka beberapa kotak dialog tertentu [#1052](https://github.com/DGP-Studio/Snap.Hutao/issues/1052) [#1054](https://github.com/DGP-Studio/Snap.Hutao/issues/1054)

## 1.7.13

- Tambah
  - Menambahkan opsi untuk meneruskan data Catatan Realtime ke webhook yang ditentukan [#431](https://github.com/DGP-Studio/Snap.Hutao/issues/431)
  - Menambahkan rentang tanggal catatan riwayat permintaan [#899](https://github.com/DGP-Studio/Snap.Hutao/issues/899)
  - Menambahkan tampilan detail Poin Pertemuan Petualangan di Catatan Realtime, mendukung tampilan status Poin Pertemuan Petualangan saat ini [#1021](https://github.com/DGP-Studio/Snap.Hutao/issues/1021)
- Perbaikan
  - Memperbaiki `Kesalahan argumen` saat menggunakan peluncur cepat dari bilah tugas dalam beberapa kondisi [#925](https://github.com/DGP-Studio/Snap.Hutao/issues/925)
  - Memperbaiki masalah crash saat menggunakan peluncur tingkat lanjut dalam beberapa kondisi [#1035](https://github.com/DGP-Studio/Snap.Hutao/issues/1035)
  - Memperbaiki masalah tidak bisa kembali di browser MiHoYo BBS yang disematkan [#1023](https://github.com/DGP-Studio/Snap.Hutao/issues/1023)
  - Memperbaiki masalah saat mengonversi server dari server bilibili ke server global [#1041](https://github.com/DGP-Studio/Snap.Hutao/issues/1041)
  - Memperbaiki masalah bahwa Snap Hutao tidak dapat mengidentifikasi status klien game
  - Memperbaiki masalah pada status Snap Hutao Cloud di halaman ekspor permintaan, setelah beralih akun Snap Hutao [#903](https://github.com/DGP-Studio/Snap.Hutao/issues/903)
- Optimalisasi
  - Menambahkan dukungan lokalisasi pada prompt yang dikembalikan oleh server Snap Hutao Cloud
  - Mendesain ulang UI Paspor Snap Hutao, dan sekarang disematkan di halaman pengaturan [#911](https://github.com/DGP-Studio/Snap.Hutao/issues/1021)
  - Mendesain ulang UI halaman peluncur game tingkat lanjut
  - Pengguna sekarang dapat melihat dan memilih parameter peluncur di peluncur game tingkat lanjut

## 1.7.11 <Badge text="perbaikan terbaru" type="tip" />

- Memperbaiki kesalahan argumen peluncuran game (perbaikan terbaru)

## 1.7.10

- Perbaikan
  - Memperbaiki masalah login dengan akun HoYoverse [#1011](https://github.com/DGP-Studio/Snap.Hutao/issues/1011) [#1012](https://github.com/DGP-Studio/Snap.Hutao/issues/1012)
  - Memperbaiki masalah check-in harian di akun HoYoLAB [#1013](https://github.com/DGP-Studio/Snap.Hutao/issues/1013)
  - Memperbaiki masalah bahwa kesalahan `Item tidak valid` muncul ketika bahasa tidak cocok dalam file data UIGFv2.2 [#1001](https://github.com/DGP-Studio/Snap.Hutao/issues/1001)
  - Memperbaiki masalah crash saat Url CAPTCHA yang tidak valid dimasukkan dalam pengaturan
  - Memperbaiki masalah crash saat pengaturan saluran yang tidak valid diberikan saat meluncurkan game
  - Memperbaiki crash saat beralih akun saat versi WebView2 Runtime terlalu rendah untuk memiliki fitur yang diperlukan
  - Memperbaiki masalah crash saat catatan yang tidak valid ditampilkan di halaman Spiral Abyss
  - Memperbaiki masalah luapan memori di halaman yang disematkan
- Optimalisasi
  - Akun game saat ini sekarang dapat diidentifikasi secara otomatis saat mencapai halaman peluncur game

## 1.7.9

- Perbaikan
  - Memperbaiki masalah yang mencegah program diluncurkan dengan ukuran jendela yang benar setelah resolusi monitor diubah setelah keluar dari program
  - Memperbaiki masalah login MiHoYo BBS [#1005](https://github.com/DGP-Studio/Snap.Hutao/issues/1005)
  - Memperbaiki masalah login HoYoverse [#1007](https://github.com/DGP-Studio/Snap.Hutao/issues/1007)
  - Memperbaiki masalah unggahan log crash di versi 1.7.7
  - Memperbaiki masalah tampilan UI di halaman Barisan Tim dalam fitur Spiral Abyss [#1008](https://github.com/DGP-Studio/Snap.Hutao/issues/1008)

## 1.7.7

- Menambahkan bayangan kartu di elemen berikut untuk mengoptimalkan efek visual
  - Dasbor dan pengumuman dalam game
  - Kartu unduhan sumber daya di halaman peluncur game tingkat lanjut
  - Kartu ikhtisar di halaman ekspor permintaan
  - Kartu statistik di halaman ekspor permintaan
  - Kartu catatan waktu nyata
  - Tampilan daftar di halaman karakter saya
  - Kartu gambar di WIKI karakter
  - Kartu gambar di WIKI senjata
- Perbaikan
  - Memperbaiki kesalahan margin atas di bawah tampilan kisi
  - Memperbaiki masalah crash tampilan kisi dari berbagai penyebab
  - Memperbaiki masalah konversi server dari server CN ke server Bilibili
- Optimalisasi
  - Mengoptimalkan posisi tombol untuk validasi akun manual
    - Anda sekarang dapat menemukannya langsung dari panel akun
  - Menambahkan logika coba lagi untuk pengambilan catatan jurang dan pengunggahan catatan
    - Pengguna yang tidak mengatur API verifikasi CAPTURE dapat mencoba lagi setelah memvalidasi akun secara manual dari panel akun

## 1.7.6

- Tambah
  - Menambahkan fitur klik otomatis mouse yang dipicu oleh F8, dalam mode hak Administrator
    - Di versi Genshin Impact 4.1 dan 4.2 yang akan datang, fitur ini dapat membantu Anda melewati beberapa percakapan tugas yang tidak Anda sukai
- Perbaikan
  - Memperbaiki masalah crash saat beralih akun setelah memvalidasi cookie di halaman Catatan Realtime [#947](https://github.com/DGP-Studio/Snap.Hutao/issues/947)
  - Memperbaiki kegagalan mencocokkan akun dalam game saat ini setelah me-reboot Snap Hutao dan klien game [#865](https://github.com/DGP-Studio/Snap.Hutao/issues/865)
  - Memperbaiki masalah tampilan di halaman Pencapaian [#956](https://github.com/DGP-Studio/Snap.Hutao/issues/956)
  - Memperbaiki masalah bahwa metadata versi Genshin Impact 4.1 akan menyebabkan program crash di halaman Spiral Abyss
- Optimalisasi
  - Mengoptimalkan beberapa detail antarmuka pengguna di beberapa halaman
  - Mengoptimalkan warna teks pengumuman dalam beberapa situasi tertentu
  - Mengoptimalkan logika pengunduhan gambar statis

## 1.7.5 <Badge text="terbaru" type="tip" />

- Tambah
  - Menambahkan nomor versi untuk setiap pencapaian
  - Menambahkan data gelombang monster di halaman Data Abyss (data disediakan oleh [@妮可少女](https://space.bilibili.com/3537104994831140))
  - Menambahkan tombol peringkat Microsoft Store di halaman pengaturan [#876](https://github.com/DGP-Studio/Snap.Hutao/issues/876)
  - Menambahkan tombol dokumen di atas panel pengguna, pengguna akan diarahkan ke dokumen halaman saat ini saat mengklik [#875](https://github.com/DGP-Studio/Snap.Hutao/issues/875)
- Perbaikan
  - Memperbaiki kartu peluncur game di dasbor yang menampilkan masalah akun kosong [#924](https://github.com/DGP-Studio/Snap.Hutao/issues/924)
  - Memperbaiki status pencapaian tidak dapat disimpan saat dihapus centangnya secara manual [#880](https://github.com/DGP-Studio/Snap.Hutao/issues/880)
  - Memperbaiki masalah verifikasi Catatan Realtime pada akun MiHoYo BBS yang salah
  - Memperbaiki masalah bahwa terkadang data statistik spiral abyss hilang
- Optimalisasi
  - Mengoptimalkan beberapa pesan kesalahan, menambahkan petunjuk solusi [#930](https://github.com/DGP-Studio/Snap.Hutao/issues/930)
  - Konten Pengumuman Snap Hutao di dasbor sekarang dapat disalin [#929](https://github.com/DGP-Studio/Snap.Hutao/issues/929)
  - **Halaman Statistik Abyss sekarang digabungkan ke halaman Catatan Abyss**
  - Mengoptimalkan format waktu di beberapa tempat

## 1.7.4 <Badge text="terbaru" type="tip" />

- Tambah
  - Menambahkan opsi untuk mengubah entri PowerShell di halaman pengaturan
  - Menambahkan opsi untuk membuat pintasan desktop di halaman pengaturan [#912](https://github.com/DGP-Studio/Snap.Hutao/issues/912)
  - Menambahkan opsi untuk beralih tampilan kartu di dasbor beranda
  - Menambahkan opsi tambah-batch ke Rencana Pengembangan di halaman Karakter Saya
- Perbaikan
  - Memperbaiki masalah di mana waktu mulai acara tidak akurat di Dasbor Beranda [#887](https://github.com/DGP-Studio/Snap.Hutao/issues/887)
  - Memperbaiki masalah di halaman Karakter Saya yang menyebabkan crash saat mengklik senjata yang tidak disinkronkan oleh Enka API [#904](https://github.com/DGP-Studio/Snap.Hutao/issues/904)
  - Memperbaiki masalah tampilan nilai senjata yang salah di halaman Karakter Saya [#907](https://github.com/DGP-Studio/Snap.Hutao/issues/907)
  - Memperbaiki masalah di mana server Bilibili tidak dapat dikonversi ke beberapa server lain [#893](https://github.com/DGP-Studio/Snap.Hutao/issues/893)
  - Memperbaiki masalah di mana mengambil riwayat Permintaan Pemula akan menyebabkan program crash [#917](https://github.com/DGP-Studio/Snap.Hutao/issues/917)
  - Memperbaiki masalah di mana Rencana Pengembangan tidak dipilih sebelumnya sebelum memasuki halaman Rencana Pengembangan, yang menyebabkan halaman Rencana Pengembangan harus dimasukkan setidaknya sekali untuk menambahkan arsip Rencana Pengembangan
  - Memperbaiki masalah gagal mengklaim hadiah checkin saat memicu verifikasi anti-bot, bahkan ketika API anti-bot mengembalikan hasil sukses
- Optimalisasi
  - Mengoptimalkan urutan tampilan monster di halaman WIKI Monster
  - Mengoptimalkan kecepatan peluncuran halaman Riwayat Permintaan
  - Mengoptimalkan utas database lokal pada fungsi tampilan UI
  - Mengoptimalkan pengalaman pengguliran untuk beberapa tampilan Rencana Pengembangan, sekarang mungkin membutuhkan waktu lebih lama untuk memuat tampilan

## 1.7.3

- Memperbaiki masalah login web HoYoverse yang tidak berfungsi
- Meningkatkan versi Windows App SDK untuk memperbaiki masalah di mana bagian atas bilah judul tidak dapat mengubah ukuran jendela
- Menyesuaikan prompt untuk kegagalan impor file UIGF v2.2, sekarang memungkinkan identifikasi masalah lebih cepat berdasarkan ID
- Memperbaiki masalah di mana panel pengguna akan menampilkan klaim hadiah login yang berhasil meskipun gagal
- Memperbaiki masalah di mana meluncurkan game dari bilah tugas akan membuka jendela game dan jendela program utama secara bersamaan

## 1.7.2

- Ekspor Permintaan
  - Memperbaiki masalah di mana penyegaran penuh tidak berfungsi dengan benar.
  - Memperbaiki masalah di mana file UIGF tanpa kesalahan tidak diimpor dengan benar
  - Memperbaiki masalah di mana catatan Hutao Cloud tidak diambil dengan benar
  - Menyesuaikan UI jendela Hutao Cloud untuk menampilkan jumlah permintaan yang sesuai dengan arsip UID
- Karakter Saya
  - Menyesuaikan UI agar lebih ringkas
- Menyesuaikan UI notifikasi halaman utama agar sejajar dengan tepi kanan

## 1.7.0

- Menambahkan panduan startup untuk membantu pengguna membiasakan diri dengan Snap Hutao saat peluncuran awal
  - Membimbing pengguna untuk memilih bahasa
  - Membimbing pengguna untuk mengonfirmasi syarat layanan
  - Membimbing pengguna untuk menginstal font Segoe Fluent Icons dan WebView2 Runtime
  - Membimbing pengguna untuk mengunduh aset statis
- Antarmuka Utama
  - Menyesuaikan gaya ikon di bilah navigasi
  - Memperbaiki bug di mana menyesuaikan ukuran jendela dapat menyebabkan crash yang tidak terduga
- Panel Pengguna
  - Menyesuaikan gaya panel pengguna
  - Menambahkan tombol untuk memungkinkan pengguna saat ini mengklaim hadiah masuk
  - Memperbaiki masalah di mana dalam beberapa kasus, pengguna dan karakter saat ini tidak dapat dipilih dengan benar saat startup
- Dasbor Beranda
  - Menambahkan pengumuman Snap Hutao
  - Catatan Real-Time sekarang menampilkan waktu penyegaran untuk setiap kartu
  - Memperbaiki masalah di mana kartu Catatan Real-Time gagal dimuat dengan benar, menyebabkan program membeku atau crash
  - Memperbaiki waktu mulai/akhir untuk pengumuman acara tertentu
  - Memperbaiki masalah di mana beberapa paragraf tidak ditampilkan dengan benar saat melihat detail pengumuman tertentu
- Peluncuran Game (Peluncur Lanjutan)
  - Menambahkan teks indikator status game ke bilah perintah
  - Memperbaiki masalah di mana fungsi sakelar server tidak berfungsi
  - Menyesuaikan logika fungsi sakelar server untuk memungkinkan percobaan ulang setelah kegagalan unduhan sumber daya
  - Menyesuaikan logika frame rate yang tidak terkunci; proses game akan secara otomatis berakhir jika pembukaan kunci gagal
  - Menghapus multi-klien
  - Memperbaiki masalah di halaman unduhan sumber daya di mana klien game tidak memiliki nama dan tidak dapat diunduh
- Riwayat Permintaan
  - Menyesuaikan gaya kartu di halaman ikhtisar, membuat item lebih besar dan menciutkan beberapa item teks
  - Memperbaiki masalah di mana memasuki halaman riwayat permintaan tanpa masuk atau tanpa layanan Snap Hutao Cloud menyebabkan kesalahan
  - Memperbaiki masalah tampilan bilah kemajuan dan warna dalam tampilan daftar kartu di halaman ikhtisar
  - Memperbaiki teks yang salah untuk hadiah unggahan Snap Hutao Cloud
  - Memperbaiki masalah bahwa file data berformat UIGF dengan ID item yang salah dapat diimpor
  - Memperbaiki masalah gagal menemukan direktori cache game
  - Mengoptimalkan kecepatan pemuatan halaman saat ada banyak item
- Pencapaian
  - Memperbaiki masalah tampilan yang terjadi setelah memilih kategori pencapaian dalam tampilan daftar/kisi dan beralih ke jenis tampilan lain
  - Mengoptimalkan kecepatan pemuatan halaman
- Catatan Real-Time
  - Menyesuaikan gaya tombol `Verifikasi Pengguna dan Peran Saat Ini`
  - Menyesuaikan gaya tampilan pengaturan notifikasi
  - Menambahkan opsi untuk menonaktifkan penyegaran otomatis untuk catatan real-time (sakelar hanya tersedia dalam mode non-administrator; pengguna yang sebelumnya telah mengakses halaman catatan real-time dalam mode administrator mungkin tidak dapat mengaktifkan/menonaktifkan opsi ini)
  - Menyesuaikan gaya catatan real-time
  - Menyesuaikan prompt teks untuk Serenitea Pot yang terkunci dan Transformasi Parametrik yang tidak dimiliki
  - Menambahkan waktu penyegaran sebelumnya untuk setiap kartu Catatan Real-time
- Karakter Saya
  - Menyesuaikan lebar daftar karakter saat menggunakan tampilan daftar
  - Menambahkan tombol untuk beralih tampilan waktu penyegaran di bilah perintah
  - Menambahkan waktu penyegaran sebelumnya untuk setiap fungsi penyegaran
  - Menambahkan tampilan berapa kali artefak ditingkatkan dalam detail karakter
- Rencana Pengembangan
  - Memperbaiki masalah kegagalan menyimpan arsip aktif saat beralih halaman dari rencana pengembangan ke halaman lain
- WIKI Karakter
  - Memperbaiki masalah tampilan yang terjadi setelah memilih karakter dalam tampilan daftar/kisi dan beralih ke jenis tampilan lain
- WIKI Senjata
  - Memperbaiki masalah tampilan yang terjadi setelah memilih senjata dalam tampilan daftar/kisi dan beralih ke jenis tampilan lain
  - Menambahkan bagian material kenaikan untuk setiap senjata
- WIKI Monster
  - Memperbaiki masalah tampilan yang terjadi setelah memilih monster dalam tampilan daftar/kisi dan beralih ke jenis tampilan lain
- Pengaturan
  - Memperbaiki masalah tidak dapat menghapus direktori cache game
  - Menambahkan bidang konfigurasi untuk API verifikasi CAPTCHA Geetest, konfigurasi yang benar pada bidang ini dapat menangani verifikasi anti-bot dari MiYouShe
- Meningkatkan kinerja frame rate program
- Mengoptimalkan penggunaan memori untuk penjadwalan multi-utas
- Mengoptimalkan kecepatan pemuatan aset gambar item
- Menyesuaikan metode baca/tulis database untuk mengoptimalkan penggunaan memori dan responsivitas
- Menyesuaikan prompt teks untuk kode pengembalian `-100` dan `-10001` untuk membantu pengguna lebih memahami artinya
- Perubahan kecil lainnya

## 1.6.6

- Baru
  - Tab Snap Hutao Cloud sekarang akan menampilkan waktu kedaluwarsa dan lisensi pengembang di halaman riwayat permintaan
  - Statistik permintaan sekarang tersedia di halaman riwayat permintaan, dengan data didukung oleh Snap Hutao Cloud
- Perbaikan
  - Memperbaiki kegagalan metode penyegaran cache web untuk ekspor riwayat permintaan
  - Memperbaiki kesalahan pemuatan metadata Bahasa Cina Tradisional

## 1.6.5

- Baru
  - Bahasa Jepang sekarang menjadi opsi bahasa baru;
    anggota komunitas dapat berkontribusi bahasa Jepang di [translate.hut.ao](https://translate.hut.ao/)
- Perbaikan
  - Masalah tidak bisa menambahkan senjata ke rencana pengembangan [Isu #745](https://github.com/DGP-Studio/Snap.Hutao/issues/747)
  - Masalah pada beberapa pengguna gagal membuka kunci batas frame rate dalam lingkungan tertentu
    [Isu #747](https://github.com/DGP-Studio/Snap.Hutao/issues/747)
- Optimalisasi
  - Menyempurnakan UI dasbor
  - Memperkenalkan Metadata v2
  - Urutan penyortiran material dalam rencana pengembangan [Isu #749](https://github.com/DGP-Studio/Snap.Hutao/issues/749)

## 1.6.4

- Baru
  - Mengekspor data riwayat permintaan dengan format data [UIGF v2.3](https://uigf.org/zh/standards/UIGF.html)
- Perbaikan
  - Pembuka FPS [Isu #733](https://github.com/DGP-Studio/Snap.Hutao/issues/733)
- Optimalisasi
  - Saat menjalankan program tanpa hak administrator, fitur yang memerlukan hak administrator akan memiliki petunjuk teks
  - Dukungan HoYoLAB
  - Pembaruan lokalisasi

## 1.6.3

- Baru
  - Dasbor beranda, termasuk akun Hutao Cloud, peluncur game, riwayat permintaan, statistik pencapaian, dan catatan real-time
  - Mengaktifkan kotak notifikasi sekarang akan secara otomatis menyembunyikan notifikasi dalam aplikasi
  - Opsi server CN tanpa akun TapTap
- Perbaikan
  - Masalah bahwa pengguna tidak bisa mendapatkan bonus Hutao Cloud setelah mengunggah catatan Abyss
  - Masalah tidak bisa masuk ke HoYoLAB dengan Facebook
  - Masalah check-in HoYoLAB
  - Masalah saat menghadapi nilai kosong selama proses pengambilan riwayat permintaan
- Optimalisasi
  - **Pemfaktoran ulang proyek, membawa peningkatan kinerja 20%**
  - Menambahkan dukungan lokalisasi untuk fitur WIKI
  - Menambahkan dukungan untuk semua saluran internasional (yang memengaruhi gerbang pembayaran)
    - Mendukung HoYoverse resmi, Google Pay, Epic
  - Saat Batas frame rate Buka Kunci diaktifkan, nilai batas dapat dimodifikasi selama permainan, dan akan berlaku segera

## 1.6.2 <Badge text="terbaru" type="tip" />

- Fitur Baru
  - **Cadangan cloud riwayat permintaan** berdasarkan sistem akun Hutao
    - Saat ini, sponsor di AFDIAN dan pengguna beta akan menerima waktu keanggotaan cloud yang sesuai; Semua pengguna terdaftar akan menerima waktu keanggotaan 5 hari setelah mengunggah catatan Abyss.
    - Fitur ini akan terus dioptimalkan dalam versi 1.6 berikutnya
- Perbaikan
  - Masalah bahwa akun server BiliBili tidak dapat menerima data untuk Catatan Real-time
  - Masalah pada login HoYoLAB
- Optimalisasi
  - Logika unduhan aset statis

## 1.6.0

- Tambah
  - Sistem akun Hutao dengan pendaftaran dan login tersedia sekarang
  - Dukungan login akun HoYoLAB, dan menambahkan dukungannya ke fitur berikut:
    - Login web dan login Cookie Stoken
    - Catatan Abyss
    - Hadiah check-in harian
    - Karakter saya
    - Catatan real-time
- Optimalisasi
  - Kinerja buka kunci frame rate
  - Multi-klien
  - Sekarang pengguna harus membuka kunci fitur lanjutan di halaman pengaturan sebelum benar-benar menggunakannya
  - Tata letak halaman pengaturan
  - Gambar ubin di Windows 10

## 1.5.4

- Tambah
  - Peluncur Game
    - Unduhan paket sumber daya game
    - Mengizinkan beberapa proses Genshin Impact berjalan
    - Mengizinkan pengguna untuk memilih monitor tertentu untuk memulai game
  - Ikon baru telah digunakan
- Perbaikan
  - Masalah yang disebabkan oleh penulisan file tanpa batas selama sakelar server
- Optimalisasi
  - Mengoptimalkan pemilihan bahasa default
  - Mengizinkan ID perangkat disalin dengan tombol
  - Optimalisasi UI halaman pengaturan

## 1.5.1

- Optimalisasi
  - Mengganti menu `JumpList` dengan `JumpTask`,
  - Menambahkan opsi untuk memungkinkan pengguna mengatur bahasa di atas pengaturan default sistem
  - Menambahkan entri kontribusi terjemahan
  - Menambahkan opsi untuk mengatur ulang sumber daya gambar
- Tambah
  - WIKI Monster
  - Terjemahan Korea
  - Metadata Internasional

## 1.4.15

- Baru
  - Metode reset gambar statis
  - Penyegaran cookie
- Perbaikan
  - Memperbaiki [#2 31-4302 yang disebabkan oleh sakelar server](/advanced/known-issue.html#_2-%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%88%87%E6%8D%A2%E5%AF%BC%E8%87%B431-4302%E6%8A%A5%E9%94%99)
  - Memperbaiki kegagalan menghapus tugas terjadwal dalam beberapa situasi spesifik
- Optimalisasi
  - Mengoptimalkan UI Rencana Pengembangan [#486](https://github.com/DGP-Studio/Snap.Hutao/issues/486)
  - Mengoptimalkan terjemahan Bahasa Inggris dan Bahasa Cina Tradisional
  - Menambahkan petunjuk saat batas jalur panjang Windows dipicu
  - Mengoptimalkan bangun untuk tugas terjadwal

## 1.4.14

- Memperbaiki masalah bahwa rencana pengembangan baru tidak dapat ditambahkan
- Mendukung UI Bahasa Inggris
- Perbaikan bug kecil lainnya

## 1.4.11

- Versi pertama di Microsoft Store