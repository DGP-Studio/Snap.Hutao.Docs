---
category: [Dev Logs]
order: 1
comment: false
---

# Penjelasan Perubahan yang Merusak pada Versi 1.9.0

Dokumen ini berlaku untuk pengguna yang melakukan upgrade dari Snap Hutao versi **1.4.11 hingga 1.8.4** ke versi 1.9.0 dan yang lebih tinggi.

## Pengantar

Snap Hutao adalah aplikasi sandbox Windows dalam format MSIX, menyediakan kemudahan instalasi dan keamanan aplikasi AppX. Penandatanganan kode yang wajib dalam paket instalasi adalah faktor penting dalam memastikan keamanan. Jika paket instalasi dimodifikasi, Pemasang Aplikasi Windows akan mengeluarkan kesalahan karena tanda tangan terganggu, mencegah instalasi pengguna. Kita bisa melihat praktik ini di mana-mana dalam sistem operasi mobile saat ini. Di platform Windows, karena prosedur verifikasi identitas yang ketat, harga sertifikat penandatanganan kode tetap tinggi.

Sebelum versi 1.4.11, Snap Hutao menggunakan sertifikat yang ditandatangani sendiri. Dalam mode ini, pengguna harus secara manual menginstal sertifikat DGP-Studio untuk mengizinkan instalasi aplikasi yang ditandatangani oleh sertifikat DGP-Studio di komputer mereka. Mulai dari versi 1.4.11, Snap Hutao terdaftar di Microsoft Store, dan Microsoft memberikan GUID `35C8E923-85DF-49A7-9172-B39DC6312C52` untuk akun pengembang Hutao. GUID ini digunakan sebagai nama penerbit Snap Hutao, menyediakan tanda tangan gratis khusus (hanya digunakan untuk aplikasi Microsoft Store). Jika Anda terbiasa memperbarui Snap Hutao dengan paket MSIX, Anda harus selalu melihat GUID ini di kolom penerbit.

Pendaftaran di Microsoft Store menghilangkan kebutuhan pengguna Snap Hutao untuk secara manual menginstal sertifikat penandatanganan dan mendukung distribusi paket instalasi Snap Hutao, mengurangi sejumlah besar biaya untuk tim pengembangan. Namun, proses persetujuan yang merepotkan sering mengganggu rencana pengembangan Snap Hutao. Oleh karena itu, selama enam bulan terakhir, tim pengembangan telah mencari solusi. SignPath adalah perusahaan yang berbasis di Wina, Austria, yang menyediakan perangkat lunak integrasi penandatanganan kode. Pada awal Desember 2023, tim pengembangan Snap Hutao berhasil mendapatkan sponsor dari SignPath Foundation, memungkinkan kami menggunakan sertifikat penandatanganan kode mereka untuk Snap Hutao tanpa biaya. Ini sangat membantu proyek Snap Hutao tidak hanya membebaskan Snap Hutao dari kendala Microsoft Store tetapi juga menghindari biaya sertifikat tahunan yang tinggi.

**Karena migrasi ke sertifikat baru menyebabkan konflik nama paket, Snap Hutao memberikan penjelasan terperinci berikut untuk membantu semua pengguna dalam memperbarui ke versi 1.9.0 dan versi mendatang.**

## Upgrade ke Versi 1.9.0

### Rilis Versi

Snap Hutao versi 1.9.0 dijadwalkan akan rilis pada akhir pekan sebelum Natal 2023. Kami akan mempublikasikan tautan unduh untuk paket instalasi melalui GitHub, Jihu GitLab, situs web resmi ini, dan komunitas.

> Versi 1.9.0 sudah di rilis, mohon unduh dari [Quick Start](../quick-start.md) page.

### Hapus Versi Lama

Langsung menginstal paket ini akan menyebabkan masalah tergantung pada versi sistem Anda karena konflik nama paket dan tanda tangan.

| Versi Sistem |                                                       Masalah yang Diharapkan                                                        |
| :----------: | :----------------------------------------------------------------------------------------------------------------------------------: |
|  Windows 10  |                                      Tidak dapat diinstal; konflik tanda tangan dan nama paket                                       |
|  Windows 11  | Instalasi berhasil;<br/>Koeksistensi dengan versi Snap Hutao lama dengan nama yang sama menyebabkan kesalahan waktu jalannya program |

Karena masalah di atas, Anda perlu menghapus versi Snap Hutao lama terlebih dahulu dan kemudian menginstal paket versi 1.9.0.

> **Cara menghapus Snap Hutao**: Temukan Snap Hutao di menu Start, klik kanan, dan pilih uninstall; metode lainnya adalah menemukannya di Pengaturan Aplikasi Windows dan pilih uninstall.

**Data penting Anda (termasuk akun miHoYo yang sudah masuk, catatan wish, data achievement, catatan Spiral Abyss, data cache My Character, dan rencana pengembangan) tidak akan hilang, mereka masih disimpan dalam direktori data Hutao lokal di komputer Anda.** Namun, data berikut akan direset:

1. Jumlah runtime Snap Hutao
2. Jalur folder data **(jika Anda sebelumnya mengubah jalur direktori data, ingat jalur direktori data Anda)**
3. Status login akun Hutao (Hutao Passport)
4. Flag pengumuman Hutao tertutup
5. Informasi level preset rencana pengembangan
6. Status kartu dashboard di halaman utama
7. Status fungsi klik otomatis

### Instalasi Versi Baru

![Pemasang Versi 1.8.5](/images/202312/1-8-5-installer.png)

Jalankan pemasang versi 1.9.0 yang sudah Anda unduh. Di antarmuka instalasi, Anda seharusnya melihat penerbitnya sebagai `SignPath Foundation`. Klik instal untuk menginstal versi Snap Hutao yang benar-benar baru!

**Jika Anda mengubah lokasi direktori data dalam versi lama, Anda perlu memilih kembali jalur direktori data dalam pengaturan setelah mulai untuk memulihkan data. Jika Anda belum pernah menetapkan direktori data, data Anda akan dimuat langsung tanpa setup tambahan.**

## Rencana Masa Depan

> Microsoft Store, perilisan mendatang, keamanan perangkat lunak...

Di Microsoft Store, nama penerbit aplikasi harus menjadi GUID yang diberikan oleh Microsoft, bukan nama "kustom" seperti `SignPath Foundation`. Kami mengantisipasi bahwa kami tidak akan melanjutkan untuk merilis pembaruan di Microsoft Store di masa depan kecuali kami memiliki cara yang lebih baik untuk menangani masalah koeksistensi antara paket tanda tangan yang berbeda. Meskipun Snap Hutao tidak akan lagi melalui sertifikasi Microsoft, di bawah pembatasan SignPath, Snap Hutao hanya akan dapat mengompilasi dan membangun paket rilis langsung dari repositori kode GitHub. Ini berarti kode dalam paket instalasi pengguna 100% bersumber dari repositori kode GitHub kami, dan siapa pun memiliki otoritas untuk meninjau dan berpartisipasi dalam pengembangan.

Mulai dari versi 1.9.0 dari klien, kami akan mengintegrasikan modul pembaruan perangkat lunak untuk beradaptasi dengan metode rilis baru. Kami akan meminimalkan operasi yang diperlukan untuk pembaruan pengguna sebanyak mungkin. Karena fitur ini benar-benar baru, kami masih dalam proses implementasi. Silakan terus perhatikan pengumuman dalam aplikasi kami dan komunitas untuk informasi lebih lanjut!
