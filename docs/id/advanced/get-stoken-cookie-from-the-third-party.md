---
category:
  - FAQ
  - Alat Pihak Ketiga
icon: iconfont icon-read
order: 7
comment: false
---

# Menggunakan Alat Pihak Ketiga untuk Mendapatkan Cookie dengan Stoken

::: warning

- Semua sumber daya, perangkat lunak, proyek open-source, dan sejenisnya yang disebutkan dalam langkah-langkah di bawah ini berasal dari internet dan tidak terkait dengan DGP-Studio.
- Dokumen ini hanya menyediakan pendekatan solusi yang relevan, untuk pembelajaran saja. Operasi khusus dan konsekuensi setelahnya tidak berhubungan dengan proyek ini.

:::

## Android

Pengguna Android dapat menggunakan proyek open-source GetToken untuk mendapatkan cookie yang memiliki bidang Stoken.

::: tip Proyek Open-Source GetToken

- GitHub: [HolographicHat/GetToken](https://github.com/HolographicHat/GetToken)

:::

- Rilis dari proyek GetToken akan mencakup dua file apk, keduanya memberikan hasil akhir yang sama. Pilih versi yang sesuai dengan perangkat Anda:
  - `app-release.apk` adalah plugin LSPosed yang memungkinkan pengguna menggunakan fungsi GetToken di komunitas resmi milik miHoYo.
  - Versi apk yang diakhiri dengan `lspatched` adalah versi aplikasi miHoYo yang telah dimodifikasi dan memiliki fitur GetToken.
    - Anda perlu menghapus aplikasi miHoYo resmi untuk menginstal versi aplikasi ini.
- Aktifkan plugin atau instal versi aplikasi miHoYo yang telah dimodifikasi, lalu buka aplikasi miHoYo tersebut. Pada bilah bawah, ketuk "Saya," lalu masuk dengan akun Anda.
- Di pojok kanan atas, ketuk ikon berbentuk seperti 🔑
- Pilih opsi `Stoken`
- Ketuk `Copy Login Information`
- Kirim Stoken yang telah disalin ke komputer yang telah terpasang Toolbox Hutao.
- Di tempat masuk akun Toolbox Hutao, ketuk `Manual Input`
- Masukkan cookie yang Anda peroleh sebelumnya, sekarang Anda bisa masuk.

## iOS

Pengguna iOS dapat mengunduh aplikasi perekam lalu lintas Stream dari App Store untuk mendapatkan cookie yang memiliki bidang Stoken.

- Unduh [Stream](https://apps.apple.com/cn/app/stream/id1312141691) dari App Store.
- Lakukan analisa `packet capture` untuk domain `api-takumi.mihoyo.com`
- Temukan dan salin data yang memiliki `Stoken`
  - Contoh formatnya: `stuid=****;stoken=v2****;mid=****;`
- Kirim Stoken yang telah Anda salin ke komputer yang telah terpasang Toolbox Hutao.
- Di tempat masuk akun Toolbox Hutao, ketuk `Manual Input`
- Masukkan cookie yang Anda peroleh sebelumnya, sekarang Anda bisa masuk.
