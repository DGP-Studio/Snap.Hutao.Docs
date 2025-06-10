---
headerDepth: 2
category: [FAQ]
icon: iconfont icon-read
order: 8
comment: false
description: Snap Hutao menggunakan berbagai cara untuk mendapatkan informasi login pengguna dan berinteraksi dengan API Genshin Impact untuk mengambil riwayat Gacha.
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/en/advanced/Gacha-system-and-export-principal.html&has_description=False
---

# Cara Kerja Sistem Gacha dan Prinsip Ekspor

Sistem Gacha di Snap Hutao memiliki arsitektur yang dirancang ulang sepenuhnya dibandingkan Snap Genshin.

Artikel ini akan menjelaskan mekanisme riwayat Gacha di Genshin Impact dan prinsip teknis di balik fitur ekspor Gacha Snap Hutao.

---

## Cara Mendapatkan Riwayat Gacha

Untuk mengambil data riwayat Gacha, aplikasi perlu melakukan permintaan ke `API` miHoYo.

Beberapa hal penting tentang `API` ini:
- `API` ini hanya menyediakan riwayat Gacha dari **satu tahun terakhir**. Ini adalah sumber data yang sama dengan yang ditampilkan di dalam game.
- `API` ini memiliki batas frekuensi permintaan. Terlalu banyak permintaan dalam waktu singkat bisa menyebabkan kegagalan pengambilan data.

### Parameter Kunci untuk Permintaan API

Untuk mengambil data, dibutuhkan empat parameter kunci:
1. Tipe Banner
2. Item yang didapat
3. Waktu
4. ID Riwayat Gacha

- Saat ini, ada beberapa metode yang diketahui untuk mendapatkan parameter-parameter ini:
  1. Memindai file log game untuk menemukan URL riwayat Gacha.
  2. Memantau lalu lintas jaringan lokal untuk menyaring URL riwayat Gacha.
  3. Mencari cache dari browser internal game.
  4. Menggunakan `Cookie` yang berisi `SToken` untuk memanggil `API genAuthKey` dan mendapatkan parameter.
  5. Meminta pengguna untuk memasukkan URL riwayat Gacha secara manual (untuk pengguna mahir).

Setelah data mentah berhasil didapat, Snap Hutao akan menyusunnya menjadi daftar riwayat Gacha yang utuh.

---

## Penyimpanan Riwayat Gacha

Daftar riwayat Gacha yang lengkap akan disimpan dalam sebuah database di komputer Anda.

- Saat Anda memperbarui data, Snap Hutao hanya perlu membandingkan data yang ada dengan data baru yang diambil.
- Dengan cara ini, Anda bisa menyimpan riwayat Gacha secara permanen, bahkan setelah data di server game terhapus.

---

## Format UIGF

> **U**niformed **I**nterchangeable **G**achaLog **F**ormat Standard

`UIGF` adalah sebuah standar format data riwayat Gacha yang kami gagas dan kelola bersama dengan aplikasi-aplikasi sejenis.

Format data yang terstandardisasi memungkinkan Anda memindahkan data dengan bebas antar berbagai aplikasi untuk memanfaatkan fitur unik masing-masing.

### Impor Riwayat Gacha
Dengan format `UIGF`, Anda bisa mengimpor data riwayat Gacha dari aplikasi lain. Snap Hutao hanya akan mengimpor riwayat yang lebih lama dari yang sudah ada untuk melengkapi data Anda.

### Ekspor Riwayat Gacha
Snap Hutao bisa menyimpan riwayat Gacha Anda ke dalam sebuah file berformat `UIGF`. Anda bisa menggunakan file ini di aplikasi lain yang mendukung format yang sama.