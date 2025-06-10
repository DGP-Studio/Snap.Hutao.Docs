---
headerDepth: 2
icon: iconfont icon-tool
category: [FAQ]
order: 3
description: Penjelasan mengenai Jaringan Loopback dan solusi agar Snap Hutao bisa terhubung ke internet saat menggunakan proxy.
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/en/advanced/loopback.html&has_description=False
---

# Jaringan Loopback

## Apa itu Jaringan Loopback?

Snap Hutao adalah aplikasi modern (AppX) yang dipromosikan oleh Microsoft. Untuk alasan keamanan, Windows menerapkan aturan khusus pada aplikasi jenis ini: mereka diisolasi dari jaringan lokal komputer. Aturan inilah yang disebut "Jaringan Loopback".

Bayangkan Snap Hutao berjalan di dalam sebuah "kotak kaca" yang aman. Kotak ini punya lubang kecil untuk terhubung ke internet.

Saat Anda menyalakan proxy atau akselerator game, jalur koneksi internet di komputer Anda berubah. Akibatnya, "lubang kecil" pada kotak kaca tadi jadi terhalang, dan Snap Hutao tidak bisa terhubung ke mana-mana.

## Masalah yang Mungkin Timbul

- Snap Hutao tidak bisa terhubung ke internet setelah Anda menyalakan proxy.
- Fitur online seperti ekspor riwayat Gacha atau pembaruan Catatan Real-time gagal.

## Solusi

### 1. Konfigurasi di Dalam Snap Hutao (Disarankan)

1. Buka Snap Hutao.
2. Klik "Feedback Center" di menu kiri.
3. Di panel kanan, cari dan klik "Unblock Loopback Restriction".
4. Klik tombol "Confirm" pada jendela izin administrator yang muncul.

Operasi ini akan memberi izin pada Snap Hutao untuk menggunakan koneksi proxy dengan normal.

### 2. Konfigurasi di Aplikasi Proxy Anda

1. Aktifkan **TUN Mode** (jika aplikasi proxy Anda menyediakan opsi ini).
2. Hubungi penyedia layanan proxy Anda dan tanyakan dukungan teknis untuk masalah koneksi pada aplikasi AppX Windows untuk mendapatkan solusi yang lebih spesifik.

Dengan cara di atas, Anda bisa mengatasi masalah koneksi yang disebabkan oleh Jaringan Loopback dan membuat Snap Hutao berjalan normal di berbagai lingkungan jaringan.