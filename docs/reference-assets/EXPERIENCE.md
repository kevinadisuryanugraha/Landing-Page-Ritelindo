---
title: "User Experience & Interaction Specification (EXPERIENCE.md)"
project: "Landing Page B2B Ritelindo Group"
author: "Kevin Adisurya Nugraha"
version: "1.0"
status: "final"
references:
  design_system: "docs/reference-assets/DESIGN.md"
  prd: "docs/reference-assets/PRD-Landing-Page-Ritelindo.md"
---

# User Experience & Interaction Specification (EXPERIENCE.md)
## Landing Page B2B Ritelindo Group — Rak Minimarket & Retail Store Setup

---

## 1. Foundation

- **Platform Target:** Web Application (Single-Page Responsive Web / Static Site).
- **Primary Form-Factor:** Mobile Smartphone (layar 360px - 430px) sebagai perangkat utama pengakses iklan Google Ads, disusul Desktop Browser (1280px - 1920px) bagi pengambil keputusan kantor/laptop.
- **UI Framework System:** Tailwind CSS dengan komponen modular terisolasi.
- **Design Tokens Source:** Mengacu secara penuh pada `docs/reference-assets/DESIGN.md`.

---

## 2. Information Architecture (Page Narrative Hierarchy)

Landing page dirancang dengan alur bercerita (*narrative flow*) psikologis B2B yang sistematis, mengubah rasa ingin tahu pengunjung menjadi keyakinan bertransaksi:

```
[01. Sticky Top Navigation Bar] -> Brand Logo + Quick Navigation + Header Direct WhatsApp CTA
       |
[02. Hero Section] --------------> H1 Keyword B2B Hook + Sub-headline + 3D Hook + Primary CTA + Quick Trust Badges
       |
[03. Core Value Props (7 USP)] --> 7 Keunggulan Mutlak Ritelindo (3D Layout, Free Ongkir, Rakit Gratis, dll)
       |
[04. Layanan 3D Layout Toko] ----> Fitur Utama Pra-Pembelian (Before-After Simulasi 3D vs Realisasi Nyata)
       |
[05. Katalog Paket Retail] ------> 3 Pilihan Paket Toko Solutif (Hemat, Minimarket Modern, Gudang) + In-Card CTA
       |
[06. Sektor Usaha & Portofolio] -> 6 Sektor Bisnis Retail yang Dilayani + Dokumentasi Toko Nyata
       |
[07. Alur Pemesanan (How-to)] ---> 4 Langkah Sederhana dari Konsultasi hingga Rak Terpasang di Toko
       |
[08. FAQ Accordion] -------------> Menjawab Keraguan Umum (Ongkir, Perakitan, Custom, Garansi)
       |
[09. Bottom Final CTA & Footer] -> Pengingat Penawaran Terakhir + Tautan Kontak + Legalitas Perusahaan
       |
[10. Persistent Sticky CTA Bar] -> (Mobile: Fixed Bottom Bar | Desktop: Floating Bubble)
```

---

## 3. Voice and Tone (Microcopy & Framing)

- **Empatis & Solutif:** Memahami bahwa membuka atau merenovasi toko membutuhkan biaya besar dan perencanaan cermat. Mengedepankan bantuan perencanaan gratis (*Free Konsultasi & Layout 3D*) sebelum membicarakan penjualan rak.
- **Pasti & Transparan:** Menggunakan kata-kata tegas seperti *"Langsung dari Pabrik (Bukan Perantara)"*, *"Free Ongkir Jawa & Bali"*, *"Teknisi Merakit Gratis di Lokasi Toko Anda"*.
- **Pesan WhatsApp yang Ramah & Spesifik (*Context-Aware Prefilled Message*):**
  - Dari Tombol Hero: *"Halo Tim Ritelindo, saya melihat iklan di Google dan ingin konsultasi gratis mengenai kebutuhan rak toko saya."*
  - Dari Tombol 3D Layout: *"Halo Tim Ritelindo, saya ingin klaim layanan Desain Layout 3D Gratis untuk ruangan toko saya."*
  - Dari Kartu Paket Minimarket: *"Halo Tim Ritelindo, saya tertarik dengan Paket Minimarket Modern (8x10m). Boleh minta rincian estimasi biaya dan spesifikasinya?"*

