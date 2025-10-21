'use client';

import Link from 'next/link';
import Image from 'next/image';
import cases from '@/public/cms/cases.json';

export function PortfolioClientGrid() {
  // Select 4 featured cases to show on the homepage
  const featuredCases = cases.cases.slice(0, 4);

  return (
    <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {featuredCases.map((caseStudy) => (
        <Link
          key={(caseStudy as any).slug || (caseStudy as any).id}
          href={`/portfolio/${(caseStudy as any).slug || (caseStudy as any).id}`}
          className="group relative flex flex-col overflow-hidden rounded-[2rem] bg-white/70 transition hover:ring-2 hover:ring-paleTeal"
        >
          {/* Image */}
          <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
            {(() => {
              const imgFromImages = Array.isArray((caseStudy as any).images) ? (caseStudy as any).images?.[0]?.url : undefined;
              const cover = (caseStudy as any).coverImage as string | undefined;
              const galleryFirst = Array.isArray((caseStudy as any).gallery) ? (caseStudy as any).gallery?.[0] : undefined;
              const src = imgFromImages || cover || galleryFirst || '/icons/logo.png';
              return (
                <Image
                  src={src}
                  alt={caseStudy.title}
                  width={640}
                  height={360}
                  className="object-cover transition group-hover:scale-105"
                />
              );
            })()}
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col p-6">
            <div className="flex-1">
              <h3 className="font-semibold group-hover:text-paleTeal line-clamp-2">
                {caseStudy.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 line-clamp-2">
                {(caseStudy as any).shortDescription || (caseStudy as any).description || ''}
              </p>
            </div>

            {/* Results Preview */}
            <div className="mt-4">
              <div className="text-xs font-medium uppercase text-slate-500">
                Результат:
              </div>
              <div className="mt-1 text-sm text-slate-600">
                {(() => {
                  const r = (caseStudy as any).results?.[0];
                  if (!r) return null;
                  if (typeof r === 'string') return r;
                  if (typeof r === 'object') return r.value || r.title || '';
                  return '';
                })()}
              </div>
            </div>

            {/* Category */}
            <div className="mt-4">
              <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-600">
                {caseStudy.category}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}