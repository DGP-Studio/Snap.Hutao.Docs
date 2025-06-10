---
pageClass: link-box
externalLinkIcon: false
category: [Functionality, Tutorial]
comment: false
icon: iconfont icon-launch
order: 5
description: Ikuti panduan mulai cepat ini untuk menyiapkan Snap Hutao dengan cepat.
banner: https://img.alicdn.com/imgextra/i1/1797064093/O1CN01mpzxPR1g6e22IjFMh_!!1797064093.png
---

# Mulai Cepat

Ikuti panduan mulai cepat ini untuk menyiapkan Snap Hutao dengan cepat.

## <HopeIcon icon="iconfont icon-windows" size="1.7rem" color="rgb(0, 168, 232)" /> Persyaratan Sistem Minimum

| Persyaratan | Spesifikasi |
| :--- | :--- |
| **Versi OS Minimum yang Didukung** | Windows 10 Build 19045.5371 (22H2)<br/> Windows 11 Build 22621 (22H2) |
| **Versi OS yang Direkomendasikan** | Windows 11 Build 26100 (24H2) atau lebih baru |
| **Komponen yang Dibutuhkan** | Windows Update, App Installer |
| Komponen Opsional | WebView2 Runtime, **MSVC Runtime** |

**Versi OS yang Tidak Didukung**:

1. Edisi Windows Enterprise, termasuk cabang **LTSC dan LTSB**
2. Edisi Windows IoT
3. **Versi Windows yang ringan atau dimodifikasi; masalah pada versi non-resmi Microsoft tidak akan ditangani**
4. Masalah pada build Windows Insider Preview tidak akan ditangani

