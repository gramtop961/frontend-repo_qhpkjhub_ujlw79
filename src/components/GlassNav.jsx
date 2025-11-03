import React from 'react';

const links = [
  { label: 'Shop', href: '#shop' },
  { label: 'About', href: '#about' },
  { label: 'Styles', href: '#styles' },
  { label: 'Try-On', href: '#tryon' },
  { label: 'Contact', href: '#contact' },
];

export default function GlassNav() {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-full px-6 sm:px-8 py-3 flex items-center gap-6 sm:gap-8">
        <div className="text-sm tracking-[0.2em] uppercase text-slate-700/80 dark:text-slate-100/80 font-semibold select-none">
          AURION EYEWEAR
        </div>
        <ul className="hidden md:flex items-center gap-6 text-sm text-slate-700/80 dark:text-slate-100/80">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="hover:text-slate-900/90 dark:hover:text-white/90 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
