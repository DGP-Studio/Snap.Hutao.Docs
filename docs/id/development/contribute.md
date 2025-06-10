---
category: [Open Source, Development]
tag: ["Development", "GitHub"]
icon: iconfont icon-code
order: 3
description: Snap Hutao dikembangkan menggunakan C# dan .NET framework untuk klien desktop dan server. Kami sangat menghargai masukan dari komunitas open-source. Jika Anda ingin berkontribusi dengan kode, silakan lihat panduan di dokumen ini.
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/en/development/contribute.html
---

# Berkontribusi dengan Kode

Snap Hutao dikembangkan menggunakan `C#` dan `.NET Framework` untuk klien desktop dan server. Kami sangat menghargai masukan dari komunitas open-source. Jika Anda ingin berkontribusi dengan kode, silakan baca panduan berikut.

Anda bisa menemukan semua [isu yang belum terselesaikan](https://github.com/DGP-Studio/Snap.Hutao/issues?q=is%3Aissue+is%3Aopen+-label%3A%E5%B7%B2%E5%AE%8C%E6%88%90) di GitHub.

## <HopeIcon icon="iconfont icon-visual-studio" size="1.5rem" color="rgb(193,142,241)" /> Menyiapkan Proyek Snap Hutao

1.  Unduh dan instal [Visual Studio](https://visualstudio.microsoft.com/downloads/)
    - Anda perlu menginstal komponen-komponen berikut:
      - `.NET desktop development`
      - `Desktop development with C++`
      - `Windows application development`
2.  Instal `Single-project MSIX Packaging Tools for VS 2022` dari Microsoft melalui Visual Studio Marketplace.
3.  Gunakan Git untuk melakukan clone repositori proyek: `https://github.com/DGP-Studio/Snap.Hutao.git`.
4.  Pindah branch ke `develop`.
5.  Buka *solution* proyek dengan Visual Studio, dan Anda siap untuk mulai mengembangkan.

## <HopeIcon icon="iconfont icon-debug" size="1.5rem" color="rgb(73,156,84)" /> Mengaktifkan Debug

1. Unduh dan instal [Sysinternals Suite](https://www.microsoft.com/store/productid/9P7KNL5RWT25) dari Microsoft Store atau unduh dari [situs web Microsoft](https://learn.microsoft.com/en-us/sysinternals/downloads/sysinternals-suite).
2. Cari dan jalankan program `DebugView`.
3. Jalankan program utama Snap Hutao.
4. Amati informasi debug yang dikeluarkan oleh `DebugView`.

## <HopeIcon icon="iconfont icon-pull-request" size="1.5rem" color="rgb(130,80,223)"/> Memulai Pull Request

- Semua Pull Request yang bukan berasal dari branch lain di dalam proyek hanya diizinkan untuk di-merge ke branch `develop`.
- Jika kode Anda terkait dengan isu yang sudah ada, silakan gunakan [kata kunci](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/using-keywords-in-issues-and-pull-requests) untuk menautkan PR Anda ke isu yang relevan. Ini akan otomatis menutup isu tersebut saat PR di-merge ke branch `main`.

## <HopeIcon icon="iconfont icon-build-package" size="1.5rem" color="rgb(254,189,105)" /> Menguji Paket Biner

::: warning Perhatian
Jika Anda ingin mencoba versi Alpha terbaru, silakan unduh dan instal [**DGP_Studio_CA.crt**](https://github.com/DGP-Automation/Hutao-Auto-Release/releases/download/certificate-ca/DGP_Studio_CA.crt) ke **Trusted Root Certification Authorities** terlebih dahulu.
:::

- Setelah setiap `push`, sebuah skrip GitHub Actions akan berjalan otomatis untuk membangun *solution* terbaru:
  - Untuk branch `main`, `develop`, dan `feat`, skrip akan otomatis mengunggah arsip `Snap Hutao Alpha` yang sudah dibangun untuk diuji.
  - Branch lain hanya akan memverifikasi apakah kode bisa dibangun dan tidak akan menyediakan fitur unggah.
- Anda dapat melihat semua log pembangunan di [pipeline Alpha](https://github.com/DGP-Studio/Snap.Hutao/actions/workflows/alpha.yml).