import{_ as i,c as r,a as n,e,b as l,d as o,f as s,r as u,o as g}from"./app-B417jO5j.js";const m={},k={class:"hint-container info"};function p(d,a){const t=u("RouteLink");return g(),r("div",null,[a[4]||(a[4]=n("h1",{id:"catatan-langsung",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#catatan-langsung"},[n("span",null,"Catatan Langsung")])],-1)),a[5]||(a[5]=n("div",{class:"hint-container important"},[n("p",{class:"hint-container-title"},"Penting"),n("p",null,"Ini adalah terjemahan yang dibuat oleh model Google Gemini, dan kami menerima perbaikan melalui PR.")],-1)),n("div",k,[a[3]||(a[3]=n("p",{class:"hint-container-title"},"Prasyarat",-1)),n("p",null,[a[1]||(a[1]=e("Fitur ini mengharuskan Anda untuk masuk ke akun MiYouShe / HoYoLAB Anda di Snap Hutao. Untuk metode login, silakan lihat dokumen ")),l(t,{to:"/id/features/mhy-account-switch.html"},{default:o(()=>a[0]||(a[0]=[e("Peralihan Banyak Akun MiYouShe")])),_:1}),a[2]||(a[2]=e("."))])]),a[6]||(a[6]=s('<p><img src="https://img.alicdn.com/imgextra/i4/1797064093/O1CN01YUyKil1g6e0x3SpKX_!!1797064093.png_.webp" alt="live-data-tracking" loading="lazy"></p><h2 id="menambahkan-catatan-langsung" tabindex="-1"><a class="header-anchor" href="#menambahkan-catatan-langsung"><span>Menambahkan Catatan Langsung</span></a></h2><ol><li>Klik tombol &quot;Tambahkan Catatan Langsung&quot;.</li><li>Di jendela pop-up &quot;Tambahkan Catatan Langsung&quot;, temukan UID karakter game yang ingin Anda tambahkan, dan klik tombol plus di sebelah kanannya.</li><li>Karakter game yang ditambahkan akan ditampilkan di halaman &quot;Catatan Langsung&quot;. <ul><li>Catatan Langsung akan secara otomatis memperbarui data pada interval waktu yang tetap.</li><li>Klik &quot;Pengaturan Notifikasi&quot; di pojok kanan atas jendela untuk mengatur interval waktu kueri.</li></ul></li><li>Jika Anda ingin segera mendapatkan data terbaru, klik tombol &quot;Segarkan Sekarang&quot;.</li><li>Jika kesalahan <code>-1034</code> muncul saat penyegaran data, ini menunjukkan bahwa mekanisme anti-robot MiYouShe telah terpicu. Anda dapat mengatasinya dengan mengonfigurasi verifikasi tanpa hambatan di pengaturan Snap Hutao.</li></ol><h2 id="memverifikasi-pengguna-dan-karakter" tabindex="-1"><a class="header-anchor" href="#memverifikasi-pengguna-dan-karakter"><span>Memverifikasi Pengguna dan Karakter</span></a></h2><p>Jika Anda menggunakan akun MiYouShe, kemungkinan kode verifikasi akan terpicu karena mekanisme anti-robot, sehingga data Catatan Langsung tidak dapat diperbarui. Anda dapat menyelesaikan masalah ini dengan langkah-langkah berikut:</p><ol><li>Klik tombol &quot;Verifikasi Pengguna dan Karakter Saat Ini&quot; di kiri atas halaman Catatan Langsung.</li><li>Snap Hutao akan menampilkan jendela verifikasi. Setelah menyelesaikan verifikasi, Anda dapat memperbarui data akun yang terpengaruh oleh mekanisme anti-robot.</li></ol><h2 id="pengaturan-notifikasi-global" tabindex="-1"><a class="header-anchor" href="#pengaturan-notifikasi-global"><span>Pengaturan Notifikasi Global</span></a></h2><p>Klik &quot;Pengaturan Notifikasi&quot; di pojok kanan atas jendela untuk mengonfigurasi perilaku global fitur Catatan Langsung, termasuk:</p><ul><li><strong>Mengaktifkan/menonaktifkan penyegaran data otomatis</strong>.</li><li><strong>Mengatur interval waktu penyegaran data otomatis</strong>.</li><li><strong>Mode Jangan Ganggu Notifikasi</strong>: <ul><li>Jika diaktifkan, notifikasi hanya akan ditampilkan di pusat notifikasi sistem.</li></ul></li><li><strong>Notifikasi Prioritas Tinggi</strong>: <ul><li>Menghindari notifikasi secara otomatis masuk ke pusat tindakan, tetapi dapat mengganggu penggunaan sehari-hari.</li></ul></li><li><strong>Webhook Penerusan Data Kustom</strong>: <ul><li>Snap Hutao memungkinkan pengguna untuk meneruskan data Catatan Langsung ke program pihak ketiga untuk mengurangi permintaan langsung ke API miHoYo.</li><li>Di &quot;URL Webhook Catatan Langsung&quot;, masukkan alamat antarmuka <code>HTTP API</code> program pihak ketiga. Snap Hutao akan meneruskan data mentah ke antarmuka ini melalui permintaan <code>POST</code>.</li></ul></li></ul><h2 id="pengaturan-independen-akun" tabindex="-1"><a class="header-anchor" href="#pengaturan-independen-akun"><span>Pengaturan Independen Akun</span></a></h2><ol><li>Arahkan kursor mouse ke formulir Catatan Langsung karakter yang pengaturannya perlu diubah.</li><li>Klik tombol pengaturan di pojok kanan atas formulir untuk masuk ke opsi pengaturan berikut: <ul><li><strong>Ambang batas pengingat Resin Asli</strong> (rentang: 0–200)</li><li><strong>Ambang batas pengingat Mata Uang Realm</strong> (rentang: 0–2400)</li><li><strong>Aktifkan pengingat Parametric Transformer</strong> (aktif/nonaktif)</li><li><strong>Aktifkan pengingat batas Komisi Harian</strong> (aktif/nonaktif)</li><li><strong>Aktifkan pengingat Ekspedisi selesai</strong> (aktif/nonaktif)</li></ul></li><li>Setelah selesai mengubah, klik tombol &quot;Simpan&quot; untuk menyimpan pengaturan saat ini.</li></ol><h2 id="menghapus-karakter" tabindex="-1"><a class="header-anchor" href="#menghapus-karakter"><span>Menghapus Karakter</span></a></h2><ol><li>Arahkan kursor mouse ke formulir Catatan Langsung karakter yang perlu dihapus.</li><li>Klik tombol hapus di pojok kanan atas formulir untuk menghapus Catatan Langsung karakter tersebut.</li></ol><h2 id="pertanyaan-umum" tabindex="-1"><a class="header-anchor" href="#pertanyaan-umum"><span>Pertanyaan Umum</span></a></h2><h3 id="mengapa-pengaturan-penyegaran-otomatis-catatan-langsung-menampilkan-pesan-gagal-memodifikasi-tugas-terjadwal" tabindex="-1"><a class="header-anchor" href="#mengapa-pengaturan-penyegaran-otomatis-catatan-langsung-menampilkan-pesan-gagal-memodifikasi-tugas-terjadwal"><span>Mengapa pengaturan penyegaran otomatis Catatan Langsung menampilkan pesan &quot;Gagal memodifikasi tugas terjadwal&quot;?</span></a></h3><ul><li>Penyegaran otomatis Catatan Langsung bergantung pada Penjadwal Tugas Windows.</li><li>Untuk menghindari masalah izin, Snap Hutao akan mengatur tugas terjadwal dalam mode non-administrator.</li></ul><p><strong>Solusi:</strong></p><ol><li>Jika Anda telah mengaktifkan penyegaran otomatis dengan versi lama, Anda dapat menghapus tugas terjadwal lama secara manual. Nama tugas terjadwal adalah <code>SnapHutaoDailyNoteRefreshTask</code>.</li><li>Jika Anda belum pernah mengaktifkan tugas terjadwal, kemungkinan akun pengguna Windows Anda saat ini tidak memiliki izin yang cukup. Anda dapat mencoba menggunakan akun administrator.</li><li>Jika masalah tetap tidak teratasi, Anda mungkin perlu menginstal ulang sistem.</li></ol>',18))])}const c=i(m,[["render",p],["__file","real-time-notes.html.vue"]]),f=JSON.parse('{"path":"/id/features/real-time-notes.html","title":"Catatan Langsung","lang":"id-ID","frontmatter":{"headerDepth":2,"category":["Fitur","Tutorial"],"tag":["Catatan Langsung","Ekspedisi","Resin"],"order":7,"comment":false,"description":"Fitur Catatan Langsung di Snap Hutao secara berkala memperbarui data MiYouShe pemain, menyinkronkan informasi dinamis dalam Genshin Impact ke komputer lokal, dan mengirimkan notifikasi pengingat berdasarkan kondisi yang ditetapkan pengguna.","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://hut.ao/zh/features/real-time-notes.html"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://hut.ao/en/features/real-time-notes.html"}],["link",{"rel":"alternate","hreflang":"ru-ru","href":"https://hut.ao/ru/features/real-time-notes.html"}],["link",{"rel":"alternate","hreflang":"ja-jp","href":"https://hut.ao/jp/features/real-time-notes.html"}],["meta",{"property":"og:url","content":"https://hut.ao/id/features/real-time-notes.html"}],["meta",{"property":"og:site_name","content":"Snap Hutao"}],["meta",{"property":"og:title","content":"Catatan Langsung"}],["meta",{"property":"og:description","content":"Fitur Catatan Langsung di Snap Hutao secara berkala memperbarui data MiYouShe pemain, menyinkronkan informasi dinamis dalam Genshin Impact ke komputer lokal, dan mengirimkan notifikasi pengingat berdasarkan kondisi yang ditetapkan pengguna."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://img.alicdn.com/imgextra/i4/1797064093/O1CN01YUyKil1g6e0x3SpKX_!!1797064093.png_.webp"}],["meta",{"property":"og:locale","content":"id-ID"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"ru-RU"}],["meta",{"property":"og:locale:alternate","content":"ja-JP"}],["meta",{"property":"og:updated_time","content":"2025-01-12T04:59:21.000Z"}],["meta",{"property":"article:tag","content":"Catatan Langsung"}],["meta",{"property":"article:tag","content":"Ekspedisi"}],["meta",{"property":"article:tag","content":"Resin"}],["meta",{"property":"article:modified_time","content":"2025-01-12T04:59:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Catatan Langsung\\",\\"image\\":[\\"https://img.alicdn.com/imgextra/i4/1797064093/O1CN01YUyKil1g6e0x3SpKX_!!1797064093.png_.webp\\"],\\"dateModified\\":\\"2025-01-12T04:59:21.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"DGP-Studio\\",\\"url\\":\\"https://github.com/DGP-Studio\\"}]}"],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://hut.ao/id/rss.xml","title":"Snap Hutao RSS Feed"}]]},"headers":[{"level":2,"title":"Menambahkan Catatan Langsung","slug":"menambahkan-catatan-langsung","link":"#menambahkan-catatan-langsung","children":[]},{"level":2,"title":"Memverifikasi Pengguna dan Karakter","slug":"memverifikasi-pengguna-dan-karakter","link":"#memverifikasi-pengguna-dan-karakter","children":[]},{"level":2,"title":"Pengaturan Notifikasi Global","slug":"pengaturan-notifikasi-global","link":"#pengaturan-notifikasi-global","children":[]},{"level":2,"title":"Pengaturan Independen Akun","slug":"pengaturan-independen-akun","link":"#pengaturan-independen-akun","children":[]},{"level":2,"title":"Menghapus Karakter","slug":"menghapus-karakter","link":"#menghapus-karakter","children":[]},{"level":2,"title":"Pertanyaan Umum","slug":"pertanyaan-umum","link":"#pertanyaan-umum","children":[{"level":3,"title":"Mengapa pengaturan penyegaran otomatis Catatan Langsung menampilkan pesan \\"Gagal memodifikasi tugas terjadwal\\"?","slug":"mengapa-pengaturan-penyegaran-otomatis-catatan-langsung-menampilkan-pesan-gagal-memodifikasi-tugas-terjadwal","link":"#mengapa-pengaturan-penyegaran-otomatis-catatan-langsung-menampilkan-pesan-gagal-memodifikasi-tugas-terjadwal","children":[]}]}],"git":{"createdTime":1703269314000,"updatedTime":1736657961000,"contributors":[{"name":"Masterain","username":"Masterain","email":"i@irain.in","commits":3,"url":"https://github.com/Masterain"},{"name":"Mikachu2333","username":"Mikachu2333","email":"mikachu.23333@zohomail.com","commits":2,"url":"https://github.com/Mikachu2333"},{"name":"LinkChou","username":"LinkChou","email":"linkchou@yandex.com","commits":1,"url":"https://github.com/LinkChou"},{"name":"Mr.Hope","username":"Mr.Hope","email":"mister-hope@outlook.com","commits":2,"url":"https://github.com/Mr.Hope"},{"name":"Natsume","username":"Natsume","email":"wardanadm2@gmail.com","commits":1,"url":"https://github.com/Natsume"}]},"readingTime":{"minutes":2,"words":599},"filePathRelative":"id/features/real-time-notes.md","localizedDate":"22 Desember 2023"}');export{c as comp,f as data};
