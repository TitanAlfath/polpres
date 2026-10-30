import React from 'react';

export default function ProgressBar({ currentSlide, totalSlides, onSelectSlide }) {
  const percentage = Math.round(((currentSlide + 1) / totalSlides) * 100);

  return (
    <div className="w-full flex flex-col gap-1.5 select-none no-print">
      {/* Top progress indicator & Segment markers */}
      <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-1">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span className="text-slate-400 uppercase text-[11px] tracking-wider">
            Kemajuan Presentasi
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-cyan-400 font-semibold">{percentage}%</span>
          <span className="text-slate-600">
            ({String(currentSlide + 1).padStart(2, '0')}/{String(totalSlides).padStart(2, '0')})
          </span>
        </div>
      </div>

      {/* Interactive segments bar */}
      <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden flex gap-1">
        {Array.from({ length: totalSlides }).map((_, index) => {
          const isPassed = index <= currentSlide;
          const isCurrent = index === currentSlide;

          return (
            <button
              key={index}
              onClick={() => onSelectSlide(index)}
              title={`Lompat ke Slide ${index + 1}`}
              className="flex-1 h-full rounded-full transition-colors cursor-pointer focus:outline-none"
            >
              <div
                className={`w-full h-full rounded-full transition-colors ${
                  isCurrent
                    ? 'bg-cyan-400'
                    : isPassed
                    ? 'bg-cyan-800'
                    : 'bg-slate-800'
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
