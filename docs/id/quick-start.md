---
pageClass: link-box
externalLinkIcon: false
category: [Fitur, Tutorial]
comment: false
icon: iconfont icon-launch
order: 5
description: Ikuti dokumen mulai cepat ini, Anda akan dapat dengan cepat mengatur Snap Hutao agar siap digunakan.
banner: https://img.alicdn.com/imgextra/i1/1797064093/O1CN01FkOS5H1g6e1z8LCaD_!!1797064093.png
---

# Mulai Cepat

::: important
Ini adalah terjemahan yang dibuat oleh model Google Gemini, dan kami menerima perbaikan melalui PR.
:::

Ikuti dokumen mulai cepat ini, Anda akan dapat dengan cepat mengatur Snap Hutao agar siap digunakan.

## <HopeIcon icon="iconfont icon-windows" size="1.7rem" color="rgb(0, 168, 232)" /> Persyaratan Sistem Minimum

| Persyaratan                    | Spesifikasi                                                      |
| ------------------------------ | ---------------------------------------------------------------- |
| **Versi Sistem Operasi Min.**  | Windows 10 Build 19045 (22H2)<br/> Windows 11 Build 22621 (22H2) |
| **Rekomendasi Sistem Operasi** | Windows 11 Build 22621 (22H2) atau versi lebih baru              |
| **Komponen Wajib**             | Windows Update, App Installer                                    |
| Komponen Opsional              | WebView2 Runtime, **MSVC Runtime Library**                       |

**Versi Sistem Operasi yang Tidak Didukung**：

1. **Versi LTSC dan LTSB** tidak mendukung instalasi langsung karena tidak menyertakan MSIX Core versi baru yang cukup, dan perlu diproses secara manual.
2. **Edisi Enterprise dan edisi ringan tidak didukung, semua masalah dari sistem non-Microsoft versi lengkap tidak akan ditangani secara aktif.**
3. Windows 10 Build 19041 juga dapat diinstal, tetapi beberapa fungsi tidak akan berfungsi karena masalah kernel, oleh karena itu masalah Snap Hutao pada versi ini tidak akan ditangani.
4. Masalah pada versi pratinjau Windows Insider tidak akan ditangani.

## <HopeIcon icon="iconfont icon-cache" size="1.8rem" color="rgb(128, 161, 255)" /> Unduh Snap Hutao

### Instalasi Baru

Gunakan **Paket Instalasi MSIX** atau **Penginstal Snap.Hutao.Deployment** untuk menginstal Snap Hutao, Anda bisa mendapatkan paket instalasi dari sumber berikut.

::: tabs

@tab Menggunakan Instalasi Snap.Hutao.Deployment

Snap.Hutao.Deployment adalah penginstal sekali klik buatan tim pengembangan, **yang akan menginstal semua komponen yang diperlukan secara bersamaan**. Cocok untuk sebagian besar pengguna biasa dan pengguna yang gagal menginstal menggunakan paket aplikasi MSIX.

<div class="vp-card-container">

<VPCard
title="Penentuan Otomatis Hutao"
desc="Menentukan secara otomatis jalur unduhan terbaik"
logo="https://img.alicdn.com/imgextra/i1/1797064093/O1CN01ybZ68o1g6e7nwgiKI_!!1797064093.png_.webp"
link="https://api.snapgenshin.com/patch/hutao-deployment/download"
background="rgba(253, 233, 233, 0.45)"
/>

<VPCard
title="GitHub"
desc="Snap Hutao Deployment juga merupakan proyek open source"
logo="/images/202312/github-mark.svg"
link="https://github.com/DGP-Studio/Snap.Hutao.Deployment/releases/latest"
background="rgba(155, 233, 168, 0.15)"
/>

</div>

@tab Instal menggunakan paket MSIX

<div class="vp-card-container">
  <div class="hint-container warning">
    <p class="hint-container-title">Perhatian</p>
    <p>Kami menyarankan untuk menginstal Snap Hutao menggunakan Snap.Hutao.Deployment, masalah apa pun yang terjadi saat menginstal menggunakan paket MSIX tidak akan ditangani secara aktif.</p>
  </div>

<VPCard
title="Penentuan Otomatis Hutao"
desc="Menentukan secara otomatis jalur unduhan terbaik"
logo="https://img.alicdn.com/imgextra/i1/1797064093/O1CN01ybZ68o1g6e7nwgiKI_!!1797064093.png_.webp"
link="https://api.snapgenshin.com/patch/hutao/download"
background="rgba(253, 233, 233, 0.45)"
/>
<VPCard
title="GitHub"
desc="Semua versi Snap Hutao dirilis di repositori kode utama"
logo="/images/202312/github-mark.svg"
link="https://github.com/DGP-Studio/Snap.Hutao/releases/latest"
background="rgba(155, 233, 168, 0.15)"
/>

</div>

:::

---

Jika Anda tertarik untuk membuat proyek Snap Hutao menjadi lebih baik melalui upaya Anda, selamat datang untuk [bergabung dengan kami](development/join.md)!

