# Proyek Web Interaktif - Tugas JavaScript

**Nama:** Misshely Irawan  
**NIM:** 251231011
**Program Studi:** S1 Bisnis Digital  
**Mata Kuliah:** Pemrograman Website (Pertemuan 6-7)

---

## 📌 Deskripsi Program
Aplikasi web interaktif ini dirancang untuk memenuhi penugasan mandiri pembuatan halaman web menggunakan **HTML5, CSS3, dan JavaScript**. Program ini menerapkan konsep dasar DOM manipulation, event handling, serta validasi form secara *real-time*.

---

## 🛠️ Fitur & Implementasi Tugas

1. **Validasi Form (Bobot 30%):**
   - **Nama Lengkap:** Memastikan kolom input nama tidak boleh dikosongkan.
   - **Alamat Email:** Memvalidasi keberadaan teks serta memastikan format email sesuai standar (mengandung `@` dan domain).
   - **Password:** Memastikan password terisi dan memiliki panjang minimal 8 karakter.
   - **Error Handling:** Seluruh pesan kesalahan (*error message*) ditampilkan secara dinamis di bawah masing-masing kolom input tanpa menggunakan pop-up `alert()`.

2. **Manipulasi DOM (Bobot 20%):**
   - **Ubah Teks Dinamis:** Judul sapaan header (`#greeting`) akan berubah secara otomatis merespons ketikan nama pengguna pada form.
   - **Ubah Style Dinamis:** Menyediakan tombol pilihan tema di bagian atas untuk mengubah warna latar (*background-color*) dari card secara langsung melalui properti style JavaScript.

3. **Event Handling (Bobot 20%):**
   - Menggunakan event **`submit`** untuk memproses validasi saat tombol daftar diklik.
   - Menggunakan event **`keyup`** dan **`input`** untuk memantau aktivitas pengetikan pengguna secara langsung (seperti menghitung jumlah karakter password secara *real-time*).

4. **Tampilan UI/UX & Kerapian Kode (Bobot 30%):**
   - Menggunakan desain antarmuka modern bernuansa gelap (*dark theme*) yang rapi dan responsif.
   - Penulisan kode terstruktur dengan pemisahan file yang jelas, indentasi yang konsisten, serta komentar penjelas di dalam skrip.

---

## 📁 Struktur Folder
```text
tugas-javascript/
├── index.html     <-- Struktur halaman utama
├── style.css      <-- Pengaturan styling dan tata letak
├── script.js      <-- Logika JavaScript, DOM, & Event Handling
└── README.md      <-- Dokumentasi / penjelasan singkat program