> **Pembaruan Windows Januari 2025 [KB5049981](https://support.microsoft.com/en-us/topic/january-14-2025-kb5049981-os-builds-19044-5371-and-19045-5371-12f3788f-6e7d-4524-8ab3-27d1666e0510) adalah persyaratan wajib untuk menjalankan Snap Hutao di Windows 10. Ini termasuk dalam Windows 10 Build 19045.5371 dan yang lebih baru.**

## <HopeIcon icon="iconfont icon-cache" size="1.8rem" color="rgb(128, 161, 255)" /> Unduh Snap Hutao

### Instalasi Baru

Anda dapat menginstal Snap Hutao menggunakan **paket instalasi MSIX** atau **installer Snap.Hutao.Deployment**. Anda bisa mendapatkan paket instalasi dari sumber-sumber berikut.

::: tabs

@tab Gunakan Installer Snap.Hutao.Deployment

Snap.Hutao.Deployment adalah installer sekali klik yang dibuat oleh tim pengembang yang **akan menginstal semua komponen yang diperlukan** secara bersamaan. Ini cocok untuk sebagian besar pengguna biasa dan pengguna yang gagal menginstal dengan paket aplikasi MSIX.

<div class="vp-card-container">

<VPCard
title="Deteksi Otomatis Snap Hutao"
desc="Secara otomatis menentukan sumber unduhan terbaik"
logo="https://img.alicdn.com/imgextra/i1/1797064093/O1CN01ybZ68o1g6e7nwgiKI_!!1797064093.png_.webp"
link="https://api.snapgenshin.com/patch/hutao-deployment/download"
background="rgba(253, 233, 233, 0.45)"
/>

<VPCard
title="GitHub"
desc="Snap Hutao Deployment juga merupakan proyek open-source"
logo="/images/202312/github-mark.svg"
link="https://github.com/DGP-Studio/Snap.Hutao.Deployment/releases/latest"
background="rgba(155, 233, 168, 0.15)"
/>

</div>

@tab Gunakan Paket Instalasi MSIX

<div class="vp-card-container">
  <div class="hint-container warning">
    <p class="hint-container-title">Perhatian</p>
    <p>Kami merekomendasikan menggunakan Snap.Hutao.Deployment untuk menginstal Snap Hutao. Masalah apa pun yang terjadi saat menginstal dengan paket instalasi MSIX tidak akan ditangani secara aktif.</p>
  </div>

<VPCard
title="Deteksi Otomatis Snap Hutao"
desc="Secara otomatis menentukan sumber unduhan terbaik"
logo="https://img.alicdn.com/imgextra/i1/1797064093/O1CN01ybZ68o1g6e7nwgiKI_!!1797064093.png_.webp"
link="https://api.snapgenshin.com/patch/hutao/download"
background="rgba(253, 233, 233, 0.45)"
/>
<VPCard
title="GitHub"
desc="Semua versi Snap Hutao dirilis di repositori utama"
logo="/images/202312/github-mark.svg"
link="https://github.com/DGP-Studio/Snap.Hutao/releases/latest"
background="rgba(155, 233, 168, 0.15)"
/>

</div>

:::

---

Jika Anda tertarik untuk membuat proyek Snap Hutao menjadi lebih baik melalui usaha Anda sendiri, kami menyambut Anda untuk [bergabung dengan kami](development/join.md)!

### <HopeIcon icon="iconfont icon-update" size="1.5rem" color="rgb(255, 185, 0)" /> Perbarui Snap Hutao

Kecuali dinyatakan lain, Anda dapat memperbarui dengan menjalankan [Snap.Hutao.Deployment](https://api.snapgenshin.com/patch/hutao-deployment/download) atau menginstal paket instalasi MSIX terbaru.

Sejak versi 1.9.0, Snap Hutao memiliki fungsi notifikasi pembaruan bawaan untuk mengingatkan Anda mendapatkan paket pembaruan. Jika pembaruan gagal, Anda dapat mencoba menggunakan [Snap.Hutao.Deployment](https://api.snapgenshin.com/patch/hutao-deployment/download) untuk menimpa instalasi guna menyelesaikan masalah.

- Data tidak akan terpengaruh selama direktori data tidak dihapus secara manual.

## <HopeIcon icon="iconfont icon-expansion" size="1.7rem" color="rgb(7, 163, 161)" /> Instal Komponen Opsional

Melalui komponen opsional, Snap Hutao dapat mengimplementasikan beberapa fungsi dengan lebih efisien. Meskipun bukan komponen wajib, mereka dapat secara signifikan meningkatkan pengalaman pengguna.

### <img src="/images/202312/MSEdge.webp" alt="Edge" width="20" height="20"> WebView2 Runtime

WebView2 Runtime disediakan oleh Microsoft dan memungkinkan Snap Hutao menyematkan komponen browser dengan overhead rendah. Komponen ini digunakan untuk mengimplementasikan fungsi login WebView2 akun MiYouShe.

Anda dapat menemukan `Evergreen Standalone Installer` di bagian bawah [situs web resmi Microsoft](https://developer.microsoft.com/en-us/microsoft-edge/webview2/). Pilih `x64` untuk mengunduh dan menginstal.

### <img src="/images/202409/Microsoft-logo.svg" alt="Microsoft" width="20" height="20"> Font Segoe Fluent Icons

Font ini disediakan oleh Microsoft dan mengoptimalkan efek tampilan ikon Snap Hutao. Kehilangan font ini dapat menyebabkan beberapa ikon tidak ditampilkan dengan benar.

Klik [tautan ini](https://aka.ms/SegoeFluentIcons) untuk mengunduh file ZIP font. Setelah diekstrak, klik kanan untuk menginstal font ke sistem.

### <img src="/images/202409/Microsoft-logo.svg" alt="Microsoft" width="20" height="20"> MSVC Runtime Library (MSVCRT)

MSVC Runtime Library adalah komponen yang diperlukan untuk membuka kunci fungsi frame rate. Jika Anda diminta dengan "Missing XXX.dll" atau "Missing XXX component", silakan instal versi terbaru MSVCRT.

Klik [tautan ini](https://aka.ms/vs/17/release/vc_redist.x64.exe) untuk mengunduh file instalasi MSVC Runtime Library (x64) dan selesaikan instalasi.

## <HopeIcon icon="iconfont icon-adduser" size="1.7rem" color="rgb(7, 163, 161)" /> Tambahkan Akun MiHoYo Pertama

Di antarmuka utama, klik panel akun di sudut kiri bawah antara tombol dokumen dan tombol pengaturan. Di panel akun MiHoYo yang muncul, pilih metode login sesuai dengan jenis akun.

Terlepas dari metode yang digunakan, pastikan akun telah diinisialisasi melalui aplikasi resmi. Jika tidak, Snap Hutao tidak akan dapat memperoleh informasi akun dengan benar.

:::: tabs

@tab Login Kode Verifikasi Seluler MiYouShe

::: warning
Pastikan akun MiYouShe terikat dengan akun server domestik Genshin Impact.
:::

1.  Klik tombol "Kode Verifikasi Seluler", isi nomor ponsel dan kirim kode verifikasi.
2.  Setelah mengisi kode verifikasi, konfirmasi, dan tunggu sejenak hingga akun ditambahkan.

@tab Login Kode QR MiYouShe

::: warning
Pastikan akun MiYouShe terikat dengan akun server domestik Genshin Impact.
:::

1.  Klik tombol "Login Kode QR" dan tunggu hingga kode QR dimuat.
2.  Gunakan Aplikasi MiYouShe untuk memindai kode QR dan konfirmasi login.
3.  Tunggu sejenak, dan Snap Hutao akan menambahkan akun tersebut.

@tab Login Kata Sandi HoYoLAB

::: warning
Pastikan akun HoYoLAB terikat dengan akun server internasional Genshin Impact.
:::

1.  Klik tombol "Login Kata Sandi", isi kata sandi akun, dan konfirmasi.
2.  Tunggu sejenak, dan akun akan ditambahkan.

@tab Login Akun Media Sosial HoYoLAB

Metode ini bergantung pada komponen WebView2 Runtime.

::: warning
HoYoLAB memblokir koneksi jaringan dari daratan Tiongkok secara default.
:::

1.  Klik tombol "Login Pihak Ketiga" dan login melalui WebView2.
2.  Tunggu sejenak, dan akun akan ditambahkan.

@tab Login Cookie

::: warning
Harap simpan informasi Cookie Anda dengan aman untuk menghindari risiko akun.
:::

Login dengan memasukkan SToken secara manual untuk mengirimkan Cookie.

1.  Klik ikon Aplikasi target dan pilih "Input Manual".
2.  Masukkan Cookie yang valid dan konfirmasi. Setelah beberapa saat, akun akan ditambahkan.
    ::::

## <HopeIcon icon="iconfont icon-ask" size="1.7rem" color="var(--theme-color)" /> FAQ Instalasi

### Mengapa Muncul Tulisan Aneh (Mojibake) di Ikon Program

- Pengguna Windows 10 dapat menyelesaikan masalah dengan menginstal font `Segoe Fluent Icons`.
- Pilih "Install for all users" saat menginstal.

### Apakah Masalah Instalasi Bisa Diselesaikan dengan Memperbaiki Komponen Sistem

Anda bisa mencoba memperbaiki komponen yang hilang berdasarkan pesan kesalahan, tetapi tim pengembang Snap Hutao tidak akan memberikan dukungan.

---

::: warning
Masalah berikut hanya berlaku untuk instalasi MSIX. Silakan coba instalasi [Snap.Hutao.Deployment](https://api.snapgenshin.com/patch/hutao-deployment/download) terlebih dahulu.
:::

### Komputer Saya Tidak Bisa Membuka Paket Instalasi Format MSIX

Periksa apakah sistem kehilangan App Installer.

1.  Instal [App Installer](https://apps.microsoft.com/detail/9NBLGGH4NNS1?hl=en-us&gl=US).
2.  Pastikan Anda menggunakan citra Windows 10 atau 11 resmi untuk menginstal sistem.

### Paket Instalasi MSIX Memberi Tahu `Sertifikat Penerbit Paket Aplikasi Ini Tidak Dapat Diverifikasi`

Instal sertifikat [GlobalSign Code Signing Root R45](https://secure.globalsign.com/cacert/codesigningrootr45.crt) secara manual ke `Trusted Root Certification Authorities`.

### Paket Instalasi MSIX Memberi Tahu Kesalahan Kebijakan Grup atau Memerlukan Lisensi Pengembang

1.  Buka Pengaturan Windows.
2.  Buka "Sistem - Untuk pengembang".
3.  Aktifkan sakelar "Mode pengembang".

---

### Instalasi Paket MSIX Gagal dengan Pesan Kesalahan

| Pesan Kesalahan | Alasan |
| :---: | :---: |
| Kode Kesalahan `0x80040154` | Izin akun pengguna Windows salah |
| Pesan Kesalahan `Aplikasi tidak dimulai` | Izin App Installer salah atau rusak |
| Kode Kesalahan `0x80073CF0` | Izin direktori salah |
| Kode Kesalahan `0x80070005` | Izin akun pengguna Windows salah |
| Kode Kesalahan `0x80070570` | Izin akun pengguna Windows salah |
| Kode Kesalahan `0x8007065E` | Izin akun pengguna Windows salah |

#### Langkah-langkah Solusi

1.  Klik kanan pada menu Mulai dan pilih `PowerShell (Admin)`.
2.  Jalankan kode berikut untuk menyelesaikan instalasi:

    ```PowerShell
    cd $env:USERPROFILE\Downloads; $url="https://api.snapgenshin.com/patch/hutao/download"; $targetFileName="Snap.Hutao.latest.msix"; $targetFilePath=Join-Path -Path $PWD -ChildPath $targetFileName; Invoke-WebRequest -Uri $url -OutFile $targetFilePath; Add-AppxPackage -Path $targetFilePath; Remove-Item -Path $targetFilePath
    ```

3.  Tidak ada pesan kesalahan merah menunjukkan instalasi berhasil.