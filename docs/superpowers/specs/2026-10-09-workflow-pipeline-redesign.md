# Design Specification: Interactive Connected Pipeline (Workflow Section Redesign)
**Date:** 2026-10-09  
**Author:** Kevin Adisurya Nugraha & BMAD Agent  
**Status:** Approved  
**Topic:** Redesign `src/components/WorkflowSection.tsx` into an Interactive, Proportional, Innovative, and Fully Responsive Connected Pipeline.

---

## 1. Background & Problem Statement
Section Alur Pemesanan (`WorkflowSection.tsx`) saat ini menggunakan 4 kotak statis terpisah dengan layout grid standar (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`). Tampilan sebelumnya memiliki kekurangan:
- Kartu terasa kaku dan template-like tanpa interaktivitas.
- Indikator panah statis antar-kartu tampak canggung pada berbagai ukuran layar.
- Informasi tiap tahap minim rincian konkret (tidak ada estimasi durasi waktu, biaya gratis, atau deliverable konkret).
- Di perangkat mobile, kartu bertumpuk ke bawah secara panjang tanpa elemen penarik perhatian interaktif.

## 2. Goals & Design Principles
1. **Interactive & Innovative:** Menghadirkan *Interactive Connected Pipeline* di mana pengunjung dapat mengklik/memilih tahapan (01 s.d. 04), melihat visual status aktif yang menyala, progress track yang terhubung mulus, dan detail deliverable konkret per tahap.
2. **Proportional & Polished Aesthetics:** Proporsi kartu seimbang, tipografi industrial berwibawa, ikon fungsional per tahap (`MessageSquare`, `Layers` / `FileSpreadsheet`, `Truck`, `Wrench`), dan micro-details transparan.
3. **Multi-Device Responsiveness (Zero Layout Shift & Zero Overflow):**
   - **Desktop (>= 1024px):** 4 kartu horizontal terhubung dengan animated progress pipeline track dan connector beams.
   - **Tablet (768px - 1023px):** 2x2 grid seimbang dengan node stepper interaktif di atasnya.
   - **Mobile (< 768px):** Interactive quick-step selector tab di bagian atas, menampilkan kartu aktif terpilih secara mendalam dan thumb-friendly, atau accordion timeline terpadu yang mulus.
4. **Decoupled Data & Anti-Slop Strict Compliance:**
   - Menyimpan seluruh data teks terstruktur di `src/data/content.ts` (termasuk durasi, biaya, output deliverable).
   - Zero em dashes (`—`), zero klaim fiktif, zero generic sparkles icons.
   - External links WhatsApp memakai `target="_blank" rel="noopener noreferrer"` dan preserve Google Ads UTM parameters.

---

## 3. Detailed Component Architecture

### 3.1 Data Model Enhancement (`src/types/index.ts` & `src/data/content.ts`)
Setiap tahap workflow diperkaya dengan interface terstruktur:
```typescript
export interface EnhancedWorkflowStep {
  step: number;
  title: string;
  shortLabel: string;
  description: string;
  highlight: string;
  duration: string;
  cost: string;
  deliverables: string[];
  icon: 'MessageSquare' | 'Compass' | 'Truck' | 'Wrench';
  actionCta: {
    label: string;
    source: 'hero' | 'layout3d' | 'package' | 'faq';
    customMessage: string;
  };
}
```

Data langkah konkret:
- **Tahap 01 (Kirim Ukuran Denah Toko):**
  - Durasi: *Respon < 15 Menit* • Biaya: *Rp 0 (Gratis)*
  - Deliverables: Panduan pengukuran ruangan toko, diskusi konsep layout, format sketsa kasar via WhatsApp.
  - CTA: *"Kirim Sketsa Denah via WA"*
- **Tahap 02 (Pembuatan Gambar Kerja 3D & RAB):**
  - Durasi: *Pengerjaan 1x24 Jam* • Biaya: *100% Gratis*
  - Deliverables: Denah layout 3D presisi, simulasi alur lorong & kasir, rincian penawaran harga transparan tanpa komitmen awal.
  - CTA: *"Klaim Desain 3D Toko"*
- **Tahap 03 (Produksi Pabrik & Pengiriman Armada):**
  - Durasi: *Fabrikasi 1-3 Hari Kerja* • Biaya: *Free Ongkir Jawa-Bali*
  - Deliverables: Plat baja standar SNI, finishing cat powder coating oven 200°C, pengiriman langsung armada ekspedisi pabrik.
  - CTA: *"Cek Jadwal Pengiriman"*
- **Tahap 04 (Perakitan Langsung oleh Teknisi):**
  - Durasi: *Selesai dalam 1 Hari* • Biaya: *Free Perakitan Jatim, Jateng & DIY*
  - Deliverables: Perakitan langsung di lokasi toko klien, pengujian kestabilan beban rak gondola, serah terima siap isi barang.
  - CTA: *"Konsultasi Perakitan Toko"*

### 3.2 UI Layout & Interactions (`src/components/WorkflowSection.tsx`)
1. **Header:** Asymmetric Editorial Split Header (`Alur Kerjasama` + judul + deskripsi pengantar).
2. **Progress Stepper Bar:** Bar penunjuk tahap 01, 02, 03, 04 dengan progress line terhubung, badge status interaktif (*Selesai / Sedang Dipilih / Selanjutnya*).
3. **4 Interactive Pipeline Cards:**
   - State `activeStep` (1, 2, 3, 4) dengan animasi `motion/react`.
   - Kartu yang aktif mendapat aksen border tegas `border-primary`, shadow elevated, dan visual halo yang elegan.
   - User dapat mengklik kartu mana saja untuk menjelajahi detail langkah tersebut.
   - Dilengkapi micro-checklist 3 poin deliverable per kartu.
4. **Interactive Action Spotlight:**
   - Pada bagian bawah alur, terdapat banner kartu aksi yang langsung beresonansi dengan tahap aktif yang dipilih pengguna, mempermudah eksekusi konversi tanpa harus kembali ke atas halaman.

---

## 4. Verification & Testing Criteria
1. `npm test` harus lulus 100% (29/29 tests pass).
2. `npm run build` harus lulus tanpa warning atau error TypeScript.
3. Responsif di seluruh resolusi (320px mobile s.d. 1920px Full HD desktop) tanpa horizontal scroll bar.
4. Aksesibel bagi keyboard (tab focus) dan screen reader dengan semantic markup `aria-expanded` / `aria-current`.
