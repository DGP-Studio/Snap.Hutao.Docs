---
category: [Pengumuman]
icon: iconfont icon-update
order: 1
comment: false
externalLinkIcon: false
description: Snap Hutao terus memperbarui dan memperbaiki masalah yang diketahui serta merilis fitur-fitur baru untuk memastikan pengguna mendapatkan pengalaman terbaik. Kami akan selalu merilis catatan pembaruan untuk melacak perubahan program.
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/id/statements/update-log.html
---

# Catatan Perubahan

::: important
Ini adalah terjemahan yang dibuat oleh model Google Gemini. Kami menerima perbaikan melalui PR.
:::

## 1.13.0 <Badge text="Terbaru" type="tip" />

- **【🎉Baru】** Mengganti ikon program - Susetsu Momoiro
- **【🎉Baru】** Menambahkan pengaturan zona waktu server kalender, yang dapat menyesuaikan zona waktu yang digunakan oleh kartu kalender beranda
- **【🎉Baru】** Menambahkan indikator pemuatan metadata di bilah judul
- **【🎉Baru】** Menambahkan halaman Snap Hutao Passport, sekaligus menghapus bagian Snap Hutao Passport di halaman pengaturan
  - Menambahkan fungsi reset email
  - Menambahkan fungsi refresh informasi pengguna
  - Mengintegrasikan fungsi penukaran kode redeem
