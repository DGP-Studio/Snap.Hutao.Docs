---
headerDepth: 2
category: [Announcement]
icon: iconfont icon-debug
order: 2
comment: false
description: Snap Hutao adalah program open-source yang dirilis di GitHub. Kami juga menggunakan fitur GitHub Issues untuk mengumpulkan umpan balik dan mengatasi masalah apa pun. Anda dapat mengirimkan laporan masalah melalui GitHub Issues.
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/en/statements/bug-report.html
---

# Mengirimkan Laporan Bug

Jika Anda mengalami masalah yang dapat direproduksi atau yang tidak dapat Anda perbaiki sendiri saat menggunakan Snap Hutao, Anda dapat memberi tahu pengembang dengan mengirimkan laporan bug.

![suggestion](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01jXBMbe1g6du15k9kx_!!1797064093.jpg_.webp)

## Sebelum Mengirimkan Isu

Sebelum membuat Isu baru, harap lengkapi daftar periksa berikut:

- [ ] Pastikan Anda menggunakan versi terbaru dari klien Snap Hutao.
- [ ] Gunakan fungsi pencarian untuk mencari masalah Anda dan periksa dokumen [Masalah yang Diketahui](../advanced/known-issue.md).
- [ ] Cari di halaman Isu proyek untuk melihat apakah ada isu yang sama atau serupa.

Jika Anda masih tidak dapat menemukan solusi setelah menyelesaikan langkah-langkah di atas, Anda dapat membuat Isu baru di GitHub.

## Cara Mengirimkan Isu

### Persiapan Sebelum Mengirimkan Isu

Saat mengirimkan Isu, harap pastikan untuk memberikan informasi berikut:

1. **Informasi Perangkat**

   - [ ] ID perangkat Anda.
   - [ ] Versi sistem operasi Anda.

2. **Deskripsi Isu**

   - [ ] Jelaskan masalah Anda secara detail sehingga pengembang dapat mereproduksi masalah berdasarkan deskripsi Anda.
     - Bagaimana isu tersebut dipicu?
     - Pesan kesalahan seperti apa yang ditampilkan oleh program atau sistem operasi?
     - Langkah-langkah pemecahan masalah apa yang telah Anda coba, dan apa hasilnya?

3. **Informasi Crash Program**

- Jika masalah Anda melibatkan crash program, harap cari `kesalahan .NET` yang terkait dengan Snap Hutao di Windows Event Viewer dan lampirkan konten detailnya di Isu Anda.

### Cara Mengirimkan Isu

- Buka [halaman pengiriman GitHub](https://github.com/DGP-Studio/Snap.Hutao/issues/new/choose).
- Isi konten sesuai dengan template dan kirim.

Jika Anda tidak yakin seperti apa isu yang baik, silakan merujuk ke beberapa [isu berkualitas tinggi](https://github.com/DGP-Studio/Snap.Hutao/issues?q=is%3Aissue%20label%3A%E4%BC%98%E8%B4%A8%E9%97%AE%E9%A2%98).

## Remote Debugging

Ketika pengembang tidak dapat mereproduksi masalah tertentu di perangkat mereka sendiri, mereka mungkin perlu melakukan remote debugging untuk menemukan masalahnya. Jika Anda setuju untuk berpartisipasi dalam remote debugging, administrator yang ditunjuk akan menambahkan Anda sebagai teman melalui QQ/Discord dan mengundang Anda ke grup bantuan jarak jauh untuk komunikasi.

**Komputer yang berpartisipasi dalam remote debugging harus memenuhi ketentuan berikut:**

- Setidaknya 15GB ruang hard drive kosong.
- Lalu lintas jaringan yang cukup untuk mendukung operasi debugging.

### Persiapan Sebelum Debugging

1.  Lakukan langkah `1~3` di [Kontribusi Kode - Menyiapkan Proyek Snap Hutao](../development/contribute.md).
2.  Unduh dan instal alat jarak jauh [ToDesk](https://www.todesk.com/download.html) atau [Parsec](https://parsec.app/).

Remote debugging akan membantu kami menyelesaikan masalah lebih cepat. Terima kasih atas dukungan Anda!