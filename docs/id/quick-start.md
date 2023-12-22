---
pageClass: link-box
externalLinkIcon: false
category:
  - Fitur
  - Tutorial
comment: false
icon: iconfont icon-launch
order: 5
---

# Panduan Cepat

Dengan mengikuti petunjuk dalam dokumen ini, Anda dapat mengatur Snap Hutao dengan cepat.

## <HopeIcon icon="iconfont icon-windows" size="1.7rem" color="rgb(0, 168, 232)" /> Persyaratan Sistem Minimum

| Persyaratan                    | Atribut                                                          |
| ------------------------------ | ---------------------------------------------------------------- |
| **Minimum OS yang Diperlukan** | Windows 10 Build 19045 (22H2)<br/> Windows 11 Build 22621 (22H2) |
| **OS yang Direkomendasikan**   | Windows 11 Build 22621 (22H2) atau versi lebih baru              |
| Komponen yang Diperlukan       | Windows Update, App Installer                                    |
| Komponen Opsional              | WebView2 Runtime                                                 |

**Versi OS yang Tidak Didukung**：

1. Versi LTSC dan LTSB tidak termasuk Microsoft Store, sehingga tidak didukung
2. Windows 10 Build 19041 mendukung instalasi, tetapi beberapa fitur mungkin memiliki kesalahan yang tidak terduga karena masalah kernel Windows, sehingga Snap Hutao tidak dapat menyelesaikannya
3. Masalah yang terjadi pada versi pratinjau Windows Insider tidak akan diselesaikan

## <HopeIcon icon="iconfont icon-cache" size="1.8rem" color="rgb(128, 161, 255)" /> Unduh Snap Hutao

### Instalasi Baru

**Tidak peduli metode instalasi apa yang Anda gunakan, sumber paket dan registrasi selalu diatur oleh Microsoft Store.**

::: tabs
@tab Microsoft Store
<ms-store-badge
productid="9PH4NXJ2JN52"
theme="auto">
</ms-store-badge>

