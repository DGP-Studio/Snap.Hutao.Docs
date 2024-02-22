```markdown
---
headerDepth: 0
category: [Fitur, Tutorial]
tag:
  [Snap Hutao Cloud, Verifikasi Geetest, Pengaturan Bahasa, Pengaturan Lanjutan]
order: 14
comment: false
---

# Pengaturan Perangkat Lunak

::: info

- Tutorial fitur berikut disajikan sesuai dengan urutan dalam program.

:::

## Tentang Snap Hutao

Bagian ini berisi informasi berikut:

- Ikon Snap Hutao: Anda dapat menemukan gambar asli ikon di [halaman utama](/)
  - Seniman: [画画的芦苇 (BiliBili)](https://space.bilibili.com/274422134)
    ::: details Proses Pembuatan
    <BiliBili bvid="BV1UL411d7Py" />
    :::
  - [DGP-Studio](https://github.com/DGP-Studio) memiliki izin dari pemilik untuk menggunakannya untuk Proyek Snap Hutao
- Versi klien Snap Hutao
- ID Perangkat

## Akun Snap Hutao <Badge text="Beta" type="info" />

![Akun-hutao](https://img.alicdn.com/imgextra/i1/1797064093/O1CN01LtqGEF1g6dy9LMxCm_!!1797064093.png_.webp)
Sistem akun Snap Hutao dirancang oleh DGP-Studio untuk menyediakan komponen dasar bagi layanan cloud seperti cadangan riwayat wish.
Saat ini, Anda sudah dapat mendaftar dan masuk ke akun Snap Hutao Anda di halaman pengaturan.

## Pengalaman Shell

- Buat Pintasan Desktop
  - Snap Hutao akan membuat pintasan dengan hak akses Administrator di desktop pengguna

## Penampilan

- Bahasa

  - Secara default, Snap Hutao akan mengikuti pengaturan bahasa sistem
  - Anda dapat memaksa untuk mengubah ke bahasa lain di halaman pengaturan

- Materi Latar Belakang
  - Di opsi ini, Anda dapat mengubah materi latar belakang perangkat lunak menjadi
    - Akrilik
    - Mika (hanya Windows 11)
    - MikaAlt (hanya Windows 11)
  - Pengaturan ini akan langsung berlaku

## Beranda

- Kartu Dasbor
  - Anda dapat mengklik opsi ini untuk beralih tampilan kartu di Beranda Dasbor
    - Game Launcher
    - Riwayat Wish
    - Pencapaian
    - Catatan Realtime

## Game

- Path Game

  - Di bidang ini, Anda dapat memodifikasi atau mengatur path game Anda untuk Snap Hutao
  - Saat mengatur path game, Anda harus memilih program game bukan program peluncur
    - Seperti `$\Genshin Impact\Genshin Impact Game\YuanShen.exe`

- Path PowerShell

  - Snap Hutao menggunakan PowerShell untuk memodifikasi bidang registri Genshin Impact untuk beralih akun game. Opsi ini memungkinkan pengguna memilih path PowerShell untuk memperbaiki masalah ketika path PowerShell tidak dapat ditemukan secara otomatis

- Hapus Cache Web Browser Game
  - Ketika Anda menggunakan metode pembaruan cache web dalam fitur riwayat wish dan menerima kesalahan kedaluwarsa authkey, Anda dapat mencoba operasi ini untuk memperbaiki kesalahan tersebut
  - Klik bidang ini untuk mengeksekusi operasi

## Riwayat Wish

- Di bidang ini, Anda dapat memilih untuk menyembunyikan peristiwa wish yang tidak memiliki catatan dalam periode tertentu dalam fitur ekspor wish

## Verifikasi Geetest

MiYouShe menggunakan verifikasi Geetest untuk memblokir permintaan bukan dari operasi manusia nyata, sehingga beberapa permintaan dari Snap Hutao, seperti klaim hadiah check-in dan pengambilan data Catatan Realtime, mungkin gagal karena dianggap sebagai operasi robot.
Jika Anda memiliki layanan pihak ketiga untuk melewati verifikasi Geetest, Anda dapat mengonfigurasi pengaturan ini untuk melewati parameter verifikasi ke penyedia layanan yang Anda gunakan.

Berhasil mengonfigurasi pengaturan ini akan membantu Snap Hutao melewati verifikasi saat mengambil data dari Catatan Realtime dan mengklaim hadiah check-in, serta menghindari kesalahan `-1034` dari MiYouShe.

## Penyimpanan

- Buka Folder Data
  - Klik bidang ini untuk membuka folder data yang berisi data pengguna, log, dan metadata
- Ubah Direktori Data
  - Bidang ini memungkinkan Anda mengubah direktori data menjadi path yang Anda inginkan
- Buka Folder Cache
  - Klik bidang ini akan membuka folder cache yang menyimpan aset gambar yang digunakan oleh Snap Hutao
- Reset Sumber Daya Gambar
  - Opsi ini memungkinkan pengguna untuk mereset cache gambar saat terlalu banyak gambar gagal dimuat. Program akan
    mengunduh ulang sumber daya gambar saat mulai berikutnya

## Fitur Berbahaya

- Aktifkan Fitur Lanjutan
  - Dengan Snap Hutao berjalan sebagai administrator, Anda dapat mengaktifkan bidang ini untuk mengaktifkan fitur lanjutan di peluncur game
    > Untuk referensi:
    >
    > [Ketentuan Layanan Snap Hutao](../statements/tos.html)
    >
    > [Ketentuan Layanan Genshin Impact (server CN/Chinese)](https://ys.mihoyo.com/main/company/agreement)
    >
    > [Ketentuan Layanan Genshin Impact (server luar negeri/Inggris)](https://genshin.hoyoverse.com/en/company/terms)
- Hapus Semua Pengguna
  - Menjalankan operasi ini akan menghapus semua data pengguna di Snap Hutao
  - Klik pada bidang ini untuk beroperasi, Anda akan diminta untuk konfirmasi
  - Dalam sebagian besar skenario, Anda tidak perlu menggunakan bidang ini
```
