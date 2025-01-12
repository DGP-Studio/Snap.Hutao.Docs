---
headerDepth: 2
category: [Pengumuman, Proyek, Fitur]
comment: false
icon: iconfont icon-workingDirectory
order: 6
description: Snap Hutao adalah proyek program sumber terbuka di GitHub, kami sangat menerima kolaborasi dari komunitas untuk memberikan lebih banyak vitalitas pada proyek ini.
banner: https://img.alicdn.com/imgextra/i1/1797064093/O1CN01FkOS5H1g6e1z8LCaD_!!1797064093.png
---

# Penjelasan Proyek

::: center
![banner](https://img.alicdn.com/imgextra/i1/1797064093/O1CN01vWmKzl1g6e2VIEODU_!!1797064093.png_.webp)
<a href="https://trendshift.io/repositories/2009" target="_blank"><img src="https://trendshift.io/api/badge/repositories/2009" alt="DGP-Studio%2FSnap.Hutao | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>
:::

::: important
Ini adalah terjemahan yang dibuat oleh model Google Gemini, dan kami menerima perbaikan melalui PR (Pull Request).
:::

Snap Hutao adalah sebuah tool box Genshin Impact sumber terbuka berdasarkan lisensi MIT, yang dirancang khusus untuk platform Windows modern, dengan tujuan untuk meningkatkan pengalaman bermain game bagi para pemain desktop. Dengan mengombinasikan sumber daya resmi dan fitur baru yang dirancang sendiri oleh tim, program ini menyediakan serangkaian alat yang komprehensif dan praktis, tanpa memerlukan perangkat seluler apa pun. Pada saat yang sama, program ini secara ketat mematuhi prinsip non-destruktif, tidak melakukan modifikasi apa pun pada klien game, untuk memastikan keamanan penggunaan tool box ini.

Proyek Snap Hutao dikemas dalam format MSIX. MSIX adalah format pengemasan aplikasi asli Windows, yang memiliki fitur penyederhanaan proses instalasi, pembaruan, dan penghapusan perangkat lunak. Melalui teknologi _sandbox_, aplikasi yang dikemas dengan MSIX berjalan di lingkungan yang terisolasi, menghindari modifikasi langsung pada sumber daya sistem, sehingga secara signifikan meningkatkan keamanan dan stabilitas sistem. Selain itu, format MSIX tidak meninggalkan file sisa atau entri registri setelah dihapus, menjamin kebersihan sistem. Keunggulan ini menjadikan MSIX sebagai alat yang ampuh bagi pengembang dan pengguna untuk mengelola perangkat lunak, serta memberikan pengalaman perangkat lunak yang lancar, aman, dan bersih.

## Kekurangan Genshin Impact di Desktop yang Dapat Diatasi oleh Snap Hutao

|                    Fitur                    | Perangkat Seluler                                 | Desktop                                                                    | Solusi dari Snap Hutao                                                                           |
| :-----------------------------------------: | ------------------------------------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|            **Membuka Batas FPS**            | iOS/iPadOS mendukung 120FPS secara resmi          | Maksimal hanya 60FPS                                                       | [Peluncur Tingkat Lanjut - Modul Injeksi](features/game-launcher.md#pengaturan-fps-game)         |
|          **Pergantian Akun Game**           | Akun yang sudah masuk akan tersimpan              | Akun tidak tersimpan setelah keluar                                        | [Peluncur Tingkat Lanjut - Pergantian Akun](features/game-launcher.md#penyimpanan-akun)          |
|            **Pergantian Server**            | Tidak ada                                         | Tidak ada                                                                  | [Peluncur Tingkat Lanjut - Pergantian Server](features/game-launcher.md)                         |
|           **Ekspor Riwayat Wish**           | Tidak ada                                         | Tidak ada                                                                  | [Ekspor Riwayat Wish](features/wish-export.md)                                                   |
|              **Login Harian**               | Klien MiYouShe                                    | Hanya pemain server internasional yang bisa melakukan login di halaman web | [Panel Akun - Login](features/mhy-account-switch.md)                                             |
|            **Catatan Real-time**            | Klien MiYouShe                                    | Tidak ada                                                                  | [Catatan Real-time](features/real-time-notes.md)                                                 |
| **Notifikasi Push Tugas Ekspedisi Selesai** | Notifikasi push melalui game di perangkat seluler | Tidak ada                                                                  | [Pesan Push Catatan Real-time](features/real-time-notes.md)                                      |
|       **Pencarian Data Spiral Abyss**       | Klien MiYouShe                                    | Hanya pemain server internasional yang bisa melihat di halaman web         | [Spiral Abyss](features/hutao-API.md)                                                            |
|          **Rencana Pengembangan**           | Klien MiYouShe                                    | Hanya pemain server internasional yang bisa menggunakan di halaman web     | [Rencana Pengembangan](features/develop-plan.md#rencana-pengembangan)                            |
|             **Status Discord**              | Tidak ada                                         | Klien server internasional tersedia                                        | [Peluncur Tingkat Lanjut - Aktivitas Discord](features/game-launcher.md#peluncur-tingkat-lanjut) |

## Sumber Daya Proyek

- [Repositori Kode GitHub](https://github.com/DGP-Studio/Snap.Hutao)
- [Terjemahan Lokal Crowdin](https://translate.hut.ao/)
- [Komunitas Pengguna Snap Hutao](community.md)

## Daftar Fitur Lengkap

- [Pengumuman dan Hitung Mundur Dalam Game](features/dashboard.md)
- [Dukungan Login Multi Akun MiHoYo BBS](features/mhy-account-switch.md)
  - Mendukung login ke MiYouShe dan HoYoLAB menggunakan login web dan input Cookie
  - Mendukung hadiah check-in
- [Peluncur Tingkat Lanjut](features/game-launcher.md)
  - Pergantian Server
  - Pergantian Akun Game
  - Kustomisasi FPS Game
  - Unduhan Paket Patch Game
  - Kustomisasi Parameter Peluncuran Game
- [Manajemen Riwayat Wish](features/wish-export.md)
  - Pembaruan data sekali klik dari data game
  - Impor / Ekspor file data Wish UIGF
  - Penghitungan Waktu Event Wish
  - Pencarian Riwayat Event Wish
  - Statistik Data Wish Global
- [Manajemen Achievement](features/achievements.md)
  - Segarkan data dari data game
  - Impor/Ekspor file data UIAF
- [Catatan Real-time](features/real-time-notes.md)
  - Mendukung Catatan Real-time multi akun
  - Kustomisasi Interval Refresh
  - Notifikasi Push Native Windows
- [Karakter Saya](features/character-data.md)
  - Mendukung sinkronisasi data dari multi sumber
  - Ekspor data Karakter Saya ke _clipboard_
- [Spiral Abyss/Teater Fantasi](features/hutao-API.md)
  - Detail monster dan berkah setiap periode
  - Sinkronisasi data pertempuran detail Spiral Abyss
  - Basis Data Abyss Snap Hutao
    - Tingkat Penggunaan Karakter
    - Tingkat Kemunculan Karakter
    - Statistik Kemunculan Tim
    - Tingkat Kepemilikan Karakter
- [Rencana Pengembangan](features/develop-plan.md)
  - Mendukung pembuatan rencana pengembangan karakter dan senjata dari data real-time dan data WIKI
  - Mendukung arsip multi rencana
- Data WIKI
  - [Data Karakter](features/character-wiki.md)
  - [Data Senjata](features/weapon-wiki.md)
  - [Data Monster](features/monster-wiki.md)
- [Sistem Akun Snap Hutao](features/hutao-settings.md#akun-snap-hutao)
  - Pencadangan Data Wish
  - Prediksi Statistik Wish
