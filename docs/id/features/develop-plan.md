---
headerDepth: 2
category: [Feature, Tutorial]
tag: [Development Plan, Development Calculator]
order: 10
comment: false
description: Fitur Rencana Pengembangan di Snap Hutao membantu pemain membuat daftar target untuk pengembangan karakter dan senjata, memudahkan pelacakan progres dan material yang dibutuhkan.
---

# Rencana Pengembangan

![rencana-pengembangan](/images/202501/character_develop_plan.webp)

::: tip
Ikon hijau menunjukkan material yang bisa didapatkan (farming) pada hari ini.
:::

## Menambahkan Target ke Daftar Material

### Menambahkan dari Data Wiki

1. Dari **menu di sebelah kiri** Snap Hutao, klik fitur "Data Karakter" atau "Data Senjata".
2. Klik tombol "Kalkulator Pengembangan" di pojok kanan atas.
3. Di jendela "Tambah atau Perbarui Rencana Pengembangan Saat Ini" yang muncul, isi level awal dan target untuk karakter atau senjata.

- Untuk target yang ditambahkan dari data Wiki, level awal default adalah Level 1 (bisa disesuaikan).

### Menambahkan dari Data Karakter Saya

1. Dari **menu di sebelah kiri**, klik halaman fitur "Karakter Saya" dan pilih karakter yang ingin ditambahkan.
2. Klik tombol "Rencana Pengembangan - Karakter & Senjata Saat Ini" di pojok kanan atas.
3. Di jendela yang muncul, isi level awal dan target untuk karakter tersebut.

- Untuk target yang ditambahkan dari data pemain, level awal default adalah level karakter saat ini.
- Untuk detail lebih lanjut, lihat dokumen [Karakter Saya](character-data.md#sync-character-data).

## Membuat Rencana Baru dan Sinkronisasi Inventaris

1. Dari **menu di sebelah kiri**, klik fitur "Rencana Pengembangan".
2. Klik "Buat Rencana Baru" di pojok kanan atas dan beri nama.
3. Ikuti instruksi di atas untuk menambahkan karakter ke rencana baru.
   - Setidaknya satu karakter dengan level yang belum maksimal harus ditambahkan. Karakter di level maksimal tidak dapat ditambahkan.
4. Beralih ke tab "Item Inventaris" dan klik tombol "Sinkronisasi Item Inventaris".
   - Sistem akan secara otomatis menyinkronkan item inventaris dari akun yang sedang login.
   - Anda dapat memilih rencana pengembangan yang berbeda untuk setiap akun melalui menu dropdown di sebelah tombol "Sinkronisasi".
   - Klik ikon atau angka item untuk mengedit jumlah material secara manual.
   - Informasi item yang diubah akan otomatis terhubung dengan rencana pengembangan yang dipilih.
5. Lihat perkiraan jumlah hari yang dibutuhkan untuk farming material di halaman "Statistik Material".

![Statistik Material](/images/202501/character_develop_predict.webp)

::: tip
Jika nama dan gambar item tidak konsisten atau terjadi masalah tampilan, coba beralih ke halaman lain lalu kembali lagi untuk memperbaikinya. Masalah ini disebabkan oleh bug pada framework UI dari Microsoft dan belum bisa diperbaiki sepenuhnya.
:::

## Hapus Rencana Pengembangan

Di bagian kanan atas halaman "Rencana Pengembangan", klik tombol "Hapus Rencana" untuk menghapus rencana saat ini. Setelah dihapus, semua data di dalamnya akan ikut terhapus.