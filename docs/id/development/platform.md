---
category: [open source, development]
tag: [open source, Hutao Database, Spiral Abyss Database, Enka, UIGF, Open data]
icon: iconfont icon-vscode
order: 2
---

# Platform Terbuka Hutao

Proyek Snap Hutao telah mendapatkan dukungan luas dari komunitas open source dan pengguna sejak diluncurkan
di GitHub pada 18 April 2022. Seiring dengan perkembangannya, kami telah membuat serangkaian layanan pendukung
sebagai middleware untuk Snap Hutao.

Sekarang, tim pengembangan membuat beberapa layanan praktis ini tersedia bagi komunitas open source dalam
bentuk antarmuka terbuka, digunakan oleh pengembang yang memiliki visi yang sama dengan kami. Kami akan menulis
dokumentasi penggunaan untuk antarmuka ini, menjaga layanan-layanan tersebut, dan memberikan jawaban atas
pertanyaan yang sering diajukan. Baik Anda adalah pengembang berpengalaman atau pemula, kami harap antarmuka ini
akan membantu Anda dalam membuat aplikasi.

## Hutao API & Hutao Cloud Open-source Developer's License

Hutao API adalah layanan antarmuka yang mengekspos Database Abyssal Hutao.
Pembuat perangkat lunak open source dapat menggunakan Hutao API untuk mengambil data dari basis data Hutao atau mengunggah data.

Pengembang yang mendapatkan akses ke Hutao API juga menerima hak penuh ke fitur Hutao Cloud dalam Snap Hutao sebagai
keuntungan.

Pengembang dapat mengajukan akses dengan mengirimkan informasi mereka melalui Platform Terbuka Hutao API
di [homa.snapgenshin.com](https://homa.snapgenshin.com/)

## Enka API dengan Akselerasi China

[Enka Network](https://enka.network/) adalah alat Genshin Impact yang sangat baik yang menyediakan data detail tentang
karakter dalam showcase karakter pengguna saat ini. Namun, karena akses terbatas ke beberapa layanan jaringan tertentu
di China, stabilitas fungsionalitas Enka Network di wilayah tersebut terganggu.

Untuk memastikan pengalaman pengguna yang lancar bagi pengguna Snap Hutao di China, tim pengembangan telah
menggunakan data Enka Network untuk pengembangan fitur [Karakter Saya](../features/character-data.md) dan
mendirikan server proxy.

Pengembang dapat meminta akses di grup obrolan pengembangan Snap Hutao atau grup discord dari administrator.

## Format Data Permainan Interchangeable UIGF

Snap Hutao bertujuan untuk memungkinkan aliran bebas data pengguna di antara berbagai alat open source
dengan fitur yang berbeda-beda. Untuk memfasilitasi hal ini, Snap Hutao telah menetapkan versi awal dari
[Standar Uniformed Interchangeable GachaLog Format (UIGF)](https://uigf.org/en/standards/UIGF.html).

Sejak itu, standar ini telah mendapatkan pengakuan lebih dari pengembang, mengarah pada promosi standar tambahan.
Banyak pengembang sekarang berkumpul di bawah [organisasi UIGF](https://github.com/UIGF-org). Tujuan kami adalah
untuk menjaga organisasi ini, memungkinkan pengembang untuk terhubung dengan lebih banyak pengguna, menerima umpan
balik, membuat kemajuan teknis, dan menciptakan alat Genshin Impact open source yang luar biasa.
