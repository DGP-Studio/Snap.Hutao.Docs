---
headerDepth: 2
category: [Pengumuman]
icon: iconfont icon-debug
order: 2
comment: false
description: Snap Hutao adalah program sumber terbuka yang dirilis di GitHub, dan kami juga menggunakan fitur GitHub Issues untuk mengumpulkan umpan balik masalah. Anda dapat mengirimkan laporan masalah melalui GitHub Issues.
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/statements/bug-report.html
---

# Mengirimkan Laporan Bug

::: important
Ini adalah terjemahan yang dibuat oleh model Google Gemini, dan kami menerima perbaikan melalui PR.
:::

Jika Anda menemukan masalah yang dapat direproduksi atau tidak dapat diperbaiki sendiri saat menggunakan Snap Hutao, Anda dapat memberi tahu pengembang dengan mengirimkan umpan balik masalah.

![suggestion](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01jXBMbe1g6du15k9kx_!!1797064093.jpg_.webp)

## Sebelum Mengirimkan Issue

Sebelum membuat Issue baru, pastikan Anda telah menyelesaikan daftar periksa berikut:

- [ ] Pastikan Anda menggunakan klien Snap Hutao versi terbaru.
- [ ] Gunakan fungsi pencarian untuk menemukan masalah Anda, dan periksa dokumen [Masalah yang Diketahui](../advanced/known-issue.md).
- [ ] Cari di halaman Issue proyek apakah ada masalah yang sama atau serupa.

Jika setelah langkah-langkah di atas Anda masih belum menemukan solusi, Anda dapat membuat Issue baru di GitHub.

## Cara Mengirimkan Issue

### Persiapan Sebelum Mengirimkan Masalah

Saat mengirimkan Issue, pastikan untuk memberikan informasi berikut:

1. **Informasi Perangkat**

   - [ ] ID perangkat Anda.
   - [ ] Versi sistem operasi Anda.

2. **Deskripsi Masalah**

   - [ ] Jelaskan masalah Anda secara detail, agar pengembang dapat mereproduksi masalah berdasarkan deskripsi Anda.
     - Bagaimana masalah itu dipicu?
     - Pesan kesalahan apa yang ditampilkan oleh program atau sistem operasi?
     - Operasi apa yang telah Anda coba untuk memecahkan masalah, dan bagaimana hasilnya?

3. **Terkait Kerusakan Program**

- Jika masalah Anda terkait dengan kerusakan program, cari `Kesalahan .NET` terkait Snap Hutao di Windows Event Viewer, dan lampirkan detailnya di Issue.

### Metode Mengirimkan Issue

- Buka [Halaman Pengiriman GitHub](https://github.com/DGP-Studio/Snap.Hutao/issues/new/choose).
- Isi konten sesuai dengan templat dan kirimkan.

Jika Anda tidak yakin seperti apa Issue yang baik, silakan lihat beberapa [masalah berkualitas](https://github.com/DGP-Studio/Snap.Hutao/issues?q=is%3Aissue%20label%3A%E4%BC%98%E8%B4%A8%E9%97%AE%E9%A2%98).

## Debug Jarak Jauh

Ketika pengembang tidak dapat mereproduksi masalah tertentu di perangkat mereka sendiri, mereka mungkin perlu melakukan debug jarak jauh untuk menemukan masalah. Jika Anda setuju untuk berpartisipasi dalam debug jarak jauh, administrator yang ditunjuk akan menambahkan Anda sebagai teman melalui QQ dan memasukkan Anda ke dalam grup bantuan jarak jauh untuk komunikasi.

**Komputer yang berpartisipasi dalam debug jarak jauh harus memenuhi kondisi berikut:**

- Setidaknya 15GB ruang hard disk yang tersedia.
- Cukup lalu lintas jaringan untuk mendukung operasi debugging.

### Persiapan Sebelum Debug

1. Lakukan langkah `1～3` pada [Kontribusi Kode - Pengaturan Proyek Snap Hutao](../development/contribute.md#设置-snaphutao-项目).
2. Unduh dan instal alat remote [NetEase UU](https://uuyc.163.com/).

Debug jarak jauh akan membantu kami menyelesaikan masalah dengan lebih cepat, terima kasih atas dukungan Anda!
