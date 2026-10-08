---
title: "Implementation Epics & Ticket Breakdown (TICKETS.md)"
project: "Landing Page B2B Ritelindo Group"
author: "Kevin Adisurya Nugraha"
version: "1.0"
status: "final"
references:
  prd: "docs_kevin/PRD-Landing-Page-Ritelindo.md"
  architecture: "docs_kevin/ARCHITECTURE.md"
  design: "docs_kevin/DESIGN.md"
---

# Implementation Epics & Ticket Breakdown (TICKETS.md)
## Landing Page B2B Ritelindo Group — Rak Minimarket & Retail Store Setup

---

## Ringkasan Epics

| Epic ID | Nama Epic | Deskripsi & Tujuan | Estimasi | Status |
| :--- | :--- | :--- | :---: | :---: |
| **EPIC-01** | **Project Setup & Core Foundation** | Inisialisasi Vite + React + TypeScript + Tailwind CSS, setup token desain, dan single source data store. | 2 Jam | Ready |
| **EPIC-02** | **Core Conversion Sections** | Pembuatan Header, Hero Section berbobot konversi tinggi, Grid 7 Value Proposition, dan Layanan 3D Layout Showcase. | 4 Jam | Ready |
| **EPIC-03** | **Showcase, Trust & Informational Flow** | Pembuatan Katalog Paket Toko, Grid Sektor Usaha, Alur Pemesanan 4 Langkah, Testimoni, dan FAQ Accordion. | 4 Jam | Ready |
| **EPIC-04** | **Sticky Conversion, SEO & Polish** | Pembuatan Mobile Sticky Bar, Footer, Technical SEO & Open Graph Tags, Performance Tuning, dan panduan deployment. | 3 Jam | Ready |

---

## Detail Tiket Pelaksanaan

### EPIC-01: Project Setup & Core Foundation

#### [TICKET-1.1] Scaffolding Project & Dependencies
- **Deskripsi:** Inisialisasi struktur proyek web menggunakan Vite dengan template React + TypeScript dan integrasi Tailwind CSS.
- **Kriteria Selesai (Acceptance Criteria):**
  - Project dapat dijalankan lokal dengan `npm run dev` tanpa error.
  - Dependensi utilitas ikon terpasang (misal: `lucide-react` untuk ikon industrial/clean).
  - TypeScript compiler berjalan ketat tanpa peringatan error.

#### [TICKET-1.2] Design Tokens & Typography Configuration
- **Deskripsi:** Menerapkan warna brand Ritelindo (Biru Industri `#0A3981`, WhatsApp Hijau `#25D366`, Amber Gold `#F59E0B`, dan Slate Netral) serta font Plus Jakarta Sans pada `tailwind.config.js` dan `index.css`.
- **Kriteria Selesai (Acceptance Criteria):**
  - Font Plus Jakarta Sans termuat secara optimal dengan fallback sans-serif.
  - Kelas utility Tailwind untuk warna brand dapat digunakan di seluruh komponen.

#### [TICKET-1.3] Data Store & WhatsApp Utility Engine
- **Deskripsi:** Membuat berkas data terpusat `src/data/content.ts` dan utilitas WhatsApp URL builder di `src/utils/whatsapp.ts`.
- **Kriteria Selesai (Acceptance Criteria):**
  - Seluruh data paket, 7 keunggulan, FAQ, dan testimoni tertata dalam tipe data TypeScript (`interface`).
  - Fungsi `generateWhatsAppUrl()` mampu menghasilkan link `wa.me` lengkap dengan teks pembuka yang rapi dan ter-encode aman.

---

### EPIC-02: Core Conversion Sections

#### [TICKET-2.1] Header & Navigation (`Navbar.tsx`)
- **Deskripsi:** Membangun bar navigasi atas dengan logo Ritelindo Group, menu scroll halus (`#keunggulan`, `#paket`, `#layout3d`, `#faq`), dan tombol CTA header.
- **Kriteria Selesai (Acceptance Criteria):**
  - Header memiliki efek transisi sticky dengan *backdrop blur* saat halaman digulir.
  - Tautan menu mengarahkan pengguna ke section yang dituju dengan transisi halus.

#### [TICKET-2.2] Hero Section with B2B Hook (`Hero.tsx`)
- **Deskripsi:** Membangun section Hero yang memuat judul utama H1 berorientasi B2B, sub-headline persuasif, tombol ganda (*Primary WhatsApp* & *Secondary Lihat Paket*), bar 3 jaminan kilat, serta visual mock rak retail & 3D layout.
- **Kriteria Selesai (Acceptance Criteria):**
  - Memiliki tag `<h1>` tunggal yang memadukan keyword "Pabrik Rak Minimarket".
  - Tombol WhatsApp memiliki kontras visual tinggi dan icon jelas.
  - Menampilkan badge "Free Konsultasi & Layout 3D".

#### [TICKET-2.3] 7 Core Value Proposition Grid (`ValueProps.tsx`)
- **Deskripsi:** Membangun grid kartu yang merepresentasikan 7 keunggulan utama perusahaan sesuai ketentuan `task-kevin.md`.
- **Kriteria Selesai (Acceptance Criteria):**
  - Menampilkan 7 kartu lengkap: *Free Konsultasi & Layout 3D*, *Free Ongkir Jawa-Bali*, *Free Perakitan Jatim/Jateng/DIY*, *Bisa Custom Ukuran*, *Harga Pabrik Langsung*, *Satuan/Paket/Proyek*, dan *Jasa Interior Toko Modern*.
  - Desain kartu bersih, teratur, dan responsif (1 kolom di mobile, 2 kolom di tablet, 3-4 kolom di desktop).

