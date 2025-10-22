'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import cases from '@/public/cms/cases.json';

interface CaseStudy {
  slug: string;
  title: string;
  shortDescription: string;
  category: string;
  year: string;
  coverImage: string;
  results: Array<{ value: string }>;
  images?: Array<{ url: string }>;
}

export default function PortfolioClient() {
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'Веб-разработка', 'SMM', 'Автоматизация', 'Реклама'];

  const filteredCases = cases.cases.filter(
    (c: CaseStudy) => filter === 'all' || c.category === filter
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
        {filteredCases.map((caseStudy: CaseStudy) => (
          <Link
            key={caseStudy.slug}
            href={`/portfolio/${caseStudy.slug}`}
            className="group relative flex flex-col overflow-hidden rounded-[2rem] bg-white/70 transition hover:ring-2 hover:ring-paleTeal"
          >
            {/* Image */}
            <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
              <Image
                src={caseStudy.coverImage}
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
                  {caseStudy.shortDescription}
                </p>
              </div>

              {/* Results Preview */}
              <div className="mt-4">
                <div className="text-xs font-medium uppercase text-slate-500">
                  Ключевые результаты:
                </div>
                <div className="mt-2 text-sm text-slate-600">
                  {caseStudy.results[0]?.value}
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
}
