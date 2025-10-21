import { notFound } from 'next/navigation';
import cases from '@/public/cms/cases.json';
import { CaseStudyClient } from './CaseStudyClient';

export async function generateStaticParams() {
  return cases.cases.map((caseStudy: any) => ({
    slug: (caseStudy as any).slug || (caseStudy as any).id,
  }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const rawCase = cases.cases.find((c: any) => (c as any).slug === params.slug || (c as any).id === params.slug);

  if (!rawCase) {
    notFound();
  }

  // Transform the case data to match CaseStudyClient expectations
  const caseStudy = {
    id: (rawCase as any).slug || (rawCase as any).id,
    title: rawCase.title,
    client: rawCase.client,
    category: rawCase.category,
    timeline: rawCase.timeline,
    year: rawCase.year,
    description: (rawCase as any).shortDescription || (rawCase as any).fullDescription || '',
    challenge: (rawCase as any).task || '',
    solution: (rawCase as any).solution || '',
    results: rawCase.results || [],
    technologies: rawCase.technologies || [],
    features: rawCase.features || [],
    testimonial: (rawCase as any).review ? {
      text: (rawCase as any).review.text,
      author: (rawCase as any).review.author,
      position: (rawCase as any).review.position || ''
    } : undefined,
    // Transform gallery array into images array with url/alt structure
    images: ((rawCase as any).gallery || []).map((imgPath: string, idx: number) => ({
      url: imgPath,
      alt: `${rawCase.title} - изображение ${idx + 1}`,
      description: idx === 0 ? 'Главная страница' : idx === 1 ? 'Каталог' : idx === 2 ? 'Корзина' : idx === 3 ? 'Админка' : undefined
    }))
  };

  return <CaseStudyClient caseStudy={caseStudy} />;
}