- **【🎉Baru】** Menambahkan tips unduhan file gambar statis di antarmuka panduan
- **【🎉Baru】** Fungsi login pindai kode MiYouShe di panel pengguna telah kembali
- **【✨Optimalisasi】** Fitur ubah kata sandi/hapus akun Snap Hutao Passport sekarang akan menjadi akun yang saat ini masuk secara default
- **【✨Optimalisasi】** Layanan cloud catatan wish dan layanan cloud CDN Snap Hutao Passport tidak lagi ditampilkan sebagai tahun 1970 ketika durasi tidak didapatkan
- **【✨Optimalisasi】** Menampilkan informasi DNS ketika ada pengecualian permintaan jaringan
- **【✨Optimalisasi】** Menyesuaikan tampilan notifikasi Snap Hutao, notifikasi jenis parah (merah)/penting (kuning) sekarang tidak dapat ditutup secara manual
- **【✨Optimalisasi】** Menambahkan indikator pemuatan/tombol refresh pada jendela web ringkas
- **【✨Optimalisasi】** Mengoptimalkan masalah konten aplikasi yang berkedip ketika ukuran jendela sering diubah
- **【✨Optimalisasi】** Fungsi peluncuran game sekarang akan menampilkan petunjuk jalur kosong dengan benar
- **【✨Optimalisasi】** Fungsi peluncuran game sekarang akan menonaktifkan tombol pemilihan jalur game dengan benar
- **【✨Optimalisasi】** Sekarang akan ada jendela pop-up crash yang lebih baik ketika menggunakan gambar latar belakang kustom yang tidak didukung [#2335](https://github.com/DGP-Studio/Snap.Hutao/issues/2335)
- **【✨Optimalisasi】** Jendela baru yang muncul dari manajemen file game dari fungsi peluncuran game sekarang akan mempertahankan gaya tema yang sama dengan jendela utama
- **【✨Optimalisasi】** Manajemen file game dari fungsi peluncuran game sekarang mendukung melanjutkan instalasi setelah interupsi
- **【✨Optimalisasi】** Manajemen file game dari fungsi peluncuran game sekarang akan menghitung tambahan 1 GB untuk cache instalasi
- **【✨Optimalisasi】** Manajemen file game dari fungsi peluncuran game sekarang akan membersihkan file yang tidak diperlukan secara dinamis selama instalasi
- **【✨Optimalisasi】** Manajemen file game dari fungsi peluncuran game sekarang akan melewati file yang sudah selesai diperbarui dengan benar
- **【✨Optimalisasi】** Antarmuka panduan sekarang tidak akan otomatis menuju langkah berikutnya setelah memilih bahasa
- **【✨Optimalisasi】** Petunjuk kesalahan dalam aplikasi sekarang dapat menyalin teks
- **【✨Optimalisasi】** Menyesuaikan efek tampilan main stats artefak di halaman Karakter Saya untuk membedakannya dari sub stats
- **【✨Optimalisasi】** Antarmuka Karakter Saya sekarang akan menampilkan petunjuk default setelah pencarian tidak membuahkan hasil
- **【✨Optimalisasi】** Menyesuaikan UI fungsi Snap Hutao Cloud di halaman catatan wish
- **【✨Optimalisasi】** Sekarang, saat mencari jalur game secara otomatis, akan ada pemeriksaan apakah file yang dapat dieksekusi ada
- **【✨Optimalisasi】** Fungsi estimasi resin pada tab statistik material di halaman rencana pengembangan sekarang akan mengingat level dunia yang dipilih
- **【✨Optimalisasi】** Item pengembangan di halaman rencana pengembangan sekarang akan menampilkan level bakat di baris yang berbeda
- **【🔨Perbaikan】** Memperbaiki masalah bahwa beberapa perangkat dapat memicu fungsi klik cepat melalui beberapa tombol bahkan ketika fungsi ini tidak digunakan [#2296](https://github.com/DGP-Studio/Snap.Hutao/issues/2296)
- **【🔨Perbaikan】** Memperbaiki masalah bahwa perangkat dengan skala tinggi dapat crash ketika jendela terlalu kecil [#2349](https://github.com/DGP-Studio/Snap.Hutao/issues/2290)
- **【🔨Perbaikan】** Memperbaiki masalah bahwa penghapusan item pengembangan pada beberapa perangkat dapat menyebabkan crash [#2290](https://github.com/DGP-Studio/Snap.Hutao/issues/2290)
- **【🔨Perbaikan】** Memperbaiki masalah bahwa pop-up impor tidak akan ditampilkan ketika impor prestasi dari aplikasi lain dimulai ketika sudah berada di halaman prestasi [#2306](https://github.com/DGP-Studio/Snap.Hutao/issues/2306)
- **【🔨Perbaikan】** Memperbaiki masalah bahwa beberapa dialog akan terbuka dalam situasi tertentu [#2307](https://github.com/DGP-Studio/Snap.Hutao/issues/2307)
- **【🔨Perbaikan】** Memperbaiki masalah bahwa jalur game tidak dapat diubah ketika pra-unduh tersedia [#2317](https://github.com/DGP-Studio/Snap.Hutao/issues/2317)
- **【🔨Perbaikan】** Memperbaiki masalah bahwa beberapa perangkat tidak dapat menghitung aplikasi container dengan benar, yang menyebabkan crash [#2339](https://github.com/DGP-Studio/Snap.Hutao/issues/2339)
- **【🔨Perbaikan】** Memperbaiki masalah bahwa bakat Tartaglia di halaman Karakter Saya tidak menampilkan bonus level keterampilan untuk serangan normal
- **【🔨Perbaikan】** Memperbaiki masalah bahwa jumlah petunjuk yang muncul tidak benar saat menambahkan ke rencana pengembangan di halaman Karakter Saya
- **【🔨Perbaikan】** Memperbaiki masalah bahwa statistik tingkat penggunaan di halaman Teater Fantasi tidak memiliki posisi vertikal yang ditengah
- **【🔨Perbaikan】** Memperbaiki masalah bahwa masih akan menampilkan kesalahan jaringan setelah langsung masuk kembali setelah cookie kedaluwarsa
- **【🔨Perbaikan】** Memperbaiki masalah bahwa tombol switch fungsi klik cepat tidak menghentikan klik cepat ketika di nonaktifkan setelah fungsi klik cepat diaktifkan
- **【🔨Perbaikan】** Memperbaiki masalah bahwa latar belakang kartu nama karakter tidak memiliki posisi vertikal yang ditengah dalam tampilan grid di halaman Karakter Saya
- **【🔨Perbaikan】** Memperbaiki masalah bahwa beberapa ikon di petunjuk yang tersedia di kotak pencarian di halaman Karakter Saya/Informasi Karakter/Informasi Senjata tidak ditampilkan sepenuhnya
- **【🔨Perbaikan】** Memperbaiki masalah bahwa ukuran jendela dapat diinisialisasi ke ukuran yang salah dalam situasi tertentu
- **【🔨Perbaikan】** Memperbaiki masalah bahwa wish yang belum dimulai dihitung di tab waktu di halaman catatan wish
- **【🔨Perbaikan】** Memperbaiki masalah bahwa real-time notes tidak mengirim notifikasi dengan benar
- **【🔨Perbaikan】** Memperbaiki masalah bahwa bagian eksplorasi karakter di real-time notes mungkin memiliki tata letak yang tidak normal di beberapa tingkat skala
- **【🔨Perbaikan】** Memperbaiki masalah bahwa keluar dari akun masih akan keluar meskipun pendaftaran Snap Hutao Passport gagal

## 1.12.8

- **【🎉Baru】** Menambahkan fungsi klik cepat tombol keyboard F, yang dapat diaktifkan dan dikonfigurasi pintasan di halaman pengaturan
- **【🔨Perbaikan】** Memperbaiki masalah yang dapat menyebabkan crash saat antarmuka peluncuran game dimuat tanpa jalur game

## 1.12.7

- **【🔨Perbaikan】** Memperbaiki masalah crash ketika memasuki halaman peluncuran game saat jalur game belum diatur

## 1.12.6

- **【🎉Baru】** Peluncuran game sekarang akan otomatis mendeteksi jalur game
- **【✨Optimalisasi】** Menghapus fungsi progress bar konfigurasi tim; fungsi ini hanya berlaku jika pergantian tim diizinkan
- **【🔨Perbaikan】** Memperbaiki masalah tidak dapat memeriksa pembaruan dengan benar ketika Snap Hutao Passport belum masuk
- **【🔨Perbaikan】** Memperbaiki masalah bahwa warna latar belakang kartu kalender beranda mungkin salah
- **【🔨Perbaikan】** Memperbaiki masalah kebocoran memori yang dapat disebabkan oleh perubahan batas kecepatan saat mengunduh game
- **【🔨Perbaikan】** Memperbaiki masalah bahwa pembatalan saat mengunduh game dapat menyebabkan program crash
- **【🔨Perbaikan】** Memperbaiki masalah crash saat membaca log Unity saat menggunakan cache web untuk mendapatkan catatan wish ketika jalur game belum diatur [#2272](https://github.com/DGP-Studio/Snap.Hutao/issues/2272)

## 1.12.5

- **【🎉Baru】** Sekarang, resolusi cepat dapat diubah di peluncuran game
- **【🎉Baru】** Menambahkan catatan riwayat pool untuk waktu pool catatan wish
- **【🎉Baru】** Menambahkan perkiraan resin untuk rencana pengembangan [#323](https://github.com/DGP-Studio/Snap.Hutao/issues/323) [#1540](https://github.com/DGP-Studio/Snap.Hutao/issues/1540)
- **【🔨Perbaikan】** Memperbaiki masalah bahwa perubahan latar belakang mungkin tidak dipicu saat mengganti tema
- **【🔨Perbaikan】** Memperbaiki masalah tampilan tema warna yang salah dari beberapa elemen dalam beberapa kasus
- **【🔨Perbaikan】** Memperbaiki kerentanan yang mungkin diinjeksikan melalui inisialisasi metadata [#2240](https://github.com/DGP-Studio/Snap.Hutao/issues/2240)
- **【🔨Perbaikan】** Memperbaiki masalah tidak dapat membaca versi game lokal dalam beberapa kasus [#2251](https://github.com/DGP-Studio/Snap.Hutao/issues/2251)
- **【🔨Perbaikan】** Memperbaiki masalah bahwa server global tidak dapat me-refresh catatan wish dalam beberapa kasus [#2252](https://github.com/DGP-Studio/Snap.Hutao/issues/2252)
- **【🔨Perbaikan】** Memperbaiki masalah bahwa karakter atau senjata tanpa material mungkin muncul setelah menyimpan tumpukan rencana pengembangan
- **【🔨Perbaikan】** Memperbaiki masalah bahwa pengaturan transparansi jendela web ringkas tidak berfungsi [#2258](https://github.com/DGP-Studio/Snap.Hutao/issues/2258)
- **【🔨Perbaikan】** Memperbaiki masalah buffer overflow yang mungkin terjadi ketika keluar dari Snap Hutao dari menu system tray di beberapa sistem
- **【✨Optimalisasi】** Sekarang akan mengganti akun dengan nama yang sama alih-alih membuat yang baru saat mencoba menyimpan akun dengan nama yang sama di halaman peluncuran game
- **【✨Optimalisasi】** Rencana pengembangan sekarang akan mencoba mendapatkan jumlah material backpack yang lebih akurat
- **【✨Optimalisasi】** Mengoptimalkan ukuran Snap Hutao

## 1.12.4

- **【🔨Perbaikan】** Memperbaiki masalah bahwa pengaturan resolusi peluncuran game tidak dapat disimpan [#2229](https://github.com/DGP-Studio/Snap.Hutao/issues/2229)
- **【🔨Perbaikan】** Memperbaiki masalah waktu penyelesaian prestasi yang ditampilkan salah [#2184](https://github.com/DGP-Studio/Snap.Hutao/issues/2184)
- **【🔨Perbaikan】** Memperbaiki masalah bahwa backpack pada rencana pengembangan tidak dapat di-refresh [#2212](https://github.com/DGP-Studio/Snap.Hutao/issues/2212)
- **【🔨Perbaikan】** Memperbaiki masalah bahwa pintasan cepat maju/mundur pada jendela web ringkas tidak berfungsi
- **【🔨Perbaikan】** Memperbaiki masalah bahwa jendela pemilihan file dapat menyebabkan crash di beberapa sistem
- **【🔨Perbaikan】** Memperbaiki masalah bahwa pemilihan sumber unduhan tidak berfungsi saat memperbarui Snap Hutao
- **【✨Optimalisasi】** Sekarang akan memeriksa status proxy dan Loopback saat startup, dan memandu pengguna untuk menghapus batasan Loopback ketika jaringan tidak dapat terhubung dengan normal
- **【✨Optimalisasi】** Jendela web ringkas sekarang akan mengingat halaman saat terakhir kali ditutup

## 1.12.3 <Badge text="hotfix" type="warning" />

- **【🔨Perbaikan】** Memperbaiki masalah crash program yang disebabkan oleh ikon system tray yang tidak sinkron [#2198](https://github.com/DGP-Studio/Snap.Hutao/issues/2198)
- **【🔨Perbaikan】** Memperbaiki masalah bahwa ikon system tray tidak dapat diinisialisasi, yang menyebabkan metadata tidak dapat diinisialisasi, sehingga menyebabkan program tidak dapat digunakan [#2202](https://github.com/DGP-Studio/Snap.Hutao/issues/2202)

## 1.12.2

- **【🎉Baru】** Menambahkan pintasan cepat maju/mundur video untuk jendela web ringkas
- **【🔨Perbaikan】** Memperbaiki masalah bahwa status pemilihan yang tidak normal pada rencana pengembangan menyebabkan Snap Hutao tidak dapat diluncurkan [#2174](https://github.com/DGP-Studio/Snap.Hutao/issues/2174)
- **【🔨Perbaikan】** Memperbaiki masalah bahwa ikon system tray mungkin tidak dapat dibuat dengan benar setelah restart sebagai administrator di menu system tray
- **【🔨Perbaikan】** Memperbaiki masalah bahwa waktu pengumuman sebelum pembaruan versi game ditampilkan salah [#2175](https://github.com/DGP-Studio/Snap.Hutao/issues/2175)
- **【🔨Perbaikan】** Memperbaiki masalah bahwa pemilihan ulang jalur game dapat menyebabkan crash saat meluncurkan game
- **【🔨Perbaikan】** Memperbaiki masalah bahwa manajemen file game mungkin macet saat memperbaiki game
- **【🔨Perbaikan】** Memperbaiki masalah bahwa pencapaian tidak dapat dialihkan dengan mouse ketika jendela terlalu kecil [#2181](https://github.com/DGP-Studio/Snap.Hutao/issues/2181)
- **【🔨Perbaikan】** Memperbaiki masalah bahwa program crash saat beralih ke halaman login saat mengunggah rekaman spiral abyss tanpa login ke Snap Hutao Passport [#2169](https://github.com/DGP-Studio/Snap.Hutao/issues/2169)
- **【🔨Perbaikan】** Memperbaiki masalah bahwa Teater Fantasi server global tidak dapat di-refresh dengan benar [#2170](https://github.com/DGP-Studio/Snap.Hutao/issues/2170)
- **【🔨Perbaikan】** Memperbaiki masalah bahwa senjata dapat menyebabkan crash saat ditambahkan ke rencana pengembangan [#2168](https://github.com/DGP-Studio/Snap.Hutao/issues/2168)
- **【✨Optimalisasi】** Mengoptimalkan efek tampilan ikon petunjuk pra-unduh manajemen file game
- **【✨Optimalisasi】** Menambahkan tombol peluncuran game untuk setiap karakter game di halaman real-time notes, yang akan melompat ke halaman peluncuran game dan secara otomatis mengalihkan pengguna MiYouShe/HoYoLAB ke pengguna yang sesuai dengan real-time notes [#1318](https://github.com/DGP-Studio/Snap.Hutao/issues/1318)
- **【✨Optimalisasi】** Mengoptimalkan kecepatan pemuatan ikon karakter dan senjata

## 1.12.1 <Badge text="hotfix" type="warning" />

- **【🔨Perbaikan】** Memperbaiki masalah bahwa migrasi database gagal, menyebabkan tidak dapat memulai [#2159](https://github.com/DGP-Studio/Snap.Hutao/issues/2159)

## 1.12.0

- **【🎉Baru】** Meningkatkan ke .NET 9
- **【🎉Baru】** Menambahkan perintah untuk meluncurkan jendela web ringkas di menu klik kanan ikon notifikasi
  - Jendela web ringkas adalah jendela web yang berada di atas, dan dapat menjadi semi-transparan ketika tidak ada interaksi
  - Pintasan untuk memutar/menjeda video di halaman web dapat diatur di halaman pengaturan
  - Perlu diluncurkan sebagai administrator untuk menggunakan jendela web ringkas
- **【🎉Baru】** Menambahkan halaman Teater Fantasi [#1671](https://github.com/DGP-Studio/Snap.Hutao/issues/1671)
- **【🔨Perbaikan】** Memperbaiki masalah bahwa peralihan server game dengan mode SophonChunk dapat menyebabkan crash
- **【🔨Perbaikan】** Memperbaiki masalah kesalahan logika dalam opsi injeksi peluncuran game dalam beberapa kasus tertentu
- **【🔨Perbaikan】** Memperbaiki masalah bahwa opsi injeksi pada bagian yang tidak dapat diinteraksikan setelah injeksi peluncuran game gagal dan game dipaksa untuk berakhir
- **【🔨Perbaikan】** Memperbaiki masalah bahwa server global tidak dapat me-refresh catatan wish melalui cache web [#2141](https://github.com/DGP-Studio/Snap.Hutao/issues/2141)
- **【🔨Perbaikan】** Memperbaiki masalah bahwa detail gelombang serangan di halaman Spiral Abyss mungkin tidak dapat diperluas sepenuhnya dalam kasus non-Bahasa Tionghoa [#2152](https://github.com/DGP-Studio/Snap.Hutao/issues/2152)
- **【🔨Perbaikan】** Memperbaiki masalah bahwa pintasan cepat auto-click gagal diinisialisasi yang menyebabkan crash dalam situasi tertentu
- **【✨Optimalisasi】** Saat meluncurkan game dari notifikasi real-time notes, itu akan secara otomatis mengalihkan pengguna MiYouShe/HoYoLAB ke pengguna yang sesuai dengan real-time notes

## 1.11.9 <Badge text="hotfix" type="warning" />

- **【🎉Baru】** Menambahkan waktu pool ke catatan wish [#1341](https://github.com/DGP-Studio/Snap.Hutao/issues/1341)
- **【🔨Perbaikan】** Memperbaiki masalah bahwa opsi injeksi peluncuran game tidak cocok dengan situasi sebenarnya [#2134](https://github.com/DGP-Studio/Snap.Hutao/issues/2134)
- **【🔨Perbaikan】** Memperbaiki masalah bahwa mungkin ada lag pada tim dan beberapa animasi ledakan elemental karakter ketika penyesuaian bidang pandang diaktifkan [#2137](https://github.com/DGP-Studio/Snap.Hutao/issues/2137)
- **【🔨Perbaikan】** Memperbaiki masalah bahwa WebView dapat menyebabkan crash saat tidak dapat muncul secara normal

## 1.11.8 <Badge text="hotfix" type="warning" />

- **【🔨Perbaikan】** Memperbaiki masalah bahwa fungsi injeksi server global tidak valid [#2121](https://github.com/DGP-Studio/Snap.Hutao/issues/2121)
- **【🔨Perbaikan】** Memperbaiki masalah bahwa me-refresh catatan wish melalui cache web tidak valid [#2124](https://github.com/DGP-Studio/Snap.Hutao/issues/2124)
- **【✨Optimalisasi】** Mengoptimalkan logika antara tombol switch opsi injeksi peluncuran game [#2122](https://github.com/DGP-Studio/Snap.Hutao/issues/2122)

## 1.11.7

- **【🎉Baru】/【✨Optimalisasi】** Menyesuaikan UI antarmuka peluncuran game
  - **【🎉Baru】** Menghapus fungsi progress bar antarmuka konfigurasi tim
  - **【🎉Baru】** Fungsi "Biarkan aku masuk! Mickey Mouse Clubhouse" (Ya, itu benar)
- **【🎉Baru】** Menambahkan mode chunk untuk beralih server game di peluncuran game
- **【🎉Baru】** Menambahkan kartu nama karakter ke informasi karakter [#1424](https://github.com/DGP-Studio/Snap.Hutao/issues/1424)
- **【🔨Perbaikan】** Memperbaiki masalah bahwa Snap Hutao mungkin crash saat pertama kali diluncurkan setiap hari [#2101](https://github.com/DGP-Studio/Snap.Hutao/issues/2101)
- **【🔨Perbaikan】** Memperbaiki masalah bahwa jendela laporan kesalahan mungkin tidak ditampilkan dengan benar
- **【🔨Perbaikan】** Memperbaiki masalah durasi pengumuman beranda yang salah
- **【🔨Perbaikan】** Memperbaiki masalah bahwa manajemen file game dapat menyebabkan crash di beberapa jenis disk [#2077](https://github.com/DGP-Studio/Snap.Hutao/issues/2077)
- **【🔨Perbaikan】** Memperbaiki masalah bahwa me-refresh catatan wish melalui cache web dapat menyebabkan crash [#2083](https://github.com/DGP-Studio/Snap.Hutao/issues/2083)
- **【🔨Perbaikan】** Memperbaiki masalah bahwa ukuran jendela mungkin salah setelah restart antar monitor
- **【✨Optimalisasi】** Kartu kalender sekarang akan menyorot material yang dapat di-farm hari ini di rencana pengembangan saat ini [#2045](https://github.com/DGP-Studio/Snap.Hutao/issues/2045)
- **【✨Optimalisasi】** Karakter Saya dan Informasi Karakter sekarang tidak akan menampilkan opsi filter bintang 1~3 [#2110](https://github.com/DGP-Studio/Snap.Hutao/issues/2110)
- **【✨Optimalisasi】** Menambahkan akun MiYouShe/HoYoLAB sekarang akan menampilkan dialog untuk mencegah pengguna mengoperasikan saat belum selesai ditambahkan

## 1.11.6 <Badge text="hotfix" type="warning" />

- **【🔨Perbaikan】** Memperbaiki masalah bahwa fitur yang memerlukan verifikasi akan crash setelah verifikasi selesai [#2074](https://github.com/DGP-Studio/Snap.Hutao/issues/2074)
- **【🔨Perbaikan】** Memperbaiki masalah bahwa fitur yang memerlukan unduhan sumber daya mungkin macet

## 1.11.5

- **【🎉Baru】** Menambahkan login akun MiYouShe/HoYoLAB di peluncuran game
- **【🎉Baru】** Menambahkan filter ke halaman Karakter Saya [#1786](https://github.com/DGP-Studio/Snap.Hutao/issues/1786)
- **【🎉Baru】** Menambahkan opsi untuk metode penyimpanan gambar berbagi aktivitas web di pengaturan [#1804](https://github.com/DGP-Studio/Snap.Hutao/issues/1804)
- **【🎉Baru】** Menambahkan login akun dan login pihak ketiga untuk server global [#1966](https://github.com/DGP-Studio/Snap.Hutao/issues/1966)
- **【🔨Perbaikan】** Memperbaiki masalah bahwa program dapat crash saat me-refresh gambar latar belakang
- **【🔨Perbaikan】** Memperbaiki masalah tampilan dengan multi-monitor scale
- **【🔨Perbaikan】** Memperbaiki masalah bahwa jendela laporan kesalahan mungkin tidak ditampilkan dengan benar
- **【🔨Perbaikan】** Memperbaiki masalah bahwa pengaturan real-time notes tidak ditampilkan sepenuhnya dalam beberapa bahasa [#2040](https://github.com/DGP-Studio/Snap.Hutao/issues/2040)
- **【🔨Perbaikan】** Memperbaiki masalah bahwa beberapa daftar tidak dapat diproses dengan benar saat memperbarui rencana pengembangan [#2022](https://github.com/DGP-Studio/Snap.Hutao/issues/2022)
- **【🔨Perbaikan】** Memperbaiki masalah bahwa sinkronisasi item backpack dalam rencana pengembangan mungkin tidak merespon [#2044](https://github.com/DGP-Studio/Snap.Hutao/issues/2044)
- **【🔨Perbaikan】** Memperbaiki masalah bahwa jumlah item backpack sinkron dalam rencana pengembangan mungkin tidak benar [#2061](https://github.com/DGP-Studio/Snap.Hutao/issues/2061)
- **【🔨Perbaikan】** Memperbaiki masalah bahwa jika kode verifikasi tidak dimasukkan setelah memasukkan nomor telepon saat login akun MiYouShe, program akan crash [#2058](https://github.com/DGP-Studio/Snap.Hutao/issues/2058)
- **【✨Optimalisasi】** Mengoptimalkan logika pengaktifan tombol pembaruan game
- **【✨Optimalisasi】** Batas atas level monster ditingkatkan menjadi level 110 [#1988](https://github.com/DGP-Studio/Snap.Hutao/issues/1988)
- **【✨Optimalisasi】** Sekarang jendela verifikasi akan otomatis muncul saat menemukan kode verifikasi [#1616](https://github.com/DGP-Studio/Snap.Hutao/issues/1616)

## 1.11.4

- **【🎉Baru】** Sekarang jendela laporan kesalahan akan muncul saat program crash
- **【🔨Perbaikan】** Memperbaiki masalah bahwa peluncuran pertama setelah instalasi/pembaruan Snap Hutao dapat menyebabkan crash
- **【🔨Perbaikan】** Memperbaiki masalah bahwa beberapa status Discord diatur secara bersamaan [#2024](https://github.com/DGP-Studio/Snap.Hutao/issues/2024)
- **【🔨Perbaikan】** Memperbaiki masalah bahwa baris pertama pengumuman game mungkin tidak merespons klik
- **【🔨Perbaikan】** Memperbaiki masalah bahwa pengumuman server global tidak dapat diperoleh [#2030](https://github.com/DGP-Studio/Snap.Hutao/issues/2030)
- **【🔨Perbaikan】** Memperbaiki masalah bahwa membuka kunci frame rate mungkin tidak berfungsi setelah pembaruan versi 5.1
- **【🔨Perbaikan】** Memperbaiki masalah bahwa pembaruan game tidak dapat diselesaikan dengan normal
- **【🔨Perbaikan】** Memperbaiki masalah bahwa progress instalasi di jendela pembaruan game mungkin melebihi 100%
- **【🔨Perbaikan】** Memperbaiki masalah bahwa pra-unduh sumber daya game mungkin macet [#2029](https://github.com/DGP-Studio/Snap.Hutao/issues/2029)
- **【🔨Perbaikan】** Memperbaiki masalah bahwa tanda selesai mungkin tidak ditampilkan saat pra-unduh sumber daya game selesai
- **【🔨Perbaikan】** Memperbaiki masalah bahwa statistik material di halaman perhitungan pengembangan mungkin tidak merespons [#2014](https://github.com/DGP-Studio/Snap.Hutao/issues/2014)
- **【🔨Perbaikan】** Memperbaiki masalah bahwa login kode verifikasi ponsel MiYouShe mungkin gagal
- **【✨Optimalisasi】** Menambahkan prioritas item yang belum dikumpulkan di statistik material halaman perhitungan pengembangan
- **【✨Optimalisasi】** Sekarang akan menampilkan material yang dapat diperoleh hari ini di statistik material halaman perhitungan pengembangan

## 1.11.3

- **【🎉Baru】** Menambahkan kartu kalender di beranda [#1923](https://github.com/DGP-Studio/Snap.Hutao/issues/1923)
- **【🎉Baru】** Menambahkan rekomendasi atribut artefak di halaman Karakter Saya
- **【🔨Perbaikan】** Memperbaiki masalah bahwa beberapa monster di halaman spiral abyss tidak dapat ditampilkan dengan benar
- **【🔨Perbaikan】** Memperbaiki masalah bahwa halaman informasi karakter/senjata dapat macet [#1999](https://github.com/DGP-Studio/Snap.Hutao/issues/1999)
- **【🔨Perbaikan】** Memperbaiki masalah bahwa beralih server game dapat menyebabkan crash
- **【✨Optimalisasi】** Melarang langsung menutup jendela operasi ketika operasi file game belum selesai [#2002](https://github.com/DGP-Studio/Snap.Hutao/issues/2002)
- **【✨Optimalisasi】** Menambahkan tombol impor/ekspor di halaman catatan wish untuk memudahkan pengguna menemukan tombol impor dan ekspor di halaman pengaturan

## 1.11.2

- **【🎉Baru】** Menambahkan fungsi filter hanya untuk pencapaian komisi di halaman manajemen prestasi [#897](https://github.com/DGP-Studio/Snap.Hutao/issues/897)
- **【🎉Baru】** Menambahkan fungsi pembatasan kecepatan unduhan game di halaman pengaturan
- **【🎉Baru】** Menambahkan tautan alat web peningkatan versi UIGF di impor/ekspor catatan wish di antarmuka pengaturan
- **【🔨Perbaikan】** Memperbaiki masalah bahwa beberapa perangkat memberikan petunjuk bahwa file yang ditentukan tidak dapat dienkripsi saat menyalin file di dalam paket aplikasi
  - Masalah ini pernah menyebabkan:
    - Gagal membuat pintasan desktop dengan normal
    - Gagal membuka kunci frame rate game dengan normal
- **【🔨Perbaikan】** Memperbaiki masalah bahwa penggunaan CPU tidak normal saat mengunduh game di halaman peluncuran game [#1964](https://github.com/DGP-Studio/Snap.Hutao/issues/1964)
- **【🔨Perbaikan】** Memperbaiki masalah bahwa pembaruan game tidak berfungsi
- **【🔨Perbaikan】** Memperbaiki masalah bahwa berpindah ke karakter tanpa artefak di halaman Karakter Saya dapat menyebabkan program crash [#1954](https://github.com/DGP-Studio/Snap.Hutao/issues/1954)
- **【🔨Perbaikan】** Memperbaiki masalah kode -1 untuk permintaan real-time notes yang gagal
- **【🔨Perbaikan】** Memperbaiki masalah bahwa halaman manajemen prestasi di beberapa perangkat tidak dapat beralih arsip dengan normal [#1987](https://github.com/DGP-Studio/Snap.Hutao/issues/1987)
- **【✨Optimalisasi】** Judul dan petunjuk dari prestasi di halaman manajemen prestasi sekarang dapat dipilih dan disalin [#1726](https://github.com/DGP-Studio/Snap.Hutao/issues/1726)
- **【✨Optimalisasi】** Sekarang akan memfilter kategori prestasi saat mencari prestasi di manajemen prestasi [#1907](https://github.com/DGP-Studio/Snap.Hutao/issues/1907)
- **【✨Optimalisasi】** Menyesuaikan tautan antarmuka pengumuman server CN [Scighost/Starward#1089](https://github.com/Scighost/Starward/issues/1089)

## 1.11.1

- **【🎉Baru】** Menambahkan perintah untuk menjalankan skrip debug di menu klik kanan ikon notifikasi
- **【🎉Baru】** Menambahkan perintah untuk me-restart dalam mode administrator di menu klik kanan ikon notifikasi [#1825](https://github.com/DGP-Studio/Snap.Hutao/issues/1825)
- **【🔨Perbaikan】** Jendela catatan pembaruan saat peluncuran pertama setelah pembaruan sekarang akan mengenali opsi bahasa Snap Hutao dengan benar [#1900](https://github.com/DGP-Studio/Snap.Hutao/issues/1900)
- **【🔨Perbaikan】** Memperbaiki masalah bahwa fungsi unduh dan perbaiki game tidak dapat digunakan dengan benar dalam peluncuran game
- **【🔨Perbaikan】** Memperbaiki masalah bahwa latar belakang peluncur tidak berfungsi dengan benar di opsi latar belakang [#1908](https://github.com/DGP-Studio/Snap.Hutao/issues/1908)
- **【🔨Perbaikan】** Memperbaiki masalah bahwa saat mengimpor file UIGF v4.0, bagian yang benar tidak dipilih untuk impor [#1941](https://github.com/DGP-Studio/Snap.Hutao/issues/1941)
- **【🔨Perbaikan】** Memperbaiki masalah bahwa tata letak dialog impor file UIGF v4.0 tidak benar
- **【🔨Perbaikan】** Memperbaiki masalah bahwa mencentang atau menghapus centang pada pencapaian di halaman manajemen pencapaian saat kategori pencapaian dipilih akan menyebabkan kategori pencapaian dibatalkan pilihannya [#1946](https://github.com/DGP-Studio/Snap.Hutao/issues/1946)
- **【✨Optimalisasi】** Sekarang, saat mouse diarahkan ke pengguna HoYoLAB di panel pengguna, kata "HoYoLAB" akan disembunyikan [#1824](https://github.com/DGP-Studio/Snap.Hutao/issues/1824)
- **【✨Optimalisasi】** Rencana pengembangan sekarang dapat mengenali material terobosan bakat dan senjata dari Natlan dengan benar
- **【✨Optimalisasi】** Menyesuaikan rentang bidang pandang untuk membuka kunci frame rate
- **【✨Optimalisasi】** Mengoptimalkan logika unduhan multi-thread saat beralih server
- **【✨Optimalisasi】** Mengoptimalkan UI jendela pop-up fungsi unduh dan perbaiki game di peluncuran game

## 1.11.0

- **【🎉Baru】** Menambahkan tampilan Poin Pelatihan Berjangka Panjang di halaman real-time notes [#1841](https://github.com/DGP-Studio/Snap.Hutao/issues/1841)
- **【🎉Baru】** 【BETA】 Menambahkan fungsi unduh/perbaiki/pra-unduh/pembaruan game di peluncuran game
- **【🔨Perbaikan】** Memperbaiki masalah bahwa login kode pindai MiYouShe tidak berfungsi; pintu masuk login kode pindai telah dihapus; metode login kode verifikasi ponsel telah ditambahkan [#1819](https://github.com/DGP-Studio/Snap.Hutao/issues/1819)
- **【🔨Perbaikan】** Memperbaiki masalah bahwa level keterampilan karakter di daftar dan tampilan grid di halaman Karakter Saya tidak konsisten karena bonus konstelasi [#1838](https://github.com/DGP-Studio/Snap.Hutao/issues/1838)
- **【🔨Perbaikan】** Memperbaiki masalah bahwa berpindah ke halaman lain saat pengumuman beranda belum selesai dimuat dapat menyebabkan crash [#1845](https://github.com/DGP-Studio/Snap.Hutao/issues/1845)
- **【🔨Perbaikan】** Memperbaiki masalah bahwa kegagalan membaca informasi versi paket lokal saat mengonversi server game dapat menyebabkan crash [#1851](https://github.com/DGP-Studio/Snap.Hutao/issues/1851)
- **【🔨Perbaikan】** Memperbaiki masalah bahwa server global menampilkan `Kunci verifikasi ked
