import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Store } from 'lucide-react';
import { generateWhatsAppUrl } from '../utils/whatsapp';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Keunggulan', href: '#keunggulan' },
    { label: 'Desain 3D', href: '#layout3d' },
    { label: 'Paket Toko', href: '#paket' },
    { label: 'Kalkulator', href: '#kalkulator' },
    { label: 'Portofolio', href: '#portfolio' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-40 transition-all">
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-lg shadow-sm border-b border-slate-100'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-[72px]">
            {/* Brand Wordmark */}
            <a
              href="#top"
              className="flex items-center gap-2.5 group focus:outline-none"
              aria-label="Kembali ke atas - Ritelindo Group"
            >
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
                <Store className="w-[18px] h-[18px] text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-[17px] sm:text-lg font-extrabold tracking-tight text-slate-900 leading-none">
                  Ritelindo
                </span>
                <span className="text-[9px] tracking-[0.18em] text-slate-400 font-semibold uppercase leading-none mt-0.5">
                  Group
                </span>
              </div>
            </a>

            {/* Desktop Navigation: Clean horizontal links (Apex Arc style) */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-sans text-[13px] font-medium text-slate-600 hover:text-slate-900 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full focus-visible:outline-none"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Button: Dark solid pill (Apex Arc signature) */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={generateWhatsAppUrl({ source: 'header' })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-[13px] font-bold px-5 py-2.5 rounded-full shadow-sm transition-all active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-primary"
              >
                <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                <span>Konsultasi Gratis</span>
              </a>
            </div>

            {/* Mobile Hamburger */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none rounded-xl hover:bg-slate-100 transition-colors"
                aria-label="Buka menu navigasi"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-4 pb-4 pt-2 animate-fadeIn shadow-lg">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="pt-3 mt-2 border-t border-slate-100">
              <a
                href={generateWhatsAppUrl({ source: 'header' })}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white font-bold py-3 px-4 rounded-xl text-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Konsultasi WA Gratis</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
