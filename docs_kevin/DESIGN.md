---
title: "Visual Design System & Identity Specification (DESIGN.md)"
project: "Landing Page B2B Ritelindo Group"
author: "Kevin Adisurya Nugraha"
version: "1.0"
status: "final"
tokens:
  colors:
    primary:
      DEFAULT: "#0A3981"
      light: "#1F509A"
      dark: "#062250"
      foreground: "#FFFFFF"
    accent:
      whatsapp: "#25D366"
      whatsapp_dark: "#1EBE5D"
      whatsapp_hover: "#1DA851"
      gold: "#F59E0B"
      gold_light: "#FEF3C7"
      teal: "#0D9488"
    neutral:
      background: "#F8FAFC"
      surface: "#FFFFFF"
      surface_muted: "#F1F5F9"
      border: "#E2E8F0"
      border_strong: "#CBD5E1"
      text_primary: "#0F172A"
      text_secondary: "#475569"
      text_muted: "#94A3B8"
  typography:
    font_sans: "'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    font_mono: "'JetBrains Mono', monospace"
    scale:
      h1: "text-3xl md:text-5xl font-extrabold tracking-tight"
      h2: "text-2xl md:text-3xl font-bold tracking-tight"
      h3: "text-xl md:text-2xl font-bold"
      body_lead: "text-lg md:text-xl text-slate-600 font-normal leading-relaxed"
      body: "text-base text-slate-600 leading-relaxed"
      body_small: "text-sm text-slate-500 leading-normal"
      badge: "text-xs font-semibold tracking-wide uppercase"
  rounded:
    none: "0px"
    sm: "4px"
    md: "8px"
    lg: "12px"
    xl: "16px"
    full: "9999px"
  spacing:
    section_padding_y: "py-16 md:py-24"
    container_max_w: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
---

# Visual Design System (DESIGN.md)
## Landing Page B2B Ritelindo Group — Rak Minimarket & Retail Store Setup

---

## 1. Brand & Style

### 1.1. Brand Persona & Core Tone
Ritelindo Group adalah mitra terpercaya pengusaha retail modern Indonesia. Citra visual yang diusung harus memancarkan:
- **Kredibel & Industrial:** Mencerminkan kekuatan manufaktur langsung dari pabrik dengan standar ketahanan besi kokoh.
- **Modern & Rapi:** Mencerminkan keahlian tata ruang retail modern yang meningkatkan estetika toko dan omset penjualan.
- **Accessible & Solutif:** Ramah bagi pelaku UMKM maupun pemilik toko tradisional yang ingin bertransformasi, tanpa kesan intimidatif atau rumit.
- **High-Converting Urgency:** Mengarahkan perhatian pengunjung secara elegan ke saluran konsultasi gratis tanpa terkesan agresif (*spammy*).

### 1.2. Design Archetype
Mengadopsi gaya **Modern Industrial Retail**: perpaduan antara latar belakang terang bersih (*Clean Light Surface*), aksen biru manufaktur presisi (*Industrial Deep Blue*), dan aksen hijau perpesanan instan WhatsApp (*High-Action Emerald*) sebagai penggerak utama konversi.

---

## 2. Colors

### 2.1. Palette Matrix

