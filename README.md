**Tugas Slicing Website HTML/CSS/JS. Website portofolio sederhana yang responsive di mobile, tablet, dan desktop.**


Link deployment: https://portfolio-aurelia-imani.vercel.app/



Tampilan Mobile:

<img width="auto" height="650" alt="image" src="https://github.com/user-attachments/assets/8adf6bba-836e-464e-93cd-b65cc859f4b5" />



Tampilan Desktop

<img width="auto" height="768" alt="image" src="https://github.com/user-attachments/assets/9e025387-054f-4b41-8b9b-7587e67c26bb" />



**Penjelasan Singkat**

Website ini adalah halaman portofolio satu halaman (single page) yang berisi:

- Perkenalan singkat dan foto profil
- Tentang: Deskripsi diri
- Proyek: Daftar proyek sebelumnya
- Sosial Media: Daftar sosial media
- Kontak: Form kontak dengan validasi sederhana
- Footer: Hak cipta dengan tahun otomatis
- HTML untuk struktur halaman
- CSS (plain CSS, tanpa Tailwind/Bootstrap) untuk tampilan dan responsive dengan pendekatan mobile-first.
- JavaScript (DOM) untuk interaksi


**Responsive**

- Default (mobile), container tersusun ke bawah (flex-direction: column)
- Minimal 768px (tablet), container berjajar ke samping (flex-direction: row)
- Minimal 1024px (desktop), container dibatasi max-width: 1200px dan diratakan di tengah



**Fitur JavaScript**

- Menu hamburger yang bisa dibuka dan ditutup di tampilan mobile.
- Validasi form kontak (kolom wajib diisi dan format email) dengan pesan error atau sukses.
- Tahun di footer terisi otomatis.



**Struktur File**

.

├── index.html

├── style.css

├── script.js

├── foto-aurelia.jpg

├── logo-github.png

├── logo-instagram.png

├── logo-linkedin.png

└── README.md
