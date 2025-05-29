---
category: [Sumber Terbuka, Pengembangan]
tag: ["Pengembangan", "GitHub"]
icon: iconfont icon-code
order: 3
description: Snap Hutao menggunakan C# dan .NET Framework untuk mengembangkan klien desktop dan server. Kami sangat menerima masukan dari komunitas sumber terbuka. Jika Anda bersedia menyumbangkan kode Anda, silakan baca panduan di halaman ini.
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/id/development/contribute.html
---

::: important
Ini adalah terjemahan yang dibuat oleh model Google Gemini, dan kami menerima perbaikan melalui PR.
:::

# Kontribusikan Kode Anda

Snap Hutao menggunakan `C#` dan `.NET Framework` untuk mengembangkan klien desktop dan server. Kami sangat menerima masukan dari komunitas sumber terbuka. Jika Anda tertarik untuk menyumbangkan kode, silakan baca panduan di halaman ini.

Anda dapat melihat semua [isu yang belum terpecahkan](https://github.com/DGP-Studio/Snap.Hutao/issues?q=is%3Aissue%20is%3Aopen%20-label%3A%E5%B7%B2%E5%AE%8C%E6%88%90) di GitHub.

## <HopeIcon icon="iconfont icon-visual-studio" size="1.5rem" color="rgb(193,142,241)" /> Menyiapkan Proyek Snap.Hutao

1. Unduh dan pasang [Visual Studio](https://visualstudio.microsoft.com/downloads/)
   - Anda perlu memasang komponen berikut:
     - `.NET desktop development` (pengembangan desktop .NET)
     - `Desktop development with C++` (pengembangan desktop dengan C++)
     - `WinUI application development` (pengembangan aplikasi WinUI)
2. Pasang plugin `Single-project MSIX Packaging Tools for VS 2022` yang disediakan oleh Microsoft dari Visual Studio Marketplace.
3. Gunakan Git untuk mengklon repositori proyek: `https://github.com/DGP-Studio/Snap.Hutao.git`.
4. Pindahkan cabang ke `develop`.
5. Buka solusi proyek (Solution) dengan Visual Studio, dan Anda siap untuk mulai mengembangkan.

## <HopeIcon icon="iconfont icon-debug" size="1.5rem" color="rgb(73,156,84)" /> Mengaktifkan Debug

1. Unduh dan pasang [Sysinternals Suite](https://www.microsoft.com/store/productid/9P7KNL5RWT25) (Microsoft Store) atau dari [situs web Microsoft](https://learn.microsoft.com/zh-cn/sysinternals/downloads/sysinternals-suite).
2. Temukan dan jalankan `DebugView` (di menu Mulai atau di file yang telah diekstrak).
3. Jalankan program utama Snap Hutao.
4. Amati informasi debug yang dikeluarkan oleh `DebugView`.

## <HopeIcon icon="iconfont icon-pull-request" size="1.5rem" color="rgb(130,80,223)"/> Mengajukan Pull Request

- Semua Pull Request yang tidak berasal dari cabang lain proyek hanya diizinkan untuk digabungkan ke cabang `develop`.
- Jika kode Anda terkait dengan isu yang ada, gunakan [kata kunci](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/using-keywords-in-issues-and-pull-requests) untuk menghubungkan PR Anda ke isu terkait. Ini akan membuat isu terkait otomatis tertutup ketika PR digabungkan ke cabang `main`.

## <HopeIcon icon="iconfont icon-build-package" size="1.5rem" color="rgb(254,189,105)" /> Menguji Program Pengemasan

::: warning Perhatian
Jika Anda ingin mencoba versi Alpha terbaru, silakan unduh dan pasang terlebih dahulu [**DGP_Studio_CA.crt**](https://github.com/DGP-Automation/Hutao-Auto-Release/releases/download/certificate-ca/DGP_Studio_CA.crt) ke **Otoritas Sertifikasi Akar Tepercaya**.
:::

- Setiap kali ada `push`, skrip GitHub Actions akan berjalan secara otomatis untuk membangun solusi terbaru:
  - Untuk cabang `main`, `develop`, dan `feat`, skrip akan secara otomatis mengunggah paket kompresi `Snap Hutao Alpha` yang telah dibuat untuk diuji.
  - Cabang lain hanya memverifikasi kemampuan kode untuk dibangun, tidak menyediakan fungsi unggah.
- Anda dapat melihat semua catatan kompilasi di [Pipeline Alpha](https://github.com/DGP-Studio/Snap.Hutao/actions/workflows/alpha.yml).
