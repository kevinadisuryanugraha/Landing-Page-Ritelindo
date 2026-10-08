import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Check, ArrowRight } from 'lucide-react';
import { generateWhatsAppUrl } from '../utils/whatsapp';

interface StoreTypeOption {
  id: string;
  name: string;
}

interface SizeOption {
  id: string;
  label: string;
  area: number;
  singleRacks: number;
  doubleRacks: number;
  endRacks: number;
  recommendedPackage: string;
  priceNote: string;
}

const STORE_TYPES: StoreTypeOption[] = [
  { id: 'minimarket', name: 'Minimarket Mandiri' },
  { id: 'sembako', name: 'Toko Sembako Modern' },
  { id: 'apotek', name: 'Apotek & Toko Obat' },
  { id: 'petshop', name: 'Pet Shop / Baby Shop' },
];

const SIZE_OPTIONS: SizeOption[] = [
  {
    id: 'small',
    label: '4x6 s.d 5x6 m (24-30 m²)',
    area: 30,
    singleRacks: 8,
    doubleRacks: 3,
    endRacks: 2,
    recommendedPackage: 'Paket Toko Kios & Kelontong',
    priceNote: 'Mulai Rp 12 - 15 Jutaan',
  },
  {
    id: 'medium',
    label: '6x8 s.d 6x10 m (48-60 m²)',
    area: 60,
    singleRacks: 14,
    doubleRacks: 6,
    endRacks: 3,
    recommendedPackage: 'Paket Minimarket Menengah',
    priceNote: 'Mulai Rp 18 - 24 Jutaan',
  },
  {
    id: 'standard',
    label: '8x10 s.d 8x12 m (80-100 m²)',
    area: 100,
    singleRacks: 20,
    doubleRacks: 10,
    endRacks: 4,
    recommendedPackage: 'Paket Minimarket Standar',
    priceNote: 'Mulai Rp 28 - 35 Jutaan',
  },
  {
    id: 'large',
    label: '> 120 m² (Supermarket / Grosir)',
    area: 150,
    singleRacks: 30,
    doubleRacks: 16,
    endRacks: 6,
    recommendedPackage: 'Paket Supermarket & Rak Gudang',
    priceNote: 'Kalkulasi Sesuai Denah',
  },
];

export const StoreEstimator: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('minimarket');
  const [selectedSize, setSelectedSize] = useState<string>('standard');

  const currentType = useMemo(
    () => STORE_TYPES.find((t) => t.id === selectedType) || STORE_TYPES[0],
    [selectedType]
  );

  const currentSize = useMemo(
    () => SIZE_OPTIONS.find((s) => s.id === selectedSize) || SIZE_OPTIONS[2],
    [selectedSize]
  );

  const customWhatsAppMessage = useMemo(() => {
    return `Halo Tim Ritelindo, saya telah menggunakan Kalkulator Estimasi di web untuk jenis toko *${currentType.name}* dengan ukuran *${currentSize.label}*. Hasil estimasi: ${currentSize.singleRacks} Rak Single, ${currentSize.doubleRacks} Rak Double, dan ${currentSize.endRacks} End Gondola. Boleh minta konfirmasi denah 3D dan rincian penawaran resminya?`;
  }, [currentType, currentSize]);

  return (
    <section id="kalkulator" className="py-20 md:py-28 bg-slate-50/50 relative overflow-hidden">
      <div className="section-container">
        {/* Header with in-view reveal */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-14"
        >
          <span className="section-header-label">Alat Perencanaan</span>
          <h2 className="section-heading">
            Kalkulator Estimasi Kebutuhan Rak Toko
          </h2>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
            Pilih jenis usaha dan perkiraan luas toko Anda di bawah untuk mendapatkan estimasi unit rak gondola serta paket yang sesuai.
          </p>
        </motion.div>

        {/* Calculator Container with in-view reveal */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start max-w-5xl mx-auto"
        >
          {/* Left: Input Selectors */}
          <div className="lg:col-span-7 card-base p-6 sm:p-8 space-y-6">
            {/* Step 1 */}
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-[0.12em] text-slate-700">
                1. Pilih Kategori Bisnis Retail:
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {STORE_TYPES.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setSelectedType(type.id)}
                    className={`p-3 rounded-xl border text-left text-xs sm:text-sm font-semibold transition-all ${
                      selectedType === type.id
                        ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                    }`}
                  >
                    {type.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2 */}
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-[0.12em] text-slate-700">
                2. Pilih Estimasi Dimensi Ruangan Toko:
              </label>
              <div className="space-y-2">
                {SIZE_OPTIONS.map((size) => (
                  <button
                    key={size.id}
                    type="button"
                    onClick={() => setSelectedSize(size.id)}
                    className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between ${
                      selectedSize === size.id
                        ? 'bg-slate-900 text-white border-slate-900 shadow-sm font-bold'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                    }`}
                  >
                    <span>{size.label}</span>
                    <span
                      className={`text-[11px] font-mono shrink-0 ${
                        selectedSize === size.id ? 'text-amber-300 font-bold' : 'text-slate-400'
                      }`}
                    >
                      {size.priceNote}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Output Card */}
          <div className="lg:col-span-5 bg-white border-2 border-primary/20 rounded-2xl p-6 sm:p-8 space-y-6 shadow-elevated relative">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary">
                Rekomendasi Paket
              </span>
              <h3 className="text-lg font-extrabold text-slate-900 mt-1 leading-snug">
                {currentSize.recommendedPackage}
              </h3>
            </div>

            {/* Unit Estimates */}
            <div className="grid grid-cols-3 gap-2.5 text-center">
              <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200/70">
                <div className="stat-number text-2xl sm:text-3xl">
                  {currentSize.singleRacks}
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-600 mt-1 font-medium">
                  Rak Single Wall
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200/70">
                <div className="stat-number text-2xl sm:text-3xl">
                  {currentSize.doubleRacks}
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-600 mt-1 font-medium">
                  Rak Double Island
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200/70">
                <div className="stat-number text-2xl sm:text-3xl">
                  {currentSize.endRacks}
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-600 mt-1 font-medium">
                  End Gondola
                </div>
              </div>
            </div>

            {/* Guarantees */}
            <div className="space-y-2 text-xs text-slate-600 pt-1">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Termasuk Free Desain Layout 3D sebelum bayar</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Free Ongkos Kirim se-Jawa dan Bali</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Free Jasa Perakitan Teknisi di Toko</span>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <a
                href={generateWhatsAppUrl({
                  source: 'package',
                  customMessage: customWhatsAppMessage,
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full py-3.5 px-4 rounded-xl text-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                <span>Konsultasi Hasil Estimasi Ini</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>
              <div className="text-center text-[10px] text-slate-400 mt-2">
                Estimasi indikatif; akan disesuaikan presisi saat kirim ukuran denah
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
