---
headerDepth: 2
icon: iconfont icon-warn
category: [FAQ]
order: 2
comment: false
description: Snap Hutao akan menggunakan kode kesalahan tertentu untuk menunjukkan kesalahan tertentu. Jika Anda mengalami kesalahan program selama penggunaan dan memiliki kode kesalahan, Anda dapat mencoba mencarinya di halaman ini.
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/advanced/exceptions.html&has_description=False
---

# Pengecualian Program Umum

Dokumen berikut mencantumkan masalah umum yang mungkin terjadi selama penggunaan Snap Hutao dan solusi yang sesuai.

::: important
Ini adalah terjemahan yang dibuat oleh model Google Gemini, dan kami menerima perbaikan melalui PR.
:::

---

## **Kode Return: 2002**

- **Sumber**: Informasi yang dikembalikan oleh MiYouShe
- **Penyebab Masalah**: Akun MiHoYo BBS belum diinisialisasi
- **Solusi**:
  - Akun MiYouShe: Masuk ke akun Anda menggunakan aplikasi seluler resmi MiYouShe dan atur nama pengguna komunitas untuk menginisialisasi.
  - Akun HoYoLAB: Masuk ke akun Anda menggunakan aplikasi seluler resmi atau versi web HoYoLAB dan atur nama pengguna komunitas untuk menginisialisasi.

## **Kode Return: -10001**

- **Sumber**: Informasi yang dikembalikan oleh MiYouShe, termasuk `Return Code: -10001` dan `Return Code: -100`
- **Penyebab Masalah**:
  1. Cookie kedaluwarsa atau jaringan tidak normal
  2. Waktu sistem salah
- **Solusi**:
  1. Di panel akun, klik "Segarkan Cookie".
  2. Hapus akun lalu tambahkan kembali.
  3. Di pengaturan sistem, aktifkan sinkronisasi waktu otomatis dan sinkronkan segera.

## **Status: 1034 Verifikasi Gagal**

- **Penyebab Masalah**: Fitur Catatan Real-time diblokir oleh sistem verifikasi MiYouShe.
- **Solusi**:
  1. Masuk ke fitur "Catatan Real-time".
  2. Klik tombol "Verifikasi Pengguna dan Karakter Saat Ini" di sudut kanan atas.
  3. Ikuti petunjuk untuk menyelesaikan verifikasi.
  4. Jika masalah masih ada, ulangi langkah di atas.

::: warning Perhatian

1. Mengubah kata sandi dapat mengatur ulang status login perangkat.
2. Jika beberapa Bot atau perangkat terikat sering mengakses data MiYouShe, batasan keamanan MiYouShe dapat dipicu, yang untuk sementara tidak dapat dihindari.
   :::

## **HttpRequestException Unduhan File Validasi Metadata Gagal**

### **ConnectionError**

- **Penyebab**: Koneksi server Snap Hutao gagal.
- **Solusi**: Periksa proxy jaringan atau apakah Anda telah menghapus [batasan Loopback Kontainer Windows](loopback.md).

### **403 / 404 / 418**

- **Solusi**: Perbarui ke [versi terbaru](../quick-start.md#全新安装).

### **502**

- **Penyebab**: Koneksi server Snap Hutao gagal.
- **Solusi**: Periksa jaringan atau hubungi tim pengembangan.

## **`653366069` Permintaan Pengecualian**

- **Penyebab**: Tidak dapat terhubung ke server MiYouShe / HoYoLAB.
- **Solusi**:
  - Abaikan kesalahan sesekali.
  - Periksa koneksi jaringan jika kesalahan terus berlanjut.
  - Periksa apakah Anda telah menghapus [batasan Loopback Kontainer Windows](loopback.md).

## **Unduhan Sumber Daya Gagal**

- Kegagalan mengunduh beberapa sumber daya statis tidak akan memengaruhi penggunaan secara signifikan, dan klien akan secara otomatis mencoba lagi jika diperlukan.

### **`Received an unexpected EOF or 0 bytes from the transport stream.`**

- **Penyebab**: Batas unduhan atau fluktuasi jaringan.
- **Solusi**: Tutup Snap Hutao dan coba lagi nanti, atau ganti lingkungan jaringan.

## **Terjadi Masalah saat Mencari Modul yang Diperlukan**

- **Pesan kesalahan**:
  1. Tidak dapat membaca modul, mungkin ada masalah pemuatan driver proteksi.
  2. Pencarian modul habis waktu.
- **Solusi**: Snap Hutao akan menutup proses game, dan pengguna dapat mencoba memulai lagi.

## **Pemasangan Aplikasi Gagal, Pesan Kesalahan: Kesalahan Internal 0x80073D05**

- **Penyebab**: File sisa tidak dibersihkan setelah pencopotan pemasangan.
- **Solusi**:
  1. Buka `%appdata%/../Local/Packages`.
  2. Hapus folder `60568DGPStudio.SnapHutao_wbnnev551gwxy` (gunakan `NSudo_LG` jika izin tidak mencukupi).

## **Muncul 0x8007007E atau Tidak Dapat Menemukan File/Modul yang Ditentukan**

- **Penyebab**: Pustaka runtime MSVC hilang.
- **Solusi**: Instal versi terbaru [Pustaka runtime MSVC (x64)](https://aka.ms/vs/17/release/vc_redist.x64.exe).
