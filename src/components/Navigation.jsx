import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  LayoutGrid, 
  HelpCircle,
  X,
  FileDown
} from 'lucide-react';
import FullscreenButton from './FullscreenButton';

export default function Navigation({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onSelectSlide,
  onExportPdf,
  isExportingPdf,
  slides
}) {
  const [showDrawer, setShowDrawer] = useState(false);
  const [showShortcuts, setShowShortcuts] = useState(false);

  return (
    <>
      {/* Bottom Minimalist Navigation Bar */}
      <footer className="w-full flex items-center justify-between px-4 sm:px-8 py-3 bg-[#080C15] border-t border-slate-800 z-40 select-none no-print">
        {/* Left: Brand & Slide Indicator */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="font-display font-semibold text-sm tracking-tight text-slate-200 hidden sm:inline">
              POLA PIKIR PRESTATIF <span className="text-cyan-400 font-mono text-xs ml-1">TI</span>
            </span>
          </div>

          <div className="h-4 w-[1px] bg-slate-800 hidden sm:block" />

          {/* Current / Total Slide Badge */}
          <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1">
            <span className="font-mono text-xs font-bold text-cyan-400">
              {String(currentSlide + 1).padStart(2, '0')}
            </span>
            <span className="font-mono text-xs text-slate-500">/</span>
            <span className="font-mono text-xs text-slate-400">
              {String(totalSlides).padStart(2, '0')}
            </span>
          </div>

          {/* Slide Title */}
          <div className="hidden lg:block text-xs text-slate-400 truncate max-w-xs xl:max-w-md">
            {slides[currentSlide]?.title}
          </div>
        </div>

        {/* Center: Previous / Next Primary Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onPrev}
            disabled={currentSlide === 0}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              currentSlide === 0
                ? 'opacity-30 cursor-not-allowed bg-slate-900 border border-slate-800 text-slate-500'
                : 'bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200'
            }`}
            title="Slide Sebelumnya (Panah Kiri)"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Sebelumnya</span>
          </button>

          {/* Slide Overview / Grid Trigger */}
          <button
            onClick={() => setShowDrawer(!showDrawer)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors ${
              showDrawer
                ? 'bg-slate-800 border-cyan-400 text-cyan-300'
                : 'bg-slate-900 hover:bg-slate-800 border-slate-800 text-slate-300'
            }`}
            title="Daftar Semua Slide"
          >
            <LayoutGrid className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden md:inline">Semua Slide</span>
          </button>

          <button
            onClick={onNext}
            disabled={currentSlide === totalSlides - 1}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              currentSlide === totalSlides - 1
                ? 'opacity-30 cursor-not-allowed bg-slate-900 border border-slate-800 text-slate-500'
                : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950'
            }`}
            title="Slide Berikutnya (Panah Kanan / Space)"
            aria-label="Next Slide"
          >
            <span>{currentSlide === totalSlides - 1 ? 'Selesai' : 'Selanjutnya'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right: Tools (PDF Export, Shortcuts, Fullscreen) */}
        <div className="flex items-center gap-2">
          {/* PDF Export Button */}
          <button
            onClick={onExportPdf}
            disabled={isExportingPdf}
            title="Ekspor Presentasi ke Format PDF"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-medium transition-colors disabled:opacity-50"
          >
            {isExportingPdf ? (
              <span className="w-3.5 h-3.5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
            ) : (
              <FileDown className="w-3.5 h-3.5 text-cyan-400" />
            )}
            <span className="hidden sm:inline">PDF</span>
          </button>

          {/* Keyboard Shortcuts Help */}
          <button
            onClick={() => setShowShortcuts(!showShortcuts)}
            title="Pintasan Keyboard"
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
          >
            <HelpCircle className="w-3.5 h-3.5" />
          </button>

          {/* Fullscreen Button */}
          <FullscreenButton />
        </div>
      </footer>

      {/* Slide Drawer / Modal Grid Overview */}
      {showDrawer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 sm:p-8 animate-fadeIn no-print">
          <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl flex flex-col max-h-[85vh]">
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div>
                <h3 className="text-base font-bold text-white">
                  Daftar 10 Slide
                </h3>
                <p className="text-xs text-slate-400">
                  Pilih slide untuk berpindah langsung
                </p>
              </div>
              <button
                onClick={() => setShowDrawer(false)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Grid of 10 Slides */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 overflow-y-auto py-4">
              {slides.map((slide, idx) => {
                const isActive = idx === currentSlide;
                return (
                  <button
                    key={slide.id}
                    onClick={() => {
                      onSelectSlide(idx);
                      setShowDrawer(false);
                    }}
                    className={`flex flex-col text-left p-3 rounded-xl border transition-colors ${
                      isActive
                        ? 'bg-slate-800 border-cyan-400 text-white'
                        : 'bg-slate-950/70 border-slate-800 hover:border-slate-700 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className={`font-mono text-xs font-bold ${isActive ? 'text-cyan-400' : 'text-slate-400'}`}>
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h4 className="text-xs font-semibold line-clamp-2 leading-tight">
                      {slide.title}
                    </h4>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Keyboard Shortcuts Modal */}
      {showShortcuts && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fadeIn no-print">
          <div className="w-full max-w-sm bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <h3 className="font-bold text-white text-sm">
                Pintasan Keyboard
              </h3>
              <button
                onClick={() => setShowShortcuts(false)}
                className="p-1 rounded-lg hover:bg-slate-800 text-slate-400"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between py-1.5 px-2 rounded bg-slate-950 border border-slate-800">
                <span className="text-slate-300">Slide Berikutnya</span>
                <span className="font-mono text-cyan-400">Right Arrow / Space</span>
              </div>

              <div className="flex items-center justify-between py-1.5 px-2 rounded bg-slate-950 border border-slate-800">
                <span className="text-slate-300">Slide Sebelumnya</span>
                <span className="font-mono text-cyan-400">Left Arrow</span>
              </div>

              <div className="flex items-center justify-between py-1.5 px-2 rounded bg-slate-950 border border-slate-800">
                <span className="text-slate-300">Layar Penuh</span>
                <span className="font-mono text-cyan-400">F</span>
              </div>

              <div className="flex items-center justify-between py-1.5 px-2 rounded bg-slate-950 border border-slate-800">
                <span className="text-slate-300">Semua Slide</span>
                <span className="font-mono text-cyan-400">O</span>
              </div>

              <div className="flex items-center justify-between py-1.5 px-2 rounded bg-slate-950 border border-slate-800">
                <span className="text-slate-300">Ekspor PDF</span>
                <span className="font-mono text-cyan-400">P</span>
              </div>
            </div>

            <button
              onClick={() => setShowShortcuts(false)}
              className="w-full py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </>
  );
}
