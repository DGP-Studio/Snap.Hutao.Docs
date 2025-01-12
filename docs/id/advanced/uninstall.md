---
category: [FAQ]
icon: iconfont icon-delete
tag: [Uninstall]
order: 9
comment: false
description: Mencopot pemasangan Snap Hutao adalah proses yang sederhana dan cepat. Anda dapat mengikuti tutorial di halaman ini untuk mencopot pemasangan Snap Hutao dengan cara yang paling sesuai untuk Anda.
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/advanced/uninstall.html&has_description=False
---

# Mencopot Pemasangan Snap Hutao

::: important
Ini adalah terjemahan yang dibuat oleh model Google Gemini, dan kami menerima perbaikan melalui PR.
:::

Mencopot pemasangan Snap Hutao adalah proses yang sederhana. Jika Anda ingin sepenuhnya menghapus program dan data terkaitnya, ikuti langkah-langkah berikut:

## Mencopot Aplikasi Snap Hutao

1. Buka **Menu Mulai**.
2. Cari `Snap Hutao`.
3. Klik kanan Snap Hutao dan pilih **"Copot pemasangan"**.

## Menghapus Folder Data (Jika Ingin Mencopot Pemasangan Sepenuhnya)

1. Buka File Explorer.
2. Buka jalur berikut: `%userprofile%/Documents/Hutao`.
3. Hapus folder `Hutao`.

## Pertanyaan Umum

### Mengapa muncul dialog "Perlu aplikasi baru untuk membuka" ?

![uninstall-error](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01b3j0eY1g6duBXLJXg_!!1797064093.jpg_.webp)

Jika setelah mencopot pemasangan Snap Hutao muncul pesan "Perlu aplikasi baru untuk membuka tautan hutao ini" seperti yang ditunjukkan pada gambar di atas, ini berarti tugas terjadwal untuk Catatan Real-time belum dihapus sebelum pencopotan pemasangan. Masalah ini hanya muncul pada Snap Hutao versi lama.

Solusi:

1. Instal ulang Snap Hutao.
2. Hapus tugas terjadwal Catatan Real-time di pengaturan.
3. Copot pemasangan Snap Hutao lagi.

Jika Anda tidak dapat menemukan tugas terkait di tugas terjadwal sistem tetapi masalah masih berlanjut, silakan merujuk ke [dokumen ini](https://github.com/DGP-Studio/Snap.Hutao.Docs/issues/18) untuk solusi lebih lanjut.

### Bagaimana cara mencadangkan/memulihkan data klien secara lengkap?

::: warning Tips Keamanan Data
File `Userdata.db` berisi semua data klien Anda, termasuk Cookie forum miHoYo yang sensitif terhadap keamanan. Harap simpan file ini dengan aman dan jangan bagikan dengan orang lain.
:::

#### Mencadangkan Data

1. Buka direktori data Hutao (jalur default adalah `%userprofile%/Documents/Hutao`).
2. Salin file `Userdata.db` di dalam folder ke lokasi cadangan pilihan Anda.

#### Memulihkan Data

1. Salin file `Userdata.db` yang dicadangkan kembali ke direktori data Hutao.
2. Luncurkan Snap Hutao untuk memulihkan data Anda.

Dengan langkah-langkah di atas, Anda dapat dengan aman mencadangkan atau memulihkan semua data Snap Hutao.
