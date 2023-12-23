---
headerDepth: 0
category: [Fitur, Tutorial]
tag: [buka kunci frame rate, ubah server, ganti akun]
order: 3
comment: false
---

# Peluncur Game

![Peluncur Game](https://img.alicdn.com/imgextra/i4/1797064093/O1CN01a8DIs91g6dyJFyg2X_!!1797064093.png_.webp)

- Snap Hutao menawarkan fitur peluncur game canggih yang memungkinkan pengguna untuk meluncurkan game dengan pengaturan yang ditentukan sendiri
- Klik `Game Launcher` pada sidebar untuk masuk ke halaman peluncur game
  - Jika Anda menggunakan fitur ini untuk pertama kalinya, Anda akan diarahkan ke halaman pengaturan Snap Hutao dan diminta untuk menetapkan jalur game Anda
    - Saat memilih jalur game, perhatikan bahwa Anda harus memilih program game bukan program peluncur
      - Seperti `$\Genshin Impact\Genshin Impact Game\YuanShen.exe` dan `$\Genshin Impact\Genshin Impact Game\Genshin Impact.exe`
      - Program peluncur resmi biasanya adalah `$\Genshin Impact\launcher.exe`
- Anda dapat membuat opsi konfigurasi peluncur game di halaman peluncur game, lalu klik tombol `Launcher` di pojok kanan atas untuk meluncurkan game
  - Opsi peluncur dijelaskan dalam dokumen di bawah ini

## Ubah Server

::: tip Catatan Privasi

1. Anda perlu menjalankan Snap Hutao sebagai administrator untuk menggunakan fitur ini
2. Snap Hutao akan membuat folder `ServerCache` di direktori data untuk menyimpan file pengalihan server yang diperlukan

:::

Masuk ke halaman Peluncur Game
Di bidang `General - Sever`, pilih server yang Anda inginkan

- Opsi server yang tersedia saat ini termasuk:

| Opsi           | Server                                                     |
| -------------- | ---------------------------------------------------------- |
| CN Default     | Server Tiongkok Daratan                                     |
| CN Official    | Server Tiongkok Daratan, tanpa perbedaan dengan baris sebelumnya |
| CN NoTapTap    | Server Tiongkok Daratan tanpa metode login akun TapTap |
| BiliBili       | Server Tiongkok dengan sistem akun BiliBili               |
| Global Default | Server HoYoVerse                                           |
| Global Epic    | Server HoYoVerse dengan gerbang pembayaran Epic Store      |
| Global Google  | Server HoYoVerse dengan gerbang pembayaran Google Pay      |

- klik tombol `Launcher` di pojok kanan atas untuk meluncurkan game, Snap Hutao akan mengunduh file yang diperlukan untuk server dan kemudian meluncurkan game

## Ganti Akun Game

::: tip

1. **Akun** yang disebutkan dalam fitur ini adalah akun login game Genshin bukan akun HoYoLAB
2. Fitur ganti akun game saat ini hanya mendukung server CN resmi

:::

|                   | CN        | BiliBili      | Global                                                                                                                   |
| ----------------- | --------- | ------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Simpan Status Login | Didukung | Didukung     | Didukung                                                                                                                |
| Ganti Akun    | Didukung | Tidak Didukung | Teoretis Didukung <br/>[Kami membutuhkan dukungan komunitas untuk ini](https://github.com/DGP-Studio/Snap.Hutao/issues/638) |

1. Masuk ke halaman Peluncur Game
2. Klik bidang `Detect Account` di kategori `General`, Snap Hutao akan mendeteksi status login akun Genshin Impact saat ini
3. Pada jendela pop-up ini, masukkan nama arsip untuk akun ini dan klik `Konfirmasi`
4. Kembali ke game, keluar dan masuk ke akun Anda yang lain. Ulangi langkah 2 dan 3 untuk menambahkan semua akun Anda ke Snap Hutao
   - Setiap akun yang disimpan dapat dipilih
   - Di sisi kanan, ada tiga tombol, yaitu:
     - `Mengikat akun pengguna saat ini`, mengikat akun MiHoYo BBS yang diaktifkan saat ini dengan akun game ini, sebuah UID akan ditampilkan pada arsip ini
     - `Ganti nama`, mengubah nama arsip akun saat ini
     - `Hapus`, menghapus arsip akun saat ini

## Penampilan

::: warning

- Dalam beberapa kasus yang dilaporkan, menggunakan Snap Hutao dengan mode `Exclusive Fullscreen` akan menyebabkan proses game tidak responsif.

  - Saran untuk menggunakan mode `Borderless` atau `Fullscreen` jika Anda mengalami masalah yang sama
  - Masalah ini disebabkan oleh kegagalan browser tertanam dalam game

:::

- Masuk ke halaman Peluncur Game
- Di kategori `Penampilan`, ada 6 opsi yang tersedia:
  - **Exclusive Fullscreen**, proses game akan berjalan dalam mode layar penuh eksklusif
    - **Anda hanya boleh menggunakan opsi ini ketika Anda dapat secara independen menjelaskan prinsip teknis dan efek dari layar penuh eksklusif**
  - **Fullscreen**, mode tampilan game diatur ke layar penuh
  - **Borderless**, mode tampilan game diatur ke mode tanpa batas
  - **Lebar**, lebar jendela game, seperti `1920`
  - **Tinggi**, tinggi jendela game, seperti `1080`
  - **Tampilan**, pengguna dengan beberapa tampilan dapat menggunakan opsi ini untuk menetapkan tampilan mana yang akan menjalankan game

## Unduhan Sumber Daya

Peluncur game di Snap Hutao juga menawarkan fitur unduhan sumber daya, yang mencantumkan paket klien Genshin Impact (server CN) waktu nyata dan paket OTA. Pengguna dapat mengklik ikon hyperlink di samping kanan setiap paket untuk mengarahkan ke browser untuk mengunduhnya dengan alat unduhan favorit pengguna.

Ketika Anda memperbarui klien game, Anda dapat melakukan langkah-langkah berikut:

1. Perbarui peluncur resmi ke versi terbaru
2. Di `Snap Hutao - Game Launcher - Unduhan Sumber Daya`, cari paket OTA klien yang dibutuhkan dan paket OTA bahasa yang diinstal
3. Pindahkan semua paket ke folder tempat klien game berada
4. Mulai peluncur resmi, klik tombol pembaruan. Peluncur akan melewati proses pengunduhan dan langsung memulai proses membuka paket OTA untuk memperbarui klien

## Fitur Lanjutan

::: caution

- Perhatikan: semua fitur lanjutan dilabeli sebagai `Fitur Berbahaya`; mengindikasikan bahwa mengaktifkannya berarti Anda memilih untuk mengasumsikan segala risiko tersebut.
- Anda perlu mengaktifkan fitur lanjutan di halaman pengaturan Snap Hutao

:::

### Buka Kunci Batas Frame Rate

::: caution

- [Proyek Unlocker](https://github.com/DGP-Studio/Unlocker) hanya memengaruhi UnityPlayer itu sendiri, secara langsung mempengaruhi mesin Unity3D, dan tidak memiliki hubungan langsung dengan game itu sendiri. Pada dasarnya, tidak ada perbedaan dari pengaturan seperti 120 FPS pada perangkat seluler. Namun, Anda tetap harus menggunakan fitur ini dengan hati-hati dan membaca [perjanjian pengguna](../statements/tos.md) sendiri.

:::

- Jalankan Snap Hutao sebagai administrator
- Masuk ke halaman Peluncur Game
- Di bagian bawah halaman, Anda dapat menemukan opsi `Buka Kunci Batas Frame Rate`

  - Aktifkan atau nonaktifkan fitur ini dengan memindahkan sakelar
  - Di bidang `Set Batas Frame Rate`, Anda dapat mengatur batas secara bebas

- Faktor yang mungkin menyebabkan **kegagalan membuka kunci batas frame rate**:
  - Proses Snap Hutao tidak dijaga di latar belakang
  - `V-Sync` tidak diatur menjadi off di dalam game
  - Batas `Framerate maksimum` tidak diubah di pengaturan kartu grafis Anda
  - Mode `Penghematan Daya` tidak dinonaktifkan di pengaturan daya
  - Kartu grafis Anda tidak cukup kuat