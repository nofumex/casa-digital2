export const metadata = { 
  title: 'Наши услуги - Веб-разработка, SMM, Реклама и Автоматизация',
  description: 'Полный спектр цифровых услуг для роста вашего бизнеса. Веб-разработка, SMM и контент, управление рекламой и автоматизация бизнеса.'
};

import Link from 'next/link';

async function getServices() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ''}/cms/services.json`, { cache: 'no-store' });
    if (!res.ok) return [] as any[];
    const obj = await res.json();
    return Object.entries(obj || {}).map(([slug, v]: any)=> ({ slug, ...(v||{}), title: (v as any)?.title || slug }));
  } catch { return [] as any[]; }
}

/* fallback when file is absent */
const fallback = [
  {
    slug: 'web-development',
    title: 'Веб-разработка',
    description: 'Современные сайты на React/Next.js с SEO и быстрой загрузкой',
    icon: '💻',
    includes: [
      'Современный стек (React, Next.js, TypeScript)',
      'SEO и оптимизация скорости',
      'Адаптивный дизайн для всех устройств',
      'Интеграция CMS и платежей',
      'Техподдержка и обновления'
    ],
    process: [
      'Анализ требований и спецификация',
      'Дизайн и прототипирование',
      'Разработка и тестирование',
      'Запуск и оптимизация'
    ],
    timeline: '2–8 недель',
    price: 'от 100 800 ₽'
  },
  {
    slug: 'smm',
    title: 'SMM и контент',
    description: 'Управление социальными сетями, создание контента и таргетированная реклама',
    icon: '📄',
    includes: [
      'Стратегия в соцсетях',
      'Создание визуального контента',
      'Таргетированная реклама',
      'Аналитика и отчетность',
      'Работа с блогерами'
    ],
    process: [
      'Аудит присутствия',
      'Контент-план',
      'Создание и публикация контента',
      'Анализ результатов и оптимизация'
    ],
    timeline: '1–3 месяца',
    price: 'от 50 400 ₽/мес'
  },
  {
    slug: 'ppc',
    title: 'Контекстная реклама',
    description: 'Настройка и оптимизация кампаний в Google Ads и Яндекс Директ',
    icon: '📈',
    includes: [
      'Настройка Google Ads и Яндекс Директ',
      'Реклама в VK и Telegram',
      'A/B тестирование',
      'Оптимизация ставок и бюджета',
      'Детальная аналитика и отчеты'
    ],
    process: [
      'Анализ конкурентов и ключевых слов',
      'Создание кампаний',
      'Настройка отслеживания конверсий',
      'Оптимизация и масштабирование'
    ],
    timeline: '1–2 недели',
    price: 'от 42 000 ₽'
  },
  {
    slug: 'automation',
    title: 'Автоматизация',
    description: 'CRM, интеграции, чат-боты и автоматизация рабочих процессов',
    icon: '⚙️',
    includes: [
      'Настройка CRM систем',
      'Интеграции между сервисами',
      'Чат-боты для Telegram и сайта',
      'Автоматизация email-рассылок',
      'Аналитика и отчетность'
    ],
    process: [
      'Анализ бизнес-процессов',
      'Выбор и настройка инструментов',
      'Внедрение интеграций',
      'Обучение команды'
    ],
    timeline: '2–6 недель',
    price: 'от 67 200 ₽'
  }
];

export default async function ServicesPage() {
  const services = await getServices();
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      {/* Hero */}
      <div className="text-center">
        <h1 className="text-4xl font-semibold">Наши услуги</h1>
        <p className="mt-4 text-xl text-slate-600">Полный спектр цифровых услуг для роста вашего бизнеса</p>
      </div>

      {/* Services */}
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {services.map((service) => (
          <section key={service.slug} className="rounded-[2rem] bg-white/70 p-8 ring-1 ring-black/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl">{service.icon}</div>
              <h2 className="text-2xl font-semibold">{service.title}</h2>
            </div>
            
            <p className="text-lg text-slate-600 mb-6">{service.description}</p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-slate-800">Что входит:</h3>
                <ul className="mt-2 space-y-1">
                  {service.includes.map((item: string, idx: number) => (
                    <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                      <span className="text-paleTeal">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-slate-800">Процесс:</h3>
                <ul className="mt-2 space-y-1">
                  {service.process.map((step: string, idx: number) => (
                    <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                      <span className="text-paleTeal">{String(idx + 1)}.</span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex justify-between items-center pt-4 border-t border-slate-200">
                <div>
                  <div className="text-sm text-slate-500">Сроки: {service.timeline}</div>
                  <div className="text-lg font-semibold text-slate-800">{service.price}</div>
                </div>
                <div className="flex gap-2">
                  <Link href={`/services/${service.slug}`} className="rounded-full bg-paleTeal px-4 py-2 text-slate-900 text-sm font-medium">Подробнее</Link>
                  <Link href="/contact" className="rounded-full border border-softBlueGray/50 px-4 py-2 text-sm hover:bg-white">Заказать</Link>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold">Нужно индивидуальное решение?</h2>
        <p className="mt-2 text-slate-600">Разработаем решение специально под ваш бизнес</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="rounded-full bg-softBlueGray/30 px-6 py-3 hover:bg-softBlueGray/40 font-medium">Обсудить проект</Link>
          <a href="https://t.me/CasaAgency" target="_blank" rel="noreferrer" className="rounded-full border border-softBlueGray/50 px-6 py-3 hover:bg-white font-medium">Написать в Telegram</a>
        </div>
      </div>
    </div>
  );
}







