import React from 'react';
import { motion } from 'motion/react';
import { Check, MessageCircle, ShieldCheck, Layers } from 'lucide-react';
import { generateWhatsAppUrl } from '../utils/whatsapp';
import { InteractiveBeforeAfter } from './InteractiveBeforeAfter';

export const Layout3DSection: React.FC = () => {
  return (
    <section id="layout3d" className="py-20 md:py-28 bg-slate-50/50 relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Copy & Benefits with in-view reveal */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6 text-slate-800"
          >
            <div className="space-y-3">
              <span className="section-header-label">
                Layanan Desain 3D Gratis
              </span>
              <h2 className="section-heading">
                Cegah Salah Ukur &amp; Salah Beli Rak dengan{' '}
                <span className="text-primary">
                  Simulasi Layout 3D Gratis
                </span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
              Banyak pemilik toko merugi karena membeli rak tanpa denah matang: ada sudut yang terbuang,
              lorong terlalu sempit untuk dilewati troli, atau meja kasir menghalangi pintu masuk.
            </p>

            <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
              Di Ritelindo, tim drafter arsitektur retail kami akan membuatkan{' '}
              <strong className="text-slate-900 font-semibold">Desain 3D presisi</strong> khusus ruangan toko Anda.
              Layanan ini <strong className="text-primary font-bold">100% GRATIS</strong> tanpa dipungut biaya dan tanpa kewajiban membeli.
            </p>

            {/* Benefit Checklist */}
            <div className="space-y-3 pt-1">
              {[
                'Denah penempatan rak single, double island, dan end gondola presisi.',
                'Optimalisasi alur jalan konsumen (customer traffic flow) untuk memicu pembelian impulsif.',
                'Simulasi posisi meja kasir dan zona produk terlaris (hot-spot area).',
                'Estimasi rincian kebutuhan unit rak secara transparan tanpa biaya tersembunyi.',
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[13px] text-slate-600">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 space-y-2">
              <a
                href={generateWhatsAppUrl({ source: 'layout3d' })}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-sm sm:text-base px-7 py-4 rounded-xl"
              >
                <MessageCircle className="w-5 h-5 fill-current shrink-0" />
                <span>Klaim Desain 3D Toko Saya Sekarang</span>
              </a>
              <div className="text-xs text-slate-500 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Cukup kirimkan ukuran panjang x lebar toko Anda via WhatsApp</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Comparison Slider with in-view reveal */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-3"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 pb-1">
              <span className="flex items-center gap-1.5 font-bold text-slate-700">
                <Layers className="w-4 h-4 text-primary" />
                <span>Interaktif: Geser Kiri / Kanan</span>
              </span>
              <span className="text-primary font-bold bg-blue-50 border border-blue-200/70 px-2.5 py-1 rounded-full text-[11px]">
                Studi Kasus Nyata
              </span>
            </div>

            <InteractiveBeforeAfter />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
