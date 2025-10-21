export const metadata = { 
  title: 'Условия использования - Casa Digital',
  description: 'Ознакомьтесь с условиями использования веб-сайта и услуг Casa Digital. Узнайте о своих правах и обязанностях при использовании нашей платформы.'
};

export default async function TermsPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ''}/cms/terms.md`, { cache: 'no-store' }).catch(()=>null);
  const md = res && res.ok ? await res.text() : '# Условия использования\n\nСодержимое будет добавлено.';
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="prose prose-slate max-w-none">
        <div dangerouslySetInnerHTML={{ __html: md.replace(/\n/g,'<br/>') }} />
      </div>
    </div>
  );
}





