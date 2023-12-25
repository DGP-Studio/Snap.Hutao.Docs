---
category:
  - FAQ
icon: iconfont icon-delete
order: 9
comment: false
---

# Menghapus Snap Hutao

- Hapus `Scheduled Task` Catatan Real-time
  - Sebelum versi 1.4.15, jika langkah ini tidak dijalankan, `Scheduled Task` yang digunakan untuk menyegarkan catatan real-time mungkin tidak terhapus, dan Anda mungkin menghadapi [masalah ini](FAQ.md#为什么会弹出需要使用新应用以打开的对话框)
  - **Metode 1** <Badge text="Untuk versi <= 1.4.15" type="tip" />：
    - Buka Snap Hutao, dan buka halaman pengaturan
    - Temukan kolom **Hapus Semua `Scheduled Task`** dan klik tombol **Jalankan** <Badge text="Memerlukan hak administrator" type="tip" />
  - **Metode 2**：
    - Jalankan skrip PowerShell berikut
      ```PowerShell
      schtasks /delete /tn SnapHutaoDailyNoteRefreshTask
      ```
  - **Metode 3**：
    - Buka Pengelola `Scheduled Task` Windows
    - Cari tugas `SnapHutaoDailyNoteRefreshTask` dan hapus
  - **Metode 4**：
    - Tingkatkan ke versi `1.5.1` dan buka Catatan Real-time
    - Tutup perangkat lunak dan hapus
- Hapus Perangkat Lunak
  - Buka `Menu Start`
  - Cari atau temukan `Snap Hutao`
  - Klik kanan, lalu pilih `Uninstall`
- Hapus folder data (Jika ingin menghapus sepenuhnya)
  - Buka dan hapus `%userprofile%/Documents/Hutao`