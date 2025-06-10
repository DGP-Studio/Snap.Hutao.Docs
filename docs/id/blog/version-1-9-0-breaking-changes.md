---
category: [Dev Logs]
order: 1
comment: false
---

# Penjelasan Perubahan Besar pada Versi 1.9.0

Dokumen ini ditujukan untuk pengguna yang melakukan upgrade dari Snap Hutao versi **1.4.11 hingga 1.8.4** ke versi 1.9.0 atau yang lebih baru.

::: important Dokumen Ini Telah Diarsipkan
Halaman ini telah diarsipkan. Untuk menginstal Snap Hutao, silakan kunjungi halaman [Mulai Cepat](../quick-start.md) untuk informasi lebih lanjut.
:::

## Pengantar

Snap Hutao adalah aplikasi sandbox Windows dalam format MSIX, yang memberikan kemudahan instalasi dan keamanan khas aplikasi AppX. Tanda tangan digital (code signing) yang wajib pada paket instalasi adalah faktor penting dalam menjamin keamanan. Jika paket instalasi dimodifikasi, Windows App Installer akan menampilkan galat karena tanda tangan digitalnya rusak, sehingga pengguna tidak bisa menginstalnya. Praktik ini sudah umum kita lihat di sistem operasi mobile saat ini. Di platform Windows, karena prosedur verifikasi identitas yang ketat, harga sertifikat *code signing* tetap tinggi.

Sebelum versi 1.4.11, Snap Hutao menggunakan sertifikat *self-signed*. Dalam mode ini, pengguna harus secara manual menginstal sertifikat DGP-Studio agar bisa menginstal aplikasi yang ditandatangani oleh sertifikat tersebut. Mulai versi 1.4.11, Snap Hutao terdaftar di Microsoft Store, dan Microsoft memberikan sebuah GUID `35C8E923-85DF-49A7-9172-B39DC6312C52` untuk akun pengembang Hutao. GUID ini digunakan sebagai nama *publisher* Snap Hutao, yang menyediakan tanda tangan digital gratis khusus (hanya untuk aplikasi Microsoft Store). Jika Anda terbiasa memperbarui Snap Hutao dengan paket MSIX, Anda pasti selalu melihat GUID ini di kolom *publisher*.

Terdaftar di Microsoft Store membuat pengguna Snap Hutao tidak perlu lagi menginstal sertifikat secara manual dan mendukung distribusi paket instalasi, sehingga mengurangi biaya yang signifikan bagi tim pengembang. Namun, proses persetujuan yang rumit sering kali mengganggu rencana pengembangan Snap Hutao. Oleh karena itu, selama enam bulan terakhir, tim pengembang telah mencari solusi. SignPath adalah perusahaan yang berbasis di Wina, Austria, yang menyediakan perangkat lunak integrasi *code signing*. Pada awal Desember 2023, tim pengembang Snap Hutao berhasil mendapatkan sponsor dari SignPath Foundation, yang memungkinkan kami menggunakan sertifikat *code signing* mereka secara gratis untuk Snap Hutao. Ini sangat membantu proyek Snap Hutao, tidak hanya memungkinkan kami terbebas dari batasan Microsoft Store, tetapi juga menghindari biaya sertifikat tahunan yang tinggi.

**Karena migrasi ke sertifikat baru ini menyebabkan konflik nama paket, Snap Hutao memberikan penjelasan detail berikut untuk membantu semua pengguna memperbarui ke versi 1.9.0 dan versi mendatang.**

## Upgrade ke Versi 1.9.0

### Rilis Versi

Versi Snap Hutao 1.9.0 dijadwalkan rilis pada akhir pekan sebelum Natal 2023. Kami akan mempublikasikan tautan unduhan paket instalasi melalui GitHub, Jihu GitLab, situs web resmi ini, dan komunitas.

