# DPW-KELOMPOK8
1. Anggita Natarina
2. Marsha Harliani
3. M.Fariel Gifari

# Dokumentasi Redesain UI/UX Web Fakultas Teknik UNRI

Repositori ini berisi hasil rancangan ulang (redesain) antarmuka bagian depan (Front-End) untuk situs web Fakultas Teknik Universitas Riau. Pembaruan ini difokuskan pada peningkatan estetika visual (UI) dan pengalaman pengguna (UX) yang lebih modern, interaktif, dan responsif.

Berikut adalah rincian perubahan desain yang telah dilakukan beserta alasan fundamental pembaruannya:

## 1. Pembaruan Tipografi dan Sistem Warna (Visual Identity)
* **Perubahan:** Mengimplementasikan CSS Variables (`:root`) untuk standarisasi warna (merah marun, emas, hitam). Font diubah menggunakan kombinasi **DM Serif Display** untuk *heading*/judul dan **Plus Jakarta Sans** untuk teks paragraf.
* **Mengapa Diubah:** Penggunaan variabel warna memastikan konsistensi desain dan mempermudah *maintenance* kode ke depannya. Kombinasi font *serif* dan *sans-serif* dipilih untuk menyeimbangkan kesan institusi pendidikan yang klasik/prestisius dengan keterbacaan (readability) digital yang modern dan bersih.

## 2. Peningkatan Hero Slider dengan Efek Sinematik
* **Perubahan:** Menambahkan lapisan *overlay* gradasi gelap pada gambar *slider* dan memberikan animasi *zoom-in* secara perlahan (efek *Ken Burns* menggunakan `transform: scale`) pada gambar latar belakang saat *slide* aktif.
* **Mengapa Diubah:** *Overlay* gelap berfungsi untuk meningkatkan rasio kontras, sehingga teks informasi (berwarna putih) di atasnya tetap terbaca dengan jelas apapun gambar latar belakangnya. Efek *zoom* ditambahkan untuk memberikan nuansa dinamis dan tidak kaku pada pandangan pertama (first impression) pengunjung web.

## 3. Implementasi "Floating Card" pada Tata Letak Berita
* **Perubahan:** Desain daftar berita diubah menggunakan sistem Grid 3-kolom bergaya *Card*. Ditambahkan efek *hover* interaktif di mana kartu akan seolah-olah terangkat (`transform: translateY`) dan area bayangan (`box-shadow`) membesar ketika kursor diarahkan.
* **Mengapa Diubah:** Sistem *card* membuat informasi yang padat menjadi lebih terkotak rapi dan mudah dipindai oleh mata (scannable). Efek *hover* secara psikologis meningkatkan *affordance*, yaitu memberikan isyarat visual yang jelas kepada pengguna bahwa elemen tersebut dapat di-klik.

## 4. Animasi Infinite Scrolling pada Logo Mitra
* **Perubahan:** Bagian logo mitra kerja sama diubah dari susunan statis menjadi *scrolling marquee* (berjalan otomatis ke kiri tanpa henti). Logo dibuat *grayscale* (abu-abu) secara *default* dan berubah menjadi berwarna penuh ketika di-*hover*.
* **Mengapa Diubah:** Animasi berjalan ini menghemat ruang vertikal pada halaman web meskipun jumlah mitra sangat banyak. Efek *grayscale* menjaga web agar tidak terlihat terlalu ramai oleh berbagai macam warna logo asli, namun tetap memberikan interaktivitas saat pengguna menunjuk logo tersebut.

## 5. Optimalisasi Navigasi (Sticky & Mobile-Friendly)
* **Perubahan:** Membagi navigasi menjadi *Topbar* (untuk pintasan cepat) dan *Navbar* utama yang sifatnya *Sticky* (tetap menempel di atas layar saat di-*scroll* dengan penambahan efek bayangan). Pada layar *mobile*, navigasi berubah menjadi *Full-screen Hamburger Menu*.
* **Mengapa Diubah:** *Sticky navbar* adalah standar UX modern agar pengguna tidak perlu repot *scroll* jauh ke atas hanya untuk berpindah halaman. Menu *hamburger* pada versi *mobile* menjamin web tetap responsif, bersih, dan *touch-friendly* saat diakses melalui layar sentuh *smartphone*.
