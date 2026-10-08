import React from 'react';
import { MessageCircle, Box } from 'lucide-react';
import { generateWhatsAppUrl } from '../utils/whatsapp';

export const StickyWhatsApp: React.FC = () => {
  return (
    <>
      {/* 1. Mobile Dual-Action Smart Dock (< 768px) */}
      <aside
        className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-white/95 backdrop-blur-lg border-t border-slate-200/80 px-3 py-2.5 shadow-2xl animate-slideUp"
        aria-label="Aksi Cepat Konsultasi & Layanan"
      >
        <div className="max-w-md mx-auto grid grid-cols-12 gap-2 items-center">
          {/* Action 1: Klaim Desain 3D */}
          <a
            href={generateWhatsAppUrl({ source: 'layout3d' })}
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-5 flex items-center justify-center gap-1.5 bg-slate-100 active:bg-slate-200 text-slate-900 border border-slate-200/80 font-bold text-xs py-3 px-2 rounded-xl transition-all"
            aria-label="Klaim Layanan Desain 3D Toko Gratis"
          >
            <Box className="w-3.5 h-3.5 text-primary shrink-0" />
            <span className="truncate">Klaim 3D Gratis</span>
          </a>

          {/* Action 2: Chat WhatsApp */}
          <a
            href={generateWhatsAppUrl({ source: 'sticky' })}
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-7 flex items-center justify-center gap-2 bg-whatsapp active:bg-whatsapp-dark text-white font-bold text-xs py-3 px-3 rounded-xl shadow-md shadow-emerald-500/20 transition-all"
            aria-label="Chat WhatsApp Konsultasi Retail Sekarang"
          >
            <div className="relative">
              <MessageCircle className="w-4 h-4 fill-current shrink-0" />
              <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-white animate-ping" />
            </div>
            <span className="truncate">Chat WA (Respon Cepat)</span>
          </a>
        </div>
      </aside>

      {/* 2. Desktop Floating Action Bubble (>= 768px) */}
      <aside
        className="hidden md:block fixed bottom-6 right-6 z-50"
        aria-label="Floating WhatsApp Contact"
      >
        <a
          href={generateWhatsAppUrl({ source: 'floating' })}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 bg-whatsapp hover:bg-whatsapp-dark text-white px-5 py-3.5 rounded-full shadow-2xl shadow-emerald-500/25 hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-4 focus:ring-emerald-400/50"
          aria-label="Hubungi Konsultan Retail Ritelindo via WhatsApp"
        >
          <div className="relative">
            <MessageCircle className="w-6 h-6 fill-current" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-300 animate-pulse" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[11px] font-medium leading-none text-emerald-100">
              Online • Respon Cepat
            </span>
            <span className="text-sm font-bold leading-tight mt-0.5">
              Konsultasi WA Gratis
            </span>
          </div>
        </a>
      </aside>
    </>
  );
};