### <HopeIcon icon="iconfont icon-refresh" size="1.5rem" color="rgb(127, 186, 0)" /> Upgrade dari Versi Microsoft Store ke Versi Terbaru

> Anda dapat membaca [Penjelasan Detail Perubahan Besar Versi 1.9.0](blog/version-1-9-0-breaking-changes.md) untuk informasi lebih lanjut.

Jika Anda telah menginstal Snap Hutao versi Microsoft Store (nomor versi antara 1.4.11 dan 1.8.5), Anda perlu mencopot pemasangan versi lama sebelum melakukan instalasi baru.

- Ikuti [metode pencopotan pemasangan](advanced/uninstall.html) yang disediakan dalam dokumen untuk mencopot pemasangan aplikasi versi lama.
  - Data tidak akan terpengaruh, selama Anda tidak menghapus direktori data secara manual.
- Ikuti metode di atas untuk menginstal aplikasi versi baru.

### <HopeIcon icon="iconfont icon-update" size="1.5rem" color="rgb(255, 185, 0)" /> Perbarui Snap Hutao

Jika tidak ada pernyataan khusus, Anda dapat memperbarui dengan menjalankan [Snap.Hutao.Deployment](https://api.snapgenshin.com/patch/hutao-deployment/download) atau menginstal paket instalasi MSIX versi terbaru.

Mulai dari versi 1.9.0, Snap Hutao memiliki fungsi prompt pembaruan bawaan untuk mengingatkan Anda mendapatkan paket pembaruan. Jika pembaruan gagal, Anda dapat mencoba menggunakan [Snap.Hutao.Deployment](https://api.snapgenshin.com/patch/hutao-deployment/download) untuk menimpa instalasi untuk menyelesaikan masalah.

- Data tidak akan terpengaruh, selama Anda tidak menghapus direktori data secara manual.

## <HopeIcon icon="iconfont icon-expansion" size="1.7rem" color="rgb(7, 163, 161)" /> Instal Komponen Opsional

Melalui komponen opsional, Snap Hutao dapat menerapkan beberapa fungsi dengan lebih efisien, meskipun bukan komponen yang wajib, komponen opsional dapat meningkatkan pengalaman pengguna secara signifikan.

### <img src="/images/202312/MSEdge.webp" alt="Edge" width="20" height="20"> WebView2 Runtime

WebView2 Runtime disediakan oleh Microsoft, yang memungkinkan Snap Hutao untuk menyematkan komponen browser dengan biaya rendah. Komponen ini digunakan untuk mengimplementasikan fungsi login WebView2 dari akun MiYouShe.

Anda dapat menemukan `Penginstal Mandiri Evergreen` di bagian bawah [situs web resmi Microsoft](https://developer.microsoft.com/zh-cn/microsoft-edge/webview2/), pilih `x64` untuk mengunduh dan menginstal.

### <img src="/images/202409/Microsoft-logo.svg" alt="Microsoft" width="20" height="20"> Font Segoe Fluent Icons

Font ini disediakan oleh Microsoft dan dapat mengoptimalkan efek tampilan ikon Snap Hutao. Tidak adanya font ini dapat menyebabkan beberapa ikon tidak ditampilkan dengan baik.

Klik [tautan ini](https://aka.ms/SegoeFluentIcons) untuk mengunduh paket kompresi font, ekstrak, lalu klik kanan untuk menginstal font ke sistem.

### <img src="/images/202409/Microsoft-logo.svg" alt="Microsoft" width="20" height="20"> MSVC Runtime Library（MSVCRT）

MSVC Runtime Library adalah komponen yang diperlukan untuk membuka fungsi frame rate. Jika Anda mendapatkan pesan yang mengatakan "XXX.dll tidak ada" atau "XXX komponen tidak ada", silakan instal MSVCRT versi terbaru.

Klik [tautan ini](https://aka.ms/vs/17/release/vc_redist.x64.exe) untuk mengunduh file instalasi MSVC Runtime Library (x64) dan selesaikan instalasi.

## <HopeIcon icon="iconfont icon-adduser" size="1.7rem" color="rgb(7, 163, 161)" /> Tambahkan Akun MiYouShe Pertama

Di antarmuka utama, klik panel akun di sudut kiri bawah di antara tombol dokumen dan tombol pengaturan. Di panel akun MiYouShe yang muncul, pilih metode login sesuai dengan jenis akun.

Apa pun metode yang digunakan, pastikan akun telah diinisialisasi melalui aplikasi resmi. Jika tidak, Snap Hutao tidak akan dapat memperoleh informasi akun dengan benar.

:::: tabs

@tab Login Kode Verifikasi Ponsel MiYouShe

::: warning
Harap konfirmasikan bahwa akun MiYouShe telah terikat dengan akun server Tiongkok.
:::

1. Klik tombol "Kode Verifikasi Ponsel", isi nomor telepon dan kirim kode verifikasi.
2. Isi kode verifikasi dan konfirmasi, tunggu sebentar dan akun akan ditambahkan.

@tab Login Pindai Kode MiYouShe

::: warning
Harap konfirmasikan bahwa akun MiYouShe telah terikat dengan akun server Tiongkok.
:::

1. Klik tombol "Login Pindai Kode", tunggu kode QR dimuat.
2. Gunakan Aplikasi MiYouShe untuk memindai kode dan konfirmasi login.
3. Tunggu sebentar, Snap Hutao akan menambahkan akun.

@tab Login Kata Sandi HoYoLAB

::: warning
Harap konfirmasikan bahwa akun HoYoLAB telah terikat dengan akun server internasional.
:::

1. Klik tombol "Login Kata Sandi", isi kata sandi akun dan konfirmasi.
2. Tunggu sebentar, akun akan ditambahkan.

@tab Login Akun Media Sosial HoYoLAB

Metode ini bergantung pada komponen WebView2 Runtime.

::: warning
HoYoLAB secara default memblokir koneksi jaringan dari Tiongkok Daratan.
:::

1. Klik tombol "Login Pihak Ketiga" dan login melalui WebView2.
2. Tunggu sebentar, akun akan ditambahkan.

@tab Login Cookie

::: warning
Harap simpan informasi Cookie dengan benar untuk menghindari risiko akun.
:::

Kirim Cookie dengan memasukkan SToken secara manual untuk login.

1. Klik ikon Aplikasi target dan pilih "Input Manual".
2. Masukkan Cookie yang valid dan konfirmasi, tunggu sebentar, akun akan ditambahkan.
   ::::

## <HopeIcon icon="iconfont icon-ask" size="1.7rem" color="var(--theme-color)" /> Pertanyaan Umum Instalasi

### Mengapa ikon dalam program menjadi tidak jelas?

- Pengguna Windows 10 dapat menyelesaikan masalah dengan menginstal font `Segoe Fluent Icons`.
- Pilih "Instal untuk semua pengguna sistem" saat menginstal.

### Apakah mungkin untuk menyelesaikan masalah instalasi dengan memperbaiki komponen sistem?

Perbaiki komponen yang hilang sesuai dengan pesan kesalahan, tetapi tim pengembang Snap Hutao tidak akan memberikan dukungan.

---

::: warning
Masalah berikut hanya berlaku untuk instalasi MSIX, harap prioritaskan untuk mencoba instalasi [Snap.Hutao.Deployment](https://api.snapgenshin.com/patch/hutao-deployment/download).
:::

### Komputer saya tidak dapat membuka paket instalasi format MSIX

Periksa apakah sistem kekurangan App Installer.

1. Instal [App Installer](https://apps.microsoft.com/detail/9NBLGGH4NNS1?hl=en-us&gl=US).
2. Pastikan Anda menggunakan sistem yang diinstal dengan image Windows 10 atau 11 resmi.

### Paket instalasi MSIX menampilkan pesan `Tidak dapat memverifikasi sertifikat penerbit paket aplikasi ini`

Instal sertifikat [GlobalSign Code Signing Root R45](https://secure.globalsign.com/cacert/codesigningrootr45.crt) secara manual ke `Otoritas Sertifikasi Akar Tepercaya`.

### Paket instalasi MSIX menampilkan kesalahan kebijakan grup atau memerlukan lisensi pengembang

1. Buka Pengaturan Windows
2. Buka "Sistem - Opsi Pengembang"
3. Aktifkan sakelar "Mode Pengembang"

---

### Instalasi paket MSIX gagal dan menampilkan pesan kesalahan

| Pesan Kesalahan                              | Alasan                                        |
| -------------------------------------------- | --------------------------------------------- |
| Kode kesalahan `0x80040154`                  | Izin akun pengguna Windows yang salah         |
| Pesan kesalahan `Aplikasi Tidak Diluncurkan` | Kesalahan izin App Installer atau telah rusak |
| Kode kesalahan `0x80073CF0`                  | Izin direktori yang salah                     |
| Kode kesalahan `0x80070005`                  | Izin akun pengguna Windows yang salah         |
| Kode kesalahan `0x80070570`                  | Izin akun pengguna Windows yang salah         |
| Kode kesalahan `0x8007065E`                  | Izin akun pengguna Windows yang salah         |

#### Langkah-Langkah Penyelesaian

1. Klik kanan pada menu Mulai dan pilih `PowerShell (Admin)`.
2. Jalankan kode berikut untuk menyelesaikan instalasi:

   ```PowerShell
   cd $env:USERPROFILE\Downloads; $url="https://api.snapgenshin.com/patch/hutao/download"; $targetFileName="Snap.Hutao.latest.msix"; $targetFilePath=Join-Path -Path $PWD -ChildPath $targetFileName; Invoke-WebRequest -Uri $url -OutFile $targetFilePath; Add-AppxPackage -Path $targetFilePath; Remove-Item -Path $targetFilePath
   ```

3. Tidak ada pesan kesalahan berwarna merah yang berarti instalasi berhasil.
