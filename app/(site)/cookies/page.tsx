export const metadata = { 
  title: 'Политика использования файлов cookie - Casa Digital',
  description: 'Узнайте, как Casa Digital использует файлы cookie и аналогичные технологии на нашем сайте. Ознакомьтесь с вашими возможностями управления настройками cookie.'
};

export default async function CookiesPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ''}/cms/cookies.md`, { cache: 'no-store' }).catch(()=>null);
  const md = res && res.ok ? await res.text() : '# Cookies\n\nСодержимое будет добавлено.';
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="prose prose-slate max-w-none">
        <div dangerouslySetInnerHTML={{ __html: md.replace(/\n/g,'<br/>') }} />
      </div>
    </div>
  );
}





