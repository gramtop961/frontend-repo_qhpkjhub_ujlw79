import React from 'react';
import GlassNav from './components/GlassNav.jsx';
import ParallaxBackground from './components/ParallaxBackground.jsx';
import HeroShowcase from './components/HeroShowcase.jsx';
import ProductTiles from './components/ProductTiles.jsx';

export default function App() {
  return (
    <div className="relative min-h-screen antialiased text-slate-900 selection:bg-amber-200/60 selection:text-slate-900">
      {/* atmospheric background layers with particles, flares, gradients */}
      <ParallaxBackground />

      {/* floating glass nav */}
      <GlassNav />

      {/* content */}
      <main className="relative z-10">
        <HeroShowcase />
        <ProductTiles />

        {/* CTA footer section */}
        <section id="about" className="relative z-10 py-20">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-white/30 bg-white/30 backdrop-blur-xl">
              <div className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_24px_6px_rgba(250,204,21,0.55)]" />
              <p className="text-sm text-slate-800/80" style={{ fontFamily: 'Manrope, system-ui, sans-serif' }}>
                Experience lifelike clarity with anti-glare, UV+ polarization and precision-fit frames.
              </p>
            </div>
            <div className="mt-10">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 rounded-full text-sm font-medium tracking-wide border border-white/40 bg-white/60 hover:bg-white/75 backdrop-blur-xl transition-colors shadow-[0_12px_40px_rgba(206,173,124,0.28)]">
                Book a Studio Visit
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* footer */}
      <footer id="contact" className="relative z-10 pb-14 text-center text-xs text-slate-600/80">
        © {new Date().getFullYear()} Aurion Eyewear. All rights reserved.
      </footer>
    </div>
  );
}
