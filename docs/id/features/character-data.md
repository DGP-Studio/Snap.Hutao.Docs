---
headerDepth: 2
category: [Fitur, Tutorial]
tag: [Statistik Data, Tampilan Karakter]
order: 8
comment: false
description: Fitur "Karakter Saya" di Snap Hutao dapat membaca data detail karakter di akun Genshin Impact dan memberikan analisis, termasuk level, konstelasi, bakat, atribut Artefak, dan lainnya.
---

# Karakter Saya

::: important
Ini adalah terjemahan yang dibuat oleh model Google Gemini, dan kami menerima perbaikan melalui PR.
:::

::: info Prasyarat
Untuk menggunakan fitur ini, Anda perlu masuk ke akun MiYouShe atau HoYoLAB. Untuk metode login, silakan lihat [Penggantian Akun MiYouShe](mhy-account-switch.md#penggantian-akun-miyoushe).
:::

Fitur "Karakter Saya" dapat membaca data detail semua karakter di akun pengguna saat ini, termasuk level, konstelasi, senjata, bakat, Artefak, dan lainnya, untuk membantu pemain mengoptimalkan pengembangan dan pengelolaan karakter.

![Tampilan Kisi-kisi](/images/202501/characters_data.webp)

## Sinkronisasi Informasi Karakter

Klik tombol "Sinkronisasi Informasi Karakter" di kanan atas untuk memperbarui data berikut:

- Level Karakter dan Konstelasi Karakter
- Tingkat Persahabatan
- Level Senjata dan Tingkat Pemurnian
- Level Bakat
- Informasi Kostum
- Artefak dan atribut detailnya

## Menambahkan Karakter yang Dipilih Saat Ini ke Perhitungan Pengembangan

1. Pastikan data karakter telah disinkronkan.
2. Di halaman fitur "Karakter Saya", pilih karakter yang ingin Anda tambahkan ke perhitungan pengembangan.
3. Klik tombol "Perhitungan Pengembangan - Karakter dan Senjata Saat Ini" di kanan atas.

- Sistem akan secara otomatis mengisi level karakter, level bakat, dan level senjata yang telah disinkronkan. Pengguna dapat dengan bebas mengubah level target.

![Contoh Gambar Pengembangan](/images/202501/character_develop.webp)

Setelah selesai ditambahkan, Anda dapat melihat target pengembangan yang telah ditetapkan di halaman fitur "Rencana Pengembangan".

Untuk penjelasan fitur yang lebih detail, silakan lihat dokumen [Rencana Pengembangan](./develop-plan.md#rencana-pengembangan).

## Ekspor Detail Karakter ke Papan Klip

Halaman "Karakter Saya" mendukung ekspor data karakter dalam bentuk teks:

- Setelah memilih karakter target, klik tombol "Ekspor Teks ke Papan Klip" di kanan atas.
- Data yang diekspor disimpan di papan klip sistem dan dapat langsung ditempel untuk dibagikan.
- Contoh gaya teks adalah sebagai berikut:

```text
// =====================
// Kamisato Ayaka [Lv.90, ☆5, C6] [Lv.10, Lv.13 (10 +3), Lv.13 (10 +3)]
// ---------------------
// Mistsplitter Reforged [Lv.90, ☆5, R1]
// [Base Attack: 674] [CRIT DMG: 44.1%]
// ---------------------
// [HP: 12858]
// [ATK: 1016]
// [DEF: 784]
// [Elemental Mastery: 16]
// [CRIT Rate: 40.4%]
// [CRIT DMG: 262.3%]
// [Healing Bonus: 0.0%]
// [Incoming Healing Bonus: 0.0%]
// [Energy Recharge: 105.2%]
// [Cryo DMG Bonus: 61.6%]
// ---------------------
// 🌷 HP: 4780 [☆5 +20 Blizzard Strayer]
// [CRIT Rate: 7.0%][CRIT DMG: 13.2%][ATK: 14.6%][Energy Recharge: 5.2%]
// 🪶 ATK: 311 [☆5 +20 Blizzard Strayer]
// [CRIT DMG: 25.6%][CRIT Rate: 6.6%][HP: 269][HP: 5.3%]
// ⏳ ATK: 46.6% [☆5 +20 Blizzard Strayer]
// [DEF: 21][CRIT DMG: 15.5%][HP: 11.1%][CRIT Rate: 14.4%]
// 🍷 Cryo DMG Bonus: 46.6% [☆5 +20 Gilded Dreams]
// [Elemental Mastery: 16][ATK: 49][ATK: 15.2%][CRIT DMG: 13.2%]
// 👑 CRIT DMG: 62.2% [☆5 +20 Blizzard Strayer]
// [ATK: 15.2%][ATK: 33][CRIT Rate: 7.4%][HP: 299]
// =====================
```
