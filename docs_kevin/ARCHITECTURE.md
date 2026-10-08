---
title: "Technical Architecture Specification (ARCHITECTURE.md)"
project: "Landing Page B2B Ritelindo Group (Google Ads Search Campaign)"
author: "Kevin Adisurya Nugraha"
version: "1.0"
status: "final"
references:
  prd: "docs_kevin/PRD-Landing-Page-Ritelindo.md"
  design: "docs_kevin/DESIGN.md"
  experience: "docs_kevin/EXPERIENCE.md"
---

# Technical Architecture Specification (ARCHITECTURE.md)
## Landing Page B2B Ritelindo Group — Rak Minimarket & Retail Store Setup

---

## 1. System Paradigm & Overview

Landing page ini dirancang sebagai **Ultra-Lightweight Static Web Application (Single-Page App / Static Site)** dengan fokus utama pada performa kecepatan pemuatan (*sub-2-second LCP*), kebersihan struktur kode (*clean code*), On-Page SEO teroptimasi B2B, dan reliabilitas tinggi saat menerima lonjakan lalu lintas iklan berbayar Google Ads Search.

### Architectural Diagram

```
+---------------------------------------------------------------------------------+
|                        GOOGLE ADS SEARCH TRAFFIC                                |
|          (Keywords: Pabrik Rak Minimarket, Paket Setup Toko Retail)             |
+---------------------------------------------------------------------------------+
                                      |
                                      v [HTTPS / Edge CDN Global]
+---------------------------------------------------------------------------------+
|                   FRONT-END LAYER (React + Vite + Tailwind CSS)                 |
+---------------------------------------------------------------------------------+
|  +---------------------------------------------------------------------------+  |
|  | Single Source of Truth Content Store (src/data/content.ts)                |  |
|  | (Semua teks, 7 USP, paket harga, testimoni, FAQ, dan kontak sales)        |  |
|  +---------------------------------------------------------------------------+  |
|                                     |                                           |
|  +----------------------------------v----------------------------------------+  |
|  | Modular UI Component Tree (src/components/):                              |  |
|  | - Navbar.tsx           (Logo, Anchor Links, Header CTA)                   |  |
|  | - Hero.tsx             (H1 B2B Hook, Dual CTA, Trust Badges, 3D Mockup)   |  |
|  | - ValueProps.tsx       (7 Core Value Proposition Cards)                   |  |
|  | - Layout3DSection.tsx  (Visualisasi 3D vs Realisasi Toko & Klaim CTA)     |  |
|  | - PackageShowcase.tsx  (3 Kartu Paket Toko & In-Card Direct Inquire)      |  |
|  | - BusinessSectors.tsx  (6 Sektor Usaha: Minimarket, Apotek, Pet Shop, dll)|  |
|  | - WorkflowSection.tsx  (4 Langkah Mudah: Konsultasi s.d Rak Terpasang)    |  |
|  | - Testimonials.tsx     (Social Proof Klien & Portofolio Toko)             |  |
|  | - FaqAccordion.tsx     (Interactive FAQ Accordion - Ongkir, Custom, dll)  |  |
|  | - FinalCta.tsx         (Penawaran Terakhir Sebelum Footer)                |  |
|  | - Footer.tsx           (Legalitas, Kontak, Lokasi Pabrik, Copyright)      |  |
|  | - StickyWhatsApp.tsx   (Mobile Sticky Bar & Desktop Floating Action)      |  |
|  +---------------------------------------------------------------------------+  |
|                                     |                                           |
|  +----------------------------------v----------------------------------------+  |
|  | Core Utilities (src/utils/):                                              |  |
|  | - whatsapp.ts (Prefilled message generator + UTM parameters preservation) |  |
|  | - analytics.ts (Custom event trigger for Google Ads / GTM conversion)     |  |
|  +---------------------------------------------------------------------------+  |
+---------------------------------------------------------------------------------+
                                      |
                                      v [Direct API Link https://wa.me/...]
+---------------------------------------------------------------------------------+
|                  WHATSAPP BUSINESS CRM / SALES RITELINDO                        |
+---------------------------------------------------------------------------------+
```

