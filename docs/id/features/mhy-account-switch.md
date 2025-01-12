---
headerDepth: 2
category: [Fitur, Tutorial]
tag: [MiYouShe, HoYoLAB, Multi Akun, check-in]
order: 14
comment: false
description: Fitur panel multi-akun MiYouShe memungkinkan pengguna untuk masuk ke beberapa akun forum miHoYo di Snap Hutao dan beralih antar akun dengan bebas, untuk menggunakan berbagai fungsi dengan akun yang berbeda di dalam aplikasi.
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/features/mhy-account-switch.html
---

# Peralihan Multi Akun MiYouShe

::: important
Ini adalah terjemahan yang dibuat oleh model Google Gemini, dan kami menerima perbaikan melalui PR.
:::

::: tip
Snap Hutao mendukung akun forum miHoYo versi Tiongkok Daratan **MiYouShe** dan forum versi internasional **HoYoLAB**. HoYoLAB secara default memblokir koneksi jaringan dari Tiongkok Daratan, dan perangkat lunak Snap Hutao tidak dapat melewati batasan ini dengan sendirinya.

- Peralihan akun yang dijelaskan dalam dokumen ini mengacu pada **akun MiYouShe / HoYoLAB** yang digunakan untuk mendapatkan data game, bukan **akun dalam game** Genshin Impact.
- Sebelum menggunakan fitur ini, Anda perlu masuk ke akun Anda menggunakan aplikasi resmi MiYouShe untuk menginisialisasi fungsi MiYouShe Anda.
  - Jika format nama akun yang masuk di Snap Hutao adalah "user_123456789", kemungkinan akun tersebut belum diinisialisasi.

:::

![Contoh Manajemen Multi Akun](https://img.alicdn.com/imgextra/i4/1797064093/O1CN01ZhnkRl1g6e0tz18y9_!!1797064093.png.png_.webp)

Anda dapat menemukan menu akun di pojok kiri bawah antarmuka utama program, di atas tombol pengaturan, untuk mengelola akun MiYouShe yang masuk di Snap Hutao. Di panel yang muncul, Anda dapat menambahkan akun MiYouShe atau HoYoLAB. Metode untuk masuk ke akun tersebut serupa:

:::: tabs

@tab Masuk MiYouShe dengan Kode Verifikasi Ponsel

::: warning
Pastikan akun MiYouShe telah terikat dengan akun server domestik.
:::

1. Klik tombol "Kode Verifikasi Ponsel", isi nomor ponsel dan kirim kode verifikasi.
2. Isi kode verifikasi lalu konfirmasi, tunggu sebentar hingga akun ditambahkan.

@tab Masuk MiYouShe dengan Pemindaian Kode QR

::: warning
Pastikan akun MiYouShe telah terikat dengan akun server domestik.
:::

1. Klik tombol "Pemindaian Kode QR", tunggu hingga kode QR dimuat.
2. Pindai kode QR dengan Aplikasi MiYouShe dan konfirmasi login.
3. Tunggu sebentar, Snap Hutao akan menambahkan akun.

@tab Masuk HoYoLAB dengan Kata Sandi

::: warning
Pastikan akun HoYoLAB telah terikat dengan akun server internasional.
:::

1. Klik tombol "Masuk dengan Kata Sandi", isi nama akun dan kata sandi lalu konfirmasi.
2. Tunggu sebentar, akun akan ditambahkan.

@tab Masuk HoYoLAB dengan Akun Media Sosial

Metode ini bergantung pada komponen runtime WebView2.

::: warning
HoYoLAB secara default memblokir koneksi jaringan dari Tiongkok Daratan.
:::

1. Klik tombol "Login Pihak Ketiga" dan login melalui WebView2.
2. Tunggu sebentar, akun akan ditambahkan.

@tab Masuk dengan Cookie

::: warning
Harap simpan informasi Cookie dengan aman untuk menghindari risiko akun.
:::

Masuk dengan mengirimkan SToken secara manual.

1. Klik ikon aplikasi target dan pilih "Input Manual".
2. Masukkan Cookie yang valid dan konfirmasi, tunggu sebentar hingga akun ditambahkan.
   ::::

- Setelah selesai, Anda dapat beralih akun MiYouShe yang telah masuk di panel manajemen akun.
  - Setelah menambahkan akun MiYouShe baru, Anda perlu mengklik akun yang baru masuk secara manual di fungsi peralihan akun di kiri bawah antarmuka utama, untuk mengaturnya sebagai akun yang digunakan.
  - Anda dapat menyalin Cookie akun yang sesuai atau menghapus akun tersebut dari Snap Hutao di menu manajemen akun.
  - Saat program tidak berjalan dalam mode administrator, Anda dapat mengurutkan akun dengan cara menarik dan melepas.
  - Setelah memilih akun yang masuk, Anda dapat
    - Klik tombol Segarkan Cookie untuk memperbarui Cookie yang tersimpan saat ini.
    - Klik tombol check-in untuk menjalankan check-in forum miHoYo. Untuk akun MiYouShe, Anda perlu terlebih dahulu mengatasi status risiko kontrol sebelum check-in berhasil dijalankan.

::: info Tips Keamanan

- `SToken` adalah field Cookie yang sensitif terhadap keamanan, Anda **sebaiknya tidak** menyimpan Cookie yang mengandung field `SToken` di cloud atau perangkat lain yang keamanannya tidak dapat dijamin.
- Cookie yang disalin dari Snap Hutao berisi field ini, harap pertimbangkan dengan cermat apakah akan memberikan field `SToken` kepada pihak penerima Cookie.
- **Saat masuk ke MiYouShe dengan kata sandi atau Cookie di Snap Hutao, data Anda hanya diproses oleh server MiYouShe dan Snap Hutao lokal, tidak melalui layanan pihak ketiga mana pun, termasuk server Snap Hutao.**

:::

## Pertanyaan Umum

### Mengapa status login akun MiYouShe sering tidak valid, dan akun yang ditambahkan menghilang?

- Kami mempertahankan status login dengan menyimpan Cookie MiYouShe akun.
- Namun, ketika pengguna **keluar dari akun** di browser atau perangkat lain, Cookie yang mempertahankan status login akan **menjadi tidak valid**.
- Ini akan menyebabkan akun MiYouShe di Snap Hutao otomatis dihapus setelah dimulai.
- Situasi ini juga dapat terjadi karena masalah koneksi jaringan yang menyebabkan kegagalan pengecekan validitas Cookie, oleh karena itu setelah terjadi situasi ini, harap coba mulai ulang Snap Hutao terlebih dahulu.
- Sejak Oktober 2022, MiYouShe telah meningkatkan probabilitas akun dianggap berisiko, [Akun berisiko](../advanced/exceptions.md#status1034-verifikasi-gagal) juga dapat menyebabkan Cookie tidak dapat dikenali sebagai status yang valid.
- Sejak versi 1.4.15, Anda dapat menyegarkan status login dengan menyegarkan Cookie di panel akun.
