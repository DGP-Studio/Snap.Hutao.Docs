---
headerDepth: 0
category: [Fitur, Tutorial]
tag: [Catatan Langsung, Ekspedisi, Resin]
order: 6
comment: false
---

# Catatan Langsung

::: info

Fitur ini memerlukan Anda untuk masuk ke akun MiYouShe atau HoYoLab Anda di Snap Hutao,
Anda dapat memeriksa [MiHoYo BBS Account Switch](mhy-account-switch.html) untuk informasi lebih lanjut.

:::

![pelacakan-data-real-time](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01nh4t1T1g6dyI3Ikcn_!!1797064093.png_.webp)

## Tambah Peran

- Klik tombol `Tambah Peran`
- Pada menu pop-up, cari UID yang ingin Anda tambahkan, dan klik tombol tambah di sebelah kanannya
- Sekarang, Catatan Langsung karakter UID game Anda harus ditampilkan di halaman tersebut
  - Catatan Langsung ini diatur untuk diperbarui secara berkala
    - Anda dapat mengklik `Pengaturan Notifikasi` di kanan atas untuk mengelolanya
    - Jika Anda ingin melihat data pada saat ini, Anda dapat mengklik tombol `Refresh` untuk memperbarui data secara langsung
  - Jika Anda menerima peringatan seperti `Verifikasi gagal`, hal ini mungkin disebabkan oleh terlalu banyak akun yang ditambahkan, dan Anda dapat mencoba memperbaikinya sendiri dengan memperbarui cookie akun

## Verifikasi Pengguna dan Peran Saat Ini

Jika Anda menggunakan akun MiYouShe, kemungkinan besar akun Anda akan ditandai sebagai pengguna robot dan menyebabkan verifikasi anti-bot.
Dalam status ini, data Catatan Langsung tidak dapat diperbarui.

Anda dapat mengklik tombol `Verifikasi Pengguna dan Peran Saat Ini`, Snap Hutao akan menampilkan jendela verifikasi. Setelah menyelesaikan
verifikasi, maka akun Anda dapat digunakan untuk memperbarui data.

## Pengaturan Notifikasi Global

- Pada `Pengaturan Notifikasi` di kanan atas, Anda dapat mengubah pengaturan global Catatan Langsung, termasuk:
  - Aktifkan/Nonaktifkan pembaruan otomatis
  - Tingkat pembaruan
  - Pengaturan jangan ganggu
  - Notifikasi diprioritaskan
    - Ini mencegah notifikasi Snap Hutao ditutup secara otomatis
  - Webhook pengiriman data yang dapat disesuaikan
    - Snap Hutao memungkinkan pengguna untuk meneruskan data Catatan Langsung ke aplikasi lain untuk mengurangi permintaan akun ke API MiHoYo
    - Masukkan endpoint API HTTP pihak ketiga Anda di bidang pengaturan `URL Webhook Catatan Langsung`, dan Snap Hutao akan meneruskan data mentah melalui permintaan `POST`

## Pengaturan Independen untuk Akun

- Snap Hutao memungkinkan pengaturan berbeda pada setiap akun Catatan Langsung
- Sorot kursor di atas formulir akun Catatan Langsung yang perlu diatur
- Klik tombol pengaturan di atasnya, dan Anda dapat memodifikasi pengaturan ini:
  - Nilai ambang batas Resin asli
  - Nilai ambang batas Mata Uang Kerajaan
  - Notifikasi Pemutar Parametrik
  - Notifikasi Komisi Harian
  - Notifikasi Ekspedisi
  - Tampilkan di halaman utama (fitur segera hadir)
- Klik `Simpan` dan Anda dapat menyimpan pengaturan

## Hapus Akun Catatan Langsung Harian

- Sorot kursor di atas formulir akun Catatan Langsung yang perlu dihapus
- Klik tombol hapus di atasnya, dan Anda dapat menghapus akun yang sesuai