---

## 2. Architectural Decisions (AD Invariants)

### AD-01: Framework & Build Engine
- **Decision:** Menggunakan **React 18 + Vite + TypeScript + Tailwind CSS**.
- **Binds:** Seluruh kode antarmuka dan interaksi komponen front-end.
- **Prevents:** Overhead konfigurasi server-side rendering (SSR) kompleks, dependensi Node runtime server di production, dan potensi kegagalan build pada environment deployment statis.
- **Rule:** Output build harus berupa berkas murni statis (`dist/`) yang dapat di-hosting di Vercel, Netlify, maupun GitHub Pages tanpa memerlukan backend server.

### AD-02: Content-Code Decoupling (Single Source of Truth)
- **Decision:** Seluruh salinan teks marketing (*copywriting*), rincian spesifikasi 7 USP, rincian 3 paket rak, daftar sektor bisnis, testimoni, dan pertanyaan FAQ wajib diisolasi di `src/data/content.ts`.
- **Binds:** Semua komponen presentasional di `src/components/`.
- **Prevents:** *Hardcoded text* di dalam elemen JSX/HTML yang menyulitkan revisi harga atau penyesuaian promo marketing.
- **Rule:** Komponen JSX hanya bertindak sebagai template presentasi (*renderer*) yang mengonsumsi data bertipe ketat (*TypeScript interface*) dari `content.ts`.

### AD-03: WhatsApp Conversion Engine & Dynamic Message Prefill
- **Decision:** Logika pembuatan tautan WhatsApp dipusatkan pada satu fungsi utilitas murni di `src/utils/whatsapp.ts`.
- **Binds:** Semua tombol CTA di Navbar, Hero, Kartu Paket, Banner 3D, dan Sticky Bottom Bar.
- **Prevents:** Tautan `wa.me` manual yang inkonsisten, karakter pesan tidak ter-*encode* dengan baik, atau hilangnya informasi paket yang diminati pengunjung.
- **Rule:** Fungsi `generateWhatsAppUrl(topic?: string, packageId?: string)` menerima parameter opsional dan mengembalikan URL resmi `https://wa.me/62xxxxxxxxxxx?text=...` yang ter-encode dengan `encodeURIComponent()`.

### AD-04: Technical On-Page SEO & Open Graph Metadata
- **Decision:** Metadata halaman (Title, Description, Canonical URL, Open Graph, Twitter Cards, Favicon) dikonfigurasi secara deklaratif di `index.html` dan divalidasi via semantic HTML.
- **Binds:** Struktur dokumen HTML dan preview tautan messaging.
- **Prevents:** Judul halaman kosong/generik, tag heading yang tidak runtut (misal memiliki lebih dari 1 tag `<h1>`), atau preview tautan rusak saat link dibagikan di WhatsApp.
- **Rule:** Hanya ada **tepat 1 tag `<h1>`** pada seluruh halaman (di Hero Section). Setiap section menggunakan `<h2>`, dan sub-kartu menggunakan `<h3>`.

### AD-05: Performance Budget & Asset Optimization
- **Decision:** Target Google Lighthouse Performance $\ge 90$ pada pengujian perangkat mobile.
- **Binds:** Seluruh pemuatan aset gambar, font, dan script eksternal.
- **Prevents:** Penurunan skor kecepatan akibat ukuran gambar besar (*uncompressed PNG/JPEG*) atau render-blocking font.
- **Rule:** Seluruh gambar dikonversi ke format modern WebP/SVG, menyertakan atribut `loading="lazy"` untuk elemen di bawah lipatan (*below-the-fold*), dan menyertakan atribut `width` dan `height` eksplisit guna mencegah Cumulative Layout Shift (CLS).

