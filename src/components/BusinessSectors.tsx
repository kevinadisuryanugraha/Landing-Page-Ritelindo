import React from 'react';
import {
  ShoppingCart,
  PlusCircle,
  HeartHandshake,
  Package,
  Shirt,
  Hammer,
  ArrowUpRight,
} from 'lucide-react';
import { BUSINESS_SECTORS } from '../data/content';
import { generateWhatsAppUrl } from '../utils/whatsapp';

export const BusinessSectors: React.FC = () => {
  const renderSectorIcon = (iconName: string) => {
    const props = { className: 'w-5 h-5' };
    switch (iconName) {
      case 'ShoppingCart':
        return <ShoppingCart {...props} />;
      case 'Cross':
        return <PlusCircle {...props} />;
      case 'HeartHandshake':
        return <HeartHandshake {...props} />;
      case 'Package':
        return <Package {...props} />;
      case 'Shirt':
        return <Shirt {...props} />;
      case 'Hammer':
        return <Hammer {...props} />;
      default:
        return <ShoppingCart {...props} />;
    }
  };

  return (
    <section id="sektor" className="py-20 md:py-28 bg-white">
      <div className="section-container">
        {/* Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-slate-100">
          <div className="max-w-xl space-y-3">
            <span className="section-header-label">
              Kategori Industri Retail
            </span>
            <h2 className="section-heading">
              Sektor Usaha Retail yang Telah Kami Layani
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-sans text-sm sm:text-base text-slate-500 leading-relaxed">
              Setiap jenis toko memiliki karakteristik barang yang berbeda. Kami menyesuaikan ketebalan plat,
              kedalaman ambalan, serta aksesoris gantungan agar sesuai dengan produk dagangan Anda.
            </p>
          </div>
        </div>

        {/* 6 Cards Grid (Furnish style) */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BUSINESS_SECTORS.map((sector) => (
            <div
              key={sector.id}
              className="card-base card-hover rounded-2xl p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center mb-5 text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                  {renderSectorIcon(sector.icon)}
                </div>

                <h3 className="font-heading text-base sm:text-lg font-extrabold text-slate-900 mb-2 group-hover:text-primary transition-colors leading-snug">
                  {sector.name}
                </h3>
                <p className="font-sans text-[13px] text-slate-500 leading-relaxed mb-5">
                  {sector.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-sans text-slate-400 text-[11px] font-medium truncate mr-2">
                  Tipe: {sector.popularRack}
                </span>
                <a
                  href={generateWhatsAppUrl({
                    source: 'package',
                    customMessage: `Halo Tim Ritelindo, saya ingin konsultasi kebutuhan rak untuk jenis usaha *${sector.name}*. Boleh minta rekomendasi spesifikasi dan layoutnya?`,
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-primary group-hover:text-white text-slate-500 flex items-center justify-center shrink-0 transition-all border border-slate-200/80 group-hover:border-primary"
                  aria-label={`Tanya Rak untuk ${sector.name}`}
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
