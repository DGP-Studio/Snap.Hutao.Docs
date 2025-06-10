---
headerDepth: 2
category: [Feature, Tutorial]
tag: [Wish Export, Gacha, Wish]
order: 5
comment: false
description: Fitur Riwayat Gacha memungkinkan pemain untuk bebas mengekspor data gacha mereka saat ini dari akun game dan menyimpannya secara permanen serta mencadangkannya secara lokal, untuk melacak dan menganalisis data gacha jangka panjang.
---

# Riwayat Gacha

Sistem gacha adalah salah satu elemen gameplay inti di Genshin Impact. Baik untuk tujuan kenang-kenangan, pamer, atau merencanakan tarikan secara serius, menganalisis data gacha historis sangatlah penting. Namun, Genshin Impact hanya menyediakan riwayat gacha selama satu tahun, yang tidak cukup untuk pemain jangka panjang.

Oleh karena itu, fitur Riwayat Gacha dari Snap Hutao dibuat untuk membantu pemain mentransfer data gacha mereka ke penyimpanan lokal untuk disimpan secara permanen dan dianalisis dalam jangka panjang.

Untuk prinsip teknis ekspor catatan gacha Genshin Impact, silakan merujuk ke [**Sistem Gacha dan Prinsip Ekspor**](../advanced/Gacha-system-and-export-principal.html).

![Riwayat Gacha](https://img.alicdn.com/imgextra/i2/1797064093/O1CN01otuXYg1g6e0wnNwX2_!!1797064093.png_.webp)

Seperti yang ditunjukkan di atas, fitur Riwayat Gacha Snap Hutao membantu pengguna melacak dan menganalisis data gacha mereka dengan jelas, termasuk:

- Jumlah total gacha
- Jumlah pity saat ini
- Jumlah dan persentase senjata dan karakter yang diperoleh berdasarkan kelangkaan
- Jumlah gacha per tarikan bintang 5 dan status pity

Selain itu, **pengguna Snap Hutao Cloud dapat mengakses data prediksi gacha yang dihitung oleh server cloud**.

::: note Penundaan dalam Catatan Gacha Genshin Impact
Sumber data Snap Hutao adalah server miHoYo. Oleh karena itu, gacha yang baru saja dilakukan mungkin tidak langsung tersedia.
Ketika Anda melihat catatan terbaru di riwayat gacha dalam game, statistik yang sesuai baru bisa didapatkan di Snap Hutao.
:::

## Ambil Data Gacha

### Penyegaran SToken <Badge text="Direkomendasikan" type="tip" />

::: info Petunjuk
- Akun MiYouShe yang sudah login diperlukan untuk menggunakan metode penyegaran SToken. Silakan merujuk ke dokumen [Pergantian Akun MiYouShe](mhy-account-switch.md) untuk login ke akun Anda di Snap Hutao.
- Metode penyegaran SToken saat ini tidak mendukung server Global (HoYoLAB).
:::

1. Pastikan akun MiYouShe yang ingin Anda ambil catatannya sudah login di Snap Hutao.
2. Buka halaman "Riwayat Gacha" dari menu di sebelah kiri.
3. Klik tombol "Segarkan" di pojok kanan atas dan pilih "Penyegaran SToken."
4. Tunggu hingga proses selesai, dan Anda dapat melihat catatan gacha terbaru.

### Penyegaran Cache Web <Badge text="Server Global Didukung" type="tip" />

1. Jalankan Genshin Impact, masuk ke dalam game, lalu buka halaman riwayat gacha.
2. Di Snap Hutao, buka halaman "Riwayat Gacha" dari menu di sebelah kiri, klik tombol "Segarkan" di pojok kanan atas, dan pilih "Penyegaran Cache Web."

::: tip Jika fungsi penyegaran cache web tidak berfungsi:
- Klik "Pengaturan" -> "Penyimpanan" di menu kiri bawah program.
- Lakukan operasi "Hapus Cache Web Dalam Game".
- Buka kembali riwayat gacha di dalam game.
- Coba segarkan kembali catatan gacha.
:::

### Input URL Manual <Badge text="Server Global Didukung" type="tip" />

1. Jika Anda telah memperoleh URL riwayat gacha dari alat lain, pilih "Input URL Manual" dan ikuti petunjuknya.
2. Harap dicatat bahwa URL **memiliki batas waktu**, jadi selesaikan operasi sesegera mungkin.

### Mode Penyegaran Penuh

- Secara default, Snap Hutao akan berhenti mengimpor setelah menemukan data yang sudah ada di penyimpanan lokal untuk menghindari duplikasi.
- Jika Anda ingin mengambil semua catatan historis dari server Genshin Impact secara penuh, aktifkan "Penyegaran Penuh" sebelum memulai proses.

::: tip
- **Tidak memilih penyegaran penuh** tidak akan menyebabkan hilangnya data gacha.
- **Memilih penyegaran penuh** tidak akan menyebabkan data ganda.
:::

## Impor Data Gacha UIGF <Badge text="UIGF" type="info" />

Snap Hutao mendukung impor catatan gacha dalam `format data UIGF`[^UIGF-Org]. Ikuti langkah-langkah ini untuk mengimpor:

1. Ekspor file data UIGF dari alat lain.
2. Di Snap Hutao, klik "Pengaturan" -> "Riwayat Gacha" -> "Migrasi" -> "Impor."
3. Pilih file data `UIGF Json` di jendela pemilih file.
4. Konfirmasikan data dan selesaikan impor.

::: warning Meningkatkan File UIGF Versi Lama
Jika versi catatan gacha terlalu lama, klik "Pengaturan" -> "Riwayat Gacha" -> "Migrasi" -> "Tingkatkan File UIGF Lama", selesaikan proses peningkatan, lalu impor kembali.
:::

## Ekspor Data Gacha UIGF <Badge text="UIGF" type="info" />

Snap Hutao mendukung ekspor catatan gacha ke file Json dalam `format data UIGF`. Ikuti langkah-langkah ini untuk mengekspor:

1. Buka "Pengaturan" dari menu di sebelah kiri.
2. Temukan bagian "Riwayat Gacha-Migrasi" dan klik tombol "Ekspor".
3. Pilih akun yang datanya perlu Anda ekspor.
4. Pilih lokasi penyimpanan file di jendela yang muncul, lalu klik "Ekspor" untuk menyelesaikan.

::: tip
Anda dapat mengekspor catatan gacha dari beberapa akun ke satu file tanpa perlu melakukannya satu per satu.
:::

## Sinkronisasi Cloud Catatan Gacha

> Sinkronisasi cloud memerlukan akun Snap Hutao Cloud. Anda harus [mendaftar dan login ke akun Snap Hutao](hutao-settings.md#snap-hutao-account) untuk menggunakannya.

- **Unggah**: Di halaman "Riwayat Gacha", pilih arsip yang akan disinkronkan, klik tombol "Snap Hutao Cloud", lalu pilih "Unggah Arsip Saat Ini".
- **Unduh**: Klik tombol "Snap Hutao Cloud", lalu klik tombol unduh di sebelah kanan arsip yang sesuai dengan UID untuk menyelesaikan sinkronisasi.
- **Hapus**: Klik tombol "Snap Hutao Cloud", lalu klik tombol hapus di sebelah kanan arsip yang sesuai dengan UID untuk menghapus data dari cloud.

[^UIGF-Org]: UIGF (Unified Interchangeable Genshin Data Format) dikelola oleh [UIGF-Org](https://uigf.org/).