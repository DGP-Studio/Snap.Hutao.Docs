---
headerDepth: 2
icon: iconfont icon-warn
category: [FAQ]
order: 2
comment: false
---

# Kesalahan Umum Program

Dokumen ini mencakup solusi untuk **kesalahan klien yang dapat diprediksi**

## RuntimeEnvironmentException

- Exception: `RuntimeEnvironmentException`
  - Hint: `Tidak dapat menyetel kunci registri tanpa mengaktifkan Path panjang`
- Sumber masalah: Batas jalur panjang Windows diatur secara default menjadi terbatas pada 256 karakter
- Solusi: Unduh [EnableLongPaths.zip](https://d.hut.ao/d/tools/EnableLongPaths.zip), ekstrak, lalu jalankan berkas `.reg`

## Kode Return: -10001

- Kesalahan ini berasal langsung dari MiHoYo BBS, dengan petunjuk:
  - `Return Code: -10001`
  - `Return Code: -100`
- Sumber masalah
  1. Cookie kedaluwarsa
  2. Kesalahan jaringan
  3. Waktu sistem tidak akurat
- Solusi
  1. Di panel akun, jalankan `Refresh Cookies`
  2. Hapus akun Anda dan tambahkan kembali
  3. Sinkronkan waktu sistem Anda

## Kode Return: 1034 Verifikasi Gagal

- Jika Snap Hutao mengembalikan kode status `1034` dan mengindikasikan kegagalan verifikasi (biasanya selama operasi Catatan Langsung),
  itu berarti operasi diblokir oleh sistem anti-bot MiHoYo BBS
- Solusi:
  - Masuk ke `Catatan Realtime`
  - Klik tombol `Verify Current User and Role`
  - Ikuti instruksi di MiHoYo BBS untuk melakukan verifikasi
  - Setelah menyelesaikan proses verifikasi, klik `Selesai` untuk menutup jendela verifikasi
  - Sekarang, akun seharusnya kembali normal; Jika tidak, ulangi langkah di atas

::: tip

Jika peringatan risiko terlalu sering, atau verifikasi tidak dapat dipicu sama sekali, ini berarti risiko akun Anda terlalu tinggi, silakan ubah kata sandi, sehingga status login simultan dari beberapa perangkat akan diatur ulang

:::

::: warning

- Anda hampir tidak dapat melewati verifikasi yang tidak terlihat saat akun Anda **login pada alat Genshin lain yang jarak jauh** atau
  **login di beberapa perangkat**. Ini adalah desain keamanan dari MiHoYo BBS, dan tidak dapat dilewati
- Jika Anda menggunakan **beberapa akun MiHoYo BBS di perangkat Anda**, **penggunaan sering dengan API MiHoYo BBS** akan
  mengakibatkan alamat IP Anda diblokir untuk jangka waktu tertentu (biasanya tidak lebih dari 24 jam). Ini adalah desain
  keamanan dari MiHoYo BBS, dan tidak dapat dilewati

:::

## HttpRequestException Metadata Download Failed

### 403 (Terlarang) / 404 (Tidak Ditemukan)

Solusi: Perbarui Snap Hutao Anda ke versi terbaru

### 502 (Gerbang Buruk)

> Masalah Terkait: [https://github.com/DGP-Studio/Snap.Hutao/issues/100](https://github.com/DGP-Studio/Snap.Hutao/issues/100)

Exception HTTP ini terjadi ketika Snap Hutao gagal mengambil sumber daya remote (biasanya gambar statis dan konfigurasi)

![HttpRequestException](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Tb2RUm1g6du5YeNuy_!!1797064093.jpg)

Jika Anda menggunakan perangkat lunak proxy, Anda mungkin perlu mematikannya atau menggunakan proxy mode TUN;
jika tidak, Anda perlu menggunakan [Utilitas Batasan Loopback Kontainer APP Windows 8](https://www.telerik.com/fiddler/add-ons) untuk menghapus [batasan loopback aplikasi Windows APP](https://learn.microsoft.com/zh-CN/windows/iot-core/develop-your-app/loopback).

Anda juga dapat menjalankan skrip PowerShell berikut untuk menghapus semua batasan loopback kontainer

```powershell
FOR /F "tokens=11 delims=\" %p IN ('REG QUERY "HKCU\Software\Classes\Local Settings\Software\Microsoft\Windows\CurrentVersion\AppContainer\Mappings"') DO CheckNetIsolation.exe LoopbackExempt -a -p=%p
```

## Kesalahan Menemukan Modul yang Diperlukan

Ketika pengguna meluncurkan game dengan fitur `unlock frame-rate limit`, game mungkin akan gagal diluncurkan dengan munculnya kesalahan berikut:

1. Kesalahan menemukan modul yang diperlukan: tidak dapat membaca modul apa pun, driver perlindungan mungkin telah dimuat
2. Kesalahan menemukan modul yang diperlukan: timeout

Masalah ini hanya terjadi ketika modul anti-cheat Genshin Impact mulai lebih awal daripada modul `frame-rate-unlocker`.
Ketika kesalahan ini terjadi, Snap Hutao akan keluar dari proses game, dan Anda dapat luncurkan ulang gamenya.
