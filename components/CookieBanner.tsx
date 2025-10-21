"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const v = localStorage.getItem('cookie-consent');
      if (!v) setOpen(true);
    } catch {}
  }, []);

  const updateConsent = (granted: boolean) => {
    try {
      localStorage.setItem('cookie-consent', granted ? 'accepted' : 'declined');
    } catch {}
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: granted ? 'granted' : 'denied',
        ad_storage: granted ? 'granted' : 'denied'
      });
    }
    setOpen(false);
  };

  if (!open) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 px-4 pb-6">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white/90 p-4 shadow-xl ring-1 ring-black/5">
        <div className="items-start gap-4 md:flex">
          <p className="text-sm text-slate-700">
            Мы используем файлы cookie для улучшения вашего опыта. См. нашу <Link className="underline" href="/privacy">Политику конфиденциальности</Link>.
          </p>
          <div className="mt-3 flex gap-2 md:ml-auto md:mt-0">
            <button onClick={() => updateConsent(false)} className="rounded-full border border-slate-300 px-4 py-2 text-sm">Отклонить</button>
            <button onClick={() => updateConsent(true)} className="rounded-full bg-paleTeal px-4 py-2 text-sm text-slate-900">Принять всё</button>
          </div>
        </div>
      </div>
    </div>
  );
}








