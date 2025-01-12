---
headerDepth: 2
category: [Fitur, Tutorial]
tag: [Spiral Abyss, Basis Data Spiral Abyss, Analisis Spiral Abyss]
order: 9
comment: false
description: Fitur Basis Data Hutao yang ada di dalam Snap Hutao membantu pemain untuk mengarsipkan dan mencari data tantangan Spiral Abyss, menyediakan analisis statistik yang komprehensif, dan mendukung pemain untuk mengunggah data ke basis data.
---

# Basis Data Hutao / Statistik Abyss

Snap Hutao menawarkan dua fitur utama statistik tantangan Spiral Abyss:

- **Detail Periode**: Membantu pemain menyimpan data tantangan Spiral Abyss setiap periode, memfasilitasi peninjauan dan statistik data pribadi.
- **Statistik Periode Ini**: Menampilkan data Spiral Abyss pemain yang telah diunggah ke Basis Data Hutao, memberikan referensi penggunaan karakter dan tim untuk pemain.
  - "Statistik Periode Ini" bergantung pada data "Detail Periode" yang diserahkan oleh pemain.

::: tabs
@tab Detail Periode
![personal-record-details](https://img.alicdn.com/imgextra/i4/1797064093/O1CN01ykD0CZ1g6e0sAQMn1_!!1797064093.png_.webp)
@tab Tingkat Penggunaan Karakter
![character-usage-rate](https://img.alicdn.com/imgextra/i1/1797064093/O1CN01dvdsCG1g6e0xyDPo5_!!1797064093.png_.webp)
@tab Tingkat Penampilan Karakter
![character-held-n-usage-rate](https://img.alicdn.com/imgextra/i2/1797064093/O1CN01Pdv5w01g6e0u1ewov_!!1797064093.png_.webp)
@tab Jumlah Penampilan Tim
![hutaoapi](https://img.alicdn.com/imgextra/i2/1797064093/O1CN01k1W4tw1g6e0wOyjdf_!!1797064093.png_.webp)
@tab Tingkat Kepemilikan Karakter
![character-held-rate](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01bQvukt1g6e0uuU2Fh_!!1797064093.png_.webp)
:::

## Melihat Data Abyss

::: warning Batasan Lingkup Data
Semua perhitungan didasarkan pada **data pemain yang diunggah ke Basis Data Hutao**, dan mungkin tidak mewakili data rata-rata dari seluruh pemain Genshin Impact, hanya untuk referensi.
:::

::: info Siklus Pembaruan Data

1. Data statistik Spiral Abyss (tingkat penggunaan karakter, tingkat penampilan karakter, penampilan tim) akan diperbarui secara otomatis pada pukul 4 pagi setiap tanggal 1 dan 16 setiap bulan sesuai zona waktu server akun.
2. Jika pengguna tidak mengunggah data dalam 30 hari, catatan kepemilikan karakternya akan dihapus.
   :::

- Klik pada menu sidebar untuk masuk ke halaman "Spiral Abyss", lalu pilih tab "Statistik Periode Ini".
- Lihat data:
  - **Tingkat Penggunaan Karakter**:
    - Formula: Tingkat Penggunaan Karakter = Jumlah penampilan karakter di lantai saat ini[^first] / Jumlah total catatan pemain yang memiliki karakter tersebut di lantai tersebut.
  - **Tingkat Penampilan Karakter**:
    - Formula: Tingkat Penampilan Karakter = Jumlah penampilan karakter di lantai saat ini[^first-2] / Jumlah total catatan di lantai saat ini.
  - **Tingkat Kepemilikan Karakter**:
    - Formula: Tingkat Kepemilikan Karakter[^third] = Jumlah pemain yang memiliki karakter tersebut / Jumlah total pemain.
  - **Jumlah Penampilan Tim**: Menampilkan peringkat jumlah penampilan kombinasi tim.

## Mengunggah Data Spiral Abyss

### Menggunakan Klien Snap Hutao

::: important Hadiah Izin Hutao Cloud
Setelah berhasil menyerahkan data untuk pertama kalinya, Anda akan mendapatkan hadiah izin "Layanan Catatan Wish Hutao Cloud" selama 3 hari (bahkan jika Anda belum menyelesaikan Lantai 12).
:::

1. Klik pada menu sidebar untuk masuk ke halaman "Spiral Abyss".
2. Klik "Perbarui Data" di kanan atas untuk memastikan alat telah mendapatkan data Spiral Abyss pribadi terbaru.
3. Klik tombol "Unggah Data" untuk mengirimkan data.

- Proses pengunggahan mungkin membutuhkan beberapa detik, dan pesan sukses akan muncul setelah selesai.

### Menggunakan Browser

::: info
Metode ini tidak berlaku untuk HoYoLAB.
:::

1. Buka tautan [skrip JavaScript](/upload-abyss-data.js) dan salin kode.
2. Buat bookmark baru di browser Anda:
   - Isi nama yang sesuai.
   - Tempelkan kode yang disalin ke URL bookmark.
     ![add-bookmark](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01p0KOqU1g6dvfDQO6e_!!1797064093.png_.webp)
3. Buka MiYouShe dan tunggu hingga halaman selesai dimuat, lalu klik bookmark.
4. Konfirmasikan pesan pengunggahan dan selesaikan pengunggahan.

## Berbagi Data

Snap Hutao bekerja sama dengan pengembang lain untuk memelihara Basis Data Hutao. Pengguna dapat melihat data statistik Abyss dan mengunggah data mereka di beberapa aplikasi. Aplikasi yang bekerja sama saat ini meliputi:

<div class="vp-card-container">

```component VPCard
title: Miao-Plugin untuk Yunzai-Bot
desc: Plugin QQ robot Miao-Plugin
logo: /images/202312/miao-plugin-logo.webp
link: https://github.com/yoimiya-kokomi/miao-plugin/tree/master
```

```component VPCard
title: Asisten Pizza Genshin
desc: Alat Genshin Impact untuk MacOS/iOS
logo: /images/202312/genshin-pizza-helper-logo.webp
link: https://apps.apple.com/cn/app/%E6%8A%AB%E8%90%A8%E5%B0%8F%E5%8A%A9%E6%89%8B/id1635319193
```

```component VPCard
title: Ysin
desc: Program mini WeChat Ysin
logo: /images/202312/ysin-logo.png
link: https://yuanshen.xin/
```

</div>

[^first]: Jika karakter yang sama muncul beberapa kali di lantai yang sama tetapi di ruang yang berbeda, jumlah penampilan hanya dihitung sekali.

[^first-2]: Jika karakter yang sama muncul beberapa kali di lantai yang sama tetapi di ruang yang berbeda, jumlah penampilan hanya dihitung sekali.

[^third]:
    Memiliki karakter akan dihitung dalam status kepemilikan, bahkan jika tidak muncul di Spiral Abyss. Mengunggah catatan akan dihitung dalam statistik semua pemain.
    ::: important
    Ini adalah terjemahan yang dibuat oleh model Google Gemini, dan kami menerima perbaikan melalui PR.
    :::
