---
headerDepth: 2
category: [Fitur, Tutorial]
tag: [ekspor permohonan, gacha, permohonan]
order: 5
comment: false
description: Fitur ekspor catatan permohonan memungkinkan pemain untuk secara bebas mengekspor data permohonan akun game mereka saat ini dan menyimpannya secara permanen di penyimpanan lokal dan mencadangkannya. Melalui akumulasi data jangka panjang, data dapat dilacak dan dianalisis.
---

# Catatan Permohonan

Gacha adalah salah satu gameplay inti dari Genshin Impact. Baik untuk tujuan peringatan, pamer, atau perencanaan serius untuk rencana menarik karakter, analisis statistik pada catatan gacha historis sangatlah penting. Namun, Genshin Impact hanya menyediakan catatan gacha selama satu tahun, yang tidak cukup bagi pemain jangka panjang (~~namun mereka akan menghitung berapa banyak merpati Timmy yang telah Anda bunuh dalam setahun~~).

Oleh karena itu, fitur ekspor catatan permohonan Snap Hutao hadir untuk membantu pemain mentransfer data permohonan ke penyimpanan lokal untuk penyimpanan permanen dan melakukan analisis data jangka panjang.

Untuk prinsip teknis ekspor catatan permohonan Genshin Impact, silakan merujuk ke [**Sistem Permohonan dan Prinsip Ekspor**](../advanced/Gacha-system-and-export-principal.html).

