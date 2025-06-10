---
headerDepth: 2
category: [Feature, Tutorial]
tag: [Sprial Abyss, Hutao Database, Spiral Abyss Statistics]
order: 9
comment: false
description: Fitur Database Hutao di Snap Hutao membantu pemain mengarsipkan dan melihat data tantangan Spiral Abyss, menyediakan analisis statistik komprehensif, dan memungkinkan pemain untuk berkontribusi data.
---

# Database Hutao / Statistik Abyss

Snap Hutao menyediakan dua fungsi utama terkait statistik tantangan Spiral Abyss:

- **Detail Jadwal**: Membantu pemain menyimpan data setiap periode tantangan Spiral Abyss untuk arsip pribadi dan analisis statistik.
- **Statistik Saat Ini**: Menampilkan data Spiral Abyss dari semua pemain yang mengunggahnya ke Database Hutao, memberikan referensi penggunaan karakter dan tim.
  - "Statistik Saat Ini" sangat bergantung pada data "Detail Jadwal" yang dikirimkan oleh para pemain.

::: tabs
@tab Detail Jadwal
![detail-catatan-pribadi](https://img.alicdn.com/imgextra/i4/1797064093/O1CN01ykD0CZ1g6e0sAQMn1_!!1797064093.png_.webp)
@tab Tingkat Penggunaan Karakter
![tingkat-penggunaan-karakter](https://img.alicdn.com/imgextra/i1/1797064093/O1CN01dvdsCG1g6e0xyDPo5_!!1797064093.png_.webp)
@tab Tingkat Kemunculan Karakter
![tingkat-kemunculan-n-penggunaan-karakter](https://img.alicdn.com/imgextra/i2/1797064093/O1CN01Pdv5w01g6e0u1ewov_!!1797064093.png_.webp)
@tab Jumlah Kemunculan Tim
![hutaoapi](https://img.alicdn.com/imgextra/i2/1797064093/O1CN01k1W4tw1g6e0wOyjdf_!!1797064093.png_.webp)
@tab Tingkat Kepemilikan Karakter
![tingkat-kepemilikan-karakter](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01bQvukt1g6e0uuU2Fh_!!1797064093.png_.webp)
:::

## Melihat Data Abyss

::: warning Batasan Lingkup Data
Semua perhitungan didasarkan pada **data pemain yang diunggah ke Database Hutao** dan mungkin tidak mewakili data rata-rata semua pemain Genshin Impact. Gunakan hanya sebagai referensi.
:::

::: info Siklus Penyegaran Data
1.  Data statistik Spiral Abyss (tingkat penggunaan, kemunculan, dll.) diperbarui secara otomatis pada pukul 4 pagi tanggal 1 dan 16 setiap bulan, sesuai zona waktu server akun.
2.  Jika pengguna tidak mengunggah ulang data dalam 30 hari, catatan kepemilikan karakternya akan dihapus dari statistik.
:::

- Klik "Spiral Abyss" dari **menu di sebelah kiri** dan pilih tab "Statistik Saat Ini".
- Lihat Data:
  - **Tingkat Penggunaan Karakter**:
    - Rumus: Jumlah kemunculan karakter di lantai saat ini[^pertama] / Jumlah total catatan pemain yang memiliki karakter tersebut di lantai itu.
  - **Tingkat Kemunculan Karakter**:
    - Rumus: Jumlah kemunculan karakter di lantai saat ini[^pertama-2] / Jumlah total catatan di lantai saat ini.
  - **Tingkat Kepemilikan Karakter**:
    - Rumus: Jumlah pemain yang memiliki karakter[^ketiga] / Jumlah total pemain yang mengunggah data.
  - **Jumlah Kemunculan Tim**: Peringkat kombinasi tim berdasarkan jumlah kemunculannya.

## Mengunggah Data Spiral Abyss

### Menggunakan Klien Snap Hutao

::: important Hadiah Keistimewaan Snap Hutao Cloud
Setelah berhasil mengirimkan data untuk pertama kalinya setiap periode, Anda akan menerima hadiah "Layanan Cadangan Riwayat Gacha" selama 3 hari (bahkan jika Anda belum menyelesaikan Lantai 12).
:::

1. Klik "Spiral Abyss" dari **menu di sebelah kiri**.
2. Klik "Segarkan Data" di pojok kanan atas untuk memastikan data Spiral Abyss Anda yang terbaru telah diambil.
3. Klik tombol "Unggah Data" untuk mengirimkan data.

- Proses unggah mungkin memakan waktu beberapa detik. Pesan sukses akan ditampilkan setelah selesai.

### Menggunakan Browser

::: info
Metode ini tidak berlaku untuk HoYoLAB.
:::

1. Buka tautan [skrip JavaScript](/upload-abyss-data.js) dan salin kodenya.
2. Buat bookmark baru di browser Anda:
   - Masukkan nama yang sesuai.
   - Tempel kode yang disalin ke URL bookmark.
     ![tambah-bookmark](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01p0KOqU1g6dvfDQO6e_!!1797064093.png_.webp)
3. Buka MiYouShe dan tunggu halaman dimuat, lalu klik bookmark.
4. Konfirmasikan prompt unggah untuk menyelesaikan unggahan.

## Berbagi Data

Snap Hutao bersama-sama memelihara Database Hutao dengan pengembang lain. Pengguna dapat melihat statistik Spiral Abyss dan mengunggah data di beberapa aplikasi. Saat ini, aplikasi yang berkolaborasi meliputi:

<div class="vp-card-container">

```component VPCard
title: Miao-Plugin for Yunzai-Bot
desc: QQ Robot Miao-Plugin
logo: /images/202312/miao-plugin-logo.webp
link: https://github.com/yoimiya-kokomi/miao-plugin/tree/master
```

```component VPCard
title: Genshin Pizza Helper
desc: Genshin Impact tool for MacOS/iOS
logo: /images/202312/genshin-pizza-helper-logo.webp
link: https://apps.apple.com/cn/app/%E6%8A%AB%E8%90%A8%E5%B0%8F%E5%8A%A9%E6%89%8B/id1635319193
```

```component VPCard
title: Ysin
desc: WeChat mini-program Ysin
logo: /images/202312/ysin-logo.png
link: https://yuanshen.xin/
```

</div>

[^pertama]: Jika karakter yang sama muncul beberapa kali di dalam ruang yang berbeda di lantai saat ini, mereka hanya dihitung sekali.

[^pertama-2]: Jika karakter yang sama muncul beberapa kali di dalam ruang yang berbeda di lantai saat ini, mereka hanya dihitung sekali.

[^ketiga]: Memiliki karakter dihitung sebagai kepemilikan, bahkan jika mereka tidak muncul di Spiral Abyss. Mengunggah catatan menghitung pemain dalam statistik pemain total.