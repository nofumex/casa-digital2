export const metadata = { 
  title: 'Часто задаваемые вопросы - Casa Digital',
  description: 'Ответы на популярные вопросы о наших услугах веб-разработки, SMM, контекстной рекламы и автоматизации. Информация о ценах, сроках и процессе работы.'
};

async function getFaq() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ''}/cms/faq.json`, { cache: 'no-store' });
    return res.ok ? await res.json() : { items: [] };
  } catch { return { items: [] }; }
}

export default async function FaqPage() {
  const faq = await getFaq();
  const faqs: { question: string; answer: string }[] = faq.items || [];
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      {/* Hero */}
      <div className="text-center">
        <h1 className="text-4xl font-semibold">Часто задаваемые вопросы</h1>
        <p className="mt-4 text-xl text-slate-600">Ответы на популярные вопросы о наших услугах и процессе работы</p>
      </div>

      {/* FAQ Grid */}
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {faqs.map((faq, index) => (
          <div key={index} className="rounded-[2rem] bg-white/70 p-6 ring-1 ring-black/5">
            <h3 className="text-lg font-semibold text-slate-800 mb-3">{faq.question}</h3>
            <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold">Остались вопросы?</h2>
        <p className="mt-2 text-slate-600">Мы всегда готовы помочь! Свяжитесь с нами для бесплатной консультации</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href="/contact" className="rounded-full bg-paleTeal px-6 py-3 text-slate-900 font-medium">Связаться с нами</a>
          <a href="https://t.me/CasaAgency" target="_blank" rel="noreferrer" className="rounded-full border border-softBlueGray/50 px-6 py-3 hover:bg-white font-medium">Спросить в Telegram</a>
        </div>
      </div>
    </div>
  );
}





