---
headerDepth: 2
category: [Fitur, Tutorial]
tag: [MiYouShe, HoYoLAB, Multi Akun, check-in]
order: 13
comment: false
---

# Perpindahan Akun MiHoYo BBS

::: tip

Ada dua jenis MiHoYo BBS, MiYouShe dan HoYoLAB.
MiYouShe mengacu pada versi Tiongkok Daratan, HoYoLAB mengacu pada versi global, keduanya diterima oleh Snap Hutao.

- Dokumen di halaman ini membahas tentang **akun MiHoYo BBS**, bukan **akun dalam game** Genshin Impact
- Sebelum mulai menggunakan Snap Hutao, Anda harus menginisialisasi akun MiHoYo BBS Anda dengan login ke akun Anda di aplikasi resmi di ponsel
  - Jika nama akun Anda seperti `user_123456789`, itu berarti akun belum diinisialisasi

:::

![Akun MiHoYo BBS](https://img.alicdn.com/imgextra/i4/1797064093/O1CN01OqYy931g6dyGYLC2E_!!1797064093.png_.webp)

Di pojok kiri bawah, Anda dapat menemukan menu akun di atas tombol `Pengaturan`. Pada menu akun yang muncul,
Anda dapat menemukan entri untuk login ke akun MiYouShe dan HoYoLAB Anda:

- Klik `Web Login`
  - Di jendela browser bawaan yang muncul, login dengan akun Anda
  - Klik tombol `Saya sudah masuk` di kanan atas, setelah Anda masuk ke akun Anda
  - Kemudian akun Anda akan ditambahkan ke Snap Hutao, browser akan menutup secara otomatis
- Alternatifnya, Anda dapat memasukkan daftar cookie MiHoYo BBS Anda dengan mengklik tombol `Input Manual`
  - Jika Anda melakukannya, cookie harus memuat bidang `SToken`
  - Anda dapat merujuk ke dokumen [使用第三方工具获取有 SToken 的 cookie](../advanced/get-SToken-cookie-from-the-third-party.html) untuk metode menangkap cookie dengan `SToken`
- Setelah menambahkan akun MiHoYo BBS Anda, Anda perlu beralih ke akun yang diinginkan di menu akun, untuk mengaktifkannya
  - Anda selalu dapat beralih akun MiHoYo BBS Anda di menu akun, dan Anda juga diizinkan untuk menyalin cookie akun atau menghapus akun di sana
  - Setelah memilih akun dalam panel, Anda juga dapat
    - Klik `Refresh Cookie` untuk memperbarui cookie lokal
    - Klik `Claim Check-In Reward` untuk mendapatkan hadiah check-in harian. Untuk akun MiYouShe, Anda perlu melewati verifikasi Geetest terlebih dahulu.

::: info Tips Keamanan

- `SToken` adalah bidang cookie yang sensitif terhadap keamanan, Anda **TIDAK BOLEH** menyimpannya di perangkat lunak berbasis cloud atau perangkat yang tidak dapat Anda jamin keamanannya (seperti komputer publik).
- Anda dapat menyalin cookie akun dengan `SToken` dari Snap Hutao, tetapi Anda harus mempertimbangkan dengan cermat apakah penerima dapat dipercaya untuk memiliki cookie `SToken`
- **Saat Anda masuk ke akun MiHoYo BBS Anda di Snap Hutao, data hanya diproses oleh server resmi MiHoYo dan program Snap Hutao lokal,
  tidak ada server pihak ketiga (termasuk server Snap Hutao) yang terlibat dalam proses ini.**

:::
