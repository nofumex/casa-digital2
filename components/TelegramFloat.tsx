"use client";

import { useEffect, useState } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

export function TelegramFloat() {
  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(height > 0 && scrollTop / height > 0.2);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

    const openTelegram = (e: React.MouseEvent) => {
    e.preventDefault();
    const tgDeep = 'tg://resolve?domain=CasaAgency_bot&start=website';
    const web = 'https://t.me/CasaAgency_bot?start=website';
    let opened = false;
    try {
      const a = document.createElement('a');
      a.href = tgDeep;
      a.click();
      opened = true;
    } catch {}
    setTimeout(() => {
      if (!opened) window.open(web, '_blank', 'noopener');
    }, 1000);
  };

  if (!visible) return null;
  return (
    <button
      onClick={openTelegram}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="fixed bottom-6 right-6 z-20 inline-flex items-center gap-2 rounded-full bg-paleTeal px-4 py-3 text-slate-900 shadow-lg transition hover:scale-105"
      aria-label="Message on Telegram"
    >
      <PaperAirplaneIcon className="h-5 w-5" />
      <span className="hidden sm:inline">Telegram</span>
      {hover && (
        <span className="absolute -top-9 right-0 whitespace-nowrap rounded-full bg-slate-900 px-2 py-1 text-xs text-white shadow">
          Open Telegram
        </span>
      )}
    </button>
  );
}







