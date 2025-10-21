export const metadata = { title: 'Веб-разработка' };

import Link from 'next/link';

export default function WebDevService() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Веб-разработка</h1>
      <p className="mt-2 text-slate-600">Быстрые сайты на Next.js с системой дизайна, CMS, аналитикой и интеграциями.</p>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <section className="rounded-[2rem] bg-white/70 p-6 ring-1 ring-black/5">
          <h2 className="text-xl font-medium">Что входит</h2>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
            <li>Анализ и информационная архитектура</li>
            <li>Система дизайна и компоненты</li>
            <li>Next.js приложение с CMS</li>
            <li>SEO и оптимизация производительности</li>
            <li>Интеграции и аналитика</li>
          </ul>
        </section>
        <section className="rounded-[2rem] bg-white/70 p-6 ring-1 ring-black/5">
          <h2 className="text-xl font-medium">Процесс работы</h2>
          <ol className="mt-2 list-decimal pl-5 text-sm text-slate-700">
            <li>Анализ</li>
            <li>Дизайн</li>
            <li>Разработка</li>
            <li>Тестирование и запуск</li>
          </ol>
        </section>
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-[2rem] bg-white/70 p-6 ring-1 ring-black/5">
          <div className="text-lg font-medium">Сроки</div>
          <div className="text-sm text-slate-700">3–8 недель в зависимости от объема</div>
        </div>
        <div className="rounded-[2rem] bg-white/70 p-6 ring-1 ring-black/5">
          <div className="text-lg font-medium">Стоимость</div>
          <div className="text-sm text-slate-700">От 150 000 ₽</div>
        </div>
      </div>
      <div className="mt-8">
        <Link href="/contact" className="rounded-full bg-paleTeal px-5 py-3 text-slate-900">Обсудить проект</Link>
      </div>
    </div>
  );
}








