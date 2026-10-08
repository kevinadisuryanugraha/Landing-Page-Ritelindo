import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { WORKFLOW_STEPS } from '../data/content';
import { generateWhatsAppUrl } from '../utils/whatsapp';

export const WorkflowSection: React.FC = () => {
  return (
    <section id="alur" className="py-20 md:py-28 bg-slate-50/50">
      <div className="section-container">
        {/* Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-slate-200/60">
          <div className="max-w-xl space-y-3">
            <span className="section-header-label">
              Alur Kerjasama
            </span>
            <h2 className="section-heading">
              Tahapan Pengadaan &amp; Pemasangan Rak Toko
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-sans text-sm sm:text-base text-slate-500 leading-relaxed">
              Dari sketsa awal hingga rak berdiri kokoh dan siap display barang, kami mendampingi setiap tahapan secara terstruktur.
            </p>
          </div>
        </div>

        {/* 4 Steps: Numbered Cards (Apex Arc style) */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {WORKFLOW_STEPS.map((step, index) => (
            <div
              key={step.step}
              className="card-base rounded-2xl p-6 flex flex-col justify-between group hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-full bg-surface-dark text-white font-heading text-sm font-extrabold flex items-center justify-center tracking-tight">
                    0{step.step}
                  </div>
                  <span className="font-sans text-[10px] font-bold text-primary bg-blue-50 border border-blue-100/80 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {step.highlight}
                  </span>
                </div>

                <h3 className="font-heading text-[15px] sm:text-base font-extrabold text-slate-900 mb-2.5 leading-snug">
                  {step.title}
                </h3>
                <p className="font-sans text-[13px] text-slate-500 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connection indicator */}
              {index < WORKFLOW_STEPS.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 text-slate-300" style={{ left: `${(index + 1) * 25 - 1.5}%` }}>
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Standar Mutu Ritelindo</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href={generateWhatsAppUrl({ source: 'hero' })}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp px-8 py-3.5 rounded-full text-sm"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Mulai Langkah 1: Kirim Ukuran Toko via WA</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