Tautan Microsoft Store: [Snap Hutao](https://apps.microsoft.com/store/detail/snap-hutao/9PH4NXJ2JN52)

Di Windows 10 dan Windows 11, Anda dapat mengklik tombol di atas untuk mengunduh Snap Hutao.

@tab winget

- Buka PowerShell
- Jalankan perintah `winget install "Snap Hutao"`
- Ikuti petunjuk untuk mengizinkan instalasi
  - Jika instalasi gagal, menerima kesalahan dependensi yang hilang, atau terjebak pada tahap instalasi kerangka kerja, silakan lihat dokumen [Instalasi Dependensi Secara Manual](advanced/dependency.md)

@tab GitHub

- Kunjungi [halaman rilis terbaru](https://github.com/DGP-Studio/Snap.Hutao/releases/latest/) dari Snap Hutao
- Unduh Paket MSIX
- Jalankan paket MSIX secara langsung untuk melakukan instalasi
  - Jika instalasi gagal, menerima kesalahan dependensi yang hilang, atau terjebak pada tahap instalasi kerangka kerja, silakan lihat dokumen [Instalasi Dependensi Secara Manual](advanced/dependency.md)

:::

### <HopeIcon icon="iconfont icon-refresh" size="1.5rem" color="rgb(127, 186, 0)" /> Upgrade ke Versi MS Store dari Versi Side-load

Jika Anda menginstal versi side-load dari Snap Hutao (versi 1.4.10 dan lebih lama), Anda perlu menghapusnya sebelum instalasi baru

- Hapus versi side-load dengan [dokumen instruksi penghapusan kami](advanced/uninstall.html)
  - Data Anda tidak akan hilang selama Anda tidak menghapus direktori data secara manual
- Ikuti metode di atas untuk menginstal aplikasi versi Microsoft Store

### <HopeIcon icon="iconfont icon-update" size="1.5rem" color="rgb(255, 185, 0)" /> Perbarui Snap Hutao

**Anda dapat menggunakan salah satu metode pembaruan, tidak masalah metode apa yang Anda gunakan saat menginstal Snap Hutao. Mereka tidak perlu konsisten, karena Microsoft Store adalah satu-satunya sumber paket.**
::: tabs  
@tab Microsoft

- Buka Microsoft Store
- Klik `Library` di pojok kiri bawah untuk melihat semua aplikasi yang telah Anda instal
- Klik `Dapatkan pembaruan` di pojok kanan atas dan aplikasi Anda akan diperbarui

Jika Anda masih tidak menerima pembaruan, Anda dapat masuk ke halaman detail Snap Hutao [(di sini)](https://apps.microsoft.com/store/detail/snap-hutao/9PH4NXJ2JN52) di Microsoft Store, untuk memungkinkan toko untuk mengambil metadata terbaru.

@tab winget

- Buka PowerShell
- Jalankan perintah `winget upgrade "Snap Hutao"`
- Ikuti petunjuk untuk mengizinkan upgrade

@tab GitHub

- Kunjungi [halaman rilis terbaru](https://github.com/DGP-Studio/Snap.Hutao/releases/latest/) dari Snap Hutao
- Unduh Paket MSIX
- Jalankan paket MSIX secara langsung untuk melakukan upgrade

:::

## <HopeIcon icon="iconfont icon-expansion" size="1.7rem" color="rgb(7, 163, 161)" /> Instalasi Komponen Opsional

Dengan komponen opsional, Snap Hutao dapat menerapkan beberapa fungsi lebih nyaman melalui lingkungan tingkat sistem.
Mereka bukan komponen wajib, tetapi mereka dapat membawa pengalaman yang lebih baik.

### <img src="/images/202312/MSEdge.webp" width="20" height="20"> WebView2 Runtime

WebView2 Runtime disedi

akan oleh Microsoft, yang memungkinkan browser bawaan dengan biaya sumber daya rendah di dalam program.
Sebagai komponen opsional, WebView2 bukan komponen wajib, tetapi akan membuat beberapa fitur Snap Hutao menjadi lebih mudah.

Di bagian bawah [halaman resmi Microsoft](https://developer.microsoft.com/zh-cn/microsoft-edge/webview2/),
Anda dapat menemukan `Evergreen Standalone Installer`, pilih unduh `x64` dan instal sesuai petunjuk yang diberikan.

## <HopeIcon icon="iconfont icon-adduser" size="1.7rem" color="rgb(7, 163, 161)" /> Tambahkan Akun MiHoYo BBS Pertama

Setelah masuk ke Snap Hutao, klik `Panel Akun` di sudut kiri bawah antara `Pengaturan` dan `Dokumen`. Di
panel pop-up, klik tombol masuk yang sesuai dengan akun Anda.

Jika Anda menggunakan akun server China, Anda perlu masuk dalam kategori `MiYouShe`; Jika Anda menggunakan akun luar negeri
(atau disebut juga akun HoYoLAB/HoYoverse), Anda perlu masuk dalam kategori `HoYoLAB`.

Tidak peduli jenis akun yang Anda miliki, Anda memiliki metode `Login Web` dan `Login Cookie`.

::: tabs

@tab Login Web

**Login Web memerlukan komponen Runtime Microsoft WebView2**

1. Klik tombol `Login Web` di panel akun, Snap Hutao akan membuka halaman login MiHoYo BBS dengan WebView2
2. Masuk ke akun Anda di halaman web. Setelah berhasil masuk ke akun Anda, Anda akan dapat melihat informasi akun Anda
3. Klik tombol `Saya Sudah Masuk` di kanan atas, Snap Hutao akan menambahkan akun ini ke klien, dan akan menampilkannya di panel akun

@tab Login Cookie

Jika Anda ingin masuk ke akun Anda dengan cookie MiHoYo Passport yang diekstrak oleh Anda sendiri, Anda dapat klik `Input Manual`
di panel akun, dan masukkan cookie Anda dengan bidang `SToken`. Jika cookie yang dimasukkan valid, akun Anda akan
ditampilkan di panel akun begitu Anda mengklik tombol `Konfirmasi`.

:::

---

_**Sekarang, Anda telah menyelesaikan pengaturan awal Snap Hutao Anda. Anda bebas untuk menjelajahi aplikasi ini, Anda juga dapat menemukan semua dokumen di situs web ini.**_
