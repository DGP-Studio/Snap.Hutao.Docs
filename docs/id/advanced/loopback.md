---
headerDepth: 2
icon: iconfont icon-tool
category: [FAQ]
order: 3
description: Pengenalan Jaringan Loopback dan solusi untuk kegagalan proxy jaringan
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/advanced/loopback.html&has_description=False
---

::: important
Ini adalah terjemahan yang dibuat oleh model Google Gemini, dan kami menerima perbaikan melalui PR.
:::

# Jaringan Loopback

## Apa itu Jaringan Loopback

"Aplikasi Kontainer Appx" adalah jenis aplikasi yang dipromosikan oleh Microsoft, yang memiliki banyak keunggulan. Untuk memastikan efisiensi operasional, keamanan, stabilitas, dan keramahan pengguna yang tinggi, Microsoft memberlakukan serangkaian batasan pada aplikasi ini, salah satunya adalah "Jaringan Loopback".

Secara default, Windows **menonaktifkan Jaringan Loopback untuk semua aplikasi kontainer Appx Windows (termasuk Snap Hutao)**. Desain ini bertujuan untuk membatasi jangkauan akses jaringan aplikasi, sehingga hanya dapat memperoleh sumber daya yang dibutuhkan untuk beroperasi.

### Memahami Jaringan Loopback

Anda dapat memahami "Jaringan Loopback" sebagai "kotak" tempat aplikasi dimasukkan. "Kotak" ini mengisolasi lingkungan jaringan aplikasi dari lingkungan komputer lokal, hanya memungkinkan aplikasi berinteraksi dengan jaringan eksternal melalui lubang kecil.

Ketika lingkungan jaringan eksternal berubah (misalnya, mengaktifkan proxy jaringan atau akselerator game), lubang kecil tersebut dapat tersumbat, menyebabkan aplikasi di dalam kotak tidak dapat berkomunikasi dengan jaringan eksternal.

## Masalah yang Mungkin Timbul

- Setelah proxy diaktifkan, Snap Hutao tidak dapat mengakses jaringan.
- Beberapa fungsi terkait jaringan (seperti ekspor catatan Wish, penyegaran Catatan Real-time, dll.) tidak berfungsi.

## Solusi

### 1. Pengaturan di dalam Snap Hutao (Disarankan)

1. Buka Snap Hutao.
2. Klik "Pusat Umpan Balik" di menu kiri.
3. Di bilah kanan, temukan dan klik "Lepaskan Pembatasan Loopback".
4. Klik tombol "Konfirmasi" di jendela pop-up.

Tindakan ini akan melepaskan pembatasan Loopback, memungkinkan Snap Hutao menggunakan jaringan proxy dengan normal.

### 2. Pengaturan di Perangkat Lunak Proxy Jaringan

1. Aktifkan **Mode TUN** (jika perangkat lunak proxy jaringan Anda menyediakan opsi ini).
2. Hubungi penyedia layanan proxy jaringan Anda untuk mendapatkan dukungan teknis mengenai solusi masalah proxy jaringan untuk aplikasi kontainer Appx Windows, dan dapatkan solusi yang spesifik.

Dengan metode di atas, Anda dapat secara efektif mengatasi masalah kegagalan proxy jaringan yang disebabkan oleh pembatasan Loopback, sehingga Snap Hutao dapat berjalan normal di berbagai lingkungan jaringan.
