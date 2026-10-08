import React from 'react';
import { motion } from 'motion/react';
import { Box, Truck, Wrench, Ruler, Factory, Layers, ArrowUpRight } from 'lucide-react';
import { VALUE_PROPOSITIONS } from '../data/content';
import { generateWhatsAppUrl } from '../utils/whatsapp';

export const ValueProps: React.FC = () => {
  const getIcon = (id: string) => {
    const props = { className: 'w-5 h-5' };
    switch (id) {
      case 'free-layout-3d':
        return <Box {...props} />;
      case 'free-ongkir':
        return <Truck {...props} />;
      case 'free-assembly':
        return <Wrench {...props} />;
      case 'custom-size':
        return <Ruler {...props} />;
      case 'direct-factory':
        return <Factory {...props} />;
      case 'order-flexibility':
        return <Layers {...props} />;
      case 'interior-service':
        return <Layers {...props} />;
      default:
        return <Box {...props} />;
    }
  };

  return (
    <section id="keunggulan" className="py-20 md:py-28 bg-white">
      <div className="section-container">
        {/* Asymmetric Editorial Header (Apex Arc) with in-view reveal */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-slate-100"
        >
          <div className="max-w-2xl space-y-3">
            <span className="section-header-label">
              Kapabilitas &amp; Nilai Layanan
            </span>
            <h2 className="section-heading">
              7 Keunggulan Utama Fabrikasi Ritelindo untuk Toko Anda
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-sans text-sm sm:text-base text-slate-500 leading-relaxed">
              Investasi rak toko harus tahan puluhan tahun, hemat biaya di awal, dan
              memaksimalkan kapasitas pajang produk dagangan Anda.
            </p>
          </div>
        </motion.div>

        {/* Service Cards Grid (3-3-1 Spotlight) with staggered in-view reveal */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {VALUE_PROPOSITIONS.map((item, index) => {
            const isLast = index === VALUE_PROPOSITIONS.length - 1;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.65,
                  delay: (index % 3) * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`rounded-2xl flex flex-col justify-between transition-all duration-300 group ${
                  isLast
                    ? 'md:col-span-2 lg:col-span-3 bg-surface-dark text-white p-7 sm:p-8 shadow-xl border border-slate-800'
                    : 'card-base card-hover p-6 sm:p-7'
                }`}
              >
                {isLast ? (
                  /* 7th Feature: Wide Spotlight Banner */
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-white/10 text-amber-300 flex items-center justify-center shrink-0 border border-white/15">
                          {getIcon(item.id)}
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-300">
                            Keunggulan #07 &bull; {item.badge}
                          </span>
                          <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-white leading-tight mt-0.5">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                      <p className="font-sans text-sm text-slate-300 max-w-3xl leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="shrink-0 pt-2 lg:pt-0">
                      <a
                        href={generateWhatsAppUrl({
                          source: 'usp',
                          customMessage:
                            'Halo Tim Ritelindo, saya tertarik dengan layanan *Jasa Interior Toko Modern & Stylish*. Boleh minta informasi teknis dan katalog produknya?',
                        })}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-slate-100 font-bold text-sm px-6 py-3.5 rounded-full shadow-sm transition-all active:scale-[0.97]"
                      >
                        <span>Konsultasi Jasa Interior</span>
                        <ArrowUpRight className="w-4 h-4 text-primary" />
                      </a>
                    </div>
                  </div>
                ) : (
                  /* Standard Cards 1-6 */
                  <>
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/80 shadow-card flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                          {getIcon(item.id)}
                        </div>
                        <span className="text-[10px] font-bold text-slate-500 bg-slate-50 border border-slate-200/70 px-2.5 py-1 rounded-full uppercase tracking-wider">
                          {item.badge}
                        </span>
                      </div>

                      <h3 className="font-heading text-base sm:text-lg font-extrabold text-slate-900 mb-2 group-hover:text-primary transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="font-sans text-[13px] text-slate-500 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-slate-400 font-mono text-[11px]">#{String(index + 1).padStart(2, '0')}</span>
                      <a
                        href={generateWhatsAppUrl({ source: 'usp' })}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-primary inline-flex items-center gap-1 group-hover:underline text-[13px]"
                      >
                        <span>Tanya Layanan</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
