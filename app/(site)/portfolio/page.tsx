export const metadata = { 
  title: 'Наши проекты - Реальные результаты для клиентов',
  description: 'Посмотрите наше портфолио успешных проектов по веб-разработке, SMM и автоматизации с реальными результатами и кейсами.'
};

import Link from 'next/link';
import PortfolioClient from './PortfolioClientNew';

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      {/* Hero */}
      <div className="text-center">
        <h1 className="text-4xl font-semibold">Наши проекты</h1>
        <p className="mt-4 text-xl text-slate-600">Реальные результаты для наших клиентов</p>
      </div>

      {/* Client Component for Interactive Features */}
      <PortfolioClient />

      {/* CTA */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold">Хотите похожих результатов?</h2>
        <p className="mt-2 text-slate-600">Давайте обсудим ваш проект и посмотрим, как мы можем помочь достичь ваших целей</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="rounded-full bg-softBlueGray/30 px-6 py-3 hover:bg-softBlueGray/40 font-medium">Обсудить проект</Link>
          <a href="https://t.me/CasaAgency" target="_blank" rel="noreferrer" className="rounded-full border border-softBlueGray/50 px-6 py-3 hover:bg-white font-medium">Message on Telegram</a>
        </div>
      </div>
    </div>
  );
}







