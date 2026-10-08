<div align="center">

# Ritelindo Group — B2B Retail Landing Page
### Destinasi Utama Kampanye Google Ads Search: Rak Minimarket & Setup Toko Retail Modern

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)
[![Tests](https://img.shields.io/badge/Tests-29%2F29_Passing-brightgreen?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Responsiveness](https://img.shields.io/badge/Responsiveness-8%2F8_Viewports_Pass-0A3981?style=for-the-badge)](https://developer.mozilla.org/)

<p align="center">
  <b>Aset Web Landing Page B2B Berkonversi Tinggi (CRO) • Desain Arsitektural Modern No-AI-Slop • PWA Offline Ready</b>
</p>

[Live Demo](#-live-demo--deployment) • [Dokumentasi PRD](#-spesifikasi-produk--arsitektur) • [Cara Instalasi](#-panduan-instalasi-lokal) • [Hasil Pengujian](#-hasil-pengujian-otomatis--audit-bmad)

---

</div>

## 📌 Ringkasan Proyek

Repositori ini dikembangkan sebagai penyelesaian **Mini Test Web Developer Intern** di **PT Ritelindo Akselera Kolaborasi (Ritelindo Group)** oleh **Kevin Adisurya Nugraha**.

Proyek ini menghadirkan **Single-Page Application (SPA / Static Web)** berkecepatan tinggi yang dirancang sebagai destinasi utama lalu lintas iklan berbayar **Google Ads Search** (*high-intent keywords* seperti *"Pabrik Rak Minimarket"*, *"Paket Setup Toko Retail"*). Seluruh antarmuka difokuskan untuk mendorong calon pemilik toko retail mengeklik aksi konversi utama: **"Konsultasi WA Gratis"**.

---

## 🎯 7 Value Propositions Perusahaan (Wajib & Terverifikasi)

Seluruh 7 pilar ketentuan perusahaan diintegrasikan secara presisi ke dalam hierarki halaman:

| No | Nilai Keunggulan | Implementasi Komponen & Bukti Fungsional |
| :-: | :--- | :--- |
| **01** | **Free Konsultasi & Layout 3D** | Layanan pra-pembelian gratis berupa **Interactive 3D CAD Blueprint vs Real Store Slider** di section Studio 3D dan Hero floating card. |
| **02** | **Free Ongkir Jawa - Bali** | Penegasan bebas ongkos kirim se-Jawa dan Bali pada kartu jaminan Hero, paket rak, kalkulator, dan metrik pabrik. |
| **03** | **Free Perakitan Jatim, Jateng & DIY** | Layanan jasa perakitan langsung oleh tim teknisi pabrik di toko klien tanpa biaya instalasi tambahan. |
| **04** | **Bisa Custom Ukuran & Ruangan** | Didukung fitur interaktif **Kalkulator Estimasi Kebutuhan Rak** (`StoreEstimator`) dan opsi penyesuaian ambalan khusus tiang toko. |
| **05** | **Produk Langsung dari Pabrik** | Jaminan harga tangan pertama dengan spesifikasi plat baja cold-rolled standar SNI dan finishing powder coating oven 200°C. |
| **06** | **Satuan, Paket Toko & Proyek Retail** | Melayani pembelian fleksibel: 1 unit rak tambahan, 3 paket setup toko terpadu, hingga pengadaan tender jaringan ritel. |
| **07** | **Jasa Interior Toko Modern & Stylish** | Solusi menyeluruh yang disorot sebagai **Wide Spotlight Card #07** (meja kasir, signage kategori, dan tata pencahayaan toko). |

---

## 🏛️ Desain Arsitektural & Standar "No-AI-Slop"

Landing page ini dirancang dengan menolak pola-pola generik bawaan AI (*AI Slop*) dan mengadopsi DNA visual kelas atas dari referensi desain pilihan (*Furnish*, *Apex Arc*, dan *Housify*):

### 1. Framed Architectural Hero Canvas
- Membungkus Hero Section dalam kanvas berbingkai sudut melengkung besar (`rounded-3xl`) dengan fotografi arsitektural toko ritel nyata (`/images/hero-retail-store.webp`).
- **Overlapping Floating Feature Cards:** 4 kartu putih elegan yang secara fisik menumpuk di atas batas bawah kanvas Hero, menghadirkan kedalaman fisik (*tactile layering*) yang nyata.

### 2. Interactive 3D CAD Blueprint vs Real Store Slider
- Menggantikan kotak statis dengan **tuas pembanding interaktif** (`InteractiveBeforeAfter.tsx`) yang membandingkan langsung gambar kerja denah 3D CAD toko asli (`/images/cad-3d-layout.webp`) dengan hasil rakitan nyata di lokasi toko.

### 3. Paket Toko Berfoto Arsitektural (Furnish Lookbook Style)
- Setiap paket rak toko dilengkapi thumbnail fotografi arsitektural toko riil (`package-kios.webp`, `hero-retail-store.webp`, `package-supermarket.webp`), tag luas lantai mengambang, rincian komponen, dan tombol order WhatsApp langsung.

### 4. B2B Store Estimator Widget (21st.dev & Shadcn Inspired)
- Kalkulator interaktif cerdas (`StoreEstimator.tsx`) dengan *segmented tabs* pilihan kategori toko (*Minimarket, Sembako, Apotek, Pet Shop*) dan estimasi kebutuhan unit rak *real-time*.

### 5. Galeri Portofolio Proyek Riil (Apex Arc Style)
- Menampilkan 4 kartu foto dokumentasi pemasangan rak di berbagai kota (*Solo, Surabaya, Yogyakarta, Semarang*) dengan tag lokasi mengambang.

### 6. Metrik Arsitektural Pabrik
- Mengganti ulasan karangan fiktif dengan **4 Angka Metrik Kualitas Nyata**:
  - **`1.8 mm`** Tebal Tiang Besi Baja Cold-Rolled SNI
  - **`200°C`** Suhu Oven Cat Powder Coating Anti-Karat
  - **`60 kg`** Kapasitas Uji Beban Tiap Ambalan Rak
  - **`100%`** Jasa Perakitan & Free Ongkir Jawa-Bali

### 7. Tipografi Modern & Berwibawa
- **Headings:** [Outfit](https://fonts.google.com/specimen/Outfit) (Geometric architectural sans, modern, stylish, bobot seimbang 700).
- **Body & Microcopy:** [DM Sans](https://fonts.google.com/specimen/DM+Sans) (Tingkat keterbacaan optik tinggi untuk teks panjang).
- **Data Teknis:** [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) untuk dimensi ukuran dan metrik pabrik.

---

## 📱 Mobile-First Smart Action Dock & PWA Ready

- **Smart Action Dock (< 768px):** Bar aksi ganda yang selalu menempel di dasar layar ponsel:
  - Tombol Kiri: *"Klaim 3D Gratis"* (dengan ikon 3D Box)
  - Tombol Kanan: *"Chat WA (Respon Cepat)"* (dengan ikon WhatsApp & live pulse badge)
- **Desktop Floating Bubble (>= 768px):** Tombol mengambang di pojok kanan bawah dengan status online aktif.
- **PWA (Progressive Web App):**
  - Web App Manifest terkonfigurasi (`public/manifest.json`) dengan mode `standalone`.
  - Service Worker (`public/sw.js`) untuk *offline caching* menggunakan strategi *Stale-While-Revalidate*.
  - Ikon PWA vektor `192x192` dan `512x512` dengan dukungan maskable.

---

## 🔍 Technical SEO, Google Sitelinks & Keamanan Klien

- **Strict Single H1 Hierarchy:** Tepat 1 tag `<h1>` komersial B2B, diikuti `<h2>` dan `<h3>` semantik.
- **Open Graph & Twitter Cards:** Pratinjau tautan WhatsApp/Media Sosial beresolusi 1200x630 px.
- **Structured Data (Schema.org JSON-LD):**
  - `WebSite` Schema dengan `SiteNavigationElement` untuk memicu **Google Sitelinks** di hasil pencarian.
  - `LocalBusiness` / `Organization` Schema lengkap dengan cakupan wilayah Jawa & Bali.
  - `FAQPage` Schema untuk memicu **Rich Snippet Accordion FAQ** langsung pada SERP Google.
- **Client-Side Security:**
  - Content Security Policy (CSP) ketat pada `index.html`.
  - Anti-Tabnabbing: Seluruh tautan eksternal memiliki atribut `target="_blank" rel="noopener noreferrer"`.
  - Sanitasi Parameter UTM: Regex pembersihan karakter query string untuk mencegah eksploitasi URL injection.

---

## 🧪 Hasil Pengujian Otomatis & Audit BMAD

Pengujian dijalankan melalui runner bawaan Node.js dan Chrome Headless DevTools Protocol:

### 1. Test Suite Integritas Produk (29/29 Passed)
```bash
npm test
```
```text
▶ BMAD & Anti-Slop Strict Verification Suite (Ritelindo Landing Page)
  ✔ 1. Arsitektur & Kerapian Kode (3/3 Tests Passed)
  ✔ 2. Workflow System & Conversion Integrity (4/4 Tests Passed)
  ✔ 3. TOP High SEO & Google Sitelinks (5/5 Tests Passed)
  ✔ 4. TOP High Security & OWASP Hardening (3/3 Tests Passed)
  ✔ 5. PWA & Zero-Collision Layout Responsiveness (5/5 Tests Passed)
  ✔ 6. Anti-Slop Deep Audit Verification (4/4 Tests Passed - Zero Em Dash & Zero Sparkles)
  ✔ 7. Architecture & Lookbook Components Verification (5/5 Tests Passed)
ℹ tests 29 | suites 8 | pass 29 | fail 0
```

### 2. Multi-Device Responsive Viewport Audit (8/8 Passed)
```bash
npm run test:responsive
```
```text
Testing Multi-Device Responsive Layout:
  Ultra-small Mobile (320px) : docWidth: 320px  | scrollWidth: 320px  | Overflows: 0 ✔ PERFECT
  Standard Android (360px)   : docWidth: 360px  | scrollWidth: 360px  | Overflows: 0 ✔ PERFECT
  iPhone 13/14/15 (390px)    : docWidth: 390px  | scrollWidth: 390px  | Overflows: 0 ✔ PERFECT
  Large Phone / Plus (412px) : docWidth: 412px  | scrollWidth: 412px  | Overflows: 0 ✔ PERFECT
  Tablet iPad Portrait (768px): docWidth: 768px  | scrollWidth: 768px  | Overflows: 0 ✔ PERFECT
  Tablet iPad Landscape (1024px): docWidth: 1009px| scrollWidth: 1009px | Overflows: 0 ✔ PERFECT
  Standard Laptop (1280px)   : docWidth: 1265px | scrollWidth: 1265px | Overflows: 0 ✔ PERFECT
  Full HD Desktop (1920px)   : docWidth: 1905px | scrollWidth: 1905px | Overflows: 0 ✔ PERFECT
```

---

## 📂 Struktur Repositori

```text
Landing-Page-Ritelindo/
├── docs/                             # Dokumentasi proyek dan referensi
│   ├── architecture/                 # Arsitektur, desain, UX, dan ticketing
│   ├── product/                      # PRD dan task brief
│   ├── audits/                       # Audit Anti-Slop dan quality reports
│   └── reference-assets/             # Template dan referensi visual awal
├── public/                           # Aset statis & PWA
│   ├── icons/                        # Ikon PWA vektor SVG
│   ├── images/                       # Fotografi terkompresi WebP
│   ├── icons/                        # Ikon PWA vektor SVG (192x192, 512x512)
│   ├── images/                       # Fotografi arsitektural terkompresi WebP (<280 kB)
│   ├── manifest.json                 # Web App Manifest PWA
│   └── sw.js                         # Service Worker Offline Caching
├── src/
│   ├── components/                   # Komponen antarmuka modular
│   │   ├── Navbar.tsx                # Floating pill lookbook navigation
│   │   ├── Hero.tsx                  # Framed hero canvas & 4 overlapping cards
│   │   ├── ValueProps.tsx            # Asymmetric 7 keunggulan (3-3-1 spotlight)
│   │   ├── Layout3DSection.tsx       # Studio CAD 3D layout & perbandingan
│   │   ├── InteractiveBeforeAfter.tsx# Interactive comparison slider CAD vs Toko Nyata
│   │   ├── PackageShowcase.tsx       # 3 kartu paket toko berfoto arsitektural
│   │   ├── StoreEstimator.tsx        # B2B Setup Calculator & Estimator widget
│   │   ├── ProjectShowcase.tsx       # Galeri foto portofolio proyek kota riil
│   │   ├── BusinessSectors.tsx       # 6 sektor bisnis ritel terlayani
│   │   ├── WorkflowSection.tsx       # Alur pipa 4 tahap pengadaan pabrik
│   │   ├── Testimonials.tsx          # Standar mutu fabrikasi & 4 angka metrik
│   │   ├── FaqAccordion.tsx          # Accordion tanya jawab interaktif
│   │   ├── FinalCta.tsx              # Banner penutup biru korporat solid
│   │   ├── Footer.tsx                # Legalitas, kontak pabrik & copyright
│   │   └── StickyWhatsApp.tsx        # Smart action dock mobile & floating desktop
│   ├── data/
│   │   └── content.ts                # Single source of truth seluruh konten teks
│   ├── utils/
│   │   └── whatsapp.ts               # Generator URL WhatsApp dinamis & sanitasi UTM
│   ├── types/
│   │   └── index.ts                  # Kontrak TypeScript interfaces
│   ├── App.tsx                       # Root layout composer
│   ├── index.css                     # Tailwind CSS directives & typography scale
│   └── main.tsx                      # Entry point React & registrasi Service Worker
├── tests/
│   └── landing-page.test.mjs         # Suite pengujian otomatis komprehensif (29 skenario)
├── scripts/
│   └── test-multi-device.mjs         # Skrip audit responsivitas 8 viewports via Chrome CDP
├── docs/audits/
│   └── audit-001-2026-10-07.md       # Laporan audit anti-slop resmi
├── AGENTS.md                         # Instruksi kerja agen AI & konvensi tim
├── index.html                        # HTML5 template dengan SEO, OG Tags & Schema.org
├── tailwind.config.js                # Konfigurasi token warna, font Outfit & DM Sans
├── tsconfig.json                     # Strict TypeScript compiler options
└── package.json                      # Dependensi proyek & skrip otomatisasi
```

---

## 💻 Panduan Instalasi Lokal

### Prasyarat
- **Node.js** v18.0.0 atau lebih tinggi
- **NPM** atau PNPM

### 1. Kloning Repositori
```bash
git clone https://github.com/username/Landing-Page-Ritelindo.git
cd Landing-Page-Ritelindo
```

### 2. Instal Dependensi
```bash
npm install
```

### 3. Jalankan Server Pengembangan (Dev)
```bash
npm run dev
```
Buka browser pada alamat `http://localhost:5173`.

### 4. Eksekusi Pengujian Otomatis
```bash
# Menjalankan 29 unit tests integritas & anti-slop
npm test

# Menjalankan audit responsivitas 8 viewport layar
npm run test:responsive
```

### 5. Build Produksi & Preview
```bash
npm run build
npm run preview
```
Buka `http://localhost:4173` untuk melihat hasil bundel produksi.

---

## 🌐 Live Demo & Deployment

Aplikasi menghasilkan berkas statis murni yang optimal dan siap di-deploy secara instan:

### Deployment ke Vercel (Rekomendasi)
1. Push kode ke repositori GitHub publik Anda.
2. Buka dashboard [Vercel](https://vercel.com/) dan pilih **Add New Project**.
3. Pilih repositori `Landing-Page-Ritelindo`.
4. Framework Preset akan terdeteksi otomatis sebagai **Vite**.
5. Klik **Deploy** (Waktu build ~15 detik).

### Deployment ke Netlify
1. Buka [Netlify](https://www.netlify.com/) dan pilih **Import from Git**.
2. Masukkan build command: `npm run build` dan publish directory: `dist`.
3. Klik **Deploy site**.

---

## 👤 Informasi Pengembang & Seleksi Teknis

- **Kandidat:** Kevin Adisurya Nugraha
- **Posisi:** Web Developer Intern
- **Perusahaan:** PT Ritelindo Akselera Kolaborasi (Ritelindo Group)
- **Tenggat Pengumpulan:** Jumat, 9 Oktober 2026 pukul 23.59 WIB
- **Deliverables:**
  1. Repositori Publik GitHub
  2. Live Demo URL (Vercel / Netlify)
  3. Dokumen PRD Markdown (`docs/reference-assets/PRD-Landing-Page-Ritelindo.md`)

---

<div align="center">
  <sub>Dikembangkan dengan ketelitian tinggi menggunakan metodologi <b>BMad Method</b>, prinsip <b>Anti-Slop</b>, dan standar <b>Design Engineering Modern</b>.</sub>
</div>
