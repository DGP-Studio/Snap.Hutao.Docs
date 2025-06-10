---
headerDepth: 2
category: [Feature, Tutorial]
tag: [MiYouShe, HoYoLAB, Multi account, check-in]
order: 14
comment: false
description: Fitur Panel Multi-akun di Snap Hutao memungkinkan pengguna untuk login ke beberapa akun MiHoYo BBS dan beralih di antara mereka dengan bebas, memungkinkan penggunaan berbagai fungsi di dalam alat dengan akun yang berbeda.
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/en/features/mhy-account-switch.html
---

# Peralihan Akun MiHoYo BBS

::: tip
Snap Hutao mendukung akun dari versi daratan Tiongkok forum MiHoYo, **MiYouShe**, dan versi internasional, **HoYoLAB**. HoYoLAB memblokir koneksi jaringan dari daratan Tiongkok secara default, dan Snap Hutao tidak dapat melewati batasan ini sendiri.

- Peralihan akun yang dijelaskan dalam dokumen ini merujuk pada **akun MiYouShe / HoYoLAB** yang digunakan untuk memperoleh data game, bukan **akun Genshin Impact dalam game**.
- Sebelum menggunakan fitur ini, Anda perlu login ke akun Anda menggunakan aplikasi MiYouShe resmi untuk menginisialisasi fungsi MiYouShe Anda.
  - Jika nama akun yang login ke Snap Hutao dalam format "user_123456789", mungkin belum diinisialisasi.

:::

![Contoh Manajemen Multi-Akun](https://img.alicdn.com/imgextra/i4/1797064093/O1CN01ZhnkRl1g6e0tz18y9_!!1797064093.png.png_.webp)

Anda dapat menemukan menu akun di sudut kiri bawah antarmuka program utama, di atas tombol pengaturan, untuk mengelola akun MiYouShe yang telah Anda login di Snap Hutao. Di panel pop-up, Anda dapat menambahkan akun MiYouShe atau HoYoLAB. Metode loginnya serupa:

:::: tabs

@tab Login Kode Verifikasi Telepon MiYouShe

::: warning
Pastikan akun MiYouShe terikat dengan akun server domestik.
:::

1. Klik tombol "Kode Verifikasi Telepon", masukkan nomor telepon Anda, dan kirim kode verifikasi.
2. Masukkan kode verifikasi dan konfirmasi. Tunggu sejenak hingga akun ditambahkan.

@tab Login Kode QR Pindai MiYouShe

::: warning
Pastikan akun MiYouShe terikat dengan akun server domestik.
:::

1. Klik tombol "Pindai Kode QR" dan tunggu hingga kode QR dimuat.
2. Gunakan aplikasi MiYouShe untuk memindai kode QR dan konfirmasi login.
3. Tunggu sejenak, dan Snap Hutao akan menambahkan akun tersebut.

@tab Login Kata Sandi HoYoLAB

::: warning
Pastikan akun HoYoLAB terikat dengan akun server internasional.
:::

1. Klik tombol "Login Kata Sandi", masukkan kata sandi akun Anda, dan konfirmasi.
2. Tunggu sejenak, dan akun akan ditambahkan.

@tab Login Akun Media Sosial HoYoLAB

Metode ini bergantung pada komponen runtime WebView2.

::: warning
HoYoLAB memblokir koneksi jaringan dari daratan Tiongkok secara default.
:::

1. Klik tombol "Login Pihak Ketiga" dan login melalui WebView2.
2. Tunggu sejenak, dan akun akan ditambahkan.

@tab Login Cookie

::: warning
Harap simpan informasi Cookie Anda dengan aman untuk menghindari risiko akun.
:::

Login dengan memasukkan Cookie SToken secara manual.

1. Klik ikon aplikasi target dan pilih "Input Manual."
2. Masukkan Cookie yang valid dan konfirmasi. Tunggu sejenak, dan akun akan ditambahkan.
   ::::

- Setelah menyelesaikan ini, Anda dapat beralih antara akun MiYouShe yang sudah login di panel manajemen akun.
  - Setelah menambahkan akun MiYouShe baru, Anda perlu mengklik secara manual pada akun yang baru login di fungsi peralihan akun di sudut kiri bawah antarmuka utama untuk mengaturnya sebagai akun aktif.
  - Anda dapat menyalin Cookie akun yang sesuai atau menghapus akun dari Snap Hutao di menu manajemen akun.
  - Saat program tidak berjalan dalam mode administrator, Anda dapat menyeret dan melepaskan untuk mengurutkan akun.
  - Setelah memilih akun yang sudah login, Anda dapat:
    - Klik tombol "Segarkan Cookie" untuk memperbarui Cookie yang saat ini disimpan.
    - Klik tombol "Check-In" untuk melakukan check-in forum MiHoYo. Untuk akun MiYouShe, Anda perlu menyelesaikan status kontrol risiko terlebih dahulu agar berhasil melakukan check-in.

::: info Tips Keamanan

- `SToken` adalah bidang Cookie yang sensitif terhadap keamanan, dan Anda **tidak boleh** menyimpan Cookie yang berisi bidang `SToken` di cloud atau perangkat lain di mana keamanan data tidak dapat dijamin.
- Cookie yang diperoleh dari Snap Hutao berisi bidang ini. Harap pertimbangkan dengan cermat apakah akan memberikan bidang `SToken` kepada pihak penerima.
- **Saat Anda login ke MiYouShe melalui kata sandi atau Cookie di Snap Hutao, data Anda hanya diproses oleh server MiYouShe dan Snap Hutao lokal, dan tidak melewati layanan pihak ketiga mana pun, termasuk server Snap Hutao.**

:::

## Masalah Umum

### Mengapa status login akun MiYouShe sering kedaluwarsa, dan akun yang ditambahkan menghilang?

- Kami mempertahankan status login dengan menyimpan Cookie MiYouShe akun.
- Namun, saat pengguna **keluar dari akun** di browser atau di perangkat lain, Cookie yang mempertahankan status login akan **kedaluwarsa**.
- Ini akan menyebabkan akun MiYouShe di Snap Hutao dihapus secara otomatis setelah startup.
- Situasi ini juga dapat terjadi karena masalah koneksi jaringan yang mencegah validasi Cookie. Oleh karena itu, harap prioritaskan memulai ulang Snap Hutao jika ini terjadi.
- Sejak Oktober 2022, MiYouShe telah sangat meningkatkan kemungkinan akun ditandai sebagai berisiko. Saat [akun berisiko](../advanced/exceptions.md#status1034-verifikasi-gagal), Cookie mungkin juga tidak dikenali sebagai valid.
- Sejak versi 1.4.15, Anda dapat menyegarkan status login dengan menyegarkan Cookie di panel akun.