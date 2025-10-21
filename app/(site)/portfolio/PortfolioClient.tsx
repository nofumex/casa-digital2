'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import cases from '@/public/cms/cases.json';

export default function PortfolioClient() {
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'Веб-разработка', 'SMM', 'Автоматизация', 'Реклама'];

  const filteredCases = cases.cases.filter(
    (c) => filter === 'all' || c.category === filter
  );

  return (
    <div className="mt-12">
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`rounded-full px-4 py-2 text-sm transition ${
              filter === category
                ? 'bg-paleTeal text-slate-900'
                : 'bg-white/70 text-slate-600 hover:bg-white/90'
            }`}
          >
            {category === 'all' ? 'Все проекты' : category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCases.map((caseStudy) => (
          <Link
            key={caseStudy.id}
            href={`/portfolio/${caseStudy.id}`}
            className="group relative flex flex-col overflow-hidden rounded-[2rem] bg-white/70 transition hover:ring-2 hover:ring-paleTeal"
          >
            {/* Image */}
            <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
              <Image
                src={caseStudy.images[0].url}
                alt={caseStudy.title}
                width={640}
                height={360}
                className="object-cover transition group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6">
              <div className="flex-1">
                <h3 className="font-semibold group-hover:text-paleTeal">
                  {caseStudy.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {caseStudy.description}
                </p>
              </div>

              {/* Results Preview */}
              <div className="mt-4">
                <div className="text-xs font-medium uppercase text-slate-500">
                  Ключевые результаты:
                </div>
                <div className="mt-2 text-sm text-slate-600">
                  {caseStudy.results[0]}
                </div>
              </div>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-600">
                  {caseStudy.category}
                </span>
                <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-600">
                  {caseStudy.year}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
      timeline: '8 недель',
      budget: '280 000 ₽'
    },
    {
      id: 4,
      category: 'landing',
      title: 'Лендинг онлайн-курсов',
      description: 'Лендинг с бронированием, оплатой и email-маркетингом',
      problem: 'Низкая конверсия продаж курсов',
      solution: 'Социальные доказательства, срочность, простая оплата, автоматизация',
      results: ['+160% трафик', '+110% конверсия', '+180% продажи', '+90% удержание'],
      technologies: ['Vue.js', 'Stripe', 'Firebase', 'Mailchimp'],
      timeline: '4 недели',
      budget: '168 000 ₽'
    },
    {
      id: 5,
      category: 'automation',
      title: 'Автоматизация интернет-магазина',
      description: 'Интеграции CRM, email-маркетинга и аналитики для магазина',
      problem: 'Ручные процессы тормозили рост',
      solution: 'Автоматизация воронки продаж, интеграции, чат-боты, аналитика',
      results: ['+300% эффективность', '+150% лиды', '+80% продажи', '-70% время'],
      technologies: ['Zapier', 'HubSpot', 'Telegram Bot', 'Analytics'],
      timeline: '5 недель',
      budget: '140 000 ₽'
    },
    {
      id: 6,
      category: 'smm',
      title: 'SMM для клиники',
      description: 'Комплексное ведение соцсетей и таргетированная реклама',
      problem: 'Низкая узнаваемость и присутствие в соцсетях',
      solution: 'Контент-стратегия, таргетинг, управление отзывами, аналитика',
      results: ['+400% подписчики', '+250% вовлечённость', '+180% лиды', '+300% узнаваемость'],
      technologies: ['VK Ads', 'Telegram', 'Canva', 'Analytics'],
      timeline: '3 месяца',
      budget: '80 000 ₽/мес'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="mt-12">
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`rounded-full px-4 py-2 text-sm transition ${
              filter === category
                ? 'bg-paleTeal text-slate-900'
                : 'bg-white/70 text-slate-600 hover:bg-white/90'
            }`}
          >
            {category === 'all' ? 'Все проекты' : category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <article key={project.id} className="rounded-[2rem] bg-white/70 p-6 ring-1 ring-black/5">
            <div className="aspect-[16/10] rounded-[1.5rem] bg-softBlueGray/30 mb-4" aria-hidden />
            
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <span className="text-xs px-2 py-1 rounded-full bg-paleTeal/30 text-slate-700 capitalize">
                {project.category}
              </span>
            </div>
            
            <p className="text-sm text-slate-600 mb-4">{project.description}</p>
            
            <div className="space-y-3">
              <div>
                <div className="text-xs font-medium text-slate-500">Problem:</div>
                <div className="text-xs text-slate-600">{project.problem}</div>
              </div>
              
              <div>
                <div className="text-xs font-medium text-slate-500">Solution:</div>
                <div className="text-xs text-slate-600">{project.solution}</div>
              </div>
              
              <div>
                <div className="text-xs font-medium text-slate-500">Results:</div>
                <div className="text-xs text-slate-600">{project.results.join(', ')}</div>
              </div>
              
              <div>
                <div className="text-xs font-medium text-slate-500">Technologies:</div>
                <div className="text-xs text-slate-600">{project.technologies.join(', ')}</div>
              </div>
              
              <div className="flex justify-between items-center pt-3 border-t border-slate-200">
                <div className="text-xs text-slate-500">
                  <div>Срок: {project.timeline}</div>
                  <div>Бюджет: {project.budget}</div>
                </div>
                <button className="text-xs text-paleTeal hover:underline">
                  Подробнее
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}



