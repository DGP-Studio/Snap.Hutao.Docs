---
headerDepth: 2
category: [Feature, Tutorial]
tag: [Real-time Notes, Expeditions, Resin]
order: 7
comment: false
description: Fitur Catatan Real-time di Snap Hutao menyinkronkan informasi dinamis dari Genshin Impact ke komputer lokal Anda dengan secara berkala menyegarkan data MiYouShe Anda. Ini memungkinkan Anda untuk mengatur kondisi untuk pengingat pesan dan notifikasi push berdasarkan preferensi Anda.
---

# Catatan Real-time

::: info Prasyarat
Fitur ini mengharuskan Anda untuk login ke akun MiYouShe / HoYoLAB Anda di Snap Hutao. Lihat dokumen [Peralihan Multi-Akun MiHoYo](mhy-account-switch.md) untuk instruksi login.
:::

![pelacakan-data-langsung](https://img.alicdn.com/imgextra/i4/1797064093/O1CN01YUyKil1g6e0x3SpKX_!!1797064093.png_.webp)

## Menambahkan Catatan Real-time

1. Klik tombol "Tambah Catatan Real-time".
2. Di jendela pop-up "Tambah Catatan Real-time", temukan UID karakter game yang ingin Anda tambahkan dan klik tombol plus di sebelah kanannya.
3. Karakter game yang ditambahkan akan ditampilkan di halaman "Catatan Real-time".
   - Catatan Real-time akan secara otomatis menyegarkan data pada interval yang tetap.
   - Klik "Pengaturan Notifikasi" di pojok kanan atas jendela untuk mengatur interval penyegaran.
4. Untuk mendapatkan data terbaru segera, klik tombol "Segarkan Sekarang".
5. Jika terjadi kesalahan `-1034` saat menyegarkan data, itu berarti mekanisme kontrol risiko anti-bot miHoYo telah terpicu. Ini dapat diselesaikan dengan mengonfigurasi verifikasi tak terlihat di pengaturan Snap Hutao.

## Verifikasi Pengguna dan Karakter

Jika Anda menggunakan akun MiYouShe, mekanisme anti-bot dapat memicu kode verifikasi, mencegah data Catatan Real-time disegarkan.
Langkah-langkah berikut dapat menyelesaikan masalah ini:

1. Klik tombol "Verifikasi Pengguna dan Karakter Saat Ini" di pojok kiri atas halaman Catatan Real-time.
2. Snap Hutao akan menampilkan jendela verifikasi. Selesaikan verifikasi untuk menyegarkan data untuk akun yang terpengaruh.

## Pengaturan Notifikasi Global

Mengklik "Pengaturan Notifikasi" di pojok kanan atas jendela memungkinkan Anda untuk mengonfigurasi perilaku global fitur Catatan Real-time, termasuk:

- **Aktifkan/Nonaktifkan Penyegaran Data Otomatis**.
- **Atur Interval Penyegaran Data Otomatis**.
- **Mode Jangan Ganggu**:
  - Saat diaktifkan, notifikasi hanya akan muncul di pusat notifikasi sistem.
- **Notifikasi Prioritas Tinggi**:
  - Mencegah notifikasi dipindahkan secara otomatis ke pusat tindakan, tetapi dapat mengganggu penggunaan sehari-hari.
- **Webhook Penerusan Data Kustom**:
  - Snap Hutao memungkinkan pengguna untuk meneruskan data Catatan Real-time ke program pihak ketiga untuk mengurangi permintaan langsung ke API miHoYo.
  - Masukkan alamat antarmuka `API HTTP` program pihak ketiga di bidang "URL Webhook Catatan Real-time". Snap Hutao akan meneruskan data mentah ke antarmuka ini menggunakan permintaan `POST`.

## Pengaturan Khusus Akun

1. Arahkan mouse Anda ke jendela Catatan Real-time dari karakter yang pengaturannya ingin Anda ubah.
2. Klik tombol pengaturan di pojok kanan atas jendela untuk mengakses opsi pengaturan berikut:
   - **Ambang Batas Pengingat Resin Asli** (rentang: 0–200)
   - **Ambang Batas Pengingat Mata Uang Alam** (rentang: 0–2400)
   - **Aktifkan Pengingat Transformator Parametrik** (hidup/mati)
   - **Aktifkan Pengingat Batas Komisi Harian** (hidup/mati)
   - **Aktifkan Pengingat Penyelesaian Ekspedisi** (hidup/mati)
3. Setelah mengubah pengaturan, klik tombol "Simpan" untuk menyimpan pengaturan saat ini.

## Menghapus Karakter

1. Arahkan mouse Anda ke jendela Catatan Real-time dari karakter yang ingin Anda hapus.
2. Klik tombol hapus di pojok kanan atas jendela untuk menghapus Catatan Real-time untuk karakter tersebut.

## Pertanyaan Umum

### Mengapa pengaturan penyegaran otomatis untuk Catatan Real-time menampilkan "Gagal mengubah Tugas Terjadwal"?

- Penyegaran otomatis Catatan Real-time bergantung pada Penjadwal Tugas Windows.
- Untuk menghindari masalah izin, Snap Hutao mengatur jadwal tugas dalam mode non-administrator.

**Solusi:**

1.  Jika Anda telah mengaktifkan penyegaran otomatis di versi yang lebih lama, Anda dapat secara manual menghapus jadwal tugas lama di Penjadwal Tugas. Nama jadwal tugas adalah `SnapHutaoDailyNoteRefreshTask`.
2.  Jika Anda belum pernah mengaktifkan jadwal tugas sebelumnya, akun pengguna Windows saat ini mungkin tidak memiliki izin yang cukup. Coba gunakan akun administrator.
3.  Jika masalah berlanjut, Anda mungkin perlu menginstal ulang sistem.