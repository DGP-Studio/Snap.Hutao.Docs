---
headerDepth: 2
category: [Feature, Tutorial]
order: 3
tag: [feedback, issue]
comment: false
description: Pusat Umpan Balik bawaan di Snap Hutao mencakup tautan-tautan penting yang terkait dengan proyek Snap Hutao dan menggabungkan mesin pencari dokumen, membantu pengguna dengan cepat menyelesaikan masalah umum.
---

# Pusat Umpan Balik

![dasbor](https://img.alicdn.com/imgextra/i4/1797064093/O1CN01yGGrhz1g6e0u3q5L6_!!1797064093.png_.webp)

Pusat Umpan Balik adalah halaman fitur yang disediakan oleh tim pengembang Snap Hutao untuk membantu pengguna menyelesaikan masalah umum. Halaman ini ditata dengan struktur kiri-kanan.

## Fungsionalitas Sisi Kiri: Pencarian Dokumen

Sisi kiri halaman menyediakan titik masuk pencarian dokumen bawaan. Pengguna dapat memasukkan kata kunci di kotak pencarian untuk dengan cepat menemukan halaman dan solusi yang relevan.

## Fungsionalitas Sisi Kanan: Informasi dan Tautan

Sisi kanan halaman mencakup modul fungsional berikut:

- **Bagian Pertama: Informasi Kunci yang Berguna**

  - **ID Perangkat**: Mengidentifikasi perangkat saat ini secara unik, sering digunakan untuk melaporkan bug atau mengambil log kesalahan.
  - **Informasi Jaringan Perangkat**: Termasuk alamat IP dan status jaringan.
    - Karena metode implementasi perangkat lunak proxy yang berbeda, beberapa proksi mungkin tidak terdeteksi. Oleh karena itu, normal jika "Tidak ada proxy" ditampilkan meskipun "Proxy diaktifkan" ditunjukkan.
    - Versi Alpha selalu menampilkan lokasi sebagai Luar Negeri, yang merupakan perilaku yang diharapkan.
  - **Versi Runtime Webview2**: Menampilkan nomor versi Webview2 yang diandalkan oleh Snap Hutao.

- **Bagian Kedua: Tautan Umum**

  - **Isu GitHub**: Melompat dengan cepat ke halaman pelacakan isu GitHub, memudahkan pengguna untuk mengirimkan isu atau melihat solusi yang ada.
  - Akses halaman pemantauan ketersediaan layanan Snap Hutao untuk memahami status layanan.

- **Bagian Ketiga: Panduan Fungsi**
  - Menyediakan tautan dokumen ke fungsi utama Snap Hutao, termasuk "Beranda", "Luncurkan Game", "Catatan Gacha", "Manajemen Pencapaian", dll., memudahkan pengguna untuk dengan cepat menemukan titik masuk dokumentasi.

## Optimalisasi Antarmuka dan Peringatan

- Jika data di halaman Pusat Umpan Balik tidak ditampilkan atau dimuat dengan benar, coba mulai ulang aplikasi atau periksa koneksi jaringan.
- Beberapa masalah tampilan mungkin terkait dengan lingkungan pengguna (seperti pengaturan proxy atau versi sistem). Disarankan untuk memecahkan masalah spesifik sesuai dengan petunjuk.