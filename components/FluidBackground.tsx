"use client";

import { useEffect, useRef } from 'react';

export function FluidBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrame = 0;
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    const resize = () => {
      const { innerWidth, innerHeight } = window;
      canvas.width = innerWidth * dpr;
      canvas.height = innerHeight * dpr;
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener('resize', resize);

    let t = 0;
    const render = () => {
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      const g = ctx.createLinearGradient(0, 0, w, h);
      g.addColorStop(0, '#ffffff');
      g.addColorStop(1, '#E6E6FA');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      // subtle fluid waves
      const waves = 5;
      for (let i = 0; i < waves; i++) {
        const alpha = 0.08 + i * 0.02;
        ctx.fillStyle = `rgba(168, 180, 194, ${alpha})`;
        ctx.beginPath();
        const yBase = (h / waves) * i + (Math.sin(t + i) * 10 + 10);
        ctx.moveTo(0, yBase);
        for (let x = 0; x <= w; x += 8) {
          const y = yBase + Math.sin((x + t * 30 + i * 50) / 140) * 18;
          ctx.lineTo(x, y);
        }
        ctx.lineTo(w, h);
        ctx.lineTo(0, h);
        ctx.closePath();
        ctx.fill();
      }

      t += 0.0035;
      animationFrame = requestAnimationFrame(render);
    };
    animationFrame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="fixed inset-0 -z-10"
    />
  );
}












