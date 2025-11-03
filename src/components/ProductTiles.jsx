import React, { useRef } from 'react';
import { motion } from 'framer-motion';

function useTilt() {
  const ref = useRef(null);
  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width; // 0..1
    const y = (e.clientY - rect.top) / rect.height;
    const rX = (0.5 - y) * 10; // rotateX
    const rY = (x - 0.5) * 12; // rotateY
    el.style.setProperty('--rx', `${rX}deg`);
    el.style.setProperty('--ry', `${rY}deg`);
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--rx', `0deg`);
    el.style.setProperty('--ry', `0deg`);
  };
  return { ref, onMouseMove, onLeave };
}

const items = [
  {
    name: 'Astra Oval',
    desc: 'Featherlight titanium in champagne finish',
    img: 'https://images.unsplash.com/photo-1547626740-bbab4a51dcb8?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Vector Square',
    desc: 'Sculpted acetate with satin silver bridge',
    img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Nimbus Round',
    desc: 'Polished steel, anti-glare crystal lenses',
    img: 'https://images.unsplash.com/photo-1520975682031-ae5b6e3f5511?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Solace Sun',
    desc: 'Gradient lenses with UV+ polarization',
    img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function ProductTiles() {
  return (
    <section id="styles" className="relative z-10 py-12 sm:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-4 mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900/90" style={{ fontFamily: 'serif' }}>
            Signature Frames
          </h2>
          <a href="#shop" className="text-sm text-slate-700/80 hover:text-slate-900/90">View all →</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, idx) => (
            <Tile key={idx} item={it} />)
          )}
        </div>
      </div>
    </section>
  );
}

function Tile({ item }) {
  const { ref, onMouseMove, onLeave } = useTilt();
  return (
    <motion.article
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onLeave}
      whileHover={{ y: -4 }}
      className="group relative h-[320px] rounded-2xl overflow-hidden border border-white/30 bg-white/20 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
      style={{ transform: 'perspective(900px) rotateX(var(--rx,0)) rotateY(var(--ry,0))' }}
    >
      <div className="absolute inset-0">
        <img src={item.img} alt={item.name} className="w-full h-full object-cover object-center opacity-[0.92]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f2e6cf]/80 via-transparent to-transparent" />
        {/* light sweep */}
        <div className="absolute -inset-1 opacity-0 group-hover:opacity-70 transition-opacity duration-500 bg-[linear-gradient(120deg,rgba(255,255,255,0.0)_20%,rgba(255,255,255,0.6)_50%,rgba(255,255,255,0.0)_80%)]" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-lg font-semibold text-slate-900/90" style={{ fontFamily: 'serif' }}>{item.name}</h3>
        <p className="text-sm text-slate-700/80" style={{ fontFamily: 'Manrope, system-ui, sans-serif' }}>{item.desc}</p>
      </div>
    </motion.article>
  );
}