![Ekspor Permohonan](https://img.alicdn.com/imgextra/i2/1797064093/O1CN01otuXYg1g6e0wnNwX2_!!1797064093.png_.webp)

Seperti yang ditunjukkan pada gambar di atas, fitur ekspor permohonan Snap Hutao dapat membantu pengguna menghitung dan menganalisis data gacha dengan jelas, termasuk:

- Jumlah total gacha
- Jumlah pity saat ini
- Jumlah dan persentase perolehan senjata dan karakter dengan tingkat kelangkaan yang berbeda
- Jumlah gacha untuk setiap perolehan bintang 5 dan status pity

Selain itu, **pengguna Snap Hutao Cloud dapat memperoleh data prediksi gacha tambahan yang dihitung oleh server cloud.**

::: note Keterlambatan Catatan Permohonan Genshin Impact
Sumber data Snap Hutao adalah server miHoYo, sehingga catatan permohonan yang baru saja dilakukan mungkin tidak dapat diperoleh dalam waktu singkat.  
Ketika Anda melihat catatan terbaru di riwayat permohonan dalam game, Anda dapat memperoleh data statistik yang sesuai di Snap Hutao.
:::

::: important
Ini adalah terjemahan yang dibuat oleh model Google Gemini, dan kami menerima perbaikan melalui PR.
:::

## Mendapatkan Data Permohonan

### Refresh SToken <Badge text="Disarankan" type="tip" />

::: info Petunjuk

- Akun MiYouShe yang sudah login adalah prasyarat untuk menggunakan metode refresh SToken. Anda dapat merujuk ke dokumen [Pengalihan Akun MiYouShe](mhy-account-switch.md) untuk login ke akun di Snap Hutao.
- Metode refresh SToken saat ini tidak mendukung server internasional.
  :::

1. Pastikan akun MiYouShe yang perlu diambil catatannya telah login di Snap Hutao.
2. Masuk ke halaman "Catatan Permohonan" di menu sebelah kiri.
3. Klik tombol "Refresh" di kanan atas, pilih "Refresh SToken".
4. Tunggu hingga pembacaan selesai, lalu Anda dapat melihat catatan permohonan terbaru.

### Refresh Cache Web <Badge text="Mendukung Server Internasional" type="tip" />

1. Mulai Genshin Impact dan masuk ke game, buka riwayat permohonan dalam game.
2. Masuk ke halaman "Catatan Permohonan" di menu sebelah kiri Snap Hutao, klik tombol "Refresh" di kanan atas, pilih "Refresh Cache Web".

::: tip Jika fungsi refresh cache web tidak normal:

- Klik "Pengaturan-Ruang Penyimpanan" di menu kiri bawah aplikasi.
- Jalankan operasi "Hapus cache web dalam game".
- Buka kembali antarmuka riwayat permohonan di dalam game.
- Coba lagi untuk me-refresh catatan permohonan.
  :::

### Input URL Manual <Badge text="Mendukung Server Internasional" type="tip" />

1. Jika Anda mendapatkan URL riwayat permohonan melalui alat lain, Anda dapat memilih "Input URL Manual" dan ikuti petunjuknya.
2. Harap perhatikan bahwa URL **memiliki batas waktu**, pastikan untuk menyelesaikan operasi sesegera mungkin.

### Mode Refresh Penuh

- Secara default, Snap Hutao akan berhenti mengimpor setelah menemukan catatan yang sudah ada secara lokal untuk menghindari duplikasi catatan.
- Jika Anda ingin mendapatkan semua catatan historis dari server Genshin Impact secara lengkap, Anda dapat mencentang "Refresh Penuh", lalu menjalankan tugas refresh.

::: tip

- **Tidak mencentang refresh penuh** tidak akan menyebabkan hilangnya data permohonan.
- **Mencentang refresh penuh** juga tidak akan menyebabkan duplikasi impor data.
  :::

## Impor Data Permohonan UIGF <Badge text="UIGF" type="info" />

Snap Hutao mendukung impor catatan permohonan dengan `format data UIGF`[^UIGF-Org]. Langkah-langkah impor adalah sebagai berikut:

1. Ekspor file data UIGF dari alat lain.
2. Di Snap Hutao, klik "Pengaturan-Catatan Permohonan-Migrasi-Impor".
3. Di pemilih file yang muncul, pilih file data `UIGF Json`.
4. Konfirmasi data dan selesaikan impor.

::: warning Peningkatan file UIGF versi lama
Jika versi catatan permohonan terlalu lama, Anda dapat mengklik "Pengaturan-Catatan Permohonan-Migrasi-Tingkatkan File UIGF Versi Awal", lalu impor setelah peningkatan selesai.
:::

## Ekspor Data Permohonan UIGF <Badge text="UIGF" type="info" />

Snap Hutao mendukung ekspor catatan permohonan dalam `format data UIGF` sebagai file Json. Langkah-langkah spesifiknya adalah sebagai berikut:

1. Masuk ke "Pengaturan" di menu sebelah kiri.
2. Temukan bagian "Catatan Permohonan-Migrasi", klik tombol "Ekspor".
3. Pilih akun yang datanya ingin Anda ekspor.
4. Di antarmuka yang muncul, pilih jalur penyimpanan file, klik "Ekspor" untuk menyelesaikan operasi.

::: tip
Mendukung ekspor catatan permohonan beberapa akun ke satu file, tidak perlu mengoperasikannya secara terpisah.
:::

## Sinkronisasi Cloud Catatan Permohonan

> Fungsi sinkronisasi cloud didasarkan pada akun Snap Hutao Cloud, dan harus [mendaftar dan masuk ke akun Snap Hutao](hutao-settings.md#akun-snap-hutao) untuk dapat menggunakannya.

- **Unggah**: Pada antarmuka "Catatan Permohonan", pilih arsip yang perlu disinkronkan, klik tombol "Snap Hutao Cloud", lalu pilih "Unggah Arsip Saat Ini".
- **Unduh**: Klik tombol "Snap Hutao Cloud", pilih tombol unduh di sisi kanan arsip UID yang sesuai untuk menyelesaikan sinkronisasi.
- **Hapus**: Klik tombol "Snap Hutao Cloud", pilih tombol hapus di sisi kanan arsip UID yang sesuai untuk menghapus data cloud.

[^UIGF-Org]: UIGF (Format Data Genshin yang Terstandarisasi) disediakan oleh [UIGF-Org](https://uigf.org/).
