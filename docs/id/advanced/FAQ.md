---
headerDepth: 3
icon: iconfont icon-ask
category: [FAQ]
order: 1
comment: false
description: Halaman ini berisi beberapa pertanyaan umum dan solusi terkait masalah jaringan pengguna dan siklus hidup program.
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/advanced/faq.html&has_description=False
---

# Pertanyaan Umum Lainnya

::: important
Ini adalah terjemahan yang dibuat oleh model Google Gemini, dan kami menerima perbaikan melalui PR.
:::

## Cara Membuat Pintasan Desktop Snap Hutao (Mode Non-Administrator)

::: tip Kekuatan Komunitas
Terima kasih kepada [solusi yang diberikan oleh CzHUV](https://github.com/DGP-Studio/Snap.Hutao.Docs/issues/12)
:::

1. Gunakan `Win+R` untuk membuka jendela Run, masukkan `shell:AppsFolder` di kotak input.
   ![Run](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Jj8c6i1g6du728e5A_!!1797064093.png_.webp)
2. Windows akan memunculkan direktori aplikasi, cari Snap Hutao.
3. Klik kanan ikon Snap Hutao, pilih "Buat pintasan".
4. Ikuti petunjuk sistem, dan pintasan akan dibuat di desktop.

## Cara Membuat Pintasan Desktop Snap Hutao (Mode Administrator)

- Masuk ke halaman pengaturan program Snap Hutao, klik tombol "Buat Pintasan" untuk membuat pintasan di desktop dengan hak administrator.

## Cara Membuat Snap Hutao Otomatis Menyala Saat Komputer Dihidupkan

### Metode 1: Melalui File Batch

1. Buat file batch, lihat perintah yang disediakan dalam [Issue ini](https://github.com/DGP-Studio/Snap.Hutao/issues/184), untuk membuat Snap Hutao berjalan langsung dalam mode administrator.
2. Konfigurasikan file batch untuk memulai otomatis dengan cara berikut:

- Buat program tugas terjadwal untuk menjalankan file batch saat sistem dinyalakan.
- Tambahkan file batch ke item startup sistem.

### Metode 2: Menggunakan Alat

- Gunakan program seperti `SkipUAC` untuk membuat Snap Hutao berjalan dalam mode administrator secara diam-diam.

::: warning Perhatian
Metode di atas mungkin tidak berfungsi karena konfigurasi sistem atau masalah lainnya. Snap Hutao tidak secara langsung mendukung fitur otomatis menyala saat komputer dihidupkan, mencoba operasi terkait merupakan risiko yang Anda tanggung sendiri.
:::

## Tidak Dapat Menjalankan Snap Hutao dalam Mode Administrator

> **Cakupan Masalah**: Hanya Terbatas pada Windows 10 Versi di Bawah 22H2

- Saat versi sistem pengguna lebih rendah dari `Windows Build 19045` (yaitu, Windows 10 versi 22H2), Snap Hutao mungkin tidak dapat dijalankan dalam mode administrator.
- **Solusi**: Disarankan untuk meningkatkan sistem ke versi terbaru Windows 10 untuk menghindari masalah kompatibilitas semacam ini.

## Cara Menggunakan Snap Hutao Melalui Proksi Jaringan

> Snap Hutao menyediakan struktur jaringan cloud yang baik untuk memastikan pengguna dapat menikmati layanan berkualitas di seluruh dunia.

1. Konfigurasikan layanan proksi sistem atau perangkat lunak.
2. Disarankan untuk mengaktifkan `Loopback Network`, tutorial detail dapat dilihat [di sini](loopback.md).
