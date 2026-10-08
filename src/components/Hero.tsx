import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from 'motion/react';
import {
  Box,
  Truck,
  Wrench,
  ShieldCheck,
} from 'lucide-react';
import { generateWhatsAppUrl } from '../utils/whatsapp';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  // Track scroll position of the hero section for parallax
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Softened spring physics for buttery, jitter-free parallax
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    restDelta: 0.001,
  });

  // 1. Main image parallax: gently drifts inside its frame
  const yMainImg = useTransform(smoothProgress, [0, 1], ['0%', '12%']);
  const scaleMainImg = useTransform(smoothProgress, [0, 1], [1.06, 1.0]);

  // 2. Text drift & soft fade as user scrolls past hero
  const yContent = useTransform(smoothProgress, [0, 0.75], ['0px', '-24px']);
  const opacityContent = useTransform(smoothProgress, [0, 0.75], [1, 0.65]);

  // 3. Mini Floating Card 1: floats upward on scroll (counter-parallax)
  const yCard1 = useTransform(smoothProgress, [0, 1], ['0px', '-36px']);

  // 4. Right 2x2 grid columns: staggered parallax
  const yRightCol1 = useTransform(smoothProgress, [0, 1], ['0px', '-18px']);
  const yRightCol2 = useTransform(smoothProgress, [0, 1], ['0px', '18px']);

  // 5. Mini Floating Card 2: floats upward at distinct velocity
  const yCard2 = useTransform(smoothProgress, [0, 1], ['0px', '-48px']);

  return (
    <section id="top" ref={heroRef} className="pt-20 sm:pt-[72px] bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Hero Photo Grid: Housify and Apex Arc proportions */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">

            {/* LEFT: Main Photo (~65%): text at vertical center */}
            <div className="lg:col-span-8 relative min-h-[320px] sm:min-h-[380px] md:min-h-[440px] rounded-[20px] overflow-hidden">
              <motion.img
                src="/images/hero-retail-store.webp"
                alt="Interior Toko Retail Modern dengan Rak Gondola Ritelindo"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ y: yMainImg, scale: scaleMainImg }}
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent" />

              {/* Content: vertically centered like Housify, not at bottom */}
              <motion.div
                style={{ y: yContent, opacity: opacityContent }}
                className="relative z-10 h-full flex flex-col justify-center p-7 sm:p-9 md:p-12"
              >
                <div className="max-w-md">
                  <h1 className="font-heading text-[28px] sm:text-[34px] md:text-[40px] font-extrabold text-white tracking-tight leading-[1.12] mb-4">
                    Pabrik Rak Minimarket
                    <br />
                    &amp; Setup Toko Retail
                  </h1>

                  <p className="text-[12px] sm:text-[13px] text-white/60 leading-relaxed max-w-xs mb-6">
                    Langsung dari produsen. Layanan mencakup Free Konsultasi 3D,
                    Free Ongkir Jawa‑Bali, dan Free Perakitan di lokasi toko Anda.
                  </p>

                  {/* Two buttons: Housify style with white and filled accent */}
                  <div className="flex items-center gap-2.5">
                    <a
                      href={generateWhatsAppUrl({ source: 'hero' })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white font-medium text-[12px] px-5 py-2.5 rounded-lg border border-white/30 hover:bg-white/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                      <span>Konsultasi</span>
                    </a>

                    <a
                      href="#paket"
                      className="inline-flex items-center gap-1.5 bg-accent hover:bg-accent-dark text-white font-medium text-[12px] px-5 py-2.5 rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                      <span>Lihat Paket</span>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Mini Floating Card 1: 25+ Tahun Pengalaman (with Parallax & Entrance) */}
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                style={{ y: yCard1 }}
                className="hidden sm:flex absolute bottom-5 right-6 z-20 items-center gap-3 bg-white/95 backdrop-blur-md py-2.5 px-4 rounded-2xl shadow-lg shadow-black/10 border border-white/60"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center font-heading font-extrabold text-sm shrink-0">
                  25+
                </div>
                <div>
                  <div className="font-heading font-bold text-slate-900 text-[13px] leading-tight">
                    Tahun Pengalaman
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                    Produsen &amp; Pabrik Langsung
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT: 2×2 Photo Thumbnails (~35%) with Staggered Parallax */}
            <div className="hidden lg:grid lg:col-span-4 grid-cols-2 grid-rows-2 gap-3 relative">
              <motion.div style={{ y: yRightCol1 }} className="rounded-[16px] overflow-hidden">
                <img
                  src="/images/package-kios.webp"
                  alt="Toko Kios Modern"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </motion.div>
              <motion.div style={{ y: yRightCol2 }} className="rounded-[16px] overflow-hidden">
                <img
                  src="/images/cad-3d-layout.webp"
                  alt="Desain 3D Layout Toko"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </motion.div>
              <motion.div style={{ y: yRightCol1 }} className="rounded-[16px] overflow-hidden">
                <img
                  src="/images/project-apotek.webp"
                  alt="Proyek Apotek Modern"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </motion.div>
              <motion.div style={{ y: yRightCol2 }} className="rounded-[16px] overflow-hidden">
                <img
                  src="/images/package-supermarket.webp"
                  alt="Rak Supermarket"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </motion.div>

              {/* Mini Floating Card 2: 500+ Proyek Toko (with Parallax & Entrance) */}
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{ y: yCard2 }}
                className="absolute bottom-3 right-3 z-20 flex items-center gap-3 bg-white/95 backdrop-blur-md py-2.5 px-4 rounded-2xl shadow-lg shadow-black/10 border border-slate-100"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-heading font-extrabold text-sm shrink-0">
                  500+
                </div>
                <div>
                  <div className="font-heading font-bold text-slate-900 text-[13px] leading-tight">
                    Proyek Toko Retail
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                    2.000+ Unit Rak Terpasang
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Mobile 2 mini cards */}
          <div className="sm:hidden grid grid-cols-2 gap-3 mt-3">
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-3 flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-primary flex items-center justify-center font-heading font-bold text-xs shrink-0">
                25+
              </div>
              <div>
                <div className="font-heading font-bold text-slate-900 text-xs leading-tight">25+ Tahun</div>
                <div className="text-[10px] text-slate-400">Pabrik Langsung</div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-3 flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-heading font-bold text-xs shrink-0">
                500+
              </div>
              <div>
                <div className="font-heading font-bold text-slate-900 text-xs leading-tight">500+ Toko</div>
                <div className="text-[10px] text-slate-400">2K+ Unit Terpasang</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature strip with In-View reveal */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 sm:mt-8 lg:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3"
        >
          {[
            { Icon: Box, label: 'Free Layout 3D', desc: 'Denah presisi', color: 'text-primary' },
            { Icon: Truck, label: 'Free Ongkir', desc: 'Jawa & Bali', color: 'text-amber-600' },
            { Icon: Wrench, label: 'Free Perakitan', desc: 'Jatim, Jateng, DIY', color: 'text-emerald-600' },
            { Icon: ShieldCheck, label: 'Harga Pabrik', desc: 'Tanpa perantara', color: 'text-slate-600' },
          ].map(({ Icon, label, desc, color }) => (
            <motion.div
              key={label}
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
              className="flex items-center gap-3 py-3.5 px-4 bg-white rounded-xl border border-slate-100 shadow-sm/50"
            >
              <Icon className={`w-5 h-5 ${color} shrink-0`} />
              <div>
                <div className="font-semibold text-slate-900 text-[13px] leading-tight">{label}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">{desc}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
