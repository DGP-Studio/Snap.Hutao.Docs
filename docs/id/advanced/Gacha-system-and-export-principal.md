---
headerDepth: 2
category: [FAQ]
icon: iconfont icon-read
order: 8
comment: false
description: Snap Hutao menggunakan berbagai cara untuk mendapatkan informasi login pengguna dan berkoordinasi dengan API Genshin Impact untuk mendapatkan catatan Wish.
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/advanced/Gacha-system-and-export-principal.html&has_description=False
---

# Sistem Gacha dan Prinsip Ekspor

::: important
Ini adalah terjemahan yang dibuat oleh model Google Gemini, dan kami menerima perbaikan melalui PR.
:::

Sistem Gacha di Snap Hutao telah mengalami desain ulang arsitektur dibandingkan dengan Snap Genshin.

Dokumen ini akan menjelaskan mekanisme catatan Wish di Genshin Impact dan prinsip teknis dari fungsi ekspor Wish di Snap Hutao.

---

## Perolehan Wish

Untuk mendapatkan catatan Wish, perlu dilakukan permintaan ke API miHoYo.

Berikut adalah beberapa poin penting mengenai API ini:

- Melalui API server miHoYo, kita hanya dapat mengakses catatan Wish dalam satu tahun terakhir.
  - Ini juga merupakan sumber catatan Wish di dalam game Genshin Impact.
- API ini memiliki batasan kecepatan permintaan; permintaan yang terlalu cepat dapat menyebabkan kegagalan permintaan berikutnya, sehingga data tidak dapat diperoleh dengan normal.

### Parameter Kunci Permintaan API

Untuk melakukan permintaan ke API ini, kita memerlukan empat parameter kunci:

1. Jenis Banner
2. Item yang Di-wish
3. Waktu
4. ID Catatan Wish

- Saat ini, ada beberapa metode yang diketahui untuk mendapatkan parameter-parameter ini:
  1. Menjelajahi berkas log Unity, mencari URL catatan Wish yang dibuka pengguna.
  2. Memantau lalu lintas jaringan lokal, menyaring URL catatan Wish.
  3. Mencari cache peramban `CefBrowser`, menemukan URL catatan Wish.
  4. Menggunakan Cookie yang berisi `SToken`, memanggil API `genAuthKey` untuk mendapatkan parameter-parameter ini.
  5. Pengguna tingkat lanjut dapat memasukkan URL terkait secara manual.

### Penggabungan Data dan Pembuatan Catatan Lengkap

Setelah mendapatkan data dari API, kita akan mendapatkan catatan Wish yang tersebar. Dengan menggabungkan catatan-catatan ini, kita bisa mendapatkan daftar catatan Wish yang lengkap.

---

## Penyimpanan Wish

Daftar catatan Wish lengkap yang diperoleh akan diserialisasikan dan disimpan dalam database lokal. Data ini akan dideserialisasikan ketika diperlukan untuk ditampilkan kepada pengguna.

- Dalam permintaan selanjutnya, Snap Hutao hanya perlu membandingkan data di database dengan data baru yang diperoleh.
- Cara ini memastikan pengguna dapat menyimpan catatan Wish akun mereka dalam jangka panjang.

---

## Format UIGF

> Standar Format Catatan Wish yang Dapat Dipertukarkan secara Seragam  
> Uniformed Interchangeable GachaLog Format Standard

`UIGF` adalah standar pertukaran data catatan Wish yang telah kami advokasi, luncurkan, dan **pelihara secara aktif** bersama dengan aplikasi catatan Wish lainnya.

Format data yang terstandardisasi memungkinkan pengguna untuk memindahkan data antar berbagai alat secara bebas, sehingga dapat menggunakan fitur khusus dari masing-masing alat.

### Impor Wish

Dengan menggunakan format data `UIGF`, pengguna dapat mengimpor data catatan Wish yang disimpan dalam aplikasi lain.

- Saat Snap Hutao mengimpor data, ia akan membandingkan dengan indeks (ID) paling awal yang ada dalam penyimpanan lokal, dan hanya mengimpor catatan yang lebih awal.
- Data baru selalu dapat diperoleh dari server miHoYo, dan data aslinya memiliki akurasi yang lebih tinggi.

### Ekspor Wish

Snap Hutao mendukung penyimpanan catatan Wish dalam format data `UIGF` ke dalam berkas, dan menampilkannya ke folder yang ditentukan pengguna.

Pengguna dapat menggunakan berkas ekspor untuk melanjutkan penggunaan catatan Wish di alat lain yang mendukung format `UIGF`.
