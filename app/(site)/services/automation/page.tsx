export const metadata = { title: 'Автоматизация' };

import Link from 'next/link';

export default function AutomationService() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Автоматизация</h1>
      <p className="mt-2 text-slate-600">Настройка CRM, интеграции, боты и email-рассылки для масштабирования бизнеса.</p>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <section className="rounded-[2rem] bg-white/70 p-6 ring-1 ring-black/5">
          <h2 className="text-xl font-medium">Что входит</h2>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
            <li>Подбор и настройка CRM</li>
            <li>API интеграции</li>
            <li>Чат-боты и автоматизации</li>
            <li>Email-цепочки</li>
            <li>Дашборды</li>
          </ul>
        </section>
        <section className="rounded-[2rem] bg-white/70 p-6 ring-1 ring-black/5">
          <h2 className="text-xl font-medium">Процесс работы</h2>
          <ol className="mt-2 list-decimal pl-5 text-sm text-slate-700">
            <li>Анализ и планирование</li>
            <li>Внедрение</li>
            <li>Обучение и доработка</li>
          </ol>
        </section>
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-[2rem] bg-white/70 p-6 ring-1 ring-black/5">
          <div className="text-lg font-medium">Сроки</div>
          <div className="text-sm text-slate-700">2–6 недель</div>
        </div>
        <div className="rounded-[2rem] bg-white/70 p-6 ring-1 ring-black/5">
          <div className="text-lg font-medium">Стоимость</div>
          <div className="text-sm text-slate-700">От 100 000 ₽</div>
        </div>
      </div>
      <div className="mt-8">
        <Link href="/contact" className="rounded-full bg-paleTeal px-5 py-3 text-slate-900">Обсудить проект</Link>
      </div>
    </div>
  );
}








