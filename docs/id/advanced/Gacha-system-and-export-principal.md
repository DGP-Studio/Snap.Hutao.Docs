---
headerDepth: 2
category:
  - FAQ
icon: iconfont icon-read
order: 8
comment: false
---

# Sistem Gacha dan Prinsip Expor

Sistem Gacha di Hutao mengalami redesain total dalam hal arsitektur dibandingkan dengan Snap Genshin.

Dokumen ini akan menjelaskan mekanisme catatan gacha dalam Genshin Impact dan prinsip teknis fungsi ekspor catatan gacha dalam Toolbox Hutao.

## Perolehan Catatan Gacha

Untuk mendapatkan catatan gacha, perlu dilakukan permintaan ke API milik miHoYo.

Berikut adalah beberapa poin penting mengenai API ini:

- Melalui API server miHoYo, kita hanya dapat mengakses catatan gacha dalam 6 bulan terakhir.
  - Ini juga merupakan sumber catatan gacha di aplikasi Genshin Impact.
- API ini memiliki batasan kecepatan permintaan; permintaan terlalu cepat dapat menyebabkan kegagalan permintaan berikutnya dan kegagalan mendapatkan data dengan normal.

Untuk melakukan permintaan ke API ini, kita memerlukan empat parameter kunci.

- Saat ini, ada beberapa metode untuk mendapatkan parameter-parameter ini:
  - Melalui log file Unity, mencari URL catatan gacha yang dibuka pengguna.
  - Memantau lalu lintas lokal, menyaring URL catatan gacha.
  - Mencari cache browser CefBrowser, menemukan URL catatan gacha.
  - Dengan menggunakan Cookie yang berisi Stoken, memanggil API genAuthKey untuk mendapatkan parameter-parameter ini.
  - Pengguna lanjutan dapat memasukkan URL terkait secara manual.

Setelah mendapatkan data dari API, kita mendapatkan catatan gacha yang tersebar, dan dengan menggabungkannya, kita bisa mendapatkan daftar catatan gacha lengkap.

## Penyimpanan Catatan Gacha

Setelah mendapatkan daftar catatan gacha lengkap, kita dapat menyederhanakannya dengan melakukan serialisasi ke dalam database lokal. Data ini dapat di-deserialisasi dari database saat diperlukan dan ditampilkan kepada pengguna.

Permintaan selanjutnya ke server hanya perlu membandingkan data di database dengan data baru yang diterima.

Dengan cara ini, pengguna dapat menyimpan catatan gacha akun mereka dalam jangka panjang.

## Format UIGF

> Uniformed Interchangeable GachaLog Format

UIGF adalah standar data pertukaran catatan gacha yang telah kami advokasi, luncurkan, dan **selalu kami pertahankan** bersama aplikasi catatan gacha lainnya.

Dengan format data yang terstandarisasi, pengguna dapat memindahkan catatan gacha mereka antar berbagai alat Genshin Impact untuk menggunakan fitur khusus masing-masing.

### Impor Catatan Gacha

Dengan menggunakan format data UIGF, pengguna dapat mengimpor data yang pernah disimpan dalam aplikasi lain.

Saat Hutao memproses impor, ia akan membandingkan indeks (ID) yang paling awal yang ada dalam penyimpanan lokal dan hanya mengimpor data yang lebih lama.

(Karena data asli yang lebih baru selalu dapat diambil dari server miHoYo, data semacam ini memiliki tingkat akurasi yang lebih tinggi.)

### Ekspor Catatan Gacha

~~Belum diimplementasikan, sedang dalam perancangan~~ Sudah diimplementasikan