| Token Name | Hex Code | Tailwind Utility | Peran & Penggunaan |
| :--- | :--- | :--- | :--- |
| `primary.DEFAULT` | `#0A3981` | `bg-blue-900` / `text-blue-900` | Warna identitas utama brand, teks heading H1/H2, container banner utama. |
| `primary.light` | `#1F509A` | `bg-blue-800` | State hover elemen primer, aksen border fokus, badge penanda paket. |
| `primary.dark` | `#062250` | `bg-blue-950` | Latar belakang footer, teks berbobot tertinggi. |
| `accent.whatsapp` | `#25D366` | `bg-[#25D366]` / `bg-emerald-500` | **Warna Konversi Utama.** Tombol CTA "Konsultasi WA Gratis", floating CTA button. |
| `accent.whatsapp_dark` | `#1EBE5D` | `hover:bg-[#1EBE5D]` | State hover tombol WhatsApp. |
| `accent.gold` | `#F59E0B` | `text-amber-500` / `bg-amber-500` | Bintang rating testimoni, badge "Best Seller", highlight garansi & promo. |
| `accent.gold_light` | `#FEF3C7` | `bg-amber-50` | Latar belakang badge penawaran khusus dan label "Free Ongkir". |
| `neutral.background` | `#F8FAFC` | `bg-slate-50` | Warna latar dasar halaman (mencegah kelelahan mata dibanding putih murni #FFF). |
| `neutral.surface` | `#FFFFFF` | `bg-white` | Latar kartu paket, kartu USP, box testimoni, kontainer accordion. |
| `neutral.surface_muted` | `#F1F5F9` | `bg-slate-100` | Background alternatif section agar tercipta ritme visual saat scroll. |
| `neutral.border` | `#E2E8F0` | `border-slate-200` | Garis batas kartu, pemisah tabel spesifikasi, divider footer. |
| `neutral.text_primary`| `#0F172A` | `text-slate-900` | Teks judul utama, nama paket, pertanyaan FAQ. |
| `neutral.text_secondary`| `#475569` | `text-slate-600` | Deskripsi paragraf, rincian fitur, teks bantuan. |
| `neutral.text_muted` | `#94A3B8` | `text-slate-400` | Placeholder, teks copyright footer, informasi sekunder. |

---

## 3. Typography

### 3.1. Typeface Standard
Menggunakan **Plus Jakarta Sans** (Google Fonts) sebagai font utama karena bentuk geometrisnya yang modern, keterbacaan tinggi pada layar ponsel beresolusi sedang, dan tampilan tegas pada teks berhuruf tebal (*bold/extrabold*). Fallback: *Inter*, *sans-serif*.

### 3.2. Hierarki Tipografi

| Level | Ukuran (Mobile / Desktop) | Weight | Line Height | Contoh Teks |
| :--- | :--- | :--- | :--- | :--- |
| **Display H1** | `text-3xl (30px)` / `text-5xl (48px)` | `font-extrabold` (800) | `leading-tight` (1.15) | *"Pabrik Rak Minimarket & Perlengkapan Toko Modern"* |
| **Section H2** | `text-2xl (24px)` / `text-3xl (30px)` | `font-bold` (700) | `leading-snug` (1.25) | *"7 Alasan Mengapa Ribuan Toko Memilih Ritelindo"* |
| **Card H3** | `text-lg (18px)` / `text-xl (20px)` | `font-bold` (700) | `leading-normal` (1.3) | *"Paket Minimarket Modern (8x10m)"* |
| **Lead Text** | `text-base (16px)` / `text-lg (18px)` | `font-normal` (400) | `leading-relaxed` (1.6) | Sub-headline Hero di bawah H1 |
| **Body Text** | `text-sm (14px)` / `text-base (16px)` | `font-normal` (400) | `leading-relaxed` (1.6) | Teks penjelasan kartu USP & jawaban FAQ |
| **Button Label** | `text-sm (14px)` / `text-base (16px)` | `font-semibold` (600) | `leading-none` | *"Konsultasi WA Gratis", "Klaim Desain 3D"* |
| **Badge / Tag** | `text-xs (12px)` | `font-bold` (700) | `leading-none` | *"FREE LAYOUT 3D", "FREE ONGKIR JAWA-BALI"* |

---

## 4. Layout & Spacing

### 4.1. Grid & Breakpoints (Tailwind Default)
- `sm`: 640px (Ponsel lanskap)
- `md`: 768px (Tablet)
- `lg`: 1024px (Laptop kecil / Desktop)
- `xl`: 1280px (Layar desktop standar)
- `2xl`: 1536px (Layar monitor lebar)

### 4.2. Container & Spacing Rhythm
- **Container Max Width:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` (memberikan nafas visual seimbang di semua resolusi).
- **Section Spacing:** `py-16 md:py-24` (jarak vertikal antar bagian konten untuk mencegah kesan padat menumpuk).
- **Component Gap:**
  - Grid USP: `gap-6 md:gap-8`
  - Grid Paket Rak: `gap-8`
  - Spacing Elemen dalam Kartu: `space-y-4`

---

## 5. Elevation & Depth

| Level | Box Shadow | Penggunaan |
| :--- | :--- | :--- |
| `shadow-none` | Tidak ada bayangan | Elemen datar, input form, divider. |
| `shadow-sm` | `0 1px 2px 0 rgb(0 0 0 / 0.05)` | Border pemisah tipis, badge kartu. |
| `shadow-md` | `0 4px 6px -1px rgb(0 0 0 / 0.1)` | Kartu USP, kartu paket standar, bar navigasi sticky. |
| `shadow-lg` | `0 10px 15px -3px rgb(0 0 0 / 0.1)` | Kartu paket rekomendasi/best seller, modal preview 3D. |
| `shadow-xl` | `0 20px 25px -5px rgb(0 0 0 / 0.1)` | Floating WhatsApp Button di sudut kanan bawah. |
| `shadow-glow` | `0 0 20px rgba(37, 211, 102, 0.4)` | Efek pendaran halus pada tombol WhatsApp CTA untuk menarik pandangan mata. |

---

## 6. Shapes & Borders

- **Button Radius:** `rounded-xl` (12px) untuk tombol reguler, `rounded-full` (9999px) untuk tombol floating WhatsApp & pill badges.
- **Card Radius:** `rounded-2xl` (16px) dengan border halus `border border-slate-200/80`.
- **Badges Radius:** `rounded-full` (9999px) untuk label promo dan status online CS.

---

## 7. Components Visual Specs

### 7.1. Primary WhatsApp CTA Button
- **Default State:** Latar hijau `#25D366`, teks putih tebal, icon WhatsApp SVG di sebelah kiri teks, shadow halus `shadow-lg shadow-emerald-500/25`.
- **Hover State:** Transisi warna ke `#1EBE5D`, sedikit membesar (`scale-[1.02]`), shadow meningkat.
- **Active / Tap State:** `scale-[0.98]`, feedback taktil responsif.

### 7.2. 7 Value Proposition Cards
- Kartu putih bersih (`bg-white`) berbingkai halus (`border border-slate-100`).
- Icon kontainer melingkar `w-12 h-12 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center mb-4`.
- Judul kartu berbobot tebal (`font-bold text-slate-900`).
- Deskripsi singkat 2-3 baris kalimat solutif.

### 7.3. Paket Showcase Cards
- Desain komparasi 3 kolom:
  1. *Paket Toko Hemat* (Border netral).
  2. *Paket Minimarket Modern* (**Best Seller / Featured**, border biru `border-2 border-blue-600`, badge "Paling Populer", skala kartu sedikit lebih tinggi).
  3. *Paket Supermarket & Rak Gudang* (Border netral).
- Rincian spesifikasi dengan checklist icon hijau (`text-emerald-500`).
- Tombol aksi spesifik di dasar setiap kartu (*"Tanya Paket Ini"*).

### 7.4. Floating & Mobile Sticky WhatsApp Bar
- **Mobile Sticky Bar:** Menempel di bawah layar (`fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 z-50 md:hidden`). Menampilkan tombol lebar penuh dengan teks *"Chat WhatsApp Gratis (Respon Cepat)"* dan indikator titik hijau (*live pulse*).
- **Desktop Floating Bubble:** Melayang di posisi `fixed bottom-6 right-6 z-50 hidden md:flex items-center gap-3 bg-[#25D366] text-white px-5 py-3.5 rounded-full shadow-2xl hover:scale-105 transition-all`.

---

## 8. Do's and Don'ts

### Do's (Wajib Diterapkan)
- Selalu sediakan kontras teks minimal 4.5:1 terhadap latar belakang (WCAG 2.1 Level AA).
- Selalu sertakan icon WhatsApp pada setiap tombol yang mengarah ke percakapan WhatsApp.
- Pastikan tombol CTA mudah ditekan di layar HP dengan area sentuh minimal 48 x 48 px (*touch target*).
- Berikan label yang jelas pada setiap gambar layout 3D (misal: "Simulasi 3D vs Realisasi Toko").

### Don'ts (Pantangan Desain)
- Jangan gunakan warna merah menyala untuk tombol utama karena diasosiasikan dengan peringatan bahaya/pembatalan.
- Jangan menyembunyikan penawaran "Free Konsultasi & Layout 3D" di bagian bawah lipatan layar.
- Jangan gunakan lebih dari 2 jenis font dalam satu halaman.
- Jangan membuat teks paragraf terlalu panjang tanpa pemecahan poin checklist atau visual penjelas.
