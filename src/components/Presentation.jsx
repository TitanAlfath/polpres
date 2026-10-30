import React, { useState, useEffect, useCallback } from 'react';
import Slide from './Slide';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from 'lucide-react';

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 10;
  const [isFullscreen, setIsFullscreen] = useState(false);

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  }, [totalSlides]);

  const goToPrev = useCallback(() => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      switch (e.key) {
        case 'ArrowRight':
        case 'PageDown':
        case ' ': // Spacebar
          e.preventDefault();
          goToNext();
          break;
        case 'ArrowLeft':
        case 'PageUp':
        case 'Backspace':
          e.preventDefault();
          goToPrev();
          break;
        case 'Home':
          e.preventDefault();
          setCurrentSlide(0);
          break;
        case 'End':
          e.preventDefault();
          setCurrentSlide(totalSlides - 1);
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev, totalSlides]);

  // Fullscreen Handler
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  return (
    <div className="relative w-screen h-screen bg-[#0E060A] flex items-center justify-center overflow-hidden select-none">
      {/* 16:9 Presentation Slide Canvas */}
      <div className="relative w-full max-w-[1600px] aspect-video max-h-screen bg-white shadow-2xl overflow-hidden flex flex-col">
        <Slide
          currentSlide={currentSlide}
          onNext={goToNext}
          onPrev={goToPrev}
          totalSlides={totalSlides}
        />
      </div>

      {/* Minimal Floating Navigation Arrows (Subtle & Non-Intrusive) */}
      <div className="fixed bottom-6 right-8 flex items-center gap-3 z-50 no-print">
        {/* Slide Counter Badge */}
        <div className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white font-mono text-xs font-semibold">
          <span>{String(currentSlide + 1).padStart(2, '0')}</span>
          <span className="text-white/40 mx-1">/</span>
          <span className="text-white/60">{String(totalSlides).padStart(2, '0')}</span>
        </div>

        {/* Previous Button */}
        <button
          onClick={goToPrev}
          disabled={currentSlide === 0}
          title="Slide Sebelumnya (Panah Kiri)"
          className="w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white transition-all disabled:opacity-20 disabled:cursor-not-allowed hover:scale-105 active:scale-95 shadow-lg"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Next Button */}
        <button
          onClick={goToNext}
          disabled={currentSlide === totalSlides - 1}
          title="Slide Selanjutnya (Panah Kanan / Space)"
          className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FFA057] to-[#FF5A36] hover:from-[#FFA96B] hover:to-[#FF6B47] flex items-center justify-center text-white transition-all disabled:opacity-20 disabled:cursor-not-allowed hover:scale-105 active:scale-95 shadow-lg"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Fullscreen Toggle */}
        <button
          onClick={toggleFullscreen}
          title="Layar Penuh (F)"
          className="w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 hover:text-white transition-all hover:scale-105 active:scale-95 shadow-lg"
        >
          {isFullscreen ? (
            <Minimize2 className="w-4 h-4" />
          ) : (
            <Maximize2 className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );
}