#### [TICKET-2.4] Layanan 3D Layout Toko Showcase (`Layout3DSection.tsx`)
- **Deskripsi:** Membangun showcase visual sebelum & sesudah (*before-after / 3D design vs real store photo*) dan penegasan bahwa simulasi 3D diberikan gratis sebelum pembelian.
- **Kriteria Selesai (Acceptance Criteria):**
  - Menampilkan visual perbandingan desain 3D dengan foto asli toko.
  - Memiliki tombol CTA khusus: *"Klaim Desain 3D Toko Saya"* yang langsung terhubung ke WhatsApp.

---

### EPIC-03: Showcase, Trust & Informational Flow

#### [TICKET-3.1] Retail Packages Showcase (`PackageShowcase.tsx`)
- **Deskripsi:** Membangun komparasi 3 kartu paket rak minimarket (*Paket Toko Hemat*, *Paket Minimarket Modern*, dan *Paket Supermarket & Rak Gudang*).
- **Kriteria Selesai (Acceptance Criteria):**
  - Kartu paket minimarket modern ditandai sebagai "Best Seller" / "Paling Populer".
  - Setiap kartu memiliki daftar spesifikasi teknis dan tombol *"Tanya Paket Ini via WA"*.

#### [TICKET-3.2] Business Sectors Served Grid (`BusinessSectors.tsx`)
- **Deskripsi:** Menampilkan grid 6+ sektor bisnis yang dilayani Ritelindo (Minimarket, Apotek, Pet Shop, Toko Bahan Kue, Toko ATK, Toko Bahan Bangunan).
- **Kriteria Selesai (Acceptance Criteria):**
  - Disertai icon relevan dan label sektor usaha yang jelas.

#### [TICKET-3.3] 4-Step Ordering Workflow (`WorkflowSection.tsx`)
- **Deskripsi:** Visualisasi alur 4 langkah mudah: *1. Konsultasi & Ukur Ruangan -> 2. Desain Layout 3D Gratis -> 3. Produksi Pabrik & Free Ongkir -> 4. Perakitan Gratis di Lokasi*.
- **Kriteria Selesai (Acceptance Criteria):**
  - Rangkaian alur terhubung rapi dengan nomor langkah yang tegas.

#### [TICKET-3.4] Social Proof & Testimonials (`Testimonials.tsx`)
- **Deskripsi:** Menampilkan kutipan ulasan dari pemilik toko ritel yang telah mempercayakan pengadaan rak dan interior tokonya kepada Ritelindo Group.
- **Kriteria Selesai (Acceptance Criteria):**
  - Memuat nama klien, nama toko, lokasi kota, bintang rating 5/5, dan testimoni kepuasan.

#### [TICKET-3.5] Interactive FAQ Accordion (`FaqAccordion.tsx`)
- **Deskripsi:** Membangun komponen accordion tanya jawab interaktif seputar gratis ongkir, gratis perakitan, ukuran custom, dan pembelian satuan.
- **Kriteria Selesai (Acceptance Criteria):**
  - Dapat dibuka-tutup dengan transisi halus tanpa pergeseran layout mendadak.
  - Aksesibel via keyboard (A11y).

---

### EPIC-04: Sticky Conversion, SEO & Polish

#### [TICKET-4.1] Mobile Sticky Bottom Bar & Desktop Floating Bubble (`StickyWhatsApp.tsx`)
- **Deskripsi:** Implementasi tombol aksi WhatsApp yang selalu dapat dijangkau oleh pengunjung di setiap posisi scroll halaman.
- **Kriteria Selesai (Acceptance Criteria):**
  - Di layar mobile (`< 768px`): Menampilkan sticky bar di bagian bawah viewport dengan status online aktif.
  - Di layar desktop (`>= 768px`): Menampilkan floating button mengambang di pojok kanan bawah.

#### [TICKET-4.2] Footer Component (`Footer.tsx`)
- **Deskripsi:** Menampilkan rangkuman identitas perusahaan, alamat kantor/pabrik, tautan cepat, jam operasional, dan hak cipta.
- **Kriteria Selesai (Acceptance Criteria):**
  - Informasi kontak dan legalitas Ritelindo Akselera Kolaborasi tercantum dengan rapi.

#### [TICKET-4.3] Technical On-Page SEO & Open Graph Tags (`index.html`)
- **Deskripsi:** Mengisi meta title, meta description, canonical link, Open Graph tags, dan Twitter Card tags yang teroptimasi B2B keyword.
- **Kriteria Selesai (Acceptance Criteria):**
  - Meta Title: *"Pabrik Rak Minimarket & Perlengkapan Toko Modern | Ritelindo Group"*.
  - Meta Description mengandung kata kunci *Pabrik Rak Minimarket, Gratis Layout 3D, Free Ongkir*.
  - Tag Open Graph lengkap untuk tampilan tautan preview WhatsApp.

#### [TICKET-4.4] Performance Audit & Documentation (`README.md`)
- **Deskripsi:** Menjalankan audit performa Google Lighthouse, memastikan skor $\ge 90$, serta menyusun dokumentasi `README.md` pada repositori.
- **Kriteria Selesai (Acceptance Criteria):**
  - `README.md` memuat cara menjalankan project secara lokal, struktur komponen, dan tautan live demo.
  - Build produksi menghasilkan berkas statis bebas error.
