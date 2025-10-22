export const metadata = { 
  title: 'О нас - Casa Digital',
  description: 'Узнайте больше о Casa Digital: наши ценности, подход и как мы помогаем бизнесу расти с помощью веб-разработки, SMM и автоматизации.'
};

import Link from 'next/link';

interface ValueItem {
  title: string;
  description: string;
}

interface ProcessStep {
  title: string;
  description: string;
}

export default async function AboutPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ''}/cms/about.json`, { cache: 'no-store' }).catch(()=>null);
  const aboutData = res && res.ok ? await res.json() : null as any;
  const fallbackValues: ValueItem[] = [
    { 
      title: 'Результат превыше всего', 
      description: 'Мы работаем до достижения ваших целей, а не просто до выполнения задач.' 
    },
    { 
      title: 'Прозрачность', 
      description: 'Ясность в процессах, сроках и возможных ограничениях.' 
    },
    { 
      title: 'Современные технологии', 
      description: 'Используем только проверенные современные инструменты.' 
    },
    { 
      title: 'Поддержка 24/7', 
      description: 'Всегда на связи для вопросов и текущей поддержки.' 
    }
  ];
  const values: ValueItem[] = aboutData?.values || fallbackValues;
  const steps: ProcessStep[] = aboutData?.process || [
    { 
      title: 'Знакомство', 
      description: 'Изучаем ваш бизнес, цели и задачи. Определяем стратегию развития.' 
    },
    { 
      title: 'Планирование', 
      description: 'Создаём техническое задание, дизайн-концепцию и план реализации.' 
    },
    { 
      title: 'Разработка', 
      description: 'Реализуем проект по этапам с регулярными отчётами о прогрессе.' 
    },
    { 
      title: 'Запуск', 
      description: 'Тестируем, оптимизируем и запускаем проект. Обеспечиваем поддержку.' 
    }
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      {/* Hero */}
      <div className="text-center">
        <h1 className="text-4xl font-semibold">О компании Casa Digital</h1>
        <p className="mt-4 text-xl text-slate-600">Создаем высококонверсионные сайты и автоматизируем рабочие процессы с 2021 года</p>
      </div>

      {/* Mission */}
      <section className="mt-12 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-slate-700 mb-4">
            "Мы помогаем малому и среднему бизнесу расти в цифровом мире. Мы создаем инструменты, которые действительно работают и приносят результаты."
          </p>
          <p className="text-lg text-slate-700">
            "Мы не просто создаем сайты — мы создаем цифровую экосистему для вашего бизнеса."
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="mt-12">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            { n: '50+', d: 'Выполненных проектов' },
            { n: '3+', d: 'Лет опыта' },
            { n: '95%', d: 'Довольных клиентов' },
            { n: '24/7', d: 'Поддержка' }
          ].map((s) => (
            <div key={s.n} className="rounded-[2rem] bg-white/70 p-6 ring-1 ring-black/5 text-center">
              <div className="text-3xl font-bold text-slate-800">{s.n}</div>
              <div className="text-sm text-slate-600">{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-center">Наши ценности</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-[2rem] bg-white/70 p-6 ring-1 ring-black/5">
              <div className="text-lg font-semibold">{v.title}</div>
              <div className="mt-2 text-sm text-slate-600">{v.description}</div>
            </div>
          ))}
        </div>
      </section>

      

      {/* Process */}
      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-center">Как мы работаем</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-[2rem] bg-white/70 p-6 ring-1 ring-black/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl font-bold text-paleTeal">{String(index + 1).padStart(2, '0')}</div>
                <div className="text-lg font-semibold">{step.title}</div>
              </div>
              <div className="text-sm text-slate-600">{step.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16 text-center">
        <h2 className="text-2xl font-semibold">Готовы начать работу?</h2>
        <p className="mt-2 text-slate-600">Давайте обсудим ваш проект и посмотрим, как мы можем помочь</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="rounded-full bg-paleTeal px-6 py-3 text-slate-900 font-medium">Начать проект</Link>
          <a href="https://t.me/CasaAgency" target="_blank" rel="noreferrer" className="rounded-full border border-softBlueGray/50 px-6 py-3 hover:bg-white font-medium">Задать вопрос</a>
        </div>
      </section>
    </div>
  );
}







