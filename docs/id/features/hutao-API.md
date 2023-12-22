---
headerDepth: 0
category: [Fitur, Tutorial]
tag: [Spiral Abyss, Basis Data Spiral Abyss, Analisis Spiral Abyss]
order: 8
comment: false
---

# Basis Data Hutao / Catatan Abyss

Snap Hutao menawarkan dua fitur statistik utama terkait dengan tantangan Spiral Abyss

- `Statistik Abyss` di sidebar adalah fitur yang dirancang untuk membantu pemain yang tidak familiar dengan sistem pertempuran Genshin Impact untuk membangun tim, melewati Abyss, dan mendapatkan hadiah dengan mengumpulkan dan menampilkan data statistik tantangan dari Spiral Abyss dari sejumlah besar pemain.
- `Catatan Abyss` di sidebar adalah fitur statistik yang membantu individu meninjau pengalaman bermain mereka dan pengumpulan data pribadi dengan menyimpan data tantangan dari setiap periode Spiral Abyss.
  - Banyak pemain berkontribusi pada dataset `Statistik Abyss` Database Hutao dengan mengunggah `Catatan Abyss` pribadi mereka

::: tabs

@tab Penggunaan Karakter
![tingkat-penggunaan-karakter](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01cAHDDi1g6dyEPgDBp_!!1797064093.png_.webp)
@tab Penampilan Karakter
![tingkat-penampilan-karakter](https://img.alicdn.com/imgextra/i4/1797064093/O1CN01oGusSy1g6dyD7kKoP_!!1797064093.png_.webp)
@tab Penampilan Tim
![Penampilan Tim](https://img.alicdn.com/imgextra/i2/1797064093/O1CN010K1SE91g6dyGYLnWB_!!1797064093.png_.webp)
@tab Konstelasi Karakter
![tingkat-penahanan-karakter](https://img.alicdn.com/imgextra/i1/1797064093/O1CN01O2jCWZ1g6dy4fzxlw_!!1797064093.png_.webp)
@tab Statistik Pribadi
![statistik-catatan-pribadi](https://img.alicdn.com/imgextra/i4/1797064093/O1CN01YDXi8r1g6dyGBmAt2_!!1797064093.png_.webp)
@tab Detail Statistik Pribadi
![detail-catatan-pribadi](https://img.alicdn.com/imgextra/i4/1797064093/O1CN01YwoXln1g6dyEKoJ2r_!!1797064093.png_.webp)

:::

## Lihat Statistik Abyss

::: warning Batasan Lingkup Data
Semua data yang dihitung didasarkan pada data pemain **yang diunggah ke Database Hutao** dan tidak dapat mewakili rata-rata data dari **semua** pemain Genshin Impact. Data ini hanya untuk referensi.
:::

::: info Siklus Pembaruan Data Statistik

1. Statistik Abyss (penggunaan karakter, penampilan karakter, penampilan tim) akan secara otomatis direset pada tanggal 1 dan 16 setiap bulannya sesuai zona waktu server permainan akun Anda.
   - Anda dapat melihat total data yang diunggah secara real-time dengan mengklik tombol `Detail` di halaman `Statistik Abyss`.
2. Jika pengguna tidak mengunggah catatannya selama 30 hari, data konstelasi karakternya akan direset dalam database.

:::

- Masuk ke halaman Catatan Abyss dengan mengklik `Statistik Abyss` pada menu sidebar.
- Klik tab `Penggunaan Karakter` untuk melihat statistik tingkat penggunaan karakter
  - Tingkat Penggunaan Karakter = Penampilan Karakter di Lantai Ini [^first] / Jumlah Pemain yang Memiliki Karakter Ini
- Klik tab `Penampilan Karakter` untuk melihat statistik tingkat penampilan karakter
  - Tingkat Penampilan Karakter = Penampilan Karakter di Lantai Ini [^first-2] / Total Jumlah Catatan Abyss dari Lantai Ini
- Klik tab `Tim` untuk melihat statistik waktu penampilan tim
  - Penampilan tim adalah peringkat waktu penampilan berbagai kombinasi tim karakter yang berbeda
- Klik tab `Konstelasi Karakter` untuk melihat statistik konstelasi karakter [^second]
  - Konstelasi Karakter [^third] = Jumlah Pemain yang Memiliki Karakter Ini / Total Jumlah Pemain

## Unggah Data Abyss

### Gunakan Klien Snap Hutao

- Masuk ke halaman Catatan Abyss dengan mengklik `Catatan Abyss` pada menu sidebar.
- Klik tombol `Perbarui Data` untuk memastikan Snap Hutao menyimpan catatan Spiral Abyss terbaru Anda.
- Klik `Unggah Data` untuk mengunggah catatan Spiral Abyss Anda.
  - Ini mungkin memakan waktu beberapa detik, Anda akan melihat pesan keberhasilan berikut setelah data Anda dikirim
    ![unggah-hutaoapi](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Zt7yQp1g6duBDALeX_!!1797064093.png)

### Gunakan Browser

::: info
Metode ini tidak mendukung HoYoLAB
:::

- Buka [file JavaScript](/upload-abyss-data.js) kami, salin seluruh kontennya.
- Buat bookmark baru di peramban Anda.
  - Isi dengan nama yang sesuai.
  - Di bidang `URL`, isi dengan skrip yang baru saja Anda salin
    ![tambah-bookmark](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01p0KOqU1g6dvfDQO6e_!!1797064093.png)
- Kunjungi MiYouShe, tunggu halaman sepenuhnya dimuat, lalu klik bookmark tersebut.
- Tunggu sebentar, dan Anda akan melihat jendela permintaan unggah data.
- Setelah mengonfirmasikannya, peramban akan mengunggah catatan abyss Anda, jangan mematikan peramban Anda.
- Anda akan menerima notifikasi ketika data Anda dikirim.

## Berbagi Data

Snap Hutao berkontribusi data ke Database Hutao dengan pengembang lain. Anda dapat melihat Statistik Abyss kami, dan mengunggah data Abyss Anda dalam beberapa aplikasi selain Snap Hutao.
Saat ini, Snap Hutao berbagi data Abyss dengan aplikasi berikut:

<div class="vp-card-container">

```component VPCard
title: Miao-Plugin untuk Yunzai-Bot
desc: Plugin QQ robot Miao-Plugin
logo: /images/202312/miao-plugin-logo.webp
link:
 https://github.com/yoimiya-kokomi/miao-plugin/tree/master
```

```component VPCard
title: Pizza Helper untuk Genshin
desc: Alat Genshin Impact di platform MacOS/iOS
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

[^first]: Ketika karakter yang sama muncul di lantai yang sama tetapi berbeda level, waktu penampilan hanya dihitung sekali.
[^first-2]: Ketika karakter yang sama muncul di lantai yang sama tetapi berbeda level, waktu penampilan hanya dihitung sekali.
[^second]: Data konstelasi karakter adalah set data terpisah dari database catatan Spiral Abyss
[^third]:
    Setelah memiliki karakter ini, karakter akan dihitung ke dalam database bahkan jika tidak muncul di Spiral Abyss; Setelah mengunggah statistik Abyss Anda, semua karakter yang dikumpulkan akan disertakan