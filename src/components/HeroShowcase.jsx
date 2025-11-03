import React from 'react';
import { motion } from 'framer-motion';

function SpectaclesSVG({ className = '' }) {
  // Minimalist glasses outline to serve as the 3D object proxy
  return (
    <svg viewBox="0 0 600 220" className={className} fill="none">
      <defs>
        <linearGradient id="metal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E5E7EB" />
          <stop offset="50%" stopColor="#C7C9CC" />
          <stop offset="100%" stopColor="#F3F4F6" />
        </linearGradient>
        <radialGradient id="glass" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.65)" />
          <stop offset="60%" stopColor="rgba(255,255,255,0.15)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
        </radialGradient>
      </defs>
      {/* frames */}
      <path d="M120 110c0-35 30-60 70-60s70 25 70 60-30 60-70 60-70-25-70-60Z" stroke="url(#metal)" strokeWidth="10" />
      <path d="M340 110c0-35 30-60 70-60s70 25 70 60-30 60-70 60-70-25-70-60Z" stroke="url(#metal)" strokeWidth="10" />
      {/* bridge */}
      <path d="M260 110c6-10 14-15 20-15s14 5 20 15" stroke="url(#metal)" strokeWidth="10" strokeLinecap="round" />
      {/* temples */}
      <path d="M60 102c-18-8-32-8-40 8" stroke="url(#metal)" strokeWidth="8" strokeLinecap="round" />
      <path d="M540 102c18-8 32-8 40 8" stroke="url(#metal)" strokeWidth="8" strokeLinecap="round" />
      {/* glass fill */}
      <ellipse cx="190" cy="110" rx="60" ry="50" fill="url(#glass)" />
      <ellipse cx="410" cy="110" rx="60" ry="50" fill="url(#glass)" />
    </svg>
  );
}

export default function HeroShowcase() {
  return (
    <section className="relative pt-36 pb-24 sm:pb-32">
      {/* Headline & Copy */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-slate-900/90" style={{ fontFamily: 'serif' }}>
          Precision Vision, Crafted in Glass & Light
        </h1>
        <p className="mt-6 text-base sm:text-lg text-slate-700/80 max-w-2xl mx-auto" style={{ fontFamily: 'Manrope, system-ui, sans-serif' }}>
          Premium spectacles and sunglasses engineered with luxurious materials,
          refined silhouettes, and modern optics.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#styles"
            className="relative inline-flex items-center justify-center px-7 py-3 rounded-full text-sm font-medium tracking-wide text-slate-900 bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_10px_40px_rgba(206,173,124,0.25)] hover:shadow-[0_12px_50px_rgba(206,173,124,0.38)] transition-shadow"
          >
            <span className="relative z-10">Discover Your Look</span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-white/30 via-[#f5e9d3]/60 to-white/30 blur-[6px] opacity-80" />
          </a>
        </div>
      </div>

      {/* 3D Stage */}
      <div className="relative z-10 mt-16 max-w-5xl mx-auto px-6">
        <div className="relative h-[360px] sm:h-[420px] md:h-[460px] rounded-3xl border border-white/30 bg-white/10 backdrop-blur-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_30px_80px_rgba(0,0,0,0.08)] overflow-hidden">
          {/* frosted floor */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-white/20 backdrop-blur-3xl border-t border-white/30" />

          {/* reflections */}
          <div className="absolute -top-20 right-10 w-72 h-72 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.7),rgba(255,255,255,0))] blur-3xl opacity-50" />

          {/* subtle shadow under object */}
          <div className="absolute bottom-14 left-1/2 -translate-x-1/2 w-[60%] h-24 bg-[radial-gradient(closest-side,rgba(0,0,0,0.18),rgba(0,0,0,0))] blur-xl opacity-50" />

          {/* animated spectacles mock 3D */}
          <motion.div
            initial={{ rotateY: -15, rotateX: 8, y: 10 }}
            animate={{ rotateY: 15, rotateX: 8, y: 0 }}
            transition={{ repeat: Infinity, repeatType: 'reverse', duration: 6, ease: 'easeInOut' }}
            style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="relative">
              <SpectaclesSVG className="w-[520px] max-w-[85vw] text-slate-700" />
              {/* glossy specular highlight */}
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.0)_30%,rgba(255,255,255,0.55)_50%,rgba(255,255,255,0.0)_70%)] mix-blend-screen" />
            </div>
          </motion.div>

          {/* lens flare edge */}
          <div className="pointer-events-none absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white/60 to-transparent opacity-70" />
        </div>
      </div>
    </section>
  );
}
