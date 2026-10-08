import React from 'react';
import { Store, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { generateWhatsAppUrl } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-dark text-slate-400 py-16 text-xs">
      <div className="section-container space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-white">
                <Store className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold text-white leading-none tracking-tight">RITELINDO</span>
                <span className="text-[9px] tracking-[0.18em] text-slate-500 font-semibold uppercase leading-none mt-0.5">
                  Group
                </span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Pabrik manufaktur rak gondola minimarket, rak gudang modern, dan penyedia solusi tata ruang retail di Indonesia.
            </p>
            <div className="text-[11px] text-slate-500">
              {COMPANY_INFO.legalName}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <div className="font-extrabold text-white uppercase tracking-[0.12em] text-xs">
              Navigasi Halaman
            </div>
            <ul className="space-y-2.5">
              <li>
                <a href="#keunggulan" className="hover:text-white transition-colors">
                  7 Keunggulan Utama
                </a>
              </li>
              <li>
                <a href="#layout3d" className="hover:text-white transition-colors">
                  Layanan Desain 3D Gratis
                </a>
              </li>
              <li>
                <a href="#paket" className="hover:text-white transition-colors">
                  Pilihan Paket Toko Retail
                </a>
              </li>
              <li>
                <a href="#kalkulator" className="hover:text-white transition-colors">
                  Kalkulator Estimasi Toko
                </a>
              </li>
              <li>
                <a href="#sektor" className="hover:text-white transition-colors">
                  Sektor Usaha yang Dilayani
                </a>
              </li>
              <li>
                <a href="#alur" className="hover:text-white transition-colors">
                  Alur Kerjasama Pemesanan
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Pertanyaan Umum (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <div className="font-extrabold text-white uppercase tracking-[0.12em] text-xs">
              Kontak &amp; Layanan
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <a
                  href={generateWhatsAppUrl({ source: 'hero' })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 font-medium transition-colors"
                >
                  WhatsApp: {COMPANY_INFO.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.email}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.operationalHours}</span>
              </li>
            </ul>
          </div>

          {/* Factory Coverage */}
          <div className="space-y-4">
            <div className="font-extrabold text-white uppercase tracking-[0.12em] text-xs">
              Wilayah Pabrik &amp; Layanan
            </div>
            <div className="flex items-start gap-2.5 text-slate-400">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>{COMPANY_INFO.address}</span>
            </div>
            <div className="bg-white/5 rounded-xl p-3.5 border border-white/10 text-[11px] space-y-1.5">
              <div className="text-white font-semibold">Jangkauan Armada:</div>
              <div>• Free Ongkir: Seluruh Pulau Jawa &amp; Bali</div>
              <div>• Free Perakitan: Jatim, Jateng &amp; DIY</div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 text-center sm:text-left">
          <div>
            &copy; {COMPANY_INFO.copyrightYear} {COMPANY_INFO.legalName}. Seluruh Hak Cipta Dilindungi.
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-3 gap-y-1">
            <span>Standar SNI Besi Baja</span>
            <span className="text-slate-600">•</span>
            <span>Powder Coating Finishing</span>
            <span className="text-slate-600">•</span>
            <span>Google Ads Campaign Destination</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
