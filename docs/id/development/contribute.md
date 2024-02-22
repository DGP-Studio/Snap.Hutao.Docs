---
category: [open source, development]
tag: ["development", "GitHub"]
icon: iconfont icon-code
order: 2
---

# Berkontribusi pada Kode Anda

Snap Hutao menggunakan C# dan .NET Framework untuk mengembangkan kedua klien dan server. Jika Anda bersedia berkontribusi pada proyek ini,
silakan baca panduan berikut.

Anda dapat menemukan semua [issue terbuka yang belum terpecahkan](https://github.com/DGP-Studio/Snap.Hutao/issues?q=is%3Aissue+is%3Aopen+-label%3A%E5%B7%B2%E4%BF%AE%E5%A4%8D+) di GitHub

## <HopeIcon icon="iconfont icon-visual-studio" size="1.5rem" color="rgb(193,142,241)" /> Persiapkan Proyek Snap.Hutao

1. Unduh dan instal [Visual Studio 2022 Community](https://visualstudio.microsoft.com/downloads/)
2. Buka Visual Studio Installer untuk menyelesaikan instalasi Visual Studio
   - Anda perlu menginstal komponen `.NET desktop development`, `Desktop development with C++`, dan `Universal Windows Platform development`
3. Instal `Single-project MSIX Packaging Tools for VS 2022` yang disediakan oleh Microsoft di Visual Studio marketplace
4. Gunakan git untuk mengklon proyek `https://github.com/DGP-Studio/Snap.Hutao.git` ke perangkat lokal Anda
5. Alihkan cabang git ke `develop`
6. Buka solusi proyek dengan Visual Studio Anda dan sekarang Anda siap untuk mulai

## <HopeIcon icon="iconfont icon-debug" size="1.5rem" color="rgb(73,156,84)" /> Aktifkan Debug

1. Unduh dan instal `Sysinternals Suite` dari [Microsoft Store](https://www.microsoft.com/store/productid/9P7KNL5RWT25) atau [situs web Microsoft](https://learn.microsoft.com/en-us/sysinternals/downloads/sysinternals-suite)
2. Temukan dan jalankan program `DebugView` dalam daftar aplikasi yang diinstal atau folder yang di-unzip
3. Jalankan klien Snap Hutao
4. Periksa keluaran DebugView

## <HopeIcon icon="iconfont icon-pull-request" size="1.5rem" color="rgb(130,80,223)"/> Mulai Pull Request

- Semua perubahan terkait kode dari cabang penulis hanya diperbolehkan untuk disatukan ke cabang `develop`
- Harap gunakan [keywords](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/using-keywords-in-issues-and-pull-requests) untuk menghubungkan PR atau komit Anda dengan isu, sehingga isu dapat ditutup secara otomatis begitu komit disatukan ke cabang `main`.

## <HopeIcon icon="iconfont icon-build-package" size="1.5rem" color="rgb(254,189,105)" /> Uji Paket Binari

Setelah kode diperbarui di cabang `develop` dan `main`, skrip CI Azure Pipeline akan membangun kode terbaru ke paket `Snap Hutao Alpha`. Begitu paket dibangun, itu akan dirilis di [halaman Rilis GitHub](https://github.com/DGP-Studio/Snap.Hutao/releases) sebagai paket pra-rilis.

Anda perlu menginstal sertifikat [Snap.Hutao.CI.cer](https://github.com/DGP-Studio/Snap.Hutao/releases/download/2023.10.3.1/Snap.Hutao.CI.cer) ke mesin lokal Anda, dan kemudian instal paket msix di rilis tersebut.

\*Jika rilis terbaru tidak berisi file terlampir, itu berarti paket masih dalam proses pengunggahan.
