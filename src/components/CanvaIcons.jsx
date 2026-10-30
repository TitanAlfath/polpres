import React from 'react';

// The 8-Petal Sunburst/Flower Emblem from Canva
export function AsteriskIcon({ className = "w-6 h-6", color = "currentColor" }) {
  return (
    <svg viewBox="0 0 100 100" fill={color} className={className}>
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <rect
          key={i}
          x="43"
          y="6"
          width="14"
          height="26"
          rx="7"
          transform={`rotate(${angle} 50 50)`}
        />
      ))}
    </svg>
  );
}

// Giant 2026 Typography Watermark with Asterisk inside the 0
export function Watermark2026({ className = "" }) {
  return (
    <div className={`select-none pointer-events-none font-display font-black leading-none ${className}`}>
      <div className="flex items-center">
        <span>2</span>
        <div className="relative inline-flex items-center justify-center">
          <span>0</span>
          <div className="absolute inset-0 flex items-center justify-center">
            <AsteriskIcon className="w-[30%] h-[30%]" color="currentColor" />
          </div>
        </div>
      </div>
      <div>
        <span>26</span>
      </div>
    </div>
  );
}

// Top Logo Badge: "✦ Titan Attaiq Alfatah | Teknik Informatika"
export function BrandHeader({ title = "Titan Attaiq Alfatah | Teknik Informatika", className = "" }) {
  return (
    <div className={`flex items-center gap-2 text-xs font-semibold tracking-wider ${className}`}>
      <AsteriskIcon className="w-3.5 h-3.5" color="currentColor" />
      <span>{title}</span>
    </div>
  );
}

