import React, { useState, useEffect } from 'react';
import { Maximize2, Minimize2 } from 'lucide-react';

export default function FullscreenButton({ className = "" }) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        }
      }
    } catch (err) {
      console.warn("Fullscreen request error:", err);
    }
  };

  return (
    <button
      onClick={toggleFullscreen}
      title={isFullscreen ? "Keluar Layar Penuh (F)" : "Mode Layar Penuh (F)"}
      className={`group relative flex items-center justify-center p-2.5 rounded-xl bg-navy-900/80 hover:bg-cyan-500/10 border border-slate-700/60 hover:border-cyan-400/50 text-slate-300 hover:text-cyan-300 transition-all duration-200 backdrop-blur-md shadow-lg ${className}`}
      aria-label="Toggle Fullscreen"
    >
      {isFullscreen ? (
        <Minimize2 className="w-4 h-4 transition-transform group-hover:scale-110" />
      ) : (
        <Maximize2 className="w-4 h-4 transition-transform group-hover:scale-110" />
      )}
      <span className="sr-only">Fullscreen</span>
    </button>
  );
}

