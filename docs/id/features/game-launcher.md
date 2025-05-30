---
headerDepth: 2
category: [Fitur, Tutorial]
tag: [buka kunci frame rate, ganti server, ganti akun]
order: 4
comment: false
description: Peluncur tingkat lanjut Snap Hutao mendukung parameter peluncuran khusus, penggantian server, pembukaan kunci frame rate, dan fitur lainnya, yang secara signifikan meningkatkan pengalaman bermain game pengguna.
---

# Peluncur Tingkat Lanjut

![Peluncur Game](https://img.alicdn.com/imgextra/i4/1797064093/O1CN014YLRnj1g6e0zQaBl6_!!1797064093.png_.webp)

Peluncur tingkat lanjut Snap Hutao melalui beragam opsi pengaturan, menyediakan pengalaman peluncuran game yang lebih fleksibel.

::: important
Ini adalah terjemahan yang dibuat oleh model Google Gemini, dan kami menerima perbaikan melalui PR.
:::

::: caution
Penggunaan **perangkat lunak tidak resmi apa pun** **berpotensi** menyebabkan kerusakan pada properti virtual Anda, dan melanjutkan penggunaan fitur perangkat lunak ini akan dianggap bahwa **Anda telah mengetahui dan menyetujui** [Persyaratan Penggunaan](/zh/statements/tos.md) kami.
:::

## Pengaturan Awal

- Klik "Luncurkan Game" di bilah menu kiri untuk masuk ke fitur peluncur tingkat lanjut.
  - Saat pertama kali digunakan, Anda akan dialihkan ke halaman pengaturan, yang mengharuskan Anda untuk mengatur jalur game.
  - **Harap pilih jalur program utama game (`YuanShen.exe`), bukan jalur peluncur (`launcher.exe`).**
    - Contoh jalur: `D:\miHoYo Launcher\games\Genshin Impact Game\YuanShen.exe`
  - Setelah berhasil mendeteksi jalur game, klik Konfirmasi.
  - Jika game belum terinstal, Anda dapat mengklik tombol "Instal Game" dan mengikuti petunjuk untuk mengatur direktori instalasi. Snap Hutao akan secara otomatis mengunduh dan menginstal game.
- Setelah konfigurasi selesai, klik tombol "Luncurkan Game" di pojok kanan atas untuk meluncurkan game.

## Mengganti Server

::: tip Pemberitahuan Izin
Penggunaan fitur ini memerlukan Snap Hutao untuk dijalankan dengan izin administrator.
Snap Hutao akan membuat folder bernama `ServerCache` di direktori data untuk menyimpan file yang diperlukan untuk mengganti server, dan akan secara otomatis memeriksa pembaruan.
:::

1. Masuk ke halaman "Luncurkan Game".
2. Di bagian "Server", pilih server target.

**Server yang tersedia meliputi:**

| Opsi                       | Server                                                                 |
|----------------------------|------------------------------------------------------------------------|
| `官方服 Default`            | Server Tiongkok Daratan Resmi (Default)                                |
| `官方服 Official`           | Server Tiongkok Daratan Resmi (Official), tidak ada perbedaan substansial dengan opsi sebelumnya |
| `官方服 NoTapTap`           | Server Tiongkok Daratan Resmi yang menonaktifkan login TapTap          |
| `国际服 Default`            | Server Global HoYoverse (Default)                                      |
| `国际服 Official`           | Server Global HoYoverse (Official), tidak ada perbedaan substansial dengan opsi sebelumnya |
| `国际服 Epic`               | Server Global HoYoverse yang menggunakan gerbang pembayaran Epic       |
| `国际服 Google`             | Server Global HoYoverse yang menggunakan gerbang pembayaran Google Pay |

Klik tombol "Luncurkan Game" di pojok kanan atas, Snap Hutao akan mengunduh file yang relevan dari server resmi dan menerapkannya, lalu meluncurkan game.

## Penyimpanan Akun

::: tip
Fitur ini mencatat status login akun game Genshin Impact.
:::

1. Masuk ke halaman "Luncurkan Game".
2. Klik "Deteksi Akun", Snap Hutao akan menyimpan status login game saat ini.
3. Di jendela "Beri Nama Akun" yang muncul, masukkan nama dan konfirmasi.
4. Keluar dari akun saat ini dan tetap pertahankan catatan, lalu gunakan akun dan kata sandi untuk masuk ke akun baru, ulangi langkah-langkah di atas untuk menyimpan beberapa akun.
5. Gunakan fitur ganti akun untuk memilih akun yang telah disimpan.
6. **Status login dari server yang berbeda tidak saling memengaruhi**:
   - Misalnya, jika akun A masuk di server Tiongkok Daratan (国服), dan akun B masuk di server luar negeri (外服); A hanya akan terlihat saat di server Tiongkok Daratan, dan B hanya akan terlihat saat di server luar negeri.

## Menggunakan MiYouShe / HoYoLAB Login

::: warning
Fitur ini harus diaktifkan setelah mengaktifkan fitur "Parameter Peluncuran".
:::

Setelah diaktifkan, Snap Hutao akan menggunakan akun MiYouShe / HoYoLAB yang sudah masuk untuk langsung masuk ke akun Genshin Impact yang tertaut.

## Dukungan HDR Platform Windows

Fitur HDR bawaan Genshin Impact perlu diaktifkan melalui nilai kunci registri. Snap Hutao dapat mengaktifkan fitur ini untuk meningkatkan pengalaman visual.

## Parameter Peluncuran

Di fitur "Parameter Peluncuran", pengguna dapat mengatur opsi lanjutan berikut:

- **Layar Penuh Eksklusif**: `-window-mode exclusive`
  - Proses game berjalan dalam mode layar penuh eksklusif.
- **Layar Penuh**: `-screen-fullscreen`
  - Game diluncurkan dalam mode layar penuh.
- **Tanpa Bingkai**: `-popupwindow`
  - Game diluncurkan dalam mode jendela tanpa bingkai.
- **Mode Layar Sentuh**: `-platform_type CLOUD_THIRD_PARTY_MOBILE`
  - Mengaktifkan mode operasi layar sentuh (input keyboard dan mouse akan dinonaktifkan).
- **Pengaturan Resolusi**:
  - `-screen-width`: Mengatur lebar layar (misalnya, 1920).
  - `-screen-height`: Mengatur tinggi layar (misalnya, 1080).
- **Pemilihan Monitor**: `-monitor`
  - Menentukan monitor target untuk menjalankan game.
  - Jika Anda tidak yakin dengan nomor monitor, Anda dapat mengklik "Identifikasi Monitor" untuk mendapatkan petunjuk.

## Unduhan Sumber Daya

Tab "Unduhan Sumber Daya" Snap Hutao menyediakan tautan waktu nyata untuk paket instalasi game dan paket tambahan untuk server Tiongkok Daratan. Pengguna dapat langsung melompat ke browser untuk mengunduh.

- Pengguna perlu menempatkan file yang diunduh di direktori yang sama dengan program game, dan menyelesaikan pembaruan melalui peluncur resmi.

## Fitur Injeksi

::: caution
Penggunaan fitur injeksi yang tidak tepat dapat menyebabkan kerusakan pada perangkat atau data game. Dengan mengaktifkannya, pengguna dianggap setuju untuk menanggung risiko yang terkait.
:::

### Pembukaan Kunci Batas Frame Rate

Mengandalkan [proyek UnlockerIsland](https://github.com/DGP-Studio/UnlockerIsland), untuk membuka kunci batas frame rate Genshin Impact.

- **Cara Penggunaan:**
  1. Jalankan Snap Hutao dengan izin administrator.
  2. Di modul "Injeksi", atur target frame rate.
  3. Klik tombol "Luncurkan Game".

#### Faktor yang dapat menyebabkan **kegagalan pembukaan kunci batas frame rate**

1. Snap Hutao tidak tetap berjalan di latar belakang
2. Opsi **V-Sync** tidak dimatikan dalam game
3. Terdapat pengaturan "Frame Rate Maksimum" di driver kartu grafis
4. Ada opsi yang mirip dengan "Mode Hemat Energi" yang tidak dimatikan di perangkat lunak driver kartu grafis
5. Performa kartu grafis tidak mencukupi
6. Pustaka MSVCRT tidak terinstal

### Penyesuaian Bidang Pandang

Menyesuaikan rentang bidang pandang kamera dan visibilitas kabut, memberikan pengalaman visual yang lebih baik.

### Pengaturan Bilah Kemajuan Konfigurasi Tim

Menyesuaikan status tampilan bilah kemajuan konfigurasi tim, hanya efektif saat tim dapat dialihkan dalam **kondisi normal**.

## Integrasi Proses

### Statistik Durasi

Perlu menginstal dan mengonfigurasi [Starward](https://github.com/Scighost/Starward). Setelah diaktifkan, Snap Hutao akan memanggil antarmuka Starward untuk mencatat durasi game.

### Integrasi Better GI

Perlu menginstal dan mengonfigurasi [Better Genshin Impact](https://bgi.huiyadan.com/). Setelah diaktifkan, Snap Hutao akan memanggil antarmukanya untuk mengaktifkan fitur otomatisasi berbasis teknologi penglihatan komputer (OCR).

### Aktivitas Discord

Perlu menginstal dan mengonfigurasi [Discord](https://discord.com/). Setelah diaktifkan, Snap Hutao akan menghasilkan status game real-time di kartu profil Discord.

## Pertanyaan Umum

### Bagaimana cara meluncurkan game dengan cepat melalui Snap Hutao

- Di program utama, atur fitur peluncur tingkat lanjut dengan benar.
- Saat jendela utama Snap Hutao tidak tertutup, Anda dapat langsung mengklik "Beranda - Luncurkan Game" untuk memulai dengan cepat.
- Klik ikon Snap Hutao di pojok kanan bawah taskbar (biasanya akan secara otomatis dikumpulkan oleh sistem), lalu pilih "Luncurkan Game".

  ![quick-start](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Uu8QzN1g6du6MRp8h_!!1797064093.png_.webp)

### Mengapa status login game menjadi tidak valid, menyebabkan fitur ganti akun tidak berfungsi?

- Faktor-faktor utama yang menentukan penyimpanan status login game meliputi:
  - **Lingkungan Jaringan**: Perubahan alamat IP publik yang sering dapat menyebabkan status login menjadi tidak valid.
  - **ID Perangkat**: Jika Anda mengganti kartu jaringan atau alamat MAC, status login dapat menjadi tidak valid.
- Penyebab umum dan solusinya:
  1. Pastikan akun telah berhasil masuk, lalu masuk ke game.
  2. Tutup game dan pastikan proses game telah sepenuhnya berakhir.
  3. Lakukan deteksi akun lagi untuk memastikan status login telah tercatat dengan benar.

### Muncul kode error `31-4302` saat membuka game

Jika Anda mengalami kode error `31-4302`, Anda dapat menyelesaikannya dengan mengaktifkan opsi "Luncurkan Game - Injeksi - Biarkan Aku Masuk".

### Bagaimana cara memulihkan program game setelah gagal mengganti server?

::: info Penjelasan Prinsip Fitur
Snap Hutao hanya mengunduh file yang diperlukan untuk mengganti server dari server resmi Genshin Impact, memastikan bahwa file tersebut aman dan Andal. Jika Anda sering mengalami kegagalan konversi karena masalah jaringan, mungkin kualitas koneksi jaringan ke server target buruk. Disarankan untuk memeriksa koneksi jaringan atau menghubungi penyedia layanan jaringan.
:::

Selama proses penggantian server, jika terjadi kegagalan konversi karena keluar yang tidak terduga atau masalah jaringan, klien game dapat rusak. Snap Hutao akan menampilkan pesan `Jalur game tidak valid, buka pengaturan untuk mengubah jalur game`. Pada saat ini, file program utama game mungkin telah hilang. Anda dapat memulihkannya secara manual dengan mengikuti langkah-langkah berikut:

#### Memulihkan Program Utama Game Secara Manual

1. **Temukan File Cadangan**:
   - Snap Hutao akan menyimpan file cadangan game sebelum penggantian di direktori `%userprofile%/Documents/Hutao/ServerCache`.
   - File cadangan meliputi: `GenshinImpact.exe` dan `GenshinImpact_Data` (server Global), atau `YuanShen.exe` dan `YuanShen_Data` (server Tiongkok Daratan).
2. **Periksa Direktori Game**:
   - Direktori server Global harus berisi `GenshinImpact.exe` dan `GenshinImpact_Data`.
   - Direktori server Tiongkok Daratan harus berisi `YuanShen.exe` dan `YuanShen_Data`.
3. **Pulihkan File Secara Manual**:
   - Salin file dari direktori cadangan ke direktori program utama game, timpa file yang ada.
   - Jika Anda perlu mengganti versi server, ganti nama file yang relevan: misalnya, ganti nama `YuanShen_Data` menjadi `GenshinImpact_Data`.
4. **Luncurkan Game**:
   - Masuk kembali ke antarmuka "Luncurkan Game" Snap Hutao dan luncurkan game.
   - Jika pesan kesalahan hilang, Anda dapat terus memilih server target dan menyelesaikan penggantian.

### Bagaimana cara memulihkan file konfigurasi `config.ini`?

Dalam beberapa kasus (seperti kesalahan izin atau kegagalan penggantian server), file `config.ini` mungkin hilang, menyebabkan game tidak dapat diluncurkan. Anda dapat membuatnya secara manual dan mengisi konten berikut:

::: info
Ubah parameter `game_version` sesuai dengan versi game yang sebenarnya.
:::

#### Contoh Konten File Konfigurasi

::: tabs#game_config_samples
@tab Server Tiongkok Daratan Official

```ini
[General]
channel=1
cps=mihoyo
game_version=5.3.0
sub_channel=1
sdk_version=
game_biz=hk4e_cn
uapc={"hk4e_cn":{"uapc":""},"hyp":{"uapc":""}}
```

@tab Server Global Official

```ini
[General]
channel=1
cps=mihoyo
game_version=5.3.0
sub_channel=0
sdk_version=
game_biz=hk4e_global
uapc={"hk4e_global":{"uapc":""},"hyp":{"uapc":""}}
```

:::

Simpan file konfigurasi ke subdirektori `/Genshin Impact Game/` di direktori instalasi game untuk memulihkan peluncuran normal.