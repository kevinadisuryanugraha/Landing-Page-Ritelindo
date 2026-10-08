---
title: "Product Requirements Document (PRD) - Landing Page B2B Ritelindo Group"
project: "Pengembangan Landing Page B2B Paket Rak Minimarket & Toko Retail (Google Ads Search Campaign)"
author: "Kevin Adisurya Nugraha"
editor: "Tim Rekrutmen Ritelindo Akselera Kolaborasi"
date: "2026-10-07"
version: "1.0"
status: "Published"
---

# PENGEMBANGAN LANDING PAGE B2B RITELINDO GROUP
## Project Scope and Requirement
**Destinasi Utama Kampanye Google Ads Search: Paket Rak Minimarket & Retail Store Setup**

---

### Informasi Dokumen

| Properti | Keterangan |
| :--- | :--- |
| **Authors** | Kevin Adisurya Nugraha (Web Developer Candidate) & BMad Agent PM |
| **Editor** | Tim Rekrutmen & Penilai Teknis PT Ritelindo Akselera Kolaborasi |
| **Creation Date** | 07 Oktober 2026 |
| **Last Update** | 07 Oktober 2026 |
| **Status** | Published / Ready for Development |
| **Version** | 1.0 |

---

### Version History

| Date | Version | Authors | Modification |
| :--- | :---: | :--- | :--- |
| 07/10/2026 | 1.0 | Kevin Adisurya Nugraha & BMad Agent PM | Pembuatan dokumen spesifikasi teknis dan kebutuhan produk (PRD) Landing Page B2B Ritelindo berdasarkan Development PRD Template dan task-kevin.md |

---

### Singkatan / Akronim

| Singkatan / Akronim | Definisi |
| :--- | :--- |
| **API** | Application Programming Interface |
| **B2B** | Business-to-Business (Transaksi/Layanan antar pelaku bisnis) |
| **CLS** | Cumulative Layout Shift (Metrik stabilitas visual web) |
| **CMS** | Content Management System |
| **CRO** | Conversion Rate Optimization (Optimalisasi rasio konversi pengunjung menjadi prospek) |
| **CTA** | Call-to-Action (Tombol atau elemen pemicu tindakan pengunjung) |
| **CTR** | Click-Through Rate |
| **CWV** | Core Web Vitals (Standar performa kecepatan dan UX dari Google) |
| **DOM** | Document Object Model |
| **FCP** | First Contentful Paint |
| **FR** | Functional Requirement (Persyaratan Fungsional) |
| **GA4** | Google Analytics 4 |
| **GTM** | Google Tag Manager |
| **INP** | Interaction to Next Paint |
| **ISMS** | Information Security Management System |
| **LCP** | Largest Contentful Paint |
| **LP** | Landing Page |
| **NFR** | Non-Functional Requirement (Persyaratan Non-Fungsional) |
| **OG** | Open Graph (Protokol metadata untuk preview tautan sosial/messaging) |
| **PRD** | Product Requirements Document |
| **SEM** | Search Engine Marketing (Iklan berbayar mesin pencari seperti Google Ads) |
| **SEO** | Search Engine Optimization |
| **SPA** | Single-Page Application |
| **SSG** | Static Site Generation |
| **UAT** | User Acceptance Testing |
| **UI** | User Interface |
| **UML** | Unified Modeling Language |
| **USP** | Unique Selling Proposition (Nilai keunggulan kompetitif produk/layanan) |
| **UX** | User Experience |
| **WA** | WhatsApp (WhatsApp Business API / Direct Chat Link) |

---

## Daftar Isi

