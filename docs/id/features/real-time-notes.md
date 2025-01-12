---
headerDepth: 2
category: [Fitur, Tutorial]
tag: [Catatan Langsung, Ekspedisi, Resin]
order: 7
comment: false
description: Fitur Catatan Langsung di Snap Hutao secara berkala memperbarui data MiYouShe pemain, menyinkronkan informasi dinamis dalam Genshin Impact ke komputer lokal, dan mengirimkan notifikasi pengingat berdasarkan kondisi yang ditetapkan pengguna.
---

# Catatan Langsung

::: important
Ini adalah terjemahan yang dibuat oleh model Google Gemini, dan kami menerima perbaikan melalui PR.
:::

::: info Prasyarat
Fitur ini mengharuskan Anda untuk masuk ke akun MiYouShe / HoYoLAB Anda di Snap Hutao. Untuk metode login, silakan lihat dokumen [Peralihan Banyak Akun MiYouShe](mhy-account-switch.md).
:::

![live-data-tracking](https://img.alicdn.com/imgextra/i4/1797064093/O1CN01YUyKil1g6e0x3SpKX_!!1797064093.png_.webp)

## Menambahkan Catatan Langsung

1. Klik tombol "Tambahkan Catatan Langsung".
2. Di jendela pop-up "Tambahkan Catatan Langsung", temukan UID karakter game yang ingin Anda tambahkan, dan klik tombol plus di sebelah kanannya.
3. Karakter game yang ditambahkan akan ditampilkan di halaman "Catatan Langsung".
   - Catatan Langsung akan secara otomatis memperbarui data pada interval waktu yang tetap.
   - Klik "Pengaturan Notifikasi" di pojok kanan atas jendela untuk mengatur interval waktu kueri.
4. Jika Anda ingin segera mendapatkan data terbaru, klik tombol "Segarkan Sekarang".
5. Jika kesalahan `-1034` muncul saat penyegaran data, ini menunjukkan bahwa mekanisme anti-robot MiYouShe telah terpicu. Anda dapat mengatasinya dengan mengonfigurasi verifikasi tanpa hambatan di pengaturan Snap Hutao.

## Memverifikasi Pengguna dan Karakter

Jika Anda menggunakan akun MiYouShe, kemungkinan kode verifikasi akan terpicu karena mekanisme anti-robot, sehingga data Catatan Langsung tidak dapat diperbarui.
Anda dapat menyelesaikan masalah ini dengan langkah-langkah berikut:

1. Klik tombol "Verifikasi Pengguna dan Karakter Saat Ini" di kiri atas halaman Catatan Langsung.
2. Snap Hutao akan menampilkan jendela verifikasi. Setelah menyelesaikan verifikasi, Anda dapat memperbarui data akun yang terpengaruh oleh mekanisme anti-robot.

## Pengaturan Notifikasi Global

Klik "Pengaturan Notifikasi" di pojok kanan atas jendela untuk mengonfigurasi perilaku global fitur Catatan Langsung, termasuk:

- **Mengaktifkan/menonaktifkan penyegaran data otomatis**.
- **Mengatur interval waktu penyegaran data otomatis**.
- **Mode Jangan Ganggu Notifikasi**:
  - Jika diaktifkan, notifikasi hanya akan ditampilkan di pusat notifikasi sistem.
- **Notifikasi Prioritas Tinggi**:
  - Menghindari notifikasi secara otomatis masuk ke pusat tindakan, tetapi dapat mengganggu penggunaan sehari-hari.
- **Webhook Penerusan Data Kustom**:
  - Snap Hutao memungkinkan pengguna untuk meneruskan data Catatan Langsung ke program pihak ketiga untuk mengurangi permintaan langsung ke API miHoYo.
  - Di "URL Webhook Catatan Langsung", masukkan alamat antarmuka `HTTP API` program pihak ketiga. Snap Hutao akan meneruskan data mentah ke antarmuka ini melalui permintaan `POST`.

## Pengaturan Independen Akun

1. Arahkan kursor mouse ke formulir Catatan Langsung karakter yang pengaturannya perlu diubah.
2. Klik tombol pengaturan di pojok kanan atas formulir untuk masuk ke opsi pengaturan berikut:
   - **Ambang batas pengingat Resin Asli** (rentang: 0–200)
   - **Ambang batas pengingat Mata Uang Realm** (rentang: 0–2400)
   - **Aktifkan pengingat Parametric Transformer** (aktif/nonaktif)
   - **Aktifkan pengingat batas Komisi Harian** (aktif/nonaktif)
   - **Aktifkan pengingat Ekspedisi selesai** (aktif/nonaktif)
3. Setelah selesai mengubah, klik tombol "Simpan" untuk menyimpan pengaturan saat ini.

## Menghapus Karakter

1. Arahkan kursor mouse ke formulir Catatan Langsung karakter yang perlu dihapus.
2. Klik tombol hapus di pojok kanan atas formulir untuk menghapus Catatan Langsung karakter tersebut.

## Pertanyaan Umum

### Mengapa pengaturan penyegaran otomatis Catatan Langsung menampilkan pesan "Gagal memodifikasi tugas terjadwal"?

- Penyegaran otomatis Catatan Langsung bergantung pada Penjadwal Tugas Windows.
- Untuk menghindari masalah izin, Snap Hutao akan mengatur tugas terjadwal dalam mode non-administrator.

**Solusi:**

1. Jika Anda telah mengaktifkan penyegaran otomatis dengan versi lama, Anda dapat menghapus tugas terjadwal lama secara manual. Nama tugas terjadwal adalah `SnapHutaoDailyNoteRefreshTask`.
2. Jika Anda belum pernah mengaktifkan tugas terjadwal, kemungkinan akun pengguna Windows Anda saat ini tidak memiliki izin yang cukup. Anda dapat mencoba menggunakan akun administrator.
3. Jika masalah tetap tidak teratasi, Anda mungkin perlu menginstal ulang sistem.