### AD-06: Zero-Vulnerability Security Baseline
- **Decision:** Semua tautan eksternal yang membuka tab baru wajib menyertakan `target="_blank" rel="noopener noreferrer"`.
- **Binds:** Semua anchor tag yang mengarah ke luar halaman (WhatsApp, peta lokasi, media sosial).
- **Prevents:** Kerentanan keamanan *reverse tabnabbing* dan kebocoran referrer.

---

## 3. Project Directory Structure

```text
Landing-Page-Ritelindo/
├── public/
│   ├── favicon.ico
│   ├── og-image.jpg              # Preview image untuk sharing WhatsApp/LinkedIn
│   └── images/                   # Asset gambar rak, 3D mockup, logo (WebP/SVG)
├── src/
│   ├── assets/                   # Icon vektor & SVG inline
│   ├── components/               # Komponen UI modular
│   │   ├── Navbar.tsx            # Header dengan logo & navigasi
│   │   ├── Hero.tsx              # H1 B2B Hook, Dual CTA & Trust badges
│   │   ├── ValueProps.tsx        # Grid 7 Keunggulan Utama Ritelindo
│   │   ├── Layout3DSection.tsx   # Layanan Desain 3D Showcase (Before-After)
│   │   ├── PackageShowcase.tsx   # Kartu Paket Toko (Hemat, Modern, Gudang)
│   │   ├── BusinessSectors.tsx   # Grid 6 Sektor Bisnis Retail
│   │   ├── WorkflowSection.tsx   # 4 Langkah Pemesanan Rak
│   │   ├── Testimonials.tsx      # Social Proof & Portofolio Toko
│   │   ├── FaqAccordion.tsx      # Accordion Tanya Jawab Interaktif
│   │   ├── FinalCta.tsx          # Banner Penutup Pengingat Promo
│   │   ├── Footer.tsx            # Legalitas, Alamat Pabrik, Copyright
│   │   └── StickyWhatsApp.tsx    # Mobile Bottom Bar & Desktop Floating Bubble
│   ├── data/
│   │   └── content.ts            # Single source of truth (semua teks & konfigurasi)
│   ├── types/
│   │   └── index.ts              # TypeScript interfaces (Paket, USP, FAQ, Testimoni)
│   ├── utils/
│   │   ├── whatsapp.ts           # URL builder & prefill message generator
│   │   └── analytics.ts          # Event tracking trigger (GTM / GA4 ready)
│   ├── App.tsx                   # Main Landing Page Layout Composer
│   ├── index.css                 # Tailwind CSS imports & custom utility classes
│   └── main.tsx                  # React Application Entry Point
├── index.html                    # Root HTML dengan SEO Meta Tags & Open Graph
├── tailwind.config.js            # Konfigurasi token warna, font, dan animasi
├── tsconfig.json                 # Konfigurasi compiler TypeScript
├── package.json                  # Dependensi proyek & script build
└── README.md                     # Panduan instalasi dan deployment
```

---

## 4. Data Contract Specification (`src/data/content.ts`)

```typescript
export interface ValuePropItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface RetailPackage {
  id: string;
  name: string;
  idealFor: string;
  estimatedSize: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  name: string;
  storeName: string;
  city: string;
  quote: string;
  rating: number;
}
```

---

## 5. Deployment & Continuous Integration Strategy

1. **Production Build Verification:**
   - Jalankan `npm run build` untuk memverifikasi tidak ada kesalahan kompilasi TypeScript (*type-check pass*).
   - Pastikan berkas statis `dist/` terbentuk rapi dengan ukuran bundle total JavaScript $< 150$ KB (gzipped).
2. **Platform Hosting Rekomendasi:**
   - **Vercel / Netlify:** Integrasi otomatis via GitHub Repository. Setiap commit ke branch `main` langsung memicu *instant deployment* dengan sertifikat SSL gratis dan Edge Caching otomatis.
3. **Penyusunan Dokumentasi Repositori (`README.md`):**
   - Menjelaskan deskripsi proyek, teknologi yang digunakan, cara instalasi lokal (`npm install` & `npm run dev`), serta tautan Live Demo publik.
