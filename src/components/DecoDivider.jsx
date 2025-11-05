import React from 'react';

export default function DecoDivider({ className = '' }) {
  return (
    <div className={`relative mx-auto my-8 h-10 w-full max-w-3xl ${className}`}>
      {/* Lines */}
      <div className="absolute inset-0 flex items-center">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
      </div>
      {/* Centerpiece */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative grid place-items-center rounded-sm border border-amber-400/70 bg-gradient-to-b from-amber-200/30 to-amber-300/20 px-3 py-1 text-amber-900 shadow-[0_0_0_2px_rgba(0,0,0,0.35)_inset,0_4px_14px_rgba(0,0,0,0.2)]">
          <span className="text-sm tracking-[0.3em] font-semibold">◆ ◆ ◆</span>
        </div>
      </div>
    </div>
  );
}
