"use client";

import { useEffect, useRef } from 'react';
import styles from './DynamicGradient.module.css';

type Props = { disable?: boolean };

export default function DynamicGradient({ disable = false }: Props) {
  const layerRef = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (disable) return;
    if (typeof window === 'undefined') return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const target = layerRef.current;
    if (!target) return;

    // Accessibility: if user prefers reduced motion, render static subtle gradient only
    if (prefersReduced) {
      target.style.setProperty('--gx', '50%');
      target.style.setProperty('--gy', '40%');
      target.style.setProperty('--gAngle', '0deg');
      target.style.setProperty('--gOpacity', '0.35');
      return;
    }

    let rafId = 0;
    let ticking = false;

    const onFrame = () => {
      ticking = false;
      const doc = document.documentElement;
      const max = (doc.scrollHeight - doc.clientHeight) || 1;
      const y = window.scrollY || window.pageYOffset || 0;
      const progress = Math.min(1, Math.max(0, y / max));

      const gx = 50 + Math.sin(progress * Math.PI * 2) * 20; // %
      const gy = 40 + Math.cos(progress * Math.PI * 2) * 15; // %
      const angle = progress * 360; // deg

      target.style.setProperty('--gx', gx.toFixed(2) + '%');
      target.style.setProperty('--gy', gy.toFixed(2) + '%');
      target.style.setProperty('--gAngle', angle.toFixed(2) + 'deg');

      if (process.env.NODE_ENV === 'development') {
        // Dev-only log for quick inspection, throttled by rAF frequency
        // eslint-disable-next-line no-console
        console.debug('[DynamicGradient] progress:', progress.toFixed(3));
      }
    };

    const requestTick = () => {
      if (!ticking) {
        ticking = true;
        rafId = window.requestAnimationFrame(onFrame);
      }
    };

    const onScroll = () => requestTick();
    const onResize = () => requestTick();

    // Section-aware palette switching using IntersectionObserver
    const palettes: Record<string, [string, string, string]> = {
      // brighter, but still soft enough not to fight text
      hero: ['rgba(120,190,255,1)', 'rgba(70,160,255,0.95)', 'rgba(255,255,255,0.98)'],            // vivid blue
      services: ['rgba(90,220,200,1)', 'rgba(40,200,170,0.95)', 'rgba(255,255,255,0.98)'],         // vivid teal
      process: ['rgba(160,150,255,1)', 'rgba(130,120,255,0.95)', 'rgba(255,255,255,0.98)'],        // vivid violet
      portfolio: ['rgba(255,190,140,1)', 'rgba(255,160,100,0.95)', 'rgba(255,255,255,0.98)'],      // vivid peach
      clients: ['rgba(140,230,160,1)', 'rgba(100,210,130,0.95)', 'rgba(255,255,255,0.98)'],        // vivid mint
      testimonials: ['rgba(255,170,200,1)', 'rgba(255,140,180,0.95)', 'rgba(255,255,255,0.98)'],   // vivid pink
      cta: ['rgba(150,200,255,1)', 'rgba(110,170,255,0.95)', 'rgba(255,255,255,0.98)']             // vivid blue-gray
    };

    const updatePalette = (key: string) => {
      const p = palettes[key];
      if (!p) return;
      target.style.setProperty('--c1', p[0]);
      target.style.setProperty('--c2', p[1]);
      target.style.setProperty('--c3', p[2]);
    };

    const io = new IntersectionObserver((entries) => {
      // pick the most visible section
      let top: IntersectionObserverEntry | null = null;
      for (const e of entries) {
        if (!top || e.intersectionRatio > top.intersectionRatio) top = e;
      }
      if (!top || !top.isIntersecting) return;
      const key = (top.target as HTMLElement).dataset.gradientKey || '';
      if (key) updatePalette(key);
    }, { root: null, rootMargin: '0px', threshold: [0.3, 0.5, 0.75] });
    observerRef.current = io;

    const nodes = document.querySelectorAll<HTMLElement>('[data-gradient-key]');
    nodes.forEach((n) => io.observe(n));

    // Set initial palette based on the most visible section at load
    const pickInitial = () => {
      let bestKey = '';
      let bestArea = -1;
      const vh = window.innerHeight;
      const vw = window.innerWidth;
      nodes.forEach((n) => {
        const r = n.getBoundingClientRect();
        const ix = Math.max(0, Math.min(r.right, vw) - Math.max(r.left, 0));
        const iy = Math.max(0, Math.min(r.bottom, vh) - Math.max(r.top, 0));
        const area = ix * iy;
        if (area > bestArea) {
          bestArea = area;
          bestKey = n.dataset.gradientKey || '';
        }
      });
      if (bestKey) updatePalette(bestKey);
    };
    pickInitial();

    // Prime once
    requestTick();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [disable]);

  return (
    <div className={styles.container} aria-hidden="true">
      <div ref={layerRef} className={styles.layer} />
    </div>
  );
}