---

## 4. Component Behavioral Patterns

### 4.1. Header Navigation Behavior
- **Scroll Detection:** Ketika posisi scroll $> 50$px dari atas, tambahkan latar belakang putih semi-transparan `bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/80` secara mulus (`transition-all duration-300`).
- **Smooth Anchor Jump:** Tautan navigasi desktop (`#keunggulan`, `#paket`, `#layout3d`, `#faq`) melakukan pergerakan gulir halus (*smooth scrolling*) dengan offset kompensasi tinggi header agar judul section tidak tertutup.

### 4.2. FAQ Accordion Behavior
- **Default State:** Pertanyaan pertama terbuka secara default, sedangkan pertanyaan lainnya tertutup.
- **Single / Multi Expandable:** Mengizinkan satu pertanyaan terbuka pada satu waktu untuk menjaga kerapian tinggi halaman (*accordion accordion-collapse*).
- **Animasi Buka-Tutup:** Icon tanda tambah `+` berputar 45 derajat menjadi silang `×` dengan transisi durasi 200ms saat pertanyaan di-klik.

### 4.3. Interactive Package Selector / Cards
- Hover pada kartu paket memicu transisi elevasi bayangan `shadow-md` menjadi `shadow-xl` dan pergeseran vertikal ringan `translate-y-[-4px]`.
- Kartu "Best Seller" memiliki visual penanda bawaan yang sedikit lebih tinggi dibanding kartu sampingnya di layar desktop.

---

## 5. Interaction Primitives & State Patterns

| Komponen | Default State | Hover State (Desktop) | Active / Tap State | Focus State (Keyboard / A11y) |
| :--- | :--- | :--- | :--- | :--- |
| **Tombol WhatsApp Utama** | Background `#25D366`, teks putih tebal | Background `#1EBE5D`, bayangan membesar | Scale 0.98, feedback instan | Ring outline biru 2px `focus:ring-2 focus:ring-blue-500` |
| **Kartu USP (7 Layanan)** | Background putih, border abu-abu terang | Border warna biru `border-blue-200`, icon bergeser ringan | Highlight halus | Outline fokus navigasi tab |
| **Item Pertanyaan FAQ** | Header netral, teks jawaban tersembunyi | Kursor pointer, latar berubah sedikit abu-abu | Animasi toggle konten jawaban | Focus ring pada tombol pertanyaan |
| **Floating Action Button** | Melayang di kanan bawah, pulse badge hijau | Tooltip *"Konsultasi Gratis"* muncul di samping kiri | Membuka tab WhatsApp | Keyboard accessible via tab index |

---

## 6. Mobile-First Thumb-Zone & Sticky CTA

Pada pengujian Google Ads, lebih dari 75% traffic pencarian bisnis berasal dari ponsel pintar. Oleh karena itu, pengalaman navigasi ibu jari (*thumb zone*) diimplementasikan sebagai berikut:

1. **Sticky Bottom Action Bar (Khusus Layar Mobile `< 768px`):**
   - Bar tetap menempel di dasar viewport ponsel tanpa menutupi konten penting (dilengkapi padding dasar pada body halaman `pb-20`).
   - Berisi tombol lebar penuh dengan icon WhatsApp, teks *"Konsultasi WA Gratis"*, dan indikator titik hijau berdenyut (*live pulse badge*) yang menandakan tim CS sedang online siaga.
2. **Eliminasi Rintangan Input Form (Zero-Friction Conversion):**
   - Menghindari formulir input rumit yang sering memicu drop-off pengunjung pada perangkat seluler.
   - Satu sentuhan langsung meluncurkan aplikasi WhatsApp di ponsel pengunjung dengan pesan awal yang sudah tersusun rapi.

