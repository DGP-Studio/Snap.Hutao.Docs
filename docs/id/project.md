---
headerDepth: 2
category: [Announcement, Project, Features]
comment: false
icon: iconfont icon-workingDirectory
order: 6
description: Snap Hutao adalah proyek program open-source di GitHub, dan kami sangat menghargai kolaborasi dari komunitas untuk menjaga agar proyek ini tetap dinamis.
banner: https://img.alicdn.com/imgextra/i1/1797064093/O1CN01mpzxPR1g6e22IjFMh_!!1797064093.png
---

# Deskripsi Proyek

::: center
![banner](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01eHCaOA1g6e2ZLa3PA_!!1797064093.png_.webp)
<a href="https://trendshift.io/repositories/2009" target="_blank"><img src="https://trendshift.io/api/badge/repositories/2009" alt="DGP-Studio%2FSnap.Hutao | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>
:::

Snap Hutao adalah toolkit Genshin Impact open-source di bawah lisensi MIT, yang dirancang khusus untuk platform Windows modern guna meningkatkan pengalaman bermain bagi para pemain desktop. Dengan menggabungkan sumber daya resmi dengan fitur-fitur baru yang dikembangkan oleh tim, Snap Hutao menawarkan serangkaian alat yang komprehensif dan praktis tanpa bergantung pada perangkat seluler. Selain itu, Snap Hutao secara ketat memastikan keamanan alat dengan tidak merusak atau memodifikasi file game.

Proyek Snap Hutao dikemas menggunakan format MSIX. MSIX adalah format pengemasan aplikasi asli Windows yang menyediakan instalasi, pembaruan, dan penghapusan yang lebih baik. Dengan teknologi *sandboxing*-nya, aplikasi yang dikemas dengan MSIX beroperasi di lingkungan terisolasi, mencegah modifikasi langsung ke sumber daya sistem dan secara signifikan meningkatkan keamanan dan stabilitas sistem. Selain itu, format MSIX memastikan tidak ada file sisa atau entri registri yang tertinggal setelah dihapus, menjaga kebersihan sistem.

## Masalah Desktop Genshin Impact yang Diselesaikan oleh Snap Hutao

| Fitur | Seluler | Desktop | Solusi Snap Hutao |
| :---: | :---: | :---: | :---: |
| **Buka Kunci Frame Rate** | iOS/iPadOS mendukung 120 FPS | Terbatas 60 FPS | [Peluncur Lanjutan - Modul Injeksi](features/game-launcher.md#game-frame-rate-settings) |
| **Ganti Akun Game** | Akun yang login tersimpan | Akun tidak tersimpan setelah logout | [Peluncur Lanjutan - Ganti Akun](features/game-launcher.md#account-saving) |
| **Ganti Server** | T/A | T/A | [Peluncur Lanjutan - Ganti Server](features/game-launcher.md) |
| **Ekspor Riwayat Gacha** | T/A | T/A | [Ekspor Riwayat Gacha](features/wish-export.md) |
| **Check-in Harian** | Klien MiYouShe | Web check-in hanya untuk pengguna global | [Panel Akun - Check-in](features/mhy-account-switch.md) |
| **Catatan Real-time** | Klien MiYouShe | T/A | [Catatan Real-time](features/real-time-notes.md) |
| **Notifikasi Ekspedisi** | Melalui notifikasi game seluler | T/A | [Notifikasi Push Catatan Real-time](features/real-time-notes.md) |
| **Melihat Data Spiral Abyss** | Klien MiYouShe | Hanya web untuk pengguna global | [Spiral Abyss](features/hutao-API.md) |
| **Rencana Pengembangan** | Klien MiYouShe | Hanya web untuk pengguna global | [Rencana Pengembangan](features/develop-plan.md#development-plan) |
| **Status Discord** | T/A | Tersedia di klien global | [Peluncur Lanjutan - Aktivitas Discord](features/game-launcher.md#advanced-launcher) |

## Sumber Daya Proyek

- [Repositori GitHub](https://github.com/DGP-Studio/Snap.Hutao)
- [Lokalisasi Crowdin](https://translate.hut.ao/)
- [Komunitas Pengguna Snap Hutao](community.md)

## Daftar Fitur Lengkap

- [Pengumuman Dalam Game dan Hitung Mundur Acara](features/dashboard.md)
- [Dukungan Login Multi-Akun MiHoYo BBS](features/mhy-account-switch.md)
  - Mendukung login ke MiYouShe dan HoYoLAB melalui web dan Cookie.
  - Dukungan untuk hadiah check-in
- [Peluncur Lanjutan](features/game-launcher.md)
  - Ganti Server
  - Ganti Akun Game
  - Frame Rate Game Kustom
  - Unduh Patch Game
  - Parameter Peluncuran Game Kustom
- [Manajemen Riwayat Gacha](features/wish-export.md)
  - Pembaruan data sekali klik dari data game
  - Impor/Ekspor file data Gacha UIGF
  - Pengatur Waktu Acara Gacha
  - Pencarian Riwayat Acara Gacha
  - Statistik Data Gacha Global
- [Manajemen Pencapaian](features/achievements.md)
  - Segarkan data dari data game
  - Impor/Ekspor file data UIAF
- [Catatan Real-Time](features/real-time-notes.md)
  - Dukungan untuk catatan real-time multi-akun
  - Interval penyegaran yang dapat disesuaikan
  - Notifikasi push asli Windows
- [Karakter Saya](features/character-data.md)
  - Mendukung sinkronisasi data dari berbagai sumber
  - Ekspor data karakter ke clipboard
- [Spiral Abyss/Teater Imaginarium](features/hutao-API.md)
  - Detail monster setiap fase dan Berkah Bulan Abyssal
  - Sinkronisasi data pertempuran detail dari Spiral Abyss saat ini
  - Database Abyss Snap Hutao
    - Tingkat Penggunaan Karakter
    - Tingkat Kemunculan Karakter
    - Statistik Kemunculan Tim
    - Tingkat Kepemilikan Karakter
- [Rencana Pengembangan](features/develop-plan.md)
  - Mendukung pembuatan rencana pengembangan karakter dan senjata dari data real-time dan data WIKI
  - Mendukung berbagai rencana
- Data WIKI
  - [Data Karakter](features/character-wiki.md)
  - [Data Senjata](features/weapon-wiki.md)
  - [Data Monster](features/monster-wiki.md)
- [Sistem Akun Snap Hutao](features/hutao-settings.md#snap-hutao-account)
  - Cadangan data Gacha
  - Prediksi statistik Gacha