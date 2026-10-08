import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="section-container">
        {/* Apex Arc "About Company & Metrics" Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Factory Engineering Narrative */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <span className="section-header-label">
              Kualitas Manufaktur Pabrik
            </span>
            <h2 className="section-heading">
              Standar Mutu Fabrikasi &amp; Kekuatan Konstruksi Besi Baja
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-500 leading-relaxed">
              Sebagai produsen rak minimarket dan perlengkapan retail terpadu di Indonesia, seluruh produk kami
              diproduksi menggunakan plat baja standar SNI melalui proses pemanasan oven suhu tinggi untuk memastikan tiang tidak melengkung dan tahan gesekan bertahun-tahun.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-2.5 text-xs text-slate-600">
              <span className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200/80 px-3.5 py-1.5 rounded-full font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                <span>Baja Cold-Rolled SNI</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200/80 px-3.5 py-1.5 rounded-full font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                <span>Sistem Knock-Down Presisi</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200/80 px-3.5 py-1.5 rounded-full font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                <span>Armada Distribusi Internal</span>
              </span>
            </div>
          </div>

          {/* Right Column: 2x2 Bold Metrics Grid (Apex Arc Signature) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-5">
            <div className="p-6 sm:p-7 bg-slate-50 rounded-2xl border border-slate-200/70 space-y-1.5">
              <div className="stat-number">
                1.8<span className="text-2xl sm:text-3xl ml-0.5">mm</span>
              </div>
              <div className="stat-label">
                Tebal Tiang Besi Baja
              </div>
              <div className="stat-desc">
                Standar plat baja cold-rolled SNI kokoh
              </div>
            </div>

            <div className="p-6 sm:p-7 bg-slate-50 rounded-2xl border border-slate-200/70 space-y-1.5">
              <div className="stat-number">
                200<span className="text-2xl sm:text-3xl ml-0.5">°C</span>
              </div>
              <div className="stat-label">
                Suhu Oven Cat Finishing
              </div>
              <div className="stat-desc">
                Powder coating anti-karat &amp; tahan gores
              </div>
            </div>

            <div className="p-6 sm:p-7 bg-slate-50 rounded-2xl border border-slate-200/70 space-y-1.5">
              <div className="stat-number">
                60<span className="text-2xl sm:text-3xl ml-0.5">kg</span>
              </div>
              <div className="stat-label">
                Uji Beban Tiap Ambalan
              </div>
              <div className="stat-desc">
                Kapasitas pajang produk dagangan berat
              </div>
            </div>

            <div className="p-6 sm:p-7 bg-slate-50 rounded-2xl border border-slate-200/70 space-y-1.5">
              <div className="stat-number">
                100<span className="text-2xl sm:text-3xl ml-0.5">%</span>
              </div>
              <div className="stat-label">
                Fasilitas Antar &amp; Rakit
              </div>
              <div className="stat-desc">
                Free Ongkir Jawa-Bali &amp; Teknisi Jatim/Jateng/DIY
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
