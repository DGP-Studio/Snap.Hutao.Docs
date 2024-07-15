import{_ as n,o as a,c as s,e}from"./app-Cs8-KPpC.js";const i={},t=e(`<div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">headerDepth</span><span class="token punctuation">:</span> <span class="token number">2</span>
<span class="token key atrule">category</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>Fitur<span class="token punctuation">,</span> Tutorial<span class="token punctuation">]</span>
<span class="token key atrule">tag</span><span class="token punctuation">:</span>
  <span class="token punctuation">[</span>Snap Hutao Cloud<span class="token punctuation">,</span> Verifikasi Geetest<span class="token punctuation">,</span> Pengaturan Bahasa<span class="token punctuation">,</span> Pengaturan Lanjutan<span class="token punctuation">]</span>
<span class="token key atrule">order</span><span class="token punctuation">:</span> <span class="token number">14</span>
<span class="token key atrule">comment</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>
<span class="token punctuation">---</span></span>

<span class="token title important"><span class="token punctuation">#</span> Pengaturan Perangkat Lunak</span>

::: info

<span class="token list punctuation">-</span> Tutorial fitur berikut disajikan sesuai dengan urutan dalam program.

:::

<span class="token title important"><span class="token punctuation">##</span> Tentang Snap Hutao</span>

Bagian ini berisi informasi berikut:

<span class="token list punctuation">-</span> Ikon Snap Hutao: Anda dapat menemukan gambar asli ikon di <span class="token url">[<span class="token content">halaman utama</span>](<span class="token url">/</span>)</span>
  <span class="token list punctuation">-</span> Seniman: <span class="token url">[<span class="token content">画画的芦苇 (BiliBili)</span>](<span class="token url">https://space.bilibili.com/274422134</span>)</span>
    ::: details Proses Pembuatan
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BiliBili</span> <span class="token attr-name">bvid</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>BV1UL411d7Py<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    :::
  <span class="token list punctuation">-</span> <span class="token url">[<span class="token content">DGP-Studio</span>](<span class="token url">https://github.com/DGP-Studio</span>)</span> memiliki izin dari pemilik untuk menggunakannya untuk Proyek Snap Hutao
<span class="token list punctuation">-</span> Versi klien Snap Hutao
<span class="token list punctuation">-</span> ID Perangkat

<span class="token title important"><span class="token punctuation">##</span> Akun Snap Hutao &lt;Badge text=&quot;Beta&quot; type=&quot;info&quot; /&gt;</span>

<span class="token url"><span class="token operator">!</span>[<span class="token content">Akun-hutao</span>](<span class="token url">https://img.alicdn.com/imgextra/i1/1797064093/O1CN01LtqGEF1g6dy9LMxCm_!!1797064093.png_.webp</span>)</span>
Sistem akun Snap Hutao dirancang oleh DGP-Studio untuk menyediakan komponen dasar bagi layanan cloud seperti cadangan riwayat wish.
Saat ini, Anda sudah dapat mendaftar dan masuk ke akun Snap Hutao Anda di halaman pengaturan.

<span class="token title important"><span class="token punctuation">##</span> Pengalaman Shell</span>

<span class="token list punctuation">-</span> Buat Pintasan Desktop
  <span class="token list punctuation">-</span> Snap Hutao akan membuat pintasan dengan hak akses Administrator di desktop pengguna

<span class="token title important"><span class="token punctuation">##</span> Penampilan</span>

<span class="token list punctuation">-</span> Bahasa

  <span class="token list punctuation">-</span> Secara default, Snap Hutao akan mengikuti pengaturan bahasa sistem
  <span class="token list punctuation">-</span> Anda dapat memaksa untuk mengubah ke bahasa lain di halaman pengaturan

<span class="token list punctuation">-</span> Materi Latar Belakang
  <span class="token list punctuation">-</span> Di opsi ini, Anda dapat mengubah materi latar belakang perangkat lunak menjadi
    <span class="token list punctuation">-</span> Akrilik
    <span class="token list punctuation">-</span> Mika (hanya Windows 11)
    <span class="token list punctuation">-</span> MikaAlt (hanya Windows 11)
  <span class="token list punctuation">-</span> Pengaturan ini akan langsung berlaku

<span class="token title important"><span class="token punctuation">##</span> Beranda</span>

<span class="token list punctuation">-</span> Kartu Dasbor
  <span class="token list punctuation">-</span> Anda dapat mengklik opsi ini untuk beralih tampilan kartu di Beranda Dasbor
    <span class="token list punctuation">-</span> Game Launcher
    <span class="token list punctuation">-</span> Riwayat Wish
    <span class="token list punctuation">-</span> Pencapaian
    <span class="token list punctuation">-</span> Catatan Realtime

<span class="token title important"><span class="token punctuation">##</span> Game</span>

<span class="token list punctuation">-</span> Path Game

  <span class="token list punctuation">-</span> Di bidang ini, Anda dapat memodifikasi atau mengatur path game Anda untuk Snap Hutao
  <span class="token list punctuation">-</span> Saat mengatur path game, Anda harus memilih program game bukan program peluncur
    <span class="token list punctuation">-</span> Seperti <span class="token code-snippet code keyword">\`$\\Genshin Impact\\Genshin Impact Game\\YuanShen.exe\`</span>

<span class="token list punctuation">-</span> Path PowerShell

  <span class="token list punctuation">-</span> Snap Hutao menggunakan PowerShell untuk memodifikasi bidang registri Genshin Impact untuk beralih akun game. Opsi ini memungkinkan pengguna memilih path PowerShell untuk memperbaiki masalah ketika path PowerShell tidak dapat ditemukan secara otomatis

<span class="token list punctuation">-</span> Hapus Cache Web Browser Game
  <span class="token list punctuation">-</span> Ketika Anda menggunakan metode pembaruan cache web dalam fitur riwayat wish dan menerima kesalahan kedaluwarsa authkey, Anda dapat mencoba operasi ini untuk memperbaiki kesalahan tersebut
  <span class="token list punctuation">-</span> Klik bidang ini untuk mengeksekusi operasi

<span class="token title important"><span class="token punctuation">##</span> Riwayat Wish</span>

<span class="token list punctuation">-</span> Di bidang ini, Anda dapat memilih untuk menyembunyikan peristiwa wish yang tidak memiliki catatan dalam periode tertentu dalam fitur ekspor wish

<span class="token title important"><span class="token punctuation">##</span> Verifikasi Geetest</span>

MiYouShe menggunakan verifikasi Geetest untuk memblokir permintaan bukan dari operasi manusia nyata, sehingga beberapa permintaan dari Snap Hutao, seperti klaim hadiah check-in dan pengambilan data Catatan Realtime, mungkin gagal karena dianggap sebagai operasi robot.
Jika Anda memiliki layanan pihak ketiga untuk melewati verifikasi Geetest, Anda dapat mengonfigurasi pengaturan ini untuk melewati parameter verifikasi ke penyedia layanan yang Anda gunakan.

Berhasil mengonfigurasi pengaturan ini akan membantu Snap Hutao melewati verifikasi saat mengambil data dari Catatan Realtime dan mengklaim hadiah check-in, serta menghindari kesalahan <span class="token code-snippet code keyword">\`-1034\`</span> dari MiYouShe.

<span class="token title important"><span class="token punctuation">##</span> Penyimpanan</span>

<span class="token list punctuation">-</span> Buka Folder Data
  <span class="token list punctuation">-</span> Klik bidang ini untuk membuka folder data yang berisi data pengguna, log, dan metadata
<span class="token list punctuation">-</span> Ubah Direktori Data
  <span class="token list punctuation">-</span> Bidang ini memungkinkan Anda mengubah direktori data menjadi path yang Anda inginkan
<span class="token list punctuation">-</span> Buka Folder Cache
  <span class="token list punctuation">-</span> Klik bidang ini akan membuka folder cache yang menyimpan aset gambar yang digunakan oleh Snap Hutao
<span class="token list punctuation">-</span> Reset Sumber Daya Gambar
  <span class="token list punctuation">-</span> Opsi ini memungkinkan pengguna untuk mereset cache gambar saat terlalu banyak gambar gagal dimuat. Program akan
    mengunduh ulang sumber daya gambar saat mulai berikutnya

<span class="token title important"><span class="token punctuation">##</span> Fitur Berbahaya</span>

<span class="token list punctuation">-</span> Aktifkan Fitur Lanjutan
  <span class="token list punctuation">-</span> Dengan Snap Hutao berjalan sebagai administrator, Anda dapat mengaktifkan bidang ini untuk mengaktifkan fitur lanjutan di peluncur game
    &gt; Untuk referensi:
    &gt;
    &gt; <span class="token url">[<span class="token content">Ketentuan Layanan Snap Hutao</span>](<span class="token url">../statements/tos.html</span>)</span>
    &gt;
    &gt; <span class="token url">[<span class="token content">Ketentuan Layanan Genshin Impact (server CN/Chinese)</span>](<span class="token url">https://ys.mihoyo.com/main/company/agreement</span>)</span>
    &gt;
    &gt; <span class="token url">[<span class="token content">Ketentuan Layanan Genshin Impact (server luar negeri/Inggris)</span>](<span class="token url">https://genshin.hoyoverse.com/en/company/terms</span>)</span>
<span class="token list punctuation">-</span> Hapus Semua Pengguna
  <span class="token list punctuation">-</span> Menjalankan operasi ini akan menghapus semua data pengguna di Snap Hutao
  <span class="token list punctuation">-</span> Klik pada bidang ini untuk beroperasi, Anda akan diminta untuk konfirmasi
  <span class="token list punctuation">-</span> Dalam sebagian besar skenario, Anda tidak perlu menggunakan bidang ini
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),l=[t];function u(p,o){return a(),s("div",null,l)}const r=n(i,[["render",u],["__file","hutao-settings.html.vue"]]),d=JSON.parse('{"path":"/id/features/hutao-settings.html","title":"","lang":"id-ID","frontmatter":{"head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://hut.ao/zh/features/hutao-settings.html"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://hut.ao/en/features/hutao-settings.html"}],["link",{"rel":"alternate","hreflang":"ru-ru","href":"https://hut.ao/ru/features/hutao-settings.html"}],["meta",{"property":"og:url","content":"https://hut.ao/id/features/hutao-settings.html"}],["meta",{"property":"og:site_name","content":"Snap Hutao"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://img.alicdn.com/imgextra/i1/1797064093/O1CN01LtqGEF1g6dy9LMxCm_!!1797064093.png_.webp"}],["meta",{"property":"og:locale","content":"id-ID"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"ru-RU"}],["meta",{"property":"og:updated_time","content":"2024-02-29T10:16:44.000Z"}],["meta",{"property":"article:author","content":"DGP-Studio"}],["meta",{"property":"article:modified_time","content":"2024-02-29T10:16:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"https://img.alicdn.com/imgextra/i1/1797064093/O1CN01LtqGEF1g6dy9LMxCm_!!1797064093.png_.webp\\"],\\"dateModified\\":\\"2024-02-29T10:16:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"DGP-Studio\\",\\"url\\":\\"https://github.com/DGP-Studio\\"}]}"],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://hut.ao/id/rss.xml","title":"Snap Hutao RSS Feed"}]]},"headers":[],"git":{"createdTime":1703269314000,"updatedTime":1709201804000,"contributors":[{"name":"Masterain","email":"i@irain.in","commits":1},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1},{"name":"Natsume","email":"wardanadm2@gmail.com","commits":1}]},"readingTime":{"minutes":2.03,"words":610},"filePathRelative":"id/features/hutao-settings.md","localizedDate":"22 Desember 2023"}');export{r as comp,d as data};
