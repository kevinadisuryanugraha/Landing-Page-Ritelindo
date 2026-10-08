import React from 'react';
import { motion } from 'motion/react';
import { Camera, MapPin, ArrowUpRight } from 'lucide-react';
import { generateWhatsAppUrl } from '../utils/whatsapp';

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  city: string;
  image: string;
  specs: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: 'minimarket-solo',
    title: 'Minimarket Mandiri Modern',
    category: 'Paket Minimarket 8x12m',
    city: 'Solo, Jawa Tengah',
    image: '/images/hero-retail-store.webp',
    specs: '24 Unit Rak Gondola • Meja Kasir Knockdown',
  },
  {
    id: 'apotek-surabaya',
    title: 'Apotek & Toko Alkes',
    category: 'Setup Apotek Modern',
    city: 'Surabaya, Jawa Timur',
    image: '/images/project-apotek.webp',
    specs: 'Shelving Kaca & Plat Putih • Free Perakitan',
  },
  {
    id: 'petshop-jogja',
    title: 'Boutique Pet Shop',
    category: 'Retail Pet Supplies',
    city: 'Yogyakarta (DIY)',
    image: '/images/project-petshop.webp',
    specs: 'Gondola Heavy 60kg • Desain Interior Toko',
  },
  {
    id: 'gudang-semarang',
    title: 'Gudang Retail Logistik',
    category: 'Medium Duty Racks',
    city: 'Semarang, Jawa Tengah',
    image: '/images/project-gudang.webp',
    specs: 'Kapasitas 300kg/level • Bebas Ongkir Jawa-Bali',
  },
];

export const ProjectShowcase: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="section-container">
        {/* Asymmetric Split Header (Apex Arc) with in-view reveal */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-slate-100"
        >
          <div className="max-w-xl space-y-3">
            <div className="flex items-center gap-2 section-header-label">
              <Camera className="w-4 h-4" />
              <span>Dokumentasi Proyek Riil</span>
            </div>
            <h2 className="section-heading">
              Galeri Realisasi Instalasi Rak Toko Retail
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-sans text-sm sm:text-base text-slate-500 leading-relaxed">
              Dokumentasi pemasangan rak minimarket, apotek, dan perlengkapan retail langsung di lokasi toko klien kami.
            </p>
          </div>
        </motion.div>

        {/* Bento Grid with staggered in-view reveal */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5 auto-rows-[240px] sm:auto-rows-[280px]">
          {PROJECTS.map((project, index) => {
            const spanClasses = [
              'lg:col-span-7 lg:row-span-1',
              'lg:col-span-5 lg:row-span-1',
              'lg:col-span-5 lg:row-span-1',
              'lg:col-span-7 lg:row-span-1',
            ];

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`group relative rounded-2xl overflow-hidden bg-slate-100 cursor-pointer ${spanClasses[index]}`}
              >
                {/* Photo */}
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />

                {/* City Location Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1 bg-white/95 backdrop-blur-sm text-slate-800 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                    <MapPin className="w-3 h-3 text-primary" />
                    <span>{project.city}</span>
                  </span>
                </div>

                {/* Bottom Floating Content (Housify style) */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-10">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <div className="text-[10px] uppercase font-bold text-white/80 tracking-[0.12em] mb-1">
                        {project.category}
                      </div>
                      <h3 className="font-heading font-extrabold text-white text-base sm:text-lg leading-snug">
                        {project.title}
                      </h3>
                      <div className="text-[11px] text-white/70 mt-1">
                        {project.specs}
                      </div>
                    </div>
                    <a
                      href={generateWhatsAppUrl({
                        source: 'package',
                        customMessage: `Halo Tim Ritelindo, saya melihat dokumentasi proyek *${project.title} (${project.city})*. Boleh minta penawaran untuk konsep toko serupa?`,
                      })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white group-hover:text-primary text-white flex items-center justify-center shrink-0 transition-all border border-white/30 group-hover:border-white"
                      aria-label={`Tanya Konsep Proyek ${project.title}`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* See More Button with in-view reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 text-center"
        >
          <a
            href={generateWhatsAppUrl({
              source: 'package',
              customMessage: 'Halo Tim Ritelindo, saya ingin melihat lebih banyak dokumentasi proyek toko yang sudah pernah dikerjakan.',
            })}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-dark px-8 py-3.5 rounded-full hover:scale-105 transition-all"
          >
            <span>Lihat Proyek Lainnya</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
