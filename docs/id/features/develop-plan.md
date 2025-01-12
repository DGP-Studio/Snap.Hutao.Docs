---
headerDepth: 2
category: [Fitur, Tutorial]
tag: [rencana pengembangan, kalkulator pengembangan]
order: 10
comment: false
description: Fitur Rencana Pengembangan di Snap Hutao membantu pemain membuat daftar pengembangan karakter dan senjata, sehingga mudah untuk melacak progres pengembangan dan material yang dibutuhkan.
---

# Rencana Pengembangan

![dev-plan](/images/202501/character_develop_plan.webp)

::: tip
Item dengan ikon hijau menunjukkan bahwa item tersebut dapat di-farm pada hari itu.
:::

::: important
Ini adalah terjemahan yang dibuat oleh model Google Gemini, dan kami menerima perbaikan melalui PR.
:::

## Menambahkan Target Pengembangan ke Daftar Material

### Menambahkan Berdasarkan Data Wiki

1. Pada bilah sisi kiri Snap Hutao, klik fitur "Data Karakter" atau "Data Senjata".
2. Klik tombol "Hitung Pengembangan" di pojok kanan atas antarmuka.
3. Pada jendela "Tambahkan atau Perbarui ke Rencana Pengembangan Saat Ini" yang muncul, isi level awal dan level target karakter atau senjata.

- Target pengembangan yang ditambahkan berdasarkan data Wiki, level awalnya secara default adalah level 1 (dapat disesuaikan sesuai kebutuhan).

### Menambahkan Berdasarkan Data Pemain

1. Pada bilah sisi kiri, klik halaman fitur "Karakter Saya", pilih karakter yang ingin ditambahkan ke rencana pengembangan.
2. Klik tombol "Hitung Pengembangan - Karakter & Senjata Saat Ini" di pojok kanan atas antarmuka.
3. Pada jendela "Tambahkan atau Perbarui ke Rencana Pengembangan Saat Ini" yang muncul, isi level awal dan level target karakter.

- Target pengembangan yang ditambahkan berdasarkan data pemain, level awal defaultnya adalah level karakter saat ini.
- Untuk informasi detail, lihat dokumen [Karakter Saya](character-data.md#将当前选定角色加入养成计算).

## Membuat Rencana Baru dan Menyinkronkan Item di Dalam Game

1. Pada bilah sisi kiri, klik fitur "Rencana Pengembangan".
2. Klik "Buat Rencana" di pojok kanan atas dan beri nama rencana tersebut.
3. Ikuti panduan [Menambahkan Karakter Terpilih ke Perhitungan Pengembangan](./character-data.md#将当前选定角色加入养成计算) atau [Menambahkan Karakter dari Wiki ke Rencana Pengembangan](./character-wiki.md#将-wiki-中角色添加至养成计划) untuk menambahkan karakter ke rencana baru.
   - Setidaknya tambahkan satu karakter yang level karakter atau level senjatanya belum penuh, karakter dengan level penuh tidak dapat ditambahkan ke rencana pengembangan.
4. Beralih ke tab "Item Tas" dan klik tombol "Sinkronkan Item Tas".
   - Sistem akan otomatis menyinkronkan item tas game dari akun yang sedang login.
   - Anda dapat memilih rencana pengembangan yang berbeda untuk akun yang berbeda melalui kotak dropdown di sebelah kiri tombol "Sinkronkan Item Tas".
   - Klik ikon item atau area angka untuk mengedit jumlah material secara manual.
   - Informasi item yang dimodifikasi akan otomatis terhubung ke rencana pengembangan yang dipilih.
5. Lihat perkiraan jumlah hari farm material di halaman "Statistik Material".

![体力预估功能](/images/202501/character_develop_predict.webp)

::: tip
Jika nama item dan gambar tidak sesuai atau muncul masalah tampilan seperti penumpukan, Anda dapat beralih halaman dan kembali ke halaman ini untuk memperbaikinya. Masalah ini disebabkan oleh Microsoft dan saat ini tidak dapat diperbaiki sepenuhnya.
:::

## Menghapus Rencana Pengembangan

Di bagian kanan atas antarmuka Snap Hutao, klik tombol "Hapus Rencana" untuk menghapus rencana pengembangan saat ini. Setelah dihapus, data seperti informasi karakter dan informasi item tas dalam rencana ini akan dihapus bersamaan.
