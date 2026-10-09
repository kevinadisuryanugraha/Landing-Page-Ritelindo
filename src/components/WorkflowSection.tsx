import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MessageSquare,
  Compass,
  Truck,
  Wrench,
  Check,
  Clock,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react';
import { WORKFLOW_STEPS } from '../data/content';
import { generateWhatsAppUrl } from '../utils/whatsapp';

export const WorkflowSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const getStepIcon = (iconName: string, isActive: boolean) => {
    const iconClass = `w-5 h-5 ${isActive ? 'text-white' : 'text-primary'}`;
    switch (iconName) {
      case 'MessageSquare':
        return <MessageSquare className={iconClass} />;
      case 'Compass':
        return <Compass className={iconClass} />;
      case 'Truck':
        return <Truck className={iconClass} />;
      case 'Wrench':
        return <Wrench className={iconClass} />;
      default:
        return <MessageSquare className={iconClass} />;
    }
  };

  const currentStepData =
    WORKFLOW_STEPS.find((s) => s.step === activeStep) || WORKFLOW_STEPS[0];

  const handleNextStep = () => {
    setActiveStep((prev) => (prev < WORKFLOW_STEPS.length ? prev + 1 : 1));
  };

  const handlePrevStep = () => {
    setActiveStep((prev) => (prev > 1 ? prev - 1 : WORKFLOW_STEPS.length));
  };

  return (
    <section id="alur" className="py-20 md:py-28 bg-slate-50/60 overflow-hidden">
      <div className="section-container">
        {/* 1. Asymmetric Editorial Split Header (Apex Arc standard) */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-slate-200/80"
        >
          <div className="max-w-xl space-y-3">
            <span className="section-header-label">
              Alur Kerjasama Pabrik
            </span>
            <h2 className="section-heading">
              Tahapan Pengadaan &amp; Pemasangan Rak Toko Terintegrasi
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-sans text-sm sm:text-base text-slate-500 leading-relaxed">
              Dari pengiriman sketsa ukuran denah hingga rak berdiri kokoh siap pajang produk dagangan.
              Pilih setiap tahapan untuk melihat rincian deliverable dan estimasi waktu.
            </p>
          </div>
        </motion.div>

        {/* 2. Interactive Connected Pipeline Track (Progress Stepper) */}
        <div className="mt-10 sm:mt-12 bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-4 sm:p-6 shadow-sm">
          {/* Top Progress Track Header (Desktop & Tablet) */}
          <div className="hidden md:block relative mb-8">
            {/* Background Track Line */}
            <div className="absolute top-5 left-10 right-10 h-1 bg-slate-100 rounded-full z-0" />

            {/* Active Progress Fill Line */}
            <motion.div
              className="absolute top-5 left-10 h-1 bg-primary rounded-full z-0 transition-all duration-500 ease-out"
              style={{
                width: `${((activeStep - 1) / (WORKFLOW_STEPS.length - 1)) * 100}%`,
                maxWidth: 'calc(100% - 80px)',
              }}
            />

            {/* Stepper Node Buttons */}
            <div className="relative z-10 flex items-center justify-between">
              {WORKFLOW_STEPS.map((step) => {
                const isActive = activeStep === step.step;
                const isPassed = activeStep > step.step;

                return (
                  <button
                    key={step.step}
                    type="button"
                    onClick={() => setActiveStep(step.step)}
                    className="flex flex-col items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl px-2 py-1 transition-all"
                    aria-label={`Pilih ${step.title}`}
                    aria-current={isActive ? 'step' : undefined}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-heading text-xs font-bold transition-all duration-300 ${
                        isActive
                          ? 'bg-primary text-white ring-4 ring-primary/20 scale-110 shadow-md'
                          : isPassed
                          ? 'bg-emerald-600 text-white'
                          : 'bg-white border-2 border-slate-200 text-slate-500 group-hover:border-primary/50 group-hover:text-primary'
                      }`}
                    >
                      {isPassed ? <Check className="w-4 h-4 text-white" /> : `0${step.step}`}
                    </div>
                    <span
                      className={`mt-2 text-xs font-semibold tracking-tight transition-colors ${
                        isActive
                          ? 'text-primary font-bold'
                          : 'text-slate-600 group-hover:text-slate-900'
                      }`}
                    >
                      {step.shortLabel}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium mt-0.5">
                      {step.duration}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile Quick Selector Tabs (< 768px) */}
          <div className="md:hidden flex items-center gap-1.5 p-1 bg-slate-100/90 rounded-xl mb-6 overflow-x-auto no-scrollbar">
            {WORKFLOW_STEPS.map((step) => {
              const isActive = activeStep === step.step;
              return (
                <button
                  key={step.step}
                  type="button"
                  onClick={() => setActiveStep(step.step)}
                  className={`flex-1 py-2 px-2.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap text-center ${
                    isActive
                      ? 'bg-white text-primary shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  aria-current={isActive ? 'step' : undefined}
                >
                  0{step.step}. {step.shortLabel}
                </button>
              );
            })}
          </div>

          {/* 3. 4 Proportional Pipeline Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {WORKFLOW_STEPS.map((step) => {
              const isActive = activeStep === step.step;

              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStep(step.step)}
                  className={`cursor-pointer rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 relative border ${
                    isActive
                      ? 'bg-blue-50/40 border-primary shadow-elevated ring-2 ring-primary/20 -translate-y-1'
                      : 'bg-white border-slate-200/80 hover:border-slate-300 hover:shadow-card hover:-translate-y-0.5'
                  }`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveStep(step.step);
                    }
                  }}
                  aria-pressed={isActive}
                >
                  {/* Top Bar: Icon, Step Number, and Highlight Badge */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors shadow-sm ${
                            isActive
                              ? 'bg-primary text-white'
                              : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {getStepIcon(step.icon, isActive)}
                        </div>
                        <span className="font-heading text-xs font-bold text-slate-400">
                          Tahap 0{step.step}
                        </span>
                      </div>

                      <span
                        className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider transition-colors ${
                          isActive
                            ? 'bg-primary text-white'
                            : 'bg-slate-100 text-slate-600 border border-slate-200/60'
                        }`}
                      >
                        {step.cost}
                      </span>
                    </div>

                    {/* Step Title & Description */}
                    <h3 className="font-heading text-[15px] sm:text-base font-extrabold text-slate-900 mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="font-sans text-[12px] sm:text-[13px] text-slate-500 leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* Duration Chip */}
                    <div className="inline-flex items-center gap-1.5 bg-slate-100/90 text-slate-700 text-[11px] font-semibold px-2.5 py-1 rounded-lg mb-4">
                      <Clock className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{step.duration}</span>
                    </div>

                    {/* Deliverables Micro-Checklist */}
                    <div className="pt-3 border-t border-slate-100 space-y-2">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Deliverables Tahap Ini:
                      </div>
                      {step.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span className="text-[11px] sm:text-[12px] text-slate-600 leading-tight">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Indicator */}
                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span
                      className={`text-[11px] font-bold transition-colors ${
                        isActive ? 'text-primary' : 'text-slate-400'
                      }`}
                    >
                      {isActive ? 'Sedang Dipilih' : 'Klik untuk Rincian'}
                    </span>
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                        isActive
                          ? 'bg-primary text-white scale-110'
                          : 'bg-slate-100 text-slate-400'
                      }`}
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 4. Active Stage Spotlight & Contextual Quick-Action Dock */}
          <div className="mt-6 pt-6 border-t border-slate-200/80">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-900 rounded-2xl p-5 sm:p-7 text-white flex flex-col lg:flex-row items-center justify-between gap-6"
              >
                {/* Left: Active Stage Overview */}
                <div className="space-y-2 text-center lg:text-left max-w-2xl">
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                    <span className="inline-flex items-center gap-1.5 bg-primary px-3 py-1 rounded-full text-xs font-bold text-white tracking-wide">
                      Tahap 0{currentStepData.step} dari 04
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full text-xs font-medium text-slate-300">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{currentStepData.highlight}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 bg-white/10 px-2.5 py-1 rounded-full text-xs font-medium text-slate-300">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span>{currentStepData.duration}</span>
                    </span>
                  </div>

                  <h4 className="font-heading text-lg sm:text-xl font-extrabold text-white tracking-tight">
                    {currentStepData.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {currentStepData.description}
                  </p>
                </div>

                {/* Right: Stage Stepper Buttons & Contextual WhatsApp Action */}
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
                  <div className="flex items-center gap-2 w-full sm:w-auto justify-center">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="p-3 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/40"
                      aria-label="Tahap Sebelumnya"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-xs font-mono text-slate-400 font-bold px-1">
                      {activeStep} / 4
                    </span>
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="p-3 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/40"
                      aria-label="Tahap Berikutnya"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  <a
                    href={generateWhatsAppUrl({
                      source: currentStepData.actionCta.source,
                      customMessage: currentStepData.actionCta.customMessage,
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto btn-whatsapp px-6 py-3.5 rounded-xl text-xs sm:text-sm shadow-lg shadow-emerald-500/20 whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                    <span>{currentStepData.actionCta.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
