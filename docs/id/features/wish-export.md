---
headerDepth: 0
category: [Fitur, Tutorial]
tag: [riwayat harapan, gacha, harapan]
order: 4
comment: false
---

# Riwayat Harapan

Gacha adalah salah satu gameplay inti dalam Genshin Impact. Baik itu untuk tujuan perayaan dan pamer, atau untuk perencanaan serius strategi gacha, sangat penting untuk melakukan analisis statistik pada riwayat gacha historis.
Namun, Genshin Impact hanya menyediakan pemain dengan enam bulan riwayat gacha, yang tidak ramah pengguna ~~(meskipun mereka masih melacak berapa banyak merpati Timmie yang telah Anda bunuh sepanjang tahun)~~.

Oleh karena itu, kita perlu menggunakan catatan gacha dari enam bulan ini untuk mengambil data dan mentransfer rekaman ke perangkat lokal kita. Ini adalah tujuan dari fitur ekspor riwayat harapan di Snap Hutao.

Mengenai prinsip teknis dari mengekspor catatan gacha Genshin Impact, Anda dapat merujuk ke artikel kami tentang [Sistem Gacha dan Prinsip Ekspor](../advanced/Sistem-gacha-dan-prinsip-ekspor.html)

![ekspor harapan](https://img.alicdn.com/imgextra/i1/1797064093/O1CN01AYR3I41g6dyGBmAw5_!!1797064093.png_.webp)

**Seperti yang ditunjukkan pada gambar di atas, melalui fitur riwayat harapan di Snap Hutao, Anda dapat dengan jelas mendapatkan informasi berikut:
jumlah total harapan, jumlah pity saat ini, kuantitas dan persentase item yang diperoleh dengan rarity yang berbeda, jumlah kali item rarity 5 bintang tidak diperoleh, dan status pity saat ini.**

**Selain itu, pengguna dengan Hutao Cloud dapat melihat data prediksi yang dihitung oleh server Hutao Cloud**

::: note Keterlambatan dalam Ekspor Data Gacha

Snap Hutao mengambil catatan gacha dari server MiHoYo, yang berarti bahwa harapan yang baru saja dibuat mungkin tidak segera tersedia. Ketika Anda melihat batch terbaru dari catatan gacha dalam riwayat game sendiri, maka Anda dapat memperoleh statistik yang sesuai dari Snap Hutao.

:::

## Ambil Riwayat Harapan

### Refresh dengan SToken Cookie <Badge text="Direkomendasikan" type="tip" />

::: info Petunjuk

- Metode ini memerlukan pengguna untuk masuk ke akun MiHoYo BBS di Snap Hutao, lihat [MiHoYo BBS Account Switch](mhy-account-switch.md) untuk mengetahui cara masuk ke akun MiHoYo BBS Anda
- **Metode pembaruan SToken Cookie tidak mendukung server global (HoYoLAB)**

:::

- Pastikan akun yang ingin Anda perbarui riwayat harapannya sudah masuk ke Snap Hutao
- Beralih ke halaman fitur `Riwayat Harapan` di Snap Hutao
- Klik tombol `Refresh` dan pilih `SToken Refresh`
- Tunggu hingga tugas pembaruan selesai

### Refresh dengan Web Cache <Badge text="Didukung Server Global" type="tip" />

- Beralih ke halaman fitur `Riwayat Harapan` di Snap Hutao
- Mulai permainan, pergi ke halaman riwayat harapan dalam permainan
- Kembali ke Snap Hutao, klik tombol `Refresh` dan pilih `Refresh dengan Web Cache`
- Tunggu hingga tugas pembaruan selesai

::: tip
Jika kesalahan terus terjadi:

- Pergi ke halaman pengaturan di Snap Hutao
- Jalankan operasi `Hapus cache web browser yang tertanam di permainan`

:::

### Refresh dengan Input URL Manual <Badge text="Didukung Server Global" type="tip" />

- Jika Anda memiliki URL riwayat harapan pribadi, Anda dapat memilih `Input Manual` dan submit URL riwayat harapan Anda
- Harap diketahui bahwa URL ini bersifat waktu-sensitif

### Penjelasan pada Opsi Full Refresh

Secara default, Snap Hutao akan berhenti mengimpor catatan gacha begitu cocok dengan ID Harapan yang sudah ada secara lokal.
Namun, jika Anda ingin mendapatkan semua catatan historis dari server Genshin Impact
(bahkan jika sudah ada dalam riwayat harapan lokal Anda), Anda dapat memeriksa opsi "Full Refresh".

Tidak memilih `Full Refresh` **tidak** akan membuat Anda kehilangan data harapan Anda,
dan memilih `Full Refresh` **tidak** akan membuat catatan lokal Anda secara keliru menc

atat data harapan yang sama dua kali.

### Impor Data Riwayat Harapan dari Aplikasi Lain <Badge text="UIGF" type="info" />

Snap Hutao mendukung impor file data riwayat harapan dalam format data `UIGF`[^UIGF-Org]

Jika Anda perlu mengimpor jenis data seperti itu, Anda bisa:

- Mulai Snap Hutao, beralih ke halaman fitur `Riwayat Harapan`
- Pilih `Impor`
- Pilih file data Json UIGF Anda
- Periksa informasi file yang diimpor dan konfirmasikan untuk diimpor

## Ekspor Data Riwayat Harapan <Badge text="UIGF" type="info" />

Snap Hutao mendukung ekspor data riwayat harapan ke file Json yang ditulis dalam format data UIGF

Jika Anda perlu mengekspor data riwayat harapan, Anda bisa:

- Memulai Snap Hutao, beralih ke halaman fitur `Riwayat Harapan`
- Beralih ke arsip yang ingin Anda ekspor, dan pilih `Ekspor`
  - Dalam jendela pop-up, konfirmasikan jalur ekspor Anda
- Konfirmasikan dan ekspor data

## Sinkronisasi Awan Riwayat Harapan <Badge text="Beta" type="info" />

> Sinkronisasi awan riwayat harapan dirancang di atas Akun Snap Hutao.
> Anda perlu [mendaftar akun dalam pengaturan](hutao-settings#snap-hutao-account) untuk menggunakan fitur ini

Dengan fitur ini, Anda dapat mengunggah riwayat harapan Anda ke Hutao Cloud, untuk menghindari risiko kehilangan data, dan membuatnya lebih mudah untuk mentransfer data antar perangkat.

### Hak Sinkronisasi Awan

Sinkronisasi awan adalah layanan yang menggunakan sumber daya server Snap Hutao, sehingga ini adalah fitur berbatas waktu.
Saat ini, Anda memiliki beberapa cara untuk mengaktifkan Sinkronisasi Awan:

1. Berikan donasi kepada kami di AiFaDian. Hak istimewa akan secara otomatis diberikan ke Akun Snap Hutao dengan alamat email yang sama di AiFaDian
2. Bagi semua pengguna terdaftar, setelah mengunggah rekaman Abyss dalam setiap jadwal, hak istimewa 3 hari akan secara otomatis diberikan
   - Ini adalah metode yang dapat Anda gunakan secara terus-menerus untuk keuntungan dari Hutao Cloud
3. Pengguna yang berkontribusi pada komunitas open-source kami, termasuk pengembangan kode, perancangan program, terjemahan lokal, dapat menghubungi tim pengembang untuk mendapatkan manfaat Anda secara gratis
   - Kami sedang merancang sistem otomatisasi untuk memberikan lisensi kepada kontributor kami, itu akan aktif dengan lebih banyak pengembangan Hutao Cloud

Setelah hak istimewa Hutao Cloud Anda kedaluwarsa, Anda tidak akan bisa mengunggah, mengunduh, atau menghapus data Anda, tetapi data Anda tidak akan dihapus. Anda dapat terus mengoperasikannya setelah mendapatkan hak istimewa Anda kembali.

### Unggah

- Dalam halaman ekspor harapan, pilih arsip yang perlu Anda sinkronkan data
- Klik tombol `Snap Hutao Cloud` di kanan atas
- Klik `Unggah Arsip Harapan Saat Ini`, dan kemudian data Anda akan disimpan ke cloud

### Unduh

- Dalam halaman ekspor harapan, klik tombol `Snap Hutao Cloud` di kanan atas
- Klik tombol unduh di sisi kanan UID yang data perlu diunduh

### Hapus

- Dalam halaman ekspor harapan, klik tombol `Snap Hutao Cloud` di kanan atas
- Klik tombol hapus di sisi kanan UID yang data perlu dihapus

[^UIGF-Org]: Format Data Genshin Terstandarisasi Bersatu disediakan oleh [UIGF-Org](https://uigf.org/)