---
headerDepth: 2
category: [Feature, Tutorial]
tag: [unlock framerate, server switch, switch account]
order: 4
comment: false
description: Peluncur canggih Snap Hutao menawarkan fitur seperti parameter peluncuran kustom, peralihan server, dan buka kunci frame rate, yang secara signifikan meningkatkan pengalaman bermain pengguna.
---

# Peluncur Game Canggih

![Peluncur Game](https://img.alicdn.com/imgextra/i4/1797064093/O1CN014YLRnj1g6e0zQaBl6_!!1797064093.png_.webp)

Peluncur canggih Snap Hutao menyediakan pengalaman peluncuran game yang lebih fleksibel melalui berbagai opsi pengaturan.

::: caution
Menggunakan **perangkat lunak tidak resmi apa pun** **berpotensi** mengakibatkan **kerusakan pada properti virtual Anda**. Melanjutkan penggunaan fungsi terkait dari perangkat lunak ini akan dianggap sebagai Anda mengakui dan menyetujui [Syarat Layanan](/id/statements/tos.md) kami.
:::

## Pengaturan Awal

- Klik "Luncurkan Game" dari menu di sebelah kiri untuk masuk ke fitur peluncur canggih.
  - Saat pertama kali digunakan, Anda akan diarahkan ke halaman pengaturan untuk mengatur lokasi file game.
  - **Harap pilih file eksekusi utama game (`YuanShen.exe` atau `GenshinImpact.exe`), bukan peluncur (`launcher.exe`).**
    - Contoh lokasi: `D:\Genshin Impact\Genshin Impact Game\GenshinImpact.exe`
  - Setelah lokasi terdeteksi, klik "Konfirmasi."
- Setelah konfigurasi, klik tombol "Luncurkan Game" di pojok kanan atas untuk memulai game.

## Peralihan Server

::: tip Pemberitahuan Izin
Fitur ini memerlukan hak administrator. Snap Hutao akan membuat folder `ServerCache` di direktori data untuk menyimpan file yang dibutuhkan untuk peralihan server.
:::

1. Buka halaman "Luncurkan Game".
2. Pilih server tujuan di bagian "Server".

**Server yang tersedia:**
| Opsi | Server |
| :---: | :---: |
| CN Default | Server Daratan Tiongkok |
| CN Official | Server Daratan Tiongkok, tidak ada perbedaan praktis |
| CN NoTapTap | Server Daratan Tiongkok (menonaktifkan login TapTap) |
| Global Default | Server global HoYoverse |
| Global Official | Server global HoYoverse, tidak ada perbedaan praktis |
| Global Epic | Server global HoYoverse (gerbang pembayaran Epic) |
| Global Google | Server global HoYoverse (gerbang pembayaran Google Pay) |

Klik tombol "Luncurkan". Snap Hutao akan mengunduh file yang relevan dari server resmi, menerapkannya, lalu memulai game.

## Penyimpanan Akun

::: tip
Fitur ini mencatat status login akun Genshin Impact Anda.
:::

1. Buka halaman "Luncurkan Game".
2. Klik "Deteksi Akun." Snap Hutao akan menyimpan status login game saat ini.
3. Beri nama akun tersebut di jendela yang muncul, lalu klik "Konfirmasi."
4. Ulangi proses ini untuk menyimpan beberapa akun.
5. Gunakan fitur peralihan akun untuk memilih akun yang sudah disimpan.
6. Status login dari server yang berbeda tidak saling mempengaruhi.

## Login dengan Akun HoYoLAB/MiYouShe

::: warning
Anda harus mengaktifkan fitur "Parameter Peluncuran" terlebih dahulu.
:::
Saat diaktifkan, Snap Hutao akan menggunakan akun HoYoLAB/MiYouShe yang sedang aktif untuk langsung login ke akun Genshin Impact yang terikat.

## Dukungan HDR Platform Windows

Fitur HDR bawaan Genshin Impact perlu diaktifkan melalui nilai kunci registri. Snap Hutao dapat mengaktifkan fitur ini untuk meningkatkan pengalaman visual.

## Parameter Peluncuran

Dalam fitur "Parameter Peluncuran", pengguna dapat mengatur opsi lanjutan berikut:

- **Layar Penuh Eksklusif**: `-window-mode exclusive`
  - Proses game berjalan dalam mode layar penuh eksklusif.
- **Layar Penuh**: `-screen-fullscreen`
- **Tanpa Bingkai**: `-popupwindow`
- **Mode Layar Sentuh**: `-platform_type CLOUD_THIRD_PARTY_MOBILE`
  - Mengaktifkan mode operasi layar sentuh (input keyboard dan mouse akan dinonaktifkan).
- **Pengaturan Resolusi**:
  - `-screen-width`: Mengatur lebar layar (misal, 1920).
  - `-screen-height`: Mengatur tinggi layar (misal, 1080).
- **Pemilihan Monitor**: `-monitor`
  - Menentukan monitor target untuk menjalankan game.
  - Jika tidak yakin, klik "Identifikasi Monitor" untuk petunjuk.

## Unduh Sumber Daya

Tab "Unduh Sumber Daya" menyediakan tautan real-time ke paket instalasi game dan paket inkremental untuk server daratan Tiongkok.
- Pengguna perlu menempatkan file yang diunduh di direktori yang sama dengan program game dan menyelesaikan pembaruan menggunakan peluncur resmi.

## Fitur Injeksi

::: caution
Penggunaan fitur injeksi yang tidak benar dapat menyebabkan kerusakan pada perangkat atau data game Anda. Dengan mengaktifkan ini, Anda setuju untuk menanggung risiko yang relevan sendiri.
:::

### Buka Kunci Batas Frame Rate

Menggunakan proyek [UnlockerIsland](https://github.com/DGP-Studio/UnlockerIsland), batas frame rate Genshin Impact dapat dibuka.
- **Cara Menggunakan:**
  1. Jalankan Snap Hutao dengan hak administrator.
  2. Di modul "Injeksi", atur frame rate target.
  3. Klik tombol "Luncurkan Game".

#### Faktor penyebab **kegagalan buka kunci batas frame rate**
1. Snap Hutao tidak tetap berjalan di latar belakang.
2. Opsi **Sinkronisasi Vertikal** tidak dinonaktifkan di dalam game.
3. Ada pengaturan "Frame Rate Maksimum" di driver kartu grafis.
4. Ada opsi "Mode Hemat Daya" yang tidak dinonaktifkan di driver kartu grafis.
5. Kinerja kartu grafis tidak mencukupi.
6. Pustaka MSVCRT tidak terinstal.

### Penyesuaian Bidang Pandang
Menyesuaikan bidang pandang kamera dan visibilitas kabut untuk pengalaman visual yang lebih baik.

### Pengaturan Bilah Kemajuan Tim
Menyesuaikan status tampilan bilah kemajuan saat membentuk tim. Hanya berlaku saat beralih tim dalam **kondisi normal**.

## Penautan Antar-Proses

### Statistik Durasi
Memerlukan instalasi dan konfigurasi [Starward](https://github.com/Scighost/Starward). Saat diaktifkan, Snap Hutao akan memanggil antarmuka Starward untuk mencatat durasi game.

### Penautan Better GI
Memerlukan instalasi dan konfigurasi [Better Genshin Impact](https://bgi.huiyadan.com/). Saat diaktifkan, Snap Hutao akan memanggil antarmukanya untuk mengaktifkan fitur otomatis berbasis teknologi visi komputer (OCR).

### Aktivitas Discord
Memerlukan instalasi dan konfigurasi [Discord](https://discord.com/). Saat diaktifkan, Snap Hutao akan menghasilkan status game real-time di profil Discord Anda.

## Pertanyaan Umum

### Bagaimana Cara Cepat Meluncurkan Game Melalui Snap Hutao
- Konfigurasikan fitur peluncur canggih dengan benar.
- Selama jendela utama Snap Hutao tidak ditutup, klik "Beranda -> Luncurkan Game" untuk memulai dengan cepat.
- Klik ikon Snap Hutao di bilah tugas (biasanya di area tersembunyi) dan pilih "Luncurkan Game."

![mulai-cepat](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Uu8QzN1g6du6MRp8h_!!1797064093.png_.webp)

### Mengapa Status Login Game Kedaluwarsa dan Fitur Ganti Akun Gagal?
- Faktor kunci dalam menyimpan status login:
  - **Lingkungan Jaringan**: Perubahan IP publik yang sering dapat membuat status login kedaluwarsa.
  - **ID Perangkat**: Mengganti kartu jaringan atau alamat MAC dapat membuat status login kedaluwarsa.
- Penyebab umum dan solusinya:
  1. Pastikan akun login dengan benar lalu masuk ke dalam game.
  2. Tutup game dan pastikan prosesnya benar-benar berhenti.
  3. Deteksi ulang akun untuk memastikan status login tercatat dengan benar.

### Kode Kesalahan `31-4302` Muncul Saat Memulai Game
Jika Anda mengalami kode kesalahan `31-4302`, Anda dapat menyelesaikan masalah ini dengan mengaktifkan opsi "Luncurkan Game -> Injeksi -> Biarkan Saya Masuk".

### Bagaimana Cara Memulihkan Game Setelah Peralihan Server Gagal?

::: info Penjelasan Prinsip Fungsi
Snap Hutao hanya mengunduh file yang diperlukan untuk peralihan server dari server resmi Genshin Impact. Jika sering gagal, kemungkinan koneksi jaringan Anda ke server tujuan buruk. Disarankan untuk memeriksa koneksi Anda.
:::
Jika peralihan server gagal karena keluar tak terduga atau masalah jaringan, klien game mungkin rusak dan file utamanya hilang. Anda bisa memulihkannya secara manual:

#### Memulihkan Program Utama Game secara Manual
1. **Temukan File Cadangan**:
    - Snap Hutao menyimpan file cadangan di direktori `%userprofile%/Documents/Hutao/ServerCache`.
    - File cadangan termasuk: `GenshinImpact.exe` dan `GenshinImpact_Data` (untuk server global), atau `YuanShen.exe` dan `YuanShen_Data` (untuk server CN).
2. **Periksa Direktori Game**:
    - Pastikan file yang benar ada di direktori game Anda.
3. **Pulihkan File secara Manual**:
    - Salin file dari direktori cadangan ke direktori utama game, timpa file yang ada.
    - Jika perlu, ganti nama file yang relevan (misalnya, `YuanShen_Data` menjadi `GenshinImpact_Data`).
4. **Luncurkan Game**:
    - Kembali ke "Luncurkan Game" di Snap Hutao dan coba lagi.
    - Jika pesan kesalahan hilang, Anda bisa melanjutkan peralihan server.

### Bagaimana Cara Mengembalikan File `config.ini`?
Jika file `config.ini` hilang, Anda bisa membuatnya secara manual dan mengisi konten berikut:

::: info
Ubah parameter `game_version` sesuai dengan versi game saat ini.
:::

#### Contoh Konten File Konfigurasi
::: tabs#game_config_samples
@tab Server CN Resmi
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
@tab Server Global Resmi
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
Simpan file ini ke subdirektori `/Genshin Impact Game/` untuk mengembalikan peluncuran normal.