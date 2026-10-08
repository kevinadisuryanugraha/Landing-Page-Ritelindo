import React from 'react';
import { motion } from 'motion/react';
import { Check, MessageCircle, ArrowUpRight, Star } from 'lucide-react';
import { RETAIL_PACKAGES } from '../data/content';
import { generateWhatsAppUrl } from '../utils/whatsapp';

export const PackageShowcase: React.FC = () => {
  const getPackageImage = (id: string) => {
    switch (id) {
      case 'paket-hemat':
        return '/images/package-kios.webp';
      case 'paket-minimarket-modern':
        return '/images/hero-retail-store.webp';
      case 'paket-supermarket-gudang':
        return '/images/package-supermarket.webp';
      default:
        return '/images/hero-retail-store.webp';
    }
  };

  return (
    <section id="paket" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="section-container">
        {/* Section Header with in-view reveal */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-slate-100"
        >
          <div className="max-w-xl space-y-3">
            <span className="section-header-label">
              Katalog Setup Toko
            </span>
            <h2 className="section-heading">
              Pilihan Paket Rak Toko Berdasarkan Skala Ruangan
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-sans text-sm sm:text-base text-slate-500 leading-relaxed">
              Paket lengkap rak gondola yang dirancang ekonomis, kokoh, dan siap pakai. Sudah mencakup Free Desain 3D, Free Ongkir Jawa-Bali, dan Free Perakitan di lokasi.
            </p>
          </div>
        </motion.div>

        {/* 3 Package Cards with staggered in-view reveal */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {RETAIL_PACKAGES.map((pkg, index) => {
            const isMiddle = index === 1;
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`rounded-2xl overflow-hidden bg-white flex flex-col justify-between group transition-all duration-300 ${
                  isMiddle
                    ? 'border-2 border-primary shadow-elevated ring-1 ring-primary/10 lg:scale-[1.02]'
                    : 'card-base card-hover'
                }`}
              >
                {/* Photo Thumbnail */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <img
                    src={getPackageImage(pkg.id)}
                    alt={pkg.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />

                  {/* Popular Badge */}
                  {isMiddle && (
                    <div className="absolute top-3 right-3 z-10">
                      <span className="inline-flex items-center gap-1 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                        <Star className="w-3 h-3 fill-current" />
                        <span>Paling Diminati</span>
                      </span>
                    </div>
                  )}

                  {/* Floor Size Tag */}
                  <div className="absolute bottom-3 left-3 z-10">
                    <span className="inline-block bg-white/95 backdrop-blur-sm text-slate-900 text-[11px] font-bold px-3 py-1.5 rounded-full shadow-sm">
                      {pkg.storeSize}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary">
                        {pkg.category}
                      </span>
                      <span className="font-heading font-extrabold text-xs text-slate-900 bg-slate-50 border border-slate-200/70 px-3 py-1 rounded-full">
                        {pkg.priceEstimate}
                      </span>
                    </div>

                    <h3 className="font-heading text-lg sm:text-xl font-extrabold text-slate-900 mb-1.5 leading-snug">
                      {pkg.name}
                    </h3>
                    <p className="font-sans text-xs text-slate-500 mb-5">
                      Peruntukan: {pkg.idealFor}
                    </p>

                    {/* Features Checklist */}
                    <div className="space-y-2 py-4 border-t border-slate-100">
                      <div className="text-[10px] font-bold text-slate-700 uppercase tracking-[0.12em] mb-2">
                        Komponen Termasuk:
                      </div>
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 stroke-[2.5]" />
                          </div>
                          <span className="font-sans text-xs text-slate-600 leading-snug">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action CTA */}
                  <div className="pt-5 border-t border-slate-100 mt-4">
                    <a
                      href={generateWhatsAppUrl({
                        source: 'package',
                        packageId: pkg.id,
                        packageName: pkg.name,
                      })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-sm transition-all active:scale-[0.97] ${
                        isMiddle
                          ? 'bg-primary hover:bg-primary-light text-white shadow-sm'
                          : 'bg-slate-900 hover:bg-slate-800 text-white shadow-sm'
                      }`}
                    >
                      <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                      <span>{pkg.ctaText}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Custom Order Callout with in-view reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 card-base p-6 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="text-center sm:text-left">
            <div className="font-heading font-extrabold text-slate-900 text-sm sm:text-base">
              Punya Ukuran Khusus atau Hanya Butuh Pembelian Satuan?
            </div>
            <div className="font-sans text-xs text-slate-500 mt-1">
              Kami melayani custom ukuran tiang, ambalan, dan warna tiang tanpa batas minimum order.
            </div>
          </div>
          <a
            href={generateWhatsAppUrl({
              source: 'package',
              customMessage:
                'Halo Tim Ritelindo, saya ingin konsultasi pemesanan rak custom / pembelian satuan untuk toko saya.',
            })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold px-5 py-2.5 rounded-full shrink-0 transition-colors"
          >
            <span>Konsultasi Rak Satuan / Custom</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
