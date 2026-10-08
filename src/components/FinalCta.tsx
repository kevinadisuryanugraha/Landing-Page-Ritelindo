import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, CheckCircle2, ShieldCheck } from 'lucide-react';
import { generateWhatsAppUrl } from '../utils/whatsapp';

export const FinalCta: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="bg-surface-dark rounded-3xl p-8 sm:p-12 md:p-16 text-center text-white shadow-2xl relative overflow-hidden space-y-6"
        >
          <div className="relative z-10 space-y-6">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-extrabold tracking-tight text-white leading-[1.1] max-w-3xl mx-auto">
              Wujudkan Penataan Toko Retail yang Rapi dan Terencana
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Kirimkan ukuran denah ruangan toko Anda sekarang. Tim drafter Ritelindo siap merancang simulasi 3D gratis,
              menghitungkan kebutuhan unit rak secara presisi, dan mengirimkan langsung ke toko Anda dengan bebas ongkir se-Jawa Bali.
            </p>

            {/* Action Button */}
            <div className="pt-2">
              <a
                href={generateWhatsAppUrl({ source: 'final' })}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base px-8 py-4 rounded-xl shadow-lg shadow-emerald-500/25"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Mulai Konsultasi WA Gratis Sekarang</span>
              </a>
            </div>

            {/* Value Badges */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2.5 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Konsultasi Bebas Biaya</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Simulasi Denah 3D Gratis</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Free Ongkir Jawa - Bali</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Garansi Presisi Pabrik</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
