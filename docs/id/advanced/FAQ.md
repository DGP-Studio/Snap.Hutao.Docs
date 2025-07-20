---
headerDepth: 3
icon: iconfont icon-ask
category: [FAQ]
order: 1
comment: false
description: Halaman ini berisi jawaban untuk pertanyaan umum seputar masalah jaringan dan penggunaan program Snap Hutao.
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/en/advanced/faq.html&has_description=False
---

# Pertanyaan Umum Lainnya

## Bagaimana Cara Membuat Pintasan Desktop (Mode Non-Administrator)?

::: tip Tips dari Komunitas
Terima kasih kepada [CzHUV yang memberikan solusi ini](https://github.com/DGP-Studio/Snap.Hutao.Docs/issues/12).
:::

1. Tekan `Win+R` untuk membuka jendela Run, lalu ketik `shell:AppsFolder` dan tekan Enter.
   ![Run](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Jj8c6i1g6du728e5A_!!1797064093.png_.webp)
2. Windows akan membuka folder aplikasi. Cari ikon Snap Hutao.
3. Klik kanan ikon tersebut, lalu pilih "Create shortcut".
4. Ikuti petunjuk sistem untuk membuat pintasan di desktop.

## Bagaimana Cara Membuat Pintasan Desktop (Mode Administrator)?

- Buka Snap Hutao, masuk ke halaman Pengaturan, lalu klik tombol "Create shortcut". Ini akan membuat pintasan di desktop yang akan selalu berjalan dengan hak administrator.

## Bagaimana Cara Membuat Snap Hutao Berjalan Otomatis Saat Komputer Nyala?

### Metode 1: Menggunakan File Batch
1. Buat sebuah file batch. Lihat contoh perintah di [Isu ini](https://github.com/DGP-Studio/Snap.Hutao/issues/184) untuk membuat Snap Hutao berjalan langsung sebagai administrator.
2. Atur agar file batch tersebut berjalan otomatis, misalnya dengan:
   - Membuat tugas terjadwal (Task Scheduler) untuk menjalankannya saat startup.
   - Menambahkan file batch ke folder startup sistem.

### Metode 2: Menggunakan Alat Bantu
- Gunakan program seperti `SkipUAC` untuk membuat Snap Hutao berjalan sebagai administrator tanpa memunculkan prompt UAC.

::: warning Catatan
Metode di atas mungkin gagal tergantung konfigurasi sistem. Snap Hutao tidak secara resmi mendukung fitur startup otomatis; risiko dari pengubahan ini ditanggung oleh Anda sendiri.
:::

## Tidak Bisa Menjalankan Snap Hutao sebagai Administrator?

> **Masalah ini terjadi pada**: Windows 10 versi lama (sebelum versi 22H2).

- Jika versi Windows Anda lebih rendah dari `Windows Build 19045` (Windows 10 22H2), Anda mungkin tidak bisa menjalankan Snap Hutao sebagai administrator.
- **Solusi**: Disarankan untuk memperbarui sistem Anda ke versi terbaru Windows 10 untuk menghindari masalah kompatibilitas ini.

## Bagaimana Cara Menggunakan Snap Hutao dengan Proxy?

> Snap Hutao memiliki infrastruktur cloud yang baik untuk memastikan pengguna di seluruh dunia bisa menikmati layanan berkualitas.

1. Konfigurasikan layanan proxy di sistem atau aplikasi Anda.
2. Sangat disarankan untuk mengikuti panduan **[Jaringan Loopback](loopback.md)** untuk memberi izin koneksi.

# Gagal membuat ikon notifikasi

Buka PowerShell dan jalankan perintah di bawah ini untuk memperbaiki masalah

```PowerShell 
irm hut.ao/install.ps1 | iex
```
