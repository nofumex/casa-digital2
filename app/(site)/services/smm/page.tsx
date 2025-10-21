export const metadata = { title: 'SMM и контент' };

import Link from 'next/link';

export default function SmmService() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-semibold">SMM и контент</h1>
      <p className="mt-2 text-slate-600">Стратегия, производство контента и развитие в социальных сетях.</p>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <section className="rounded-[2rem] bg-white/70 p-6 ring-1 ring-black/5">
          <h2 className="text-xl font-medium">Что входит</h2>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
            <li>Аудит и стратегия</li>
            <li>Контент-план и производство</li>
            <li>Публикация и комьюнити-менеджмент</li>
            <li>Эксперименты по росту</li>
            <li>Отчетность</li>
          </ul>
        </section>
        <section className="rounded-[2rem] bg-white/70 p-6 ring-1 ring-black/5">
          <h2 className="text-xl font-medium">Процесс работы</h2>
          <ol className="mt-2 list-decimal pl-5 text-sm text-slate-700">
            <li>Анализ</li>
            <li>Пилотный месяц</li>
            <li>Масштабирование и оптимизация</li>
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
          <div className="text-sm text-slate-700">От 50 000 ₽/мес</div>
        </div>
      </div>
      <div className="mt-8">
        <Link href="/contact" className="rounded-full bg-paleTeal px-5 py-3 text-slate-900">Обсудить проект</Link>
      </div>
    </div>
  );
}








