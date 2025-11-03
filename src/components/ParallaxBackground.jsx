import React, { useEffect, useRef } from 'react';

export default function ParallaxBackground() {
  const layerRef1 = useRef(null);
  const layerRef2 = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const onMouseMove = (e) => {
      const { innerWidth: w, innerHeight: h } = window;
      const x = (e.clientX / w - 0.5) * 2; // -1..1
      const y = (e.clientY / h - 0.5) * 2;
      if (layerRef1.current) {
        layerRef1.current.style.transform = `translate3d(${x * 12}px, ${y * 12}px, 0)`;
      }
      if (layerRef2.current) {
        layerRef2.current.style.transform = `translate3d(${x * -16}px, ${y * -16}px, 0)`;
      }
    };
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const particles = Array.from({ length: 120 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.6 + 0.4,
      a: Math.random() * Math.PI * 2,
      s: Math.random() * 0.3 + 0.1,
      o: Math.random() * 0.4 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      // soft gradient backdrop is in CSS; just draw particles and faint rays
      particles.forEach((p) => {
        p.a += 0.002 + p.s * 0.002;
        p.x += Math.cos(p.a) * p.s;
        p.y += Math.sin(p.a) * p.s * 0.5;
        if (p.x < -10) p.x = w + 10; if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10; if (p.y > h + 10) p.y = -10;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.o})`;
        ctx.fill();
      });
      requestAnimationFrame(draw);
    };

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    draw();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {/* gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_800px_at_10%_-10%,rgba(255,255,255,0.9),rgba(255,255,255,0)_50%),linear-gradient(180deg,#f6f3eb_0%,#f1e7d6_50%,#f3e8cf_100%)]" />

      {/* soft champagne glow layer */}
      <div ref={layerRef1} className="absolute -inset-40 rounded-[40%] bg-[radial-gradient(circle_at_70%_20%,rgba(255,215,170,0.35),rgba(255,215,170,0)_60%)]" />

      {/* silver sheen sweep */}
      <div ref={layerRef2} className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.0)_0%,rgba(255,255,255,0.5)_35%,rgba(255,255,255,0.0)_70%)] opacity-30" />

      {/* light rays + particles */}
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* lens flare highlights near top edges */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/40 to-transparent blur-2xl opacity-70" />
      <div className="absolute top-6 left-10 w-40 h-1/3 bg-[radial-gradient(closest-side,rgba(255,255,255,0.65),rgba(255,255,255,0))] blur-3xl opacity-70" />
    </div>
  );
}
