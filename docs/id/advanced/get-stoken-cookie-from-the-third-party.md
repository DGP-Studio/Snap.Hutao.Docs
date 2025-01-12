---
categories: [FAQ, Alat Pihak Ketiga]
icon: iconfont icon-read
order: 7
comment: false
description: Beberapa alat pihak ketiga dapat membantu Anda mendapatkan cookie MiYouShe yang berisi nilai Stoken dan menggunakannya untuk Snap Hutao.
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/advanced/get-stoken-cookie-from-the-third-party.html&has_description=False
---

# Menggunakan Alat Pihak Ketiga untuk Mendapatkan Cookie dengan Stoken

::: important
Ini adalah terjemahan yang dibuat oleh model Google Gemini, dan kami menerima perbaikan melalui PR.
:::

::: warning

- Semua perangkat lunak, proyek sumber terbuka, dan sumber daya lain yang disebutkan dalam langkah-langkah di bawah ini berasal dari internet dan tidak terkait dengan DGP-Studio.
- Dokumen penjelasan ini hanya memberikan pendekatan solusi yang relevan, hanya untuk pembelajaran. Operasi khusus dan konsekuensi setelahnya tidak terkait dengan proyek ini.

:::

## Android

Pengguna Android dapat menggunakan proyek sumber terbuka GetToken untuk mendapatkan cookie yang memiliki bidang Stoken.

::: tip Proyek Sumber Terbuka GetToken

- GitHub: [HolographicHat/GetToken](https://github.com/HolographicHat/GetToken)

:::

- Rilis dari proyek GetToken akan mencakup dua file apk, keduanya memberikan hasil akhir yang sama. Pilih versi yang sesuai dengan perangkat Anda:
  - `app-release.apk` adalah plugin LSPosed yang memungkinkan pengguna menggunakan fungsi GetToken di aplikasi resmi MiYouShe.
    - Membutuhkan akses Root
  - `miyoushe-361-lspatched.apk` adalah aplikasi MiYouShe versi modifikasi yang sudah menyertakan fungsi GetToken.
    - Perhatikan, Anda perlu menghapus aplikasi MiYouShe resmi terlebih dahulu untuk menginstal aplikasi versi ini.
    - Metode ini tidak memerlukan Root
- Setelah mengaktifkan plugin atau menginstal aplikasi MiYouShe versi modifikasi, buka MiYouShe, ketuk "Saya" di bilah bawah, lalu masuk.
- Di sudut kanan atas, ketuk tombol berbentuk seperti 🔑.
- Pilih opsi `Stoken`.
- Ketuk "Salin Informasi Login" untuk mendapatkan `Cookie`.
- Kirim `Stoken` yang telah disalin ke komputer yang sudah terinstal Snap Hutao.
- Di Snap Hutao, klik "Login Akun - Input Manual".
- Masukkan `Cookie` yang diperoleh sebelumnya untuk menyelesaikan login.

## iOS

Pengguna iOS dapat mengunduh aplikasi perekam paket data `Stream` dari App Store untuk mendapatkan cookie yang memiliki bidang Stoken.

- Unduh [Stream](https://apps.apple.com/cn/app/stream/id1312141691) dari App Store.
- Lakukan analisis paket data untuk domain `api-takumi.mihoyo.com`.
- Temukan dan salin data yang memiliki `Stoken`.
  - Contoh formatnya: `stuid=****;stoken=v2****;mid=****;`
- Kirim `Stoken` yang telah disalin ke komputer yang sudah terinstal Snap Hutao.
- Di tempat login akun Snap Hutao, klik "Input Manual".
- Masukkan `Cookie` yang diperoleh sebelumnya untuk menyelesaikan login.

## macOS

Pengguna macOS dapat menggunakan aplikasi [TeyvatGuide](https://github.com/BTMuli/TeyvatGuide) untuk mendapatkan Cookie yang berisi field Stoken

- Unduh paket macOS TeyvatGuide yang sesuai dari [Github Release](https://github.com/BTMuli/TeyvatGuide/releases/latest)
- Ikuti [Dokumentasi TeyvatGuide](https://github.com/BTMuli/TeyvatGuide/blob/master/docs/macos-gatekeeper/README.md) untuk menginstal
- Login akun di halaman pengaturan melalui kode verifikasi SMS
- Pilih tombol salin cookie pada Badge pengguna
- Di tempat login akun Snap Hutao, klik "Input Manual".
- Tempel langsung untuk menyelesaikan login
