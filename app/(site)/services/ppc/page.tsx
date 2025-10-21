export const metadata = { title: 'Контекстная реклама' };

import Link from 'next/link';

export default function PpcService() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Контекстная реклама</h1>
      <p className="mt-2 text-slate-600">Реклама в Яндекс Директ и Google Ads с точным отслеживанием и системной оптимизацией.</p>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <section className="rounded-[2rem] bg-white/70 p-6 ring-1 ring-black/5">
          <h2 className="text-xl font-medium">Что входит</h2>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
            <li>Настройка аккаунта и отслеживания</li>
            <li>Структура кампаний и креативы</li>
            <li>Отслеживание конверсий и атрибуция</li>
            <li>Еженедельная оптимизация</li>
            <li>Отчетность</li>
          </ul>
        </section>
        <section className="rounded-[2rem] bg-white/70 p-6 ring-1 ring-black/5">
          <h2 className="text-xl font-medium">Процесс работы</h2>
          <ol className="mt-2 list-decimal pl-5 text-sm text-slate-700">
            <li>Аудит и настройка</li>
            <li>Тестирование и масштабирование</li>
            <li>Оптимизация ROI</li>
          </ol>
        </section>
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-[2rem] bg-white/70 p-6 ring-1 ring-black/5">
          <div className="text-lg font-medium">Сроки</div>
          <div className="text-sm text-slate-700">Ежемесячное обслуживание</div>
        </div>
        <div className="rounded-[2rem] bg-white/70 p-6 ring-1 ring-black/5">
          <div className="text-lg font-medium">Стоимость</div>
          <div className="text-sm text-slate-700">От 45 000 ₽/мес</div>
        </div>
      </div>
      <div className="mt-8">
        <Link href="/contact" className="rounded-full bg-paleTeal px-5 py-3 text-slate-900">Обсудить проект</Link>
      </div>
    </div>
  );
}








