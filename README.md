# Presentation App: Pola Pikir Prestatif

> **“POLA PIKIR PRESTATIF: Membangun Mahasiswa Teknik Informatika yang Unggul, Inovatif, dan Berdaya Saing.”**

Aplikasi presentasi berbasis web modern, responsif, dan interaktif yang dibangun menggunakan **React.js**, **Vite**, **Tailwind CSS**, **Lucide React**, dan **Framer Motion**. Didesain dengan estetika teknologi, computer science, dan futuristik (navy blue, hitam, putih, dan aksen neon cyan).

---

## 🌟 Fitur Utama

1. **Format Presentasi Standar 16:9**: Tampilan widescreen profesional seperti PowerPoint/Keynote modern dengan adaptive scaling.
2. **10 Slide Terstruktur & Data-Driven**: Seluruh slide terorganisasi dalam file data yang mudah diperbarui (`src/slides.js`).
3. **Navigasi Multi-Mode**:
   - Tombol **Previous** dan **Next** dengan efek visual modern.
   - Navigasi Keyboard:
     - `→` / `Space` / `PageDown`: Slide Selanjutnya
     - `←` / `PageUp` / `Backspace`: Slide Sebelumnya
     - `Home`: Menuju Slide Pertama (Cover)
     - `End`: Menuju Slide Terakhir (Penutup)
     - `F`: Toggle Mode Layar Penuh (Fullscreen)
     - `O`: Buka Overview / Grid 10 Slide
     - `P`: Ekspor Dokumen ke Format PDF
     - `Esc`: Menutup dialog/drawer
4. **Interactive Progress Bar**: Indikator persentase kemajuan dan segmen interaktif yang dapat diklik untuk melompat langsung ke slide tertentu.
5. **Slide Grid Drawer / Overview**: Menampilkan thumbnail dan judul seluruh 10 slide secara langsung.
6. **Ekspor PDF Berkualitas Tinggi**: Ekspor otomatis seluruh slide menjadi file PDF landscape 16:9 (`Pola-Pikir-Prestatif-Teknik-Informatika.pdf`) serta dukungan cetak native (`Ctrl + P` / Print stylesheet).
7. **Visual Storytelling Interaktif**: Termasuk animasi transisi slide halus dari **Framer Motion**, terminal/IDE code preview aktif, perbandingan Fixed vs Growth Mindset, roadmap berfase, tabel problem-solving, dan perayaan confetti interaktif di slide penutup!

---

## 📋 Struktur 10 Slide Presentasi

| No | Judul Slide | Tipe Visual & Konten Utama |
|---|---|---|
| **01** | **COVER** | Judul besar dengan aksen neon cyan, subtitle, terminal configuration mockup, dan tech tags. |
| **02** | **PENGERTIAN POLA PIKIR PRESTATIF** | Definisi kunci dan 5 pilar fondasi: Tujuan Jelas, Daya Tahan, Selalu Belajar, Berani Mencoba, Tanggung Jawab. |
| **03** | **MENGAPA PENTING BAGI MAHASISWA TI?** | 5 urgensi: Persaingan Global, Siklus Tools Cepat, Kebutuhan Industri, Inovasi Kreatif, Validasi Portofolio. |
| **04** | **CIRI-CIRI MAHASISWA PRESTATIF** | 6 kartu karakter: Disiplin, Kreatif, Inovatif, Kompetitif, Adaptif, dan Kolaboratif. |
| **05** | **PENERAPAN DALAM TEKNIK INFORMATIKA** | 6 aksi nyata (Web/Mobile, Hackathon, Polyglot, AI, Open Source, Sertifikasi) + IDE Code Preview. |
| **06** | **FIXED MINDSET VS GROWTH MINDSET** | Layout perbandingan 2-kolom dengan penekanan glowing cyan khusus Growth Mindset. |
| **07** | **STRATEGI MEMBANGUN PRESTASI** | 6-Step Roadmap & Timeline: Target, Jadwal, Portofolio, Kompetisi, Relasi, Evaluasi. |
| **08** | **TANTANGAN DAN SOLUSI** | Tabel matriks 6 pasangan masalah vs solusi nyata mahasiswa IT. |
| **09** | **KONTRIBUSI BAGI MASYARAKAT** | 5 pilar kemanfaatan sosial: Layanan Publik, Desa Digital, EdTech, Smart IoT Pertanian, AI Sosial. |
| **10** | **KESIMPULAN DAN MOTIVASI** | 3 pilar aksi, quote hero penutup inspiratif, dan interactive celebration trigger. |

---

## 🛠️ Struktur Komponen

Aplikasi terstruktur rapi dan reusable:
```
polapikirprestatifTi/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── src/
│   ├── App.jsx                     # Komponen utama root
│   ├── Presentation.jsx            # Engine presentasi, state & shortcuts
│   ├── Slide.jsx                   # Renderer slide & transisi Framer Motion
│   ├── Navigation.jsx              # Bottom nav bar, modal shortcuts & drawer
│   ├── ProgressBar.jsx             # Bar persentase & segmen interaktif
│   ├── FullscreenButton.jsx        # Tombol toggle fullscreen
│   ├── slides.js                   # Single source of truth data 10 slide
│   ├── index.css                   # Custom theme, glows & print styling
│   ├── main.jsx                    # Entry point React
│   └── components/                 # Komponen terstruktur
│       ├── Presentation.jsx
│       ├── Slide.jsx
│       ├── Navigation.jsx
│       ├── ProgressBar.jsx
│       └── FullscreenButton.jsx
```

---

## 🚀 Cara Menjalankan

### 1. Instalasi Dependensi
```bash
npm install
```

### 2. Jalankan Mode Development
```bash
npm run dev
```
Aplikasi akan aktif di `http://localhost:3000` (atau port yang dialokasikan oleh Vite).

### 3. Build untuk Produksi
```bash
npm run build
```
File siap saji akan dibuat di folder `dist/`.

---

## 💡 Navigasi Cepat Keyboard

- `[→]` atau `[Space]` : Slide berikutnya
- `[←]` : Slide sebelumnya
- `[F]` : Layar Penuh
- `[O]` : Buka Daftar Semua Slide
- `[P]` : Ekspor ke File PDF
- `[Home]` / `[End]` : Ke awal / akhir slide

