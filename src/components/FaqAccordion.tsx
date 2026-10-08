import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/content';
import { generateWhatsAppUrl } from '../utils/whatsapp';

export const FaqAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-14">
          <span className="section-header-label">FAQ</span>
          <h2 className="section-heading">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
            Rangkuman informasi mengenai fasilitas Free Ongkir, Free Perakitan, Desain 3D, dan spesifikasi rak toko.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.id}
                className={`bg-white rounded-2xl border overflow-hidden transition-all duration-300 ${
                  isOpen ? 'border-primary/20 shadow-elevated' : 'border-slate-200/80 shadow-card'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:bg-slate-50"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-slate-900 text-sm sm:text-[15px] leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen ? 'rotate-180 bg-primary text-white' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-[13px] sm:text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-4">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-12 text-center card-base p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <div className="text-sm font-extrabold text-slate-900">
              Punya Pertanyaan Lain Seputar Denah Ruangan Toko Anda?
            </div>
            <div className="text-xs text-slate-500 mt-1">
              Tim drafter dan konsultan kami siap berdiskusi via WhatsApp tanpa biaya.
            </div>
          </div>
          <a
            href={generateWhatsAppUrl({ source: 'faq' })}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-xs px-5 py-3 rounded-xl shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Tanya via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