---

## 7. Key User Journeys

### User Journey 1: Pak Budi (Pemilik Toko Sembako yang Ingin Upgrade ke Minimarket Modern)
- **Karakter:** Pak Budi (42 tahun, Jawa Tengah), memiliki toko sembako konvensional seluas 6x10m yang ingin dirombak menjadi minimarket modern mirip Indomaret/Alfamart.
- **Pemicu:** Pak Budi mencari di Google: *"pabrik rak minimarket jawa tengah gratis perakitan"*.
- **Alur Interaksi:**
  1. *Landing Beat:* Pak Budi mengklik iklan Google Ads dan tiba di Landing Page Ritelindo dalam waktu kurang dari 2 detik.
  2. *Hook Beat:* Pandangan pertamanya tertuju pada judul: *"Pabrik Rak Minimarket Langsung Dari Pabrik"* dan badge *"Free Perakitan Jatim, Jateng & DIY"*.
  3. *Proof Beat:* Pak Budi menggulir ke bawah, membaca 7 keunggulan utama dan melihat showcase simulasi layout 3D toko. Dia merasa tenang karena tidak perlu menebak-nebak ukuran rak; tim Ritelindo yang akan membuatkan denah 3D-nya secara cuma-cuma.
  4. *Package Beat:* Pak Budi melihat "Paket Minimarket Modern (8x10m)" yang dilengkapi perkiraan jumlah rak single, double, dan end gondola.
  5. *Climax Beat (Konversi):* Pak Budi menekan tombol *"Tanya Paket Ini via WhatsApp"* pada kartu paket.
  6. *Outcome:* Aplikasi WhatsApp di ponselnya otomatis terbuka dengan pesan: *"Halo Ritelindo, saya tertarik dengan info Paket Minimarket Modern untuk toko saya..."*. Dalam 3 menit, sales CS Ritelindo membalas dan meminta denah ruangan toko untuk dibuatkan gambar 3D gratis.

### User Journey 2: Ibu Linda (Pengusaha Baru yang Membuka Pet Shop Cabang Pertama)
- **Karakter:** Ibu Linda (35 tahun, Surabaya), pebisnis muda yang menyewa ruko untuk gerai Pet Shop & Vet Care.
- **Pemicu:** Ingin toko terlihat rapi, warna rak estetik senada konsep brand, dan butuh jasa interior sekaligus.
- **Alur Interaksi:**
  1. Ibu Linda membuka landing page dari link desktop saat bekerja di laptop.
  2. Melihat section *"Melayani Berbagai Sektor: Pet Shop, Baby Shop, Apotek"* dan keunggulan *"Bisa Custom Ukuran & Jasa Interior Toko Modern"*.
  3. Membuka FAQ untuk memastikan apakah warna rak bisa disesuaikan dengan tema tokonya.
  4. Mengklik floating WhatsApp button di pojok kanan bawah desktop untuk mengirim denah ruko miliknya ke desainer 3D Ritelindo.

---

## 8. Accessibility Floor (A11y Standard)

1. **Semantic HTML Elements:** Menggunakan `<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`, `<button>`, dan `<article>` dengan tepat.
2. **Aria Attributes:**
   - Tombol FAQ menggunakan `aria-expanded="true/false"` dan `aria-controls="faq-answer-id"`.
   - Tombol icon WhatsApp menyertakan `aria-label="Hubungi Sales Ritelindo melalui WhatsApp"`.
3. **Color Contrast Compliance:** Semua perpaduan teks dengan latar belakang memenuhi rasio kontras minimum WCAG 2.1 AA (4.5:1 untuk teks normal, 3:1 untuk teks besar).
4. **Reduced Motion Support:** Mendukung media query `@media (prefers-reduced-motion: reduce)` dengan menonaktifkan transisi gerak atau animasi berlebihan bagi pengguna yang sensitif terhadap pergerakan layar.
