---
category:
  - FAQ
  - Alat Pihak Ketiga
icon: iconfont icon-read
order: 7
comment: false
description: Ada beberapa alat pihak ketiga yang bisa membantu Anda mendapatkan cookie dari komunitas miHoYo dengan nilai Stoken untuk digunakan di Snap Hutao.
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/en/advanced/get-stoken-cookie-from-the-third-party.html&has_description=False
---

# Mendapatkan Cookie dengan Stoken Menggunakan Alat Pihak Ketiga

::: warning
- Perangkat lunak, proyek open-source, dan sumber daya yang disebutkan di bawah ini berasal dari internet dan tidak berafiliasi dengan DGP-Studio.
- Panduan ini hanya bertujuan sebagai referensi. Operasi dan konsekuensi yang timbul menjadi tanggung jawab Anda sepenuhnya.
:::

## Android

Pengguna Android bisa menggunakan proyek open-source **GetToken** untuk mendapatkan cookie yang berisi Stoken.

::: tip Proyek Open-Source GetToken
- GitHub: [HolographicHat/GetToken](https://github.com/HolographicHat/GetToken)
:::

- Rilis proyek GetToken menyertakan dua jenis file APK. Pilih salah satu:
  - `app-release.apk` adalah plugin LSPosed yang menambahkan fungsi GetToken ke aplikasi resmi HoYoLAB/MiYouShe.
  - File APK yang berakhiran `lspatched` adalah aplikasi HoYoLAB/MiYouShe yang sudah dimodifikasi dengan fungsi GetToken.
    - Anda harus menghapus aplikasi resmi sebelum menginstal versi ini.
- Setelah terinstal, buka aplikasi HoYoLAB/MiYouShe, login, dan masuk ke halaman profil ("Me").
- Klik ikon 🔑 di pojok kanan atas.
- Centang opsi `Stoken`.
- Klik `Copy Login Information`.
- Kirim `Cookie` yang telah disalin ke komputer Anda.
- Di Snap Hutao, pilih "Login Akun" -> "Manual Input", lalu tempelkan `Cookie` tersebut.

## iOS

Pengguna iOS bisa mengunduh aplikasi *packet capture* seperti **Stream** dari App Store untuk mendapatkan cookie.

- Unduh [Stream](https://apps.apple.com/cn/app/stream/id1312141691) dari App Store.
- Jalankan *packet capture* pada domain `api-takumi.mihoyo.com`.
- Cari dan salin data yang berisi `Stoken`.
  - Formatnya akan seperti: `stuid=****;stoken=v2****;mid=****;`
- Kirim `Cookie` yang disalin ke komputer Anda.
- Gunakan `Cookie` tersebut untuk login manual di Snap Hutao.