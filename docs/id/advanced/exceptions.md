---
headerDepth: 2
icon: iconfont icon-warn
category: [FAQ]
order: 2
comment: false
description: Snap Hutao menggunakan kode galat tertentu untuk menunjukkan masalah spesifik. Jika Anda menemui galat dan memiliki kodenya, coba cari solusinya di halaman ini.
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/en/advanced/exceptions.html&has_description=False
---

# Solusi untuk Kesalahan Umum

Dokumen ini berisi daftar masalah yang sering terjadi saat menggunakan Snap Hutao beserta cara mengatasinya.

---

## **Kode Kesalahan: 2002**

- **Sumber**: HoYoLAB
- **Penyebab**: Akun HoYoLAB/MiYouShe Anda belum diinisialisasi (belum punya profil komunitas).
- **Solusi**:
  - Akun MiYouShe: Login ke aplikasi MiYouShe, lalu atur nama panggilan (username) komunitas Anda.
  - Akun HoYoLAB: Login ke situs atau aplikasi HoYoLAB, lalu atur nama panggilan (username) komunitas Anda.

## **Kode Kesalahan: -10001**

- **Sumber**: HoYoLAB (termasuk `Return Code: -10001` dan `Return Code: -100`)
- **Penyebab**:
  1. `Cookie` login Anda sudah tidak valid (kedaluwarsa) atau jaringan bermasalah.
  2. Pengaturan tanggal dan waktu di komputer Anda salah.
- **Solusi**:
  1. Di Snap Hutao, buka panel akun dan klik "Refresh Cookie".
  2. Jika tidak berhasil, hapus akun dari Snap Hutao lalu login kembali.
  3. Aktifkan sinkronisasi waktu otomatis di pengaturan Windows dan segera sinkronkan.

## **Status: 1034 Verifikasi Gagal**

- **Penyebab**: Fitur Catatan Real-time diblokir oleh sistem anti-bot HoYoLAB.
- **Solusi**:
  1. Buka fitur "Catatan Real-time".
  2. Klik tombol "Verifikasi Pengguna dan Karakter Saat Ini" di pojok kanan atas.
  3. Selesaikan verifikasi (biasanya captcha) yang muncul.
  4. Jika masalah berlanjut, ulangi langkah-langkah di atas.

::: warning Catatan
1. Mengubah kata sandi dapat membuat status login perangkat Anda direset.
2. Jika ada banyak bot atau perangkat yang sering mengakses data, sistem keamanan HoYoLAB bisa terpicu. Hal ini untuk sementara tidak bisa dihindari.
:::

## **HttpRequestException Gagal Mengunduh Metadata**

### **ConnectionError**
- **Penyebab**: Gagal terhubung ke server Snap Hutao.
- **Solusi**: Periksa pengaturan proxy Anda atau ikuti panduan [Jaringan Loopback](loopback.md).

### **403 / 404 / 418**
- **Solusi**: Masalah ini biasanya terjadi pada versi lama. Perbarui ke [versi terbaru](../quick-start.md#全新安装).

### **502**
- **Penyebab**: Gagal terhubung ke server Snap Hutao (kemungkinan ada gangguan di server).
- **Solusi**: Periksa koneksi internet Anda atau hubungi tim pengembang.

## **`653366069` Request Exception**

- **Penyebab**: Tidak dapat terhubung ke server MiYouShe / HoYoLAB.
- **Solusi**:
  - Abaikan jika hanya terjadi sesekali.
  - Jika terus terjadi, periksa koneksi internet Anda.
  - Pastikan Anda sudah mengikuti panduan [Jaringan Loopback](loopback.md).

## **Gagal Mengunduh Sumber Daya**

Kegagalan mengunduh beberapa sumber daya statis tidak akan terlalu memengaruhi penggunaan; aplikasi akan otomatis mencoba lagi saat dibutuhkan.

### **`Received an unexpected EOF or 0 bytes from the transport stream.`**
- **Penyebab**: Ada batasan unduhan atau koneksi internet tidak stabil.
- **Solusi**: Tutup Snap Hutao dan coba lagi nanti, atau ganti koneksi internet.

## **Masalah Saat Mencari Modul yang Diperlukan**

- **Pesan Galat**:
  1. Tidak dapat membaca modul apa pun, mungkin driver proteksi sudah berjalan.
  2. Waktu habis saat mencari modul.
- **Solusi**: Snap Hutao akan menutup proses game; pengguna bisa mencoba menjalankannya lagi.

## **Instalasi Aplikasi Gagal, Pesan Galat: Internal Error 0x80073D05**

- **Penyebab**: Ada sisa file dari proses uninstall sebelumnya yang tidak terhapus bersih.
- **Solusi**:
  1. Buka alamat `%appdata%/../Local/Packages` di File Explorer.
  2. Hapus folder `60568DGPStudio.SnapHutao_wbnnev551gwxy` (gunakan `NSudo_LG` jika terkendala izin akses).

## **Muncul Pesan 0x8007007E atau Tidak Dapat Menemukan File/Modul**

- **Penyebab**: Komponen `MSVC runtime library` tidak terinstal.
- **Solusi**: Instal versi terbaru [MSVC runtime library (x64)](https://aka.ms/vs/17/release/vc_redist.x64.exe) dari situs resmi Microsoft.