> Versi 1.9.0 telah dirilis, silakan unduh dari halaman [Mulai Cepat](../quick-start.md).

### Hapus Versi Lama

Menginstal paket ini secara langsung akan menyebabkan masalah tergantung pada versi sistem Anda karena adanya konflik nama paket dan tanda tangan digital.

| Versi Sistem | Masalah yang Diharapkan |
| :---: | :---: |
| Windows 10 | Tidak bisa menginstal; konflik tanda tangan dan nama paket |
| Windows 11 | Instalasi berhasil;<br/>Aplikasi akan ada bersamaan dengan versi lama Snap Hutao dengan nama yang sama, menyebabkan galat saat dijalankan |

Karena masalah di atas, Anda perlu **menghapus instalasi Snap Hutao versi lama terlebih dahulu**, baru kemudian menginstal paket versi 1.9.0.

> **Cara menghapus Snap Hutao**: Cari Snap Hutao di Start menu, klik kanan, dan pilih "Uninstall". Cara cepat lainnya adalah mencarinya di Pengaturan Aplikasi Windows dan memilih "Uninstall".

**Data penting Anda (termasuk akun HoYoLAB yang sudah login, riwayat Gacha, data pencapaian, catatan Spiral Abyss, data cache Karakter Saya, dan rencana pengembangan) tidak akan hilang. Data tersebut masih tersimpan di direktori data Hutao lokal di komputer Anda.** Namun, data berikut akan direset:

1. Jumlah berapa kali Snap Hutao dijalankan
2. Lokasi folder data **(jika Anda sebelumnya mengubah lokasi folder data, ingat kembali lokasinya)**
3. Status login akun Hutao (Hutao Passport)
4. Tanda pengumuman Hutao yang sudah ditutup
5. Informasi level preset Rencana Pengembangan
6. Status kartu dasbor di halaman utama
7. Status fungsi klik otomatis

### Instal Versi Baru

![Installer Versi 1.8.5](/images/202312/1-8-5-installer.png)

Jalankan installer versi 1.9.0 yang sudah Anda unduh. Di antarmuka instalasi, Anda akan melihat *publisher* adalah `SignPath Foundation`. Klik "Install" untuk memasang Snap Hutao versi baru!

**Jika Anda mengubah lokasi direktori data di versi lama, Anda perlu memilih kembali lokasi direktori data di pengaturan setelah menjalankan aplikasi untuk memulihkan data. Jika Anda tidak pernah mengatur direktori data, data Anda akan dimuat langsung tanpa pengaturan tambahan.**

## Rencana ke Depan

> Microsoft Store, rilis mendatang, keamanan perangkat lunak...

Di Microsoft Store, nama *publisher* aplikasi harus berupa GUID yang ditetapkan oleh Microsoft, bukan nama "custom" seperti `SignPath Foundation`. Kami memperkirakan tidak akan melanjutkan pembaruan di Microsoft Store di masa mendatang, kecuali jika kami menemukan cara yang lebih baik untuk menangani masalah koexistensi antara paket dengan tanda tangan yang berbeda. Meskipun Snap Hutao tidak lagi melalui sertifikasi Microsoft, di bawah batasan SignPath, Snap Hutao hanya bisa mengompilasi dan membangun paket rilis langsung dari repositori kode GitHub. Ini berarti kode dalam paket instalasi pengguna 100% bersumber dari repositori kode GitHub kami, dan siapa pun berhak untuk meninjau dan berpartisipasi dalam pengembangan.

Mulai dari klien versi 1.9.0, kami akan mengintegrasikan modul pembaruan perangkat lunak untuk beradaptasi dengan metode rilis baru. Kami akan berusaha meminimalkan langkah yang diperlukan pengguna untuk melakukan pembaruan. Karena fitur ini masih baru, kami masih dalam proses penyebaran. Harap terus perhatikan pengumuman di dalam aplikasi dan komunitas kami untuk informasi lebih lanjut!