- [1. Latar Belakang dan Tujuan](#1-latar-belakang-dan-tujuan)
  - [1.1. Latar Belakang Proyek](#11-latar-belakang-proyek)
  - [1.2. Tujuan Proyek](#12-tujuan-proyek)
  - [1.3. Hasil yang Akan Dicapai](#13-hasil-yang-akan-dicapai)
  - [1.4. Lingkup Pengerjaan](#14-lingkup-pengerjaan)
  - [1.5. Batasan Proyek (Project Constraints)](#15-batasan-proyek-project-constraints)
- [2. Timeline Pengerjaan](#2-timeline-pengerjaan)
- [3. Non-Technical Requirement](#3-non-technical-requirement)
  - [3.1. Usability : Persyaratan Kemudahan Penggunaan](#31-usability--persyaratan-kemudahan-penggunaan)
  - [3.2. Security : Persyaratan Keamanan Sistem](#32-security--persyaratan-keamanan-sistem)
  - [3.3. Maintainability : Persyaratan Pemeliharaan Sistem](#33-maintainability--persyaratan-pemeliharaan-sistem)
  - [3.4. Performance : Persyaratan Kinerja Sistem](#34-performance--persyaratan-kinerja-sistem)
  - [3.5. Scalability : Persyaratan Skalabilitas Sistem](#35-scalability--persyaratan-skalabilitas-sistem)
- [4. Technical Requirement](#4-technical-requirement)
  - [4.1. Minimum Device Requirement](#41-minimum-device-requirement)
  - [4.2. UML : Use Case Diagram](#42-uml--use-case-diagram)
    - [4.2.1. User Personas & Roles](#421-user-personas--roles)
    - [4.2.2. Overall System Use Case](#422-overall-system-use-case)
    - [4.2.3. Use Case Detail](#423-use-case-detail)
  - [4.3. UML : Activity Diagram](#43-uml--activity-diagram)
  - [4.4. System Function Requirement](#44-system-function-requirement)
    - [4.4.1. Header & Navigation Component](#441-header--navigation-component)
    - [4.4.2. Hero Section (Value Hook & Primary Conversion)](#442-hero-section-value-hook--primary-conversion)
    - [4.4.3. Core Value Proposition Grid (7 Layanan Unggulan)](#443-core-value-proposition-grid-7-layanan-unggulan)
    - [4.4.4. Showcase Paket & Produk Rak Retail](#444-showcase-paket--produk-rak-retail)
    - [4.4.5. Fitur Free Konsultasi & Layanan 3D Layout Showcase](#445-fitur-free-konsultasi--layanan-3d-layout-showcase)
    - [4.4.6. Portfolio, Sektor Bisnis & Social Proof](#446-portfolio-sektor-bisnis--social-proof)
    - [4.4.7. Alur Kerja Pemesanan (How It Works)](#447-alur-kerja-pemesanan-how-it-works)
    - [4.4.8. FAQ Accordion (Penanganan Keraguan Pembeli)](#448-faq-accordion-penanganan-keraguan-pembeli)
    - [4.4.9. Floating & Sticky WhatsApp Call-to-Action](#449-floating--sticky-whatsapp-call-to-action)
    - [4.4.10. Technical SEO & Open Graph Tags](#4410-technical-seo--open-graph-tags)
- [Glosarium](#glosarium)

---

## 1. Latar Belakang dan Tujuan

### 1.1. Latar Belakang Proyek
PT Ritelindo Akselera Kolaborasi (Ritelindo Group) merupakan entitas manufaktur dan distributor perlengkapan retail terkemuka di Indonesia yang mengkhususkan diri pada penjualan rak gondola minimarket, rak gudang (*heavy/medium duty*), dan aksesoris toko modern. Ritelindo melayani spektrum bisnis retail yang luas: minimarket mandiri, toko sembako/kelontong, apotek, *pet shop*, *baby shop*, toko bahan kue, toko ATK, toko *fashion*, hingga toko bahan bangunan. 

Target konsumen utama Ritelindo terdiri atas:
1. Pemilik minimarket/toko baru (*new retail entrepreneurs*).
2. Pemilik toko tradisional/kelontong yang ingin bertransformasi menjadi toko modern (*retail modern upgrade*).
3. Pemilik gerai yang sedang melakukan ekspansi atau pembukaan cabang baru (*retail chain expansion*).

Untuk mengakselerasi perolehan prospek berkualitas (*high-intent leads*), Ritelindo Group menggelar kampanye iklan Google Ads Search yang menargetkan kata kunci intensi tinggi seperti *"Pabrik Rak Minimarket"*, *"Paket Setup Toko Retail"*, *"Distributor Rak Gondola"*, dan sejenisnya. Diperlukan sebuah **Landing Page B2B Tunggal (Single-Page App / Static Site)** dengan desain visual modern, waktu muat instan (*ultra-fast loading*), struktur On-Page SEO presisi, serta tata letak bernilai konversi tinggi (CRO) yang memandu pengunjung melakukan aksi utama: **mengeklik tombol "Konsultasi WA Gratis"**.

### 1.2. Tujuan Proyek
Tujuan utama pengembangan proyek ini adalah:
1. **Memaksimalkan Tingkat Konversi (CRO):** Mengubah *traffic* berbayar dari Google Ads Search menjadi percakapan bisnis langsung di WhatsApp melalui penempatan CTA persuasif di setiap titik scroll strategis.
2. **Mengomunikasikan 7 Keunggulan Utama (Value Propositions):** Menyampaikan diferensiasi kompetitif Ritelindo secara eksplisit dan meyakinkan, yaitu:
   - *Free Konsultasi & Layout 3D* (layanan kunci penentu sebelum transaksi).
   - *Free Ongkir Jawa-Bali*.
   - *Free Perakitan Jatim, Jateng & DIY*.
   - *Bisa Custom Ukuran & Desain* sesuai dimensi ruangan toko.
   - *Harga Pabrik Langsung* (tanpa perantara, margin kompetitif).
   - *Fleksibilitas Skala Order* (satuan, paket hemat toko, hingga proyek retail korporasi).
   - *Jasa Interior Toko Modern* (tampilan toko rapi, estetis, dan meningkatkan *basket size* konsumen).
3. **Menyediakan Pengalaman Mobile-First Berkinerja Tinggi:** Menjamin halaman dapat dimuat di bawah 2 detik pada koneksi seluler 4G di seluruh Indonesia, mengingat mayoritas pengambil keputusan bisnis mengakses iklan via *smartphone*.
4. **Menerapkan Standar Technical SEO & Tracking Ready:** Menyediakan struktur semantik HTML (H1-H3), metadata teroptimasi B2B, Open Graph lengkap, serta kesiapan integrasi Google Tag Manager dan parameter UTM tracking ke WhatsApp URL.

### 1.3. Hasil yang Akan Dicapai
Luaran yang akan diserahkan pada akhir proyek ini mencakup:
1. **Source Code Terstruktur & Bersih:** Tersimpan pada repositori publik GitHub dengan dokumentasi instalasi lengkap (`README.md`).
2. **Aplikasi Web Terpublikasi (Live Demo):** Ter-deploy secara stabil dan dapat diakses publik pada platform cloud hosting modern (Vercel, Netlify, atau GitHub Pages).
3. **Skor Performa Google Lighthouse Tinggi:**
   - Performance: $\ge 90$
   - Accessibility: $\ge 90$
   - Best Practices: $\ge 90$
   - SEO: $\ge 95$
4. **Kompatibilitas Responsif Lintas Perangkat:** Tampilan proporsional dan fungsi optimal pada perangkat layar ponsel pintar (*mobile*), tablet, laptop, dan komputer meja (*desktop*).
5. **Direct WhatsApp Integration:** Tombol CTA yang memicu aplikasi WhatsApp dengan pesan pembuka otomatis (*pre-filled message*) yang menyertakan informasi asal kampanye/paket minat.

### 1.4. Lingkup Pengerjaan
Lingkup pekerjaan teknis dalam proyek ini meliputi:
1. **Perancangan Tata Letak UI/UX:** Penyusunan hirarki informasi menggunakan prinsip *Visual Hierarchy*, *F-Pattern*, dan *Z-Pattern* untuk memaksimalkan retensi baca dan klik CTA.
2. **Pengembangan Front-End (SPA / Static Web):**
   - Pemilihan stack modern (React/Next.js/Tailwind CSS).
   - Implementasi komponen modular yang dapat digunakan kembali (*reusable components*).
   - Efek transisi halus (*micro-interactions*) dan state interaktif (misal: filter paket, accordion FAQ, modal preview 3D).
3. **Penerapan Technical SEO & Link Sharing:**
   - Tag `<title>`, `<meta name="description">`, `<link rel="canonical">`.
   - Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`).
   - Struktur heading semantik tunggal `<h1>` dengan subordinat `<h2>` dan `<h3>`.
4. **Integrasi Komunikasi & WhatsApp Tracking:**
   - Formulasi tautan WhatsApp API (`https://wa.me/...`) yang bersih dengan *encode message text*.
   - Floating CTA bar yang selalu dapat dijangkau oleh ibu jari pengguna mobile.
5. **Quality Assurance & Deployment:**
   - Pengujian lintas browser (Chrome, Safari, Edge, Firefox).
   - Optimasi aset gambar (format WebP/SVG, kompresi lossless).
   - Proses CI/CD deployment ke production platform.

### 1.5. Batasan Proyek (Project Constraints)
1. **Arsitektur Tanpa Database Kompleks (Stateless):** Karena proyek ini difokuskan sebagai Landing Page konversi Google Ads, penyimpanan transaksi dilakukan di luar web (langsung diarahkan ke tim Sales via WhatsApp CRM), sehingga tidak memerlukan database relasional atau autentikasi user (login/register).
2. **Batas Waktu Pengumpulan (Deadline):** Seluruh pengerjaan, pengujian, dan penyerahan tautan repo serta live demo harus tuntas sebelum **Jumat, 9 Oktober 2026 pukul 23.59 WIB**.
3. **Fokus pada Skenario Google Ads B2B:** Salinan teks (*copywriting*), citra visual, dan susunan tombol difokuskan untuk persona pemilik bisnis ritel, bukan konsumen retail eceran (B2C).

---

## 2. Timeline Pengerjaan

Pengembangan Landing Page dilakukan dalam rentang waktu yang intensif dan terstruktur dengan metode Agile Vibe-Coding:

| No | Tahapan Kegiatan | Output Kerja | Target Mulai | Target Selesai |
| :-: | :--- | :--- | :-: | :-: |
| 1 | **Analisis Kebutuhan & Finalisasi PRD** | Dokumen PRD Markdown, arsitektur informasi, pemetaan copy | 07 Okt 2026 (16:00 WIB) | 07 Okt 2026 (18:00 WIB) |
| 2 | **Inisialisasi Project & Design Tokens** | Setup framework Next.js/Tailwind, typography, palet warna brand | 07 Okt 2026 (18:30 WIB) | 07 Okt 2026 (20:30 WIB) |
| 3 | **Komponen Core: Hero, USP Grid, Layout 3D** | Section Hero, 7 Value Proposition cards, 3D Layout showcase | 08 Okt 2026 (09:00 WIB) | 08 Okt 2026 (14:00 WIB) |
| 4 | **Komponen Katalog Paket & Trust Social Proof** | Paket toko (Hemat, Supermarket, Gudang), sektor bisnis, portfolio | 08 Okt 2026 (14:30 WIB) | 08 Okt 2026 (18:30 WIB) |
| 5 | **Interaktivitas: FAQ Accordion & Sticky WA CTA** | Accordion FAQ, floating action button, deep-link WhatsApp | 08 Okt 2026 (19:30 WIB) | 08 Okt 2026 (22:00 WIB) |
| 6 | **SEO On-Page, OG Tags, Asset Optimization** | WebP asset conversion, Open Graph tags, canonical link, semantic audit | 09 Okt 2026 (09:00 WIB) | 09 Okt 2026 (13:00 WIB) |
| 7 | **Performance Tuning & Responsive Testing (UAT)** | Lighthouse score audit 90+, pengujian responsif di berbagai resolusi layar | 09 Okt 2026 (14:00 WIB) | 09 Okt 2026 (18:00 WIB) |
| 8 | **Deployment & Final Submission** | Production URL (Vercel), repository README bersih, submission email | 09 Okt 2026 (19:00 WIB) | 09 Okt 2026 (21:00 WIB) |

---

## 3. Non-Technical Requirement

### 3.1. Usability : Persyaratan Kemudahan Penggunaan
1. **Prinsip Visual Hierarchy:** Elemen paling bernilai (*Free Konsultasi & Layout 3D*, Tombol WhatsApp) memiliki kontras warna dominan dan ukuran visual tertinggi di layar.
2. **Pola Pemindaian Mata (F-Pattern & Z-Pattern):** Judul dan penawaran diletakkan pada area kiri atas dan tengah atas untuk memudahkan pemindaian cepat oleh calon klien B2B yang sibuk.
3. **Thumb-Zone Optimization (Mobile-First):** Tombol CTA krusial ditempatkan di zona jangkauan alami ibu jari (terutama sticky bar di bagian bawah layar smartphone).
4. **Kejelasan Informasi (Clarity over Cleverness):** Bahasa copywriting lugas, tidak berbelit-belit, menonjolkan keuntungan finansial dan operasional klien (hemat biaya, bebas ongkir, gratis instalasi).

### 3.2. Security : Persyaratan Keamanan Sistem
1. **Protokol HTTPS Penuh:** Wajib terpasang sertifikat SSL/TLS enkripsi end-to-end pada domain live demo.
2. **Proteksi Tautan Eksternal (`rel="noopener noreferrer"`):** Seluruh tautan yang membuka tab baru menuju WhatsApp Web/App atau sumber eksternal wajib menerapkan atribut keamanan untuk mencegah serangan *tabnabbing*.
3. **Pembersihan URL Parameter (XSS Mitigation):** Jika parameter URL (seperti `utm_source` atau `utm_campaign`) dibaca untuk menyusun pesan WhatsApp dinamis, data tersebut wajib melalui tahap sanitasi karakter.
4. **Header Keamanan Standar:** Dukungan header HTTP standar seperti `X-Content-Type-Options: nosniff` dan `X-Frame-Options: SAMEORIGIN` dari CDN host.

### 3.3. Maintainability : Persyaratan Pemeliharaan Sistem
1. **Clean Code & Modular Component Architecture:** Setiap bagian section diisolasi dalam komponen mandiri (misal: `HeroSection.tsx`, `ValuePropGrid.tsx`, `PackageShowcase.tsx`, `WhatsAppButton.tsx`).
2. **Centralized Data Mock / Content Config:** Daftar paket rak, pertanyaan FAQ, dan testimoni disimpan dalam file data terstruktur (`data/content.ts` atau JSON), sehingga pembaruan harga atau teks tidak membutuhkan perombakan kode JSX/HTML.
3. **Version Control:** Kode dipelihara menggunakan Git dengan pesan commit yang jelas (*conventional commits*).
4. **Dokumentasi Terperinci:** File `README.md` pada repositori memuat panduan cara menjalankan server lokal, struktur folder, variabel konfigurasi, dan alur build.

### 3.4. Performance : Persyaratan Kinerja Sistem
1. **Core Web Vitals Thresholds:**
   - **Largest Contentful Paint (LCP):** $\le 2.0$ detik pada koneksi mobile 4G.
   - **Interaction to Next Paint (INP):** $\le 100$ milidetik.
   - **Cumulative Layout Shift (CLS):** $\le 0.05$ (nihil pergeseran elemen yang mengganggu interaksi).
2. **Asset Optimization:**
   - Gambar dikonversi ke format modern WebP/AVIF dengan kompresi teroptimasi.
   - Pemuatan gambar di bawah lipatan layar (*below-the-fold*) menerapkan mekanisme *lazy loading* native (`loading="lazy"`).
   - Ikonografi menggunakan SVG inline/vektor ringan tanpa memuat library icon berukuran besar.
3. **Bundle Size Minimal:** Menghindari dependensi eksternal yang tidak diperlukan guna meminimalkan eksekusi JavaScript yang memblokir rendering browser.

### 3.5. Scalability : Persyaratan Skalabilitas Sistem
1. **Edge Caching & Static Hosting:** Aplikasi di-hosting pada jaringan Edge CDN global (Vercel/Netlify) yang mampu menangani lonjakan ribuan klik iklan Google Ads secara simultan tanpa *downtime*.
2. **Kesiapan Headless CMS:** Struktur data dibuat modular sehingga di masa depan dapat dengan mudah dihubungkan ke CMS tanpa kepala (Headless CMS seperti Strapi, Sanity, atau WordPress REST API).

---

## 4. Technical Requirement

### 4.1. Minimum Device Requirement

| Tipe Perangkat | Resolusi Layar Minimum | Sistem Operasi Minimum | Browser yang Didukung | Target RAM |
| :--- | :--- | :--- | :--- | :--- |
| **Mobile Smartphone** | 360 x 640 px (Portrait) | Android 8.0+ / iOS 13+ | Chrome Mobile 90+, Safari iOS 13+, Samsung Internet | 2 GB LPDDR3+ |
| **Tablet** | 768 x 1024 px | iPadOS 13+ / Android 9.0+ | Safari, Chrome, Edge | 3 GB+ |
| **Laptop & Desktop** | 1280 x 720 px (Optimal: 1920x1080) | Windows 10+, macOS 11+, Linux | Chrome 90+, Edge 90+, Firefox 90+, Safari 14+ | 4 GB+ |

---

### 4.2. UML : Use Case Diagram

#### 4.2.1. User Personas & Roles
1. **Public Visitor / Retail Owner (Calon Pembeli B2B):**
   - *Persona Contoh:* Pak Budi (42 tahun), pemilik toko kelontong di Jawa Tengah yang ingin mengubah tokonya menjadi minimarket modern, atau Ibu Linda (35 tahun) yang baru membuka gerai pet shop di Surabaya.
   - *Perilaku:* Mencari "pabrik rak minimarket" di Google Search, mengklik iklan Ritelindo, membaca penawaran, mengevaluasi paket, melihat bukti desain 3D & portofolio, lalu menekan tombol "Konsultasi WA Gratis".
2. **Sales & Customer Service Ritelindo (Penerima Lead):**
   - Tim internal Ritelindo yang siaga menerima pesan percakapan WhatsApp dari calon pembeli dengan konteks pesan otomatis (*prefilled text*) yang jelas.

#### 4.2.2. Overall System Use Case

```
+---------------------------------------------------------------------------------+
|                       LANDING PAGE B2B RITELINDO GROUP                          |
+---------------------------------------------------------------------------------+
|                                                                                 |
|   [ Calon Pembeli Retail / B2B ]                                                |
|            |                                                                    |
|            +---> ( UC-01 : Membuka Halaman dari Google Ads Search )             |
|            |                                                                    |
|            +---> ( UC-02 : Mengeksplorasi Hero & 7 Core Value Propositions )    |
|            |                                                                    |
|            +---> ( UC-03 : Melihat Showcase Paket Toko & Katalog Rak )          |
|            |                                                                    |
|            +---> ( UC-04 : Meninjau Bukti Layanan Desain Layout 3D Gratis )     |
|            |                                                                    |
|            +---> ( UC-05 : Melihat Portofolio Sektor Bisnis & Testimoni )       |
|            |                                                                    |
|            +---> ( UC-06 : Membaca Alur Kerja & Pertanyaan Umum / FAQ )         |
|            |                                                                    |
|            +---> ( UC-07 : Melakukan Klik Tombol "Konsultasi WA Gratis" )       |
|                       |                                                         |
|                       v                                                         |
|         << Menghubungkan Direct Link >>                                         |
|                       |                                                         |
|                       v                                                         |
|   [ WhatsApp Messenger Application / Web ]                                      |
|            |                                                                    |
|            +---> [ Tim Sales / CS Ritelindo Group ]                             |
|                                                                                 |
+---------------------------------------------------------------------------------+
```

#### 4.2.3. Use Case Detail

##### Use Case 1: Interaksi Pemicu CTA WhatsApp (Core Conversion Flow)
- **Aktor:** Calon Pembeli Retail (Visitor).
- **Pre-kondisi:** Pengunjung berada pada halaman landing page (baik di Hero, Bagian Paket, Banner 3D, atau Floating Button).
- **Alur Utama:**
  1. Pengunjung membaca penawaran atau paket yang diminati.
  2. Pengunjung mengklik tombol "Konsultasi WA Gratis" atau "Klaim Desain 3D Gratis".
  3. Sistem memicu event tracking (siap kirim data ke Google Analytics / GTM).
  4. Sistem membuka jendela WhatsApp (aplikasi smartphone atau WhatsApp Web di desktop) dengan nomor resmi Sales Ritelindo dan teks yang telah terformat otomatis.
  5. Pengunjung mengirim pesan tersebut ke Sales Ritelindo.
- **Post-kondisi:** Percakapan bisnis B2B aktif di WhatsApp Sales Ritelindo.

##### Use Case 2: Simulasi & Eksplorasi Paket Setup Toko
- **Aktor:** Calon Pembeli Retail.
- **Alur Utama:**
  1. Pengunjung menggulir ke section "Paket Setup Toko & Rak Gondola".
  2. Pengunjung membandingkan fitur paket (misal: Paket Toko Hemat, Paket Minimarket Standar, Paket Supermarket/Gudang).
  3. Pengunjung melihat rincian isi paket (tipe rak single, double, end gondola, estimasi kapasitas).
  4. Pengunjung mengklik tombol "Tanya Paket Ini via WhatsApp".
  5. Format pesan WhatsApp terisi spesifik menyebutkan nama paket yang dipilih pengunjung.

---

### 4.3. UML : Activity Diagram

Alur interaksi pengunjung dari awal paparan iklan di mesin pencari hingga terhubung ke perwakilan penjualan Ritelindo digambarkan dalam diagram alir berikut:

```
 Pengunjung (Google Search)         Landing Page Ritelindo              WhatsApp & Sales CS
           |                                  |                                  |
           | 1. Klik Iklan Google Ads         |                                  |
           |--------------------------------->|                                  |
           |                                  | 2. Muat Halaman (< 2 detik)      |
           |                                  |    Render Hero, 7 USP & 3D Hook  |
           | 3. Tampilan Halaman Siap         |                                  |
           |<---------------------------------|                                  |
           |                                  |                                  |
           | 4. Membaca Penawaran & Nilai:    |                                  |
           |    - Free Layout 3D              |                                  |
           |    - Free Ongkir & Perakitan     |                                  |
           |    - Harga Pabrik Langsung       |                                  |
           |    - Pilihan Paket Setup Toko    |                                  |
           |                                  |                                  |
           | 5. Klik CTA "Konsultasi WA"      |                                  |
           |--------------------------------->|                                  |
           |                                  | 6. Trigger Event Click Tracking  |
           |                                  | 7. Buat URL wa.me dengan         |
           |                                  |    Prefilled Message Spesifik    |
           | 8. Redirect ke WhatsApp Client   |                                  |
           |<---------------------------------|                                  |
           |                                                                     |
           | 9. Buka Percakapan WhatsApp dengan Draft Pesan Terisi               |
           |-------------------------------------------------------------------->|
           |                                                                     | 10. CS Sales Menerima
           | 11. Pengunjung Mengirim Pesan Konsultasi                           |     Lead Masuk &
           |-------------------------------------------------------------------->|     Merespon Kebutuhan
           |                                                                     |     Layout 3D Toko
```

---

### 4.4. System Function Requirement

Kebutuhan fungsional dijabarkan secara rinci menggunakan kode identifikasi standar (*Functional Requirement ID*). Setiap kebutuhan memiliki kriteria penerimaan yang jelas (*Acceptance Criteria*).

#### 4.4.1. Header & Navigation Component

| No | FR ID | Deskripsi Persyaratan Fungsional | Status / Prioritas |
| :-: | :--- | :--- | :-: |
| 1 | **FR-NAV-01** | **Brand Identity Header:** Menampilkan logo resmi Ritelindo Group di sisi kiri atas dengan tautan kembali ke posisi teratas (`#top`). | **Harus (Must)** |
| 2 | **FR-NAV-02** | **Smooth Scroll Navigation Links:** Menyediakan tautan menu navigasi desktop yang melompat halus ke section: Keunggulan (`#keunggulan`), Paket Toko (`#paket`), Layanan 3D (`#layout3d`), Portofolio (`#portofolio`), dan FAQ (`#faq`). | **Harus (Must)** |
| 3 | **FR-NAV-03** | **Header Direct CTA Button:** Tombol "Konsultasi WA Gratis" dengan aksen warna kontras di sisi kanan navigasi desktop. | **Harus (Must)** |
| 4 | **FR-NAV-04** | **Sticky / Backdrop Blur Effect:** Header memiliki efek *backdrop-blur* semi-transparan saat digulir ke bawah agar tetap terbaca tanpa menutupi konten. | **Bagus (Should)** |

#### 4.4.2. Hero Section (Value Hook & Primary Conversion)

| No | FR ID | Deskripsi Persyaratan Fungsional | Status / Prioritas |
| :-: | :--- | :--- | :-: |
| 1 | **FR-HERO-01** | **H1 Headline Teroptimasi B2B:** Menampilkan satu-satunya tag `<h1>` yang memadukan keyword utama dan value proposition, contoh: *"Pabrik Rak Minimarket & Perlengkapan Retail Toko Modern No. 1 di Indonesia"*. | **Harus (Must)** |
| 2 | **FR-HERO-02** | **Subheadline Persuasif:** Penjelasan ringkas bahwa Ritelindo melayani pembuatan dan instalasi rak berkualitas pabrik dengan fasilitas *Free Konsultasi*, *Free Desain 3D*, dan *Free Ongkir*. | **Harus (Must)** |
| 3 | **FR-HERO-03** | **Dual CTA Buttons:** <br>1. *Primary CTA:* "Konsultasi WA Gratis" (tombol hijau WhatsApp menonjol dengan icon).<br>2. *Secondary CTA:* "Lihat Estimasi Paket Toko" (smooth scroll ke section paket). | **Harus (Must)** |
| 4 | **FR-HERO-04** | **Visual Hero Utama:** Menampilkan visual interaktif/grafis berkualitas tinggi yang memperlihatkan rak gondola modern dan render desain 3D layout toko retail. | **Harus (Must)** |
| 5 | **FR-HERO-05** | **Quick Trust Badges Bar:** Strip ringkas di bawah tombol Hero yang menegaskan 3 jaminan kilat: *Langsung dari Pabrik*, *Free Ongkir Jawa-Bali*, *Bisa Custom Ukuran*. | **Harus (Must)** |

#### 4.4.3. Core Value Proposition Grid (7 Layanan Unggulan)

Bagian ini mengimplementasikan secara presisi 7 poin ketentuan perusahaan yang diwajibkan dalam `task-kevin.md`.

| No | FR ID | Poin Value Proposition Perusahaan | Deskripsi & Implementasi UI | Status |
| :-: | :--- | :--- | :--- | :-: |
| 1 | **FR-USP-01** | **Free Konsultasi & Layout 3D** | Menjelaskan layanan pra-pembelian gratis di mana calon pembeli dibuatkan denah & simulasi 3D toko sebelum bertransaksi. | **Harus (Must)** |
| 2 | **FR-USP-02** | **Free Ongkir Jawa-Bali** | Penegasan bebas ongkos kirim ke seluruh wilayah pulau Jawa dan Bali untuk pembelian paket tertentu. | **Harus (Must)** |
| 3 | **FR-USP-03** | **Free Perakitan Jatim, Jateng & DIY** | Penjelasan bahwa tim teknisi Ritelindo siap merakit rak langsung di lokasi toko klien tanpa biaya tambahan. | **Harus (Must)** |
| 4 | **FR-USP-04** | **Bisa Custom Ukuran & Ruangan Toko** | Kemampuan fabrikasi rak sesuai ukuran tiang, sudut ruangan, dan konsep interior khusus toko. | **Harus (Must)** |
| 5 | **FR-USP-05** | **Produk Langsung dari Pabrik** | Jaminan harga tangan pertama (pabrik sendiri), ketebalan besi standar SNI, dan tanpa markup distributor perantara. | **Harus (Must)** |
| 6 | **FR-USP-06** | **Melayani Satuan, Paket Toko & Proyek Retail** | Fleksibilitas pemesanan: dari 1 unit rak tambahan, paket buka toko lengkap, hingga pengadaan tender jaringan waralaba. | **Harus (Must)** |
| 7 | **FR-USP-07** | **Jasa Interior Toko Modern & Stylish** | Solusi menyeluruh tidak hanya rak, tetapi juga desain meja kasir, pencahayaan, papan penunjuk arah kategori (*signage*), dan tata letak toko modern. | **Harus (Must)** |

#### 4.4.4. Showcase Paket & Produk Rak Retail

| No | FR ID | Deskripsi Persyaratan Fungsional | Status / Prioritas |
| :-: | :--- | :--- | :-: |
| 1 | **FR-PKT-01** | **Katalog Kartu Paket Solutif:** Menampilkan minimal 3 kartu kategori paket utama:<br>- *Paket Buka Toko Hemat (Ukuran 4x6m s.d 6x8m)*<br>- *Paket Minimarket Modern (Ukuran 8x10m s.d 10x15m)*<br>- *Paket Supermarket & Rak Gudang Heavy Duty*. | **Harus (Must)** |
| 2 | **FR-PKT-02** | **Spesifikasi Teknis Tiap Paket:** Rincian material (Ketebalan plat shelving, tiang kokoh, powder coating tahan karat, varian rak Single/Island/End Gondola). | **Harus (Must)** |
| 3 | **FR-PKT-03** | **Direct In-Card WhatsApp CTA:** Tombol interaktif di setiap kartu paket dengan prefilled text otomatis, misalnya: *"Halo Ritelindo, saya tertarik dengan info Paket Minimarket Modern..."*. | **Harus (Must)** |
| 4 | **FR-PKT-04** | **Label Rekomendasi / Best Seller:** Badge visual penanda paket paling populer untuk mempermudah keputusan pembeli. | **Bagus (Should)** |

#### 4.4.5. Fitur Free Konsultasi & Layanan 3D Layout Showcase

| No | FR ID | Deskripsi Persyaratan Fungsional | Status / Prioritas |
| :-: | :--- | :--- | :-: |
| 1 | **FR-3D-01** | **Visualisasi Sebelum & Sesudah (Before-After / 3D vs Realisasi):** Menampilkan perbandingan antara denah 3D yang dirancang tim Ritelindo dengan hasil perakitan nyata di toko klien. | **Harus (Must)** |
| 2 | **FR-3D-02** | **Alur Layanan 3D Tanpa Syarat Pembelian Awal:** Penjelasan langkah klaim 3D layout (Kirim denah/ukuran -> Tim gambar 3D -> Presentasi estimasi kebutuhan rak). | **Harus (Must)** |
| 3 | **FR-3D-03** | **Dedicated CTA Button:** Tombol "Klaim Desain 3D Toko Saya" yang memicu chat WhatsApp dengan konteks permintaan layout ruangan. | **Harus (Must)** |

#### 4.4.6. Portfolio, Sektor Bisnis & Social Proof

| No | FR ID | Deskripsi Persyaratan Fungsional | Status / Prioritas |
| :-: | :--- | :--- | :-: |
| 1 | **FR-SOC-01** | **Grid Sektor Bisnis yang Dilayani:** Menampilkan ikon/kartu sektor usaha yang dilayani sesuai profil Ritelindo:<br>- Minimarket & Toko Sembako<br>- Apotek & Toko Obat Modern<br>- Pet Shop & Baby Shop<br>- Toko Bahan Kue & ATK<br>- Toko Fashion & Aksesoris<br>- Toko Bahan Bangunan. | **Harus (Must)** |
| 2 | **FR-SOC-02** | **Galeri Realisasi Proyek Toko:** Dokumentasi foto hasil pemasangan rak di berbagai kota di Indonesia. | **Harus (Must)** |
| 3 | **FR-SOC-03** | **Testimoni Pemilik Usaha:** Cuplikan testimoni dari klien pemilik toko mengenai ketepatan waktu pengiriman, kerapian tim perakitan, dan kepuasan hasil layout 3D. | **Harus (Must)** |

#### 4.4.7. Alur Kerja Pemesanan (How It Works)

| No | FR ID | Deskripsi Persyaratan Fungsional | Status / Prioritas |
| :-: | :--- | :--- | :-: |
| 1 | **FR-FLOW-01** | **4 Langkah Mudah Bekerjasama:** Visual tahapan kerja:<br>1. *Konsultasi & Ukur Ruangan (Gratis)*<br>2. *Desain Layout 3D & Penawaran Transparan*<br>3. *Produksi Pabrik & Pengiriman Cepat (Free Ongkir)*<br>4. *Perakitan di Lokasi oleh Teknisi Ahli*. | **Harus (Must)** |

#### 4.4.8. FAQ Accordion (Penanganan Keraguan Pembeli)

| No | FR ID | Deskripsi Persyaratan Fungsional | Status / Prioritas |
| :-: | :--- | :--- | :-: |
| 1 | **FR-FAQ-01** | **Komponen Accordion Interaktif:** Daftar pertanyaan yang dapat dibuka-tutup dengan animasi transisi yang mulus. | **Harus (Must)** |
| 2 | **FR-FAQ-02** | **Cakupan Pertanyaan Penting:**<br>- *"Apakah benar konsultasi dan desain 3D tidak dipungut biaya?"*<br>- *"Bagaimana syarat mendapatkan Free Ongkir Jawa & Bali?"*<br>- *"Berapa lama proses pembuatan rak jika custom ukuran?"*<br>- *"Apakah bisa memesan rak dalam jumlah satuan untuk penambahan toko lama?"*<br>- *"Wilayah mana saja yang mendapat fasilitas gratis perakitan?"* | **Harus (Must)** |

#### 4.4.9. Floating & Sticky WhatsApp Call-to-Action

| No | FR ID | Deskripsi Persyaratan Fungsional | Status / Prioritas |
| :-: | :--- | :--- | :-: |
| 1 | **FR-WA-01** | **Mobile Sticky Bottom Bar:** Pada tampilan smartphone, terdapat bar CTA tetap di sisi bawah layar yang memuat tombol "Chat Konsultasi WA Gratis" dengan status *online badge*. | **Harus (Must)** |
| 2 | **FR-WA-02** | **Desktop Floating WhatsApp Bubble:** Pada layar desktop, menampilkan icon mengambang di pojok kanan bawah yang dilengkapi *tooltip* ajakan konsultasi. | **Harus (Must)** |
| 3 | **FR-WA-03** | **Dynamic Prefilled URL Builder:** Tautan WhatsApp menggunakan format resmi `https://wa.me/62xxxxxxxxxxx?text=...` yang menyertakan teks pembuka terstruktur dan rapi. | **Harus (Must)** |

#### 4.4.10. Technical SEO & Open Graph Tags

| No | FR ID | Elemen Teknis | Spesifikasi Isi | Status |
| :-: | :--- | :--- | :--- | :-: |
| 1 | **FR-SEO-01** | **Meta Title Tag** | `Pabrik Rak Minimarket & Perlengkapan Toko Modern | Ritelindo Group` (Maks. 60 karakter, target B2B keyword) | **Harus (Must)** |
| 2 | **FR-SEO-02** | **Meta Description Tag** | `Pabrik rak gondola minimarket, rak gudang & perlengkapan retail modern. Gratis konsultasi & layout 3D, gratis ongkir Jawa-Bali, dan perakitan langsung. Hubungi kami!` (150-160 karakter) | **Harus (Must)** |
| 3 | **FR-SEO-03** | **Semantic Hierarchy** | Satu `<h1>` unik, diikuti `<h2>` untuk setiap judul section, dan `<h3>` untuk sub-komponen kartu paket/layanan. | **Harus (Must)** |
| 4 | **FR-SEO-04** | **Open Graph Tags (OG)** | Lengkap dengan `og:title`, `og:description`, `og:image`, `og:url`, `og:type="website"`, dan `og:site_name="Ritelindo Group"`. | **Harus (Must)** |
| 5 | **FR-SEO-05** | **Twitter Cards Meta** | `twitter:card="summary_large_image"`, `twitter:title`, `twitter:description`, `twitter:image`. | **Harus (Must)** |
| 6 | **FR-SEO-06** | **Favicon & Web App Manifest** | Icon logo Ritelindo berkualitas jernih pada tab browser dan bookmark perangkat. | **Harus (Must)** |

---

## Glosarium

| Istilah | Penjelasan & Relevansi dalam Proyek |
| :--- | :--- |
| **3D Layout Toko** | Gambar simulasi tata letak visual 3 dimensi yang menunjukkan penempatan rak gondola, meja kasir, dan alur sirkulasi pembeli dalam toko sebelum rak diproduksi. |
| **Accordion** | Komponen antarmuka pengguna grafis yang memungkinkan bagian konten diperluas atau diciutkan untuk menghemat ruang vertikal layar (digunakan pada FAQ). |
| **Backdrop Blur** | Efek visual CSS di mana elemen latar belakang di belakang sebuah layer terlihat kabur (*frosted glass effect*), umum digunakan pada sticky navigation header. |
| **B2B (Business-to-Business)** | Model bisnis yang melayani kebutuhan bisnis lain, dalam hal ini pengadaan rak dan interior bagi pemilik gerai retail modern. |
| **Call-to-Action (CTA)** | Elemen tombol atau teks pemantik yang dirancang untuk mendorong pengguna melakukan aksi spesifik yang diharapkan (misal: "Konsultasi WA Gratis"). |
| **Conversion Rate Optimization (CRO)** | Metodologi sistematis untuk meningkatkan persentase pengunjung situs web yang menyelesaikan tindakan yang diinginkan. |
| **Core Web Vitals (CWV)** | Metrik standar industri yang ditetapkan oleh Google untuk menilai kecepatan respon, stabilitas visual, dan kehalusan interaksi sebuah situs web. |
| **Direct WhatsApp Link** | Protokol tautan API `https://wa.me/` yang langsung membuka aplikasi perpesanan WhatsApp di perangkat pengguna tanpa perlu menyimpan nomor kontak terlebih dahulu. |
| **End Gondola** | Jenis rak penutup yang diletakkan pada ujung rak double (island gondola), berfungsi sebagai posisi pajang produk promo strategis (*eye-level*). |
| **Google Ads Search Campaign** | Layanan iklan berbayar Google yang menampilkan tautan landing page pada hasil pencarian teratas ketika calon pembeli mengetikkan kata kunci tertentu. |
| **High-Intent Keywords** | Kata kunci pencarian yang menunjukkan niat beli atau kebutuhan transaksi yang mendesak dari pencari (contoh: *"jual rak minimarket terdekat"*, *"pabrik rak toko"*). |
| **Island / Double Gondola** | Unit rak minimarket dua sisi yang diletakkan di lorong tengah toko, memungkinkan pajangan produk di kedua belah sisi. |
| **Lighthouse** | Alat audit otomatis sumber terbuka dari Google untuk mengukur kualitas teknis halaman web dari segi performa, aksesibilitas, SEO, dan praktik terbaik. |
| **Mobile-First Design** | Filosofi perancangan antarmuka di mana tata letak dan performa untuk perangkat layar kecil (*smartphone*) diprioritaskan terlebih dahulu sebelum desktop. |
| **Open Graph (OG)** | Standar metadata yang dicetuskan oleh Facebook untuk mengatur bagaimana sebuah tautan halaman web ditampilkan saat dibagikan di media sosial atau aplikasi chatting (WhatsApp/Telegram). |
| **Powder Coating** | Proses pengecatan berbasis serbuk kering yang dipanaskan untuk menghasilkan lapisan cat rak yang jauh lebih tebal, tahan karat, dan tahan goresan dibanding cat minyak biasa. |
| **Rak Gondola** | Perangkat pajangan dagangan utama standar minimarket dan supermarket yang terdiri dari tiang, back-mesh/back-panel, kaki, dan shelving dengan ketinggian dapat disesuaikan. |
| **Shelving** | Papan ambalan tempat meletakkan barang dagangan pada rak gondola. |
| **Single-Page Application (SPA)** | Aplikasi web yang memuat satu halaman HTML tunggal dan memperbarui konten secara dinamis saat pengguna berinteraksi, memberikan pengalaman navigasi yang sangat cepat. |
| **Sticky Component** | Elemen antarmuka pengguna yang tetap menempel pada posisi tertentu di layar (misalnya di bagian atas atau bawah) saat halaman digulir. |
| **UTM Parameters** | Parameter tambahan pada tautan URL (seperti `utm_source`, `utm_medium`, `utm_campaign`) yang digunakan untuk melacak efektivitas asal muasal kunjungan iklan. |
| **Vibe Coding** | Pendekatan pengembangan perangkat lunak modern yang memadukan keahlian logika programmer dengan akselerasi alat bantu kecerdasan buatan (*AI Tools*) untuk menghasilkan kode yang rapi dan teruji secara kilat. |
| **Wall / Single Gondola** | Unit rak gondola satu sisi yang diletakkan menempel pada dinding toko. |
| **Wireframe** | Kerangka sketsa tata letak awal yang menggambarkan penempatan elemen-elemen informasi utama sebelum proses styling visual akhir. |
