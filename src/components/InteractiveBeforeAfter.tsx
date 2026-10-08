import React, { useState } from 'react';
import { Box, Check, MoveHorizontal } from 'lucide-react';

export const InteractiveBeforeAfter: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  return (
    <div className="relative rounded-2xl bg-white border border-slate-200 shadow-md overflow-hidden select-none">
      {/* Top Header Information Bar */}
      <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs text-slate-600">
        <span className="font-semibold text-slate-800">
          Geser Tuas untuk Melihat Perbandingan
        </span>
        <span className="font-mono text-[11px] font-bold text-primary bg-blue-100/70 border border-blue-200 px-2 py-0.5 rounded">
          {sliderPosition}% Realisasi
        </span>
      </div>

      {/* Interactive Visual Canvas Container */}
      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-slate-100">
        {/* Layer 1: Real Store Finished Output (Right side / Base layer, z-0) */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-retail-store.webp"
            alt="Hasil Realisasi Toko Minimarket dengan Rak Gondola Ritelindo"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-slate-950/20 pointer-events-none" />

          {/* Top-Right Badge (in Layer 1, clips naturally when Layer 2 covers it) */}
          <div className="absolute top-3.5 right-3.5 pointer-events-none">
            <span className="inline-flex items-center gap-1.5 bg-emerald-600/95 backdrop-blur-sm text-white text-[10px] sm:text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
              <Check className="w-3.5 h-3.5 text-white" />
              <span>HASIL REALISASI</span>
            </span>
          </div>
        </div>

        {/* Layer 2: 3D CAD Blueprint Layout (Left side - clipped by sliderPosition, z-10) */}
        <div
          className="absolute inset-0 z-10 overflow-hidden"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <img
            src="/images/cad-3d-layout.webp"
            alt="Denah Gambar Kerja 3D CAD Minimarket Ritelindo"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-blue-900/10 pointer-events-none" />

          {/* Top-Left Badge */}
          <div className="absolute top-3.5 left-3.5 pointer-events-none">
            <span className="inline-flex items-center gap-1.5 bg-primary/95 backdrop-blur-sm text-white text-[10px] sm:text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
              <Box className="w-3.5 h-3.5 text-white" />
              <span>DESAIN 3D CAD</span>
            </span>
          </div>
        </div>

        {/* Draggable Divider Line & Knob */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.3)] cursor-ew-resize z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-primary shadow-xl flex items-center justify-center border-2 border-primary">
            <MoveHorizontal className="w-4 h-4 text-primary" />
          </div>
        </div>

        {/* Transparent Native Range Slider */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={(e) => setSliderPosition(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
          aria-label="Slider Perbandingan Desain 3D vs Realisasi Nyata"
        />
      </div>

      {/* Structured Comparison Info Bar (2-Column Grid, Clean & Never Overlapping) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 p-3 sm:p-3.5 bg-slate-50 border-t border-slate-200">
        <div className="bg-white rounded-xl p-3 border border-slate-200/80 shadow-sm flex items-start gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-blue-50 text-primary flex items-center justify-center shrink-0 mt-0.5">
            <Box className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900 leading-tight">
              Simulasi Denah Digital
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
              Kalkulasi presisi jumlah ambalan dan alur sirkulasi sebelum fabrikasi besi.
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-3 border border-slate-200/80 shadow-sm flex items-start gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
            <Check className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900 leading-tight">
              Realisasi Perakitan di Lokasi
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
              Rak terpasang kokoh, lorong sirkulasi 90 cm ideal, siap operasional.
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Proof Note */}
      <div className="px-4 py-2.5 bg-slate-100/70 border-t border-slate-200 text-[10px] sm:text-[11px] text-slate-500 text-center font-medium">
        Studi Kasus Proyek Minimarket Solo • Presisi 100% antara denah gambar 3D dan hasil rakitan teknisi
      </div>
    </div>
  );
};
