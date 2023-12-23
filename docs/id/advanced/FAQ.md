---
headerDepth: 2
icon: iconfont icon-ask
category:
  - FAQ
order: 1
---

# Pertanyaan Umum

## Cara membuat pintasan desktop (tanpa hak admin)

::: tip Kekuatan Komunitas

Terima kasih kepada [solusi yang diberikan oleh CzHUV](https://github.com/DGP-Studio/Snap.Hutao.Docs/issues/12).

:::

- Gunakan `Win+R` untuk membuka jalan, di dalam jendela masukkan `shell:AppsFolder` ![Run](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Jj8c6i1g6du728e5A_!!1797064093.png)
- Pada jendela pop-up baru, temukan Snap Hutao
- Klik kanan, lalu klik `Buat pintasan`
- Konfirmasikan operasi dan Anda akan mendapatkan pintasan desktop

## Cara membuat pintasan desktop dengan hak Admin

Mulai dari Snap Hutao 1.7.4, Anda dapat membuat pintasan desktop dengan hak Admin dengan mengklik `Buat Pintasan Desktop`
di halaman pengaturan.

Anda dapat memindahkan pintasan ini ke tempat yang Anda butuhkan.

## Cara menjalankan Snap Hutao saat Windows dijalankan

**Ini adalah solusi sementara**

- Buat file bat, kontennya mengacu pada [Issue ini](https://github.com/DGP-Studio/Snap.Hutao/issues/184), ini memungkinkan bat untuk menjalankan Snap Hutao dengan hak Admin
- Buat Tugas Terjadwal, jalankan bat saat Windows startup, atau seret ke folder start Windows

## Menggunakan Snap Hutao untuk memulai game dengan cepat

- Konfigurasi peluncur game di pengaturan
- Tempelkan Snap Hutao di taskbar
- Klik kanan pada Snap Hutao dan Anda akan melihat peluncur cepat

  ![quick-start](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Uu8QzN1g6du6MRp8h_!!1797064093.png)

- Pilih `Lauch Game`, Anda akan diminta memilih akun untuk memulai game

## Menggunakan Snap Hutao dengan Proxy Jaringan

Lihat dokumen [Kesalahan HttpRequestException (502)](exceptions.html#_502-bad-gateway)

## Mojibake di Snap Hutao

- Jika Anda menggunakan Windows 10 dan melihat beberapa tombol tidak ditampilkan dengan benar
  - Anda dapat mengunduh font `Segoe Fluent Icons`
  - Anda perlu menginstalnya untuk semua pengguna
- Anda dapat menemukan font ini dari [Microsoft](https://aka.ms/SegoeFluentIcons)

## Akun MiHoYo BBS Sering Kehilangan Status Login

Snap Hutao menggunakan cookie MiHoYo BBS yang disimpan untuk mempertahankan status login. Jika Anda **keluar** dari akun Anda di browser atau
perangkat lain, cookie akan menjadi tidak valid, dan Snap Hutao juga akan dipaksa keluar, akun akan secara otomatis
dihapus.

Masalah ini juga dapat disebabkan oleh kesalahan jaringan, Anda harus memeriksa ini terlebih dahulu; Jika bukan karena masalah jaringan,
Anda dapat menggunakan `Refresh Cookie` di panel akun; Anda juga dapat menghapus akun Anda secara manual dan menambahkannya kembali.

Sejak Oktober 2022, MiYouShe (BBS Tiongkok) dengan cepat meningkatkan deteksi bot dan mungkin mengatur status risiko pada akun pengguna,
ini dapat menyebabkan Snap Hutao gagal memeriksa validasi cookie

## Akun Game Kehilangan Status Login di Launcher

- Ada dua faktor yang terkait dengan status login akun game: jaringan dan ID perangkat
- Masalah ini biasanya disebabkan oleh:
  - Perubahan alamat IP publik
  - Perubahan adapter jaringan atau alamat MAC adapter jaringan
  - Operasi penyimpanan gagal, tidak ada status login yang sebenarnya yang disimpan (Snap Hutao tidak dapat mendeteksi jika statusnya benar-benar valid)
    - Pastikan untuk masuk ke game setelah masuk
    - Pastikan proses game sudah berhenti setelah menutup game
    - Deteksi akun lagi untuk menyimpan status login Anda

## Snap Hutao Melempar Galat Gagal menambahkan Tugas Terjadwal

Jika Anda menggunakan hak Admin untuk memulai fitur catatan real-time, tugas terjadwal Snap Hutao akan dibuat
sebagai peran Administrator. Saat Anda mengedit pengaturan catatan real-time tanpa hak Admin, program akan
kekurangan hak untuk mengedit pengaturan dan akan melemparkan galat ini.

Jalankan Snap Hutao sebagai Administrator untuk mengedit pengaturan Anda untuk memecahkan masalah ini.

## Terjebak di `Menginstal Kerangka yang Diperlukan` saat Menggunakan Paket MSIX untuk Menginstal

- Ketika sistem pengguna kekurangan kerangka dependensi yang diperlukan, Windows akan mengunduh dan menginstalnya secara otomatis.
  Namun, jika pengguna menonaktifkan Windows Update atau memiliki jaringan buruk, sistem tidak dapat memproses instalasi ini.
  - Pastikan Windows Update diaktifkan; pembaruan Snap Hutao juga mengandalkannya
  - Anda juga dapat mengunduh dan menginstal [dependensi](ttps://d.hut.ao/releases/Dependency) secara manual

## Tidak Dapat Menjalankan Snap Hutao sebagai Administrator

> Masalah ini hanya terjadi pada Windows 10 yang lebih lama dari versi 22H2

- Ketika versi OS pengguna lebih lama dari `Windows Build 19045` (alias Windows 10 22H2), Snap Hutao tidak dapat dijalankan ketika
  dijalankan sebagai Administrator
  - Masalah ini berasal dari kernel Windows, dan sulit untuk dilokalisasi, jadi kami menyarankan Anda untuk memperbarui OS Anda ke versi terbaru

## Cara Memulihkan Berkas Konfigurasi `config.ini`

Dalam kondisi tertentu tertentu (seperti izin folder game yang salah), `config.ini` dapat hilang setelah konversi server.
Ini akan menyebabkan pengguna tidak dapat masuk ke halaman peluncur lanjutan dan meluncurkan game.

Setelah mengidentifikasi versi server di perangkat Anda, Anda dapat secara manual membuat dan mengisi file konfigurasi dengan benar.
Berikut adalah konfigurasi umum

.

::: tabs#game_config_samples

@tab Server Resmi CN

```
[General]
channel=1
cps=mihoyo
game_version=4.1.0
sub_channel=1
plugin_7_version=1.0.0
```

@tab Server Resmi Global

```
[General]
channel=1
cps=mihoyo
game_version=4.1.0
sub_channel=0
plugin_7_version=1.0.0
```

:::

## Cara Cadangan/Pemulihan Data Klien Secara Penuh

::: warning Peringatan Keamanan Data
`Userdata.db` berisi semua data klien, termasuk Cookie MiHoYO BBS, harap simpan file data dengan baik dan JANGAN dibagikan
ke siapa pun.
:::

Salin `Userdata.db` dari folder data Snap Hutao (`%userprofile%/Documents/Hutao` secara default) ke lokasi cadangan Anda, file ini
berisi seluruh data klien.