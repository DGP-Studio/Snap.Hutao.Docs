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

Dengan mengikuti petunjuk dokumen ini, Anda dapat dengan cepat menyiapkan Snap Hutao.

## <HopeIcon icon="iconfont icon-windows" size="1.7rem" color="rgb(0, 168, 232)" /> Persyaratan Sistem Minimum

| Persyaratan             | Attribut                                                         |
| ----------------------- | ---------------------------------------------------------------- |
| **Sistem Operasi Min.** | Windows 10 Build 19045 (22H2)<br/> Windows 11 Build 22621 (22H2) |
| **Rekomendasi OS**      | Windows 11 Build 22621 (22H2) atau versi lebih baru              |
| Komponen Wajib          | Windows Update, App Installer                                    |
| Komponen Opsional       | WebView2 Runtime                                                 |

**Versi OS yang Tidak Didukung**：

1. Versi LTSC dan LTSB menggunakan versi lama dari MSIX Core, sehingga tidak didukung.
2. Windows 10 Build 19041 mendukung instalasi, tetapi beberapa fitur mungkin mengalami kesalahan yang tidak diinginkan karena masalah kernel Windows,
   sehingga Snap Hutao tidak dapat menyelesaikannya.
3. Masalah pada versi pratinjau Windows Insider tidak akan diselesaikan.

## <HopeIcon icon="iconfont icon-cache" size="1.8rem" color="rgb(128, 161, 255)" /> Unduh Snap Hutao

### Instalasi Baru

Anda dapat menggunakan paket MSIX untuk menginstal Snap Hutao, Anda dapat menemukan paket dari sumber berikut.

<div class="vp-card-container">
  <VPCard
    title="Bergabunglah dengan Komunitas"
    desc="Kami akan mengunggah paket secara manual di komunitas setiap setelah setiap pembaruan"
    logo="/images/202312/community.svg"
    link="community.html"
    background="rgba(253, 233, 233, 0.45)"
  />
  <VPCard
    title="Hutao Auto Download"
    desc="Secara otomatis menentukan sumber terbaik untuk mengunduh"
    logo="https://img.alicdn.com/imgextra/i4/1797064093/O1CN01oaGvKE1g6dut0pICS_!!1797064093.png_.webp"
    link="https://api.snapgenshin.com/patch/hutao/download"
    background="rgba(253, 233, 233, 0.45)"
  />
  <VPCard
    title="GitHub"
    desc="Kami selalu merilis paket pertama di repositori Snap Hutao"
    logo="/images/202312/github-mark.svg"
    link="https://github.com/DGP-Studio/Snap.Hutao/releases/latest"
    background="rgba(155, 233, 168, 0.15)"
  />
</div>

- Jika Anda menghadapi salah satu dari kesalahan berikut selama instalasi, silakan lihat [Instalasi Dependency secara Manual](advanced/dependency.md) untuk memecahkannya, ini terjadi ketika Windows Anda tidak dapat mengunduh kerangka kerja yang diperlukan.
  1. `App Installer gagal menginstal Dependency paket. Mintalah pengembang untuk paketnya`
  2. Terhenti pada `Menginstal kerangka kerja`

---

Jika Anda tertarik untuk meningkatkan proyek Snap Hutao melalui upaya Anda sendiri, pertimbangkan [bergabung bersama kami](development/join.md)!

### <HopeIcon icon="iconfont icon-refresh" size="1.5rem" color="rgb(127, 186, 0)" /> Upgrade ke Versi Terbaru dari Versi MicroSoft Store

Jika Anda telah menginstal versi Microsoft Store dari Snap Hutao (versi 1.4.11 hingga 1.8.4), Anda perlu menghapusnya sebelum instalasi baru

> Untuk detail perubahan ini, lihat [Penjelasan Perubahan Drastis di Versi 1.9.0](blog/version-1-9-0-breaking-changes.md)

- Hapus versi lama dengan [petunjuk penghapusan](advanced/uninstall.html)
  - Data Anda tidak akan hilang selama Anda tidak menghapus direktori data secara manual
- Ikuti metode di atas untuk menginstal aplikasi versi baru

### <HopeIcon icon="iconfont icon-update" size="1.5rem" color="rgb(255, 185, 0)" /> Perbarui Snap Hutao

Jika tidak ada instruksi khusus, Anda dapat mengunduh dan menginstal paket MSIX terbaru untuk memperbarui Snap Hutao Anda.

Mulai dari versi 1.9.0, Snap Hutao telah menyematkan modul pembaruan untuk memberi tahu pembaruan.

## <HopeIcon icon="iconfont icon-expansion" size="1.7rem" color="rgb(7, 163, 161)" /> Instal Komponen Opsional

Dengan komponen opsional, Snap Hutao dapat menerapkan beberapa fungsi lebih nyaman melalui lingkungan tingkat sistem.
Mereka bukan komponen wajib, tetapi mereka dapat memberikan pengalaman yang lebih baik.

### <img src="/images/202312/MSEdge.webp" width="20" height="20"> WebView2 Runtime

WebView2 Runtime disediakan oleh Microsoft, yang memungkinkan adanya browser bawaan dengan biaya sumber daya rendah di dalam program.
Sebagai komponen opsional, WebView2 bukanlah komponen wajib, tetapi akan membuat beberapa fitur Snap Hutao menjadi lebih mudah.

Di bagian bawah [halaman resmi Microsoft](https://developer.microsoft.com/zh-cn/microsoft-edge/webview2/),
Anda dapat menemukan `Evergreen Standalone Installer`, pilih `x64` unduh dan instal sesuai dengan petunjuk.

## <HopeIcon icon="iconfont icon-adduser" size="1.7rem" color="rgb(7, 163, 161)" /> Tambahkan Akun MiHoYo BBS Pertama

Setelah masuk ke Snap Hutao, klik `Account Panel` di sudut kiri bawah antara `Settings` dan `Document`. Di panel pop-up, klik tombol masuk yang sesuai dengan akun Anda.

Jika Anda menggunakan akun server China, Anda perlu masuk di dalam kategori `MiYouShe`; Jika Anda menggunakan akun luar negeri
(atau. akun HoYoLAB/HoYoverse), Anda perlu masuk di dalam kategori `HoYoLAB`.

Apa pun jenis akun yang Anda miliki, Anda memiliki metode `Web Login` dan `Cookie Login`.

::: tabs

@tab Web Login

**Web Login memerlukan komponen Microsoft WebView2 Runtime**

1. Klik tombol `Web Login` di panel akun, Snap Hutao akan membuka halaman login MiHoYo BBS dengan WebView2
2. Masuk ke akun Anda di halaman web. Setelah berhasil masuk ke akun Anda, Anda akan dapat melihat informasi akun Anda
3. Klik tombol `i'm Logged In` di kanan atas, Snap Hutao akan menambahkan akun ini ke klien, dan akan menampilkannya di panel akun

@tab Cookie Login

Jika Anda ingin masuk ke akun Anda dengan cookie MiHoYo Passport yang diekstrak sendiri, Anda dapat klik `Input Manual`
tombol di panel akun, dan masukkan cookie Anda dengan bidang `SToken`. Jika cookie yang dimasukkan valid, akun Anda akan
ditampilkan di panel akun setelah Anda mengklik tombol `Konfirmasi`.

:::

---

_**Sekarang, Anda telah menyelesaikan pengaturan awal Snap Hutao. Anda sekarang bebas untuk menjelajahi aplikasi ini, Anda juga dapat
menemukan semua dokumen di situs web ini.**_
